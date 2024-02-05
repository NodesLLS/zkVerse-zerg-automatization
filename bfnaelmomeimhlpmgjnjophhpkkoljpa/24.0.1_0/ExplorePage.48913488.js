(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire1d24;n.register("lXzah",(function(r,l){var i;i=r.exports,Object.defineProperty(i,"__esModule",{value:!0,configurable:!0}),t(r.exports,"ExplorePageContent",(function(){return C})),t(r.exports,"default",(function(){return T}));var a=n("hM5LD"),o=n("3ljHn"),s=n("70W8C"),c=n("29o0l"),d=n("88tsI"),u=n("iQL9s"),p=n("m2d5Y"),m=n("gkfw3"),f=n("hURGI"),x=n("27SDj"),g=n("elSIy"),h=n("9EnUg"),E=n("eaUwt"),k=n("a0hzK"),w=n("4iDyO"),b=n("gX5Te"),y=n("kWfcq"),v=n("gcdBN");function C(){var t;b.hooks.useExploreLoadAllQueries();const n=(0,u.useLocation)(),{t:r}=(0,d.useTranslation)(),{data:[l]}=(0,o.useFeatureFlags)(["enable-quests"]),{error:i,refetch:m}=b.hooks.useQuests({platform:"extension",appVersion:(0,v.getManifestVersion)()}),{setActiveTab:f,activeTab:x}=(0,a.useExplore)();(0,c.useEffect)((()=>{var e;"quests"===(null===(e=n.state)||void 0===e?void 0:e.tab)&&l&&!i&&f(3)}),[null===(t=n.state)||void 0===t?void 0:t.tab,l,i,f]);const{error:C,refetch:D}=b.hooks.useLearn(),{error:T,refetch:R}=b.hooks.useExploreTokens(),{error:A,refetch:$}=b.hooks.useExploreSites(),{error:j,refetch:N}=b.hooks.useExploreCollections(),{error:M,refetch:z}=b.hooks.useExploreRecommendedTokens(),{error:B,refetch:O}=b.hooks.useExploreRecommendedSites(),{error:F,refetch:q}=b.hooks.useExploreRecommendedCollections(),_=i&&C&&T&&A&&j&&M&&B&&F,Q=(0,c.useCallback)((()=>{l&&m(),R(),$(),N(),z(),O(),q(),D()}),[m,R,$,N,z,O,q,D,l]),[U,V]=e(c).useState(""),X=(0,p.useDebouncedState)(U,250),H=e(s)((e=>{e&&y.exploreAnalytics.onExploreSearchedByUser({searchTerm:e})}),1e3);return(0,c.useEffect)((()=>{H(X)}),[X,H]),_?e(c).createElement(S,null,e(c).createElement(g.ExplorePageError,{title:r("exploreErrorTitle"),buttonText:r("exploreErrorButtonText"),description:r("exploreErrorDescription"),refetch:Q})):e(c).createElement("div",null,e(c).createElement(E.ExploreSearchHeader,{value:U,onChange:V}),e(c).createElement(L,{hide:!!X},e(c).createElement(w.ExploreTabs,null),e(c).createElement(h.Learn,null),1===x&&e(c).createElement(I,null,e(c).createElement(P,null,r("exploreTokensLegalDisclaimer")))),e(c).createElement(L,{hide:!X},e(c).createElement(k.ExploreSearchResults,{query:X})))}const S=m.default.div`
  padding: 16px;
`,L=m.default.div`
  display: ${({hide:e})=>e?"none":"initial"};
`,I=m.default.div`
  padding: 16px;
  padding-top: 0px;
`,P=(0,m.default)(x.Text)`
  color: #999;
  font-feature-settings: "calt" off;

  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
`,D=m.default.div`
  padding-top: 16px;
`;var T=()=>{const{data:[t],isLoading:n}=(0,o.useFeatureFlags)(["enable-explore-page"]);return n?null:t?e(c).createElement(a.ExploreProvider,{appVersion:(0,v.getManifestVersion)(),platform:"extension",initialTabIndex:0},e(c).createElement(C,null)):e(c).createElement(D,null,e(c).createElement(f.Quests,null))}})),n.register("hURGI",(function(r,l){t(r.exports,"Quests",(function(){return h}),(function(e){return h=e}));var i=n("4xbAj"),a=n("43063"),o=n("hnZYD"),s=n("29o0l"),c=n("gkfw3"),d=n("27SDj"),u=n("gX5Te"),p=n("gcdBN"),m=n("dzdn8"),f=n("adrCr"),x=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]])}return n};const g=e(s).memo((({quests:t,isLoading:n,titleVisible:r})=>{const{t:l}=(0,a.useTranslation)();return n?e(s).createElement("div",null,e(s).createElement(m.QuestSkeletonHeader,null),e(s).createElement(m.QuestSkeleton,null),e(s).createElement(m.QuestSkeleton,null)):e(s).createElement("div",null,r&&e(s).createElement(k,{size:22,weight:500},`${l("quests")} (${(0,o.getActiveQuestCount)(t)})`),e(s).createElement(f.QuestsList,{quests:t}))})),h=({titleVisible:t=!0})=>{const n=(()=>{const{data:e=[],isLoading:t,error:n}=u.hooks.useQuests({platform:"extension",appVersion:(0,p.getManifestVersion)()}),{data:r}=u.hooks.useSelectedMultiChainAccount(),{data:l}=u.hooks.useIsAnalyticsOptedOut();return(0,s.useMemo)((()=>({shouldShowQuests:!l&&(null==r?void 0:r.type)!==i.AccountType.ReadOnly&&!n,quests:e,isLoading:t})),[r,e,l,t,n])})(),{shouldShowQuests:r}=n,l=x(n,["shouldShowQuests"]);return r?e(s).createElement(E,{"data-testid":"quests"},e(s).createElement(g,Object.assign({},l,{titleVisible:t}))):null},E=c.default.div`
  padding: 16px;
  padding-top: 0;
`,k=(0,c.default)(d.Text)`
  margin-bottom: 17px;
`})),n.register("dzdn8",(function(r,l){t(r.exports,"Separator",(function(){return x})),t(r.exports,"QuestSkeletonHeader",(function(){return g})),t(r.exports,"QuestSkeleton",(function(){return h}));var i=n("29o0l"),a=n("gkfw3"),o=n("aWXnn"),s=n("634r8"),c=n("hiI91");const d="14px",u="8px",p="#484848",m=(0,a.default)(c.SkeletonLoader)`
  width: 100%;
  height: 144px;
  border-top-left-radius: ${u};
  border-top-right-radius: ${u};
`,f=(0,a.default)(c.SkeletonLoader).attrs({backgroundColor:"#484848",borderRadius:"8px"})``,x=a.default.div`
  background: #474747;
  height: 1px;
  opacity: 0.6;
  width: 100%;
`,g=()=>e(i).createElement(c.SkeletonLoader,{align:"center",width:"150px",height:"30px",backgroundColor:"#2D2D2D",borderRadius:u,margin:"0 auto 17px auto"}),h=()=>e(i).createElement(e(i).Fragment,null,e(i).createElement(c.SkeletonLoader,{width:"100%",height:"308px",backgroundColor:"#2D2D2D",borderRadius:u,margin:"0 0 10px 0"},e(i).createElement(o.Column,null,e(i).createElement(m,{align:"flex-start",justify:"flex-end",margin:"0 0 10px"},e(i).createElement(f,{align:"flex-start",justify:"flex-end",width:"65px",height:"20px",margin:"10px 10px 0 0",borderRadius:"32px"})),e(i).createElement(o.Column,{padding:"16px"},e(i).createElement(c.SkeletonLoader,{justify:"flex-start",width:"60px",height:d,backgroundColor:p,borderRadius:"8px",margin:"0 0 17px 0"}),e(i).createElement(c.SkeletonLoader,{justify:"flex-start",width:"125px",height:d,backgroundColor:p,borderRadius:u})),e(i).createElement(x,null),e(i).createElement(s.Row,{padding:"16px"},e(i).createElement(c.SkeletonLoader,{width:"40px",height:"40px",backgroundColor:p,borderRadius:u}),e(i).createElement(o.Column,{width:"auto",margin:"0 0 0 10px"},e(i).createElement(c.SkeletonLoader,{justify:"flex-start",width:"60px",height:d,backgroundColor:p,borderRadius:u,margin:"0 0 5px 0"}),e(i).createElement(c.SkeletonLoader,{justify:"flex-start",width:"125px",height:d,backgroundColor:p,borderRadius:u}))))))})),n.register("adrCr",(function(r,l){t(r.exports,"QuestsList",(function(){return o}));var i=n("29o0l"),a=n("jG8Ox");const o=({quests:t})=>e(i).createElement(e(i).Fragment,null,t.map((t=>e(i).createElement(a.QuestListItem,Object.assign({key:t.id},t)))))})),n.register("jG8Ox",(function(r,l){t(r.exports,"QuestListItem",(function(){return P}));var i=n("43063"),a=n("ibwoK"),o=n("hnZYD"),s=n("29o0l"),c=n("gkfw3"),d=n("43gjF"),u=n("feAoQ"),p=n("eKiPG"),m=n("hFkH3"),f=n("6UMd8"),x=n("27SDj"),g=n("hOnAa"),h=n("dzdn8"),E=n("jOfN3");const k=c.default.div`
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
`,b=c.default.div`
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
`,C=(0,c.default)(x.Text)`
  margin-bottom: 8px;
`,S=(0,c.default)(x.Text)``,L=(0,c.default)(f.Circle).attrs({diameter:32})`
  background-color: transparent;
  border: 1px solid #333333;
`,I=e(s).memo((t=>{const{expirationUnixTimeInSeconds:n,titleLong:r,imageUrl:l,description:i,isCompleted:a,isPreview:c,reward:d,onClickQuest:u,onClickQuestRewardPreview:p,onClaimQuestReward:m}=t,f=(0,o.isQuestDisabled)(t);return e(s).createElement(k,{onClick:u,isDisabled:f},e(s).createElement(b,null,e(s).createElement(y,{src:l}),e(s).createElement(E.QuestStatusBadge,{expirationUnixTimeInSeconds:n,isCompleted:a,isPreview:c}),f&&e(s).createElement(w,null)),e(s).createElement(h.Separator,null),e(s).createElement(v,null,e(s).createElement(C,{textAlign:"left",size:16,weight:500,lineHeight:19},r),e(s).createElement(S,{color:"#999",textAlign:"left",weight:400,lineHeight:17,size:14},i)),d&&e(s).createElement(e(s).Fragment,null,e(s).createElement(h.Separator,null),e(s).createElement(g.QuestRewardSection,{isQuestCompleted:a,reward:d,onClickQuestRewardPreview:p,onClaimQuestReward:m})))})),P=t=>{const n=(t=>{const{t:n}=(0,i.useTranslation)(),{id:r,titleShort:l,networkIds:o,interstitial:c,reward:f,isCompleted:g,isPreview:h,previewUrl:E}=t,{handleShowModalVisibility:k,handleHideModalVisibility:w}=(0,u.useModals)(),b=(0,d.useDeepLink)(),y=(0,s.useCallback)((t=>{if(h&&null!=E)return p.questAnalytics.onQuestPreviewUrlClick({questId:r,shortName:l},E),void b(t,{destinationType:a.DeepLinkDestination.ExternalLink,url:E});if(g||null==c)return;const{destinationType:n,url:i,lineItems:o,primaryButtonText:d,secondaryButtonText:u,title:f}=c;p.questAnalytics.onQuestSelected({questId:r,shortName:l}),k("interstitial",{bodyTitle:f,details:o.map(((t,n)=>({icon:e(s).createElement(L,null,e(s).createElement(x.Text,{size:14},n+1)),title:t.title,subtitle:t.description}))),icon:c.imageUrl,onDismiss:()=>{p.questAnalytics.onQuestInterstitialDismiss({questId:r,shortName:l})},FooterComponent:()=>e(s).createElement(m.ButtonPair,{primaryText:d,secondaryText:u,onPrimaryClicked:()=>{p.questAnalytics.onQuestInterstitialPrimaryClick({questId:r,shortName:l,buttonText:d}),b(t,{destinationType:n,url:i}),w("interstitial")},onSecondaryClicked:()=>{p.questAnalytics.onQuestInterstitialSecondaryClick({questId:r,shortName:l,buttonText:u}),w("interstitial")}})})}),[k,w,c,b,r,g,h,E,l]),v=(0,s.useCallback)((t=>{if(g||null==f||f.hasClaimed)return;t.stopPropagation();const{title:r,description:l,imageUrl:i}=f;k("interstitial",{bodyTitle:r,bodyDescription:l,icon:i,FooterComponent:()=>e(s).createElement(m.Button,{onClick:()=>w("interstitial")},n("commandDismiss"))})}),[k,w,g,f,n]),C=(0,s.useCallback)((()=>{null==f||f.hasClaimed||(p.questAnalytics.onQuestRewardClaimed({questId:r,shortName:l}),k("claimReward",{questId:r,networkIds:o,onPressDismiss:()=>w("claimReward")}))}),[f,r,o,k,w,l]);return(0,s.useMemo)((()=>Object.assign(Object.assign({},t),{onClickQuestRewardPreview:v,onClaimQuestReward:C,onClickQuest:y})),[t,y,v,C])})(t);return e(s).createElement(I,Object.assign({},n))}})),n.register("43gjF",(function(r,l){t(r.exports,"useDeepLink",(function(){return m}));var i=n("ibwoK"),a=n("29o0l"),o=n("iQL9s"),s=n("brWcm"),c=n("jOE8F"),d=n("9aR5q"),u=n("gcdBN"),p=n("jcNNm");const m=()=>{const{showSettingsMenu:t}=(0,c.useSettingsMenu)(),{showBuyFungibleSelectionModal:n}=(0,s.useLegacyModals)(),r=(0,o.useNavigate)();return(0,a.useCallback)(((l,o)=>{const{destinationType:s,url:c}=o;switch(s){case i.DeepLinkDestination.ExternalLink:(0,u.openTabAsync)({url:c});break;case i.DeepLinkDestination.Buy:n();break;case i.DeepLinkDestination.Collectibles:r(d.Path.Collectibles);break;case i.DeepLinkDestination.Explore:r(d.Path.Explore);break;case i.DeepLinkDestination.Quests:r(d.Path.Explore,{state:{tab:"quests",date:Date.now()}});break;case i.DeepLinkDestination.Swapper:r(d.Path.Swap);break;case i.DeepLinkDestination.SettingsImportSeedPhrase:(0,u.openTabAsync)({url:"onboarding.html?append=true"});break;case i.DeepLinkDestination.ConnectHardwareWallet:(0,u.openTabAsync)({url:"connect_hardware.html"});break;default:{const n=(0,p.getSanityComponentMapping)(s);if(!n)return;t(l,e(a).createElement(n,null))}}}),[r,t,n])}})),n.register("jcNNm",(function(e,r){t(e.exports,"getSanityComponentMapping",(function(){return a}));var l=n("ibwoK"),i=n("3FC78");const a=e=>{if(e===l.DeepLinkDestination.SettingsSecurityAndPrivacy)return i.MultiChainSecurity}})),n.register("eKiPG",(function(e,r){t(e.exports,"questAnalytics",(function(){return a}));var l=n("hnZYD"),i=n("twk6W");const a=new(0,l.QuestAnalytics)(i.analytics)})),n.register("hOnAa",(function(r,l){t(r.exports,"QuestRewardSection",(function(){return f}));var i=n("43063"),a=n("29o0l"),o=n("gkfw3"),s=n("hFkH3"),c=n("j81qC"),d=n("27SDj");const u=o.default.div`
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
`,f=({isQuestCompleted:t,reward:n,onClickQuestRewardPreview:r,onClaimQuestReward:l})=>{const{t:o}=(0,i.useTranslation)();return e(a).createElement(u,null,e(a).createElement("div",{style:{display:"flex"}},e(a).createElement("div",{onClick:r,style:{cursor:t?"auto":"pointer",display:"flex",flexGrow:1,marginRight:16}},e(a).createElement(p,null,e(a).createElement(c.IconReward,null)),e(a).createElement("div",null,e(a).createElement(d.Text,{color:"#999",textAlign:"left",size:13,lineHeight:16},o("reward")),e(a).createElement(d.Text,{textAlign:"left",size:14,weight:600,lineHeight:16},n.title))),t&&e(a).createElement(m,{onClick:l,disabled:n.hasClaimed},e(a).createElement(d.Text,{color:"#222",weight:600,lineHeight:16,size:13},n.hasClaimed?o("pastParticipleClaimed"):o("commandClaim")))))}})),n.register("jOfN3",(function(r,l){t(r.exports,"QuestStatusBadge",(function(){return c}));var i=n("29o0l"),a=n("gkfw3"),o=n("gX5Te"),s=n("27SDj");const c=({expirationUnixTimeInSeconds:t,isCompleted:n,isPreview:r})=>{const{status:l}=o.hooks.useQuestStatusBadge({expirationUnixTimeInSeconds:t,isCompleted:n,isPreview:r,platform:"extension"});return e(i).createElement(d,null,e(i).createElement(u,{color:l.color},l.text))},d=a.default.div`
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
`})),n.register("elSIy",(function(r,l){t(r.exports,"ExplorePageError",(function(){return h}));var i=n("29o0l"),a=n("gkfw3"),o=n("aWXnn"),s=n("j81qC"),c=n("634r8"),d=n("27SDj");const u=(0,a.default)(o.Column).attrs({align:"center"})``,p=a.default.div`
  width: 48px;
  height: 48px;
  position: relative;
  margin-bottom: 15px;
  border-radius: 100%;
  background: rgba(255, 220, 98, 0.2);
`,m=(0,a.default)(c.Row).attrs({align:"center",justify:"center"})`
  height: 100%;
`,f=(0,a.default)(d.Text).attrs({size:17,weight:500,lineHeight:22,margin:"0 0 10px 0"})``,x=(0,a.default)(d.Text).attrs({size:15,weight:500,lineHeight:21,margin:"0 0 15px 0",color:"#777777"})``,g=(0,a.default)(d.Text).attrs({size:16,weight:500,lineHeight:22,margin:"0",color:"#AB9FF2"})``,h=e(i).memo((t=>e(i).createElement(u,null,e(i).createElement(p,null,e(i).createElement(m,null,e(i).createElement(s.IconExclamationMarkCircle,{width:22,exclamationFill:"transparent",circleFill:"#FFE920"}))),e(i).createElement(f,null,t.title),e(i).createElement(x,null,t.description),e(i).createElement(g,{onClick:t.refetch},t.buttonText))))})),n.register("9EnUg",(function(r,l){t(r.exports,"Learn",(function(){return f}));var i=n("43063"),a=n("29o0l"),o=n("gkfw3"),s=n("27SDj"),c=n("gX5Te"),d=n("koKmj"),u=n("kWfcq"),p=n("4LOwo"),m=n("aErJr");const f=()=>{const{t:t}=(0,i.useTranslation)(),{isLoading:n,data:r,error:l}=c.hooks.useLearn(),o=(0,a.useRef)(null),f=(0,d.useOnScreen)(o);return(0,a.useEffect)((()=>{f&&u.exploreAnalytics.onExploreLearnSectionScrolledIntoView()}),[f]),l&&!n&&!r||0===(null==r?void 0:r.data.length)?null:e(a).createElement(x,{"data-testid":"learn-container",ref:o},e(a).createElement(g,null,e(a).createElement(s.Text,{size:22,weight:500,textAlign:"left"},t("exploreLearn"))),n?e(a).createElement(m.LearnSkeleton,null):e(a).createElement(p.LearnCards,{items:(null==r?void 0:r.data)||[]}))},x=o.default.div`
  padding: 0 16px 16px 16px;
`,g=o.default.div`
  padding-top: 8px;
  padding-bottom: 4px;
`})),n.register("koKmj",(function(e,r){t(e.exports,"useOnScreen",(function(){return i}));var l=n("29o0l");function i(e){const[t,n]=(0,l.useState)(!1),r=e.current;return(0,l.useEffect)((()=>{if(!r)return;const e=new IntersectionObserver((([e])=>n(e.isIntersecting)));return e.observe(r),()=>e.disconnect()}),[r]),t}})),n.register("kWfcq",(function(e,r){t(e.exports,"exploreAnalytics",(function(){return a}));var l=n("hM5LD"),i=n("twk6W");const a=new(0,l.ExploreAnalytics)(i.analytics)})),n.register("4LOwo",(function(r,l){t(r.exports,"LearnCards",(function(){return p}));var i=n("29o0l"),a=n("gkfw3"),o=n("27SDj"),s=n("kWfcq"),c=n("cSCtg");const d=({item:t,position:n})=>e(i).createElement(f,{hidePointer:!0,halfWidth:"half-width"===t.layout,"data-testid":"learn-card-tip",onClick:()=>{s.exploreAnalytics.onExploreLearnItemClickedByUser({itemDetails:{position:n,id:t.id,title:t.title,type:"tip"}})}},e(i).createElement(g,{background:t.backgroundColor},e(i).createElement(h,null,e(i).createElement(E,null,e(i).createElement(y,{color:"black",opacity:.5},e(i).createElement(C,{"data-testid":"learn-card-tip-icon"},e(i).createElement("img",{width:"16px",height:"16px",src:t.icon})),t.title)),e(i).createElement(E,null,e(i).createElement(b,{opacity:.7},t.description))))),u=({item:t,position:n})=>{const r=(0,i.useCallback)((()=>{s.exploreAnalytics.onExploreLearnItemClickedByUser({itemDetails:{position:n,id:t.id,title:t.title,type:"article"}})}),[t.id,t.title,n]);return"half-width"===t.layout?e(i).createElement(x,{href:t.url,onClick:r},e(i).createElement(f,{halfWidth:!0,"data-testid":"learn-card-article-half"},e(i).createElement(g,null,e(i).createElement(w,{style:{height:"50%"}},e(i).createElement(v,{src:t.backgroundImageUrl})),e(i).createElement(k,{background:t.backgroundColor},e(i).createElement(b,null,t.title))))):e(i).createElement(x,{href:t.url,onClick:r},e(i).createElement(f,{"data-testid":"learn-card-article-full"},e(i).createElement(g,{background:t.backgroundColor},e(i).createElement(h,null,e(i).createElement(b,null,t.title),e(i).createElement(y,{color:"#474747"},t.description))),e(i).createElement(g,null,e(i).createElement(v,{src:t.backgroundImageUrl}))))},p=({items:t})=>e(i).createElement(m,{"data-testid":"learn-cards"},t.map(((t,n)=>"learnArticle"===t.type?e(i).createElement(u,{item:t,key:t.title,position:n}):e(i).createElement(d,{item:t,key:t.title,position:n})))),m=a.default.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 8px;
  gap: 8px;
`,f=a.default.div`
  border-radius: 16px;
  height: ${c.EXPLORE_CARD_SIZE_PX};
  display: flex;
  overflow: hidden;
  cursor: ${e=>e.hidePointer?"auto":"pointer"};
  width: ${e=>e.halfWidth?"calc(50% - 4px)":"auto"};
`,x=a.default.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
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
`,k=(0,a.default)(E)`
  padding: 16px;
  background: ${e=>e.background||"auto"};
`,w=(0,a.default)(E)`
  flex: 1;
`,b=(0,a.default)(o.Text)`
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
`,C=a.default.span`
  display: flex;
  margin-right: 4px;
`})),n.register("cSCtg",(function(e,r){t(e.exports,"EXPLORE_CARD_SIZE",(function(){return l})),t(e.exports,"EXPLORE_CARD_SIZE_PX",(function(){return i}));const l=(n("c8OXT").PHANTOM_WIDTH-40)/2,i=`${l}px`})),n.register("aErJr",(function(r,l){t(r.exports,"LearnSkeleton",(function(){return u}));var i=n("29o0l"),a=n("gkfw3"),o=n("hiI91"),s=n("cSCtg");const c=()=>e(i).createElement(m,null,e(i).createElement(x,null,e(i).createElement(h,{width:"110px"}),e(i).createElement(h,{width:"90px"}),e(i).createElement(h,{width:"105px"})),e(i).createElement(f,null,e(i).createElement(h,{width:"64px"}))),d=()=>e(i).createElement(m,null,e(i).createElement(x,null,e(i).createElement(h,{width:"110px"}),e(i).createElement(h,{width:"90px"}))),u=()=>e(i).createElement(p,{"data-testid":"learn-skeleton"},e(i).createElement(c,null),e(i).createElement(g,null,e(i).createElement(d,null),e(i).createElement(d,null)),e(i).createElement(c,null)),p=a.default.div`
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
`,f=a.default.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
`,x=a.default.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,g=a.default.div`
  display: flex;
  gap: 8px;
`,h=(0,a.default)(o.SkeletonLoader)`
  height: 16px;
  border-radius: 16px;
`})),n.register("eaUwt",(function(r,l){t(r.exports,"ExploreSearchHeader",(function(){return c}));var i=n("43063"),a=n("29o0l"),o=n("gkfw3"),s=n("kGh2H");const c=({value:t,onChange:n})=>{const{t:r}=(0,i.useTranslation)();return e(a).createElement(d,null,e(a).createElement(s.SearchInput,{placeholder:r("dappBrowserSearchPlaceholder"),value:t,onChange:e=>{"value"in e.target&&"string"==typeof e.target.value&&n(e.target.value)},showClearIcon:!!t,onClear:()=>{n("")}}))},d=o.default.div`
  padding: 16px;
  padding-bottom: 0;
`})),n.register("a0hzK",(function(r,l){t(r.exports,"ExploreSearchResults",(function(){return f}));var i=n("lz5BI"),a=n("29o0l"),o=n("88tsI"),s=n("gkfw3"),c=n("4Wvp3"),d=n("hiI91"),u=n("27SDj"),p=n("kWfcq"),m=n("hl21e");const f=({query:t})=>{const{dapps:n,isLoading:r}=(0,m.useExploreSearchList)(t),l=(0,a.useMemo)((()=>[...new Array(5).keys()]),[]),{t:i}=(0,o.useTranslation)();return r?e(a).createElement(x,{testId:"explore-search-results-loading",items:l.map((t=>({key:t.toString(),image:e(a).createElement(b,null),textMain:e(a).createElement(d.SkeletonLoader,{width:"96px",height:"16px",marginBottom:"2px",borderRadius:"16px"}),textSecondary:e(a).createElement(d.SkeletonLoader,{width:"62px",height:"14.5px",borderRadius:"16px"})})))}):n.length?e(a).createElement(x,{testId:"explore-search-results",items:n.map(((t,n)=>({key:t.id,href:t.href,image:e(a).createElement(c.ShapedImage,{src:t.imageUrl,size:"xsmall",shape:"square"}),textMain:e(a).createElement(k,null,t.name),textSecondary:e(a).createElement(w,null,t.category),onClick:()=>{p.exploreAnalytics.onExploreSearchItemClickedByUser({itemDetails:{position:n+1,title:t.name,id:t.id}})}})))}):e(a).createElement(y,{"data-testid":"explore-search-results-nodata"},e(a).createElement(v,null,i("dappBrowserSearchNoApps")))},x=({items:t,testId:n})=>e(a).createElement(g,{"data-testid":n},t.map(((n,r)=>e(a).createElement(h,{key:n.key,href:n.href,onClick:n.onClick,whileHover:{background:"#333"},style:{background:"#222"},transition:{ease:[.5,1,.89,1],duration:.1}},e(a).createElement("div",null,n.image),e(a).createElement(E,{isLast:r===t.length-1},n.textMain,n.textSecondary))))),g=s.default.div`
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
`,k=(0,s.default)(u.Text)`
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
`,b=(0,s.default)(d.SkeletonLoader)`
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
`})),n.register("4Wvp3",(function(r,l){t(r.exports,"ShapedImage",(function(){return f}));var i=n("29o0l"),a=n("hxhxc"),o=n("gkfw3"),s=n("6UMd8"),c=n("izu1Y"),d=n("hiI91");const u=e=>{if("number"==typeof e)return e;switch(null!=e?e:"small"){case"normal":return 48;case"small":return 32;case"xsmall":return 24;case"xxsmall":return 16}},p=(0,o.default)(c.PImage)`
  border-radius: ${e=>e.borderradius}px;
  width: 100%;
  height: 100%;
`,m=o.default.div`
  width: ${e=>e.width}px;
  height: ${e=>e.height}px;
  align-items: center;
  justify-content: center;
  background-color: ${e=>{var t;return(0,a.hexToRGB)(e.color,null!==(t=e.alpha)&&void 0!==t?t:.1)}};
`,f=({src:t,fallback:n,alt:r,size:l="normal",shape:a="circle",style:o})=>{const c=null!=n?n:e(i).createElement(x,null,"?"),f=u(l),g=u(l),h=(e=>"square"===e?6:0)(a);return"circle"===a?e(i).createElement(s.Circle,{color:"#222222",diameter:f,style:o},e(i).createElement(p,{src:t,fallback:c,alt:r||void 0,width:f,height:g,borderradius:h,loader:e(i).createElement(d.SkeletonLoader,{borderRadius:`${h}px`,width:`${f}px`,height:`${g}px`})})):e(i).createElement(m,{color:"#222222",width:f,height:g,style:o},e(i).createElement(p,{src:t,fallback:c,alt:r||"",width:f,height:g,borderradius:h,loader:e(i).createElement(d.SkeletonLoader,{borderRadius:`${h}px`,width:`${f}px`,height:`${g}px`})}))},x=o.default.div`
  font-size: 22px;
  line-height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`})),n.register("hl21e",(function(e,r){t(e.exports,"useExploreSearchList",(function(){return c}));var l=n("hM5LD"),i=n("RVqnc"),a=n("Nt4tV"),o=n("gX5Te"),s=n("g7Vwv");const c=e=>{const t=o.hooks.useEnabledNetworkIDs(),{data:n,isLoading:r}=o.hooks.useRecommendedSearchSites({networkIds:t});return{dapps:(0,s.useFuse)(n||[],(0,a.removeWebPrefixes)(e),l.FUSE_EXPLORE_DAPPS_CONFIG).map((e=>Object.assign(Object.assign({},e),{href:(0,i.getOriginAndHostname)(e.domain).origin}))),isLoading:r}}})),n.register("4iDyO",(function(r,l){t(r.exports,"ExploreTabs",(function(){return L}));var i=n("hM5LD"),a=n("3ljHn"),o=n("43063"),s=n("29o0l"),c=n("hURGI"),d=n("gX5Te"),u=n("kWfcq"),p=n("gcdBN"),m=n("eD0bo"),f=n("45Lgr"),x=n("744R7"),g=n("fhtEP"),h=n("ebFSn"),E=n("g8Ra9"),k=n("c3TWf"),w=n("lwG9A"),b=n("bQ2R6"),y=n("lzZgH");const v=()=>{const{isLoading:t,isPreviousData:n}=d.hooks.useExploreSites(),{isLoading:r}=d.hooks.useExploreSortOption();return e(s).createElement("div",null,e(s).createElement(x.CarouselSites,null),!t&&!r||n?e(s).createElement(h.default,{tab:"sites"}):e(s).createElement(E.ExploreFiltersSkeleton,null),e(s).createElement(w.ExploreListSites,null))},C=()=>{const{isLoading:t,isPreviousData:n}=d.hooks.useExploreTokens(),{isLoading:r,currentSortOption:l}=d.hooks.useExploreSortOption(),i=l("tokens");return e(s).createElement("div",null,e(s).createElement(g.CarouselTokens,null),!t&&!r||n?e(s).createElement(h.default,{tab:"tokens"}):e(s).createElement(E.ExploreFiltersSkeleton,null),e(s).createElement(b.ExploreListTokens,{displayType:i}))},S=()=>{const{isLoading:t,isPreviousData:n}=d.hooks.useExploreCollections(),{isLoading:r}=d.hooks.useExploreSortOption();return e(s).createElement("div",null,e(s).createElement(f.CarouselCollections,null),!t&&!r||n?e(s).createElement(h.default,{tab:"collections"}):e(s).createElement(E.ExploreFiltersSkeleton,null),e(s).createElement(k.ExploreListCollections,null))};function L(){const{activeTab:t,setActiveTab:n}=(0,i.useExplore)(),{t:r}=(0,o.useTranslation)(),{data:[l]}=(0,a.useFeatureFlags)(["enable-quests"]),{error:f}=d.hooks.useQuests({platform:"extension",appVersion:(0,p.getManifestVersion)()}),x=(0,s.useMemo)((()=>{const t=[{title:r("exploreApps"),name:"sites",element:e(s).createElement(v,null)},{title:r("exploreTokens"),name:"tokens",element:e(s).createElement(C,null)},{title:r("exploreCollections"),name:"collections",element:e(s).createElement(S,null)}];return l&&f?t:[...t,{title:r("quests"),name:"quests",element:e(s).createElement(c.Quests,{titleVisible:!1})}]}),[l,f,r]),g=(0,s.useMemo)((()=>x.map((e=>e.title))),[x]),h=(0,s.useMemo)((()=>x.map((e=>e.element))),[x]);return 0===x.length?null:e(s).createElement("div",null,e(s).createElement(y.default,{values:g,activeTabIndex:t,setActiveTabIndex:e=>{n(e),u.exploreAnalytics.onExploreTabClickedByUser({tabName:x[e].name})}}),e(s).createElement(m.default,{activeIndex:t,items:h}))}})),n.register("eD0bo",(function(r,l){t(r.exports,"default",(function(){return s}));var i=n("29o0l"),a=n("3w1Ia"),o=n("gkfw3");function s({activeIndex:t,items:n,animateFirstTime:r=!1}){const[l,o]=e(i).useState(!0),s=(0,a.default)(t),u=t-(s||0)>0;return(0,i.useEffect)((()=>{t!==s&&o(!1)}),[t,s,o]),e(i).createElement(d,null,n.map(((n,a)=>e(i).createElement(c,{key:`animation-slide-left-${a}`,testID:`animation-item-${a}`,active:t===a,isLeft:u,shouldAnimate:!!r||!l,inView:!u&&t===a-1||u&&t===a+1||t===a},n))))}const c=({active:t,children:n,testID:r,isLeft:l,shouldAnimate:a,inView:o})=>e(i).createElement(u,{active:t,"data-testid":r,shouldAnimate:a,isLeft:l,inView:o},n),d=o.default.div`
  position: relative;
  width: 100%;
  height: ${e=>e.height?`${e.height}px`:"auto"};
  padding-top: 16px;
`,u=o.default.div`
  display: ${e=>e.active?"block":"none"};
  visibility: ${e=>e.inView?"visible":"hidden"};
  animation-name: ${e=>e.isLeft?e.active?p:x:e.active?f:m};
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
`,f=o.keyframes`
  0% {
    left: -300px;
    opacity: 0;
  };
  100%  {
    left: 0px;
    opacity: 1
  };
`,x=o.keyframes`
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
`})),n.register("45Lgr",(function(r,l){t(r.exports,"CarouselCollections",(function(){return p}));var i=n("29o0l"),a=n("gkfw3"),o=n("gX5Te"),s=n("kWfcq"),c=n("kri2B"),d=n("erfH8"),u=n("jdxan");function p(){var t;const{isLoading:n,error:r,data:l}=o.hooks.useExploreRecommendedCollections(),a=(0,i.useCallback)(((t,n)=>e(i).createElement(m,{href:t.marketplacePages[0].collectionUrl},e(i).createElement(u.CarouselCardContainer,{key:`carousel-card-collections-${n}`,onPress:()=>{s.exploreAnalytics.onExploreCarouselItemClickedByUser({datasourceId:(null==l?void 0:l.uuid)||"",carouselName:"collections",itemDetails:{position:n,title:t.name,id:t.id}})}},e(i).createElement(d.CarouselCardCollection,{collection:t})))),[null==l?void 0:l.uuid]);return e(i).createElement(c.default,{name:"collections",items:l?l.data:[],renderCard:a,isLoading:n,isEmpty:!(!r||(null==l?void 0:l.data)&&0!==(null===(t=null==l?void 0:l.data)||void 0===t?void 0:t.length))})}const m=a.default.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  text-decoration: none;
  display: contents;
`})),n.register("kri2B",(function(r,l){t(r.exports,"default",(function(){return k}));var i=n("ha3TG"),a=n("1fwzV"),o=n("lz5BI"),s=n("kdk4D"),c=n("48pU7"),d=n("29o0l"),u=n("gkfw3"),p=n("j81qC"),m=n("kWfcq"),f=n("cSCtg"),x=n("60S1R");const g=-1*(f.EXPLORE_CARD_SIZE+8),h={type:"spring",stiffness:256.1,damping:24,mass:1},E=2;function k({items:t,renderCard:n,isLoading:r,isEmpty:l,name:o}){const[u,f]=(0,d.useState)(0),[k,C]=(0,d.useState)(!1),S=(0,s.useMotionValue)(0),L=(0,d.useMemo)((()=>g*(t.length-E)),[t]),I=(0,d.useCallback)((e=>e<0?0:e>t.length-1?t.length-1:e),[t]),P=(0,d.useCallback)((()=>I(Math.round(S.get()/g))),[S,I]);(0,c.useMotionValueEvent)(S,"change",(()=>{f(P())}));const D=(0,d.useCallback)((e=>{const t=I(e)*g;(0,i.animate)(S,t,h),m.exploreAnalytics.onExploreCarouselDragged({listName:o})}),[I,S,o]),T={fill:"#222",width:16,height:16};return r?e(d).createElement(x.CarouselSkeleton,null):l?null:e(d).createElement(w,null,e(d).createElement(a.AnimatePresence,{initial:!1},u>=1&&e(d).createElement(v,{onClick:()=>D(u-1)},e(d).createElement(p.IconArrowLeftThin,Object.assign({},T)))),e(d).createElement(a.AnimatePresence,{initial:!1},u<=t.length-E-1&&e(d).createElement(v,{isRight:!0,onClick:()=>D(u+1)},e(d).createElement(p.IconArrowRightThin,Object.assign({},T)))),e(d).createElement(b,{style:{x:S},drag:t.length>E?"x":void 0,dragConstraints:{left:L,right:0},onDragStart:()=>C(!0),onDragEnd:()=>{C(!1),D(P()),m.exploreAnalytics.onExploreCarouselDragged({listName:o})}},t.map(((r,l)=>e(d).createElement(y,{key:`carousel-item-${l}`,isLast:l===t.length-1,onClick:e=>{k&&(e.stopPropagation(),e.preventDefault())},transition:{type:"spring",damping:20,stiffness:400,duration:.6,mass:1},whileHover:{scale:1.05}},n(r,l))))))}const w=u.default.div`
  width: 100vw;
  margin-bottom: 24px;
`,b=(0,u.default)(o.motion.div)`
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
  top: ${f.EXPLORE_CARD_SIZE/2}px;
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
`})),n.register("48pU7",(function(e,r){t(e.exports,"useMotionValueEvent",(function(){return i}));var l=n("29o0l");function i(e,t,n){(0,l.useInsertionEffect)((()=>e.on(t,n)),[e,t,n])}})),n.register("60S1R",(function(r,l){t(r.exports,"CarouselSkeleton",(function(){return c}));var i=n("29o0l"),a=n("gkfw3"),o=n("hiI91"),s=n("cSCtg");function c({items:t=10}){const n=(0,i.useMemo)((()=>{const e=[];for(let n=0;n<t;n++)e.push(n);return e}),[t]);return e(i).createElement(u,null,n.map((t=>e(i).createElement(d,{key:t}))))}function d(){return e(i).createElement(p,null,e(i).createElement(f,null,e(i).createElement(x,null,e(i).createElement(o.SkeletonLoader,{width:"90px",height:"16px",marginBottom:"4px",borderRadius:"16px"}),e(i).createElement(o.SkeletonLoader,{width:"64px",height:"16px",borderRadius:"16px"})),e(i).createElement(m,null)))}const u=a.default.div`
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
`,f=a.default.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`,x=a.default.div`
  display: flex;

  flex-direction: column;
  justify-content: flex-end;
`})),n.register("erfH8",(function(r,l){t(r.exports,"CarouselCardCollection",(function(){return u}));var i=n("RVqnc"),a=n("kAKNF"),o=n("29o0l"),s=n("Nt4tV"),c=n("gkfw3"),d=n("gEaMM");const u=({collection:t})=>{const n=(0,o.useMemo)((()=>{const n=new(e(a))(t.floorPrices[0].value,10).dividedBy(new(e(a))(10).pow(t.floorPrices[0].paymentToken.decimals)).toNumber();return`${(0,s.formatNumber)(n)} ${t.floorPrices[0].paymentToken.symbol} `}),[t.floorPrices]);return e(o).createElement(d.CarouselBackgroundImageCard,{src:t.imageUrl},e(o).createElement(p,null,e(o).createElement("div",null,e(o).createElement(m,null,(0,i.truncateString)(t.name,9)),e(o).createElement(f,null,n))))},p=c.default.div`
  width: 100%;
  padding: 8px 12px;
`,m=c.default.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
`,f=c.default.div`
  font-weight: 600;
  color: ${e=>e.theme.grayLight};
  font-size: 14px;
  line-height: 18px;
`})),n.register("gEaMM",(function(r,l){t(r.exports,"CarouselBackgroundImageCard",(function(){return c}));var i=n("29o0l"),a=n("gkfw3"),o=n("izu1Y"),s=n("cSCtg");const c=({src:t,children:n})=>e(i).createElement(e(i).Fragment,null,e(i).createElement(d,{src:t}),e(i).createElement(u,null,n)),d=(0,a.default)(o.PImage)`
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
`})),n.register("jdxan",(function(r,l){t(r.exports,"CarouselCardContainer",(function(){return s}));var i=n("29o0l"),a=n("gkfw3"),o=n("cSCtg");function s({children:t,onPress:n}){return e(i).createElement(c,{onClick:n},t,e(i).createElement(d,null))}const c=a.default.div`
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
`})),n.register("744R7",(function(r,l){t(r.exports,"CarouselSites",(function(){return m}));var i=n("RVqnc"),a=n("29o0l"),o=n("gkfw3"),s=n("gX5Te"),c=n("kWfcq"),d=n("kri2B"),u=n("jdxan"),p=n("8sm7E");function m(){var t;const{isLoading:n,error:r,data:l}=s.hooks.useExploreRecommendedSites(),o=(0,a.useCallback)(((t,n)=>e(a).createElement(f,{key:`carousel-card-sites-${n}`,href:(0,i.formatSearchURI)(t.domain)},e(a).createElement(u.CarouselCardContainer,{onPress:()=>{c.exploreAnalytics.onExploreCarouselItemClickedByUser({datasourceId:(null==l?void 0:l.uuid)||"",carouselName:"sites",itemDetails:{position:n,title:t.name,id:t.id}})}},e(a).createElement(p.CarouselCardSite,{site:t})))),[null==l?void 0:l.uuid]);return e(a).createElement(d.default,{name:"sites",items:l?l.data:[],renderCard:o,isLoading:n,isEmpty:!(!r||(null==l?void 0:l.data)&&0!==(null===(t=null==l?void 0:l.data)||void 0===t?void 0:t.length))})}const f=o.default.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  text-decoration: none;
  display: contents;
`})),n.register("8sm7E",(function(r,l){t(r.exports,"CarouselCardSite",(function(){return d}));var i=n("43063"),a=n("29o0l"),o=n("gkfw3"),s=n("izu1Y"),c=n("gEaMM");const d=({site:t})=>{const{t:n}=(0,i.useTranslation)();return e(a).createElement(c.CarouselBackgroundImageCard,{src:t.backgroundImageUrl},e(a).createElement(u,null,e(a).createElement(f,null,e(a).createElement(p,null,t.name),e(a).createElement(m,null,n(`exploreCategory${t.category}`))),e(a).createElement(x,null,e(a).createElement(g,{src:t.imageUrl}))))},u=o.default.div`
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
`,f=o.default.div`
  flex: 1;
  width: 100%;
  overflow-x: hidden;
`,x=o.default.div`
  transform: translateY(-12px);
`,g=(0,o.default)(s.PImage)`
  width: 48px;
  height: 48px;
  border-radius: 14px;
`})),n.register("fhtEP",(function(r,l){t(r.exports,"CarouselTokens",(function(){return p}));var i=n("29o0l"),a=n("gX5Te"),o=n("kWfcq"),s=n("fD2Mx"),c=n("kri2B"),d=n("jdxan"),u=n("bcPY6");function p(){var t;const{isLoading:n,error:r,data:l}=a.hooks.useExploreRecommendedTokens(),p=(0,s.useExploreToSwap)(),m=(0,i.useCallback)(((t,n)=>e(i).createElement(d.CarouselCardContainer,{key:`carousel-card-token-${n}`,onPress:()=>{p(t),o.exploreAnalytics.onExploreCarouselItemClickedByUser({datasourceId:(null==l?void 0:l.uuid)||"",carouselName:"tokens",itemDetails:{position:n,title:t.tokens[0].data.name||t.id,id:t.id||""}})}},e(i).createElement(u.CarouselCardToken,{token:t}))),[null==l?void 0:l.uuid,p]);return e(i).createElement(c.default,{name:"tokens",items:l?l.data:[],renderCard:m,isLoading:n,isEmpty:!(!r||(null==l?void 0:l.data)&&0!==(null===(t=null==l?void 0:l.data)||void 0===t?void 0:t.length))})}})),n.register("fD2Mx",(function(e,r){t(e.exports,"useExploreToSwap",(function(){return c}));var l=n("iOvk1"),i=n("5slFC"),a=n("29o0l"),o=n("iQL9s"),s=n("9aR5q");const c=()=>{const e=(0,o.useNavigate)();return(0,a.useCallback)((t=>{const n=(0,i.getFungibleCaip19FromFungible)(t.tokens[0]),r=(0,l.encodeCaip19)(n);e(`/${s.Path.Swap}?buyFungible=${r}`)}),[e])}})),n.register("bcPY6",(function(r,l){t(r.exports,"CarouselCardToken",(function(){return u}));var i=n("RVqnc"),a=n("29o0l"),o=n("Nt4tV"),s=n("gkfw3"),c=n("izu1Y"),d=n("cSCtg");const u=({token:t})=>{const n=t.tokens[0];return e(a).createElement(p,null,e(a).createElement(m,null,e(a).createElement(f,null,e(a).createElement(x,null,(0,i.truncateString)(n.data.name||"",12)),e(a).createElement(g,null,n.data.symbol)),e(a).createElement(h,{src:n.data.logoUri||""})),e(a).createElement(E,null,e(a).createElement(k,null,(0,o.formatDollarAmount)(parseFloat(t.currentPrice),{minimumAmount:1e-6,decimalFormatSmallNumbers:"0.[000000]",roundDecimals:!0})),e(a).createElement(w,{green:parseFloat(t.priceChangePercentage)>=0},(0,o.formatNumber)(parseFloat(t.priceChangePercentage),{includePlusPrefix:!0,suffix:"%"}))))},p=s.default.div`
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
`,f=s.default.div`
  height: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3px;
`,x=s.default.div`
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
`,k=s.default.div`
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
`})),n.register("ebFSn",(function(r,l){t(r.exports,"default",(function(){return h}));var i=n("iOvk1"),a=n("3ljHn"),o=n("43063"),s=n("lz5BI"),c=n("29o0l"),d=n("gkfw3"),u=n("hnPyv"),p=n("j81qC"),m=n("gX5Te"),f=n("4K7Du"),x=n("kWfcq");const g="200px";function h({tab:t}){const{data:n,mutate:r}=m.hooks.useExploreSelectedNetwork(),{currentSortOption:l,getSortOptions:i,setSortOption:a}=m.hooks.useExploreSortOption(),o=i(t),s=l(t);return e(c).createElement(b,null,e(c).createElement(w,{value:s,options:o,onChange:e=>{(e=>{a(t,e)})(e),x.exploreAnalytics.onExploreFilterChangedByUser({filterType:"sort",filterValue:e,listName:t})}}),e(c).createElement(k,{value:n,onChange:e=>{r(e),x.exploreAnalytics.onExploreFilterChangedByUser({filterType:"network",filterValue:e,listName:t})}}))}const E=({networkLabel:t,NetworkIcon:n})=>{const[r,l]=e(c).useState(!1);return e(c).createElement(v,{onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1)},e(c).createElement("span",{style:{color:r?f.theme.purple:f.theme.white}},t)," ",e(c).createElement(n,{width:20,height:20,fill:r?f.theme.purple:f.theme.white}))};function k({value:t,onChange:n}){const{t:r}=(0,o.useTranslation)(),{data:[l,s]}=(0,a.useFeatureFlags)(["enable-bitcoin","enable-bitcoin-explore"]),d=m.hooks.useEnabledNetworkIDs(),f=(0,c.useMemo)((()=>{const t=[];return d.includes(i.SolanaNetworkID.Mainnet)&&t.push({label:e(c).createElement(E,{networkLabel:"Solana",NetworkIcon:p.IconChainSolana}),key:"Solana",onClick:()=>n(i.SolanaNetworkID.Mainnet)}),d.includes(i.EthereumNetworkID.Mainnet)&&t.push({label:e(c).createElement(E,{networkLabel:"Ethereum",NetworkIcon:p.IconChainEthereum}),key:"Ethereum",onClick:()=>n(i.EthereumNetworkID.Mainnet)}),d.includes(i.PolygonNetworkID.Mainnet)&&t.push({label:e(c).createElement(E,{networkLabel:"Polygon",NetworkIcon:p.IconChainPolygon}),key:"Polygon",onClick:()=>n(i.PolygonNetworkID.Mainnet)}),l&&d.includes(i.BitcoinNetworkID.Mainnet)&&s&&t.push({label:e(c).createElement(E,{networkLabel:"Bitcoin",NetworkIcon:p.IconChainBitcoin}),key:"Bitcoin",onClick:()=>n(i.BitcoinNetworkID.Mainnet)}),t.length>1&&t.push({label:e(c).createElement(E,{networkLabel:r("exploreFilterByall_networks"),NetworkIcon:p.IconStackedLayers}),key:"all_networks",onClick:()=>n("all_networks")}),t}),[n,r,l,s,d]);return f.length>1?e(c).createElement(y,null,e(c).createElement(u.Dropdown,{items:f,dropdownWidth:g,noDropdownItemPadding:!0},e(c).createElement(C,null,e(c).createElement(S,null,(e=>{switch(e){case i.SolanaNetworkID.Mainnet:return"Solana";case i.EthereumNetworkID.Mainnet:return"Ethereum";case i.PolygonNetworkID.Mainnet:return"Polygon";case i.BitcoinNetworkID.Mainnet:return"Bitcoin";case"all_networks":return r("exploreFilterByall_networks");default:return""}})(t)),e(c).createElement(p.IconChevronDown,{width:12,height:12,fill:"#999999"})))):null}function w({options:t,value:n,onChange:r}){const{t:l}=(0,o.useTranslation)(),i=(0,c.useMemo)((()=>t.map((e=>({label:l(`exploreSortBy${e}`),key:e,onClick:()=>{r(e)}})))),[r,t,l]);return e(c).createElement(y,null,e(c).createElement(u.Dropdown,{items:i,dropdownWidth:g},e(c).createElement(C,{"data-testid":`exploreSortBy${n}-button`},e(c).createElement(S,null,l(`exploreSortBy${n}`)),e(c).createElement(p.IconChevronDown,{width:12,height:12,fill:"#999999"}))))}const b=d.default.div`
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
`,C=(0,d.default)(s.motion.div).attrs({activeOpacity:.6,whileHover:{background:"#3B3C40"},transition:{ease:[.5,1,.89,1],duration:.1},style:{background:"#2a2a2a"}})`
  align-items: center;
  justify-content: space-between;
  padding: 6px 12px;
  border-radius: 48px;
  display: flex;
  height: 32px;
  cursor: pointer;
`,S=d.default.div`
  margin-right: 6px;
  color: ${e=>e.theme.white};
  font-size: 15px;
  font-weight: 600;
`})),n.register("g8Ra9",(function(r,l){t(r.exports,"ExploreFiltersSkeleton",(function(){return s}));var i=n("29o0l"),a=n("gkfw3"),o=n("hiI91");function s(){return e(i).createElement(c,null,e(i).createElement(d,{width:"99px",height:"26px"}),e(i).createElement(d,{width:"124px",height:"26px"}))}const c=a.default.div`
  display: flex;
  flex-direction: row;
  padding: 8px 16px 16px 16px;
`,d=(0,a.default)(o.SkeletonLoader)`
  background: ${e=>e.theme.skeletonLight};
  border-radius: 48px;
  margin-right: 4px;
`})),n.register("c3TWf",(function(r,l){t(r.exports,"ExploreListCollections",(function(){return x}));var i=n("43063"),a=n("29o0l"),o=n("gkfw3"),s=n("gX5Te"),c=n("kWfcq"),d=n("fBlwq"),u=n("fMvHQ"),p=n("jWARq"),m=n("3n8yM"),f=n("kDfwQ");function x(){const{isLoading:t,error:n,isFetching:r,data:l}=s.hooks.useExploreCollections(),{t:o}=(0,i.useTranslation)();return n&&!l?e(a).createElement(d.ExploreNetworkError,null):e(a).createElement(u.default,{items:l?l.data:[],renderItem:(t,n)=>e(a).createElement(g,{key:`carousel-card-collections-${n}`,href:t.marketplacePages[0].collectionUrl},e(a).createElement(m.ListItemContainer,{onPress:()=>{c.exploreAnalytics.onExploreListItemClickedByUser({datasourceId:(null==l?void 0:l.uuid)||"",listName:"collections",itemDetails:{position:n,title:t.name,id:t.id}})}},e(a).createElement(p.ListItemCollection,{collection:t,position:n+1}))),listName:"collections",header:e(a).createElement(f.ListHeader,{titles:["#",o("exploreFloor"),o("exploreVolume")]}),isLoading:!(!t&&!r||l)})}const g=o.default.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  text-decoration: none;
  display: contents;
`})),n.register("fBlwq",(function(r,l){t(r.exports,"ExploreNetworkError",(function(){return x}));var i=n("29o0l"),a=n("88tsI"),o=n("gkfw3"),s=n("j81qC"),c=n("634r8"),d=n("27SDj");const u=o.default.div`
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
`,f=(0,o.default)(d.Text).attrs({size:14,weight:400,lineHeight:21,marginLeft:8,color:"#EB3742"})``,x=()=>{const{t:t}=(0,a.useTranslation)();return e(i).createElement(u,{"data-testid":"explore-network-error"},e(i).createElement(p,null,e(i).createElement(m,null,e(i).createElement(s.IconExclamationMarkCircle,{width:18,exclamationFill:"transparent",circleFill:"#EB3742"})),e(i).createElement(f,null,t("exploreNetworkError"))))}})),n.register("fMvHQ",(function(r,l){t(r.exports,"default",(function(){return d}));var i=n("1fwzV"),a=n("lz5BI"),o=n("29o0l"),s=n("gkfw3"),c=n("NfYUA");function d({items:t,listName:n,renderItem:r,header:l,isLoading:a}){return e(o).createElement(u,null,l,e(o).createElement(i.AnimatePresence,null,a&&e(o).createElement(m,null,e(o).createElement(c.ListSkeleton,null))),!a&&t.map(((t,l)=>e(o).createElement(p,{key:`list-item-${n}-${l}`,"data-testid":`list-item-${n}-${l}`,whileHover:{background:"#333"},style:{background:"#222"},transition:{ease:[.5,1,.89,1],duration:.1}},r(t,l)))))}const u=s.default.div`
  flex-direction: column;
  width: 100%;
`,p=(0,s.default)(a.motion.div)`
  flex: 1;
  width: 100%;
  cursor: pointer;
`,m=(0,s.default)(a.motion.div).attrs({initial:{opacity:1},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2,ease:"easeInOut"}})``})),n.register("NfYUA",(function(r,l){t(r.exports,"ListSkeleton",(function(){return s}));var i=n("29o0l"),a=n("gkfw3"),o=n("hiI91");function s({items:t=10}){const n=(0,i.useMemo)((()=>{const e=[];for(let n=0;n<t;n++)e.push(n);return e}),[t]);return e(i).createElement(d,{"data-testid":"explore-list-skeleton"},n.map(((t,n)=>e(i).createElement(c,{key:t,index:n+1}))))}function c({index:t}){return e(i).createElement(u,null,e(i).createElement(p,null,e(i).createElement(f,null,e(i).createElement(x,null,t)),e(i).createElement(g,null),e(i).createElement("div",null,e(i).createElement(o.SkeletonLoader,{width:"95px",height:"20px",marginBottom:"4px",borderRadius:"16px"}),e(i).createElement(o.SkeletonLoader,{width:"69px",height:"20px",borderRadius:"16px"}))),e(i).createElement(m,null,e(i).createElement(o.SkeletonLoader,{width:"69px",height:"20px",marginBottom:"4px",borderRadius:"16px"}),e(i).createElement(o.SkeletonLoader,{width:"38px",height:"20px",borderRadius:"16px"})))}const d=a.default.div`
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
`,f=a.default.div`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`,x=a.default.div`
  font-size: 14px;
  line-height: 18px;
  color: #777777;
`,g=(0,a.default)(o.SkeletonLoader)`
  background: ${e=>e.theme.skeletonLight};
  border-radius: 14px;
  height: 48px;
  width: 48px;
`})),n.register("jWARq",(function(r,l){t(r.exports,"ListItemCollection",(function(){return p}));var i=n("RVqnc"),a=n("kAKNF"),o=n("29o0l"),s=n("Nt4tV"),c=n("gkfw3"),d=n("izu1Y"),u=n("hiI91");const p=({collection:t,position:n})=>{const r=(0,o.useMemo)((()=>{const n=new(e(a))(t.floorPrices[0].value,10).dividedBy(new(e(a))(10).pow(t.floorPrices[0].paymentToken.decimals)).toNumber();return`${(0,s.formatNumber)(n)} ${t.floorPrices[0].paymentToken.symbol} `}),[t.floorPrices]),l=(0,o.useMemo)((()=>{const n=new(e(a))(t.volume||0,10).dividedBy(new(e(a))(10).pow(t.floorPrices[0].paymentToken.decimals)).toNumber();return`${(0,s.formatNumber)(n,{compact:n>=1e3})} ${t.floorPrices[0].paymentToken.symbol}`}),[t.volume,t.floorPrices]);return e(o).createElement(m,null,e(o).createElement(f,null,e(o).createElement(g,null,e(o).createElement(h,null,n)),e(o).createElement(y,{src:t.imageUrl,width:48,height:48,fallback:e(o).createElement(u.SkeletonLoader,{borderRadius:"14px",width:"48px",height:"48px"}),loader:e(o).createElement(u.SkeletonLoader,{borderRadius:"14px",width:"48px",height:"48px"})}),e(o).createElement("div",null,e(o).createElement(E,null,(0,i.truncateString)(t.name,15)),e(o).createElement(k,null,r))),e(o).createElement(x,null,e(o).createElement(w,null,l),e(o).createElement(b,{green:t.volumePercentChange>=0},(0,s.formatNumber)(t.volumePercentChange,{compact:!0,includePlusPrefix:!0}),"%")))},m=c.default.div`
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 10px;
  display: flex;
`,f=c.default.div`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  display: flex;
`,x=c.default.div`
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
`,k=c.default.div`
  font-size: 15px;
  line-height: 20px;
  color: ${e=>e.theme.grayLight};
`,w=c.default.div`
  font-size: 17px;
  line-height: 22px;
  white-space: nowrap;
`,b=c.default.div`
  font-size: 15px;
  line-height: 20px;
  color: ${e=>e.green?e.theme.green:e.theme.alert};
  text-align: right;
`,y=(0,c.default)(d.PImage)`
  border-radius: 14px;
  width: 48px;
  height: 48px;
`})),n.register("3n8yM",(function(r,l){t(r.exports,"ListItemContainer",(function(){return a}));var i=n("29o0l");function a({children:t,onPress:n}){return e(i).createElement(o,{onClick:n},t)}const o=n("gkfw3").default.div`
  width: 100%;
  padding: 12px 16px;
`})),n.register("kDfwQ",(function(r,l){t(r.exports,"ListHeader",(function(){return o}));var i=n("29o0l"),a=n("gkfw3");const o=({titles:t})=>e(i).createElement(s,null,e(i).createElement(c,null,e(i).createElement(p,null,e(i).createElement(u,null,t[0])),e(i).createElement(u,null,t[1])),e(i).createElement(d,null,e(i).createElement(u,null,t[2]))),s=a.default.div`
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
`})),n.register("lwG9A",(function(r,l){t(r.exports,"ExploreListSites",(function(){return f}));var i=n("RVqnc"),a=n("29o0l"),o=n("gkfw3"),s=n("gX5Te"),c=n("kWfcq"),d=n("fBlwq"),u=n("fMvHQ"),p=n("3n8yM"),m=n("8H5kP");function f(){const{isLoading:t,isFetching:n,error:r,data:l}=s.hooks.useExploreSites();return r&&!l?e(a).createElement(d.ExploreNetworkError,null):e(a).createElement(u.default,{items:l?l.data:[],renderItem:(t,n)=>e(a).createElement(x,{key:`carousel-card-sites-${n}`,href:(0,i.formatSearchURI)(t.domain)},e(a).createElement(p.ListItemContainer,{onPress:()=>{c.exploreAnalytics.onExploreListItemClickedByUser({datasourceId:(null==l?void 0:l.uuid)||"",listName:"sites",itemDetails:{position:n,title:t.name,id:t.id}})}},e(a).createElement(m.ListItemSite,{site:t,position:n+1}))),listName:"sites",isLoading:!(!t&&!n||l),header:null})}const x=o.default.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  text-decoration: none;
  display: contents;
`})),n.register("8H5kP",(function(r,l){t(r.exports,"ListItemSite",(function(){return u}));var i=n("43063"),a=n("RVqnc"),o=n("29o0l"),s=n("gkfw3"),c=n("izu1Y"),d=n("hiI91");const u=({site:t,position:n})=>{const{t:r}=(0,i.useTranslation)();return e(o).createElement(p,null,e(o).createElement(m,null,e(o).createElement(f,null,n)),e(o).createElement(h,{src:t.imageUrl,width:48,height:48,fallback:e(o).createElement(d.SkeletonLoader,{borderRadius:"14px",width:"48px",height:"48px"}),loader:e(o).createElement(d.SkeletonLoader,{borderRadius:"14px",width:"48px",height:"48px"})}),e(o).createElement("div",null,e(o).createElement(x,null,(0,a.truncateString)(t.name,15)),e(o).createElement(g,null,r(`exploreCategory${t.category}`))))},p=s.default.div`
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
`,f=s.default.div`
  font-size: 14px;
  line-height: 18px;
  color: #777777;
  font-weight: 600;
`,x=s.default.div`
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
`})),n.register("bQ2R6",(function(r,l){t(r.exports,"ExploreListTokens",(function(){return g}));var i=n("43063"),a=n("29o0l"),o=n("gkfw3"),s=n("gX5Te"),c=n("kWfcq"),d=n("fD2Mx"),u=n("fBlwq"),p=n("fMvHQ"),m=n("3n8yM"),f=n("9AQVS"),x=n("kDfwQ");function g({displayType:t}){const{isLoading:n,isFetching:r,error:l,data:o}=s.hooks.useExploreTokens(),{t:g}=(0,i.useTranslation)(),E=(0,d.useExploreToSwap)(),k=(0,a.useMemo)((()=>{switch(t){case"market_cap":return["#",g("exploreToken"),g("exploreCap")];case"gainers":case"losers":return["#",g("exploreToken"),g("explorePrice")];default:return["#",g("exploreToken"),g("explore24hVolume")]}}),[t,g]);return l&&!o?e(a).createElement(u.ExploreNetworkError,null):e(a).createElement(p.default,{items:o?o.data:[],renderItem:(n,r)=>e(a).createElement(m.ListItemContainer,{key:`carousel-card-tokens-${r}`,onPress:()=>{E(n),c.exploreAnalytics.onExploreListItemClickedByUser({datasourceId:(null==o?void 0:o.uuid)||"",listName:"tokens",itemDetails:{position:r,title:n.tokens[0].data.name||n.id,id:n.id}})}},e(a).createElement(h,null,e(a).createElement(f.ListItemToken,{token:n,position:r+1,displayType:t}))),listName:"tokens",isLoading:!(!n&&!r||o),header:e(a).createElement(x.ListHeader,{titles:k})})}const h=o.default.div`
  cursor: pointer;
`})),n.register("9AQVS",(function(r,l){t(r.exports,"ListItemToken",(function(){return u}));var i=n("RVqnc"),a=n("29o0l"),o=n("Nt4tV"),s=n("gkfw3"),c=n("izu1Y"),d=n("hiI91");const u=({token:t,position:n,displayType:r})=>{const l=t.tokens[0],s=(0,a.useMemo)((()=>{switch(r){case"market_cap":return e(a).createElement(e(a).Fragment,null,e(a).createElement(w,null,(0,o.formatDollarAmount)(parseFloat(t.marketCap)||0,{compact:!0})),e(a).createElement(b,{green:parseFloat(t.marketCapChangePercentage)>=0},(0,o.formatNumber)(parseFloat(t.marketCapChangePercentage),{includePlusPrefix:!0,suffix:"%",compact:!0})));case"volume":return e(a).createElement(e(a).Fragment,null,e(a).createElement(w,null,(0,o.formatDollarAmount)(parseFloat(t.volume)||0,{compact:!0})));default:return e(a).createElement(e(a).Fragment,null,e(a).createElement(w,null,(0,o.formatDollarAmount)(parseFloat(t.currentPrice),{minimumAmount:1e-6,decimalFormatSmallNumbers:"0.[000000]",roundDecimals:!0})),e(a).createElement(b,{green:parseFloat(t.priceChangePercentage)>=0},(0,o.formatNumber)(parseFloat(t.priceChangePercentage),{includePlusPrefix:!0,suffix:"%",compact:!0})))}}),[r,t]);return e(a).createElement(p,null,e(a).createElement(m,null,e(a).createElement(g,null,e(a).createElement(h,null,n)),e(a).createElement(y,{src:l.data.logoUri||"",width:48,height:48,fallback:e(a).createElement(C,null,e(a).createElement(v,null,l.data.symbol)),loader:e(a).createElement(d.SkeletonLoader,{borderRadius:"14px",width:"48px",height:"48px"})}),e(a).createElement(f,null,e(a).createElement(E,null,(0,i.truncateString)(l.data.name||"",15)),e(a).createElement(k,null,l.data.symbol))),e(a).createElement(x,null,s))},p=s.default.div`
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
`,f=s.default.div`
  overflow: hidden;
`,x=s.default.div`
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
`,k=s.default.div`
  font-size: 15px;
  line-height: 20px;
  color: ${e=>e.theme.grayLight};
`,w=s.default.div`
  font-size: 17px;
  line-height: 22px;
`,b=s.default.div`
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
`,C=s.default.div`
  width: 48px;
  min-width: 48px;
  height: 48px;
  min-height: 48px;
  border-radius: 100px;
  background-color: ${e=>e.theme.buttonGray};
  display: flex;
  align-items: center;
  justify-content: center;
`})),n.register("lzZgH",(function(r,l){t(r.exports,"default",(function(){return u}));var i=n("lz5BI"),a=n("kdk4D"),o=n("29o0l"),s=n("gkfw3"),c=n("kWfcq");const d=e=>e.reduce(((e,t)=>e+12*t.length+16),0);function u({values:t,activeTabIndex:n,setActiveTabIndex:r}){const[l,i]=(0,o.useState)(!1),s=(0,a.useMotionValue)(n>2?-1*d(t.slice(3,n+1)):0),u=(0,o.useMemo)((()=>{const e=window.innerWidth-d(t);return e<0?e:0}),[t]);return e(o).createElement(p,null,e(o).createElement(m,{drag:"x",style:{x:s},dragConstraints:{left:u,right:0},onDragStart:()=>i(!0),onDragEnd:()=>{i(!1),c.exploreAnalytics.onExploreTabTitlesDragged()}},t.map(((t,i)=>e(o).createElement(f,{"data-testid":`tab-title-${t}`,key:`tab-title-${i}`,active:n===i},e(o).createElement(x,{onClick:e=>{if(l)return e.stopPropagation(),void e.preventDefault();r(i)},isActive:n===i},t))))))}const p=s.default.div`
  border-bottom: 1px solid ${e=>e.theme.border};
`,m=(0,s.default)(i.motion.div)`
  display: flex;
  flex-direction: row;
  padding: 0 16px;
`,f=s.default.div`
  border-bottom-style: solid;
  border-bottom-width: ${e=>e.active?"2px":0};
  border-bottom-color: ${e=>e.active?e.theme.purple:e.theme.border};
  margin-right: 16px;
`,x=s.default.div`
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
`}))}();
//# sourceMappingURL=ExplorePage.48913488.js.map
define=__define;})(window.define);