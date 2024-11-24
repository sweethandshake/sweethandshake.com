import { a as Rr } from "./chunk-S326NSVB.mjs";
import { a as $r, b as Le } from "./chunk-DI6Q5UOT.mjs";
import "./chunk-42U43NKG.mjs";
import {
  $ as re,
  A as jt,
  Aa as Q,
  B as Nt,
  C as Yt,
  D as Et,
  F as Dt,
  O as q,
  Q as rr,
  S as Pe,
  U as y,
  X as Z,
  Y as E,
  aa as L,
  b as kr,
  ba as ce,
  c as f,
  da as H,
  e as Qr,
  ea as qt,
  fa as Zt,
  g as Or,
  h as N,
  ia as Ae,
  k as Pt,
  ka as A,
  l as ee,
  m as we,
  n as D,
  o as At,
  p as Y,
  q as U,
  qa as xe,
  r as We,
  ra as Ht,
  s as me,
  t as e,
  ta as Gt,
  u as v,
  ua as te,
  v as Kr,
  va as tr,
  w as J,
  wa as b,
  x as l,
  y as j,
  ya as de,
  z as _t,
  za as G,
} from "./chunk-ORFE4GHC.mjs";
import "./chunk-JR5VT52U.mjs";
import "./chunk-GTJ53YBR.mjs";
import { c as z } from "./chunk-RIUMFBNJ.mjs";
function Qt(r, t) {
  r.indexOf(t) === -1 && r.push(t);
}
var et = (r, t, n) => Math.min(Math.max(n, r), t),
  pe = { duration: 0.3, delay: 0, endDelay: 0, repeat: 0, easing: "ease" },
  _e = (r) => typeof r == "number",
  Se = (r) => Array.isArray(r) && !_e(r[0]),
  za = (r, t, n) => {
    let i = t - r;
    return ((((n - r) % i) + i) % i) + r;
  };
function Ot(r, t) {
  return Se(r) ? r[za(0, r.length, t)] : r;
}
var rt = (r, t, n) => -n * r + n * t + r,
  tt = () => {},
  he = (r) => r,
  Fr = (r, t, n) => (t - r === 0 ? 1 : (n - r) / (t - r));
function at(r, t) {
  let n = r[r.length - 1];
  for (let i = 1; i <= t; i++) {
    let o = Fr(0, t, i);
    r.push(rt(n, 1, o));
  }
}
function Kt(r) {
  let t = [0];
  return at(t, r - 1), t;
}
function nt(r, t = Kt(r.length), n = he) {
  let i = r.length,
    o = i - t.length;
  return (
    o > 0 && at(t, o),
    (c) => {
      let d = 0;
      for (; d < i - 2 && !(c < t[d + 1]); d++);
      let g = et(0, 1, Fr(t[d], t[d + 1], c));
      return (g = Ot(n, d)(g)), rt(r[d], r[d + 1], g);
    }
  );
}
var Ir = (r) => Array.isArray(r) && _e(r[0]),
  ar = (r) => typeof r == "object" && !!r.createAnimation,
  Fe = (r) => typeof r == "function",
  it = (r) => typeof r == "string",
  Ie = { ms: (r) => 1e3 * r, s: (r) => r / 1e3 };
function ot(r, t) {
  return t ? r * (1e3 / t) : 0;
}
var $t = (r, t, n) =>
    (((1 - 3 * n + 3 * t) * r + (3 * n - 6 * t)) * r + 3 * t) * r,
  Wa = 1e-7,
  Pa = 12;
function Aa(r, t, n, i, o) {
  let c,
    d,
    g = 0;
  do (d = t + (n - t) / 2), (c = $t(d, i, o) - r), c > 0 ? (n = d) : (t = d);
  while (Math.abs(c) > Wa && ++g < Pa);
  return d;
}
function je(r, t, n, i) {
  if (r === t && n === i) return he;
  let o = (c) => Aa(c, 0, 1, r, n);
  return (c) => (c === 0 || c === 1 ? c : $t(o(c), t, i));
}
var ea =
  (r, t = "end") =>
  (n) => {
    n = t === "end" ? Math.min(n, 0.999) : Math.max(n, 0.001);
    let i = n * r,
      o = t === "end" ? Math.floor(i) : Math.ceil(i);
    return et(0, 1, o / r);
  };
var _a = {
    ease: je(0.25, 0.1, 0.25, 1),
    "ease-in": je(0.42, 0, 1, 1),
    "ease-in-out": je(0.42, 0, 0.58, 1),
    "ease-out": je(0, 0, 0.58, 1),
  },
  ja = /\((.*?)\)/;
function lt(r) {
  if (Fe(r)) return r;
  if (Ir(r)) return je(...r);
  let t = _a[r];
  if (t) return t;
  if (r.startsWith("steps")) {
    let n = ja.exec(r);
    if (n) {
      let i = n[1].split(",");
      return ea(parseFloat(i[0]), i[1].trim());
    }
  }
  return he;
}
var Sr = class {
  constructor(
    t,
    n = [0, 1],
    {
      easing: i,
      duration: o = pe.duration,
      delay: c = pe.delay,
      endDelay: d = pe.endDelay,
      repeat: g = pe.repeat,
      offset: u,
      direction: s = "normal",
      autoplay: C = !0,
    } = {}
  ) {
    if (
      ((this.startTime = null),
      (this.rate = 1),
      (this.t = 0),
      (this.cancelTimestamp = null),
      (this.easing = he),
      (this.duration = 0),
      (this.totalDuration = 0),
      (this.repeat = 0),
      (this.playState = "idle"),
      (this.finished = new Promise((x, h) => {
        (this.resolve = x), (this.reject = h);
      })),
      (i = i || pe.easing),
      ar(i))
    ) {
      let x = i.createAnimation(n);
      (i = x.easing), (n = x.keyframes || n), (o = x.duration || o);
    }
    (this.repeat = g),
      (this.easing = Se(i) ? he : lt(i)),
      this.updateDuration(o);
    let w = nt(n, u, Se(i) ? i.map(lt) : he);
    (this.tick = (x) => {
      var h;
      let k = 0;
      (k =
        this.pauseTime !== void 0
          ? this.pauseTime
          : (x - this.startTime) * this.rate),
        (this.t = k),
        (k /= 1e3),
        (k = Math.max(k - c, 0)),
        this.playState === "finished" &&
          this.pauseTime === void 0 &&
          (k = this.totalDuration);
      let X = k / this.duration,
        T = Math.floor(X),
        F = X % 1;
      !F && X >= 1 && (F = 1), F === 1 && T--;
      let p = T % 2;
      (s === "reverse" ||
        (s === "alternate" && p) ||
        (s === "alternate-reverse" && !p)) &&
        (F = 1 - F);
      let S = k >= this.totalDuration ? 1 : Math.min(F, 1),
        I = w(this.easing(S));
      t(I),
        this.pauseTime === void 0 &&
        (this.playState === "finished" || k >= this.totalDuration + d)
          ? ((this.playState = "finished"),
            (h = this.resolve) === null || h === void 0 || h.call(this, I))
          : this.playState !== "idle" &&
            (this.frameRequestId = requestAnimationFrame(this.tick));
    }),
      C && this.play();
  }
  play() {
    let t = performance.now();
    (this.playState = "running"),
      this.pauseTime !== void 0
        ? (this.startTime = t - this.pauseTime)
        : this.startTime || (this.startTime = t),
      (this.cancelTimestamp = this.startTime),
      (this.pauseTime = void 0),
      (this.frameRequestId = requestAnimationFrame(this.tick));
  }
  pause() {
    (this.playState = "paused"), (this.pauseTime = this.t);
  }
  finish() {
    (this.playState = "finished"), this.tick(0);
  }
  stop() {
    var t;
    (this.playState = "idle"),
      this.frameRequestId !== void 0 &&
        cancelAnimationFrame(this.frameRequestId),
      (t = this.reject) === null || t === void 0 || t.call(this, !1);
  }
  cancel() {
    this.stop(), this.tick(this.cancelTimestamp);
  }
  reverse() {
    this.rate *= -1;
  }
  commitStyles() {}
  updateDuration(t) {
    (this.duration = t), (this.totalDuration = t * (this.repeat + 1));
  }
  get currentTime() {
    return this.t;
  }
  set currentTime(t) {
    this.pauseTime !== void 0 || this.rate === 0
      ? (this.pauseTime = t)
      : (this.startTime = performance.now() - t / this.rate);
  }
  get playbackRate() {
    return this.rate;
  }
  set playbackRate(t) {
    this.rate = t;
  }
};
var Ne = {};
Object.defineProperty(Ne, "__esModule", { value: !0 });
Ne.warning = function () {};
Ne.invariant = function () {};
var Uo = Ne.__esModule,
  Xo = Ne.warning,
  st = Ne.invariant;
var Vr = class {
  setAnimation(t) {
    (this.animation = t),
      t?.finished.then(() => this.clearAnimation()).catch(() => {});
  }
  clearAnimation() {
    this.animation = this.generator = void 0;
  }
};
function ra(r, t) {
  var n = {};
  for (var i in r)
    Object.prototype.hasOwnProperty.call(r, i) &&
      t.indexOf(i) < 0 &&
      (n[i] = r[i]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function") {
    var o = 0;
    for (i = Object.getOwnPropertySymbols(r); o < i.length; o++)
      t.indexOf(i[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(r, i[o]) &&
        (n[i[o]] = r[i[o]]);
  }
  return n;
}
var Na = 5;
function Tr(r, t, n) {
  let i = Math.max(t - Na, 0);
  return ot(n - r(i), t - i);
}
var Ye = { stiffness: 100, damping: 10, mass: 1 },
  Ya = (r = Ye.stiffness, t = Ye.damping, n = Ye.mass) =>
    t / (2 * Math.sqrt(r * n));
function Ea(r, t, n) {
  return (r < t && n >= t) || (r > t && n <= t);
}
var mt = ({
    stiffness: r = Ye.stiffness,
    damping: t = Ye.damping,
    mass: n = Ye.mass,
    from: i = 0,
    to: o = 1,
    velocity: c = 0,
    restSpeed: d,
    restDistance: g,
  } = {}) => {
    c = c ? Ie.s(c) : 0;
    let u = { done: !1, hasReachedTarget: !1, current: i, target: o },
      s = o - i,
      C = Math.sqrt(r / n) / 1e3,
      w = Ya(r, t, n),
      x = Math.abs(s) < 5;
    d || (d = x ? 0.01 : 2), g || (g = x ? 0.005 : 0.5);
    let h;
    if (w < 1) {
      let k = C * Math.sqrt(1 - w * w);
      h = (X) =>
        o -
        Math.exp(-w * C * X) *
          (((w * C * s - c) / k) * Math.sin(k * X) + s * Math.cos(k * X));
    } else h = (k) => o - Math.exp(-C * k) * (s + (C * s - c) * k);
    return (k) => {
      u.current = h(k);
      let X = k === 0 ? c : Tr(h, k, u.current),
        T = Math.abs(X) <= d,
        F = Math.abs(o - u.current) <= g;
      return (u.done = T && F), (u.hasReachedTarget = Ea(i, o, u.current)), u;
    };
  },
  ta = ({
    from: r = 0,
    velocity: t = 0,
    power: n = 0.8,
    decay: i = 0.325,
    bounceDamping: o,
    bounceStiffness: c,
    changeTarget: d,
    min: g,
    max: u,
    restDistance: s = 0.5,
    restSpeed: C,
  }) => {
    i = Ie.ms(i);
    let w = { hasReachedTarget: !1, done: !1, current: r, target: r },
      x = (a) => (g !== void 0 && a < g) || (u !== void 0 && a > u),
      h = (a) =>
        g === void 0
          ? u
          : u === void 0 || Math.abs(g - a) < Math.abs(u - a)
          ? g
          : u,
      k = n * t,
      X = r + k,
      T = d === void 0 ? X : d(X);
    (w.target = T), T !== X && (k = T - r);
    let F = (a) => -k * Math.exp(-a / i),
      p = (a) => T + F(a),
      S = (a) => {
        let M = F(a),
          V = p(a);
        (w.done = Math.abs(M) <= s), (w.current = w.done ? T : V);
      },
      I,
      R,
      m = (a) => {
        x(w.current) &&
          ((I = a),
          (R = mt({
            from: w.current,
            to: h(w.current),
            velocity: Tr(p, a, w.current),
            damping: o,
            stiffness: c,
            restDistance: s,
            restSpeed: C,
          })));
      };
    return (
      m(0),
      (a) => {
        let M = !1;
        return (
          !R && I === void 0 && ((M = !0), S(a), m(a)),
          I !== void 0 && a > I
            ? ((w.hasReachedTarget = !0), R(a - I))
            : ((w.hasReachedTarget = !1), !M && S(a), w)
        );
      }
    );
  },
  ft = 10,
  Da = 1e4;
function aa(r, t = he) {
  let n,
    i = ft,
    o = r(0),
    c = [t(o.current)];
  for (; !o.done && i < Da; )
    (o = r(i)),
      c.push(t(o.done ? o.target : o.current)),
      n === void 0 && o.hasReachedTarget && (n = i),
      (i += ft);
  let d = i - ft;
  return (
    c.length === 1 && c.push(o.current),
    { keyframes: c, duration: d / 1e3, overshootDuration: (n ?? d) / 1e3 }
  );
}
var ct = new WeakMap();
function ca(r) {
  return (
    ct.has(r) || ct.set(r, { transforms: [], values: new Map() }), ct.get(r)
  );
}
function qa(r, t) {
  return r.has(t) || r.set(t, new Vr()), r.get(t);
}
var Za = ["", "X", "Y", "Z"],
  Ha = ["translate", "scale", "rotate", "skew"],
  Br = { x: "translateX", y: "translateY", z: "translateZ" },
  na = {
    syntax: "<angle>",
    initialValue: "0deg",
    toDefaultUnit: (r) => r + "deg",
  },
  Ga = {
    translate: {
      syntax: "<length-percentage>",
      initialValue: "0px",
      toDefaultUnit: (r) => r + "px",
    },
    rotate: na,
    scale: { syntax: "<number>", initialValue: 1, toDefaultUnit: he },
    skew: na,
  },
  De = new Map(),
  xt = (r) => `--motion-${r}`,
  Jr = ["x", "y", "z"];
Ha.forEach((r) => {
  Za.forEach((t) => {
    Jr.push(r + t), De.set(xt(r + t), Ga[r]);
  });
});
var Qa = (r, t) => Jr.indexOf(r) - Jr.indexOf(t),
  Oa = new Set(Jr),
  da = (r) => Oa.has(r),
  Ka = (r, t) => {
    Br[t] && (t = Br[t]);
    let { transforms: n } = ca(r);
    Qt(n, t), (r.style.transform = $a(n));
  },
  $a = (r) => r.sort(Qa).reduce(en, "").trim(),
  en = (r, t) => `${r} ${t}(var(${xt(t)}))`,
  ut = (r) => r.startsWith("--"),
  ia = new Set();
function rn(r) {
  if (!ia.has(r)) {
    ia.add(r);
    try {
      let { syntax: t, initialValue: n } = De.has(r) ? De.get(r) : {};
      CSS.registerProperty({
        name: r,
        inherits: !1,
        syntax: t,
        initialValue: n,
      });
    } catch {}
  }
}
var dt = (r, t) => document.createElement("div").animate(r, t),
  oa = {
    cssRegisterProperty: () =>
      typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
    partialKeyframes: () => {
      try {
        dt({ opacity: [1] });
      } catch {
        return !1;
      }
      return !0;
    },
    finished: () => !!dt({ opacity: [0, 1] }, { duration: 0.001 }).finished,
    linearEasing: () => {
      try {
        dt({ opacity: 0 }, { easing: "linear(0, 1)" });
      } catch {
        return !1;
      }
      return !0;
    },
  },
  pt = {},
  Ee = {};
for (let r in oa) Ee[r] = () => (pt[r] === void 0 && (pt[r] = oa[r]()), pt[r]);
var tn = 0.015,
  an = (r, t) => {
    let n = "",
      i = Math.round(t / tn);
    for (let o = 0; o < i; o++) n += r(Fr(0, i - 1, o)) + ", ";
    return n.substring(0, n.length - 2);
  },
  la = (r, t) =>
    Fe(r)
      ? Ee.linearEasing()
        ? `linear(${an(r, t)})`
        : pe.easing
      : Ir(r)
      ? nn(r)
      : r,
  nn = ([r, t, n, i]) => `cubic-bezier(${r}, ${t}, ${n}, ${i})`;
function on(r, t) {
  for (let n = 0; n < r.length; n++)
    r[n] === null && (r[n] = n ? r[n - 1] : t());
  return r;
}
var ln = (r) => (Array.isArray(r) ? r : [r]);
function zr(r) {
  return Br[r] && (r = Br[r]), da(r) ? xt(r) : r;
}
var Mr = {
  get: (r, t) => {
    t = zr(t);
    let n = ut(t) ? r.style.getPropertyValue(t) : getComputedStyle(r)[t];
    if (!n && n !== 0) {
      let i = De.get(t);
      i && (n = i.initialValue);
    }
    return n;
  },
  set: (r, t, n) => {
    (t = zr(t)), ut(t) ? r.style.setProperty(t, n) : (r.style[t] = n);
  },
};
function pa(r, t = !0) {
  if (r && r.playState !== "finished")
    try {
      r.stop ? r.stop() : (t && r.commitStyles(), r.cancel());
    } catch {}
}
function ha(r, t) {
  var n;
  let i = t?.toDefaultUnit || he,
    o = r[r.length - 1];
  if (it(o)) {
    let c =
      ((n = o.match(/(-?[\d.]+)([a-z%]*)/)) === null || n === void 0
        ? void 0
        : n[2]) || "";
    c && (i = (d) => d + c);
  }
  return i;
}
function sn() {
  return z.__MOTION_DEV_TOOLS_RECORD;
}
function fn(r, t, n, i = {}, o) {
  let c = sn(),
    d = i.record !== !1 && c,
    g,
    {
      duration: u = pe.duration,
      delay: s = pe.delay,
      endDelay: C = pe.endDelay,
      repeat: w = pe.repeat,
      easing: x = pe.easing,
      persist: h = !1,
      direction: k,
      offset: X,
      allowWebkitAcceleration: T = !1,
      autoplay: F = !0,
    } = i,
    p = ca(r),
    S = da(t),
    I = Ee.waapi();
  S && Ka(r, t);
  let R = zr(t),
    m = qa(p.values, R),
    a = De.get(R);
  return (
    pa(m.animation, !(ar(x) && m.generator) && i.record !== !1),
    () => {
      let M = () => {
          var P, le;
          return (le =
            (P = Mr.get(r, R)) !== null && P !== void 0
              ? P
              : a?.initialValue) !== null && le !== void 0
            ? le
            : 0;
        },
        V = on(ln(n), M),
        $ = ha(V, a);
      if (ar(x)) {
        let P = x.createAnimation(V, t !== "opacity", M, R, m);
        (x = P.easing), (V = P.keyframes || V), (u = P.duration || u);
      }
      if (
        (ut(R) && (Ee.cssRegisterProperty() ? rn(R) : (I = !1)),
        S && !Ee.linearEasing() && (Fe(x) || (Se(x) && x.some(Fe))) && (I = !1),
        I)
      ) {
        a && (V = V.map((fe) => (_e(fe) ? a.toDefaultUnit(fe) : fe))),
          V.length !== 1 || (Ee.partialKeyframes() && !d) || V.unshift(M());
        let P = {
          delay: Ie.ms(s),
          duration: Ie.ms(u),
          endDelay: Ie.ms(C),
          easing: Se(x) ? void 0 : la(x, u),
          direction: k,
          iterations: w + 1,
          fill: "both",
        };
        (g = r.animate(
          {
            [R]: V,
            offset: X,
            easing: Se(x) ? x.map((fe) => la(fe, u)) : void 0,
          },
          P
        )),
          g.finished ||
            (g.finished = new Promise((fe, _) => {
              (g.onfinish = fe), (g.oncancel = _);
            }));
        let le = V[V.length - 1];
        g.finished
          .then(() => {
            h || (Mr.set(r, R, le), g.cancel());
          })
          .catch(tt),
          T || (g.playbackRate = 1.000001);
      } else if (o && S)
        (V = V.map((P) => (typeof P == "string" ? parseFloat(P) : P))),
          V.length === 1 && V.unshift(parseFloat(M())),
          (g = new o(
            (P) => {
              Mr.set(r, R, $ ? $(P) : P);
            },
            V,
            Object.assign(Object.assign({}, i), { duration: u, easing: x })
          ));
      else {
        let P = V[V.length - 1];
        Mr.set(r, R, a && _e(P) ? a.toDefaultUnit(P) : P);
      }
      return (
        d &&
          c(
            r,
            t,
            V,
            { duration: u, delay: s, easing: x, repeat: w, offset: X },
            "motion-one"
          ),
        m.setAnimation(g),
        g && !F && g.pause(),
        g
      );
    }
  );
}
var mn = (r, t) =>
  r[t] ? Object.assign(Object.assign({}, r), r[t]) : Object.assign({}, r);
function Ct(r, t) {
  var n;
  return (
    typeof r == "string"
      ? t
        ? (((n = t[r]) !== null && n !== void 0) ||
            (t[r] = document.querySelectorAll(r)),
          (r = t[r]))
        : (r = document.querySelectorAll(r))
      : r instanceof Element && (r = [r]),
    Array.from(r || [])
  );
}
var cn = (r) => r(),
  dn = (r, t, n = pe.duration) =>
    new Proxy(
      { animations: r.map(cn).filter(Boolean), duration: n, options: t },
      hn
    ),
  pn = (r) => r.animations[0],
  hn = {
    get: (r, t) => {
      let n = pn(r);
      switch (t) {
        case "duration":
          return r.duration;
        case "currentTime":
          return Ie.s(n?.[t] || 0);
        case "playbackRate":
        case "playState":
          return n?.[t];
        case "finished":
          return (
            r.finished ||
              (r.finished = Promise.all(r.animations.map(un)).catch(tt)),
            r.finished
          );
        case "stop":
          return () => {
            r.animations.forEach((i) => pa(i));
          };
        case "forEachNative":
          return (i) => {
            r.animations.forEach((o) => i(o, r));
          };
        default:
          return typeof n?.[t] > "u"
            ? void 0
            : () => r.animations.forEach((i) => i[t]());
      }
    },
    set: (r, t, n) => {
      switch (t) {
        case "currentTime":
          n = Ie.ms(n);
        case "playbackRate":
          for (let i = 0; i < r.animations.length; i++) r.animations[i][t] = n;
          return !0;
      }
      return !1;
    },
  },
  un = (r) => r.finished;
function gn(r, t, n) {
  return Fe(r) ? r(t, n) : r;
}
function xn(r) {
  return function (n, i, o = {}) {
    n = Ct(n);
    let c = n.length;
    st(!!c, "No valid element provided."), st(!!i, "No keyframes defined.");
    let d = [];
    for (let g = 0; g < c; g++) {
      let u = n[g];
      for (let s in i) {
        let C = mn(o, s);
        C.delay = gn(C.delay, g, c);
        let w = fn(u, s, i[s], C, r);
        d.push(w);
      }
    }
    return dn(d, o, o.duration);
  };
}
var Qo = xn(Sr);
function sa(r) {
  return _e(r) && !isNaN(r);
}
function ht(r) {
  return it(r) ? parseFloat(r) : r;
}
function ua(r) {
  let t = new WeakMap();
  return (n = {}) => {
    let i = new Map(),
      o = (d = 0, g = 100, u = 0, s = !1) => {
        let C = `${d}-${g}-${u}-${s}`;
        return (
          i.has(C) ||
            i.set(C, r(Object.assign({ from: d, to: g, velocity: u }, n))),
          i.get(C)
        );
      },
      c = (d, g) => (t.has(d) || t.set(d, aa(d, g)), t.get(d));
    return {
      createAnimation: (d, g = !0, u, s, C) => {
        let w,
          x,
          h,
          k = 0,
          X = he,
          T = d.length;
        if (g) {
          X = ha(d, s ? De.get(zr(s)) : void 0);
          let F = d[T - 1];
          if (((h = ht(F)), T > 1 && d[0] !== null)) x = ht(d[0]);
          else {
            let p = C?.generator;
            if (p) {
              let { animation: S, generatorStartTime: I } = C,
                R = S?.startTime || I || 0,
                m = S?.currentTime || performance.now() - R,
                a = p(m).current;
              (x = a), (k = Tr((M) => p(M).current, m, a));
            } else u && (x = ht(u()));
          }
        }
        if (sa(x) && sa(h)) {
          let F = o(x, h, k, s?.includes("scale"));
          (w = Object.assign(Object.assign({}, c(F, X)), { easing: "linear" })),
            C &&
              ((C.generator = F), (C.generatorStartTime = performance.now()));
        }
        return (
          w ||
            (w = { easing: "ease", duration: c(o(0, 100)).overshootDuration }),
          w
        );
      },
    };
  };
}
var Oo = ua(mt),
  Ko = ua(ta),
  Cn = { any: 0, all: 1 };
function vn(r, t, { root: n, margin: i, amount: o = "any" } = {}) {
  if (typeof IntersectionObserver > "u") return () => {};
  let c = Ct(r),
    d = new WeakMap(),
    g = (s) => {
      s.forEach((C) => {
        let w = d.get(C.target);
        if (C.isIntersecting !== !!w)
          if (C.isIntersecting) {
            let x = t(C);
            Fe(x) ? d.set(C.target, x) : u.unobserve(C.target);
          } else w && (w(C), d.delete(C.target));
      });
    },
    u = new IntersectionObserver(g, {
      root: n,
      rootMargin: i,
      threshold: typeof o == "number" ? o : Cn[o],
    });
  return c.forEach((s) => u.observe(s)), () => u.disconnect();
}
var Ur = new WeakMap(),
  Ve;
function yn(r, t) {
  if (t) {
    let { inlineSize: n, blockSize: i } = t[0];
    return { width: n, height: i };
  }
  return r instanceof SVGElement && "getBBox" in r
    ? r.getBBox()
    : { width: r.offsetWidth, height: r.offsetHeight };
}
function bn({ target: r, contentRect: t, borderBoxSize: n }) {
  var i;
  (i = Ur.get(r)) === null ||
    i === void 0 ||
    i.forEach((o) => {
      o({
        target: r,
        contentSize: t,
        get size() {
          return yn(r, n);
        },
      });
    });
}
function wn(r) {
  r.forEach(bn);
}
function Ln() {
  typeof ResizeObserver < "u" && (Ve = new ResizeObserver(wn));
}
function kn(r, t) {
  Ve || Ln();
  let n = Ct(r);
  return (
    n.forEach((i) => {
      let o = Ur.get(i);
      o || ((o = new Set()), Ur.set(i, o)), o.add(t), Ve?.observe(i);
    }),
    () => {
      n.forEach((i) => {
        let o = Ur.get(i);
        o?.delete(t), o?.size || Ve?.unobserve(i);
      });
    }
  );
}
var Xr = new Set(),
  nr;
function Rn() {
  (nr = () => {
    let r = { width: z.innerWidth, height: z.innerHeight },
      t = { target: z, size: r, contentSize: r };
    Xr.forEach((n) => n(t));
  }),
    z.addEventListener("resize", nr);
}
function Fn(r) {
  return (
    Xr.add(r),
    nr || Rn(),
    () => {
      Xr.delete(r), !Xr.size && nr && (nr = void 0);
    }
  );
}
function ga(r, t) {
  return Fe(r) ? Fn(r) : kn(r, t);
}
function gt(r, t, n) {
  r.dispatchEvent(new CustomEvent(t, { detail: { originalEvent: n } }));
}
function fa(r, t, n) {
  r.dispatchEvent(new CustomEvent(t, { detail: { originalEntry: n } }));
}
var In = {
    isActive: (r) => !!r.inView,
    subscribe: (r, { enable: t, disable: n }, { inViewOptions: i = {} }) => {
      let { once: o } = i,
        c = ra(i, ["once"]);
      return vn(
        r,
        (d) => {
          if ((t(), fa(r, "viewenter", d), !o))
            return (g) => {
              n(), fa(r, "viewleave", g);
            };
        },
        c
      );
    },
  },
  ma = (r, t, n) => (i) => {
    (!i.pointerType || i.pointerType === "mouse") && (n(), gt(r, t, i));
  },
  Sn = {
    isActive: (r) => !!r.hover,
    subscribe: (r, { enable: t, disable: n }) => {
      let i = ma(r, "hoverstart", t),
        o = ma(r, "hoverend", n);
      return (
        r.addEventListener("pointerenter", i),
        r.addEventListener("pointerleave", o),
        () => {
          r.removeEventListener("pointerenter", i),
            r.removeEventListener("pointerleave", o);
        }
      );
    },
  },
  Vn = {
    isActive: (r) => !!r.press,
    subscribe: (r, { enable: t, disable: n }) => {
      let i = (c) => {
          n(), gt(r, "pressend", c), z.removeEventListener("pointerup", i);
        },
        o = (c) => {
          t(), gt(r, "pressstart", c), z.addEventListener("pointerup", i);
        };
      return (
        r.addEventListener("pointerdown", o),
        () => {
          r.removeEventListener("pointerdown", o),
            z.removeEventListener("pointerup", i);
        }
      );
    },
  },
  Tn = { inView: In, hover: Sn, press: Vn },
  $o = ["initial", "animate", ...Object.keys(Tn), "exit"];
var Mn = 100,
  Un = {
    left: (r) => `translateX(-${r}px)`,
    right: (r) => `translateX(${r}px)`,
    top: (r) => `translateY(-${r}px)`,
    bottom: (r) => `translateY(${r}px)`,
  },
  vt =
    typeof Animation < "u" &&
    typeof Animation.prototype.updatePlaybackRate == "function";
function qe(r) {
  let {
      slots: t,
      gap: n,
      padding: i,
      paddingPerSide: o,
      paddingTop: c,
      paddingRight: d,
      paddingBottom: g,
      paddingLeft: u,
      speed: s,
      hoverFactor: C,
      direction: w,
      alignment: x,
      sizingOptions: h,
      fadeOptions: k,
      style: X,
    } = r,
    {
      fadeContent: T,
      overflow: F,
      fadeWidth: p,
      fadeInset: S,
      fadeAlpha: I,
    } = k,
    { widthType: R, heightType: m } = h,
    a = o ? `${c}px ${d}px ${g}px ${u}px` : `${i}px`,
    M = Pe.current() === Pe.canvas,
    V = t.filter(Boolean),
    $ = kr.count(V),
    P = $ > 0;
  w === !0 && (w = "left");
  let le = w === "left" || w === "right",
    fe = _t(0),
    _ = Un[w],
    Ce = jt(fe, _),
    be = U(null),
    ae = Y(() => [Or(), Or()], []),
    [ue, Dr] = We({ parent: null, children: null }),
    br = [],
    $e = [],
    Me = 0,
    er = 0;
  M && ((Me = $ ? Math.floor(10 / $) : 0), (er = 1)),
    !M &&
      P &&
      ue.parent &&
      ((Me = Math.round((ue.parent / ue.children) * 2) + 1),
      (Me = Math.min(Me, Mn)),
      (er = 1));
  let wr = Pt(() => {
      if (P && be.current) {
        let ne = le ? be.current.offsetWidth : be.current.offsetHeight,
          ie = ae[0].current
            ? le
              ? ae[0].current.offsetLeft
              : ae[0].current.offsetTop
            : 0,
          ge =
            (ae[1].current
              ? le
                ? ae[1].current.offsetLeft + ae[1].current.offsetWidth
                : ae[1].current.offsetTop + ae[1].current.offsetHeight
              : 0) -
            ie +
            n;
        Dr({ parent: ne, children: ge });
      }
    }, []),
    W = M ? { contentVisibility: "auto" } : {};
  if (P) {
    if (!M) {
      let ne = U(!0);
      we(
        () => (
          Kr.read(wr),
          ga(be.current, ({ contentSize: ie }) => {
            !ne.current && (ie.width || ie.height) && Kr.read(wr),
              (ne.current = !1);
          })
        ),
        []
      );
    }
    br = kr.map(V, (ne, ie) => {
      var Re, ge, Ue, Xe;
      let Be;
      ie === 0 && (Be = ae[0]), ie === V.length - 1 && (Be = ae[1]);
      let ze = {
        width: R
          ? (Re = ne.props) === null || Re === void 0
            ? void 0
            : Re.width
          : "100%",
        height: m
          ? (ge = ne.props) === null || ge === void 0
            ? void 0
            : ge.height
          : "100%",
      };
      return e(j, {
        inherit: "id",
        children: e("li", {
          ref: Be,
          style: ze,
          children: Qr(
            ne,
            {
              style: {
                ...((Ue = ne.props) === null || Ue === void 0
                  ? void 0
                  : Ue.style),
                ...ze,
                flexShrink: 0,
                ...W,
              },
              layoutId: ne.props.layoutId
                ? ne.props.layoutId + "-original-" + ie
                : void 0,
            },
            (Xe = ne.props) === null || Xe === void 0 ? void 0 : Xe.children
          ),
        }),
      });
    });
  }
  if (!M)
    for (let ne = 0; ne < Me; ne++)
      $e = [
        ...$e,
        ...kr.map(V, (ie, Re) => {
          var ge, Ue, Xe, Be, ze, Gr;
          let Ja = {
            width: R
              ? (ge = ie.props) === null || ge === void 0
                ? void 0
                : ge.width
              : "100%",
            height: m
              ? (Ue = ie.props) === null || Ue === void 0
                ? void 0
                : Ue.height
              : "100%",
            willChange: "transform",
          };
          return e(
            j,
            {
              inherit: "id",
              children: e(
                "li",
                {
                  style: Ja,
                  "aria-hidden": !0,
                  children: Qr(
                    ie,
                    {
                      key: ne + " " + Re,
                      style: {
                        ...((Xe = ie.props) === null || Xe === void 0
                          ? void 0
                          : Xe.style),
                        width: R
                          ? (Be = ie.props) === null || Be === void 0
                            ? void 0
                            : Be.width
                          : "100%",
                        height: m
                          ? (ze = ie.props) === null || ze === void 0
                            ? void 0
                            : ze.height
                          : "100%",
                        flexShrink: 0,
                        ...W,
                      },
                      layoutId: ie.props.layoutId
                        ? ie.props.layoutId + "-dupe-" + ne
                        : void 0,
                    },
                    (Gr = ie.props) === null || Gr === void 0
                      ? void 0
                      : Gr.children
                  ),
                },
                ne + "li" + Re
              ),
            },
            ne + "lg" + Re
          );
        }),
      ];
  let se = ue.children + ue.children * Math.round(ue.parent / ue.children),
    Je = U(null),
    qr = U(null),
    Lr = U(0),
    Zr = U(!1),
    Jt = Yt(),
    zt = U(null),
    ve = U(null);
  if (!M) {
    let ne = Dt(be);
    vt
      ? (we(() => {
          if (!(Jt || !se || !s))
            return (
              (ve.current = zt.current.animate(
                { transform: [_(0), _(se)] },
                {
                  duration: (Math.abs(se) / s) * 1e3,
                  iterations: 1 / 0,
                  easing: "linear",
                }
              )),
              () => ve.current.cancel()
            );
        }, [C, se, s]),
        we(() => {
          ve.current &&
            (ne && ve.current.playState === "paused"
              ? ve.current.play()
              : !ne &&
                ve.current.playState === "running" &&
                ve.current.pause());
        }, [ne]))
      : Nt((ie) => {
          if (!se || Jt || vt) return;
          Je.current === null && (Je.current = ie), (ie = ie - Je.current);
          let ge = (qr.current === null ? 0 : ie - qr.current) * (s / 1e3);
          Zr.current && (ge *= C),
            (Lr.current += ge),
            (Lr.current = Et(0, se, Lr.current)),
            (qr.current = ie),
            ne && fe.set(Lr.current);
        });
  }
  let Ma = le ? "to right" : "to bottom",
    Wt = p / 2,
    Ua = 100 - p / 2,
    Xa = Wn(S, 0, Wt),
    Ba = 100 - S,
    Hr = `linear-gradient(${Ma}, rgba(0, 0, 0, ${I}) ${Xa}%, rgba(0, 0, 0, 1) ${Wt}%, rgba(0, 0, 0, 1) ${Ua}%, rgba(0, 0, 0, ${I}) ${Ba}%)`;
  return P
    ? e("section", {
        style: {
          ...xa,
          opacity: er,
          WebkitMaskImage: T ? Hr : void 0,
          MozMaskImage: T ? Hr : void 0,
          maskImage: T ? Hr : void 0,
          overflow: F ? "visible" : "hidden",
          padding: a,
        },
        ref: be,
        children: v(l.ul, {
          ref: zt,
          style: {
            ...xa,
            gap: n,
            top: w === "bottom" && Ca(se) ? -se : void 0,
            left: w === "right" && Ca(se) ? -se : void 0,
            placeItems: x,
            position: "relative",
            flexDirection: le ? "row" : "column",
            ...X,
            willChange: M ? "auto" : "transform",
            transform: vt ? _(0) : Ce,
          },
          onMouseEnter: () => {
            (Zr.current = !0), ve.current && (ve.current.playbackRate = C);
          },
          onMouseLeave: () => {
            (Zr.current = !1), ve.current && (ve.current.playbackRate = 1);
          },
          children: [br, $e],
        }),
      })
    : v("section", {
        style: Xn,
        children: [
          e("div", { style: Bn, children: "\u2728" }),
          e("p", { style: Jn, children: "Connect to Content" }),
          e("p", {
            style: zn,
            children:
              "Add layers or components to infinitely loop on your page.",
          }),
        ],
      });
}
qe.defaultProps = {
  gap: 10,
  padding: 10,
  sizingOptions: { widthType: !0, heightType: !0 },
  fadeOptions: {
    fadeContent: !0,
    overflow: !1,
    fadeWidth: 25,
    fadeAlpha: 0,
    fadeInset: 0,
  },
  direction: !0,
};
Z(qe, {
  slots: {
    type: y.Array,
    title: "Children",
    control: { type: y.ComponentInstance },
  },
  speed: {
    type: y.Number,
    title: "Speed",
    min: 0,
    max: 1e3,
    defaultValue: 100,
    unit: "%",
    displayStepper: !0,
    step: 5,
  },
  direction: {
    type: y.Enum,
    title: "Direction",
    options: ["left", "right", "top", "bottom"],
    optionIcons: [
      "direction-left",
      "direction-right",
      "direction-up",
      "direction-down",
    ],
    optionTitles: ["Left", "Right", "Top", "Bottom"],
    defaultValue: "left",
    displaySegmentedControl: !0,
  },
  alignment: {
    type: y.Enum,
    title: "Align",
    options: ["flex-start", "center", "flex-end"],
    optionIcons: {
      direction: {
        right: ["align-top", "align-middle", "align-bottom"],
        left: ["align-top", "align-middle", "align-bottom"],
        top: ["align-left", "align-center", "align-right"],
        bottom: ["align-left", "align-center", "align-right"],
      },
    },
    defaultValue: "center",
    displaySegmentedControl: !0,
  },
  gap: { type: y.Number, title: "Gap" },
  padding: {
    title: "Padding",
    type: y.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
  },
  sizingOptions: {
    type: y.Object,
    title: "Sizing",
    controls: {
      widthType: {
        type: y.Boolean,
        title: "Width",
        enabledTitle: "Auto",
        disabledTitle: "Stretch",
        defaultValue: !0,
      },
      heightType: {
        type: y.Boolean,
        title: "Height",
        enabledTitle: "Auto",
        disabledTitle: "Stretch",
        defaultValue: !0,
      },
    },
  },
  fadeOptions: {
    type: y.Object,
    title: "Clipping",
    controls: {
      fadeContent: { type: y.Boolean, title: "Fade", defaultValue: !0 },
      overflow: {
        type: y.Boolean,
        title: "Overflow",
        enabledTitle: "Show",
        disabledTitle: "Hide",
        defaultValue: !1,
        hidden(r) {
          return r.fadeContent === !0;
        },
      },
      fadeWidth: {
        type: y.Number,
        title: "Width",
        defaultValue: 25,
        min: 0,
        max: 100,
        unit: "%",
        hidden(r) {
          return r.fadeContent === !1;
        },
      },
      fadeInset: {
        type: y.Number,
        title: "Inset",
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: "%",
        hidden(r) {
          return r.fadeContent === !1;
        },
      },
      fadeAlpha: {
        type: y.Number,
        title: "Opacity",
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.05,
        hidden(r) {
          return r.fadeContent === !1;
        },
      },
    },
  },
  hoverFactor: {
    type: y.Number,
    title: "Hover",
    min: 0,
    max: 1,
    unit: "x",
    defaultValue: 1,
    step: 0.1,
    displayStepper: !0,
    description: "Slows down the speed while you are hovering.",
  },
});
var xa = {
    display: "flex",
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    placeItems: "center",
    margin: 0,
    padding: 0,
    listStyleType: "none",
    textIndent: "none",
  },
  Xn = {
    display: "flex",
    width: "100%",
    height: "100%",
    placeContent: "center",
    placeItems: "center",
    flexDirection: "column",
    color: "#96F",
    background: "rgba(136, 85, 255, 0.1)",
    fontSize: 11,
    overflow: "hidden",
    padding: "20px 20px 30px 20px",
  },
  Bn = { fontSize: 32, marginBottom: 10 },
  Jn = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center" },
  zn = {
    margin: 0,
    opacity: 0.7,
    maxWidth: 150,
    lineHeight: 1.5,
    textAlign: "center",
  },
  Wn = (r, t, n) => Math.min(Math.max(r, t), n),
  Ca = (r) => typeof r == "number" && !isNaN(r);
var ir = new Date().getFullYear();
function Te(r) {
  let {
      name: t,
      statement: n,
      dateRange: i,
      startYear: o,
      font: c,
      color: d,
      fontSize: g,
    } = r,
    s = `\xA9 ${i ? `${o}-${ir}` : ir} ${t.trim()}`;
  n.trim() && (s += ` ${n.trim()}`);
  let C = { fontSize: `${g}px`, color: d, ...c };
  return e("div", { style: C, children: s });
}
Te.defaultProps = {
  name: "Your Name",
  statement: "All rights reserved.",
  dateRange: !1,
  startYear: ir - 1,
  color: "#999999",
  fontSize: 14,
  font: { family: "Inter" },
};
Te.displayName = "Auto Copyright";
Z(Te, {
  font: {
    type: y.Font,
    title: "Font",
    defaultValue: "Inter",
    controls: "extended",
  },
  color: { type: y.Color, title: "Color", defaultValue: "#999999" },
  dateRange: {
    type: y.Boolean,
    title: "Date Range",
    defaultValue: !1,
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  startYear: {
    type: y.Number,
    title: "Start Year",
    min: 1e3,
    max: ir - 1,
    defaultValue: ir - 2,
    displayStepper: !0,
    hidden: ({ dateRange: r }) => !r,
  },
  name: { type: y.String, title: "Name", defaultValue: "Your Name" },
  statement: {
    type: y.String,
    title: "Statement",
    defaultValue: "All rights reserved.",
    description:
      "More components at [Framer University](https://frameruni.link/cc).",
  },
});
var Pn = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
var An = {
    ...Pn,
    borderRadius: 6,
    background: "rgba(149, 149, 149, 0.1)",
    border: "1px dashed rgba(149, 149, 149, 0.15)",
    color: "#a5a5a5",
    flexDirection: "column",
  },
  va = N((r, t) => e("div", { style: An, ref: t }));
var yt,
  ya,
  _n = (r) => (
    yt ||
      ((yt = new Map([
        [
          "bold",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M222.14,105.85l-80-80a20,20,0,0,0-28.28,0l-80,80A19.86,19.86,0,0,0,28,120v96a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V164h24v52a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V120A19.86,19.86,0,0,0,222.14,105.85ZM204,204H164V152a12,12,0,0,0-12-12H104a12,12,0,0,0-12,12v52H52V121.65l76-76,76,76Z",
            })
          ),
        ],
        [
          "duotone",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M216,120v96H152V152H104v64H40V120a8,8,0,0,1,2.34-5.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,216,120Z",
              opacity: "0.2",
            }),
            r.createElement("path", {
              d: "M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z",
            })
          ),
        ],
        [
          "fill",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M224,120v96a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V164a4,4,0,0,0-4-4H108a4,4,0,0,0-4,4v52a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a16,16,0,0,1,4.69-11.31l80-80a16,16,0,0,1,22.62,0l80,80A16,16,0,0,1,224,120Z",
            })
          ),
        ],
        [
          "light",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M217.9,110.1l-80-80a14,14,0,0,0-19.8,0l-80,80A13.92,13.92,0,0,0,34,120v96a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V158h36v58a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V120A13.92,13.92,0,0,0,217.9,110.1ZM210,210H158V152a6,6,0,0,0-6-6H104a6,6,0,0,0-6,6v58H46V120a2,2,0,0,1,.58-1.42l80-80a2,2,0,0,1,2.84,0l80,80A2,2,0,0,1,210,120Z",
            })
          ),
        ],
        [
          "regular",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z",
            })
          ),
        ],
        [
          "thin",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M216.49,111.51l-80-80a12,12,0,0,0-17,0l-80,80A12,12,0,0,0,36,120v96a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V156h40v60a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V120A12,12,0,0,0,216.49,111.51ZM212,212H156V152a4,4,0,0,0-4-4H104a4,4,0,0,0-4,4v60H44V120a4,4,0,0,1,1.17-2.83l80-80a4,4,0,0,1,5.66,0l80,80A4,4,0,0,1,212,120Z",
            })
          ),
        ],
      ])),
      (ya = r.forwardRef((t, n) =>
        r.createElement("g", { ref: n, ...t }, yt.get(t.weight))
      ))),
    ya
  );
var ba = _n;
var wa = {
    onClick: { type: y.EventHandler },
    onMouseDown: { type: y.EventHandler },
    onMouseUp: { type: y.EventHandler },
    onMouseEnter: { type: y.EventHandler },
    onMouseLeave: { type: y.EventHandler },
  },
  jn = (r, t) => r.find((n) => n.toLowerCase().includes(t));
function La(r, t, n = "", i, o) {
  let c = Y(() => {
    if (n == null || n?.length === 0) return null;
    let g = n.toLowerCase().replace(/-|\s/g, "");
    var u;
    return (u = o[g]) !== null && u !== void 0 ? u : jn(r, g);
  }, [i, n]);
  return t ? i : c;
}
var bt = [
    "Acorn",
    "AddressBook",
    "AddressBookTabs",
    "AirTrafficControl",
    "Airplane",
    "AirplaneInFlight",
    "AirplaneLanding",
    "AirplaneTakeoff",
    "AirplaneTaxiing",
    "AirplaneTilt",
    "Airplay",
    "Alarm",
    "Alien",
    "AlignBottom",
    "AlignBottomSimple",
    "AlignCenterVertical",
    "AlignLeft",
    "AlignLeftSimple",
    "AlignRight",
    "AlignRightSimple",
    "AlignTop",
    "AlignTopSimple",
    "AmazonLogo",
    "Ambulance",
    "Anchor",
    "AnchorSimple",
    "AndroidLogo",
    "Angle",
    "AngularLogo",
    "Aperture",
    "AppStoreLogo",
    "AppWindow",
    "AppleLogo",
    "ApplePodcastsLogo",
    "ApproximateEquals",
    "Archive",
    "ArchiveBox",
    "ArchiveTray",
    "Armchair",
    "ArrowArcLeft",
    "ArrowArcRight",
    "ArrowBendDownLeft",
    "ArrowBendDownRight",
    "ArrowBendLeftDown",
    "ArrowBendLeftUp",
    "ArrowBendRightDown",
    "ArrowBendRightUp",
    "ArrowBendUpLeft",
    "ArrowBendUpRight",
    "ArrowCircleDown",
    "ArrowCircleDownLeft",
    "ArrowCircleDownRight",
    "ArrowCircleLeft",
    "ArrowCircleRight",
    "ArrowCircleUp",
    "ArrowCircleUpLeft",
    "ArrowCircleUpRight",
    "ArrowClockwise",
    "ArrowDown",
    "ArrowDownLeft",
    "ArrowDownRight",
    "ArrowElbowDownLeft",
    "ArrowElbowDownRight",
    "ArrowElbowLeft",
    "ArrowElbowLeftDown",
    "ArrowElbowLeftUp",
    "ArrowElbowRight",
    "ArrowElbowRightDown",
    "ArrowElbowRightUp",
    "ArrowElbowUpLeft",
    "ArrowElbowUpRight",
    "ArrowFatDown",
    "ArrowFatLeft",
    "ArrowFatLineDown",
    "ArrowFatLineLeft",
    "ArrowFatLineRight",
    "ArrowFatLineUp",
    "ArrowFatLinesDown",
    "ArrowFatLinesLeft",
    "ArrowFatLinesRight",
    "ArrowFatLinesUp",
    "ArrowFatRight",
    "ArrowFatUp",
    "ArrowLeft",
    "ArrowLineDown",
    "ArrowLineDownLeft",
    "ArrowLineDownRight",
    "ArrowLineLeft",
    "ArrowLineRight",
    "ArrowLineUp",
    "ArrowLineUpLeft",
    "ArrowLineUpRight",
    "ArrowRight",
    "ArrowSquareDown",
    "ArrowSquareDownLeft",
    "ArrowSquareDownRight",
    "ArrowSquareIn",
    "ArrowSquareLeft",
    "ArrowSquareOut",
    "ArrowSquareRight",
    "ArrowSquareUp",
    "ArrowSquareUpLeft",
    "ArrowSquareUpRight",
    "ArrowUDownLeft",
    "ArrowUDownRight",
    "ArrowULeftDown",
    "ArrowULeftUp",
    "ArrowURightDown",
    "ArrowURightUp",
    "ArrowUUpLeft",
    "ArrowUUpRight",
    "ArrowUp",
    "ArrowUpLeft",
    "ArrowUpRight",
    "ArrowsClockwise",
    "ArrowsDownUp",
    "ArrowsHorizontal",
    "ArrowsIn",
    "ArrowsInCardinal",
    "ArrowsInLineVertical",
    "ArrowsInSimple",
    "ArrowsLeftRight",
    "ArrowsMerge",
    "ArrowsOut",
    "ArrowsOutCardinal",
    "ArrowsOutSimple",
    "ArrowsSplit",
    "ArrowsVertical",
    "Article",
    "ArticleMedium",
    "ArticleNyTimes",
    "Asclepius",
    "Asterisk",
    "AsteriskSimple",
    "At",
    "Atom",
    "Avocado",
    "Axe",
    "Baby",
    "BabyCarriage",
    "Backpack",
    "Backspace",
    "Bag",
    "BagSimple",
    "Balloon",
    "Bandaids",
    "Bank",
    "Barbell",
    "Barcode",
    "Barn",
    "Barricade",
    "Baseball",
    "BaseballCap",
    "BaseballHelmet",
    "Basket",
    "Basketball",
    "Bathtub",
    "BatteryCharging",
    "BatteryEmpty",
    "BatteryFull",
    "BatteryHigh",
    "BatteryLow",
    "BatteryMedium",
    "BatteryPlus",
    "BatteryPlusVertical",
    "BatteryVerticalEmpty",
    "BatteryVerticalFull",
    "BatteryVerticalHigh",
    "BatteryVerticalLow",
    "BatteryWarning",
    "BeachBall",
    "Beanie",
    "Bed",
    "BeerBottle",
    "BeerStein",
    "BehanceLogo",
    "Bell",
    "BellRinging",
    "BellSimple",
    "BellSimpleRinging",
    "BellSimpleSlash",
    "BellSimpleZ",
    "BellSlash",
    "BellZ",
    "Belt",
    "BezierCurve",
    "Bicycle",
    "Binary",
    "Binoculars",
    "Biohazard",
    "Bird",
    "Blueprint",
    "Bluetooth",
    "BluetoothConnected",
    "BluetoothSlash",
    "BluetoothX",
    "Boat",
    "Bomb",
    "Bone",
    "Book",
    "BookBookmark",
    "BookOpen",
    "BookOpenText",
    "BookOpenUser",
    "BookUser",
    "Bookmark",
    "BookmarkSimple",
    "Bookmarks",
    "BookmarksSimple",
    "Books",
    "Boot",
    "Boules",
    "BoundingBox",
    "BowlFood",
    "BowlSteam",
    "BowlingBall",
    "BoxArrowDown",
    "BoxArrowUp",
    "BoxingGlove",
    "BracketsAngle",
    "BracketsCurly",
    "BracketsRound",
    "BracketsSquare",
    "Brain",
    "Brandy",
    "Bread",
    "Bridge",
    "Briefcase",
    "BriefcaseMetal",
    "Broadcast",
    "Broom",
    "Browser",
    "Browsers",
    "Bug",
    "BugBeetle",
    "BugDroid",
    "Building",
    "BuildingApartment",
    "BuildingOffice",
    "Buildings",
    "Bulldozer",
    "Bus",
    "Butterfly",
    "CableCar",
    "Cactus",
    "Cake",
    "Calculator",
    "Calendar",
    "CalendarBlank",
    "CalendarCheck",
    "CalendarDot",
    "CalendarDots",
    "CalendarHeart",
    "CalendarMinus",
    "CalendarPlus",
    "CalendarSlash",
    "CalendarStar",
    "CalendarX",
    "CallBell",
    "Camera",
    "CameraPlus",
    "CameraRotate",
    "CameraSlash",
    "Campfire",
    "Car",
    "CarBattery",
    "CarProfile",
    "CarSimple",
    "Cardholder",
    "Cards",
    "CardsThree",
    "CaretCircleDoubleUp",
    "CaretCircleDown",
    "CaretCircleLeft",
    "CaretCircleRight",
    "CaretCircleUp",
    "CaretCircleUpDown",
    "CaretDoubleDown",
    "CaretDoubleLeft",
    "CaretDoubleRight",
    "CaretDoubleUp",
    "CaretDown",
    "CaretLeft",
    "CaretLineDown",
    "CaretLineLeft",
    "CaretLineRight",
    "CaretLineUp",
    "CaretRight",
    "CaretUp",
    "CaretUpDown",
    "Carrot",
    "CashRegister",
    "CassetteTape",
    "CastleTurret",
    "Cat",
    "CellSignalFull",
    "CellSignalHigh",
    "CellSignalLow",
    "CellSignalMedium",
    "CellSignalNone",
    "CellSignalSlash",
    "CellSignalX",
    "CellTower",
    "Certificate",
    "Chair",
    "Chalkboard",
    "ChalkboardSimple",
    "ChalkboardTeacher",
    "Champagne",
    "ChargingStation",
    "ChartBar",
    "ChartBarHorizontal",
    "ChartDonut",
    "ChartLine",
    "ChartLineDown",
    "ChartLineUp",
    "ChartPie",
    "ChartPieSlice",
    "ChartPolar",
    "ChartScatter",
    "Chat",
    "ChatCentered",
    "ChatCenteredDots",
    "ChatCenteredSlash",
    "ChatCenteredText",
    "ChatCircle",
    "ChatCircleDots",
    "ChatCircleSlash",
    "ChatCircleText",
    "ChatDots",
    "ChatSlash",
    "ChatTeardrop",
    "ChatTeardropDots",
    "ChatTeardropSlash",
    "ChatTeardropText",
    "ChatText",
    "Chats",
    "ChatsCircle",
    "ChatsTeardrop",
    "Check",
    "CheckCircle",
    "CheckFat",
    "CheckSquare",
    "CheckSquareOffset",
    "Checkerboard",
    "Checks",
    "Cheers",
    "Cheese",
    "ChefHat",
    "Cherries",
    "Church",
    "Cigarette",
    "CigaretteSlash",
    "Circle",
    "CircleDashed",
    "CircleHalf",
    "CircleHalfTilt",
    "CircleNotch",
    "CirclesFour",
    "CirclesThree",
    "CirclesThreePlus",
    "Circuitry",
    "City",
    "Clipboard",
    "ClipboardText",
    "Clock",
    "ClockAfternoon",
    "ClockClockwise",
    "ClockCountdown",
    "ClockUser",
    "ClosedCaptioning",
    "Cloud",
    "CloudArrowDown",
    "CloudArrowUp",
    "CloudCheck",
    "CloudFog",
    "CloudLightning",
    "CloudMoon",
    "CloudRain",
    "CloudSlash",
    "CloudSnow",
    "CloudSun",
    "CloudWarning",
    "CloudX",
    "Clover",
    "Club",
    "CoatHanger",
    "CodaLogo",
    "Code",
    "CodeBlock",
    "CodeSimple",
    "CodepenLogo",
    "CodesandboxLogo",
    "Coffee",
    "CoffeeBean",
    "Coin",
    "CoinVertical",
    "Coins",
    "Columns",
    "ColumnsPlusLeft",
    "ColumnsPlusRight",
    "Command",
    "Compass",
    "CompassRose",
    "CompassTool",
    "ComputerTower",
    "Confetti",
    "ContactlessPayment",
    "Control",
    "Cookie",
    "CookingPot",
    "Copy",
    "CopySimple",
    "Copyleft",
    "Copyright",
    "CornersIn",
    "CornersOut",
    "Couch",
    "CourtBasketball",
    "Cow",
    "CowboyHat",
    "Cpu",
    "Crane",
    "CraneTower",
    "CreditCard",
    "Cricket",
    "Crop",
    "Cross",
    "Crosshair",
    "CrosshairSimple",
    "Crown",
    "CrownCross",
    "CrownSimple",
    "Cube",
    "CubeFocus",
    "CubeTransparent",
    "CurrencyBtc",
    "CurrencyCircleDollar",
    "CurrencyCny",
    "CurrencyDollar",
    "CurrencyDollarSimple",
    "CurrencyEth",
    "CurrencyEur",
    "CurrencyGbp",
    "CurrencyInr",
    "CurrencyJpy",
    "CurrencyKrw",
    "CurrencyKzt",
    "CurrencyNgn",
    "CurrencyRub",
    "Cursor",
    "CursorClick",
    "CursorText",
    "Cylinder",
    "Database",
    "Desk",
    "Desktop",
    "DesktopTower",
    "Detective",
    "DevToLogo",
    "DeviceMobile",
    "DeviceMobileCamera",
    "DeviceMobileSlash",
    "DeviceMobileSpeaker",
    "DeviceRotate",
    "DeviceTablet",
    "DeviceTabletCamera",
    "DeviceTabletSpeaker",
    "Devices",
    "Diamond",
    "DiamondsFour",
    "DiceFive",
    "DiceFour",
    "DiceOne",
    "DiceSix",
    "DiceThree",
    "DiceTwo",
    "Disc",
    "DiscoBall",
    "DiscordLogo",
    "Divide",
    "Dna",
    "Dog",
    "Door",
    "DoorOpen",
    "Dot",
    "DotOutline",
    "DotsNine",
    "DotsSix",
    "DotsSixVertical",
    "DotsThree",
    "DotsThreeCircle",
    "DotsThreeOutline",
    "DotsThreeVertical",
    "Download",
    "DownloadSimple",
    "Dress",
    "Dresser",
    "DribbbleLogo",
    "Drone",
    "Drop",
    "DropHalf",
    "DropHalfBottom",
    "DropSimple",
    "DropSlash",
    "DropboxLogo",
    "Ear",
    "EarSlash",
    "Egg",
    "EggCrack",
    "Eject",
    "EjectSimple",
    "Elevator",
    "Empty",
    "Engine",
    "Envelope",
    "EnvelopeOpen",
    "EnvelopeSimple",
    "EnvelopeSimpleOpen",
    "Equalizer",
    "Equals",
    "Eraser",
    "EscalatorDown",
    "EscalatorUp",
    "Exam",
    "ExclamationMark",
    "Exclude",
    "ExcludeSquare",
    "Export",
    "Eye",
    "EyeClosed",
    "EyeSlash",
    "Eyedropper",
    "EyedropperSample",
    "Eyeglasses",
    "Eyes",
    "FaceMask",
    "FacebookLogo",
    "Factory",
    "Faders",
    "FadersHorizontal",
    "FalloutShelter",
    "Fan",
    "Farm",
    "FastForward",
    "FastForwardCircle",
    "Feather",
    "FediverseLogo",
    "FigmaLogo",
    "File",
    "FileArchive",
    "FileArrowDown",
    "FileArrowUp",
    "FileAudio",
    "FileC",
    "FileCloud",
    "FileCode",
    "FileCpp",
    "FileCss",
    "FileCsv",
    "FileDashed",
    "FileDoc",
    "FileHtml",
    "FileImage",
    "FileIni",
    "FileJpg",
    "FileJs",
    "FileJsx",
    "FileLock",
    "FileMagnifyingGlass",
    "FileMd",
    "FileMinus",
    "FilePdf",
    "FilePlus",
    "FilePng",
    "FilePpt",
    "FilePy",
    "FileRs",
    "FileSql",
    "FileSvg",
    "FileText",
    "FileTs",
    "FileTsx",
    "FileTxt",
    "FileVideo",
    "FileVue",
    "FileX",
    "FileXls",
    "FileZip",
    "Files",
    "FilmReel",
    "FilmScript",
    "FilmSlate",
    "FilmStrip",
    "Fingerprint",
    "FingerprintSimple",
    "FinnTheHuman",
    "Fire",
    "FireExtinguisher",
    "FireSimple",
    "FireTruck",
    "FirstAid",
    "FirstAidKit",
    "Fish",
    "FishSimple",
    "Flag",
    "FlagBanner",
    "FlagBannerFold",
    "FlagCheckered",
    "FlagPennant",
    "Flame",
    "Flashlight",
    "Flask",
    "FlipHorizontal",
    "FlipVertical",
    "FloppyDisk",
    "FloppyDiskBack",
    "FlowArrow",
    "Flower",
    "FlowerLotus",
    "FlowerTulip",
    "FlyingSaucer",
    "Folder",
    "FolderDashed",
    "FolderLock",
    "FolderMinus",
    "FolderNotch",
    "FolderNotchMinus",
    "FolderNotchOpen",
    "FolderNotchPlus",
    "FolderOpen",
    "FolderPlus",
    "FolderSimple",
    "FolderSimpleDashed",
    "FolderSimpleLock",
    "FolderSimpleMinus",
    "FolderSimplePlus",
    "FolderSimpleStar",
    "FolderSimpleUser",
    "FolderStar",
    "FolderUser",
    "Folders",
    "Football",
    "FootballHelmet",
    "Footprints",
    "ForkKnife",
    "FourK",
    "FrameCorners",
    "FramerLogo",
    "Function",
    "Funnel",
    "FunnelSimple",
    "FunnelSimpleX",
    "FunnelX",
    "GameController",
    "Garage",
    "GasCan",
    "GasPump",
    "Gauge",
    "Gavel",
    "Gear",
    "GearFine",
    "GearSix",
    "GenderFemale",
    "GenderIntersex",
    "GenderMale",
    "GenderNeuter",
    "GenderNonbinary",
    "GenderTransgender",
    "Ghost",
    "Gif",
    "Gift",
    "GitBranch",
    "GitCommit",
    "GitDiff",
    "GitFork",
    "GitMerge",
    "GitPullRequest",
    "GithubLogo",
    "GitlabLogo",
    "GitlabLogoSimple",
    "Globe",
    "GlobeHemisphereEast",
    "GlobeHemisphereWest",
    "GlobeSimple",
    "GlobeSimpleX",
    "GlobeStand",
    "GlobeX",
    "Goggles",
    "Golf",
    "GoodreadsLogo",
    "GoogleCardboardLogo",
    "GoogleChromeLogo",
    "GoogleDriveLogo",
    "GoogleLogo",
    "GooglePhotosLogo",
    "GooglePlayLogo",
    "GooglePodcastsLogo",
    "Gps",
    "GpsFix",
    "GpsSlash",
    "Gradient",
    "GraduationCap",
    "Grains",
    "GrainsSlash",
    "Graph",
    "GraphicsCard",
    "GreaterThan",
    "GreaterThanOrEqual",
    "GridFour",
    "GridNine",
    "Guitar",
    "HairDryer",
    "Hamburger",
    "Hammer",
    "Hand",
    "HandArrowDown",
    "HandArrowUp",
    "HandCoins",
    "HandDeposit",
    "HandEye",
    "HandFist",
    "HandGrabbing",
    "HandHeart",
    "HandPalm",
    "HandPeace",
    "HandPointing",
    "HandSoap",
    "HandSwipeLeft",
    "HandSwipeRight",
    "HandTap",
    "HandWaving",
    "HandWithdraw",
    "Handbag",
    "HandbagSimple",
    "HandsClapping",
    "HandsPraying",
    "Handshake",
    "HardDrive",
    "HardDrives",
    "HardHat",
    "Hash",
    "HashStraight",
    "HeadCircuit",
    "Headlights",
    "Headphones",
    "Headset",
    "Heart",
    "HeartBreak",
    "HeartHalf",
    "HeartStraight",
    "HeartStraightBreak",
    "Heartbeat",
    "Hexagon",
    "HighDefinition",
    "HighHeel",
    "Highlighter",
    "HighlighterCircle",
    "Hockey",
    "Hoodie",
    "Horse",
    "Hospital",
    "Hourglass",
    "HourglassHigh",
    "HourglassLow",
    "HourglassMedium",
    "HourglassSimple",
    "HourglassSimpleHigh",
    "HourglassSimpleLow",
    "House",
    "HouseLine",
    "HouseSimple",
    "Hurricane",
    "IceCream",
    "IdentificationBadge",
    "IdentificationCard",
    "Image",
    "ImageBroken",
    "ImageSquare",
    "Images",
    "ImagesSquare",
    "Infinity",
    "Info",
    "InstagramLogo",
    "Intersect",
    "IntersectSquare",
    "IntersectThree",
    "Intersection",
    "Invoice",
    "Island",
    "Jar",
    "JarLabel",
    "Jeep",
    "Joystick",
    "Kanban",
    "Key",
    "KeyReturn",
    "Keyboard",
    "Keyhole",
    "Knife",
    "Ladder",
    "LadderSimple",
    "Lamp",
    "LampPendant",
    "Laptop",
    "Lasso",
    "LastfmLogo",
    "Layout",
    "Leaf",
    "Lectern",
    "Lego",
    "LegoSmiley",
    "LessThan",
    "LessThanOrEqual",
    "LetterCircleH",
    "LetterCircleP",
    "LetterCircleV",
    "Lifebuoy",
    "Lightbulb",
    "LightbulbFilament",
    "Lighthouse",
    "Lightning",
    "LightningA",
    "LightningSlash",
    "LineSegment",
    "LineSegments",
    "LineVertical",
    "Link",
    "LinkBreak",
    "LinkSimple",
    "LinkSimpleBreak",
    "LinkSimpleHorizontal",
    "LinkedinLogo",
    "LinktreeLogo",
    "LinuxLogo",
    "List",
    "ListBullets",
    "ListChecks",
    "ListDashes",
    "ListHeart",
    "ListMagnifyingGlass",
    "ListNumbers",
    "ListPlus",
    "ListStar",
    "Lock",
    "LockKey",
    "LockKeyOpen",
    "LockLaminated",
    "LockLaminatedOpen",
    "LockOpen",
    "LockSimple",
    "LockSimpleOpen",
    "Lockers",
    "Log",
    "MagicWand",
    "Magnet",
    "MagnetStraight",
    "MagnifyingGlass",
    "MagnifyingGlassMinus",
    "MagnifyingGlassPlus",
    "Mailbox",
    "MapPin",
    "MapPinArea",
    "MapPinLine",
    "MapPinPlus",
    "MapPinSimple",
    "MapPinSimpleArea",
    "MapPinSimpleLine",
    "MapTrifold",
    "MarkdownLogo",
    "MarkerCircle",
    "Martini",
    "MaskHappy",
    "MaskSad",
    "MastodonLogo",
    "MathOperations",
    "MatrixLogo",
    "Medal",
    "MedalMilitary",
    "MediumLogo",
    "Megaphone",
    "MegaphoneSimple",
    "MemberOf",
    "Memory",
    "MessengerLogo",
    "MetaLogo",
    "Meteor",
    "Metronome",
    "Microphone",
    "MicrophoneSlash",
    "MicrophoneStage",
    "Microscope",
    "MicrosoftExcelLogo",
    "MicrosoftOutlookLogo",
    "MicrosoftTeamsLogo",
    "MicrosoftWordLogo",
    "Minus",
    "MinusCircle",
    "MinusSquare",
    "Money",
    "MoneyWavy",
    "Monitor",
    "MonitorArrowUp",
    "MonitorPlay",
    "Moon",
    "MoonStars",
    "Moped",
    "MopedFront",
    "Mosque",
    "Motorcycle",
    "Mountains",
    "Mouse",
    "MouseLeftClick",
    "MouseMiddleClick",
    "MouseRightClick",
    "MouseScroll",
    "MouseSimple",
    "MusicNote",
    "MusicNoteSimple",
    "MusicNotes",
    "MusicNotesMinus",
    "MusicNotesPlus",
    "MusicNotesSimple",
    "NavigationArrow",
    "Needle",
    "Network",
    "NetworkSlash",
    "NetworkX",
    "Newspaper",
    "NewspaperClipping",
    "NotEquals",
    "NotMemberOf",
    "NotSubsetOf",
    "NotSupersetOf",
    "Notches",
    "Note",
    "NoteBlank",
    "NotePencil",
    "Notebook",
    "Notepad",
    "Notification",
    "NotionLogo",
    "NuclearPlant",
    "NumberCircleEight",
    "NumberCircleFive",
    "NumberCircleFour",
    "NumberCircleNine",
    "NumberCircleOne",
    "NumberCircleSeven",
    "NumberCircleSix",
    "NumberCircleThree",
    "NumberCircleTwo",
    "NumberCircleZero",
    "NumberEight",
    "NumberFive",
    "NumberFour",
    "NumberNine",
    "NumberOne",
    "NumberSeven",
    "NumberSix",
    "NumberSquareEight",
    "NumberSquareFive",
    "NumberSquareFour",
    "NumberSquareNine",
    "NumberSquareOne",
    "NumberSquareSeven",
    "NumberSquareSix",
    "NumberSquareThree",
    "NumberSquareTwo",
    "NumberSquareZero",
    "NumberThree",
    "NumberTwo",
    "NumberZero",
    "Numpad",
    "Nut",
    "NyTimesLogo",
    "Octagon",
    "OfficeChair",
    "Onigiri",
    "OpenAiLogo",
    "Option",
    "Orange",
    "OrangeSlice",
    "Oven",
    "Package",
    "PaintBrush",
    "PaintBrushBroad",
    "PaintBrushHousehold",
    "PaintBucket",
    "PaintRoller",
    "Palette",
    "Panorama",
    "Pants",
    "PaperPlane",
    "PaperPlaneRight",
    "PaperPlaneTilt",
    "Paperclip",
    "PaperclipHorizontal",
    "Parachute",
    "Paragraph",
    "Parallelogram",
    "Park",
    "Password",
    "Path",
    "PatreonLogo",
    "Pause",
    "PauseCircle",
    "PawPrint",
    "PaypalLogo",
    "Peace",
    "Pen",
    "PenNib",
    "PenNibStraight",
    "Pencil",
    "PencilCircle",
    "PencilLine",
    "PencilRuler",
    "PencilSimple",
    "PencilSimpleLine",
    "PencilSimpleSlash",
    "PencilSlash",
    "Pentagon",
    "Pentagram",
    "Pepper",
    "Percent",
    "Person",
    "PersonArmsSpread",
    "PersonSimple",
    "PersonSimpleBike",
    "PersonSimpleCircle",
    "PersonSimpleHike",
    "PersonSimpleRun",
    "PersonSimpleSki",
    "PersonSimpleSwim",
    "PersonSimpleTaiChi",
    "PersonSimpleThrow",
    "PersonSimpleWalk",
    "Perspective",
    "Phone",
    "PhoneCall",
    "PhoneDisconnect",
    "PhoneIncoming",
    "PhoneList",
    "PhoneOutgoing",
    "PhonePause",
    "PhonePlus",
    "PhoneSlash",
    "PhoneTransfer",
    "PhoneX",
    "PhosphorLogo",
    "Pi",
    "PianoKeys",
    "PicnicTable",
    "PictureInPicture",
    "PiggyBank",
    "Pill",
    "PingPong",
    "PintGlass",
    "PinterestLogo",
    "Pinwheel",
    "Pipe",
    "PipeWrench",
    "PixLogo",
    "Pizza",
    "Placeholder",
    "Planet",
    "Plant",
    "Play",
    "PlayCircle",
    "PlayPause",
    "Playlist",
    "Plug",
    "PlugCharging",
    "Plugs",
    "PlugsConnected",
    "Plus",
    "PlusCircle",
    "PlusMinus",
    "PlusSquare",
    "PokerChip",
    "PoliceCar",
    "Polygon",
    "Popcorn",
    "Popsicle",
    "PottedPlant",
    "Power",
    "Prescription",
    "Presentation",
    "PresentationChart",
    "Printer",
    "Prohibit",
    "ProhibitInset",
    "ProjectorScreen",
    "ProjectorScreenChart",
    "Pulse",
    "PushPin",
    "PushPinSimple",
    "PushPinSimpleSlash",
    "PushPinSlash",
    "PuzzlePiece",
    "QrCode",
    "Question",
    "QuestionMark",
    "Queue",
    "Quotes",
    "Rabbit",
    "Racquet",
    "Radical",
    "Radio",
    "RadioButton",
    "Radioactive",
    "Rainbow",
    "RainbowCloud",
    "Ranking",
    "ReadCvLogo",
    "Receipt",
    "ReceiptX",
    "Record",
    "Rectangle",
    "RectangleDashed",
    "Recycle",
    "RedditLogo",
    "Repeat",
    "RepeatOnce",
    "ReplitLogo",
    "Resize",
    "Rewind",
    "RewindCircle",
    "RoadHorizon",
    "Robot",
    "Rocket",
    "RocketLaunch",
    "Rows",
    "RowsPlusBottom",
    "RowsPlusTop",
    "Rss",
    "RssSimple",
    "Rug",
    "Ruler",
    "Sailboat",
    "Scales",
    "Scan",
    "ScanSmiley",
    "Scissors",
    "Scooter",
    "Screencast",
    "Screwdriver",
    "Scribble",
    "ScribbleLoop",
    "Scroll",
    "Seal",
    "SealCheck",
    "SealPercent",
    "SealQuestion",
    "SealWarning",
    "Seat",
    "Seatbelt",
    "SecurityCamera",
    "Selection",
    "SelectionAll",
    "SelectionBackground",
    "SelectionForeground",
    "SelectionInverse",
    "SelectionPlus",
    "SelectionSlash",
    "Shapes",
    "Share",
    "ShareFat",
    "ShareNetwork",
    "Shield",
    "ShieldCheck",
    "ShieldCheckered",
    "ShieldChevron",
    "ShieldPlus",
    "ShieldSlash",
    "ShieldStar",
    "ShieldWarning",
    "ShippingContainer",
    "ShirtFolded",
    "ShootingStar",
    "ShoppingBag",
    "ShoppingBagOpen",
    "ShoppingCart",
    "ShoppingCartSimple",
    "Shovel",
    "Shower",
    "Shrimp",
    "Shuffle",
    "ShuffleAngular",
    "ShuffleSimple",
    "Sidebar",
    "SidebarSimple",
    "Sigma",
    "SignIn",
    "SignOut",
    "Signature",
    "Signpost",
    "SimCard",
    "Siren",
    "SketchLogo",
    "SkipBack",
    "SkipBackCircle",
    "SkipForward",
    "SkipForwardCircle",
    "Skull",
    "SkypeLogo",
    "SlackLogo",
    "Sliders",
    "SlidersHorizontal",
    "Slideshow",
    "Smiley",
    "SmileyAngry",
    "SmileyBlank",
    "SmileyMeh",
    "SmileyMelting",
    "SmileyNervous",
    "SmileySad",
    "SmileySticker",
    "SmileyWink",
    "SmileyXEyes",
    "SnapchatLogo",
    "Sneaker",
    "SneakerMove",
    "Snowflake",
    "SoccerBall",
    "Sock",
    "SolarPanel",
    "SolarRoof",
    "SortAscending",
    "SortDescending",
    "SoundcloudLogo",
    "Spade",
    "Sparkle",
    "SpeakerHifi",
    "SpeakerHigh",
    "SpeakerLow",
    "SpeakerNone",
    "SpeakerSimpleHigh",
    "SpeakerSimpleLow",
    "SpeakerSimpleNone",
    "SpeakerSimpleSlash",
    "SpeakerSimpleX",
    "SpeakerSlash",
    "SpeakerX",
    "Speedometer",
    "Sphere",
    "Spinner",
    "SpinnerBall",
    "SpinnerGap",
    "Spiral",
    "SplitHorizontal",
    "SplitVertical",
    "SpotifyLogo",
    "SprayBottle",
    "Square",
    "SquareHalf",
    "SquareHalfBottom",
    "SquareLogo",
    "SquareSplitVertical",
    "SquaresFour",
    "Stack",
    "StackMinus",
    "StackOverflowLogo",
    "StackPlus",
    "StackSimple",
    "Stairs",
    "Stamp",
    "StandardDefinition",
    "Star",
    "StarAndCrescent",
    "StarFour",
    "StarHalf",
    "StarOfDavid",
    "SteamLogo",
    "SteeringWheel",
    "Steps",
    "Stethoscope",
    "Sticker",
    "Stool",
    "Stop",
    "StopCircle",
    "Storefront",
    "Strategy",
    "StripeLogo",
    "Student",
    "SubsetOf",
    "SubsetProperOf",
    "Subtitles",
    "SubtitlesSlash",
    "Subtract",
    "SubtractSquare",
    "Subway",
    "Suitcase",
    "SuitcaseRolling",
    "SuitcaseSimple",
    "Sun",
    "SunDim",
    "SunHorizon",
    "Sunglasses",
    "SupersetOf",
    "SupersetProperOf",
    "Swap",
    "Swatches",
    "SwimmingPool",
    "Sword",
    "Synagogue",
    "Syringe",
    "TShirt",
    "Table",
    "Tabs",
    "Tag",
    "TagChevron",
    "TagSimple",
    "Target",
    "Taxi",
    "TeaBag",
    "TelegramLogo",
    "Television",
    "TelevisionSimple",
    "TennisBall",
    "Tent",
    "Terminal",
    "TerminalWindow",
    "TestTube",
    "TextAUnderline",
    "TextAa",
    "TextAlignCenter",
    "TextAlignJustify",
    "TextAlignLeft",
    "TextAlignRight",
    "TextB",
    "TextColumns",
    "TextH",
    "TextHFive",
    "TextHFour",
    "TextHOne",
    "TextHSix",
    "TextHThree",
    "TextHTwo",
    "TextIndent",
    "TextItalic",
    "TextOutdent",
    "TextStrikethrough",
    "TextSubscript",
    "TextSuperscript",
    "TextT",
    "TextTSlash",
    "TextUnderline",
    "Textbox",
    "Thermometer",
    "ThermometerCold",
    "ThermometerHot",
    "ThermometerSimple",
    "ThreadsLogo",
    "ThreeD",
    "ThumbsDown",
    "ThumbsUp",
    "Ticket",
    "TidalLogo",
    "TiktokLogo",
    "Tilde",
    "Timer",
    "TipJar",
    "Tipi",
    "Tire",
    "ToggleLeft",
    "ToggleRight",
    "Toilet",
    "ToiletPaper",
    "Toolbox",
    "Tooth",
    "Tornado",
    "Tote",
    "ToteSimple",
    "Towel",
    "Tractor",
    "Trademark",
    "TrademarkRegistered",
    "TrafficCone",
    "TrafficSign",
    "TrafficSignal",
    "Train",
    "TrainRegional",
    "TrainSimple",
    "Tram",
    "Translate",
    "Trash",
    "TrashSimple",
    "Tray",
    "TrayArrowDown",
    "TrayArrowUp",
    "TreasureChest",
    "Tree",
    "TreeEvergreen",
    "TreePalm",
    "TreeStructure",
    "TreeView",
    "TrendDown",
    "TrendUp",
    "Triangle",
    "TriangleDashed",
    "Trolley",
    "TrolleySuitcase",
    "Trophy",
    "Truck",
    "TruckTrailer",
    "TumblrLogo",
    "TwitchLogo",
    "TwitterLogo",
    "Umbrella",
    "UmbrellaSimple",
    "Union",
    "Unite",
    "UniteSquare",
    "Upload",
    "UploadSimple",
    "Usb",
    "User",
    "UserCheck",
    "UserCircle",
    "UserCircleCheck",
    "UserCircleDashed",
    "UserCircleGear",
    "UserCircleMinus",
    "UserCirclePlus",
    "UserFocus",
    "UserGear",
    "UserList",
    "UserMinus",
    "UserPlus",
    "UserRectangle",
    "UserSound",
    "UserSquare",
    "UserSwitch",
    "Users",
    "UsersFour",
    "UsersThree",
    "Van",
    "Vault",
    "VectorThree",
    "VectorTwo",
    "Vibrate",
    "Video",
    "VideoCamera",
    "VideoCameraSlash",
    "VideoConference",
    "Vignette",
    "VinylRecord",
    "VirtualReality",
    "Virus",
    "Visor",
    "Voicemail",
    "Volleyball",
    "Wall",
    "Wallet",
    "Warehouse",
    "Warning",
    "WarningCircle",
    "WarningDiamond",
    "WarningOctagon",
    "WashingMachine",
    "Watch",
    "WaveSawtooth",
    "WaveSine",
    "WaveSquare",
    "WaveTriangle",
    "Waveform",
    "WaveformSlash",
    "Waves",
    "Webcam",
    "WebcamSlash",
    "WebhooksLogo",
    "WechatLogo",
    "WhatsappLogo",
    "Wheelchair",
    "WheelchairMotion",
    "WifiHigh",
    "WifiLow",
    "WifiMedium",
    "WifiNone",
    "WifiSlash",
    "WifiX",
    "Wind",
    "Windmill",
    "WindowsLogo",
    "Wine",
    "Wrench",
    "X",
    "XCircle",
    "XLogo",
    "XSquare",
    "Yarn",
    "YinYang",
    "YoutubeLogo",
  ],
  Nn = "https://framer.com/m/phosphor-icons/",
  ka = ["thin", "light", "regular", "bold", "fill", "duotone"],
  Yn = bt.reduce((r, t) => ((r[t.toLowerCase()] = t), r), {});
function ye(r) {
  let {
      color: t,
      selectByList: n,
      iconSearch: i,
      iconSelection: o,
      onClick: c,
      onMouseDown: d,
      onMouseUp: g,
      onMouseEnter: u,
      onMouseLeave: s,
      weight: C,
      mirrored: w,
    } = r,
    x = U(!1),
    h = La(bt, n, i, o, Yn),
    [k, X] = We(h === "Home" ? ba(me) : null);
  async function T() {
    try {
      let R = await import(`${Nn}${h}.js@0.0.57`);
      x.current && X(R.default(me));
    } catch {
      x.current && X(null);
    }
  }
  we(
    () => (
      (x.current = !0),
      T(),
      () => {
        x.current = !1;
      }
    ),
    [h]
  );
  let p = Pe.current() === Pe.canvas ? e(va, {}) : null;
  return e(l.div, {
    style: { display: "contents" },
    onClick: c,
    onMouseEnter: u,
    onMouseLeave: s,
    onMouseDown: d,
    onMouseUp: g,
    children: k
      ? e("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 256 256",
          style: {
            userSelect: "none",
            width: "100%",
            height: "100%",
            display: "inline-block",
            fill: t,
            color: t,
            flexShrink: 0,
            transform: w ? "scale(-1, 1)" : void 0,
          },
          focusable: "false",
          color: t,
          children: e(k, { color: t, weight: C }),
        })
      : p,
  });
}
ye.displayName = "Phosphor";
ye.defaultProps = {
  width: 24,
  height: 24,
  iconSelection: "House",
  iconSearch: "House",
  color: "#66F",
  selectByList: !0,
  weight: "regular",
  mirrored: !1,
};
Z(ye, {
  selectByList: {
    type: y.Boolean,
    title: "Select",
    enabledTitle: "List",
    disabledTitle: "Search",
    defaultValue: ye.defaultProps.selectByList,
  },
  iconSelection: {
    type: y.Enum,
    options: bt,
    defaultValue: ye.defaultProps.iconSelection,
    title: "Name",
    hidden: ({ selectByList: r }) => !r,
    description:
      "Find every icon name on the [Phosphor site](https://phosphoricons.com/)",
  },
  iconSearch: {
    type: y.String,
    title: "Name",
    placeholder: "Menu, Wifi, Box\u2026",
    hidden: ({ selectByList: r }) => r,
  },
  color: { type: y.Color, title: "Color", defaultValue: ye.defaultProps.color },
  weight: {
    type: y.Enum,
    title: "Weight",
    optionTitles: ka.map((r) => r.charAt(0).toUpperCase() + r.slice(1)),
    options: ka,
    defaultValue: ye.defaultProps.weight,
  },
  mirrored: {
    type: y.Boolean,
    enabledTitle: "Yes",
    disabledTitle: "No",
    defaultValue: ye.defaultProps.mirrored,
  },
  ...wa,
});
var En = Q(ye),
  Dn = { jKER9xb9W: { hover: !0 } },
  qn = "framer-KueLh",
  Zn = { jKER9xb9W: "framer-v-e3uxew" };
function Hn(r, ...t) {
  let n = {};
  return t?.forEach((i) => i && Object.assign(n, r[i])), n;
}
var Gn = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  Qn = ({ value: r, children: t }) => {
    let n = ee(J),
      i = r ?? n.transition,
      o = Y(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
    return e(J.Provider, { value: o, children: t });
  },
  On = l.create(f),
  Kn = ({ height: r, id: t, width: n, ...i }) => ({ ...i }),
  $n = (r, t) =>
    r.layoutDependency ? t.join("-") + r.layoutDependency : t.join("-"),
  e1 = N(function (r, t) {
    let { activeLocale: n, setLocale: i } = q(),
      { style: o, className: c, layoutId: d, variant: g, ...u } = Kn(r),
      {
        baseVariant: s,
        classNames: C,
        clearLoadingGesture: w,
        gestureHandlers: x,
        gestureVariant: h,
        isLoading: k,
        setGestureState: X,
        setVariant: T,
        variants: F,
      } = te({
        defaultVariant: "jKER9xb9W",
        enabledGestures: Dn,
        variant: g,
        variantClassNames: Zn,
      }),
      p = $n(r, F),
      S = U(null),
      I = D(),
      R = [],
      m = re();
    return e(j, {
      id: d ?? I,
      children: e(On, {
        animate: F,
        initial: !1,
        children: e(Qn, {
          value: Gn,
          children: e(Ae, {
            href: { webPageId: "de9qHHVif" },
            nodeId: "jKER9xb9W",
            children: v(l.a, {
              ...u,
              ...x,
              className: `${E(qn, ...R, "framer-e3uxew", c, C)} framer-fw26eq`,
              "data-border": !0,
              "data-framer-name": "Variant 1",
              layoutDependency: p,
              layoutId: "jKER9xb9W",
              ref: t ?? S,
              style: {
                "--border-bottom-width": "1.5px",
                "--border-color":
                  "var(--token-2b628465-dfc6-43a8-9465-243a89fbaf26, rgb(12, 74, 52))",
                "--border-left-width": "1.5px",
                "--border-right-width": "1.5px",
                "--border-style": "solid",
                "--border-top-width": "1.5px",
                backgroundColor: "rgba(0, 0, 0, 0.05)",
                borderBottomLeftRadius: 28,
                borderBottomRightRadius: 28,
                borderTopLeftRadius: 28,
                borderTopRightRadius: 28,
                ...o,
              },
              ...Hn(
                { "jKER9xb9W-hover": { "data-framer-name": void 0 } },
                s,
                h
              ),
              children: [
                e(l.div, {
                  className: "framer-14ae85y",
                  layoutDependency: p,
                  layoutId: "jxmfSKxMW",
                  children: e(L, {
                    children: e(l.div, {
                      className: "framer-1gg6e7f-container",
                      layoutDependency: p,
                      layoutId: "XyXrBMql1-container",
                      children: e(ye, {
                        color:
                          "var(--token-2b628465-dfc6-43a8-9465-243a89fbaf26, rgb(14, 96, 85))",
                        height: "100%",
                        iconSearch: "bell",
                        iconSelection: "Bell",
                        id: "XyXrBMql1",
                        layoutId: "XyXrBMql1",
                        mirrored: !1,
                        selectByList: !0,
                        style: { height: "100%", width: "100%" },
                        weight: "duotone",
                        width: "100%",
                      }),
                    }),
                  }),
                }),
                e(l.div, {
                  className: "framer-x2rc9e",
                  layoutDependency: p,
                  layoutId: "YkRFDp8LP",
                  style: {
                    backgroundColor:
                      "var(--token-2b628465-dfc6-43a8-9465-243a89fbaf26, rgb(12, 74, 52))",
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                  },
                  variants: {
                    "jKER9xb9W-hover": { backgroundColor: "rgb(11, 82, 72)" },
                  },
                  children: e(b, {
                    __fromCanvasComponent: !0,
                    children: e(f, {
                      children: e(l.p, {
                        style: {
                          "--font-selector": "SW50ZXItTWVkaXVt",
                          "--framer-font-family":
                            '"Inter", "Inter Placeholder", sans-serif',
                          "--framer-font-weight": "500",
                          "--framer-line-height": "100%",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                        },
                        children: "Get Notified When We Launch",
                      }),
                    }),
                    className: "framer-1tyfef5",
                    fonts: ["Inter-Medium"],
                    layoutDependency: p,
                    layoutId: "fHY3_e78w",
                    style: {
                      "--extracted-r6o4lv": "rgb(255, 255, 255)",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  r1 = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-KueLh.framer-fw26eq, .framer-KueLh .framer-fw26eq { display: block; }",
    ".framer-KueLh.framer-e3uxew { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 4px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-KueLh .framer-14ae85y { flex: none; height: 40px; overflow: hidden; position: relative; width: 44px; }",
    ".framer-KueLh .framer-1gg6e7f-container { flex: none; height: 24px; left: calc(50.00000000000002% - 24px / 2); position: absolute; top: calc(50.00000000000002% - 24px / 2); width: 24px; }",
    ".framer-KueLh .framer-x2rc9e { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: hidden; padding: 0px 20px 0px 20px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-KueLh .framer-1tyfef5 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-KueLh.framer-e3uxew, .framer-KueLh .framer-x2rc9e { gap: 0px; } .framer-KueLh.framer-e3uxew > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-KueLh.framer-e3uxew > :first-child { margin-left: 0px; } .framer-KueLh.framer-e3uxew > :last-child { margin-right: 0px; } .framer-KueLh .framer-x2rc9e > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-KueLh .framer-x2rc9e > :first-child { margin-top: 0px; } .framer-KueLh .framer-x2rc9e > :last-child { margin-bottom: 0px; } }",
    '.framer-KueLh[data-border="true"]::after, .framer-KueLh [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Wr = H(e1, r1, "framer-KueLh"),
  wt = Wr;
Wr.displayName = "Botton \xB7 Notify";
Wr.defaultProps = { height: 48, width: 322 };
G(
  Wr,
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
    ...En,
  ],
  { supportsExplicitInterCodegen: !0 }
);
var t1 = ["v3xUdThr1", "lB5VsdyGE"],
  a1 = "framer-8WRKk",
  n1 = { lB5VsdyGE: "framer-v-z4xmyp", v3xUdThr1: "framer-v-1nfdaqm" };
function i1(r, ...t) {
  let n = {};
  return t?.forEach((i) => i && Object.assign(n, r[i])), n;
}
var o1 = { damping: 30, delay: 0, mass: 2, stiffness: 500, type: "spring" },
  l1 = (r, t) => `translateY(-50%) ${t}`,
  Lt = (r, t) => `translate(-50%, -50%) ${t}`,
  s1 = ({ value: r, children: t }) => {
    let n = ee(J),
      i = r ?? n.transition,
      o = Y(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
    return e(J.Provider, { value: o, children: t });
  },
  f1 = l.create(f),
  m1 = { "Variant 1": "v3xUdThr1", "Variant 2": "lB5VsdyGE" },
  c1 = ({ height: r, id: t, width: n, ...i }) => {
    var o, c;
    return {
      ...i,
      variant:
        (c = (o = m1[i.variant]) !== null && o !== void 0 ? o : i.variant) !==
          null && c !== void 0
          ? c
          : "v3xUdThr1",
    };
  },
  d1 = (r, t) =>
    r.layoutDependency ? t.join("-") + r.layoutDependency : t.join("-"),
  p1 = N(function (r, t) {
    let { activeLocale: n, setLocale: i } = q(),
      { style: o, className: c, layoutId: d, variant: g, ...u } = c1(r),
      {
        baseVariant: s,
        classNames: C,
        clearLoadingGesture: w,
        gestureHandlers: x,
        gestureVariant: h,
        isLoading: k,
        setGestureState: X,
        setVariant: T,
        variants: F,
      } = te({
        cycleOrder: t1,
        defaultVariant: "v3xUdThr1",
        variant: g,
        variantClassNames: n1,
      }),
      p = d1(r, F),
      S = U(null),
      I = D(),
      R = [],
      m = re();
    return e(j, {
      id: d ?? I,
      children: e(f1, {
        animate: F,
        initial: !1,
        children: e(s1, {
          value: o1,
          children: v(l.div, {
            ...u,
            ...x,
            className: E(a1, ...R, "framer-1nfdaqm", c, C),
            "data-framer-name": "Variant 1",
            layoutDependency: p,
            layoutId: "v3xUdThr1",
            ref: t ?? S,
            style: { ...o },
            ...i1({ lB5VsdyGE: { "data-framer-name": "Variant 2" } }, s, h),
            children: [
              v(l.div, {
                className: "framer-me11pn",
                layoutDependency: p,
                layoutId: "x9q0UkjHT",
                transformTemplate: l1,
                children: [
                  e(l.div, {
                    className: "framer-k3evl1",
                    layoutDependency: p,
                    layoutId: "FCIMuT27e",
                    style: {
                      backgroundColor: "rgb(255, 233, 45)",
                      borderBottomLeftRadius: 12,
                      borderBottomRightRadius: 12,
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                    },
                    transformTemplate: Lt,
                  }),
                  e(l.div, {
                    className: "framer-1osgkpv",
                    layoutDependency: p,
                    layoutId: "j_zfZe0XN",
                    style: {
                      borderBottomLeftRadius: 12,
                      borderBottomRightRadius: 12,
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                    },
                  }),
                ],
              }),
              v(l.div, {
                className: "framer-i1ppsv",
                layoutDependency: p,
                layoutId: "vSF3MvzgB",
                children: [
                  e(l.div, {
                    className: "framer-sylap5",
                    layoutDependency: p,
                    layoutId: "puILMWv1V",
                    style: {
                      backgroundColor: "rgb(255, 206, 227)",
                      borderBottomLeftRadius: 12,
                      borderBottomRightRadius: 12,
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                    },
                    transformTemplate: Lt,
                  }),
                  e(l.div, {
                    className: "framer-azkdld",
                    layoutDependency: p,
                    layoutId: "cyMzL1jmT",
                    style: {
                      borderBottomLeftRadius: 12,
                      borderBottomRightRadius: 12,
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                    },
                  }),
                ],
              }),
              v(l.div, {
                className: "framer-1at7ji",
                layoutDependency: p,
                layoutId: "XAFdEuN2I",
                children: [
                  e(l.div, {
                    className: "framer-1buf9te",
                    layoutDependency: p,
                    layoutId: "TwA7wKrxL",
                    style: {
                      backgroundColor: "rgb(146, 197, 250)",
                      borderBottomLeftRadius: 12,
                      borderBottomRightRadius: 12,
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                    },
                    transformTemplate: Lt,
                  }),
                  e(l.div, {
                    className: "framer-1tp9ftr",
                    layoutDependency: p,
                    layoutId: "WNWG3qPpN",
                    style: {
                      borderBottomLeftRadius: 12,
                      borderBottomRightRadius: 12,
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                    },
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  }),
  h1 = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-8WRKk.framer-1on8w0k, .framer-8WRKk .framer-1on8w0k { display: block; }",
    ".framer-8WRKk.framer-1nfdaqm { height: 24px; overflow: visible; position: relative; width: 49px; }",
    ".framer-8WRKk .framer-me11pn { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); left: 0px; overflow: visible; position: absolute; top: 50%; width: 24px; z-index: 2; }",
    ".framer-8WRKk .framer-k3evl1, .framer-8WRKk .framer-sylap5, .framer-8WRKk .framer-1buf9te { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 22px); left: 50%; overflow: hidden; position: absolute; top: 50%; width: 22px; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
    ".framer-8WRKk .framer-1osgkpv, .framer-8WRKk .framer-azkdld, .framer-8WRKk .framer-1tp9ftr { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-override, transform); z-index: 2; }",
    ".framer-8WRKk .framer-i1ppsv { flex: none; height: 24px; left: calc(50.00000000000002% - 24px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 24px / 2); width: 24px; z-index: 2; }",
    ".framer-8WRKk .framer-1at7ji { flex: none; height: 24px; overflow: visible; position: absolute; right: 0px; top: calc(50.00000000000002% - 24px / 2); width: 24px; z-index: 2; }",
    ".framer-8WRKk.framer-v-z4xmyp.framer-1nfdaqm { width: 48px; }",
    ".framer-8WRKk.framer-v-z4xmyp .framer-me11pn { left: unset; right: 0px; }",
    ".framer-8WRKk.framer-v-z4xmyp .framer-1at7ji { left: 0px; right: unset; }",
  ],
  or = H(p1, h1, "framer-8WRKk"),
  kt = or;
or.displayName = "Circles";
or.defaultProps = { height: 24, width: 49 };
Z(or, {
  variant: {
    options: ["v3xUdThr1", "lB5VsdyGE"],
    optionTitles: ["Variant 1", "Variant 2"],
    title: "Variant",
    type: y.Enum,
  },
});
G(or, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 });
var u1 = Q(kt),
  g1 = { jsrol4hFl: { hover: !0 } },
  x1 = ["xXp8Zv94J", "jsrol4hFl"],
  C1 = "framer-D6aMQ",
  v1 = { jsrol4hFl: "framer-v-yn1l59", xXp8Zv94J: "framer-v-1kx2y6" };
function Rt(r, ...t) {
  let n = {};
  return t?.forEach((i) => i && Object.assign(n, r[i])), n;
}
var y1 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  b1 = ({ value: r, children: t }) => {
    let n = ee(J),
      i = r ?? n.transition,
      o = Y(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
    return e(J.Provider, { value: o, children: t });
  },
  w1 = l.create(f),
  L1 = { "Variant 1": "xXp8Zv94J", "Variant 2": "jsrol4hFl" },
  k1 = ({ height: r, id: t, width: n, ...i }) => {
    var o, c;
    return {
      ...i,
      variant:
        (c = (o = L1[i.variant]) !== null && o !== void 0 ? o : i.variant) !==
          null && c !== void 0
          ? c
          : "xXp8Zv94J",
    };
  },
  R1 = (r, t) =>
    r.layoutDependency ? t.join("-") + r.layoutDependency : t.join("-"),
  F1 = N(function (r, t) {
    let { activeLocale: n, setLocale: i } = q(),
      { style: o, className: c, layoutId: d, variant: g, ...u } = k1(r),
      {
        baseVariant: s,
        classNames: C,
        clearLoadingGesture: w,
        gestureHandlers: x,
        gestureVariant: h,
        isLoading: k,
        setGestureState: X,
        setVariant: T,
        variants: F,
      } = te({
        cycleOrder: x1,
        defaultVariant: "xXp8Zv94J",
        enabledGestures: g1,
        variant: g,
        variantClassNames: v1,
      }),
      p = R1(r, F),
      { activeVariantCallback: S, delay: I } = xe(s),
      R = S(async (...$) => {
        await I(() => T("jsrol4hFl"), 100);
      });
    Gt(s, { default: R });
    let m = U(null),
      a = D(),
      M = [],
      V = re();
    return e(j, {
      id: d ?? a,
      children: e(w1, {
        animate: F,
        initial: !1,
        children: e(b1, {
          value: y1,
          children: e(Ae, {
            nodeId: "xXp8Zv94J",
            ...Rt({ jsrol4hFl: { href: { webPageId: "de9qHHVif" } } }, s, h),
            children: v(l.a, {
              ...u,
              ...x,
              className: `${E(C1, ...M, "framer-1kx2y6", c, C)} framer-dwti03`,
              "data-border": !0,
              "data-framer-name": "Variant 1",
              "data-highlight": !0,
              layoutDependency: p,
              layoutId: "xXp8Zv94J",
              ref: t ?? m,
              style: {
                "--border-bottom-width": "1.5px",
                "--border-color": "rgb(255, 255, 255)",
                "--border-left-width": "1.5px",
                "--border-right-width": "1.5px",
                "--border-style": "solid",
                "--border-top-width": "1.5px",
                backgroundColor: "rgba(0, 0, 0, 0)",
                borderBottomLeftRadius: 24,
                borderBottomRightRadius: 24,
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
                ...o,
              },
              variants: {
                "jsrol4hFl-hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              },
              ...Rt(
                {
                  "jsrol4hFl-hover": { "data-framer-name": void 0 },
                  jsrol4hFl: { "data-framer-name": "Variant 2" },
                },
                s,
                h
              ),
              children: [
                e(L, {
                  height: 24,
                  width: "48px",
                  y: (V?.y || 0) + (0 + ((V?.height || 48) - 0 - 24) / 2),
                  children: e(l.div, {
                    className: "framer-11hlkaq-container",
                    layoutDependency: p,
                    layoutId: "CIyBmz2I5-container",
                    children: e(kt, {
                      height: "100%",
                      id: "CIyBmz2I5",
                      layoutId: "CIyBmz2I5",
                      style: { height: "100%", width: "100%" },
                      variant: "lB5VsdyGE",
                      width: "100%",
                      ...Rt({ jsrol4hFl: { variant: "v3xUdThr1" } }, s, h),
                    }),
                  }),
                }),
                e(b, {
                  __fromCanvasComponent: !0,
                  children: e(f, {
                    children: e(l.p, {
                      style: {
                        "--font-selector":
                          "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS01MDA=",
                        "--framer-font-family":
                          '"Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif',
                        "--framer-font-weight": "500",
                        "--framer-line-height": "1.4em",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                      },
                      children: "Join the club",
                    }),
                  }),
                  className: "framer-1in16sl",
                  fonts: ["GF;Bricolage Grotesque-500"],
                  layoutDependency: p,
                  layoutId: "uyVNYY2fN",
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
  I1 = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-D6aMQ.framer-dwti03, .framer-D6aMQ .framer-dwti03 { display: block; }",
    ".framer-D6aMQ.framer-1kx2y6 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: 48px; justify-content: center; overflow: hidden; padding: 0px 32px 0px 32px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-D6aMQ .framer-11hlkaq-container { flex: none; height: 24px; position: relative; width: 48px; }",
    ".framer-D6aMQ .framer-1in16sl { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-D6aMQ.framer-1kx2y6 { gap: 0px; } .framer-D6aMQ.framer-1kx2y6 > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } .framer-D6aMQ.framer-1kx2y6 > :first-child { margin-left: 0px; } .framer-D6aMQ.framer-1kx2y6 > :last-child { margin-right: 0px; } }",
    ".framer-D6aMQ.framer-v-yn1l59.framer-1kx2y6 { text-decoration: none; }",
    '.framer-D6aMQ[data-border="true"]::after, .framer-D6aMQ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  lr = H(F1, I1, "framer-D6aMQ"),
  Ft = lr;
lr.displayName = "Nav CTA";
lr.defaultProps = { height: 48, width: 218.5 };
Z(lr, {
  variant: {
    options: ["xXp8Zv94J", "jsrol4hFl"],
    optionTitles: ["Variant 1", "Variant 2"],
    title: "Variant",
    type: y.Enum,
  },
});
G(
  lr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Bricolage Grotesque",
          source: "google",
          style: "normal",
          url: "fonts/s/bricolagegrotesque/v7/3y9U6as8bTXq_nANBjzKo3IeZx8z6up5BeSl5jBNz_19PpbpMXuECpwUxJBOm_OJWiaaD30YfKfjZZoLvSniyMgvs-wJDtw.woff2",
          weight: "500",
        },
      ],
    },
    ...u1,
  ],
  { supportsExplicitInterCodegen: !0 }
);
var S1 = "framer-do0z7",
  V1 = { Ln5gnXBvr: "framer-v-bxmnzg" };
var T1 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  M1 = ({ value: r, children: t }) => {
    let n = ee(J),
      i = r ?? n.transition,
      o = Y(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
    return e(J.Provider, { value: o, children: t });
  },
  U1 = l.create(f),
  X1 = ({ height: r, id: t, width: n, ...i }) => ({ ...i }),
  B1 = (r, t) =>
    r.layoutDependency ? t.join("-") + r.layoutDependency : t.join("-"),
  J1 = N(function (r, t) {
    let { activeLocale: n, setLocale: i } = q(),
      { style: o, className: c, layoutId: d, variant: g, ...u } = X1(r),
      {
        baseVariant: s,
        classNames: C,
        clearLoadingGesture: w,
        gestureHandlers: x,
        gestureVariant: h,
        isLoading: k,
        setGestureState: X,
        setVariant: T,
        variants: F,
      } = te({
        defaultVariant: "Ln5gnXBvr",
        variant: g,
        variantClassNames: V1,
      }),
      p = B1(r, F),
      S = U(null),
      I = D(),
      R = [],
      m = re();
    return e(j, {
      id: d ?? I,
      children: e(U1, {
        animate: F,
        initial: !1,
        children: e(M1, {
          value: T1,
          children: e(l.div, {
            ...u,
            ...x,
            className: E(S1, ...R, "framer-bxmnzg", c, C),
            "data-framer-name": "Variant 1",
            layoutDependency: p,
            layoutId: "Ln5gnXBvr",
            ref: t ?? S,
            style: { ...o },
            children: e(de, {
              className: "framer-lem5zr",
              layout: "position",
              layoutDependency: p,
              layoutId: "FpuBZJ9Zi",
              opacity: 1,
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 44 44"><path d="M 43.75 21.618 C 41.315 21.985 39.15 22.413 37.23 22.94 C 33.474 23.98 30.575 25.424 28.361 27.614 C 26.135 29.817 24.667 32.693 23.591 36.474 C 23.04 38.444 22.588 40.684 22.208 43.205 C 21.829 40.671 21.377 38.444 20.814 36.462 C 19.75 32.681 18.27 29.793 16.043 27.602 C 13.817 25.399 10.93 23.955 7.175 22.927 C 5.254 22.401 3.089 21.973 0.655 21.606 C 3.089 21.239 5.254 20.81 7.175 20.284 C 10.93 19.244 13.817 17.8 16.043 15.609 C 18.27 13.407 19.75 10.531 20.814 6.75 C 21.377 4.779 21.817 2.54 22.208 0.007 C 22.588 2.54 23.04 4.779 23.603 6.762 C 24.667 10.543 26.147 13.431 28.373 15.622 C 30.6 17.824 33.487 19.268 37.242 20.296 C 39.162 20.823 41.328 21.251 43.762 21.618 Z" fill="var(--token-77edaaf9-45b5-4b44-a35e-1e64393147ac, rgb(252, 68, 160)) /* {&quot;name&quot;:&quot;Stroke&quot;} */"></path></svg>',
              svgContentId: 10993810191,
              withExternalLayout: !0,
            }),
          }),
        }),
      }),
    });
  }),
  z1 = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-do0z7.framer-1l357h4, .framer-do0z7 .framer-1l357h4 { display: block; }",
    ".framer-do0z7.framer-bxmnzg { height: 44px; overflow: hidden; position: relative; width: 44px; }",
    ".framer-do0z7 .framer-lem5zr { flex: none; height: 44px; left: calc(50.00000000000002% - 44px / 2); position: absolute; top: calc(50.00000000000002% - 44px / 2); width: 44px; }",
  ],
  Pr = H(J1, z1, "framer-do0z7"),
  Ze = Pr;
Pr.displayName = "Star";
Pr.defaultProps = { height: 44, width: 44 };
G(Pr, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 });
var W1 = Q(Ze),
  P1 = "framer-osKam",
  A1 = { wkJNtMJVg: "framer-v-1ejmfcz" };
var _1 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  j1 = ({ value: r, children: t }) => {
    let n = ee(J),
      i = r ?? n.transition,
      o = Y(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
    return e(J.Provider, { value: o, children: t });
  },
  N1 = l.create(f),
  Y1 = ({ height: r, id: t, width: n, ...i }) => ({ ...i }),
  E1 = (r, t) =>
    r.layoutDependency ? t.join("-") + r.layoutDependency : t.join("-"),
  D1 = N(function (r, t) {
    let { activeLocale: n, setLocale: i } = q(),
      { style: o, className: c, layoutId: d, variant: g, ...u } = Y1(r),
      {
        baseVariant: s,
        classNames: C,
        clearLoadingGesture: w,
        gestureHandlers: x,
        gestureVariant: h,
        isLoading: k,
        setGestureState: X,
        setVariant: T,
        variants: F,
      } = te({
        defaultVariant: "wkJNtMJVg",
        variant: g,
        variantClassNames: A1,
      }),
      p = E1(r, F),
      S = U(null),
      I = D(),
      R = [],
      m = re();
    return e(j, {
      id: d ?? I,
      children: e(N1, {
        animate: F,
        initial: !1,
        children: e(j1, {
          value: _1,
          children: v(l.div, {
            ...u,
            ...x,
            className: E(P1, ...R, "framer-1ejmfcz", c, C),
            "data-framer-name": "Variant 1",
            layoutDependency: p,
            layoutId: "wkJNtMJVg",
            ref: t ?? S,
            style: { ...o },
            children: [
              e(L, {
                height: 44,
                width: "44px",
                y: (m?.y || 0) + (0 + ((m?.height || 54.5) - 0 - 44) / 2),
                children: e(l.div, {
                  className: "framer-10da3tb-container",
                  layoutDependency: p,
                  layoutId: "zzjDC4pNW-container",
                  children: e(Ze, {
                    height: "100%",
                    id: "zzjDC4pNW",
                    layoutId: "zzjDC4pNW",
                    style: { height: "100%", width: "100%" },
                    width: "100%",
                  }),
                }),
              }),
              e(b, {
                __fromCanvasComponent: !0,
                children: e(f, {
                  children: e(l.h1, {
                    style: {
                      "--font-selector": "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS03MDA=",
                      "--framer-font-family":
                        '"Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif',
                      "--framer-font-size": "42px",
                      "--framer-font-weight": "700",
                      "--framer-letter-spacing": "-2px",
                      "--framer-line-height": "1.3em",
                      "--framer-text-alignment": "left",
                      "--framer-text-color":
                        "var(--extracted-gdpscs, rgb(23, 107, 52))",
                    },
                    children: "22 Calories",
                  }),
                }),
                className: "framer-4w95lb",
                fonts: ["GF;Bricolage Grotesque-700"],
                layoutDependency: p,
                layoutId: "uXflOtZ7H",
                style: {
                  "--extracted-gdpscs": "rgb(23, 107, 52)",
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                  "--framer-paragraph-spacing": "0px",
                },
                verticalAlignment: "center",
                withExternalLayout: !0,
              }),
              e(L, {
                height: 44,
                width: "44px",
                y: (m?.y || 0) + (0 + ((m?.height || 54.5) - 0 - 44) / 2),
                children: e(l.div, {
                  className: "framer-14poj06-container",
                  layoutDependency: p,
                  layoutId: "ltah4SXjs-container",
                  children: e(Ze, {
                    height: "100%",
                    id: "ltah4SXjs",
                    layoutId: "ltah4SXjs",
                    style: { height: "100%", width: "100%" },
                    width: "100%",
                  }),
                }),
              }),
              e(b, {
                __fromCanvasComponent: !0,
                children: e(f, {
                  children: e(l.h1, {
                    style: {
                      "--font-selector": "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS03MDA=",
                      "--framer-font-family":
                        '"Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif',
                      "--framer-font-size": "42px",
                      "--framer-font-weight": "700",
                      "--framer-letter-spacing": "-2px",
                      "--framer-line-height": "1.3em",
                      "--framer-text-alignment": "left",
                      "--framer-text-color":
                        "var(--extracted-gdpscs, rgb(23, 107, 52))",
                    },
                    children: "0 Artificial Ingredients",
                  }),
                }),
                className: "framer-146b8ji",
                fonts: ["GF;Bricolage Grotesque-700"],
                layoutDependency: p,
                layoutId: "WDC9FpR55",
                style: {
                  "--extracted-gdpscs": "rgb(23, 107, 52)",
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                  "--framer-paragraph-spacing": "0px",
                },
                verticalAlignment: "center",
                withExternalLayout: !0,
              }),
              e(L, {
                height: 44,
                width: "44px",
                y: (m?.y || 0) + (0 + ((m?.height || 54.5) - 0 - 44) / 2),
                children: e(l.div, {
                  className: "framer-1cybqdw-container",
                  layoutDependency: p,
                  layoutId: "xyfnsFEJy-container",
                  children: e(Ze, {
                    height: "100%",
                    id: "xyfnsFEJy",
                    layoutId: "xyfnsFEJy",
                    style: { height: "100%", width: "100%" },
                    width: "100%",
                  }),
                }),
              }),
              e(b, {
                __fromCanvasComponent: !0,
                children: e(f, {
                  children: e(l.h1, {
                    style: {
                      "--font-selector": "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS03MDA=",
                      "--framer-font-family":
                        '"Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif',
                      "--framer-font-size": "42px",
                      "--framer-font-weight": "700",
                      "--framer-letter-spacing": "-2px",
                      "--framer-line-height": "1.3em",
                      "--framer-text-alignment": "left",
                      "--framer-text-color":
                        "var(--extracted-gdpscs, rgb(23, 107, 52))",
                    },
                    children: "GMO Free",
                  }),
                }),
                className: "framer-zug7w5",
                fonts: ["GF;Bricolage Grotesque-700"],
                layoutDependency: p,
                layoutId: "Ie__a34n8",
                style: {
                  "--extracted-gdpscs": "rgb(23, 107, 52)",
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                  "--framer-paragraph-spacing": "0px",
                },
                verticalAlignment: "center",
                withExternalLayout: !0,
              }),
              e(L, {
                height: 44,
                width: "44px",
                y: (m?.y || 0) + (0 + ((m?.height || 54.5) - 0 - 44) / 2),
                children: e(l.div, {
                  className: "framer-1s91ffc-container",
                  layoutDependency: p,
                  layoutId: "l7mUQ_X5i-container",
                  children: e(Ze, {
                    height: "100%",
                    id: "l7mUQ_X5i",
                    layoutId: "l7mUQ_X5i",
                    style: { height: "100%", width: "100%" },
                    width: "100%",
                  }),
                }),
              }),
              e(b, {
                __fromCanvasComponent: !0,
                children: e(f, {
                  children: e(l.h1, {
                    style: {
                      "--font-selector": "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS03MDA=",
                      "--framer-font-family":
                        '"Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif',
                      "--framer-font-size": "42px",
                      "--framer-font-weight": "700",
                      "--framer-letter-spacing": "-2px",
                      "--framer-line-height": "1.3em",
                      "--framer-text-alignment": "left",
                      "--framer-text-color":
                        "var(--extracted-gdpscs, rgb(23, 107, 52))",
                    },
                    children: "Packed with Prebiotics",
                  }),
                }),
                className: "framer-r26zcr",
                fonts: ["GF;Bricolage Grotesque-700"],
                layoutDependency: p,
                layoutId: "rMDQ_nGB2",
                style: {
                  "--extracted-gdpscs": "rgb(23, 107, 52)",
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                  "--framer-paragraph-spacing": "0px",
                },
                verticalAlignment: "center",
                withExternalLayout: !0,
              }),
            ],
          }),
        }),
      }),
    });
  }),
  q1 = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-osKam.framer-775h0o, .framer-osKam .framer-775h0o { display: block; }",
    ".framer-osKam.framer-1ejmfcz { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1630px; }",
    ".framer-osKam .framer-10da3tb-container, .framer-osKam .framer-14poj06-container, .framer-osKam .framer-1cybqdw-container, .framer-osKam .framer-1s91ffc-container { flex: none; height: 44px; position: relative; width: 44px; }",
    ".framer-osKam .framer-4w95lb, .framer-osKam .framer-146b8ji, .framer-osKam .framer-zug7w5, .framer-osKam .framer-r26zcr { flex: none; height: auto; max-width: 1200px; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-osKam.framer-1ejmfcz { gap: 0px; } .framer-osKam.framer-1ejmfcz > * { margin: 0px; margin-left: calc(32px / 2); margin-right: calc(32px / 2); } .framer-osKam.framer-1ejmfcz > :first-child { margin-left: 0px; } .framer-osKam.framer-1ejmfcz > :last-child { margin-right: 0px; } }",
  ],
  Ar = H(D1, q1, "framer-osKam"),
  It = Ar;
Ar.displayName = "Ticker";
Ar.defaultProps = { height: 54.5, width: 1630 };
G(
  Ar,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Bricolage Grotesque",
          source: "google",
          style: "normal",
          url: "fonts/s/bricolagegrotesque/v7/3y9U6as8bTXq_nANBjzKo3IeZx8z6up5BeSl5jBNz_19PpbpMXuECpwUxJBOm_OJWiaaD30YfKfjZZoLvfzlyMgvs-wJDtw.woff2",
          weight: "700",
        },
      ],
    },
    ...W1,
  ],
  { supportsExplicitInterCodegen: !0 }
);
function Ra(r) {
  return (t) => {
    let n = { ...t.style, width: "fit-content" };
    return e(r, { ...t, style: n });
  };
}
function St(r) {
  let [t, n] = We(null);
  we(() => {
    let c = r.customSvgCode;
    i(c);
  });
  let i = (c) => {
      let d = [
          [/width="[^"]*"/, 'width="100%"'],
          [/height="[^"]*"/, 'height="100%"'],
        ],
        g = c.includes('stroke="'),
        u = c.includes('stroke-width="'),
        s = c.includes('stroke-linecap="'),
        C = c.includes('stroke-linejoin="');
      if (c.includes("<circle")) {
        let w = /<circle[^>]*fill="([^"]*)"/,
          x = c.match(w);
        if (x) {
          let h = x[0].replace(x[1], r.customColor);
          c = c.replace(w, h);
        } else d.push([/<circle/g, `<circle fill="${r.customColor}"`]);
      }
      g
        ? (s
            ? d.push([
                /<path/g,
                `<path stroke="${r.customColor}" stroke-linecap="${r.lineCap}"`,
              ])
            : d.push([/<path/g, `<path stroke="${r.customColor}"`]),
          u &&
            d.push([
              /stroke-width="(?!0\b)\d+(\.\d+)?"/g,
              `stroke-width="${r.customStrokeWidth}"`,
            ]))
        : d.push([/<path/g, `<path fill="${r.customColor}"`]),
        c.includes('overflow="')
          ? d.push([/overflow="[^"]*"/, 'overflow="visible"'])
          : d.push([/<svg/, '<svg overflow="visible"']),
        C
          ? d.push([
              /stroke-linejoin="[^"]*"/,
              `stroke-linejoin="${r.lineJoin}"`,
            ])
          : d.push([/<path/g, `<path stroke-linejoin="${r.lineJoin}"`]),
        d.forEach(([w, x]) => {
          c = c.replace(w, x);
        }),
        n(c);
    },
    o = {
      padding: `${r.customPadding}px`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      overflow: "visible",
    };
  return e("div", { dangerouslySetInnerHTML: { __html: t }, style: o });
}
St.defaultProps = {
  customSvgCode:
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_967_124)"> <path d="M18 6.09674C18 6.0348 18.0246 5.97539 18.0684 5.93159L23.6013 0.398708C23.7484 0.251575 24 0.35578 24 0.563858V11.9033C24 11.9652 23.9754 12.0246 23.9316 12.0684L18 18V6.09674Z" fill="white"/> <path d="M6 18V6.56386C6 6.35578 5.74843 6.25158 5.60129 6.39871L0.0684074 11.9316C0.0246069 11.9754 0 12.0348 0 12.0967V23.7664C0 23.8954 0.104567 24 0.233557 24H11.9033C11.9652 24 12.0246 23.9754 12.0684 23.9316L18 18H6Z" fill="white"/> </g> <defs> <clipPath id="clip0_967_124"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </svg>',
  customColor: "#ffffff",
  customPadding: 0,
  customStrokeWidth: 2,
  lineCap: "butt",
  lineJoin: "miter",
};
Z(St, {
  customSvgCode: { type: y.String, title: "SVG Code", displayTextArea: !1 },
  customColor: { type: y.Color, title: "Color", defaultValue: "#ffffff" },
  customPadding: {
    type: y.Number,
    title: "Padding",
    defaultValue: 0,
    min: 0,
    step: 1,
    displayStepper: !0,
    description:
      "More components at [Framer University](https://framer.university?utm_source=component).",
  },
  customStrokeWidth: {
    type: y.Number,
    title: "Stroke",
    defaultValue: 2,
    min: 0,
    step: 0.1,
    displayStepper: !0,
    hidden: (r) => !r.customSvgCode.includes('stroke="'),
  },
  lineCap: {
    type: y.Enum,
    title: "Line Cap",
    options: ["butt", "round", "square"],
    optionTitles: ["Butt", "Round", "Square"],
    defaultValue: "butt",
    hidden: (r) => !r.customSvgCode.includes('stroke="'),
  },
  lineJoin: {
    type: y.Enum,
    title: "Line Join",
    options: ["round", "miter", "bevel"],
    optionTitles: ["Round", "Miter", "Bevel"],
    defaultValue: "miter",
    hidden: (r) => !r.customSvgCode.includes('stroke="'),
  },
});
var _r = St;
var Z1 = ["yroDmQotV", "Hmdkv2M4p", "vmIKLyrnS"],
  H1 = "framer-XIQHn",
  G1 = {
    Hmdkv2M4p: "framer-v-16ish6a",
    vmIKLyrnS: "framer-v-af2ere",
    yroDmQotV: "framer-v-1w02fi",
  };
function Vt(r, ...t) {
  let n = {};
  return t?.forEach((i) => i && Object.assign(n, r[i])), n;
}
var Q1 = { duration: 0, type: "tween" },
  O1 = ({ value: r, children: t }) => {
    let n = ee(J),
      i = r ?? n.transition,
      o = Y(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
    return e(J.Provider, { value: o, children: t });
  },
  K1 = l(f),
  $1 = { "Plus Hover": "Hmdkv2M4p", Minus: "vmIKLyrnS", Plus: "yroDmQotV" },
  ei = ({ height: r, id: t, width: n, ...i }) => {
    var o, c;
    return {
      ...i,
      variant:
        (c = (o = $1[i.variant]) !== null && o !== void 0 ? o : i.variant) !==
          null && c !== void 0
          ? c
          : "yroDmQotV",
    };
  },
  ri = (r, t) =>
    r.layoutDependency ? t.join("-") + r.layoutDependency : t.join("-"),
  ti = N(function (r, t) {
    let { activeLocale: n, setLocale: i } = q(),
      { style: o, className: c, layoutId: d, variant: g, ...u } = ei(r),
      {
        baseVariant: s,
        classNames: C,
        clearLoadingGesture: w,
        gestureHandlers: x,
        gestureVariant: h,
        isLoading: k,
        setGestureState: X,
        setVariant: T,
        variants: F,
      } = te({
        cycleOrder: Z1,
        defaultVariant: "yroDmQotV",
        variant: g,
        variantClassNames: G1,
      }),
      p = ri(r, F),
      S = U(null),
      I = () => s !== "vmIKLyrnS",
      R = () => s === "vmIKLyrnS",
      m = D(),
      a = [],
      M = re();
    return e(j, {
      id: d ?? m,
      children: e(K1, {
        animate: F,
        initial: !1,
        children: e(O1, {
          value: Q1,
          children: v(l.div, {
            ...u,
            ...x,
            className: E(H1, ...a, "framer-1w02fi", c, C),
            "data-border": !0,
            "data-framer-name": "Plus",
            layoutDependency: p,
            layoutId: "yroDmQotV",
            ref: t ?? S,
            style: {
              "--border-bottom-width": "1.5px",
              "--border-color":
                "var(--token-82b5832e-a0cf-4abf-84b4-daf77b132a71, rgb(81, 86, 90))",
              "--border-left-width": "1.5px",
              "--border-right-width": "1.5px",
              "--border-style": "solid",
              "--border-top-width": "1.5px",
              backgroundColor: "rgba(0, 0, 0, 0)",
              borderBottomLeftRadius: 100,
              borderBottomRightRadius: 100,
              borderTopLeftRadius: 100,
              borderTopRightRadius: 100,
              ...o,
            },
            variants: {
              Hmdkv2M4p: {
                "--border-color": "rgba(81, 86, 90, 0)",
                backgroundColor: "rgb(0, 120, 255)",
              },
              vmIKLyrnS: {
                "--border-color": "rgba(81, 86, 90, 0)",
                backgroundColor: "rgb(0, 120, 255)",
              },
            },
            ...Vt(
              {
                Hmdkv2M4p: { "data-framer-name": "Plus Hover" },
                vmIKLyrnS: { "data-framer-name": "Minus" },
              },
              s,
              h
            ),
            children: [
              I() &&
                e(de, {
                  className: "framer-9q7gv",
                  "data-framer-name": "SVG (Plus)",
                  layout: "position",
                  layoutDependency: p,
                  layoutId: "HGSVx0Gzl",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12 12"><path d="M 6 2 L 6 6 M 6 6 L 6 10 M 6 6 L 2 6 M 6 6 L 10 6" fill="transparent" stroke-width="1.5" stroke="var(--token-82b5832e-a0cf-4abf-84b4-daf77b132a71, rgb(81, 86, 90)) /* {&quot;name&quot;:&quot;10&quot;} */" stroke-linecap="round" stroke-miterlimit="10"></path></svg>',
                  svgContentId: 12843514063,
                  withExternalLayout: !0,
                  ...Vt(
                    {
                      Hmdkv2M4p: {
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12 12"><path d="M 6 2 L 6 6 M 6 6 L 6 10 M 6 6 L 2 6 M 6 6 L 10 6" fill="transparent" stroke-width="1.5" stroke="var(--token-20608b9f-0145-4a1e-b971-ee948ebbb015, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;12&quot;} */" stroke-linecap="round" stroke-miterlimit="10"></path></svg>',
                        svgContentId: 10260135435,
                      },
                    },
                    s,
                    h
                  ),
                }),
              R() &&
                e(de, {
                  className: "framer-12gy6yw",
                  "data-framer-name": "SVG (Minus)",
                  layout: "position",
                  layoutDependency: p,
                  layoutId: "MIzBGaS0q",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12 12"><path d="M 2 6 L 10 6" fill="transparent" stroke-width="1.5" stroke="var(--token-20608b9f-0145-4a1e-b971-ee948ebbb015, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;12&quot;} */" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                  svgContentId: 10681430789,
                  withExternalLayout: !0,
                  ...Vt({ vmIKLyrnS: { svgContentId: 11548429862 } }, s, h),
                }),
            ],
          }),
        }),
      }),
    });
  }),
  ai = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-XIQHn.framer-vuw5k9, .framer-XIQHn .framer-vuw5k9 { display: block; }",
    ".framer-XIQHn.framer-1w02fi { height: 20px; overflow: hidden; position: relative; width: 20px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-XIQHn .framer-9q7gv, .framer-XIQHn .framer-12gy6yw { flex: none; height: 12px; left: calc(50.00000000000002% - 12px / 2); position: absolute; top: calc(50.00000000000002% - 12px / 2); width: 12px; }",
    ".framer-XIQHn.framer-v-16ish6a.framer-1w02fi, .framer-XIQHn.framer-v-af2ere.framer-1w02fi { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 20px); }",
    '.framer-XIQHn[data-border="true"]::after, .framer-XIQHn [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  sr = H(ti, ai, "framer-XIQHn"),
  Tt = sr;
sr.displayName = "Plus Minus Icon";
sr.defaultProps = { height: 20, width: 20 };
Z(sr, {
  variant: {
    options: ["yroDmQotV", "Hmdkv2M4p", "vmIKLyrnS"],
    optionTitles: ["Plus", "Plus Hover", "Minus"],
    title: "Variant",
    type: y.Enum,
  },
});
G(sr, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 });
var ni = Q(_r),
  ii = Q(Tt),
  oi = Ra(l.div),
  li = { BmvEv5g70: { hover: !0 }, NnROhpwg_: { hover: !0 } },
  si = [
    "pBj6w6Ipi",
    "JFF8Fcxm9",
    "sfphhJ0e_",
    "BmvEv5g70",
    "UXAGUakfO",
    "dHHaLlzuS",
    "FtmyB3owl",
    "NnROhpwg_",
  ],
  fi = "framer-e8Q0v",
  mi = {
    BmvEv5g70: "framer-v-1pgmaic",
    dHHaLlzuS: "framer-v-1earpag",
    FtmyB3owl: "framer-v-1j21mkw",
    JFF8Fcxm9: "framer-v-1p8n3bv",
    NnROhpwg_: "framer-v-1yuhzwo",
    pBj6w6Ipi: "framer-v-1xse8l7",
    sfphhJ0e_: "framer-v-1oe9rs1",
    UXAGUakfO: "framer-v-1vfq85n",
  };
function He(r, ...t) {
  let n = {};
  return t?.forEach((i) => i && Object.assign(n, r[i])), n;
}
var ci = { duration: 0, type: "tween" },
  Fa = (r, t) => `translateY(-50%) ${t}`,
  di = ({ value: r, children: t }) => {
    let n = ee(J),
      i = r ?? n.transition,
      o = Y(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
    return e(J.Provider, { value: o, children: t });
  },
  pi = l.create(f),
  hi = {
    "Answer \xB7 Mobile": "UXAGUakfO",
    "Question \xB7 Active \xB7 Mobile": "NnROhpwg_",
    "Question \xB7 Active": "BmvEv5g70",
    "Question \xB7 Hover \xB7 Mobile": "FtmyB3owl",
    "Question \xB7 Hover": "sfphhJ0e_",
    "Question \xB7 Mobile": "dHHaLlzuS",
    Answer: "pBj6w6Ipi",
    Question: "JFF8Fcxm9",
  },
  ui = ({
    ear: r,
    heart: t,
    height: n,
    id: i,
    message: o,
    showAnswer: c,
    star: d,
    width: g,
    ...u
  }) => {
    var s, C, w, x;
    return {
      ...u,
      BgAQWE9JZ:
        (s = o ?? u.BgAQWE9JZ) !== null && s !== void 0
          ? s
          : "What if I don't like it?",
      btPQlyjzM: t ?? u.btPQlyjzM,
      Ig9Oen9_Q: c ?? u.Ig9Oen9_Q,
      qcxv5MbC_: d ?? u.qcxv5MbC_,
      variant:
        (w = (C = hi[u.variant]) !== null && C !== void 0 ? C : u.variant) !==
          null && w !== void 0
          ? w
          : "pBj6w6Ipi",
      ZowNLHVI9: (x = r ?? u.ZowNLHVI9) !== null && x !== void 0 ? x : !0,
    };
  },
  gi = (r, t) =>
    r.layoutDependency ? t.join("-") + r.layoutDependency : t.join("-"),
  xi = N(function (r, t) {
    let { activeLocale: n, setLocale: i } = q(),
      {
        style: o,
        className: c,
        layoutId: d,
        variant: g,
        BgAQWE9JZ: u,
        ZowNLHVI9: s,
        btPQlyjzM: C,
        qcxv5MbC_: w,
        Ig9Oen9_Q: x,
        ...h
      } = ui(r),
      {
        baseVariant: k,
        classNames: X,
        clearLoadingGesture: T,
        gestureHandlers: F,
        gestureVariant: p,
        isLoading: S,
        setGestureState: I,
        setVariant: R,
        variants: m,
      } = te({
        cycleOrder: si,
        defaultVariant: "pBj6w6Ipi",
        enabledGestures: li,
        variant: g,
        variantClassNames: mi,
      }),
      a = gi(r, m),
      { activeVariantCallback: M, delay: V } = xe(k),
      $ = M(async (...se) => {
        if ((I({ isPressed: !1 }), x && (await x(...se)) === !1)) return !1;
      }),
      P = M(async (...se) => {
        I({ isHovered: !0 }), R("sfphhJ0e_");
      }),
      le = M(async (...se) => {
        if ((I({ isPressed: !1 }), x && (await x(...se)) === !1)) return !1;
        R("BmvEv5g70");
      }),
      fe = M(async (...se) => {
        I({ isHovered: !1 }), R("JFF8Fcxm9");
      }),
      _ = M(async (...se) => {
        I({ isHovered: !0 }), R("FtmyB3owl");
      }),
      Ce = M(async (...se) => {
        if ((I({ isPressed: !1 }), x && (await x(...se)) === !1)) return !1;
        R("NnROhpwg_");
      }),
      be = M(async (...se) => {
        I({ isHovered: !1 }), R("dHHaLlzuS");
      }),
      ae = U(null),
      ue = (se) =>
        p === "NnROhpwg_-hover" ||
        ["dHHaLlzuS", "FtmyB3owl", "NnROhpwg_"].includes(k)
          ? !1
          : se,
      Dr = () =>
        !!(
          ["BmvEv5g70-hover", "NnROhpwg_-hover"].includes(p) ||
          [
            "JFF8Fcxm9",
            "sfphhJ0e_",
            "BmvEv5g70",
            "dHHaLlzuS",
            "FtmyB3owl",
            "NnROhpwg_",
          ].includes(k)
        ),
      br = () => k === "dHHaLlzuS",
      $e = () => k === "FtmyB3owl",
      Me = () => p === "NnROhpwg_-hover" || k === "NnROhpwg_",
      er = D(),
      wr = [],
      W = re();
    return e(j, {
      id: d ?? er,
      children: e(pi, {
        animate: m,
        initial: !1,
        children: e(di, {
          value: ci,
          children: v(oi, {
            ...h,
            ...F,
            className: E(fi, ...wr, "framer-1xse8l7", c, X),
            "data-framer-name": "Answer",
            layoutDependency: a,
            layoutId: "pBj6w6Ipi",
            ref: t ?? ae,
            style: {
              backgroundColor: "rgb(232, 232, 232)",
              borderBottomLeftRadius: 24,
              borderBottomRightRadius: 24,
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              ...o,
            },
            variants: {
              "BmvEv5g70-hover": { backgroundColor: "rgb(1, 95, 227)" },
              "NnROhpwg_-hover": { backgroundColor: "rgb(1, 95, 227)" },
              BmvEv5g70: {
                backgroundColor:
                  "var(--token-f1cbc539-f97a-4db0-aa7e-3136daa51261, rgb(8, 110, 253))",
              },
              dHHaLlzuS: { backgroundColor: "rgb(8, 110, 253)" },
              FtmyB3owl: { backgroundColor: "rgb(0, 95, 227)" },
              JFF8Fcxm9: { backgroundColor: "rgb(8, 110, 253)" },
              NnROhpwg_: {
                backgroundColor:
                  "var(--token-f1cbc539-f97a-4db0-aa7e-3136daa51261, rgb(8, 110, 253))",
              },
              sfphhJ0e_: { backgroundColor: "rgb(0, 95, 227)" },
            },
            ...He(
              {
                "BmvEv5g70-hover": { "data-framer-name": void 0 },
                "NnROhpwg_-hover": { "data-framer-name": void 0 },
                BmvEv5g70: { "data-framer-name": "Question \xB7 Active" },
                dHHaLlzuS: {
                  "data-framer-name": "Question \xB7 Mobile",
                  "data-highlight": !0,
                  onMouseEnter: _,
                  onTap: $,
                },
                FtmyB3owl: {
                  "data-framer-name": "Question \xB7 Hover \xB7 Mobile",
                  "data-highlight": !0,
                  onMouseLeave: be,
                  onTap: Ce,
                },
                JFF8Fcxm9: {
                  "data-framer-name": "Question",
                  "data-highlight": !0,
                  onMouseEnter: P,
                  onTap: $,
                },
                NnROhpwg_: {
                  "data-framer-name": "Question \xB7 Active \xB7 Mobile",
                },
                sfphhJ0e_: {
                  "data-framer-name": "Question \xB7 Hover",
                  "data-highlight": !0,
                  onMouseLeave: fe,
                  onTap: le,
                },
                UXAGUakfO: { "data-framer-name": "Answer \xB7 Mobile" },
              },
              k,
              p
            ),
            children: [
              e(b, {
                __fromCanvasComponent: !0,
                children: e(f, {
                  children: e(l.p, {
                    style: {
                      "--font-selector": "SW50ZXItTWVkaXVt",
                      "--framer-font-family":
                        '"Inter", "Inter Placeholder", sans-serif',
                      "--framer-font-size": "18px",
                      "--framer-font-weight": "500",
                      "--framer-letter-spacing": "-0.02em",
                      "--framer-line-height": "1.3em",
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, rgb(38, 38, 38))",
                    },
                    children: "What if I don't like it?",
                  }),
                }),
                className: "framer-qdu81k",
                "data-framer-name": "Text",
                fonts: ["Inter-Medium"],
                layoutDependency: a,
                layoutId: "wxD6rnwcZ",
                style: {
                  "--extracted-r6o4lv": "rgb(38, 38, 38)",
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                },
                text: u,
                variants: {
                  BmvEv5g70: { "--extracted-r6o4lv": "rgb(255, 255, 255)" },
                  dHHaLlzuS: { "--extracted-r6o4lv": "rgb(255, 255, 255)" },
                  FtmyB3owl: { "--extracted-r6o4lv": "rgb(255, 255, 255)" },
                  JFF8Fcxm9: { "--extracted-r6o4lv": "rgb(255, 255, 255)" },
                  NnROhpwg_: { "--extracted-r6o4lv": "rgb(255, 255, 255)" },
                  sfphhJ0e_: { "--extracted-r6o4lv": "rgb(255, 255, 255)" },
                },
                verticalAlignment: "top",
                withExternalLayout: !0,
                ...He(
                  {
                    BmvEv5g70: {
                      children: e(f, {
                        children: e(l.p, {
                          style: {
                            "--font-selector": "SW50ZXItTWVkaXVt",
                            "--framer-font-family":
                              '"Inter", "Inter Placeholder", sans-serif',
                            "--framer-font-size": "18px",
                            "--framer-font-weight": "500",
                            "--framer-letter-spacing": "-0.02em",
                            "--framer-line-height": "1.3em",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                          },
                          children: "What if I don't like it?",
                        }),
                      }),
                    },
                    dHHaLlzuS: {
                      children: e(f, {
                        children: e(l.p, {
                          style: {
                            "--font-selector": "SW50ZXItTWVkaXVt",
                            "--framer-font-family":
                              '"Inter", "Inter Placeholder", sans-serif',
                            "--framer-font-size": "14px",
                            "--framer-font-weight": "500",
                            "--framer-letter-spacing": "-0.01em",
                            "--framer-line-height": "1.3em",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                          },
                          children: "What if I don't like it?",
                        }),
                      }),
                    },
                    FtmyB3owl: {
                      children: e(f, {
                        children: e(l.p, {
                          style: {
                            "--font-selector": "SW50ZXItTWVkaXVt",
                            "--framer-font-family":
                              '"Inter", "Inter Placeholder", sans-serif',
                            "--framer-font-size": "14px",
                            "--framer-font-weight": "500",
                            "--framer-letter-spacing": "-0.01em",
                            "--framer-line-height": "1.3em",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                          },
                          children: "What if I don't like it?",
                        }),
                      }),
                    },
                    JFF8Fcxm9: {
                      children: e(f, {
                        children: e(l.p, {
                          style: {
                            "--font-selector": "SW50ZXItTWVkaXVt",
                            "--framer-font-family":
                              '"Inter", "Inter Placeholder", sans-serif',
                            "--framer-font-size": "18px",
                            "--framer-font-weight": "500",
                            "--framer-letter-spacing": "-0.02em",
                            "--framer-line-height": "1.3em",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                          },
                          children: "What if I don't like it?",
                        }),
                      }),
                    },
                    NnROhpwg_: {
                      children: e(f, {
                        children: e(l.p, {
                          style: {
                            "--font-selector": "SW50ZXItTWVkaXVt",
                            "--framer-font-family":
                              '"Inter", "Inter Placeholder", sans-serif',
                            "--framer-font-size": "14px",
                            "--framer-font-weight": "500",
                            "--framer-letter-spacing": "-0.01em",
                            "--framer-line-height": "1.3em",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                          },
                          children: "What if I don't like it?",
                        }),
                      }),
                    },
                    sfphhJ0e_: {
                      children: e(f, {
                        children: e(l.p, {
                          style: {
                            "--font-selector": "SW50ZXItTWVkaXVt",
                            "--framer-font-family":
                              '"Inter", "Inter Placeholder", sans-serif',
                            "--framer-font-size": "18px",
                            "--framer-font-weight": "500",
                            "--framer-letter-spacing": "-0.02em",
                            "--framer-line-height": "1.3em",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                          },
                          children: "What if I don't like it?",
                        }),
                      }),
                    },
                    UXAGUakfO: {
                      children: e(f, {
                        children: e(l.p, {
                          style: {
                            "--font-selector": "SW50ZXItTWVkaXVt",
                            "--framer-font-family":
                              '"Inter", "Inter Placeholder", sans-serif',
                            "--framer-font-size": "14px",
                            "--framer-font-weight": "500",
                            "--framer-letter-spacing": "-0.01em",
                            "--framer-line-height": "1.3em",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(38, 38, 38))",
                          },
                          children: "What if I don't like it?",
                        }),
                      }),
                    },
                  },
                  k,
                  p
                ),
              }),
              ue(s) &&
                e(l.div, {
                  className: "framer-paj8b5",
                  "data-framer-name": "Ear",
                  layoutDependency: a,
                  layoutId: "s4MjwLSEa",
                  children: e(de, {
                    className: "framer-ylskj7",
                    "data-framer-name": "SVG",
                    layout: "position",
                    layoutDependency: a,
                    layoutId: "GLkekEJGP",
                    opacity: 1,
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 25"><path d="M 0.005 0 L 11 0 L 11 8.5 C 11 12.071 11.092 20.714 17.005 24.643 C 12.571 24.643 1.854 21.786 0.005 16.071 C -0.007 16.071 0.005 0 0.005 0 Z" fill="rgb(232, 232, 232)"></path></svg>',
                    svgContentId: 12453012676,
                    withExternalLayout: !0,
                    ...He(
                      {
                        "BmvEv5g70-hover": {
                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 25"><path d="M 17 0 L 6.005 0 L 6.005 8.5 C 6.005 12.071 5.913 20.714 0 24.643 C 4.434 24.643 15.151 21.786 17 16.071 C 17.012 16.071 17 0 17 0 Z" fill="#015fe3"></path></svg>',
                          svgContentId: 12019826939,
                        },
                        BmvEv5g70: {
                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 25"><path d="M 17 0 L 6.005 0 L 6.005 8.5 C 6.005 12.071 5.913 20.714 0 24.643 C 4.434 24.643 15.151 21.786 17 16.071 C 17.012 16.071 17 0 17 0 Z" fill="var(--token-f1cbc539-f97a-4db0-aa7e-3136daa51261, rgb(8, 110, 253)) /* {&quot;name&quot;:&quot;Brandeis&quot;} */"></path></svg>',
                          svgContentId: 9521860351,
                        },
                        JFF8Fcxm9: {
                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 25"><path d="M 17 0 L 6.005 0 L 6.005 8.5 C 6.005 12.071 5.913 20.714 0 24.643 C 4.434 24.643 15.151 21.786 17 16.071 C 17.012 16.071 17 0 17 0 Z" fill="rgb(8, 110, 253)"></path></svg>',
                          svgContentId: 11027883830,
                        },
                        sfphhJ0e_: {
                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 25"><path d="M 17 0 L 6.005 0 L 6.005 8.5 C 6.005 12.071 5.913 20.714 0 24.643 C 4.434 24.643 15.151 21.786 17 16.071 C 17.012 16.071 17 0 17 0 Z" fill="rgb(0, 95, 227)"></path></svg>',
                          svgContentId: 11778034502,
                        },
                        UXAGUakfO: {
                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 20"><path d="M 0.01 -0.15 L 11.001 -0.15 L 11.001 6.749 C 11.001 9.647 11.093 16.662 17.004 19.85 C 12.572 19.85 1.858 17.531 0.01 12.893 C -0.002 12.893 0.01 -0.15 0.01 -0.15 Z" fill="rgb(232, 232, 232)"></path></svg>',
                          svgContentId: 12494185150,
                        },
                      },
                      k,
                      p
                    ),
                  }),
                }),
              C &&
                e(L, {
                  children: e(l.div, {
                    className: "framer-14ko9sk-container",
                    layoutDependency: a,
                    layoutId: "ZIq_At5Kr-container",
                    style: { rotate: 19 },
                    children: e(_r, {
                      customColor: "rgb(255, 86, 121)",
                      customPadding: 0,
                      customStrokeWidth: 2,
                      customSvgCode:
                        '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.4885 21.3725C21.0164 16.5927 23.1145 10.9028 21.5103 6.90294C20.7315 4.96087 19.0967 3.56916 17.1687 3.13926C15.4711 2.76077 13.6161 3.14222 11.9995 4.42553C10.3829 3.14222 8.52778 2.76077 6.83026 3.13927C4.9022 3.56917 3.26747 4.96089 2.48861 6.90295C0.884469 10.9029 2.98263 16.5927 11.5106 21.3725L11.9995 21.6466L12.4885 21.3725Z" fill="black"/> </svg>',
                      height: "100%",
                      id: "ZIq_At5Kr",
                      layoutId: "ZIq_At5Kr",
                      lineCap: "butt",
                      lineJoin: "miter",
                      style: { height: "100%", width: "100%" },
                      width: "100%",
                    }),
                  }),
                }),
              w &&
                e(L, {
                  children: e(l.div, {
                    className: "framer-1sae2p2-container",
                    layoutDependency: a,
                    layoutId: "JkROzOFKM-container",
                    style: { rotate: -13 },
                    transformTemplate: Fa,
                    children: e(_r, {
                      customColor: "rgb(254, 217, 94)",
                      customPadding: 0,
                      customStrokeWidth: 2,
                      customSvgCode:
                        '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M13.9086 2.19626C13.1399 0.601248 10.857 0.601245 10.0883 2.19626L8.07325 6.37748C8.05819 6.40873 8.02531 6.43524 7.98153 6.44095L3.34253 7.04641C1.58779 7.27543 0.855254 9.43807 2.1633 10.6675L5.55689 13.8571C5.58454 13.8831 5.59438 13.9178 5.5885 13.9492L4.73655 18.5047C4.4065 20.2694 6.28023 21.5748 7.82594 20.7441L11.9383 18.5342C11.9755 18.5142 12.0214 18.5142 12.0585 18.5342L16.171 20.7441C17.7167 21.5748 19.5904 20.2694 19.2604 18.5047L18.4084 13.9492C18.4026 13.9178 18.4124 13.8831 18.44 13.8571L21.8336 10.6675C23.1417 9.43807 22.4091 7.27543 20.6544 7.04641L16.0154 6.44095C15.9716 6.43524 15.9387 6.40873 15.9237 6.37748L13.9086 2.19626Z" fill="black"/> </svg>',
                      height: "100%",
                      id: "JkROzOFKM",
                      layoutId: "JkROzOFKM",
                      lineCap: "butt",
                      lineJoin: "miter",
                      style: { height: "100%", width: "100%" },
                      width: "100%",
                    }),
                  }),
                }),
              Dr() &&
                e(l.div, {
                  className: "framer-4k3oy0",
                  "data-framer-name": "Plus",
                  layoutDependency: a,
                  layoutId: "rRvXAmLVN",
                  transformTemplate: Fa,
                  children: e(L, {
                    height: 20,
                    width: "20px",
                    ...He(
                      {
                        BmvEv5g70: {
                          y:
                            (W?.y || 0) +
                            ((W?.height || 47.5) * 0.4992343032159267 - 10) +
                            0,
                        },
                        dHHaLlzuS: {
                          y:
                            (W?.y || 0) +
                            ((W?.height || 38) * 0.4992343032159267 - 10) +
                            0,
                        },
                        FtmyB3owl: {
                          y:
                            (W?.y || 0) +
                            ((W?.height || 38) * 0.4992343032159267 - 10) +
                            0,
                        },
                        JFF8Fcxm9: {
                          y:
                            (W?.y || 0) +
                            ((W?.height || 47.5) * 0.4992343032159267 - 10) +
                            0,
                        },
                        NnROhpwg_: {
                          y:
                            (W?.y || 0) +
                            ((W?.height || 38) * 0.4992343032159267 - 10) +
                            0,
                        },
                        sfphhJ0e_: {
                          y:
                            (W?.y || 0) +
                            ((W?.height || 47.5) * 0.4992343032159267 - 10) +
                            0,
                        },
                      },
                      k,
                      p
                    ),
                    children: e(l.div, {
                      className: "framer-134wz0g-container",
                      layoutDependency: a,
                      layoutId: "KbpAtYavj-container",
                      children: e(Tt, {
                        height: "100%",
                        id: "KbpAtYavj",
                        layoutId: "KbpAtYavj",
                        style: { height: "100%", width: "100%" },
                        variant: "yroDmQotV",
                        width: "100%",
                        ...He(
                          {
                            BmvEv5g70: { variant: "vmIKLyrnS" },
                            FtmyB3owl: { variant: "Hmdkv2M4p" },
                            NnROhpwg_: { variant: "vmIKLyrnS" },
                            sfphhJ0e_: { variant: "Hmdkv2M4p" },
                          },
                          k,
                          p
                        ),
                      }),
                    }),
                  }),
                }),
              br() &&
                e(l.div, {
                  className: "framer-9q0edb",
                  "data-framer-name": "Ear",
                  layoutDependency: a,
                  layoutId: "gRMQGa8gV",
                  children: e(de, {
                    className: "framer-1cu650s",
                    "data-framer-name": "SVG",
                    layout: "position",
                    layoutDependency: a,
                    layoutId: "BSSV5BNcI",
                    opacity: 1,
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 20"><path d="M 16.999 -0.15 L 6.008 -0.15 L 6.008 6.749 C 6.008 9.647 5.915 16.662 0.004 19.85 C 4.437 19.85 15.151 17.531 16.999 12.893 C 17.011 12.893 16.999 -0.15 16.999 -0.15 Z" fill="var(--token-f1cbc539-f97a-4db0-aa7e-3136daa51261, rgb(8, 110, 253)) /* {&quot;name&quot;:&quot;Brandeis&quot;} */"></path></svg>',
                    svgContentId: 11765316211,
                    withExternalLayout: !0,
                  }),
                }),
              $e() &&
                e(l.div, {
                  className: "framer-cx10sq",
                  "data-framer-name": "Ear",
                  layoutDependency: a,
                  layoutId: "TS9uTpzOF",
                  children: e(de, {
                    className: "framer-1xhr4h5",
                    "data-framer-name": "SVG",
                    layout: "position",
                    layoutDependency: a,
                    layoutId: "WTGxJ8U8W",
                    opacity: 1,
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 20"><path d="M 16.999 -0.15 L 6.008 -0.15 L 6.008 6.749 C 6.008 9.647 5.915 16.662 0.004 19.85 C 4.437 19.85 15.151 17.531 16.999 12.893 C 17.011 12.893 16.999 -0.15 16.999 -0.15 Z" fill="#015fe3"></path></svg>',
                    svgContentId: 11663534843,
                    withExternalLayout: !0,
                  }),
                }),
              Me() &&
                e(l.div, {
                  className: "framer-12hn0qh",
                  "data-framer-name": "Ear",
                  layoutDependency: a,
                  layoutId: "fOLx3O8U8",
                  children: e(de, {
                    className: "framer-xh8cnm",
                    "data-framer-name": "SVG",
                    layout: "position",
                    layoutDependency: a,
                    layoutId: "c6A4jrul6",
                    opacity: 1,
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 20"><path d="M 16.999 -0.15 L 6.008 -0.15 L 6.008 6.749 C 6.008 9.647 5.915 16.662 0.004 19.85 C 4.437 19.85 15.151 17.531 16.999 12.893 C 17.011 12.893 16.999 -0.15 16.999 -0.15 Z" fill="var(--token-f1cbc539-f97a-4db0-aa7e-3136daa51261, rgb(8, 110, 253)) /* {&quot;name&quot;:&quot;Brandeis&quot;} */"></path></svg>',
                    svgContentId: 9949653492,
                    withExternalLayout: !0,
                    ...He(
                      {
                        "NnROhpwg_-hover": {
                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 20"><path d="M 16.999 -0.15 L 6.008 -0.15 L 6.008 6.749 C 6.008 9.647 5.915 16.662 0.004 19.85 C 4.437 19.85 15.151 17.531 16.999 12.893 C 17.011 12.893 16.999 -0.15 16.999 -0.15 Z" fill="#015fe3"></path></svg>',
                          svgContentId: 9872582923,
                        },
                      },
                      k,
                      p
                    ),
                  }),
                }),
            ],
          }),
        }),
      }),
    });
  }),
  Ci = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-e8Q0v.framer-hc38yo, .framer-e8Q0v .framer-hc38yo { display: block; }",
    ".framer-e8Q0v.framer-1xse8l7 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 12px 22px 12px 22px; position: relative; width: min-content; }",
    ".framer-e8Q0v .framer-qdu81k { -webkit-user-select: none; flex: none; height: auto; pointer-events: none; position: relative; user-select: none; white-space: pre; width: auto; z-index: 1; }",
    ".framer-e8Q0v .framer-paj8b5 { align-content: center; align-items: center; bottom: -1px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: absolute; right: -6px; width: min-content; z-index: 1; }",
    ".framer-e8Q0v .framer-ylskj7 { flex: none; height: 25px; position: relative; width: 17px; }",
    ".framer-e8Q0v .framer-14ko9sk-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 28px); position: absolute; right: -4px; top: -11px; width: 28px; z-index: 1; }",
    ".framer-e8Q0v .framer-1sae2p2-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 28px); left: -16px; position: absolute; top: 50%; width: 28px; z-index: 1; }",
    ".framer-e8Q0v .framer-4k3oy0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: absolute; right: -32px; top: 50%; width: 32px; z-index: 1; }",
    ".framer-e8Q0v .framer-134wz0g-container { flex: none; height: 20px; position: relative; width: 20px; z-index: 1; }",
    ".framer-e8Q0v .framer-9q0edb, .framer-e8Q0v .framer-cx10sq, .framer-e8Q0v .framer-12hn0qh { align-content: center; align-items: center; bottom: -1px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: -6px; overflow: hidden; padding: 0px; position: absolute; width: min-content; z-index: 0; }",
    ".framer-e8Q0v .framer-1cu650s, .framer-e8Q0v .framer-1xhr4h5, .framer-e8Q0v .framer-xh8cnm { flex: none; height: 20px; position: relative; width: 17px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-e8Q0v.framer-1xse8l7, .framer-e8Q0v .framer-paj8b5, .framer-e8Q0v .framer-4k3oy0, .framer-e8Q0v .framer-9q0edb, .framer-e8Q0v .framer-cx10sq, .framer-e8Q0v .framer-12hn0qh { gap: 0px; } .framer-e8Q0v.framer-1xse8l7 > *, .framer-e8Q0v .framer-paj8b5 > *, .framer-e8Q0v .framer-4k3oy0 > *, .framer-e8Q0v .framer-9q0edb > *, .framer-e8Q0v .framer-cx10sq > *, .framer-e8Q0v .framer-12hn0qh > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-e8Q0v.framer-1xse8l7 > :first-child, .framer-e8Q0v .framer-paj8b5 > :first-child, .framer-e8Q0v .framer-4k3oy0 > :first-child, .framer-e8Q0v .framer-9q0edb > :first-child, .framer-e8Q0v .framer-cx10sq > :first-child, .framer-e8Q0v .framer-12hn0qh > :first-child { margin-left: 0px; } .framer-e8Q0v.framer-1xse8l7 > :last-child, .framer-e8Q0v .framer-paj8b5 > :last-child, .framer-e8Q0v .framer-4k3oy0 > :last-child, .framer-e8Q0v .framer-9q0edb > :last-child, .framer-e8Q0v .framer-cx10sq > :last-child, .framer-e8Q0v .framer-12hn0qh > :last-child { margin-right: 0px; } }",
    ".framer-e8Q0v.framer-v-1p8n3bv .framer-paj8b5, .framer-e8Q0v.framer-v-1oe9rs1 .framer-paj8b5, .framer-e8Q0v.framer-v-1pgmaic .framer-paj8b5 { bottom: -1px; left: -6px; right: unset; }",
    ".framer-e8Q0v.framer-v-1vfq85n.framer-1xse8l7, .framer-e8Q0v.framer-v-1earpag.framer-1xse8l7, .framer-e8Q0v.framer-v-1j21mkw.framer-1xse8l7, .framer-e8Q0v.framer-v-1yuhzwo.framer-1xse8l7 { padding: 10px 16px 10px 16px; }",
    ".framer-e8Q0v.framer-v-1vfq85n .framer-paj8b5 { z-index: 0; }",
    ".framer-e8Q0v.framer-v-1vfq85n .framer-ylskj7 { height: 20px; }",
    ".framer-e8Q0v.framer-v-1earpag .framer-qdu81k, .framer-e8Q0v.framer-v-1j21mkw .framer-qdu81k, .framer-e8Q0v.framer-v-1yuhzwo .framer-qdu81k { order: 0; }",
    ".framer-e8Q0v.framer-v-1earpag .framer-14ko9sk-container, .framer-e8Q0v.framer-v-1j21mkw .framer-14ko9sk-container, .framer-e8Q0v.framer-v-1yuhzwo .framer-14ko9sk-container { order: 3; }",
    ".framer-e8Q0v.framer-v-1earpag .framer-1sae2p2-container, .framer-e8Q0v.framer-v-1j21mkw .framer-1sae2p2-container, .framer-e8Q0v.framer-v-1yuhzwo .framer-1sae2p2-container { order: 4; }",
    ".framer-e8Q0v.framer-v-1earpag .framer-4k3oy0, .framer-e8Q0v.framer-v-1j21mkw .framer-4k3oy0, .framer-e8Q0v.framer-v-1yuhzwo .framer-4k3oy0 { order: 5; }",
    ".framer-e8Q0v.framer-v-1earpag .framer-9q0edb { order: 1; }",
    ".framer-e8Q0v.framer-v-1j21mkw .framer-cx10sq, .framer-e8Q0v.framer-v-1yuhzwo .framer-12hn0qh { order: 2; }",
    ".framer-e8Q0v.framer-v-1pgmaic.hover .framer-paj8b5 { right: unset; }",
  ],
  fr = H(xi, Ci, "framer-e8Q0v"),
  jr = fr;
fr.displayName = "Message";
fr.defaultProps = { height: 47.5, width: 215 };
Z(fr, {
  variant: {
    options: [
      "pBj6w6Ipi",
      "JFF8Fcxm9",
      "sfphhJ0e_",
      "BmvEv5g70",
      "UXAGUakfO",
      "dHHaLlzuS",
      "FtmyB3owl",
      "NnROhpwg_",
    ],
    optionTitles: [
      "Answer",
      "Question",
      "Question \xB7 Hover",
      "Question \xB7 Active",
      "Answer \xB7 Mobile",
      "Question \xB7 Mobile",
      "Question \xB7 Hover \xB7 Mobile",
      "Question \xB7 Active \xB7 Mobile",
    ],
    title: "Variant",
    type: y.Enum,
  },
  BgAQWE9JZ: {
    defaultValue: "What if I don't like it?",
    displayTextArea: !1,
    title: "Message",
    type: y.String,
  },
  ZowNLHVI9: { defaultValue: !0, title: "Ear", type: y.Boolean },
  btPQlyjzM: { defaultValue: !1, title: "Heart", type: y.Boolean },
  qcxv5MbC_: { defaultValue: !1, title: "Star", type: y.Boolean },
  Ig9Oen9_Q: { title: "Show Answer", type: y.EventHandler },
});
G(
  fr,
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
    ...ni,
    ...ii,
  ],
  { supportsExplicitInterCodegen: !0 }
);
var vi = Q(jr),
  yi = ["LHBVYSb3r", "Qf1pBgoRm", "INHT_z3Gt", "wVXByL2bW"],
  bi = "framer-01gAC",
  wi = {
    INHT_z3Gt: "framer-v-1xaxyc5",
    LHBVYSb3r: "framer-v-17k11jm",
    Qf1pBgoRm: "framer-v-lcch7z",
    wVXByL2bW: "framer-v-1v1y2hf",
  };
function Nr(r, ...t) {
  let n = {};
  return t?.forEach((i) => i && Object.assign(n, r[i])), n;
}
var Li = { damping: 30, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  ki = ({ value: r, children: t }) => {
    let n = ee(J),
      i = r ?? n.transition,
      o = Y(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
    return e(J.Provider, { value: o, children: t });
  },
  Ri = l.create(f),
  Fi = {
    "Only Question \xB7 Mobile": "INHT_z3Gt",
    "Only Question": "LHBVYSb3r",
    "Show Answer \xB7 Mobile": "wVXByL2bW",
    "Show Answer": "Qf1pBgoRm",
  },
  Ii = ({
    answer: r,
    ear: t,
    heart: n,
    height: i,
    id: o,
    question: c,
    star: d,
    width: g,
    ...u
  }) => {
    var s, C, w, x, h;
    return {
      ...u,
      egOUrKnhM:
        (s = r ?? u.egOUrKnhM) !== null && s !== void 0
          ? s
          : "What if I don't like it?",
      GP_AYe5lG: n ?? u.GP_AYe5lG,
      qc0l7nqoz:
        (C = c ?? u.qc0l7nqoz) !== null && C !== void 0
          ? C
          : "What if I don't like it?",
      U2IrYA1fw: (w = t ?? u.U2IrYA1fw) !== null && w !== void 0 ? w : !0,
      variant:
        (h = (x = Fi[u.variant]) !== null && x !== void 0 ? x : u.variant) !==
          null && h !== void 0
          ? h
          : "LHBVYSb3r",
      WwQohTRDI: d ?? u.WwQohTRDI,
    };
  },
  Si = (r, t) =>
    r.layoutDependency ? t.join("-") + r.layoutDependency : t.join("-"),
  Vi = N(function (r, t) {
    let { activeLocale: n, setLocale: i } = q(),
      {
        style: o,
        className: c,
        layoutId: d,
        variant: g,
        qc0l7nqoz: u,
        U2IrYA1fw: s,
        GP_AYe5lG: C,
        WwQohTRDI: w,
        egOUrKnhM: x,
        ...h
      } = Ii(r),
      {
        baseVariant: k,
        classNames: X,
        clearLoadingGesture: T,
        gestureHandlers: F,
        gestureVariant: p,
        isLoading: S,
        setGestureState: I,
        setVariant: R,
        variants: m,
      } = te({
        cycleOrder: yi,
        defaultVariant: "LHBVYSb3r",
        variant: g,
        variantClassNames: wi,
      }),
      a = Si(r, m),
      { activeVariantCallback: M, delay: V } = xe(k),
      $ = M(async (...ue) => {
        I({ isPressed: !1 }), R("LHBVYSb3r");
      }),
      P = M(async (...ue) => {
        I({ isPressed: !1 }), R("INHT_z3Gt");
      }),
      le = M(async (...ue) => {
        R("Qf1pBgoRm");
      }),
      fe = M(async (...ue) => {
        R("wVXByL2bW");
      }),
      _ = U(null),
      Ce = D(),
      be = [],
      ae = re();
    return e(j, {
      id: d ?? Ce,
      children: e(Ri, {
        animate: m,
        initial: !1,
        children: e(ki, {
          value: Li,
          children: v(l.div, {
            ...h,
            ...F,
            className: E(bi, ...be, "framer-17k11jm", c, X),
            "data-framer-name": "Only Question",
            layoutDependency: a,
            layoutId: "LHBVYSb3r",
            ref: t ?? _,
            style: { ...o },
            ...Nr(
              {
                INHT_z3Gt: { "data-framer-name": "Only Question \xB7 Mobile" },
                Qf1pBgoRm: {
                  "data-framer-name": "Show Answer",
                  "data-highlight": !0,
                  onTap: $,
                },
                wVXByL2bW: {
                  "data-framer-name": "Show Answer \xB7 Mobile",
                  "data-highlight": !0,
                  onTap: P,
                },
              },
              k,
              p
            ),
            children: [
              e(l.div, {
                className: "framer-989w1n",
                "data-framer-name": "Question",
                layoutDependency: a,
                layoutId: "sS7DZkL5g",
                children: e(L, {
                  height: 47,
                  y: (ae?.y || 0) + 0 + 0 + 0,
                  children: e(l.div, {
                    className: "framer-19x6xmo-container",
                    layoutDependency: a,
                    layoutId: "ShvJvh6ok-container",
                    children: e(jr, {
                      BgAQWE9JZ: u,
                      btPQlyjzM: C,
                      height: "100%",
                      id: "ShvJvh6ok",
                      Ig9Oen9_Q: le,
                      layoutId: "ShvJvh6ok",
                      qcxv5MbC_: w,
                      variant: "JFF8Fcxm9",
                      width: "100%",
                      ZowNLHVI9: s,
                      ...Nr(
                        {
                          INHT_z3Gt: { Ig9Oen9_Q: fe, variant: "dHHaLlzuS" },
                          Qf1pBgoRm: {
                            Ig9Oen9_Q: void 0,
                            variant: "BmvEv5g70",
                          },
                          wVXByL2bW: {
                            Ig9Oen9_Q: void 0,
                            variant: "NnROhpwg_",
                          },
                        },
                        k,
                        p
                      ),
                    }),
                  }),
                }),
              }),
              e(l.div, {
                className: "framer-e9qpgg",
                "data-framer-name": "Answer",
                layoutDependency: a,
                layoutId: "LS7i83HGm",
                style: {
                  filter: "blur(8px)",
                  opacity: 0,
                  scale: 0.9,
                  WebkitFilter: "blur(8px)",
                },
                variants: {
                  Qf1pBgoRm: {
                    filter: "blur(0px)",
                    opacity: 1,
                    scale: 1,
                    WebkitFilter: "blur(0px)",
                  },
                  wVXByL2bW: {
                    filter: "blur(0px)",
                    opacity: 1,
                    scale: 1,
                    WebkitFilter: "blur(0px)",
                  },
                },
                children: e(L, {
                  height: 47,
                  y: (ae?.y || 0) + 0 + 0,
                  ...Nr(
                    {
                      Qf1pBgoRm: { y: (ae?.y || 0) + 0 + 55 + 0 },
                      wVXByL2bW: { y: (ae?.y || 0) + 0 + 55 + 0 },
                    },
                    k,
                    p
                  ),
                  children: e(l.div, {
                    className: "framer-zmuj1j-container",
                    layoutDependency: a,
                    layoutId: "sd5W0lcsj-container",
                    children: e(jr, {
                      BgAQWE9JZ: x,
                      btPQlyjzM: !1,
                      height: "100%",
                      id: "sd5W0lcsj",
                      layoutId: "sd5W0lcsj",
                      qcxv5MbC_: !1,
                      variant: "pBj6w6Ipi",
                      width: "100%",
                      ZowNLHVI9: !0,
                      ...Nr(
                        {
                          INHT_z3Gt: { variant: "UXAGUakfO" },
                          wVXByL2bW: { variant: "UXAGUakfO" },
                        },
                        k,
                        p
                      ),
                    }),
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Ti = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-01gAC.framer-xa6d4m, .framer-01gAC .framer-xa6d4m { display: block; }",
    ".framer-01gAC.framer-17k11jm { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-01gAC .framer-989w1n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; z-index: 2; }",
    ".framer-01gAC .framer-19x6xmo-container, .framer-01gAC .framer-zmuj1j-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-01gAC .framer-e9qpgg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; left: 70px; overflow: visible; padding: 0px; pointer-events: none; position: absolute; top: 0px; width: min-content; z-index: 1; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-01gAC.framer-17k11jm, .framer-01gAC .framer-989w1n, .framer-01gAC .framer-e9qpgg { gap: 0px; } .framer-01gAC.framer-17k11jm > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } .framer-01gAC.framer-17k11jm > :first-child { margin-top: 0px; } .framer-01gAC.framer-17k11jm > :last-child { margin-bottom: 0px; } .framer-01gAC .framer-989w1n > *, .framer-01gAC .framer-e9qpgg > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-01gAC .framer-989w1n > :first-child, .framer-01gAC .framer-e9qpgg > :first-child { margin-left: 0px; } .framer-01gAC .framer-989w1n > :last-child, .framer-01gAC .framer-e9qpgg > :last-child { margin-right: 0px; } }",
    ".framer-01gAC.framer-v-lcch7z.framer-17k11jm { cursor: pointer; gap: 8px; }",
    ".framer-01gAC.framer-v-lcch7z .framer-e9qpgg { align-self: stretch; left: unset; padding: 0px 0px 0px 100px; position: relative; top: unset; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-01gAC.framer-v-lcch7z.framer-17k11jm { gap: 0px; } .framer-01gAC.framer-v-lcch7z.framer-17k11jm > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-01gAC.framer-v-lcch7z.framer-17k11jm > :first-child { margin-top: 0px; } .framer-01gAC.framer-v-lcch7z.framer-17k11jm > :last-child { margin-bottom: 0px; } }",
    ".framer-01gAC.framer-v-1v1y2hf.framer-17k11jm { cursor: pointer; gap: 8px; max-width: 780px; }",
    ".framer-01gAC.framer-v-1v1y2hf .framer-e9qpgg { align-self: stretch; left: unset; position: relative; top: unset; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-01gAC.framer-v-1v1y2hf.framer-17k11jm { gap: 0px; } .framer-01gAC.framer-v-1v1y2hf.framer-17k11jm > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-01gAC.framer-v-1v1y2hf.framer-17k11jm > :first-child { margin-top: 0px; } .framer-01gAC.framer-v-1v1y2hf.framer-17k11jm > :last-child { margin-bottom: 0px; } }",
  ],
  mr = H(Vi, Ti, "framer-01gAC"),
  Ge = mr;
mr.displayName = "Question Row";
mr.defaultProps = { height: 47.5, width: 215 };
Z(mr, {
  variant: {
    options: ["LHBVYSb3r", "Qf1pBgoRm", "INHT_z3Gt", "wVXByL2bW"],
    optionTitles: [
      "Only Question",
      "Show Answer",
      "Only Question \xB7 Mobile",
      "Show Answer \xB7 Mobile",
    ],
    title: "Variant",
    type: y.Enum,
  },
  qc0l7nqoz: {
    defaultValue: "What if I don't like it?",
    displayTextArea: !1,
    title: "Question",
    type: y.String,
  },
  U2IrYA1fw: { defaultValue: !0, title: "Ear", type: y.Boolean },
  GP_AYe5lG: { defaultValue: !1, title: "Heart", type: y.Boolean },
  WwQohTRDI: { defaultValue: !1, title: "Star", type: y.Boolean },
  egOUrKnhM: {
    defaultValue: "What if I don't like it?",
    displayTextArea: !1,
    title: "Answer",
    type: y.String,
  },
});
G(mr, [{ explicitInter: !0, fonts: [] }, ...vi], {
  supportsExplicitInterCodegen: !0,
});
var Mi = Q(Ge),
  Ui = ["djkU_cMZy", "VUDPHOdST"],
  Xi = "framer-rU0ns",
  Bi = { djkU_cMZy: "framer-v-3eri4w", VUDPHOdST: "framer-v-1ci9vf6" };
function Qe(r, ...t) {
  let n = {};
  return t?.forEach((i) => i && Object.assign(n, r[i])), n;
}
var Ji = { damping: 30, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  zi = ({ value: r, children: t }) => {
    let n = ee(J),
      i = r ?? n.transition,
      o = Y(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
    return e(J.Provider, { value: o, children: t });
  },
  Wi = l.create(f),
  Pi = { "Variant 2": "VUDPHOdST", Default: "djkU_cMZy" },
  Ai = ({ height: r, id: t, width: n, ...i }) => {
    var o, c;
    return {
      ...i,
      variant:
        (c = (o = Pi[i.variant]) !== null && o !== void 0 ? o : i.variant) !==
          null && c !== void 0
          ? c
          : "djkU_cMZy",
    };
  },
  _i = (r, t) =>
    r.layoutDependency ? t.join("-") + r.layoutDependency : t.join("-"),
  ji = N(function (r, t) {
    let { activeLocale: n, setLocale: i } = q(),
      { style: o, className: c, layoutId: d, variant: g, ...u } = Ai(r),
      {
        baseVariant: s,
        classNames: C,
        clearLoadingGesture: w,
        gestureHandlers: x,
        gestureVariant: h,
        isLoading: k,
        setGestureState: X,
        setVariant: T,
        variants: F,
      } = te({
        cycleOrder: Ui,
        defaultVariant: "djkU_cMZy",
        variant: g,
        variantClassNames: Bi,
      }),
      p = _i(r, F),
      S = U(null),
      I = D(),
      R = [],
      m = re();
    return e(j, {
      id: d ?? I,
      children: e(Wi, {
        animate: F,
        initial: !1,
        children: e(zi, {
          value: Ji,
          children: v(l.div, {
            ...u,
            ...x,
            className: E(Xi, ...R, "framer-3eri4w", c, C),
            "data-framer-name": "Default",
            layoutDependency: p,
            layoutId: "djkU_cMZy",
            ref: t ?? S,
            style: { ...o },
            ...Qe({ VUDPHOdST: { "data-framer-name": "Variant 2" } }, s, h),
            children: [
              e(l.div, {
                className: "framer-ir3rvx",
                "data-framer-name": "Timestamp",
                layoutDependency: p,
                layoutId: "AAv7xaO6p",
                children: e(b, {
                  __fromCanvasComponent: !0,
                  children: e(f, {
                    children: e(l.p, {
                      style: {
                        "--framer-font-size": "12px",
                        "--framer-letter-spacing": "-0.01em",
                        "--framer-line-height": "1.3em",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-82b5832e-a0cf-4abf-84b4-daf77b132a71, rgb(81, 86, 90)))",
                      },
                      children: "From BooBear, 9:41 AM",
                    }),
                  }),
                  className: "framer-p67kdl",
                  fonts: ["Inter"],
                  layoutDependency: p,
                  layoutId: "q4d_Sx3ZE",
                  style: {
                    "--extracted-r6o4lv":
                      "var(--token-82b5832e-a0cf-4abf-84b4-daf77b132a71, rgb(81, 86, 90))",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
              }),
              e(L, {
                height: 47,
                width: m?.width || "100vw",
                y: (m?.y || 0) + 0 + 86,
                children: e(l.div, {
                  className: "framer-moci53-container",
                  layoutDependency: p,
                  layoutId: "aUcVQWQ8t-container",
                  children: e(Ge, {
                    egOUrKnhM: "Yup! It's a syrup made entirely from plants!",
                    GP_AYe5lG: !0,
                    height: "100%",
                    id: "aUcVQWQ8t",
                    layoutId: "aUcVQWQ8t",
                    qc0l7nqoz: "Is Handshake a liquid?",
                    style: { width: "100%" },
                    U2IrYA1fw: !1,
                    variant: "Qf1pBgoRm",
                    width: "100%",
                    WwQohTRDI: !1,
                    ...Qe({ VUDPHOdST: { variant: "wVXByL2bW" } }, s, h),
                  }),
                }),
              }),
              e(L, {
                height: 47,
                width: m?.width || "100vw",
                y: (m?.y || 0) + 0 + 141,
                children: e(l.div, {
                  className: "framer-lyo7d8-container",
                  layoutDependency: p,
                  layoutId: "HBYrdLrCg-container",
                  children: e(Ge, {
                    egOUrKnhM: "A magician never reveals their secrets.",
                    GP_AYe5lG: !1,
                    height: "100%",
                    id: "HBYrdLrCg",
                    layoutId: "HBYrdLrCg",
                    qc0l7nqoz: "How does it taste so good?!",
                    style: { width: "100%" },
                    U2IrYA1fw: !1,
                    variant: "LHBVYSb3r",
                    width: "100%",
                    WwQohTRDI: !1,
                    ...Qe({ VUDPHOdST: { variant: "INHT_z3Gt" } }, s, h),
                  }),
                }),
              }),
              e(L, {
                height: 47,
                y: (m?.y || 0) + 0 + 196,
                ...Qe({ VUDPHOdST: { width: m?.width || "100vw" } }, s, h),
                children: e(l.div, {
                  className: "framer-1rq924a-container",
                  layoutDependency: p,
                  layoutId: "S2jSsziYK-container",
                  children: e(Ge, {
                    egOUrKnhM:
                      "Sign up to our club and be the first to find out!",
                    GP_AYe5lG: !1,
                    height: "100%",
                    id: "S2jSsziYK",
                    layoutId: "S2jSsziYK",
                    qc0l7nqoz: "When can I buy some?",
                    U2IrYA1fw: !1,
                    variant: "Qf1pBgoRm",
                    width: "100%",
                    WwQohTRDI: !0,
                    ...Qe(
                      {
                        VUDPHOdST: {
                          style: { width: "100%" },
                          variant: "wVXByL2bW",
                        },
                      },
                      s,
                      h
                    ),
                  }),
                }),
              }),
              e(L, {
                height: 47,
                width: m?.width || "100vw",
                y: (m?.y || 0) + 0 + 251,
                children: e(l.div, {
                  className: "framer-1kbgfzx-container",
                  layoutDependency: p,
                  layoutId: "PMSzNMbP5-container",
                  children: e(Ge, {
                    egOUrKnhM: "We'll refund it, or send you another!",
                    GP_AYe5lG: !1,
                    height: "100%",
                    id: "PMSzNMbP5",
                    layoutId: "PMSzNMbP5",
                    qc0l7nqoz: "What if I don't like it?",
                    style: { width: "100%" },
                    U2IrYA1fw: !0,
                    variant: "LHBVYSb3r",
                    width: "100%",
                    WwQohTRDI: !1,
                    ...Qe({ VUDPHOdST: { variant: "INHT_z3Gt" } }, s, h),
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Ni = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-rU0ns.framer-kvyk4, .framer-rU0ns .framer-kvyk4 { display: block; }",
    ".framer-rU0ns.framer-3eri4w { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-rU0ns .framer-ir3rvx { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 22px 0px 22px; position: relative; width: auto; }",
    ".framer-rU0ns .framer-p67kdl { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-rU0ns .framer-moci53-container, .framer-rU0ns .framer-lyo7d8-container, .framer-rU0ns .framer-1kbgfzx-container { align-self: stretch; flex: none; height: auto; position: relative; width: auto; }",
    ".framer-rU0ns .framer-1rq924a-container { flex: none; height: auto; position: relative; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-rU0ns.framer-3eri4w, .framer-rU0ns .framer-ir3rvx { gap: 0px; } .framer-rU0ns.framer-3eri4w > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-rU0ns.framer-3eri4w > :first-child, .framer-rU0ns .framer-ir3rvx > :first-child { margin-top: 0px; } .framer-rU0ns.framer-3eri4w > :last-child, .framer-rU0ns .framer-ir3rvx > :last-child { margin-bottom: 0px; } .framer-rU0ns .framer-ir3rvx > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }",
    ".framer-rU0ns.framer-v-1ci9vf6.framer-3eri4w { width: 332px; }",
    ".framer-rU0ns.framer-v-1ci9vf6 .framer-ir3rvx, .framer-rU0ns.framer-v-1ci9vf6 .framer-moci53-container, .framer-rU0ns.framer-v-1ci9vf6 .framer-lyo7d8-container, .framer-rU0ns.framer-v-1ci9vf6 .framer-1kbgfzx-container { align-self: unset; width: 100%; }",
    ".framer-rU0ns.framer-v-1ci9vf6 .framer-1rq924a-container { width: 100%; }",
  ],
  cr = H(ji, Ni, "framer-rU0ns"),
  Mt = cr;
cr.displayName = "FAQ";
cr.defaultProps = { height: 348, width: 520.5 };
Z(cr, {
  variant: {
    options: ["djkU_cMZy", "VUDPHOdST"],
    optionTitles: ["Default", "Variant 2"],
    title: "Variant",
    type: y.Enum,
  },
});
G(
  cr,
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
    ...Mi,
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Yi = ["FNkOG2TVa", "V1NwKMgbz"],
  Ei = "framer-xHHjY",
  Di = { FNkOG2TVa: "framer-v-1lk0ile", V1NwKMgbz: "framer-v-1d950i" };
function Ia(r, ...t) {
  let n = {};
  return t?.forEach((i) => i && Object.assign(n, r[i])), n;
}
var qi = { delay: 0, duration: 0.2, ease: [0.12, 0.23, 0.5, 1], type: "tween" },
  Zi = ({ value: r, children: t }) => {
    let n = ee(J),
      i = r ?? n.transition,
      o = Y(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
    return e(J.Provider, { value: o, children: t });
  },
  Hi = l.create(f),
  Gi = { "Variant 1": "FNkOG2TVa", "Variant 2": "V1NwKMgbz" },
  Qi = ({ height: r, id: t, width: n, ...i }) => {
    var o, c;
    return {
      ...i,
      variant:
        (c = (o = Gi[i.variant]) !== null && o !== void 0 ? o : i.variant) !==
          null && c !== void 0
          ? c
          : "FNkOG2TVa",
    };
  },
  Oi = (r, t) =>
    r.layoutDependency ? t.join("-") + r.layoutDependency : t.join("-"),
  Ki = N(function (r, t) {
    let { activeLocale: n, setLocale: i } = q(),
      { style: o, className: c, layoutId: d, variant: g, ...u } = Qi(r),
      {
        baseVariant: s,
        classNames: C,
        clearLoadingGesture: w,
        gestureHandlers: x,
        gestureVariant: h,
        isLoading: k,
        setGestureState: X,
        setVariant: T,
        variants: F,
      } = te({
        cycleOrder: Yi,
        defaultVariant: "FNkOG2TVa",
        variant: g,
        variantClassNames: Di,
      }),
      p = Oi(r, F),
      { activeVariantCallback: S, delay: I } = xe(s),
      R = S(async (...P) => {
        X({ isHovered: !0 }), T("V1NwKMgbz");
      }),
      m = S(async (...P) => {
        X({ isHovered: !1 }), T("FNkOG2TVa");
      }),
      a = U(null),
      M = D(),
      V = [],
      $ = re();
    return e(j, {
      id: d ?? M,
      children: e(Hi, {
        animate: F,
        initial: !1,
        children: e(Zi, {
          value: qi,
          children: e(Ae, {
            href: { webPageId: "YRLa4p9A4" },
            nodeId: "FNkOG2TVa",
            children: e(l.a, {
              ...u,
              ...x,
              className: `${E(Ei, ...V, "framer-1lk0ile", c, C)} framer-iuo24a`,
              "data-border": !0,
              "data-framer-name": "Variant 1",
              "data-highlight": !0,
              layoutDependency: p,
              layoutId: "FNkOG2TVa",
              onMouseEnter: R,
              ref: t ?? a,
              style: {
                "--border-bottom-width": "1.5px",
                "--border-color":
                  "var(--token-f1cbc539-f97a-4db0-aa7e-3136daa51261, rgb(8, 110, 253))",
                "--border-left-width": "1.5px",
                "--border-right-width": "1.5px",
                "--border-style": "solid",
                "--border-top-width": "1.5px",
                backgroundColor: "rgba(0, 0, 0, 0)",
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                ...o,
              },
              variants: {
                V1NwKMgbz: {
                  "--border-bottom-width": "0px",
                  "--border-left-width": "0px",
                  "--border-right-width": "0px",
                  "--border-top-width": "0px",
                  backgroundColor:
                    "var(--token-f1cbc539-f97a-4db0-aa7e-3136daa51261, rgb(8, 110, 253))",
                },
              },
              ...Ia(
                {
                  V1NwKMgbz: {
                    "data-framer-name": "Variant 2",
                    onMouseLeave: m,
                  },
                },
                s,
                h
              ),
              children: e(b, {
                __fromCanvasComponent: !0,
                children: e(f, {
                  children: e(l.p, {
                    style: {
                      "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                      "--framer-font-family":
                        '"Inter", "Inter Placeholder", sans-serif',
                      "--framer-font-size": "14px",
                      "--framer-font-weight": "600",
                      "--framer-line-height": "100%",
                      "--framer-text-alignment": "center",
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, var(--token-f1cbc539-f97a-4db0-aa7e-3136daa51261, rgb(8, 110, 253)))",
                    },
                    children: "View FAQ Page \u2014>",
                  }),
                }),
                className: "framer-1y2dghf",
                fonts: ["Inter-SemiBold"],
                layoutDependency: p,
                layoutId: "Q3hGIORCt",
                style: {
                  "--extracted-r6o4lv":
                    "var(--token-f1cbc539-f97a-4db0-aa7e-3136daa51261, rgb(8, 110, 253))",
                  "--framer-paragraph-spacing": "0px",
                },
                variants: {
                  V1NwKMgbz: {
                    "--extracted-r6o4lv":
                      "var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251))",
                  },
                },
                verticalAlignment: "bottom",
                withExternalLayout: !0,
                ...Ia(
                  {
                    V1NwKMgbz: {
                      children: e(f, {
                        children: e(l.p, {
                          style: {
                            "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                            "--framer-font-family":
                              '"Inter", "Inter Placeholder", sans-serif',
                            "--framer-font-size": "14px",
                            "--framer-font-weight": "600",
                            "--framer-line-height": "100%",
                            "--framer-text-alignment": "center",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                          },
                          children: "View FAQ Page \u2014>",
                        }),
                      }),
                    },
                  },
                  s,
                  h
                ),
              }),
            }),
          }),
        }),
      }),
    });
  }),
  $i = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-xHHjY.framer-iuo24a, .framer-xHHjY .framer-iuo24a { display: block; }",
    ".framer-xHHjY.framer-1lk0ile { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 10px 16px 10px 16px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-xHHjY .framer-1y2dghf { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-xHHjY.framer-1lk0ile { gap: 0px; } .framer-xHHjY.framer-1lk0ile > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-xHHjY.framer-1lk0ile > :first-child { margin-left: 0px; } .framer-xHHjY.framer-1lk0ile > :last-child { margin-right: 0px; } }",
    '.framer-xHHjY[data-border="true"]::after, .framer-xHHjY [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  dr = H(Ki, $i, "framer-xHHjY"),
  Ut = dr;
dr.displayName = "Button \xB7 FAQ";
dr.defaultProps = { height: 34, width: 156.5 };
Z(dr, {
  variant: {
    options: ["FNkOG2TVa", "V1NwKMgbz"],
    optionTitles: ["Variant 1", "Variant 2"],
    title: "Variant",
    type: y.Enum,
  },
});
G(
  dr,
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
          url: "/content/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "/content/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "/content/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "/content/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "/content/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "/content/assets/1ZFS7N918ojhhd0nQWdj3jz4w.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "/content/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2",
          weight: "600",
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 }
);
var e5 = ["dBA369Aqu", "pWIoDt0ad", "THKB2Mynx", "VjB5fl3H9"],
  r5 = "framer-9k7CW",
  t5 = {
    dBA369Aqu: "framer-v-5niklq",
    pWIoDt0ad: "framer-v-1kqbqs4",
    THKB2Mynx: "framer-v-12pl817",
    VjB5fl3H9: "framer-v-62nd7v",
  };
function a5(r, ...t) {
  let n = {};
  return t?.forEach((i) => i && Object.assign(n, r[i])), n;
}
var n5 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  i5 = ({ value: r, children: t }) => {
    let n = ee(J),
      i = r ?? n.transition,
      o = Y(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
    return e(J.Provider, { value: o, children: t });
  },
  o5 = l.create(f),
  l5 = {
    Center: "pWIoDt0ad",
    Left: "dBA369Aqu",
    Mobile: "VjB5fl3H9",
    Right: "THKB2Mynx",
  },
  s5 = ({
    background: r,
    fontSize: t,
    height: n,
    id: i,
    text: o,
    textColor: c,
    width: d,
    ...g
  }) => {
    var u, s, C, w, x, h;
    return {
      ...g,
      FC7o1kj8K:
        (u = r ?? g.FC7o1kj8K) !== null && u !== void 0
          ? u
          : "var(--token-27643695-c538-4ca9-85d6-36583d94efa8, rgba(0, 0, 0, 0.05))",
      gdPJW_icM:
        (s = c ?? g.gdPJW_icM) !== null && s !== void 0
          ? s
          : "var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251))",
      INmXRYY_Z: (C = t ?? g.INmXRYY_Z) !== null && C !== void 0 ? C : 16,
      Pa3JM1Mij: (w = o ?? g.Pa3JM1Mij) !== null && w !== void 0 ? w : "0101",
      variant:
        (h = (x = l5[g.variant]) !== null && x !== void 0 ? x : g.variant) !==
          null && h !== void 0
          ? h
          : "dBA369Aqu",
    };
  },
  f5 = (r, t) =>
    r.layoutDependency ? t.join("-") + r.layoutDependency : t.join("-"),
  m5 = N(function (r, t) {
    let { activeLocale: n, setLocale: i } = q(),
      {
        style: o,
        className: c,
        layoutId: d,
        variant: g,
        FC7o1kj8K: u,
        Pa3JM1Mij: s,
        gdPJW_icM: C,
        INmXRYY_Z: w,
        ...x
      } = s5(r),
      {
        baseVariant: h,
        classNames: k,
        clearLoadingGesture: X,
        gestureHandlers: T,
        gestureVariant: F,
        isLoading: p,
        setGestureState: S,
        setVariant: I,
        variants: R,
      } = te({
        cycleOrder: e5,
        defaultVariant: "dBA369Aqu",
        variant: g,
        variantClassNames: t5,
      }),
      m = f5(r, R),
      a = U(null),
      M = D(),
      V = [],
      $ = re();
    return e(j, {
      id: d ?? M,
      children: e(o5, {
        animate: R,
        initial: !1,
        children: e(i5, {
          value: n5,
          children: e(l.div, {
            ...x,
            ...T,
            className: E(r5, ...V, "framer-5niklq", c, k),
            "data-framer-name": "Left",
            layoutDependency: m,
            layoutId: "dBA369Aqu",
            ref: t ?? a,
            style: {
              backgroundColor: u,
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 0,
              borderTopLeftRadius: 12,
              borderTopRightRadius: 0,
              ...o,
            },
            variants: {
              pWIoDt0ad: {
                borderBottomRightRadius: 12,
                borderTopRightRadius: 12,
              },
              THKB2Mynx: {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 12,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 12,
              },
              VjB5fl3H9: {
                borderBottomRightRadius: 12,
                borderTopRightRadius: 12,
              },
            },
            ...a5(
              {
                pWIoDt0ad: { "data-framer-name": "Center" },
                THKB2Mynx: { "data-framer-name": "Right" },
                VjB5fl3H9: { "data-framer-name": "Mobile" },
              },
              h,
              F
            ),
            children: e(b, {
              __fromCanvasComponent: !0,
              children: e(f, {
                children: e(l.p, {
                  style: {
                    "--font-selector": "SW50ZXItTWVkaXVt",
                    "--framer-font-family":
                      '"Inter", "Inter Placeholder", sans-serif',
                    "--framer-font-size":
                      "calc(var(--variable-reference-INmXRYY_Z-TIUwZ53xd) * 1px)",
                    "--framer-font-weight": "500",
                    "--framer-line-height": "100%",
                    "--framer-text-alignment": "center",
                    "--framer-text-color":
                      "var(--extracted-r6o4lv, var(--variable-reference-gdPJW_icM-TIUwZ53xd))",
                  },
                  children: "0101",
                }),
              }),
              className: "framer-cqyj4m",
              "data-framer-name": "22",
              fonts: ["Inter-Medium"],
              layoutDependency: m,
              layoutId: "vqmNGrSc7",
              style: {
                "--extracted-r6o4lv":
                  "var(--variable-reference-gdPJW_icM-TIUwZ53xd)",
                "--framer-paragraph-spacing": "0px",
                "--variable-reference-gdPJW_icM-TIUwZ53xd": C,
                "--variable-reference-INmXRYY_Z-TIUwZ53xd": w,
              },
              text: s,
              verticalAlignment: "bottom",
              withExternalLayout: !0,
            }),
          }),
        }),
      }),
    });
  }),
  c5 = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-9k7CW.framer-1vlh703, .framer-9k7CW .framer-1vlh703 { display: block; }",
    ".framer-9k7CW.framer-5niklq { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 60px; justify-content: center; overflow: visible; padding: 0px 0px 0px 8px; position: relative; width: 180px; }",
    ".framer-9k7CW .framer-cqyj4m { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-9k7CW.framer-5niklq { gap: 0px; } .framer-9k7CW.framer-5niklq > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-9k7CW.framer-5niklq > :first-child { margin-top: 0px; } .framer-9k7CW.framer-5niklq > :last-child { margin-bottom: 0px; } }",
    ".framer-9k7CW.framer-v-1kqbqs4.framer-5niklq { padding: 0px; }",
    ".framer-9k7CW.framer-v-12pl817.framer-5niklq { padding: 0px 8px 0px 0px; }",
    ".framer-9k7CW.framer-v-62nd7v.framer-5niklq { height: 48px; padding: 0px; }",
  ],
  pr = H(m5, c5, "framer-9k7CW"),
  oe = pr;
pr.displayName = "Table Item";
pr.defaultProps = { height: 60, width: 180 };
Z(pr, {
  variant: {
    options: ["dBA369Aqu", "pWIoDt0ad", "THKB2Mynx", "VjB5fl3H9"],
    optionTitles: ["Left", "Center", "Right", "Mobile"],
    title: "Variant",
    type: y.Enum,
  },
  FC7o1kj8K: {
    defaultValue:
      'var(--token-27643695-c538-4ca9-85d6-36583d94efa8, rgba(0, 0, 0, 0.05)) /* {"name":"Table"} */',
    title: "Background",
    type: y.Color,
  },
  Pa3JM1Mij: {
    defaultValue: "0101",
    displayTextArea: !1,
    title: "Text",
    type: y.String,
  },
  gdPJW_icM: {
    defaultValue:
      "var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251))",
    title: "Text Color",
    type: y.Color,
  },
  INmXRYY_Z: {
    defaultValue: 16,
    displayStepper: !0,
    max: 16,
    min: 14,
    title: "Font Size",
    type: y.Number,
  },
});
G(
  pr,
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
var d5 = Q(oe),
  p5 = [
    "E9aO7VCH3",
    "qkrGR4ud6",
    "cAKRVk4EX",
    "QPw5bzlv1",
    "tohlABt0Z",
    "z4VdY_RYR",
  ],
  h5 = "framer-bTR4r",
  u5 = {
    cAKRVk4EX: "framer-v-nud874",
    E9aO7VCH3: "framer-v-9du9kp",
    qkrGR4ud6: "framer-v-172dcke",
    QPw5bzlv1: "framer-v-1dcxtoz",
    tohlABt0Z: "framer-v-t7ql7q",
    z4VdY_RYR: "framer-v-1m8t7ml",
  };
function B(r, ...t) {
  let n = {};
  return t?.forEach((i) => i && Object.assign(n, r[i])), n;
}
var g5 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  x5 = ({ value: r, children: t }) => {
    let n = ee(J),
      i = r ?? n.transition,
      o = Y(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
    return e(J.Provider, { value: o, children: t });
  },
  C5 = l.create(f),
  v5 = {
    "Cocktails \xB7 Mobile": "z4VdY_RYR",
    "Coffee \xB7 Mobile": "tohlABt0Z",
    "Soft Drinks \xB7 Mobile": "QPw5bzlv1",
    "Soft Drinks": "E9aO7VCH3",
    Cocktails: "cAKRVk4EX",
    Coffee: "qkrGR4ud6",
  },
  y5 = ({ height: r, id: t, width: n, ...i }) => {
    var o, c;
    return {
      ...i,
      variant:
        (c = (o = v5[i.variant]) !== null && o !== void 0 ? o : i.variant) !==
          null && c !== void 0
          ? c
          : "E9aO7VCH3",
    };
  },
  b5 = (r, t) =>
    r.layoutDependency ? t.join("-") + r.layoutDependency : t.join("-"),
  w5 = N(function (r, t) {
    let { activeLocale: n, setLocale: i } = q(),
      { style: o, className: c, layoutId: d, variant: g, ...u } = y5(r),
      {
        baseVariant: s,
        classNames: C,
        clearLoadingGesture: w,
        gestureHandlers: x,
        gestureVariant: h,
        isLoading: k,
        setGestureState: X,
        setVariant: T,
        variants: F,
      } = te({
        cycleOrder: p5,
        defaultVariant: "E9aO7VCH3",
        variant: g,
        variantClassNames: u5,
      }),
      p = b5(r, F),
      S = U(null),
      I = () => !["QPw5bzlv1", "tohlABt0Z", "z4VdY_RYR"].includes(s),
      R = D(),
      m = [],
      a = re();
    return e(j, {
      id: d ?? R,
      children: e(C5, {
        animate: F,
        initial: !1,
        children: e(x5, {
          value: g5,
          children: v(l.div, {
            ...u,
            ...x,
            className: E(h5, ...m, "framer-9du9kp", c, C),
            "data-framer-name": "Soft Drinks",
            layoutDependency: p,
            layoutId: "E9aO7VCH3",
            ref: t ?? S,
            style: { ...o },
            ...B(
              {
                cAKRVk4EX: { "data-framer-name": "Cocktails" },
                qkrGR4ud6: { "data-framer-name": "Coffee" },
                QPw5bzlv1: { "data-framer-name": "Soft Drinks \xB7 Mobile" },
                tohlABt0Z: { "data-framer-name": "Coffee \xB7 Mobile" },
                z4VdY_RYR: { "data-framer-name": "Cocktails \xB7 Mobile" },
              },
              s,
              h
            ),
            children: [
              e(l.div, {
                className: "framer-1bgzcwi",
                layoutDependency: p,
                layoutId: "jNqwY2huD",
                children: v(l.div, {
                  className: "framer-1opz0h5",
                  layoutDependency: p,
                  layoutId: "R_CTT3S0w",
                  children: [
                    e(l.div, {
                      className: "framer-atqzit",
                      "data-framer-name": "Frame 175",
                      layoutDependency: p,
                      layoutId: "dBydGmxti",
                      children: e(b, {
                        __fromCanvasComponent: !0,
                        children: e(f, {
                          children: e(l.p, {
                            style: {
                              "--font-selector": "SW50ZXItTWVkaXVt",
                              "--framer-font-family":
                                '"Inter", "Inter Placeholder", sans-serif',
                              "--framer-font-weight": "500",
                              "--framer-line-height": "100%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                            },
                            children: "Calories",
                          }),
                        }),
                        className: "framer-i8mvzi",
                        "data-framer-name": "22",
                        fonts: ["Inter-Medium"],
                        layoutDependency: p,
                        layoutId: "b6_xG7HPx",
                        style: {
                          "--extracted-r6o4lv":
                            "var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251))",
                          "--framer-paragraph-spacing": "0px",
                        },
                        verticalAlignment: "bottom",
                        withExternalLayout: !0,
                        ...B(
                          {
                            QPw5bzlv1: {
                              children: e(f, {
                                children: e(l.p, {
                                  style: {
                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-size": "14px",
                                    "--framer-font-weight": "500",
                                    "--framer-line-height": "100%",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                                  },
                                  children: "Calories",
                                }),
                              }),
                            },
                            tohlABt0Z: {
                              children: e(f, {
                                children: e(l.p, {
                                  style: {
                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-size": "14px",
                                    "--framer-font-weight": "500",
                                    "--framer-line-height": "100%",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                                  },
                                  children: "Calories",
                                }),
                              }),
                            },
                            z4VdY_RYR: {
                              children: e(f, {
                                children: e(l.p, {
                                  style: {
                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-size": "14px",
                                    "--framer-font-weight": "500",
                                    "--framer-line-height": "100%",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                                  },
                                  children: "Calories",
                                }),
                              }),
                            },
                          },
                          s,
                          h
                        ),
                      }),
                    }),
                    e(l.div, {
                      className: "framer-u4rzgh",
                      "data-framer-name": "Frame 171",
                      layoutDependency: p,
                      layoutId: "LPzHfctAc",
                      children: e(b, {
                        __fromCanvasComponent: !0,
                        children: e(f, {
                          children: e(l.p, {
                            style: {
                              "--font-selector": "SW50ZXItTWVkaXVt",
                              "--framer-font-family":
                                '"Inter", "Inter Placeholder", sans-serif',
                              "--framer-font-weight": "500",
                              "--framer-line-height": "100%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                            },
                            children: "Price",
                          }),
                        }),
                        className: "framer-1e8upme",
                        "data-framer-name": "$1",
                        fonts: ["Inter-Medium"],
                        layoutDependency: p,
                        layoutId: "XKFfgeOyF",
                        style: {
                          "--extracted-r6o4lv":
                            "var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251))",
                          "--framer-paragraph-spacing": "0px",
                        },
                        verticalAlignment: "bottom",
                        withExternalLayout: !0,
                        ...B(
                          {
                            cAKRVk4EX: {
                              children: e(f, {
                                children: e(l.p, {
                                  style: {
                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-weight": "500",
                                    "--framer-line-height": "100%",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                                  },
                                  children: "Flavor",
                                }),
                              }),
                            },
                            qkrGR4ud6: {
                              children: e(f, {
                                children: e(l.p, {
                                  style: {
                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-weight": "500",
                                    "--framer-line-height": "100%",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                                  },
                                  children: "Flavor",
                                }),
                              }),
                            },
                            QPw5bzlv1: {
                              children: e(f, {
                                children: e(l.p, {
                                  style: {
                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-size": "14px",
                                    "--framer-font-weight": "500",
                                    "--framer-line-height": "100%",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                                  },
                                  children: "Price",
                                }),
                              }),
                            },
                            tohlABt0Z: {
                              children: e(f, {
                                children: e(l.p, {
                                  style: {
                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-size": "14px",
                                    "--framer-font-weight": "500",
                                    "--framer-line-height": "100%",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                                  },
                                  children: "Flavor",
                                }),
                              }),
                            },
                            z4VdY_RYR: {
                              children: e(f, {
                                children: e(l.p, {
                                  style: {
                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-size": "14px",
                                    "--framer-font-weight": "500",
                                    "--framer-line-height": "100%",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                                  },
                                  children: "Flavor",
                                }),
                              }),
                            },
                          },
                          s,
                          h
                        ),
                      }),
                    }),
                    e(l.div, {
                      className: "framer-319xlo",
                      "data-framer-name": "Frame 159",
                      layoutDependency: p,
                      layoutId: "qU6DMUokv",
                      children: e(b, {
                        __fromCanvasComponent: !0,
                        children: e(f, {
                          children: e(l.p, {
                            style: {
                              "--font-selector": "SW50ZXItTWVkaXVt",
                              "--framer-font-family":
                                '"Inter", "Inter Placeholder", sans-serif',
                              "--framer-font-weight": "500",
                              "--framer-line-height": "100%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                            },
                            children: "Prebiotics",
                          }),
                        }),
                        className: "framer-cfr9gy",
                        "data-framer-name": "8 or Less",
                        fonts: ["Inter-Medium"],
                        layoutDependency: p,
                        layoutId: "MkJlr4j5L",
                        style: {
                          "--extracted-r6o4lv":
                            "var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251))",
                          "--framer-paragraph-spacing": "0px",
                        },
                        verticalAlignment: "bottom",
                        withExternalLayout: !0,
                        ...B(
                          {
                            cAKRVk4EX: {
                              children: e(f, {
                                children: e(l.p, {
                                  style: {
                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-weight": "500",
                                    "--framer-line-height": "100%",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                                  },
                                  children: "Sugar",
                                }),
                              }),
                            },
                            qkrGR4ud6: {
                              children: e(f, {
                                children: e(l.p, {
                                  style: {
                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-weight": "500",
                                    "--framer-line-height": "100%",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                                  },
                                  children: "Sugar",
                                }),
                              }),
                            },
                            QPw5bzlv1: {
                              children: e(f, {
                                children: e(l.p, {
                                  style: {
                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-size": "14px",
                                    "--framer-font-weight": "500",
                                    "--framer-line-height": "100%",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                                  },
                                  children: "Prebiotics",
                                }),
                              }),
                            },
                            tohlABt0Z: {
                              children: e(f, {
                                children: e(l.p, {
                                  style: {
                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-size": "14px",
                                    "--framer-font-weight": "500",
                                    "--framer-line-height": "100%",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                                  },
                                  children: "Sugar",
                                }),
                              }),
                            },
                            z4VdY_RYR: {
                              children: e(f, {
                                children: e(l.p, {
                                  style: {
                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-size": "14px",
                                    "--framer-font-weight": "500",
                                    "--framer-line-height": "100%",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                                  },
                                  children: "Sugar",
                                }),
                              }),
                            },
                          },
                          s,
                          h
                        ),
                      }),
                    }),
                    e(l.div, {
                      className: "framer-kr0iux",
                      "data-framer-name": "Frame 154",
                      layoutDependency: p,
                      layoutId: "gGhxWF4Gs",
                      children: e(b, {
                        __fromCanvasComponent: !0,
                        children: e(f, {
                          children: e(l.p, {
                            style: {
                              "--font-selector": "SW50ZXItTWVkaXVt",
                              "--framer-font-family":
                                '"Inter", "Inter Placeholder", sans-serif',
                              "--framer-font-weight": "500",
                              "--framer-line-height": "100%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                            },
                            children: "Sugar",
                          }),
                        }),
                        className: "framer-9xkwb0",
                        "data-framer-name": "6g",
                        fonts: ["Inter-Medium"],
                        layoutDependency: p,
                        layoutId: "z5644TQt5",
                        style: {
                          "--extracted-r6o4lv":
                            "var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251))",
                          "--framer-paragraph-spacing": "0px",
                        },
                        verticalAlignment: "bottom",
                        withExternalLayout: !0,
                        ...B(
                          {
                            cAKRVk4EX: {
                              children: e(f, {
                                children: e(l.p, {
                                  style: {
                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-weight": "500",
                                    "--framer-line-height": "100%",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                                  },
                                  children: "Price",
                                }),
                              }),
                            },
                            qkrGR4ud6: {
                              children: e(f, {
                                children: e(l.p, {
                                  style: {
                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-weight": "500",
                                    "--framer-line-height": "100%",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                                  },
                                  children: "Prebiotics",
                                }),
                              }),
                            },
                            QPw5bzlv1: {
                              children: e(f, {
                                children: e(l.p, {
                                  style: {
                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-size": "14px",
                                    "--framer-font-weight": "500",
                                    "--framer-line-height": "100%",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                                  },
                                  children: "Sugar",
                                }),
                              }),
                            },
                            tohlABt0Z: {
                              children: e(f, {
                                children: e(l.p, {
                                  style: {
                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-size": "14px",
                                    "--framer-font-weight": "500",
                                    "--framer-line-height": "100%",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                                  },
                                  children: "Prebiotics",
                                }),
                              }),
                            },
                            z4VdY_RYR: {
                              children: e(f, {
                                children: e(l.p, {
                                  style: {
                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-size": "14px",
                                    "--framer-font-weight": "500",
                                    "--framer-line-height": "100%",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                                  },
                                  children: "Price",
                                }),
                              }),
                            },
                          },
                          s,
                          h
                        ),
                      }),
                    }),
                    e(l.div, {
                      className: "framer-1g2gvil",
                      "data-framer-name": "Frame 167",
                      layoutDependency: p,
                      layoutId: "UI1HUs_Bk",
                      children: e(b, {
                        __fromCanvasComponent: !0,
                        children: e(f, {
                          children: e(l.p, {
                            style: {
                              "--font-selector": "SW50ZXItTWVkaXVt",
                              "--framer-font-family":
                                '"Inter", "Inter Placeholder", sans-serif',
                              "--framer-font-weight": "500",
                              "--framer-line-height": "100%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                            },
                            children: "Preservatives",
                          }),
                        }),
                        className: "framer-mmix2c",
                        "data-framer-name": "Complex",
                        fonts: ["Inter-Medium"],
                        layoutDependency: p,
                        layoutId: "iUFGK9r2f",
                        style: {
                          "--extracted-r6o4lv":
                            "var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251))",
                          "--framer-paragraph-spacing": "0px",
                        },
                        verticalAlignment: "bottom",
                        withExternalLayout: !0,
                        ...B(
                          {
                            cAKRVk4EX: {
                              children: e(f, {
                                children: e(l.p, {
                                  style: {
                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-weight": "500",
                                    "--framer-line-height": "100%",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                                  },
                                  children: "Alcohol",
                                }),
                              }),
                            },
                            qkrGR4ud6: {
                              children: e(f, {
                                children: e(l.p, {
                                  style: {
                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-weight": "500",
                                    "--framer-line-height": "100%",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                                  },
                                  children: "Mouthfeel",
                                }),
                              }),
                            },
                            QPw5bzlv1: {
                              children: e(f, {
                                children: e(l.p, {
                                  style: {
                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-size": "14px",
                                    "--framer-font-weight": "500",
                                    "--framer-line-height": "100%",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                                  },
                                  children: "Preservatives",
                                }),
                              }),
                            },
                            tohlABt0Z: {
                              children: e(f, {
                                children: e(l.p, {
                                  style: {
                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-size": "14px",
                                    "--framer-font-weight": "500",
                                    "--framer-line-height": "100%",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                                  },
                                  children: "Mouthfeel",
                                }),
                              }),
                            },
                            z4VdY_RYR: {
                              children: e(f, {
                                children: e(l.p, {
                                  style: {
                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-size": "14px",
                                    "--framer-font-weight": "500",
                                    "--framer-line-height": "100%",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                                  },
                                  children: "Alcohol",
                                }),
                              }),
                            },
                          },
                          s,
                          h
                        ),
                      }),
                    }),
                    e(l.div, {
                      className: "framer-eocsa9",
                      "data-framer-name": "Frame 163",
                      layoutDependency: p,
                      layoutId: "zpiRvravz",
                      children: e(b, {
                        __fromCanvasComponent: !0,
                        children: e(f, {
                          children: e(l.p, {
                            style: {
                              "--font-selector": "SW50ZXItTWVkaXVt",
                              "--framer-font-family":
                                '"Inter", "Inter Placeholder", sans-serif',
                              "--framer-font-weight": "500",
                              "--framer-line-height": "100%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                            },
                            children: "Glycemic Index",
                          }),
                        }),
                        className: "framer-1gaca9r",
                        "data-framer-name": "None",
                        fonts: ["Inter-Medium"],
                        layoutDependency: p,
                        layoutId: "T58KtfbNh",
                        style: {
                          "--extracted-r6o4lv":
                            "var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251))",
                          "--framer-paragraph-spacing": "0px",
                        },
                        verticalAlignment: "bottom",
                        withExternalLayout: !0,
                        ...B(
                          {
                            cAKRVk4EX: {
                              children: e(f, {
                                children: e(l.p, {
                                  style: {
                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-weight": "500",
                                    "--framer-line-height": "100%",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                                  },
                                  children: "Prebiotics",
                                }),
                              }),
                            },
                            qkrGR4ud6: {
                              children: e(f, {
                                children: e(l.p, {
                                  style: {
                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-weight": "500",
                                    "--framer-line-height": "100%",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                                  },
                                  children: "Fiber",
                                }),
                              }),
                            },
                            QPw5bzlv1: {
                              children: e(f, {
                                children: e(l.p, {
                                  style: {
                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-size": "14px",
                                    "--framer-font-weight": "500",
                                    "--framer-line-height": "100%",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                                  },
                                  children: "Glyc. Index",
                                }),
                              }),
                            },
                            tohlABt0Z: {
                              children: e(f, {
                                children: e(l.p, {
                                  style: {
                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-size": "14px",
                                    "--framer-font-weight": "500",
                                    "--framer-line-height": "100%",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                                  },
                                  children: "Fiber",
                                }),
                              }),
                            },
                            z4VdY_RYR: {
                              children: e(f, {
                                children: e(l.p, {
                                  style: {
                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-size": "14px",
                                    "--framer-font-weight": "500",
                                    "--framer-line-height": "100%",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                                  },
                                  children: "Prebiotics",
                                }),
                              }),
                            },
                          },
                          s,
                          h
                        ),
                      }),
                    }),
                    e(l.div, {
                      className: "framer-6284t9",
                      "data-framer-name": "Frame 179",
                      layoutDependency: p,
                      layoutId: "bwCQTbNp2",
                      children: e(b, {
                        __fromCanvasComponent: !0,
                        children: e(f, {
                          children: e(l.p, {
                            style: {
                              "--font-selector": "SW50ZXItTWVkaXVt",
                              "--framer-font-family":
                                '"Inter", "Inter Placeholder", sans-serif',
                              "--framer-font-weight": "500",
                              "--framer-line-height": "100%",
                              "--framer-text-alignment": "center",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                            },
                            children: "Packaging",
                          }),
                        }),
                        className: "framer-xhp5bg",
                        "data-framer-name": "Multi-Use",
                        fonts: ["Inter-Medium"],
                        layoutDependency: p,
                        layoutId: "mpEHAOF1X",
                        style: {
                          "--extracted-r6o4lv":
                            "var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251))",
                          "--framer-paragraph-spacing": "0px",
                        },
                        verticalAlignment: "bottom",
                        withExternalLayout: !0,
                        ...B(
                          {
                            QPw5bzlv1: {
                              children: e(f, {
                                children: e(l.p, {
                                  style: {
                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-size": "14px",
                                    "--framer-font-weight": "500",
                                    "--framer-line-height": "100%",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                                  },
                                  children: "Packaging",
                                }),
                              }),
                            },
                            tohlABt0Z: {
                              children: e(f, {
                                children: e(l.p, {
                                  style: {
                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-size": "14px",
                                    "--framer-font-weight": "500",
                                    "--framer-line-height": "100%",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                                  },
                                  children: "Packaging",
                                }),
                              }),
                            },
                            z4VdY_RYR: {
                              children: e(f, {
                                children: e(l.p, {
                                  style: {
                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-size": "14px",
                                    "--framer-font-weight": "500",
                                    "--framer-line-height": "100%",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                                  },
                                  children: "Packaging",
                                }),
                              }),
                            },
                          },
                          s,
                          h
                        ),
                      }),
                    }),
                  ],
                }),
              }),
              v(l.div, {
                className: "framer-yf30km",
                "data-border": !0,
                "data-framer-name": "Column 1B",
                layoutDependency: p,
                layoutId: "odiGLYlF4",
                style: {
                  "--border-bottom-width": "1px",
                  "--border-color":
                    "var(--token-f872aefb-d4cc-4be7-a1b4-ca7954ca6bce, rgb(183, 255, 0))",
                  "--border-left-width": "1px",
                  "--border-right-width": "1px",
                  "--border-style": "solid",
                  "--border-top-width": "1px",
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                },
                children: [
                  e(l.div, {
                    className: "framer-15n78gz",
                    "data-framer-name": "Frame 151",
                    layoutDependency: p,
                    layoutId: "ejnslEf77",
                    children: e(b, {
                      __fromCanvasComponent: !0,
                      children: e(f, {
                        children: e(l.p, {
                          style: {
                            "--font-selector":
                              "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnT0RBd0xDQWlkMlIwYUNJZ01UQXc=",
                            "--framer-font-family":
                              '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                            "--framer-font-size": "30px",
                            "--framer-font-variation-axes":
                              'var(--extracted-2gg91v, "opsz" 96, "wght" 800, "wdth" 100)',
                            "--framer-line-height": "100%",
                            "--framer-text-alignment": "center",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-f872aefb-d4cc-4be7-a1b4-ca7954ca6bce, rgb(183, 255, 0)))",
                          },
                          children: "Handshake",
                        }),
                      }),
                      className: "framer-y4c1c3",
                      "data-framer-name": "Handshake",
                      fonts: ["GF;Bricolage Grotesque-variable-regular"],
                      layoutDependency: p,
                      layoutId: "KkfFXTkCD",
                      style: {
                        "--extracted-2gg91v":
                          '"opsz" 96, "wght" 800, "wdth" 100',
                        "--extracted-r6o4lv":
                          "var(--token-f872aefb-d4cc-4be7-a1b4-ca7954ca6bce, rgb(183, 255, 0))",
                        "--framer-paragraph-spacing": "0px",
                      },
                      variants: {
                        QPw5bzlv1: {
                          "--extracted-2gg91v":
                            '"opsz" 96, "wght" 600, "wdth" 100',
                        },
                        tohlABt0Z: {
                          "--extracted-2gg91v":
                            '"opsz" 96, "wght" 600, "wdth" 100',
                        },
                        z4VdY_RYR: {
                          "--extracted-2gg91v":
                            '"opsz" 96, "wght" 600, "wdth" 100',
                        },
                      },
                      verticalAlignment: "bottom",
                      withExternalLayout: !0,
                      ...B(
                        {
                          QPw5bzlv1: {
                            children: e(f, {
                              children: e(l.p, {
                                style: {
                                  "--font-selector":
                                    "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnTmpBd0xDQWlkMlIwYUNJZ01UQXc=",
                                  "--framer-font-family":
                                    '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                  "--framer-font-size": "21px",
                                  "--framer-font-variation-axes":
                                    'var(--extracted-2gg91v, "opsz" 96, "wght" 600, "wdth" 100)',
                                  "--framer-line-height": "100%",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-f872aefb-d4cc-4be7-a1b4-ca7954ca6bce, rgb(183, 255, 0)))",
                                },
                                children: "Handshake",
                              }),
                            }),
                          },
                          tohlABt0Z: {
                            children: e(f, {
                              children: e(l.p, {
                                style: {
                                  "--font-selector":
                                    "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnTmpBd0xDQWlkMlIwYUNJZ01UQXc=",
                                  "--framer-font-family":
                                    '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                  "--framer-font-size": "21px",
                                  "--framer-font-variation-axes":
                                    'var(--extracted-2gg91v, "opsz" 96, "wght" 600, "wdth" 100)',
                                  "--framer-line-height": "100%",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-f872aefb-d4cc-4be7-a1b4-ca7954ca6bce, rgb(183, 255, 0)))",
                                },
                                children: "Handshake",
                              }),
                            }),
                          },
                          z4VdY_RYR: {
                            children: e(f, {
                              children: e(l.p, {
                                style: {
                                  "--font-selector":
                                    "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnTmpBd0xDQWlkMlIwYUNJZ01UQXc=",
                                  "--framer-font-family":
                                    '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                  "--framer-font-size": "21px",
                                  "--framer-font-variation-axes":
                                    'var(--extracted-2gg91v, "opsz" 96, "wght" 600, "wdth" 100)',
                                  "--framer-line-height": "100%",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-f872aefb-d4cc-4be7-a1b4-ca7954ca6bce, rgb(183, 255, 0)))",
                                },
                                children: "Handshake",
                              }),
                            }),
                          },
                        },
                        s,
                        h
                      ),
                    }),
                  }),
                  e(L, {
                    height: 60,
                    width: `calc(min(max((${
                      a?.width || "100vw"
                    } - 157px) / 3, 1px), 220px) - 24px)`,
                    y: (a?.y || 0) + 0 + 0 + 64,
                    ...B(
                      {
                        QPw5bzlv1: {
                          height: 48,
                          width: `calc(max((${
                            a?.width || "100vw"
                          } - 20px) * 0.3103, 1px) - 24px)`,
                        },
                        tohlABt0Z: {
                          height: 48,
                          width: `calc(max((${
                            a?.width || "100vw"
                          } - 20px) * 0.3103, 1px) - 24px)`,
                        },
                        z4VdY_RYR: {
                          height: 48,
                          width: `calc(max((${
                            a?.width || "100vw"
                          } - 20px) * 0.3103, 1px) - 24px)`,
                        },
                      },
                      s,
                      h
                    ),
                    children: e(l.div, {
                      className: "framer-qfe54m-container",
                      layoutDependency: p,
                      layoutId: "whljfW_93-container",
                      children: e(oe, {
                        FC7o1kj8K:
                          "var(--token-27643695-c538-4ca9-85d6-36583d94efa8, rgba(0, 0, 0, 0.1))",
                        gdPJW_icM:
                          "var(--token-f872aefb-d4cc-4be7-a1b4-ca7954ca6bce, rgb(183, 255, 0))",
                        height: "100%",
                        id: "whljfW_93",
                        INmXRYY_Z: 16,
                        layoutId: "whljfW_93",
                        Pa3JM1Mij: "22",
                        style: { height: "100%", width: "100%" },
                        variant: "pWIoDt0ad",
                        width: "100%",
                        ...B(
                          {
                            cAKRVk4EX: { Pa3JM1Mij: "80-166" },
                            QPw5bzlv1: { INmXRYY_Z: 14, variant: "VjB5fl3H9" },
                            tohlABt0Z: { INmXRYY_Z: 14, variant: "VjB5fl3H9" },
                            z4VdY_RYR: {
                              INmXRYY_Z: 14,
                              Pa3JM1Mij: "80-166",
                              variant: "VjB5fl3H9",
                            },
                          },
                          s,
                          h
                        ),
                      }),
                    }),
                  }),
                  e(L, {
                    height: 60,
                    width: `calc(min(max((${
                      a?.width || "100vw"
                    } - 157px) / 3, 1px), 220px) - 24px)`,
                    y: (a?.y || 0) + 0 + 0 + 124,
                    ...B(
                      {
                        QPw5bzlv1: {
                          height: 48,
                          width: `calc(max((${
                            a?.width || "100vw"
                          } - 20px) * 0.3103, 1px) - 24px)`,
                          y: (a?.y || 0) + 0 + 0 + 112,
                        },
                        tohlABt0Z: {
                          height: 48,
                          width: `calc(max((${
                            a?.width || "100vw"
                          } - 20px) * 0.3103, 1px) - 24px)`,
                          y: (a?.y || 0) + 0 + 0 + 112,
                        },
                        z4VdY_RYR: {
                          height: 48,
                          width: `calc(max((${
                            a?.width || "100vw"
                          } - 20px) * 0.3103, 1px) - 24px)`,
                          y: (a?.y || 0) + 0 + 0 + 112,
                        },
                      },
                      s,
                      h
                    ),
                    children: e(l.div, {
                      className: "framer-axl6pf-container",
                      layoutDependency: p,
                      layoutId: "cMtSkrzKz-container",
                      children: e(oe, {
                        FC7o1kj8K: "rgba(255, 255, 255, 0)",
                        gdPJW_icM:
                          "var(--token-f872aefb-d4cc-4be7-a1b4-ca7954ca6bce, rgb(183, 255, 0))",
                        height: "100%",
                        id: "cMtSkrzKz",
                        INmXRYY_Z: 16,
                        layoutId: "cMtSkrzKz",
                        Pa3JM1Mij: "$1",
                        style: { height: "100%", width: "100%" },
                        variant: "pWIoDt0ad",
                        width: "100%",
                        ...B(
                          {
                            cAKRVk4EX: { Pa3JM1Mij: "Real Plants" },
                            qkrGR4ud6: { Pa3JM1Mij: "Authentic" },
                            QPw5bzlv1: { INmXRYY_Z: 14, variant: "VjB5fl3H9" },
                            tohlABt0Z: {
                              INmXRYY_Z: 14,
                              Pa3JM1Mij: "Authentic",
                              variant: "VjB5fl3H9",
                            },
                            z4VdY_RYR: {
                              INmXRYY_Z: 14,
                              Pa3JM1Mij: "Real Plants",
                              variant: "VjB5fl3H9",
                            },
                          },
                          s,
                          h
                        ),
                      }),
                    }),
                  }),
                  e(L, {
                    height: 60,
                    width: `calc(min(max((${
                      a?.width || "100vw"
                    } - 157px) / 3, 1px), 220px) - 24px)`,
                    y: (a?.y || 0) + 0 + 0 + 184,
                    ...B(
                      {
                        QPw5bzlv1: {
                          height: 48,
                          width: `calc(max((${
                            a?.width || "100vw"
                          } - 20px) * 0.3103, 1px) - 24px)`,
                          y: (a?.y || 0) + 0 + 0 + 160,
                        },
                        tohlABt0Z: {
                          height: 48,
                          width: `calc(max((${
                            a?.width || "100vw"
                          } - 20px) * 0.3103, 1px) - 24px)`,
                          y: (a?.y || 0) + 0 + 0 + 160,
                        },
                        z4VdY_RYR: {
                          height: 48,
                          width: `calc(max((${
                            a?.width || "100vw"
                          } - 20px) * 0.3103, 1px) - 24px)`,
                          y: (a?.y || 0) + 0 + 0 + 160,
                        },
                      },
                      s,
                      h
                    ),
                    children: e(l.div, {
                      className: "framer-9pmai-container",
                      layoutDependency: p,
                      layoutId: "VHa5gRxgJ-container",
                      children: e(oe, {
                        FC7o1kj8K:
                          "var(--token-27643695-c538-4ca9-85d6-36583d94efa8, rgba(0, 0, 0, 0.1))",
                        gdPJW_icM:
                          "var(--token-f872aefb-d4cc-4be7-a1b4-ca7954ca6bce, rgb(183, 255, 0))",
                        height: "100%",
                        id: "VHa5gRxgJ",
                        INmXRYY_Z: 16,
                        layoutId: "VHa5gRxgJ",
                        Pa3JM1Mij: "Yes",
                        style: { height: "100%", width: "100%" },
                        variant: "pWIoDt0ad",
                        width: "100%",
                        ...B(
                          {
                            cAKRVk4EX: { Pa3JM1Mij: "0.3-6g" },
                            qkrGR4ud6: { Pa3JM1Mij: "6g" },
                            QPw5bzlv1: { INmXRYY_Z: 14, variant: "VjB5fl3H9" },
                            tohlABt0Z: {
                              INmXRYY_Z: 14,
                              Pa3JM1Mij: "6g",
                              variant: "VjB5fl3H9",
                            },
                            z4VdY_RYR: {
                              INmXRYY_Z: 14,
                              Pa3JM1Mij: "0.3-6g",
                              variant: "VjB5fl3H9",
                            },
                          },
                          s,
                          h
                        ),
                      }),
                    }),
                  }),
                  e(L, {
                    height: 60,
                    width: `calc(min(max((${
                      a?.width || "100vw"
                    } - 157px) / 3, 1px), 220px) - 24px)`,
                    y: (a?.y || 0) + 0 + 0 + 244,
                    ...B(
                      {
                        QPw5bzlv1: {
                          height: 48,
                          width: `calc(max((${
                            a?.width || "100vw"
                          } - 20px) * 0.3103, 1px) - 24px)`,
                          y: (a?.y || 0) + 0 + 0 + 208,
                        },
                        tohlABt0Z: {
                          height: 48,
                          width: `calc(max((${
                            a?.width || "100vw"
                          } - 20px) * 0.3103, 1px) - 24px)`,
                          y: (a?.y || 0) + 0 + 0 + 208,
                        },
                        z4VdY_RYR: {
                          height: 48,
                          width: `calc(max((${
                            a?.width || "100vw"
                          } - 20px) * 0.3103, 1px) - 24px)`,
                          y: (a?.y || 0) + 0 + 0 + 208,
                        },
                      },
                      s,
                      h
                    ),
                    children: e(l.div, {
                      className: "framer-hsi7kl-container",
                      layoutDependency: p,
                      layoutId: "kZj4dbKO9-container",
                      children: e(oe, {
                        FC7o1kj8K: "rgba(255, 255, 255, 0)",
                        gdPJW_icM:
                          "var(--token-f872aefb-d4cc-4be7-a1b4-ca7954ca6bce, rgb(183, 255, 0))",
                        height: "100%",
                        id: "kZj4dbKO9",
                        INmXRYY_Z: 16,
                        layoutId: "kZj4dbKO9",
                        Pa3JM1Mij: "6g",
                        style: { height: "100%", width: "100%" },
                        variant: "pWIoDt0ad",
                        width: "100%",
                        ...B(
                          {
                            cAKRVk4EX: { Pa3JM1Mij: "$1-$2" },
                            qkrGR4ud6: { Pa3JM1Mij: "Yes" },
                            QPw5bzlv1: { INmXRYY_Z: 14, variant: "VjB5fl3H9" },
                            tohlABt0Z: {
                              INmXRYY_Z: 14,
                              Pa3JM1Mij: "Yes",
                              variant: "VjB5fl3H9",
                            },
                            z4VdY_RYR: {
                              INmXRYY_Z: 14,
                              Pa3JM1Mij: "$1-$2",
                              variant: "VjB5fl3H9",
                            },
                          },
                          s,
                          h
                        ),
                      }),
                    }),
                  }),
                  e(L, {
                    height: 60,
                    width: `calc(min(max((${
                      a?.width || "100vw"
                    } - 157px) / 3, 1px), 220px) - 24px)`,
                    y: (a?.y || 0) + 0 + 0 + 304,
                    ...B(
                      {
                        QPw5bzlv1: {
                          height: 48,
                          width: `calc(max((${
                            a?.width || "100vw"
                          } - 20px) * 0.3103, 1px) - 24px)`,
                          y: (a?.y || 0) + 0 + 0 + 256,
                        },
                        tohlABt0Z: {
                          height: 48,
                          width: `calc(max((${
                            a?.width || "100vw"
                          } - 20px) * 0.3103, 1px) - 24px)`,
                          y: (a?.y || 0) + 0 + 0 + 256,
                        },
                        z4VdY_RYR: {
                          height: 48,
                          width: `calc(max((${
                            a?.width || "100vw"
                          } - 20px) * 0.3103, 1px) - 24px)`,
                          y: (a?.y || 0) + 0 + 0 + 256,
                        },
                      },
                      s,
                      h
                    ),
                    children: e(l.div, {
                      className: "framer-3ix7oj-container",
                      layoutDependency: p,
                      layoutId: "AhDovjIcU-container",
                      children: e(oe, {
                        FC7o1kj8K:
                          "var(--token-27643695-c538-4ca9-85d6-36583d94efa8, rgba(0, 0, 0, 0.1))",
                        gdPJW_icM:
                          "var(--token-f872aefb-d4cc-4be7-a1b4-ca7954ca6bce, rgb(183, 255, 0))",
                        height: "100%",
                        id: "AhDovjIcU",
                        INmXRYY_Z: 16,
                        layoutId: "AhDovjIcU",
                        Pa3JM1Mij: "None",
                        style: { height: "100%", width: "100%" },
                        variant: "pWIoDt0ad",
                        width: "100%",
                        ...B(
                          {
                            cAKRVk4EX: { Pa3JM1Mij: "You Choose" },
                            qkrGR4ud6: { Pa3JM1Mij: "Full-Body" },
                            QPw5bzlv1: { INmXRYY_Z: 14, variant: "VjB5fl3H9" },
                            tohlABt0Z: {
                              INmXRYY_Z: 14,
                              Pa3JM1Mij: "Full-Body",
                              variant: "VjB5fl3H9",
                            },
                            z4VdY_RYR: {
                              INmXRYY_Z: 14,
                              Pa3JM1Mij: "You Choose",
                              variant: "VjB5fl3H9",
                            },
                          },
                          s,
                          h
                        ),
                      }),
                    }),
                  }),
                  e(L, {
                    height: 60,
                    width: `calc(min(max((${
                      a?.width || "100vw"
                    } - 157px) / 3, 1px), 220px) - 24px)`,
                    y: (a?.y || 0) + 0 + 0 + 364,
                    ...B(
                      {
                        QPw5bzlv1: {
                          height: 48,
                          width: `calc(max((${
                            a?.width || "100vw"
                          } - 20px) * 0.3103, 1px) - 24px)`,
                          y: (a?.y || 0) + 0 + 0 + 304,
                        },
                        tohlABt0Z: {
                          height: 48,
                          width: `calc(max((${
                            a?.width || "100vw"
                          } - 20px) * 0.3103, 1px) - 24px)`,
                          y: (a?.y || 0) + 0 + 0 + 304,
                        },
                        z4VdY_RYR: {
                          height: 48,
                          width: `calc(max((${
                            a?.width || "100vw"
                          } - 20px) * 0.3103, 1px) - 24px)`,
                          y: (a?.y || 0) + 0 + 0 + 304,
                        },
                      },
                      s,
                      h
                    ),
                    children: e(l.div, {
                      className: "framer-km3t0j-container",
                      layoutDependency: p,
                      layoutId: "SuivIhmVl-container",
                      children: e(oe, {
                        FC7o1kj8K: "rgba(255, 255, 255, 0)",
                        gdPJW_icM:
                          "var(--token-f872aefb-d4cc-4be7-a1b4-ca7954ca6bce, rgb(183, 255, 0))",
                        height: "100%",
                        id: "SuivIhmVl",
                        INmXRYY_Z: 16,
                        layoutId: "SuivIhmVl",
                        Pa3JM1Mij: "20",
                        style: { height: "100%", width: "100%" },
                        variant: "pWIoDt0ad",
                        width: "100%",
                        ...B(
                          {
                            cAKRVk4EX: { Pa3JM1Mij: "Yes" },
                            qkrGR4ud6: { Pa3JM1Mij: "1g" },
                            QPw5bzlv1: { INmXRYY_Z: 14, variant: "VjB5fl3H9" },
                            tohlABt0Z: {
                              INmXRYY_Z: 14,
                              Pa3JM1Mij: "1g",
                              variant: "VjB5fl3H9",
                            },
                            z4VdY_RYR: {
                              INmXRYY_Z: 14,
                              Pa3JM1Mij: "Yes",
                              variant: "VjB5fl3H9",
                            },
                          },
                          s,
                          h
                        ),
                      }),
                    }),
                  }),
                  e(L, {
                    height: 60,
                    width: `calc(min(max((${
                      a?.width || "100vw"
                    } - 157px) / 3, 1px), 220px) - 24px)`,
                    y: (a?.y || 0) + 0 + 0 + 424,
                    ...B(
                      {
                        QPw5bzlv1: {
                          height: 48,
                          width: `calc(max((${
                            a?.width || "100vw"
                          } - 20px) * 0.3103, 1px) - 24px)`,
                          y: (a?.y || 0) + 0 + 0 + 352,
                        },
                        tohlABt0Z: {
                          height: 48,
                          width: `calc(max((${
                            a?.width || "100vw"
                          } - 20px) * 0.3103, 1px) - 24px)`,
                          y: (a?.y || 0) + 0 + 0 + 352,
                        },
                        z4VdY_RYR: {
                          height: 48,
                          width: `calc(max((${
                            a?.width || "100vw"
                          } - 20px) * 0.3103, 1px) - 24px)`,
                          y: (a?.y || 0) + 0 + 0 + 352,
                        },
                      },
                      s,
                      h
                    ),
                    children: e(l.div, {
                      className: "framer-ih0ntq-container",
                      layoutDependency: p,
                      layoutId: "Z8WbxqLyv-container",
                      children: e(oe, {
                        FC7o1kj8K:
                          "var(--token-27643695-c538-4ca9-85d6-36583d94efa8, rgba(0, 0, 0, 0.1))",
                        gdPJW_icM:
                          "var(--token-f872aefb-d4cc-4be7-a1b4-ca7954ca6bce, rgb(183, 255, 0))",
                        height: "100%",
                        id: "Z8WbxqLyv",
                        INmXRYY_Z: 16,
                        layoutId: "Z8WbxqLyv",
                        Pa3JM1Mij: "Multi-Use",
                        style: { height: "100%", width: "100%" },
                        variant: "pWIoDt0ad",
                        width: "100%",
                        ...B(
                          {
                            qkrGR4ud6: { Pa3JM1Mij: "Glass" },
                            QPw5bzlv1: { INmXRYY_Z: 14, variant: "VjB5fl3H9" },
                            tohlABt0Z: {
                              INmXRYY_Z: 14,
                              Pa3JM1Mij: "Glass",
                              variant: "VjB5fl3H9",
                            },
                            z4VdY_RYR: { INmXRYY_Z: 14, variant: "VjB5fl3H9" },
                          },
                          s,
                          h
                        ),
                      }),
                    }),
                  }),
                ],
              }),
              v(l.div, {
                className: "framer-1o404gs",
                layoutDependency: p,
                layoutId: "haXdFfqZ_",
                children: [
                  v(l.div, {
                    className: "framer-82m1wr",
                    "data-framer-name": "Column 2B",
                    layoutDependency: p,
                    layoutId: "NggXgDWAV",
                    children: [
                      e(l.div, {
                        className: "framer-1qpkrrr",
                        "data-framer-name": "Frame 151",
                        layoutDependency: p,
                        layoutId: "nT4kTQqBk",
                        children: e(b, {
                          __fromCanvasComponent: !0,
                          children: e(f, {
                            children: e(l.p, {
                              style: {
                                "--font-selector":
                                  "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnTnpBd0xDQWlkMlIwYUNJZ01UQXc=",
                                "--framer-font-family":
                                  '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                "--framer-font-size": "22px",
                                "--framer-font-variation-axes":
                                  'var(--extracted-2gg91v, "opsz" 96, "wght" 700, "wdth" 100)',
                                "--framer-line-height": "100%",
                                "--framer-text-alignment": "center",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                              },
                              children: "Big Beverage",
                            }),
                          }),
                          className: "framer-1ozg3sv",
                          "data-framer-name": "Handshake",
                          fonts: ["GF;Bricolage Grotesque-variable-regular"],
                          layoutDependency: p,
                          layoutId: "tGnlKJoBb",
                          style: {
                            "--extracted-2gg91v":
                              '"opsz" 96, "wght" 700, "wdth" 100',
                            "--extracted-r6o4lv":
                              "var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251))",
                            "--framer-paragraph-spacing": "0px",
                          },
                          variants: {
                            QPw5bzlv1: {
                              "--extracted-2gg91v":
                                '"opsz" 96, "wght" 600, "wdth" 100',
                            },
                            tohlABt0Z: {
                              "--extracted-2gg91v":
                                '"opsz" 96, "wght" 600, "wdth" 100',
                            },
                            z4VdY_RYR: {
                              "--extracted-2gg91v":
                                '"opsz" 96, "wght" 600, "wdth" 100',
                            },
                          },
                          verticalAlignment: "bottom",
                          withExternalLayout: !0,
                          ...B(
                            {
                              cAKRVk4EX: {
                                children: e(f, {
                                  children: e(l.p, {
                                    style: {
                                      "--font-selector":
                                        "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnTnpBd0xDQWlkMlIwYUNJZ01UQXc=",
                                      "--framer-font-family":
                                        '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                      "--framer-font-size": "22px",
                                      "--framer-font-variation-axes":
                                        'var(--extracted-2gg91v, "opsz" 96, "wght" 700, "wdth" 100)',
                                      "--framer-line-height": "100%",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                                    },
                                    children: "Cutwater",
                                  }),
                                }),
                              },
                              qkrGR4ud6: {
                                children: e(f, {
                                  children: e(l.p, {
                                    style: {
                                      "--font-selector":
                                        "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnTnpBd0xDQWlkMlIwYUNJZ01UQXc=",
                                      "--framer-font-family":
                                        '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                      "--framer-font-size": "22px",
                                      "--framer-font-variation-axes":
                                        'var(--extracted-2gg91v, "opsz" 96, "wght" 700, "wdth" 100)',
                                      "--framer-line-height": "100%",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                                    },
                                    children: "Simple Syrup",
                                  }),
                                }),
                              },
                              QPw5bzlv1: {
                                children: e(f, {
                                  children: e(l.p, {
                                    style: {
                                      "--font-selector":
                                        "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnTmpBd0xDQWlkMlIwYUNJZ01UQXc=",
                                      "--framer-font-family":
                                        '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                      "--framer-font-size": "20px",
                                      "--framer-font-variation-axes":
                                        'var(--extracted-2gg91v, "opsz" 96, "wght" 600, "wdth" 100)',
                                      "--framer-line-height": "100%",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                                    },
                                    children: "Big Beverage",
                                  }),
                                }),
                              },
                              tohlABt0Z: {
                                children: e(f, {
                                  children: e(l.p, {
                                    style: {
                                      "--font-selector":
                                        "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnTmpBd0xDQWlkMlIwYUNJZ01UQXc=",
                                      "--framer-font-family":
                                        '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                      "--framer-font-size": "20px",
                                      "--framer-font-variation-axes":
                                        'var(--extracted-2gg91v, "opsz" 96, "wght" 600, "wdth" 100)',
                                      "--framer-line-height": "100%",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                                    },
                                    children: "Simple Syrup",
                                  }),
                                }),
                              },
                              z4VdY_RYR: {
                                children: e(f, {
                                  children: e(l.p, {
                                    style: {
                                      "--font-selector":
                                        "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnTmpBd0xDQWlkMlIwYUNJZ01UQXc=",
                                      "--framer-font-family":
                                        '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                      "--framer-font-size": "20px",
                                      "--framer-font-variation-axes":
                                        'var(--extracted-2gg91v, "opsz" 96, "wght" 600, "wdth" 100)',
                                      "--framer-line-height": "100%",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                                    },
                                    children: "Cutwater",
                                  }),
                                }),
                              },
                            },
                            s,
                            h
                          ),
                        }),
                      }),
                      e(L, {
                        height: 60,
                        width: `min(max(max((${
                          a?.width || "100vw"
                        } - 157px) / 1.5, 1px) / 2, 1px), 210px)`,
                        y: (a?.y || 0) + 0 + 0 + 0 + 64,
                        ...B(
                          {
                            QPw5bzlv1: {
                              height: 48,
                              width: `max((${
                                a?.width || "100vw"
                              } - 20px) / 2.9, 1px)`,
                            },
                            tohlABt0Z: {
                              height: 48,
                              width: `max((${
                                a?.width || "100vw"
                              } - 20px) / 2.9, 1px)`,
                            },
                            z4VdY_RYR: {
                              height: 48,
                              width: `max((${
                                a?.width || "100vw"
                              } - 20px) / 2.9, 1px)`,
                            },
                          },
                          s,
                          h
                        ),
                        children: e(l.div, {
                          className: "framer-xr0h47-container",
                          layoutDependency: p,
                          layoutId: "oPjA2Bwlm-container",
                          children: e(oe, {
                            FC7o1kj8K:
                              "var(--token-27643695-c538-4ca9-85d6-36583d94efa8, rgba(0, 0, 0, 0.1))",
                            gdPJW_icM:
                              "var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251))",
                            height: "100%",
                            id: "oPjA2Bwlm",
                            INmXRYY_Z: 16,
                            layoutId: "oPjA2Bwlm",
                            Pa3JM1Mij: "150",
                            style: { height: "100%", width: "100%" },
                            variant: "dBA369Aqu",
                            width: "100%",
                            ...B(
                              {
                                cAKRVk4EX: { Pa3JM1Mij: "300-600" },
                                qkrGR4ud6: { Pa3JM1Mij: "80" },
                                QPw5bzlv1: {
                                  INmXRYY_Z: 14,
                                  variant: "VjB5fl3H9",
                                },
                                tohlABt0Z: {
                                  INmXRYY_Z: 14,
                                  Pa3JM1Mij: "80",
                                  variant: "VjB5fl3H9",
                                },
                                z4VdY_RYR: {
                                  INmXRYY_Z: 14,
                                  Pa3JM1Mij: "300-600",
                                  variant: "VjB5fl3H9",
                                },
                              },
                              s,
                              h
                            ),
                          }),
                        }),
                      }),
                      e(L, {
                        height: 60,
                        width: `min(max(max((${
                          a?.width || "100vw"
                        } - 157px) / 1.5, 1px) / 2, 1px), 210px)`,
                        y: (a?.y || 0) + 0 + 0 + 0 + 124,
                        ...B(
                          {
                            QPw5bzlv1: {
                              height: 48,
                              width: `max((${
                                a?.width || "100vw"
                              } - 20px) / 2.9, 1px)`,
                              y: (a?.y || 0) + 0 + 0 + 0 + 112,
                            },
                            tohlABt0Z: {
                              height: 48,
                              width: `max((${
                                a?.width || "100vw"
                              } - 20px) / 2.9, 1px)`,
                              y: (a?.y || 0) + 0 + 0 + 0 + 112,
                            },
                            z4VdY_RYR: {
                              height: 48,
                              width: `max((${
                                a?.width || "100vw"
                              } - 20px) / 2.9, 1px)`,
                              y: (a?.y || 0) + 0 + 0 + 0 + 112,
                            },
                          },
                          s,
                          h
                        ),
                        children: e(l.div, {
                          className: "framer-1w9wzc9-container",
                          layoutDependency: p,
                          layoutId: "SBMU1qIHj-container",
                          children: e(oe, {
                            FC7o1kj8K: "rgba(0, 0, 0, 0)",
                            gdPJW_icM:
                              "var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251))",
                            height: "100%",
                            id: "SBMU1qIHj",
                            INmXRYY_Z: 16,
                            layoutId: "SBMU1qIHj",
                            Pa3JM1Mij: "$1",
                            style: { height: "100%", width: "100%" },
                            variant: "dBA369Aqu",
                            width: "100%",
                            ...B(
                              {
                                cAKRVk4EX: { Pa3JM1Mij: "Unknown" },
                                qkrGR4ud6: { Pa3JM1Mij: "Authentic" },
                                QPw5bzlv1: {
                                  INmXRYY_Z: 14,
                                  variant: "VjB5fl3H9",
                                },
                                tohlABt0Z: {
                                  INmXRYY_Z: 14,
                                  Pa3JM1Mij: "Authentic",
                                  variant: "VjB5fl3H9",
                                },
                                z4VdY_RYR: {
                                  INmXRYY_Z: 14,
                                  Pa3JM1Mij: "Unknown",
                                  variant: "VjB5fl3H9",
                                },
                              },
                              s,
                              h
                            ),
                          }),
                        }),
                      }),
                      e(L, {
                        height: 60,
                        width: `min(max(max((${
                          a?.width || "100vw"
                        } - 157px) / 1.5, 1px) / 2, 1px), 210px)`,
                        y: (a?.y || 0) + 0 + 0 + 0 + 184,
                        ...B(
                          {
                            QPw5bzlv1: {
                              height: 48,
                              width: `max((${
                                a?.width || "100vw"
                              } - 20px) / 2.9, 1px)`,
                              y: (a?.y || 0) + 0 + 0 + 0 + 160,
                            },
                            tohlABt0Z: {
                              height: 48,
                              width: `max((${
                                a?.width || "100vw"
                              } - 20px) / 2.9, 1px)`,
                              y: (a?.y || 0) + 0 + 0 + 0 + 160,
                            },
                            z4VdY_RYR: {
                              height: 48,
                              width: `max((${
                                a?.width || "100vw"
                              } - 20px) / 2.9, 1px)`,
                              y: (a?.y || 0) + 0 + 0 + 0 + 160,
                            },
                          },
                          s,
                          h
                        ),
                        children: e(l.div, {
                          className: "framer-lsou4y-container",
                          layoutDependency: p,
                          layoutId: "wfPLqMonW-container",
                          children: e(oe, {
                            FC7o1kj8K:
                              "var(--token-27643695-c538-4ca9-85d6-36583d94efa8, rgba(0, 0, 0, 0.1))",
                            gdPJW_icM:
                              "var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251))",
                            height: "100%",
                            id: "wfPLqMonW",
                            INmXRYY_Z: 16,
                            layoutId: "wfPLqMonW",
                            Pa3JM1Mij: "No",
                            style: { height: "100%", width: "100%" },
                            variant: "dBA369Aqu",
                            width: "100%",
                            ...B(
                              {
                                cAKRVk4EX: { Pa3JM1Mij: "20-40g" },
                                qkrGR4ud6: { Pa3JM1Mij: "20g" },
                                QPw5bzlv1: {
                                  INmXRYY_Z: 14,
                                  variant: "VjB5fl3H9",
                                },
                                tohlABt0Z: {
                                  INmXRYY_Z: 14,
                                  Pa3JM1Mij: "20g",
                                  variant: "VjB5fl3H9",
                                },
                                z4VdY_RYR: {
                                  INmXRYY_Z: 14,
                                  Pa3JM1Mij: "20-40g",
                                  variant: "VjB5fl3H9",
                                },
                              },
                              s,
                              h
                            ),
                          }),
                        }),
                      }),
                      e(L, {
                        height: 60,
                        width: `min(max(max((${
                          a?.width || "100vw"
                        } - 157px) / 1.5, 1px) / 2, 1px), 210px)`,
                        y: (a?.y || 0) + 0 + 0 + 0 + 244,
                        ...B(
                          {
                            QPw5bzlv1: {
                              height: 48,
                              width: `max((${
                                a?.width || "100vw"
                              } - 20px) / 2.9, 1px)`,
                              y: (a?.y || 0) + 0 + 0 + 0 + 208,
                            },
                            tohlABt0Z: {
                              height: 48,
                              width: `max((${
                                a?.width || "100vw"
                              } - 20px) / 2.9, 1px)`,
                              y: (a?.y || 0) + 0 + 0 + 0 + 208,
                            },
                            z4VdY_RYR: {
                              height: 48,
                              width: `max((${
                                a?.width || "100vw"
                              } - 20px) / 2.9, 1px)`,
                              y: (a?.y || 0) + 0 + 0 + 0 + 208,
                            },
                          },
                          s,
                          h
                        ),
                        children: e(l.div, {
                          className: "framer-mpa9c-container",
                          layoutDependency: p,
                          layoutId: "GKTMKVatZ-container",
                          children: e(oe, {
                            FC7o1kj8K: "rgba(0, 0, 0, 0)",
                            gdPJW_icM:
                              "var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251))",
                            height: "100%",
                            id: "GKTMKVatZ",
                            INmXRYY_Z: 16,
                            layoutId: "GKTMKVatZ",
                            Pa3JM1Mij: "40g",
                            style: { height: "100%", width: "100%" },
                            variant: "dBA369Aqu",
                            width: "100%",
                            ...B(
                              {
                                cAKRVk4EX: { Pa3JM1Mij: "$2.75" },
                                qkrGR4ud6: { Pa3JM1Mij: "No" },
                                QPw5bzlv1: {
                                  INmXRYY_Z: 14,
                                  variant: "VjB5fl3H9",
                                },
                                tohlABt0Z: {
                                  INmXRYY_Z: 14,
                                  Pa3JM1Mij: "No",
                                  variant: "VjB5fl3H9",
                                },
                                z4VdY_RYR: {
                                  INmXRYY_Z: 14,
                                  Pa3JM1Mij: "$2.75",
                                  variant: "VjB5fl3H9",
                                },
                              },
                              s,
                              h
                            ),
                          }),
                        }),
                      }),
                      e(L, {
                        height: 60,
                        width: `min(max(max((${
                          a?.width || "100vw"
                        } - 157px) / 1.5, 1px) / 2, 1px), 210px)`,
                        y: (a?.y || 0) + 0 + 0 + 0 + 304,
                        ...B(
                          {
                            QPw5bzlv1: {
                              height: 48,
                              width: `max((${
                                a?.width || "100vw"
                              } - 20px) / 2.9, 1px)`,
                              y: (a?.y || 0) + 0 + 0 + 0 + 256,
                            },
                            tohlABt0Z: {
                              height: 48,
                              width: `max((${
                                a?.width || "100vw"
                              } - 20px) / 2.9, 1px)`,
                              y: (a?.y || 0) + 0 + 0 + 0 + 256,
                            },
                            z4VdY_RYR: {
                              height: 48,
                              width: `max((${
                                a?.width || "100vw"
                              } - 20px) / 2.9, 1px)`,
                              y: (a?.y || 0) + 0 + 0 + 0 + 256,
                            },
                          },
                          s,
                          h
                        ),
                        children: e(l.div, {
                          className: "framer-aubq26-container",
                          layoutDependency: p,
                          layoutId: "GhimnOAav-container",
                          children: e(oe, {
                            FC7o1kj8K:
                              "var(--token-27643695-c538-4ca9-85d6-36583d94efa8, rgba(0, 0, 0, 0.1))",
                            gdPJW_icM:
                              "var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251))",
                            height: "100%",
                            id: "GhimnOAav",
                            INmXRYY_Z: 16,
                            layoutId: "GhimnOAav",
                            Pa3JM1Mij: "Chemicals",
                            style: { height: "100%", width: "100%" },
                            variant: "dBA369Aqu",
                            width: "100%",
                            ...B(
                              {
                                cAKRVk4EX: { Pa3JM1Mij: "Premium" },
                                qkrGR4ud6: { Pa3JM1Mij: "Rich" },
                                QPw5bzlv1: {
                                  INmXRYY_Z: 14,
                                  variant: "VjB5fl3H9",
                                },
                                tohlABt0Z: {
                                  INmXRYY_Z: 14,
                                  Pa3JM1Mij: "Rich",
                                  variant: "VjB5fl3H9",
                                },
                                z4VdY_RYR: {
                                  INmXRYY_Z: 14,
                                  Pa3JM1Mij: "Premium",
                                  variant: "VjB5fl3H9",
                                },
                              },
                              s,
                              h
                            ),
                          }),
                        }),
                      }),
                      e(L, {
                        height: 60,
                        width: `min(max(max((${
                          a?.width || "100vw"
                        } - 157px) / 1.5, 1px) / 2, 1px), 210px)`,
                        y: (a?.y || 0) + 0 + 0 + 0 + 364,
                        ...B(
                          {
                            QPw5bzlv1: {
                              height: 48,
                              width: `max((${
                                a?.width || "100vw"
                              } - 20px) / 2.9, 1px)`,
                              y: (a?.y || 0) + 0 + 0 + 0 + 304,
                            },
                            tohlABt0Z: {
                              height: 48,
                              width: `max((${
                                a?.width || "100vw"
                              } - 20px) / 2.9, 1px)`,
                              y: (a?.y || 0) + 0 + 0 + 0 + 304,
                            },
                            z4VdY_RYR: {
                              height: 48,
                              width: `max((${
                                a?.width || "100vw"
                              } - 20px) / 2.9, 1px)`,
                              y: (a?.y || 0) + 0 + 0 + 0 + 304,
                            },
                          },
                          s,
                          h
                        ),
                        children: e(l.div, {
                          className: "framer-1y47cf6-container",
                          layoutDependency: p,
                          layoutId: "HodcapaM1-container",
                          children: e(oe, {
                            FC7o1kj8K: "rgba(0, 0, 0, 0)",
                            gdPJW_icM:
                              "var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251))",
                            height: "100%",
                            id: "HodcapaM1",
                            INmXRYY_Z: 16,
                            layoutId: "HodcapaM1",
                            Pa3JM1Mij: "60-70",
                            style: { height: "100%", width: "100%" },
                            variant: "dBA369Aqu",
                            width: "100%",
                            ...B(
                              {
                                cAKRVk4EX: { Pa3JM1Mij: "No" },
                                qkrGR4ud6: { Pa3JM1Mij: "0g" },
                                QPw5bzlv1: {
                                  INmXRYY_Z: 14,
                                  variant: "VjB5fl3H9",
                                },
                                tohlABt0Z: {
                                  INmXRYY_Z: 14,
                                  Pa3JM1Mij: "0g",
                                  variant: "VjB5fl3H9",
                                },
                                z4VdY_RYR: {
                                  INmXRYY_Z: 14,
                                  Pa3JM1Mij: "No",
                                  variant: "VjB5fl3H9",
                                },
                              },
                              s,
                              h
                            ),
                          }),
                        }),
                      }),
                      e(L, {
                        height: 60,
                        width: `min(max(max((${
                          a?.width || "100vw"
                        } - 157px) / 1.5, 1px) / 2, 1px), 210px)`,
                        y: (a?.y || 0) + 0 + 0 + 0 + 424,
                        ...B(
                          {
                            QPw5bzlv1: {
                              height: 48,
                              width: `max((${
                                a?.width || "100vw"
                              } - 20px) / 2.9, 1px)`,
                              y: (a?.y || 0) + 0 + 0 + 0 + 352,
                            },
                            tohlABt0Z: {
                              height: 48,
                              width: `max((${
                                a?.width || "100vw"
                              } - 20px) / 2.9, 1px)`,
                              y: (a?.y || 0) + 0 + 0 + 0 + 352,
                            },
                            z4VdY_RYR: {
                              height: 48,
                              width: `max((${
                                a?.width || "100vw"
                              } - 20px) / 2.9, 1px)`,
                              y: (a?.y || 0) + 0 + 0 + 0 + 352,
                            },
                          },
                          s,
                          h
                        ),
                        children: e(l.div, {
                          className: "framer-mvqv8s-container",
                          layoutDependency: p,
                          layoutId: "GGW0pW8KT-container",
                          children: e(oe, {
                            FC7o1kj8K:
                              "var(--token-27643695-c538-4ca9-85d6-36583d94efa8, rgba(0, 0, 0, 0.1))",
                            gdPJW_icM:
                              "var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251))",
                            height: "100%",
                            id: "GGW0pW8KT",
                            INmXRYY_Z: 16,
                            layoutId: "GGW0pW8KT",
                            Pa3JM1Mij: "Single-Use",
                            style: { height: "100%", width: "100%" },
                            variant: "dBA369Aqu",
                            width: "100%",
                            ...B(
                              {
                                qkrGR4ud6: { Pa3JM1Mij: "Plastic" },
                                QPw5bzlv1: {
                                  INmXRYY_Z: 14,
                                  variant: "VjB5fl3H9",
                                },
                                tohlABt0Z: {
                                  INmXRYY_Z: 14,
                                  Pa3JM1Mij: "Plastic",
                                  variant: "VjB5fl3H9",
                                },
                                z4VdY_RYR: {
                                  INmXRYY_Z: 14,
                                  variant: "VjB5fl3H9",
                                },
                              },
                              s,
                              h
                            ),
                          }),
                        }),
                      }),
                    ],
                  }),
                  I() &&
                    v(l.div, {
                      className: "framer-js1zv7",
                      "data-framer-name": "Column 3B",
                      layoutDependency: p,
                      layoutId: "QD_VoupTd",
                      children: [
                        e(l.div, {
                          className: "framer-2z4ko8",
                          "data-framer-name": "Frame 151",
                          layoutDependency: p,
                          layoutId: "bUb7OfdCS",
                          children: e(b, {
                            __fromCanvasComponent: !0,
                            children: e(f, {
                              children: e(l.p, {
                                style: {
                                  "--font-selector":
                                    "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnTnpBd0xDQWlkMlIwYUNJZ01UQXc=",
                                  "--framer-font-family":
                                    '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                  "--framer-font-size": "22px",
                                  "--framer-font-variation-axes":
                                    'var(--extracted-2gg91v, "opsz" 96, "wght" 700, "wdth" 100)',
                                  "--framer-line-height": "100%",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                                },
                                children: "Healthy Sodas",
                              }),
                            }),
                            className: "framer-15ruewd",
                            "data-framer-name": "Handshake",
                            fonts: ["GF;Bricolage Grotesque-variable-regular"],
                            layoutDependency: p,
                            layoutId: "jVzSwJ7it",
                            style: {
                              "--extracted-2gg91v":
                                '"opsz" 96, "wght" 700, "wdth" 100',
                              "--extracted-r6o4lv":
                                "var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251))",
                              "--framer-paragraph-spacing": "0px",
                            },
                            verticalAlignment: "bottom",
                            withExternalLayout: !0,
                            ...B(
                              {
                                cAKRVk4EX: {
                                  children: e(f, {
                                    children: e(l.p, {
                                      style: {
                                        "--font-selector":
                                          "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnTnpBd0xDQWlkMlIwYUNJZ01UQXc=",
                                        "--framer-font-family":
                                          '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                        "--framer-font-size": "22px",
                                        "--framer-font-variation-axes":
                                          'var(--extracted-2gg91v, "opsz" 96, "wght" 700, "wdth" 100)',
                                        "--framer-line-height": "100%",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                                      },
                                      children: "White Claw",
                                    }),
                                  }),
                                },
                                qkrGR4ud6: {
                                  children: e(f, {
                                    children: e(l.p, {
                                      style: {
                                        "--font-selector":
                                          "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnTnpBd0xDQWlkMlIwYUNJZ01UQXc=",
                                        "--framer-font-family":
                                          '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                        "--framer-font-size": "22px",
                                        "--framer-font-variation-axes":
                                          'var(--extracted-2gg91v, "opsz" 96, "wght" 700, "wdth" 100)',
                                        "--framer-line-height": "100%",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251)))",
                                      },
                                      children: "Stevia",
                                    }),
                                  }),
                                },
                              },
                              s,
                              h
                            ),
                          }),
                        }),
                        e(L, {
                          height: 60,
                          width: `min(max(max((${
                            a?.width || "100vw"
                          } - 157px) / 1.5, 1px) / 2, 1px), 210px)`,
                          y: (a?.y || 0) + 0 + 0 + 0 + 64,
                          children: e(l.div, {
                            className: "framer-8zeilo-container",
                            layoutDependency: p,
                            layoutId: "fuGJdlg6Y-container",
                            children: e(oe, {
                              FC7o1kj8K:
                                "var(--token-27643695-c538-4ca9-85d6-36583d94efa8, rgba(0, 0, 0, 0.1))",
                              gdPJW_icM:
                                "var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251))",
                              height: "100%",
                              id: "fuGJdlg6Y",
                              INmXRYY_Z: 16,
                              layoutId: "fuGJdlg6Y",
                              Pa3JM1Mij: "25-55",
                              style: { height: "100%", width: "100%" },
                              variant: "THKB2Mynx",
                              width: "100%",
                              ...B(
                                {
                                  cAKRVk4EX: { Pa3JM1Mij: "100" },
                                  qkrGR4ud6: { Pa3JM1Mij: "0" },
                                },
                                s,
                                h
                              ),
                            }),
                          }),
                        }),
                        e(L, {
                          height: 60,
                          width: `min(max(max((${
                            a?.width || "100vw"
                          } - 157px) / 1.5, 1px) / 2, 1px), 210px)`,
                          y: (a?.y || 0) + 0 + 0 + 0 + 124,
                          children: e(l.div, {
                            className: "framer-199511c-container",
                            layoutDependency: p,
                            layoutId: "pzYr1za97-container",
                            children: e(oe, {
                              FC7o1kj8K: "rgba(0, 0, 0, 0)",
                              gdPJW_icM:
                                "var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251))",
                              height: "100%",
                              id: "pzYr1za97",
                              INmXRYY_Z: 16,
                              layoutId: "pzYr1za97",
                              Pa3JM1Mij: "$3",
                              style: { height: "100%", width: "100%" },
                              variant: "THKB2Mynx",
                              width: "100%",
                              ...B(
                                {
                                  cAKRVk4EX: { Pa3JM1Mij: "Concentrate" },
                                  qkrGR4ud6: { Pa3JM1Mij: "Astringent" },
                                },
                                s,
                                h
                              ),
                            }),
                          }),
                        }),
                        e(L, {
                          height: 60,
                          width: `min(max(max((${
                            a?.width || "100vw"
                          } - 157px) / 1.5, 1px) / 2, 1px), 210px)`,
                          y: (a?.y || 0) + 0 + 0 + 0 + 184,
                          children: e(l.div, {
                            className: "framer-438d9e-container",
                            layoutDependency: p,
                            layoutId: "xCrEVoiRM-container",
                            children: e(oe, {
                              FC7o1kj8K:
                                "var(--token-27643695-c538-4ca9-85d6-36583d94efa8, rgba(0, 0, 0, 0.1))",
                              gdPJW_icM:
                                "var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251))",
                              height: "100%",
                              id: "xCrEVoiRM",
                              INmXRYY_Z: 16,
                              layoutId: "xCrEVoiRM",
                              Pa3JM1Mij: "Yes",
                              style: { height: "100%", width: "100%" },
                              variant: "THKB2Mynx",
                              width: "100%",
                              ...B(
                                {
                                  cAKRVk4EX: { Pa3JM1Mij: "2g" },
                                  qkrGR4ud6: { Pa3JM1Mij: "0g" },
                                },
                                s,
                                h
                              ),
                            }),
                          }),
                        }),
                        e(L, {
                          height: 60,
                          width: `min(max(max((${
                            a?.width || "100vw"
                          } - 157px) / 1.5, 1px) / 2, 1px), 210px)`,
                          y: (a?.y || 0) + 0 + 0 + 0 + 244,
                          children: e(l.div, {
                            className: "framer-1879nyc-container",
                            layoutDependency: p,
                            layoutId: "qggUV5F44-container",
                            children: e(oe, {
                              FC7o1kj8K: "rgba(0, 0, 0, 0)",
                              gdPJW_icM:
                                "var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251))",
                              height: "100%",
                              id: "qggUV5F44",
                              INmXRYY_Z: 16,
                              layoutId: "qggUV5F44",
                              Pa3JM1Mij: "2-12g",
                              style: { height: "100%", width: "100%" },
                              variant: "THKB2Mynx",
                              width: "100%",
                              ...B(
                                {
                                  cAKRVk4EX: { Pa3JM1Mij: "$1.58" },
                                  qkrGR4ud6: { Pa3JM1Mij: "No" },
                                },
                                s,
                                h
                              ),
                            }),
                          }),
                        }),
                        e(L, {
                          height: 60,
                          width: `min(max(max((${
                            a?.width || "100vw"
                          } - 157px) / 1.5, 1px) / 2, 1px), 210px)`,
                          y: (a?.y || 0) + 0 + 0 + 0 + 304,
                          children: e(l.div, {
                            className: "framer-10zqeub-container",
                            layoutDependency: p,
                            layoutId: "z6Uv_2XzG-container",
                            children: e(oe, {
                              FC7o1kj8K:
                                "var(--token-27643695-c538-4ca9-85d6-36583d94efa8, rgba(0, 0, 0, 0.1))",
                              gdPJW_icM:
                                "var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251))",
                              height: "100%",
                              id: "z6Uv_2XzG",
                              INmXRYY_Z: 16,
                              layoutId: "z6Uv_2XzG",
                              Pa3JM1Mij: "Natural Acids",
                              style: { height: "100%", width: "100%" },
                              variant: "THKB2Mynx",
                              width: "100%",
                              ...B(
                                {
                                  cAKRVk4EX: { Pa3JM1Mij: "Malt" },
                                  qkrGR4ud6: { Pa3JM1Mij: "Flat" },
                                },
                                s,
                                h
                              ),
                            }),
                          }),
                        }),
                        e(L, {
                          height: 60,
                          width: `min(max(max((${
                            a?.width || "100vw"
                          } - 157px) / 1.5, 1px) / 2, 1px), 210px)`,
                          y: (a?.y || 0) + 0 + 0 + 0 + 364,
                          children: e(l.div, {
                            className: "framer-cau5x7-container",
                            layoutDependency: p,
                            layoutId: "RSBm7n0GF-container",
                            children: e(oe, {
                              FC7o1kj8K: "rgba(0, 0, 0, 0)",
                              gdPJW_icM:
                                "var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251))",
                              height: "100%",
                              id: "RSBm7n0GF",
                              INmXRYY_Z: 16,
                              layoutId: "RSBm7n0GF",
                              Pa3JM1Mij: "20-40",
                              style: { height: "100%", width: "100%" },
                              variant: "THKB2Mynx",
                              width: "100%",
                              ...B(
                                {
                                  cAKRVk4EX: { Pa3JM1Mij: "No" },
                                  qkrGR4ud6: { Pa3JM1Mij: "0g" },
                                },
                                s,
                                h
                              ),
                            }),
                          }),
                        }),
                        e(L, {
                          height: 60,
                          width: `min(max(max((${
                            a?.width || "100vw"
                          } - 157px) / 1.5, 1px) / 2, 1px), 210px)`,
                          y: (a?.y || 0) + 0 + 0 + 0 + 424,
                          children: e(l.div, {
                            className: "framer-18c73xd-container",
                            layoutDependency: p,
                            layoutId: "CtOzaE39i-container",
                            children: e(oe, {
                              FC7o1kj8K:
                                "var(--token-27643695-c538-4ca9-85d6-36583d94efa8, rgba(0, 0, 0, 0.1))",
                              gdPJW_icM:
                                "var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251))",
                              height: "100%",
                              id: "CtOzaE39i",
                              INmXRYY_Z: 16,
                              layoutId: "CtOzaE39i",
                              Pa3JM1Mij: "Single-Use",
                              style: { height: "100%", width: "100%" },
                              variant: "THKB2Mynx",
                              width: "100%",
                              ...B({ qkrGR4ud6: { Pa3JM1Mij: "Glass" } }, s, h),
                            }),
                          }),
                        }),
                      ],
                    }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  }),
  L5 = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-bTR4r.framer-59r6u3, .framer-bTR4r .framer-59r6u3 { display: block; }",
    ".framer-bTR4r.framer-9du9kp { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 800px; }",
    ".framer-bTR4r .framer-1bgzcwi { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 64px 20px 0px 0px; position: relative; width: 137px; }",
    ".framer-bTR4r .framer-1opz0h5 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-bTR4r .framer-atqzit, .framer-bTR4r .framer-u4rzgh, .framer-bTR4r .framer-319xlo, .framer-bTR4r .framer-kr0iux, .framer-bTR4r .framer-1g2gvil, .framer-bTR4r .framer-eocsa9, .framer-bTR4r .framer-6284t9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 60px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-bTR4r .framer-i8mvzi, .framer-bTR4r .framer-1e8upme, .framer-bTR4r .framer-cfr9gy, .framer-bTR4r .framer-9xkwb0, .framer-bTR4r .framer-mmix2c, .framer-bTR4r .framer-1gaca9r, .framer-bTR4r .framer-xhp5bg { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-bTR4r .framer-yf30km { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 220px; overflow: hidden; padding: 0px 12px 12px 12px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-bTR4r .framer-15n78gz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 64px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-bTR4r .framer-y4c1c3, .framer-bTR4r .framer-1ozg3sv, .framer-bTR4r .framer-15ruewd { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }",
    ".framer-bTR4r .framer-qfe54m-container, .framer-bTR4r .framer-axl6pf-container, .framer-bTR4r .framer-9pmai-container, .framer-bTR4r .framer-hsi7kl-container, .framer-bTR4r .framer-3ix7oj-container, .framer-bTR4r .framer-km3t0j-container, .framer-bTR4r .framer-ih0ntq-container, .framer-bTR4r .framer-xr0h47-container, .framer-bTR4r .framer-1w9wzc9-container, .framer-bTR4r .framer-lsou4y-container, .framer-bTR4r .framer-mpa9c-container, .framer-bTR4r .framer-aubq26-container, .framer-bTR4r .framer-1y47cf6-container, .framer-bTR4r .framer-mvqv8s-container, .framer-bTR4r .framer-8zeilo-container, .framer-bTR4r .framer-199511c-container, .framer-bTR4r .framer-438d9e-container, .framer-bTR4r .framer-1879nyc-container, .framer-bTR4r .framer-10zqeub-container, .framer-bTR4r .framer-cau5x7-container, .framer-bTR4r .framer-18c73xd-container { flex: none; height: 60px; position: relative; width: 100%; }",
    ".framer-bTR4r .framer-1o404gs { align-content: center; align-items: center; display: flex; flex: 2 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    ".framer-bTR4r .framer-82m1wr, .framer-bTR4r .framer-js1zv7 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 210px; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    ".framer-bTR4r .framer-1qpkrrr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 64px; justify-content: center; overflow: visible; padding: 0px 0px 2px 8px; position: relative; width: 100%; }",
    ".framer-bTR4r .framer-2z4ko8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 64px; justify-content: center; overflow: visible; padding: 0px 8px 2px 0px; position: relative; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-bTR4r.framer-9du9kp, .framer-bTR4r .framer-1bgzcwi, .framer-bTR4r .framer-1opz0h5, .framer-bTR4r .framer-atqzit, .framer-bTR4r .framer-u4rzgh, .framer-bTR4r .framer-319xlo, .framer-bTR4r .framer-kr0iux, .framer-bTR4r .framer-1g2gvil, .framer-bTR4r .framer-eocsa9, .framer-bTR4r .framer-6284t9, .framer-bTR4r .framer-yf30km, .framer-bTR4r .framer-15n78gz, .framer-bTR4r .framer-1o404gs, .framer-bTR4r .framer-82m1wr, .framer-bTR4r .framer-1qpkrrr, .framer-bTR4r .framer-js1zv7, .framer-bTR4r .framer-2z4ko8 { gap: 0px; } .framer-bTR4r.framer-9du9kp > *, .framer-bTR4r .framer-atqzit > *, .framer-bTR4r .framer-u4rzgh > *, .framer-bTR4r .framer-319xlo > *, .framer-bTR4r .framer-kr0iux > *, .framer-bTR4r .framer-1g2gvil > *, .framer-bTR4r .framer-eocsa9 > *, .framer-bTR4r .framer-6284t9 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-bTR4r.framer-9du9kp > :first-child, .framer-bTR4r .framer-atqzit > :first-child, .framer-bTR4r .framer-u4rzgh > :first-child, .framer-bTR4r .framer-319xlo > :first-child, .framer-bTR4r .framer-kr0iux > :first-child, .framer-bTR4r .framer-1g2gvil > :first-child, .framer-bTR4r .framer-eocsa9 > :first-child, .framer-bTR4r .framer-6284t9 > :first-child, .framer-bTR4r .framer-1o404gs > :first-child { margin-left: 0px; } .framer-bTR4r.framer-9du9kp > :last-child, .framer-bTR4r .framer-atqzit > :last-child, .framer-bTR4r .framer-u4rzgh > :last-child, .framer-bTR4r .framer-319xlo > :last-child, .framer-bTR4r .framer-kr0iux > :last-child, .framer-bTR4r .framer-1g2gvil > :last-child, .framer-bTR4r .framer-eocsa9 > :last-child, .framer-bTR4r .framer-6284t9 > :last-child, .framer-bTR4r .framer-1o404gs > :last-child { margin-right: 0px; } .framer-bTR4r .framer-1bgzcwi > *, .framer-bTR4r .framer-1opz0h5 > *, .framer-bTR4r .framer-yf30km > *, .framer-bTR4r .framer-82m1wr > *, .framer-bTR4r .framer-js1zv7 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-bTR4r .framer-1bgzcwi > :first-child, .framer-bTR4r .framer-1opz0h5 > :first-child, .framer-bTR4r .framer-yf30km > :first-child, .framer-bTR4r .framer-15n78gz > :first-child, .framer-bTR4r .framer-82m1wr > :first-child, .framer-bTR4r .framer-1qpkrrr > :first-child, .framer-bTR4r .framer-js1zv7 > :first-child, .framer-bTR4r .framer-2z4ko8 > :first-child { margin-top: 0px; } .framer-bTR4r .framer-1bgzcwi > :last-child, .framer-bTR4r .framer-1opz0h5 > :last-child, .framer-bTR4r .framer-yf30km > :last-child, .framer-bTR4r .framer-15n78gz > :last-child, .framer-bTR4r .framer-82m1wr > :last-child, .framer-bTR4r .framer-1qpkrrr > :last-child, .framer-bTR4r .framer-js1zv7 > :last-child, .framer-bTR4r .framer-2z4ko8 > :last-child { margin-bottom: 0px; } .framer-bTR4r .framer-15n78gz > *, .framer-bTR4r .framer-1qpkrrr > *, .framer-bTR4r .framer-2z4ko8 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-bTR4r .framer-1o404gs > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } }",
    ".framer-bTR4r.framer-v-172dcke .framer-1opz0h5, .framer-bTR4r.framer-v-172dcke .framer-15n78gz, .framer-bTR4r.framer-v-172dcke .framer-1qpkrrr, .framer-bTR4r.framer-v-nud874 .framer-1opz0h5, .framer-bTR4r.framer-v-nud874 .framer-15n78gz, .framer-bTR4r.framer-v-nud874 .framer-1qpkrrr, .framer-bTR4r.framer-v-t7ql7q .framer-15n78gz, .framer-bTR4r.framer-v-1m8t7ml .framer-15n78gz { order: 0; }",
    ".framer-bTR4r.framer-v-172dcke .framer-qfe54m-container, .framer-bTR4r.framer-v-172dcke .framer-xr0h47-container, .framer-bTR4r.framer-v-nud874 .framer-qfe54m-container, .framer-bTR4r.framer-v-nud874 .framer-xr0h47-container { order: 1; }",
    ".framer-bTR4r.framer-v-172dcke .framer-axl6pf-container, .framer-bTR4r.framer-v-172dcke .framer-1w9wzc9-container, .framer-bTR4r.framer-v-nud874 .framer-axl6pf-container, .framer-bTR4r.framer-v-nud874 .framer-1w9wzc9-container { order: 2; }",
    ".framer-bTR4r.framer-v-172dcke .framer-9pmai-container, .framer-bTR4r.framer-v-172dcke .framer-lsou4y-container, .framer-bTR4r.framer-v-nud874 .framer-9pmai-container, .framer-bTR4r.framer-v-nud874 .framer-lsou4y-container { order: 3; }",
    ".framer-bTR4r.framer-v-172dcke .framer-hsi7kl-container, .framer-bTR4r.framer-v-172dcke .framer-mpa9c-container, .framer-bTR4r.framer-v-nud874 .framer-hsi7kl-container, .framer-bTR4r.framer-v-nud874 .framer-mpa9c-container { order: 4; }",
    ".framer-bTR4r.framer-v-172dcke .framer-3ix7oj-container, .framer-bTR4r.framer-v-172dcke .framer-aubq26-container, .framer-bTR4r.framer-v-nud874 .framer-3ix7oj-container, .framer-bTR4r.framer-v-nud874 .framer-aubq26-container { order: 5; }",
    ".framer-bTR4r.framer-v-172dcke .framer-km3t0j-container, .framer-bTR4r.framer-v-172dcke .framer-1y47cf6-container, .framer-bTR4r.framer-v-nud874 .framer-km3t0j-container, .framer-bTR4r.framer-v-nud874 .framer-1y47cf6-container { order: 6; }",
    ".framer-bTR4r.framer-v-172dcke .framer-ih0ntq-container, .framer-bTR4r.framer-v-172dcke .framer-mvqv8s-container, .framer-bTR4r.framer-v-nud874 .framer-ih0ntq-container, .framer-bTR4r.framer-v-nud874 .framer-mvqv8s-container { order: 7; }",
    ".framer-bTR4r.framer-v-1dcxtoz.framer-9du9kp, .framer-bTR4r.framer-v-t7ql7q.framer-9du9kp, .framer-bTR4r.framer-v-1m8t7ml.framer-9du9kp { overflow: visible; width: 500px; }",
    ".framer-bTR4r.framer-v-1dcxtoz .framer-1bgzcwi, .framer-bTR4r.framer-v-t7ql7q .framer-1bgzcwi, .framer-bTR4r.framer-v-1m8t7ml .framer-1bgzcwi { align-content: center; align-items: center; flex: 1 0 0px; max-width: 100px; padding: 64px 0px 0px 0px; width: 1px; }",
    ".framer-bTR4r.framer-v-1dcxtoz .framer-1opz0h5 { width: min-content; }",
    ".framer-bTR4r.framer-v-1dcxtoz .framer-atqzit, .framer-bTR4r.framer-v-1dcxtoz .framer-u4rzgh, .framer-bTR4r.framer-v-1dcxtoz .framer-319xlo, .framer-bTR4r.framer-v-1dcxtoz .framer-kr0iux, .framer-bTR4r.framer-v-1dcxtoz .framer-1g2gvil, .framer-bTR4r.framer-v-1dcxtoz .framer-eocsa9, .framer-bTR4r.framer-v-1dcxtoz .framer-6284t9, .framer-bTR4r.framer-v-1dcxtoz .framer-qfe54m-container, .framer-bTR4r.framer-v-1dcxtoz .framer-axl6pf-container, .framer-bTR4r.framer-v-1dcxtoz .framer-9pmai-container, .framer-bTR4r.framer-v-1dcxtoz .framer-hsi7kl-container, .framer-bTR4r.framer-v-1dcxtoz .framer-3ix7oj-container, .framer-bTR4r.framer-v-1dcxtoz .framer-km3t0j-container, .framer-bTR4r.framer-v-1dcxtoz .framer-ih0ntq-container, .framer-bTR4r.framer-v-1dcxtoz .framer-xr0h47-container, .framer-bTR4r.framer-v-1dcxtoz .framer-1w9wzc9-container, .framer-bTR4r.framer-v-1dcxtoz .framer-lsou4y-container, .framer-bTR4r.framer-v-1dcxtoz .framer-mpa9c-container, .framer-bTR4r.framer-v-1dcxtoz .framer-aubq26-container, .framer-bTR4r.framer-v-1dcxtoz .framer-1y47cf6-container, .framer-bTR4r.framer-v-1dcxtoz .framer-mvqv8s-container, .framer-bTR4r.framer-v-t7ql7q .framer-atqzit, .framer-bTR4r.framer-v-t7ql7q .framer-u4rzgh, .framer-bTR4r.framer-v-t7ql7q .framer-319xlo, .framer-bTR4r.framer-v-t7ql7q .framer-kr0iux, .framer-bTR4r.framer-v-t7ql7q .framer-1g2gvil, .framer-bTR4r.framer-v-t7ql7q .framer-eocsa9, .framer-bTR4r.framer-v-t7ql7q .framer-6284t9, .framer-bTR4r.framer-v-1m8t7ml .framer-atqzit, .framer-bTR4r.framer-v-1m8t7ml .framer-u4rzgh, .framer-bTR4r.framer-v-1m8t7ml .framer-319xlo, .framer-bTR4r.framer-v-1m8t7ml .framer-kr0iux, .framer-bTR4r.framer-v-1m8t7ml .framer-1g2gvil, .framer-bTR4r.framer-v-1m8t7ml .framer-eocsa9, .framer-bTR4r.framer-v-1m8t7ml .framer-6284t9 { height: 48px; }",
    ".framer-bTR4r.framer-v-1dcxtoz .framer-yf30km, .framer-bTR4r.framer-v-t7ql7q .framer-yf30km, .framer-bTR4r.framer-v-1m8t7ml .framer-yf30km { flex: 0.9 0 0px; max-width: unset; }",
    ".framer-bTR4r.framer-v-1dcxtoz .framer-1o404gs, .framer-bTR4r.framer-v-t7ql7q .framer-1o404gs, .framer-bTR4r.framer-v-1m8t7ml .framer-1o404gs { flex: 1 0 0px; overflow: visible; }",
    ".framer-bTR4r.framer-v-1dcxtoz .framer-82m1wr, .framer-bTR4r.framer-v-t7ql7q .framer-82m1wr, .framer-bTR4r.framer-v-1m8t7ml .framer-82m1wr { max-width: unset; overflow: visible; }",
    ".framer-bTR4r.framer-v-1dcxtoz .framer-1qpkrrr { padding: 0px 0px 2px 0px; }",
    ".framer-bTR4r.framer-v-t7ql7q .framer-1opz0h5, .framer-bTR4r.framer-v-1m8t7ml .framer-1opz0h5 { order: 0; width: min-content; }",
    ".framer-bTR4r.framer-v-t7ql7q .framer-qfe54m-container, .framer-bTR4r.framer-v-t7ql7q .framer-xr0h47-container, .framer-bTR4r.framer-v-1m8t7ml .framer-qfe54m-container, .framer-bTR4r.framer-v-1m8t7ml .framer-xr0h47-container { height: 48px; order: 1; }",
    ".framer-bTR4r.framer-v-t7ql7q .framer-axl6pf-container, .framer-bTR4r.framer-v-t7ql7q .framer-1w9wzc9-container, .framer-bTR4r.framer-v-1m8t7ml .framer-axl6pf-container, .framer-bTR4r.framer-v-1m8t7ml .framer-1w9wzc9-container { height: 48px; order: 2; }",
    ".framer-bTR4r.framer-v-t7ql7q .framer-9pmai-container, .framer-bTR4r.framer-v-t7ql7q .framer-lsou4y-container, .framer-bTR4r.framer-v-1m8t7ml .framer-9pmai-container, .framer-bTR4r.framer-v-1m8t7ml .framer-lsou4y-container { height: 48px; order: 3; }",
    ".framer-bTR4r.framer-v-t7ql7q .framer-hsi7kl-container, .framer-bTR4r.framer-v-t7ql7q .framer-mpa9c-container, .framer-bTR4r.framer-v-1m8t7ml .framer-hsi7kl-container, .framer-bTR4r.framer-v-1m8t7ml .framer-mpa9c-container { height: 48px; order: 4; }",
    ".framer-bTR4r.framer-v-t7ql7q .framer-3ix7oj-container, .framer-bTR4r.framer-v-t7ql7q .framer-aubq26-container, .framer-bTR4r.framer-v-1m8t7ml .framer-3ix7oj-container, .framer-bTR4r.framer-v-1m8t7ml .framer-aubq26-container { height: 48px; order: 5; }",
    ".framer-bTR4r.framer-v-t7ql7q .framer-km3t0j-container, .framer-bTR4r.framer-v-t7ql7q .framer-1y47cf6-container, .framer-bTR4r.framer-v-1m8t7ml .framer-km3t0j-container, .framer-bTR4r.framer-v-1m8t7ml .framer-1y47cf6-container { height: 48px; order: 6; }",
    ".framer-bTR4r.framer-v-t7ql7q .framer-ih0ntq-container, .framer-bTR4r.framer-v-t7ql7q .framer-mvqv8s-container, .framer-bTR4r.framer-v-1m8t7ml .framer-ih0ntq-container, .framer-bTR4r.framer-v-1m8t7ml .framer-mvqv8s-container { height: 48px; order: 7; }",
    ".framer-bTR4r.framer-v-t7ql7q .framer-1qpkrrr, .framer-bTR4r.framer-v-1m8t7ml .framer-1qpkrrr { order: 0; padding: 0px 0px 2px 0px; }",
    '.framer-bTR4r[data-border="true"]::after, .framer-bTR4r [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  hr = H(w5, L5, "framer-bTR4r"),
  ur = hr;
hr.displayName = "Comparison Table";
hr.defaultProps = { height: 496, width: 800 };
Z(hr, {
  variant: {
    options: [
      "E9aO7VCH3",
      "qkrGR4ud6",
      "cAKRVk4EX",
      "QPw5bzlv1",
      "tohlABt0Z",
      "z4VdY_RYR",
    ],
    optionTitles: [
      "Soft Drinks",
      "Coffee",
      "Cocktails",
      "Soft Drinks \xB7 Mobile",
      "Coffee \xB7 Mobile",
      "Cocktails \xB7 Mobile",
    ],
    title: "Variant",
    type: y.Enum,
  },
});
var k5 = [
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
G(
  hr,
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
        {
          family: "Bricolage Grotesque",
          source: "google",
          style: "normal",
          url: "fonts/s/bricolagegrotesque/v7/3y996as8bTXq_nANBjzKo3IeZx8z6up5H--HGN6NLPo.ttf",
          variationAxes: k5,
          weight: "400",
        },
      ],
    },
    ...d5,
  ],
  { supportsExplicitInterCodegen: !0 }
);
var R5 = Q(ur),
  F5 = [
    "PCL9g8s_t",
    "wkBQxVM6R",
    "C7OAh5QTW",
    "jUBJkHqz9",
    "ZtVnmXquu",
    "Znb0W3Efa",
  ],
  I5 = "framer-Yb99M",
  S5 = {
    C7OAh5QTW: "framer-v-1v3qxmm",
    jUBJkHqz9: "framer-v-pqybz9",
    PCL9g8s_t: "framer-v-18i1mhj",
    wkBQxVM6R: "framer-v-1jyjb7v",
    Znb0W3Efa: "framer-v-1y32yi6",
    ZtVnmXquu: "framer-v-73zlu3",
  };
function ke(r, ...t) {
  let n = {};
  return t?.forEach((i) => i && Object.assign(n, r[i])), n;
}
var V5 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  gr = (r, t) => `translate(-50%, -50%) ${t}`,
  Oe = (r, t) => `translateY(-50%) ${t}`,
  T5 = ({ value: r, children: t }) => {
    let n = ee(J),
      i = r ?? n.transition,
      o = Y(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
    return e(J.Provider, { value: o, children: t });
  },
  M5 = l.create(f),
  U5 = {
    "Cocktails \xB7 Mobile": "Znb0W3Efa",
    "Coffee \xB7 Mobile": "ZtVnmXquu",
    "Soft Drinks \xB7 Mobile": "jUBJkHqz9",
    "Soft Drinks": "PCL9g8s_t",
    Cocktails: "C7OAh5QTW",
    Coffee: "wkBQxVM6R",
  },
  X5 = ({ height: r, id: t, width: n, ...i }) => {
    var o, c;
    return {
      ...i,
      variant:
        (c = (o = U5[i.variant]) !== null && o !== void 0 ? o : i.variant) !==
          null && c !== void 0
          ? c
          : "PCL9g8s_t",
    };
  },
  B5 = (r, t) =>
    r.layoutDependency ? t.join("-") + r.layoutDependency : t.join("-"),
  J5 = N(function (r, t) {
    let { activeLocale: n, setLocale: i } = q(),
      { style: o, className: c, layoutId: d, variant: g, ...u } = X5(r),
      {
        baseVariant: s,
        classNames: C,
        clearLoadingGesture: w,
        gestureHandlers: x,
        gestureVariant: h,
        isLoading: k,
        setGestureState: X,
        setVariant: T,
        variants: F,
      } = te({
        cycleOrder: F5,
        defaultVariant: "PCL9g8s_t",
        variant: g,
        variantClassNames: S5,
      }),
      p = B5(r, F),
      S = U(null),
      I = D(),
      R = [],
      m = re();
    return e(j, {
      id: d ?? I,
      children: e(M5, {
        animate: F,
        initial: !1,
        children: e(T5, {
          value: V5,
          children: v(l.div, {
            ...u,
            ...x,
            className: E(I5, ...R, "framer-18i1mhj", c, C),
            "data-framer-name": "Soft Drinks",
            layoutDependency: p,
            layoutId: "PCL9g8s_t",
            ref: t ?? S,
            style: { ...o },
            ...ke(
              {
                C7OAh5QTW: { "data-framer-name": "Cocktails" },
                jUBJkHqz9: { "data-framer-name": "Soft Drinks \xB7 Mobile" },
                wkBQxVM6R: { "data-framer-name": "Coffee" },
                Znb0W3Efa: { "data-framer-name": "Cocktails \xB7 Mobile" },
                ZtVnmXquu: { "data-framer-name": "Coffee \xB7 Mobile" },
              },
              s,
              h
            ),
            children: [
              e(L, {
                height: 496,
                width: m?.width || "100vw",
                y:
                  (m?.y || 0) + ((m?.height || 496) * 0.5000000000000002 - 248),
                ...ke(
                  {
                    jUBJkHqz9: {
                      y:
                        (m?.y || 0) +
                        ((m?.height || 412) * 0.5000000000000002 - 248),
                    },
                    Znb0W3Efa: {
                      y:
                        (m?.y || 0) +
                        ((m?.height || 412) * 0.5000000000000002 - 248),
                    },
                    ZtVnmXquu: {
                      y:
                        (m?.y || 0) +
                        ((m?.height || 412) * 0.5000000000000002 - 248),
                    },
                  },
                  s,
                  h
                ),
                children: e(l.div, {
                  className: "framer-1qdejg-container",
                  layoutDependency: p,
                  layoutId: "E18BdFpSd-container",
                  style: {
                    filter: "blur(0px)",
                    opacity: 1,
                    WebkitFilter: "blur(0px)",
                  },
                  transformTemplate: gr,
                  variants: {
                    C7OAh5QTW: {
                      filter: "blur(4px)",
                      opacity: 0,
                      WebkitFilter: "blur(4px)",
                    },
                    wkBQxVM6R: {
                      filter: "blur(4px)",
                      opacity: 0,
                      WebkitFilter: "blur(4px)",
                    },
                    Znb0W3Efa: {
                      filter: "blur(4px)",
                      opacity: 0,
                      WebkitFilter: "blur(4px)",
                    },
                    ZtVnmXquu: {
                      filter: "blur(4px)",
                      opacity: 0,
                      WebkitFilter: "blur(4px)",
                    },
                  },
                  ...ke(
                    {
                      C7OAh5QTW: { transformTemplate: Oe },
                      wkBQxVM6R: { transformTemplate: Oe },
                      Znb0W3Efa: { transformTemplate: Oe },
                      ZtVnmXquu: { transformTemplate: Oe },
                    },
                    s,
                    h
                  ),
                  children: e(ur, {
                    height: "100%",
                    id: "E18BdFpSd",
                    layoutId: "E18BdFpSd",
                    style: { width: "100%" },
                    variant: "E9aO7VCH3",
                    width: "100%",
                    ...ke(
                      {
                        jUBJkHqz9: { variant: "QPw5bzlv1" },
                        Znb0W3Efa: { variant: "QPw5bzlv1" },
                        ZtVnmXquu: { variant: "QPw5bzlv1" },
                      },
                      s,
                      h
                    ),
                  }),
                }),
              }),
              e(L, {
                height: 496,
                width: m?.width || "100vw",
                y:
                  (m?.y || 0) + ((m?.height || 496) * 0.5000000000000002 - 248),
                ...ke(
                  {
                    jUBJkHqz9: {
                      y:
                        (m?.y || 0) +
                        ((m?.height || 412) * 0.5000000000000002 - 248),
                    },
                    Znb0W3Efa: {
                      y:
                        (m?.y || 0) +
                        ((m?.height || 412) * 0.5000000000000002 - 248),
                    },
                    ZtVnmXquu: {
                      y:
                        (m?.y || 0) +
                        ((m?.height || 412) * 0.5000000000000002 - 248),
                    },
                  },
                  s,
                  h
                ),
                children: e(l.div, {
                  className: "framer-j2wqig-container",
                  layoutDependency: p,
                  layoutId: "jCwvq3brO-container",
                  style: {
                    filter: "blur(4px)",
                    opacity: 0,
                    WebkitFilter: "blur(4px)",
                  },
                  transformTemplate: Oe,
                  variants: {
                    wkBQxVM6R: {
                      filter: "blur(0px)",
                      opacity: 1,
                      WebkitFilter: "blur(0px)",
                    },
                    ZtVnmXquu: {
                      filter: "blur(0px)",
                      opacity: 1,
                      WebkitFilter: "blur(0px)",
                    },
                  },
                  ...ke(
                    {
                      wkBQxVM6R: { transformTemplate: gr },
                      ZtVnmXquu: { transformTemplate: gr },
                    },
                    s,
                    h
                  ),
                  children: e(ur, {
                    height: "100%",
                    id: "jCwvq3brO",
                    layoutId: "jCwvq3brO",
                    style: { width: "100%" },
                    variant: "qkrGR4ud6",
                    width: "100%",
                    ...ke(
                      {
                        jUBJkHqz9: { variant: "tohlABt0Z" },
                        Znb0W3Efa: { variant: "tohlABt0Z" },
                        ZtVnmXquu: { variant: "tohlABt0Z" },
                      },
                      s,
                      h
                    ),
                  }),
                }),
              }),
              e(L, {
                height: 496,
                width: m?.width || "100vw",
                y:
                  (m?.y || 0) + ((m?.height || 496) * 0.5000000000000002 - 248),
                ...ke(
                  {
                    jUBJkHqz9: {
                      y:
                        (m?.y || 0) +
                        ((m?.height || 412) * 0.5000000000000002 - 248),
                    },
                    Znb0W3Efa: {
                      y:
                        (m?.y || 0) +
                        ((m?.height || 412) * 0.5000000000000002 - 248),
                    },
                    ZtVnmXquu: {
                      y:
                        (m?.y || 0) +
                        ((m?.height || 412) * 0.5000000000000002 - 248),
                    },
                  },
                  s,
                  h
                ),
                children: e(l.div, {
                  className: "framer-mui0ah-container",
                  layoutDependency: p,
                  layoutId: "a9MHy_SWd-container",
                  style: {
                    filter: "blur(4px)",
                    opacity: 0,
                    WebkitFilter: "blur(4px)",
                  },
                  transformTemplate: Oe,
                  variants: {
                    C7OAh5QTW: {
                      filter: "blur(0px)",
                      opacity: 1,
                      WebkitFilter: "blur(0px)",
                    },
                    Znb0W3Efa: {
                      filter: "blur(0px)",
                      opacity: 1,
                      WebkitFilter: "blur(0px)",
                    },
                  },
                  ...ke(
                    {
                      C7OAh5QTW: { transformTemplate: gr },
                      Znb0W3Efa: { transformTemplate: gr },
                    },
                    s,
                    h
                  ),
                  children: e(ur, {
                    height: "100%",
                    id: "a9MHy_SWd",
                    layoutId: "a9MHy_SWd",
                    style: { width: "100%" },
                    variant: "cAKRVk4EX",
                    width: "100%",
                    ...ke(
                      {
                        jUBJkHqz9: { variant: "z4VdY_RYR" },
                        Znb0W3Efa: { variant: "z4VdY_RYR" },
                        ZtVnmXquu: { variant: "z4VdY_RYR" },
                      },
                      s,
                      h
                    ),
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  z5 = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-Yb99M.framer-ik2d7k, .framer-Yb99M .framer-ik2d7k { display: block; }",
    ".framer-Yb99M.framer-18i1mhj { height: 496px; overflow: visible; position: relative; width: 800px; }",
    ".framer-Yb99M .framer-1qdejg-container { flex: none; height: auto; left: 50%; position: absolute; top: 50%; width: 100%; }",
    ".framer-Yb99M .framer-j2wqig-container { flex: none; height: auto; left: 800px; position: absolute; top: 50%; width: 100%; }",
    ".framer-Yb99M .framer-mui0ah-container { flex: none; height: auto; left: 1600px; position: absolute; top: 50%; width: 100%; }",
    ".framer-Yb99M.framer-v-1jyjb7v .framer-1qdejg-container, .framer-Yb99M.framer-v-1v3qxmm .framer-j2wqig-container { left: -800px; }",
    ".framer-Yb99M.framer-v-1jyjb7v .framer-j2wqig-container, .framer-Yb99M.framer-v-1v3qxmm .framer-mui0ah-container, .framer-Yb99M.framer-v-73zlu3 .framer-j2wqig-container, .framer-Yb99M.framer-v-1y32yi6 .framer-mui0ah-container { left: 50%; }",
    ".framer-Yb99M.framer-v-1jyjb7v .framer-mui0ah-container { left: unset; right: -800px; }",
    ".framer-Yb99M.framer-v-1v3qxmm .framer-1qdejg-container { left: -1600px; }",
    ".framer-Yb99M.framer-v-pqybz9.framer-18i1mhj, .framer-Yb99M.framer-v-73zlu3.framer-18i1mhj, .framer-Yb99M.framer-v-1y32yi6.framer-18i1mhj { height: 412px; width: 500px; }",
    ".framer-Yb99M.framer-v-pqybz9 .framer-j2wqig-container { left: 500px; }",
    ".framer-Yb99M.framer-v-pqybz9 .framer-mui0ah-container { left: 1000px; }",
    ".framer-Yb99M.framer-v-73zlu3 .framer-1qdejg-container, .framer-Yb99M.framer-v-1y32yi6 .framer-j2wqig-container { left: -500px; }",
    ".framer-Yb99M.framer-v-73zlu3 .framer-mui0ah-container { left: unset; right: -500px; }",
    ".framer-Yb99M.framer-v-1y32yi6 .framer-1qdejg-container { left: -1000px; }",
  ],
  xr = H(J5, z5, "framer-Yb99M"),
  Xt = xr;
xr.displayName = "Comparison Slider";
xr.defaultProps = { height: 496, width: 800 };
Z(xr, {
  variant: {
    options: [
      "PCL9g8s_t",
      "wkBQxVM6R",
      "C7OAh5QTW",
      "jUBJkHqz9",
      "ZtVnmXquu",
      "Znb0W3Efa",
    ],
    optionTitles: [
      "Soft Drinks",
      "Coffee",
      "Cocktails",
      "Soft Drinks \xB7 Mobile",
      "Coffee \xB7 Mobile",
      "Cocktails \xB7 Mobile",
    ],
    title: "Variant",
    type: y.Enum,
  },
});
G(xr, [{ explicitInter: !0, fonts: [] }, ...R5], {
  supportsExplicitInterCodegen: !0,
});
var W5 = "framer-kPvMQ",
  P5 = { BNTEMCaoT: "framer-v-1dzkfzr" };
var A5 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  _5 = ({ value: r, children: t }) => {
    let n = ee(J),
      i = r ?? n.transition,
      o = Y(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
    return e(J.Provider, { value: o, children: t });
  },
  j5 = l.create(f),
  N5 = ({ click: r, color: t, height: n, id: i, text: o, width: c, ...d }) => {
    var g, u;
    return {
      ...d,
      ouEfSqJU_:
        (g = t ?? d.ouEfSqJU_) !== null && g !== void 0
          ? g
          : "rgb(255, 255, 255)",
      VePmGLozD:
        (u = o ?? d.VePmGLozD) !== null && u !== void 0 ? u : "Soft Drinks",
      YL42kQapD: r ?? d.YL42kQapD,
    };
  },
  Y5 = (r, t) =>
    r.layoutDependency ? t.join("-") + r.layoutDependency : t.join("-"),
  E5 = N(function (r, t) {
    let { activeLocale: n, setLocale: i } = q(),
      {
        style: o,
        className: c,
        layoutId: d,
        variant: g,
        ouEfSqJU_: u,
        VePmGLozD: s,
        YL42kQapD: C,
        ...w
      } = N5(r),
      {
        baseVariant: x,
        classNames: h,
        clearLoadingGesture: k,
        gestureHandlers: X,
        gestureVariant: T,
        isLoading: F,
        setGestureState: p,
        setVariant: S,
        variants: I,
      } = te({
        defaultVariant: "BNTEMCaoT",
        variant: g,
        variantClassNames: P5,
      }),
      R = Y5(r, I),
      { activeVariantCallback: m, delay: a } = xe(x),
      M = m(async (...fe) => {
        if ((p({ isPressed: !1 }), C && (await C(...fe)) === !1)) return !1;
      }),
      V = U(null),
      $ = D(),
      P = [],
      le = re();
    return e(j, {
      id: d ?? $,
      children: e(j5, {
        animate: I,
        initial: !1,
        children: e(_5, {
          value: A5,
          children: e(l.div, {
            ...w,
            ...X,
            className: E(W5, ...P, "framer-1dzkfzr", c, h),
            "data-framer-name": "Variant 1",
            "data-highlight": !0,
            layoutDependency: R,
            layoutId: "BNTEMCaoT",
            onTap: M,
            ref: t ?? V,
            style: { ...o },
            children: e(b, {
              __fromCanvasComponent: !0,
              children: e(f, {
                children: e(l.p, {
                  style: {
                    "--font-selector": "SW50ZXItTWVkaXVt",
                    "--framer-font-family":
                      '"Inter", "Inter Placeholder", sans-serif',
                    "--framer-font-weight": "500",
                    "--framer-line-height": "100%",
                    "--framer-text-alignment": "center",
                    "--framer-text-color":
                      "var(--extracted-r6o4lv, var(--variable-reference-ouEfSqJU_-wAPjDbPN2))",
                  },
                  children: "Soft Drinks",
                }),
              }),
              className: "framer-22podh",
              "data-framer-name": "Total Value",
              fonts: ["Inter-Medium"],
              layoutDependency: R,
              layoutId: "IwOsUQrYE",
              style: {
                "--extracted-r6o4lv":
                  "var(--variable-reference-ouEfSqJU_-wAPjDbPN2)",
                "--framer-paragraph-spacing": "0px",
                "--variable-reference-ouEfSqJU_-wAPjDbPN2": u,
              },
              text: s,
              verticalAlignment: "bottom",
              withExternalLayout: !0,
            }),
          }),
        }),
      }),
    });
  }),
  D5 = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-kPvMQ.framer-13ayi0g, .framer-kPvMQ .framer-13ayi0g { display: block; }",
    ".framer-kPvMQ.framer-1dzkfzr { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 36px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100px; }",
    ".framer-kPvMQ .framer-22podh { -webkit-user-select: none; flex: none; height: auto; overflow: visible; position: relative; user-select: none; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-kPvMQ.framer-1dzkfzr { gap: 0px; } .framer-kPvMQ.framer-1dzkfzr > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-kPvMQ.framer-1dzkfzr > :first-child { margin-top: 0px; } .framer-kPvMQ.framer-1dzkfzr > :last-child { margin-bottom: 0px; } }",
  ],
  Cr = H(E5, D5, "framer-kPvMQ"),
  vr = Cr;
Cr.displayName = "Button \xB7 Comparison";
Cr.defaultProps = { height: 36, width: 100 };
Z(Cr, {
  ouEfSqJU_: {
    defaultValue: "rgb(255, 255, 255)",
    title: "Color",
    type: y.Color,
  },
  VePmGLozD: {
    defaultValue: "Soft Drinks",
    displayTextArea: !1,
    title: "Text",
    type: y.String,
  },
  YL42kQapD: { title: "Click", type: y.EventHandler },
});
G(
  Cr,
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
var q5 = Q(vr),
  Z5 = Q(Xt),
  H5 = [
    "AqG_M_QaM",
    "rfWJzAid6",
    "pRGnd5_GO",
    "pf8RmPtUZ",
    "aHTzqpO77",
    "IOfWQbSTz",
  ],
  G5 = "framer-ljh88",
  Q5 = {
    aHTzqpO77: "framer-v-1qpl6ij",
    AqG_M_QaM: "framer-v-d269y8",
    IOfWQbSTz: "framer-v-7npymd",
    pf8RmPtUZ: "framer-v-itya4e",
    pRGnd5_GO: "framer-v-6k1agf",
    rfWJzAid6: "framer-v-j05oz3",
  };
function Ke(r, ...t) {
  let n = {};
  return t?.forEach((i) => i && Object.assign(n, r[i])), n;
}
var O5 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  K5 = ({ value: r, children: t }) => {
    let n = ee(J),
      i = r ?? n.transition,
      o = Y(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
    return e(J.Provider, { value: o, children: t });
  },
  $5 = l.create(f),
  eo = {
    "Cocktails \xB7 Desktop": "pRGnd5_GO",
    "Cocktails \xB7 Mobile": "IOfWQbSTz",
    "Coffee \xB7 Desktop": "rfWJzAid6",
    "Coffee \xB7 Mobile": "aHTzqpO77",
    "Soft Drinks \xB7 Desktop": "AqG_M_QaM",
    "Soft Drinks \xB7 Mobile": "pf8RmPtUZ",
  },
  ro = ({ height: r, id: t, width: n, ...i }) => {
    var o, c;
    return {
      ...i,
      variant:
        (c = (o = eo[i.variant]) !== null && o !== void 0 ? o : i.variant) !==
          null && c !== void 0
          ? c
          : "AqG_M_QaM",
    };
  },
  to = (r, t) =>
    r.layoutDependency ? t.join("-") + r.layoutDependency : t.join("-"),
  ao = N(function (r, t) {
    let { activeLocale: n, setLocale: i } = q(),
      { style: o, className: c, layoutId: d, variant: g, ...u } = ro(r),
      {
        baseVariant: s,
        classNames: C,
        clearLoadingGesture: w,
        gestureHandlers: x,
        gestureVariant: h,
        isLoading: k,
        setGestureState: X,
        setVariant: T,
        variants: F,
      } = te({
        cycleOrder: H5,
        defaultVariant: "AqG_M_QaM",
        variant: g,
        variantClassNames: Q5,
      }),
      p = to(r, F),
      { activeVariantCallback: S, delay: I } = xe(s),
      R = S(async (...Ce) => {
        T("AqG_M_QaM");
      }),
      m = S(async (...Ce) => {
        T("pf8RmPtUZ");
      }),
      a = S(async (...Ce) => {
        T("rfWJzAid6");
      }),
      M = S(async (...Ce) => {
        T("aHTzqpO77");
      }),
      V = S(async (...Ce) => {
        T("pRGnd5_GO");
      }),
      $ = S(async (...Ce) => {
        T("IOfWQbSTz");
      }),
      P = U(null),
      le = D(),
      fe = [],
      _ = re();
    return e(j, {
      id: d ?? le,
      children: e($5, {
        animate: F,
        initial: !1,
        children: e(K5, {
          value: O5,
          children: v(l.div, {
            ...u,
            ...x,
            className: E(G5, ...fe, "framer-d269y8", c, C),
            "data-framer-name": "Soft Drinks \xB7 Desktop",
            layoutDependency: p,
            layoutId: "AqG_M_QaM",
            ref: t ?? P,
            style: { ...o },
            ...Ke(
              {
                aHTzqpO77: { "data-framer-name": "Coffee \xB7 Mobile" },
                IOfWQbSTz: { "data-framer-name": "Cocktails \xB7 Mobile" },
                pf8RmPtUZ: { "data-framer-name": "Soft Drinks \xB7 Mobile" },
                pRGnd5_GO: { "data-framer-name": "Cocktails \xB7 Desktop" },
                rfWJzAid6: { "data-framer-name": "Coffee \xB7 Desktop" },
              },
              s,
              h
            ),
            children: [
              v(l.div, {
                className: "framer-1qc889h",
                "data-framer-name": "Comparison Nav",
                "data-highlight": !0,
                layoutDependency: p,
                layoutId: "kL4cm6GdJ",
                children: [
                  e(l.div, {
                    className: "framer-11kz3g1",
                    layoutDependency: p,
                    layoutId: "U34yrCEu6",
                    style: {
                      backgroundColor:
                        "var(--token-f872aefb-d4cc-4be7-a1b4-ca7954ca6bce, rgb(183, 255, 0))",
                    },
                  }),
                  e(L, {
                    height: 36,
                    width: "100px",
                    y: (_?.y || 0) + 0 + 0 + 0,
                    children: e(l.div, {
                      className: "framer-1ylx9v2-container",
                      layoutDependency: p,
                      layoutId: "e3eRqrc0z-container",
                      children: e(vr, {
                        height: "100%",
                        id: "e3eRqrc0z",
                        layoutId: "e3eRqrc0z",
                        ouEfSqJU_: "rgb(255, 255, 255)",
                        style: { height: "100%", width: "100%" },
                        VePmGLozD: "Soft Drinks",
                        width: "100%",
                        YL42kQapD: R,
                        ...Ke(
                          {
                            aHTzqpO77: {
                              ouEfSqJU_: "rgba(255, 255, 255, 0.6)",
                              YL42kQapD: m,
                            },
                            IOfWQbSTz: {
                              ouEfSqJU_: "rgba(255, 255, 255, 0.6)",
                              YL42kQapD: m,
                            },
                            pf8RmPtUZ: { YL42kQapD: void 0 },
                            pRGnd5_GO: {
                              ouEfSqJU_:
                                "var(--token-9b4b60ac-a2c4-46f9-88c1-3a4328ea97d2, rgb(99, 191, 181))",
                            },
                            rfWJzAid6: {
                              ouEfSqJU_:
                                "var(--token-9b4b60ac-a2c4-46f9-88c1-3a4328ea97d2, rgb(99, 191, 181))",
                            },
                          },
                          s,
                          h
                        ),
                      }),
                    }),
                  }),
                  e(L, {
                    height: 36,
                    width: "100px",
                    y: (_?.y || 0) + 0 + 0 + 0,
                    children: e(l.div, {
                      className: "framer-1kedast-container",
                      layoutDependency: p,
                      layoutId: "VVb4hKIJR-container",
                      children: e(vr, {
                        height: "100%",
                        id: "VVb4hKIJR",
                        layoutId: "VVb4hKIJR",
                        ouEfSqJU_:
                          "var(--token-9b4b60ac-a2c4-46f9-88c1-3a4328ea97d2, rgb(99, 191, 181))",
                        style: { height: "100%", width: "100%" },
                        VePmGLozD: "Coffee",
                        width: "100%",
                        YL42kQapD: a,
                        ...Ke(
                          {
                            aHTzqpO77: {
                              ouEfSqJU_: "rgb(255, 255, 255)",
                              YL42kQapD: void 0,
                            },
                            IOfWQbSTz: { YL42kQapD: M },
                            pf8RmPtUZ: { YL42kQapD: M },
                            rfWJzAid6: { ouEfSqJU_: "rgb(255, 255, 255)" },
                          },
                          s,
                          h
                        ),
                      }),
                    }),
                  }),
                  e(L, {
                    height: 36,
                    width: "100px",
                    y: (_?.y || 0) + 0 + 0 + 0,
                    children: e(l.div, {
                      className: "framer-37fss0-container",
                      layoutDependency: p,
                      layoutId: "WPRyOvw2R-container",
                      children: e(vr, {
                        height: "100%",
                        id: "WPRyOvw2R",
                        layoutId: "WPRyOvw2R",
                        ouEfSqJU_:
                          "var(--token-9b4b60ac-a2c4-46f9-88c1-3a4328ea97d2, rgb(99, 191, 181))",
                        style: { height: "100%", width: "100%" },
                        VePmGLozD: "Cocktails",
                        width: "100%",
                        YL42kQapD: V,
                        ...Ke(
                          {
                            aHTzqpO77: { YL42kQapD: $ },
                            IOfWQbSTz: {
                              ouEfSqJU_: "rgb(255, 255, 255)",
                              YL42kQapD: void 0,
                            },
                            pf8RmPtUZ: { YL42kQapD: $ },
                            pRGnd5_GO: { ouEfSqJU_: "rgb(255, 255, 255)" },
                          },
                          s,
                          h
                        ),
                      }),
                    }),
                  }),
                ],
              }),
              e(L, {
                height: 496,
                width: _?.width || "100vw",
                y: (_?.y || 0) + 0 + 88,
                ...Ke(
                  {
                    aHTzqpO77: { y: (_?.y || 0) + 0 + 76 },
                    IOfWQbSTz: { y: (_?.y || 0) + 0 + 76 },
                    pf8RmPtUZ: { y: (_?.y || 0) + 0 + 76 },
                  },
                  s,
                  h
                ),
                children: e(l.div, {
                  className: "framer-2f9d24-container",
                  layoutDependency: p,
                  layoutId: "RiWStUQJE-container",
                  children: e(Xt, {
                    height: "100%",
                    id: "RiWStUQJE",
                    layoutId: "RiWStUQJE",
                    style: { width: "100%" },
                    variant: "PCL9g8s_t",
                    width: "100%",
                    ...Ke(
                      {
                        aHTzqpO77: { variant: "ZtVnmXquu" },
                        IOfWQbSTz: { variant: "Znb0W3Efa" },
                        pf8RmPtUZ: { variant: "jUBJkHqz9" },
                        pRGnd5_GO: { variant: "C7OAh5QTW" },
                        rfWJzAid6: { variant: "wkBQxVM6R" },
                      },
                      s,
                      h
                    ),
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  no = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-ljh88.framer-19qntp2, .framer-ljh88 .framer-19qntp2 { display: block; }",
    ".framer-ljh88.framer-d269y8 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 52px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 800px; }",
    ".framer-ljh88 .framer-1qc889h { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 36px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-ljh88 .framer-11kz3g1 { bottom: 0px; flex: none; height: 1px; left: 8px; overflow: hidden; position: absolute; width: 86px; z-index: 1; }",
    ".framer-ljh88 .framer-1ylx9v2-container, .framer-ljh88 .framer-1kedast-container, .framer-ljh88 .framer-37fss0-container { flex: none; height: 100%; position: relative; width: 100px; }",
    ".framer-ljh88 .framer-2f9d24-container { flex: none; height: auto; position: relative; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ljh88.framer-d269y8, .framer-ljh88 .framer-1qc889h { gap: 0px; } .framer-ljh88.framer-d269y8 > * { margin: 0px; margin-bottom: calc(52px / 2); margin-top: calc(52px / 2); } .framer-ljh88.framer-d269y8 > :first-child { margin-top: 0px; } .framer-ljh88.framer-d269y8 > :last-child { margin-bottom: 0px; } .framer-ljh88 .framer-1qc889h > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-ljh88 .framer-1qc889h > :first-child { margin-left: 0px; } .framer-ljh88 .framer-1qc889h > :last-child { margin-right: 0px; } }",
    ".framer-ljh88.framer-v-j05oz3 .framer-11kz3g1, .framer-ljh88.framer-v-1qpl6ij .framer-11kz3g1 { left: unset; right: 124px; width: 52px; }",
    ".framer-ljh88.framer-v-6k1agf .framer-11kz3g1, .framer-ljh88.framer-v-7npymd .framer-11kz3g1 { left: unset; right: 15px; width: 70px; }",
    ".framer-ljh88.framer-v-itya4e.framer-d269y8, .framer-ljh88.framer-v-1qpl6ij.framer-d269y8, .framer-ljh88.framer-v-7npymd.framer-d269y8 { gap: 40px; width: 500px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ljh88.framer-v-itya4e.framer-d269y8 { gap: 0px; } .framer-ljh88.framer-v-itya4e.framer-d269y8 > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-ljh88.framer-v-itya4e.framer-d269y8 > :first-child { margin-top: 0px; } .framer-ljh88.framer-v-itya4e.framer-d269y8 > :last-child { margin-bottom: 0px; } }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ljh88.framer-v-1qpl6ij.framer-d269y8 { gap: 0px; } .framer-ljh88.framer-v-1qpl6ij.framer-d269y8 > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-ljh88.framer-v-1qpl6ij.framer-d269y8 > :first-child { margin-top: 0px; } .framer-ljh88.framer-v-1qpl6ij.framer-d269y8 > :last-child { margin-bottom: 0px; } }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ljh88.framer-v-7npymd.framer-d269y8 { gap: 0px; } .framer-ljh88.framer-v-7npymd.framer-d269y8 > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-ljh88.framer-v-7npymd.framer-d269y8 > :first-child { margin-top: 0px; } .framer-ljh88.framer-v-7npymd.framer-d269y8 > :last-child { margin-bottom: 0px; } }",
  ],
  yr = H(ao, no, "framer-ljh88"),
  Bt = yr;
yr.displayName = "Comparison Module";
yr.defaultProps = { height: 584, width: 800 };
Z(yr, {
  variant: {
    options: [
      "AqG_M_QaM",
      "rfWJzAid6",
      "pRGnd5_GO",
      "pf8RmPtUZ",
      "aHTzqpO77",
      "IOfWQbSTz",
    ],
    optionTitles: [
      "Soft Drinks \xB7 Desktop",
      "Coffee \xB7 Desktop",
      "Cocktails \xB7 Desktop",
      "Soft Drinks \xB7 Mobile",
      "Coffee \xB7 Mobile",
      "Cocktails \xB7 Mobile",
    ],
    title: "Variant",
    type: y.Enum,
  },
});
G(yr, [{ explicitInter: !0, fonts: [] }, ...q5, ...Z5], {
  supportsExplicitInterCodegen: !0,
});
var io = Q(Ft),
  oo = Q(Le),
  lo = Q(It),
  so = Q(qe),
  fo = Q(wt),
  mo = Q(Bt),
  co = Q(Mt),
  po = Q(Ut),
  ho = Q($r),
  uo = Q(Te),
  go = {
    FWFWx7bxY: "(min-width: 810px) and (max-width: 1199px)",
    HF8RfH6Up: "(max-width: 809px)",
    t0DnlHXKs: "(min-width: 1200px) and (max-width: 1727px)",
    WQLkyLRf1: "(min-width: 1728px)",
  },
  Sa = () => typeof document < "u",
  Va = "framer-JXilx",
  xo = {
    FWFWx7bxY: "framer-v-zdzpwl",
    HF8RfH6Up: "framer-v-ge3bzv",
    t0DnlHXKs: "framer-v-1gy1nrh",
    WQLkyLRf1: "framer-v-72rtr7",
  },
  Ta = (r, t) => `translateX(-50%) ${t}`,
  Yr = Rr(),
  Co = {
    Desktop: "WQLkyLRf1",
    Laptop: "t0DnlHXKs",
    Phone: "HF8RfH6Up",
    Tablet: "FWFWx7bxY",
  },
  vo = ({ height: r, id: t, width: n, ...i }) => {
    var o, c;
    return {
      ...i,
      variant:
        (c = (o = Co[i.variant]) !== null && o !== void 0 ? o : i.variant) !==
          null && c !== void 0
          ? c
          : "WQLkyLRf1",
    };
  },
  yo = N(function (r, t) {
    let { activeLocale: n, setLocale: i } = q(),
      { style: o, className: c, layoutId: d, variant: g, ...u } = vo(r);
    we(() => {
      let V = Rr(void 0, n);
      if (V.robots) {
        let $ = document.querySelector('meta[name="robots"]');
        $
          ? $.setAttribute("content", V.robots)
          : (($ = document.createElement("meta")),
            $.setAttribute("name", "robots"),
            $.setAttribute("content", V.robots),
            document.head.appendChild($));
      }
    }, [void 0, n]),
      At(() => {
        let V = Rr(void 0, n);
        if (((document.title = V.title || ""), V.viewport)) {
          var $;
          ($ = document.querySelector('meta[name="viewport"]')) === null ||
            $ === void 0 ||
            $.setAttribute("content", V.viewport);
        }
        let P = V.bodyClassName;
        if (P) {
          let le = document.body;
          le.classList.forEach(
            (fe) => fe.startsWith("framer-body-") && le.classList.remove(fe)
          ),
            le.classList.add(`${V.bodyClassName}-framer-JXilx`);
        }
        return () => {
          P &&
            document.body.classList.remove(`${V.bodyClassName}-framer-JXilx`);
        };
      }, [void 0, n]);
    let [s, C] = Ht(g, go, !1),
      w = void 0,
      x = U(null),
      h = () => (Sa() ? s !== "HF8RfH6Up" : !0),
      k = rr("gohHRBez_"),
      X = U(null),
      T = rr("StSENVShv"),
      F = U(null),
      p = rr("wzVmyHw5J"),
      S = U(null),
      I = rr("drI9oh6ic"),
      R = U(null),
      m = () => !Sa() || s === "HF8RfH6Up",
      a = D(),
      M = [];
    return (
      qt({}),
      e(Zt.Provider, {
        value: { primaryVariantId: "WQLkyLRf1", variantClassNames: xo },
        children: v(j, {
          id: d ?? a,
          children: [
            v(l.div, {
              ...u,
              className: E(Va, ...M, "framer-72rtr7", c),
              ref: t ?? x,
              style: { ...o },
              children: [
                v("div", {
                  className: "framer-16tajli",
                  children: [
                    v("div", {
                      className: "framer-7vobzv",
                      children: [
                        e(b, {
                          __fromCanvasComponent: !0,
                          children: e(f, {
                            children: v("h2", {
                              style: {
                                "--font-selector":
                                  "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnT0RBd0xDQWlkMlIwYUNJZ01UQXc=",
                                "--framer-font-family":
                                  '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                "--framer-font-size": "129.67820966750128px",
                                "--framer-font-variation-axes":
                                  '"opsz" 96, "wght" 800, "wdth" 100',
                                "--framer-letter-spacing": "0px",
                                "--framer-line-height": "0.8em",
                                "--framer-text-alignment": "center",
                                "--framer-text-color": "rgb(245, 245, 250)",
                              },
                              children: [
                                "Become Hated",
                                e("br", {}),
                                "By Big Beverage",
                              ],
                            }),
                          }),
                          className: "framer-svk007",
                          fonts: ["GF;Bricolage Grotesque-variable-regular"],
                          verticalAlignment: "top",
                          viewBox: "0 0 920 207",
                          withExternalLayout: !0,
                        }),
                        v("div", {
                          className: "framer-t0n0cx",
                          children: [
                            e(A, {
                              breakpoint: s,
                              overrides: {
                                HF8RfH6Up: {
                                  children: e(f, {
                                    children: v("h2", {
                                      style: {
                                        "--framer-letter-spacing": "-0.4px",
                                        "--framer-line-height": "1.4em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "rgb(255, 255, 255)",
                                      },
                                      children: [
                                        e("span", {
                                          style: {
                                            "--framer-text-color":
                                              "rgba(255, 255, 255, 0.7)",
                                          },
                                          children: "We make ",
                                        }),
                                        "sweet liquid plants",
                                        e("span", {
                                          style: {
                                            "--framer-text-color":
                                              "rgba(255, 255, 255, 0.7)",
                                          },
                                          children: " that create ",
                                        }),
                                        "home-crafted drinks",
                                        e("span", {
                                          style: {
                                            "--framer-text-color":
                                              "rgba(255, 255, 255, 0.7)",
                                          },
                                          children: ", giving you a ",
                                        }),
                                        "4x smaller carbon footprint",
                                        e("span", {
                                          style: {
                                            "--framer-text-color":
                                              "rgba(255, 255, 255, 0.7)",
                                          },
                                          children: ".",
                                        }),
                                      ],
                                    }),
                                  }),
                                },
                              },
                              children: e(b, {
                                __fromCanvasComponent: !0,
                                children: e(f, {
                                  children: v("h2", {
                                    style: {
                                      "--framer-font-size": "18px",
                                      "--framer-letter-spacing": "-0.4px",
                                      "--framer-line-height": "1.4em",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "rgb(255, 255, 255)",
                                    },
                                    children: [
                                      e("span", {
                                        style: {
                                          "--framer-text-color":
                                            "rgba(255, 255, 255, 0.7)",
                                        },
                                        children: "We make ",
                                      }),
                                      "sweet liquid plants",
                                      e("span", {
                                        style: {
                                          "--framer-text-color":
                                            "rgba(255, 255, 255, 0.7)",
                                        },
                                        children: " that create ",
                                      }),
                                      "home-crafted drinks",
                                      e("span", {
                                        style: {
                                          "--framer-text-color":
                                            "rgba(255, 255, 255, 0.7)",
                                        },
                                        children: ", giving you a ",
                                      }),
                                      "4x smaller carbon footprint",
                                      e("span", {
                                        style: {
                                          "--framer-text-color":
                                            "rgba(255, 255, 255, 0.7)",
                                        },
                                        children: ".",
                                      }),
                                    ],
                                  }),
                                }),
                                className: "framer-16wsvf3",
                                fonts: ["Inter"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                            e(A, {
                              breakpoint: s,
                              overrides: {
                                HF8RfH6Up: {
                                  children: e(f, {
                                    children: v("h2", {
                                      style: {
                                        "--font-selector": "SW50ZXItSXRhbGlj",
                                        "--framer-font-family":
                                          '"Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-style": "italic",
                                        "--framer-letter-spacing": "-0.4px",
                                        "--framer-line-height": "1.4em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "rgb(255, 255, 255)",
                                      },
                                      children: [
                                        e("span", {
                                          style: {
                                            "--framer-text-color":
                                              "rgba(255, 255, 255, 0.7)",
                                          },
                                          children: "It's time to ",
                                        }),
                                        "ditch the can.",
                                      ],
                                    }),
                                  }),
                                },
                              },
                              children: e(b, {
                                __fromCanvasComponent: !0,
                                children: e(f, {
                                  children: v("h2", {
                                    style: {
                                      "--font-selector": "SW50ZXItSXRhbGlj",
                                      "--framer-font-family":
                                        '"Inter", "Inter Placeholder", sans-serif',
                                      "--framer-font-size": "18px",
                                      "--framer-font-style": "italic",
                                      "--framer-letter-spacing": "-0.4px",
                                      "--framer-line-height": "1.4em",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "rgb(255, 255, 255)",
                                    },
                                    children: [
                                      e("span", {
                                        style: {
                                          "--framer-text-color":
                                            "rgba(255, 255, 255, 0.7)",
                                        },
                                        children: "It's time to ",
                                      }),
                                      "ditch the can.",
                                    ],
                                  }),
                                }),
                                className: "framer-n1s94j",
                                fonts: ["Inter-Italic"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                        e(L, {
                          height: 48,
                          children: e(ce, {
                            className: "framer-19ceaqt-container",
                            children: e(Ft, {
                              height: "100%",
                              id: "BBOgoha4X",
                              layoutId: "BBOgoha4X",
                              style: { height: "100%" },
                              variant: "xXp8Zv94J",
                              width: "100%",
                            }),
                          }),
                        }),
                      ],
                    }),
                    e(de, {
                      className: "framer-1tfbfao",
                      "data-framer-name": "Layer_1",
                      fill: "rgba(0,0,0,1)",
                      intrinsicHeight: 988,
                      intrinsicWidth: 1108,
                      name: "Layer_1",
                      svg: `<svg width="1108" height="988" viewBox="0 0 1108 988" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1376_296)">
<path d="M238.37 729.04H216.08V793.99H238.37V729.04Z" fill="#010101"/>
<path d="M227.23 566.79L172.49 657.68H281.96L227.23 566.79Z" fill="#FD7625"/>
<path d="M227.23 615.36L164.74 706.25H289.72L227.23 615.36Z" fill="#FD7625"/>
<path d="M227.23 660.81L157.12 751.7H297.33L227.23 660.81Z" fill="#FD7625"/>
<path d="M0 987.47C40.26 929.08 108.24 846.42 214.37 782.03C409.93 663.38 548.54 719.89 659.49 592.96C740 500.87 701.87 431.27 793.47 341.37C872.14 264.16 975.79 241.37 1051.02 234.18C1051.02 485.28 1051.02 736.37 1051.02 987.47H0Z" fill="#016C4A"/>
<path d="M340.86 549.94L356.63 534.17L404.27 581.81C419.27 596.81 439.62 605.24 460.84 605.24H666.55L564.48 503.17L580.25 487.4L674.66 581.81C689.66 596.81 710.01 605.24 731.23 605.24H865.55L786.11 525.8L801.88 510.03L873.66 581.81C888.66 596.81 909.01 605.24 930.23 605.24H1107.51V635.01H820.45C799.23 635.01 778.88 643.44 763.88 658.44L698.63 723.69L682.86 707.92L755.77 635.01H573.34C552.12 635.01 531.77 643.44 516.77 658.44L451.52 723.69L435.75 707.92L508.66 635.01H459.07C437.85 635.01 417.5 626.58 402.5 611.58L340.86 549.94Z" fill="#010101"/>
<path d="M794.01 548.7C811.015 548.7 824.8 534.915 824.8 517.91C824.8 500.905 811.015 487.12 794.01 487.12C777.005 487.12 763.22 500.905 763.22 517.91C763.22 534.915 777.005 548.7 794.01 548.7Z" fill="#FDAFE5"/>
<path d="M794.01 529.96C800.665 529.96 806.06 524.565 806.06 517.91C806.06 511.255 800.665 505.86 794.01 505.86C787.355 505.86 781.96 511.255 781.96 517.91C781.96 524.565 787.355 529.96 794.01 529.96Z" fill="#FD7625"/>
<path d="M808.3 559.08C808.3 547.69 802.65 537.62 794.01 531.5C785.36 537.61 779.71 547.68 779.71 559.08C779.71 570.48 785.36 580.55 794.01 586.66C802.65 580.54 808.3 570.47 808.3 559.08Z" fill="white"/>
<path d="M833.23 536.92C825.18 528.87 814.06 525.74 803.62 527.52C801.82 537.96 804.95 549.07 813.01 557.13C821.07 565.19 832.19 568.32 842.62 566.52C844.4 556.08 841.28 544.97 833.22 536.91L833.23 536.92Z" fill="white"/>
<path d="M835.18 503.62C823.79 503.62 813.72 509.27 807.6 517.91C813.71 526.56 823.78 532.21 835.18 532.21C846.58 532.21 856.65 526.56 862.76 517.91C856.64 509.27 846.57 503.62 835.18 503.62Z" fill="white"/>
<path d="M813.01 478.69C804.96 486.74 801.83 497.86 803.61 508.3C814.05 510.1 825.16 506.97 833.22 498.91C841.28 490.85 844.41 479.73 842.61 469.3C832.17 467.52 821.06 470.64 813 478.7L813.01 478.69Z" fill="white"/>
<path d="M779.71 476.74C779.71 488.13 785.36 498.2 794 504.32C802.65 498.21 808.3 488.14 808.3 476.74C808.3 465.34 802.65 455.27 794 449.16C785.36 455.28 779.71 465.35 779.71 476.74Z" fill="white"/>
<path d="M754.79 498.9C762.84 506.95 773.96 510.08 784.4 508.3C786.2 497.86 783.07 486.75 775.01 478.69C766.95 470.63 755.83 467.5 745.4 469.3C743.62 479.74 746.74 490.85 754.8 498.91L754.79 498.9Z" fill="white"/>
<path d="M752.83 532.2C764.22 532.2 774.29 526.55 780.41 517.91C774.3 509.26 764.23 503.61 752.83 503.61C741.43 503.61 731.36 509.26 725.25 517.91C731.37 526.55 741.44 532.2 752.83 532.2Z" fill="white"/>
<path d="M775 557.13C783.05 549.08 786.18 537.96 784.4 527.52C773.96 525.72 762.85 528.85 754.79 536.91C746.73 544.97 743.6 556.09 745.4 566.52C755.84 568.3 766.95 565.18 775.01 557.12L775 557.13Z" fill="white"/>
<path d="M572.36 526.06C589.365 526.06 603.15 512.275 603.15 495.27C603.15 478.265 589.365 464.48 572.36 464.48C555.355 464.48 541.57 478.265 541.57 495.27C541.57 512.275 555.355 526.06 572.36 526.06Z" fill="#FDAFE5"/>
<path d="M572.36 507.32C579.015 507.32 584.41 501.925 584.41 495.27C584.41 488.615 579.015 483.22 572.36 483.22C565.705 483.22 560.31 488.615 560.31 495.27C560.31 501.925 565.705 507.32 572.36 507.32Z" fill="#FD7625"/>
<path d="M586.66 536.45C586.66 525.06 581.01 514.99 572.37 508.87C563.72 514.98 558.07 525.05 558.07 536.45C558.07 547.85 563.72 557.92 572.37 564.03C581.01 557.91 586.66 547.84 586.66 536.45Z" fill="white"/>
<path d="M611.58 514.28C603.53 506.23 592.41 503.1 581.97 504.88C580.17 515.32 583.3 526.43 591.36 534.49C599.42 542.55 610.54 545.68 620.97 543.88C622.75 533.44 619.63 522.33 611.57 514.27L611.58 514.28Z" fill="white"/>
<path d="M613.54 480.98C602.15 480.98 592.08 486.63 585.96 495.27C592.07 503.92 602.14 509.57 613.54 509.57C624.94 509.57 635.01 503.92 641.12 495.27C635 486.63 624.93 480.98 613.54 480.98Z" fill="white"/>
<path d="M591.37 456.05C583.32 464.1 580.19 475.22 581.97 485.66C592.41 487.46 603.52 484.33 611.58 476.27C619.64 468.21 622.77 457.09 620.97 446.66C610.53 444.88 599.42 448 591.36 456.06L591.37 456.05Z" fill="white"/>
<path d="M558.07 454.1C558.07 465.49 563.72 475.56 572.36 481.68C581.01 475.57 586.66 465.5 586.66 454.1C586.66 442.7 581.01 432.63 572.36 426.52C563.72 432.64 558.07 442.71 558.07 454.1Z" fill="white"/>
<path d="M533.14 476.27C541.19 484.32 552.31 487.45 562.75 485.67C564.55 475.23 561.42 464.12 553.36 456.06C545.3 448 534.18 444.87 523.75 446.67C521.97 457.11 525.09 468.22 533.15 476.28L533.14 476.27Z" fill="white"/>
<path d="M531.19 509.57C542.58 509.57 552.65 503.92 558.77 495.28C552.66 486.63 542.59 480.98 531.19 480.98C519.79 480.98 509.72 486.63 503.61 495.28C509.73 503.92 519.8 509.57 531.19 509.57Z" fill="white"/>
<path d="M553.36 534.5C561.41 526.45 564.54 515.33 562.76 504.89C552.32 503.09 541.21 506.22 533.15 514.28C525.09 522.34 521.96 533.46 523.76 543.89C534.2 545.67 545.31 542.55 553.37 534.49L553.36 534.5Z" fill="white"/>
<path d="M348.75 572.84C365.755 572.84 379.54 559.055 379.54 542.05C379.54 525.045 365.755 511.26 348.75 511.26C331.745 511.26 317.96 525.045 317.96 542.05C317.96 559.055 331.745 572.84 348.75 572.84Z" fill="#FDAFE5"/>
<path d="M348.75 554.1C355.405 554.1 360.8 548.705 360.8 542.05C360.8 535.395 355.405 530 348.75 530C342.095 530 336.7 535.395 336.7 542.05C336.7 548.705 342.095 554.1 348.75 554.1Z" fill="#FD7625"/>
<path d="M363.04 583.23C363.04 571.84 357.39 561.77 348.75 555.65C340.1 561.76 334.45 571.83 334.45 583.23C334.45 594.63 340.1 604.7 348.75 610.81C357.39 604.69 363.04 594.62 363.04 583.23Z" fill="white"/>
<path d="M387.97 561.06C379.92 553.01 368.8 549.88 358.36 551.66C356.56 562.1 359.69 573.21 367.75 581.27C375.81 589.33 386.93 592.46 397.36 590.66C399.14 580.22 396.02 569.11 387.96 561.05L387.97 561.06Z" fill="white"/>
<path d="M389.92 527.76C378.53 527.76 368.46 533.41 362.34 542.05C368.45 550.7 378.52 556.35 389.92 556.35C401.32 556.35 411.39 550.7 417.5 542.05C411.38 533.41 401.31 527.76 389.92 527.76Z" fill="white"/>
<path d="M367.75 502.83C359.7 510.88 356.57 522 358.35 532.44C368.79 534.24 379.9 531.11 387.96 523.05C396.02 514.99 399.15 503.87 397.35 493.44C386.91 491.66 375.8 494.78 367.74 502.84L367.75 502.83Z" fill="white"/>
<path d="M334.45 500.88C334.45 512.27 340.1 522.34 348.74 528.46C357.39 522.35 363.04 512.28 363.04 500.88C363.04 489.48 357.39 479.41 348.74 473.3C340.1 479.42 334.45 489.49 334.45 500.88Z" fill="white"/>
<path d="M309.53 523.05C317.58 531.1 328.7 534.23 339.14 532.45C340.94 522.01 337.81 510.9 329.75 502.84C321.69 494.78 310.57 491.65 300.14 493.45C298.36 503.89 301.48 515 309.54 523.06L309.53 523.05Z" fill="white"/>
<path d="M307.57 556.34C318.96 556.34 329.03 550.69 335.15 542.05C329.04 533.4 318.97 527.75 307.57 527.75C296.17 527.75 286.1 533.4 279.99 542.05C286.11 550.69 296.18 556.34 307.57 556.34Z" fill="white"/>
<path d="M329.74 581.27C337.79 573.22 340.92 562.1 339.14 551.66C328.7 549.86 317.59 552.99 309.53 561.05C301.47 569.11 298.34 580.23 300.14 590.66C310.58 592.44 321.69 589.32 329.75 581.26L329.74 581.27Z" fill="white"/>
<path d="M441.38 748.84C458.385 748.84 472.17 735.055 472.17 718.05C472.17 701.045 458.385 687.26 441.38 687.26C424.375 687.26 410.59 701.045 410.59 718.05C410.59 735.055 424.375 748.84 441.38 748.84Z" fill="#FDAFE5"/>
<path d="M441.38 730.1C448.035 730.1 453.43 724.705 453.43 718.05C453.43 711.395 448.035 706 441.38 706C434.725 706 429.33 711.395 429.33 718.05C429.33 724.705 434.725 730.1 441.38 730.1Z" fill="#FD7625"/>
<path d="M455.68 759.23C455.68 747.84 450.03 737.77 441.39 731.65C432.74 737.76 427.09 747.83 427.09 759.23C427.09 770.63 432.74 780.7 441.39 786.81C450.03 780.69 455.68 770.62 455.68 759.23Z" fill="white"/>
<path d="M480.6 737.06C472.55 729.01 461.43 725.88 450.99 727.66C449.19 738.1 452.32 749.21 460.38 757.27C468.44 765.33 479.56 768.46 489.99 766.66C491.77 756.22 488.65 745.11 480.59 737.05L480.6 737.06Z" fill="white"/>
<path d="M482.56 703.76C471.17 703.76 461.1 709.41 454.98 718.05C461.09 726.7 471.16 732.35 482.56 732.35C493.96 732.35 504.03 726.7 510.14 718.05C504.02 709.41 493.95 703.76 482.56 703.76Z" fill="white"/>
<path d="M460.39 678.83C452.34 686.88 449.21 698 450.99 708.44C461.43 710.24 472.54 707.11 480.6 699.05C488.66 690.99 491.79 679.87 489.99 669.44C479.55 667.66 468.44 670.78 460.38 678.84L460.39 678.83Z" fill="white"/>
<path d="M427.09 676.88C427.09 688.27 432.74 698.34 441.38 704.46C450.03 698.35 455.68 688.28 455.68 676.88C455.68 665.48 450.03 655.41 441.38 649.3C432.74 655.42 427.09 665.49 427.09 676.88Z" fill="white"/>
<path d="M402.16 699.04C410.21 707.09 421.33 710.22 431.77 708.44C433.57 698 430.44 686.89 422.38 678.83C414.32 670.77 403.2 667.64 392.77 669.44C390.99 679.88 394.11 690.99 402.17 699.05L402.16 699.04Z" fill="white"/>
<path d="M400.21 732.34C411.6 732.34 421.67 726.69 427.79 718.05C421.68 709.4 411.61 703.75 400.21 703.75C388.81 703.75 378.74 709.4 372.63 718.05C378.75 726.69 388.82 732.34 400.21 732.34Z" fill="white"/>
<path d="M422.38 757.27C430.43 749.22 433.56 738.1 431.78 727.66C421.34 725.86 410.23 728.99 402.17 737.05C394.11 745.11 390.98 756.23 392.78 766.66C403.22 768.44 414.33 765.32 422.39 757.26L422.38 757.27Z" fill="white"/>
<path d="M688.5 748.84C705.505 748.84 719.29 735.055 719.29 718.05C719.29 701.045 705.505 687.26 688.5 687.26C671.495 687.26 657.71 701.045 657.71 718.05C657.71 735.055 671.495 748.84 688.5 748.84Z" fill="#FDAFE5"/>
<path d="M688.5 730.1C695.155 730.1 700.55 724.705 700.55 718.05C700.55 711.395 695.155 706 688.5 706C681.845 706 676.45 711.395 676.45 718.05C676.45 724.705 681.845 730.1 688.5 730.1Z" fill="#FD7625"/>
<path d="M702.79 759.22C702.79 747.83 697.14 737.76 688.5 731.64C679.85 737.75 674.2 747.82 674.2 759.22C674.2 770.62 679.85 780.69 688.5 786.8C697.14 780.68 702.79 770.61 702.79 759.22Z" fill="white"/>
<path d="M727.72 737.06C719.67 729.01 708.55 725.88 698.11 727.66C696.31 738.1 699.44 749.21 707.5 757.27C715.56 765.33 726.68 768.46 737.11 766.66C738.89 756.22 735.77 745.11 727.71 737.05L727.72 737.06Z" fill="white"/>
<path d="M729.67 703.76C718.28 703.76 708.21 709.41 702.09 718.05C708.2 726.7 718.27 732.35 729.67 732.35C741.07 732.35 751.14 726.7 757.25 718.05C751.13 709.41 741.06 703.76 729.67 703.76Z" fill="white"/>
<path d="M707.51 678.83C699.46 686.88 696.33 698 698.11 708.44C708.55 710.24 719.66 707.11 727.72 699.05C735.78 690.99 738.91 679.87 737.11 669.44C726.67 667.66 715.56 670.78 707.5 678.84L707.51 678.83Z" fill="white"/>
<path d="M674.21 676.88C674.21 688.27 679.86 698.34 688.5 704.46C697.15 698.35 702.8 688.28 702.8 676.88C702.8 665.48 697.15 655.41 688.5 649.3C679.86 655.42 674.21 665.49 674.21 676.88Z" fill="white"/>
<path d="M649.28 699.04C657.33 707.09 668.45 710.22 678.89 708.44C680.69 698 677.56 686.89 669.5 678.83C661.44 670.77 650.32 667.64 639.89 669.44C638.11 679.88 641.23 690.99 649.29 699.05L649.28 699.04Z" fill="white"/>
<path d="M647.33 732.34C658.72 732.34 668.79 726.69 674.91 718.05C668.8 709.4 658.73 703.75 647.33 703.75C635.93 703.75 625.86 709.4 619.75 718.05C625.87 726.69 635.94 732.34 647.33 732.34Z" fill="white"/>
<path d="M669.49 757.27C677.54 749.22 680.67 738.1 678.89 727.66C668.45 725.86 657.34 728.99 649.28 737.05C641.22 745.11 638.09 756.23 639.89 766.66C650.33 768.44 661.44 765.32 669.5 757.26L669.49 757.27Z" fill="white"/>
<path d="M966.1 354.35H917.41V496.21H966.1V354.35Z" fill="#010101"/>
<path d="M941.75 0L822.21 198.51H1061.29L941.75 0Z" fill="white"/>
<path d="M941.75 106.08L805.27 304.59H1078.23L941.75 106.08Z" fill="white"/>
<path d="M941.75 205.34L788.64 403.85H1094.86L941.75 205.34Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_1376_296">
<rect width="1107.52" height="987.47" fill="white"/>
</clipPath>
</defs>
</svg>
`,
                      withExternalLayout: !0,
                    }),
                    h() &&
                      e(de, {
                        className: "framer-1bjwhnk hidden-ge3bzv",
                        "data-framer-name": "Layer_1",
                        fill: "rgba(0,0,0,1)",
                        intrinsicHeight: 988,
                        intrinsicWidth: 1108,
                        name: "Layer_1",
                        svg: `<svg width="1108" height="988" viewBox="0 0 1108 988" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1380_416)">
<path d="M1107.52 987.47C1067.26 929.08 999.28 846.42 893.15 782.03C697.59 663.38 558.98 719.89 448.03 592.96C367.52 500.87 405.65 431.27 314.05 341.37C235.38 264.16 131.73 241.37 56.5 234.18V987.47H1107.53H1107.52Z" fill="#006E47"/>
<path d="M766.66 549.94L750.89 534.17L703.25 581.81C688.25 596.81 667.9 605.24 646.68 605.24H440.97L543.04 503.17L527.27 487.4L432.86 581.81C417.86 596.81 397.51 605.24 376.29 605.24H241.97L321.41 525.8L305.64 510.03L233.86 581.81C218.86 596.81 198.51 605.24 177.29 605.24H0V635.01H287.06C308.28 635.01 328.63 643.44 343.63 658.44L408.88 723.69L424.65 707.92L351.74 635.01H534.17C555.39 635.01 575.74 643.44 590.74 658.44L655.99 723.69L671.76 707.92L598.85 635.01H648.44C669.66 635.01 690.01 626.58 705.01 611.58L766.65 549.94H766.66Z" fill="#010101"/>
<path d="M313.51 548.7C330.515 548.7 344.3 534.915 344.3 517.91C344.3 500.905 330.515 487.12 313.51 487.12C296.505 487.12 282.72 500.905 282.72 517.91C282.72 534.915 296.505 548.7 313.51 548.7Z" fill="#FDAFE5"/>
<path d="M313.51 529.96C320.165 529.96 325.56 524.565 325.56 517.91C325.56 511.255 320.165 505.86 313.51 505.86C306.855 505.86 301.46 511.255 301.46 517.91C301.46 524.565 306.855 529.96 313.51 529.96Z" fill="#FD7625"/>
<path d="M299.22 559.08C299.22 547.69 304.87 537.62 313.51 531.5C322.16 537.61 327.81 547.68 327.81 559.08C327.81 570.48 322.16 580.55 313.51 586.66C304.87 580.54 299.22 570.47 299.22 559.08Z" fill="white"/>
<path d="M274.29 536.92C282.34 528.87 293.46 525.74 303.9 527.52C305.7 537.96 302.57 549.07 294.51 557.13C286.45 565.19 275.33 568.32 264.9 566.52C263.12 556.08 266.24 544.97 274.3 536.91L274.29 536.92Z" fill="white"/>
<path d="M272.34 503.62C283.73 503.62 293.8 509.27 299.92 517.91C293.81 526.56 283.74 532.21 272.34 532.21C260.94 532.21 250.87 526.56 244.76 517.91C250.88 509.27 260.95 503.62 272.34 503.62Z" fill="white"/>
<path d="M294.5 478.69C302.55 486.74 305.68 497.86 303.9 508.3C293.46 510.1 282.35 506.97 274.29 498.91C266.23 490.85 263.1 479.73 264.9 469.3C275.34 467.52 286.45 470.64 294.51 478.7L294.5 478.69Z" fill="white"/>
<path d="M327.8 476.74C327.8 488.13 322.15 498.2 313.51 504.32C304.86 498.21 299.21 488.14 299.21 476.74C299.21 465.34 304.86 455.27 313.51 449.16C322.15 455.28 327.8 465.35 327.8 476.74Z" fill="white"/>
<path d="M352.73 498.9C344.68 506.95 333.56 510.08 323.12 508.3C321.32 497.86 324.45 486.75 332.51 478.69C340.57 470.63 351.69 467.5 362.12 469.3C363.9 479.74 360.78 490.85 352.72 498.91L352.73 498.9Z" fill="white"/>
<path d="M354.69 532.2C343.3 532.2 333.23 526.55 327.11 517.91C333.22 509.26 343.29 503.61 354.69 503.61C366.09 503.61 376.16 509.26 382.27 517.91C376.15 526.55 366.08 532.2 354.69 532.2Z" fill="white"/>
<path d="M332.52 557.13C324.47 549.08 321.34 537.96 323.12 527.52C333.56 525.72 344.67 528.85 352.73 536.91C360.79 544.97 363.92 556.09 362.12 566.52C351.68 568.3 340.57 565.18 332.51 557.12L332.52 557.13Z" fill="white"/>
<path d="M535.16 526.06C552.165 526.06 565.95 512.275 565.95 495.27C565.95 478.265 552.165 464.48 535.16 464.48C518.155 464.48 504.37 478.265 504.37 495.27C504.37 512.275 518.155 526.06 535.16 526.06Z" fill="#FDAFE5"/>
<path d="M535.16 507.32C541.815 507.32 547.21 501.925 547.21 495.27C547.21 488.615 541.815 483.22 535.16 483.22C528.505 483.22 523.11 488.615 523.11 495.27C523.11 501.925 528.505 507.32 535.16 507.32Z" fill="#FD7625"/>
<path d="M520.86 536.45C520.86 525.06 526.51 514.99 535.15 508.87C543.8 514.98 549.45 525.05 549.45 536.45C549.45 547.85 543.8 557.92 535.15 564.03C526.51 557.91 520.86 547.84 520.86 536.45Z" fill="white"/>
<path d="M495.93 514.28C503.98 506.23 515.1 503.1 525.54 504.88C527.34 515.32 524.21 526.43 516.15 534.49C508.09 542.55 496.97 545.68 486.54 543.88C484.76 533.44 487.88 522.33 495.94 514.27L495.93 514.28Z" fill="white"/>
<path d="M493.98 480.98C505.37 480.98 515.44 486.63 521.56 495.27C515.45 503.92 505.38 509.57 493.98 509.57C482.58 509.57 472.51 503.92 466.4 495.27C472.52 486.63 482.59 480.98 493.98 480.98Z" fill="white"/>
<path d="M516.15 456.05C524.2 464.1 527.33 475.22 525.55 485.66C515.11 487.46 504 484.33 495.94 476.27C487.88 468.21 484.75 457.09 486.55 446.66C496.99 444.88 508.1 448 516.16 456.06L516.15 456.05Z" fill="white"/>
<path d="M549.45 454.1C549.45 465.49 543.8 475.56 535.16 481.68C526.51 475.57 520.86 465.5 520.86 454.1C520.86 442.7 526.51 432.63 535.16 426.52C543.8 432.64 549.45 442.71 549.45 454.1Z" fill="white"/>
<path d="M574.38 476.27C566.33 484.32 555.21 487.45 544.77 485.67C542.97 475.23 546.1 464.12 554.16 456.06C562.22 448 573.34 444.87 583.77 446.67C585.55 457.11 582.43 468.22 574.37 476.28L574.38 476.27Z" fill="white"/>
<path d="M576.33 509.57C564.94 509.57 554.87 503.92 548.75 495.28C554.86 486.63 564.93 480.98 576.33 480.98C587.73 480.98 597.8 486.63 603.91 495.28C597.79 503.92 587.72 509.57 576.33 509.57Z" fill="white"/>
<path d="M554.16 534.5C546.11 526.45 542.98 515.33 544.76 504.89C555.2 503.09 566.31 506.22 574.37 514.28C582.43 522.34 585.56 533.46 583.76 543.89C573.32 545.67 562.21 542.55 554.15 534.49L554.16 534.5Z" fill="white"/>
<path d="M758.77 572.84C775.775 572.84 789.56 559.055 789.56 542.05C789.56 525.045 775.775 511.26 758.77 511.26C741.765 511.26 727.98 525.045 727.98 542.05C727.98 559.055 741.765 572.84 758.77 572.84Z" fill="#FDAFE5"/>
<path d="M758.77 554.1C765.425 554.1 770.82 548.705 770.82 542.05C770.82 535.395 765.425 530 758.77 530C752.115 530 746.72 535.395 746.72 542.05C746.72 548.705 752.115 554.1 758.77 554.1Z" fill="#FD7625"/>
<path d="M744.48 583.23C744.48 571.84 750.13 561.77 758.77 555.65C767.42 561.76 773.07 571.83 773.07 583.23C773.07 594.63 767.42 604.7 758.77 610.81C750.13 604.69 744.48 594.62 744.48 583.23Z" fill="white"/>
<path d="M719.55 561.06C727.6 553.01 738.72 549.88 749.16 551.66C750.96 562.1 747.83 573.21 739.77 581.27C731.71 589.33 720.59 592.46 710.16 590.66C708.38 580.22 711.5 569.11 719.56 561.05L719.55 561.06Z" fill="white"/>
<path d="M717.6 527.76C728.99 527.76 739.06 533.41 745.18 542.05C739.07 550.7 729 556.35 717.6 556.35C706.2 556.35 696.13 550.7 690.02 542.05C696.14 533.41 706.21 527.76 717.6 527.76Z" fill="white"/>
<path d="M739.76 502.83C747.81 510.88 750.94 522 749.16 532.44C738.72 534.24 727.61 531.11 719.55 523.05C711.49 514.99 708.36 503.87 710.16 493.44C720.6 491.66 731.71 494.78 739.77 502.84L739.76 502.83Z" fill="white"/>
<path d="M773.06 500.88C773.06 512.27 767.41 522.34 758.77 528.46C750.12 522.35 744.47 512.28 744.47 500.88C744.47 489.48 750.12 479.41 758.77 473.3C767.41 479.42 773.06 489.49 773.06 500.88Z" fill="white"/>
<path d="M797.99 523.05C789.94 531.1 778.82 534.23 768.38 532.45C766.58 522.01 769.71 510.9 777.77 502.84C785.83 494.78 796.95 491.65 807.38 493.45C809.16 503.89 806.04 515 797.98 523.06L797.99 523.05Z" fill="white"/>
<path d="M799.94 556.35C788.55 556.35 778.48 550.7 772.36 542.06C778.47 533.41 788.54 527.76 799.94 527.76C811.34 527.76 821.41 533.41 827.52 542.06C821.4 550.7 811.33 556.35 799.94 556.35Z" fill="white"/>
<path d="M777.78 581.27C769.73 573.22 766.6 562.1 768.38 551.66C778.82 549.86 789.93 552.99 797.99 561.05C806.05 569.11 809.18 580.23 807.38 590.66C796.94 592.44 785.83 589.32 777.77 581.26L777.78 581.27Z" fill="white"/>
<path d="M666.14 748.84C683.145 748.84 696.93 735.055 696.93 718.05C696.93 701.045 683.145 687.26 666.14 687.26C649.135 687.26 635.35 701.045 635.35 718.05C635.35 735.055 649.135 748.84 666.14 748.84Z" fill="#FDAFE5"/>
<path d="M666.14 730.1C672.795 730.1 678.19 724.705 678.19 718.05C678.19 711.395 672.795 706 666.14 706C659.485 706 654.09 711.395 654.09 718.05C654.09 724.705 659.485 730.1 666.14 730.1Z" fill="#FD7625"/>
<path d="M651.84 759.22C651.84 747.83 657.49 737.76 666.13 731.64C674.78 737.75 680.43 747.82 680.43 759.22C680.43 770.62 674.78 780.69 666.13 786.8C657.49 780.68 651.84 770.61 651.84 759.22Z" fill="white"/>
<path d="M626.91 737.06C634.96 729.01 646.08 725.88 656.52 727.66C658.32 738.1 655.19 749.21 647.13 757.27C639.07 765.33 627.95 768.46 617.52 766.66C615.74 756.22 618.86 745.11 626.92 737.05L626.91 737.06Z" fill="white"/>
<path d="M624.96 703.76C636.35 703.76 646.42 709.41 652.54 718.05C646.43 726.7 636.36 732.35 624.96 732.35C613.56 732.35 603.49 726.7 597.38 718.05C603.5 709.41 613.57 703.76 624.96 703.76Z" fill="white"/>
<path d="M647.13 678.83C655.18 686.88 658.31 698 656.53 708.44C646.09 710.24 634.98 707.11 626.92 699.05C618.86 690.99 615.73 679.87 617.53 669.44C627.97 667.66 639.08 670.78 647.14 678.84L647.13 678.83Z" fill="white"/>
<path d="M680.43 676.88C680.43 688.27 674.78 698.34 666.14 704.46C657.49 698.35 651.84 688.28 651.84 676.88C651.84 665.48 657.49 655.41 666.14 649.3C674.78 655.42 680.43 665.49 680.43 676.88Z" fill="white"/>
<path d="M705.36 699.04C697.31 707.09 686.19 710.22 675.75 708.44C673.95 698 677.08 686.89 685.14 678.83C693.2 670.77 704.32 667.64 714.75 669.44C716.53 679.88 713.41 690.99 705.35 699.05L705.36 699.04Z" fill="white"/>
<path d="M707.31 732.34C695.92 732.34 685.85 726.69 679.73 718.05C685.84 709.4 695.91 703.75 707.31 703.75C718.71 703.75 728.78 709.4 734.89 718.05C728.77 726.69 718.7 732.34 707.31 732.34Z" fill="white"/>
<path d="M685.14 757.27C677.09 749.22 673.96 738.1 675.74 727.66C686.18 725.86 697.29 728.99 705.35 737.05C713.41 745.11 716.54 756.23 714.74 766.66C704.3 768.44 693.19 765.32 685.13 757.26L685.14 757.27Z" fill="white"/>
<path d="M419.02 748.84C436.025 748.84 449.81 735.055 449.81 718.05C449.81 701.045 436.025 687.26 419.02 687.26C402.015 687.26 388.23 701.045 388.23 718.05C388.23 735.055 402.015 748.84 419.02 748.84Z" fill="#FDAFE5"/>
<path d="M419.02 730.1C425.675 730.1 431.07 724.705 431.07 718.05C431.07 711.395 425.675 706 419.02 706C412.365 706 406.97 711.395 406.97 718.05C406.97 724.705 412.365 730.1 419.02 730.1Z" fill="#FD7625"/>
<path d="M404.72 759.23C404.72 747.84 410.37 737.77 419.01 731.65C427.66 737.76 433.31 747.83 433.31 759.23C433.31 770.63 427.66 780.7 419.01 786.81C410.37 780.69 404.72 770.62 404.72 759.23Z" fill="white"/>
<path d="M379.8 737.06C387.85 729.01 398.97 725.88 409.41 727.66C411.21 738.1 408.08 749.21 400.02 757.27C391.96 765.33 380.84 768.46 370.41 766.66C368.63 756.22 371.75 745.11 379.81 737.05L379.8 737.06Z" fill="white"/>
<path d="M377.84 703.76C389.23 703.76 399.3 709.41 405.42 718.05C399.31 726.7 389.24 732.35 377.84 732.35C366.44 732.35 356.37 726.7 350.26 718.05C356.38 709.41 366.45 703.76 377.84 703.76Z" fill="white"/>
<path d="M400.01 678.83C408.06 686.88 411.19 698 409.41 708.44C398.97 710.24 387.86 707.11 379.8 699.05C371.74 690.99 368.61 679.87 370.41 669.44C380.85 667.66 391.96 670.78 400.02 678.84L400.01 678.83Z" fill="white"/>
<path d="M433.31 676.88C433.31 688.27 427.66 698.34 419.02 704.46C410.37 698.35 404.72 688.28 404.72 676.88C404.72 665.48 410.37 655.41 419.02 649.3C427.66 655.42 433.31 665.49 433.31 676.88Z" fill="white"/>
<path d="M458.24 699.04C450.19 707.09 439.07 710.22 428.63 708.44C426.83 698 429.96 686.89 438.02 678.83C446.08 670.77 457.2 667.64 467.63 669.44C469.41 679.88 466.29 690.99 458.23 699.05L458.24 699.04Z" fill="white"/>
<path d="M460.19 732.34C448.8 732.34 438.73 726.69 432.61 718.05C438.72 709.4 448.79 703.75 460.19 703.75C471.59 703.75 481.66 709.4 487.77 718.05C481.65 726.69 471.58 732.34 460.19 732.34Z" fill="white"/>
<path d="M438.02 757.27C429.97 749.22 426.84 738.1 428.62 727.66C439.06 725.86 450.17 728.99 458.23 737.05C466.29 745.11 469.42 756.23 467.62 766.66C457.18 768.44 446.07 765.32 438.01 757.26L438.02 757.27Z" fill="white"/>
<path d="M205.76 354.35H157.07V496.21H205.76V354.35Z" fill="#010101"/>
<path d="M181.41 0L61.8701 198.51H300.95L181.41 0Z" fill="#F5F5FA"/>
<path d="M181.41 106.08L44.9302 304.59H317.89L181.41 106.08Z" fill="#F5F5FA"/>
<path d="M181.41 205.34L28.2998 403.85H334.52L181.41 205.34Z" fill="#F5F5FA"/>
</g>
<defs>
<clipPath id="clip0_1380_416">
<rect width="1107.52" height="987.47" fill="white"/>
</clipPath>
</defs>
</svg>
`,
                        withExternalLayout: !0,
                      }),
                    e(L, {
                      children: e(ce, {
                        className: "framer-1srx3mq-container",
                        children: e(Le, {
                          customColor: "rgb(255, 255, 255)",
                          customPadding: 0,
                          customStrokeWidth: 2,
                          customSvgCode:
                            '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M0 20C11.0454 20 20 11.0457 20 0C20 11.0457 28.9546 20 40 20C28.9546 20 20 28.9543 20 40C20 28.9543 11.0454 20 0 20Z" fill="#AFFC41"/> </svg>',
                          height: "100%",
                          id: "b13Ab1Tc4",
                          layoutId: "b13Ab1Tc4",
                          lineCap: "butt",
                          lineJoin: "miter",
                          style: { height: "100%", width: "100%" },
                          width: "100%",
                        }),
                      }),
                    }),
                    e(L, {
                      children: e(ce, {
                        className: "framer-y1ugxs-container",
                        children: e(Le, {
                          customColor: "rgb(255, 255, 255)",
                          customPadding: 0,
                          customStrokeWidth: 2,
                          customSvgCode:
                            '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M0 20C11.0454 20 20 11.0457 20 0C20 11.0457 28.9546 20 40 20C28.9546 20 20 28.9543 20 40C20 28.9543 11.0454 20 0 20Z" fill="#AFFC41"/> </svg>',
                          height: "100%",
                          id: "aN5pVY1Xn",
                          layoutId: "aN5pVY1Xn",
                          lineCap: "butt",
                          lineJoin: "miter",
                          style: { height: "100%", width: "100%" },
                          width: "100%",
                        }),
                      }),
                    }),
                    e("div", {
                      className: "framer-g9tx6j",
                      children: e(L, {
                        children: e(ce, {
                          className: "framer-rcv0sd-container",
                          children: e(Le, {
                            customColor: "rgb(245, 245, 250)",
                            customPadding: 0,
                            customStrokeWidth: 2,
                            customSvgCode:
                              '<svg width="52" height="55" viewBox="0 0 52 55" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M28.328 -0.000679041C29.4664 0.400542 31.5658 1.28696 33.5066 3.15311C34.9622 4.55271 35.1115 8.42497 35.5407 9.33938C26.8911 4.05819 17.0938 1.5109 9.72255 5.915C5.3651 8.51827 3.4803 13.5475 1.65148 20.4243C-2.18345 34.8496 -1.01711 47.3434 23.672 54.0149C22.5336 53.6137 20.4342 52.7272 18.4934 50.8611C17.0378 49.4615 16.8885 45.5892 16.4593 44.6748C25.1089 49.956 34.9062 52.5033 42.2775 48.0992C46.6349 45.4959 48.529 40.4573 50.3485 33.5806C54.1835 19.1553 53.0171 6.66146 28.328 -0.0100098V-0.000679041ZM26.0047 38.3486C16.6926 38.3486 9.14405 33.2727 9.14405 27.0118C9.14405 20.7509 16.6926 15.6749 26.0047 15.6749C35.3167 15.6749 42.8653 20.7509 42.8653 27.0118C42.8653 33.2727 35.3167 38.3486 26.0047 38.3486Z" fill="#262626"/> </svg>',
                            height: "100%",
                            id: "le5s2mZ1Y",
                            layoutId: "le5s2mZ1Y",
                            lineCap: "butt",
                            lineJoin: "miter",
                            style: { height: "100%", width: "100%" },
                            width: "100%",
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                e("div", {
                  className: "framer-pslnse",
                  children: v("div", {
                    className: "framer-mtkb5g",
                    children: [
                      e(L, {
                        children: e(ce, {
                          className: "framer-1rjiao1-container",
                          children: e(Le, {
                            customColor: "rgb(255, 255, 255)",
                            customPadding: 0,
                            customStrokeWidth: 1.5,
                            customSvgCode:
                              '<svg width="2400" height="127" viewBox="0 0 2400 127" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0 126.75C5.94 126.75 5.94 120.75 11.89 120.75C17.84 120.75 17.83 126.75 23.78 126.75C29.73 126.75 29.72 120.75 35.67 120.75C41.61 120.75 41.61 126.75 47.56 126.75C53.5 126.75 53.5 120.75 59.45 120.75C65.39 120.75 65.39 126.75 71.34 126.75C77.29 126.75 77.28 120.75 83.22 120.75C89.16 120.75 89.16 126.75 95.1 126.75C101.04 126.75 101.04 120.75 106.98 120.75C112.92 120.75 112.92 126.75 118.86 126.75C124.8 126.75 124.8 120.75 130.74 120.75C136.68 120.75 136.68 126.75 142.62 126.75C148.56 126.75 148.56 120.75 154.5 120.75C160.44 120.75 160.44 126.75 166.38 126.75C172.32 126.75 172.32 120.75 178.26 120.75C184.2 120.75 184.2 126.75 190.14 126.75C196.08 126.75 196.08 120.75 202.02 120.75C207.96 120.75 207.96 126.75 213.9 126.75C219.84 126.75 219.84 120.75 225.78 120.75C231.72 120.75 231.72 126.75 237.66 126.75C243.6 126.75 243.6 120.75 249.54 120.75C255.48 120.75 255.48 126.75 261.42 126.75C267.36 126.75 267.36 120.75 273.3 120.75C279.24 120.75 279.24 126.75 285.18 126.75C291.12 126.75 291.12 120.75 297.06 120.75C303 120.75 303 126.75 308.94 126.75C314.88 126.75 314.88 120.75 320.82 120.75C326.76 120.75 326.76 126.75 332.7 126.75C338.64 126.75 338.64 120.75 344.58 120.75C350.52 120.75 350.52 126.75 356.46 126.75C362.4 126.75 362.4 120.75 368.34 120.75C374.28 120.75 374.28 126.75 380.22 126.75C386.16 126.75 386.16 120.75 392.1 120.75C398.04 120.75 398.04 126.75 403.98 126.75C409.92 126.75 409.92 120.75 415.86 120.75C421.8 120.75 421.8 126.75 427.74 126.75C433.68 126.75 433.68 120.75 439.62 120.75C445.56 120.75 445.56 126.75 451.5 126.75C457.44 126.75 457.44 120.75 463.38 120.75C469.32 120.75 469.32 126.75 475.26 126.75C481.2 126.75 481.2 120.75 487.14 120.75C493.08 120.75 493.08 126.75 499.02 126.75C504.96 126.75 504.96 120.75 510.9 120.75C516.84 120.75 516.84 126.75 522.78 126.75C528.72 126.75 528.72 120.75 534.66 120.75C540.6 120.75 540.6 126.75 546.54 126.75C552.48 126.75 552.48 120.75 558.42 120.75C564.36 120.75 564.36 126.75 570.3 126.75C576.24 126.75 576.24 120.75 582.18 120.75C588.12 120.75 588.12 126.75 594.06 126.75C600 126.75 600 120.75 605.94 120.75C611.88 120.75 611.88 126.75 617.82 126.75C623.76 126.75 623.76 120.75 629.7 120.75C635.64 120.75 635.64 126.75 641.58 126.75C647.52 126.75 647.52 120.75 653.46 120.75C659.4 120.75 659.4 126.75 665.34 126.75C671.28 126.75 671.28 120.75 677.22 120.75C683.16 120.75 683.16 126.75 689.1 126.75C695.04 126.75 695.04 120.75 700.98 120.75C706.92 120.75 706.92 126.75 712.86 126.75C718.8 126.75 718.8 120.75 724.74 120.75C730.68 120.75 730.68 126.75 736.62 126.75C742.56 126.75 742.56 120.75 748.5 120.75C754.44 120.75 754.44 126.75 760.38 126.75C766.32 126.75 766.32 120.75 772.26 120.75C778.2 120.75 778.2 126.75 784.14 126.75C790.08 126.75 790.08 120.75 796.02 120.75C801.96 120.75 801.96 126.75 807.9 126.75C813.84 126.75 813.84 120.75 819.78 120.75C825.72 120.75 825.72 126.75 831.66 126.75C837.6 126.75 837.6 120.75 843.54 120.75C849.48 120.75 849.48 126.75 855.42 126.75C861.36 126.75 861.36 120.75 867.3 120.75C873.24 120.75 873.24 126.75 879.18 126.75C885.12 126.75 885.12 120.75 891.06 120.75C897 120.75 897 126.75 902.94 126.75C908.88 126.75 908.88 120.75 914.82 120.75C920.76 120.75 920.76 126.75 926.7 126.75C932.64 126.75 932.64 120.75 938.58 120.75C944.52 120.75 944.52 126.75 950.46 126.75C956.4 126.75 956.4 120.75 962.34 120.75C968.28 120.75 968.28 126.75 974.22 126.75C980.16 126.75 980.16 120.75 986.1 120.75C992.04 120.75 992.04 126.75 997.98 126.75C1003.92 126.75 1003.92 120.75 1009.86 120.75C1015.8 120.75 1015.8 126.75 1021.74 126.75C1027.68 126.75 1027.68 120.75 1033.62 120.75C1039.56 120.75 1039.56 126.75 1045.5 126.75C1051.44 126.75 1051.44 120.75 1057.38 120.75C1063.32 120.75 1063.32 126.75 1069.26 126.75C1075.2 126.75 1075.2 120.75 1081.14 120.75C1087.08 120.75 1087.08 126.75 1093.02 126.75C1098.96 126.75 1098.96 120.75 1104.9 120.75C1110.84 120.75 1110.84 126.75 1116.78 126.75C1122.72 126.75 1122.72 120.75 1128.66 120.75C1134.6 120.75 1134.6 126.75 1140.54 126.75C1146.48 126.75 1146.48 120.75 1152.42 120.75C1158.36 120.75 1158.36 126.75 1164.3 126.75C1170.24 126.75 1170.24 120.75 1176.18 120.75C1182.12 120.75 1182.12 126.75 1188.06 126.75C1194 126.75 1194 120.75 1199.94 120.75C1205.88 120.75 1205.88 126.75 1211.83 126.75C1217.78 126.75 1217.77 120.75 1223.72 120.75C1229.67 120.75 1229.66 126.75 1235.61 126.75C1241.55 126.75 1241.55 120.75 1247.5 120.75C1253.44 120.75 1253.44 126.75 1259.39 126.75C1265.33 126.75 1265.33 120.75 1271.28 120.75C1277.23 120.75 1277.22 126.75 1283.16 126.75C1289.1 126.75 1289.1 120.75 1295.04 120.75C1300.98 120.75 1300.98 126.75 1306.92 126.75C1312.86 126.75 1312.86 120.75 1318.8 120.75C1324.74 120.75 1324.74 126.75 1330.68 126.75C1336.62 126.75 1336.62 120.75 1342.56 120.75C1348.5 120.75 1348.5 126.75 1354.44 126.75C1360.38 126.75 1360.38 120.75 1366.32 120.75C1372.26 120.75 1372.26 126.75 1378.2 126.75C1384.14 126.75 1384.14 120.75 1390.08 120.75C1396.02 120.75 1396.02 126.75 1401.96 126.75C1407.9 126.75 1407.9 120.75 1413.84 120.75C1419.78 120.75 1419.78 126.75 1425.72 126.75C1431.66 126.75 1431.66 120.75 1437.6 120.75C1443.54 120.75 1443.54 126.75 1449.48 126.75C1455.42 126.75 1455.42 120.75 1461.36 120.75C1467.3 120.75 1467.3 126.75 1473.24 126.75C1479.18 126.75 1479.18 120.75 1485.12 120.75C1491.06 120.75 1491.06 126.75 1497 126.75C1502.94 126.75 1502.94 120.75 1508.88 120.75C1514.82 120.75 1514.82 126.75 1520.76 126.75C1526.7 126.75 1526.7 120.75 1532.64 120.75C1538.58 120.75 1538.58 126.75 1544.52 126.75C1550.46 126.75 1550.46 120.75 1556.4 120.75C1562.34 120.75 1562.34 126.75 1568.28 126.75C1574.22 126.75 1574.22 120.75 1580.16 120.75C1586.1 120.75 1586.1 126.75 1592.04 126.75C1597.98 126.75 1597.98 120.75 1603.92 120.75C1609.86 120.75 1609.86 126.75 1615.8 126.75C1621.74 126.75 1621.74 120.75 1627.68 120.75C1633.62 120.75 1633.62 126.75 1639.56 126.75C1645.5 126.75 1645.5 120.75 1651.44 120.75C1657.38 120.75 1657.38 126.75 1663.32 126.75C1669.26 126.75 1669.26 120.75 1675.2 120.75C1681.14 120.75 1681.14 126.75 1687.08 126.75C1693.02 126.75 1693.02 120.75 1698.96 120.75C1704.9 120.75 1704.9 126.75 1710.84 126.75C1716.78 126.75 1716.78 120.75 1722.72 120.75C1728.66 120.75 1728.66 126.75 1734.6 126.75C1740.54 126.75 1740.54 120.75 1746.48 120.75C1752.42 120.75 1752.42 126.75 1758.36 126.75C1764.3 126.75 1764.3 120.75 1770.24 120.75C1776.18 120.75 1776.18 126.75 1782.12 126.75C1788.06 126.75 1788.06 120.75 1794 120.75C1799.94 120.75 1799.94 126.75 1805.88 126.75C1811.82 126.75 1811.82 120.75 1817.76 120.75C1823.7 120.75 1823.7 126.75 1829.64 126.75C1835.58 126.75 1835.58 120.75 1841.52 120.75C1847.46 120.75 1847.46 126.75 1853.4 126.75C1859.34 126.75 1859.34 120.75 1865.28 120.75C1871.22 120.75 1871.22 126.75 1877.16 126.75C1883.1 126.75 1883.1 120.75 1889.04 120.75C1894.98 120.75 1894.98 126.75 1900.92 126.75C1906.86 126.75 1906.86 120.75 1912.8 120.75C1918.74 120.75 1918.74 126.75 1924.68 126.75C1930.62 126.75 1930.62 120.75 1936.56 120.75C1942.5 120.75 1942.5 126.75 1948.44 126.75C1954.38 126.75 1954.38 120.75 1960.32 120.75C1966.26 120.75 1966.26 126.75 1972.2 126.75C1978.14 126.75 1978.14 120.75 1984.08 120.75C1990.02 120.75 1990.02 126.75 1995.96 126.75C2001.9 126.75 2001.9 120.75 2007.84 120.75C2013.78 120.75 2013.78 126.75 2019.72 126.75C2025.66 126.75 2025.66 120.75 2031.6 120.75C2037.54 120.75 2037.54 126.75 2043.48 126.75C2049.42 126.75 2049.42 120.75 2055.36 120.75C2061.3 120.75 2061.3 126.75 2067.24 126.75C2073.18 126.75 2073.18 120.75 2079.12 120.75C2085.06 120.75 2085.06 126.75 2091 126.75C2096.94 126.75 2096.94 120.75 2102.88 120.75C2108.82 120.75 2108.82 126.75 2114.76 126.75C2120.7 126.75 2120.7 120.75 2126.64 120.75C2132.58 120.75 2132.58 126.75 2138.52 126.75C2144.46 126.75 2144.46 120.75 2150.4 120.75C2156.34 120.75 2156.34 126.75 2162.28 126.75C2168.22 126.75 2168.22 120.75 2174.16 120.75C2180.1 120.75 2180.1 126.75 2186.04 126.75C2191.98 126.75 2191.98 120.75 2197.92 120.75C2203.86 120.75 2203.86 126.75 2209.8 126.75C2215.74 126.75 2215.74 120.75 2221.68 120.75C2227.62 120.75 2227.62 126.75 2233.56 126.75C2239.5 126.75 2239.5 120.75 2245.44 120.75C2251.38 120.75 2251.38 126.75 2257.32 126.75C2263.26 126.75 2263.26 120.75 2269.2 120.75C2275.14 120.75 2275.14 126.75 2281.08 126.75C2287.02 126.75 2287.02 120.75 2292.96 120.75C2298.9 120.75 2298.9 126.75 2304.84 126.75C2310.78 126.75 2310.78 120.75 2316.72 120.75C2322.66 120.75 2322.66 126.75 2328.6 126.75C2334.54 126.75 2334.54 120.75 2340.48 120.75C2346.42 120.75 2346.42 126.75 2352.36 126.75C2358.3 126.75 2358.3 120.75 2364.24 120.75C2370.18 120.75 2370.18 126.75 2376.12 126.75C2382.06 126.75 2382.06 120.75 2388 120.75C2393.94 120.75 2393.94 126.75 2399.88 126.75V6.75C2393.94 6.75 2393.94 0.75 2388 0.75C2382.06 0.75 2382.06 6.75 2376.12 6.75C2370.18 6.75 2370.18 0.75 2364.24 0.75C2358.3 0.75 2358.3 6.75 2352.36 6.75C2346.42 6.75 2346.42 0.75 2340.48 0.75C2334.54 0.75 2334.54 6.75 2328.6 6.75C2322.66 6.75 2322.66 0.75 2316.72 0.75C2310.78 0.75 2310.78 6.75 2304.84 6.75C2298.9 6.75 2298.9 0.75 2292.96 0.75C2287.02 0.75 2287.02 6.75 2281.08 6.75C2275.14 6.75 2275.14 0.75 2269.2 0.75C2263.26 0.75 2263.26 6.75 2257.32 6.75C2251.38 6.75 2251.38 0.75 2245.44 0.75C2239.5 0.75 2239.5 6.75 2233.56 6.75C2227.62 6.75 2227.62 0.75 2221.68 0.75C2215.74 0.75 2215.74 6.75 2209.8 6.75C2203.86 6.75 2203.86 0.75 2197.92 0.75C2191.98 0.75 2191.98 6.75 2186.04 6.75C2180.1 6.75 2180.1 0.75 2174.16 0.75C2168.22 0.75 2168.22 6.75 2162.28 6.75C2156.34 6.75 2156.34 0.75 2150.4 0.75C2144.46 0.75 2144.46 6.75 2138.52 6.75C2132.58 6.75 2132.58 0.75 2126.64 0.75C2120.7 0.75 2120.7 6.75 2114.76 6.75C2108.82 6.75 2108.82 0.75 2102.88 0.75C2096.94 0.75 2096.94 6.75 2091 6.75C2085.06 6.75 2085.06 0.75 2079.12 0.75C2073.18 0.75 2073.18 6.75 2067.24 6.75C2061.3 6.75 2061.3 0.75 2055.36 0.75C2049.42 0.75 2049.42 6.75 2043.48 6.75C2037.54 6.75 2037.54 0.75 2031.6 0.75C2025.66 0.75 2025.66 6.75 2019.72 6.75C2013.78 6.75 2013.78 0.75 2007.84 0.75C2001.9 0.75 2001.9 6.75 1995.96 6.75C1990.02 6.75 1990.02 0.75 1984.08 0.75C1978.14 0.75 1978.14 6.75 1972.2 6.75C1966.26 6.75 1966.26 0.75 1960.32 0.75C1954.38 0.75 1954.38 6.75 1948.44 6.75C1942.5 6.75 1942.5 0.75 1936.56 0.75C1930.62 0.75 1930.62 6.75 1924.68 6.75C1918.74 6.75 1918.74 0.75 1912.8 0.75C1906.86 0.75 1906.86 6.75 1900.92 6.75C1894.98 6.75 1894.98 0.75 1889.04 0.75C1883.1 0.75 1883.1 6.75 1877.16 6.75C1871.22 6.75 1871.22 0.75 1865.28 0.75C1859.34 0.75 1859.34 6.75 1853.4 6.75C1847.46 6.75 1847.46 0.75 1841.52 0.75C1835.58 0.75 1835.58 6.75 1829.64 6.75C1823.7 6.75 1823.7 0.75 1817.76 0.75C1811.82 0.75 1811.82 6.75 1805.88 6.75C1799.94 6.75 1799.94 0.75 1794 0.75C1788.06 0.75 1788.06 6.75 1782.12 6.75C1776.18 6.75 1776.18 0.75 1770.24 0.75C1764.3 0.75 1764.3 6.75 1758.36 6.75C1752.42 6.75 1752.42 0.75 1746.48 0.75C1740.54 0.75 1740.54 6.75 1734.6 6.75C1728.66 6.75 1728.66 0.75 1722.72 0.75C1716.78 0.75 1716.78 6.75 1710.84 6.75C1704.9 6.75 1704.9 0.75 1698.96 0.75C1693.02 0.75 1693.02 6.75 1687.08 6.75C1681.14 6.75 1681.14 0.75 1675.2 0.75C1669.26 0.75 1669.26 6.75 1663.32 6.75C1657.38 6.75 1657.38 0.75 1651.44 0.75C1645.5 0.75 1645.5 6.75 1639.56 6.75C1633.62 6.75 1633.62 0.75 1627.68 0.75C1621.74 0.75 1621.74 6.75 1615.8 6.75C1609.86 6.75 1609.86 0.75 1603.92 0.75C1597.98 0.75 1597.98 6.75 1592.04 6.75C1586.1 6.75 1586.1 0.75 1580.16 0.75C1574.22 0.75 1574.22 6.75 1568.28 6.75C1562.34 6.75 1562.34 0.75 1556.4 0.75C1550.46 0.75 1550.46 6.75 1544.52 6.75C1538.58 6.75 1538.58 0.75 1532.64 0.75C1526.7 0.75 1526.7 6.75 1520.76 6.75C1514.82 6.75 1514.82 0.75 1508.88 0.75C1502.94 0.75 1502.94 6.75 1497 6.75C1491.06 6.75 1491.06 0.75 1485.12 0.75C1479.18 0.75 1479.18 6.75 1473.24 6.75C1467.3 6.75 1467.3 0.75 1461.36 0.75C1455.42 0.75 1455.42 6.75 1449.48 6.75C1443.54 6.75 1443.54 0.75 1437.6 0.75C1431.66 0.75 1431.66 6.75 1425.72 6.75C1419.78 6.75 1419.78 0.75 1413.84 0.75C1407.9 0.75 1407.9 6.75 1401.96 6.75C1396.02 6.75 1396.02 0.75 1390.08 0.75C1384.14 0.75 1384.14 6.75 1378.2 6.75C1372.26 6.75 1372.26 0.75 1366.32 0.75C1360.38 0.75 1360.38 6.75 1354.44 6.75C1348.5 6.75 1348.5 0.75 1342.56 0.75C1336.62 0.75 1336.62 6.75 1330.68 6.75C1324.74 6.75 1324.74 0.75 1318.8 0.75C1312.86 0.75 1312.86 6.75 1306.92 6.75C1300.98 6.75 1300.98 0.75 1295.04 0.75C1289.1 0.75 1289.1 6.75 1283.16 6.75C1277.22 6.75 1277.22 0.75 1271.28 0.75C1265.34 0.75 1265.34 6.75 1259.39 6.75C1253.45 6.75 1253.45 0.75 1247.5 0.75C1241.56 0.75 1241.56 6.75 1235.61 6.75C1229.67 6.75 1229.67 0.75 1223.72 0.75C1217.77 0.75 1217.78 6.75 1211.83 6.75C1205.88 6.75 1205.89 0.75 1199.94 0.75C1194 0.75 1194 6.75 1188.06 6.75C1182.12 6.75 1182.12 0.75 1176.18 0.75C1170.24 0.75 1170.24 6.75 1164.3 6.75C1158.36 6.75 1158.36 0.75 1152.42 0.75C1146.48 0.75 1146.48 6.75 1140.54 6.75C1134.6 6.75 1134.6 0.75 1128.66 0.75C1122.72 0.75 1122.72 6.75 1116.78 6.75C1110.84 6.75 1110.84 0.75 1104.9 0.75C1098.96 0.75 1098.96 6.75 1093.02 6.75C1087.08 6.75 1087.08 0.75 1081.14 0.75C1075.2 0.75 1075.2 6.75 1069.26 6.75C1063.32 6.75 1063.32 0.75 1057.38 0.75C1051.44 0.75 1051.44 6.75 1045.5 6.75C1039.56 6.75 1039.56 0.75 1033.62 0.75C1027.68 0.75 1027.68 6.75 1021.74 6.75C1015.8 6.75 1015.8 0.75 1009.86 0.75C1003.92 0.75 1003.92 6.75 997.98 6.75C992.04 6.75 992.04 0.75 986.1 0.75C980.16 0.75 980.16 6.75 974.22 6.75C968.28 6.75 968.28 0.75 962.34 0.75C956.4 0.75 956.4 6.75 950.46 6.75C944.52 6.75 944.52 0.75 938.58 0.75C932.64 0.75 932.64 6.75 926.7 6.75C920.76 6.75 920.76 0.75 914.82 0.75C908.88 0.75 908.88 6.75 902.94 6.75C897 6.75 897 0.75 891.06 0.75C885.12 0.75 885.12 6.75 879.18 6.75C873.24 6.75 873.24 0.75 867.3 0.75C861.36 0.75 861.36 6.75 855.42 6.75C849.48 6.75 849.48 0.75 843.54 0.75C837.6 0.75 837.6 6.75 831.66 6.75C825.72 6.75 825.72 0.75 819.78 0.75C813.84 0.75 813.84 6.75 807.9 6.75C801.96 6.75 801.96 0.75 796.02 0.75C790.08 0.75 790.08 6.75 784.14 6.75C778.2 6.75 778.2 0.75 772.26 0.75C766.32 0.75 766.32 6.75 760.38 6.75C754.44 6.75 754.44 0.75 748.5 0.75C742.56 0.75 742.56 6.75 736.62 6.75C730.68 6.75 730.68 0.75 724.74 0.75C718.8 0.75 718.8 6.75 712.86 6.75C706.92 6.75 706.92 0.75 700.98 0.75C695.04 0.75 695.04 6.75 689.1 6.75C683.16 6.75 683.16 0.75 677.22 0.75C671.28 0.75 671.28 6.75 665.34 6.75C659.4 6.75 659.4 0.75 653.46 0.75C647.52 0.75 647.52 6.75 641.58 6.75C635.64 6.75 635.64 0.75 629.7 0.75C623.76 0.75 623.76 6.75 617.82 6.75C611.88 6.75 611.88 0.75 605.94 0.75C600 0.75 600 6.75 594.06 6.75C588.12 6.75 588.12 0.75 582.18 0.75C576.24 0.75 576.24 6.75 570.3 6.75C564.36 6.75 564.36 0.75 558.42 0.75C552.48 0.75 552.48 6.75 546.54 6.75C540.6 6.75 540.6 0.75 534.66 0.75C528.72 0.75 528.72 6.75 522.78 6.75C516.84 6.75 516.84 0.75 510.9 0.75C504.96 0.75 504.96 6.75 499.02 6.75C493.08 6.75 493.08 0.75 487.14 0.75C481.2 0.75 481.2 6.75 475.26 6.75C469.32 6.75 469.32 0.75 463.38 0.75C457.44 0.75 457.44 6.75 451.5 6.75C445.56 6.75 445.56 0.75 439.62 0.75C433.68 0.75 433.68 6.75 427.74 6.75C421.8 6.75 421.8 0.75 415.86 0.75C409.92 0.75 409.92 6.75 403.98 6.75C398.04 6.75 398.04 0.75 392.1 0.75C386.16 0.75 386.16 6.75 380.22 6.75C374.28 6.75 374.28 0.75 368.34 0.75C362.4 0.75 362.4 6.75 356.46 6.75C350.52 6.75 350.52 0.75 344.58 0.75C338.64 0.75 338.64 6.75 332.7 6.75C326.76 6.75 326.76 0.75 320.82 0.75C314.88 0.75 314.88 6.75 308.94 6.75C303 6.75 303 0.75 297.06 0.75C291.12 0.75 291.12 6.75 285.18 6.75C279.24 6.75 279.24 0.75 273.3 0.75C267.36 0.75 267.36 6.75 261.42 6.75C255.48 6.75 255.48 0.75 249.54 0.75C243.6 0.75 243.6 6.75 237.66 6.75C231.72 6.75 231.72 0.75 225.78 0.75C219.84 0.75 219.84 6.75 213.9 6.75C207.96 6.75 207.96 0.75 202.02 0.75C196.08 0.75 196.08 6.75 190.14 6.75C184.2 6.75 184.2 0.75 178.26 0.75C172.32 0.75 172.32 6.75 166.38 6.75C160.44 6.75 160.44 0.75 154.5 0.75C148.56 0.75 148.56 6.75 142.62 6.75C136.68 6.75 136.68 0.75 130.74 0.75C124.8 0.75 124.8 6.75 118.86 6.75C112.92 6.75 112.92 0.75 106.98 0.75C101.04 0.75 101.04 6.75 95.1 6.75C89.16 6.75 89.16 0.75 83.22 0.75C77.28 0.75 77.28 6.75 71.34 6.75C65.4 6.75 65.4 0.75 59.45 0.75C53.51 0.75 53.51 6.75 47.56 6.75C41.62 6.75 41.62 0.75 35.67 0.75C29.73 0.75 29.73 6.75 23.78 6.75C17.83 6.75 17.83 0.75 11.89 0.75C5.95 0.75 5.94 6.75 0 6.75V126.75Z" fill="#BBBBBB"/> </svg>',
                            height: "100%",
                            id: "t0DRK932M",
                            layoutId: "t0DRK932M",
                            lineCap: "butt",
                            lineJoin: "miter",
                            style: { height: "100%", width: "100%" },
                            width: "100%",
                          }),
                        }),
                      }),
                      e(L, {
                        children: e(ce, {
                          className: "framer-ekd1ve-container",
                          children: e(Le, {
                            customColor: "rgb(23, 107, 52)",
                            customPadding: 0,
                            customStrokeWidth: 2,
                            customSvgCode:
                              '<svg width="2400" height="8" viewBox="0 0 2400 8" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2400 6.75C2394.06 6.75 2394.06 0.75 2388.12 0.75C2382.18 0.75 2382.18 6.75 2376.24 6.75C2370.3 6.75 2370.3 0.75 2364.36 0.75C2358.42 0.75 2358.42 6.75 2352.48 6.75C2346.54 6.75 2346.54 0.75 2340.6 0.75C2334.66 0.75 2334.66 6.75 2328.72 6.75C2322.78 6.75 2322.78 0.75 2316.84 0.75C2310.9 0.75 2310.9 6.75 2304.96 6.75C2299.02 6.75 2299.02 0.75 2293.08 0.75C2287.14 0.75 2287.14 6.75 2281.2 6.75C2275.26 6.75 2275.26 0.75 2269.32 0.75C2263.38 0.75 2263.38 6.75 2257.44 6.75C2251.5 6.75 2251.5 0.75 2245.56 0.75C2239.62 0.75 2239.62 6.75 2233.68 6.75C2227.74 6.75 2227.74 0.75 2221.8 0.75C2215.86 0.75 2215.86 6.75 2209.92 6.75C2203.98 6.75 2203.98 0.75 2198.04 0.75C2192.1 0.75 2192.1 6.75 2186.16 6.75C2180.22 6.75 2180.22 0.75 2174.28 0.75C2168.34 0.75 2168.34 6.75 2162.4 6.75C2156.46 6.75 2156.46 0.75 2150.52 0.75C2144.58 0.75 2144.58 6.75 2138.64 6.75C2132.7 6.75 2132.7 0.75 2126.76 0.75C2120.82 0.75 2120.82 6.75 2114.88 6.75C2108.94 6.75 2108.94 0.75 2103 0.75C2097.06 0.75 2097.06 6.75 2091.12 6.75C2085.18 6.75 2085.18 0.75 2079.24 0.75C2073.3 0.75 2073.3 6.75 2067.36 6.75C2061.42 6.75 2061.42 0.75 2055.48 0.75C2049.54 0.75 2049.54 6.75 2043.6 6.75C2037.66 6.75 2037.66 0.75 2031.72 0.75C2025.78 0.75 2025.78 6.75 2019.84 6.75C2013.9 6.75 2013.9 0.75 2007.96 0.75C2002.02 0.75 2002.02 6.75 1996.08 6.75C1990.14 6.75 1990.14 0.75 1984.2 0.75C1978.26 0.75 1978.26 6.75 1972.32 6.75C1966.38 6.75 1966.38 0.75 1960.44 0.75C1954.5 0.75 1954.5 6.75 1948.56 6.75C1942.62 6.75 1942.62 0.75 1936.68 0.75C1930.74 0.75 1930.74 6.75 1924.8 6.75C1918.86 6.75 1918.86 0.75 1912.92 0.75C1906.98 0.75 1906.98 6.75 1901.04 6.75C1895.1 6.75 1895.1 0.75 1889.16 0.75C1883.22 0.75 1883.22 6.75 1877.28 6.75C1871.34 6.75 1871.34 0.75 1865.4 0.75C1859.46 0.75 1859.46 6.75 1853.52 6.75C1847.58 6.75 1847.58 0.75 1841.64 0.75C1835.7 0.75 1835.7 6.75 1829.76 6.75C1823.82 6.75 1823.82 0.75 1817.88 0.75C1811.94 0.75 1811.94 6.75 1806 6.75C1800.06 6.75 1800.06 0.75 1794.12 0.75C1788.18 0.75 1788.18 6.75 1782.24 6.75C1776.3 6.75 1776.3 0.75 1770.36 0.75C1764.42 0.75 1764.42 6.75 1758.48 6.75C1752.54 6.75 1752.54 0.75 1746.6 0.75C1740.66 0.75 1740.66 6.75 1734.72 6.75C1728.78 6.75 1728.78 0.75 1722.84 0.75C1716.9 0.75 1716.9 6.75 1710.96 6.75C1705.02 6.75 1705.02 0.75 1699.08 0.75C1693.14 0.75 1693.14 6.75 1687.2 6.75C1681.26 6.75 1681.26 0.75 1675.32 0.75C1669.38 0.75 1669.38 6.75 1663.44 6.75C1657.5 6.75 1657.5 0.75 1651.56 0.75C1645.62 0.75 1645.62 6.75 1639.68 6.75C1633.74 6.75 1633.74 0.75 1627.8 0.75C1621.86 0.75 1621.86 6.75 1615.92 6.75C1609.98 6.75 1609.98 0.75 1604.04 0.75C1598.1 0.75 1598.1 6.75 1592.16 6.75C1586.22 6.75 1586.22 0.75 1580.28 0.75C1574.34 0.75 1574.34 6.75 1568.4 6.75C1562.46 6.75 1562.46 0.75 1556.52 0.75C1550.58 0.75 1550.58 6.75 1544.64 6.75C1538.7 6.75 1538.7 0.75 1532.76 0.75C1526.82 0.75 1526.82 6.75 1520.88 6.75C1514.94 6.75 1514.94 0.75 1509 0.75C1503.06 0.75 1503.06 6.75 1497.12 6.75C1491.18 6.75 1491.18 0.75 1485.24 0.75C1479.3 0.75 1479.3 6.75 1473.36 6.75C1467.42 6.75 1467.42 0.75 1461.48 0.75C1455.54 0.75 1455.54 6.75 1449.6 6.75C1443.66 6.75 1443.66 0.75 1437.72 0.75C1431.78 0.75 1431.78 6.75 1425.84 6.75C1419.9 6.75 1419.9 0.75 1413.96 0.75C1408.02 0.75 1408.02 6.75 1402.08 6.75C1396.14 6.75 1396.14 0.75 1390.2 0.75C1384.26 0.75 1384.26 6.75 1378.32 6.75C1372.38 6.75 1372.38 0.75 1366.44 0.75C1360.5 0.75 1360.5 6.75 1354.56 6.75C1348.62 6.75 1348.62 0.75 1342.68 0.75C1336.74 0.75 1336.74 6.75 1330.8 6.75C1324.86 6.75 1324.86 0.75 1318.92 0.75C1312.98 0.75 1312.98 6.75 1307.04 6.75C1301.1 6.75 1301.1 0.75 1295.16 0.75C1289.22 0.75 1289.22 6.75 1283.28 6.75C1277.34 6.75 1277.34 0.75 1271.4 0.75C1265.46 0.75 1265.46 6.75 1259.51 6.75C1253.57 6.75 1253.57 0.75 1247.62 0.75C1241.68 0.75 1241.68 6.75 1235.73 6.75C1229.79 6.75 1229.79 0.75 1223.84 0.75C1217.89 0.75 1217.9 6.75 1211.95 6.75C1206 6.75 1206.01 0.75 1200.06 0.75C1194.12 0.75 1194.12 6.75 1188.18 6.75C1182.24 6.75 1182.24 0.75 1176.3 0.75C1170.36 0.75 1170.36 6.75 1164.42 6.75C1158.48 6.75 1158.48 0.75 1152.54 0.75C1146.6 0.75 1146.6 6.75 1140.66 6.75C1134.72 6.75 1134.72 0.75 1128.78 0.75C1122.84 0.75 1122.84 6.75 1116.9 6.75C1110.96 6.75 1110.96 0.75 1105.02 0.75C1099.08 0.75 1099.08 6.75 1093.14 6.75C1087.2 6.75 1087.2 0.75 1081.26 0.75C1075.32 0.75 1075.32 6.75 1069.38 6.75C1063.44 6.75 1063.44 0.75 1057.5 0.75C1051.56 0.75 1051.56 6.75 1045.62 6.75C1039.68 6.75 1039.68 0.75 1033.74 0.75C1027.8 0.75 1027.8 6.75 1021.86 6.75C1015.92 6.75 1015.92 0.75 1009.98 0.75C1004.04 0.75 1004.04 6.75 998.1 6.75C992.16 6.75 992.16 0.75 986.22 0.75C980.28 0.75 980.28 6.75 974.34 6.75C968.4 6.75 968.4 0.75 962.46 0.75C956.52 0.75 956.52 6.75 950.58 6.75C944.64 6.75 944.64 0.75 938.7 0.75C932.76 0.75 932.76 6.75 926.82 6.75C920.88 6.75 920.88 0.75 914.94 0.75C909 0.75 909 6.75 903.06 6.75C897.12 6.75 897.12 0.75 891.18 0.75C885.24 0.75 885.24 6.75 879.3 6.75C873.36 6.75 873.36 0.75 867.42 0.75C861.48 0.75 861.48 6.75 855.54 6.75C849.6 6.75 849.6 0.75 843.66 0.75C837.72 0.75 837.72 6.75 831.78 6.75C825.84 6.75 825.84 0.75 819.9 0.75C813.96 0.75 813.96 6.75 808.02 6.75C802.08 6.75 802.08 0.75 796.14 0.75C790.2 0.75 790.2 6.75 784.26 6.75C778.32 6.75 778.32 0.75 772.38 0.75C766.44 0.75 766.44 6.75 760.5 6.75C754.56 6.75 754.56 0.75 748.62 0.75C742.68 0.75 742.68 6.75 736.74 6.75C730.8 6.75 730.8 0.75 724.86 0.75C718.92 0.75 718.92 6.75 712.98 6.75C707.04 6.75 707.04 0.75 701.1 0.75C695.16 0.75 695.16 6.75 689.22 6.75C683.28 6.75 683.28 0.75 677.34 0.75C671.4 0.75 671.4 6.75 665.46 6.75C659.52 6.75 659.52 0.75 653.58 0.75C647.64 0.75 647.64 6.75 641.7 6.75C635.76 6.75 635.76 0.75 629.82 0.75C623.88 0.75 623.88 6.75 617.94 6.75C612 6.75 612 0.75 606.06 0.75C600.12 0.75 600.12 6.75 594.18 6.75C588.24 6.75 588.24 0.75 582.3 0.75C576.36 0.75 576.36 6.75 570.42 6.75C564.48 6.75 564.48 0.75 558.54 0.75C552.6 0.75 552.6 6.75 546.66 6.75C540.72 6.75 540.72 0.75 534.78 0.75C528.84 0.75 528.84 6.75 522.9 6.75C516.96 6.75 516.96 0.75 511.02 0.75C505.08 0.75 505.08 6.75 499.14 6.75C493.2 6.75 493.2 0.75 487.26 0.75C481.32 0.75 481.32 6.75 475.38 6.75C469.44 6.75 469.44 0.75 463.5 0.75C457.56 0.75 457.56 6.75 451.62 6.75C445.68 6.75 445.68 0.75 439.74 0.75C433.8 0.75 433.8 6.75 427.86 6.75C421.92 6.75 421.92 0.75 415.98 0.75C410.04 0.75 410.04 6.75 404.1 6.75C398.16 6.75 398.16 0.75 392.22 0.75C386.28 0.75 386.28 6.75 380.34 6.75C374.4 6.75 374.4 0.75 368.46 0.75C362.52 0.75 362.52 6.75 356.58 6.75C350.64 6.75 350.64 0.75 344.7 0.75C338.76 0.75 338.76 6.75 332.82 6.75C326.88 6.75 326.88 0.75 320.94 0.75C315 0.75 315 6.75 309.06 6.75C303.12 6.75 303.12 0.75 297.18 0.75C291.24 0.75 291.24 6.75 285.3 6.75C279.36 6.75 279.36 0.75 273.42 0.75C267.48 0.75 267.48 6.75 261.54 6.75C255.6 6.75 255.6 0.75 249.66 0.75C243.72 0.75 243.72 6.75 237.78 6.75C231.84 6.75 231.84 0.75 225.9 0.75C219.96 0.75 219.96 6.75 214.02 6.75C208.08 6.75 208.08 0.75 202.14 0.75C196.2 0.75 196.2 6.75 190.26 6.75C184.32 6.75 184.32 0.75 178.38 0.75C172.44 0.75 172.44 6.75 166.5 6.75C160.56 6.75 160.56 0.75 154.62 0.75C148.68 0.75 148.68 6.75 142.74 6.75C136.8 6.75 136.8 0.75 130.86 0.75C124.92 0.75 124.92 6.75 118.98 6.75C113.04 6.75 113.04 0.75 107.1 0.75C101.16 0.75 101.16 6.75 95.22 6.75C89.28 6.75 89.28 0.75 83.34 0.75C77.4 0.75 77.4 6.75 71.46 6.75C65.52 6.75 65.52 0.75 59.57 0.75C53.63 0.75 53.63 6.75 47.68 6.75C41.74 6.75 41.74 0.75 35.79 0.75C29.85 0.75 29.85 6.75 23.9 6.75C17.95 6.75 17.83 0.75 11.89 0.75C5.95 0.75 5.94 6.75 0 6.75" stroke="black" stroke-width="1.5" stroke-miterlimit="10"/> </svg>',
                            height: "100%",
                            id: "h0NEUQRiP",
                            layoutId: "h0NEUQRiP",
                            lineCap: "butt",
                            lineJoin: "miter",
                            style: { height: "100%", width: "100%" },
                            width: "100%",
                          }),
                        }),
                      }),
                      e(L, {
                        children: e(ce, {
                          className: "framer-djqccc-container",
                          children: e(qe, {
                            alignment: "center",
                            direction: "left",
                            fadeOptions: {
                              fadeAlpha: 0,
                              fadeContent: !1,
                              fadeInset: 0,
                              fadeWidth: 25,
                              overflow: !1,
                            },
                            gap: 32,
                            height: "100%",
                            hoverFactor: 0.7,
                            id: "Y1laeNzLD",
                            layoutId: "Y1laeNzLD",
                            padding: 0,
                            paddingBottom: 0,
                            paddingLeft: 0,
                            paddingPerSide: !1,
                            paddingRight: 0,
                            paddingTop: 0,
                            sizingOptions: { heightType: !0, widthType: !0 },
                            slots: [
                              e(L, {
                                height: 54,
                                width: "1630px",
                                children: e(ce, {
                                  className: "framer-10czy5b-container",
                                  children: e(It, {
                                    height: "100%",
                                    id: "j81PKotli",
                                    layoutId: "j81PKotli",
                                    style: { width: "100%" },
                                    width: "100%",
                                  }),
                                }),
                              }),
                            ],
                            speed: 75,
                            style: { height: "100%", width: "100%" },
                            width: "100%",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                v("div", {
                  className: "framer-1rayqvd",
                  "data-framer-name": "Frame 143",
                  name: "Frame 143",
                  children: [
                    e("div", {
                      className: "framer-s896ev",
                      children: v("div", {
                        className: "framer-1kg1tp7",
                        "data-framer-name": "Frame 142",
                        name: "Frame 142",
                        children: [
                          v("div", {
                            className: "framer-doxgaz",
                            children: [
                              e(l.div, {
                                className: "framer-un6sz6",
                                style: { rotate: 3 },
                                transformTemplate: Ta,
                                children: e(b, {
                                  __fromCanvasComponent: !0,
                                  children: e(f, {
                                    children: v("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnT0RBd0xDQWlkMlIwYUNJZ01UQXc=",
                                        "--framer-font-family":
                                          '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                        "--framer-font-size": "80px",
                                        "--framer-font-variation-axes":
                                          '"opsz" 96, "wght" 800, "wdth" 100',
                                        "--framer-line-height": "80%",
                                        "--framer-text-color":
                                          "rgb(255, 255, 255)",
                                      },
                                      children: [
                                        "100",
                                        e("span", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnT0RBd0xDQWlkMlIwYUNJZ09EQT0=",
                                            "--framer-font-variation-axes":
                                              '"opsz" 96, "wght" 800, "wdth" 80',
                                          },
                                          children: "%",
                                        }),
                                      ],
                                    }),
                                  }),
                                  className: "framer-1me19wa",
                                  "data-framer-name": "100% Plants",
                                  fonts: [
                                    "GF;Bricolage Grotesque-variable-regular",
                                  ],
                                  name: "100% Plants",
                                  verticalAlignment: "bottom",
                                  withExternalLayout: !0,
                                }),
                              }),
                              e(b, {
                                __fromCanvasComponent: !0,
                                children: e(f, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnT0RBd0xDQWlkMlIwYUNJZ01UQXc=",
                                      "--framer-font-family":
                                        '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                      "--framer-font-size": "100px",
                                      "--framer-font-variation-axes":
                                        '"opsz" 96, "wght" 800, "wdth" 100',
                                      "--framer-line-height": "80%",
                                      "--framer-text-color":
                                        "var(--token-2b628465-dfc6-43a8-9465-243a89fbaf26, rgb(14, 96, 85))",
                                    },
                                    children: "Plants",
                                  }),
                                }),
                                className: "framer-1uw6yrf",
                                "data-framer-name": "100% Plants",
                                fonts: [
                                  "GF;Bricolage Grotesque-variable-regular",
                                ],
                                name: "100% Plants",
                                style: { rotate: -3 },
                                transformTemplate: Ta,
                                verticalAlignment: "bottom",
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          v("div", {
                            className: "framer-1i8bps1",
                            "data-framer-name": "Frame 147",
                            name: "Frame 147",
                            children: [
                              e(b, {
                                __fromCanvasComponent: !0,
                                children: e(f, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector": "SW50ZXItTWVkaXVt",
                                      "--framer-font-family":
                                        '"Inter", "Inter Placeholder", sans-serif',
                                      "--framer-font-size": "18px",
                                      "--framer-font-weight": "500",
                                      "--framer-line-height": "130%",
                                      "--framer-text-color":
                                        "var(--token-2b628465-dfc6-43a8-9465-243a89fbaf26, rgb(14, 96, 85))",
                                    },
                                    children:
                                      "With the help of our earth rooted friends, we created a way to enjoy your favorite drinks \u2014 without compromising your health.",
                                  }),
                                }),
                                className: "framer-40zvor",
                                "data-framer-name":
                                  "With the help of our earth rooted friends, we created a way to enjoy your favorite drinks \u2014 without compromising your health.",
                                fonts: ["Inter-Medium"],
                                name: "With the help of our earth rooted friends, we created a way to enjoy your favorite drinks \u2014 without compromising your health.",
                                verticalAlignment: "bottom",
                                withExternalLayout: !0,
                              }),
                              e(b, {
                                __fromCanvasComponent: !0,
                                children: e(f, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector": "SW50ZXItTWVkaXVt",
                                      "--framer-font-family":
                                        '"Inter", "Inter Placeholder", sans-serif',
                                      "--framer-font-size": "18px",
                                      "--framer-font-weight": "500",
                                      "--framer-line-height": "130%",
                                      "--framer-text-color":
                                        "var(--token-2b628465-dfc6-43a8-9465-243a89fbaf26, rgb(14, 96, 85))",
                                    },
                                    children: "Perfectly Sweet. No Bullsh*t.",
                                  }),
                                }),
                                className: "framer-6x3l5h",
                                "data-framer-name":
                                  "Perfectly Sweet. No Bullsh*t.",
                                fonts: ["Inter-Medium"],
                                name: "Perfectly Sweet. No Bullsh*t.",
                                verticalAlignment: "bottom",
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          v("div", {
                            className: "framer-1xzo4fi",
                            "data-framer-name": "Frame 146",
                            name: "Frame 146",
                            children: [
                              v("div", {
                                className: "framer-1fwhlex",
                                "data-framer-name": "Frame 146",
                                name: "Frame 146",
                                children: [
                                  e(b, {
                                    __fromCanvasComponent: !0,
                                    children: e(f, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnT0RBd0xDQWlkMlIwYUNJZ01UQXc=",
                                          "--framer-font-family":
                                            '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                          "--framer-font-size": "60px",
                                          "--framer-font-variation-axes":
                                            '"opsz" 96, "wght" 800, "wdth" 100',
                                          "--framer-line-height": "80%",
                                          "--framer-text-color":
                                            "var(--token-77edaaf9-45b5-4b44-a35e-1e64393147ac, rgb(255, 10, 96))",
                                        },
                                        children: "6g",
                                      }),
                                    }),
                                    className: "framer-16382gs",
                                    "data-framer-name": "6g",
                                    fonts: [
                                      "GF;Bricolage Grotesque-variable-regular",
                                    ],
                                    name: "6g",
                                    verticalAlignment: "bottom",
                                    withExternalLayout: !0,
                                  }),
                                  e(b, {
                                    __fromCanvasComponent: !0,
                                    children: e(f, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector": "SW50ZXItQm9sZA==",
                                          "--framer-font-family":
                                            '"Inter", "Inter Placeholder", sans-serif',
                                          "--framer-font-weight": "700",
                                          "--framer-line-height": "80%",
                                          "--framer-text-color":
                                            "var(--token-77edaaf9-45b5-4b44-a35e-1e64393147ac, rgb(255, 10, 96))",
                                        },
                                        children: "Sugar",
                                      }),
                                    }),
                                    className: "framer-4tjtk1",
                                    "data-framer-name": "Sugar",
                                    fonts: ["Inter-Bold"],
                                    name: "Sugar",
                                    verticalAlignment: "bottom",
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              v("div", {
                                className: "framer-1ey770h",
                                "data-framer-name": "Frame 144",
                                name: "Frame 144",
                                children: [
                                  e(b, {
                                    __fromCanvasComponent: !0,
                                    children: e(f, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnT0RBd0xDQWlkMlIwYUNJZ01UQXc=",
                                          "--framer-font-family":
                                            '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                          "--framer-font-size": "60px",
                                          "--framer-font-variation-axes":
                                            '"opsz" 96, "wght" 800, "wdth" 100',
                                          "--framer-line-height": "80%",
                                          "--framer-text-color":
                                            "var(--token-77edaaf9-45b5-4b44-a35e-1e64393147ac, rgb(255, 10, 96))",
                                        },
                                        children: "1g",
                                      }),
                                    }),
                                    className: "framer-12ulsy0",
                                    "data-framer-name": "1g",
                                    fonts: [
                                      "GF;Bricolage Grotesque-variable-regular",
                                    ],
                                    name: "1g",
                                    verticalAlignment: "bottom",
                                    withExternalLayout: !0,
                                  }),
                                  e(b, {
                                    __fromCanvasComponent: !0,
                                    children: e(f, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector": "SW50ZXItQm9sZA==",
                                          "--framer-font-family":
                                            '"Inter", "Inter Placeholder", sans-serif',
                                          "--framer-font-weight": "700",
                                          "--framer-line-height": "80%",
                                          "--framer-text-color":
                                            "var(--token-77edaaf9-45b5-4b44-a35e-1e64393147ac, rgb(255, 10, 96))",
                                        },
                                        children: "Fiber",
                                      }),
                                    }),
                                    className: "framer-lkt2cw",
                                    "data-framer-name": "Fiber",
                                    fonts: ["Inter-Bold"],
                                    name: "Fiber",
                                    verticalAlignment: "bottom",
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              v("div", {
                                className: "framer-y6b2kj",
                                "data-framer-name": "Frame 145",
                                name: "Frame 145",
                                children: [
                                  e(b, {
                                    __fromCanvasComponent: !0,
                                    children: e(f, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnT0RBd0xDQWlkMlIwYUNJZ01UQXc=",
                                          "--framer-font-family":
                                            '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                          "--framer-font-size": "60px",
                                          "--framer-font-variation-axes":
                                            '"opsz" 96, "wght" 800, "wdth" 100',
                                          "--framer-line-height": "80%",
                                          "--framer-text-color":
                                            "var(--token-77edaaf9-45b5-4b44-a35e-1e64393147ac, rgb(255, 10, 96))",
                                        },
                                        children: "1g",
                                      }),
                                    }),
                                    className: "framer-qq0gpz",
                                    "data-framer-name": "1g",
                                    fonts: [
                                      "GF;Bricolage Grotesque-variable-regular",
                                    ],
                                    name: "1g",
                                    verticalAlignment: "bottom",
                                    withExternalLayout: !0,
                                  }),
                                  e(b, {
                                    __fromCanvasComponent: !0,
                                    children: e(f, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector": "SW50ZXItQm9sZA==",
                                          "--framer-font-family":
                                            '"Inter", "Inter Placeholder", sans-serif',
                                          "--framer-font-weight": "700",
                                          "--framer-line-height": "80%",
                                          "--framer-text-color":
                                            "var(--token-77edaaf9-45b5-4b44-a35e-1e64393147ac, rgb(255, 10, 96))",
                                        },
                                        children: "Prebiotics",
                                      }),
                                    }),
                                    className: "framer-1u92kh9",
                                    "data-framer-name": "Prebiotics",
                                    fonts: ["Inter-Bold"],
                                    name: "Prebiotics",
                                    verticalAlignment: "bottom",
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    v("div", {
                      className: "framer-arpxxg",
                      "data-framer-name": "Frame 148",
                      name: "Frame 148",
                      children: [
                        e(A, {
                          breakpoint: s,
                          overrides: {
                            FWFWx7bxY: {
                              background: {
                                alt: "",
                                fit: "fill",
                                sizes:
                                  "min(max((min(100vw, 1180px) - 88px) / 2, 50px), 600px)",
                                src: "/content/images/6UGTuvSzla4B3ggLnRtKuTol3rc.jpg",
                                srcSet:
                                  "/content/images/6UGTuvSzla4B3ggLnRtKuTol3rc.jpg?scale-down-to=512 512w,/content/images/6UGTuvSzla4B3ggLnRtKuTol3rc.jpg?scale-down-to=1024 1024w,/content/images/6UGTuvSzla4B3ggLnRtKuTol3rc.jpg?scale-down-to=2048 2048w,/content/images/6UGTuvSzla4B3ggLnRtKuTol3rc.jpg 3072w",
                              },
                            },
                            HF8RfH6Up: {
                              background: {
                                alt: "",
                                fit: "fill",
                                sizes: "min(min(100vw, 1180px) - 40px, 480px)",
                                src: "/content/images/6UGTuvSzla4B3ggLnRtKuTol3rc.jpg",
                                srcSet:
                                  "/content/images/6UGTuvSzla4B3ggLnRtKuTol3rc.jpg?scale-down-to=512 512w,/content/images/6UGTuvSzla4B3ggLnRtKuTol3rc.jpg?scale-down-to=1024 1024w,/content/images/6UGTuvSzla4B3ggLnRtKuTol3rc.jpg?scale-down-to=2048 2048w,/content/images/6UGTuvSzla4B3ggLnRtKuTol3rc.jpg 3072w",
                              },
                            },
                          },
                          children: v(tr, {
                            background: {
                              alt: "",
                              fit: "fill",
                              sizes:
                                "max((min(max((100vw - 24px) * 0.7059, 1px), 1180px) - 84px) / 2, 50px)",
                              src: "/content/images/6UGTuvSzla4B3ggLnRtKuTol3rc.jpg",
                              srcSet:
                                "/content/images/6UGTuvSzla4B3ggLnRtKuTol3rc.jpg?scale-down-to=512 512w,/content/images/6UGTuvSzla4B3ggLnRtKuTol3rc.jpg?scale-down-to=1024 1024w,/content/images/6UGTuvSzla4B3ggLnRtKuTol3rc.jpg?scale-down-to=2048 2048w,/content/images/6UGTuvSzla4B3ggLnRtKuTol3rc.jpg 3072w",
                            },
                            className: "framer-8wr72p",
                            "data-framer-name":
                              "Jackfruit, placed on a wood table or butcher block, with accompanying items to give a more realistic feel. Made to feel like it's in a rustic, but modern kitchen. Natural lighting, depth of field.",
                            name: "Jackfruit, placed on a wood table or butcher block, with accompanying items to give a more realistic feel. Made to feel like it's in a rustic, but modern kitchen. Natural lighting, depth of field.",
                            children: [
                              v("div", {
                                className: "framer-1mpp7po",
                                children: [
                                  e("div", {
                                    className: "framer-1348zwq",
                                    "data-border": !0,
                                    children: e(b, {
                                      __fromCanvasComponent: !0,
                                      children: e(f, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "SW50ZXItTWVkaXVt",
                                            "--framer-font-family":
                                              '"Inter", "Inter Placeholder", sans-serif',
                                            "--framer-font-size": "14px",
                                            "--framer-font-weight": "500",
                                            "--framer-line-height": "72%",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children: "Zero Carb",
                                        }),
                                      }),
                                      className: "framer-1hnshfz",
                                      fonts: ["Inter-Medium"],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  e("div", {
                                    className: "framer-10ppy50",
                                    "data-border": !0,
                                    children: e(b, {
                                      __fromCanvasComponent: !0,
                                      children: e(f, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "SW50ZXItTWVkaXVt",
                                            "--framer-font-family":
                                              '"Inter", "Inter Placeholder", sans-serif',
                                            "--framer-font-size": "14px",
                                            "--framer-font-weight": "500",
                                            "--framer-line-height": "72%",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children: "Antioxidant",
                                        }),
                                      }),
                                      className: "framer-1hz1gwp",
                                      fonts: ["Inter-Medium"],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                              v("div", {
                                className: "framer-1abrkn8",
                                "data-framer-name": "Frame 139",
                                name: "Frame 139",
                                children: [
                                  e(A, {
                                    breakpoint: s,
                                    overrides: {
                                      FWFWx7bxY: {
                                        children: e(f, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnT0RBd0xDQWlkMlIwYUNJZ01UQXc=",
                                              "--framer-font-family":
                                                '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                              "--framer-font-size": "38px",
                                              "--framer-font-variation-axes":
                                                '"opsz" 96, "wght" 800, "wdth" 100',
                                              "--framer-line-height": "80%",
                                              "--framer-text-color":
                                                "var(--token-2b628465-dfc6-43a8-9465-243a89fbaf26, rgb(14, 96, 85))",
                                            },
                                            children: "Rebaudioside",
                                          }),
                                        }),
                                      },
                                    },
                                    children: e(b, {
                                      __fromCanvasComponent: !0,
                                      children: e(f, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnT0RBd0xDQWlkMlIwYUNJZ01UQXc=",
                                            "--framer-font-family":
                                              '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                            "--framer-font-size": "46px",
                                            "--framer-font-variation-axes":
                                              '"opsz" 96, "wght" 800, "wdth" 100',
                                            "--framer-line-height": "80%",
                                            "--framer-text-color":
                                              "var(--token-2b628465-dfc6-43a8-9465-243a89fbaf26, rgb(14, 96, 85))",
                                          },
                                          children: "Rebaudioside",
                                        }),
                                      }),
                                      className: "framer-1pel5ku",
                                      "data-framer-name": "Rebaudioside",
                                      fonts: [
                                        "GF;Bricolage Grotesque-variable-regular",
                                      ],
                                      name: "Rebaudioside",
                                      verticalAlignment: "bottom",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  e(de, {
                                    className: "framer-1c587mh",
                                    layout: "position",
                                    opacity: 1,
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 202 8"><path d="M 1 4 L 1.5 3.624 L 2 3.254 L 2.5 2.896 L 3 2.555 L 3.5 2.237 L 4 1.946 L 4.5 1.688 L 5 1.467 L 5.5 1.285 L 6 1.147 L 6.5 1.053 L 7 1.006 L 7.5 1.006 L 8 1.053 L 8.5 1.147 L 9 1.285 L 9.5 1.467 L 10 1.688 L 10.5 1.946 L 11 2.237 L 11.5 2.555 L 12 2.896 L 12.5 3.254 L 13 3.624 L 13.5 4 L 14 4.376 L 14.5 4.746 L 15 5.104 L 15.5 5.445 L 16 5.763 L 16.5 6.054 L 17 6.311 L 17.5 6.533 L 18 6.714 L 18.5 6.853 L 19 6.947 L 19.5 6.994 L 20 6.994 L 20.5 6.947 L 21 6.853 L 21.5 6.714 L 22 6.533 L 22.5 6.311 L 23 6.054 L 23.5 5.763 L 24 5.445 L 24.5 5.104 L 25 4.746 L 25.5 4.376 L 26 4 L 26.5 3.624 L 27 3.254 L 27.5 2.896 L 28 2.555 L 28.5 2.237 L 29 1.946 L 29.5 1.688 L 30 1.467 L 30.5 1.285 L 31 1.147 L 31.5 1.053 L 32 1.006 L 32.5 1.006 L 33 1.053 L 33.5 1.147 L 34 1.285 L 34.5 1.467 L 35 1.688 L 35.5 1.946 L 36 2.237 L 36.5 2.555 L 37 2.896 L 37.5 3.254 L 38 3.624 L 38.5 4 L 39 4.376 L 39.5 4.746 L 40 5.104 L 40.5 5.445 L 41 5.763 L 41.5 6.054 L 42 6.311 L 42.5 6.533 L 43 6.714 L 43.5 6.853 L 44 6.947 L 44.5 6.994 L 45 6.994 L 45.5 6.947 L 46 6.853 L 46.5 6.714 L 47 6.533 L 47.5 6.311 L 48 6.054 L 48.5 5.763 L 49 5.445 L 49.5 5.104 L 50 4.746 L 50.5 4.376 L 51 4 L 51.5 3.624 L 52 3.254 L 52.5 2.896 L 53 2.555 L 53.5 2.237 L 54 1.946 L 54.5 1.688 L 55 1.467 L 55.5 1.285 L 56 1.147 L 56.5 1.053 L 57 1.006 L 57.5 1.006 L 58 1.053 L 58.5 1.147 L 59 1.285 L 59.5 1.467 L 60 1.688 L 60.5 1.946 L 61 2.237 L 61.5 2.555 L 62 2.896 L 62.5 3.254 L 63 3.624 L 63.5 4 L 64 4.376 L 64.5 4.746 L 65 5.104 L 65.5 5.445 L 66 5.763 L 66.5 6.054 L 67 6.311 L 67.5 6.533 L 68 6.714 L 68.5 6.853 L 69 6.947 L 69.5 6.994 L 70 6.994 L 70.5 6.947 L 71 6.853 L 71.5 6.714 L 72 6.533 L 72.5 6.311 L 73 6.054 L 73.5 5.763 L 74 5.445 L 74.5 5.104 L 75 4.746 L 75.5 4.376 L 76 4 L 76.5 3.624 L 77 3.254 L 77.5 2.896 L 78 2.555 L 78.5 2.237 L 79 1.946 L 79.5 1.688 L 80 1.467 L 80.5 1.285 L 81 1.147 L 81.5 1.053 L 82 1.006 L 82.5 1.006 L 83 1.053 L 83.5 1.147 L 84 1.285 L 84.5 1.467 L 85 1.688 L 85.5 1.946 L 86 2.237 L 86.5 2.555 L 87 2.896 L 87.5 3.254 L 88 3.624 L 88.5 4 L 89 4.376 L 89.5 4.746 L 90 5.104 L 90.5 5.445 L 91 5.763 L 91.5 6.054 L 92 6.311 L 92.5 6.533 L 93 6.714 L 93.5 6.853 L 94 6.947 L 94.5 6.994 L 95 6.994 L 95.5 6.947 L 96 6.853 L 96.5 6.714 L 97 6.533 L 97.5 6.311 L 98 6.054 L 98.5 5.763 L 99 5.445 L 99.5 5.104 L 100 4.746 L 100.5 4.376 L 101 4 L 101.5 3.624 L 102 3.254 L 102.5 2.896 L 103 2.555 L 103.5 2.237 L 104 1.946 L 104.5 1.688 L 105 1.467 L 105.5 1.285 L 106 1.147 L 106.5 1.053 L 107 1.006 L 107.5 1.006 L 108 1.053 L 108.5 1.147 L 109 1.285 L 109.5 1.467 L 110 1.688 L 110.5 1.946 L 111 2.237 L 111.5 2.555 L 112 2.896 L 112.5 3.254 L 113 3.624 L 113.5 4 L 114 4.376 L 114.5 4.746 L 115 5.104 L 115.5 5.445 L 116 5.763 L 116.5 6.054 L 117 6.311 L 117.5 6.533 L 118 6.714 L 118.5 6.853 L 119 6.947 L 119.5 6.994 L 120 6.994 L 120.5 6.947 L 121 6.853 L 121.5 6.714 L 122 6.533 L 122.5 6.311 L 123 6.054 L 123.5 5.763 L 124 5.445 L 124.5 5.104 L 125 4.746 L 125.5 4.376 L 126 4 L 126.5 3.624 L 127 3.254 L 127.5 2.896 L 128 2.555 L 128.5 2.237 L 129 1.946 L 129.5 1.688 L 130 1.467 L 130.5 1.285 L 131 1.147 L 131.5 1.053 L 132 1.006 L 132.5 1.006 L 133 1.053 L 133.5 1.147 L 134 1.285 L 134.5 1.467 L 135 1.688 L 135.5 1.946 L 136 2.237 L 136.5 2.555 L 137 2.896 L 137.5 3.254 L 138 3.624 L 138.5 4 L 139 4.376 L 139.5 4.746 L 140 5.104 L 140.5 5.445 L 141 5.763 L 141.5 6.054 L 142 6.311 L 142.5 6.533 L 143 6.714 L 143.5 6.853 L 144 6.947 L 144.5 6.994 L 145 6.994 L 145.5 6.947 L 146 6.853 L 146.5 6.714 L 147 6.533 L 147.5 6.311 L 148 6.054 L 148.5 5.763 L 149 5.445 L 149.5 5.104 L 150 4.746 L 150.5 4.376 L 151 4 L 151.5 3.624 L 152 3.254 L 152.5 2.896 L 153 2.555 L 153.5 2.237 L 154 1.946 L 154.5 1.688 L 155 1.467 L 155.5 1.285 L 156 1.147 L 156.5 1.053 L 157 1.006 L 157.5 1.006 L 158 1.053 L 158.5 1.147 L 159 1.285 L 159.5 1.467 L 160 1.688 L 160.5 1.946 L 161 2.237 L 161.5 2.555 L 162 2.896 L 162.5 3.254 L 163 3.624 L 163.5 4 L 164 4.376 L 164.5 4.746 L 165 5.104 L 165.5 5.445 L 166 5.763 L 166.5 6.054 L 167 6.311 L 167.5 6.533 L 168 6.714 L 168.5 6.853 L 169 6.947 L 169.5 6.994 L 170 6.994 L 170.5 6.947 L 171 6.853 L 171.5 6.714 L 172 6.533 L 172.5 6.311 L 173 6.054 L 173.5 5.763 L 174 5.445 L 174.5 5.104 L 175 4.746 L 175.5 4.376 L 176 4 L 176.5 3.624 L 177 3.254 L 177.5 2.896 L 178 2.555 L 178.5 2.237 L 179 1.946 L 179.5 1.688 L 180 1.467 L 180.5 1.285 L 181 1.147 L 181.5 1.053 L 182 1.006 L 182.5 1.006 L 183 1.053 L 183.5 1.147 L 184 1.285 L 184.5 1.467 L 185 1.688 L 185.5 1.946 L 186 2.237 L 186.5 2.555 L 187 2.896 L 187.5 3.254 L 188 3.624 L 188.5 4 L 189 4.376 L 189.5 4.746 L 190 5.104 L 190.5 5.445 L 191 5.763 L 191.5 6.054 L 192 6.311 L 192.5 6.533 L 193 6.714 L 193.5 6.853 L 194 6.947 L 194.5 6.994 L 195 6.994 L 195.5 6.947 L 196 6.853 L 196.5 6.714 L 197 6.533 L 197.5 6.311 L 198 6.054 L 198.5 5.763 L 199 5.445 L 199.5 5.104 L 200 4.746 L 200.5 4.376" fill="transparent" stroke-width="2" stroke="var(--token-77edaaf9-45b5-4b44-a35e-1e64393147ac, rgb(38, 78, 56)) /* {&quot;name&quot;:&quot;Stroke&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                                    svgContentId: 11371492861,
                                    withExternalLayout: !0,
                                  }),
                                  e(A, {
                                    breakpoint: s,
                                    overrides: {
                                      FWFWx7bxY: {
                                        children: e(f, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-line-height": "130%",
                                              "--framer-text-alignment": "left",
                                              "--framer-text-color":
                                                "var(--token-2b628465-dfc6-43a8-9465-243a89fbaf26, rgb(14, 96, 85))",
                                            },
                                            children:
                                              "This powerful, plant-derived glycoside, is a natural sweetener with zero calories. It passes through our digestive system without being absorbed, delivering sweetness without spiking blood sugar levels.",
                                          }),
                                        }),
                                      },
                                    },
                                    children: e(b, {
                                      __fromCanvasComponent: !0,
                                      children: e(f, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "SW50ZXItTWVkaXVt",
                                            "--framer-font-family":
                                              '"Inter", "Inter Placeholder", sans-serif',
                                            "--framer-font-weight": "500",
                                            "--framer-line-height": "130%",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "var(--token-2b628465-dfc6-43a8-9465-243a89fbaf26, rgb(14, 96, 85))",
                                          },
                                          children:
                                            "This powerful, plant-derived glycoside, is a natural sweetener with zero calories. It passes through our digestive system without being absorbed, delivering sweetness without spiking blood sugar levels.",
                                        }),
                                      }),
                                      className: "framer-zaxl7v",
                                      "data-framer-name":
                                        "This powerful, plant-derived glycoside is a natural sweetener with zero calories. It passes through our digestive system without being absorbed, delivering sweetness without spiking blood sugar levels.",
                                      fonts: ["Inter-Medium"],
                                      name: "This powerful, plant-derived glycoside is a natural sweetener with zero calories. It passes through our digestive system without being absorbed, delivering sweetness without spiking blood sugar levels.",
                                      verticalAlignment: "bottom",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        e(A, {
                          breakpoint: s,
                          overrides: {
                            FWFWx7bxY: {
                              background: {
                                alt: "",
                                fit: "fill",
                                sizes:
                                  "min(max((min(100vw, 1180px) - 88px) / 2, 50px), 600px)",
                                src: "/content/images/zFGJSiqAYJB2VNFU9Bc3uh4di1s.jpg",
                                srcSet:
                                  "/content/images/zFGJSiqAYJB2VNFU9Bc3uh4di1s.jpg?scale-down-to=512 512w,/content/images/zFGJSiqAYJB2VNFU9Bc3uh4di1s.jpg?scale-down-to=1024 1024w,/content/images/zFGJSiqAYJB2VNFU9Bc3uh4di1s.jpg 1536w",
                              },
                            },
                            HF8RfH6Up: {
                              background: {
                                alt: "",
                                fit: "fill",
                                sizes: "min(min(100vw, 1180px) - 40px, 480px)",
                                src: "/content/images/zFGJSiqAYJB2VNFU9Bc3uh4di1s.jpg",
                                srcSet:
                                  "/content/images/zFGJSiqAYJB2VNFU9Bc3uh4di1s.jpg?scale-down-to=512 512w,/content/images/zFGJSiqAYJB2VNFU9Bc3uh4di1s.jpg?scale-down-to=1024 1024w,/content/images/zFGJSiqAYJB2VNFU9Bc3uh4di1s.jpg 1536w",
                              },
                            },
                          },
                          children: v(tr, {
                            background: {
                              alt: "",
                              fit: "fill",
                              sizes:
                                "max((min(max((100vw - 24px) * 0.7059, 1px), 1180px) - 84px) / 2, 50px)",
                              src: "/content/images/zFGJSiqAYJB2VNFU9Bc3uh4di1s.jpg",
                              srcSet:
                                "/content/images/zFGJSiqAYJB2VNFU9Bc3uh4di1s.jpg?scale-down-to=512 512w,/content/images/zFGJSiqAYJB2VNFU9Bc3uh4di1s.jpg?scale-down-to=1024 1024w,/content/images/zFGJSiqAYJB2VNFU9Bc3uh4di1s.jpg 1536w",
                            },
                            className: "framer-1rqty4j",
                            "data-framer-name":
                              "Jackfruit, placed on a wood table or butcher block, with accompanying items to give a more realistic feel. Made to feel like it's in a rustic, but modern kitchen. Natural lighting, depth of field.",
                            name: "Jackfruit, placed on a wood table or butcher block, with accompanying items to give a more realistic feel. Made to feel like it's in a rustic, but modern kitchen. Natural lighting, depth of field.",
                            children: [
                              v("div", {
                                className: "framer-1alxsrt",
                                children: [
                                  e("div", {
                                    className: "framer-ljcjm0",
                                    children: e(b, {
                                      __fromCanvasComponent: !0,
                                      children: e(f, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "SW50ZXItTWVkaXVt",
                                            "--framer-font-family":
                                              '"Inter", "Inter Placeholder", sans-serif',
                                            "--framer-font-size": "14px",
                                            "--framer-font-weight": "500",
                                            "--framer-line-height": "72%",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children: "Low Impact",
                                        }),
                                      }),
                                      className: "framer-y7dxsn",
                                      fonts: ["Inter-Medium"],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  e("div", {
                                    className: "framer-njjz7u",
                                    "data-border": !0,
                                    children: e(b, {
                                      __fromCanvasComponent: !0,
                                      children: e(f, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "SW50ZXItTWVkaXVt",
                                            "--framer-font-family":
                                              '"Inter", "Inter Placeholder", sans-serif',
                                            "--framer-font-size": "14px",
                                            "--framer-font-weight": "500",
                                            "--framer-line-height": "72%",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children: "Antioxidant",
                                        }),
                                      }),
                                      className: "framer-1gb49ma",
                                      fonts: ["Inter-Medium"],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                              v("div", {
                                className: "framer-1va69ui",
                                "data-framer-name": "Frame 139",
                                name: "Frame 139",
                                children: [
                                  e(A, {
                                    breakpoint: s,
                                    overrides: {
                                      FWFWx7bxY: {
                                        children: e(f, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnT0RBd0xDQWlkMlIwYUNJZ01UQXc=",
                                              "--framer-font-family":
                                                '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                              "--framer-font-size": "38px",
                                              "--framer-font-variation-axes":
                                                '"opsz" 96, "wght" 800, "wdth" 100',
                                              "--framer-line-height": "80%",
                                              "--framer-text-color":
                                                "var(--token-2b628465-dfc6-43a8-9465-243a89fbaf26, rgb(14, 96, 85))",
                                            },
                                            children: "Allulose",
                                          }),
                                        }),
                                      },
                                    },
                                    children: e(b, {
                                      __fromCanvasComponent: !0,
                                      children: e(f, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnT0RBd0xDQWlkMlIwYUNJZ01UQXc=",
                                            "--framer-font-family":
                                              '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                            "--framer-font-size": "46px",
                                            "--framer-font-variation-axes":
                                              '"opsz" 96, "wght" 800, "wdth" 100',
                                            "--framer-line-height": "80%",
                                            "--framer-text-color":
                                              "var(--token-2b628465-dfc6-43a8-9465-243a89fbaf26, rgb(14, 96, 85))",
                                          },
                                          children: "Allulose",
                                        }),
                                      }),
                                      className: "framer-132w1sx",
                                      "data-framer-name": "Allulose",
                                      fonts: [
                                        "GF;Bricolage Grotesque-variable-regular",
                                      ],
                                      name: "Allulose",
                                      verticalAlignment: "bottom",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  e(de, {
                                    className: "framer-16jn7y9",
                                    layout: "position",
                                    opacity: 1,
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 202 8"><path d="M 1 4 L 1.5 3.624 L 2 3.254 L 2.5 2.896 L 3 2.555 L 3.5 2.237 L 4 1.946 L 4.5 1.688 L 5 1.467 L 5.5 1.285 L 6 1.147 L 6.5 1.053 L 7 1.006 L 7.5 1.006 L 8 1.053 L 8.5 1.147 L 9 1.285 L 9.5 1.467 L 10 1.688 L 10.5 1.946 L 11 2.237 L 11.5 2.555 L 12 2.896 L 12.5 3.254 L 13 3.624 L 13.5 4 L 14 4.376 L 14.5 4.746 L 15 5.104 L 15.5 5.445 L 16 5.763 L 16.5 6.054 L 17 6.311 L 17.5 6.533 L 18 6.714 L 18.5 6.853 L 19 6.947 L 19.5 6.994 L 20 6.994 L 20.5 6.947 L 21 6.853 L 21.5 6.714 L 22 6.533 L 22.5 6.311 L 23 6.054 L 23.5 5.763 L 24 5.445 L 24.5 5.104 L 25 4.746 L 25.5 4.376 L 26 4 L 26.5 3.624 L 27 3.254 L 27.5 2.896 L 28 2.555 L 28.5 2.237 L 29 1.946 L 29.5 1.688 L 30 1.467 L 30.5 1.285 L 31 1.147 L 31.5 1.053 L 32 1.006 L 32.5 1.006 L 33 1.053 L 33.5 1.147 L 34 1.285 L 34.5 1.467 L 35 1.688 L 35.5 1.946 L 36 2.237 L 36.5 2.555 L 37 2.896 L 37.5 3.254 L 38 3.624 L 38.5 4 L 39 4.376 L 39.5 4.746 L 40 5.104 L 40.5 5.445 L 41 5.763 L 41.5 6.054 L 42 6.311 L 42.5 6.533 L 43 6.714 L 43.5 6.853 L 44 6.947 L 44.5 6.994 L 45 6.994 L 45.5 6.947 L 46 6.853 L 46.5 6.714 L 47 6.533 L 47.5 6.311 L 48 6.054 L 48.5 5.763 L 49 5.445 L 49.5 5.104 L 50 4.746 L 50.5 4.376 L 51 4 L 51.5 3.624 L 52 3.254 L 52.5 2.896 L 53 2.555 L 53.5 2.237 L 54 1.946 L 54.5 1.688 L 55 1.467 L 55.5 1.285 L 56 1.147 L 56.5 1.053 L 57 1.006 L 57.5 1.006 L 58 1.053 L 58.5 1.147 L 59 1.285 L 59.5 1.467 L 60 1.688 L 60.5 1.946 L 61 2.237 L 61.5 2.555 L 62 2.896 L 62.5 3.254 L 63 3.624 L 63.5 4 L 64 4.376 L 64.5 4.746 L 65 5.104 L 65.5 5.445 L 66 5.763 L 66.5 6.054 L 67 6.311 L 67.5 6.533 L 68 6.714 L 68.5 6.853 L 69 6.947 L 69.5 6.994 L 70 6.994 L 70.5 6.947 L 71 6.853 L 71.5 6.714 L 72 6.533 L 72.5 6.311 L 73 6.054 L 73.5 5.763 L 74 5.445 L 74.5 5.104 L 75 4.746 L 75.5 4.376 L 76 4 L 76.5 3.624 L 77 3.254 L 77.5 2.896 L 78 2.555 L 78.5 2.237 L 79 1.946 L 79.5 1.688 L 80 1.467 L 80.5 1.285 L 81 1.147 L 81.5 1.053 L 82 1.006 L 82.5 1.006 L 83 1.053 L 83.5 1.147 L 84 1.285 L 84.5 1.467 L 85 1.688 L 85.5 1.946 L 86 2.237 L 86.5 2.555 L 87 2.896 L 87.5 3.254 L 88 3.624 L 88.5 4 L 89 4.376 L 89.5 4.746 L 90 5.104 L 90.5 5.445 L 91 5.763 L 91.5 6.054 L 92 6.311 L 92.5 6.533 L 93 6.714 L 93.5 6.853 L 94 6.947 L 94.5 6.994 L 95 6.994 L 95.5 6.947 L 96 6.853 L 96.5 6.714 L 97 6.533 L 97.5 6.311 L 98 6.054 L 98.5 5.763 L 99 5.445 L 99.5 5.104 L 100 4.746 L 100.5 4.376 L 101 4 L 101.5 3.624 L 102 3.254 L 102.5 2.896 L 103 2.555 L 103.5 2.237 L 104 1.946 L 104.5 1.688 L 105 1.467 L 105.5 1.285 L 106 1.147 L 106.5 1.053 L 107 1.006 L 107.5 1.006 L 108 1.053 L 108.5 1.147 L 109 1.285 L 109.5 1.467 L 110 1.688 L 110.5 1.946 L 111 2.237 L 111.5 2.555 L 112 2.896 L 112.5 3.254 L 113 3.624 L 113.5 4 L 114 4.376 L 114.5 4.746 L 115 5.104 L 115.5 5.445 L 116 5.763 L 116.5 6.054 L 117 6.311 L 117.5 6.533 L 118 6.714 L 118.5 6.853 L 119 6.947 L 119.5 6.994 L 120 6.994 L 120.5 6.947 L 121 6.853 L 121.5 6.714 L 122 6.533 L 122.5 6.311 L 123 6.054 L 123.5 5.763 L 124 5.445 L 124.5 5.104 L 125 4.746 L 125.5 4.376 L 126 4 L 126.5 3.624 L 127 3.254 L 127.5 2.896 L 128 2.555 L 128.5 2.237 L 129 1.946 L 129.5 1.688 L 130 1.467 L 130.5 1.285 L 131 1.147 L 131.5 1.053 L 132 1.006 L 132.5 1.006 L 133 1.053 L 133.5 1.147 L 134 1.285 L 134.5 1.467 L 135 1.688 L 135.5 1.946 L 136 2.237 L 136.5 2.555 L 137 2.896 L 137.5 3.254 L 138 3.624 L 138.5 4 L 139 4.376 L 139.5 4.746 L 140 5.104 L 140.5 5.445 L 141 5.763 L 141.5 6.054 L 142 6.311 L 142.5 6.533 L 143 6.714 L 143.5 6.853 L 144 6.947 L 144.5 6.994 L 145 6.994 L 145.5 6.947 L 146 6.853 L 146.5 6.714 L 147 6.533 L 147.5 6.311 L 148 6.054 L 148.5 5.763 L 149 5.445 L 149.5 5.104 L 150 4.746 L 150.5 4.376 L 151 4 L 151.5 3.624 L 152 3.254 L 152.5 2.896 L 153 2.555 L 153.5 2.237 L 154 1.946 L 154.5 1.688 L 155 1.467 L 155.5 1.285 L 156 1.147 L 156.5 1.053 L 157 1.006 L 157.5 1.006 L 158 1.053 L 158.5 1.147 L 159 1.285 L 159.5 1.467 L 160 1.688 L 160.5 1.946 L 161 2.237 L 161.5 2.555 L 162 2.896 L 162.5 3.254 L 163 3.624 L 163.5 4 L 164 4.376 L 164.5 4.746 L 165 5.104 L 165.5 5.445 L 166 5.763 L 166.5 6.054 L 167 6.311 L 167.5 6.533 L 168 6.714 L 168.5 6.853 L 169 6.947 L 169.5 6.994 L 170 6.994 L 170.5 6.947 L 171 6.853 L 171.5 6.714 L 172 6.533 L 172.5 6.311 L 173 6.054 L 173.5 5.763 L 174 5.445 L 174.5 5.104 L 175 4.746 L 175.5 4.376 L 176 4 L 176.5 3.624 L 177 3.254 L 177.5 2.896 L 178 2.555 L 178.5 2.237 L 179 1.946 L 179.5 1.688 L 180 1.467 L 180.5 1.285 L 181 1.147 L 181.5 1.053 L 182 1.006 L 182.5 1.006 L 183 1.053 L 183.5 1.147 L 184 1.285 L 184.5 1.467 L 185 1.688 L 185.5 1.946 L 186 2.237 L 186.5 2.555 L 187 2.896 L 187.5 3.254 L 188 3.624 L 188.5 4 L 189 4.376 L 189.5 4.746 L 190 5.104 L 190.5 5.445 L 191 5.763 L 191.5 6.054 L 192 6.311 L 192.5 6.533 L 193 6.714 L 193.5 6.853 L 194 6.947 L 194.5 6.994 L 195 6.994 L 195.5 6.947 L 196 6.853 L 196.5 6.714 L 197 6.533 L 197.5 6.311 L 198 6.054 L 198.5 5.763 L 199 5.445 L 199.5 5.104 L 200 4.746 L 200.5 4.376" fill="transparent" stroke-width="2" stroke="var(--token-77edaaf9-45b5-4b44-a35e-1e64393147ac, rgb(38, 78, 56)) /* {&quot;name&quot;:&quot;Stroke&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                                    svgContentId: 11371492861,
                                    withExternalLayout: !0,
                                  }),
                                  e(A, {
                                    breakpoint: s,
                                    overrides: {
                                      FWFWx7bxY: {
                                        children: e(f, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-line-height": "130%",
                                              "--framer-text-alignment": "left",
                                              "--framer-text-color":
                                                "var(--token-2b628465-dfc6-43a8-9465-243a89fbaf26, rgb(14, 96, 85))",
                                            },
                                            children:
                                              "Naturally found in raisins, figs, and jackfruit \u2014 Allulose is a rare sugar that isn\u2019t metabolized by the body, meaning it wont mess with your blood sugar levels.",
                                          }),
                                        }),
                                      },
                                    },
                                    children: e(b, {
                                      __fromCanvasComponent: !0,
                                      children: e(f, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "SW50ZXItTWVkaXVt",
                                            "--framer-font-family":
                                              '"Inter", "Inter Placeholder", sans-serif',
                                            "--framer-font-weight": "500",
                                            "--framer-line-height": "130%",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "var(--token-2b628465-dfc6-43a8-9465-243a89fbaf26, rgb(14, 96, 85))",
                                          },
                                          children:
                                            "Naturally found in raisins, figs, and jackfruit \u2014 Allulose is a rare sugar that isn\u2019t metabolized by the body, meaning it wont mess with your blood sugar levels.",
                                        }),
                                      }),
                                      className: "framer-13ologj",
                                      "data-framer-name":
                                        "Naturally found in raisins, figs, and jackfruit \u2014 Allulose is a rare sugar that isn\u2019t metabolized by the body, meaning it wont mess with your blood sugar levels.",
                                      fonts: ["Inter-Medium"],
                                      name: "Naturally found in raisins, figs, and jackfruit \u2014 Allulose is a rare sugar that isn\u2019t metabolized by the body, meaning it wont mess with your blood sugar levels.",
                                      verticalAlignment: "bottom",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        e(A, {
                          breakpoint: s,
                          overrides: {
                            FWFWx7bxY: {
                              background: {
                                alt: "",
                                fit: "fill",
                                sizes:
                                  "max((min(100vw, 1180px) - 88px) / 2, 50px)",
                                src: "/content/images/1UpBBOCv8yHl8j2RXhOHOrYPfE.jpg",
                                srcSet:
                                  "/content/images/1UpBBOCv8yHl8j2RXhOHOrYPfE.jpg?scale-down-to=512 512w,/content/images/1UpBBOCv8yHl8j2RXhOHOrYPfE.jpg?scale-down-to=1024 1024w,/content/images/1UpBBOCv8yHl8j2RXhOHOrYPfE.jpg?scale-down-to=2048 2048w,/content/images/1UpBBOCv8yHl8j2RXhOHOrYPfE.jpg 3024w",
                              },
                            },
                            HF8RfH6Up: {
                              background: {
                                alt: "",
                                fit: "fill",
                                sizes: "min(min(100vw, 1180px) - 40px, 480px)",
                                src: "/content/images/1UpBBOCv8yHl8j2RXhOHOrYPfE.jpg",
                                srcSet:
                                  "/content/images/1UpBBOCv8yHl8j2RXhOHOrYPfE.jpg?scale-down-to=512 512w,/content/images/1UpBBOCv8yHl8j2RXhOHOrYPfE.jpg?scale-down-to=1024 1024w,/content/images/1UpBBOCv8yHl8j2RXhOHOrYPfE.jpg?scale-down-to=2048 2048w,/content/images/1UpBBOCv8yHl8j2RXhOHOrYPfE.jpg 3024w",
                              },
                            },
                          },
                          children: v(tr, {
                            background: {
                              alt: "",
                              fit: "fill",
                              sizes:
                                "max((min(max((100vw - 24px) * 0.7059, 1px), 1180px) - 84px) / 2, 50px)",
                              src: "/content/images/1UpBBOCv8yHl8j2RXhOHOrYPfE.jpg",
                              srcSet:
                                "/content/images/1UpBBOCv8yHl8j2RXhOHOrYPfE.jpg?scale-down-to=512 512w,/content/images/1UpBBOCv8yHl8j2RXhOHOrYPfE.jpg?scale-down-to=1024 1024w,/content/images/1UpBBOCv8yHl8j2RXhOHOrYPfE.jpg?scale-down-to=2048 2048w,/content/images/1UpBBOCv8yHl8j2RXhOHOrYPfE.jpg 3024w",
                            },
                            className: "framer-414o68",
                            "data-framer-name":
                              "Jackfruit, placed on a wood table or butcher block, with accompanying items to give a more realistic feel. Made to feel like it's in a rustic, but modern kitchen. Natural lighting, depth of field.",
                            name: "Jackfruit, placed on a wood table or butcher block, with accompanying items to give a more realistic feel. Made to feel like it's in a rustic, but modern kitchen. Natural lighting, depth of field.",
                            children: [
                              v("div", {
                                className: "framer-5bzctn",
                                children: [
                                  e("div", {
                                    className: "framer-1dkzb85",
                                    children: e(b, {
                                      __fromCanvasComponent: !0,
                                      children: e(f, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "SW50ZXItTWVkaXVt",
                                            "--framer-font-family":
                                              '"Inter", "Inter Placeholder", sans-serif',
                                            "--framer-font-size": "14px",
                                            "--framer-font-weight": "500",
                                            "--framer-line-height": "72%",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children: "Satiety-Boosting",
                                        }),
                                      }),
                                      className: "framer-14hyc1d",
                                      fonts: ["Inter-Medium"],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  e("div", {
                                    className: "framer-1512rif",
                                    "data-border": !0,
                                    children: e(b, {
                                      __fromCanvasComponent: !0,
                                      children: e(f, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "SW50ZXItTWVkaXVt",
                                            "--framer-font-family":
                                              '"Inter", "Inter Placeholder", sans-serif',
                                            "--framer-font-size": "14px",
                                            "--framer-font-weight": "500",
                                            "--framer-line-height": "72%",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children: "Prebiotic",
                                        }),
                                      }),
                                      className: "framer-e24zn1",
                                      fonts: ["Inter-Medium"],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                              v("div", {
                                className: "framer-1mr8lti",
                                "data-framer-name": "Frame 139",
                                name: "Frame 139",
                                children: [
                                  e(A, {
                                    breakpoint: s,
                                    overrides: {
                                      FWFWx7bxY: {
                                        children: e(f, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnT0RBd0xDQWlkMlIwYUNJZ01UQXc=",
                                              "--framer-font-family":
                                                '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                              "--framer-font-size": "38px",
                                              "--framer-font-variation-axes":
                                                '"opsz" 96, "wght" 800, "wdth" 100',
                                              "--framer-line-height": "80%",
                                              "--framer-text-color":
                                                "var(--token-2b628465-dfc6-43a8-9465-243a89fbaf26, rgb(14, 96, 85))",
                                            },
                                            children: "FOS",
                                          }),
                                        }),
                                      },
                                    },
                                    children: e(b, {
                                      __fromCanvasComponent: !0,
                                      children: e(f, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnT0RBd0xDQWlkMlIwYUNJZ01UQXc=",
                                            "--framer-font-family":
                                              '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                            "--framer-font-size": "46px",
                                            "--framer-font-variation-axes":
                                              '"opsz" 96, "wght" 800, "wdth" 100',
                                            "--framer-line-height": "80%",
                                            "--framer-text-color":
                                              "var(--token-2b628465-dfc6-43a8-9465-243a89fbaf26, rgb(14, 96, 85))",
                                          },
                                          children: "FOS",
                                        }),
                                      }),
                                      className: "framer-1moveoy",
                                      "data-framer-name": "FOS",
                                      fonts: [
                                        "GF;Bricolage Grotesque-variable-regular",
                                      ],
                                      name: "FOS",
                                      verticalAlignment: "bottom",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  e(de, {
                                    className: "framer-j8w3i7",
                                    layout: "position",
                                    opacity: 1,
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 202 8"><path d="M 1 4 L 1.5 3.624 L 2 3.254 L 2.5 2.896 L 3 2.555 L 3.5 2.237 L 4 1.946 L 4.5 1.688 L 5 1.467 L 5.5 1.285 L 6 1.147 L 6.5 1.053 L 7 1.006 L 7.5 1.006 L 8 1.053 L 8.5 1.147 L 9 1.285 L 9.5 1.467 L 10 1.688 L 10.5 1.946 L 11 2.237 L 11.5 2.555 L 12 2.896 L 12.5 3.254 L 13 3.624 L 13.5 4 L 14 4.376 L 14.5 4.746 L 15 5.104 L 15.5 5.445 L 16 5.763 L 16.5 6.054 L 17 6.311 L 17.5 6.533 L 18 6.714 L 18.5 6.853 L 19 6.947 L 19.5 6.994 L 20 6.994 L 20.5 6.947 L 21 6.853 L 21.5 6.714 L 22 6.533 L 22.5 6.311 L 23 6.054 L 23.5 5.763 L 24 5.445 L 24.5 5.104 L 25 4.746 L 25.5 4.376 L 26 4 L 26.5 3.624 L 27 3.254 L 27.5 2.896 L 28 2.555 L 28.5 2.237 L 29 1.946 L 29.5 1.688 L 30 1.467 L 30.5 1.285 L 31 1.147 L 31.5 1.053 L 32 1.006 L 32.5 1.006 L 33 1.053 L 33.5 1.147 L 34 1.285 L 34.5 1.467 L 35 1.688 L 35.5 1.946 L 36 2.237 L 36.5 2.555 L 37 2.896 L 37.5 3.254 L 38 3.624 L 38.5 4 L 39 4.376 L 39.5 4.746 L 40 5.104 L 40.5 5.445 L 41 5.763 L 41.5 6.054 L 42 6.311 L 42.5 6.533 L 43 6.714 L 43.5 6.853 L 44 6.947 L 44.5 6.994 L 45 6.994 L 45.5 6.947 L 46 6.853 L 46.5 6.714 L 47 6.533 L 47.5 6.311 L 48 6.054 L 48.5 5.763 L 49 5.445 L 49.5 5.104 L 50 4.746 L 50.5 4.376 L 51 4 L 51.5 3.624 L 52 3.254 L 52.5 2.896 L 53 2.555 L 53.5 2.237 L 54 1.946 L 54.5 1.688 L 55 1.467 L 55.5 1.285 L 56 1.147 L 56.5 1.053 L 57 1.006 L 57.5 1.006 L 58 1.053 L 58.5 1.147 L 59 1.285 L 59.5 1.467 L 60 1.688 L 60.5 1.946 L 61 2.237 L 61.5 2.555 L 62 2.896 L 62.5 3.254 L 63 3.624 L 63.5 4 L 64 4.376 L 64.5 4.746 L 65 5.104 L 65.5 5.445 L 66 5.763 L 66.5 6.054 L 67 6.311 L 67.5 6.533 L 68 6.714 L 68.5 6.853 L 69 6.947 L 69.5 6.994 L 70 6.994 L 70.5 6.947 L 71 6.853 L 71.5 6.714 L 72 6.533 L 72.5 6.311 L 73 6.054 L 73.5 5.763 L 74 5.445 L 74.5 5.104 L 75 4.746 L 75.5 4.376 L 76 4 L 76.5 3.624 L 77 3.254 L 77.5 2.896 L 78 2.555 L 78.5 2.237 L 79 1.946 L 79.5 1.688 L 80 1.467 L 80.5 1.285 L 81 1.147 L 81.5 1.053 L 82 1.006 L 82.5 1.006 L 83 1.053 L 83.5 1.147 L 84 1.285 L 84.5 1.467 L 85 1.688 L 85.5 1.946 L 86 2.237 L 86.5 2.555 L 87 2.896 L 87.5 3.254 L 88 3.624 L 88.5 4 L 89 4.376 L 89.5 4.746 L 90 5.104 L 90.5 5.445 L 91 5.763 L 91.5 6.054 L 92 6.311 L 92.5 6.533 L 93 6.714 L 93.5 6.853 L 94 6.947 L 94.5 6.994 L 95 6.994 L 95.5 6.947 L 96 6.853 L 96.5 6.714 L 97 6.533 L 97.5 6.311 L 98 6.054 L 98.5 5.763 L 99 5.445 L 99.5 5.104 L 100 4.746 L 100.5 4.376 L 101 4 L 101.5 3.624 L 102 3.254 L 102.5 2.896 L 103 2.555 L 103.5 2.237 L 104 1.946 L 104.5 1.688 L 105 1.467 L 105.5 1.285 L 106 1.147 L 106.5 1.053 L 107 1.006 L 107.5 1.006 L 108 1.053 L 108.5 1.147 L 109 1.285 L 109.5 1.467 L 110 1.688 L 110.5 1.946 L 111 2.237 L 111.5 2.555 L 112 2.896 L 112.5 3.254 L 113 3.624 L 113.5 4 L 114 4.376 L 114.5 4.746 L 115 5.104 L 115.5 5.445 L 116 5.763 L 116.5 6.054 L 117 6.311 L 117.5 6.533 L 118 6.714 L 118.5 6.853 L 119 6.947 L 119.5 6.994 L 120 6.994 L 120.5 6.947 L 121 6.853 L 121.5 6.714 L 122 6.533 L 122.5 6.311 L 123 6.054 L 123.5 5.763 L 124 5.445 L 124.5 5.104 L 125 4.746 L 125.5 4.376 L 126 4 L 126.5 3.624 L 127 3.254 L 127.5 2.896 L 128 2.555 L 128.5 2.237 L 129 1.946 L 129.5 1.688 L 130 1.467 L 130.5 1.285 L 131 1.147 L 131.5 1.053 L 132 1.006 L 132.5 1.006 L 133 1.053 L 133.5 1.147 L 134 1.285 L 134.5 1.467 L 135 1.688 L 135.5 1.946 L 136 2.237 L 136.5 2.555 L 137 2.896 L 137.5 3.254 L 138 3.624 L 138.5 4 L 139 4.376 L 139.5 4.746 L 140 5.104 L 140.5 5.445 L 141 5.763 L 141.5 6.054 L 142 6.311 L 142.5 6.533 L 143 6.714 L 143.5 6.853 L 144 6.947 L 144.5 6.994 L 145 6.994 L 145.5 6.947 L 146 6.853 L 146.5 6.714 L 147 6.533 L 147.5 6.311 L 148 6.054 L 148.5 5.763 L 149 5.445 L 149.5 5.104 L 150 4.746 L 150.5 4.376 L 151 4 L 151.5 3.624 L 152 3.254 L 152.5 2.896 L 153 2.555 L 153.5 2.237 L 154 1.946 L 154.5 1.688 L 155 1.467 L 155.5 1.285 L 156 1.147 L 156.5 1.053 L 157 1.006 L 157.5 1.006 L 158 1.053 L 158.5 1.147 L 159 1.285 L 159.5 1.467 L 160 1.688 L 160.5 1.946 L 161 2.237 L 161.5 2.555 L 162 2.896 L 162.5 3.254 L 163 3.624 L 163.5 4 L 164 4.376 L 164.5 4.746 L 165 5.104 L 165.5 5.445 L 166 5.763 L 166.5 6.054 L 167 6.311 L 167.5 6.533 L 168 6.714 L 168.5 6.853 L 169 6.947 L 169.5 6.994 L 170 6.994 L 170.5 6.947 L 171 6.853 L 171.5 6.714 L 172 6.533 L 172.5 6.311 L 173 6.054 L 173.5 5.763 L 174 5.445 L 174.5 5.104 L 175 4.746 L 175.5 4.376 L 176 4 L 176.5 3.624 L 177 3.254 L 177.5 2.896 L 178 2.555 L 178.5 2.237 L 179 1.946 L 179.5 1.688 L 180 1.467 L 180.5 1.285 L 181 1.147 L 181.5 1.053 L 182 1.006 L 182.5 1.006 L 183 1.053 L 183.5 1.147 L 184 1.285 L 184.5 1.467 L 185 1.688 L 185.5 1.946 L 186 2.237 L 186.5 2.555 L 187 2.896 L 187.5 3.254 L 188 3.624 L 188.5 4 L 189 4.376 L 189.5 4.746 L 190 5.104 L 190.5 5.445 L 191 5.763 L 191.5 6.054 L 192 6.311 L 192.5 6.533 L 193 6.714 L 193.5 6.853 L 194 6.947 L 194.5 6.994 L 195 6.994 L 195.5 6.947 L 196 6.853 L 196.5 6.714 L 197 6.533 L 197.5 6.311 L 198 6.054 L 198.5 5.763 L 199 5.445 L 199.5 5.104 L 200 4.746 L 200.5 4.376" fill="transparent" stroke-width="2" stroke="var(--token-77edaaf9-45b5-4b44-a35e-1e64393147ac, rgb(38, 78, 56)) /* {&quot;name&quot;:&quot;Stroke&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                                    svgContentId: 11371492861,
                                    withExternalLayout: !0,
                                  }),
                                  e(A, {
                                    breakpoint: s,
                                    overrides: {
                                      FWFWx7bxY: {
                                        children: e(f, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-line-height": "130%",
                                              "--framer-text-alignment": "left",
                                              "--framer-text-color":
                                                "var(--token-2b628465-dfc6-43a8-9465-243a89fbaf26, rgb(14, 96, 85))",
                                            },
                                            children:
                                              "These miracle short-chain carbohydrates act as prebiotic fibers. They are indigestible by human enzymes, and instead promote the growth of beneficial gut bacteria.",
                                          }),
                                        }),
                                      },
                                    },
                                    children: e(b, {
                                      __fromCanvasComponent: !0,
                                      children: e(f, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "SW50ZXItTWVkaXVt",
                                            "--framer-font-family":
                                              '"Inter", "Inter Placeholder", sans-serif',
                                            "--framer-font-weight": "500",
                                            "--framer-line-height": "130%",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "var(--token-2b628465-dfc6-43a8-9465-243a89fbaf26, rgb(14, 96, 85))",
                                          },
                                          children:
                                            "These miracle short-chain carbohydrates act as prebiotic fibers. They are indigestible by human enzymes, and instead promote the growth of beneficial gut bacteria.",
                                        }),
                                      }),
                                      className: "framer-1cj4esz",
                                      "data-framer-name":
                                        "These miracle short-chain carbohydrates act as prebiotic fibers. They are indigestible by our enzymes, and instead promote the growth of beneficial gut bacteria.",
                                      fonts: ["Inter-Medium"],
                                      name: "These miracle short-chain carbohydrates act as prebiotic fibers. They are indigestible by our enzymes, and instead promote the growth of beneficial gut bacteria.",
                                      verticalAlignment: "bottom",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        e(A, {
                          breakpoint: s,
                          overrides: {
                            FWFWx7bxY: {
                              background: {
                                alt: "",
                                fit: "fill",
                                pixelHeight: 768,
                                pixelWidth: 1536,
                                sizes:
                                  "max((min(100vw, 1180px) - 88px) / 2, 50px)",
                                src: "/content/images/HYmHPtcZKjQ23ngtp64ao6KV8.png?lossless=1",
                                srcSet:
                                  "/content/images/HYmHPtcZKjQ23ngtp64ao6KV8.png?scale-down-to=512&lossless=1 512w,/content/images/HYmHPtcZKjQ23ngtp64ao6KV8.png?scale-down-to=1024&lossless=1 1024w,/content/images/HYmHPtcZKjQ23ngtp64ao6KV8.png?lossless=1 1536w",
                              },
                            },
                            HF8RfH6Up: {
                              background: {
                                alt: "",
                                fit: "fill",
                                pixelHeight: 768,
                                pixelWidth: 1536,
                                sizes: "min(min(100vw, 1180px) - 40px, 480px)",
                                src: "/content/images/HYmHPtcZKjQ23ngtp64ao6KV8.png?lossless=1",
                                srcSet:
                                  "/content/images/HYmHPtcZKjQ23ngtp64ao6KV8.png?scale-down-to=512&lossless=1 512w,/content/images/HYmHPtcZKjQ23ngtp64ao6KV8.png?scale-down-to=1024&lossless=1 1024w,/content/images/HYmHPtcZKjQ23ngtp64ao6KV8.png?lossless=1 1536w",
                              },
                            },
                          },
                          children: v(tr, {
                            background: {
                              alt: "",
                              fit: "fill",
                              pixelHeight: 768,
                              pixelWidth: 1536,
                              sizes:
                                "max((min(max((100vw - 24px) * 0.7059, 1px), 1180px) - 84px) / 2, 50px)",
                              src: "/content/images/HYmHPtcZKjQ23ngtp64ao6KV8.png?lossless=1",
                              srcSet:
                                "/content/images/HYmHPtcZKjQ23ngtp64ao6KV8.png?scale-down-to=512&lossless=1 512w,/content/images/HYmHPtcZKjQ23ngtp64ao6KV8.png?scale-down-to=1024&lossless=1 1024w,/content/images/HYmHPtcZKjQ23ngtp64ao6KV8.png?lossless=1 1536w",
                            },
                            className: "framer-1ebjp2m",
                            "data-framer-name":
                              "Jackfruit, placed on a wood table or butcher block, with accompanying items to give a more realistic feel. Made to feel like it's in a rustic, but modern kitchen. Natural lighting, depth of field.",
                            name: "Jackfruit, placed on a wood table or butcher block, with accompanying items to give a more realistic feel. Made to feel like it's in a rustic, but modern kitchen. Natural lighting, depth of field.",
                            children: [
                              e("div", {
                                className: "framer-kouwb5",
                                children: e("div", {
                                  className: "framer-4bp14j",
                                  children: e(b, {
                                    __fromCanvasComponent: !0,
                                    children: e(f, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector": "SW50ZXItTWVkaXVt",
                                          "--framer-font-family":
                                            '"Inter", "Inter Placeholder", sans-serif',
                                          "--framer-font-size": "14px",
                                          "--framer-font-weight": "500",
                                          "--framer-line-height": "72%",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children: "Energy",
                                      }),
                                    }),
                                    className: "framer-iz5o8i",
                                    fonts: ["Inter-Medium"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              }),
                              v("div", {
                                className: "framer-sghyt6",
                                "data-framer-name": "Frame 139",
                                name: "Frame 139",
                                children: [
                                  e(A, {
                                    breakpoint: s,
                                    overrides: {
                                      FWFWx7bxY: {
                                        children: e(f, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnT0RBd0xDQWlkMlIwYUNJZ01UQXc=",
                                              "--framer-font-family":
                                                '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                              "--framer-font-size": "38px",
                                              "--framer-font-variation-axes":
                                                '"opsz" 96, "wght" 800, "wdth" 100',
                                              "--framer-line-height": "80%",
                                              "--framer-text-color":
                                                "var(--token-2b628465-dfc6-43a8-9465-243a89fbaf26, rgb(14, 96, 85))",
                                            },
                                            children: "Sugarcane",
                                          }),
                                        }),
                                      },
                                    },
                                    children: e(b, {
                                      __fromCanvasComponent: !0,
                                      children: e(f, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnT0RBd0xDQWlkMlIwYUNJZ01UQXc=",
                                            "--framer-font-family":
                                              '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                            "--framer-font-size": "46px",
                                            "--framer-font-variation-axes":
                                              '"opsz" 96, "wght" 800, "wdth" 100',
                                            "--framer-line-height": "80%",
                                            "--framer-text-color":
                                              "var(--token-2b628465-dfc6-43a8-9465-243a89fbaf26, rgb(14, 96, 85))",
                                          },
                                          children: "Sugarcane",
                                        }),
                                      }),
                                      className: "framer-1x8udvi",
                                      "data-framer-name": "Sugarcane",
                                      fonts: [
                                        "GF;Bricolage Grotesque-variable-regular",
                                      ],
                                      name: "Sugarcane",
                                      verticalAlignment: "bottom",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  e(de, {
                                    className: "framer-m75vtm",
                                    layout: "position",
                                    opacity: 1,
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 202 8"><path d="M 1 4 L 1.5 3.624 L 2 3.254 L 2.5 2.896 L 3 2.555 L 3.5 2.237 L 4 1.946 L 4.5 1.688 L 5 1.467 L 5.5 1.285 L 6 1.147 L 6.5 1.053 L 7 1.006 L 7.5 1.006 L 8 1.053 L 8.5 1.147 L 9 1.285 L 9.5 1.467 L 10 1.688 L 10.5 1.946 L 11 2.237 L 11.5 2.555 L 12 2.896 L 12.5 3.254 L 13 3.624 L 13.5 4 L 14 4.376 L 14.5 4.746 L 15 5.104 L 15.5 5.445 L 16 5.763 L 16.5 6.054 L 17 6.311 L 17.5 6.533 L 18 6.714 L 18.5 6.853 L 19 6.947 L 19.5 6.994 L 20 6.994 L 20.5 6.947 L 21 6.853 L 21.5 6.714 L 22 6.533 L 22.5 6.311 L 23 6.054 L 23.5 5.763 L 24 5.445 L 24.5 5.104 L 25 4.746 L 25.5 4.376 L 26 4 L 26.5 3.624 L 27 3.254 L 27.5 2.896 L 28 2.555 L 28.5 2.237 L 29 1.946 L 29.5 1.688 L 30 1.467 L 30.5 1.285 L 31 1.147 L 31.5 1.053 L 32 1.006 L 32.5 1.006 L 33 1.053 L 33.5 1.147 L 34 1.285 L 34.5 1.467 L 35 1.688 L 35.5 1.946 L 36 2.237 L 36.5 2.555 L 37 2.896 L 37.5 3.254 L 38 3.624 L 38.5 4 L 39 4.376 L 39.5 4.746 L 40 5.104 L 40.5 5.445 L 41 5.763 L 41.5 6.054 L 42 6.311 L 42.5 6.533 L 43 6.714 L 43.5 6.853 L 44 6.947 L 44.5 6.994 L 45 6.994 L 45.5 6.947 L 46 6.853 L 46.5 6.714 L 47 6.533 L 47.5 6.311 L 48 6.054 L 48.5 5.763 L 49 5.445 L 49.5 5.104 L 50 4.746 L 50.5 4.376 L 51 4 L 51.5 3.624 L 52 3.254 L 52.5 2.896 L 53 2.555 L 53.5 2.237 L 54 1.946 L 54.5 1.688 L 55 1.467 L 55.5 1.285 L 56 1.147 L 56.5 1.053 L 57 1.006 L 57.5 1.006 L 58 1.053 L 58.5 1.147 L 59 1.285 L 59.5 1.467 L 60 1.688 L 60.5 1.946 L 61 2.237 L 61.5 2.555 L 62 2.896 L 62.5 3.254 L 63 3.624 L 63.5 4 L 64 4.376 L 64.5 4.746 L 65 5.104 L 65.5 5.445 L 66 5.763 L 66.5 6.054 L 67 6.311 L 67.5 6.533 L 68 6.714 L 68.5 6.853 L 69 6.947 L 69.5 6.994 L 70 6.994 L 70.5 6.947 L 71 6.853 L 71.5 6.714 L 72 6.533 L 72.5 6.311 L 73 6.054 L 73.5 5.763 L 74 5.445 L 74.5 5.104 L 75 4.746 L 75.5 4.376 L 76 4 L 76.5 3.624 L 77 3.254 L 77.5 2.896 L 78 2.555 L 78.5 2.237 L 79 1.946 L 79.5 1.688 L 80 1.467 L 80.5 1.285 L 81 1.147 L 81.5 1.053 L 82 1.006 L 82.5 1.006 L 83 1.053 L 83.5 1.147 L 84 1.285 L 84.5 1.467 L 85 1.688 L 85.5 1.946 L 86 2.237 L 86.5 2.555 L 87 2.896 L 87.5 3.254 L 88 3.624 L 88.5 4 L 89 4.376 L 89.5 4.746 L 90 5.104 L 90.5 5.445 L 91 5.763 L 91.5 6.054 L 92 6.311 L 92.5 6.533 L 93 6.714 L 93.5 6.853 L 94 6.947 L 94.5 6.994 L 95 6.994 L 95.5 6.947 L 96 6.853 L 96.5 6.714 L 97 6.533 L 97.5 6.311 L 98 6.054 L 98.5 5.763 L 99 5.445 L 99.5 5.104 L 100 4.746 L 100.5 4.376 L 101 4 L 101.5 3.624 L 102 3.254 L 102.5 2.896 L 103 2.555 L 103.5 2.237 L 104 1.946 L 104.5 1.688 L 105 1.467 L 105.5 1.285 L 106 1.147 L 106.5 1.053 L 107 1.006 L 107.5 1.006 L 108 1.053 L 108.5 1.147 L 109 1.285 L 109.5 1.467 L 110 1.688 L 110.5 1.946 L 111 2.237 L 111.5 2.555 L 112 2.896 L 112.5 3.254 L 113 3.624 L 113.5 4 L 114 4.376 L 114.5 4.746 L 115 5.104 L 115.5 5.445 L 116 5.763 L 116.5 6.054 L 117 6.311 L 117.5 6.533 L 118 6.714 L 118.5 6.853 L 119 6.947 L 119.5 6.994 L 120 6.994 L 120.5 6.947 L 121 6.853 L 121.5 6.714 L 122 6.533 L 122.5 6.311 L 123 6.054 L 123.5 5.763 L 124 5.445 L 124.5 5.104 L 125 4.746 L 125.5 4.376 L 126 4 L 126.5 3.624 L 127 3.254 L 127.5 2.896 L 128 2.555 L 128.5 2.237 L 129 1.946 L 129.5 1.688 L 130 1.467 L 130.5 1.285 L 131 1.147 L 131.5 1.053 L 132 1.006 L 132.5 1.006 L 133 1.053 L 133.5 1.147 L 134 1.285 L 134.5 1.467 L 135 1.688 L 135.5 1.946 L 136 2.237 L 136.5 2.555 L 137 2.896 L 137.5 3.254 L 138 3.624 L 138.5 4 L 139 4.376 L 139.5 4.746 L 140 5.104 L 140.5 5.445 L 141 5.763 L 141.5 6.054 L 142 6.311 L 142.5 6.533 L 143 6.714 L 143.5 6.853 L 144 6.947 L 144.5 6.994 L 145 6.994 L 145.5 6.947 L 146 6.853 L 146.5 6.714 L 147 6.533 L 147.5 6.311 L 148 6.054 L 148.5 5.763 L 149 5.445 L 149.5 5.104 L 150 4.746 L 150.5 4.376 L 151 4 L 151.5 3.624 L 152 3.254 L 152.5 2.896 L 153 2.555 L 153.5 2.237 L 154 1.946 L 154.5 1.688 L 155 1.467 L 155.5 1.285 L 156 1.147 L 156.5 1.053 L 157 1.006 L 157.5 1.006 L 158 1.053 L 158.5 1.147 L 159 1.285 L 159.5 1.467 L 160 1.688 L 160.5 1.946 L 161 2.237 L 161.5 2.555 L 162 2.896 L 162.5 3.254 L 163 3.624 L 163.5 4 L 164 4.376 L 164.5 4.746 L 165 5.104 L 165.5 5.445 L 166 5.763 L 166.5 6.054 L 167 6.311 L 167.5 6.533 L 168 6.714 L 168.5 6.853 L 169 6.947 L 169.5 6.994 L 170 6.994 L 170.5 6.947 L 171 6.853 L 171.5 6.714 L 172 6.533 L 172.5 6.311 L 173 6.054 L 173.5 5.763 L 174 5.445 L 174.5 5.104 L 175 4.746 L 175.5 4.376 L 176 4 L 176.5 3.624 L 177 3.254 L 177.5 2.896 L 178 2.555 L 178.5 2.237 L 179 1.946 L 179.5 1.688 L 180 1.467 L 180.5 1.285 L 181 1.147 L 181.5 1.053 L 182 1.006 L 182.5 1.006 L 183 1.053 L 183.5 1.147 L 184 1.285 L 184.5 1.467 L 185 1.688 L 185.5 1.946 L 186 2.237 L 186.5 2.555 L 187 2.896 L 187.5 3.254 L 188 3.624 L 188.5 4 L 189 4.376 L 189.5 4.746 L 190 5.104 L 190.5 5.445 L 191 5.763 L 191.5 6.054 L 192 6.311 L 192.5 6.533 L 193 6.714 L 193.5 6.853 L 194 6.947 L 194.5 6.994 L 195 6.994 L 195.5 6.947 L 196 6.853 L 196.5 6.714 L 197 6.533 L 197.5 6.311 L 198 6.054 L 198.5 5.763 L 199 5.445 L 199.5 5.104 L 200 4.746 L 200.5 4.376" fill="transparent" stroke-width="2" stroke="var(--token-77edaaf9-45b5-4b44-a35e-1e64393147ac, rgb(38, 78, 56)) /* {&quot;name&quot;:&quot;Stroke&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                                    svgContentId: 11371492861,
                                    withExternalLayout: !0,
                                  }),
                                  e(A, {
                                    breakpoint: s,
                                    overrides: {
                                      FWFWx7bxY: {
                                        children: e(f, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-line-height": "130%",
                                              "--framer-text-alignment": "left",
                                              "--framer-text-color":
                                                "var(--token-2b628465-dfc6-43a8-9465-243a89fbaf26, rgb(14, 96, 85))",
                                            },
                                            children:
                                              "Known for it\u2019s perfect sweetness, we utilize a small amount of raw sugar to help create our beautifully rich and smooth flavor.",
                                          }),
                                        }),
                                      },
                                    },
                                    children: e(b, {
                                      __fromCanvasComponent: !0,
                                      children: e(f, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "SW50ZXItTWVkaXVt",
                                            "--framer-font-family":
                                              '"Inter", "Inter Placeholder", sans-serif',
                                            "--framer-font-weight": "500",
                                            "--framer-line-height": "130%",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "var(--token-2b628465-dfc6-43a8-9465-243a89fbaf26, rgb(14, 96, 85))",
                                          },
                                          children:
                                            "Known for it\u2019s perfect sweetness, we utilize a small amount of raw sugar to help create our beautifully rich and smooth flavor.",
                                        }),
                                      }),
                                      className: "framer-r99it3",
                                      "data-framer-name":
                                        "Known for it\u2019s perfect sweetness, we utilize a small amount of raw sugar to help create our beautifully rich and smooth flavor.",
                                      fonts: ["Inter-Medium"],
                                      name: "Known for it\u2019s perfect sweetness, we utilize a small amount of raw sugar to help create our beautifully rich and smooth flavor.",
                                      verticalAlignment: "bottom",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                e("div", {
                  className: "framer-eqvi4p",
                  "data-framer-name": "Info",
                  id: k,
                  name: "Info",
                  ref: X,
                  children: v("div", {
                    className: "framer-sw4w0a",
                    children: [
                      v("div", {
                        className: "framer-17y1eiq",
                        children: [
                          e(A, {
                            breakpoint: s,
                            overrides: {
                              HF8RfH6Up: {
                                children: e(f, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnT0RBd0xDQWlkMlIwYUNJZ09UWT0=",
                                      "--framer-font-family":
                                        '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                      "--framer-font-size": "40px",
                                      "--framer-font-variation-axes":
                                        '"opsz" 96, "wght" 800, "wdth" 96',
                                      "--framer-line-height": "100%",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "var(--token-2b628465-dfc6-43a8-9465-243a89fbaf26, rgb(4, 73, 48))",
                                    },
                                    children:
                                      "Make it as sweet or subtle as you like.",
                                  }),
                                }),
                                viewBox: void 0,
                              },
                            },
                            children: e(b, {
                              __fromCanvasComponent: !0,
                              children: v(f, {
                                children: [
                                  e("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnT0RBd0xDQWlkMlIwYUNJZ01UQXc=",
                                      "--framer-font-family":
                                        '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                      "--framer-font-size":
                                        "48.66743916570104px",
                                      "--framer-font-variation-axes":
                                        '"opsz" 96, "wght" 800, "wdth" 100',
                                      "--framer-line-height": "100%",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "var(--token-2b628465-dfc6-43a8-9465-243a89fbaf26, rgb(4, 73, 48))",
                                    },
                                    children:
                                      "With Handshake, you decide how much to use.",
                                  }),
                                  e("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnT0RBd0xDQWlkMlIwYUNJZ01UQXc=",
                                      "--framer-font-family":
                                        '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                      "--framer-font-size":
                                        "48.66743916570104px",
                                      "--framer-font-variation-axes":
                                        '"opsz" 96, "wght" 800, "wdth" 100',
                                      "--framer-line-height": "100%",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "var(--token-2b628465-dfc6-43a8-9465-243a89fbaf26, rgb(4, 73, 48))",
                                    },
                                    children:
                                      "Make it as sweet or subtle as you like.",
                                  }),
                                ],
                              }),
                              className: "framer-m6ie8m",
                              fonts: [
                                "GF;Bricolage Grotesque-variable-regular",
                              ],
                              verticalAlignment: "bottom",
                              viewBox: "0 0 1000 97",
                              withExternalLayout: !0,
                            }),
                          }),
                          e(A, {
                            breakpoint: s,
                            overrides: {
                              FWFWx7bxY: {
                                children: e(f, {
                                  children: e("h1", {
                                    style: {
                                      "--font-selector": "SW50ZXItTWVkaXVt",
                                      "--framer-font-family":
                                        '"Inter", "Inter Placeholder", sans-serif',
                                      "--framer-font-weight": "500",
                                      "--framer-letter-spacing": "0px",
                                      "--framer-line-height": "1.4em",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "var(--token-2b628465-dfc6-43a8-9465-243a89fbaf26, rgb(14, 96, 85))",
                                    },
                                    children:
                                      "It doesn't matter if it's hot or cold, just add Handshake to the beverage base of your choosing \u2014 espresso, gin, sparkling water \u2014 and enjoy.",
                                  }),
                                }),
                              },
                              HF8RfH6Up: {
                                children: e(f, {
                                  children: e("h1", {
                                    style: {
                                      "--font-selector": "SW50ZXItTWVkaXVt",
                                      "--framer-font-family":
                                        '"Inter", "Inter Placeholder", sans-serif',
                                      "--framer-font-weight": "500",
                                      "--framer-letter-spacing": "0px",
                                      "--framer-line-height": "1.4em",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "var(--token-2b628465-dfc6-43a8-9465-243a89fbaf26, rgb(14, 96, 85))",
                                    },
                                    children:
                                      "It doesn't matter if it's hot or cold, just add Handshake to the beverage base of your choosing \u2014 espresso, gin, sparkling water \u2014 and enjoy.",
                                  }),
                                }),
                              },
                            },
                            children: e(b, {
                              __fromCanvasComponent: !0,
                              children: e(f, {
                                children: e("h1", {
                                  style: {
                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-size": "18px",
                                    "--framer-font-weight": "500",
                                    "--framer-letter-spacing": "0px",
                                    "--framer-line-height": "1.4em",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--token-2b628465-dfc6-43a8-9465-243a89fbaf26, rgb(14, 96, 85))",
                                  },
                                  children:
                                    "It doesn't matter if it's hot or cold, just add Handshake to the beverage base of your choosing \u2014 espresso, gin, sparkling water \u2014 and enjoy.",
                                }),
                              }),
                              className: "framer-s5swy3",
                              fonts: ["Inter-Medium"],
                              verticalAlignment: "center",
                              withExternalLayout: !0,
                            }),
                          }),
                        ],
                      }),
                      e(L, {
                        height: 48,
                        children: e(ce, {
                          className: "framer-1a2ch2r-container",
                          children: e(wt, {
                            height: "100%",
                            id: "HpBkINPgY",
                            layoutId: "HpBkINPgY",
                            width: "100%",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                v("div", {
                  className: "framer-1u5etz7",
                  "data-framer-name": "Info",
                  id: T,
                  name: "Info",
                  ref: F,
                  children: [
                    e("div", {
                      className: "framer-xyzsd1",
                      children: e(L, {
                        children: e(ce, {
                          className: "framer-132rr3h-container",
                          children: e(Le, {
                            customColor: "rgb(245, 245, 250)",
                            customPadding: 0,
                            customStrokeWidth: 1.5,
                            customSvgCode:
                              '<svg width="2400" height="127" viewBox="0 0 2400 127" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0 126.75C5.94 126.75 5.94 120.75 11.89 120.75C17.84 120.75 17.83 126.75 23.78 126.75C29.73 126.75 29.72 120.75 35.67 120.75C41.61 120.75 41.61 126.75 47.56 126.75C53.5 126.75 53.5 120.75 59.45 120.75C65.39 120.75 65.39 126.75 71.34 126.75C77.29 126.75 77.28 120.75 83.22 120.75C89.16 120.75 89.16 126.75 95.1 126.75C101.04 126.75 101.04 120.75 106.98 120.75C112.92 120.75 112.92 126.75 118.86 126.75C124.8 126.75 124.8 120.75 130.74 120.75C136.68 120.75 136.68 126.75 142.62 126.75C148.56 126.75 148.56 120.75 154.5 120.75C160.44 120.75 160.44 126.75 166.38 126.75C172.32 126.75 172.32 120.75 178.26 120.75C184.2 120.75 184.2 126.75 190.14 126.75C196.08 126.75 196.08 120.75 202.02 120.75C207.96 120.75 207.96 126.75 213.9 126.75C219.84 126.75 219.84 120.75 225.78 120.75C231.72 120.75 231.72 126.75 237.66 126.75C243.6 126.75 243.6 120.75 249.54 120.75C255.48 120.75 255.48 126.75 261.42 126.75C267.36 126.75 267.36 120.75 273.3 120.75C279.24 120.75 279.24 126.75 285.18 126.75C291.12 126.75 291.12 120.75 297.06 120.75C303 120.75 303 126.75 308.94 126.75C314.88 126.75 314.88 120.75 320.82 120.75C326.76 120.75 326.76 126.75 332.7 126.75C338.64 126.75 338.64 120.75 344.58 120.75C350.52 120.75 350.52 126.75 356.46 126.75C362.4 126.75 362.4 120.75 368.34 120.75C374.28 120.75 374.28 126.75 380.22 126.75C386.16 126.75 386.16 120.75 392.1 120.75C398.04 120.75 398.04 126.75 403.98 126.75C409.92 126.75 409.92 120.75 415.86 120.75C421.8 120.75 421.8 126.75 427.74 126.75C433.68 126.75 433.68 120.75 439.62 120.75C445.56 120.75 445.56 126.75 451.5 126.75C457.44 126.75 457.44 120.75 463.38 120.75C469.32 120.75 469.32 126.75 475.26 126.75C481.2 126.75 481.2 120.75 487.14 120.75C493.08 120.75 493.08 126.75 499.02 126.75C504.96 126.75 504.96 120.75 510.9 120.75C516.84 120.75 516.84 126.75 522.78 126.75C528.72 126.75 528.72 120.75 534.66 120.75C540.6 120.75 540.6 126.75 546.54 126.75C552.48 126.75 552.48 120.75 558.42 120.75C564.36 120.75 564.36 126.75 570.3 126.75C576.24 126.75 576.24 120.75 582.18 120.75C588.12 120.75 588.12 126.75 594.06 126.75C600 126.75 600 120.75 605.94 120.75C611.88 120.75 611.88 126.75 617.82 126.75C623.76 126.75 623.76 120.75 629.7 120.75C635.64 120.75 635.64 126.75 641.58 126.75C647.52 126.75 647.52 120.75 653.46 120.75C659.4 120.75 659.4 126.75 665.34 126.75C671.28 126.75 671.28 120.75 677.22 120.75C683.16 120.75 683.16 126.75 689.1 126.75C695.04 126.75 695.04 120.75 700.98 120.75C706.92 120.75 706.92 126.75 712.86 126.75C718.8 126.75 718.8 120.75 724.74 120.75C730.68 120.75 730.68 126.75 736.62 126.75C742.56 126.75 742.56 120.75 748.5 120.75C754.44 120.75 754.44 126.75 760.38 126.75C766.32 126.75 766.32 120.75 772.26 120.75C778.2 120.75 778.2 126.75 784.14 126.75C790.08 126.75 790.08 120.75 796.02 120.75C801.96 120.75 801.96 126.75 807.9 126.75C813.84 126.75 813.84 120.75 819.78 120.75C825.72 120.75 825.72 126.75 831.66 126.75C837.6 126.75 837.6 120.75 843.54 120.75C849.48 120.75 849.48 126.75 855.42 126.75C861.36 126.75 861.36 120.75 867.3 120.75C873.24 120.75 873.24 126.75 879.18 126.75C885.12 126.75 885.12 120.75 891.06 120.75C897 120.75 897 126.75 902.94 126.75C908.88 126.75 908.88 120.75 914.82 120.75C920.76 120.75 920.76 126.75 926.7 126.75C932.64 126.75 932.64 120.75 938.58 120.75C944.52 120.75 944.52 126.75 950.46 126.75C956.4 126.75 956.4 120.75 962.34 120.75C968.28 120.75 968.28 126.75 974.22 126.75C980.16 126.75 980.16 120.75 986.1 120.75C992.04 120.75 992.04 126.75 997.98 126.75C1003.92 126.75 1003.92 120.75 1009.86 120.75C1015.8 120.75 1015.8 126.75 1021.74 126.75C1027.68 126.75 1027.68 120.75 1033.62 120.75C1039.56 120.75 1039.56 126.75 1045.5 126.75C1051.44 126.75 1051.44 120.75 1057.38 120.75C1063.32 120.75 1063.32 126.75 1069.26 126.75C1075.2 126.75 1075.2 120.75 1081.14 120.75C1087.08 120.75 1087.08 126.75 1093.02 126.75C1098.96 126.75 1098.96 120.75 1104.9 120.75C1110.84 120.75 1110.84 126.75 1116.78 126.75C1122.72 126.75 1122.72 120.75 1128.66 120.75C1134.6 120.75 1134.6 126.75 1140.54 126.75C1146.48 126.75 1146.48 120.75 1152.42 120.75C1158.36 120.75 1158.36 126.75 1164.3 126.75C1170.24 126.75 1170.24 120.75 1176.18 120.75C1182.12 120.75 1182.12 126.75 1188.06 126.75C1194 126.75 1194 120.75 1199.94 120.75C1205.88 120.75 1205.88 126.75 1211.83 126.75C1217.78 126.75 1217.77 120.75 1223.72 120.75C1229.67 120.75 1229.66 126.75 1235.61 126.75C1241.55 126.75 1241.55 120.75 1247.5 120.75C1253.44 120.75 1253.44 126.75 1259.39 126.75C1265.33 126.75 1265.33 120.75 1271.28 120.75C1277.23 120.75 1277.22 126.75 1283.16 126.75C1289.1 126.75 1289.1 120.75 1295.04 120.75C1300.98 120.75 1300.98 126.75 1306.92 126.75C1312.86 126.75 1312.86 120.75 1318.8 120.75C1324.74 120.75 1324.74 126.75 1330.68 126.75C1336.62 126.75 1336.62 120.75 1342.56 120.75C1348.5 120.75 1348.5 126.75 1354.44 126.75C1360.38 126.75 1360.38 120.75 1366.32 120.75C1372.26 120.75 1372.26 126.75 1378.2 126.75C1384.14 126.75 1384.14 120.75 1390.08 120.75C1396.02 120.75 1396.02 126.75 1401.96 126.75C1407.9 126.75 1407.9 120.75 1413.84 120.75C1419.78 120.75 1419.78 126.75 1425.72 126.75C1431.66 126.75 1431.66 120.75 1437.6 120.75C1443.54 120.75 1443.54 126.75 1449.48 126.75C1455.42 126.75 1455.42 120.75 1461.36 120.75C1467.3 120.75 1467.3 126.75 1473.24 126.75C1479.18 126.75 1479.18 120.75 1485.12 120.75C1491.06 120.75 1491.06 126.75 1497 126.75C1502.94 126.75 1502.94 120.75 1508.88 120.75C1514.82 120.75 1514.82 126.75 1520.76 126.75C1526.7 126.75 1526.7 120.75 1532.64 120.75C1538.58 120.75 1538.58 126.75 1544.52 126.75C1550.46 126.75 1550.46 120.75 1556.4 120.75C1562.34 120.75 1562.34 126.75 1568.28 126.75C1574.22 126.75 1574.22 120.75 1580.16 120.75C1586.1 120.75 1586.1 126.75 1592.04 126.75C1597.98 126.75 1597.98 120.75 1603.92 120.75C1609.86 120.75 1609.86 126.75 1615.8 126.75C1621.74 126.75 1621.74 120.75 1627.68 120.75C1633.62 120.75 1633.62 126.75 1639.56 126.75C1645.5 126.75 1645.5 120.75 1651.44 120.75C1657.38 120.75 1657.38 126.75 1663.32 126.75C1669.26 126.75 1669.26 120.75 1675.2 120.75C1681.14 120.75 1681.14 126.75 1687.08 126.75C1693.02 126.75 1693.02 120.75 1698.96 120.75C1704.9 120.75 1704.9 126.75 1710.84 126.75C1716.78 126.75 1716.78 120.75 1722.72 120.75C1728.66 120.75 1728.66 126.75 1734.6 126.75C1740.54 126.75 1740.54 120.75 1746.48 120.75C1752.42 120.75 1752.42 126.75 1758.36 126.75C1764.3 126.75 1764.3 120.75 1770.24 120.75C1776.18 120.75 1776.18 126.75 1782.12 126.75C1788.06 126.75 1788.06 120.75 1794 120.75C1799.94 120.75 1799.94 126.75 1805.88 126.75C1811.82 126.75 1811.82 120.75 1817.76 120.75C1823.7 120.75 1823.7 126.75 1829.64 126.75C1835.58 126.75 1835.58 120.75 1841.52 120.75C1847.46 120.75 1847.46 126.75 1853.4 126.75C1859.34 126.75 1859.34 120.75 1865.28 120.75C1871.22 120.75 1871.22 126.75 1877.16 126.75C1883.1 126.75 1883.1 120.75 1889.04 120.75C1894.98 120.75 1894.98 126.75 1900.92 126.75C1906.86 126.75 1906.86 120.75 1912.8 120.75C1918.74 120.75 1918.74 126.75 1924.68 126.75C1930.62 126.75 1930.62 120.75 1936.56 120.75C1942.5 120.75 1942.5 126.75 1948.44 126.75C1954.38 126.75 1954.38 120.75 1960.32 120.75C1966.26 120.75 1966.26 126.75 1972.2 126.75C1978.14 126.75 1978.14 120.75 1984.08 120.75C1990.02 120.75 1990.02 126.75 1995.96 126.75C2001.9 126.75 2001.9 120.75 2007.84 120.75C2013.78 120.75 2013.78 126.75 2019.72 126.75C2025.66 126.75 2025.66 120.75 2031.6 120.75C2037.54 120.75 2037.54 126.75 2043.48 126.75C2049.42 126.75 2049.42 120.75 2055.36 120.75C2061.3 120.75 2061.3 126.75 2067.24 126.75C2073.18 126.75 2073.18 120.75 2079.12 120.75C2085.06 120.75 2085.06 126.75 2091 126.75C2096.94 126.75 2096.94 120.75 2102.88 120.75C2108.82 120.75 2108.82 126.75 2114.76 126.75C2120.7 126.75 2120.7 120.75 2126.64 120.75C2132.58 120.75 2132.58 126.75 2138.52 126.75C2144.46 126.75 2144.46 120.75 2150.4 120.75C2156.34 120.75 2156.34 126.75 2162.28 126.75C2168.22 126.75 2168.22 120.75 2174.16 120.75C2180.1 120.75 2180.1 126.75 2186.04 126.75C2191.98 126.75 2191.98 120.75 2197.92 120.75C2203.86 120.75 2203.86 126.75 2209.8 126.75C2215.74 126.75 2215.74 120.75 2221.68 120.75C2227.62 120.75 2227.62 126.75 2233.56 126.75C2239.5 126.75 2239.5 120.75 2245.44 120.75C2251.38 120.75 2251.38 126.75 2257.32 126.75C2263.26 126.75 2263.26 120.75 2269.2 120.75C2275.14 120.75 2275.14 126.75 2281.08 126.75C2287.02 126.75 2287.02 120.75 2292.96 120.75C2298.9 120.75 2298.9 126.75 2304.84 126.75C2310.78 126.75 2310.78 120.75 2316.72 120.75C2322.66 120.75 2322.66 126.75 2328.6 126.75C2334.54 126.75 2334.54 120.75 2340.48 120.75C2346.42 120.75 2346.42 126.75 2352.36 126.75C2358.3 126.75 2358.3 120.75 2364.24 120.75C2370.18 120.75 2370.18 126.75 2376.12 126.75C2382.06 126.75 2382.06 120.75 2388 120.75C2393.94 120.75 2393.94 126.75 2399.88 126.75V6.75C2393.94 6.75 2393.94 0.75 2388 0.75C2382.06 0.75 2382.06 6.75 2376.12 6.75C2370.18 6.75 2370.18 0.75 2364.24 0.75C2358.3 0.75 2358.3 6.75 2352.36 6.75C2346.42 6.75 2346.42 0.75 2340.48 0.75C2334.54 0.75 2334.54 6.75 2328.6 6.75C2322.66 6.75 2322.66 0.75 2316.72 0.75C2310.78 0.75 2310.78 6.75 2304.84 6.75C2298.9 6.75 2298.9 0.75 2292.96 0.75C2287.02 0.75 2287.02 6.75 2281.08 6.75C2275.14 6.75 2275.14 0.75 2269.2 0.75C2263.26 0.75 2263.26 6.75 2257.32 6.75C2251.38 6.75 2251.38 0.75 2245.44 0.75C2239.5 0.75 2239.5 6.75 2233.56 6.75C2227.62 6.75 2227.62 0.75 2221.68 0.75C2215.74 0.75 2215.74 6.75 2209.8 6.75C2203.86 6.75 2203.86 0.75 2197.92 0.75C2191.98 0.75 2191.98 6.75 2186.04 6.75C2180.1 6.75 2180.1 0.75 2174.16 0.75C2168.22 0.75 2168.22 6.75 2162.28 6.75C2156.34 6.75 2156.34 0.75 2150.4 0.75C2144.46 0.75 2144.46 6.75 2138.52 6.75C2132.58 6.75 2132.58 0.75 2126.64 0.75C2120.7 0.75 2120.7 6.75 2114.76 6.75C2108.82 6.75 2108.82 0.75 2102.88 0.75C2096.94 0.75 2096.94 6.75 2091 6.75C2085.06 6.75 2085.06 0.75 2079.12 0.75C2073.18 0.75 2073.18 6.75 2067.24 6.75C2061.3 6.75 2061.3 0.75 2055.36 0.75C2049.42 0.75 2049.42 6.75 2043.48 6.75C2037.54 6.75 2037.54 0.75 2031.6 0.75C2025.66 0.75 2025.66 6.75 2019.72 6.75C2013.78 6.75 2013.78 0.75 2007.84 0.75C2001.9 0.75 2001.9 6.75 1995.96 6.75C1990.02 6.75 1990.02 0.75 1984.08 0.75C1978.14 0.75 1978.14 6.75 1972.2 6.75C1966.26 6.75 1966.26 0.75 1960.32 0.75C1954.38 0.75 1954.38 6.75 1948.44 6.75C1942.5 6.75 1942.5 0.75 1936.56 0.75C1930.62 0.75 1930.62 6.75 1924.68 6.75C1918.74 6.75 1918.74 0.75 1912.8 0.75C1906.86 0.75 1906.86 6.75 1900.92 6.75C1894.98 6.75 1894.98 0.75 1889.04 0.75C1883.1 0.75 1883.1 6.75 1877.16 6.75C1871.22 6.75 1871.22 0.75 1865.28 0.75C1859.34 0.75 1859.34 6.75 1853.4 6.75C1847.46 6.75 1847.46 0.75 1841.52 0.75C1835.58 0.75 1835.58 6.75 1829.64 6.75C1823.7 6.75 1823.7 0.75 1817.76 0.75C1811.82 0.75 1811.82 6.75 1805.88 6.75C1799.94 6.75 1799.94 0.75 1794 0.75C1788.06 0.75 1788.06 6.75 1782.12 6.75C1776.18 6.75 1776.18 0.75 1770.24 0.75C1764.3 0.75 1764.3 6.75 1758.36 6.75C1752.42 6.75 1752.42 0.75 1746.48 0.75C1740.54 0.75 1740.54 6.75 1734.6 6.75C1728.66 6.75 1728.66 0.75 1722.72 0.75C1716.78 0.75 1716.78 6.75 1710.84 6.75C1704.9 6.75 1704.9 0.75 1698.96 0.75C1693.02 0.75 1693.02 6.75 1687.08 6.75C1681.14 6.75 1681.14 0.75 1675.2 0.75C1669.26 0.75 1669.26 6.75 1663.32 6.75C1657.38 6.75 1657.38 0.75 1651.44 0.75C1645.5 0.75 1645.5 6.75 1639.56 6.75C1633.62 6.75 1633.62 0.75 1627.68 0.75C1621.74 0.75 1621.74 6.75 1615.8 6.75C1609.86 6.75 1609.86 0.75 1603.92 0.75C1597.98 0.75 1597.98 6.75 1592.04 6.75C1586.1 6.75 1586.1 0.75 1580.16 0.75C1574.22 0.75 1574.22 6.75 1568.28 6.75C1562.34 6.75 1562.34 0.75 1556.4 0.75C1550.46 0.75 1550.46 6.75 1544.52 6.75C1538.58 6.75 1538.58 0.75 1532.64 0.75C1526.7 0.75 1526.7 6.75 1520.76 6.75C1514.82 6.75 1514.82 0.75 1508.88 0.75C1502.94 0.75 1502.94 6.75 1497 6.75C1491.06 6.75 1491.06 0.75 1485.12 0.75C1479.18 0.75 1479.18 6.75 1473.24 6.75C1467.3 6.75 1467.3 0.75 1461.36 0.75C1455.42 0.75 1455.42 6.75 1449.48 6.75C1443.54 6.75 1443.54 0.75 1437.6 0.75C1431.66 0.75 1431.66 6.75 1425.72 6.75C1419.78 6.75 1419.78 0.75 1413.84 0.75C1407.9 0.75 1407.9 6.75 1401.96 6.75C1396.02 6.75 1396.02 0.75 1390.08 0.75C1384.14 0.75 1384.14 6.75 1378.2 6.75C1372.26 6.75 1372.26 0.75 1366.32 0.75C1360.38 0.75 1360.38 6.75 1354.44 6.75C1348.5 6.75 1348.5 0.75 1342.56 0.75C1336.62 0.75 1336.62 6.75 1330.68 6.75C1324.74 6.75 1324.74 0.75 1318.8 0.75C1312.86 0.75 1312.86 6.75 1306.92 6.75C1300.98 6.75 1300.98 0.75 1295.04 0.75C1289.1 0.75 1289.1 6.75 1283.16 6.75C1277.22 6.75 1277.22 0.75 1271.28 0.75C1265.34 0.75 1265.34 6.75 1259.39 6.75C1253.45 6.75 1253.45 0.75 1247.5 0.75C1241.56 0.75 1241.56 6.75 1235.61 6.75C1229.67 6.75 1229.67 0.75 1223.72 0.75C1217.77 0.75 1217.78 6.75 1211.83 6.75C1205.88 6.75 1205.89 0.75 1199.94 0.75C1194 0.75 1194 6.75 1188.06 6.75C1182.12 6.75 1182.12 0.75 1176.18 0.75C1170.24 0.75 1170.24 6.75 1164.3 6.75C1158.36 6.75 1158.36 0.75 1152.42 0.75C1146.48 0.75 1146.48 6.75 1140.54 6.75C1134.6 6.75 1134.6 0.75 1128.66 0.75C1122.72 0.75 1122.72 6.75 1116.78 6.75C1110.84 6.75 1110.84 0.75 1104.9 0.75C1098.96 0.75 1098.96 6.75 1093.02 6.75C1087.08 6.75 1087.08 0.75 1081.14 0.75C1075.2 0.75 1075.2 6.75 1069.26 6.75C1063.32 6.75 1063.32 0.75 1057.38 0.75C1051.44 0.75 1051.44 6.75 1045.5 6.75C1039.56 6.75 1039.56 0.75 1033.62 0.75C1027.68 0.75 1027.68 6.75 1021.74 6.75C1015.8 6.75 1015.8 0.75 1009.86 0.75C1003.92 0.75 1003.92 6.75 997.98 6.75C992.04 6.75 992.04 0.75 986.1 0.75C980.16 0.75 980.16 6.75 974.22 6.75C968.28 6.75 968.28 0.75 962.34 0.75C956.4 0.75 956.4 6.75 950.46 6.75C944.52 6.75 944.52 0.75 938.58 0.75C932.64 0.75 932.64 6.75 926.7 6.75C920.76 6.75 920.76 0.75 914.82 0.75C908.88 0.75 908.88 6.75 902.94 6.75C897 6.75 897 0.75 891.06 0.75C885.12 0.75 885.12 6.75 879.18 6.75C873.24 6.75 873.24 0.75 867.3 0.75C861.36 0.75 861.36 6.75 855.42 6.75C849.48 6.75 849.48 0.75 843.54 0.75C837.6 0.75 837.6 6.75 831.66 6.75C825.72 6.75 825.72 0.75 819.78 0.75C813.84 0.75 813.84 6.75 807.9 6.75C801.96 6.75 801.96 0.75 796.02 0.75C790.08 0.75 790.08 6.75 784.14 6.75C778.2 6.75 778.2 0.75 772.26 0.75C766.32 0.75 766.32 6.75 760.38 6.75C754.44 6.75 754.44 0.75 748.5 0.75C742.56 0.75 742.56 6.75 736.62 6.75C730.68 6.75 730.68 0.75 724.74 0.75C718.8 0.75 718.8 6.75 712.86 6.75C706.92 6.75 706.92 0.75 700.98 0.75C695.04 0.75 695.04 6.75 689.1 6.75C683.16 6.75 683.16 0.75 677.22 0.75C671.28 0.75 671.28 6.75 665.34 6.75C659.4 6.75 659.4 0.75 653.46 0.75C647.52 0.75 647.52 6.75 641.58 6.75C635.64 6.75 635.64 0.75 629.7 0.75C623.76 0.75 623.76 6.75 617.82 6.75C611.88 6.75 611.88 0.75 605.94 0.75C600 0.75 600 6.75 594.06 6.75C588.12 6.75 588.12 0.75 582.18 0.75C576.24 0.75 576.24 6.75 570.3 6.75C564.36 6.75 564.36 0.75 558.42 0.75C552.48 0.75 552.48 6.75 546.54 6.75C540.6 6.75 540.6 0.75 534.66 0.75C528.72 0.75 528.72 6.75 522.78 6.75C516.84 6.75 516.84 0.75 510.9 0.75C504.96 0.75 504.96 6.75 499.02 6.75C493.08 6.75 493.08 0.75 487.14 0.75C481.2 0.75 481.2 6.75 475.26 6.75C469.32 6.75 469.32 0.75 463.38 0.75C457.44 0.75 457.44 6.75 451.5 6.75C445.56 6.75 445.56 0.75 439.62 0.75C433.68 0.75 433.68 6.75 427.74 6.75C421.8 6.75 421.8 0.75 415.86 0.75C409.92 0.75 409.92 6.75 403.98 6.75C398.04 6.75 398.04 0.75 392.1 0.75C386.16 0.75 386.16 6.75 380.22 6.75C374.28 6.75 374.28 0.75 368.34 0.75C362.4 0.75 362.4 6.75 356.46 6.75C350.52 6.75 350.52 0.75 344.58 0.75C338.64 0.75 338.64 6.75 332.7 6.75C326.76 6.75 326.76 0.75 320.82 0.75C314.88 0.75 314.88 6.75 308.94 6.75C303 6.75 303 0.75 297.06 0.75C291.12 0.75 291.12 6.75 285.18 6.75C279.24 6.75 279.24 0.75 273.3 0.75C267.36 0.75 267.36 6.75 261.42 6.75C255.48 6.75 255.48 0.75 249.54 0.75C243.6 0.75 243.6 6.75 237.66 6.75C231.72 6.75 231.72 0.75 225.78 0.75C219.84 0.75 219.84 6.75 213.9 6.75C207.96 6.75 207.96 0.75 202.02 0.75C196.08 0.75 196.08 6.75 190.14 6.75C184.2 6.75 184.2 0.75 178.26 0.75C172.32 0.75 172.32 6.75 166.38 6.75C160.44 6.75 160.44 0.75 154.5 0.75C148.56 0.75 148.56 6.75 142.62 6.75C136.68 6.75 136.68 0.75 130.74 0.75C124.8 0.75 124.8 6.75 118.86 6.75C112.92 6.75 112.92 0.75 106.98 0.75C101.04 0.75 101.04 6.75 95.1 6.75C89.16 6.75 89.16 0.75 83.22 0.75C77.28 0.75 77.28 6.75 71.34 6.75C65.4 6.75 65.4 0.75 59.45 0.75C53.51 0.75 53.51 6.75 47.56 6.75C41.62 6.75 41.62 0.75 35.67 0.75C29.73 0.75 29.73 6.75 23.78 6.75C17.83 6.75 17.83 0.75 11.89 0.75C5.95 0.75 5.94 6.75 0 6.75V126.75Z" fill="#BBBBBB"/> </svg>',
                            height: "100%",
                            id: "AS4BkNwWQ",
                            layoutId: "AS4BkNwWQ",
                            lineCap: "butt",
                            lineJoin: "miter",
                            style: { height: "100%", width: "100%" },
                            width: "100%",
                          }),
                        }),
                      }),
                    }),
                    e("div", {
                      className: "framer-vzv8br",
                      children: e(L, {
                        children: e(ce, {
                          className: "framer-1dx9agd-container",
                          children: e(Le, {
                            customColor: "rgb(255, 255, 255)",
                            customPadding: 0,
                            customStrokeWidth: 1.5,
                            customSvgCode:
                              '<svg width="2400" height="127" viewBox="0 0 2400 127" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0 126.75C5.94 126.75 5.94 120.75 11.89 120.75C17.84 120.75 17.83 126.75 23.78 126.75C29.73 126.75 29.72 120.75 35.67 120.75C41.61 120.75 41.61 126.75 47.56 126.75C53.5 126.75 53.5 120.75 59.45 120.75C65.39 120.75 65.39 126.75 71.34 126.75C77.29 126.75 77.28 120.75 83.22 120.75C89.16 120.75 89.16 126.75 95.1 126.75C101.04 126.75 101.04 120.75 106.98 120.75C112.92 120.75 112.92 126.75 118.86 126.75C124.8 126.75 124.8 120.75 130.74 120.75C136.68 120.75 136.68 126.75 142.62 126.75C148.56 126.75 148.56 120.75 154.5 120.75C160.44 120.75 160.44 126.75 166.38 126.75C172.32 126.75 172.32 120.75 178.26 120.75C184.2 120.75 184.2 126.75 190.14 126.75C196.08 126.75 196.08 120.75 202.02 120.75C207.96 120.75 207.96 126.75 213.9 126.75C219.84 126.75 219.84 120.75 225.78 120.75C231.72 120.75 231.72 126.75 237.66 126.75C243.6 126.75 243.6 120.75 249.54 120.75C255.48 120.75 255.48 126.75 261.42 126.75C267.36 126.75 267.36 120.75 273.3 120.75C279.24 120.75 279.24 126.75 285.18 126.75C291.12 126.75 291.12 120.75 297.06 120.75C303 120.75 303 126.75 308.94 126.75C314.88 126.75 314.88 120.75 320.82 120.75C326.76 120.75 326.76 126.75 332.7 126.75C338.64 126.75 338.64 120.75 344.58 120.75C350.52 120.75 350.52 126.75 356.46 126.75C362.4 126.75 362.4 120.75 368.34 120.75C374.28 120.75 374.28 126.75 380.22 126.75C386.16 126.75 386.16 120.75 392.1 120.75C398.04 120.75 398.04 126.75 403.98 126.75C409.92 126.75 409.92 120.75 415.86 120.75C421.8 120.75 421.8 126.75 427.74 126.75C433.68 126.75 433.68 120.75 439.62 120.75C445.56 120.75 445.56 126.75 451.5 126.75C457.44 126.75 457.44 120.75 463.38 120.75C469.32 120.75 469.32 126.75 475.26 126.75C481.2 126.75 481.2 120.75 487.14 120.75C493.08 120.75 493.08 126.75 499.02 126.75C504.96 126.75 504.96 120.75 510.9 120.75C516.84 120.75 516.84 126.75 522.78 126.75C528.72 126.75 528.72 120.75 534.66 120.75C540.6 120.75 540.6 126.75 546.54 126.75C552.48 126.75 552.48 120.75 558.42 120.75C564.36 120.75 564.36 126.75 570.3 126.75C576.24 126.75 576.24 120.75 582.18 120.75C588.12 120.75 588.12 126.75 594.06 126.75C600 126.75 600 120.75 605.94 120.75C611.88 120.75 611.88 126.75 617.82 126.75C623.76 126.75 623.76 120.75 629.7 120.75C635.64 120.75 635.64 126.75 641.58 126.75C647.52 126.75 647.52 120.75 653.46 120.75C659.4 120.75 659.4 126.75 665.34 126.75C671.28 126.75 671.28 120.75 677.22 120.75C683.16 120.75 683.16 126.75 689.1 126.75C695.04 126.75 695.04 120.75 700.98 120.75C706.92 120.75 706.92 126.75 712.86 126.75C718.8 126.75 718.8 120.75 724.74 120.75C730.68 120.75 730.68 126.75 736.62 126.75C742.56 126.75 742.56 120.75 748.5 120.75C754.44 120.75 754.44 126.75 760.38 126.75C766.32 126.75 766.32 120.75 772.26 120.75C778.2 120.75 778.2 126.75 784.14 126.75C790.08 126.75 790.08 120.75 796.02 120.75C801.96 120.75 801.96 126.75 807.9 126.75C813.84 126.75 813.84 120.75 819.78 120.75C825.72 120.75 825.72 126.75 831.66 126.75C837.6 126.75 837.6 120.75 843.54 120.75C849.48 120.75 849.48 126.75 855.42 126.75C861.36 126.75 861.36 120.75 867.3 120.75C873.24 120.75 873.24 126.75 879.18 126.75C885.12 126.75 885.12 120.75 891.06 120.75C897 120.75 897 126.75 902.94 126.75C908.88 126.75 908.88 120.75 914.82 120.75C920.76 120.75 920.76 126.75 926.7 126.75C932.64 126.75 932.64 120.75 938.58 120.75C944.52 120.75 944.52 126.75 950.46 126.75C956.4 126.75 956.4 120.75 962.34 120.75C968.28 120.75 968.28 126.75 974.22 126.75C980.16 126.75 980.16 120.75 986.1 120.75C992.04 120.75 992.04 126.75 997.98 126.75C1003.92 126.75 1003.92 120.75 1009.86 120.75C1015.8 120.75 1015.8 126.75 1021.74 126.75C1027.68 126.75 1027.68 120.75 1033.62 120.75C1039.56 120.75 1039.56 126.75 1045.5 126.75C1051.44 126.75 1051.44 120.75 1057.38 120.75C1063.32 120.75 1063.32 126.75 1069.26 126.75C1075.2 126.75 1075.2 120.75 1081.14 120.75C1087.08 120.75 1087.08 126.75 1093.02 126.75C1098.96 126.75 1098.96 120.75 1104.9 120.75C1110.84 120.75 1110.84 126.75 1116.78 126.75C1122.72 126.75 1122.72 120.75 1128.66 120.75C1134.6 120.75 1134.6 126.75 1140.54 126.75C1146.48 126.75 1146.48 120.75 1152.42 120.75C1158.36 120.75 1158.36 126.75 1164.3 126.75C1170.24 126.75 1170.24 120.75 1176.18 120.75C1182.12 120.75 1182.12 126.75 1188.06 126.75C1194 126.75 1194 120.75 1199.94 120.75C1205.88 120.75 1205.88 126.75 1211.83 126.75C1217.78 126.75 1217.77 120.75 1223.72 120.75C1229.67 120.75 1229.66 126.75 1235.61 126.75C1241.55 126.75 1241.55 120.75 1247.5 120.75C1253.44 120.75 1253.44 126.75 1259.39 126.75C1265.33 126.75 1265.33 120.75 1271.28 120.75C1277.23 120.75 1277.22 126.75 1283.16 126.75C1289.1 126.75 1289.1 120.75 1295.04 120.75C1300.98 120.75 1300.98 126.75 1306.92 126.75C1312.86 126.75 1312.86 120.75 1318.8 120.75C1324.74 120.75 1324.74 126.75 1330.68 126.75C1336.62 126.75 1336.62 120.75 1342.56 120.75C1348.5 120.75 1348.5 126.75 1354.44 126.75C1360.38 126.75 1360.38 120.75 1366.32 120.75C1372.26 120.75 1372.26 126.75 1378.2 126.75C1384.14 126.75 1384.14 120.75 1390.08 120.75C1396.02 120.75 1396.02 126.75 1401.96 126.75C1407.9 126.75 1407.9 120.75 1413.84 120.75C1419.78 120.75 1419.78 126.75 1425.72 126.75C1431.66 126.75 1431.66 120.75 1437.6 120.75C1443.54 120.75 1443.54 126.75 1449.48 126.75C1455.42 126.75 1455.42 120.75 1461.36 120.75C1467.3 120.75 1467.3 126.75 1473.24 126.75C1479.18 126.75 1479.18 120.75 1485.12 120.75C1491.06 120.75 1491.06 126.75 1497 126.75C1502.94 126.75 1502.94 120.75 1508.88 120.75C1514.82 120.75 1514.82 126.75 1520.76 126.75C1526.7 126.75 1526.7 120.75 1532.64 120.75C1538.58 120.75 1538.58 126.75 1544.52 126.75C1550.46 126.75 1550.46 120.75 1556.4 120.75C1562.34 120.75 1562.34 126.75 1568.28 126.75C1574.22 126.75 1574.22 120.75 1580.16 120.75C1586.1 120.75 1586.1 126.75 1592.04 126.75C1597.98 126.75 1597.98 120.75 1603.92 120.75C1609.86 120.75 1609.86 126.75 1615.8 126.75C1621.74 126.75 1621.74 120.75 1627.68 120.75C1633.62 120.75 1633.62 126.75 1639.56 126.75C1645.5 126.75 1645.5 120.75 1651.44 120.75C1657.38 120.75 1657.38 126.75 1663.32 126.75C1669.26 126.75 1669.26 120.75 1675.2 120.75C1681.14 120.75 1681.14 126.75 1687.08 126.75C1693.02 126.75 1693.02 120.75 1698.96 120.75C1704.9 120.75 1704.9 126.75 1710.84 126.75C1716.78 126.75 1716.78 120.75 1722.72 120.75C1728.66 120.75 1728.66 126.75 1734.6 126.75C1740.54 126.75 1740.54 120.75 1746.48 120.75C1752.42 120.75 1752.42 126.75 1758.36 126.75C1764.3 126.75 1764.3 120.75 1770.24 120.75C1776.18 120.75 1776.18 126.75 1782.12 126.75C1788.06 126.75 1788.06 120.75 1794 120.75C1799.94 120.75 1799.94 126.75 1805.88 126.75C1811.82 126.75 1811.82 120.75 1817.76 120.75C1823.7 120.75 1823.7 126.75 1829.64 126.75C1835.58 126.75 1835.58 120.75 1841.52 120.75C1847.46 120.75 1847.46 126.75 1853.4 126.75C1859.34 126.75 1859.34 120.75 1865.28 120.75C1871.22 120.75 1871.22 126.75 1877.16 126.75C1883.1 126.75 1883.1 120.75 1889.04 120.75C1894.98 120.75 1894.98 126.75 1900.92 126.75C1906.86 126.75 1906.86 120.75 1912.8 120.75C1918.74 120.75 1918.74 126.75 1924.68 126.75C1930.62 126.75 1930.62 120.75 1936.56 120.75C1942.5 120.75 1942.5 126.75 1948.44 126.75C1954.38 126.75 1954.38 120.75 1960.32 120.75C1966.26 120.75 1966.26 126.75 1972.2 126.75C1978.14 126.75 1978.14 120.75 1984.08 120.75C1990.02 120.75 1990.02 126.75 1995.96 126.75C2001.9 126.75 2001.9 120.75 2007.84 120.75C2013.78 120.75 2013.78 126.75 2019.72 126.75C2025.66 126.75 2025.66 120.75 2031.6 120.75C2037.54 120.75 2037.54 126.75 2043.48 126.75C2049.42 126.75 2049.42 120.75 2055.36 120.75C2061.3 120.75 2061.3 126.75 2067.24 126.75C2073.18 126.75 2073.18 120.75 2079.12 120.75C2085.06 120.75 2085.06 126.75 2091 126.75C2096.94 126.75 2096.94 120.75 2102.88 120.75C2108.82 120.75 2108.82 126.75 2114.76 126.75C2120.7 126.75 2120.7 120.75 2126.64 120.75C2132.58 120.75 2132.58 126.75 2138.52 126.75C2144.46 126.75 2144.46 120.75 2150.4 120.75C2156.34 120.75 2156.34 126.75 2162.28 126.75C2168.22 126.75 2168.22 120.75 2174.16 120.75C2180.1 120.75 2180.1 126.75 2186.04 126.75C2191.98 126.75 2191.98 120.75 2197.92 120.75C2203.86 120.75 2203.86 126.75 2209.8 126.75C2215.74 126.75 2215.74 120.75 2221.68 120.75C2227.62 120.75 2227.62 126.75 2233.56 126.75C2239.5 126.75 2239.5 120.75 2245.44 120.75C2251.38 120.75 2251.38 126.75 2257.32 126.75C2263.26 126.75 2263.26 120.75 2269.2 120.75C2275.14 120.75 2275.14 126.75 2281.08 126.75C2287.02 126.75 2287.02 120.75 2292.96 120.75C2298.9 120.75 2298.9 126.75 2304.84 126.75C2310.78 126.75 2310.78 120.75 2316.72 120.75C2322.66 120.75 2322.66 126.75 2328.6 126.75C2334.54 126.75 2334.54 120.75 2340.48 120.75C2346.42 120.75 2346.42 126.75 2352.36 126.75C2358.3 126.75 2358.3 120.75 2364.24 120.75C2370.18 120.75 2370.18 126.75 2376.12 126.75C2382.06 126.75 2382.06 120.75 2388 120.75C2393.94 120.75 2393.94 126.75 2399.88 126.75V6.75C2393.94 6.75 2393.94 0.75 2388 0.75C2382.06 0.75 2382.06 6.75 2376.12 6.75C2370.18 6.75 2370.18 0.75 2364.24 0.75C2358.3 0.75 2358.3 6.75 2352.36 6.75C2346.42 6.75 2346.42 0.75 2340.48 0.75C2334.54 0.75 2334.54 6.75 2328.6 6.75C2322.66 6.75 2322.66 0.75 2316.72 0.75C2310.78 0.75 2310.78 6.75 2304.84 6.75C2298.9 6.75 2298.9 0.75 2292.96 0.75C2287.02 0.75 2287.02 6.75 2281.08 6.75C2275.14 6.75 2275.14 0.75 2269.2 0.75C2263.26 0.75 2263.26 6.75 2257.32 6.75C2251.38 6.75 2251.38 0.75 2245.44 0.75C2239.5 0.75 2239.5 6.75 2233.56 6.75C2227.62 6.75 2227.62 0.75 2221.68 0.75C2215.74 0.75 2215.74 6.75 2209.8 6.75C2203.86 6.75 2203.86 0.75 2197.92 0.75C2191.98 0.75 2191.98 6.75 2186.04 6.75C2180.1 6.75 2180.1 0.75 2174.16 0.75C2168.22 0.75 2168.22 6.75 2162.28 6.75C2156.34 6.75 2156.34 0.75 2150.4 0.75C2144.46 0.75 2144.46 6.75 2138.52 6.75C2132.58 6.75 2132.58 0.75 2126.64 0.75C2120.7 0.75 2120.7 6.75 2114.76 6.75C2108.82 6.75 2108.82 0.75 2102.88 0.75C2096.94 0.75 2096.94 6.75 2091 6.75C2085.06 6.75 2085.06 0.75 2079.12 0.75C2073.18 0.75 2073.18 6.75 2067.24 6.75C2061.3 6.75 2061.3 0.75 2055.36 0.75C2049.42 0.75 2049.42 6.75 2043.48 6.75C2037.54 6.75 2037.54 0.75 2031.6 0.75C2025.66 0.75 2025.66 6.75 2019.72 6.75C2013.78 6.75 2013.78 0.75 2007.84 0.75C2001.9 0.75 2001.9 6.75 1995.96 6.75C1990.02 6.75 1990.02 0.75 1984.08 0.75C1978.14 0.75 1978.14 6.75 1972.2 6.75C1966.26 6.75 1966.26 0.75 1960.32 0.75C1954.38 0.75 1954.38 6.75 1948.44 6.75C1942.5 6.75 1942.5 0.75 1936.56 0.75C1930.62 0.75 1930.62 6.75 1924.68 6.75C1918.74 6.75 1918.74 0.75 1912.8 0.75C1906.86 0.75 1906.86 6.75 1900.92 6.75C1894.98 6.75 1894.98 0.75 1889.04 0.75C1883.1 0.75 1883.1 6.75 1877.16 6.75C1871.22 6.75 1871.22 0.75 1865.28 0.75C1859.34 0.75 1859.34 6.75 1853.4 6.75C1847.46 6.75 1847.46 0.75 1841.52 0.75C1835.58 0.75 1835.58 6.75 1829.64 6.75C1823.7 6.75 1823.7 0.75 1817.76 0.75C1811.82 0.75 1811.82 6.75 1805.88 6.75C1799.94 6.75 1799.94 0.75 1794 0.75C1788.06 0.75 1788.06 6.75 1782.12 6.75C1776.18 6.75 1776.18 0.75 1770.24 0.75C1764.3 0.75 1764.3 6.75 1758.36 6.75C1752.42 6.75 1752.42 0.75 1746.48 0.75C1740.54 0.75 1740.54 6.75 1734.6 6.75C1728.66 6.75 1728.66 0.75 1722.72 0.75C1716.78 0.75 1716.78 6.75 1710.84 6.75C1704.9 6.75 1704.9 0.75 1698.96 0.75C1693.02 0.75 1693.02 6.75 1687.08 6.75C1681.14 6.75 1681.14 0.75 1675.2 0.75C1669.26 0.75 1669.26 6.75 1663.32 6.75C1657.38 6.75 1657.38 0.75 1651.44 0.75C1645.5 0.75 1645.5 6.75 1639.56 6.75C1633.62 6.75 1633.62 0.75 1627.68 0.75C1621.74 0.75 1621.74 6.75 1615.8 6.75C1609.86 6.75 1609.86 0.75 1603.92 0.75C1597.98 0.75 1597.98 6.75 1592.04 6.75C1586.1 6.75 1586.1 0.75 1580.16 0.75C1574.22 0.75 1574.22 6.75 1568.28 6.75C1562.34 6.75 1562.34 0.75 1556.4 0.75C1550.46 0.75 1550.46 6.75 1544.52 6.75C1538.58 6.75 1538.58 0.75 1532.64 0.75C1526.7 0.75 1526.7 6.75 1520.76 6.75C1514.82 6.75 1514.82 0.75 1508.88 0.75C1502.94 0.75 1502.94 6.75 1497 6.75C1491.06 6.75 1491.06 0.75 1485.12 0.75C1479.18 0.75 1479.18 6.75 1473.24 6.75C1467.3 6.75 1467.3 0.75 1461.36 0.75C1455.42 0.75 1455.42 6.75 1449.48 6.75C1443.54 6.75 1443.54 0.75 1437.6 0.75C1431.66 0.75 1431.66 6.75 1425.72 6.75C1419.78 6.75 1419.78 0.75 1413.84 0.75C1407.9 0.75 1407.9 6.75 1401.96 6.75C1396.02 6.75 1396.02 0.75 1390.08 0.75C1384.14 0.75 1384.14 6.75 1378.2 6.75C1372.26 6.75 1372.26 0.75 1366.32 0.75C1360.38 0.75 1360.38 6.75 1354.44 6.75C1348.5 6.75 1348.5 0.75 1342.56 0.75C1336.62 0.75 1336.62 6.75 1330.68 6.75C1324.74 6.75 1324.74 0.75 1318.8 0.75C1312.86 0.75 1312.86 6.75 1306.92 6.75C1300.98 6.75 1300.98 0.75 1295.04 0.75C1289.1 0.75 1289.1 6.75 1283.16 6.75C1277.22 6.75 1277.22 0.75 1271.28 0.75C1265.34 0.75 1265.34 6.75 1259.39 6.75C1253.45 6.75 1253.45 0.75 1247.5 0.75C1241.56 0.75 1241.56 6.75 1235.61 6.75C1229.67 6.75 1229.67 0.75 1223.72 0.75C1217.77 0.75 1217.78 6.75 1211.83 6.75C1205.88 6.75 1205.89 0.75 1199.94 0.75C1194 0.75 1194 6.75 1188.06 6.75C1182.12 6.75 1182.12 0.75 1176.18 0.75C1170.24 0.75 1170.24 6.75 1164.3 6.75C1158.36 6.75 1158.36 0.75 1152.42 0.75C1146.48 0.75 1146.48 6.75 1140.54 6.75C1134.6 6.75 1134.6 0.75 1128.66 0.75C1122.72 0.75 1122.72 6.75 1116.78 6.75C1110.84 6.75 1110.84 0.75 1104.9 0.75C1098.96 0.75 1098.96 6.75 1093.02 6.75C1087.08 6.75 1087.08 0.75 1081.14 0.75C1075.2 0.75 1075.2 6.75 1069.26 6.75C1063.32 6.75 1063.32 0.75 1057.38 0.75C1051.44 0.75 1051.44 6.75 1045.5 6.75C1039.56 6.75 1039.56 0.75 1033.62 0.75C1027.68 0.75 1027.68 6.75 1021.74 6.75C1015.8 6.75 1015.8 0.75 1009.86 0.75C1003.92 0.75 1003.92 6.75 997.98 6.75C992.04 6.75 992.04 0.75 986.1 0.75C980.16 0.75 980.16 6.75 974.22 6.75C968.28 6.75 968.28 0.75 962.34 0.75C956.4 0.75 956.4 6.75 950.46 6.75C944.52 6.75 944.52 0.75 938.58 0.75C932.64 0.75 932.64 6.75 926.7 6.75C920.76 6.75 920.76 0.75 914.82 0.75C908.88 0.75 908.88 6.75 902.94 6.75C897 6.75 897 0.75 891.06 0.75C885.12 0.75 885.12 6.75 879.18 6.75C873.24 6.75 873.24 0.75 867.3 0.75C861.36 0.75 861.36 6.75 855.42 6.75C849.48 6.75 849.48 0.75 843.54 0.75C837.6 0.75 837.6 6.75 831.66 6.75C825.72 6.75 825.72 0.75 819.78 0.75C813.84 0.75 813.84 6.75 807.9 6.75C801.96 6.75 801.96 0.75 796.02 0.75C790.08 0.75 790.08 6.75 784.14 6.75C778.2 6.75 778.2 0.75 772.26 0.75C766.32 0.75 766.32 6.75 760.38 6.75C754.44 6.75 754.44 0.75 748.5 0.75C742.56 0.75 742.56 6.75 736.62 6.75C730.68 6.75 730.68 0.75 724.74 0.75C718.8 0.75 718.8 6.75 712.86 6.75C706.92 6.75 706.92 0.75 700.98 0.75C695.04 0.75 695.04 6.75 689.1 6.75C683.16 6.75 683.16 0.75 677.22 0.75C671.28 0.75 671.28 6.75 665.34 6.75C659.4 6.75 659.4 0.75 653.46 0.75C647.52 0.75 647.52 6.75 641.58 6.75C635.64 6.75 635.64 0.75 629.7 0.75C623.76 0.75 623.76 6.75 617.82 6.75C611.88 6.75 611.88 0.75 605.94 0.75C600 0.75 600 6.75 594.06 6.75C588.12 6.75 588.12 0.75 582.18 0.75C576.24 0.75 576.24 6.75 570.3 6.75C564.36 6.75 564.36 0.75 558.42 0.75C552.48 0.75 552.48 6.75 546.54 6.75C540.6 6.75 540.6 0.75 534.66 0.75C528.72 0.75 528.72 6.75 522.78 6.75C516.84 6.75 516.84 0.75 510.9 0.75C504.96 0.75 504.96 6.75 499.02 6.75C493.08 6.75 493.08 0.75 487.14 0.75C481.2 0.75 481.2 6.75 475.26 6.75C469.32 6.75 469.32 0.75 463.38 0.75C457.44 0.75 457.44 6.75 451.5 6.75C445.56 6.75 445.56 0.75 439.62 0.75C433.68 0.75 433.68 6.75 427.74 6.75C421.8 6.75 421.8 0.75 415.86 0.75C409.92 0.75 409.92 6.75 403.98 6.75C398.04 6.75 398.04 0.75 392.1 0.75C386.16 0.75 386.16 6.75 380.22 6.75C374.28 6.75 374.28 0.75 368.34 0.75C362.4 0.75 362.4 6.75 356.46 6.75C350.52 6.75 350.52 0.75 344.58 0.75C338.64 0.75 338.64 6.75 332.7 6.75C326.76 6.75 326.76 0.75 320.82 0.75C314.88 0.75 314.88 6.75 308.94 6.75C303 6.75 303 0.75 297.06 0.75C291.12 0.75 291.12 6.75 285.18 6.75C279.24 6.75 279.24 0.75 273.3 0.75C267.36 0.75 267.36 6.75 261.42 6.75C255.48 6.75 255.48 0.75 249.54 0.75C243.6 0.75 243.6 6.75 237.66 6.75C231.72 6.75 231.72 0.75 225.78 0.75C219.84 0.75 219.84 6.75 213.9 6.75C207.96 6.75 207.96 0.75 202.02 0.75C196.08 0.75 196.08 6.75 190.14 6.75C184.2 6.75 184.2 0.75 178.26 0.75C172.32 0.75 172.32 6.75 166.38 6.75C160.44 6.75 160.44 0.75 154.5 0.75C148.56 0.75 148.56 6.75 142.62 6.75C136.68 6.75 136.68 0.75 130.74 0.75C124.8 0.75 124.8 6.75 118.86 6.75C112.92 6.75 112.92 0.75 106.98 0.75C101.04 0.75 101.04 6.75 95.1 6.75C89.16 6.75 89.16 0.75 83.22 0.75C77.28 0.75 77.28 6.75 71.34 6.75C65.4 6.75 65.4 0.75 59.45 0.75C53.51 0.75 53.51 6.75 47.56 6.75C41.62 6.75 41.62 0.75 35.67 0.75C29.73 0.75 29.73 6.75 23.78 6.75C17.83 6.75 17.83 0.75 11.89 0.75C5.95 0.75 5.94 6.75 0 6.75V126.75Z" fill="#BBBBBB"/> </svg>',
                            height: "100%",
                            id: "qXVak_zXZ",
                            layoutId: "qXVak_zXZ",
                            lineCap: "butt",
                            lineJoin: "miter",
                            style: { height: "100%", width: "100%" },
                            width: "100%",
                          }),
                        }),
                      }),
                    }),
                    e("div", {
                      className: "framer-lq8mxg",
                      children: e(A, {
                        breakpoint: s,
                        overrides: {
                          HF8RfH6Up: {
                            children: e(f, {
                              children: e("p", {
                                style: {
                                  "--font-selector":
                                    "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnT0RBd0xDQWlkMlIwYUNJZ09UWT0=",
                                  "--framer-font-family":
                                    '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                  "--framer-font-size": "60px",
                                  "--framer-font-variation-axes":
                                    '"opsz" 96, "wght" 800, "wdth" 96',
                                  "--framer-line-height": "80%",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251))",
                                },
                                children: "How We Stack Up",
                              }),
                            }),
                          },
                        },
                        children: e(b, {
                          __fromCanvasComponent: !0,
                          children: e(f, {
                            children: e("p", {
                              style: {
                                "--font-selector":
                                  "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnT0RBd0xDQWlkMlIwYUNJZ01UQXc=",
                                "--framer-font-family":
                                  '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                "--framer-font-size": "60px",
                                "--framer-font-variation-axes":
                                  '"opsz" 96, "wght" 800, "wdth" 100',
                                "--framer-line-height": "100%",
                                "--framer-text-alignment": "center",
                                "--framer-text-color":
                                  "var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, rgb(245, 245, 251))",
                              },
                              children: "How We Stack Up",
                            }),
                          }),
                          className: "framer-10zs9np",
                          fonts: ["GF;Bricolage Grotesque-variable-regular"],
                          verticalAlignment: "bottom",
                          withExternalLayout: !0,
                        }),
                      }),
                    }),
                    e("div", {
                      className: "framer-7da0jr",
                      children: e(A, {
                        breakpoint: s,
                        overrides: {
                          FWFWx7bxY: { width: "min(90vw, 800px)" },
                          HF8RfH6Up: { width: "min(100vw - 16px, 480px)" },
                        },
                        children: e(L, {
                          height: 584,
                          width: "min(100vw - 120px, 800px)",
                          children: e(ce, {
                            className: "framer-r3i854-container",
                            children: e(A, {
                              breakpoint: s,
                              overrides: {
                                HF8RfH6Up: { variant: "pf8RmPtUZ" },
                              },
                              children: e(Bt, {
                                height: "100%",
                                id: "ichkR2qDN",
                                layoutId: "ichkR2qDN",
                                style: { maxWidth: "100%", width: "100%" },
                                variant: "AqG_M_QaM",
                                width: "100%",
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                    e("div", {
                      className: "framer-1hiuohh",
                      children: e(A, {
                        breakpoint: s,
                        overrides: {
                          HF8RfH6Up: {
                            children: e(f, {
                              children: e("p", {
                                style: {
                                  "--font-selector": "SW50ZXItTGlnaHQ=",
                                  "--framer-font-family":
                                    '"Inter", "Inter Placeholder", sans-serif',
                                  "--framer-font-size": "14px",
                                  "--framer-font-weight": "300",
                                  "--framer-line-height": "150%",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--token-9b4b60ac-a2c4-46f9-88c1-3a4328ea97d2, rgb(99, 191, 181))",
                                },
                                children:
                                  "Data is based on a single serving + equivalent ingredients. How you use Handshake is entirely up to you.",
                              }),
                            }),
                          },
                        },
                        children: e(b, {
                          __fromCanvasComponent: !0,
                          children: v(f, {
                            children: [
                              e("p", {
                                style: {
                                  "--font-selector": "SW50ZXItTGlnaHQ=",
                                  "--framer-font-family":
                                    '"Inter", "Inter Placeholder", sans-serif',
                                  "--framer-font-size": "14px",
                                  "--framer-font-weight": "300",
                                  "--framer-line-height": "150%",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--token-9b4b60ac-a2c4-46f9-88c1-3a4328ea97d2, rgb(99, 191, 181))",
                                },
                                children:
                                  "Data is based on a single serving + equivalent ingredients.",
                              }),
                              e("p", {
                                style: {
                                  "--font-selector": "SW50ZXItTGlnaHQ=",
                                  "--framer-font-family":
                                    '"Inter", "Inter Placeholder", sans-serif',
                                  "--framer-font-size": "14px",
                                  "--framer-font-weight": "300",
                                  "--framer-line-height": "150%",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--token-9b4b60ac-a2c4-46f9-88c1-3a4328ea97d2, rgb(99, 191, 181))",
                                },
                                children:
                                  "How you use Handshake is entirely up to you.",
                              }),
                            ],
                          }),
                          className: "framer-1yo90kg",
                          fonts: ["Inter-Light"],
                          verticalAlignment: "bottom",
                          withExternalLayout: !0,
                        }),
                      }),
                    }),
                  ],
                }),
                e("div", {
                  className: "framer-gu7apc",
                  "data-framer-name": "Info",
                  id: p,
                  name: "Info",
                  ref: S,
                  children: v("div", {
                    className: "framer-1vmpdiv",
                    children: [
                      v("div", {
                        className: "framer-11pq4o3",
                        children: [
                          e(b, {
                            __fromCanvasComponent: !0,
                            children: v(f, {
                              children: [
                                e("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnT0RBd0xDQWlkMlIwYUNJZ01UQXc=",
                                    "--framer-font-family":
                                      '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                    "--framer-font-size": "60px",
                                    "--framer-font-variation-axes":
                                      '"opsz" 96, "wght" 800, "wdth" 100',
                                    "--framer-line-height": "80%",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(38, 38, 38)",
                                  },
                                  children: "Have",
                                }),
                                e("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnT0RBd0xDQWlkMlIwYUNJZ01UQXc=",
                                    "--framer-font-family":
                                      '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                    "--framer-font-size": "60px",
                                    "--framer-font-variation-axes":
                                      '"opsz" 96, "wght" 800, "wdth" 100',
                                    "--framer-line-height": "80%",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(38, 38, 38)",
                                  },
                                  children: "Questions?",
                                }),
                              ],
                            }),
                            className: "framer-1xulris",
                            fonts: ["GF;Bricolage Grotesque-variable-regular"],
                            verticalAlignment: "bottom",
                            withExternalLayout: !0,
                          }),
                          e(A, {
                            breakpoint: s,
                            overrides: {
                              HF8RfH6Up: {
                                width: "min(min(100vw, 1000px) - 40px, 400px)",
                              },
                            },
                            children: e(L, {
                              height: 348,
                              children: e(ce, {
                                className: "framer-13z3u6d-container",
                                children: e(A, {
                                  breakpoint: s,
                                  overrides: {
                                    HF8RfH6Up: {
                                      style: {
                                        maxWidth: "100%",
                                        width: "100%",
                                      },
                                      variant: "VUDPHOdST",
                                    },
                                  },
                                  children: e(Mt, {
                                    height: "100%",
                                    id: "OJIbe3EP3",
                                    layoutId: "OJIbe3EP3",
                                    variant: "djkU_cMZy",
                                    width: "100%",
                                  }),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                      e(L, {
                        height: 34,
                        children: e(ce, {
                          className: "framer-1tcu4xw-container",
                          children: e(Ut, {
                            height: "100%",
                            id: "Fn0jnuko4",
                            layoutId: "Fn0jnuko4",
                            variant: "FNkOG2TVa",
                            width: "100%",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                v("div", {
                  className: "framer-15ke632",
                  "data-framer-name": "Info",
                  id: I,
                  name: "Info",
                  ref: R,
                  children: [
                    v("div", {
                      className: "framer-1oncgrd",
                      children: [
                        v("div", {
                          className: "framer-lyax4l",
                          children: [
                            v("div", {
                              className: "framer-t5s7v2",
                              children: [
                                m() &&
                                  e(b, {
                                    __fromCanvasComponent: !0,
                                    children: e(f, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnT0RBd0xDQWlkMlIwYUNJZ09UWT0=",
                                          "--framer-font-family":
                                            '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                          "--framer-font-size": "63px",
                                          "--framer-font-variation-axes":
                                            '"opsz" 96, "wght" 800, "wdth" 96',
                                          "--framer-line-height": "80%",
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children: "Join Our",
                                      }),
                                    }),
                                    className:
                                      "framer-1guekfi hidden-72rtr7 hidden-1gy1nrh hidden-zdzpwl",
                                    fonts: [
                                      "GF;Bricolage Grotesque-variable-regular",
                                    ],
                                    verticalAlignment: "bottom",
                                    viewBox: "0 0 212 50",
                                    withExternalLayout: !0,
                                  }),
                                e(A, {
                                  breakpoint: s,
                                  overrides: {
                                    FWFWx7bxY: {
                                      children: v(f, {
                                        children: [
                                          e("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnT0RBd0xDQWlkMlIwYUNJZ01UQXc=",
                                              "--framer-font-family":
                                                '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                              "--framer-font-size": "60px",
                                              "--framer-font-variation-axes":
                                                '"opsz" 96, "wght" 800, "wdth" 100',
                                              "--framer-line-height": "100%",
                                              "--framer-text-alignment": "left",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                            },
                                            children: "Join Our",
                                          }),
                                          e("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnT0RBd0xDQWlkMlIwYUNJZ01UQXc=",
                                              "--framer-font-family":
                                                '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                              "--framer-font-size": "60px",
                                              "--framer-font-variation-axes":
                                                '"opsz" 96, "wght" 800, "wdth" 100',
                                              "--framer-line-height": "100%",
                                              "--framer-text-alignment": "left",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                            },
                                            children: "Snobby Club",
                                          }),
                                        ],
                                      }),
                                      viewBox: "0 0 336 120",
                                    },
                                    HF8RfH6Up: {
                                      children: e(f, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnT0RBd0xDQWlkMlIwYUNJZ09UWT0=",
                                            "--framer-font-family":
                                              '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                            "--framer-font-size": "63px",
                                            "--framer-font-variation-axes":
                                              '"opsz" 96, "wght" 800, "wdth" 96',
                                            "--framer-line-height": "100%",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children: "Snobby Club",
                                        }),
                                      }),
                                      viewBox: "0 0 338 63",
                                    },
                                  },
                                  children: e(b, {
                                    __fromCanvasComponent: !0,
                                    children: v(f, {
                                      children: [
                                        e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnT0RBd0xDQWlkMlIwYUNJZ01UQXc=",
                                            "--framer-font-family":
                                              '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                            "--framer-font-size": "60px",
                                            "--framer-font-variation-axes":
                                              '"opsz" 96, "wght" 800, "wdth" 100',
                                            "--framer-line-height": "90%",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children: "Join Our",
                                        }),
                                        e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJRGsyTENBaWQyZG9kQ0lnT0RBd0xDQWlkMlIwYUNJZ01UQXc=",
                                            "--framer-font-family":
                                              '"Bricolage Grotesque Variable", "Bricolage Grotesque Placeholder", sans-serif',
                                            "--framer-font-size": "60px",
                                            "--framer-font-variation-axes":
                                              '"opsz" 96, "wght" 800, "wdth" 100',
                                            "--framer-line-height": "90%",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children: "Snobby Club",
                                        }),
                                      ],
                                    }),
                                    className: "framer-7poh5f",
                                    fonts: [
                                      "GF;Bricolage Grotesque-variable-regular",
                                    ],
                                    verticalAlignment: "bottom",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            e(L, {
                              children: e(ce, {
                                className: "framer-1ipjn37-container",
                                children: e(A, {
                                  breakpoint: s,
                                  overrides: {
                                    FWFWx7bxY: {
                                      style: {
                                        maxWidth: "100%",
                                        width: "100%",
                                      },
                                    },
                                  },
                                  children: e($r, {
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
                                      fill: "var(--token-73a0cc21-ae76-4af9-be59-d74e94c594b0, rgb(0, 75, 173))",
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
                                    id: "J_JAs5yqa",
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
                                      placeholderColor:
                                        "rgba(255, 255, 255, 0.66)",
                                    },
                                    layout: "horizontal",
                                    layoutId: "J_JAs5yqa",
                                    loopsID: "cm2m7891g01eneg0x2kt8rvfh",
                                    loopsUserGroup: "Early Birds",
                                    redirectAs: "overlay",
                                    style: { width: "100%" },
                                    width: "100%",
                                  }),
                                }),
                              }),
                            }),
                            e("div", {
                              className: "framer-lsuja2",
                              children: e(A, {
                                breakpoint: s,
                                overrides: {
                                  HF8RfH6Up: {
                                    children: v(f, {
                                      children: [
                                        e("p", {
                                          style: {
                                            "--framer-font-size": "15px",
                                            "--framer-line-height": "140%",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children:
                                            "Gain access to early bird specials.",
                                        }),
                                        e("p", {
                                          style: {
                                            "--framer-font-size": "15px",
                                            "--framer-line-height": "140%",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children:
                                            "Don't worry, your email is our little secret.",
                                        }),
                                      ],
                                    }),
                                  },
                                },
                                children: e(b, {
                                  __fromCanvasComponent: !0,
                                  children: v(f, {
                                    children: [
                                      e("p", {
                                        style: {
                                          "--framer-font-size": "14px",
                                          "--framer-line-height": "140%",
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children:
                                          "Gain access to early bird specials.",
                                      }),
                                      e("p", {
                                        style: {
                                          "--framer-font-size": "14px",
                                          "--framer-line-height": "140%",
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children:
                                          "Don't worry, your email is our little secret.",
                                      }),
                                    ],
                                  }),
                                  className: "framer-1nhx707",
                                  "data-framer-name": "22",
                                  fonts: ["Inter"],
                                  name: "22",
                                  verticalAlignment: "bottom",
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                          ],
                        }),
                        v("div", {
                          className: "framer-pg0btu",
                          children: [
                            v("div", {
                              className: "framer-xmxhrz",
                              children: [
                                e("div", {
                                  className: "framer-11te40b",
                                  "data-framer-name": "Frame 175",
                                  name: "Frame 175",
                                  children: e(A, {
                                    breakpoint: s,
                                    overrides: {
                                      FWFWx7bxY: {
                                        children: e(f, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-line-height": "100%",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                            },
                                            children: "About Us",
                                          }),
                                        }),
                                      },
                                      HF8RfH6Up: {
                                        children: e(f, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-line-height": "100%",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                            },
                                            children: "About Us",
                                          }),
                                        }),
                                      },
                                    },
                                    children: e(b, {
                                      __fromCanvasComponent: !0,
                                      children: e(f, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "SW50ZXItTWVkaXVt",
                                            "--framer-font-family":
                                              '"Inter", "Inter Placeholder", sans-serif',
                                            "--framer-font-weight": "500",
                                            "--framer-line-height": "100%",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children: "About Us",
                                        }),
                                      }),
                                      className: "framer-p6bwjx",
                                      "data-framer-name": "22",
                                      fonts: ["Inter-Medium"],
                                      name: "22",
                                      verticalAlignment: "bottom",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                }),
                                e("div", {
                                  className: "framer-10dvcug",
                                  "data-framer-name": "Frame 175",
                                  name: "Frame 175",
                                  children: e(A, {
                                    breakpoint: s,
                                    overrides: {
                                      FWFWx7bxY: {
                                        children: e(f, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-line-height": "100%",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                            },
                                            children: "Recipes",
                                          }),
                                        }),
                                      },
                                      HF8RfH6Up: {
                                        children: e(f, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-line-height": "100%",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                            },
                                            children: "Recipes",
                                          }),
                                        }),
                                      },
                                    },
                                    children: e(b, {
                                      __fromCanvasComponent: !0,
                                      children: e(f, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "SW50ZXItTWVkaXVt",
                                            "--framer-font-family":
                                              '"Inter", "Inter Placeholder", sans-serif',
                                            "--framer-font-weight": "500",
                                            "--framer-line-height": "100%",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children: "Recipes",
                                        }),
                                      }),
                                      className: "framer-lfaop5",
                                      "data-framer-name": "22",
                                      fonts: ["Inter-Medium"],
                                      name: "22",
                                      verticalAlignment: "bottom",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                }),
                                e("div", {
                                  className: "framer-a84bw0",
                                  "data-framer-name": "Frame 175",
                                  name: "Frame 175",
                                  children: e(A, {
                                    breakpoint: s,
                                    overrides: {
                                      FWFWx7bxY: {
                                        children: e(f, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-line-height": "100%",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                            },
                                            children: "Stories",
                                          }),
                                        }),
                                      },
                                      HF8RfH6Up: {
                                        children: e(f, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-line-height": "100%",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                            },
                                            children: "Stories",
                                          }),
                                        }),
                                      },
                                    },
                                    children: e(b, {
                                      __fromCanvasComponent: !0,
                                      children: e(f, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "SW50ZXItTWVkaXVt",
                                            "--framer-font-family":
                                              '"Inter", "Inter Placeholder", sans-serif',
                                            "--framer-font-weight": "500",
                                            "--framer-line-height": "100%",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children: "Stories",
                                        }),
                                      }),
                                      className: "framer-1u9bsy7",
                                      "data-framer-name": "22",
                                      fonts: ["Inter-Medium"],
                                      name: "22",
                                      verticalAlignment: "bottom",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                }),
                                e("div", {
                                  className: "framer-ayhs0w",
                                  "data-framer-name": "Frame 175",
                                  name: "Frame 175",
                                  children: e(A, {
                                    breakpoint: s,
                                    overrides: {
                                      FWFWx7bxY: {
                                        children: e(f, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-line-height": "100%",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                            },
                                            children: "Find in Store",
                                          }),
                                        }),
                                      },
                                      HF8RfH6Up: {
                                        children: e(f, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-line-height": "100%",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                            },
                                            children: "Find in Store",
                                          }),
                                        }),
                                      },
                                    },
                                    children: e(b, {
                                      __fromCanvasComponent: !0,
                                      children: e(f, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "SW50ZXItTWVkaXVt",
                                            "--framer-font-family":
                                              '"Inter", "Inter Placeholder", sans-serif',
                                            "--framer-font-weight": "500",
                                            "--framer-line-height": "100%",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children: "Find in Store",
                                        }),
                                      }),
                                      className: "framer-yz8o2a",
                                      "data-framer-name": "22",
                                      fonts: ["Inter-Medium"],
                                      name: "22",
                                      verticalAlignment: "bottom",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                }),
                                e("div", {
                                  className: "framer-1322748",
                                  "data-framer-name": "Frame 175",
                                  name: "Frame 175",
                                  children: e(A, {
                                    breakpoint: s,
                                    overrides: {
                                      FWFWx7bxY: {
                                        children: e(f, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-line-height": "100%",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                            },
                                            children: "Contact",
                                          }),
                                        }),
                                      },
                                      HF8RfH6Up: {
                                        children: e(f, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-line-height": "100%",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                            },
                                            children: "Contact",
                                          }),
                                        }),
                                      },
                                    },
                                    children: e(b, {
                                      __fromCanvasComponent: !0,
                                      children: e(f, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "SW50ZXItTWVkaXVt",
                                            "--framer-font-family":
                                              '"Inter", "Inter Placeholder", sans-serif',
                                            "--framer-font-weight": "500",
                                            "--framer-line-height": "100%",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children: "Contact",
                                        }),
                                      }),
                                      className: "framer-816bid",
                                      "data-framer-name": "22",
                                      fonts: ["Inter-Medium"],
                                      name: "22",
                                      verticalAlignment: "bottom",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                }),
                                e("div", {
                                  className: "framer-11tykf7",
                                  "data-framer-name": "Frame 175",
                                  name: "Frame 175",
                                  children: e(A, {
                                    breakpoint: s,
                                    overrides: {
                                      FWFWx7bxY: {
                                        children: e(f, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-line-height": "100%",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                            },
                                            children: "Sell",
                                          }),
                                        }),
                                      },
                                      HF8RfH6Up: {
                                        children: e(f, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-line-height": "100%",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                            },
                                            children: "Sell",
                                          }),
                                        }),
                                      },
                                    },
                                    children: e(b, {
                                      __fromCanvasComponent: !0,
                                      children: e(f, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "SW50ZXItTWVkaXVt",
                                            "--framer-font-family":
                                              '"Inter", "Inter Placeholder", sans-serif',
                                            "--framer-font-weight": "500",
                                            "--framer-line-height": "100%",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children: "Sell",
                                        }),
                                      }),
                                      className: "framer-1hclnat",
                                      "data-framer-name": "22",
                                      fonts: ["Inter-Medium"],
                                      name: "22",
                                      verticalAlignment: "bottom",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            v("div", {
                              className: "framer-12bqkka",
                              children: [
                                e("div", {
                                  className: "framer-1qhi3k2",
                                  "data-framer-name": "Frame 175",
                                  name: "Frame 175",
                                  children: e(A, {
                                    breakpoint: s,
                                    overrides: {
                                      FWFWx7bxY: {
                                        children: e(f, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-line-height": "100%",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                            },
                                            children: "Join Our Team",
                                          }),
                                        }),
                                      },
                                      HF8RfH6Up: {
                                        children: e(f, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-line-height": "100%",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                            },
                                            children: "Join Our Team",
                                          }),
                                        }),
                                      },
                                    },
                                    children: e(b, {
                                      __fromCanvasComponent: !0,
                                      children: e(f, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "SW50ZXItTWVkaXVt",
                                            "--framer-font-family":
                                              '"Inter", "Inter Placeholder", sans-serif',
                                            "--framer-font-weight": "500",
                                            "--framer-line-height": "100%",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children: "Join Our Team",
                                        }),
                                      }),
                                      className: "framer-a4s5vg",
                                      "data-framer-name": "22",
                                      fonts: ["Inter-Medium"],
                                      name: "22",
                                      verticalAlignment: "bottom",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                }),
                                e("div", {
                                  className: "framer-1um8nav",
                                  "data-framer-name": "Frame 175",
                                  name: "Frame 175",
                                  children: e(A, {
                                    breakpoint: s,
                                    overrides: {
                                      FWFWx7bxY: {
                                        children: e(f, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-line-height": "100%",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                            },
                                            children: "Leadership",
                                          }),
                                        }),
                                      },
                                      HF8RfH6Up: {
                                        children: e(f, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-line-height": "100%",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                            },
                                            children: "Leadership",
                                          }),
                                        }),
                                      },
                                    },
                                    children: e(b, {
                                      __fromCanvasComponent: !0,
                                      children: e(f, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "SW50ZXItTWVkaXVt",
                                            "--framer-font-family":
                                              '"Inter", "Inter Placeholder", sans-serif',
                                            "--framer-font-weight": "500",
                                            "--framer-line-height": "100%",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children: "Leadership",
                                        }),
                                      }),
                                      className: "framer-b0xbgw",
                                      "data-framer-name": "22",
                                      fonts: ["Inter-Medium"],
                                      name: "22",
                                      verticalAlignment: "bottom",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                }),
                                e("div", {
                                  className: "framer-8d1too",
                                  "data-framer-name": "Frame 175",
                                  name: "Frame 175",
                                  children: e(A, {
                                    breakpoint: s,
                                    overrides: {
                                      FWFWx7bxY: {
                                        children: e(f, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-line-height": "100%",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                            },
                                            children: "Terms of Service",
                                          }),
                                        }),
                                      },
                                      HF8RfH6Up: {
                                        children: e(f, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-line-height": "100%",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                            },
                                            children: "Terms of Service",
                                          }),
                                        }),
                                      },
                                    },
                                    children: e(b, {
                                      __fromCanvasComponent: !0,
                                      children: e(f, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "SW50ZXItTWVkaXVt",
                                            "--framer-font-family":
                                              '"Inter", "Inter Placeholder", sans-serif',
                                            "--framer-font-weight": "500",
                                            "--framer-line-height": "100%",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children: "Terms of Service",
                                        }),
                                      }),
                                      className: "framer-18sckoy",
                                      "data-framer-name": "22",
                                      fonts: ["Inter-Medium"],
                                      name: "22",
                                      verticalAlignment: "bottom",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                }),
                                e("div", {
                                  className: "framer-mk9qas",
                                  "data-framer-name": "Frame 175",
                                  name: "Frame 175",
                                  children: e(A, {
                                    breakpoint: s,
                                    overrides: {
                                      FWFWx7bxY: {
                                        children: e(f, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-line-height": "100%",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                            },
                                            children: "Privacy Policy",
                                          }),
                                        }),
                                      },
                                      HF8RfH6Up: {
                                        children: e(f, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-line-height": "100%",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                            },
                                            children: "Privacy Policy",
                                          }),
                                        }),
                                      },
                                    },
                                    children: e(b, {
                                      __fromCanvasComponent: !0,
                                      children: e(f, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "SW50ZXItTWVkaXVt",
                                            "--framer-font-family":
                                              '"Inter", "Inter Placeholder", sans-serif',
                                            "--framer-font-weight": "500",
                                            "--framer-line-height": "100%",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children: "Privacy Policy",
                                        }),
                                      }),
                                      className: "framer-cji3yn",
                                      "data-framer-name": "22",
                                      fonts: ["Inter-Medium"],
                                      name: "22",
                                      verticalAlignment: "bottom",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                }),
                                e("div", {
                                  className: "framer-1ozewkw",
                                  "data-framer-name": "Frame 175",
                                  name: "Frame 175",
                                  children: e(A, {
                                    breakpoint: s,
                                    overrides: {
                                      FWFWx7bxY: {
                                        children: e(f, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-line-height": "100%",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                            },
                                            children: "Support",
                                          }),
                                        }),
                                      },
                                      HF8RfH6Up: {
                                        children: e(f, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-line-height": "100%",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                            },
                                            children: "Support",
                                          }),
                                        }),
                                      },
                                    },
                                    children: e(b, {
                                      __fromCanvasComponent: !0,
                                      children: e(f, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "SW50ZXItTWVkaXVt",
                                            "--framer-font-family":
                                              '"Inter", "Inter Placeholder", sans-serif',
                                            "--framer-font-weight": "500",
                                            "--framer-line-height": "100%",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children: "Support",
                                        }),
                                      }),
                                      className: "framer-1vt5ssm",
                                      "data-framer-name": "22",
                                      fonts: ["Inter-Medium"],
                                      name: "22",
                                      verticalAlignment: "bottom",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            h() &&
                              v("div", {
                                className: "framer-13ebdzi hidden-ge3bzv",
                                "data-framer-name": "Frame 175",
                                name: "Frame 175",
                                children: [
                                  e(b, {
                                    __fromCanvasComponent: !0,
                                    children: e(f, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "SW50ZXItU2VtaUJvbGQ=",
                                          "--framer-font-family":
                                            '"Inter", "Inter Placeholder", sans-serif',
                                          "--framer-font-size": "14px",
                                          "--framer-font-weight": "600",
                                          "--framer-line-height": "100%",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children: "Headquarters",
                                      }),
                                    }),
                                    className: "framer-wo6e16",
                                    "data-framer-name": "22",
                                    fonts: ["Inter-SemiBold"],
                                    name: "22",
                                    verticalAlignment: "bottom",
                                    withExternalLayout: !0,
                                  }),
                                  e(b, {
                                    __fromCanvasComponent: !0,
                                    children: v(f, {
                                      children: [
                                        e("p", {
                                          style: {
                                            "--framer-font-size": "14px",
                                            "--framer-line-height": "120%",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children: "7007 Sunshine St",
                                        }),
                                        e("p", {
                                          style: {
                                            "--framer-font-size": "14px",
                                            "--framer-line-height": "120%",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children: "San Diego, CA",
                                        }),
                                        e("p", {
                                          style: {
                                            "--framer-font-size": "14px",
                                            "--framer-line-height": "120%",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children: "92001",
                                        }),
                                      ],
                                    }),
                                    className: "framer-1diqchu",
                                    "data-framer-name": "22",
                                    fonts: ["Inter"],
                                    name: "22",
                                    verticalAlignment: "bottom",
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                          ],
                        }),
                        m() &&
                          v("div", {
                            className:
                              "framer-145f0ft hidden-72rtr7 hidden-1gy1nrh hidden-zdzpwl",
                            "data-framer-name": "Frame 175",
                            name: "Frame 175",
                            children: [
                              e(b, {
                                __fromCanvasComponent: !0,
                                children: e(f, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                                      "--framer-font-family":
                                        '"Inter", "Inter Placeholder", sans-serif',
                                      "--framer-font-size": "14px",
                                      "--framer-font-weight": "600",
                                      "--framer-line-height": "100%",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "rgb(255, 255, 255)",
                                    },
                                    children: "Headquarters",
                                  }),
                                }),
                                className: "framer-m29j3h",
                                "data-framer-name": "22",
                                fonts: ["Inter-SemiBold"],
                                name: "22",
                                verticalAlignment: "bottom",
                                withExternalLayout: !0,
                              }),
                              e(b, {
                                __fromCanvasComponent: !0,
                                children: e(f, {
                                  children: e("p", {
                                    style: {
                                      "--framer-font-size": "14px",
                                      "--framer-line-height": "120%",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color":
                                        "rgb(255, 255, 255)",
                                    },
                                    children:
                                      "7007 Sunshine St, San Diego CA 92001",
                                  }),
                                }),
                                className: "framer-1tlo1g2",
                                "data-framer-name": "22",
                                fonts: ["Inter"],
                                name: "22",
                                verticalAlignment: "bottom",
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        m() &&
                          e("div", {
                            className:
                              "framer-1c884yy hidden-72rtr7 hidden-1gy1nrh hidden-zdzpwl",
                            children: e(L, {
                              children: e(ce, {
                                className: "framer-d67xu1-container",
                                children: e(Te, {
                                  color: "rgb(255, 255, 255)",
                                  dateRange: !1,
                                  font: {
                                    fontFamily: '"Inter", sans-serif',
                                    fontSize: "14px",
                                    fontStyle: "normal",
                                    letterSpacing: "0em",
                                    lineHeight: "1em",
                                  },
                                  height: "100%",
                                  id: "qZNNZpJQN",
                                  layoutId: "qZNNZpJQN",
                                  name: "Handshake",
                                  startYear: 2022,
                                  statement: " \xB7 All rights reserved",
                                  width: "100%",
                                }),
                              }),
                            }),
                          }),
                      ],
                    }),
                    h() &&
                      e("div", {
                        className: "framer-1lvuet hidden-ge3bzv",
                        children: e(L, {
                          children: e(ce, {
                            className: "framer-1e1dfcq-container",
                            children: e(Te, {
                              color: "rgb(255, 255, 255)",
                              dateRange: !1,
                              font: {
                                fontFamily: '"Inter", sans-serif',
                                fontSize: "14px",
                                fontStyle: "normal",
                                letterSpacing: "-0.02em",
                                lineHeight: "1em",
                              },
                              height: "100%",
                              id: "h3_dTafwE",
                              layoutId: "h3_dTafwE",
                              name: "Handshake",
                              startYear: 2022,
                              statement: " \xB7 All rights reserved",
                              width: "100%",
                            }),
                          }),
                        }),
                      }),
                    e("div", {
                      className: "framer-1x3y46n",
                      children: e(L, {
                        children: e(ce, {
                          className: "framer-qpwytb-container",
                          children: e(Le, {
                            customColor: "rgb(255, 255, 255)",
                            customPadding: 0,
                            customStrokeWidth: 1.5,
                            customSvgCode:
                              '<svg width="2400" height="127" viewBox="0 0 2400 127" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0 126.75C5.94 126.75 5.94 120.75 11.89 120.75C17.84 120.75 17.83 126.75 23.78 126.75C29.73 126.75 29.72 120.75 35.67 120.75C41.61 120.75 41.61 126.75 47.56 126.75C53.5 126.75 53.5 120.75 59.45 120.75C65.39 120.75 65.39 126.75 71.34 126.75C77.29 126.75 77.28 120.75 83.22 120.75C89.16 120.75 89.16 126.75 95.1 126.75C101.04 126.75 101.04 120.75 106.98 120.75C112.92 120.75 112.92 126.75 118.86 126.75C124.8 126.75 124.8 120.75 130.74 120.75C136.68 120.75 136.68 126.75 142.62 126.75C148.56 126.75 148.56 120.75 154.5 120.75C160.44 120.75 160.44 126.75 166.38 126.75C172.32 126.75 172.32 120.75 178.26 120.75C184.2 120.75 184.2 126.75 190.14 126.75C196.08 126.75 196.08 120.75 202.02 120.75C207.96 120.75 207.96 126.75 213.9 126.75C219.84 126.75 219.84 120.75 225.78 120.75C231.72 120.75 231.72 126.75 237.66 126.75C243.6 126.75 243.6 120.75 249.54 120.75C255.48 120.75 255.48 126.75 261.42 126.75C267.36 126.75 267.36 120.75 273.3 120.75C279.24 120.75 279.24 126.75 285.18 126.75C291.12 126.75 291.12 120.75 297.06 120.75C303 120.75 303 126.75 308.94 126.75C314.88 126.75 314.88 120.75 320.82 120.75C326.76 120.75 326.76 126.75 332.7 126.75C338.64 126.75 338.64 120.75 344.58 120.75C350.52 120.75 350.52 126.75 356.46 126.75C362.4 126.75 362.4 120.75 368.34 120.75C374.28 120.75 374.28 126.75 380.22 126.75C386.16 126.75 386.16 120.75 392.1 120.75C398.04 120.75 398.04 126.75 403.98 126.75C409.92 126.75 409.92 120.75 415.86 120.75C421.8 120.75 421.8 126.75 427.74 126.75C433.68 126.75 433.68 120.75 439.62 120.75C445.56 120.75 445.56 126.75 451.5 126.75C457.44 126.75 457.44 120.75 463.38 120.75C469.32 120.75 469.32 126.75 475.26 126.75C481.2 126.75 481.2 120.75 487.14 120.75C493.08 120.75 493.08 126.75 499.02 126.75C504.96 126.75 504.96 120.75 510.9 120.75C516.84 120.75 516.84 126.75 522.78 126.75C528.72 126.75 528.72 120.75 534.66 120.75C540.6 120.75 540.6 126.75 546.54 126.75C552.48 126.75 552.48 120.75 558.42 120.75C564.36 120.75 564.36 126.75 570.3 126.75C576.24 126.75 576.24 120.75 582.18 120.75C588.12 120.75 588.12 126.75 594.06 126.75C600 126.75 600 120.75 605.94 120.75C611.88 120.75 611.88 126.75 617.82 126.75C623.76 126.75 623.76 120.75 629.7 120.75C635.64 120.75 635.64 126.75 641.58 126.75C647.52 126.75 647.52 120.75 653.46 120.75C659.4 120.75 659.4 126.75 665.34 126.75C671.28 126.75 671.28 120.75 677.22 120.75C683.16 120.75 683.16 126.75 689.1 126.75C695.04 126.75 695.04 120.75 700.98 120.75C706.92 120.75 706.92 126.75 712.86 126.75C718.8 126.75 718.8 120.75 724.74 120.75C730.68 120.75 730.68 126.75 736.62 126.75C742.56 126.75 742.56 120.75 748.5 120.75C754.44 120.75 754.44 126.75 760.38 126.75C766.32 126.75 766.32 120.75 772.26 120.75C778.2 120.75 778.2 126.75 784.14 126.75C790.08 126.75 790.08 120.75 796.02 120.75C801.96 120.75 801.96 126.75 807.9 126.75C813.84 126.75 813.84 120.75 819.78 120.75C825.72 120.75 825.72 126.75 831.66 126.75C837.6 126.75 837.6 120.75 843.54 120.75C849.48 120.75 849.48 126.75 855.42 126.75C861.36 126.75 861.36 120.75 867.3 120.75C873.24 120.75 873.24 126.75 879.18 126.75C885.12 126.75 885.12 120.75 891.06 120.75C897 120.75 897 126.75 902.94 126.75C908.88 126.75 908.88 120.75 914.82 120.75C920.76 120.75 920.76 126.75 926.7 126.75C932.64 126.75 932.64 120.75 938.58 120.75C944.52 120.75 944.52 126.75 950.46 126.75C956.4 126.75 956.4 120.75 962.34 120.75C968.28 120.75 968.28 126.75 974.22 126.75C980.16 126.75 980.16 120.75 986.1 120.75C992.04 120.75 992.04 126.75 997.98 126.75C1003.92 126.75 1003.92 120.75 1009.86 120.75C1015.8 120.75 1015.8 126.75 1021.74 126.75C1027.68 126.75 1027.68 120.75 1033.62 120.75C1039.56 120.75 1039.56 126.75 1045.5 126.75C1051.44 126.75 1051.44 120.75 1057.38 120.75C1063.32 120.75 1063.32 126.75 1069.26 126.75C1075.2 126.75 1075.2 120.75 1081.14 120.75C1087.08 120.75 1087.08 126.75 1093.02 126.75C1098.96 126.75 1098.96 120.75 1104.9 120.75C1110.84 120.75 1110.84 126.75 1116.78 126.75C1122.72 126.75 1122.72 120.75 1128.66 120.75C1134.6 120.75 1134.6 126.75 1140.54 126.75C1146.48 126.75 1146.48 120.75 1152.42 120.75C1158.36 120.75 1158.36 126.75 1164.3 126.75C1170.24 126.75 1170.24 120.75 1176.18 120.75C1182.12 120.75 1182.12 126.75 1188.06 126.75C1194 126.75 1194 120.75 1199.94 120.75C1205.88 120.75 1205.88 126.75 1211.83 126.75C1217.78 126.75 1217.77 120.75 1223.72 120.75C1229.67 120.75 1229.66 126.75 1235.61 126.75C1241.55 126.75 1241.55 120.75 1247.5 120.75C1253.44 120.75 1253.44 126.75 1259.39 126.75C1265.33 126.75 1265.33 120.75 1271.28 120.75C1277.23 120.75 1277.22 126.75 1283.16 126.75C1289.1 126.75 1289.1 120.75 1295.04 120.75C1300.98 120.75 1300.98 126.75 1306.92 126.75C1312.86 126.75 1312.86 120.75 1318.8 120.75C1324.74 120.75 1324.74 126.75 1330.68 126.75C1336.62 126.75 1336.62 120.75 1342.56 120.75C1348.5 120.75 1348.5 126.75 1354.44 126.75C1360.38 126.75 1360.38 120.75 1366.32 120.75C1372.26 120.75 1372.26 126.75 1378.2 126.75C1384.14 126.75 1384.14 120.75 1390.08 120.75C1396.02 120.75 1396.02 126.75 1401.96 126.75C1407.9 126.75 1407.9 120.75 1413.84 120.75C1419.78 120.75 1419.78 126.75 1425.72 126.75C1431.66 126.75 1431.66 120.75 1437.6 120.75C1443.54 120.75 1443.54 126.75 1449.48 126.75C1455.42 126.75 1455.42 120.75 1461.36 120.75C1467.3 120.75 1467.3 126.75 1473.24 126.75C1479.18 126.75 1479.18 120.75 1485.12 120.75C1491.06 120.75 1491.06 126.75 1497 126.75C1502.94 126.75 1502.94 120.75 1508.88 120.75C1514.82 120.75 1514.82 126.75 1520.76 126.75C1526.7 126.75 1526.7 120.75 1532.64 120.75C1538.58 120.75 1538.58 126.75 1544.52 126.75C1550.46 126.75 1550.46 120.75 1556.4 120.75C1562.34 120.75 1562.34 126.75 1568.28 126.75C1574.22 126.75 1574.22 120.75 1580.16 120.75C1586.1 120.75 1586.1 126.75 1592.04 126.75C1597.98 126.75 1597.98 120.75 1603.92 120.75C1609.86 120.75 1609.86 126.75 1615.8 126.75C1621.74 126.75 1621.74 120.75 1627.68 120.75C1633.62 120.75 1633.62 126.75 1639.56 126.75C1645.5 126.75 1645.5 120.75 1651.44 120.75C1657.38 120.75 1657.38 126.75 1663.32 126.75C1669.26 126.75 1669.26 120.75 1675.2 120.75C1681.14 120.75 1681.14 126.75 1687.08 126.75C1693.02 126.75 1693.02 120.75 1698.96 120.75C1704.9 120.75 1704.9 126.75 1710.84 126.75C1716.78 126.75 1716.78 120.75 1722.72 120.75C1728.66 120.75 1728.66 126.75 1734.6 126.75C1740.54 126.75 1740.54 120.75 1746.48 120.75C1752.42 120.75 1752.42 126.75 1758.36 126.75C1764.3 126.75 1764.3 120.75 1770.24 120.75C1776.18 120.75 1776.18 126.75 1782.12 126.75C1788.06 126.75 1788.06 120.75 1794 120.75C1799.94 120.75 1799.94 126.75 1805.88 126.75C1811.82 126.75 1811.82 120.75 1817.76 120.75C1823.7 120.75 1823.7 126.75 1829.64 126.75C1835.58 126.75 1835.58 120.75 1841.52 120.75C1847.46 120.75 1847.46 126.75 1853.4 126.75C1859.34 126.75 1859.34 120.75 1865.28 120.75C1871.22 120.75 1871.22 126.75 1877.16 126.75C1883.1 126.75 1883.1 120.75 1889.04 120.75C1894.98 120.75 1894.98 126.75 1900.92 126.75C1906.86 126.75 1906.86 120.75 1912.8 120.75C1918.74 120.75 1918.74 126.75 1924.68 126.75C1930.62 126.75 1930.62 120.75 1936.56 120.75C1942.5 120.75 1942.5 126.75 1948.44 126.75C1954.38 126.75 1954.38 120.75 1960.32 120.75C1966.26 120.75 1966.26 126.75 1972.2 126.75C1978.14 126.75 1978.14 120.75 1984.08 120.75C1990.02 120.75 1990.02 126.75 1995.96 126.75C2001.9 126.75 2001.9 120.75 2007.84 120.75C2013.78 120.75 2013.78 126.75 2019.72 126.75C2025.66 126.75 2025.66 120.75 2031.6 120.75C2037.54 120.75 2037.54 126.75 2043.48 126.75C2049.42 126.75 2049.42 120.75 2055.36 120.75C2061.3 120.75 2061.3 126.75 2067.24 126.75C2073.18 126.75 2073.18 120.75 2079.12 120.75C2085.06 120.75 2085.06 126.75 2091 126.75C2096.94 126.75 2096.94 120.75 2102.88 120.75C2108.82 120.75 2108.82 126.75 2114.76 126.75C2120.7 126.75 2120.7 120.75 2126.64 120.75C2132.58 120.75 2132.58 126.75 2138.52 126.75C2144.46 126.75 2144.46 120.75 2150.4 120.75C2156.34 120.75 2156.34 126.75 2162.28 126.75C2168.22 126.75 2168.22 120.75 2174.16 120.75C2180.1 120.75 2180.1 126.75 2186.04 126.75C2191.98 126.75 2191.98 120.75 2197.92 120.75C2203.86 120.75 2203.86 126.75 2209.8 126.75C2215.74 126.75 2215.74 120.75 2221.68 120.75C2227.62 120.75 2227.62 126.75 2233.56 126.75C2239.5 126.75 2239.5 120.75 2245.44 120.75C2251.38 120.75 2251.38 126.75 2257.32 126.75C2263.26 126.75 2263.26 120.75 2269.2 120.75C2275.14 120.75 2275.14 126.75 2281.08 126.75C2287.02 126.75 2287.02 120.75 2292.96 120.75C2298.9 120.75 2298.9 126.75 2304.84 126.75C2310.78 126.75 2310.78 120.75 2316.72 120.75C2322.66 120.75 2322.66 126.75 2328.6 126.75C2334.54 126.75 2334.54 120.75 2340.48 120.75C2346.42 120.75 2346.42 126.75 2352.36 126.75C2358.3 126.75 2358.3 120.75 2364.24 120.75C2370.18 120.75 2370.18 126.75 2376.12 126.75C2382.06 126.75 2382.06 120.75 2388 120.75C2393.94 120.75 2393.94 126.75 2399.88 126.75V6.75C2393.94 6.75 2393.94 0.75 2388 0.75C2382.06 0.75 2382.06 6.75 2376.12 6.75C2370.18 6.75 2370.18 0.75 2364.24 0.75C2358.3 0.75 2358.3 6.75 2352.36 6.75C2346.42 6.75 2346.42 0.75 2340.48 0.75C2334.54 0.75 2334.54 6.75 2328.6 6.75C2322.66 6.75 2322.66 0.75 2316.72 0.75C2310.78 0.75 2310.78 6.75 2304.84 6.75C2298.9 6.75 2298.9 0.75 2292.96 0.75C2287.02 0.75 2287.02 6.75 2281.08 6.75C2275.14 6.75 2275.14 0.75 2269.2 0.75C2263.26 0.75 2263.26 6.75 2257.32 6.75C2251.38 6.75 2251.38 0.75 2245.44 0.75C2239.5 0.75 2239.5 6.75 2233.56 6.75C2227.62 6.75 2227.62 0.75 2221.68 0.75C2215.74 0.75 2215.74 6.75 2209.8 6.75C2203.86 6.75 2203.86 0.75 2197.92 0.75C2191.98 0.75 2191.98 6.75 2186.04 6.75C2180.1 6.75 2180.1 0.75 2174.16 0.75C2168.22 0.75 2168.22 6.75 2162.28 6.75C2156.34 6.75 2156.34 0.75 2150.4 0.75C2144.46 0.75 2144.46 6.75 2138.52 6.75C2132.58 6.75 2132.58 0.75 2126.64 0.75C2120.7 0.75 2120.7 6.75 2114.76 6.75C2108.82 6.75 2108.82 0.75 2102.88 0.75C2096.94 0.75 2096.94 6.75 2091 6.75C2085.06 6.75 2085.06 0.75 2079.12 0.75C2073.18 0.75 2073.18 6.75 2067.24 6.75C2061.3 6.75 2061.3 0.75 2055.36 0.75C2049.42 0.75 2049.42 6.75 2043.48 6.75C2037.54 6.75 2037.54 0.75 2031.6 0.75C2025.66 0.75 2025.66 6.75 2019.72 6.75C2013.78 6.75 2013.78 0.75 2007.84 0.75C2001.9 0.75 2001.9 6.75 1995.96 6.75C1990.02 6.75 1990.02 0.75 1984.08 0.75C1978.14 0.75 1978.14 6.75 1972.2 6.75C1966.26 6.75 1966.26 0.75 1960.32 0.75C1954.38 0.75 1954.38 6.75 1948.44 6.75C1942.5 6.75 1942.5 0.75 1936.56 0.75C1930.62 0.75 1930.62 6.75 1924.68 6.75C1918.74 6.75 1918.74 0.75 1912.8 0.75C1906.86 0.75 1906.86 6.75 1900.92 6.75C1894.98 6.75 1894.98 0.75 1889.04 0.75C1883.1 0.75 1883.1 6.75 1877.16 6.75C1871.22 6.75 1871.22 0.75 1865.28 0.75C1859.34 0.75 1859.34 6.75 1853.4 6.75C1847.46 6.75 1847.46 0.75 1841.52 0.75C1835.58 0.75 1835.58 6.75 1829.64 6.75C1823.7 6.75 1823.7 0.75 1817.76 0.75C1811.82 0.75 1811.82 6.75 1805.88 6.75C1799.94 6.75 1799.94 0.75 1794 0.75C1788.06 0.75 1788.06 6.75 1782.12 6.75C1776.18 6.75 1776.18 0.75 1770.24 0.75C1764.3 0.75 1764.3 6.75 1758.36 6.75C1752.42 6.75 1752.42 0.75 1746.48 0.75C1740.54 0.75 1740.54 6.75 1734.6 6.75C1728.66 6.75 1728.66 0.75 1722.72 0.75C1716.78 0.75 1716.78 6.75 1710.84 6.75C1704.9 6.75 1704.9 0.75 1698.96 0.75C1693.02 0.75 1693.02 6.75 1687.08 6.75C1681.14 6.75 1681.14 0.75 1675.2 0.75C1669.26 0.75 1669.26 6.75 1663.32 6.75C1657.38 6.75 1657.38 0.75 1651.44 0.75C1645.5 0.75 1645.5 6.75 1639.56 6.75C1633.62 6.75 1633.62 0.75 1627.68 0.75C1621.74 0.75 1621.74 6.75 1615.8 6.75C1609.86 6.75 1609.86 0.75 1603.92 0.75C1597.98 0.75 1597.98 6.75 1592.04 6.75C1586.1 6.75 1586.1 0.75 1580.16 0.75C1574.22 0.75 1574.22 6.75 1568.28 6.75C1562.34 6.75 1562.34 0.75 1556.4 0.75C1550.46 0.75 1550.46 6.75 1544.52 6.75C1538.58 6.75 1538.58 0.75 1532.64 0.75C1526.7 0.75 1526.7 6.75 1520.76 6.75C1514.82 6.75 1514.82 0.75 1508.88 0.75C1502.94 0.75 1502.94 6.75 1497 6.75C1491.06 6.75 1491.06 0.75 1485.12 0.75C1479.18 0.75 1479.18 6.75 1473.24 6.75C1467.3 6.75 1467.3 0.75 1461.36 0.75C1455.42 0.75 1455.42 6.75 1449.48 6.75C1443.54 6.75 1443.54 0.75 1437.6 0.75C1431.66 0.75 1431.66 6.75 1425.72 6.75C1419.78 6.75 1419.78 0.75 1413.84 0.75C1407.9 0.75 1407.9 6.75 1401.96 6.75C1396.02 6.75 1396.02 0.75 1390.08 0.75C1384.14 0.75 1384.14 6.75 1378.2 6.75C1372.26 6.75 1372.26 0.75 1366.32 0.75C1360.38 0.75 1360.38 6.75 1354.44 6.75C1348.5 6.75 1348.5 0.75 1342.56 0.75C1336.62 0.75 1336.62 6.75 1330.68 6.75C1324.74 6.75 1324.74 0.75 1318.8 0.75C1312.86 0.75 1312.86 6.75 1306.92 6.75C1300.98 6.75 1300.98 0.75 1295.04 0.75C1289.1 0.75 1289.1 6.75 1283.16 6.75C1277.22 6.75 1277.22 0.75 1271.28 0.75C1265.34 0.75 1265.34 6.75 1259.39 6.75C1253.45 6.75 1253.45 0.75 1247.5 0.75C1241.56 0.75 1241.56 6.75 1235.61 6.75C1229.67 6.75 1229.67 0.75 1223.72 0.75C1217.77 0.75 1217.78 6.75 1211.83 6.75C1205.88 6.75 1205.89 0.75 1199.94 0.75C1194 0.75 1194 6.75 1188.06 6.75C1182.12 6.75 1182.12 0.75 1176.18 0.75C1170.24 0.75 1170.24 6.75 1164.3 6.75C1158.36 6.75 1158.36 0.75 1152.42 0.75C1146.48 0.75 1146.48 6.75 1140.54 6.75C1134.6 6.75 1134.6 0.75 1128.66 0.75C1122.72 0.75 1122.72 6.75 1116.78 6.75C1110.84 6.75 1110.84 0.75 1104.9 0.75C1098.96 0.75 1098.96 6.75 1093.02 6.75C1087.08 6.75 1087.08 0.75 1081.14 0.75C1075.2 0.75 1075.2 6.75 1069.26 6.75C1063.32 6.75 1063.32 0.75 1057.38 0.75C1051.44 0.75 1051.44 6.75 1045.5 6.75C1039.56 6.75 1039.56 0.75 1033.62 0.75C1027.68 0.75 1027.68 6.75 1021.74 6.75C1015.8 6.75 1015.8 0.75 1009.86 0.75C1003.92 0.75 1003.92 6.75 997.98 6.75C992.04 6.75 992.04 0.75 986.1 0.75C980.16 0.75 980.16 6.75 974.22 6.75C968.28 6.75 968.28 0.75 962.34 0.75C956.4 0.75 956.4 6.75 950.46 6.75C944.52 6.75 944.52 0.75 938.58 0.75C932.64 0.75 932.64 6.75 926.7 6.75C920.76 6.75 920.76 0.75 914.82 0.75C908.88 0.75 908.88 6.75 902.94 6.75C897 6.75 897 0.75 891.06 0.75C885.12 0.75 885.12 6.75 879.18 6.75C873.24 6.75 873.24 0.75 867.3 0.75C861.36 0.75 861.36 6.75 855.42 6.75C849.48 6.75 849.48 0.75 843.54 0.75C837.6 0.75 837.6 6.75 831.66 6.75C825.72 6.75 825.72 0.75 819.78 0.75C813.84 0.75 813.84 6.75 807.9 6.75C801.96 6.75 801.96 0.75 796.02 0.75C790.08 0.75 790.08 6.75 784.14 6.75C778.2 6.75 778.2 0.75 772.26 0.75C766.32 0.75 766.32 6.75 760.38 6.75C754.44 6.75 754.44 0.75 748.5 0.75C742.56 0.75 742.56 6.75 736.62 6.75C730.68 6.75 730.68 0.75 724.74 0.75C718.8 0.75 718.8 6.75 712.86 6.75C706.92 6.75 706.92 0.75 700.98 0.75C695.04 0.75 695.04 6.75 689.1 6.75C683.16 6.75 683.16 0.75 677.22 0.75C671.28 0.75 671.28 6.75 665.34 6.75C659.4 6.75 659.4 0.75 653.46 0.75C647.52 0.75 647.52 6.75 641.58 6.75C635.64 6.75 635.64 0.75 629.7 0.75C623.76 0.75 623.76 6.75 617.82 6.75C611.88 6.75 611.88 0.75 605.94 0.75C600 0.75 600 6.75 594.06 6.75C588.12 6.75 588.12 0.75 582.18 0.75C576.24 0.75 576.24 6.75 570.3 6.75C564.36 6.75 564.36 0.75 558.42 0.75C552.48 0.75 552.48 6.75 546.54 6.75C540.6 6.75 540.6 0.75 534.66 0.75C528.72 0.75 528.72 6.75 522.78 6.75C516.84 6.75 516.84 0.75 510.9 0.75C504.96 0.75 504.96 6.75 499.02 6.75C493.08 6.75 493.08 0.75 487.14 0.75C481.2 0.75 481.2 6.75 475.26 6.75C469.32 6.75 469.32 0.75 463.38 0.75C457.44 0.75 457.44 6.75 451.5 6.75C445.56 6.75 445.56 0.75 439.62 0.75C433.68 0.75 433.68 6.75 427.74 6.75C421.8 6.75 421.8 0.75 415.86 0.75C409.92 0.75 409.92 6.75 403.98 6.75C398.04 6.75 398.04 0.75 392.1 0.75C386.16 0.75 386.16 6.75 380.22 6.75C374.28 6.75 374.28 0.75 368.34 0.75C362.4 0.75 362.4 6.75 356.46 6.75C350.52 6.75 350.52 0.75 344.58 0.75C338.64 0.75 338.64 6.75 332.7 6.75C326.76 6.75 326.76 0.75 320.82 0.75C314.88 0.75 314.88 6.75 308.94 6.75C303 6.75 303 0.75 297.06 0.75C291.12 0.75 291.12 6.75 285.18 6.75C279.24 6.75 279.24 0.75 273.3 0.75C267.36 0.75 267.36 6.75 261.42 6.75C255.48 6.75 255.48 0.75 249.54 0.75C243.6 0.75 243.6 6.75 237.66 6.75C231.72 6.75 231.72 0.75 225.78 0.75C219.84 0.75 219.84 6.75 213.9 6.75C207.96 6.75 207.96 0.75 202.02 0.75C196.08 0.75 196.08 6.75 190.14 6.75C184.2 6.75 184.2 0.75 178.26 0.75C172.32 0.75 172.32 6.75 166.38 6.75C160.44 6.75 160.44 0.75 154.5 0.75C148.56 0.75 148.56 6.75 142.62 6.75C136.68 6.75 136.68 0.75 130.74 0.75C124.8 0.75 124.8 6.75 118.86 6.75C112.92 6.75 112.92 0.75 106.98 0.75C101.04 0.75 101.04 6.75 95.1 6.75C89.16 6.75 89.16 0.75 83.22 0.75C77.28 0.75 77.28 6.75 71.34 6.75C65.4 6.75 65.4 0.75 59.45 0.75C53.51 0.75 53.51 6.75 47.56 6.75C41.62 6.75 41.62 0.75 35.67 0.75C29.73 0.75 29.73 6.75 23.78 6.75C17.83 6.75 17.83 0.75 11.89 0.75C5.95 0.75 5.94 6.75 0 6.75V126.75Z" fill="#BBBBBB"/> </svg>',
                            height: "100%",
                            id: "kWGGJBmWQ",
                            layoutId: "kWGGJBmWQ",
                            lineCap: "butt",
                            lineJoin: "miter",
                            style: { height: "100%", width: "100%" },
                            width: "100%",
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            e("div", { className: E(Va, ...M), id: "overlay" }),
          ],
        }),
      })
    );
  }),
  bo = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${Yr.bodyClassName}-framer-JXilx { background: var(--token-f1cbc539-f97a-4db0-aa7e-3136daa51261, rgb(8, 110, 253)) /* {"name":"Brandeis"} */; }`,
    ".framer-JXilx.framer-lux5qc, .framer-JXilx .framer-lux5qc { display: block; }",
    ".framer-JXilx.framer-72rtr7 { align-content: center; align-items: center; background-color: var(--token-f1cbc539-f97a-4db0-aa7e-3136daa51261, #086efd); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1728px; }",
    ".framer-JXilx .framer-16tajli { align-content: center; align-items: center; background: linear-gradient(180deg, #066ffd 53.28160191441441%, rgb(253, 175, 229) 100%); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 101vh; justify-content: center; min-height: 660px; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 1; }",
    ".framer-JXilx .framer-7vobzv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; max-width: 920px; overflow: hidden; padding: 0px 0px 60px 0px; position: relative; width: 80%; z-index: 2; }",
    ".framer-JXilx .framer-svk007 { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 100%; overflow: visible; position: relative; white-space: pre; width: 100%; z-index: 1; }",
    ".framer-JXilx .framer-t0n0cx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-JXilx .framer-16wsvf3 { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 500px; overflow: visible; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; z-index: 1; }",
    ".framer-JXilx .framer-n1s94j { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 75%; overflow: visible; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; z-index: 1; }",
    ".framer-JXilx .framer-19ceaqt-container { flex: none; height: 48px; position: relative; width: auto; z-index: 3; }",
    ".framer-JXilx .framer-1tfbfao { aspect-ratio: 1.1214574898785425 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 988px); left: 80%; position: absolute; top: 68%; transform: translate(-50%, -50%); width: 64%; z-index: 1; }",
    ".framer-JXilx .framer-1bjwhnk { aspect-ratio: 1.1214574898785425 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 988px); left: 20%; position: absolute; top: 68%; transform: translate(-50%, -50%); width: 64%; z-index: 1; }",
    ".framer-JXilx .framer-1srx3mq-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 1210px); left: 99%; opacity: 0.1; position: absolute; top: 8%; transform: translate(-50%, -50%); width: 70%; z-index: 0; }",
    ".framer-JXilx .framer-y1ugxs-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 1210px); left: 10%; opacity: 0.1; position: absolute; top: 69%; transform: translate(-50%, -50%); width: 70%; z-index: 0; }",
    ".framer-JXilx .framer-g9tx6j { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; left: 0px; min-height: 104px; overflow: hidden; padding: 28px 40px 28px 40px; position: absolute; right: 0px; top: 0px; z-index: 1; }",
    ".framer-JXilx .framer-rcv0sd-container { flex: none; height: 44px; left: calc(50.00000000000002% - 42px / 2); position: absolute; top: calc(45.83333333333336% - 44px / 2); width: 42px; z-index: 1; }",
    ".framer-JXilx .framer-pslnse { flex: none; height: 84px; overflow: visible; position: relative; width: 100%; }",
    ".framer-JXilx .framer-mtkb5g { bottom: -6px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: -6px; z-index: 3; }",
    ".framer-JXilx .framer-1rjiao1-container { aspect-ratio: 27.272727272727273 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 95px); left: 50%; min-width: 1800px; position: absolute; top: 49%; transform: translate(-50%, -50%); width: 104%; }",
    ".framer-JXilx .framer-ekd1ve-container { bottom: 0px; flex: none; height: 6px; left: calc(50.00000000000002% - max(1800px, 104.16666666666667%) / 2); min-width: 1800px; position: absolute; width: 104%; }",
    ".framer-JXilx .framer-djqccc-container { bottom: 6px; flex: none; left: 0px; position: absolute; right: 0px; top: 7px; }",
    ".framer-JXilx .framer-10czy5b-container { height: auto; position: relative; width: 1630px; }",
    ".framer-JXilx .framer-1rayqvd { align-content: flex-start; align-items: flex-start; background-color: var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, #f5f5fb); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 160px 0px 160px 0px; position: relative; width: 100%; }",
    ".framer-JXilx .framer-s896ev { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 420px; min-width: 360px; overflow: visible; padding: 0px 0px 0px 60px; position: sticky; top: 160px; width: 1px; will-change: transform; z-index: 1; }",
    ".framer-JXilx .framer-1kg1tp7 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 4px 0px; position: relative; width: 300px; z-index: 1; }",
    ".framer-JXilx .framer-doxgaz { flex: none; height: 168px; overflow: visible; position: relative; width: 278px; }",
    ".framer-JXilx .framer-un6sz6 { align-content: center; align-items: center; background-color: var(--token-77edaaf9-45b5-4b44-a35e-1e64393147ac, #ff3a0b); border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 50%; overflow: hidden; padding: 12px 20px 12px 20px; position: absolute; top: 3px; transform: translateX(-50%); width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-JXilx .framer-1me19wa, .framer-JXilx .framer-16382gs, .framer-JXilx .framer-4tjtk1, .framer-JXilx .framer-12ulsy0, .framer-JXilx .framer-lkt2cw, .framer-JXilx .framer-qq0gpz, .framer-JXilx .framer-1u92kh9, .framer-JXilx .framer-1pel5ku, .framer-JXilx .framer-132w1sx, .framer-JXilx .framer-1moveoy, .framer-JXilx .framer-1x8udvi, .framer-JXilx .framer-10zs9np, .framer-JXilx .framer-1yo90kg, .framer-JXilx .framer-1xulris, .framer-JXilx .framer-7poh5f, .framer-JXilx .framer-1nhx707, .framer-JXilx .framer-p6bwjx, .framer-JXilx .framer-lfaop5, .framer-JXilx .framer-1u9bsy7, .framer-JXilx .framer-yz8o2a, .framer-JXilx .framer-816bid, .framer-JXilx .framer-1hclnat, .framer-JXilx .framer-a4s5vg, .framer-JXilx .framer-b0xbgw, .framer-JXilx .framer-18sckoy, .framer-JXilx .framer-cji3yn, .framer-JXilx .framer-1vt5ssm, .framer-JXilx .framer-wo6e16, .framer-JXilx .framer-m29j3h { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-JXilx .framer-1uw6yrf { --framer-paragraph-spacing: 0px; bottom: 4px; flex: none; height: auto; left: 50%; position: absolute; transform: translateX(-50%); white-space: pre; width: auto; }",
    ".framer-JXilx .framer-1i8bps1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 2px 0px 2px; position: relative; width: 100%; }",
    ".framer-JXilx .framer-40zvor, .framer-JXilx .framer-6x3l5h, .framer-JXilx .framer-zaxl7v, .framer-JXilx .framer-13ologj, .framer-JXilx .framer-1cj4esz, .framer-JXilx .framer-r99it3 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-JXilx .framer-1xzo4fi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 280px; }",
    ".framer-JXilx .framer-1fwhlex, .framer-JXilx .framer-1ey770h, .framer-JXilx .framer-y6b2kj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-JXilx .framer-arpxxg { display: grid; flex: 2.4 0 0px; gap: 24px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: min-content; justify-content: center; max-width: 1180px; overflow: visible; padding: 0px 60px 0px 0px; position: relative; width: 1px; }",
    ".framer-JXilx .framer-8wr72p, .framer-JXilx .framer-1rqty4j, .framer-JXilx .framer-414o68, .framer-JXilx .framer-1ebjp2m { align-content: center; align-items: center; align-self: center; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 460px; justify-content: space-between; justify-self: center; overflow: hidden; padding: 8px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }",
    ".framer-JXilx .framer-1mpp7po, .framer-JXilx .framer-1alxsrt, .framer-JXilx .framer-5bzctn, .framer-JXilx .framer-kouwb5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 16px; position: relative; width: 100%; }",
    ".framer-JXilx .framer-1348zwq, .framer-JXilx .framer-10ppy50, .framer-JXilx .framer-njjz7u, .framer-JXilx .framer-1512rif { --border-bottom-width: 1.5px; --border-color: #ffffff; --border-left-width: 1.5px; --border-right-width: 1.5px; --border-style: solid; --border-top-width: 1.5px; -webkit-backdrop-filter: blur(10px); align-content: center; align-items: center; backdrop-filter: blur(10px); background-color: rgba(0, 0, 0, 0.1); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 12px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-JXilx .framer-1hnshfz, .framer-JXilx .framer-1hz1gwp, .framer-JXilx .framer-y7dxsn, .framer-JXilx .framer-1gb49ma, .framer-JXilx .framer-14hyc1d, .framer-JXilx .framer-e24zn1, .framer-JXilx .framer-iz5o8i { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-JXilx .framer-1abrkn8, .framer-JXilx .framer-1va69ui, .framer-JXilx .framer-1mr8lti, .framer-JXilx .framer-sghyt6 { align-content: flex-start; align-items: flex-start; background-color: #ffffff; border-bottom-left-radius: 32px; border-bottom-right-radius: 32px; border-top-left-radius: 32px; border-top-right-radius: 32px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 32px 28px 32px 28px; position: relative; width: 100%; }",
    ".framer-JXilx .framer-1c587mh, .framer-JXilx .framer-16jn7y9, .framer-JXilx .framer-j8w3i7, .framer-JXilx .framer-m75vtm { flex: none; height: 8px; position: relative; width: 202px; }",
    ".framer-JXilx .framer-ljcjm0, .framer-JXilx .framer-1dkzb85, .framer-JXilx .framer-4bp14j { align-content: center; align-items: center; background-color: var(--token-77edaaf9-45b5-4b44-a35e-1e64393147ac, #fc44a0); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 12px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-JXilx .framer-eqvi4p { align-content: center; align-items: center; background-color: var(--token-a738cba6-5676-4be7-a29b-2cbb5aff939a, #f5f5fb); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 0; }",
    ".framer-JXilx .framer-sw4w0a { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1000px; overflow: hidden; padding: 20px 0px 160px 0px; position: relative; width: 100%; }",
    ".framer-JXilx .framer-17y1eiq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-JXilx .framer-m6ie8m { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: 100%; }",
    ".framer-JXilx .framer-s5swy3 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 70%; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-JXilx .framer-1a2ch2r-container, .framer-JXilx .framer-13z3u6d-container, .framer-JXilx .framer-1tcu4xw-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-JXilx .framer-1u5etz7 { align-content: center; align-items: center; background-color: var(--token-c1a57a81-8688-4163-b9f3-2be571d9262d, #0d2623); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 120vh; justify-content: center; overflow: hidden; padding: 20px 0px 20px 0px; position: relative; width: 100%; z-index: 0; }",
    ".framer-JXilx .framer-xyzsd1, .framer-JXilx .framer-1x3y46n { flex: none; height: 8px; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; top: 0px; width: 100%; z-index: 3; }",
    ".framer-JXilx .framer-132rr3h-container { aspect-ratio: 27.272727272727273 / 1; bottom: 1px; flex: none; height: var(--framer-aspect-ratio-supported, 95px); left: 50%; min-width: 1800px; position: absolute; transform: translateX(-50%); width: 104%; }",
    ".framer-JXilx .framer-vzv8br { bottom: 0px; flex: none; height: 8px; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; width: 100%; z-index: 3; }",
    ".framer-JXilx .framer-1dx9agd-container { aspect-ratio: 27.272727272727273 / 1; bottom: -88px; flex: none; height: var(--framer-aspect-ratio-supported, 96px); left: 50%; min-width: 1800px; position: absolute; transform: translateX(-50%); width: 104%; }",
    ".framer-JXilx .framer-lq8mxg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 48px 0px 48px 0px; position: relative; width: 100%; }",
    ".framer-JXilx .framer-7da0jr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 52px; height: min-content; justify-content: center; overflow: visible; padding: 0px 60px 0px 60px; position: relative; width: 100%; }",
    ".framer-JXilx .framer-r3i854-container { flex: none; height: auto; max-width: 800px; position: relative; width: 100%; }",
    ".framer-JXilx .framer-1hiuohh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 48px 0px 48px 0px; position: relative; width: 100%; }",
    ".framer-JXilx .framer-gu7apc { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 20px 0px 20px; position: relative; width: 100%; z-index: 0; }",
    ".framer-JXilx .framer-1vmpdiv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; max-width: 1000px; overflow: hidden; padding: 160px 0px 100px 0px; position: relative; width: 100%; }",
    ".framer-JXilx .framer-11pq4o3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-JXilx .framer-15ke632 { align-content: center; align-items: center; background-color: #066ffd; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 140px; height: min-content; justify-content: center; overflow: hidden; padding: 100px 80px 40px 80px; position: relative; width: 100%; z-index: 0; }",
    ".framer-JXilx .framer-1oncgrd { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1280px; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-JXilx .framer-lyax4l { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }",
    ".framer-JXilx .framer-t5s7v2, .framer-JXilx .framer-lsuja2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 4px; position: relative; width: min-content; }",
    ".framer-JXilx .framer-1guekfi { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: 62%; }",
    ".framer-JXilx .framer-1ipjn37-container { flex: none; height: auto; position: relative; width: 300px; }",
    ".framer-JXilx .framer-pg0btu { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    ".framer-JXilx .framer-xmxhrz, .framer-JXilx .framer-12bqkka { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-JXilx .framer-11te40b, .framer-JXilx .framer-10dvcug, .framer-JXilx .framer-a84bw0, .framer-JXilx .framer-1322748, .framer-JXilx .framer-11tykf7, .framer-JXilx .framer-1qhi3k2, .framer-JXilx .framer-1um8nav, .framer-JXilx .framer-8d1too, .framer-JXilx .framer-1ozewkw { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 12px; position: relative; width: auto; }",
    ".framer-JXilx .framer-ayhs0w, .framer-JXilx .framer-mk9qas { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 12px; position: relative; width: min-content; }",
    ".framer-JXilx .framer-13ebdzi { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 12px; position: relative; width: min-content; }",
    ".framer-JXilx .framer-1diqchu, .framer-JXilx .framer-1tlo1g2 { --framer-paragraph-spacing: 0px; flex: none; height: auto; opacity: 0.66; position: relative; white-space: pre; width: auto; }",
    ".framer-JXilx .framer-145f0ft { align-content: flex-start; align-items: flex-start; display: flex; flex: 0.9 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 2px 0px 2px; position: relative; width: 1px; }",
    ".framer-JXilx .framer-1c884yy { align-content: flex-start; align-items: flex-start; display: flex; flex: 0.9 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }",
    ".framer-JXilx .framer-d67xu1-container, .framer-JXilx .framer-1e1dfcq-container { flex: none; height: auto; opacity: 0.66; position: relative; width: auto; }",
    ".framer-JXilx .framer-1lvuet { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-JXilx .framer-qpwytb-container { aspect-ratio: 27.272727272727273 / 1; bottom: 1px; flex: none; height: var(--framer-aspect-ratio-supported, 96px); left: 50%; min-width: 1800px; position: absolute; transform: translateX(-50%); width: 104%; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-JXilx.framer-72rtr7, .framer-JXilx .framer-16tajli, .framer-JXilx .framer-7vobzv, .framer-JXilx .framer-t0n0cx, .framer-JXilx .framer-g9tx6j, .framer-JXilx .framer-1rayqvd, .framer-JXilx .framer-s896ev, .framer-JXilx .framer-1kg1tp7, .framer-JXilx .framer-un6sz6, .framer-JXilx .framer-1i8bps1, .framer-JXilx .framer-1fwhlex, .framer-JXilx .framer-1ey770h, .framer-JXilx .framer-y6b2kj, .framer-JXilx .framer-1mpp7po, .framer-JXilx .framer-1348zwq, .framer-JXilx .framer-10ppy50, .framer-JXilx .framer-1abrkn8, .framer-JXilx .framer-1alxsrt, .framer-JXilx .framer-ljcjm0, .framer-JXilx .framer-njjz7u, .framer-JXilx .framer-1va69ui, .framer-JXilx .framer-5bzctn, .framer-JXilx .framer-1dkzb85, .framer-JXilx .framer-1512rif, .framer-JXilx .framer-1mr8lti, .framer-JXilx .framer-kouwb5, .framer-JXilx .framer-4bp14j, .framer-JXilx .framer-sghyt6, .framer-JXilx .framer-eqvi4p, .framer-JXilx .framer-sw4w0a, .framer-JXilx .framer-17y1eiq, .framer-JXilx .framer-1u5etz7, .framer-JXilx .framer-lq8mxg, .framer-JXilx .framer-7da0jr, .framer-JXilx .framer-1hiuohh, .framer-JXilx .framer-gu7apc, .framer-JXilx .framer-1vmpdiv, .framer-JXilx .framer-11pq4o3, .framer-JXilx .framer-15ke632, .framer-JXilx .framer-1oncgrd, .framer-JXilx .framer-lyax4l, .framer-JXilx .framer-t5s7v2, .framer-JXilx .framer-lsuja2, .framer-JXilx .framer-xmxhrz, .framer-JXilx .framer-11te40b, .framer-JXilx .framer-10dvcug, .framer-JXilx .framer-a84bw0, .framer-JXilx .framer-ayhs0w, .framer-JXilx .framer-1322748, .framer-JXilx .framer-11tykf7, .framer-JXilx .framer-12bqkka, .framer-JXilx .framer-1qhi3k2, .framer-JXilx .framer-1um8nav, .framer-JXilx .framer-8d1too, .framer-JXilx .framer-mk9qas, .framer-JXilx .framer-1ozewkw, .framer-JXilx .framer-13ebdzi, .framer-JXilx .framer-145f0ft, .framer-JXilx .framer-1c884yy, .framer-JXilx .framer-1lvuet { gap: 0px; } .framer-JXilx.framer-72rtr7 > *, .framer-JXilx .framer-16tajli > *, .framer-JXilx .framer-1u5etz7 > *, .framer-JXilx .framer-xmxhrz > *, .framer-JXilx .framer-12bqkka > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-JXilx.framer-72rtr7 > :first-child, .framer-JXilx .framer-16tajli > :first-child, .framer-JXilx .framer-7vobzv > :first-child, .framer-JXilx .framer-t0n0cx > :first-child, .framer-JXilx .framer-1kg1tp7 > :first-child, .framer-JXilx .framer-1i8bps1 > :first-child, .framer-JXilx .framer-1fwhlex > :first-child, .framer-JXilx .framer-1ey770h > :first-child, .framer-JXilx .framer-y6b2kj > :first-child, .framer-JXilx .framer-1348zwq > :first-child, .framer-JXilx .framer-10ppy50 > :first-child, .framer-JXilx .framer-1abrkn8 > :first-child, .framer-JXilx .framer-ljcjm0 > :first-child, .framer-JXilx .framer-njjz7u > :first-child, .framer-JXilx .framer-1va69ui > :first-child, .framer-JXilx .framer-1dkzb85 > :first-child, .framer-JXilx .framer-1512rif > :first-child, .framer-JXilx .framer-1mr8lti > :first-child, .framer-JXilx .framer-4bp14j > :first-child, .framer-JXilx .framer-sghyt6 > :first-child, .framer-JXilx .framer-eqvi4p > :first-child, .framer-JXilx .framer-sw4w0a > :first-child, .framer-JXilx .framer-17y1eiq > :first-child, .framer-JXilx .framer-1u5etz7 > :first-child, .framer-JXilx .framer-7da0jr > :first-child, .framer-JXilx .framer-1hiuohh > :first-child, .framer-JXilx .framer-gu7apc > :first-child, .framer-JXilx .framer-1vmpdiv > :first-child, .framer-JXilx .framer-11pq4o3 > :first-child, .framer-JXilx .framer-15ke632 > :first-child, .framer-JXilx .framer-lyax4l > :first-child, .framer-JXilx .framer-xmxhrz > :first-child, .framer-JXilx .framer-12bqkka > :first-child, .framer-JXilx .framer-13ebdzi > :first-child, .framer-JXilx .framer-145f0ft > :first-child, .framer-JXilx .framer-1c884yy > :first-child, .framer-JXilx .framer-1lvuet > :first-child { margin-top: 0px; } .framer-JXilx.framer-72rtr7 > :last-child, .framer-JXilx .framer-16tajli > :last-child, .framer-JXilx .framer-7vobzv > :last-child, .framer-JXilx .framer-t0n0cx > :last-child, .framer-JXilx .framer-1kg1tp7 > :last-child, .framer-JXilx .framer-1i8bps1 > :last-child, .framer-JXilx .framer-1fwhlex > :last-child, .framer-JXilx .framer-1ey770h > :last-child, .framer-JXilx .framer-y6b2kj > :last-child, .framer-JXilx .framer-1348zwq > :last-child, .framer-JXilx .framer-10ppy50 > :last-child, .framer-JXilx .framer-1abrkn8 > :last-child, .framer-JXilx .framer-ljcjm0 > :last-child, .framer-JXilx .framer-njjz7u > :last-child, .framer-JXilx .framer-1va69ui > :last-child, .framer-JXilx .framer-1dkzb85 > :last-child, .framer-JXilx .framer-1512rif > :last-child, .framer-JXilx .framer-1mr8lti > :last-child, .framer-JXilx .framer-4bp14j > :last-child, .framer-JXilx .framer-sghyt6 > :last-child, .framer-JXilx .framer-eqvi4p > :last-child, .framer-JXilx .framer-sw4w0a > :last-child, .framer-JXilx .framer-17y1eiq > :last-child, .framer-JXilx .framer-1u5etz7 > :last-child, .framer-JXilx .framer-7da0jr > :last-child, .framer-JXilx .framer-1hiuohh > :last-child, .framer-JXilx .framer-gu7apc > :last-child, .framer-JXilx .framer-1vmpdiv > :last-child, .framer-JXilx .framer-11pq4o3 > :last-child, .framer-JXilx .framer-15ke632 > :last-child, .framer-JXilx .framer-lyax4l > :last-child, .framer-JXilx .framer-xmxhrz > :last-child, .framer-JXilx .framer-12bqkka > :last-child, .framer-JXilx .framer-13ebdzi > :last-child, .framer-JXilx .framer-145f0ft > :last-child, .framer-JXilx .framer-1c884yy > :last-child, .framer-JXilx .framer-1lvuet > :last-child { margin-bottom: 0px; } .framer-JXilx .framer-7vobzv > *, .framer-JXilx .framer-1kg1tp7 > *, .framer-JXilx .framer-eqvi4p > *, .framer-JXilx .framer-sw4w0a > *, .framer-JXilx .framer-gu7apc > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-JXilx .framer-t0n0cx > *, .framer-JXilx .framer-1fwhlex > *, .framer-JXilx .framer-1ey770h > *, .framer-JXilx .framer-y6b2kj > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-JXilx .framer-g9tx6j > * { margin: 0px; margin-left: calc(30px / 2); margin-right: calc(30px / 2); } .framer-JXilx .framer-g9tx6j > :first-child, .framer-JXilx .framer-1rayqvd > :first-child, .framer-JXilx .framer-s896ev > :first-child, .framer-JXilx .framer-un6sz6 > :first-child, .framer-JXilx .framer-1mpp7po > :first-child, .framer-JXilx .framer-1alxsrt > :first-child, .framer-JXilx .framer-5bzctn > :first-child, .framer-JXilx .framer-kouwb5 > :first-child, .framer-JXilx .framer-lq8mxg > :first-child, .framer-JXilx .framer-1oncgrd > :first-child, .framer-JXilx .framer-t5s7v2 > :first-child, .framer-JXilx .framer-lsuja2 > :first-child, .framer-JXilx .framer-11te40b > :first-child, .framer-JXilx .framer-10dvcug > :first-child, .framer-JXilx .framer-a84bw0 > :first-child, .framer-JXilx .framer-ayhs0w > :first-child, .framer-JXilx .framer-1322748 > :first-child, .framer-JXilx .framer-11tykf7 > :first-child, .framer-JXilx .framer-1qhi3k2 > :first-child, .framer-JXilx .framer-1um8nav > :first-child, .framer-JXilx .framer-8d1too > :first-child, .framer-JXilx .framer-mk9qas > :first-child, .framer-JXilx .framer-1ozewkw > :first-child { margin-left: 0px; } .framer-JXilx .framer-g9tx6j > :last-child, .framer-JXilx .framer-1rayqvd > :last-child, .framer-JXilx .framer-s896ev > :last-child, .framer-JXilx .framer-un6sz6 > :last-child, .framer-JXilx .framer-1mpp7po > :last-child, .framer-JXilx .framer-1alxsrt > :last-child, .framer-JXilx .framer-5bzctn > :last-child, .framer-JXilx .framer-kouwb5 > :last-child, .framer-JXilx .framer-lq8mxg > :last-child, .framer-JXilx .framer-1oncgrd > :last-child, .framer-JXilx .framer-t5s7v2 > :last-child, .framer-JXilx .framer-lsuja2 > :last-child, .framer-JXilx .framer-11te40b > :last-child, .framer-JXilx .framer-10dvcug > :last-child, .framer-JXilx .framer-a84bw0 > :last-child, .framer-JXilx .framer-ayhs0w > :last-child, .framer-JXilx .framer-1322748 > :last-child, .framer-JXilx .framer-11tykf7 > :last-child, .framer-JXilx .framer-1qhi3k2 > :last-child, .framer-JXilx .framer-1um8nav > :last-child, .framer-JXilx .framer-8d1too > :last-child, .framer-JXilx .framer-mk9qas > :last-child, .framer-JXilx .framer-1ozewkw > :last-child { margin-right: 0px; } .framer-JXilx .framer-1rayqvd > * { margin: 0px; margin-left: calc(24px / 2); margin-right: calc(24px / 2); } .framer-JXilx .framer-s896ev > *, .framer-JXilx .framer-1oncgrd > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-JXilx .framer-un6sz6 > *, .framer-JXilx .framer-1mpp7po > *, .framer-JXilx .framer-1alxsrt > *, .framer-JXilx .framer-5bzctn > *, .framer-JXilx .framer-kouwb5 > *, .framer-JXilx .framer-lq8mxg > *, .framer-JXilx .framer-t5s7v2 > *, .framer-JXilx .framer-lsuja2 > *, .framer-JXilx .framer-11te40b > *, .framer-JXilx .framer-10dvcug > *, .framer-JXilx .framer-a84bw0 > *, .framer-JXilx .framer-ayhs0w > *, .framer-JXilx .framer-1322748 > *, .framer-JXilx .framer-11tykf7 > *, .framer-JXilx .framer-1qhi3k2 > *, .framer-JXilx .framer-1um8nav > *, .framer-JXilx .framer-8d1too > *, .framer-JXilx .framer-mk9qas > *, .framer-JXilx .framer-1ozewkw > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-JXilx .framer-1i8bps1 > *, .framer-JXilx .framer-17y1eiq > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-JXilx .framer-1348zwq > *, .framer-JXilx .framer-10ppy50 > *, .framer-JXilx .framer-ljcjm0 > *, .framer-JXilx .framer-njjz7u > *, .framer-JXilx .framer-1dkzb85 > *, .framer-JXilx .framer-1512rif > *, .framer-JXilx .framer-4bp14j > *, .framer-JXilx .framer-1hiuohh > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-JXilx .framer-1abrkn8 > *, .framer-JXilx .framer-1va69ui > *, .framer-JXilx .framer-1mr8lti > *, .framer-JXilx .framer-sghyt6 > *, .framer-JXilx .framer-13ebdzi > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-JXilx .framer-7da0jr > * { margin: 0px; margin-bottom: calc(52px / 2); margin-top: calc(52px / 2); } .framer-JXilx .framer-1vmpdiv > * { margin: 0px; margin-bottom: calc(80px / 2); margin-top: calc(80px / 2); } .framer-JXilx .framer-11pq4o3 > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } .framer-JXilx .framer-15ke632 > * { margin: 0px; margin-bottom: calc(140px / 2); margin-top: calc(140px / 2); } .framer-JXilx .framer-lyax4l > *, .framer-JXilx .framer-1c884yy > *, .framer-JXilx .framer-1lvuet > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-JXilx .framer-145f0ft > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } }",
    `@media (min-width: 1200px) and (max-width: 1727px) { .${Yr.bodyClassName}-framer-JXilx { background: var(--token-f1cbc539-f97a-4db0-aa7e-3136daa51261, rgb(8, 110, 253)) /* {"name":"Brandeis"} */; } .framer-JXilx.framer-72rtr7 { width: 1200px; } .framer-JXilx .framer-1tfbfao { left: 80%; top: 70%; width: 64%; } .framer-JXilx .framer-1bjwhnk { left: 20%; top: 70%; width: 64%; } .framer-JXilx .framer-1srx3mq-container, .framer-JXilx .framer-y1ugxs-container { height: var(--framer-aspect-ratio-supported, 840px); }}`,
    `@media (min-width: 810px) and (max-width: 1199px) { .${Yr.bodyClassName}-framer-JXilx { background: var(--token-f1cbc539-f97a-4db0-aa7e-3136daa51261, rgb(8, 110, 253)) /* {"name":"Brandeis"} */; } .framer-JXilx.framer-72rtr7 { width: 810px; } .framer-JXilx .framer-1tfbfao { aspect-ratio: unset; bottom: -50px; height: 463px; left: calc(80.12345679012348% - 519px / 2); top: unset; transform: unset; width: 519px; } .framer-JXilx .framer-1bjwhnk { aspect-ratio: unset; bottom: -50px; height: 463px; left: calc(19.876543209876566% - 519px / 2); top: unset; transform: unset; width: 519px; } .framer-JXilx .framer-1srx3mq-container, .framer-JXilx .framer-y1ugxs-container { height: 40vh; top: 10%; width: var(--framer-aspect-ratio-supported, 432px); } .framer-JXilx .framer-1rayqvd { align-content: center; align-items: center; flex-direction: column; gap: 120px; padding: 120px 0px 120px 0px; } .framer-JXilx .framer-s896ev { flex: none; justify-content: center; padding: 0px; position: relative; top: unset; width: min-content; } .framer-JXilx .framer-1kg1tp7 { width: 284px; } .framer-JXilx .framer-40zvor { min-width: 300px; } .framer-JXilx .framer-arpxxg { flex: none; padding: 0px 32px 0px 32px; width: 100%; } .framer-JXilx .framer-8wr72p, .framer-JXilx .framer-1rqty4j { max-width: 600px; } .framer-JXilx .framer-sw4w0a { padding: 20px 0px 120px 0px; } .framer-JXilx .framer-17y1eiq { max-width: 85%; } .framer-JXilx .framer-1u5etz7 { height: min-content; padding: 120px 0px 120px 0px; } .framer-JXilx .framer-1dx9agd-container, .framer-JXilx .framer-qpwytb-container { height: var(--framer-aspect-ratio-supported, 95px); } .framer-JXilx .framer-7da0jr { padding: 0px; width: 90%; } .framer-JXilx .framer-1vmpdiv { padding: 100px 0px 80px 0px; } .framer-JXilx .framer-15ke632 { padding: 100px 40px 40px 40px; } .framer-JXilx .framer-lyax4l { flex: 0.4 0 0px; padding: 0px 60px 0px 0px; } .framer-JXilx .framer-t5s7v2 { max-width: 360px; padding: 0px 4px 0px 4px; width: 100%; } .framer-JXilx .framer-7poh5f { flex: 1 0 0px; max-width: 360px; width: 1px; } .framer-JXilx .framer-1ipjn37-container { max-width: 360px; width: 100%; } .framer-JXilx .framer-lsuja2 { padding: 0px 4px 0px 4px; } .framer-JXilx .framer-pg0btu { flex: 0.6 0 0px; min-width: 385px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-JXilx .framer-1rayqvd { gap: 0px; } .framer-JXilx .framer-1rayqvd > * { margin: 0px; margin-bottom: calc(120px / 2); margin-top: calc(120px / 2); } .framer-JXilx .framer-1rayqvd > :first-child { margin-top: 0px; } .framer-JXilx .framer-1rayqvd > :last-child { margin-bottom: 0px; } }}`,
    `@media (max-width: 809px) { .${Yr.bodyClassName}-framer-JXilx { background: var(--token-f1cbc539-f97a-4db0-aa7e-3136daa51261, rgb(8, 110, 253)) /* {"name":"Brandeis"} */; } .framer-JXilx.framer-72rtr7 { width: 390px; } .framer-JXilx .framer-16tajli { height: 92vh; } .framer-JXilx .framer-7vobzv { order: 0; padding: 0px 0px 120px 0px; width: 88%; } .framer-JXilx .framer-16wsvf3 { max-width: 348px; width: 100%; } .framer-JXilx .framer-1tfbfao { aspect-ratio: 1.1223175965665235 / 1; height: var(--framer-aspect-ratio-supported, 466px); left: 59%; max-width: 860px; order: 3; top: 76%; width: 134%; } .framer-JXilx .framer-1srx3mq-container { height: var(--framer-aspect-ratio-supported, 468px); left: 89%; order: 5; top: 17%; width: 120%; } .framer-JXilx .framer-y1ugxs-container { height: var(--framer-aspect-ratio-supported, 468px); left: -16%; order: 6; top: 70%; width: 120%; } .framer-JXilx .framer-g9tx6j { min-height: unset; order: 7; padding: 28px 0px 28px 0px; } .framer-JXilx .framer-rcv0sd-container { left: unset; position: relative; top: unset; } .framer-JXilx .framer-1rayqvd { align-content: center; align-items: center; flex-direction: column; gap: 80px; padding: 80px 0px 80px 0px; } .framer-JXilx .framer-s896ev { flex: none; justify-content: center; padding: 0px; position: relative; top: unset; width: 100%; } .framer-JXilx .framer-1kg1tp7 { width: 284px; } .framer-JXilx .framer-1i8bps1 { min-width: 300px; } .framer-JXilx .framer-arpxxg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; padding: 0px 20px 0px 20px; width: 100%; z-index: 1; } .framer-JXilx .framer-8wr72p { align-self: unset; max-width: 480px; position: sticky; top: 60px; z-index: 1; } .framer-JXilx .framer-1rqty4j { align-self: unset; box-shadow: 0px -7px 14px 2px rgba(17, 32, 43, 0.2); max-width: 480px; position: sticky; top: 72px; z-index: 1; } .framer-JXilx .framer-414o68 { align-self: unset; box-shadow: 0px -7px 14px 2px rgba(17, 32, 43, 0.2); max-width: 480px; position: sticky; top: 84px; z-index: 1; } .framer-JXilx .framer-1ebjp2m { align-self: unset; box-shadow: 0px -7px 14px 2px rgba(17, 32, 43, 0.2); max-width: 480px; position: sticky; top: 82px; z-index: 1; } .framer-JXilx .framer-sw4w0a { padding: 0px 0px 80px 0px; } .framer-JXilx .framer-17y1eiq { width: 90%; } .framer-JXilx .framer-m6ie8m { white-space: pre-wrap; word-break: break-word; word-wrap: break-word; } .framer-JXilx .framer-s5swy3 { max-width: unset; width: 80%; } .framer-JXilx .framer-1u5etz7 { height: min-content; } .framer-JXilx .framer-132rr3h-container { height: var(--framer-aspect-ratio-supported, 96px); } .framer-JXilx .framer-lq8mxg { padding: 48px 32px 48px 32px; } .framer-JXilx .framer-10zs9np { flex: 1 0 0px; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; } .framer-JXilx .framer-7da0jr { padding: 0px 8px 0px 8px; } .framer-JXilx .framer-r3i854-container { max-width: 480px; } .framer-JXilx .framer-1hiuohh { flex-direction: row; padding: 48px 20px 48px 20px; } .framer-JXilx .framer-1yo90kg { max-width: 380px; white-space: pre-wrap; word-break: break-word; word-wrap: break-word; } .framer-JXilx .framer-gu7apc { padding: 0px; } .framer-JXilx .framer-1vmpdiv { padding: 100px 0px 80px 0px; } .framer-JXilx .framer-11pq4o3 { padding: 0px 20px 0px 20px; } .framer-JXilx .framer-13z3u6d-container { max-width: 400px; width: 100%; } .framer-JXilx .framer-15ke632 { padding: 80px 0px 40px 0px; } .framer-JXilx .framer-1oncgrd { align-content: center; align-items: center; flex-direction: column; gap: 40px; max-width: 480px; } .framer-JXilx .framer-lyax4l, .framer-JXilx .framer-145f0ft, .framer-JXilx .framer-1c884yy { flex: none; width: 90%; } .framer-JXilx .framer-t5s7v2 { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 0px; padding: 0px 4px 0px 4px; width: 100%; } .framer-JXilx .framer-7poh5f, .framer-JXilx .framer-1ipjn37-container, .framer-JXilx .framer-lsuja2 { width: 100%; } .framer-JXilx .framer-1nhx707 { flex: 0.9 0 0px; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; } .framer-JXilx .framer-pg0btu { flex: none; gap: 48px; justify-content: flex-start; padding: 0px 2px 0px 2px; width: 90%; } .framer-JXilx .framer-11te40b, .framer-JXilx .framer-10dvcug, .framer-JXilx .framer-a84bw0, .framer-JXilx .framer-1322748, .framer-JXilx .framer-11tykf7, .framer-JXilx .framer-1qhi3k2, .framer-JXilx .framer-1um8nav, .framer-JXilx .framer-8d1too, .framer-JXilx .framer-1ozewkw { align-self: unset; padding: 12px 0px 12px 0px; width: min-content; } .framer-JXilx .framer-ayhs0w, .framer-JXilx .framer-mk9qas { padding: 12px 0px 12px 0px; } .framer-JXilx .framer-qpwytb-container { height: var(--framer-aspect-ratio-supported, 95px); } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-JXilx .framer-1rayqvd, .framer-JXilx .framer-arpxxg, .framer-JXilx .framer-1hiuohh, .framer-JXilx .framer-1oncgrd, .framer-JXilx .framer-t5s7v2, .framer-JXilx .framer-pg0btu { gap: 0px; } .framer-JXilx .framer-1rayqvd > * { margin: 0px; margin-bottom: calc(80px / 2); margin-top: calc(80px / 2); } .framer-JXilx .framer-1rayqvd > :first-child, .framer-JXilx .framer-arpxxg > :first-child, .framer-JXilx .framer-1oncgrd > :first-child, .framer-JXilx .framer-t5s7v2 > :first-child { margin-top: 0px; } .framer-JXilx .framer-1rayqvd > :last-child, .framer-JXilx .framer-arpxxg > :last-child, .framer-JXilx .framer-1oncgrd > :last-child, .framer-JXilx .framer-t5s7v2 > :last-child { margin-bottom: 0px; } .framer-JXilx .framer-arpxxg > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-JXilx .framer-1hiuohh > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-JXilx .framer-1hiuohh > :first-child, .framer-JXilx .framer-pg0btu > :first-child { margin-left: 0px; } .framer-JXilx .framer-1hiuohh > :last-child, .framer-JXilx .framer-pg0btu > :last-child { margin-right: 0px; } .framer-JXilx .framer-1oncgrd > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-JXilx .framer-t5s7v2 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-JXilx .framer-pg0btu > * { margin: 0px; margin-left: calc(48px / 2); margin-right: calc(48px / 2); } }}`,
    '.framer-JXilx[data-border="true"]::after, .framer-JXilx [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Er = H(yo, bo, "framer-JXilx"),
  Ul = Er;
Er.displayName = "Home";
Er.defaultProps = { height: 5275, width: 1728 };
var wo = [
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
G(
  Er,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Bricolage Grotesque",
          source: "google",
          style: "normal",
          url: "fonts/s/bricolagegrotesque/v7/3y996as8bTXq_nANBjzKo3IeZx8z6up5H--HGN6NLPo.ttf",
          variationAxes: wo,
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
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "/content/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "/content/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange: "U+1F00-1FFF",
          url: "/content/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0370-03FF",
          url: "/content/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "/content/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "/content/assets/vFzuJY0c65av44uhEKB6vyjFMg.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "/content/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2",
          weight: "400",
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
          url: "/content/assets/BkDpl4ghaqvMi1btKFyG2tdbec.woff2",
          weight: "300",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "/content/assets/zAMK70AQRFSShJgUiaR5IiIhgzk.woff2",
          weight: "300",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "/content/assets/IETjvc5qzUaRoaruDpPSwCUM8.woff2",
          weight: "300",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "/content/assets/oLCoaT3ioA0fHdJnWR9W6k7NY.woff2",
          weight: "300",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "/content/assets/Sj0PCHQSBjFmEp6NBWg6FNaKc.woff2",
          weight: "300",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "/content/assets/v2q8JTTTs7McDMSEhnxAIBqd0.woff2",
          weight: "300",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "/content/assets/H4TfENUY1rh8R9UaSD6vngjJP3M.woff2",
          weight: "300",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "/content/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "/content/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "/content/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "/content/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "/content/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "/content/assets/1ZFS7N918ojhhd0nQWdj3jz4w.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "/content/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2",
          weight: "600",
        },
      ],
    },
    ...io,
    ...oo,
    ...lo,
    ...so,
    ...fo,
    ...mo,
    ...co,
    ...po,
    ...ho,
    ...uo,
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Xl = {
  exports: {
    default: {
      type: "reactComponent",
      name: "FrameraugiA20Il",
      slots: [],
      annotations: {
        framerIntrinsicWidth: "1728",
        framerContractVersion: "1",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"t0DnlHXKs":{"layout":["fixed","auto"]},"FWFWx7bxY":{"layout":["fixed","auto"]},"HF8RfH6Up":{"layout":["fixed","auto"]}}}',
        framerComponentViewportWidth: "true",
        framerDisplayContentsDiv: "false",
        framerImmutableVariables: "true",
        framerIntrinsicHeight: "5275",
        framerResponsiveScreen: "",
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
export { Xl as __FramerMetadata__, Ul as default };
//# sourceMappingURL=YMqSTOXfRqgESMzeFn3ayMhkX8ovk1UEWZDWNn0cmS0.GSLCDOYP.mjs.map
