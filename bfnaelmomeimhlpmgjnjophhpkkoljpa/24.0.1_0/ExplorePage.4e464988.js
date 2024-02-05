(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire1d24;n.register("Cx7PX",(function(r,l){var i;i=r.exports,Object.defineProperty(i,"__esModule",{value:!0,configurable:!0}),t(r.exports,"ExplorePageContent",(function(){return S})),t(r.exports,"default",(function(){return P}));var a=n("54qyi"),o=n("lBuGR"),s=n("egSKH"),c=n("lDSNw"),d=n("bjaYq"),u=n("lz7nT"),p=n("5Z2YQ"),m=n("cZIbv"),x=n("cecAp"),f=n("kn91D"),g=n("fnNJD"),h=n("4jLAN"),E=n("cHds5"),b=n("dk3Xb"),w=n("1tudC"),k=n("gMNJN"),y=n("iacGS"),v=n("d1qx3");function S(){var t;k.hooks.useExploreLoadAllQueries();const n=(0,u.useLocation)(),{t:r}=(0,d.useTranslation)(),{data:[l]}=(0,o.useFeatureFlags)(["enable-quests"]),{error:i,refetch:m}=k.hooks.useQuests({platform:"extension",appVersion:(0,v.getManifestVersion)()}),{setActiveTab:x,activeTab:f}=(0,a.useExplore)();(0,c.useEffect)((()=>{var e;"quests"===(null===(e=n.state)||void 0===e?void 0:e.tab)&&l&&!i&&x(3)}),[null===(t=n.state)||void 0===t?void 0:t.tab,l,i,x]);const{error:S,refetch:N}=k.hooks.useLearn(),{error:P,refetch:T}=k.hooks.useExploreTokens(),{error:A,refetch:R}=k.hooks.useExploreSites(),{error:$,refetch:M}=k.hooks.useExploreCollections(),{error:j,refetch:F}=k.hooks.useExploreRecommendedTokens(),{error:z,refetch:G}=k.hooks.useExploreRecommendedSites(),{error:Z,refetch:_}=k.hooks.useExploreRecommendedCollections(),B=i&&S&&P&&A&&$&&j&&z&&Z,O=(0,c.useCallback)((()=>{l&&m(),T(),R(),M(),F(),G(),_(),N()}),[m,T,R,M,F,G,_,N,l]),[Q,q]=e(c).useState(""),U=(0,p.useDebouncedState)(Q,250),H=e(s)((e=>{e&&y.exploreAnalytics.onExploreSearchedByUser({searchTerm:e})}),1e3);return(0,c.useEffect)((()=>{H(U)}),[U,H]),B?e(c).createElement(C,null,e(c).createElement(g.ExplorePageError,{title:r("exploreErrorTitle"),buttonText:r("exploreErrorButtonText"),description:r("exploreErrorDescription"),refetch:O})):e(c).createElement("div",null,e(c).createElement(E.ExploreSearchHeader,{value:Q,onChange:q}),e(c).createElement(I,{hide:!!U},e(c).createElement(w.ExploreTabs,null),e(c).createElement(h.Learn,null),1===f&&e(c).createElement(L,null,e(c).createElement(D,null,r("exploreTokensLegalDisclaimer")))),e(c).createElement(I,{hide:!U},e(c).createElement(b.ExploreSearchResults,{query:U})))}const C=m.default.div`
  padding: 16px;
`,I=m.default.div`
  display: ${({hide:e})=>e?"none":"initial"};
`,L=m.default.div`
  padding: 16px;
  padding-top: 0px;
`,D=(0,m.default)(f.Text)`
  color: #999;
  font-feature-settings: "calt" off;

  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
`,N=m.default.div`
  padding-top: 16px;
`;var P=()=>{const{data:[t],isLoading:n}=(0,o.useFeatureFlags)(["enable-explore-page"]);return n?null:t?e(c).createElement(a.ExploreProvider,{appVersion:(0,v.getManifestVersion)(),platform:"extension",initialTabIndex:0},e(c).createElement(S,null)):e(c).createElement(N,null,e(c).createElement(x.Quests,null))}})),n.register("cecAp",(function(r,l){t(r.exports,"Quests",(function(){return h}),(function(e){return h=e}));var i=n("6Tvfa"),a=n("lMzyG"),o=n("bUo8j"),s=n("lDSNw"),c=n("cZIbv"),d=n("kn91D"),u=n("gMNJN"),p=n("d1qx3"),m=n("8XpGW"),x=n("k4rlt"),f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]])}return n};const g=e(s).memo((({quests:t,isLoading:n,titleVisible:r})=>{const{t:l}=(0,a.useTranslation)();return n?e(s).createElement("div",null,e(s).createElement(m.QuestSkeletonHeader,null),e(s).createElement(m.QuestSkeleton,null),e(s).createElement(m.QuestSkeleton,null)):e(s).createElement("div",null,r&&e(s).createElement(b,{size:22,weight:500},`${l("quests")} (${(0,o.getActiveQuestCount)(t)})`),e(s).createElement(x.QuestsList,{quests:t}))})),h=({titleVisible:t=!0})=>{const n=(()=>{const{data:e=[],isLoading:t,error:n}=u.hooks.useQuests({platform:"extension",appVersion:(0,p.getManifestVersion)()}),{data:r}=u.hooks.useSelectedMultiChainAccount(),{data:l}=u.hooks.useIsAnalyticsOptedOut();return(0,s.useMemo)((()=>({shouldShowQuests:!l&&(null==r?void 0:r.type)!==i.AccountType.ReadOnly&&!n,quests:e,isLoading:t})),[r,e,l,t,n])})(),{shouldShowQuests:r}=n,l=f(n,["shouldShowQuests"]);return r?e(s).createElement(E,{"data-testid":"quests"},e(s).createElement(g,Object.assign({},l,{titleVisible:t}))):null},E=c.default.div`
  padding: 16px;
  padding-top: 0;
`,b=(0,c.default)(d.Text)`
  margin-bottom: 17px;
`})),n.register("8XpGW",(function(r,l){t(r.exports,"Separator",(function(){return f})),t(r.exports,"QuestSkeletonHeader",(function(){return g})),t(r.exports,"QuestSkeleton",(function(){return h}));var i=n("lDSNw"),a=n("cZIbv"),o=n("44I6u"),s=n("6l2nq"),c=n("hjnIF");const d="14px",u="8px",p="#484848",m=(0,a.default)(c.SkeletonLoader)`
  width: 100%;
  height: 144px;
  border-top-left-radius: ${u};
  border-top-right-radius: ${u};
`,x=(0,a.default)(c.SkeletonLoader).attrs({backgroundColor:"#484848",borderRadius:"8px"})``,f=a.default.div`
  background: #474747;
  height: 1px;
  opacity: 0.6;
  width: 100%;
`,g=()=>e(i).createElement(c.SkeletonLoader,{align:"center",width:"150px",height:"30px",backgroundColor:"#2D2D2D",borderRadius:u,margin:"0 auto 17px auto"}),h=()=>e(i).createElement(e(i).Fragment,null,e(i).createElement(c.SkeletonLoader,{width:"100%",height:"308px",backgroundColor:"#2D2D2D",borderRadius:u,margin:"0 0 10px 0"},e(i).createElement(o.Column,null,e(i).createElement(m,{align:"flex-start",justify:"flex-end",margin:"0 0 10px"},e(i).createElement(x,{align:"flex-start",justify:"flex-end",width:"65px",height:"20px",margin:"10px 10px 0 0",borderRadius:"32px"})),e(i).createElement(o.Column,{padding:"16px"},e(i).createElement(c.SkeletonLoader,{justify:"flex-start",width:"60px",height:d,backgroundColor:p,borderRadius:"8px",margin:"0 0 17px 0"}),e(i).createElement(c.SkeletonLoader,{justify:"flex-start",width:"125px",height:d,backgroundColor:p,borderRadius:u})),e(i).createElement(f,null),e(i).createElement(s.Row,{padding:"16px"},e(i).createElement(c.SkeletonLoader,{width:"40px",height:"40px",backgroundColor:p,borderRadius:u}),e(i).createElement(o.Column,{width:"auto",margin:"0 0 0 10px"},e(i).createElement(c.SkeletonLoader,{justify:"flex-start",width:"60px",height:d,backgroundColor:p,borderRadius:u,margin:"0 0 5px 0"}),e(i).createElement(c.SkeletonLoader,{justify:"flex-start",width:"125px",height:d,backgroundColor:p,borderRadius:u}))))))})),n.register("k4rlt",(function(r,l){t(r.exports,"QuestsList",(function(){return o}));var i=n("lDSNw"),a=n("bvnT7");const o=({quests:t})=>e(i).createElement(e(i).Fragment,null,t.map((t=>e(i).createElement(a.QuestListItem,Object.assign({key:t.id},t)))))})),n.register("bvnT7",(function(r,l){t(r.exports,"QuestListItem",(function(){return D}));var i=n("lMzyG"),a=n("8NH57"),o=n("bUo8j"),s=n("lDSNw"),c=n("cZIbv"),d=n("jl49C"),u=n("2LZGp"),p=n("ktQU4"),m=n("laYjG"),x=n("miiws"),f=n("kn91D"),g=n("eLIAP"),h=n("8XpGW"),E=n("fLLui");const b=c.default.div`
  border: 1px solid rgba(71, 71, 71, 0.4);
  border-radius: ${12}px;
  box-shadow: ${e=>e.isDisabled?"":"0px 4px 20px 0px rgba(0, 0, 0, 0.25)"};
  cursor: ${e=>e.isDisabled?"auto":"pointer"};
  margin-bottom: 24px;
  position: relative;
`,w=c.default.div`
  background-color: rgba(44, 45, 48, 0.5);
  border-radius: ${12}px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`,k=c.default.div`
  align-items: center;
  border-top-left-radius: ${12}px;
  border-top-right-radius: ${12}px;
  display: flex;
  height: 144px;
  justify-content: center;
  overflow: hidden;
`,y=c.default.img`
  max-width: 100%;
`,v=c.default.div`
  padding: 16px;
`,S=(0,c.default)(f.Text)`
  margin-bottom: 8px;
`,C=(0,c.default)(f.Text)``,I=(0,c.default)(x.Circle).attrs({diameter:32})`
  background-color: transparent;
  border: 1px solid #333333;
`,L=e(s).memo((t=>{const{expirationUnixTimeInSeconds:n,titleLong:r,imageUrl:l,description:i,isCompleted:a,isPreview:c,reward:d,onClickQuest:u,onClickQuestRewardPreview:p,onClaimQuestReward:m}=t,x=(0,o.isQuestDisabled)(t);return e(s).createElement(b,{onClick:u,isDisabled:x},e(s).createElement(k,null,e(s).createElement(y,{src:l}),e(s).createElement(E.QuestStatusBadge,{expirationUnixTimeInSeconds:n,isCompleted:a,isPreview:c}),x&&e(s).createElement(w,null)),e(s).createElement(h.Separator,null),e(s).createElement(v,null,e(s).createElement(S,{textAlign:"left",size:16,weight:500,lineHeight:19},r),e(s).createElement(C,{color:"#999",textAlign:"left",weight:400,lineHeight:17,size:14},i)),d&&e(s).createElement(e(s).Fragment,null,e(s).createElement(h.Separator,null),e(s).createElement(g.QuestRewardSection,{isQuestCompleted:a,reward:d,onClickQuestRewardPreview:p,onClaimQuestReward:m})))})),D=t=>{const n=(t=>{const{t:n}=(0,i.useTranslation)(),{id:r,titleShort:l,networkIds:o,interstitial:c,reward:x,isCompleted:g,isPreview:h,previewUrl:E}=t,{handleShowModalVisibility:b,handleHideModalVisibility:w}=(0,u.useModals)(),k=(0,d.useDeepLink)(),y=(0,s.useCallback)((t=>{if(h&&null!=E)return p.questAnalytics.onQuestPreviewUrlClick({questId:r,shortName:l},E),void k(t,{destinationType:a.DeepLinkDestination.ExternalLink,url:E});if(g||null==c)return;const{destinationType:n,url:i,lineItems:o,primaryButtonText:d,secondaryButtonText:u,title:x}=c;p.questAnalytics.onQuestSelected({questId:r,shortName:l}),b("interstitial",{bodyTitle:x,details:o.map(((t,n)=>({icon:e(s).createElement(I,null,e(s).createElement(f.Text,{size:14},n+1)),title:t.title,subtitle:t.description}))),icon:c.imageUrl,onDismiss:()=>{p.questAnalytics.onQuestInterstitialDismiss({questId:r,shortName:l})},FooterComponent:()=>e(s).createElement(m.ButtonPair,{primaryText:d,secondaryText:u,onPrimaryClicked:()=>{p.questAnalytics.onQuestInterstitialPrimaryClick({questId:r,shortName:l,buttonText:d}),k(t,{destinationType:n,url:i}),w("interstitial")},onSecondaryClicked:()=>{p.questAnalytics.onQuestInterstitialSecondaryClick({questId:r,shortName:l,buttonText:u}),w("interstitial")}})})}),[b,w,c,k,r,g,h,E,l]),v=(0,s.useCallback)((t=>{if(g||null==x||x.hasClaimed)return;t.stopPropagation();const{title:r,description:l,imageUrl:i}=x;b("interstitial",{bodyTitle:r,bodyDescription:l,icon:i,FooterComponent:()=>e(s).createElement(m.Button,{onClick:()=>w("interstitial")},n("commandDismiss"))})}),[b,w,g,x,n]),S=(0,s.useCallback)((()=>{null==x||x.hasClaimed||(p.questAnalytics.onQuestRewardClaimed({questId:r,shortName:l}),b("claimReward",{questId:r,networkIds:o,onPressDismiss:()=>w("claimReward")}))}),[x,r,o,b,w,l]);return(0,s.useMemo)((()=>Object.assign(Object.assign({},t),{onClickQuestRewardPreview:v,onClaimQuestReward:S,onClickQuest:y})),[t,y,v,S])})(t);return e(s).createElement(L,Object.assign({},n))}})),n.register("jl49C",(function(r,l){t(r.exports,"useDeepLink",(function(){return m}));var i=n("8NH57"),a=n("lDSNw"),o=n("lz7nT"),s=n("aXzxc"),c=n("7J3aJ"),d=n("8182A"),u=n("d1qx3"),p=n("lrImj");const m=()=>{const{showSettingsMenu:t}=(0,c.useSettingsMenu)(),{showBuyFungibleSelectionModal:n}=(0,s.useLegacyModals)(),r=(0,o.useNavigate)();return(0,a.useCallback)(((l,o)=>{const{destinationType:s,url:c}=o;switch(s){case i.DeepLinkDestination.ExternalLink:(0,u.openTabAsync)({url:c});break;case i.DeepLinkDestination.Buy:n();break;case i.DeepLinkDestination.Collectibles:r(d.Path.Collectibles);break;case i.DeepLinkDestination.Explore:r(d.Path.Explore);break;case i.DeepLinkDestination.Quests:r(d.Path.Explore,{state:{tab:"quests",date:Date.now()}});break;case i.DeepLinkDestination.Swapper:r(d.Path.Swap);break;case i.DeepLinkDestination.SettingsImportSeedPhrase:(0,u.openTabAsync)({url:"onboarding.html?append=true"});break;case i.DeepLinkDestination.ConnectHardwareWallet:(0,u.openTabAsync)({url:"connect_hardware.html"});break;default:{const n=(0,p.getSanityComponentMapping)(s);if(!n)return;t(l,e(a).createElement(n,null))}}}),[r,t,n])}})),n.register("lrImj",(function(e,r){t(e.exports,"getSanityComponentMapping",(function(){return a}));var l=n("8NH57"),i=n("i14LG");const a=e=>{if(e===l.DeepLinkDestination.SettingsSecurityAndPrivacy)return i.MultiChainSecurity}})),n.register("ktQU4",(function(e,r){t(e.exports,"questAnalytics",(function(){return a}));var l=n("bUo8j"),i=n("h5kyv");const a=new(0,l.QuestAnalytics)(i.analytics)})),n.register("eLIAP",(function(r,l){t(r.exports,"QuestRewardSection",(function(){return x}));var i=n("lMzyG"),a=n("lDSNw"),o=n("cZIbv"),s=n("laYjG"),c=n("aanFI"),d=n("kn91D");const u=o.default.div`
  padding: 16px;
`,p=o.default.div`
  align-self: center;
  margin-right: 8px;
`,m=(0,o.default)(s.Button).attrs({theme:"primary"})`
  align-self: center;
  height: 32px;
  max-width: 80px;
  padding: 8px 14px;
  width: auto;
`,x=({isQuestCompleted:t,reward:n,onClickQuestRewardPreview:r,onClaimQuestReward:l})=>{const{t:o}=(0,i.useTranslation)();return e(a).createElement(u,null,e(a).createElement("div",{style:{display:"flex"}},e(a).createElement("div",{onClick:r,style:{cursor:t?"auto":"pointer",display:"flex",flexGrow:1,marginRight:16}},e(a).createElement(p,null,e(a).createElement(c.IconReward,null)),e(a).createElement("div",null,e(a).createElement(d.Text,{color:"#999",textAlign:"left",size:13,lineHeight:16},o("reward")),e(a).createElement(d.Text,{textAlign:"left",size:14,weight:600,lineHeight:16},n.title))),t&&e(a).createElement(m,{onClick:l,disabled:n.hasClaimed},e(a).createElement(d.Text,{color:"#222",weight:600,lineHeight:16,size:13},n.hasClaimed?o("pastParticipleClaimed"):o("commandClaim")))))}})),n.register("fLLui",(function(r,l){t(r.exports,"QuestStatusBadge",(function(){return c}));var i=n("lDSNw"),a=n("cZIbv"),o=n("gMNJN"),s=n("kn91D");const c=({expirationUnixTimeInSeconds:t,isCompleted:n,isPreview:r})=>{const{status:l}=o.hooks.useQuestStatusBadge({expirationUnixTimeInSeconds:t,isCompleted:n,isPreview:r,platform:"extension"});return e(i).createElement(d,null,e(i).createElement(u,{color:l.color},l.text))},d=a.default.div`
  background: rgba(34, 34, 34, 0.8);
  backdrop-filter: blur(2px);
  border-radius: 32px;
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 4px 8px;
`,u=(0,a.default)(s.Text)`
  color: ${e=>e.color};
  font-size: 13px;
  font-weight: 600;
  line-height: normal;
`})),n.register("fnNJD",(function(r,l){t(r.exports,"ExplorePageError",(function(){return h}));var i=n("lDSNw"),a=n("cZIbv"),o=n("44I6u"),s=n("aanFI"),c=n("6l2nq"),d=n("kn91D");const u=(0,a.default)(o.Column).attrs({align:"center"})``,p=a.default.div`
  width: 48px;
  height: 48px;
  position: relative;
  margin-bottom: 15px;
  border-radius: 100%;
  background: rgba(255, 220, 98, 0.2);
`,m=(0,a.default)(c.Row).attrs({align:"center",justify:"center"})`
  height: 100%;
`,x=(0,a.default)(d.Text).attrs({size:17,weight:500,lineHeight:22,margin:"0 0 10px 0"})``,f=(0,a.default)(d.Text).attrs({size:15,weight:500,lineHeight:21,margin:"0 0 15px 0",color:"#777777"})``,g=(0,a.default)(d.Text).attrs({size:16,weight:500,lineHeight:22,margin:"0",color:"#AB9FF2"})``,h=e(i).memo((t=>e(i).createElement(u,null,e(i).createElement(p,null,e(i).createElement(m,null,e(i).createElement(s.IconExclamationMarkCircle,{width:22,exclamationFill:"transparent",circleFill:"#FFE920"}))),e(i).createElement(x,null,t.title),e(i).createElement(f,null,t.description),e(i).createElement(g,{onClick:t.refetch},t.buttonText))))})),n.register("4jLAN",(function(r,l){t(r.exports,"Learn",(function(){return x}));var i=n("lMzyG"),a=n("lDSNw"),o=n("cZIbv"),s=n("kn91D"),c=n("gMNJN"),d=n("5KA91"),u=n("iacGS"),p=n("kCMom"),m=n("7R9fe");const x=()=>{const{t:t}=(0,i.useTranslation)(),{isLoading:n,data:r,error:l}=c.hooks.useLearn(),o=(0,a.useRef)(null),x=(0,d.useOnScreen)(o);return(0,a.useEffect)((()=>{x&&u.exploreAnalytics.onExploreLearnSectionScrolledIntoView()}),[x]),l&&!n&&!r||0===(null==r?void 0:r.data.length)?null:e(a).createElement(f,{"data-testid":"learn-container",ref:o},e(a).createElement(g,null,e(a).createElement(s.Text,{size:22,weight:500,textAlign:"left"},t("exploreLearn"))),n?e(a).createElement(m.LearnSkeleton,null):e(a).createElement(p.LearnCards,{items:(null==r?void 0:r.data)||[]}))},f=o.default.div`
  padding: 0 16px 16px 16px;
`,g=o.default.div`
  padding-top: 8px;
  padding-bottom: 4px;
`})),n.register("5KA91",(function(e,r){t(e.exports,"useOnScreen",(function(){return i}));var l=n("lDSNw");function i(e){const[t,n]=(0,l.useState)(!1),r=e.current;return(0,l.useEffect)((()=>{if(!r)return;const e=new IntersectionObserver((([e])=>n(e.isIntersecting)));return e.observe(r),()=>e.disconnect()}),[r]),t}})),n.register("iacGS",(function(e,r){t(e.exports,"exploreAnalytics",(function(){return a}));var l=n("54qyi"),i=n("h5kyv");const a=new(0,l.ExploreAnalytics)(i.analytics)})),n.register("kCMom",(function(r,l){t(r.exports,"LearnCards",(function(){return p}));var i=n("lDSNw"),a=n("cZIbv"),o=n("kn91D"),s=n("iacGS"),c=n("1GaZ5");const d=({item:t,position:n})=>e(i).createElement(x,{hidePointer:!0,halfWidth:"half-width"===t.layout,"data-testid":"learn-card-tip",onClick:()=>{s.exploreAnalytics.onExploreLearnItemClickedByUser({itemDetails:{position:n,id:t.id,title:t.title,type:"tip"}})}},e(i).createElement(g,{background:t.backgroundColor},e(i).createElement(h,null,e(i).createElement(E,null,e(i).createElement(y,{color:"black",opacity:.5},e(i).createElement(S,{"data-testid":"learn-card-tip-icon"},e(i).createElement("img",{width:"16px",height:"16px",src:t.icon})),t.title)),e(i).createElement(E,null,e(i).createElement(k,{opacity:.7},t.description))))),u=({item:t,position:n})=>{const r=(0,i.useCallback)((()=>{s.exploreAnalytics.onExploreLearnItemClickedByUser({itemDetails:{position:n,id:t.id,title:t.title,type:"article"}})}),[t.id,t.title,n]);return"half-width"===t.layout?e(i).createElement(f,{href:t.url,onClick:r},e(i).createElement(x,{halfWidth:!0,"data-testid":"learn-card-article-half"},e(i).createElement(g,null,e(i).createElement(w,{style:{height:"50%"}},e(i).createElement(v,{src:t.backgroundImageUrl})),e(i).createElement(b,{background:t.backgroundColor},e(i).createElement(k,null,t.title))))):e(i).createElement(f,{href:t.url,onClick:r},e(i).createElement(x,{"data-testid":"learn-card-article-full"},e(i).createElement(g,{background:t.backgroundColor},e(i).createElement(h,null,e(i).createElement(k,null,t.title),e(i).createElement(y,{color:"#474747"},t.description))),e(i).createElement(g,null,e(i).createElement(v,{src:t.backgroundImageUrl}))))},p=({items:t})=>e(i).createElement(m,{"data-testid":"learn-cards"},t.map(((t,n)=>"learnArticle"===t.type?e(i).createElement(u,{item:t,key:t.title,position:n}):e(i).createElement(d,{item:t,key:t.title,position:n})))),m=a.default.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 8px;
  gap: 8px;
`,x=a.default.div`
  border-radius: 16px;
  height: ${c.EXPLORE_CARD_SIZE_PX};
  display: flex;
  overflow: hidden;
  cursor: ${e=>e.hidePointer?"auto":"pointer"};
  width: ${e=>e.halfWidth?"calc(50% - 4px)":"auto"};
`,f=a.default.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  text-decoration: none;
  display: contents;
`,g=a.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  background: ${e=>e.background||"auto"};
`,h=a.default.div`
  padding: 12px 16px;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`,E=a.default.div`
  display: flex;
`,b=(0,a.default)(E)`
  padding: 16px;
  background: ${e=>e.background||"auto"};
`,w=(0,a.default)(E)`
  flex: 1;
`,k=(0,a.default)(o.Text)`
  text-align: left;
  color: black;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.36px;
`,y=(0,a.default)(o.Text)`
  text-align: left;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  align-items: center;
`,v=a.default.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,S=a.default.span`
  display: flex;
  margin-right: 4px;
`})),n.register("1GaZ5",(function(e,r){t(e.exports,"EXPLORE_CARD_SIZE",(function(){return l})),t(e.exports,"EXPLORE_CARD_SIZE_PX",(function(){return i}));const l=(n("ibYAx").PHANTOM_WIDTH-40)/2,i=`${l}px`})),n.register("7R9fe",(function(r,l){t(r.exports,"LearnSkeleton",(function(){return u}));var i=n("lDSNw"),a=n("cZIbv"),o=n("hjnIF"),s=n("1GaZ5");const c=()=>e(i).createElement(m,null,e(i).createElement(f,null,e(i).createElement(h,{width:"110px"}),e(i).createElement(h,{width:"90px"}),e(i).createElement(h,{width:"105px"})),e(i).createElement(x,null,e(i).createElement(h,{width:"64px"}))),d=()=>e(i).createElement(m,null,e(i).createElement(f,null,e(i).createElement(h,{width:"110px"}),e(i).createElement(h,{width:"90px"}))),u=()=>e(i).createElement(p,{"data-testid":"learn-skeleton"},e(i).createElement(c,null),e(i).createElement(g,null,e(i).createElement(d,null),e(i).createElement(d,null)),e(i).createElement(c,null)),p=a.default.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 10px;
`,m=(0,a.default)(o.SkeletonLoader)`
  background: #323232;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${s.EXPLORE_CARD_SIZE_PX};
  border-radius: 14px;
  padding: 16px;
  justify-content: flex-end;
`,x=a.default.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
`,f=a.default.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,g=a.default.div`
  display: flex;
  gap: 8px;
`,h=(0,a.default)(o.SkeletonLoader)`
  height: 16px;
  border-radius: 16px;
`})),n.register("cHds5",(function(r,l){t(r.exports,"ExploreSearchHeader",(function(){return c}));var i=n("lMzyG"),a=n("lDSNw"),o=n("cZIbv"),s=n("jLA72");const c=({value:t,onChange:n})=>{const{t:r}=(0,i.useTranslation)();return e(a).createElement(d,null,e(a).createElement(s.SearchInput,{placeholder:r("dappBrowserSearchPlaceholder"),value:t,onChange:e=>{"value"in e.target&&"string"==typeof e.target.value&&n(e.target.value)},showClearIcon:!!t,onClear:()=>{n("")}}))},d=o.default.div`
  padding: 16px;
  padding-bottom: 0;
`})),n.register("dk3Xb",(function(r,l){t(r.exports,"ExploreSearchResults",(function(){return x}));var i=n("c1thM"),a=n("lDSNw"),o=n("bjaYq"),s=n("cZIbv"),c=n("2PGvS"),d=n("hjnIF"),u=n("kn91D"),p=n("iacGS"),m=n("3A33D");const x=({query:t})=>{const{dapps:n,isLoading:r}=(0,m.useExploreSearchList)(t),l=(0,a.useMemo)((()=>[...new Array(5).keys()]),[]),{t:i}=(0,o.useTranslation)();return r?e(a).createElement(f,{testId:"explore-search-results-loading",items:l.map((t=>({key:t.toString(),image:e(a).createElement(k,null),textMain:e(a).createElement(d.SkeletonLoader,{width:"96px",height:"16px",marginBottom:"2px",borderRadius:"16px"}),textSecondary:e(a).createElement(d.SkeletonLoader,{width:"62px",height:"14.5px",borderRadius:"16px"})})))}):n.length?e(a).createElement(f,{testId:"explore-search-results",items:n.map(((t,n)=>({key:t.id,href:t.href,image:e(a).createElement(c.ShapedImage,{src:t.imageUrl,size:"xsmall",shape:"square"}),textMain:e(a).createElement(b,null,t.name),textSecondary:e(a).createElement(w,null,t.category),onClick:()=>{p.exploreAnalytics.onExploreSearchItemClickedByUser({itemDetails:{position:n+1,title:t.name,id:t.id}})}})))}):e(a).createElement(y,{"data-testid":"explore-search-results-nodata"},e(a).createElement(v,null,i("dappBrowserSearchNoApps")))},f=({items:t,testId:n})=>e(a).createElement(g,{"data-testid":n},t.map(((n,r)=>e(a).createElement(h,{key:n.key,href:n.href,onClick:n.onClick,whileHover:{background:"#333"},style:{background:"#222"},transition:{ease:[.5,1,.89,1],duration:.1}},e(a).createElement("div",null,n.image),e(a).createElement(E,{isLast:r===t.length-1},n.textMain,n.textSecondary))))),g=s.default.div`
  margin-top: 16px;
`,h=(0,s.default)(i.motion.a).attrs({target:"_blank",rel:"noopener noreferrer"})`
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 16px;
  text-decoration: none;
`,E=s.default.div`
  display: flex;
  flex-direction: column;
  border-bottom: ${e=>e.isLast?"none":"1px solid #323232"};
  width: 100%;
  padding: 16px 0;
`,b=(0,s.default)(u.Text)`
  text-align: left;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,w=(0,s.default)(u.Text)`
  text-align: left;
  color: #999;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`,k=(0,s.default)(d.SkeletonLoader)`
  border-radius: 6px;
  height: 24px;
  width: 24px;
`,y=s.default.div`
  position: absolute;
  top: 64px;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 56px;
`,v=(0,s.default)(u.Text)`
  color: #999;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`})),n.register("2PGvS",(function(r,l){t(r.exports,"ShapedImage",(function(){return x}));var i=n("lDSNw"),a=n("kO1EB"),o=n("cZIbv"),s=n("miiws"),c=n("c6Gae"),d=n("hjnIF");const u=e=>{if("number"==typeof e)return e;switch(null!=e?e:"small"){case"normal":return 48;case"small":return 32;case"xsmall":return 24;case"xxsmall":return 16}},p=(0,o.default)(c.PImage)`
  border-radius: ${e=>e.borderradius}px;
  width: 100%;
  height: 100%;
`,m=o.default.div`
  width: ${e=>e.width}px;
  height: ${e=>e.height}px;
  align-items: center;
  justify-content: center;
  background-color: ${e=>{var t;return(0,a.hexToRGB)(e.color,null!==(t=e.alpha)&&void 0!==t?t:.1)}};
`,x=({src:t,fallback:n,alt:r,size:l="normal",shape:a="circle",style:o})=>{const c=null!=n?n:e(i).createElement(f,null,"?"),x=u(l),g=u(l),h=(e=>"square"===e?6:0)(a);return"circle"===a?e(i).createElement(s.Circle,{color:"#222222",diameter:x,style:o},e(i).createElement(p,{src:t,fallback:c,alt:r||void 0,width:x,height:g,borderradius:h,loader:e(i).createElement(d.SkeletonLoader,{borderRadius:`${h}px`,width:`${x}px`,height:`${g}px`})})):e(i).createElement(m,{color:"#222222",width:x,height:g,style:o},e(i).createElement(p,{src:t,fallback:c,alt:r||"",width:x,height:g,borderradius:h,loader:e(i).createElement(d.SkeletonLoader,{borderRadius:`${h}px`,width:`${x}px`,height:`${g}px`})}))},f=o.default.div`
  font-size: 22px;
  line-height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`})),n.register("3A33D",(function(e,r){t(e.exports,"useExploreSearchList",(function(){return c}));var l=n("54qyi"),i=n("4y59b"),a=n("gmVmN"),o=n("gMNJN"),s=n("GbSLs");const c=e=>{const t=o.hooks.useEnabledNetworkIDs(),{data:n,isLoading:r}=o.hooks.useRecommendedSearchSites({networkIds:t});return{dapps:(0,s.useFuse)(n||[],(0,a.removeWebPrefixes)(e),l.FUSE_EXPLORE_DAPPS_CONFIG).map((e=>Object.assign(Object.assign({},e),{href:(0,i.getOriginAndHostname)(e.domain).origin}))),isLoading:r}}})),n.register("1tudC",(function(r,l){t(r.exports,"ExploreTabs",(function(){return I}));var i=n("54qyi"),a=n("lBuGR"),o=n("lMzyG"),s=n("lDSNw"),c=n("cecAp"),d=n("gMNJN"),u=n("iacGS"),p=n("d1qx3"),m=n("gBwyG"),x=n("fs8H6"),f=n("iBj6N"),g=n("9yEL6"),h=n("hTknS"),E=n("5oT4X"),b=n("706Mc"),w=n("dA6Zr"),k=n("gt4Z2"),y=n("YBIrC");const v=()=>{const{isLoading:t,isPreviousData:n}=d.hooks.useExploreSites(),{isLoading:r}=d.hooks.useExploreSortOption();return e(s).createElement("div",null,e(s).createElement(f.CarouselSites,null),!t&&!r||n?e(s).createElement(h.default,{tab:"sites"}):e(s).createElement(E.ExploreFiltersSkeleton,null),e(s).createElement(w.ExploreListSites,null))},S=()=>{const{isLoading:t,isPreviousData:n}=d.hooks.useExploreTokens(),{isLoading:r,currentSortOption:l}=d.hooks.useExploreSortOption(),i=l("tokens");return e(s).createElement("div",null,e(s).createElement(g.CarouselTokens,null),!t&&!r||n?e(s).createElement(h.default,{tab:"tokens"}):e(s).createElement(E.ExploreFiltersSkeleton,null),e(s).createElement(k.ExploreListTokens,{displayType:i}))},C=()=>{const{isLoading:t,isPreviousData:n}=d.hooks.useExploreCollections(),{isLoading:r}=d.hooks.useExploreSortOption();return e(s).createElement("div",null,e(s).createElement(x.CarouselCollections,null),!t&&!r||n?e(s).createElement(h.default,{tab:"collections"}):e(s).createElement(E.ExploreFiltersSkeleton,null),e(s).createElement(b.ExploreListCollections,null))};function I(){const{activeTab:t,setActiveTab:n}=(0,i.useExplore)(),{t:r}=(0,o.useTranslation)(),{data:[l]}=(0,a.useFeatureFlags)(["enable-quests"]),{error:x}=d.hooks.useQuests({platform:"extension",appVersion:(0,p.getManifestVersion)()}),f=(0,s.useMemo)((()=>{const t=[{title:r("exploreApps"),name:"sites",element:e(s).createElement(v,null)},{title:r("exploreTokens"),name:"tokens",element:e(s).createElement(S,null)},{title:r("exploreCollections"),name:"collections",element:e(s).createElement(C,null)}];return l&&x?t:[...t,{title:r("quests"),name:"quests",element:e(s).createElement(c.Quests,{titleVisible:!1})}]}),[l,x,r]),g=(0,s.useMemo)((()=>f.map((e=>e.title))),[f]),h=(0,s.useMemo)((()=>f.map((e=>e.element))),[f]);return 0===f.length?null:e(s).createElement("div",null,e(s).createElement(y.default,{values:g,activeTabIndex:t,setActiveTabIndex:e=>{n(e),u.exploreAnalytics.onExploreTabClickedByUser({tabName:f[e].name})}}),e(s).createElement(m.default,{activeIndex:t,items:h}))}})),n.register("gBwyG",(function(r,l){t(r.exports,"default",(function(){return s}));var i=n("lDSNw"),a=n("jVSWn"),o=n("cZIbv");function s({activeIndex:t,items:n,animateFirstTime:r=!1}){const[l,o]=e(i).useState(!0),s=(0,a.default)(t),u=t-(s||0)>0;return(0,i.useEffect)((()=>{t!==s&&o(!1)}),[t,s,o]),e(i).createElement(d,null,n.map(((n,a)=>e(i).createElement(c,{key:`animation-slide-left-${a}`,testID:`animation-item-${a}`,active:t===a,isLeft:u,shouldAnimate:!!r||!l,inView:!u&&t===a-1||u&&t===a+1||t===a},n))))}const c=({active:t,children:n,testID:r,isLeft:l,shouldAnimate:a,inView:o})=>e(i).createElement(u,{active:t,"data-testid":r,shouldAnimate:a,isLeft:l,inView:o},n),d=o.default.div`
  position: relative;
  width: 100%;
  height: ${e=>e.height?`${e.height}px`:"auto"};
  padding-top: 16px;
`,u=o.default.div`
  display: ${e=>e.active?"block":"none"};
  visibility: ${e=>e.inView?"visible":"hidden"};
  animation-name: ${e=>e.isLeft?e.active?p:f:e.active?x:m};
  animation-duration: ${e=>e.shouldAnimate?"0.5s":"0s"};
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  transition: opacity 0.5s ease-in-out;
`,p=o.keyframes`
  0% {
    left: 300px;
    opacity: 0;
  };
  100%  {
    left: 0px;
    opacity: 1
  };
`,m=o.keyframes`
  0% {
    left: 0px;
    opacity: 1;
  };
  90% {
    left: 300px;
    opacity: 0;
  };
  100%  {
    left: 600px;
    opacity: 0;
  };
`,x=o.keyframes`
  0% {
    left: -300px;
    opacity: 0;
  };
  100%  {
    left: 0px;
    opacity: 1
  };
`,f=o.keyframes`
  0% {
    left: 0px;
    opacity: 1;
  };
  90% {
    left: -300px;
    opacity: 0;
  };
  100%  {
    left: -600px;
    opacity: 0;
  };
`})),n.register("fs8H6",(function(r,l){t(r.exports,"CarouselCollections",(function(){return p}));var i=n("lDSNw"),a=n("cZIbv"),o=n("gMNJN"),s=n("iacGS"),c=n("h868b"),d=n("aKaH8"),u=n("ifWd7");function p(){var t;const{isLoading:n,error:r,data:l}=o.hooks.useExploreRecommendedCollections(),a=(0,i.useCallback)(((t,n)=>e(i).createElement(m,{href:t.marketplacePages[0].collectionUrl},e(i).createElement(u.CarouselCardContainer,{key:`carousel-card-collections-${n}`,onPress:()=>{s.exploreAnalytics.onExploreCarouselItemClickedByUser({datasourceId:(null==l?void 0:l.uuid)||"",carouselName:"collections",itemDetails:{position:n,title:t.name,id:t.id}})}},e(i).createElement(d.CarouselCardCollection,{collection:t})))),[null==l?void 0:l.uuid]);return e(i).createElement(c.default,{name:"collections",items:l?l.data:[],renderCard:a,isLoading:n,isEmpty:!(!r||(null==l?void 0:l.data)&&0!==(null===(t=null==l?void 0:l.data)||void 0===t?void 0:t.length))})}const m=a.default.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  text-decoration: none;
  display: contents;
`})),n.register("h868b",(function(r,l){t(r.exports,"default",(function(){return b}));var i=n("bK93X"),a=n("7dqns"),o=n("c1thM"),s=n("1bdlq"),c=n("8GcfJ"),d=n("lDSNw"),u=n("cZIbv"),p=n("aanFI"),m=n("iacGS"),x=n("1GaZ5"),f=n("fwQxH");const g=-1*(x.EXPLORE_CARD_SIZE+8),h={type:"spring",stiffness:256.1,damping:24,mass:1},E=2;function b({items:t,renderCard:n,isLoading:r,isEmpty:l,name:o}){const[u,x]=(0,d.useState)(0),[b,S]=(0,d.useState)(!1),C=(0,s.useMotionValue)(0),I=(0,d.useMemo)((()=>g*(t.length-E)),[t]),L=(0,d.useCallback)((e=>e<0?0:e>t.length-1?t.length-1:e),[t]),D=(0,d.useCallback)((()=>L(Math.round(C.get()/g))),[C,L]);(0,c.useMotionValueEvent)(C,"change",(()=>{x(D())}));const N=(0,d.useCallback)((e=>{const t=L(e)*g;(0,i.animate)(C,t,h),m.exploreAnalytics.onExploreCarouselDragged({listName:o})}),[L,C,o]),P={fill:"#222",width:16,height:16};return r?e(d).createElement(f.CarouselSkeleton,null):l?null:e(d).createElement(w,null,e(d).createElement(a.AnimatePresence,{initial:!1},u>=1&&e(d).createElement(v,{onClick:()=>N(u-1)},e(d).createElement(p.IconArrowLeftThin,Object.assign({},P)))),e(d).createElement(a.AnimatePresence,{initial:!1},u<=t.length-E-1&&e(d).createElement(v,{isRight:!0,onClick:()=>N(u+1)},e(d).createElement(p.IconArrowRightThin,Object.assign({},P)))),e(d).createElement(k,{style:{x:C},drag:t.length>E?"x":void 0,dragConstraints:{left:I,right:0},onDragStart:()=>S(!0),onDragEnd:()=>{S(!1),N(D()),m.exploreAnalytics.onExploreCarouselDragged({listName:o})}},t.map(((r,l)=>e(d).createElement(y,{key:`carousel-item-${l}`,isLast:l===t.length-1,onClick:e=>{b&&(e.stopPropagation(),e.preventDefault())},transition:{type:"spring",damping:20,stiffness:400,duration:.6,mass:1},whileHover:{scale:1.05}},n(r,l))))))}const w=u.default.div`
  width: 100vw;
  margin-bottom: 24px;
`,k=(0,u.default)(o.motion.div)`
  display: flex;
  flex-direction: row;
  padding: 0 16px;
`,y=(0,u.default)(o.motion.div)`
  position: relative;
  margin-right: ${e=>e.isLast?0:8}px;
`,v=(0,u.default)(o.motion.div).attrs({transition:{ease:[.16,1,.3,1],duration:.5},initial:{opacity:0,translateY:8},animate:{opacity:1,translateY:0},exit:{opacity:0,translateY:8}})`
  background: #ab9ff2;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  left: ${e=>e.isRight?"auto":"4px"};
  right: ${e=>e.isRight?"4px":"auto"};
  top: ${x.EXPLORE_CARD_SIZE/2}px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow:
    0px 1px 2px 0px rgba(0, 0, 0, 0.19),
    0px 3px 3px 0px rgba(0, 0, 0, 0.17),
    0px 7px 4px 0px rgba(0, 0, 0, 0.1),
    0px 12px 5px 0px rgba(0, 0, 0, 0.03),
    0px 18px 5px 0px rgba(0, 0, 0, 0);
`})),n.register("8GcfJ",(function(e,r){t(e.exports,"useMotionValueEvent",(function(){return i}));var l=n("lDSNw");function i(e,t,n){(0,l.useInsertionEffect)((()=>e.on(t,n)),[e,t,n])}})),n.register("fwQxH",(function(r,l){t(r.exports,"CarouselSkeleton",(function(){return c}));var i=n("lDSNw"),a=n("cZIbv"),o=n("hjnIF"),s=n("1GaZ5");function c({items:t=10}){const n=(0,i.useMemo)((()=>{const e=[];for(let n=0;n<t;n++)e.push(n);return e}),[t]);return e(i).createElement(u,null,n.map((t=>e(i).createElement(d,{key:t}))))}function d(){return e(i).createElement(p,null,e(i).createElement(x,null,e(i).createElement(f,null,e(i).createElement(o.SkeletonLoader,{width:"90px",height:"16px",marginBottom:"4px",borderRadius:"16px"}),e(i).createElement(o.SkeletonLoader,{width:"64px",height:"16px",borderRadius:"16px"})),e(i).createElement(m,null)))}const u=a.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
  margin-bottom: 24px;
`,p=(0,a.default)(o.SkeletonLoader)`
  background: #323232;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 6px 8px 8px 12px;

  margin-right: 8px;
  border-radius: 16px;
  height: ${s.EXPLORE_CARD_SIZE_PX};
  width: ${s.EXPLORE_CARD_SIZE_PX};
  min-width: ${s.EXPLORE_CARD_SIZE_PX};
`,m=(0,a.default)(o.SkeletonLoader)`
  background: ${e=>e.theme.skeletonLight};
  border-radius: 14px;
  height: 48px;
  width: 48px;
  margin-bottom: 8px;
`,x=a.default.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`,f=a.default.div`
  display: flex;

  flex-direction: column;
  justify-content: flex-end;
`})),n.register("aKaH8",(function(r,l){t(r.exports,"CarouselCardCollection",(function(){return u}));var i=n("4y59b"),a=n("3yHS8"),o=n("lDSNw"),s=n("gmVmN"),c=n("cZIbv"),d=n("ctrIg");const u=({collection:t})=>{const n=(0,o.useMemo)((()=>{const n=new(e(a))(t.floorPrices[0].value,10).dividedBy(new(e(a))(10).pow(t.floorPrices[0].paymentToken.decimals)).toNumber();return`${(0,s.formatNumber)(n)} ${t.floorPrices[0].paymentToken.symbol} `}),[t.floorPrices]);return e(o).createElement(d.CarouselBackgroundImageCard,{src:t.imageUrl},e(o).createElement(p,null,e(o).createElement("div",null,e(o).createElement(m,null,(0,i.truncateString)(t.name,9)),e(o).createElement(x,null,n))))},p=c.default.div`
  width: 100%;
  padding: 8px 12px;
`,m=c.default.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
`,x=c.default.div`
  font-weight: 600;
  color: ${e=>e.theme.grayLight};
  font-size: 14px;
  line-height: 18px;
`})),n.register("ctrIg",(function(r,l){t(r.exports,"CarouselBackgroundImageCard",(function(){return c}));var i=n("lDSNw"),a=n("cZIbv"),o=n("c6Gae"),s=n("1GaZ5");const c=({src:t,children:n})=>e(i).createElement(e(i).Fragment,null,e(i).createElement(d,{src:t}),e(i).createElement(u,null,n)),d=(0,a.default)(o.PImage)`
  width: ${s.EXPLORE_CARD_SIZE_PX};
  height: ${s.EXPLORE_CARD_SIZE_PX};
  border-radius: 16px;
`,u=a.default.div`
  position: absolute;
  left: 0;
  background: rgba(24, 24, 24, 0.8);
  backdrop-filter: blur(24px);
  width: 100%;
  height: 54px;

  /* reduce by 1 pixel to prevent border-radius clipping issue */
  bottom: -1px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`})),n.register("ifWd7",(function(r,l){t(r.exports,"CarouselCardContainer",(function(){return s}));var i=n("lDSNw"),a=n("cZIbv"),o=n("1GaZ5");function s({children:t,onPress:n}){return e(i).createElement(c,{onClick:n},t,e(i).createElement(d,null))}const c=a.default.div`
  width: ${o.EXPLORE_CARD_SIZE_PX};
  height: ${o.EXPLORE_CARD_SIZE_PX};
  position: relative;
  cursor: pointer;
  overflow: hidden;
`,d=a.default.div`
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
`})),n.register("iBj6N",(function(r,l){t(r.exports,"CarouselSites",(function(){return m}));var i=n("4y59b"),a=n("lDSNw"),o=n("cZIbv"),s=n("gMNJN"),c=n("iacGS"),d=n("h868b"),u=n("ifWd7"),p=n("i68Tg");function m(){var t;const{isLoading:n,error:r,data:l}=s.hooks.useExploreRecommendedSites(),o=(0,a.useCallback)(((t,n)=>e(a).createElement(x,{key:`carousel-card-sites-${n}`,href:(0,i.formatSearchURI)(t.domain)},e(a).createElement(u.CarouselCardContainer,{onPress:()=>{c.exploreAnalytics.onExploreCarouselItemClickedByUser({datasourceId:(null==l?void 0:l.uuid)||"",carouselName:"sites",itemDetails:{position:n,title:t.name,id:t.id}})}},e(a).createElement(p.CarouselCardSite,{site:t})))),[null==l?void 0:l.uuid]);return e(a).createElement(d.default,{name:"sites",items:l?l.data:[],renderCard:o,isLoading:n,isEmpty:!(!r||(null==l?void 0:l.data)&&0!==(null===(t=null==l?void 0:l.data)||void 0===t?void 0:t.length))})}const x=o.default.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  text-decoration: none;
  display: contents;
`})),n.register("i68Tg",(function(r,l){t(r.exports,"CarouselCardSite",(function(){return d}));var i=n("lMzyG"),a=n("lDSNw"),o=n("cZIbv"),s=n("c6Gae"),c=n("ctrIg");const d=({site:t})=>{const{t:n}=(0,i.useTranslation)();return e(a).createElement(c.CarouselBackgroundImageCard,{src:t.backgroundImageUrl},e(a).createElement(u,null,e(a).createElement(x,null,e(a).createElement(p,null,t.name),e(a).createElement(m,null,n(`exploreCategory${t.category}`))),e(a).createElement(f,null,e(a).createElement(g,{src:t.imageUrl}))))},u=o.default.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 6px 12px 8px 12px;
`,p=o.default.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  width: 100%;
  white-space: nowrap;
  -webkit-mask-image: linear-gradient(91deg, black 85%, transparent);
`,m=o.default.div`
  color: ${e=>e.theme.grayLight};
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
`,x=o.default.div`
  flex: 1;
  width: 100%;
  overflow-x: hidden;
`,f=o.default.div`
  transform: translateY(-12px);
`,g=(0,o.default)(s.PImage)`
  width: 48px;
  height: 48px;
  border-radius: 14px;
`})),n.register("9yEL6",(function(r,l){t(r.exports,"CarouselTokens",(function(){return p}));var i=n("lDSNw"),a=n("gMNJN"),o=n("iacGS"),s=n("k9Ru9"),c=n("h868b"),d=n("ifWd7"),u=n("j8AfH");function p(){var t;const{isLoading:n,error:r,data:l}=a.hooks.useExploreRecommendedTokens(),p=(0,s.useExploreToSwap)(),m=(0,i.useCallback)(((t,n)=>e(i).createElement(d.CarouselCardContainer,{key:`carousel-card-token-${n}`,onPress:()=>{p(t),o.exploreAnalytics.onExploreCarouselItemClickedByUser({datasourceId:(null==l?void 0:l.uuid)||"",carouselName:"tokens",itemDetails:{position:n,title:t.tokens[0].data.name||t.id,id:t.id||""}})}},e(i).createElement(u.CarouselCardToken,{token:t}))),[null==l?void 0:l.uuid,p]);return e(i).createElement(c.default,{name:"tokens",items:l?l.data:[],renderCard:m,isLoading:n,isEmpty:!(!r||(null==l?void 0:l.data)&&0!==(null===(t=null==l?void 0:l.data)||void 0===t?void 0:t.length))})}})),n.register("k9Ru9",(function(e,r){t(e.exports,"useExploreToSwap",(function(){return c}));var l=n("belzv"),i=n("gYh0e"),a=n("lDSNw"),o=n("lz7nT"),s=n("8182A");const c=()=>{const e=(0,o.useNavigate)();return(0,a.useCallback)((t=>{const n=(0,i.getFungibleCaip19FromFungible)(t.tokens[0]),r=(0,l.encodeCaip19)(n);e(`/${s.Path.Swap}?buyFungible=${r}`)}),[e])}})),n.register("j8AfH",(function(r,l){t(r.exports,"CarouselCardToken",(function(){return u}));var i=n("4y59b"),a=n("lDSNw"),o=n("gmVmN"),s=n("cZIbv"),c=n("c6Gae"),d=n("1GaZ5");const u=({token:t})=>{const n=t.tokens[0];return e(a).createElement(p,null,e(a).createElement(m,null,e(a).createElement(x,null,e(a).createElement(f,null,(0,i.truncateString)(n.data.name||"",12)),e(a).createElement(g,null,n.data.symbol)),e(a).createElement(h,{src:n.data.logoUri||""})),e(a).createElement(E,null,e(a).createElement(b,null,(0,o.formatDollarAmount)(parseFloat(t.currentPrice),{minimumAmount:1e-6,decimalFormatSmallNumbers:"0.[000000]",roundDecimals:!0})),e(a).createElement(w,{green:parseFloat(t.priceChangePercentage)>=0},(0,o.formatNumber)(parseFloat(t.priceChangePercentage),{includePlusPrefix:!0,suffix:"%"}))))},p=s.default.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${d.EXPLORE_CARD_SIZE_PX};
  width: ${d.EXPLORE_CARD_SIZE_PX};
  padding: 10px 12px;
  background-color: #2c2d30;
  border-radius: 16px;
`,m=s.default.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`,x=s.default.div`
  height: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3px;
`,f=s.default.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,g=s.default.div`
  color: ${e=>e.theme.grayLight};
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`,h=(0,s.default)(c.PImage)`
  width: 32px;
  height: 32px;
  border-radius: 100px;
`,E=s.default.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`,b=s.default.div`
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.44px;
`,w=s.default.div`
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: ${e=>e.green?e.theme.green:e.theme.alert};
`})),n.register("hTknS",(function(r,l){t(r.exports,"default",(function(){return h}));var i=n("belzv"),a=n("lBuGR"),o=n("lMzyG"),s=n("c1thM"),c=n("lDSNw"),d=n("cZIbv"),u=n("2tQxs"),p=n("aanFI"),m=n("gMNJN"),x=n("a8kcR"),f=n("iacGS");const g="200px";function h({tab:t}){const{data:n,mutate:r}=m.hooks.useExploreSelectedNetwork(),{currentSortOption:l,getSortOptions:i,setSortOption:a}=m.hooks.useExploreSortOption(),o=i(t),s=l(t);return e(c).createElement(k,null,e(c).createElement(w,{value:s,options:o,onChange:e=>{(e=>{a(t,e)})(e),f.exploreAnalytics.onExploreFilterChangedByUser({filterType:"sort",filterValue:e,listName:t})}}),e(c).createElement(b,{value:n,onChange:e=>{r(e),f.exploreAnalytics.onExploreFilterChangedByUser({filterType:"network",filterValue:e,listName:t})}}))}const E=({networkLabel:t,NetworkIcon:n})=>{const[r,l]=e(c).useState(!1);return e(c).createElement(v,{onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1)},e(c).createElement("span",{style:{color:r?x.theme.purple:x.theme.white}},t)," ",e(c).createElement(n,{width:20,height:20,fill:r?x.theme.purple:x.theme.white}))};function b({value:t,onChange:n}){const{t:r}=(0,o.useTranslation)(),{data:[l,s]}=(0,a.useFeatureFlags)(["enable-bitcoin","enable-bitcoin-explore"]),d=m.hooks.useEnabledNetworkIDs(),x=(0,c.useMemo)((()=>{const t=[];return d.includes(i.SolanaNetworkID.Mainnet)&&t.push({label:e(c).createElement(E,{networkLabel:"Solana",NetworkIcon:p.IconChainSolana}),key:"Solana",onClick:()=>n(i.SolanaNetworkID.Mainnet)}),d.includes(i.EthereumNetworkID.Mainnet)&&t.push({label:e(c).createElement(E,{networkLabel:"Ethereum",NetworkIcon:p.IconChainEthereum}),key:"Ethereum",onClick:()=>n(i.EthereumNetworkID.Mainnet)}),d.includes(i.PolygonNetworkID.Mainnet)&&t.push({label:e(c).createElement(E,{networkLabel:"Polygon",NetworkIcon:p.IconChainPolygon}),key:"Polygon",onClick:()=>n(i.PolygonNetworkID.Mainnet)}),l&&d.includes(i.BitcoinNetworkID.Mainnet)&&s&&t.push({label:e(c).createElement(E,{networkLabel:"Bitcoin",NetworkIcon:p.IconChainBitcoin}),key:"Bitcoin",onClick:()=>n(i.BitcoinNetworkID.Mainnet)}),t.length>1&&t.push({label:e(c).createElement(E,{networkLabel:r("exploreFilterByall_networks"),NetworkIcon:p.IconStackedLayers}),key:"all_networks",onClick:()=>n("all_networks")}),t}),[n,r,l,s,d]);return x.length>1?e(c).createElement(y,null,e(c).createElement(u.Dropdown,{items:x,dropdownWidth:g,noDropdownItemPadding:!0},e(c).createElement(S,null,e(c).createElement(C,null,(e=>{switch(e){case i.SolanaNetworkID.Mainnet:return"Solana";case i.EthereumNetworkID.Mainnet:return"Ethereum";case i.PolygonNetworkID.Mainnet:return"Polygon";case i.BitcoinNetworkID.Mainnet:return"Bitcoin";case"all_networks":return r("exploreFilterByall_networks");default:return""}})(t)),e(c).createElement(p.IconChevronDown,{width:12,height:12,fill:"#999999"})))):null}function w({options:t,value:n,onChange:r}){const{t:l}=(0,o.useTranslation)(),i=(0,c.useMemo)((()=>t.map((e=>({label:l(`exploreSortBy${e}`),key:e,onClick:()=>{r(e)}})))),[r,t,l]);return e(c).createElement(y,null,e(c).createElement(u.Dropdown,{items:i,dropdownWidth:g},e(c).createElement(S,{"data-testid":`exploreSortBy${n}-button`},e(c).createElement(C,null,l(`exploreSortBy${n}`)),e(c).createElement(p.IconChevronDown,{width:12,height:12,fill:"#999999"}))))}const k=d.default.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 8px 16px 4px 16px;
`,y=d.default.div`
  margin-right: 4px;
`,v=d.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 7px 0;
`,S=(0,d.default)(s.motion.div).attrs({activeOpacity:.6,whileHover:{background:"#3B3C40"},transition:{ease:[.5,1,.89,1],duration:.1},style:{background:"#2a2a2a"}})`
  align-items: center;
  justify-content: space-between;
  padding: 6px 12px;
  border-radius: 48px;
  display: flex;
  height: 32px;
  cursor: pointer;
`,C=d.default.div`
  margin-right: 6px;
  color: ${e=>e.theme.white};
  font-size: 15px;
  font-weight: 600;
`})),n.register("5oT4X",(function(r,l){t(r.exports,"ExploreFiltersSkeleton",(function(){return s}));var i=n("lDSNw"),a=n("cZIbv"),o=n("hjnIF");function s(){return e(i).createElement(c,null,e(i).createElement(d,{width:"99px",height:"26px"}),e(i).createElement(d,{width:"124px",height:"26px"}))}const c=a.default.div`
  display: flex;
  flex-direction: row;
  padding: 8px 16px 16px 16px;
`,d=(0,a.default)(o.SkeletonLoader)`
  background: ${e=>e.theme.skeletonLight};
  border-radius: 48px;
  margin-right: 4px;
`})),n.register("706Mc",(function(r,l){t(r.exports,"ExploreListCollections",(function(){return f}));var i=n("lMzyG"),a=n("lDSNw"),o=n("cZIbv"),s=n("gMNJN"),c=n("iacGS"),d=n("fgEo1"),u=n("60clc"),p=n("ekffL"),m=n("7zA4G"),x=n("awIgE");function f(){const{isLoading:t,error:n,isFetching:r,data:l}=s.hooks.useExploreCollections(),{t:o}=(0,i.useTranslation)();return n&&!l?e(a).createElement(d.ExploreNetworkError,null):e(a).createElement(u.default,{items:l?l.data:[],renderItem:(t,n)=>e(a).createElement(g,{key:`carousel-card-collections-${n}`,href:t.marketplacePages[0].collectionUrl},e(a).createElement(m.ListItemContainer,{onPress:()=>{c.exploreAnalytics.onExploreListItemClickedByUser({datasourceId:(null==l?void 0:l.uuid)||"",listName:"collections",itemDetails:{position:n,title:t.name,id:t.id}})}},e(a).createElement(p.ListItemCollection,{collection:t,position:n+1}))),listName:"collections",header:e(a).createElement(x.ListHeader,{titles:["#",o("exploreFloor"),o("exploreVolume")]}),isLoading:!(!t&&!r||l)})}const g=o.default.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  text-decoration: none;
  display: contents;
`})),n.register("fgEo1",(function(r,l){t(r.exports,"ExploreNetworkError",(function(){return f}));var i=n("lDSNw"),a=n("bjaYq"),o=n("cZIbv"),s=n("aanFI"),c=n("6l2nq"),d=n("kn91D");const u=o.default.div`
  padding: 0 16px;
  margin-bottom: 16px;
`,p=o.default.div`
  padding: 16px;
  border-radius: 9px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #2a2a2a;
`,m=(0,o.default)(c.Row).attrs({align:"center",justify:"center"})`
  width: 24px;
  height: 24px;
`,x=(0,o.default)(d.Text).attrs({size:14,weight:400,lineHeight:21,marginLeft:8,color:"#EB3742"})``,f=()=>{const{t:t}=(0,a.useTranslation)();return e(i).createElement(u,{"data-testid":"explore-network-error"},e(i).createElement(p,null,e(i).createElement(m,null,e(i).createElement(s.IconExclamationMarkCircle,{width:18,exclamationFill:"transparent",circleFill:"#EB3742"})),e(i).createElement(x,null,t("exploreNetworkError"))))}})),n.register("60clc",(function(r,l){t(r.exports,"default",(function(){return d}));var i=n("7dqns"),a=n("c1thM"),o=n("lDSNw"),s=n("cZIbv"),c=n("h9SiU");function d({items:t,listName:n,renderItem:r,header:l,isLoading:a}){return e(o).createElement(u,null,l,e(o).createElement(i.AnimatePresence,null,a&&e(o).createElement(m,null,e(o).createElement(c.ListSkeleton,null))),!a&&t.map(((t,l)=>e(o).createElement(p,{key:`list-item-${n}-${l}`,"data-testid":`list-item-${n}-${l}`,whileHover:{background:"#333"},style:{background:"#222"},transition:{ease:[.5,1,.89,1],duration:.1}},r(t,l)))))}const u=s.default.div`
  flex-direction: column;
  width: 100%;
`,p=(0,s.default)(a.motion.div)`
  flex: 1;
  width: 100%;
  cursor: pointer;
`,m=(0,s.default)(a.motion.div).attrs({initial:{opacity:1},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2,ease:"easeInOut"}})``})),n.register("h9SiU",(function(r,l){t(r.exports,"ListSkeleton",(function(){return s}));var i=n("lDSNw"),a=n("cZIbv"),o=n("hjnIF");function s({items:t=10}){const n=(0,i.useMemo)((()=>{const e=[];for(let n=0;n<t;n++)e.push(n);return e}),[t]);return e(i).createElement(d,{"data-testid":"explore-list-skeleton"},n.map(((t,n)=>e(i).createElement(c,{key:t,index:n+1}))))}function c({index:t}){return e(i).createElement(u,null,e(i).createElement(p,null,e(i).createElement(x,null,e(i).createElement(f,null,t)),e(i).createElement(g,null),e(i).createElement("div",null,e(i).createElement(o.SkeletonLoader,{width:"95px",height:"20px",marginBottom:"4px",borderRadius:"16px"}),e(i).createElement(o.SkeletonLoader,{width:"69px",height:"20px",borderRadius:"16px"}))),e(i).createElement(m,null,e(i).createElement(o.SkeletonLoader,{width:"69px",height:"20px",marginBottom:"4px",borderRadius:"16px"}),e(i).createElement(o.SkeletonLoader,{width:"38px",height:"20px",borderRadius:"16px"})))}const d=a.default.div`
  padding: 0 16px;
  flex-direction: column;
  width: 100%;
`,u=a.default.div`
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 10px;
  display: flex;
  padding: 12px 0;
`,p=a.default.div`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  display: flex;
`,m=a.default.div`
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  text-align: right;
`,x=a.default.div`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`,f=a.default.div`
  font-size: 14px;
  line-height: 18px;
  color: #777777;
`,g=(0,a.default)(o.SkeletonLoader)`
  background: ${e=>e.theme.skeletonLight};
  border-radius: 14px;
  height: 48px;
  width: 48px;
`})),n.register("ekffL",(function(r,l){t(r.exports,"ListItemCollection",(function(){return p}));var i=n("4y59b"),a=n("3yHS8"),o=n("lDSNw"),s=n("gmVmN"),c=n("cZIbv"),d=n("c6Gae"),u=n("hjnIF");const p=({collection:t,position:n})=>{const r=(0,o.useMemo)((()=>{const n=new(e(a))(t.floorPrices[0].value,10).dividedBy(new(e(a))(10).pow(t.floorPrices[0].paymentToken.decimals)).toNumber();return`${(0,s.formatNumber)(n)} ${t.floorPrices[0].paymentToken.symbol} `}),[t.floorPrices]),l=(0,o.useMemo)((()=>{const n=new(e(a))(t.volume||0,10).dividedBy(new(e(a))(10).pow(t.floorPrices[0].paymentToken.decimals)).toNumber();return`${(0,s.formatNumber)(n,{compact:n>=1e3})} ${t.floorPrices[0].paymentToken.symbol}`}),[t.volume,t.floorPrices]);return e(o).createElement(m,null,e(o).createElement(x,null,e(o).createElement(g,null,e(o).createElement(h,null,n)),e(o).createElement(y,{src:t.imageUrl,width:48,height:48,fallback:e(o).createElement(u.SkeletonLoader,{borderRadius:"14px",width:"48px",height:"48px"}),loader:e(o).createElement(u.SkeletonLoader,{borderRadius:"14px",width:"48px",height:"48px"})}),e(o).createElement("div",null,e(o).createElement(E,null,(0,i.truncateString)(t.name,15)),e(o).createElement(b,null,r))),e(o).createElement(f,null,e(o).createElement(w,null,l),e(o).createElement(k,{green:t.volumePercentChange>=0},(0,s.formatNumber)(t.volumePercentChange,{compact:!0,includePlusPrefix:!0}),"%")))},m=c.default.div`
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 10px;
  display: flex;
`,x=c.default.div`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  display: flex;
`,f=c.default.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  text-align: right;
`,g=c.default.div`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`,h=c.default.div`
  font-size: 14px;
  line-height: 18px;
  color: #777777;
  font-weight: 600;
`,E=c.default.div`
  font-size: 17px;
  line-height: 22px;
  height: 22px;
  overflow-x: hidden;
`,b=c.default.div`
  font-size: 15px;
  line-height: 20px;
  color: ${e=>e.theme.grayLight};
`,w=c.default.div`
  font-size: 17px;
  line-height: 22px;
  white-space: nowrap;
`,k=c.default.div`
  font-size: 15px;
  line-height: 20px;
  color: ${e=>e.green?e.theme.green:e.theme.alert};
  text-align: right;
`,y=(0,c.default)(d.PImage)`
  border-radius: 14px;
  width: 48px;
  height: 48px;
`})),n.register("7zA4G",(function(r,l){t(r.exports,"ListItemContainer",(function(){return a}));var i=n("lDSNw");function a({children:t,onPress:n}){return e(i).createElement(o,{onClick:n},t)}const o=n("cZIbv").default.div`
  width: 100%;
  padding: 12px 16px;
`})),n.register("awIgE",(function(r,l){t(r.exports,"ListHeader",(function(){return o}));var i=n("lDSNw"),a=n("cZIbv");const o=({titles:t})=>e(i).createElement(s,null,e(i).createElement(c,null,e(i).createElement(p,null,e(i).createElement(u,null,t[0])),e(i).createElement(u,null,t[1])),e(i).createElement(d,null,e(i).createElement(u,null,t[2]))),s=a.default.div`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  display: flex;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 4px;
  padding-top: 12px;
`,c=a.default.div`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  display: flex;
`,d=a.default.div`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  display: flex;
`,u=a.default.div`
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  color: ${e=>e.theme.grayLight};
`,p=a.default.div`
  width: 74px;
  padding-left: 4px;
`})),n.register("dA6Zr",(function(r,l){t(r.exports,"ExploreListSites",(function(){return x}));var i=n("4y59b"),a=n("lDSNw"),o=n("cZIbv"),s=n("gMNJN"),c=n("iacGS"),d=n("fgEo1"),u=n("60clc"),p=n("7zA4G"),m=n("7Kfe9");function x(){const{isLoading:t,isFetching:n,error:r,data:l}=s.hooks.useExploreSites();return r&&!l?e(a).createElement(d.ExploreNetworkError,null):e(a).createElement(u.default,{items:l?l.data:[],renderItem:(t,n)=>e(a).createElement(f,{key:`carousel-card-sites-${n}`,href:(0,i.formatSearchURI)(t.domain)},e(a).createElement(p.ListItemContainer,{onPress:()=>{c.exploreAnalytics.onExploreListItemClickedByUser({datasourceId:(null==l?void 0:l.uuid)||"",listName:"sites",itemDetails:{position:n,title:t.name,id:t.id}})}},e(a).createElement(m.ListItemSite,{site:t,position:n+1}))),listName:"sites",isLoading:!(!t&&!n||l),header:null})}const f=o.default.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  text-decoration: none;
  display: contents;
`})),n.register("7Kfe9",(function(r,l){t(r.exports,"ListItemSite",(function(){return u}));var i=n("lMzyG"),a=n("4y59b"),o=n("lDSNw"),s=n("cZIbv"),c=n("c6Gae"),d=n("hjnIF");const u=({site:t,position:n})=>{const{t:r}=(0,i.useTranslation)();return e(o).createElement(p,null,e(o).createElement(m,null,e(o).createElement(x,null,n)),e(o).createElement(h,{src:t.imageUrl,width:48,height:48,fallback:e(o).createElement(d.SkeletonLoader,{borderRadius:"14px",width:"48px",height:"48px"}),loader:e(o).createElement(d.SkeletonLoader,{borderRadius:"14px",width:"48px",height:"48px"})}),e(o).createElement("div",null,e(o).createElement(f,null,(0,a.truncateString)(t.name,15)),e(o).createElement(g,null,r(`exploreCategory${t.category}`))))},p=s.default.div`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
  display: flex;
  align-items: center;
`,m=s.default.div`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`,x=s.default.div`
  font-size: 14px;
  line-height: 18px;
  color: #777777;
  font-weight: 600;
`,f=s.default.div`
  font-size: 17px;
  line-height: 22px;
`,g=s.default.div`
  font-size: 15px;
  line-height: 20px;
  color: ${e=>e.theme.grayLight};
`,h=(0,s.default)(c.PImage)`
  border-radius: 14px;
  width: 48px;
  height: 48px;
`})),n.register("gt4Z2",(function(r,l){t(r.exports,"ExploreListTokens",(function(){return g}));var i=n("lMzyG"),a=n("lDSNw"),o=n("cZIbv"),s=n("gMNJN"),c=n("iacGS"),d=n("k9Ru9"),u=n("fgEo1"),p=n("60clc"),m=n("7zA4G"),x=n("41PSP"),f=n("awIgE");function g({displayType:t}){const{isLoading:n,isFetching:r,error:l,data:o}=s.hooks.useExploreTokens(),{t:g}=(0,i.useTranslation)(),E=(0,d.useExploreToSwap)(),b=(0,a.useMemo)((()=>{switch(t){case"market_cap":return["#",g("exploreToken"),g("exploreCap")];case"gainers":case"losers":return["#",g("exploreToken"),g("explorePrice")];default:return["#",g("exploreToken"),g("explore24hVolume")]}}),[t,g]);return l&&!o?e(a).createElement(u.ExploreNetworkError,null):e(a).createElement(p.default,{items:o?o.data:[],renderItem:(n,r)=>e(a).createElement(m.ListItemContainer,{key:`carousel-card-tokens-${r}`,onPress:()=>{E(n),c.exploreAnalytics.onExploreListItemClickedByUser({datasourceId:(null==o?void 0:o.uuid)||"",listName:"tokens",itemDetails:{position:r,title:n.tokens[0].data.name||n.id,id:n.id}})}},e(a).createElement(h,null,e(a).createElement(x.ListItemToken,{token:n,position:r+1,displayType:t}))),listName:"tokens",isLoading:!(!n&&!r||o),header:e(a).createElement(f.ListHeader,{titles:b})})}const h=o.default.div`
  cursor: pointer;
`})),n.register("41PSP",(function(r,l){t(r.exports,"ListItemToken",(function(){return u}));var i=n("4y59b"),a=n("lDSNw"),o=n("gmVmN"),s=n("cZIbv"),c=n("c6Gae"),d=n("hjnIF");const u=({token:t,position:n,displayType:r})=>{const l=t.tokens[0],s=(0,a.useMemo)((()=>{switch(r){case"market_cap":return e(a).createElement(e(a).Fragment,null,e(a).createElement(w,null,(0,o.formatDollarAmount)(parseFloat(t.marketCap)||0,{compact:!0})),e(a).createElement(k,{green:parseFloat(t.marketCapChangePercentage)>=0},(0,o.formatNumber)(parseFloat(t.marketCapChangePercentage),{includePlusPrefix:!0,suffix:"%",compact:!0})));case"volume":return e(a).createElement(e(a).Fragment,null,e(a).createElement(w,null,(0,o.formatDollarAmount)(parseFloat(t.volume)||0,{compact:!0})));default:return e(a).createElement(e(a).Fragment,null,e(a).createElement(w,null,(0,o.formatDollarAmount)(parseFloat(t.currentPrice),{minimumAmount:1e-6,decimalFormatSmallNumbers:"0.[000000]",roundDecimals:!0})),e(a).createElement(k,{green:parseFloat(t.priceChangePercentage)>=0},(0,o.formatNumber)(parseFloat(t.priceChangePercentage),{includePlusPrefix:!0,suffix:"%",compact:!0})))}}),[r,t]);return e(a).createElement(p,null,e(a).createElement(m,null,e(a).createElement(g,null,e(a).createElement(h,null,n)),e(a).createElement(y,{src:l.data.logoUri||"",width:48,height:48,fallback:e(a).createElement(S,null,e(a).createElement(v,null,l.data.symbol)),loader:e(a).createElement(d.SkeletonLoader,{borderRadius:"14px",width:"48px",height:"48px"})}),e(a).createElement(x,null,e(a).createElement(E,null,(0,i.truncateString)(l.data.name||"",15)),e(a).createElement(b,null,l.data.symbol))),e(a).createElement(f,null,s))},p=s.default.div`
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: space-between;
  gap: 10px;
  display: flex;
`,m=s.default.div`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  display: flex;
  overflow: hidden;
`,x=s.default.div`
  overflow: hidden;
`,f=s.default.div`
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  display: flex;
  flex: 1;
`,g=s.default.div`
  width: 18px;
  min-width: 18px;
  height: 18px;
  min-height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`,h=s.default.div`
  font-size: 14px;
  line-height: 18px;
  color: #777777;
  font-weight: 600;
`,E=s.default.div`
  font-size: 17px;
  line-height: 22px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,b=s.default.div`
  font-size: 15px;
  line-height: 20px;
  color: ${e=>e.theme.grayLight};
`,w=s.default.div`
  font-size: 17px;
  line-height: 22px;
`,k=s.default.div`
  font-size: 15px;
  line-height: 20px;
  color: ${e=>e.green?e.theme.green:e.theme.alert};
`,y=(0,s.default)(c.PImage)`
  width: 48px;
  height: 48px;
  border-radius: 100px;
`,v=s.default.div.attrs({numberOfLines:1})`
  color: ${e=>e.theme.white};
  font-size: 12px;
`,S=s.default.div`
  width: 48px;
  min-width: 48px;
  height: 48px;
  min-height: 48px;
  border-radius: 100px;
  background-color: ${e=>e.theme.buttonGray};
  display: flex;
  align-items: center;
  justify-content: center;
`})),n.register("YBIrC",(function(r,l){t(r.exports,"default",(function(){return u}));var i=n("c1thM"),a=n("1bdlq"),o=n("lDSNw"),s=n("cZIbv"),c=n("iacGS");const d=e=>e.reduce(((e,t)=>e+12*t.length+16),0);function u({values:t,activeTabIndex:n,setActiveTabIndex:r}){const[l,i]=(0,o.useState)(!1),s=(0,a.useMotionValue)(n>2?-1*d(t.slice(3,n+1)):0),u=(0,o.useMemo)((()=>{const e=window.innerWidth-d(t);return e<0?e:0}),[t]);return e(o).createElement(p,null,e(o).createElement(m,{drag:"x",style:{x:s},dragConstraints:{left:u,right:0},onDragStart:()=>i(!0),onDragEnd:()=>{i(!1),c.exploreAnalytics.onExploreTabTitlesDragged()}},t.map(((t,i)=>e(o).createElement(x,{"data-testid":`tab-title-${t}`,key:`tab-title-${i}`,active:n===i},e(o).createElement(f,{onClick:e=>{if(l)return e.stopPropagation(),void e.preventDefault();r(i)},isActive:n===i},t))))))}const p=s.default.div`
  border-bottom: 1px solid ${e=>e.theme.border};
`,m=(0,s.default)(i.motion.div)`
  display: flex;
  flex-direction: row;
  padding: 0 16px;
`,x=s.default.div`
  border-bottom-style: solid;
  border-bottom-width: ${e=>e.active?"2px":0};
  border-bottom-color: ${e=>e.active?e.theme.purple:e.theme.border};
  margin-right: 16px;
`,f=s.default.div`
  padding: 16px 0px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  color: ${e=>e.isActive?e.theme.white:e.theme.grayLight};
  transition: color 0.1s;
  transition-timing-function: cubic-bezier(0.5, 1, 0.89, 1);
  white-space: nowrap;
  &:hover {
    color: ${e=>e.theme.white};
  }
`}));
//# sourceMappingURL=ExplorePage.4e464988.js.map
define=__define;})(window.define);