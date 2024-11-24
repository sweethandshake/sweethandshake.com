import { a as V, b as C } from "./chunk-DI6Q5UOT.mjs";
import { a as k } from "./chunk-TFSOW3GP.mjs";
import "./chunk-42U43NKG.mjs";
import {
  Aa as w,
  O as D,
  R as F,
  U as l,
  X as Y,
  Y as U,
  Z as X,
  aa as h,
  ba as u,
  c as x,
  da as Z,
  ea as j,
  fa as Q,
  h as A,
  ka as y,
  m as W,
  n as N,
  o as z,
  q as E,
  ra as G,
  t as e,
  u as n,
  wa as L,
  x as b,
  y as q,
  za as M,
} from "./chunk-ORFE4GHC.mjs";
import "./chunk-JR5VT52U.mjs";
import { a as S } from "./chunk-BRRKLX62.mjs";
import "./chunk-GTJ53YBR.mjs";
import "./chunk-RIUMFBNJ.mjs";
function r(v) {
  let {
      colors: i,
      radius: m,
      randomStart: p,
      animOptions: d,
      animRepeat: o,
      animPause: g,
    } = v,
    f = i;
  return (
    i.push(i[0]),
    p &&
      ((f = i
        .map((c) => ({ value: c, sort: Math.random() }))
        .sort((c, s) => c.sort - s.sort)
        .map(({ value: c }) => F.toHslString(F(c)))),
      f.push(f[0])),
    e(b.div, {
      style: {
        width: "100%",
        height: "100%",
        backgroundColor: f[0],
        borderRadius: m,
        willChange: "background-color",
      },
      animate: { backgroundColor: [...f] },
      transition: {
        ...d,
        repeat: o && 1 / 0,
        repeatType: o && "loop",
        repeatDelay: g,
      },
    })
  );
}
r.defaultProps = {
  radius: 0,
  colors: ["#0CF", "#2DD", "#F64", "#99F"],
  randomStart: !1,
  animOptions: { type: "tween", ease: [0, 0, 1, 1], duration: 1 },
  animRepeat: !0,
  animPause: 0,
};
r.displayName = "Color Cycle";
Y(r, {
  radius: {
    type: l.Number,
    min: 0,
    max: 1e3,
    step: 1,
    displayStepper: !0,
    defaultValue: 0,
  },
  colors: {
    type: l.Array,
    control: { type: l.Color },
    defaultValue: r.defaultProps.colors,
  },
  animOptions: {
    type: l.Transition,
    title: "Transition",
    defaultValue: r.defaultProps.animOptions,
  },
  randomStart: {
    type: l.Boolean,
    title: "Randomize",
    defaultValue: r.defaultProps.randomStart,
  },
  animRepeat: {
    type: l.Boolean,
    title: "Repeat",
    defaultValue: r.defaultProps.animRepeat,
  },
  animPause: {
    type: l.Number,
    title: "Pause",
    min: 0,
    max: 10,
    displayStepper: !0,
    step: 1,
    defaultValue: r.defaultProps.animPause,
  },
});
var se = w(k),
  le = w(C),
  H = X(L),
  me = w(V),
  de = w(r),
  fe = {
    CGaDbyJUu: "(min-width: 810px) and (max-width: 1999px)",
    LqKohFPZX: "(min-width: 2000px)",
    QiddvKS4V: "(max-width: 809px)",
  },
  J = () => typeof document < "u",
  K = "framer-B4e5S",
  ce = {
    CGaDbyJUu: "framer-v-51pz9m",
    LqKohFPZX: "framer-v-rmnhrv",
    QiddvKS4V: "framer-v-448rdr",
  },
  O = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.9,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  T = { damping: 20, delay: 0.15, mass: 1, stiffness: 400, type: "spring" },
  pe = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.9,
    skewX: 0,
    skewY: 0,
    transition: T,
    x: 0,
    y: 0,
  },
  $ = { damping: 20, delay: 0.2, mass: 1, stiffness: 400, type: "spring" },
  he = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.9,
    skewX: 0,
    skewY: 0,
    transition: $,
    x: 0,
    y: 0,
  },
  ze = S(),
  ue = { Desktop: "LqKohFPZX", Phone: "QiddvKS4V", Tablet: "CGaDbyJUu" },
  ge = ({ height: v, id: i, width: m, ...p }) => {
    var d, o;
    return {
      ...p,
      variant:
        (o = (d = ue[p.variant]) !== null && d !== void 0 ? d : p.variant) !==
          null && o !== void 0
          ? o
          : "LqKohFPZX",
    };
  },
  xe = A(function (v, i) {
    let { activeLocale: m, setLocale: p } = D(),
      { style: d, className: o, layoutId: g, variant: f, ...c } = ge(v);
    W(() => {
      let t = S(void 0, m);
      if (t.robots) {
        let a = document.querySelector('meta[name="robots"]');
        a
          ? a.setAttribute("content", t.robots)
          : ((a = document.createElement("meta")),
            a.setAttribute("name", "robots"),
            a.setAttribute("content", t.robots),
            document.head.appendChild(a));
      }
    }, [void 0, m]),
      z(() => {
        let t = S(void 0, m);
        if (((document.title = t.title || ""), t.viewport)) {
          var a;
          (a = document.querySelector('meta[name="viewport"]')) === null ||
            a === void 0 ||
            a.setAttribute("content", t.viewport);
        }
        let R = t.bodyClassName;
        if (R) {
          let _ = document.body;
          _.classList.forEach(
            (P) => P.startsWith("framer-body-") && _.classList.remove(P)
          ),
            _.classList.add(`${t.bodyClassName}-framer-B4e5S`);
        }
        return () => {
          R &&
            document.body.classList.remove(`${t.bodyClassName}-framer-B4e5S`);
        };
      }, [void 0, m]);
    let [s, ve] = G(f, fe, !1),
      be = void 0,
      ee = E(null),
      re = () => !J() || s === "QiddvKS4V",
      te = () => (J() ? s !== "QiddvKS4V" : !0),
      ae = N(),
      I = [];
    return (
      j({}),
      e(Q.Provider, {
        value: { primaryVariantId: "LqKohFPZX", variantClassNames: ce },
        children: n(q, {
          id: g ?? ae,
          children: [
            n(b.div, {
              ...c,
              className: U(K, ...I, "framer-rmnhrv", o),
              ref: i ?? ee,
              style: { ...d },
              children: [
                n("div", {
                  className: "framer-11ylwm",
                  children: [
                    n("div", {
                      className: "framer-cf3xzc",
                      children: [
                        e("div", {
                          className: "framer-cutllc",
                          children: e(y, {
                            breakpoint: s,
                            overrides: { QiddvKS4V: { y: 32 } },
                            children: e(h, {
                              height: 32,
                              y: 28,
                              children: e(u, {
                                className: "framer-1yv055o-container",
                                children: e(k, {
                                  height: "100%",
                                  id: "fWSXjX4AY",
                                  layoutId: "fWSXjX4AY",
                                  style: { height: "100%" },
                                  width: "100%",
                                }),
                              }),
                            }),
                          }),
                        }),
                        re() &&
                          e(h, {
                            children: e(u, {
                              className:
                                "framer-4dcfna-container hidden-rmnhrv hidden-51pz9m",
                              children: e(C, {
                                customColor: "rgb(245, 245, 250)",
                                customPadding: 0,
                                customStrokeWidth: 2,
                                customSvgCode:
                                  '<svg width="52" height="55" viewBox="0 0 52 55" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M28.328 -0.000679041C29.4664 0.400542 31.5658 1.28696 33.5066 3.15311C34.9622 4.55271 35.1115 8.42497 35.5407 9.33938C26.8911 4.05819 17.0938 1.5109 9.72255 5.915C5.3651 8.51827 3.4803 13.5475 1.65148 20.4243C-2.18345 34.8496 -1.01711 47.3434 23.672 54.0149C22.5336 53.6137 20.4342 52.7272 18.4934 50.8611C17.0378 49.4615 16.8885 45.5892 16.4593 44.6748C25.1089 49.956 34.9062 52.5033 42.2775 48.0992C46.6349 45.4959 48.529 40.4573 50.3485 33.5806C54.1835 19.1553 53.0171 6.66146 28.328 -0.0100098V-0.000679041ZM26.0047 38.3486C16.6926 38.3486 9.14405 33.2727 9.14405 27.0118C9.14405 20.7509 16.6926 15.6749 26.0047 15.6749C35.3167 15.6749 42.8653 20.7509 42.8653 27.0118C42.8653 33.2727 35.3167 38.3486 26.0047 38.3486Z" fill="#262626"/> </svg>',
                                height: "100%",
                                id: "qHEtloUNI",
                                layoutId: "qHEtloUNI",
                                lineCap: "butt",
                                lineJoin: "miter",
                                style: { height: "100%", width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                      ],
                    }),
                    n("div", {
                      className: "framer-1difq8y",
                      children: [
                        te() &&
                          e(h, {
                            children: e(u, {
                              className:
                                "framer-aya7ym-container hidden-448rdr",
                              children: e(C, {
                                customColor: "rgb(245, 245, 250)",
                                customPadding: 0,
                                customStrokeWidth: 2,
                                customSvgCode:
                                  '<svg width="52" height="55" viewBox="0 0 52 55" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M28.328 -0.000679041C29.4664 0.400542 31.5658 1.28696 33.5066 3.15311C34.9622 4.55271 35.1115 8.42497 35.5407 9.33938C26.8911 4.05819 17.0938 1.5109 9.72255 5.915C5.3651 8.51827 3.4803 13.5475 1.65148 20.4243C-2.18345 34.8496 -1.01711 47.3434 23.672 54.0149C22.5336 53.6137 20.4342 52.7272 18.4934 50.8611C17.0378 49.4615 16.8885 45.5892 16.4593 44.6748C25.1089 49.956 34.9062 52.5033 42.2775 48.0992C46.6349 45.4959 48.529 40.4573 50.3485 33.5806C54.1835 19.1553 53.0171 6.66146 28.328 -0.0100098V-0.000679041ZM26.0047 38.3486C16.6926 38.3486 9.14405 33.2727 9.14405 27.0118C9.14405 20.7509 16.6926 15.6749 26.0047 15.6749C35.3167 15.6749 42.8653 20.7509 42.8653 27.0118C42.8653 33.2727 35.3167 38.3486 26.0047 38.3486Z" fill="#262626"/> </svg>',
                                height: "100%",
                                id: "Bk1qat9by",
                                layoutId: "Bk1qat9by",
                                lineCap: "butt",
                                lineJoin: "miter",
                                style: { height: "100%", width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                        n("div", {
                          className: "framer-11mdw4",
                          children: [
                            e(y, {
                              breakpoint: s,
                              overrides: {
                                CGaDbyJUu: { viewBox: "0 0 792 84" },
                                QiddvKS4V: {
                                  children: e(x, {
                                    children: n("h1", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnTnpRd0xDQWlkMlIwYUNJZ01UQXc=",
                                        "--framer-font-family":
                                          '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                        "--framer-font-size": "60px",
                                        "--framer-font-variation-axes":
                                          '"opsz" 96, "wght" 740, "wdth" 100',
                                        "--framer-letter-spacing": "0px",
                                        "--framer-line-height": "0.8em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251))",
                                      },
                                      children: [
                                        "Become an",
                                        e("br", {}),
                                        "Early Bird",
                                      ],
                                    }),
                                  }),
                                  viewBox: "0 0 296 96",
                                },
                              },
                              children: e(H, {
                                __framer__animate: { transition: T },
                                __framer__animateOnce: !0,
                                __framer__enter: O,
                                __framer__exit: pe,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __fromCanvasComponent: !0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                children: e(x, {
                                  children: e("h1", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnT0RBd0xDQWlkMlIwYUNJZ01UQXc=",
                                      "--framer-font-family":
                                        '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                      "--framer-font-size": "84px",
                                      "--framer-font-variation-axes":
                                        '"opsz" 96, "wght" 800, "wdth" 100',
                                      "--framer-letter-spacing": "0px",
                                      "--framer-line-height": "1em",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251))",
                                    },
                                    children: "Become an Early Bird",
                                  }),
                                }),
                                className: "framer-1qjvn2v",
                                fonts: [
                                  "GF;Bricolage Grotesque-variable-regular",
                                ],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                            e(y, {
                              breakpoint: s,
                              overrides: {
                                QiddvKS4V: {
                                  children: e(x, {
                                    children: e("h2", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7SW50ZXItcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Inter", "Inter Placeholder", sans-serif',
                                        "--framer-letter-spacing": "-0.7px",
                                        "--framer-line-height": "1.5em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251))",
                                      },
                                      children:
                                        "As an early supporter, you'll gain access to exclusive perks and rewards. After 1000 sign ups, this page will self-destruct :)",
                                    }),
                                  }),
                                },
                              },
                              children: e(H, {
                                __framer__animate: { transition: $ },
                                __framer__animateOnce: !0,
                                __framer__enter: O,
                                __framer__exit: he,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __fromCanvasComponent: !0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                children: e(x, {
                                  children: n("h2", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7SW50ZXItcmVndWxhcg==",
                                      "--framer-font-family":
                                        '"Inter", "Inter Placeholder", sans-serif',
                                      "--framer-font-size": "18px",
                                      "--framer-letter-spacing": "-0.7px",
                                      "--framer-line-height": "1.5em",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251))",
                                    },
                                    children: [
                                      "As an early supporter, you'll gain access to exclusive perks and rewards.",
                                      e("br", {}),
                                      "After 1000 sign ups, this page will self-destruct :)",
                                    ],
                                  }),
                                }),
                                className: "framer-na3rd1",
                                fonts: ["GF;Inter-regular"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                        e(h, {
                          children: e(u, {
                            className: "framer-vt3x9j-container",
                            children: e(y, {
                              breakpoint: s,
                              overrides: {
                                QiddvKS4V: {
                                  style: { maxWidth: "100%", width: "100%" },
                                },
                              },
                              children: e(V, {
                                button: {
                                  buttonFont: {
                                    fontFamily: '"Inter", sans-serif',
                                    fontSize: "16px",
                                    fontStyle: "normal",
                                    letterSpacing: "0em",
                                    lineHeight: "1em",
                                  },
                                  buttonPadding: 16,
                                  buttonPaddingBottom: 16,
                                  buttonPaddingLeft: 16,
                                  buttonPaddingPerSide: !1,
                                  buttonPaddingRight: 16,
                                  buttonPaddingTop: 16,
                                  color: "rgb(255, 255, 255)",
                                  fill: "rgba(0, 0, 0, 0.9)",
                                  insetWhenDocked: 5,
                                  isDocked: !0,
                                  label: "-->",
                                  shouldAppear: !0,
                                  widthWhenDocked: 60,
                                },
                                font: {
                                  fontFamily: '"Inter", sans-serif',
                                  fontSize: "16px",
                                  fontStyle: "normal",
                                  letterSpacing: "0em",
                                  lineHeight: "1em",
                                },
                                gap: 10,
                                height: "100%",
                                id: "W3Z4ufj8O",
                                input: {
                                  borderObject: {
                                    borderColor: "rgb(255, 255, 255)",
                                    borderWidth: 1.5,
                                  },
                                  borderRadius: 32,
                                  color: "rgb(255, 255, 255)",
                                  fill: "rgba(255, 255, 255, 0.05)",
                                  fixedHeight: 49,
                                  focusObject: {
                                    focusColor: "rgba(255, 255, 255, 0)",
                                    focusWidthFrom: 0,
                                    focusWidthTo: 0,
                                  },
                                  height: !0,
                                  padding: 25,
                                  paddingBottom: 16,
                                  paddingLeft: 20,
                                  paddingPerSide: !0,
                                  paddingRight: 20,
                                  paddingTop: 16,
                                  placeholder: "Email Address",
                                  placeholderColor: "rgba(255, 255, 255, 0.66)",
                                },
                                layout: "horizontal",
                                layoutId: "W3Z4ufj8O",
                                loopsID: "cm2m7891g01eneg0x2kt8rvfh",
                                loopsUserGroup: "Early Birds",
                                redirectAs: "overlay",
                                style: { width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                e(h, {
                  children: e(u, {
                    className: "framer-vg8s4r-container",
                    children: e(r, {
                      animOptions: {
                        delay: 0,
                        duration: 10,
                        ease: [0, 0, 1, 1],
                        type: "tween",
                      },
                      animPause: 0,
                      animRepeat: !0,
                      colors: [
                        "rgb(0, 204, 255)",
                        "rgb(34, 221, 221)",
                        "rgb(255, 102, 68)",
                        "rgb(153, 153, 255)",
                      ],
                      height: "100%",
                      id: "acMzDjofr",
                      layoutId: "acMzDjofr",
                      radius: 0,
                      randomStart: !1,
                      style: { height: "100%", width: "100%" },
                      width: "100%",
                    }),
                  }),
                }),
              ],
            }),
            e("div", { className: U(K, ...I), id: "overlay" }),
          ],
        }),
      })
    );
  }),
  ye = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-B4e5S.framer-lhr4pz, .framer-B4e5S .framer-lhr4pz { display: block; }",
    ".framer-B4e5S.framer-rmnhrv { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 2000px; }",
    ".framer-B4e5S .framer-11ylwm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: hidden; padding: 0px 32px 0px 32px; position: relative; width: 100%; }",
    ".framer-B4e5S .framer-cf3xzc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; left: 50%; overflow: hidden; padding: 28px 40px 28px 40px; position: absolute; top: 0px; transform: translateX(-50%); width: 100%; z-index: 1; }",
    ".framer-B4e5S .framer-cutllc { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 800px; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    ".framer-B4e5S .framer-1yv055o-container { flex: none; height: 32px; position: relative; width: auto; }",
    ".framer-B4e5S .framer-4dcfna-container { aspect-ratio: 0.9347826086956522 / 1; flex: none; height: 40px; position: relative; width: var(--framer-aspect-ratio-supported, 37px); z-index: 1; }",
    ".framer-B4e5S .framer-1difq8y { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; max-width: 800px; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-B4e5S .framer-aya7ym-container { aspect-ratio: 0.9545454545454546 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 55px); min-width: 40px; position: relative; width: 7%; z-index: 1; }",
    ".framer-B4e5S .framer-11mdw4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-B4e5S .framer-1qjvn2v { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; flex: none; height: auto; overflow: visible; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-B4e5S .framer-na3rd1 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }",
    ".framer-B4e5S .framer-vt3x9j-container { flex: none; height: auto; position: relative; width: 300px; }",
    ".framer-B4e5S .framer-vg8s4r-container { flex: none; height: 100vh; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: 0px; width: 100%; z-index: -1; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-B4e5S .framer-11ylwm, .framer-B4e5S .framer-cf3xzc, .framer-B4e5S .framer-cutllc, .framer-B4e5S .framer-1difq8y, .framer-B4e5S .framer-11mdw4 { gap: 0px; } .framer-B4e5S .framer-11ylwm > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-B4e5S .framer-11ylwm > :first-child, .framer-B4e5S .framer-1difq8y > :first-child, .framer-B4e5S .framer-11mdw4 > :first-child { margin-top: 0px; } .framer-B4e5S .framer-11ylwm > :last-child, .framer-B4e5S .framer-1difq8y > :last-child, .framer-B4e5S .framer-11mdw4 > :last-child { margin-bottom: 0px; } .framer-B4e5S .framer-cf3xzc > * { margin: 0px; margin-left: calc(30px / 2); margin-right: calc(30px / 2); } .framer-B4e5S .framer-cf3xzc > :first-child, .framer-B4e5S .framer-cutllc > :first-child { margin-left: 0px; } .framer-B4e5S .framer-cf3xzc > :last-child, .framer-B4e5S .framer-cutllc > :last-child { margin-right: 0px; } .framer-B4e5S .framer-cutllc > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-B4e5S .framer-1difq8y > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-B4e5S .framer-11mdw4 > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } }",
    "@media (max-width: 809px) { .framer-B4e5S.framer-rmnhrv { width: 390px; } .framer-B4e5S .framer-11ylwm { padding: 0px; } .framer-B4e5S .framer-cf3xzc { padding: 28px; } .framer-B4e5S .framer-4dcfna-container { width: var(--framer-aspect-ratio-supported, 38px); } .framer-B4e5S .framer-1difq8y { max-width: 440px; width: 88%; } .framer-B4e5S .framer-1qjvn2v { white-space: pre; } .framer-B4e5S .framer-na3rd1 { max-width: 90%; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-B4e5S .framer-vt3x9j-container { max-width: 90%; width: 100%; }}",
    "@media (min-width: 810px) and (max-width: 1999px) { .framer-B4e5S.framer-rmnhrv { width: 810px; } .framer-B4e5S .framer-11ylwm { padding: 0px 40px 0px 40px; } .framer-B4e5S .framer-aya7ym-container { height: var(--framer-aspect-ratio-supported, 50px); } .framer-B4e5S .framer-1qjvn2v { white-space: pre; }}",
  ],
  B = Z(xe, ye, "framer-B4e5S"),
  Ee = B;
B.displayName = "Page";
B.defaultProps = { height: 800, width: 2e3 };
var we = [
  {
    defaultValue: 96,
    maxValue: 96,
    minValue: 12,
    name: "Optical size",
    tag: "opsz",
  },
  {
    defaultValue: 800,
    maxValue: 800,
    minValue: 200,
    name: "Weight",
    tag: "wght",
  },
  {
    defaultValue: 100,
    maxValue: 100,
    minValue: 75,
    name: "Width",
    tag: "wdth",
  },
];
M(
  B,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Bricolage Grotesque",
          source: "google",
          style: "normal",
          url: "fonts/s/bricolagegrotesque/v7/3y996as8bTXq_nANBjzKo3IeZx8z6up5H--HGN6NLPo.ttf",
          variationAxes: we,
          weight: "400",
        },
        {
          family: "Inter",
          source: "google",
          style: "normal",
          url: "fonts/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZ1rib2Bg-4.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "/content/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "/content/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "/content/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "/content/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "/content/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "/content/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "/content/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
      ],
    },
    ...se,
    ...le,
    ...me,
    ...de,
  ],
  { supportsExplicitInterCodegen: !0 }
);
var qe = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "Framerde9qHHVif",
      slots: [],
      annotations: {
        framerDisplayContentsDiv: "false",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"QiddvKS4V":{"layout":["fixed","auto"]},"CGaDbyJUu":{"layout":["fixed","auto"]}}}',
        framerIntrinsicWidth: "2000",
        framerContractVersion: "1",
        framerResponsiveScreen: "",
        framerImmutableVariables: "true",
        framerComponentViewportWidth: "true",
        framerIntrinsicHeight: "800",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
export { qe as __FramerMetadata__, Ee as default };
//# sourceMappingURL=luE9mMwGbbuIQGn6l7R4Epkgfo7tUsULBWTPZYQwDsg.S6CGVGWM.mjs.map
