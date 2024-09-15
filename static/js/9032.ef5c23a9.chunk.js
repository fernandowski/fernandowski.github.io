/*! For license information please see 9032.ef5c23a9.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[9032],{49032:(e,t,a)=>{a.r(t),a.d(t,{CalciteFlowItem:()=>xe,defineCustomElement:()=>we});var n=a(77816),o=a(39879),i=a(65079),s=a(76527),l=a(62785),c=a(76988),r=a(6676),d=a(9185),h=a(27882),g=a(48897),f=a(67294),p=a(26964),b=a(37186),m=a(43901);const u="action-bar-container",v="container",C="content-bottom",k="content-top",y="header",x="header-container",w="header-container--border-end",S="heading",E="description",z="header-content",F="header-actions",H="header-actions--end",A="header-actions--start",L="content-wrapper",B="fab-container",P="footer",I="footer-content",O="footer-actions",M="footer-start",T="footer-end",D="close",_="collapse",R="x",j="ellipsis",N="chevron-down",W="chevron-up",K="action-bar",U="alerts",$="content-bottom",q="content-top",G="header-actions-start",J="header-actions-end",Q="header-menu-actions",V="header-content",X="fab",Y="footer",Z="footer-end",ee="footer-start",te="footer-actions",ae=(0,n.w$)(class extends n.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePanelClose=(0,n.lh)(this,"calcitePanelClose",6),this.calcitePanelToggle=(0,n.lh)(this,"calcitePanelToggle",6),this.calcitePanelScroll=(0,n.lh)(this,"calcitePanelScroll",6),this.resizeObserver=(0,r.c)("resize",(()=>this.resizeHandler())),this.resizeHandler=()=>{const{panelScrollEl:e}=this;if(!e||"number"!==typeof e.scrollHeight||"number"!==typeof e.offsetHeight)return;e.scrollHeight>e.offsetHeight?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")},this.setContainerRef=e=>{this.containerEl=e},this.panelKeyDownHandler=e=>{this.closable&&"Escape"===e.key&&!e.defaultPrevented&&(this.handleUserClose(),e.preventDefault())},this.handleUserClose=()=>{this.closed=!0,this.calcitePanelClose.emit()},this.open=()=>{this.isClosed=!1},this.close=async()=>{const e=this.beforeClose??(()=>Promise.resolve());try{await e()}catch(t){return void requestAnimationFrame((()=>{this.closed=!1}))}this.isClosed=!0},this.collapse=()=>{this.collapsed=!this.collapsed,this.calcitePanelToggle.emit()},this.panelScrollHandler=()=>{this.calcitePanelScroll.emit()},this.handleHeaderActionsStartSlotChange=e=>{this.hasStartActions=(0,o.d)(e)},this.handleHeaderActionsEndSlotChange=e=>{this.hasEndActions=(0,o.d)(e)},this.handleHeaderMenuActionsSlotChange=e=>{this.hasMenuItems=(0,o.d)(e)},this.handleActionBarSlotChange=e=>{const t=(0,o.s)(e).filter((e=>e?.matches("calcite-action-bar")));t.forEach((e=>e.layout="horizontal")),this.hasActionBar=!!t.length},this.handleHeaderContentSlotChange=e=>{this.hasHeaderContent=(0,o.d)(e)},this.handleFabSlotChange=e=>{this.hasFab=(0,o.d)(e)},this.handleFooterActionsSlotChange=e=>{this.hasFooterActions=(0,o.d)(e)},this.handleFooterEndSlotChange=e=>{this.hasFooterEndContent=(0,o.d)(e)},this.handleFooterStartSlotChange=e=>{this.hasFooterStartContent=(0,o.d)(e)},this.handleFooterSlotChange=e=>{this.hasFooterContent=(0,o.d)(e)},this.contentBottomSlotChangeHandler=e=>{this.hasContentBottom=(0,o.d)(e)},this.contentTopSlotChangeHandler=e=>{this.hasContentTop=(0,o.d)(e)},this.setPanelScrollEl=e=>{this.panelScrollEl=e,this.resizeObserver?.disconnect(),e&&(this.resizeObserver?.observe(e),this.resizeHandler())},this.handleAlertsSlotChange=e=>{(0,o.s)(e)?.map((e=>{"CALCITE-ALERT"===e.nodeName&&(e.embedded=!0)}))},this.beforeClose=void 0,this.closed=!1,this.disabled=!1,this.closable=!1,this.collapsed=!1,this.collapseDirection="down",this.collapsible=!1,this.headingLevel=void 0,this.loading=!1,this.heading=void 0,this.description=void 0,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.overlayPositioning="absolute",this.scale="m",this.isClosed=!1,this.hasStartActions=!1,this.hasEndActions=!1,this.hasMenuItems=!1,this.hasHeaderContent=!1,this.hasActionBar=!1,this.hasContentBottom=!1,this.hasContentTop=!1,this.hasFab=!1,this.hasFooterActions=!1,this.hasFooterContent=!1,this.hasFooterEndContent=!1,this.hasFooterStartContent=!1,this.defaultMessages=void 0,this.effectiveLocale="",this.showHeaderContent=!1}toggleDialog(e){e?this.close():this.open()}onMessagesChange(){}connectedCallback(){(0,i.c)(this),(0,l.c)(this),(0,c.c)(this)}async componentWillLoad(){(0,s.s)(this),await(0,c.s)(this)}componentDidLoad(){(0,s.a)(this)}componentDidRender(){(0,i.u)(this)}disconnectedCallback(){(0,i.d)(this),(0,l.d)(this),(0,c.d)(this),this.resizeObserver?.disconnect()}effectiveLocaleChange(){(0,c.u)(this,this.effectiveLocale)}async setFocus(){await(0,s.c)(this),(0,o.f)(this.containerEl)}async scrollContentTo(e){this.panelScrollEl?.scrollTo(e)}renderHeaderContent(){const{heading:e,headingLevel:t,description:a,hasHeaderContent:o}=this,i=e?(0,n.h)(h.H,{class:S,level:t},e):null,s=a?(0,n.h)("span",{class:E},a):null;return o||!i&&!s?null:(0,n.h)("div",{class:z,key:"header-content"},i,s)}renderActionBar(){return(0,n.h)("div",{class:u,hidden:!this.hasActionBar},(0,n.h)("slot",{name:K,onSlotchange:this.handleActionBarSlotChange}))}renderHeaderSlottedContent(){return(0,n.h)("div",{class:z,hidden:!this.hasHeaderContent,key:"slotted-header-content"},(0,n.h)("slot",{name:V,onSlotchange:this.handleHeaderContentSlotChange}))}renderHeaderStartActions(){const{hasStartActions:e}=this;return(0,n.h)("div",{class:{[A]:!0,[F]:!0},hidden:!e,key:"header-actions-start"},(0,n.h)("slot",{name:G,onSlotchange:this.handleHeaderActionsStartSlotChange}))}renderHeaderActionsEnd(){const{hasEndActions:e,messages:t,closable:a,collapsed:i,collapseDirection:s,collapsible:l,hasMenuItems:c}=this,{collapse:r,expand:d,close:h}=t,g=[N,W];"up"===s&&g.reverse();const f=l?(0,n.h)("calcite-action",{"aria-expanded":(0,o.t)(!i),"aria-label":r,icon:i?g[0]:g[1],id:_,onClick:this.collapse,scale:this.scale,text:r,title:i?d:r}):null,p=a?(0,n.h)("calcite-action",{"aria-label":h,icon:R,id:D,onClick:this.handleUserClose,scale:this.scale,text:h,title:h}):null,b=(0,n.h)("slot",{name:J,onSlotchange:this.handleHeaderActionsEndSlotChange}),m=e||f||p||c;return(0,n.h)("div",{class:{[H]:!0,[F]:!0},hidden:!m,key:"header-actions-end"},b,this.renderMenu(),f,p)}renderMenu(){const{hasMenuItems:e,messages:t,menuOpen:a}=this;return(0,n.h)("calcite-action-menu",{flipPlacements:["top","bottom"],hidden:!e,key:"menu",label:t.options,open:a,overlayPositioning:this.overlayPositioning,placement:"bottom-end"},(0,n.h)("calcite-action",{icon:j,scale:this.scale,slot:d.S.trigger,text:t.options}),(0,n.h)("slot",{name:Q,onSlotchange:this.handleHeaderMenuActionsSlotChange}))}renderHeaderNode(){const{hasHeaderContent:e,hasStartActions:t,hasEndActions:a,closable:o,collapsible:i,hasMenuItems:s,hasActionBar:l}=this,c=this.renderHeaderContent(),r=e||!!c||t||a||i||o||s;return this.showHeaderContent=r,(0,n.h)("header",{class:y,hidden:!(r||l)},(0,n.h)("div",{class:{[x]:!0,[w]:l},hidden:!r},this.renderHeaderStartActions(),this.renderHeaderSlottedContent(),c,this.renderHeaderActionsEnd()),this.renderActionBar(),this.renderContentTop())}renderFooterNode(){const{hasFooterEndContent:e,hasFooterStartContent:t,hasFooterContent:a,hasFooterActions:o}=this,i=t||e||a||o;return(0,n.h)("footer",{class:P,hidden:!i},(0,n.h)("div",{class:I,hidden:!a},(0,n.h)("slot",{name:Y,onSlotchange:this.handleFooterSlotChange})),(0,n.h)("div",{class:M,hidden:a||!t},(0,n.h)("slot",{name:ee,onSlotchange:this.handleFooterStartSlotChange})),(0,n.h)("div",{class:T,hidden:a||!e},(0,n.h)("slot",{name:Z,onSlotchange:this.handleFooterEndSlotChange})),(0,n.h)("div",{class:O,hidden:a||!o},(0,n.h)("slot",{key:"footer-actions-slot",name:te,onSlotchange:this.handleFooterActionsSlotChange})))}renderContent(){return(0,n.h)("div",{class:L,hidden:this.collapsible&&this.collapsed,onScroll:this.panelScrollHandler,ref:this.setPanelScrollEl},(0,n.h)("slot",null),this.renderFab())}renderContentBottom(){return(0,n.h)("div",{class:C,hidden:!this.hasContentBottom},(0,n.h)("slot",{name:$,onSlotchange:this.contentBottomSlotChangeHandler}))}renderContentTop(){return(0,n.h)("div",{class:k,hidden:!this.hasContentTop},(0,n.h)("slot",{name:q,onSlotchange:this.contentTopSlotChangeHandler}))}renderFab(){return(0,n.h)("div",{class:B,hidden:!this.hasFab},(0,n.h)("slot",{name:X,onSlotchange:this.handleFabSlotChange}))}render(){const{disabled:e,loading:t,panelKeyDownHandler:a,isClosed:s}=this,l=(0,n.h)("article",{key:"94df4953da14ffe331994b99f62c18fdaa3b900b","aria-busy":(0,o.t)(t),class:v,hidden:s,ref:this.setContainerRef},this.renderHeaderNode(),this.renderContent(),this.renderContentBottom(),this.renderFooterNode(),(0,n.h)("slot",{key:"alerts",name:U,onSlotchange:this.handleAlertsSlotChange}));return(0,n.h)(n.xr,{key:"01e56f24f7ad90c69f1415f4417b35ed9539e58d",onKeyDown:a},(0,n.h)(i.I,{key:"6274bdb95260746ce36cd731d363a2d3447cfe80",disabled:e},t?(0,n.h)("calcite-scrim",{loading:t}):null,l))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{closed:["toggleDialog"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-color-text-2);color:var(--calcite-color-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}:host([scale=s]){--calcite-internal-panel-default-padding:var(--calcite-spacing-sm);--calcite-internal-panel-header-vertical-padding:10px}:host([scale=s]) .header-content .heading{font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=s]) .header-content .description{font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){--calcite-internal-panel-default-padding:var(--calcite-spacing-md);--calcite-internal-panel-header-vertical-padding:var(--calcite-spacing-lg)}:host([scale=m]) .header-content .heading{font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=m]) .header-content .description{font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){--calcite-internal-panel-default-padding:var(--calcite-spacing-xl);--calcite-internal-panel-header-vertical-padding:var(--calcite-spacing-xxl)}:host([scale=l]) .header-content .heading{font-size:var(--calcite-font-size-1);line-height:1.5rem}:host([scale=l]) .header-content .description{font-size:var(--calcite-font-size-0);line-height:1.25rem}.content-top,.content-bottom{display:flex;align-items:flex-start;align-self:stretch;border-block-start:1px solid var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1)}.container{position:relative;margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;background-color:var(--calcite-color-background);padding:0px;outline-color:transparent;transition:max-block-size var(--calcite-animation-timing), inline-size var(--calcite-animation-timing)}.container:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.container[hidden]{display:none}.header{z-index:var(--calcite-z-index-header);display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1);border-block-end:var(--calcite-panel-header-border-block-end, 1px solid var(--calcite-color-border-3))}.header-container{display:flex;inline-size:100%;flex-direction:row;align-items:stretch;justify-content:flex-start;flex:0 0 auto}.header-container--border-end{border-block-end:1px solid var(--calcite-color-border-3)}.action-bar-container{inline-size:100%}.action-bar-container ::slotted(calcite-action-bar){inline-size:100%}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:0.75rem;padding-block:0.875rem;margin-inline-end:auto}.header-content .heading,.header-content .description{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-inline:0px;margin-block:0px 0.25rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{color:var(--calcite-color-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);border-inline-end-width:1px}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{position:relative;display:flex;block-size:100%;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;overflow:auto;background-color:var(--calcite-color-background);outline-color:transparent;padding:var(--calcite-panel-content-space, 0)}.content-wrapper:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.content-top,.content-bottom{padding:var(--calcite-internal-panel-default-padding)}.header-content{padding-block:var(--calcite-internal-panel-header-vertical-padding);padding-inline:var(--calcite-internal-panel-default-padding)}.footer{margin-block-start:auto;display:flex;flex-direction:row;align-content:space-between;align-items:center;justify-content:center;background-color:var(--calcite-color-foreground-1);font-size:var(--calcite-font-size--2);line-height:1.375;border-block-start:1px solid var(--calcite-color-border-3);padding:var(--calcite-panel-footer-padding, var(--calcite-internal-panel-default-padding))}.footer-content{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:center}.footer-actions{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:space-evenly;gap:var(--calcite-internal-panel-default-padding)}.footer-start{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:flex-start;margin-inline-end:auto;gap:var(--calcite-internal-panel-default-padding)}.footer-end{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:flex-end;margin-inline-start:auto;gap:var(--calcite-internal-panel-default-padding)}.fab-container{position:sticky;inset-block-end:0px;z-index:var(--calcite-z-index-sticky);margin-block:0px;margin-inline:auto;display:block;padding:0.5rem;inset-inline:0;inline-size:-moz-fit-content;inline-size:fit-content}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-panel",{beforeClose:[16],closed:[1540],disabled:[516],closable:[516],collapsed:[516],collapseDirection:[1,"collapse-direction"],collapsible:[516],headingLevel:[514,"heading-level"],loading:[516],heading:[1],description:[1],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],overlayPositioning:[513,"overlay-positioning"],scale:[513],isClosed:[32],hasStartActions:[32],hasEndActions:[32],hasMenuItems:[32],hasHeaderContent:[32],hasActionBar:[32],hasContentBottom:[32],hasContentTop:[32],hasFab:[32],hasFooterActions:[32],hasFooterContent:[32],hasFooterEndContent:[32],hasFooterStartContent:[32],defaultMessages:[32],effectiveLocale:[32],showHeaderContent:[32],setFocus:[64],scrollContentTo:[64]},void 0,{closed:["toggleDialog"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function ne(){if("undefined"===typeof customElements)return;["calcite-panel","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover","calcite-scrim"].forEach((e=>{switch(e){case"calcite-panel":customElements.get(e)||customElements.define(e,ae);break;case"calcite-action":customElements.get(e)||(0,g.d)();break;case"calcite-action-menu":customElements.get(e)||(0,d.d)();break;case"calcite-icon":customElements.get(e)||(0,f.d)();break;case"calcite-loader":customElements.get(e)||(0,p.d)();break;case"calcite-popover":customElements.get(e)||(0,b.d)();break;case"calcite-scrim":customElements.get(e)||(0,m.d)()}}))}ne();const oe="back-button",ie="chevron-left",se="chevron-right",le="action-bar",ce="alerts",re="content-top",de="content-bottom",he="header-actions-start",ge="header-actions-end",fe="header-menu-actions",pe="header-content",be="fab",me="footer",ue="footer-actions",ve="footer-end",Ce="footer-start",ke=(0,n.w$)(class extends n.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteFlowItemBack=(0,n.lh)(this,"calciteFlowItemBack",7),this.calciteFlowItemScroll=(0,n.lh)(this,"calciteFlowItemScroll",6),this.calciteFlowItemClose=(0,n.lh)(this,"calciteFlowItemClose",6),this.calciteFlowItemToggle=(0,n.lh)(this,"calciteFlowItemToggle",6),this.handleInternalPanelScroll=e=>{e.target===this.containerEl&&(e.stopPropagation(),this.calciteFlowItemScroll.emit())},this.handleInternalPanelClose=e=>{e.target===this.containerEl&&(e.stopPropagation(),this.closed=!0,this.calciteFlowItemClose.emit())},this.handleInternalPanelToggle=e=>{e.target===this.containerEl&&(e.stopPropagation(),this.collapsed=e.target.collapsed,this.calciteFlowItemToggle.emit())},this.backButtonClick=()=>{this.calciteFlowItemBack.emit()},this.setBackRef=e=>{this.backButtonEl=e},this.setContainerRef=e=>{this.containerEl=e},this.closable=!1,this.closed=!1,this.collapsed=!1,this.collapseDirection="down",this.collapsible=!1,this.beforeBack=void 0,this.beforeClose=void 0,this.description=void 0,this.disabled=!1,this.heading=void 0,this.headingLevel=void 0,this.loading=!1,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.overlayPositioning="absolute",this.scale="m",this.showBackButton=!1,this.defaultMessages=void 0,this.effectiveLocale=""}onMessagesChange(){}connectedCallback(){(0,i.c)(this),(0,l.c)(this),(0,c.c)(this)}async componentWillLoad(){await(0,c.s)(this),(0,s.s)(this)}componentDidRender(){(0,i.u)(this)}disconnectedCallback(){(0,i.d)(this),(0,l.d)(this),(0,c.d)(this)}componentDidLoad(){(0,s.a)(this)}effectiveLocaleChange(){(0,c.u)(this,this.effectiveLocale)}async setFocus(){await(0,s.c)(this);const{backButtonEl:e,containerEl:t}=this;return e?e.setFocus():t?t.setFocus():void 0}async scrollContentTo(e){await(this.containerEl?.scrollContentTo(e))}renderBackButton(){const{el:e}=this,t="rtl"===(0,o.a)(e),{showBackButton:a,backButtonClick:i,messages:s}=this,l=s.back,c=t?se:ie;return a?(0,n.h)("calcite-action",{"aria-label":l,class:oe,icon:c,key:"flow-back-button",onClick:i,ref:this.setBackRef,scale:"s",slot:"header-actions-start",text:l,title:l}):null}render(){const{collapsed:e,collapseDirection:t,collapsible:a,closable:o,closed:s,description:l,disabled:c,heading:r,headingLevel:d,loading:h,menuOpen:g,messages:f,overlayPositioning:p,beforeClose:b}=this;return(0,n.h)(n.xr,{key:"166a2f53829cecc09019a7fa3fe670b5e4e42146"},(0,n.h)(i.I,{key:"53f00fb0e5ec53b8a19efde1592e1bff176302d1",disabled:c},(0,n.h)("calcite-panel",{key:"a24ff76af240b1403ebfa5810bc8fe0443901040",beforeClose:b,closable:o,closed:s,collapseDirection:t,collapsed:e,collapsible:a,description:l,disabled:c,heading:r,headingLevel:d,loading:h,menuOpen:g,messageOverrides:f,onCalcitePanelClose:this.handleInternalPanelClose,onCalcitePanelScroll:this.handleInternalPanelScroll,onCalcitePanelToggle:this.handleInternalPanelToggle,overlayPositioning:p,ref:this.setContainerRef,scale:this.scale},this.renderBackButton(),(0,n.h)("slot",{key:"9051287e5b89eaca28b440816cbcddc03cefed73",name:le,slot:K}),(0,n.h)("slot",{key:"566fb396078d3eac17fbff69e0cd43fb5b8ca13e",name:ce,slot:U}),(0,n.h)("slot",{key:"88ced257238e369cd99250c9d5a93fa03746fbd5",name:he,slot:G}),(0,n.h)("slot",{key:"beab9f93af9deed383adc8250ec943b883e058b8",name:ge,slot:J}),(0,n.h)("slot",{key:"1f1c7579d1ac1085004b08d2f57ec8b9e0641e35",name:pe,slot:V}),(0,n.h)("slot",{key:"3696e4a7e80db48581f438336007a1b63a201040",name:fe,slot:Q}),(0,n.h)("slot",{key:"370e0817cbc13d7cf4c8adaccff8fe9d7c91c859",name:be,slot:X}),(0,n.h)("slot",{key:"d55cc859cb1c9c6cc80a63521aad955f6e23d31c",name:re,slot:q}),(0,n.h)("slot",{key:"7cea1750cd59d1fdda66516c9b4c78884127dde5",name:de,slot:$}),(0,n.h)("slot",{key:"d07ed2f97623023312cdb0a5a01b909286f34373",name:Ce,slot:ee}),(0,n.h)("slot",{key:"fdc209c1e77fd62cadaaad0ee576e71a1f0419d8",name:me,slot:Y}),(0,n.h)("slot",{key:"5348d32cc42b7fa3b07e4b5ef711863f6ce812bc",name:ve,slot:Z}),(0,n.h)("slot",{key:"bad7644787a3ad19ef40931fb38cfe9c18962b27",name:ue,slot:te}),(0,n.h)("slot",{key:"97675398537cc86f41a219126e17bcf24cf4682b"}))))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;overflow:hidden}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);border-inline-end-width:1px}calcite-panel{--calcite-panel-footer-padding:var(--calcite-flow-item-footer-padding);--calcite-panel-header-border-block-end:var(--calcite-flow-item-header-border-block-end)}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-flow-item",{closable:[516],closed:[516],collapsed:[516],collapseDirection:[1,"collapse-direction"],collapsible:[516],beforeBack:[16],beforeClose:[16],description:[1],disabled:[516],heading:[1],headingLevel:[514,"heading-level"],loading:[516],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],overlayPositioning:[513,"overlay-positioning"],scale:[513],showBackButton:[4,"show-back-button"],defaultMessages:[32],effectiveLocale:[32],setFocus:[64],scrollContentTo:[64]},void 0,{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function ye(){if("undefined"===typeof customElements)return;["calcite-flow-item","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-panel","calcite-popover","calcite-scrim"].forEach((e=>{switch(e){case"calcite-flow-item":customElements.get(e)||customElements.define(e,ke);break;case"calcite-action":customElements.get(e)||(0,g.d)();break;case"calcite-action-menu":customElements.get(e)||(0,d.d)();break;case"calcite-icon":customElements.get(e)||(0,f.d)();break;case"calcite-loader":customElements.get(e)||(0,p.d)();break;case"calcite-panel":customElements.get(e)||ne();break;case"calcite-popover":customElements.get(e)||(0,b.d)();break;case"calcite-scrim":customElements.get(e)||(0,m.d)()}}))}ye();const xe=ke,we=ye},43901:(e,t,a)=>{a.d(t,{d:()=>p});var n=a(77816),o=a(62785),i=a(76988),s=a(6676),l=a(39879),c=a(26964);const r="scrim",d="content",h=72,g=480,f=(0,n.w$)(class extends n.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.resizeObserver=(0,s.c)("resize",(()=>this.handleResize())),this.handleDefaultSlotChange=e=>{this.hasContent=(0,l.r)(e)},this.storeLoaderEl=e=>{this.loaderEl=e,this.handleResize()},this.loading=!1,this.messages=void 0,this.messageOverrides=void 0,this.loaderScale=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.hasContent=!1}onMessagesChange(){}effectiveLocaleChange(){(0,i.u)(this,this.effectiveLocale)}connectedCallback(){(0,o.c)(this),(0,i.c)(this),this.resizeObserver?.observe(this.el)}async componentWillLoad(){await(0,i.s)(this)}disconnectedCallback(){(0,o.d)(this),(0,i.d)(this),this.resizeObserver?.disconnect()}render(){const{hasContent:e,loading:t,messages:a}=this;return(0,n.h)("div",{key:"e31839948c0689b6daeac22f3b2471fb049c834b",class:r},t?(0,n.h)("calcite-loader",{label:a.loading,ref:this.storeLoaderEl,scale:this.loaderScale}):null,(0,n.h)("div",{key:"500b2dcbdcb6c3287ea613fd0f1357de7f3ff347",class:d,hidden:!e},(0,n.h)("slot",{key:"eea29ac4a454cf3cd51933a73911b70114ab6f77",onSlotchange:this.handleDefaultSlotChange})))}getScale(e){return e<h?"s":e>=g?"l":"m"}handleResize(){const{loaderEl:e,el:t}=this;e&&(this.loaderScale=this.getScale(Math.min(t.clientHeight,t.clientWidth)??0))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{--calcite-scrim-background:var(--calcite-color-transparent-scrim);position:absolute;inset:0px;z-index:var(--calcite-z-index-overlay);display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity:0}100%{--tw-text-opacity:1}}.scrim{position:absolute;inset:0px;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-color-transparent-scrim))}.content{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-scrim",{loading:[516],messages:[1040],messageOverrides:[1040],loaderScale:[32],defaultMessages:[32],effectiveLocale:[32],hasContent:[32]},void 0,{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function p(){if("undefined"===typeof customElements)return;["calcite-scrim","calcite-loader"].forEach((e=>{switch(e){case"calcite-scrim":customElements.get(e)||customElements.define(e,f);break;case"calcite-loader":customElements.get(e)||(0,c.d)()}}))}p()}}]);
//# sourceMappingURL=9032.ef5c23a9.chunk.js.map