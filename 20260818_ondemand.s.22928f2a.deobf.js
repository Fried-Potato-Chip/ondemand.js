!function () {
  try {
    var W = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {};
    W.SENTRY_RELEASE = {
      id: "08ef767c279a6f4818a1d613faa2e011f56edc06"
    };
    var n = new W.Error().stack;
    n && (W._sentryDebugIds = W._sentryDebugIds || {}, W._sentryDebugIds[n] = "4604963b-9c60-4c32-aebe-89302602801b", W._sentryDebugIdIdentifier = "sentry-dbid-4604963b-9c60-4c32-aebe-89302602801b");
  } catch {}
}();
"use strict";
(globalThis.webpackChunk_twitter_responsive_web = globalThis.webpackChunk_twitter_responsive_web || []).push([[59924], {
  208932(W, n, t) {
    t.d(n, {
      default: () => c
    }), t(186515), function (W) {
      let n = W();
      for (;;) try {
        if (-parseInt("127426vnEPZF") / 1 + -parseInt("32prThQD") / 2 * (-parseInt("29382uMSzdY") / 3) + -parseInt("1119180LNxVEZ") / 4 + parseInt("178145BGTIqG") / 5 + parseInt("1513056CHaUIW") / 6 + -parseInt("676858ZuDpGN") / 7 + parseInt("1619272NSjHuo") / 8 * (parseInt("9wJohxj") / 9) === 143003) break;
        n.push(n.shift());
      } catch {
        n.push(n.shift());
      }
    }(o);
    let c = () => {
      let W;
      const w = W => btoa(window.Array.from(W).map(W => String.fromCharCode(W)).join("")).replace(/=/g, ""),
        h = () => new window.Uint8Array(atob(g(l("[name^=tw]")[0], "content")).split("").map(W => W.charCodeAt(0))),
        N = (n, t) => W = W || g(y(l(n))[t[5] % 4].childNodes[0].childNodes[1], "d").substring(9).split("C").map(W => W.replace(/[^\d]+/g, " ").trim().split(" ").map(window.Number)),
        g = (W, n) => W && W.getAttribute(n) || "",
        T = W => typeof W == "string" ? new window.TextEncoder().encode(W) : W,
        G = W => window.crypto.subtle.digest("sha-256", T(W)),
        p = W => (W < 16 ? "0" : "") + W.toString(16),
        y = W => window.Array.from(W).map(W => (W.parentElement?.removeChild(W), W)),
        H = () => {
          let W = document.createElement("div");
          return document.body.append(W), [W, () => y([W])];
        },
        Z = (W, n, t) => n ? W ^ t[0] : W,
        X = (W, n, t) => {
          {
            if (!W.animate) return;
            let o = W.animate(F(n), z);
            o.pause(), o.currentTime = v(t / 10) * 10;
          }
        },
        M = (n, t, o, c) => {
          {
            let W = n * (o - t) / 255 + t;
            return c ? V(W) : W.toFixed(2);
          }
        },
        F = W => ({
          color: ["#" + p(W[0]) + p(W[1]) + p(W[2]), "#" + p(W[3]) + p(W[4]) + p(W[5])],
          transform: ["rotate(0deg)", "rotate(" + M(W[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + window.Array.from(W.slice(7)).map((W, n) => M(W, n % 2 ? -1 : 0, 1)).join() + ")"
        }),
        l = W => document.querySelectorAll(W),
        v = W => window.Math.round(W),
        V = W => window.Math.floor(W),
        j = () => window.Math.random(),
        K = W => W.slice(0, 16),
        L = () => 0,
        I = 3,
        J = 0x644f6370,
        z = 2 ** (4 * 3);
      let U,
        A = [],
        D,
        B = n => {
          if (!U) {
            let a = N(".r-2cz2ju", n),
              d = n[21] % 16,
              i = n[40] % 16 * (n[11] % 16) * (n[37] % 16);
            new window.Promise(() => {
              {
                let t = new window.RTCPeerConnection(),
                  o = j().toString(36);
                D = t.createDataChannel(o), t.createOffer().then(r => {
                  let l = {};
                  if (l.VVbtE = "div", "AGiVq" !== "obOeM") try {
                    {
                      let W = r.sdp || o;
                      A = window.Array.from(T([W[n[5] % 8] || "4", W[n[8] % 8]])), t.close();
                    }
                  } catch {} else {
                    let t = d.sdp || D;
                    W = z(M([t[T[5] % 8] || "4", t[n[8] % 8]])), H.close();
                  }
                }).catch(L);
              }
            }).catch(L);
            let [P, S] = H();
            X(P, a[d], i);
            let O = window.getComputedStyle(P);
            U = window.Array.from(("" + O.color + O.transform).matchAll(/([\d.-]+)/g)).map(W => window.Number(window.Number(W[0]).toFixed(2)).toString(16)).join("").replace(/[.-]/g, ""), S();
          }
          return U;
        };
      return async (W, n) => {
        let o = V((window.Date.now() - J * 1e3) / 1e3),
          e = new window.Uint8Array(new window.Uint32Array([o]).buffer),
          u = h(),
          d = B(u);
        return w(new window.Uint8Array([j() * 256].concat(window.Array.from(u), window.Array.from(e), K(window.Array.from(new window.Uint8Array(await G([n, W, o].join("!") + "obfiowerehiring" + d))).concat(A)), [I])).map(Z));
      };
    };
    (Object.getOwnPropertyDescriptor(c, "name") || {}).writable || Object.defineProperty(c, "name", {
      value: "default",
      configurable: !0
    });
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.22928f2a.js.map
