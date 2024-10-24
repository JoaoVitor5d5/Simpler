const express = require("express");
const app = express();
const ejs = require("ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
var http = require("http");
const axios = require('axios');
var formidable = require('formidable');
var fs = require('fs');
const ytdl = require('ytdl-core');

const mysql = require("mysql2");
const crypto = require("crypto");
const path = require("path");
var bcrypt = require("bcrypt");
var session = require("express-session");
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser');

apikey = '77999a28d87fb265f48a63353922d11a';
category = 'business';
url = 'https://gnews.io/api/v4/top-headlines?category=' + category + '&lang=pt&country=br&max=10&apikey=' + apikey;
const cron = require("node-cron");
const { format, parseISO } = require('date-fns');
const { error } = require("console");



var saltRounds = 10;

app.use(
  session({
    secret: "2C44-4D44-WppQ38S",
    resave: false,
    saveUninitialized: true,
  })
);


const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false,
  auth: {
    user: "ecosimpler@outlook.com",
    pass: "$impler1234",
  },
});


const db = mysql.createConnection({
    host: 'mysql-2884e3f3-ecosimpler.e.aivencloud.com',
    user: 'avnadmin',
    port: 20757,
    password: 'AVNS_gXnH2E84btTndoYaaOF',
    database: 'EcoSimpler'
  });

  db.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
      return;
    }
    console.log('Conexão ao banco de dados bem-sucedida');

});

//0 0 1 */6 *
  cron.schedule("*/30 * * * *", function(){
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        articles = data.articles;
    
        for (var i = 0; i < articles.length; i++) {
          
          (function(index) {
  
            db.query("SELECT * FROM noticias WHERE titulo = ?", [articles[index]['title']], (err, results) => {
              if (err) throw err;
              if (results.length !== 0) {
                
              } else {
                const parsedDate = parseISO(articles[index]['publishedAt']);
                const formattedDate = format(parsedDate, 'yyyy-MM-dd');
                const formattedTime = format(parsedDate, 'HH:mm:ss');

                // Realizar a inserção no banco de dados com data dividida em dia e hora
                var sql = "INSERT INTO noticias (titulo, descricao, link, imagem, data, hora) VALUES ?";
                var values = [
                  [
                    articles[index]['title'],
                    articles[index]['description'],
                    articles[index]['url'],
                    articles[index]['image'],
                    formattedDate,
                    formattedTime
                  ]
                ];
                db.query(sql, [values], function (err, result) {
                  if (err) throw err;
                });
              }
            });
          })(i);
        }
      });
    });


cron.schedule("0 0 * * *", async function(){

  try {
    // Selecione notícias com data de publicação antes de dois meses atrás
    const results = await db.query("SELECT * FROM noticias");

    if (results.length > 0) {
      // Remova as notícias antigas
      await db.query("DELETE * FROM noticias");
      console.log(`${results.length} notícias removidas.`);
    } else {
      console.log("Não há notícias antigas para remover.");
    }
  } catch (error) {
    console.error('Erro ao verificar e excluir notícias antigas:', error);
  }
});

cron.schedule("*/4 * * * *", async function(){
  try {
    // Fazendo uma solicitação à API da HG Brasil
    const response = 'https://api.hgbrasil.com/finance?format=json-cors&key=b672f973';

    // Extraindo os dados relevantes do JSON retornado pela API
    const dados = await fetch(response);
    const valores = await dados.json();
    const moedas = valores.results.currencies;
    const dolar = valores.results.currencies.USD;
    const euro = valores.results.currencies.EUR;
    const poundSterling = valores.results.currencies.GBP;
    const argentinePeso = valores.results.currencies.ARS;
    const canadianDollar = valores.results.currencies.CAD;
    const australianDollar = valores.results.currencies.AUD;
    const japaneseYen = valores.results.currencies.JPY;
    const renminbi = valores.results.currencies.CNY;
    const bitcoin = valores.results.currencies.BTC;
    const bovespa = valores.results.stocks.IBOVESPA;
    const ifix = valores.results.stocks.IFIX;
    const nasdaq = valores.results.stocks.NASDAQ;
    const dowJones = valores.results.stocks.DOWJONES;
    const cac = valores.results.stocks.CAC;
    const nikkei = valores.results.stocks.NIKKEI;   

    const taxas = valores.results.taxes[0]; // Assumindo que há apenas uma entrada no array de taxes

    const dataAtual = new Date();
    const dia = dataAtual.toISOString().split('T')[0];
    const hora = dataAtual.getHours();
    const minuto = dataAtual.getMinutes();

    function inserirMoedaNaTabela(moeda, tabela) {
      var sql = `INSERT INTO ${tabela} (dia, hora, minuto, valor) VALUES ?`;
      var values = [[dia, hora, minuto, moeda.buy]];
    
      db.query(sql, [values], function (err, result) {
        if (err) throw err;
      });
    }
    
    // Chamando a função para cada moeda
    inserirMoedaNaTabela(dolar, 'tabela_dolar');
    inserirMoedaNaTabela(euro, 'tabela_euro');
    inserirMoedaNaTabela(poundSterling, 'tabela_pound_sterling');
    inserirMoedaNaTabela(argentinePeso, 'tabela_argentine_peso');
    inserirMoedaNaTabela(canadianDollar, 'tabela_canadian_dollar');
    inserirMoedaNaTabela(australianDollar, 'tabela_australian_dollar');
    inserirMoedaNaTabela(japaneseYen, 'tabela_japanese_yen');
    inserirMoedaNaTabela(renminbi, 'tabela_renminbi');
    inserirMoedaNaTabela(bitcoin, 'tabela_bitcoin');

    function inserirIndiceNaTabela(indice, tabela) {
      var sql = `INSERT INTO ${tabela} (dia, hora, minuto, pontuacao) VALUES ?`;
      var values = [[dia, hora, minuto, indice.points]]; // Ajuste para pegar o valor do índice
    
      db.query(sql, [values], function (err, result) {
        if (err) throw err;
      });
    }
    
    // Chamando a função para cada índice
    inserirIndiceNaTabela(bovespa, 'tabela_bovespa');
    inserirIndiceNaTabela(ifix, 'tabela_ifix');
    inserirIndiceNaTabela(nasdaq, 'tabela_nasdaq');
    inserirIndiceNaTabela(dowJones, 'tabela_dowjones');
    inserirIndiceNaTabela(cac, 'tabela_cac');
    inserirIndiceNaTabela(nikkei, 'tabela_nikkei');
    
    const cdi = taxas.cdi;
    const selic = taxas.selic;

    function inserirTaxaNaTabela(taxas, taxa, tabela) {
      var verificaDuplicataSql = `SELECT * FROM ${tabela} WHERE data = ? LIMIT 1`;

      db.query(verificaDuplicataSql, [taxas.date], function (err, rows) {
        if (err) throw err;

        // Se não houver duplicatas, insere os dados
        if (rows.length === 0) {
            var inserirSql = `INSERT INTO ${tabela} (data, valor) VALUES ?`;
            var values = [[taxas.date, taxa]]; // Ajuste para pegar o valor da taxa

            db.query(inserirSql, [values], function (err, result) {
                if (err) throw err;
              });
          } else {
            console.log(`Duplicata encontrada para a data ${taxas.date}. Não foi realizada a inserção.`);
          }
          });
    }
    
    // Chamando a função para CDI e SELIC
    inserirTaxaNaTabela(taxas, cdi, 'tabela_cdi');
    inserirTaxaNaTabela(taxas, selic, 'tabela_selic');
  } catch (error) {
      console.error('Erro ao obter dados da API:', error);
      res.status(500).send('Erro interno do servidor');
  }
});


