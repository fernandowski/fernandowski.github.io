"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[1307],{96111:(e,t,i)=>{i.d(t,{L:()=>P,b:()=>f});var n=i(34761),s=i(13191),r=i(19555),a=i(72745),l=i(31484),o=i(95756),c=i(21390),h=i(64839),d=i(43425),u=i(32307),p=i(66470);function f(e){const t=new u.N5;t.include(l.K,e);const{vertex:i,fragment:s}=t;return i.uniforms.add(new d.X("modelView",((e,t)=>{let{camera:i}=t;return(0,n.Tl)(_,i.viewMatrix,e.origin)})),new d.X("proj",((e,t)=>{let{camera:i}=t;return i.projectionMatrix})),new c.m("glowWidth",((e,t)=>{let{camera:i}=t;return e.glowWidth*i.pixelRatio})),new o.G("pixelToNDC",((e,t)=>{let{camera:i}=t;return(0,r.hZ)(g,2/i.fullViewport[2],2/i.fullViewport[3])}))),t.attributes.add(p.r.START,"vec3"),t.attributes.add(p.r.END,"vec3"),t.attributes.add(p.r.UP,"vec3"),t.attributes.add(p.r.EXTRUDE,"vec2"),t.varyings.add("uv","vec2"),t.varyings.add("vViewStart","vec3"),t.varyings.add("vViewEnd","vec3"),t.varyings.add("vViewPlane","vec4"),i.code.add(h.H`void main() {
vec3 pos = mix(start, end, extrude.x);
vec4 viewPos = modelView * vec4(pos, 1);
vec4 projPos = proj * viewPos;
vec2 ndcPos = projPos.xy / projPos.w;
vec3 viewUp = (modelView * vec4(extrude.y * up, 0)).xyz;
vec4 projPosUp = proj * vec4(viewPos.xyz + viewUp, 1);
vec2 projExtrudeDir = normalize(projPosUp.xy / projPosUp.w - ndcPos);
vec2 lxy = abs(sign(projExtrudeDir) - ndcPos);
ndcPos += length(lxy) * projExtrudeDir;
vec3 worldPlaneNormal = normalize(cross(up, normalize(end - start)));
vec3 viewPlaneNormal = (modelView * vec4(worldPlaneNormal, 0)).xyz;
vViewStart = (modelView * vec4(start, 1)).xyz;
vViewEnd = (modelView * vec4(end, 1)).xyz;
vViewPlane = vec4(viewPlaneNormal, -dot(viewPlaneNormal, vViewStart));
float xPaddingPixels = sign(dot(viewPlaneNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;
ndcPos.x += xPaddingPixels * pixelToNDC.x;
uv = ndcPos * 0.5 + 0.5;
gl_Position = vec4(ndcPos, 0, 1);
}`),s.uniforms.add(new c.m("perScreenPixelRatio",((e,t)=>t.camera.perScreenPixelRatio))),s.code.add(h.H`float planeDistancePixels(vec4 plane, vec3 pos, vec3 start, vec3 end) {
vec3 origin = mix(start, end, 0.5);
vec3 basis = end - origin;
vec3 posAtOrigin = pos - origin;
float x = dot(normalize(basis), posAtOrigin);
float y = dot(plane.xyz, posAtOrigin);
float dx = max(abs(x) - length(basis), 0.0);
float dy = y;
float dist = length(vec2(dx, dy));
float width = fwidth(y);
float maxPixelDistance = length(pos) * perScreenPixelRatio * 2.0;
float pixelDist = dist / min(width, maxPixelDistance);
return abs(pixelDist);
}
void main() {
vec3 dEndStart = vViewEnd - vViewStart;
if (dot(dEndStart, dEndStart) < 1e-5) {
discard;
}
vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
discard;
}
float distance = planeDistancePixels(vViewPlane, pos, vViewStart, vViewEnd);
vec4 color = laserlineProfile(distance);
float alpha = (1.0 - smoothstep(0.995 - angleCutoffAdjust, 0.999 - angleCutoffAdjust, abs(dot(normal, vViewPlane.xyz))));
fragColor = laserlineOutput(color * alpha * depthDiscontinuityAlpha);
}`),t}const g=(0,a.vt)(),_=(0,s.vt)(),P=Object.freeze(Object.defineProperty({__proto__:null,build:f},Symbol.toStringTag,{value:"Module"}))},71467:(e,t,i)=>{i.d(t,{L:()=>T,b:()=>D,d:()=>w});var n=i(15941),s=i(19555),r=i(72745),a=i(20664),l=i(9392),o=i(43047),c=i(55855),h=i(44230),d=i(13927),u=i(93582),p=i(31484),f=i(73398),g=i(95756),_=i(5517),P=i(58350),m=i(21390),v=i(64839),b=i(32307);const w=(0,n.kU)(6);function D(e){const t=new b.N5;t.include(f.c),t.include(p.K,e);const i=t.fragment;if(e.lineVerticalPlaneEnabled||e.heightManifoldEnabled)if(i.uniforms.add(new m.m("maxPixelDistance",((t,i)=>e.heightManifoldEnabled?2*i.camera.computeScreenPixelSizeAt(t.heightManifoldTarget):2*i.camera.computeScreenPixelSizeAt(t.lineVerticalPlaneSegment.origin)))),i.code.add(v.H`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),e.spherical){const e=(e,t,i)=>(0,a.h)(e,t.heightManifoldTarget,i.camera.viewMatrix),t=(e,t)=>(0,a.h)(e,[0,0,0],t.camera.viewMatrix);i.uniforms.add(new P.E("heightManifoldOrigin",((i,n)=>(e(L,i,n),t(S,n),(0,a.f)(S,S,L),(0,a.n)(y,S),y[3]=(0,a.l)(S),y))),new _.t("globalOrigin",((e,i)=>t(L,i))),new m.m("cosSphericalAngleThreshold",((e,t)=>1-Math.max(2,(0,a.p)(t.camera.eye,e.heightManifoldTarget)*t.camera.perRenderPixelRatio)/(0,a.l)(e.heightManifoldTarget)))),i.code.add(v.H`float globeDistancePixels(float posInGlobalOriginLength) {
float dist = abs(posInGlobalOriginLength - heightManifoldOrigin.w);
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}
float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
vec3 posInGlobalOriginNorm = normalize(globalOrigin - pos);
float cosAngle = dot(posInGlobalOriginNorm, heightManifoldOrigin.xyz);
vec3 posInGlobalOrigin = globalOrigin - pos;
float posInGlobalOriginLength = length(posInGlobalOrigin);
float sphericalDistance = globeDistancePixels(posInGlobalOriginLength);
float planarDistance = planeDistancePixels(heightPlane, pos);
return cosAngle < cosSphericalAngleThreshold ? sphericalDistance : planarDistance;
}`)}else i.code.add(v.H`float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
return planeDistancePixels(heightPlane, pos);
}`);if(e.pointDistanceEnabled&&(i.uniforms.add(new m.m("maxPixelDistance",((e,t)=>2*t.camera.computeScreenPixelSizeAt(e.pointDistanceTarget)))),i.code.add(v.H`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`)),e.intersectsLineEnabled&&(i.uniforms.add(new m.m("perScreenPixelRatio",((e,t)=>t.camera.perScreenPixelRatio))),i.code.add(v.H`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`)),(e.lineVerticalPlaneEnabled||e.intersectsLineEnabled)&&i.code.add(v.H`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`),i.code.add(v.H`void main() {
vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
discard;
}
vec4 color = vec4(0, 0, 0, 0);`),e.heightManifoldEnabled){i.uniforms.add(new g.G("angleCutoff",(e=>x(e))),new P.E("heightPlane",((e,t)=>E(e.heightManifoldTarget,e.renderCoordsHelper.worldUpAtPosition(e.heightManifoldTarget,L),t.camera.viewMatrix))));const t=e.spherical?v.H`normalize(globalOrigin - pos)`:v.H`heightPlane.xyz`;i.code.add(v.H`
    {
      vec2 angleCutoffAdjusted = angleCutoff - angleCutoffAdjust;

      // Fade out laserlines on flat surfaces
      float heightManifoldAlpha = 1.0 - smoothstep(angleCutoffAdjusted.x, angleCutoffAdjusted.y, abs(dot(normal, ${t})));

      vec4 heightManifoldColor = laserlineProfile(heightManifoldDistancePixels(heightPlane, pos));
      color = max(color, heightManifoldColor * heightManifoldAlpha);
    }
    `)}return e.pointDistanceEnabled&&(i.uniforms.add(new g.G("angleCutoff",(e=>x(e))),new P.E("pointDistanceSphere",((e,t)=>function(e,t){return(0,a.h)((0,u.g)(R),e.pointDistanceOrigin,t.camera.viewMatrix),R[3]=(0,a.p)(e.pointDistanceOrigin,e.pointDistanceTarget),R}(e,t)))),i.code.add(v.H`{
float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);
}`)),e.lineVerticalPlaneEnabled&&(i.uniforms.add(new g.G("angleCutoff",(e=>x(e))),new P.E("lineVerticalPlane",((e,t)=>function(e,t){const i=(0,h.sd)(e.lineVerticalPlaneSegment,.5,L),n=e.renderCoordsHelper.worldUpAtPosition(i,C),s=(0,a.n)(S,e.lineVerticalPlaneSegment.vector),r=(0,a.b)(L,n,s);return(0,a.n)(r,r),E(e.lineVerticalPlaneSegment.origin,r,t.camera.viewMatrix)}(e,t))),new _.t("lineVerticalStart",((e,t)=>function(e,t){const i=(0,a.c)(L,e.lineVerticalPlaneSegment.origin);return e.renderCoordsHelper.setAltitude(i,0),(0,a.h)(i,i,t.camera.viewMatrix)}(e,t))),new _.t("lineVerticalEnd",((e,t)=>function(e,t){const i=(0,a.g)(L,e.lineVerticalPlaneSegment.origin,e.lineVerticalPlaneSegment.vector);return e.renderCoordsHelper.setAltitude(i,0),(0,a.h)(i,i,t.camera.viewMatrix)}(e,t)))),i.code.add(v.H`{
if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}
}`)),e.intersectsLineEnabled&&(i.uniforms.add(new g.G("angleCutoff",(e=>x(e))),new _.t("intersectsLineStart",((e,t)=>(0,a.h)(L,e.lineStartWorld,t.camera.viewMatrix))),new _.t("intersectsLineEnd",((e,t)=>(0,a.h)(L,e.lineEndWorld,t.camera.viewMatrix))),new _.t("intersectsLineDirection",((e,t)=>((0,a.c)(y,e.intersectsLineSegment.vector),y[3]=0,(0,a.n)(L,(0,o.t)(y,y,t.camera.viewMatrix))))),new m.m("intersectsLineRadius",(e=>e.intersectsLineRadius))),i.code.add(v.H`{
if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}
}`)),i.code.add(v.H`fragColor = laserlineOutput(color * depthDiscontinuityAlpha);
}`),t}function x(e){return(0,s.hZ)(V,Math.cos(e.angleCutoff),Math.cos(Math.max(0,e.angleCutoff-(0,n.kU)(2))))}function E(e,t,i){return(0,a.h)(A,e,i),(0,a.c)(y,t),y[3]=0,(0,o.t)(y,y,i),(0,d.O_)(A,y,M)}const V=(0,r.vt)(),L=(0,l.vt)(),y=(0,c.vt)(),C=(0,l.vt)(),S=(0,l.vt)(),A=(0,l.vt)(),M=(0,d.vt)(),R=(0,u.c)(),T=Object.freeze(Object.defineProperty({__proto__:null,build:D,defaultAngleCutoff:w},Symbol.toStringTag,{value:"Module"}))},1307:(e,t,i)=>{i.d(t,{o:()=>X});i(81806);var n=i(20664),s=i(9392),r=i(44230),a=i(69230),l=i(35143),o=i(30726),c=i(46053),h=(i(76460),i(47249),i(85842)),d=i(49595),u=i(4763),p=i(95925),f=i(64465),g=i(60586),_=i(44815),P=i(57481),m=i(48549),v=i(16506),b=i(42693),w=i(28584),D=i(66470),x=i(96111),E=i(93345),V=i(57162);class L extends b.w{initializeProgram(e){return new w.B(e.rctx,L.shader.get().build(this.configuration),y)}initializePipeline(){return(0,V.Ey)({blending:(0,V.ox)(E.dn.ONE,E.dn.ONE_MINUS_SRC_ALPHA),colorWrite:V.wE})}}L.shader=new v.$(x.L,(()=>i.e(7657).then(i.bind(i,37657))));const y=new Map([[D.r.START,0],[D.r.END,1],[D.r.UP,2],[D.r.EXTRUDE,3]]);var C=i(69008),S=i(76718);class A{constructor(e){this._renderCoordsHelper=e,this._buffers=null,this._origin=(0,s.vt)(),this._dirty=!1,this._count=0,this._vao=null}set vertices(e){const t=(0,_.jh)(3*e.length);let i=0;for(const n of e)t[i++]=n[0],t[i++]=n[1],t[i++]=n[2];this.buffers=[t]}set buffers(e){if(this._buffers=e,this._buffers.length>0){const e=this._buffers[0],t=3*Math.floor(e.length/3/2);(0,n.s)(this._origin,e[t],e[t+1],e[t+2])}else(0,n.s)(this._origin,0,0,0);this._dirty=!0}get origin(){return this._origin}draw(e){const t=this._ensureVAO(e);null!=t&&(e.bindVAO(t),e.drawArrays(E.WR.TRIANGLES,0,this._count))}dispose(){null!=this._vao&&this._vao.dispose()}_ensureVAO(e){return null==this._buffers?null:(null==this._vao&&(this._vao=this._createVAO(e,this._buffers)),this._ensureVertexData(this._vao,this._buffers),this._vao)}_createVAO(e,t){const i=this._createDataBuffer(t);return this._dirty=!1,new C.Z(e,y,{data:(0,P.U)(O)},{data:S.g.createVertex(e,E._U.STATIC_DRAW,i)})}_ensureVertexData(e,t){if(!this._dirty)return;const i=this._createDataBuffer(t);e.vertexBuffers.data?.setData(i),this._dirty=!1}_createDataBuffer(e){const t=e.reduce(((e,t)=>e+M(t)),0);this._count=t;const i=O.createBuffer(t),s=this._origin;let r=0,a=0;for(const l of e){for(let e=0;e<l.length;e+=3){const t=(0,n.s)(T,l[e],l[e+1],l[e+2]);0===e?a=this._renderCoordsHelper.getAltitude(t):this._renderCoordsHelper.setAltitude(t,a);const o=this._renderCoordsHelper.worldUpAtPosition(t,R),c=r+2*e,h=(0,n.f)(T,t,s);if(e<l.length-3){i.up.setVec(c,o),i.up.setVec(c+3,o),i.up.setVec(c+5,o);for(let e=0;e<6;e++)i.start.setVec(c+e,h);i.extrude.setValues(c,0,-1),i.extrude.setValues(c+1,1,-1),i.extrude.setValues(c+2,1,1),i.extrude.setValues(c+3,0,-1),i.extrude.setValues(c+4,1,1),i.extrude.setValues(c+5,0,1)}if(e>0){i.up.setVec(c-2,o),i.up.setVec(c-4,o),i.up.setVec(c-5,o);for(let e=-6;e<0;e++)i.end.setVec(c+e,h)}}r+=M(l)}return i.buffer}}function M(e){return 2*(e.length/3-1)*3}const R=(0,s.vt)(),T=(0,s.vt)(),O=(0,m.BP)().vec3f(D.r.START).vec3f(D.r.END).vec3f(D.r.UP).vec2f(D.r.EXTRUDE);var q=i(99415);class H extends q.K{constructor(){super(...arguments),this.contrastControlEnabled=!1}}(0,l._)([(0,q.W)()],H.prototype,"contrastControlEnabled",void 0);var I=i(15941),z=i(64839),W=i(32119),N=i(71467);class j extends z.Y{constructor(){super(...arguments),this.innerColor=(0,s.fA)(1,1,1),this.innerWidth=1,this.glowColor=(0,s.fA)(1,.5,0),this.glowWidth=8,this.glowFalloff=8,this.globalAlpha=.75,this.globalAlphaContrastBoost=2,this.angleCutoff=(0,I.kU)(6),this.pointDistanceOrigin=(0,s.vt)(),this.pointDistanceTarget=(0,s.vt)(),this.lineVerticalPlaneSegment=(0,r.vt)(),this.intersectsLineSegment=(0,r.vt)(),this.intersectsLineRadius=3,this.heightManifoldTarget=(0,s.vt)(),this.lineStartWorld=(0,s.vt)(),this.lineEndWorld=(0,s.vt)()}}class U extends b.w{initializeProgram(e){return new w.B(e.rctx,U.shader.get().build(this.configuration),W.D)}initializePipeline(){return(0,V.Ey)({blending:(0,V.ox)(E.dn.ONE,E.dn.ONE_MINUS_SRC_ALPHA),colorWrite:V.wE})}}U.shader=new v.$(N.L,(()=>i.e(1877).then(i.bind(i,51877))));class B extends H{constructor(){super(...arguments),this.heightManifoldEnabled=!1,this.pointDistanceEnabled=!1,this.lineVerticalPlaneEnabled=!1,this.intersectsLineEnabled=!1,this.spherical=!1}}(0,l._)([(0,q.W)()],B.prototype,"heightManifoldEnabled",void 0),(0,l._)([(0,q.W)()],B.prototype,"pointDistanceEnabled",void 0),(0,l._)([(0,q.W)()],B.prototype,"lineVerticalPlaneEnabled",void 0),(0,l._)([(0,q.W)()],B.prototype,"intersectsLineEnabled",void 0),(0,l._)([(0,q.W)()],B.prototype,"spherical",void 0);var G=i(77730),F=i(99362);let k=class extends g.Ot{constructor(e){super(e),this._technique=null,this._heightManifoldEnabled=!1,this._pointDistanceEnabled=!1,this._lineVerticalPlaneEnabled=!1,this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._pathVerticalPlaneEnabled=!1,this._pathVerticalPlaneData=null,this._pathTechnique=null,this._passParameters=new j,this.produces=new Map([[G.N.LASERLINES,()=>!this.contrastControlEnabled],[G.N.LASERLINES_CONTRAST_CONTROL,()=>this.contrastControlEnabled]])}initialize(){this._passParameters.renderCoordsHelper=this.renderCoordsHelper}consumes(){return g.B7}get isDecoration(){return this._isDecoration}get heightManifoldEnabled(){return this._heightManifoldEnabled}set heightManifoldEnabled(e){this._heightManifoldEnabled!==e&&(this._heightManifoldEnabled=e,this._requestRender())}get heightManifoldTarget(){return this._passParameters.heightManifoldTarget}set heightManifoldTarget(e){(0,n.c)(this._passParameters.heightManifoldTarget,e),this._requestRender()}get pointDistanceEnabled(){return this._pointDistanceEnabled}set pointDistanceEnabled(e){e!==this._pointDistanceEnabled&&(this._pointDistanceEnabled=e,this._requestRender())}get pointDistanceTarget(){return this._passParameters.pointDistanceTarget}set pointDistanceTarget(e){(0,n.c)(this._passParameters.pointDistanceTarget,e),this._requestRender()}get pointDistanceOrigin(){return this._passParameters.pointDistanceOrigin}set pointDistanceOrigin(e){(0,n.c)(this._passParameters.pointDistanceOrigin,e),this._requestRender()}get lineVerticalPlaneEnabled(){return this._lineVerticalPlaneEnabled}set lineVerticalPlaneEnabled(e){e!==this._lineVerticalPlaneEnabled&&(this._lineVerticalPlaneEnabled=e,this._requestRender())}get lineVerticalPlaneSegment(){return this._passParameters.lineVerticalPlaneSegment}set lineVerticalPlaneSegment(e){(0,r.C)(e,this._passParameters.lineVerticalPlaneSegment),this._requestRender()}get intersectsLineEnabled(){return this._intersectsLineEnabled}set intersectsLineEnabled(e){e!==this._intersectsLineEnabled&&(this._intersectsLineEnabled=e,this._requestRender())}get intersectsLineSegment(){return this._passParameters.intersectsLineSegment}set intersectsLineSegment(e){(0,r.C)(e,this._passParameters.intersectsLineSegment),this._requestRender()}get intersectsLineRadius(){return this._passParameters.intersectsLineRadius}set intersectsLineRadius(e){e!==this._passParameters.intersectsLineRadius&&(this._passParameters.intersectsLineRadius=e,this._requestRender())}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){e!==this._intersectsLineInfinite&&(this._intersectsLineInfinite=e,this._requestRender())}get pathVerticalPlaneEnabled(){return this._pathVerticalPlaneEnabled}set pathVerticalPlaneEnabled(e){e!==this._pathVerticalPlaneEnabled&&(this._pathVerticalPlaneEnabled=e,null!=this._pathVerticalPlaneData&&this._requestRender())}set pathVerticalPlaneVertices(e){null==this._pathVerticalPlaneData&&(this._pathVerticalPlaneData=new A(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.vertices=e,this.pathVerticalPlaneEnabled&&this._requestRender()}set pathVerticalPlaneBuffers(e){null==this._pathVerticalPlaneData&&(this._pathVerticalPlaneData=new A(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.buffers=e,this.pathVerticalPlaneEnabled&&this._requestRender()}setParameters(e){(0,F.MB)(this._passParameters,e)&&this._requestRender()}initializeRenderContext(e){this._context=e,this._techniques=e.techniques,this._techniqueConfig=new B;const t=new H;t.contrastControlEnabled=this.contrastControlEnabled,this._pathTechnique=this._techniques.acquire(L,t)}uninitializeRenderContext(){this._technique=(0,o.Gz)(this._technique),this._pathVerticalPlaneData=(0,o.WD)(this._pathVerticalPlaneData),this._pathTechnique=(0,o.Gz)(this._pathTechnique)}prepareTechnique(){return this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled?(this._techniqueConfig.heightManifoldEnabled=this.heightManifoldEnabled,this._techniqueConfig.lineVerticalPlaneEnabled=this.lineVerticalPlaneEnabled,this._techniqueConfig.pointDistanceEnabled=this.pointDistanceEnabled,this._techniqueConfig.intersectsLineEnabled=this.intersectsLineEnabled,this._techniqueConfig.contrastControlEnabled=this.contrastControlEnabled,this._techniqueConfig.spherical=this.viewingMode===f.RT.Global,this._technique=this._techniques.releaseAndAcquire(U,this._techniqueConfig,this._technique),this._technique):this._pathTechnique}renderNode(e,t,i){const n=i?.get("normals")?.getTexture();n&&(this._passParameters.normals=n,(this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled)&&this._renderUnified(e,t),this.pathVerticalPlaneEnabled&&this._renderPath(e))}_renderUnified(e,t){const i=e.rctx;this._updatePassParameters(e),i.bindTechnique(t,e.bindParameters,this._passParameters),i.screen.draw()}_renderPath(e){if(null==this._pathVerticalPlaneData||null==this._pathTechnique)return;const t=e.rctx,i=this._pathTechnique;t.bindTechnique(i,e.bindParameters,{...this._passParameters,origin:this._pathVerticalPlaneData.origin}),this._pathVerticalPlaneData.draw(e.rctx)}_updatePassParameters(e){if(!this._intersectsLineEnabled)return;const t=e.bindParameters.camera;if(this._intersectsLineInfinite){if((0,d.$e)((0,p.LV)(this._passParameters.intersectsLineSegment.origin,this._passParameters.intersectsLineSegment.vector),Z),Z.c0=-Number.MAX_VALUE,!(0,u.ig)(t.frustum,Z))return;(0,d.j1)(Z,this._passParameters.lineStartWorld),(0,d.mO)(Z,this._passParameters.lineEndWorld)}else(0,n.c)(this._passParameters.lineStartWorld,this._passParameters.intersectsLineSegment.origin),(0,n.g)(this._passParameters.lineEndWorld,this._passParameters.intersectsLineSegment.origin,this._passParameters.intersectsLineSegment.vector)}_requestRender(){this._context&&this._context.requestRender()}get test(){}};(0,l._)([(0,c.MZ)({constructOnly:!0})],k.prototype,"viewingMode",void 0),(0,l._)([(0,c.MZ)({constructOnly:!0})],k.prototype,"contrastControlEnabled",void 0),(0,l._)([(0,c.MZ)({constructOnly:!0})],k.prototype,"_isDecoration",void 0),(0,l._)([(0,c.MZ)({constructOnly:!0})],k.prototype,"renderCoordsHelper",void 0),k=(0,l._)([(0,h.$)("esri.views.3d.webgl-engine.effects.laserlines.LaserLineRenderer")],k);const Z=(0,d.vt)();class X extends a.B{constructor(e){super(e),this._angleCutoff=N.d,this._style={},this._heightManifoldTarget=(0,s.vt)(),this._heightManifoldEnabled=!1,this._intersectsLine=(0,r.vt)(),this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._lineVerticalPlaneSegment=null,this._pathVerticalPlaneBuffers=null,this._pointDistanceLine=null,this.applyProperties(e)}get testData(){}createResources(){this._ensureRenderer()}destroyResources(){this._disposeRenderer()}updateVisibility(){this._syncRenderer(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance()}get angleCutoff(){return this._angleCutoff}set angleCutoff(e){this._angleCutoff!==e&&(this._angleCutoff=e,this._syncAngleCutoff())}get style(){return this._style}set style(e){this._style=e,this._syncStyle()}get heightManifoldTarget(){return this._heightManifoldEnabled?this._heightManifoldTarget:null}set heightManifoldTarget(e){null!=e?((0,n.c)(this._heightManifoldTarget,e),this._heightManifoldEnabled=!0):this._heightManifoldEnabled=!1,this._syncRenderer(),this._syncHeightManifold()}set intersectsWorldUpAtLocation(e){if(null==e)return void(this.intersectsLine=null);const t=this.view.renderCoordsHelper.worldUpAtPosition(e,$);this.intersectsLine=(0,r.fA)(e,t),this.intersectsLineInfinite=!0}get intersectsLine(){return this._intersectsLineEnabled?this._intersectsLine:null}set intersectsLine(e){null!=e?((0,r.C)(e,this._intersectsLine),this._intersectsLineEnabled=!0):this._intersectsLineEnabled=!1,this._syncIntersectsLine(),this._syncRenderer()}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){this._intersectsLineInfinite=e,this._syncIntersectsLineInfinite()}get lineVerticalPlaneSegment(){return this._lineVerticalPlaneSegment}set lineVerticalPlaneSegment(e){this._lineVerticalPlaneSegment=null!=e?(0,r.C)(e):null,this._syncLineVerticalPlane(),this._syncRenderer()}get pathVerticalPlane(){return this._pathVerticalPlaneBuffers}set pathVerticalPlane(e){this._pathVerticalPlaneBuffers=e,this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncRenderer()}get pointDistanceLine(){return this._pointDistanceLine}set pointDistanceLine(e){this._pointDistanceLine=null!=e?{origin:(0,s.o8)(e.origin),target:e.target?(0,s.o8)(e.target):null}:null,this._syncPointDistance(),this._syncRenderer()}_syncRenderer(){this.attached&&this.visible&&(this._intersectsLineEnabled||this._heightManifoldEnabled||null!=this._pointDistanceLine||null!=this._pathVerticalPlaneBuffers)?this._ensureRenderer():this._disposeRenderer()}_ensureRenderer(){null==this._renderer&&(this._renderer=new k({renderCoordsHelper:this.view.renderCoordsHelper,contrastControlEnabled:!0,_isDecoration:this.isDecoration,viewingMode:this.view.state.viewingMode}),this._syncStyle(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncIntersectsLineInfinite(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncAngleCutoff(),this.view._stage&&this.view._stage.addRenderPlugin(this._renderer))}_syncStyle(){null!=this._renderer&&(this._renderer.setParameters(this._style),null!=this._style.intersectsLineRadius&&(this._renderer.intersectsLineRadius=this._style.intersectsLineRadius))}_syncAngleCutoff(){null!=this._renderer&&this._renderer.setParameters({angleCutoff:this._angleCutoff})}_syncHeightManifold(){null!=this._renderer&&(this._renderer.heightManifoldEnabled=this._heightManifoldEnabled&&this.visible,this._heightManifoldEnabled&&(this._renderer.heightManifoldTarget=this._heightManifoldTarget))}_syncIntersectsLine(){null!=this._renderer&&(this._renderer.intersectsLineEnabled=this._intersectsLineEnabled&&this.visible,this._intersectsLineEnabled&&(this._renderer.intersectsLineSegment=this._intersectsLine))}_syncIntersectsLineInfinite(){null!=this._renderer&&(this._renderer.intersectsLineInfinite=this._intersectsLineInfinite)}_syncPathVerticalPlane(){null!=this._renderer&&(this._renderer.pathVerticalPlaneEnabled=null!=this._pathVerticalPlaneBuffers&&this.visible,null!=this._pathVerticalPlaneBuffers&&(this._renderer.pathVerticalPlaneBuffers=this._pathVerticalPlaneBuffers))}_syncLineVerticalPlane(){null!=this._renderer&&(this._renderer.lineVerticalPlaneEnabled=null!=this._lineVerticalPlaneSegment&&this.visible,null!=this._lineVerticalPlaneSegment&&(this._renderer.lineVerticalPlaneSegment=this._lineVerticalPlaneSegment))}_syncPointDistance(){if(null==this._renderer)return;const e=this._pointDistanceLine,t=null!=e;this._renderer.pointDistanceEnabled=t&&null!=e.target&&this.visible,t&&(this._renderer.pointDistanceOrigin=e.origin,null!=e.target&&(this._renderer.pointDistanceTarget=e.target))}_disposeRenderer(){null!=this._renderer&&this.view._stage&&(this.view._stage.removeRenderPlugin(this._renderer),this._renderer=null)}}const $=(0,s.vt)()},31484:(e,t,i)=>{i.d(t,{K:()=>c});var n=i(65058),s=i(27963),r=i(5517),a=i(21390),l=i(64839),o=i(70367);function c(e,t){const i=e.fragment;i.include(n.E),e.include(s.Ir),i.uniforms.add(new a.m("globalAlpha",(e=>e.globalAlpha)),new r.t("glowColor",(e=>e.glowColor)),new a.m("glowWidth",((e,t)=>e.glowWidth*t.camera.pixelRatio)),new a.m("glowFalloff",(e=>e.glowFalloff)),new r.t("innerColor",(e=>e.innerColor)),new a.m("innerWidth",((e,t)=>e.innerWidth*t.camera.pixelRatio)),new o.N("depthMap",((e,t)=>t.depth?.attachment)),new o.N("normalMap",(e=>e.normals)),new o.N("frameColor",((e,t)=>t.mainColor))),i.code.add(l.H`vec4 blendPremultiplied(vec4 source, vec4 dest) {
float oneMinusSourceAlpha = 1.0 - source.a;
return vec4(
source.rgb + dest.rgb * oneMinusSourceAlpha,
source.a + dest.a * oneMinusSourceAlpha
);
}`),i.code.add(l.H`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`),i.code.add(l.H`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`),i.code.add(l.H`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float angleCutoffAdjust, out float depthDiscontinuityAlpha) {
float depth = depthFromTexture(depthMap, uv);
if (depth == 1.0) {
return false;
}
float linearDepth = linearizeDepth(depth);
pos = reconstructPosition(gl_FragCoord.xy, linearDepth);
float minStep = 6e-8;
float depthStep = clamp(depth + minStep, 0.0, 1.0);
float linearDepthStep = linearizeDepth(depthStep);
float depthError = abs(linearDepthStep - linearDepth);
if (depthError > 0.2) {
normal = texture(normalMap, uv).xyz * 2.0 - 1.0;
angleCutoffAdjust = 0.004;
} else {
normal = normalize(cross(dFdx(pos), dFdy(pos)));
angleCutoffAdjust = 0.0;
}
float ddepth = fwidth(linearDepth);
depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / linearDepth);
return true;
}`),t.contrastControlEnabled?(i.uniforms.add(new a.m("globalAlphaContrastBoost",(e=>null!=e.globalAlphaContrastBoost?e.globalAlphaContrastBoost:1))),i.code.add(l.H`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`)):i.code.add(l.H`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`)}}}]);
//# sourceMappingURL=1307.27d2cf20.chunk.js.map