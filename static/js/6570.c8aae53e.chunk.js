"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[6570],{26570:(e,t,i)=>{i.r(t),i.d(t,{default:()=>E});var a=i(35143),s=i(19276),n=i(50076),o=i(76460),r=i(87663),p=i(77717),d=i(50346),h=i(90534),l=i(49723),y=i(46053),c=(i(81806),i(47249),i(28379)),u=i(85842),f=i(17707),g=i(49140),m=i(25515),M=i(68705),w=i(83716),_=i(52451),b=i(19502),T=i(65624),D=i(31362),S=i(11270),A=i(94729),L=i(21617),v=i(5682),k=i(95363),G=i(14476),N=i(79453);let C=class extends((0,T.dM)((0,v.j)((0,L.J)((0,b.b)((0,S.q)((0,A.A)((0,p.P)((0,D.d)(m.A))))))))){constructor(e){super(e),this._graphTypeLookup=new Map,this._namedTypesModified=!1,this.dataManager=null,this.definitionSetMap=null,this.knowledgeGraph=null,this.layers=new(s.A.ofType(w.A)),this.memberEntityTypes=null,this.memberRelationshipTypes=null,this.operationalLayerType="KnowledgeGraphLayer",this.sublayerIdsCache=new Map,this.tables=new(s.A.ofType(w.A)),this.type="knowledge-graph",this.url=null}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){try{await this.loadFromPortal({supportedTypes:["Knowledge Graph Layer"]},e)}catch(t){(0,d.QP)(t)}await this._fetchMetadata(),await this._initializeLayerProperties(),this.loadLayerAssumingLocalCache()}async _fetchMetadata(){if(!this.url)throw new n.A("knowledge-graph:missing-url","KnowledgeGraphLayer must be created with a url");const e=await(0,G.fetchKnowledgeGraph)(this.url);this.knowledgeGraph=e,this._forEachGraphType((e=>{e.name&&this._graphTypeLookup.set(e.name,e)}))}async _initializeLayerProperties(){this.originIdOf("inclusionModeDefinition")===g.Gr.USER?this._validateInclusionModeDefinition():await this._initializeInclusionModeDefinition(),this._setMemberTypes(),this.dataManager=new M.PB({knowledgeGraph:this.knowledgeGraph,inclusionModeDefinition:this.inclusionModeDefinition})}async _initializeInclusionModeDefinition(){const e=this.definitionSetMap?await(0,_._s)(this.definitionSetMap,!0):{generateAllSublayers:!0,namedTypeDefinitions:new Map};[...this.layers.toArray(),...this.tables.toArray()].forEach((t=>{const i=this._graphTypeLookup.get(t.graphTypeName);i&&!e.namedTypeDefinitions.has(i.name)&&e.namedTypeDefinitions.set(i.name,{useAllData:!0})})),this.setAtOrigin("inclusionModeDefinition",e,(0,g.OL)(this.originIdOf("definitionSetMap")))}_validateInclusionModeDefinition(){const{inclusionModeDefinition:e}=this;if(!e)return;const{namedTypeDefinitions:t}=e;if(t?.size>0)t.forEach(((e,i)=>{const a=this._graphTypeLookup.get(i);if(!a)return o.A.getLogger(this).warn(`A named type, ${i}, was in the inclusion list that wasn't in the data model and will be removed`),void t.delete(i);"relationship"!==a.type&&"entity"!==a.type&&(o.A.getLogger(this).warn(`A named type, ${i}, was in the inclusion list that wasn't properly modeled and will be removed`),t.delete(i))}));else if(!e.generateAllSublayers)throw new n.A("knowledge-graph:composite-layer-constructor","If an explicit inclusion definition is defined, at least one namedTypeDefinition must also be defined")}_setMemberTypes(){let e=[],t=[];const{inclusionModeDefinition:i}=this,a=i?.namedTypeDefinitions;!i||i.generateAllSublayers?(e=this.knowledgeGraph.dataModel?.entityTypes??[],t=this.knowledgeGraph.dataModel?.relationshipTypes??[]):a&&a.size>0&&a.forEach(((i,a)=>{const s=this._graphTypeLookup.get(a);switch(s?.type){case"relationship":t.push(s);break;case"entity":e.push(s)}})),this.memberEntityTypes=e,this.memberRelationshipTypes=t}_forEachGraphType(e){[...this.knowledgeGraph.dataModel?.entityTypes??[],...this.knowledgeGraph.dataModel?.relationshipTypes??[]].forEach((t=>{e(t)}))}_refreshNamedTypes(){this._namedTypesModified=!0;for(const e of this.layers)e.emit("refresh",{dataChanged:!0});for(const e of this.tables)e.emit("refresh",{dataChanged:!0})}async _handleNewRecords(e){const t=[];this.dataManager.addToLayer(e);for(const i of e)this.sublayerIdsCache.has(i.typeName)||(this.sublayerIdsCache.set(i.typeName,new Set),t.push(i.typeName)),this.sublayerIdsCache.get(i.typeName).add(i.id);for(const i of t){const e=this._graphTypeLookup.get(i);e&&(this._addSublayer(e).title=i,"entity"===e.type?this.dataManager.entityTypeNames.add(i):this.dataManager.relationshipTypeNames.add(i),this.dataManager.sublayerCaches.set(i,new Map))}this._refreshNamedTypes()}_createSublayers(e,t,i){e.forEach((e=>{const a=this._createSublayer(e);i(a)&&t.push(a),this._updateSublayerCaches(e)}))}_addSublayer(e){const t=this._createSublayer(e);return t.geometryType?this.layers.push(t):this.tables.push(t),t}_createSublayer(e){return new w.A({objectType:e,parentCompositeLayer:this,graphType:e.type,title:e.name})}_updateSublayers(e,t){t.forEach((t=>{t.parentCompositeLayer=this;const i=e.find((e=>e.type===t.graphType&&e.name===t.graphTypeName));i&&(t.objectType=i,t.read({title:i.name},{origin:"service"}),this._updateSublayerCaches(i))}))}_updateSublayerCaches(e){const t=this.dataManager.sublayerCaches;t.has(e.name)||t.set(e.name,new Map)}_saveUrlAsNewResource(e,t,i,a){e[t]="<pending>",i.pendingOperations.push(async function(e){const t=await(0,_.fe)(e);return new Blob([t],{type:"application/x-protobuf"})}(this.inclusionModeDefinition).then((s=>{const n=function(e){const t=`definitionSetMap-${(0,l.lk)()}.dat`,i=(0,h.fj)("knowledgeGraphLayer",t);return e.resourceFromPath(i)}(a);e[t]=n.itemRelativeUrl,i.toAdd.push({resource:n,content:{type:"blob",blob:s},compress:!1,finish:e=>{this.definitionSetMap=e.url}})})))}_displaysAllRecords(e){for(const[,{useAllData:t}]of e.namedTypeDefinitions)if(!t)return!1;return!0}readDefinitionSetMap(e,t,i){return(0,N.f)(e,i)}writeDefinitionSetMap(e,t,i,a){const s=a?.portalItem,n=a?.resources,o=(0,g.aB)(a?.origin);if(!s||!n||null==o)return void(e&&(t[i]=(0,N.t)(e,a)));const{inclusionModeDefinition:r}=this;if(!r||this._displaysAllRecords(r))return void(this.definitionSetMap=null);const p=this.originIdOf("inclusionModeDefinition");if(p===g.Gr.USER||this._namedTypesModified||o<p)this._saveUrlAsNewResource(t,i,n,s);else if(o===p&&e){const o=(0,N.t)(e,a);(0,h.oP)(o)?this._saveUrlAsNewResource(t,i,n,s):t[i]=o}}set inclusionModeDefinition(e){"loaded"!==this.loadStatus&&"failed"!==this.loadStatus?this._set("inclusionModeDefinition",e):o.A.getLogger(this).error("#inclusionModeDefinition","inclusionModeDefinition cannot be changed after the layer is loaded.")}loadLayerAssumingLocalCache(){const e=[...this.memberEntityTypes,...this.memberRelationshipTypes];this.originIdOf("layers")===g.Gr.DEFAULTS?this._createSublayers(e,this.layers,(e=>!!e.geometryType)):this._updateSublayers(e,this.layers),this.originIdOf("tables")===g.Gr.DEFAULTS?this._createSublayers(e,this.tables,(e=>!e.geometryType)):this._updateSublayers(e,this.tables),this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.forEach(((e,t)=>{const i=(0,r.tE)(this.sublayerIdsCache,t,(()=>new Set));e.members?.forEach((e=>{i.add(e.id)}))}))}async addRecords(e){await this._handleNewRecords(e)}async removeRecords(e){const t=[];for(const i of e)!1===this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(i.typeName)?.useAllData&&this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(i.typeName)?.members?.has(i.id)&&t.push(i);this.dataManager.removeFromLayer(t);for(const i of t)this.sublayerIdsCache.get(i.typeName)?.delete(i.id);return this._refreshNamedTypes(),t}};(0,a._)([(0,y.MZ)()],C.prototype,"dataManager",void 0),(0,a._)([(0,y.MZ)({json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0}}})],C.prototype,"definitionSetMap",void 0),(0,a._)([(0,c.w)("definitionSetMap")],C.prototype,"readDefinitionSetMap",null),(0,a._)([(0,f.K)("definitionSetMap")],C.prototype,"writeDefinitionSetMap",null),(0,a._)([(0,y.MZ)()],C.prototype,"inclusionModeDefinition",null),(0,a._)([(0,y.MZ)()],C.prototype,"knowledgeGraph",void 0),(0,a._)([(0,y.MZ)({type:s.A.ofType(w.A),json:{write:{ignoreOrigin:!0}}})],C.prototype,"layers",void 0),(0,a._)([(0,y.MZ)()],C.prototype,"memberEntityTypes",void 0),(0,a._)([(0,y.MZ)()],C.prototype,"memberRelationshipTypes",void 0),(0,a._)([(0,y.MZ)({type:["KnowledgeGraphLayer"]})],C.prototype,"operationalLayerType",void 0),(0,a._)([(0,y.MZ)()],C.prototype,"sublayerIdsCache",void 0),(0,a._)([(0,y.MZ)({type:s.A.ofType(w.A),json:{write:{ignoreOrigin:!0}}})],C.prototype,"tables",void 0),(0,a._)([(0,y.MZ)({json:{read:!1}})],C.prototype,"type",void 0),(0,a._)([(0,y.MZ)(k.OZ)],C.prototype,"url",void 0),C=(0,a._)([(0,u.$)("esri.layers.KnowledgeGraphLayer")],C);const E=C}}]);
//# sourceMappingURL=6570.c8aae53e.chunk.js.map