app.post("/cadastrar", function (req, res) {
  const email = req.body.email;
  const nome = req.body.nome;
  const password = req.body.senha;
  db.query(
    "SELECT * FROM usuarios WHERE email = ?",
    [email],
    (err, results) => {
      if (err) throw err;
      if (results.length != 0) {
        req.session.mensagem = "Email já Cadastrado Para Login";
        res.redirect("/login");
      } else {
        db.query(
          "SELECT * FROM usuariosTeste WHERE email = ?",
          [email],
          (err, results) => {
            if (err) throw err;
            if (results.length != 0) {
              req.session.mensagem = "Email já Cadastrado Para Validação";
              res.redirect("/cadastro");
            } else {
        const configEmail = {
          from: "EcoSimpler <EcoSimpler@outlook.com>",
          to: email,
          subject: "Confirmação de email",
          html:
            "<h1>Olá " +
            nome +
            "</h1><br><p> Seja bem vindo ao Eco$impler, seu ambiente de estudos de economia.</p><br><p>para confirmar seu email clique no seguinte link: </p> <a href='http://localhost:3000/validacao" +
            email +
            "'> validar</a>",
        };
        
        bcrypt.hash(password, saltRounds, function (err, hash) {
          if (err) throw err;

          var sql = "INSERT INTO usuariosTeste (nome, email, senha) VALUES ?";
          var values = [[nome, email, hash]];
          db.query(sql, [values], function (err, result) {
            if (err) throw err;
            transporter.sendMail(configEmail);
            res.redirect("/teste" + email);
          });
        });
      }
    })
  }
  });
});

app.get('/noticias', function(req, res){
  var data = new Date();
  var data2 = format(data, 'yyyy-MM-dd');
  var sql = "SELECT * FROM `noticias` WHERE data = ? ORDER BY `noticias`.`hora` DESC";
  db.query(sql, [data2], function(err, result){
    if (err) throw err;
    var data1 = new Date();
    var data3 = format(data1, 'dd-MM-yyyy');
    if (req.session.loggedin) {
      res.render("noticias.ejs", { itens: result, session: req.session, data: data3});
    } else {
      res.redirect("/login");
    }
  });
});



app.get('/graf', function(req, res){
  var data = new Date();
  var data2 = format(data, 'yyyy-MM-dd');
  var sql = "SELECT * FROM `tabela_dolar` WHERE dia = ?";
  var sql1 = "SELECT * FROM `tabela_euro` WHERE dia = ?";
  var sql2 = "SELECT * FROM `tabela_argentine_peso` WHERE dia = ?";
  var sql3 = "SELECT * FROM `tabela_bitcoin` WHERE dia = ?";
  var sql4 = "SELECT * FROM `tabela_canadian_dollar` WHERE dia = ?";
  var sql5 = "SELECT * FROM `tabela_japanese_yen` WHERE dia = ?";
  var sql6 = "SELECT * FROM `tabela_pound_sterling` WHERE dia = ?";
  var sql7 = "SELECT * FROM `tabela_renminbi` WHERE dia = ?";
  var sql8 = "SELECT * FROM `tabela_australian_dollar` WHERE dia = ?";
  db.query(sql1, [data2], function(err, result1){
    const ultimaChamada1 = result1[result1.length - 1];
    if (err) throw err;
  
  db.query(sql2, [data2], function(err, result2){
    const ultimaChamada2 = result2[result2.length - 1];
    if (err) throw err;
  
  db.query(sql3, [data2], function(err, result3){
    const ultimaChamada3 = result3[result3.length - 1];
    if (err) throw err;
  
  db.query(sql4, [data2], function(err, result4){
    const ultimaChamada4 = result4[result4.length - 1];
    if (err) throw err;
  
  db.query(sql5, [data2], function(err, result5){
    const ultimaChamada5 = result5[result5.length - 1];
    if (err) throw err;
  
  db.query(sql6, [data2], function(err, result6){
    const ultimaChamada6 = result6[result6.length - 1];
    if (err) throw err;

  db.query(sql7, [data2], function(err, result7){
    const ultimaChamada7 = result7[result7.length - 1];
    if (err) throw err;
  
  db.query(sql8, [data2], function(err, result8){
    const ultimaChamada8 = result8[result8.length - 1];
    if (err) throw err;
  
  db.query(sql, [data2], function(err, result){
    const ultimaChamada = result[result.length - 1];
    if (err) throw err;
    var data1 = new Date();
    var data3 = format(data1, 'dd-MM-yyyy');
    if (req.session.loggedin) {
      res.render("graf.ejs", { dol: result,euro: result1,arg: result2, bit: result3, cad: result4, yen: result5, lib: result6, ren: result7, aus: result8, session: req.session, data: data3, valDol: ultimaChamada.valor, valEur: ultimaChamada1.valor, valArg: ultimaChamada2.valor, valBit: ultimaChamada3.valor, valCad: ultimaChamada4.valor, valYen: ultimaChamada5.valor, valLib: ultimaChamada6.valor, valRen: ultimaChamada7.valor, valAus: ultimaChamada8.valor});
    } else {
      res.redirect("/login");
    }
  });
});
});
});
});
});
});
});
});
});

