"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[9031],{74294:(e,t,r)=>{r.d(t,{Eu:()=>f,bh:()=>d,r0:()=>p,ry:()=>g});var n=r(98773),i=r(53084),o=r(74438);const s={setAttribute(){},rollback(){},commit(){}};var l,a;function d(e,t){const r=t.attributes[e.objectIdField];if(null==r)return s;const n=e.sessions.get(r);if(n)return n;const o=(0,i.o8)(t.attributes),a=new Set,d=e.i3sOverrides.createInteractiveEditSession(r),u=new Map,c=(e,t)=>{const n=u.get(e);if(null==n){const n=t.indexOf(r);return u.set(e,n),n}return n};let f=l.EDITING;const p={setAttribute(r,n){if(f!==l.EDITING)return;const i=e.fieldsIndex.get(r);if(!i)return;const s=e.attributeStorageInfo.findIndex((e=>e.name===i.name));if(s<0)return;if(!(r in o))throw new Error(`Attribute "${r}" is not an attribute of the edited feature.`);d.setAttribute(s,n);const u=e.attributeStorageInfo[s];let p=!1;a.add(r),e.forEachNode(((r,i)=>{const o=c(r,i);if(-1===o)return;const s=e.getAttributeData(r.index);if(s){const i=s[u.name];i&&(i[o]=n,e.setAttributeData(r.index,s,t),p=!0)}})),p&&e.clearMemCache()},rollback(){if(f===l.EDITING){for(const e of a)this.setAttribute(e,o[e]);d.remove(),f=l.ROLLED_BACK,e.sessions.delete(r)}},commit(){f===l.EDITING&&(d.remove(),f=l.COMMITTED,e.sessions.delete(r))}};return e.sessions.set(r,p),p}function u(e,t,r){const{gidToFeatureInfo:n,oidToFeatureInfo:i,fieldsIndex:o,objectIdField:s,globalIdField:l,featureOrIdentifierList:a}=r;if(!r.featuresResolved&&null!=a){for(const e of a){const t={feature:null,oid:-1,gid:null};if("attributes"in e){t.feature=e;const r=e.attributes;if(null!=r)for(const e in r){if(-1!==t.oid&&null!=t.gid)break;const n=o.normalizeFieldName(e);n===s&&(t.oid=r[e]??-1),n===l&&(t.gid=r[e])}}else t.oid=e.objectId??-1,t.gid=e.globalId;null!=t.gid&&n.set(t.gid,t),-1!==t.oid&&i.set(t.oid,t)}r.featuresResolved=!0}return(-1!==e?i.get(e):null)??(null!=t?n.get(t):null)}function c(e,t,r,n){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=!(arguments.length>5&&void 0!==arguments[5])||arguments[5];const s=[],l={gidToFeatureInfo:new Map,oidToFeatureInfo:new Map,featuresResolved:null==r,fieldsIndex:e.fieldsIndex,objectIdField:e.objectIdField,globalIdField:e.globalIdField,featureOrIdentifierList:r};for(const a of t){if(null!=a.error)continue;const e=a.objectId??-1,t=a.globalId,r=(-1===e||o?u(e,t,l):null)??{feature:null,oid:e,gid:t},d={oid:-1===e?r.oid:e,gid:t??r.gid,feature:r.feature,result:a};if(s.push(d),-1===d.oid&&null!=d.gid&&null!=i&&(d.oid=i.get(d.gid)??-1),-1===d.oid&&null!=d.gid){let e=n.get(d.gid);null==e&&(e=[],n.set(d.gid,e)),e.push(d)}}return s}async function f(e,t){const r=new Map,i=c(e,t.addedFeatures,t.edits?.addFeatures,r),s=c(e,t.updatedFeatures,t.edits?.updateFeatures,r),l=c(e,t.deletedFeatures,t.edits?.deleteFeatures,r,t.globalIdToObjectId,!1);return r.size>0&&await async function(e,t){const r=e.i3sOverrides.layer.associatedLayer;if(null==r?.globalIdField)return;const i=r.createQuery(),{objectIdField:s,globalIdField:l}=r;i.where=Array.from(t.keys()).map((e=>`${l}='${e}'`)).join(" OR "),i.returnGeometry=!1,i.outFields=[s,l],i.cacheHint=!1;const a=await(0,n.DZ)((0,o.SE)(r,i));if(!a.ok)return;const d=a.value.features;for(const n of d){const e=n.attributes[l],r=n.attributes[s];if(null==e||null==r||-1===r)continue;const i=t.get(e);if(null!=i)for(const t of i)t.oid=r}}(e,r),{adds:i.filter((e=>-1!==e.oid)),updates:s.filter((e=>-1!==e.oid)),deletes:l.filter((e=>-1!==e.oid))}}function p(e,t){const r=new Map,n=e=>{for(const{oid:t,feature:n}of e){const e=n?.geometry;"mesh"===e?.type&&r.set(t,e)}};n(t.adds),n(t.updates);for(const i of t.deletes)r.set(i.oid,null);for(const[i,o]of r)e.i3sOverrides.updateGeometry(i,o)}function g(e,t){const r=function(e,t){const r=t.updates;if(!r||0===r.length)return new m;const n=new m,i=new Map;for(let o=0;o<e.attributeStorageInfo.length;o++)i.set(e.attributeStorageInfo[o].name,o);return e.forEachNode(((t,i)=>{for(const o of r){if(null==o.feature)continue;const r=o.feature,s=o.oid,l=i.indexOf(s);for(const i in r.attributes){const o=e.fieldsIndex.normalizeFieldName(i),a=y(n,t.index,o),d=r.attributes[i];a.push({featureIndex:l,featureId:s,value:d})}}})),n}(e,t),n=function(e,t){const r=new Map,n=t.adds;if(!n||0===n.length||null==e.globalIdField)return r;for(const i of n){const e=i.oid,t=i.feature;"mesh"===t?.geometry?.type&&r.set(e,t)}return r}(e,t);if(0===r.size&&0===n.size)return;const i=new Map;for(let f=0;f<e.attributeStorageInfo.length;f++)i.set(e.attributeStorageInfo[f].name,f);let o=!1;r.forEach(((t,r)=>{const n=e.getAttributeData(r);let s=!1;t.forEach(((t,r)=>{const l=null!=n?n[r]:null,a=i.get(r);for(const{featureIndex:n,value:i,featureId:d}of t)l&&(l[n]=i,s=!0,o=!0),e.i3sOverrides.updateAttributeValue(d,a,i)})),s&&e.setAttributeData(r,n,null)})),o&&e.clearMemCache();const{fieldsIndex:s,i3sOverrides:l,objectIdField:a,globalIdField:d}=e,u=l.layer.associatedLayer?.infoFor3D,c=new Set(u?[...Object.values(u.assetMapFieldRoles),...Object.values(u.transformFieldRoles)]:[]);for(const[f,p]of n){l.featureAdded(f);const{attributes:e}=p;for(const t in e){if(t!==a&&t!==d&&c.has(t))continue;const r=s.normalizeFieldName(t),n=null!=r?i.get(r):null;if(null==n)continue;const o=e[t];l.updateAttributeValue(f,n,o)}}}function y(e,t,r){const n=function(e,t){const r=e.get(t);if(r)return r;const n=new h;return e.set(t,n),n}(e,t),i=null!=r&&n.get(r);if(i)return i;const o=new Array;return n.set(r,o),o}(a=l||(l={}))[a.EDITING=0]="EDITING",a[a.ROLLED_BACK=1]="ROLLED_BACK",a[a.COMMITTED=2]="COMMITTED";const h=Map,m=Map},58698:(e,t,r)=>{r.d(t,{R:()=>a});var n=r(35143),i=r(50076),o=(r(76460),r(81806),r(47249),r(85842)),s=r(53430),l=r(2257);const a=e=>{let t=class extends e{_validateFetchPopupFeatures(e){const{layer:t}=this,{popupEnabled:r}=t;if(!r)throw new i.A("scenelayerview3d:fetchPopupFeatures","Popups are disabled",{layer:t});if(!(0,l.D8)(t,e))throw new i.A("scenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{layer:t})}async prepareFetchPopupFeatures(e){}async fetchPopupFeaturesFromGraphics(e,t){if(this._validateFetchPopupFeatures(t),0===e.length)return[];const r="scene"===this.layer.type&&null!=this.layer.associatedLayer?this.layer.associatedLayer:this.layer;let n=[];"fieldsIndex"in this.layer&&(n=(0,s.hL)(this.layer.fieldsIndex,await(0,l.TO)(r,(0,l.D8)(this.layer,t)))),await this.prepareFetchPopupFeatures(n);const i=new Set,o=[],a=[];for(const l of e)(0,s.Q1)(n,l,i)?a.push(l):o.push(l);if(0===a.length)return o;const d=new Map;for(let s=0;s<e.length;s++)d.set(e[s].getObjectId()??0,s);const u=await this.whenGraphicAttributes(a,[...i]).catch((()=>a)).then((e=>o.concat(e)));return u.sort(((e,t)=>{const r=e.getObjectId()??0,n=d.get(r)??0,i=t.getObjectId()??0;return n-(d.get(i)??0)})),u}};return t=(0,n._)([(0,o.$)("esri.views.3d.layers.support.PopupSceneLayerView")],t),t}},33680:(e,t,r)=>{r.d(t,{z:()=>p});var n=r(35143),i=r(91967),o=r(76460),s=r(50346),l=r(68134),a=r(46053),d=r(85842);const u=e=>{let t=class extends e{constructor(){super(...arguments),this._numUpdating=0}get updating(){return this._numUpdating>0}autoUpdateAsync(e,t){const r=(0,s.sg)((async t=>{++this._numUpdating;try{const r=await t;this.destroyed||this._set(e,r)}catch(r){o.A.getLogger(this).warn(`Async update of "${String(e)}" failed. Async update functions should not throw exceptions.`)}--this._numUpdating}));return(0,l.wB)(t,r,l.Vh)}};return(0,n._)([(0,a.MZ)({readOnly:!0})],t.prototype,"updating",null),(0,n._)([(0,a.MZ)()],t.prototype,"_numUpdating",void 0),t=(0,n._)([(0,d.$)("esri.core.AsyncUpdate")],t),t};let c=class extends(u(i.A)){};c=(0,n._)([(0,d.$)("esri.core.AsyncUpdate")],c);r(81806),r(47249);var f=r(53430);let p=class extends(u(i.A)){get layer(){return this.layerView.layer}get requiredFields(){const{layerView:{layer:{fieldsIndex:e},definitionExpressionFields:t},rendererFields:r,labelingFields:n,viewFilterFields:i}=this;return(0,f.DB)(e,[...t??[],...r??[],...n??[],...i??[]])}constructor(e){super(e)}initialize(){this.addHandles([this.autoUpdateAsync("rendererFields",(async()=>{const{fieldsIndex:e,renderer:t}=this.layer;return t?this._getFieldsAsync((r=>t.collectRequiredFields(r,e))):null})),this.autoUpdateAsync("labelingFields",(async()=>{const{layer:e}=this;return e.labelsVisible?this._getFieldsAsync((t=>(0,f.Im)(t,e))):null})),this.autoUpdateAsync("viewFilterFields",(()=>{const{layer:e,mergedFilter:t}=this.layerView;return this._getFieldsAsync((r=>(0,f.o)(r,e,t)))}))])}async _getFieldsAsync(e){const t=new Set;try{return await e(t),Array.from(t).sort()}catch(r){return o.A.getLogger(this).error(r),null}}};(0,n._)([(0,a.MZ)()],p.prototype,"layerView",void 0),(0,n._)([(0,a.MZ)()],p.prototype,"layer",null),(0,n._)([(0,a.MZ)()],p.prototype,"requiredFields",null),(0,n._)([(0,a.MZ)()],p.prototype,"rendererFields",void 0),(0,n._)([(0,a.MZ)()],p.prototype,"labelingFields",void 0),(0,n._)([(0,a.MZ)()],p.prototype,"viewFilterFields",void 0),p=(0,n._)([(0,d.$)("esri.views.3d.layers.support.SceneLayerViewRequiredFields")],p)},38229:(e,t,r)=>{r.d(t,{p:()=>i});var n=r(53430);function i(){return{requiredFields:{type:[String],readOnly:!0},availableFields:{type:[String],readOnly:!0,get:function(){const{layer:e,layer:{fieldsIndex:t},requiredFields:r}=this;return e.outFields?(0,n.DB)(t,[...(0,n.hL)(t,e.outFields),...r]):(0,n.DB)(t,r)}}}}},82558:(e,t,r)=>{r.d(t,{A:()=>y});var n=r(35143),i=r(18690),o=r(76460),s=r(30726),l=r(53596),a=r(50346),d=r(68134),u=r(46053),c=(r(81806),r(85842)),f=r(9624),p=r(91196);let g=class extends p.A{constructor(){super(...arguments),this.layer=null,this.filter=null,this._geometryEngine=null,this._projectionEngineLoaded=!1,this._abortController=new AbortController}get availableFields(){return[]}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){throw new Error("Not implemented")}get maximumNumberOfFeaturesExceeded(){return!1}get layerFilter(){return(0,l.w$)(this._layerFilter)}get _layerFilter(){const e=this.layer?.filter;if(null==e||e.geometries.length<1)return null;const t=this._geometryEngine;if(null==t||!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine)return l.J7;const r=e.geometries.at(0).spatialReference,n=e.geometries.toArray().map((e=>{try{e=t.simplify(e)}catch(n){return o.A.getLogger(this).warnOncePerTick("Failed to simplify scene filter mask polygon. Polygon will be ignored."),null}if(null==e)return null;if(e.spatialReference.equals(r))return e;try{return(0,f.project)(e,r)}catch(n){return o.A.getLogger(this).warnOncePerTick("Failed to project scene filter mask polygon. Polygon will be ignored."),null}})).filter(i.Ru).sort(((e,t)=>e.extent.xmin-t.extent.xmin)),s=new Set,a=new Array,d=new Array;for(let i of n){const e=i.extent.xmin;if(a.length=0,s.forEach((r=>{if(e>=r.extent.xmax)return d.push(r),void s.delete(r);i.extent.ymin<=r.extent.ymax&&i.extent.ymax>=r.extent.ymin&&t.intersects(i,r)&&a.push(r)})),a.length>0){a.push(i);try{i=t.union(a)}catch(u){o.A.getLogger(this).warnOncePerTick("Failed to unify filter mask polygons. Polygon will be ignored.");continue}a.pop(),a.forEach((e=>s.delete(e)))}s.add(i)}return s.forEach((e=>d.push(e))),d.length>0?{spatialRelationship:e.spatialRelationship,geometries:d}:null}get _filterNeedsProjectionEngine(){const e=this.layer.filter;if(null==e||e.geometries.length<=1)return!1;const t=e.geometries.at(0).spatialReference;return e.geometries.some((e=>{let{spatialReference:r}=e;return!r.equals(t)&&!(0,f.canProjectWithoutEngine)(r,t)}))}get layerFilterUpdating(){return(0,l.DS)(this._layerFilter)}initialize(){const{signal:e}=this._abortController;(0,d.C_)((()=>this.destroyed||!this._geometryEngine&&this.layer?.filter?.geometries?.length),e).then((async()=>{(0,a.QP)(e),this._geometryEngine=await Promise.all([r.e(2612),r.e(3391)]).then(r.bind(r,63391))})).catch(a.jH),this._projectionEngineLoaded=(0,f.isLoaded)(),(0,d.C_)((()=>this.destroyed||!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine),e).then((async()=>{(0,a.QP)(e),await(0,f.load)(),this._projectionEngineLoaded=!0})).catch(a.jH)}destroy(){this._abortController=(0,s.DC)(this._abortController)}highlight(e){throw new Error("Not implemented")}queryFeatures(e,t){throw new Error("Not implemented")}queryObjectIds(e,t){throw new Error("Not implemented")}queryFeatureCount(e,t){throw new Error("Not implemented")}createQuery(){throw new Error("Not implemented")}queryExtent(e,t){throw new Error("Not implemented")}};(0,n._)([(0,u.MZ)()],g.prototype,"layer",void 0),(0,n._)([(0,u.MZ)()],g.prototype,"availableFields",null),(0,n._)([(0,u.MZ)()],g.prototype,"maximumNumberOfFeatures",null),(0,n._)([(0,u.MZ)({readOnly:!0})],g.prototype,"maximumNumberOfFeaturesExceeded",null),(0,n._)([(0,u.MZ)()],g.prototype,"filter",void 0),(0,n._)([(0,u.MZ)({readOnly:!0})],g.prototype,"layerFilter",null),(0,n._)([(0,u.MZ)({readOnly:!0})],g.prototype,"_layerFilter",null),(0,n._)([(0,u.MZ)()],g.prototype,"_geometryEngine",void 0),(0,n._)([(0,u.MZ)()],g.prototype,"_projectionEngineLoaded",void 0),(0,n._)([(0,u.MZ)()],g.prototype,"_filterNeedsProjectionEngine",null),(0,n._)([(0,u.MZ)()],g.prototype,"layerFilterUpdating",null),g=(0,n._)([(0,c.$)("esri.views.layers.SceneLayerView")],g);const y=g}}]);
//# sourceMappingURL=9031.6f0063fe.chunk.js.map