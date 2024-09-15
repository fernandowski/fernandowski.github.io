"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[2339],{92339:(e,i,t)=>{t.r(i),t.d(i,{default:()=>o});var s=t(35143),r=t(19276),l=t(3975),a=t(68134),n=t(46053),y=(t(81806),t(76460),t(47249),t(85842)),d=t(91196);let h=class extends d.A{constructor(e){super(e),this.type="group",this.layerViews=new r.A}destroy(){this.layerViews.length=0}_allLayerViewVisibility(e){this.layerViews.forEach((i=>{i.visible=e}))}initialize(){this.addHandles([this.layerViews.on("change",(e=>this._layerViewsChangeHandler(e))),(0,a.wB)((()=>this.layer?.visibilityMode),(()=>{this.layer&&this._applyVisibility((()=>this._allLayerViewVisibility(this.visible)),(()=>this._applyExclusiveVisibility(null)))}),a.OH),(0,a.wB)((()=>this.visible),(e=>{this._applyVisibility((()=>this._allLayerViewVisibility(e)),(()=>{}))}),a.OH)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}get creatingLayerViews(){return this.view?.layerViewManager?.isCreatingLayerViewsForLayer(this.layer)??!1}set layerViews(e){this._set("layerViews",(0,l.V)(e,this._get("layerViews")))}get updatingProgress(){return 0===this.layerViews.length?1:this.layerViews.reduce(((e,i)=>e+i.updatingProgress),0)/this.layerViews.length}isUpdating(){return this.creatingLayerViews||this.layerViews.some((e=>e.updating))}_hasLayerViewVisibleOverrides(){return this.layerViews.some((e=>e._isOverridden("visible")))}_findLayerViewForLayer(e){return e&&this.layerViews.find((i=>i.layer===e))}_firstVisibleOnLayerOrder(){const e=this.layer.layers.find((e=>{const i=this._findLayerViewForLayer(e);return!!i?.visible}));return e&&this._findLayerViewForLayer(e)}_applyExclusiveVisibility(e){null==e&&null==(e=this._firstVisibleOnLayerOrder())&&this.layerViews.length>0&&(e=this._findLayerViewForLayer(this.layer.layers.at(0))),this.layerViews.forEach((i=>{i.visible=i===e}))}_layerViewsChangeHandler(e){this.removeHandles("grouplayerview:visible"),this.addHandles(this.layerViews.map((e=>(0,a.wB)((()=>e.visible),(i=>this._applyVisibility((()=>{i!==this.visible&&(e.visible=this.visible)}),(()=>this._applyExclusiveVisibility(i?e:null)))),a.OH))).toArray(),"grouplayerview:visible");const i=e.added[e.added.length-1];this._applyVisibility((()=>this._allLayerViewVisibility(this.visible)),(()=>this._applyExclusiveVisibility(i?.visible?i:null)))}_applyVisibility(e,i){this._hasLayerViewVisibleOverrides()&&("inherited"===this.layer?.visibilityMode?e():"exclusive"===this.layer?.visibilityMode&&i())}};(0,s._)([(0,n.MZ)({readOnly:!0})],h.prototype,"creatingLayerViews",null),(0,s._)([(0,n.MZ)({cast:l.H})],h.prototype,"layerViews",null),(0,s._)([(0,n.MZ)({readOnly:!0})],h.prototype,"updatingProgress",null),(0,s._)([(0,n.MZ)()],h.prototype,"view",void 0),h=(0,s._)([(0,y.$)("esri.views.layers.GroupLayerView")],h);const o=h},91196:(e,i,t)=>{t.d(i,{A:()=>g});var s=t(35143),r=t(91967),l=t(54099),a=t(5632),n=t(76460),y=t(30726),d=t(91291),h=t(46053),o=(t(81806),t(47249),t(85842)),p=t(19451),u=t(90992);let v=class extends((0,a.sA)((0,d.g)(l.A.EventedMixin(r.A)))){constructor(e){super(e),this._updatingHandles=new p.U,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const i=this.layer&&this.layer.id||"no id",t=this.layer?.title||"no title";n.A.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${t}', id: '${i}')`,e)}}))}destroy(){this._updatingHandles=(0,y.pR)(this._updatingHandles)}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){return!0===this.layer?.visible}set visible(e){this._overrideIfSome("visible",e)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){const e=this.view.timeExtent,i=this.layer?.visibilityTimeExtent;return!e||!i||!e.intersection(i).isEmpty}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready&&(0,u.g7)(e)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){const e=this.parent?.suspended?this.parent.suspendInfo:{};this.view?.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0);const i=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return(0,u.g7)(i)&&this.visibleAtCurrentScale||(e.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(e.outsideVisibilityTimeExtent=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,s._)([(0,h.MZ)()],v.prototype,"view",void 0),(0,s._)([(0,h.MZ)()],v.prototype,"fullOpacity",null),(0,s._)([(0,h.MZ)()],v.prototype,"layer",void 0),(0,s._)([(0,h.MZ)()],v.prototype,"parent",void 0),(0,s._)([(0,h.MZ)({readOnly:!0})],v.prototype,"suspended",null),(0,s._)([(0,h.MZ)({readOnly:!0})],v.prototype,"suspendInfo",null),(0,s._)([(0,h.MZ)({readOnly:!0})],v.prototype,"legendEnabled",null),(0,s._)([(0,h.MZ)({type:Boolean,readOnly:!0})],v.prototype,"updating",null),(0,s._)([(0,h.MZ)({readOnly:!0})],v.prototype,"updatingProgress",null),(0,s._)([(0,h.MZ)()],v.prototype,"updateSuspended",null),(0,s._)([(0,h.MZ)()],v.prototype,"visible",null),(0,s._)([(0,h.MZ)({readOnly:!0})],v.prototype,"visibleAtCurrentScale",null),(0,s._)([(0,h.MZ)({readOnly:!0})],v.prototype,"visibleAtCurrentTimeExtent",null),v=(0,s._)([(0,o.$)("esri.views.layers.LayerView")],v);const g=v}}]);
//# sourceMappingURL=2339.faced3fc.chunk.js.map