app.get('/graf2', function(req, res){
  var data = new Date();
  var data2 = format(data, 'yyyy-MM-dd');
  var sql = "SELECT * FROM `tabela_bovespa` WHERE dia = ?";
  var sql1 = "SELECT * FROM `tabela_cac` WHERE dia = ?";
  var sql2 = "SELECT * FROM `tabela_cdi`";
  var sql3 = "SELECT * FROM `tabela_dowjones` WHERE dia = ?";
  var sql4 = "SELECT * FROM `tabela_ifix` WHERE dia = ?";
  var sql5 = "SELECT * FROM `tabela_nasdaq` WHERE dia = ?";
  var sql6 = "SELECT * FROM `tabela_nikkei` WHERE dia = ?";
  var sql7 = "SELECT * FROM `tabela_selic`";
  db.query(sql1, [data2], function(err, result1){
    const ultimaChamada1 = result1[result1.length - 1];
    if (err) throw err;
  
  db.query(sql2, [data2], function(err, result2){
    const ultimaChamada2 = result2[result2.length - 1];
    const cdi1 = ultimaChamada2.data;
    const cdi2 = ultimaChamada2.valor;
    if (err) throw err;
  
  db.query(sql3, [data2], function(err, result3){
    const ultimaChamada3 = result3[result3.length - 1];
    if (err) throw err;
  
  db.query(sql4, [data2], function(err, result4){
    const ultimaChamada4 = result4[result4.length - 1];
    if (err) throw err;
  
  db.query(sql5, [data2], function(err, result5){
    const ultimaChamada5 = result5[result5.length - 1];
    if (err) throw err;
  
  db.query(sql6, [data2], function(err, result6){
    const ultimaChamada6 = result6[result6.length - 1];
    if (err) throw err;

  db.query(sql7, [data2], function(err, result7){
    const ultimaChamada7 = result7[result7.length - 1];
    const sel1 = ultimaChamada7.data;
    const sel2 = ultimaChamada7.valor;
    if (err) throw err;
  
  
  db.query(sql, [data2], function(err, result){
    const ultimaChamada = result[result.length - 1];
    if (err) throw err;
    var data1 = new Date();
    var data3 = format(data1, 'dd-MM-yyyy');
    if (req.session.loggedin) {
      res.render("graf2.ejs", { bov: result,cac: result1, dow: result3, ifix: result4, nas: result5, nik: result6, session: req.session, data: data3, valBov: ultimaChamada.pontuacao, valCac: ultimaChamada1.pontuacao, valCdi: cdi1, valCDI: cdi2, valDow: ultimaChamada3.pontuacao, valIfix: ultimaChamada4.pontuacao, valNas: ultimaChamada5.pontuacao, valNik: ultimaChamada6.pontuacao, valSel: sel1, valSel2: sel2});
    } else {
      res.redirect("/login");
    }
  });
});
});
});
});
});
});
});
});


app.get('/validacao:email', function(req, res){
  const email = req.params.email;
  db.query("SELECT * FROM usuariosTeste WHERE email = ?", [email], (err, results) => {
    if (err) throw err;
    if (results.length == 0) {
      req.session.mensagem = "Cadastro Já Validado";
      res.redirect('/login');
    } else {
      results.forEach(function(results){
      var sql = "INSERT INTO usuarios (nome, email, senha) VALUES ?";
          var values = [[results.nome, results.email, results.senha]];
          db.query(sql, [values], function (err, results2) {
            if (err) throw err;
            db.query("DELETE from usuariosTeste WHERE email = ?",[results.email], function (err, results3){
            req.session.mensagem = "Cadastro Confirmado";
            res.redirect('/login');
            });
          });
          });
    }
  });
})

app.get('/teste:email', function(req, res){
  const email = req.params.email;
  res.render('teste.ejs', {email: email});
})

app.get('/troca:email', function(req, res){
  var mensagem = req.session.mensagem;
  req.session.mensagem = undefined;
  req.session.email = req.params.email;
  res.render('troca.ejs', { mensagem: mensagem });
})

app.post('/troca', function(req, res){
  const email = req.session.email;
  const password = req.body.senha;
  req.session.email = undefined;
  bcrypt.hash(password, saltRounds, function (err, hash) {
    if (err) throw err;
    db.query("UPDATE usuarios SET senha = ? WHERE email = ?", [hash, email], function(err, result){
      if (err) throw err;
      req.session.mensagem = "Senha Alterada Com Sucesso";
      res.redirect('/login');
    })
  });
})

app.get('/mudar', function(req, res){
  if(req.session.loggedin && req.session.adm == 's'){
  var mensagem = req.session.mensagem;
  req.session.mensagem = undefined;
  res.render('mudar.ejs', { mensagem: mensagem });
  }
  else{
    res.redirect('/login')
  }
  
})

app.post('/mudar', function(req, res){
  if(req.session.loggedin && req.session.adm == 's'){
  const email = req.session.username;
  const password = req.body.senha;
  bcrypt.hash(password, saltRounds, function (err, hash) {
    if (err) throw err;
    db.query("UPDATE adm SET senha = ? WHERE email = ?", [hash, email], function(err, result){
      if (err) throw err;
      req.session.loggedin = false;
      req.session.mensagem = "Senha Alterada Com Sucesso";
      res.redirect('/adm');
    })
  });
  }
  else{
    res.redirect('/login')
  }
})

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.senha;

  db.query(
    "SELECT * FROM usuarios WHERE email = ?",
    [email],
    (err, results) => {
      if (err) throw err;

      if (results.length === 1) {
        const user = results[0];
        bcrypt.compare(password, user.senha, (err, passwordMatch) => {
          if (err) throw err;

          if (passwordMatch) {
            req.session.loggedin = true;
            req.session.username = user.email;
            req.session.nick = user.nome;
            req.session.di = user.id;
            console.log(user.id);
            console.log(req.session.di);
            res.redirect("/graf");
          } else {
            req.session.mensagem = "Senha incorreta";
            res.redirect("/login");
          }
        });
      } else {
        req.session.mensagem = "Usuário não encontrado";
        res.redirect("/login");
      }
    }
  );
});

app.post("/loginAdm", (req, res) => {
  const email = req.body.email;
  const password = req.body.senha;

  db.query(
    "SELECT * FROM adm WHERE email = ?",
    [email],
    (err, results) => {
      if (err) throw err;

      if (results.length === 1) {
        const user = results[0];
        bcrypt.compare(password, user.senha, (err, passwordMatch) => {
          if (err) throw err;

          if (passwordMatch) {
            req.session.loggedin = true;
            req.session.username = user.email;
            req.session.nick = user.nome;
            req.session.adm = 's';
            res.redirect("/admPage");
          } else {
            req.session.mensagem = "Senha incorreta";
            res.redirect("/adm");
          }
        });
      } else {
        req.session.mensagem = "Usuário não encontrado";
        res.redirect("/adm");
      }
    }
  );
});

app.get('/admPage', function(req, res) {

  if(req.session.loggedin && req.session.adm == 's'){
    db.query("SELECT * FROM usuarios", function(err, result){
      db.query("SELECT * FROM cursos WHERE pub = 'sim'", function(err, results){
        const cursos = results ? results.length : 0;
        db.query("SELECT * FROM aulas", function(err, result2){
    res.render('admPage.ejs', {session: req.session, user: result.length, itens: results, cur: cursos, aul: result2.length})
    })
  })
    })
  }else{
    res.redirect('/login')
  }
})

