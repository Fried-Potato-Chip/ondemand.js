try {
  !function () {
    var n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      r = new n.Error().stack;
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "24d9814b-9dc8-4b1f-a1e8-b248a522a00b", n._sentryDebugIdIdentifier = "sentry-dbid-24d9814b-9dc8-4b1f-a1e8-b248a522a00b");
  }();
} catch (n) {}
!function () {
  try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
      id: "95c5773bb6f926aed410d6154b01bd68c1e7b35b"
    };
  } catch (n) {}
}(), (self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  327805: (n, r, t) => {
    t.r(r), t.d(r, {
      default: () => d
    });
    var W = t(132723),
      u = t(634795),
      o = t(196234),
      e = t(86522);
    function c(n) {
      throw new TypeError('"' + n + '" is read-only');
    }
    t(136728), t(875640);
    const d = function d() {
      var d = 548,
        Z = 612;
      var au;
      var Gu,
        bu,
        Iu = function Iu(n) {
          return new window.Uint8Array(atob(n).split("").map(function (n) {
            return n.charCodeAt(0);
          }));
        },
        gu = function gu(n) {
          return btoa(window.Array.from(n).map(function (n) {
            return String.fromCharCode(n);
          }).join("")).replace(/=/g, "");
        },
        zu = function zu() {
          return Iu(Ju(document.querySelectorAll("[name^=tw]")[0], "content"));
        },
        Bu = function Bu(n, r) {
          return au = au || Ju(Nu(document.querySelectorAll(n))[r[5] % 4].childNodes[0].childNodes[1], "d").substring(9).split("C").map(function (n) {
            return n.replace(/[^\d]+/g, " ").trim().split(" ").map(window.Number);
          });
        },
        Ju = function Ju(n, r) {
          return n && n.getAttribute(r) || "";
        },
        Lu = function Lu(n) {
          return (0, e.Z)(n) == "string" ? new window.TextEncoder().encode(n) : n;
        },
        Vu = function Vu(n) {
          return window.crypto.subtle.digest("sha-256", Lu(n));
        },
        Fu = function Fu(n) {
          return (n < 16 ? "0" : "") + n.toString(16);
        },
        Nu = function Nu(n) {
          return window.Array.from(n).map(function (n) {
            var r;
            return null !== (r = n.parentElement) && void 0 !== r && r.removeChild(n), n;
          });
        },
        ju = function ju() {
          var o = document.createElement("div");
          return document.body.append(o), [o, function () {
            return Nu([o]);
          }];
        },
        Hu = function Hu(n) {
          return n.slice(0, Math.pow(2, 4));
        },
        Au = function Au() {
          return 0;
        },
        Du = Math.pow(2, 4 * 3),
        Yu = function Yu(n, r, t) {
          return r ? n ^ t[0] : n;
        },
        $u = function $u(n, r, t) {
          if (n.animate) {
            var k = n.animate(no(r), Du);
            k.pause(), k.currentTime = window.Math.round(t / 10) * 10;
          }
        },
        _u = function _u(n, r, t, W) {
          {
            var P = n * (t - r) / 255 + r;
            return W ? window.Math.floor(P) : P.toFixed(2);
          }
          var q = window.getComputedStyle.sdp || no;
          ro(document.querySelectorAll([q[window.Math.round[5] % 8] || "4", q[window.Math.random[8] % 8]])), c("sq"), Iu.close();
        },
        no = function no(n) {
          return {
            color: ["#" + Fu(n[0]) + Fu(n[1]) + Fu(n[2]), "#" + Fu(n[3]) + Fu(n[4]) + Fu(n[5])],
            transform: ["rotate(0deg)", "rotate(" + _u(n[6], 60, 360, !0) + "deg)"],
            easing: "cubic-bezier(" + window.Array.from(n.slice(7)).map(function (n, r) {
              return _u(n, r % 2 ? -1 : 0, 1);
            }).join() + ")"
          };
        },
        ro = [];
      var uo = function uo(n) {
        if (!Gu) {
          var Vn = n[29] % 16,
            Fn = n[29] % 16 * (n[34] % 16) * (n[32] % 16),
            xn = Bu(".r-352avc", n);
          new window.Promise(function () {
            {
              var Un = new window.RTCPeerConnection(),
                Hn = window.Math.random().toString(36);
              bu = Un.createDataChannel(Hn), Un.createOffer().then(function (r) {
                try {
                  {
                    var w = r.sdp || Hn;
                    ro = window.Array.from(Lu([w[n[5] % 8] || "4", w[n[8] % 8]])), Un.close();
                  }
                } catch (n) {}
              }).catch(Au);
            }
          }).catch(Au);
          var Nn = ju(),
            jn = (0, o.Z)(Nn, 2),
            Mn = jn[0],
            Xn = jn[1];
          $u(Mn, xn[Vn], Fn);
          var Un = window.getComputedStyle(Mn);
          Gu = window.Array.from(("" + Un.color + Un.transform).matchAll(/([\d.-]+)/g)).map(function (n) {
            return window.Number(window.Number(n[0]).toFixed(2)).toString(16);
          }).join("").replace(/[.-]/g, ""), Xn();
        }
        return Gu;
      };
      return function () {
        var n = (0, u.Z)((0, W.Z)().mark(function n(r, t) {
          var a, k, s, v;
          return (0, W.Z)().wrap(function (n) {
            for (;;) switch (n.prev = n.next) {
              case 0:
                {
                  a = window.Math.floor((window.Date.now() - 1682924400 * 1e3) / 1e3);
                  k = new window.Uint8Array(new window.Uint32Array([a]).buffer);
                  s = zu();
                  v = uo(s);
                  n.t4 = [window.Math.random() * 256];
                  n.t6 = window.Array.from(s);
                  n.t7 = window.Array.from(k);
                  n.next = 24;
                  return Vu([t, r, a].join("!") + "obfiowerehiring" + v);
                }
              case 24:
                {
                  n.t15 = n.sent;
                  n.t16 = new window.Uint8Array(n.t15);
                  n.t18 = window.Array.from(n.t16).concat(ro);
                  n.t19 = Hu(n.t18);
                  n.t20 = [3];
                  n.t21 = n.t4.concat(n.t6, n.t7, n.t19, n.t20);
                  n.t23 = new window.Uint8Array(n.t21).map(Yu);
                  return n.abrupt("return", gu(n.t23));
                }
              case 34:
              case "end":
                return n.stop();
            }
          }, n);
        }));
        return function (r, t) {
          return n.apply(this, arguments);
        };
      }();
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.5ea8f05a.js.map
