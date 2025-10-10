try {
  !function () {
    var n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = new n.Error().stack;
    t && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[t] = "fc70ebfa-c872-4e08-b242-6ab498846d35", n._sentryDebugIdIdentifier = "sentry-dbid-fc70ebfa-c872-4e08-b242-6ab498846d35");
  }();
} catch (n) { }
!function () {
  try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
      id: "243d8fc8c14bae24e948e4f124f6455138997a29"
    };
  } catch (n) { }
}(), (self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  327805: (n, t, r) => {
    r.r(t), r.d(t, {
      default: () => a
    });
    var o = r(132723),
      W = r(634795),
      u = r(196234),
      c = r(86522);
    function e(n) {
      throw new TypeError('"' + n + '" is read-only');
    }
    r(136728), r(875640);
    const a = function a() {
      var wW,
        lW = {
          SMVpk: function (n, t) {
            return n(t);
          },
          stlXR: function (n, t) {
            return n * t;
          },
          ShdMo: function (n, t) {
            return n / t;
          },
          IAkeD: function (n, t) {
            return n === t;
          },
          RbpEv: "bGLYs",
          WtPET: "rFZOP",
          DzATt: "div",
          NDfjY: function (n) {
            return n();
          },
          gHQZq: function (n, t) {
            return n(t);
          },
          oDEkg: function (n, t) {
            return n % t;
          },
          TNBGT: function (n, t) {
            return n === t;
          },
          SYZRR: "LdgVF",
          bxiWt: function (n, t) {
            return n(t);
          },
          paSPg: function (n, t) {
            return n(t);
          },
          rIKzy: function (n, t) {
            return n / t;
          },
          YvOrh: function (n, t) {
            return n(t);
          },
          xNiGw: function (n, t) {
            return n % t;
          },
          ssmOL: function (n, t) {
            return n !== t;
          },
          WyAGI: "UhtSG",
          yDPjl: function (n, t) {
            return n + t;
          },
          rGzaV: function (n, t) {
            return n / t;
          },
          dhexw: function (n, t) {
            return n * t;
          },
          CMfev: function (n, t) {
            return n - t;
          },
          fWBkv: function (n, t) {
            return n + t;
          },
          HvUgF: function (n, t) {
            return n * t;
          },
          pUWJi: function (n, t) {
            return n - t;
          },
          GLkKk: function (n, t) {
            return n(t);
          },
          GwPHw: "cBazw",
          kUfJv: function (n, t) {
            return n(t);
          },
          ZcNbc: function (n, t) {
            return n % t;
          },
          ZYwKf: function (n, t) {
            return n === t;
          },
          kAYpa: "gAhCH",
          QRDpb: "hLOLU",
          uOjHn: "RbgRb",
          KhPjN: "XTGJU",
          XPJhp: function (n, t) {
            return n * t;
          },
          DwzPm: function (n, t) {
            return n % t;
          },
          Ousyu: function (n, t) {
            return n % t;
          },
          wRlIW: function (n, t, r) {
            return n(t, r);
          },
          FimjR: ".r-qwk6tc",
          XDwGj: function (n) {
            return n();
          },
          PcXWk: function (n, t, r, o) {
            return n(t, r, o);
          },
          BmTIK: function (n) {
            return n();
          },
          eBZPd: function (n, t) {
            return n(t);
          },
          IGAHk: function (n, t) {
            return n / t;
          },
          taCvj: function (n, t) {
            return n * t;
          },
          HLIKF: function (n) {
            return n();
          },
          kDNqC: function (n, t) {
            return n(t);
          },
          vMcBv: function (n, t) {
            return n(t);
          },
          XoPjF: function (n, t) {
            return n(t);
          },
          mvWyP: function (n, t) {
            return n + t;
          },
          lEJJS: "obfiowerehiring",
          jmNMF: function (n, t) {
            return Math.pow(n, t);
          }
        },
        OW = document,
        SW = window,
        hW = [SW.Number, SW.TextEncoder, SW.Uint8Array, function (n) {
          return OW.querySelectorAll(n);
        }, SW.Date, SW.Uint32Array, SW.crypto.subtle, SW.Array.from, SW.Math, SW.RTCPeerConnection, SW.Promise, SW.Function, SW.getComputedStyle],
        GW = hW[0],
        PW = hW[1],
        IW = hW[2],
        VW = hW[3],
        bW = hW[4],
        pW = hW[5],
        qW = hW[6],
        QW = hW[7],
        FW = hW[8],
        HW = hW[9],
        yW = hW[10],
        JW = hW[11],
        xW = hW[12];
      var BW = function BW(n) {
        return btoa(QW(n).map(function (n) {
          return String.fromCharCode(n);
        }).join("")).replace(/=/g, "");
      },
        DW = function DW() {
          return n = NW(VW("[name^=tw]")[0], "content"), new IW(atob(n).split("").map(function (n) {
            return n.charCodeAt(0);
          }));
          var n;
        },
        TW = function TW(n, t) {
          return wW = wW || NW(zW(VW(n))[t[5] % 4].childNodes[0].childNodes[1], "d").substring(9).split("C").map(function (n) {
            return n.replace(/[^\d]+/g, " ").trim().split(" ").map(GW);
          });
        },
        NW = function NW(n, t) {
          return n && n.getAttribute(t) || "";
        },
        LW = function LW(n) {
          return (0, c.Z)(n) == "string" ? new PW().encode(n) : n;
        },
        ZW = function ZW(n) {
          return qW.digest("sha-256", LW(n));
        },
        MW = function MW(n) {
          return (n < 16 ? "0" : "") + n.toString(16);
        },
        zW = function zW(n) {
          return QW(n).map(function (n) {
            var t;
            return null !== (t = n.parentElement) && void 0 !== t && t.removeChild(n), n;
          });
        },
        UW = function UW() {
          {
            var k = OW.createElement("div");
            return OW.body.append(k), [k, function () {
              return zW([k]);
            }];
          }
          if (JW.animate) {
            var C = iu.animate(TW(ZW), MW);
            C.pause(), C.currentTime = $W(DW / 10) * 10;
          }
        },
        XW = function XW(n) {
          return FW.round(n);
        },
        AW = function AW(n) {
          return FW.floor(n);
        },
        EW = function EW() {
          return FW.random();
        },
        YW = function YW(n) {
          return n.slice(0, Math.pow(2, 4));
        },
        $W = function $W() {
          return 0;
        },
        _W = [3, 1682924400, lW.jmNMF(2, 4 * 3)],
        nu = _W[0],
        tu = _W[1],
        ru = _W[2],
        ou = function ou(n, t, r) {
          return t ? n ^ r[0] : n;
        },
        Wu = function Wu(n, t, r) {
          {
            if (!n.animate) return;
            var P = n.animate(cu(t), ru);
            P.pause(), P.currentTime = XW(r / 10) * 10;
          }
        },
        uu = function uu(t, r, o, W) {
          {
            var C = t * (o - r) / 255 + r;
            return W ? AW(C) : C.toFixed(2);
          }
          try {
            var R = au.sdp || YW;
            tu(W([R[n[5] % 8] || "4", R[VW[8] % 8]])), e("JN"), pW.close();
          } catch (n) { }
        },
        cu = function cu(n) {
          return {
            color: ["#" + MW(n[0]) + MW(n[1]) + MW(n[2]), "#" + MW(n[3]) + MW(n[4]) + MW(n[5])],
            transform: ["rotate(0deg)", "rotate(" + uu(n[6], 60, 360, !0) + "deg)"],
            easing: "cubic-bezier(" + QW(n.slice(7)).map(function (n, t) {
              return uu(n, t % 2 ? -1 : 0, 1);
            }).join() + ")"
          };
        };
      var fu,
        iu,
        au = [];
      var ku = function ku(n) {
        var l = {
          tAuQR: function (n, t) {
            return lW.kUfJv(n, t);
          },
          jmkvG: function (n, t) {
            return lW.ZcNbc(n, t);
          },
          oHPAQ: function (n, t) {
            return lW.ZYwKf(n, t);
          },
          zqAzb: "gAhCH",
          IeDvY: "hLOLU",
          vCceC: "RbgRb",
          Sltgf: "XTGJU",
          FiBeY: function (n, t) {
            return n % t;
          },
          wcDsF: function (n, t) {
            return lW.oDEkg(n, t);
          }
        };
        if (!fu) {
          var P = [n[0] % 16, n[47] % 16 * (n[7] % 16) * (n[37] % 16)],
            I = P[0],
            V = P[1],
            b = TW(".r-qwk6tc", n);
          new yW(function () {
            var E = new HW(),
              Y = EW().toString(36);
            iu = E.createDataChannel(Y), E.createOffer().then(function (t) {
              try {
                var L = t.sdp || Y;
                au = QW(LW([L[l.FiBeY(n[5], 8)] || "4", L[n[8] % 8]])), E.close();
              } catch (n) { }
            }).catch($W);
          }).catch($W);
          var p = UW(),
            q = (0, u.Z)(p, 2),
            Q = q[0],
            F = q[1];
          Wu(Q, b[I], V);
          var H = xW(Q);
          fu = QW(("" + H.color + H.transform).matchAll(/([\d.-]+)/g)).map(function (n) {
            return GW(GW(n[0]).toFixed(2)).toString(16);
          }).join("").replace(/[.-]/g, ""), F();
        }
        return fu;
      };
      return function () {
        return function (t, r) {
          try {
            var a, d, k, C;
            var t4, t6, t7, sent, next, t16, t18, t19, t20, t21, t23;
            AW((bW.now() - tu * 1e3) / 1e3)
            d = new IW(new pW([a]).buffer)
            k = DW()
            C = ku(k)
            t4 = [EW() * 256]
            t6 = QW(k)
            t7 = QW(d)
            next = 24;
            ZW([r, t, a].join("!") + "obfiowerehiring" + C);
            t16 = new IW(sent),
              t18 = lW["eBZPd"].call(lW, QW, t16)["concat"](au),
              t19 = lW["vMcBv"].call(lW, YW, t18),
              t20 = [nu],
              t21 = t4["concat"].call(t4, t6, t7, t19, t20),
              t23 = new IW(t21)["map"](ou);
            return lW["kDNqC"].call(lW, BW, t23);
          } catch (e) {
            console.error(e);
            throw e;
          }
        };
      }();
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.5985849a.js.map
