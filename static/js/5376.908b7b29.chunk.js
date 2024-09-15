"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[5376],{56002:(e,t,i)=>{function n(e){let t,i,n=[],s=!1;return function(){for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return s&&t===this&&function(e,t){if(e.length!==t.length)return!1;for(let i=0;i<e.length;++i)if(e[i]!==t[i])return!1;return!0}(o,n)||(i=e.apply(this,o),t=this,n=o,s=!0),i}}i.d(t,{B:()=>n})},12016:(e,t,i)=>{i.d(t,{B:()=>l});var n=i(18690),s=i(54901),r=i(76460),o=i(50346),a=i(16783);class l{constructor(e,t,i,n){let s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};this._mainMethod=t,this._transferLists=i,this._listeners=[],this._promise=(0,a.ho)(e,{...s,schedule:n}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,s.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()})),this._promise.catch((t=>r.A.getLogger("esri.core.workers.WorkerHandle").error(`Failed to initialize ${e} worker: ${t}`)))}on(e,t){const i={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(i),this._connectListener(i),(0,s.hA)((()=>{i.removed=!0,(0,n.TF)(this._listeners,i),this._thread&&null!=i.threadHandle&&i.threadHandle.remove()}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null,this._listeners.length=0,this._transferLists={}}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,i){if(this._thread){const n=this._transferLists[e],s=n?n(t):[];return this._thread.invoke(e,t,{transferList:s,signal:i})}return this._promise?this._promise.then((()=>((0,o.Te)(i),this.invokeMethod(e,t,i)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t)}))}}},72317:(e,t,i)=>{i.d(t,{C:()=>o});var n=i(75543),s=i(61751),r=i(23241);class o extends s.w{constructor(e){super({...e,constraint:new n.i7(e.targetPoint)})}get hints(){return[new r._(this.targetPoint,this.isDraped,this.domain)]}}},85376:(e,t,i)=>{i.r(t),i.d(t,{FeatureServiceSnappingSource:()=>W});var n=i(35143),s=i(91967),r=i(98773),o=i(54901),a=i(56002),l=i(50346),d=i(68134),h=i(46053),u=(i(81806),i(76460),i(47249),i(85842)),p=i(19451),c=i(31933),y=i(12482),_=i(11164),g=i(20664),f=i(9392),w=i(79650);function v(e,t){return(0,w.g)(t.extent,m),(0,w.h)(m,(0,g.s)(b,e.x,e.y,0))}const m=(0,w.a)(),b=(0,f.vt)();var S=i(90992);let I=class extends s.A{get tiles(){const e=this.tilesCoveringView,t=null!=this.pointOfInterest?this.pointOfInterest:this.view.center;return e.sort(((e,i)=>v(t,e)-v(t,i))),e}_scaleEnabled(){return(0,S.JU)(this.view.scale,this.layer.minScale||0,this.layer.maxScale||0)}get tilesCoveringView(){if(!this.view.ready||!this.view.featuresTilingScheme||!this.view.state||null==this.tileInfo)return[];if(!this._scaleEnabled)return[];const{spans:e,lodInfo:t}=this.view.featuresTilingScheme.getTileCoverage(this.view.state,0),{level:i}=t,n=[];for(const{row:s,colFrom:r,colTo:o}of e)for(let e=r;e<=o;e++){const r=t.normalizeCol(e),o=new _.U(null,i,s,r);this.tileInfo.updateTileInfo(o),n.push(o)}return n}get tileInfo(){return this.view.featuresTilingScheme?.tileInfo??null}get tileSize(){return null!=this.tileInfo?this.tileInfo.size[0]:256}constructor(e){super(e),this.pointOfInterest=null}initialize(){this.addHandles((0,d.wB)((()=>this.view?.state?.viewpoint),(()=>this.notifyChange("tilesCoveringView")),d.OH))}};(0,n._)([(0,h.MZ)({readOnly:!0})],I.prototype,"tiles",null),(0,n._)([(0,h.MZ)({readOnly:!0})],I.prototype,"_scaleEnabled",null),(0,n._)([(0,h.MZ)({readOnly:!0})],I.prototype,"tilesCoveringView",null),(0,n._)([(0,h.MZ)({readOnly:!0})],I.prototype,"tileInfo",null),(0,n._)([(0,h.MZ)({readOnly:!0})],I.prototype,"tileSize",null),(0,n._)([(0,h.MZ)({constructOnly:!0})],I.prototype,"view",void 0),(0,n._)([(0,h.MZ)({constructOnly:!0})],I.prototype,"layer",void 0),(0,n._)([(0,h.MZ)()],I.prototype,"pointOfInterest",void 0),I=(0,n._)([(0,u.$)("esri.views.2d.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles2D")],I);var M=i(33836);let k=class extends s.A{get tiles(){const e=this.tilesCoveringView,t=this._effectivePointOfInterest;if(null!=t){const i=e.map((e=>v(t,e)));for(let n=1;n<i.length;n++)if(i[n-1]>i[n])return e.sort(((e,i)=>v(t,e)-v(t,i))),e.slice()}return e}get tilesCoveringView(){return this._filterTiles(this.view.featureTiles?.tiles?.toArray()).map(H)}get tileInfo(){return this.view.featureTiles?.tilingScheme?.toTileInfo()??null}get tileSize(){return this.view.featureTiles?.tileSize??256}get _effectivePointOfInterest(){const e=this.pointOfInterest;return null!=e?e:this.view.pointsOfInterest?.focus.location}constructor(e){super(e),this.pointOfInterest=null}initialize(){this.addHandles((0,d.wB)((()=>this.view.featureTiles),(e=>{this.removeHandles(Z),e&&this.addHandles(e.addClient(),Z)}),d.Vh))}_filterTiles(e){return null==e?[]:e.filter((e=>{const t=e.measures;if(t.visibility===M.b.VISIBLE_ON_SURFACE){const e=t.screenRect;return Math.abs(e[3]-e[1])>O}return!1}))}};function H(e){let{lij:[t,i,n],extent:s}=e;return new _.U(`${t}/${i}/${n}`,t,i,n,s)}(0,n._)([(0,h.MZ)({readOnly:!0})],k.prototype,"tiles",null),(0,n._)([(0,h.MZ)({readOnly:!0})],k.prototype,"tilesCoveringView",null),(0,n._)([(0,h.MZ)({readOnly:!0})],k.prototype,"tileInfo",null),(0,n._)([(0,h.MZ)({readOnly:!0})],k.prototype,"tileSize",null),(0,n._)([(0,h.MZ)({constructOnly:!0})],k.prototype,"view",void 0),(0,n._)([(0,h.MZ)()],k.prototype,"pointOfInterest",void 0),(0,n._)([(0,h.MZ)()],k.prototype,"_effectivePointOfInterest",null),k=(0,n._)([(0,u.$)("esri.views.3d.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles3D")],k);const O=50,Z="feature-tiles";var T=i(9730),P=i(18153),F=i(65215),A=i(2413),C=i(29614);let E=class extends C.E{constructor(e){super(e)}initialize(){const e=setInterval((()=>this._fetchDebugInfo()),2e3);this.addHandles((0,o.hA)((()=>clearInterval(e))))}getTiles(){if(!this._debugInfo)return[];const e=new Map,t=new Map;this._debugInfo.storedTiles.forEach((t=>{e.set(t.data.id,t.featureCount)})),this._debugInfo.pendingTiles.forEach((i=>{e.set(i.data.id,i.featureCount),t.set(i.data.id,i.state)}));const i=i=>{const n=t.get(i),s=e.get(i)??"?";return n?`${n}:${s}\n${i}`:`store:${s}\n${i}`},n=new Map;return this._debugInfo.storedTiles.forEach((e=>{n.set(e.data.id,e.data)})),this._debugInfo.pendingTiles.forEach((e=>{n.set(e.data.id,e.data)})),Array.from(n.values()).map((e=>({lij:[e.level,e.row,e.col],geometry:F.A.fromExtent((0,A.w1)(e.extent,this.view.spatialReference)),label:i(e.id)})))}_fetchDebugInfo(){this.handle.getDebugInfo(null).then((e=>{this._debugInfo=e,this.update()}))}};(0,n._)([(0,h.MZ)({constructOnly:!0})],E.prototype,"handle",void 0),E=(0,n._)([(0,u.$)("esri.views.interactive.snapping.featureSources.WorkerTileTreeDebugger")],E);var z=i(18690),x=i(30726),V=i(12016),N=i(31608),U=i(18117);let R=class extends s.A{get updating(){return this._updatingHandles.updating||this._workerHandleUpdating}constructor(e){super(e),this._updatingHandles=new p.U,this._suspendController=null,this.schedule=null,this.hasZ=!1,this.elevationAlignPointsInFeatures=async e=>{const t=[];for(const{points:i}of e.pointsInFeatures)for(const{z:e}of i)t.push(e);return{elevations:t,drapedObjectIds:new Set,failedObjectIds:new Set}},this.queryForSymbologySnapping=async()=>({candidates:[],sourceCandidateIndices:[]}),this.availability=0,this._workerHandleUpdating=!0,this._editId=0,this.updateOutFields=(0,l.sg)((async(e,t)=>{await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("updateOutFields",[...e],t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}))}destroy(){this._suspendController=(0,x.DC)(this._suspendController),this._workerHandle.destroy(),this._updatingHandles.destroy()}initialize(){this._workerHandle=new L(this.schedule,{alignElevation:async(e,t)=>{let{signal:i}=t;return{result:await this.elevationAlignPointsInFeatures(e.query,i)}},getSymbologyCandidates:async(e,t)=>{let{signal:i}=t;return{result:await this.queryForSymbologySnapping(e,i)}}}),this.addHandles([this._workerHandle.on("notify-updating",(e=>{let{updating:t}=e;return this._workerHandleUpdating=t})),this._workerHandle.on("notify-availability",(e=>{let{availability:t}=e;return this._set("availability",t)}))])}async setup(e,t){const i=function(e){return"multipatch"===e.geometryType||"mesh"===e.geometryType?null:{url:e.parsedUrl?.path??"",fieldsIndex:e.fieldsIndex.toJSON(),geometryType:N.g.toJSON(e.geometryType),capabilities:e.capabilities,objectIdField:e.objectIdField,globalIdField:e.globalIdField,spatialReference:e.spatialReference.toJSON(),timeInfo:e.timeInfo?.toJSON()}}(e.layer);if(null==i)return;const n={configuration:j(e.configuration),serviceInfo:i,spatialReference:e.spatialReference.toJSON(),hasZ:this.hasZ,elevationInfo:e.layer.elevationInfo?.toJSON()};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("setup",n,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async configure(e,t){const i=j(e);await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("configure",i,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async refresh(e){await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("refresh",{},e)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},e))}async fetchCandidates(e,t){const{point:i,filter:n,coordinateHelper:s}=e,r={...e,point:(0,U.T)(i[0],i[1],i[2],s.spatialReference.toJSON()),filter:n?.toJSON()};return this._workerHandle.invoke(r,t)}async updateTiles(e,t){const i={tiles:e.tiles,tileInfo:null!=e.tileInfo?e.tileInfo.toJSON():null,tileSize:e.tileSize};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("updateTiles",i,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async applyEdits(e,t){const i=this._editId++,n={id:i};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("beginApplyEdits",n,t));const s=await this._updatingHandles.addPromise((0,l.qr)(e.result,t)),r={id:i,edits:{addedFeatures:s.addedFeatures?.map((e=>{let{objectId:t}=e;return t})).filter(z.Ru)??[],deletedFeatures:s.deletedFeatures?.map((e=>{let{objectId:t,globalId:i}=e;return{objectId:t,globalId:i}}))??[],updatedFeatures:s.updatedFeatures?.map((e=>{let{objectId:t}=e;return t})).filter(z.Ru)??[]}};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("endApplyEdits",r,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}getDebugInfo(e){return this._workerHandle.invokeMethod("getDebugInfo",{},e)}async notifyElevationSourceChange(){await this._workerHandle.invokeMethod("notifyElevationSourceChange",{})}async notifySymbologyChange(){await this._workerHandle.invokeMethod("notifySymbologyChange",{})}async setSymbologySnappingSupported(e){await this._workerHandle.invokeMethod("setSymbologySnappingSupported",e)}async setSuspended(e){this._suspendController?.abort(),this._suspendController=new AbortController,await this._workerHandle.invokeMethod("setSuspended",e,this._suspendController.signal)}};function j(e){return{filter:null!=e.filter?e.filter.toJSON():null,customParameters:e.customParameters,viewType:e.viewType}}(0,n._)([(0,h.MZ)({constructOnly:!0})],R.prototype,"schedule",void 0),(0,n._)([(0,h.MZ)({constructOnly:!0})],R.prototype,"hasZ",void 0),(0,n._)([(0,h.MZ)({constructOnly:!0})],R.prototype,"elevationAlignPointsInFeatures",void 0),(0,n._)([(0,h.MZ)({constructOnly:!0})],R.prototype,"queryForSymbologySnapping",void 0),(0,n._)([(0,h.MZ)({readOnly:!0})],R.prototype,"updating",null),(0,n._)([(0,h.MZ)({readOnly:!0})],R.prototype,"availability",void 0),(0,n._)([(0,h.MZ)()],R.prototype,"_workerHandleUpdating",void 0),R=(0,n._)([(0,u.$)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorkerHandle")],R);class L extends V.B{constructor(e,t){super("FeatureServiceSnappingSourceWorker","fetchCandidates",{},e,{strategy:"dedicated",client:t})}}var $=i(19247),D=i(22848),B=i(88235);let J=class extends s.A{get tiles(){return[new _.U("0/0/0",0,0,0,(0,A.fA)(-1e8,-1e8,1e8,1e8))]}get tileInfo(){return new B.A({origin:new $.A({x:-1e8,y:1e8,spatialReference:this.layer.spatialReference}),size:[512,512],lods:[new D.A({level:0,scale:1,resolution:390625})],spatialReference:this.layer.spatialReference})}get tileSize(){return this.tileInfo.size[0]}constructor(e){super(e),this.pointOfInterest=null}};(0,n._)([(0,h.MZ)({readOnly:!0})],J.prototype,"tiles",null),(0,n._)([(0,h.MZ)({readOnly:!0})],J.prototype,"tileInfo",null),(0,n._)([(0,h.MZ)({readOnly:!0})],J.prototype,"tileSize",null),(0,n._)([(0,h.MZ)({constructOnly:!0})],J.prototype,"layer",void 0),(0,n._)([(0,h.MZ)()],J.prototype,"pointOfInterest",void 0),J=(0,n._)([(0,u.$)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTilesSimple")],J);var Q=i(5551);let W=class extends s.A{get _updateTilesParameters(){return{tiles:this._tilesOfInterest.tiles,tileInfo:this._tilesOfInterest.tileInfo,tileSize:this._tilesOfInterest.tileSize}}get _layerView(){return this.view?.allLayerViews.find((e=>e.layer===this._layer))}get _isSuspended(){return!(!(0,c.F2)(this._layer)||this.layerSource.sublayerSources.some((e=>e.enabled&&e.layer.visible)))||!!this.view&&(!1!==this._layerView?.suspended||!this.layerSource.enabled)}get updating(){return this._workerHandle?.updating||this._updatingHandles.updating}get _outFields(){const{view:e,_layerView:t,layerSource:i}=this,{layer:n}=i,{fieldsIndex:s,timeInfo:r,floorInfo:o,subtypeField:a}=n,l=t&&"filter"in t?t.filter:null,d=l?.where&&"1=1"!==l.where?this._getOrLoadWhereFields(l.where,s):[];if(l?.timeExtent&&r){const{startField:e,endField:t}=r,i=s.get(e)?.name??e,n=s.get(t)?.name??t;i&&d.push(i),n&&d.push(n)}if(e?.map&&(0,T.Tu)(e.map)&&e.map.utilityNetworks?.find((e=>e.isUtilityLayer(n)))){const e=n.fieldsIndex.get("assetGroup")?.name,t=n.fieldsIndex.get("assetType")?.name;e&&t&&(d.push(e),d.push(t))}if(n&&o?.floorField&&e?.floors?.length){const e=s.get(o.floorField)?.name??o.floorField;e&&d.push(e)}if(a){const e=s.get(a)?.name??a;e&&d.push(e)}return new Set(d)}get configuration(){const{view:e}=this,{apiKey:t,customParameters:i}=this._layer,n=null!=e?e.type:"2d";return{filter:this._layer.createQuery(),customParameters:t?{...i,token:t}:i,viewType:n}}get availability(){return this._workerHandle?.availability??0}get _layer(){return this.layerSource.layer}constructor(e){super(e),this._updatingHandles=new p.U,this._workerHandle=null,this._debug=null,this._memoizedMakeGetGroundElevation=(0,a.B)(P.p)}initialize(){let e;const t=this.view;if(null==t||t.destroyed)this._tilesOfInterest=new J({layer:this._layer}),e=this._workerHandle=new R;else switch(t.type){case"2d":this._tilesOfInterest=new I({view:t,layer:this._layer}),e=this._workerHandle=new R;break;case"3d":{const{resourceController:i}=t,n=this._layer;this._tilesOfInterest=new k({view:t}),e=this._workerHandle=new R({schedule:e=>i.immediate.schedule(e),hasZ:this._layer.hasZ&&(this._layer.returnZ??!0),elevationAlignPointsInFeatures:async(e,i)=>{const s=await t.whenLayerView(n);return(0,l.Te)(i),s.elevationAlignPointsInFeatures(e,i)},queryForSymbologySnapping:async(e,i)=>{const s=await t.whenLayerView(n);return(0,l.Te)(i),s.queryForSymbologySnapping(e,i)}}),this.addHandles([t.elevationProvider.on("elevation-change",(t=>{let{context:i}=t;const{elevationInfo:s}=n;(0,y.Up)(i,s)&&(0,l.QZ)(e.notifyElevationSourceChange())})),(0,d.wB)((()=>n.elevationInfo),(()=>(0,l.QZ)(e.notifyElevationSourceChange())),d.Vh),(0,d.wB)((()=>this._layerView?.layer?.renderer),(()=>(0,l.QZ)(e.notifySymbologyChange())),d.Vh),(0,d.wB)((()=>this._layerView?.symbologySnappingSupported??!1),(t=>(0,l.QZ)(e.setSymbologySnappingSupported(t))),d.Vh),(0,d.on)((()=>this._layerView?.layer),["edits","apply-edits","graphic-update"],(()=>e.notifySymbologyChange()))]);break}}this.addHandles([(0,o.DQ)(e)]),(0,l.QZ)(e.setup({layer:this._layer,spatialReference:this.spatialReference,configuration:this.configuration},null)),this._updatingHandles.add((()=>this._updateTilesParameters),(()=>(0,l.QZ)(e.updateTiles(this._updateTilesParameters,null))),d.Vh),this.addHandles([(0,d.wB)((()=>this.configuration),(t=>(0,l.QZ)(e.configure(t,null))),d.OH),(0,d.wB)((()=>this._outFields),(t=>(0,l.QZ)(e.updateOutFields(t))),d.Vh),(0,d.wB)((()=>this._isSuspended),(t=>(0,l.QZ)(e.setSuspended(t))),d.pc)]),null!=t&&this.addHandles((0,d.wB)((()=>Q.A.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES),(i=>{i&&!this._debug?(this._debug=new E({view:t,handle:e}),this.addHandles((0,o.DQ)(this._debug),"debug")):!i&&this._debug&&this.removeHandles("debug")}),d.Vh)),this.addHandles(this.layerSource.layer.on("apply-edits",(t=>{(0,l.QZ)(e.applyEdits(t,null))})))}destroy(){this._updatingHandles.destroy()}refresh(){this._workerHandle?.refresh(null)}async fetchCandidates(e,t){const{coordinateHelper:i,point:n}=e;this._tilesOfInterest.pointOfInterest=i.arrayToPoint(n);const s=this._memoizedMakeGetGroundElevation(this.view,i.spatialReference);return(await this._workerHandle.fetchCandidates({...e},t)).candidates.map((e=>(0,P.$)(e,s)))}getDebugInfo(e){return this._workerHandle.getDebugInfo(e)}_getOrLoadWhereFields(e,t){const{_whereModule:n}=this;if(!this._loadWhereModuleTask&&!n){const e=(0,r.UT)((async()=>{const e=await Promise.all([i.e(7216),i.e(3620)]).then(i.bind(i,97216));return this._whereModule=e.WhereClause,this._whereModule}));return this._loadWhereModuleTask=e,this._updatingHandles.addPromise(e.promise),[]}if(!n)return[];try{return n.create(e,t).fieldNames}catch(s){return[]}}};(0,n._)([(0,h.MZ)({constructOnly:!0})],W.prototype,"spatialReference",void 0),(0,n._)([(0,h.MZ)({constructOnly:!0})],W.prototype,"layerSource",void 0),(0,n._)([(0,h.MZ)({constructOnly:!0})],W.prototype,"view",void 0),(0,n._)([(0,h.MZ)()],W.prototype,"_tilesOfInterest",void 0),(0,n._)([(0,h.MZ)({readOnly:!0})],W.prototype,"_updateTilesParameters",null),(0,n._)([(0,h.MZ)()],W.prototype,"_layerView",null),(0,n._)([(0,h.MZ)()],W.prototype,"_isSuspended",null),(0,n._)([(0,h.MZ)({readOnly:!0})],W.prototype,"updating",null),(0,n._)([(0,h.MZ)()],W.prototype,"_outFields",null),(0,n._)([(0,h.MZ)({readOnly:!0})],W.prototype,"configuration",null),(0,n._)([(0,h.MZ)({readOnly:!0})],W.prototype,"availability",null),(0,n._)([(0,h.MZ)()],W.prototype,"_loadWhereModuleTask",void 0),(0,n._)([(0,h.MZ)()],W.prototype,"_whereModule",void 0),W=(0,n._)([(0,u.$)("esri.views.interactive.snapping.featureSources.FeatureServiceSnappingSource")],W)},18153:(e,t,i)=>{i.d(t,{$:()=>l,p:()=>d});var n=i(23862),s=i(80794),r=i(9876),o=i(72317);function a(e){let{x:t,y:i,z:s}=e;return(0,n.fA)(t,i,s??0)}function l(e,t){switch(e.type){case"edge":return e.draped?new s.X({edgeStart:a(e.start),edgeEnd:a(e.end),targetPoint:(0,n.de)(a(e.target)),objectId:e.objectId,getGroundElevation:t}):new r.z({edgeStart:a(e.start),edgeEnd:a(e.end),targetPoint:(0,n.de)(a(e.target)),objectId:e.objectId,isDraped:!1});case"vertex":return new o.C({targetPoint:(0,n.de)(a(e.target)),objectId:e.objectId,isDraped:!1})}}function d(e,t){return null!=e&&"3d"===e.type?(i,n)=>e.elevationProvider.getElevation(i,n,0,t,"ground"):()=>null}},23241:(e,t,i)=>{i.d(t,{_:()=>r});var n=i(20664),s=i(64753);class r extends s.m{constructor(e,t,i){super(t,i),this.point=e}equals(e){return e instanceof r&&(0,n.e)(this.point,e.point)}}},29614:(e,t,i)=>{i.d(t,{E:()=>v});var n=i(35143),s=i(69539),r=i(39356),o=(i(95444),i(91967)),a=i(19276),l=i(15941),d=i(46053),h=(i(81806),i(76460),i(47249),i(85842)),u=i(37471),p=i(86875),c=i(86659),y=i(21405),_=i(48670),g=i(92135),f=i(68905);const w=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]];let v=class extends o.A{constructor(e){super(e),this.updating=!1,this.enablePolygons=!0,this.enableLabels=!0,this._polygons=new Map,this._labels=new Map,this._enabled=!0}initialize(){this._symbols=w.map((e=>new p.A({color:[e[0],e[1],e[2],.6],outline:{color:"black",width:1}}))),this.update()}destroy(){this._enabled=!1,this.clear()}get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&(this._enabled=e,this.update())}update(){if(!this._enabled)return void this.clear();const e=this.getTiles(),t=new Array,i=new Set((this._labels.size,this._labels.keys()));e.forEach(((n,o)=>{const d=n.lij.toString();i.delete(d);const h=n.lij[0],p=n.geometry;if(this.enablePolygons&&!this._polygons.has(d)){const e=new r.A({geometry:p,symbol:this._symbols[h%this._symbols.length]});this._polygons.set(d,e),t.push(e)}if(this.enableLabels){const i=(e=>{if(null!=e.label)return e.label;let t=e.lij.toString();return null!=e.loadPriority&&(t+=` (${e.loadPriority})`),t})(n),h=o/(e.length-1),w=(0,l.Cc)(0,200,h),v=(0,l.Cc)(20,6,h)/.75,m=null!=n.loadPriority&&n.loadPriority>=e.length,b=new s.A([w,m?0:w,m?0:w]),S="3d"===this.view.type?()=>new u.A({verticalOffset:new _.A({screenLength:40/.75}),callout:new g.A({color:new s.A("white"),border:new f.A({color:new s.A("black")})}),symbolLayers:new a.A([new y.A({text:i,halo:{color:"white",size:1/.75},material:{color:b},size:v})])}):()=>new c.A({text:i,haloColor:"white",haloSize:1/.75,color:b,size:v}),I=this._labels.get(d);if(I){const e=S();null!=I.symbol&&JSON.stringify(e)===JSON.stringify(I.symbol)||(I.symbol=e)}else{const e=new r.A({geometry:p.extent.center,symbol:S()});this._labels.set(d,e),t.push(e)}}}));const n=new Array;i.forEach((e=>{const t=this._polygons.get(e);null!=t&&(n.push(t),this._polygons.delete(e));const i=this._labels.get(e);null!=i&&(n.push(i),this._labels.delete(e))})),this.view.graphics.removeMany(n),this.view.graphics.addMany(t)}clear(){this.view.graphics.removeMany(Array.from(this._polygons.values())),this.view.graphics.removeMany(Array.from(this._labels.values())),this._polygons.clear(),this._labels.clear()}};(0,n._)([(0,d.MZ)({constructOnly:!0})],v.prototype,"view",void 0),(0,n._)([(0,d.MZ)({readOnly:!0})],v.prototype,"updating",void 0),(0,n._)([(0,d.MZ)()],v.prototype,"enabled",null),v=(0,n._)([(0,h.$)("esri.views.support.TileTreeDebugger")],v)}}]);
//# sourceMappingURL=5376.908b7b29.chunk.js.map