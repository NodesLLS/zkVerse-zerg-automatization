(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,l){Object.defineProperty(e,t,{get:n,set:l,enumerable:!0,configurable:!0})}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire1d24;n.register("cIkYg",(function(l,a){var r;r=l.exports,Object.defineProperty(r,"__esModule",{value:!0,configurable:!0}),t(l.exports,"default",(function(){return b}));var i=n("3ljHn"),o=n("kram9"),s=n("29o0l"),u=n("iQL9s"),d=n("75q0e"),c=n("hiI91"),p=n("gX5Te"),m=n("5sf7W");const g=()=>{const{isLoadingInitialAssets:t}=(()=>{var e,t,n;const[l]=(0,u.useSearchParams)(),a=null!==(e=l.get("sellFungible"))&&void 0!==e?e:void 0,r=null!==(t=l.get("sellAmount"))&&void 0!==t?t:void 0,d=null!==(n=l.get("buyFungible"))&&void 0!==n?n:void 0,{data:[c,m,g]}=(0,i.useFeatureFlags)(["enable-bridge-pairs","enable-next-jupiter-client","enable-native-bridge-pairs"]),b=(0,o.useSwapperStore)((e=>e.resetSwapper));p.hooks.useSubscribeSwapQuoteToQueries({enableBridgePairs:c,skipInitialBuyFungible:!0,enableNextJupiterClient:m}),p.hooks.useSubscribeGasEstimation();const{isLoading:f}=p.hooks.useInitialAssets({paramsSellFungible:a,paramsSellAmount:r,paramsBuyFungible:d,enableBridgePairs:c,enableNextJupiterClient:m,enableNativeBridgePairs:g});return(0,s.useLayoutEffect)((()=>b),[b]),{isLoadingInitialAssets:f}})();return t?e(s).createElement(e(s).Fragment,null,e(s).createElement(c.SkeletonLoader,{height:"120px",borderRadius:"8px 8px 0 0"}),e(s).createElement(d.ItemSeparator,{gap:1}),e(s).createElement(c.SkeletonLoader,{height:"120px",borderRadius:"0 0 8px 8px"})):e(s).createElement(m.default,null)};var b=()=>e(s).createElement(g,null)})),n.register("5sf7W",(function(l,a){t(l.exports,"default",(function(){return p}));var r=n("kram9"),i=n("29o0l"),o=n("aWXnn"),s=n("4eDFx"),u=n("fD39c"),d=n("eV4dh"),c=n("6qYpc");var p=()=>{const{multichainQuoteResponse:t,hasNoRoutes:n}=(0,r.useMultichainQuote)();return e(i).createElement(c.SwapWrapper,null,e(i).createElement(o.Column,{justify:"space-between",flex:1},e(i).createElement(o.Column,{align:"normal"},e(i).createElement(s.SwapSellAssetCard,null),e(i).createElement(s.SwapBuyAssetCard,null),t||n?e(i).createElement(u.SwapInfoCard,null):null),e(i).createElement(o.Column,null,t?e(i).createElement(d.SwapReviewButton,null):null)))}})),n.register("4eDFx",(function(l,a){t(l.exports,"SwapSellAssetCard",(function(){return h})),t(l.exports,"SwapBuyAssetCard",(function(){return E}));var r=n("3ljHn"),i=n("43063"),o=n("29o0l"),s=n("gkfw3"),u=n("6UMd8"),d=n("qppYH"),c=n("j81qC"),p=n("27SDj"),m=n("brWcm"),g=n("gX5Te"),b=n("4ti1J");const f=e(o).memo((({onClick:t})=>e(o).createElement(C,null,e(o).createElement(T,{onClick:t},e(o).createElement(c.IconArrowDownSquare,{fill:"#000000"}))))),h=()=>{const t=(()=>{const{t:e}=(0,i.useTranslation)(),{data:[t,n,l]}=(0,r.useFeatureFlags)(["enable-bridge-pairs","enable-next-jupiter-client","enable-native-bridge-pairs"]),a=g.hooks.useSwapSellAssetProps({enableBridgePairs:t,enableNextJupiterClient:n,enableNativeBridgePairs:l,isBalanceHidden:!1}),{showSwapSellAssetSelectModalMultichain:o}=(0,m.useLegacyModals)();return Object.assign(Object.assign({},a),{onSellAssetClicked:o,t:e})})();return e(o).createElement(x,Object.assign({},t))},x=e(o).memo((({assetButtonTitle:t,decimals:n,formattedMaxSellAmount:l,sellFungible:a,notEnoughAssets:r,hasMinimumSellAmount:i,uiSellAmount:s,onSellAssetClicked:u,setMaxSellAmount:p,updateSellAmount:m})=>{const{chain:g,logoUri:f,symbol:h,tokenAddress:x}=a.data;return e(o).createElement(v,{roundedTop:!0},e(o).createElement(F,{onClick:u},e(o).createElement(d.EcosystemImage,{image:{type:"fungible",src:f,fallback:h||x},size:44,tokenType:a.type,chainMeta:g}),e(o).createElement(I,null,e(o).createElement(y,null,a.data.name),e(o).createElement(A,null,a.data.symbol)),e(o).createElement(c.IconChevronDownThin,{fill:"#999999"})),e(o).createElement(M,null,e(o).createElement(b.SwapperInput,{dropdownTestID:"swap-sell-asset-dropdown",assetButtonTitle:t,decimals:n,disabled:!1,hasWarning:r||!i,fungible:a,isLoadingAmount:!1,isLoadingAssets:!1,onClick:u,onUserInput:m,value:s,maxSellAmount:l,setMaxSellAmount:p,fontSize:28})))})),w=e(o).memo((({t:t,assetButtonTitle:n,buyAmount:l,decimals:a,buyFungible:r,isFetchingQuote:i,onBuyAssetClicked:s,onSwitchTokens:u,currencyValue:p})=>{if(!r)return e(o).createElement(k,{t:t,onClick:s});const{chain:m,logoUri:g,symbol:h,tokenAddress:x}=r.data;return e(o).createElement(e(o).Fragment,null,e(o).createElement(f,{onClick:u}),e(o).createElement(v,{roundedBottom:!0},e(o).createElement(F,{onClick:s},e(o).createElement(d.EcosystemImage,{image:{type:"fungible",src:g,fallback:h||x},size:44,tokenType:r.type,chainMeta:m}),e(o).createElement(I,null,e(o).createElement(y,null,r.data.name),e(o).createElement(A,null,r.data.symbol)),e(o).createElement(c.IconChevronDownThin,{fill:"#999999"})),e(o).createElement(M,null,e(o).createElement(b.SwapperInput,{dropdownTestID:"swap-buy-asset-dropdown",assetButtonTitle:n,decimals:a,disabled:!0,hasWarning:!1,fungible:r,isLoadingAmount:i,isLoadingAssets:!1,onClick:s,onUserInput:()=>{},value:l,currencyValue:p,fontSize:28}))))})),E=()=>{const t=(()=>{const{t:e}=(0,i.useTranslation)(),{showSwapBuyAssetSelectModalMultichain:t}=(0,m.useLegacyModals)(),n=(0,o.useCallback)((()=>{t()}),[t]),l=g.hooks.useSwapBuyAssetProps();return Object.assign(Object.assign({},l),{onBuyAssetClicked:n,t:e})})();return e(o).createElement(w,Object.assign({},t))},k=({t:t,onClick:n})=>e(o).createElement(e(o).Fragment,null,e(o).createElement(f,null),e(o).createElement(S,{onClick:n},e(o).createElement(F,null,e(o).createElement(B,null,e(o).createElement(c.IconPlusThin,{width:20})),e(o).createElement(I,null,e(o).createElement(A,{size:16,weight:600},t("swapSelectToken")))))),v=s.default.div`
  background: #2a2a2a;
  border-top-right-radius: ${e=>e.roundedTop?8:0}px;
  border-top-left-radius: ${e=>e.roundedTop?8:0}px;
  border-bottom-right-radius: ${e=>e.roundedBottom?8:0}px;
  border-bottom-left-radius: ${e=>e.roundedBottom?8:0}px;
  padding: 8px;
`,S=(0,s.default)(v).attrs({roundedBottom:!0})`
  cursor: pointer;
`,y=(0,s.default)(p.Text).attrs({size:16,color:"#FFF",weight:600,lineHeight:19,textAlign:"left"})``,A=(0,s.default)(p.Text).attrs((e=>({size:e.size||14,color:"#777",weight:e.weight||400,lineHeight:17,textAlign:"left"})))``,C=s.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 1px;
`,T=(0,s.default)(u.Circle).attrs({color:"#AB9FF2",diameter:32})`
  z-index: 0;
  cursor: pointer;
  &:hover {
    background: #e2dffe;
  }
  margin-top: -16px;
  margin-bottom: -16px;
`,B=(0,s.default)(u.Circle).attrs({color:"#181818",diameter:44})``,F=s.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #333333;
  }
  padding: 8px;
  border-radius: 8px;
`,I=s.default.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  width: 100%;
`,M=s.default.div`
  padding: 0 0 8px 8px;
`})),n.register("4ti1J",(function(l,a){t(l.exports,"SwapperInput",(function(){return m}));var r=n("43063"),i=n("29o0l"),o=n("gkfw3"),s=n("kGh2H"),u=n("hiI91"),d=n("27SDj");const c=o.default.div`
  display: flex;
  align-items: center;
  height: 36px;
  input {
    font-size: ${e=>{var t;return null!==(t=e.fontSize)&&void 0!==t?t:34}}px;
    line-height: 1;
    font-weight: 600;
    padding: 0;
    background: none;
  }
`,p=o.default.div`
  width: 100%;
  margin-top: 11px;
  margin-bottom: 10px;
`,m=({decimals:t,disabled:n,hasWarning:l,isLoadingAmount:a,value:o,name:m="amount","aria-labelledby":b,"aria-label":f,onUserInput:h,maxSellAmount:x,setMaxSellAmount:w,currencyValue:E,fontSize:k})=>{const{t:v}=(0,r.useTranslation)();return e(i).createElement(c,{hasWarning:l,fontSize:k},a?e(i).createElement(p,null,e(i).createElement(u.SkeletonLoader,{width:"100px",height:"20px",backgroundColor:"#434343",borderRadius:"10px"})):e(i).createElement(s.NumericalInput,{"aria-labelledby":b,"aria-label":f,name:m,border:"0",placeholder:"0",warning:l,value:o,decimalLimit:t,disabled:n,onUserInput:h}),x&&void 0!==w&&e(i).createElement(g,{onClick:w},v("maxInputMax")),a?e(i).createElement(u.SkeletonLoader,{width:"50px",height:"12px",backgroundColor:"#434343",borderRadius:"10px"}):E?e(i).createElement(d.Text,{size:16,color:"#777"},E):void 0)},g=o.default.div`
  color: #ab9ff2;
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
  cursor: pointer;
  margin-left: 5px;
  border-radius: 8px;
  padding: 8px;
  &:hover {
    background-color: #333333;
  }
`})),n.register("eV4dh",(function(l,a){t(l.exports,"SwapReviewButton",(function(){return g}));var r=n("43063"),i=n("kram9"),o=n("29o0l"),s=n("hFkH3"),u=n("gX5Te"),d=n("feAoQ");const c=()=>{const{t:t}=(0,r.useTranslation)();return e(o).createElement(s.Button,{type:"submit",theme:"default",disabled:!0},t("swapFlowActionButtonText"))},p=()=>{const{disabled:t,theme:n,title:l,onClick:a}=m();return e(o).createElement(s.Button,{type:"submit",theme:n,disabled:t,onClick:a},l)},m=()=>{const{t:e}=(0,r.useTranslation)(),{hasEnoughAssets:t,hasNoRoutes:n,canSwap:l,hasNoFundsForFees:a,sourceNativeToken:s}=u.hooks.useSwapReviewButtonProps(),c=(0,i.useSwapperStore)((e=>e.setQuoteFetchIntervalToggle)),{handleShowModalVisibility:p}=(0,d.useModals)(),m=(0,o.useCallback)((()=>{a?p("insufficientBalance",{networkId:s.networkId,token:{balance:s.balance,required:s.required}}):(c(!1),p("swapReview"))}),[a,p,s.networkId,s.balance,s.required,c]);return l?{disabled:!1,theme:"primary",title:e("swapFlowActionButtonText"),onClick:m}:t?n?{disabled:!0,theme:"default",title:e("swapNoQuotesFound"),onClick:m}:{disabled:!0,theme:"default",title:e("swapFlowActionButtonText"),onClick:m}:{disabled:!0,theme:"warning",title:e("sendFormErrorInsufficientBalance"),onClick:m}},g=()=>{const{multichainQuoteResponse:t}=(0,i.useMultichainQuote)();return t?e(o).createElement(p,null):e(o).createElement(c,null)}})),n.register("6qYpc",(function(l,a){t(l.exports,"SwapWrapper",(function(){return p}));var r=n("iOvk1"),i=n("43063"),o=n("29o0l"),s=n("gkfw3"),u=n("gX5Te"),d=n("edvyb");const c=s.default.div`
  display: flex;
  flex: 1;
  padding-bottom: 16px;
  margin-bottom: -16px; // fix extension padding issue when scrollable or not
`,p=e(o).memo((({children:t})=>{const n=u.hooks.useSelectedNetworks().every((e=>r.Chains.isMainnetNetworkID(e))),{t:l}=(0,i.useTranslation)(),a=(0,o.useMemo)((()=>({availableOnlyOnMainnet:l("swapAvailableOnMainnet")})),[l]);return n?e(o).createElement(c,null,t):e(o).createElement(d.SwapNotAvailableWrapper,{message:a.availableOnlyOnMainnet,swapDisabled:!0},t)}))})),n.register("edvyb",(function(l,a){t(l.exports,"SwapNotAvailableWrapper",(function(){return g}));var r=n("29o0l"),i=n("hxhxc"),o=n("gkfw3"),s=n("27SDj");const u=o.default.div`
  overflow-y: "scroll";
  padding-top: 16px;
`,d=o.default.fieldset.attrs({disabled:!0})`
  pointer-events: none;
  user-select: none;
`,c=o.default.div`
  position: absolute;
  z-index: 1;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: ${(0,i.hexToRGB)("#222222",.75)};
`,p=o.default.div`
  background-color: ${(0,i.hexToRGB)("#E5A221",.7)};
  padding: 12px 15px;
  position: absolute;
  /* TODO: change 15px to 16px and create a screen padding constant like on mobile */
  top: -15px;
  left: -15px;
  right: 15px;
  width: calc(100% + 2 * 15px);
`,m=(0,o.default)(s.Text).attrs({size:14,lineHeight:19,weight:500,color:"#fff",textAlign:"left"})``,g=({message:t,swapDisabled:n=!0,children:l})=>n?e(r).createElement(e(r).Fragment,null,e(r).createElement(c,{"data-testid":"disable-overlay"},e(r).createElement(p,null,e(r).createElement(m,null,t))),e(r).createElement(d,{"data-testid":"disable-wrapper"},l)):e(r).createElement(u,null,e(r).createElement(p,null,e(r).createElement(m,null,t)),e(r).createElement(e(r).Fragment,null,l))}))}();
//# sourceMappingURL=swap-multichain.525718f6.js.map
define=__define;})(window.define);