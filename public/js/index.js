/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var u = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
  var Fi = u(() => {
    window.tram = (function (e) {
      function t(l, h) {
        var I = new B.Bare();
        return I.init(l, h);
      }
      function r(l) {
        return l.replace(/[A-Z]/g, function (h) {
          return "-" + h.toLowerCase();
        });
      }
      function n(l) {
        var h = parseInt(l.slice(1), 16),
          I = (h >> 16) & 255,
          O = (h >> 8) & 255,
          y = 255 & h;
        return [I, O, y];
      }
      function i(l, h, I) {
        return (
          "#" + ((1 << 24) | (l << 16) | (h << 8) | I).toString(16).slice(1)
        );
      }
      function o() {}
      function a(l, h) {
        f("Type warning: Expected: [" + l + "] Got: [" + typeof h + "] " + h);
      }
      function s(l, h, I) {
        f("Units do not match [" + l + "]: " + h + ", " + I);
      }
      function c(l, h, I) {
        if ((h !== void 0 && (I = h), l === void 0)) return I;
        var O = I;
        return (
          xt.test(l) || !Et.test(l)
            ? (O = parseInt(l, 10))
            : Et.test(l) && (O = 1e3 * parseFloat(l)),
          0 > O && (O = 0),
          O === O ? O : I
        );
      }
      function f(l) {
        fe.debug && window && window.console.warn(l);
      }
      function E(l) {
        for (var h = -1, I = l ? l.length : 0, O = []; ++h < I; ) {
          var y = l[h];
          y && O.push(y);
        }
        return O;
      }
      var v = (function (l, h, I) {
          function O(oe) {
            return typeof oe == "object";
          }
          function y(oe) {
            return typeof oe == "function";
          }
          function A() {}
          function J(oe, he) {
            function H() {
              var De = new le();
              return y(De.init) && De.init.apply(De, arguments), De;
            }
            function le() {}
            he === I && ((he = oe), (oe = Object)), (H.Bare = le);
            var de,
              be = (A[l] = oe[l]),
              it = (le[l] = H[l] = new A());
            return (
              (it.constructor = H),
              (H.mixin = function (De) {
                return (le[l] = H[l] = J(H, De)[l]), H;
              }),
              (H.open = function (De) {
                if (
                  ((de = {}),
                  y(De) ? (de = De.call(H, it, be, H, oe)) : O(De) && (de = De),
                  O(de))
                )
                  for (var Sr in de) h.call(de, Sr) && (it[Sr] = de[Sr]);
                return y(it.init) || (it.init = oe), H;
              }),
              H.open(he)
            );
          }
          return J;
        })("prototype", {}.hasOwnProperty),
        g = {
          ease: [
            "ease",
            function (l, h, I, O) {
              var y = (l /= O) * l,
                A = y * l;
              return (
                h +
                I * (-2.75 * A * y + 11 * y * y + -15.5 * A + 8 * y + 0.25 * l)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (l, h, I, O) {
              var y = (l /= O) * l,
                A = y * l;
              return h + I * (-1 * A * y + 3 * y * y + -3 * A + 2 * y);
            },
          ],
          "ease-out": [
            "ease-out",
            function (l, h, I, O) {
              var y = (l /= O) * l,
                A = y * l;
              return (
                h +
                I * (0.3 * A * y + -1.6 * y * y + 2.2 * A + -1.8 * y + 1.9 * l)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (l, h, I, O) {
              var y = (l /= O) * l,
                A = y * l;
              return h + I * (2 * A * y + -5 * y * y + 2 * A + 2 * y);
            },
          ],
          linear: [
            "linear",
            function (l, h, I, O) {
              return (I * l) / O + h;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (l, h, I, O) {
              return I * (l /= O) * l + h;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (l, h, I, O) {
              return -I * (l /= O) * (l - 2) + h;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (l, h, I, O) {
              return (l /= O / 2) < 1
                ? (I / 2) * l * l + h
                : (-I / 2) * (--l * (l - 2) - 1) + h;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (l, h, I, O) {
              return I * (l /= O) * l * l + h;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (l, h, I, O) {
              return I * ((l = l / O - 1) * l * l + 1) + h;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (l, h, I, O) {
              return (l /= O / 2) < 1
                ? (I / 2) * l * l * l + h
                : (I / 2) * ((l -= 2) * l * l + 2) + h;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (l, h, I, O) {
              return I * (l /= O) * l * l * l + h;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (l, h, I, O) {
              return -I * ((l = l / O - 1) * l * l * l - 1) + h;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (l, h, I, O) {
              return (l /= O / 2) < 1
                ? (I / 2) * l * l * l * l + h
                : (-I / 2) * ((l -= 2) * l * l * l - 2) + h;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (l, h, I, O) {
              return I * (l /= O) * l * l * l * l + h;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (l, h, I, O) {
              return I * ((l = l / O - 1) * l * l * l * l + 1) + h;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (l, h, I, O) {
              return (l /= O / 2) < 1
                ? (I / 2) * l * l * l * l * l + h
                : (I / 2) * ((l -= 2) * l * l * l * l + 2) + h;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (l, h, I, O) {
              return -I * Math.cos((l / O) * (Math.PI / 2)) + I + h;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (l, h, I, O) {
              return I * Math.sin((l / O) * (Math.PI / 2)) + h;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (l, h, I, O) {
              return (-I / 2) * (Math.cos((Math.PI * l) / O) - 1) + h;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (l, h, I, O) {
              return l === 0 ? h : I * Math.pow(2, 10 * (l / O - 1)) + h;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (l, h, I, O) {
              return l === O
                ? h + I
                : I * (-Math.pow(2, (-10 * l) / O) + 1) + h;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (l, h, I, O) {
              return l === 0
                ? h
                : l === O
                ? h + I
                : (l /= O / 2) < 1
                ? (I / 2) * Math.pow(2, 10 * (l - 1)) + h
                : (I / 2) * (-Math.pow(2, -10 * --l) + 2) + h;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (l, h, I, O) {
              return -I * (Math.sqrt(1 - (l /= O) * l) - 1) + h;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (l, h, I, O) {
              return I * Math.sqrt(1 - (l = l / O - 1) * l) + h;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (l, h, I, O) {
              return (l /= O / 2) < 1
                ? (-I / 2) * (Math.sqrt(1 - l * l) - 1) + h
                : (I / 2) * (Math.sqrt(1 - (l -= 2) * l) + 1) + h;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (l, h, I, O, y) {
              return (
                y === void 0 && (y = 1.70158),
                I * (l /= O) * l * ((y + 1) * l - y) + h
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (l, h, I, O, y) {
              return (
                y === void 0 && (y = 1.70158),
                I * ((l = l / O - 1) * l * ((y + 1) * l + y) + 1) + h
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (l, h, I, O, y) {
              return (
                y === void 0 && (y = 1.70158),
                (l /= O / 2) < 1
                  ? (I / 2) * l * l * (((y *= 1.525) + 1) * l - y) + h
                  : (I / 2) *
                      ((l -= 2) * l * (((y *= 1.525) + 1) * l + y) + 2) +
                    h
              );
            },
          ],
        },
        _ = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        w = document,
        S = window,
        P = "bkwld-tram",
        b = /[\-\.0-9]/g,
        R = /[A-Z]/,
        T = "number",
        q = /^(rgb|#)/,
        x = /(em|cm|mm|in|pt|pc|px)$/,
        L = /(em|cm|mm|in|pt|pc|px|%)$/,
        X = /(deg|rad|turn)$/,
        $ = "unitless",
        Q = /(all|none) 0s ease 0s/,
        ie = /^(width|height)$/,
        te = " ",
        M = w.createElement("a"),
        m = ["Webkit", "Moz", "O", "ms"],
        F = ["-webkit-", "-moz-", "-o-", "-ms-"],
        G = function (l) {
          if (l in M.style) return { dom: l, css: l };
          var h,
            I,
            O = "",
            y = l.split("-");
          for (h = 0; h < y.length; h++)
            O += y[h].charAt(0).toUpperCase() + y[h].slice(1);
          for (h = 0; h < m.length; h++)
            if (((I = m[h] + O), I in M.style))
              return { dom: I, css: F[h] + l };
        },
        V = (t.support = {
          bind: Function.prototype.bind,
          transform: G("transform"),
          transition: G("transition"),
          backface: G("backface-visibility"),
          timing: G("transition-timing-function"),
        });
      if (V.transition) {
        var ee = V.timing.dom;
        if (((M.style[ee] = g["ease-in-back"][0]), !M.style[ee]))
          for (var ne in _) g[ne][0] = _[ne];
      }
      var D = (t.frame = (function () {
          var l =
            S.requestAnimationFrame ||
            S.webkitRequestAnimationFrame ||
            S.mozRequestAnimationFrame ||
            S.oRequestAnimationFrame ||
            S.msRequestAnimationFrame;
          return l && V.bind
            ? l.bind(S)
            : function (h) {
                S.setTimeout(h, 16);
              };
        })()),
        j = (t.now = (function () {
          var l = S.performance,
            h = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
          return h && V.bind
            ? h.bind(l)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        Y = v(function (l) {
          function h(re, pe) {
            var Ie = E(("" + re).split(te)),
              ve = Ie[0];
            pe = pe || {};
            var Me = K[ve];
            if (!Me) return f("Unsupported property: " + ve);
            if (!pe.weak || !this.props[ve]) {
              var ze = Me[0],
                Xe = this.props[ve];
              return (
                Xe || (Xe = this.props[ve] = new ze.Bare()),
                Xe.init(this.$el, Ie, Me, pe),
                Xe
              );
            }
          }
          function I(re, pe, Ie) {
            if (re) {
              var ve = typeof re;
              if (
                (pe ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                ve == "number" && pe)
              )
                return (
                  (this.timer = new se({
                    duration: re,
                    context: this,
                    complete: A,
                  })),
                  void (this.active = !0)
                );
              if (ve == "string" && pe) {
                switch (re) {
                  case "hide":
                    H.call(this);
                    break;
                  case "stop":
                    J.call(this);
                    break;
                  case "redraw":
                    le.call(this);
                    break;
                  default:
                    h.call(this, re, Ie && Ie[1]);
                }
                return A.call(this);
              }
              if (ve == "function") return void re.call(this, this);
              if (ve == "object") {
                var Me = 0;
                it.call(
                  this,
                  re,
                  function (Ae, dm) {
                    Ae.span > Me && (Me = Ae.span), Ae.stop(), Ae.animate(dm);
                  },
                  function (Ae) {
                    "wait" in Ae && (Me = c(Ae.wait, 0));
                  }
                ),
                  be.call(this),
                  Me > 0 &&
                    ((this.timer = new se({ duration: Me, context: this })),
                    (this.active = !0),
                    pe && (this.timer.complete = A));
                var ze = this,
                  Xe = !1,
                  un = {};
                D(function () {
                  it.call(ze, re, function (Ae) {
                    Ae.active && ((Xe = !0), (un[Ae.name] = Ae.nextStyle));
                  }),
                    Xe && ze.$el.css(un);
                });
              }
            }
          }
          function O(re) {
            (re = c(re, 0)),
              this.active
                ? this.queue.push({ options: re })
                : ((this.timer = new se({
                    duration: re,
                    context: this,
                    complete: A,
                  })),
                  (this.active = !0));
          }
          function y(re) {
            return this.active
              ? (this.queue.push({ options: re, args: arguments }),
                void (this.timer.complete = A))
              : f(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function A() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var re = this.queue.shift();
              I.call(this, re.options, !0, re.args);
            }
          }
          function J(re) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var pe;
            typeof re == "string"
              ? ((pe = {}), (pe[re] = 1))
              : (pe = typeof re == "object" && re != null ? re : this.props),
              it.call(this, pe, De),
              be.call(this);
          }
          function oe(re) {
            J.call(this, re), it.call(this, re, Sr, lm);
          }
          function he(re) {
            typeof re != "string" && (re = "block"),
              (this.el.style.display = re);
          }
          function H() {
            J.call(this), (this.el.style.display = "none");
          }
          function le() {
            this.el.offsetHeight;
          }
          function de() {
            J.call(this), e.removeData(this.el, P), (this.$el = this.el = null);
          }
          function be() {
            var re,
              pe,
              Ie = [];
            this.upstream && Ie.push(this.upstream);
            for (re in this.props)
              (pe = this.props[re]), pe.active && Ie.push(pe.string);
            (Ie = Ie.join(",")),
              this.style !== Ie &&
                ((this.style = Ie), (this.el.style[V.transition.dom] = Ie));
          }
          function it(re, pe, Ie) {
            var ve,
              Me,
              ze,
              Xe,
              un = pe !== De,
              Ae = {};
            for (ve in re)
              (ze = re[ve]),
                ve in _e
                  ? (Ae.transform || (Ae.transform = {}),
                    (Ae.transform[ve] = ze))
                  : (R.test(ve) && (ve = r(ve)),
                    ve in K ? (Ae[ve] = ze) : (Xe || (Xe = {}), (Xe[ve] = ze)));
            for (ve in Ae) {
              if (((ze = Ae[ve]), (Me = this.props[ve]), !Me)) {
                if (!un) continue;
                Me = h.call(this, ve);
              }
              pe.call(this, Me, ze);
            }
            Ie && Xe && Ie.call(this, Xe);
          }
          function De(re) {
            re.stop();
          }
          function Sr(re, pe) {
            re.set(pe);
          }
          function lm(re) {
            this.$el.css(re);
          }
          function Ke(re, pe) {
            l[re] = function () {
              return this.children
                ? fm.call(this, pe, arguments)
                : (this.el && pe.apply(this, arguments), this);
            };
          }
          function fm(re, pe) {
            var Ie,
              ve = this.children.length;
            for (Ie = 0; ve > Ie; Ie++) re.apply(this.children[Ie], pe);
            return this;
          }
          (l.init = function (re) {
            if (
              ((this.$el = e(re)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              fe.keepInherited && !fe.fallback)
            ) {
              var pe = W(this.el, "transition");
              pe && !Q.test(pe) && (this.upstream = pe);
            }
            V.backface &&
              fe.hideBackface &&
              d(this.el, V.backface.css, "hidden");
          }),
            Ke("add", h),
            Ke("start", I),
            Ke("wait", O),
            Ke("then", y),
            Ke("next", A),
            Ke("stop", J),
            Ke("set", oe),
            Ke("show", he),
            Ke("hide", H),
            Ke("redraw", le),
            Ke("destroy", de);
        }),
        B = v(Y, function (l) {
          function h(I, O) {
            var y = e.data(I, P) || e.data(I, P, new Y.Bare());
            return y.el || y.init(I), O ? y.start(O) : y;
          }
          l.init = function (I, O) {
            var y = e(I);
            if (!y.length) return this;
            if (y.length === 1) return h(y[0], O);
            var A = [];
            return (
              y.each(function (J, oe) {
                A.push(h(oe, O));
              }),
              (this.children = A),
              this
            );
          };
        }),
        U = v(function (l) {
          function h() {
            var A = this.get();
            this.update("auto");
            var J = this.get();
            return this.update(A), J;
          }
          function I(A, J, oe) {
            return J !== void 0 && (oe = J), A in g ? A : oe;
          }
          function O(A) {
            var J = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(A);
            return (J ? i(J[1], J[2], J[3]) : A).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var y = { duration: 500, ease: "ease", delay: 0 };
          (l.init = function (A, J, oe, he) {
            (this.$el = A), (this.el = A[0]);
            var H = J[0];
            oe[2] && (H = oe[2]),
              Z[H] && (H = Z[H]),
              (this.name = H),
              (this.type = oe[1]),
              (this.duration = c(J[1], this.duration, y.duration)),
              (this.ease = I(J[2], this.ease, y.ease)),
              (this.delay = c(J[3], this.delay, y.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = ie.test(this.name)),
              (this.unit = he.unit || this.unit || fe.defaultUnit),
              (this.angle = he.angle || this.angle || fe.defaultAngle),
              fe.fallback || he.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    te +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? te + g[this.ease][0] : "") +
                    (this.delay ? te + this.delay + "ms" : "")));
          }),
            (l.set = function (A) {
              (A = this.convert(A, this.type)), this.update(A), this.redraw();
            }),
            (l.transition = function (A) {
              (this.active = !0),
                (A = this.convert(A, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  A == "auto" && (A = h.call(this))),
                (this.nextStyle = A);
            }),
            (l.fallback = function (A) {
              var J =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (A = this.convert(A, this.type)),
                this.auto &&
                  (J == "auto" && (J = this.convert(this.get(), this.type)),
                  A == "auto" && (A = h.call(this))),
                (this.tween = new C({
                  from: J,
                  to: A,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (l.get = function () {
              return W(this.el, this.name);
            }),
            (l.update = function (A) {
              d(this.el, this.name, A);
            }),
            (l.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                d(this.el, this.name, this.get()));
              var A = this.tween;
              A && A.context && A.destroy();
            }),
            (l.convert = function (A, J) {
              if (A == "auto" && this.auto) return A;
              var oe,
                he = typeof A == "number",
                H = typeof A == "string";
              switch (J) {
                case T:
                  if (he) return A;
                  if (H && A.replace(b, "") === "") return +A;
                  oe = "number(unitless)";
                  break;
                case q:
                  if (H) {
                    if (A === "" && this.original) return this.original;
                    if (J.test(A))
                      return A.charAt(0) == "#" && A.length == 7 ? A : O(A);
                  }
                  oe = "hex or rgb string";
                  break;
                case x:
                  if (he) return A + this.unit;
                  if (H && J.test(A)) return A;
                  oe = "number(px) or string(unit)";
                  break;
                case L:
                  if (he) return A + this.unit;
                  if (H && J.test(A)) return A;
                  oe = "number(px) or string(unit or %)";
                  break;
                case X:
                  if (he) return A + this.angle;
                  if (H && J.test(A)) return A;
                  oe = "number(deg) or string(angle)";
                  break;
                case $:
                  if (he || (H && L.test(A))) return A;
                  oe = "number(unitless) or string(unit or %)";
              }
              return a(oe, A), A;
            }),
            (l.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        p = v(U, function (l, h) {
          l.init = function () {
            h.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), q));
          };
        }),
        k = v(U, function (l, h) {
          (l.init = function () {
            h.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (l.get = function () {
              return this.$el[this.name]();
            }),
            (l.update = function (I) {
              this.$el[this.name](I);
            });
        }),
        z = v(U, function (l, h) {
          function I(O, y) {
            var A, J, oe, he, H;
            for (A in O)
              (he = _e[A]),
                (oe = he[0]),
                (J = he[1] || A),
                (H = this.convert(O[A], oe)),
                y.call(this, J, H, oe);
          }
          (l.init = function () {
            h.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                _e.perspective &&
                  fe.perspective &&
                  ((this.current.perspective = fe.perspective),
                  d(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (l.set = function (O) {
              I.call(this, O, function (y, A) {
                this.current[y] = A;
              }),
                d(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (l.transition = function (O) {
              var y = this.values(O);
              this.tween = new Oe({
                current: this.current,
                values: y,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var A,
                J = {};
              for (A in this.current) J[A] = A in y ? y[A] : this.current[A];
              (this.active = !0), (this.nextStyle = this.style(J));
            }),
            (l.fallback = function (O) {
              var y = this.values(O);
              this.tween = new Oe({
                current: this.current,
                values: y,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (l.update = function () {
              d(this.el, this.name, this.style(this.current));
            }),
            (l.style = function (O) {
              var y,
                A = "";
              for (y in O) A += y + "(" + O[y] + ") ";
              return A;
            }),
            (l.values = function (O) {
              var y,
                A = {};
              return (
                I.call(this, O, function (J, oe, he) {
                  (A[J] = oe),
                    this.current[J] === void 0 &&
                      ((y = 0),
                      ~J.indexOf("scale") && (y = 1),
                      (this.current[J] = this.convert(y, he)));
                }),
                A
              );
            });
        }),
        C = v(function (l) {
          function h(H) {
            oe.push(H) === 1 && D(I);
          }
          function I() {
            var H,
              le,
              de,
              be = oe.length;
            if (be)
              for (D(I), le = j(), H = be; H--; )
                (de = oe[H]), de && de.render(le);
          }
          function O(H) {
            var le,
              de = e.inArray(H, oe);
            de >= 0 &&
              ((le = oe.slice(de + 1)),
              (oe.length = de),
              le.length && (oe = oe.concat(le)));
          }
          function y(H) {
            return Math.round(H * he) / he;
          }
          function A(H, le, de) {
            return i(
              H[0] + de * (le[0] - H[0]),
              H[1] + de * (le[1] - H[1]),
              H[2] + de * (le[2] - H[2])
            );
          }
          var J = { ease: g.ease[1], from: 0, to: 1 };
          (l.init = function (H) {
            (this.duration = H.duration || 0), (this.delay = H.delay || 0);
            var le = H.ease || J.ease;
            g[le] && (le = g[le][1]),
              typeof le != "function" && (le = J.ease),
              (this.ease = le),
              (this.update = H.update || o),
              (this.complete = H.complete || o),
              (this.context = H.context || this),
              (this.name = H.name);
            var de = H.from,
              be = H.to;
            de === void 0 && (de = J.from),
              be === void 0 && (be = J.to),
              (this.unit = H.unit || ""),
              typeof de == "number" && typeof be == "number"
                ? ((this.begin = de), (this.change = be - de))
                : this.format(be, de),
              (this.value = this.begin + this.unit),
              (this.start = j()),
              H.autoplay !== !1 && this.play();
          }),
            (l.play = function () {
              this.active ||
                (this.start || (this.start = j()), (this.active = !0), h(this));
            }),
            (l.stop = function () {
              this.active && ((this.active = !1), O(this));
            }),
            (l.render = function (H) {
              var le,
                de = H - this.start;
              if (this.delay) {
                if (de <= this.delay) return;
                de -= this.delay;
              }
              if (de < this.duration) {
                var be = this.ease(de, 0, 1, this.duration);
                return (
                  (le = this.startRGB
                    ? A(this.startRGB, this.endRGB, be)
                    : y(this.begin + be * this.change)),
                  (this.value = le + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (le = this.endHex || this.begin + this.change),
                (this.value = le + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (l.format = function (H, le) {
              if (((le += ""), (H += ""), H.charAt(0) == "#"))
                return (
                  (this.startRGB = n(le)),
                  (this.endRGB = n(H)),
                  (this.endHex = H),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var de = le.replace(b, ""),
                  be = H.replace(b, "");
                de !== be && s("tween", le, H), (this.unit = de);
              }
              (le = parseFloat(le)),
                (H = parseFloat(H)),
                (this.begin = this.value = le),
                (this.change = H - le);
            }),
            (l.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var oe = [],
            he = 1e3;
        }),
        se = v(C, function (l) {
          (l.init = function (h) {
            (this.duration = h.duration || 0),
              (this.complete = h.complete || o),
              (this.context = h.context),
              this.play();
          }),
            (l.render = function (h) {
              var I = h - this.start;
              I < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        Oe = v(C, function (l, h) {
          (l.init = function (I) {
            (this.context = I.context),
              (this.update = I.update),
              (this.tweens = []),
              (this.current = I.current);
            var O, y;
            for (O in I.values)
              (y = I.values[O]),
                this.current[O] !== y &&
                  this.tweens.push(
                    new C({
                      name: O,
                      from: this.current[O],
                      to: y,
                      duration: I.duration,
                      delay: I.delay,
                      ease: I.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (l.render = function (I) {
              var O,
                y,
                A = this.tweens.length,
                J = !1;
              for (O = A; O--; )
                (y = this.tweens[O]),
                  y.context &&
                    (y.render(I), (this.current[y.name] = y.value), (J = !0));
              return J
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (l.destroy = function () {
              if ((h.destroy.call(this), this.tweens)) {
                var I,
                  O = this.tweens.length;
                for (I = O; I--; ) this.tweens[I].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        fe = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !V.transition,
          agentTests: [],
        });
      (t.fallback = function (l) {
        if (!V.transition) return (fe.fallback = !0);
        fe.agentTests.push("(" + l + ")");
        var h = new RegExp(fe.agentTests.join("|"), "i");
        fe.fallback = h.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (l) {
          return new C(l);
        }),
        (t.delay = function (l, h, I) {
          return new se({ complete: h, duration: l, context: I });
        }),
        (e.fn.tram = function (l) {
          return t.call(null, this, l);
        });
      var d = e.style,
        W = e.css,
        Z = { transform: V.transform && V.transform.css },
        K = {
          color: [p, q],
          background: [p, q, "background-color"],
          "outline-color": [p, q],
          "border-color": [p, q],
          "border-top-color": [p, q],
          "border-right-color": [p, q],
          "border-bottom-color": [p, q],
          "border-left-color": [p, q],
          "border-width": [U, x],
          "border-top-width": [U, x],
          "border-right-width": [U, x],
          "border-bottom-width": [U, x],
          "border-left-width": [U, x],
          "border-spacing": [U, x],
          "letter-spacing": [U, x],
          margin: [U, x],
          "margin-top": [U, x],
          "margin-right": [U, x],
          "margin-bottom": [U, x],
          "margin-left": [U, x],
          padding: [U, x],
          "padding-top": [U, x],
          "padding-right": [U, x],
          "padding-bottom": [U, x],
          "padding-left": [U, x],
          "outline-width": [U, x],
          opacity: [U, T],
          top: [U, L],
          right: [U, L],
          bottom: [U, L],
          left: [U, L],
          "font-size": [U, L],
          "text-indent": [U, L],
          "word-spacing": [U, L],
          width: [U, L],
          "min-width": [U, L],
          "max-width": [U, L],
          height: [U, L],
          "min-height": [U, L],
          "max-height": [U, L],
          "line-height": [U, $],
          "scroll-top": [k, T, "scrollTop"],
          "scroll-left": [k, T, "scrollLeft"],
        },
        _e = {};
      V.transform &&
        ((K.transform = [z]),
        (_e = {
          x: [L, "translateX"],
          y: [L, "translateY"],
          rotate: [X],
          rotateX: [X],
          rotateY: [X],
          scale: [T],
          scaleX: [T],
          scaleY: [T],
          skew: [X],
          skewX: [X],
          skewY: [X],
        })),
        V.transform &&
          V.backface &&
          ((_e.z = [L, "translateZ"]),
          (_e.rotateZ = [X]),
          (_e.scaleZ = [T]),
          (_e.perspective = [x]));
      var xt = /ms/,
        Et = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var Is = u((cW, ms) => {
    var pm = window.$,
      vm = Fi() && pm.tram;
    ms.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        o = r.push,
        a = r.slice,
        s = r.concat,
        c = n.toString,
        f = n.hasOwnProperty,
        E = r.forEach,
        v = r.map,
        g = r.reduce,
        _ = r.reduceRight,
        w = r.filter,
        S = r.every,
        P = r.some,
        b = r.indexOf,
        R = r.lastIndexOf,
        T = Array.isArray,
        q = Object.keys,
        x = i.bind,
        L =
          (e.each =
          e.forEach =
            function (m, F, G) {
              if (m == null) return m;
              if (E && m.forEach === E) m.forEach(F, G);
              else if (m.length === +m.length) {
                for (var V = 0, ee = m.length; V < ee; V++)
                  if (F.call(G, m[V], V, m) === t) return;
              } else
                for (var ne = e.keys(m), V = 0, ee = ne.length; V < ee; V++)
                  if (F.call(G, m[ne[V]], ne[V], m) === t) return;
              return m;
            });
      (e.map = e.collect =
        function (m, F, G) {
          var V = [];
          return m == null
            ? V
            : v && m.map === v
            ? m.map(F, G)
            : (L(m, function (ee, ne, D) {
                V.push(F.call(G, ee, ne, D));
              }),
              V);
        }),
        (e.find = e.detect =
          function (m, F, G) {
            var V;
            return (
              X(m, function (ee, ne, D) {
                if (F.call(G, ee, ne, D)) return (V = ee), !0;
              }),
              V
            );
          }),
        (e.filter = e.select =
          function (m, F, G) {
            var V = [];
            return m == null
              ? V
              : w && m.filter === w
              ? m.filter(F, G)
              : (L(m, function (ee, ne, D) {
                  F.call(G, ee, ne, D) && V.push(ee);
                }),
                V);
          });
      var X =
        (e.some =
        e.any =
          function (m, F, G) {
            F || (F = e.identity);
            var V = !1;
            return m == null
              ? V
              : P && m.some === P
              ? m.some(F, G)
              : (L(m, function (ee, ne, D) {
                  if (V || (V = F.call(G, ee, ne, D))) return t;
                }),
                !!V);
          });
      (e.contains = e.include =
        function (m, F) {
          return m == null
            ? !1
            : b && m.indexOf === b
            ? m.indexOf(F) != -1
            : X(m, function (G) {
                return G === F;
              });
        }),
        (e.delay = function (m, F) {
          var G = a.call(arguments, 2);
          return setTimeout(function () {
            return m.apply(null, G);
          }, F);
        }),
        (e.defer = function (m) {
          return e.delay.apply(e, [m, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (m) {
          var F, G, V;
          return function () {
            F ||
              ((F = !0),
              (G = arguments),
              (V = this),
              vm.frame(function () {
                (F = !1), m.apply(V, G);
              }));
          };
        }),
        (e.debounce = function (m, F, G) {
          var V,
            ee,
            ne,
            D,
            j,
            Y = function () {
              var B = e.now() - D;
              B < F
                ? (V = setTimeout(Y, F - B))
                : ((V = null), G || ((j = m.apply(ne, ee)), (ne = ee = null)));
            };
          return function () {
            (ne = this), (ee = arguments), (D = e.now());
            var B = G && !V;
            return (
              V || (V = setTimeout(Y, F)),
              B && ((j = m.apply(ne, ee)), (ne = ee = null)),
              j
            );
          };
        }),
        (e.defaults = function (m) {
          if (!e.isObject(m)) return m;
          for (var F = 1, G = arguments.length; F < G; F++) {
            var V = arguments[F];
            for (var ee in V) m[ee] === void 0 && (m[ee] = V[ee]);
          }
          return m;
        }),
        (e.keys = function (m) {
          if (!e.isObject(m)) return [];
          if (q) return q(m);
          var F = [];
          for (var G in m) e.has(m, G) && F.push(G);
          return F;
        }),
        (e.has = function (m, F) {
          return f.call(m, F);
        }),
        (e.isObject = function (m) {
          return m === Object(m);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var $ = /(.)^/,
        Q = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        ie = /\\|'|\r|\n|\u2028|\u2029/g,
        te = function (m) {
          return "\\" + Q[m];
        },
        M = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (m, F, G) {
          !F && G && (F = G), (F = e.defaults({}, F, e.templateSettings));
          var V = RegExp(
              [
                (F.escape || $).source,
                (F.interpolate || $).source,
                (F.evaluate || $).source,
              ].join("|") + "|$",
              "g"
            ),
            ee = 0,
            ne = "__p+='";
          m.replace(V, function (B, U, p, k, z) {
            return (
              (ne += m.slice(ee, z).replace(ie, te)),
              (ee = z + B.length),
              U
                ? (ne +=
                    `'+
((__t=(` +
                    U +
                    `))==null?'':_.escape(__t))+
'`)
                : p
                ? (ne +=
                    `'+
((__t=(` +
                    p +
                    `))==null?'':__t)+
'`)
                : k &&
                  (ne +=
                    `';
` +
                    k +
                    `
__p+='`),
              B
            );
          }),
            (ne += `';
`);
          var D = F.variable;
          if (D) {
            if (!M.test(D))
              throw new Error("variable is not a bare identifier: " + D);
          } else
            (ne =
              `with(obj||{}){
` +
              ne +
              `}
`),
              (D = "obj");
          ne =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            ne +
            `return __p;
`;
          var j;
          try {
            j = new Function(F.variable || "obj", "_", ne);
          } catch (B) {
            throw ((B.source = ne), B);
          }
          var Y = function (B) {
            return j.call(this, B, e);
          };
          return (
            (Y.source =
              "function(" +
              D +
              `){
` +
              ne +
              "}"),
            Y
          );
        }),
        e
      );
    })();
  });
  var He = u((lW, Cs) => {
    var Ee = {},
      Kt = {},
      zt = [],
      Ui = window.Webflow || [],
      It = window.jQuery,
      $e = It(window),
      Em = It(document),
      ot = It.isFunction,
      Ye = (Ee._ = Is()),
      Os = (Ee.tram = Fi() && It.tram),
      ln = !1,
      Xi = !1;
    Os.config.hideBackface = !1;
    Os.config.keepInherited = !0;
    Ee.define = function (e, t, r) {
      Kt[e] && bs(Kt[e]);
      var n = (Kt[e] = t(It, Ye, r) || {});
      return Ss(n), n;
    };
    Ee.require = function (e) {
      return Kt[e];
    };
    function Ss(e) {
      Ee.env() &&
        (ot(e.design) && $e.on("__wf_design", e.design),
        ot(e.preview) && $e.on("__wf_preview", e.preview)),
        ot(e.destroy) && $e.on("__wf_destroy", e.destroy),
        e.ready && ot(e.ready) && hm(e);
    }
    function hm(e) {
      if (ln) {
        e.ready();
        return;
      }
      Ye.contains(zt, e.ready) || zt.push(e.ready);
    }
    function bs(e) {
      ot(e.design) && $e.off("__wf_design", e.design),
        ot(e.preview) && $e.off("__wf_preview", e.preview),
        ot(e.destroy) && $e.off("__wf_destroy", e.destroy),
        e.ready && ot(e.ready) && gm(e);
    }
    function gm(e) {
      zt = Ye.filter(zt, function (t) {
        return t !== e.ready;
      });
    }
    Ee.push = function (e) {
      if (ln) {
        ot(e) && e();
        return;
      }
      Ui.push(e);
    };
    Ee.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var cn = navigator.userAgent.toLowerCase(),
      As = (Ee.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      _m = (Ee.env.chrome =
        /chrome/.test(cn) &&
        /Google/.test(navigator.vendor) &&
        parseInt(cn.match(/chrome\/(\d+)\./)[1], 10)),
      ym = (Ee.env.ios = /(ipod|iphone|ipad)/.test(cn));
    Ee.env.safari = /safari/.test(cn) && !_m && !ym;
    var Gi;
    As &&
      Em.on("touchstart mousedown", function (e) {
        Gi = e.target;
      });
    Ee.validClick = As
      ? function (e) {
          return e === Gi || It.contains(e, Gi);
        }
      : function () {
          return !0;
        };
    var ws = "resize.webflow orientationchange.webflow load.webflow",
      mm = "scroll.webflow " + ws;
    Ee.resize = Vi($e, ws);
    Ee.scroll = Vi($e, mm);
    Ee.redraw = Vi();
    function Vi(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = Ye.throttle(function (i) {
          Ye.each(r, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (i) {
          typeof i == "function" && (Ye.contains(r, i) || r.push(i));
        }),
        (n.off = function (i) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = Ye.filter(r, function (o) {
            return o !== i;
          });
        }),
        n
      );
    }
    Ee.location = function (e) {
      window.location = e;
    };
    Ee.env() && (Ee.location = function () {});
    Ee.ready = function () {
      (ln = !0), Xi ? Im() : Ye.each(zt, Ts), Ye.each(Ui, Ts), Ee.resize.up();
    };
    function Ts(e) {
      ot(e) && e();
    }
    function Im() {
      (Xi = !1), Ye.each(Kt, Ss);
    }
    var Lt;
    Ee.load = function (e) {
      Lt.then(e);
    };
    function Rs() {
      Lt && (Lt.reject(), $e.off("load", Lt.resolve)),
        (Lt = new It.Deferred()),
        $e.on("load", Lt.resolve);
    }
    Ee.destroy = function (e) {
      (e = e || {}),
        (Xi = !0),
        $e.triggerHandler("__wf_destroy"),
        e.domready != null && (ln = e.domready),
        Ye.each(Kt, bs),
        Ee.resize.off(),
        Ee.scroll.off(),
        Ee.redraw.off(),
        (zt = []),
        (Ui = []),
        Lt.state() === "pending" && Rs();
    };
    It(Ee.ready);
    Rs();
    Cs.exports = window.Webflow = Ee;
  });
  var xs = u((fW, qs) => {
    var Ns = He();
    Ns.define(
      "brand",
      (qs.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          c =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          f;
        t.ready = function () {
          var _ = n.attr("data-wf-status"),
            w = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(w) && a.hostname !== w && (_ = !0),
            _ &&
              !s &&
              ((f = f || v()),
              g(),
              setTimeout(g, 500),
              e(r).off(c, E).on(c, E));
        };
        function E() {
          var _ =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(f).attr("style", _ ? "display: none !important;" : "");
        }
        function v() {
          var _ = e('').attr(
              "href",
              "https://webflow.com?utm_campaign=brandjs"
            ),
            w = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "8px", width: "16px" }),
            S = e("<img>")
              .attr(
                "src",
                "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg"
              )
              .attr("alt", "Made in Webflow");
          return _.append(w, S), _[0];
        }
        function g() {
          var _ = i.children(o),
            w = _.length && _.get(0) === f,
            S = Ns.env("editor");
          if (w) {
            S && _.remove();
            return;
          }
          _.length && _.remove(), S || i.append(f);
        }
        return t;
      })
    );
  });
  var Ps = u((dW, Ls) => {
    var Wi = He();
    Wi.define(
      "edit",
      (Ls.exports = function (e, t, r) {
        if (
          ((r = r || {}),
          (Wi.env("test") || Wi.env("frame")) && !r.fixture && !Tm())
        )
          return { exit: 1 };
        var n = {},
          i = e(window),
          o = e(document.documentElement),
          a = document.location,
          s = "hashchange",
          c,
          f = r.load || g,
          E = !1;
        try {
          E =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        E
          ? f()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            f()
          : i.on(s, v).triggerHandler(s);
        function v() {
          c || (/\?edit/.test(a.hash) && f());
        }
        function g() {
          (c = !0),
            (window.WebflowEditor = !0),
            i.off(s, v),
            R(function (q) {
              e.ajax({
                url: b("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: o.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: _(q),
              });
            });
        }
        function _(q) {
          return function (x) {
            if (!x) {
              console.error("Could not load editor data");
              return;
            }
            (x.thirdPartyCookiesSupported = q),
              w(P(x.bugReporterScriptPath), function () {
                w(P(x.scriptPath), function () {
                  window.WebflowEditor(x);
                });
              });
          };
        }
        function w(q, x) {
          e.ajax({ type: "GET", url: q, dataType: "script", cache: !0 }).then(
            x,
            S
          );
        }
        function S(q, x, L) {
          throw (console.error("Could not load editor script: " + x), L);
        }
        function P(q) {
          return q.indexOf("//") >= 0
            ? q
            : b("https://editor-api.webflow.com" + q);
        }
        function b(q) {
          return q.replace(/([^:])\/\//g, "$1/");
        }
        function R(q) {
          var x = window.document.createElement("iframe");
          (x.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (x.style.display = "none"),
            (x.sandbox = "allow-scripts allow-same-origin");
          var L = function (X) {
            X.data === "WF_third_party_cookies_unsupported"
              ? (T(x, L), q(!1))
              : X.data === "WF_third_party_cookies_supported" &&
                (T(x, L), q(!0));
          };
          (x.onerror = function () {
            T(x, L), q(!1);
          }),
            window.addEventListener("message", L, !1),
            window.document.body.appendChild(x);
        }
        function T(q, x) {
          window.removeEventListener("message", x, !1), q.remove();
        }
        return n;
      })
    );
    function Tm() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var Ms = u((pW, Ds) => {
    var Om = He();
    Om.define(
      "focus-visible",
      (Ds.exports = function () {
        function e(r) {
          var n = !0,
            i = !1,
            o = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(T) {
            return !!(
              T &&
              T !== document &&
              T.nodeName !== "HTML" &&
              T.nodeName !== "BODY" &&
              "classList" in T &&
              "contains" in T.classList
            );
          }
          function c(T) {
            var q = T.type,
              x = T.tagName;
            return !!(
              (x === "INPUT" && a[q] && !T.readOnly) ||
              (x === "TEXTAREA" && !T.readOnly) ||
              T.isContentEditable
            );
          }
          function f(T) {
            T.getAttribute("data-wf-focus-visible") ||
              T.setAttribute("data-wf-focus-visible", "true");
          }
          function E(T) {
            T.getAttribute("data-wf-focus-visible") &&
              T.removeAttribute("data-wf-focus-visible");
          }
          function v(T) {
            T.metaKey ||
              T.altKey ||
              T.ctrlKey ||
              (s(r.activeElement) && f(r.activeElement), (n = !0));
          }
          function g() {
            n = !1;
          }
          function _(T) {
            s(T.target) && (n || c(T.target)) && f(T.target);
          }
          function w(T) {
            s(T.target) &&
              T.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
              window.clearTimeout(o),
              (o = window.setTimeout(function () {
                i = !1;
              }, 100)),
              E(T.target));
          }
          function S() {
            document.visibilityState === "hidden" && (i && (n = !0), P());
          }
          function P() {
            document.addEventListener("mousemove", R),
              document.addEventListener("mousedown", R),
              document.addEventListener("mouseup", R),
              document.addEventListener("pointermove", R),
              document.addEventListener("pointerdown", R),
              document.addEventListener("pointerup", R),
              document.addEventListener("touchmove", R),
              document.addEventListener("touchstart", R),
              document.addEventListener("touchend", R);
          }
          function b() {
            document.removeEventListener("mousemove", R),
              document.removeEventListener("mousedown", R),
              document.removeEventListener("mouseup", R),
              document.removeEventListener("pointermove", R),
              document.removeEventListener("pointerdown", R),
              document.removeEventListener("pointerup", R),
              document.removeEventListener("touchmove", R),
              document.removeEventListener("touchstart", R),
              document.removeEventListener("touchend", R);
          }
          function R(T) {
            (T.target.nodeName && T.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), b());
          }
          document.addEventListener("keydown", v, !0),
            document.addEventListener("mousedown", g, !0),
            document.addEventListener("pointerdown", g, !0),
            document.addEventListener("touchstart", g, !0),
            document.addEventListener("visibilitychange", S, !0),
            P(),
            r.addEventListener("focus", _, !0),
            r.addEventListener("blur", w, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var Us = u((vW, Gs) => {
    var Fs = He();
    Fs.define(
      "focus",
      (Gs.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var s = a.target,
            c = s.tagName;
          return (
            (/^a$/i.test(c) && s.href != null) ||
            (/^(button|textarea)$/i.test(c) && s.disabled !== !0) ||
            (/^input$/i.test(c) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(c) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(c) ||
            (/^video$/i.test(c) && s.controls === !0)
          );
        }
        function i(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            Fs.env.safari &&
            (document.addEventListener("mousedown", i, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: o };
      })
    );
  });
  var Ws = u((EW, Vs) => {
    "use strict";
    var Bi = window.jQuery,
      at = {},
      fn = [],
      Xs = ".w-ix",
      dn = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Bi(t).triggerHandler(at.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Bi(t).triggerHandler(at.types.OUTRO));
        },
      };
    at.triggers = {};
    at.types = { INTRO: "w-ix-intro" + Xs, OUTRO: "w-ix-outro" + Xs };
    at.init = function () {
      for (var e = fn.length, t = 0; t < e; t++) {
        var r = fn[t];
        r[0](0, r[1]);
      }
      (fn = []), Bi.extend(at.triggers, dn);
    };
    at.async = function () {
      for (var e in dn) {
        var t = dn[e];
        dn.hasOwnProperty(e) &&
          (at.triggers[e] = function (r, n) {
            fn.push([t, n]);
          });
      }
    };
    at.async();
    Vs.exports = at;
  });
  var vn = u((hW, ks) => {
    "use strict";
    var Hi = Ws();
    function Bs(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var Sm = window.jQuery,
      pn = {},
      Hs = ".w-ix",
      bm = {
        reset: function (e, t) {
          Hi.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Hi.triggers.intro(e, t), Bs(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Hi.triggers.outro(e, t), Bs(t, "COMPONENT_INACTIVE");
        },
      };
    pn.triggers = {};
    pn.types = { INTRO: "w-ix-intro" + Hs, OUTRO: "w-ix-outro" + Hs };
    Sm.extend(pn.triggers, bm);
    ks.exports = pn;
  });
  var js = u((gW, ht) => {
    function ki(e) {
      return (
        (ht.exports = ki =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (ht.exports.__esModule = !0),
        (ht.exports.default = ht.exports),
        ki(e)
      );
    }
    (ht.exports = ki),
      (ht.exports.__esModule = !0),
      (ht.exports.default = ht.exports);
  });
  var Yt = u((_W, br) => {
    var Am = js().default;
    function Ks(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (Ks = function (i) {
        return i ? r : t;
      })(e);
    }
    function wm(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (Am(e) !== "object" && typeof e != "function"))
        return { default: e };
      var r = Ks(t);
      if (r && r.has(e)) return r.get(e);
      var n = {},
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (br.exports = wm),
      (br.exports.__esModule = !0),
      (br.exports.default = br.exports);
  });
  var st = u((yW, Ar) => {
    function Rm(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Ar.exports = Rm),
      (Ar.exports.__esModule = !0),
      (Ar.exports.default = Ar.exports);
  });
  var me = u((mW, zs) => {
    var En = function (e) {
      return e && e.Math == Math && e;
    };
    zs.exports =
      En(typeof globalThis == "object" && globalThis) ||
      En(typeof window == "object" && window) ||
      En(typeof self == "object" && self) ||
      En(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var $t = u((IW, Ys) => {
    Ys.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var Pt = u((TW, $s) => {
    var Cm = $t();
    $s.exports = !Cm(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var hn = u((OW, Qs) => {
    var wr = Function.prototype.call;
    Qs.exports = wr.bind
      ? wr.bind(wr)
      : function () {
          return wr.apply(wr, arguments);
        };
  });
  var tu = u((eu) => {
    "use strict";
    var Zs = {}.propertyIsEnumerable,
      Js = Object.getOwnPropertyDescriptor,
      Nm = Js && !Zs.call({ 1: 2 }, 1);
    eu.f = Nm
      ? function (t) {
          var r = Js(this, t);
          return !!r && r.enumerable;
        }
      : Zs;
  });
  var ji = u((bW, ru) => {
    ru.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var Qe = u((AW, iu) => {
    var nu = Function.prototype,
      Ki = nu.bind,
      zi = nu.call,
      qm = Ki && Ki.bind(zi);
    iu.exports = Ki
      ? function (e) {
          return e && qm(zi, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return zi.apply(e, arguments);
            }
          );
        };
  });
  var su = u((wW, au) => {
    var ou = Qe(),
      xm = ou({}.toString),
      Lm = ou("".slice);
    au.exports = function (e) {
      return Lm(xm(e), 8, -1);
    };
  });
  var cu = u((RW, uu) => {
    var Pm = me(),
      Dm = Qe(),
      Mm = $t(),
      Fm = su(),
      Yi = Pm.Object,
      Gm = Dm("".split);
    uu.exports = Mm(function () {
      return !Yi("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return Fm(e) == "String" ? Gm(e, "") : Yi(e);
        }
      : Yi;
  });
  var $i = u((CW, lu) => {
    var Um = me(),
      Xm = Um.TypeError;
    lu.exports = function (e) {
      if (e == null) throw Xm("Can't call method on " + e);
      return e;
    };
  });
  var Rr = u((NW, fu) => {
    var Vm = cu(),
      Wm = $i();
    fu.exports = function (e) {
      return Vm(Wm(e));
    };
  });
  var ut = u((qW, du) => {
    du.exports = function (e) {
      return typeof e == "function";
    };
  });
  var Qt = u((xW, pu) => {
    var Bm = ut();
    pu.exports = function (e) {
      return typeof e == "object" ? e !== null : Bm(e);
    };
  });
  var Cr = u((LW, vu) => {
    var Qi = me(),
      Hm = ut(),
      km = function (e) {
        return Hm(e) ? e : void 0;
      };
    vu.exports = function (e, t) {
      return arguments.length < 2 ? km(Qi[e]) : Qi[e] && Qi[e][t];
    };
  });
  var hu = u((PW, Eu) => {
    var jm = Qe();
    Eu.exports = jm({}.isPrototypeOf);
  });
  var _u = u((DW, gu) => {
    var Km = Cr();
    gu.exports = Km("navigator", "userAgent") || "";
  });
  var bu = u((MW, Su) => {
    var Ou = me(),
      Zi = _u(),
      yu = Ou.process,
      mu = Ou.Deno,
      Iu = (yu && yu.versions) || (mu && mu.version),
      Tu = Iu && Iu.v8,
      Ze,
      gn;
    Tu &&
      ((Ze = Tu.split(".")),
      (gn = Ze[0] > 0 && Ze[0] < 4 ? 1 : +(Ze[0] + Ze[1])));
    !gn &&
      Zi &&
      ((Ze = Zi.match(/Edge\/(\d+)/)),
      (!Ze || Ze[1] >= 74) &&
        ((Ze = Zi.match(/Chrome\/(\d+)/)), Ze && (gn = +Ze[1])));
    Su.exports = gn;
  });
  var Ji = u((FW, wu) => {
    var Au = bu(),
      zm = $t();
    wu.exports =
      !!Object.getOwnPropertySymbols &&
      !zm(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && Au && Au < 41)
        );
      });
  });
  var eo = u((GW, Ru) => {
    var Ym = Ji();
    Ru.exports = Ym && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var to = u((UW, Cu) => {
    var $m = me(),
      Qm = Cr(),
      Zm = ut(),
      Jm = hu(),
      eI = eo(),
      tI = $m.Object;
    Cu.exports = eI
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = Qm("Symbol");
          return Zm(t) && Jm(t.prototype, tI(e));
        };
  });
  var qu = u((XW, Nu) => {
    var rI = me(),
      nI = rI.String;
    Nu.exports = function (e) {
      try {
        return nI(e);
      } catch {
        return "Object";
      }
    };
  });
  var Lu = u((VW, xu) => {
    var iI = me(),
      oI = ut(),
      aI = qu(),
      sI = iI.TypeError;
    xu.exports = function (e) {
      if (oI(e)) return e;
      throw sI(aI(e) + " is not a function");
    };
  });
  var Du = u((WW, Pu) => {
    var uI = Lu();
    Pu.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : uI(r);
    };
  });
  var Fu = u((BW, Mu) => {
    var cI = me(),
      ro = hn(),
      no = ut(),
      io = Qt(),
      lI = cI.TypeError;
    Mu.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && no((r = e.toString)) && !io((n = ro(r, e)))) ||
        (no((r = e.valueOf)) && !io((n = ro(r, e)))) ||
        (t !== "string" && no((r = e.toString)) && !io((n = ro(r, e))))
      )
        return n;
      throw lI("Can't convert object to primitive value");
    };
  });
  var Uu = u((HW, Gu) => {
    Gu.exports = !1;
  });
  var _n = u((kW, Vu) => {
    var Xu = me(),
      fI = Object.defineProperty;
    Vu.exports = function (e, t) {
      try {
        fI(Xu, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        Xu[e] = t;
      }
      return t;
    };
  });
  var yn = u((jW, Bu) => {
    var dI = me(),
      pI = _n(),
      Wu = "__core-js_shared__",
      vI = dI[Wu] || pI(Wu, {});
    Bu.exports = vI;
  });
  var oo = u((KW, ku) => {
    var EI = Uu(),
      Hu = yn();
    (ku.exports = function (e, t) {
      return Hu[e] || (Hu[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: EI ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var Ku = u((zW, ju) => {
    var hI = me(),
      gI = $i(),
      _I = hI.Object;
    ju.exports = function (e) {
      return _I(gI(e));
    };
  });
  var Tt = u((YW, zu) => {
    var yI = Qe(),
      mI = Ku(),
      II = yI({}.hasOwnProperty);
    zu.exports =
      Object.hasOwn ||
      function (t, r) {
        return II(mI(t), r);
      };
  });
  var ao = u(($W, Yu) => {
    var TI = Qe(),
      OI = 0,
      SI = Math.random(),
      bI = TI((1).toString);
    Yu.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + bI(++OI + SI, 36);
    };
  });
  var so = u((QW, ec) => {
    var AI = me(),
      wI = oo(),
      $u = Tt(),
      RI = ao(),
      Qu = Ji(),
      Ju = eo(),
      Zt = wI("wks"),
      Dt = AI.Symbol,
      Zu = Dt && Dt.for,
      CI = Ju ? Dt : (Dt && Dt.withoutSetter) || RI;
    ec.exports = function (e) {
      if (!$u(Zt, e) || !(Qu || typeof Zt[e] == "string")) {
        var t = "Symbol." + e;
        Qu && $u(Dt, e)
          ? (Zt[e] = Dt[e])
          : Ju && Zu
          ? (Zt[e] = Zu(t))
          : (Zt[e] = CI(t));
      }
      return Zt[e];
    };
  });
  var ic = u((ZW, nc) => {
    var NI = me(),
      qI = hn(),
      tc = Qt(),
      rc = to(),
      xI = Du(),
      LI = Fu(),
      PI = so(),
      DI = NI.TypeError,
      MI = PI("toPrimitive");
    nc.exports = function (e, t) {
      if (!tc(e) || rc(e)) return e;
      var r = xI(e, MI),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = qI(r, e, t)), !tc(n) || rc(n))
        )
          return n;
        throw DI("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), LI(e, t);
    };
  });
  var uo = u((JW, oc) => {
    var FI = ic(),
      GI = to();
    oc.exports = function (e) {
      var t = FI(e, "string");
      return GI(t) ? t : t + "";
    };
  });
  var lo = u((eB, sc) => {
    var UI = me(),
      ac = Qt(),
      co = UI.document,
      XI = ac(co) && ac(co.createElement);
    sc.exports = function (e) {
      return XI ? co.createElement(e) : {};
    };
  });
  var fo = u((tB, uc) => {
    var VI = Pt(),
      WI = $t(),
      BI = lo();
    uc.exports =
      !VI &&
      !WI(function () {
        return (
          Object.defineProperty(BI("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var po = u((lc) => {
    var HI = Pt(),
      kI = hn(),
      jI = tu(),
      KI = ji(),
      zI = Rr(),
      YI = uo(),
      $I = Tt(),
      QI = fo(),
      cc = Object.getOwnPropertyDescriptor;
    lc.f = HI
      ? cc
      : function (t, r) {
          if (((t = zI(t)), (r = YI(r)), QI))
            try {
              return cc(t, r);
            } catch {}
          if ($I(t, r)) return KI(!kI(jI.f, t, r), t[r]);
        };
  });
  var Nr = u((nB, dc) => {
    var fc = me(),
      ZI = Qt(),
      JI = fc.String,
      eT = fc.TypeError;
    dc.exports = function (e) {
      if (ZI(e)) return e;
      throw eT(JI(e) + " is not an object");
    };
  });
  var qr = u((Ec) => {
    var tT = me(),
      rT = Pt(),
      nT = fo(),
      pc = Nr(),
      iT = uo(),
      oT = tT.TypeError,
      vc = Object.defineProperty;
    Ec.f = rT
      ? vc
      : function (t, r, n) {
          if ((pc(t), (r = iT(r)), pc(n), nT))
            try {
              return vc(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw oT("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var mn = u((oB, hc) => {
    var aT = Pt(),
      sT = qr(),
      uT = ji();
    hc.exports = aT
      ? function (e, t, r) {
          return sT.f(e, t, uT(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var Eo = u((aB, gc) => {
    var cT = Qe(),
      lT = ut(),
      vo = yn(),
      fT = cT(Function.toString);
    lT(vo.inspectSource) ||
      (vo.inspectSource = function (e) {
        return fT(e);
      });
    gc.exports = vo.inspectSource;
  });
  var mc = u((sB, yc) => {
    var dT = me(),
      pT = ut(),
      vT = Eo(),
      _c = dT.WeakMap;
    yc.exports = pT(_c) && /native code/.test(vT(_c));
  });
  var ho = u((uB, Tc) => {
    var ET = oo(),
      hT = ao(),
      Ic = ET("keys");
    Tc.exports = function (e) {
      return Ic[e] || (Ic[e] = hT(e));
    };
  });
  var In = u((cB, Oc) => {
    Oc.exports = {};
  });
  var Cc = u((lB, Rc) => {
    var gT = mc(),
      wc = me(),
      go = Qe(),
      _T = Qt(),
      yT = mn(),
      _o = Tt(),
      yo = yn(),
      mT = ho(),
      IT = In(),
      Sc = "Object already initialized",
      Io = wc.TypeError,
      TT = wc.WeakMap,
      Tn,
      xr,
      On,
      OT = function (e) {
        return On(e) ? xr(e) : Tn(e, {});
      },
      ST = function (e) {
        return function (t) {
          var r;
          if (!_T(t) || (r = xr(t)).type !== e)
            throw Io("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    gT || yo.state
      ? ((Ot = yo.state || (yo.state = new TT())),
        (bc = go(Ot.get)),
        (mo = go(Ot.has)),
        (Ac = go(Ot.set)),
        (Tn = function (e, t) {
          if (mo(Ot, e)) throw new Io(Sc);
          return (t.facade = e), Ac(Ot, e, t), t;
        }),
        (xr = function (e) {
          return bc(Ot, e) || {};
        }),
        (On = function (e) {
          return mo(Ot, e);
        }))
      : ((Mt = mT("state")),
        (IT[Mt] = !0),
        (Tn = function (e, t) {
          if (_o(e, Mt)) throw new Io(Sc);
          return (t.facade = e), yT(e, Mt, t), t;
        }),
        (xr = function (e) {
          return _o(e, Mt) ? e[Mt] : {};
        }),
        (On = function (e) {
          return _o(e, Mt);
        }));
    var Ot, bc, mo, Ac, Mt;
    Rc.exports = { set: Tn, get: xr, has: On, enforce: OT, getterFor: ST };
  });
  var xc = u((fB, qc) => {
    var To = Pt(),
      bT = Tt(),
      Nc = Function.prototype,
      AT = To && Object.getOwnPropertyDescriptor,
      Oo = bT(Nc, "name"),
      wT = Oo && function () {}.name === "something",
      RT = Oo && (!To || (To && AT(Nc, "name").configurable));
    qc.exports = { EXISTS: Oo, PROPER: wT, CONFIGURABLE: RT };
  });
  var Fc = u((dB, Mc) => {
    var CT = me(),
      Lc = ut(),
      NT = Tt(),
      Pc = mn(),
      qT = _n(),
      xT = Eo(),
      Dc = Cc(),
      LT = xc().CONFIGURABLE,
      PT = Dc.get,
      DT = Dc.enforce,
      MT = String(String).split("String");
    (Mc.exports = function (e, t, r, n) {
      var i = n ? !!n.unsafe : !1,
        o = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        s = n && n.name !== void 0 ? n.name : t,
        c;
      if (
        (Lc(r) &&
          (String(s).slice(0, 7) === "Symbol(" &&
            (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!NT(r, "name") || (LT && r.name !== s)) && Pc(r, "name", s),
          (c = DT(r)),
          c.source || (c.source = MT.join(typeof s == "string" ? s : ""))),
        e === CT)
      ) {
        o ? (e[t] = r) : qT(t, r);
        return;
      } else i ? !a && e[t] && (o = !0) : delete e[t];
      o ? (e[t] = r) : Pc(e, t, r);
    })(Function.prototype, "toString", function () {
      return (Lc(this) && PT(this).source) || xT(this);
    });
  });
  var So = u((pB, Gc) => {
    var FT = Math.ceil,
      GT = Math.floor;
    Gc.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? GT : FT)(t);
    };
  });
  var Xc = u((vB, Uc) => {
    var UT = So(),
      XT = Math.max,
      VT = Math.min;
    Uc.exports = function (e, t) {
      var r = UT(e);
      return r < 0 ? XT(r + t, 0) : VT(r, t);
    };
  });
  var Wc = u((EB, Vc) => {
    var WT = So(),
      BT = Math.min;
    Vc.exports = function (e) {
      return e > 0 ? BT(WT(e), 9007199254740991) : 0;
    };
  });
  var Hc = u((hB, Bc) => {
    var HT = Wc();
    Bc.exports = function (e) {
      return HT(e.length);
    };
  });
  var bo = u((gB, jc) => {
    var kT = Rr(),
      jT = Xc(),
      KT = Hc(),
      kc = function (e) {
        return function (t, r, n) {
          var i = kT(t),
            o = KT(i),
            a = jT(n, o),
            s;
          if (e && r != r) {
            for (; o > a; ) if (((s = i[a++]), s != s)) return !0;
          } else
            for (; o > a; a++)
              if ((e || a in i) && i[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    jc.exports = { includes: kc(!0), indexOf: kc(!1) };
  });
  var wo = u((_B, zc) => {
    var zT = Qe(),
      Ao = Tt(),
      YT = Rr(),
      $T = bo().indexOf,
      QT = In(),
      Kc = zT([].push);
    zc.exports = function (e, t) {
      var r = YT(e),
        n = 0,
        i = [],
        o;
      for (o in r) !Ao(QT, o) && Ao(r, o) && Kc(i, o);
      for (; t.length > n; ) Ao(r, (o = t[n++])) && (~$T(i, o) || Kc(i, o));
      return i;
    };
  });
  var Sn = u((yB, Yc) => {
    Yc.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var Qc = u(($c) => {
    var ZT = wo(),
      JT = Sn(),
      eO = JT.concat("length", "prototype");
    $c.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return ZT(t, eO);
      };
  });
  var Jc = u((Zc) => {
    Zc.f = Object.getOwnPropertySymbols;
  });
  var tl = u((TB, el) => {
    var tO = Cr(),
      rO = Qe(),
      nO = Qc(),
      iO = Jc(),
      oO = Nr(),
      aO = rO([].concat);
    el.exports =
      tO("Reflect", "ownKeys") ||
      function (t) {
        var r = nO.f(oO(t)),
          n = iO.f;
        return n ? aO(r, n(t)) : r;
      };
  });
  var nl = u((OB, rl) => {
    var sO = Tt(),
      uO = tl(),
      cO = po(),
      lO = qr();
    rl.exports = function (e, t) {
      for (var r = uO(t), n = lO.f, i = cO.f, o = 0; o < r.length; o++) {
        var a = r[o];
        sO(e, a) || n(e, a, i(t, a));
      }
    };
  });
  var ol = u((SB, il) => {
    var fO = $t(),
      dO = ut(),
      pO = /#|\.prototype\./,
      Lr = function (e, t) {
        var r = EO[vO(e)];
        return r == gO ? !0 : r == hO ? !1 : dO(t) ? fO(t) : !!t;
      },
      vO = (Lr.normalize = function (e) {
        return String(e).replace(pO, ".").toLowerCase();
      }),
      EO = (Lr.data = {}),
      hO = (Lr.NATIVE = "N"),
      gO = (Lr.POLYFILL = "P");
    il.exports = Lr;
  });
  var sl = u((bB, al) => {
    var Ro = me(),
      _O = po().f,
      yO = mn(),
      mO = Fc(),
      IO = _n(),
      TO = nl(),
      OO = ol();
    al.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        i = e.stat,
        o,
        a,
        s,
        c,
        f,
        E;
      if (
        (n
          ? (a = Ro)
          : i
          ? (a = Ro[r] || IO(r, {}))
          : (a = (Ro[r] || {}).prototype),
        a)
      )
        for (s in t) {
          if (
            ((f = t[s]),
            e.noTargetGet ? ((E = _O(a, s)), (c = E && E.value)) : (c = a[s]),
            (o = OO(n ? s : r + (i ? "." : "#") + s, e.forced)),
            !o && c !== void 0)
          ) {
            if (typeof f == typeof c) continue;
            TO(f, c);
          }
          (e.sham || (c && c.sham)) && yO(f, "sham", !0), mO(a, s, f, e);
        }
    };
  });
  var cl = u((AB, ul) => {
    var SO = wo(),
      bO = Sn();
    ul.exports =
      Object.keys ||
      function (t) {
        return SO(t, bO);
      };
  });
  var fl = u((wB, ll) => {
    var AO = Pt(),
      wO = qr(),
      RO = Nr(),
      CO = Rr(),
      NO = cl();
    ll.exports = AO
      ? Object.defineProperties
      : function (t, r) {
          RO(t);
          for (var n = CO(r), i = NO(r), o = i.length, a = 0, s; o > a; )
            wO.f(t, (s = i[a++]), n[s]);
          return t;
        };
  });
  var pl = u((RB, dl) => {
    var qO = Cr();
    dl.exports = qO("document", "documentElement");
  });
  var Il = u((CB, ml) => {
    var xO = Nr(),
      LO = fl(),
      vl = Sn(),
      PO = In(),
      DO = pl(),
      MO = lo(),
      FO = ho(),
      El = ">",
      hl = "<",
      No = "prototype",
      qo = "script",
      _l = FO("IE_PROTO"),
      Co = function () {},
      yl = function (e) {
        return hl + qo + El + e + hl + "/" + qo + El;
      },
      gl = function (e) {
        e.write(yl("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      GO = function () {
        var e = MO("iframe"),
          t = "java" + qo + ":",
          r;
        return (
          (e.style.display = "none"),
          DO.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(yl("document.F=Object")),
          r.close(),
          r.F
        );
      },
      bn,
      An = function () {
        try {
          bn = new ActiveXObject("htmlfile");
        } catch {}
        An =
          typeof document < "u"
            ? document.domain && bn
              ? gl(bn)
              : GO()
            : gl(bn);
        for (var e = vl.length; e--; ) delete An[No][vl[e]];
        return An();
      };
    PO[_l] = !0;
    ml.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((Co[No] = xO(t)), (n = new Co()), (Co[No] = null), (n[_l] = t))
            : (n = An()),
          r === void 0 ? n : LO(n, r)
        );
      };
  });
  var Ol = u((NB, Tl) => {
    var UO = so(),
      XO = Il(),
      VO = qr(),
      xo = UO("unscopables"),
      Lo = Array.prototype;
    Lo[xo] == null && VO.f(Lo, xo, { configurable: !0, value: XO(null) });
    Tl.exports = function (e) {
      Lo[xo][e] = !0;
    };
  });
  var Sl = u(() => {
    "use strict";
    var WO = sl(),
      BO = bo().includes,
      HO = Ol();
    WO(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return BO(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    HO("includes");
  });
  var Al = u((LB, bl) => {
    var kO = me(),
      jO = Qe();
    bl.exports = function (e, t) {
      return jO(kO[e].prototype[t]);
    };
  });
  var Rl = u((PB, wl) => {
    Sl();
    var KO = Al();
    wl.exports = KO("Array", "includes");
  });
  var Nl = u((DB, Cl) => {
    var zO = Rl();
    Cl.exports = zO;
  });
  var xl = u((MB, ql) => {
    var YO = Nl();
    ql.exports = YO;
  });
  var Po = u((FB, Ll) => {
    var $O =
      typeof global == "object" && global && global.Object === Object && global;
    Ll.exports = $O;
  });
  var Je = u((GB, Pl) => {
    var QO = Po(),
      ZO = typeof self == "object" && self && self.Object === Object && self,
      JO = QO || ZO || Function("return this")();
    Pl.exports = JO;
  });
  var Jt = u((UB, Dl) => {
    var eS = Je(),
      tS = eS.Symbol;
    Dl.exports = tS;
  });
  var Ul = u((XB, Gl) => {
    var Ml = Jt(),
      Fl = Object.prototype,
      rS = Fl.hasOwnProperty,
      nS = Fl.toString,
      Pr = Ml ? Ml.toStringTag : void 0;
    function iS(e) {
      var t = rS.call(e, Pr),
        r = e[Pr];
      try {
        e[Pr] = void 0;
        var n = !0;
      } catch {}
      var i = nS.call(e);
      return n && (t ? (e[Pr] = r) : delete e[Pr]), i;
    }
    Gl.exports = iS;
  });
  var Vl = u((VB, Xl) => {
    var oS = Object.prototype,
      aS = oS.toString;
    function sS(e) {
      return aS.call(e);
    }
    Xl.exports = sS;
  });
  var St = u((WB, Hl) => {
    var Wl = Jt(),
      uS = Ul(),
      cS = Vl(),
      lS = "[object Null]",
      fS = "[object Undefined]",
      Bl = Wl ? Wl.toStringTag : void 0;
    function dS(e) {
      return e == null
        ? e === void 0
          ? fS
          : lS
        : Bl && Bl in Object(e)
        ? uS(e)
        : cS(e);
    }
    Hl.exports = dS;
  });
  var Do = u((BB, kl) => {
    function pS(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    kl.exports = pS;
  });
  var Mo = u((HB, jl) => {
    var vS = Do(),
      ES = vS(Object.getPrototypeOf, Object);
    jl.exports = ES;
  });
  var gt = u((kB, Kl) => {
    function hS(e) {
      return e != null && typeof e == "object";
    }
    Kl.exports = hS;
  });
  var Fo = u((jB, Yl) => {
    var gS = St(),
      _S = Mo(),
      yS = gt(),
      mS = "[object Object]",
      IS = Function.prototype,
      TS = Object.prototype,
      zl = IS.toString,
      OS = TS.hasOwnProperty,
      SS = zl.call(Object);
    function bS(e) {
      if (!yS(e) || gS(e) != mS) return !1;
      var t = _S(e);
      if (t === null) return !0;
      var r = OS.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && zl.call(r) == SS;
    }
    Yl.exports = bS;
  });
  var $l = u((Go) => {
    "use strict";
    Object.defineProperty(Go, "__esModule", { value: !0 });
    Go.default = AS;
    function AS(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var Ql = u((Xo, Uo) => {
    "use strict";
    Object.defineProperty(Xo, "__esModule", { value: !0 });
    var wS = $l(),
      RS = CS(wS);
    function CS(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var er;
    typeof self < "u"
      ? (er = self)
      : typeof window < "u"
      ? (er = window)
      : typeof global < "u"
      ? (er = global)
      : typeof Uo < "u"
      ? (er = Uo)
      : (er = Function("return this")());
    var NS = (0, RS.default)(er);
    Xo.default = NS;
  });
  var Vo = u((Dr) => {
    "use strict";
    Dr.__esModule = !0;
    Dr.ActionTypes = void 0;
    Dr.default = tf;
    var qS = Fo(),
      xS = ef(qS),
      LS = Ql(),
      Zl = ef(LS);
    function ef(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Jl = (Dr.ActionTypes = { INIT: "@@redux/INIT" });
    function tf(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(tf)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        s = a,
        c = !1;
      function f() {
        s === a && (s = a.slice());
      }
      function E() {
        return o;
      }
      function v(S) {
        if (typeof S != "function")
          throw new Error("Expected listener to be a function.");
        var P = !0;
        return (
          f(),
          s.push(S),
          function () {
            if (P) {
              (P = !1), f();
              var R = s.indexOf(S);
              s.splice(R, 1);
            }
          }
        );
      }
      function g(S) {
        if (!(0, xS.default)(S))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof S.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (c) throw new Error("Reducers may not dispatch actions.");
        try {
          (c = !0), (o = i(o, S));
        } finally {
          c = !1;
        }
        for (var P = (a = s), b = 0; b < P.length; b++) P[b]();
        return S;
      }
      function _(S) {
        if (typeof S != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = S), g({ type: Jl.INIT });
      }
      function w() {
        var S,
          P = v;
        return (
          (S = {
            subscribe: function (R) {
              if (typeof R != "object")
                throw new TypeError("Expected the observer to be an object.");
              function T() {
                R.next && R.next(E());
              }
              T();
              var q = P(T);
              return { unsubscribe: q };
            },
          }),
          (S[Zl.default] = function () {
            return this;
          }),
          S
        );
      }
      return (
        g({ type: Jl.INIT }),
        (n = { dispatch: g, subscribe: v, getState: E, replaceReducer: _ }),
        (n[Zl.default] = w),
        n
      );
    }
  });
  var Bo = u((Wo) => {
    "use strict";
    Wo.__esModule = !0;
    Wo.default = PS;
    function PS(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var of = u((Ho) => {
    "use strict";
    Ho.__esModule = !0;
    Ho.default = US;
    var rf = Vo(),
      DS = Fo(),
      $B = nf(DS),
      MS = Bo(),
      QB = nf(MS);
    function nf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function FS(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function GS(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: rf.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                rf.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function US(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var o = Object.keys(r);
      if (!1) var a;
      var s;
      try {
        GS(r);
      } catch (c) {
        s = c;
      }
      return function () {
        var f =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          E = arguments[1];
        if (s) throw s;
        if (!1) var v;
        for (var g = !1, _ = {}, w = 0; w < o.length; w++) {
          var S = o[w],
            P = r[S],
            b = f[S],
            R = P(b, E);
          if (typeof R > "u") {
            var T = FS(S, E);
            throw new Error(T);
          }
          (_[S] = R), (g = g || R !== b);
        }
        return g ? _ : f;
      };
    }
  });
  var sf = u((ko) => {
    "use strict";
    ko.__esModule = !0;
    ko.default = XS;
    function af(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function XS(e, t) {
      if (typeof e == "function") return af(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var o = r[i],
          a = e[o];
        typeof a == "function" && (n[o] = af(a, t));
      }
      return n;
    }
  });
  var Ko = u((jo) => {
    "use strict";
    jo.__esModule = !0;
    jo.default = VS;
    function VS() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var uf = u((zo) => {
    "use strict";
    zo.__esModule = !0;
    var WS =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    zo.default = jS;
    var BS = Ko(),
      HS = kS(BS);
    function kS(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function jS() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (i, o, a) {
          var s = n(i, o, a),
            c = s.dispatch,
            f = [],
            E = {
              getState: s.getState,
              dispatch: function (g) {
                return c(g);
              },
            };
          return (
            (f = t.map(function (v) {
              return v(E);
            })),
            (c = HS.default.apply(void 0, f)(s.dispatch)),
            WS({}, s, { dispatch: c })
          );
        };
      };
    }
  });
  var Yo = u((ke) => {
    "use strict";
    ke.__esModule = !0;
    ke.compose =
      ke.applyMiddleware =
      ke.bindActionCreators =
      ke.combineReducers =
      ke.createStore =
        void 0;
    var KS = Vo(),
      zS = tr(KS),
      YS = of(),
      $S = tr(YS),
      QS = sf(),
      ZS = tr(QS),
      JS = uf(),
      eb = tr(JS),
      tb = Ko(),
      rb = tr(tb),
      nb = Bo(),
      rH = tr(nb);
    function tr(e) {
      return e && e.__esModule ? e : { default: e };
    }
    ke.createStore = zS.default;
    ke.combineReducers = $S.default;
    ke.bindActionCreators = ZS.default;
    ke.applyMiddleware = eb.default;
    ke.compose = rb.default;
  });
  var cf = u((Ne) => {
    "use strict";
    Object.defineProperty(Ne, "__esModule", { value: !0 });
    Ne.QuickEffectIds =
      Ne.QuickEffectDirectionConsts =
      Ne.EventTypeConsts =
      Ne.EventLimitAffectedElements =
      Ne.EventContinuousMouseAxes =
      Ne.EventBasedOn =
      Ne.EventAppliesTo =
        void 0;
    var ib = {
      NAVBAR_OPEN: "NAVBAR_OPEN",
      NAVBAR_CLOSE: "NAVBAR_CLOSE",
      TAB_ACTIVE: "TAB_ACTIVE",
      TAB_INACTIVE: "TAB_INACTIVE",
      SLIDER_ACTIVE: "SLIDER_ACTIVE",
      SLIDER_INACTIVE: "SLIDER_INACTIVE",
      DROPDOWN_OPEN: "DROPDOWN_OPEN",
      DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
      MOUSE_CLICK: "MOUSE_CLICK",
      MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
      MOUSE_DOWN: "MOUSE_DOWN",
      MOUSE_UP: "MOUSE_UP",
      MOUSE_OVER: "MOUSE_OVER",
      MOUSE_OUT: "MOUSE_OUT",
      MOUSE_MOVE: "MOUSE_MOVE",
      MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
      SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
      SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
      SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
      ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
      ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
      PAGE_START: "PAGE_START",
      PAGE_FINISH: "PAGE_FINISH",
      PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
      PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
      PAGE_SCROLL: "PAGE_SCROLL",
    };
    Ne.EventTypeConsts = ib;
    var ob = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" };
    Ne.EventAppliesTo = ob;
    var ab = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" };
    Ne.EventBasedOn = ab;
    var sb = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" };
    Ne.EventContinuousMouseAxes = sb;
    var ub = {
      CHILDREN: "CHILDREN",
      SIBLINGS: "SIBLINGS",
      IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
    };
    Ne.EventLimitAffectedElements = ub;
    var cb = {
      FADE_EFFECT: "FADE_EFFECT",
      SLIDE_EFFECT: "SLIDE_EFFECT",
      GROW_EFFECT: "GROW_EFFECT",
      SHRINK_EFFECT: "SHRINK_EFFECT",
      SPIN_EFFECT: "SPIN_EFFECT",
      FLY_EFFECT: "FLY_EFFECT",
      POP_EFFECT: "POP_EFFECT",
      FLIP_EFFECT: "FLIP_EFFECT",
      JIGGLE_EFFECT: "JIGGLE_EFFECT",
      PULSE_EFFECT: "PULSE_EFFECT",
      DROP_EFFECT: "DROP_EFFECT",
      BLINK_EFFECT: "BLINK_EFFECT",
      BOUNCE_EFFECT: "BOUNCE_EFFECT",
      FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
      FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
      RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
      JELLO_EFFECT: "JELLO_EFFECT",
      GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
      SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
      PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
    };
    Ne.QuickEffectIds = cb;
    var lb = {
      LEFT: "LEFT",
      RIGHT: "RIGHT",
      BOTTOM: "BOTTOM",
      TOP: "TOP",
      BOTTOM_LEFT: "BOTTOM_LEFT",
      BOTTOM_RIGHT: "BOTTOM_RIGHT",
      TOP_RIGHT: "TOP_RIGHT",
      TOP_LEFT: "TOP_LEFT",
      CLOCKWISE: "CLOCKWISE",
      COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
    };
    Ne.QuickEffectDirectionConsts = lb;
  });
  var $o = u((rr) => {
    "use strict";
    Object.defineProperty(rr, "__esModule", { value: !0 });
    rr.ActionTypeConsts = rr.ActionAppliesTo = void 0;
    var fb = {
      TRANSFORM_MOVE: "TRANSFORM_MOVE",
      TRANSFORM_SCALE: "TRANSFORM_SCALE",
      TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
      TRANSFORM_SKEW: "TRANSFORM_SKEW",
      STYLE_OPACITY: "STYLE_OPACITY",
      STYLE_SIZE: "STYLE_SIZE",
      STYLE_FILTER: "STYLE_FILTER",
      STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
      STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
      STYLE_BORDER: "STYLE_BORDER",
      STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
      PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
      GENERAL_DISPLAY: "GENERAL_DISPLAY",
      GENERAL_START_ACTION: "GENERAL_START_ACTION",
      GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
      GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
      GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
      GENERAL_LOOP: "GENERAL_LOOP",
      STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
    };
    rr.ActionTypeConsts = fb;
    var db = {
      ELEMENT: "ELEMENT",
      ELEMENT_CLASS: "ELEMENT_CLASS",
      TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
    };
    rr.ActionAppliesTo = db;
  });
  var lf = u((wn) => {
    "use strict";
    Object.defineProperty(wn, "__esModule", { value: !0 });
    wn.InteractionTypeConsts = void 0;
    var pb = {
      MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
      MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
      MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
      SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
      SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
      MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
      PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
      PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
      PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
      NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
      DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
      ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
      TAB_INTERACTION: "TAB_INTERACTION",
      SLIDER_INTERACTION: "SLIDER_INTERACTION",
    };
    wn.InteractionTypeConsts = pb;
  });
  var ff = u((Rn) => {
    "use strict";
    Object.defineProperty(Rn, "__esModule", { value: !0 });
    Rn.ReducedMotionTypes = void 0;
    var vb = $o(),
      {
        TRANSFORM_MOVE: Eb,
        TRANSFORM_SCALE: hb,
        TRANSFORM_ROTATE: gb,
        TRANSFORM_SKEW: _b,
        STYLE_SIZE: yb,
        STYLE_FILTER: mb,
        STYLE_FONT_VARIATION: Ib,
      } = vb.ActionTypeConsts,
      Tb = {
        [Eb]: !0,
        [hb]: !0,
        [gb]: !0,
        [_b]: !0,
        [yb]: !0,
        [mb]: !0,
        [Ib]: !0,
      };
    Rn.ReducedMotionTypes = Tb;
  });
  var df = u((ue) => {
    "use strict";
    Object.defineProperty(ue, "__esModule", { value: !0 });
    ue.IX2_VIEWPORT_WIDTH_CHANGED =
      ue.IX2_TEST_FRAME_RENDERED =
      ue.IX2_STOP_REQUESTED =
      ue.IX2_SESSION_STOPPED =
      ue.IX2_SESSION_STARTED =
      ue.IX2_SESSION_INITIALIZED =
      ue.IX2_RAW_DATA_IMPORTED =
      ue.IX2_PREVIEW_REQUESTED =
      ue.IX2_PLAYBACK_REQUESTED =
      ue.IX2_PARAMETER_CHANGED =
      ue.IX2_MEDIA_QUERIES_DEFINED =
      ue.IX2_INSTANCE_STARTED =
      ue.IX2_INSTANCE_REMOVED =
      ue.IX2_INSTANCE_ADDED =
      ue.IX2_EVENT_STATE_CHANGED =
      ue.IX2_EVENT_LISTENER_ADDED =
      ue.IX2_ELEMENT_STATE_CHANGED =
      ue.IX2_CLEAR_REQUESTED =
      ue.IX2_ANIMATION_FRAME_CHANGED =
      ue.IX2_ACTION_LIST_PLAYBACK_CHANGED =
        void 0;
    var Ob = "IX2_RAW_DATA_IMPORTED";
    ue.IX2_RAW_DATA_IMPORTED = Ob;
    var Sb = "IX2_SESSION_INITIALIZED";
    ue.IX2_SESSION_INITIALIZED = Sb;
    var bb = "IX2_SESSION_STARTED";
    ue.IX2_SESSION_STARTED = bb;
    var Ab = "IX2_SESSION_STOPPED";
    ue.IX2_SESSION_STOPPED = Ab;
    var wb = "IX2_PREVIEW_REQUESTED";
    ue.IX2_PREVIEW_REQUESTED = wb;
    var Rb = "IX2_PLAYBACK_REQUESTED";
    ue.IX2_PLAYBACK_REQUESTED = Rb;
    var Cb = "IX2_STOP_REQUESTED";
    ue.IX2_STOP_REQUESTED = Cb;
    var Nb = "IX2_CLEAR_REQUESTED";
    ue.IX2_CLEAR_REQUESTED = Nb;
    var qb = "IX2_EVENT_LISTENER_ADDED";
    ue.IX2_EVENT_LISTENER_ADDED = qb;
    var xb = "IX2_EVENT_STATE_CHANGED";
    ue.IX2_EVENT_STATE_CHANGED = xb;
    var Lb = "IX2_ANIMATION_FRAME_CHANGED";
    ue.IX2_ANIMATION_FRAME_CHANGED = Lb;
    var Pb = "IX2_PARAMETER_CHANGED";
    ue.IX2_PARAMETER_CHANGED = Pb;
    var Db = "IX2_INSTANCE_ADDED";
    ue.IX2_INSTANCE_ADDED = Db;
    var Mb = "IX2_INSTANCE_STARTED";
    ue.IX2_INSTANCE_STARTED = Mb;
    var Fb = "IX2_INSTANCE_REMOVED";
    ue.IX2_INSTANCE_REMOVED = Fb;
    var Gb = "IX2_ELEMENT_STATE_CHANGED";
    ue.IX2_ELEMENT_STATE_CHANGED = Gb;
    var Ub = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
    ue.IX2_ACTION_LIST_PLAYBACK_CHANGED = Ub;
    var Xb = "IX2_VIEWPORT_WIDTH_CHANGED";
    ue.IX2_VIEWPORT_WIDTH_CHANGED = Xb;
    var Vb = "IX2_MEDIA_QUERIES_DEFINED";
    ue.IX2_MEDIA_QUERIES_DEFINED = Vb;
    var Wb = "IX2_TEST_FRAME_RENDERED";
    ue.IX2_TEST_FRAME_RENDERED = Wb;
  });
  var pf = u((N) => {
    "use strict";
    Object.defineProperty(N, "__esModule", { value: !0 });
    N.W_MOD_JS =
      N.W_MOD_IX =
      N.WILL_CHANGE =
      N.WIDTH =
      N.WF_PAGE =
      N.TRANSLATE_Z =
      N.TRANSLATE_Y =
      N.TRANSLATE_X =
      N.TRANSLATE_3D =
      N.TRANSFORM =
      N.SKEW_Y =
      N.SKEW_X =
      N.SKEW =
      N.SIBLINGS =
      N.SCALE_Z =
      N.SCALE_Y =
      N.SCALE_X =
      N.SCALE_3D =
      N.ROTATE_Z =
      N.ROTATE_Y =
      N.ROTATE_X =
      N.RENDER_TRANSFORM =
      N.RENDER_STYLE =
      N.RENDER_PLUGIN =
      N.RENDER_GENERAL =
      N.PRESERVE_3D =
      N.PLAIN_OBJECT =
      N.PARENT =
      N.OPACITY =
      N.IX2_ID_DELIMITER =
      N.IMMEDIATE_CHILDREN =
      N.HTML_ELEMENT =
      N.HEIGHT =
      N.FONT_VARIATION_SETTINGS =
      N.FLEX =
      N.FILTER =
      N.DISPLAY =
      N.CONFIG_Z_VALUE =
      N.CONFIG_Z_UNIT =
      N.CONFIG_Y_VALUE =
      N.CONFIG_Y_UNIT =
      N.CONFIG_X_VALUE =
      N.CONFIG_X_UNIT =
      N.CONFIG_VALUE =
      N.CONFIG_UNIT =
      N.COMMA_DELIMITER =
      N.COLOR =
      N.COLON_DELIMITER =
      N.CHILDREN =
      N.BOUNDARY_SELECTOR =
      N.BORDER_COLOR =
      N.BAR_DELIMITER =
      N.BACKGROUND_COLOR =
      N.BACKGROUND =
      N.AUTO =
      N.ABSTRACT_NODE =
        void 0;
    var Bb = "|";
    N.IX2_ID_DELIMITER = Bb;
    var Hb = "data-wf-page";
    N.WF_PAGE = Hb;
    var kb = "w-mod-js";
    N.W_MOD_JS = kb;
    var jb = "w-mod-ix";
    N.W_MOD_IX = jb;
    var Kb = ".w-dyn-item";
    N.BOUNDARY_SELECTOR = Kb;
    var zb = "xValue";
    N.CONFIG_X_VALUE = zb;
    var Yb = "yValue";
    N.CONFIG_Y_VALUE = Yb;
    var $b = "zValue";
    N.CONFIG_Z_VALUE = $b;
    var Qb = "value";
    N.CONFIG_VALUE = Qb;
    var Zb = "xUnit";
    N.CONFIG_X_UNIT = Zb;
    var Jb = "yUnit";
    N.CONFIG_Y_UNIT = Jb;
    var eA = "zUnit";
    N.CONFIG_Z_UNIT = eA;
    var tA = "unit";
    N.CONFIG_UNIT = tA;
    var rA = "transform";
    N.TRANSFORM = rA;
    var nA = "translateX";
    N.TRANSLATE_X = nA;
    var iA = "translateY";
    N.TRANSLATE_Y = iA;
    var oA = "translateZ";
    N.TRANSLATE_Z = oA;
    var aA = "translate3d";
    N.TRANSLATE_3D = aA;
    var sA = "scaleX";
    N.SCALE_X = sA;
    var uA = "scaleY";
    N.SCALE_Y = uA;
    var cA = "scaleZ";
    N.SCALE_Z = cA;
    var lA = "scale3d";
    N.SCALE_3D = lA;
    var fA = "rotateX";
    N.ROTATE_X = fA;
    var dA = "rotateY";
    N.ROTATE_Y = dA;
    var pA = "rotateZ";
    N.ROTATE_Z = pA;
    var vA = "skew";
    N.SKEW = vA;
    var EA = "skewX";
    N.SKEW_X = EA;
    var hA = "skewY";
    N.SKEW_Y = hA;
    var gA = "opacity";
    N.OPACITY = gA;
    var _A = "filter";
    N.FILTER = _A;
    var yA = "font-variation-settings";
    N.FONT_VARIATION_SETTINGS = yA;
    var mA = "width";
    N.WIDTH = mA;
    var IA = "height";
    N.HEIGHT = IA;
    var TA = "backgroundColor";
    N.BACKGROUND_COLOR = TA;
    var OA = "background";
    N.BACKGROUND = OA;
    var SA = "borderColor";
    N.BORDER_COLOR = SA;
    var bA = "color";
    N.COLOR = bA;
    var AA = "display";
    N.DISPLAY = AA;
    var wA = "flex";
    N.FLEX = wA;
    var RA = "willChange";
    N.WILL_CHANGE = RA;
    var CA = "AUTO";
    N.AUTO = CA;
    var NA = ",";
    N.COMMA_DELIMITER = NA;
    var qA = ":";
    N.COLON_DELIMITER = qA;
    var xA = "|";
    N.BAR_DELIMITER = xA;
    var LA = "CHILDREN";
    N.CHILDREN = LA;
    var PA = "IMMEDIATE_CHILDREN";
    N.IMMEDIATE_CHILDREN = PA;
    var DA = "SIBLINGS";
    N.SIBLINGS = DA;
    var MA = "PARENT";
    N.PARENT = MA;
    var FA = "preserve-3d";
    N.PRESERVE_3D = FA;
    var GA = "HTML_ELEMENT";
    N.HTML_ELEMENT = GA;
    var UA = "PLAIN_OBJECT";
    N.PLAIN_OBJECT = UA;
    var XA = "ABSTRACT_NODE";
    N.ABSTRACT_NODE = XA;
    var VA = "RENDER_TRANSFORM";
    N.RENDER_TRANSFORM = VA;
    var WA = "RENDER_GENERAL";
    N.RENDER_GENERAL = WA;
    var BA = "RENDER_STYLE";
    N.RENDER_STYLE = BA;
    var HA = "RENDER_PLUGIN";
    N.RENDER_PLUGIN = HA;
  });
  var Ve = u((we) => {
    "use strict";
    var vf = Yt().default;
    Object.defineProperty(we, "__esModule", { value: !0 });
    var Cn = { IX2EngineActionTypes: !0, IX2EngineConstants: !0 };
    we.IX2EngineConstants = we.IX2EngineActionTypes = void 0;
    var Qo = cf();
    Object.keys(Qo).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(Cn, e) ||
        (e in we && we[e] === Qo[e]) ||
        Object.defineProperty(we, e, {
          enumerable: !0,
          get: function () {
            return Qo[e];
          },
        });
    });
    var Zo = $o();
    Object.keys(Zo).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(Cn, e) ||
        (e in we && we[e] === Zo[e]) ||
        Object.defineProperty(we, e, {
          enumerable: !0,
          get: function () {
            return Zo[e];
          },
        });
    });
    var Jo = lf();
    Object.keys(Jo).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(Cn, e) ||
        (e in we && we[e] === Jo[e]) ||
        Object.defineProperty(we, e, {
          enumerable: !0,
          get: function () {
            return Jo[e];
          },
        });
    });
    var ea = ff();
    Object.keys(ea).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(Cn, e) ||
        (e in we && we[e] === ea[e]) ||
        Object.defineProperty(we, e, {
          enumerable: !0,
          get: function () {
            return ea[e];
          },
        });
    });
    var kA = vf(df());
    we.IX2EngineActionTypes = kA;
    var jA = vf(pf());
    we.IX2EngineConstants = jA;
  });
  var Ef = u((Nn) => {
    "use strict";
    Object.defineProperty(Nn, "__esModule", { value: !0 });
    Nn.ixData = void 0;
    var KA = Ve(),
      { IX2_RAW_DATA_IMPORTED: zA } = KA.IX2EngineActionTypes,
      YA = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case zA:
            return t.payload.ixData || Object.freeze({});
          default:
            return e;
        }
      };
    Nn.ixData = YA;
  });
  var Mr = u((dH, _t) => {
    function ta() {
      return (
        (_t.exports = ta =
          Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
        (_t.exports.__esModule = !0),
        (_t.exports.default = _t.exports),
        ta.apply(this, arguments)
      );
    }
    (_t.exports = ta),
      (_t.exports.__esModule = !0),
      (_t.exports.default = _t.exports);
  });
  var nr = u((Te) => {
    "use strict";
    Object.defineProperty(Te, "__esModule", { value: !0 });
    var $A =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    Te.clone = xn;
    Te.addLast = _f;
    Te.addFirst = yf;
    Te.removeLast = mf;
    Te.removeFirst = If;
    Te.insert = Tf;
    Te.removeAt = Of;
    Te.replaceAt = Sf;
    Te.getIn = Ln;
    Te.set = Pn;
    Te.setIn = Dn;
    Te.update = Af;
    Te.updateIn = wf;
    Te.merge = Rf;
    Te.mergeDeep = Cf;
    Te.mergeIn = Nf;
    Te.omit = qf;
    Te.addDefaults = xf;
    var hf = "INVALID_ARGS";
    function gf(e) {
      throw new Error(e);
    }
    function ra(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var QA = {}.hasOwnProperty;
    function xn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = ra(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function We(e, t, r) {
      var n = r;
      n == null && gf(hf);
      for (
        var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3;
        s < o;
        s++
      )
        a[s - 3] = arguments[s];
      for (var c = 0; c < a.length; c++) {
        var f = a[c];
        if (f != null) {
          var E = ra(f);
          if (E.length)
            for (var v = 0; v <= E.length; v++) {
              var g = E[v];
              if (!(e && n[g] !== void 0)) {
                var _ = f[g];
                t && qn(n[g]) && qn(_) && (_ = We(e, t, n[g], _)),
                  !(_ === void 0 || _ === n[g]) &&
                    (i || ((i = !0), (n = xn(n))), (n[g] = _));
              }
            }
        }
      }
      return n;
    }
    function qn(e) {
      var t = typeof e > "u" ? "undefined" : $A(e);
      return e != null && (t === "object" || t === "function");
    }
    function _f(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function yf(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function mf(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function If(e) {
      return e.length ? e.slice(1) : e;
    }
    function Tf(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function Of(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Sf(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
      return (i[t] = r), i;
    }
    function Ln(e, t) {
      if ((!Array.isArray(t) && gf(hf), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (((r = r?.[i]), r === void 0)) return r;
        }
        return r;
      }
    }
    function Pn(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var o = xn(i);
      return (o[t] = r), o;
    }
    function bf(e, t, r, n) {
      var i = void 0,
        o = t[n];
      if (n === t.length - 1) i = r;
      else {
        var a =
          qn(e) && qn(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
        i = bf(a, t, r, n + 1);
      }
      return Pn(e, o, i);
    }
    function Dn(e, t, r) {
      return t.length ? bf(e, t, r, 0) : r;
    }
    function Af(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return Pn(e, t, i);
    }
    function wf(e, t, r) {
      var n = Ln(e, t),
        i = r(n);
      return Dn(e, t, i);
    }
    function Rf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? We.call.apply(We, [null, !1, !1, e, t, r, n, i, o].concat(s))
        : We(!1, !1, e, t, r, n, i, o);
    }
    function Cf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? We.call.apply(We, [null, !1, !0, e, t, r, n, i, o].concat(s))
        : We(!1, !0, e, t, r, n, i, o);
    }
    function Nf(e, t, r, n, i, o, a) {
      var s = Ln(e, t);
      s == null && (s = {});
      for (
        var c = void 0,
          f = arguments.length,
          E = Array(f > 7 ? f - 7 : 0),
          v = 7;
        v < f;
        v++
      )
        E[v - 7] = arguments[v];
      return (
        E.length
          ? (c = We.call.apply(We, [null, !1, !1, s, r, n, i, o, a].concat(E)))
          : (c = We(!1, !1, s, r, n, i, o, a)),
        Dn(e, t, c)
      );
    }
    function qf(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (QA.call(e, r[i])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var o = {}, a = ra(e), s = 0; s < a.length; s++) {
        var c = a[s];
        r.indexOf(c) >= 0 || (o[c] = e[c]);
      }
      return o;
    }
    function xf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? We.call.apply(We, [null, !0, !1, e, t, r, n, i, o].concat(s))
        : We(!0, !1, e, t, r, n, i, o);
    }
    var ZA = {
      clone: xn,
      addLast: _f,
      addFirst: yf,
      removeLast: mf,
      removeFirst: If,
      insert: Tf,
      removeAt: Of,
      replaceAt: Sf,
      getIn: Ln,
      set: Pn,
      setIn: Dn,
      update: Af,
      updateIn: wf,
      merge: Rf,
      mergeDeep: Cf,
      mergeIn: Nf,
      omit: qf,
      addDefaults: xf,
    };
    Te.default = ZA;
  });
  var Pf = u((Mn) => {
    "use strict";
    var JA = st().default;
    Object.defineProperty(Mn, "__esModule", { value: !0 });
    Mn.ixRequest = void 0;
    var ew = JA(Mr()),
      tw = Ve(),
      rw = nr(),
      {
        IX2_PREVIEW_REQUESTED: nw,
        IX2_PLAYBACK_REQUESTED: iw,
        IX2_STOP_REQUESTED: ow,
        IX2_CLEAR_REQUESTED: aw,
      } = tw.IX2EngineActionTypes,
      sw = { preview: {}, playback: {}, stop: {}, clear: {} },
      Lf = Object.create(null, {
        [nw]: { value: "preview" },
        [iw]: { value: "playback" },
        [ow]: { value: "stop" },
        [aw]: { value: "clear" },
      }),
      uw = (e = sw, t) => {
        if (t.type in Lf) {
          let r = [Lf[t.type]];
          return (0, rw.setIn)(e, [r], (0, ew.default)({}, t.payload));
        }
        return e;
      };
    Mn.ixRequest = uw;
  });
  var Mf = u((Fn) => {
    "use strict";
    Object.defineProperty(Fn, "__esModule", { value: !0 });
    Fn.ixSession = void 0;
    var cw = Ve(),
      ct = nr(),
      {
        IX2_SESSION_INITIALIZED: lw,
        IX2_SESSION_STARTED: fw,
        IX2_TEST_FRAME_RENDERED: dw,
        IX2_SESSION_STOPPED: pw,
        IX2_EVENT_LISTENER_ADDED: vw,
        IX2_EVENT_STATE_CHANGED: Ew,
        IX2_ANIMATION_FRAME_CHANGED: hw,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: gw,
        IX2_VIEWPORT_WIDTH_CHANGED: _w,
        IX2_MEDIA_QUERIES_DEFINED: yw,
      } = cw.IX2EngineActionTypes,
      Df = {
        active: !1,
        tick: 0,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
        hasBoundaryNodes: !1,
        hasDefinedMediaQueries: !1,
        reducedMotion: !1,
      },
      mw = 20,
      Iw = (e = Df, t) => {
        switch (t.type) {
          case lw: {
            let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
            return (0, ct.merge)(e, { hasBoundaryNodes: r, reducedMotion: n });
          }
          case fw:
            return (0, ct.set)(e, "active", !0);
          case dw: {
            let {
              payload: { step: r = mw },
            } = t;
            return (0, ct.set)(e, "tick", e.tick + r);
          }
          case pw:
            return Df;
          case hw: {
            let {
              payload: { now: r },
            } = t;
            return (0, ct.set)(e, "tick", r);
          }
          case vw: {
            let r = (0, ct.addLast)(e.eventListeners, t.payload);
            return (0, ct.set)(e, "eventListeners", r);
          }
          case Ew: {
            let { stateKey: r, newState: n } = t.payload;
            return (0, ct.setIn)(e, ["eventState", r], n);
          }
          case gw: {
            let { actionListId: r, isPlaying: n } = t.payload;
            return (0, ct.setIn)(e, ["playbackState", r], n);
          }
          case _w: {
            let { width: r, mediaQueries: n } = t.payload,
              i = n.length,
              o = null;
            for (let a = 0; a < i; a++) {
              let { key: s, min: c, max: f } = n[a];
              if (r >= c && r <= f) {
                o = s;
                break;
              }
            }
            return (0, ct.merge)(e, { viewportWidth: r, mediaQueryKey: o });
          }
          case yw:
            return (0, ct.set)(e, "hasDefinedMediaQueries", !0);
          default:
            return e;
        }
      };
    Fn.ixSession = Iw;
  });
  var Gf = u((hH, Ff) => {
    function Tw() {
      (this.__data__ = []), (this.size = 0);
    }
    Ff.exports = Tw;
  });
  var Gn = u((gH, Uf) => {
    function Ow(e, t) {
      return e === t || (e !== e && t !== t);
    }
    Uf.exports = Ow;
  });
  var Fr = u((_H, Xf) => {
    var Sw = Gn();
    function bw(e, t) {
      for (var r = e.length; r--; ) if (Sw(e[r][0], t)) return r;
      return -1;
    }
    Xf.exports = bw;
  });
  var Wf = u((yH, Vf) => {
    var Aw = Fr(),
      ww = Array.prototype,
      Rw = ww.splice;
    function Cw(e) {
      var t = this.__data__,
        r = Aw(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : Rw.call(t, r, 1), --this.size, !0;
    }
    Vf.exports = Cw;
  });
  var Hf = u((mH, Bf) => {
    var Nw = Fr();
    function qw(e) {
      var t = this.__data__,
        r = Nw(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    Bf.exports = qw;
  });
  var jf = u((IH, kf) => {
    var xw = Fr();
    function Lw(e) {
      return xw(this.__data__, e) > -1;
    }
    kf.exports = Lw;
  });
  var zf = u((TH, Kf) => {
    var Pw = Fr();
    function Dw(e, t) {
      var r = this.__data__,
        n = Pw(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    Kf.exports = Dw;
  });
  var Gr = u((OH, Yf) => {
    var Mw = Gf(),
      Fw = Wf(),
      Gw = Hf(),
      Uw = jf(),
      Xw = zf();
    function ir(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    ir.prototype.clear = Mw;
    ir.prototype.delete = Fw;
    ir.prototype.get = Gw;
    ir.prototype.has = Uw;
    ir.prototype.set = Xw;
    Yf.exports = ir;
  });
  var Qf = u((SH, $f) => {
    var Vw = Gr();
    function Ww() {
      (this.__data__ = new Vw()), (this.size = 0);
    }
    $f.exports = Ww;
  });
  var Jf = u((bH, Zf) => {
    function Bw(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    Zf.exports = Bw;
  });
  var td = u((AH, ed) => {
    function Hw(e) {
      return this.__data__.get(e);
    }
    ed.exports = Hw;
  });
  var nd = u((wH, rd) => {
    function kw(e) {
      return this.__data__.has(e);
    }
    rd.exports = kw;
  });
  var lt = u((RH, id) => {
    function jw(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    id.exports = jw;
  });
  var na = u((CH, od) => {
    var Kw = St(),
      zw = lt(),
      Yw = "[object AsyncFunction]",
      $w = "[object Function]",
      Qw = "[object GeneratorFunction]",
      Zw = "[object Proxy]";
    function Jw(e) {
      if (!zw(e)) return !1;
      var t = Kw(e);
      return t == $w || t == Qw || t == Yw || t == Zw;
    }
    od.exports = Jw;
  });
  var sd = u((NH, ad) => {
    var e0 = Je(),
      t0 = e0["__core-js_shared__"];
    ad.exports = t0;
  });
  var ld = u((qH, cd) => {
    var ia = sd(),
      ud = (function () {
        var e = /[^.]+$/.exec((ia && ia.keys && ia.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function r0(e) {
      return !!ud && ud in e;
    }
    cd.exports = r0;
  });
  var oa = u((xH, fd) => {
    var n0 = Function.prototype,
      i0 = n0.toString;
    function o0(e) {
      if (e != null) {
        try {
          return i0.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    fd.exports = o0;
  });
  var pd = u((LH, dd) => {
    var a0 = na(),
      s0 = ld(),
      u0 = lt(),
      c0 = oa(),
      l0 = /[\\^$.*+?()[\]{}|]/g,
      f0 = /^\[object .+?Constructor\]$/,
      d0 = Function.prototype,
      p0 = Object.prototype,
      v0 = d0.toString,
      E0 = p0.hasOwnProperty,
      h0 = RegExp(
        "^" +
          v0
            .call(E0)
            .replace(l0, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function g0(e) {
      if (!u0(e) || s0(e)) return !1;
      var t = a0(e) ? h0 : f0;
      return t.test(c0(e));
    }
    dd.exports = g0;
  });
  var Ed = u((PH, vd) => {
    function _0(e, t) {
      return e?.[t];
    }
    vd.exports = _0;
  });
  var bt = u((DH, hd) => {
    var y0 = pd(),
      m0 = Ed();
    function I0(e, t) {
      var r = m0(e, t);
      return y0(r) ? r : void 0;
    }
    hd.exports = I0;
  });
  var Un = u((MH, gd) => {
    var T0 = bt(),
      O0 = Je(),
      S0 = T0(O0, "Map");
    gd.exports = S0;
  });
  var Ur = u((FH, _d) => {
    var b0 = bt(),
      A0 = b0(Object, "create");
    _d.exports = A0;
  });
  var Id = u((GH, md) => {
    var yd = Ur();
    function w0() {
      (this.__data__ = yd ? yd(null) : {}), (this.size = 0);
    }
    md.exports = w0;
  });
  var Od = u((UH, Td) => {
    function R0(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Td.exports = R0;
  });
  var bd = u((XH, Sd) => {
    var C0 = Ur(),
      N0 = "__lodash_hash_undefined__",
      q0 = Object.prototype,
      x0 = q0.hasOwnProperty;
    function L0(e) {
      var t = this.__data__;
      if (C0) {
        var r = t[e];
        return r === N0 ? void 0 : r;
      }
      return x0.call(t, e) ? t[e] : void 0;
    }
    Sd.exports = L0;
  });
  var wd = u((VH, Ad) => {
    var P0 = Ur(),
      D0 = Object.prototype,
      M0 = D0.hasOwnProperty;
    function F0(e) {
      var t = this.__data__;
      return P0 ? t[e] !== void 0 : M0.call(t, e);
    }
    Ad.exports = F0;
  });
  var Cd = u((WH, Rd) => {
    var G0 = Ur(),
      U0 = "__lodash_hash_undefined__";
    function X0(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = G0 && t === void 0 ? U0 : t),
        this
      );
    }
    Rd.exports = X0;
  });
  var qd = u((BH, Nd) => {
    var V0 = Id(),
      W0 = Od(),
      B0 = bd(),
      H0 = wd(),
      k0 = Cd();
    function or(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    or.prototype.clear = V0;
    or.prototype.delete = W0;
    or.prototype.get = B0;
    or.prototype.has = H0;
    or.prototype.set = k0;
    Nd.exports = or;
  });
  var Pd = u((HH, Ld) => {
    var xd = qd(),
      j0 = Gr(),
      K0 = Un();
    function z0() {
      (this.size = 0),
        (this.__data__ = {
          hash: new xd(),
          map: new (K0 || j0)(),
          string: new xd(),
        });
    }
    Ld.exports = z0;
  });
  var Md = u((kH, Dd) => {
    function Y0(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    Dd.exports = Y0;
  });
  var Xr = u((jH, Fd) => {
    var $0 = Md();
    function Q0(e, t) {
      var r = e.__data__;
      return $0(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    Fd.exports = Q0;
  });
  var Ud = u((KH, Gd) => {
    var Z0 = Xr();
    function J0(e) {
      var t = Z0(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    Gd.exports = J0;
  });
  var Vd = u((zH, Xd) => {
    var eR = Xr();
    function tR(e) {
      return eR(this, e).get(e);
    }
    Xd.exports = tR;
  });
  var Bd = u((YH, Wd) => {
    var rR = Xr();
    function nR(e) {
      return rR(this, e).has(e);
    }
    Wd.exports = nR;
  });
  var kd = u(($H, Hd) => {
    var iR = Xr();
    function oR(e, t) {
      var r = iR(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    Hd.exports = oR;
  });
  var Xn = u((QH, jd) => {
    var aR = Pd(),
      sR = Ud(),
      uR = Vd(),
      cR = Bd(),
      lR = kd();
    function ar(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    ar.prototype.clear = aR;
    ar.prototype.delete = sR;
    ar.prototype.get = uR;
    ar.prototype.has = cR;
    ar.prototype.set = lR;
    jd.exports = ar;
  });
  var zd = u((ZH, Kd) => {
    var fR = Gr(),
      dR = Un(),
      pR = Xn(),
      vR = 200;
    function ER(e, t) {
      var r = this.__data__;
      if (r instanceof fR) {
        var n = r.__data__;
        if (!dR || n.length < vR - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new pR(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    Kd.exports = ER;
  });
  var aa = u((JH, Yd) => {
    var hR = Gr(),
      gR = Qf(),
      _R = Jf(),
      yR = td(),
      mR = nd(),
      IR = zd();
    function sr(e) {
      var t = (this.__data__ = new hR(e));
      this.size = t.size;
    }
    sr.prototype.clear = gR;
    sr.prototype.delete = _R;
    sr.prototype.get = yR;
    sr.prototype.has = mR;
    sr.prototype.set = IR;
    Yd.exports = sr;
  });
  var Qd = u((ek, $d) => {
    var TR = "__lodash_hash_undefined__";
    function OR(e) {
      return this.__data__.set(e, TR), this;
    }
    $d.exports = OR;
  });
  var Jd = u((tk, Zd) => {
    function SR(e) {
      return this.__data__.has(e);
    }
    Zd.exports = SR;
  });
  var tp = u((rk, ep) => {
    var bR = Xn(),
      AR = Qd(),
      wR = Jd();
    function Vn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new bR(); ++t < r; ) this.add(e[t]);
    }
    Vn.prototype.add = Vn.prototype.push = AR;
    Vn.prototype.has = wR;
    ep.exports = Vn;
  });
  var np = u((nk, rp) => {
    function RR(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    rp.exports = RR;
  });
  var op = u((ik, ip) => {
    function CR(e, t) {
      return e.has(t);
    }
    ip.exports = CR;
  });
  var sa = u((ok, ap) => {
    var NR = tp(),
      qR = np(),
      xR = op(),
      LR = 1,
      PR = 2;
    function DR(e, t, r, n, i, o) {
      var a = r & LR,
        s = e.length,
        c = t.length;
      if (s != c && !(a && c > s)) return !1;
      var f = o.get(e),
        E = o.get(t);
      if (f && E) return f == t && E == e;
      var v = -1,
        g = !0,
        _ = r & PR ? new NR() : void 0;
      for (o.set(e, t), o.set(t, e); ++v < s; ) {
        var w = e[v],
          S = t[v];
        if (n) var P = a ? n(S, w, v, t, e, o) : n(w, S, v, e, t, o);
        if (P !== void 0) {
          if (P) continue;
          g = !1;
          break;
        }
        if (_) {
          if (
            !qR(t, function (b, R) {
              if (!xR(_, R) && (w === b || i(w, b, r, n, o))) return _.push(R);
            })
          ) {
            g = !1;
            break;
          }
        } else if (!(w === S || i(w, S, r, n, o))) {
          g = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), g;
    }
    ap.exports = DR;
  });
  var up = u((ak, sp) => {
    var MR = Je(),
      FR = MR.Uint8Array;
    sp.exports = FR;
  });
  var lp = u((sk, cp) => {
    function GR(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, i) {
          r[++t] = [i, n];
        }),
        r
      );
    }
    cp.exports = GR;
  });
  var dp = u((uk, fp) => {
    function UR(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    fp.exports = UR;
  });
  var gp = u((ck, hp) => {
    var pp = Jt(),
      vp = up(),
      XR = Gn(),
      VR = sa(),
      WR = lp(),
      BR = dp(),
      HR = 1,
      kR = 2,
      jR = "[object Boolean]",
      KR = "[object Date]",
      zR = "[object Error]",
      YR = "[object Map]",
      $R = "[object Number]",
      QR = "[object RegExp]",
      ZR = "[object Set]",
      JR = "[object String]",
      eC = "[object Symbol]",
      tC = "[object ArrayBuffer]",
      rC = "[object DataView]",
      Ep = pp ? pp.prototype : void 0,
      ua = Ep ? Ep.valueOf : void 0;
    function nC(e, t, r, n, i, o, a) {
      switch (r) {
        case rC:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case tC:
          return !(e.byteLength != t.byteLength || !o(new vp(e), new vp(t)));
        case jR:
        case KR:
        case $R:
          return XR(+e, +t);
        case zR:
          return e.name == t.name && e.message == t.message;
        case QR:
        case JR:
          return e == t + "";
        case YR:
          var s = WR;
        case ZR:
          var c = n & HR;
          if ((s || (s = BR), e.size != t.size && !c)) return !1;
          var f = a.get(e);
          if (f) return f == t;
          (n |= kR), a.set(e, t);
          var E = VR(s(e), s(t), n, i, o, a);
          return a.delete(e), E;
        case eC:
          if (ua) return ua.call(e) == ua.call(t);
      }
      return !1;
    }
    hp.exports = nC;
  });
  var Wn = u((lk, _p) => {
    function iC(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
      return e;
    }
    _p.exports = iC;
  });
  var qe = u((fk, yp) => {
    var oC = Array.isArray;
    yp.exports = oC;
  });
  var ca = u((dk, mp) => {
    var aC = Wn(),
      sC = qe();
    function uC(e, t, r) {
      var n = t(e);
      return sC(e) ? n : aC(n, r(e));
    }
    mp.exports = uC;
  });
  var Tp = u((pk, Ip) => {
    function cC(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (o[i++] = a);
      }
      return o;
    }
    Ip.exports = cC;
  });
  var la = u((vk, Op) => {
    function lC() {
      return [];
    }
    Op.exports = lC;
  });
  var fa = u((Ek, bp) => {
    var fC = Tp(),
      dC = la(),
      pC = Object.prototype,
      vC = pC.propertyIsEnumerable,
      Sp = Object.getOwnPropertySymbols,
      EC = Sp
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                fC(Sp(e), function (t) {
                  return vC.call(e, t);
                }));
          }
        : dC;
    bp.exports = EC;
  });
  var wp = u((hk, Ap) => {
    function hC(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    Ap.exports = hC;
  });
  var Cp = u((gk, Rp) => {
    var gC = St(),
      _C = gt(),
      yC = "[object Arguments]";
    function mC(e) {
      return _C(e) && gC(e) == yC;
    }
    Rp.exports = mC;
  });
  var Vr = u((_k, xp) => {
    var Np = Cp(),
      IC = gt(),
      qp = Object.prototype,
      TC = qp.hasOwnProperty,
      OC = qp.propertyIsEnumerable,
      SC = Np(
        (function () {
          return arguments;
        })()
      )
        ? Np
        : function (e) {
            return IC(e) && TC.call(e, "callee") && !OC.call(e, "callee");
          };
    xp.exports = SC;
  });
  var Pp = u((yk, Lp) => {
    function bC() {
      return !1;
    }
    Lp.exports = bC;
  });
  var Bn = u((Wr, ur) => {
    var AC = Je(),
      wC = Pp(),
      Fp = typeof Wr == "object" && Wr && !Wr.nodeType && Wr,
      Dp = Fp && typeof ur == "object" && ur && !ur.nodeType && ur,
      RC = Dp && Dp.exports === Fp,
      Mp = RC ? AC.Buffer : void 0,
      CC = Mp ? Mp.isBuffer : void 0,
      NC = CC || wC;
    ur.exports = NC;
  });
  var Hn = u((mk, Gp) => {
    var qC = 9007199254740991,
      xC = /^(?:0|[1-9]\d*)$/;
    function LC(e, t) {
      var r = typeof e;
      return (
        (t = t ?? qC),
        !!t &&
          (r == "number" || (r != "symbol" && xC.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    Gp.exports = LC;
  });
  var kn = u((Ik, Up) => {
    var PC = 9007199254740991;
    function DC(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= PC;
    }
    Up.exports = DC;
  });
  var Vp = u((Tk, Xp) => {
    var MC = St(),
      FC = kn(),
      GC = gt(),
      UC = "[object Arguments]",
      XC = "[object Array]",
      VC = "[object Boolean]",
      WC = "[object Date]",
      BC = "[object Error]",
      HC = "[object Function]",
      kC = "[object Map]",
      jC = "[object Number]",
      KC = "[object Object]",
      zC = "[object RegExp]",
      YC = "[object Set]",
      $C = "[object String]",
      QC = "[object WeakMap]",
      ZC = "[object ArrayBuffer]",
      JC = "[object DataView]",
      eN = "[object Float32Array]",
      tN = "[object Float64Array]",
      rN = "[object Int8Array]",
      nN = "[object Int16Array]",
      iN = "[object Int32Array]",
      oN = "[object Uint8Array]",
      aN = "[object Uint8ClampedArray]",
      sN = "[object Uint16Array]",
      uN = "[object Uint32Array]",
      ye = {};
    ye[eN] =
      ye[tN] =
      ye[rN] =
      ye[nN] =
      ye[iN] =
      ye[oN] =
      ye[aN] =
      ye[sN] =
      ye[uN] =
        !0;
    ye[UC] =
      ye[XC] =
      ye[ZC] =
      ye[VC] =
      ye[JC] =
      ye[WC] =
      ye[BC] =
      ye[HC] =
      ye[kC] =
      ye[jC] =
      ye[KC] =
      ye[zC] =
      ye[YC] =
      ye[$C] =
      ye[QC] =
        !1;
    function cN(e) {
      return GC(e) && FC(e.length) && !!ye[MC(e)];
    }
    Xp.exports = cN;
  });
  var Bp = u((Ok, Wp) => {
    function lN(e) {
      return function (t) {
        return e(t);
      };
    }
    Wp.exports = lN;
  });
  var kp = u((Br, cr) => {
    var fN = Po(),
      Hp = typeof Br == "object" && Br && !Br.nodeType && Br,
      Hr = Hp && typeof cr == "object" && cr && !cr.nodeType && cr,
      dN = Hr && Hr.exports === Hp,
      da = dN && fN.process,
      pN = (function () {
        try {
          var e = Hr && Hr.require && Hr.require("util").types;
          return e || (da && da.binding && da.binding("util"));
        } catch {}
      })();
    cr.exports = pN;
  });
  var jn = u((Sk, zp) => {
    var vN = Vp(),
      EN = Bp(),
      jp = kp(),
      Kp = jp && jp.isTypedArray,
      hN = Kp ? EN(Kp) : vN;
    zp.exports = hN;
  });
  var pa = u((bk, Yp) => {
    var gN = wp(),
      _N = Vr(),
      yN = qe(),
      mN = Bn(),
      IN = Hn(),
      TN = jn(),
      ON = Object.prototype,
      SN = ON.hasOwnProperty;
    function bN(e, t) {
      var r = yN(e),
        n = !r && _N(e),
        i = !r && !n && mN(e),
        o = !r && !n && !i && TN(e),
        a = r || n || i || o,
        s = a ? gN(e.length, String) : [],
        c = s.length;
      for (var f in e)
        (t || SN.call(e, f)) &&
          !(
            a &&
            (f == "length" ||
              (i && (f == "offset" || f == "parent")) ||
              (o &&
                (f == "buffer" || f == "byteLength" || f == "byteOffset")) ||
              IN(f, c))
          ) &&
          s.push(f);
      return s;
    }
    Yp.exports = bN;
  });
  var Kn = u((Ak, $p) => {
    var AN = Object.prototype;
    function wN(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || AN;
      return e === r;
    }
    $p.exports = wN;
  });
  var Zp = u((wk, Qp) => {
    var RN = Do(),
      CN = RN(Object.keys, Object);
    Qp.exports = CN;
  });
  var zn = u((Rk, Jp) => {
    var NN = Kn(),
      qN = Zp(),
      xN = Object.prototype,
      LN = xN.hasOwnProperty;
    function PN(e) {
      if (!NN(e)) return qN(e);
      var t = [];
      for (var r in Object(e)) LN.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    Jp.exports = PN;
  });
  var Ft = u((Ck, ev) => {
    var DN = na(),
      MN = kn();
    function FN(e) {
      return e != null && MN(e.length) && !DN(e);
    }
    ev.exports = FN;
  });
  var kr = u((Nk, tv) => {
    var GN = pa(),
      UN = zn(),
      XN = Ft();
    function VN(e) {
      return XN(e) ? GN(e) : UN(e);
    }
    tv.exports = VN;
  });
  var nv = u((qk, rv) => {
    var WN = ca(),
      BN = fa(),
      HN = kr();
    function kN(e) {
      return WN(e, HN, BN);
    }
    rv.exports = kN;
  });
  var av = u((xk, ov) => {
    var iv = nv(),
      jN = 1,
      KN = Object.prototype,
      zN = KN.hasOwnProperty;
    function YN(e, t, r, n, i, o) {
      var a = r & jN,
        s = iv(e),
        c = s.length,
        f = iv(t),
        E = f.length;
      if (c != E && !a) return !1;
      for (var v = c; v--; ) {
        var g = s[v];
        if (!(a ? g in t : zN.call(t, g))) return !1;
      }
      var _ = o.get(e),
        w = o.get(t);
      if (_ && w) return _ == t && w == e;
      var S = !0;
      o.set(e, t), o.set(t, e);
      for (var P = a; ++v < c; ) {
        g = s[v];
        var b = e[g],
          R = t[g];
        if (n) var T = a ? n(R, b, g, t, e, o) : n(b, R, g, e, t, o);
        if (!(T === void 0 ? b === R || i(b, R, r, n, o) : T)) {
          S = !1;
          break;
        }
        P || (P = g == "constructor");
      }
      if (S && !P) {
        var q = e.constructor,
          x = t.constructor;
        q != x &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof q == "function" &&
            q instanceof q &&
            typeof x == "function" &&
            x instanceof x
          ) &&
          (S = !1);
      }
      return o.delete(e), o.delete(t), S;
    }
    ov.exports = YN;
  });
  var uv = u((Lk, sv) => {
    var $N = bt(),
      QN = Je(),
      ZN = $N(QN, "DataView");
    sv.exports = ZN;
  });
  var lv = u((Pk, cv) => {
    var JN = bt(),
      eq = Je(),
      tq = JN(eq, "Promise");
    cv.exports = tq;
  });
  var dv = u((Dk, fv) => {
    var rq = bt(),
      nq = Je(),
      iq = rq(nq, "Set");
    fv.exports = iq;
  });
  var va = u((Mk, pv) => {
    var oq = bt(),
      aq = Je(),
      sq = oq(aq, "WeakMap");
    pv.exports = sq;
  });
  var Yn = u((Fk, mv) => {
    var Ea = uv(),
      ha = Un(),
      ga = lv(),
      _a = dv(),
      ya = va(),
      yv = St(),
      lr = oa(),
      vv = "[object Map]",
      uq = "[object Object]",
      Ev = "[object Promise]",
      hv = "[object Set]",
      gv = "[object WeakMap]",
      _v = "[object DataView]",
      cq = lr(Ea),
      lq = lr(ha),
      fq = lr(ga),
      dq = lr(_a),
      pq = lr(ya),
      Gt = yv;
    ((Ea && Gt(new Ea(new ArrayBuffer(1))) != _v) ||
      (ha && Gt(new ha()) != vv) ||
      (ga && Gt(ga.resolve()) != Ev) ||
      (_a && Gt(new _a()) != hv) ||
      (ya && Gt(new ya()) != gv)) &&
      (Gt = function (e) {
        var t = yv(e),
          r = t == uq ? e.constructor : void 0,
          n = r ? lr(r) : "";
        if (n)
          switch (n) {
            case cq:
              return _v;
            case lq:
              return vv;
            case fq:
              return Ev;
            case dq:
              return hv;
            case pq:
              return gv;
          }
        return t;
      });
    mv.exports = Gt;
  });
  var Rv = u((Gk, wv) => {
    var ma = aa(),
      vq = sa(),
      Eq = gp(),
      hq = av(),
      Iv = Yn(),
      Tv = qe(),
      Ov = Bn(),
      gq = jn(),
      _q = 1,
      Sv = "[object Arguments]",
      bv = "[object Array]",
      $n = "[object Object]",
      yq = Object.prototype,
      Av = yq.hasOwnProperty;
    function mq(e, t, r, n, i, o) {
      var a = Tv(e),
        s = Tv(t),
        c = a ? bv : Iv(e),
        f = s ? bv : Iv(t);
      (c = c == Sv ? $n : c), (f = f == Sv ? $n : f);
      var E = c == $n,
        v = f == $n,
        g = c == f;
      if (g && Ov(e)) {
        if (!Ov(t)) return !1;
        (a = !0), (E = !1);
      }
      if (g && !E)
        return (
          o || (o = new ma()),
          a || gq(e) ? vq(e, t, r, n, i, o) : Eq(e, t, c, r, n, i, o)
        );
      if (!(r & _q)) {
        var _ = E && Av.call(e, "__wrapped__"),
          w = v && Av.call(t, "__wrapped__");
        if (_ || w) {
          var S = _ ? e.value() : e,
            P = w ? t.value() : t;
          return o || (o = new ma()), i(S, P, r, n, o);
        }
      }
      return g ? (o || (o = new ma()), hq(e, t, r, n, i, o)) : !1;
    }
    wv.exports = mq;
  });
  var Ia = u((Uk, qv) => {
    var Iq = Rv(),
      Cv = gt();
    function Nv(e, t, r, n, i) {
      return e === t
        ? !0
        : e == null || t == null || (!Cv(e) && !Cv(t))
        ? e !== e && t !== t
        : Iq(e, t, r, n, Nv, i);
    }
    qv.exports = Nv;
  });
  var Lv = u((Xk, xv) => {
    var Tq = aa(),
      Oq = Ia(),
      Sq = 1,
      bq = 2;
    function Aq(e, t, r, n) {
      var i = r.length,
        o = i,
        a = !n;
      if (e == null) return !o;
      for (e = Object(e); i--; ) {
        var s = r[i];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++i < o; ) {
        s = r[i];
        var c = s[0],
          f = e[c],
          E = s[1];
        if (a && s[2]) {
          if (f === void 0 && !(c in e)) return !1;
        } else {
          var v = new Tq();
          if (n) var g = n(f, E, c, e, t, v);
          if (!(g === void 0 ? Oq(E, f, Sq | bq, n, v) : g)) return !1;
        }
      }
      return !0;
    }
    xv.exports = Aq;
  });
  var Ta = u((Vk, Pv) => {
    var wq = lt();
    function Rq(e) {
      return e === e && !wq(e);
    }
    Pv.exports = Rq;
  });
  var Mv = u((Wk, Dv) => {
    var Cq = Ta(),
      Nq = kr();
    function qq(e) {
      for (var t = Nq(e), r = t.length; r--; ) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, Cq(i)];
      }
      return t;
    }
    Dv.exports = qq;
  });
  var Oa = u((Bk, Fv) => {
    function xq(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    Fv.exports = xq;
  });
  var Uv = u((Hk, Gv) => {
    var Lq = Lv(),
      Pq = Mv(),
      Dq = Oa();
    function Mq(e) {
      var t = Pq(e);
      return t.length == 1 && t[0][2]
        ? Dq(t[0][0], t[0][1])
        : function (r) {
            return r === e || Lq(r, e, t);
          };
    }
    Gv.exports = Mq;
  });
  var jr = u((kk, Xv) => {
    var Fq = St(),
      Gq = gt(),
      Uq = "[object Symbol]";
    function Xq(e) {
      return typeof e == "symbol" || (Gq(e) && Fq(e) == Uq);
    }
    Xv.exports = Xq;
  });
  var Qn = u((jk, Vv) => {
    var Vq = qe(),
      Wq = jr(),
      Bq = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      Hq = /^\w*$/;
    function kq(e, t) {
      if (Vq(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        Wq(e)
        ? !0
        : Hq.test(e) || !Bq.test(e) || (t != null && e in Object(t));
    }
    Vv.exports = kq;
  });
  var Hv = u((Kk, Bv) => {
    var Wv = Xn(),
      jq = "Expected a function";
    function Sa(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(jq);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (Sa.Cache || Wv)()), r;
    }
    Sa.Cache = Wv;
    Bv.exports = Sa;
  });
  var jv = u((zk, kv) => {
    var Kq = Hv(),
      zq = 500;
    function Yq(e) {
      var t = Kq(e, function (n) {
          return r.size === zq && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    kv.exports = Yq;
  });
  var zv = u((Yk, Kv) => {
    var $q = jv(),
      Qq =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      Zq = /\\(\\)?/g,
      Jq = $q(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(Qq, function (r, n, i, o) {
            t.push(i ? o.replace(Zq, "$1") : n || r);
          }),
          t
        );
      });
    Kv.exports = Jq;
  });
  var ba = u(($k, Yv) => {
    function ex(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
        i[r] = t(e[r], r, e);
      return i;
    }
    Yv.exports = ex;
  });
  var tE = u((Qk, eE) => {
    var $v = Jt(),
      tx = ba(),
      rx = qe(),
      nx = jr(),
      ix = 1 / 0,
      Qv = $v ? $v.prototype : void 0,
      Zv = Qv ? Qv.toString : void 0;
    function Jv(e) {
      if (typeof e == "string") return e;
      if (rx(e)) return tx(e, Jv) + "";
      if (nx(e)) return Zv ? Zv.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -ix ? "-0" : t;
    }
    eE.exports = Jv;
  });
  var nE = u((Zk, rE) => {
    var ox = tE();
    function ax(e) {
      return e == null ? "" : ox(e);
    }
    rE.exports = ax;
  });
  var Kr = u((Jk, iE) => {
    var sx = qe(),
      ux = Qn(),
      cx = zv(),
      lx = nE();
    function fx(e, t) {
      return sx(e) ? e : ux(e, t) ? [e] : cx(lx(e));
    }
    iE.exports = fx;
  });
  var fr = u((e5, oE) => {
    var dx = jr(),
      px = 1 / 0;
    function vx(e) {
      if (typeof e == "string" || dx(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -px ? "-0" : t;
    }
    oE.exports = vx;
  });
  var Zn = u((t5, aE) => {
    var Ex = Kr(),
      hx = fr();
    function gx(e, t) {
      t = Ex(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[hx(t[r++])];
      return r && r == n ? e : void 0;
    }
    aE.exports = gx;
  });
  var Jn = u((r5, sE) => {
    var _x = Zn();
    function yx(e, t, r) {
      var n = e == null ? void 0 : _x(e, t);
      return n === void 0 ? r : n;
    }
    sE.exports = yx;
  });
  var cE = u((n5, uE) => {
    function mx(e, t) {
      return e != null && t in Object(e);
    }
    uE.exports = mx;
  });
  var fE = u((i5, lE) => {
    var Ix = Kr(),
      Tx = Vr(),
      Ox = qe(),
      Sx = Hn(),
      bx = kn(),
      Ax = fr();
    function wx(e, t, r) {
      t = Ix(t, e);
      for (var n = -1, i = t.length, o = !1; ++n < i; ) {
        var a = Ax(t[n]);
        if (!(o = e != null && r(e, a))) break;
        e = e[a];
      }
      return o || ++n != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && bx(i) && Sx(a, i) && (Ox(e) || Tx(e)));
    }
    lE.exports = wx;
  });
  var pE = u((o5, dE) => {
    var Rx = cE(),
      Cx = fE();
    function Nx(e, t) {
      return e != null && Cx(e, t, Rx);
    }
    dE.exports = Nx;
  });
  var EE = u((a5, vE) => {
    var qx = Ia(),
      xx = Jn(),
      Lx = pE(),
      Px = Qn(),
      Dx = Ta(),
      Mx = Oa(),
      Fx = fr(),
      Gx = 1,
      Ux = 2;
    function Xx(e, t) {
      return Px(e) && Dx(t)
        ? Mx(Fx(e), t)
        : function (r) {
            var n = xx(r, e);
            return n === void 0 && n === t ? Lx(r, e) : qx(t, n, Gx | Ux);
          };
    }
    vE.exports = Xx;
  });
  var ei = u((s5, hE) => {
    function Vx(e) {
      return e;
    }
    hE.exports = Vx;
  });
  var Aa = u((u5, gE) => {
    function Wx(e) {
      return function (t) {
        return t?.[e];
      };
    }
    gE.exports = Wx;
  });
  var yE = u((c5, _E) => {
    var Bx = Zn();
    function Hx(e) {
      return function (t) {
        return Bx(t, e);
      };
    }
    _E.exports = Hx;
  });
  var IE = u((l5, mE) => {
    var kx = Aa(),
      jx = yE(),
      Kx = Qn(),
      zx = fr();
    function Yx(e) {
      return Kx(e) ? kx(zx(e)) : jx(e);
    }
    mE.exports = Yx;
  });
  var At = u((f5, TE) => {
    var $x = Uv(),
      Qx = EE(),
      Zx = ei(),
      Jx = qe(),
      eL = IE();
    function tL(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? Zx
        : typeof e == "object"
        ? Jx(e)
          ? Qx(e[0], e[1])
          : $x(e)
        : eL(e);
    }
    TE.exports = tL;
  });
  var wa = u((d5, OE) => {
    var rL = At(),
      nL = Ft(),
      iL = kr();
    function oL(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!nL(t)) {
          var o = rL(r, 3);
          (t = iL(t)),
            (r = function (s) {
              return o(i[s], s, i);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    OE.exports = oL;
  });
  var Ra = u((p5, SE) => {
    function aL(e, t, r, n) {
      for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    SE.exports = aL;
  });
  var AE = u((v5, bE) => {
    var sL = /\s/;
    function uL(e) {
      for (var t = e.length; t-- && sL.test(e.charAt(t)); );
      return t;
    }
    bE.exports = uL;
  });
  var RE = u((E5, wE) => {
    var cL = AE(),
      lL = /^\s+/;
    function fL(e) {
      return e && e.slice(0, cL(e) + 1).replace(lL, "");
    }
    wE.exports = fL;
  });
  var ti = u((h5, qE) => {
    var dL = RE(),
      CE = lt(),
      pL = jr(),
      NE = 0 / 0,
      vL = /^[-+]0x[0-9a-f]+$/i,
      EL = /^0b[01]+$/i,
      hL = /^0o[0-7]+$/i,
      gL = parseInt;
    function _L(e) {
      if (typeof e == "number") return e;
      if (pL(e)) return NE;
      if (CE(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = CE(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = dL(e);
      var r = EL.test(e);
      return r || hL.test(e) ? gL(e.slice(2), r ? 2 : 8) : vL.test(e) ? NE : +e;
    }
    qE.exports = _L;
  });
  var PE = u((g5, LE) => {
    var yL = ti(),
      xE = 1 / 0,
      mL = 17976931348623157e292;
    function IL(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = yL(e)), e === xE || e === -xE)) {
        var t = e < 0 ? -1 : 1;
        return t * mL;
      }
      return e === e ? e : 0;
    }
    LE.exports = IL;
  });
  var Ca = u((_5, DE) => {
    var TL = PE();
    function OL(e) {
      var t = TL(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    DE.exports = OL;
  });
  var FE = u((y5, ME) => {
    var SL = Ra(),
      bL = At(),
      AL = Ca(),
      wL = Math.max;
    function RL(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : AL(r);
      return i < 0 && (i = wL(n + i, 0)), SL(e, bL(t, 3), i);
    }
    ME.exports = RL;
  });
  var Na = u((m5, GE) => {
    var CL = wa(),
      NL = FE(),
      qL = CL(NL);
    GE.exports = qL;
  });
  var ni = u((Fe) => {
    "use strict";
    var xL = st().default;
    Object.defineProperty(Fe, "__esModule", { value: !0 });
    Fe.withBrowser =
      Fe.TRANSFORM_STYLE_PREFIXED =
      Fe.TRANSFORM_PREFIXED =
      Fe.IS_BROWSER_ENV =
      Fe.FLEX_PREFIXED =
      Fe.ELEMENT_MATCHES =
        void 0;
    var LL = xL(Na()),
      XE = typeof window < "u";
    Fe.IS_BROWSER_ENV = XE;
    var ri = (e, t) => (XE ? e() : t);
    Fe.withBrowser = ri;
    var PL = ri(() =>
      (0, LL.default)(
        [
          "matches",
          "matchesSelector",
          "mozMatchesSelector",
          "msMatchesSelector",
          "oMatchesSelector",
          "webkitMatchesSelector",
        ],
        (e) => e in Element.prototype
      )
    );
    Fe.ELEMENT_MATCHES = PL;
    var DL = ri(() => {
      let e = document.createElement("i"),
        t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
        r = "";
      try {
        let { length: n } = t;
        for (let i = 0; i < n; i++) {
          let o = t[i];
          if (((e.style.display = o), e.style.display === o)) return o;
        }
        return r;
      } catch {
        return r;
      }
    }, "flex");
    Fe.FLEX_PREFIXED = DL;
    var VE = ri(() => {
      let e = document.createElement("i");
      if (e.style.transform == null) {
        let t = ["Webkit", "Moz", "ms"],
          r = "Transform",
          { length: n } = t;
        for (let i = 0; i < n; i++) {
          let o = t[i] + r;
          if (e.style[o] !== void 0) return o;
        }
      }
      return "transform";
    }, "transform");
    Fe.TRANSFORM_PREFIXED = VE;
    var UE = VE.split("transform")[0],
      ML = UE ? UE + "TransformStyle" : "transformStyle";
    Fe.TRANSFORM_STYLE_PREFIXED = ML;
  });
  var qa = u((T5, jE) => {
    var FL = 4,
      GL = 0.001,
      UL = 1e-7,
      XL = 10,
      zr = 11,
      ii = 1 / (zr - 1),
      VL = typeof Float32Array == "function";
    function WE(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function BE(e, t) {
      return 3 * t - 6 * e;
    }
    function HE(e) {
      return 3 * e;
    }
    function oi(e, t, r) {
      return ((WE(t, r) * e + BE(t, r)) * e + HE(t)) * e;
    }
    function kE(e, t, r) {
      return 3 * WE(t, r) * e * e + 2 * BE(t, r) * e + HE(t);
    }
    function WL(e, t, r, n, i) {
      var o,
        a,
        s = 0;
      do
        (a = t + (r - t) / 2), (o = oi(a, n, i) - e), o > 0 ? (r = a) : (t = a);
      while (Math.abs(o) > UL && ++s < XL);
      return a;
    }
    function BL(e, t, r, n) {
      for (var i = 0; i < FL; ++i) {
        var o = kE(t, r, n);
        if (o === 0) return t;
        var a = oi(t, r, n) - e;
        t -= a / o;
      }
      return t;
    }
    jE.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = VL ? new Float32Array(zr) : new Array(zr);
      if (t !== r || n !== i)
        for (var a = 0; a < zr; ++a) o[a] = oi(a * ii, t, n);
      function s(c) {
        for (var f = 0, E = 1, v = zr - 1; E !== v && o[E] <= c; ++E) f += ii;
        --E;
        var g = (c - o[E]) / (o[E + 1] - o[E]),
          _ = f + g * ii,
          w = kE(_, t, n);
        return w >= GL ? BL(c, _, t, n) : w === 0 ? _ : WL(c, f, f + ii, t, n);
      }
      return function (f) {
        return t === r && n === i
          ? f
          : f === 0
          ? 0
          : f === 1
          ? 1
          : oi(s(f), r, i);
      };
    };
  });
  var xa = u((ae) => {
    "use strict";
    var HL = st().default;
    Object.defineProperty(ae, "__esModule", { value: !0 });
    ae.bounce = AP;
    ae.bouncePast = wP;
    ae.easeOut = ae.easeInOut = ae.easeIn = ae.ease = void 0;
    ae.inBack = gP;
    ae.inCirc = pP;
    ae.inCubic = ZL;
    ae.inElastic = mP;
    ae.inExpo = lP;
    ae.inOutBack = yP;
    ae.inOutCirc = EP;
    ae.inOutCubic = eP;
    ae.inOutElastic = TP;
    ae.inOutExpo = dP;
    ae.inOutQuad = QL;
    ae.inOutQuart = nP;
    ae.inOutQuint = aP;
    ae.inOutSine = cP;
    ae.inQuad = YL;
    ae.inQuart = tP;
    ae.inQuint = iP;
    ae.inSine = sP;
    ae.outBack = _P;
    ae.outBounce = hP;
    ae.outCirc = vP;
    ae.outCubic = JL;
    ae.outElastic = IP;
    ae.outExpo = fP;
    ae.outQuad = $L;
    ae.outQuart = rP;
    ae.outQuint = oP;
    ae.outSine = uP;
    ae.swingFrom = SP;
    ae.swingFromTo = OP;
    ae.swingTo = bP;
    var ai = HL(qa()),
      yt = 1.70158,
      kL = (0, ai.default)(0.25, 0.1, 0.25, 1);
    ae.ease = kL;
    var jL = (0, ai.default)(0.42, 0, 1, 1);
    ae.easeIn = jL;
    var KL = (0, ai.default)(0, 0, 0.58, 1);
    ae.easeOut = KL;
    var zL = (0, ai.default)(0.42, 0, 0.58, 1);
    ae.easeInOut = zL;
    function YL(e) {
      return Math.pow(e, 2);
    }
    function $L(e) {
      return -(Math.pow(e - 1, 2) - 1);
    }
    function QL(e) {
      return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
    }
    function ZL(e) {
      return Math.pow(e, 3);
    }
    function JL(e) {
      return Math.pow(e - 1, 3) + 1;
    }
    function eP(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 3)
        : 0.5 * (Math.pow(e - 2, 3) + 2);
    }
    function tP(e) {
      return Math.pow(e, 4);
    }
    function rP(e) {
      return -(Math.pow(e - 1, 4) - 1);
    }
    function nP(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 4)
        : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
    }
    function iP(e) {
      return Math.pow(e, 5);
    }
    function oP(e) {
      return Math.pow(e - 1, 5) + 1;
    }
    function aP(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 5)
        : 0.5 * (Math.pow(e - 2, 5) + 2);
    }
    function sP(e) {
      return -Math.cos(e * (Math.PI / 2)) + 1;
    }
    function uP(e) {
      return Math.sin(e * (Math.PI / 2));
    }
    function cP(e) {
      return -0.5 * (Math.cos(Math.PI * e) - 1);
    }
    function lP(e) {
      return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
    }
    function fP(e) {
      return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
    }
    function dP(e) {
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (e /= 0.5) < 1
        ? 0.5 * Math.pow(2, 10 * (e - 1))
        : 0.5 * (-Math.pow(2, -10 * --e) + 2);
    }
    function pP(e) {
      return -(Math.sqrt(1 - e * e) - 1);
    }
    function vP(e) {
      return Math.sqrt(1 - Math.pow(e - 1, 2));
    }
    function EP(e) {
      return (e /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - e * e) - 1)
        : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
    }
    function hP(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function gP(e) {
      let t = yt;
      return e * e * ((t + 1) * e - t);
    }
    function _P(e) {
      let t = yt;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function yP(e) {
      let t = yt;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function mP(e) {
      let t = yt,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (r || (r = 0.3),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          -(
            n *
            Math.pow(2, 10 * (e -= 1)) *
            Math.sin(((e - t) * (2 * Math.PI)) / r)
          ));
    }
    function IP(e) {
      let t = yt,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (r || (r = 0.3),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) +
            1);
    }
    function TP(e) {
      let t = yt,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : (e /= 1 / 2) === 2
        ? 1
        : (r || (r = 0.3 * 1.5),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          e < 1
            ? -0.5 *
              (n *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / r))
            : n *
                Math.pow(2, -10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / r) *
                0.5 +
              1);
    }
    function OP(e) {
      let t = yt;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function SP(e) {
      let t = yt;
      return e * e * ((t + 1) * e - t);
    }
    function bP(e) {
      let t = yt;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function AP(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function wP(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
        : e < 2.5 / 2.75
        ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
        : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
    }
  });
  var Pa = u((Yr) => {
    "use strict";
    var RP = st().default,
      CP = Yt().default;
    Object.defineProperty(Yr, "__esModule", { value: !0 });
    Yr.applyEasing = xP;
    Yr.createBezierEasing = qP;
    Yr.optimizeFloat = La;
    var KE = CP(xa()),
      NP = RP(qa());
    function La(e, t = 5, r = 10) {
      let n = Math.pow(r, t),
        i = Number(Math.round(e * n) / n);
      return Math.abs(i) > 1e-4 ? i : 0;
    }
    function qP(e) {
      return (0, NP.default)(...e);
    }
    function xP(e, t, r) {
      return t === 0
        ? 0
        : t === 1
        ? 1
        : La(r ? (t > 0 ? r(t) : t) : t > 0 && e && KE[e] ? KE[e](t) : t);
    }
  });
  var QE = u((dr) => {
    "use strict";
    Object.defineProperty(dr, "__esModule", { value: !0 });
    dr.createElementState = $E;
    dr.ixElements = void 0;
    dr.mergeActionState = Da;
    var si = nr(),
      YE = Ve(),
      {
        HTML_ELEMENT: b5,
        PLAIN_OBJECT: LP,
        ABSTRACT_NODE: A5,
        CONFIG_X_VALUE: PP,
        CONFIG_Y_VALUE: DP,
        CONFIG_Z_VALUE: MP,
        CONFIG_VALUE: FP,
        CONFIG_X_UNIT: GP,
        CONFIG_Y_UNIT: UP,
        CONFIG_Z_UNIT: XP,
        CONFIG_UNIT: VP,
      } = YE.IX2EngineConstants,
      {
        IX2_SESSION_STOPPED: WP,
        IX2_INSTANCE_ADDED: BP,
        IX2_ELEMENT_STATE_CHANGED: HP,
      } = YE.IX2EngineActionTypes,
      zE = {},
      kP = "refState",
      jP = (e = zE, t = {}) => {
        switch (t.type) {
          case WP:
            return zE;
          case BP: {
            let {
                elementId: r,
                element: n,
                origin: i,
                actionItem: o,
                refType: a,
              } = t.payload,
              { actionTypeId: s } = o,
              c = e;
            return (
              (0, si.getIn)(c, [r, n]) !== n && (c = $E(c, n, a, r, o)),
              Da(c, r, s, i, o)
            );
          }
          case HP: {
            let {
              elementId: r,
              actionTypeId: n,
              current: i,
              actionItem: o,
            } = t.payload;
            return Da(e, r, n, i, o);
          }
          default:
            return e;
        }
      };
    dr.ixElements = jP;
    function $E(e, t, r, n, i) {
      let o =
        r === LP ? (0, si.getIn)(i, ["config", "target", "objectId"]) : null;
      return (0, si.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r });
    }
    function Da(e, t, r, n, i) {
      let o = zP(i),
        a = [t, kP, r];
      return (0, si.mergeIn)(e, a, n, o);
    }
    var KP = [
      [PP, GP],
      [DP, UP],
      [MP, XP],
      [FP, VP],
    ];
    function zP(e) {
      let { config: t } = e;
      return KP.reduce((r, n) => {
        let i = n[0],
          o = n[1],
          a = t[i],
          s = t[o];
        return a != null && s != null && (r[o] = s), r;
      }, {});
    }
  });
  var ZE = u((xe) => {
    "use strict";
    Object.defineProperty(xe, "__esModule", { value: !0 });
    xe.renderPlugin =
      xe.getPluginOrigin =
      xe.getPluginDuration =
      xe.getPluginDestination =
      xe.getPluginConfig =
      xe.createPluginInstance =
      xe.clearPlugin =
        void 0;
    var YP = (e) => e.value;
    xe.getPluginConfig = YP;
    var $P = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    xe.getPluginDuration = $P;
    var QP = (e) => e || { value: 0 };
    xe.getPluginOrigin = QP;
    var ZP = (e) => ({ value: e.value });
    xe.getPluginDestination = ZP;
    var JP = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    xe.createPluginInstance = JP;
    var eD = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    xe.renderPlugin = eD;
    var tD = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    xe.clearPlugin = tD;
  });
  var Ma = u((Ce) => {
    "use strict";
    Object.defineProperty(Ce, "__esModule", { value: !0 });
    Ce.getPluginOrigin =
      Ce.getPluginDuration =
      Ce.getPluginDestination =
      Ce.getPluginConfig =
      Ce.createPluginInstance =
      Ce.clearPlugin =
        void 0;
    Ce.isPluginType = iD;
    Ce.renderPlugin = void 0;
    var Ut = ZE(),
      JE = Ve(),
      rD = ni(),
      nD = {
        [JE.ActionTypeConsts.PLUGIN_LOTTIE]: {
          getConfig: Ut.getPluginConfig,
          getOrigin: Ut.getPluginOrigin,
          getDuration: Ut.getPluginDuration,
          getDestination: Ut.getPluginDestination,
          createInstance: Ut.createPluginInstance,
          render: Ut.renderPlugin,
          clear: Ut.clearPlugin,
        },
      };
    function iD(e) {
      return e === JE.ActionTypeConsts.PLUGIN_LOTTIE;
    }
    var Xt = (e) => (t) => {
        if (!rD.IS_BROWSER_ENV) return () => null;
        let r = nD[t];
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      },
      oD = Xt("getConfig");
    Ce.getPluginConfig = oD;
    var aD = Xt("getOrigin");
    Ce.getPluginOrigin = aD;
    var sD = Xt("getDuration");
    Ce.getPluginDuration = sD;
    var uD = Xt("getDestination");
    Ce.getPluginDestination = uD;
    var cD = Xt("createInstance");
    Ce.createPluginInstance = cD;
    var lD = Xt("render");
    Ce.renderPlugin = lD;
    var fD = Xt("clear");
    Ce.clearPlugin = fD;
  });
  var th = u((N5, eh) => {
    function dD(e, t) {
      return e == null || e !== e ? t : e;
    }
    eh.exports = dD;
  });
  var nh = u((q5, rh) => {
    function pD(e, t, r, n) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (n && o && (r = e[++i]); ++i < o; ) r = t(r, e[i], i, e);
      return r;
    }
    rh.exports = pD;
  });
  var oh = u((x5, ih) => {
    function vD(e) {
      return function (t, r, n) {
        for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
          var c = a[e ? s : ++i];
          if (r(o[c], c, o) === !1) break;
        }
        return t;
      };
    }
    ih.exports = vD;
  });
  var sh = u((L5, ah) => {
    var ED = oh(),
      hD = ED();
    ah.exports = hD;
  });
  var Fa = u((P5, uh) => {
    var gD = sh(),
      _D = kr();
    function yD(e, t) {
      return e && gD(e, t, _D);
    }
    uh.exports = yD;
  });
  var lh = u((D5, ch) => {
    var mD = Ft();
    function ID(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!mD(r)) return e(r, n);
        for (
          var i = r.length, o = t ? i : -1, a = Object(r);
          (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;

        );
        return r;
      };
    }
    ch.exports = ID;
  });
  var Ga = u((M5, fh) => {
    var TD = Fa(),
      OD = lh(),
      SD = OD(TD);
    fh.exports = SD;
  });
  var ph = u((F5, dh) => {
    function bD(e, t, r, n, i) {
      return (
        i(e, function (o, a, s) {
          r = n ? ((n = !1), o) : t(r, o, a, s);
        }),
        r
      );
    }
    dh.exports = bD;
  });
  var Eh = u((G5, vh) => {
    var AD = nh(),
      wD = Ga(),
      RD = At(),
      CD = ph(),
      ND = qe();
    function qD(e, t, r) {
      var n = ND(e) ? AD : CD,
        i = arguments.length < 3;
      return n(e, RD(t, 4), r, i, wD);
    }
    vh.exports = qD;
  });
  var gh = u((U5, hh) => {
    var xD = Ra(),
      LD = At(),
      PD = Ca(),
      DD = Math.max,
      MD = Math.min;
    function FD(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return (
        r !== void 0 &&
          ((i = PD(r)), (i = r < 0 ? DD(n + i, 0) : MD(i, n - 1))),
        xD(e, LD(t, 3), i, !0)
      );
    }
    hh.exports = FD;
  });
  var yh = u((X5, _h) => {
    var GD = wa(),
      UD = gh(),
      XD = GD(UD);
    _h.exports = XD;
  });
  var Ih = u((ui) => {
    "use strict";
    Object.defineProperty(ui, "__esModule", { value: !0 });
    ui.default = void 0;
    var VD = Object.prototype.hasOwnProperty;
    function mh(e, t) {
      return e === t
        ? e !== 0 || t !== 0 || 1 / e === 1 / t
        : e !== e && t !== t;
    }
    function WD(e, t) {
      if (mh(e, t)) return !0;
      if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
      )
        return !1;
      let r = Object.keys(e),
        n = Object.keys(t);
      if (r.length !== n.length) return !1;
      for (let i = 0; i < r.length; i++)
        if (!VD.call(t, r[i]) || !mh(e[r[i]], t[r[i]])) return !1;
      return !0;
    }
    var BD = WD;
    ui.default = BD;
  });
  var Wh = u((ge) => {
    "use strict";
    var fi = st().default;
    Object.defineProperty(ge, "__esModule", { value: !0 });
    ge.cleanupHTMLElement = XM;
    ge.clearAllStyles = UM;
    ge.getActionListProgress = WM;
    ge.getAffectedElements = Ha;
    ge.getComputedStyle = vM;
    ge.getDestinationValues = IM;
    ge.getElementId = lM;
    ge.getInstanceId = uM;
    ge.getInstanceOrigin = gM;
    ge.getItemConfigByKey = void 0;
    ge.getMaxDurationItemIndex = Vh;
    ge.getNamespacedParameterId = kM;
    ge.getRenderType = Gh;
    ge.getStyleProp = TM;
    ge.mediaQueriesEqual = KM;
    ge.observeStore = pM;
    ge.reduceListToGroup = BM;
    ge.reifyState = fM;
    ge.renderHTMLElement = OM;
    Object.defineProperty(ge, "shallowEqual", {
      enumerable: !0,
      get: function () {
        return qh.default;
      },
    });
    ge.shouldAllowMediaQuery = jM;
    ge.shouldNamespaceEventParameter = HM;
    ge.stringifyTarget = zM;
    var wt = fi(th()),
      Xa = fi(Eh()),
      Ua = fi(yh()),
      Th = nr(),
      Vt = Ve(),
      qh = fi(Ih()),
      HD = Pa(),
      pt = Ma(),
      Ge = ni(),
      {
        BACKGROUND: kD,
        TRANSFORM: jD,
        TRANSLATE_3D: KD,
        SCALE_3D: zD,
        ROTATE_X: YD,
        ROTATE_Y: $D,
        ROTATE_Z: QD,
        SKEW: ZD,
        PRESERVE_3D: JD,
        FLEX: eM,
        OPACITY: ci,
        FILTER: $r,
        FONT_VARIATION_SETTINGS: Qr,
        WIDTH: ft,
        HEIGHT: dt,
        BACKGROUND_COLOR: xh,
        BORDER_COLOR: tM,
        COLOR: rM,
        CHILDREN: Oh,
        IMMEDIATE_CHILDREN: nM,
        SIBLINGS: Sh,
        PARENT: iM,
        DISPLAY: li,
        WILL_CHANGE: pr,
        AUTO: Rt,
        COMMA_DELIMITER: Zr,
        COLON_DELIMITER: oM,
        BAR_DELIMITER: bh,
        RENDER_TRANSFORM: Lh,
        RENDER_GENERAL: Va,
        RENDER_STYLE: Wa,
        RENDER_PLUGIN: Ph,
      } = Vt.IX2EngineConstants,
      {
        TRANSFORM_MOVE: vr,
        TRANSFORM_SCALE: Er,
        TRANSFORM_ROTATE: hr,
        TRANSFORM_SKEW: Jr,
        STYLE_OPACITY: Dh,
        STYLE_FILTER: en,
        STYLE_FONT_VARIATION: tn,
        STYLE_SIZE: gr,
        STYLE_BACKGROUND_COLOR: _r,
        STYLE_BORDER: yr,
        STYLE_TEXT_COLOR: mr,
        GENERAL_DISPLAY: di,
      } = Vt.ActionTypeConsts,
      aM = "OBJECT_VALUE",
      Mh = (e) => e.trim(),
      Ba = Object.freeze({ [_r]: xh, [yr]: tM, [mr]: rM }),
      Fh = Object.freeze({
        [Ge.TRANSFORM_PREFIXED]: jD,
        [xh]: kD,
        [ci]: ci,
        [$r]: $r,
        [ft]: ft,
        [dt]: dt,
        [Qr]: Qr,
      }),
      Ah = {},
      sM = 1;
    function uM() {
      return "i" + sM++;
    }
    var cM = 1;
    function lM(e, t) {
      for (let r in e) {
        let n = e[r];
        if (n && n.ref === t) return n.id;
      }
      return "e" + cM++;
    }
    function fM({ events: e, actionLists: t, site: r } = {}) {
      let n = (0, Xa.default)(
          e,
          (a, s) => {
            let { eventTypeId: c } = s;
            return a[c] || (a[c] = {}), (a[c][s.id] = s), a;
          },
          {}
        ),
        i = r && r.mediaQueries,
        o = [];
      return (
        i
          ? (o = i.map((a) => a.key))
          : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
        {
          ixData: {
            events: e,
            actionLists: t,
            eventTypeMap: n,
            mediaQueries: i,
            mediaQueryKeys: o,
          },
        }
      );
    }
    var dM = (e, t) => e === t;
    function pM({ store: e, select: t, onChange: r, comparator: n = dM }) {
      let { getState: i, subscribe: o } = e,
        a = o(c),
        s = t(i());
      function c() {
        let f = t(i());
        if (f == null) {
          a();
          return;
        }
        n(f, s) || ((s = f), r(s, e));
      }
      return a;
    }
    function wh(e) {
      let t = typeof e;
      if (t === "string") return { id: e };
      if (e != null && t === "object") {
        let {
          id: r,
          objectId: n,
          selector: i,
          selectorGuids: o,
          appliesTo: a,
          useEventTarget: s,
        } = e;
        return {
          id: r,
          objectId: n,
          selector: i,
          selectorGuids: o,
          appliesTo: a,
          useEventTarget: s,
        };
      }
      return {};
    }
    function Ha({
      config: e,
      event: t,
      eventTarget: r,
      elementRoot: n,
      elementApi: i,
    }) {
      var o, a, s;
      if (!i) throw new Error("IX2 missing elementApi");
      let { targets: c } = e;
      if (Array.isArray(c) && c.length > 0)
        return c.reduce(
          (G, V) =>
            G.concat(
              Ha({
                config: { target: V },
                event: t,
                eventTarget: r,
                elementRoot: n,
                elementApi: i,
              })
            ),
          []
        );
      let {
          getValidDocument: f,
          getQuerySelector: E,
          queryDocument: v,
          getChildElements: g,
          getSiblingElements: _,
          matchSelector: w,
          elementContains: S,
          isSiblingNode: P,
        } = i,
        { target: b } = e;
      if (!b) return [];
      let {
        id: R,
        objectId: T,
        selector: q,
        selectorGuids: x,
        appliesTo: L,
        useEventTarget: X,
      } = wh(b);
      if (T) return [Ah[T] || (Ah[T] = {})];
      if (L === Vt.EventAppliesTo.PAGE) {
        let G = f(R);
        return G ? [G] : [];
      }
      let Q =
          ((o =
            t == null ||
            (a = t.action) === null ||
            a === void 0 ||
            (s = a.config) === null ||
            s === void 0
              ? void 0
              : s.affectedElements) !== null && o !== void 0
            ? o
            : {})[R || q] || {},
        ie = !!(Q.id || Q.selector),
        te,
        M,
        m,
        F = t && E(wh(t.target));
      if (
        (ie
          ? ((te = Q.limitAffectedElements), (M = F), (m = E(Q)))
          : (M = m = E({ id: R, selector: q, selectorGuids: x })),
        t && X)
      ) {
        let G = r && (m || X === !0) ? [r] : v(F);
        if (m) {
          if (X === iM) return v(m).filter((V) => G.some((ee) => S(V, ee)));
          if (X === Oh) return v(m).filter((V) => G.some((ee) => S(ee, V)));
          if (X === Sh) return v(m).filter((V) => G.some((ee) => P(ee, V)));
        }
        return G;
      }
      return M == null || m == null
        ? []
        : Ge.IS_BROWSER_ENV && n
        ? v(m).filter((G) => n.contains(G))
        : te === Oh
        ? v(M, m)
        : te === nM
        ? g(v(M)).filter(w(m))
        : te === Sh
        ? _(v(M)).filter(w(m))
        : v(m);
    }
    function vM({ element: e, actionItem: t }) {
      if (!Ge.IS_BROWSER_ENV) return {};
      let { actionTypeId: r } = t;
      switch (r) {
        case gr:
        case _r:
        case yr:
        case mr:
        case di:
          return window.getComputedStyle(e);
        default:
          return {};
      }
    }
    var Rh = /px/,
      EM = (e, t) =>
        t.reduce(
          (r, n) => (r[n.type] == null && (r[n.type] = SM[n.type]), r),
          e || {}
        ),
      hM = (e, t) =>
        t.reduce(
          (r, n) => (
            r[n.type] == null &&
              (r[n.type] = bM[n.type] || n.defaultValue || 0),
            r
          ),
          e || {}
        );
    function gM(e, t = {}, r = {}, n, i) {
      let { getStyle: o } = i,
        { actionTypeId: a } = n;
      if ((0, pt.isPluginType)(a)) return (0, pt.getPluginOrigin)(a)(t[a]);
      switch (n.actionTypeId) {
        case vr:
        case Er:
        case hr:
        case Jr:
          return t[n.actionTypeId] || ka[n.actionTypeId];
        case en:
          return EM(t[n.actionTypeId], n.config.filters);
        case tn:
          return hM(t[n.actionTypeId], n.config.fontVariations);
        case Dh:
          return { value: (0, wt.default)(parseFloat(o(e, ci)), 1) };
        case gr: {
          let s = o(e, ft),
            c = o(e, dt),
            f,
            E;
          return (
            n.config.widthUnit === Rt
              ? (f = Rh.test(s) ? parseFloat(s) : parseFloat(r.width))
              : (f = (0, wt.default)(parseFloat(s), parseFloat(r.width))),
            n.config.heightUnit === Rt
              ? (E = Rh.test(c) ? parseFloat(c) : parseFloat(r.height))
              : (E = (0, wt.default)(parseFloat(c), parseFloat(r.height))),
            { widthValue: f, heightValue: E }
          );
        }
        case _r:
        case yr:
        case mr:
          return MM({
            element: e,
            actionTypeId: n.actionTypeId,
            computedStyle: r,
            getStyle: o,
          });
        case di:
          return { value: (0, wt.default)(o(e, li), r.display) };
        case aM:
          return t[n.actionTypeId] || { value: 0 };
        default:
          return;
      }
    }
    var _M = (e, t) => (t && (e[t.type] = t.value || 0), e),
      yM = (e, t) => (t && (e[t.type] = t.value || 0), e),
      mM = (e, t, r) => {
        if ((0, pt.isPluginType)(e)) return (0, pt.getPluginConfig)(e)(r, t);
        switch (e) {
          case en: {
            let n = (0, Ua.default)(r.filters, ({ type: i }) => i === t);
            return n ? n.value : 0;
          }
          case tn: {
            let n = (0, Ua.default)(r.fontVariations, ({ type: i }) => i === t);
            return n ? n.value : 0;
          }
          default:
            return r[t];
        }
      };
    ge.getItemConfigByKey = mM;
    function IM({ element: e, actionItem: t, elementApi: r }) {
      if ((0, pt.isPluginType)(t.actionTypeId))
        return (0, pt.getPluginDestination)(t.actionTypeId)(t.config);
      switch (t.actionTypeId) {
        case vr:
        case Er:
        case hr:
        case Jr: {
          let { xValue: n, yValue: i, zValue: o } = t.config;
          return { xValue: n, yValue: i, zValue: o };
        }
        case gr: {
          let { getStyle: n, setStyle: i, getProperty: o } = r,
            { widthUnit: a, heightUnit: s } = t.config,
            { widthValue: c, heightValue: f } = t.config;
          if (!Ge.IS_BROWSER_ENV) return { widthValue: c, heightValue: f };
          if (a === Rt) {
            let E = n(e, ft);
            i(e, ft, ""), (c = o(e, "offsetWidth")), i(e, ft, E);
          }
          if (s === Rt) {
            let E = n(e, dt);
            i(e, dt, ""), (f = o(e, "offsetHeight")), i(e, dt, E);
          }
          return { widthValue: c, heightValue: f };
        }
        case _r:
        case yr:
        case mr: {
          let { rValue: n, gValue: i, bValue: o, aValue: a } = t.config;
          return { rValue: n, gValue: i, bValue: o, aValue: a };
        }
        case en:
          return t.config.filters.reduce(_M, {});
        case tn:
          return t.config.fontVariations.reduce(yM, {});
        default: {
          let { value: n } = t.config;
          return { value: n };
        }
      }
    }
    function Gh(e) {
      if (/^TRANSFORM_/.test(e)) return Lh;
      if (/^STYLE_/.test(e)) return Wa;
      if (/^GENERAL_/.test(e)) return Va;
      if (/^PLUGIN_/.test(e)) return Ph;
    }
    function TM(e, t) {
      return e === Wa ? t.replace("STYLE_", "").toLowerCase() : null;
    }
    function OM(e, t, r, n, i, o, a, s, c) {
      switch (s) {
        case Lh:
          return RM(e, t, r, i, a);
        case Wa:
          return FM(e, t, r, i, o, a);
        case Va:
          return GM(e, i, a);
        case Ph: {
          let { actionTypeId: f } = i;
          if ((0, pt.isPluginType)(f)) return (0, pt.renderPlugin)(f)(c, t, i);
        }
      }
    }
    var ka = {
        [vr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Er]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [hr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Jr]: Object.freeze({ xValue: 0, yValue: 0 }),
      },
      SM = Object.freeze({
        blur: 0,
        "hue-rotate": 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100,
      }),
      bM = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
      AM = (e, t) => {
        let r = (0, Ua.default)(t.filters, ({ type: n }) => n === e);
        if (r && r.unit) return r.unit;
        switch (e) {
          case "blur":
            return "px";
          case "hue-rotate":
            return "deg";
          default:
            return "%";
        }
      },
      wM = Object.keys(ka);
    function RM(e, t, r, n, i) {
      let o = wM
          .map((s) => {
            let c = ka[s],
              {
                xValue: f = c.xValue,
                yValue: E = c.yValue,
                zValue: v = c.zValue,
                xUnit: g = "",
                yUnit: _ = "",
                zUnit: w = "",
              } = t[s] || {};
            switch (s) {
              case vr:
                return `${KD}(${f}${g}, ${E}${_}, ${v}${w})`;
              case Er:
                return `${zD}(${f}${g}, ${E}${_}, ${v}${w})`;
              case hr:
                return `${YD}(${f}${g}) ${$D}(${E}${_}) ${QD}(${v}${w})`;
              case Jr:
                return `${ZD}(${f}${g}, ${E}${_})`;
              default:
                return "";
            }
          })
          .join(" "),
        { setStyle: a } = i;
      Wt(e, Ge.TRANSFORM_PREFIXED, i),
        a(e, Ge.TRANSFORM_PREFIXED, o),
        qM(n, r) && a(e, Ge.TRANSFORM_STYLE_PREFIXED, JD);
    }
    function CM(e, t, r, n) {
      let i = (0, Xa.default)(t, (a, s, c) => `${a} ${c}(${s}${AM(c, r)})`, ""),
        { setStyle: o } = n;
      Wt(e, $r, n), o(e, $r, i);
    }
    function NM(e, t, r, n) {
      let i = (0, Xa.default)(
          t,
          (a, s, c) => (a.push(`"${c}" ${s}`), a),
          []
        ).join(", "),
        { setStyle: o } = n;
      Wt(e, Qr, n), o(e, Qr, i);
    }
    function qM({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
      return (
        (e === vr && n !== void 0) ||
        (e === Er && n !== void 0) ||
        (e === hr && (t !== void 0 || r !== void 0))
      );
    }
    var xM = "\\(([^)]+)\\)",
      LM = /^rgb/,
      PM = RegExp(`rgba?${xM}`);
    function DM(e, t) {
      let r = e.exec(t);
      return r ? r[1] : "";
    }
    function MM({
      element: e,
      actionTypeId: t,
      computedStyle: r,
      getStyle: n,
    }) {
      let i = Ba[t],
        o = n(e, i),
        a = LM.test(o) ? o : r[i],
        s = DM(PM, a).split(Zr);
      return {
        rValue: (0, wt.default)(parseInt(s[0], 10), 255),
        gValue: (0, wt.default)(parseInt(s[1], 10), 255),
        bValue: (0, wt.default)(parseInt(s[2], 10), 255),
        aValue: (0, wt.default)(parseFloat(s[3]), 1),
      };
    }
    function FM(e, t, r, n, i, o) {
      let { setStyle: a } = o;
      switch (n.actionTypeId) {
        case gr: {
          let { widthUnit: s = "", heightUnit: c = "" } = n.config,
            { widthValue: f, heightValue: E } = r;
          f !== void 0 &&
            (s === Rt && (s = "px"), Wt(e, ft, o), a(e, ft, f + s)),
            E !== void 0 &&
              (c === Rt && (c = "px"), Wt(e, dt, o), a(e, dt, E + c));
          break;
        }
        case en: {
          CM(e, r, n.config, o);
          break;
        }
        case tn: {
          NM(e, r, n.config, o);
          break;
        }
        case _r:
        case yr:
        case mr: {
          let s = Ba[n.actionTypeId],
            c = Math.round(r.rValue),
            f = Math.round(r.gValue),
            E = Math.round(r.bValue),
            v = r.aValue;
          Wt(e, s, o),
            a(
              e,
              s,
              v >= 1 ? `rgb(${c},${f},${E})` : `rgba(${c},${f},${E},${v})`
            );
          break;
        }
        default: {
          let { unit: s = "" } = n.config;
          Wt(e, i, o), a(e, i, r.value + s);
          break;
        }
      }
    }
    function GM(e, t, r) {
      let { setStyle: n } = r;
      switch (t.actionTypeId) {
        case di: {
          let { value: i } = t.config;
          i === eM && Ge.IS_BROWSER_ENV
            ? n(e, li, Ge.FLEX_PREFIXED)
            : n(e, li, i);
          return;
        }
      }
    }
    function Wt(e, t, r) {
      if (!Ge.IS_BROWSER_ENV) return;
      let n = Fh[t];
      if (!n) return;
      let { getStyle: i, setStyle: o } = r,
        a = i(e, pr);
      if (!a) {
        o(e, pr, n);
        return;
      }
      let s = a.split(Zr).map(Mh);
      s.indexOf(n) === -1 && o(e, pr, s.concat(n).join(Zr));
    }
    function Uh(e, t, r) {
      if (!Ge.IS_BROWSER_ENV) return;
      let n = Fh[t];
      if (!n) return;
      let { getStyle: i, setStyle: o } = r,
        a = i(e, pr);
      !a ||
        a.indexOf(n) === -1 ||
        o(
          e,
          pr,
          a
            .split(Zr)
            .map(Mh)
            .filter((s) => s !== n)
            .join(Zr)
        );
    }
    function UM({ store: e, elementApi: t }) {
      let { ixData: r } = e.getState(),
        { events: n = {}, actionLists: i = {} } = r;
      Object.keys(n).forEach((o) => {
        let a = n[o],
          { config: s } = a.action,
          { actionListId: c } = s,
          f = i[c];
        f && Ch({ actionList: f, event: a, elementApi: t });
      }),
        Object.keys(i).forEach((o) => {
          Ch({ actionList: i[o], elementApi: t });
        });
    }
    function Ch({ actionList: e = {}, event: t, elementApi: r }) {
      let { actionItemGroups: n, continuousParameterGroups: i } = e;
      n &&
        n.forEach((o) => {
          Nh({ actionGroup: o, event: t, elementApi: r });
        }),
        i &&
          i.forEach((o) => {
            let { continuousActionGroups: a } = o;
            a.forEach((s) => {
              Nh({ actionGroup: s, event: t, elementApi: r });
            });
          });
    }
    function Nh({ actionGroup: e, event: t, elementApi: r }) {
      let { actionItems: n } = e;
      n.forEach(({ actionTypeId: i, config: o }) => {
        let a;
        (0, pt.isPluginType)(i)
          ? (a = (0, pt.clearPlugin)(i))
          : (a = Xh({ effect: VM, actionTypeId: i, elementApi: r })),
          Ha({ config: o, event: t, elementApi: r }).forEach(a);
      });
    }
    function XM(e, t, r) {
      let { setStyle: n, getStyle: i } = r,
        { actionTypeId: o } = t;
      if (o === gr) {
        let { config: a } = t;
        a.widthUnit === Rt && n(e, ft, ""), a.heightUnit === Rt && n(e, dt, "");
      }
      i(e, pr) && Xh({ effect: Uh, actionTypeId: o, elementApi: r })(e);
    }
    var Xh =
      ({ effect: e, actionTypeId: t, elementApi: r }) =>
      (n) => {
        switch (t) {
          case vr:
          case Er:
          case hr:
          case Jr:
            e(n, Ge.TRANSFORM_PREFIXED, r);
            break;
          case en:
            e(n, $r, r);
            break;
          case tn:
            e(n, Qr, r);
            break;
          case Dh:
            e(n, ci, r);
            break;
          case gr:
            e(n, ft, r), e(n, dt, r);
            break;
          case _r:
          case yr:
          case mr:
            e(n, Ba[t], r);
            break;
          case di:
            e(n, li, r);
            break;
        }
      };
    function VM(e, t, r) {
      let { setStyle: n } = r;
      Uh(e, t, r),
        n(e, t, ""),
        t === Ge.TRANSFORM_PREFIXED && n(e, Ge.TRANSFORM_STYLE_PREFIXED, "");
    }
    function Vh(e) {
      let t = 0,
        r = 0;
      return (
        e.forEach((n, i) => {
          let { config: o } = n,
            a = o.delay + o.duration;
          a >= t && ((t = a), (r = i));
        }),
        r
      );
    }
    function WM(e, t) {
      let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
        { actionItem: i, verboseTimeElapsed: o = 0 } = t,
        a = 0,
        s = 0;
      return (
        r.forEach((c, f) => {
          if (n && f === 0) return;
          let { actionItems: E } = c,
            v = E[Vh(E)],
            { config: g, actionTypeId: _ } = v;
          i.id === v.id && (s = a + o);
          let w = Gh(_) === Va ? 0 : g.duration;
          a += g.delay + w;
        }),
        a > 0 ? (0, HD.optimizeFloat)(s / a) : 0
      );
    }
    function BM({ actionList: e, actionItemId: t, rawData: r }) {
      let { actionItemGroups: n, continuousParameterGroups: i } = e,
        o = [],
        a = (s) => (
          o.push((0, Th.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
          s.id === t
        );
      return (
        n && n.some(({ actionItems: s }) => s.some(a)),
        i &&
          i.some((s) => {
            let { continuousActionGroups: c } = s;
            return c.some(({ actionItems: f }) => f.some(a));
          }),
        (0, Th.setIn)(r, ["actionLists"], {
          [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
        })
      );
    }
    function HM(e, { basedOn: t }) {
      return (
        (e === Vt.EventTypeConsts.SCROLLING_IN_VIEW &&
          (t === Vt.EventBasedOn.ELEMENT || t == null)) ||
        (e === Vt.EventTypeConsts.MOUSE_MOVE && t === Vt.EventBasedOn.ELEMENT)
      );
    }
    function kM(e, t) {
      return e + oM + t;
    }
    function jM(e, t) {
      return t == null ? !0 : e.indexOf(t) !== -1;
    }
    function KM(e, t) {
      return (0, qh.default)(e && e.sort(), t && t.sort());
    }
    function zM(e) {
      if (typeof e == "string") return e;
      let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
      return t + bh + r + bh + n;
    }
  });
  var Bt = u((Ue) => {
    "use strict";
    var Ir = Yt().default;
    Object.defineProperty(Ue, "__esModule", { value: !0 });
    Ue.IX2VanillaUtils =
      Ue.IX2VanillaPlugins =
      Ue.IX2ElementsReducer =
      Ue.IX2Easings =
      Ue.IX2EasingUtils =
      Ue.IX2BrowserSupport =
        void 0;
    var YM = Ir(ni());
    Ue.IX2BrowserSupport = YM;
    var $M = Ir(xa());
    Ue.IX2Easings = $M;
    var QM = Ir(Pa());
    Ue.IX2EasingUtils = QM;
    var ZM = Ir(QE());
    Ue.IX2ElementsReducer = ZM;
    var JM = Ir(Ma());
    Ue.IX2VanillaPlugins = JM;
    var eF = Ir(Wh());
    Ue.IX2VanillaUtils = eF;
  });
  var jh = u((vi) => {
    "use strict";
    Object.defineProperty(vi, "__esModule", { value: !0 });
    vi.ixInstances = void 0;
    var Bh = Ve(),
      Hh = Bt(),
      Tr = nr(),
      {
        IX2_RAW_DATA_IMPORTED: tF,
        IX2_SESSION_STOPPED: rF,
        IX2_INSTANCE_ADDED: nF,
        IX2_INSTANCE_STARTED: iF,
        IX2_INSTANCE_REMOVED: oF,
        IX2_ANIMATION_FRAME_CHANGED: aF,
      } = Bh.IX2EngineActionTypes,
      {
        optimizeFloat: pi,
        applyEasing: kh,
        createBezierEasing: sF,
      } = Hh.IX2EasingUtils,
      { RENDER_GENERAL: uF } = Bh.IX2EngineConstants,
      {
        getItemConfigByKey: ja,
        getRenderType: cF,
        getStyleProp: lF,
      } = Hh.IX2VanillaUtils,
      fF = (e, t) => {
        let {
            position: r,
            parameterId: n,
            actionGroups: i,
            destinationKeys: o,
            smoothing: a,
            restingValue: s,
            actionTypeId: c,
            customEasingFn: f,
            skipMotion: E,
            skipToValue: v,
          } = e,
          { parameters: g } = t.payload,
          _ = Math.max(1 - a, 0.01),
          w = g[n];
        w == null && ((_ = 1), (w = s));
        let S = Math.max(w, 0) || 0,
          P = pi(S - r),
          b = E ? v : pi(r + P * _),
          R = b * 100;
        if (b === r && e.current) return e;
        let T, q, x, L;
        for (let $ = 0, { length: Q } = i; $ < Q; $++) {
          let { keyframe: ie, actionItems: te } = i[$];
          if (($ === 0 && (T = te[0]), R >= ie)) {
            T = te[0];
            let M = i[$ + 1],
              m = M && R !== ie;
            (q = m ? M.actionItems[0] : null),
              m && ((x = ie / 100), (L = (M.keyframe - ie) / 100));
          }
        }
        let X = {};
        if (T && !q)
          for (let $ = 0, { length: Q } = o; $ < Q; $++) {
            let ie = o[$];
            X[ie] = ja(c, ie, T.config);
          }
        else if (T && q && x !== void 0 && L !== void 0) {
          let $ = (b - x) / L,
            Q = T.config.easing,
            ie = kh(Q, $, f);
          for (let te = 0, { length: M } = o; te < M; te++) {
            let m = o[te],
              F = ja(c, m, T.config),
              ee = (ja(c, m, q.config) - F) * ie + F;
            X[m] = ee;
          }
        }
        return (0, Tr.merge)(e, { position: b, current: X });
      },
      dF = (e, t) => {
        let {
            active: r,
            origin: n,
            start: i,
            immediate: o,
            renderType: a,
            verbose: s,
            actionItem: c,
            destination: f,
            destinationKeys: E,
            pluginDuration: v,
            instanceDelay: g,
            customEasingFn: _,
            skipMotion: w,
          } = e,
          S = c.config.easing,
          { duration: P, delay: b } = c.config;
        v != null && (P = v),
          (b = g ?? b),
          a === uF ? (P = 0) : (o || w) && (P = b = 0);
        let { now: R } = t.payload;
        if (r && n) {
          let T = R - (i + b);
          if (s) {
            let $ = R - i,
              Q = P + b,
              ie = pi(Math.min(Math.max(0, $ / Q), 1));
            e = (0, Tr.set)(e, "verboseTimeElapsed", Q * ie);
          }
          if (T < 0) return e;
          let q = pi(Math.min(Math.max(0, T / P), 1)),
            x = kh(S, q, _),
            L = {},
            X = null;
          return (
            E.length &&
              (X = E.reduce(($, Q) => {
                let ie = f[Q],
                  te = parseFloat(n[Q]) || 0,
                  m = (parseFloat(ie) - te) * x + te;
                return ($[Q] = m), $;
              }, {})),
            (L.current = X),
            (L.position = q),
            q === 1 && ((L.active = !1), (L.complete = !0)),
            (0, Tr.merge)(e, L)
          );
        }
        return e;
      },
      pF = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case tF:
            return t.payload.ixInstances || Object.freeze({});
          case rF:
            return Object.freeze({});
          case nF: {
            let {
                instanceId: r,
                elementId: n,
                actionItem: i,
                eventId: o,
                eventTarget: a,
                eventStateKey: s,
                actionListId: c,
                groupIndex: f,
                isCarrier: E,
                origin: v,
                destination: g,
                immediate: _,
                verbose: w,
                continuous: S,
                parameterId: P,
                actionGroups: b,
                smoothing: R,
                restingValue: T,
                pluginInstance: q,
                pluginDuration: x,
                instanceDelay: L,
                skipMotion: X,
                skipToValue: $,
              } = t.payload,
              { actionTypeId: Q } = i,
              ie = cF(Q),
              te = lF(ie, Q),
              M = Object.keys(g).filter((F) => g[F] != null),
              { easing: m } = i.config;
            return (0, Tr.set)(e, r, {
              id: r,
              elementId: n,
              active: !1,
              position: 0,
              start: 0,
              origin: v,
              destination: g,
              destinationKeys: M,
              immediate: _,
              verbose: w,
              current: null,
              actionItem: i,
              actionTypeId: Q,
              eventId: o,
              eventTarget: a,
              eventStateKey: s,
              actionListId: c,
              groupIndex: f,
              renderType: ie,
              isCarrier: E,
              styleProp: te,
              continuous: S,
              parameterId: P,
              actionGroups: b,
              smoothing: R,
              restingValue: T,
              pluginInstance: q,
              pluginDuration: x,
              instanceDelay: L,
              skipMotion: X,
              skipToValue: $,
              customEasingFn:
                Array.isArray(m) && m.length === 4 ? sF(m) : void 0,
            });
          }
          case iF: {
            let { instanceId: r, time: n } = t.payload;
            return (0, Tr.mergeIn)(e, [r], {
              active: !0,
              complete: !1,
              start: n,
            });
          }
          case oF: {
            let { instanceId: r } = t.payload;
            if (!e[r]) return e;
            let n = {},
              i = Object.keys(e),
              { length: o } = i;
            for (let a = 0; a < o; a++) {
              let s = i[a];
              s !== r && (n[s] = e[s]);
            }
            return n;
          }
          case aF: {
            let r = e,
              n = Object.keys(e),
              { length: i } = n;
            for (let o = 0; o < i; o++) {
              let a = n[o],
                s = e[a],
                c = s.continuous ? fF : dF;
              r = (0, Tr.set)(r, a, c(s, t));
            }
            return r;
          }
          default:
            return e;
        }
      };
    vi.ixInstances = pF;
  });
  var Kh = u((Ei) => {
    "use strict";
    Object.defineProperty(Ei, "__esModule", { value: !0 });
    Ei.ixParameters = void 0;
    var vF = Ve(),
      {
        IX2_RAW_DATA_IMPORTED: EF,
        IX2_SESSION_STOPPED: hF,
        IX2_PARAMETER_CHANGED: gF,
      } = vF.IX2EngineActionTypes,
      _F = (e = {}, t) => {
        switch (t.type) {
          case EF:
            return t.payload.ixParameters || {};
          case hF:
            return {};
          case gF: {
            let { key: r, value: n } = t.payload;
            return (e[r] = n), e;
          }
          default:
            return e;
        }
      };
    Ei.ixParameters = _F;
  });
  var zh = u((hi) => {
    "use strict";
    Object.defineProperty(hi, "__esModule", { value: !0 });
    hi.default = void 0;
    var yF = Yo(),
      mF = Ef(),
      IF = Pf(),
      TF = Mf(),
      OF = Bt(),
      SF = jh(),
      bF = Kh(),
      { ixElements: AF } = OF.IX2ElementsReducer,
      wF = (0, yF.combineReducers)({
        ixData: mF.ixData,
        ixRequest: IF.ixRequest,
        ixSession: TF.ixSession,
        ixElements: AF,
        ixInstances: SF.ixInstances,
        ixParameters: bF.ixParameters,
      });
    hi.default = wF;
  });
  var Yh = u((K5, rn) => {
    function RF(e, t) {
      if (e == null) return {};
      var r = {},
        n = Object.keys(e),
        i,
        o;
      for (o = 0; o < n.length; o++)
        (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
      return r;
    }
    (rn.exports = RF),
      (rn.exports.__esModule = !0),
      (rn.exports.default = rn.exports);
  });
  var Qh = u((z5, $h) => {
    var CF = St(),
      NF = qe(),
      qF = gt(),
      xF = "[object String]";
    function LF(e) {
      return typeof e == "string" || (!NF(e) && qF(e) && CF(e) == xF);
    }
    $h.exports = LF;
  });
  var Jh = u((Y5, Zh) => {
    var PF = Aa(),
      DF = PF("length");
    Zh.exports = DF;
  });
  var tg = u(($5, eg) => {
    var MF = "\\ud800-\\udfff",
      FF = "\\u0300-\\u036f",
      GF = "\\ufe20-\\ufe2f",
      UF = "\\u20d0-\\u20ff",
      XF = FF + GF + UF,
      VF = "\\ufe0e\\ufe0f",
      WF = "\\u200d",
      BF = RegExp("[" + WF + MF + XF + VF + "]");
    function HF(e) {
      return BF.test(e);
    }
    eg.exports = HF;
  });
  var lg = u((Q5, cg) => {
    var ng = "\\ud800-\\udfff",
      kF = "\\u0300-\\u036f",
      jF = "\\ufe20-\\ufe2f",
      KF = "\\u20d0-\\u20ff",
      zF = kF + jF + KF,
      YF = "\\ufe0e\\ufe0f",
      $F = "[" + ng + "]",
      Ka = "[" + zF + "]",
      za = "\\ud83c[\\udffb-\\udfff]",
      QF = "(?:" + Ka + "|" + za + ")",
      ig = "[^" + ng + "]",
      og = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      ag = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      ZF = "\\u200d",
      sg = QF + "?",
      ug = "[" + YF + "]?",
      JF = "(?:" + ZF + "(?:" + [ig, og, ag].join("|") + ")" + ug + sg + ")*",
      e1 = ug + sg + JF,
      t1 = "(?:" + [ig + Ka + "?", Ka, og, ag, $F].join("|") + ")",
      rg = RegExp(za + "(?=" + za + ")|" + t1 + e1, "g");
    function r1(e) {
      for (var t = (rg.lastIndex = 0); rg.test(e); ) ++t;
      return t;
    }
    cg.exports = r1;
  });
  var dg = u((Z5, fg) => {
    var n1 = Jh(),
      i1 = tg(),
      o1 = lg();
    function a1(e) {
      return i1(e) ? o1(e) : n1(e);
    }
    fg.exports = a1;
  });
  var vg = u((J5, pg) => {
    var s1 = zn(),
      u1 = Yn(),
      c1 = Ft(),
      l1 = Qh(),
      f1 = dg(),
      d1 = "[object Map]",
      p1 = "[object Set]";
    function v1(e) {
      if (e == null) return 0;
      if (c1(e)) return l1(e) ? f1(e) : e.length;
      var t = u1(e);
      return t == d1 || t == p1 ? e.size : s1(e).length;
    }
    pg.exports = v1;
  });
  var hg = u((ej, Eg) => {
    var E1 = "Expected a function";
    function h1(e) {
      if (typeof e != "function") throw new TypeError(E1);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    Eg.exports = h1;
  });
  var Ya = u((tj, gg) => {
    var g1 = bt(),
      _1 = (function () {
        try {
          var e = g1(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    gg.exports = _1;
  });
  var $a = u((rj, yg) => {
    var _g = Ya();
    function y1(e, t, r) {
      t == "__proto__" && _g
        ? _g(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    yg.exports = y1;
  });
  var Ig = u((nj, mg) => {
    var m1 = $a(),
      I1 = Gn(),
      T1 = Object.prototype,
      O1 = T1.hasOwnProperty;
    function S1(e, t, r) {
      var n = e[t];
      (!(O1.call(e, t) && I1(n, r)) || (r === void 0 && !(t in e))) &&
        m1(e, t, r);
    }
    mg.exports = S1;
  });
  var Sg = u((ij, Og) => {
    var b1 = Ig(),
      A1 = Kr(),
      w1 = Hn(),
      Tg = lt(),
      R1 = fr();
    function C1(e, t, r, n) {
      if (!Tg(e)) return e;
      t = A1(t, e);
      for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
        var c = R1(t[i]),
          f = r;
        if (c === "__proto__" || c === "constructor" || c === "prototype")
          return e;
        if (i != a) {
          var E = s[c];
          (f = n ? n(E, c, s) : void 0),
            f === void 0 && (f = Tg(E) ? E : w1(t[i + 1]) ? [] : {});
        }
        b1(s, c, f), (s = s[c]);
      }
      return e;
    }
    Og.exports = C1;
  });
  var Ag = u((oj, bg) => {
    var N1 = Zn(),
      q1 = Sg(),
      x1 = Kr();
    function L1(e, t, r) {
      for (var n = -1, i = t.length, o = {}; ++n < i; ) {
        var a = t[n],
          s = N1(e, a);
        r(s, a) && q1(o, x1(a, e), s);
      }
      return o;
    }
    bg.exports = L1;
  });
  var Rg = u((aj, wg) => {
    var P1 = Wn(),
      D1 = Mo(),
      M1 = fa(),
      F1 = la(),
      G1 = Object.getOwnPropertySymbols,
      U1 = G1
        ? function (e) {
            for (var t = []; e; ) P1(t, M1(e)), (e = D1(e));
            return t;
          }
        : F1;
    wg.exports = U1;
  });
  var Ng = u((sj, Cg) => {
    function X1(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    Cg.exports = X1;
  });
  var xg = u((uj, qg) => {
    var V1 = lt(),
      W1 = Kn(),
      B1 = Ng(),
      H1 = Object.prototype,
      k1 = H1.hasOwnProperty;
    function j1(e) {
      if (!V1(e)) return B1(e);
      var t = W1(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !k1.call(e, n))) || r.push(n);
      return r;
    }
    qg.exports = j1;
  });
  var Pg = u((cj, Lg) => {
    var K1 = pa(),
      z1 = xg(),
      Y1 = Ft();
    function $1(e) {
      return Y1(e) ? K1(e, !0) : z1(e);
    }
    Lg.exports = $1;
  });
  var Mg = u((lj, Dg) => {
    var Q1 = ca(),
      Z1 = Rg(),
      J1 = Pg();
    function e2(e) {
      return Q1(e, J1, Z1);
    }
    Dg.exports = e2;
  });
  var Gg = u((fj, Fg) => {
    var t2 = ba(),
      r2 = At(),
      n2 = Ag(),
      i2 = Mg();
    function o2(e, t) {
      if (e == null) return {};
      var r = t2(i2(e), function (n) {
        return [n];
      });
      return (
        (t = r2(t)),
        n2(e, r, function (n, i) {
          return t(n, i[0]);
        })
      );
    }
    Fg.exports = o2;
  });
  var Xg = u((dj, Ug) => {
    var a2 = At(),
      s2 = hg(),
      u2 = Gg();
    function c2(e, t) {
      return u2(e, s2(a2(t)));
    }
    Ug.exports = c2;
  });
  var Wg = u((pj, Vg) => {
    var l2 = zn(),
      f2 = Yn(),
      d2 = Vr(),
      p2 = qe(),
      v2 = Ft(),
      E2 = Bn(),
      h2 = Kn(),
      g2 = jn(),
      _2 = "[object Map]",
      y2 = "[object Set]",
      m2 = Object.prototype,
      I2 = m2.hasOwnProperty;
    function T2(e) {
      if (e == null) return !0;
      if (
        v2(e) &&
        (p2(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          E2(e) ||
          g2(e) ||
          d2(e))
      )
        return !e.length;
      var t = f2(e);
      if (t == _2 || t == y2) return !e.size;
      if (h2(e)) return !l2(e).length;
      for (var r in e) if (I2.call(e, r)) return !1;
      return !0;
    }
    Vg.exports = T2;
  });
  var Hg = u((vj, Bg) => {
    var O2 = $a(),
      S2 = Fa(),
      b2 = At();
    function A2(e, t) {
      var r = {};
      return (
        (t = b2(t, 3)),
        S2(e, function (n, i, o) {
          O2(r, i, t(n, i, o));
        }),
        r
      );
    }
    Bg.exports = A2;
  });
  var jg = u((Ej, kg) => {
    function w2(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    kg.exports = w2;
  });
  var zg = u((hj, Kg) => {
    var R2 = ei();
    function C2(e) {
      return typeof e == "function" ? e : R2;
    }
    Kg.exports = C2;
  });
  var $g = u((gj, Yg) => {
    var N2 = jg(),
      q2 = Ga(),
      x2 = zg(),
      L2 = qe();
    function P2(e, t) {
      var r = L2(e) ? N2 : q2;
      return r(e, x2(t));
    }
    Yg.exports = P2;
  });
  var Zg = u((_j, Qg) => {
    var D2 = Je(),
      M2 = function () {
        return D2.Date.now();
      };
    Qg.exports = M2;
  });
  var t_ = u((yj, e_) => {
    var F2 = lt(),
      Qa = Zg(),
      Jg = ti(),
      G2 = "Expected a function",
      U2 = Math.max,
      X2 = Math.min;
    function V2(e, t, r) {
      var n,
        i,
        o,
        a,
        s,
        c,
        f = 0,
        E = !1,
        v = !1,
        g = !0;
      if (typeof e != "function") throw new TypeError(G2);
      (t = Jg(t) || 0),
        F2(r) &&
          ((E = !!r.leading),
          (v = "maxWait" in r),
          (o = v ? U2(Jg(r.maxWait) || 0, t) : o),
          (g = "trailing" in r ? !!r.trailing : g));
      function _(L) {
        var X = n,
          $ = i;
        return (n = i = void 0), (f = L), (a = e.apply($, X)), a;
      }
      function w(L) {
        return (f = L), (s = setTimeout(b, t)), E ? _(L) : a;
      }
      function S(L) {
        var X = L - c,
          $ = L - f,
          Q = t - X;
        return v ? X2(Q, o - $) : Q;
      }
      function P(L) {
        var X = L - c,
          $ = L - f;
        return c === void 0 || X >= t || X < 0 || (v && $ >= o);
      }
      function b() {
        var L = Qa();
        if (P(L)) return R(L);
        s = setTimeout(b, S(L));
      }
      function R(L) {
        return (s = void 0), g && n ? _(L) : ((n = i = void 0), a);
      }
      function T() {
        s !== void 0 && clearTimeout(s), (f = 0), (n = c = i = s = void 0);
      }
      function q() {
        return s === void 0 ? a : R(Qa());
      }
      function x() {
        var L = Qa(),
          X = P(L);
        if (((n = arguments), (i = this), (c = L), X)) {
          if (s === void 0) return w(c);
          if (v) return clearTimeout(s), (s = setTimeout(b, t)), _(c);
        }
        return s === void 0 && (s = setTimeout(b, t)), a;
      }
      return (x.cancel = T), (x.flush = q), x;
    }
    e_.exports = V2;
  });
  var n_ = u((mj, r_) => {
    var W2 = t_(),
      B2 = lt(),
      H2 = "Expected a function";
    function k2(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(H2);
      return (
        B2(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (i = "trailing" in r ? !!r.trailing : i)),
        W2(e, t, { leading: n, maxWait: t, trailing: i })
      );
    }
    r_.exports = k2;
  });
  var gi = u((ce) => {
    "use strict";
    var j2 = st().default;
    Object.defineProperty(ce, "__esModule", { value: !0 });
    ce.viewportWidthChanged =
      ce.testFrameRendered =
      ce.stopRequested =
      ce.sessionStopped =
      ce.sessionStarted =
      ce.sessionInitialized =
      ce.rawDataImported =
      ce.previewRequested =
      ce.playbackRequested =
      ce.parameterChanged =
      ce.mediaQueriesDefined =
      ce.instanceStarted =
      ce.instanceRemoved =
      ce.instanceAdded =
      ce.eventStateChanged =
      ce.eventListenerAdded =
      ce.elementStateChanged =
      ce.clearRequested =
      ce.animationFrameChanged =
      ce.actionListPlaybackChanged =
        void 0;
    var i_ = j2(Mr()),
      o_ = Ve(),
      K2 = Bt(),
      {
        IX2_RAW_DATA_IMPORTED: z2,
        IX2_SESSION_INITIALIZED: Y2,
        IX2_SESSION_STARTED: $2,
        IX2_SESSION_STOPPED: Q2,
        IX2_PREVIEW_REQUESTED: Z2,
        IX2_PLAYBACK_REQUESTED: J2,
        IX2_STOP_REQUESTED: eG,
        IX2_CLEAR_REQUESTED: tG,
        IX2_EVENT_LISTENER_ADDED: rG,
        IX2_TEST_FRAME_RENDERED: nG,
        IX2_EVENT_STATE_CHANGED: iG,
        IX2_ANIMATION_FRAME_CHANGED: oG,
        IX2_PARAMETER_CHANGED: aG,
        IX2_INSTANCE_ADDED: sG,
        IX2_INSTANCE_STARTED: uG,
        IX2_INSTANCE_REMOVED: cG,
        IX2_ELEMENT_STATE_CHANGED: lG,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: fG,
        IX2_VIEWPORT_WIDTH_CHANGED: dG,
        IX2_MEDIA_QUERIES_DEFINED: pG,
      } = o_.IX2EngineActionTypes,
      { reifyState: vG } = K2.IX2VanillaUtils,
      EG = (e) => ({ type: z2, payload: (0, i_.default)({}, vG(e)) });
    ce.rawDataImported = EG;
    var hG = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
      type: Y2,
      payload: { hasBoundaryNodes: e, reducedMotion: t },
    });
    ce.sessionInitialized = hG;
    var gG = () => ({ type: $2 });
    ce.sessionStarted = gG;
    var _G = () => ({ type: Q2 });
    ce.sessionStopped = _G;
    var yG = ({ rawData: e, defer: t }) => ({
      type: Z2,
      payload: { defer: t, rawData: e },
    });
    ce.previewRequested = yG;
    var mG = ({
      actionTypeId: e = o_.ActionTypeConsts.GENERAL_START_ACTION,
      actionListId: t,
      actionItemId: r,
      eventId: n,
      allowEvents: i,
      immediate: o,
      testManual: a,
      verbose: s,
      rawData: c,
    }) => ({
      type: J2,
      payload: {
        actionTypeId: e,
        actionListId: t,
        actionItemId: r,
        testManual: a,
        eventId: n,
        allowEvents: i,
        immediate: o,
        verbose: s,
        rawData: c,
      },
    });
    ce.playbackRequested = mG;
    var IG = (e) => ({ type: eG, payload: { actionListId: e } });
    ce.stopRequested = IG;
    var TG = () => ({ type: tG });
    ce.clearRequested = TG;
    var OG = (e, t) => ({
      type: rG,
      payload: { target: e, listenerParams: t },
    });
    ce.eventListenerAdded = OG;
    var SG = (e = 1) => ({ type: nG, payload: { step: e } });
    ce.testFrameRendered = SG;
    var bG = (e, t) => ({ type: iG, payload: { stateKey: e, newState: t } });
    ce.eventStateChanged = bG;
    var AG = (e, t) => ({ type: oG, payload: { now: e, parameters: t } });
    ce.animationFrameChanged = AG;
    var wG = (e, t) => ({ type: aG, payload: { key: e, value: t } });
    ce.parameterChanged = wG;
    var RG = (e) => ({ type: sG, payload: (0, i_.default)({}, e) });
    ce.instanceAdded = RG;
    var CG = (e, t) => ({ type: uG, payload: { instanceId: e, time: t } });
    ce.instanceStarted = CG;
    var NG = (e) => ({ type: cG, payload: { instanceId: e } });
    ce.instanceRemoved = NG;
    var qG = (e, t, r, n) => ({
      type: lG,
      payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
    });
    ce.elementStateChanged = qG;
    var xG = ({ actionListId: e, isPlaying: t }) => ({
      type: fG,
      payload: { actionListId: e, isPlaying: t },
    });
    ce.actionListPlaybackChanged = xG;
    var LG = ({ width: e, mediaQueries: t }) => ({
      type: dG,
      payload: { width: e, mediaQueries: t },
    });
    ce.viewportWidthChanged = LG;
    var PG = () => ({ type: pG });
    ce.mediaQueriesDefined = PG;
  });
  var u_ = u((Le) => {
    "use strict";
    Object.defineProperty(Le, "__esModule", { value: !0 });
    Le.elementContains = jG;
    Le.getChildElements = zG;
    Le.getClosestElement = void 0;
    Le.getProperty = VG;
    Le.getQuerySelector = BG;
    Le.getRefType = QG;
    Le.getSiblingElements = YG;
    Le.getStyle = XG;
    Le.getValidDocument = HG;
    Le.isSiblingNode = KG;
    Le.matchSelector = WG;
    Le.queryDocument = kG;
    Le.setStyle = UG;
    var DG = Bt(),
      MG = Ve(),
      { ELEMENT_MATCHES: Za } = DG.IX2BrowserSupport,
      {
        IX2_ID_DELIMITER: a_,
        HTML_ELEMENT: FG,
        PLAIN_OBJECT: GG,
        WF_PAGE: s_,
      } = MG.IX2EngineConstants;
    function UG(e, t, r) {
      e.style[t] = r;
    }
    function XG(e, t) {
      return e.style[t];
    }
    function VG(e, t) {
      return e[t];
    }
    function WG(e) {
      return (t) => t[Za](e);
    }
    function BG({ id: e, selector: t }) {
      if (e) {
        let r = e;
        if (e.indexOf(a_) !== -1) {
          let n = e.split(a_),
            i = n[0];
          if (((r = n[1]), i !== document.documentElement.getAttribute(s_)))
            return null;
        }
        return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
      }
      return t;
    }
    function HG(e) {
      return e == null || e === document.documentElement.getAttribute(s_)
        ? document
        : null;
    }
    function kG(e, t) {
      return Array.prototype.slice.call(
        document.querySelectorAll(t ? e + " " + t : e)
      );
    }
    function jG(e, t) {
      return e.contains(t);
    }
    function KG(e, t) {
      return e !== t && e.parentNode === t.parentNode;
    }
    function zG(e) {
      let t = [];
      for (let r = 0, { length: n } = e || []; r < n; r++) {
        let { children: i } = e[r],
          { length: o } = i;
        if (o) for (let a = 0; a < o; a++) t.push(i[a]);
      }
      return t;
    }
    function YG(e = []) {
      let t = [],
        r = [];
      for (let n = 0, { length: i } = e; n < i; n++) {
        let { parentNode: o } = e[n];
        if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
          continue;
        r.push(o);
        let a = o.firstElementChild;
        for (; a != null; )
          e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
      }
      return t;
    }
    var $G = Element.prototype.closest
      ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
      : (e, t) => {
          if (!document.documentElement.contains(e)) return null;
          let r = e;
          do {
            if (r[Za] && r[Za](t)) return r;
            r = r.parentNode;
          } while (r != null);
          return null;
        };
    Le.getClosestElement = $G;
    function QG(e) {
      return e != null && typeof e == "object"
        ? e instanceof Element
          ? FG
          : GG
        : null;
    }
  });
  var Ja = u((Oj, l_) => {
    var ZG = lt(),
      c_ = Object.create,
      JG = (function () {
        function e() {}
        return function (t) {
          if (!ZG(t)) return {};
          if (c_) return c_(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    l_.exports = JG;
  });
  var _i = u((Sj, f_) => {
    function eU() {}
    f_.exports = eU;
  });
  var mi = u((bj, d_) => {
    var tU = Ja(),
      rU = _i();
    function yi(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    yi.prototype = tU(rU.prototype);
    yi.prototype.constructor = yi;
    d_.exports = yi;
  });
  var h_ = u((Aj, E_) => {
    var p_ = Jt(),
      nU = Vr(),
      iU = qe(),
      v_ = p_ ? p_.isConcatSpreadable : void 0;
    function oU(e) {
      return iU(e) || nU(e) || !!(v_ && e && e[v_]);
    }
    E_.exports = oU;
  });
  var y_ = u((wj, __) => {
    var aU = Wn(),
      sU = h_();
    function g_(e, t, r, n, i) {
      var o = -1,
        a = e.length;
      for (r || (r = sU), i || (i = []); ++o < a; ) {
        var s = e[o];
        t > 0 && r(s)
          ? t > 1
            ? g_(s, t - 1, r, n, i)
            : aU(i, s)
          : n || (i[i.length] = s);
      }
      return i;
    }
    __.exports = g_;
  });
  var I_ = u((Rj, m_) => {
    var uU = y_();
    function cU(e) {
      var t = e == null ? 0 : e.length;
      return t ? uU(e, 1) : [];
    }
    m_.exports = cU;
  });
  var O_ = u((Cj, T_) => {
    function lU(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    T_.exports = lU;
  });
  var A_ = u((Nj, b_) => {
    var fU = O_(),
      S_ = Math.max;
    function dU(e, t, r) {
      return (
        (t = S_(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, i = -1, o = S_(n.length - t, 0), a = Array(o);
            ++i < o;

          )
            a[i] = n[t + i];
          i = -1;
          for (var s = Array(t + 1); ++i < t; ) s[i] = n[i];
          return (s[t] = r(a)), fU(e, this, s);
        }
      );
    }
    b_.exports = dU;
  });
  var R_ = u((qj, w_) => {
    function pU(e) {
      return function () {
        return e;
      };
    }
    w_.exports = pU;
  });
  var q_ = u((xj, N_) => {
    var vU = R_(),
      C_ = Ya(),
      EU = ei(),
      hU = C_
        ? function (e, t) {
            return C_(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: vU(t),
              writable: !0,
            });
          }
        : EU;
    N_.exports = hU;
  });
  var L_ = u((Lj, x_) => {
    var gU = 800,
      _U = 16,
      yU = Date.now;
    function mU(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = yU(),
          i = _U - (n - r);
        if (((r = n), i > 0)) {
          if (++t >= gU) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    x_.exports = mU;
  });
  var D_ = u((Pj, P_) => {
    var IU = q_(),
      TU = L_(),
      OU = TU(IU);
    P_.exports = OU;
  });
  var F_ = u((Dj, M_) => {
    var SU = I_(),
      bU = A_(),
      AU = D_();
    function wU(e) {
      return AU(bU(e, void 0, SU), e + "");
    }
    M_.exports = wU;
  });
  var X_ = u((Mj, U_) => {
    var G_ = va(),
      RU = G_ && new G_();
    U_.exports = RU;
  });
  var W_ = u((Fj, V_) => {
    function CU() {}
    V_.exports = CU;
  });
  var es = u((Gj, H_) => {
    var B_ = X_(),
      NU = W_(),
      qU = B_
        ? function (e) {
            return B_.get(e);
          }
        : NU;
    H_.exports = qU;
  });
  var j_ = u((Uj, k_) => {
    var xU = {};
    k_.exports = xU;
  });
  var ts = u((Xj, z_) => {
    var K_ = j_(),
      LU = Object.prototype,
      PU = LU.hasOwnProperty;
    function DU(e) {
      for (
        var t = e.name + "", r = K_[t], n = PU.call(K_, t) ? r.length : 0;
        n--;

      ) {
        var i = r[n],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    z_.exports = DU;
  });
  var Ti = u((Vj, Y_) => {
    var MU = Ja(),
      FU = _i(),
      GU = 4294967295;
    function Ii(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = GU),
        (this.__views__ = []);
    }
    Ii.prototype = MU(FU.prototype);
    Ii.prototype.constructor = Ii;
    Y_.exports = Ii;
  });
  var Q_ = u((Wj, $_) => {
    function UU(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    $_.exports = UU;
  });
  var J_ = u((Bj, Z_) => {
    var XU = Ti(),
      VU = mi(),
      WU = Q_();
    function BU(e) {
      if (e instanceof XU) return e.clone();
      var t = new VU(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = WU(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    Z_.exports = BU;
  });
  var ry = u((Hj, ty) => {
    var HU = Ti(),
      ey = mi(),
      kU = _i(),
      jU = qe(),
      KU = gt(),
      zU = J_(),
      YU = Object.prototype,
      $U = YU.hasOwnProperty;
    function Oi(e) {
      if (KU(e) && !jU(e) && !(e instanceof HU)) {
        if (e instanceof ey) return e;
        if ($U.call(e, "__wrapped__")) return zU(e);
      }
      return new ey(e);
    }
    Oi.prototype = kU.prototype;
    Oi.prototype.constructor = Oi;
    ty.exports = Oi;
  });
  var iy = u((kj, ny) => {
    var QU = Ti(),
      ZU = es(),
      JU = ts(),
      eX = ry();
    function tX(e) {
      var t = JU(e),
        r = eX[t];
      if (typeof r != "function" || !(t in QU.prototype)) return !1;
      if (e === r) return !0;
      var n = ZU(r);
      return !!n && e === n[0];
    }
    ny.exports = tX;
  });
  var uy = u((jj, sy) => {
    var oy = mi(),
      rX = F_(),
      nX = es(),
      rs = ts(),
      iX = qe(),
      ay = iy(),
      oX = "Expected a function",
      aX = 8,
      sX = 32,
      uX = 128,
      cX = 256;
    function lX(e) {
      return rX(function (t) {
        var r = t.length,
          n = r,
          i = oy.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var o = t[n];
          if (typeof o != "function") throw new TypeError(oX);
          if (i && !a && rs(o) == "wrapper") var a = new oy([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          o = t[n];
          var s = rs(o),
            c = s == "wrapper" ? nX(o) : void 0;
          c &&
          ay(c[0]) &&
          c[1] == (uX | aX | sX | cX) &&
          !c[4].length &&
          c[9] == 1
            ? (a = a[rs(c[0])].apply(a, c[3]))
            : (a = o.length == 1 && ay(o) ? a[s]() : a.thru(o));
        }
        return function () {
          var f = arguments,
            E = f[0];
          if (a && f.length == 1 && iX(E)) return a.plant(E).value();
          for (var v = 0, g = r ? t[v].apply(this, f) : E; ++v < r; )
            g = t[v].call(this, g);
          return g;
        };
      });
    }
    sy.exports = lX;
  });
  var ly = u((Kj, cy) => {
    var fX = uy(),
      dX = fX();
    cy.exports = dX;
  });
  var dy = u((zj, fy) => {
    function pX(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    fy.exports = pX;
  });
  var vy = u((Yj, py) => {
    var vX = dy(),
      ns = ti();
    function EX(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = ns(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = ns(t)), (t = t === t ? t : 0)),
        vX(ns(e), t, r)
      );
    }
    py.exports = EX;
  });
  var xy = u((Ri) => {
    "use strict";
    var wi = st().default;
    Object.defineProperty(Ri, "__esModule", { value: !0 });
    Ri.default = void 0;
    var je = wi(Mr()),
      hX = wi(ly()),
      gX = wi(Jn()),
      _X = wi(vy()),
      Ht = Ve(),
      is = us(),
      Si = gi(),
      yX = Bt(),
      {
        MOUSE_CLICK: mX,
        MOUSE_SECOND_CLICK: IX,
        MOUSE_DOWN: TX,
        MOUSE_UP: OX,
        MOUSE_OVER: SX,
        MOUSE_OUT: bX,
        DROPDOWN_CLOSE: AX,
        DROPDOWN_OPEN: wX,
        SLIDER_ACTIVE: RX,
        SLIDER_INACTIVE: CX,
        TAB_ACTIVE: NX,
        TAB_INACTIVE: qX,
        NAVBAR_CLOSE: xX,
        NAVBAR_OPEN: LX,
        MOUSE_MOVE: PX,
        PAGE_SCROLL_DOWN: Oy,
        SCROLL_INTO_VIEW: Sy,
        SCROLL_OUT_OF_VIEW: DX,
        PAGE_SCROLL_UP: MX,
        SCROLLING_IN_VIEW: FX,
        PAGE_FINISH: by,
        ECOMMERCE_CART_CLOSE: GX,
        ECOMMERCE_CART_OPEN: UX,
        PAGE_START: Ay,
        PAGE_SCROLL: XX,
      } = Ht.EventTypeConsts,
      os = "COMPONENT_ACTIVE",
      wy = "COMPONENT_INACTIVE",
      { COLON_DELIMITER: Ey } = Ht.IX2EngineConstants,
      { getNamespacedParameterId: hy } = yX.IX2VanillaUtils,
      Ry = (e) => (t) => typeof t == "object" && e(t) ? !0 : t,
      on = Ry(({ element: e, nativeEvent: t }) => e === t.target),
      VX = Ry(({ element: e, nativeEvent: t }) => e.contains(t.target)),
      vt = (0, hX.default)([on, VX]),
      Cy = (e, t) => {
        if (t) {
          let { ixData: r } = e.getState(),
            { events: n } = r,
            i = n[t];
          if (i && !BX[i.eventTypeId]) return i;
        }
        return null;
      },
      WX = ({ store: e, event: t }) => {
        let { action: r } = t,
          { autoStopEventId: n } = r.config;
        return !!Cy(e, n);
      },
      Be = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
        let { action: o, id: a } = t,
          { actionListId: s, autoStopEventId: c } = o.config,
          f = Cy(e, c);
        return (
          f &&
            (0, is.stopActionGroup)({
              store: e,
              eventId: c,
              eventTarget: r,
              eventStateKey: c + Ey + n.split(Ey)[1],
              actionListId: (0, gX.default)(f, "action.config.actionListId"),
            }),
          (0, is.stopActionGroup)({
            store: e,
            eventId: a,
            eventTarget: r,
            eventStateKey: n,
            actionListId: s,
          }),
          (0, is.startActionGroup)({
            store: e,
            eventId: a,
            eventTarget: r,
            eventStateKey: n,
            actionListId: s,
          }),
          i
        );
      },
      et = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n,
      an = { handler: et(vt, Be) },
      Ny = (0, je.default)({}, an, { types: [os, wy].join(" ") }),
      as = [
        { target: window, types: "resize orientationchange", throttle: !0 },
        {
          target: document,
          types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
          throttle: !0,
        },
      ],
      gy = "mouseover mouseout",
      ss = { types: as },
      BX = { PAGE_START: Ay, PAGE_FINISH: by },
      nn = (() => {
        let e = window.pageXOffset !== void 0,
          r =
            document.compatMode === "CSS1Compat"
              ? document.documentElement
              : document.body;
        return () => ({
          scrollLeft: e ? window.pageXOffset : r.scrollLeft,
          scrollTop: e ? window.pageYOffset : r.scrollTop,
          stiffScrollTop: (0, _X.default)(
            e ? window.pageYOffset : r.scrollTop,
            0,
            r.scrollHeight - window.innerHeight
          ),
          scrollWidth: r.scrollWidth,
          scrollHeight: r.scrollHeight,
          clientWidth: r.clientWidth,
          clientHeight: r.clientHeight,
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight,
        });
      })(),
      HX = (e, t) =>
        !(
          e.left > t.right ||
          e.right < t.left ||
          e.top > t.bottom ||
          e.bottom < t.top
        ),
      kX = ({ element: e, nativeEvent: t }) => {
        let { type: r, target: n, relatedTarget: i } = t,
          o = e.contains(n);
        if (r === "mouseover" && o) return !0;
        let a = e.contains(i);
        return !!(r === "mouseout" && o && a);
      },
      jX = (e) => {
        let {
            element: t,
            event: { config: r },
          } = e,
          { clientWidth: n, clientHeight: i } = nn(),
          o = r.scrollOffsetValue,
          c = r.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
        return HX(t.getBoundingClientRect(), {
          left: 0,
          top: c,
          right: n,
          bottom: i - c,
        });
      },
      qy = (e) => (t, r) => {
        let { type: n } = t.nativeEvent,
          i = [os, wy].indexOf(n) !== -1 ? n === os : r.isActive,
          o = (0, je.default)({}, r, { isActive: i });
        return ((!r || o.isActive !== r.isActive) && e(t, o)) || o;
      },
      _y = (e) => (t, r) => {
        let n = { elementHovered: kX(t) };
        return (
          ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
            e(t, n)) ||
          n
        );
      },
      KX = (e) => (t, r) => {
        let n = (0, je.default)({}, r, { elementVisible: jX(t) });
        return (
          ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
            e(t, n)) ||
          n
        );
      },
      yy =
        (e) =>
        (t, r = {}) => {
          let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = nn(),
            {
              event: { config: a, eventTypeId: s },
            } = t,
            { scrollOffsetValue: c, scrollOffsetUnit: f } = a,
            E = f === "PX",
            v = i - o,
            g = Number((n / v).toFixed(2));
          if (r && r.percentTop === g) return r;
          let _ = (E ? c : (o * (c || 0)) / 100) / v,
            w,
            S,
            P = 0;
          r &&
            ((w = g > r.percentTop),
            (S = r.scrollingDown !== w),
            (P = S ? g : r.anchorTop));
          let b = s === Oy ? g >= P + _ : g <= P - _,
            R = (0, je.default)({}, r, {
              percentTop: g,
              inBounds: b,
              anchorTop: P,
              scrollingDown: w,
            });
          return (r && b && (S || R.inBounds !== r.inBounds) && e(t, R)) || R;
        },
      zX = (e, t) =>
        e.left > t.left &&
        e.left < t.right &&
        e.top > t.top &&
        e.top < t.bottom,
      YX = (e) => (t, r) => {
        let n = { finished: document.readyState === "complete" };
        return n.finished && !(r && r.finshed) && e(t), n;
      },
      $X = (e) => (t, r) => {
        let n = { started: !0 };
        return r || e(t), n;
      },
      my =
        (e) =>
        (t, r = { clickCount: 0 }) => {
          let n = { clickCount: (r.clickCount % 2) + 1 };
          return (n.clickCount !== r.clickCount && e(t, n)) || n;
        },
      bi = (e = !0) =>
        (0, je.default)({}, Ny, {
          handler: et(
            e ? vt : on,
            qy((t, r) => (r.isActive ? an.handler(t, r) : r))
          ),
        }),
      Ai = (e = !0) =>
        (0, je.default)({}, Ny, {
          handler: et(
            e ? vt : on,
            qy((t, r) => (r.isActive ? r : an.handler(t, r)))
          ),
        }),
      Iy = (0, je.default)({}, ss, {
        handler: KX((e, t) => {
          let { elementVisible: r } = t,
            { event: n, store: i } = e,
            { ixData: o } = i.getState(),
            { events: a } = o;
          return !a[n.action.config.autoStopEventId] && t.triggered
            ? t
            : (n.eventTypeId === Sy) === r
            ? (Be(e), (0, je.default)({}, t, { triggered: !0 }))
            : t;
        }),
      }),
      Ty = 0.05,
      QX = {
        [RX]: bi(),
        [CX]: Ai(),
        [wX]: bi(),
        [AX]: Ai(),
        [LX]: bi(!1),
        [xX]: Ai(!1),
        [NX]: bi(),
        [qX]: Ai(),
        [UX]: { types: "ecommerce-cart-open", handler: et(vt, Be) },
        [GX]: { types: "ecommerce-cart-close", handler: et(vt, Be) },
        [mX]: {
          types: "click",
          handler: et(
            vt,
            my((e, { clickCount: t }) => {
              WX(e) ? t === 1 && Be(e) : Be(e);
            })
          ),
        },
        [IX]: {
          types: "click",
          handler: et(
            vt,
            my((e, { clickCount: t }) => {
              t === 2 && Be(e);
            })
          ),
        },
        [TX]: (0, je.default)({}, an, { types: "mousedown" }),
        [OX]: (0, je.default)({}, an, { types: "mouseup" }),
        [SX]: {
          types: gy,
          handler: et(
            vt,
            _y((e, t) => {
              t.elementHovered && Be(e);
            })
          ),
        },
        [bX]: {
          types: gy,
          handler: et(
            vt,
            _y((e, t) => {
              t.elementHovered || Be(e);
            })
          ),
        },
        [PX]: {
          types: "mousemove mouseout scroll",
          handler: (
            {
              store: e,
              element: t,
              eventConfig: r,
              nativeEvent: n,
              eventStateKey: i,
            },
            o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
          ) => {
            let {
                basedOn: a,
                selectedAxis: s,
                continuousParameterGroupId: c,
                reverse: f,
                restingState: E = 0,
              } = r,
              {
                clientX: v = o.clientX,
                clientY: g = o.clientY,
                pageX: _ = o.pageX,
                pageY: w = o.pageY,
              } = n,
              S = s === "X_AXIS",
              P = n.type === "mouseout",
              b = E / 100,
              R = c,
              T = !1;
            switch (a) {
              case Ht.EventBasedOn.VIEWPORT: {
                b = S
                  ? Math.min(v, window.innerWidth) / window.innerWidth
                  : Math.min(g, window.innerHeight) / window.innerHeight;
                break;
              }
              case Ht.EventBasedOn.PAGE: {
                let {
                  scrollLeft: q,
                  scrollTop: x,
                  scrollWidth: L,
                  scrollHeight: X,
                } = nn();
                b = S ? Math.min(q + _, L) / L : Math.min(x + w, X) / X;
                break;
              }
              case Ht.EventBasedOn.ELEMENT:
              default: {
                R = hy(i, c);
                let q = n.type.indexOf("mouse") === 0;
                if (q && vt({ element: t, nativeEvent: n }) !== !0) break;
                let x = t.getBoundingClientRect(),
                  { left: L, top: X, width: $, height: Q } = x;
                if (!q && !zX({ left: v, top: g }, x)) break;
                (T = !0), (b = S ? (v - L) / $ : (g - X) / Q);
                break;
              }
            }
            return (
              P && (b > 1 - Ty || b < Ty) && (b = Math.round(b)),
              (a !== Ht.EventBasedOn.ELEMENT || T || T !== o.elementHovered) &&
                ((b = f ? 1 - b : b),
                e.dispatch((0, Si.parameterChanged)(R, b))),
              { elementHovered: T, clientX: v, clientY: g, pageX: _, pageY: w }
            );
          },
        },
        [XX]: {
          types: as,
          handler: ({ store: e, eventConfig: t }) => {
            let { continuousParameterGroupId: r, reverse: n } = t,
              { scrollTop: i, scrollHeight: o, clientHeight: a } = nn(),
              s = i / (o - a);
            (s = n ? 1 - s : s), e.dispatch((0, Si.parameterChanged)(r, s));
          },
        },
        [FX]: {
          types: as,
          handler: (
            { element: e, store: t, eventConfig: r, eventStateKey: n },
            i = { scrollPercent: 0 }
          ) => {
            let {
                scrollLeft: o,
                scrollTop: a,
                scrollWidth: s,
                scrollHeight: c,
                clientHeight: f,
              } = nn(),
              {
                basedOn: E,
                selectedAxis: v,
                continuousParameterGroupId: g,
                startsEntering: _,
                startsExiting: w,
                addEndOffset: S,
                addStartOffset: P,
                addOffsetValue: b = 0,
                endOffsetValue: R = 0,
              } = r,
              T = v === "X_AXIS";
            if (E === Ht.EventBasedOn.VIEWPORT) {
              let q = T ? o / s : a / c;
              return (
                q !== i.scrollPercent &&
                  t.dispatch((0, Si.parameterChanged)(g, q)),
                { scrollPercent: q }
              );
            } else {
              let q = hy(n, g),
                x = e.getBoundingClientRect(),
                L = (P ? b : 0) / 100,
                X = (S ? R : 0) / 100;
              (L = _ ? L : 1 - L), (X = w ? X : 1 - X);
              let $ = x.top + Math.min(x.height * L, f),
                ie = x.top + x.height * X - $,
                te = Math.min(f + ie, c),
                m = Math.min(Math.max(0, f - $), te) / te;
              return (
                m !== i.scrollPercent &&
                  t.dispatch((0, Si.parameterChanged)(q, m)),
                { scrollPercent: m }
              );
            }
          },
        },
        [Sy]: Iy,
        [DX]: Iy,
        [Oy]: (0, je.default)({}, ss, {
          handler: yy((e, t) => {
            t.scrollingDown && Be(e);
          }),
        }),
        [MX]: (0, je.default)({}, ss, {
          handler: yy((e, t) => {
            t.scrollingDown || Be(e);
          }),
        }),
        [by]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: et(on, YX(Be)),
        },
        [Ay]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: et(on, $X(Be)),
        },
      };
    Ri.default = QX;
  });
  var us = u((Nt) => {
    "use strict";
    var rt = st().default,
      ZX = Yt().default;
    Object.defineProperty(Nt, "__esModule", { value: !0 });
    Nt.observeRequests = wV;
    Nt.startActionGroup = Es;
    Nt.startEngine = xi;
    Nt.stopActionGroup = vs;
    Nt.stopAllActionGroups = Vy;
    Nt.stopEngine = Li;
    var JX = rt(Mr()),
      eV = rt(Yh()),
      tV = rt(Na()),
      Ct = rt(Jn()),
      rV = rt(vg()),
      nV = rt(Xg()),
      iV = rt(Wg()),
      oV = rt(Hg()),
      sn = rt($g()),
      aV = rt(n_()),
      tt = Ve(),
      Dy = Bt(),
      Se = gi(),
      Re = ZX(u_()),
      sV = rt(xy()),
      uV = ["store", "computedStyle"],
      cV = Object.keys(tt.QuickEffectIds),
      cs = (e) => cV.includes(e),
      {
        COLON_DELIMITER: ls,
        BOUNDARY_SELECTOR: Ci,
        HTML_ELEMENT: My,
        RENDER_GENERAL: lV,
        W_MOD_IX: Ly,
      } = tt.IX2EngineConstants,
      {
        getAffectedElements: Ni,
        getElementId: fV,
        getDestinationValues: fs,
        observeStore: kt,
        getInstanceId: dV,
        renderHTMLElement: pV,
        clearAllStyles: Fy,
        getMaxDurationItemIndex: vV,
        getComputedStyle: EV,
        getInstanceOrigin: hV,
        reduceListToGroup: gV,
        shouldNamespaceEventParameter: _V,
        getNamespacedParameterId: yV,
        shouldAllowMediaQuery: qi,
        cleanupHTMLElement: mV,
        stringifyTarget: IV,
        mediaQueriesEqual: TV,
        shallowEqual: OV,
      } = Dy.IX2VanillaUtils,
      {
        isPluginType: ds,
        createPluginInstance: ps,
        getPluginDuration: SV,
      } = Dy.IX2VanillaPlugins,
      Py = navigator.userAgent,
      bV = Py.match(/iPad/i) || Py.match(/iPhone/),
      AV = 12;
    function wV(e) {
      kt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: NV }),
        kt({
          store: e,
          select: ({ ixRequest: t }) => t.playback,
          onChange: qV,
        }),
        kt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: xV }),
        kt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: LV });
    }
    function RV(e) {
      kt({
        store: e,
        select: ({ ixSession: t }) => t.mediaQueryKey,
        onChange: () => {
          Li(e),
            Fy({ store: e, elementApi: Re }),
            xi({ store: e, allowEvents: !0 }),
            Gy();
        },
      });
    }
    function CV(e, t) {
      let r = kt({
        store: e,
        select: ({ ixSession: n }) => n.tick,
        onChange: (n) => {
          t(n), r();
        },
      });
    }
    function NV({ rawData: e, defer: t }, r) {
      let n = () => {
        xi({ store: r, rawData: e, allowEvents: !0 }), Gy();
      };
      t ? setTimeout(n, 0) : n();
    }
    function Gy() {
      document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
    }
    function qV(e, t) {
      let {
          actionTypeId: r,
          actionListId: n,
          actionItemId: i,
          eventId: o,
          allowEvents: a,
          immediate: s,
          testManual: c,
          verbose: f = !0,
        } = e,
        { rawData: E } = e;
      if (n && i && E && s) {
        let v = E.actionLists[n];
        v && (E = gV({ actionList: v, actionItemId: i, rawData: E }));
      }
      if (
        (xi({ store: t, rawData: E, allowEvents: a, testManual: c }),
        (n && r === tt.ActionTypeConsts.GENERAL_START_ACTION) || cs(r))
      ) {
        vs({ store: t, actionListId: n }),
          Xy({ store: t, actionListId: n, eventId: o });
        let v = Es({
          store: t,
          eventId: o,
          actionListId: n,
          immediate: s,
          verbose: f,
        });
        f &&
          v &&
          t.dispatch(
            (0, Se.actionListPlaybackChanged)({
              actionListId: n,
              isPlaying: !s,
            })
          );
      }
    }
    function xV({ actionListId: e }, t) {
      e ? vs({ store: t, actionListId: e }) : Vy({ store: t }), Li(t);
    }
    function LV(e, t) {
      Li(t), Fy({ store: t, elementApi: Re });
    }
    function xi({ store: e, rawData: t, allowEvents: r, testManual: n }) {
      let { ixSession: i } = e.getState();
      t && e.dispatch((0, Se.rawDataImported)(t)),
        i.active ||
          (e.dispatch(
            (0, Se.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(Ci),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            })
          ),
          r &&
            (UV(e),
            PV(),
            e.getState().ixSession.hasDefinedMediaQueries && RV(e)),
          e.dispatch((0, Se.sessionStarted)()),
          DV(e, n));
    }
    function PV() {
      let { documentElement: e } = document;
      e.className.indexOf(Ly) === -1 && (e.className += ` ${Ly}`);
    }
    function DV(e, t) {
      let r = (n) => {
        let { ixSession: i, ixParameters: o } = e.getState();
        i.active &&
          (e.dispatch((0, Se.animationFrameChanged)(n, o)),
          t ? CV(e, r) : requestAnimationFrame(r));
      };
      r(window.performance.now());
    }
    function Li(e) {
      let { ixSession: t } = e.getState();
      if (t.active) {
        let { eventListeners: r } = t;
        r.forEach(MV), e.dispatch((0, Se.sessionStopped)());
      }
    }
    function MV({ target: e, listenerParams: t }) {
      e.removeEventListener.apply(e, t);
    }
    function FV({
      store: e,
      eventStateKey: t,
      eventTarget: r,
      eventId: n,
      eventConfig: i,
      actionListId: o,
      parameterGroup: a,
      smoothing: s,
      restingValue: c,
    }) {
      let { ixData: f, ixSession: E } = e.getState(),
        { events: v } = f,
        g = v[n],
        { eventTypeId: _ } = g,
        w = {},
        S = {},
        P = [],
        { continuousActionGroups: b } = a,
        { id: R } = a;
      _V(_, i) && (R = yV(t, R));
      let T = E.hasBoundaryNodes && r ? Re.getClosestElement(r, Ci) : null;
      b.forEach((q) => {
        let { keyframe: x, actionItems: L } = q;
        L.forEach((X) => {
          let { actionTypeId: $ } = X,
            { target: Q } = X.config;
          if (!Q) return;
          let ie = Q.boundaryMode ? T : null,
            te = IV(Q) + ls + $;
          if (((S[te] = GV(S[te], x, X)), !w[te])) {
            w[te] = !0;
            let { config: M } = X;
            Ni({
              config: M,
              event: g,
              eventTarget: r,
              elementRoot: ie,
              elementApi: Re,
            }).forEach((m) => {
              P.push({ element: m, key: te });
            });
          }
        });
      }),
        P.forEach(({ element: q, key: x }) => {
          let L = S[x],
            X = (0, Ct.default)(L, "[0].actionItems[0]", {}),
            { actionTypeId: $ } = X,
            Q = ds($) ? ps($)(q, X) : null,
            ie = fs({ element: q, actionItem: X, elementApi: Re }, Q);
          hs({
            store: e,
            element: q,
            eventId: n,
            actionListId: o,
            actionItem: X,
            destination: ie,
            continuous: !0,
            parameterId: R,
            actionGroups: L,
            smoothing: s,
            restingValue: c,
            pluginInstance: Q,
          });
        });
    }
    function GV(e = [], t, r) {
      let n = [...e],
        i;
      return (
        n.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
        i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
        n[i].actionItems.push(r),
        n
      );
    }
    function UV(e) {
      let { ixData: t } = e.getState(),
        { eventTypeMap: r } = t;
      Uy(e),
        (0, sn.default)(r, (i, o) => {
          let a = sV.default[o];
          if (!a) {
            console.warn(`IX2 event type not configured: ${o}`);
            return;
          }
          kV({ logic: a, store: e, events: i });
        });
      let { ixSession: n } = e.getState();
      n.eventListeners.length && VV(e);
    }
    var XV = ["resize", "orientationchange"];
    function VV(e) {
      let t = () => {
        Uy(e);
      };
      XV.forEach((r) => {
        window.addEventListener(r, t),
          e.dispatch((0, Se.eventListenerAdded)(window, [r, t]));
      }),
        t();
    }
    function Uy(e) {
      let { ixSession: t, ixData: r } = e.getState(),
        n = window.innerWidth;
      if (n !== t.viewportWidth) {
        let { mediaQueries: i } = r;
        e.dispatch((0, Se.viewportWidthChanged)({ width: n, mediaQueries: i }));
      }
    }
    var WV = (e, t) => (0, nV.default)((0, oV.default)(e, t), iV.default),
      BV = (e, t) => {
        (0, sn.default)(e, (r, n) => {
          r.forEach((i, o) => {
            let a = n + ls + o;
            t(i, n, a);
          });
        });
      },
      HV = (e) => {
        let t = { target: e.target, targets: e.targets };
        return Ni({ config: t, elementApi: Re });
      };
    function kV({ logic: e, store: t, events: r }) {
      jV(r);
      let { types: n, handler: i } = e,
        { ixData: o } = t.getState(),
        { actionLists: a } = o,
        s = WV(r, HV);
      if (!(0, rV.default)(s)) return;
      (0, sn.default)(s, (v, g) => {
        let _ = r[g],
          { action: w, id: S, mediaQueries: P = o.mediaQueryKeys } = _,
          { actionListId: b } = w.config;
        TV(P, o.mediaQueryKeys) || t.dispatch((0, Se.mediaQueriesDefined)()),
          w.actionTypeId === tt.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
            (Array.isArray(_.config) ? _.config : [_.config]).forEach((T) => {
              let { continuousParameterGroupId: q } = T,
                x = (0, Ct.default)(a, `${b}.continuousParameterGroups`, []),
                L = (0, tV.default)(x, ({ id: Q }) => Q === q),
                X = (T.smoothing || 0) / 100,
                $ = (T.restingState || 0) / 100;
              L &&
                v.forEach((Q, ie) => {
                  let te = S + ls + ie;
                  FV({
                    store: t,
                    eventStateKey: te,
                    eventTarget: Q,
                    eventId: S,
                    eventConfig: T,
                    actionListId: b,
                    parameterGroup: L,
                    smoothing: X,
                    restingValue: $,
                  });
                });
            }),
          (w.actionTypeId === tt.ActionTypeConsts.GENERAL_START_ACTION ||
            cs(w.actionTypeId)) &&
            Xy({ store: t, actionListId: b, eventId: S });
      });
      let c = (v) => {
          let { ixSession: g } = t.getState();
          BV(s, (_, w, S) => {
            let P = r[w],
              b = g.eventState[S],
              { action: R, mediaQueries: T = o.mediaQueryKeys } = P;
            if (!qi(T, g.mediaQueryKey)) return;
            let q = (x = {}) => {
              let L = i(
                {
                  store: t,
                  element: _,
                  event: P,
                  eventConfig: x,
                  nativeEvent: v,
                  eventStateKey: S,
                },
                b
              );
              OV(L, b) || t.dispatch((0, Se.eventStateChanged)(S, L));
            };
            R.actionTypeId === tt.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
              ? (Array.isArray(P.config) ? P.config : [P.config]).forEach(q)
              : q();
          });
        },
        f = (0, aV.default)(c, AV),
        E = ({ target: v = document, types: g, throttle: _ }) => {
          g.split(" ")
            .filter(Boolean)
            .forEach((w) => {
              let S = _ ? f : c;
              v.addEventListener(w, S),
                t.dispatch((0, Se.eventListenerAdded)(v, [w, S]));
            });
        };
      Array.isArray(n) ? n.forEach(E) : typeof n == "string" && E(e);
    }
    function jV(e) {
      if (!bV) return;
      let t = {},
        r = "";
      for (let n in e) {
        let { eventTypeId: i, target: o } = e[n],
          a = Re.getQuerySelector(o);
        t[a] ||
          ((i === tt.EventTypeConsts.MOUSE_CLICK ||
            i === tt.EventTypeConsts.MOUSE_SECOND_CLICK) &&
            ((t[a] = !0),
            (r += a + "{cursor: pointer;touch-action: manipulation;}")));
      }
      if (r) {
        let n = document.createElement("style");
        (n.textContent = r), document.body.appendChild(n);
      }
    }
    function Xy({ store: e, actionListId: t, eventId: r }) {
      let { ixData: n, ixSession: i } = e.getState(),
        { actionLists: o, events: a } = n,
        s = a[r],
        c = o[t];
      if (c && c.useFirstGroupAsInitialState) {
        let f = (0, Ct.default)(c, "actionItemGroups[0].actionItems", []),
          E = (0, Ct.default)(s, "mediaQueries", n.mediaQueryKeys);
        if (!qi(E, i.mediaQueryKey)) return;
        f.forEach((v) => {
          var g;
          let { config: _, actionTypeId: w } = v,
            S =
              (_ == null || (g = _.target) === null || g === void 0
                ? void 0
                : g.useEventTarget) === !0
                ? { target: s.target, targets: s.targets }
                : _,
            P = Ni({ config: S, event: s, elementApi: Re }),
            b = ds(w);
          P.forEach((R) => {
            let T = b ? ps(w)(R, v) : null;
            hs({
              destination: fs({ element: R, actionItem: v, elementApi: Re }, T),
              immediate: !0,
              store: e,
              element: R,
              eventId: r,
              actionItem: v,
              actionListId: t,
              pluginInstance: T,
            });
          });
        });
      }
    }
    function Vy({ store: e }) {
      let { ixInstances: t } = e.getState();
      (0, sn.default)(t, (r) => {
        if (!r.continuous) {
          let { actionListId: n, verbose: i } = r;
          gs(r, e),
            i &&
              e.dispatch(
                (0, Se.actionListPlaybackChanged)({
                  actionListId: n,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function vs({
      store: e,
      eventId: t,
      eventTarget: r,
      eventStateKey: n,
      actionListId: i,
    }) {
      let { ixInstances: o, ixSession: a } = e.getState(),
        s = a.hasBoundaryNodes && r ? Re.getClosestElement(r, Ci) : null;
      (0, sn.default)(o, (c) => {
        let f = (0, Ct.default)(c, "actionItem.config.target.boundaryMode"),
          E = n ? c.eventStateKey === n : !0;
        if (c.actionListId === i && c.eventId === t && E) {
          if (s && f && !Re.elementContains(s, c.element)) return;
          gs(c, e),
            c.verbose &&
              e.dispatch(
                (0, Se.actionListPlaybackChanged)({
                  actionListId: i,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function Es({
      store: e,
      eventId: t,
      eventTarget: r,
      eventStateKey: n,
      actionListId: i,
      groupIndex: o = 0,
      immediate: a,
      verbose: s,
    }) {
      var c;
      let { ixData: f, ixSession: E } = e.getState(),
        { events: v } = f,
        g = v[t] || {},
        { mediaQueries: _ = f.mediaQueryKeys } = g,
        w = (0, Ct.default)(f, `actionLists.${i}`, {}),
        { actionItemGroups: S, useFirstGroupAsInitialState: P } = w;
      if (!S || !S.length) return !1;
      o >= S.length && (0, Ct.default)(g, "config.loop") && (o = 0),
        o === 0 && P && o++;
      let R =
          (o === 0 || (o === 1 && P)) &&
          cs((c = g.action) === null || c === void 0 ? void 0 : c.actionTypeId)
            ? g.config.delay
            : void 0,
        T = (0, Ct.default)(S, [o, "actionItems"], []);
      if (!T.length || !qi(_, E.mediaQueryKey)) return !1;
      let q = E.hasBoundaryNodes && r ? Re.getClosestElement(r, Ci) : null,
        x = vV(T),
        L = !1;
      return (
        T.forEach((X, $) => {
          let { config: Q, actionTypeId: ie } = X,
            te = ds(ie),
            { target: M } = Q;
          if (!M) return;
          let m = M.boundaryMode ? q : null;
          Ni({
            config: Q,
            event: g,
            eventTarget: r,
            elementRoot: m,
            elementApi: Re,
          }).forEach((G, V) => {
            let ee = te ? ps(ie)(G, X) : null,
              ne = te ? SV(ie)(G, X) : null;
            L = !0;
            let D = x === $ && V === 0,
              j = EV({ element: G, actionItem: X }),
              Y = fs({ element: G, actionItem: X, elementApi: Re }, ee);
            hs({
              store: e,
              element: G,
              actionItem: X,
              eventId: t,
              eventTarget: r,
              eventStateKey: n,
              actionListId: i,
              groupIndex: o,
              isCarrier: D,
              computedStyle: j,
              destination: Y,
              immediate: a,
              verbose: s,
              pluginInstance: ee,
              pluginDuration: ne,
              instanceDelay: R,
            });
          });
        }),
        L
      );
    }
    function hs(e) {
      var t;
      let { store: r, computedStyle: n } = e,
        i = (0, eV.default)(e, uV),
        {
          element: o,
          actionItem: a,
          immediate: s,
          pluginInstance: c,
          continuous: f,
          restingValue: E,
          eventId: v,
        } = i,
        g = !f,
        _ = dV(),
        { ixElements: w, ixSession: S, ixData: P } = r.getState(),
        b = fV(w, o),
        { refState: R } = w[b] || {},
        T = Re.getRefType(o),
        q = S.reducedMotion && tt.ReducedMotionTypes[a.actionTypeId],
        x;
      if (q && f)
        switch (
          (t = P.events[v]) === null || t === void 0 ? void 0 : t.eventTypeId
        ) {
          case tt.EventTypeConsts.MOUSE_MOVE:
          case tt.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
            x = E;
            break;
          default:
            x = 0.5;
            break;
        }
      let L = hV(o, R, n, a, Re, c);
      if (
        (r.dispatch(
          (0, Se.instanceAdded)(
            (0, JX.default)(
              {
                instanceId: _,
                elementId: b,
                origin: L,
                refType: T,
                skipMotion: q,
                skipToValue: x,
              },
              i
            )
          )
        ),
        Wy(document.body, "ix2-animation-started", _),
        s)
      ) {
        KV(r, _);
        return;
      }
      kt({ store: r, select: ({ ixInstances: X }) => X[_], onChange: By }),
        g && r.dispatch((0, Se.instanceStarted)(_, S.tick));
    }
    function gs(e, t) {
      Wy(document.body, "ix2-animation-stopping", {
        instanceId: e.id,
        state: t.getState(),
      });
      let { elementId: r, actionItem: n } = e,
        { ixElements: i } = t.getState(),
        { ref: o, refType: a } = i[r] || {};
      a === My && mV(o, n, Re), t.dispatch((0, Se.instanceRemoved)(e.id));
    }
    function Wy(e, t, r) {
      let n = document.createEvent("CustomEvent");
      n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
    }
    function KV(e, t) {
      let { ixParameters: r } = e.getState();
      e.dispatch((0, Se.instanceStarted)(t, 0)),
        e.dispatch((0, Se.animationFrameChanged)(performance.now(), r));
      let { ixInstances: n } = e.getState();
      By(n[t], e);
    }
    function By(e, t) {
      let {
          active: r,
          continuous: n,
          complete: i,
          elementId: o,
          actionItem: a,
          actionTypeId: s,
          renderType: c,
          current: f,
          groupIndex: E,
          eventId: v,
          eventTarget: g,
          eventStateKey: _,
          actionListId: w,
          isCarrier: S,
          styleProp: P,
          verbose: b,
          pluginInstance: R,
        } = e,
        { ixData: T, ixSession: q } = t.getState(),
        { events: x } = T,
        L = x[v] || {},
        { mediaQueries: X = T.mediaQueryKeys } = L;
      if (qi(X, q.mediaQueryKey) && (n || r || i)) {
        if (f || (c === lV && i)) {
          t.dispatch((0, Se.elementStateChanged)(o, s, f, a));
          let { ixElements: $ } = t.getState(),
            { ref: Q, refType: ie, refState: te } = $[o] || {},
            M = te && te[s];
          switch (ie) {
            case My: {
              pV(Q, te, M, v, a, P, Re, c, R);
              break;
            }
          }
        }
        if (i) {
          if (S) {
            let $ = Es({
              store: t,
              eventId: v,
              eventTarget: g,
              eventStateKey: _,
              actionListId: w,
              groupIndex: E + 1,
              verbose: b,
            });
            b &&
              !$ &&
              t.dispatch(
                (0, Se.actionListPlaybackChanged)({
                  actionListId: w,
                  isPlaying: !1,
                })
              );
          }
          gs(e, t);
        }
      }
    }
  });
  var ky = u((mt) => {
    "use strict";
    var zV = Yt().default,
      YV = st().default;
    Object.defineProperty(mt, "__esModule", { value: !0 });
    mt.actions = void 0;
    mt.destroy = Hy;
    mt.init = eW;
    mt.setEnv = JV;
    mt.store = void 0;
    xl();
    var $V = Yo(),
      QV = YV(zh()),
      _s = us(),
      ZV = zV(gi());
    mt.actions = ZV;
    var Pi = (0, $V.createStore)(QV.default);
    mt.store = Pi;
    function JV(e) {
      e() && (0, _s.observeRequests)(Pi);
    }
    function eW(e) {
      Hy(), (0, _s.startEngine)({ store: Pi, rawData: e, allowEvents: !0 });
    }
    function Hy() {
      (0, _s.stopEngine)(Pi);
    }
  });
  var Yy = u((Jj, zy) => {
    var jy = He(),
      Ky = ky();
    Ky.setEnv(jy.env);
    jy.define(
      "ix2",
      (zy.exports = function () {
        return Ky;
      })
    );
  });
  var Qy = u((eK, $y) => {
    var Or = He();
    Or.define(
      "links",
      ($y.exports = function (e, t) {
        var r = {},
          n = e(window),
          i,
          o = Or.env(),
          a = window.location,
          s = document.createElement("a"),
          c = "w--current",
          f = /index\.(html|php)$/,
          E = /\/$/,
          v,
          g;
        r.ready = r.design = r.preview = _;
        function _() {
          (i = o && Or.env("design")),
            (g = Or.env("slug") || a.pathname || ""),
            Or.scroll.off(S),
            (v = []);
          for (var b = document.links, R = 0; R < b.length; ++R) w(b[R]);
          v.length && (Or.scroll.on(S), S());
        }
        function w(b) {
          var R =
            (i && b.getAttribute("href-disabled")) || b.getAttribute("href");
          if (((s.href = R), !(R.indexOf(":") >= 0))) {
            var T = e(b);
            if (
              s.hash.length > 1 &&
              s.host + s.pathname === a.host + a.pathname
            ) {
              if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
              var q = e(s.hash);
              q.length && v.push({ link: T, sec: q, active: !1 });
              return;
            }
            if (!(R === "#" || R === "")) {
              var x = s.href === a.href || R === g || (f.test(R) && E.test(g));
              P(T, c, x);
            }
          }
        }
        function S() {
          var b = n.scrollTop(),
            R = n.height();
          t.each(v, function (T) {
            var q = T.link,
              x = T.sec,
              L = x.offset().top,
              X = x.outerHeight(),
              $ = R * 0.5,
              Q = x.is(":visible") && L + X - $ >= b && L + $ <= b + R;
            T.active !== Q && ((T.active = Q), P(q, c, Q));
          });
        }
        function P(b, R, T) {
          var q = b.hasClass(R);
          (T && q) || (!T && !q) || (T ? b.addClass(R) : b.removeClass(R));
        }
        return r;
      })
    );
  });
  var Jy = u((tK, Zy) => {
    var Di = He();
    Di.define(
      "scroll",
      (Zy.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = w() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (M) {
              window.setTimeout(M, 15);
            },
          c = Di.env("editor") ? ".w-editor-body" : "body",
          f =
            "header, " +
            c +
            " > .header, " +
            c +
            " > .w-nav:not([data-no-scroll])",
          E = 'a[href="#"]',
          v = 'a[href*="#"]:not(.w-tab-link):not(' + E + ")",
          g = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          _ = document.createElement("style");
        _.appendChild(document.createTextNode(g));
        function w() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var S = /^#[a-zA-Z0-9][\w:.-]*$/;
        function P(M) {
          return S.test(M.hash) && M.host + M.pathname === r.host + r.pathname;
        }
        let b =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function R() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            b.matches
          );
        }
        function T(M, m) {
          var F;
          switch (m) {
            case "add":
              (F = M.attr("tabindex")),
                F
                  ? M.attr("data-wf-tabindex-swap", F)
                  : M.attr("tabindex", "-1");
              break;
            case "remove":
              (F = M.attr("data-wf-tabindex-swap")),
                F
                  ? (M.attr("tabindex", F),
                    M.removeAttr("data-wf-tabindex-swap"))
                  : M.removeAttr("tabindex");
              break;
          }
          M.toggleClass("wf-force-outline-none", m === "add");
        }
        function q(M) {
          var m = M.currentTarget;
          if (
            !(
              Di.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(m.className))
            )
          ) {
            var F = P(m) ? m.hash : "";
            if (F !== "") {
              var G = e(F);
              G.length &&
                (M && (M.preventDefault(), M.stopPropagation()),
                x(F, M),
                window.setTimeout(
                  function () {
                    L(G, function () {
                      T(G, "add"),
                        G.get(0).focus({ preventScroll: !0 }),
                        T(G, "remove");
                    });
                  },
                  M ? 0 : 300
                ));
            }
          }
        }
        function x(M) {
          if (
            r.hash !== M &&
            n &&
            n.pushState &&
            !(Di.env.chrome && r.protocol === "file:")
          ) {
            var m = n.state && n.state.hash;
            m !== M && n.pushState({ hash: M }, "", M);
          }
        }
        function L(M, m) {
          var F = i.scrollTop(),
            G = X(M);
          if (F !== G) {
            var V = $(M, F, G),
              ee = Date.now(),
              ne = function () {
                var D = Date.now() - ee;
                window.scroll(0, Q(F, G, D, V)),
                  D <= V ? s(ne) : typeof m == "function" && m();
              };
            s(ne);
          }
        }
        function X(M) {
          var m = e(f),
            F = m.css("position") === "fixed" ? m.outerHeight() : 0,
            G = M.offset().top - F;
          if (M.data("scroll") === "mid") {
            var V = i.height() - F,
              ee = M.outerHeight();
            ee < V && (G -= Math.round((V - ee) / 2));
          }
          return G;
        }
        function $(M, m, F) {
          if (R()) return 0;
          var G = 1;
          return (
            a.add(M).each(function (V, ee) {
              var ne = parseFloat(ee.getAttribute("data-scroll-time"));
              !isNaN(ne) && ne >= 0 && (G = ne);
            }),
            (472.143 * Math.log(Math.abs(m - F) + 125) - 2e3) * G
          );
        }
        function Q(M, m, F, G) {
          return F > G ? m : M + (m - M) * ie(F / G);
        }
        function ie(M) {
          return M < 0.5
            ? 4 * M * M * M
            : (M - 1) * (2 * M - 2) * (2 * M - 2) + 1;
        }
        function te() {
          var { WF_CLICK_EMPTY: M, WF_CLICK_SCROLL: m } = t;
          o.on(m, v, q),
            o.on(M, E, function (F) {
              F.preventDefault();
            }),
            document.head.insertBefore(_, document.head.firstChild);
        }
        return { ready: te };
      })
    );
  });
  var tm = u((rK, em) => {
    var tW = He();
    tW.define(
      "touch",
      (em.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new n(o) : null
            );
          });
        function n(o) {
          var a = !1,
            s = !1,
            c = Math.min(Math.round(window.innerWidth * 0.04), 40),
            f,
            E;
          o.addEventListener("touchstart", v, !1),
            o.addEventListener("touchmove", g, !1),
            o.addEventListener("touchend", _, !1),
            o.addEventListener("touchcancel", w, !1),
            o.addEventListener("mousedown", v, !1),
            o.addEventListener("mousemove", g, !1),
            o.addEventListener("mouseup", _, !1),
            o.addEventListener("mouseout", w, !1);
          function v(P) {
            var b = P.touches;
            (b && b.length > 1) ||
              ((a = !0),
              b ? ((s = !0), (f = b[0].clientX)) : (f = P.clientX),
              (E = f));
          }
          function g(P) {
            if (a) {
              if (s && P.type === "mousemove") {
                P.preventDefault(), P.stopPropagation();
                return;
              }
              var b = P.touches,
                R = b ? b[0].clientX : P.clientX,
                T = R - E;
              (E = R),
                Math.abs(T) > c &&
                  r &&
                  String(r()) === "" &&
                  (i("swipe", P, { direction: T > 0 ? "right" : "left" }), w());
            }
          }
          function _(P) {
            if (a && ((a = !1), s && P.type === "mouseup")) {
              P.preventDefault(), P.stopPropagation(), (s = !1);
              return;
            }
          }
          function w() {
            a = !1;
          }
          function S() {
            o.removeEventListener("touchstart", v, !1),
              o.removeEventListener("touchmove", g, !1),
              o.removeEventListener("touchend", _, !1),
              o.removeEventListener("touchcancel", w, !1),
              o.removeEventListener("mousedown", v, !1),
              o.removeEventListener("mousemove", g, !1),
              o.removeEventListener("mouseup", _, !1),
              o.removeEventListener("mouseout", w, !1),
              (o = null);
          }
          this.destroy = S;
        }
        function i(o, a, s) {
          var c = e.Event(o, { originalEvent: a });
          e(a.target).trigger(c, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var im = u((nK, nm) => {
    var jt = He(),
      rW = vn(),
      nt = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      rm = !0,
      nW = /^#[a-zA-Z0-9\-_]+$/;
    jt.define(
      "dropdown",
      (nm.exports = function (e, t) {
        var r = t.debounce,
          n = {},
          i = jt.env(),
          o = !1,
          a,
          s = jt.env.touch,
          c = ".w-dropdown",
          f = "w--open",
          E = rW.triggers,
          v = 900,
          g = "focusout" + c,
          _ = "keydown" + c,
          w = "mouseenter" + c,
          S = "mousemove" + c,
          P = "mouseleave" + c,
          b = (s ? "click" : "mouseup") + c,
          R = "w-close" + c,
          T = "setting" + c,
          q = e(document),
          x;
        (n.ready = L),
          (n.design = function () {
            o && m(), (o = !1), L();
          }),
          (n.preview = function () {
            (o = !0), L();
          });
        function L() {
          (a = i && jt.env("design")), (x = q.find(c)), x.each(X);
        }
        function X(p, k) {
          var z = e(k),
            C = e.data(k, c);
          C ||
            (C = e.data(k, c, {
              open: !1,
              el: z,
              config: {},
              selectedIdx: -1,
            })),
            (C.toggle = C.el.children(".w-dropdown-toggle")),
            (C.list = C.el.children(".w-dropdown-list")),
            (C.links = C.list.find("a:not(.w-dropdown .w-dropdown a)")),
            (C.complete = V(C)),
            (C.mouseLeave = ne(C)),
            (C.mouseUpOutside = G(C)),
            (C.mouseMoveOutside = D(C)),
            $(C);
          var se = C.toggle.attr("id"),
            Oe = C.list.attr("id");
          se || (se = "w-dropdown-toggle-" + p),
            Oe || (Oe = "w-dropdown-list-" + p),
            C.toggle.attr("id", se),
            C.toggle.attr("aria-controls", Oe),
            C.toggle.attr("aria-haspopup", "menu"),
            C.toggle.attr("aria-expanded", "false"),
            C.toggle
              .find(".w-icon-dropdown-toggle")
              .attr("aria-hidden", "true"),
            C.toggle.prop("tagName") !== "BUTTON" &&
              (C.toggle.attr("role", "button"),
              C.toggle.attr("tabindex") || C.toggle.attr("tabindex", "0")),
            C.list.attr("id", Oe),
            C.list.attr("aria-labelledby", se),
            C.links.each(function (d, W) {
              W.hasAttribute("tabindex") || W.setAttribute("tabindex", "0"),
                nW.test(W.hash) && W.addEventListener("click", M.bind(null, C));
            }),
            C.el.off(c),
            C.toggle.off(c),
            C.nav && C.nav.off(c);
          var fe = ie(C, rm);
          a && C.el.on(T, Q(C)),
            a ||
              (i && ((C.hovering = !1), M(C)),
              C.config.hover && C.toggle.on(w, ee(C)),
              C.el.on(R, fe),
              C.el.on(_, j(C)),
              C.el.on(g, U(C)),
              C.toggle.on(b, fe),
              C.toggle.on(_, B(C)),
              (C.nav = C.el.closest(".w-nav")),
              C.nav.on(R, fe));
        }
        function $(p) {
          var k = Number(p.el.css("z-index"));
          (p.manageZ = k === v || k === v + 1),
            (p.config = {
              hover: p.el.attr("data-hover") === "true" && !s,
              delay: p.el.attr("data-delay"),
            });
        }
        function Q(p) {
          return function (k, z) {
            (z = z || {}),
              $(p),
              z.open === !0 && te(p, !0),
              z.open === !1 && M(p, { immediate: !0 });
          };
        }
        function ie(p, k) {
          return r(function (z) {
            if (p.open || (z && z.type === "w-close"))
              return M(p, { forceClose: k });
            te(p);
          });
        }
        function te(p) {
          if (!p.open) {
            F(p),
              (p.open = !0),
              p.list.addClass(f),
              p.toggle.addClass(f),
              p.toggle.attr("aria-expanded", "true"),
              E.intro(0, p.el[0]),
              jt.redraw.up(),
              p.manageZ && p.el.css("z-index", v + 1);
            var k = jt.env("editor");
            a || q.on(b, p.mouseUpOutside),
              p.hovering && !k && p.el.on(P, p.mouseLeave),
              p.hovering && k && q.on(S, p.mouseMoveOutside),
              window.clearTimeout(p.delayId);
          }
        }
        function M(p, { immediate: k, forceClose: z } = {}) {
          if (p.open && !(p.config.hover && p.hovering && !z)) {
            p.toggle.attr("aria-expanded", "false"), (p.open = !1);
            var C = p.config;
            if (
              (E.outro(0, p.el[0]),
              q.off(b, p.mouseUpOutside),
              q.off(S, p.mouseMoveOutside),
              p.el.off(P, p.mouseLeave),
              window.clearTimeout(p.delayId),
              !C.delay || k)
            )
              return p.complete();
            p.delayId = window.setTimeout(p.complete, C.delay);
          }
        }
        function m() {
          q.find(c).each(function (p, k) {
            e(k).triggerHandler(R);
          });
        }
        function F(p) {
          var k = p.el[0];
          x.each(function (z, C) {
            var se = e(C);
            se.is(k) || se.has(k).length || se.triggerHandler(R);
          });
        }
        function G(p) {
          return (
            p.mouseUpOutside && q.off(b, p.mouseUpOutside),
            r(function (k) {
              if (p.open) {
                var z = e(k.target);
                if (!z.closest(".w-dropdown-toggle").length) {
                  var C = e.inArray(p.el[0], z.parents(c)) === -1,
                    se = jt.env("editor");
                  if (C) {
                    if (se) {
                      var Oe =
                          z.parents().length === 1 &&
                          z.parents("svg").length === 1,
                        fe = z.parents(
                          ".w-editor-bem-EditorHoverControls"
                        ).length;
                      if (Oe || fe) return;
                    }
                    M(p);
                  }
                }
              }
            })
          );
        }
        function V(p) {
          return function () {
            p.list.removeClass(f),
              p.toggle.removeClass(f),
              p.manageZ && p.el.css("z-index", "");
          };
        }
        function ee(p) {
          return function () {
            (p.hovering = !0), te(p);
          };
        }
        function ne(p) {
          return function () {
            (p.hovering = !1), p.links.is(":focus") || M(p);
          };
        }
        function D(p) {
          return r(function (k) {
            if (p.open) {
              var z = e(k.target),
                C = e.inArray(p.el[0], z.parents(c)) === -1;
              if (C) {
                var se = z.parents(".w-editor-bem-EditorHoverControls").length,
                  Oe = z.parents(".w-editor-bem-RTToolbar").length,
                  fe = e(".w-editor-bem-EditorOverlay"),
                  d =
                    fe.find(".w-editor-edit-outline").length ||
                    fe.find(".w-editor-bem-RTToolbar").length;
                if (se || Oe || d) return;
                (p.hovering = !1), M(p);
              }
            }
          });
        }
        function j(p) {
          return function (k) {
            if (!(a || !p.open))
              switch (
                ((p.selectedIdx = p.links.index(document.activeElement)),
                k.keyCode)
              ) {
                case nt.HOME:
                  return p.open
                    ? ((p.selectedIdx = 0), Y(p), k.preventDefault())
                    : void 0;
                case nt.END:
                  return p.open
                    ? ((p.selectedIdx = p.links.length - 1),
                      Y(p),
                      k.preventDefault())
                    : void 0;
                case nt.ESCAPE:
                  return M(p), p.toggle.focus(), k.stopPropagation();
                case nt.ARROW_RIGHT:
                case nt.ARROW_DOWN:
                  return (
                    (p.selectedIdx = Math.min(
                      p.links.length - 1,
                      p.selectedIdx + 1
                    )),
                    Y(p),
                    k.preventDefault()
                  );
                case nt.ARROW_LEFT:
                case nt.ARROW_UP:
                  return (
                    (p.selectedIdx = Math.max(-1, p.selectedIdx - 1)),
                    Y(p),
                    k.preventDefault()
                  );
              }
          };
        }
        function Y(p) {
          p.links[p.selectedIdx] && p.links[p.selectedIdx].focus();
        }
        function B(p) {
          var k = ie(p, rm);
          return function (z) {
            if (!a) {
              if (!p.open)
                switch (z.keyCode) {
                  case nt.ARROW_UP:
                  case nt.ARROW_DOWN:
                    return z.stopPropagation();
                }
              switch (z.keyCode) {
                case nt.SPACE:
                case nt.ENTER:
                  return k(), z.stopPropagation(), z.preventDefault();
              }
            }
          };
        }
        function U(p) {
          return r(function (k) {
            var { relatedTarget: z, target: C } = k,
              se = p.el[0],
              Oe = se.contains(z) || se.contains(C);
            return Oe || M(p), k.stopPropagation();
          });
        }
        return n;
      })
    );
  });
  var om = u((ys) => {
    "use strict";
    Object.defineProperty(ys, "__esModule", { value: !0 });
    ys.default = iW;
    function iW(e, t, r, n, i, o, a, s, c, f, E, v, g) {
      return function (_) {
        e(_);
        var w = _.form,
          S = {
            name: w.attr("data-name") || w.attr("name") || "Untitled Form",
            source: t.href,
            test: r.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
              w.html()
            ),
            trackingCookies: n(),
          };
        let P = w.attr("data-wf-flow");
        P && (S.wfFlow = P), i(_);
        var b = o(w, S.fields);
        if (b) return a(b);
        if (((S.fileUploads = s(w)), c(_), !f)) {
          E(_);
          return;
        }
        v.ajax({
          url: g,
          type: "POST",
          data: S,
          dataType: "json",
          crossDomain: !0,
        })
          .done(function (R) {
            R && R.code === 200 && (_.success = !0), E(_);
          })
          .fail(function () {
            E(_);
          });
      };
    }
  });
  var sm = u((oK, am) => {
    var Mi = He();
    Mi.define(
      "forms",
      (am.exports = function (e, t) {
        var r = {},
          n = e(document),
          i,
          o = window.location,
          a = window.XDomainRequest && !window.atob,
          s = ".w-form",
          c,
          f = /e(-)?mail/i,
          E = /^\S+@\S+$/,
          v = window.alert,
          g = Mi.env(),
          _,
          w,
          S,
          P = /list-manage[1-9]?.com/i,
          b = t.debounce(function () {
            v(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
            function () {
              R(), !g && !_ && q();
            };
        function R() {
          (c = e("html").attr("data-wf-site")),
            (w = "https://webflow.com/api/v1/form/" + c),
            a &&
              w.indexOf("https://webflow.com") >= 0 &&
              (w = w.replace(
                "https://webflow.com",
                "https://formdata.webflow.com"
              )),
            (S = `${w}/signFile`),
            (i = e(s + " form")),
            i.length && i.each(T);
        }
        function T(D, j) {
          var Y = e(j),
            B = e.data(j, s);
          B || (B = e.data(j, s, { form: Y })), x(B);
          var U = Y.closest("div.w-form");
          (B.done = U.find("> .w-form-done")),
            (B.fail = U.find("> .w-form-fail")),
            (B.fileUploads = U.find(".w-file-upload")),
            B.fileUploads.each(function (z) {
              V(z, B);
            });
          var p =
            B.form.attr("aria-label") || B.form.attr("data-name") || "Form";
          B.done.attr("aria-label") || B.form.attr("aria-label", p),
            B.done.attr("tabindex", "-1"),
            B.done.attr("role", "region"),
            B.done.attr("aria-label") ||
              B.done.attr("aria-label", p + " success"),
            B.fail.attr("tabindex", "-1"),
            B.fail.attr("role", "region"),
            B.fail.attr("aria-label") ||
              B.fail.attr("aria-label", p + " failure");
          var k = (B.action = Y.attr("action"));
          if (
            ((B.handler = null),
            (B.redirect = Y.attr("data-redirect")),
            P.test(k))
          ) {
            B.handler = m;
            return;
          }
          if (!k) {
            if (c) {
              B.handler = (() => {
                let z = om().default;
                return z(x, o, Mi, ie, G, X, v, $, L, c, F, e, w);
              })();
              return;
            }
            b();
          }
        }
        function q() {
          (_ = !0),
            n.on("submit", s + " form", function (z) {
              var C = e.data(this, s);
              C.handler && ((C.evt = z), C.handler(C));
            });
          let D = ".w-checkbox-input",
            j = ".w-radio-input",
            Y = "w--redirected-checked",
            B = "w--redirected-focus",
            U = "w--redirected-focus-visible",
            p = ":focus-visible, [data-wf-focus-visible]",
            k = [
              ["checkbox", D],
              ["radio", j],
            ];
          n.on(
            "change",
            s + ' form input[type="checkbox"]:not(' + D + ")",
            (z) => {
              e(z.target).siblings(D).toggleClass(Y);
            }
          ),
            n.on("change", s + ' form input[type="radio"]', (z) => {
              e(`input[name="${z.target.name}"]:not(${D})`).map((se, Oe) =>
                e(Oe).siblings(j).removeClass(Y)
              );
              let C = e(z.target);
              C.hasClass("w-radio-input") || C.siblings(j).addClass(Y);
            }),
            k.forEach(([z, C]) => {
              n.on(
                "focus",
                s + ` form input[type="${z}"]:not(` + C + ")",
                (se) => {
                  e(se.target).siblings(C).addClass(B),
                    e(se.target).filter(p).siblings(C).addClass(U);
                }
              ),
                n.on(
                  "blur",
                  s + ` form input[type="${z}"]:not(` + C + ")",
                  (se) => {
                    e(se.target).siblings(C).removeClass(`${B} ${U}`);
                  }
                );
            });
        }
        function x(D) {
          var j = (D.btn = D.form.find(':input[type="submit"]'));
          (D.wait = D.btn.attr("data-wait") || null),
            (D.success = !1),
            j.prop("disabled", !1),
            D.label && j.val(D.label);
        }
        function L(D) {
          var j = D.btn,
            Y = D.wait;
          j.prop("disabled", !0), Y && ((D.label = j.val()), j.val(Y));
        }
        function X(D, j) {
          var Y = null;
          return (
            (j = j || {}),
            D.find(':input:not([type="submit"]):not([type="file"])').each(
              function (B, U) {
                var p = e(U),
                  k = p.attr("type"),
                  z =
                    p.attr("data-name") || p.attr("name") || "Field " + (B + 1),
                  C = p.val();
                if (k === "checkbox") C = p.is(":checked");
                else if (k === "radio") {
                  if (j[z] === null || typeof j[z] == "string") return;
                  C =
                    D.find(
                      'input[name="' + p.attr("name") + '"]:checked'
                    ).val() || null;
                }
                typeof C == "string" && (C = e.trim(C)),
                  (j[z] = C),
                  (Y = Y || te(p, k, z, C));
              }
            ),
            Y
          );
        }
        function $(D) {
          var j = {};
          return (
            D.find(':input[type="file"]').each(function (Y, B) {
              var U = e(B),
                p = U.attr("data-name") || U.attr("name") || "File " + (Y + 1),
                k = U.attr("data-value");
              typeof k == "string" && (k = e.trim(k)), (j[p] = k);
            }),
            j
          );
        }
        let Q = { _mkto_trk: "marketo" };
        function ie() {
          return document.cookie.split("; ").reduce(function (j, Y) {
            let B = Y.split("="),
              U = B[0];
            if (U in Q) {
              let p = Q[U],
                k = B.slice(1).join("=");
              j[p] = k;
            }
            return j;
          }, {});
        }
        function te(D, j, Y, B) {
          var U = null;
          return (
            j === "password"
              ? (U = "Passwords cannot be submitted.")
              : D.attr("required")
              ? B
                ? f.test(D.attr("type")) &&
                  (E.test(B) ||
                    (U = "Please enter a valid email address for: " + Y))
                : (U = "Please fill out the required field: " + Y)
              : Y === "g-recaptcha-response" &&
                !B &&
                (U = "Please confirm you\u2019re not a robot."),
            U
          );
        }
        function M(D) {
          G(D), F(D);
        }
        function m(D) {
          x(D);
          var j = D.form,
            Y = {};
          if (/^https/.test(o.href) && !/^https/.test(D.action)) {
            j.attr("method", "post");
            return;
          }
          G(D);
          var B = X(j, Y);
          if (B) return v(B);
          L(D);
          var U;
          t.each(Y, function (C, se) {
            f.test(se) && (Y.EMAIL = C),
              /^((full[ _-]?)?name)$/i.test(se) && (U = C),
              /^(first[ _-]?name)$/i.test(se) && (Y.FNAME = C),
              /^(last[ _-]?name)$/i.test(se) && (Y.LNAME = C);
          }),
            U &&
              !Y.FNAME &&
              ((U = U.split(" ")),
              (Y.FNAME = U[0]),
              (Y.LNAME = Y.LNAME || U[1]));
          var p = D.action.replace("/post?", "/post-json?") + "&c=?",
            k = p.indexOf("u=") + 2;
          k = p.substring(k, p.indexOf("&", k));
          var z = p.indexOf("id=") + 3;
          (z = p.substring(z, p.indexOf("&", z))),
            (Y["b_" + k + "_" + z] = ""),
            e
              .ajax({ url: p, data: Y, dataType: "jsonp" })
              .done(function (C) {
                (D.success = C.result === "success" || /already/.test(C.msg)),
                  D.success || console.info("MailChimp error: " + C.msg),
                  F(D);
              })
              .fail(function () {
                F(D);
              });
        }
        function F(D) {
          var j = D.form,
            Y = D.redirect,
            B = D.success;
          if (B && Y) {
            Mi.location(Y);
            return;
          }
          D.done.toggle(B),
            D.fail.toggle(!B),
            B ? D.done.focus() : D.fail.focus(),
            j.toggle(!B),
            x(D);
        }
        function G(D) {
          D.evt && D.evt.preventDefault(), (D.evt = null);
        }
        function V(D, j) {
          if (!j.fileUploads || !j.fileUploads[D]) return;
          var Y,
            B = e(j.fileUploads[D]),
            U = B.find("> .w-file-upload-default"),
            p = B.find("> .w-file-upload-uploading"),
            k = B.find("> .w-file-upload-success"),
            z = B.find("> .w-file-upload-error"),
            C = U.find(".w-file-upload-input"),
            se = U.find(".w-file-upload-label"),
            Oe = se.children(),
            fe = z.find(".w-file-upload-error-msg"),
            d = k.find(".w-file-upload-file"),
            W = k.find(".w-file-remove-link"),
            Z = d.find(".w-file-upload-file-name"),
            K = fe.attr("data-w-size-error"),
            _e = fe.attr("data-w-type-error"),
            xt = fe.attr("data-w-generic-error");
          if (
            (g ||
              se.on("click keydown", function (y) {
                (y.type === "keydown" && y.which !== 13 && y.which !== 32) ||
                  (y.preventDefault(), C.click());
              }),
            se.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            W.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            g)
          )
            C.on("click", function (y) {
              y.preventDefault();
            }),
              se.on("click", function (y) {
                y.preventDefault();
              }),
              Oe.on("click", function (y) {
                y.preventDefault();
              });
          else {
            W.on("click keydown", function (y) {
              if (y.type === "keydown") {
                if (y.which !== 13 && y.which !== 32) return;
                y.preventDefault();
              }
              C.removeAttr("data-value"),
                C.val(""),
                Z.html(""),
                U.toggle(!0),
                k.toggle(!1),
                se.focus();
            }),
              C.on("change", function (y) {
                (Y = y.target && y.target.files && y.target.files[0]),
                  Y &&
                    (U.toggle(!1),
                    z.toggle(!1),
                    p.toggle(!0),
                    p.focus(),
                    Z.text(Y.name),
                    O() || L(j),
                    (j.fileUploads[D].uploading = !0),
                    ee(Y, h));
              });
            var Et = se.outerHeight();
            C.height(Et), C.width(1);
          }
          function l(y) {
            var A = y.responseJSON && y.responseJSON.msg,
              J = xt;
            typeof A == "string" && A.indexOf("InvalidFileTypeError") === 0
              ? (J = _e)
              : typeof A == "string" &&
                A.indexOf("MaxFileSizeError") === 0 &&
                (J = K),
              fe.text(J),
              C.removeAttr("data-value"),
              C.val(""),
              p.toggle(!1),
              U.toggle(!0),
              z.toggle(!0),
              z.focus(),
              (j.fileUploads[D].uploading = !1),
              O() || x(j);
          }
          function h(y, A) {
            if (y) return l(y);
            var J = A.fileName,
              oe = A.postData,
              he = A.fileId,
              H = A.s3Url;
            C.attr("data-value", he), ne(H, oe, Y, J, I);
          }
          function I(y) {
            if (y) return l(y);
            p.toggle(!1),
              k.css("display", "inline-block"),
              k.focus(),
              (j.fileUploads[D].uploading = !1),
              O() || x(j);
          }
          function O() {
            var y = (j.fileUploads && j.fileUploads.toArray()) || [];
            return y.some(function (A) {
              return A.uploading;
            });
          }
        }
        function ee(D, j) {
          var Y = new URLSearchParams({ name: D.name, size: D.size });
          e.ajax({ type: "GET", url: `${S}?${Y}`, crossDomain: !0 })
            .done(function (B) {
              j(null, B);
            })
            .fail(function (B) {
              j(B);
            });
        }
        function ne(D, j, Y, B, U) {
          var p = new FormData();
          for (var k in j) p.append(k, j[k]);
          p.append("file", Y, B),
            e
              .ajax({
                type: "POST",
                url: D,
                data: p,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                U(null);
              })
              .fail(function (z) {
                U(z);
              });
        }
        return r;
      })
    );
  });
  var cm = u((aK, um) => {
    var qt = He(),
      oW = vn(),
      Pe = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    qt.define(
      "navbar",
      (um.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(window),
          o = e(document),
          a = t.debounce,
          s,
          c,
          f,
          E,
          v = qt.env(),
          g = '<div class="w-nav-overlay" data-wf-ignore />',
          _ = ".w-nav",
          w = "w--open",
          S = "w--nav-dropdown-open",
          P = "w--nav-dropdown-toggle-open",
          b = "w--nav-dropdown-list-open",
          R = "w--nav-link-open",
          T = oW.triggers,
          q = e();
        (r.ready = r.design = r.preview = x),
          (r.destroy = function () {
            (q = e()), L(), c && c.length && c.each(ie);
          });
        function x() {
          (f = v && qt.env("design")),
            (E = qt.env("editor")),
            (s = e(document.body)),
            (c = o.find(_)),
            c.length && (c.each(Q), L(), X());
        }
        function L() {
          qt.resize.off($);
        }
        function X() {
          qt.resize.on($);
        }
        function $() {
          c.each(U);
        }
        function Q(d, W) {
          var Z = e(W),
            K = e.data(W, _);
          K ||
            (K = e.data(W, _, {
              open: !1,
              el: Z,
              config: {},
              selectedIdx: -1,
            })),
            (K.menu = Z.find(".w-nav-menu")),
            (K.links = K.menu.find(".w-nav-link")),
            (K.dropdowns = K.menu.find(".w-dropdown")),
            (K.dropdownToggle = K.menu.find(".w-dropdown-toggle")),
            (K.dropdownList = K.menu.find(".w-dropdown-list")),
            (K.button = Z.find(".w-nav-button")),
            (K.container = Z.find(".w-container")),
            (K.overlayContainerId = "w-nav-overlay-" + d),
            (K.outside = Y(K));
          var _e = Z.find(".w-nav-brand");
          _e &&
            _e.attr("href") === "/" &&
            _e.attr("aria-label") == null &&
            _e.attr("aria-label", "home"),
            K.button.attr("style", "-webkit-user-select: text;"),
            K.button.attr("aria-label") == null &&
              K.button.attr("aria-label", "menu"),
            K.button.attr("role", "button"),
            K.button.attr("tabindex", "0"),
            K.button.attr("aria-controls", K.overlayContainerId),
            K.button.attr("aria-haspopup", "menu"),
            K.button.attr("aria-expanded", "false"),
            K.el.off(_),
            K.button.off(_),
            K.menu.off(_),
            m(K),
            f
              ? (te(K), K.el.on("setting" + _, F(K)))
              : (M(K),
                K.button.on("click" + _, D(K)),
                K.menu.on("click" + _, "a", j(K)),
                K.button.on("keydown" + _, G(K)),
                K.el.on("keydown" + _, V(K))),
            U(d, W);
        }
        function ie(d, W) {
          var Z = e.data(W, _);
          Z && (te(Z), e.removeData(W, _));
        }
        function te(d) {
          d.overlay && (fe(d, !0), d.overlay.remove(), (d.overlay = null));
        }
        function M(d) {
          d.overlay ||
            ((d.overlay = e(g).appendTo(d.el)),
            d.overlay.attr("id", d.overlayContainerId),
            (d.parent = d.menu.parent()),
            fe(d, !0));
        }
        function m(d) {
          var W = {},
            Z = d.config || {},
            K = (W.animation = d.el.attr("data-animation") || "default");
          (W.animOver = /^over/.test(K)),
            (W.animDirect = /left$/.test(K) ? -1 : 1),
            Z.animation !== K && d.open && t.defer(ne, d),
            (W.easing = d.el.attr("data-easing") || "ease"),
            (W.easing2 = d.el.attr("data-easing2") || "ease");
          var _e = d.el.attr("data-duration");
          (W.duration = _e != null ? Number(_e) : 400),
            (W.docHeight = d.el.attr("data-doc-height")),
            (d.config = W);
        }
        function F(d) {
          return function (W, Z) {
            Z = Z || {};
            var K = i.width();
            m(d),
              Z.open === !0 && se(d, !0),
              Z.open === !1 && fe(d, !0),
              d.open &&
                t.defer(function () {
                  K !== i.width() && ne(d);
                });
          };
        }
        function G(d) {
          return function (W) {
            switch (W.keyCode) {
              case Pe.SPACE:
              case Pe.ENTER:
                return D(d)(), W.preventDefault(), W.stopPropagation();
              case Pe.ESCAPE:
                return fe(d), W.preventDefault(), W.stopPropagation();
              case Pe.ARROW_RIGHT:
              case Pe.ARROW_DOWN:
              case Pe.HOME:
              case Pe.END:
                return d.open
                  ? (W.keyCode === Pe.END
                      ? (d.selectedIdx = d.links.length - 1)
                      : (d.selectedIdx = 0),
                    ee(d),
                    W.preventDefault(),
                    W.stopPropagation())
                  : (W.preventDefault(), W.stopPropagation());
            }
          };
        }
        function V(d) {
          return function (W) {
            if (d.open)
              switch (
                ((d.selectedIdx = d.links.index(document.activeElement)),
                W.keyCode)
              ) {
                case Pe.HOME:
                case Pe.END:
                  return (
                    W.keyCode === Pe.END
                      ? (d.selectedIdx = d.links.length - 1)
                      : (d.selectedIdx = 0),
                    ee(d),
                    W.preventDefault(),
                    W.stopPropagation()
                  );
                case Pe.ESCAPE:
                  return (
                    fe(d),
                    d.button.focus(),
                    W.preventDefault(),
                    W.stopPropagation()
                  );
                case Pe.ARROW_LEFT:
                case Pe.ARROW_UP:
                  return (
                    (d.selectedIdx = Math.max(-1, d.selectedIdx - 1)),
                    ee(d),
                    W.preventDefault(),
                    W.stopPropagation()
                  );
                case Pe.ARROW_RIGHT:
                case Pe.ARROW_DOWN:
                  return (
                    (d.selectedIdx = Math.min(
                      d.links.length - 1,
                      d.selectedIdx + 1
                    )),
                    ee(d),
                    W.preventDefault(),
                    W.stopPropagation()
                  );
              }
          };
        }
        function ee(d) {
          if (d.links[d.selectedIdx]) {
            var W = d.links[d.selectedIdx];
            W.focus(), j(W);
          }
        }
        function ne(d) {
          d.open && (fe(d, !0), se(d, !0));
        }
        function D(d) {
          return a(function () {
            d.open ? fe(d) : se(d);
          });
        }
        function j(d) {
          return function (W) {
            var Z = e(this),
              K = Z.attr("href");
            if (!qt.validClick(W.currentTarget)) {
              W.preventDefault();
              return;
            }
            K && K.indexOf("#") === 0 && d.open && fe(d);
          };
        }
        function Y(d) {
          return (
            d.outside && o.off("click" + _, d.outside),
            function (W) {
              var Z = e(W.target);
              (E && Z.closest(".w-editor-bem-EditorOverlay").length) || B(d, Z);
            }
          );
        }
        var B = a(function (d, W) {
          if (d.open) {
            var Z = W.closest(".w-nav-menu");
            d.menu.is(Z) || fe(d);
          }
        });
        function U(d, W) {
          var Z = e.data(W, _),
            K = (Z.collapsed = Z.button.css("display") !== "none");
          if ((Z.open && !K && !f && fe(Z, !0), Z.container.length)) {
            var _e = k(Z);
            Z.links.each(_e), Z.dropdowns.each(_e);
          }
          Z.open && Oe(Z);
        }
        var p = "max-width";
        function k(d) {
          var W = d.container.css(p);
          return (
            W === "none" && (W = ""),
            function (Z, K) {
              (K = e(K)), K.css(p, ""), K.css(p) === "none" && K.css(p, W);
            }
          );
        }
        function z(d, W) {
          W.setAttribute("data-nav-menu-open", "");
        }
        function C(d, W) {
          W.removeAttribute("data-nav-menu-open");
        }
        function se(d, W) {
          if (d.open) return;
          (d.open = !0),
            d.menu.each(z),
            d.links.addClass(R),
            d.dropdowns.addClass(S),
            d.dropdownToggle.addClass(P),
            d.dropdownList.addClass(b),
            d.button.addClass(w);
          var Z = d.config,
            K = Z.animation;
          (K === "none" || !n.support.transform || Z.duration <= 0) && (W = !0);
          var _e = Oe(d),
            xt = d.menu.outerHeight(!0),
            Et = d.menu.outerWidth(!0),
            l = d.el.height(),
            h = d.el[0];
          if (
            (U(0, h),
            T.intro(0, h),
            qt.redraw.up(),
            f || o.on("click" + _, d.outside),
            W)
          ) {
            y();
            return;
          }
          var I = "transform " + Z.duration + "ms " + Z.easing;
          if (
            (d.overlay &&
              ((q = d.menu.prev()), d.overlay.show().append(d.menu)),
            Z.animOver)
          ) {
            n(d.menu)
              .add(I)
              .set({ x: Z.animDirect * Et, height: _e })
              .start({ x: 0 })
              .then(y),
              d.overlay && d.overlay.width(Et);
            return;
          }
          var O = l + xt;
          n(d.menu).add(I).set({ y: -O }).start({ y: 0 }).then(y);
          function y() {
            d.button.attr("aria-expanded", "true");
          }
        }
        function Oe(d) {
          var W = d.config,
            Z = W.docHeight ? o.height() : s.height();
          return (
            W.animOver
              ? d.menu.height(Z)
              : d.el.css("position") !== "fixed" && (Z -= d.el.outerHeight(!0)),
            d.overlay && d.overlay.height(Z),
            Z
          );
        }
        function fe(d, W) {
          if (!d.open) return;
          (d.open = !1), d.button.removeClass(w);
          var Z = d.config;
          if (
            ((Z.animation === "none" ||
              !n.support.transform ||
              Z.duration <= 0) &&
              (W = !0),
            T.outro(0, d.el[0]),
            o.off("click" + _, d.outside),
            W)
          ) {
            n(d.menu).stop(), h();
            return;
          }
          var K = "transform " + Z.duration + "ms " + Z.easing2,
            _e = d.menu.outerHeight(!0),
            xt = d.menu.outerWidth(!0),
            Et = d.el.height();
          if (Z.animOver) {
            n(d.menu)
              .add(K)
              .start({ x: xt * Z.animDirect })
              .then(h);
            return;
          }
          var l = Et + _e;
          n(d.menu).add(K).start({ y: -l }).then(h);
          function h() {
            d.menu.height(""),
              n(d.menu).set({ x: 0, y: 0 }),
              d.menu.each(C),
              d.links.removeClass(R),
              d.dropdowns.removeClass(S),
              d.dropdownToggle.removeClass(P),
              d.dropdownList.removeClass(b),
              d.overlay &&
                d.overlay.children().length &&
                (q.length ? d.menu.insertAfter(q) : d.menu.prependTo(d.parent),
                d.overlay.attr("style", "").hide()),
              d.el.triggerHandler("w-close"),
              d.button.attr("aria-expanded", "false");
          }
        }
        return r;
      })
    );
  });
  xs();
  Ps();
  Ms();
  Us();
  vn();
  Yy();
  Qy();
  Jy();
  tm();
  im();
  sm();
  cm();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    "e-1898": {
      id: "e-1898",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1899",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641a0c8100e68d78638b96cd|2078a685-0c58-ebe5-b8d7-ebd2a748e8ad",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641a0c8100e68d78638b96cd|2078a685-0c58-ebe5-b8d7-ebd2a748e8ad",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1637817079278,
    },
    "e-1900": {
      id: "e-1900",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1901",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641a0c8100e68dbe9d8b96ce|619efe17469a19c94a600b1500000000000b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641a0c8100e68dbe9d8b96ce|619efe17469a19c94a600b1500000000000b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1637817559996,
    },
    "e-2237": {
      id: "e-2237",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2238",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641a476ba68930e58a6db5cd|0aea8ef5-d06e-9a07-8e1e-5db0bbf73d20",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641a476ba68930e58a6db5cd|0aea8ef5-d06e-9a07-8e1e-5db0bbf73d20",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679443839824,
    },
    "e-2238": {
      id: "e-2238",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2237",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641a476ba68930e58a6db5cd|0aea8ef5-d06e-9a07-8e1e-5db0bbf73d20",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641a476ba68930e58a6db5cd|0aea8ef5-d06e-9a07-8e1e-5db0bbf73d20",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679443839824,
    },
    "e-2265": {
      id: "e-2265",
      name: "",
      animationType: "custom",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-105",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2266",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "9cc462d8-bb30-3faf-01e2-89a59eb05ad4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "9cc462d8-bb30-3faf-01e2-89a59eb05ad4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679601734151,
    },
    "e-2266": {
      id: "e-2266",
      name: "",
      animationType: "custom",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-106",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2265",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "9cc462d8-bb30-3faf-01e2-89a59eb05ad4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "9cc462d8-bb30-3faf-01e2-89a59eb05ad4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679601734165,
    },
    "e-2267": {
      id: "e-2267",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-107",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2268",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641dfaaf6b0b65edb3f2a3ca|807e33a4-c09c-432d-5e47-fc5ebd5b6002",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641dfaaf6b0b65edb3f2a3ca|807e33a4-c09c-432d-5e47-fc5ebd5b6002",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679690911571,
    },
    "e-2268": {
      id: "e-2268",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-108",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2267",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641dfaaf6b0b65edb3f2a3ca|807e33a4-c09c-432d-5e47-fc5ebd5b6002",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641dfaaf6b0b65edb3f2a3ca|807e33a4-c09c-432d-5e47-fc5ebd5b6002",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679690911581,
    },
    "e-2269": {
      id: "e-2269",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2270",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "8fe252f2-353c-7d1f-0ce1-3eb6fca4ca27",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "8fe252f2-353c-7d1f-0ce1-3eb6fca4ca27",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679696140446,
    },
    "e-2270": {
      id: "e-2270",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2269",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "8fe252f2-353c-7d1f-0ce1-3eb6fca4ca27",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "8fe252f2-353c-7d1f-0ce1-3eb6fca4ca27",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679696140459,
    },
    "e-2271": {
      id: "e-2271",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2272",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "8fe252f2-353c-7d1f-0ce1-3eb6fca4ca2d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "8fe252f2-353c-7d1f-0ce1-3eb6fca4ca2d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679696275234,
    },
    "e-2272": {
      id: "e-2272",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2271",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "8fe252f2-353c-7d1f-0ce1-3eb6fca4ca2d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "8fe252f2-353c-7d1f-0ce1-3eb6fca4ca2d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679696275234,
    },
    "e-2273": {
      id: "e-2273",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-109",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2274",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641a0c8100e68d073d8b96c5|fb514822-0e5c-02dc-94d8-e2e50efe10fb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641a0c8100e68d073d8b96c5|fb514822-0e5c-02dc-94d8-e2e50efe10fb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679937297878,
    },
    "e-2274": {
      id: "e-2274",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-110",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2273",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641a0c8100e68d073d8b96c5|fb514822-0e5c-02dc-94d8-e2e50efe10fb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641a0c8100e68d073d8b96c5|fb514822-0e5c-02dc-94d8-e2e50efe10fb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679937297894,
    },
    "e-2275": {
      id: "e-2275",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-109",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2276",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641a0c8100e68d073d8b96c5|d35e68b7-ebbf-f6e8-59d5-aa67646aac86",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641a0c8100e68d073d8b96c5|d35e68b7-ebbf-f6e8-59d5-aa67646aac86",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679937492341,
    },
    "e-2276": {
      id: "e-2276",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-110",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2275",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641a0c8100e68d073d8b96c5|d35e68b7-ebbf-f6e8-59d5-aa67646aac86",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641a0c8100e68d073d8b96c5|d35e68b7-ebbf-f6e8-59d5-aa67646aac86",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679937492341,
    },
    "e-2277": {
      id: "e-2277",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-109",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2278",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641a0c8100e68d073d8b96c5|09a3907e-db4a-6ca5-b943-a8a4f5f0e60e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641a0c8100e68d073d8b96c5|09a3907e-db4a-6ca5-b943-a8a4f5f0e60e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679937492631,
    },
    "e-2278": {
      id: "e-2278",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-110",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2277",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641a0c8100e68d073d8b96c5|09a3907e-db4a-6ca5-b943-a8a4f5f0e60e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641a0c8100e68d073d8b96c5|09a3907e-db4a-6ca5-b943-a8a4f5f0e60e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679937492631,
    },
    "e-2279": {
      id: "e-2279",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2280",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641a0c8100e68dbe9d8b96ce|52abc31e-0d60-0d59-4bbb-4b01e7c648d0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641a0c8100e68dbe9d8b96ce|52abc31e-0d60-0d59-4bbb-4b01e7c648d0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679945979272,
    },
    "e-2280": {
      id: "e-2280",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2279",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641a0c8100e68dbe9d8b96ce|52abc31e-0d60-0d59-4bbb-4b01e7c648d0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641a0c8100e68dbe9d8b96ce|52abc31e-0d60-0d59-4bbb-4b01e7c648d0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679945979272,
    },
    "e-2282": {
      id: "e-2282",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-113",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2281",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641a0c8100e68d073d8b96c5",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641a0c8100e68d073d8b96c5",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679959322032,
    },
    "e-2284": {
      id: "e-2284",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-113",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2283",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641a476ba68930e58a6db5cd",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641a476ba68930e58a6db5cd",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679959560779,
    },
    "e-2286": {
      id: "e-2286",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-113",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2285",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ce2213f6a1c56b3b18136",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ce2213f6a1c56b3b18136",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679959580538,
    },
    "e-2288": {
      id: "e-2288",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-113",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2287",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641dfaaf6b0b65edb3f2a3ca",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641dfaaf6b0b65edb3f2a3ca",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679959602585,
    },
    "e-2290": {
      id: "e-2290",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-113",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2289",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6421d9dd853921762c8a3f51",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6421d9dd853921762c8a3f51",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679959626891,
    },
    "e-2292": {
      id: "e-2292",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-113",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2291",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6421f853ae623d00992683a6",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6421f853ae623d00992683a6",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679959643572,
    },
    "e-2294": {
      id: "e-2294",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-113",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2293",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641a0c8100e68dbe9d8b96ce",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641a0c8100e68dbe9d8b96ce",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679959663106,
    },
    "e-2296": {
      id: "e-2296",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-113",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2295",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641a0c8100e68d78638b96cd",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641a0c8100e68d78638b96cd",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679959698960,
    },
    "e-2298": {
      id: "e-2298",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-113",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2297",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641a0c8100e68d16598b9715",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641a0c8100e68d16598b9715",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679959714803,
    },
    "e-2311": {
      id: "e-2311",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2312",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641a0c8100e68d073d8b96c5|1aef72c2-116c-c314-e494-12c842340a8e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641a0c8100e68d073d8b96c5|1aef72c2-116c-c314-e494-12c842340a8e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1680019513983,
    },
    "e-2313": {
      id: "e-2313",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2314",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641a0c8100e68d073d8b96c5|8f1442fd-5729-fb94-cef7-96c4c4b9f370",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641a0c8100e68d073d8b96c5|8f1442fd-5729-fb94-cef7-96c4c4b9f370",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1680019525629,
    },
    "e-2315": {
      id: "e-2315",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2316",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641a0c8100e68d073d8b96c5|10e46652-5b20-ff4a-1583-24819cbe6c9e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641a0c8100e68d073d8b96c5|10e46652-5b20-ff4a-1583-24819cbe6c9e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1680019534190,
    },
    "e-2317": {
      id: "e-2317",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2318",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641a0c8100e68d073d8b96c5|eaa9b713-2916-3c9d-d7ef-5e38f5e44a70",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641a0c8100e68d073d8b96c5|eaa9b713-2916-3c9d-d7ef-5e38f5e44a70",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1680019557702,
    },
    "e-2319": {
      id: "e-2319",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2320",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641a0c8100e68d073d8b96c5|d6462bc4-1377-95de-75e5-1ac7ec9ba3ff",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641a0c8100e68d073d8b96c5|d6462bc4-1377-95de-75e5-1ac7ec9ba3ff",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1680019573887,
    },
    "e-2321": {
      id: "e-2321",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-114", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641a0c8100e68d073d8b96c5|d6462bc4-1377-95de-75e5-1ac7ec9ba3ff",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641a0c8100e68d073d8b96c5|d6462bc4-1377-95de-75e5-1ac7ec9ba3ff",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-114-p",
          smoothing: 99,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1680019609438,
    },
    "e-2322": {
      id: "e-2322",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-26",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2323",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641a0c8100e68d073d8b96c5|097d2f67-5d70-0a7b-4366-b5f9f6faf936",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641a0c8100e68d073d8b96c5|097d2f67-5d70-0a7b-4366-b5f9f6faf936",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1680019769481,
    },
    "e-2324": {
      id: "e-2324",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-26",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2325",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641a0c8100e68d073d8b96c5|273c71fd-8738-7eb5-818f-10ca2c438a7f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641a0c8100e68d073d8b96c5|273c71fd-8738-7eb5-818f-10ca2c438a7f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1680019787691,
    },
    "e-2326": {
      id: "e-2326",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-26",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2327",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641a0c8100e68d073d8b96c5|9fbe39a0-31e8-3965-e6a5-80916ac83492",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641a0c8100e68d073d8b96c5|9fbe39a0-31e8-3965-e6a5-80916ac83492",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1680019802001,
    },
    "e-2328": {
      id: "e-2328",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-26",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2329",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641a0c8100e68d073d8b96c5|d5938d09-7ae0-a0d6-5077-72ee295afa19",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641a0c8100e68d073d8b96c5|d5938d09-7ae0-a0d6-5077-72ee295afa19",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1680019826850,
    },
    "e-2330": {
      id: "e-2330",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2331",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641a0c8100e68d073d8b96c5|b8af0d7b-4820-8ea5-2701-a4a4169f1aa6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641a0c8100e68d073d8b96c5|b8af0d7b-4820-8ea5-2701-a4a4169f1aa6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1680019840569,
    },
    "e-2332": {
      id: "e-2332",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-26",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2333",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641a0c8100e68d073d8b96c5|bd52d540-cba1-2e5e-9871-7819522ff1fb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641a0c8100e68d073d8b96c5|bd52d540-cba1-2e5e-9871-7819522ff1fb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1680019858493,
    },
    "e-2334": {
      id: "e-2334",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2335",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641a0c8100e68d073d8b96c5|15618bb2-96c1-bd7c-3968-e53a5d4560e7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641a0c8100e68d073d8b96c5|15618bb2-96c1-bd7c-3968-e53a5d4560e7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1680019873554,
    },
    "e-2336": {
      id: "e-2336",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-26",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2337",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641a0c8100e68d073d8b96c5|f8b6bee1-ca81-920b-5257-187c563b5b8d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641a0c8100e68d073d8b96c5|f8b6bee1-ca81-920b-5257-187c563b5b8d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1680019890754,
    },
    "e-2338": {
      id: "e-2338",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-26",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2339",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641a0c8100e68d073d8b96c5|1f4d5c29-ae84-0413-9ab3-1abce938c990",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641a0c8100e68d073d8b96c5|1f4d5c29-ae84-0413-9ab3-1abce938c990",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1680019907010,
    },
    "e-2340": {
      id: "e-2340",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2341",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641a0c8100e68d073d8b96c5|b2e761d3-29b8-b6f2-eaba-afac013b6e1a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641a0c8100e68d073d8b96c5|b2e761d3-29b8-b6f2-eaba-afac013b6e1a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1680019919930,
    },
    "e-2342": {
      id: "e-2342",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2343",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641a0c8100e68d073d8b96c5|8df3fbdc-988a-a7f9-360d-8705c0826f1a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641a0c8100e68d073d8b96c5|8df3fbdc-988a-a7f9-360d-8705c0826f1a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1680019931219,
    },
    "e-2344": {
      id: "e-2344",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-26",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2345",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641a0c8100e68d073d8b96c5|40bacb50-3d8c-faf6-b2d6-0a95c64b0e29",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641a0c8100e68d073d8b96c5|40bacb50-3d8c-faf6-b2d6-0a95c64b0e29",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1680019945835,
    },
    "e-2346": {
      id: "e-2346",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-99",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2347",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641a476ba68930e58a6db5cd|d926b988-f173-08f1-8a1c-c16d854d3810",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641a476ba68930e58a6db5cd|d926b988-f173-08f1-8a1c-c16d854d3810",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1680024995766,
    },
    "e-2347": {
      id: "e-2347",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-100",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2346",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641a476ba68930e58a6db5cd|d926b988-f173-08f1-8a1c-c16d854d3810",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641a476ba68930e58a6db5cd|d926b988-f173-08f1-8a1c-c16d854d3810",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1680024995766,
    },
    "e-2348": {
      id: "e-2348",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2349",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641dfaaf6b0b65edb3f2a3ca|9fa16249-a5a6-6dc6-1b50-5b160566f451",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641dfaaf6b0b65edb3f2a3ca|9fa16249-a5a6-6dc6-1b50-5b160566f451",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1680031660317,
    },
    "e-2349": {
      id: "e-2349",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2348",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641dfaaf6b0b65edb3f2a3ca|9fa16249-a5a6-6dc6-1b50-5b160566f451",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641dfaaf6b0b65edb3f2a3ca|9fa16249-a5a6-6dc6-1b50-5b160566f451",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1680031660317,
    },
    "e-2350": {
      id: "e-2350",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2351",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641dfaaf6b0b65edb3f2a3ca|605c8a33-f9c2-7f85-f7e3-9e6247f6791d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641dfaaf6b0b65edb3f2a3ca|605c8a33-f9c2-7f85-f7e3-9e6247f6791d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1680031693286,
    },
    "e-2351": {
      id: "e-2351",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2350",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641dfaaf6b0b65edb3f2a3ca|605c8a33-f9c2-7f85-f7e3-9e6247f6791d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641dfaaf6b0b65edb3f2a3ca|605c8a33-f9c2-7f85-f7e3-9e6247f6791d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1680031693286,
    },
    "e-2353": {
      id: "e-2353",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-113",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2352",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "642e86d46d7e2c12437327ce",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "642e86d46d7e2c12437327ce",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1680771990399,
    },
    "e-2551": {
      id: "e-2551",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-113",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2550",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64234f68f7ff771c82b4ad89",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64234f68f7ff771c82b4ad89",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1681401421810,
    },
    "e-2673": {
      id: "e-2673",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-113",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2672",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6438250cf72b704b4e31585f",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6438250cf72b704b4e31585f",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1681401593899,
    },
    "e-2711": {
      id: "e-2711",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-113",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2710",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64382520f8c60e2f3dc2a348",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64382520f8c60e2f3dc2a348",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1681401636524,
    },
    "e-2749": {
      id: "e-2749",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-113",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2748",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6438252daaa24ceec4e17b10",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6438252daaa24ceec4e17b10",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1681401683244,
    },
    "e-3394": {
      id: "e-3394",
      name: "",
      animationType: "preset",
      eventTypeId: "NAVBAR_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-103",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3395",
        },
      },
      mediaQueries: ["medium", "small", "tiny"],
      target: {
        id: "8902ab60-ff18-1ad1-7b19-201b504196ac",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "8902ab60-ff18-1ad1-7b19-201b504196ac",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1681833436192,
    },
    "e-3395": {
      id: "e-3395",
      name: "",
      animationType: "preset",
      eventTypeId: "NAVBAR_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-104",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3394",
        },
      },
      mediaQueries: ["medium", "small", "tiny"],
      target: {
        id: "8902ab60-ff18-1ad1-7b19-201b504196ac",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "8902ab60-ff18-1ad1-7b19-201b504196ac",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1681833436192,
    },
    "e-3396": {
      id: "e-3396",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-102",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3397",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "8902ab60-ff18-1ad1-7b19-201b504196b1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "8902ab60-ff18-1ad1-7b19-201b504196b1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1681833436192,
    },
    "e-3398": {
      id: "e-3398",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-101",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3399",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "8902ab60-ff18-1ad1-7b19-201b504196b4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "8902ab60-ff18-1ad1-7b19-201b504196b4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1681833436192,
    },
    "e-3400": {
      id: "e-3400",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-99",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3401",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "8902ab60-ff18-1ad1-7b19-201b504196bd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "8902ab60-ff18-1ad1-7b19-201b504196bd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1681833436192,
    },
    "e-3401": {
      id: "e-3401",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-100",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3400",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "8902ab60-ff18-1ad1-7b19-201b504196bd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "8902ab60-ff18-1ad1-7b19-201b504196bd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1681833436192,
    },
    "e-3402": {
      id: "e-3402",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-99",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3403",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "8902ab60-ff18-1ad1-7b19-201b504196ce",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "8902ab60-ff18-1ad1-7b19-201b504196ce",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1681833436192,
    },
    "e-3403": {
      id: "e-3403",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-100",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3402",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "8902ab60-ff18-1ad1-7b19-201b504196ce",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "8902ab60-ff18-1ad1-7b19-201b504196ce",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1681833436192,
    },
    "e-3404": {
      id: "e-3404",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-99",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3405",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "8902ab60-ff18-1ad1-7b19-201b504196e1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "8902ab60-ff18-1ad1-7b19-201b504196e1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1681833436192,
    },
    "e-3405": {
      id: "e-3405",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-100",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3404",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "8902ab60-ff18-1ad1-7b19-201b504196e1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "8902ab60-ff18-1ad1-7b19-201b504196e1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1681833436192,
    },
    "e-3406": {
      id: "e-3406",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-99",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3407",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "8902ab60-ff18-1ad1-7b19-201b504196fe",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "8902ab60-ff18-1ad1-7b19-201b504196fe",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1681833436192,
    },
    "e-3407": {
      id: "e-3407",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-100",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3406",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "8902ab60-ff18-1ad1-7b19-201b504196fe",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "8902ab60-ff18-1ad1-7b19-201b504196fe",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1681833436192,
    },
    "e-3408": {
      id: "e-3408",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-99",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3409",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "8902ab60-ff18-1ad1-7b19-201b50419711",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "8902ab60-ff18-1ad1-7b19-201b50419711",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1681833436192,
    },
    "e-3409": {
      id: "e-3409",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-100",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3408",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "8902ab60-ff18-1ad1-7b19-201b50419711",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "8902ab60-ff18-1ad1-7b19-201b50419711",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1681833436192,
    },
    "e-3410": {
      id: "e-3410",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-99",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3411",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "8902ab60-ff18-1ad1-7b19-201b50419726",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "8902ab60-ff18-1ad1-7b19-201b50419726",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1681833436192,
    },
    "e-3411": {
      id: "e-3411",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-100",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3410",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "8902ab60-ff18-1ad1-7b19-201b50419726",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "8902ab60-ff18-1ad1-7b19-201b50419726",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1681833436192,
    },
    "e-3412": {
      id: "e-3412",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-99",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3413",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "8902ab60-ff18-1ad1-7b19-201b50419738",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "8902ab60-ff18-1ad1-7b19-201b50419738",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1681833436192,
    },
    "e-3413": {
      id: "e-3413",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-100",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3412",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "8902ab60-ff18-1ad1-7b19-201b50419738",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "8902ab60-ff18-1ad1-7b19-201b50419738",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1681833436192,
    },
    "e-3414": {
      id: "e-3414",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-99",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3415",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "8902ab60-ff18-1ad1-7b19-201b50419758",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "8902ab60-ff18-1ad1-7b19-201b50419758",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1681833436192,
    },
    "e-3415": {
      id: "e-3415",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-100",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3414",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "8902ab60-ff18-1ad1-7b19-201b50419758",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "8902ab60-ff18-1ad1-7b19-201b50419758",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1681833436192,
    },
    "e-3416": {
      id: "e-3416",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-99",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3417",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "8902ab60-ff18-1ad1-7b19-201b5041976b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "8902ab60-ff18-1ad1-7b19-201b5041976b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1681833436192,
    },
    "e-3417": {
      id: "e-3417",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-100",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3416",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "8902ab60-ff18-1ad1-7b19-201b5041976b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "8902ab60-ff18-1ad1-7b19-201b5041976b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1681833436192,
    },
    "e-3418": {
      id: "e-3418",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-99",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3419",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "8902ab60-ff18-1ad1-7b19-201b5041977e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "8902ab60-ff18-1ad1-7b19-201b5041977e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1681833436192,
    },
    "e-3419": {
      id: "e-3419",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-100",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3418",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "8902ab60-ff18-1ad1-7b19-201b5041977e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "8902ab60-ff18-1ad1-7b19-201b5041977e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1681833436192,
    },
    "e-3420": {
      id: "e-3420",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3421",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "8902ab60-ff18-1ad1-7b19-201b504197ad",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "8902ab60-ff18-1ad1-7b19-201b504197ad",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1681833436192,
    },
    "e-3421": {
      id: "e-3421",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3420",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "8902ab60-ff18-1ad1-7b19-201b504197ad",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "8902ab60-ff18-1ad1-7b19-201b504197ad",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1681833436192,
    },
    "e-3422": {
      id: "e-3422",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-107",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3423",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "1fe543e2-2351-b8ac-998f-8a789c985db2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "1fe543e2-2351-b8ac-998f-8a789c985db2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1682635379846,
    },
    "e-3423": {
      id: "e-3423",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-108",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3422",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "1fe543e2-2351-b8ac-998f-8a789c985db2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "1fe543e2-2351-b8ac-998f-8a789c985db2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1682635379849,
    },
    "e-3424": {
      id: "e-3424",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3425",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641a0c8100e68d073d8b96c5|ffdc2fad-2a4a-8d13-b978-3a5144bc00df",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641a0c8100e68d073d8b96c5|ffdc2fad-2a4a-8d13-b978-3a5144bc00df",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685726800488,
    },
  },
  actionLists: {
    "a-15": {
      id: "a-15",
      title: "â˜ï¸ Slide To Top - 0.2s",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-15-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "641a0c8100e68df9498b96e2|19c94f36-99cc-86cb-a434-773f47539250",
                },
                yValue: 10,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "641a0c8100e68df9498b96e2|19c94f36-99cc-86cb-a434-773f47539250",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-15-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "641a0c8100e68df9498b96e2|19c94f36-99cc-86cb-a434-773f47539250",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "641a0c8100e68df9498b96e2|19c94f36-99cc-86cb-a434-773f47539250",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1637117977426,
    },
    "a-11": {
      id: "a-11",
      title: "â¬‡ï¸ ðŸ–¥ Dropdown Opens - Desktop",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-11-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {},
                value: "none",
              },
            },
            {
              id: "a-11-n-11",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                globalSwatchId: "44c33ad4",
                rValue: 8,
                bValue: 37,
                gValue: 15,
                aValue: 1,
              },
            },
            {
              id: "a-11-n-9",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-11-n-4",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-11-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-11-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                xValue: -50,
                yValue: 10,
                xUnit: "%",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-11-n-5",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {},
                value: "block",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-11-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {},
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-11-n-12",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {},
                globalSwatchId: "86b36df2",
                rValue: 108,
                bValue: 255,
                gValue: 114,
                aValue: 1,
              },
            },
            {
              id: "a-11-n-10",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {},
                zValue: -180,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-11-n-8",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "inOutQuad",
                duration: 200,
                target: {},
                widthUnit: "PX",
                heightUnit: "AUTO",
                locked: false,
              },
            },
            {
              id: "a-11-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 200,
                target: {},
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1636862239424,
    },
    "a-12": {
      id: "a-12",
      title: "â¬†ï¸ðŸ–¥ Dropdown Closes - Desktop",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-12-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {},
                yValue: 10,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-5",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {},
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-12-n-4",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {},
                globalSwatchId: "44c33ad4",
                rValue: 8,
                bValue: 37,
                gValue: 15,
                aValue: 1,
              },
            },
            {
              id: "a-12-n-3",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {},
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-12-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 300,
                target: {},
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-12-n-6",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 300,
                easing: "",
                duration: 0,
                target: {},
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1636862654345,
    },
    "a-105": {
      id: "a-105",
      title: "â¬‡ï¸  Module Dropdown Opens",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-105-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".small-dropdown-list",
                  selectorGuids: ["52f5eb39-5c38-4ea4-5ab0-bbab58e553e5"],
                },
                value: "none",
              },
            },
            {
              id: "a-105-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".small-dropdown-links-container",
                  selectorGuids: ["663e6e6c-a141-03c5-6998-aedfc0e35c84"],
                },
                yValue: -8,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-105-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".small-dropdown-links-container",
                  selectorGuids: ["663e6e6c-a141-03c5-6998-aedfc0e35c84"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-105-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".small-dropdown-list",
                  selectorGuids: ["52f5eb39-5c38-4ea4-5ab0-bbab58e553e5"],
                },
                value: "block",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-105-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".small-dropdown-links-container",
                  selectorGuids: ["663e6e6c-a141-03c5-6998-aedfc0e35c84"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-105-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".small-dropdown-links-container",
                  selectorGuids: ["663e6e6c-a141-03c5-6998-aedfc0e35c84"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-105-n-7",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".line-rounded-icon.card-dropdown-arrow",
                  selectorGuids: [
                    "2e8dd4ed-ef36-7a2f-c426-c8f795ebdb80",
                    "fc0a86cf-784e-bf6d-1e95-29ba1e20d187",
                  ],
                },
                zValue: -180,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1679601737524,
    },
    "a-106": {
      id: "a-106",
      title: "â¬†ï¸ Module Dropdown Closes",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-106-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".small-dropdown-links-container",
                  selectorGuids: ["663e6e6c-a141-03c5-6998-aedfc0e35c84"],
                },
                yValue: -8,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-106-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".small-dropdown-links-container",
                  selectorGuids: ["663e6e6c-a141-03c5-6998-aedfc0e35c84"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-106-n-7",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".line-rounded-icon.card-dropdown-arrow",
                  selectorGuids: [
                    "2e8dd4ed-ef36-7a2f-c426-c8f795ebdb80",
                    "fc0a86cf-784e-bf6d-1e95-29ba1e20d187",
                  ],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-106-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".small-dropdown-list",
                  selectorGuids: ["52f5eb39-5c38-4ea4-5ab0-bbab58e553e5"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1679601737524,
    },
    "a-107": {
      id: "a-107",
      title: "ðŸ’² Show Monthly Pricing",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-107-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".monthly-billing-item-container",
                  selectorGuids: ["5a6d7414-4fa2-728c-966c-6b34311faac5"],
                },
                value: "none",
              },
            },
            {
              id: "a-107-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".monthly-billing-item-container",
                  selectorGuids: ["5a6d7414-4fa2-728c-966c-6b34311faac5"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-107-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 100,
                target: {
                  selector: ".annually-billing-item-container",
                  selectorGuids: ["43f9541a-7a57-e119-5fab-f207a27d7606"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-107-n-7",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".monthly-billing-toggle",
                  selectorGuids: ["892b9f2f-b663-66db-f58b-fff0f28225f5"],
                },
                globalSwatchId: "86b36df2",
                rValue: 108,
                bValue: 255,
                gValue: 114,
                aValue: 1,
              },
            },
            {
              id: "a-107-n-8",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".monthly-billing-toggle",
                  selectorGuids: ["892b9f2f-b663-66db-f58b-fff0f28225f5"],
                },
                globalSwatchId: "86b36df2",
                rValue: 108,
                bValue: 255,
                gValue: 114,
                aValue: 1,
              },
            },
            {
              id: "a-107-n-9",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".monthly-billing-toggle",
                  selectorGuids: ["892b9f2f-b663-66db-f58b-fff0f28225f5"],
                },
                globalSwatchId: "07926372",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-107-n-10",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".annually-billing-toggle",
                  selectorGuids: ["0df64ce1-1e8f-a73f-188f-db7fa7210e14"],
                },
                globalSwatchId: "199ad8fd",
                rValue: 33,
                bValue: 77,
                gValue: 44,
                aValue: 1,
              },
            },
            {
              id: "a-107-n-11",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".annually-billing-toggle",
                  selectorGuids: ["0df64ce1-1e8f-a73f-188f-db7fa7210e14"],
                },
                globalSwatchId: "06b40b4b",
                rValue: 55,
                bValue: 107,
                gValue: 68,
                aValue: 1,
              },
            },
            {
              id: "a-107-n-12",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".annually-billing-toggle",
                  selectorGuids: ["0df64ce1-1e8f-a73f-188f-db7fa7210e14"],
                },
                globalSwatchId: "07926372",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-107-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 100,
                easing: "",
                duration: 0,
                target: {
                  selector: ".annually-billing-item-container",
                  selectorGuids: ["43f9541a-7a57-e119-5fab-f207a27d7606"],
                },
                value: "none",
              },
            },
            {
              id: "a-107-n-5",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 100,
                easing: "",
                duration: 0,
                target: {
                  selector: ".monthly-billing-item-container",
                  selectorGuids: ["5a6d7414-4fa2-728c-966c-6b34311faac5"],
                },
                value: "flex",
              },
            },
            {
              id: "a-107-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "ease",
                duration: 200,
                target: {
                  selector: ".monthly-billing-item-container",
                  selectorGuids: ["5a6d7414-4fa2-728c-966c-6b34311faac5"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1679690916212,
    },
    "a-108": {
      id: "a-108",
      title: "ðŸ’² Show Yearly Pricing",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-108-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 100,
                target: {
                  selector: ".monthly-billing-item-container",
                  selectorGuids: ["5a6d7414-4fa2-728c-966c-6b34311faac5"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-108-n-4",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".annually-billing-toggle",
                  selectorGuids: ["0df64ce1-1e8f-a73f-188f-db7fa7210e14"],
                },
                globalSwatchId: "86b36df2",
                rValue: 108,
                bValue: 255,
                gValue: 114,
                aValue: 1,
              },
            },
            {
              id: "a-108-n-5",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".annually-billing-toggle",
                  selectorGuids: ["0df64ce1-1e8f-a73f-188f-db7fa7210e14"],
                },
                globalSwatchId: "86b36df2",
                rValue: 108,
                bValue: 255,
                gValue: 114,
                aValue: 1,
              },
            },
            {
              id: "a-108-n-6",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".annually-billing-toggle",
                  selectorGuids: ["0df64ce1-1e8f-a73f-188f-db7fa7210e14"],
                },
                globalSwatchId: "07926372",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-108-n-7",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".monthly-billing-toggle",
                  selectorGuids: ["892b9f2f-b663-66db-f58b-fff0f28225f5"],
                },
                globalSwatchId: "199ad8fd",
                rValue: 33,
                bValue: 77,
                gValue: 44,
                aValue: 1,
              },
            },
            {
              id: "a-108-n-8",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".monthly-billing-toggle",
                  selectorGuids: ["892b9f2f-b663-66db-f58b-fff0f28225f5"],
                },
                globalSwatchId: "06b40b4b",
                rValue: 55,
                bValue: 107,
                gValue: 68,
                aValue: 1,
              },
            },
            {
              id: "a-108-n-9",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".monthly-billing-toggle",
                  selectorGuids: ["892b9f2f-b663-66db-f58b-fff0f28225f5"],
                },
                globalSwatchId: "07926372",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-108-n-11",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 100,
                easing: "",
                duration: 0,
                target: {
                  selector: ".monthly-billing-item-container",
                  selectorGuids: ["5a6d7414-4fa2-728c-966c-6b34311faac5"],
                },
                value: "none",
              },
            },
            {
              id: "a-108-n-10",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 100,
                easing: "",
                duration: 0,
                target: {
                  selector: ".annually-billing-item-container",
                  selectorGuids: ["43f9541a-7a57-e119-5fab-f207a27d7606"],
                },
                value: "flex",
              },
            },
            {
              id: "a-108-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "ease",
                duration: 200,
                target: {
                  selector: ".annually-billing-item-container",
                  selectorGuids: ["43f9541a-7a57-e119-5fab-f207a27d7606"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1679690916212,
    },
    "a-6": {
      id: "a-6",
      title: "âž¡ï¸ Link Icon Right - Hover In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-6-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".btn-icon-right",
                  selectorGuids: ["d02c71c6-4302-76c8-d365-a2b71757b2d8"],
                },
                xValue: 4,
                zValue: 0.01,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "px",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1636689302152,
    },
    "a-7": {
      id: "a-7",
      title: "âž¡ï¸ Link Icon Right - Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-7-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".btn-icon-right",
                  selectorGuids: ["d02c71c6-4302-76c8-d365-a2b71757b2d8"],
                },
                xValue: 0,
                zValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "px",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1636689362821,
    },
    "a-109": {
      id: "a-109",
      title: "ðŸ–¼ï¸ Image Link Hover In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-109-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".card-sales-home-image",
                  selectorGuids: ["6e4e22e4-b22e-7e56-478e-4b8333fbde94"],
                },
                xValue: 1.06,
                yValue: 1.06,
                zValue: 1.01,
                locked: true,
              },
            },
            {
              id: "a-109-n-2",
              actionTypeId: "STYLE_FILTER",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".card-sales-home-image",
                  selectorGuids: ["6e4e22e4-b22e-7e56-478e-4b8333fbde94"],
                },
                filters: [
                  {
                    type: "brightness",
                    filterId: "c198",
                    value: 120,
                    unit: "%",
                  },
                ],
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1679937301063,
    },
    "a-110": {
      id: "a-110",
      title: "ðŸ–¼ï¸ Image Link Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-110-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".card-sales-home-image",
                  selectorGuids: ["6e4e22e4-b22e-7e56-478e-4b8333fbde94"],
                },
                xValue: 1,
                yValue: 1,
                zValue: 1,
                locked: true,
              },
            },
            {
              id: "a-110-n-2",
              actionTypeId: "STYLE_FILTER",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".card-sales-home-image",
                  selectorGuids: ["6e4e22e4-b22e-7e56-478e-4b8333fbde94"],
                },
                filters: [
                  {
                    type: "brightness",
                    filterId: "c198",
                    value: 100,
                    unit: "%",
                  },
                ],
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1679937301063,
    },
    "a-113": {
      id: "a-113",
      title: "â²  Page Delay",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-113-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".page-wrapper",
                  selectorGuids: ["4734da84-8d22-8e4f-3f55-6485b64de28e"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-113-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".loading-bar",
                  selectorGuids: ["00b6a48a-ab9f-b5c9-31e4-a23e3e9adecb"],
                },
                widthValue: 0,
                widthUnit: "vw",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-113-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 200,
                easing: "",
                duration: 0,
                target: {
                  selector: ".loading-bar-wrapper",
                  selectorGuids: ["1974fc57-b22c-6f62-3701-52eaf94a0bab"],
                },
                value: "block",
              },
            },
            {
              id: "a-113-n-4",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 200,
                easing: "outQuad",
                duration: 700,
                target: {
                  selector: ".loading-bar",
                  selectorGuids: ["00b6a48a-ab9f-b5c9-31e4-a23e3e9adecb"],
                },
                widthValue: 100,
                widthUnit: "vw",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-113-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "outQuad",
                duration: 700,
                target: {
                  selector: ".page-wrapper",
                  selectorGuids: ["4734da84-8d22-8e4f-3f55-6485b64de28e"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-113-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 900,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".loading-bar-wrapper",
                  selectorGuids: ["1974fc57-b22c-6f62-3701-52eaf94a0bab"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-113-n-7",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".loading-bar-wrapper",
                  selectorGuids: ["1974fc57-b22c-6f62-3701-52eaf94a0bab"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1679959327211,
    },
    "a-27": {
      id: "a-27",
      title: "ðŸ‘» Fade In - 0.3s",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-27-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "641a0c8100e68df9498b96e2|f281aa50-9525-c3c5-6b9a-1ac0732007b7",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-27-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 300,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "641a0c8100e68df9498b96e2|f281aa50-9525-c3c5-6b9a-1ac0732007b7",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1637118496510,
    },
    "a-28": {
      id: "a-28",
      title: "ðŸ‘» Fade In - 0.4s",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-28-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "641a0c8100e68df9498b96e2|f281aa50-9525-c3c5-6b9a-1ac0732007b7",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-28-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "641a0c8100e68df9498b96e2|f281aa50-9525-c3c5-6b9a-1ac0732007b7",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1637118496510,
    },
    "a-29": {
      id: "a-29",
      title: "ðŸ‘» Fade In - 0.5s",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-29-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "641a0c8100e68df9498b96e2|f281aa50-9525-c3c5-6b9a-1ac0732007b7",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-29-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 500,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "641a0c8100e68df9498b96e2|f281aa50-9525-c3c5-6b9a-1ac0732007b7",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1637118496510,
    },
    "a-30": {
      id: "a-30",
      title: "ðŸ‘» Fade In - 0.6s",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-30-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "641a0c8100e68df9498b96e2|f281aa50-9525-c3c5-6b9a-1ac0732007b7",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-30-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "641a0c8100e68df9498b96e2|f281aa50-9525-c3c5-6b9a-1ac0732007b7",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1637118496510,
    },
    "a-31": {
      id: "a-31",
      title: "ðŸ‘» Fade In - 0.7s",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-31-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "641a0c8100e68df9498b96e2|f281aa50-9525-c3c5-6b9a-1ac0732007b7",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-31-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 700,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "641a0c8100e68df9498b96e2|f281aa50-9525-c3c5-6b9a-1ac0732007b7",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1637118496510,
    },
    "a-114": {
      id: "a-114",
      title: "ðŸ–¼ï¸ 2 Images Scroll Animation",
      continuousParameterGroups: [
        {
          id: "a-114-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-114-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".sales-home-hero-image-left",
                      selectorGuids: ["f62254a2-b23c-925b-2168-c89f1c83a256"],
                    },
                    xValue: -4,
                    yValue: -2,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-114-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".sales-home-hero-image-right",
                      selectorGuids: ["b50885f1-1d9c-6083-0800-817326144d2a"],
                    },
                    xValue: 4,
                    yValue: 2,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-114-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".sales-home-hero-image-left",
                      selectorGuids: ["f62254a2-b23c-925b-2168-c89f1c83a256"],
                    },
                    xValue: 4,
                    yValue: 2,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-114-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".sales-home-hero-image-right",
                      selectorGuids: ["b50885f1-1d9c-6083-0800-817326144d2a"],
                    },
                    xValue: -4,
                    yValue: -2,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1680019624227,
    },
    "a-26": {
      id: "a-26",
      title: "ðŸ‘» Fade In - 0.2s",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-26-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "641a0c8100e68df9498b96e2|f281aa50-9525-c3c5-6b9a-1ac0732007b7",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-26-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "641a0c8100e68df9498b96e2|f281aa50-9525-c3c5-6b9a-1ac0732007b7",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1637118496510,
    },
    "a-99": {
      id: "a-99",
      title: "â¬‡ï¸ Sidebar Dropdown Opens",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-99-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".sidebar-dropdown-list-wrapper",
                  selectorGuids: ["d62e740b-df53-30b4-7d8c-dcbcba6a629a"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-99-n-7",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".sidebar-dropdown-list-wrapper",
                  selectorGuids: ["d62e740b-df53-30b4-7d8c-dcbcba6a629a"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-99-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".sidebar-dropdown-inner-wrapper",
                  selectorGuids: ["a30fa48a-43e0-395e-69d0-0aa5a8c25cb9"],
                },
                yValue: -50,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-99-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".sidebar-dropdown-list-wrapper",
                  selectorGuids: ["d62e740b-df53-30b4-7d8c-dcbcba6a629a"],
                },
                value: "block",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-99-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".sidebar-dropdown-inner-wrapper",
                  selectorGuids: ["a30fa48a-43e0-395e-69d0-0aa5a8c25cb9"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-99-n-5",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".line-rounded-icon.sidebar-dropdown-arrow",
                  selectorGuids: [
                    "2e8dd4ed-ef36-7a2f-c426-c8f795ebdb80",
                    "41edb526-e7a6-e459-e849-0c93e97e92eb",
                  ],
                },
                zValue: 90,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-99-n-8",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".sidebar-dropdown-list-wrapper",
                  selectorGuids: ["d62e740b-df53-30b4-7d8c-dcbcba6a629a"],
                },
                widthUnit: "PX",
                heightUnit: "AUTO",
                locked: false,
              },
            },
            {
              id: "a-99-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".sidebar-dropdown-list-wrapper",
                  selectorGuids: ["d62e740b-df53-30b4-7d8c-dcbcba6a629a"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1679505186003,
    },
    "a-100": {
      id: "a-100",
      title: "â¬†ï¸ Sidebar Dropdown Closes",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-100-n-5",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".line-rounded-icon.sidebar-dropdown-arrow",
                  selectorGuids: [
                    "2e8dd4ed-ef36-7a2f-c426-c8f795ebdb80",
                    "41edb526-e7a6-e459-e849-0c93e97e92eb",
                  ],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-100-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".sidebar-dropdown-list-wrapper",
                  selectorGuids: ["d62e740b-df53-30b4-7d8c-dcbcba6a629a"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-100-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".sidebar-dropdown-inner-wrapper",
                  selectorGuids: ["a30fa48a-43e0-395e-69d0-0aa5a8c25cb9"],
                },
                yValue: -50,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-100-n-7",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 100,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".sidebar-dropdown-list-wrapper",
                  selectorGuids: ["d62e740b-df53-30b4-7d8c-dcbcba6a629a"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-100-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 200,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".sidebar-dropdown-list-wrapper",
                  selectorGuids: ["d62e740b-df53-30b4-7d8c-dcbcba6a629a"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1679505186003,
    },
    "a-103": {
      id: "a-103",
      title: "ðŸ“± Sidebar Mobile Icon Opens",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-103-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".sidebar-mobile-menu-icon.left",
                  selectorGuids: [
                    "2e9b332d-80ce-c8f3-3d5f-bcc4d8f57ce4",
                    "6361c053-ad96-8c46-f08f-248048603af3",
                  ],
                },
                zValue: -180,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-103-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".sidebar-mobile-menu-icon.right",
                  selectorGuids: [
                    "2e9b332d-80ce-c8f3-3d5f-bcc4d8f57ce4",
                    "1ba6ab8d-8134-f4be-3bb5-377295464784",
                  ],
                },
                zValue: 180,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-103-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".sidebar-mobile-menu-icon.left",
                  selectorGuids: [
                    "2e9b332d-80ce-c8f3-3d5f-bcc4d8f57ce4",
                    "6361c053-ad96-8c46-f08f-248048603af3",
                  ],
                },
                xValue: 4,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-103-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".sidebar-mobile-menu-icon.right",
                  selectorGuids: [
                    "2e9b332d-80ce-c8f3-3d5f-bcc4d8f57ce4",
                    "1ba6ab8d-8134-f4be-3bb5-377295464784",
                  ],
                },
                xValue: -4,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1679529406395,
    },
    "a-104": {
      id: "a-104",
      title: "ðŸ“± Sidebar Mobile Icon Closes",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-104-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".sidebar-mobile-menu-icon.left",
                  selectorGuids: [
                    "2e9b332d-80ce-c8f3-3d5f-bcc4d8f57ce4",
                    "6361c053-ad96-8c46-f08f-248048603af3",
                  ],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-104-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".sidebar-mobile-menu-icon.right",
                  selectorGuids: [
                    "2e9b332d-80ce-c8f3-3d5f-bcc4d8f57ce4",
                    "1ba6ab8d-8134-f4be-3bb5-377295464784",
                  ],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-104-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".sidebar-mobile-menu-icon.left",
                  selectorGuids: [
                    "2e9b332d-80ce-c8f3-3d5f-bcc4d8f57ce4",
                    "6361c053-ad96-8c46-f08f-248048603af3",
                  ],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-104-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".sidebar-mobile-menu-icon.right",
                  selectorGuids: [
                    "2e9b332d-80ce-c8f3-3d5f-bcc4d8f57ce4",
                    "1ba6ab8d-8134-f4be-3bb5-377295464784",
                  ],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1679529406395,
    },
    "a-102": {
      id: "a-102",
      title: "âž¡ï¸ Sidebar Expand",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-102-n-16",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".sidebar-collapsed-icon-btn-wrapper",
                  selectorGuids: ["94e883c1-244b-ac28-e120-cb7ba496972f"],
                },
                value: "none",
              },
            },
            {
              id: "a-102-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".text-200.sidebar-dropdown-text",
                  selectorGuids: [
                    "d7ad69fd-dd9b-1271-109b-179faf636896",
                    "84358ed7-1343-e150-9596-289f2094d7f4",
                  ],
                },
                value: "block",
              },
            },
            {
              id: "a-102-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".line-rounded-icon.sidebar-dropdown-arrow",
                  selectorGuids: [
                    "2e8dd4ed-ef36-7a2f-c426-c8f795ebdb80",
                    "41edb526-e7a6-e459-e849-0c93e97e92eb",
                  ],
                },
                value: "block",
              },
            },
            {
              id: "a-102-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".sidebar-btn-wrapper",
                  selectorGuids: ["f301c2df-37fb-2e73-57b6-e7cc27911f3a"],
                },
                value: "block",
              },
            },
            {
              id: "a-102-n-6",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".sidebar-user-text-container",
                  selectorGuids: ["b98fbcc5-f100-cc89-607e-c60ee03c98d8"],
                },
                value: "block",
              },
            },
            {
              id: "a-102-n-7",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".sidebar-collapse-icon-container",
                  selectorGuids: ["6836f6a1-70ea-9b80-4f4d-29477bcc793d"],
                },
                value: "block",
              },
            },
            {
              id: "a-102-n-9",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".sidebar-menu-collapsed-overlay",
                  selectorGuids: ["b6b07cdd-8d86-df75-6de2-5ea15097c51f"],
                },
                value: "none",
              },
            },
            {
              id: "a-102-n-10",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".sidebar-wrapper",
                  selectorGuids: ["8ae22878-e7ff-2745-3465-795f01ed4770"],
                },
                widthValue: 300,
                widthUnit: "px",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-102-n-11",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: {
                  selector: ".sidebar-spacer",
                  selectorGuids: ["10e9a8d0-33a8-3f78-7b41-0b6a376b258e"],
                },
                widthValue: 300,
                widthUnit: "px",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-102-n-12",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: {
                  selector: ".avatar-circle._01",
                  selectorGuids: [
                    "9b84acad-1d06-eee7-53e6-297b93a10877",
                    "840d0a55-7cd4-7c8f-733a-17c1124bcba4",
                  ],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-102-n-14",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: {},
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-102-n-15",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 0,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".sidebar-logo-section-container",
                  selectorGuids: ["86f7fe4b-5b0f-34c1-1482-e98875056d3b"],
                },
                heightValue: 106,
                widthUnit: "AUTO",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-102-n-5",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".sidebar-search-wrapper",
                  selectorGuids: ["c2ba5e3e-bebf-7fb1-8b86-00f1754968a1"],
                },
                value: "block",
              },
            },
            {
              id: "a-102-n-17",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 0,
                target: {
                  selector: ".sidebar-search-wrapper",
                  selectorGuids: ["c2ba5e3e-bebf-7fb1-8b86-00f1754968a1"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-102-n-18",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 0,
                target: {
                  selector: ".sidebar-search-wrapper",
                  selectorGuids: ["c2ba5e3e-bebf-7fb1-8b86-00f1754968a1"],
                },
                widthUnit: "PX",
                heightUnit: "AUTO",
                locked: false,
              },
            },
            {
              id: "a-102-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".sidebar-logo-link",
                  selectorGuids: ["2a1a4813-c26f-641b-cb26-6254f3f4b5a2"],
                },
                value: "block",
              },
            },
            {
              id: "a-102-n-19",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".sidebar-collapsed-divider",
                  selectorGuids: ["d8e4825d-6435-2bfa-4d4a-ae2d674ca56d"],
                },
                value: "none",
              },
            },
            {
              id: "a-102-n-20",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: {
                  selector: ".dropdown-toggle.sidebar-dropdown",
                  selectorGuids: [
                    "9a9aba64-cc74-a219-d2a1-427024bba6ef",
                    "0fd37e9f-526f-01f1-2bf2-817105dd0997",
                  ],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1679518160621,
    },
    "a-101": {
      id: "a-101",
      title: "â¬…ï¸ Sidebar Collapse",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-101-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".text-200.sidebar-dropdown-text",
                  selectorGuids: [
                    "d7ad69fd-dd9b-1271-109b-179faf636896",
                    "84358ed7-1343-e150-9596-289f2094d7f4",
                  ],
                },
                value: "none",
              },
            },
            {
              id: "a-101-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".line-rounded-icon.sidebar-dropdown-arrow",
                  selectorGuids: [
                    "2e8dd4ed-ef36-7a2f-c426-c8f795ebdb80",
                    "41edb526-e7a6-e459-e849-0c93e97e92eb",
                  ],
                },
                value: "none",
              },
            },
            {
              id: "a-101-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".sidebar-btn-wrapper",
                  selectorGuids: ["f301c2df-37fb-2e73-57b6-e7cc27911f3a"],
                },
                value: "none",
              },
            },
            {
              id: "a-101-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".sidebar-logo-link",
                  selectorGuids: ["2a1a4813-c26f-641b-cb26-6254f3f4b5a2"],
                },
                value: "none",
              },
            },
            {
              id: "a-101-n-6",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".sidebar-user-text-container",
                  selectorGuids: ["b98fbcc5-f100-cc89-607e-c60ee03c98d8"],
                },
                value: "none",
              },
            },
            {
              id: "a-101-n-7",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".sidebar-collapse-icon-container",
                  selectorGuids: ["6836f6a1-70ea-9b80-4f4d-29477bcc793d"],
                },
                value: "none",
              },
            },
            {
              id: "a-101-n-8",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".sidebar-collapsed-icon-btn-wrapper",
                  selectorGuids: ["94e883c1-244b-ac28-e120-cb7ba496972f"],
                },
                value: "flex",
              },
            },
            {
              id: "a-101-n-9",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".sidebar-menu-collapsed-overlay",
                  selectorGuids: ["b6b07cdd-8d86-df75-6de2-5ea15097c51f"],
                },
                value: "block",
              },
            },
            {
              id: "a-101-n-18",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".sidebar-collapsed-divider",
                  selectorGuids: ["d8e4825d-6435-2bfa-4d4a-ae2d674ca56d"],
                },
                value: "block",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-101-n-10",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".sidebar-wrapper",
                  selectorGuids: ["8ae22878-e7ff-2745-3465-795f01ed4770"],
                },
                widthValue: 64,
                widthUnit: "px",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-101-n-11",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: {
                  selector: ".sidebar-spacer",
                  selectorGuids: ["10e9a8d0-33a8-3f78-7b41-0b6a376b258e"],
                },
                widthValue: 64,
                widthUnit: "px",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-101-n-12",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: {
                  selector: ".avatar-circle._01",
                  selectorGuids: [
                    "9b84acad-1d06-eee7-53e6-297b93a10877",
                    "840d0a55-7cd4-7c8f-733a-17c1124bcba4",
                  ],
                },
                xValue: -10,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-101-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".sidebar-collapsed-icon-btn-wrapper",
                  selectorGuids: ["94e883c1-244b-ac28-e120-cb7ba496972f"],
                },
                xValue: -8,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-101-n-14",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".sidebar-logo-section-container",
                  selectorGuids: ["86f7fe4b-5b0f-34c1-1482-e98875056d3b"],
                },
                widthValue: 62,
                heightValue: 64,
                widthUnit: "px",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-101-n-16",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: {
                  selector: ".sidebar-search-wrapper",
                  selectorGuids: ["c2ba5e3e-bebf-7fb1-8b86-00f1754968a1"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-101-n-17",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 0,
                target: {
                  selector: ".sidebar-search-wrapper",
                  selectorGuids: ["c2ba5e3e-bebf-7fb1-8b86-00f1754968a1"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-101-n-20",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: {
                  selector: ".dropdown-toggle.sidebar-dropdown",
                  selectorGuids: [
                    "9a9aba64-cc74-a219-d2a1-427024bba6ef",
                    "0fd37e9f-526f-01f1-2bf2-817105dd0997",
                  ],
                },
                xValue: -4,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-101-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: {},
                xValue: -4,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-101-n-19",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 100,
                easing: "",
                duration: 0,
                target: {
                  selector: ".sidebar-search-wrapper",
                  selectorGuids: ["c2ba5e3e-bebf-7fb1-8b86-00f1754968a1"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1679518160621,
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
