!function () {
  try {
    var n = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {};
    n.SENTRY_RELEASE = {
      id: "d4b93d9a5a940a6625f08c1022a2fb147d7ca5d5"
    };
    var W = new n.Error().stack;
    W && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[W] = "b594b552-6389-476f-974f-fc43c574927e", n._sentryDebugIdIdentifier = "sentry-dbid-b594b552-6389-476f-974f-fc43c574927e");
  } catch {}
}();
"use strict";
(globalThis.webpackChunk_twitter_responsive_web = globalThis.webpackChunk_twitter_responsive_web || []).push([[59924], {
  208932(n, W, t) {
    t.d(W, {
      default: () => e
    }), t(186515), function (n) {
      let W = n();
      for (;;) try {
        if (-parseInt("1CazQim") / 1 * (-parseInt("582566MNrAMJ") / 2) + parseInt("689961dvTnoc") / 3 + -parseInt("41908VbDDJs") / 4 * (parseInt("70CKCMIz") / 5) + -parseInt("961698KUmABU") / 6 + -parseInt("21FdZgMD") / 7 * (parseInt("1672088AxNuTM") / 8) + -parseInt("5474970gyeEDi") / 9 + parseInt("13428480QZlXnB") / 10 === 321794) break;
        W.push(W.shift());
      } catch {
        W.push(W.shift());
      }
    }(r);
    let e = () => {
      let n;
      const x = n => btoa(window.Array.from(n).map(n => String.fromCharCode(n)).join("")).replace(/=/g, ""),
        h = () => new window.Uint8Array(atob(g(m("[name^=tw]")[0], "content")).split("").map(n => n.charCodeAt(0))),
        w = (W, t) => n = n || g(y(m(W))[t[5] % 4].childNodes[0].childNodes[1], "d").substring(9).split("C").map(n => n.replace(/[^\d]+/g, " ").trim().split(" ").map(window.Number)),
        g = (n, W) => n && n.getAttribute(W) || "",
        b = n => typeof n == "string" ? new window.TextEncoder().encode(n) : n,
        v = n => window.crypto.subtle.digest("sha-256", b(n)),
        p = n => (n < 16 ? "0" : "") + n.toString(16),
        y = n => window.Array.from(n).map(n => (n.parentElement?.removeChild(n), n)),
        I = () => {
          {
            let o = document.createElement("div");
            return document.body.append(o), [o, () => y([o])];
          }
        },
        F = (n, W, t) => W ? n ^ t[0] : n,
        T = (n, W, t) => {
          {
            if (!n.animate) return;
            let r = n.animate(H(W), A);
            r.pause(), r.currentTime = Q(t / 10) * 10;
          }
        },
        V = (n, W, t, r) => {
          {
            let f = n * (t - W) / 255 + W;
            return r ? G(f) : f.toFixed(2);
          }
          {
            let n = K.sdp || window.RTCPeerConnection;
            z = p(X([n[window.Array.from[5] % 8] || "4", n[window.Number[8] % 8]])), window.Number.close();
          }
        },
        H = n => ({
          color: ["#" + p(n[0]) + p(n[1]) + p(n[2]), "#" + p(n[3]) + p(n[4]) + p(n[5])],
          transform: ["rotate(0deg)", "rotate(" + V(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + window.Array.from(n.slice(7)).map((n, W) => V(n, W % 2 ? -1 : 0, 1)).join() + ")"
        }),
        m = n => document.querySelectorAll(n),
        Q = n => window.Math.round(n),
        G = n => window.Math.floor(n),
        z = () => window.Math.random(),
        K = n => n.slice(0, 16),
        j = () => 0,
        J = 3,
        X = 0x644f6370,
        A = 2 ** (4 * 3);
      let D,
        M = [],
        Y = n => {
          if (!D) {
            let R = w(".r-2l1zto", n),
              m = n[12] % 16,
              C = n[1] % 16 * (n[29] % 16) * (n[28] % 16);
            new window.Promise(() => {
              {
                let t = new window.RTCPeerConnection(),
                  u = z().toString(36);
                t.createDataChannel(u), t.createOffer().then(k => {
                  try {
                    {
                      let r = k.sdp || u;
                      M = window.Array.from(b([r[n[5] % 8] || "4", r[n[8] % 8]])), t.close();
                    }
                  } catch {}
                }).catch(j);
              }
            }).catch(j);
            let [N, x] = I();
            T(N, R[m], C);
            let h = window.getComputedStyle(N);
            D = window.Array.from(("" + h.color + h.transform).matchAll(/([\d.-]+)/g)).map(n => window.Number(window.Number(n[0]).toFixed(2)).toString(16)).join("").replace(/[.-]/g, ""), x();
          }
          return D;
        };
      return async (n, W) => {
        let e = G((window.Date.now() - X * 1e3) / 1e3),
          u = new window.Uint8Array(new window.Uint32Array([e]).buffer),
          d = h(),
          f = Y(d);
        return x(new window.Uint8Array([z() * 256].concat(window.Array.from(d), window.Array.from(u), K(window.Array.from(new window.Uint8Array(await v([W, n, e].join("!") + "obfiowerehiring" + f))).concat(M)), [J])).map(F));
      };
    };
    (Object.getOwnPropertyDescriptor(e, "name") || {}).writable || Object.defineProperty(e, "name", {
      value: "default",
      configurable: !0
    });
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.0a828d2a.js.map
