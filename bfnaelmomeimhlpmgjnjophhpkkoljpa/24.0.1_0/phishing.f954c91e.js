(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequire1d24;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequire1d24=i);var o=i("lDSNw");i("1KK14");var a,l,s,c,u=i("4yY1D"),d=i("dU2RF"),m=i("cZIbv"),g=(i("lDSNw"),i("aJuCi")),f=i("kBpKb"),h={};a=h,l="BlocklistOrigin",s=function(){return D},c=function(e){return D=e},Object.defineProperty(a,l,{get:s,set:c,enumerable:!0,configurable:!0});var b=i("lMzyG"),p=i("1uUV4"),w=(o=i("lDSNw"),i("NQvFB")),v=i("lrTw9"),y=i("6R6dI"),S=(m=i("cZIbv"),i("aanFI")),x=i("kn91D"),E=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{s(r.next(e))}catch(e){o(e)}}function l(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}s((r=r.apply(e,t||[])).next())}))};const O="#ca3214",T=m.default.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #fffdf8;
  padding: clamp(24px, 16vh, 256px) 24px;
  box-sizing: border-box;
`,k=m.default.div`
  margin-bottom: 24px;
  padding-bottom: 8vh;
`,U=m.default.div`
  max-width: 100ch;
  margin: auto;

  * {
    text-align: left;
  }
`,I=m.default.a`
  text-decoration: underline;
  color: ${O};
`,D=({origin:t,subdomain:n})=>{const{t:r}=(0,b.useTranslation)(),i=t?(0,v.removeSubdomainFromDomain)(t):"",a=new URL(null!=t?t:"").hostname,l="true"===n?a:i;return e(o).createElement(T,null,e(o).createElement(U,null,e(o).createElement(k,null,e(o).createElement(S.IconPhantomWordmark,{width:128,fill:"#bbb9b6"})),e(o).createElement(x.Text,{size:30,color:O,weight:"600"},r("blocklistOriginDomainIsBlocked",{domainName:l||r("blocklistOriginThisDomain")})),e(o).createElement(x.Text,{color:O},r("blocklistOriginSiteIsMalicious")),e(o).createElement(x.Text,{color:O},e(o).createElement(b.Trans,{i18nKey:"blocklistOriginCommunityDatabaseInterpolated"},"This site has been flagged as part of a",e(o).createElement(I,{href:w.PHANTOM_BLOCKLIST_GITHUB_URL,rel:"noopener",target:"_blank"},"community-maintained database"),"of known phishing websites and scams. If you believe the site has been flagged in error,",e(o).createElement(I,{href:w.PHANTOM_BLOCKLIST_GITHUB_URL,rel:"noopener",target:"_blank"},"please file an issue"),".")),l?e(o).createElement(x.Text,{color:O,onClick:()=>E(void 0,void 0,void 0,(function*(){if("true"===n){const e=yield(0,y.getStorageValue)(p.StorageKeys.UserWhitelistSubdomains);let t=JSON.parse(`${e}`);t?t.push(a):t=[a],t=[...new Set(t)],(0,y.setStorageValue)(p.StorageKeys.UserWhitelistSubdomains,JSON.stringify(t))}else{const e=yield(0,y.getStorageValue)(p.StorageKeys.UserWhitelistedOrigins);let t=JSON.parse(`${e}`);t?t.push(i):t=[i],t=[...new Set(t)],(0,y.setStorageValue)(p.StorageKeys.UserWhitelistedOrigins,JSON.stringify(t))}window.location.href=t})),hoverUnderline:!0},r("blocklistOriginIgnoreWarning",{domainName:t})):e(o).createElement(e(o).Fragment,null)))},N=()=>{let e;try{e=new URLSearchParams(window.location.search).get("origin")||"",new URL(e)}catch(t){e=""}return e},L=()=>new URLSearchParams(window.location.search).get("subdomain")||"";var R=i("a8kcR"),_=i("h5kyv"),B=i("8DCD7"),F=i("1wI6a");u.fileLogger.init({provider:F.FileLoggerProvider}),u.telemetry.init(),u.telemetry.setUser({id:_.analytics.getDeviceId()}),(0,B.initializeFeatureFlags)();const K=document.getElementById("root");(0,d.createRoot)(K).render(e(o).createElement(m.ThemeProvider,{theme:R.theme},e(o).createElement((()=>{const t=(0,o.useMemo)(N,[]),n=(0,o.useMemo)(L,[]);return e(o).createElement(g.MemoryRouter,{future:{v7_startTransition:!0}},e(o).createElement(f.ErrorBoundaryWithDefaultFallback,null,e(o).createElement(h.BlocklistOrigin,{origin:t,subdomain:n})))}),null)));
//# sourceMappingURL=phishing.f954c91e.js.map
define=__define;})(window.define);