app.get('/cursosProd', function(req, res) {
  if(req.session.loggedin && req.session.adm == 's'){
    db.query("SELECT * FROM cursos WHERE pub = 'nao'", function(err, result){
      if(err){throw err};
      res.render('cursosProd.ejs', {session: req.session, itens: result});
    })
  }else{
    res.redirect('/')
  }
})

app.get('/novoCurso', function(req, res) {
  if(req.session.loggedin && req.session.adm == 's'){
    var mensagem = req.session.mensagem;
    req.session.mensagem = undefined;
    res.render('novoCurso.ejs', {session: req.session, mensagem: mensagem})
  }else{
    res.redirect('/')
  }
})

app.post("/cadastrarCurso", function (req, res) {
  const titulo = req.body.titulo;
  const descricao = req.body.descricao;
  const tag = req.body.tag;
  if(tag == 'tag'){
    req.session.mensagem = "selecione uma tag";
    res.redirect("/novoCurso");
  }
  else{
  db.query(
    "SELECT * FROM cursos WHERE titulo = ?",
    [titulo],
    (err, results) => {
      if (err) throw err;
      
      if (results.length != 0) {
        req.session.mensagem = "Já existe um curso com este título!!";
        res.redirect("/novoCurso");
      } else {
        var sql = "INSERT INTO cursos (titulo, descricao, tag, pub) VALUES ?";
          var values = [[titulo, descricao, tag, 'nao']];
          db.query(sql, [values], function (err, result) {
            if (err) throw err;
            res.redirect('/cursosProd');
          })
        }
      })
    }
    })

    app.get('/adicionarFavorito:id', function(req, res) {
      const id = req.params.id;
      if(req.session.loggedin){
      var sql = 'INSERT INTO registCurso (cid, user_id) VALUES ?';
      var values = [[id, req.session.di]];
      db.query(sql, [values], function(err, result){
      if(err) throw err;
      res.redirect('/mcursos');
      });
    }else{
      res.redirect('/')
    }
    });

    app.get('/removerFavorito:id', function(req, res){
      const id = req.params.id;
      if(req.session.loggedin){
        var sql = 'DELETE FROM registCurso WHERE cid = ? AND user_id = ?';
        var values = [id, req.session.di];
        db.query(sql, values, function(err, result){
        if(err) throw err;
        console.log("A exclusão foi realizada com sucesso.");
        res.redirect('/mcursos');
        });
      }else{
        res.redirect('/')
      }
    })
    
    app.get('/mcursos', function(req, res) {
      if(req.session.loggedin){
      db.query("SELECT * FROM registCurso WHERE `user_id` = ?", [req.session.di], function(err, result){
        if(err) throw err;
        var teste = result.length;
        var cursos = [];
        console.log(result.length);
        for(var i = 0; i < result.length; i++) {
          cursos.push(result[i].cid);
      }
      if(teste === 0){
        res.render('mcursos2.ejs', {session: req.session})
      } else {
        db.query("SELECT * FROM cursos WHERE id IN (?)", [cursos], function(err, results){
          if(err) throw err;
          res.render('mcursos.ejs', {itens: results, session: req.session});
        
        })
      }
      });
    }else{
      res.redirect('/')
    }
    });
    

app.get('/detalhe:tit', function(req, res) {
  const titulo = req.params.tit;
  var mensagem = req.session.mensagem;
  req.session.mensagem = undefined;
  console.log(titulo);
  if(req.session.loggedin && req.session.adm == 's'){
    db.query(
      "SELECT * FROM cursos WHERE id = ?",
      [titulo],
      (err, results) => {
        const desc = results[0]['descricao'];
        const id = results[0]['id'];
        if (err) throw err;
        db.query(
          "SELECT * FROM aulas WHERE curso_id = ?",
          [id],
          (err, result) => {
            db.query(
              "SELECT * FROM registCurso WHERE cid = ?",
              [id],
              (err, result3) => {
                const registros = result3.length;
            db.query(
              "SELECT * FROM prova WHERE curso_id = ?",
              [id],
              (err, result2) => {
              if (err) throw err;
              if(result2.length <= 0){
                const provaF = '/adicionarProva'+id;
                const provaT = 'Adicionar Prova';
                res.render('detalhe.ejs', {mensagem: mensagem, session: req.session, itens: result, titulo: titulo, desc: desc, id: id, prova: provaF, provaT: provaT, reg: registros})
              }else{
                const provaF = '/verProva'+id;
                const provaT = 'Ver Prova';
                res.render('detalhe.ejs', {mensagem: mensagem, session: req.session, itens: result, titulo: titulo, desc: desc, id: id, prova: provaF, provaT: provaT, reg: registros})
              }       
          })
        })
          })
      })
  }else{
    res.redirect('/')
  }
})


app.get('/2detalhe:tit', function(req, res) {
  const id = req.params.tit;
  db.query("SELECT * FROM aulas WHERE id = ?", [id], function(err, result){
    if(err) throw err;
    var cont = result[0]['conteudo']
    var id = result[0]['curso_id']
    if(result[0]['tipo'] == 'video'){
      res.render('aulaVideo.ejs', {itens: cont, id: id})
    } else {
      res.render('aulaTexto.ejs', {itens: cont, id: id})
    }
  })
})

app.get('/3detalhe:tit', function(req, res) {
  const id = req.params.tit;
  if(req.session.loggedin){
  db.query("SELECT * FROM aulas WHERE id = ?", [id], function(err, result){
    if(err) throw err;
    var cont = result[0]['conteudo']
    var id = result[0]['curso_id']
    if(result[0]['tipo'] == 'video'){
      res.render('2aulaVideo.ejs', {itens: cont, id: id})
    } else {
      res.render('2aulaTexto.ejs', {itens: cont, id: id})
    }
  })
  }else{
    res.redirect('/')
  }
})

