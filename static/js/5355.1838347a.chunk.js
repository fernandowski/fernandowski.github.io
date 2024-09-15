"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[5355],{61196:(e,t,n)=>{n.d(t,{q:()=>h});var i,s,r,o=n(54787),a={exports:{}};i=a,s=function(){function e(n,i,s,r,o){for(;r>s;){if(r-s>600){var a=r-s+1,h=i-s+1,l=Math.log(a),c=.5*Math.exp(2*l/3),u=.5*Math.sqrt(l*c*(a-c)/a)*(h-a/2<0?-1:1);e(n,i,Math.max(s,Math.floor(i-h*c/a+u)),Math.min(r,Math.floor(i+(a-h)*c/a+u)),o)}var d=n[i],m=s,_=r;for(t(n,s,i),o(n[r],d)>0&&t(n,s,r);m<_;){for(t(n,m,_),m++,_--;o(n[m],d)<0;)m++;for(;o(n[_],d)>0;)_--}0===o(n[s],d)?t(n,s,_):t(n,++_,r),_<=i&&(s=_+1),i<=_&&(r=_-1)}}function t(e,t,n){var i=e[t];e[t]=e[n],e[n]=i}function n(e,t){return e<t?-1:e>t?1:0}return function(t,i,s,r,o){e(t,i,s||0,r||t.length-1,o||n)}},void 0!==(r=s())&&(i.exports=r);const h=(0,o.g)(a.exports)},70373:(e,t,n)=>{n.d(t,{w:()=>o});var i=n(18690),s=(n(81806),n(30015)),r=n(61196);class o{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,t=arguments.length>1?arguments[1]:void 0;this._compareMinX=u,this._compareMinY=d,this._toBBox=e=>e,this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),t&&("function"==typeof t?this._toBBox=t:this._initFormat(t)),this.clear()}destroy(){this.clear(),M.prune(),v.prune(),w.prune(),I.prune()}all(e){a(this._data,e)}search(e,t){let n=this._data;const i=this._toBBox;if(g(e,n))for(M.clear();n;){for(let s=0,r=n.children.length;s<r;s++){const r=n.children[s],o=n.leaf?i(r):r;g(e,o)&&(n.leaf?t(r):x(e,o)?a(r,t):M.push(r))}n=M.pop()}}collides(e){let t=this._data;const n=this._toBBox;if(!g(e,t))return!1;for(M.clear();t;){for(let i=0,s=t.children.length;i<s;i++){const s=t.children[i],r=t.leaf?n(s):s;if(g(e,r)){if(t.leaf||x(e,r))return!0;M.push(s)}}t=M.pop()}return!1}load(e){if(!e.length)return this;if(e.length<this._minEntries){for(let t=0,n=e.length;t<n;t++)this.insert(e[t]);return this}let t=this._build(e.slice(0,e.length),0,e.length-1,0);if(this._data.children.length)if(this._data.height===t.height)this._splitRoot(this._data,t);else{if(this._data.height<t.height){const e=this._data;this._data=t,t=e}this._insert(t,this._data.height-t.height-1,!0)}else this._data=t;return this}insert(e){return e&&this._insert(e,this._data.height-1),this}clear(){return this._data=new S([]),this}remove(e){if(!e)return this;let t,n=this._data,s=null,r=0,o=!1;const a=this._toBBox(e);for(w.clear(),I.clear();n||w.length>0;){if(n||(n=w.pop(),s=w.data[w.length-1],r=I.pop()??0,o=!0),n.leaf&&(t=(0,i.qh)(n.children,e,n.children.length,n.indexHint),-1!==t))return n.children.splice(t,1),w.push(n),this._condense(w),this;o||n.leaf||!x(n,a)?s?(r++,n=s.children[r],o=!1):n=null:(w.push(n),I.push(r),r=0,s=n,n=n.children[0])}return this}toJSON(){return this._data}fromJSON(e){return this._data=e,this}_build(e,t,n,i){const s=n-t+1;let r=this._maxEntries;if(s<=r){const i=new S(e.slice(t,n+1));return h(i,this._toBBox),i}i||(i=Math.ceil(Math.log(s)/Math.log(r)),r=Math.ceil(s/r**(i-1)));const o=new b([]);o.height=i;const a=Math.ceil(s/r),l=a*Math.ceil(Math.sqrt(r));y(e,t,n,l,this._compareMinX);for(let h=t;h<=n;h+=l){const t=Math.min(h+l-1,n);y(e,h,t,a,this._compareMinY);for(let n=h;n<=t;n+=a){const s=Math.min(n+a-1,t);o.children.push(this._build(e,n,s,i-1))}}return h(o,this._toBBox),o}_insert(e,t,n){const i=this._toBBox,s=n?e:i(e);w.clear();const r=function(e,t,n,i){for(;i.push(t),!0!==t.leaf&&i.length-1!==n;){let n,i=1/0,s=1/0;for(let r=0,o=t.children.length;r<o;r++){const o=t.children[r],a=m(o),h=p(e,o)-a;h<s?(s=h,i=a<i?a:i,n=o):h===s&&a<i&&(i=a,n=o)}t=n||t.children[0]}return t}(s,this._data,t,w);for(r.children.push(e),c(r,s);t>=0&&w.data[t].children.length>this._maxEntries;)this._split(w,t),t--;!function(e,t,n){for(let i=n;i>=0;i--)c(t.data[i],e)}(s,w,t)}_split(e,t){const n=e.data[t],i=n.children.length,s=this._minEntries;this._chooseSplitAxis(n,s,i);const r=this._chooseSplitIndex(n,s,i);if(!r)return;const o=n.children.splice(r,n.children.length-r),a=n.leaf?new S(o):new b(o);a.height=n.height,h(n,this._toBBox),h(a,this._toBBox),t?e.data[t-1].children.push(a):this._splitRoot(n,a)}_splitRoot(e,t){this._data=new b([e,t]),this._data.height=e.height+1,h(this._data,this._toBBox)}_chooseSplitIndex(e,t,n){let i,s,r;i=s=1/0;for(let o=t;o<=n-t;o++){const t=l(e,0,o,this._toBBox),a=l(e,o,n,this._toBBox),h=f(t,a),c=m(t)+m(a);h<i?(i=h,r=o,s=c<s?c:s):h===i&&c<s&&(s=c,r=o)}return r}_chooseSplitAxis(e,t,n){const i=e.leaf?this._compareMinX:u,s=e.leaf?this._compareMinY:d;this._allDistMargin(e,t,n,i)<this._allDistMargin(e,t,n,s)&&e.children.sort(i)}_allDistMargin(e,t,n,i){e.children.sort(i);const s=this._toBBox,r=l(e,0,t,s),o=l(e,n-t,n,s);let a=_(r)+_(o);for(let h=t;h<n-t;h++){const t=e.children[h];c(r,e.leaf?s(t):t),a+=_(r)}for(let h=n-t-1;h>=t;h--){const t=e.children[h];c(o,e.leaf?s(t):t),a+=_(o)}return a}_condense(e){for(let t=e.length-1;t>=0;t--){const n=e.data[t];if(0===n.children.length)if(t>0){const s=e.data[t-1],r=s.children;r.splice((0,i.qh)(r,n,r.length,s.indexHint),1)}else this.clear();else h(n,this._toBBox)}}_initFormat(e){const t=["return a"," - b",";"];this._compareMinX=new Function("a","b",t.join(e[0])),this._compareMinY=new Function("a","b",t.join(e[1])),this._toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}function a(e,t){let n=e;for(v.clear();n;){if(!0===n.leaf)for(const e of n.children)t(e);else v.pushArray(n.children);n=v.pop()??null}}function h(e,t){l(e,0,e.children.length,t,e)}function l(e,t,n,i,s){s||(s=new S([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let r,o=t;o<n;o++)r=e.children[o],c(s,e.leaf?i(r):r);return s}function c(e,t){e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY)}function u(e,t){return e.minX-t.minX}function d(e,t){return e.minY-t.minY}function m(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function _(e){return e.maxX-e.minX+(e.maxY-e.minY)}function p(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function f(e,t){const n=Math.max(e.minX,t.minX),i=Math.max(e.minY,t.minY),s=Math.min(e.maxX,t.maxX),r=Math.min(e.maxY,t.maxY);return Math.max(0,s-n)*Math.max(0,r-i)}function x(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function g(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function y(e,t,n,i,s){const o=[t,n];for(;o.length;){const t=o.pop(),n=o.pop();if(t-n<=i)continue;const a=n+Math.ceil((t-n)/i/2)*i;(0,r.q)(e,a,n,t,s),o.push(n,a,a,t)}}const M=new s.A,v=new s.A,w=new s.A,I=new s.A({deallocator:void 0});class B{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class A extends B{constructor(){super(...arguments),this.height=1,this.indexHint=new i.vW}}class S extends A{constructor(e){super(),this.children=e,this.leaf=!0}}class b extends A{constructor(e){super(),this.children=e,this.leaf=!1}}},33723:(e,t,n)=>{n.d(t,{O:()=>d,W:()=>u});var i=n(63919),s=n(44680),r=n(19555),o=n(20664);const a=(0,n(9392).vt)(),h=(0,s.vt)(),l=(0,s.vt)(),c=(0,s.vt)();function u(e,t,n){return(0,o.s)(a,t[0],t[1],1),(0,o.t)(a,a,(0,i.mg)(h,n)),0===a[2]?(0,r.hZ)(e,a[0],a[1]):(0,r.hZ)(e,a[0]/a[2],a[1]/a[2])}function d(e,t,n){return m(l,t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7]),m(c,n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7]),(0,i.lw)(e,(0,i.KC)(l,l),c),0!==e[8]&&(e[0]/=e[8],e[1]/=e[8],e[2]/=e[8],e[3]/=e[8],e[4]/=e[8],e[5]/=e[8],e[6]/=e[8],e[7]/=e[8],e[8]/=e[8]),e}function m(e,t,n,s,r,l,c,u,d){(0,i.hZ)(e,t,s,l,n,r,c,1,1,1),(0,o.s)(a,u,d,1),(0,i.KC)(h,e);const[m,_,p]=(0,o.t)(a,a,(0,i.mg)(h,h));return(0,i.hZ)(h,m,0,0,0,_,0,0,0,p),(0,i.lw)(e,h,e)}},73548:(e,t,n)=>{n.d(t,{j7:()=>o,kS:()=>h,kd:()=>a,r8:()=>l});var i=n(23701),s=n(13312),r=n(19902);const o={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new i.A({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:s.A.WebMercator}),minus180Line:new i.A({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:s.A.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new i.A({paths:[[[180,-180],[180,180]]],spatialReference:s.A.WGS84}),minus180Line:new i.A({paths:[[[-180,-180],[-180,180]]],spatialReference:s.A.WGS84})}};function a(e,t){return Math.ceil((e-t)/(2*t))}function h(e,t){const n=l(e);for(const i of n)for(const e of i)e[0]+=t;return e}function l(e){return(0,r.Bi)(e)?e.rings:e.paths}},54222:(e,t,n)=>{n.d(t,{b3:()=>u,jZ:()=>c});var i=n(42553),s=n(2413),r=n(65391),o=n(5262),a=n(19902),h=n(73548),l=n(80963);function c(e){return d(e,!0)}function u(e){return d(e,!1)}function d(e,t){if(null==e)return null;const n=e.spatialReference,s=(0,l.Vp)(n),o=(0,i.Wj)(e)?e.toJSON():e;if(!s)return o;const c=(0,l.K8)(n)?102100:4326,u=h.j7[c].maxX,d=h.j7[c].minX;if((0,a.fT)(o))return _(o,u,d);if((0,a.U9)(o))return o.points=o.points.map((e=>_(e,u,d))),o;if((0,a.ZC)(o))return m(o,s);if((0,a.Bi)(o)||(0,a.Rg)(o)){const e=(0,r.Rg)(M,o),n={xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3]},i=(0,h.kd)(n.xmin,d)*(2*u),s=0===i?o:(0,h.kS)(o,i);return n.xmin+=i,n.xmax+=i,n.xmax>u?g(s,u,t):n.xmin<d?g(s,d,t):s}return o}function m(e,t){if(!t)return e;const n=function(e,t){const n=[],{ymin:i,ymax:s,xmin:r,xmax:o}=e,a=e.xmax-e.xmin,[h,l]=t.valid,{x:c,frameId:u}=p(e.xmin,t),{x:d,frameId:m}=p(e.xmax,t),_=c===d&&a>0;if(a>2*l){const e={xmin:r<o?c:d,ymin:i,xmax:l,ymax:s},t={xmin:h,ymin:i,xmax:r<o?d:c,ymax:s},a={xmin:0,ymin:i,xmax:l,ymax:s},_={xmin:h,ymin:i,xmax:0,ymax:s},p=[],x=[];f(e,a)&&p.push(u),f(e,_)&&x.push(u),f(t,a)&&p.push(m),f(t,_)&&x.push(m);for(let n=u+1;n<m;n++)p.push(n),x.push(n);n.push(new y(e,[u]),new y(t,[m]),new y(a,p),new y(_,x))}else c>d||_?n.push(new y({xmin:c,ymin:i,xmax:l,ymax:s},[u]),new y({xmin:h,ymin:i,xmax:d,ymax:s},[m])):n.push(new y({xmin:c,ymin:i,xmax:d,ymax:s},[u]));return n}(e,t).map((e=>e.extent));return n.length<2?n[0]||e:n.length>2?(e.xmin=t.valid[0],e.xmax=t.valid[1],e):{rings:n.map((e=>[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]))}}function _(e,t,n){if(Array.isArray(e)){const i=e[0];if(i>t){const n=(0,h.kd)(i,t);e[0]=i+n*(-2*t)}else if(i<n){const t=(0,h.kd)(i,n);e[0]=i+t*(-2*n)}}else{const i=e.x;if(i>t){const n=(0,h.kd)(i,t);e.x+=n*(-2*t)}else if(i<n){const t=(0,h.kd)(i,n);e.x+=t*(-2*n)}}return e}function p(e,t){const[n,i]=t.valid,s=2*i;let r,o=0;return e>i?(r=Math.ceil(Math.abs(e-i)/s),e-=r*s,o=r):e<n&&(r=Math.ceil(Math.abs(e-n)/s),e+=r*s,o=-r),{x:e,frameId:o}}function f(e,t){const{xmin:n,ymin:i,xmax:s,ymax:r}=t;return x(e,n,i)&&x(e,n,r)&&x(e,s,r)&&x(e,s,i)}function x(e,t,n){return t>=e.xmin&&t<=e.xmax&&n>=e.ymin&&n<=e.ymax}function g(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const i=!(0,a.Rg)(e);if(i&&(0,o.m3)(e),n)return(new v).cut(e,t);const s=i?e.rings:e.paths,r=i?4:2,h=s.length,l=-2*t;for(let o=0;o<h;o++){const e=s[o];if(e&&e.length>=r){const t=[];for(const n of e)t.push([n[0]+l,n[1]]);s.push(t)}}return i?e.rings=s:e.paths=s,e}class y{constructor(e,t){this.extent=e,this.frameIds=t}}const M=(0,s.vt)();class v{constructor(){this._linesIn=[],this._linesOut=[]}cut(e,t){let n;if(this._xCut=t,e.rings)this._closed=!0,n=e.rings,this._minPts=4;else{if(!e.paths)return null;this._closed=!1,n=e.paths,this._minPts=2}for(const s of n){if(!s||s.length<this._minPts)continue;let e=!0;for(const t of s)e?(this.moveTo(t),e=!1):this.lineTo(t);this._closed&&this.close()}this._pushLineIn(),this._pushLineOut(),n=[];for(const s of this._linesIn)s&&s.length>=this._minPts&&n.push(s);const i=-2*this._xCut;for(const s of this._linesOut)if(s&&s.length>=this._minPts){for(const e of s)e[0]+=i;n.push(s)}return this._closed?e.rings=n:e.paths=n,e}moveTo(e){this._pushLineIn(),this._pushLineOut(),this._prevSide=this._side(e[0]),this._moveTo(e[0],e[1],this._prevSide),this._prevPt=e,this._firstPt=e}lineTo(e){const t=this._side(e[0]);if(t*this._prevSide==-1){const n=this._intersect(this._prevPt,e);this._lineTo(this._xCut,n,0),this._prevSide=0,this._lineTo(e[0],e[1],t)}else this._lineTo(e[0],e[1],t);this._prevSide=t,this._prevPt=e}close(){const e=this._firstPt,t=this._prevPt;e[0]===t[0]&&e[1]===t[1]||this.lineTo(e),this._checkClosingPt(this._lineIn),this._checkClosingPt(this._lineOut)}_moveTo(e,t,n){this._closed?(this._lineIn.push([n<=0?e:this._xCut,t]),this._lineOut.push([n>=0?e:this._xCut,t])):(n<=0&&this._lineIn.push([e,t]),n>=0&&this._lineOut.push([e,t]))}_lineTo(e,t,n){this._closed?(w(this._lineIn,n<=0?e:this._xCut,t),w(this._lineOut,n>=0?e:this._xCut,t)):n<0?(0===this._prevSide&&this._pushLineOut(),this._lineIn.push([e,t])):n>0?(0===this._prevSide&&this._pushLineIn(),this._lineOut.push([e,t])):this._prevSide<0?(this._lineIn.push([e,t]),this._lineOut.push([e,t])):this._prevSide>0&&(this._lineOut.push([e,t]),this._lineIn.push([e,t]))}_checkClosingPt(e){const t=e.length;t>3&&e[0][0]===this._xCut&&e[t-2][0]===this._xCut&&e[1][0]===this._xCut&&(e[0][1]=e[t-2][1],e.pop())}_side(e){return e<this._xCut?-1:e>this._xCut?1:0}_intersect(e,t){const n=(this._xCut-e[0])/(t[0]-e[0]);return e[1]+n*(t[1]-e[1])}_pushLineIn(){this._lineIn&&this._lineIn.length>=this._minPts&&this._linesIn.push(this._lineIn),this._lineIn=[]}_pushLineOut(){this._lineOut&&this._lineOut.length>=this._minPts&&this._linesOut.push(this._lineOut),this._lineOut=[]}}function w(e,t,n){const i=e.length;i>1&&e[i-1][0]===t&&e[i-2][0]===t?e[i-1][1]=n:e.push([t,n])}},46061:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var i=n(35143),s=n(19276),r=n(50076),o=n(76460),a=n(77717),h=n(50346),l=n(46053),c=n(21403),u=(n(47249),n(81806),n(28379)),d=n(85842),m=n(17707),_=n(49140),p=n(25515),f=n(65624),x=n(11270),g=n(94729),y=n(5682),M=n(44111),v=n(28320),w=(n(35238),n(3975)),I=n(54099),B=n(49304),A=n(91291),S=n(68134),b=n(76797),X=n(9624),Y=n(2413),O=n(65658),R=n(80963),E=n(10947),L=n(28632),C=n(23290),T=n(54154),P=n(13312);const Z={key:"type",defaultKeyValue:"image",base:L.A,typeMap:{image:v.A,video:T.A}},V=s.A.ofType(Z);let k=class extends(B.A.LoadableMixin((0,A.g)(I.A.EventedAccessor))){constructor(e){super(e),this._index=new E.F,this._elementViewsMap=new Map,this._elementsIndexes=new Map,this._elementsChangedHandler=e=>{for(const n of e.removed){const e=this._elementViewsMap.get(n);this._elementViewsMap.delete(n),this._index.delete(e),this.removeHandles(e),e.destroy(),this.notifyChange("fullExtent")}const{spatialReference:t}=this;for(const n of e.added){if(this._elementViewsMap.get(n))continue;const e=new C._({spatialReference:t,element:n});this._elementViewsMap.set(n,e);const i=(0,S.wB)((()=>e.coords),(()=>this._updateIndexForElement(e,!1)));this._updateIndexForElement(e,!0),this.addHandles(i,e)}this._elementsIndexes.clear(),this.elements.forEach(((e,t)=>this._elementsIndexes.set(e,t))),this.emit("refresh")},this.elements=new V}async load(e){if((0,h.Te)(e),!this.spatialReference){const e=this.elements.find((e=>null!=e.georeference?.coords));this._set("spatialReference",e?e.georeference.coords.spatialReference:P.A.WGS84)}return this._elementsChangedHandler({added:this.elements.items,removed:[]}),this.addHandles(this.elements.on("change",this._elementsChangedHandler)),this}destroy(){this._index.clear(),this._elementViewsMap.clear(),this._elementsIndexes.clear()}set elements(e){this._set("elements",(0,w.V)(e,this._get("elements"),V))}get fullExtent(){if("not-loaded"===this.loadStatus)return null;const e=this._index.fullBounds;return null==e?null:new b.A({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:this.spatialReference})}set spatialReference(e){"not-loaded"===this.loadStatus?this._set("spatialReference",e):o.A.getLogger(this).error("#spatialReference","spatialReference cannot be changed after the source is loaded.")}async queryElements(e,t){await this.load(),await(0,X.initializeProjection)(e.spatialReference,this.spatialReference,null,t);const n=(0,R.aI)(e.spatialReference,this.spatialReference)?e:(0,X.project)(e,this.spatialReference);if(!n)return[];const i=n.normalize(),s=[];for(const r of i)this._index.forEachInBounds((0,Y.VY)(r),(e=>{let{normalizedCoords:t,element:n}=e;null!=t&&(0,O.fA)(r,t)&&s.push(n)}));return s.sort(((e,t)=>this._elementsIndexes.get(e)-this._elementsIndexes.get(t))),s}hasElement(e){return this.elements.includes(e)}_updateIndexForElement(e,t){const n=e.normalizedBounds,i=this._index.has(e),s=null!=n;this._index.delete(e),s&&this._index.set(e,n),this.notifyChange("fullExtent"),t||(i!==s?this.emit("refresh"):this.emit("change",{element:e.element}))}};(0,i._)([(0,l.MZ)()],k.prototype,"elements",null),(0,i._)([(0,l.MZ)({readOnly:!0})],k.prototype,"fullExtent",null),(0,i._)([(0,l.MZ)()],k.prototype,"spatialReference",null),k=(0,i._)([(0,d.$)("esri.layers.support.LocalMediaElementSource")],k);const j=k;var z=n(62705),F=n(61701);function W(e){return"object"==typeof e&&null!=e&&"type"in e}function G(e){return W(e)&&"image"===e.type}let H=class extends((0,f.dM)((0,y.j)((0,x.q)((0,g.A)((0,a.P)(p.A)))))){constructor(e){super(e),this.effectiveSource=null,this.georeference=null,this.copyright=null,this.operationalLayerType="MediaLayer",this.spatialReference=null,this.type="media",this._debouncedSaveOperations=(0,h.sg)((async(e,t,i)=>{const{save:s,saveAs:r}=await n.e(9831).then(n.bind(n,29831));switch(e){case F.X.SAVE:return s(this,t);case F.X.SAVE_AS:return r(this,i,t)}})),this.source=new j}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){await this.loadFromPortal({supportedTypes:["Media Layer"]},e);let t=this.source;if(!t)throw new r.A("media-layer:source-missing","Set 'MediaLayer.source' before loading the layer.");const n=this._getSourceOverride(t,this.georeference);n&&(this.setAtOrigin("source",n,"web-map"),this.setAtOrigin("source",n,"web-scene"),t=n);const i=W(t)?new j({elements:new s.A([t])}):t;this._set("effectiveSource",i),this.spatialReference&&(i.spatialReference=this.spatialReference),await i.load(e),this.spatialReference=i.spatialReference}destroy(){this.effectiveSource?.destroy(),this.effectiveSource!==this.source&&this.source?.destroy()}readGeoreference(e,t){return e&&"itemId"in t&&t.itemId?e:void 0}get fullExtent(){return this.loaded?this.effectiveSource.fullExtent:null}set source(e){"loaded"!==this.loadStatus&&"failed"!==this.loadStatus?this._set("source",e):o.A.getLogger(this).error("#source","source cannot be changed after the layer is loaded.")}castSource(e){return e?Array.isArray(e)?new j({elements:new s.A(e)}):e instanceof s.A?new j({elements:e}):e:null}readSource(e,t,n){if("itemId"in t&&t.itemId)return;const i=this._createSource(t);return i?.read(t,n),i}writeSource(e,t,n,i){if(e&&e instanceof j){const t=e.elements.length;if(1!==t)return void(i?.messages&&i.messages.push(new r.A("media-layer:unsupported-source",`local media element source can only be persisted if it contains exactly one ImageElement, but it has ${t}.`)));e=e.elements.at(0)}G(e)?e.write(t,i):i?.messages&&(e?i.messages.push(new r.A("media-layer:unsupported-source","only media elements of type 'ImageElement' can be persisted")):i.messages.push(new r.A("media-layer:unsupported-source","the media layer is missing a source")))}async save(e){return this._debouncedSaveOperations(F.X.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(F.X.SAVE_AS,t,e)}_createSource(e){if("mediaType"in e)switch(e.mediaType){case"image":return new v.A;case"video":return new T.A}return null}_getSourceOverride(e,t){if(W(e)&&this.originIdOf("source")===_.Gr.PORTAL_ITEM&&t&&(this.originIdOf("georeference")===_.Gr.WEB_MAP||this.originIdOf("georeference")===_.Gr.WEB_SCENE)){const n=e.toJSON(),i=this._createSource(n);return i.read({...n},{origin:"portal-item"}),i.read({georeference:t},{origin:"web-map"}),i.read({georeference:t},{origin:"web-scene"}),i}return null}};(0,i._)([(0,l.MZ)({readOnly:!0})],H.prototype,"effectiveSource",void 0),(0,i._)([(0,l.MZ)({readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!0}}}})],H.prototype,"georeference",void 0),(0,i._)([(0,u.w)("web-document","georeference")],H.prototype,"readGeoreference",null),(0,i._)([(0,l.MZ)({type:String})],H.prototype,"copyright",void 0),(0,i._)([(0,l.MZ)({readOnly:!0})],H.prototype,"fullExtent",null),(0,i._)([(0,l.MZ)({type:["MediaLayer"]})],H.prototype,"operationalLayerType",void 0),(0,i._)([(0,l.MZ)({type:["show","hide"]})],H.prototype,"listMode",void 0),(0,i._)([(0,l.MZ)({nonNullable:!0,json:{write:{enabled:!0,allowNull:!1,target:{url:{type:String},mediaType:{type:["image"]},georeference:{type:M.A}},overridePolicy(e,t,n){return{enabled:!0,allowNull:!1,ignoreOrigin:(0,z.LR)(this,n?.origin)&&G(e)&&!!e.georeference&&e.originIdOf("georeference")>_.Gr.PORTAL_ITEM}}}}})],H.prototype,"source",null),(0,i._)([(0,c.w)("source")],H.prototype,"castSource",null),(0,i._)([(0,u.w)("source",["url"])],H.prototype,"readSource",null),(0,i._)([(0,m.K)("source")],H.prototype,"writeSource",null),(0,i._)([(0,l.MZ)()],H.prototype,"spatialReference",void 0),(0,i._)([(0,l.MZ)({readOnly:!0})],H.prototype,"type",void 0),H=(0,i._)([(0,d.$)("esri.layers.MediaLayer")],H);const N=H},10947:(e,t,n)=>{n.d(t,{F:()=>h});var i=n(81806),s=n(70373),r=n(2413);const o={minX:0,minY:0,maxX:0,maxY:0};function a(e,t,n){(function(e){o.minX=e[0],o.minY=e[1],o.maxX=e[2],o.maxY=e[3]})(t),e.search(o,n)}class h{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new s.w(9,(0,i.A)("esri-csp-restrictions")?e=>({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const e=new Array(this._idByBounds.size);let t=0;this._idByBounds.forEach(((n,i)=>{e[t++]=i})),this._indexInvalid=!1,this._index.clear(),this._index.load(e)}else this._boundsToLoad.length&&(this._index.load(Array.from(new Set(this._boundsToLoad.filter((e=>this._idByBounds.has(e)))))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const e=(0,r.Ie)();for(const t of this._boundsById.values())t&&(e[0]=Math.min(t[0],e[0]),e[1]=Math.min(t[1],e[1]),e[2]=Math.max(t[2],e[2]),e[3]=Math.max(t[3],e[3]));return e}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(e){const t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}forEachInBounds(e,t){this._loadIndex(),a(this._index,e,(e=>t(this._idByBounds.get(e))))}get(e){return this._boundsById.get(e)}has(e){return this._boundsById.has(e)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(e,t){if(!this._indexInvalid){const t=this._boundsById.get(e);t&&(this._index.remove(t),this._idByBounds.delete(t))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},23290:(e,t,n)=>{n.d(t,{_:()=>u});var i=n(35143),s=n(91967),r=n(46053),o=(n(81806),n(76460),n(47249),n(85842)),a=n(65215),h=n(9624),l=n(2413),c=n(54222);let u=class extends s.A{constructor(e){super(e)}get bounds(){const e=this.coords;return null==e?.extent?null:(0,l.VY)(e.extent)}get coords(){const e=this.element.georeference?.coords;return(0,h.projectOrLoad)(e,this.spatialReference).geometry}get normalizedCoords(){return a.A.fromJSON((0,c.jZ)(this.coords))}get normalizedBounds(){const e=null!=this.normalizedCoords?this.normalizedCoords.extent:null;return null!=e?(0,l.VY)(e):null}};(0,i._)([(0,r.MZ)()],u.prototype,"spatialReference",void 0),(0,i._)([(0,r.MZ)()],u.prototype,"element",void 0),(0,i._)([(0,r.MZ)()],u.prototype,"bounds",null),(0,i._)([(0,r.MZ)()],u.prototype,"coords",null),(0,i._)([(0,r.MZ)()],u.prototype,"normalizedCoords",null),(0,i._)([(0,r.MZ)()],u.prototype,"normalizedBounds",null),u=(0,i._)([(0,o.$)("esri.layers.support.MediaElementView")],u)}}]);
//# sourceMappingURL=5355.1838347a.chunk.js.map