(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    6236: function (e, r, s) {
      Promise.resolve().then(s.bind(s, 7895));
    },
    7895: function (e, r, s) {
      "use strict";
      s.r(r),
        s.d(r, {
          default: function () {
            return b;
          },
        });
      var t = s(3827),
        a = s(4090),
        n = (e) =>
          (0, t.jsx)("div", {
            style: {
              overflowY: "scroll",
              border: "5px solid black",
              height: "800px",
            },
            children: e.children,
          }),
        o = (e) => {
          let { searchChange: r } = e;
          return (0, t.jsx)("div", {
            className: "pa2",
            children: (0, t.jsx)("input", {
              "aria-label": "search robots",
              className: "pa3 ba b--green bg-lightest-blue",
              type: "search",
              name: "searchBox",
              placeholder: "search robots",
              onChange: r,
            }),
          });
        };
      class c extends a.Component {
        static getDerivedStateFromError(e) {
          return { hasError: !0 };
        }
        componentDidCatch(e, r) {
          this.setState({ hasError: !0 });
        }
        render() {
          return this.state.hasError
            ? (0, t.jsx)(t.Fragment, {
                children: (0, t.jsx)("h1", {
                  className: "f1",
                  children: "Ooops. Something weird happened.",
                }),
              })
            : this.props.children;
        }
        constructor(...e) {
          super(...e), (this.state = { hasError: !1 });
        }
      }
      var l = (e) => {
          let { robot: r } = e,
            { name: s, email: a, id: n } = r;
          return (0, t.jsxs)("div", {
            className: "bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",
            children: [
              (0, t.jsx)("img", {
                alt: "robots",
                src: "https://robohash.org/".concat(n, ".png?size=200x200"),
                width: "200",
                height: "200",
              }),
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("h2", { className: "f5", children: s }),
                  (0, t.jsx)("p", { children: a }),
                ],
              }),
            ],
          });
        },
        h = (e) => {
          let { error: r, robots: s } = e;
          if (0 !== r.length) throw Error();
          return (0, t.jsx)("div", {
            children: s.map((e) => (0, t.jsx)(l, { robot: e }, e.id)),
          });
        },
        i = s(317),
        d = s.n(i),
        u = () =>
          (0, t.jsx)("h1", {
            className: "".concat(d().className, " f1"),
            children: "My Robofriends",
          });
      function b() {
        let [e, r] = (0, a.useState)([]),
          [s, l] = (0, a.useState)(""),
          [i, d] = (0, a.useState)("");
        if (
          ((0, a.useEffect)(() => {
            fetch("https://jsonplaceholder.typicode.com/users")
              .then((e) => e.json())
              .then((e) => r(e))
              .catch((e) => d(e));
          }, []),
          0 === e.length)
        )
          return (0, t.jsx)("h1", { children: "Loading" });
        {
          let r = e.filter((e) =>
            e.name.toLowerCase().includes(s.toLowerCase()),
          );
          return (0, t.jsxs)("div", {
            className: "tc",
            children: [
              (0, t.jsx)(u, {}),
              (0, t.jsx)(o, {
                searchChange: (e) => {
                  l(e.target.value);
                },
              }),
              (0, t.jsx)(n, {
                children: (0, t.jsx)(c, {
                  children: (0, t.jsx)(h, { robots: r, error: i }),
                }),
              }),
            ],
          });
        }
      }
    },
    317: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__myFont_3b2227', '__myFont_Fallback_3b2227'",
          fontStyle: "normal",
        },
        className: "__className_3b2227",
        variable: "__variable_3b2227",
      };
    },
  },
  function (e) {
    e.O(0, [971, 69, 744], function () {
      return e((e.s = 6236));
    }),
      (_N_E = e.O());
  },
]);
