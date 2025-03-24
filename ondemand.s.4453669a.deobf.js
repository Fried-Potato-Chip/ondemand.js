"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => r
    });
    t(136728), t(875640);
    const r = () => {
      const sr = document,
        lr = n => document.querySelectorAll(n),
        Kr = window.RTCPeerConnection;
      let yr;
      const Jr = n => btoa(window.Array.from(n).map(n => String.fromCharCode(n)).join("")).replace(/=/g, ""),
        Lr = () => {
          return n = Nr(lr("[name^=tw]")[0], "content"), new window.Uint8Array(atob(n).split("").map(n => n.charCodeAt(0)));
          var n;
        },
        Hr = (n, W) => yr = yr || Nr(zr(lr(n))[W[5] % 4].childNodes[0].childNodes[1], "d").substring(9).split("C").map(n => n.replace(/[^\d]+/g, " ").trim().split(" ").map(window.Number)),
        Nr = (n, W) => n && n.getAttribute(W) || "",
        Tr = n => typeof n == "string" ? new window.TextEncoder().encode(n) : n,
        Xr = n => window.crypto.subtle.digest("sha-256", Tr(n)),
        xr = n => (n < 16 ? "0" : "") + n.toString(16),
        zr = n => window.Array.from(n).map(n => (n.parentElement?.removeChild(n), n)),
        Br = () => {
          const n = document.createElement("div");
          return document.body.append(n), [n, () => zr([n])];
        },
        pr = n => window.Math.round(n),
        Er = n => window.Math.floor(n),
        jr = () => window.Math.random(),
        Mr = n => n.slice(0, 16),
        Ur = () => 0,
        gr = 3,
        Fr = 1682924400,
        Zr = 2 ** (4 * 3),
        Yr = (n, W, t) => W ? n ^ t[0] : n,
        Ar = (n, W, t) => {
          if (!n.animate) return;
          const r = n.animate(_r(W), Zr);
          r.pause(), r.currentTime = pr(t / 10) * 10;
        },
        $r = (n, W, t, r) => {
          const o = n * (t - W) / 255 + W;
          return r ? Er(o) : o.toFixed(2);
        },
        _r = n => ({
          color: ["#" + xr(n[0]) + xr(n[1]) + xr(n[2]), "#" + xr(n[3]) + xr(n[4]) + xr(n[5])],
          transform: ["rotate(0deg)", "rotate(" + $r(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + window.Array.from(n.slice(7)).map((n, W) => $r(n, W % 2 ? -1 : 0, 1)).join() + ")"
        });
      let Wo,
        to,
        ro = [];
      const co = n => {
        if (!Wo) {
          const rn = n[11] % 16,
            on = n[31] % 16 * (n[41] % 16) * (n[2] % 16),
            cn = Hr(".r-5bvqu", n);
          new window.Promise(() => {
            {
              const W = new window.RTCPeerConnection(),
                r = jr().toString(36);
              to = W.createDataChannel(r), W.createOffer().then(t => {
                try {
                  {
                    const o = t.sdp || r;
                    ro = window.Array.from(Tr([o[n[5] % 8] || "4", o[n[8] % 8]])), W.close();
                  }
                } catch { }
              }).catch(Ur);
            }
          }).catch(Ur);
          const [un, en] = Br();
          Ar(un, cn[rn], on);
          const dn = window.getComputedStyle(un);
          Wo = window.Array.from(("" + dn.color + dn.transform).matchAll(/([\d.-]+)/g)).map(n => window.Number(window.Number(n[0]).toFixed(2)).toString(16)).join("").replace(/[.-]/g, ""), en();
        }
        return Wo;
      };
      return async (n, W) => {
        const e = Er((window.Date.now() - Fr * 1e3) / 1e3),
          i = new window.Uint8Array(new window.Uint32Array([e]).buffer),
          d = Lr(),
          f = co(d);
        return Jr(new window.Uint8Array([jr() * 256].concat(window.Array.from(d), window.Array.from(i), Mr(window.Array.from(new window.Uint8Array(await Xr([W, n, e].join("!") + "obfiowerehiring" + f))).concat(ro)), [gr])).map(Yr));
        var a, m;
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.4453669a.js.map