app.get('/4detalhe:tit', function(req, res) {
  const titulo = req.params.tit;
  var mensagem = req.session.mensagem;
  req.session.mensagem = undefined;
  if(req.session.loggedin){
    db.query(
      "SELECT * FROM cursos WHERE id = ?",
      [titulo],
      (err, results) => {
        const desc = results[0]['descricao'];
        const id = results[0]['id'];
        if (err) throw err;
        db.query(
          "SELECT * FROM aulas WHERE curso_id = ?",
          [id],
          (err, result) => {
            var user = req.session.username;
            db.query(
              "SELECT * FROM usuarios WHERE email = ?",
              [user],
              (err, result4) => {
                var idUser = result4[0]['id']
            db.query(
              "SELECT * FROM registCurso WHERE cid = ? AND user_id = ?",
              [id, idUser],
              (err, result3) => {
                if(result3.length <= 0){
                  const provaF = '/adicionarFavorito'+id;
                  const provaT = 'Adicionar aos favoritos';
                  res.render('2detalhe.ejs', {mensagem: mensagem, session: req.session, itens: result, titulo: titulo, desc: desc, id: id, prova: provaF, provaT: provaT})
                }else{
                  const provaF = '/removerFavorito'+id;
                  const provaT = 'Remover dos meus cursos';
                  res.render('2detalhe.ejs', {mensagem: mensagem, session: req.session, itens: result, titulo: titulo, desc: desc, id: id, prova: provaF, provaT: provaT})
                }  
                
        })
          })
        })
      })
  }else{
    res.redirect('/')
  }
})

app.get('/5detalhe:tit', function(req, res) {
  const titulo = req.params.tit;
  var mensagem = req.session.mensagem;
  req.session.mensagem = undefined;
  if(req.session.loggedin && req.session.adm == 's'){
    db.query(
      "SELECT * FROM cursos WHERE id = ?",
      [titulo],
      (err, results) => {
        const desc = results[0]['descricao'];
        const id = results[0]['id'];
        if (err) throw err;
        db.query(
          "SELECT * FROM aulas WHERE curso_id = ?",
          [id],
          (err, result) => {
            db.query(
              "SELECT * FROM registCurso WHERE cid = ?",
              [id],
              (err, result3) => {
                const registros = result3.length;
            db.query(
              "SELECT * FROM prova WHERE curso_id = ?",
              [id],
              (err, result2) => {
              if (err) throw err;
              if(result2.length <= 0){
                const provaF = '/adicionarProva'+id;
                const provaT = 'Adicionar Prova';
                res.render('detalhe2.ejs', {mensagem: mensagem, session: req.session, itens: result, titulo: titulo, desc: desc, id: id, prova: provaF, provaT: provaT, reg: registros})
              }else{
                const provaF = '/verProva'+id;
                const provaT = 'Ver Prova';
                res.render('detalhe2.ejs', {mensagem: mensagem, session: req.session, itens: result, titulo: titulo, desc: desc, id: id, prova: provaF, provaT: provaT, reg: registros})
              }       
          })
        })
          })
      })
  }else{
    res.redirect('/')
  }
})

app.get('/adicionarProva:id', function(req, res){
  const id = req.params.id;
  if(req.session.loggedin && req.session.adm == 's'){
    res.render('provaN.ejs', {session: req.session, id: id})
  }else{
    res.redirect('/')
  }
})

app.post('/CriarProva:id', function(req, res){
  const id = req.params.id;
  const num = req.body.num;
  if(req.session.loggedin && req.session.adm == 's'){
    res.render('CriaProva.ejs', {session: req.session, id: id, num: num})
  }else{
    res.redirect('/')
  }
})

app.get('/verProva:id', function(req, res){
  const id = req.params.id;
  if(req.session.loggedin && req.session.adm == 's'){
  var mensagem = req.session.mensagem;
  req.session.mensagem = undefined;
  db.query(
    "SELECT * FROM prova WHERE curso_id = ?",
    [id],
    (err, result) => {
      res.render('verProva.ejs', {session: req.session, id: id, itens: result, mensagem: mensagem})
    })
  }else{
    res.redirect('/')
  }
})

app.post('/verificar:id', function(req, res){
  const id = req.params.id;
  var acertos = 0;
  const respostas = req.body;
  for (const key in respostas) {
    if (respostas[key] === 'alt1') {
       acertos = acertos + 1;
    }
  }
  req.session.mensagem = "Você acertou " + acertos + " questões!";
  res.redirect('/verProva'+id);
  
})
app.post('/2verificar:id', function(req, res){
  const id = req.params.id;
  var acertos = 0;
  const respostas = req.body;
  for (const key in respostas) {
    if (respostas[key] === 'alt1') {
       acertos = acertos + 1;
    }
  }
  req.session.mensagem = "Você acertou " + acertos + " questões!";
  res.redirect('/2verProva'+id);
  
})

app.get('/2verProva:id', function(req, res){
  const id = req.params.id;
  var mensagem = req.session.mensagem;
  req.session.mensagem = undefined;
  db.query(
    "SELECT * FROM prova WHERE curso_id = ?",
    [id],
    (err, result) => {
      res.render('verProva2.ejs', {session: req.session, id: id, itens: result, mensagem: mensagem})
    })
})

app.get('/apagarCurso:id', function(req, res){
  const id = req.params.id;
  if(req.session.loggedin && req.session.adm == 's'){
  db.query(
    "SELECT * FROM aulas WHERE curso_id = ?",
    [id],
    (err, result) => {
      if(result.length > 0){
        req.session.mensagem = "Apague todas as aulas para poder apagar o curso!";
        res.redirect('/detalhe'+id);
      }
      else{
        db.query(
          "DELETE FROM `cursos` WHERE `cursos`.`id` = ?",
          [id],
          (err, result) => {
            db.query(
              "DELETE FROM `prova` WHERE `prova`.`curso_id` = ?",
              [id],
              (err, result) => {
                res.redirect("/cursosProd");
              })
          })
          }
    })
  }else{
    res.redirect('/')
  }
})

app.get('/2apagarCurso:id', function(req, res){
  const id = req.params.id;
  if(req.session.loggedin && req.session.adm == 's'){
  db.query(
    "SELECT * FROM aulas WHERE curso_id = ?",
    [id],
    (err, result) => {
      if(result.length > 0){
        req.session.mensagem = "Apague todas as aulas para poder apagar o curso!";
        res.redirect('/5detalhe'+id);
      }
      else{
        db.query(
          "DELETE FROM `cursos` WHERE `cursos`.`id` = ?",
          [id],
          (err, result) => {
            res.redirect("/admPage");
          })
          }
    })
  }else{
    res.redirect('/')
  }
})

app.get('/apagarAula:id', function(req, res){
  const id = req.params.id;
  if(req.session.loggedin && req.session.adm == 's'){
  db.query(
    "SELECT * FROM aulas WHERE id = ?",
    [id],
    (err, result) => {
      if(result[0]['tipo'] == 'texto'){
        const img = path.join(__dirname, 'public/aulasPdf/', result[0]['conteudo']);
        fs.unlink(img, (err) => {
        });
      }
        db.query(
          "DELETE FROM `aulas` WHERE `aulas`.`id` = ?",
          [id],
          (err, result) => {
            res.redirect("/admPage");
          })
    })
  }else{
    res.redirect('/')
  }
})

