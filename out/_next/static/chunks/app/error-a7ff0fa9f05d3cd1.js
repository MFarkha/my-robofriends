(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [601],
  {
    2196: function (n, e, r) {
      Promise.resolve().then(r.bind(r, 2293));
    },
    2293: function (n, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          default: function () {
            return c;
          },
        });
      var t = r(3827),
        u = r(4090);
      function c(n) {
        let { error: e } = n;
        return (
          (0, u.useEffect)(() => {
            console.error(e);
          }, [e]),
          (0, t.jsx)("div", {
            children: (0, t.jsx)("h2", { children: "Something went wrong!" }),
          })
        );
      }
    },
  },
  function (n) {
    n.O(0, [971, 69, 744], function () {
      return n((n.s = 2196));
    }),
      (_N_E = n.O());
  },
]);
