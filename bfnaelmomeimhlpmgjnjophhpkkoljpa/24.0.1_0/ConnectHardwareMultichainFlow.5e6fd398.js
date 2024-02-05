(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=r.parcelRequire1d24;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},r.parcelRequire1d24=o),o.register("lofhi",(function(t,r){e(t.exports,"default",(function(){return a}));var n=o("29o0l"),i=o("d6194");function a(e,t){void 0===t&&(t=[]);var r=(0,i.default)(e,t,{loading:!0}),o=r[0],a=r[1];return(0,n.useEffect)((function(){a()}),[a]),o}})),o.register("d6194",(function(t,r){e(t.exports,"default",(function(){return l}));var n=o("YZf6l"),i=o("29o0l"),a=o("3Y2rr");function l(e,t,r){void 0===t&&(t=[]),void 0===r&&(r={loading:!1});var o=(0,i.useRef)(0),l=(0,a.default)(),u=(0,i.useState)(r),c=u[0],s=u[1],f=(0,i.useCallback)((function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var i=++o.current;return c.loading||s((function(e){return(0,n.__assign)((0,n.__assign)({},e),{loading:!0})})),e.apply(void 0,t).then((function(e){return l()&&i===o.current&&s({value:e,loading:!1}),e}),(function(e){return l()&&i===o.current&&s({error:e,loading:!1}),e}))}),t);return[c,f]}})),o.register("YZf6l",(function(t,r){e(t.exports,"__assign",(function(){return n})),e(t.exports,"__importDefault",(function(){return i}));var n=function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},n.apply(this,arguments)};Object.create;Object.create;function i(e){return e&&e.__esModule?e:{default:e}}"function"==typeof SuppressedError&&SuppressedError})),o.register("3Y2rr",(function(t,r){e(t.exports,"default",(function(){return i}));var n=o("29o0l");function i(){var e=(0,n.useRef)(!1),t=(0,n.useCallback)((function(){return e.current}),[]);return(0,n.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),t}})),o.register("cI6uH",(function(t,r){e(t.exports,"useEffectOnce",(function(){return i}));var n=o("29o0l");const i=(e,t)=>{const r=(0,n.useRef)(!1);(0,n.useEffect)((()=>{if(!r.current&&t)return r.current=!0,e()}))}})),o.register("cb8KS",(function(r,n){e(r.exports,"ConfirmationIconType",(function(){return p})),e(r.exports,"ConfirmationIcon",(function(){return h}));var i=o("1fwzV"),a=o("lz5BI"),l=o("29o0l"),u=o("gkfw3"),c=o("6UMd8"),s=o("j81qC");const f=u.default.div`
  position: relative;
`,d=(0,u.default)(a.motion.div)`
  width: ${e=>e.width}px;
  height: ${e=>e.width}px;
`,m=(0,u.default)(a.motion.div)`
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;var p,g;(g=p||(p={})).Default="default",g.Warning="warning",g.Failure="failure",g.Success="success";const h=({type:e,iconWidth:r,defaultIcon:n,backgroundWidth:o=94})=>t(l).createElement(f,null,t(l).createElement(i.AnimatePresence,{mode:"wait",initial:!1},t(l).createElement(d,{width:o,key:e,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2}},(()=>{switch(e){case p.Default:return t(l).createElement(c.Circle,{diameter:o,color:"#181818",includeDarkBoxShadow:!0});case p.Warning:return t(l).createElement(c.Circle,{diameter:o,color:"#FFDC62",opacity:.1});case p.Failure:return t(l).createElement(c.Circle,{diameter:o,color:"#EB3742",opacity:.1});case p.Success:return t(l).createElement(c.Circle,{diameter:o,color:"#21E56F",opacity:.1})}})())),t(l).createElement(i.AnimatePresence,{mode:"wait",initial:!0},t(l).createElement(m,{key:e,initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10},transition:{duration:.4,bounce:.4,type:"spring"}},(()=>{switch(e){case p.Default:return null!=n?n:t(l).createElement(s.IconQuestionMark,{width:null!=r?r:30});case p.Warning:return t(l).createElement(s.IconExclamationMarkCircle,{width:40,height:40,circleFill:"#FFDC62",exclamationFill:"#00000000"});case p.Failure:return t(l).createElement(s.IconFailure,{width:null!=r?r:30});case p.Success:return t(l).createElement(s.IconCheckmark,{height:"100%",width:null!=r?r:40,fill:"#21E56F"})}})())))})),o.register("3mrWC",(function(r,n){e(r.exports,"IconHeaderStyle",(function(){return v}),(function(e){return v=e})),e(r.exports,"IconHeader",(function(){return k}),(function(e){return k=e})),e(r.exports,"TabIconHeader",(function(){return j}),(function(e){return j=e}));var i=o("29o0l"),a=o("gkfw3"),l=o("eWzmJ"),u=o("91Dw6"),c=o("j81qC"),s=o("izu1Y"),f=o("27SDj"),d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r};const m=a.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,p=a.keyframes`
  0% {
    top: 15px;
    opacity: 0;
  };
  100% {
    top: 0px;
    opacity: 1;
  };
`,g=a.default.div`
  animation-name: ${e=>e.animateText?p:"none"};
  animation-duration: ${e=>e.animateText?".5s":"0s"};
  position: relative;
`,h=(0,a.default)(f.Text)`
  margin: ${e=>e.margin};
`;h.defaultProps={margin:"20px auto 0 auto"};const y=(0,a.default)(f.Text)`
  margin: ${e=>e.margin};
`;y.defaultProps={margin:"15px 0px 0px 0px"};const x=a.default.div`
  position: relative;
  left: 38px;
  bottom: 22px;
`;var v,E;(E=v||(v={})).Medium="medium",E.Large="large",E.Small="small";const b={[v.Large]:30,[v.Medium]:28,[v.Small]:24},w={[v.Large]:34,[v.Medium]:34,[v.Small]:29},O={[v.Large]:18,[v.Medium]:16,[v.Small]:14},k=({className:e,icon:r,primaryText:n,secondaryText:o,headerStyle:a,showWarning:l=!1,showError:s=!1,animateText:f=!1})=>{a=null!=a?a:v.Medium;const d=b[a],p=w[a],E=O[a],k={[v.Large]:22,[v.Medium]:19,[v.Small]:17}[a],I="small"===a?"16px 0 0 0":void 0,S=s?u.ERROR_COLOR:"#777777";return t(i).createElement(m,{className:e},null!=r?r:t(i).createElement(c.IconUnknownOrigin,null),l?t(i).createElement(x,null,t(i).createElement(c.IconExclamationMarkCircle,null)):t(i).createElement(t(i).Fragment,null),t(i).createElement(g,{animateText:f},n&&t(i).createElement(h,{margin:I,weight:500,size:d,lineHeight:p,maxWidth:"320px"},n),o&&t(i).createElement(y,{margin:I,wordBreak:"break-word",size:E,lineHeight:k,color:S},o)))};k.defaultProps={headerStyle:v.Medium};const I=a.css`
  border-radius: 20px;
  width: 90px;
  height: 90px;
`,S=(0,a.default)(s.PImage)`
  ${I}
  object-fit: scale-down;
  filter: ${e=>e.showError?"grayscale(1)":"none"};
`,C=a.default.div`
  ${I}
`,j=e=>{var{tabId:r,iconUrl:n}=e,o=d(e,["tabId","iconUrl"]);const a=(0,l.useTabMeta)(r);let u=null==a?void 0:a.iconUrl;return n&&(u=n),t(i).createElement(k,Object.assign({icon:u?t(i).createElement(S,{showError:o.showError,src:u,fallback:t(i).createElement(c.IconUnknownOrigin,null),loader:t(i).createElement(C,null)}):t(i).createElement(C,null),primaryText:null==a?void 0:a.title},o))}})),o.register("eWzmJ",(function(t,r){e(t.exports,"useTabMeta",(function(){return l}));var n=o("lofhi"),i=o("gcdBN"),a=o("k5DTG");const l=e=>{var t,r;const{value:o}=(0,a.useTab)(e),{value:l}=(0,n.default)((()=>(0,i.getTabMarkupMeta)(e)),[e]);return{iconUrl:null!==(t=null==l?void 0:l.iconUrl)&&void 0!==t?t:null==o?void 0:o.favIconUrl,title:null!==(r=null==l?void 0:l.title)&&void 0!==r?r:null==o?void 0:o.title}}})),o.register("k5DTG",(function(t,r){e(t.exports,"useTab",(function(){return a}));var n=o("lofhi"),i=o("hulLf");const a=e=>(0,n.default)((()=>i.browser.tabs.get(e)),[e])})),o.register("91Dw6",(function(t,r){e(t.exports,"WARNING_COLOR",(function(){return n})),e(t.exports,"DANGER_COLOR",(function(){return i})),e(t.exports,"ERROR_COLOR",(function(){return o}));const n="#FFDC62",i="#EB3742",o="#eb3742"})),o.register("izu1Y",(function(r,n){e(r.exports,"PImage",(function(){return s}),(function(e){return s=e}));var i=o("29o0l"),a=o("3YDVy"),l=o("gkfw3"),u=o("hiI91"),c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r};const s=e=>{var{src:r,fallback:n,loader:o,onLoad:l,onError:u,loaderEnabled:s}=e,d=c(e,["src","fallback","loader","onLoad","onError","loaderEnabled"]);const[m,p]=(0,i.useState)("init"),[g,h]=(0,i.useState)(!1),y=(0,i.useMemo)((()=>function(e,t,r){if(e)return e.startsWith("data://")?e:"string"==typeof t||"string"==typeof r?(0,a.getImageThroughProxy)(e):t&&r?(0,a.getScaledImageURIExt)(e,t,r):t?(0,a.getScaledImageURI)(e,"width",t):r?(0,a.getScaledImageURI)(e,"height",r):(0,a.getImageThroughProxy)(e)}(r,d.width,d.height)),[d.height,d.width,r]),x=(0,i.useMemo)((()=>g?r:y),[r,y,g]),v=(0,i.useCallback)((e=>{g?(p("error"),null==u||u(e)):(p("retrying"),h(!0))}),[g,p,u,h]);return"error"!==m&&r?t(i).createElement(t(i).Fragment,null,t(i).createElement("img",Object.assign({src:x,onLoad:l,onError:v},d)),"loading"===m&&s&&t(i).createElement(t(i).Fragment,null,o||t(i).createElement(f,null))):t(i).createElement(t(i).Fragment,null,null!=n?n:null)},f=(0,l.default)(u.SkeletonLoader)`
  width: 100%;
  height: 100%;
`})),o.register("hiI91",(function(t,r){e(t.exports,"SkeletonLoader",(function(){return a}));var n=o("gkfw3");const i=n.keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`,a=n.default.div`
  display: flex;
  aspect-ratio: ${({aspectRatio:e})=>e};
  flex-direction: ${({flexDirection:e})=>e};
  flex-wrap: ${({flexWrap:e})=>e};
  align-items: ${({align:e})=>e};
  justify-content: ${({justify:e})=>e};
  width: ${({width:e})=>e};
  height: ${({height:e})=>e};
  margin: ${({margin:e})=>e};
  margin-bottom: ${({marginBottom:e})=>e};
  padding: ${({padding:e})=>e};
  border-radius: ${({borderRadius:e})=>e};
  background-color: ${e=>e.backgroundColor||e.theme.skeletonLight};
  animation: ${i} 2s ease-in-out infinite;
`}))}();
//# sourceMappingURL=ConnectHardwareMultichainFlow.5e6fd398.js.map
define=__define;})(window.define);