app.get('/publicarCurso:id', function(req, res){
  const id = req.params.id;
  if(req.session.loggedin && req.session.adm == 's'){
  db.query("UPDATE cursos SET pub = 'sim' WHERE id = ?", [id], function(err, result){
    res.redirect('/admPage')
  })
  }else{
    res.redirect('/')
  }
})
// app.post('/questoes:id', function(req, res){
//   const id = req.params.id;
//   const num = req.body.num;
//   const body = req.body;
//     for(var i = 1; i <= num; i++)
   
//     var pergunta = req.body + Str;
//     console.log(pergunta);
//     var alt1 = body.alt1 + i;
//     var alt2 = body.alt2 + i;
//     var alt3 = body.alt3 + i;
//     var alt4 = body.alt4 + i;
//     var values = [[id, pergunta, alt1, alt2, alt3, alt4]];
//     var sql = 'INSERT INTO prova (curso_id, pergunta, alt1, alt2, alt3, alt4) VALUES ?'
//     db.query(sql, [values], function(err, result){
//       if(err) { 
//         throw err
//       }
//       res.redirect('/detalhe'+id);
//     })
    
  
// })

app.use(bodyParser.urlencoded({ extended: true }));

// Rota para lidar com o envio do formulário
app.post('/questoes:id', (req, res) => {
  const numQuestoes = req.body.num;
  const id = req.params.id;
  if(req.session.loggedin && req.session.adm == 's'){
  for (let i = 1; i <= numQuestoes; i++) {
    const pergunta = req.body[`pergunta${i}`];
    const alt1 = req.body[`alt1${i}`];
    const alt2 = req.body[`alt2${i}`];
    const alt3 = req.body[`alt3${i}`];
    const alt4 = req.body[`alt4${i}`];

    // Insira os dados no banco de dados
    const query = `INSERT INTO prova (curso_id, pergunta, alt1, alt2, alt3, alt4) VALUES (?, ?, ?, ?, ?, ?)`;
    db.query(query, [id, pergunta, alt1, alt2, alt3, alt4], (err, result) => {
      if (err) throw err;
      console.log(`Questão ${i} inserida no banco de dados`);
    });
  }

  // Redirecione ou envie uma resposta ao cliente
  
    res.redirect('/detalhe'+id)
  }else{
    res.redirect('/')
  }
});



app.get('/adicionarAula:id', function(req, res){
  const id = req.params.id;
  if(req.session.loggedin && req.session.adm == 's'){
    var mensagem = req.session.mensagem;
    req.session.mensagem = undefined;
    res.render('adicionarAula.ejs', {session: req.session, id: id, mensagem: mensagem})
  }else{
    res.redirect('/')
  }
})

async function isYouTubeLinkValid(link) {
  try {
    // Obtém informações sobre o vídeo usando o link fornecido
    const videoInfo = await ytdl.getInfo(link);
    
    // Se chegou até aqui sem erros, o link é válido
    
    return true;
  } catch (error) {
    // Se ocorrer um erro, o link não é válido
    console.error('Erro ao verificar o link do YouTube:', error.message);
    return false;
    
  }
}

app.get('/video:id', function(req, res){
  const id = req.params.id;
  if(req.session.loggedin && req.session.adm == 's'){
    var mensagem = req.session.mensagem;
    req.session.mensagem = undefined;
    res.render('video.ejs', {session: req.session, id: id, mensagem: mensagem})
  }else{
    res.redirect('/')
  }
})

app.post('/cadastrarAulaVideo:id', async function(req, res){
  const id = req.params.id;
  
  if(req.session.loggedin && req.session.adm == 's'){
    if(await isYouTubeLinkValid(req.body.link) === true){
    var sql = "INSERT INTO aulas (titulo, descricao, conteudo, tipo, curso_id) VALUES ?";
    var values = [[req.body.titulo, req.body.descricao, req.body.link, 'video', id]];
    db.query(sql, [values], function (err, result) {
      if (err) throw err;
      db.query("SELECT * FROM cursos WHERE id = ?", [id], function(err, results){
        if (err) throw err;
        if(results.pub == 'sim'){
          res.redirect('/5detalhe'+id);
        }else{
          res.redirect('/detalhe'+id)
        }
        })
    })
   }else{
    req.session.mensagem = 'Link Inválido';
    res.redirect('/video'+id)
   }
  }else{
    res.redirect('/')
  }
})

app.post('/cadastrarAulaTexto:id',function(req, res){
  const id = req.params.id;
  if(req.session.loggedin && req.session.adm == 's'){
    var form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
        if(err) throw err;
        var oldpath = files.pdf[0].filepath;
        var pdf = crypto.createHash('md5').update(Date.now().toString()).digest('hex');
        var ext = path.extname(files.pdf[0].originalFilename)
        var nomepdf = pdf + ext
        var newpath = path.join(__dirname, 'public/aulasPdf/', nomepdf);
        fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        });
        var sql = "INSERT INTO aulas (titulo, descricao, conteudo, tipo, curso_id) VALUES ?";
        var values = [[fields['titulo'][0], fields['descricao'][0], nomepdf, 'texto', id]];
        db.query(sql, [values], function (err, result) {
        if (err) throw err;
        db.query("SELECT * FROM cursos WHERE id = ?", [id], function(err, results){
          if(results.pub == 'sim'){
            res.redirect('/5detalhe'+id);
          }else{
            res.redirect('/detalhe'+id)
          }
        })
        
        })
      })
  }else{
    res.redirect('/')
    
  }
})

app.get('/texto:id', function(req, res){
  const id = req.params.id;
  if(req.session.loggedin && req.session.adm == 's'){
    var mensagem = req.session.mensagem;
    req.session.mensagem = undefined;
    res.render('texto.ejs', {session: req.session, id: id, mensagem: mensagem})
  }else{
    res.redirect('/')
  }
})

app.get('/novoAdm', function(req, res) {
  if(req.session.loggedin && req.session.adm == 's'){
    var mensagem = req.session.mensagem;
    req.session.mensagem = undefined;
    res.render('novoAdm.ejs', {session: req.session, mensagem: mensagem})
  }else{
    res.redirect('/')
  }
})

app.get('/indicaFilme', function(req, res){
  if(req.session.loggedin){
    db.query("SELECT * FROM indicaFilme", function(err, result){
    res.render('indicaFilme.ejs', {session: req.session,itens: result})
  })
  }else{
    res.redirect("/")
  }
})

app.get('/indicaJogo', function(req, res){
  if(req.session.loggedin){
    db.query("SELECT * FROM indicaJogo", function(err, result){
    res.render('indicaJogo.ejs', {session: req.session, itens: result})
  })
  }else{
    res.redirect("/")
  }
})

