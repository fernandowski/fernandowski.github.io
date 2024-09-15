"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[5995],{25269:(e,t,s)=>{s.d(t,{GY:()=>n});class r{constructor(e){this.size=0,this._start=0,this.maxSize=e,this._buffer=new Array(e)}get entries(){return this._buffer}enqueue(e){if(this.size===this.maxSize){const t=this._buffer[this._start];return this._buffer[this._start]=e,this._start=(this._start+1)%this.maxSize,t}return this._buffer[(this._start+this.size++)%this.maxSize]=e,null}dequeue(){if(0===this.size)return null;const e=this._buffer[this._start];return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,e}peek(){return 0===this.size?null:this._buffer[this._start]}peekLast(){return 0===this.size?null:this._buffer[(this._start+(this.size-1))%this.maxSize]}find(e){if(0===this.size)return null;for(const t of this._buffer)if(null!=t&&e(t))return t;return null}clear(e){let t=this.dequeue();for(;null!=t;)e&&e(t),t=this.dequeue()}}var i=s(15941);const o="__esri_timestamp__";class n{constructor(e,t,s,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:128;this._trackIdToObservations=new Map,this._idCounter=0,this._lastPurge=performance.now(),this._addOrUpdated=new Map,this._removed=[],this._maxAge=0,this._timeInfo=s,this._purgeOptions=r,this.store=e,this.objectIdField=t,this.purgeInterval=i,this._useGeneratedIds="__esri_stream_id__"===this.objectIdField}removeById(e){this._removed.push(e)}removeByTrackId(e){const t=this._trackIdToObservations.get(e);if(t)for(const s of t.entries)this._removed.push(s)}add(e){if(this._useGeneratedIds){const t=this._nextId();e.attributes[this.objectIdField]=t,e.objectId=t}else e.objectId=e.attributes[this.objectIdField];const t=e.objectId;if(this._addOrUpdated.set(t,e),this._maxAge=Math.max(this._maxAge,e.attributes[this._timeInfo.startTimeField]),!this._timeInfo.trackIdField)return null==this._trackIdLessObservations&&(this._trackIdLessObservations=new r(1e5)),void this._trackIdLessObservations.enqueue(t);const s=e.attributes[this._timeInfo.trackIdField];if(!this._trackIdToObservations.has(s)){const e=null!=this._purgeOptions?.maxObservations?this._purgeOptions.maxObservations:1e3,t=(0,i.qE)(e,0,1e3);this._trackIdToObservations.set(s,new r(t))}const o=this._trackIdToObservations.get(s),n=o?.enqueue(t);null!=n&&(this._addOrUpdated.has(n)?this._addOrUpdated.delete(n):this._removed.push(n))}checkForUpdates(){const e=this._getToAdd(),t=this._getToRemove(),s=performance.now();s-this._lastPurge>=this.purgeInterval&&(this._purge(s),this._lastPurge=s);const r=[];if(null!=t)for(const o of t){const e=this.store.removeById(o);null!=e&&r.push(e)}const i=[];if(null!=e){const r=new Set(t??[]);for(const t of e)r.has(t.objectId)||(t.attributes[o]=s,this.store.add(t),i.push(t))}return!(!i.length&&!r?.length)&&(this.store.update(i,r),!0)}_getToAdd(){if(!this._addOrUpdated.size)return null;const e=new Array(this._addOrUpdated.size);let t=0;return this._addOrUpdated.forEach((s=>e[t++]=s)),this._addOrUpdated.clear(),e}_getToRemove(){const e=this._removed;return this._removed.length?(this._removed=[],e):null}_nextId(){const e=this._idCounter;return this._idCounter=(this._idCounter+1)%4294967294+1,e}_purge(e){const t=this._purgeOptions;null!=t&&(this._purgeSomeByDisplayCount(t),this._purgeByAge(t),this._purgeByAgeReceived(e,t),this._purgeTracks())}_purgeSomeByDisplayCount(e){if(!e.displayCount)return;let t=this.store.size;if(t>e.displayCount){if(this._timeInfo.trackIdField)for(const s of this._trackIdToObservations.values())if(t>e.displayCount&&s.size){const e=s.dequeue();this._removed.push(e),t--}if(null!=this._trackIdLessObservations){let s=t-e.displayCount;for(;s-- >0;){const e=this._trackIdLessObservations.dequeue();null!=e&&this._removed.push(e)}}}}_purgeByAge(e){const t=this._timeInfo?.startTimeField;if(!e.age||!t)return;const s=60*e.age*1e3,r=this._maxAge-s;this.store.forEach((e=>{e.attributes[t]<r&&this._removed.push(e.objectId)}))}_purgeByAgeReceived(e,t){if(!t.ageReceived)return;const s=e-60*t.ageReceived*1e3;this.store.forEach((e=>{e.attributes[o]<s&&this._removed.push(e.objectId)}))}_purgeTracks(){this._trackIdToObservations.forEach(((e,t)=>{0===e.size&&this._trackIdToObservations.delete(t)}))}}},55039:(e,t,s)=>{s.r(t),s.d(t,{createConnection:()=>F});var r=s(35143),i=(s(35238),s(3825)),o=s(50076),n=s(76460),a=s(50346),c=s(90534),u=(s(81806),s(47249),s(85842)),h=s(46053),l=s(86729),d=s(54099);let _=class extends d.A.EventedAccessor{destroy(){this.emit("destroy")}get connectionError(){return this.errorString?new o.A("stream-connection",this.errorString):null}onFeature(e){this.emit("data-received",e)}onMessage(e){this.emit("message-received",e)}};(0,r._)([(0,h.MZ)({readOnly:!0})],_.prototype,"connectionError",null),_=(0,r._)([(0,u.$)("esri.layers.support.StreamConnection")],_);const f=_;var g,p;(p=g||(g={}))[p.CONNECTING=0]="CONNECTING",p[p.OPEN=1]="OPEN",p[p.CLOSING=2]="CLOSING",p[p.CLOSED=3]="CLOSED";let y=class extends f{constructor(e){super({}),this._outstandingMessages=[],this.errorString=null;const{geometryType:t,spatialReference:s,sourceSpatialReference:r}=e;this._config=e,this._featureZScaler=(0,l.N)(t,r,s),this._open()}normalizeCtorArgs(){return{}}async _open(){await this._tryCreateWebSocket(),this.destroyed||await this._handshake()}destroy(){super.destroy(),null!=this._websocket&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null}get connectionStatus(){if(null==this._websocket)return"disconnected";switch(this._websocket.readyState){case g.CONNECTING:case g.OPEN:return"connected";case g.CLOSING:case g.CLOSED:return"disconnected"}}sendMessageToSocket(e){null!=this._websocket?this._websocket.send(JSON.stringify(e)):this._outstandingMessages.push(e)}sendMessageToClient(e){this._onMessage(e)}updateCustomParameters(e){this._config.customParameters=e,null!=this._websocket&&this._websocket.close()}async _tryCreateWebSocket(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._config.source.path,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;try{if(this.destroyed)return;const t=(0,c.a6)(e,this._config.customParameters??{});this._websocket=await this._createWebSocket(t),this.notifyChange("connectionStatus")}catch(_){const i=t/1e3;return this._config.maxReconnectionAttempts&&s>=this._config.maxReconnectionAttempts?(n.A.getLogger(this).error(new o.A("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void this.destroy()):(n.A.getLogger(this).error(new o.A("websocket-connection",`Failed to connect. Attempting to reconnect in ${i}s`,_)),await(0,a.Pl)(t),this._tryCreateWebSocket(e,Math.min(1.5*t,1e3*this._config.maxReconnectionInterval),s+1))}}_setWebSocketJSONParseHandler(e){e.onmessage=e=>{try{const t=JSON.parse(e.data);this._onMessage(t)}catch(t){return void n.A.getLogger(this).error(new o.A("websocket-connection","Failed to parse message, invalid JSON",{error:t}))}}}_createWebSocket(e){return new Promise(((t,s)=>{const r=new WebSocket(e);r.onopen=()=>{if(r.onopen=null,this.destroyed)return r.onclose=null,void r.close();r.onclose=e=>this._onClose(e),r.onerror=e=>this._onError(e),this._setWebSocketJSONParseHandler(r),t(r)},r.onclose=e=>{r.onopen=r.onclose=null,s(e)}}))}async _handshake(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e4;const t=this._websocket;if(null==t)return;const s=(0,a.Tw)(),r=t.onmessage,{filter:i,outFields:c,spatialReference:u}=this._config;return s.timeout(e),t.onmessage=e=>{let a=null;try{a=JSON.parse(e.data)}catch(g){}a&&"object"==typeof a||(n.A.getLogger(this).error(new o.A("websocket-connection","Protocol violation. Handshake failed - malformed message",e.data)),s.reject(),this.destroy()),a.spatialReference?.wkid!==u?.wkid&&(n.A.getLogger(this).error(new o.A("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${u.wkid}`,e.data)),s.reject(),this.destroy()),"json"!==a.format&&(n.A.getLogger(this).error(new o.A("websocket-connection","Protocol violation. Handshake failed - format is not set",e.data)),s.reject(),this.destroy()),i&&a.filter!==i&&n.A.getLogger(this).error(new o.A("websocket-connection","Tried to set filter, but server doesn't support it")),c&&a.outFields!==c&&n.A.getLogger(this).error(new o.A("websocket-connection","Tried to set outFields, but server doesn't support it")),t.onmessage=r;for(const s of this._outstandingMessages)t.send(JSON.stringify(s));this._outstandingMessages=[],s.resolve()},t.send(JSON.stringify({filter:i,outFields:c,format:"json",spatialReference:{wkid:u.wkid}})),s.promise}_onMessage(e){if(this.onMessage(e),"type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)null!=this._featureZScaler&&this._featureZScaler(t.geometry),this.onFeature(t)}}_onError(e){const t="Encountered an error over WebSocket connection";this._set("errorString",t),n.A.getLogger(this).error("websocket-connection",t)}_onClose(e){this._websocket=null,this.notifyChange("connectionStatus"),1e3!==e.code&&n.A.getLogger(this).error("websocket-connection",`WebSocket closed unexpectedly with error code ${e.code}`),this.destroyed||this._open()}};(0,r._)([(0,h.MZ)()],y.prototype,"connectionStatus",null),(0,r._)([(0,h.MZ)()],y.prototype,"errorString",void 0),y=(0,r._)([(0,u.$)("esri.layers.graphics.sources.connections.WebSocketConnection")],y);var m=s(36643),b=s(68295),w=s(19902),v=s(13312);const k={maxQueryDepth:5,maxRecordCountFactor:3};let S=class extends y{constructor(e){super({...k,...e}),this._buddyServicesQuery=null,this._relatedFeatures=null}async _open(){const e=await this._fetchServiceDefinition(this._config.source);e.timeInfo.trackIdField||n.A.getLogger(this).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const t=this._fetchWebSocketUrl(e.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),await this._buddyServicesQuery,await this._tryCreateWebSocket(t);const{filter:s,outFields:r}=this._config;this.destroyed||this._setFilter(s,r)}_onMessage(e){if("attributes"in e){let s;try{s=this._enrich(e),null!=this._featureZScaler&&this._featureZScaler(s.geometry)}catch(t){return void n.A.getLogger(this).error(new o.A("geoevent-connection","Failed to parse message",t))}this.onFeature(s)}else this.onMessage(e)}async _fetchServiceDefinition(e){const t={f:"json",...this._config.customParameters},s=(0,i.A)(e.path,{query:t,responseType:"json"}),r=(await s).data;return this._serviceDefinition=r,r}_fetchWebSocketUrl(e,t){const s=e[0],{urls:r,token:i}=s,o=this._inferWebSocketBaseUrl(r);return(0,c.a6)(`${o}/subscribe`,{outSR:""+t.wkid,token:i})}_inferWebSocketBaseUrl(e){if(1===e.length)return e[0];for(const t of e)if(t.includes("wss"))return t;return n.A.getLogger(this).error(new o.A("geoevent-connection","Unable to infer WebSocket url",e)),null}async _setFilter(e,t){const s=this._websocket;if(null==s||null==e&&null==t)return;const r=JSON.stringify({filter:this._serializeFilter(e,t)});let i=!1;const c=(0,a.Tw)();return s.onmessage=e=>{const t=JSON.parse(e.data);t.filter&&(t.error&&(n.A.getLogger(this).error(new o.A("geoevent-connection","Failed to set service filter",t.error)),this._set("errorString",`Could not set service filter - ${t.error}`),c.reject(t.error)),this._setWebSocketJSONParseHandler(s),i=!0,c.resolve())},s.send(r),setTimeout((()=>{i||(this.destroyed||this._websocket!==s||n.A.getLogger(this).error(new o.A("geoevent-connection","Server timed out when setting filter")),c.reject())}),1e4),c.promise}_serializeFilter(e,t){const s={};if(null==e&&null==t)return s;if(e?.geometry)try{const t=(0,w.rS)(e.geometry);if("extent"!==t.type)throw new o.A(`Expected extent but found type ${t.type}`);s.geometry=JSON.stringify(t.shiftCentralMeridian())}catch(r){n.A.getLogger(this).error(new o.A("geoevent-connection","Encountered an error when setting connection geometryDefinition",r))}return e?.where&&"1 = 1"!==e.where&&"1=1"!==e.where&&(s.where=e.where),null!=t&&(s.outFields=t.join(",")),s}_enrich(e){if(!this._relatedFeatures)return e;const t=this._serviceDefinition.relatedFeatures.joinField,s=e.attributes[t],r=this._relatedFeatures.get(s);if(!r)return n.A.getLogger(this).warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:i,geometry:a}=r;for(const o in i)e.attributes[o]=i[o];return a&&(e.geometry=a),e.geometry||e.centroid||n.A.getLogger(this).error(new o.A("geoevent-connection","Found malformed feature - no geometry found",e)),e}async _queryBuddyServices(){try{const{relatedFeatures:e,keepLatestArchive:t}=this._serviceDefinition,s=this._queryRelatedFeatures(e),r=this._queryArchive(t);await s;const i=await r;if(!i)return;for(const o of i.features)this.onFeature(this._enrich(o))}catch(p){n.A.getLogger(this).error(new o.A("geoevent-connection","Encountered an error when querying buddy services",{error:p}))}}async _queryRelatedFeatures(e){if(!e)return;const t=await this._queryBuddy(e.featuresUrl);this._addRelatedFeatures(t)}async _queryArchive(e){if(e)return this._queryBuddy(e.featuresUrl)}async _queryBuddy(e){const t=new((await Promise.resolve().then(s.bind(s,38451))).default)({url:e}),{capabilities:r}=await t.load(),i=r.query.supportsMaxRecordCountFactor,o=r.query.supportsPagination,n=r.query.supportsCentroid,a=this._config.maxRecordCountFactor,c=t.capabilities.query.maxRecordCount,u=i?c*a:c,h=new b.A;if(h.outFields=this._config.outFields??["*"],h.where=this._config.filter?.where??"1=1",h.returnGeometry=!0,h.returnExceededLimitFeatures=!0,h.outSpatialReference=v.A.fromJSON(this._config.spatialReference),n&&(h.returnCentroid=!0),i&&(h.maxRecordCountFactor=a),o)return h.num=u,t.destroy(),this._queryPages(e,h);const l=await(0,m.eW)(e,h,this._config.sourceSpatialReference);return t.destroy(),l.data}async _queryPages(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;t.start=null!=t.num?r*t.num:null;const{data:i}=await(0,m.eW)(e,t,this._config.sourceSpatialReference);return i.exceededTransferLimit&&r<(this._config.maxQueryDepth??0)?(i.features.forEach((e=>s.push(e))),this._queryPages(e,t,s,r+1)):(s.forEach((e=>i.features.push(e))),i)}_addRelatedFeatures(e){const t=new Map,s=e.features,r=this._serviceDefinition.relatedFeatures.joinField;for(const i of s){const e=i.attributes[r];t.set(e,i)}this._relatedFeatures=t}};S=(0,r._)([(0,u.$)("esri.layers.graphics.sources.connections.GeoEventConnection")],S);const A=S;let O=class extends f{constructor(e){super({}),this.connectionStatus="connected",this.errorString=null;const{geometryType:t,spatialReference:s,sourceSpatialReference:r}=e;this._featureZScaler=(0,l.N)(t,r,s)}normalizeCtorArgs(){return{}}updateCustomParameters(e){}sendMessageToSocket(e){}sendMessageToClient(e){if("type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)null!=this._featureZScaler&&this._featureZScaler(t.geometry),this.onFeature(t)}this.onMessage(e)}};function C(e,t){if(null==e&&null==t)return null;const s={};return null!=t&&(s.geometry=t),null!=e&&(s.where=e),s}function F(e,t,s,r,i,o,n,a,c){const u={source:e,sourceSpatialReference:t,spatialReference:s,geometryType:r,filter:C(i,o),maxReconnectionAttempts:n,maxReconnectionInterval:a,customParameters:c};return e?e.path.startsWith("wss://")||e.path.startsWith("ws://")?new y(u):new A(u):new O(u)}(0,r._)([(0,h.MZ)()],O.prototype,"connectionStatus",void 0),(0,r._)([(0,h.MZ)()],O.prototype,"errorString",void 0),O=(0,r._)([(0,u.$)("esri.layers.support.ClientSideConnection")],O)}}]);
//# sourceMappingURL=5995.61e0d2e4.chunk.js.map