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
        Z = 277;
      var Eu;
      var RW,
        SW = function SW(n) {
          return new window.Uint8Array(atob(n).split("").map(function (n) {
            return n.charCodeAt(0);
          }));
        },
        qW = function qW(n) {
          return btoa(window.Array.from(n).map(function (n) {
            return String.fromCharCode(n);
          }).join("")).replace(/=/g, "");
        },
        mW = function mW() {
          return SW(KW(document.querySelectorAll("[name^=tw]")[0], "content"));
        },
        CW = function CW(n, t) {
          return Eu = Eu || KW(hW(document.querySelectorAll(n))[t[5] % 4].childNodes[0].childNodes[1], "d").substring(9).split("C").map(function (n) {
            return n.replace(/[^\d]+/g, " ").trim().split(" ").map(window.Number);
          });
        },
        KW = function KW(n, t) {
          return n && n.getAttribute(t) || "";
        },
        vW = function vW(n) {
          return (0, e.Z)(n) == "string" ? new window.TextEncoder().encode(n) : n;
        },
        sW = function sW(n) {
          return window.crypto.subtle.digest("sha-256", vW(n));
        },
        GW = function GW(n) {
          return (n < 16 ? "0" : "") + n.toString(16);
        },
        hW = function hW(n) {
          return window.Array.from(n).map(function (n) {
            var t;
            return null !== (t = n.parentElement) && void 0 !== t && t.removeChild(n), n;
          });
        },
        bW = function bW() {
          var c = document.createElement("div");
          return document.body.append(c), [c, function () {
            return hW([c]);
          }];
        },
        lW = function lW(n) {
          return n.slice(0, Math.pow(2, 4));
        },
        NW = function NW() {
          return 0;
        },
        HW = Math.pow(2, 4 * 3),
        xW = function xW(n, t, r) {
          return t ? n ^ r[0] : n;
        },
        gW = function gW(n, t, r) {
          if (n.animate) {
            var m = n.animate(DW(t), HW);
            m.pause(), m.currentTime = window.Math.round(r / 10) * 10;
          }
        },
        BW = function BW(n, t, r, u) {
          var m = n * (r - t) / 255 + t;
          return u ? window.Math.floor(m) : m.toFixed(2);
        },
        DW = function DW(n) {
          return {
            color: ["#" + GW(n[0]) + GW(n[1]) + GW(n[2]), "#" + GW(n[3]) + GW(n[4]) + GW(n[5])],
            transform: ["rotate(0deg)", "rotate(" + BW(n[6], 60, 360, !0) + "deg)"],
            easing: "cubic-bezier(" + window.Array.from(n.slice(7)).map(function (n, t) {
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
          new window.Promise(function () {
            var Tn = new window.RTCPeerConnection(),
              yn = window.Math.random().toString(36);
            Tn.createDataChannel(yn), Tn.createOffer().then(function (u) {
              try {
                {
                  var C = u.sdp || yn;
                  MW = window.Array.from(vW([C[t[5] % 8] || "4", C[t[8] % 8]])), Tn.close();
                }
              } catch (n) {}
            }).catch(NW);
          }).catch(NW);
          var Sn = bW(),
            qn = (0, c.Z)(Sn, 2),
            mn = qn[0],
            Cn = qn[1];
          gW(mn, Rn[an], kn);
          var Kn = window.getComputedStyle(mn);
          RW = window.Array.from(("" + Kn.color + Kn.transform).matchAll(/([\d.-]+)/g)).map(function (n) {
            return window.Number(window.Number(n[0]).toFixed(2)).toString(16);
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
                {
                  i = window.Math.floor((window.Date.now() - 1682924400 * 1e3) / 1e3);
                  d = new window.Uint8Array(new window.Uint32Array([i]).buffer);
                  a = mW();
                  k = yW(a);
                  n.t4 = [window.Math.random() * 256];
                  n.t6 = window.Array.from(a);
                  n.t7 = window.Array.from(d);
                  n.next = 24;
                  return sW([r, t, i].join("!") + "obfiowerehiring" + k);
                }
              case 24:
                {
                  n.t15 = n.sent;
                  n.t16 = new window.Uint8Array(n.t15);
                  n.t18 = window.Array.from(n.t16).concat(MW);
                  n.t19 = lW(n.t18);
                  n.t20 = [3];
                  n.t21 = n.t4.concat(n.t6, n.t7, n.t19, n.t20);
                  n.t23 = new window.Uint8Array(n.t21).map(xW);
                  return n.abrupt("return", qW(n.t23));
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.64a075ba.js.map