app.get('/indicaLivro', function(req, res){
  if(req.session.loggedin){
    db.query("SELECT * FROM indicaLivro", function(err, result){
    res.render('indicaLivro.ejs', {session: req.session, itens: result})
  })
  }else{
    res.redirect("/")
  }
})

app.get('/indicaSerie', function(req, res){
  if(req.session.loggedin){
    db.query("SELECT * FROM indicaSerie", function(err, result){
    res.render('indicaSerie.ejs', { session: req.session, itens: result})
  })
  }else{
    res.redirect("/")
  }
})

app.get('/indicaSite', function(req, res){
  if(req.session.loggedin){
    db.query("SELECT * FROM indicaSite", function(err, result){
    res.render('indicaSite.ejs', {session: req.session, itens: result})
  })
  }else{
    res.redirect("/")
  }
})

app.get('/indicaFilme2', function(req, res){
  if(req.session.loggedin && req.session.adm == 's'){
    db.query("SELECT * FROM indicaFilme", function(err, result){
    res.render('indicaFilme2.ejs', {session: req.session, itens: result})
  })
  }else{
    res.redirect("/")
  }
})

app.get('/indicaJogo2', function(req, res){
  if(req.session.loggedin && req.session.adm == 's'){
    db.query("SELECT * FROM indicaJogo", function(err, result){
    res.render('indicaJogo2.ejs', {session: req.session, itens: result})
  })
  }else{
    res.redirect("/")
  }
})

app.get('/indicaLivro2', function(req, res){
  if(req.session.loggedin && req.session.adm == 's'){
    db.query("SELECT * FROM indicaLivro", function(err, result){
    res.render('indicaLivro2.ejs', {session: req.session, itens: result})
  })
  }else{
    res.redirect("/")
  }
})

app.get('/indicaSerie2', function(req, res){
  if(req.session.loggedin && req.session.adm == 's'){
    db.query("SELECT * FROM indicaSerie", function(err, result){
    res.render('indicaSerie2.ejs', {session: req.session, itens: result})
  })
  }else{
    res.redirect("/")
  }
})

app.get('/indicaSite2', function(req, res){
  if(req.session.loggedin && req.session.adm == 's'){
    db.query("SELECT * FROM indicaSite", function(err, result){
    res.render('indicaSite2.ejs', {session: req.session, itens: result})
  })
  }else{
    res.redirect("/")
  }
})

app.get('/acIndicaFilme', function(req, res){
  if(req.session.loggedin && req.session.adm == 's'){
    var mensagem = req.session.mensagem;
    req.session.mensagem = undefined;
    res.render('acFilme.ejs', {session: req.session, mensagem: mensagem})
  }else{
    res.redirect("/")
  }
})

app.get('/acIndicaJogo', function(req, res){
  if(req.session.loggedin && req.session.adm == 's'){
    var mensagem = req.session.mensagem;
    req.session.mensagem = undefined;
    res.render('acJogo.ejs', {session: req.session, mensagem: mensagem})
  }else{
    res.redirect("/")
  }
})

app.get('/acIndicaLivro', function(req, res){
  if(req.session.loggedin && req.session.adm == 's'){
    var mensagem = req.session.mensagem;
    req.session.mensagem = undefined;
    res.render('acLivro.ejs', {session: req.session, mensagem: mensagem})
  }else{
    res.redirect("/")
  }
})

app.get('/acIndicaSerie', function(req, res){
  if(req.session.loggedin && req.session.adm == 's'){
    var mensagem = req.session.mensagem;
    req.session.mensagem = undefined;
    res.render('acSerie.ejs', {session: req.session, mensagem: mensagem})
  }else{
    res.redirect("/")
  }
})

app.get('/acIndicaSite', function(req, res){
  if(req.session.loggedin && req.session.adm == 's'){
    var mensagem = req.session.mensagem;
    req.session.mensagem = undefined;
    res.render('acSite.ejs', {session: req.session, mensagem: mensagem})
  }else{
    res.redirect("/")
  }
})

app.post('/cadIndicaFilme', function(req, res){
  const tit = req.body.titulo;
  const desc = req.body.desc;
  const link = req.body.link;
  db.query(
    "SELECT * FROM indicaFilme WHERE titulo = ?",
    [tit],
    (err, results) => {
      if (err) throw err;
      if (results.length != 0) {
        req.session.mensagem = "Já Cadastrado";
        res.redirect("/acIndicaFilme");
      } else {
        var sql = "INSERT INTO indicaFilme (titulo, descricao, link) VALUES ?";
        var values = [[tit, desc, link]];
        db.query(sql, [values], function (err, result) {
          if (err) throw err;
          res.redirect("/indicaFilme2");
        })
      }
    })
})

app.post('/cadIndicaJogo', function(req, res){
  const tit = req.body.titulo;
  const desc = req.body.desc;
  const link = req.body.link;
  db.query(
    "SELECT * FROM indicaJogo WHERE titulo = ?",
    [tit],
    (err, results) => {
      if (err) throw err;
      if (results.length != 0) {
        req.session.mensagem = "Já Cadastrado";
        res.redirect("/acIndicaJogo");
      } else {
        var sql = "INSERT INTO indicaJogo (titulo, descricao, link) VALUES ?";
        var values = [[tit, desc, link]];
        db.query(sql, [values], function (err, result) {
          if (err) throw err;
          res.redirect("/indicaJogo2");
        })
      }
    })
})

app.post('/cadIndicaLivro', function(req, res){
  const tit = req.body.titulo;
  const desc = req.body.desc;
  const link = req.body.link;
  db.query(
    "SELECT * FROM indicaLivro WHERE titulo = ?",
    [tit],
    (err, results) => {
      if (err) throw err;
      if (results.length != 0) {
        req.session.mensagem = "Já Cadastrado";
        res.redirect("/acIndicaLivro");
      } else {
        var sql = "INSERT INTO indicaLivro (titulo, descricao, link) VALUES ?";
        var values = [[tit, desc, link]];
        db.query(sql, [values], function (err, result) {
          if (err) throw err;
          res.redirect("/indicaLivro2");
        })
      }
    })
})

app.post('/cadIndicaSerie', function(req, res){
  const tit = req.body.titulo;
  const desc = req.body.desc;
  const link = req.body.link;
  db.query(
    "SELECT * FROM indicaSerie WHERE titulo = ?",
    [tit],
    (err, results) => {
      if (err) throw err;
      if (results.length != 0) {
        req.session.mensagem = "Já Cadastrado";
        res.redirect("/acIndicaSerie");
      } else {
        var sql = "INSERT INTO indicaSerie (titulo, descricao, link) VALUES ?";
        var values = [[tit, desc, link]];
        db.query(sql, [values], function (err, result) {
          if (err) throw err;
          res.redirect("/indicaSerie2");
        })
      }
    })
})

