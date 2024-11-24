import {
  $ as F,
  O as b,
  Y as w,
  c as s,
  da as I,
  h as p,
  ia as C,
  l as g,
  n as h,
  p as U,
  q as v,
  t as r,
  u as y,
  ua as R,
  w as c,
  wa as d,
  x as n,
  y as x,
  za as A,
} from "./chunk-ORFE4GHC.mjs";
var z = { fJpxXU9q9: { hover: !0 } },
  N = "framer-vTZgS",
  _ = { fJpxXU9q9: "framer-v-1326o0m" };
function Y(t, ...e) {
  let o = {};
  return e?.forEach((a) => a && Object.assign(o, t[a])), o;
}
var G = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  P = ({ value: t, children: e }) => {
    let o = g(c),
      a = t ?? o.transition,
      f = U(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(c.Provider, { value: f, children: e });
  },
  W = n.create(s),
  j = ({ height: t, id: e, width: o, ...a }) => ({ ...a }),
  H = (t, e) =>
    t.layoutDependency ? e.join("-") + t.layoutDependency : e.join("-"),
  J = p(function (t, e) {
    let { activeLocale: o, setLocale: a } = b(),
      { style: f, className: S, layoutId: l, variant: T, ...D } = j(t),
      {
        baseVariant: E,
        classNames: Z,
        clearLoadingGesture: K,
        gestureHandlers: B,
        gestureVariant: X,
        isLoading: M,
        setGestureState: O,
        setVariant: Q,
        variants: u,
      } = R({
        defaultVariant: "fJpxXU9q9",
        enabledGestures: z,
        variant: T,
        variantClassNames: _,
      }),
      i = H(t, u),
      V = v(null),
      k = h(),
      L = [],
      $ = F();
    return r(x, {
      id: l ?? k,
      children: r(W, {
        animate: u,
        initial: !1,
        children: r(P, {
          value: G,
          children: r(C, {
            href: { webPageId: "augiA20Il" },
            nodeId: "fJpxXU9q9",
            children: y(n.a, {
              ...D,
              ...B,
              className: `${w(N, ...L, "framer-1326o0m", S, Z)} framer-22n4vz`,
              "data-framer-name": "Variant 1",
              layoutDependency: i,
              layoutId: "fJpxXU9q9",
              ref: e ?? V,
              style: {
                "--border-bottom-width": "0px",
                "--border-color": "rgba(0, 0, 0, 0)",
                "--border-left-width": "0px",
                "--border-right-width": "0px",
                "--border-style": "solid",
                "--border-top-width": "0px",
                borderBottomLeftRadius: 22,
                borderBottomRightRadius: 22,
                borderTopLeftRadius: 22,
                borderTopRightRadius: 22,
                ...f,
              },
              variants: {
                "fJpxXU9q9-hover": {
                  "--border-bottom-width": "1.5px",
                  "--border-color":
                    "var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251))",
                  "--border-left-width": "1.5px",
                  "--border-right-width": "1.5px",
                  "--border-style": "solid",
                  "--border-top-width": "1.5px",
                },
              },
              ...Y(
                {
                  "fJpxXU9q9-hover": {
                    "data-border": !0,
                    "data-framer-name": void 0,
                  },
                },
                E,
                X
              ),
              children: [
                r(n.div, {
                  className: "framer-15iv8ti",
                  layoutDependency: i,
                  layoutId: "hWIIXGSXd",
                  style: {
                    backgroundColor: "rgb(255, 255, 255)",
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  },
                  children: r(d, {
                    __fromCanvasComponent: !0,
                    children: r(s, {
                      children: r(n.p, {
                        style: {
                          "--font-selector": "SW50ZXItQm9sZA==",
                          "--framer-font-family":
                            '"Inter", "Inter Placeholder", sans-serif',
                          "--framer-font-size": "14px",
                          "--framer-font-weight": "700",
                          "--framer-line-height": "0.9em",
                        },
                        children: "<-",
                      }),
                    }),
                    className: "framer-mqrbdv",
                    fonts: ["Inter-Bold"],
                    layoutDependency: i,
                    layoutId: "b9fi6l5E2",
                    style: {
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                }),
                r(d, {
                  __fromCanvasComponent: !0,
                  children: r(s, {
                    children: r(n.p, {
                      style: {
                        "--font-selector": "SW50ZXItTWVkaXVt",
                        "--framer-font-family":
                          '"Inter", "Inter Placeholder", sans-serif',
                        "--framer-font-size": "13px",
                        "--framer-font-weight": "500",
                        "--framer-line-height": "0.9em",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                      },
                      children: "Return Home",
                    }),
                  }),
                  className: "framer-1t5kzwc",
                  fonts: ["Inter-Medium"],
                  layoutDependency: i,
                  layoutId: "bZ4p4trWv",
                  style: {
                    "--extracted-r6o4lv": "rgb(255, 255, 255)",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  q = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-vTZgS.framer-22n4vz, .framer-vTZgS .framer-22n4vz { display: block; }",
    ".framer-vTZgS.framer-1326o0m { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: 32px; justify-content: center; overflow: hidden; padding: 0px 18px 0px 5px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-vTZgS .framer-15iv8ti { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 5px; position: relative; width: min-content; }",
    ".framer-vTZgS .framer-mqrbdv, .framer-vTZgS .framer-1t5kzwc { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-vTZgS.framer-1326o0m, .framer-vTZgS .framer-15iv8ti { gap: 0px; } .framer-vTZgS.framer-1326o0m > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } .framer-vTZgS.framer-1326o0m > :first-child { margin-left: 0px; } .framer-vTZgS.framer-1326o0m > :last-child { margin-right: 0px; } .framer-vTZgS .framer-15iv8ti > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-vTZgS .framer-15iv8ti > :first-child { margin-top: 0px; } .framer-vTZgS .framer-15iv8ti > :last-child { margin-bottom: 0px; } }",
    ".framer-vTZgS.framer-v-1326o0m.hover.framer-1326o0m { gap: 8px; padding: 0px 10px 0px 5px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-vTZgS.framer-v-1326o0m.hover.framer-1326o0m { gap: 0px; } .framer-vTZgS.framer-v-1326o0m.hover.framer-1326o0m > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-vTZgS.framer-v-1326o0m.hover.framer-1326o0m > :first-child { margin-left: 0px; } .framer-vTZgS.framer-v-1326o0m.hover.framer-1326o0m > :last-child { margin-right: 0px; } }",
    '.framer-vTZgS[data-border="true"]::after, .framer-vTZgS [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  m = I(J, q, "framer-vTZgS"),
  se = m;
m.displayName = "Button \xB7 Return";
m.defaultProps = { height: 32, width: 139.5 };
A(
  m,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "/content/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "/content/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "/content/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "/content/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "/content/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "/content/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "/content/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "/content/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "/content/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "/content/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "/content/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "/content/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "/content/assets/d3tHnaQIAeqiE5hGcRw4mmgWYU.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "/content/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2",
          weight: "500",
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 }
);
export { se as a };
//# sourceMappingURL=chunk-TFSOW3GP.mjs.map
