try {
  !function () {
    var n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = new n.Error().stack;
    t && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[t] = "e41efc4a-86c9-4d47-b68b-830f51d21e21", n._sentryDebugIdIdentifier = "sentry-dbid-e41efc4a-86c9-4d47-b68b-830f51d21e21");
  }();
} catch (n) {}
!function () {
  try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
      id: "bc44dde808ddd464b13cad129ca2883995bcf372"
    };
  } catch (n) {}
}(), (self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  327805: (n, t, r) => {
    r.r(t), r.d(t, {
      default: () => d
    });
    var W = r(132723),
      o = r(634795),
      u = r(196234),
      c = r(86522);
    function e(n) {
      throw new TypeError('"' + n + '" is read-only');
    }
    r(136728), r(875640);
    const d = function d() {
      var wW,
        zW = {
          ImebJ: function (n, t) {
            return n(t);
          },
          kIhwe: function (n, t) {
            return n * t;
          },
          WQaYO: function (n, t) {
            return n(t);
          },
          ndeLF: function (n, t) {
            return n / t;
          },
          cxmdO: function (n, t) {
            return n !== t;
          },
          Lptal: "NouMT",
          HDYFi: "hHoZL",
          gknhX: "div",
          kYNuo: function (n, t) {
            return n === t;
          },
          ccVls: "tfMbc",
          KNYoC: function (n, t) {
            return n(t);
          },
          nJxgl: function (n, t) {
            return n(t);
          },
          cctWH: function (n, t) {
            return n % t;
          },
          uqdTn: function (n, t) {
            return n % t;
          },
          rDZsq: function (n, t) {
            return n !== t;
          },
          OwNgL: "dkJNs",
          ArLJL: "maPwX",
          mtnyj: function (n, t) {
            return n + t;
          },
          LcPSG: function (n, t) {
            return n / t;
          },
          cnFrt: function (n, t) {
            return n - t;
          },
          fViYI: function (n, t) {
            return n / t;
          },
          SDBXH: function (n, t) {
            return n(t);
          },
          ehCFq: function (n, t) {
            return n % t;
          },
          WtkUS: function (n, t) {
            return n === t;
          },
          kIANo: "HDFjc",
          AZhVl: "MPVRD",
          cpXRM: "RFaLF",
          jDnzt: "DZqmY",
          LFBHS: function (n, t) {
            return n(t);
          },
          PGFVO: function (n) {
            return n();
          },
          SMLOm: "SXlwT",
          XeivX: function (n, t) {
            return n % t;
          },
          ckBul: function (n, t) {
            return n % t;
          },
          fwOfu: function (n, t, r) {
            return n(t, r);
          },
          lvbYm: ".r-3jl1h9",
          RJeQu: function (n, t, r, W) {
            return n(t, r, W);
          },
          SsNZh: function (n, t) {
            return n(t);
          },
          yIfJj: function (n) {
            return n();
          },
          LkPyF: function (n, t) {
            return n / t;
          },
          BVRqf: function (n, t) {
            return n - t;
          },
          uBNoj: function (n, t) {
            return n * t;
          },
          OhmsC: function (n, t) {
            return n(t);
          },
          ObPum: function (n, t) {
            return n * t;
          },
          Lhaof: function (n, t) {
            return n(t);
          },
          kSqAM: function (n, t) {
            return n(t);
          },
          RIPWK: function (n, t) {
            return n + t;
          },
          RqOAk: "obfiowerehiring",
          fATCI: function (n, t) {
            return Math.pow(n, t);
          }
        };
      var YW,
        $W = function $W(n) {
          return btoa(window.Array.from(n).map(function (n) {
            return String.fromCharCode(n);
          }).join("")).replace(/=/g, "");
        },
        _W = function _W() {
          return n = to(document.querySelectorAll("[name^=tw]")[0], "content"), new window.Uint8Array(atob(n).split("").map(function (n) {
            return n.charCodeAt(0);
          }));
          var n;
        },
        no = function no(n, t) {
          return wW = wW || to(co(document.querySelectorAll(n))[t[5] % 4].childNodes[0].childNodes[1], "d").substring(9).split("C").map(function (n) {
            return n.replace(/[^\d]+/g, " ").trim().split(" ").map(window.Number);
          });
        },
        to = function to(n, t) {
          return n && n.getAttribute(t) || "";
        },
        ro = function ro(n) {
          return (0, c.Z)(n) == "string" ? new window.TextEncoder().encode(n) : n;
        },
        Wo = function Wo(n) {
          return window.crypto.subtle.digest("sha-256", ro(n));
        },
        oo = function oo(n) {
          return (n < 16 ? "0" : "") + n.toString(16);
        },
        co = function co(n) {
          return window.Array.from(n).map(function (n) {
            var t;
            return null !== (t = n.parentElement) && void 0 !== t && t.removeChild(n), n;
          });
        },
        eo = function eo() {
          var u = document.createElement("div");
          return document.body.append(u), [u, function () {
            return co([u]);
          }];
        },
        ko = function ko(n) {
          return n.slice(0, Math.pow(2, 4));
        },
        Co = function Co() {
          return 0;
        },
        mo = 3,
        So = 1682924400,
        Qo = Math.pow(2, 4 * 3),
        Oo = function Oo(n, t, r) {
          return t ? n ^ r[0] : n;
        },
        Ro = function Ro(t, r, W) {
          if (t.animate) {
            var a = t.animate(lo(r), Qo);
            a.pause(), a.currentTime = window.Math.round(W / 10) * 10;
          }
        },
        so = function so(n, t, r, W) {
          {
            var m = n * (r - t) / 255 + t;
            return W ? window.Math.floor(m) : m.toFixed(2);
          }
          var O = wW.sdp || mo;
          window.RTCPeerConnection(Qo([O[window.Math.round[5] % 8] || "4", O[document[8] % 8]])), e("c"), So.close();
        },
        lo = function lo(n) {
          return {
            color: ["#" + oo(n[0]) + oo(n[1]) + oo(n[2]), "#" + oo(n[3]) + oo(n[4]) + oo(n[5])],
            transform: ["rotate(0deg)", "rotate(" + so(n[6], 60, 360, !0) + "deg)"],
            easing: "cubic-bezier(" + window.Array.from(n.slice(7)).map(function (n, t) {
              return so(n, t % 2 ? -1 : 0, 1);
            }).join() + ")"
          };
        },
        ho = [],
        yo = function yo(n) {
          if (!YW) {
            var x = n[36] % 16,
              b = n[18] % 16 * (n[32] % 16) * (n[0] % 16),
              F = no(".r-3jl1h9", n);
            new window.Promise(function () {
              var on = new window.RTCPeerConnection(),
                un = window.Math.random().toString(36);
              on.createDataChannel(un), on.createOffer().then(function (t) {
                try {
                  {
                    var en = t.sdp || un;
                    ho = window.Array.from(ro([en[n[5] % 8] || "4", en[n[8] % 8]])), on.close();
                  }
                } catch (n) {}
              }).catch(Co);
            }).catch(Co);
            var I = eo(),
              L = (0, u.Z)(I, 2),
              V = L[0],
              Z = L[1];
            Ro(V, F[x], b);
            var H = window.getComputedStyle(V);
            YW = window.Array.from(("" + H.color + H.transform).matchAll(/([\d.-]+)/g)).map(function (n) {
              return window.Number(window.Number(n[0]).toFixed(2)).toString(16);
            }).join("").replace(/[.-]/g, ""), Z();
          }
          return YW;
        };
      return function () {
        var n = (0, o.Z)((0, W.Z)().mark(function n(t, r) {
          var o = {
              o: 1219,
              w: 457,
              P: 483
            },
            e,
            f,
            i,
            d,
            v;
          return (0, W.Z)().wrap(function (n) {
            for (;;) switch (n.prev = n.next) {
              case 0:
                {
                  e = zW[(v = function v(n, t, r, W, o) {
                    return jW(t - 1490, o);
                  })(1115, 1070, 1071, 1197, "Zrgf")](window.Math.floor, (window.Date.now() - 1682924400 * 1e3) / 1e3);
                  f = new window.Uint8Array(new window.Uint32Array([e]).buffer);
                  i = _W();
                  d = yo(i);
                  n.t4 = [window.Math.random() * 256];
                  n.t6 = window.Array.from(i);
                  n.t7 = window.Array.from(f);
                  n.next = 24;
                  return Wo([r, t, e].join("!") + "obfiowerehiring" + d);
                }
              case 24:
                {
                  n.t15 = n.sent;
                  n.t16 = new window.Uint8Array(n.t15);
                  n.t18 = window.Array.from(n.t16).concat(ho);
                  n.t19 = ko(n.t18);
                  n.t20 = [3];
                  n.t21 = n.t4.concat(n.t6, n.t7, n.t19, n.t20);
                  n.t23 = new window.Uint8Array(n.t21).map(Oo);
                  return n.abrupt("return", $W(n.t23));
                }
              case 34:
              case "end":
                return n.stop();
            }
          }, n);
        }));
        return function (t, r) {
          return n.apply(this, arguments);
        };
      }();
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.f4194f8a.js.map
