import {
  Ba as B,
  G as F,
  H as _,
  I as c,
  J as b,
  K as E,
  L as k,
  M as I,
  P as S,
  T as P,
  V as w,
  _ as V,
  ba as H,
  d as h,
  f as o,
  ga as O,
  i as v,
  j as f,
  ja as x,
  sa as z,
} from "./chunk-ORFE4GHC.mjs";
import "./chunk-JR5VT52U.mjs";
import { c as a } from "./chunk-RIUMFBNJ.mjs";
var W = "default" in _ ? F : _,
  d = {},
  D = W;
d.createRoot = D.createRoot;
d.hydrateRoot = D.hydrateRoot;
var p = d.createRoot,
  M = d.hydrateRoot;
var u = {
    augiA20Il: {
      elements: {
        drI9oh6ic: "info-3",
        gohHRBez_: "info",
        StSENVShv: "info-1",
        vRBab2yYX: "info-4",
        wzVmyHw5J: "info-2",
      },
      page: c(() =>
        import("./YMqSTOXfRqgESMzeFn3ayMhkX8ovk1UEWZDWNn0cmS0.GSLCDOYP.mjs")
      ),
      path: "/",
    },
    YRLa4p9A4: {
      elements: {},
      page: c(() =>
        import("./r28Uf3lzecjaj9b1kEF3Gm7RvXsWQj5wjs2AQVGY8fA.OQTHL63N.mjs")
      ),
      path: "/faq",
    },
    de9qHHVif: {
      elements: {},
      page: c(() =>
        import("./luE9mMwGbbuIQGn6l7R4Epkgfo7tUsULBWTPZYQwDsg.S6CGVGWM.mjs")
      ),
      path: "/signup",
    },
  },
  L = [{ code: "en-US", id: "default", name: "English", slug: "" }];
async function q({ routeId: t, pathVariables: n, localeId: r }) {
  await u[t].page.preload();
  let s = o(x, {
      isWebsite: !0,
      routeId: t,
      pathVariables: n,
      routes: u,
      collectionUtils: {},
      framerSiteId:
        "d8aa68166bfd1e735919d93d346a250a987b8f9022ecf2961b00700709f303ea",
      notFoundPage: c(() => import("./SitesNotFoundPage.js@1.1-UJEXZW5Q.mjs")),
      isReducedMotion: void 0,
      localeId: r,
      locales: L,
      preserveQueryParams: void 0,
    }),
    i = o(O, {
      children: s,
      value: {
        enableAsyncURLUpdates: !0,
        replaceNestedLinks: !0,
        useGranularSuspense: !0,
        wrapUpdatesInTransitions: !1,
      },
    });
  return o(b, { children: i, value: { routes: {} } });
}
var R = typeof document < "u";
if (R) {
  (a.__framer_importFromPackage = (n, r) => () =>
    o(P, {
      error: 'Package component not supported: "' + r + '" in "' + n + '"',
    })),
    (a.process = {
      ...a.process,
      env: { ...(a.process ? a.process.env : void 0), NODE_ENV: "production" },
    }),
    (a.__framer_events = a.__framer_events || []),
    w();
  let t = document.getElementById("main");
  "framerHydrateV2" in t.dataset ? U(!0, t) : U(!1, t);
}
function N() {
  R && a.__framer_events.push(arguments);
}
async function U(t, n) {
  try {
    let y = function (e, T) {
        let l = T?.componentStack;
        console.warn(
          "Recoverable error during hydration. Please check any custom code or code overrides to fix server/client mismatches.",
          e,
          l
        ),
          !(Math.random() > 0.01) &&
            N("published_site_load_recoverable_error", {
              message: String(e),
              componentStack: l,
              stack: l
                ? void 0
                : e instanceof Error && typeof e.stack == "string"
                ? e.stack
                : null,
            });
      },
      r,
      s,
      i,
      m;
    if (t) {
      let e = JSON.parse(n.dataset.framerHydrateV2);
      (r = e.routeId),
        (s = e.localeId),
        (i = e.pathVariables),
        (m = e.breakpoints);
    } else {
      let e = S(u, decodeURIComponent(location.pathname), !0, L);
      (r = e.routeId), (s = e.localeId), (i = e.pathVariables);
    }
    let g = await q({ routeId: r, localeId: s, pathVariables: i });
    t
      ? (B("framer-rewrite-breakpoints", () => {
          z(m), a.__framer_onRewriteBreakpoints?.(m);
        }),
        f(() => {
          E(), I(), k(), M(n, g, { onRecoverableError: y });
        }))
      : p(n, { onRecoverableError: y }).render(g);
  } catch (r) {
    throw (
      (N("published_site_load_error", {
        message: String(r),
        stack:
          r instanceof Error && typeof r.stack == "string" ? r.stack : null,
      }),
      r)
    );
  }
}
export { q as getPageRoot };
//# sourceMappingURL=script_main.CGVVEIGT.mjs.map
