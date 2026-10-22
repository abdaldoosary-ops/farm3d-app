(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},t={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},n=`attached`,r=1e3,i=1001,a=1002,o=1003,s=1004,c=1005,l=1006,u=1007,d=1008,f=1009,p=1010,m=1011,h=1012,g=1013,_=1014,v=1015,y=1016,b=1017,x=1018,S=1020,C=35902,w=35899,T=1021,E=1022,D=1023,O=1026,k=1027,A=1028,ee=1029,te=1030,ne=1031,j=1033,re=33776,M=33777,ie=33778,N=33779,ae=35840,oe=35841,se=35842,ce=35843,le=36196,P=37492,ue=37496,de=37488,fe=37489,pe=37490,me=37491,he=37808,ge=37809,_e=37810,ve=37811,ye=37812,be=37813,xe=37814,Se=37815,Ce=37816,we=37817,Te=37818,Ee=37819,De=37820,Oe=37821,ke=36492,Ae=36494,je=36495,Me=36283,Ne=36284,F=36285,Pe=36286,Fe=2300,Ie=2301,I=2302,Le=2303,L=2400,Re=2401,ze=2402,Be=2500,Ve=3200,He=`srgb`,Ue=`srgb-linear`,We=`linear`,Ge=`srgb`,Ke=7680,qe=35044,Je=2e3;function Ye(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Xe(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ze(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Qe(){let e=Ze(`canvas`);return e.style.display=`block`,e}var $e={};function et(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function tt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function R(...e){e=tt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function z(...e){e=tt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function nt(...e){let t=e.join(` `);t in $e||($e[t]=!0,R(...e))}function rt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var it={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},at=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},ot=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),st=1234567,ct=Math.PI/180,lt=180/Math.PI;function ut(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ot[e&255]+ot[e>>8&255]+ot[e>>16&255]+ot[e>>24&255]+`-`+ot[t&255]+ot[t>>8&255]+`-`+ot[t>>16&15|64]+ot[t>>24&255]+`-`+ot[n&63|128]+ot[n>>8&255]+`-`+ot[n>>16&255]+ot[n>>24&255]+ot[r&255]+ot[r>>8&255]+ot[r>>16&255]+ot[r>>24&255]).toLowerCase()}function dt(e,t,n){return Math.max(t,Math.min(n,e))}function ft(e,t){return(e%t+t)%t}function pt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function mt(e,t,n){return e===t?0:(n-e)/(t-e)}function ht(e,t,n){return(1-n)*e+n*t}function gt(e,t,n,r){return ht(e,t,1-Math.exp(-n*r))}function _t(e,t=1){return t-Math.abs(ft(e,t*2)-t)}function vt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function yt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function bt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function xt(e,t){return e+Math.random()*(t-e)}function St(e){return e*(.5-Math.random())}function Ct(e){e!==void 0&&(st=e);let t=st+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wt(e){return e*ct}function Tt(e){return e*lt}function Et(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Dt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Ot(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function kt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:R(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function At(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function jt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Mt={DEG2RAD:ct,RAD2DEG:lt,generateUUID:ut,clamp:dt,euclideanModulo:ft,mapLinear:pt,inverseLerp:mt,lerp:ht,damp:gt,pingpong:_t,smoothstep:vt,smootherstep:yt,randInt:bt,randFloat:xt,randFloatSpread:St,seededRandom:Ct,degToRad:wt,radToDeg:Tt,isPowerOfTwo:Et,ceilPowerOfTwo:Dt,floorPowerOfTwo:Ot,setQuaternionFromProperEuler:kt,normalize:jt,denormalize:At},B=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Nt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:R(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ft.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ft.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pt.copy(this).projectOnVector(e),this.sub(Pt)}reflect(e){return this.sub(Pt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pt=new V,Ft=new Nt,H=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return nt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(It.makeScale(e,t)),this}rotate(e){return nt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(It.makeRotation(-e)),this}translate(e,t){return nt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(It.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},It=new H,Lt=new H().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rt=new H().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zt(){let e={enabled:!0,workingColorSpace:Ue,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Vt(e.r),e.g=Vt(e.g),e.b=Vt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Ht(e.r),e.g=Ht(e.g),e.b=Ht(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?We:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return nt(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return nt(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ue]:{primaries:t,whitePoint:r,transfer:We,toXYZ:Lt,fromXYZ:Rt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:t,whitePoint:r,transfer:Ge,toXYZ:Lt,fromXYZ:Rt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:He}}}),e}var Bt=zt();function Vt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Ht(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Ut,Wt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ut===void 0&&(Ut=Ze(`canvas`)),Ut.width=e.width,Ut.height=e.height;let t=Ut.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Ut}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ze(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Vt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Vt(t[e]/255)*255):t[e]=Vt(t[e]);return{data:t,width:e.width,height:e.height}}return R(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Gt=0,Kt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gt++}),this.uuid=ut(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(qt(r[t].image)):e.push(qt(r[t]))}else e=qt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function qt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Wt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(R(`Texture: Unable to serialize Texture.`),{})}var Jt=0,Yt=new V,Xt=class e extends at{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=i,a=i,o=l,s=d,c=D,u=f,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jt++}),this.uuid=ut(),this.name=``,this.source=new Kt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=o,this.minFilter=s,this.anisotropy=p,this.format=c,this.internalFormat=null,this.type=u,this.offset=new B(0,0),this.repeat=new B(1,1),this.center=new B(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new H,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Yt).x}get height(){return this.source.getSize(Yt).y}get depth(){return this.source.getSize(Yt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){R(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case r:e.x-=Math.floor(e.x);break;case i:e.x=e.x<0?0:1;break;case a:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case r:e.y-=Math.floor(e.y);break;case i:e.y=e.y<0?0:1;break;case a:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null,Xt.DEFAULT_MAPPING=300,Xt.DEFAULT_ANISOTROPY=1;var Zt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qt=class extends at{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:l,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t),this.textures=[];let r=new Xt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:l,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Kt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},$t=class extends Qt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},en=class extends Xt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=o,this.minFilter=o,this.wrapR=i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},tn=class extends Xt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=o,this.minFilter=o,this.wrapR=i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},U=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/nn.setFromMatrixColumn(e,0).length(),i=1/nn.setFromMatrixColumn(e,1).length(),a=1/nn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(an,e,on)}lookAt(e,t,n){let r=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),sn.crossVectors(n,ln),sn.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),sn.crossVectors(n,ln)),sn.normalize(),cn.crossVectors(ln,sn),r[0]=sn.x,r[4]=cn.x,r[8]=ln.x,r[1]=sn.y,r[5]=cn.y,r[9]=ln.y,r[2]=sn.z,r[6]=cn.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],te=r[14],ne=r[3],j=r[7],re=r[11],M=r[15];return i[0]=a*x+o*T+s*k+c*ne,i[4]=a*S+o*E+s*A+c*j,i[8]=a*C+o*D+s*ee+c*re,i[12]=a*w+o*O+s*te+c*M,i[1]=l*x+u*T+d*k+f*ne,i[5]=l*S+u*E+d*A+f*j,i[9]=l*C+u*D+d*ee+f*re,i[13]=l*w+u*O+d*te+f*M,i[2]=p*x+m*T+h*k+g*ne,i[6]=p*S+m*E+h*A+g*j,i[10]=p*C+m*D+h*ee+g*re,i[14]=p*w+m*O+h*te+g*M,i[3]=_*x+v*T+y*k+b*ne,i[7]=_*S+v*E+y*A+b*j,i[11]=_*C+v*D+y*ee+b*re,i[15]=_*w+v*O+y*te+b*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=nn.set(r[0],r[1],r[2]).length(),o=nn.set(r[4],r[5],r[6]).length(),s=nn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),rn.copy(this);let c=1/a,l=1/o,u=1/s;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=l,rn.elements[5]*=l,rn.elements[6]*=l,rn.elements[8]*=u,rn.elements[9]*=u,rn.elements[10]*=u,t.setFromRotationMatrix(rn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Je,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Je,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},nn=new V,rn=new U,an=new V(0,0,0),on=new V(1,1,1),sn=new V,cn=new V,ln=new V,un=new U,dn=new Nt,fn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-dt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(dt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:R(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return un.makeRotationFromQuaternion(e),this.setFromRotationMatrix(un,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dn.setFromEuler(this),this.setFromQuaternion(dn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fn.DEFAULT_ORDER=`XYZ`;var pn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},mn=0,hn=new V,gn=new Nt,_n=new U,vn=new V,yn=new V,bn=new V,xn=new Nt,Sn=new V(1,0,0),Cn=new V(0,1,0),wn=new V(0,0,1),Tn={type:`added`},En={type:`removed`},Dn={type:`childadded`,child:null},On={type:`childremoved`,child:null},kn=class e extends at{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mn++}),this.uuid=ut(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new V,n=new fn,r=new Nt,i=new V(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new U},normalMatrix:{value:new H}}),this.matrix=new U,this.matrixWorld=new U,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gn.setFromAxisAngle(e,t),this.quaternion.multiply(gn),this}rotateOnWorldAxis(e,t){return gn.setFromAxisAngle(e,t),this.quaternion.premultiply(gn),this}rotateX(e){return this.rotateOnAxis(Sn,e)}rotateY(e){return this.rotateOnAxis(Cn,e)}rotateZ(e){return this.rotateOnAxis(wn,e)}translateOnAxis(e,t){return hn.copy(e).applyQuaternion(this.quaternion),this.position.add(hn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sn,e)}translateY(e){return this.translateOnAxis(Cn,e)}translateZ(e){return this.translateOnAxis(wn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vn.copy(e):vn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),yn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(yn,vn,this.up):_n.lookAt(vn,yn,this.up),this.quaternion.setFromRotationMatrix(_n),r&&(_n.extractRotation(r.matrixWorld),gn.setFromRotationMatrix(_n),this.quaternion.premultiply(gn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(z(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tn),Dn.child=e,this.dispatchEvent(Dn),Dn.child=null):z(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(En),On.child=e,this.dispatchEvent(On),On.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tn),Dn.child=e,this.dispatchEvent(Dn),Dn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yn,e,bn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yn,xn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};kn.DEFAULT_UP=new V(0,1,0),kn.DEFAULT_MATRIX_AUTO_UPDATE=!0,kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var An=class extends kn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},jn={type:`move`},Mn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new An,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new An,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new An,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new An;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Nn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},Fn={h:0,s:0,l:0};function In(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var W=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=He){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Bt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Bt.workingColorSpace){if(e=ft(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=In(i,r,e+1/3),this.g=In(i,r,e),this.b=In(i,r,e-1/3)}return Bt.colorSpaceToWorking(this,r),this}setStyle(e,t=He){function n(t){t!==void 0&&parseFloat(t)<1&&R(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:R(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);R(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=He){let n=Nn[e.toLowerCase()];return n===void 0?R(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vt(e.r),this.g=Vt(e.g),this.b=Vt(e.b),this}copyLinearToSRGB(e){return this.r=Ht(e.r),this.g=Ht(e.g),this.b=Ht(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=He){return Bt.workingToColorSpace(Ln.copy(this),e),Math.round(dt(Ln.r*255,0,255))*65536+Math.round(dt(Ln.g*255,0,255))*256+Math.round(dt(Ln.b*255,0,255))}getHexString(e=He){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Bt.workingColorSpace){Bt.workingToColorSpace(Ln.copy(this),t);let n=Ln.r,r=Ln.g,i=Ln.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Bt.workingColorSpace){return Bt.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=He){Bt.workingToColorSpace(Ln.copy(this),e);let t=Ln.r,n=Ln.g,r=Ln.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Pn),this.setHSL(Pn.h+e,Pn.s+t,Pn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pn),e.getHSL(Fn);let n=ht(Pn.h,Fn.h,t),r=ht(Pn.s,Fn.s,t),i=ht(Pn.l,Fn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new W;W.NAMES=Nn;var Rn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new W(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},zn=class extends kn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Bn=new V,Vn=new V,Hn=new V,Un=new V,Wn=new V,Gn=new V,Kn=new V,qn=new V,Jn=new V,Yn=new V,Xn=new Zt,Zn=new Zt,Qn=new Zt,$n=class e{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Bn.subVectors(e,t),r.cross(Bn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Bn.subVectors(r,t),Vn.subVectors(n,t),Hn.subVectors(e,t);let a=Bn.dot(Bn),o=Bn.dot(Vn),s=Bn.dot(Hn),c=Vn.dot(Vn),l=Vn.dot(Hn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Un)!==null&&Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Un)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Un.x),s.addScaledVector(a,Un.y),s.addScaledVector(o,Un.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Xn.setScalar(0),Zn.setScalar(0),Qn.setScalar(0),Xn.fromBufferAttribute(e,t),Zn.fromBufferAttribute(e,n),Qn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Xn,i.x),a.addScaledVector(Zn,i.y),a.addScaledVector(Qn,i.z),a}static isFrontFacing(e,t,n,r){return Bn.subVectors(n,t),Vn.subVectors(e,t),Bn.cross(Vn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),Bn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Wn.subVectors(r,n),Gn.subVectors(i,n),qn.subVectors(e,n);let s=Wn.dot(qn),c=Gn.dot(qn);if(s<=0&&c<=0)return t.copy(n);Jn.subVectors(e,r);let l=Wn.dot(Jn),u=Gn.dot(Jn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Wn,a);Yn.subVectors(e,i);let f=Wn.dot(Yn),p=Gn.dot(Yn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Gn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Kn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Kn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Wn,a).addScaledVector(Gn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},er=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=nr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,nr):nr.fromBufferAttribute(r,t),nr.applyMatrix4(e.matrixWorld),this.expandByPoint(nr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),rr.copy(e.boundingBox)),rr.applyMatrix4(e.matrixWorld),this.union(rr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nr),nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ur),dr.subVectors(this.max,ur),ir.subVectors(e.a,ur),ar.subVectors(e.b,ur),or.subVectors(e.c,ur),sr.subVectors(ar,ir),cr.subVectors(or,ar),lr.subVectors(ir,or);let t=[0,-sr.z,sr.y,0,-cr.z,cr.y,0,-lr.z,lr.y,sr.z,0,-sr.x,cr.z,0,-cr.x,lr.z,0,-lr.x,-sr.y,sr.x,0,-cr.y,cr.x,0,-lr.y,lr.x,0];return!mr(t,ir,ar,or,dr)||(t=[1,0,0,0,1,0,0,0,1],!mr(t,ir,ar,or,dr))?!1:(fr.crossVectors(sr,cr),t=[fr.x,fr.y,fr.z],mr(t,ir,ar,or,dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},tr=[new V,new V,new V,new V,new V,new V,new V,new V],nr=new V,rr=new er,ir=new V,ar=new V,or=new V,sr=new V,cr=new V,lr=new V,ur=new V,dr=new V,fr=new V,pr=new V;function mr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){pr.fromArray(e,a);let o=i.x*Math.abs(pr.x)+i.y*Math.abs(pr.y)+i.z*Math.abs(pr.z),s=t.dot(pr),c=n.dot(pr),l=r.dot(pr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var hr=new V,gr=new B,_r=0,vr=class extends at{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_r++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=qe,this.updateRanges=[],this.gpuType=v,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix3(e),this.setXY(t,gr.x,gr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix3(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix4(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyNormalMatrix(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.transformDirection(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=At(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=At(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=At(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=At(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=At(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array),i=jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},yr=class extends vr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},br=class extends vr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},xr=class extends vr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Sr=new er,Cr=new V,wr=new V,Tr=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Sr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cr.subVectors(e,this.center);let t=Cr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Cr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cr.copy(e.center).add(wr)),this.expandByPoint(Cr.copy(e.center).sub(wr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Er=0,Dr=new U,Or=new kn,kr=new V,Ar=new er,jr=new er,Mr=new V,Nr=class e extends at{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Er++}),this.uuid=ut(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ye(e)?br:yr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new H().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Dr.makeRotationFromQuaternion(e),this.applyMatrix4(Dr),this}rotateX(e){return Dr.makeRotationX(e),this.applyMatrix4(Dr),this}rotateY(e){return Dr.makeRotationY(e),this.applyMatrix4(Dr),this}rotateZ(e){return Dr.makeRotationZ(e),this.applyMatrix4(Dr),this}translate(e,t,n){return Dr.makeTranslation(e,t,n),this.applyMatrix4(Dr),this}scale(e,t,n){return Dr.makeScale(e,t,n),this.applyMatrix4(Dr),this}lookAt(e){return Or.lookAt(e),Or.updateMatrix(),this.applyMatrix4(Or.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new xr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&R(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new er);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ar.setFromBufferAttribute(n),this.morphTargetsRelative?(Mr.addVectors(this.boundingBox.min,Ar.min),this.boundingBox.expandByPoint(Mr),Mr.addVectors(this.boundingBox.max,Ar.max),this.boundingBox.expandByPoint(Mr)):(this.boundingBox.expandByPoint(Ar.min),this.boundingBox.expandByPoint(Ar.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&z(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new V,1/0);else if(e){let n=this.boundingSphere.center;if(Ar.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];jr.setFromBufferAttribute(n),this.morphTargetsRelative?(Mr.addVectors(Ar.min,jr.min),Ar.expandByPoint(Mr),Mr.addVectors(Ar.max,jr.max),Ar.expandByPoint(Mr)):(Ar.expandByPoint(jr.min),Ar.expandByPoint(jr.max))}Ar.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Mr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Mr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Mr.fromBufferAttribute(a,t),o&&(kr.fromBufferAttribute(e,t),Mr.add(kr)),r=Math.max(r,n.distanceToSquared(Mr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&z(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){z(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new vr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new V,s[e]=new V;let c=new V,l=new V,u=new V,d=new B,f=new B,p=new B,m=new V,h=new V;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new V,y=new V,b=new V,x=new V;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new vr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new V,i=new V,a=new V,o=new V,s=new V,c=new V,l=new V,u=new V;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mr.fromBufferAttribute(e,t),Mr.normalize(),e.setXYZ(t,Mr.x,Mr.y,Mr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new vr(a,r,i)}if(this.index===null)return R(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Pr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=qe,this.updateRanges=[],this.version=0,this.uuid=ut()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ut()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ut()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Fr=new V,Ir=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Fr.fromBufferAttribute(this,t),Fr.applyMatrix4(e),this.setXYZ(t,Fr.x,Fr.y,Fr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Fr.fromBufferAttribute(this,t),Fr.applyNormalMatrix(e),this.setXYZ(t,Fr.x,Fr.y,Fr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Fr.fromBufferAttribute(this,t),Fr.transformDirection(e),this.setXYZ(t,Fr.x,Fr.y,Fr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=At(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=jt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=At(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=At(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=At(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=At(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array),i=jt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){et(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new vr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){et(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Lr=new V,Rr=new V,zr=new H,Br=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Lr.subVectors(n,t).cross(Rr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Lr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||zr.getNormalMatrix(e),r=this.coplanarPoint(Lr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Vr=0,Hr=class extends at{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vr++}),this.uuid=ut(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new W(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ke,this.stencilZFail=Ke,this.stencilZPass=Ke,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){R(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new W().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Br().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new B().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new B().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Ur=class extends Hr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new W(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Wr,Gr=new V,Kr=new V,qr=new V,Jr=new B,Yr=new B,Xr=new U,Zr=new V,Qr=new V,$r=new V,ei=new B,ti=new B,ni=new B,ri=class extends kn{constructor(e=new Ur){if(super(),this.isSprite=!0,this.type=`Sprite`,Wr===void 0){Wr=new Nr;let e=new Pr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Wr.setIndex([0,1,2,0,2,3]),Wr.setAttribute(`position`,new Ir(e,3,0,!1)),Wr.setAttribute(`uv`,new Ir(e,2,3,!1))}this.geometry=Wr,this.material=e,this.center=new B(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&z(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Kr.setFromMatrixScale(this.matrixWorld),Xr.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Kr.multiplyScalar(-qr.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;ii(Zr.set(-.5,-.5,0),qr,a,Kr,r,i),ii(Qr.set(.5,-.5,0),qr,a,Kr,r,i),ii($r.set(.5,.5,0),qr,a,Kr,r,i),ei.set(0,0),ti.set(1,0),ni.set(1,1);let o=e.ray.intersectTriangle(Zr,Qr,$r,!1,Gr);if(o===null&&(ii(Qr.set(-.5,.5,0),qr,a,Kr,r,i),ti.set(0,1),o=e.ray.intersectTriangle(Zr,$r,Qr,!1,Gr),o===null))return;let s=e.ray.origin.distanceTo(Gr);s<e.near||s>e.far||t.push({distance:s,point:Gr.clone(),uv:$n.getInterpolation(Gr,Zr,Qr,$r,ei,ti,ni,new B),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ii(e,t,n,r,i,a){Jr.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Yr.copy(Jr):(Yr.x=a*Jr.x-i*Jr.y,Yr.y=i*Jr.x+a*Jr.y),e.copy(t),e.x+=Yr.x,e.y+=Yr.y,e.applyMatrix4(Xr)}var ai=new V,oi=new V,si=new V,ci=new V,li=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){oi.copy(e).add(t).multiplyScalar(.5),si.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(oi);let i=e.distanceTo(t)*.5,a=-this.direction.dot(si),o=ci.dot(this.direction),s=-ci.dot(si),c=ci.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(oi).addScaledVector(si,d),f}intersectSphere(e,t){if(e.radius<0)return null;ai.subVectors(e.center,this.origin);let n=ai.dot(this.direction),r=ai.dot(ai)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,ee,te,ne;if(y>=b&&y>=x?(w=s,D=u,A=p,ne=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,ee=_,te=v):(S=l,C=c,T=f,E=d,O=h,k=m,ee=v,te=_)):b>=x?(w=c,D=d,A=m,ne=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,ee=v,te=g):(S=s,C=l,T=u,E=f,O=p,k=h,ee=g,te=v)):(w=l,D=f,A=h,ne=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,ee=g,te=_):(S=c,C=s,T=d,E=u,O=m,k=p,ee=_,te=g)),w===0)return null;let j=S/w,re=C/w,M=1/w,ie=T-j*D,N=E-re*D,ae=O-j*A,oe=k-re*A,se=ee-j*ne,ce=te-re*ne,le=se*oe-ce*ae,P=ie*ce-N*se,ue=ae*N-oe*ie;if(r){if(le<0||P<0||ue<0)return null}else if((le<0||P<0||ue<0)&&(le>0||P>0||ue>0))return null;let de=le+P+ue;if(de===0)return null;let fe=M*(le*D+P*A+ue*ne);return(de>0?fe<0:fe>0)?null:this.at(fe/de,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ui=class extends Hr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new W(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},di=new U,fi=new li,pi=new Tr,mi=new V,hi=new V,gi=new V,_i=new V,vi=new V,yi=new V,bi=new V,xi=new V,G=class extends kn{constructor(e=new Nr,t=new ui){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){yi.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(vi.fromBufferAttribute(s,e),a?yi.addScaledVector(vi,r):yi.addScaledVector(vi.sub(t),r))}t.add(yi)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pi.copy(n.boundingSphere),pi.applyMatrix4(i),fi.copy(e.ray).recast(e.near),!(pi.containsPoint(fi.origin)===!1&&(fi.intersectSphere(pi,mi)===null||fi.origin.distanceToSquared(mi)>(e.far-e.near)**2))&&(di.copy(i).invert(),fi.copy(e.ray).applyMatrix4(di),(n.boundingBox===null||fi.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,fi)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Ci(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Ci(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Ci(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Ci(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Si(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;xi.copy(s),xi.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(xi);return l<n.near||l>n.far?null:{distance:l,point:xi.clone(),object:e}}function Ci(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,hi),e.getVertexPosition(c,gi),e.getVertexPosition(l,_i);let u=Si(e,t,n,r,hi,gi,_i,bi);if(u){let e=new V;$n.getBarycoord(bi,hi,gi,_i,e),i&&(u.uv=$n.getInterpolatedAttribute(i,s,c,l,e,new B)),a&&(u.uv1=$n.getInterpolatedAttribute(a,s,c,l,e,new B)),o&&(u.normal=$n.getInterpolatedAttribute(o,s,c,l,e,new V),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new V,materialIndex:0};$n.getNormal(hi,gi,_i,t.normal),u.face=t,u.barycoord=e}return u}var wi=new Zt,Ti=new Zt,Ei=new Zt,Di=new Zt,Oi=new U,ki=new V,Ai=new Tr,ji=new U,Mi=new li,Ni=class extends G{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=n,this.bindMatrix=new U,this.bindMatrixInverse=new U,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new er),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,ki),this.boundingBox.expandByPoint(ki)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Tr),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,ki),this.boundingSphere.expandByPoint(ki)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ai.copy(this.boundingSphere),Ai.applyMatrix4(r),e.ray.intersectsSphere(Ai)!==!1&&(ji.copy(r).invert(),Mi.copy(e.ray).applyMatrix4(ji),(this.boundingBox===null||Mi.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,Mi)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Zt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():R(`SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Ti.fromBufferAttribute(r.attributes.skinIndex,e),Ei.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(wi.copy(t),t.set(0,0,0,0)):(wi.set(...t,1),t.set(0,0,0)),wi.applyMatrix4(this.bindMatrix);for(let e=0;e<4;e++){let r=Ei.getComponent(e);if(r!==0){let i=Ti.getComponent(e);Oi.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(Di.copy(wi).applyMatrix4(Oi),r)}}return t.isVector4&&(t.w=wi.w),t.applyMatrix4(this.bindMatrixInverse)}},Pi=class extends kn{constructor(){super(),this.isBone=!0,this.type=`Bone`}},Fi=class extends Xt{constructor(e=null,t=1,n=1,r,i,a,s,c,l=o,u=o,d,f){super(null,a,s,c,l,u,r,i,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ii=new U,Li=new U,Ri=class e{constructor(e=[],t=[]){this.uuid=ut(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){R(`Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new U)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new U;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:Li;Ii.multiplyMatrices(i,t[r]),Ii.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Fi(t,e,e,D,v);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(R(`Skeleton: No bone found with UUID:`,r),i=new Pi),this.bones.push(i),this.boneInverses.push(new U().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},zi=class extends vr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Bi=new U,Vi=new U,Hi=[],Ui=new er,Wi=new U,Gi=new G,Ki=new Tr,qi=class extends G{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Wi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new er),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Bi),Ui.copy(e.boundingBox).applyMatrix4(Bi),this.boundingBox.union(Ui)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Bi),Ki.copy(e.boundingSphere).applyMatrix4(Bi),this.boundingSphere.union(Ki)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Gi.geometry=this.geometry,Gi.material=this.material,Gi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ki.copy(this.boundingSphere),Ki.applyMatrix4(n),e.ray.intersectsSphere(Ki)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Bi),Vi.multiplyMatrices(n,Bi),Gi.matrixWorld=Vi,Gi.raycast(e,Hi);for(let e=0,n=Hi.length;e<n;e++){let n=Hi[e];n.instanceId=i,n.object=this,t.push(n)}Hi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new zi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fi(new Float32Array(r*this.count),r,this.count,A,v));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ji=new Tr,Yi=new B(.5,.5),Xi=new V,Zi=class{constructor(e=new Br,t=new Br,n=new Br,r=new Br,i=new Br,a=new Br){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Je,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476+Yi.distanceTo(e.center),Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Xi.x=r.normal.x>0?e.max.x:e.min.x,Xi.y=r.normal.y>0?e.max.y:e.min.y,Xi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Qi=class extends Hr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new W(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},$i=new V,ea=new V,ta=new U,na=new li,ra=new Tr,ia=new V,aa=new V,oa=class extends kn{constructor(e=new Nr,t=new Qi){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)$i.fromBufferAttribute(t,e-1),ea.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=$i.distanceTo(ea);e.setAttribute(`lineDistance`,new xr(n,1))}else R(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ra.copy(n.boundingSphere),ra.applyMatrix4(r),ra.radius+=i,e.ray.intersectsSphere(ra)===!1)return;ta.copy(r).invert(),na.copy(e.ray).applyMatrix4(ta);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=sa(this,e,na,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=sa(this,e,na,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=sa(this,e,na,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=sa(this,e,na,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function sa(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if($i.fromBufferAttribute(s,i),ea.fromBufferAttribute(s,a),n.distanceSqToSegment($i,ea,ia,aa)>r)return;ia.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(ia);if(!(c<t.near||c>t.far))return{distance:c,point:aa.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var ca=new V,la=new V,ua=class extends oa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)ca.fromBufferAttribute(t,e),la.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+ca.distanceTo(la);e.setAttribute(`lineDistance`,new xr(n,1))}else R(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},da=class extends oa{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type=`LineLoop`}},fa=class extends Hr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new W(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},pa=new U,ma=new li,ha=new Tr,ga=new V,_a=class extends kn{constructor(e=new Nr,t=new fa){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(r),ha.radius+=i,e.ray.intersectsSphere(ha)===!1)return;pa.copy(r).invert(),ma.copy(e.ray).applyMatrix4(pa);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);ga.fromBufferAttribute(l,n),va(ga,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)ga.fromBufferAttribute(l,a),va(ga,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function va(e,t,n,r,i,a,o){let s=ma.distanceSqToPoint(e);if(s<n){let n=new V;ma.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ya=class extends Xt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ba=class extends Xt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},xa=class extends Xt{constructor(e,t,n=_,r,i,a,s=o,c=o,l,u=O,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,i,a,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Sa=class extends xa{constructor(e,t=_,n=301,r,i,a=o,s=o,c,l=O){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,i,a,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ca=class extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},wa=class e extends Nr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new xr(c,3)),this.setAttribute(`normal`,new xr(l,3)),this.setAttribute(`uv`,new xr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new V;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ta=class e extends Nr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new V,l=new B;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new xr(a,3)),this.setAttribute(`normal`,new xr(o,3)),this.setAttribute(`uv`,new xr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ea=class e extends Nr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new xr(u,3)),this.setAttribute(`normal`,new xr(d,3)),this.setAttribute(`uv`,new xr(f,2));function _(){let a=new V,_=new V,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new B,m=new V,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Da=class e extends Ea{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Oa=class e extends Nr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new xr(i,3)),this.setAttribute(`normal`,new xr(i.slice(),3)),this.setAttribute(`uv`,new xr(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new V,r=new V,i=new V;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new V;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new V;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new V,t=new V,n=new V,r=new V,o=new B,s=new B,c=new B;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},ka=class e extends Oa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Aa=new V,ja=new V,Ma=new V,Na=new $n,Pa=class extends Nr{constructor(e=null,t=1){if(super(),this.type=`EdgesGeometry`,this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=1e4,r=Math.cos(ct*t),i=e.getIndex(),a=e.getAttribute(`position`),o=i?i.count:a.count,s=[0,0,0],c=[`a`,`b`,`c`],l=[,,,],u={},d=[];for(let e=0;e<o;e+=3){i?(s[0]=i.getX(e),s[1]=i.getX(e+1),s[2]=i.getX(e+2)):(s[0]=e,s[1]=e+1,s[2]=e+2);let{a:t,b:o,c:f}=Na;if(t.fromBufferAttribute(a,s[0]),o.fromBufferAttribute(a,s[1]),f.fromBufferAttribute(a,s[2]),Na.getNormal(Ma),l[0]=`${Math.round(t.x*n)},${Math.round(t.y*n)},${Math.round(t.z*n)}`,l[1]=`${Math.round(o.x*n)},${Math.round(o.y*n)},${Math.round(o.z*n)}`,l[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,l[0]!==l[1]&&l[1]!==l[2]&&l[2]!==l[0])for(let e=0;e<3;e++){let t=(e+1)%3,n=l[e],i=l[t],a=Na[c[e]],o=Na[c[t]],f=`${n}_${i}`,p=`${i}_${n}`;p in u&&u[p]?(Ma.dot(u[p].normal)<=r&&(d.push(a.x,a.y,a.z),d.push(o.x,o.y,o.z)),u[p]=null):f in u||(u[f]={index0:s[e],index1:s[t],normal:Ma.clone()})}}for(let e in u)if(u[e]){let{index0:t,index1:n}=u[e];Aa.fromBufferAttribute(a,t),ja.fromBufferAttribute(a,n),d.push(Aa.x,Aa.y,Aa.z),d.push(ja.x,ja.y,ja.z)}this.setAttribute(`position`,new xr(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Fa=class e extends Oa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Ia=class e extends Nr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new xr(p,3)),this.setAttribute(`normal`,new xr(m,3)),this.setAttribute(`uv`,new xr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},La=class e extends Nr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new V,d=new V,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new xr(p,3)),this.setAttribute(`normal`,new xr(m,3)),this.setAttribute(`uv`,new xr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Ra(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Ba(i))i.isRenderTargetTexture?(R(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Ba(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function za(e){let t={};for(let n=0;n<e.length;n++){let r=Ra(e[n]);for(let e in r)t[e]=r[e]}return t}function Ba(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Va(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ha(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Bt.workingColorSpace}var Ua={clone:Ra,merge:za},Wa=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ga=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ka=class extends Hr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wa,this.fragmentShader=Ga,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ra(e.uniforms),this.uniformsGroups=Va(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new W().setHex(r.value);break;case`v2`:this.uniforms[n].value=new B().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new V().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Zt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new H().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new U().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},qa=class extends Ka{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Ja=class extends Hr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new W(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new W(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ya=class extends Ja{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new B(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new W(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new W(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new W(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Xa=class extends Hr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Ve,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Za=class extends Hr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Qa(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function $a(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function eo(e){function t(t,n){return e[t]-e[n]}let n=e.length,r=Array(n);for(let e=0;e!==n;++e)r[e]=e;return r.sort(t),r}function to(e,t,n){let r=e.length,i=new e.constructor(r);for(let a=0,o=0;o!==r;++a){let r=n[a]*t;for(let n=0;n!==t;++n)i[o++]=e[r+n]}return i}function no(e,t,n,r){let i=1,a=e[0];for(;a!==void 0&&a[r]===void 0;)a=e[i++];if(a===void 0)return;let o=a[r];if(o!==void 0){if(Array.isArray(o))do o=a[r],o!==void 0&&(t.push(a.time),n.push(...o)),a=e[i++];while(a!==void 0);else if(o.toArray!==void 0)do o=a[r],o!==void 0&&(t.push(a.time),o.toArray(n,n.length)),a=e[i++];while(a!==void 0);else do o=a[r],o!==void 0&&(t.push(a.time),n.push(o)),a=e[i++];while(a!==void 0)}}var ro=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},io=class extends ro{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:L,endingEnd:L}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Re:i=e,o=2*t-n;break;case ze:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Re:a=e,s=2*n-t;break;case ze:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},ao=class extends ro{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},oo=class extends ro{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},so=class extends ro{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=uo(n,t,g,y,r);i[p]=co(x,o,_,b,m)}return i}};function co(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function lo(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function uo(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=co(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=lo(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var fo=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Qa(t,this.TimeBufferType),this.values=Qa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qa(e.times,Array),values:Qa(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),$a(e.settings)&&(n.settings={inTangents:Qa(e.settings.inTangents,Array),outTangents:Qa(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new oo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ao(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new io(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new so(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Fe:t=this.InterpolantFactoryMethodDiscrete;break;case Ie:t=this.InterpolantFactoryMethodLinear;break;case I:t=this.InterpolantFactoryMethodSmooth;break;case Le:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return R(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fe;case this.InterpolantFactoryMethodLinear:return Ie;case this.InterpolantFactoryMethodSmooth:return I;case this.InterpolantFactoryMethodBezier:return Le}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;$a(this.settings)&&(po(this.settings.inTangents,e),po(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(z(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(z(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){z(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){z(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Xe(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){z(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===I,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,$a(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function po(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}fo.prototype.ValueTypeName=``,fo.prototype.TimeBufferType=Float32Array,fo.prototype.ValueBufferType=Float32Array,fo.prototype.DefaultInterpolation=Ie;var mo=class extends fo{constructor(e,t,n){super(e,t,n)}};mo.prototype.ValueTypeName=`bool`,mo.prototype.ValueBufferType=Array,mo.prototype.DefaultInterpolation=Fe,mo.prototype.InterpolantFactoryMethodLinear=void 0,mo.prototype.InterpolantFactoryMethodSmooth=void 0;var ho=class extends fo{constructor(e,t,n,r){super(e,t,n,r)}};ho.prototype.ValueTypeName=`color`;var go=class extends fo{constructor(e,t,n,r){super(e,t,n,r)}};go.prototype.ValueTypeName=`number`;var _o=class extends ro{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Nt.slerpFlat(i,0,a,c-o,a,c,s);return i}},vo=class extends fo{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new _o(this.times,this.values,this.getValueSize(),e)}};vo.prototype.ValueTypeName=`quaternion`,vo.prototype.InterpolantFactoryMethodSmooth=void 0;var yo=class extends fo{constructor(e,t,n){super(e,t,n)}};yo.prototype.ValueTypeName=`string`,yo.prototype.ValueBufferType=Array,yo.prototype.DefaultInterpolation=Fe,yo.prototype.InterpolantFactoryMethodLinear=void 0,yo.prototype.InterpolantFactoryMethodSmooth=void 0;var bo=class extends fo{constructor(e,t,n,r){super(e,t,n,r)}};bo.prototype.ValueTypeName=`vector`;var xo=class{constructor(e=``,t=-1,n=[],r=Be){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=ut(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let e=0,i=n.length;e!==i;++e)t.push(Co(n[e]).scale(r));let i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i.userData=JSON.parse(e.userData||`{}`),i}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let e=0,r=n.length;e!==r;++e)t.push(fo.toJSON(n[e]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let i=t.length,a=[];for(let e=0;e<i;e++){let o=[],s=[];o.push((e+i-1)%i,e,(e+1)%i),s.push(0,1,0);let c=eo(o);o=to(o,1,c),s=to(s,1,c),!r&&o[0]===0&&(o.push(i),s.push(s[0])),a.push(new go(`.morphTargetInfluences[`+t[e].name+`]`,o,s).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let t=e;n=t.geometry&&t.geometry.animations||t.animations}for(let e=0;e<n.length;e++)if(n[e].name===t)return n[e];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},i=/^([\w-]*?)([\d]+)$/;for(let t=0,n=e.length;t<n;t++){let n=e[t],a=n.name.match(i);if(a&&a.length>1){let e=a[1],t=r[e];t||(r[e]=t=[]),t.push(n)}}let a=[];for(let e in r)a.push(this.CreateFromMorphTargetSequence(e,r[e],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let e=this.tracks[n];t=Math.max(t,e.times[e.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e&&=this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function So(e){switch(e.toLowerCase()){case`scalar`:case`double`:case`float`:case`number`:case`integer`:return go;case`vector`:case`vector2`:case`vector3`:case`vector4`:return bo;case`color`:return ho;case`quaternion`:return vo;case`bool`:case`boolean`:return mo;case`string`:return yo}throw Error(`THREE.KeyframeTrack: Unsupported typeName: `+e)}function Co(e){if(e.type===void 0)throw Error(`THREE.KeyframeTrack: track type undefined, can not parse`);let t=So(e.type);if(e.times===void 0){let t=[],n=[];no(e.keys,t,n,`value`),e.times=t,e.values=n}let n;return n=t.parse===void 0?new t(e.name,e.times,e.values,e.interpolation):t.parse(e),$a(e.settings)&&(n.settings={inTangents:Qa(e.settings.inTangents,Float32Array),outTangents:Qa(e.settings.outTangents,Float32Array)}),n}var wo={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(To(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!To(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function To(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var Eo=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},Do=class{constructor(e){this.manager=e===void 0?Eo:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Do.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var Oo={},ko=class extends Error{constructor(e,t){super(e),this.response=t}},Ao=class extends Do{constructor(e){super(e),this.mimeType=``,this.responseType=``,this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=wo.get(`file:${e}`);if(i!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0);return}if(Oo[e]!==void 0){Oo[e].push({onLoad:t,onProgress:n,onError:r});return}Oo[e]=[],Oo[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`,signal:typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,s=this.responseType;fetch(a).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&R(`FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||t.body===void 0||t.body.getReader===void 0)return t;let n=Oo[e],r=t.body.getReader(),i=t.headers.get(`X-File-Size`)||t.headers.get(`Content-Length`),a=i?parseInt(i):0,o=a!==0,s=0,c=new ReadableStream({start(e){t();function t(){r.read().then(({done:r,value:i})=>{if(r)e.close();else{s+=i.byteLength;let r=new ProgressEvent(`progress`,{lengthComputable:o,loaded:s,total:a});for(let e=0,t=n.length;e<t;e++){let t=n[e];t.onProgress&&t.onProgress(r)}e.enqueue(i),t()}},t=>{e.error(t)})}}});return new Response(c)}throw new ko(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(s){case`arraybuffer`:return e.arrayBuffer();case`blob`:return e.blob();case`document`:return e.text().then(e=>new DOMParser().parseFromString(e,o));case`json`:return e.json();default:if(o===``)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(o),n=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(n);return e.arrayBuffer().then(e=>r.decode(e))}}}).then(t=>{wo.add(`file:${e}`,t);let n=Oo[e];delete Oo[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onLoad&&r.onLoad(t)}}).catch(t=>{let n=Oo[e];if(n===void 0)throw this.manager.itemError(e),t;delete Oo[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},jo=new WeakMap,Mo=class extends Do{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=wo.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=jo.get(a);e===void 0&&(e=[],jo.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=Ze(`img`);function s(){l(),t&&t(this);let n=jo.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}jo.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),wo.remove(`image:${e}`);let n=jo.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}jo.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),wo.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},No=class extends Do{constructor(e){super(e)}load(e,t,n,r){let i=new Xt,a=new Mo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},Po=class extends kn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new W(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Fo=class extends Po{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(kn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new W(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Io=new U,Lo=new V,Ro=new V,zo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new B(512,512),this.mapType=f,this.map=null,this.mapPass=null,this.matrix=new U,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zi,this._frameExtents=new B(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Lo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lo),Ro.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ro),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Io.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Io,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Io)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Bo=new V,Vo=new Nt,Ho=new V,Uo=class extends kn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new U,this.projectionMatrix=new U,this.projectionMatrixInverse=new U,this.coordinateSystem=Je,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Bo,Vo,Ho),Ho.x===1&&Ho.y===1&&Ho.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bo,Vo,Ho.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Bo,Vo,Ho),Ho.x===1&&Ho.y===1&&Ho.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bo,Vo,Ho.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Wo=new V,Go=new B,Ko=new B,qo=class extends Uo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=lt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ct*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lt*2*Math.atan(Math.tan(ct*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Wo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wo.x,Wo.y).multiplyScalar(-e/Wo.z),Wo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wo.x,Wo.y).multiplyScalar(-e/Wo.z)}getViewSize(e,t){return this.getViewBounds(e,Go,Ko),t.subVectors(Ko,Go)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ct*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Jo=class extends zo{constructor(){super(new qo(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=lt*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Yo=class extends Po{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(kn.DEFAULT_UP),this.updateMatrix(),this.target=new kn,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new Jo}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Xo=class extends zo{constructor(){super(new qo(90,1,.5,500)),this.isPointLightShadow=!0}},Zo=class extends Po{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Xo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Qo=class extends Uo{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},$o=class extends zo{constructor(){super(new Qo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},es=class extends Po{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(kn.DEFAULT_UP),this.updateMatrix(),this.target=new kn,this.shadow=new $o}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ts=class{static extractUrlBase(e){let t=e.lastIndexOf(`/`);return t===-1?`./`:e.slice(0,t+1)}static resolveURL(e,t){return typeof e!=`string`||e===``?``:(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,`$1`)),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},ns=new WeakMap,rs=class extends Do{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>`u`&&R(`ImageBitmapLoader: createImageBitmap() not supported.`),typeof fetch>`u`&&R(`ImageBitmapLoader: fetch() not supported.`),this.options={premultiplyAlpha:`none`},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=wo.get(`image-bitmap:${e}`);if(a!==void 0){if(i.manager.itemStart(e),a.then){a.then(n=>{ns.has(a)===!0?(r&&r(ns.get(a)),i.manager.itemError(e),i.manager.itemEnd(e)):(t&&t(n),i.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin===`anonymous`?`same-origin`:`include`,o.headers=this.requestHeader,o.signal=typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let s=fetch(e,o).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign({},i.options,{colorSpaceConversion:`none`}))}).then(function(n){return wo.add(`image-bitmap:${e}`,n),t&&t(n),i.manager.itemEnd(e),n}).catch(function(t){r&&r(t),ns.set(s,t),wo.remove(`image-bitmap:${e}`),i.manager.itemError(e),i.manager.itemEnd(e)});wo.add(`image-bitmap:${e}`,s),i.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},is=-90,as=1,os=class extends kn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new qo(is,as,e,t);r.layers=this.layers,this.add(r);let i=new qo(is,as,e,t);i.layers=this.layers,this.add(i);let a=new qo(is,as,e,t);a.layers=this.layers,this.add(a);let o=new qo(is,as,e,t);o.layers=this.layers,this.add(o);let s=new qo(is,as,e,t);s.layers=this.layers,this.add(s);let c=new qo(is,as,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ss=class extends qo{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},cs=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=ls.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function ls(){this._document.hidden===!1&&this.reset()}var us=`\\[\\]\\.:\\/`,ds=RegExp(`[\\[\\]\\.:\\/]`,`g`),fs=`[^\\[\\]\\.:\\/]`,ps=`[^`+us.replace(`\\.`,``)+`]`,ms=`((?:WC+[\\/:])*)`.replace(`WC`,fs),hs=`(WCOD+)?`.replace(`WCOD`,ps),gs=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,fs),_s=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,fs),vs=RegExp(`^`+ms+hs+gs+_s+`$`),ys=[`material`,`materials`,`bones`,`map`],bs=class{constructor(e,t,n){let r=n||xs.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},xs=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(ds,``)}static parseTrackName(e){let t=vs.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);ys.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){R(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){z(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){z(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){z(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){z(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){z(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;z(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xs.Composite=bs,xs.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},xs.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},xs.prototype.GetterByBindingType=[xs.prototype._getValue_direct,xs.prototype._getValue_array,xs.prototype._getValue_arrayElement,xs.prototype._getValue_toArray],xs.prototype.SetterByBindingTypeAndVersioning=[[xs.prototype._setValue_direct,xs.prototype._setValue_direct_setNeedsUpdate,xs.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xs.prototype._setValue_array,xs.prototype._setValue_array_setNeedsUpdate,xs.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xs.prototype._setValue_arrayElement,xs.prototype._setValue_arrayElement_setNeedsUpdate,xs.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xs.prototype._setValue_fromArray,xs.prototype._setValue_fromArray_setNeedsUpdate,xs.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ss=new U,Cs=class{constructor(e,t,n=0,r=1/0){this.ray=new li(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new pn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):z(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Ss.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ss),this}intersectObject(e,t=!0,n=[]){return Ts(e,this,n,t),n.sort(ws),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Ts(e[r],this,n,t);return n.sort(ws),n}};function ws(e,t){return e.distance-t.distance}function Ts(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Ts(r[e],t,n,!0)}}var Es=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=dt(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var Ds=class extends at{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Os(e,t,n,r){let i=ks(r);switch(n){case T:return e*t;case A:return e*t/i.components*i.byteLength;case ee:return e*t/i.components*i.byteLength;case te:return e*t*2/i.components*i.byteLength;case ne:return e*t*2/i.components*i.byteLength;case E:return e*t*3/i.components*i.byteLength;case D:return e*t*4/i.components*i.byteLength;case j:return e*t*4/i.components*i.byteLength;case re:case M:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ie:case N:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case oe:case ce:return Math.max(e,16)*Math.max(t,8)/4;case ae:case se:return Math.max(e,8)*Math.max(t,8)/2;case le:case P:case de:case fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ue:case pe:case me:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case he:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ge:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case _e:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case be:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case xe:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Se:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Te:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ee:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case De:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Oe:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ke:case Ae:case je:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Me:case Ne:return Math.ceil(e/4)*Math.ceil(t/4)*8;case F:case Pe:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function ks(e){switch(e){case f:case p:return{byteLength:1,components:1};case h:case m:case y:return{byteLength:2,components:1};case b:case x:return{byteLength:2,components:4};case _:case g:case v:return{byteLength:4,components:1};case C:case w:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?R(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function As(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function js(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Ms={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},K={common:{diffuse:{value:new W(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new H}},envmap:{envMap:{value:null},envMapRotation:{value:new H},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new H}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new H}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new H},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new H},normalScale:{value:new B(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new H},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new H}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new H}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new H}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new W(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new W(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0},uvTransform:{value:new H}},sprite:{diffuse:{value:new W(16777215)},opacity:{value:1},center:{value:new B(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}}},Ns={basic:{uniforms:za([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.fog]),vertexShader:Ms.meshbasic_vert,fragmentShader:Ms.meshbasic_frag},lambert:{uniforms:za([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new W(0)},envMapIntensity:{value:1}}]),vertexShader:Ms.meshlambert_vert,fragmentShader:Ms.meshlambert_frag},phong:{uniforms:za([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new W(0)},specular:{value:new W(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ms.meshphong_vert,fragmentShader:Ms.meshphong_frag},standard:{uniforms:za([K.common,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.roughnessmap,K.metalnessmap,K.fog,K.lights,{emissive:{value:new W(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ms.meshphysical_vert,fragmentShader:Ms.meshphysical_frag},toon:{uniforms:za([K.common,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.gradientmap,K.fog,K.lights,{emissive:{value:new W(0)}}]),vertexShader:Ms.meshtoon_vert,fragmentShader:Ms.meshtoon_frag},matcap:{uniforms:za([K.common,K.bumpmap,K.normalmap,K.displacementmap,K.fog,{matcap:{value:null}}]),vertexShader:Ms.meshmatcap_vert,fragmentShader:Ms.meshmatcap_frag},points:{uniforms:za([K.points,K.fog]),vertexShader:Ms.points_vert,fragmentShader:Ms.points_frag},dashed:{uniforms:za([K.common,K.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ms.linedashed_vert,fragmentShader:Ms.linedashed_frag},depth:{uniforms:za([K.common,K.displacementmap]),vertexShader:Ms.depth_vert,fragmentShader:Ms.depth_frag},normal:{uniforms:za([K.common,K.bumpmap,K.normalmap,K.displacementmap,{opacity:{value:1}}]),vertexShader:Ms.meshnormal_vert,fragmentShader:Ms.meshnormal_frag},sprite:{uniforms:za([K.sprite,K.fog]),vertexShader:Ms.sprite_vert,fragmentShader:Ms.sprite_frag},background:{uniforms:{uvTransform:{value:new H},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ms.background_vert,fragmentShader:Ms.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new H}},vertexShader:Ms.backgroundCube_vert,fragmentShader:Ms.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ms.cube_vert,fragmentShader:Ms.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ms.equirect_vert,fragmentShader:Ms.equirect_frag},distance:{uniforms:za([K.common,K.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ms.distance_vert,fragmentShader:Ms.distance_frag},shadow:{uniforms:za([K.lights,K.fog,{color:{value:new W(0)},opacity:{value:1}}]),vertexShader:Ms.shadow_vert,fragmentShader:Ms.shadow_frag}};Ns.physical={uniforms:za([Ns.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new H},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new H},clearcoatNormalScale:{value:new B(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new H},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new H},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new H},sheen:{value:0},sheenColor:{value:new W(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new H},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new H},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new H},transmissionSamplerSize:{value:new B},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new H},attenuationDistance:{value:0},attenuationColor:{value:new W(0)},specularColor:{value:new W(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new H},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new H},anisotropyVector:{value:new B},anisotropyMap:{value:null},anisotropyMapTransform:{value:new H}}]),vertexShader:Ms.meshphysical_vert,fragmentShader:Ms.meshphysical_frag};var Ps={r:0,b:0,g:0},Fs=new U,Is=new H;Is.set(-1,0,0,0,1,0,0,0,1);function Ls(e,t,n,r,i,a){let o=new W(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new G(new wa(1,1,1),new Ka({name:`BackgroundCubeMaterial`,uniforms:Ra(Ns.backgroundCube.uniforms),vertexShader:Ns.backgroundCube.vertexShader,fragmentShader:Ns.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Fs.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Is),l.material.toneMapped=Bt.getTransfer(i.colorSpace)!==Ge,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new G(new Ia(2,2),new Ka({name:`BackgroundMaterial`,uniforms:Ra(Ns.background.uniforms),vertexShader:Ns.background.vertexShader,fragmentShader:Ns.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Bt.getTransfer(i.colorSpace)!==Ge,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Ps,Ha(e)),n.buffers.color.setClear(Ps.r,Ps.g,Ps.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Rs(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function zs(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Bs(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(R(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&R(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Vs(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Br,s=new H,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Hs=4,Us=6,Ws=20,Gs=256,Ks=new Qo,qs=new W,Js=null,Ys=0,Xs=0,Zs=!1,Qs=new V,$s=new V,ec=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Qs}=i;Js=this._renderer.getRenderTarget(),Ys=this._renderer.getActiveCubeFace(),Xs=this._renderer.getActiveMipmapLevel(),Zs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Js,Ys,Xs),this._renderer.xr.enabled=Zs,e.scissorTest=!1,rc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Js=this._renderer.getRenderTarget(),Ys=this._renderer.getActiveCubeFace(),Xs=this._renderer.getActiveMipmapLevel(),Zs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:l,minFilter:l,generateMipmaps:!1,type:y,format:D,colorSpace:Ue,depthBuffer:!1},r=nc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nc(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=tc(r)),this._blurMaterial=ac(r,e,t),this._ggxMaterial=ic(r,e,t)}return r}_compileMaterial(e){let t=new G(new Nr,e);this._renderer.compile(t,Ks)}_sceneToCubeUV(e,t,n,r,i){let a=new qo(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(qs),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new G(new wa,new ui({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(qs),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;rc(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=sc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oc());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;rc(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Ks)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Hs?n-d+Hs:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,rc(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Ks),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,rc(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Ks)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];rc(t,3*l*(r>this._lodMax-Hs?r-this._lodMax+Hs:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Ks)}};function tc(e){let t=[],n=[],r=e,i=e-Hs+1+Us;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?$s.set(1,r,n):e===1?$s.set(-n,1,-r):e===2?$s.set(-n,r,1):e===3?$s.set(-1,r,-n):e===4?$s.set(-n,-1,r):$s.set(n,r,-1),$s.toArray(l,(e*6+t)*3)}}let u=new Nr;u.setAttribute(`position`,new vr(c,3)),u.setAttribute(`outputDirection`,new vr(l,3)),n.push(new G(u,null)),r>Hs&&r--}return{lodMeshes:n,sizeLods:t}}function nc(e,t,n){let r=new $t(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function rc(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function ic(e,t,n){return new Ka({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Gs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ac(e,t,n){return new Ka({name:`SphericalGaussianBlur`,defines:{SAMPLES:Ws,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:cc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function oc(){return new Ka({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function sc(){return new Ka({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function cc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var lc=class extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ya(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new wa(5,5,5),i=new Ka({name:`CubemapFromEquirect`,uniforms:Ra(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new G(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=l),new os(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function uc(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new lc(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new ec(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new ec(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function dc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&nt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function fc(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?br:yr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function pc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function mc(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:z(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function hc(e,t,n){let r=new WeakMap,i=new Zt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new en(h,p,m,u);g.type=v,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new B(p,m)},r.set(o,d);function y(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function gc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var _c={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function vc(e,t,n,r,i,a){let o=new $t(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Nr;l.setAttribute(`position`,new xr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new xr([0,2,0,0,2,0],2));let u=new qa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new G(l,u),f=new Qo(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,b=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new $t(t,n,{type:y,depthBuffer:!1,stencilBuffer:!1}),c=new $t(t,n,{type:y,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Bt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=_c[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var yc=new Xt,bc=new xa(1,1),xc=new en,Sc=new tn,Cc=new ya,wc=[],Tc=[],Ec=new Float32Array(16),Dc=new Float32Array(9),Oc=new Float32Array(4);function kc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=wc[i];if(a===void 0&&(a=new Float32Array(i),wc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Ac(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function jc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Mc(e,t){let n=Tc[t];n===void 0&&(n=new Int32Array(t),Tc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Nc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Pc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ac(n,t))return;e.uniform2fv(this.addr,t),jc(n,t)}}function Fc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ac(n,t))return;e.uniform3fv(this.addr,t),jc(n,t)}}function Ic(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ac(n,t))return;e.uniform4fv(this.addr,t),jc(n,t)}}function Lc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ac(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),jc(n,t)}else{if(Ac(n,r))return;Oc.set(r),e.uniformMatrix2fv(this.addr,!1,Oc),jc(n,r)}}function Rc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ac(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),jc(n,t)}else{if(Ac(n,r))return;Dc.set(r),e.uniformMatrix3fv(this.addr,!1,Dc),jc(n,r)}}function zc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ac(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),jc(n,t)}else{if(Ac(n,r))return;Ec.set(r),e.uniformMatrix4fv(this.addr,!1,Ec),jc(n,r)}}function Bc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Vc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ac(n,t))return;e.uniform2iv(this.addr,t),jc(n,t)}}function Hc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ac(n,t))return;e.uniform3iv(this.addr,t),jc(n,t)}}function Uc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ac(n,t))return;e.uniform4iv(this.addr,t),jc(n,t)}}function Wc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Gc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ac(n,t))return;e.uniform2uiv(this.addr,t),jc(n,t)}}function Kc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ac(n,t))return;e.uniform3uiv(this.addr,t),jc(n,t)}}function qc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ac(n,t))return;e.uniform4uiv(this.addr,t),jc(n,t)}}function Jc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(bc.compareFunction=n.isReversedDepthBuffer()?518:515,a=bc):a=yc,n.setTexture2D(t||a,i)}function Yc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Sc,i)}function Xc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Cc,i)}function Zc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||xc,i)}function Qc(e){switch(e){case 5126:return Nc;case 35664:return Pc;case 35665:return Fc;case 35666:return Ic;case 35674:return Lc;case 35675:return Rc;case 35676:return zc;case 5124:case 35670:return Bc;case 35667:case 35671:return Vc;case 35668:case 35672:return Hc;case 35669:case 35673:return Uc;case 5125:return Wc;case 36294:return Gc;case 36295:return Kc;case 36296:return qc;case 35678:case 36198:case 36298:case 36306:case 35682:return Jc;case 35679:case 36299:case 36307:return Yc;case 35680:case 36300:case 36308:case 36293:return Xc;case 36289:case 36303:case 36311:case 36292:return Zc}}function $c(e,t){e.uniform1fv(this.addr,t)}function el(e,t){let n=kc(t,this.size,2);e.uniform2fv(this.addr,n)}function tl(e,t){let n=kc(t,this.size,3);e.uniform3fv(this.addr,n)}function nl(e,t){let n=kc(t,this.size,4);e.uniform4fv(this.addr,n)}function rl(e,t){let n=kc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function il(e,t){let n=kc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function al(e,t){let n=kc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function ol(e,t){e.uniform1iv(this.addr,t)}function sl(e,t){e.uniform2iv(this.addr,t)}function cl(e,t){e.uniform3iv(this.addr,t)}function ll(e,t){e.uniform4iv(this.addr,t)}function ul(e,t){e.uniform1uiv(this.addr,t)}function dl(e,t){e.uniform2uiv(this.addr,t)}function fl(e,t){e.uniform3uiv(this.addr,t)}function pl(e,t){e.uniform4uiv(this.addr,t)}function ml(e,t,n){let r=this.cache,i=t.length,a=Mc(n,i);Ac(r,a)||(e.uniform1iv(this.addr,a),jc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?bc:yc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function hl(e,t,n){let r=this.cache,i=t.length,a=Mc(n,i);Ac(r,a)||(e.uniform1iv(this.addr,a),jc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Sc,a[e])}function gl(e,t,n){let r=this.cache,i=t.length,a=Mc(n,i);Ac(r,a)||(e.uniform1iv(this.addr,a),jc(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Cc,a[e])}function _l(e,t,n){let r=this.cache,i=t.length,a=Mc(n,i);Ac(r,a)||(e.uniform1iv(this.addr,a),jc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||xc,a[e])}function vl(e){switch(e){case 5126:return $c;case 35664:return el;case 35665:return tl;case 35666:return nl;case 35674:return rl;case 35675:return il;case 35676:return al;case 5124:case 35670:return ol;case 35667:case 35671:return sl;case 35668:case 35672:return cl;case 35669:case 35673:return ll;case 5125:return ul;case 36294:return dl;case 36295:return fl;case 36296:return pl;case 35678:case 36198:case 36298:case 36306:case 35682:return ml;case 35679:case 36299:case 36307:return hl;case 35680:case 36300:case 36308:case 36293:return gl;case 36289:case 36303:case 36311:case 36292:return _l}}var yl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Qc(t.type)}},bl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vl(t.type)}},xl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Sl=/(\w+)(\])?(\[|\.)?/g;function Cl(e,t){e.seq.push(t),e.map[t.id]=t}function wl(e,t,n){let r=e.name,i=r.length;for(Sl.lastIndex=0;;){let a=Sl.exec(r),o=Sl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Cl(n,l===void 0?new yl(s,e,t):new bl(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new xl(s),Cl(n,e)),n=e}}}var Tl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);wl(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function El(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Dl=37297,Ol=0;function kl(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Al=new H;function jl(e){Bt._getMatrix(Al,Bt.workingColorSpace,e);let t=`mat3( ${Al.elements.map(e=>e.toFixed(4))} )`;switch(Bt.getTransfer(e)){case We:return[t,`LinearTransferOETF`];case Ge:return[t,`sRGBTransferOETF`];default:return R(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Ml(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+kl(e.getShaderSource(t),r)}return i}function Nl(e,t){let n=jl(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Pl={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Fl(e,t){let n=Pl[t];return n===void 0?(R(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Il=new V;function Ll(){return Bt.getLuminanceCoefficients(Il),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Il.x.toFixed(4)}, ${Il.y.toFixed(4)}, ${Il.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Rl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Vl).join(`
`)}function zl(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Bl(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Vl(e){return e!==``}function Hl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ul(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Wl=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gl(e){return e.replace(Wl,ql)}var Kl=new Map;function ql(e,t){let n=Ms[t];if(n===void 0){let e=Kl.get(t);if(e!==void 0)n=Ms[e],R(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Gl(n)}var Jl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yl(e){return e.replace(Jl,Xl)}function Xl(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Zl(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Ql={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function $l(e){return Ql[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var eu={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function tu(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:eu[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var nu={302:`ENVMAP_MODE_REFRACTION`};function ru(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:nu[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var iu={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function au(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:iu[e.combine]||`ENVMAP_BLENDING_NONE`}function ou(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function su(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=$l(n),l=tu(n),u=ru(n),d=au(n),f=ou(n),p=Rl(n),m=zl(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Vl).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Vl).join(`
`),_.length>0&&(_+=`
`)):(g=[Zl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Vl).join(`
`),_=[Zl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Ms.tonemapping_pars_fragment,n.toneMapping===0?``:Fl(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Ms.colorspace_pars_fragment,Nl(`linearToOutputTexel`,n.outputColorSpace),Ll(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Vl).join(`
`)),o=Gl(o),o=Hl(o,n),o=Ul(o,n),s=Gl(s),s=Hl(s,n),s=Ul(s,n),o=Yl(o),s=Yl(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=El(i,i.VERTEX_SHADER,y),S=El(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Ml(i,x,`vertex`),n=Ml(i,S,`fragment`);z(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):R(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Tl(i,h),T=Bl(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Dl)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ol++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var cu=0,lu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new uu(e),t.set(e,n)),n}},uu=class{constructor(e){this.id=cu++,this.code=e,this.usedTimes=0}};function du(e){return e===1030||e===37490||e===36285}function fu(e,t,n,r,i,a){let o=new pn,s=new lu,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&R(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Ns[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let ee=e.getRenderTarget(),te=e.state.buffers.depth.getReversed(),ne=h.isInstancedMesh===!0,j=h.isBatchedMesh===!0,re=!!i.map,M=!!i.matcap,ie=!!x,N=!!i.aoMap,ae=!!i.lightMap,oe=!!i.bumpMap&&i.wireframe===!1,se=!!i.normalMap,ce=!!i.displacementMap,le=!!i.emissiveMap,P=!!i.metalnessMap,ue=!!i.roughnessMap,de=i.anisotropy>0,fe=i.clearcoat>0,pe=i.dispersion>0,me=i.retroreflectivity>0,he=i.iridescence>0,ge=i.sheen>0,_e=i.transmission>0,ve=de&&!!i.anisotropyMap,ye=fe&&!!i.clearcoatMap,be=fe&&!!i.clearcoatNormalMap,xe=fe&&!!i.clearcoatRoughnessMap,Se=he&&!!i.iridescenceMap,Ce=he&&!!i.iridescenceThicknessMap,we=ge&&!!i.sheenColorMap,Te=ge&&!!i.sheenRoughnessMap,Ee=!!i.specularMap,De=!!i.specularColorMap,Oe=!!i.specularIntensityMap,ke=_e&&!!i.transmissionMap,Ae=_e&&!!i.thicknessMap,je=!!i.gradientMap,Me=!!i.alphaMap,Ne=i.alphaTest>0,F=!!i.alphaHash,Pe=!!i.extensions,Fe=0;i.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Fe=e.toneMapping);let Ie={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:j,batchingColor:j&&h._colorsTexture!==null,instancing:ne,instancingColor:ne&&h.instanceColor!==null,instancingMorph:ne&&h.morphTexture!==null,outputColorSpace:ee===null?e.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Bt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:re,matcap:M,envMap:ie,envMapMode:ie&&x.mapping,envMapCubeUVHeight:S,aoMap:N,lightMap:ae,bumpMap:oe,normalMap:se,displacementMap:ce,emissiveMap:le,normalMapObjectSpace:se&&i.normalMapType===1,normalMapTangentSpace:se&&i.normalMapType===0,packedNormalMap:se&&i.normalMapType===0&&du(i.normalMap.format),metalnessMap:P,roughnessMap:ue,anisotropy:de,anisotropyMap:ve,clearcoat:fe,clearcoatMap:ye,clearcoatNormalMap:be,clearcoatRoughnessMap:xe,dispersion:pe,retroreflection:me,iridescence:he,iridescenceMap:Se,iridescenceThicknessMap:Ce,sheen:ge,sheenColorMap:we,sheenRoughnessMap:Te,specularMap:Ee,specularColorMap:De,specularIntensityMap:Oe,transmission:_e,transmissionMap:ke,thicknessMap:Ae,gradientMap:je,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Me,alphaTest:Ne,alphaHash:F,combine:i.combine,mapUv:re&&m(i.map.channel),aoMapUv:N&&m(i.aoMap.channel),lightMapUv:ae&&m(i.lightMap.channel),bumpMapUv:oe&&m(i.bumpMap.channel),normalMapUv:se&&m(i.normalMap.channel),displacementMapUv:ce&&m(i.displacementMap.channel),emissiveMapUv:le&&m(i.emissiveMap.channel),metalnessMapUv:P&&m(i.metalnessMap.channel),roughnessMapUv:ue&&m(i.roughnessMap.channel),anisotropyMapUv:ve&&m(i.anisotropyMap.channel),clearcoatMapUv:ye&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:be&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:we&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Te&&m(i.sheenRoughnessMap.channel),specularMapUv:Ee&&m(i.specularMap.channel),specularColorMapUv:De&&m(i.specularColorMap.channel),specularIntensityMapUv:Oe&&m(i.specularIntensityMap.channel),transmissionMapUv:ke&&m(i.transmissionMap.channel),thicknessMapUv:Ae&&m(i.thicknessMap.channel),alphaMapUv:Me&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(se||de),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(re||Me),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&se===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Fe,decodeVideoTexture:re&&i.map.isVideoTexture===!0&&Bt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:le&&i.emissiveMap.isVideoTexture===!0&&Bt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Pe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Pe&&i.extensions.multiDraw===!0||j)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Ns[t];n=Ua.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new su(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function pu(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function mu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function hu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function gu(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||mu),r.length>1&&r.sort(t||hu),i.length>1&&i.sort(t||hu)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function _u(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new gu,e.set(t,[i])):n>=r.length?(i=new gu,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function vu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new V,color:new W};break;case`SpotLight`:n={position:new V,direction:new V,color:new W,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new V,color:new W,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new V,skyColor:new W,groundColor:new W};break;case`RectAreaLight`:n={color:new W,position:new V,halfWidth:new V,halfHeight:new V}}return e[t.id]=n,n}}}function yu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var bu=0;function xu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Su(e){let t=new vu,n=yu(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new V);let i=new V,a=new U,o=new U;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(xu);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=K.LTC_FLOAT_1,r.rectAreaLTC2=K.LTC_FLOAT_2):(r.rectAreaLTC1=K.LTC_HALF_1,r.rectAreaLTC2=K.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=bu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Cu(e){let t=new Su(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function wu(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Cu(e),t.set(n,[a])):r>=i.length?(a=new Cu(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Tu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Eu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Du=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],Ou=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],ku=new U,Au=new V,ju=new V;function Mu(e,t,n){let r=new Zi,i=new B,a=new B,s=new Zt,c=new Xa,u=new Za,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new Ka({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new B},radius:{value:4}},vertexShader:Tu,fragmentShader:Eu}),h=m.clone();h.defines.HORIZONTAL_PASS=1;let g=new Nr;g.setAttribute(`position`,new vr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new G(g,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,c){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(R(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let h=S!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){R(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;i.copy(p.mapSize);let g=p.getFrameExtents();i.multiply(g),a.copy(p.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(a.x=Math.floor(f/g.x),i.x=a.x*g.x,p.mapSize.x=a.x),i.y>f&&(a.y=Math.floor(f/g.y),i.y=a.y*g.y,p.mapSize.y=a.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||h===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){R(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new $t(i.x,i.y,{format:te,type:y,minFilter:l,magFilter:l,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new xa(i.x,i.y,v),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=O,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o}else d.isPointLight?(p.map=new lc(i.x),p.map.depthTexture=new Sa(i.x,_)):(p.map=new $t(i.x,i.y),p.map.depthTexture=new xa(i.x,i.y,_)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=O,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=l,p.map.depthTexture.magFilter=l):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==i.x||p.map.height!==i.y)&&p.map.setSize(i.x,i.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,c);for(let t=0;t<x;t++){let i=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Au.setFromMatrixPosition(d.matrixWorld),e.position.copy(Au),ju.copy(e.position),ju.add(Du[t]),e.up.copy(Ou[t]),e.lookAt(ju),e.updateMatrixWorld(),n.makeTranslation(-Au.x,-Au.y,-Au.z),ku.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(ku,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);s.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),m.viewport(s)}r=p.getFrustum(t),T(n,c,i,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,c),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let a=t.update(b);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,h.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,h.needsUpdate=!0),n.mapPass===null?n.mapPass=new $t(i.x,i.y,{format:te,type:y}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,m,b,null),h.uniforms.shadow_pass.value=n.mapPass.texture,h.uniforms.resolution.value.set(n.map.width,n.map.height),h.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,h,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)T(c[e],i,a,o,s)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Nu(e,t){function n(){let t=!1,n=new Zt,r=null,i=new Zt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?P(e.DEPTH_TEST):ue(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=it[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?P(e.STENCIL_TEST):ue(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,j=0,re=e.getParameter(e.VERSION);re.indexOf(`WebGL`)===-1?re.indexOf(`OpenGL ES`)!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),ne=j>=2):(j=parseFloat(/^WebGL (\d)/.exec(re)[1]),ne=j>=1);let M=null,ie={},N=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),oe=new Zt().fromArray(N),se=new Zt().fromArray(ae);function ce(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let le={};le[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),P(e.DEPTH_TEST),o.setFunc(3),ve(!1),ye(1),P(e.CULL_FACE),ge(0);function P(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ue(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function de(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function fe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function pe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let me={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};me[103]=e.MIN,me[104]=e.MAX;let he={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ge(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(ue(e.BLEND),g=!1);else if(g===!1&&(P(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:z(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:z(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:z(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:z(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(me[n],me[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(he[r],he[i],he[o],he[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function _e(t,n){t.side===2?ue(e.CULL_FACE):P(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ve(r),t.blending===1&&t.transparent===!1?ge(0):ge(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),xe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?P(e.SAMPLE_ALPHA_TO_COVERAGE):ue(e.SAMPLE_ALPHA_TO_COVERAGE)}function ve(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ye(t){t===0?ue(e.CULL_FACE):(P(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function be(t){t!==k&&(ne&&e.lineWidth(t),k=t)}function xe(t,n,r){t?(P(e.POLYGON_OFFSET_FILL),(A!==n||ee!==r)&&(A=n,ee=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ue(e.POLYGON_OFFSET_FILL)}function Se(t){t?P(e.SCISSOR_TEST):ue(e.SCISSOR_TEST)}function Ce(t){t===void 0&&(t=e.TEXTURE0+te-1),M!==t&&(e.activeTexture(t),M=t)}function we(t,n,r){r===void 0&&(r=M===null?e.TEXTURE0+te-1:M);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(M!==r&&(e.activeTexture(r),M=r),e.bindTexture(t,n||le[t]),i.type=t,i.texture=n)}function Te(){let t=ie[M];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ee(){try{e.compressedTexImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function De(){try{e.compressedTexImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Oe(){try{e.texSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function ke(){try{e.texSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Me(){try{e.texStorage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ne(){try{e.texStorage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function F(){try{e.texImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Pe(){try{e.texImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Fe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ie(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function I(t){oe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),oe.copy(t))}function Le(t){se.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),se.copy(t))}function L(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Re(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function ze(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},M=null,ie={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,oe.set(0,0,e.canvas.width,e.canvas.height),se.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:P,disable:ue,bindFramebuffer:de,drawBuffers:fe,useProgram:pe,setBlending:ge,setMaterial:_e,setFlipSided:ve,setCullFace:ye,setLineWidth:be,setPolygonOffset:xe,setScissorTest:Se,activeTexture:Ce,bindTexture:we,unbindTexture:Te,compressedTexImage2D:Ee,compressedTexImage3D:De,texImage2D:F,texImage3D:Pe,pixelStorei:Ie,getParameter:Fe,updateUBOMapping:L,uniformBlockBinding:Re,texStorage2D:Me,texStorage3D:Ne,texSubImage2D:Oe,texSubImage3D:ke,compressedTexSubImage2D:Ae,compressedTexSubImage3D:je,scissor:I,viewport:Le,reset:ze}}function Pu(e,t,n,f,p,m,h){let g=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new B,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Ze(`canvas`)}function T(e,t,n){let r=1,i=Fe(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),R(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&R(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function O(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function A(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];R(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||R(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?We:Bt.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function ee(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,R(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function te(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ne(e){let t=e.target;t.removeEventListener(`dispose`,ne),re(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function j(e){let t=e.target;t.removeEventListener(`dispose`,j),ie(t)}function re(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&M(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function M(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=S.get(r);delete i[n.__cacheKey],h.memory.textures--}function ie(t){let n=f.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),f.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=t.textures;for(let t=0,n=r.length;t<n;t++){let n=f.get(r[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(r[t])}f.remove(t)}let N=0;function ae(){N=0}function oe(){return N}function se(e){N=e}function ce(){let e=N;return e>=p.maxTextures&&R(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),N+=1,e}function le(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function P(t,r){let i=f.get(t);if(t.isVideoTexture&&F(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&i.__version!==t.version){let e=t.image;if(e===null)R(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)R(`WebGLRenderer: Texture marked for update but image is incomplete`);else{be(i,t,r);return}}else t.isExternalTexture&&(i.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,i.__webglTexture,e.TEXTURE0+r)}function ue(t,r){let i=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&i.__version!==t.version?be(i,t,r):(t.isExternalTexture&&(i.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,i.__webglTexture,e.TEXTURE0+r))}function de(t,r){let i=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&i.__version!==t.version?be(i,t,r):n.bindTexture(e.TEXTURE_3D,i.__webglTexture,e.TEXTURE0+r)}function fe(t,r){let i=f.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&i.__version!==t.version?xe(i,t,r):n.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture,e.TEXTURE0+r)}let pe={[r]:e.REPEAT,[i]:e.CLAMP_TO_EDGE,[a]:e.MIRRORED_REPEAT},me={[o]:e.NEAREST,[s]:e.NEAREST_MIPMAP_NEAREST,[c]:e.NEAREST_MIPMAP_LINEAR,[l]:e.LINEAR,[u]:e.LINEAR_MIPMAP_NEAREST,[d]:e.LINEAR_MIPMAP_LINEAR},he={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ge(n,r){if(r.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(r.magFilter===1006||r.magFilter===1007||r.magFilter===1005||r.magFilter===1008||r.minFilter===1006||r.minFilter===1007||r.minFilter===1005||r.minFilter===1008)&&R(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,pe[r.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,pe[r.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,pe[r.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,me[r.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,me[r.minFilter]),r.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,he[r.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(r.magFilter===1003||r.minFilter!==1005&&r.minFilter!==1008||r.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(r.anisotropy>1||f.get(r).__currentAnisotropy){let i=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,i.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,p.getMaxAnisotropy())),f.get(r).__currentAnisotropy=r.anisotropy}}}function _e(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,ne));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=le(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&M(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function ve(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ye(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=ve(n.start,r.width,4),c=ve(t.start,r.width,4);n.start<=i+1&&a===c&&ve(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function be(t,r,i){let a=e.TEXTURE_2D;(r.isDataArrayTexture||r.isCompressedArrayTexture)&&(a=e.TEXTURE_2D_ARRAY),r.isData3DTexture&&(a=e.TEXTURE_3D);let o=_e(t,r),s=r.source;n.bindTexture(a,t.__webglTexture,e.TEXTURE0+i);let c=f.get(s);if(s.version!==c.__version||o===!0){if(n.activeTexture(e.TEXTURE0+i),!(typeof ImageBitmap<`u`&&r.image instanceof ImageBitmap)){let t=Bt.getPrimaries(Bt.workingColorSpace),i=r.colorSpace===``?null:Bt.getPrimaries(r.colorSpace),a=r.colorSpace===``||t===i?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,a)}n.pixelStorei(e.UNPACK_ALIGNMENT,r.unpackAlignment);let t=T(r.image,!1,p.maxTextureSize);t=Pe(r,t);let l=m.convert(r.format,r.colorSpace),u=m.convert(r.type),d=A(r.internalFormat,l,u,r.normalized,r.colorSpace,r.isVideoTexture);ge(a,r);let f,h=r.mipmaps,g=r.isVideoTexture!==!0,_=c.__version===void 0||o===!0,v=s.dataReady,y=te(r,t);if(r.isDepthTexture)d=ee(r.format===k,r.type),_&&(g?n.texStorage2D(e.TEXTURE_2D,1,d,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,d,t.width,t.height,0,l,u,null));else if(r.isDataTexture){if(h.length>0){g&&_&&n.texStorage2D(e.TEXTURE_2D,y,d,h[0].width,h[0].height);for(let t=0,r=h.length;t<r;t++)f=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,l,u,f.data):n.texImage2D(e.TEXTURE_2D,t,d,f.width,f.height,0,l,u,f.data);r.generateMipmaps=!1}else g?(_&&n.texStorage2D(e.TEXTURE_2D,y,d,t.width,t.height),v&&ye(r,t,l,u)):n.texImage2D(e.TEXTURE_2D,0,d,t.width,t.height,0,l,u,t.data)}else if(r.isCompressedTexture){if(r.isCompressedArrayTexture){g&&_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,d,h[0].width,h[0].height,t.depth);for(let i=0,a=h.length;i<a;i++)if(f=h[i],r.format!==1023){if(l!==null){if(g){if(v){if(r.layerUpdates.size>0){let t=Os(f.width,f.height,r.format,r.type);for(let a of r.layerUpdates){let r=f.data.subarray(a*t/f.data.BYTES_PER_ELEMENT,(a+1)*t/f.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,f.width,f.height,1,l,r)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,f.width,f.height,t.depth,l,f.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,d,f.width,f.height,t.depth,0,f.data,0,0)}else R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,f.width,f.height,t.depth,l,u,f.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,d,f.width,f.height,t.depth,0,l,u,f.data);r.layerUpdates.size>0&&r.clearLayerUpdates()}else{g&&_&&n.texStorage2D(e.TEXTURE_2D,y,d,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)f=h[t],r.format===1023?g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,l,u,f.data):n.texImage2D(e.TEXTURE_2D,t,d,f.width,f.height,0,l,u,f.data):l===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,l,f.data):n.compressedTexImage2D(e.TEXTURE_2D,t,d,f.width,f.height,0,f.data)}}else if(r.isDataArrayTexture){if(g){if(_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,d,t.width,t.height,t.depth),v){if(r.layerUpdates.size>0){let i=Os(t.width,t.height,r.format,r.type);for(let a of r.layerUpdates){let r=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,l,u,r)}r.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,l,u,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,d,t.width,t.height,t.depth,0,l,u,t.data)}else if(r.isData3DTexture)g?(_&&n.texStorage3D(e.TEXTURE_3D,y,d,t.width,t.height,t.depth),v&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,l,u,t.data)):n.texImage3D(e.TEXTURE_3D,0,d,t.width,t.height,t.depth,0,l,u,t.data);else if(r.isFramebufferTexture){if(_){if(g)n.texStorage2D(e.TEXTURE_2D,y,d,t.width,t.height);else{let r=t.width,i=t.height;for(let t=0;t<y;t++)n.texImage2D(e.TEXTURE_2D,t,d,r,i,0,l,u,null),r>>=1,i>>=1}}}else if(r.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),b.add(r),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Fe(h[0]);n.texStorage2D(e.TEXTURE_2D,y,d,t.width,t.height)}for(let t=0,r=h.length;t<r;t++)f=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,l,u,f):n.texImage2D(e.TEXTURE_2D,t,d,l,u,f);r.generateMipmaps=!1}else if(g){if(_){let r=Fe(t);n.texStorage2D(e.TEXTURE_2D,y,d,r.width,r.height)}v&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,l,u,t)}else n.texImage2D(e.TEXTURE_2D,0,d,l,u,t);E(r)&&D(a),c.__version=s.version,r.onUpdate&&r.onUpdate(r)}t.__version=r.version}function xe(t,r,i){if(r.image.length!==6)return;let a=_e(t,r),o=r.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+i);let s=f.get(o);if(o.version!==s.__version||a===!0){n.activeTexture(e.TEXTURE0+i);let t=Bt.getPrimaries(Bt.workingColorSpace),c=r.colorSpace===``?null:Bt.getPrimaries(r.colorSpace),l=r.colorSpace===``||t===c?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,r.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,l);let u=r.isCompressedTexture||r.image[0].isCompressedTexture,d=r.image[0]&&r.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!u&&!d?f[e]=T(r.image[e],!0,p.maxCubemapSize):f[e]=d?r.image[e].image:r.image[e],f[e]=Pe(r,f[e]);let h=f[0],g=m.convert(r.format,r.colorSpace),_=m.convert(r.type),v=A(r.internalFormat,g,_,r.normalized,r.colorSpace),y=r.isVideoTexture!==!0,b=s.__version===void 0||a===!0,x=o.dataReady,S=te(r,h);ge(e.TEXTURE_CUBE_MAP,r);let C;if(u){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let i=0;i<C.length;i++){let a=C[i];r.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,0,0,a.width,a.height,g,_,a.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,v,a.width,a.height,0,g,_,a.data):g===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,0,0,a.width,a.height,g,a.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,v,a.width,a.height,0,a.data)}}}else{if(C=r.mipmaps,y&&b){C.length>0&&S++;let t=Fe(f[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(d){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}E(r)&&D(e.TEXTURE_CUBE_MAP),s.__version=o.version,r.onUpdate&&r.onUpdate(r)}t.__version=r.version}function Se(t,r,i,a,o,s){let c=m.convert(i.format,i.colorSpace),l=m.convert(i.type),u=A(i.internalFormat,c,l,i.normalized,i.colorSpace),d=f.get(r),p=f.get(i);if(p.__renderTarget=r,!d.__hasExternalTextures){let t=Math.max(1,r.width>>s),i=Math.max(1,r.height>>s);o===e.TEXTURE_3D||o===e.TEXTURE_2D_ARRAY?n.texImage3D(o,s,u,t,i,r.depth,0,c,l,null):n.texImage2D(o,s,u,t,i,0,c,l,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Ne(r)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,a,o,p.__webglTexture,0,Me(r)):(o===e.TEXTURE_2D||o>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&o<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,a,o,p.__webglTexture,s),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ce(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=ee(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ne(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Me(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Me(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=A(a.internalFormat,o,s,a.normalized,a.colorSpace);Ne(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Me(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Me(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function we(t,r,i){let a=r.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(r.depthTexture&&r.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let o=f.get(r.depthTexture);if(o.__renderTarget=r,(!o.__webglTexture||r.depthTexture.image.width!==r.width||r.depthTexture.image.height!==r.height)&&(r.depthTexture.image.width=r.width,r.depthTexture.image.height=r.height,r.depthTexture.needsUpdate=!0),a){if(o.__webglInit===void 0&&(o.__webglInit=!0,r.depthTexture.addEventListener(`dispose`,ne)),o.__webglTexture===void 0){o.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,o.__webglTexture),ge(e.TEXTURE_CUBE_MAP,r.depthTexture);let t=m.convert(r.depthTexture.format),i=m.convert(r.depthTexture.type),a;r.depthTexture.format===1026?a=e.DEPTH_COMPONENT24:r.depthTexture.format===1027&&(a=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,a,r.width,r.height,0,t,i,null)}}else P(r.depthTexture,0);let s=o.__webglTexture,c=Me(r),l=a?e.TEXTURE_CUBE_MAP_POSITIVE_X+i:e.TEXTURE_2D,u=r.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(r.depthTexture.format===1026)Ne(r)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,u,l,s,0,c):e.framebufferTexture2D(e.FRAMEBUFFER,u,l,s,0);else if(r.depthTexture.format===1027)Ne(r)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,u,l,s,0,c):e.framebufferTexture2D(e.FRAMEBUFFER,u,l,s,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Te(t){let r=f.get(t),i=t.isWebGLCubeRenderTarget===!0;if(r.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(r.__depthDisposeCallback&&r.__depthDisposeCallback(),e){let t=()=>{delete r.__boundDepthTexture,delete r.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),r.__depthDisposeCallback=t}r.__boundDepthTexture=e}if(t.depthTexture&&!r.__autoAllocateDepthBuffer){if(i)for(let e=0;e<6;e++)we(r.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?we(r.__webglFramebuffer[0],t,0):we(r.__webglFramebuffer,t,0)}}else if(i){r.__webglDepthbuffer=[];for(let i=0;i<6;i++)if(n.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer[i]),r.__webglDepthbuffer[i]===void 0)r.__webglDepthbuffer[i]=e.createRenderbuffer(),Ce(r.__webglDepthbuffer[i],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=r.__webglDepthbuffer[i];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let i=t.texture.mipmaps;if(i&&i.length>0?n.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer),r.__webglDepthbuffer===void 0)r.__webglDepthbuffer=e.createRenderbuffer(),Ce(r.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=r.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,i)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ee(t,n,r){let i=f.get(t);n!==void 0&&Se(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&Te(t)}function De(t){let r=t.texture,i=f.get(t),a=f.get(r);t.addEventListener(`dispose`,j);let o=t.textures,s=t.isWebGLCubeRenderTarget===!0,c=o.length>1;if(c||(a.__webglTexture===void 0&&(a.__webglTexture=e.createTexture()),a.__version=r.version,h.memory.textures++),s){i.__webglFramebuffer=[];for(let t=0;t<6;t++)if(r.mipmaps&&r.mipmaps.length>0){i.__webglFramebuffer[t]=[];for(let n=0;n<r.mipmaps.length;n++)i.__webglFramebuffer[t][n]=e.createFramebuffer()}else i.__webglFramebuffer[t]=e.createFramebuffer()}else{if(r.mipmaps&&r.mipmaps.length>0){i.__webglFramebuffer=[];for(let t=0;t<r.mipmaps.length;t++)i.__webglFramebuffer[t]=e.createFramebuffer()}else i.__webglFramebuffer=e.createFramebuffer();if(c)for(let t=0,n=o.length;t<n;t++){let n=f.get(o[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&Ne(t)===!1){i.__webglMultisampledFramebuffer=e.createFramebuffer(),i.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,i.__webglMultisampledFramebuffer);for(let n=0;n<o.length;n++){let r=o[n];i.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,i.__webglColorRenderbuffer[n]);let a=m.convert(r.format,r.colorSpace),s=m.convert(r.type),c=A(r.internalFormat,a,s,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),l=Me(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,i.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(i.__webglDepthRenderbuffer=e.createRenderbuffer(),Ce(i.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(s){n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture),ge(e.TEXTURE_CUBE_MAP,r);for(let n=0;n<6;n++)if(r.mipmaps&&r.mipmaps.length>0)for(let a=0;a<r.mipmaps.length;a++)Se(i.__webglFramebuffer[n][a],t,r,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,a);else Se(i.__webglFramebuffer[n],t,r,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);E(r)&&D(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(c){for(let r=0,a=o.length;r<a;r++){let a=o[r],s=f.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,s.__webglTexture),ge(c,a),Se(i.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+r,c,0),E(a)&&D(c)}n.unbindTexture()}else{let o=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(o=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(o,a.__webglTexture),ge(o,r),r.mipmaps&&r.mipmaps.length>0)for(let n=0;n<r.mipmaps.length;n++)Se(i.__webglFramebuffer[n],t,r,e.COLOR_ATTACHMENT0,o,n);else Se(i.__webglFramebuffer,t,r,e.COLOR_ATTACHMENT0,o,0);E(r)&&D(o),n.unbindTexture()}t.depthBuffer&&Te(t)}function Oe(e){let t=e.textures;for(let r=0,i=t.length;r<i;r++){let i=t[r];if(E(i)){let t=O(e),r=f.get(i).__webglTexture;n.bindTexture(t,r),D(t),n.unbindTexture()}}}let ke=[],Ae=[];function je(t){if(t.samples>0){if(Ne(t)===!1){let r=t.textures,i=t.width,a=t.height,o=e.COLOR_BUFFER_BIT,s=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,c=f.get(t),l=r.length>1;if(l)for(let t=0;t<r.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,c.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,c.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,c.__webglMultisampledFramebuffer);let u=t.texture.mipmaps;u&&u.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,c.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,c.__webglFramebuffer);for(let n=0;n<r.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(o|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(o|=e.STENCIL_BUFFER_BIT)),l){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,c.__webglColorRenderbuffer[n]);let t=f.get(r[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,i,a,0,0,i,a,o,e.NEAREST),_===!0&&(ke.length=0,Ae.length=0,ke.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(ke.push(s),Ae.push(s),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ae)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ke))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),l)for(let t=0;t<r.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,c.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,c.__webglColorRenderbuffer[t]);let i=f.get(r[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,c.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,i,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,c.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Me(e){return Math.min(p.maxSamples,e.samples)}function Ne(e){let n=f.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function F(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Pe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Bt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&R(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):z(`WebGLTextures: Unsupported texture color space:`,n)),t}function Fe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ce,this.resetTextureUnits=ae,this.getTextureUnits=oe,this.setTextureUnits=se,this.setTexture2D=P,this.setTexture2DArray=ue,this.setTexture3D=de,this.setTextureCube=fe,this.rebindTextures=Ee,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ne,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Fu(e,t){function n(n,r=``){let i,a=Bt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Iu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lu=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ru=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ca(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ka({vertexShader:Iu,fragmentShader:Lu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new G(new Ia(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zu=class extends at{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,p=null,m=null,h=typeof XRWebGLBinding<`u`,g=new Ru,v={},y=t.getContextAttributes(),b=null,x=null,C=[],w=[],T=new B,E=null,A=null,ee=new qo;ee.viewport=new Zt;let te=new qo;te.viewport=new Zt;let ne=[ee,te],j=new ss,re=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new Mn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new Mn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new Mn,C[e]=t),t.getHandSpace()};function ie(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function N(){r.removeEventListener(`select`,ie),r.removeEventListener(`selectstart`,ie),r.removeEventListener(`selectend`,ie),r.removeEventListener(`squeeze`,ie),r.removeEventListener(`squeezestart`,ie),r.removeEventListener(`squeezeend`,ie),r.removeEventListener(`end`,N),r.removeEventListener(`inputsourceschange`,ae);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}re=null,M=null,g.reset();for(let e in v)delete v[e];if(e.setRenderTarget(b),p=null,d=null,u=null,r=null,x=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?p:d},this.getBinding=function(){return u===null&&h&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(b=e.getRenderTarget(),r.addEventListener(`select`,ie),r.addEventListener(`selectstart`,ie),r.addEventListener(`selectend`,ie),r.addEventListener(`squeeze`,ie),r.addEventListener(`squeezestart`,ie),r.addEventListener(`squeezeend`,ie),r.addEventListener(`end`,N),r.addEventListener(`inputsourceschange`,ae),y.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),h&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?k:O,a=y.stencil?S:_);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new $t(d.textureWidth,d.textureHeight,{format:D,type:f,depthTexture:new xa(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new $t(p.framebufferWidth,p.framebufferHeight,{format:D,type:f,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),fe.setContext(r),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ae(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let oe=new V,se=new V;function ce(e,t,n){oe.setFromMatrixPosition(t.matrixWorld),se.setFromMatrixPosition(n.matrixWorld);let r=oe.distanceTo(se),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function le(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;g.texture!==null&&(g.depthNear>0&&(t=g.depthNear),g.depthFar>0&&(n=g.depthFar)),j.near=te.near=ee.near=t,j.far=te.far=ee.far=n,(re!==j.near||M!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),re=j.near,M=j.far),j.layers.mask=e.layers.mask|6,ee.layers.mask=j.layers.mask&-5,te.layers.mask=j.layers.mask&-3;let i=e.parent,a=j.cameras;le(j,i);for(let e=0;e<a.length;e++)le(a[e],i);a.length===2?ce(j,ee,te):j.projectionMatrix.copy(ee.projectionMatrix),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),P(e,j,i)};function P(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=lt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(d!==null||p!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(j)},this.getCameraTexture=function(e){return v[e]};let ue=null;function de(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let i=!1;t.length!==j.cameras.length&&(j.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(x,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(x))}let o=ne[n];o===void 0&&(o=new qo,o.layers.enable(n),o.viewport=new Zt,ne[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(j.matrix.copy(o.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),i===!0&&j.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&h){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&g.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&h){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Ca,v[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ue&&ue(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let fe=new As;fe.setAnimationLoop(de),this.setAnimationLoop=function(e){ue=e},this.dispose=function(){}}},Bu=new U,Vu=new H;Vu.set(-1,0,0,0,1,0,0,0,1);function Hu(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Ha(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Bu.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Vu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Uu(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return z(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?R(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):R(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Wu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Gu=null;function Ku(){return Gu===null&&(Gu=new Fi(Wu,16,16,te,y),Gu.name=`DFG_LUT`,Gu.minFilter=l,Gu.magFilter=l,Gu.wrapS=i,Gu.wrapT=i,Gu.generateMipmaps=!1,Gu.needsUpdate=!0),Gu}var qu=class{constructor(e={}){let{canvas:t=Qe(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1,outputBufferType:m=f}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);g=n.getContextAttributes().alpha}else g=a;let v=m,C=new Set([j,ne,ee]),w=new Set([f,_,h,S,b,x]),T=new Uint32Array(4),E=new Int32Array(4),D=new V,O=null,k=null,A=[],te=[],re=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,ie=!1,N=null,ae=null,oe=null,se=null;this._outputColorSpace=He;let ce=0,le=0,P=null,ue=-1,de=null,fe=new Zt,pe=new Zt,me=null,he=new W(0),ge=0,_e=t.width,ve=t.height,ye=1,be=null,xe=null,Se=new Zt(0,0,_e,ve),Ce=new Zt(0,0,_e,ve),we=!1,Te=new Zi,Ee=!1,De=!1,Oe=new U,ke=new V,Ae=new Zt,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function Ne(){return P===null?ye:1}let F=n;function Pe(e,n){return t.getContext(e,n)}let Fe,Ie,I,Le,L,Re,ze,Be,Ve,Ue,We,Ge,Ke,qe,Ye,Xe,Ze,$e,tt,nt,it,at,ot;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,lt,!1),t.addEventListener(`webglcontextrestored`,ut,!1),t.addEventListener(`webglcontextcreationerror`,dt,!1),F===null){let t=`webgl2`;if(F=Pe(t,e),F===null)throw Pe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}st()}catch(e){throw t.removeEventListener(`webglcontextlost`,lt,!1),t.removeEventListener(`webglcontextrestored`,ut,!1),t.removeEventListener(`webglcontextcreationerror`,dt,!1),z(`WebGLRenderer: `+e.message),e}function st(){Fe=new dc(F),Fe.init(),it=new Fu(F,Fe),Ie=new Bs(F,Fe,e,it),I=new Nu(F,Fe),Ie.reversedDepthBuffer&&p&&I.buffers.depth.setReversed(!0),ae=F.createFramebuffer(),oe=F.createFramebuffer(),se=F.createFramebuffer(),Le=new mc(F),L=new pu,Re=new Pu(F,Fe,I,L,Ie,it,Le),ze=new uc(M),Be=new js(F),at=new Rs(F,Be),Ve=new fc(F,Be,Le,at),Ue=new gc(F,Ve,Be,at,Le),$e=new hc(F,Ie,Re),Ye=new Vs(L),We=new fu(M,ze,Fe,Ie,at,Ye),Ge=new Hu(M,L),Ke=new _u,qe=new wu(Fe),Ze=new Ls(M,ze,I,Ue,g,s),Xe=new Mu(M,Ue,Ie),ot=new Uu(F,Le,Ie,I),tt=new zs(F,Fe,Le),nt=new pc(F,Fe,Le),Le.programs=We.programs,M.capabilities=Ie,M.extensions=Fe,M.properties=L,M.renderLists=Ke,M.shadowMap=Xe,M.state=I,M.info=Le}v!==1009&&(re=new vc(v,t.width,t.height,o,r,i));let ct=new zu(M,F);this.xr=ct,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let e=Fe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Fe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(e){e!==void 0&&(ye=e,this.setSize(_e,ve,!1))},this.getSize=function(e){return e.set(_e,ve)},this.setSize=function(e,n,r=!0){ct.isPresenting?R(`WebGLRenderer: Can't change size while VR device is presenting.`):(_e=e,ve=n,t.width=Math.floor(e*ye),t.height=Math.floor(n*ye),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),re!==null&&re.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(_e*ye,ve*ye).floor()},this.setDrawingBufferSize=function(e,n,r){_e=e,ve=n,ye=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(v===1009)z(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){R(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}re.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(fe)},this.getViewport=function(e){return e.copy(Se)},this.setViewport=function(e,t,n,r){e.isVector4?Se.set(e.x,e.y,e.z,e.w):Se.set(e,t,n,r),I.viewport(fe.copy(Se).multiplyScalar(ye).round())},this.getScissor=function(e){return e.copy(Ce)},this.setScissor=function(e,t,n,r){e.isVector4?Ce.set(e.x,e.y,e.z,e.w):Ce.set(e,t,n,r),I.scissor(pe.copy(Ce).multiplyScalar(ye).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(e){I.setScissorTest(we=e)},this.setOpaqueSort=function(e){be=e},this.setTransparentSort=function(e){xe=e},this.getClearColor=function(e){return e.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(P!==null){let t=P.texture.format;e=C.has(t)}if(e){let e=P.texture.type,t=w.has(e),n=Ze.getClearColor(),r=Ze.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,F.clearBufferuiv(F.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,F.clearBufferiv(F.COLOR,0,E))}else r|=F.COLOR_BUFFER_BIT}t&&(r|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&F.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),N=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,lt,!1),t.removeEventListener(`webglcontextrestored`,ut,!1),t.removeEventListener(`webglcontextcreationerror`,dt,!1),Ze.dispose(),Ke.dispose(),qe.dispose(),L.dispose(),ze.dispose(),Ue.dispose(),at.dispose(),ot.dispose(),We.dispose(),ct.dispose(),ct.removeEventListener(`sessionstart`,vt),ct.removeEventListener(`sessionend`,yt),bt.stop()};function lt(e){e.preventDefault(),et(`WebGLRenderer: Context Lost.`),ie=!0}function ut(){et(`WebGLRenderer: Context Restored.`),ie=!1;let e=Le.autoReset,t=Xe.enabled,n=Xe.autoUpdate,r=Xe.needsUpdate,i=Xe.type;st(),Le.autoReset=e,Xe.enabled=t,Xe.autoUpdate=n,Xe.needsUpdate=r,Xe.type=i}function dt(e){z(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ft(e){let t=e.target;t.removeEventListener(`dispose`,ft),pt(t)}function pt(e){mt(e),L.remove(e)}function mt(e){let t=L.get(e).programs;t!==void 0&&(t.forEach(function(e){We.releaseProgram(e)}),e.isShaderMaterial&&We.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=je);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=At(e,t,n,r,i);I.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ve.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;at.setup(i,r,s,n,c);let h,g=tt;if(c!==null&&(h=Be.get(c),g=nt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(I.setLineWidth(r.wireframeLinewidth*Ne()),g.setMode(F.LINES)):g.setMode(F.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),I.setLineWidth(e*Ne()),i.isLineSegments?g.setMode(F.LINES):i.isLineLoop?g.setMode(F.LINE_LOOP):g.setMode(F.LINE_STRIP)}else i.isPoints?g.setMode(F.POINTS):i.isSprite&&g.setMode(F.TRIANGLES);if(i.isBatchedMesh){if(Fe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Be.get(c).bytesPerElement:1,o=L.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(F,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ht(e,t,n,r){N!==null&&e.isNodeMaterial&&N.setObject(r,e),Ee===!0&&Ye.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Et(e,t,r),e.side=0,e.needsUpdate=!0,Et(e,t,r),e.side=2):Et(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),N!==null&&N.renderStart(e,t,n),k=qe.get(n),k.init(t),te.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights(),N!==null&&N.updateLights(k.state.lightsArray),De=this.localClippingEnabled,Ee=Ye.init(this.clippingPlanes,De),Ee===!0&&Ye.setGlobalState(this.clippingPlanes,t),N!==null&&Xe.render(k.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];ht(o,n,t,e),r.add(o)}else ht(i,n,t,e),r.add(i)}}),k=te.pop(),N!==null&&N.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=L.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Fe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let gt=null;function _t(e){gt&&gt(e)}function vt(){bt.stop()}function yt(){bt.start()}let bt=new As;bt.setAnimationLoop(_t),typeof self<`u`&&bt.setContext(self),this.setAnimationLoop=function(e){gt=e,ct.setAnimationLoop(e),e===null?bt.stop():bt.start()},ct.addEventListener(`sessionstart`,vt),ct.addEventListener(`sessionend`,yt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){z(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ie===!0)return;N!==null&&N.renderStart(e,t);let n=ct.enabled===!0&&ct.isPresenting===!0,r=re!==null&&(P===null||n)&&re.begin(M,P);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(re===null||re.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(t),t=ct.getCamera()),e.isScene===!0&&e.onBeforeRender(M,e,t,P),k=qe.get(e,te.length),k.init(t),k.state.textureUnits=Re.getTextureUnits(),te.push(k),Oe.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Te.setFromProjectionMatrix(Oe,Je,t.reversedDepth),De=this.localClippingEnabled,Ee=Ye.init(this.clippingPlanes,De),O=Ke.get(e,A.length),O.init(),A.push(O),ct.enabled===!0&&ct.isPresenting===!0){let e=M.xr.getDepthSensingMesh();e!==null&&xt(e,t,-1/0,M.sortObjects)}xt(e,t,0,M.sortObjects),O.finish(),N!==null&&N.updateLights(k.state.lightsArray),M.sortObjects===!0&&O.sort(be,xe),Me=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,Me&&Ze.addToRenderList(O,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ee===!0&&Ye.beginShadows();let i=k.state.shadowsArray;if(Xe.render(i,e,t),Ee===!0&&Ye.endShadows(),(r&&re.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Ct(n,r,e,a)}Me&&Ze.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];St(O,e,n,n.viewport)}}else r.length>0&&Ct(n,r,e,t),Me&&Ze.render(e),St(O,e,t)}P!==null&&le===0&&(Re.updateMultisampleRenderTarget(P),Re.updateRenderTargetMipmap(P)),r&&re.end(M),e.isScene===!0&&e.onAfterRender(M,e,t),at.resetDefaultState(),ue=-1,de=null,te.pop(),te.length>0?(k=te[te.length-1],Re.setTextureUnits(k.state.textureUnits),Ee===!0&&Ye.setGlobalState(M.clippingPlanes,k.state.camera)):k=null,A.pop(),O=A.length>0?A[A.length-1]:null,N!==null&&N.renderEnd()};function xt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)k.pushLightProbeGrid(e);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(Te)){r&&Ae.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Oe);let i=Ue.update(e),a=e.material;a.visible&&O.push(e,i,a,n,Ae.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(Te))){let i=Ue.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Ae.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ae.copy(e.boundingSphere.center)),Ae.applyMatrix4(e.matrixWorld).applyMatrix4(Oe)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&O.push(e,i,c,n,Ae.z,s,t)}}else a.visible&&O.push(e,i,a,n,Ae.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)xt(i[e],t,n,r)}function St(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),Ee===!0&&Ye.setGlobalState(M.clippingPlanes,n),r&&I.viewport(fe.copy(r)),i.length>0&&wt(i,t,n),a.length>0&&wt(a,t,n),o.length>0&&wt(o,t,n),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function Ct(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=Fe.has(`EXT_color_buffer_half_float`)||Fe.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new $t(1,1,{generateMipmaps:!0,type:e?y:f,minFilter:d,samples:Math.max(4,Ie.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Bt.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||fe;a.setSize(o.z*M.transmissionResolutionScale,o.w*M.transmissionResolutionScale);let s=M.getRenderTarget(),c=M.getActiveCubeFace(),l=M.getActiveMipmapLevel();M.setRenderTarget(a),M.getClearColor(he),ge=M.getClearAlpha(),ge<1&&M.setClearColor(16777215,.5),M.clear(),Me&&Ze.render(n);let u=M.toneMapping;M.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),Ee===!0&&Ye.setGlobalState(M.clippingPlanes,r),wt(e,n,r),Re.updateMultisampleRenderTarget(a),Re.updateRenderTargetMipmap(a),Fe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Tt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Re.updateMultisampleRenderTarget(a),Re.updateRenderTargetMipmap(a))}M.setRenderTarget(s,c,l),M.setClearColor(he,ge),p!==void 0&&(r.viewport=p),M.toneMapping=u}function wt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Tt(o,t,n,s,l,c)}}function Tt(e,t,n,r,i,a){N!==null&&i.isNodeMaterial&&N.setObject(e,i),e.onBeforeRender(M,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(M,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=2):M.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(M,t,n,r,i,a)}function Et(e,t,n){t.isScene!==!0&&(t=je);let r=L.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=We.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=We.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=ze.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ft),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Ot(e,s),d}else s.uniforms=We.getUniforms(e),N!==null&&e.isNodeMaterial&&N.build(e,n,s),e.onBeforeCompile(s,M),d=We.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ye.uniform),Ot(e,s),r.needsLights=Mt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=k.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Dt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Tl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Ot(e,t){let n=L.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function kt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function At(e,t,n,r,i){t.isScene!==!0&&(t=je),Re.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Bt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=ze.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(h=M.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=L.get(r),y=k.state.lights;if(Ee===!0&&(De===!0||e!==de)){let t=e===de&&r.id===ue;Ye.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ye.numPlanes||v.numIntersection!==Ye.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=k.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Et(r,t,i),N&&r.isNodeMaterial&&N.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(I.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==ue&&(ue=r.id,C=!0),v.needsLights){let e=kt(k.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||de!==e){I.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(F,`projectionMatrix`,e.projectionMatrix),T.setValue(F,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(F,ke.setFromMatrixPosition(e.matrixWorld)),Ie.logarithmicDepthBuffer&&T.setValue(F,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(F,`isOrthographic`,e.isOrthographicCamera===!0),de!==e&&(de=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(F,`sunShadowMap`,y.state.sunShadowMap,Re),y.state.directionalShadowMap.length>0&&T.setValue(F,`directionalShadowMap`,y.state.directionalShadowMap,Re),y.state.spotShadowMap.length>0&&T.setValue(F,`spotShadowMap`,y.state.spotShadowMap,Re),y.state.pointShadowMap.length>0&&T.setValue(F,`pointShadowMap`,y.state.pointShadowMap,Re)),i.isSkinnedMesh){T.setOptional(F,i,`bindMatrix`),T.setOptional(F,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(F,`boneTexture`,e.boneTexture,Re))}i.isBatchedMesh&&(T.setOptional(F,i,`batchingTexture`),T.setValue(F,`batchingTexture`,i._matricesTexture,Re),T.setOptional(F,i,`batchingIdTexture`),T.setValue(F,`batchingIdTexture`,i._indirectTexture,Re),T.setOptional(F,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(F,`batchingColorTexture`,i._colorsTexture,Re));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&$e.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(F,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=Ku()),C){if(T.setValue(F,`toneMappingExposure`,M.toneMappingExposure),v.needsLights&&jt(E,w),a&&r.fog===!0&&Ge.refreshFogUniforms(E,a),Ge.refreshMaterialUniforms(E,r,ye,ve,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Tl.upload(F,Dt(v),E,Re)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Tl.upload(F,Dt(v),E,Re),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(F,`center`,i.center),T.setValue(F,`modelViewMatrix`,i.modelViewMatrix),T.setValue(F,`normalMatrix`,i.normalMatrix),T.setValue(F,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];ot.update(n,x),ot.bind(n,x)}}return x}function jt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Mt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return le},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(e,t,n){let r=L.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),L.get(e.texture).__webglTexture=t,L.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=L.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){P=e,ce=t,le=n;let r=null,i=!1,a=!1;if(e){let o=L.get(e);if(o.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(F.FRAMEBUFFER,o.__webglFramebuffer),fe.copy(e.viewport),pe.copy(e.scissor),me=e.scissorTest,I.viewport(fe),I.scissor(pe),I.setScissorTest(me),ue=-1;return}if(o.__webglFramebuffer===void 0)Re.setupRenderTarget(e);else if(o.__hasExternalTextures)Re.rebindTextures(e,L.get(e.texture).__webglTexture,L.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&L.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Re.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=L.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Re.useMultisampledRTT(e)===!1?L.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,fe.copy(e.viewport),pe.copy(e.scissor),me=e.scissorTest}else fe.copy(Se).multiplyScalar(ye).floor(),pe.copy(Ce).multiplyScalar(ye).floor(),me=we;if(n!==0&&(r=ae),I.bindFramebuffer(F.FRAMEBUFFER,r)&&I.drawBuffers(e,r),I.viewport(fe),I.scissor(pe),I.setScissorTest(me),i){let r=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=L.get(e.textures[t]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,t.__webglTexture,n)}ue=-1};function B(e){let t=L.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ie.textureFormatReadable(e.format),t.__typeReadable=Ie.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){I.bindFramebuffer(F.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let u=B(o);if(u.__formatReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&F.readPixels(t,n,r,i,it.convert(c),it.convert(l),a)}finally{let e=P===null?null:L.get(P).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){I.bindFramebuffer(F.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let d=B(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.bufferData(F.PIXEL_PACK_BUFFER,a.byteLength,F.STREAM_READ),F.readPixels(t,n,r,i,it.convert(l),it.convert(u),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let p=P===null?null:L.get(P).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,p);let m=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await rt(F,m,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,a),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(f),F.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Re.setTexture2D(e,0),F.copyTexSubImage2D(F.TEXTURE_2D,n,0,0,o,s,i,a),I.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=it.convert(t.format),_=it.convert(t.type),v;t.isData3DTexture?(Re.setTexture3D(t,0),v=F.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Re.setTexture2DArray(t,0),v=F.TEXTURE_2D_ARRAY):(Re.setTexture2D(t,0),v=F.TEXTURE_2D),I.activeTexture(F.TEXTURE0),I.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,t.flipY),I.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),I.pixelStorei(F.UNPACK_ALIGNMENT,t.unpackAlignment);let y=I.getParameter(F.UNPACK_ROW_LENGTH),b=I.getParameter(F.UNPACK_IMAGE_HEIGHT),x=I.getParameter(F.UNPACK_SKIP_PIXELS),S=I.getParameter(F.UNPACK_SKIP_ROWS),C=I.getParameter(F.UNPACK_SKIP_IMAGES);I.pixelStorei(F.UNPACK_ROW_LENGTH,h.width),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,h.height),I.pixelStorei(F.UNPACK_SKIP_PIXELS,l),I.pixelStorei(F.UNPACK_SKIP_ROWS,u),I.pixelStorei(F.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=L.get(e),r=L.get(t),h=L.get(n.__renderTarget),g=L.get(r.__renderTarget);I.bindFramebuffer(F.READ_FRAMEBUFFER,h.__webglFramebuffer),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(e).__webglTexture,i,d+n),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(t).__webglTexture,a,m+n)),F.blitFramebuffer(l,u,o,s,f,p,o,s,F.DEPTH_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||L.has(e)){let n=L.get(e),r=L.get(t);I.bindFramebuffer(F.READ_FRAMEBUFFER,oe),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,se);for(let e=0;e<c;e++)w?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,n.__webglTexture,i),T?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,r.__webglTexture,a),i===0?T?F.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):F.copyTexSubImage2D(v,a,f,p,l,u,o,s):F.blitFramebuffer(l,u,o,s,f,p,o,s,F.COLOR_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?F.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h);I.pixelStorei(F.UNPACK_ROW_LENGTH,y),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,b),I.pixelStorei(F.UNPACK_SKIP_PIXELS,x),I.pixelStorei(F.UNPACK_SKIP_ROWS,S),I.pixelStorei(F.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&F.generateMipmap(v),I.unbindTexture()},this.initRenderTarget=function(e){L.get(e).__webglFramebuffer===void 0&&Re.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Re.setTextureCube(e,0):e.isData3DTexture?Re.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Re.setTexture2DArray(e,0):Re.setTexture2D(e,0),I.unbindTexture()},this.resetState=function(){ce=0,le=0,P=null,I.reset(),at.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Je}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Bt._getUnpackColorSpace()}},Ju=[{key:`barhi`,name:`برحي`,kg:130,ppm:4500,season:`mid_season`,usd:3.2,color:`yellow`,type:`soft`,water:75,grade:`premium_export`},{key:`zahdi`,name:`زهدي`,kg:140,ppm:9e3,season:`late`,usd:1.1,color:`amber`,type:`semi_dry`,water:60,grade:`commercial_first_class`},{key:`khadrawi`,name:`خضراوي`,kg:90,ppm:5e3,season:`early`,usd:2.5,color:`greenish_yellow`,type:`soft`,water:80,grade:`premium_export`},{key:`halawi`,name:`حلاوي`,kg:95,ppm:6e3,season:`early`,usd:2.1,color:`amber`,type:`semi_dry`,water:70,grade:`premium_export`},{key:`sayer`,name:`ساير (أسطة عمران)`,kg:100,ppm:12e3,season:`mid_season`,usd:1.3,color:`brown`,type:`semi_dry`,water:65,grade:`commercial_first_class`},{key:`maktoum`,name:`مكتوم`,kg:110,ppm:4e3,season:`late`,usd:2.8,color:`yellow`,type:`soft`,water:80,grade:`premium_export`},{key:`dairi`,name:`ديري`,kg:115,ppm:8e3,season:`late`,usd:1.8,color:`dark_purple`,type:`semi_dry`,water:70,grade:`commercial_first_class`},{key:`chibchab`,name:`جبجاب`,kg:135,ppm:6500,season:`mid_season`,usd:2,color:`yellow`,type:`dry`,water:75,grade:`premium_export`},{key:`bream`,name:`بريم`,kg:85,ppm:4500,season:`early`,usd:3.5,color:`yellow`,type:`soft`,water:70,grade:`premium_export`},{key:`ashrasi`,name:`أشرسي`,kg:105,ppm:4e3,season:`mid_season`,usd:2.9,color:`yellow`,type:`semi_dry`,water:75,grade:`premium_export`},{key:`khastawi`,name:`خستاوي`,kg:110,ppm:5500,season:`mid_season`,usd:1.4,color:`brown`,type:`soft`,water:65,grade:`commercial_first_class`},{key:`shukkar`,name:`سكر`,kg:95,ppm:4500,season:`early`,usd:2.5,color:`yellow`,type:`soft`,water:75,grade:`premium_export`},{key:`tabarzal`,name:`تبرزل`,kg:90,ppm:5e3,season:`early`,usd:2.3,color:`yellow`,type:`semi_dry`,water:65,grade:`premium_export`},{key:`jamal_al_din`,name:`جمال الدين`,kg:105,ppm:5500,season:`mid_season`,usd:2.1,color:`red`,type:`soft`,water:75,grade:`commercial_first_class`},{key:`khasab`,name:`خصاب`,kg:120,ppm:7500,season:`very_late`,usd:2.5,color:`red`,type:`soft`,water:70,grade:`premium_export`},{key:`medjool`,name:`المجهول (مدجول)`,kg:100,ppm:3500,season:`mid_season`,usd:7.5,color:`brown`,type:`semi_dry`,water:85,grade:`premium_export`}],q={wheat:{name:`قمح`,icon:`🌾`,grow:40,shape:`stalk`,leaf:10208573,fruit:14926170,h:1},corn:{name:`ذرة`,icon:`🌽`,grow:55,shape:`stalk`,leaf:5025616,fruit:15911244,h:1.8},tomato:{name:`طماطم`,icon:`🍅`,grow:50,shape:`bush`,leaf:4168518,fruit:15022389},pepper:{name:`فلفل`,icon:`🌶️`,grow:50,shape:`bush`,leaf:4168518,fruit:16740419},strawberry:{name:`فراولة`,icon:`🍓`,grow:45,shape:`bush`,leaf:3050327,fruit:16717636},cucumber:{name:`خيار`,icon:`🥒`,grow:45,shape:`vine`,leaf:3046706,fruit:6732650},watermelon:{name:`بطيخ`,icon:`🍉`,grow:70,shape:`vine`,leaf:3706428,fruit:1793568},potato:{name:`بطاطس`,icon:`🥔`,grow:55,shape:`root`,leaf:5606191,fruit:13149290},carrot:{name:`جزر`,icon:`🥕`,grow:40,shape:`root`,leaf:6732650,fruit:16750592},onion:{name:`بصل`,icon:`🧅`,grow:45,shape:`root`,leaf:8172354,fruit:13606872},barley:{name:`شعير`,icon:`🌾`,grow:38,shape:`stalk`,leaf:10864714,fruit:14071914,h:.9},sunflower:{name:`دوار الشمس`,icon:`🌻`,grow:60,shape:`stalk`,leaf:5606191,fruit:16761095,h:2},sugarcane:{name:`قصب سكر`,icon:`🎋`,grow:80,shape:`stalk`,leaf:8172354,fruit:10275941,h:2.2},eggplant:{name:`باذنجان`,icon:`🍆`,grow:55,shape:`bush`,leaf:4168518,fruit:6953882},okra:{name:`بامية`,icon:`🫛`,grow:50,shape:`bush`,leaf:5025616,fruit:9159498},beans:{name:`فاصوليا`,icon:`🫘`,grow:45,shape:`bush`,leaf:4431943,fruit:11457921},pumpkin:{name:`قرع`,icon:`🎃`,grow:70,shape:`vine`,leaf:3706428,fruit:16750592},zucchini:{name:`كوسا`,icon:`🥒`,grow:45,shape:`vine`,leaf:3046706,fruit:10275941},lettuce:{name:`خس`,icon:`🥬`,grow:35,shape:`leafy`,leaf:6732650,fruit:11457921},cabbage:{name:`ملفوف`,icon:`🥬`,grow:55,shape:`leafy`,leaf:5606191,fruit:12968357},spinach:{name:`سبانخ`,icon:`🥬`,grow:30,shape:`leafy`,leaf:3046706,fruit:3706428},radish:{name:`فجل`,icon:`🌱`,grow:28,shape:`root`,leaf:6732650,fruit:15277667},beet:{name:`شمندر`,icon:`🫜`,grow:50,shape:`root`,leaf:8172354,fruit:8916559},garlic:{name:`ثوم`,icon:`🧄`,grow:50,shape:`root`,leaf:10275941,fruit:16119285}},Yu=(e,t,n,r,i,a,o,s,c,l,u,d={})=>({name:e,icon:t,grow:n,bear:r,kg:i,shape:a,leaf:o,fruit:s,t:c,salt:l,cat:u,perennial:!0,...d});Object.assign(q,{rice:{name:`أرز عنبر`,icon:`🌾`,grow:95,shape:`stalk`,leaf:9224530,fruit:15259531,h:1.1,t:[18,26,38,44],salt:2.3,cat:`field`},alfalfa:Yu(`جت (برسيم حجازي)`,`🌿`,30,30,12,`leafy`,5217594,11765995,[0,15,32,46],7,`forage`,{feed:!0}),rhodes:Yu(`حشيشة الرودس`,`🌱`,35,30,10,`stalk`,7318077,13227898,[8,22,36,48],10,`forage`,{feed:!0,h:1.2}),bluepanic:Yu(`بلوبانيك`,`🌱`,35,30,14,`stalk`,7117370,12570474,[10,24,40,50],14,`forage`,{feed:!0,h:1.6}),palm_barhi:Yu(`نخيل برحي`,`🌴`,240,100,180,`palm`,4164154,14721072,[8,22,40,54],9.4,`palm`,{tree:!0}),palm_zahdi:Yu(`نخيل زهدي`,`🌴`,180,100,200,`palm`,4164154,13141546,[8,22,40,54],14.8,`palm`,{tree:!0}),palm_khestawi:Yu(`نخيل خستاوي`,`🌴`,240,100,150,`palm`,4164154,11887901,[8,22,40,54],8.6,`palm`,{tree:!0}),palm_maktoum:Yu(`نخيل مكتوم`,`🌴`,240,100,140,`palm`,4164154,9063200,[8,22,40,54],7.8,`palm`,{tree:!0}),palm_ashrasi:Yu(`نخيل أشرسي`,`🌴`,240,100,130,`palm`,4164154,14257711,[8,22,40,54],7,`palm`,{tree:!0}),palm_medjool:Yu(`نخيل مجهول`,`🌴`,300,110,110,`palm`,4164154,7027226,[8,22,40,54],5.5,`palm`,{tree:!0}),pomegranate:Yu(`رمان سليمي`,`🍎`,180,80,45,`tree`,4889154,14234158,[4,18,38,48],6.3,`fruit`,{tree:!0}),fig:Yu(`تين`,`🌳`,120,80,50,`tree`,5939270,8080010,[4,18,38,48],5.9,`fruit`,{tree:!0}),grape:Yu(`عنب حلواني`,`🍇`,120,80,25,`vine`,4889154,10473802,[6,20,36,46],4.4,`fruit`),lemon:Yu(`ليمون بصري`,`🍋`,180,80,40,`tree`,4165445,15913019,[8,22,36,48],3.1,`fruit`,{tree:!0}),clementine:Yu(`يوسفي`,`🍊`,180,80,40,`tree`,4165445,16095779,[8,20,35,47],3.1,`fruit`,{tree:!0}),kumquat:Yu(`كمكوات`,`🍊`,120,70,15,`tree`,4165445,16098851,[8,20,35,48],3.1,`fruit`,{tree:!0}),apple:Yu(`تفاح (منخفض البرودة)`,`🍏`,180,80,35,`tree`,4889154,13120555,[4,18,34,46],3.1,`fruit`,{tree:!0}),apricot:Yu(`مشمش قيسي`,`🍑`,180,80,40,`tree`,4889154,16032345,[4,18,34,45],3.4,`fruit`,{tree:!0}),olive:Yu(`زيتون`,`🫒`,240,90,30,`tree`,8231514,4934186,[4,18,38,50],7,`fruit`,{tree:!0}),sidr:Yu(`سدر (نبق)`,`🌳`,120,80,80,`tree`,5937738,15249994,[8,20,40,54],18.8,`tree`,{tree:!0}),eucalyptus:Yu(`كافور (مصدّ رياح)`,`🌲`,120,100,200,`tree`,7314026,11049594,[6,18,38,54],23,`tree`,{tree:!0}),rose:Yu(`ورد جوري`,`🌹`,60,40,4,`bush`,4165445,14697851,[4,14,30,44],2.8,`tree`)});var Xu={yellow:14725168,amber:14257711,greenish_yellow:12107840,brown:8014370,dark_purple:4857920,red:11546672};for(let e of Ju){let t=`palm_`+(e.key===`khastawi`?`khestawi`:e.key);q[t]=Yu(`نخيل `+e.name,`🌴`,e.key===`medjool`?300:e.season===`early`?210:240,100,e.kg,`palm`,4164154,Xu[e.color]??14257711,[8,22,40,54],+(e.ppm/640).toFixed(1),`palm`,{tree:!0,usd:e.usd,season:e.season})}var Zu={alfalfa:2,rice:3,grape:1.5,lemon:1.7,clementine:1.7,kumquat:1.7,apple:1.7,apricot:1.6,fig:4.2,pomegranate:2.7,olive:2.7,rose:1.2,rhodes:7,bluepanic:6,sidr:6,eucalyptus:4};for(let[e,t]of Object.entries(q))t.salt!=null&&(t.saltMax=t.salt,Zu[e]==null?t.shape===`palm`&&(t.salt=+(3+Math.min(12e3,t.saltMax*640)/6e3).toFixed(1)):t.salt=Zu[e]);for(let e of[`wheat`,`barley`,`corn`])q[e].feed=!0;var Qu=[`lettuce`,`cabbage`,`spinach`,`radish`,`garlic`,`potato`,`barley`,`carrot`,`onion`,`wheat`,`strawberry`,`beet`];for(let[e,t]of Object.entries(q))t.t??=Qu.includes(e)?[2,10,22,30]:[8,20,30,40],t.cat??=`veg`;for(let e of[`wheat`,`barley`,`corn`,`sunflower`,`sugarcane`,`rice`])q[e].cat=`field`;var $u=(e,[t,n,r,i])=>e<=t||e>=i?0:e<n?(e-t)/(n-t):e<=r?1:(i-e)/(i-r),ed=new Map,td=!1,nd=(e,t)=>{e.wireframe=td,e.emissive.setHex(td?t:0).multiplyScalar(.7)},rd=e=>{if(!ed.has(e)){let t=new Ja({color:e,flatShading:!0});nd(t,e),ed.set(e,t)}return ed.get(e)};function id(e){td=e;for(let[e,t]of ed)nd(t,e)}var ad=(e,t,n,r,i,a)=>{let o=new G(t,rd(n));return o.position.set(r,i,a),o.castShadow=!0,e.add(o),o},od=e=>new Fa(e,1),sd={stalk:(e,t,n)=>{ad(e,new Ea(.07,.1,n.h,6),n.leaf,0,n.h/2,0),ad(e,new wa(.8,.06,.2),n.leaf,0,n.h*.55,0),ad(e,new wa(.2,.06,.8),n.leaf,0,n.h*.4,0),ad(t,od(.2),n.fruit,0,n.h+.15,0).scale.y=1.8},bush:(e,t,n)=>{ad(e,od(.4),n.leaf,0,.4,0);for(let e=0;e<5;e++){let r=e/5*6.283;ad(t,od(.1),n.fruit,Math.cos(r)*.38,.35+e%2*.15,Math.sin(r)*.38)}},vine:(e,t,n)=>{ad(e,od(.5),n.leaf,0,.12,0).scale.y=.3,ad(t,od(.24),n.fruit,.15,.22,.1)},leafy:(e,t,n)=>{ad(e,od(.45),n.leaf,0,.2,0).scale.y=.55,ad(t,od(.25),n.fruit,0,.3,0)},root:(e,t,n)=>{ad(e,new Da(.28,.55,6),n.leaf,0,.28,0),ad(t,od(.13),n.fruit,.2,.06,.1)}};function cd(e){let t=q[e],n=new An,r=[];for(let[e,i]of[[-.5,-.5],[.5,-.5],[-.5,.5],[.5,.5]]){let a=new An,o=new An;a.position.set(e,0,i),a.add(o),(sd[t.shape]??sd.bush)(a,o,t),n.add(a),r.push({p:a,fruit:o})}return{group:n,setGrowth(e){for(let{p:t,fruit:n}of r)t.scale.setScalar(.25+.75*e),n.visible=e>=1}}}var ld=e=>{let t=e;return()=>(t=t*16807%2147483647)/2147483647};function ud(e,t,n=1,i=!0){let a=document.createElement(`canvas`);a.width=a.height=e,t(a.getContext(`2d`),e);let o=new ba(a);return o.wrapS=o.wrapT=r,i&&(o.colorSpace=He),o.anisotropy=16,o.repeat.set(n,n),o}var dd=matchMedia(`(pointer:coarse)`).matches,fd=dd?256:512,pd=dd?128:256,md=e=>`rgb(${e|0},${e|0},${e|0})`;function hd(e){return ud(fd,(t,n)=>{let r=ld(e);t.fillStyle=md(222),t.fillRect(0,0,n,n);for(let e=0;e<40;e++)t.fillStyle=md(205+r()*40),t.globalAlpha=.25,t.beginPath(),t.arc(r()*n,r()*n,14+r()*30,0,6.283),t.fill();t.globalAlpha=.55;for(let e=0;e<2600;e++){let e=r()*n,i=r()*n,a=4+r()*9;t.strokeStyle=md(150+r()*105),t.lineWidth=1+r()*.8,t.beginPath(),t.moveTo(e,i),t.lineTo(e+(r()-.5)*4,i-a),t.stroke()}t.globalAlpha=1})}function gd(e){return ud(fd,(t,n)=>{let r=ld(e);t.fillStyle=md(215),t.fillRect(0,0,n,n);for(let e=0;e<1500;e++)t.fillStyle=md(150+r()*100),t.globalAlpha=.5,t.fillRect(r()*n,r()*n,1+r()*3,1+r()*2);t.globalAlpha=1;for(let e=0;e<n;e+=32){let r=t.createLinearGradient(0,e,0,e+32);r.addColorStop(0,`rgba(0,0,0,0.38)`),r.addColorStop(.35,`rgba(0,0,0,0)`),r.addColorStop(.7,`rgba(255,255,255,0.14)`),r.addColorStop(1,`rgba(0,0,0,0.38)`),t.fillStyle=r,t.fillRect(0,e,n,32)}})}function _d(e){return ud(fd,(t,n)=>{let r=ld(e);t.fillStyle=md(225),t.fillRect(0,0,n,n);for(let e=0;e<1400;e++){let e=r()*n,i=r()*n,a=r()*3.14,o=6+r()*14;t.strokeStyle=md(160+r()*95),t.lineWidth=1,t.beginPath(),t.moveTo(e,i),t.lineTo(e+Math.cos(a)*o,i+Math.sin(a)*o),t.stroke()}})}function vd(e,t=215){return ud(pd,(n,r)=>{let i=ld(e);n.fillStyle=md(t),n.fillRect(0,0,r,r);for(let e=0;e<900;e++)n.fillStyle=md(t-60+i()*90),n.globalAlpha=.35,n.fillRect(i()*r,i()*r,1+i()*2,1+i()*2);n.globalAlpha=1})}function yd(){let e=new Float32Array(16384),t=ld(5),n=Array.from({length:6},()=>({kx:Math.round(1+t()*4),ky:Math.round(1+t()*4),p:t()*6.28,a:.4+t()*.6}));for(let t=0;t<128;t++)for(let r=0;r<128;r++){let i=0;for(let e of n)i+=Math.sin((r*e.kx/128+t*e.ky/128)*6.283+e.p)*e.a;e[t*128+r]=i}let i=document.createElement(`canvas`);i.width=i.height=128;let a=i.getContext(`2d`),o=a.createImageData(128,128);for(let t=0;t<128;t++)for(let n=0;n<128;n++){let r=e[t*128+(n+1)%128]-e[t*128+(n+128-1)%128],i=e[(t+1)%128*128+n]-e[(t+128-1)%128*128+n],a=(t*128+n)*4,s=new V(-r*.6,-i*.6,1).normalize();o.data[a]=(s.x*.5+.5)*255,o.data[a+1]=(s.y*.5+.5)*255,o.data[a+2]=(s.z*.5+.5)*255,o.data[a+3]=255}a.putImageData(o,0,0);let s=new ba(i);return s.wrapS=s.wrapT=r,s}var bd={grass:[1,2,3,4].map(hd),soil:[11,12,13,14].map(gd),straw:[21,22].map(_d),concrete:[vd(31)],bed:[vd(41,150)],groundBig:(()=>{let e=hd(99);return e.repeat.set(60,60),e})(),water:yd()};bd.water.repeat.set(3,3),bd.flat=new Fi(new Uint8Array([255,255,255,255]),1,1),bd.flat.needsUpdate=!0,bd.flat.colorSpace=He;function xd(e){bd.water.offset.set(e*.015,e*.01)}function Sd(e=3120081,t=.82){return new Ya({color:e,roughness:.06,metalness:0,transparent:!0,opacity:t,normalMap:bd.water,normalScale:new B(.5,.5),envMapIntensity:1.6,clearcoat:.6})}var Cd={temperate:{name:`معتدل`,mean:18,amp:8,rh:60,rain:.15},hot:{name:`صحراوي حار`,mean:30,amp:12,rh:30,rain:.02},humid:{name:`استوائي رطب`,mean:27,amp:5,rh:80,rain:.35},cold:{name:`بارد`,mean:8,amp:6,rh:65,rain:.2}},wd={on:!0},Td=()=>((Date.now()/36e5+3)%24+24)%24,Ed=(e,t,n)=>Math.max(t,Math.min(n,e)),Dd={t:40,day:1,hour:8,sunAngle:0,season:0,airTemp:18,rh:60,sun:.5,cloud:.2,rain:0},Od=Cd.temperate,kd=0,Ad=0,jd=()=>Od;function Md(e){Od=Cd[e]??Cd.temperate}function Nd(e=40){Dd.t=e,kd=0,Ad=0,Dd.cloud=.2,Dd.rain=0,Pd(0)}function Pd(e){e>=0||(e=0);let t=Dd;t.t+=e;let n=t.t/120;t.day=Math.floor(n)+1,t.hour=wd.on?Td():n%1*24;let r=Math.sqrt(e),i=(Date.now()/864e5+3/24)%365.25;t.season=Od.swing?Math.cos(2*Math.PI*(i-200)/365.25):0;let a=12+2*t.season,o=12-a/2;t.sunAngle=Math.PI*(t.hour-o)/a;let s=Od.swing?.05+.95*(1-t.season)/2:1;t.cloud=Ed(t.cloud+(.2+Od.rain-t.cloud)*.01*e+(Math.random()-.5)*.06*r,0,1),kd<=0&&t.cloud>.75&&Math.random()<Od.rain*s*.02*e&&(kd=10+Math.random()*20),kd>0&&(kd-=e,t.cloud=Math.min(1,t.cloud+.01*e),kd<=0&&(t.cloud*=.6)),t.rain=kd>0?.5+.5*t.cloud:0,Ad=Ed(Ad*(1-.01*e)+(Math.random()-.5)*.3*r,-4,4);let c=Od.amp*Math.sin(2*Math.PI*(t.hour-9)/24);t.airTemp=Od.mean+(Od.swing??0)*t.season+c+Ad-3*t.cloud-3*t.rain,t.sun=Math.max(0,Math.sin(t.sunAngle))*(1-.65*t.cloud)*(t.rain?.6:1),t.rh=Ed(Od.rh-1.5*(t.airTemp-Od.mean)+25*t.cloud+25*t.rain,10,100)}var Fd={provinces:[{id:`erbil`,nameAr:`أربيل (هەولێر)`,nameEn:`Erbil`,agroZone:`northern_mountains`,agroZoneAr:`المنطقة الشمالية والجبلية (برودة شتوية مرتفعة، أمطار غزيرة)`,averageAnnualRainfallMm:550,summerMaxTempC:43,winterMinTempC:-4,averageChillHoursBelow7C:850,predominantSoilTypeAr:`طميية كلسية طينية جبلية خصبة وغنية بالمواد العضوية`,averageGroundwaterTdsPpm:450,primaryWaterSourceAr:`عيون طبيعية وأنهار جبلية (الزاب الأعلى) وآبار عذبة`,idealChampionCropsAr:[`فستق حلبي (عاشوري، كرمان)`,`تفاح محلي وعالمي (فوجي، غالا، جولدن)`,`عنب حلواني وكمالي`,`جوز ولوز وتين`,`رمان`,`مشمش قيسي`,`كرز`],challengingCropsAr:[`موز مكشوف`,`حمضيات استوائية شديدة الحساسية للتجمد`],specialAgroAdvisoriesAr:[`مثالية لأشجار الفاكهة متساقطة الأوراق التي تتطلب ساعات برودة شتوية عالية تتجاوز 700-900 ساعة.`,`ضرورة اتباع مصدات الرياح لحماية حقول العنب والتفاح في الربيع من الصقيع المتأخر.`]},{id:`sulaymaniyah`,nameAr:`السليمانية (سلێمانی)`,nameEn:`Sulaymaniyah`,agroZone:`northern_mountains`,agroZoneAr:`المنطقة الشمالية الجبلية العالية`,averageAnnualRainfallMm:680,summerMaxTempC:41,winterMinTempC:-6,averageChillHoursBelow7C:1100,predominantSoilTypeAr:`طينية كلسية جيدة البناء والتهوية`,averageGroundwaterTdsPpm:380,primaryWaterSourceAr:`ينابيع جبلية وبحيرة دوكان ونهر ديالى/سيروان`,idealChampionCropsAr:[`عنب ديشميري وحلواني عالي السكر`,`تفاح شتوي`,`جوز جبلي`,`فستق حلبي`,`كرز وبير وقراصيا`,`فراولة جبلية`],challengingCropsAr:[`أشجار النخيل الحساسة للبرودة`,`الموز الاستوائي`],specialAgroAdvisoriesAr:[`أفضل مناطق العراق لإنتاج العنب عالي الجودة والكرز والتفاح الجبلي والتين المجفف.`,`توفير تدفئة في البيوت المحمية عند تساقط الثلوج في كانون الثاني.`]},{id:`dohuk`,nameAr:`دهوك (دهۆك)`,nameEn:`Dohuk`,agroZone:`northern_mountains`,agroZoneAr:`المنطقة الجبلية الشمالية الغربية`,averageAnnualRainfallMm:620,summerMaxTempC:42,winterMinTempC:-5,averageChillHoursBelow7C:950,predominantSoilTypeAr:`طميية رسوبية جبلية خفيفة إلى متوسطة`,averageGroundwaterTdsPpm:400,primaryWaterSourceAr:`سد دهوك وروافد نهر الخابور والعيون`,idealChampionCropsAr:[`تفاح دهوك الفاخر`,`عنب زاخو والعمادية`,`فستق حلبي`,`مشمش ولوز`,`تين جبلي`,`رمان سوردا`],challengingCropsAr:[`الحمضيات بدون حماية شتوية`,`الموز المكشوف`],specialAgroAdvisoriesAr:[`تصلح لأنظمة الزراعة المدرجة في السفوح مع شبكات تنقيط متطورة تعتمد على الجاذبية الطبيعية.`]},{id:`nineveh`,nameAr:`نينوى (الموصل وسهل نينوى وسنجار)`,nameEn:`Nineveh`,agroZone:`northern_mountains`,agroZoneAr:`المنطقة المتموجة والشمالية الغربية`,averageAnnualRainfallMm:380,summerMaxTempC:46,winterMinTempC:-2,averageChillHoursBelow7C:650,predominantSoilTypeAr:`طميية كلسية عميقة خصبة جداً`,averageGroundwaterTdsPpm:750,primaryWaterSourceAr:`نهر دجلة وسد الموصل ومشاريع الري والآبار`,idealChampionCropsAr:[`تين سنجار الشهير`,`فستق حلبي`,`زيتون بعشيقة ونينوى`,`عنب محلي`,`تفاح منخفض البرودة`,`مشمش ولوز`],challengingCropsAr:[`الموز المكشوف`,`النخيل في المرتفعات الشمالية للحدود`],specialAgroAdvisoriesAr:[`سنجار وبعشيقة تعتبر عاصمة التين والزيتون في العراق، وتصلح أراضيها تماماً لغراس الفستق واللوز المقاوم للجفاف.`]},{id:`baghdad`,nameAr:`بغداد (حزام بغداد والطارمية والمدائن)`,nameEn:`Baghdad`,agroZone:`central_mesopotamia`,agroZoneAr:`وسط السهل الرسوبي العراقي (أجواء مشمسة دافئة وتربة غرينية خصبة)`,averageAnnualRainfallMm:150,summerMaxTempC:50,winterMinTempC:2,averageChillHoursBelow7C:380,predominantSoilTypeAr:`طميية رسوبية غرينية عميقة (Alluvial Silt Loam)`,averageGroundwaterTdsPpm:1200,primaryWaterSourceAr:`نهر دجلة والفرات وجداول الري النظامية`,idealChampionCropsAr:[`حمضيات متكاملة (برتقال عراقي شربتي، ليمون حلو، نارنج، يوسفي محلي)`,`نخيل تمور (زهدي، خستاوي، مكتوم، برحي، تبرزل)`,`تفاح عراقي صيفي صلب (شربتي/أورزيني) وتفاح أنا (Anna)`,`عنب حلواني وكمالي وتومسون سيدلس`,`رمان وتين وزيتون وخوخ عراقي`,`الورد الجوري السلطاني العراقي والياسمين والفل`],challengingCropsAr:[`فستق حلبي عالي البرودة (>800 ساعة)`,`أشجار الكرز الباردة`],specialAgroAdvisoriesAr:[`تتميز بساتين بغداد بنظام الزراعة المتعددة الطبقات (Multi-Canopy): النخيل في الطبقة العليا، الحمضيات في الوسط، والورود والخضار والأعشاب في الطبقة الأرضية.`,`تطعيم كافة أصناف الحمضيات حصراً على أصل النارنج البلدي لمقاومة كلسية التربة والتصمغ.`]},{id:`diyala`,nameAr:`ديالى (بعقوبة، شهربان/المقدادية، الخالص، مندلي)`,nameEn:`Diyala`,agroZone:`central_mesopotamia`,agroZoneAr:`قلب بساتين الحمضيات والرمان في العراق (مدينة البرتقال)`,averageAnnualRainfallMm:220,summerMaxTempC:49,winterMinTempC:1,averageChillHoursBelow7C:450,predominantSoilTypeAr:`طميية غرينية رسوبية عالية الخصوبة والصرف`,averageGroundwaterTdsPpm:900,primaryWaterSourceAr:`نهر ديالى وسد حمرين ونهر مهروت والخالص`,idealChampionCropsAr:[`برتقال ديالى العراقي الشهير واليوسفي والنارنج والليمون`,`رمان شهربان الفاخر (أجود رمان في الشرق الأوسط)`,`نخيل تمور (قرنفلي، خستاوي، أشرسي، زهدي)`,`مشمش قيسي عراقي ولوزيات وتين`,`عنب محلي وتومسون`],challengingCropsAr:[`الموز المكشوف غير المظلل`],specialAgroAdvisoriesAr:[`تعتبر ديالى المرجع الأول لإنتاج الحمضيات والرمان، وتستفيد أشجار الحمضيات من ظلال النخيل المتباعدة لإنتاج ثمار ناعمة القشرة عالية العصير.`]},{id:`karbala`,nameAr:`كربلاء المقدسة (عين التمر، الحسينية، الهندية)`,nameEn:`Karbala`,agroZone:`central_mesopotamia`,agroZoneAr:`الفرات الأوسط والواحات الغربية`,averageAnnualRainfallMm:110,summerMaxTempC:51,winterMinTempC:3,averageChillHoursBelow7C:320,predominantSoilTypeAr:`غرينية رملية ورسوبية (واحات عين التمر رملية مروية بالعيون)`,averageGroundwaterTdsPpm:1800,primaryWaterSourceAr:`شط الحسينية، شط الهندية، وعيون وآبار عين التمر الجوفية`,idealChampionCropsAr:[`نخيل تمور فاخرة (برحي، إبراهيمي، شويثي، مكتوم، زهدي)`,`تين وزيتون ورمان`,`حمضيات تحت ظلال النخيل`,`فستق حلبي في المناطق الغربية الصحراوية`,`أعلاف ونباتات عطرية`],challengingCropsAr:[`محاصيل التفاح والكرز التي تحتاج برودة قارسة`],specialAgroAdvisoriesAr:[`عين التمر واحة تاريخية رائدة في زراعة النخيل المقاوم للملوحة والأشجار الصحراوية كالفستق والزيتون.`]},{id:`babil`,nameAr:`بابل (الحلة، المسيب، الهاشمية، السدة)`,nameEn:`Babil`,agroZone:`central_mesopotamia`,agroZoneAr:`مهد الزراعة البابلية القديمة والسهل الرسوبي الخصيب`,averageAnnualRainfallMm:125,summerMaxTempC:50,winterMinTempC:2,averageChillHoursBelow7C:350,predominantSoilTypeAr:`طميية رسوبية نهرية ثرية بالمعادن`,averageGroundwaterTdsPpm:1400,primaryWaterSourceAr:`شط الحلة ونهر الفرات ومشروع المسيب الكبير`,idealChampionCropsAr:[`نخيل تمور بابلية (خستاوي، زهدي، حلاوي، برحي)`,`حمضيات متنوعة ملقمة على نارنج`,`تين وزيتون وعنب`,`محاصيل حقلية وبقوليات`],challengingCropsAr:[`الفواكه الباردة جداً`],specialAgroAdvisoriesAr:[`كفاءة عالية للتربة البابلية في استجابتها للتسميد العضوي المتخمر، مع ضرورة شبكات البزل الزراعي لتفادي تراكم الملوحة.`]},{id:`anbar`,nameAr:`الأنبار (الرمادي، هيت، حديثة، القائم، الفلوجة)`,nameEn:`Anbar`,agroZone:`western_plateau`,agroZoneAr:`الهضبة الغربية وحوض وادي الفرات`,averageAnnualRainfallMm:115,summerMaxTempC:50,winterMinTempC:0,averageChillHoursBelow7C:520,predominantSoilTypeAr:`رملية طميية كلسية وجصية خفيفة جيدة الصرف`,averageGroundwaterTdsPpm:1900,primaryWaterSourceAr:`نهر الفرات، بحيرة حديثة، والآبار الجوفية العميقة`,idealChampionCropsAr:[`رمان راوة وعانة وحديثة الفاخر`,`فستق حلبي على أصل البطم الأطلسي (Pistacia atlantica)`,`زيتون شامي وإسباني ومحلي`,`نخيل تمور في وادي الفرات (أشرسي، زهدي، ديري)`,`عنب وتين`],challengingCropsAr:[`الموز وحمضيات الرطوبة العالية في المناطق الصحراوية المكشوفة`],specialAgroAdvisoriesAr:[`رمان راوة وعانة من أندر وأجود أنواع الرمان العراقي، والمناخ شبه الصحراوي مع وفرة مياه الفرات مثالي لزراعة الفستق الحلبي والزيتون.`]},{id:`basra`,nameAr:`البصرة (أبي الخصيب، القرنة، شط العرب، الزبير، الفاو)`,nameEn:`Basra`,agroZone:`southern_marshes_shatt_arab`,agroZoneAr:`جنوب العراق وشط العرب والأهوار والخليج (حرارة مرتفعة، رطوبة ساحلية، وتحدي الملوحة)`,averageAnnualRainfallMm:120,summerMaxTempC:53,winterMinTempC:6,averageChillHoursBelow7C:120,predominantSoilTypeAr:`رسوبية ملحية طينية في بساتين النخيل، ورملية في قضاء الزبير`,averageGroundwaterTdsPpm:3500,primaryWaterSourceAr:`شط العرب، مياه نهر السويب، ومحطات التحلية RO والآبار`,idealChampionCropsAr:[`نخيل تمور البصرة الفاخرة (البرحي، الحلاوي، الساير، الخضراوي، الديري، البريم، ليلوي)`,`السدر العراقي المطعم (النبق البصري والتفاحي الكشميري المقاوم للملوحة حتى 8000 ppm)`,`الموز البلدي البصري والموز الاستوائي (تحت ظلال النخيل والرطوبة الساحلية في أبي الخصيب)`,`الرمان والليمون الحامض البصري الصغير المحب للرطوبة`,`الحناء البصرية، التين، والبابايا`],challengingCropsAr:[`التفاح والكمثرى والكرز والفستق الحلبي (عدم توفر ساعات البرودة)`],specialAgroAdvisoriesAr:[`عاصمة النخيل التاريخية في العالم، تشتهر بإنتاج تمر البرحي والحلاوي الطري.`,`تطبيق برامج الري الحديث واستخدام محطات التحلية للزراعات الحساسة، والتوسع في زراعة السدر المطعم عالي المردود.`]}],calendar:[{monthIndex:1,monthNameAr:`كانون الثاني (يناير)`,provincesCoveredAr:`عموم المحافظات العراقية`,plantingTasksAr:[`غرس شتلات الفاكهة متساقطة الأوراق ملشوشة الجذور (Bare-root): العنب، التفاح، الرمان، التين، المشمش، الخوخ.`,`زراعة عقل العنب والتين والرمان المجهزة للإكثار في المشاتل.`],fertilizationTasksAr:[`إضافة الدفعة الكبرى من السماد العضوي المتخمر المعالج حرارياً (الكومبوست) بمعدل 20-40 كجم للشجرة البالغة، مضافاً إليها سوبر فوسفات الكالسيوم الثلاثي والكبريت الزراعي في خنادق دائرية.`],pruningAndGraftingTasksAr:[`التقليم الشتوي الرئيسي للكرمة (العنب) والأشجار متساقطة الأوراق (التفاح، الرمان، المشمش).`,`تطهير جروح التقليم بعجينة بوردو أو مبيد نحاسي.`],irrigationGuidanceAr:`تقليل الري إلى مرة كل 10-15 يوماً في الوسط والجنوب ووقفه في الشمال عند تساقط الأمطار والثلوج، مع رية وقائية عند توقع الصقيع لحماية الجذور.`,harvestingTasksAr:[`استكمال جني الحمضيات المتأخرة (البرتقال الفالنسيا والليمون والجريب فروت).`],criticalPestAlertsAr:[`الرش الشتوي الوقائي بالزيت المعدني الثقيل (2%) مضافاً إليه أوكسي كلوريد النحاس للقضاء على الحشرات القشرية وبيوض الأكاروسات وأبواغ الفطريات.`]},{monthIndex:2,monthNameAr:`شباط (فبراير)`,provincesCoveredAr:`عموم العراق (بدء النشاط في الجنوب والوسط ثم الشمال)`,plantingTasksAr:[`استكمال زراعة شتلات الأشجار المثمرة وفسائل النخيل المتجذرة في وسط وجنوب العراق.`,`زراعة شتلات الحمضيات المطعمة على أصل النارنج في بساتين ديالى وبغداد وكربلاء.`],fertilizationTasksAr:[`إضافة سماد الداب (DAP 18-46-0) وسلفات البوتاسيوم لتنشيط نمو الجذور قبل انتفاخ البراعم.`],pruningAndGraftingTasksAr:[`إنهاء عمليات التقليم الشتوي في الشمال.`,`بدء تطعيم الأشجار بالقلم والشق (Cleft Grafting) على أصول الحمضيات واللوزيات.`],irrigationGuidanceAr:`بدء زيادة عدد الريات تدريجياً مع ارتفاع درجات الحرارة وبدء انتفاخ العيون والبراعم الزهرية.`,harvestingTasksAr:[`جني الليمون الحلو العراقي وليمون العصير.`],criticalPestAlertsAr:[`مراقبة خروج حشرات المن وبسيلا الفستق والتفاح مع النموات الأولى، وتجهيز مصائد الفرمونات.`]},{monthIndex:3,monthNameAr:`آذار (مارس)`,provincesCoveredAr:`عموم محافظات العراق`,plantingTasksAr:[`زراعة شتلات الورود الجوري السلطاني والشجيرات العطرية والجهنمية.`,`بدء شتل الفراولة والشتلات في البيوت المحمية والحقول المفتوحة.`],fertilizationTasksAr:[`حقن سماد متوازن NPK 20-20-20 + عناصر صغرى (حديد مخلبي Fe-EDDHA زنك ومنغنيز) مع مياه الري بالتنقيط لدعم النمو الربيعي السريع.`],pruningAndGraftingTasksAr:[`تلقيح وتنبيت طلع النخيل المؤنث بالشماريخ المذكرة (الغنامي والسميسمي) فور انشقاق الكافور في بساتين البصرة وكربلاء وبغداد.`,`التطعيم بالعين/البرعم (T-budding) في الحمضيات والفاكهة.`],irrigationGuidanceAr:`تنظيم الري خلال فترة التزهير الشامل وتجنب التعطيش المفاجئ أو الغدق الذي يسبب تساقط الأزهار.`,harvestingTasksAr:[`بداية قطف بواكير الفراولة المعلقة في البيوت البلاستيكية.`],criticalPestAlertsAr:[`رش وقائي ضد البياض الدقيقي على العنب (كبريت ميكروني) وضد المن وصانعة الأنفاق على الحمضيات.`]},{monthIndex:4,monthNameAr:`نيسان (أبريل)`,provincesCoveredAr:`وسط وجنوب وشمال العراق`,plantingTasksAr:[`زراعة شتلات الموز في بساتين البصرة وأبي الخصيب المحمية.`,`غرس النباتات الحساسة للبرودة بعد انتهاء خطر الصقيع الربيعي.`],fertilizationTasksAr:[`إضافة سماد عالي الفوسفور والبورون والكالسيوم لزيادة نسبة عقد الثمار وتثبيت الأزهار ومنع تشوه الثمار.`],pruningAndGraftingTasksAr:[`خف الثمار الزائدة في التفاح والخوخ والمشمش للحصول على أحجام تجارية ممتازة.`,`خف وتدلية عذوق النخيل بعد نجاح العقد وعقد الثمار (مرحلة الحبابوك).`],irrigationGuidanceAr:`تقارب فترات الري (كل 4-6 أيام في السهل الرسوبي) مع ازدياد درجات الحرارة السطحية.`,harvestingTasksAr:[`قطف أزهار الورد الجوري السلطاني العراقي لتقطير ماء الورد الطبيعي وصناعة المربيات.`,`استمرار حصاد الفراولة الربيعية.`],criticalPestAlertsAr:[`مكافحة دودة ثمار التفاح والرمان (فراشة الخروب) وصانعة أنفاق أوراق الحمضيات.`]},{monthIndex:5,monthNameAr:`أيار (مايو)`,provincesCoveredAr:`عموم العراق`,plantingTasksAr:[`تغطية أحواض الزراعة بالملش العضوي (قش أو ألياف النخيل) لحفظ الرطوبة وخفض حرارة التربة.`],fertilizationTasksAr:[`التحول إلى التسميد عالي البوتاسيوم (NPK 12-12-36 أو سلفات بوتاسيوم) لبدء مرحلة تحجيم وتعبئة الثمار بالسكريات.`],pruningAndGraftingTasksAr:[`التقليم الصيفي الخفيف وإزالة السرطانات والنموات المائية العمودية غير المثمرة في قلب الأشجار.`],irrigationGuidanceAr:`الري في الصباح الباكر أو بعد غروب الشمس فقط، مع زيادة الكميات لتعويض البخر المرتفع.`,harvestingTasksAr:[`جني المشمش القيسي العراقي واللوز الأخضر، وبواكير الخوخ والتوت الشامي الأسود.`],criticalPestAlertsAr:[`مراقبة حلم الغبار (الغبير) على عذوق النخيل والتعفير بالكبريت الميكروني فوراً قبل تفاقمه.`]},{monthIndex:6,monthNameAr:`حزيران (يونيو)`,provincesCoveredAr:`وسط وجنوب العراق`,plantingTasksAr:[`تجنب غرس الأشجار المكشوفة خلال هذا الشهر لتفادي الإجهاد الحراري الشديد.`],fertilizationTasksAr:[`رش الكالسيوم المخلبي الورقي لمنع ظاهرة عفن الطرف الزهري وتشقق ثمار الرمان والحمضيات.`],pruningAndGraftingTasksAr:[`تكييس وتغطية عذوق النخيل في الأصناف الحساسة وتركيب الشباك الواقية من الطيور والدبابير.`],irrigationGuidanceAr:`ري يومي أو شبه يومي في البصرة والجنوب، مع ضمان تشغيل منظومات الرذاذ الضبابي للموز والبيوت المحمية.`,harvestingTasksAr:[`جني التفاح الصيفي العراقي (الشربتي والأورزيني) وبواكير عنب الحلواني والكمالي.`],criticalPestAlertsAr:[`مكافحة سوسة النخيل الحمراء بالمصائد الفرمونية، والوقاية من ذبابة الفاكهة (ذبابة ثمار البحر المتوسط).`]},{monthIndex:7,monthNameAr:`تموز (يوليو)`,provincesCoveredAr:`عموم العراق (ذروة الصيف اللاهب)`,plantingTasksAr:[`حماية سيقان الأشجار الفتية بطلائها بالشيد (الجير المائي المخفف + قليل من كبريتات النحاس) لمنع احتراق اللحاء من الشمس.`],fertilizationTasksAr:[`تسميد متوازن منخفض النيتروجين مع سلفات المغنيسيوم للحفاظ على حيوية الكلوروفيل في الأوراق.`],pruningAndGraftingTasksAr:[`تثبيت ودعم أفرع أشجار الرمان والعنب المحملة بالثمار الثقيلة لمنع انكسارها بفعل الرياح والوزن.`],irrigationGuidanceAr:`الري الليلي العميق لتبريد منطقة الجذور وتفادي تراكم الأملاح حول الشعيرات الجذرية.`,harvestingTasksAr:[`بدء موسم الرطب العراقي (بواكير النخيل: المكتوم، الخستاوي، الحلاوي، البريم، الغنامي).`,`جني التين الوزيري والشويكي الأسود، وذروة قطاف العنب العراقي والسلطانين.`],criticalPestAlertsAr:[`مكافحة ذبابة ثمار الزيتون والخوخ، ومراقبة العنكبوت الأحمر على الحمضيات والورود.`]},{monthIndex:8,monthNameAr:`آب (أغسطس)`,provincesCoveredAr:`عموم العراق`,plantingTasksAr:[`تجهيز الجور وحفر الزراعة لموسم الغرس الخريفي وتهوية التربة وتشميسها.`],fertilizationTasksAr:[`إيقاف التسميد النتروجيني تماماً وتكثيف البوتاسيوم لرفع تركيز السكريات واللون المميز في الثمار.`],pruningAndGraftingTasksAr:[`التطعيم الدرعي الخريفي المتأخر في المشاتل بعد انكسار حدة الحرارة في أواخر الشهر.`],irrigationGuidanceAr:`المحافظة على وتيرة ري منتظمة وثابتة بدون انقطاع لمنع تشقق ثمار الرمان والبلح.`,harvestingTasksAr:[`ذروة موسم رطب البرحي العراقي الشهير وتمر الخلاص والساير والزهدي.`,`جني فستق الحلبي في المزارع الشمالية والهضبة الغربية (اكتمال انفراج القشرة الخشبية).`],criticalPestAlertsAr:[`مكافحة دبابير الثمار ودودة البلح الصغرى في العذوق.`]},{monthIndex:9,monthNameAr:`أيلول (سبتمبر)`,provincesCoveredAr:`عموم محافظات العراق (اعتدال الطقس)`,plantingTasksAr:[`بدء موسم الغرس الخريفي الممتاز للنخيل والأشجار مستديمة الخضرة (حمضيات، زيتون، سدر مطعم).`,`زراعة شتلات الفراولة للموسم الإنتاجي الشتوي والربيعي.`],fertilizationTasksAr:[`إضافة الأسمدة الفوسفاتية والبوتاسية بطيئة الذوبان لتقوية الجذور استعداداً للشتاء.`],pruningAndGraftingTasksAr:[`تنظيف النخيل بعد الجداد (القصاص والتكريب وإزالة العراجين القديمة).`],irrigationGuidanceAr:`تقليل فترات الري تدريجياً تماشياً مع قصر ساعات النهار وتراجع درجات الحرارة.`,harvestingTasksAr:[`موسم جداد التمور المكنوزة الكبرى (تمر الزهدي والديري والأشرسي).`,`بدء قطاف رمان شهربان وديالى وراوة الفاخر وتفاح دهوك والسليمانية.`],criticalPestAlertsAr:[`مكافحة صانعة أنفاق الحمضيات على النموات الخريفية الجديدة.`]},{monthIndex:10,monthNameAr:`تشرين الأول (أكتوبر)`,provincesCoveredAr:`عموم العراق`,plantingTasksAr:[`زراعة عقل الورد الجوري السلطاني في التربة الرملية المسمدة.`,`زراعة بذور الأصول المقاومة (بذور النارنج، البطم، اللوز المر) في أحواض الإنبات بالمشاتل.`],fertilizationTasksAr:[`رش العناصر الصغرى والزنك لتجهيز البراعم الشتوية لمقاومة البرودة.`],pruningAndGraftingTasksAr:[`إزالة الأفرع الجافة والمصابة بعد انتهاء جني المحاصيل الصيفية.`],irrigationGuidanceAr:`ري كل 5-8 أيام مع مراقبة رطوبة التربة الفعلية.`,harvestingTasksAr:[`جني الزيتون للتخليل وعصر زيت الزيتون البكر.`,`بواكير نضج الليمون الحامض واليوسفي والبرتقال الشربتي العراقي.`],criticalPestAlertsAr:[`رش وقائي نحاسي لحماية أشجار الفاكهة بعد سقوط الأوراق الأولى ضد الفطريات والبكتيريا.`]},{monthIndex:11,monthNameAr:`تشرين الثاني (نوفمبر)`,provincesCoveredAr:`عموم العراق`,plantingTasksAr:[`زراعة شتلات مصدات الرياح (الكازوارينا والأثل والكينيا) حول حدود المزارع والبساتين.`],fertilizationTasksAr:[`البدء بفتح خنادق التسميد الشتوي العضوي ودفن السماد المتخمر.`],pruningAndGraftingTasksAr:[`تجهيز المقصات والمناشير وتعقيمها استعداداً لموسم التقليم الشتوي العام.`],irrigationGuidanceAr:`مباعدة فترات الري إلى مرة كل 8-12 يوماً مع بدء موسم الأمطار الخريفية.`,harvestingTasksAr:[`ذروة موسم الحمضيات العراقية (البرتقال الشربتي، النارنج، اليوسفي، الليمون الحلو).`],criticalPestAlertsAr:[`فحص الجذوع لكشف أي إفرازات صمغية ومعالجتها بمبيد ألييت وعجينة بوردو.`]},{monthIndex:12,monthNameAr:`كانون الأول (ديسمبر)`,provincesCoveredAr:`عموم العراق (دخول السكون الشتوي)`,plantingTasksAr:[`تقليع وتجهيز شتلات الفاكهة متساقطة الأوراق في المشاتل لتوزيعها ملشوشة الجذور.`],fertilizationTasksAr:[`استكمال التسميد العضوي الشتوي وسوبر فوسفات الكالسيوم والكبريت الزراعي.`],pruningAndGraftingTasksAr:[`بدء التقليم الشتوي في وسط وجنوب العراق بعد سكون العصارة وتساقط الأوراق بالكامل.`],irrigationGuidanceAr:`ري خفيف ومتباعد جداً لمنع تعفن الجذور في التربة الرطبة الباردة.`,harvestingTasksAr:[`استمرار جني البرتقال أبو صرة واليوسفي الكلمنتينا والجريب فروت الأحمر.`],criticalPestAlertsAr:[`الرش الشتوي التطهيري الشامل بالزيت المعدني والمبيدات النحاسية.`]}]},Id=Fd.provinces,Ld=Fd.calendar,Rd=e=>Id.find(t=>`iq_`+t.id===e),zd={sqm:[`متر مربع`,1],donum_iraqi:[`دونم عراقي`,2500],hectare:[`هكتار`,1e4],donum_shami:[`دونم شامي`,1e3],feddan:[`فدان`,4200],acre:[`إيكر`,4046.86]},Bd=(e,t)=>e*(zd[t]?.[1]??1),Vd=e=>e.predominantSoilTypeAr.includes(`طميي`)?`loam`:e.predominantSoilTypeAr.includes(`طين`)?`clay`:e.predominantSoilTypeAr.includes(`رمل`)?`sand`:`loam`,Hd=e=>+(e.averageGroundwaterTdsPpm/640).toFixed(2),Ud={wheat:6,barley:8,corn:1.7,tomato:2.5,pepper:1.5,strawberry:1,cucumber:2.5,watermelon:2.2,potato:1.7,carrot:1,onion:1.2,sunflower:4.8,sugarcane:1.7,eggplant:1.1,okra:1.2,beans:1,pumpkin:3,zucchini:4.7,lettuce:1.3,cabbage:1.8,spinach:2,radish:1.2,beet:7,garlic:1.7};for(let[e,t]of Object.entries(q))t.salt!=null&&(Ud[e]=t.salt);for(let e of Id){let t=e.summerMaxTempC-12,n=e.winterMinTempC+7,r=e.agroZone.startsWith(`southern`);Cd[`iq_`+e.id]={name:`العراق — `+e.nameAr.split(` (`)[0],mean:(t+n)/2,swing:(t-n)/2,amp:e.agroZone.startsWith(`northern`)?7:e.agroZone.startsWith(`western`)?10:8,rh:r?42:Math.max(25,Math.min(62,28+e.averageAnnualRainfallMm/18)),rain:Math.max(.02,Math.min(.34,e.averageAnnualRainfallMm/2e3)),ec:Hd(e)}}var Wd=(e,t)=>e.mean+e.swing*Math.cos(2*Math.PI*(t*30.4-15-200)/365),Gd=(e,t)=>Math.max(0,1-.15*Math.max(0,t-(Ud[e]??2)));function Kd(e,t,n){let r=Cd[t],i=Rd(t);if(!r||!q[e])return 0;let a=$u(Wd(r,n),q[e].t)*Gd(e,r.ec??1),o=i?.idealChampionCropsAr.some(t=>t.includes(q[e].name))?.15:0;return a>0?Math.min(1,a+o):0}var qd=e=>Ld.find(t=>t.monthIndex===e);function Jd(e,t){if(t===0)return console.warn(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`),e;if(t===2||t===1){let n=e.getIndex();if(n===null){let t=[],r=e.getAttribute(`position`);if(r!==void 0){for(let e=0;e<r.count;e++)t.push(e);e.setIndex(t),n=e.getIndex()}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`),e}let r=n.count-2,i=[];if(t===2)for(let e=1;e<=r;e++)i.push(n.getX(0)),i.push(n.getX(e)),i.push(n.getX(e+1));else for(let e=0;e<r;e++)e%2==0?(i.push(n.getX(e)),i.push(n.getX(e+1)),i.push(n.getX(e+2))):(i.push(n.getX(e+2)),i.push(n.getX(e+1)),i.push(n.getX(e)));return i.length/3!==r&&console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`),e.setIndex(i),e.clearGroups(),e}return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,t),e}function Yd(e,t=Math.PI/3){let n=e.index?e.toNonIndexed():e,r=n.attributes.position,i=r.count,a;if(r.isBufferAttribute===!0&&r.itemSize===3&&r.normalized===!1)a=r.array;else{a=new Float64Array(i*3);for(let e=0;e<i;e++)a[3*e+0]=r.getX(e),a[3*e+1]=r.getY(e),a[3*e+2]=r.getZ(e)}let o=Math.cos(t),s=(1+1e-10)*100,c=i/3,l=new Float64Array(c*3);for(let e=0;e<c;e++){let t=9*e,n=a[t+0],r=a[t+1],i=a[t+2],o=a[t+3],s=a[t+4],c=a[t+5],u=a[t+6],d=a[t+7],f=a[t+8],p=u-o,m=d-s,h=f-c,g=n-o,_=r-s,v=i-c,y=m*v-h*_,b=h*g-p*v,x=p*_-m*g,S=1/(Math.sqrt(y*y+b*b+x*x)||1);l[3*e+0]=y*S,l[3*e+1]=b*S,l[3*e+2]=x*S}let u=new Int32Array(i),d=new Float64Array(i*3),f=1;for(;f<i*2;)f<<=1;let p=f-1,m=new Int32Array(f),h=0;for(let e=0;e<i;e++){let t=3*e,n=Math.trunc(a[t+0]*s),r=Math.trunc(a[t+1]*s),i=Math.trunc(a[t+2]*s),o=(Math.imul(n,73856093)^Math.imul(r,19349663)^Math.imul(i,83492791))&p;for(;;){let t=m[o];if(t===0){let t=3*h;d[t+0]=n,d[t+1]=r,d[t+2]=i,m[o]=h+1,u[e]=h++;break}let a=3*(t-1);if(d[a+0]===n&&d[a+1]===r&&d[a+2]===i){u[e]=t-1;break}o=o+1&p}}let g=new Int32Array(h+1);for(let e=0;e<i;e++)g[u[e]+1]++;for(let e=0;e<h;e++)g[e+1]+=g[e];let _=new Int32Array(i),v=g.slice(0,h);for(let e=0;e<c;e++){let t=3*e;_[v[u[t+0]]++]=e,_[v[u[t+1]]++]=e,_[v[u[t+2]]++]=e}let y=new Float32Array(i*3);for(let e=0;e<c;e++){let t=3*e,n=l[t+0],r=l[t+1],i=l[t+2];for(let e=0;e<3;e++){let a=t+e,s=u[a],c=0,d=0,f=0;for(let e=g[s],t=g[s+1];e<t;e++){let t=3*_[e],a=l[t+0],s=l[t+1],u=l[t+2];n*a+r*s+i*u>o&&(c+=a,d+=s,f+=u)}let p=1/(Math.sqrt(c*c+d*d+f*f)||1);y[3*a+0]=c*p,y[3*a+1]=d*p,y[3*a+2]=f*p}}return n.setAttribute(`normal`,new vr(y,3,!1)),n}function Xd(e){let t=new Map,n=new Map,r=e.clone();return Zd(e,r,function(e,r){t.set(r,e),n.set(e,r)}),r.traverse(function(e){if(!e.isSkinnedMesh)return;let r=e,i=t.get(e),a=i.skeleton.bones;r.skeleton=i.skeleton.clone(),r.bindMatrix.copy(i.bindMatrix),r.skeleton.bones=a.map(function(e){return n.get(e)}),r.bind(r.skeleton,r.bindMatrix)}),r}function Zd(e,t,n){n(e,t);for(let r=0;r<e.children.length;r++)Zd(e.children[r],t.children[r],n)}var Qd=class extends Do{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new of(e)}),this.register(function(e){return new sf(e)}),this.register(function(e){return new gf(e)}),this.register(function(e){return new _f(e)}),this.register(function(e){return new vf(e)}),this.register(function(e){return new lf(e)}),this.register(function(e){return new uf(e)}),this.register(function(e){return new df(e)}),this.register(function(e){return new ff(e)}),this.register(function(e){return new af(e)}),this.register(function(e){return new pf(e)}),this.register(function(e){return new cf(e)}),this.register(function(e){return new hf(e)}),this.register(function(e){return new mf(e)}),this.register(function(e){return new nf(e)}),this.register(function(e){return new yf(e,tf.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new yf(e,tf.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new bf(e)})}load(e,t,n,r){let i=this,a;if(this.resourcePath!==``)a=this.resourcePath;else if(this.path!==``){let t=ts.extractUrlBase(e);a=ts.resolveURL(t,this.path)}else a=ts.extractUrlBase(e);this.manager.itemStart(e);let o=function(t){r?r(t):console.error(t),i.manager.itemError(e),i.manager.itemEnd(e)},s=new Ao(this.manager);s.setPath(this.path),s.setResponseType(`arraybuffer`),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(n){try{i.parse(n,a,function(n){t(n),i.manager.itemEnd(e)},o)}catch(e){o(e)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let i,a={},o={},s=new TextDecoder;if(typeof e==`string`)i=JSON.parse(e);else if(e instanceof ArrayBuffer){if(s.decode(new Uint8Array(e,0,4))===xf){try{a[tf.KHR_BINARY_GLTF]=new wf(e)}catch(e){r&&r(e);return}i=JSON.parse(a[tf.KHR_BINARY_GLTF].content)}else i=JSON.parse(s.decode(e))}else i=e;if(i.asset===void 0||i.asset.version[0]<2){r&&r(Error(`THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`));return}let c=new Xf(i,{path:t||this.resourcePath||``,crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let e=0;e<this.pluginCallbacks.length;e++){let t=this.pluginCallbacks[e](c);t.name||console.error(`THREE.GLTFLoader: Invalid plugin found: missing name`),o[t.name]=t,a[t.name]=!0}if(i.extensionsUsed)for(let e=0;e<i.extensionsUsed.length;++e){let t=i.extensionsUsed[e],n=i.extensionsRequired||[];switch(t){case tf.KHR_MATERIALS_UNLIT:a[t]=new rf;break;case tf.KHR_DRACO_MESH_COMPRESSION:a[t]=new Tf(i,this.dracoLoader);break;case tf.KHR_TEXTURE_TRANSFORM:a[t]=new Ef;break;case tf.KHR_MESH_QUANTIZATION:a[t]=new Df;break;default:n.indexOf(t)>=0&&o[t]===void 0&&console.warn(`THREE.GLTFLoader: Unknown extension "`+t+`".`)}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,i){n.parse(e,t,r,i)})}};function $d(){let e={};return{get:function(t){return e[t]},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function ef(e,t,n){let r=e.json.materials[t];return r.extensions&&r.extensions[n]?r.extensions[n]:null}var tf={KHR_BINARY_GLTF:`KHR_binary_glTF`,KHR_DRACO_MESH_COMPRESSION:`KHR_draco_mesh_compression`,KHR_LIGHTS_PUNCTUAL:`KHR_lights_punctual`,KHR_MATERIALS_CLEARCOAT:`KHR_materials_clearcoat`,KHR_MATERIALS_DISPERSION:`KHR_materials_dispersion`,KHR_MATERIALS_IOR:`KHR_materials_ior`,KHR_MATERIALS_SHEEN:`KHR_materials_sheen`,KHR_MATERIALS_SPECULAR:`KHR_materials_specular`,KHR_MATERIALS_TRANSMISSION:`KHR_materials_transmission`,KHR_MATERIALS_IRIDESCENCE:`KHR_materials_iridescence`,KHR_MATERIALS_ANISOTROPY:`KHR_materials_anisotropy`,KHR_MATERIALS_UNLIT:`KHR_materials_unlit`,KHR_MATERIALS_VOLUME:`KHR_materials_volume`,KHR_TEXTURE_BASISU:`KHR_texture_basisu`,KHR_TEXTURE_TRANSFORM:`KHR_texture_transform`,KHR_MESH_QUANTIZATION:`KHR_mesh_quantization`,KHR_MATERIALS_EMISSIVE_STRENGTH:`KHR_materials_emissive_strength`,EXT_MATERIALS_BUMP:`EXT_materials_bump`,EXT_TEXTURE_WEBP:`EXT_texture_webp`,EXT_TEXTURE_AVIF:`EXT_texture_avif`,EXT_MESHOPT_COMPRESSION:`EXT_meshopt_compression`,KHR_MESHOPT_COMPRESSION:`KHR_meshopt_compression`,EXT_MESH_GPU_INSTANCING:`EXT_mesh_gpu_instancing`},nf=class{constructor(e){this.parser=e,this.name=tf.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n=`light:`+e,r=t.cache.get(n);if(r)return r;let i=t.json,a=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e],o,s=new W(16777215);a.color!==void 0&&s.setRGB(a.color[0],a.color[1],a.color[2],Ue);let c=a.range===void 0?0:a.range;switch(a.type){case`directional`:o=new es(s),o.target.position.set(0,0,-1),o.add(o.target);break;case`point`:o=new Zo(s),o.distance=c;break;case`spot`:o=new Yo(s),o.distance=c,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle===void 0?0:a.spot.innerConeAngle,a.spot.outerConeAngle=a.spot.outerConeAngle===void 0?Math.PI/4:a.spot.outerConeAngle,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw Error(`THREE.GLTFLoader: Unexpected light type: `+a.type)}return o.position.set(0,0,0),Hf(o,a),a.intensity!==void 0&&(o.intensity=a.intensity),o.name=t.createUniqueName(a.name||`light_`+e),r=Promise.resolve(o),t.cache.add(n,r),r}getDependency(e,t){if(e===`light`)return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],i=(r.extensions&&r.extensions[this.name]||{}).light;return i===void 0?null:this._loadLight(i).then(function(e){return n._getNodeRef(t.cache,i,e)})}},rf=class{constructor(){this.name=tf.KHR_MATERIALS_UNLIT}getMaterialType(){return ui}extendParams(e,t,n){let r=[];e.color=new W(1,1,1),e.opacity=1;let i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){let t=i.baseColorFactor;e.color.setRGB(t[0],t[1],t[2],Ue),e.opacity=t[3]}i.baseColorTexture!==void 0&&r.push(n.assignTexture(e,`map`,i.baseColorTexture,He))}return Promise.all(r)}},af=class{constructor(e){this.parser=e,this.name=tf.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=ef(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},of=class{constructor(e){this.parser=e,this.name=tf.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return ef(this.parser,e,this.name)===null?null:Ya}extendMaterialParams(e,t){let n=ef(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatMap`,n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatRoughnessMap`,n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,`clearcoatNormalMap`,n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let e=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new B(e,e)}return Promise.all(r)}},sf=class{constructor(e){this.parser=e,this.name=tf.KHR_MATERIALS_DISPERSION}getMaterialType(e){return ef(this.parser,e,this.name)===null?null:Ya}extendMaterialParams(e,t){let n=ef(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion===void 0?0:n.dispersion),Promise.resolve()}},cf=class{constructor(e){this.parser=e,this.name=tf.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return ef(this.parser,e,this.name)===null?null:Ya}extendMaterialParams(e,t){let n=ef(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceMap`,n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceThicknessMap`,n.iridescenceThicknessTexture)),Promise.all(r)}},lf=class{constructor(e){this.parser=e,this.name=tf.KHR_MATERIALS_SHEEN}getMaterialType(e){return ef(this.parser,e,this.name)===null?null:Ya}extendMaterialParams(e,t){let n=ef(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new W(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let e=n.sheenColorFactor;t.sheenColor.setRGB(e[0],e[1],e[2],Ue)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenColorMap`,n.sheenColorTexture,He)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenRoughnessMap`,n.sheenRoughnessTexture)),Promise.all(r)}},uf=class{constructor(e){this.parser=e,this.name=tf.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return ef(this.parser,e,this.name)===null?null:Ya}extendMaterialParams(e,t){let n=ef(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,`transmissionMap`,n.transmissionTexture)),Promise.all(r)}},df=class{constructor(e){this.parser=e,this.name=tf.KHR_MATERIALS_VOLUME}getMaterialType(e){return ef(this.parser,e,this.name)===null?null:Ya}extendMaterialParams(e,t){let n=ef(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor===void 0?0:n.thicknessFactor,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`thicknessMap`,n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let i=n.attenuationColor||[1,1,1];return t.attenuationColor=new W().setRGB(i[0],i[1],i[2],Ue),Promise.all(r)}},ff=class{constructor(e){this.parser=e,this.name=tf.KHR_MATERIALS_IOR}getMaterialType(e){return ef(this.parser,e,this.name)===null?null:Ya}extendMaterialParams(e,t){let n=ef(this.parser,e,this.name);return n===null||(t.ior=n.ior===void 0?1.5:n.ior,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},pf=class{constructor(e){this.parser=e,this.name=tf.KHR_MATERIALS_SPECULAR}getMaterialType(e){return ef(this.parser,e,this.name)===null?null:Ya}extendMaterialParams(e,t){let n=ef(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor===void 0?1:n.specularFactor,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularIntensityMap`,n.specularTexture));let i=n.specularColorFactor||[1,1,1];return t.specularColor=new W().setRGB(i[0],i[1],i[2],Ue),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularColorMap`,n.specularColorTexture,He)),Promise.all(r)}},mf=class{constructor(e){this.parser=e,this.name=tf.EXT_MATERIALS_BUMP}getMaterialType(e){return ef(this.parser,e,this.name)===null?null:Ya}extendMaterialParams(e,t){let n=ef(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor===void 0?1:n.bumpFactor,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,`bumpMap`,n.bumpTexture)),Promise.all(r)}},hf=class{constructor(e){this.parser=e,this.name=tf.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return ef(this.parser,e,this.name)===null?null:Ya}extendMaterialParams(e,t){let n=ef(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,`anisotropyMap`,n.anisotropyTexture)),Promise.all(r)}},gf=class{constructor(e){this.parser=e,this.name=tf.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let i=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures`);return null}return t.loadTextureImage(e,i.source,a)}},_f=class{constructor(e){this.parser=e,this.name=tf.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},vf=class{constructor(e){this.parser=e,this.name=tf.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},yf=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let e=n.extensions[this.name],r=this.parser.getDependency(`buffer`,e.buffer),i=this.parser.options.meshoptDecoder;if(!i||!i.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files`);return null}return r.then(function(t){let n=e.byteOffset||0,r=e.byteLength||0,a=e.count,o=e.byteStride,s=new Uint8Array(t,n,r);return i.decodeGltfBufferAsync?i.decodeGltfBufferAsync(a,o,s,e.mode,e.filter).then(function(e){return e.buffer}):i.ready.then(function(){let t=new ArrayBuffer(a*o);return i.decodeGltfBuffer(new Uint8Array(t),a,o,s,e.mode,e.filter),t})})}return null}},bf=class{constructor(e){this.name=tf.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let e of r.primitives)if(e.mode!==jf.TRIANGLES&&e.mode!==jf.TRIANGLE_STRIP&&e.mode!==jf.TRIANGLE_FAN&&e.mode!==void 0)return null;let i=n.extensions[this.name].attributes,a=[],o={};for(let e in i)a.push(this.parser.getDependency(`accessor`,i[e]).then(t=>(o[e]=t,o[e])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(e=>{let t=e.pop(),n=t.isGroup?t.children:[t],r=e[0].count,i=[];for(let e of n){let t=new U,n=new V,a=new Nt,s=new V(1,1,1),c=new qi(e.geometry,e.material,r);for(let e=0;e<r;e++)o.TRANSLATION&&n.fromBufferAttribute(o.TRANSLATION,e),o.ROTATION&&a.fromBufferAttribute(o.ROTATION,e),o.SCALE&&s.fromBufferAttribute(o.SCALE,e),c.setMatrixAt(e,t.compose(n,a,s));let l=null;for(let e in o)if(e===`_COLOR_0`){let t=o[e];c.instanceColor=new zi(t.array,t.itemSize,t.normalized)}else if(e!==`TRANSLATION`&&e!==`ROTATION`&&e!==`SCALE`){if(l===null){let e=c.geometry;l=new Nr,l.name=e.name;for(let t in e.attributes)l.setAttribute(t,e.attributes[t]);for(let t in e.morphAttributes)l.morphAttributes[t]=e.morphAttributes[t];e.index!==null&&l.setIndex(e.index),l.morphTargetsRelative=e.morphTargetsRelative;for(let t of e.groups)l.addGroup(t.start,t.count,t.materialIndex);e.boundingBox!==null&&(l.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(l.boundingSphere=e.boundingSphere.clone()),l.drawRange.start=e.drawRange.start,l.drawRange.count=e.drawRange.count,l.userData=Object.assign({},e.userData),c.geometry=l}let t=o[e];l.setAttribute(e,new zi(t.array,t.itemSize,t.normalized))}kn.prototype.copy.call(c,e),this.parser.assignFinalMaterial(c),i.push(c)}return t.isGroup?(t.clear(),t.add(...i),t):i[0]}))}},xf=`glTF`,Sf=12,Cf={JSON:1313821514,BIN:5130562},wf=class{constructor(e){this.name=tf.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Sf),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==xf)throw Error(`THREE.GLTFLoader: Unsupported glTF-Binary header.`);if(this.header.version<2)throw Error(`THREE.GLTFLoader: Legacy binary file detected.`);let r=this.header.length-Sf,i=new DataView(e,Sf),a=0;for(;a<r;){let t=i.getUint32(a,!0);a+=4;let r=i.getUint32(a,!0);if(a+=4,r===Cf.JSON){let r=new Uint8Array(e,Sf+a,t);this.content=n.decode(r)}else if(r===Cf.BIN){let n=Sf+a;this.body=e.slice(n,n+t)}a+=t}if(this.content===null)throw Error(`THREE.GLTFLoader: JSON content not found.`)}},Tf=class{constructor(e,t){if(!t)throw Error(`THREE.GLTFLoader: No DRACOLoader instance provided.`);this.name=tf.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,i=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},s={},c={};for(let e in a){let t=If[e]||e.toLowerCase();o[t]=a[e]}for(let t in e.attributes){let r=If[t]||t.toLowerCase();if(a[t]!==void 0){let i=n.accessors[e.attributes[t]];c[r]=Mf[i.componentType].name,s[r]=i.normalized===!0}}return t.getDependency(`bufferView`,i).then(function(e){return new Promise(function(t,n){r.decodeDracoFile(e,function(e){for(let t in e.attributes){let n=e.attributes[t],r=s[t];r!==void 0&&(n.normalized=r)}t(e)},o,c,Ue,n)})})}},Ef=class{constructor(){this.name=tf.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let t=Math.cos(e.rotation),n=Math.sin(e.rotation);e.matrix.set(e.repeat.x*t,e.repeat.y*n,e.offset.x,-e.repeat.x*n,e.repeat.y*t,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Df=class{constructor(){this.name=tf.KHR_MESH_QUANTIZATION}},Of=class extends ro{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r*3+r;for(let e=0;e!==r;e++)t[e]=n[i+e];return t}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=o*2,c=o*3,l=r-t,u=(n-t)/l,d=u*u,f=d*u,p=e*c,m=p-c,h=-2*f+3*d,g=f-d,_=1-h,v=g-d+u;for(let e=0;e!==o;e++){let t=a[m+e+o],n=a[m+e+s]*l,r=a[p+e+o],c=a[p+e]*l;i[e]=_*t+v*n+h*r+g*c}return i}},kf=new Nt,Af=class extends Of{interpolate_(e,t,n,r){let i=super.interpolate_(e,t,n,r);return kf.fromArray(i).normalize().toArray(i),i}},jf={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Mf={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Nf={9728:o,9729:l,9984:s,9985:u,9986:c,9987:d},Pf={33071:i,33648:a,10497:r},Ff={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},If={POSITION:`position`,NORMAL:`normal`,TANGENT:`tangent`,TEXCOORD_0:`uv`,TEXCOORD_1:`uv1`,TEXCOORD_2:`uv2`,TEXCOORD_3:`uv3`,COLOR_0:`color`,WEIGHTS_0:`skinWeight`,JOINTS_0:`skinIndex`},Lf={scale:`scale`,translation:`position`,rotation:`quaternion`,weights:`morphTargetInfluences`},Rf={CUBICSPLINE:void 0,LINEAR:Ie,STEP:Fe},zf={OPAQUE:`OPAQUE`,MASK:`MASK`,BLEND:`BLEND`};function Bf(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new Ja({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),e.DefaultMaterial}function Vf(e,t,n){for(let r in n.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=n.extensions[r])}function Hf(e,t){t.extras!==void 0&&(typeof t.extras==`object`?Object.assign(e.userData,t.extras):console.warn(`THREE.GLTFLoader: Ignoring primitive type .extras, `+t.extras))}function Uf(e,t,n){let r=!1,i=!1,a=!1;for(let e=0,n=t.length;e<n;e++){let n=t[e];if(n.POSITION!==void 0&&(r=!0),n.NORMAL!==void 0&&(i=!0),n.COLOR_0!==void 0&&(a=!0),r&&i&&a)break}if(!r&&!i&&!a)return Promise.resolve(e);let o=[],s=[],c=[];for(let l=0,u=t.length;l<u;l++){let u=t[l];if(r){let t=u.POSITION===void 0?e.attributes.position:n.getDependency(`accessor`,u.POSITION);o.push(t)}if(i){let t=u.NORMAL===void 0?e.attributes.normal:n.getDependency(`accessor`,u.NORMAL);s.push(t)}if(a){let t=u.COLOR_0===void 0?e.attributes.color:n.getDependency(`accessor`,u.COLOR_0);c.push(t)}}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(c)]).then(function(t){let n=t[0],o=t[1],s=t[2];return r&&(e.morphAttributes.position=n),i&&(e.morphAttributes.normal=o),a&&(e.morphAttributes.color=s),e.morphTargetsRelative=!0,e})}function Wf(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let n=0,r=t.weights.length;n<r;n++)e.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){let n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(let t=0,r=n.length;t<r;t++)e.morphTargetDictionary[n[t]]=t}else console.warn(`THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.`)}}function Gf(e){let t,n=e.extensions&&e.extensions[tf.KHR_DRACO_MESH_COMPRESSION];if(t=n?`draco:`+n.bufferView+`:`+n.indices+`:`+Kf(n.attributes):e.indices+`:`+Kf(e.attributes)+`:`+e.mode,e.targets!==void 0)for(let n=0,r=e.targets.length;n<r;n++)t+=`:`+Kf(e.targets[n]);return t}function Kf(e){let t=``,n=Object.keys(e).sort();for(let r=0,i=n.length;r<i;r++)t+=n[r]+`:`+e[n[r]]+`;`;return t}function qf(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error(`THREE.GLTFLoader: Unsupported normalized accessor component type.`)}}function Jf(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?`image/jpeg`:e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?`image/webp`:e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?`image/ktx2`:`image/png`}var Yf=new U,Xf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new $d,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,i=!1,a=-1;if(typeof navigator<`u`&&navigator.userAgent!==void 0){let e=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(e)===!0;let t=e.match(/Version\/(\d+)/);r=n&&t?parseInt(t[1],10):-1,i=e.indexOf(`Firefox`)>-1,a=i?e.match(/Firefox\/([0-9]+)\./)[1]:-1}this.textureLoader=typeof createImageBitmap>`u`||n&&r<17||i&&a<98?new No(this.options.manager):new rs(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ao(this.options.manager),this.fileLoader.setResponseType(`arraybuffer`),this.options.crossOrigin===`use-credentials`&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([n.getDependencies(`scene`),n.getDependencies(`animation`),n.getDependencies(`camera`)])}).then(function(t){let a={scene:t[0][r.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:r.asset,parser:n,userData:{}};return Vf(i,a,r),Hf(a,r),Promise.all(n._invokeAll(function(e){return e.afterRoot&&e.afterRoot(a)})).then(function(){for(let e of a.scenes)e.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n].joints;for(let t=0,n=r.length;t<n;t++)e[r[t]].isBone=!0}for(let t=0,r=e.length;t<r;t++){let r=e[t];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),i=(e,t)=>{let n=this.associations.get(e);n!=null&&this.associations.set(t,n);for(let[n,r]of e.children.entries())i(r,t.children[n])};return i(n,r),r.name+=`_instance_`+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let i=e(t[r]);i&&n.push(i)}return n}getDependency(e,t){let n=e+`:`+t,r=this.cache.get(n);if(!r){switch(e){case`scene`:r=this.loadScene(t);break;case`node`:r=this._invokeOne(function(e){return e.loadNode&&e.loadNode(t)});break;case`mesh`:r=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case`accessor`:r=this.loadAccessor(t);break;case`bufferView`:r=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case`buffer`:r=this.loadBuffer(t);break;case`material`:r=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case`texture`:r=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case`skin`:r=this.loadSkin(t);break;case`animation`:r=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case`camera`:r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!r)throw Error(`Unknown type: `+e)}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e===`mesh`?`es`:`s`)]||[];t=Promise.all(r.map(function(t,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!==`arraybuffer`)throw Error(`THREE.GLTFLoader: `+t.type+` buffer type is not supported.`);if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tf.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(e,i){n.load(ts.resolveURL(t.uri,r.path),e,void 0,function(){i(Error(`THREE.GLTFLoader: Failed to load buffer "`+t.uri+`".`))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency(`buffer`,t.buffer).then(function(e){let n=t.byteLength||0,r=t.byteOffset||0;return e.slice(r,r+n)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let e=Ff[r.type],t=Mf[r.componentType],n=r.normalized===!0,i=new t(r.count*e);return Promise.resolve(new vr(i,e,n))}let i=[];return r.bufferView===void 0?i.push(null):i.push(this.getDependency(`bufferView`,r.bufferView)),r.sparse!==void 0&&(i.push(this.getDependency(`bufferView`,r.sparse.indices.bufferView)),i.push(this.getDependency(`bufferView`,r.sparse.values.bufferView))),Promise.all(i).then(function(e){let i=e[0],a=Ff[r.type],o=Mf[r.componentType],s=o.BYTES_PER_ELEMENT,c=s*a,l=r.byteOffset||0,u=r.bufferView===void 0?void 0:n.bufferViews[r.bufferView].byteStride,d=r.normalized===!0,f,p;if(u&&u!==c){let e=Math.floor(l/u),n=`InterleavedBuffer:`+r.bufferView+`:`+r.componentType+`:`+e+`:`+r.count,c=t.cache.get(n);c||(f=new o(i,e*u,r.count*u/s),c=new Pr(f,u/s),t.cache.add(n,c)),p=new Ir(c,a,l%u/s,d)}else f=i===null?new o(r.count*a):new o(i,l,r.count*a),p=new vr(f,a,d);if(r.sparse!==void 0){let t=Ff.SCALAR,n=Mf[r.sparse.indices.componentType],s=r.sparse.indices.byteOffset||0,c=r.sparse.values.byteOffset||0,l=new n(e[1],s,r.sparse.count*t),u=new o(e[2],c,r.sparse.count*a);i!==null&&(p=new vr(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let e=0,t=l.length;e<t;e++){let t=l[e];if(p.setX(t,u[e*a]),a>=2&&p.setY(t,u[e*a+1]),a>=3&&p.setZ(t,u[e*a+2]),a>=4&&p.setW(t,u[e*a+3]),a>=5)throw Error(`THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.`)}p.normalized=d}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,i=t.images[r],a=this.textureLoader;if(i.uri){let e=n.manager.getHandler(i.uri);e!==null&&(a=e)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let r=this,i=this.json,a=i.textures[e],o=i.images[t],s=(o.uri||o.bufferView)+`:`+a.sampler;if(this.textureCache[s])return this.textureCache[s];let c=this.loadImageSource(t,n).then(function(t){t.flipY=!1,t.name=a.name||o.name||``,t.name===``&&typeof o.uri==`string`&&o.uri.startsWith(`data:image/`)===!1&&(t.name=o.uri);let n=(i.samplers||{})[a.sampler]||{};return t.magFilter=Nf[n.magFilter]||1006,t.minFilter=Nf[n.minFilter]||1008,t.wrapS=Pf[n.wrapS]||1e3,t.wrapT=Pf[n.wrapT]||1e3,t.generateMipmaps=!t.isCompressedTexture&&t.minFilter!==1003&&t.minFilter!==1006,r.associations.set(t,{textures:e}),t}).catch(function(){return null});return this.textureCache[s]=c,c}loadImageSource(e,t){let n=this,r=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(e=>e.clone());let a=r.images[e],o=self.URL||self.webkitURL,s=a.uri||``,c=!1;if(a.bufferView!==void 0)s=n.getDependency(`bufferView`,a.bufferView).then(function(e){c=!0;let t=new Blob([e],{type:a.mimeType});return s=o.createObjectURL(t),s});else if(a.uri===void 0)throw Error(`THREE.GLTFLoader: Image `+e+` is missing URI and bufferView`);let l=Promise.resolve(s).then(function(e){return new Promise(function(n,r){let a=n;t.isImageBitmapLoader===!0&&(a=function(e){let t=new Xt(e);t.needsUpdate=!0,n(t)}),t.load(ts.resolveURL(e,i.path),a,void 0,r)})}).then(function(e){return c===!0&&o.revokeObjectURL(s),Hf(e,a),e.userData.mimeType=a.mimeType||Jf(a.uri),e}).catch(function(e){throw console.error(`THREE.GLTFLoader: Couldn't load texture`,s),e});return this.sourceCache[e]=l,l}assignTexture(e,t,n,r){let i=this;return this.getDependency(`texture`,n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),i.extensions[tf.KHR_TEXTURE_TRANSFORM]){let e=n.extensions===void 0?void 0:n.extensions[tf.KHR_TEXTURE_TRANSFORM];if(e){let t=i.associations.get(a);a=i.extensions[tf.KHR_TEXTURE_TRANSFORM].extendTexture(a,e),i.associations.set(a,t)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let e=`PointsMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new fa,Hr.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,t.sizeAttenuation=!1,this.cache.add(e,t)),n=t}else if(e.isLine){let e=`LineBasicMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new Qi,Hr.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,this.cache.add(e,t)),n=t}if(r||i||a){let e=`ClonedMaterial:`+n.uuid+`:`;r&&(e+=`derivative-tangents:`),i&&(e+=`vertex-colors:`),a&&(e+=`flat-shading:`);let t=this.cache.get(e);t||(t=n.clone(),i&&(t.vertexColors=!0),a&&(t.flatShading=!0),r&&(t.normalScale&&(t.normalScale.y*=-1),t.clearcoatNormalScale&&(t.clearcoatNormalScale.y*=-1)),this.cache.add(e,t),this.associations.set(t,this.associations.get(n))),n=t}e.material=n}getMaterialType(){return Ja}loadMaterial(e){let t=this,n=this.json,r=this.extensions,i=n.materials[e],a,o={},s=i.extensions||{},c=[];if(s[tf.KHR_MATERIALS_UNLIT]){let e=r[tf.KHR_MATERIALS_UNLIT];a=e.getMaterialType(),c.push(e.extendParams(o,i,t))}else{let n=i.pbrMetallicRoughness||{};if(o.color=new W(1,1,1),o.opacity=1,Array.isArray(n.baseColorFactor)){let e=n.baseColorFactor;o.color.setRGB(e[0],e[1],e[2],Ue),o.opacity=e[3]}n.baseColorTexture!==void 0&&c.push(t.assignTexture(o,`map`,n.baseColorTexture,He)),o.metalness=n.metallicFactor===void 0?1:n.metallicFactor,o.roughness=n.roughnessFactor===void 0?1:n.roughnessFactor,n.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,`metalnessMap`,n.metallicRoughnessTexture)),c.push(t.assignTexture(o,`roughnessMap`,n.metallicRoughnessTexture))),a=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,o)})))}i.doubleSided===!0&&(o.side=2);let l=i.alphaMode||zf.OPAQUE;if(l===zf.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===zf.MASK&&(o.alphaTest=i.alphaCutoff===void 0?.5:i.alphaCutoff)),i.normalTexture!==void 0&&a!==ui&&(c.push(t.assignTexture(o,`normalMap`,i.normalTexture)),o.normalScale=new B(1,1),i.normalTexture.scale!==void 0)){let e=i.normalTexture.scale;o.normalScale.set(e,e)}if(i.occlusionTexture!==void 0&&a!==ui&&(c.push(t.assignTexture(o,`aoMap`,i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&a!==ui){let e=i.emissiveFactor;o.emissive=new W().setRGB(e[0],e[1],e[2],Ue)}return i.emissiveTexture!==void 0&&a!==ui&&c.push(t.assignTexture(o,`emissiveMap`,i.emissiveTexture,He)),Promise.all(c).then(function(){let n=new a(o);return i.name&&(n.name=i.name),Hf(n,i),t.associations.set(n,{materials:e}),i.extensions&&Vf(r,n,i),n})}createUniqueName(e){let t=xs.sanitizeNodeName(e||``);return t in this.nodeNamesUsed?t+`_`+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function i(e){return n[tf.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(n){return Qf(n,e,t)})}let a=[];for(let n=0,o=e.length;n<o;n++){let o=e[n],s=Gf(o),c=r[s];if(c)a.push(c.promise);else{let e;e=o.extensions&&o.extensions[tf.KHR_DRACO_MESH_COMPRESSION]?i(o):Qf(new Nr,o,t),o.mode===jf.TRIANGLE_STRIP?e=e.then(e=>Jd(e,1)):o.mode===jf.TRIANGLE_FAN&&(e=e.then(e=>Jd(e,2))),r[s]={primitive:o,promise:e},a.push(e)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,i=n.meshes[e],a=i.primitives,o=[];for(let e=0,t=a.length;e<t;e++){let t=a[e].material===void 0?Bf(this.cache):this.getDependency(`material`,a[e].material);o.push(t)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(n){let o=n.slice(0,n.length-1),s=n[n.length-1],c=[];for(let n=0,l=s.length;n<l;n++){let l=s[n],u=a[n],d,f=o[n];if(u.mode===jf.TRIANGLES||u.mode===jf.TRIANGLE_STRIP||u.mode===jf.TRIANGLE_FAN||u.mode===void 0){let e=i.isSkinnedMesh===!0,t=l.hasAttribute(`skinIndex`)&&l.hasAttribute(`skinWeight`);e&&t===!1&&console.warn(`THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.`),d=e&&t?new Ni(l,f):new G(l,f),d.isSkinnedMesh===!0&&d.normalizeSkinWeights()}else if(u.mode===jf.LINES)d=new ua(l,f);else if(u.mode===jf.LINE_STRIP)d=new oa(l,f);else if(u.mode===jf.LINE_LOOP)d=new da(l,f);else if(u.mode===jf.POINTS)d=new _a(l,f);else throw Error(`THREE.GLTFLoader: Primitive mode unsupported: `+u.mode);Object.keys(d.geometry.morphAttributes).length>0&&Wf(d,i),d.name=t.createUniqueName(i.name||`mesh_`+e),Hf(d,i),u.extensions&&Vf(r,d,u),t.assignFinalMaterial(d),c.push(d)}for(let n=0,r=c.length;n<r;n++)t.associations.set(c[n],{meshes:e,primitives:n});if(c.length===1)return i.extensions&&Vf(r,c[0],i),c[0];let l=new An;i.extensions&&Vf(r,l,i),t.associations.set(l,{meshes:e});for(let e=0,t=c.length;e<t;e++)l.add(c[e]);return l})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r)console.warn(`THREE.GLTFLoader: Missing camera parameters.`);else return n.type===`perspective`?t=new qo(Mt.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type===`orthographic`&&(t=new Qo(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Hf(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let e=0,r=t.joints.length;e<r;e++)n.push(this._loadNodeShallow(t.joints[e]));return t.inverseBindMatrices===void 0?n.push(null):n.push(this.getDependency(`accessor`,t.inverseBindMatrices)),Promise.all(n).then(function(e){let n=e.pop(),r=e,i=[],a=[];for(let e=0,o=r.length;e<o;e++){let o=r[e];if(o){i.push(o);let t=new U;n!==null&&t.fromArray(n.array,e*16),a.push(t)}else console.warn(`THREE.GLTFLoader: Joint "%s" could not be found.`,t.joints[e])}return new Ri(i,a)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],i=r.name?r.name:`animation_`+e,a=[],o=[],s=[],c=[],l=[];for(let e=0,t=r.channels.length;e<t;e++){let t=r.channels[e],n=r.samplers[t.sampler],i=t.target,u=i.node,d=r.parameters===void 0?n.input:r.parameters[n.input],f=r.parameters===void 0?n.output:r.parameters[n.output];i.node!==void 0&&(a.push(this.getDependency(`node`,u)),o.push(this.getDependency(`accessor`,d)),s.push(this.getDependency(`accessor`,f)),c.push(n),l.push(i))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(s),Promise.all(c),Promise.all(l)]).then(function(e){let t=e[0],a=e[1],o=e[2],s=e[3],c=e[4],l=[];for(let e=0,r=t.length;e<r;e++){let r=t[e],i=a[e],u=o[e],d=s[e],f=c[e];if(r===void 0)continue;r.updateMatrix&&r.updateMatrix();let p=n._createAnimationTracks(r,i,u,d,f);if(p)for(let e=0;e<p.length;e++)l.push(p[e])}let u=new xo(i,void 0,l);return Hf(u,r),u})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency(`mesh`,r.mesh).then(function(e){let t=n._getNodeRef(n.meshCache,r.mesh,e);return r.weights!==void 0&&t.traverse(function(e){if(e.isMesh)for(let t=0,n=r.weights.length;t<n;t++)e.morphTargetInfluences[t]=r.weights[t]}),t})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],i=n._loadNodeShallow(e),a=[],o=r.children||[];for(let e=0,t=o.length;e<t;e++)a.push(n.getDependency(`node`,o[e]));let s=r.skin===void 0?Promise.resolve(null):n.getDependency(`skin`,r.skin);return Promise.all([i,Promise.all(a),s]).then(function(e){let t=e[0],n=e[1],r=e[2];r!==null&&t.traverse(function(e){e.isSkinnedMesh&&e.bind(r,Yf)});for(let e=0,r=n.length;e<r;e++)t.add(n[e]);if(t.userData.pivot!==void 0&&n.length>0){let e=t.userData.pivot,r=n[0];t.pivot=new V().fromArray(e),t.position.x-=e[0],t.position.y-=e[1],t.position.z-=e[2],r.position.set(0,0,0),delete t.userData.pivot}return t})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let i=t.nodes[e],a=i.name?r.createUniqueName(i.name):``,o=[],s=r._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)});return s&&o.push(s),i.camera!==void 0&&o.push(r.getDependency(`camera`,i.camera).then(function(e){return r._getNodeRef(r.cameraCache,i.camera,e)})),r._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){o.push(e)}),this.nodeCache[e]=Promise.all(o).then(function(t){let o;if(o=i.isBone===!0?new Pi:t.length>1?new An:t.length===1?t[0]:new kn,o!==t[0])for(let e=0,n=t.length;e<n;e++)o.add(t[e]);if(i.name&&(o.userData.name=i.name,o.name=a),Hf(o,i),i.extensions&&Vf(n,o,i),i.matrix!==void 0){let e=new U;e.fromArray(i.matrix),o.applyMatrix4(e)}else i.translation!==void 0&&o.position.fromArray(i.translation),i.rotation!==void 0&&o.quaternion.fromArray(i.rotation),i.scale!==void 0&&o.scale.fromArray(i.scale);if(!r.associations.has(o))r.associations.set(o,{});else if(i.mesh!==void 0&&r.meshCache.refs[i.mesh]>1){let e=r.associations.get(o);r.associations.set(o,{...e})}return r.associations.get(o).nodes=e,o}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,i=new An;n.name&&(i.name=r.createUniqueName(n.name)),Hf(i,n),n.extensions&&Vf(t,i,n);let a=n.nodes||[],o=[];for(let e=0,t=a.length;e<t;e++)o.push(r.getDependency(`node`,a[e]));return Promise.all(o).then(function(e){for(let t=0,n=e.length;t<n;t++){let n=e[t];n.parent===null?i.add(n):i.add(Xd(n))}return r.associations=(e=>{let t=new Map;for(let[e,n]of r.associations)(e instanceof Hr||e instanceof Xt)&&t.set(e,n);return e.traverse(e=>{let n=r.associations.get(e);n!=null&&t.set(e,n)}),t})(i),i})}_createAnimationTracks(e,t,n,r,i){let a=[],o=e.name?e.name:e.uuid,s=[];function c(e){e.morphTargetInfluences&&s.push(e.name?e.name:e.uuid)}Lf[i.path]===Lf.weights?(c(e),e.isGroup&&e.children.forEach(c)):s.push(o);let l;switch(Lf[i.path]){case Lf.weights:l=go;break;case Lf.rotation:l=vo;break;case Lf.translation:case Lf.scale:l=bo;break;default:switch(n.itemSize){case 1:l=go;break;default:l=bo}}let u=r.interpolation===void 0?Ie:Rf[r.interpolation],d=this._getArrayFromAccessor(n);for(let e=0,n=s.length;e<n;e++){let n=new l(s[e]+`.`+Lf[i.path],t.array,d,u);r.interpolation===`CUBICSPLINE`&&this._createCubicSplineTrackInterpolant(n),a.push(n)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let e=qf(t.constructor),n=new Float32Array(t.length);for(let r=0,i=t.length;r<i;r++)n[r]=t[r]*e;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(e){return new(this instanceof vo?Af:Of)(this.times,this.values,this.getValueSize()/3,e)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Zf(e,t,n){let r=t.attributes,i=new er;if(r.POSITION!==void 0){let e=n.json.accessors[r.POSITION],t=e.min,a=e.max;if(t!==void 0&&a!==void 0){if(i.set(new V(t[0],t[1],t[2]),new V(a[0],a[1],a[2])),e.normalized){let t=qf(Mf[e.componentType]);i.min.multiplyScalar(t),i.max.multiplyScalar(t)}}else{console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`);return}}else return;let a=t.targets;if(a!==void 0){let e=new V,t=new V;for(let r=0,i=a.length;r<i;r++){let i=a[r];if(i.POSITION!==void 0){let r=n.json.accessors[i.POSITION],a=r.min,o=r.max;if(a!==void 0&&o!==void 0){if(t.setX(Math.max(Math.abs(a[0]),Math.abs(o[0]))),t.setY(Math.max(Math.abs(a[1]),Math.abs(o[1]))),t.setZ(Math.max(Math.abs(a[2]),Math.abs(o[2]))),r.normalized){let e=qf(Mf[r.componentType]);t.multiplyScalar(e)}e.max(t)}else console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`)}}i.expandByVector(e)}e.boundingBox=i;let o=new Tr;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,e.boundingSphere=o}function Qf(e,t,n){let r=t.attributes,i=[];function a(t,r){return n.getDependency(`accessor`,t).then(function(t){e.setAttribute(r,t)})}for(let t in r){let n=If[t]||t.toLowerCase();n in e.attributes||i.push(a(r[t],n))}if(t.indices!==void 0&&!e.index){let r=n.getDependency(`accessor`,t.indices).then(function(t){e.setIndex(t)});i.push(r)}return Bt.workingColorSpace!==`srgb-linear`&&`COLOR_0`in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Bt.workingColorSpace}" not supported.`),Hf(e,t),Zf(e,t,n),Promise.all(i).then(function(){return t.targets===void 0?e:Uf(e,t.targets,n)})}var $f=new Qd,ep=new Map,tp=[];function np(e){return Promise.all(e.map(e=>new Promise(t=>$f.load(`./models/${e}.glb`,n=>{n.scene.traverse(e=>{if(e.isMesh){e.castShadow=!0,e.geometry.attributes.normal&&!e.geometry.userData.smoothed&&(e.geometry=Yd(e.geometry,.7),e.geometry.userData.smoothed=!0);for(let t of[e.material].flat())t.map&&(t.map.anisotropy=16)}}),ep.set(e,n.scene),t()},void 0,()=>t())))).then(()=>{for(let e of tp){let t=ep.get(e.id);t&&(e.g.clear(),e.g.add(t.clone(!0)))}tp.length=0})}var rp=e=>ep.has(e),ip=e=>ep.get(e);function ap(e){let t=ep.get(e);if(!t)return null;let n=t.clone(!0);return n.traverse(e=>{e.isMesh&&(e.material=e.material.clone(),e.castShadow=!0)}),n}var op=(e,t)=>e.getObjectByName(t);function sp(e){let t=null;return e.traverse(e=>{!t&&e.isMesh&&(t=e.material)}),t}function cp(e,t,n){let r=new An;return ep.get(e)?.traverse(e=>{if(!e.isMesh||!t.length)return;let i=new qi(e.geometry,e.material,t.length);t.forEach((e,t)=>{i.setMatrixAt(t,e),n&&i.setColorAt(t,n[t])}),i.castShadow=!0,r.add(i)}),r}function lp(e,t){let n=new An,r=ep.get(e);return r?n.add(r.clone(!0)):(n.add(t()),tp.push({g:n,id:e})),n}var up={wheat:`stalk_ear`,barley:`stalk_ear`,corn:`stalk_cob`,sunflower:`stalk_disk`,sugarcane:`cane`,tomato:`bush_round`,strawberry:`bush_round`,pepper:`bush_long`,eggplant:`bush_long`,okra:`bush_long`,beans:`bush_long`,cucumber:`vine_long`,zucchini:`vine_long`,watermelon:`vine_round`,pumpkin:`vine_round`,potato:`root_round`,onion:`root_round`,radish:`root_round`,beet:`root_round`,garlic:`root_round`,carrot:`root_carrot`,lettuce:`leafy`,cabbage:`leafy`,spinach:`leafy`,rice:`stalk_ear`,rhodes:`stalk_ear`,bluepanic:`stalk_ear`,alfalfa:`leafy`,grape:`vine_long`,rose:`bush_round`,palm_barhi:`palm`,palm_zahdi:`palm`,palm_khestawi:`palm`,palm_maktoum:`palm`,palm_ashrasi:`palm`,palm_medjool:`palm`,pomegranate:`fruit_tree`,fig:`fruit_tree`,lemon:`fruit_tree`,clementine:`fruit_tree`,kumquat:`fruit_tree`,apple:`fruit_tree`,apricot:`fruit_tree`,olive:`fruit_tree`,sidr:`fruit_tree`,eucalyptus:`fruit_tree`},dp={palm_barhi:.8,palm_zahdi:.85,palm_khestawi:.8,palm_maktoum:.8,palm_ashrasi:.8,palm_medjool:.75,eucalyptus:1.5,olive:.8,kumquat:.6,sidr:1.1,fig:1,wheat:.7,barley:.6,corn:1.2,sunflower:1.25,sugarcane:1.2,strawberry:.6,cucumber:.9,zucchini:.9,potato:1,radish:.8,garlic:.8,onion:.9,lettuce:1,spinach:.8,okra:.9};for(let[e,t]of Object.entries(q))up[e]||(t.shape===`palm`?up[e]=`palm`:t.shape===`tree`&&(up[e]=`fruit_tree`));var fp=.8,pp=e=>!!up[e]&&!!ip(up[e]),mp=new Map,hp=[[-.5,-.5],[.5,-.5],[-.5,.5],[.5,.5]],gp=new U,_p=new Nt,vp=new fn,yp=new V,bp=new V,xp=new U().makeScale(0,0,0),Sp=null;function Cp(e,t){if(mp.has(t))return mp.get(t);Sp??=(()=>{let t=new An;return e.add(t),t})();let n=Dp*Dp*4,r=ip(up[t]),i=q[t],a=new Ja({color:i.leaf,roughness:.8,side:2}),o=new Ja({color:i.fruit,roughness:.5}),s={id:t,cap:n,used:0,free:[],items:[],dirty:!1};for(let e of r.children)e.traverse(t=>{if(!t.isMesh)return;let r=e.name===`Leaf`?a:e.name===`Fruit`?o:t.material;t.updateWorldMatrix(!0,!1);let i=new qi(t.geometry.clone().applyMatrix4(t.matrixWorld),r,n);i.frustumCulled=!1,i.castShadow=!0,i.count=0,Sp.add(i),s.items.push({im:i,fruit:e.name===`Fruit`})});return mp.set(t,s),s}function wp(e,t,n){let r=Cp(e,n),i=[],a=zp(t.i),o=zp(t.j),s=dp[n]??(q[n].shape===`palm`?fp:1),c=q[n].tree?[[0,0]]:hp,l=c.map((e,n)=>(t.i*7+t.j*13+n*5)%17*.37);for(let e=0;e<c.length;e++)i.push(r.free.pop()??r.used++);for(let e of r.items)e.im.count=r.used;let u={floor:0,set(e,t){for(let n=0;n<c.length;n++){let d=(.25+.75*Math.max(e,u.floor))*s;yp.set(a+c[n][0],0,o+c[n][1]),vp.set(t*.5*(n%2?1:-1),l[n],t),_p.setFromEuler(vp),gp.compose(yp,_p,bp.set(d,d,d));for(let t of r.items)t.im.setMatrixAt(i[n],t.fruit&&e<1?xp:gp)}r.dirty=!0},remove(){for(let e of i){for(let t of r.items)t.im.setMatrixAt(e,xp);r.free.push(e)}r.dirty=!0}};return u.set(0,0),u}function Tp(){for(let e of mp.values())if(e.dirty){for(let t of e.items)t.im.instanceMatrix.needsUpdate=!0;e.dirty=!1}}function Ep(e){for(let e of mp.values())for(let t of e.items)Sp.remove(t.im),t.im.dispose();mp.clear()}var Dp=20,Op=[],kp=[],Ap={sand:{name:`رملية`,wp:.05,sat:.4,loss:.012,k:.08,ph:6.2,ec:.6},loam:{name:`طميية`,wp:.12,sat:.5,loss:.008,k:.05,ph:6.7,ec:1},clay:{name:`طينية`,wp:.22,sat:.55,loss:.005,k:.03,ph:7.2,ec:1.6}},jp=`loam`,Mp=new W(7051855),Np=new W(9071176),Pp=new W(4862496),Fp=new W(13482378),Ip=new W(12172728),Lp=new W(4938320),Rp=new wa(1.988,.3,1.988),zp=e=>(e-Dp/2+.5)*2,Bp=(e,t)=>e<0||t<0||e>=Dp||t>=Dp?null:Op[e*Dp+t],Vp=e=>{let t=Ap[jp];return(t.wp+e.moisture*(t.sat-t.wp))*100},Hp=(e,t)=>(Math.sin(e*12.9898+t*78.233)*43758.5453%1+1)%1;function Up(){let e=Ap[jp];for(let t of Op){let n=Hp(t.i,t.j);t.ph=+(e.ph+(n-.5)*.6).toFixed(2),t.ec=+((jd().ec??e.ec)*(.8+n*.4)).toFixed(2)}}function Wp(e){Ap[e]&&(jp=e,Up())}function Gp(e,t){t.plant&&(t.plant.remove?t.plant.remove():e.remove(t.plant.group)),t.crop=t.plant=null}function Kp(e){for(let t of Op)Gp(e,t),Zp(e,t),e.remove(t.mesh),t.mesh.material.dispose();Op.length=kp.length=0,Ep(e)}var qp=null;function Jp(e){qp=e??null;for(let t of Op)t.blocked=!!e&&(t.i<e.i0||t.i>=e.i0+e.w||t.j<e.j0||t.j>=e.j0+e.h)}var Yp=new W(4867644);function Xp(e,t){if(t.tank||t.road)return!1;let n=new G(new Ea(.8,.8,2.4,20),new Ja({color:9417671,roughness:.4,metalness:.3}));return n.position.set(zp(t.i),1.2,zp(t.j)),n.castShadow=!0,e.add(n),t.tank=n,!0}function Zp(e,t){t.tank&&=(e.remove(t.tank),t.tank.geometry.dispose(),t.tank.material.dispose(),null)}function Qp(e,t=20){Kp(e),Dp=t;for(let t=0;t<Dp;t++)for(let n=0;n<Dp;n++){let r=new G(Rp,new Ja({color:Mp.clone(),map:bd.grass[(t*3+n)%4],roughness:.95}));r.position.set(zp(t),-.15,zp(n)),r.receiveShadow=!0;let i={i:t,j:n,soil:0,moisture:.3,temp:18,ph:7,ec:1,stress:null,crop:null,plant:null,machine:null,pen:null,hatch:null,pond:null,blocked:!1,road:0,tank:null,mesh:r};r.userData.tile=i,e.add(r),Op.push(i),kp.push(r)}Up()}function $p(e,t,n){t.crop={id:n,age:0},pp(n)?t.plant=wp(e,t,n):(t.plant=cd(n),t.plant.group.position.set(zp(t.i),0,zp(t.j)),t.plant.setGrowth(0),e.add(t.plant.group))}function em(e,t,n){if(!t.crop)return`لا يوجد نبات`;if(!tm(t))return`لم ينضج بعد`;let r=t.crop.id,i=q[r];return i.perennial?(n[r]=(n[r]??0)+i.kg,t.crop.age=i.grow-i.bear,t.plant&&(t.plant.floor=.9),!0):(n[r]=(n[r]??0)+4,Gp(e,t),!0)}var tm=e=>e.crop&&e.crop.age>=q[e.crop.id].grow;function nm(e,t){let n=Ap[jp],r=.3+.7*t.sun,i=Math.min(2,Math.max(.3,1+(t.airTemp-20)/25)),a=performance.now();for(let o of Op){if(o.blocked){o.mesh.material.map=bd.flat,o.mesh.material.color.copy(Yp);continue}let s=o.soil?o.crop?1.6:1:.5;o.moisture=Math.min(1,Math.max(0,o.moisture-e*n.loss*r*i*s+e*.03*t.rain));let c=t.airTemp+7*t.sun*(1-.5*o.moisture)-2*o.moisture-(o.crop?1.5:0);if(o.temp+=(c-o.temp)*Math.min(1,e*n.k),o.stress=null,o.crop){let n=q[o.crop.id],r=$u(t.airTemp,n.t);if(o.moisture<=.2)o.stress=`water`;else{r<.5&&(o.stress=`temp`);let n=1/(1+.25*Math.max(0,o.ec-(Ud[o.crop.id]??2)));o.crop.age+=e*r*n*(.5+.5*t.sun)}let i=Math.min(1,o.crop.age/n.grow),s=Math.sin(a/650+o.i*.9+o.j*.6)*.045*(.3+i);o.plant.set?o.plant.set(i,s):(o.plant.setGrowth(i),o.plant.group.rotation.z=s,o.plant.group.rotation.x=s*.5)}let l=o.pond?bd.bed[0]:o.road||o.tank?bd.concrete[0]:o.pen?bd.straw[(o.i+o.j)%2]:o.hatch?bd.concrete[0]:o.soil?bd.soil[(o.i+2*o.j)%4]:bd.grass[(o.i*3+o.j)%4];o.mesh.material.map!==l&&(o.mesh.material.map=l),o.mesh.material.color.copy(o.pond?Lp:o.pen?Fp:o.hatch||o.road||o.tank?Ip:o.soil?Np:Mp),!o.soil&&!o.pen&&!o.pond&&o.mesh.material.color.offsetHSL(0,0,(Hp(o.i,o.j)-.5)*.07),o.soil&&o.mesh.material.color.lerp(Pp,o.moisture)}Tp()}var rm=[],im={off:`متوقف (يدوي)`,on:`يعمل (يدوي)`,auto:`تلقائي`},am={off:`on`,on:`auto`,auto:`off`},om={off:7901340,on:2733814,auto:6732650},sm=2,cm=24;function lm(e,t){let n=zp(t.i),r=zp(t.j),i=new An;i.userData.tile=t;let a=ap(`sprinkler`),o;if(a)o=op(a,`Light`),o.material.emissive.setHex(om.off),i.add(a);else{let e=new G(new Ea(.06,.06,1.2,6),new Ja({color:5533306}));e.position.y=.6,o=new G(new La(.2,10,8),new Ja({color:om.off})),o.position.y=1.3,i.add(e,o)}i.position.set(n,0,r),e.add(i);let s=new Float32Array(72).fill(-100),c=new Float32Array(72),l=new Nr;l.setAttribute(`position`,new vr(s,3));let u=new _a(l,new fa({color:5227511,size:5,sizeAttenuation:!1}));u.frustumCulled=!1,e.add(u);let d={tile:t,mode:`off`,on:!1,group:i,head:o,points:u,geo:l,pos:s,vel:c,x:n,z:r};return t.machine=d,rm.push(d),d}function um(e,t){e.remove(t.group,t.points),t.tile.machine=null,rm.splice(rm.indexOf(t),1)}function dm(e,t){e.mode=t,e.head.material.color.setHex(om[t]),e.head.material.emissive&&(e.head.material.emissive.setHex(om[t]),e.head.material.emissiveIntensity=.7),t!==`auto`&&(e.on=t===`on`)}var fm=e=>dm(e,am[e.mode]);function pm(e){let t=[];for(let n=-2;n<=sm;n++)for(let r=-2;r<=sm;r++){let i=Bp(e.tile.i+n,e.tile.j+r);i&&t.push(i)}return t}function mm(e){for(let t of rm){let n=pm(t);if(t.mode===`auto`){let e=n.filter(e=>e.crop);if(!e.length)t.on=!1;else{let n=e.reduce((e,t)=>e+t.moisture,0)/e.length;n<.35?t.on=!0:n>.8&&(t.on=!1)}}if(t.on)for(let t of n)t.soil&&(t.moisture=Math.min(1,t.moisture+.15*e));for(let n=0;n<cm;n++){let r=n*3;if(t.pos[r+1]<.1){if(!t.on){t.pos[r+1]=-100;continue}let e=Math.random()*6.283,n=1+Math.random()*2.5;t.pos.set([t.x,1.4,t.z],r),t.vel.set([Math.cos(e)*n,3+Math.random()*2,Math.sin(e)*n],r)}t.vel[r+1]-=9*e;for(let n=0;n<3;n++)t.pos[r+n]+=t.vel[r+n]*e}t.geo.attributes.position.needsUpdate=!0}}var J={cattle:{name:`بقر`,icon:`🐄`,wm:520,birth:40,dmi:11,fcr:6.5,milk:20,milkFcr:.7,tmin:5,tmax:25,water:50,perTile:.45,dress:.55,look:{len:1.9,h:1,w:.8,leg:.7,body:16119285,patch:2829099,neck:.5,horn:15658734}},buffalo:{name:`جاموس`,icon:`🐃`,wm:550,birth:35,dmi:11,fcr:8,milk:8,milkFcr:.9,tmin:8,tmax:26,water:60,perTile:.45,dress:.52,look:{len:2,h:1,w:.9,leg:.6,body:3025448,neck:.4,horn:9276813}},sheep:{name:`غنم`,icon:`🐑`,wm:55,birth:4,dmi:1.8,fcr:5.5,milk:1.2,milkFcr:1.2,tmin:5,tmax:28,water:5,perTile:2,dress:.48,look:{len:1.1,h:.6,w:.6,leg:.45,body:16052198,wool:!0,head:3815994,neck:.3}},goat:{name:`ماعز/جدي`,icon:`🐐`,wm:45,birth:3,dmi:1.5,fcr:6,milk:3,milkFcr:.8,tmin:5,tmax:28,water:4,perTile:2,dress:.5,look:{len:1,h:.6,w:.45,leg:.55,body:13214330,neck:.4,horn:6111287}},camel:{name:`إبل`,icon:`🐪`,wm:450,birth:35,dmi:8,fcr:12,milk:6,milkFcr:1.1,tmin:10,tmax:40,water:30,perTile:.35,dress:.5,look:{len:2.2,h:.9,w:.8,leg:1.3,body:13149034,hump:!0,neck:1.1}},horse:{name:`خيل`,icon:`🐎`,wm:500,birth:50,dmi:10,fcr:10,milk:0,milkFcr:1,tmin:5,tmax:27,water:40,perTile:.3,dress:.5,look:{len:2,h:.9,w:.65,leg:1.1,body:8079914,neck:.9,mane:2824720}},deer:{name:`غزلان`,icon:`🦌`,wm:110,birth:5,dmi:2.5,fcr:7,milk:0,milkFcr:1,tmin:0,tmax:25,water:8,perTile:1,dress:.55,look:{len:1.4,h:.7,w:.5,leg:1,body:11895631,neck:.6,antler:7162945}},broiler:{group:`bird`,name:`دجاج لاحم`,icon:`🐔`,wm:2.5,start:.15,birth:.04,dmi:.15,fcr:1.7,tmin:18,tmax:28,water:.3,perTile:40,dress:.72,inc:21,look:{bird:!0,size:1.5,body:16249576,beak:15903035,comb:13840175,leg:15903035}},layer:{group:`bird`,name:`دجاج بياض`,icon:`🐓`,wm:1.8,start:1.8,birth:.04,dmi:.11,fcr:2.5,eggs:.85,eggFcr:.13,tmin:15,tmax:27,water:.25,perTile:12,dress:.6,inc:21,look:{bird:!0,size:1.5,body:11887901,wing:9259540,beak:15903035,comb:13840175,leg:15903035}},duck:{group:`bird`,name:`بط`,icon:`🦆`,wm:3,start:.3,birth:.05,dmi:.2,fcr:2.6,eggs:.7,eggFcr:.28,tmin:5,tmax:28,water:.5,perTile:6,dress:.68,inc:28,look:{bird:!0,size:1.6,body:15986918,head:3046706,beak:16757504,flatBill:!0,leg:16748288,neck:.1}},goose:{group:`bird`,name:`إوز`,icon:`🪿`,wm:5.5,start:.5,birth:.1,dmi:.3,fcr:3.2,eggs:.25,eggFcr:.7,tmin:0,tmax:28,water:.7,perTile:3,dress:.65,inc:30,look:{bird:!0,size:2,body:16777215,beak:16748288,leg:16748288,neck:.5}},turkey:{group:`bird`,name:`ديك رومي`,icon:`🦃`,wm:14,start:.8,birth:.06,dmi:.45,fcr:2.6,tmin:10,tmax:27,water:1,perTile:3,dress:.78,inc:28,look:{bird:!0,size:2.2,body:6111287,wing:4073251,head:4367861,beak:12364452,leg:9268835,fan:5125166,neck:.25}},quail:{group:`bird`,name:`سمان`,icon:`🐦`,wm:.25,start:.1,birth:.008,dmi:.03,fcr:3.5,eggs:.85,eggFcr:.035,tmin:18,tmax:30,water:.04,perTile:80,dress:.7,inc:17,look:{bird:!0,size:.9,body:10586239,wing:7162945,beak:6111287,leg:12364452}},pigeon:{group:`bird`,name:`حمام`,icon:`🕊️`,wm:.45,start:.15,birth:.02,dmi:.05,fcr:3.5,tmin:5,tmax:32,water:.05,perTile:20,dress:.65,inc:18,look:{bird:!0,size:1.2,body:10134961,wing:7042691,head:6056896,beak:6111287,leg:15037299}},ostrich:{group:`bird`,name:`نعام`,icon:`🦤`,wm:110,start:20,birth:1,dmi:2.5,fcr:6,tmin:0,tmax:40,water:6,perTile:.15,dress:.35,inc:42,look:{bird:!0,size:3.4,body:2829099,wing:16119285,head:14133644,beak:14133644,leg:14133644,neck:1.6,legH:1.4}},peacock:{group:`bird`,name:`طاووس (زينة)`,icon:`🦚`,wm:5,start:5,birth:.1,dmi:.2,tmin:5,tmax:35,water:.3,perTile:1.5,ornamental:!0,inc:28,look:{bird:!0,size:2,body:1402304,head:870305,beak:9268835,leg:9268835,neck:.5,fan:3046706,crest:!0}},parrot:{group:`bird`,name:`ببغاء (زينة)`,icon:`🦜`,wm:.4,start:.4,birth:.015,dmi:.04,tmin:15,tmax:32,water:.04,perTile:4,ornamental:!0,inc:25,look:{bird:!0,size:1.2,body:3066993,wing:15158332,head:15844367,beak:3355443,leg:7829367,hookBill:!0}},falcon:{group:`bird`,name:`صقر (جوارح)`,icon:`🦅`,wm:1.1,start:1.1,birth:.05,dmi:.12,tmin:10,tmax:35,water:.1,perTile:.3,ornamental:!0,inc:32,look:{bird:!0,size:1.7,body:9268835,wing:5125166,head:15723497,beak:4342338,leg:16766287,hookBill:!0}},bee:{name:`نحل (خلايا عسل)`,icon:`🐝`,wm:25,birth:2,dmi:.05,fcr:1,milk:.12,milkFcr:.25,honey:!0,tmin:10,tmax:38,water:.1,perTile:6,dress:0,look:{len:.5,h:.6,w:.45,leg:.1,body:15254378,neck:.1}},rabbit:{name:`أرنب`,icon:`🐇`,wm:3.2,birth:.06,dmi:.15,fcr:3.5,tmin:10,tmax:25,water:.4,perTile:6,dress:.55,look:{len:.5,h:.28,w:.2,leg:.1,body:12432808,neck:.1}},holstein:{name:`هولشتاين (حليب)`,icon:`🐄`,wm:650,birth:42,dmi:18,fcr:7,milk:28,milkFcr:.75,tmin:4,tmax:24,water:90,perTile:.4,dress:.5,look:{len:1.9,h:1,w:.8,leg:.7,body:16119285,patch:2829099,neck:.5}},awassi:{name:`غنم عواسي`,icon:`🐑`,wm:75,birth:4,dmi:2,fcr:7.5,milk:1.2,milkFcr:1.1,tmin:0,tmax:35,water:8,perTile:2.5,dress:.5,look:{len:1.1,h:.62,w:.5,leg:.5,body:15919839,neck:.3}},shami:{name:`ماعز شامي`,icon:`🐐`,wm:55,birth:3,dmi:1.8,fcr:8,milk:3,milkFcr:.9,tmin:0,tmax:35,water:6,perTile:2.5,dress:.5,look:{len:1,h:.62,w:.38,leg:.6,body:7028522,neck:.35}},donkey:{name:`حمار (عمل)`,icon:`🫏`,wm:250,birth:30,dmi:5,fcr:12,tmin:5,tmax:35,water:25,perTile:.8,ornamental:!0,look:{len:1.4,h:.78,w:.46,leg:.62,body:9077112,neck:.55}},arabian:{name:`حصان عربي أصيل`,icon:`🐎`,wm:450,birth:45,dmi:9,fcr:14,tmin:5,tmax:32,water:40,perTile:.5,ornamental:!0,look:{len:1.9,h:1,w:.5,leg:1,body:13222842,neck:.8}},dog:{name:`كلب حراسة`,icon:`🐕`,wm:45,birth:.5,dmi:.9,fcr:8,tmin:0,tmax:35,water:4,perTile:2,ornamental:!0,look:{len:.9,h:.46,w:.28,leg:.38,body:13216110,neck:.28}},bulbul:{group:`bird`,name:`بلبل عراقي (زينة)`,icon:`🐦`,wm:.04,start:.04,birth:.002,dmi:.008,tmin:12,tmax:34,water:.01,perTile:30,ornamental:!0,inc:13,look:{bird:!0,size:.6,body:7035466,wing:4865331,head:1776411,beak:2236962,leg:3355443}},cockatiel:{group:`bird`,name:`كوكتيل (زينة)`,icon:`🦜`,wm:.09,start:.09,birth:.004,dmi:.012,tmin:15,tmax:34,water:.015,perTile:20,ornamental:!0,inc:19,look:{bird:!0,size:.8,body:12105912,wing:15658734,head:16769126,beak:8947848,leg:7829367,hookBill:!0}},budgerigar:{group:`bird`,name:`بادجي (زينة)`,icon:`🦜`,wm:.035,start:.035,birth:.002,dmi:.006,tmin:15,tmax:34,water:.008,perTile:30,ornamental:!0,inc:18,look:{bird:!0,size:.55,body:5624683,wing:3095087,head:16115299,beak:14202954,leg:11184810,hookBill:!0}},lovebird:{group:`bird`,name:`طيور الحب (زينة)`,icon:`🦜`,wm:.05,start:.05,birth:.003,dmi:.008,tmin:15,tmax:34,water:.01,perTile:28,ornamental:!0,inc:23,look:{bird:!0,size:.6,body:5026636,wing:2984507,head:15225407,beak:14248522,leg:10066329,hookBill:!0}},canary:{group:`bird`,name:`كناري (زينة)`,icon:`🐤`,wm:.02,start:.02,birth:.001,dmi:.005,tmin:12,tmax:32,water:.006,perTile:40,ornamental:!0,inc:14,look:{bird:!0,size:.5,body:16767034,wing:15775744,head:16767034,beak:14522709,leg:12290133}}},hm={honey:`🍯 عسل`,meat:`🥩 لحم`,milk:`🥛 حليب`,eggs:`🥚 بيض`,show:`🎨 زينة / عمل / حراسة`},gm=e=>{let t=J[e];return t.honey?[`honey`]:t.ornamental?[`show`]:[`meat`,...t.milk?[`milk`]:[],...t.eggs?[`eggs`]:[]]},_m=(e,t)=>{let n=J[e];return t===`honey`?{item:`honey`,per:n.milk,fcr:n.milkFcr,unit:`كغ عسل`,fcrUnit:`كغ سكر/علف لكل كغ عسل`}:t===`milk`?{item:`milk`,per:n.milk,fcr:n.milkFcr,unit:`لتر`,fcrUnit:`كغ علف لكل لتر حليب`}:t===`eggs`?{item:`eggs`,per:n.eggs,fcr:n.eggFcr,unit:`بيضة`,fcrUnit:`كغ علف لكل بيضة`}:null},vm=new Map,ym=new Map,bm=(e,t,n)=>{let r=`${e}|${t}|${n}`;return vm.has(r)||vm.set(r,new wa(e,t,n)),vm.get(r)},xm=e=>(ym.has(e)||ym.set(e,new Ja({color:e,flatShading:!0})),ym.get(e)),Sm=new La(.4,8,6),Cm=new Fa(.55,1),wm=new Da(.06,.35,5),Tm=new La(1,10,8),Em=new Da(1,1,6),Dm=new Ea(1,1,1,6);function Om(e){let t=new An,n=e.size,r=.3*n*(e.legH??1),i=(e.neck??.15)*n,a=(e,n,r,i,a,o,s,c,l=0)=>{let u=new G(e,xm(n));return u.scale.set(r,i,a),u.position.set(o,s,c),u.rotation.x=l,u.castShadow=t.children.length===0,t.add(u),u},o=r+.2*n;a(Tm,e.body,.2*n,.17*n,.28*n,0,o,0);for(let t of[-1,1])a(Tm,e.wing??e.body,.04*n,.13*n,.22*n,t*.2*n,o+.02*n,-.02*n);a(Dm,e.body,.07*n,i,.07*n,0,o+.1*n+i/2,.2*n,-.25);let s=o+.14*n+i,c=.24*n+i*.12;if(a(Tm,e.head??e.body,.1*n,.1*n,.1*n,0,s,c),e.flatBill?a(Tm,e.beak,.07*n,.03*n,.12*n,0,s-.02*n,c+.12*n):a(Em,e.beak,.035*n,e.hookBill?.1*n:.12*n,.035*n,0,s-.01*n,c+.11*n,Math.PI/2+(e.hookBill?.5:0)),e.comb&&a(Em,e.comb,.03*n,.07*n,.05*n,0,s+.1*n,c-.02*n),e.crest)for(let e=-1;e<=1;e++)a(Dm,1960447,.008*n,.1*n,.008*n,e*.03*n,s+.14*n,c,e*.3);if(e.fan)for(let t=-3;t<=3;t++)a(Em,t===0?1402304:e.fan,.04*n,.35*n,.01*n,t*.07*n,o+.12*n+Math.cos(t*.4)*.05*n,-.3*n,.4+Math.abs(t)*.12);else a(bm(.06*n,.03*n,.2*n),e.wing??e.body,1,1,1,0,o+.04*n,-.33*n,.35);for(let t of[-1,1])a(Dm,e.leg,.012*n,r/2,.012*n,t*.07*n,r/2,.02*n);return t}var km=e=>lp(e,()=>Am(e));function Am(e){if(J[e].look.bird)return Om(J[e].look);let t=J[e].look,n=new An,r=(e,t,r,i,a,o=0)=>{let s=new G(e,xm(t));return s.position.set(r,i,a),s.rotation.x=o,s.castShadow=n.children.length===0,n.add(s),s},i=t.leg+t.h/2;t.wool?r(Cm,t.body,0,i+.05,0).scale.set(t.len/1.1,.9,t.w/.6):r(bm(t.w,t.h,t.len),t.body,0,i,0),t.patch&&r(bm(t.w+.02,t.h*.5,t.len*.35),t.patch,0,i+.1,-.2);for(let e of[-1,1])for(let n of[-1,1])r(bm(.14,t.leg,.14),t.wool?3815994:5125166,e*t.w*.35,t.leg/2,n*t.len*.35);let a=i+t.h/2+t.neck*.25,o=t.len/2+.15;r(bm(.28,.28+t.neck*.5,.28),t.body,0,a,o-.05,-.5);let s=r(bm(.3,.3,.5),t.head??t.body,0,a+t.neck*.3,o+.25);if(t.horn)for(let e of[-1,1])r(wm,t.horn,e*.14,s.position.y+.25,s.position.z-.1);if(t.antler)for(let e of[-1,1])r(bm(.05,.6,.05),t.antler,e*.14,s.position.y+.45,s.position.z-.1,e*.3);return t.hump&&r(Sm,t.body,0,i+t.h/2+.25,0),t.mane&&r(bm(.08,.3,t.neck*.7),t.mane,0,a+.2,o-.2,-.5),r(bm(.08,.5,.08),t.body,0,i+.1,-t.len/2-.05,.4),n}var jm=[],Mm={feed:600},Nm={meat:{name:`لحم`,icon:`🥩`},milk:{name:`حليب`,icon:`🥛`},eggs:{name:`بيض`,icon:`🥚`},fish:{name:`سمك`,icon:`🐟`},honey:{name:`عسل`,icon:`🍯`}},Pm=[.15,.2,.9,1,1,.5,.25,.15,.2,.5,.5,.2],Fm=-1e9,Im=.6;function Lm(){let e=performance.now();if(e-Fm>5e3){Fm=e;let t=0;for(let e of Op)e.crop&&(q[e.crop.id].perennial||q[e.crop.id].cat===`fruit`)&&t++;Im=.6+.4*Math.min(1,t/20)}return Pm[new Date().getMonth()]*Im}var Rm=e=>J[e].group===`bird`?14:10,zm=(e,t,n)=>Math.max(t,Math.min(n,e)),Bm=new Ja({color:10586239}),Vm=new Ja({color:14140579,flatShading:!0}),Hm=new Ja({color:3107466,flatShading:!0}),Um=new Ja({color:9255727,flatShading:!0}),Wm=new Ja({color:5227511}),Gm=(e,t,n,r,i,a)=>{let o=new G(t,n);return o.position.set(r,i,a),o.castShadow=o.receiveShadow=!0,e.add(o),o},Km=(e,t)=>Math.max(1,Math.floor(t*J[e].perTile)),qm=e=>J[e].start??(e===`cattle`||e===`buffalo`||e===`camel`||e===`horse`?J[e].wm*.25:J[e].wm*.3);function Jm(e,t,n,r,i){let a=Math.min(t.i,n.i),o=Math.max(t.i,n.i),s=Math.min(t.j,n.j),c=Math.max(t.j,n.j);if(o-a<2||c-s<2)return`الحظيرة 3×3 مربعات على الأقل`;let l=[];for(let e=a;e<=o;e++)for(let t=s;t<=c;t++){let n=Bp(e,t);if(!n)return`خارج حدود المزرعة`;if(n.blocked||n.road||n.tank||n.crop||n.machine||n.pen||n.hatch||n.pond)return`المساحة مشغولة (نبات أو رشاش أو حظيرة أو مفقس)`;l.push(n)}let u=J[r];gm(r).includes(i)||(i=gm(r)[0]);let d=Km(r,l.length),f=Math.max(1,Math.floor(d*.6)),p={kind:`pen`,id:`pen${Date.now().toString(36)}${jm.length}`,sp:r,purpose:i,i0:a,i1:o,j0:s,j1:c,tiles:l,cap:d,n:f,age:0,w:i===`meat`?qm(r):u.wm,temp:20,nh3:5,feedCap:Math.max(50,Math.round(u.dmi*d*3)),feedLevel:0,waterOn:!0,feederMode:`auto`,climate:`auto`,fanOn:!1,heatOn:!1,feedAcc:0,prodAcc:0,fcr:null,eaten:0,daily:0,milkTotal:0,dead:0,status:`ok`,note:``,hist:[],histT:0,anim:[],sel:!1};p.feedLevel=p.feedCap*.5;for(let e of l)e.pen=p,e.soil=0;return Ym(e,p),jm.push(p),p}function Ym(e,t){let n=new An,r=zp(t.i0)-1,i=zp(t.i1)+1,a=zp(t.j0)-1,o=zp(t.j1)+1;t.bounds={x0:r,x1:i,z0:a,z1:o};let s=(r+i)/2,c=(a+o)/2,l=i-r,u=o-a,d=[`fence`,`shed_bay`,`trough`,`water_trough`,`fan_frame`,`fan_blades`].every(rp),f;if(d){let e=[],c=new U,u=new Nt,d=new V(1,1,1),p=(t,n,r)=>e.push(c.clone().compose(new V(t,0,n),u.setFromAxisAngle(new V(0,1,0),r),d));for(let e=r;e<i-.01;e+=2)p(e,a,0),p(e,o,0);for(let e=a;e<o-.01;e+=2)p(r,e,-Math.PI/2),p(i,e,-Math.PI/2);p(i,a,Math.PI),p(i,o,Math.PI),p(r,o,Math.PI/2),p(i,o,Math.PI/2),n.add(cp(`fence`,e));let m=.85,h=4*m,g=Math.max(1,Math.floor((l-.6)/h)),_=3*m;f=_;for(let e=0;e<g;e++){let r=ap(`shed_bay`);if(r.scale.setScalar(m),r.position.set(s+(e-(g-1)/2)*h,0,a+.35+_/2),J[t.sp].group===`bird`){let e=0;op(r,`Roof`).traverse(t=>{t.isMesh&&t.material.color.setHex(e++?2446959:3107466)})}n.add(r)}let v=a+.35+_+.7,y=ap(`trough`),b=ap(`water_trough`);y.position.set(s-l*.2,0,v),b.position.set(s+l*.2,0,v),n.add(y,b),t.feedBar=Gm(n,new wa(2.55,.4,.4),new Ja({color:13214247}),s-l*.2,.37,v);let x=ap(`fan_frame`),S=ap(`fan_blades`),C=s+g*h/2-1,w=a+.35+.2;x.position.set(C,2.2,w),S.position.set(C,2.2,w+.05),n.add(x,S),t.fan=S,t.fanAxis=`z`}else{let e=new wa(.15,1,.15);for(let t=r;t<=i+.01;t+=2)for(let r of[a,o])Gm(n,e,Bm,t,.5,r);for(let t=a;t<=o+.01;t+=2)for(let a of[r,i])Gm(n,e,Bm,a,.5,t);for(let e of[.4,.8]){for(let t of[a,o])Gm(n,new wa(l,.06,.06),Bm,s,e,t);for(let t of[r,i])Gm(n,new wa(.06,.06,u),Bm,t,e,c)}let d=l-1;f=Math.min(2.4,u*.3),Gm(n,new wa(d,2.4,.2),Vm,s,1.2,a+.3),Gm(n,new wa(d+.4,.2,f+.4),J[t.sp].group===`bird`?Hm:Um,s,2.5,a+f/2+.2);for(let e of[-1,1])Gm(n,new wa(.15,2.4,.15),Bm,s+e*d/2,1.2,a+f);t.fan=new An;for(let e=0;e<2;e++)Gm(t.fan,new wa(.9,.08,.12),Bm,0,0,0).rotation.z=e*Math.PI/2;t.fan.position.set(s+d/2-.8,2,a+.45),n.add(t.fan),t.fanAxis=`y`,Gm(n,new wa(Math.min(3,l*.3),.5,.6),Bm,s-l*.2,.25,a+f+.8),t.feedBar=Gm(n,new wa(Math.min(3,l*.3)-.1,.4,.5),new Ja({color:13214247}),s-l*.2,.3,a+f+.8),Gm(n,new wa(1.6,.4,.6),Wm,s+l*.2,.2,a+f+.8)}e.add(n),t.group=n,n.userData.tile=t.tiles[0],n.traverse(e=>{e.userData.tile=t.tiles[0]}),t.center=new V(s,0,c),t.zFree=a+f+1.8,Xm(e,t)}function Xm(e,t){let n=Math.min(t.n,Rm(t.sp));for(;t.anim.length>n;)t.group.remove(t.anim.pop().mesh);let r=t.bounds;for(;t.anim.length<n;){let e=km(t.sp),n=r.x0+1+Math.random()*(r.x1-r.x0-2),i=t.zFree+Math.random()*Math.max(.5,r.z1-t.zFree-1);e.position.set(n,0,i),t.group.add(e),t.anim.push({mesh:e,tx:n,tz:i,wait:Math.random()*3})}}function Zm(e,t){e.remove(t.group),t.group.traverse(e=>e.geometry?.dispose?.());for(let e of t.tiles)e.pen=null;jm.splice(jm.indexOf(t),1)}var Qm=e=>[...jm].forEach(t=>Zm(e,t));function $m(e,t){let n=J[t.sp],r=t.cap-t.n;if(r<=0)return`الحظيرة ممتلئة`;let i=Math.max(1,Math.min(r,Math.floor(t.cap*.4))),a=t.purpose===`meat`?qm(t.sp):n.wm;return t.w=(t.w*t.n+a*i)/(t.n+i),t.n+=i,Xm(e,t),`أُضيف ${i} (${t.n}/${t.cap})`}function eh(e,t,n){let r=J[t.sp];if(t.purpose!==`meat`)return t.purpose===`show`?`حيوانات الزينة والجوارح لا تُباع في هذه المحاكاة`:`الحليب والبيض يُجمَّعان تلقائياً في المخزون`;if(t.n<1)return`لا توجد حيوانات`;if(t.w<r.wm*.9)return`لم تصل لوزن السوق (${Math.round(t.w)} من ${r.wm} كغ)`;let i=Math.round(t.n*t.w*r.dress);n.meat=(n.meat??0)+i;let a=t.n;return t.n=0,t.w=qm(t.sp),t.age=0,t.feedAcc=t.prodAcc=0,t.fcr=null,Xm(e,t),`بيع ${a} حيوان: ${i} كغ لحم`}function th(e,t,n){let r=J[t.sp];return gm(t.sp).includes(n)?t.n>0&&t.purpose!==n?`أفرغ الحظيرة (بيع الحيوانات) قبل تغيير الغرض`:(t.purpose=n,t.w=n===`meat`?qm(t.sp):r.wm,t.feedAcc=t.prodAcc=0,t.fcr=null,t.hist=[],`تم تغيير الغرض`):`هذا الغرض غير متاح لهذا النوع`}function nh(e){let t=Math.min(e.feedCap-e.feedLevel,Mm.feed);return t<=0?Mm.feed<=0?`مخزن العلف فارغ`:`المعلف ممتلئ`:(e.feedLevel+=t,Mm.feed-=t,`عُبّئ ${Math.round(t)} كغ`)}function rh(e){let t=0;for(let n of Object.keys(e))q[n]?.feed&&e[n]>0&&(t+=e[n]*25,e[n]=0);return Mm.feed+=t,t}var ih=()=>{Mm.feed+=500};function ah(e,t,n,r){let i=e/120;for(let a of jm){let o=J[a.sp],s=a.n/a.cap,c=t.airTemp+2*t.sun+1.5*s-(a.fanOn?5:0)+(a.heatOn?7:0);a.temp+=(c-a.temp)*Math.min(1,e*.05),a.climate===`auto`?(a.fanOn=a.temp>o.tmax-2?!0:a.temp<o.tmax-6?!1:a.fanOn,a.heatOn=a.temp<o.tmin+2?!0:a.temp>o.tmin+5?!1:a.heatOn):(a.fanOn=a.climate===`cool`,a.heatOn=a.climate===`heat`);let l=5+30*s*(.5+.5*t.rh/100)-(a.fanOn?14:0);a.nh3+=(Math.max(2,l)-a.nh3)*Math.min(1,e*.03);let u=zm((a.temp-o.tmax)/10,0,1.5),d=zm((o.tmin-a.temp)/10,0,1.5),f=Math.max(u,d);a.feederMode===`auto`&&a.feedLevel<a.feedCap*.3&&nh(a);let p=0,m=0,h=0;if(a.n>0){let e=o.dmi*(a.w/o.wm)**.75*(1-.5*Math.min(1,u))*(a.waterOn?1:.4)*a.n*i;p=Math.min(e,a.feedLevel),a.feedLevel-=p;let t=p/a.n,r=1+.6*u+.3*d+(a.waterOn?0:.8)+.004*Math.max(0,a.nh3-20),s=_m(a.sp,a.purpose);if(a.purpose===`meat`)a.w<o.wm*1.05&&(m=t/(o.fcr*r*(.85+.3*(a.w/o.wm)))),a.w+=m,m*=a.n;else if(s){let e=i>0?t/i:0,o=s.item===`honey`?Lm():1;h=Math.min(s.per*o*(1-.4*Math.min(1,u)),e/(s.fcr*r))*i*a.n,n[s.item]=(n[s.item]??0)+h,a.milkTotal+=h}}a.eaten=i>0?p/a.n/i||0:a.eaten,a.daily=i>0?(a.purpose===`meat`?m/a.n:h/a.n)/i||0:a.daily;let g=Math.exp(-i/3);a.feedAcc=a.feedAcc*g+p,a.prodAcc=a.prodAcc*g+(a.purpose===`meat`?m:h),a.fcr=a.prodAcc>1e-6?a.feedAcc/a.prodAcc:null,a.age+=i,a.waterless=a.waterOn?0:(a.waterless??0)+i;let _=u>1||d>1||a.waterless>2;if(_&&a.n>0&&(a.dead+=a.n*.02*i,a.dead>=1)){let e=Math.floor(a.dead);a.n=Math.max(0,a.n-e),a.dead-=e,Xm(null,a)}a.note=_?u>1?`حرارة قاتلة`:d>1?`برد قاتل`:`انقطاع الماء`:f>.3?`إجهاد حراري`:a.feedLevel<a.feedCap*.1?`العلف شارف على النفاد`:a.nh3>25?`أمونيا مرتفعة`:``,a.status=_||a.n>0&&a.feedLevel<=0?`crit`:a.note?`warn`:`ok`,a.stress=f,a.histT+=i,a.histT>.1&&(a.histT=0,a.hist.push(a.fcr),a.hist.length>80&&a.hist.shift()),a.feedBar.scale.y=Math.max(.05,a.feedLevel/a.feedCap),a.fan.rotation[a.fanAxis]+=a.fanOn?r*8:0;let v=.45+.55*zm(a.w/o.wm,0,1);for(let e of a.anim){e.mesh.scale.setScalar(v),e.wait-=r;let t=e.tx-e.mesh.position.x,n=e.tz-e.mesh.position.z,i=Math.hypot(t,n);if(i<.2){if(e.wait<=0){let t=a.bounds;e.tx=t.x0+1+Math.random()*(t.x1-t.x0-2),e.tz=a.zFree+Math.random()*Math.max(.5,t.z1-a.zFree-1),e.wait=1+Math.random()*4}}else{let a=Math.min(i,.8*r);e.mesh.position.x+=t/i*a,e.mesh.position.z+=n/i*a,e.mesh.rotation.y=Math.atan2(t,n)}}}}var oh={carp:{name:`كارب`,icon:`🐟`,wm:2e3,fcr:1.8,t:[8,22,28,34],dens:4,doMin:3,look:{len:1,body:13208122,belly:15784352,fin:11035935}},tilapia:{name:`بلطي`,icon:`🐟`,wm:500,fcr:1.6,t:[14,26,32,38],dens:15,doMin:3,look:{len:.8,body:8228762,belly:14279400,fin:6122871}},catfish:{name:`قرموط`,icon:`🐟`,wm:1e3,fcr:1.5,t:[15,25,30,36],dens:20,doMin:2.5,look:{len:1,body:4868682,belly:10395294,fin:3355443}},pangasius:{name:`باسا`,icon:`🐟`,wm:1e3,fcr:1.5,t:[20,28,32,36],dens:25,doMin:2.5,look:{len:1,body:10135472,belly:15527921,fin:7901340}},salmon:{name:`سلمون`,icon:`🍣`,wm:4e3,fcr:1.2,t:[4,10,16,22],dens:20,doMin:6,look:{len:1.3,body:9479342,belly:16755601,fin:6323595}},trout:{name:`سلمون مرقط`,icon:`🐟`,wm:400,fcr:1.3,t:[3,10,17,22],dens:20,doMin:6,look:{len:.9,body:9154699,belly:16243152,fin:6983530}},sturgeon:{name:`حفش`,icon:`🐟`,wm:3e3,fcr:1.8,t:[10,18,22,28],dens:10,doMin:5,look:{len:1.3,body:7175050,belly:13621468,fin:5533306}},seabass:{name:`قاروص`,icon:`🐟`,wm:500,fcr:1.8,t:[10,20,26,32],dens:15,doMin:4,look:{len:.9,body:11583173,belly:16777215,fin:7901340}},seabream:{name:`دنيس`,icon:`🐠`,wm:450,fcr:1.8,t:[10,20,26,32],dens:15,doMin:4,look:{len:.8,body:13621468,belly:16777215,fin:15037299}},grouper:{name:`هامور`,icon:`🐟`,wm:1500,fcr:2.2,t:[18,25,30,34],dens:8,doMin:4,look:{len:1,body:11887901,belly:14731686,fin:9259540}},mullet:{name:`بوري`,icon:`🐟`,wm:800,fcr:2,t:[12,22,28,34],dens:5,doMin:3,look:{len:1,body:10991037,belly:16119285,fin:7901340}},shrimp:{name:`جمبري`,icon:`🦐`,wm:30,fcr:1.6,t:[18,28,31,35],dens:3,doMin:4,look:{len:.35,body:16757145,belly:16767436,fin:16747109}},koi:{name:`كوي (زينة)`,icon:`🎏`,wm:1500,fcr:2,t:[5,18,26,32],dens:3,doMin:4,ornamental:!0,look:{len:.9,body:16740419,belly:16777215,fin:16755601,patch:2171169}},goldfish:{name:`سمك الزينة الذهبي`,icon:`🐠`,wm:200,fcr:2,t:[8,18,24,30],dens:2,doMin:3.5,ornamental:!0,look:{len:.5,body:16752640,belly:16769154,fin:16740096}}},sh=[{id:`larva`,name:`يرقة`,max:.001},{id:`fry`,name:`زريعة`,max:.01},{id:`finger`,name:`إصبعيات`,max:.08},{id:`juv`,name:`يافع`,max:.45},{id:`adult`,name:`بالغ`,max:1/0}],ch=(e,t)=>sh.find(n=>e/t<n.max),lh=e=>oh[e].wm*4e-4,uh=(e,t)=>{let n=e/t;return n<.001?.12:n<.01?.08:n<.08?.05:n<.45?.03:.015},dh=new La(1,10,8),fh=new Da(1,1,4),ph=new Da(1,1,3),mh=new Map,hh=e=>(mh.has(e)||mh.set(e,new Ja({color:e,flatShading:!0})),mh.get(e)),gh=e=>lp(e,()=>_h(e));function _h(e){let t=oh[e].look,n=new An,r=t.len*.5,i=(e,t,r,i,a,o,s,c,l=0,u=0)=>{let d=new G(e,hh(t));return d.scale.set(r,i,a),d.position.set(o,s,c),d.rotation.set(l,u,0),n.add(d),d};return i(dh,t.body,.18*r,.2*r,.5*r,0,0,0),i(dh,t.belly,.15*r,.1*r,.42*r,0,-.09*r,.02*r),i(fh,t.fin,.16*r,.3*r,.03*r,0,0,-.62*r,-Math.PI/2),i(ph,t.fin,.03*r,.22*r,.2*r,0,.2*r,-.05*r),t.patch&&i(dh,t.patch,.15*r,.1*r,.14*r,0,.12*r,.1*r),n}var vh=e=>{let t=e;return()=>(t=t*16807%2147483647)/2147483647},yh=(e,t,n)=>Math.max(t,Math.min(n,e)),bh=new kn,xh={x:0,z:0,rad:14},Sh=null,Ch=null;function wh(e,t){let n=e*t/2;return Object.assign(xh,{x:n+34,z:-n*.35,rad:14})}function Th(e){let t=new An,n=new An,r=new An;e.add(t,n,r);let i=new G(new La(9,20,14),new ui({color:16774084,fog:!1})),a=new G(new La(6,20,14),new ui({color:14674175,fog:!1})),o=new Float32Array(1800),s=vh(7);for(let e=0;e<600;e++){let t=s()*6.283,n=.05+s()*.95,r=Math.sqrt(1-n*n);o.set([Math.cos(t)*r*280,n*280,Math.sin(t)*r*280],e*3)}let c=new Nr;c.setAttribute(`position`,new vr(o,3));let l=new _a(c,new fa({color:16777215,size:2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}));n.add(i,a,l);let u=new ui({color:16777215,transparent:!0,opacity:.94,fog:!1}),d=vh(11),f=[];for(let e=0;e<14;e++){let e=new An;for(let t=0;t<4+Math.floor(d()*3);t++){let n=new G(new Fa(5+d()*5,1),u);n.position.set(t*7-10,d()*3,(d()-.5)*6),n.scale.y=.55,e.add(n)}e.position.set((d()-.5)*340,55+d()*20,(d()-.5)*340),r.add(e),f.push(e)}let p=[3055210,3843674,2788444].map(e=>new Ja({color:e,flatShading:!0})),m=new Ja({color:7162945}),h=new Ea(.25,.32,1.6,6),g=new Fa(1.4,1),_=new Da(1.2,2.2,7);function v(e,n){t.clear();let r=e*n/2,i=vh(3),a=wh(e,n),o=[`oak`,`oak2`,`pine`,`poplar`,`bush`,`rock`].every(rp),s=Math.max(30,Math.round(e*2.4));for(let e=0;!o&&e<s;e++){let n=e/s*6.283+i()*.1,a=r+6+e%3*3+i()*2,o=new An,c=.8+i()*.7,l=e%4==0,u=new G(h,m);u.position.y=.8;let d=new G(l?_:g,p[e%3]);d.position.y=l?2.9:2.7,d.castShadow=u.castShadow=!0,o.add(u,d),o.scale.setScalar(c),o.position.set(Math.cos(n)*a,0,Math.sin(n)*a),t.add(o)}let c=o?0:e*6,l=new qi(g,new Ja({color:16777215,flatShading:!0}),c),u=new qi(h,m,c),d=new W;for(let e=0;e<c;e++){let t,n,o=0;do{let e=i()*6.283,a=r+16+i()*55;t=Math.cos(e)*a,n=Math.sin(e)*a}while(Math.hypot(t-a.x,n-a.z)<a.rad+6&&++o<8);let s=1+i()*1.4;bh.position.set(t,.8*s,n),bh.scale.set(s,s,s),bh.rotation.set(0,0,0),bh.updateMatrix(),u.setMatrixAt(e,bh.matrix),bh.position.y=2.7*s,bh.updateMatrix(),l.setMatrixAt(e,bh.matrix),l.setColorAt(e,d.setHSL(.33+i()*.06,.45+i()*.2,.3+i()*.12))}t.add(l,u);let f=[];if(rp(`barn`)){let e=(e,n,r,i,a,o=1)=>{let s=ap(e);return s.position.set(n,0,r),s.rotation.y=i,s.scale.setScalar(o),t.add(s),f.push({x:n,z:r,r:a}),s};e(`barn`,-(r+24),-r*.2,-Math.PI/2,10),e(`silo`,-(r+24),-r*.2+9,0,4),e(`tractor`,-(r+11),r*.55,.5,4,1.1),Ch=op(e(`windmill`,r*.35,-(r+28),.3,5,1.3),`Blades`);for(let[t,n]of[[-(r+15),-r*.2+6],[-(r+15),-r*.2+7.6],[-(r+13.5),-r*.2+6.8]])e(`hay`,t,n,Math.PI/2,2)}if(o){let n={oak:[],oak2:[],pine:[],poplar:[],bush:[],rock:[],rock2:[]},o={},c=(e,t,r,a)=>{bh.position.set(t,0,r),bh.scale.setScalar(a),bh.rotation.set(0,i()*6.283,0),bh.updateMatrix(),(n[e]??=[]).push(bh.matrix.clone()),(o[e]??=[]).push(new W().setScalar(.82+i()*.3))},l=(e,t,n)=>Math.hypot(e-a.x,t-a.z)>a.rad+n&&f.every(n=>Math.hypot(e-n.x,t-n.z)>n.r),u=[`oak`,`pine`,`oak2`,`poplar`,`oak`,`pine`,`oak2`];for(let e=0;e<s;e++){let t=e/s*6.283+i()*.1,n=r+6+e%3*3+i()*2,a=Math.cos(t)*n,o=Math.sin(t)*n;l(a,o,5)&&c(u[e%7],a,o,.8+i()*.6)}for(let t=0;t<e*7;t++){let e=i()*6.283,t=r+16+i()*55,n=Math.cos(e)*t,a=Math.sin(e)*t;l(n,a,6)&&c(u[Math.floor(i()*7)],n,a,1+i()*.9)}for(let t=0;t<e*2;t++){let e=i()*6.283,t=r+3+i()*14,n=Math.cos(e)*t,a=Math.sin(e)*t;l(n,a,4)&&c(`bush`,n,a,.7+i()*.8)}for(let e=0;e<30;e++){let t=i()*6.283,n=r+3+i()*40,a=Math.cos(t)*n,o=Math.sin(t)*n;l(a,o,3)&&c(rp(`rock2`)&&e%2?`rock2`:`rock`,a,o,.8+i()*1.4)}for(let e of Object.keys(n))t.add(cp(e,n[e],o[e]))}for(let e=0;e<16;e++){let n=e/16*6.283+i()*.2,a=r+90+i()*25,o=new G(new Fa(1,2),new Ja({color:d.setHSL(.3+i()*.05,.35,.38+i()*.1).getHex(),flatShading:!0}));o.scale.set(28+i()*22,10+i()*16,28+i()*22),o.position.set(Math.cos(n)*a,-3,Math.sin(n)*a),t.add(o)}let v=new G(new Ta(a.rad+2.5,48),new Ja({color:15127459})),y=new G(new Ta(a.rad,64),Sd(2789316,.9));Object.assign(xh,a),Sh=y;for(let e of[v,y])e.rotation.x=-Math.PI/2,e.position.set(a.x,e===v?.02:.05,a.z),e.receiveShadow=!0,t.add(e);let b=new Ja({color:10134952,flatShading:!0});for(let e=0;!o&&e<28;e++){let e=i()*6.283,n=r+3+i()*40,o=new G(new ka(.5+i()*.8),b);o.position.set(Math.cos(e)*n,.2,Math.sin(e)*n),o.rotation.set(i()*3,i()*3,0),o.castShadow=!0,Math.hypot(o.position.x-a.x,o.position.z-a.z)>a.rad+3&&t.add(o)}let x=new qi(new Fa(.13,0),new Ja({color:16777215,flatShading:!0}),260),S=[16777215,16769126,16748465,11701759,16752474];for(let e=0;e<260;e++){let t=i()*6.283,n=r+1.5+i()*32,o=Math.cos(t)*n,s=Math.sin(t)*n;bh.position.set(o,.14,s),bh.scale.setScalar(Math.hypot(o-a.x,s-a.z)<a.rad+3?.001:1),bh.updateMatrix(),x.setMatrixAt(e,bh.matrix),x.setColorAt(e,d.setHex(S[Math.floor(i()*S.length)]))}t.add(x)}let y=new V,b=new W(.12,.14,.24),x=new W(2.4,2.4,2.5);function S(e,t,r,o){n.position.copy(e.position);let s=t.sunAngle;y.set(Math.cos(s)*.8,Math.sin(s),.3).normalize(),i.position.copy(y).multiplyScalar(260),a.position.copy(y).multiplyScalar(-260),i.visible=!1,Ch&&(Ch.rotation.z+=o*(.4+.8*t.cloud)),a.visible=y.y<.05,l.material.opacity=yh(1-r*2.5,0,1)*(1-.7*t.cloud),u.color.copy(b).lerp(x,r);let c=Math.round(3+11*t.cloud);f.forEach((e,t)=>{e.visible=t<c,e.position.x+=o*1.5,e.position.x>190&&(e.position.x=-190)})}return{decor:t,buildDecor:v,update:S,setTwin:e=>{t.visible=n.visible=r.visible=!e},lakeMesh:()=>Sh}}var Eh=[],Dh=1.5,Oh=6,kh=(e,t,n)=>Math.max(t,Math.min(n,e)),Ah=new Ja({color:8022613,flatShading:!0}),jh=new Ja({color:7901340}),Mh=(e,t,n,r,i,a)=>{let o=new G(t,n);return o.position.set(r,i,a),o.castShadow=!0,e.add(o),o},Nh=(e,t=0)=>new Ja({color:e,emissive:e,emissiveIntensity:t}),Ph=(e,t)=>Math.max(10,Math.floor(t*oh[e].dens/(oh[e].wm/1e3))),Fh=[`auto`,`on`,`off`],Ih=e=>Fh[(Fh.indexOf(e)+1)%3];function Lh(e,t,n){let r=oh[t],i=Ph(t,n);return{kind:e,id:`${e}${Date.now().toString(36)}${Eh.length}`,sp:t,vol:n,cap:i,n:i,w:lh(t),age:0,temp:20,do:8,tan:.1,nh3:0,ph:7.6,path:.05,waste:0,hopperCap:Math.max(5,Math.round(i*(r.wm/1e3)*uh(r.wm,r.wm)*3)),hopper:0,feederMode:`auto`,aerMode:`auto`,pumpMode:`auto`,uvMode:`auto`,aerOn:!1,pumpOn:!1,uvOn:!1,feedAcc:0,gainAcc:0,fcr:null,eaten:0,status:`ok`,note:``,hist:[],histT:0,fish:[],group:null,center:new V}}function Rh(e,t,n,r){let i=Math.min(t.i,n.i),a=Math.max(t.i,n.i),o=Math.min(t.j,n.j),s=Math.max(t.j,n.j);if(a-i<2||s-o<2)return`الحوض 3×3 مربعات على الأقل`;let c=[];for(let e=i;e<=a;e++)for(let t=o;t<=s;t++){let n=Bp(e,t);if(!n)return`خارج حدود المزرعة`;if(n.blocked||n.road||n.tank||n.crop||n.machine||n.pen||n.hatch||n.pond)return`المساحة مشغولة`;c.push(n)}let l=zp(i)-1,u=zp(a)+1,d=zp(o)-1,f=zp(s)+1,p=u-l,m=f-d,h=(l+u)/2,g=(d+f)/2,_=Lh(`pond`,r,p*m*Dh);Object.assign(_,{i0:i,i1:a,j0:o,j1:s,tiles:c,bounds:{x0:l+.5,x1:u-.5,z0:d+1.2,z1:f-.5},center:new V(h,0,g)}),_.hopper=_.hopperCap*.5;let v=new An;_.waterMat=Sd(3120081,.62),_.water=Mh(v,new wa(p-.3,.04,m-.3),_.waterMat,h,.14,g),_.water.castShadow=!1;for(let e of[d,f])Mh(v,new wa(p,.3,.25),Ah,h,.15,e);for(let e of[l,u])Mh(v,new wa(.25,.3,m),Ah,e,.15,g);if([`aerator`,`pump`,`uv_unit`,`feeder`].every(rp)){let e=(e,t)=>{let n=ap(e);return n.position.set(l+p*t,.28,d+.3),v.add(n),n};_.wheel=op(e(`aerator`,.2),`Wheel`),_.pumpM=sp(op(e(`pump`,.4),`Light`)),_.pumpM.emissive.setHex(3066993),_.uvM=sp(op(e(`uv_unit`,.6),`Glow`)),_.uvM.emissive.setHex(5227511),_.feedM=sp(op(e(`feeder`,.8),`Hopper`)),_.feedM.emissive.setHex(16761095)}else{_.wheel=new An;for(let e=0;e<4;e++){let t=Mh(_.wheel,new wa(.9,.5,.06),jh,0,0,0);t.rotation.x=e*Math.PI/4}_.wheel.position.set(l+p*.2,.55,d+.35),v.add(_.wheel),_.pumpM=Nh(3066993),Mh(v,new wa(.7,.6,.6),_.pumpM,l+p*.4,.55,d+.2),_.uvM=Nh(5227511),Mh(v,new Ea(.25,.25,1.1,10),_.uvM,l+p*.6,.7,d+.2),_.feedM=Nh(16761095),Mh(v,new Ea(.08,.08,.9,6),jh,l+p*.8,.5,d+.2),Mh(v,new Da(.45,.6,8),_.feedM,l+p*.8,1.2,d+.2).rotation.x=Math.PI}e.add(v),_.group=v;for(let e of c)e.pond=_,e.soil=0;return Hh(_),Eh.push(_),_}function zh(e,t,n,r,i=!1){let a=t-xh.x,o=n-xh.z;if(Math.hypot(a,o)>xh.rad-3.3)return`ضع القفص داخل البحيرة بعيداً عن الشاطئ`;if(!i&&Eh.some(e=>e.kind===`cage`&&Math.hypot(e.center.x-t,e.center.z-n)<7))return`يوجد قفص قريب. ابتعد قليلاً`;let s=Lh(`cage`,r,144);Object.assign(s,{bounds:{x0:t-Oh/2+.5,x1:t+Oh/2-.5,z0:n-Oh/2+.5,z1:n+Oh/2-.5},center:new V(t,0,n),lx:a,lz:o,temp:18}),s.hopper=s.hopperCap*.5;let c=new An,l=new Ja({color:16757504});for(let e of[-1,1])Mh(c,new wa(6.3,.22,.22),l,t,.3,n+e*Oh/2),Mh(c,new wa(.22,.22,6.3),l,t+e*Oh/2,.3,n);s.waterMat=Sd(3120081,.5),Mh(c,new wa(5.7,1.5,5.7),s.waterMat,t,.45,n).castShadow=!1;let u=new ua(new Pa(new wa(Oh,1.7,Oh)),new Qi({color:15527921}));if(u.position.set(t,.4,n),c.add(u),rp(`feeder`)){let e=ap(`feeder`);e.position.set(t+Oh/2,.15,n+Oh/2),c.add(e),s.feedM=sp(op(e,`Hopper`)),s.feedM.emissive.setHex(16761095)}else s.feedM=Nh(16761095),Mh(c,new Da(.45,.7,8),s.feedM,t+Oh/2,.9,n+Oh/2).rotation.x=Math.PI;return e.add(c),s.group=c,Hh(s),Eh.push(s),s}function Bh(e,t){if(e.remove(t.group),t.group.traverse(e=>e.geometry?.dispose?.()),t.tiles)for(let e of t.tiles)e.pond=null;Eh.splice(Eh.indexOf(t),1)}var Vh=e=>[...Eh].forEach(t=>Bh(e,t));function Hh(e){let t=Math.min(Math.ceil(e.n),e.kind===`cage`?22:16),n=e.bounds;for(;e.fish.length>t;)e.group.remove(e.fish.pop().mesh);for(;e.fish.length<t;){let t=gh(e.sp),r=n.x0+Math.random()*(n.x1-n.x0),i=n.z0+Math.random()*(n.z1-n.z0),a=e.kind===`cage`?.1+Math.random()*.8:.06+Math.random()*.05;t.position.set(r,a,i),e.group.add(t),e.fish.push({mesh:t,tx:r,tz:i,wait:Math.random()*2})}}function Uh(e){return e.n>=1?`أفرغ الوحدة (حصاد) قبل توريد زريعة جديدة`:(Object.assign(e,{n:e.cap,w:lh(e.sp),age:0,path:.05,feedAcc:0,gainAcc:0,fcr:null,hist:[]}),Hh(e),`وُرّدت ${e.cap} يرقة/زريعة (${oh[e.sp].name})`)}function Wh(e,t){let n=oh[e.sp];if(n.ornamental)return`سمك الزينة لا يُحصد في هذه المحاكاة`;if(e.n<1)return`لا توجد أسماك`;if(e.w<n.wm*.9)return`لم تصل لوزن السوق (${Math.round(e.w)} من ${n.wm} غرام)`;let r=Math.round(e.n*e.w/1e3);t.fish=(t.fish??0)+r;let i=Math.round(e.n);return e.n=0,Hh(e),`حُصد ${i} سمكة: ${r} كغ`}function Gh(e){let t=Math.min(e.hopperCap-e.hopper,Mm.feed);return t<=0?Mm.feed<=0?`مخزن العلف فارغ`:`المغذي ممتلئ`:(e.hopper+=t,Mm.feed-=t,`عُبّئ ${t.toFixed(1)} كغ`)}function Kh(e,t,n){let r=e/120;for(let i of Eh){let a=oh[i.sp],o=i.kind===`pond`,s=t.airTemp-1+(o?2*t.sun:0);i.temp+=((i.pumpOn?s*.5+9:s)-i.temp)*Math.min(1,e*.02);let c=i.n*i.w/1e3,l=c/i.vol;o&&(i.aerOn=i.aerMode===`auto`?i.do<5?!0:i.do>7?!1:i.aerOn:i.aerMode===`on`,i.pumpOn=i.pumpMode===`auto`?i.tan>.8||i.temp>a.t[2]+1||i.path>.5?!0:i.tan<.3&&i.temp<a.t[2]&&i.path<.3?!1:i.pumpOn:i.pumpMode===`on`,i.uvOn=i.uvMode===`auto`?i.path>.25?!0:i.path<.1?!1:i.uvOn:i.uvMode===`on`),i.feederMode===`auto`&&i.hopper<i.hopperCap*.3&&Gh(i);let u=$u(i.temp,a.t),d=kh((i.do-2)/(a.doMin-1),0,1),f=0,p=0,m=0;if(i.n>=1){let e=c*uh(i.w,a.wm)*u*d*r,t=.05+.3*(1-d)+(i.path>.5?.2:0),n=Math.min(e*(1+t),i.hopper);f=n/(1+t),p=n-f,i.hopper-=n;let o=a.fcr*(1+.8*(1-d)+.6*kh(i.nh3*10,0,1)+.5*i.path+.5*(1-u));m=f*1e3/i.n/o,i.w<a.wm*1.1&&(i.w+=m)}let h=kh(14.6-.39*i.temp+.0057*i.temp**2,4,14.6);i.waste=i.waste*Math.exp(-r*1.5)+p/i.vol;let g=o?.6+(i.aerOn?6:0)+(i.pumpOn?4:0):5,_=(l*1.2+i.path*2+i.waste*300)*kh(1+(i.temp-20)/20,.5,2);if(i.do=kh(i.do+(g*(h-i.do)+(o?3*t.sun:0)-_)*r,0,h*1.3),i.tan+=(f+p)*30/i.vol-i.tan*(.4+(i.pumpOn?1.2:0)+(o?0:3))*r,i.tan=Math.max(0,i.tan),i.ph+=(7.4+.7*t.sun-.1*kh(l/5,0,1)-i.ph)*Math.min(1,e*.05),i.nh3=i.tan/(1+10**(.09018+2729.92/(273.2+i.temp)-i.ph)),i.path=kh(i.path+(.04+.6*Math.min(1,i.waste*3)+.3*Math.max(0,l/a.dens-.6)+(u<.4?.1:0)-(i.uvOn?1.5:0)-(i.pumpOn?.4:0)-(o?0:.5)-.3*i.path)*r,0,1),i.n>=1){let e=i.w/a.wm,t=(e<.001?.01:e<.01?.005:8e-4)+.15*kh((a.doMin*.8-i.do)/a.doMin,0,1)+.2*kh(i.nh3/.2,0,1)+.15*Math.max(0,i.path-.5)+(u<.15?.1:0);i.n=Math.max(0,i.n*(1-t*r)),i.n<1&&(i.n=0)}i.age+=r;let v=Math.exp(-r/5);i.feedAcc=i.feedAcc*v+f,i.gainAcc=i.gainAcc*v+m*i.n/1e3,i.fcr=i.gainAcc>1e-6?i.feedAcc/i.gainAcc:null,i.eaten=f;let y=i.n>=1&&(i.do<a.doMin*.7||i.nh3>.1||i.path>.7||i.temp>a.t[3]||i.temp<a.t[0]),b=i.n>=1&&(i.do<a.doMin||i.nh3>.03||i.path>.4||i.hopper<i.hopperCap*.1||u<.6);i.note=i.n<1?`فارغ: وَرِّد زريعة`:i.do<a.doMin?`أكسجين منخفض`:i.nh3>.03?`أمونيا سامة`:i.path>.4?`ممرضات مرتفعة`:i.hopper<i.hopperCap*.1?`المغذي شبه فارغ`:u<.6?`الحرارة خارج المثالي`:``,i.status=y?`crit`:b||i.n<1?`warn`:`ok`,i.histT+=r,i.histT>.1&&(i.histT=0,i.hist.push(i.fcr),i.hist.length>80&&i.hist.shift()),qh(i),o&&(i.wheel.rotation.x+=i.aerOn?n*8:0,i.pumpM.emissiveIntensity=i.pumpOn?.9:0,i.uvM.emissiveIntensity=i.uvOn?1.2:.05,i.waterMat.color.setHex(i.status===`crit`?7049018:i.path>.4?5086086:3120081)),i.feedM.emissiveIntensity=i.hopper>.5?.4:0;let x=Math.max(.3,.45+.55*kh(i.w/a.wm,0,1));for(let e of i.fish){e.mesh.scale.setScalar(x*1.3),e.wait-=n;let t=e.tx-e.mesh.position.x,r=e.tz-e.mesh.position.z,a=Math.hypot(t,r);if(a<.25){if(e.wait<=0){let t=i.bounds;e.tx=t.x0+Math.random()*(t.x1-t.x0),e.tz=t.z0+Math.random()*(t.z1-t.z0),e.wait=Math.random()*1.5}}else{let i=Math.min(a,1.1*n);e.mesh.position.x+=t/a*i,e.mesh.position.z+=r/a*i,e.mesh.rotation.y=Math.atan2(t,r)}}}}function qh(e){Math.min(Math.ceil(e.n),e.kind===`cage`?22:16)!==e.fish.length&&Hh(e)}var Jh=[],Yh=Object.keys(J).filter(e=>J[e].inc),Xh=37.5,Zh=new Ja({color:15987178,flatShading:!0}),Qh=new Ja({color:2849400,flatShading:!0}),$h=new Ja({color:16771496,emissive:16763213,emissiveIntensity:.6}),eg=new Ja({color:4545124}),tg=(e,t,n,r,i,a)=>{let o=new G(t,n);return o.position.set(r,i,a),o.castShadow=o.receiveShadow=!0,e.add(o),o};function ng(e,t){let n=[];for(let[e,r]of[[0,0],[1,0],[0,1],[1,1]]){let i=Bp(t.i+e,t.j+r);if(!i)return`خارج حدود المزرعة`;if(i.blocked||i.road||i.tank||i.crop||i.machine||i.pen||i.hatch||i.pond)return`المساحة مشغولة (يلزم 2×2 مربع حر)`;n.push(i)}let r=(zp(t.i)+zp(t.i+1))/2,i=(zp(t.j)+zp(t.j+1))/2,a=new An;if(rp(`hatchery`)){let e=ap(`hatchery`);e.position.set(r,0,i);let t=sp(op(e,`Glass`));t.emissive.setHex(16763213),t.emissiveIntensity=.7,a.add(e)}else{tg(a,new wa(3.4,2.2,3.4),Zh,r,1.1,i),tg(a,new wa(3.8,.35,3.8),Qh,r,2.4,i),tg(a,new wa(.5,.9,.5),eg,r+1.1,3,i-1),tg(a,new wa(.9,1.5,.1),eg,r,.75,i+1.72);for(let e of[-1,1])tg(a,new wa(.7,.6,.1),$h,r+e*1,1.4,i+1.72)}e.add(a);let o=Yh.find(e=>!J[e].ornamental)??Yh[0],s={kind:`hatchery`,id:`h${Date.now().toString(36)}${Jh.length}`,tile:t,tiles:n,sp:o,eggs:0,day:0,setT:Xh,setRH:55,turn:!0,power:!0,temp:25,rh:50,quality:1,hatched:0,status:`ok`,note:``,hist:[],histT:0,group:a,center:new V(r,0,i)};for(let e of n)e.hatch=s,e.soil=0;return Jh.push(s),s}function rg(e,t){e.remove(t.group),t.group.traverse(e=>e.geometry?.dispose?.());for(let e of t.tiles)e.hatch=null;Jh.splice(Jh.indexOf(t),1)}var ig=e=>[...Jh].forEach(t=>rg(e,t));function ag(e){return e.eggs>0?`لا يمكن تغيير النوع أثناء الحضانة`:(e.sp=Yh[(Yh.indexOf(e.sp)+1)%Yh.length],`النوع: ${J[e.sp].name} (حضانة ${J[e.sp].inc} يوماً)`)}function og(e,t,n=100){if(e.eggs>0)return`الحاضنة مشغولة بدفعة قيد الحضانة`;if(e.hatched>0)return`انقل الكتاكيت المفقوسة أولاً`;let r=Math.min(n,Math.floor(t.eggs??0));return t.eggs=(t.eggs??0)-r,e.eggs=r>0?r:n,e.day=0,e.quality=1,r>0?`حُمّل ${r} بيضة من المخزون`:`حُمّل ${n} بيضة مخصبة (تجريبية)`}function sg(e,t){if(t.hatched<1)return`لا توجد كتاكيت مفقوسة`;let n=J[t.sp],r=jm.filter(e=>e.sp===t.sp&&e.n<e.cap).sort((e,t)=>(t.purpose===`meat`)-(e.purpose===`meat`))[0];if(!r)return`لا توجد حظيرة ${n.name} بها مكان. أنشئ واحدة أولاً`;let i=Math.min(t.hatched,r.cap-r.n),a=n.birth*1.5;return r.w=(r.w*r.n+a*i)/(r.n+i),r.n+=i,t.hatched-=i,Xm(e,r),`نُقل ${i} إلى حظيرة ${n.name}${t.hatched?` (تبقّى ${t.hatched})`:``}`}function cg(e,t){let n=e/120;for(let r of Jh){let i=J[r.sp],a=r.power?r.setT+(t.airTemp-22)*.04:t.airTemp,o=r.power?r.setRH+(t.rh-50)*.05:t.rh;if(r.temp+=(a-r.temp)*Math.min(1,e*.2),r.rh+=(o-r.rh)*Math.min(1,e*.1),r.eggs>0){r.day+=n;let e=Math.abs(r.temp-Xh),t=Math.abs(r.rh-55),a=Math.max(0,1-Math.max(0,e-.5)*.5)*(t<=10?1:Math.max(0,1-(t-10)*.03))*(r.turn?1:.7);r.quality+=(a-r.quality)*Math.min(1,n/i.inc*1.5),r.day>=i.inc&&(r.hatched+=Math.round(r.eggs*.92*r.quality),r.eggs=0,r.day=0)}let s=Math.abs(r.temp-Xh),c=r.eggs>0&&(!r.power||s>1.5||!r.turn);r.note=r.eggs>0?r.power?s>.6?`الحرارة ${r.temp.toFixed(1)}° بعيدة عن 37.5`:r.turn?Math.abs(r.rh-55)>10?`الرطوبة بعيدة عن المثالية`:``:`التقليب متوقف`:`الكهرباء مفصولة`:r.hatched?`${r.hatched} كتكوت جاهز للنقل`:``,r.status=c?`crit`:r.note?`warn`:`ok`,r.histT+=n,r.histT>.05&&(r.histT=0,r.hist.push(r.temp),r.hist.length>80&&r.hist.shift())}}var lg=()=>{let e=0,t=0;for(;!e;)e=Math.random();for(;!t;)t=Math.random();return Math.sqrt(-2*Math.log(e))*Math.cos(2*Math.PI*t)},ug=90,dg=[[5,1713022],[15,2201331],[22,2541274],[28,6732650],[34,16771899],[40,16733986],[48,16777215]],fg=e=>e.pond?e.pond.temp:e.pen?e.pen.temp:e.crop?Dd.airTemp-1+(e.stress===`water`?4+3*Dd.sun:0):e.temp,pg={soil_moisture:{name:`رطوبة التربة`,icon:`💧`,unit:`% VWC`,acc:2,dec:1,color:2201331,read:e=>Vp(e),judge:(e,t)=>t.moisture<.15?`crit`:t.moisture<.3||t.moisture>.92?`warn`:`ok`},soil_temp:{name:`حرارة التربة`,icon:`🌡️`,unit:`°C`,acc:.5,dec:1,color:16740419,read:e=>e.temp,judge:e=>e<2||e>38?`crit`:e<8||e>32?`warn`:`ok`},soil_ph:{name:`حموضة التربة`,icon:`🧪`,unit:`pH`,acc:.1,dec:2,color:10233776,read:e=>e.ph,judge:e=>e<5||e>8.2?`crit`:e<5.8||e>7.5?`warn`:`ok`},soil_ec:{name:`ملوحة التربة`,icon:`🧂`,unit:`dS/m`,acc:.05,dec:2,color:16761095,read:e=>e.ec*(1.5-.8*e.moisture),judge:e=>e>4?`crit`:e>2.5?`warn`:`ok`},air_temp:{name:`حرارة الجو`,icon:`☀️`,unit:`°C`,acc:.3,dec:1,color:16763432,read:()=>Dd.airTemp,judge:e=>e<0||e>40?`crit`:e<5||e>35?`warn`:`ok`},air_rh:{name:`رطوبة الجو`,icon:`💨`,unit:`% RH`,acc:2,dec:0,color:2541274,read:()=>Dd.rh,judge:e=>e<30||e>90?`warn`:`ok`},light:{name:`شدة الضوء`,icon:`🔆`,unit:`klx`,acc:3,dec:0,color:16773494,read:()=>100*Dd.sun,judge:()=>`ok`},pen_temp:{name:`حرارة الحظيرة`,icon:`🏠`,unit:`°C`,acc:.3,dec:1,color:16747109,needsPen:!0,read:e=>e.pen?.temp??0,judge:(e,t)=>t.pen?.stress>.8?`crit`:t.pen?.stress>.3?`warn`:`ok`},pen_nh3:{name:`أمونيا الحظيرة`,icon:`☁️`,unit:`ppm`,acc:1,dec:0,color:11457921,needsPen:!0,read:e=>e.pen?.nh3??0,judge:e=>e>50?`crit`:e>25?`warn`:`ok`},pen_feed:{name:`مستوى العلف`,icon:`🌾`,unit:`%`,acc:1,dec:0,color:16766287,needsPen:!0,read:e=>e.pen?100*e.pen.feedLevel/e.pen.feedCap:0,judge:e=>e<10?`crit`:e<25?`warn`:`ok`},pen_weight:{name:`ميزان الوزن`,icon:`⚖️`,unit:`كغ`,acc:.5,dec:1,color:11583173,needsPen:!0,read:e=>e.pen?.w??0,judge:()=>`ok`},aq_temp:{name:`حرارة الماء`,icon:`🌊`,unit:`°C`,acc:.2,dec:1,color:5099745,needsPond:!0,read:e=>e.pond?.temp??0,judge:(e,t)=>{let n=t.pond&&oh[t.pond.sp];return n?e<n.t[0]||e>n.t[3]?`crit`:e<n.t[1]-2||e>n.t[2]+2?`warn`:`ok`:`ok`}},aq_do:{name:`الأكسجين المذاب`,icon:`🫧`,unit:`ملغ/ل`,acc:.2,dec:1,color:8445674,needsPond:!0,read:e=>e.pond?.do??0,judge:(e,t)=>{let n=t.pond?oh[t.pond.sp].doMin:4;return e<n*.7?`crit`:e<n?`warn`:`ok`}},aq_nh3:{name:`الأمونيا الكلية TAN`,icon:`☁️`,unit:`ملغ/ل`,acc:.05,dec:2,color:11457921,needsPond:!0,read:e=>e.pond?.tan??0,judge:e=>e>1.5?`crit`:e>.8?`warn`:`ok`},aq_ph:{name:`حموضة الماء`,icon:`🧪`,unit:`pH`,acc:.1,dec:2,color:12216520,needsPond:!0,read:e=>e.pond?.ph??7,judge:e=>e<6||e>9?`crit`:e<6.5||e>8.5?`warn`:`ok`},aq_feed:{name:`مستوى المغذي`,icon:`🌾`,unit:`%`,acc:1,dec:0,color:16766287,needsPond:!0,read:e=>e.pond?100*e.pond.hopper/e.pond.hopperCap:0,judge:e=>e<10?`crit`:e<25?`warn`:`ok`},aq_weight:{name:`وزن السمكة (عينة)`,icon:`⚖️`,unit:`غ`,acc:1,dec:1,color:11583173,needsPond:!0,read:e=>e.pond?.w??0,judge:()=>`ok`},thermal:{name:`كاميرا حرارية`,icon:`🔥`,unit:`°C`,acc:.5,dec:1,color:16007990,thermal:!0,judge:(e,t,n)=>n.stressed>=5||n.max>45?`crit`:n.stressed>0?`warn`:`ok`}},mg=[];function hg(e,t){let n=pg[e],r=n.read(t)+lg()*(n.acc/2),i=10**n.dec;return Math.round(r*i)/i}function gg(e){let t=99,n=-99,r=0,i=0,a=0,o=null;for(let s=-6;s<=6;s++)for(let c=-6;c<=6;c++){let l=Bp(e.i+s,e.j+c);if(!l)continue;let u=fg(l);r+=u,i++,l.stress===`water`&&a++,u<t&&(t=u),u>n&&(n=u,o=[l.i,l.j])}return{min:t,max:n,avg:r/i,stressed:a,hot:o,tiles:i}}var _g=new Map;function vg(e){let t=pg[e.type],n=_g.get(e.id);if(e.real=!!n&&Date.now()-n.ts<3e5&&!t.thermal,e.real)e.value=n.value;else if(t.thermal){e.extra=gg(e.tile);let n=10**t.dec;e.value=Math.round((e.extra.avg+lg()*.25)*n)/n}else e.value=hg(e.type,e.tile);e.status=t.judge(e.value,e.tile,e.extra),e.hist.push(e.value),e.hist.length>ug&&e.hist.shift(),e.stamp=performance.now()}function yg(e,t,n){let r=pg[e],i=new An,a=ap(r.thermal?`thermal_cam`:`soil_sensor`);if(a){let e=op(a,`Head`);return e&&e.material&&!r.thermal&&(e.material.color.setHex(r.color),e.material.emissive.setHex(r.color),e.material.emissiveIntensity=.35),r.thermal||a.scale.setScalar(.85),i.add(a),i.position.set(zp(t.i)-.7+.45*n,0,zp(t.j)+.75),i.userData.tile=t,i}let o=r.thermal?2.4:.9,s=new G(new Ea(.05,.05,o,6),new Ja({color:6323595}));s.position.y=o/2;let c=new G(r.thermal?new wa(.55,.3,.3):new wa(.3,.18,.3),new Ja({color:r.color,emissive:r.color,emissiveIntensity:.4}));if(c.position.y=o+.1,c.castShadow=!0,i.add(s,c),r.thermal){let e=new G(new Da(.12,.2,8),new Ja({color:2171169}));e.rotation.x=Math.PI/2,e.position.set(0,o+.1,.25),i.add(e)}return i.position.set(zp(t.i)-.7+.45*n,0,zp(t.j)+.75),i.userData.tile=t,i}function bg(e,t,n){if(!pg[n]||mg.some(e=>e.tile===t&&e.type===n))return null;let r=mg.filter(e=>e.tile===t).length,i={id:`${n}@${t.i},${t.j}`,type:n,tile:t,slot:r,group:yg(n,t,r),hist:[],value:0,status:`ok`,extra:null,stamp:0};return e.add(i.group),mg.push(i),vg(i),i}function xg(e,t){e.remove(t.group),mg.splice(mg.indexOf(t),1)}var Sg=(e,t)=>mg.filter(e=>e.tile===t).forEach(t=>xg(e,t)),Cg=0;function wg(e){Cg+=e,!(Cg<1)&&(Cg=0,mg.forEach(vg))}function Tg(e){return[`soil_moisture`,`soil_temp`,`soil_ph`,`soil_ec`].map(t=>{let n=pg[t],r=hg(t,e);return{type:t,name:n.name,icon:n.icon,unit:n.unit,acc:n.acc,dec:n.dec,value:r,status:n.judge(r,e)}})}var Eg=dg.map(([e,t])=>[e,new W(t)]),Dg=new W;function Og(e,t){let n=Math.min(48,Math.max(5,e));for(let e=1;e<Eg.length;e++)if(n<=Eg[e][0]){let[r,i]=Eg[e-1],[a,o]=Eg[e];return t.copy(i).lerp(o,(n-r)/(a-r))}return t.copy(Eg.at(-1)[1])}function kg(){for(let e of mg)if(e.type===`thermal`)for(let t=-6;t<=6;t++)for(let n=-6;n<=6;n++){let r=Bp(e.tile.i+t,e.tile.j+n);r&&r.mesh.material.color.copy(Og(fg(r),Dg))}}var Ag={northern:[`sheep`,`meat`],central:[`cattle`,`milk`],western:[`sheep`,`meat`],southern:[`buffalo`,`milk`]};function jg(e,t,n){let r=Object.keys(q).filter(e=>!q[e].perennial||q[e].cat===`forage`).map(n=>[n,Kd(n,e,t)]).filter(e=>e[1]>0).sort((e,t)=>t[1]-e[1]),i=r.filter(e=>e[1]>=.5),a=i.length?i:r.slice(0,2),o=[],s=new Set;for(let[e]of a)!s.has(q[e].shape)&&o.length<n&&(o.push(e),s.add(q[e].shape));for(let[e]of a)!o.includes(e)&&o.length<n&&o.push(e);return{list:o,weak:!i.length&&o.length>0}}function Mg(e,t,n){let r=qp??{i0:0,j0:0,w:Dp,h:Dp},i=r.w,a=r.h,o=(e,t)=>e<0||t<0||e>=i||t>=a?null:Bp(r.i0+e,r.j0+t),s=[],c=new Date().getMonth()+1,l=Rd(t),u=Cd[t],d=i-2,f=a-2,p=f,m=[`livestock`,`poultry`,`aqua`,`bees`,`aviary`].filter(e=>n[e]),h={livestock:`حظيرة`,poultry:`دواجن`,aqua:`أسماك`,bees:`نحل`,aviary:`طيور زينة`};for(;m.length>1&&Math.floor((p-(m.length-1))/m.length)<3;)s.push(`حُذف قسم ${h[m.pop()]} لضيق المساحة`);if(d<8||f<8)return[`المساحة صغيرة جداً للمخطط الآلي (8×8 على الأقل بعد الحدود)`];let g=n.crops||n.orchard,_=g?m.length?Math.floor(d*(m.length===1?.6:.5)):d:0,v=1+_+(g&&m.length?1:0),y=i-1-v,b=(e,t,n,r)=>[o(e,t),o(n,r)],x=n.orchard&&_>=5&&f>=16,S=n.crops?x?a-10:a-2:0;if(n.crops&&_>=3){let n=[];for(let t=1;t<=_;t++){let r=(t-1)%4==3;for(let n=1;n<=S;n++){let i=o(t,n);r?!i.machine&&(n-1)%5==2&&(i.soil=1,lm(e,i)):i.soil=1}!r&&(t-1)%4==0&&n.push(t)}let{list:r,weak:i}=jg(t,c,Math.min(4,n.length));r.length?(i&&s.push(`الموسم غير مناسب لمعظم المحاصيل: اخترت الأفضل المتاح`),n.forEach((t,n)=>{let i=r[n%r.length];for(let n=t;n<t+3&&n<=_;n++)for(let t=1;t<=S;t++){let r=o(n,t);r.soil&&!r.machine&&!r.crop&&$p(e,r,i)}let a=o(Math.min(t+1,_),Math.round(S/2)+1);if(bg(e,a,`soil_moisture`),n===0)for(let t of[`soil_temp`,`soil_ph`,`soil_ec`,`air_temp`,`air_rh`,`light`])bg(e,a,t)}),s.push(`محاصيل: ${r.map(e=>q[e].name).join(`، `)}`)):s.push(`لا يوجد محصول يناسب هذا الشهر في هذا الإقليم: الأرض محروثة وجاهزة، ازرع عند تحسن الطقس`),bg(e,o(Math.round(_/2)+1,Math.round(S/2)+1),`thermal`)}if(x){let r=e=>e.map(e=>[e,Kd(e,t,c)*(.7+q[e].kg/600)]).filter(e=>e[1]>0).sort((e,t)=>t[1]-e[1]),l=r(Object.keys(q).filter(e=>q[e].cat===`palm`))[0]?.[0],u=r(Object.keys(q).filter(e=>q[e].cat===`fruit`&&q[e].tree)).slice(0,2).map(e=>e[0]),d=n.crops?a-8:1,f=a-2;if(n.crops)for(let e=1;e<=_;e++){let t=o(e,d-1);t&&(t.road=1)}for(let t=1;t<=_;t++)for(let n=d;n<=f;n++){let r=o(t,n),i=t-1,a=n-d;if(r.soil=1,i%4==1&&a%4==1&&!r.machine)lm(e,r);else if(i%2==0&&a%2==0){let t=a===2||a===6?u[(i>>1)%Math.max(1,u.length)]??l:l;t&&$p(e,r,t)}}let p=r([`eucalyptus`,`sidr`])[0]?.[0];if(p)for(let t=1;t<=Math.max(i,a)-2;t+=3)for(let n of[t<=a-2?o(0,t):null,t<=i-2?o(t,0):null])n&&!n.crop&&(n.soil=1,$p(e,n,p));l&&bg(e,o(Math.min(3,_),d+2),`soil_moisture`),s.push(`بستان: ${l?q[l].name:`—`}${u.length?` + `+u.map(e=>q[e].name).join(`، `):``}${p?` + مصدّ رياح (`+q[p].name+`)`:``}`)}if(g&&m.length&&v-1>=1){for(let e=1;e<=a-2;e++){let t=o(v-1,e);t&&!t.crop&&!t.machine&&(t.road=1)}let t=o(v-1,0);t&&Xp(e,t)&&s.push(`خزان مياه + طريق رئيسي`)}if(m.length&&y>=3){let t=Math.floor((p-(m.length-1))/m.length);m.forEach((n,r)=>{let a=1+r*(t+1),c=a+t-1,d=v,f=i-2;if(t<3)return s.push(`المساحة لا تكفي لكل الأقسام`);if(n===`livestock`){let[t,n]=Ag[l?.agroZone.split(`_`)[0]]??Ag.central,r=Jm(e,...b(d,a,Math.min(f,d+9),Math.min(c,a+9)),t,n);if(typeof r==`string`)return s.push(r);for(let t of[`pen_temp`,`pen_nh3`,`pen_feed`])bg(e,Bp(Math.round((r.i0+r.i1)/2),Math.round((r.j0+r.j1)/2)),t);s.push(`حظيرة ${t===`sheep`?`أغنام`:t===`cattle`?`أبقار`:`جاموس`}`)}else if(n===`poultry`){let n=d,r=a;y>=6?(ng(e,o(d,a)),n=d+3):t>=6&&(ng(e,o(d,a)),r=a+3);let i=Jm(e,...b(n,r,Math.min(f,n+8),Math.min(c,r+7)),`broiler`,`meat`);if(typeof i==`string`)return s.push(i);for(let t of[`pen_temp`,`pen_nh3`])bg(e,Bp(Math.round((i.i0+i.i1)/2),Math.round((i.j0+i.j1)/2)),t);s.push(`دواجن + مفقس`)}else if(n===`bees`){let t=Jm(e,...b(d,a,Math.min(f,d+3),Math.min(c,a+2)),`bee`,`honey`);if(typeof t==`string`)return s.push(t);bg(e,Bp(Math.round((t.i0+t.i1)/2),Math.round((t.j0+t.j1)/2)),`pen_temp`),s.push(`منحل (خلايا نحل)`)}else if(n===`aviary`){let t=Jm(e,...b(d,a,Math.min(f,d+4),Math.min(c,a+3)),u.mean>=25?`cockatiel`:`canary`,`show`);if(typeof t==`string`)return s.push(t);bg(e,Bp(Math.round((t.i0+t.i1)/2),Math.round((t.j0+t.j1)/2)),`pen_temp`),s.push(`مطيَر طيور زينة`)}else{let t=Rh(e,...b(d,a,Math.min(f,d+9),Math.min(c,a+7)),u.mean>=25?`tilapia`:`carp`);if(typeof t==`string`)return s.push(t);let n=Bp(Math.round((t.i0+t.i1)/2),Math.round((t.j0+t.j1)/2));for(let t of[`aq_temp`,`aq_do`,`aq_nh3`,`aq_ph`])bg(e,n,t);s.push(`حوض ${u.mean>=25?`بلطي`:`كارب`}`)}})}else m.length&&s.push(`المساحة لا تكفي لمنطقة الخدمات`);return s}var Ng=8,Pg=4,Fg=new W(1,.78,.45);function Ig(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,`rgba(255,214,140,1)`),n.addColorStop(.35,`rgba(255,190,100,.45)`),n.addColorStop(1,`rgba(255,170,80,0)`),t.fillStyle=n,t.fillRect(0,0,128,128),new ba(e)}function Lg(e){let t=new An,n=Ig();e.add(t);let r=new Ja({color:4869973,roughness:.6,metalness:.7}),i=new ui({color:Fg.clone()}),a=new ui({map:n,transparent:!0,opacity:0,blending:2,depthWrite:!1}),o=new Ur({map:n,transparent:!0,opacity:0,blending:2,depthWrite:!1}),s=Array.from({length:Pg},()=>{let t=new Zo(16761466,0,22,2);return e.add(t),t}),c=[];function l(e,n){t.clear(),c=[];let s=Math.max(1,Math.round(e/Ng)),l=e*n/s,u=new Ea(.07,.1,5,8),d=new wa(.9,.08,.08),f=new wa(.5,.1,.28);for(let p=0;p<s;p++)for(let m=0;m<s;m++){let s=-(e*n)/2+l*(p+.5),h=-(e*n)/2+l*(m+.5),g=new An,_=new G(u,r),v=new G(d,r),y=new G(f,i);_.position.y=5/2,v.position.set(.4,5,0),y.position.set(.8,4.92,0),_.castShadow=!0;let b=new ri(o);b.scale.setScalar(2.6),b.position.set(.8,4.8,0);let x=new G(new Ia(l*1.15,l*1.15),a);x.rotation.x=-Math.PI/2,x.position.set(.8,.07,0),x.renderOrder=2,g.add(_,v,y,b,x),g.position.set(s,0,h),t.add(g),c.push(new V(s+.8,4.7,h))}}function u(e,t){let n=Mt.smoothstep(e,.25,.7);a.opacity=.55*n,o.opacity=.9*n,i.color.copy(Fg).multiplyScalar(.25+.75*n);let r=n>.01?[...c].sort((e,n)=>e.distanceToSquared(t.position)-n.distanceToSquared(t.position)).slice(0,Pg):[];s.forEach((e,t)=>{r[t]&&e.position.copy(r[t]),e.intensity=r[t]?90*n:0})}return{build:l,update:u,root:t}}var Rg=[],zg=new Map,Bg=new Map;function Vg({sensors:e,pens:t,hatcheries:n,units:r}){let i=[],a=(e,t,n,r,a,o)=>i.push({id:e,sev:t,icon:n,title:r,msg:a,pos:o});for(let t of e)if(t.status!==`ok`){let e=pg[t.type];a(`s`+t.id,t.status,e.icon,e.name,`${t.value.toFixed(e.dec)} ${e.unit}`,t.group.position)}for(let e of t)e.status!==`ok`&&a(`p`+e.id,e.status,J[e.sp].icon,`حظيرة ${J[e.sp].name}`,e.note||`تحتاج تدخلاً`,e.center);for(let e of n)e.status!==`ok`&&a(`h`+e.id,e.status,`🐣`,`مفقس`,e.note,e.center);for(let e of r)e.status!==`ok`&&a(`u`+e.id,e.status,oh[e.sp].icon,`${e.kind===`pond`?`حوض`:`قفص`} ${oh[e.sp].name}`,e.note||`يحتاج تدخلاً`,e.center);let o=Op.filter(e=>e.stress===`water`);return o.length&&a(`thirst`,o.length>8?`crit`:`warn`,`💧`,`نباتات عطشى`,`${o.length} مربع بلا ماء كافٍ`,o[0].mesh.position),Mm.feed<50&&(t.length||r.length)&&a(`feed`,Mm.feed<=0?`crit`:`warn`,`🌾`,`مخزن العلف`,`${Math.round(Mm.feed)} كغ فقط`,null),i.sort((e,t)=>(t.sev===`crit`)-(e.sev===`crit`))}function Hg(e,t,n){let r=new Map(e.map(e=>[e.id,e.sev]));for(let r of e)Bg.set(r.id,`${r.icon} ${r.title}`),zg.get(r.id)!==r.sev&&(Rg.unshift({at:t,sev:r.sev,msg:`${r.icon} ${r.title}: ${r.msg}`,raised:!0}),r.sev===`crit`&&n?.());for(let[e]of zg)r.has(e)||Rg.unshift({at:t,sev:`ok`,msg:`عاد طبيعياً: `+(Bg.get(e)??``),raised:!1});zg.clear();for(let[e,t]of r)zg.set(e,t);Rg.length=Math.min(Rg.length,40)}var Ug=[{id:`DIS-BRUCELLOSIS-ZOONOTIC`,name:`حمى مالطا / البروسيلا / الإجهاض الساري المعدي`,groups:[`ruminant`,`canine`],zoo:!0,sym:[`إجهاض متأخر مفاجئ في الثلث الأخير من الحمل (الشهر 4 في الأغنام أو الشهر 7-8 في الأبقار)`,`احتباس المشيمة والتهاب الرحم الحاد وتدلي إفرازات قيحية كريهة`,`التهاب الخصية والبربخ وتضخم كيس الصفن في الكباش والثيران`],alarm:[`حدوث موجة إجهاض جماعي (> 10% من قطيع الإناث الحوامل) خلال أسبوعين`,`إصابة عمال الحظيرة بحمى متقطعة وآلام مفاصل وتعرق ليلي شديد (حمى مالطا البشرية)`],iso:`عزل الحيوان المجهض فوراً في حظيرة حجر انفرادي، حرق أو دفن الجنين المجهض والمشيمة في حفرة عميقة مع الجير الحي بعمق 1.5 متر على الأقل.`,vac:`لقاح البروسيلا الحي المضعف (Brucella Rev-1 / Strain 19)`},{id:`DIS-ENTEROTOXEMIA-CLOSTRIDIUM`,name:`التسمم المعوي / مرض الكلى الرخوة / الكلوستريديا`,groups:[`ruminant`],zoo:!1,sym:[`موت مفاجئ لأفضل وأسمن الحملان دون أعراض سابقة واضحة خلال ساعات الصباح الأولى`,`أعراض عصبية حادة: ترنح، تشنج العنق للخلف (Opisthotonos)، طحن الأسنان، حركة التجديف بالأقدام`,`إسهال مائي مخاطي أو مدمم، انتفاخ الكرش الحاد، وسيلان اللعاب`],alarm:[`نفوق أكثر من رأس مسمن خلال 24 ساعة بعد زيادة كمية الشعير أو العلف المركز`],iso:`خفض كمية العلف المركز فوراً بنسبة 50% وزيادة الدريس الخشن، وتجريع القطيع ببيكربونات الصوديوم وتقديم مضادات السموم.`,vac:`اللقاح الجامع للسموم المعوية والكلوستريديا (Covexin-8 / Clostrivax 10)`},{id:`DIS-NEWCASTLE-AVIAN`,name:`شبه طاعون الدواجن / النيوكاسل (ND)`,groups:[`bird`],zoo:!0,sym:[`أعراض تنفسية: حشرجة صوتية، لهاث، شخير، وإفرازات أنفية لزجة`,`أعراض عصبية: التواء الرقبة (Torticollis)، شلل الأجنحة والأرجل، دوران حول النفس`,`إسهال مائي بلون أخضر زمردي فاقع مميز مع هبوط كارثي في إنتاج البيض وتشوه القشرة`],alarm:[`نفوق مفاجئ سريع لأكثر من 5% من قطيع الدواجن خلال 24 ساعة مصحوباً بالتواء الرقبة والإسهال الأخضر`],iso:`حظر بيع أو نقل الطيور والبيض من المزرعة فوراً، تطبيق الحجر الصحي الصارم وإعدام الطيور النافقة والمصابة بالحرق أو الدفن البيولوجي.`,vac:`لقاح النيوكاسل الحي (Hitchener B1 / LaSota / Clone 30) والميت الزيتي`},{id:`DIS-FISH-COLUMNARIS-GILL`,name:`تعفن الغلاصم والزعانف البكتيري / كولومنارس`,groups:[`fish`],zoo:!1,sym:[`تآكل وتفتت حواف الزعانف وظهور خطوط بيضاء أو رمادية ميتة تشبه كتل القطن`,`تغير لون خيوط الغلاصم إلى الأبيض أو المصفر وتراكم المخاط والنزف وفقدان القدرة على التنفس`,`صعود الأسماك لسطح الماء والتجمع عند مداخل تيار الماء النقي وفتح الفم باستمرار طلباً للأكسجين`],alarm:[`تحول غلاصم أكثر من 20% من الأسماك إلى اللون الأبيض الشاحب ونفوقها عند مداخل المياه`],iso:`زيادة تدفق الماء النقي وتجديد 30% من ماء الحوض فوراً وتشغيل كافة أجهزة التهوية ووقف التغذية لمدة 24-48 ساعة لخفض الأمونيا.`,vac:null}],Wg=[{id:`FMD`,name:`الحمى القلاعية`,groups:[`ruminant`],zoo:!1,sym:[`حمى وبثور في الفم والحوافر`,`سيلان لعاب غزير وعرج`,`انخفاض حاد في الحليب`],alarm:[`إصابة عدة رؤوس في يوم أو يومين`,`نفوق الصغار المفاجئ`],iso:`عزل فوري وإبلاغ الجهة البيطرية، ومنع حركة الحيوانات والأعلاف والأشخاص، وتطهير بمحلول صودا أو حمض الستريك.`,vac:`لقاح الحمى القلاعية بالأنماط السائدة محلياً (جرعتان سنوياً غالباً)`},{id:`PPR`,name:`طاعون المجترات الصغيرة`,groups:[`ruminant`],zoo:!1,sym:[`حمى وإفرازات أنفية وعينية`,`تقرحات الفم وإسهال`,`التهاب رئوي`],alarm:[`نفوق في الأغنام والماعز الصغيرة`,`إسهال دموي`],iso:`عزل المصابين وإبلاغ الجهة البيطرية ومنع الاختلاط والبيع.`,vac:`لقاح طاعون المجترات الصغيرة (سنوياً)`},{id:`ENTERO`,name:`التسمم المعوي (الكلوستريديا)`,groups:[`ruminant`],zoo:!1,sym:[`نفوق مفاجئ للحيوانات السمينة`,`تشنجات ونفخة`,`إسهال`],alarm:[`نفوق دون أعراض سابقة بعد تغيير العلف`],iso:`خفض الحبوب تدريجياً في العليقة وتجنّب التغيير المفاجئ.`,vac:`لقاح الكلوستريديا متعدد الأنواع (قبل الشتاء/قبل الولادة)`},{id:`MAST`,name:`التهاب الضرع`,groups:[`ruminant`],zoo:!1,sym:[`تورم وحرارة الضرع`,`حليب متجلط أو دموي`,`انخفاض الإنتاج`],alarm:[`حمى مع ضرع صلب`,`حليب مائي مصفرّ`],iso:`حلب المصابات أخيراً وتطهير الأيدي والأخطمة، وعزل حليبها عن الاستهلاك أثناء العلاج.`,vac:null},{id:`ANTHRAX`,name:`الجمرة الخبيثة`,groups:[`ruminant`],zoo:!0,sym:[`نفوق مفاجئ`,`نزف دموي من الفتحات الطبيعية`,`عدم تجمد الدم وتيبس الجثة المتأخر`],alarm:[`أي نفوق مفاجئ مع نزف من الفتحات`],iso:`لا تشرّح الجثة؛ أبلغ الجهة البيطرية فوراً، وادفن أو احرق الجثة بإشراف، ومنع دخول الأشخاص.`,vac:`لقاح الجمرة الخبيثة (سنوياً قبل الربيع في المناطق الموبوءة)`},{id:`AI`,name:`إنفلونزا الطيور`,groups:[`bird`],zoo:!0,sym:[`نفوق مفاجئ عالٍ`,`تورم الرأس وزرقة العرف`,`انخفاض حاد في البيض`],alarm:[`نفوق أكثر من 2% يومياً`,`أعراض تنفسية مع نفوق`],iso:`إبلاغ الجهة البيطرية فوراً، غلق المزرعة، ارتداء معدات وقاية، ومنع نقل الطيور والبيض.`,vac:null},{id:`IBD`,name:`الغمبورو`,groups:[`bird`],zoo:!1,sym:[`إسهال مائي أبيض`,`ريش منفوش وخمول`,`نفوق في عمر 3–6 أسابيع`],alarm:[`نفوق مرتفع مع تضخم كيس فابريشيوس`],iso:`تطهير الحظيرة وفترة راحة بين الدفعات.`,vac:`لقاح الغمبورو (اليوم 14 و24 عادة)`},{id:`COCCI`,name:`الكوكسيديا`,groups:[`bird`,`rabbit`],zoo:!1,sym:[`إسهال دموي`,`خمول وانتفاش`,`ضعف نمو`],alarm:[`براز دموي في عدة طيور`],iso:`تجفيف الفرشة وتقليل الكثافة وتطهير المعالف.`,vac:`مضادات الكوكسيديا في العلف أو لقاح حسب الطبيب`},{id:`RHD`,name:`النزف الفيروسي للأرانب (RHD)`,groups:[`rabbit`],zoo:!1,sym:[`نفوق مفاجئ`,`نزيف أنفي`,`خمول`],alarm:[`نفوق عدة أرانب خلال 24 ساعة`],iso:`عزل وتطهير الأقفاص ومنع دخول الغرباء.`,vac:`لقاح RHD سنوياً`},{id:`MYXO`,name:`الميكسوماتوزس`,groups:[`rabbit`],zoo:!1,sym:[`تورم الجفون والأنف`,`عقد جلدية`,`إفرازات عينية قيحية`],alarm:[`تورم الرأس مع نفوق`],iso:`مكافحة البعوض والبراغيث وعزل المصابة.`,vac:`لقاح الميكسوماتوزس`},{id:`VARROA`,name:`عث الفاروا`,groups:[`bee`],zoo:!1,sym:[`نحل مشوّه الأجنحة`,`سقوط عث على لوح القاع`,`ضعف الطائفة`],alarm:[`أكثر من 3% عث على النحل البالغ`,`انهيار الطائفة في الخريف`],iso:`معالجة كل المناحل القريبة في توقيت واحد وتبديل الأعمدة.`,vac:null},{id:`AFB`,name:`تعفن الحضنة الأمريكي`,groups:[`bee`],zoo:!1,sym:[`حضنة متناثرة غائرة الأغطية`,`رائحة نتنة`,`خيوط لزجة عند السحب بعود`],alarm:[`حضنة بنية لزجة`],iso:`إبلاغ الجهة البيطرية؛ الأمريكي شديد العدوى وغالباً تُحرق الخلايا المصابة؛ لا تتبادل الأدوات.`,vac:null},{id:`NOSEMA`,name:`النوزيما`,groups:[`bee`],zoo:!1,sym:[`إسهال وبقع على الخلية`,`نحل زاحف خارج الخلية`,`ضعف في الربيع`],alarm:[`موت جماعي في الشتاء/أول الربيع`],iso:`تهوية وتقليل الرطوبة وتغذية جيدة.`,vac:null},{id:`ICH`,name:`النقط البيضاء (Ich) في الأسماك`,groups:[`fish`],zoo:!1,sym:[`نقط بيضاء على الجلد والزعانف`,`حك الجسم بالقاع`,`تنفس سريع`],alarm:[`نفوق بعد تغير مفاجئ للحرارة`],iso:`رفع التهوية وعزل الحوض وعلاج حسب الطبيب مع تجنّب الصدمات الحرارية.`,vac:null},{id:`PSITT`,name:`داء الببغاء (السيتاكوزيس)`,groups:[`bird`],zoo:!0,sym:[`إفرازات أنفية وعينية`,`خمول وانتفاش`,`إسهال أخضر`],alarm:[`عدة طيور مريضة مع احتكاك بشري`],iso:`حجر 30 يوماً، وارتداء كمامة وقفازات عند التنظيف، واستشارة الطبيب (ينتقل للإنسان).`,vac:null}],Gg=[...Ug,...Wg],Kg=e=>String(e).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),qg=1310,Jg={sprinkler:25,pumpPerKw:250,sensorNode:35,thermal:250,penPerM2:40,fencePerM:15,pondPerM3:5,aerator:120,feeder:200,hatchery:1500,doProbe:150,pvPerKw:800},Yg=e=>`<tr>${e.map(e=>`<td>${e}</td>`).join(``)}</tr>`,Xg=(e,t)=>`<table><tr>${e.map(e=>`<th>${e}</th>`).join(``)}</tr>${t.join(``)}</table>`,Zg=e=>e?.length?`<ul>${e.map(e=>`<li>${Kg(e)}</li>`).join(``)}</ul>`:``;function Qg(e,t={}){let n=e.cell??2,r=n*n,i=e=>`${(e*n).toFixed(0)}`,a=Cd[e.climate],o=Rd(e.climate),s=new Date().getMonth()+1,c=e=>`(${i(e.i+.5)}م، ${i(e.j+.5)}م)`,l={},u=0,d=0,f=0,p=0,m=0,h=0;for(let e of Op)e.blocked?h++:e.road||e.tank?m++:(e.crop&&(l[e.crop.id]=(l[e.crop.id]??0)+1),e.pen?d++:e.hatch?f++:e.pond?p++:e.soil&&u++);Object.values(l).reduce((e,t)=>e+t,0);let g=Op.length-h,_=g-u-d-f-p-m,v=e=>(e/g*100).toFixed(0)+`%`,y=e=>Math.round(e*r).toLocaleString(`en`),b=[],x=3+5*(Dd.season+1)/2,S=u*r*x/1e3/.8,C=0;for(let e of jm){let t=J[e.sp];C+=e.n*(t.group===`bird`?.25:Math.max(1,.07*t.wm))/1e3}let w=Eh.filter(e=>e.kind===`pond`).reduce((e,t)=>e+t.tiles.length*r*.008+t.tiles.length*r*1.5*.05,0),T=S+C+w,E=(rm.length?1.5*Math.ceil(rm.length/20):0)+Eh.length*1.1+jm.length*.75+Jh.length*.8+mg.length*.01,D=Math.ceil(E*1.5);o&&T>0&&o.averageGroundwaterTdsPpm>2e3&&b.push(`ملوحة المياه عالية (${o.averageGroundwaterTdsPpm} ppm): حلّ التحلية أو ري الغسيل ضروري`);let O=a?.ec;for(let e of Object.keys(l))O&&(Ud[e]??2)<O&&b.push(`${q[e].name} حساس للملوحة (${Ud[e]} dS/م) والمياه ≈ ${O} dS/م: يتوقع نقص الإنتاج`);let k=jm.reduce((e,t)=>e+t.tiles.length*r,0),A=jm.reduce((e,t)=>e+2*(t.i1-t.i0+t.j1-t.j0+2)*n,0),ee=Eh.filter(e=>e.kind===`pond`).reduce((e,t)=>e+t.tiles.length*r*1.5,0),te=[[`رشاشات`,rm.length,Jg.sprinkler],[`مضخات ري (kW)`,rm.length?1.5*Math.ceil(rm.length/20):0,Jg.pumpPerKw],[`عقد مستشعرات ESP32`,mg.length,Jg.sensorNode],[`كاميرات حرارية`,mg.filter(e=>e.type===`thermal`).length,Jg.thermal],[`حظائر (م² مسقوفة)`,Math.round(k),Jg.penPerM2],[`سياج (م.ط)`,Math.round(A),Jg.fencePerM],[`حفر الأحواض (م³)`,Math.round(ee),Jg.pondPerM3],[`أجهزة تهوية/مغذيات`,Eh.length*2,(Jg.aerator+Jg.feeder)/2],[`حساسات أكسجين الماء`,mg.filter(e=>e.type===`aq_do`).length,Jg.doProbe],[`مفاقس`,Jh.length,Jg.hatchery],[`ألواح شمسية (kWp)`,D,Jg.pvPerKw]].filter(e=>e[1]>0),ne=te.reduce((e,[,t,n])=>e+t*n,0);Object.assign(t,{waterTot:T,wCrops:S,wLive:C,wFish:w,kw:E,pv:D,capex:ne,warn:b});let j=[...new Set([...jm.map(e=>J[e.sp].honey?`bee`:e.sp===`rabbit`?`rabbit`:J[e.sp].group===`bird`?`bird`:`ruminant`),...Eh.length?[`fish`]:[]])].map(e=>Gg.filter(t=>t.groups.includes(e))).flat().filter((e,t,n)=>n.findIndex(t=>t.id===e.id)===t),re=`
<h1>📋 تقرير مهندس المزرعة — ${Kg(e.name)}</h1>
<small>${new Date().toLocaleDateString(`ar-IQ`)} · أرقام تقديرية للتخطيط الأولي، وليست مخططات تنفيذية ولا وصفة بيطرية. راجع مختصين قبل التنفيذ.</small>
<button onclick="print()">🖨️ طباعة / PDF</button>

<h2>1. الأرض والإقليم</h2>
${Xg([`البند`,`القيمة`],[Yg([`المساحة`,e.area?`${e.area.toLocaleString(`en`)} م² (${e.dims?.w}×${e.dims?.l} م)`:`${y(g)} م²`]),Yg([`شبكة المحاكاة`,`${e.n}×${e.n} مربع، كل مربع ≈ ${n.toFixed(1)}×${n.toFixed(1)} م (الشكل المحاكى مربع مكافئ المساحة)`]),Yg([`المحافظة/المناخ`,Kg(a?.name??``)]),Yg([`نوع التربة`,Ap[e.soil].name]),...o?[Yg([`الأمطار السنوية`,`${o.averageAnnualRainfallMm} مم`]),Yg([`حرارة قصوى صيفاً / دنيا شتاءً`,`${o.summerMaxTempC}° / ${o.winterMinTempC}°`]),Yg([`ملوحة المياه الجوفية`,`${o.averageGroundwaterTdsPpm} ppm (≈ ${a.ec} dS/م)`]),Yg([`مصدر المياه`,Kg(o.primaryWaterSourceAr)]),Yg([`التربة السائدة`,Kg(o.predominantSoilTypeAr)])]:[]])}
${o?`<b>توصيات الإقليم:</b>${Zg(o.specialAgroAdvisoriesAr)}`:``}

<h2>2. توزيع الأرض (مهندس مدني)</h2>
${Xg([`الاستعمال`,`المربعات`,`المساحة م²`,`النسبة`],[Yg([`أرض محروثة / محاصيل`,u,y(u),v(u)]),Yg([`حظائر`,d,y(d),v(d)]),Yg([`مفاقس`,f,y(f),v(f)]),Yg([`أحواض سمكية`,p,y(p),v(p)]),Yg([`طرق وخزانات`,m,y(m),v(m)]),Yg([`خارج حدود الأرض (غير محسوب)`,h,y(h),v(h)]),Yg([`ممرات وفراغ داخل الأرض`,_,y(_),v(_)])])}

<h2>3. المحاصيل والري (مهندس زراعي)</h2>
${Object.keys(l).length?Xg([`المحصول`,`المساحة م²`,`دورة النمو (يوم لعبة)`,`ملوحة يتحملها dS/م`],Object.entries(l).map(([e,t])=>Yg([`${q[e].icon} ${q[e].name}`,y(t),q[e].grow,Ud[e]??`—`]))):`<p>لا محاصيل مزروعة بعد.</p>`}
<p>رشاشات: ${rm.length} (تغطي كل منها 5×5 مربعات). حاجة الري التقديرية الآن: ${S.toFixed(1)} م³/يوم.</p>
${(()=>{let e=qd(s);return e?`<b>مهام هذا الشهر (${Kg(e.monthNameAr)}):</b>${Zg(e.plantingTasksAr)}${Zg(e.fertilizationTasksAr)}<p>${Kg(e.irrigationGuidanceAr)}</p>${Zg(e.criticalPestAlertsAr)}`:``})()}

<h2>4. الثروة الحيوانية والأسماك (طبيب بيطري)</h2>
${jm.length||Eh.length?Xg([`الموقع`,`النوع`,`العدد`,`ملاحظة`],[...jm.map(e=>Yg([c({i:(e.i0+e.i1)/2,j:(e.j0+e.j1)/2}),`${J[e.sp].icon} ${J[e.sp].name}`,`${e.n}/${e.cap}`,`كثافة ${(e.cap/(e.tiles.length*r)).toFixed(2)} رأس/م² · أمونيا ${e.nh3.toFixed(0)}`])),...Eh.map(e=>Yg([e.tiles?.[0]?c(e.tiles[0]):`البحيرة`,`${oh[e.sp].icon} ${oh[e.sp].name} (${e.kind===`cage`?`قفص`:`حوض`})`,Math.round(e.n),`أكسجين ${e.do.toFixed(1)} · حرارة ${e.temp.toFixed(0)}°`]))]):`<p>لا حيوانات.</p>`}
${j.map(e=>`<div class="w"><b>${Kg(e.name)}</b>${e.zoo?` · ⚠️ يصيب الإنسان`:``}<br>أعراض: ${Kg(e.sym.join(` · `))}<br>علامات خطر: ${Kg(e.alarm.join(` · `))}<br>العزل: ${Kg(e.iso??``)}<br>${e.vac?`لقاح: `+Kg(e.vac):`لا لقاح متوفر`}</div>`).join(``)}
<p>قاعدة عامة: حجر صحي للقادم الجديد (14–21 يوماً)، تطهير دوري، سجل تحصين وعلاج، واستشارة طبيب بيطري مرخّص لجدول التحصين المحلي.</p>

<h2>5. المياه والطاقة (مدني)</h2>
${Xg([`البند`,`التقدير`],[Yg([`ري المحاصيل`,S.toFixed(1)+` م³/يوم`]),Yg([`الحيوانات`,C.toFixed(1)+` م³/يوم`]),Yg([`الأحواض (تبخر + تبديل)`,w.toFixed(1)+` م³/يوم`]),Yg([`<b>المجموع</b>`,`<b>${T.toFixed(1)} م³/يوم</b>`]),Yg([`حمل كهربائي موصول`,E.toFixed(1)+` kW`]),Yg([`خزان مقترح (احتياج يومين)`,Math.ceil(T*2)+` م³`]),Yg([`ألواح شمسية مقترحة`,D+` kWp (تقريبي)`])])}
${b.map(e=>`<div class="w">⚠️ ${Kg(e)}</div>`).join(``)}

<h2>6. الأجهزة وإحداثيات التركيب (للنقل إلى الواقع)</h2>
<small>الإحداثيات بالمتر من زاوية المزرعة (مركز كل مربع).</small>
${Xg([`الجهاز`,`الموقع`,`النوع`],[...rm.map(e=>Yg([`رشاش`,c(e.tile),``])),...mg.map(e=>Yg([`${pg[e.type].icon} ${pg[e.type].name}`,c(e.tile),pg[e.type].unit])),...Jh.map(e=>Yg([`مفقس`,c(e.tiles[0]),``]))])}

<h2>7. التكلفة التقديرية (رأس المال)</h2>
${Xg([`البند`,`الكمية`,`سعر الوحدة $`,`المجموع $`],te.map(([e,t,n])=>Yg([e,t,n,Math.round(t*n).toLocaleString(`en`)])))}
<p><b>المجموع ≈ $${Math.round(ne).toLocaleString(`en`)} ≈ ${Math.round(ne*qg).toLocaleString(`en`)} د.ع</b> (سعر صرف تقريبي ${qg}). الأسعار افتراضية للتعديل ولا تشمل الأرض والعمالة والتراخيص.</p>
<h2>8. الافتراضات ومصادر الأرقام (اقرأها قبل أي تنفيذ)</h2>
<ul>
<li><b>مصدر البيانات:</b> ملفات «شهومي» (مُنشأة بالذكاء الاصطناعي ولم تُراجَع ميدانياً): المحافظات والتقويم والأمراض ومعايير FCR والمحاصيل والنخيل. قد تتعارض أرقامها بين ملف وآخر (مثلاً إنتاج البرحي 130 أو 160 كغ).</li>
<li><b>الزمن:</b> دورات النمو في المحاكاة مضغوطة (نخلة تثمر بعد 240 «يوماً لعبة»). الواقع 3–5 سنوات.</li>
<li><b>المساحة:</b> الأرض المستطيلة تُحاكى بمربع مكافئ المساحة؛ المربع الواحد = شجرة أو نخلة واحدة، والتباعد الحقيقي للنخيل 8 م.</li>
<li><b>المياه والطاقة:</b> حاجة المحاصيل = تبخر-نتح تقريبي 3–8 مم/يوم ÷ كفاءة ري 80%؛ الحيوانات 7% من الوزن لتراً يومياً؛ الأسماك تبخر + تبديل 5%؛ الكهرباء قدرات اسمية.</li>
<li><b>الأسعار:</b> أسعار وحدات افتراضية بالدولار وصرف 1310 دينار؛ تختلف كثيراً بين الأسواق وتحتاج عروض أسعار فعلية.</li>
<li><b>الملوحة:</b> ملوحة المياه من TDS÷640، وعتبات تحمّل المحاصيل من جداول FAO التقريبية (صُحّحت قيم الجت والنخيل والفاكهة التي كانت تمثل أقصى تحمّل لا العتبة). تُقاس ملوحة مياه وتربة الموقع فعلياً.</li>
<li><b>التدقيق الآلي:</b> فُحصت نسب FCR والحليب والاستهلاك والإنتاج والملوحة مقابل نطاقات مرجعية شائعة (<code>node scripts/audit-data.mjs</code>) ولا مخالفات بعد التصحيح؛ هذا لا يغني عن مراجعة مختص.</li>
<li><b>العسل:</b> يعتمد على شهر السنة وعدد الأشجار المزهرة؛ الأرقام تقريبية.</li>
</ul>
<h3>قائمة تحقق المهندس قبل التنفيذ</h3>
<ul>
<li>مسح الموقع وتحليل تربة ومياه مخبرياً (EC وpH ونسب الأملاح).</li>
<li>مراجعة مهندس زراعي لاختيار الأصناف والتباعد وجدول الري والتسميد.</li>
<li>مراجعة طبيب بيطري لجدول التحصين والتغذية والكثافة لكل نوع.</li>
<li>مراجعة مهندس مدني/كهرباء للمضخات والخزانات والأحمال والحماية.</li>
<li>التراخيص والحصص المائية حسب الجهة المحلية.</li>
</ul>`;return`<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><title>تقرير ${Kg(e.name)}</title><style>body{font-family:Cairo,Tahoma,sans-serif;max-width:900px;margin:20px auto;padding:0 14px;line-height:1.7;color:#1a2a1a}h1{border-bottom:3px solid #2e7d32}h2{color:#2e7d32;margin-top:26px}table{border-collapse:collapse;width:100%;margin:8px 0}th,td{border:1px solid #bbb;padding:4px 8px;text-align:right;font-size:14px}th{background:#e8f5e9}.w{background:#fff3e0;border-right:4px solid #fb8c00;padding:6px 10px;margin:4px 0}small{color:#666}@media print{button{display:none}}</style></head><body>${re}</body></html>`}var $g=`farm3d-prices`,e_={cereal:.35,veg:.4,forage:.12,fruit:.9,dates:2.2,wood:.1,beef:7,mutton:9,goat:9,camel:8,poultry:2.5,rabbit:4,milk:.6,milkSmall:1,eggs:.1,honey:12,fish:3},t_={...e_};try{Object.assign(t_,JSON.parse(localStorage.getItem($g)??`{}`))}catch{}var n_=()=>t_;function r_(e,t){if(e in e_&&t>=0){t_[e]=t;try{localStorage.setItem($g,JSON.stringify(t_))}catch{}}}function i_(){t_={...e_};try{localStorage.removeItem($g)}catch{}}var a_={wheat:[.4,1],barley:[.35,1],corn:[.8,1],rice:[.5,1],sunflower:[.25,1],sugarcane:[8,1],tomato:[6,2],cucumber:[5,2],pepper:[3,2],eggplant:[4,2],okra:[1.5,2],potato:[3,2],onion:[4,2],carrot:[4,2],watermelon:[3,2]},o_={palm:8,grape:2.5,fig:5,pomegranate:4,olive:6,eucalyptus:3,rose:1.2},s_=e=>({cattle:`beef`,holstein:`beef`,buffalo:`beef`,sheep:`mutton`,awassi:`mutton`,goat:`goat`,shami:`goat`,camel:`camel`,rabbit:`rabbit`,deer:`mutton`})[e]??`poultry`,c_={cattle:1.5,holstein:1.5,buffalo:1.3,sheep:2,awassi:2,goat:2,shami:2,camel:1,rabbit:4,broiler:6,quail:5,duck:4,goose:2,turkey:2.5},l_=4.15+.2+.5+.5+.2;function u_(e){let t=t_,n=[],r=0;for(let[r,i]of Object.entries(e.crops)){let a=q[r],o=i*e.A;if(a){if(a.perennial&&a.cat!==`forage`){let e=o_[r.replace(/^palm_.*/,`palm`)]??5,i=o/(e*e),s=a.cat===`palm`?a.usd??t.dates:a.cat===`tree`?t.wood:t.fruit;n.push({name:a.name,rev:i*a.kg*s,opex:.3*i*a.kg*s,startMonth:Math.round(a.grow/60*12)})}else if(a.perennial)n.push({name:a.name,rev:o*a.kg*.6*6*t.forage/1,opex:.35*o*a.kg*.6*6*t.forage,startMonth:3});else{let[e,i]=a_[r]??[a.cat===`veg`?3:.4,a.cat===`veg`?2:1],s=a.cat===`veg`?t.veg:t.cereal;n.push({name:a.name,rev:o*e*i*s,opex:.45*o*e*i*s,startMonth:4})}}}for(let i of e.pens){let e=J[i.sp];if(!e)continue;let a=e.dmi*365*i.cap*.3,o=0;i.purpose===`meat`?o=i.cap*e.wm*(e.dress??.6)*(c_[i.sp]??2)*t[s_(i.sp)]:i.purpose===`milk`?o=i.cap*e.milk*300*(e.wm<100?t.milkSmall:t.milk):i.purpose===`eggs`?o=i.cap*e.eggs*330*t.eggs:i.purpose===`honey`&&(o=i.cap*e.milk*30*l_*t.honey),r+=i.cap*(e.group===`bird`?.5:e.honey?150:e.wm*.35),n.push({name:`${e.name} (${i.purpose})`,rev:o,opex:a+.08*o,startMonth:6})}for(let i of e.units){let e=oh[i.sp];if(!e)continue;let a=i.cap*.85*e.wm/1e3;n.push({name:`${e.name} (سمك)`,rev:a*1.5*t.fish,opex:a*1.5*e.fcr*.9+.1*a*1.5*t.fish,startMonth:7}),r+=i.cap*.05}let i=n.reduce((e,t)=>e+t.rev,0),a=n.reduce((e,t)=>e+t.opex,0),o=e.capex+r,s=Math.max(.1*i,e.laborMin??1500),c=e.kw*2e3*.08,l=.04*o,u=a+s+c+l,d=i-u,f=[-o],p=-o,m=null;for(let e=1;e<=60;e++){let t=n.reduce((t,n)=>t+(e>n.startMonth?n.rev/12:0),0)-n.reduce((t,n)=>t+(e>n.startMonth?n.opex:0)/12,0)-(s+c+l)/12;p+=t,f.push(t),m===null&&p>=0&&(m=e)}return{lines:n,rev:i,opex:u,net:d,capex:o,labor:s,energy:c,upkeep:l,roi:o?d/o:0,paybackMonths:m,steadyPaybackYears:d>0?o/d:null,cash:f}}var d_=e=>e&&!e.blocked&&!e.road&&!e.tank&&!e.pen&&!e.hatch&&!e.pond&&!e.machine&&!e.crop,f_=()=>qp??{i0:0,j0:0,w:Dp,h:Dp};function p_(e,t,n=!1){let r=f_();for(let i=r.j0;i+t<=r.j0+r.h;i++)for(let a=0;a+e<=r.w;a++){let o=n?r.i0+r.w-e-a:r.i0+a,s=!0;for(let n=0;n<e&&s;n++)for(let e=0;e<t&&s;e++)s=d_(Bp(o+n,i+e));if(s)return[Bp(o,i),Bp(o+e-1,i+t-1)]}return null}function m_(e,t,n,r){if(!q[t])return`محصول غير معروف`;let i=Math.max(1,Math.ceil(n/r)),a=f_(),o=[];for(let e=a.j0;e<a.j0+a.h&&o.length<i;e++)for(let t=a.i0;t<a.i0+a.w&&o.length<i;t++){let n=Bp(t,e);d_(n)&&o.push(n)}if(!o.length)return`لا توجد مساحة حرة داخل حدود أرضك`;for(let n of o)n.soil=1,$p(e,n,t);return bg(e,o[Math.floor(o.length/2)],`soil_moisture`),o.length<i?`زُرع ${o.length} من ${i} مربعاً (المساحة الحرة لا تكفي)`:!0}function h_(e,t){let n=0;for(let r of Op)r.crop?.id===t&&(Gp(e,r),n++);return n}function g_(e,t,n,r){let i=J[t];if(!i)return`نوع غير معروف`;let a=Math.max(9,Math.ceil(r/i.perTile)),o=Math.max(3,Math.ceil(Math.sqrt(a))),s=p_(o,o,!0)??p_(3,Math.ceil(a/3),!0);if(!s)return`لا توجد مساحة حرة تكفي للحظيرة`;let c=Jm(e,s[0],s[1],t,n);if(typeof c==`string`)return c;c.n=Math.min(Math.max(1,r),c.cap);let l=Bp(Math.round((c.i0+c.i1)/2),Math.round((c.j0+c.j1)/2));for(let t of[`pen_temp`,`pen_nh3`])bg(e,l,t);return c.n<r?`السعة ${c.cap} رأساً فقط (طلبت ${r})`:!0}function __(e,t,n,r){let i=Math.max(3,Math.ceil(Math.sqrt(n/r))),a=p_(i,i,!0);if(!a)return`لا توجد مساحة حرة تكفي للحوض`;let o=Rh(e,a[0],a[1],t);if(typeof o==`string`)return o;let s=Bp(Math.round((o.i0+o.i1)/2),Math.round((o.j0+o.j1)/2));for(let t of[`aq_temp`,`aq_do`])bg(e,s,t);return!0}var v_=(e,t)=>{let n=Number(t.amount);return!(n>0)||![`expense`,`sale`].includes(t.type)?!1:((e.ledger??=[]).push({d:Date.now(),type:t.type,cat:String(t.cat??``).slice(0,40),amount:n,note:String(t.note??``).slice(0,80)}),!0)},y_=e=>{let t=0,n=0;for(let r of e.ledger??[])r.type===`sale`?t+=r.amount:n+=r.amount;return{sale:t,expense:n,net:t-n}},b_=e=>{let t=n_(),n=q[e];return n?n.cat===`veg`?t.veg:n.cat===`palm`?n.usd??t.dates:n.cat===`fruit`?t.fruit:n.cat===`forage`?t.forage:t.cereal:{milk:t.milk,eggs:t.eggs,honey:t.honey,fish:t.fish,meat:t.beef}[e]??0};function x_(e){let t=0;for(let[n,r]of Object.entries(e.inventory)){let i=r*b_(n);r>0&&i>0&&(v_(e,{type:`sale`,cat:`بيع مخزون`,amount:i,note:`${Math.round(r)} ${n}`}),t+=i,e.inventory[n]=0)}return t}var S_=(...e)=>e,C_={workers:{title:`العمال`,icon:`👷`,fields:[{k:`name`,label:`الاسم`,type:`text`,req:1},{k:`role`,label:`العمل`,type:`select`,opts:S_(`مزارع`,`راعٍ`,`سائق`,`فني`,`مشرف`,`أخرى`)},{k:`wage`,label:`أجر اليوم $`,type:`number`},{k:`phone`,label:`الهاتف`,type:`text`},{k:`start`,label:`تاريخ المباشرة`,type:`date`},{k:`note`,label:`ملاحظة`,type:`text`}]},attendance:{title:`الحضور`,icon:`🗓️`,fields:[{k:`date`,label:`التاريخ`,type:`date`,req:1,today:1},{k:`worker`,label:`العامل`,type:`dyn:workers`,req:1},{k:`status`,label:`الحالة`,type:`select`,opts:S_(`حاضر`,`نصف يوم`,`غائب`,`إجازة`)},{k:`note`,label:`ملاحظة`,type:`text`}]},inventory:{title:`المخزن`,icon:`📦`,fields:[{k:`name`,label:`الصنف`,type:`text`,req:1},{k:`cat`,label:`النوع`,type:`select`,opts:S_(`علف`,`دواء ولقاح`,`سماد`,`بذور وشتلات`,`وقود`,`أدوات`,`أخرى`)},{k:`qty`,label:`الكمية`,type:`number`,req:1},{k:`unit`,label:`الوحدة`,type:`text`},{k:`min`,label:`حد التنبيه`,type:`number`},{k:`price`,label:`سعر الوحدة $`,type:`number`},{k:`note`,label:`ملاحظة`,type:`text`}]},equipment:{title:`المعدات`,icon:`🚜`,fields:[{k:`name`,label:`المعدة`,type:`text`,req:1},{k:`kind`,label:`النوع`,type:`select`,opts:S_(`مضخة`,`جرار`,`مولد`,`رشاش/ري`,`حاضنة/مفقس`,`تبريد/تدفئة`,`مركبة`,`أخرى`)},{k:`cost`,label:`التكلفة $`,type:`number`},{k:`last`,label:`آخر صيانة`,type:`date`},{k:`every`,label:`الصيانة كل (يوم)`,type:`number`},{k:`status`,label:`الحالة`,type:`select`,opts:S_(`تعمل`,`معطلة`,`في الصيانة`)},{k:`note`,label:`ملاحظة`,type:`text`}]},health:{title:`الدفتر الصحي`,icon:`🩺`,fields:[{k:`date`,label:`التاريخ`,type:`date`,req:1,today:1},{k:`target`,label:`الحظيرة/الحوض`,type:`dyn:targets`},{k:`kind`,label:`النوع`,type:`select`,opts:S_(`تحصين`,`علاج`,`فحص`,`جرعة دودية`,`ولادة`,`نفوق`)},{k:`name`,label:`اللقاح/الدواء/السبب`,type:`text`,req:1},{k:`count`,label:`العدد`,type:`number`},{k:`withdrawal`,label:`فترة السحب (يوم)`,type:`number`},{k:`vet`,label:`الطبيب`,type:`text`},{k:`cost`,label:`التكلفة $`,type:`number`},{k:`note`,label:`ملاحظة`,type:`text`}]},production:{title:`الإنتاج`,icon:`🧺`,fields:[{k:`date`,label:`التاريخ`,type:`date`,req:1,today:1},{k:`item`,label:`المنتج`,type:`select`,opts:S_(`حليب`,`بيض`,`عسل`,`لحم`,`سمك`,`تمر`,`خضار`,`حبوب`,`فاكهة`,`صوف`,`سماد`,`أخرى`)},{k:`qty`,label:`الكمية`,type:`number`,req:1},{k:`unit`,label:`الوحدة`,type:`text`},{k:`source`,label:`المصدر`,type:`dyn:targets`},{k:`note`,label:`ملاحظة`,type:`text`}]},tasks:{title:`المهام`,icon:`✅`,fields:[{k:`title`,label:`المهمة`,type:`text`,req:1},{k:`due`,label:`الموعد`,type:`date`,req:1,today:1},{k:`priority`,label:`الأولوية`,type:`select`,opts:S_(`متوسطة`,`عالية`,`منخفضة`)},{k:`who`,label:`المسؤول`,type:`dyn:workers`},{k:`status`,label:`الحالة`,type:`select`,opts:S_(`مفتوحة`,`منجزة`)},{k:`note`,label:`ملاحظة`,type:`text`}]},breeding:{title:`التكاثر`,icon:`🍼`,fields:[{k:`date`,label:`التاريخ`,type:`date`,req:1,today:1},{k:`target`,label:`الحظيرة`,type:`dyn:targets`},{k:`event`,label:`الحدث`,type:`select`,opts:S_(`تلقيح`,`ولادة`,`فقس`,`فطام`,`بيع نسل`)},{k:`count`,label:`العدد`,type:`number`},{k:`expected`,label:`الولادة/الفقس المتوقع`,type:`date`},{k:`note`,label:`ملاحظة`,type:`text`}]},docs:{title:`الوثائق والتراخيص`,icon:`📄`,fields:[{k:`name`,label:`الوثيقة`,type:`text`,req:1},{k:`kind`,label:`النوع`,type:`select`,opts:S_(`رخصة`,`عقد إيجار`,`حصة مائية`,`تأمين`,`شهادة صحية`,`سند ملكية`,`أخرى`)},{k:`issuer`,label:`الجهة`,type:`text`},{k:`expiry`,label:`تاريخ الانتهاء`,type:`date`},{k:`fee`,label:`الرسوم $`,type:`number`},{k:`note`,label:`ملاحظة`,type:`text`}]},contacts:{title:`العملاء والموردون`,icon:`📇`,fields:[{k:`name`,label:`الاسم`,type:`text`,req:1},{k:`kind`,label:`النوع`,type:`select`,opts:S_(`عميل`,`مورد`,`طبيب بيطري`,`مهندس زراعي`,`جهة حكومية`,`أخرى`)},{k:`phone`,label:`الهاتف`,type:`text`},{k:`address`,label:`العنوان`,type:`text`},{k:`note`,label:`ملاحظة`,type:`text`}]}},w_=Object.keys(C_),T_=864e5,E_=e=>{let t=Date.parse(e+`T00:00:00`);return Number.isFinite(t)?t:null},D_=(e=Date.now())=>new Date(e-new Date(e).getTimezoneOffset()*6e4).toISOString().slice(0,10);function O_(e,t,n){let r=C_[e];if(!r)return{error:`سجل غير معروف`};let i={id:n??Date.now().toString(36)+Math.random().toString(36).slice(2,6)};for(let e of r.fields){let n=t[e.k];if(e.type===`number`){if(n=n===``||n==null?null:Number(n),n!==null&&!(n>=0))return{error:`${e.label}: رقم غير صالح`}}else if(e.type===`date`){if(n=n?String(n):``,n&&E_(n)===null)return{error:`${e.label}: تاريخ غير صالح`}}else n=String(n??``).slice(0,120);if(e.req&&(n===``||n===null))return{error:`${e.label}: مطلوب`};i[e.k]=n}return{rec:i}}function k_(e,t=Date.now()){let n=[];for(let r of e.health??[]){let e=E_(r.date);e!==null&&r.withdrawal>0&&e+r.withdrawal*T_>t&&n.push({target:r.target||`المزرعة`,name:r.name,until:D_(e+r.withdrawal*T_),days:Math.ceil((e+r.withdrawal*T_-t)/T_)})}return n.sort((e,t)=>e.days-t.days)}var A_=e=>(e.inventory??[]).filter(e=>e.min>0&&e.qty<=e.min),j_=e=>(e.inventory??[]).reduce((e,t)=>e+(t.qty??0)*(t.price??0),0);function M_(e,t=Date.now(),n=3){let r=(e.tasks??[]).filter(e=>e.status!==`منجزة`),i=E_(D_(t)),a=e=>E_(e.due);return{overdue:r.filter(e=>a(e)!==null&&a(e)<i),soon:r.filter(e=>a(e)!==null&&a(e)>=i&&a(e)<=i+n*T_)}}function N_(e,t=Date.now()){return(e.equipment??[]).filter(e=>e.last&&e.every>0&&E_(e.last)!==null&&E_(e.last)+e.every*T_<=t)}function P_(e,t=Date.now(),n=30){return(e.docs??[]).filter(e=>e.expiry&&E_(e.expiry)!==null&&E_(e.expiry)-t<=n*T_).map(e=>({...e,expired:E_(e.expiry)<E_(D_(t))}))}function F_(e,t=Date.now(),n=14){return(e.breeding??[]).filter(e=>e.expected&&E_(e.expected)!==null&&E_(e.expected)>=E_(D_(t))&&E_(e.expected)-t<=n*T_)}function I_(e,t){let n=new Map((e.workers??[]).map(e=>[e.id,e])),r=new Map;for(let n of e.attendance??[])n.date?.startsWith(t)&&r.set(n.worker,(r.get(n.worker)??0)+(n.status===`حاضر`?1:n.status===`نصف يوم`?.5:0));let i=[...r].filter(([e])=>n.has(e)).map(([e,t])=>({worker:n.get(e).name,days:t,pay:t*(n.get(e).wage??0)}));return{rows:i,total:i.reduce((e,t)=>e+t.pay,0)}}var L_=e=>(e.workers??[]).reduce((e,t)=>e+(t.wage??0)*26*12,0),R_=e=>{let t={};for(let n of e.production??[])t[n.item]=(t[n.item]??0)+n.qty;return t};function z_(e,t,n=Date.now()){let r=t[e]??[];if(e===`workers`)return`${r.length} عامل · رواتب شهرية تقريبية $${Math.round(L_(t)/12).toLocaleString(`en`)}`;if(e===`inventory`)return`${r.length} صنف · قيمة المخزن $${Math.round(j_(t)).toLocaleString(`en`)} · ${A_(t).length} ناقص`;if(e===`tasks`){let e=M_(t,n);return`${r.filter(e=>e.status!==`منجزة`).length} مفتوحة · ${e.overdue.length} متأخرة`}return e===`health`?`${r.length} قيد · ${k_(t,n).length} فترة سحب سارية`:e===`equipment`?`${r.length} معدة · ${N_(t,n).length} تحتاج صيانة`:e===`docs`?`${r.length} وثيقة · ${P_(t,n).length} قريبة الانتهاء`:`${r.length} قيد`}var B_={bench:{cattle:[{stage:`مرحلة البداية والتأسيس (200 - 300 كجم)`,name:`عجول التسمين البقري (Beef Calves)`,exc:[4.5,5.5],good:[5.6,6.5],acc:[6.6,7.5],poor:7.6,adg:1450,intake:2.8,cp:16,me:2850,days:70,note:`تحويل سريع بفضل كفاءة نمو العضلات والهيكل العظمي في الأعمار الصغيرة.`},{stage:`مرحلة الإنهاء والتشطيب (350 - 500 كجم)`,name:`عجول التسمين البقري (Beef Calves)`,exc:[6,7],good:[7.1,8.2],acc:[8.3,9.2],poor:9.3,adg:1650,intake:2.5,cp:13.5,me:3050,days:90,note:`يزداد FCR طبيعياً بسبب ترسيب الدهون الذي يستهلك طاقة أعلى من بناء اللحم الأحمر.`}],sheep:[{stage:`تسمين مكثف مبكر (20 - 35 كجم)`,name:`خراف وتسمين الأغنام (Feeder Lambs)`,exc:[3.8,4.8],good:[4.9,5.8],acc:[5.9,6.8],poor:7,adg:320,intake:3.5,cp:16.5,me:2800,days:60,note:`مرحلة أعلى كفاءة وربحية؛ الاستجابة للبروتين والألياف المهضومة تكون في ذروتها.`},{stage:`تسمين نهائي للأضاحي والذبح (35 - 55 كجم)`,name:`خراف وتسمين الأغنام (Feeder Lambs)`,exc:[5.2,6.2],good:[6.3,7.2],acc:[7.3,8.2],poor:8.5,adg:280,intake:3,cp:13.5,me:2950,days:60,note:`يجب ضبط نسبة الحبوب لتفادي التخمة والحموضة الكرشية (Acidosis).`}],goat:[{stage:`نمو وتسمين (15 - 30 كجم)`,name:`جداء وتسمين الماعز (Boer / Ardi Goats)`,exc:[4.2,5.2],good:[5.3,6.4],acc:[6.5,7.5],poor:7.8,adg:220,intake:3.8,cp:16,me:2750,days:75,note:`الماعز تمتاز بحركة عالية لذا تحتاج حظائر محكمة لعدم هدر الطاقة بالحركة الزائدة.`}],poultry_broiler:[{stage:`العمر الكامل للدورة (1 - 35 يوماً حتى وزن 2.1 كجم)`,name:`دواجن التسمين اللاحم (Broiler Ross 308 / Cobb 500)`,exc:[1.38,1.48],good:[1.49,1.6],acc:[1.61,1.75],poor:1.78,adg:62,intake:7,cp:21.5,me:3150,days:35,note:`أعلى معامل تحويل حيوي في عالم الإنتاج الحيواني، أي انحراف بسيط يعكس مشكلة فورية.`}],poultry_layer:[{stage:`ذروة الإنتاج (FCR كجم علف / دزينة بيض أو كجم بيض)`,name:`دجاج إنتاج بيض المائدة (Lohmann / Hy-Line)`,exc:[1.95,2.15],good:[2.16,2.35],acc:[2.36,2.6],poor:2.65,adg:0,intake:5.5,cp:17.5,me:2750,days:365,note:`يحسب كمعامل استهلاك العلف لكل 1 كجم من البيض المنتج.`}],rabbit:[{stage:`تسمين الفطام حتى التسويق (عمر 30 - 75 يوماً)`,name:`أرانب التسمين واللحم (New Zealand White)`,exc:[2.5,2.9],good:[3,3.4],acc:[3.5,4],poor:4.2,adg:38,intake:5,cp:17,me:2600,days:45,note:`حيوان عالي الكفاءة ينتج لحماً أبيض منخفض الكوليسترول جداً.`}],fish_tilapia:[{stage:`دورة النمو الكاملة (من 20 جرام إلى 500 جرام)`,name:`أسماك البلطي النيلي (Nile Tilapia)`,exc:[1.15,1.35],good:[1.36,1.55],acc:[1.56,1.8],poor:1.85,adg:3.2,intake:3.5,cp:30,me:3e3,days:150,note:`تحويل غذائي استثنائي في الأنظمة المغلقة (RAS) والأكوابونيك.`}],fish_catfish:[{stage:`تسمين مكثف سريع`,name:`أسماك القرموط الأفريقي (African Catfish)`,exc:[.95,1.15],good:[1.16,1.3],acc:[1.31,1.5],poor:1.55,adg:6.5,intake:4,cp:34,me:3200,days:120,note:`أعلى معدل تحويل سمكي، يتحمل نقص الأكسجين وكثافة تصل 100 كجم/م³.`}],fish_carp:[{stage:`تسمين في أحواض ترابية / دائرية`,name:`أسماك الكارب العشبي والسلفر`,exc:[1.4,1.7],good:[1.71,2],acc:[2.01,2.4],poor:2.5,adg:4,intake:3,cp:26,me:2700,days:180,note:`ممتاز للاستفادة من الأعلاف الخضراء كالأزولا ومخلفات النباتات.`}],fish_seabass:[{stage:`استزراع في مياه مالحة`,name:`أسماك السيباس والقاروص البحري (Sea Bass)`,exc:[1.3,1.5],good:[1.51,1.75],acc:[1.76,2],poor:2.1,adg:2.5,intake:2.5,cp:42,me:3400,days:240,note:`يحتاج بروتين سمكي عالي الجودة وجودة مياه فائقة.`}],camel:[{stage:`تسمين الحاشي والقعود (150 - 300 كجم)`,name:`حيران وتسمين الإبل (Camels)`,exc:[6.5,7.8],good:[7.9,9.2],acc:[9.3,10.5],poor:11,adg:900,intake:2.2,cp:14,me:2600,days:150,note:`الإبل تمتاز بقدرة فائقة على هضم الألياف الخشنة والشوكية والأملاح.`}],deer_gazelle:[{stage:`إكثار وتربية محمية`,name:`الغزلان والظباء (Gazelles)`,exc:[5,6.2],good:[6.3,7.5],acc:[7.6,8.8],poor:9,adg:120,intake:3,cp:15,me:2700,days:120,note:`تحتاج هدوءاً وظلاً ومصادر علفية طبيعية لمنع هدر الطاقة بالتوتر.`}],duck_goose:[{stage:`تسمين اللحم (حتى عمر 55 يوماً)`,name:`البط والإوز (Ducks & Geese)`,exc:[2.3,2.7],good:[2.8,3.2],acc:[3.3,3.8],poor:4,adg:55,intake:6,cp:19,me:2900,days:55,note:`يستفيد بقوة من نبات الأزولا العائم في خفض تكاليف العلف بنسبة 40%.`}],quail:[{stage:`دورة تسمين سريعة (من الفقس حتى 45 يوماً)`,name:`السمان الياباني (Quail)`,exc:[2.4,2.8],good:[2.9,3.4],acc:[3.5,4],poor:4.2,adg:5.5,intake:8,cp:24,me:3e3,days:42,note:`أسرع طائر إنتاجي في اكتمال دورة اللحم والبيض.`}],horse:[{stage:`صيانة ولياقة وتدريب`,name:`الخيول العربية (Arabian Horses)`,exc:[7,8.5],good:[8.6,10],acc:[10.1,12],poor:12.5,adg:0,intake:2.2,cp:12,me:2500,days:365,note:`الحساب قائم على الحفاظ على اللياقة ومؤشر كتلة الجسم دون سمنة زائدة.`}]},diag:[{id:`diag_feed_toxins`,title:`تلوث العلف بالسموم الفطرية (Mycotoxins) وتلف الحبوب`,cat:`feed_quality`,p:85,sev:`high`,sym:[`تراجع مفاجئ في استهلاك العلف أو بطء شديد في زيادة الوزن`,`إسهالات مائية أو متقطعة وتغير لون الروث`,`تثبيط المناعة وظهور التهابات ثانوية متفرقة`],chk:[`فحص رطوبة مستودع الأعلاف (يجب ألا تتعدى 12%)`,`فحص وجود تكتلات أو عفونة ظاهرة أو رائحة كمكمة في الشكائر`,`التأكد من تاريخ الطحن وخلط مضاد سموم فطرية بيولوجي (Mycotoxin Binder)`],fix:[`إيقاف التشغيلة المشتبه بها فوراً واستبدالها بعلف جديد سليم`,`إضافة مضاد سموم فطرية سائل في ماء الشرب (خمائر + مانان سكريدات) لمدة 3-5 أيام`,`إعطاء منشط كبد وغسيل كلى (سيلينيوم + كولين + ميثيونين) لتنشيط التمثيل الغذائي`]},{id:`diag_coccidiosis_worms`,title:`الإصابة بالطفيليات الداخلية والكوكسيديا (Coccidiosis / Worms)`,cat:`health_parasites`,p:80,sev:`high`,sym:[`شهية طبيعية أو مرتفعة ولكن بدون أي زيادة في الوزن (شعر باهت وهزال)`,`إسهال مخاطي أو مدمم في الدواجن والحملان الفتية`,`انتفاخ البطن وسوء هضم الحبوب وخروجها كاملة بالروث`],chk:[`إجراء فحص مجهري سريع لعينات الروث للبحث عن بويضات الديدان وحويصلات الكوكسيديا`,`مراجعة جدول التجريع الوقائي ضد الطفيليات خلال الـ 60 يوماً الماضية`],fix:[`تجريع مضاد ديدان شامل (ألبيندازول أو إيفرمكتين) وتكراره بعد 21 يوماً`,`في الدواجن والحملان: علاج الكوكسيديا فوراً بمضادات (تولترازوريل أو أمبروليوم)`,`تطهير الأرضيات ورش الجير الحي للقضاء على أطوار اليرقات والبويضات في الحظيرة`]},{id:`diag_heat_stress`,title:`الإجهاد الحراري وسوء التهوية وتراكم الأمونيا (Heat Stress)`,cat:`environment_climate`,p:78,sev:`high`,sym:[`لهث شديد وتنفس سريع مع فتح الفم في فترات الظهيرة (أكثر من 32°م)`,`شرب كميات هائلة من الماء مع عزوف الحيوانات عن الأكل نهاراً`,`هدر الطاقة في تبريد الجسم بدلاً من تحويلها إلى لحم`],chk:[`قياس درجة الحرارة والرطوبة عند مستوى رؤوس الحيوانات (THI Index)`,`فحص سرعة الهواء ووجود ستائر تبريد أو رذاذ ضبابي أو أشجار ظل وارفة`],fix:[`تقديم العلف في الساعات الباردة (فجراً وبعد غروب الشمس)`,`إضافة فيتامين C والكهارل (Electrolytes) وبيكربونات الصوديوم في ماء الشرب`,`تشغيل مراوح التهوية وتوفير مظلات شجرية (غاف ونيم) لخفض الحرارة 6-8°م`]},{id:`diag_feeder_wastage`,title:`هدر العلف ميكانيكياً وسوء تصميم المعالف (Trough Wastage)`,cat:`management_wastage`,p:72,sev:`medium`,sym:[`كميات كبيرة من العلف الناعم أو الحبوب متناثرة على الأرض وتحت الفرشة`,`قيام الحيوانات بنبش العلف لاختيار الحبوب وترك المسحوق الناعم`,`حساب استهلاك علف عالي جداً دفترياً بينما لم يدخل بطون الحيوانات فعلياً`],chk:[`فحص حواف المعالف (يجب وجود شفة داخلية مانعة للتبعثر Anti-waste Lip)`,`مراقبة ارتفاع المعلفة (يجب أن يكون بمستوى غارب الحيوان)`,`فحص نعومة جرش العلف (العلف الناعم جداً يرفضه الحيوان وينثره)`],fix:[`تعديل المعالف وإضافة حواجز تمنع الحيوان من وضع أقدامه داخل الطوالات`,`التحول للعلف المحبب (Pellets) أو الخلط الرطب الخفيف (TMR) لربط المكونات`,`تقديم العلف على وجبات متعددة بدلاً من ملء الطوالات بكميات هائلة دفعة واحدة`]},{id:`diag_water_quality`,title:`عطش الحيوان أو ملوحة مياه الشرب وتلوث الخزانات`,cat:`water_intake`,p:70,sev:`high`,sym:[`انخفاض استهلاك العلف بمقدار النصف (الحيوان لا يأكل إذا لم يشرب كفايته)`,`جفاف الجلد والعيون وتكتل الروث`,`تراجع حاد في النمو والإنتاجية`],chk:[`فحص تدفق النبلات والسقايات التلقائية (هل هناك انسداد أو ضغط ضعيف؟)`,`قياس ملوحة الماء بجهاز TDS (إذا تجاوزت 3500 PPM يتأثر استهلاك العلف)`,`فحص حرارة ماء الشرب صيفاً ونظافة الخزانات من الطحالب`],fix:[`عزل أنابيب المياه وخزانات الشرب لحمايتها من حرارة الشمس المباشرة`,`تنظيف وتعقيم السقايات أسبوعياً وإزالة الرواسب الكلسية والطحالب`,`توفير نقاط شرب إضافية بمعدل سقاية لكل 15-20 رأس غنم أو 8 رؤوس أبقار`]}]},V_={cattle:`cattle`,holstein:`cattle`,buffalo:`cattle`,sheep:`sheep`,awassi:`sheep`,goat:`goat`,shami:`goat`,camel:`camel`,horse:`horse`,arabian:`horse`,deer:`deer_gazelle`,broiler:`poultry_broiler`,layer:`poultry_layer`,duck:`duck_goose`,goose:`duck_goose`,quail:`quail`,rabbit:`rabbit`,tilapia:`fish_tilapia`,catfish:`fish_catfish`,carp:`fish_carp`,seabass:`fish_seabass`},H_=B_.diag,U_=e=>B_.bench[V_[e]]??null;function W_(e,t,n){let r=U_(e);return r?r[Math.min(r.length-1,Math.floor(Math.max(0,Math.min(.999,t/n))*r.length))]:null}function G_(e,t){return!e||t==null?null:t<=e.exc[1]?[`ممتاز`,`#4caf50`]:t<=e.good[1]?[`جيد`,`#8bc34a`]:t<=e.acc[1]?[`مقبول`,`#ffa726`]:[`ضعيف`,`#ef5350`]}var K_={corn:[`ذرة صفراء`,8.5,3300,`energy`],barley:[`شعير`,11,2800,`energy`],wheat:[`قمح`,12,3100,`energy`],bran:[`نخالة قمح`,15,1900,`energy`],soy:[`كسبة صويا`,44,2500,`protein`],fish:[`مسحوق سمك`,60,2900,`protein`],alfalfa:[`جت مجفف`,17,1800,`protein`]};function q_(e,t,n){let r=K_[t][1],i=K_[n][1];if(e<=r||e>=i)return null;let a=(e-r)/(i-r);return{protein:a*100,energy:(1-a)*100,me:K_[t][2]*(1-a)+K_[n][2]*a}}var J_=e=>(J[e]??oh[e])?.name??e;function Y_(e){let t=[],n=(e,n,r,i)=>t.push({sev:e,icon:n,text:r,tab:i}),r=e.records??{},i=e.now??Date.now();e.thirsty>0&&n(e.thirsty>8?`crit`:`warn`,`💧`,`${e.thirsty} مربع نبات عطشان: شغّل الري أو افحص الرشاشات.`,`crops`);for(let t of e.pens??[]){t.status===`crit`?n(`crit`,`🐄`,`${t.name}: ${t.note||`حالة حرجة`}`,`live`):t.status===`warn`&&n(`warn`,`🐄`,`${t.name}: ${t.note||`تحتاج متابعة`}`,`live`),t.feedCap>0&&t.feedLevel<.3*t.feedCap&&t.n>0&&n(`warn`,`🌾`,`${t.name}: مستودع العلف أقل من 30%.`,`live`);let e=t.fcr!=null&&t.wm?G_(W_(t.sp,t.w,t.wm),t.fcr):null;e&&e[0]===`ضعيف`&&n(`warn`,`🧪`,`${t.name}: FCR ضعيف (${t.fcr.toFixed(1)}): راجع معمل FCR لأسباب الارتفاع.`,`fcr`)}for(let t of e.units??[])t.status!==`ok`&&n(t.status===`crit`?`crit`:`warn`,`🐟`,`${t.name}: ${t.note||`يحتاج تدخلاً`}`,`fish`);for(let t of e.badCrops??[])n(`warn`,`🌡️`,`${t.name}: الموسم الحالي غير مناسب لهذا المحصول في إقليمك.`,`cal`);for(let t of e.forecastWarn??[])n(`warn`,`🌦️`,t,`wx`);for(let t of e.salinityWarn??[])n(`warn`,`🧂`,t,`rep`);let a=M_(r,i);for(let e of a.overdue)n(`crit`,`⏰`,`مهمة متأخرة: ${e.title} (${e.due})`,`rec:tasks`);for(let e of a.soon)n(`tip`,`📌`,`مهمة قريبة: ${e.title} (${e.due})`,`rec:tasks`);for(let e of A_(r))n(`warn`,`📦`,`مخزن ناقص: ${e.name} (${e.qty} ${e.unit||``} ≤ ${e.min})`,`rec:inventory`);for(let e of k_(r,i).slice(0,4))n(`warn`,`⛔`,`فترة سحب سارية (${e.target}): لا تبع الحليب أو اللحم قبل ${e.until} (${e.name}).`,`rec:health`);for(let e of N_(r,i))n(`warn`,`🔧`,`صيانة مستحقة: ${e.name}`,`rec:equipment`);for(let e of P_(r,i))n(e.expired?`crit`:`warn`,`📄`,`${e.expired?`انتهت`:`تنتهي قريباً`}: ${e.name} (${e.expiry})`,`rec:docs`);for(let e of F_(r,i))n(`tip`,`🍼`,`ولادة/فقس متوقع ${e.expected} (${e.target||`المزرعة`}): جهّز المكان.`,`rec:breeding`);e.ledger&&e.ledger.expense>0&&e.ledger.net<0&&n(`warn`,`💸`,`المصاريف الفعلية ($${Math.round(e.ledger.expense)}) تفوق الإيرادات ($${Math.round(e.ledger.sale)}).`,`mng`),e.eco&&e.eco.rev>0&&e.eco.net<0&&n(`warn`,`📉`,`التقدير الاقتصادي خاسر سنوياً: راجع الأسعار أو قلّل المصاريف أو أضف نشاطاً مربحاً.`,`eco`),(e.vetThisMonth??[]).length&&!(e.healthThisMonth??0)&&n(`tip`,`💉`,`موعد بيطري هذا الشهر: ${e.vetThisMonth[0]} (سجّله في الدفتر الصحي بعد تنفيذه).`,`cal`),e.animals>0&&!(r.health??[]).length&&n(`tip`,`🩺`,`لديك حيوانات ولا قيود في الدفتر الصحي: سجّل التحصينات.`,`rec:health`),e.animals>0&&!(r.workers??[]).length&&n(`tip`,`👷`,`سجّل العمال ليدخل أجرهم في الاقتصاد والرواتب.`,`rec:workers`),e.tiles>400&&(e.sensors??0)<3&&n(`tip`,`📡`,`مساحة كبيرة بمستشعرات قليلة: أضف مستشعرات رطوبة.`,`dev`),e.eco&&(r.workers??[]).length&&L_(r)>.5*e.eco.rev&&e.eco.rev>0&&n(`tip`,`👷`,`أجور العمال المسجلين تتجاوز نصف الإيراد المقدّر: راجع حجم العمالة.`,`eco`);let o={crit:0,warn:1,tip:2};t.sort((e,t)=>o[e.sev]-o[t.sev]);let s=e=>t.filter(t=>t.sev===e).length;return{items:t,score:Math.max(0,Math.min(100,100-15*s(`crit`)-6*s(`warn`)-s(`tip`))),counts:{crit:s(`crit`),warn:s(`warn`),tip:s(`tip`)}}}var X_={cattle:1500,holstein:1700,buffalo:1500,camel:1200,sheep:200,awassi:200,goat:130,shami:130,horse:450,arabian:450,donkey:300,deer:250},Z_={palm:40,fruit:25,tree:30},Q_=.6,$_=1700;function ev({A:e,crops:t,pens:n,kw:r,pv:i,waterM3Day:a,revenue:o}){let s=a*365,c=s>0?o/s:0,l=r*2e3,u=Math.min(l,i*$_),d=l>0?u/l:0,f=(l-Math.min(l,u))*Q_,p=n.reduce((e,t)=>e+(X_[t.sp]??(J[t.sp]?.group===`bird`||J[t.sp]?.honey?0:20))*t.cap,0),m=0;for(let[n,r]of Object.entries(t)){let t=q[n];(t?.tree||t?.perennial&&Z_[t.cat])&&(m+=r*e/(o_[n.replace(/^palm_.*/,`palm`)]??5)**2*(Z_[t.cat]??20))}let h=f+p,g=h+m>0?m/(m+h):.5,_=Math.round(Math.max(0,Math.min(100,40+60*g+15*d-(c>0&&c<.5?10:0)))),v=[];return d<.5&&l>0&&v.push(`ارفع تغطية الطاقة الشمسية لتقليل انبعاثات الشبكة والفواتير.`),c>0&&c<.5&&v.push(`إنتاجية المياه منخفضة: جرّب ري بالتنقيط ومحاصيل أقل استهلاكاً للماء.`),p>2*m&&p>0&&v.push(`انبعاثات الماشية تفوق امتصاص الأشجار: زِد أشجار النخيل/الظل أو قلّل الرؤوس.`),v.length||v.push(`وضعك الاستدامي جيد: حافظ على التوازن.`),{waterProd:c,kwh:l,solar:u,coverage:d,gridCo2:f,livestock:p,seq:m,net:h-m,score:_,tips:v}}var tv={"٠":0,"١":1,"٢":2,"٣":3,"٤":4,"٥":5,"٦":6,"٧":7,"٨":8,"٩":9},nv={صفر:0,واحد:1,اثنين:2,اثنان:2,ثلاثة:3,ثلاث:3,أربعة:4,اربعة:4,خمسة:5,ستة:6,سبعة:7,ثمانية:8,تسعة:9,عشرة:10,عشرين:20,ثلاثين:30,أربعين:40,اربعين:40,خمسين:50,ستين:60,سبعين:70,ثمانين:80,تسعين:90,مية:100,مئة:100,ميه:100,مئتين:200,ألف:1e3,الف:1e3},rv=e=>String(e).replace(/[٠-٩]/g,e=>tv[e]).replace(/[،,]/g,``).replace(/\s+/g,` `).trim();function iv(e){let t=/(\d+(?:\.\d+)?)/.exec(e);if(t)return[Number(t[1]),e.replace(t[0],` `)];for(let[t,n]of Object.entries(nv))if(RegExp(`(^|\\s)${t}(\\s|$)`).test(e))return[n,e.replace(t,` `)];return[null,e]}var av={حليب:`حليب`,لبن:`حليب`,بيض:`بيض`,عسل:`عسل`,لحم:`لحم`,سمك:`سمك`,تمر:`تمر`,خضار:`خضار`,طماطم:`خضار`,حبوب:`حبوب`,قمح:`حبوب`,فاكهة:`فاكهة`,صوف:`صوف`,سماد:`سماد`},ov=[`لتر`,`كيلو`,`كغ`,`كغم`,`طن`,`بيضة`,`حبة`,`صندوق`],sv=(e,t)=>new Date(t+e*864e5).toISOString().slice(0,10);function cv(e,t=Date.now()){let n=rv(e);if(!n)return null;let[r,i]=iv(n),a=i.replace(/دولار|دولارات|\$/g,` `).replace(/\s+/g,` `).trim();if(/^(ذكرني|مهمة|تذكير|لازم|يجب)/.test(a)){let e=/بعد غد/.test(a)?sv(2,t):/غدا|غداً|بكرة|بكره/.test(a)?sv(1,t):sv(0,t),n=a.replace(/^(ذكرني|مهمة|تذكير|لازم|يجب)\s*/,``).replace(/غداً|غدا|بكرة|بكره|بعد غد|اليوم/g,``).trim().replace(/^(أن|ان)\s+/,``).trim();return n?{kind:`task`,title:n,due:e}:null}if(/^(جمعت|حلبت|إنتاج|انتاج|حصدت|قطفت)/.test(a)&&r!==null)return{kind:`production`,item:Object.entries(av).find(([e])=>a.includes(e))?.[1]??`أخرى`,qty:r,unit:ov.find(e=>a.includes(e))??``};if(r!==null&&r>0){if(/^(صرفت|دفعت|مصروف|اشتريت|شريت|صرف)/.test(a))return{kind:`ledger`,type:`expense`,amount:r,cat:a.replace(/^(صرفت|دفعت|مصروف|اشتريت|شريت|صرف)\s*/,``).replace(/^(على|ل|لـ|ب|بـ)\s*/,``).trim()||`مصروف`};if(/^(بعت|بيع|إيراد|ايراد|قبضت|استلمت)/.test(a))return{kind:`ledger`,type:`sale`,amount:r,cat:a.replace(/^(بعت|بيع|إيراد|ايراد|قبضت|استلمت)\s*/,``).replace(/\s*(ب|بـ|مقابل)\s*$/,``).replace(/\s+(ب|بـ|مقابل)\s*/g,` `).trim()||`بيع`}}return null}var lv=e=>e.kind===`ledger`?`${e.type===`sale`?`إيراد`:`مصروف`} $${e.amount} — ${e.cat}`:e.kind===`task`?`مهمة: ${e.title} (${e.due})`:`إنتاج: ${e.qty} ${e.unit} ${e.item}`;function uv(e=`ar-IQ`){let t=typeof window<`u`&&(window.SpeechRecognition||window.webkitSpeechRecognition);return t?new Promise((n,r)=>{let i=new t;i.lang=e,i.interimResults=!1,i.onresult=e=>n(e.results[0][0].transcript),i.onerror=e=>r(Error(`تعذّر التعرف: `+e.error)),i.onend=()=>r(Error(`لم أسمع شيئاً`)),i.start()}):Promise.reject(Error(`المتصفح لا يدعم التعرف على الصوت: اكتب الأمر بدلاً من ذلك`))}var dv={erbil:[36.19,44.01],sulaymaniyah:[35.56,45.43],dohuk:[36.87,42.99],nineveh:[36.34,43.13],baghdad:[33.31,44.37],diyala:[33.75,44.64],karbala:[32.62,44.02],babil:[32.48,44.42],anbar:[33.42,43.3],basra:[30.51,47.78]},fv=108e5,pv=e=>`farm3d-forecast-`+e,mv=e=>!!dv[e.replace(/^iq_/,``)];function hv(e,t=Date.now()){try{let n=JSON.parse(localStorage.getItem(pv(e.replace(/^iq_/,``))));return n&&t-n.t<864e5?n:null}catch{return null}}async function gv(e,t=!1){let n=e.replace(/^iq_/,``),r=dv[n];if(!r)throw Error(`لا إحداثيات لهذا المناخ (اختر محافظة عراقية)`);let i=hv(e);if(i&&!t&&Date.now()-i.t<fv)return i;let a=new AbortController,o=setTimeout(()=>a.abort(),8e3);try{let e=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${r[0]}&longitude=${r[1]}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,et0_fao_evapotranspiration&timezone=auto&forecast_days=7`,{signal:a.signal});if(!e.ok)throw Error(`الخدمة غير متاحة`);let t=(await e.json()).daily,i=t.time.map((e,n)=>({date:e,tmax:t.temperature_2m_max[n],tmin:t.temperature_2m_min[n],rain:t.precipitation_sum[n]??0,et0:t.et0_fao_evapotranspiration[n]??0})),o={t:Date.now(),days:i};try{localStorage.setItem(pv(n),JSON.stringify(o))}catch{}return o}catch(e){if(i)return{...i,stale:!0};throw Error(`تعذّر جلب الطقس (لا اتصال). `+(e.message??``))}finally{clearTimeout(o)}}var _v=new Set([`tomato`,`pepper`,`cucumber`,`eggplant`,`okra`,`watermelon`,`pumpkin`,`zucchini`,`beans`,`lemon`,`clementine`,`kumquat`,`sugarcane`]),vv={field:.95,veg:1,forage:.95,fruit:.75,palm:.9,tree:.8};function yv(e,t){let n=[],r=new Set(t),i=Math.min(...e.map(e=>e.tmin)),a=Math.max(...e.map(e=>e.tmax)),o=e.reduce((e,t)=>e+t.rain,0),s=[...r].filter(e=>_v.has(e)).map(e=>q[e].name);i<=2&&s.length&&n.push(`صقيع متوقع (${i.toFixed(0)}°): غطِّ ${s.slice(0,3).join(`، `)}.`),a>=46&&n.push(`موجة حر (${a.toFixed(0)}°): ارفع الري ليلاً، وفّر ظلاً وماءً بارداً للحيوان.`);let c=e.filter(e=>e.rain>=5);return c.length&&n.push(`مطر متوقع (${o.toFixed(0)} مم): أجّل الري يوم ${c[0].date} ونظّف المصارف.`),e.some(e=>e.rain>=25)&&n.push(`أمطار غزيرة متوقعة: تجنّب الرش والتسميد قبلها وارفع المخزون عن الأرض.`),n}function bv(e,t,n){let r=Object.entries(t).map(([e,t])=>({id:e,name:q[e]?.name??e,area:t*n,kc:vv[q[e]?.cat]??.9})),i=e.map(e=>{let t=e.rain>=3?.8*e.rain:0,n=r.map(n=>({id:n.id,m3:Math.max(0,n.area*(e.et0*n.kc-t)/1e3/.8)}));return{date:e.date,items:n,m3:n.reduce((e,t)=>e+t.m3,0),skip:e.rain>=5}});return{perDay:i,perCrop:r.map(e=>({...e,week:i.reduce((t,n)=>t+(n.items.find(t=>t.id===e.id)?.m3??0),0)})),total:i.reduce((e,t)=>e+t.m3,0)}}var xv={wheat:6,barley:5,corn:4,rice:5,sunflower:4,sugarcane:12,tomato:4,cucumber:3,pepper:5,eggplant:5,okra:4,potato:4,onion:5,carrot:4,watermelon:4,beans:3,pumpkin:4,zucchini:3,lettuce:2,cabbage:3,spinach:2,radish:1,beet:4,garlic:6,strawberry:5},Sv={palm:{early:[8],mid_season:[9],late:[10,11],very_late:[11]},pomegranate:[10],fig:[7,8],grape:[7,8],lemon:[12,1,2],clementine:[12,1],kumquat:[1,2],apple:[7,8],apricot:[5],olive:[10,11],rose:[4,5],sidr:[11,12]},Cv={palm:[[2,`تلقيح النخيل (أول الإزهار)`],[3,`إكمال التلقيح وتقليم السعف الجاف`],[5,`خف العراجين وتدلية الأعذاق`],[6,`تغليف العراجين وري مكثف`],[1,`سماد عضوي وتنظيف الفسائل`]],tree:[[1,`تقليم شتوي وتسميد عضوي`],[3,`تسميد نتروجيني قبل الإزهار`],[6,`رش وقائي وري مكثف`],[10,`تسميد فوسفاتي وبوتاسي بعد الحصاد`]]},wv=(e,t,n=3)=>Array.from({length:12},(n,r)=>[r+1,Kd(e,t,r+1)]).filter(e=>e[1]>=.7).sort((e,t)=>t[1]-e[1]).slice(0,n).map(e=>e[0]).sort((e,t)=>e-t),Tv={ruminant:[[3,`لقاح الحمى القلاعية (الجرعة الأولى سنوياً)`],[9,`لقاح الحمى القلاعية (الجرعة الثانية)`],[4,`مكافحة الطفيليات الداخلية والخارجية (ربيع)`],[10,`مكافحة الطفيليات الداخلية (خريف)`],[10,`لقاح التسمم المعوي قبل الشتاء`],[3,`لقاح الجمرة الخبيثة في المناطق الموبوءة`],[2,`فحص البروسيلا وتحصين إناث الاستبدال`],[7,`غسل الحظيرة وتطهيرها قبل ذروة الحر`]],sheepgoat:[[1,`لقاح طاعون المجترات الصغيرة (سنوياً)`],[11,`فحص قبل موسم التلقيح وتغذية تحضيرية`]],poultry:[[0,`اليوم 1: مارك؛ اليوم 7: نيوكاسل + برونكايتس؛ اليوم 14 و24: غمبورو؛ اليوم 21: تعزيز نيوكاسل`],[0,`للبياض: تعزيز نيوكاسل كل 8–10 أسابيع`],[7,`تبريد الدواجن وتخفيف الكثافة في الصيف`]],rabbit:[[3,`لقاحات الميكسوماتوزس والنزف الفيروسي`],[9,`تعزيز اللقاحات وفحص الطفيليات`]],bee:[[3,`فحص الخلايا وبناء الطوائف قبل فيض الرحيق وإضافة العسالات`],[8,`علاج الفاروا (نهاية الموسم)`],[12,`علاج الفاروا الثاني وتجهيز الشتاء`],[11,`تغذية سكرية وتقوية الطوائف الضعيفة`]],fish:[[2,`تنظيف الأحواض وتعقيمها بالجير قبل التفريخ/الزريعة`],[6,`مراقبة الأكسجين يومياً في الحر وتشغيل التهوية ليلاً`],[10,`فحص الطفيليات وتعديل التغذية مع انخفاض الحرارة`]],pet:[[0,`حجر 14–21 يوماً للقادم الجديد وفحص الطفيليات`],[4,`جرعة دودية وقائية`]]},Ev=e=>{let t=J[e];return t?t.honey?`bee`:e===`rabbit`?`rabbit`:t.group===`bird`?t.ornamental?`pet`:`poultry`:t.ornamental?`pet`:`ruminant`:null};function Dv(e){let t=[],n=(e,n,r)=>t.push({month:e,kind:n,text:r});for(let t of e.crops){let r=q[t];if(r){if(r.shape===`palm`){for(let[e,t]of Cv.palm)n(e,`orchard`,`${r.name}: ${t}`);for(let e of Sv.palm[r.season]??[9])n(e,`crop`,`حصاد ${r.name}`)}else if(r.perennial&&r.cat!==`forage`){for(let[e,t]of Cv.tree)n(e,`orchard`,`${r.name}: ${t}`);for(let e of Sv[t]??[10])n(e,`crop`,`حصاد ${r.name}`)}else if(r.perennial)for(let e=3;e<=11;e+=2)n(e,`crop`,`حشّة ${r.name}`);else{let i=xv[t]??4,a=wv(t,e.climate,2);for(let e of a.length?a:[3])n(e,`crop`,`زراعة ${r.name}`),n((e-1+Math.round(i))%12+1,`crop`,`حصاد ${r.name}`)}}}let r=new Set;for(let t of e.pens){let e=Ev(t);if(!e||r.has(t))continue;r.add(t);let i=J[t],a=[...Tv[e]??[],...e===`ruminant`&&[`sheep`,`goat`,`awassi`,`shami`].includes(t)?Tv.sheepgoat:[]];for(let[e,t]of a)for(let r of e===0?[1]:[e])n(r,`vet`,`${i.name}: ${t}`)}if(e.units.length)for(let[e,t]of Tv.fish)n(e,`vet`,`أسماك: ${t}`);return t}function Ov(e,t=new Date){let n=Dv(e),r=t.getMonth()+1,i=t.getFullYear();return Array.from({length:12},(e,t)=>{let a=(r-1+t)%12+1;return{month:a,year:i+ +(a<r),events:n.filter(e=>e.month===a)}})}function kv(e,t=`مزرعتي`){let n=e=>String(e).replace(/[\\;,]/g,e=>`\\`+e).replace(/\n/g,`\\n`),r=[`BEGIN:VCALENDAR`,`VERSION:2.0`,`PRODID:-//farm3d//AR`,`CALSCALE:GREGORIAN`,`X-WR-CALNAME:`+n(t)],i=0;for(let t of e)for(let e of t.events){let a=`${t.year}${String(t.month).padStart(2,`0`)}01`,o=`${t.month===12?t.year+1:t.year}${String(t.month===12?1:t.month+1).padStart(2,`0`)}01`;r.push(`BEGIN:VEVENT`,`UID:farm3d-${a}-${i++}@local`,`DTSTAMP:${a}T000000Z`,`DTSTART;VALUE=DATE:${a}`,`DTEND;VALUE=DATE:${o}`,`SUMMARY:${n(e.text)}`,`CATEGORIES:${e.kind}`,`END:VEVENT`)}return r.push(`END:VCALENDAR`),r.join(`\r
`)}var Av=new TextEncoder,jv=(()=>{let e=new Uint32Array(256);for(let t=0;t<256;t++){let n=t;for(let e=0;e<8;e++)n=n&1?3988292384^n>>>1:n>>>1;e[t]=n>>>0}return e})(),Mv=e=>{let t=-1;for(let n of e)t=jv[(t^n)&255]^t>>>8;return~t>>>0};function Nv(e){let t=[],n=[],r=0,i=e=>[e&255,e>>8&255],a=e=>[e&255,e>>8&255,e>>16&255,e>>>24&255];for(let[o,s]of e){let e=Av.encode(o),c=Mv(s),l=Uint8Array.from([80,75,3,4,20,0,0,8,0,0,0,0,33,0,...a(c),...a(s.length),...a(s.length),...i(e.length),0,0]);t.push(l,e,s),n.push(Uint8Array.from([80,75,1,2,20,0,20,0,0,8,0,0,0,0,33,0,...a(c),...a(s.length),...a(s.length),...i(e.length),0,0,0,0,0,0,0,0,0,0,0,0,...a(r)]),e),r+=l.length+e.length+s.length}let o=n.reduce((e,t)=>e+t.length,0),s=Uint8Array.from([80,75,5,6,0,0,0,0,...i(e.length),...i(e.length),...a(o),...a(r),0,0]),c=[...t,...n,s],l=new Uint8Array(c.reduce((e,t)=>e+t.length,0)),u=0;for(let e of c)l.set(e,u),u+=e.length;return l}var Pv=e=>String(e).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]).replace(/[\x00-\x08\x0b\x0c\x0e-\x1f]/g,``),Fv=e=>{let t=``;for(e++;e>0;e=Math.floor((e-1)/26))t=String.fromCharCode(65+(e-1)%26)+t;return t},Iv=e=>`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetViews><sheetView rightToLeft="1" workbookViewId="0"/></sheetViews><sheetData>${e.map((e,t)=>`<row r="${t+1}">${e.map((e,n)=>typeof e==`number`&&Number.isFinite(e)?`<c r="${Fv(n)}${t+1}"><v>${e}</v></c>`:`<c r="${Fv(n)}${t+1}" t="inlineStr"><is><t>${Pv(e??``)}</t></is></c>`).join(``)}</row>`).join(``)}</sheetData></worksheet>`;function Lv(e){let t=`http://schemas.openxmlformats.org/officeDocument/2006/relationships`;return Nv([[`[Content_Types].xml`,`<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>${e.map((e,t)=>`<Override PartName="/xl/worksheets/sheet${t+1}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>`).join(``)}</Types>`],[`_rels/.rels`,`<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="${t}/officeDocument" Target="xl/workbook.xml"/></Relationships>`],[`xl/workbook.xml`,`<?xml version="1.0" encoding="UTF-8"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="${t}"><sheets>${e.map((e,t)=>`<sheet name="${Pv(e.name).slice(0,31)}" sheetId="${t+1}" r:id="rId${t+1}"/>`).join(``)}</sheets></workbook>`],[`xl/_rels/workbook.xml.rels`,`<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${e.map((e,n)=>`<Relationship Id="rId${n+1}" Type="${t}/worksheet" Target="worksheets/sheet${n+1}.xml"/>`).join(``)}</Relationships>`],...e.map((e,t)=>[`xl/worksheets/sheet${t+1}.xml`,Iv(e.rows)])].map(([e,t])=>[e,Av.encode(t)]))}var Rv=`farm3d-backend`,zv=(()=>{try{return JSON.parse(localStorage.getItem(Rv))??{}}catch{return{}}})(),Bv=null,Vv=()=>``,Hv=new Set,Uv={online:!1,get url(){return zv.url??``},get token(){return zv.token??``},get configured(){return!!(zv.url&&zv.token)},onChange:e=>Hv.add(e),setFarmId(e){Vv=e}},Wv=()=>Hv.forEach(e=>e());async function Gv(e,t={}){let n=new AbortController,r=setTimeout(()=>n.abort(),4e3);try{let r=await fetch(Uv.url.replace(/\/$/,``)+`/api`+e,{...t,signal:n.signal,headers:{"Content-Type":`application/json`,Authorization:`Bearer `+Uv.token,...t.headers},body:t.body?JSON.stringify(t.body):void 0}),i=await r.json().catch(()=>null);if(!r.ok)throw Error(i?.error??r.status);return i}finally{clearTimeout(r)}}function Kv(){Bv?.close(),Bv=new EventSource(`${Uv.url.replace(/\/$/,``)}/api/stream?token=${encodeURIComponent(Uv.token)}`),Bv.addEventListener(`telemetry`,e=>{let t=JSON.parse(e.data);t.farm===Vv()&&_g.set(t.sensor,{value:t.value,ts:Date.now()})}),Bv.addEventListener(`command`,e=>{let t=JSON.parse(e.data),n=/^sprinkler@(\d+),(\d+)$/.exec(t.target);if(t.farm!==Vv()||!n||!im[t.action])return;let r=rm.find(e=>e.tile.i===+n[1]&&e.tile.j===+n[2]);r&&dm(r,t.action)})}async function qv(){if(!Uv.configured)return!1;try{let e=await Gv(`/health`),t=Uv.online;Uv.online=!0,t||(Kv(),await Jv(e.time-Date.now()))}catch{Uv.online=!1,Bv?.close(),Bv=null}return Wv(),Uv.online}async function Jv(e){try{for(let t of await Gv(`/latest?farm=`+encodeURIComponent(Vv())))_g.set(t.sensor,{value:t.value,ts:t.ts-e})}catch{}}function Yv(e,t){zv={url:e.trim(),token:t.trim()};try{localStorage.setItem(Rv,JSON.stringify(zv))}catch{}return Uv.online=!1,Bv?.close(),Bv=null,qv()}async function Xv(e,t,n,r=!1){let i=e.trim().replace(/\/$/,``)+`/api/auth/`,a=async(e,t)=>{let n=await fetch(i+e,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(t)}),r=await n.json().catch(()=>({}));if(!n.ok)throw Error(r.error??n.status);return r};r&&await a(`register`,{name:t,password:n});let{token:o}=await a(`login`,{name:t,password:n});return Yv(e,o)}function Zv(){zv={};try{localStorage.removeItem(Rv)}catch{}Uv.online=!1,Bv?.close(),Bv=null,_g.clear(),Wv()}var Qv=0;function $v(e,t,n){Uv.online&&e&&(clearTimeout(Qv),Qv=setTimeout(()=>Gv(`/farms/`+e,{method:`PUT`,body:{name:t,data:n}}).catch(()=>{Uv.online=!1,Wv()}),2e3))}function ey(e,t){Uv.online&&Gv(`/commands`,{method:`POST`,body:{farm:Vv(),target:e,action:t}}).catch(()=>{})}setInterval(()=>{Uv.configured&&!Uv.online&&qv()},1e4);var Y=e=>String(e).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),ty=[[`over`,`🏠 نظرة عامة`],[`mng`,`📝 إدارة المزرعة`],[`rec`,`📋 السجلات`],[`crops`,`🌱 المحاصيل`],[`live`,`🐄 الثروة الحيوانية`],[`fish`,`🐟 الأسماك`],[`wx`,`🌦️ الطقس والري`],[`cal`,`🗓️ الجدول`],[`eco`,`💰 الاقتصاد`],[`fcr`,`🧪 معمل FCR`],[`dev`,`📡 الأجهزة`],[`rep`,`📋 التقرير`]],ny={ok:`#4caf50`,warn:`#ffa726`,crit:`#ef5350`},ry=`#hub{position:fixed;inset:0;z-index:30;background:linear-gradient(160deg,#0b2a1f,#10382a 55%,#0d2a3a);color:#eafff4;overflow:auto;font-family:Cairo,system-ui,sans-serif;display:none}
#hub .hd{position:sticky;top:0;z-index:2;background:#0b2a1fee;backdrop-filter:blur(8px);padding:10px 16px;display:flex;gap:10px;align-items:center;flex-wrap:wrap}
#hub .hd b{font-size:18px}#hub .tabs{display:flex;gap:6px;overflow-x:auto;scrollbar-width:none;flex:1}
#hub button{font:inherit;color:inherit;background:#ffffff14;border:0;border-radius:10px;padding:7px 12px;cursor:pointer;white-space:nowrap}
#hub button.on{background:linear-gradient(135deg,#8bf5c8,#45d0a0);color:#06281c}
#hub .bd{padding:14px 16px;max-width:1100px;margin:auto}
#hub .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:10px;margin-bottom:14px}
#hub .card{background:#ffffff10;border:1px solid #ffffff18;border-radius:14px;padding:12px}
#hub .card small{opacity:.7;display:block}#hub .card .v{font-size:24px;font-weight:700}
#hub h3{margin:16px 0 8px;color:#8bf5c8}
#hub table{width:100%;border-collapse:collapse;font-size:14px}#hub th,#hub td{padding:6px 8px;text-align:right;border-bottom:1px solid #ffffff18}
#hub .bar{height:7px;border-radius:4px;background:#ffffff22;overflow:hidden;min-width:60px}#hub .bar i{display:block;height:100%;background:#6ee7b7}
#hub .al{border-right:4px solid;padding:6px 10px;margin:5px 0;background:#ffffff0c;border-radius:8px}
#hub .row{display:flex;gap:8px;flex-wrap:wrap;margin:8px 0}#hub iframe{width:100%;height:78vh;border:0;border-radius:12px;background:#fff}
#hub ul{margin:4px 0;padding-inline-start:20px}`;function iy({state:e,scene:t,focus:n,openPanel:r,importFarm:i,saveData:a}){let o=document.createElement(`style`);o.textContent=ry,document.head.append(o);let s=document.createElement(`div`);s.id=`hub`,document.body.append(s);let c=null;addEventListener(`beforeinstallprompt`,e=>{e.preventDefault(),c=e,d&&(p=``,he())});let l=0,u=`mng`,d=!1,f=0,p=``,m=(e,t=`#6ee7b7`)=>`<div class="bar"><i style="width:${Math.round(Math.max(0,Math.min(1,e))*100)}%;background:${t}"></i></div>`,h=(e,t,n=``)=>`<div class="card"><small>${e}</small><div class="v">${t}</div><small>${n}</small></div>`,g=(e,t)=>`<table><tr>${e.map(e=>`<th>${e}</th>`).join(``)}</tr>${t.map(e=>`<tr>${e.map(e=>`<td>${e}</td>`).join(``)}</tr>`).join(``)}</table>`;function _(){let t=e.profile,n=Cd[t.climate],r=Rd(t.climate),i=new Date().getMonth()+1,a=(t.cell??2)**2,o={},s=Qg(t,o),c=Vg({sensors:mg,pens:jm,hatcheries:Jh,units:Eh}),u=c.filter(e=>e.sev===`crit`).length,d={};for(let e of Op)if(e.crop){let t=d[e.crop.id]??={n:0,g:0,ready:0,stress:0};t.n++,t.g+=Math.min(1,e.crop.age/q[e.crop.id].grow),tm(e)&&t.ready++,e.stress&&t.stress++}let f=Object.values(d).reduce((e,t)=>e+t.n,0),p=Object.values(d).reduce((e,t)=>e+t.ready,0),_=jm.reduce((e,t)=>e+t.n,0),v=Eh.reduce((e,t)=>e+Math.round(t.n),0),y=Op.filter(e=>e.soil),b=y.length?y.reduce((e,t)=>e+t.moisture,0)/y.length:0,x=`<h3>${Y(t.name)}</h3><small>${Y(n?.name??``)} · ${t.area?t.area.toLocaleString(`en`)+` م²`:``} · تربة ${Ap[t.soil].name}</small>`,S={},C=qd(i);S.over=`${x}<div class="grid">
      ${h(`الطقس الآن`,`${Dd.airTemp.toFixed(0)}° · ${Math.round(Dd.rh)}%`,Dd.rain?`🌧️ مطر`:Dd.sun>.25?`☀️ نهار`:`🌙 ليل`)}
      ${h(`التنبيهات`,c.length?`${u} خطر · ${c.length-u} تنبيه`:`✅ سليم`,``)}
      ${h(`رطوبة التربة`,Math.round(b*100)+`%`,`${y.length} مربع محروث`)}
      ${h(`المحاصيل`,f+` مربع`,`${p} ناضج`)}
      ${h(`الثروة الحيوانية`,_+` رأس`,`${jm.length} حظيرة · ${Jh.length} مفقس`)}
      ${h(`الأسماك`,v.toLocaleString(`en`),`${Eh.length} حوض/قفص`)}
      ${h(`المياه المقدّرة`,o.waterTot.toFixed(1)+` م³/يوم`,`ري + حيوان + أحواض`)}
      ${h(`الكهرباء`,o.kw.toFixed(1)+` kW`,`ألواح مقترحة ${o.pv} kWp`)}
      ${h(`رأس المال التقديري`,`$`+Math.round(o.capex).toLocaleString(`en`),`تقدير أولي`)}
      ${h(`المخزون`,`${Math.round(Mm.feed)} كغ علف`,`${Math.round(Object.values(e.inventory).reduce((e,t)=>e+t,0))} وحدة منتجات`)}</div>
      <h3>🔔 ما يحتاج تدخلاً</h3>${c.length?c.slice(0,8).map((e,t)=>`<div class="al" style="border-color:${ny[e.sev]}" data-focus="${t}">${e.icon} <b>${Y(e.title)}</b> — ${Y(e.msg)}${e.pos?` <small>(اضغط للانتقال)</small>`:``}</div>`).join(``):`<p>لا شيء حالياً ✅</p>`}
      ${o.warn.map(e=>`<div class="al" style="border-color:${ny.warn}">⚠️ ${Y(e)}</div>`).join(``)}
      ${C?`<h3>🗓️ مهام ${Y(C.monthNameAr)}</h3><ul>${[...C.plantingTasksAr,...C.fertilizationTasksAr].slice(0,4).map(e=>`<li>${Y(e)}</li>`).join(``)}</ul><small>${Y(C.irrigationGuidanceAr)}</small>`:``}
      ${r?`<h3>📍 توصيات ${Y(r.nameAr.split(` (`)[0])}</h3><ul>${r.specialAgroAdvisoriesAr.map(e=>`<li>${Y(e)}</li>`).join(``)}</ul>`:``}`,S.__al=c;let w=Object.keys(q).map(e=>[e,Kd(e,t.climate,i)]).filter(e=>e[1]>0).sort((e,t)=>t[1]-e[1]).slice(0,8);S.crops=`<div class="row"><button data-act="water">💧 ري كل المحروث</button><button data-act="harvest">🧺 حصاد كل الناضج (${p})</button><button data-act="3d">🎮 فتح المشهد للتعديل</button></div>
      ${f?g([`المحصول`,`المساحة م²`,`النمو`,`ناضج`,`إجهاد`],Object.entries(d).map(([e,t])=>[`${q[e].icon} ${q[e].name}`,Math.round(t.n*a).toLocaleString(`en`),m(t.g/t.n),t.ready,t.stress?`<b style="color:${ny.warn}">${t.stress}</b>`:`—`])):`<p>لا محاصيل مزروعة. استعمل «مشروع جديد» مع المخطط التلقائي أو ازرع من المشهد.</p>`}
      <h3>الأنسب لهذا الشهر في ${Y(n?.name??``)}</h3>${g([`المحصول`,`الملاءمة`],w.map(([e,t])=>[`${q[e].icon} ${q[e].name}`,m(t,t>.7?`#6ee7b7`:`#ffa726`)]))}`,S.live=`<div class="row"><button data-act="3d" data-panel="livestock">🎮 إدارة الحظائر في المشهد</button></div>`+(jm.length?g([`الحظيرة`,`العدد`,`الوزن كغ`,`FCR`,`حرارة`,`أمونيا`,`العلف`,`الحالة`],jm.map(e=>[`${J[e.sp].icon} ${J[e.sp].name}`,`${e.n}/${e.cap}`,Math.round(e.w),e.fcr?e.fcr.toFixed(1):`—`,e.temp.toFixed(0)+`°`,e.nh3.toFixed(0),m(e.feedLevel/e.feedCap),`<span style="color:${ny[e.status]}">●</span> ${Y(e.note||`سليم`)}`])):`<p>لا حظائر.</p>`)+(Jh.length?`<h3>🐣 المفاقس</h3>`+g([`الحالة`,`ملاحظة`],Jh.map(e=>[`<span style="color:${ny[e.status]}">●</span> ${e.status}`,Y(e.note||``)])):``),S.fish=`<div class="row"><button data-act="3d" data-panel="aqua">🎮 إدارة الأحواض في المشهد</button></div>`+(Eh.length?g([`الوحدة`,`العدد`,`وزن غ`,`أكسجين`,`حرارة`,`الحالة`],Eh.map(e=>[`${oh[e.sp].icon} ${oh[e.sp].name} (${e.kind===`cage`?`قفص`:`حوض`})`,Math.round(e.n).toLocaleString(`en`),Math.round(e.w),e.do.toFixed(1),e.temp.toFixed(0)+`°`,`<span style="color:${ny[e.status]}">●</span> ${Y(e.note||`سليم`)}`])):`<p>لا أحواض.</p>`);let T=Ov({climate:t.climate,crops:[...new Set(Op.filter(e=>e.crop).map(e=>e.crop.id))],pens:jm.map(e=>e.sp),units:Eh.map(e=>e.sp)}),E={crop:`🌱`,orchard:`🌳`,vet:`🩺`};S.__plan=T,S.cal=`<div class="row"><button data-act="ics">📅 تصدير تقويم (ICS) للهاتف</button></div><small>جدول عام تقريبي للعراق يُبنى مما في مزرعتك. التحصينات والجرعات يحددها الطبيب البيطري، وأعمال الزراعة المهندس الزراعي.</small>`+(T.every(e=>!e.events.length)?`<p>أضف محاصيل أو حيوانات ليظهر الجدول.</p>`:T.map((e,t)=>`<h3>${t===0?`⭐ `:``}${Y(new Date(2e3,e.month-1,1).toLocaleDateString(`ar-IQ`,{month:`long`}))} ${e.year}</h3>${e.events.length?`<ul>${e.events.map(n=>`<li>${E[n.kind]} ${Y(n.text)} <button data-act="cal-task" data-m="${t}" data-e="${e.events.indexOf(n)}" style="padding:1px 8px;font-size:12px">➕ مهمة</button></li>`).join(``)}</ul>`:`<small>لا مهام</small>`}`).join(``));let D=T[0].events.filter(e=>e.kind===`vet`).map(e=>e.text),O=(e.records?.health??[]).filter(e=>e.date?.startsWith(D_().slice(0,7))).length,k=Y_({now:Date.now(),month:i,records:e.records??{},thirsty:Op.filter(e=>e.stress===`water`).length,pens:jm.map(e=>({name:`${J[e.sp].icon} ${J[e.sp].name}`,sp:e.sp,w:e.w,wm:J[e.sp].wm,fcr:e.fcr,status:e.status,note:e.note,feedLevel:e.feedLevel,feedCap:e.feedCap,n:e.n})),units:Eh.map(e=>({name:`${oh[e.sp].icon} ${oh[e.sp].name}`,status:e.status,note:e.note})),badCrops:Object.keys(d).filter(e=>Kd(e,t.climate,i)===0).map(e=>({name:q[e].name})),salinityWarn:o.warn,ledger:y_(e),eco:(()=>{try{let e=oe().r;return{net:e.net,rev:e.rev}}catch{return null}})(),sensors:mg.length,tiles:Op.filter(e=>!e.blocked).length,animals:_,vetThisMonth:D,healthThisMonth:O,forecastWarn:(()=>{let e=hv(t.climate);return e?yv(e.days,Object.keys(d)):[]})()});S.__adv=k;let A={crit:ny.crit,warn:ny.warn,tip:`#6ee7b7`},ee=`<div class="card" style="margin-bottom:12px"><div style="float:left"><button data-act="notify">🔔 تنبيهات المتصفح</button></div><div style="display:flex;gap:14px;align-items:center;flex-wrap:wrap"><div style="font-size:34px;font-weight:700;color:${k.score>=80?`#6ee7b7`:k.score>=55?ny.warn:ny.crit}">${k.score}</div><div><b>🧠 مستشار المزرعة</b><br><small>درجة صحة المزرعة · ${k.counts.crit} حرج · ${k.counts.warn} تنبيه · ${k.counts.tip} نصيحة</small></div></div>
      ${k.items.slice(0,8).map((e,t)=>`<div class="al" style="border-color:${A[e.sev]}" data-adv="${t}">${e.icon} ${Y(e.text)} <small>(اضغط للفتح)</small></div>`).join(``)||`<p>✅ لا توصيات: مزرعتك بحال جيدة.</p>`}</div>`;return S.over=S.over.replace(`<div class="grid">`,ee+`<div class="grid">`),k.counts.crit&&typeof Notification<`u`&&Notification.permission===`granted`&&Date.now()-l>36e5&&(l=Date.now(),new Notification(`مزرعتي: `+k.counts.crit+` حرج`,{body:k.items[0].text})),S.over=S.over.replace(`<h3>🔔 ما يحتاج تدخلاً</h3>`,`<div class="al" style="border-color:#6ee7b7">🗓️ مهام هذا الشهر في جدولك: <b>${T[0].events.length}</b> (تبويب الجدول)</div><h3>🔔 ما يحتاج تدخلاً</h3>`),S.rep=s,S}let v=()=>{let t=e.profile.cell??2;return mg.length?g([`معرّف المستشعر (أرسله من الجهاز)`,`القراءة`,`المصدر`,`الموقع م`],mg.map(e=>{let n=pg[e.type];return[`<code>${Y(e.id)}</code>`,`${e.value.toFixed(n.dec)} ${n.unit}`,e.real?`🟢 جهاز حقيقي`:`⚪ محاكاة`,`${((e.tile.i+.5)*t).toFixed(0)}، ${((e.tile.j+.5)*t).toFixed(0)}`]})):`<p>لا مستشعرات.</p>`},y=()=>`// ESP32 (Arduino): أرسل قراءة كل 10 ثوانٍ. ضع عنوان الخادم ومفتاح الجهاز من هذه الصفحة (لا تنشرهما)
#include <WiFi.h>
#include <HTTPClient.h>
const char* SERVER = "http://عنوان-الخادم:8787";
const char* DEV_ID = "dev_xxxxxxxx", *DEV_KEY = "مفتاح-الجهاز";
void sendReading(const char* sensor, float v) {
  HTTPClient h; h.begin(String(SERVER) + "/api/telemetry");
  h.addHeader("Content-Type", "application/json");
  h.addHeader("X-Device-Id", DEV_ID); h.addHeader("X-Device-Key", DEV_KEY);
  h.POST("{\"sensor\":\"" + String(sensor) + "\",\"value\":" + String(v) + "}"); h.end();
}
// مثال: sendReading("soil_moisture@4,3", رطوبة_التربة_بالمئة);  // نفس المعرّف الظاهر في الجدول
// الأوامر: GET /api/commands/pending بنفس الترويسات، ثم POST /api/commands/<id>/ack
// أو MQTT: المنفذ 1883، المستخدم = DEV_ID، كلمة المرور = DEV_KEY، الموضوع farm/${e.profile.id}/telemetry/<المعرّف>`;async function b(){let t=s.querySelector(`#devbd`);if(!t)return;if(!Uv.configured){t.innerHTML=`<h3>🔌 ربط الخادم</h3><p>شغّل الخادم على حاسوبك: <code>npm run server</code> فيطبع رمز المسؤول. ثم أدخله هنا. من الجوال على نفس الواي فاي افتح <code>http://عنوان-الحاسوب:8787</code> (الخادم يقدّم التطبيق نفسه). القراءات الحالية محاكاة إلى أن يتصل جهاز حقيقي.</p>
        <div class="row"><input id="bkUrl" placeholder="http://localhost:8787" value="${location.port===`8787`?location.origin:`http://localhost:8787`}"><input id="bkTok" placeholder="رمز المسؤول" type="password"><button data-act="bk-connect">اتصال بالرمز</button></div>
        <h3>👤 أو بحساب مستخدم</h3><div class="row"><input id="bkUser" placeholder="اسم المستخدم"><input id="bkPass" placeholder="كلمة المرور (8 أحرف+)" type="password"><button data-act="bk-login">دخول</button><button data-act="bk-signup">إنشاء حساب</button></div><small>الحسابات تعزل مزارعك وأجهزتك عن غيرك. ينشئها مسؤول الخادم (أو يفتح التسجيل بـ <code>ALLOW_SIGNUP=1</code>).</small><div id="devlive">${v()}</div>`;return}let n=[],r=[],i=[],a=[],o=`?farm=`+encodeURIComponent(e.profile.id);if(Uv.online)try{[n,r,i,a]=await Promise.all([Gv(`/devices`),Gv(`/farms`),Gv(`/commands`+o),Gv(`/rules`+o)])}catch{}let c={on:`🟢 يعمل`,off:`⚪ متوقف`,timeout:`⏱️ أُطفئ بالحارس`},l=mg.filter(e=>!pg[e.type].thermal).map(e=>`<option value="${Y(e.id)}">${pg[e.type].icon} ${Y(e.id)}</option>`).join(``),u=rm.map(e=>`<option value="sprinkler@${e.tile.i},${e.tile.j}">💦 sprinkler@${e.tile.i},${e.tile.j}</option>`).join(``);t.innerHTML=`<div class="al" style="border-color:${Uv.online?`#4caf50`:`#ef5350`}">${Uv.online?`🟢 الخادم متصل`:`🔴 الخادم غير متصل (يعاد الاتصال تلقائياً)`} — <code>${Y(Uv.url)}</code></div>
      <div class="row"><button data-act="bk-push">☁️ رفع المزرعة الحالية</button><button data-act="tg-test">📨 اختبار تنبيهات Telegram</button><button data-act="bk-off">قطع الاتصال</button></div>
      <h3>📟 الأجهزة المسجّلة</h3>${n.length?g([`الجهاز`,`المعرّف`,`آخر ظهور`,``],n.map(e=>[Y(e.name),`<code>${e.id}</code>`,e.last_seen?new Date(e.last_seen).toLocaleTimeString(`ar-IQ`):`لم يتصل`,`<button data-act="bk-deldev" data-id="${e.id}">حذف</button>`])):`<p>لا أجهزة بعد.</p>`}
      <div class="row"><input id="bkName" placeholder="اسم جهاز جديد (مثلاً: حقل القمح)"><button data-act="bk-newdev">➕ تسجيل جهاز</button></div><div id="bkNew"></div>
      <h3>🔗 ربط المستشعرات</h3><div id="devlive">${v()}</div>
      <h3>🧑‍💻 كود ESP32</h3><pre style="background:#0007;padding:10px;border-radius:10px;overflow:auto;direction:ltr;text-align:left">${Y(y())}</pre>
      <h3>⚙️ قواعد الأتمتة على الخادم</h3><small>تعمل على الخادم حتى والتطبيق مغلق: «أقل من» يشغّل الهدف تحت القيمة ويطفئه فوق القيمة + الهامش. الحارس يطفئ الهدف بعد المهلة إن انقطع المستشعر.</small>
      ${a.length?g([`المستشعر`,`الشرط`,`الهامش`,`الهدف`,`الحارس`,`الحالة`,``],a.map(e=>[`<code>${Y(e.sensor)}</code>`,`${e.op===`<`?`أقل من`:`أكثر من`} ${e.value}`,e.margin,`<code>${Y(e.target)}</code>`,e.max_min?e.max_min+` د`:`—`,e.enabled?c[e.state]??`⚪ بانتظار قراءة`:`⏸️ معطّلة`,`<button data-act="bk-rule-toggle" data-id="${e.id}" data-on="${+!e.enabled}">${e.enabled?`تعطيل`:`تفعيل`}</button> <button data-act="bk-rule-del" data-id="${e.id}">حذف</button>`])):`<p>لا قواعد بعد.</p>`}
      <div class="row" id="ruleBox"><select id="rSensor">${l||`<option value="">لا مستشعرات</option>`}</select><select id="rOp"><option value="<">أقل من</option><option value=">">أكثر من</option></select><input id="rVal" type="number" step="any" placeholder="القيمة" style="width:90px"><input id="rMargin" type="number" step="any" value="2" title="الهامش" style="width:70px"><select id="rTarget">${u||`<option value="">لا رشاشات</option>`}</select><input id="rMax" type="number" value="30" title="الحارس (دقائق)" style="width:70px"><button data-act="bk-rule-add">➕ قاعدة</button></div>
      <h3>☁️ مزارع على الخادم</h3>${r.length?g([`المزرعة`,`آخر تحديث`,``],r.map(e=>[Y(e.name),new Date(e.updated).toLocaleString(`ar-IQ`),`<button data-act="bk-load" data-id="${e.id}">استرجاع</button>`])):`<p>لا مزارع.</p>`}
      <h3>🕹️ آخر الأوامر</h3>${i.length?g([`الهدف`,`الأمر`,`الحالة`],i.slice(0,8).map(e=>[`<code>${Y(e.target)}</code>`,Y(e.action),e.status===`done`?`✅ نُفِّذ`:`⏳ ينتظر الجهاز`])):`<p>لا أوامر.</p>`}`}let x=()=>{let e=s.querySelector(`#devlive`);e&&(e.innerHTML=v())};Uv.onChange(()=>{d&&u===`dev`&&(p=``,he())});let S={field:`حقلية`,veg:`خضار`,forage:`أعلاف`,fruit:`فاكهة`,palm:`نخيل`,tree:`ظل وورد`},C=e=>`$`+Math.round(e).toLocaleString(`en`),w=(t=``)=>{let n=s.querySelector(`#mngbd`);if(!n)return;let r=(e.profile.cell??2)**2,i={};for(let e of Op)e.crop&&!e.blocked&&(i[e.crop.id]=(i[e.crop.id]??0)+1);let a=Object.entries(S).map(([e,t])=>`<optgroup label="${t}">${Object.entries(q).filter(([,t])=>t.cat===e).map(([e,t])=>`<option value="${e}">${t.icon} ${Y(t.name)}</option>`).join(``)}</optgroup>`).join(``),o=Object.entries(J).map(([e,t])=>`<option value="${e}">${t.icon} ${Y(t.name)}</option>`).join(``),c=Object.entries(oh).map(([e,t])=>`<option value="${e}">${t.icon} ${Y(t.name)}</option>`).join(``),l=y_(e),u=[...e.ledger??[]].reverse().slice(0,15),d=Object.entries(e.inventory).filter(([,e])=>e>.5);n.innerHTML=`${t?`<div class="al" style="border-color:#ffa726">${Y(t)}</div>`:``}
      <p>أدخل بيانات مزرعتك هنا بالنماذج؛ يضع البرنامج كل شيء في موضع حر داخل حدود أرضك. (مساحة كل مربع ≈ ${r.toFixed(0)} م²). المشهد ثلاثي الأبعاد لمعاينتها وتعديلها بالرسم.</p>
      <h3>⚡ أمر سريع (اكتب أو انطق)</h3>
      <div class="row"><input id="qCmd" placeholder="مثال: صرفت 50 دولار على علف · بعت تمر بـ 300 · جمعت 12 لتر حليب · ذكرني غداً أسقي النخيل" style="flex:1;min-width:260px"><button data-act="q-run">نفّذ</button><button data-act="q-mic">🎤</button></div>
      <h3>🌱 إضافة محصول أو أشجار</h3>
      <div class="row"><select id="mCrop">${a}</select><label>المساحة م² <input id="mCropA" type="number" min="1" value="${Math.round(r*20)}" style="width:90px"></label><button data-act="m-crop">زراعة</button></div>
      ${Object.keys(i).length?g([`المحصول`,`المساحة م²`,``],Object.entries(i).map(([e,t])=>[`${q[e].icon} ${Y(q[e].name)}`,Math.round(t*r).toLocaleString(`en`),`<button data-act="m-cropdel" data-id="${e}">حذف الكل</button>`])):`<p>لا محاصيل بعد.</p>`}
      <h3>🐄 إضافة حيوانات / نحل / طيور</h3>
      <div class="row"><select id="mSp">${o}</select><select id="mPur"></select><label>العدد <input id="mCnt" type="number" min="1" value="20" style="width:80px"></label><button data-act="m-herd">إضافة</button></div>
      ${jm.length?g([`القطيع`,`الغرض`,`العدد/السعة`,``],jm.map((e,t)=>[`${J[e.sp].icon} ${Y(J[e.sp].name)}`,hm[e.purpose]??e.purpose,`${e.n}/${e.cap}`,`<button data-act="m-pensell" data-i="${t}">بيع</button> <button data-act="m-pendel" data-i="${t}">حذف</button>`])):`<p>لا حظائر بعد.</p>`}
      <h3>🐟 إضافة حوض سمكي</h3>
      <div class="row"><select id="mFish">${c}</select><label>المساحة م² <input id="mPondA" type="number" min="1" value="${Math.round(r*9)}" style="width:90px"></label><button data-act="m-pond">إضافة حوض</button></div>
      ${Eh.length?g([`الوحدة`,`العدد`,``],Eh.map((e,t)=>[`${oh[e.sp].icon} ${Y(oh[e.sp].name)} (${e.kind===`cage`?`قفص`:`حوض`})`,Math.round(e.n).toLocaleString(`en`),`<button data-act="m-unitdel" data-i="${t}">حذف</button>`])):`<p>لا أحواض بعد.</p>`}
      <h3>🧾 السجل المالي (الفعلي)</h3>
      <div class="grid">${h(`إيرادات`,C(l.sale))}${h(`مصاريف`,C(l.expense))}${h(`الصافي الفعلي`,`<span style="color:${l.net>=0?`#6ee7b7`:`#ef5350`}">${C(l.net)}</span>`)}</div>
      <div class="row"><select id="lType"><option value="expense">مصروف</option><option value="sale">إيراد / بيع</option></select><input id="lCat" placeholder="البند (علف، عمالة، بيع تمر…)"><input id="lAmt" type="number" min="0" step="any" placeholder="المبلغ $" style="width:100px"><input id="lNote" placeholder="ملاحظة"><button data-act="m-led">تسجيل</button></div>
      <div class="row"><button data-act="m-sellinv" ${d.length?``:`disabled`}>💰 بيع المخزون (${d.length} صنف) وتسجيله</button></div>
      ${u.length?g([`التاريخ`,`النوع`,`البند`,`المبلغ`,`ملاحظة`],u.map(e=>[new Date(e.d).toLocaleDateString(`ar-IQ`),e.type===`sale`?`🟢 إيراد`:`🔴 مصروف`,Y(e.cat),C(e.amount),Y(e.note)])):`<p>لا قيود بعد.</p>`}`;let f=n.querySelector(`#mSp`),p=n.querySelector(`#mPur`),m=()=>{p.innerHTML=gm(f.value).map(e=>`<option value="${e}">${hm[e]}</option>`).join(``)};f.onchange=m,m()},T=t=>{let n=t();a&&e.profile.id&&$v(e.profile.id,e.profile.name,a()),p=``,he(),setTimeout(()=>w(typeof n==`string`?n:``),30)},E=`tasks`,D=null,O=()=>e.records??={},k=e=>O().workers?.find(t=>t.id===e)?.name??e??``,A=()=>[`المزرعة كلها`,...jm.map(e=>`${J[e.sp].icon} ${J[e.sp].name}`),...Eh.map(e=>`${oh[e.sp].icon} ${oh[e.sp].name}`)],ee=(e,t)=>{let n=`rf_${e.k}`,r=t??(e.today?D_():``);return e.type===`select`?`<select id="${n}">${e.opts.map(e=>`<option ${e===r?`selected`:``}>${Y(e)}</option>`).join(``)}</select>`:e.type===`dyn:workers`?`<select id="${n}">${(O().workers??[]).map(e=>`<option value="${e.id}" ${e.id===r?`selected`:``}>${Y(e.name)}</option>`).join(``)||`<option value="">(سجّل عاملاً أولاً)</option>`}</select>`:e.type===`dyn:targets`?`<select id="${n}">${A().map(e=>`<option ${e===r?`selected`:``}>${Y(e)}</option>`).join(``)}</select>`:`<input id="${n}" type="${e.type===`number`?`number`:e.type===`date`?`date`:`text`}" ${e.type===`number`?`min="0" step="any"`:``} value="${Y(r)}" placeholder="${Y(e.label)}">`},te=(e,t)=>e.type===`dyn:workers`?Y(k(t[e.k])):e.type===`number`&&t[e.k]!==null&&t[e.k]!==``?Number(t[e.k]).toLocaleString(`en`):Y(t[e.k]??``),ne=(e=``)=>{let t=s.querySelector(`#recbd`);if(!t)return;let n=C_[E],r=O()[E]??[],i=D?r.find(e=>e.id===D):null,a=Date.now(),o=[...r].reverse().slice(0,60),c=``;if(E===`attendance`||E===`workers`){let e=I_(O(),D_().slice(0,7));c=`<h3>💵 رواتب هذا الشهر (من الحضور)</h3>${e.rows.length?g([`العامل`,`أيام`,`المستحق`],e.rows.map(e=>[Y(e.worker),e.days,`$`+Math.round(e.pay).toLocaleString(`en`)]))+`<b>المجموع: $${Math.round(e.total).toLocaleString(`en`)}</b>`:`<p>سجّل الحضور لتظهر الرواتب.</p>`}`}if(E===`health`){let e=k_(O(),a);c=e.length?`<h3>⛔ فترات السحب السارية</h3>${g([`الهدف`,`العلاج`,`حتى`,`متبقٍ`],e.map(e=>[Y(e.target),Y(e.name),e.until,e.days+` يوم`]))}`:``}if(E===`production`){let e=R_(O());c=Object.keys(e).length?`<h3>إجماليات الإنتاج المسجّل</h3><div class="grid">${Object.entries(e).map(([e,t])=>h(e,Math.round(t*10)/10)).join(``)}</div>`:``}t.innerHTML=`${e?`<div class="al" style="border-color:#ffa726">${Y(e)}</div>`:``}
      <div class="tabs" style="margin-bottom:10px">${w_.map(e=>`<button data-recmod="${e}" class="${e===E?`on`:``}">${C_[e].icon} ${C_[e].title}</button>`).join(``)}</div>
      <small>${Y(z_(E,O(),a))}</small>
      <h3>${i?`✏️ تعديل قيد`:`➕ قيد جديد`} — ${C_[E].title}</h3>
      <div class="row" id="recForm">${n.fields.map(e=>`<label style="min-width:130px">${Y(e.label)}${e.req?` *`:``}<br>${ee(e,i?.[e.k])}</label>`).join(``)}</div>
      <div class="row"><button data-act="rec-save" class="on">${i?`حفظ التعديل`:`إضافة`}</button>${i?`<button data-act="rec-cancel">إلغاء</button>`:``}</div>${c}
      <h3>القيود (${r.length})</h3>${o.length?g([...n.fields.filter(e=>e.k!==`note`).map(e=>e.label),``],o.map(e=>[...n.fields.filter(e=>e.k!==`note`).map(t=>te(t,e)),`${E===`tasks`?`<button data-act="rec-done" data-id="${e.id}">${e.status===`منجزة`?`↩️`:`✔️`}</button> `:``}<button data-act="rec-edit" data-id="${e.id}">✏️</button> <button data-act="rec-del" data-id="${e.id}">🗑️</button>`])):`<p>لا قيود بعد.</p>`}`},j=t=>{e.profile.id&&$v(e.profile.id,e.profile.name,a()),p=``,he(),setTimeout(()=>ne(t),30)},re=async(t=!1)=>{let n=s.querySelector(`#wxbd`);if(!n)return;let r=e.profile;if(!mv(r.climate))n.innerHTML=`<p>اختر مناخ محافظة عراقية في إعدادات المزرعة لعرض التوقعات.</p>`;else{n.innerHTML=`<p>⏳ جاري جلب التوقعات…</p>`;try{let e=await gv(r.climate,t),i={};for(let e of Op)e.crop&&!e.blocked&&(i[e.crop.id]=(i[e.crop.id]??0)+1);let a=yv(e.days,Object.keys(i)),o=bv(e.days,i,(r.cell??2)**2),s=e=>e.rain>=5?`🌧️`:e.tmax>=44?`🔥`:e.tmax<=12?`🥶`:`☀️`;n.innerHTML=`<p>توقعات 7 أيام لـ ${Y(Cd[r.climate]?.name??``)} ${e.stale?`<b style="color:#ffa726">(نسخة قديمة: لا اتصال)</b>`:``} · المصدر Open-Meteo (يُرسل خط العرض والطول فقط) <button data-act="wx-refresh">🔄 تحديث</button></p>
        ${a.length?a.map(e=>`<div class="al" style="border-color:#ffa726">⚠️ ${Y(e)}</div>`).join(``):`<div class="al" style="border-color:#6ee7b7">✅ لا تحذيرات جوية لمحاصيلك هذا الأسبوع.</div>`}
        ${g([`اليوم`,`الجو`,`عظمى/صغرى`,`مطر مم`,`ET0 مم`,`ري مقترح م³`,``],e.days.map((e,t)=>[e.date,s(e),`${e.tmax.toFixed(0)}° / ${e.tmin.toFixed(0)}°`,e.rain.toFixed(1),e.et0.toFixed(1),Object.keys(i).length?o.perDay[t].m3.toFixed(1):`—`,o.perDay[t].skip?`⏸️ أجّل الري`:``]))}
        ${o.perCrop.length?`<h3>💧 ري الأسبوع لكل محصول</h3>${g([`المحصول`,`المساحة م²`,`Kc`,`م³ للأسبوع`],o.perCrop.map(e=>[Y(e.name),Math.round(e.area).toLocaleString(`en`),e.kc,e.week.toFixed(1)]))}<b>المجموع: ${o.total.toFixed(1)} م³/أسبوع</b><br><small>ET0 × Kc ÷ كفاءة ري 80% − المطر الفعّال. تقريبي: عدّل حسب نوع تربتك ونظام ريك، وقِس رطوبة التربة بمستشعر.</small>`:`<p>ازرع محاصيل لتظهر خطة الري.</p>`}`}catch(e){n.innerHTML=`<div class="al" style="border-color:#ef5350">${Y(e.message)}</div><button data-act="wx-refresh">🔄 إعادة المحاولة</button>`}}},M=`farm3d-scenarios`,ie=()=>{try{return JSON.parse(localStorage.getItem(M)??`[]`)}catch{return[]}},N=e=>(e<0?`-`:``)+`$`+Math.abs(Math.round(e)).toLocaleString(`en`),ae={cereal:`حبوب (كغ)`,veg:`خضار (كغ)`,forage:`علف أخضر (كغ)`,fruit:`فاكهة (كغ)`,dates:`تمور (كغ)`,wood:`خشب/نبق (كغ)`,beef:`لحم بقر (كغ)`,mutton:`لحم غنم (كغ)`,goat:`لحم ماعز (كغ)`,camel:`لحم إبل (كغ)`,poultry:`لحم دواجن (كغ)`,rabbit:`لحم أرانب (كغ)`,milk:`حليب أبقار (لتر)`,milkSmall:`حليب غنم/ماعز (لتر)`,eggs:`بيضة`,honey:`عسل (كغ)`,fish:`سمك (كغ)`};function oe(){let t={};Qg(e.profile,t);let n={};for(let e of Op)e.crop&&!e.blocked&&(n[e.crop.id]=(n[e.crop.id]??0)+1);return{est:t,r:u_({A:(e.profile.cell??2)**2,crops:n,pens:jm.map(e=>({sp:e.sp,purpose:e.purpose,cap:e.cap})),units:Eh.map(e=>({sp:e.sp,cap:e.cap})),capex:t.capex,kw:t.kw,laborMin:L_(e.records??{})||void 0})}}let se=()=>{let{r:t}=oe(),n=t.paybackMonths?`${(t.paybackMonths/12).toFixed(1)} سنة (${t.paybackMonths} شهراً، مع مهلة الإثمار)`:`لا يتحقق خلال 5 سنوات`;Math.max(1,...t.cash.map(Math.abs));let r=0,i=t.cash.filter((e,t)=>t%6==0).map((e,t,n)=>(r+=e,r));return`<div class="grid">${h(`إيراد سنوي`,N(t.rev),`حالة مستقرة`)}${h(`مصاريف سنوية`,N(t.opex),`علف/مدخلات + عمالة ${N(t.labor)} + طاقة ${N(t.energy)} + صيانة ${N(t.upkeep)}`)}${h(`صافي سنوي`,`<span style="color:${t.net>=0?`#6ee7b7`:`#ef5350`}">${N(t.net)}</span>`,`عائد ${(t.roi*100).toFixed(0)}% سنوياً`)}${h(`رأس المال`,N(t.capex),`تجهيزات + قطيع/زريعة`)}${h(`الاسترداد`,n,t.steadyPaybackYears?`حالة مستقرة: ${t.steadyPaybackYears.toFixed(1)} سنة`:``)}</div>
      ${g([`البند`,`إيراد سنوي`,`مصاريف`,`صافٍ`,`يبدأ بعد`],t.lines.map(e=>[Y(e.name),N(e.rev),N(e.opex),N(e.rev-e.opex),e.startMonth+` شهراً`]))}
      ${(()=>{let{est:n}=oe(),r={};for(let e of Op)e.crop&&!e.blocked&&(r[e.crop.id]=(r[e.crop.id]??0)+1);let i=ev({A:(e.profile.cell??2)**2,crops:r,pens:jm.map(e=>({sp:e.sp,cap:e.cap})),kw:n.kw,pv:n.pv,waterM3Day:n.waterTot,revenue:t.rev}),a=e=>Math.round(e).toLocaleString(`en`);return`<h3>🌍 الاستدامة (استرشادية)</h3><div class="grid">${h(`درجة الاستدامة`,`<span style="color:${i.score>=70?`#6ee7b7`:i.score>=45?`#ffa726`:`#ef5350`}">${i.score}/100</span>`)}${h(`إنتاجية المياه`,`$`+i.waterProd.toFixed(2)+`/م³`)}${h(`تغطية الشمس`,Math.round(i.coverage*100)+`%`,a(i.solar)+` من `+a(i.kwh)+` kWh`)}${h(`صافي الكربون`,a(i.net)+` كغ CO₂e/سنة`,`ماشية `+a(i.livestock)+` + شبكة `+a(i.gridCo2)+` − أشجار `+a(i.seq))}</div><ul>${i.tips.map(e=>`<li>${e}</li>`).join(``)}</ul>`})()}
      <h3>التراكمي كل 6 أشهر (5 سنوات)</h3><div style="display:flex;gap:4px;align-items:flex-end;height:90px">${i.map(e=>`<div title="${N(e)}" style="flex:1;background:${e>=0?`#6ee7b7`:`#ef5350`};height:${Math.max(3,Math.abs(e)/(Math.max(...i.map(Math.abs))||1)*80)}px"></div>`).join(``)}</div>`},ce=()=>{let e=s.querySelector(`#ecobd`);if(!e)return;let t=n_(),n=ie();e.innerHTML=`<p>تقدير أولي لإيرادات ومصاريف المشروع من مزرعتك الحالية. الغلال والأسعار افتراضية، <b>عدّل الأسعار بسعر سوقك</b> فتتحدث الأرقام.</p><div id="ecoLive">${se()}</div>
      <h3>🏷️ الأسعار (دولار)</h3><div class="row" id="priceBox">${Object.keys(e_).map(e=>`<label style="min-width:150px">${ae[e]} <input data-price="${e}" type="number" step="any" min="0" value="${t[e]}" style="width:80px"></label>`).join(``)}<button data-act="eco-reset">استعادة الافتراضي</button></div>
      <h3>🧪 مقارنة سيناريوهات</h3><div class="row"><input id="scName" placeholder="اسم السيناريو (مثلاً: بدون أسماك)"><button data-act="eco-save">حفظ الحالي كسيناريو</button></div>
      ${n.length?g([`السيناريو`,`رأس المال`,`صافي سنوي`,`الاسترداد`,``],n.map((e,t)=>[Y(e.name),N(e.capex),N(e.net),e.pb?(e.pb/12).toFixed(1)+` سنة`:`—`,`<button data-act="eco-del" data-i="${t}">حذف</button>`])):`<p>احفظ سيناريو، ثم غيّر المزرعة واحفظ آخر لتقارن.</p>`}`};s.addEventListener(`input`,e=>{let t=e.target.dataset?.price;if(t){r_(t,Number(e.target.value));let n=s.querySelector(`#ecoLive`);n&&(n.innerHTML=se())}});let le=()=>{let e=s.querySelector(`#ecoLive`);e&&!s.querySelector(`#priceBox input:focus`)&&(e.innerHTML=se())},P=()=>{let e=[...jm.map(e=>[e.sp,e.w,J[e.sp].wm,e.fcr,`${J[e.sp].icon} ${J[e.sp].name} (حظيرة)`]),...Eh.map(e=>[e.sp,e.w,oh[e.sp].wm,e.fcr,`${oh[e.sp].icon} ${oh[e.sp].name} (${e.kind===`cage`?`قفص`:`حوض`})`])];if(!e.length)return`<p>لا حظائر ولا أحواض بعد. أنشئ مشروعاً مع المخطط التلقائي أو أضف حظيرة.</p>`;let t=!1;return g([`الوحدة`,`FCR الحالي`,`المرحلة`,`المعيار الممتاز`,`التقييم`,`البروتين المستهدف`],e.map(([e,n,r,i,a])=>{let o=W_(e,n,r),s=G_(o,i);return s&&(s[0]===`ضعيف`||s[0]===`مقبول`)&&(t=!0),[a,i==null?`— (يحتاج وقتاً)`:i.toFixed(2),o?Y(o.stage):`لا معيار`,o?`${o.exc[0]}–${o.exc[1]}`:`—`,s?`<b style="color:${s[1]}">${s[0]}</b>`:`—`,o?o.cp+`% · `+o.me+` kcal`:`—`]}))+(t?`<h3>🩺 تشخيص ارتفاع FCR (الأسباب الأشيع)</h3>`+H_.map(e=>`<div class="al" style="border-color:${e.sev===`high`||e.sev===`critical`?`#ef5350`:`#ffa726`}"><b>${Y(e.title)}</b> <small>(احتمال ${e.p}%)</small><br>فحص: ${Y(e.chk.join(` · `))}<br>إجراء: ${Y(e.fix.join(` · `))}</div>`).join(``):``)},ue=e=>Object.entries(K_).filter(([,t])=>t[3]===e).map(([e,t])=>`<option value="${e}">${t[0]} (${t[1]}%)</option>`).join(``),de=()=>{let e=e=>s.querySelector(e),t=e(`#rOut`);if(!t)return;let n=q_(Number(e(`#rCp`).value),e(`#rEn`).value,e(`#rPr`).value);t.innerHTML=n?`لكل 100 كغ علف: <b>${n.energy.toFixed(1)} كغ</b> ${K_[e(`#rEn`).value][0]} + <b>${n.protein.toFixed(1)} كغ</b> ${K_[e(`#rPr`).value][0]}<br><small>طاقة تقريبية ${Math.round(n.me)} kcal/كغ. أضف معادن وفيتامينات حسب النوع والمرحلة، وراجع مختص تغذية.</small>`:`<span style="color:#ffa726">البروتين المستهدف خارج نطاق المكوّنين المختارين</span>`};s.addEventListener(`input`,e=>{e.target.closest?.(`#rationBox`)&&de()});let fe=()=>{let e=s.querySelector(`#labbd`);if(!e)return;let t=jm[0]?W_(jm[0].sp,jm[0].w,J[jm[0].sp].wm):null;e.innerHTML=`<p>معايير تحويل العلف (FCR = كغ علف لكل كغ زيادة وزن): كلما قلّ الرقم كان أفضل. المراحل والأرقام من قاعدة شهومي وهي تقريبية.</p>
      <div id="labLive">${P()}</div>
      <h3>🧮 حاسبة تركيب علف (مربع بيرسون)</h3><div id="rationBox" class="row">
        <label>بروتين مستهدف % <input id="rCp" type="number" min="5" max="60" step="0.5" value="${t?.cp??16}" style="width:80px"></label>
        <label>مصدر الطاقة <select id="rEn">${ue(`energy`)}</select></label>
        <label>مصدر البروتين <select id="rPr">${ue(`protein`)}</select></label></div>
      <div id="rOut" class="al" style="border-color:#6ee7b7"></div>
      <h3>📚 معايير الأنواع</h3>${g([`النوع`,`المرحلة`,`ممتاز`,`جيد`,`مقبول`,`ضعيف من`,`نمو يومي غ`,`بروتين %`],[...new Set([...jm.map(e=>e.sp),...Eh.map(e=>e.sp)])].flatMap(e=>(U_(e)??[]).map(t=>[J_(e),Y(t.stage),`${t.exc[0]}–${t.exc[1]}`,`${t.good[0]}–${t.good[1]}`,`${t.acc[0]}–${t.acc[1]}`,t.poor,t.adg,t.cp])))}`,de()},pe=()=>{let e=s.querySelector(`#labLive`);e&&(e.innerHTML=P())},me=null;function he(){if(!d)return;let e=me=_(),t=`<div class="hd"><b>🌾 مزرعتي الذكية</b><div class="tabs">${ty.map(([e,t])=>`<button data-tab="${e}" class="${e===u?`on`:``}">${t}</button>`).join(``)}</div>${c?`<button data-act="install">📲 تثبيت التطبيق</button>`:``}<button data-act="farms">🏡 المشاريع</button><button data-act="3d">🎮 المشهد 3D</button></div>`;if(u===`wx`){p!==`wx`&&(s.innerHTML=t+`<div class="bd" id="wxbd"></div>`,p=`wx`,re());return}if(u===`rec`){p!==`rec`&&(s.innerHTML=t+`<div class="bd" id="recbd"></div>`,p=`rec`,ne());return}if(u===`mng`){p!==`mng`&&(s.innerHTML=t+`<div class="bd" id="mngbd"></div>`,p=`mng`,w());return}if(u===`eco`){p===`eco`?le():(s.innerHTML=t+`<div class="bd" id="ecobd"></div>`,p=`eco`,ce());return}if(u===`fcr`){p===`fcr`?pe():(s.innerHTML=t+`<div class="bd" id="labbd"></div>`,p=`fcr`,fe());return}if(u===`dev`){p===`dev`?x():(s.innerHTML=t+`<div class="bd" id="devbd"></div>`,p=`dev`,b());return}if(u===`rep`){p!==`rep`&&(s.innerHTML=t+`<div class="bd"><div class="row"><button data-act="xlsx">📊 تصدير Excel (اقتصاد، جدول، أجهزة، توزيع)</button></div><iframe></iframe></div>`,s.querySelector(`iframe`).srcdoc=e.rep,p=`rep`);return}p=``;let n=s.scrollTop;s.innerHTML=t+`<div class="bd">${e[u]}</div>`,s.scrollTop=n}s.addEventListener(`click`,o=>{let l=o.target.closest(`[data-tab],[data-act],[data-focus],[data-adv],[data-recmod]`);if(!l)return;if(l.dataset.recmod)return E=l.dataset.recmod,D=null,ne();if(l.dataset.adv!==void 0){let e=me?.__adv.items[+l.dataset.adv];if(e){let[t,n]=e.tab.split(`:`);n&&(E=n),u=t,p=``,he()}return}if(l.dataset.tab)return u=l.dataset.tab,p=``,he();if(l.dataset.focus){let e=me?.__al[+l.dataset.focus];e?.pos&&(ge.show(!1),n(e.pos));return}let d=l.dataset.act;if(d===`3d`)ge.show(!1),l.dataset.panel&&r(l.dataset.panel);else if(d===`farms`)ge.show(!1),document.getElementById(`modal`)&&ge.farms();else if(d===`xlsx`){let{est:t,r:n}=oe(),r=e.profile.cell??2,i=me?.__plan??[],a=[{name:`الاقتصاد`,rows:[[`البند`,`إيراد سنوي $`,`مصاريف $`,`صافٍ $`,`يبدأ بعد (شهر)`],...n.lines.map(e=>[e.name,Math.round(e.rev),Math.round(e.opex),Math.round(e.rev-e.opex),e.startMonth]),[],[`إيراد`,Math.round(n.rev)],[`مصاريف`,Math.round(n.opex)],[`صافٍ`,Math.round(n.net)],[`رأس المال`,Math.round(n.capex)],[`الاسترداد (شهر)`,n.paybackMonths??`لا يتحقق`]]},{name:`الجدول`,rows:[[`الشهر`,`السنة`,`النوع`,`المهمة`],...i.flatMap(e=>e.events.map(t=>[e.month,e.year,t.kind,t.text]))]},{name:`الأجهزة`,rows:[[`المعرّف`,`النوع`,`x (م)`,`y (م)`,`القراءة`],...mg.map(e=>[e.id,pg[e.type].name,+((e.tile.i+.5)*r).toFixed(1),+((e.tile.j+.5)*r).toFixed(1),+e.value.toFixed(2)]),...rm.map(e=>[`sprinkler@${e.tile.i},${e.tile.j}`,`رشاش`,+((e.tile.i+.5)*r).toFixed(1),+((e.tile.j+.5)*r).toFixed(1),``])]},{name:`التوزيع`,rows:[[`الاستعمال`,`مربعات`,`م²`],...Object.entries(Op.reduce((e,t)=>{let n=t.blocked?null:t.road||t.tank?`طرق وخزانات`:t.pen?`حظائر`:t.hatch?`مفاقس`:t.pond?`أحواض`:t.soil?`محروث/محاصيل`:`فراغ`;return n&&(e[n]=(e[n]??0)+1),e},{})).map(([e,t])=>[e,t,Math.round(t*r*r)])]}];for(let t of w_){let n=e.records?.[t]??[];n.length&&a.push({name:C_[t].title,rows:[C_[t].fields.map(e=>e.label),...n.map(e=>C_[t].fields.map(t=>t.type===`dyn:workers`?k(e[t.k]):e[t.k]??``))]})}(e.ledger??[]).length&&a.push({name:`السجل المالي`,rows:[[`التاريخ`,`النوع`,`البند`,`المبلغ $`,`ملاحظة`],...e.ledger.map(e=>[new Date(e.d).toISOString().slice(0,10),e.type===`sale`?`إيراد`:`مصروف`,e.cat,e.amount,e.note])]});let o=URL.createObjectURL(new Blob([Lv(a)],{type:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`}));Object.assign(document.createElement(`a`),{href:o,download:(e.profile.name||`farm`)+`.xlsx`}).click(),setTimeout(()=>URL.revokeObjectURL(o),5e3)}else if(d===`ics`){let t=URL.createObjectURL(new Blob([kv(me.__plan,e.profile.name)],{type:`text/calendar`}));Object.assign(document.createElement(`a`),{href:t,download:`farm-schedule.ics`}).click(),setTimeout(()=>URL.revokeObjectURL(t),5e3)}else if(d===`notify`)typeof Notification>`u`?alert(`المتصفح لا يدعم الإشعارات`):Notification.requestPermission().then(e=>alert(e===`granted`?`فُعّلت: ستصلك إشعارات عند وجود حالات حرجة`:`لم تُمنح الصلاحية`));else if(d===`rec-save`){let e={};for(let t of C_[E].fields)e[t.k]=s.querySelector(`#rf_`+t.k)?.value??``;let t=O_(E,e,D??void 0);if(t.error)return ne(t.error);let n=O()[E]??=[],r=D?n.findIndex(e=>e.id===D):-1;r>=0?n[r]=t.rec:n.push(t.rec),D=null,j(`تم الحفظ`)}else if(d===`rec-edit`)D=l.dataset.id,ne();else if(d===`rec-cancel`)D=null,ne();else if(d===`rec-del`){let e=O()[E]??[];O()[E]=e.filter(e=>e.id!==l.dataset.id),D=null,j(`حُذف القيد`)}else if(d===`rec-done`){let e=(O()[E]??[]).find(e=>e.id===l.dataset.id);e&&(e.status=e.status===`منجزة`?`مفتوحة`:`منجزة`),j(``)}else if(d===`cal-task`){let e=me.__plan[+l.dataset.m].events[+l.dataset.e],t=me.__plan[+l.dataset.m],n=O_(`tasks`,{title:e.text,due:`${t.year}-${String(t.month).padStart(2,`0`)}-01`,priority:e.kind===`vet`?`عالية`:`متوسطة`,status:`مفتوحة`});n.rec&&((O().tasks??=[]).push(n.rec),alert(`أُضيفت إلى المهام`))}else if(d===`install`)c?.prompt(),c=null,p=``,he();else if(d===`tg-test`)Gv(`/notify/test`,{method:`POST`,body:{}}).then(e=>alert(e.configured?e.sent?`أُرسل تنبيه اختبار إلى Telegram`:`فشل الإرسال: تحقق من الرمز ومعرّف المحادثة`:`Telegram غير مُعدّ: ضع TELEGRAM_BOT_TOKEN وTELEGRAM_CHAT_ID في server/.env`)).catch(e=>alert(e.message));else if(d===`wx-refresh`)re(!0);else if(d===`q-mic`)uv().then(e=>{s.querySelector(`#qCmd`).value=e}).catch(e=>alert(e.message));else if(d===`q-run`){let t=cv(s.querySelector(`#qCmd`).value);if(!t)return w(`لم أفهم الأمر. جرّب: «صرفت 50 دولار على علف» أو «جمعت 12 لتر حليب» أو «ذكرني غداً أن أسقي».`);if(!confirm(`تنفيذ: `+lv(t)+`؟`))return;T(()=>{if(t.kind===`ledger`)v_(e,{type:t.type,cat:t.cat,amount:t.amount,note:`أمر سريع`});else if(t.kind===`task`){let n=O_(`tasks`,{title:t.title,due:t.due,priority:`متوسطة`,status:`مفتوحة`});n.rec&&((e.records??={}).tasks=[...e.records.tasks??[],n.rec])}else{let n=O_(`production`,{date:D_(),item:t.item,qty:t.qty,unit:t.unit,source:`المزرعة كلها`});n.rec&&((e.records??={}).production=[...e.records.production??[],n.rec])}return`سُجّل: `+lv(t)})}else if(d===`m-crop`){let n=(e.profile.cell??2)**2;T(()=>{let e=m_(t,s.querySelector(`#mCrop`).value,Number(s.querySelector(`#mCropA`).value),n);return e===!0?`تمت الزراعة`:e})}else if(d===`m-cropdel`)T(()=>`حُذف ${h_(t,l.dataset.id)} مربعاً`);else if(d===`m-herd`)T(()=>{let e=g_(t,s.querySelector(`#mSp`).value,s.querySelector(`#mPur`).value,Number(s.querySelector(`#mCnt`).value));return e===!0?`أُضيف القطيع`:e});else if(d===`m-pensell`)T(()=>{let n=jm[+l.dataset.i];if(!n)return``;let r=eh(t,n,e.inventory);return typeof r==`string`?r:`بيعت الحظيرة (النتيجة في المخزون)`});else if(d===`m-pendel`)T(()=>{let e=jm[+l.dataset.i];return e&&Zm(t,e),`أُزيلت الحظيرة`});else if(d===`m-pond`){let n=(e.profile.cell??2)**2;T(()=>{let e=__(t,s.querySelector(`#mFish`).value,Number(s.querySelector(`#mPondA`).value),n);return e===!0?`أُضيف الحوض`:e})}else if(d===`m-unitdel`)T(()=>{let e=Eh[+l.dataset.i];return e&&Bh(t,e),`أُزيل الحوض`});else if(d===`m-led`)T(()=>{let t=e=>s.querySelector(e).value;return v_(e,{type:t(`#lType`),cat:t(`#lCat`),amount:t(`#lAmt`),note:t(`#lNote`)})?`سُجّل القيد`:`أدخل مبلغاً أكبر من صفر`});else if(d===`m-sellinv`)T(()=>`بيع المخزون بـ ${C(x_(e))}`);else if(d===`eco-reset`)i_(),p=``,he();else if(d===`eco-save`){let{r:e}=oe(),t=s.querySelector(`#scName`).value.trim()||`سيناريو `+(ie().length+1);try{localStorage.setItem(M,JSON.stringify([...ie(),{name:t,capex:e.capex,net:e.net,pb:e.paybackMonths}]))}catch{}p=``,he()}else if(d===`eco-del`){try{localStorage.setItem(M,JSON.stringify(ie().filter((e,t)=>t!==+l.dataset.i)))}catch{}p=``,he()}else if(d===`bk-connect`)Yv(s.querySelector(`#bkUrl`).value,s.querySelector(`#bkTok`).value).then(e=>{p=``,he(),e||alert(`تعذّر الاتصال: تأكد من تشغيل الخادم ومن الرمز`)});else if(d===`bk-login`||d===`bk-signup`){let e=e=>s.querySelector(e).value;Xv(e(`#bkUrl`),e(`#bkUser`),e(`#bkPass`),d===`bk-signup`).then(e=>{p=``,he(),e||alert(`تعذّر الاتصال`)}).catch(e=>alert(e.message))}else if(d===`bk-off`)Zv(),p=``,he();else if(d===`bk-push`)$v(e.profile.id,e.profile.name,a());else if(d===`bk-newdev`){let t=s.querySelector(`#bkName`).value.trim()||`جهاز`;Gv(`/farms/`+e.profile.id,{method:`PUT`,body:{name:e.profile.name,data:a()}}).then(()=>Gv(`/devices`,{method:`POST`,body:{name:t,farm:e.profile.id}}).then(e=>{s.querySelector(`#bkNew`).innerHTML=`<div class="al" style="border-color:#ffa726">معرّف الجهاز: <code>${e.id}</code><br>المفتاح: <code>${e.key}</code><br><small>احفظه الآن، لا يظهر مرة أخرى.</small></div>`})).catch(e=>alert(e.message))}else if(d===`bk-rule-add`){let t=e=>s.querySelector(e).value;if(!t(`#rSensor`)||!t(`#rTarget`)||t(`#rVal`)===``)return alert(`اختر مستشعراً وهدفاً وقيمة`);Gv(`/rules`,{method:`POST`,body:{farm:e.profile.id,sensor:t(`#rSensor`),op:t(`#rOp`),value:Number(t(`#rVal`)),margin:Number(t(`#rMargin`)),target:t(`#rTarget`),max_min:Number(t(`#rMax`))}}).then(()=>{p=``,he()}).catch(e=>alert(e.message))}else if(d===`bk-rule-toggle`)Gv(`/rules/`+l.dataset.id,{method:`PUT`,body:{farm:e.profile.id,enabled:l.dataset.on===`1`}}).then(()=>{p=``,he()});else if(d===`bk-rule-del`)Gv(`/rules/${l.dataset.id}?farm=${encodeURIComponent(e.profile.id)}`,{method:`DELETE`}).then(()=>{p=``,he()});else if(d===`bk-deldev`)Gv(`/devices/`+l.dataset.id,{method:`DELETE`}).then(()=>{p=``,he()});else if(d===`bk-load`)Gv(`/farms/`+l.dataset.id).then(e=>{ge.show(!1),i(JSON.stringify(e.data))});else if(d===`water`){for(let e of Op)e.soil&&(e.moisture=Math.min(1,e.moisture+.5));he()}else if(d===`harvest`){for(let n of Op)n.crop&&tm(n)&&em(t,n,e.inventory);he()}});let ge={farms:()=>{},show(e){d=e,s.style.display=e?`block`:`none`,clearInterval(f),e&&(p=``,he(),f=setInterval(he,1500)),document.body.classList.toggle(`hubOpen`,e)},toggle(){ge.show(!d)},get open(){return d}};return ge}var ay={type:`change`},oy={type:`start`},sy={type:`end`},cy=new li,ly=new Br,uy=Math.cos(70*Mt.DEG2RAD),dy=new V,fy=2*Math.PI,py={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},my=1e-6,hy=class extends Ds{constructor(n,r=null){super(n,r),this.state=py.NONE,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:e.ROTATE,MIDDLE:e.DOLLY,RIGHT:e.PAN},this.touches={ONE:t.ROTATE,TWO:t.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new Nt,this._lastTargetPosition=new V,this._quat=new Nt().setFromUnitVectors(n.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Es,this._sphericalDelta=new Es,this._scale=1,this._panOffset=new V,this._rotateStart=new B,this._rotateEnd=new B,this._rotateDelta=new B,this._panStart=new B,this._panEnd=new B,this._panDelta=new B,this._dollyStart=new B,this._dollyEnd=new B,this._dollyDelta=new B,this._dollyDirection=new V,this._mouse=new B,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=_y.bind(this),this._onPointerDown=gy.bind(this),this._onPointerUp=vy.bind(this),this._onContextMenu=Ty.bind(this),this._onMouseWheel=xy.bind(this),this._onKeyDown=Sy.bind(this),this._onTouchStart=Cy.bind(this),this._onTouchMove=wy.bind(this),this._onMouseDown=yy.bind(this),this._onMouseMove=by.bind(this),this._interceptControlDown=Ey.bind(this),this._interceptControlUp=Dy.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.state=py.NONE,this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),e.removeEventListener(`keyup`,this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction=``,this.domElement.style.cursor=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ay),this.update(),this.state=py.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;dy.copy(t).sub(this.target),dy.applyQuaternion(this._quat),this._spherical.setFromVector3(dy),this.autoRotate&&this.state===py.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=fy:n>Math.PI&&(n-=fy),r<-Math.PI?r+=fy:r>Math.PI&&(r-=fy),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(dy.setFromSpherical(this._spherical),dy.applyQuaternion(this._quatInverse),t.copy(this.target).add(dy),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=dy.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new V(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new V(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=dy.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(cy.origin.copy(this.object.position),cy.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(cy.direction))<uy?this.object.lookAt(this.target):(ly.setFromNormalAndCoplanarPoint(this.object.up,this.target),cy.intersectPlane(ly,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>my||8*(1-this._lastQuaternion.dot(this.object.quaternion))>my||this._lastTargetPosition.distanceToSquared(this.target)>my?(this.dispatchEvent(ay),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?fy/60/60*this.autoRotateSpeed:fy/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){dy.setFromMatrixColumn(t,0),dy.multiplyScalar(-e),this._panOffset.add(dy)}_panUp(e,t){this.screenSpacePanning===!0?dy.setFromMatrixColumn(t,1):(dy.setFromMatrixColumn(t,0),dy.crossVectors(this.object.up,dy)),dy.multiplyScalar(e),this._panOffset.add(dy)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;dy.copy(r).sub(this.target);let i=dy.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(fy*this._rotateDelta.x/t.clientHeight),this._rotateUp(fy*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(fy*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-fy*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(fy*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-fy*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(fy*this._rotateDelta.x/t.clientHeight),this._rotateUp(fy*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new B,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function gy(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function _y(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function vy(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(sy),this.state=py.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function yy(t){let n;switch(t.button){case 0:n=this.mouseButtons.LEFT;break;case 1:n=this.mouseButtons.MIDDLE;break;case 2:n=this.mouseButtons.RIGHT;break;default:n=-1}switch(n){case e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=py.DOLLY;break;case e.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=py.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=py.ROTATE}break;case e.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=py.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=py.PAN}break;default:this.state=py.NONE}this.state!==py.NONE&&this.dispatchEvent(oy)}function by(e){switch(this.state){case py.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case py.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case py.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function xy(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===py.NONE&&(e.preventDefault(),this.dispatchEvent(oy),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(sy))}function Sy(e){this.enabled!==!1&&this._handleKeyDown(e)}function Cy(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case t.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=py.TOUCH_ROTATE;break;case t.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=py.TOUCH_PAN;break;default:this.state=py.NONE}break;case 2:switch(this.touches.TWO){case t.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=py.TOUCH_DOLLY_PAN;break;case t.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=py.TOUCH_DOLLY_ROTATE;break;default:this.state=py.NONE}break;default:this.state=py.NONE}this.state!==py.NONE&&this.dispatchEvent(oy)}function wy(e){switch(this._trackPointer(e),this.state){case py.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case py.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case py.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case py.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=py.NONE}}function Ty(e){this.enabled!==!1&&e.preventDefault()}function Ey(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function Dy(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var Oy=new fn(0,0,0,`YXZ`),ky=new V,Ay={type:`change`},jy={type:`lock`},My={type:`unlock`},Ny=.002,Py=Math.PI/2,Fy=class extends Ds{constructor(e,t=null){super(e,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=Iy.bind(this),this._onPointerlockChange=Ly.bind(this),this._onPointerlockError=Ry.bind(this),this.domElement!==null&&this.connect(this.domElement)}connect(e){super.connect(e),this.domElement.ownerDocument.addEventListener(`mousemove`,this._onMouseMove),this.domElement.ownerDocument.addEventListener(`pointerlockchange`,this._onPointerlockChange),this.domElement.ownerDocument.addEventListener(`pointerlockerror`,this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener(`mousemove`,this._onMouseMove),this.domElement.ownerDocument.removeEventListener(`pointerlockchange`,this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener(`pointerlockerror`,this._onPointerlockError)}dispose(){this.disconnect()}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;let t=this.object;ky.setFromMatrixColumn(t.matrix,0),ky.crossVectors(t.up,ky),t.position.addScaledVector(ky,e)}moveRight(e){if(this.enabled===!1)return;let t=this.object;ky.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(ky,e)}lock(e=!1){this.domElement.requestPointerLock({unadjustedMovement:e})}unlock(){this.domElement.ownerDocument.exitPointerLock()}};function Iy(e){if(this.enabled===!1||this.isLocked===!1)return;let t=this.object;Oy.setFromQuaternion(t.quaternion),Oy.y-=e.movementX*Ny*this.pointerSpeed,Oy.x-=e.movementY*Ny*this.pointerSpeed,Oy.x=Math.max(Py-this.maxPolarAngle,Math.min(Py-this.minPolarAngle,Oy.x)),t.quaternion.setFromEuler(Oy),this.dispatchEvent(Ay)}function Ly(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(jy),this.isLocked=!0):(this.dispatchEvent(My),this.isLocked=!1)}function Ry(){console.error(`THREE.PointerLockControls: Unable to use Pointer Lock API`)}var zy={drone:`🛸 درون`,walk:`🚶 مشي`,fly:`🦅 طيران`},By=Object.keys(zy),Vy=(e,t,n)=>Math.max(t,Math.min(n,e));function Hy(n,r,i){let a=new hy(n,r);a.mouseButtons={LEFT:null,MIDDLE:e.PAN,RIGHT:e.ROTATE},a.touches={ONE:t.PAN,TWO:t.DOLLY_ROTATE},a.maxPolarAngle=Math.PI/2.1,a.minDistance=3,a.maxDistance=160,a.enableDamping=!0,a.zoomToCursor=!0,a.zoomSpeed=1.3,a.rotateSpeed=.8,n.position.set(14,15,14),a.target.set(0,0,0);let o=new Fy(n,r);o.pointerSpeed=.8;let s=new Set;addEventListener(`keydown`,e=>{/INPUT|SELECT|TEXTAREA/.test(e.target.tagName)||s.add(e.code)}),addEventListener(`keyup`,e=>s.delete(e.code)),addEventListener(`blur`,()=>s.clear());let c=matchMedia(`(pointer:coarse)`).matches,l={x:0,y:0},u=null,d=null,f={x:0,y:0},p={x:0,y:0},m=document.createElement(`div`),h=document.createElement(`div`);m.style.cssText=`position:fixed;width:110px;height:110px;margin:-55px;border-radius:50%;border:2px solid #fff6;background:#fff1;display:none;z-index:5;pointer-events:none`,h.style.cssText=`position:absolute;left:35px;top:35px;width:40px;height:40px;border-radius:50%;background:#fff8`,m.append(h),document.body.append(m);let g=()=>{u=null,l.x=l.y=0,m.style.display=`none`};if(c){r.addEventListener(`pointerdown`,e=>{e.pointerType===`touch`&&i.mode!==`drone`&&(e.clientX<innerWidth/2&&u===null?(u=e.pointerId,f={x:e.clientX,y:e.clientY},Object.assign(m.style,{display:`block`,left:f.x+`px`,top:f.y+`px`})):d===null&&(d=e.pointerId,p={x:e.clientX,y:e.clientY}))}),addEventListener(`pointermove`,e=>{if(e.pointerType===`touch`){if(e.pointerId===u){let t=Vy(e.clientX-f.x,-55,55),n=Vy(e.clientY-f.y,-55,55);l.x=t/55,l.y=n/55,h.style.transform=`translate(${t}px,${n}px)`}else e.pointerId===d&&i.mode!==`drone`&&(S.setFromQuaternion(n.quaternion),S.y-=(e.clientX-p.x)*.005,S.x=Vy(S.x-(e.clientY-p.y)*.005,-1.4,1.4),n.quaternion.setFromEuler(S),p={x:e.clientX,y:e.clientY})}});let e=e=>{e.pointerId===u&&g(),e.pointerId===d&&(d=null)};addEventListener(`pointerup`,e),addEventListener(`pointercancel`,e)}let _={x:0,y:0};r.addEventListener(`pointermove`,e=>{e.pointerType!==`mouse`||e.buttons?_.x=_.y=0:(_.x=e.clientX<14?-1:+(e.clientX>innerWidth-14),_.y=e.clientY<14?-1:+(e.clientY>innerHeight-14))}),r.addEventListener(`pointerleave`,()=>{_.x=_.y=0});let v=new V,y=new V,b=new V;function x(e){let t=e=>+!!s.has(e),r=t(`KeyW`)+t(`ArrowUp`)-t(`KeyS`)-t(`ArrowDown`)-_.y,i=t(`KeyD`)+t(`ArrowRight`)-t(`KeyA`)-t(`ArrowLeft`)+_.x,o=t(`KeyE`)-t(`KeyQ`);if(r||i){v.subVectors(a.target,n.position).setY(0).normalize(),y.set(-v.z,0,v.x);let t=n.position.distanceTo(a.target),o=(s.has(`ShiftLeft`)?2.5:1)*(4+t*.6)*e,c=(v.x*r+y.x*i)*o,l=(v.z*r+y.z*i)*o,u=Dp*2/2+40,d=Vy(a.target.x+c,-u,u)-a.target.x,f=Vy(a.target.z+l,-u,u)-a.target.z;a.target.x+=d,a.target.z+=f,n.position.x+=d,n.position.z+=f}if(o){b.subVectors(n.position,a.target);let t=o*e*1,r=Math.cos(t),i=Math.sin(t),s=b.x*r-b.z*i;b.z=b.x*i+b.z*r,b.x=s,n.position.addVectors(a.target,b)}}let S=new fn(0,0,0,`YXZ`),C=new V;function w(){try{o.lock()?.catch?.(()=>{})}catch{}}function T(e){if(e===i.mode||!zy[e])return;let t=i.mode;if(i.mode=e,a.enabled=e===`drone`,C.set(0,0,0),e===`drone`){o.unlock();let e=new V;n.getWorldDirection(e);let t=e.y<-.1?-n.position.y/e.y:10,r=n.position.x+e.x*t,i=n.position.z+e.z*t;a.target.set(r,0,i),n.position.y<6&&n.position.set(r+12,14,i+12),a.update()}else{if(t===`drone`){let t=a.target;n.position.set(t.x,e===`fly`?14:1.7,t.z+(e===`fly`?10:6)),n.lookAt(t.x,e===`fly`?0:1.4,t.z)}else e===`walk`?(n.position.y=1.7,S.setFromQuaternion(n.quaternion),S.x=0,n.quaternion.setFromEuler(S)):n.position.y=Math.max(n.position.y,10);w()}}let E=()=>T(By[(By.indexOf(i.mode)+1)%By.length]);function D(e){if(i.mode===`drone`)return u!==null&&g(),x(e),a.update();let t=o.isLocked,r=Vy((t?+!!s.has(`KeyW`)-!!s.has(`KeyS`):0)-l.y,-1,1),d=Vy((t?+!!s.has(`KeyD`)-!!s.has(`KeyA`):0)+l.x,-1,1),f=i.mode===`fly`;S.setFromQuaternion(n.quaternion);let p=(t&&f?(s.has(`KeyE`)||s.has(`Space`)?1:0)-!!s.has(`KeyQ`):0)+(f&&c?Math.sin(S.x)*r*1.25:0),m=f?s.has(`ShiftLeft`)?30:14:s.has(`ShiftLeft`)?12:6,h=S.y,_=new V((-Math.sin(h)*r+Math.cos(h)*d)*m,p*m*.8,(-Math.cos(h)*r-Math.sin(h)*d)*m);C.lerp(_,1-Math.exp(-e*8)),n.position.addScaledVector(C,e);let v=Dp*2/2+(f?25:-.5);n.position.x=Vy(n.position.x,-v,v),n.position.z=Vy(n.position.z,-v,v),n.position.y=f?Vy(n.position.y,2,90):1.7}return{touch:c,orbit:a,look:o,lock:w,setMode:T,cycle:E,update:D}}var Uy=[{id:`family`,icon:`🏡`,name:`مزرعة عائلية متكاملة`,area:5e3,opts:{crops:!0,orchard:!0,livestock:!0,poultry:!0,aqua:!1,bees:!0,aviary:!1},note:`حقول وبستان وأغنام ودواجن ومنحل`},{id:`palm`,icon:`🌴`,name:`بستان نخيل`,area:1e4,opts:{crops:!1,orchard:!0,livestock:!1,poultry:!1,aqua:!1,bees:!0,aviary:!1},note:`نخيل بتباعد صحيح مع مصد رياح ومنحل`},{id:`dairy`,icon:`🐄`,name:`مزرعة حلوب`,area:3e3,opts:{crops:!0,orchard:!1,livestock:!0,poultry:!1,aqua:!1,bees:!1,aviary:!1},note:`حظيرة حليب + أعلاف خضراء`},{id:`poultry`,icon:`🐔`,name:`مشروع دواجن ومفقس`,area:2e3,opts:{crops:!1,orchard:!1,livestock:!1,poultry:!0,aqua:!1,bees:!1,aviary:!1},note:`حظيرة دواجن ومفقس`},{id:`fish`,icon:`🐟`,name:`استزراع سمكي`,area:2500,opts:{crops:!1,orchard:!1,livestock:!1,poultry:!1,aqua:!0,bees:!1,aviary:!1},note:`أحواض أسماك بأجهزة تهوية`},{id:`veg`,icon:`🥬`,name:`خضار وأعلاف`,area:2500,opts:{crops:!0,orchard:!1,livestock:!1,poultry:!1,aqua:!1,bees:!1,aviary:!1},note:`شرائح محاصيل مع ري بالرشاشات`},{id:`hobby`,icon:`🐝`,name:`منحل وطيور زينة`,area:1500,opts:{crops:!1,orchard:!1,livestock:!1,poultry:!1,aqua:!1,bees:!0,aviary:!0},note:`مشروع صغير منخفض التكلفة`}],Wy=[{id:`till`,label:`⛏️ حراثة`},{id:`plant`,label:`🌱 زراعة`},{id:`water`,label:`🚿 ري يدوي`},{id:`harvest`,label:`🧺 حصاد`},{id:`sprinkler`,label:`💦 رشاش`},{id:`control`,label:`⚙️ تحكم بالرشاش`},{id:`sensor`,label:`📡 مستشعر`},{id:`inspect`,label:`🔍 مجس يدوي`},{id:`clear`,label:`🗑️ إزالة`},{id:`pen`,label:`🏠 حظيرة`},{id:`hatchery`,label:`🐣 مفقس`},{id:`pond`,label:`🐟 حوض سمكي`},{id:`cage`,label:`⭕ قفص في البحيرة`}],Gy=e=>q[e]??Nm[e],Ky=[10,16,20,30,40],qy=e=>document.getElementById(e),X=(e,t,n)=>{let r=document.createElement(e);return t&&(r.className=t),n!=null&&(r.textContent=n),r},Z=(e,t,n)=>{let r=X(`button`,`btn`+(t?` on`:``),e);return r.onclick=n,r},Jy=e=>String(Math.floor(e)).padStart(2,`0`),Yy={ok:`طبيعي`,warn:`تنبيه`,crit:`خطر`},Xy={ok:`#4caf50`,warn:`#ffa726`,crit:`#ef5350`};function Zy(e,t){let n,r=e=>{let t=qy(`toast`);t.textContent=e,t.style.opacity=1,clearTimeout(n),n=setTimeout(()=>t.style.opacity=0,2e3)},i=qy(`status`),a=X(`div`,`tb`),o=X(`div`,`brand`),s=X(`b`,`fname`),c=X(`span`,`chip`),l=X(`div`,`seg`),u=X(`div`,`seg`),d=X(`div`,`icons`),f=X(`div`,`sub`),p=X(`span`,`chip`),m=X(`span`,`chip`);s.onclick=()=>Xe(),s.title=`قائمة المزارع`,o.append(s,c),a.append(o,l,u,d),f.append(p,m),i.append(a,f);let h=Object.entries(zy).map(([e,n])=>{let r=Z(n,!1,()=>t.setCamera(e));return l.append(r),[e,r]}),g=[1,5,20,60].map(t=>{let n=Z(`×`+t,!1,()=>e.speed=t);return u.append(n),[t,n]}),_=Z(`🌍 بغداد`,!1,()=>wd.on=!wd.on);_.title=`مزامنة الليل والنهار مع توقيت بغداد الحقيقي`,u.append(_);let v=t=>{e.panel=e.panel===t?``:t,O()},y=(e,t,n)=>{let r=Z(e,!1,n);return r.classList.add(`ib`),r.title=t,r},b=y(`📡`,`القراءات والمستشعرات`,()=>v(`sensors`)),x=y(`🐄`,`الثروة الحيوانية ومعمل FCR`,()=>v(`livestock`)),S=y(`🐟`,`الأسماك`,()=>v(`aqua`)),C=y(`🔔 0`,`مركز التنبيهات`,()=>v(`alerts`)),w=y(`🔥`,`عرض الكاميرا الحرارية`,()=>{e.thermal=!e.thermal,O()}),T=y(`🌐`,`التوأم الرقمي (T)`,()=>e.twin=!e.twin),E=y(``,`جودة الرسم (تتخفض تلقائياً عند البطء)`,()=>t.cycleQuality()),D={ultra:`💎 فائقة`,high:`⚙️ عالية`,medium:`⚙️ متوسطة`,low:`⚙️ منخفضة`};d.append(C,b,x,S,w,T,E,y(`🏡`,`المزارع: إنشاء وتعديل وتصدير`,()=>Xe()),y(`❓`,`مساعدة`,()=>{let e=qy(`hint`);e.style.display=e.style.display===`block`?`none`:`block`}));function O(){qy(`sensors`).style.display=e.panel===`sensors`?`block`:`none`,qy(`livestock`).style.display=e.panel===`livestock`?`block`:`none`,qy(`aqua`).style.display=e.panel===`aqua`?`block`:`none`,qy(`alerts`).style.display=e.panel===`alerts`?`block`:`none`,qy(`legend`).style.display=e.thermal?`block`:`none`}function k(){let t=[[`till`,`plant`,`water`,`harvest`,`sprinkler`,`control`],[`sensor`,`inspect`],[`pen`,`hatchery`],[`pond`,`cage`],[`clear`]],n=[];t.forEach((t,r)=>{r&&n.push(X(`span`,`sep`));for(let r of t){let t=Wy.find(e=>e.id===r),i=Wy.indexOf(t),[a,...o]=t.label.split(` `),s=X(`button`,`tool`+(e.tool===r?` on`:``));s.append(X(`span`,`ic`,a),X(`span`,`lb`,o.join(` `)),X(`span`,`kb`,`1234567890-=\\`[i]??``)),s.onclick=()=>{e.tool=r,k()},n.push(s)}}),qy(`toolbar`).replaceChildren(...n);let r=qy(`palette`);if(r.style.display=[`plant`,`sensor`,`pen`,`pond`,`cage`].includes(e.tool)?`flex`:`none`,(e.tool===`pond`||e.tool===`cage`)&&r.replaceChildren(...Object.entries(oh).map(([t,n])=>Z(`${n.icon} ${n.name}`,e.fish===t,()=>{e.fish=t,k()}))),e.tool===`pen`){let t=t=>Object.entries(J).filter(([,e])=>(e.group??`ruminant`)===t).map(([t,n])=>Z(`${n.icon} ${n.name}`,e.species===t,()=>{e.species=t,gm(t).includes(e.purpose)||(e.purpose=gm(t)[0]),k()})),n=()=>{let e=X(`div`);return e.style.flexBasis=`100%`,e};r.replaceChildren(...t(`ruminant`),n(),...t(`bird`),n(),...gm(e.species).map(t=>Z(hm[t],e.purpose===t,()=>{e.purpose=t,k()})))}if(e.tool===`plant`){let t={field:`حقلية`,veg:`خضار`,forage:`أعلاف`,fruit:`فاكهة`,palm:`نخيل`,tree:`ظل وورد`},n=[];for(let[r,i]of Object.entries(t)){let t=Object.entries(q).filter(([,e])=>e.cat===r);if(!t.length)continue;let a=X(`div`,`sx`,i);a.style.cssText=`width:100%;opacity:.7;font-size:11px;margin:4px 0 0`,n.push(a,...t.map(([t,n])=>Z(`${n.icon} ${n.name}`,e.crop===t,()=>{e.crop=t,k()})))}r.replaceChildren(...n)}e.tool===`sensor`&&r.replaceChildren(...Object.entries(pg).map(([t,n])=>Z(`${n.icon} ${n.name}`,e.sensorType===t,()=>{e.sensorType=t,k()})))}qy(`hint`).innerHTML=`<b>التحكم</b><br>اختر أداة ثم اضغط على مربع، أو اسحب لتحديد مساحة.<br>
    <b>C</b>: تبديل الكاميرا (درون ← مشي ← طيران) · <b>T</b>: التوأم الرقمي<br>
    <b>درون (استراتيجي)</b>: WASD/الأسهم تحريك · Q/E دوران · يمين+سحب=دوران حر · وسط+سحب=تحريك · عجلة=تقريب نحو المؤشر · حافة الشاشة تحرّك الكاميرا · Shift أسرع<br>
    <b>مشي/طيران</b>: اضغط المشهد مرة، ثم انظر بالفأرة مباشرة · WASD حركة · Shift أسرع · Esc يحرر الفأرة<br>
    الطيران: E أو Space صعود، Q نزول<br>
    في المشي والطيران: الأداة تعمل على المربع تحت علامة (+)، وعجلة الفأرة تبدّل الأداة، والسحب يحدد مساحة<br>
    <b>مجس يدوي 🔍</b>: يقيس أي مربع فوراً<br>يُحفظ عملك تلقائياً.`;let A=dg.map(([e,t])=>`#${t.toString(16).padStart(6,`0`)} ${(e-5)/43*100}%`).join(`,`),ee=X(`div`,`bar`);ee.style.background=`linear-gradient(90deg,${A})`;let te=X(`div`,`lab`);te.append(X(`span`,``,`5°`),X(`span`,``,`25°`),X(`span`,``,`48°`)),qy(`legend`).append(X(`b`,``,`🔥 خريطة الحرارة`),ee,te);let ne=qy(`sensors`),j=X(`h4`),re=X(`span`),M=X(`button`,`rm`,`✕`);M.onclick=()=>{e.panel=``,O()},j.append(re,M);let ie=X(`div`,`sc`);ie.style.display=`none`;let N=X(`div`);ne.append(j,ie,N);let ae=new Map;function oe(e){let n=pg[e.type],r=X(`div`,`sc`),i=X(`div`,`sh`),a=X(`span`,``,`${n.icon} ${n.name}`),o=X(`small`,``,`(${e.tile.i+1}، ${e.tile.j+1})`),s=X(`button`,`rm`,`🗑️`);s.title=`حذف المستشعر`,s.onclick=()=>t.removeSensor(e);let c=X(`span`);c.append(a,o),i.append(c,s);let l=X(`div`,`sv`),u=X(`b`),d=X(`span`,``,n.unit),f=X(`span`);l.append(u,d,f);let p=X(`div`,`sa`),m=X(`div`,`sx`),h=X(`canvas`);return h.width=280,h.height=38,r.append(i,l,p,m,h),N.append(r),{root:r,val:u,trend:f,sa:p,sx:m,cv:h}}function se(e,t,n){let r=e.getContext(`2d`);if(r.clearRect(0,0,e.width,e.height),t.length<2)return;let i=Math.min(...t),a=Math.max(...t)-i||1;r.strokeStyle=n,r.lineWidth=2,r.beginPath(),t.forEach((n,o)=>{let s=o/(t.length-1)*e.width,c=e.height-4-(n-i)/a*(e.height-8);o?r.lineTo(s,c):r.moveTo(s,c)}),r.stroke()}let ce=0;function le(t,n){let r=performance.now();if(e.panel!==`sensors`||r-ce<500)return;ce=r;let i=t.filter(e=>e.status!==`ok`).length;if(re.textContent=t.length?i?`⚠️ ${i} تنبيه من ${t.length} مستشعر`:`✅ ${t.length} مستشعر — كلها طبيعية`:`📡 لا توجد مستشعرات بعد`,ie.style.display=n?`block`:`none`,n){ie.replaceChildren(),ie.append(X(`div`,`sh`,`🔍 مجس يدوي — مربع (${e.probe.i+1}، ${e.probe.j+1})`));for(let e of n){let t=X(`div`,`sv`),n=X(`b`,`st-`+e.status,e.value.toFixed(e.dec));n.style.fontSize=`22px`,t.append(n,X(`span`,``,`${e.unit}  ${e.icon} ${e.name}  ±${e.acc}`)),ie.append(t)}}for(let e of t)ae.has(e.id)||ae.set(e.id,oe(e));for(let[e,n]of ae)t.some(t=>t.id===e)||(n.root.remove(),ae.delete(e));for(let e of t){let t=pg[e.type],n=ae.get(e.id);n.root.className=`sc `+e.status,n.val.textContent=e.value.toFixed(t.dec);let i=e.hist,a=i.length>5?i.slice(-6,-1).reduce((e,t)=>e+t,0)/5:e.value,o=e.value-a;if(n.trend.textContent=Math.abs(o)<t.acc/2?`→`:o>0?`↗`:`↘`,n.sa.textContent=`دقة ±${t.acc} ${t.unit} · ${Yy[e.status]} · آخر قراءة قبل ${Math.round((r-e.stamp)/1e3)} ث`,e.extra){let t=e.extra;n.sx.textContent=`أدنى ${t.min.toFixed(1)}° · أعلى ${t.max.toFixed(1)}° (مربع ${t.hot[0]+1}، ${t.hot[1]+1}) · نباتات عطشى: ${t.stressed}`}se(n.cv,i,Xy[e.status])}}let P=qy(`livestock`),ue=X(`h4`),de=X(`span`),fe=X(`button`,`rm`,`✕`);fe.onclick=()=>{e.panel=``,O()},ue.append(de,fe);let pe=X(`div`,`sc`),me=X(`div`,`sv`),he=X(`div`,`row`);he.append(Z(`🏭 طحن المحصول إلى علف`,!1,()=>{let e=t.grind();r(e?`تم طحن ${e} كغ علف`:`لا توجد حبوب (قمح، شعير، ذرة) في المخزون`)}),Z(`📦 +500 كغ علف`,!1,()=>t.buyFeed())),pe.append(me,he);let ge=X(`div`),_e=X(`div`);P.append(ue,pe,ge,_e);let ve=new Map,ye={feeder:[`auto`,`manual`,`off`],climate:[`auto`,`cool`,`heat`,`off`]},be={auto:`🌾 تغذية: تلقائي`,manual:`🌾 تغذية: يدوي`,off:`🌾 تغذية: متوقفة`},xe={auto:`🌡️ مناخ: تلقائي`,cool:`❄️ تبريد دائم`,heat:`🔥 تدفئة دائمة`,off:`⏻ مناخ: متوقف`},Se=(e,t)=>e[(e.indexOf(t)+1)%e.length];function Ce(n){let i=X(`div`,`sc`),a=X(`div`,`sh`),o=X(`span`),s=X(`button`,`rm`,`🗑️`);s.title=`إزالة الحظيرة`,s.onclick=()=>r(t.penAction(`remove`,n)),a.append(o,s);let c=X(`div`,`pg`),l=e=>{let t=X(`div`,`pc`),n=X(`b`);return t.append(X(`small`,``,e),n),c.append(t),n},u={n:l(`العدد`),w:l(`الوزن`),t:l(`حرارة الحظيرة`),nh:l(`أمونيا`),f:l(`العلف`),d:l(``)},d=X(`div`,`sx`),f=X(`div`,`fb`),p=X(`i`),m=X(`div`,`sa`),h=X(`canvas`);f.append(p),h.width=280,h.height=38;let g=X(`div`,`row`),_=X(`div`,`row`),v=Z(``,!1,()=>{n.feederMode=Se(ye.feeder,n.feederMode)}),y=Z(``,!1,()=>{n.climate=Se(ye.climate,n.climate)}),b=Z(``,!1,()=>{n.waterOn=!n.waterOn});g.append(v,y,b);let x=Z(``,!1,()=>{let e=gm(n.sp);r(t.penAction(`purpose`,n,e[(e.indexOf(n.purpose)+1)%e.length]))}),S=X(`div`,`sx`,`🔬 معمل FCR`),C=Z(`💰 بيع الجاهز`,!1,()=>r(t.penAction(`sell`,n)));return _.append(Z(`🌾 تعبئة المعلف`,!1,()=>r(t.penAction(`refill`,n))),Z(`➕ إضافة حيوانات`,!1,()=>r(t.penAction(`add`,n))),C,x),i.append(a,c,S,d,f,h,m,g,_),ge.append(i),i.onclick=()=>{e.selPen=n},{root:i,title:o,cells:u,fcrTxt:d,fcrHead:S,fbi:p,note:m,cv:h,feederB:v,climB:y,waterB:b,purposeB:x,sellB:C}}let we=new Map;function Te(e){let n=X(`div`,`sc`),i=X(`div`,`sh`),a=X(`span`),o=X(`button`,`rm`,`🗑️`);o.onclick=()=>r(t.hatchAction(`remove`,e)),i.append(a,o);let s=X(`div`,`pg`),c=e=>{let t=X(`div`,`pc`),n=X(`b`);return t.append(X(`small`,``,e),n),s.append(t),n},l={eggs:c(`البيض`),day:c(`يوم الحضانة`),t:c(`الحرارة (فعلية / مضبوطة)`),rh:c(`الرطوبة (فعلية / مضبوطة)`),q:c(`جودة الظروف`),out:c(`الكتاكيت المفقوسة`)},u=X(`div`,`fb`),d=X(`i`),f=X(`div`,`sa`),p=X(`canvas`);u.append(d),p.width=280,p.height=38;let m=X(`div`,`row`),h=X(`div`,`row`),g=Z(``,!1,()=>r(t.hatchAction(`species`,e))),_=Z(``,!1,()=>{e.turn=!e.turn}),v=Z(``,!1,()=>{e.power=!e.power});return m.append(g,Z(`🥚 تحميل 100 بيضة`,!1,()=>r(t.hatchAction(`load`,e))),Z(`🐥 نقل الكتاكيت`,!1,()=>r(t.hatchAction(`move`,e)))),h.append(Z(`🌡️ −`,!1,()=>{e.setT=Math.round((e.setT-.1)*10)/10}),Z(`🌡️ +`,!1,()=>{e.setT=Math.round((e.setT+.1)*10)/10}),Z(`💧 −`,!1,()=>{e.setRH=Math.max(20,e.setRH-5)}),Z(`💧 +`,!1,()=>{e.setRH=Math.min(90,e.setRH+5)}),_,v),n.append(i,s,u,p,f,m,h),_e.append(n),{root:n,title:a,cells:l,fbi:d,note:f,cv:p,spB:g,turnB:_,powB:v}}let Ee=0;function De(t,n=[]){let r=performance.now();if(e.panel!==`livestock`||r-Ee<400)return;Ee=r;let i=[...t,...n],a=i.filter(e=>e.status!==`ok`).length;de.textContent=i.length?a?`⚠️ ${a} تنبيه من ${i.length} منشأة`:`✅ ${i.length} منشأة (حظائر ومفاقس) — طبيعية`:`🐄 لا توجد منشآت. اختر 🏠 حظيرة (مفتاح 0) أو 🐣 مفقس (مفتاح -)`,me.replaceChildren(X(`b`,``,`🌾 ${Math.round(Mm.feed)}`),X(`span`,``,`كغ علف في المخزن`));for(let e of t)ve.has(e)||ve.set(e,Ce(e));for(let[e,n]of ve)t.includes(e)||(n.root.remove(),ve.delete(e));for(let[t,n]of ve){let r=J[t.sp],i=t.purpose===`meat`,a=_m(t.sp,t.purpose),o=i?r.fcr:a?.fcr;n.root.className=`sc `+t.status+(e.selPen===t?` sel`:``),n.title.textContent=`${r.icon} ${r.name} · ${hm[t.purpose]} · (${t.i0+1}–${t.i1+1}، ${t.j0+1}–${t.j1+1})`,n.cells.n.textContent=`${t.n} / ${t.cap}`,n.cells.w.textContent=`${t.w<10?t.w.toFixed(2):Math.round(t.w)} / ${r.wm} كغ`,n.cells.t.textContent=`${t.temp.toFixed(1)}° (راحة ${r.tmin}–${r.tmax})`,n.cells.t.className=t.stress>.8?`st-crit`:t.stress>.3?`st-warn`:``,n.cells.nh.textContent=`${Math.round(t.nh3)} ppm`,n.cells.nh.className=t.nh3>50?`st-crit`:t.nh3>25?`st-warn`:``,n.cells.f.textContent=`${Math.round(t.feedLevel)} / ${t.feedCap} كغ`,n.cells.f.className=t.feedLevel<t.feedCap*.1?`st-crit`:t.feedLevel<t.feedCap*.25?`st-warn`:``,n.cells.d.parentNode.firstChild.textContent=i?`نمو يومي / حيوان`:a?`${a.unit} يومياً / حيوان`:`استهلاك العلف / حيوان`,n.cells.d.textContent=i?`${t.daily.toFixed(3)} كغ`:a?`${t.daily.toFixed(2)} ${a.unit}`:`${t.eaten.toFixed(2)} كغ/يوم`,n.fcrHead.textContent=`🔬 معمل FCR — `+(i?`كغ علف لكل كغ زيادة وزن`:a?a.fcrUnit:`لا ينطبق (زينة/جوارح)`);let s=t.fcr&&o?t.fcr/o:0,c=!t.fcr||!o||s<=1.1?`ok`:s<=1.3?`warn`:`crit`;n.fcrTxt.textContent=o?t.fcr?`الحالي ${t.fcr.toFixed(2)} · الهدف ${o} · ${s<=1.1?`ممتاز ✅`:`أسوأ من الهدف بـ ${Math.round((s-1)*100)}% ⚠️`}`:`لا توجد بيانات كافية بعد (أضف علفاً وشغّل الوقت)`:`لا يوجد FCR لهذا الغرض`,n.fcrTxt.className=`sx st-`+c,n.fbi.style.width=Math.min(100,s/2*100)+`%`,n.fbi.style.background=Xy[c],n.note.textContent=(t.note?`⚠️ `+t.note+` · `:``)+(a?`إجمالي الإنتاج ${Math.round(t.milkTotal)} ${a.unit}`:`عمر القطيع ${t.age.toFixed(0)} يوم`),n.feederB.textContent=be[t.feederMode],n.climB.textContent=xe[t.climate]+(t.fanOn?` (مروحة)`:t.heatOn?` (مدفأة)`:``),n.waterB.textContent=t.waterOn?`💧 الماء: يعمل`:`🚫 الماء: مقطوع`,n.waterB.classList.toggle(`on`,t.waterOn);let l=gm(t.sp);n.purposeB.style.display=l.length>1?``:`none`,n.purposeB.textContent=`🔁 `+hm[l[(l.indexOf(t.purpose)+1)%l.length]],n.sellB.style.display=i?``:`none`,se(n.cv,t.hist.filter(e=>e!=null),Xy[c])}for(let e of n)we.has(e)||we.set(e,Te(e));for(let[e,t]of we)n.includes(e)||(t.root.remove(),we.delete(e));for(let[e,t]of we){let n=J[e.sp];t.root.className=`sc `+e.status,t.title.textContent=`🐣 مفقس (${e.tile.i+1}، ${e.tile.j+1}) · ${n.icon} ${n.name}`,t.cells.eggs.textContent=e.eggs?`${e.eggs} بيضة`:`—`,t.cells.day.textContent=e.eggs?`${e.day.toFixed(1)} / ${n.inc}`:`${n.inc} يوماً`,t.cells.t.textContent=`${e.temp.toFixed(1)}° / ${e.setT.toFixed(1)}°`,t.cells.t.className=Math.abs(e.temp-37.5)>1.5?`st-crit`:Math.abs(e.temp-37.5)>.6?`st-warn`:``,t.cells.rh.textContent=`${Math.round(e.rh)}% / ${e.setRH}%`,t.cells.rh.className=Math.abs(e.rh-55)>10?`st-warn`:``,t.cells.q.textContent=e.eggs?`${Math.round(e.quality*100)}%`:`—`,t.cells.q.className=e.quality<.6?`st-crit`:e.quality<.85?`st-warn`:``,t.cells.out.textContent=String(e.hatched),t.fbi.style.width=(e.eggs?Math.min(100,e.day/n.inc*100):0)+`%`,t.fbi.style.background=Xy[e.status],t.note.textContent=(e.note?`⚠️ `+e.note+` · `:``)+`المثالي للدجاج: ${Xh}° و55% رطوبة، تقليب مستمر`,t.spB.textContent=`🐣 النوع: ${n.name}`,t.turnB.textContent=e.turn?`🔄 التقليب: يعمل`:`⏸ التقليب: متوقف`,t.turnB.classList.toggle(`on`,e.turn),t.powB.textContent=e.power?`⚡ الكهرباء: متصلة`:`🔌 الكهرباء: مفصولة`,t.powB.classList.toggle(`on`,e.power),se(t.cv,e.hist,Xy[e.status])}}let Oe=qy(`aqua`),ke=X(`h4`),Ae=X(`span`),je=X(`button`,`rm`,`✕`);je.onclick=()=>{e.panel=``,O()},ke.append(Ae,je);let Me=X(`div`);Oe.append(ke,Me);let Ne=new Map,F={feederMode:[`🌾 المغذي`,`feeder`],aerMode:[`🫧 المهوّية`,`aer`],pumpMode:[`🔁 تبديل المياه`,`pump`],uvMode:[`💡 تعقيم UV`,`uv`]},Pe={auto:`تلقائي`,on:`تعمل`,off:`متوقفة`};function Fe(e){let n=X(`div`,`sc`),i=X(`div`,`sh`),a=X(`span`),o=X(`button`,`rm`,`🗑️`);o.onclick=()=>r(t.aquaAction(`remove`,e)),i.append(a,o);let s=X(`div`,`pg`),c=e=>{let t=X(`div`,`pc`),n=X(`b`);return t.append(X(`small`,``,e),n),s.append(t),n},l={n:c(`العدد`),w:c(`الوزن · المرحلة`),t:c(`حرارة الماء`),o2:c(`الأكسجين المذاب`),nh:c(`الأمونيا TAN (سامة NH₃)`),ph:c(`pH`),pa:c(`الممرضات`),bm:c(`الكتلة الحيوية`),hp:c(`المغذي`)},u=X(`div`,`sx`),d=X(`div`,`fb`),f=X(`i`),p=X(`div`,`sa`),m=X(`canvas`);d.append(f),m.width=280,m.height=38;let h=X(`div`,`row`),g=X(`div`,`row`),_={};for(let[n,[r]]of Object.entries(F))(e.kind!==`cage`||n===`feederMode`)&&(_[n]=Z(``,!1,()=>{t.aquaAction(`mode`,e,n)}),_[n].dataset.label=r,h.append(_[n]));return g.append(Z(`🌾 تعبئة المغذي`,!1,()=>r(t.aquaAction(`refill`,e))),Z(`➕ توريد يرقات`,!1,()=>r(t.aquaAction(`restock`,e))),Z(`💰 حصاد`,!1,()=>r(t.aquaAction(`harvest`,e)))),n.append(i,s,X(`div`,`sx`,`🔬 معمل FCR — كغ علف لكل كغ زيادة وزن`),u,d,m,p,h,g),Me.append(n),{root:n,title:a,cells:l,fcrTxt:u,fbi:f,note:p,cv:m,devB:_}}let Ie=0;function I(t){let n=performance.now();if(e.panel!==`aqua`||n-Ie<400)return;Ie=n;let r=t.filter(e=>e.status!==`ok`).length;Ae.textContent=t.length?r?`⚠️ ${r} تنبيه من ${t.length} وحدة`:`✅ ${t.length} وحدة تربية — طبيعية`:`🐟 لا توجد وحدات. اختر 🐟 حوض سمكي أو ⭕ قفص في البحيرة`;for(let e of t)Ne.has(e)||Ne.set(e,Fe(e));for(let[e,n]of Ne)t.includes(e)||(n.root.remove(),Ne.delete(e));for(let[e,t]of Ne){let n=oh[e.sp],r=ch(e.w,n.wm),i=e.fcr?e.fcr/n.fcr:0;t.root.className=`sc `+e.status,t.title.textContent=`${n.icon} ${n.name} · ${e.kind===`pond`?`حوض (${e.i0+1}–${e.i1+1}، ${e.j0+1}–${e.j1+1})`:`قفص في البحيرة`}`,t.cells.n.textContent=`${Math.round(e.n).toLocaleString(`en`)} / ${e.cap.toLocaleString(`en`)}`,t.cells.w.textContent=`${e.w<10?e.w.toFixed(2):Math.round(e.w)} غ · ${r.name}`,t.cells.t.textContent=`${e.temp.toFixed(1)}° (مثالي ${n.t[1]}–${n.t[2]})`,t.cells.t.className=e.temp<n.t[0]||e.temp>n.t[3]?`st-crit`:e.temp<n.t[1]||e.temp>n.t[2]?`st-warn`:``,t.cells.o2.textContent=`${e.do.toFixed(1)} ملغ/ل (أدنى ${n.doMin})`,t.cells.o2.className=e.do<n.doMin*.7?`st-crit`:e.do<n.doMin?`st-warn`:``,t.cells.nh.textContent=`${e.tan.toFixed(2)} (${e.nh3.toFixed(3)})`,t.cells.nh.className=e.nh3>.1?`st-crit`:e.nh3>.03?`st-warn`:``,t.cells.ph.textContent=e.ph.toFixed(2),t.cells.pa.textContent=Math.round(e.path*100)+`%`,t.cells.pa.className=e.path>.7?`st-crit`:e.path>.4?`st-warn`:``,t.cells.bm.textContent=`${(e.n*e.w/1e3).toFixed(1)} كغ`,t.cells.hp.textContent=`${e.hopper.toFixed(1)} / ${e.hopperCap} كغ`,t.cells.hp.className=e.hopper<e.hopperCap*.1?`st-crit`:e.hopper<e.hopperCap*.25?`st-warn`:``;let a=e.fcr?i<=1.1?`ok`:i<=1.3?`warn`:`crit`:`ok`;t.fcrTxt.textContent=e.fcr?`الحالي ${e.fcr.toFixed(2)} · الهدف ${n.fcr} · ${i<=1.1?`ممتاز ✅`:`أسوأ من الهدف بـ ${Math.round((i-1)*100)}% ⚠️`}`:`لا توجد بيانات كافية بعد`,t.fcrTxt.className=`sx st-`+a,t.fbi.style.width=Math.min(100,i/2*100)+`%`,t.fbi.style.background=Xy[a],t.note.textContent=(e.note?`⚠️ `+e.note+` · `:``)+`عمر الدفعة ${e.age.toFixed(0)} يوم`;for(let[n,r]of Object.entries(t.devB)){let t=n===`feederMode`?e.hopper>.1:n===`aerMode`?e.aerOn:n===`pumpMode`?e.pumpOn:e.uvOn;r.textContent=`${r.dataset.label}: ${Pe[e[n]]}${e[n]===`auto`&&n!==`feederMode`&&t?` (يعمل الآن)`:``}`,r.classList.toggle(`on`,e[n]!==`off`&&(n===`feederMode`||t||e[n]===`on`))}se(t.cv,e.hist.filter(e=>e!=null),Xy[a])}}let Le=qy(`alerts`),L=X(`h4`),Re=X(`span`),ze=X(`button`,`rm`,`✕`);ze.onclick=()=>{e.panel=``,O()};let Be=Z(``,!1,()=>{e.sound=!e.sound});L.append(Re,ze);let Ve=X(`div`),He=X(`div`,`lg`);Le.append(L,Be,Ve,X(`div`,`sx`,`📜 السجل`),He);let Ue=0;function We(n,r){let i=n.filter(e=>e.sev===`crit`).length;C.textContent=`🔔 ${n.length}`,C.style.boxShadow=i?`0 0 14px #ef5350`:n.length?`0 0 10px #ffa726`:``;let a=performance.now();e.panel!==`alerts`||a-Ue<500||(Ue=a,Re.textContent=n.length?`🚨 ${i} خطر · ${n.length-i} تنبيه`:`✅ لا توجد تنبيهات`,Be.textContent=e.sound?`🔊 الصوت: يعمل عند الخطر`:`🔇 الصوت: متوقف`,Be.classList.toggle(`on`,!!e.sound),Ve.replaceChildren(...n.map(e=>{let n=X(`div`,`sc `+e.sev),r=X(`div`,`sh`,`${e.icon} ${e.title}`),i=X(`div`,`sa`,e.msg+(e.pos?` — اضغط للانتقال`:``));return n.append(r,i),n.onclick=()=>e.pos&&t.focus(e.pos),n})),He.replaceChildren(...r.slice(0,10).map(e=>X(`div`,e.sev===`crit`?`st-crit`:e.sev===`warn`?`st-warn`:`st-ok`,`${e.at} · ${e.raised?``:`✔ `}${e.msg}`))))}let Ge=qy(`modal`),Ke=()=>Ge.style.display=`none`;Ge.onclick=e=>{e.target===Ge&&Ke()};let qe=(e,t)=>{let n=X(`label`,``,e);return n.append(t),n},Je=(e,t)=>{let n=X(`select`);return n.append(...e.map(([e,t])=>new Option(t,e))),n.value=t,n},Ye=(...e)=>{let t=X(`div`,`box`);t.append(...e),Ge.replaceChildren(t),Ge.style.display=`flex`};function Xe(){let{list:n,current:r}=t.farms(),i=Je(n.map(e=>[e.id,e.name]),r),a=X(`input`);a.type=`file`,a.accept=`.json,application/json`,a.style.display=`none`,a.onchange=async()=>{let e=a.files[0];e&&(Ke(),t.importFarm(await e.text()))};let o=X(`div`,`row`),s=X(`div`,`row`);o.append(Z(`فتح`,!1,()=>{Ke(),t.openFarm(i.value)}),Z(`➕ مزرعة جديدة`,!1,()=>Ze(`new`)),Z(`✏️ تعديل الحالية`,!1,()=>Ze(`edit`))),s.append(Z(`📋 تقرير المهندس`,!1,()=>{let t=URL.createObjectURL(new Blob([Qg(e.profile)],{type:`text/html`}));window.open(t,`_blank`)||Object.assign(document.createElement(`a`),{href:t,download:e.profile.name+`-report.html`}).click(),setTimeout(()=>URL.revokeObjectURL(t),6e4)}),Z(`⬇️ تصدير`,!1,()=>t.exportFarm()),Z(`⬆️ استيراد`,!1,()=>a.click()),Z(`🗑️ حذف الحالية`,!1,()=>{confirm(`حذف المزرعة الحالية نهائياً؟`)&&(Ke(),t.deleteFarm())}),Z(`إغلاق`,!1,Ke)),Ye(X(`h3`,``,`🏡 المزارع`),qe(`اختر مزرعة`,i),o,s,a,X(`p`,``,`الحالية: ${e.profile.name} — ${e.profile.n}×${e.profile.n} مربع، تربة ${Ap[e.profile.soil].name}، مناخ ${Cd[e.profile.climate].name}`))}function Ze(n){let i=n===`edit`?e.profile:{name:`مزرعة جديدة`,n:20,soil:`loam`,climate:`iq_baghdad`,cell:2},a=X(`input`);a.value=i.name,a.maxLength=40;let o=Je(Object.entries(Ap).map(([e,t])=>[e,t.name]),i.soil),s=Je(Object.entries(Cd).map(([e,t])=>[e,t.name]),i.climate);s.onchange=()=>{let e=Rd(s.value);e&&(o.value=Vd(e))};let c=X(`div`,`row`);if(n===`edit`){let e=[...new Set([...Ky,i.n])].sort((e,t)=>e-t),n=Je(e.map(e=>[e,`${e} × ${e} مربع`]),i.n);return c.append(Z(`حفظ`,!0,()=>{let e={...i,name:a.value.trim()||`مزرعة`,n:Number(n.value),soil:o.value,climate:s.value};e.n<i.n&&!confirm(`تصغير المساحة يحذف ما خارج الحدود الجديدة. متابعة؟`)||(Ke(),t.editFarm(e))}),Z(`رجوع`,!1,Xe)),Ye(X(`h3`,``,`✏️ تعديل المزرعة`),qe(`الاسم`,a),qe(`المساحة (مربعات)`,n),qe(`نوع التربة`,o),qe(`المناخ / المحافظة`,s),c,X(`p`,``,`كل مربع ≈ ${(i.cell??2).toFixed(1)} م. التعديل يُطبَّق فوراً.`))}let l=X(`input`);l.type=`number`,l.min=`100`,l.step=`any`,l.value=`1`;let u=Je(Object.entries(zd).map(([e,t])=>[e,t[0]]),`donum_iraqi`),d=X(`input`);d.type=`number`,d.min=`5`,d.placeholder=`اختياري: العرض بالمتر`;let f=(e,t=!0)=>{let n=X(`input`);n.type=`checkbox`,n.checked=t;let r=X(`label`,``,` `+e);return r.prepend(n),r.style.display=`inline-block`,r.style.marginInlineEnd=`10px`,[n,r]},[p,m]=f(`🧭 توليد مخطط تلقائي`),[h,g]=f(`محاصيل`),[_,v]=f(`بستان نخيل وفاكهة`),[y,b]=f(`مجترات`),[x,S]=f(`دواجن+مفقس`),[C,w]=f(`أسماك`),[T,E]=f(`نحل`),[D,O]=f(`طيور زينة`),k=X(`p`,``),A=Je([[``,`— بلا قالب (أدخل بنفسك) —`],...Uy.map(e=>[e.id,`${e.icon} ${e.name} (${e.area} م²)`])],``);A.onchange=()=>{let e=Uy.find(e=>e.id===A.value);e&&(u.value=`sqm`,l.value=e.area,d.value=``,p.checked=!0,[h.checked,_.checked,y.checked,x.checked,C.checked,T.checked,D.checked]=[e.opts.crops,e.opts.orchard,e.opts.livestock,e.opts.poultry,e.opts.aqua,e.opts.bees,e.opts.aviary],a.value=e.name,te())};let ee=()=>{let e=Bd(Number(l.value)||0,u.value),t=Number(d.value)||Math.sqrt(e);return{m2:e,w:t,l:e/t}},te=()=>{let e=ee();k.textContent=e.m2>=100?`≈ ${Math.round(e.m2)} م² (${Math.round(e.w)}×${Math.round(e.l)} م). تُرسم حدود الأرض الحقيقية داخل الشبكة، وما خارجها محجوب.`:`أدخل مساحة 100 م² أو أكثر`};[l,u,d].forEach(e=>e.oninput=te),te(),c.append(Z(`إنشاء`,!0,()=>{let e=ee();if(e.m2<100)return r(`المساحة صغيرة جداً`);let n=Math.max(e.w,e.l),i=Math.max(10,Math.min(40,Math.round(n/2))),c=n/i,l=Math.max(3,Math.min(i,Math.round(e.w/c))),u=Math.max(3,Math.min(i,Math.round(e.l/c))),d={name:a.value.trim()||`مزرعة`,n:i,soil:o.value,climate:s.value,cell:c,area:Math.round(e.m2),dims:{w:Math.round(e.w),l:Math.round(e.l)},region:{i0:Math.floor((i-l)/2),j0:Math.floor((i-u)/2),w:l,h:u}};Ke(),t.createFarm(d,p.checked?{crops:h.checked,orchard:_.checked,livestock:y.checked,poultry:x.checked,aqua:C.checked,bees:T.checked,aviary:D.checked}:null)}),Z(`رجوع`,!1,Xe));let ne=X(`div`);ne.append(g,v,b,S,w,E,O),Ye(X(`h3`,``,`➕ مزرعة جديدة`),qe(`قالب جاهز`,A),qe(`الاسم`,a),qe(`المحافظة / المناخ`,s),qe(`نوع التربة`,o),qe(`مساحة الأرض`,l),qe(`الوحدة`,u),qe(`العرض (م)`,d),k,m,ne,c,X(`p`,``,`يبدأ المخطط من أرض فارغة: يوزّع المناطق ويختار المحاصيل حسب المحافظة والشهر الحالي، وتعدّله بعد ذلك بحرية.`))}function Qe(t,n){let r=e.profile;s.textContent=`🏡 `+r.name,s.title=r.area?`${r.area} م² (${r.dims?.w}×${r.dims?.l} م) · كل مربع ≈ ${r.cell.toFixed(1)} م`:`قائمة المزارع`;let i=n.rain?`🌧️`:n.sun>.25?n.cloud>.6?`⛅`:`☀️`:n.hour<6||n.hour>=18?`🌙`:`🌅`;c.textContent=`🕒 ${Jy(n.hour)}:${Jy(n.hour%1*60)} · يوم ${n.day} · ${i} ${n.airTemp.toFixed(1)}° · 💨 ${Math.round(n.rh)}%`,h.forEach(([t,n])=>n.classList.toggle(`on`,e.mode===t)),_.classList.toggle(`on`,wd.on),g.forEach(([t,n])=>n.classList.toggle(`on`,e.speed===t)),b.classList.toggle(`on`,e.panel===`sensors`),x.classList.toggle(`on`,e.panel===`livestock`),S.classList.toggle(`on`,e.panel===`aqua`),C.classList.toggle(`on`,e.panel===`alerts`),w.classList.toggle(`on`,e.thermal),T.classList.toggle(`on`,e.twin),E.textContent=D[e.quality],E.style.fontSize=`12px`,p.textContent=`المخزون: `+(Object.entries(e.inventory).filter(([e,t])=>Gy(e)&&t>=1).map(([e,t])=>`${Gy(e).icon}${Math.round(t)}`).join(` `)||`—`)+` · 🌾علف ${Math.round(Mm.feed)}`;let a=`مرّر على الأرض`;if(t){if(t.pen){let e=t.pen,n=J[e.sp];a=`${n.icon} ${n.name} ${e.n}/${e.cap} · ${Math.round(e.w)} كغ · ${e.temp.toFixed(1)}°`}else if(t.machine)a=`رشاش: ${im[t.machine.mode]}${t.machine.on?` 💦`:``}`;else if(t.crop){let e=q[t.crop.id];a=`${e.icon} ${e.name} ${Math.min(100,Math.round(t.crop.age/e.grow*100))}%${t.stress?t.stress===`water`?` ⚠️ عطش`:` ⚠️ حرارة`:``}`}else a=t.soil?`تربة محروثة`:`عشب`;a+=` | 💧 ${Vp(t).toFixed(0)}% | 🌡️ ${t.temp.toFixed(1)}°`;let n=e.profile.cell??2;a+=` | 📍 ${((t.i+.5)*n).toFixed(0)}م، ${((t.j+.5)*n).toFixed(0)}م`}m.textContent=a}return O(),k(),{toast:r,refresh:Qe,drawBars:k,renderSensors:le,renderLivestock:De,renderAqua:I,renderAlerts:We,applyPanels:O,openModal:Xe}}function Qy(e){let t={};for(let n of Object.keys(C_))t[n]=(Array.isArray(e?.[n])?e[n]:[]).slice(0,5e3).map(e=>O_(n,e??{},typeof e?.id==`string`?e.id.slice(0,20):void 0).rec).filter(Boolean);return t}function $y(e){let t={v:2,profile:{name:e.profile.name,n:Dp,soil:jp,climate:e.profile.climate,cell:e.profile.cell,area:e.profile.area,dims:e.profile.dims,region:e.profile.region},inv:e.inventory,clock:Math.round(Dd.t),tiles:[],sp:[],sensors:[]};for(let e of Op)(e.soil||e.crop)&&t.tiles.push([e.i,e.j,e.soil,+e.moisture.toFixed(2),e.crop?e.crop.id:0,e.crop?Math.round(e.crop.age):0,+e.temp.toFixed(1)]);for(let e of rm)t.sp.push([e.tile.i,e.tile.j,e.mode]);for(let e of mg)t.sensors.push([e.tile.i,e.tile.j,e.type]);return t.ledger=e.ledger??[],t.records=e.records??{},t.roads=Op.filter(e=>e.road).map(e=>[e.i,e.j]),t.tanks=Op.filter(e=>e.tank).map(e=>[e.i,e.j]),t.stock={feed:Math.round(Mm.feed)},t.aqua=Eh.map(e=>({kind:e.kind,sp:e.sp,i0:e.i0,j0:e.j0,i1:e.i1,j1:e.j1,lx:e.lx,lz:e.lz,n:+e.n.toFixed(1),w:+e.w.toFixed(3),age:+e.age.toFixed(2),temp:+e.temp.toFixed(1),do:+e.do.toFixed(2),tan:+e.tan.toFixed(3),path:+e.path.toFixed(3),hopper:+e.hopper.toFixed(2),fm:e.feederMode,am:e.aerMode,pm:e.pumpMode,um:e.uvMode,fa:+e.feedAcc.toFixed(3),ga:+e.gainAcc.toFixed(3)})),t.hatch=Jh.map(e=>({i:e.tile.i,j:e.tile.j,sp:e.sp,eggs:e.eggs,day:+e.day.toFixed(2),setT:e.setT,setRH:e.setRH,turn:e.turn,power:e.power,q:+e.quality.toFixed(3),hatched:e.hatched,temp:+e.temp.toFixed(1),rh:+e.rh.toFixed(0)})),t.pens=jm.map(e=>({i0:e.i0,j0:e.j0,i1:e.i1,j1:e.j1,sp:e.sp,purpose:e.purpose,n:e.n,age:+e.age.toFixed(2),w:+e.w.toFixed(1),feed:Math.round(e.feedLevel),feeder:e.feederMode,climate:e.climate,water:e.waterOn,fa:+e.feedAcc.toFixed(2),pa:+e.prodAcc.toFixed(2),milk:Math.round(e.milkTotal),temp:+e.temp.toFixed(1)})),t}function eb(e){return e?.v===2&&e.profile?e:e&&Number.isInteger(e.n)?{v:2,profile:{name:`مزرعتي`,n:e.n,soil:`loam`,climate:`temperate`},inv:e.inv,tiles:e.tiles,sp:e.sp,sensors:[]}:null}function tb(e,t,n){try{let r=eb(n),i=r?.profile;if(!i||!Number.isInteger(i.n)||i.n<5||i.n>60)return null;let a={name:String(i.name??`مزرعة`).slice(0,40),n:i.n,soil:Ap[i.soil]?i.soil:`loam`,climate:Cd[i.climate]?i.climate:`temperate`,cell:i.cell>0?i.cell:2,area:i.area,dims:i.dims,region:i.region&&Number.isFinite(i.region.w)?i.region:void 0};Wp(a.soil),Md(a.climate),Qp(e,a.n),Jp(a.region);for(let[e,t]of r.roads??[]){let n=Bp(e,t);n&&(n.road=1)}for(let[t,n]of r.tanks??[]){let r=Bp(t,n);r&&Xp(e,r)}Nd(Number.isFinite(r.clock)?r.clock:40),t.inventory=Object.fromEntries(Object.entries(r.inv??{}).filter(([e,t])=>(q[e]||Nm[e])&&Number.isFinite(t))),t.records=Qy(r.records),t.ledger=(r.ledger??[]).filter(e=>e&&[`expense`,`sale`].includes(e.type)&&e.amount>0).slice(-2e3),Mm.feed=Number.isFinite(r.stock?.feed)?Math.max(0,r.stock.feed):600,Qm(e),ig(e),Vh(e);for(let[t,n,i,a,o,s,c]of r.tiles??[]){let r=Bp(t,n);r&&(r.soil=+!!i,r.moisture=Math.min(1,Math.max(0,Number(a)||0)),Number.isFinite(c)&&(r.temp=c),q[o]&&r.soil&&($p(e,r,o),r.crop.age=Number(s)||0))}for(let[t,n,i]of r.sp??[]){let r=Bp(t,n);r&&!r.machine&&!r.crop&&im[i]&&dm(lm(e,r),i)}for(let t of r.pens??[]){if(!J[t.sp])continue;let n=Bp(t.i0,t.j0),r=Bp(t.i1,t.j1),i=n&&r&&Jm(e,n,r,t.sp,hm[t.purpose]?t.purpose:`meat`);i&&typeof i!=`string`&&(i.n=Math.max(0,Math.min(i.cap,Math.round(t.n)||0)),Object.assign(i,{age:+t.age||0,w:+t.w||i.w,feedLevel:Math.min(i.feedCap,Math.max(0,+t.feed||0)),waterOn:t.water!==!1,feederMode:[`auto`,`manual`,`off`].includes(t.feeder)?t.feeder:`auto`,climate:[`auto`,`cool`,`heat`,`off`].includes(t.climate)?t.climate:`auto`,feedAcc:+t.fa||0,prodAcc:+t.pa||0,milkTotal:+t.milk||0,temp:Number.isFinite(t.temp)?t.temp:i.temp}),Xm(e,i))}for(let t of r.hatch??[]){let n=Bp(t.i,t.j),r=n&&Yh.includes(t.sp)&&ng(e,n);r&&typeof r!=`string`&&Object.assign(r,{sp:t.sp,eggs:Math.max(0,Math.round(t.eggs)||0),day:+t.day||0,setT:+t.setT||37.5,setRH:+t.setRH||55,turn:t.turn!==!1,power:t.power!==!1,quality:Number.isFinite(t.q)?t.q:1,hatched:Math.max(0,Math.round(t.hatched)||0),temp:Number.isFinite(t.temp)?t.temp:r.temp,rh:Number.isFinite(t.rh)?t.rh:r.rh})}wh(Dp,2);for(let t of r.aqua??[]){if(!oh[t.sp])continue;let n=t.kind===`cage`?zh(e,xh.x+(+t.lx||0),xh.z+(+t.lz||0),t.sp,!0):(()=>{let n=Bp(t.i0,t.j0),r=Bp(t.i1,t.j1);return n&&r?Rh(e,n,r,t.sp):null})();if(!n||typeof n==`string`)continue;let r=(e,t)=>[`auto`,`on`,`off`].includes(e)?e:t;Object.assign(n,{n:Math.max(0,Math.min(n.cap,+t.n||0)),w:+t.w||n.w,age:+t.age||0,temp:Number.isFinite(t.temp)?t.temp:n.temp,do:Number.isFinite(t.do)?t.do:n.do,tan:Number.isFinite(t.tan)?t.tan:n.tan,path:Number.isFinite(t.path)?t.path:n.path,hopper:Math.min(n.hopperCap,Math.max(0,+t.hopper||0)),feederMode:r(t.fm,`auto`),aerMode:r(t.am,`auto`),pumpMode:r(t.pm,`auto`),uvMode:r(t.um,`auto`),feedAcc:+t.fa||0,gainAcc:+t.ga||0}),Hh(n)}for(let[t,n,i]of r.sensors??[]){let r=Bp(t,n);r&&pg[i]&&bg(e,r,i)}return a}catch(e){return console.error(`تعذر فتح المزرعة:`,e),null}}var nb={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},rb=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},ib=new Qo(-1,1,1,-1,0,1),ab=new class extends Nr{constructor(){super(),this.setAttribute(`position`,new xr([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new xr([0,2,0,0,2,0],2))}},ob=class{constructor(e){this._mesh=new G(ab,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ib)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},sb=class extends rb{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ka?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ua.clone(e.uniforms),this.material=new Ka({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ob(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},cb=class extends rb{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},lb=class extends rb{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},ub=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new B);this._width=n.width,this._height=n.height,t=new $t(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:y}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new sb(nb),this.copyPass.material.blending=0,this.timer=new cs}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}cb!==void 0&&(r instanceof cb?n=!0:r instanceof lb&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new B);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},db=class extends rb{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new W}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},fb={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new W(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},pb=class e extends rb{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new B(256,256):new B(e.x,e.y),this.clearColor=new W(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new $t(i,a,{type:y,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new $t(i,a,{type:y,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new $t(i,a,{type:y,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=fb;this.highPassUniforms=Ua.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ka({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new B(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ua.clone(nb.uniforms),this.blendMaterial=new Ka({uniforms:this.copyUniforms,vertexShader:nb.vertexShader,fragmentShader:nb.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new W,this._oldClearAlpha=1,this._basic=new ui,this._fsQuad=new ob(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new B(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new Ka({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new B(.5,.5)},direction:{value:new B(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Ka({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};pb.BlurDirectionX=new B(1,0),pb.BlurDirectionY=new B(0,1);var mb={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},hb=class extends rb{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ua.clone(mb.uniforms),this.material=new qa({name:mb.name,uniforms:this.uniforms,vertexShader:mb.vertexShader,fragmentShader:mb.fragmentShader}),this._fsQuad=new ob(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Bt.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},gb=class e extends G{constructor(){let t=e.SkyShader,n=new Ka({name:t.name,uniforms:Ua.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:1,depthWrite:!1});super(new wa(1,1,1),n),this.isSky=!0}};gb.SkyShader={name:`SkyShader`,uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new V},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( vSunDirection.y );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float showSunDisc;
		uniform float time;

		// gradient at a lattice corner; sinless hash so every GPU produces the same clouds
		vec2 gradient( vec2 i ) {
			vec3 p = fract( i.xyx * vec3( 0.1031, 0.1030, 0.0973 ) );
			p += dot( p, p.yzx + 33.33 );
			return fract( ( p.xx + p.yz ) * p.zy ) * 2.0 - 1.0;
		}

		// 2D gradient noise: isotropic lobes like Perlin at value-noise cost
		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			vec2 u = f * f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 ); // quintic fade
			float a = dot( gradient( i ), f );
			float b = dot( gradient( i + vec2( 1.0, 0.0 ) ), f - vec2( 1.0, 0.0 ) );
			float c = dot( gradient( i + vec2( 0.0, 1.0 ) ), f - vec2( 0.0, 1.0 ) );
			float d = dot( gradient( i + vec2( 1.0, 1.0 ) ), f - vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y ) * 1.6; // ~[-1,1]
		}

		// fbm; per-octave drift makes clouds billow instead of scrolling as a rigid stamp
		float fbm( vec2 p, float drift ) {
			float result = 0.0;
			float amplitude = 1.0;
			for ( int i = 0; i < 4; i ++ ) {
				result += amplitude * noise( p );
				amplitude *= 0.5;
				p = p * 2.0 + drift;
			}
			return result;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, direction.y ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - vSunDirection.y, 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisc = clamp( ( cosTheta - sunAngularDiameterCos ) * 50000.0, 0.0, 1.0 ) * showSunDisc;
			vec3 sundiscColor = ( 760.0 * sundisc ) * min( vSunE * Fex, 80.0 );

			vec3 texColor = ( Lin + L0 ) * 0.04 + sundiscColor + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Cloud density field
				float evolve = time * cloudSpeed * 300.0;
				float cloudNoise = clamp( fbm( cloudUV * 1000.0, evolve ) * 0.7 + 0.5, 0.0, 1.0 );

				// Large-scale coverage variation: clear gaps next to dense banks
				float region = noise( cloudUV * 300.0 ) * 0.37 + 0.5;
				float cov = clamp( cloudCoverage + ( region - 0.5 ) * 0.6, 0.0, 1.0 );

				// Carve clouds where noise rises above the coverage level
				float threshold = 1.0 - cov;
				float cloudMask = smoothstep( threshold, threshold + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.03 + 0.06 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting from the sky's own radiance
				float dayFactor = smoothstep( -0.08, 0.3, vSunDirection.y );
				vec3 sunColor = vSunE * Fex * 0.22 * 0.04; // 0.22 ~ albedo/pi, 0.04 = exposure; the aerial composite adds the eye-leg extinction
				vec3 skyAmbient = Lin * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

				// Beer-powder self-shadow from the sampled density
				float depth = max( 0.0, cloudNoise - threshold );
				float beer = exp( depth * -4.0 );
				float powder = 1.0 - beer * beer; // beer*beer == exp(-8*depth)
				float shade = mix( 0.45, 1.0, clamp( beer * powder * 2.6, 0.0, 1.0 ) ); // 2.6 = 1/0.385, normalizes beer*powder peak to 1

				// Henyey-Greenstein forward lobe ( g = 0.7 ): silver lining on rims toward the sun
				float silver = clamp( 0.51 / pow( 1.49 - cosTheta * 1.4, 1.5 ), 0.0, 3.0 ); // 0.51=1-g^2, 1.49=1+g^2, 1.4=2g
				float edge = cloudMask * ( 1.0 - cloudMask ) * 4.0;

				vec3 cloudColor = skyAmbient + sunColor * shade;
				cloudColor += sunColor * silver * edge * 0.6;
				cloudColor *= max( dayFactor, 0.03 );

				// Cloud opacity via Beer's law: density sets how solid the clouds get
				float alpha = ( 1.0 - exp( depth * cloudDensity * -12.0 ) ) * horizonFade;

				// Occlude the sun disc/glow behind opaque cloud
				texColor -= L0 * 0.04 * alpha;

				// Composite through the atmosphere so distant clouds dissolve into haze
				vec3 cloudAerial = mix( texColor, cloudColor, Fex );
				texColor = mix( texColor, cloudAerial, alpha );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var _b={ok:`#1de9ff`,warn:`#ffb300`,crit:`#ff1744`},vb=new W(399918),yb=new W(731722),bb=new W(53503),xb=new W(3800968),Sb=new W(16742938),Cb=new W(16722902),wb=null;function Tb(e,t){wb&&(e.remove(wb),wb.geometry.dispose());let n=[],r=Dp*2/2;for(let e=0;e<=Dp;e++){let t=-r+e*2;n.push(-r,.03,t,r,.03,t,t,.03,-r,t,.03,r)}let i=new Nr;i.setAttribute(`position`,new xr(n,3)),wb=new ua(i,new Qi({color:1960447,transparent:!0,opacity:.45})),wb.visible=t,e.add(wb)}function Eb(e,{ground:t,trees:n}){if(wb&&(wb.visible=e),t.visible=n.visible=!e,id(e),document.body.classList.toggle(`twin`,e),document.getElementById(`labels`).style.display=e?`block`:`none`,!e)for(let e of Op)e.mesh.material.emissive.setRGB(0,0,0)}function Db(e){for(let t of Op){t.mesh.material.map=bd.flat;let n=t.mesh.material.color;t.pen?n.copy(yb).lerp(Sb,Math.min(1,t.pen.stress)):t.hatch?n.copy(yb).lerp(Cb,.45):t.pond?n.copy(yb).lerp(bb,.45).lerp(Sb,t.pond.status===`crit`?.7:t.pond.status===`warn`?.3:0):(t.soil?n.copy(yb).lerp(bb,t.moisture):n.copy(vb),t.crop&&(n.lerp(xb,.3),t.stress===`water`?n.lerp(Sb,.55+.3*Math.sin(e/200)):t.stress===`temp`&&n.lerp(Cb,.5)))}}function Ob(){for(let e of Op)e.mesh.material.emissive.copy(e.mesh.material.color).multiplyScalar(.55)}var kb=e=>Math.max(0,Math.min(1,e)),Ab={soil_moisture:e=>e.tile.moisture,soil_temp:e=>e.value/45,air_temp:e=>(e.value+5)/50,air_rh:e=>e.value/100,light:e=>e.value/100,soil_ph:e=>(e.value-4)/6,soil_ec:e=>e.value/4,thermal:e=>(e.value-5)/43,aq_temp:e=>e.value/40,aq_do:e=>e.value/12,aq_nh3:e=>e.value/2,aq_ph:e=>(e.value-5)/5,aq_feed:e=>e.value/100,aq_weight:e=>e.tile.pond?e.value/oh[e.tile.pond.sp].wm:0,pen_temp:e=>e.value/45,pen_nh3:e=>e.value/60,pen_feed:e=>e.value/100,pen_weight:e=>e.tile.pen?e.value/J[e.tile.pen.sp].wm:0},jb=new Map,Mb=new V;function Nb(){let e=document.createElement(`div`);return e.className=`lbl`,e.innerHTML=`<b></b><small></small><div class="g"><i></i></div>`,document.getElementById(`labels`).append(e),{el:e,b:e.firstChild,small:e.children[1],g:e.children[2],bar:e.children[2].firstChild}}function Pb(e,t,n,r,i,a,o){let s=new Set([...t,...n,...r,...i,...a]);for(let[e,t]of jb)s.has(e)||(t.el.remove(),jb.delete(e));for(let t of s){let n=jb.get(t);n||(n=Nb(),jb.set(t,n),o=!0);let r=!!t.type,i=t.kind===`pen`,a=t.kind===`hatchery`,s=t.kind===`pond`||t.kind===`cage`;i||a||s?Mb.copy(t.center):Mb.copy(t.group.position),Mb.y+=i?4:a?4.2:s?2.4:r?pg[t.type].thermal?3.1:1.6:2.1,Mb.project(e);let c=Mb.z<1&&Math.abs(Mb.x)<1.15&&Math.abs(Mb.y)<1.15;if(n.el.style.display=c?`block`:`none`,!c)continue;let l=r?t.slot*46:0;if(n.el.style.left=((Mb.x*.5+.5)*innerWidth).toFixed(0)+`px`,n.el.style.top=((-Mb.y*.5+.5)*innerHeight-l).toFixed(0)+`px`,o){if(s){let e=oh[t.sp];n.el.style.setProperty(`--c`,_b[t.status]),n.b.textContent=`${e.icon} ${Math.round(t.n)}`,n.small.textContent=`${t.w<10?t.w.toFixed(1):Math.round(t.w)} غ · O₂ ${t.do.toFixed(1)} · ${t.temp.toFixed(0)}°`,n.g.style.display=`block`,n.bar.style.width=(kb(t.do/10)*100).toFixed(0)+`%`}else if(a){let e=J[t.sp];n.el.style.setProperty(`--c`,_b[t.status]),n.b.textContent=`🥚 ${t.eggs||t.hatched}`,n.small.textContent=t.eggs?`${e.name} · يوم ${t.day.toFixed(0)}/${e.inc} · ${t.temp.toFixed(1)}°`:t.hatched?`كتاكيت جاهزة`:`فارغ`,n.g.style.display=t.eggs?`block`:`none`,n.bar.style.width=(kb(t.day/e.inc)*100).toFixed(0)+`%`}else if(i){let e=J[t.sp];n.el.style.setProperty(`--c`,_b[t.status]),n.b.textContent=`${e.icon} ${t.n}/${t.cap}`,n.small.textContent=`${Math.round(t.w)} كغ · FCR ${t.fcr?t.fcr.toFixed(1):`—`} · ${t.temp.toFixed(0)}°`,n.g.style.display=`block`,n.bar.style.width=(kb(t.feedLevel/t.feedCap)*100).toFixed(0)+`%`}else if(r){let e=pg[t.type];n.el.style.setProperty(`--c`,_b[t.status]),n.b.textContent=t.value.toFixed(e.dec),n.small.textContent=`${e.icon} ${e.name} · ${e.unit}`,n.g.style.display=`block`,n.bar.style.width=(kb((Ab[t.type]??(()=>0))(t))*100).toFixed(0)+`%`}else n.el.style.setProperty(`--c`,t.on?_b.ok:`#6f93a8`),n.b.textContent=t.on?`💦`:`⏸`,n.small.textContent=im[t.mode],n.g.style.display=`none`}}}var Fb=`farm3d-farms`,Ib=`farm3d-current`,Lb=`farm3d-farm-`,Rb=`farm3d-save-v1`,zb=e=>{try{return localStorage.getItem(e)}catch{return null}},Bb=(e,t)=>{try{return localStorage.setItem(e,t),!0}catch{return!1}};function Vb(){try{let e=JSON.parse(zb(Fb));return Array.isArray(e)?e:[]}catch{return[]}}var Hb=e=>Bb(Fb,JSON.stringify(e)),Ub=()=>zb(Ib),Wb=e=>Bb(Ib,e),Gb=()=>`f`+Date.now().toString(36)+Math.random().toString(36).slice(2,5);function Kb(e,t,n){let r=Vb(),i=r.find(t=>t.id===e);return i?i.name=t:r.push({id:e,name:t}),Hb(r),Bb(Lb+e,JSON.stringify(n))}function qb(e){try{return JSON.parse(zb(Lb+e))}catch{return null}}function Jb(e){try{localStorage.removeItem(Lb+e)}catch{}Hb(Vb().filter(t=>t.id!==e))}function Yb(){if(!Vb().length&&zb(Rb))try{let e=Gb();Kb(e,`مزرعتي`,JSON.parse(zb(Rb))),Wb(e)}catch{}}var Q={tool:`till`,crop:`wheat`,sensorType:`soil_moisture`,speed:1,mode:`drone`,inventory:{},probe:null,panel:innerWidth>900?`sensors`:``,species:`cattle`,purpose:`meat`,fish:`tilapia`,selPen:null,thermal:!1,twin:!1,profile:{id:``,name:``,n:20,soil:`loam`,climate:`temperate`}},Xb=[`till`,`plant`,`water`,`harvest`,`clear`,`pen`,`pond`],Zb=document.getElementById(`c`),Qb=new qu({canvas:Zb,antialias:!0,alpha:!0});Qb.setPixelRatio(Math.min(devicePixelRatio,2)),Qb.shadowMap.enabled=!0,Qb.shadowMap.type=2,Qb.toneMapping=4,Qb.toneMappingExposure=1.05;var $=new zn;$.fog=new Rn(13627132,120,420);var $b=new qo(55,1,.1,1e3),ex={env:.12,expo0:.12,expo1:.36,sun:4.6,hemi:.55,turb:2,ray:2,mie:.004,moon:1.1,nightHemi:.7,nightExpo:.3},tx=700;function nx(){let e=new gb;return e.scale.setScalar(tx),Object.assign(e.material.uniforms.mieCoefficient,{value:.004}),e.material.uniforms.mieDirectionalG.value=.85,e.material.fragmentShader=e.material.fragmentShader.replace(`gl_FragColor = vec4( texColor, 1.0 );`,`gl_FragColor = vec4( texColor * 0.34, 1.0 );`),e}var rx=nx(),ix=nx(),ax=new zn;ax.add(ix),$.add(rx);var ox=null,sx=null,cx=-99;function lx(e){e-cx<6e3||(cx=e,ox??=new ec(Qb),sx?.dispose(),sx=ox.fromScene(ax,0,.1,1e3),$.environment=sx.texture,$.environmentIntensity=.3)}var ux=new Fo(16777215,12047280,1.2),dx=new es(16773846,2.2);dx.castShadow=!0,dx.shadow.mapSize.set(2048,2048),dx.shadow.normalBias=.05,$.add(ux,dx);var fx=new G(new wa(400,.5,400),new Ja({color:7576666,roughness:1,map:bd.groundBig}));fx.position.y=-.55,fx.receiveShadow=!0,$.add(fx);var px=Lg($),mx=Th($),hx=mx.decor,gx=()=>mx.buildDecor(Dp,2),_x=null;function vx(){try{_x??=new AudioContext;let e=_x.createOscillator(),t=_x.createGain();e.frequency.value=880,t.gain.value=.06,e.connect(t),t.connect(_x.destination),e.start(),e.stop(_x.currentTime+.18)}catch{}}var yx={ultra:{pr:3,shadow:4096,on:!0},high:{pr:2,shadow:2048,on:!0},medium:{pr:1,shadow:1024,on:!0},low:{pr:1,shadow:0,on:!1}},bx=[`ultra`,`high`,`medium`,`low`];Q.quality=(()=>{try{return yx[localStorage.getItem(`farm3d-quality`)]?localStorage.getItem(`farm3d-quality`):`high`}catch{return`high`}})();var xx=!1;function Sx(e){let t=yx[e];Q.quality=e;try{localStorage.setItem(`farm3d-quality`,e)}catch{}Qb.setPixelRatio(Math.min(devicePixelRatio,t.pr)),Qb.shadowMap.enabled=t.on,dx.castShadow=t.on,t.on&&(dx.shadow.mapSize.set(t.shadow,t.shadow),dx.shadow.map?.dispose(),dx.shadow.map=null),Cx?.setPixelRatio(Qb.getPixelRatio()),Qb.setSize(innerWidth,innerHeight,!1),Cx?.setSize(innerWidth,innerHeight),$.traverse(e=>{e.material&&[e.material].flat().forEach(e=>{e.needsUpdate=!0})})}var Cx=null;function wx(){return Cx||(Cx=new ub(Qb),Cx.addPass(new db($,$b)),Cx.addPass(new pb(new B(innerWidth,innerHeight),.6,.5,.5)),Cx.addPass(new hb),Cx.setPixelRatio(Qb.getPixelRatio()),Cx.setSize(innerWidth,innerHeight)),Cx}var Tx=[`#7ec8f0`,`#cfeefc`,`#fff4d6`].map(e=>new W(e)),Ex=[`#08142b`,`#16284a`,`#2a3a5e`].map(e=>new W(e)),Dx=[`#5a7fb0`,`#f3b27a`,`#ffd9a0`].map(e=>new W(e)),Ox=new W,kx=new W(8363263);function Ax(e){let t=Math.max(0,Math.sin(e.sunAngle)),n=Math.min(1,t*2.5),r=e.sunAngle;dx.position.set(Math.cos(r)*35,12+Math.abs(Math.sin(r))*30,15);let i=1-n;dx.intensity=.25+ex.sun*n*(1-.45*e.cloud)+ex.moon*i,ux.intensity=.2+ex.hemi*n+ex.nightHemi*i,ux.color.setHex(16777215).lerp(kx,i*.8);let a=new V(Math.cos(r)*.8,Math.sin(r),.3).normalize();for(let r of[rx,ix]){let i=r.material.uniforms;i.sunPosition.value.copy(a),i.turbidity.value=ex.turb+10*e.cloud,i.rayleigh.value=ex.ray+1.4*(1-n)*(t<.3?1:.2),i.mieCoefficient.value=ex.mie}Qb.toneMappingExposure=ex.expo0+ex.expo1*n+ex.nightExpo*i,$.environmentIntensity=ex.env,dx.color.setHSL(.11,.8,.8-.15*(1-n)).lerp(kx,i),Q.sky={k:n,dusk:1-Math.min(1,Math.abs(t-.15)*5)}}function jx(){let{k:e,dusk:t}=Q.sky,n=[0,1,2].map(n=>(Ox.copy(Ex[n]).lerp(Tx[n],e).lerp(Dx[n],Math.max(0,t)*.6),`#`+Ox.getHexString()));document.body.style.background=`linear-gradient(${n[0]},${n[1]} 60%,${n[2]})`,$.fog.color.set(n[2])}var Mx=Hy($b,Zb,Q);function Nx(e){Q.mode===`drone`?(Mx.orbit.target.set(e.x,0,e.z),$b.position.set(e.x+14,12,e.z+14),Mx.orbit.update()):($b.position.set(e.x+6,Q.mode===`walk`?1.7:10,e.z+8),$b.lookAt(e.x,1,e.z))}var Px=()=>{Qm($),ig($),Vh($),Q.selPen=null,[...rm].forEach(e=>um($,e)),[...mg].forEach(e=>xg($,e)),Q.probe=null};function Fx(e){let t=Dp*2*.8;Object.assign(dx.shadow.camera,{left:-t,right:t,top:t,bottom:-t,far:150}),dx.shadow.camera.updateProjectionMatrix(),gx(),px.build(Dp,2),Tb($,Q.twin),e&&Q.mode===`drone`&&(Mx.orbit.target.set(0,0,0),$b.position.set(Dp*.75,Dp*.8,Dp*.75))}function Ix(){if(!Q.profile.id)return!1;let e=$y(Q);return $v(Q.profile.id,Q.profile.name,e),Kb(Q.profile.id,Q.profile.name,e)}function Lx(e){let t=qb(e);Px();let n=t&&tb($,Q,t);return n?(Q.profile={id:e,...n},Wb(e),Fx(!0),!0):!1}function Rx(e,t){if(Q.profile.id&&Ix(),Px(),Wp(e.soil),Md(e.climate),Qp($,e.n),Jp(e.region),Nd(),Q.inventory={},Q.ledger=[],Q.records={},Q.profile={id:Gb(),...e},Wb(Q.profile.id),Fx(!0),t){let n=Mg($,e.climate,t);Q.panel=``,Ux.applyPanels(),Ux.toast(`🧭 `+n.join(` · `))}Ix()}function zx(e){let t=Q.profile.id;if(e.n!==Q.profile.n){let t=$y(Q);if(t.profile={...t.profile,...e},Px(),!tb($,Q,t))return Ux.toast(`تعذر تغيير المساحة`);Fx(!0)}else Md(e.climate),Wp(e.soil);Q.profile={id:t,...e},Ix(),Ux.toast(`تم تطبيق التعديل`)}function Bx(){Jb(Q.profile.id);let e=Vb();(!e.length||!Lx(e[0].id))&&(Q.profile.id=``,Rx({name:`مزرعتي`,n:20,soil:`loam`,climate:`iq_baghdad`,cell:2}))}function Vx(){Ix();let e=new Blob([JSON.stringify($y(Q),null,1)],{type:`application/json`}),t=document.createElement(`a`);t.href=URL.createObjectURL(e),t.download=`${Q.profile.name}.farm.json`,t.click(),setTimeout(()=>URL.revokeObjectURL(t.href),1e3)}function Hx(e){try{Ix(),Px();let t=tb($,Q,JSON.parse(e));if(!t)throw Error(`bad`);Q.profile={id:Gb(),...t},Wb(Q.profile.id),Fx(!0),Ix(),Ux.toast(`تم الاستيراد`)}catch{Lx(Q.profile.id),Ux.toast(`ملف غير صالح`)}}var Ux=Zy(Q,{setCamera:e=>Mx.setMode(e),farms:()=>({list:Vb(),current:Q.profile.id}),openFarm:e=>{Ix(),Lx(e)||Ux.toast(`تعذر فتح المزرعة`)},createFarm:Rx,editFarm:zx,deleteFarm:Bx,exportFarm:Vx,importFarm:Hx,removeSensor:e=>xg($,e),penAction:(e,t,n)=>({add:()=>$m($,t),sell:()=>eh($,t,Q.inventory),purpose:()=>th($,t,n),refill:()=>nh(t),remove:()=>(Zm($,t),`أُزيلت الحظيرة`)})[e](),hatchAction:(e,t)=>({species:()=>ag(t),load:()=>og(t,Q.inventory),move:()=>sg($,t),remove:()=>(rg($,t),`أُزيل المفقس`)})[e](),focus:e=>{Q.mode===`drone`?(Mx.orbit.target.set(e.x,0,e.z),$b.position.set(e.x+14,12,e.z+14),Mx.orbit.update()):($b.position.set(e.x+6,Q.mode===`walk`?1.7:10,e.z+8),$b.lookAt(e.x,1,e.z))},cycleQuality:()=>{xx=!0,Sx(bx[(bx.indexOf(Q.quality)+1)%bx.length])},aquaAction:(e,t,n)=>({restock:()=>Uh(t),harvest:()=>Wh(t,Q.inventory),refill:()=>Gh(t),remove:()=>(Bh($,t),t.kind===`cage`?`أُزيل القفص`:`أُزيل الحوض`),mode:()=>(t[n]=Ih(t[n]),``)})[e](),grind:()=>rh(Q.inventory),buyFeed:ih});await np([`palm`,`fruit_tree`,...Object.keys(J),...Object.keys(oh),`oak`,`oak2`,`pine`,`poplar`,`bush`,`rock`,`rock2`,`fence`,`shed_bay`,`trough`,`water_trough`,`fan_frame`,`fan_blades`,`sprinkler`,`soil_sensor`,`thermal_cam`,`hatchery`,`uv_unit`,`pump`,`feeder`,`aerator`,`barn`,`silo`,`tractor`,`windmill`,`hay`,...new Set(Object.values(up))]),`serviceWorker`in navigator&&navigator.serviceWorker.register(`./sw.js`),Yb();var Wx=Ub()??Vb()[0]?.id;Wx&&Lx(Wx)||Rx({name:`مزرعتي`,n:20,soil:`loam`,climate:`iq_baghdad`,cell:2}),window.__farm={ctl:Mx,backend:Uv,real:_g,createFarm:Rx,plantAt:(e,t,n)=>{let r=Bp(e,t);r?.soil&&!r.crop&&$p($,r,n)},tune:ex,skyMesh:rx,tiles:Op,state:Q,sensors:mg,weather:Dd,camera:$b,pens:jm,stock:Mm,hatcheries:Jh,units:Eh,makePond:(e,t,n,r,i)=>Rh($,Bp(e,t),Bp(n,r),i),makeCage:(e,t,n)=>zh($,e,t,n),makeHatchery:(e,t)=>ng($,Bp(e,t)),makePen:(e,t,n,r,i,a)=>Jm($,Bp(e,t),Bp(n,r),i,a)};var Gx=iy({state:Q,scene:$,focus:Nx,openPanel:e=>{Q.panel=e,Ux.applyPanels()},importFarm:e=>Hx(e),saveData:()=>$y(Q)});Gx.farms=()=>Ux.openModal();var Kx=document.createElement(`button`);Kx.className=`btn ib`,Kx.textContent=`🏠`,Kx.title=`لوحة المشروع`,Kx.onclick=()=>Gx.toggle(),document.querySelector(`#status .icons`)?.prepend(Kx),Uv.setFarmId(()=>Q.profile.id),qv(),Gx.show(!0);var qx=new G(new wa(1,.12,1),new ui({color:16777215,transparent:!0,opacity:.35}));qx.visible=!1,$.add(qx);var Jx=new G(new wa(1,.2,1),new ui({color:16771899,transparent:!0,opacity:.4}));Jx.visible=!1,$.add(Jx);var Yx=new Cs,Xx=new B,Zx={walk:14,fly:90};function Qx(){Yx.setFromCamera(Q.mode===`drone`?Xx:{x:0,y:0},$b);let e=Yx.intersectObjects([...kp,...rm.map(e=>e.group),...mg.map(e=>e.group)],!0);for(let t of e){if(Q.mode!==`drone`&&t.distance>Zx[Q.mode])return null;let e=t.object;for(;e&&!e.userData.tile;)e=e.parent;if(e)return e.userData.tile}return null}function $x(e){if(e.blocked)return`خارج حدود أرضك`;if((e.road||e.tank)&&Q.tool!==`clear`&&Q.tool!==`inspect`)return`طريق أو خزان: استعمل الممحاة لإزالته`;if((e.pen||e.hatch||e.pond)&&![`clear`,`inspect`,`sensor`].includes(Q.tool))return`هذا المربع جزء من حظيرة أو مفقس أو حوض`;switch(Q.tool){case`till`:return e.machine?`هناك رشاش في هذا المربع`:e.soil?`محروث بالفعل`:(e.soil=1,!0);case`plant`:return e.soil?e.crop?`مزروع بالفعل`:($p($,e,Q.crop),!0):`احرث الأرض أولاً`;case`water`:return e.soil?(e.moisture=Math.min(1,e.moisture+.5),!0):`احرث الأرض أولاً`;case`harvest`:return em($,e,Q.inventory);case`sprinkler`:return e.machine?`يوجد رشاش بالفعل`:e.crop?`أزل النبات أولاً`:(lm($,e),!0);case`control`:return e.machine?(fm(e.machine),ey(`sprinkler@${e.i},${e.j}`,e.machine.mode),Ux.toast(`الرشاش: `+im[e.machine.mode]),!0):`اضغط على رشاش`;case`sensor`:return pg[Q.sensorType].needsPen&&!e.pen?`ضع هذا المستشعر داخل حظيرة`:pg[Q.sensorType].needsPond&&!e.pond?`ضع هذا المستشعر داخل حوض سمكي`:bg($,e,Q.sensorType)?(Q.panel=`sensors`,Ux.applyPanels(),!0):`هذا المستشعر موجود في المربع`;case`hatchery`:{let t=ng($,e);return typeof t==`string`?t:(Q.panel=`livestock`,Ux.applyPanels(),Ux.toast(`بُني المفقس: حمّل بيضاً من لوحة الثروة الحيوانية`),!0)}case`inspect`:return Q.probe=e,e.pond?Q.panel=`aqua`:e.hatch?Q.panel=`livestock`:e.pen?(Q.selPen=e.pen,Q.panel=`livestock`):Q.panel=`sensors`,Ux.applyPanels(),!0;case`clear`:return e.pen?(Zm($,e.pen),Ux.toast(`أُزيلت الحظيرة`),!0):e.hatch?(rg($,e.hatch),Ux.toast(`أُزيل المفقس`),!0):e.pond?(Bh($,e.pond),Ux.toast(`أُزيل الحوض`),!0):e.tank?(Zp($,e),!0):e.road?(e.road=0,!0):(Gp($,e),Sg($,e),e.machine&&um($,e.machine),e.soil=0,!0)}}function eS(e,t){if(Q.tool===`pond`){let n=Rh($,e,t,Q.fish);return typeof n==`string`?Ux.toast(n):(Q.panel=`aqua`,Ux.applyPanels(),Ux.toast(`حوض ${oh[n.sp].name}: سعة ${n.cap} سمكة عند وزن السوق`))}if(Q.tool===`pen`){let n=Jm($,e,t,Q.species,Q.purpose);return typeof n==`string`?Ux.toast(n):(Q.selPen=n,Q.panel=`livestock`,Ux.applyPanels(),Ux.toast(`حظيرة ${J[n.sp].name}: سعة ${n.cap}`))}let n=0,r=``;for(let i=Math.min(e.i,t.i);i<=Math.max(e.i,t.i);i++)for(let a=Math.min(e.j,t.j);a<=Math.max(e.j,t.j);a++){let e=$x(Bp(i,a));e===!0?n++:r||=e}n>1?Ux.toast(`تم على ${n} مربع`):!n&&r&&Ux.toast(r)}var tS=null,nS=e=>Xx.set(e.clientX/innerWidth*2-1,-(e.clientY/innerHeight)*2+1);Zb.addEventListener(`contextmenu`,e=>e.preventDefault());var rS=()=>Q.mode!==`drone`&&(Mx.look.isLocked||Mx.touch),iS=new Set,aS=null,oS=0,sS=()=>{clearTimeout(oS),oS=0};Zb.addEventListener(`pointerdown`,e=>{e.pointerType===`touch`&&(iS.add(e.pointerId),aS=iS.size===1?{id:e.pointerId,x:e.clientX,y:e.clientY,t:performance.now()}:null,sS(),aS&&Q.mode===`drone`&&Xb.includes(Q.tool)&&(oS=setTimeout(()=>{oS=0,aS=null,nS(e);let t=Qx();t&&(tS={a:t,b:t},Mx.orbit.enabled=!1,navigator.vibrate?.(30))},450)))}),Zb.addEventListener(`pointermove`,e=>{oS&&aS&&Math.hypot(e.clientX-aS.x,e.clientY-aS.y)>10&&sS()}),addEventListener(`pointerup`,e=>{if(e.pointerType!==`touch`)return;sS(),Q.mode===`drone`&&(Mx.orbit.enabled=!0);let t=aS&&aS.id===e.pointerId&&iS.size===1&&performance.now()-aS.t<400&&Math.hypot(e.clientX-aS.x,e.clientY-aS.y)<10;iS.delete(e.pointerId),aS=null,t&&(Q.mode===`drone`||e.clientX>innerWidth/2)&&cS(e)}),addEventListener(`pointercancel`,e=>{iS.delete(e.pointerId),aS=null,sS(),Q.mode===`drone`&&(Mx.orbit.enabled=!0)}),Zb.addEventListener(`pointerdown`,e=>{e.pointerType!==`touch`&&cS(e)});function cS(e){if(e.button!==0)return;if(Q.mode!==`drone`){if(!Mx.look.isLocked&&!Mx.touch)return Mx.lock()}else nS(e);if(Q.tool===`cage`){Yx.setFromCamera(Q.mode===`drone`?Xx:{x:0,y:0},$b);let e=mx.lakeMesh()&&Yx.intersectObject(mx.lakeMesh())[0];if(!e)return Ux.toast(`اضغط على سطح البحيرة (خارج المزرعة، ابحث عن الماء الأزرق)`);let t=zh($,e.point.x,e.point.z,Q.fish);return typeof t==`string`?Ux.toast(t):(Q.panel=`aqua`,Ux.applyPanels(),Ux.toast(`وُضع قفص ${oh[t.sp].name}`))}let t=Qx();if(t){if(Xb.includes(Q.tool))tS={a:t,b:t};else{let e=$x(t);e!==!0&&Ux.toast(e)}}}addEventListener(`pointerup`,e=>{tS&&(Q.mode===`drone`&&nS(e),tS.b=Qx()??tS.b,eS(tS.a,tS.b)),tS=null}),Zb.addEventListener(`pointermove`,e=>{Q.mode===`drone`&&nS(e)}),Zb.addEventListener(`wheel`,e=>{if(!rS())return;e.preventDefault();let t=Wy[(Wy.findIndex(e=>e.id===Q.tool)+(e.deltaY>0?1:-1)+Wy.length)%Wy.length];Q.tool=t.id,Ux.drawBars(),Ux.toast(t.label)},{passive:!1}),addEventListener(`keydown`,e=>{if(e.target.tagName===`INPUT`||e.target.tagName===`SELECT`)return;e.code===`KeyC`&&Mx.cycle(),e.code===`KeyT`&&(Q.twin=!Q.twin);let t=e.key===`0`?10:e.key===`-`?11:e.key===`=`?12:e.key===`\\`?13:Number(e.key);t>=1&&t<=Wy.length&&(Q.tool=Wy[t-1].id,Ux.drawBars())});var lS=document.getElementById(`cross`),uS=document.getElementById(`lockhint`),dS=!1;function fS(){Qb.setSize(innerWidth,innerHeight,!1),$b.aspect=innerWidth/innerHeight,$b.updateProjectionMatrix(),Cx?.setSize(innerWidth,innerHeight)}addEventListener(`resize`,fS),fS(),Sx(Q.quality),setInterval(Ix,5e3),addEventListener(`beforeunload`,Ix);var pS=performance.now(),mS=0,hS=0,gS=0,_S=0;function vS(e){let t=Math.max(0,Math.min((e-pS)/1e3,.1)),n=(e-pS)/1e3;if(pS=e,_S+=t,hS+=Math.max(0,n),gS++,_S>2&&hS>=3){let e=gS/hS;hS=gS=0;let t=bx.indexOf(Q.quality);e<18&&!xx&&t<bx.length-1&&(Sx(bx[t+1]),Ux.toast(`الجهاز بطيء (${e.toFixed(0)} إطار/ث): خُفّضت الجودة تلقائياً`))}else hS>=3&&(hS=gS=0);let r=t*Q.speed;Pd(r),nm(r,Dd),mm(r),ah(r,Dd,Q.inventory,t),cg(r,Dd),Kh(r,Dd,t),wg(t),Q.twin!==dS&&(dS=Q.twin,Eb(dS,{ground:fx,trees:hx}),mx.setTwin(dS),rx.visible=!dS,$.environment=dS?null:sx?.texture??null,$.background=dS?new W(198415):null,dS&&$.fog.color.set(198415)),dS&&Db(e),Q.thermal&&kg(),dS&&Ob(),Ax(Dd),mx.update($b,Dd,Q.sky.k,t),px.root.visible=!dS,px.update(dS?0:1-Q.sky.k,$b),rx.position.copy($b.position),xd(e/1e3),dS||lx(e),dS&&(dx.intensity=.5,ux.intensity=.9),Mx.update(t);let i=Qx();if(tS&&i&&(tS.b=i),tS){let e=Math.abs(tS.a.i-tS.b.i)+1,t=Math.abs(tS.a.j-tS.b.j)+1;Jx.visible=!0,Jx.scale.set(e*2,1,t*2),Jx.position.set((zp(tS.a.i)+zp(tS.b.i))/2,.1,(zp(tS.a.j)+zp(tS.b.j))/2)}else Jx.visible=!1;qx.visible=!!i&&!tS,i&&(qx.scale.set(2,1,2),qx.position.set(zp(i.i),.1,zp(i.j))),mS+=t;let a=mS>.2;if(dS&&Pb($b,mg,rm,jm,Jh,Eh,a),a){mS=0,Ux.refresh(i,Dd),Ux.renderSensors(mg,Q.probe&&!Q.probe.pen&&Tg(Q.probe)),Ux.renderLivestock(jm,Jh),Ux.renderAqua(Eh);let e=Vg({sensors:mg,pens:jm,hatcheries:Jh,units:Eh});Hg(e,`يوم ${Dd.day} ${String(Math.floor(Dd.hour)).padStart(2,`0`)}:${String(Math.floor(Dd.hour%1*60)).padStart(2,`0`)}`,()=>Q.sound&&vx()),Ux.renderAlerts(e,Rg),lS.style.display=rS()?`block`:`none`,uS.style.display=Q.mode!==`drone`&&!Mx.look.isLocked&&!Mx.touch?`block`:`none`,dS||jx()}dS?wx().render():Qb.render($,$b),requestAnimationFrame(vS)}requestAnimationFrame(vS);