try {
  !function () {
    var n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = new n.Error().stack;
    t && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[t] = "a65099ce-3bfe-4c73-a0fe-33d7dc9e152e", n._sentryDebugIdIdentifier = "sentry-dbid-a65099ce-3bfe-4c73-a0fe-33d7dc9e152e");
  }();
} catch (n) {}
!function () {
  try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
      id: "76d0b48bab836830bed959ed1e496cb4f8352702"
    };
  } catch (n) {}
}(), (self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  327805: (n, t, r) => {
    r.r(t), r.d(t, {
      default: () => i
    });
    var u = r(132723),
      W = r(634795),
      c = r(196234),
      e = r(86522);
    function o(n) {
      throw new TypeError('"' + n + '" is read-only');
    }
    r(136728), r(875640);
    const i = function i() {
      var i = "ADQq",
        Z = 277,
        Au = {
          vevms: function (n, t) {
            return n(t);
          },
          dlfNk: function (n, t) {
            return n(t);
          },
          JZKxd: function (n, t) {
            return n % t;
          },
          sFGbW: function (n, t) {
            return n === t;
          },
          rLfpQ: "Yyccn",
          vobVt: "div",
          iICva: function (n, t) {
            return n + t;
          },
          tjlyP: function (n, t) {
            return n / t;
          },
          yvonw: function (n, t) {
            return n * t;
          },
          wHEWy: function (n, t) {
            return n - t;
          },
          kySHi: function (n, t) {
            return n(t);
          },
          HTfLy: function (n, t) {
            return n === t;
          },
          rXXfP: "MHeMp",
          LUkor: "UdnpZ",
          dSToh: function (n, t) {
            return n(t);
          },
          qXEXO: function (n, t) {
            return n / t;
          },
          csAsO: function (n, t) {
            return n(t);
          },
          wGWHn: function (n, t) {
            return n % t;
          },
          MiCWx: function (n, t) {
            return n % t;
          },
          Enjaa: "TYFuF",
          bQFll: "BxwkM",
          KbRBJ: function (n, t) {
            return n + t;
          },
          myxjE: function (n, t) {
            return n * t;
          },
          IftwL: function (n, t) {
            return n(t);
          },
          QBoyn: function (n, t) {
            return n * t;
          },
          mlsbg: function (n, t) {
            return n % t;
          },
          fnxLI: function (n) {
            return n();
          },
          mIQqZ: "BgsSh",
          jpGXb: "RgLAU",
          JEcRm: "Iyiim",
          yGSwy: function (n, t) {
            return n !== t;
          },
          yMbWF: "Xufas",
          tFoGv: function (n, t) {
            return n * t;
          },
          IcsKQ: function (n, t) {
            return n * t;
          },
          vFzVR: function (n, t) {
            return n % t;
          },
          ceeiQ: function (n, t, r) {
            return n(t, r);
          },
          qxgwt: ".r-39eg0",
          pPius: function (n) {
            return n();
          },
          zcPWB: function (n, t, r, u) {
            return n(t, r, u);
          },
          pWKNO: function (n) {
            return n();
          },
          rPAQB: function (n, t) {
            return n(t);
          },
          ztUca: function (n, t) {
            return n / t;
          },
          SZysT: function (n, t) {
            return n - t;
          },
          DZYrX: function (n, t) {
            return n * t;
          },
          KxZQt: function (n) {
            return n();
          },
          zxnnB: function (n, t) {
            return n(t);
          },
          dISur: function (n, t) {
            return n(t);
          },
          HsNKb: function (n, t) {
            return n(t);
          },
          CykIK: function (n, t) {
            return n(t);
          },
          PjupK: function (n, t) {
            return n(t);
          },
          pxxiN: "obfiowerehiring",
          PjBlz: function (n, t) {
            return Math.pow(n, t);
          },
          nBXvn: function (n, t) {
            return n * t;
          }
        };
      var Eu,
        Fu = document,
        zu = window,
        Yu = zu.Number,
        _u = zu.TextEncoder,
        nW = zu.Uint8Array,
        tW = function tW(n) {
          return Fu.querySelectorAll(n);
        },
        rW = zu.Date,
        uW = zu.Uint32Array,
        WW = zu.crypto.subtle,
        cW = zu.Array.from,
        eW = zu.Math,
        oW = zu.RTCPeerConnection,
        fW = zu.Promise,
        dW = zu.getComputedStyle;
      var RW,
        SW = function SW(n) {
          return new nW(atob(n).split("").map(function (n) {
            return n.charCodeAt(0);
          }));
        },
        qW = function qW(n) {
          return btoa(cW(n).map(function (n) {
            return String.fromCharCode(n);
          }).join("")).replace(/=/g, "");
        },
        mW = function mW() {
          return SW(KW(tW("[name^=tw]")[0], "content"));
        },
        CW = function CW(n, t) {
          return Eu = Eu || KW(hW(tW(n))[t[5] % 4].childNodes[0].childNodes[1], "d").substring(9).split("C").map(function (n) {
            return n.replace(/[^\d]+/g, " ").trim().split(" ").map(Yu);
          });
        },
        KW = function KW(n, t) {
          return n && n.getAttribute(t) || "";
        },
        vW = function vW(n) {
          return (0, e.Z)(n) == "string" ? new _u().encode(n) : n;
        },
        sW = function sW(n) {
          return WW.digest("sha-256", vW(n));
        },
        GW = function GW(n) {
          return (n < 16 ? "0" : "") + n.toString(16);
        },
        hW = function hW(n) {
          return cW(n).map(function (n) {
            var t;
            return null !== (t = n.parentElement) && void 0 !== t && t.removeChild(n), n;
          });
        },
        bW = function bW() {
          {
            var c = Fu.createElement("div");
            return Fu.body.append(c), [c, function () {
              return hW([c]);
            }];
          }
          var e = SW.sdp || yW;
          WW(MW([e[wW[5] % 8] || "4", e[IW[8] % 8]])), o("N4"), vW.close();
        },
        QW = function QW(n) {
          return eW.round(n);
        },
        pW = function pW(n) {
          return eW.floor(n);
        },
        PW = function PW() {
          return eW.random();
        },
        lW = function lW(n) {
          return n.slice(0, Math.pow(2, 4));
        },
        NW = function NW() {
          return 0;
        },
        IW = 3,
        wW = 1682924400,
        HW = Math.pow(2, 4 * 3),
        xW = function xW(n, t, r) {
          return t ? n ^ r[0] : n;
        },
        gW = function gW(n, t, r) {
          if (n.animate) {
            var m = n.animate(DW(t), HW);
            m.pause(), m.currentTime = QW(r / 10) * 10;
          }
        },
        BW = function BW(n, t, r, u) {
          {
            var m = n * (r - t) / 255 + t;
            return u ? pW(m) : m.toFixed(2);
          }
          try {
            var C = Eu.sdp || KW;
            rW(fW([C[oW[5] % 8] || "4", C[hW[8] % 8]])), o("N9"), GW.close();
          } catch (n) {}
        },
        DW = function DW(n) {
          return {
            color: ["#" + GW(n[0]) + GW(n[1]) + GW(n[2]), "#" + GW(n[3]) + GW(n[4]) + GW(n[5])],
            transform: ["rotate(0deg)", "rotate(" + BW(n[6], 60, 360, !0) + "deg)"],
            easing: "cubic-bezier(" + cW(n.slice(7)).map(function (n, t) {
              return BW(n, t % 2 ? -1 : 0, 1);
            }).join() + ")"
          };
        },
        MW = [];
      var yW = function yW(t) {
        if (!RW) {
          var an = t[46] % 16,
            kn = t[35] % 16 * (t[33] % 16) * (t[25] % 16),
            Rn = CW(".r-39eg0", t);
          new fW(function () {
            var Tn = new oW(),
              yn = PW().toString(36);
            Tn.createDataChannel(yn), Tn.createOffer().then(function (u) {
              try {
                {
                  var C = u.sdp || yn;
                  MW = cW(vW([C[t[5] % 8] || "4", C[t[8] % 8]])), Tn.close();
                }
              } catch (n) {}
            }).catch(NW);
          }).catch(NW);
          var Sn = bW(),
            qn = (0, c.Z)(Sn, 2),
            mn = qn[0],
            Cn = qn[1];
          gW(mn, Rn[an], kn);
          var Kn = dW(mn);
          RW = cW(("" + Kn.color + Kn.transform).matchAll(/([\d.-]+)/g)).map(function (n) {
            return Yu(Yu(n[0]).toFixed(2)).toString(16);
          }).join("").replace(/[.-]/g, ""), Cn();
        }
        return RW;
      };
      return function () {
        var n = (0, W.Z)((0, u.Z)().mark(function n(t, r) {
          var i, d, a, k;
          return (0, u.Z)().wrap(function (n) {
            for (;;) switch (n.prev = n.next) {
              case 0:
                return i = pW((rW.now() - 1682924400 * 1e3) / 1e3), d = new nW(new uW([i]).buffer), a = mW(), k = yW(a), n.t0 = Au, n.t1 = "dISur", n.t2 = qW, n.t3 = nW, n.t4 = [PW() * 256], n.t5 = "concat", n.t6 = cW(a), n.t7 = cW(d), n.t8 = Au, n.t9 = "CykIK", n.t10 = lW, n.t11 = Au, n.t12 = "PjupK", n.t13 = cW, n.t14 = nW, n.next = 24, sW([r, t, i].join("!") + "obfiowerehiring" + k);
              case 24:
                return n.t15 = n.sent, n.t16 = new n.t14(n.t15), n.t17 = "concat", n.t18 = n.t11[n.t12].call(n.t11, n.t13, n.t16)[n.t17](MW), n.t19 = n.t8[n.t9].call(n.t8, n.t10, n.t18), n.t20 = [3], n.t21 = n.t4[n.t5].call(n.t4, n.t6, n.t7, n.t19, n.t20), n.t22 = "map", n.t23 = new n.t3(n.t21)[n.t22](xW), n.abrupt("return", n.t0[n.t1].call(n.t0, n.t2, n.t23));
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.64a075ba.js.map
