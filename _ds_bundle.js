/* @ds-bundle: {"format":4,"namespace":"JUMCODesignSystem_b3554b","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"5be89d10922a","components/core/Button.jsx":"81f433a7add0","components/core/Card.jsx":"64b45e4dee51","components/core/Input.jsx":"32112af60893"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.JUMCODesignSystem_b3554b = window.JUMCODesignSystem_b3554b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  tone = 'sky',
  children
}) {
  const t = {
    sky: ['var(--jumco-sky)', 'var(--jumco-navy-900)'],
    navy: ['var(--jumco-navy)', '#fff'],
    gray: ['var(--jumco-gray-50)', 'var(--jumco-gray-500)']
  }[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      font: '700 12px var(--font-body)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      padding: '4px 12px',
      borderRadius: 'var(--radius-pill)',
      background: t[0],
      color: t[1]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'primary',
  size = 'md',
  children,
  ...p
}) {
  const pad = {
    sm: '8px 16px',
    md: '12px 24px',
    lg: '16px 32px'
  }[size];
  const v = {
    primary: {
      background: 'var(--jumco-navy)',
      color: '#fff',
      border: '2px solid var(--jumco-navy)'
    },
    secondary: {
      background: 'var(--jumco-sky)',
      color: 'var(--jumco-navy-900)',
      border: '2px solid var(--jumco-sky)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--jumco-navy)',
      border: '2px solid var(--jumco-navy)'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({}, p, {
    style: {
      font: '700 16px var(--font-body)',
      padding: pad,
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      opacity: p.disabled ? .5 : 1,
      transition: 'all var(--dur) var(--ease)',
      ...v,
      ...p.style
    }
  }), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  tone = 'light',
  children,
  style
}) {
  const d = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      borderRadius: 'var(--radius-lg)',
      background: d ? 'var(--jumco-navy)' : 'var(--surface-card)',
      color: d ? '#fff' : 'var(--text-body)',
      border: d ? 'none' : '1px solid var(--border)',
      boxShadow: 'var(--shadow-md)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  ...p
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      font: '600 14px var(--font-body)',
      color: 'var(--jumco-navy)'
    }
  }, label, /*#__PURE__*/React.createElement("input", _extends({}, p, {
    style: {
      display: 'block',
      width: '100%',
      boxSizing: 'border-box',
      marginTop: 6,
      padding: '12px 16px',
      font: '400 16px var(--font-body)',
      border: '2px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      ...p.style
    },
    onFocus: e => e.target.style.borderColor = 'var(--jumco-sky)',
    onBlur: e => e.target.style.borderColor = 'var(--border)'
  })));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

})();
