(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire1d24;n.register("6edoh",(function(a,i){var l;l=a.exports,Object.defineProperty(l,"__esModule",{value:!0,configurable:!0}),t(a.exports,"default",(function(){return z}),(function(e){return z=e}));var o=n("6Tvfa"),r=n("belzv"),s=n("lBuGR"),c=n("gYh0e"),u=n("lMzyG"),d=n("8NH57"),g=n("4y59b"),m=n("fvKRK"),h=n("lDSNw"),p=n("5jGDu"),f=n("cyeOH"),b=n("44I6u"),x=n("bKtYH"),k=n("6ha3o"),y=n("aXzxc"),v=n("eQcMe"),w=n("7J3aJ"),E=n("gMNJN"),S=n("2LZGp"),T=n("1j4wJ"),A=n("h5kyv"),M=n("1eIoy"),B=n("1vuOd"),D=n("iVQVK"),C=n("7agg5"),I=n("lyHWs"),F=function(e,t,n,a){return new(n||(n=Promise))((function(i,l){function o(e){try{s(a.next(e))}catch(e){l(e)}}function r(e){try{s(a.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}s((a=a.apply(e,t||[])).next())}))};const L=e(h).memo((({fungibles:t,isMainnet:n,onMouseEnter:a})=>{var i;const{t:l}=(0,u.useTranslation)(),{pushDetailView:o}=(0,k.useDetailViews)(),s=(0,h.useRef)(document.getElementById("tab-content"));(0,h.useEffect)((()=>{const e=document.getElementById("tab-content");e&&(s.current=e)}),[]);const c=(0,h.useCallback)((({networkID:t,chainName:n,fungibleKey:a,name:i,symbol:l,tokenAddress:s,type:c,walletAddress:u})=>{A.analytics.capture("assetDetailClick",{asset:{type:"fungible",chain:n,isNativeOfType:n,address:s},data:{networkId:t,chainId:r.Chains.getChainID(t)}}),o(e(h).createElement(M.FungibleDetail,{networkID:t,chainName:n,name:i,symbol:l,fungibleKey:a,tokenAddress:s,type:c,walletAddress:u}))}),[o]),d=(0,h.useCallback)((({key:i,index:o,style:r})=>{const s=Math.min(o+1,t.length),u=[];for(let i=o;i<s;i++){const r=t[i],s=r.type,{chain:d,name:g,symbol:m,key:p,tokenAddress:f,walletAddress:b}=r.data,x=null!=g?g:l("assetDetailUnknownToken");u.push(e(h).createElement(B.FungibleTokenRow,Object.assign({},(0,B.fungibleToProps)(r),{key:`${p}-${o}`,onClick:()=>c({networkID:d.id,chainName:d.name,fungibleKey:p,name:x,symbol:m,tokenAddress:f,type:s,walletAddress:b}),onMouseEnter:a,showBalance:!0,showCurrencyValues:n})))}return e(h).createElement("div",{key:i,style:r},u)}),[t,n,c,a,l]);return e(h).createElement(p.WindowScroller,{scrollElement:null!==(i=s.current)&&void 0!==i?i:void 0},(({height:n=0,isScrolling:a,registerChild:i,scrollTop:l})=>e(h).createElement(p.AutoSizer,{disableHeight:!0,style:{width:"100%"}},(({width:o})=>e(h).createElement("div",{ref:i},e(h).createElement(p.List,{autoHeight:!0,width:o,height:n,scrollTop:l,isScrolling:a,rowCount:t.length,rowHeight:B.FUNGIBLE_TOKEN_ROW_HEIGHT+10,rowRenderer:d}))))))})),N=(0,g.toMilliseconds)({seconds:5}),P=(0,g.toMilliseconds)({seconds:10});var z=()=>{const{data:t,isHidingAllFungibles:n,isLoading:a,isErrorTokens:i,refetch:l,isActionBannersAvailable:r,showHelloBitcoinModal:g}=(()=>{const e=(0,m.useQueryClient)(),{showDepositListModal:t,showFungibleVisibilityModal:n,showBuyFungibleSelectionModal:a,showSendFungibleSelectionModal:i}=(0,y.useLegacyModals)(),{handleShowModalVisibility:l,handleHideModalVisibility:r}=(0,S.useModals)(),{data:[g,p]}=(0,s.useFeatureFlags)(["enable-action-banners","enable-bitcoin"]),{isOpen:f}=(0,v.useMenu)(),{isOpen:b}=(0,w.useSettingsMenu)(),{isBitcoinEnabled:x}=E.hooks.useEnabledChainsInfo(),{data:k,isSuccess:A}=E.hooks.useHasSeenInterstitial(d.InterstitialFeature.HelloBitcoin),M=!f&&!b&&p&&x&&A&&!k,{t:B}=(0,u.useTranslation)(),D=(0,h.useMemo)((()=>({manageTokenList:B("homeManageTokenList"),deposit:B("commandDeposit"),send:B("commandSend"),buy:B("commandBuy"),errorTitle:B("homeErrorTitle"),errorDescription:B("homeErrorDescription"),errorButton:B("homeErrorButtonText")})),[B]);E.hooks.useHomeViewState();const{data:C}=E.hooks.useSelectedMultiChainAccount(),{accountBalance:I,accountId:L}=(0,h.useMemo)((()=>{var e,t;return{accountBalance:null===(e=null==C?void 0:C.balance)||void 0===e?void 0:e.value,accountId:null!==(t=null==C?void 0:C.identifier)&&void 0!==t?t:""}}),[C]),z=!E.hooks.useIsTestnetMode(),H=(0,c.useFungiblesStore)((e=>e.resetSendSlice));(0,h.useEffect)((function(){L&&H()}),[L,H]);const{fungibles:R,portfolio:V,isHidingAllFungibles:$,isLoadingHiddenMints:O,isLoadingTokens:j,isLoadingPrices:W,isErrorTokens:U,refetch:G}=E.hooks.useFungibles({useTokenQueryOptions:{staleTime:N,refetchInterval:P}}),{mutate:Z}=E.hooks.useSetMultiChainAccountBalance();(0,o.useSetAccountBalanceEffect)({accountBalance:I,accountId:L,value:V.value,setAccountBalance:Z});const _=E.hooks.useSelectedNetworks();(0,T.useWalletBalanceAnalytics)(R,_,L);const Q=(0,h.useCallback)((()=>F(void 0,void 0,void 0,(function*(){return yield(0,c.prefetchSPLTokenMap)(e)}))),[e]);return{data:(0,h.useMemo)((()=>({fungibles:R,earnings:V.earnings,value:V.value,isMainnet:z,translations:D,showDepositListModal:t,showBuyFungibleSelectionModal:a,showSendFungibleSelectionModal:i,showFungibleVisibilityModal:n,handlePrefetchSPLTokenMap:Q,handleShowModalVisibility:l,handleHideModalVisibility:r})),[R,V,n,D,z,a,t,i,Q,l,r]),isHidingAllFungibles:$,isLoading:O||j||W,isErrorTokens:U,refetch:G,isActionBannersAvailable:g,showHelloBitcoinModal:M}})(),{fungibles:p,translations:k,isMainnet:A,earnings:M,value:B,showDepositListModal:z,showBuyFungibleSelectionModal:H,showSendFungibleSelectionModal:R,handlePrefetchSPLTokenMap:V,handleShowModalVisibility:$}=t,{manageTokenList:O,deposit:j,send:W,buy:U,errorTitle:G,errorDescription:Z,errorButton:_}=k,Q=p.length>0;return(0,h.useEffect)((()=>{g&&$("helloBitcoin")}),[$,g]),e(h).createElement(b.Column,{align:"center"},e(h).createElement(D.Header,{earnings:M,value:B,buyButtonText:U,depositButtonText:j,hasFungibles:Q,isErrorTokens:i,isLoading:a,isHidingAllFungibles:n,sendButtonText:W,showDollarValues:A,prefetchSPLTokenMap:V,showSendFungibleSelectionModal:R,showDepositListModal:z,showBuyFungibleSelectionModal:H}),r&&e(h).createElement(f.ActionBanners,null),a?[1,2,3].map((t=>e(h).createElement(x.RowSkeletonLoader,{key:`fungible-token-row-loader-${t}`}))):Q?e(h).createElement(L,{fungibles:p,isMainnet:A,onMouseEnter:V}):n?null:e(h).createElement(C.HomeError,{title:G,description:Z,buttonText:_,refetch:l}),a?null:Q||n?e(h).createElement(I.ManageTokenListButton,{buttonText:O,onClick:()=>$("fungibleVisibility")}):null)}})),n.register("cyeOH",(function(a,i){t(a.exports,"ActionBanners",(function(){return w}));var l=n("8NH57"),o=n("lDSNw"),r=n("lQxWu"),s=n("cZIbv"),c=n("gMNJN"),u=n("c3wGO"),d=n("d1qx3"),g=n("aanFI"),m=n("3ou76"),h=n("57LGC"),p=n("eayxI");const f=s.default.div`
  height: 0;
  transition: height 0.2s ease-in-out;
  width: 100%;
  ${e=>e.animate?"height: "+(e.shouldCollapse?"100px":"120px"):""}
`,b=s.default.div`
  transition: transform 0.5s ease;
  width: 100%;
`,x=(0,s.default)(m.IconBackground)``,k=s.default.div`
  visibility: ${e=>e.isVisible?"visible":"hidden"};
`,y=s.default.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`,v=e(o).memo((({banners:t,currentIndex:n,hasNextBanner:a,hasPrevBanner:i,onNextBannerClick:l,onPrevBannerClick:r})=>{const s=t.length<=1;return e(o).createElement(f,{animate:t.length>0,shouldCollapse:s},e(o).createElement(b,null,e(o).createElement(p.ActionBannerList,{banners:t,currentIndex:n}),!s&&e(o).createElement(y,null,e(o).createElement(k,{isVisible:i},e(o).createElement(x,{onClick:r},e(o).createElement(g.IconArrowLeftShort,null))),e(o).createElement(h.default,{numOfItems:t.length,currentIndex:n,maxVisible:5}),e(o).createElement(k,{isVisible:a},e(o).createElement(x,{onClick:l},e(o).createElement(g.IconArrowRightShort,null))))))})),w=()=>{const t=(()=>{const{data:t={banners:[]}}=c.hooks.useActionBanners({platform:"extension",appVersion:(0,d.getManifestVersion)()}),{data:n}=c.hooks.useSelectedMultiChainAccountIdentifier(),{banners:a}=t,i=e(r)(n),[s,g]=(0,o.useState)(0),m=(0,o.useCallback)((()=>{g((e=>e+1))}),[]),h=(0,o.useCallback)((()=>{g((e=>e-1))}),[]);return(0,o.useEffect)((()=>{if(a.length&&n)if(i!==n)g(0);else if(s>=a.length)g(a.length-1);else{const e=a[s],t=(0,l.generateActionBannerBaseAnalyticsPayload)(e);u.actionBannerAnalytics.onBannerSeen(t)}}),[s,a,n,i]),(0,o.useMemo)((()=>({banners:a,currentIndex:s,hasNextBanner:s<a.length-1,hasPrevBanner:s>0,onNextBannerClick:m,onPrevBannerClick:h})),[a,s,h,m])})();return e(o).createElement(v,Object.assign({},t))}})),n.register("c3wGO",(function(e,a){t(e.exports,"actionBannerAnalytics",(function(){return o}));var i=n("8NH57"),l=n("h5kyv");const o=new(0,i.ActionBannerAnalytics)(l.analytics)})),n.register("57LGC",(function(a,i){t(a.exports,"default",(function(){return d}));var l=n("lDSNw"),o=n("cZIbv");const r=o.default.div`
  display: flex;
  justify-content: ${e=>e.shouldCenter?"center":"flex-start"};
  align-items: center;
  position: relative;
  overflow: hidden;
  width: ${e=>9*(e.maxVisible-1)+18}px;
`,s=o.default.div`
  align-items: center;
  display: flex;
  ${e=>e.shouldShift&&o.css`
      transform: translateX(calc(-${9}px * ${e.shiftAmount}));
      transition: transform 0.3s ease-in-out;
    `}
`,c=o.default.div`
  align-items: center;
  background-color: #999999;
  border-radius: 95px;
  display: flex;
  height: ${5}px;
  justify-content: center;
  margin: 0 ${2}px;
  min-width: ${5}px;
  transition: all 0.3s ease-in-out;
  ${e=>e.isActive&&o.css`
      min-width: ${14}px;
    `}
  ${e=>e.isSmall&&o.css`
      min-width: 3px;
      margin: 0 ${2}px;
      height: 3px;
    `}
`,u=o.default.div`
  width: ${14}px;
  height: ${5}px;
  border-radius: 95px;
  position: absolute;
  margin: 0 ${2}px;
  background-color: #ab9ff2;
  transition: transform 0.3s ease-in-out;
  ${e=>e.position&&o.css`
      transform: translateX(${9*e.position}px);
    `}
`;var d=({numOfItems:t,currentIndex:n,maxVisible:a=5})=>{const i=t>a&&n>a-3,o=i?n-(a-3):0;return e(l).createElement(r,{shouldCenter:a>t,maxVisible:a},e(l).createElement(s,{shouldShift:i,shiftAmount:o},Array.from({length:t}).map(((t,a)=>{const o=(a===n-2||a===n+2)&&i;return e(l).createElement(c,{key:`pagination-dot-${a}`,isActive:n===a,isSmall:o})})),e(l).createElement(u,{position:n})))}})),n.register("eayxI",(function(a,i){t(a.exports,"ActionBannerList",(function(){return u}));var l=n("lDSNw"),o=n("cZIbv"),r=n("8BRi0");const s=o.default.ul`
  align-items: center;
  display: flex;
  margin-bottom: 8px;
  transition: transform 0.5s ease;
  transform: ${e=>`translateX(${-100*e.currentIndex}%)`};
`,c=o.default.li`
  align-items: center;
  display: flex;
  height: 74px;
  flex: 0 0 100%;
  padding: ${e=>e.isActive?"0":e.isNext||e.isPrevious?"0 6px":"0"};
`,u=({banners:t,currentIndex:n})=>e(l).createElement(s,{currentIndex:n},t.map(((t,a)=>e(l).createElement(c,{key:t.id,isActive:n===a,isNext:n+1===a,isPrevious:n-1===a},e(l).createElement(r.ActionBannerListItem,{banner:t,isActive:n===a})))))})),n.register("8BRi0",(function(a,i){t(a.exports,"ActionBannerListItem",(function(){return E}));var l=n("lMzyG"),o=n("8NH57"),r=n("c1thM"),s=n("lDSNw"),c=n("cZIbv"),u=n("gMNJN"),d=n("jl49C"),g=n("2LZGp"),m=n("c3wGO"),h=n("laYjG"),p=n("aanFI"),f=n("kn91D");const b=(0,c.default)(r.motion.button)`
  background: none;
  background-color: rgba(60, 49, 91, 0.4);
  border: 1px solid rgb(60, 49, 91);
  border-radius: 8px;
  cursor: pointer;
  height: ${e=>e.isActive?74:.9*74}px; /* 0.9 is taken from parallaxAdjacentItemScale from the carousel on mobile */
  padding: 10px 12px;
  width: 100%;

  &:hover {
    background-color: rgba(60, 49, 91, 0.6);
  }
`,x=(0,c.default)(r.motion.div)`
  align-items: center;
  display: flex;
`,k=c.default.img`
  margin-right: 12px;
  width: 44px;
`,y=(0,c.default)(f.Text).attrs({lineHeight:17,size:14})`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  flex: 1;
  overflow: hidden;
  text-align: left;
`,v=c.default.div`
  position: relative;
  top: -15px;
  right: -3px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  height: 20px;
  justify-content: center;
  width: 20px;
`,w=e(s).memo((({banner:t,isActive:n,onClickBanner:a,onCloseBanner:i})=>e(s).createElement(b,{layout:!0,onClick:a,isActive:n},e(s).createElement(x,{layout:!0},e(s).createElement(k,{src:t.imageUrl}),e(s).createElement(y,{weight:600},t.description),e(s).createElement(v,{onClick:i},e(s).createElement(p.IconClose,{fill:"#ffffff",width:8})))))),E=t=>{const n=(({banner:t,isActive:n})=>{const{t:a}=(0,l.useTranslation)(),i=(0,d.useDeepLink)(),{mutateAsync:r}=u.hooks.useDismissActionBanner(),{handleShowModalVisibility:c,handleHideModalVisibility:p}=(0,g.useModals)(),f=(0,s.useCallback)((n=>{const l=(0,o.generateActionBannerBaseAnalyticsPayload)(t);switch(m.actionBannerAnalytics.onBannerClick(l),t.bannerType){case o.ActionBannerType.DirectLink:{const{destinationType:e,url:a}=t;i(n,{destinationType:e,url:a});break}case o.ActionBannerType.Modal:{const{interstitial:l,destinationType:r,url:u}=t,{title:d,lineItems:g=[],imageUrl:f,primaryButtonText:b=a("commandContinue"),secondaryButtonText:x=a("commandDismiss")}=l,k=(0,o.generateActionBannerInterstitialAnalyticsPayload)(t),y=g.map((e=>({icon:e.imageUrl,subtitle:e.description,title:e.title})));c("interstitial",{bodyTitle:d,details:y,icon:f,onDismiss:()=>{m.actionBannerAnalytics.onInterstitialDismiss(k)},FooterComponent:()=>e(s).createElement(h.ButtonPair,{primaryText:b,secondaryText:x,onPrimaryClicked:()=>{i(n,{destinationType:r,url:u}),m.actionBannerAnalytics.onInterstitialPrimaryClick(k),p("interstitial")},onSecondaryClicked:()=>{m.actionBannerAnalytics.onInterstitialSecondaryClick(k),p("interstitial")}})}),m.actionBannerAnalytics.onInterstitialSeen(k);break}}}),[t,c,p,a,i]),b=(0,s.useCallback)((e=>{e.stopPropagation(),r({actionBannerId:t.id});const n=(0,o.generateActionBannerBaseAnalyticsPayload)(t);m.actionBannerAnalytics.onBannerDismiss(n)}),[t,r]);return(0,s.useMemo)((()=>({isActive:n,banner:t,onClickBanner:f,onCloseBanner:b})),[t,n,f,b])})(t);return e(s).createElement(w,Object.assign({},n))}})),n.register("jl49C",(function(a,i){t(a.exports,"useDeepLink",(function(){return m}));var l=n("8NH57"),o=n("lDSNw"),r=n("lz7nT"),s=n("aXzxc"),c=n("7J3aJ"),u=n("8182A"),d=n("d1qx3"),g=n("lrImj");const m=()=>{const{showSettingsMenu:t}=(0,c.useSettingsMenu)(),{showBuyFungibleSelectionModal:n}=(0,s.useLegacyModals)(),a=(0,r.useNavigate)();return(0,o.useCallback)(((i,r)=>{const{destinationType:s,url:c}=r;switch(s){case l.DeepLinkDestination.ExternalLink:(0,d.openTabAsync)({url:c});break;case l.DeepLinkDestination.Buy:n();break;case l.DeepLinkDestination.Collectibles:a(u.Path.Collectibles);break;case l.DeepLinkDestination.Explore:a(u.Path.Explore);break;case l.DeepLinkDestination.Quests:a(u.Path.Explore,{state:{tab:"quests",date:Date.now()}});break;case l.DeepLinkDestination.Swapper:a(u.Path.Swap);break;case l.DeepLinkDestination.SettingsImportSeedPhrase:(0,d.openTabAsync)({url:"onboarding.html?append=true"});break;case l.DeepLinkDestination.ConnectHardwareWallet:(0,d.openTabAsync)({url:"connect_hardware.html"});break;default:{const n=(0,g.getSanityComponentMapping)(s);if(!n)return;t(i,e(o).createElement(n,null))}}}),[a,t,n])}})),n.register("lrImj",(function(e,a){t(e.exports,"getSanityComponentMapping",(function(){return o}));var i=n("8NH57"),l=n("i14LG");const o=e=>{if(e===i.DeepLinkDestination.SettingsSecurityAndPrivacy)return l.MultiChainSecurity}})),n.register("1j4wJ",(function(e,a){t(e.exports,"useWalletBalanceAnalytics",(function(){return r}));var i=n("lDSNw"),l=n("iyZMg"),o=n("gMNJN");function r(e,t,n){const a=o.hooks.useIsTestnetMode(),[r,s]=(0,i.useState)(!1);(0,i.useEffect)((()=>{a||s(!1)}),[n,a]),(0,i.useEffect)((()=>{!r&&t.length&&e.length&&!a&&(l.fungibleAnalytics.walletBalance(n,t,e),s(!0))}),[n,t,e,r,a])}})),n.register("iyZMg",(function(e,a){t(e.exports,"fungibleAnalytics",(function(){return o}));var i=n("gYh0e"),l=n("h5kyv");const o=new(0,i.FungibleAnalytics)(l.analytics)})),n.register("1eIoy",(function(a,i){t(a.exports,"FungibleDetail",(function(){return R}),(function(e){return R=e}));var l=n("6Tvfa"),o=n("belzv"),r=n("lBuGR"),s=n("gYh0e"),c=n("5VjGu"),u=n("lMzyG"),d=n("4y59b"),g=n("jqm4V"),m=n("3yHS8"),h=n("lDSNw"),p=n("lz7nT"),f=n("NQvFB"),b=n("HLcoo"),x=n("cZIbv"),k=n("jQk2k"),y=n("aLflh"),v=n("lLIZI"),w=n("aXzxc"),E=n("gMNJN"),S=n("8182A"),T=n("1w6dQ"),A=n("1u2Sj"),M=n("gZAFB"),B=n("f8RXR"),D=n("joWnH"),C=n("e8hzf"),I=n("1QPez"),F=function(e,t,n,a){return new(n||(n=Promise))((function(i,l){function o(e){try{s(a.next(e))}catch(e){l(e)}}function r(e){try{s(a.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}s((a=a.apply(e,t||[])).next())}))};const L=x.default.div`
  margin: 24px 0 0 0;
  width: 100%;
`,N=x.default.div`
  margin: 24px 0 0 0;
  width: 100%;
`,P=x.default.div`
  margin-bottom: 9px;
  width: 100%;
`,z=e=>{const{networkID:t,fungibleKey:n}=e,{data:[a=!1]}=(0,r.useFeatureFlags)(["enable-asset-details"]),{t:i}=(0,u.useTranslation)(),{data:l}=E.hooks.useSelectedMultiChainAccount(),{addresses:c,accountIdentifier:d}=(0,h.useMemo)((()=>{var e,t;return{addresses:null!==(e=null==l?void 0:l.addresses)&&void 0!==e?e:[],accountIdentifier:null!==(t=null==l?void 0:l.identifier)&&void 0!==t?t:""}}),[l]),{fungible:m}=E.hooks.useFungible({key:n}),{fungible:x}=E.hooks.useFungible({key:s.FungibleTokenType.SolanaNative}),k=(null==m?void 0:m.type)===s.FungibleTokenType.SolanaNative,y=void 0!==m?(0,s.parseOwnerAddress)(m):"",v=E.hooks.useFungibleExplorerUrl(m),{explorerName:T,explorerUrl:A}={explorerName:null==v?void 0:v.explorerName,explorerUrl:null==v?void 0:v.explorerUrl},M=(0,h.useMemo)((()=>({viewInExplorer:i("assetDetailViewOnExplorer",{explorer:T}),stakeSolText:i("assetDetailStakeSOL"),unwrapAllText:i("assetDetailUnwrapAll"),unwrappingSOLText:i("assetDetailUnwrappingSOL")})),[T,i]),{showValidatorListModalMultichain:B,hideValidatorListModalMultichain:D}=(0,w.useLegacyModals)(),C=(0,p.useNavigate)(),I=o.Chains.isSolanaNetworkID(t)?(0,b.getClusterBySolanaChainId)(t):"mainnet-beta",{mutateAsync:L}=E.hooks.useUnwrapSOL((0,b.createConnection)(I));return(0,h.useMemo)((()=>{const e=[];if((null==m?void 0:m.type)===s.FungibleTokenType.SPL&&m.data.mintAddress===g.NATIVE_MINT.toBase58()){const t=x,n=c.find(o.isSolanaChainAddress);!!m.data.splTokenAccountPubkey&&void 0!==n&&!!t&&+t.data.amount>f.DEFAULT_FEE.toNumber()&&e.unshift({key:"unwrap-all",label:M.unwrapAllText,onClick:()=>{F(void 0,void 0,void 0,(function*(){yield L({accountIdentifier:d,solanaChainAddress:n,unwrapSOLText:M.unwrappingSOLText}),C(S.Path.Notifications)}))}})}return y&&!a&&e.push({key:"view-in-explorer",label:M.viewInExplorer,onClick:()=>{window.open(A,"_blank")}}),k&&!a&&e.push({key:"stake-sol",label:M.stakeSolText,onClick:()=>B({onClose:D})}),e}),[m,y,k,x,c,M.unwrapAllText,M.unwrappingSOLText,M.viewInExplorer,M.stakeSolText,L,d,C,A,B,D,a])},H=e(h).memo((t=>{var n;const{chainAddress:a,fungible:i,fungibleName:l,actionItems:o,tokenAddress:s,fungibleSymbol:u,fungibleBalance:d,fungiblePrice:g,fungibleTokenType:m,fungiblePermanentDelegate:p,summaryItems:f,canStake:b,showUnwrapBlurEth:x,showDollarValue:E,i18nStrings:S,accounts:M,pageHeader:F,isDeveloperMode:z,developerModeStatus:H,handleShowSendModal:R,handleShowDepositFungibleModal:V,enableAssetDetails:$,walletAddress:O}=t,j=e(h).createElement(e(h).Fragment,null,e(h).createElement(k.PageHeader,{isSticky:!0,items:o.length>0?o:void 0},F),e(h).createElement(P,null,$&&i?e(h).createElement(e(h).Fragment,null,e(h).createElement(D.FungibleSummaryCard,{type:i.type,chain:i.data.chain,logoUri:i.data.logoUri,name:i.data.name,price:i.data.price,priceChange24h:i.data.priceChange24h,symbol:i.data.symbol,tokenAddress:i.data.tokenAddress}),e(h).createElement(T.FungibleCallToAction,{fungible:i,walletAddress:O})):e(h).createElement(A.FungibleDetailHeader,{chainAddress:a,balance:d,symbol:u,mint:s,dollarValue:g,fungibleTokenType:m,showDollarValue:E,sendButtonText:S.sendButtonText,depositButtonText:S.depositButtonText,handleShowSendModal:R,handleShowDepositFungibleModal:V}),b&&e(h).createElement(L,null,e(h).createElement(C.StartEarningSol,null)),x&&i?e(h).createElement(L,null,e(h).createElement(I.ButtonUnwrapFungible,{fungible:i})):null,p&&e(h).createElement(N,null,e(h).createElement(v.WarningDialog,{message:S.permanentDelegateWarning,variant:"warning"})),f.length>0?e(h).createElement(B.FungibleSummary,{name:l,items:f}):null)),W=(0,c.useFetchInfiniteHistoryItems)(M),U=W.isLoading||"loading"===H,{isError:G}=(0,c.useFetchRefreshInfiniteHistoryItems)(M),{showHistoryItemModal:Z,showPendingTransactionModal:_}=(0,w.useLegacyModals)(),{data:[Q=!1]}=(0,r.useFeatureFlags)(["enable-spam-filtering"]);return void 0===i?j:e(h).createElement(y.HistoryList,Object.assign({header:j,dataPages:null===(n=W.data)||void 0===n?void 0:n.pages,isLoading:U,fetchNextPage:W.fetchNextPage,refetch:W.refetch,hasNextPage:W.hasNextPage,isFetchingNextPage:W.isFetchingNextPage,isError:W.isError,isRefreshError:G,isRefreshingConfirmedTxs:!1,isDeveloperMode:z,showHistoryItemModal:Z,showPendingTransactionModal:_},Q?{filter:e=>!(0,c.isSpamTransaction)(e,a?[a]:[])}:{}))})),R=e(h).memo((t=>{const{data:n,loading:a}=(t=>{const{networkID:n,chainName:a,fungibleKey:i,name:g,symbol:p,tokenAddress:f,type:x,walletAddress:k}=t,y=(0,s.isNative)(x),{data:[v=!1]}=(0,r.useFeatureFlags)(["enable-asset-details"]),{showSendFungibleFormModal:S,showDepositFungibleModal:T,hideDepositFungibleModal:A}=(0,w.useLegacyModals)(),{data:M,isLoading:B}=E.hooks.useSelectedMultiChainAccount(),{data:D=l.DEFAULT_DEVELOPER_MODE,status:C}=E.hooks.useDeveloperMode(),I=D.isDeveloperMode,{fungibles:F,isLoadingTokens:L,refetch:N}=E.hooks.useFungibles(),P=(0,s.useFungiblesStore)((e=>e.setSendFungibleKey)),{fungible:H,fungibleName:R,fungibleSymbol:V,fungibleBalance:$,fungiblePrice:O,fungibleTokenType:j,fungiblePermanentDelegate:W}=(0,h.useMemo)((()=>{var t,n,a;const l=F.find((e=>e.data.key===i)),o=(0,s.getPermananetDelegateAddress)(l);return{fungible:l,fungibleName:null!==(t=null==l?void 0:l.data.name)&&void 0!==t?t:g,fungibleSymbol:null!==(n=null==l?void 0:l.data.symbol)&&void 0!==n?n:p,fungibleBalance:null!==(a=null==l?void 0:l.data.balance)&&void 0!==a?a:new(e(m))(0),fungiblePrice:null==l?void 0:l.data.usd,fungibleTokenType:null==l?void 0:l.type,fungiblePermanentDelegate:o}}),[i,F,g,p]),{data:U}=E.hooks.useSelectedChainAddress({networkID:n,address:null==H?void 0:H.data.walletAddress}),{t:G}=(0,u.useTranslation)(),Z=(0,h.useMemo)((()=>({recentActivityText:G("assetDetailRecentActivity"),sendButtonText:G("commandSend"),depositButtonText:G("commandDeposit"),onChainName:G("assetDetailOnChainNameInterpolated",{chain:a}),permanentDelegateWarning:G("assetDetailPermanentDelegateWarning",{delegate:W})})),[G,a,W]),_=y?R:`${R} ${Z.onChainName}`,Q=(0,d.truncateString)(_,20);let K;switch(null==H?void 0:H.type){case s.FungibleTokenType.BRC20:K=H.data.firstCreatedInscriptionId;break;case s.FungibleTokenType.ERC20:K=H.data.contractAddress;break;case s.FungibleTokenType.SPL:K=H.data.splTokenAccountPubkey;break;default:K=void 0}const J=(0,h.useMemo)((()=>{const e=U?[U]:[];return(0,c.getAccountsWithFilter)(e,n,K)}),[U,n,K]),q=(null==H?void 0:H.data.tokenAddress)===s.BLUR_ETH_MINT_ADDRESS,X=(0,h.useCallback)((()=>{H&&(P(null==H?void 0:H.data.key),S(H))}),[H,P,S]),Y=(0,h.useCallback)((()=>{var e;T({accountName:null!==(e=null==M?void 0:M.name)&&void 0!==e?e:"",walletAddress:k,address:f,symbol:V,onClose:A,networkID:n})}),[null==M?void 0:M.name,A,f,k,T,V,n]),ee=!o.Chains.isSolanaNetworkID(n)||"mainnet-beta"===(0,b.getClusterBySolanaChainId)(n),{isSolana:te}=(0,h.useMemo)((()=>{const e=F.find((e=>e.data.key===i));return{isSolana:(null==e?void 0:e.type)===s.FungibleTokenType.SolanaNative}}),[i,F]),ne=te,ae=z(t),{summaryItems:ie}=E.hooks.useFungibleDetailViewState(i);return{data:(0,h.useMemo)((()=>({chainAddress:U,fungible:H,tokenAddress:f,fungibleName:R,fungibleSymbol:V,fungibleBalance:$,fungiblePrice:O,fungibleTokenType:j,fungiblePermanentDelegate:W,summaryItems:ie,canStake:ne,showUnwrapBlurEth:q,showDollarValue:ee,i18nStrings:Z,accounts:J,actionItems:ae,pageHeader:Q,isDeveloperMode:I,developerModeStatus:C,handleShowSendModal:X,handleShowDepositFungibleModal:Y,refetch:N,enableAssetDetails:v,walletAddress:k})),[U,H,f,R,V,$,O,j,W,ie,ne,q,ee,Z,J,ae,Q,I,C,X,Y,N,v,k]),loading:B||L}})(t);return a?e(h).createElement(M.FungibleDetailLoader,{depositText:n.i18nStrings.depositButtonText,sendText:n.i18nStrings.sendButtonText}):e(h).createElement(H,Object.assign({},n))}))})),n.register("lLIZI",(function(e,a){t(e.exports,"WarningDialog",(function(){return g}));var i=n("4raQz"),l=n("lDSNw"),o=n("cZIbv"),r=n("aanFI"),s=n("kn91D");const c=o.default.div`
  display: flex;
  background-color: ${e=>e.color};
  padding: 16px;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: ${e=>e.color};
  border-radius: 12px;
  gap: 8px;

  & + & {
    margin-top: 8px;
  }
`,u=o.default.div`
  padding: 3px;
`,d=(0,o.default)(s.Text).attrs({size:14,weight:400,lineHeight:17,textAlign:"left",wordBreak:"break-word"})``,g=({message:e,inverted:t=!1,variant:n="warning"})=>{let a="#2A2A2A",o="#222222",s=l.createElement(r.IconDangerOctagon,{fill:o,width:18,height:18});switch(n){case"warning":a=i.simulations.WARNING_COLOR,t||(s=l.createElement(r.IconDangerTriangle,{fill:"#222222",width:18,height:18}));break;case"danger":a=i.simulations.DANGER_COLOR;break;case"error":a="#2A2A2A",o=i.simulations.ERROR_COLOR;break;default:a=i.simulations.WARNING_COLOR}return l.createElement(c,{color:a},l.createElement(u,null,s),l.createElement(d,{color:o,padding:"4px 0","data-testid":"approval-warning-text"},e))}})),n.register("1w6dQ",(function(a,i){t(a.exports,"FungibleCallToAction",(function(){return y}));var l=n("belzv"),o=n("gYh0e"),r=n("lMzyG"),s=n("4y59b"),c=n("lDSNw"),u=n("lz7nT"),d=n("hjWkM"),g=n("aanFI"),m=n("aXzxc"),h=n("gMNJN"),p=n("8182A");function f({fungible:e,walletAddress:t}){const{data:n}=h.hooks.useSelectedMultiChainAccount(),{showDepositFungibleModal:a,hideDepositFungibleModal:i}=(0,m.useLegacyModals)();return(0,c.useCallback)((()=>{var l;e.data.symbol&&a({accountName:null!==(l=null==n?void 0:n.name)&&void 0!==l?l:"",walletAddress:t,address:e.data.tokenAddress,symbol:e.data.symbol,onClose:i,networkID:e.data.chain.id})}),[null==n?void 0:n.name,i,e,t,a])}function b({fungible:e}){const{showSendFungibleFormModal:t}=(0,m.useLegacyModals)();return(0,c.useCallback)((()=>{o.useFungiblesStore.getState().setSendFungibleKey(e.data.key),t(e)}),[e,t])}function x({fungible:e}){const t=(0,u.useNavigate)();return(0,c.useCallback)((()=>{const n=(0,o.getFungibleCaip19FromFungible)(e),a=(0,l.encodeCaip19)(n);t(`/${p.Path.Swap}?sellFungible=${a}`)}),[e,t])}function k({explorer:e}){return(0,c.useCallback)((()=>{e&&window.open(e.explorerUrl,"_blank")}),[e])}const y=e(c).memo((t=>{const{ctaButtons:n,handleShowSendModal:a,handleReceive:i,handleSwap:l,handleExplorer:u}=function({fungible:t,walletAddress:n}){const{t:a}=(0,r.useTranslation)(),i=h.hooks.useFungibleExplorerUrl(t),l=(0,c.useMemo)((()=>({viewInExplorer:a("assetDetailViewOnExplorer",{explorer:null==i?void 0:i.explorerName}),sendButtonText:a("commandSend"),depositButtonText:a("commandDeposit"),receiveButtonText:a("commandReceive"),stakeButtonText:a("commandStake"),buyButtonText:a("commandBuy"),swapButtonText:a("commandSwap")})),[a,i]),u=t.type===o.FungibleTokenType.SolanaNative;return{ctaButtons:(0,c.useMemo)((()=>[{text:l.sendButtonText,icon:e(c).createElement(g.IconArrowUpRight,{height:20,fill:"currentColor"}),value:"send"},{text:l.swapButtonText,icon:e(c).createElement(g.IconArrowDouble,{height:20,fill:"currentColor"}),value:"swap"},u&&{text:l.stakeButtonText,icon:e(c).createElement(g.IconShortcutsStake2,{height:20,fill:"currentColor"}),value:"stake"},{text:l.receiveButtonText,icon:e(c).createElement(g.IconArrowDownRight,{height:20,fill:"currentColor"}),value:"receive"},{text:l.buyButtonText,icon:e(c).createElement(g.IconDollar,{height:20,fill:"currentColor"}),value:"buy"},{text:l.viewInExplorer,icon:e(c).createElement(g.IconExternal,{height:20,fill:"currentColor"}),value:"explorer"}].filter(s.filterBoolean)),[u,l]),handleShowSendModal:b({fungible:t}),handleSwap:x({fungible:t}),handleReceive:f({fungible:t,walletAddress:n}),handleExplorer:k({explorer:i})}}(t);return e(c).createElement(d.CTABar,{buttons:n,uiContext:{name:"fungibleDetail"},onClick:e=>{switch(e){case"send":return a();case"swap":return l();case"explorer":return u();case"receive":return i();case"stake":case"buy":break;default:throw(0,s.assertNever)(e)}}})}))})),n.register("hjWkM",(function(a,i){t(a.exports,"CTABar",(function(){return p}));var l=n("lDSNw"),o=n("cZIbv"),r=n("2LZGp"),s=n("iyZMg"),c=n("aanFI");const u=o.default.div`
  margin: 8px 0;
  display: grid;
  grid-gap: 8px;
  grid-template-columns: ${e=>`repeat(${e.buttonCount}, minmax(0, 1fr));`};
`,d=o.default.button`
  border: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 16px;
  gap: 4px;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  cursor: pointer;

  &:disabled {
    cursor: default;
  }
`,g=o.default.div`
  height: 20px;
  overflow: hidden;
`,m=(0,o.default)(d)`
  background: #ab9ff2;
  * {
    color: #222222;
  }
  &:hover:enabled {
    background: #e2dffe;
  }

  svg {
    fill: #222222;
  }
`,h=(0,o.default)(d)`
  background: #333333;
  * {
    color: #ffffff;
  }
  &:hover:enabled {
    background: #444444;
  }

  svg {
    fill: #ffffff;
  }
`;function p({buttons:t,onClick:n,maxButtons:a=4,uiContext:i}){const o=t.length>a?t.slice(a-1):[],d=o.length>0?t.slice(0,a-1):t,p=t.length,{handleShowModalVisibility:f,handleHideModalVisibility:b}=(0,r.useModals)();return e(l).createElement(u,{buttonCount:Math.min(t.length,a)},d.map(((t,r)=>e(l).createElement(m,{key:t.value,type:"button",onClick:()=>{s.fungibleAnalytics.ctaBarTrackPrimaryButtonsClick({uiContext:i,index:r,position:"primary",value:t.value,maxButtons:a,totalButtons:p,primaryButtons:d,moreButtons:o}),n(t.value)}},e(l).createElement(g,null,t.icon),e(l).createElement("span",null,t.text)))),o.length>0?e(l).createElement(h,{type:"button",onClick:()=>{s.fungibleAnalytics.ctaBarTrackMoreButtonClick({uiContext:i,maxButtons:a,totalButtons:p}),f("callToActionSheet",{buttons:o,onClick:(e,t)=>{b("callToActionSheet"),s.fungibleAnalytics.ctaBarTrackPrimaryButtonsClick({uiContext:i,index:t,position:"more",value:e,maxButtons:a,totalButtons:p,primaryButtons:d,moreButtons:o}),n(e)}})}},e(l).createElement(c.IconMore,{height:20}),e(l).createElement("span",null,"More")):null)}})),n.register("1u2Sj",(function(a,i){t(a.exports,"FungibleDetailHeader",(function(){return k}));var l=n("gYh0e"),o=n("lDSNw"),r=n("gmVmN"),s=n("cZIbv"),c=n("laYjG"),u=n("44I6u"),d=n("goqEN"),g=n("kn91D"),m=n("gMNJN"),h=n("h5kyv");const p=(0,s.default)(u.Column).attrs({align:"center"})`
  background: #2a2a2a;
  padding: 16px 14px;
  border-radius: 6px;
`,f=(0,s.default)(d.ShrinkingText)`
  margin-bottom: 7px;
`,b=(0,s.default)(g.Text).attrs({size:16,color:"#777777"})`
  margin-bottom: 20px;
`,x=(0,s.default)(c.ButtonPair)`
  width: 100%;
`,k=e(o).memo((t=>{const{mint:n,symbol:a,balance:i,dollarValue:s,fungibleTokenType:u,showDollarValue:d,sendButtonText:g,depositButtonText:k,chainAddress:y,handleShowSendModal:v,handleShowDepositFungibleModal:w}=t,E=n?(0,r.formatAddressShort)(n):void 0,S=`${(0,r.formatTokenAmount)(i)} ${null!=a?a:E}`,T=(0,o.useCallback)((e=>e!==l.FungibleTokenType.BRC20||!(0,h.isFeatureEnabled)("kill-brc20-sends")),[]),A=m.hooks.useCanSendFungible({balance:i,fungibleTokenType:u,chainAddress:y,isSendEnabledForTokenType:T});return e(o).createElement(p,null,e(o).createElement(f,{maxFontSize:38},S),d&&e(o).createElement(b,null,s?(0,r.formatDollarAmount)(s):"–"),e(o).createElement(x,{primaryTheme:A?"primary":"default",primaryText:g,onPrimaryClicked:v,primaryDisabled:!A,secondaryTheme:"primary",secondaryText:k,onSecondaryClicked:w,buttonPairStyle:c.ButtonPairStyle.Small}))}))})),n.register("goqEN",(function(a,i){t(a.exports,"ShrinkingText",(function(){return d}));var l=n("lDSNw"),o=n("cZIbv"),r=n("gw3Qt"),s=n("kn91D");const c=o.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${e=>`${e.fontSize}px`};
  width: 100%;
`,u=(0,o.default)(s.Text)`
  font-size: ${e=>e.fontSize};
  line-height: 120%;
  font-weight: ${e=>e.fontWeight};
`,d=e(l).memo((({children:t,className:n,maxFontSize:a,fontWeight:i=500})=>{const[o,s]=(0,r.useFitText)();return e(l).createElement(c,{className:n,ref:s,fontSize:a},e(l).createElement(u,{fontSize:o,weight:i,noWrap:!0},t))}))})),n.register("gw3Qt",(function(e,a){t(e.exports,"useFitText",(function(){return l}));var i=n("lDSNw");const l=()=>{const e=(0,i.useRef)(null),[t,n]=(0,i.useState)({fontSize:100,fontSizePrev:20,fontSizeMax:100,fontSizeMin:20}),{fontSize:a,fontSizeMax:l,fontSizeMin:o,fontSizePrev:r}=t;return(0,i.useEffect)((()=>{const t=Math.abs(a-r)<=5,i=null!==e.current&&(e.current.scrollHeight>e.current.offsetHeight||e.current.scrollWidth>e.current.offsetWidth),s=a>r;if(t){if(i){n({fontSize:r<a?r:a-(r-a),fontSizeMax:l,fontSizeMin:o,fontSizePrev:r})}return}let c,u=l,d=o;i?(c=s?r-a:o-a,u=Math.min(l,a)):(c=s?l-a:r-a,d=Math.max(o,a)),n({fontSize:a+c/2,fontSizeMax:u,fontSizeMin:d,fontSizePrev:a})}),[a,l,o,r,e]),[`${a}%`,e]}})),n.register("gZAFB",(function(a,i){t(a.exports,"FungibleDetailLoader",(function(){return f}));var l=n("lDSNw"),o=n("cZIbv"),r=n("laYjG"),s=n("44I6u"),c=n("6l2nq"),u=n("hjnIF");const d=[1,2],g=(0,o.default)(c.Row)`
  height: 35px;
`,m=(0,o.default)(s.Column).attrs({align:"center"})`
  background: #2a2a2a;
  padding: 16px 14px;
  border-radius: 6px;
  margin-bottom: 24px;
`,h=o.default.div`
  width: 44px;
  height: 44px;
  margin-right: 10px;
`,p=(0,o.default)(u.SkeletonLoader).attrs({height:"8px",backgroundColor:"#484848",borderRadius:"8px"})``,f=e(l).memo((t=>e(l).createElement(e(l).Fragment,null,e(l).createElement(g,{justify:"center"},e(l).createElement(p,{width:"120px",height:"10px",margin:"0 0 7px 0"})),e(l).createElement(m,null,e(l).createElement(u.SkeletonLoader,{width:"100%",height:"70px",padding:"15px 0 30px 0"},e(l).createElement(s.Column,null,e(l).createElement(c.Row,{justify:"center",margin:"0 auto"},e(l).createElement(p,{width:"120px",height:"10px",margin:"0 0 7px 0"})),e(l).createElement(c.Row,{justify:"center",margin:"0 auto"},e(l).createElement(p,{width:"60px",height:"8px"})))),e(l).createElement(r.ButtonPair,{primaryText:t.sendText,primaryDisabled:!0,primaryTheme:"default",secondaryText:t.depositText,secondaryDisabled:!0,secondaryTheme:"default",buttonPairStyle:r.ButtonPairStyle.Small})),d.map((t=>e(l).createElement(u.SkeletonLoader,{key:`fungible-detail-row-loader-${t}`,align:"center",width:"100%",height:"74px",backgroundColor:"#2D2D2D",borderRadius:"8px",margin:"0 0 10px 0",padding:"10px"},e(l).createElement(h,null,e(l).createElement(u.SkeletonLoader,{width:"44px",height:"44px",backgroundColor:"#434343",borderRadius:"50%"})),e(l).createElement(s.Column,null,e(l).createElement(c.Row,{margin:"0 0 10px",justify:"space-between"},e(l).createElement(p,{width:"120px"}),e(l).createElement(p,{width:"60px"})),e(l).createElement(c.Row,{justify:"space-between"},e(l).createElement(p,{width:"75px"}),e(l).createElement(p,{width:"35px"})))))))))})),n.register("f8RXR",(function(a,i){t(a.exports,"FungibleSummary",(function(){return g}));var l=n("lMzyG"),o=n("lDSNw"),r=n("cZIbv"),s=n("ks67t"),c=n("kn91D");const u=r.default.div`
  margin: 24px auto 0 auto;
  width: 100%;
`,d=(0,r.default)(c.Text).attrs({size:16,weight:500,color:"#777777",textAlign:"left",margin:"0 auto 16px 0",noWrap:!0})``,g=({name:t,items:n})=>{const{t:a}=(0,l.useTranslation)();return e(o).createElement(u,null,e(o).createElement(d,null,a("assetDetailAboutLabel",{fungibleName:t})),e(o).createElement(s.Summary,{rows:n}))}})),n.register("joWnH",(function(a,i){t(a.exports,"FungibleSummaryCard",(function(){return f}));var l=n("belzv"),o=n("lDSNw"),r=n("gmVmN"),s=n("cZIbv"),c=n("6EObQ");const u=s.default.div`
  display: flex;
  align-items: center;
  margin: 16px 0;
`,d=s.default.div`
  display: flex;
  flex-direction: column;
`,g=s.default.div`
  overflow: hidden;
  word-break: break-word;
  text-overflow: ellipsis;
  word-break: break-all;
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
`,m=s.default.div`
  font-size: 15px;
  line-height: 20px;
  text-align: right;
  color: ${e=>e.positive?"#21E56F;":"#EB3742;"};
`,h=s.default.div`
  display: flex;
  overflow: hidden;
  word-break: break-word;
  text-overflow: ellipsis;
  word-break: break-all;
  color: #777777;
  font-size: 15px;
  line-height: 20px;
  text-align: ${e=>{var t;return null!==(t=e.textAlign)&&void 0!==t?t:"left"}};
`,p=s.default.figure`
  margin-right: 12px;
`,f=({logoUri:t,symbol:n,tokenAddress:a,chain:i,price:s,priceChange24h:f,name:b,type:x})=>{if(i.id===l.BitcoinNetworkID.Mainnet||i.id===l.BitcoinNetworkID.Testnet)return null;const k="number"==typeof f?f:e(o).createElement(e(o).Fragment,null,"—");return e(o).createElement(u,null,e(o).createElement(p,null,e(o).createElement(c.EcosystemImage,{image:{type:"fungible",src:t,fallback:n||a},tokenType:x,chainMeta:i})),e(o).createElement(d,null,e(o).createElement(g,null,b," "),e(o).createElement(h,null,n," • ",(0,r.formatDollarAmount)(s||0)," ","number"==typeof k&&0!==k?e(o).createElement(m,{positive:k>0},(0,r.formatNumber)(k,{includePlusPrefix:!0,suffix:"%"})):e(o).createElement(e(o).Fragment,null,(0,r.formatNumber)(0,{includePlusPrefix:!0,suffix:"%"})))))}})),n.register("e8hzf",(function(a,i){t(a.exports,"StartEarningSol",(function(){return T}));var l=n("lMzyG"),o=n("gd9Oy"),r=n("lDSNw"),s=n("kO1EB"),c=n("HLcoo"),u=n("cZIbv"),d=n("miiws"),g=n("aanFI"),m=n("bkZ83"),h=n("02iAW"),p=n("4tc9b"),f=n("kn91D"),b=n("6ha3o"),x=n("aXzxc"),k=n("gMNJN"),y=n("aEZIx");const v=(0,u.default)(p.TokenRowBody)`
  display: grid;
  grid-template-columns: 44px auto;
  column-gap: 10px;
  margin-bottom: 0;
`,w=u.default.div`
  overflow: hidden;
`,E=u.default.div`
  display: grid;
  grid-template-columns: 1fr;
`,S=u.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`,T=()=>{var t;const{t:n}=(0,l.useTranslation)(),{pushDetailView:a}=(0,b.useDetailViews)(),{showValidatorListModalMultichain:i,hideValidatorListModalMultichain:u}=(0,x.useLegacyModals)(),{data:p}=k.hooks.useSelectedChainAddress(o.AddressType.Solana),T=null!==(t=null==p?void 0:p.address)&&void 0!==t?t:"",A=(0,r.useMemo)((()=>(0,c.createConnectionBySolanaNetworkID)(null==p?void 0:p.networkID)),[null==p?void 0:p.networkID]),M=k.hooks.useStakeAccounts(A,T),{isFetching:B,isError:D}=M,{totalStake:C,totalRewards:I,numAccounts:F}=(0,r.useMemo)((()=>{var e;const t=null!==(e=M.data)&&void 0!==e?e:[];return{totalStake:t.reduce(((e,t)=>e+t.lamports),0),totalRewards:t.reduce(((e,t)=>{var n;return e+(null!==(n=t.inflationReward)&&void 0!==n?n:0)}),0),numAccounts:t.length}}),[M.data]);return e(r).createElement(v,{role:"button",isDisabled:B,onClick:()=>{D?M.refetch():B||(F>0?a(e(r).createElement(y.StakeAccountListView,null)):i({onClose:u}))}},B?e(r).createElement(d.Circle,{diameter:44,color:(0,s.hexToRGB)("#AB9FF2",.2)},e(r).createElement(h.Spinner,{diameter:28})):D?e(r).createElement(d.Circle,{diameter:44,color:(0,s.hexToRGB)("#EB3742",.1)},e(r).createElement(g.IconFailure,null)):e(r).createElement(d.Circle,{diameter:44,color:"#3F3D29"},e(r).createElement(g.IconStar,null)),e(r).createElement(w,null,B?e(r).createElement(E,null,e(r).createElement(f.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},n("startEarningSolLoading")),e(r).createElement(f.Text,{color:"#777777",size:14,lineHeight:17,textAlign:"left",noWrap:!0},n("startEarningSolSearching"))):D?e(r).createElement(E,null,e(r).createElement(f.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},n("startEarningSolErrorTroubleLoading")),e(r).createElement(f.Text,{color:"#777777",size:14,lineHeight:17,textAlign:"left",noWrap:!0},n("startEarningSolErrorClosePhantom"))):F?e(r).createElement(e(r).Fragment,null,e(r).createElement(S,null,e(r).createElement(f.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},n("startEarningSolYourStake")),e(r).createElement(f.Text,{size:14,weight:400,lineHeight:17,textAlign:"right",noWrap:!0},e(r).createElement(m.SolBalance,null,C))),e(r).createElement(S,null,e(r).createElement(f.Text,{color:"#777777",size:14,lineHeight:19,textAlign:"left",noWrap:!0},F," ",1===F?"account":"accounts"),e(r).createElement(f.Text,{size:14,color:""+(I>0?"#21E56F":"#777777"),lineHeight:17,textAlign:"right",noWrap:!0},I>0?e(r).createElement(e(r).Fragment,null,"+",e(r).createElement(m.SolBalance,null,I)):"–"))):e(r).createElement(E,null,e(r).createElement(f.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},n("startEarningSolPrimaryText")),e(r).createElement(f.Text,{color:"#777777",size:14,lineHeight:17,textAlign:"left",noWrap:!0},n("startEarningSolStakeTokens")))))}})),n.register("aEZIx",(function(a,i){t(a.exports,"StakeAccountListView",(function(){return p}));var l=n("belzv"),o=n("lMzyG"),r=n("lDSNw"),s=n("HLcoo"),c=n("jQk2k"),u=n("aanFI"),d=n("ll4uk"),g=n("aXzxc"),m=n("gMNJN"),h=n("8qPgy");const p=()=>{const{t:t}=(0,o.useTranslation)(),{showValidatorListModalMultichain:n,hideValidatorListModalMultichain:a}=(0,g.useLegacyModals)(),{data:i}=m.hooks.useSelectedMultiChainAccount(),{solanaPublicKey:p,connection:f}=(0,r.useMemo)((()=>{var e,t;const n=(null!==(e=null==i?void 0:i.addresses)&&void 0!==e?e:[]).find((e=>l.Chains.isSolanaNetworkID(e.networkID))),a=null!==(t=null==n?void 0:n.address)&&void 0!==t?t:"",o=null==n?void 0:n.networkID;return{solanaPublicKey:a,connection:(0,s.createConnection)((0,s.getClusterBySolanaChainId)(o))}}),[i]),b=m.hooks.useStakeAccounts(f,p);return e(r).createElement(e(r).Fragment,null,e(r).createElement(c.PageHeader,{onIconClick:()=>n({onClose:a}),icon:e(r).createElement(u.IconPlus,null)},t("stakeAccountListViewPrimaryText")),e(r).createElement(d.FullHeightLoadingContent,{isLoading:!b.isFetched},e(r).createElement(h.StakeAccountList,null)))}})),n.register("8qPgy",(function(a,i){t(a.exports,"StakeAccountList",(function(){return v}));var l=n("belzv"),o=n("lMzyG"),r=n("6oMdZ"),s=n("lDSNw"),c=n("HLcoo"),u=n("gmVmN"),d=n("cZIbv"),g=n("bpx2y"),m=n("ll4uk"),h=n("bkZ83"),p=n("jAo12"),f=n("4tc9b"),b=n("kn91D"),x=n("aXzxc"),k=n("gMNJN"),y=n("h5kyv");const v=()=>{var t;const{t:n}=(0,o.useTranslation)();(0,s.useEffect)((()=>(y.analytics.capture("showStakeAccountList"),()=>{y.analytics.capture("hideStakeAccountList")})),[]);const{data:a}=k.hooks.useSelectedMultiChainAccount(),{solanaPublicKey:i,connection:r}=(0,s.useMemo)((()=>{var e,t;const n=(null!==(e=null==a?void 0:a.addresses)&&void 0!==e?e:[]).find((e=>l.Chains.isSolanaNetworkID(e.networkID))),i=null!==(t=null==n?void 0:n.address)&&void 0!==t?t:"",o=null==n?void 0:n.networkID;return{solanaChainAddress:n,solanaPublicKey:i,connection:(0,c.createConnection)((0,c.getClusterBySolanaChainId)(o))}}),[a]),u=k.hooks.useStakeAccounts(r,i),d=null!==(t=u.data)&&void 0!==t?t:[];return e(s).createElement(m.FullHeightLoadingContent,{isLoading:!u.isFetched},u.isError?e(s).createElement(g.ErrorView,{title:n("errorAndOfflineSomethingWentWrong"),description:n("stakeAccountListErrorFetching"),refetch:()=>{u.isFetching||u.refetch()}}):e(s).createElement(w,{data:d,connection:r}),e(s).createElement("br",null))},w=t=>{const{t:n}=(0,o.useTranslation)(),a=I(t.connection),i=t.data.slice().sort(((e,t)=>e.lamports>t.lamports?-1:1)),l=i.filter((e=>e.type===r.StakeAccountType.Delegated)),c=i.filter((e=>e.type===r.StakeAccountType.Initialized));return l.length||c.length?e(s).createElement(e(s).Fragment,null,l.length>0&&e(s).createElement(e(s).Fragment,null,l.map((n=>{var i,l,o;const{stake:r,voter:c}=n.info.stake.delegation,u=a.get(c),d=null===(i=null==u?void 0:u.info)||void 0===i?void 0:i.name,g=null===(l=null==u?void 0:u.info)||void 0===l?void 0:l.keybaseUsername,m=null===(o=null==u?void 0:u.info)||void 0===o?void 0:o.iconUrl;return e(s).createElement(D,{key:n.pubkey,pubkey:n.pubkey,balance:n.lamports,delegatedStake:Number(r),inflationReward:n.inflationReward,voteAccountPubkey:c,name:d,keybaseUsername:g,iconUrl:m,connection:t.connection})}))),c.length>0&&e(s).createElement(e(s).Fragment,null,c.map((n=>e(s).createElement(C,{key:n.pubkey,pubkey:n.pubkey,balance:n.lamports,inflationReward:n.inflationReward,connection:t.connection}))))):e(s).createElement(E,null,e(s).createElement(b.Text,{size:16,color:"#666666"},n("stakeAccountListNoStakingAccounts")))},E=d.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100% - 42px);
`,S=(0,d.default)(f.TokenRowBody)`
  display: grid;
  grid-template-columns: 44px auto;
  column-gap: 10px;
`,T=(0,d.default)(p.TokenImage).attrs({width:44})``,A=d.default.div`
  overflow: hidden;
`,M=d.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`,B=(0,d.default)(b.Text)`
  color: ${e=>"active"===e.activationState?"#21E56F":"inactive"===e.activationState?"#EB3742":"activating"===e.activationState||"deactivating"===e.activationState?"#FFE920":"#777777"};
`,D=t=>{var n,a,i;const{t:l}=(0,o.useTranslation)(),{showStakeAccountModalMultichain:r}=(0,x.useLegacyModals)(),{data:c}=k.hooks.useKeybaseUserAvatar(t.keybaseUsername),d=null!==(a=null!==(n=t.name)&&void 0!==n?n:t.keybaseUsername)&&void 0!==a?a:(0,u.formatHashMedium)(t.voteAccountPubkey),g=k.hooks.useStakeActivationData(t.connection,t.pubkey).data,m=t.inflationReward&&t.inflationReward>0;return e(s).createElement(S,{onClick:()=>{r({stakeAccountPubkey:t.pubkey})}},e(s).createElement(T,{iconUrl:null!==(i=t.iconUrl)&&void 0!==i?i:c}),e(s).createElement(A,null,e(s).createElement(M,null,e(s).createElement(b.Text,{size:16,weight:600,lineHeight:19,textAlign:"left",noWrap:!0},d),e(s).createElement(b.Text,{size:14,weight:400,lineHeight:19,textAlign:"right",noWrap:!0},e(s).createElement(h.SolBalance,null,t.delegatedStake))),e(s).createElement(M,null,e(s).createElement(B,{size:14,activationState:null==g?void 0:g.state,lineHeight:19,textAlign:"left",textTransform:"capitalize",noWrap:!0},"activating"===(null==g?void 0:g.state)?l("stakeAccountListActivationActivating"):"","active"===(null==g?void 0:g.state)?l("stakeAccountListActivationActive"):"","inactive"===(null==g?void 0:g.state)?l("stakeAccountListActivationInactive"):"","deactivating"===(null==g?void 0:g.state)?l("stakeAccountListActivationDeactivating"):""),e(s).createElement(b.Text,{size:14,color:""+(m?"#21E56F":"#777777"),lineHeight:19,textAlign:"right",noWrap:!0},m?e(s).createElement(e(s).Fragment,null,"+",e(s).createElement(h.SolBalance,null,t.inflationReward)):"-"))))},C=t=>{const{t:n}=(0,o.useTranslation)(),{showStakeAccountModalMultichain:a}=(0,x.useLegacyModals)(),i=k.hooks.useStakeActivationData(t.connection,t.pubkey).data,l=t.inflationReward&&t.inflationReward>0;return e(s).createElement(S,{onClick:()=>a({stakeAccountPubkey:t.pubkey})},e(s).createElement(T,null),e(s).createElement(A,null,e(s).createElement(M,null,e(s).createElement(b.Text,{size:16,weight:600,lineHeight:19,textAlign:"left",noWrap:!0},t.pubkey),e(s).createElement(b.Text,{size:14,weight:400,lineHeight:19,textAlign:"right",noWrap:!0},e(s).createElement(h.SolBalance,null,t.balance))),e(s).createElement(M,null,e(s).createElement(B,{size:14,activationState:null==i?void 0:i.state,lineHeight:19,textAlign:"left",textTransform:"capitalize",noWrap:!0},"activating"===(null==i?void 0:i.state)?n("stakeAccountListActivationActivating"):"","active"===(null==i?void 0:i.state)?n("stakeAccountListActivationActive"):"","inactive"===(null==i?void 0:i.state)?n("stakeAccountListActivationInactive"):"","deactivating"===(null==i?void 0:i.state)?n("stakeAccountListActivationDeactivating"):""),e(s).createElement(b.Text,{size:14,color:""+(l?"#21E56F":"#777777"),lineHeight:19,textAlign:"right",noWrap:!0},l&&"+",e(s).createElement(h.SolBalance,null,t.inflationReward)))))},I=e=>{var t;const n=k.hooks.useValidators(e),a=null!==(t=n.results)&&void 0!==t?t:[],i=(0,s.useRef)(a);i.current=a;return(0,s.useMemo)((()=>new Map(i.current.map((e=>[e.voteAccountPubkey,e])))),[n.dataUpdatedAt,i])}})),n.register("1QPez",(function(a,i){t(a.exports,"ButtonUnwrapFungible",(function(){return p}));var l=n("lMzyG"),o=n("lDSNw"),r=n("cZIbv"),s=n("6EObQ"),c=n("4tc9b"),u=n("kn91D"),d=n("2LZGp");const g=(0,r.default)(c.TokenRowBody)`
  display: grid;
  grid-template-columns: 44px auto;
  column-gap: 10px;
  margin-bottom: 0;
`,m=r.default.div`
  display: grid;
  grid-template-columns: 1fr;
`,h=(0,r.default)(u.Text)`
  margin-top: 5px;
`,p=({fungible:t})=>{const{symbol:n,name:a,logoUri:i,chain:r}=t.data,{t:c}=(0,l.useTranslation)(),{handleShowModalVisibility:p}=(0,d.useModals)(),f=(0,o.useCallback)((()=>{p("approveUnwrapFungible",{fungible:t})}),[t,p]);return e(o).createElement(g,{onClick:f},e(o).createElement(s.EcosystemImage,{image:{type:"icon",preset:"swap"},size:48,badge:{src:null!=i?i:""}}),e(o).createElement(m,null,e(o).createElement(u.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},c("unwrapFungibleTitle",{tokenSymbol:n})),e(o).createElement(h,{color:"#777777",size:14,lineHeight:17,textAlign:"left"},c("unwrapFungibleDescription",{fromToken:a,toToken:r.symbol}))))}})),n.register("iVQVK",(function(a,i){t(a.exports,"Header",(function(){return B}));var l=n("4QHep"),o=n("jlKgL"),r=n("lDSNw"),s=n("kO1EB"),c=n("gmVmN"),u=n("cZIbv"),d=n("44I6u"),g=n("6l2nq"),m=n("goqEN"),h=n("hjnIF"),p=n("kn91D"),f=n("ibYAx");const b=(0,u.default)(d.Column).attrs({align:"center"})`
  width: ${f.PHANTOM_WIDTH}px;
  margin-top: -16px;
  background: ${e=>e.background};
`,x=(0,u.default)(d.Column).attrs({align:"center",margin:"2rem 0"})``,k=(0,u.default)(d.Column).attrs({align:"center",justify:"center",width:"100%"})`
  height: 5.3rem;
`,y=(0,u.default)(h.SkeletonLoader).attrs({height:"8px",borderRadius:"6px",backgroundColor:"#484848"})`
  opacity: 0.2;
`,v=(0,u.default)(g.Row)`
  height: 8px;
  border-radius: 6px;
  background-color: ${(0,s.hexToRGB)("#999999",.5)};
  opacity: 0.5;
`,w=(0,u.default)(m.ShrinkingText)`
  margin-bottom: 11px;
`,E=(0,u.default)(p.Text).attrs({size:36,weight:"bold",color:"#777"})``,S=(0,u.default)(g.Row).attrs({justify:"center"})``,T=(0,u.default)(p.Text).attrs({weight:500,size:18})`
  margin-right: 6px;
`,A=(0,u.default)(p.Text).attrs({weight:500,size:18})`
  border-radius: 6px;
  padding: 2px 5px;
`,M=u.default.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 326px;
  margin-bottom: 22px;
  > * {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.16);
  }
`,B=e(r).memo((({buyButtonText:t,depositButtonText:n,hasFungibles:a,isErrorTokens:i,isLoading:l,isHidingAllFungibles:c,showBuyFungibleSelectionModal:u,showDepositListModal:d,showSendFungibleSelectionModal:g,value:m,earnings:h,prefetchSPLTokenMap:p,sendButtonText:f,showDollarValues:B})=>{const P=C(h),z=D({earnings:h,isNeutral:!B||l||c}),H=I(m),R=F(h),V=L(m,h),{buttonTheme:$,buttonDisabled:O}=N({isLoading:l,isEnabled:a||c,isErrorTokens:i});return e(r).createElement(b,{background:z},e(r).createElement(x,null,B?l?e(r).createElement(k,null,e(r).createElement(y,{width:"184px",margin:"0 0 10px 0"}),e(r).createElement(y,{width:"112px"})):a||c?e(r).createElement(e(r).Fragment,null,e(r).createElement(w,{maxFontSize:38,fontWeight:600},H),e(r).createElement(S,null,e(r).createElement(T,{color:P},R),e(r).createElement(A,{color:P,backgroundColor:(0,s.hexToRGB)(P,.1)},V))):i?e(r).createElement(k,null,e(r).createElement(v,{width:"184px",margin:"0 0 10px 0"}),e(r).createElement(v,{width:"112px"})):null:e(r).createElement(k,null,e(r).createElement(E,null,"–"))),e(r).createElement(M,null,e(r).createElement(o.Button,{onMouseEnter:p,onClick:d,disabled:O,variant:{theme:$}},n),e(r).createElement(o.Button,{onClick:u,variant:{theme:$},disabled:O},t),e(r).createElement(o.Button,{onClick:g,variant:{theme:$},disabled:O},f)))})),D=({earnings:e,isNeutral:t})=>t||void 0===e||0===e?"linear-gradient(180deg, rgba(136, 136, 136, 0.05) 0%, rgba(136, 136, 136, 0) 100%)":e>0?"linear-gradient(180deg, rgba(33, 229, 111, 0.05) 0%, rgba(33, 229, 111, 0) 100%)":"linear-gradient(180deg, rgba(235, 55, 66, 0.05) 0%, rgba(235, 55, 66, 0) 100%)",C=e=>void 0===e||0===e?"#777777":e>0?"#21E56F":"#EB3742",I=e=>void 0===e?"-":0===e?"$0.00":(0,c.formatDollarAmount)(e),F=e=>void 0===e?"-":0===e?"+$0.00":(0,c.formatDollarAmount)(e,{includePlusPrefix:!0}),L=(e,t)=>{const n=void 0===t;return void 0===e||n?"-":`${n||t>=0?"+":"-"}${Math.abs((0,l.calculatePercentChange)(e-t,e)).toFixed(2)}%`},N=({isLoading:e,isEnabled:t,isErrorTokens:n})=>{let a="primary",i=!1;switch(!0){case e:a="secondary",i=!0;break;case t:a="primary",i=!1;break;case n:a="secondary",i=!0}return{buttonTheme:a,buttonDisabled:i}}})),n.register("7agg5",(function(a,i){t(a.exports,"HomeError",(function(){return b}));var l=n("lDSNw"),o=n("cZIbv"),r=n("44I6u"),s=n("aanFI"),c=n("6l2nq"),u=n("kn91D");const d=(0,o.default)(r.Column).attrs({align:"center"})``,g=o.default.div`
  width: 48px;
  height: 48px;
  position: relative;
  margin-bottom: 15px;
  border-radius: 100%;
  background: rgba(255, 220, 98, 0.2);
`,m=(0,o.default)(c.Row).attrs({align:"center",justify:"center"})`
  height: 100%;
`,h=(0,o.default)(u.Text).attrs({size:17,weight:500,lineHeight:22,margin:"0 0 10px 0"})``,p=(0,o.default)(u.Text).attrs({size:15,weight:500,lineHeight:21,margin:"0 0 15px 0",color:"#777777"})``,f=(0,o.default)(u.Text).attrs({size:16,weight:500,lineHeight:22,margin:"0",color:"#AB9FF2"})``,b=e(l).memo((t=>e(l).createElement(d,null,e(l).createElement(g,null,e(l).createElement(m,null,e(l).createElement(s.IconExclamationMarkCircle,{width:22,exclamationFill:"transparent",circleFill:"#FFE920"}))),e(l).createElement(h,null,t.title),e(l).createElement(p,null,t.description),e(l).createElement(f,{onClick:t.refetch},t.buttonText))))})),n.register("lyHWs",(function(a,i){t(a.exports,"ManageTokenListButton",(function(){return m}));var l=n("lDSNw"),o=n("cZIbv"),r=n("aanFI"),s=n("3ou76"),c=n("6l2nq"),u=n("kn91D");const d=(0,o.default)(c.Row).attrs({justify:"center",margin:"0 auto",width:"auto"})`
  cursor: pointer;
  height: 48px;
  margin-bottom: 10px;
  p {
    font-weight: 500;
  }
  &:hover {
    p {
      color: #ab9ff2 !important;
    }
    svg {
      fill: #ab9ff2;
      path {
        stroke: #ab9ff2;
      }
      circle {
        stroke: #ab9ff2;
      }
    }
  }
`,g=(0,o.default)(u.Text).attrs({size:16,color:"#777777",weight:500,margin:"0 0 0 10px",lineHeight:19,noWrap:!0})``,m=e(l).memo((t=>e(l).createElement(d,{onClick:t.onClick},e(l).createElement(s.IconWrapper,null,e(l).createElement(r.IconTokenListSettings,null)),e(l).createElement(g,null,t.buttonText))))}));
//# sourceMappingURL=home-multichain.00ee1518.js.map
define=__define;})(window.define);