app.post('/cadIndicaSite', function(req, res){
  const tit = req.body.titulo;
  const desc = req.body.desc;
  const link = req.body.link;
  db.query(
    "SELECT * FROM indicaSite WHERE titulo = ?",
    [tit],
    (err, results) => {
      if (err) throw err;
      if (results.length != 0) {
        req.session.mensagem = "Já Cadastrado";
        res.redirect("/acIndicaSite");
      } else {
        var sql = "INSERT INTO indicaSite (titulo, descricao, link) VALUES ?";
        var values = [[tit, desc, link]];
        db.query(sql, [values], function (err, result) {
          if (err) throw err;
          res.redirect("/indicaSite2");
        })
      }
    })
})

app.post("/cadastrarAdm", function (req, res) {
  const email = req.body.email;
  const nome = req.body.nome;
  const password = req.body.senha;
  db.query(
    "SELECT * FROM adm WHERE email = ?",
    [email],
    (err, results) => {
      if (err) throw err;
      if (results.length != 0) {
        req.session.mensagem = "Email já Cadastrado";
        res.redirect("/novoAdm");
      } else {
        bcrypt.hash(password, saltRounds, function (err, hash) {
          if (err) throw err;

          var sql = "INSERT INTO adm (nome, email, senha) VALUES ?";
          var values = [[nome, email, hash]];
          db.query(sql, [values], function (err, result) {
            if (err) throw err;
            req.session.mensagem = "Email cadastrado com sucesso";
            res.redirect("/novoAdm");
          })
        })
      }
    })
})


app.get("/", function (req, res) {
  if (req.session.loggedin) {
    db.query("SELECT * FROM usuarios", function(err, result){
        db.query("SELECT * FROM cursos WHERE pub = 'sim'", function(err, results){
          const cursos = results ? results.length : 0;
          db.query("SELECT * FROM aulas", function(err, result2){
      res.render('sobre.ejs', {session: req.session, user: result.length, itens: results, cur: cursos, aul: result2.length})
      })
    })
  })
  } else {
    res.redirect("/login");
  }
});

app.get('/esqueceu', function(req, res){
  var mensagem = req.session.mensagem;
  req.session.mensagem = undefined;
  res.render('esqueceu.ejs', { mensagem: mensagem });
})

app.post('/esqueceu', function(req, res){
  const email = req.body.email;
  
  db.query(
    "SELECT * FROM usuarios WHERE email = ?",
    [email],
    (err, results) => {
      if (err) throw err;
      if (results.length != 0) {
        const configEmail = {
          from: "EcoSimpler <EcoSimpler@outlook.com>",
          to: email,
          subject: "Mudar a Senha",
          html:
            "<p> Esqueceu a senha do seu cadastro no Eco$impler? Não tem problema</p><br><p>para redefinir a senha clique no seguinte link: </p> <a href='http://localhost:3000/troca" +
            email +
            "'> Redefinir </a>",
        };
        transporter.sendMail(configEmail);
        req.session.mensagem = "Verifique seu email";
        res.redirect("/login");
      } else {
        req.session.mensagem = "Email não encontrado";
        res.redirect("/esqueceu");
      }
    });
})

app.get("/cursos", function (req, res) {
  var sql = "SELECT * FROM cursos WHERE tag = 'fixa' AND pub = 'sim' LIMIT 16";
  var sql1 = "SELECT * FROM cursos WHERE tag = 'variavel' AND pub = 'sim' LIMIT 16";
  var sql2 = "SELECT * FROM cursos WHERE tag = 'economia' AND pub = 'sim' LIMIT 16";
  var sql3 = "SELECT * FROM cursos WHERE tag = 'outro' AND pub = 'sim' LIMIT 16";
  db.query(sql, function (err, result) {
    if (err) throw err;
    db.query(sql1, function (err, result1) {
      if (err) throw err;
      db.query(sql2, function (err, result2) {
        if (err) throw err;
        db.query(sql3, function (err, result3) {
          if (err) throw err;
            if (req.session.loggedin) {
              res.render("cursos.ejs", {session: req.session, itens: result, itens1: result1, itens2: result2, itens3: result3, session: req.session });
            } else {
              res.redirect('/login');
            }
  });
});
});
});
});

app.post("/search", function (req, res) {
  const busca = req.body.busca;
  var sql = "SELECT * FROM itens WHERE titulo LIKE '%" + busca + "%' LIMIT 15";
  db.query(sql, (err, result) => {
    if (err) throw err;
    if (req.session.loggedin) {
      res.render("cursos2.ejs", {session: req.session, itens: result, session: req.session });
    } else {
      res.redirect('/login');
    }
  });
});
app.get("/1detail:id", function (req, res) {
  const itemId = req.params.id;

  var sql = "SELECT * FROM " + itemId + "";
  
    if (req.session.loggedin) {
      db.query(sql, function (err, result) {
        const ultimaChamada = result[result.length - 1];
        if (err) throw err;
        res.render("detail.ejs", {session: req.session, itens: result, session: req.session, valD: ultimaChamada.valor, nome: itemId});
      });
    } else {
      res.redirect('/login');
    }
  
});

app.get("/2detail:id", function (req, res) {
  const itemId = req.params.id;

  var sql = "SELECT * FROM " + itemId + "";
    if (req.session.loggedin) {
      db.query(sql, function (err, result) {
        const ultimaChamada = result[result.length - 1];
        if (err) throw err;
      res.render("detail2.ejs", {session: req.session, itens: result, session: req.session, valD: ultimaChamada.pontuacao, nome: itemId});
      });
    } else {
      res.redirect('/login');
    }
  
});
app.get("/adm", function (req, res) {
  var mensagem = req.session.mensagem;
  req.session.mensagem = undefined;
  if (req.session.loggedin) {
    res.redirect("/");
  } else {
    res.render("loginAdmin.ejs", { mensagem: mensagem });
  }
});
app.get("/login", function (req, res) {
  var mensagem = req.session.mensagem;
  req.session.mensagem = undefined;
  if (req.session.loggedin) {
    res.redirect("/");
  } else {
    res.render("login.ejs", { mensagem: mensagem });
  }
});
app.get("/cadastro", function (req, res) {
  var mensagem = req.session.mensagem;
  req.session.mensagem = undefined;
  if (req.session.loggedin) {
    res.redirect("/");
  } else {
    res.render("signup.ejs", { mensagem: mensagem });
  }
});

app.get("/profile", function (req, res) {
  if (req.session.loggedin) {
    res.render("profile.ejs", { session: req.session });
  } else {
    res.redirect("/");
  }
});

app.get("/logout", function (req, res) {
  req.session.destroy(function (err) {
    // cannot access session here
  });
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Servidor Escutando na porta 3000");
});
