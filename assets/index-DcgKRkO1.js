var Uv=Object.defineProperty;var Ov=(i,t,e)=>t in i?Uv(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var we=(i,t,e)=>Ov(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uh="169",Fv=0,vd=1,Vv=2,Am=1,wm=2,Ri=3,cr=0,In=1,Pi=2,nr=0,Cs=1,yd=2,Ed=3,Sd=4,Bv=5,Ir=100,kv=101,zv=102,Hv=103,Gv=104,Wv=200,qv=201,Xv=202,$v=203,ru=204,su=205,jv=206,Kv=207,Yv=208,Qv=209,Zv=210,Jv=211,t0=212,e0=213,n0=214,ou=0,au=1,lu=2,Bs=3,cu=4,uu=5,hu=6,fu=7,bm=0,i0=1,r0=2,ir=0,s0=1,o0=2,a0=3,Rm=4,l0=5,c0=6,u0=7,Cm=300,ks=301,zs=302,du=303,pu=304,kl=306,mu=1e3,Dr=1001,gu=1002,Gn=1003,h0=1004,Sa=1005,ti=1006,pc=1007,Lr=1008,Oi=1009,Im=1010,Pm=1011,Vo=1012,Oh=1013,Hr=1014,Di=1015,Qo=1016,Fh=1017,Vh=1018,Hs=1020,Dm=35902,Lm=1021,Nm=1022,ni=1023,Um=1024,Om=1025,Is=1026,Gs=1027,Fm=1028,Bh=1029,Vm=1030,kh=1031,zh=1033,Qa=33776,Za=33777,Ja=33778,tl=33779,_u=35840,vu=35841,yu=35842,Eu=35843,Su=36196,xu=37492,Tu=37496,Mu=37808,Au=37809,wu=37810,bu=37811,Ru=37812,Cu=37813,Iu=37814,Pu=37815,Du=37816,Lu=37817,Nu=37818,Uu=37819,Ou=37820,Fu=37821,el=36492,Vu=36494,Bu=36495,Bm=36283,ku=36284,zu=36285,Hu=36286,f0=3200,d0=3201,km=0,p0=1,Zi="",ci="srgb",_r="srgb-linear",Hh="display-p3",zl="display-p3-linear",fl="linear",be="srgb",dl="rec709",pl="p3",ss=7680,xd=519,m0=512,g0=513,_0=514,zm=515,v0=516,y0=517,E0=518,S0=519,Gu=35044,Td="300 es",Li=2e3,ml=2001;class Zs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mc=Math.PI/180,Wu=180/Math.PI;function rr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]+"-"+gn[t&255]+gn[t>>8&255]+"-"+gn[t>>16&15|64]+gn[t>>24&255]+"-"+gn[e&63|128]+gn[e>>8&255]+"-"+gn[e>>16&255]+gn[e>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function Rn(i,t,e){return Math.max(t,Math.min(e,i))}function x0(i,t){return(i%t+t)%t}function gc(i,t,e){return(1-e)*i+e*t}function fi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ee(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Jt{constructor(t=0,e=0){Jt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Rn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,n,r,s,o,a,c,u){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,u)}set(t,e,n,r,s,o,a,c,u){const h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],u=n[1],h=n[4],f=n[7],d=n[2],m=n[5],S=n[8],M=r[0],g=r[3],v=r[6],D=r[1],R=r[4],N=r[7],z=r[2],U=r[5],x=r[8];return s[0]=o*M+a*D+c*z,s[3]=o*g+a*R+c*U,s[6]=o*v+a*N+c*x,s[1]=u*M+h*D+f*z,s[4]=u*g+h*R+f*U,s[7]=u*v+h*N+f*x,s[2]=d*M+m*D+S*z,s[5]=d*g+m*R+S*U,s[8]=d*v+m*N+S*x,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],u=t[7],h=t[8];return e*o*h-e*a*u-n*s*h+n*a*c+r*s*u-r*o*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],u=t[7],h=t[8],f=h*o-a*u,d=a*c-h*s,m=u*s-o*c,S=e*f+n*d+r*m;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/S;return t[0]=f*M,t[1]=(r*u-h*n)*M,t[2]=(a*n-r*o)*M,t[3]=d*M,t[4]=(h*e-r*c)*M,t[5]=(r*s-a*e)*M,t[6]=m*M,t[7]=(n*c-u*e)*M,t[8]=(o*e-n*s)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*o+u*a)+o+t,-r*u,r*c,-r*(-u*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(_c.makeScale(t,e)),this}rotate(t){return this.premultiply(_c.makeRotation(-t)),this}translate(t,e){return this.premultiply(_c.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const _c=new Yt;function Hm(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function gl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function T0(){const i=gl("canvas");return i.style.display="block",i}const Md={};function nl(i){i in Md||(Md[i]=!0,console.warn(i))}function M0(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function A0(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function w0(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ad=new Yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wd=new Yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),vo={[_r]:{transfer:fl,primaries:dl,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[ci]:{transfer:be,primaries:dl,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[zl]:{transfer:fl,primaries:pl,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(wd),fromReference:i=>i.applyMatrix3(Ad)},[Hh]:{transfer:be,primaries:pl,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(wd),fromReference:i=>i.applyMatrix3(Ad).convertLinearToSRGB()}},b0=new Set([_r,zl]),_e={enabled:!0,_workingColorSpace:_r,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!b0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=vo[t].toReference,r=vo[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return vo[i].primaries},getTransfer:function(i){return i===Zi?fl:vo[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(vo[t].luminanceCoefficients)}};function Ps(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let os;class R0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{os===void 0&&(os=gl("canvas")),os.width=t.width,os.height=t.height;const n=os.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=os}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=gl("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ps(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ps(e[n]/255)*255):e[n]=Ps(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let C0=0;class Gm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=rr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(yc(r[o].image)):s.push(yc(r[o]))}else s=yc(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function yc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?R0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let I0=0;class wn extends Zs{constructor(t=wn.DEFAULT_IMAGE,e=wn.DEFAULT_MAPPING,n=Dr,r=Dr,s=ti,o=Lr,a=ni,c=Oi,u=wn.DEFAULT_ANISOTROPY,h=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=rr(),this.name="",this.source=new Gm(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Jt(0,0),this.repeat=new Jt(1,1),this.center=new Jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mu:t.x=t.x-Math.floor(t.x);break;case Dr:t.x=t.x<0?0:1;break;case gu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mu:t.y=t.y-Math.floor(t.y);break;case Dr:t.y=t.y<0?0:1;break;case gu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Cm;wn.DEFAULT_ANISOTROPY=1;class Ve{constructor(t=0,e=0,n=0,r=1){Ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,u=c[0],h=c[4],f=c[8],d=c[1],m=c[5],S=c[9],M=c[2],g=c[6],v=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-M)<.01&&Math.abs(S-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+M)<.1&&Math.abs(S+g)<.1&&Math.abs(u+m+v-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const R=(u+1)/2,N=(m+1)/2,z=(v+1)/2,U=(h+d)/4,x=(f+M)/4,T=(S+g)/4;return R>N&&R>z?R<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(R),r=U/n,s=x/n):N>z?N<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(N),n=U/r,s=T/r):z<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(z),n=x/s,r=T/s),this.set(n,r,s,e),this}let D=Math.sqrt((g-S)*(g-S)+(f-M)*(f-M)+(d-h)*(d-h));return Math.abs(D)<.001&&(D=1),this.x=(g-S)/D,this.y=(f-M)/D,this.z=(d-h)/D,this.w=Math.acos((u+m+v-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class P0 extends Zs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ve(0,0,t,e),this.scissorTest=!1,this.viewport=new Ve(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new wn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Gm(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gr extends P0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Wm extends wn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class D0 extends wn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class An{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let c=n[r+0],u=n[r+1],h=n[r+2],f=n[r+3];const d=s[o+0],m=s[o+1],S=s[o+2],M=s[o+3];if(a===0){t[e+0]=c,t[e+1]=u,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=S,t[e+3]=M;return}if(f!==M||c!==d||u!==m||h!==S){let g=1-a;const v=c*d+u*m+h*S+f*M,D=v>=0?1:-1,R=1-v*v;if(R>Number.EPSILON){const z=Math.sqrt(R),U=Math.atan2(z,v*D);g=Math.sin(g*U)/z,a=Math.sin(a*U)/z}const N=a*D;if(c=c*g+d*N,u=u*g+m*N,h=h*g+S*N,f=f*g+M*N,g===1-a){const z=1/Math.sqrt(c*c+u*u+h*h+f*f);c*=z,u*=z,h*=z,f*=z}}t[e]=c,t[e+1]=u,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],c=n[r+1],u=n[r+2],h=n[r+3],f=s[o],d=s[o+1],m=s[o+2],S=s[o+3];return t[e]=a*S+h*f+c*m-u*d,t[e+1]=c*S+h*d+u*f-a*m,t[e+2]=u*S+h*m+a*d-c*f,t[e+3]=h*S-a*f-c*d-u*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,u=a(n/2),h=a(r/2),f=a(s/2),d=c(n/2),m=c(r/2),S=c(s/2);switch(o){case"XYZ":this._x=d*h*f+u*m*S,this._y=u*m*f-d*h*S,this._z=u*h*S+d*m*f,this._w=u*h*f-d*m*S;break;case"YXZ":this._x=d*h*f+u*m*S,this._y=u*m*f-d*h*S,this._z=u*h*S-d*m*f,this._w=u*h*f+d*m*S;break;case"ZXY":this._x=d*h*f-u*m*S,this._y=u*m*f+d*h*S,this._z=u*h*S+d*m*f,this._w=u*h*f-d*m*S;break;case"ZYX":this._x=d*h*f-u*m*S,this._y=u*m*f+d*h*S,this._z=u*h*S-d*m*f,this._w=u*h*f+d*m*S;break;case"YZX":this._x=d*h*f+u*m*S,this._y=u*m*f+d*h*S,this._z=u*h*S-d*m*f,this._w=u*h*f-d*m*S;break;case"XZY":this._x=d*h*f-u*m*S,this._y=u*m*f-d*h*S,this._z=u*h*S+d*m*f,this._w=u*h*f+d*m*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],u=e[2],h=e[6],f=e[10],d=n+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(h-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Rn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,u=e._z,h=e._w;return this._x=n*h+o*a+r*u-s*c,this._y=r*h+o*c+s*a-n*u,this._z=s*h+o*u+n*c-r*a,this._w=o*h-n*a-r*c-s*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const u=Math.sqrt(c),h=Math.atan2(u,a),f=Math.sin((1-e)*h)/u,d=Math.sin(e*h)/u;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(t=0,e=0,n=0){H.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,u=2*(o*r-a*n),h=2*(a*e-s*r),f=2*(s*n-o*e);return this.x=e+c*u+o*f-a*h,this.y=n+c*h+a*u-s*f,this.z=r+c*f+s*h-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ec.copy(this).projectOnVector(t),this.sub(Ec)}reflect(t){return this.sub(Ec.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Rn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ec=new H,bd=new An;class Zo{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Qn):Qn.fromBufferAttribute(s,o),Qn.applyMatrix4(t.matrixWorld),this.expandByPoint(Qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xa.copy(n.boundingBox)),xa.applyMatrix4(t.matrixWorld),this.union(xa)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qn),Qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(yo),Ta.subVectors(this.max,yo),as.subVectors(t.a,yo),ls.subVectors(t.b,yo),cs.subVectors(t.c,yo),qi.subVectors(ls,as),Xi.subVectors(cs,ls),Sr.subVectors(as,cs);let e=[0,-qi.z,qi.y,0,-Xi.z,Xi.y,0,-Sr.z,Sr.y,qi.z,0,-qi.x,Xi.z,0,-Xi.x,Sr.z,0,-Sr.x,-qi.y,qi.x,0,-Xi.y,Xi.x,0,-Sr.y,Sr.x,0];return!Sc(e,as,ls,cs,Ta)||(e=[1,0,0,0,1,0,0,0,1],!Sc(e,as,ls,cs,Ta))?!1:(Ma.crossVectors(qi,Xi),e=[Ma.x,Ma.y,Ma.z],Sc(e,as,ls,cs,Ta))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ti=[new H,new H,new H,new H,new H,new H,new H,new H],Qn=new H,xa=new Zo,as=new H,ls=new H,cs=new H,qi=new H,Xi=new H,Sr=new H,yo=new H,Ta=new H,Ma=new H,xr=new H;function Sc(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){xr.fromArray(i,s);const a=r.x*Math.abs(xr.x)+r.y*Math.abs(xr.y)+r.z*Math.abs(xr.z),c=t.dot(xr),u=e.dot(xr),h=n.dot(xr);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>a)return!1}return!0}const L0=new Zo,Eo=new H,xc=new H;class Gh{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):L0.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Eo.subVectors(t,this.center);const e=Eo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Eo,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Eo.copy(t.center).add(xc)),this.expandByPoint(Eo.copy(t.center).sub(xc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mi=new H,Tc=new H,Aa=new H,$i=new H,Mc=new H,wa=new H,Ac=new H;class qm{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Mi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mi.copy(this.origin).addScaledVector(this.direction,e),Mi.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Tc.copy(t).add(e).multiplyScalar(.5),Aa.copy(e).sub(t).normalize(),$i.copy(this.origin).sub(Tc);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Aa),a=$i.dot(this.direction),c=-$i.dot(Aa),u=$i.lengthSq(),h=Math.abs(1-o*o);let f,d,m,S;if(h>0)if(f=o*c-a,d=o*a-c,S=s*h,f>=0)if(d>=-S)if(d<=S){const M=1/h;f*=M,d*=M,m=f*(f+o*d+2*a)+d*(o*f+d+2*c)+u}else d=s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+u;else d=-s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+u;else d<=-S?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+u):d<=S?(f=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Tc).addScaledVector(Aa,d),m}intersectSphere(t,e){Mi.subVectors(t.center,this.origin);const n=Mi.dot(this.direction),r=Mi.dot(Mi)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,c;const u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(n=(t.min.x-d.x)*u,r=(t.max.x-d.x)*u):(n=(t.max.x-d.x)*u,r=(t.min.x-d.x)*u),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Mi)!==null}intersectTriangle(t,e,n,r,s){Mc.subVectors(e,t),wa.subVectors(n,t),Ac.crossVectors(Mc,wa);let o=this.direction.dot(Ac),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$i.subVectors(this.origin,t);const c=a*this.direction.dot(wa.crossVectors($i,wa));if(c<0)return null;const u=a*this.direction.dot(Mc.cross($i));if(u<0||c+u>o)return null;const h=-a*$i.dot(Ac);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pe{constructor(t,e,n,r,s,o,a,c,u,h,f,d,m,S,M,g){Pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,u,h,f,d,m,S,M,g)}set(t,e,n,r,s,o,a,c,u,h,f,d,m,S,M,g){const v=this.elements;return v[0]=t,v[4]=e,v[8]=n,v[12]=r,v[1]=s,v[5]=o,v[9]=a,v[13]=c,v[2]=u,v[6]=h,v[10]=f,v[14]=d,v[3]=m,v[7]=S,v[11]=M,v[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/us.setFromMatrixColumn(t,0).length(),s=1/us.setFromMatrixColumn(t,1).length(),o=1/us.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),u=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=o*h,m=o*f,S=a*h,M=a*f;e[0]=c*h,e[4]=-c*f,e[8]=u,e[1]=m+S*u,e[5]=d-M*u,e[9]=-a*c,e[2]=M-d*u,e[6]=S+m*u,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,m=c*f,S=u*h,M=u*f;e[0]=d+M*a,e[4]=S*a-m,e[8]=o*u,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=m*a-S,e[6]=M+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,m=c*f,S=u*h,M=u*f;e[0]=d-M*a,e[4]=-o*f,e[8]=S+m*a,e[1]=m+S*a,e[5]=o*h,e[9]=M-d*a,e[2]=-o*u,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,m=o*f,S=a*h,M=a*f;e[0]=c*h,e[4]=S*u-m,e[8]=d*u+M,e[1]=c*f,e[5]=M*u+d,e[9]=m*u-S,e[2]=-u,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,m=o*u,S=a*c,M=a*u;e[0]=c*h,e[4]=M-d*f,e[8]=S*f+m,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-u*h,e[6]=m*f+S,e[10]=d-M*f}else if(t.order==="XZY"){const d=o*c,m=o*u,S=a*c,M=a*u;e[0]=c*h,e[4]=-f,e[8]=u*h,e[1]=d*f+M,e[5]=o*h,e[9]=m*f-S,e[2]=S*f-m,e[6]=a*h,e[10]=M*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(N0,t,U0)}lookAt(t,e,n){const r=this.elements;return Nn.subVectors(t,e),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),ji.crossVectors(n,Nn),ji.lengthSq()===0&&(Math.abs(n.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),ji.crossVectors(n,Nn)),ji.normalize(),ba.crossVectors(Nn,ji),r[0]=ji.x,r[4]=ba.x,r[8]=Nn.x,r[1]=ji.y,r[5]=ba.y,r[9]=Nn.y,r[2]=ji.z,r[6]=ba.z,r[10]=Nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],u=n[12],h=n[1],f=n[5],d=n[9],m=n[13],S=n[2],M=n[6],g=n[10],v=n[14],D=n[3],R=n[7],N=n[11],z=n[15],U=r[0],x=r[4],T=r[8],C=r[12],_=r[1],y=r[5],P=r[9],A=r[13],X=r[2],Q=r[6],j=r[10],nt=r[14],Y=r[3],yt=r[7],Et=r[11],Rt=r[15];return s[0]=o*U+a*_+c*X+u*Y,s[4]=o*x+a*y+c*Q+u*yt,s[8]=o*T+a*P+c*j+u*Et,s[12]=o*C+a*A+c*nt+u*Rt,s[1]=h*U+f*_+d*X+m*Y,s[5]=h*x+f*y+d*Q+m*yt,s[9]=h*T+f*P+d*j+m*Et,s[13]=h*C+f*A+d*nt+m*Rt,s[2]=S*U+M*_+g*X+v*Y,s[6]=S*x+M*y+g*Q+v*yt,s[10]=S*T+M*P+g*j+v*Et,s[14]=S*C+M*A+g*nt+v*Rt,s[3]=D*U+R*_+N*X+z*Y,s[7]=D*x+R*y+N*Q+z*yt,s[11]=D*T+R*P+N*j+z*Et,s[15]=D*C+R*A+N*nt+z*Rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],u=t[13],h=t[2],f=t[6],d=t[10],m=t[14],S=t[3],M=t[7],g=t[11],v=t[15];return S*(+s*c*f-r*u*f-s*a*d+n*u*d+r*a*m-n*c*m)+M*(+e*c*m-e*u*d+s*o*d-r*o*m+r*u*h-s*c*h)+g*(+e*u*f-e*a*m-s*o*f+n*o*m+s*a*h-n*u*h)+v*(-r*a*h-e*c*f+e*a*d+r*o*f-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],u=t[7],h=t[8],f=t[9],d=t[10],m=t[11],S=t[12],M=t[13],g=t[14],v=t[15],D=f*g*u-M*d*u+M*c*m-a*g*m-f*c*v+a*d*v,R=S*d*u-h*g*u-S*c*m+o*g*m+h*c*v-o*d*v,N=h*M*u-S*f*u+S*a*m-o*M*m-h*a*v+o*f*v,z=S*f*c-h*M*c-S*a*d+o*M*d+h*a*g-o*f*g,U=e*D+n*R+r*N+s*z;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const x=1/U;return t[0]=D*x,t[1]=(M*d*s-f*g*s-M*r*m+n*g*m+f*r*v-n*d*v)*x,t[2]=(a*g*s-M*c*s+M*r*u-n*g*u-a*r*v+n*c*v)*x,t[3]=(f*c*s-a*d*s-f*r*u+n*d*u+a*r*m-n*c*m)*x,t[4]=R*x,t[5]=(h*g*s-S*d*s+S*r*m-e*g*m-h*r*v+e*d*v)*x,t[6]=(S*c*s-o*g*s-S*r*u+e*g*u+o*r*v-e*c*v)*x,t[7]=(o*d*s-h*c*s+h*r*u-e*d*u-o*r*m+e*c*m)*x,t[8]=N*x,t[9]=(S*f*s-h*M*s-S*n*m+e*M*m+h*n*v-e*f*v)*x,t[10]=(o*M*s-S*a*s+S*n*u-e*M*u-o*n*v+e*a*v)*x,t[11]=(h*a*s-o*f*s-h*n*u+e*f*u+o*n*m-e*a*m)*x,t[12]=z*x,t[13]=(h*M*r-S*f*r+S*n*d-e*M*d-h*n*g+e*f*g)*x,t[14]=(S*a*r-o*M*r-S*n*c+e*M*c+o*n*g-e*a*g)*x,t[15]=(o*f*r-h*a*r+h*n*c-e*f*c-o*n*d+e*a*d)*x,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,u=s*o,h=s*a;return this.set(u*o+n,u*a-r*c,u*c+r*a,0,u*a+r*c,h*a+n,h*c-r*o,0,u*c-r*a,h*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,u=s+s,h=o+o,f=a+a,d=s*u,m=s*h,S=s*f,M=o*h,g=o*f,v=a*f,D=c*u,R=c*h,N=c*f,z=n.x,U=n.y,x=n.z;return r[0]=(1-(M+v))*z,r[1]=(m+N)*z,r[2]=(S-R)*z,r[3]=0,r[4]=(m-N)*U,r[5]=(1-(d+v))*U,r[6]=(g+D)*U,r[7]=0,r[8]=(S+R)*x,r[9]=(g-D)*x,r[10]=(1-(d+M))*x,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=us.set(r[0],r[1],r[2]).length();const o=us.set(r[4],r[5],r[6]).length(),a=us.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Zn.copy(this);const u=1/s,h=1/o,f=1/a;return Zn.elements[0]*=u,Zn.elements[1]*=u,Zn.elements[2]*=u,Zn.elements[4]*=h,Zn.elements[5]*=h,Zn.elements[6]*=h,Zn.elements[8]*=f,Zn.elements[9]*=f,Zn.elements[10]*=f,e.setFromRotationMatrix(Zn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=Li){const c=this.elements,u=2*s/(e-t),h=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r);let m,S;if(a===Li)m=-(o+s)/(o-s),S=-2*o*s/(o-s);else if(a===ml)m=-o/(o-s),S=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Li){const c=this.elements,u=1/(e-t),h=1/(n-r),f=1/(o-s),d=(e+t)*u,m=(n+r)*h;let S,M;if(a===Li)S=(o+s)*f,M=-2*f;else if(a===ml)S=s*f,M=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=M,c[14]=-S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const us=new H,Zn=new Pe,N0=new H(0,0,0),U0=new H(1,1,1),ji=new H,ba=new H,Nn=new H,Rd=new Pe,Cd=new An;class nn{constructor(t=0,e=0,n=0,r=nn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],u=r[5],h=r[9],f=r[2],d=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Rn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Rn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Rd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cd.setFromEuler(this),this.setFromQuaternion(Cd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nn.DEFAULT_ORDER="XYZ";class Wh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let O0=0;const Id=new H,hs=new An,Ai=new Pe,Ra=new H,So=new H,F0=new H,V0=new An,Pd=new H(1,0,0),Dd=new H(0,1,0),Ld=new H(0,0,1),Nd={type:"added"},B0={type:"removed"},fs={type:"childadded",child:null},wc={type:"childremoved",child:null};class cn extends Zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const t=new H,e=new nn,n=new An,r=new H(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Yt}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(Pd,t)}rotateY(t){return this.rotateOnAxis(Dd,t)}rotateZ(t){return this.rotateOnAxis(Ld,t)}translateOnAxis(t,e){return Id.copy(t).applyQuaternion(this.quaternion),this.position.add(Id.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pd,t)}translateY(t){return this.translateOnAxis(Dd,t)}translateZ(t){return this.translateOnAxis(Ld,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ra.copy(t):Ra.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),So.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(So,Ra,this.up):Ai.lookAt(Ra,So,this.up),this.quaternion.setFromRotationMatrix(Ai),r&&(Ai.extractRotation(r.matrixWorld),hs.setFromRotationMatrix(Ai),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nd),fs.child=t,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(B0),wc.child=t,this.dispatchEvent(wc),wc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nd),fs.child=t,this.dispatchEvent(fs),fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,t,F0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,V0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const f=c[u];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),u=o(t.textures),h=o(t.images),f=o(t.shapes),d=o(t.skeletons),m=o(t.animations),S=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),S.length>0&&(n.nodes=S)}return n.object=r,n;function o(a){const c=[];for(const u in a){const h=a[u];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}cn.DEFAULT_UP=new H(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jn=new H,wi=new H,bc=new H,bi=new H,ds=new H,ps=new H,Ud=new H,Rc=new H,Cc=new H,Ic=new H,Pc=new Ve,Dc=new Ve,Lc=new Ve;class Hn{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Jn.subVectors(t,e),r.cross(Jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Jn.subVectors(r,e),wi.subVectors(n,e),bc.subVectors(t,e);const o=Jn.dot(Jn),a=Jn.dot(wi),c=Jn.dot(bc),u=wi.dot(wi),h=wi.dot(bc),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(u*c-a*h)*d,S=(o*h-a*c)*d;return s.set(1-m-S,S,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(t,e,n,r,s,o,a,c){return this.getBarycoord(t,e,n,r,bi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,bi.x),c.addScaledVector(o,bi.y),c.addScaledVector(a,bi.z),c)}static getInterpolatedAttribute(t,e,n,r,s,o){return Pc.setScalar(0),Dc.setScalar(0),Lc.setScalar(0),Pc.fromBufferAttribute(t,e),Dc.fromBufferAttribute(t,n),Lc.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Pc,s.x),o.addScaledVector(Dc,s.y),o.addScaledVector(Lc,s.z),o}static isFrontFacing(t,e,n,r){return Jn.subVectors(n,e),wi.subVectors(t,e),Jn.cross(wi).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Jn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Jn.cross(wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Hn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;ds.subVectors(r,n),ps.subVectors(s,n),Rc.subVectors(t,n);const c=ds.dot(Rc),u=ps.dot(Rc);if(c<=0&&u<=0)return e.copy(n);Cc.subVectors(t,r);const h=ds.dot(Cc),f=ps.dot(Cc);if(h>=0&&f<=h)return e.copy(r);const d=c*f-h*u;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ds,o);Ic.subVectors(t,s);const m=ds.dot(Ic),S=ps.dot(Ic);if(S>=0&&m<=S)return e.copy(s);const M=m*u-c*S;if(M<=0&&u>=0&&S<=0)return a=u/(u-S),e.copy(n).addScaledVector(ps,a);const g=h*S-m*f;if(g<=0&&f-h>=0&&m-S>=0)return Ud.subVectors(s,r),a=(f-h)/(f-h+(m-S)),e.copy(r).addScaledVector(Ud,a);const v=1/(g+M+d);return o=M*v,a=d*v,e.copy(n).addScaledVector(ds,o).addScaledVector(ps,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Xm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},Ca={h:0,s:0,l:0};function Nc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=_e.workingColorSpace){return this.r=t,this.g=e,this.b=n,_e.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=_e.workingColorSpace){if(t=x0(t,1),e=Rn(e,0,1),n=Rn(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Nc(o,s,t+1/3),this.g=Nc(o,s,t),this.b=Nc(o,s,t-1/3)}return _e.toWorkingColorSpace(this,r),this}setStyle(t,e=ci){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ci){const n=Xm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}copyLinearToSRGB(t){return this.r=vc(t.r),this.g=vc(t.g),this.b=vc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ci){return _e.fromWorkingColorSpace(_n.copy(this),t),Math.round(Rn(_n.r*255,0,255))*65536+Math.round(Rn(_n.g*255,0,255))*256+Math.round(Rn(_n.b*255,0,255))}getHexString(t=ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.fromWorkingColorSpace(_n.copy(this),e);const n=_n.r,r=_n.g,s=_n.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,u;const h=(a+o)/2;if(a===o)c=0,u=0;else{const f=o-a;switch(u=h<=.5?f/(o+a):f/(2-o-a),o){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return t.h=c,t.s=u,t.l=h,t}getRGB(t,e=_e.workingColorSpace){return _e.fromWorkingColorSpace(_n.copy(this),e),t.r=_n.r,t.g=_n.g,t.b=_n.b,t}getStyle(t=ci){_e.fromWorkingColorSpace(_n.copy(this),t);const e=_n.r,n=_n.g,r=_n.b;return t!==ci?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Ki),this.setHSL(Ki.h+t,Ki.s+e,Ki.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ki),t.getHSL(Ca);const n=gc(Ki.h,Ca.h,e),r=gc(Ki.s,Ca.s,e),s=gc(Ki.l,Ca.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new Ut;Ut.NAMES=Xm;let k0=0;class Js extends Zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=rr(),this.name="",this.type="Material",this.blending=Cs,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ru,this.blendDst=su,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(n.blending=this.blending),this.side!==cr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ru&&(n.blendSrc=this.blendSrc),this.blendDst!==su&&(n.blendDst=this.blendDst),this.blendEquation!==Ir&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class qh extends Js{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=bm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ge=new H,Ia=new Jt;class ri{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Gu,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ia.fromBufferAttribute(this,e),Ia.applyMatrix3(t),this.setXY(e,Ia.x,Ia.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),r=Ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),r=Ee(r,this.array),s=Ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gu&&(t.usage=this.usage),t}}class $m extends ri{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class jm extends ri{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class un extends ri{constructor(t,e,n){super(new Float32Array(t),e,n)}}let z0=0;const Bn=new Pe,Uc=new cn,ms=new H,Un=new Zo,xo=new Zo,Je=new H;class $n extends Zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hm(t)?jm:$m)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Yt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Bn.makeRotationFromQuaternion(t),this.applyMatrix4(Bn),this}rotateX(t){return Bn.makeRotationX(t),this.applyMatrix4(Bn),this}rotateY(t){return Bn.makeRotationY(t),this.applyMatrix4(Bn),this}rotateZ(t){return Bn.makeRotationZ(t),this.applyMatrix4(Bn),this}translate(t,e,n){return Bn.makeTranslation(t,e,n),this.applyMatrix4(Bn),this}scale(t,e,n){return Bn.makeScale(t,e,n),this.applyMatrix4(Bn),this}lookAt(t){return Uc.lookAt(t),Uc.updateMatrix(),this.applyMatrix4(Uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new un(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Un.setFromBufferAttribute(s),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gh);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){const n=this.boundingSphere.center;if(Un.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];xo.setFromBufferAttribute(a),this.morphTargetsRelative?(Je.addVectors(Un.min,xo.min),Un.expandByPoint(Je),Je.addVectors(Un.max,xo.max),Un.expandByPoint(Je)):(Un.expandByPoint(xo.min),Un.expandByPoint(xo.max))}Un.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Je.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Je));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)Je.fromBufferAttribute(a,u),c&&(ms.fromBufferAttribute(t,u),Je.add(ms)),r=Math.max(r,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ri(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let T=0;T<n.count;T++)a[T]=new H,c[T]=new H;const u=new H,h=new H,f=new H,d=new Jt,m=new Jt,S=new Jt,M=new H,g=new H;function v(T,C,_){u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,C),f.fromBufferAttribute(n,_),d.fromBufferAttribute(s,T),m.fromBufferAttribute(s,C),S.fromBufferAttribute(s,_),h.sub(u),f.sub(u),m.sub(d),S.sub(d);const y=1/(m.x*S.y-S.x*m.y);isFinite(y)&&(M.copy(h).multiplyScalar(S.y).addScaledVector(f,-m.y).multiplyScalar(y),g.copy(f).multiplyScalar(m.x).addScaledVector(h,-S.x).multiplyScalar(y),a[T].add(M),a[C].add(M),a[_].add(M),c[T].add(g),c[C].add(g),c[_].add(g))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let T=0,C=D.length;T<C;++T){const _=D[T],y=_.start,P=_.count;for(let A=y,X=y+P;A<X;A+=3)v(t.getX(A+0),t.getX(A+1),t.getX(A+2))}const R=new H,N=new H,z=new H,U=new H;function x(T){z.fromBufferAttribute(r,T),U.copy(z);const C=a[T];R.copy(C),R.sub(z.multiplyScalar(z.dot(C))).normalize(),N.crossVectors(U,C);const y=N.dot(c[T])<0?-1:1;o.setXYZW(T,R.x,R.y,R.z,y)}for(let T=0,C=D.length;T<C;++T){const _=D[T],y=_.start,P=_.count;for(let A=y,X=y+P;A<X;A+=3)x(t.getX(A+0)),x(t.getX(A+1)),x(t.getX(A+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ri(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new H,s=new H,o=new H,a=new H,c=new H,u=new H,h=new H,f=new H;if(t)for(let d=0,m=t.count;d<m;d+=3){const S=t.getX(d+0),M=t.getX(d+1),g=t.getX(d+2);r.fromBufferAttribute(e,S),s.fromBufferAttribute(e,M),o.fromBufferAttribute(e,g),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),a.fromBufferAttribute(n,S),c.fromBufferAttribute(n,M),u.fromBufferAttribute(n,g),a.add(h),c.add(h),u.add(h),n.setXYZ(S,a.x,a.y,a.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let d=0,m=e.count;d<m;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(a,c){const u=a.array,h=a.itemSize,f=a.normalized,d=new u.constructor(c.length*h);let m=0,S=0;for(let M=0,g=c.length;M<g;M++){a.isInterleavedBufferAttribute?m=c[M]*a.data.stride+a.offset:m=c[M]*h;for(let v=0;v<h;v++)d[S++]=u[m++]}return new ri(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new $n,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],u=t(c,n);e.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const c=[],u=s[a];for(let h=0,f=u.length;h<f;h++){const d=u[h],m=t(d,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const u=n[c];t.data.attributes[c]=u.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let f=0,d=u.length;f<d;f++){const m=u[f];h.push(m.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(e))}const s=t.morphAttributes;for(const u in s){const h=[],f=s[u];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(e));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,h=o.length;u<h;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Od=new Pe,Tr=new qm,Pa=new Gh,Fd=new H,Da=new H,La=new H,Na=new H,Oc=new H,Ua=new H,Vd=new H,Oa=new H;class Ce extends cn{constructor(t=new $n,e=new qh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Ua.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const h=a[c],f=s[c];h!==0&&(Oc.fromBufferAttribute(f,t),o?Ua.addScaledVector(Oc,h):Ua.addScaledVector(Oc.sub(e),h))}e.add(Ua)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(s),Tr.copy(t.ray).recast(t.near),!(Pa.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(Pa,Fd)===null||Tr.origin.distanceToSquared(Fd)>(t.far-t.near)**2))&&(Od.copy(s).invert(),Tr.copy(t.ray).applyMatrix4(Od),!(n.boundingBox!==null&&Tr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Tr)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let S=0,M=d.length;S<M;S++){const g=d[S],v=o[g.materialIndex],D=Math.max(g.start,m.start),R=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let N=D,z=R;N<z;N+=3){const U=a.getX(N),x=a.getX(N+1),T=a.getX(N+2);r=Fa(this,v,t,n,u,h,f,U,x,T),r&&(r.faceIndex=Math.floor(N/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const S=Math.max(0,m.start),M=Math.min(a.count,m.start+m.count);for(let g=S,v=M;g<v;g+=3){const D=a.getX(g),R=a.getX(g+1),N=a.getX(g+2);r=Fa(this,o,t,n,u,h,f,D,R,N),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let S=0,M=d.length;S<M;S++){const g=d[S],v=o[g.materialIndex],D=Math.max(g.start,m.start),R=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let N=D,z=R;N<z;N+=3){const U=N,x=N+1,T=N+2;r=Fa(this,v,t,n,u,h,f,U,x,T),r&&(r.faceIndex=Math.floor(N/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const S=Math.max(0,m.start),M=Math.min(c.count,m.start+m.count);for(let g=S,v=M;g<v;g+=3){const D=g,R=g+1,N=g+2;r=Fa(this,o,t,n,u,h,f,D,R,N),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}}function H0(i,t,e,n,r,s,o,a){let c;if(t.side===In?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,t.side===cr,a),c===null)return null;Oa.copy(a),Oa.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(Oa);return u<e.near||u>e.far?null:{distance:u,point:Oa.clone(),object:i}}function Fa(i,t,e,n,r,s,o,a,c,u){i.getVertexPosition(a,Da),i.getVertexPosition(c,La),i.getVertexPosition(u,Na);const h=H0(i,t,e,n,Da,La,Na,Vd);if(h){const f=new H;Hn.getBarycoord(Vd,Da,La,Na,f),r&&(h.uv=Hn.getInterpolatedAttribute(r,a,c,u,f,new Jt)),s&&(h.uv1=Hn.getInterpolatedAttribute(s,a,c,u,f,new Jt)),o&&(h.normal=Hn.getInterpolatedAttribute(o,a,c,u,f,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:u,normal:new H,materialIndex:0};Hn.getNormal(Da,La,Na,d.normal),h.face=d,h.barycoord=f}return h}class ki extends $n{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],u=[],h=[],f=[];let d=0,m=0;S("z","y","x",-1,-1,n,e,t,o,s,0),S("z","y","x",1,-1,n,e,-t,o,s,1),S("x","z","y",1,1,t,n,e,r,o,2),S("x","z","y",1,-1,t,n,-e,r,o,3),S("x","y","z",1,-1,t,e,n,r,s,4),S("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new un(u,3)),this.setAttribute("normal",new un(h,3)),this.setAttribute("uv",new un(f,2));function S(M,g,v,D,R,N,z,U,x,T,C){const _=N/x,y=z/T,P=N/2,A=z/2,X=U/2,Q=x+1,j=T+1;let nt=0,Y=0;const yt=new H;for(let Et=0;Et<j;Et++){const Rt=Et*y-A;for(let jt=0;jt<Q;jt++){const zt=jt*_-P;yt[M]=zt*D,yt[g]=Rt*R,yt[v]=X,u.push(yt.x,yt.y,yt.z),yt[M]=0,yt[g]=0,yt[v]=U>0?1:-1,h.push(yt.x,yt.y,yt.z),f.push(jt/x),f.push(1-Et/T),nt+=1}}for(let Et=0;Et<T;Et++)for(let Rt=0;Rt<x;Rt++){const jt=d+Rt+Q*Et,zt=d+Rt+Q*(Et+1),Z=d+(Rt+1)+Q*(Et+1),ot=d+(Rt+1)+Q*Et;c.push(jt,zt,ot),c.push(zt,Z,ot),Y+=6}a.addGroup(m,Y,C),m+=Y,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ki(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ws(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Mn(i){const t={};for(let e=0;e<i.length;e++){const n=Ws(i[e]);for(const r in n)t[r]=n[r]}return t}function G0(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Km(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}const W0={clone:Ws,merge:Mn};var q0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,X0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ur extends Js{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=q0,this.fragmentShader=X0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ws(t.uniforms),this.uniformsGroups=G0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ym extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=Li}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new H,Bd=new Jt,kd=new Jt;class zn extends Ym{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Wu*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(mc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wu*2*Math.atan(Math.tan(mc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z)}getViewSize(t,e){return this.getViewBounds(t,Bd,kd),e.subVectors(kd,Bd)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(mc*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/u,r*=o.width/c,n*=o.height/u}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const gs=-90,_s=1;class $0 extends cn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zn(gs,_s,t,e);r.layers=this.layers,this.add(r);const s=new zn(gs,_s,t,e);s.layers=this.layers,this.add(s);const o=new zn(gs,_s,t,e);o.layers=this.layers,this.add(o);const a=new zn(gs,_s,t,e);a.layers=this.layers,this.add(a);const c=new zn(gs,_s,t,e);c.layers=this.layers,this.add(c);const u=new zn(gs,_s,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,c]=e;for(const u of e)this.remove(u);if(t===Li)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ml)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,u,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),S=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,u),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(f,d,m),t.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class Qm extends wn{constructor(t,e,n,r,s,o,a,c,u,h){t=t!==void 0?t:[],e=e!==void 0?e:ks,super(t,e,n,r,s,o,a,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class j0 extends Gr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Qm(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ti}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ki(5,5,5),s=new ur({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:In,blending:nr});s.uniforms.tEquirect.value=e;const o=new Ce(r,s),a=e.minFilter;return e.minFilter===Lr&&(e.minFilter=ti),new $0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const Fc=new H,K0=new H,Y0=new Yt;class br{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Fc.subVectors(n,e).cross(K0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Fc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Y0.getNormalMatrix(t),r=this.coplanarPoint(Fc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mr=new Gh,Va=new H;class Xh{constructor(t=new br,e=new br,n=new br,r=new br,s=new br,o=new br){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Li){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],m=r[8],S=r[9],M=r[10],g=r[11],v=r[12],D=r[13],R=r[14],N=r[15];if(n[0].setComponents(c-s,d-u,g-m,N-v).normalize(),n[1].setComponents(c+s,d+u,g+m,N+v).normalize(),n[2].setComponents(c+o,d+h,g+S,N+D).normalize(),n[3].setComponents(c-o,d-h,g-S,N-D).normalize(),n[4].setComponents(c-a,d-f,g-M,N-R).normalize(),e===Li)n[5].setComponents(c+a,d+f,g+M,N+R).normalize();else if(e===ml)n[5].setComponents(a,f,M,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(t){return Mr.center.set(0,0,0),Mr.radius=.7071067811865476,Mr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Va.x=r.normal.x>0?t.max.x:t.min.x,Va.y=r.normal.y>0?t.max.y:t.min.y,Va.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Va)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zm(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Q0(i){const t=new WeakMap;function e(a,c){const u=a.array,h=a.usage,f=u.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,u,h),a.onUploadCallback();let m;if(u instanceof Float32Array)m=i.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=i.SHORT;else if(u instanceof Uint32Array)m=i.UNSIGNED_INT;else if(u instanceof Int32Array)m=i.INT;else if(u instanceof Int8Array)m=i.BYTE;else if(u instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,u){const h=c.array,f=c.updateRanges;if(i.bindBuffer(u,a),f.length===0)i.bufferSubData(u,0,h);else{f.sort((m,S)=>m.start-S.start);let d=0;for(let m=1;m<f.length;m++){const S=f[d],M=f[m];M.start<=S.start+S.count+1?S.count=Math.max(S.count,M.start+M.count-S.start):(++d,f[d]=M)}f.length=d+1;for(let m=0,S=f.length;m<S;m++){const M=f[m];i.bufferSubData(u,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=t.get(a);if(u===void 0)t.set(a,e(a,c));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,c),u.version=a.version}}return{get:r,remove:s,update:o}}class Jo extends $n{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(r),u=a+1,h=c+1,f=t/a,d=e/c,m=[],S=[],M=[],g=[];for(let v=0;v<h;v++){const D=v*d-o;for(let R=0;R<u;R++){const N=R*f-s;S.push(N,-D,0),M.push(0,0,1),g.push(R/a),g.push(1-v/c)}}for(let v=0;v<c;v++)for(let D=0;D<a;D++){const R=D+u*v,N=D+u*(v+1),z=D+1+u*(v+1),U=D+1+u*v;m.push(R,N,U),m.push(N,z,U)}this.setIndex(m),this.setAttribute("position",new un(S,3)),this.setAttribute("normal",new un(M,3)),this.setAttribute("uv",new un(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jo(t.width,t.height,t.widthSegments,t.heightSegments)}}var Z0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J0=`#ifdef USE_ALPHAHASH
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
#endif`,ty=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ey=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ny=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ry=`#ifdef USE_AOMAP
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
#endif`,sy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oy=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ay=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ly=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hy=`#ifdef USE_IRIDESCENCE
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
#endif`,fy=`#ifdef USE_BUMPMAP
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
#endif`,dy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,py=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,my=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_y=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ey=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Sy=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,xy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ty=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,My=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ay=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,by=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ry="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cy=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Iy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Py=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dy=`#ifdef USE_ENVMAP
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
#endif`,Ly=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ny=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Uy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Oy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,By=`#ifdef USE_GRADIENTMAP
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
}`,ky=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gy=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Wy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,qy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$y=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ky=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Yy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qy=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,aE=`#if defined( USE_POINTS_UV )
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
#endif`,lE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dE=`#ifdef USE_MORPHTARGETS
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
#endif`,pE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_E=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,EE=`#ifdef USE_NORMALMAP
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
#endif`,SE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ME=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,IE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,PE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,NE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,UE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,OE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,FE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,VE=`#ifdef USE_SKINNING
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
#endif`,BE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kE=`#ifdef USE_SKINNING
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
#endif`,zE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qE=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,XE=`#ifdef USE_TRANSMISSION
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
#endif`,$E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZE=`uniform sampler2D t2D;
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
}`,JE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iS=`#include <common>
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
}`,rS=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sS=`#define DISTANCE
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
}`,oS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,aS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cS=`uniform float scale;
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
}`,uS=`uniform vec3 diffuse;
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
}`,hS=`#include <common>
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
}`,fS=`uniform vec3 diffuse;
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
}`,dS=`#define LAMBERT
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
}`,pS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,mS=`#define MATCAP
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
}`,gS=`#define MATCAP
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
}`,_S=`#define NORMAL
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
}`,vS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yS=`#define PHONG
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
}`,ES=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,SS=`#define STANDARD
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
}`,xS=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,TS=`#define TOON
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
}`,MS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,AS=`uniform float size;
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
}`,wS=`uniform vec3 diffuse;
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
}`,bS=`#include <common>
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
}`,RS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,CS=`uniform float rotation;
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
}`,IS=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:Z0,alphahash_pars_fragment:J0,alphamap_fragment:ty,alphamap_pars_fragment:ey,alphatest_fragment:ny,alphatest_pars_fragment:iy,aomap_fragment:ry,aomap_pars_fragment:sy,batching_pars_vertex:oy,batching_vertex:ay,begin_vertex:ly,beginnormal_vertex:cy,bsdfs:uy,iridescence_fragment:hy,bumpmap_pars_fragment:fy,clipping_planes_fragment:dy,clipping_planes_pars_fragment:py,clipping_planes_pars_vertex:my,clipping_planes_vertex:gy,color_fragment:_y,color_pars_fragment:vy,color_pars_vertex:yy,color_vertex:Ey,common:Sy,cube_uv_reflection_fragment:xy,defaultnormal_vertex:Ty,displacementmap_pars_vertex:My,displacementmap_vertex:Ay,emissivemap_fragment:wy,emissivemap_pars_fragment:by,colorspace_fragment:Ry,colorspace_pars_fragment:Cy,envmap_fragment:Iy,envmap_common_pars_fragment:Py,envmap_pars_fragment:Dy,envmap_pars_vertex:Ly,envmap_physical_pars_fragment:Wy,envmap_vertex:Ny,fog_vertex:Uy,fog_pars_vertex:Oy,fog_fragment:Fy,fog_pars_fragment:Vy,gradientmap_pars_fragment:By,lightmap_pars_fragment:ky,lights_lambert_fragment:zy,lights_lambert_pars_fragment:Hy,lights_pars_begin:Gy,lights_toon_fragment:qy,lights_toon_pars_fragment:Xy,lights_phong_fragment:$y,lights_phong_pars_fragment:jy,lights_physical_fragment:Ky,lights_physical_pars_fragment:Yy,lights_fragment_begin:Qy,lights_fragment_maps:Zy,lights_fragment_end:Jy,logdepthbuf_fragment:tE,logdepthbuf_pars_fragment:eE,logdepthbuf_pars_vertex:nE,logdepthbuf_vertex:iE,map_fragment:rE,map_pars_fragment:sE,map_particle_fragment:oE,map_particle_pars_fragment:aE,metalnessmap_fragment:lE,metalnessmap_pars_fragment:cE,morphinstance_vertex:uE,morphcolor_vertex:hE,morphnormal_vertex:fE,morphtarget_pars_vertex:dE,morphtarget_vertex:pE,normal_fragment_begin:mE,normal_fragment_maps:gE,normal_pars_fragment:_E,normal_pars_vertex:vE,normal_vertex:yE,normalmap_pars_fragment:EE,clearcoat_normal_fragment_begin:SE,clearcoat_normal_fragment_maps:xE,clearcoat_pars_fragment:TE,iridescence_pars_fragment:ME,opaque_fragment:AE,packing:wE,premultiplied_alpha_fragment:bE,project_vertex:RE,dithering_fragment:CE,dithering_pars_fragment:IE,roughnessmap_fragment:PE,roughnessmap_pars_fragment:DE,shadowmap_pars_fragment:LE,shadowmap_pars_vertex:NE,shadowmap_vertex:UE,shadowmask_pars_fragment:OE,skinbase_vertex:FE,skinning_pars_vertex:VE,skinning_vertex:BE,skinnormal_vertex:kE,specularmap_fragment:zE,specularmap_pars_fragment:HE,tonemapping_fragment:GE,tonemapping_pars_fragment:WE,transmission_fragment:qE,transmission_pars_fragment:XE,uv_pars_fragment:$E,uv_pars_vertex:jE,uv_vertex:KE,worldpos_vertex:YE,background_vert:QE,background_frag:ZE,backgroundCube_vert:JE,backgroundCube_frag:tS,cube_vert:eS,cube_frag:nS,depth_vert:iS,depth_frag:rS,distanceRGBA_vert:sS,distanceRGBA_frag:oS,equirect_vert:aS,equirect_frag:lS,linedashed_vert:cS,linedashed_frag:uS,meshbasic_vert:hS,meshbasic_frag:fS,meshlambert_vert:dS,meshlambert_frag:pS,meshmatcap_vert:mS,meshmatcap_frag:gS,meshnormal_vert:_S,meshnormal_frag:vS,meshphong_vert:yS,meshphong_frag:ES,meshphysical_vert:SS,meshphysical_frag:xS,meshtoon_vert:TS,meshtoon_frag:MS,points_vert:AS,points_frag:wS,shadow_vert:bS,shadow_frag:RS,sprite_vert:CS,sprite_frag:IS},ht={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new Jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},hi={basic:{uniforms:Mn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Mn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Mn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Mn([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Mn([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Mn([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Mn([ht.points,ht.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Mn([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Mn([ht.common,ht.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Mn([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Mn([ht.sprite,ht.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:Mn([ht.common,ht.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:Mn([ht.lights,ht.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};hi.physical={uniforms:Mn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new Jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new Jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new Jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const Ba={r:0,b:0,g:0},Ar=new nn,PS=new Pe;function DS(i,t,e,n,r,s,o){const a=new Ut(0);let c=s===!0?0:1,u,h,f=null,d=0,m=null;function S(D){let R=D.isScene===!0?D.background:null;return R&&R.isTexture&&(R=(D.backgroundBlurriness>0?e:t).get(R)),R}function M(D){let R=!1;const N=S(D);N===null?v(a,c):N&&N.isColor&&(v(N,1),R=!0);const z=i.xr.getEnvironmentBlendMode();z==="additive"?n.buffers.color.setClear(0,0,0,1,o):z==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||R)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(D,R){const N=S(R);N&&(N.isCubeTexture||N.mapping===kl)?(h===void 0&&(h=new Ce(new ki(1,1,1),new ur({name:"BackgroundCubeMaterial",uniforms:Ws(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(z,U,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Ar.copy(R.backgroundRotation),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),h.material.uniforms.envMap.value=N,h.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(PS.makeRotationFromEuler(Ar)),h.material.toneMapped=_e.getTransfer(N.colorSpace)!==be,(f!==N||d!==N.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,f=N,d=N.version,m=i.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null)):N&&N.isTexture&&(u===void 0&&(u=new Ce(new Jo(2,2),new ur({name:"BackgroundMaterial",uniforms:Ws(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=N,u.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,u.material.toneMapped=_e.getTransfer(N.colorSpace)!==be,N.matrixAutoUpdate===!0&&N.updateMatrix(),u.material.uniforms.uvTransform.value.copy(N.matrix),(f!==N||d!==N.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,f=N,d=N.version,m=i.toneMapping),u.layers.enableAll(),D.unshift(u,u.geometry,u.material,0,0,null))}function v(D,R){D.getRGB(Ba,Km(i)),n.buffers.color.setClear(Ba.r,Ba.g,Ba.b,R,o)}return{getClearColor:function(){return a},setClearColor:function(D,R=1){a.set(D),c=R,v(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(D){c=D,v(a,c)},render:M,addToRenderList:g}}function LS(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,o=!1;function a(_,y,P,A,X){let Q=!1;const j=f(A,P,y);s!==j&&(s=j,u(s.object)),Q=m(_,A,P,X),Q&&S(_,A,P,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,N(_,y,P,A),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return i.createVertexArray()}function u(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function f(_,y,P){const A=P.wireframe===!0;let X=n[_.id];X===void 0&&(X={},n[_.id]=X);let Q=X[y.id];Q===void 0&&(Q={},X[y.id]=Q);let j=Q[A];return j===void 0&&(j=d(c()),Q[A]=j),j}function d(_){const y=[],P=[],A=[];for(let X=0;X<e;X++)y[X]=0,P[X]=0,A[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:P,attributeDivisors:A,object:_,attributes:{},index:null}}function m(_,y,P,A){const X=s.attributes,Q=y.attributes;let j=0;const nt=P.getAttributes();for(const Y in nt)if(nt[Y].location>=0){const Et=X[Y];let Rt=Q[Y];if(Rt===void 0&&(Y==="instanceMatrix"&&_.instanceMatrix&&(Rt=_.instanceMatrix),Y==="instanceColor"&&_.instanceColor&&(Rt=_.instanceColor)),Et===void 0||Et.attribute!==Rt||Rt&&Et.data!==Rt.data)return!0;j++}return s.attributesNum!==j||s.index!==A}function S(_,y,P,A){const X={},Q=y.attributes;let j=0;const nt=P.getAttributes();for(const Y in nt)if(nt[Y].location>=0){let Et=Q[Y];Et===void 0&&(Y==="instanceMatrix"&&_.instanceMatrix&&(Et=_.instanceMatrix),Y==="instanceColor"&&_.instanceColor&&(Et=_.instanceColor));const Rt={};Rt.attribute=Et,Et&&Et.data&&(Rt.data=Et.data),X[Y]=Rt,j++}s.attributes=X,s.attributesNum=j,s.index=A}function M(){const _=s.newAttributes;for(let y=0,P=_.length;y<P;y++)_[y]=0}function g(_){v(_,0)}function v(_,y){const P=s.newAttributes,A=s.enabledAttributes,X=s.attributeDivisors;P[_]=1,A[_]===0&&(i.enableVertexAttribArray(_),A[_]=1),X[_]!==y&&(i.vertexAttribDivisor(_,y),X[_]=y)}function D(){const _=s.newAttributes,y=s.enabledAttributes;for(let P=0,A=y.length;P<A;P++)y[P]!==_[P]&&(i.disableVertexAttribArray(P),y[P]=0)}function R(_,y,P,A,X,Q,j){j===!0?i.vertexAttribIPointer(_,y,P,X,Q):i.vertexAttribPointer(_,y,P,A,X,Q)}function N(_,y,P,A){M();const X=A.attributes,Q=P.getAttributes(),j=y.defaultAttributeValues;for(const nt in Q){const Y=Q[nt];if(Y.location>=0){let yt=X[nt];if(yt===void 0&&(nt==="instanceMatrix"&&_.instanceMatrix&&(yt=_.instanceMatrix),nt==="instanceColor"&&_.instanceColor&&(yt=_.instanceColor)),yt!==void 0){const Et=yt.normalized,Rt=yt.itemSize,jt=t.get(yt);if(jt===void 0)continue;const zt=jt.buffer,Z=jt.type,ot=jt.bytesPerElement,At=Z===i.INT||Z===i.UNSIGNED_INT||yt.gpuType===Oh;if(yt.isInterleavedBufferAttribute){const _t=yt.data,Gt=_t.stride,Ot=yt.offset;if(_t.isInstancedInterleavedBuffer){for(let te=0;te<Y.locationSize;te++)v(Y.location+te,_t.meshPerAttribute);_.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let te=0;te<Y.locationSize;te++)g(Y.location+te);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let te=0;te<Y.locationSize;te++)R(Y.location+te,Rt/Y.locationSize,Z,Et,Gt*ot,(Ot+Rt/Y.locationSize*te)*ot,At)}else{if(yt.isInstancedBufferAttribute){for(let _t=0;_t<Y.locationSize;_t++)v(Y.location+_t,yt.meshPerAttribute);_.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let _t=0;_t<Y.locationSize;_t++)g(Y.location+_t);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let _t=0;_t<Y.locationSize;_t++)R(Y.location+_t,Rt/Y.locationSize,Z,Et,Rt*ot,Rt/Y.locationSize*_t*ot,At)}}else if(j!==void 0){const Et=j[nt];if(Et!==void 0)switch(Et.length){case 2:i.vertexAttrib2fv(Y.location,Et);break;case 3:i.vertexAttrib3fv(Y.location,Et);break;case 4:i.vertexAttrib4fv(Y.location,Et);break;default:i.vertexAttrib1fv(Y.location,Et)}}}}D()}function z(){T();for(const _ in n){const y=n[_];for(const P in y){const A=y[P];for(const X in A)h(A[X].object),delete A[X];delete y[P]}delete n[_]}}function U(_){if(n[_.id]===void 0)return;const y=n[_.id];for(const P in y){const A=y[P];for(const X in A)h(A[X].object),delete A[X];delete y[P]}delete n[_.id]}function x(_){for(const y in n){const P=n[y];if(P[_.id]===void 0)continue;const A=P[_.id];for(const X in A)h(A[X].object),delete A[X];delete P[_.id]}}function T(){C(),o=!0,s!==r&&(s=r,u(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:C,dispose:z,releaseStatesOfGeometry:U,releaseStatesOfProgram:x,initAttributes:M,enableAttribute:g,disableUnusedAttributes:D}}function NS(i,t,e){let n;function r(u){n=u}function s(u,h){i.drawArrays(n,u,h),e.update(h,n,1)}function o(u,h,f){f!==0&&(i.drawArraysInstanced(n,u,h,f),e.update(h,n,f))}function a(u,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,f);let m=0;for(let S=0;S<f;S++)m+=h[S];e.update(m,n,1)}function c(u,h,f,d){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let S=0;S<u.length;S++)o(u[S],h[S],d[S]);else{m.multiDrawArraysInstancedWEBGL(n,u,0,h,0,d,0,f);let S=0;for(let M=0;M<f;M++)S+=h[M];for(let M=0;M<d.length;M++)e.update(S,n,d[M])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function US(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const x=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(x){return!(x!==ni&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){const T=x===Qo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==Oi&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&x!==Di&&!T)}function c(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const h=c(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const x=t.get("EXT_clip_control");x.clipControlEXT(x.LOWER_LEFT_EXT,x.ZERO_TO_ONE_EXT)}const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),D=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),N=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),z=S>0,U=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:S,maxTextureSize:M,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:D,maxVaryings:R,maxFragmentUniforms:N,vertexTextures:z,maxSamples:U}}function OS(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new br,a=new Yt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||n!==0||r;return r=d,n=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,m){const S=f.clippingPlanes,M=f.clipIntersection,g=f.clipShadows,v=i.get(f);if(!r||S===null||S.length===0||s&&!g)s?h(null):u();else{const D=s?0:n,R=D*4;let N=v.clippingState||null;c.value=N,N=h(S,d,R,m);for(let z=0;z!==R;++z)N[z]=e[z];v.clippingState=N,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=D}};function u(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,m,S){const M=f!==null?f.length:0;let g=null;if(M!==0){if(g=c.value,S!==!0||g===null){const v=m+M*4,D=d.matrixWorldInverse;a.getNormalMatrix(D),(g===null||g.length<v)&&(g=new Float32Array(v));for(let R=0,N=m;R!==M;++R,N+=4)o.copy(f[R]).applyMatrix4(D,a),o.normal.toArray(g,N),g[N+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,g}}function FS(i){let t=new WeakMap;function e(o,a){return a===du?o.mapping=ks:a===pu&&(o.mapping=zs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===du||a===pu)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new j0(c.height);return u.fromEquirectangularTexture(i,o),t.set(o,u),o.addEventListener("dispose",r),e(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Jm extends Ym{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Rs=4,zd=[.125,.215,.35,.446,.526,.582],Pr=20,Vc=new Jm,Hd=new Ut;let Bc=null,kc=0,zc=0,Hc=!1;const Rr=(1+Math.sqrt(5))/2,vs=1/Rr,Gd=[new H(-Rr,vs,0),new H(Rr,vs,0),new H(-vs,0,Rr),new H(vs,0,Rr),new H(0,Rr,-vs),new H(0,Rr,vs),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class Wd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Bc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel(),Hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$d(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Bc,kc,zc),this._renderer.xr.enabled=Hc,t.scissorTest=!1,ka(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ks||t.mapping===zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel(),Hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:Qo,format:ni,colorSpace:_r,depthBuffer:!1},r=qd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qd(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=VS(s)),this._blurMaterial=BS(s,t,e)}return r}_compileMaterial(t){const e=new Ce(this._lodPlanes[0],t);this._renderer.compile(e,Vc)}_sceneToCubeUV(t,e,n,r){const a=new zn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Hd),h.toneMapping=ir,h.autoClear=!1;const m=new qh({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),S=new Ce(new ki,m);let M=!1;const g=t.background;g?g.isColor&&(m.color.copy(g),t.background=null,M=!0):(m.color.copy(Hd),M=!0);for(let v=0;v<6;v++){const D=v%3;D===0?(a.up.set(0,c[v],0),a.lookAt(u[v],0,0)):D===1?(a.up.set(0,0,c[v]),a.lookAt(0,u[v],0)):(a.up.set(0,c[v],0),a.lookAt(0,0,u[v]));const R=this._cubeSize;ka(r,D*R,v>2?R:0,R,R),h.setRenderTarget(r),M&&h.render(S,a),h.render(t,a)}S.geometry.dispose(),S.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===ks||t.mapping===zs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$d()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ce(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;ka(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Vc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Gd[(r-s-1)%Gd.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Ce(this._lodPlanes[r],u),d=u.uniforms,m=this._sizeLods[n]-1,S=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Pr-1),M=s/S,g=isFinite(s)?1+Math.floor(h*M):Pr;g>Pr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Pr}`);const v=[];let D=0;for(let x=0;x<Pr;++x){const T=x/M,C=Math.exp(-T*T/2);v.push(C),x===0?D+=C:x<g&&(D+=2*C)}for(let x=0;x<v.length;x++)v[x]=v[x]/D;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=v,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:R}=this;d.dTheta.value=S,d.mipInt.value=R-n;const N=this._sizeLods[r],z=3*N*(r>R-Rs?r-R+Rs:0),U=4*(this._cubeSize-N);ka(e,z,U,3*N,2*N),c.setRenderTarget(e),c.render(f,Vc)}}function VS(i){const t=[],e=[],n=[];let r=i;const s=i-Rs+1+zd.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>i-Rs?c=zd[o-i+Rs-1]:o===0&&(c=0),n.push(c);const u=1/(a-2),h=-u,f=1+u,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,S=6,M=3,g=2,v=1,D=new Float32Array(M*S*m),R=new Float32Array(g*S*m),N=new Float32Array(v*S*m);for(let U=0;U<m;U++){const x=U%3*2/3-1,T=U>2?0:-1,C=[x,T,0,x+2/3,T,0,x+2/3,T+1,0,x,T,0,x+2/3,T+1,0,x,T+1,0];D.set(C,M*S*U),R.set(d,g*S*U);const _=[U,U,U,U,U,U];N.set(_,v*S*U)}const z=new $n;z.setAttribute("position",new ri(D,M)),z.setAttribute("uv",new ri(R,g)),z.setAttribute("faceIndex",new ri(N,v)),t.push(z),r>Rs&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function qd(i,t,e){const n=new Gr(i,t,e);return n.texture.mapping=kl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ka(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function BS(i,t,e){const n=new Float32Array(Pr),r=new H(0,1,0);return new ur({name:"SphericalGaussianBlur",defines:{n:Pr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Xd(){return new ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$h(),fragmentShader:`

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
		`,blending:nr,depthTest:!1,depthWrite:!1})}function $d(){return new ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function $h(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kS(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,u=c===du||c===pu,h=c===ks||c===zs;if(u||h){let f=t.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Wd(i)),f=u?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return u&&m&&m.height>0||h&&m&&r(m)?(e===null&&(e=new Wd(i)),f=u?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let c=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&c++;return c===u}function s(a){const c=a.target;c.removeEventListener("dispose",s);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function zS(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&nl("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function HS(i,t,e,n){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const S in d.attributes)t.remove(d.attributes[S]);for(const S in d.morphAttributes){const M=d.morphAttributes[S];for(let g=0,v=M.length;g<v;g++)t.remove(M[g])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function c(f){const d=f.attributes;for(const S in d)t.update(d[S],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const S in m){const M=m[S];for(let g=0,v=M.length;g<v;g++)t.update(M[g],i.ARRAY_BUFFER)}}function u(f){const d=[],m=f.index,S=f.attributes.position;let M=0;if(m!==null){const D=m.array;M=m.version;for(let R=0,N=D.length;R<N;R+=3){const z=D[R+0],U=D[R+1],x=D[R+2];d.push(z,U,U,x,x,z)}}else if(S!==void 0){const D=S.array;M=S.version;for(let R=0,N=D.length/3-1;R<N;R+=3){const z=R+0,U=R+1,x=R+2;d.push(z,U,U,x,x,z)}}else return;const g=new(Hm(d)?jm:$m)(d,1);g.version=M;const v=s.get(f);v&&t.remove(v),s.set(f,g)}function h(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function GS(i,t,e){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,m){i.drawElements(n,m,s,d*o),e.update(m,n,1)}function u(d,m,S){S!==0&&(i.drawElementsInstanced(n,m,s,d*o,S),e.update(m,n,S))}function h(d,m,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,d,0,S);let g=0;for(let v=0;v<S;v++)g+=m[v];e.update(g,n,1)}function f(d,m,S,M){if(S===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<d.length;v++)u(d[v]/o,m[v],M[v]);else{g.multiDrawElementsInstancedWEBGL(n,m,0,s,d,0,M,0,S);let v=0;for(let D=0;D<S;D++)v+=m[D];for(let D=0;D<M.length;D++)e.update(v,n,M[D])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function WS(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function qS(i,t,e){const n=new WeakMap,r=new Ve;function s(o,a,c){const u=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==f){let _=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",_)};var m=_;d!==void 0&&d.texture.dispose();const S=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,v=a.morphAttributes.position||[],D=a.morphAttributes.normal||[],R=a.morphAttributes.color||[];let N=0;S===!0&&(N=1),M===!0&&(N=2),g===!0&&(N=3);let z=a.attributes.position.count*N,U=1;z>t.maxTextureSize&&(U=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const x=new Float32Array(z*U*4*f),T=new Wm(x,z,U,f);T.type=Di,T.needsUpdate=!0;const C=N*4;for(let y=0;y<f;y++){const P=v[y],A=D[y],X=R[y],Q=z*U*4*y;for(let j=0;j<P.count;j++){const nt=j*C;S===!0&&(r.fromBufferAttribute(P,j),x[Q+nt+0]=r.x,x[Q+nt+1]=r.y,x[Q+nt+2]=r.z,x[Q+nt+3]=0),M===!0&&(r.fromBufferAttribute(A,j),x[Q+nt+4]=r.x,x[Q+nt+5]=r.y,x[Q+nt+6]=r.z,x[Q+nt+7]=0),g===!0&&(r.fromBufferAttribute(X,j),x[Q+nt+8]=r.x,x[Q+nt+9]=r.y,x[Q+nt+10]=r.z,x[Q+nt+11]=X.itemSize===4?r.w:1)}}d={count:f,texture:T,size:new Jt(z,U)},n.set(a,d),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let S=0;for(let g=0;g<u.length;g++)S+=u[g];const M=a.morphTargetsRelative?1:1-S;c.getUniforms().setValue(i,"morphTargetBaseInfluence",M),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function XS(i,t,e,n){let r=new WeakMap;function s(c){const u=n.render.frame,h=c.geometry,f=t.get(c,h);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function o(){r=new WeakMap}function a(c){const u=c.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:o}}class tg extends wn{constructor(t,e,n,r,s,o,a,c,u,h=Is){if(h!==Is&&h!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Is&&(n=Hr),n===void 0&&h===Gs&&(n=Hs),super(null,r,s,o,a,c,h,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Gn,this.minFilter=c!==void 0?c:Gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const eg=new wn,jd=new tg(1,1),ng=new Wm,ig=new D0,rg=new Qm,Kd=[],Yd=[],Qd=new Float32Array(16),Zd=new Float32Array(9),Jd=new Float32Array(4);function to(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Kd[r];if(s===void 0&&(s=new Float32Array(r),Kd[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Qe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Hl(i,t){let e=Yd[t];e===void 0&&(e=new Int32Array(t),Yd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function $S(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function jS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2fv(this.addr,t),Qe(e,t)}}function KS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;i.uniform3fv(this.addr,t),Qe(e,t)}}function YS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4fv(this.addr,t),Qe(e,t)}}function QS(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Qe(e,t)}else{if(Ye(e,n))return;Jd.set(n),i.uniformMatrix2fv(this.addr,!1,Jd),Qe(e,n)}}function ZS(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Qe(e,t)}else{if(Ye(e,n))return;Zd.set(n),i.uniformMatrix3fv(this.addr,!1,Zd),Qe(e,n)}}function JS(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Qe(e,t)}else{if(Ye(e,n))return;Qd.set(n),i.uniformMatrix4fv(this.addr,!1,Qd),Qe(e,n)}}function tx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ex(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2iv(this.addr,t),Qe(e,t)}}function nx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;i.uniform3iv(this.addr,t),Qe(e,t)}}function ix(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4iv(this.addr,t),Qe(e,t)}}function rx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function sx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2uiv(this.addr,t),Qe(e,t)}}function ox(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;i.uniform3uiv(this.addr,t),Qe(e,t)}}function ax(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4uiv(this.addr,t),Qe(e,t)}}function lx(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(jd.compareFunction=zm,s=jd):s=eg,e.setTexture2D(t||s,r)}function cx(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||ig,r)}function ux(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||rg,r)}function hx(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||ng,r)}function fx(i){switch(i){case 5126:return $S;case 35664:return jS;case 35665:return KS;case 35666:return YS;case 35674:return QS;case 35675:return ZS;case 35676:return JS;case 5124:case 35670:return tx;case 35667:case 35671:return ex;case 35668:case 35672:return nx;case 35669:case 35673:return ix;case 5125:return rx;case 36294:return sx;case 36295:return ox;case 36296:return ax;case 35678:case 36198:case 36298:case 36306:case 35682:return lx;case 35679:case 36299:case 36307:return cx;case 35680:case 36300:case 36308:case 36293:return ux;case 36289:case 36303:case 36311:case 36292:return hx}}function dx(i,t){i.uniform1fv(this.addr,t)}function px(i,t){const e=to(t,this.size,2);i.uniform2fv(this.addr,e)}function mx(i,t){const e=to(t,this.size,3);i.uniform3fv(this.addr,e)}function gx(i,t){const e=to(t,this.size,4);i.uniform4fv(this.addr,e)}function _x(i,t){const e=to(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function vx(i,t){const e=to(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function yx(i,t){const e=to(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ex(i,t){i.uniform1iv(this.addr,t)}function Sx(i,t){i.uniform2iv(this.addr,t)}function xx(i,t){i.uniform3iv(this.addr,t)}function Tx(i,t){i.uniform4iv(this.addr,t)}function Mx(i,t){i.uniform1uiv(this.addr,t)}function Ax(i,t){i.uniform2uiv(this.addr,t)}function wx(i,t){i.uniform3uiv(this.addr,t)}function bx(i,t){i.uniform4uiv(this.addr,t)}function Rx(i,t,e){const n=this.cache,r=t.length,s=Hl(e,r);Ye(n,s)||(i.uniform1iv(this.addr,s),Qe(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||eg,s[o])}function Cx(i,t,e){const n=this.cache,r=t.length,s=Hl(e,r);Ye(n,s)||(i.uniform1iv(this.addr,s),Qe(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||ig,s[o])}function Ix(i,t,e){const n=this.cache,r=t.length,s=Hl(e,r);Ye(n,s)||(i.uniform1iv(this.addr,s),Qe(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||rg,s[o])}function Px(i,t,e){const n=this.cache,r=t.length,s=Hl(e,r);Ye(n,s)||(i.uniform1iv(this.addr,s),Qe(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||ng,s[o])}function Dx(i){switch(i){case 5126:return dx;case 35664:return px;case 35665:return mx;case 35666:return gx;case 35674:return _x;case 35675:return vx;case 35676:return yx;case 5124:case 35670:return Ex;case 35667:case 35671:return Sx;case 35668:case 35672:return xx;case 35669:case 35673:return Tx;case 5125:return Mx;case 36294:return Ax;case 36295:return wx;case 36296:return bx;case 35678:case 36198:case 36298:case 36306:case 35682:return Rx;case 35679:case 36299:case 36307:return Cx;case 35680:case 36300:case 36308:case 36293:return Ix;case 36289:case 36303:case 36311:case 36292:return Px}}class Lx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=fx(e.type)}}class Nx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Dx(e.type)}}class Ux{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const Gc=/(\w+)(\])?(\[|\.)?/g;function tp(i,t){i.seq.push(t),i.map[t.id]=t}function Ox(i,t,e){const n=i.name,r=n.length;for(Gc.lastIndex=0;;){const s=Gc.exec(n),o=Gc.lastIndex;let a=s[1];const c=s[2]==="]",u=s[3];if(c&&(a=a|0),u===void 0||u==="["&&o+2===r){tp(e,u===void 0?new Lx(a,i,t):new Nx(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Ux(a),tp(e,f)),e=f}}}class il{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Ox(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function ep(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Fx=37297;let Vx=0;function Bx(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function kx(i){const t=_e.getPrimaries(_e.workingColorSpace),e=_e.getPrimaries(i);let n;switch(t===e?n="":t===pl&&e===dl?n="LinearDisplayP3ToLinearSRGB":t===dl&&e===pl&&(n="LinearSRGBToLinearDisplayP3"),i){case _r:case zl:return[n,"LinearTransferOETF"];case ci:case Hh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function np(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Bx(i.getShaderSource(t),o)}else return r}function zx(i,t){const e=kx(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Hx(i,t){let e;switch(t){case s0:e="Linear";break;case o0:e="Reinhard";break;case a0:e="Cineon";break;case Rm:e="ACESFilmic";break;case c0:e="AgX";break;case u0:e="Neutral";break;case l0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const za=new H;function Gx(){_e.getLuminanceCoefficients(za);const i=za.x.toFixed(4),t=za.y.toFixed(4),e=za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bo).join(`
`)}function qx(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Xx(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function bo(i){return i!==""}function ip(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const $x=/^[ \t]*#include +<([\w\d./]+)>/gm;function qu(i){return i.replace($x,Kx)}const jx=new Map;function Kx(i,t){let e=Kt[t];if(e===void 0){const n=jx.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return qu(e)}const Yx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sp(i){return i.replace(Yx,Qx)}function Qx(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function op(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Zx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Am?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===wm?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ri&&(t="SHADOWMAP_TYPE_VSM"),t}function Jx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ks:case zs:t="ENVMAP_TYPE_CUBE";break;case kl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function tT(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case zs:t="ENVMAP_MODE_REFRACTION";break}return t}function eT(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case bm:t="ENVMAP_BLENDING_MULTIPLY";break;case i0:t="ENVMAP_BLENDING_MIX";break;case r0:t="ENVMAP_BLENDING_ADD";break}return t}function nT(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function iT(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Zx(e),u=Jx(e),h=tT(e),f=eT(e),d=nT(e),m=Wx(e),S=qx(s),M=r.createProgram();let g,v,D=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(bo).join(`
`),g.length>0&&(g+=`
`),v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(bo).join(`
`),v.length>0&&(v+=`
`)):(g=[op(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),v=[op(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ir?"#define TONE_MAPPING":"",e.toneMapping!==ir?Kt.tonemapping_pars_fragment:"",e.toneMapping!==ir?Hx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,zx("linearToOutputTexel",e.outputColorSpace),Gx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(bo).join(`
`)),o=qu(o),o=ip(o,e),o=rp(o,e),a=qu(a),a=ip(a,e),a=rp(a,e),o=sp(o),a=sp(a),e.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,v=["#define varying in",e.glslVersion===Td?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Td?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const R=D+g+o,N=D+v+a,z=ep(r,r.VERTEX_SHADER,R),U=ep(r,r.FRAGMENT_SHADER,N);r.attachShader(M,z),r.attachShader(M,U),e.index0AttributeName!==void 0?r.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function x(y){if(i.debug.checkShaderErrors){const P=r.getProgramInfoLog(M).trim(),A=r.getShaderInfoLog(z).trim(),X=r.getShaderInfoLog(U).trim();let Q=!0,j=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,M,z,U);else{const nt=np(r,z,"vertex"),Y=np(r,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+P+`
`+nt+`
`+Y)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(A===""||X==="")&&(j=!1);j&&(y.diagnostics={runnable:Q,programLog:P,vertexShader:{log:A,prefix:g},fragmentShader:{log:X,prefix:v}})}r.deleteShader(z),r.deleteShader(U),T=new il(r,M),C=Xx(r,M)}let T;this.getUniforms=function(){return T===void 0&&x(this),T};let C;this.getAttributes=function(){return C===void 0&&x(this),C};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(M,Fx)),_},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vx++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=z,this.fragmentShader=U,this}let rT=0;class sT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new oT(t),e.set(t,n)),n}}class oT{constructor(t){this.id=rT++,this.code=t,this.usedTimes=0}}function aT(i,t,e,n,r,s,o){const a=new Wh,c=new sT,u=new Set,h=[],f=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,m=r.vertexTextures;let S=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return u.add(_),_===0?"uv":`uv${_}`}function v(_,y,P,A,X){const Q=A.fog,j=X.geometry,nt=_.isMeshStandardMaterial?A.environment:null,Y=(_.isMeshStandardMaterial?e:t).get(_.envMap||nt),yt=Y&&Y.mapping===kl?Y.image.height:null,Et=M[_.type];_.precision!==null&&(S=r.getMaxPrecision(_.precision),S!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",S,"instead."));const Rt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,jt=Rt!==void 0?Rt.length:0;let zt=0;j.morphAttributes.position!==void 0&&(zt=1),j.morphAttributes.normal!==void 0&&(zt=2),j.morphAttributes.color!==void 0&&(zt=3);let Z,ot,At,_t;if(Et){const He=hi[Et];Z=He.vertexShader,ot=He.fragmentShader}else Z=_.vertexShader,ot=_.fragmentShader,c.update(_),At=c.getVertexShaderID(_),_t=c.getFragmentShaderID(_);const Gt=i.getRenderTarget(),Ot=X.isInstancedMesh===!0,te=X.isBatchedMesh===!0,ue=!!_.map,ie=!!_.matcap,O=!!Y,rn=!!_.aoMap,ee=!!_.lightMap,oe=!!_.bumpMap,Vt=!!_.normalMap,Se=!!_.displacementMap,Bt=!!_.emissiveMap,L=!!_.metalnessMap,w=!!_.roughnessMap,G=_.anisotropy>0,J=_.clearcoat>0,rt=_.dispersion>0,tt=_.iridescence>0,ft=_.sheen>0,at=_.transmission>0,vt=G&&!!_.anisotropyMap,ae=J&&!!_.clearcoatMap,lt=J&&!!_.clearcoatNormalMap,Tt=J&&!!_.clearcoatRoughnessMap,Dt=tt&&!!_.iridescenceMap,Ft=tt&&!!_.iridescenceThicknessMap,St=ft&&!!_.sheenColorMap,ne=ft&&!!_.sheenRoughnessMap,Wt=!!_.specularMap,ye=!!_.specularColorMap,F=!!_.specularIntensityMap,gt=at&&!!_.transmissionMap,K=at&&!!_.thicknessMap,et=!!_.gradientMap,dt=!!_.alphaMap,pt=_.alphaTest>0,$t=!!_.alphaHash,De=!!_.extensions;let $e=ir;_.toneMapped&&(Gt===null||Gt.isXRRenderTarget===!0)&&($e=i.toneMapping);const le={shaderID:Et,shaderType:_.type,shaderName:_.name,vertexShader:Z,fragmentShader:ot,defines:_.defines,customVertexShaderID:At,customFragmentShaderID:_t,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:S,batching:te,batchingColor:te&&X._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&X.instanceColor!==null,instancingMorph:Ot&&X.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Gt===null?i.outputColorSpace:Gt.isXRRenderTarget===!0?Gt.texture.colorSpace:_r,alphaToCoverage:!!_.alphaToCoverage,map:ue,matcap:ie,envMap:O,envMapMode:O&&Y.mapping,envMapCubeUVHeight:yt,aoMap:rn,lightMap:ee,bumpMap:oe,normalMap:Vt,displacementMap:m&&Se,emissiveMap:Bt,normalMapObjectSpace:Vt&&_.normalMapType===p0,normalMapTangentSpace:Vt&&_.normalMapType===km,metalnessMap:L,roughnessMap:w,anisotropy:G,anisotropyMap:vt,clearcoat:J,clearcoatMap:ae,clearcoatNormalMap:lt,clearcoatRoughnessMap:Tt,dispersion:rt,iridescence:tt,iridescenceMap:Dt,iridescenceThicknessMap:Ft,sheen:ft,sheenColorMap:St,sheenRoughnessMap:ne,specularMap:Wt,specularColorMap:ye,specularIntensityMap:F,transmission:at,transmissionMap:gt,thicknessMap:K,gradientMap:et,opaque:_.transparent===!1&&_.blending===Cs&&_.alphaToCoverage===!1,alphaMap:dt,alphaTest:pt,alphaHash:$t,combine:_.combine,mapUv:ue&&g(_.map.channel),aoMapUv:rn&&g(_.aoMap.channel),lightMapUv:ee&&g(_.lightMap.channel),bumpMapUv:oe&&g(_.bumpMap.channel),normalMapUv:Vt&&g(_.normalMap.channel),displacementMapUv:Se&&g(_.displacementMap.channel),emissiveMapUv:Bt&&g(_.emissiveMap.channel),metalnessMapUv:L&&g(_.metalnessMap.channel),roughnessMapUv:w&&g(_.roughnessMap.channel),anisotropyMapUv:vt&&g(_.anisotropyMap.channel),clearcoatMapUv:ae&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:lt&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:St&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:ne&&g(_.sheenRoughnessMap.channel),specularMapUv:Wt&&g(_.specularMap.channel),specularColorMapUv:ye&&g(_.specularColorMap.channel),specularIntensityMapUv:F&&g(_.specularIntensityMap.channel),transmissionMapUv:gt&&g(_.transmissionMap.channel),thicknessMapUv:K&&g(_.thicknessMap.channel),alphaMapUv:dt&&g(_.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Vt||G),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!j.attributes.uv&&(ue||dt),fog:!!Q,useFog:_.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:d,skinning:X.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:jt,morphTextureStride:zt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:$e,decodeVideoTexture:ue&&_.map.isVideoTexture===!0&&_e.getTransfer(_.map.colorSpace)===be,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Pi,flipSided:_.side===In,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:De&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&_.extensions.multiDraw===!0||te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return le.vertexUv1s=u.has(1),le.vertexUv2s=u.has(2),le.vertexUv3s=u.has(3),u.clear(),le}function D(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)y.push(P),y.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(R(y,_),N(y,_),y.push(i.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function R(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function N(_,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.alphaToCoverage&&a.enable(20),_.push(a.mask)}function z(_){const y=M[_.type];let P;if(y){const A=hi[y];P=W0.clone(A.uniforms)}else P=_.uniforms;return P}function U(_,y){let P;for(let A=0,X=h.length;A<X;A++){const Q=h[A];if(Q.cacheKey===y){P=Q,++P.usedTimes;break}}return P===void 0&&(P=new iT(i,y,_,s),h.push(P)),P}function x(_){if(--_.usedTimes===0){const y=h.indexOf(_);h[y]=h[h.length-1],h.pop(),_.destroy()}}function T(_){c.remove(_)}function C(){c.dispose()}return{getParameters:v,getProgramCacheKey:D,getUniforms:z,acquireProgram:U,releaseProgram:x,releaseShaderCache:T,programs:h,dispose:C}}function lT(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function cT(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ap(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function lp(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(f,d,m,S,M,g){let v=i[t];return v===void 0?(v={id:f.id,object:f,geometry:d,material:m,groupOrder:S,renderOrder:f.renderOrder,z:M,group:g},i[t]=v):(v.id=f.id,v.object=f,v.geometry=d,v.material=m,v.groupOrder=S,v.renderOrder=f.renderOrder,v.z=M,v.group=g),t++,v}function a(f,d,m,S,M,g){const v=o(f,d,m,S,M,g);m.transmission>0?n.push(v):m.transparent===!0?r.push(v):e.push(v)}function c(f,d,m,S,M,g){const v=o(f,d,m,S,M,g);m.transmission>0?n.unshift(v):m.transparent===!0?r.unshift(v):e.unshift(v)}function u(f,d){e.length>1&&e.sort(f||cT),n.length>1&&n.sort(d||ap),r.length>1&&r.sort(d||ap)}function h(){for(let f=t,d=i.length;f<d;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:h,sort:u}}function uT(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new lp,i.set(n,[o])):r>=s.length?(o=new lp,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function hT(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new Ut};break;case"SpotLight":e={position:new H,direction:new H,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new H,halfWidth:new H,halfHeight:new H};break}return i[t.id]=e,e}}}function fT(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let dT=0;function pT(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function mT(i){const t=new hT,e=fT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new H);const r=new H,s=new Pe,o=new Pe;function a(u){let h=0,f=0,d=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let m=0,S=0,M=0,g=0,v=0,D=0,R=0,N=0,z=0,U=0,x=0;u.sort(pT);for(let C=0,_=u.length;C<_;C++){const y=u[C],P=y.color,A=y.intensity,X=y.distance,Q=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)h+=P.r*A,f+=P.g*A,d+=P.b*A;else if(y.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(y.sh.coefficients[j],A);x++}else if(y.isDirectionalLight){const j=t.get(y);if(j.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const nt=y.shadow,Y=e.get(y);Y.shadowIntensity=nt.intensity,Y.shadowBias=nt.bias,Y.shadowNormalBias=nt.normalBias,Y.shadowRadius=nt.radius,Y.shadowMapSize=nt.mapSize,n.directionalShadow[m]=Y,n.directionalShadowMap[m]=Q,n.directionalShadowMatrix[m]=y.shadow.matrix,D++}n.directional[m]=j,m++}else if(y.isSpotLight){const j=t.get(y);j.position.setFromMatrixPosition(y.matrixWorld),j.color.copy(P).multiplyScalar(A),j.distance=X,j.coneCos=Math.cos(y.angle),j.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),j.decay=y.decay,n.spot[M]=j;const nt=y.shadow;if(y.map&&(n.spotLightMap[z]=y.map,z++,nt.updateMatrices(y),y.castShadow&&U++),n.spotLightMatrix[M]=nt.matrix,y.castShadow){const Y=e.get(y);Y.shadowIntensity=nt.intensity,Y.shadowBias=nt.bias,Y.shadowNormalBias=nt.normalBias,Y.shadowRadius=nt.radius,Y.shadowMapSize=nt.mapSize,n.spotShadow[M]=Y,n.spotShadowMap[M]=Q,N++}M++}else if(y.isRectAreaLight){const j=t.get(y);j.color.copy(P).multiplyScalar(A),j.halfWidth.set(y.width*.5,0,0),j.halfHeight.set(0,y.height*.5,0),n.rectArea[g]=j,g++}else if(y.isPointLight){const j=t.get(y);if(j.color.copy(y.color).multiplyScalar(y.intensity),j.distance=y.distance,j.decay=y.decay,y.castShadow){const nt=y.shadow,Y=e.get(y);Y.shadowIntensity=nt.intensity,Y.shadowBias=nt.bias,Y.shadowNormalBias=nt.normalBias,Y.shadowRadius=nt.radius,Y.shadowMapSize=nt.mapSize,Y.shadowCameraNear=nt.camera.near,Y.shadowCameraFar=nt.camera.far,n.pointShadow[S]=Y,n.pointShadowMap[S]=Q,n.pointShadowMatrix[S]=y.shadow.matrix,R++}n.point[S]=j,S++}else if(y.isHemisphereLight){const j=t.get(y);j.skyColor.copy(y.color).multiplyScalar(A),j.groundColor.copy(y.groundColor).multiplyScalar(A),n.hemi[v]=j,v++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const T=n.hash;(T.directionalLength!==m||T.pointLength!==S||T.spotLength!==M||T.rectAreaLength!==g||T.hemiLength!==v||T.numDirectionalShadows!==D||T.numPointShadows!==R||T.numSpotShadows!==N||T.numSpotMaps!==z||T.numLightProbes!==x)&&(n.directional.length=m,n.spot.length=M,n.rectArea.length=g,n.point.length=S,n.hemi.length=v,n.directionalShadow.length=D,n.directionalShadowMap.length=D,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=N,n.spotShadowMap.length=N,n.directionalShadowMatrix.length=D,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=N+z-U,n.spotLightMap.length=z,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=x,T.directionalLength=m,T.pointLength=S,T.spotLength=M,T.rectAreaLength=g,T.hemiLength=v,T.numDirectionalShadows=D,T.numPointShadows=R,T.numSpotShadows=N,T.numSpotMaps=z,T.numLightProbes=x,n.version=dT++)}function c(u,h){let f=0,d=0,m=0,S=0,M=0;const g=h.matrixWorldInverse;for(let v=0,D=u.length;v<D;v++){const R=u[v];if(R.isDirectionalLight){const N=n.directional[f];N.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(g),f++}else if(R.isSpotLight){const N=n.spot[m];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(g),N.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(g),m++}else if(R.isRectAreaLight){const N=n.rectArea[S];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(g),o.identity(),s.copy(R.matrixWorld),s.premultiply(g),o.extractRotation(s),N.halfWidth.set(R.width*.5,0,0),N.halfHeight.set(0,R.height*.5,0),N.halfWidth.applyMatrix4(o),N.halfHeight.applyMatrix4(o),S++}else if(R.isPointLight){const N=n.point[d];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(g),d++}else if(R.isHemisphereLight){const N=n.hemi[M];N.direction.setFromMatrixPosition(R.matrixWorld),N.direction.transformDirection(g),M++}}}return{setup:a,setupView:c,state:n}}function cp(i){const t=new mT(i),e=[],n=[];function r(h){u.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function gT(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new cp(i),t.set(r,[a])):s>=o.length?(a=new cp(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class _T extends Js{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=f0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class vT extends Js{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const yT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ET=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ST(i,t,e){let n=new Xh;const r=new Jt,s=new Jt,o=new Ve,a=new _T({depthPacking:d0}),c=new vT,u={},h=e.maxTextureSize,f={[cr]:In,[In]:cr,[Pi]:Pi},d=new ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Jt},radius:{value:4}},vertexShader:yT,fragmentShader:ET}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const S=new $n;S.setAttribute("position",new ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Ce(S,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Am;let v=this.type;this.render=function(U,x,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||U.length===0)return;const C=i.getRenderTarget(),_=i.getActiveCubeFace(),y=i.getActiveMipmapLevel(),P=i.state;P.setBlending(nr),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const A=v!==Ri&&this.type===Ri,X=v===Ri&&this.type!==Ri;for(let Q=0,j=U.length;Q<j;Q++){const nt=U[Q],Y=nt.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const yt=Y.getFrameExtents();if(r.multiply(yt),s.copy(Y.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/yt.x),r.x=s.x*yt.x,Y.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/yt.y),r.y=s.y*yt.y,Y.mapSize.y=s.y)),Y.map===null||A===!0||X===!0){const Rt=this.type!==Ri?{minFilter:Gn,magFilter:Gn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Gr(r.x,r.y,Rt),Y.map.texture.name=nt.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const Et=Y.getViewportCount();for(let Rt=0;Rt<Et;Rt++){const jt=Y.getViewport(Rt);o.set(s.x*jt.x,s.y*jt.y,s.x*jt.z,s.y*jt.w),P.viewport(o),Y.updateMatrices(nt,Rt),n=Y.getFrustum(),N(x,T,Y.camera,nt,this.type)}Y.isPointLightShadow!==!0&&this.type===Ri&&D(Y,T),Y.needsUpdate=!1}v=this.type,g.needsUpdate=!1,i.setRenderTarget(C,_,y)};function D(U,x){const T=t.update(M);d.defines.VSM_SAMPLES!==U.blurSamples&&(d.defines.VSM_SAMPLES=U.blurSamples,m.defines.VSM_SAMPLES=U.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Gr(r.x,r.y)),d.uniforms.shadow_pass.value=U.map.texture,d.uniforms.resolution.value=U.mapSize,d.uniforms.radius.value=U.radius,i.setRenderTarget(U.mapPass),i.clear(),i.renderBufferDirect(x,null,T,d,M,null),m.uniforms.shadow_pass.value=U.mapPass.texture,m.uniforms.resolution.value=U.mapSize,m.uniforms.radius.value=U.radius,i.setRenderTarget(U.map),i.clear(),i.renderBufferDirect(x,null,T,m,M,null)}function R(U,x,T,C){let _=null;const y=T.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(y!==void 0)_=y;else if(_=T.isPointLight===!0?c:a,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0){const P=_.uuid,A=x.uuid;let X=u[P];X===void 0&&(X={},u[P]=X);let Q=X[A];Q===void 0&&(Q=_.clone(),X[A]=Q,x.addEventListener("dispose",z)),_=Q}if(_.visible=x.visible,_.wireframe=x.wireframe,C===Ri?_.side=x.shadowSide!==null?x.shadowSide:x.side:_.side=x.shadowSide!==null?x.shadowSide:f[x.side],_.alphaMap=x.alphaMap,_.alphaTest=x.alphaTest,_.map=x.map,_.clipShadows=x.clipShadows,_.clippingPlanes=x.clippingPlanes,_.clipIntersection=x.clipIntersection,_.displacementMap=x.displacementMap,_.displacementScale=x.displacementScale,_.displacementBias=x.displacementBias,_.wireframeLinewidth=x.wireframeLinewidth,_.linewidth=x.linewidth,T.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const P=i.properties.get(_);P.light=T}return _}function N(U,x,T,C,_){if(U.visible===!1)return;if(U.layers.test(x.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&_===Ri)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,U.matrixWorld);const A=t.update(U),X=U.material;if(Array.isArray(X)){const Q=A.groups;for(let j=0,nt=Q.length;j<nt;j++){const Y=Q[j],yt=X[Y.materialIndex];if(yt&&yt.visible){const Et=R(U,yt,C,_);U.onBeforeShadow(i,U,x,T,A,Et,Y),i.renderBufferDirect(T,null,A,Et,U,Y),U.onAfterShadow(i,U,x,T,A,Et,Y)}}}else if(X.visible){const Q=R(U,X,C,_);U.onBeforeShadow(i,U,x,T,A,Q,null),i.renderBufferDirect(T,null,A,Q,U,null),U.onAfterShadow(i,U,x,T,A,Q,null)}}const P=U.children;for(let A=0,X=P.length;A<X;A++)N(P[A],x,T,C,_)}function z(U){U.target.removeEventListener("dispose",z);for(const T in u){const C=u[T],_=U.target.uuid;_ in C&&(C[_].dispose(),delete C[_])}}}const xT={[ou]:au,[lu]:hu,[cu]:fu,[Bs]:uu,[au]:ou,[hu]:lu,[fu]:cu,[uu]:Bs};function TT(i){function t(){let F=!1;const gt=new Ve;let K=null;const et=new Ve(0,0,0,0);return{setMask:function(dt){K!==dt&&!F&&(i.colorMask(dt,dt,dt,dt),K=dt)},setLocked:function(dt){F=dt},setClear:function(dt,pt,$t,De,$e){$e===!0&&(dt*=De,pt*=De,$t*=De),gt.set(dt,pt,$t,De),et.equals(gt)===!1&&(i.clearColor(dt,pt,$t,De),et.copy(gt))},reset:function(){F=!1,K=null,et.set(-1,0,0,0)}}}function e(){let F=!1,gt=!1,K=null,et=null,dt=null;return{setReversed:function(pt){gt=pt},setTest:function(pt){pt?At(i.DEPTH_TEST):_t(i.DEPTH_TEST)},setMask:function(pt){K!==pt&&!F&&(i.depthMask(pt),K=pt)},setFunc:function(pt){if(gt&&(pt=xT[pt]),et!==pt){switch(pt){case ou:i.depthFunc(i.NEVER);break;case au:i.depthFunc(i.ALWAYS);break;case lu:i.depthFunc(i.LESS);break;case Bs:i.depthFunc(i.LEQUAL);break;case cu:i.depthFunc(i.EQUAL);break;case uu:i.depthFunc(i.GEQUAL);break;case hu:i.depthFunc(i.GREATER);break;case fu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}et=pt}},setLocked:function(pt){F=pt},setClear:function(pt){dt!==pt&&(i.clearDepth(pt),dt=pt)},reset:function(){F=!1,K=null,et=null,dt=null}}}function n(){let F=!1,gt=null,K=null,et=null,dt=null,pt=null,$t=null,De=null,$e=null;return{setTest:function(le){F||(le?At(i.STENCIL_TEST):_t(i.STENCIL_TEST))},setMask:function(le){gt!==le&&!F&&(i.stencilMask(le),gt=le)},setFunc:function(le,He,Vn){(K!==le||et!==He||dt!==Vn)&&(i.stencilFunc(le,He,Vn),K=le,et=He,dt=Vn)},setOp:function(le,He,Vn){(pt!==le||$t!==He||De!==Vn)&&(i.stencilOp(le,He,Vn),pt=le,$t=He,De=Vn)},setLocked:function(le){F=le},setClear:function(le){$e!==le&&(i.clearStencil(le),$e=le)},reset:function(){F=!1,gt=null,K=null,et=null,dt=null,pt=null,$t=null,De=null,$e=null}}}const r=new t,s=new e,o=new n,a=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],m=null,S=!1,M=null,g=null,v=null,D=null,R=null,N=null,z=null,U=new Ut(0,0,0),x=0,T=!1,C=null,_=null,y=null,P=null,A=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,j=0;const nt=i.getParameter(i.VERSION);nt.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(nt)[1]),Q=j>=1):nt.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),Q=j>=2);let Y=null,yt={};const Et=i.getParameter(i.SCISSOR_BOX),Rt=i.getParameter(i.VIEWPORT),jt=new Ve().fromArray(Et),zt=new Ve().fromArray(Rt);function Z(F,gt,K,et){const dt=new Uint8Array(4),pt=i.createTexture();i.bindTexture(F,pt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $t=0;$t<K;$t++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,et,0,i.RGBA,i.UNSIGNED_BYTE,dt):i.texImage2D(gt+$t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,dt);return pt}const ot={};ot[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),ot[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ot[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),At(i.DEPTH_TEST),s.setFunc(Bs),ee(!1),oe(vd),At(i.CULL_FACE),O(nr);function At(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function _t(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function Gt(F,gt){return h[F]!==gt?(i.bindFramebuffer(F,gt),h[F]=gt,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=gt),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function Ot(F,gt){let K=d,et=!1;if(F){K=f.get(gt),K===void 0&&(K=[],f.set(gt,K));const dt=F.textures;if(K.length!==dt.length||K[0]!==i.COLOR_ATTACHMENT0){for(let pt=0,$t=dt.length;pt<$t;pt++)K[pt]=i.COLOR_ATTACHMENT0+pt;K.length=dt.length,et=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,et=!0);et&&i.drawBuffers(K)}function te(F){return m!==F?(i.useProgram(F),m=F,!0):!1}const ue={[Ir]:i.FUNC_ADD,[kv]:i.FUNC_SUBTRACT,[zv]:i.FUNC_REVERSE_SUBTRACT};ue[Hv]=i.MIN,ue[Gv]=i.MAX;const ie={[Wv]:i.ZERO,[qv]:i.ONE,[Xv]:i.SRC_COLOR,[ru]:i.SRC_ALPHA,[Zv]:i.SRC_ALPHA_SATURATE,[Yv]:i.DST_COLOR,[jv]:i.DST_ALPHA,[$v]:i.ONE_MINUS_SRC_COLOR,[su]:i.ONE_MINUS_SRC_ALPHA,[Qv]:i.ONE_MINUS_DST_COLOR,[Kv]:i.ONE_MINUS_DST_ALPHA,[Jv]:i.CONSTANT_COLOR,[t0]:i.ONE_MINUS_CONSTANT_COLOR,[e0]:i.CONSTANT_ALPHA,[n0]:i.ONE_MINUS_CONSTANT_ALPHA};function O(F,gt,K,et,dt,pt,$t,De,$e,le){if(F===nr){S===!0&&(_t(i.BLEND),S=!1);return}if(S===!1&&(At(i.BLEND),S=!0),F!==Bv){if(F!==M||le!==T){if((g!==Ir||R!==Ir)&&(i.blendEquation(i.FUNC_ADD),g=Ir,R=Ir),le)switch(F){case Cs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yd:i.blendFunc(i.ONE,i.ONE);break;case Ed:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yd:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ed:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}v=null,D=null,N=null,z=null,U.set(0,0,0),x=0,M=F,T=le}return}dt=dt||gt,pt=pt||K,$t=$t||et,(gt!==g||dt!==R)&&(i.blendEquationSeparate(ue[gt],ue[dt]),g=gt,R=dt),(K!==v||et!==D||pt!==N||$t!==z)&&(i.blendFuncSeparate(ie[K],ie[et],ie[pt],ie[$t]),v=K,D=et,N=pt,z=$t),(De.equals(U)===!1||$e!==x)&&(i.blendColor(De.r,De.g,De.b,$e),U.copy(De),x=$e),M=F,T=!1}function rn(F,gt){F.side===Pi?_t(i.CULL_FACE):At(i.CULL_FACE);let K=F.side===In;gt&&(K=!K),ee(K),F.blending===Cs&&F.transparent===!1?O(nr):O(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),r.setMask(F.colorWrite);const et=F.stencilWrite;o.setTest(et),et&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Se(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?At(i.SAMPLE_ALPHA_TO_COVERAGE):_t(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(F){C!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),C=F)}function oe(F){F!==Fv?(At(i.CULL_FACE),F!==_&&(F===vd?i.cullFace(i.BACK):F===Vv?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_t(i.CULL_FACE),_=F}function Vt(F){F!==y&&(Q&&i.lineWidth(F),y=F)}function Se(F,gt,K){F?(At(i.POLYGON_OFFSET_FILL),(P!==gt||A!==K)&&(i.polygonOffset(gt,K),P=gt,A=K)):_t(i.POLYGON_OFFSET_FILL)}function Bt(F){F?At(i.SCISSOR_TEST):_t(i.SCISSOR_TEST)}function L(F){F===void 0&&(F=i.TEXTURE0+X-1),Y!==F&&(i.activeTexture(F),Y=F)}function w(F,gt,K){K===void 0&&(Y===null?K=i.TEXTURE0+X-1:K=Y);let et=yt[K];et===void 0&&(et={type:void 0,texture:void 0},yt[K]=et),(et.type!==F||et.texture!==gt)&&(Y!==K&&(i.activeTexture(K),Y=K),i.bindTexture(F,gt||ot[F]),et.type=F,et.texture=gt)}function G(){const F=yt[Y];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function rt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function tt(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ft(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function vt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function lt(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Tt(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Dt(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ft(F){jt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),jt.copy(F))}function St(F){zt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),zt.copy(F))}function ne(F,gt){let K=c.get(gt);K===void 0&&(K=new WeakMap,c.set(gt,K));let et=K.get(F);et===void 0&&(et=i.getUniformBlockIndex(gt,F.name),K.set(F,et))}function Wt(F,gt){const et=c.get(gt).get(F);a.get(gt)!==et&&(i.uniformBlockBinding(gt,et,F.__bindingPointIndex),a.set(gt,et))}function ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Y=null,yt={},h={},f=new WeakMap,d=[],m=null,S=!1,M=null,g=null,v=null,D=null,R=null,N=null,z=null,U=new Ut(0,0,0),x=0,T=!1,C=null,_=null,y=null,P=null,A=null,jt.set(0,0,i.canvas.width,i.canvas.height),zt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:At,disable:_t,bindFramebuffer:Gt,drawBuffers:Ot,useProgram:te,setBlending:O,setMaterial:rn,setFlipSided:ee,setCullFace:oe,setLineWidth:Vt,setPolygonOffset:Se,setScissorTest:Bt,activeTexture:L,bindTexture:w,unbindTexture:G,compressedTexImage2D:J,compressedTexImage3D:rt,texImage2D:Tt,texImage3D:Dt,updateUBOMapping:ne,uniformBlockBinding:Wt,texStorage2D:ae,texStorage3D:lt,texSubImage2D:tt,texSubImage3D:ft,compressedTexSubImage2D:at,compressedTexSubImage3D:vt,scissor:Ft,viewport:St,reset:ye}}function up(i,t,e,n){const r=MT(n);switch(e){case Lm:return i*t;case Um:return i*t;case Om:return i*t*2;case Fm:return i*t/r.components*r.byteLength;case Bh:return i*t/r.components*r.byteLength;case Vm:return i*t*2/r.components*r.byteLength;case kh:return i*t*2/r.components*r.byteLength;case Nm:return i*t*3/r.components*r.byteLength;case ni:return i*t*4/r.components*r.byteLength;case zh:return i*t*4/r.components*r.byteLength;case Qa:case Za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ja:case tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vu:case Eu:return Math.max(i,16)*Math.max(t,8)/4;case _u:case yu:return Math.max(i,8)*Math.max(t,8)/2;case Su:case xu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Tu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Mu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Au:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case wu:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case bu:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ru:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Cu:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Iu:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Pu:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Du:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Lu:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Nu:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Uu:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ou:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Fu:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case el:case Vu:case Bu:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Bm:case ku:return Math.ceil(i/4)*Math.ceil(t/4)*8;case zu:case Hu:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function MT(i){switch(i){case Oi:case Im:return{byteLength:1,components:1};case Vo:case Pm:case Qo:return{byteLength:2,components:1};case Fh:case Vh:return{byteLength:2,components:4};case Hr:case Oh:case Di:return{byteLength:4,components:1};case Dm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function AT(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Jt,h=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(L,w){return m?new OffscreenCanvas(L,w):gl("canvas")}function M(L,w,G){let J=1;const rt=Bt(L);if((rt.width>G||rt.height>G)&&(J=G/Math.max(rt.width,rt.height)),J<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const tt=Math.floor(J*rt.width),ft=Math.floor(J*rt.height);f===void 0&&(f=S(tt,ft));const at=w?S(tt,ft):f;return at.width=tt,at.height=ft,at.getContext("2d").drawImage(L,0,0,tt,ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+tt+"x"+ft+")."),at}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),L;return L}function g(L){return L.generateMipmaps&&L.minFilter!==Gn&&L.minFilter!==ti}function v(L){i.generateMipmap(L)}function D(L,w,G,J,rt=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let tt=w;if(w===i.RED&&(G===i.FLOAT&&(tt=i.R32F),G===i.HALF_FLOAT&&(tt=i.R16F),G===i.UNSIGNED_BYTE&&(tt=i.R8)),w===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(tt=i.R8UI),G===i.UNSIGNED_SHORT&&(tt=i.R16UI),G===i.UNSIGNED_INT&&(tt=i.R32UI),G===i.BYTE&&(tt=i.R8I),G===i.SHORT&&(tt=i.R16I),G===i.INT&&(tt=i.R32I)),w===i.RG&&(G===i.FLOAT&&(tt=i.RG32F),G===i.HALF_FLOAT&&(tt=i.RG16F),G===i.UNSIGNED_BYTE&&(tt=i.RG8)),w===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(tt=i.RG8UI),G===i.UNSIGNED_SHORT&&(tt=i.RG16UI),G===i.UNSIGNED_INT&&(tt=i.RG32UI),G===i.BYTE&&(tt=i.RG8I),G===i.SHORT&&(tt=i.RG16I),G===i.INT&&(tt=i.RG32I)),w===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),G===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),G===i.UNSIGNED_INT&&(tt=i.RGB32UI),G===i.BYTE&&(tt=i.RGB8I),G===i.SHORT&&(tt=i.RGB16I),G===i.INT&&(tt=i.RGB32I)),w===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),G===i.UNSIGNED_INT&&(tt=i.RGBA32UI),G===i.BYTE&&(tt=i.RGBA8I),G===i.SHORT&&(tt=i.RGBA16I),G===i.INT&&(tt=i.RGBA32I)),w===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),w===i.RGBA){const ft=rt?fl:_e.getTransfer(J);G===i.FLOAT&&(tt=i.RGBA32F),G===i.HALF_FLOAT&&(tt=i.RGBA16F),G===i.UNSIGNED_BYTE&&(tt=ft===be?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function R(L,w){let G;return L?w===null||w===Hr||w===Hs?G=i.DEPTH24_STENCIL8:w===Di?G=i.DEPTH32F_STENCIL8:w===Vo&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Hr||w===Hs?G=i.DEPTH_COMPONENT24:w===Di?G=i.DEPTH_COMPONENT32F:w===Vo&&(G=i.DEPTH_COMPONENT16),G}function N(L,w){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==Gn&&L.minFilter!==ti?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function z(L){const w=L.target;w.removeEventListener("dispose",z),x(w),w.isVideoTexture&&h.delete(w)}function U(L){const w=L.target;w.removeEventListener("dispose",U),C(w)}function x(L){const w=n.get(L);if(w.__webglInit===void 0)return;const G=L.source,J=d.get(G);if(J){const rt=J[w.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&T(L),Object.keys(J).length===0&&d.delete(G)}n.remove(L)}function T(L){const w=n.get(L);i.deleteTexture(w.__webglTexture);const G=L.source,J=d.get(G);delete J[w.__cacheKey],o.memory.textures--}function C(L){const w=n.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let rt=0;rt<w.__webglFramebuffer[J].length;rt++)i.deleteFramebuffer(w.__webglFramebuffer[J][rt]);else i.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)i.deleteFramebuffer(w.__webglFramebuffer[J]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const G=L.textures;for(let J=0,rt=G.length;J<rt;J++){const tt=n.get(G[J]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),o.memory.textures--),n.remove(G[J])}n.remove(L)}let _=0;function y(){_=0}function P(){const L=_;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),_+=1,L}function A(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function X(L,w){const G=n.get(L);if(L.isVideoTexture&&Vt(L),L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){const J=L.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{zt(G,L,w);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+w)}function Q(L,w){const G=n.get(L);if(L.version>0&&G.__version!==L.version){zt(G,L,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+w)}function j(L,w){const G=n.get(L);if(L.version>0&&G.__version!==L.version){zt(G,L,w);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+w)}function nt(L,w){const G=n.get(L);if(L.version>0&&G.__version!==L.version){Z(G,L,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+w)}const Y={[mu]:i.REPEAT,[Dr]:i.CLAMP_TO_EDGE,[gu]:i.MIRRORED_REPEAT},yt={[Gn]:i.NEAREST,[h0]:i.NEAREST_MIPMAP_NEAREST,[Sa]:i.NEAREST_MIPMAP_LINEAR,[ti]:i.LINEAR,[pc]:i.LINEAR_MIPMAP_NEAREST,[Lr]:i.LINEAR_MIPMAP_LINEAR},Et={[m0]:i.NEVER,[S0]:i.ALWAYS,[g0]:i.LESS,[zm]:i.LEQUAL,[_0]:i.EQUAL,[E0]:i.GEQUAL,[v0]:i.GREATER,[y0]:i.NOTEQUAL};function Rt(L,w){if(w.type===Di&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===ti||w.magFilter===pc||w.magFilter===Sa||w.magFilter===Lr||w.minFilter===ti||w.minFilter===pc||w.minFilter===Sa||w.minFilter===Lr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,Y[w.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,Y[w.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,Y[w.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,yt[w.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,yt[w.minFilter]),w.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Et[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Gn||w.minFilter!==Sa&&w.minFilter!==Lr||w.type===Di&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function jt(L,w){let G=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",z));const J=w.source;let rt=d.get(J);rt===void 0&&(rt={},d.set(J,rt));const tt=A(w);if(tt!==L.__cacheKey){rt[tt]===void 0&&(rt[tt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),rt[tt].usedTimes++;const ft=rt[L.__cacheKey];ft!==void 0&&(rt[L.__cacheKey].usedTimes--,ft.usedTimes===0&&T(w)),L.__cacheKey=tt,L.__webglTexture=rt[tt].texture}return G}function zt(L,w,G){let J=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=i.TEXTURE_3D);const rt=jt(L,w),tt=w.source;e.bindTexture(J,L.__webglTexture,i.TEXTURE0+G);const ft=n.get(tt);if(tt.version!==ft.__version||rt===!0){e.activeTexture(i.TEXTURE0+G);const at=_e.getPrimaries(_e.workingColorSpace),vt=w.colorSpace===Zi?null:_e.getPrimaries(w.colorSpace),ae=w.colorSpace===Zi||at===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let lt=M(w.image,!1,r.maxTextureSize);lt=Se(w,lt);const Tt=s.convert(w.format,w.colorSpace),Dt=s.convert(w.type);let Ft=D(w.internalFormat,Tt,Dt,w.colorSpace,w.isVideoTexture);Rt(J,w);let St;const ne=w.mipmaps,Wt=w.isVideoTexture!==!0,ye=ft.__version===void 0||rt===!0,F=tt.dataReady,gt=N(w,lt);if(w.isDepthTexture)Ft=R(w.format===Gs,w.type),ye&&(Wt?e.texStorage2D(i.TEXTURE_2D,1,Ft,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,Ft,lt.width,lt.height,0,Tt,Dt,null));else if(w.isDataTexture)if(ne.length>0){Wt&&ye&&e.texStorage2D(i.TEXTURE_2D,gt,Ft,ne[0].width,ne[0].height);for(let K=0,et=ne.length;K<et;K++)St=ne[K],Wt?F&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,St.width,St.height,Tt,Dt,St.data):e.texImage2D(i.TEXTURE_2D,K,Ft,St.width,St.height,0,Tt,Dt,St.data);w.generateMipmaps=!1}else Wt?(ye&&e.texStorage2D(i.TEXTURE_2D,gt,Ft,lt.width,lt.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt.width,lt.height,Tt,Dt,lt.data)):e.texImage2D(i.TEXTURE_2D,0,Ft,lt.width,lt.height,0,Tt,Dt,lt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Wt&&ye&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Ft,ne[0].width,ne[0].height,lt.depth);for(let K=0,et=ne.length;K<et;K++)if(St=ne[K],w.format!==ni)if(Tt!==null)if(Wt){if(F)if(w.layerUpdates.size>0){const dt=up(St.width,St.height,w.format,w.type);for(const pt of w.layerUpdates){const $t=St.data.subarray(pt*dt/St.data.BYTES_PER_ELEMENT,(pt+1)*dt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,pt,St.width,St.height,1,Tt,$t,0,0)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,St.width,St.height,lt.depth,Tt,St.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,Ft,St.width,St.height,lt.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,St.width,St.height,lt.depth,Tt,Dt,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,Ft,St.width,St.height,lt.depth,0,Tt,Dt,St.data)}else{Wt&&ye&&e.texStorage2D(i.TEXTURE_2D,gt,Ft,ne[0].width,ne[0].height);for(let K=0,et=ne.length;K<et;K++)St=ne[K],w.format!==ni?Tt!==null?Wt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,St.width,St.height,Tt,St.data):e.compressedTexImage2D(i.TEXTURE_2D,K,Ft,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?F&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,St.width,St.height,Tt,Dt,St.data):e.texImage2D(i.TEXTURE_2D,K,Ft,St.width,St.height,0,Tt,Dt,St.data)}else if(w.isDataArrayTexture)if(Wt){if(ye&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Ft,lt.width,lt.height,lt.depth),F)if(w.layerUpdates.size>0){const K=up(lt.width,lt.height,w.format,w.type);for(const et of w.layerUpdates){const dt=lt.data.subarray(et*K/lt.data.BYTES_PER_ELEMENT,(et+1)*K/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,lt.width,lt.height,1,Tt,Dt,dt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Tt,Dt,lt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,lt.width,lt.height,lt.depth,0,Tt,Dt,lt.data);else if(w.isData3DTexture)Wt?(ye&&e.texStorage3D(i.TEXTURE_3D,gt,Ft,lt.width,lt.height,lt.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Tt,Dt,lt.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,lt.width,lt.height,lt.depth,0,Tt,Dt,lt.data);else if(w.isFramebufferTexture){if(ye)if(Wt)e.texStorage2D(i.TEXTURE_2D,gt,Ft,lt.width,lt.height);else{let K=lt.width,et=lt.height;for(let dt=0;dt<gt;dt++)e.texImage2D(i.TEXTURE_2D,dt,Ft,K,et,0,Tt,Dt,null),K>>=1,et>>=1}}else if(ne.length>0){if(Wt&&ye){const K=Bt(ne[0]);e.texStorage2D(i.TEXTURE_2D,gt,Ft,K.width,K.height)}for(let K=0,et=ne.length;K<et;K++)St=ne[K],Wt?F&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,Tt,Dt,St):e.texImage2D(i.TEXTURE_2D,K,Ft,Tt,Dt,St);w.generateMipmaps=!1}else if(Wt){if(ye){const K=Bt(lt);e.texStorage2D(i.TEXTURE_2D,gt,Ft,K.width,K.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,Dt,lt)}else e.texImage2D(i.TEXTURE_2D,0,Ft,Tt,Dt,lt);g(w)&&v(J),ft.__version=tt.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Z(L,w,G){if(w.image.length!==6)return;const J=jt(L,w),rt=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+G);const tt=n.get(rt);if(rt.version!==tt.__version||J===!0){e.activeTexture(i.TEXTURE0+G);const ft=_e.getPrimaries(_e.workingColorSpace),at=w.colorSpace===Zi?null:_e.getPrimaries(w.colorSpace),vt=w.colorSpace===Zi||ft===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const ae=w.isCompressedTexture||w.image[0].isCompressedTexture,lt=w.image[0]&&w.image[0].isDataTexture,Tt=[];for(let et=0;et<6;et++)!ae&&!lt?Tt[et]=M(w.image[et],!0,r.maxCubemapSize):Tt[et]=lt?w.image[et].image:w.image[et],Tt[et]=Se(w,Tt[et]);const Dt=Tt[0],Ft=s.convert(w.format,w.colorSpace),St=s.convert(w.type),ne=D(w.internalFormat,Ft,St,w.colorSpace),Wt=w.isVideoTexture!==!0,ye=tt.__version===void 0||J===!0,F=rt.dataReady;let gt=N(w,Dt);Rt(i.TEXTURE_CUBE_MAP,w);let K;if(ae){Wt&&ye&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,ne,Dt.width,Dt.height);for(let et=0;et<6;et++){K=Tt[et].mipmaps;for(let dt=0;dt<K.length;dt++){const pt=K[dt];w.format!==ni?Ft!==null?Wt?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,dt,0,0,pt.width,pt.height,Ft,pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,dt,ne,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,dt,0,0,pt.width,pt.height,Ft,St,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,dt,ne,pt.width,pt.height,0,Ft,St,pt.data)}}}else{if(K=w.mipmaps,Wt&&ye){K.length>0&&gt++;const et=Bt(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,ne,et.width,et.height)}for(let et=0;et<6;et++)if(lt){Wt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Tt[et].width,Tt[et].height,Ft,St,Tt[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,ne,Tt[et].width,Tt[et].height,0,Ft,St,Tt[et].data);for(let dt=0;dt<K.length;dt++){const $t=K[dt].image[et].image;Wt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,dt+1,0,0,$t.width,$t.height,Ft,St,$t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,dt+1,ne,$t.width,$t.height,0,Ft,St,$t.data)}}else{Wt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Ft,St,Tt[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,ne,Ft,St,Tt[et]);for(let dt=0;dt<K.length;dt++){const pt=K[dt];Wt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,dt+1,0,0,Ft,St,pt.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,dt+1,ne,Ft,St,pt.image[et])}}}g(w)&&v(i.TEXTURE_CUBE_MAP),tt.__version=rt.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function ot(L,w,G,J,rt,tt){const ft=s.convert(G.format,G.colorSpace),at=s.convert(G.type),vt=D(G.internalFormat,ft,at,G.colorSpace);if(!n.get(w).__hasExternalTextures){const lt=Math.max(1,w.width>>tt),Tt=Math.max(1,w.height>>tt);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,tt,vt,lt,Tt,w.depth,0,ft,at,null):e.texImage2D(rt,tt,vt,lt,Tt,0,ft,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),oe(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,rt,n.get(G).__webglTexture,0,ee(w)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,rt,n.get(G).__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(L,w,G){if(i.bindRenderbuffer(i.RENDERBUFFER,L),w.depthBuffer){const J=w.depthTexture,rt=J&&J.isDepthTexture?J.type:null,tt=R(w.stencilBuffer,rt),ft=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=ee(w);oe(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,tt,w.width,w.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,tt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,tt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,L)}else{const J=w.textures;for(let rt=0;rt<J.length;rt++){const tt=J[rt],ft=s.convert(tt.format,tt.colorSpace),at=s.convert(tt.type),vt=D(tt.internalFormat,ft,at,tt.colorSpace),ae=ee(w);G&&oe(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,vt,w.width,w.height):oe(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,vt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,vt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _t(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),X(w.depthTexture,0);const J=n.get(w.depthTexture).__webglTexture,rt=ee(w);if(w.depthTexture.format===Is)oe(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(w.depthTexture.format===Gs)oe(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Gt(L){const w=n.get(L),G=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const J=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),J){const rt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,J.removeEventListener("dispose",rt)};J.addEventListener("dispose",rt),w.__depthDisposeCallback=rt}w.__boundDepthTexture=J}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");_t(w.__webglFramebuffer,L)}else if(G){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]===void 0)w.__webglDepthbuffer[J]=i.createRenderbuffer(),At(w.__webglDepthbuffer[J],L,!1);else{const rt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=w.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),At(w.__webglDepthbuffer,L,!1);else{const J=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,rt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(L,w,G){const J=n.get(L);w!==void 0&&ot(J.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Gt(L)}function te(L){const w=L.texture,G=n.get(L),J=n.get(w);L.addEventListener("dispose",U);const rt=L.textures,tt=L.isWebGLCubeRenderTarget===!0,ft=rt.length>1;if(ft||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=w.version,o.memory.textures++),tt){G.__webglFramebuffer=[];for(let at=0;at<6;at++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[at]=[];for(let vt=0;vt<w.mipmaps.length;vt++)G.__webglFramebuffer[at][vt]=i.createFramebuffer()}else G.__webglFramebuffer[at]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let at=0;at<w.mipmaps.length;at++)G.__webglFramebuffer[at]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(ft)for(let at=0,vt=rt.length;at<vt;at++){const ae=n.get(rt[at]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&oe(L)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let at=0;at<rt.length;at++){const vt=rt[at];G.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[at]);const ae=s.convert(vt.format,vt.colorSpace),lt=s.convert(vt.type),Tt=D(vt.internalFormat,ae,lt,vt.colorSpace,L.isXRRenderTarget===!0),Dt=ee(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,Tt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,G.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),At(G.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Rt(i.TEXTURE_CUBE_MAP,w);for(let at=0;at<6;at++)if(w.mipmaps&&w.mipmaps.length>0)for(let vt=0;vt<w.mipmaps.length;vt++)ot(G.__webglFramebuffer[at][vt],L,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,vt);else ot(G.__webglFramebuffer[at],L,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);g(w)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let at=0,vt=rt.length;at<vt;at++){const ae=rt[at],lt=n.get(ae);e.bindTexture(i.TEXTURE_2D,lt.__webglTexture),Rt(i.TEXTURE_2D,ae),ot(G.__webglFramebuffer,L,ae,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),g(ae)&&v(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(at=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,J.__webglTexture),Rt(at,w),w.mipmaps&&w.mipmaps.length>0)for(let vt=0;vt<w.mipmaps.length;vt++)ot(G.__webglFramebuffer[vt],L,w,i.COLOR_ATTACHMENT0,at,vt);else ot(G.__webglFramebuffer,L,w,i.COLOR_ATTACHMENT0,at,0);g(w)&&v(at),e.unbindTexture()}L.depthBuffer&&Gt(L)}function ue(L){const w=L.textures;for(let G=0,J=w.length;G<J;G++){const rt=w[G];if(g(rt)){const tt=L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ft=n.get(rt).__webglTexture;e.bindTexture(tt,ft),v(tt),e.unbindTexture()}}}const ie=[],O=[];function rn(L){if(L.samples>0){if(oe(L)===!1){const w=L.textures,G=L.width,J=L.height;let rt=i.COLOR_BUFFER_BIT;const tt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=n.get(L),at=w.length>1;if(at)for(let vt=0;vt<w.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let vt=0;vt<w.length;vt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ft.__webglColorRenderbuffer[vt]);const ae=n.get(w[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ae,0)}i.blitFramebuffer(0,0,G,J,0,0,G,J,rt,i.NEAREST),c===!0&&(ie.length=0,O.length=0,ie.push(i.COLOR_ATTACHMENT0+vt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ie.push(tt),O.push(tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let vt=0;vt<w.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,ft.__webglColorRenderbuffer[vt]);const ae=n.get(w[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,ae,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const w=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function ee(L){return Math.min(r.maxSamples,L.samples)}function oe(L){const w=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Vt(L){const w=o.render.frame;h.get(L)!==w&&(h.set(L,w),L.update())}function Se(L,w){const G=L.colorSpace,J=L.format,rt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||G!==_r&&G!==Zi&&(_e.getTransfer(G)===be?(J!==ni||rt!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}function Bt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(u.width=L.naturalWidth||L.width,u.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(u.width=L.displayWidth,u.height=L.displayHeight):(u.width=L.width,u.height=L.height),u}this.allocateTextureUnit=P,this.resetTextureUnits=y,this.setTexture2D=X,this.setTexture2DArray=Q,this.setTexture3D=j,this.setTextureCube=nt,this.rebindTextures=Ot,this.setupRenderTarget=te,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=oe}function wT(i,t){function e(n,r=Zi){let s;const o=_e.getTransfer(r);if(n===Oi)return i.UNSIGNED_BYTE;if(n===Fh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Vh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dm)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Im)return i.BYTE;if(n===Pm)return i.SHORT;if(n===Vo)return i.UNSIGNED_SHORT;if(n===Oh)return i.INT;if(n===Hr)return i.UNSIGNED_INT;if(n===Di)return i.FLOAT;if(n===Qo)return i.HALF_FLOAT;if(n===Lm)return i.ALPHA;if(n===Nm)return i.RGB;if(n===ni)return i.RGBA;if(n===Um)return i.LUMINANCE;if(n===Om)return i.LUMINANCE_ALPHA;if(n===Is)return i.DEPTH_COMPONENT;if(n===Gs)return i.DEPTH_STENCIL;if(n===Fm)return i.RED;if(n===Bh)return i.RED_INTEGER;if(n===Vm)return i.RG;if(n===kh)return i.RG_INTEGER;if(n===zh)return i.RGBA_INTEGER;if(n===Qa||n===Za||n===Ja||n===tl)if(o===be)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Qa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Qa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Za)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ja)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===tl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_u||n===vu||n===yu||n===Eu)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===_u)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Eu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Su||n===xu||n===Tu)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Su||n===xu)return o===be?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Tu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Mu||n===Au||n===wu||n===bu||n===Ru||n===Cu||n===Iu||n===Pu||n===Du||n===Lu||n===Nu||n===Uu||n===Ou||n===Fu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Mu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Au)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ru)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Cu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Iu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Du)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Uu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ou)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===el||n===Vu||n===Bu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===el)return o===be?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bm||n===ku||n===zu||n===Hu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===el)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ku)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class bT extends zn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ji extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RT={type:"move"};class Wc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const M of t.hand.values()){const g=e.getJointPose(M,n),v=this._getHandJoint(u,M);g!==null&&(v.matrix.fromArray(g.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=g.radius),v.visible=g!==null}const h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,S=.005;u.inputState.pinching&&d>m+S?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&d<=m-S&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(RT)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ji;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const CT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IT=`
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

}`;class PT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new wn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ur({vertexShader:CT,fragmentShader:IT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ce(new Jo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DT extends Zs{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,u=null,h=null,f=null,d=null,m=null,S=null;const M=new PT,g=e.getContextAttributes();let v=null,D=null;const R=[],N=[],z=new Jt;let U=null;const x=new zn;x.layers.enable(1),x.viewport=new Ve;const T=new zn;T.layers.enable(2),T.viewport=new Ve;const C=[x,T],_=new bT;_.layers.enable(1),_.layers.enable(2);let y=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ot=R[Z];return ot===void 0&&(ot=new Wc,R[Z]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(Z){let ot=R[Z];return ot===void 0&&(ot=new Wc,R[Z]=ot),ot.getGripSpace()},this.getHand=function(Z){let ot=R[Z];return ot===void 0&&(ot=new Wc,R[Z]=ot),ot.getHandSpace()};function A(Z){const ot=N.indexOf(Z.inputSource);if(ot===-1)return;const At=R[ot];At!==void 0&&(At.update(Z.inputSource,Z.frame,u||o),At.dispatchEvent({type:Z.type,data:Z.inputSource}))}function X(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",Q);for(let Z=0;Z<R.length;Z++){const ot=N[Z];ot!==null&&(N[Z]=null,R[Z].disconnect(ot))}y=null,P=null,M.reset(),t.setRenderTarget(v),m=null,d=null,f=null,r=null,D=null,zt.stop(),n.isPresenting=!1,t.setPixelRatio(U),t.setSize(z.width,z.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Z){u=Z},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(v=t.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",X),r.addEventListener("inputsourceschange",Q),g.xrCompatible!==!0&&await e.makeXRCompatible(),U=t.getPixelRatio(),t.getSize(z),r.renderState.layers===void 0){const ot={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,ot),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),D=new Gr(m.framebufferWidth,m.framebufferHeight,{format:ni,type:Oi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let ot=null,At=null,_t=null;g.depth&&(_t=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=g.stencil?Gs:Is,At=g.stencil?Hs:Hr);const Gt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:s};f=new XRWebGLBinding(r,e),d=f.createProjectionLayer(Gt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),D=new Gr(d.textureWidth,d.textureHeight,{format:ni,type:Oi,depthTexture:new tg(d.textureWidth,d.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await r.requestReferenceSpace(a),zt.setContext(r),zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Q(Z){for(let ot=0;ot<Z.removed.length;ot++){const At=Z.removed[ot],_t=N.indexOf(At);_t>=0&&(N[_t]=null,R[_t].disconnect(At))}for(let ot=0;ot<Z.added.length;ot++){const At=Z.added[ot];let _t=N.indexOf(At);if(_t===-1){for(let Ot=0;Ot<R.length;Ot++)if(Ot>=N.length){N.push(At),_t=Ot;break}else if(N[Ot]===null){N[Ot]=At,_t=Ot;break}if(_t===-1)break}const Gt=R[_t];Gt&&Gt.connect(At)}}const j=new H,nt=new H;function Y(Z,ot,At){j.setFromMatrixPosition(ot.matrixWorld),nt.setFromMatrixPosition(At.matrixWorld);const _t=j.distanceTo(nt),Gt=ot.projectionMatrix.elements,Ot=At.projectionMatrix.elements,te=Gt[14]/(Gt[10]-1),ue=Gt[14]/(Gt[10]+1),ie=(Gt[9]+1)/Gt[5],O=(Gt[9]-1)/Gt[5],rn=(Gt[8]-1)/Gt[0],ee=(Ot[8]+1)/Ot[0],oe=te*rn,Vt=te*ee,Se=_t/(-rn+ee),Bt=Se*-rn;if(ot.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Bt),Z.translateZ(Se),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Gt[10]===-1)Z.projectionMatrix.copy(ot.projectionMatrix),Z.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const L=te+Se,w=ue+Se,G=oe-Bt,J=Vt+(_t-Bt),rt=ie*ue/w*L,tt=O*ue/w*L;Z.projectionMatrix.makePerspective(G,J,rt,tt,L,w),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function yt(Z,ot){ot===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ot.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let ot=Z.near,At=Z.far;M.texture!==null&&(M.depthNear>0&&(ot=M.depthNear),M.depthFar>0&&(At=M.depthFar)),_.near=T.near=x.near=ot,_.far=T.far=x.far=At,(y!==_.near||P!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),y=_.near,P=_.far);const _t=Z.parent,Gt=_.cameras;yt(_,_t);for(let Ot=0;Ot<Gt.length;Ot++)yt(Gt[Ot],_t);Gt.length===2?Y(_,x,T):_.projectionMatrix.copy(x.projectionMatrix),Et(Z,_,_t)};function Et(Z,ot,At){At===null?Z.matrix.copy(ot.matrixWorld):(Z.matrix.copy(At.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ot.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ot.projectionMatrix),Z.projectionMatrixInverse.copy(ot.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Wu*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(_)};let Rt=null;function jt(Z,ot){if(h=ot.getViewerPose(u||o),S=ot,h!==null){const At=h.views;m!==null&&(t.setRenderTargetFramebuffer(D,m.framebuffer),t.setRenderTarget(D));let _t=!1;At.length!==_.cameras.length&&(_.cameras.length=0,_t=!0);for(let Ot=0;Ot<At.length;Ot++){const te=At[Ot];let ue=null;if(m!==null)ue=m.getViewport(te);else{const O=f.getViewSubImage(d,te);ue=O.viewport,Ot===0&&(t.setRenderTargetTextures(D,O.colorTexture,d.ignoreDepthValues?void 0:O.depthStencilTexture),t.setRenderTarget(D))}let ie=C[Ot];ie===void 0&&(ie=new zn,ie.layers.enable(Ot),ie.viewport=new Ve,C[Ot]=ie),ie.matrix.fromArray(te.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(te.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(ue.x,ue.y,ue.width,ue.height),Ot===0&&(_.matrix.copy(ie.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),_t===!0&&_.cameras.push(ie)}const Gt=r.enabledFeatures;if(Gt&&Gt.includes("depth-sensing")){const Ot=f.getDepthInformation(At[0]);Ot&&Ot.isValid&&Ot.texture&&M.init(t,Ot,r.renderState)}}for(let At=0;At<R.length;At++){const _t=N[At],Gt=R[At];_t!==null&&Gt!==void 0&&Gt.update(_t,ot,u||o)}Rt&&Rt(Z,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),S=null}const zt=new Zm;zt.setAnimationLoop(jt),this.setAnimationLoop=function(Z){Rt=Z},this.dispose=function(){}}}const wr=new nn,LT=new Pe;function NT(i,t){function e(g,v){g.matrixAutoUpdate===!0&&g.updateMatrix(),v.value.copy(g.matrix)}function n(g,v){v.color.getRGB(g.fogColor.value,Km(i)),v.isFog?(g.fogNear.value=v.near,g.fogFar.value=v.far):v.isFogExp2&&(g.fogDensity.value=v.density)}function r(g,v,D,R,N){v.isMeshBasicMaterial||v.isMeshLambertMaterial?s(g,v):v.isMeshToonMaterial?(s(g,v),f(g,v)):v.isMeshPhongMaterial?(s(g,v),h(g,v)):v.isMeshStandardMaterial?(s(g,v),d(g,v),v.isMeshPhysicalMaterial&&m(g,v,N)):v.isMeshMatcapMaterial?(s(g,v),S(g,v)):v.isMeshDepthMaterial?s(g,v):v.isMeshDistanceMaterial?(s(g,v),M(g,v)):v.isMeshNormalMaterial?s(g,v):v.isLineBasicMaterial?(o(g,v),v.isLineDashedMaterial&&a(g,v)):v.isPointsMaterial?c(g,v,D,R):v.isSpriteMaterial?u(g,v):v.isShadowMaterial?(g.color.value.copy(v.color),g.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function s(g,v){g.opacity.value=v.opacity,v.color&&g.diffuse.value.copy(v.color),v.emissive&&g.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(g.map.value=v.map,e(v.map,g.mapTransform)),v.alphaMap&&(g.alphaMap.value=v.alphaMap,e(v.alphaMap,g.alphaMapTransform)),v.bumpMap&&(g.bumpMap.value=v.bumpMap,e(v.bumpMap,g.bumpMapTransform),g.bumpScale.value=v.bumpScale,v.side===In&&(g.bumpScale.value*=-1)),v.normalMap&&(g.normalMap.value=v.normalMap,e(v.normalMap,g.normalMapTransform),g.normalScale.value.copy(v.normalScale),v.side===In&&g.normalScale.value.negate()),v.displacementMap&&(g.displacementMap.value=v.displacementMap,e(v.displacementMap,g.displacementMapTransform),g.displacementScale.value=v.displacementScale,g.displacementBias.value=v.displacementBias),v.emissiveMap&&(g.emissiveMap.value=v.emissiveMap,e(v.emissiveMap,g.emissiveMapTransform)),v.specularMap&&(g.specularMap.value=v.specularMap,e(v.specularMap,g.specularMapTransform)),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest);const D=t.get(v),R=D.envMap,N=D.envMapRotation;R&&(g.envMap.value=R,wr.copy(N),wr.x*=-1,wr.y*=-1,wr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),g.envMapRotation.value.setFromMatrix4(LT.makeRotationFromEuler(wr)),g.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=v.reflectivity,g.ior.value=v.ior,g.refractionRatio.value=v.refractionRatio),v.lightMap&&(g.lightMap.value=v.lightMap,g.lightMapIntensity.value=v.lightMapIntensity,e(v.lightMap,g.lightMapTransform)),v.aoMap&&(g.aoMap.value=v.aoMap,g.aoMapIntensity.value=v.aoMapIntensity,e(v.aoMap,g.aoMapTransform))}function o(g,v){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,v.map&&(g.map.value=v.map,e(v.map,g.mapTransform))}function a(g,v){g.dashSize.value=v.dashSize,g.totalSize.value=v.dashSize+v.gapSize,g.scale.value=v.scale}function c(g,v,D,R){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,g.size.value=v.size*D,g.scale.value=R*.5,v.map&&(g.map.value=v.map,e(v.map,g.uvTransform)),v.alphaMap&&(g.alphaMap.value=v.alphaMap,e(v.alphaMap,g.alphaMapTransform)),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest)}function u(g,v){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,g.rotation.value=v.rotation,v.map&&(g.map.value=v.map,e(v.map,g.mapTransform)),v.alphaMap&&(g.alphaMap.value=v.alphaMap,e(v.alphaMap,g.alphaMapTransform)),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest)}function h(g,v){g.specular.value.copy(v.specular),g.shininess.value=Math.max(v.shininess,1e-4)}function f(g,v){v.gradientMap&&(g.gradientMap.value=v.gradientMap)}function d(g,v){g.metalness.value=v.metalness,v.metalnessMap&&(g.metalnessMap.value=v.metalnessMap,e(v.metalnessMap,g.metalnessMapTransform)),g.roughness.value=v.roughness,v.roughnessMap&&(g.roughnessMap.value=v.roughnessMap,e(v.roughnessMap,g.roughnessMapTransform)),v.envMap&&(g.envMapIntensity.value=v.envMapIntensity)}function m(g,v,D){g.ior.value=v.ior,v.sheen>0&&(g.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),g.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(g.sheenColorMap.value=v.sheenColorMap,e(v.sheenColorMap,g.sheenColorMapTransform)),v.sheenRoughnessMap&&(g.sheenRoughnessMap.value=v.sheenRoughnessMap,e(v.sheenRoughnessMap,g.sheenRoughnessMapTransform))),v.clearcoat>0&&(g.clearcoat.value=v.clearcoat,g.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(g.clearcoatMap.value=v.clearcoatMap,e(v.clearcoatMap,g.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,e(v.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(g.clearcoatNormalMap.value=v.clearcoatNormalMap,e(v.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===In&&g.clearcoatNormalScale.value.negate())),v.dispersion>0&&(g.dispersion.value=v.dispersion),v.iridescence>0&&(g.iridescence.value=v.iridescence,g.iridescenceIOR.value=v.iridescenceIOR,g.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(g.iridescenceMap.value=v.iridescenceMap,e(v.iridescenceMap,g.iridescenceMapTransform)),v.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=v.iridescenceThicknessMap,e(v.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),v.transmission>0&&(g.transmission.value=v.transmission,g.transmissionSamplerMap.value=D.texture,g.transmissionSamplerSize.value.set(D.width,D.height),v.transmissionMap&&(g.transmissionMap.value=v.transmissionMap,e(v.transmissionMap,g.transmissionMapTransform)),g.thickness.value=v.thickness,v.thicknessMap&&(g.thicknessMap.value=v.thicknessMap,e(v.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=v.attenuationDistance,g.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(g.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(g.anisotropyMap.value=v.anisotropyMap,e(v.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=v.specularIntensity,g.specularColor.value.copy(v.specularColor),v.specularColorMap&&(g.specularColorMap.value=v.specularColorMap,e(v.specularColorMap,g.specularColorMapTransform)),v.specularIntensityMap&&(g.specularIntensityMap.value=v.specularIntensityMap,e(v.specularIntensityMap,g.specularIntensityMapTransform))}function S(g,v){v.matcap&&(g.matcap.value=v.matcap)}function M(g,v){const D=t.get(v).light;g.referencePosition.value.setFromMatrixPosition(D.matrixWorld),g.nearDistance.value=D.shadow.camera.near,g.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function UT(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(D,R){const N=R.program;n.uniformBlockBinding(D,N)}function u(D,R){let N=r[D.id];N===void 0&&(S(D),N=h(D),r[D.id]=N,D.addEventListener("dispose",g));const z=R.program;n.updateUBOMapping(D,z);const U=t.render.frame;s[D.id]!==U&&(d(D),s[D.id]=U)}function h(D){const R=f();D.__bindingPointIndex=R;const N=i.createBuffer(),z=D.__size,U=D.usage;return i.bindBuffer(i.UNIFORM_BUFFER,N),i.bufferData(i.UNIFORM_BUFFER,z,U),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,N),N}function f(){for(let D=0;D<a;D++)if(o.indexOf(D)===-1)return o.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(D){const R=r[D.id],N=D.uniforms,z=D.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let U=0,x=N.length;U<x;U++){const T=Array.isArray(N[U])?N[U]:[N[U]];for(let C=0,_=T.length;C<_;C++){const y=T[C];if(m(y,U,C,z)===!0){const P=y.__offset,A=Array.isArray(y.value)?y.value:[y.value];let X=0;for(let Q=0;Q<A.length;Q++){const j=A[Q],nt=M(j);typeof j=="number"||typeof j=="boolean"?(y.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,P+X,y.__data)):j.isMatrix3?(y.__data[0]=j.elements[0],y.__data[1]=j.elements[1],y.__data[2]=j.elements[2],y.__data[3]=0,y.__data[4]=j.elements[3],y.__data[5]=j.elements[4],y.__data[6]=j.elements[5],y.__data[7]=0,y.__data[8]=j.elements[6],y.__data[9]=j.elements[7],y.__data[10]=j.elements[8],y.__data[11]=0):(j.toArray(y.__data,X),X+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,P,y.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(D,R,N,z){const U=D.value,x=R+"_"+N;if(z[x]===void 0)return typeof U=="number"||typeof U=="boolean"?z[x]=U:z[x]=U.clone(),!0;{const T=z[x];if(typeof U=="number"||typeof U=="boolean"){if(T!==U)return z[x]=U,!0}else if(T.equals(U)===!1)return T.copy(U),!0}return!1}function S(D){const R=D.uniforms;let N=0;const z=16;for(let x=0,T=R.length;x<T;x++){const C=Array.isArray(R[x])?R[x]:[R[x]];for(let _=0,y=C.length;_<y;_++){const P=C[_],A=Array.isArray(P.value)?P.value:[P.value];for(let X=0,Q=A.length;X<Q;X++){const j=A[X],nt=M(j),Y=N%z,yt=Y%nt.boundary,Et=Y+yt;N+=yt,Et!==0&&z-Et<nt.storage&&(N+=z-Et),P.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=N,N+=nt.storage}}}const U=N%z;return U>0&&(N+=z-U),D.__size=N,D.__cache={},this}function M(D){const R={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(R.boundary=4,R.storage=4):D.isVector2?(R.boundary=8,R.storage=8):D.isVector3||D.isColor?(R.boundary=16,R.storage=12):D.isVector4?(R.boundary=16,R.storage=16):D.isMatrix3?(R.boundary=48,R.storage=48):D.isMatrix4?(R.boundary=64,R.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),R}function g(D){const R=D.target;R.removeEventListener("dispose",g);const N=o.indexOf(R.__bindingPointIndex);o.splice(N,1),i.deleteBuffer(r[R.id]),delete r[R.id],delete s[R.id]}function v(){for(const D in r)i.deleteBuffer(r[D]);o=[],r={},s={}}return{bind:c,update:u,dispose:v}}class OT{constructor(t={}){const{canvas:e=T0(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),S=new Int32Array(4);let M=null,g=null;const v=[],D=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ci,this.toneMapping=ir,this.toneMappingExposure=1;const R=this;let N=!1,z=0,U=0,x=null,T=-1,C=null;const _=new Ve,y=new Ve;let P=null;const A=new Ut(0);let X=0,Q=e.width,j=e.height,nt=1,Y=null,yt=null;const Et=new Ve(0,0,Q,j),Rt=new Ve(0,0,Q,j);let jt=!1;const zt=new Xh;let Z=!1,ot=!1;const At=new Pe,_t=new Pe,Gt=new H,Ot=new Ve,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ue=!1;function ie(){return x===null?nt:1}let O=n;function rn(b,V){return e.getContext(b,V)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Uh}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),O===null){const V="webgl2";if(O=rn(V,b),O===null)throw rn(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ee,oe,Vt,Se,Bt,L,w,G,J,rt,tt,ft,at,vt,ae,lt,Tt,Dt,Ft,St,ne,Wt,ye,F;function gt(){ee=new zS(O),ee.init(),Wt=new wT(O,ee),oe=new US(O,ee,t,Wt),Vt=new TT(O),oe.reverseDepthBuffer&&Vt.buffers.depth.setReversed(!0),Se=new WS(O),Bt=new lT,L=new AT(O,ee,Vt,Bt,oe,Wt,Se),w=new FS(R),G=new kS(R),J=new Q0(O),ye=new LS(O,J),rt=new HS(O,J,Se,ye),tt=new XS(O,rt,J,Se),Ft=new qS(O,oe,L),lt=new OS(Bt),ft=new aT(R,w,G,ee,oe,ye,lt),at=new NT(R,Bt),vt=new uT,ae=new gT(ee),Dt=new DS(R,w,G,Vt,tt,d,c),Tt=new ST(R,tt,oe),F=new UT(O,Se,oe,Vt),St=new NS(O,ee,Se),ne=new GS(O,ee,Se),Se.programs=ft.programs,R.capabilities=oe,R.extensions=ee,R.properties=Bt,R.renderLists=vt,R.shadowMap=Tt,R.state=Vt,R.info=Se}gt();const K=new DT(R,O);this.xr=K,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const b=ee.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ee.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(b){b!==void 0&&(nt=b,this.setSize(Q,j,!1))},this.getSize=function(b){return b.set(Q,j)},this.setSize=function(b,V,W=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=b,j=V,e.width=Math.floor(b*nt),e.height=Math.floor(V*nt),W===!0&&(e.style.width=b+"px",e.style.height=V+"px"),this.setViewport(0,0,b,V)},this.getDrawingBufferSize=function(b){return b.set(Q*nt,j*nt).floor()},this.setDrawingBufferSize=function(b,V,W){Q=b,j=V,nt=W,e.width=Math.floor(b*W),e.height=Math.floor(V*W),this.setViewport(0,0,b,V)},this.getCurrentViewport=function(b){return b.copy(_)},this.getViewport=function(b){return b.copy(Et)},this.setViewport=function(b,V,W,q){b.isVector4?Et.set(b.x,b.y,b.z,b.w):Et.set(b,V,W,q),Vt.viewport(_.copy(Et).multiplyScalar(nt).round())},this.getScissor=function(b){return b.copy(Rt)},this.setScissor=function(b,V,W,q){b.isVector4?Rt.set(b.x,b.y,b.z,b.w):Rt.set(b,V,W,q),Vt.scissor(y.copy(Rt).multiplyScalar(nt).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(b){Vt.setScissorTest(jt=b)},this.setOpaqueSort=function(b){Y=b},this.setTransparentSort=function(b){yt=b},this.getClearColor=function(b){return b.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(b=!0,V=!0,W=!0){let q=0;if(b){let B=!1;if(x!==null){const ct=x.texture.format;B=ct===zh||ct===kh||ct===Bh}if(B){const ct=x.texture.type,mt=ct===Oi||ct===Hr||ct===Vo||ct===Hs||ct===Fh||ct===Vh,xt=Dt.getClearColor(),wt=Dt.getClearAlpha(),Lt=xt.r,Pt=xt.g,Mt=xt.b;mt?(m[0]=Lt,m[1]=Pt,m[2]=Mt,m[3]=wt,O.clearBufferuiv(O.COLOR,0,m)):(S[0]=Lt,S[1]=Pt,S[2]=Mt,S[3]=wt,O.clearBufferiv(O.COLOR,0,S))}else q|=O.COLOR_BUFFER_BIT}V&&(q|=O.DEPTH_BUFFER_BIT,O.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),W&&(q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),vt.dispose(),ae.dispose(),Bt.dispose(),w.dispose(),G.dispose(),tt.dispose(),ye.dispose(),F.dispose(),ft.dispose(),K.dispose(),K.removeEventListener("sessionstart",Ze),K.removeEventListener("sessionend",oo),Dn.stop()};function et(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const b=Se.autoReset,V=Tt.enabled,W=Tt.autoUpdate,q=Tt.needsUpdate,B=Tt.type;gt(),Se.autoReset=b,Tt.enabled=V,Tt.autoUpdate=W,Tt.needsUpdate=q,Tt.type=B}function pt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function $t(b){const V=b.target;V.removeEventListener("dispose",$t),De(V)}function De(b){$e(b),Bt.remove(b)}function $e(b){const V=Bt.get(b).programs;V!==void 0&&(V.forEach(function(W){ft.releaseProgram(W)}),b.isShaderMaterial&&ft.releaseShaderCache(b))}this.renderBufferDirect=function(b,V,W,q,B,ct){V===null&&(V=te);const mt=B.isMesh&&B.matrixWorld.determinant()<0,xt=lo(b,V,W,q,B);Vt.setMaterial(q,mt);let wt=W.index,Lt=1;if(q.wireframe===!0){if(wt=rt.getWireframeAttribute(W),wt===void 0)return;Lt=2}const Pt=W.drawRange,Mt=W.attributes.position;let he=Pt.start*Lt,xe=(Pt.start+Pt.count)*Lt;ct!==null&&(he=Math.max(he,ct.start*Lt),xe=Math.min(xe,(ct.start+ct.count)*Lt)),wt!==null?(he=Math.max(he,0),xe=Math.min(xe,wt.count)):Mt!=null&&(he=Math.max(he,0),xe=Math.min(xe,Mt.count));const Me=xe-he;if(Me<0||Me===1/0)return;ye.setup(B,q,xt,W,wt);let dn,fe=St;if(wt!==null&&(dn=J.get(wt),fe=ne,fe.setIndex(dn)),B.isMesh)q.wireframe===!0?(Vt.setLineWidth(q.wireframeLinewidth*ie()),fe.setMode(O.LINES)):fe.setMode(O.TRIANGLES);else if(B.isLine){let Ct=q.linewidth;Ct===void 0&&(Ct=1),Vt.setLineWidth(Ct*ie()),B.isLineSegments?fe.setMode(O.LINES):B.isLineLoop?fe.setMode(O.LINE_LOOP):fe.setMode(O.LINE_STRIP)}else B.isPoints?fe.setMode(O.POINTS):B.isSprite&&fe.setMode(O.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)fe.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))fe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ct=B._multiDrawStarts,ke=B._multiDrawCounts,de=B._multiDrawCount,bn=wt?J.get(wt).bytesPerElement:1,zi=Bt.get(q).currentProgram.getUniforms();for(let xn=0;xn<de;xn++)zi.setValue(O,"_gl_DrawID",xn),fe.render(Ct[xn]/bn,ke[xn])}else if(B.isInstancedMesh)fe.renderInstances(he,Me,B.count);else if(W.isInstancedBufferGeometry){const Ct=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ke=Math.min(W.instanceCount,Ct);fe.renderInstances(he,Me,ke)}else fe.render(he,Me)};function le(b,V,W){b.transparent===!0&&b.side===Pi&&b.forceSinglePass===!1?(b.side=In,b.needsUpdate=!0,Zr(b,V,W),b.side=cr,b.needsUpdate=!0,Zr(b,V,W),b.side=Pi):Zr(b,V,W)}this.compile=function(b,V,W=null){W===null&&(W=b),g=ae.get(W),g.init(V),D.push(g),W.traverseVisible(function(B){B.isLight&&B.layers.test(V.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),b!==W&&b.traverseVisible(function(B){B.isLight&&B.layers.test(V.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),g.setupLights();const q=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ct=B.material;if(ct)if(Array.isArray(ct))for(let mt=0;mt<ct.length;mt++){const xt=ct[mt];le(xt,W,B),q.add(xt)}else le(ct,W,B),q.add(ct)}),D.pop(),g=null,q},this.compileAsync=function(b,V,W=null){const q=this.compile(b,V,W);return new Promise(B=>{function ct(){if(q.forEach(function(mt){Bt.get(mt).currentProgram.isReady()&&q.delete(mt)}),q.size===0){B(b);return}setTimeout(ct,10)}ee.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let He=null;function Vn(b){He&&He(b)}function Ze(){Dn.stop()}function oo(){Dn.start()}const Dn=new Zm;Dn.setAnimationLoop(Vn),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(b){He=b,K.setAnimationLoop(b),b===null?Dn.stop():Dn.start()},K.addEventListener("sessionstart",Ze),K.addEventListener("sessionend",oo),this.render=function(b,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(V),V=K.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,V,x),g=ae.get(b,D.length),g.init(V),D.push(g),_t.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),zt.setFromProjectionMatrix(_t),ot=this.localClippingEnabled,Z=lt.init(this.clippingPlanes,ot),M=vt.get(b,v.length),M.init(),v.push(M),K.enabled===!0&&K.isPresenting===!0){const ct=R.xr.getDepthSensingMesh();ct!==null&&Si(ct,V,-1/0,R.sortObjects)}Si(b,V,0,R.sortObjects),M.finish(),R.sortObjects===!0&&M.sort(Y,yt),ue=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,ue&&Dt.addToRenderList(M,b),this.info.render.frame++,Z===!0&&lt.beginShadows();const W=g.state.shadowsArray;Tt.render(W,b,V),Z===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=M.opaque,B=M.transmissive;if(g.setupLights(),V.isArrayCamera){const ct=V.cameras;if(B.length>0)for(let mt=0,xt=ct.length;mt<xt;mt++){const wt=ct[mt];ua(q,B,b,wt)}ue&&Dt.render(b);for(let mt=0,xt=ct.length;mt<xt;mt++){const wt=ct[mt];ca(M,b,wt,wt.viewport)}}else B.length>0&&ua(q,B,b,V),ue&&Dt.render(b),ca(M,b,V);x!==null&&(L.updateMultisampleRenderTarget(x),L.updateRenderTargetMipmap(x)),b.isScene===!0&&b.onAfterRender(R,b,V),ye.resetDefaultState(),T=-1,C=null,D.pop(),D.length>0?(g=D[D.length-1],Z===!0&&lt.setGlobalState(R.clippingPlanes,g.state.camera)):g=null,v.pop(),v.length>0?M=v[v.length-1]:M=null};function Si(b,V,W,q){if(b.visible===!1)return;if(b.layers.test(V.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(V);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||zt.intersectsSprite(b)){q&&Ot.setFromMatrixPosition(b.matrixWorld).applyMatrix4(_t);const mt=tt.update(b),xt=b.material;xt.visible&&M.push(b,mt,xt,W,Ot.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||zt.intersectsObject(b))){const mt=tt.update(b),xt=b.material;if(q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ot.copy(b.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Ot.copy(mt.boundingSphere.center)),Ot.applyMatrix4(b.matrixWorld).applyMatrix4(_t)),Array.isArray(xt)){const wt=mt.groups;for(let Lt=0,Pt=wt.length;Lt<Pt;Lt++){const Mt=wt[Lt],he=xt[Mt.materialIndex];he&&he.visible&&M.push(b,mt,he,W,Ot.z,Mt)}}else xt.visible&&M.push(b,mt,xt,W,Ot.z,null)}}const ct=b.children;for(let mt=0,xt=ct.length;mt<xt;mt++)Si(ct[mt],V,W,q)}function ca(b,V,W,q){const B=b.opaque,ct=b.transmissive,mt=b.transparent;g.setupLightsView(W),Z===!0&&lt.setGlobalState(R.clippingPlanes,W),q&&Vt.viewport(_.copy(q)),B.length>0&&jn(B,V,W),ct.length>0&&jn(ct,V,W),mt.length>0&&jn(mt,V,W),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function ua(b,V,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[q.id]===void 0&&(g.state.transmissionRenderTarget[q.id]=new Gr(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?Qo:Oi,minFilter:Lr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_e.workingColorSpace}));const ct=g.state.transmissionRenderTarget[q.id],mt=q.viewport||_;ct.setSize(mt.z,mt.w);const xt=R.getRenderTarget();R.setRenderTarget(ct),R.getClearColor(A),X=R.getClearAlpha(),X<1&&R.setClearColor(16777215,.5),R.clear(),ue&&Dt.render(W);const wt=R.toneMapping;R.toneMapping=ir;const Lt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),g.setupLightsView(q),Z===!0&&lt.setGlobalState(R.clippingPlanes,q),jn(b,W,q),L.updateMultisampleRenderTarget(ct),L.updateRenderTargetMipmap(ct),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let Mt=0,he=V.length;Mt<he;Mt++){const xe=V[Mt],Me=xe.object,dn=xe.geometry,fe=xe.material,Ct=xe.group;if(fe.side===Pi&&Me.layers.test(q.layers)){const ke=fe.side;fe.side=In,fe.needsUpdate=!0,ha(Me,W,q,dn,fe,Ct),fe.side=ke,fe.needsUpdate=!0,Pt=!0}}Pt===!0&&(L.updateMultisampleRenderTarget(ct),L.updateRenderTargetMipmap(ct))}R.setRenderTarget(xt),R.setClearColor(A,X),Lt!==void 0&&(q.viewport=Lt),R.toneMapping=wt}function jn(b,V,W){const q=V.isScene===!0?V.overrideMaterial:null;for(let B=0,ct=b.length;B<ct;B++){const mt=b[B],xt=mt.object,wt=mt.geometry,Lt=q===null?mt.material:q,Pt=mt.group;xt.layers.test(W.layers)&&ha(xt,V,W,wt,Lt,Pt)}}function ha(b,V,W,q,B,ct){b.onBeforeRender(R,V,W,q,B,ct),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(R,V,W,q,b,ct),B.transparent===!0&&B.side===Pi&&B.forceSinglePass===!1?(B.side=In,B.needsUpdate=!0,R.renderBufferDirect(W,V,q,B,b,ct),B.side=cr,B.needsUpdate=!0,R.renderBufferDirect(W,V,q,B,b,ct),B.side=Pi):R.renderBufferDirect(W,V,q,B,b,ct),b.onAfterRender(R,V,W,q,B,ct)}function Zr(b,V,W){V.isScene!==!0&&(V=te);const q=Bt.get(b),B=g.state.lights,ct=g.state.shadowsArray,mt=B.state.version,xt=ft.getParameters(b,B.state,ct,V,W),wt=ft.getProgramCacheKey(xt);let Lt=q.programs;q.environment=b.isMeshStandardMaterial?V.environment:null,q.fog=V.fog,q.envMap=(b.isMeshStandardMaterial?G:w).get(b.envMap||q.environment),q.envMapRotation=q.environment!==null&&b.envMap===null?V.environmentRotation:b.envMapRotation,Lt===void 0&&(b.addEventListener("dispose",$t),Lt=new Map,q.programs=Lt);let Pt=Lt.get(wt);if(Pt!==void 0){if(q.currentProgram===Pt&&q.lightsStateVersion===mt)return ao(b,xt),Pt}else xt.uniforms=ft.getUniforms(b),b.onBeforeCompile(xt,R),Pt=ft.acquireProgram(xt,wt),Lt.set(wt,Pt),q.uniforms=xt.uniforms;const Mt=q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Mt.clippingPlanes=lt.uniform),ao(b,xt),q.needsLights=ai(b),q.lightsStateVersion=mt,q.needsLights&&(Mt.ambientLightColor.value=B.state.ambient,Mt.lightProbe.value=B.state.probe,Mt.directionalLights.value=B.state.directional,Mt.directionalLightShadows.value=B.state.directionalShadow,Mt.spotLights.value=B.state.spot,Mt.spotLightShadows.value=B.state.spotShadow,Mt.rectAreaLights.value=B.state.rectArea,Mt.ltc_1.value=B.state.rectAreaLTC1,Mt.ltc_2.value=B.state.rectAreaLTC2,Mt.pointLights.value=B.state.point,Mt.pointLightShadows.value=B.state.pointShadow,Mt.hemisphereLights.value=B.state.hemi,Mt.directionalShadowMap.value=B.state.directionalShadowMap,Mt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Mt.spotShadowMap.value=B.state.spotShadowMap,Mt.spotLightMatrix.value=B.state.spotLightMatrix,Mt.spotLightMap.value=B.state.spotLightMap,Mt.pointShadowMap.value=B.state.pointShadowMap,Mt.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=Pt,q.uniformsList=null,Pt}function yr(b){if(b.uniformsList===null){const V=b.currentProgram.getUniforms();b.uniformsList=il.seqWithValue(V.seq,b.uniforms)}return b.uniformsList}function ao(b,V){const W=Bt.get(b);W.outputColorSpace=V.outputColorSpace,W.batching=V.batching,W.batchingColor=V.batchingColor,W.instancing=V.instancing,W.instancingColor=V.instancingColor,W.instancingMorph=V.instancingMorph,W.skinning=V.skinning,W.morphTargets=V.morphTargets,W.morphNormals=V.morphNormals,W.morphColors=V.morphColors,W.morphTargetsCount=V.morphTargetsCount,W.numClippingPlanes=V.numClippingPlanes,W.numIntersection=V.numClipIntersection,W.vertexAlphas=V.vertexAlphas,W.vertexTangents=V.vertexTangents,W.toneMapping=V.toneMapping}function lo(b,V,W,q,B){V.isScene!==!0&&(V=te),L.resetTextureUnits();const ct=V.fog,mt=q.isMeshStandardMaterial?V.environment:null,xt=x===null?R.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:_r,wt=(q.isMeshStandardMaterial?G:w).get(q.envMap||mt),Lt=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Pt=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Mt=!!W.morphAttributes.position,he=!!W.morphAttributes.normal,xe=!!W.morphAttributes.color;let Me=ir;q.toneMapped&&(x===null||x.isXRRenderTarget===!0)&&(Me=R.toneMapping);const dn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,fe=dn!==void 0?dn.length:0,Ct=Bt.get(q),ke=g.state.lights;if(Z===!0&&(ot===!0||b!==C)){const Ue=b===C&&q.id===T;lt.setState(q,b,Ue)}let de=!1;q.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==ke.state.version||Ct.outputColorSpace!==xt||B.isBatchedMesh&&Ct.batching===!1||!B.isBatchedMesh&&Ct.batching===!0||B.isBatchedMesh&&Ct.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ct.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ct.instancing===!1||!B.isInstancedMesh&&Ct.instancing===!0||B.isSkinnedMesh&&Ct.skinning===!1||!B.isSkinnedMesh&&Ct.skinning===!0||B.isInstancedMesh&&Ct.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ct.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ct.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ct.instancingMorph===!1&&B.morphTexture!==null||Ct.envMap!==wt||q.fog===!0&&Ct.fog!==ct||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==lt.numPlanes||Ct.numIntersection!==lt.numIntersection)||Ct.vertexAlphas!==Lt||Ct.vertexTangents!==Pt||Ct.morphTargets!==Mt||Ct.morphNormals!==he||Ct.morphColors!==xe||Ct.toneMapping!==Me||Ct.morphTargetsCount!==fe)&&(de=!0):(de=!0,Ct.__version=q.version);let bn=Ct.currentProgram;de===!0&&(bn=Zr(q,V,B));let zi=!1,xn=!1,ts=!1;const Ie=bn.getUniforms(),li=Ct.uniforms;if(Vt.useProgram(bn.program)&&(zi=!0,xn=!0,ts=!0),q.id!==T&&(T=q.id,xn=!0),zi||C!==b){oe.reverseDepthBuffer?(At.copy(b.projectionMatrix),A0(At),w0(At),Ie.setValue(O,"projectionMatrix",At)):Ie.setValue(O,"projectionMatrix",b.projectionMatrix),Ie.setValue(O,"viewMatrix",b.matrixWorldInverse);const Ue=Ie.map.cameraPosition;Ue!==void 0&&Ue.setValue(O,Gt.setFromMatrixPosition(b.matrixWorld)),oe.logarithmicDepthBuffer&&Ie.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ie.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),C!==b&&(C=b,xn=!0,ts=!0)}if(B.isSkinnedMesh){Ie.setOptional(O,B,"bindMatrix"),Ie.setOptional(O,B,"bindMatrixInverse");const Ue=B.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),Ie.setValue(O,"boneTexture",Ue.boneTexture,L))}B.isBatchedMesh&&(Ie.setOptional(O,B,"batchingTexture"),Ie.setValue(O,"batchingTexture",B._matricesTexture,L),Ie.setOptional(O,B,"batchingIdTexture"),Ie.setValue(O,"batchingIdTexture",B._indirectTexture,L),Ie.setOptional(O,B,"batchingColorTexture"),B._colorsTexture!==null&&Ie.setValue(O,"batchingColorTexture",B._colorsTexture,L));const Kn=W.morphAttributes;if((Kn.position!==void 0||Kn.normal!==void 0||Kn.color!==void 0)&&Ft.update(B,W,bn),(xn||Ct.receiveShadow!==B.receiveShadow)&&(Ct.receiveShadow=B.receiveShadow,Ie.setValue(O,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(li.envMap.value=wt,li.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&V.environment!==null&&(li.envMapIntensity.value=V.environmentIntensity),xn&&(Ie.setValue(O,"toneMappingExposure",R.toneMappingExposure),Ct.needsLights&&Jr(li,ts),ct&&q.fog===!0&&at.refreshFogUniforms(li,ct),at.refreshMaterialUniforms(li,q,nt,j,g.state.transmissionRenderTarget[b.id]),il.upload(O,yr(Ct),li,L)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(il.upload(O,yr(Ct),li,L),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ie.setValue(O,"center",B.center),Ie.setValue(O,"modelViewMatrix",B.modelViewMatrix),Ie.setValue(O,"normalMatrix",B.normalMatrix),Ie.setValue(O,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Ue=q.uniformsGroups;for(let Hi=0,es=Ue.length;Hi<es;Hi++){const co=Ue[Hi];F.update(co,bn),F.bind(co,bn)}}return bn}function Jr(b,V){b.ambientLightColor.needsUpdate=V,b.lightProbe.needsUpdate=V,b.directionalLights.needsUpdate=V,b.directionalLightShadows.needsUpdate=V,b.pointLights.needsUpdate=V,b.pointLightShadows.needsUpdate=V,b.spotLights.needsUpdate=V,b.spotLightShadows.needsUpdate=V,b.rectAreaLights.needsUpdate=V,b.hemisphereLights.needsUpdate=V}function ai(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(b,V,W){Bt.get(b.texture).__webglTexture=V,Bt.get(b.depthTexture).__webglTexture=W;const q=Bt.get(b);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,V){const W=Bt.get(b);W.__webglFramebuffer=V,W.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(b,V=0,W=0){x=b,z=V,U=W;let q=!0,B=null,ct=!1,mt=!1;if(b){const wt=Bt.get(b);if(wt.__useDefaultFramebuffer!==void 0)Vt.bindFramebuffer(O.FRAMEBUFFER,null),q=!1;else if(wt.__webglFramebuffer===void 0)L.setupRenderTarget(b);else if(wt.__hasExternalTextures)L.rebindTextures(b,Bt.get(b.texture).__webglTexture,Bt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Mt=b.depthTexture;if(wt.__boundDepthTexture!==Mt){if(Mt!==null&&Bt.has(Mt)&&(b.width!==Mt.image.width||b.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(b)}}const Lt=b.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(mt=!0);const Pt=Bt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Pt[V])?B=Pt[V][W]:B=Pt[V],ct=!0):b.samples>0&&L.useMultisampledRTT(b)===!1?B=Bt.get(b).__webglMultisampledFramebuffer:Array.isArray(Pt)?B=Pt[W]:B=Pt,_.copy(b.viewport),y.copy(b.scissor),P=b.scissorTest}else _.copy(Et).multiplyScalar(nt).floor(),y.copy(Rt).multiplyScalar(nt).floor(),P=jt;if(Vt.bindFramebuffer(O.FRAMEBUFFER,B)&&q&&Vt.drawBuffers(b,B),Vt.viewport(_),Vt.scissor(y),Vt.setScissorTest(P),ct){const wt=Bt.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+V,wt.__webglTexture,W)}else if(mt){const wt=Bt.get(b.texture),Lt=V||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,wt.__webglTexture,W||0,Lt)}T=-1},this.readRenderTargetPixels=function(b,V,W,q,B,ct,mt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Bt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&mt!==void 0&&(xt=xt[mt]),xt){Vt.bindFramebuffer(O.FRAMEBUFFER,xt);try{const wt=b.texture,Lt=wt.format,Pt=wt.type;if(!oe.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!oe.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=b.width-q&&W>=0&&W<=b.height-B&&O.readPixels(V,W,q,B,Wt.convert(Lt),Wt.convert(Pt),ct)}finally{const wt=x!==null?Bt.get(x).__webglFramebuffer:null;Vt.bindFramebuffer(O.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(b,V,W,q,B,ct,mt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Bt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&mt!==void 0&&(xt=xt[mt]),xt){const wt=b.texture,Lt=wt.format,Pt=wt.type;if(!oe.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!oe.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=b.width-q&&W>=0&&W<=b.height-B){Vt.bindFramebuffer(O.FRAMEBUFFER,xt);const Mt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Mt),O.bufferData(O.PIXEL_PACK_BUFFER,ct.byteLength,O.STREAM_READ),O.readPixels(V,W,q,B,Wt.convert(Lt),Wt.convert(Pt),0);const he=x!==null?Bt.get(x).__webglFramebuffer:null;Vt.bindFramebuffer(O.FRAMEBUFFER,he);const xe=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await M0(O,xe,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Mt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ct),O.deleteBuffer(Mt),O.deleteSync(xe),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,V=null,W=0){b.isTexture!==!0&&(nl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,b=arguments[1]);const q=Math.pow(2,-W),B=Math.floor(b.image.width*q),ct=Math.floor(b.image.height*q),mt=V!==null?V.x:0,xt=V!==null?V.y:0;L.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,W,0,0,mt,xt,B,ct),Vt.unbindTexture()},this.copyTextureToTexture=function(b,V,W=null,q=null,B=0){b.isTexture!==!0&&(nl("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,b=arguments[1],V=arguments[2],B=arguments[3]||0,W=null);let ct,mt,xt,wt,Lt,Pt;W!==null?(ct=W.max.x-W.min.x,mt=W.max.y-W.min.y,xt=W.min.x,wt=W.min.y):(ct=b.image.width,mt=b.image.height,xt=0,wt=0),q!==null?(Lt=q.x,Pt=q.y):(Lt=0,Pt=0);const Mt=Wt.convert(V.format),he=Wt.convert(V.type);L.setTexture2D(V,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment);const xe=O.getParameter(O.UNPACK_ROW_LENGTH),Me=O.getParameter(O.UNPACK_IMAGE_HEIGHT),dn=O.getParameter(O.UNPACK_SKIP_PIXELS),fe=O.getParameter(O.UNPACK_SKIP_ROWS),Ct=O.getParameter(O.UNPACK_SKIP_IMAGES),ke=b.isCompressedTexture?b.mipmaps[B]:b.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,ke.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ke.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,xt),O.pixelStorei(O.UNPACK_SKIP_ROWS,wt),b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,B,Lt,Pt,ct,mt,Mt,he,ke.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,B,Lt,Pt,ke.width,ke.height,Mt,ke.data):O.texSubImage2D(O.TEXTURE_2D,B,Lt,Pt,ct,mt,Mt,he,ke),O.pixelStorei(O.UNPACK_ROW_LENGTH,xe),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Me),O.pixelStorei(O.UNPACK_SKIP_PIXELS,dn),O.pixelStorei(O.UNPACK_SKIP_ROWS,fe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ct),B===0&&V.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Vt.unbindTexture()},this.copyTextureToTexture3D=function(b,V,W=null,q=null,B=0){b.isTexture!==!0&&(nl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,q=arguments[1]||null,b=arguments[2],V=arguments[3],B=arguments[4]||0);let ct,mt,xt,wt,Lt,Pt,Mt,he,xe;const Me=b.isCompressedTexture?b.mipmaps[B]:b.image;W!==null?(ct=W.max.x-W.min.x,mt=W.max.y-W.min.y,xt=W.max.z-W.min.z,wt=W.min.x,Lt=W.min.y,Pt=W.min.z):(ct=Me.width,mt=Me.height,xt=Me.depth,wt=0,Lt=0,Pt=0),q!==null?(Mt=q.x,he=q.y,xe=q.z):(Mt=0,he=0,xe=0);const dn=Wt.convert(V.format),fe=Wt.convert(V.type);let Ct;if(V.isData3DTexture)L.setTexture3D(V,0),Ct=O.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)L.setTexture2DArray(V,0),Ct=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment);const ke=O.getParameter(O.UNPACK_ROW_LENGTH),de=O.getParameter(O.UNPACK_IMAGE_HEIGHT),bn=O.getParameter(O.UNPACK_SKIP_PIXELS),zi=O.getParameter(O.UNPACK_SKIP_ROWS),xn=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Me.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Me.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,wt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Lt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Pt),b.isDataTexture||b.isData3DTexture?O.texSubImage3D(Ct,B,Mt,he,xe,ct,mt,xt,dn,fe,Me.data):V.isCompressedArrayTexture?O.compressedTexSubImage3D(Ct,B,Mt,he,xe,ct,mt,xt,dn,Me.data):O.texSubImage3D(Ct,B,Mt,he,xe,ct,mt,xt,dn,fe,Me),O.pixelStorei(O.UNPACK_ROW_LENGTH,ke),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,de),O.pixelStorei(O.UNPACK_SKIP_PIXELS,bn),O.pixelStorei(O.UNPACK_SKIP_ROWS,zi),O.pixelStorei(O.UNPACK_SKIP_IMAGES,xn),B===0&&V.generateMipmaps&&O.generateMipmap(Ct),Vt.unbindTexture()},this.initRenderTarget=function(b){Bt.get(b).__webglFramebuffer===void 0&&L.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?L.setTextureCube(b,0):b.isData3DTexture?L.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?L.setTexture2DArray(b,0):L.setTexture2D(b,0),Vt.unbindTexture()},this.resetState=function(){z=0,U=0,x=null,Vt.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Hh?"display-p3":"srgb",e.unpackColorSpace=_e.workingColorSpace===zl?"display-p3":"srgb"}}class jh{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ut(t),this.density=e}clone(){return new jh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class FT extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class VT{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Gu,this.updateRanges=[],this.version=0,this.uuid=rr()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Tn=new H;class _l{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Tn.fromBufferAttribute(this,e),Tn.applyMatrix4(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Tn.fromBufferAttribute(this,e),Tn.applyNormalMatrix(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Tn.fromBufferAttribute(this,e),Tn.transformDirection(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=fi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=fi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=fi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=fi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=fi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),r=Ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),r=Ee(r,this.array),s=Ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new ri(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new _l(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class sg extends Js{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ys;const To=new H,Es=new H,Ss=new H,xs=new Jt,Mo=new Jt,og=new Pe,Ha=new H,Ao=new H,Ga=new H,hp=new Jt,qc=new Jt,fp=new Jt;class BT extends cn{constructor(t=new sg){if(super(),this.isSprite=!0,this.type="Sprite",ys===void 0){ys=new $n;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new VT(e,5);ys.setIndex([0,1,2,0,2,3]),ys.setAttribute("position",new _l(n,3,0,!1)),ys.setAttribute("uv",new _l(n,2,3,!1))}this.geometry=ys,this.material=t,this.center=new Jt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Es.setFromMatrixScale(this.matrixWorld),og.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ss.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Es.multiplyScalar(-Ss.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;Wa(Ha.set(-.5,-.5,0),Ss,o,Es,r,s),Wa(Ao.set(.5,-.5,0),Ss,o,Es,r,s),Wa(Ga.set(.5,.5,0),Ss,o,Es,r,s),hp.set(0,0),qc.set(1,0),fp.set(1,1);let a=t.ray.intersectTriangle(Ha,Ao,Ga,!1,To);if(a===null&&(Wa(Ao.set(-.5,.5,0),Ss,o,Es,r,s),qc.set(0,1),a=t.ray.intersectTriangle(Ha,Ga,Ao,!1,To),a===null))return;const c=t.ray.origin.distanceTo(To);c<t.near||c>t.far||e.push({distance:c,point:To.clone(),uv:Hn.getInterpolation(To,Ha,Ao,Ga,hp,qc,fp,new Jt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Wa(i,t,e,n,r,s){xs.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(Mo.x=s*xs.x-r*xs.y,Mo.y=r*xs.x+s*xs.y):Mo.copy(xs),i.copy(t),i.x+=Mo.x,i.y+=Mo.y,i.applyMatrix4(og)}class Kh extends wn{constructor(t,e,n,r,s,o,a,c,u){super(t,e,n,r,s,o,a,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hr extends $n{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const u=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],d=[],m=[];let S=0;const M=[],g=n/2;let v=0;D(),o===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new un(f,3)),this.setAttribute("normal",new un(d,3)),this.setAttribute("uv",new un(m,2));function D(){const N=new H,z=new H;let U=0;const x=(e-t)/n;for(let T=0;T<=s;T++){const C=[],_=T/s,y=_*(e-t)+t;for(let P=0;P<=r;P++){const A=P/r,X=A*c+a,Q=Math.sin(X),j=Math.cos(X);z.x=y*Q,z.y=-_*n+g,z.z=y*j,f.push(z.x,z.y,z.z),N.set(Q,x,j).normalize(),d.push(N.x,N.y,N.z),m.push(A,1-_),C.push(S++)}M.push(C)}for(let T=0;T<r;T++)for(let C=0;C<s;C++){const _=M[C][T],y=M[C+1][T],P=M[C+1][T+1],A=M[C][T+1];t>0&&(h.push(_,y,A),U+=3),e>0&&(h.push(y,P,A),U+=3)}u.addGroup(v,U,0),v+=U}function R(N){const z=S,U=new Jt,x=new H;let T=0;const C=N===!0?t:e,_=N===!0?1:-1;for(let P=1;P<=r;P++)f.push(0,g*_,0),d.push(0,_,0),m.push(.5,.5),S++;const y=S;for(let P=0;P<=r;P++){const X=P/r*c+a,Q=Math.cos(X),j=Math.sin(X);x.x=C*j,x.y=g*_,x.z=C*Q,f.push(x.x,x.y,x.z),d.push(0,_,0),U.x=Q*.5+.5,U.y=j*.5*_+.5,m.push(U.x,U.y),S++}for(let P=0;P<r;P++){const A=z+P,X=y+P;N===!0?h.push(X,X+1,A):h.push(X+1,X,A),T+=3}u.addGroup(v,T,N===!0?1:2),v+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Gl extends $n{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let u=0;const h=[],f=new H,d=new H,m=[],S=[],M=[],g=[];for(let v=0;v<=n;v++){const D=[],R=v/n;let N=0;v===0&&o===0?N=.5/e:v===n&&c===Math.PI&&(N=-.5/e);for(let z=0;z<=e;z++){const U=z/e;f.x=-t*Math.cos(r+U*s)*Math.sin(o+R*a),f.y=t*Math.cos(o+R*a),f.z=t*Math.sin(r+U*s)*Math.sin(o+R*a),S.push(f.x,f.y,f.z),d.copy(f).normalize(),M.push(d.x,d.y,d.z),g.push(U+N,1-R),D.push(u++)}h.push(D)}for(let v=0;v<n;v++)for(let D=0;D<e;D++){const R=h[v][D+1],N=h[v][D],z=h[v+1][D],U=h[v+1][D+1];(v!==0||o>0)&&m.push(R,N,U),(v!==n-1||c<Math.PI)&&m.push(N,z,U)}this.setIndex(m),this.setAttribute("position",new un(S,3)),this.setAttribute("normal",new un(M,3)),this.setAttribute("uv",new un(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ta extends $n{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],c=[],u=[],h=new H,f=new H,d=new H;for(let m=0;m<=n;m++)for(let S=0;S<=r;S++){const M=S/r*s,g=m/n*Math.PI*2;f.x=(t+e*Math.cos(g))*Math.cos(M),f.y=(t+e*Math.cos(g))*Math.sin(M),f.z=e*Math.sin(g),a.push(f.x,f.y,f.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),d.subVectors(f,h).normalize(),c.push(d.x,d.y,d.z),u.push(S/r),u.push(m/n)}for(let m=1;m<=n;m++)for(let S=1;S<=r;S++){const M=(r+1)*m+S-1,g=(r+1)*(m-1)+S-1,v=(r+1)*(m-1)+S,D=(r+1)*m+S;o.push(M,g,D),o.push(g,v,D)}this.setIndex(o),this.setAttribute("position",new un(a,3)),this.setAttribute("normal",new un(c,3)),this.setAttribute("uv",new un(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ta(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Wr extends Js{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=km,this.normalScale=new Jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ag extends cn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Xc=new Pe,dp=new H,pp=new H;class kT{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Jt(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xh,this._frameExtents=new Jt(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;dp.setFromMatrixPosition(t.matrixWorld),e.position.copy(dp),pp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(pp),e.updateMatrixWorld(),Xc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class zT extends kT{constructor(){super(new Jm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $c extends ag{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new zT}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class HT extends ag{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class GT{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=mp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=mp();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function mp(){return performance.now()}const gp=new Pe;class WT{constructor(t,e,n=0,r=1/0){this.ray=new qm(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Wh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return gp.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gp),this}intersectObject(t,e=!0,n=[]){return Xu(t,this,n,e),n.sort(_p),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)Xu(t[r],this,n,e);return n.sort(_p),n}}function _p(i,t){return i.distance-t.distance}function Xu(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)Xu(s[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uh);var vp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg=function(i){const t=[];let e=0;for(let n=0;n<i.length;n++){let r=i.charCodeAt(n);r<128?t[e++]=r:r<2048?(t[e++]=r>>6|192,t[e++]=r&63|128):(r&64512)===55296&&n+1<i.length&&(i.charCodeAt(n+1)&64512)===56320?(r=65536+((r&1023)<<10)+(i.charCodeAt(++n)&1023),t[e++]=r>>18|240,t[e++]=r>>12&63|128,t[e++]=r>>6&63|128,t[e++]=r&63|128):(t[e++]=r>>12|224,t[e++]=r>>6&63|128,t[e++]=r&63|128)}return t},qT=function(i){const t=[];let e=0,n=0;for(;e<i.length;){const r=i[e++];if(r<128)t[n++]=String.fromCharCode(r);else if(r>191&&r<224){const s=i[e++];t[n++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=i[e++],o=i[e++],a=i[e++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[n++]=String.fromCharCode(55296+(c>>10)),t[n++]=String.fromCharCode(56320+(c&1023))}else{const s=i[e++],o=i[e++];t[n++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return t.join("")},cg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,t){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<i.length;r+=3){const s=i[r],o=r+1<i.length,a=o?i[r+1]:0,c=r+2<i.length,u=c?i[r+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(d=64)),n.push(e[h],e[f],e[d],e[m])}return n.join("")},encodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(i):this.encodeByteArray(lg(i),t)},decodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(i):qT(this.decodeStringToByteArray(i,t))},decodeStringToByteArray(i,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<i.length;){const s=e[i.charAt(r++)],a=r<i.length?e[i.charAt(r)]:0;++r;const u=r<i.length?e[i.charAt(r)]:64;++r;const f=r<i.length?e[i.charAt(r)]:64;if(++r,s==null||a==null||u==null||f==null)throw new XT;const d=s<<2|a>>4;if(n.push(d),u!==64){const m=a<<4&240|u>>2;if(n.push(m),f!==64){const S=u<<6&192|f;n.push(S)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class XT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $T=function(i){const t=lg(i);return cg.encodeByteArray(t,!0)},vl=function(i){return $T(i).replace(/\./g,"")},jT=function(i){try{return cg.decodeString(i,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT=()=>KT().__FIREBASE_DEFAULTS__,QT=()=>{if(typeof process>"u"||typeof vp>"u")return;const i=vp.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},ZT=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=i&&jT(i[1]);return t&&JSON.parse(t)},Yh=()=>{try{return YT()||QT()||ZT()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},JT=i=>{var t,e;return(e=(t=Yh())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[i]},tM=i=>{const t=JT(i);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),n]:[t.substring(0,e),n]},ug=()=>{var i;return(i=Yh())===null||i===void 0?void 0:i.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nM(i,t){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",r=i.iat||0,s=i.sub||i.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},i);return[vl(JSON.stringify(e)),vl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iM(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rM(){var i;const t=(i=Yh())===null||i===void 0?void 0:i.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function sM(){return!rM()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function oM(){try{return typeof indexedDB=="object"}catch{return!1}}function aM(){return new Promise((i,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),e||self.indexedDB.deleteDatabase(n),i(!0)},r.onupgradeneeded=()=>{e=!1},r.onerror=()=>{var s;t(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lM="FirebaseError";class eo extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=lM,Object.setPrototypeOf(this,eo.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hg.prototype.create)}}class hg{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,s=this.errors[t],o=s?cM(s,n):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new eo(r,a,n)}}function cM(i,t){return i.replace(uM,(e,n)=>{const r=t[n];return r!=null?String(r):`<${n}?>`})}const uM=/\{\$([^}]+)}/g;function $u(i,t){if(i===t)return!0;const e=Object.keys(i),n=Object.keys(t);for(const r of e){if(!n.includes(r))return!1;const s=i[r],o=t[r];if(yp(s)&&yp(o)){if(!$u(s,o))return!1}else if(s!==o)return!1}for(const r of n)if(!e.includes(r))return!1;return!0}function yp(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(i){return i&&i._delegate?i._delegate:i}class Bo{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hM{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new eM;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:e});r&&n.resolve(r)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(t?.identifier),r=(e=t?.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(dM(t))try{this.getOrInitializeService({instanceIdentifier:Cr})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:r});n.resolve(s)}catch{}}}}clearInstance(t=Cr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Cr){return this.instances.has(t)}getOptions(t=Cr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);n===a&&o.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),s=(n=this.onInitCallbacks.get(r))!==null&&n!==void 0?n:new Set;s.add(t),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&t(o,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:fM(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=Cr){return this.component?this.component.multipleInstances?t:Cr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fM(i){return i===Cr?void 0:i}function dM(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pM{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new hM(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(pe||(pe={}));const mM={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},gM=pe.INFO,_M={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},vM=(i,t,...e)=>{if(t<i.logLevel)return;const n=new Date().toISOString(),r=_M[t];if(r)console[r](`[${n}]  ${i.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class fg{constructor(t){this.name=t,this._logLevel=gM,this._logHandler=vM,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in pe))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?mM[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...t),this._logHandler(this,pe.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...t),this._logHandler(this,pe.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...t),this._logHandler(this,pe.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...t),this._logHandler(this,pe.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...t),this._logHandler(this,pe.ERROR,...t)}}const yM=(i,t)=>t.some(e=>i instanceof e);let Ep,Sp;function EM(){return Ep||(Ep=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function SM(){return Sp||(Sp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dg=new WeakMap,ju=new WeakMap,pg=new WeakMap,jc=new WeakMap,Qh=new WeakMap;function xM(i){const t=new Promise((e,n)=>{const r=()=>{i.removeEventListener("success",s),i.removeEventListener("error",o)},s=()=>{e(sr(i.result)),r()},o=()=>{n(i.error),r()};i.addEventListener("success",s),i.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&dg.set(e,i)}).catch(()=>{}),Qh.set(t,i),t}function TM(i){if(ju.has(i))return;const t=new Promise((e,n)=>{const r=()=>{i.removeEventListener("complete",s),i.removeEventListener("error",o),i.removeEventListener("abort",o)},s=()=>{e(),r()},o=()=>{n(i.error||new DOMException("AbortError","AbortError")),r()};i.addEventListener("complete",s),i.addEventListener("error",o),i.addEventListener("abort",o)});ju.set(i,t)}let Ku={get(i,t,e){if(i instanceof IDBTransaction){if(t==="done")return ju.get(i);if(t==="objectStoreNames")return i.objectStoreNames||pg.get(i);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return sr(i[t])},set(i,t,e){return i[t]=e,!0},has(i,t){return i instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in i}};function MM(i){Ku=i(Ku)}function AM(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const n=i.call(Kc(this),t,...e);return pg.set(n,t.sort?t.sort():[t]),sr(n)}:SM().includes(i)?function(...t){return i.apply(Kc(this),t),sr(dg.get(this))}:function(...t){return sr(i.apply(Kc(this),t))}}function wM(i){return typeof i=="function"?AM(i):(i instanceof IDBTransaction&&TM(i),yM(i,EM())?new Proxy(i,Ku):i)}function sr(i){if(i instanceof IDBRequest)return xM(i);if(jc.has(i))return jc.get(i);const t=wM(i);return t!==i&&(jc.set(i,t),Qh.set(t,i)),t}const Kc=i=>Qh.get(i);function bM(i,t,{blocked:e,upgrade:n,blocking:r,terminated:s}={}){const o=indexedDB.open(i,t),a=sr(o);return n&&o.addEventListener("upgradeneeded",c=>{n(sr(o.result),c.oldVersion,c.newVersion,sr(o.transaction),c)}),e&&o.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const RM=["get","getKey","getAll","getAllKeys","count"],CM=["put","add","delete","clear"],Yc=new Map;function xp(i,t){if(!(i instanceof IDBDatabase&&!(t in i)&&typeof t=="string"))return;if(Yc.get(t))return Yc.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,r=CM.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!(r||RM.includes(e)))return;const s=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return n&&(u=u.index(a.shift())),(await Promise.all([u[e](...a),r&&c.done]))[0]};return Yc.set(t,s),s}MM(i=>({...i,get:(t,e,n)=>xp(t,e)||i.get(t,e,n),has:(t,e)=>!!xp(t,e)||i.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IM{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(PM(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function PM(i){const t=i.getComponent();return t?.type==="VERSION"}const Yu="@firebase/app",Tp="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=new fg("@firebase/app"),DM="@firebase/app-compat",LM="@firebase/analytics-compat",NM="@firebase/analytics",UM="@firebase/app-check-compat",OM="@firebase/app-check",FM="@firebase/auth",VM="@firebase/auth-compat",BM="@firebase/database",kM="@firebase/data-connect",zM="@firebase/database-compat",HM="@firebase/functions",GM="@firebase/functions-compat",WM="@firebase/installations",qM="@firebase/installations-compat",XM="@firebase/messaging",$M="@firebase/messaging-compat",jM="@firebase/performance",KM="@firebase/performance-compat",YM="@firebase/remote-config",QM="@firebase/remote-config-compat",ZM="@firebase/storage",JM="@firebase/storage-compat",tA="@firebase/firestore",eA="@firebase/vertexai-preview",nA="@firebase/firestore-compat",iA="firebase",rA="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu="[DEFAULT]",sA={[Yu]:"fire-core",[DM]:"fire-core-compat",[NM]:"fire-analytics",[LM]:"fire-analytics-compat",[OM]:"fire-app-check",[UM]:"fire-app-check-compat",[FM]:"fire-auth",[VM]:"fire-auth-compat",[BM]:"fire-rtdb",[kM]:"fire-data-connect",[zM]:"fire-rtdb-compat",[HM]:"fire-fn",[GM]:"fire-fn-compat",[WM]:"fire-iid",[qM]:"fire-iid-compat",[XM]:"fire-fcm",[$M]:"fire-fcm-compat",[jM]:"fire-perf",[KM]:"fire-perf-compat",[YM]:"fire-rc",[QM]:"fire-rc-compat",[ZM]:"fire-gcs",[JM]:"fire-gcs-compat",[tA]:"fire-fst",[nA]:"fire-fst-compat",[eA]:"fire-vertex","fire-js":"fire-js",[iA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl=new Map,oA=new Map,Zu=new Map;function Mp(i,t){try{i.container.addComponent(t)}catch(e){Fi.debug(`Component ${t.name} failed to register with FirebaseApp ${i.name}`,e)}}function El(i){const t=i.name;if(Zu.has(t))return Fi.debug(`There were multiple attempts to register component ${t}.`),!1;Zu.set(t,i);for(const e of yl.values())Mp(e,i);for(const e of oA.values())Mp(e,i);return!0}function aA(i,t){const e=i.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),i.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},or=new hg("app","Firebase",lA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Bo("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw or.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA=rA;function mg(i,t={}){let e=i;typeof t!="object"&&(t={name:t});const n=Object.assign({name:Qu,automaticDataCollectionEnabled:!1},t),r=n.name;if(typeof r!="string"||!r)throw or.create("bad-app-name",{appName:String(r)});if(e||(e=ug()),!e)throw or.create("no-options");const s=yl.get(r);if(s){if($u(e,s.options)&&$u(n,s.config))return s;throw or.create("duplicate-app",{appName:r})}const o=new pM(r);for(const c of Zu.values())o.addComponent(c);const a=new cA(e,n,o);return yl.set(r,a),a}function hA(i=Qu){const t=yl.get(i);if(!t&&i===Qu&&ug())return mg();if(!t)throw or.create("no-app",{appName:i});return t}function Ds(i,t,e){var n;let r=(n=sA[i])!==null&&n!==void 0?n:i;e&&(r+=`-${e}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Fi.warn(a.join(" "));return}El(new Bo(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA="firebase-heartbeat-database",dA=1,ko="firebase-heartbeat-store";let Qc=null;function gg(){return Qc||(Qc=bM(fA,dA,{upgrade:(i,t)=>{switch(t){case 0:try{i.createObjectStore(ko)}catch(e){console.warn(e)}}}}).catch(i=>{throw or.create("idb-open",{originalErrorMessage:i.message})})),Qc}async function pA(i){try{const e=(await gg()).transaction(ko),n=await e.objectStore(ko).get(_g(i));return await e.done,n}catch(t){if(t instanceof eo)Fi.warn(t.message);else{const e=or.create("idb-get",{originalErrorMessage:t?.message});Fi.warn(e.message)}}}async function Ap(i,t){try{const n=(await gg()).transaction(ko,"readwrite");await n.objectStore(ko).put(t,_g(i)),await n.done}catch(e){if(e instanceof eo)Fi.warn(e.message);else{const n=or.create("idb-set",{originalErrorMessage:e?.message});Fi.warn(n.message)}}}function _g(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA=1024,gA=30*24*60*60*1e3;class _A{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new yA(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,e;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=wp();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=gA}),this._storage.overwrite(this._heartbeatsCache))}catch(n){Fi.warn(n)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=wp(),{heartbeatsToSend:n,unsentEntries:r}=vA(this._heartbeatsCache.heartbeats),s=vl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Fi.warn(e),""}}}function wp(){return new Date().toISOString().substring(0,10)}function vA(i,t=mA){const e=[];let n=i.slice();for(const r of i){const s=e.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),bp(e)>t){s.dates.pop();break}}else if(e.push({agent:r.agent,dates:[r.date]}),bp(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class yA{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oM()?aM().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await pA(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ap(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ap(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function bp(i){return vl(JSON.stringify({version:2,heartbeats:i})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EA(i){El(new Bo("platform-logger",t=>new IM(t),"PRIVATE")),El(new Bo("heartbeat",t=>new _A(t),"PRIVATE")),Ds(Yu,Tp,i),Ds(Yu,Tp,"esm2017"),Ds("fire-js","")}EA("");var Rp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Or,vg;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(x,T){function C(){}C.prototype=T.prototype,x.D=T.prototype,x.prototype=new C,x.prototype.constructor=x,x.C=function(_,y,P){for(var A=Array(arguments.length-2),X=2;X<arguments.length;X++)A[X-2]=arguments[X];return T.prototype[y].apply(_,A)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(x,T,C){C||(C=0);var _=Array(16);if(typeof T=="string")for(var y=0;16>y;++y)_[y]=T.charCodeAt(C++)|T.charCodeAt(C++)<<8|T.charCodeAt(C++)<<16|T.charCodeAt(C++)<<24;else for(y=0;16>y;++y)_[y]=T[C++]|T[C++]<<8|T[C++]<<16|T[C++]<<24;T=x.g[0],C=x.g[1],y=x.g[2];var P=x.g[3],A=T+(P^C&(y^P))+_[0]+3614090360&4294967295;T=C+(A<<7&4294967295|A>>>25),A=P+(y^T&(C^y))+_[1]+3905402710&4294967295,P=T+(A<<12&4294967295|A>>>20),A=y+(C^P&(T^C))+_[2]+606105819&4294967295,y=P+(A<<17&4294967295|A>>>15),A=C+(T^y&(P^T))+_[3]+3250441966&4294967295,C=y+(A<<22&4294967295|A>>>10),A=T+(P^C&(y^P))+_[4]+4118548399&4294967295,T=C+(A<<7&4294967295|A>>>25),A=P+(y^T&(C^y))+_[5]+1200080426&4294967295,P=T+(A<<12&4294967295|A>>>20),A=y+(C^P&(T^C))+_[6]+2821735955&4294967295,y=P+(A<<17&4294967295|A>>>15),A=C+(T^y&(P^T))+_[7]+4249261313&4294967295,C=y+(A<<22&4294967295|A>>>10),A=T+(P^C&(y^P))+_[8]+1770035416&4294967295,T=C+(A<<7&4294967295|A>>>25),A=P+(y^T&(C^y))+_[9]+2336552879&4294967295,P=T+(A<<12&4294967295|A>>>20),A=y+(C^P&(T^C))+_[10]+4294925233&4294967295,y=P+(A<<17&4294967295|A>>>15),A=C+(T^y&(P^T))+_[11]+2304563134&4294967295,C=y+(A<<22&4294967295|A>>>10),A=T+(P^C&(y^P))+_[12]+1804603682&4294967295,T=C+(A<<7&4294967295|A>>>25),A=P+(y^T&(C^y))+_[13]+4254626195&4294967295,P=T+(A<<12&4294967295|A>>>20),A=y+(C^P&(T^C))+_[14]+2792965006&4294967295,y=P+(A<<17&4294967295|A>>>15),A=C+(T^y&(P^T))+_[15]+1236535329&4294967295,C=y+(A<<22&4294967295|A>>>10),A=T+(y^P&(C^y))+_[1]+4129170786&4294967295,T=C+(A<<5&4294967295|A>>>27),A=P+(C^y&(T^C))+_[6]+3225465664&4294967295,P=T+(A<<9&4294967295|A>>>23),A=y+(T^C&(P^T))+_[11]+643717713&4294967295,y=P+(A<<14&4294967295|A>>>18),A=C+(P^T&(y^P))+_[0]+3921069994&4294967295,C=y+(A<<20&4294967295|A>>>12),A=T+(y^P&(C^y))+_[5]+3593408605&4294967295,T=C+(A<<5&4294967295|A>>>27),A=P+(C^y&(T^C))+_[10]+38016083&4294967295,P=T+(A<<9&4294967295|A>>>23),A=y+(T^C&(P^T))+_[15]+3634488961&4294967295,y=P+(A<<14&4294967295|A>>>18),A=C+(P^T&(y^P))+_[4]+3889429448&4294967295,C=y+(A<<20&4294967295|A>>>12),A=T+(y^P&(C^y))+_[9]+568446438&4294967295,T=C+(A<<5&4294967295|A>>>27),A=P+(C^y&(T^C))+_[14]+3275163606&4294967295,P=T+(A<<9&4294967295|A>>>23),A=y+(T^C&(P^T))+_[3]+4107603335&4294967295,y=P+(A<<14&4294967295|A>>>18),A=C+(P^T&(y^P))+_[8]+1163531501&4294967295,C=y+(A<<20&4294967295|A>>>12),A=T+(y^P&(C^y))+_[13]+2850285829&4294967295,T=C+(A<<5&4294967295|A>>>27),A=P+(C^y&(T^C))+_[2]+4243563512&4294967295,P=T+(A<<9&4294967295|A>>>23),A=y+(T^C&(P^T))+_[7]+1735328473&4294967295,y=P+(A<<14&4294967295|A>>>18),A=C+(P^T&(y^P))+_[12]+2368359562&4294967295,C=y+(A<<20&4294967295|A>>>12),A=T+(C^y^P)+_[5]+4294588738&4294967295,T=C+(A<<4&4294967295|A>>>28),A=P+(T^C^y)+_[8]+2272392833&4294967295,P=T+(A<<11&4294967295|A>>>21),A=y+(P^T^C)+_[11]+1839030562&4294967295,y=P+(A<<16&4294967295|A>>>16),A=C+(y^P^T)+_[14]+4259657740&4294967295,C=y+(A<<23&4294967295|A>>>9),A=T+(C^y^P)+_[1]+2763975236&4294967295,T=C+(A<<4&4294967295|A>>>28),A=P+(T^C^y)+_[4]+1272893353&4294967295,P=T+(A<<11&4294967295|A>>>21),A=y+(P^T^C)+_[7]+4139469664&4294967295,y=P+(A<<16&4294967295|A>>>16),A=C+(y^P^T)+_[10]+3200236656&4294967295,C=y+(A<<23&4294967295|A>>>9),A=T+(C^y^P)+_[13]+681279174&4294967295,T=C+(A<<4&4294967295|A>>>28),A=P+(T^C^y)+_[0]+3936430074&4294967295,P=T+(A<<11&4294967295|A>>>21),A=y+(P^T^C)+_[3]+3572445317&4294967295,y=P+(A<<16&4294967295|A>>>16),A=C+(y^P^T)+_[6]+76029189&4294967295,C=y+(A<<23&4294967295|A>>>9),A=T+(C^y^P)+_[9]+3654602809&4294967295,T=C+(A<<4&4294967295|A>>>28),A=P+(T^C^y)+_[12]+3873151461&4294967295,P=T+(A<<11&4294967295|A>>>21),A=y+(P^T^C)+_[15]+530742520&4294967295,y=P+(A<<16&4294967295|A>>>16),A=C+(y^P^T)+_[2]+3299628645&4294967295,C=y+(A<<23&4294967295|A>>>9),A=T+(y^(C|~P))+_[0]+4096336452&4294967295,T=C+(A<<6&4294967295|A>>>26),A=P+(C^(T|~y))+_[7]+1126891415&4294967295,P=T+(A<<10&4294967295|A>>>22),A=y+(T^(P|~C))+_[14]+2878612391&4294967295,y=P+(A<<15&4294967295|A>>>17),A=C+(P^(y|~T))+_[5]+4237533241&4294967295,C=y+(A<<21&4294967295|A>>>11),A=T+(y^(C|~P))+_[12]+1700485571&4294967295,T=C+(A<<6&4294967295|A>>>26),A=P+(C^(T|~y))+_[3]+2399980690&4294967295,P=T+(A<<10&4294967295|A>>>22),A=y+(T^(P|~C))+_[10]+4293915773&4294967295,y=P+(A<<15&4294967295|A>>>17),A=C+(P^(y|~T))+_[1]+2240044497&4294967295,C=y+(A<<21&4294967295|A>>>11),A=T+(y^(C|~P))+_[8]+1873313359&4294967295,T=C+(A<<6&4294967295|A>>>26),A=P+(C^(T|~y))+_[15]+4264355552&4294967295,P=T+(A<<10&4294967295|A>>>22),A=y+(T^(P|~C))+_[6]+2734768916&4294967295,y=P+(A<<15&4294967295|A>>>17),A=C+(P^(y|~T))+_[13]+1309151649&4294967295,C=y+(A<<21&4294967295|A>>>11),A=T+(y^(C|~P))+_[4]+4149444226&4294967295,T=C+(A<<6&4294967295|A>>>26),A=P+(C^(T|~y))+_[11]+3174756917&4294967295,P=T+(A<<10&4294967295|A>>>22),A=y+(T^(P|~C))+_[2]+718787259&4294967295,y=P+(A<<15&4294967295|A>>>17),A=C+(P^(y|~T))+_[9]+3951481745&4294967295,x.g[0]=x.g[0]+T&4294967295,x.g[1]=x.g[1]+(y+(A<<21&4294967295|A>>>11))&4294967295,x.g[2]=x.g[2]+y&4294967295,x.g[3]=x.g[3]+P&4294967295}n.prototype.u=function(x,T){T===void 0&&(T=x.length);for(var C=T-this.blockSize,_=this.B,y=this.h,P=0;P<T;){if(y==0)for(;P<=C;)r(this,x,P),P+=this.blockSize;if(typeof x=="string"){for(;P<T;)if(_[y++]=x.charCodeAt(P++),y==this.blockSize){r(this,_),y=0;break}}else for(;P<T;)if(_[y++]=x[P++],y==this.blockSize){r(this,_),y=0;break}}this.h=y,this.o+=T},n.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var T=1;T<x.length-8;++T)x[T]=0;var C=8*this.o;for(T=x.length-8;T<x.length;++T)x[T]=C&255,C/=256;for(this.u(x),x=Array(16),T=C=0;4>T;++T)for(var _=0;32>_;_+=8)x[C++]=this.g[T]>>>_&255;return x};function s(x,T){var C=a;return Object.prototype.hasOwnProperty.call(C,x)?C[x]:C[x]=T(x)}function o(x,T){this.h=T;for(var C=[],_=!0,y=x.length-1;0<=y;y--){var P=x[y]|0;_&&P==T||(C[y]=P,_=!1)}this.g=C}var a={};function c(x){return-128<=x&&128>x?s(x,function(T){return new o([T|0],0>T?-1:0)}):new o([x|0],0>x?-1:0)}function u(x){if(isNaN(x)||!isFinite(x))return f;if(0>x)return g(u(-x));for(var T=[],C=1,_=0;x>=C;_++)T[_]=x/C|0,C*=4294967296;return new o(T,0)}function h(x,T){if(x.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(x.charAt(0)=="-")return g(h(x.substring(1),T));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=u(Math.pow(T,8)),_=f,y=0;y<x.length;y+=8){var P=Math.min(8,x.length-y),A=parseInt(x.substring(y,y+P),T);8>P?(P=u(Math.pow(T,P)),_=_.j(P).add(u(A))):(_=_.j(C),_=_.add(u(A)))}return _}var f=c(0),d=c(1),m=c(16777216);i=o.prototype,i.m=function(){if(M(this))return-g(this).m();for(var x=0,T=1,C=0;C<this.g.length;C++){var _=this.i(C);x+=(0<=_?_:4294967296+_)*T,T*=4294967296}return x},i.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(S(this))return"0";if(M(this))return"-"+g(this).toString(x);for(var T=u(Math.pow(x,6)),C=this,_="";;){var y=N(C,T).g;C=v(C,y.j(T));var P=((0<C.g.length?C.g[0]:C.h)>>>0).toString(x);if(C=y,S(C))return P+_;for(;6>P.length;)P="0"+P;_=P+_}},i.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function S(x){if(x.h!=0)return!1;for(var T=0;T<x.g.length;T++)if(x.g[T]!=0)return!1;return!0}function M(x){return x.h==-1}i.l=function(x){return x=v(this,x),M(x)?-1:S(x)?0:1};function g(x){for(var T=x.g.length,C=[],_=0;_<T;_++)C[_]=~x.g[_];return new o(C,~x.h).add(d)}i.abs=function(){return M(this)?g(this):this},i.add=function(x){for(var T=Math.max(this.g.length,x.g.length),C=[],_=0,y=0;y<=T;y++){var P=_+(this.i(y)&65535)+(x.i(y)&65535),A=(P>>>16)+(this.i(y)>>>16)+(x.i(y)>>>16);_=A>>>16,P&=65535,A&=65535,C[y]=A<<16|P}return new o(C,C[C.length-1]&-2147483648?-1:0)};function v(x,T){return x.add(g(T))}i.j=function(x){if(S(this)||S(x))return f;if(M(this))return M(x)?g(this).j(g(x)):g(g(this).j(x));if(M(x))return g(this.j(g(x)));if(0>this.l(m)&&0>x.l(m))return u(this.m()*x.m());for(var T=this.g.length+x.g.length,C=[],_=0;_<2*T;_++)C[_]=0;for(_=0;_<this.g.length;_++)for(var y=0;y<x.g.length;y++){var P=this.i(_)>>>16,A=this.i(_)&65535,X=x.i(y)>>>16,Q=x.i(y)&65535;C[2*_+2*y]+=A*Q,D(C,2*_+2*y),C[2*_+2*y+1]+=P*Q,D(C,2*_+2*y+1),C[2*_+2*y+1]+=A*X,D(C,2*_+2*y+1),C[2*_+2*y+2]+=P*X,D(C,2*_+2*y+2)}for(_=0;_<T;_++)C[_]=C[2*_+1]<<16|C[2*_];for(_=T;_<2*T;_++)C[_]=0;return new o(C,0)};function D(x,T){for(;(x[T]&65535)!=x[T];)x[T+1]+=x[T]>>>16,x[T]&=65535,T++}function R(x,T){this.g=x,this.h=T}function N(x,T){if(S(T))throw Error("division by zero");if(S(x))return new R(f,f);if(M(x))return T=N(g(x),T),new R(g(T.g),g(T.h));if(M(T))return T=N(x,g(T)),new R(g(T.g),T.h);if(30<x.g.length){if(M(x)||M(T))throw Error("slowDivide_ only works with positive integers.");for(var C=d,_=T;0>=_.l(x);)C=z(C),_=z(_);var y=U(C,1),P=U(_,1);for(_=U(_,2),C=U(C,2);!S(_);){var A=P.add(_);0>=A.l(x)&&(y=y.add(C),P=A),_=U(_,1),C=U(C,1)}return T=v(x,y.j(T)),new R(y,T)}for(y=f;0<=x.l(T);){for(C=Math.max(1,Math.floor(x.m()/T.m())),_=Math.ceil(Math.log(C)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),P=u(C),A=P.j(T);M(A)||0<A.l(x);)C-=_,P=u(C),A=P.j(T);S(P)&&(P=d),y=y.add(P),x=v(x,A)}return new R(y,x)}i.A=function(x){return N(this,x).h},i.and=function(x){for(var T=Math.max(this.g.length,x.g.length),C=[],_=0;_<T;_++)C[_]=this.i(_)&x.i(_);return new o(C,this.h&x.h)},i.or=function(x){for(var T=Math.max(this.g.length,x.g.length),C=[],_=0;_<T;_++)C[_]=this.i(_)|x.i(_);return new o(C,this.h|x.h)},i.xor=function(x){for(var T=Math.max(this.g.length,x.g.length),C=[],_=0;_<T;_++)C[_]=this.i(_)^x.i(_);return new o(C,this.h^x.h)};function z(x){for(var T=x.g.length+1,C=[],_=0;_<T;_++)C[_]=x.i(_)<<1|x.i(_-1)>>>31;return new o(C,x.h)}function U(x,T){var C=T>>5;T%=32;for(var _=x.g.length-C,y=[],P=0;P<_;P++)y[P]=0<T?x.i(P+C)>>>T|x.i(P+C+1)<<32-T:x.i(P+C);return new o(y,x.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,vg=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Or=o}).apply(typeof Rp<"u"?Rp:typeof self<"u"?self:typeof window<"u"?window:{});var qa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yg,Ro,Eg,rl,Ju,Sg,xg,Tg;(function(){var i,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,p,E){return l==Array.prototype||l==Object.prototype||(l[p]=E.value),l};function e(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof qa=="object"&&qa];for(var p=0;p<l.length;++p){var E=l[p];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var n=e(this);function r(l,p){if(p)t:{var E=n;l=l.split(".");for(var I=0;I<l.length-1;I++){var k=l[I];if(!(k in E))break t;E=E[k]}l=l[l.length-1],I=E[l],p=p(I),p!=I&&p!=null&&t(E,l,{configurable:!0,writable:!0,value:p})}}function s(l,p){l instanceof String&&(l+="");var E=0,I=!1,k={next:function(){if(!I&&E<l.length){var $=E++;return{value:p($,l[$]),done:!1}}return I=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}r("Array.prototype.values",function(l){return l||function(){return s(this,function(p,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var p=typeof l;return p=p!="object"?p:l?Array.isArray(l)?"array":p:"null",p=="array"||p=="object"&&typeof l.length=="number"}function u(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function h(l,p,E){return l.call.apply(l.bind,arguments)}function f(l,p,E){if(!l)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,I),l.apply(p,k)}}return function(){return l.apply(p,arguments)}}function d(l,p,E){return d=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,d.apply(null,arguments)}function m(l,p){var E=Array.prototype.slice.call(arguments,1);return function(){var I=E.slice();return I.push.apply(I,arguments),l.apply(this,I)}}function S(l,p){function E(){}E.prototype=p.prototype,l.aa=p.prototype,l.prototype=new E,l.prototype.constructor=l,l.Qb=function(I,k,$){for(var ut=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)ut[Te-2]=arguments[Te];return p.prototype[k].apply(I,ut)}}function M(l){const p=l.length;if(0<p){const E=Array(p);for(let I=0;I<p;I++)E[I]=l[I];return E}return[]}function g(l,p){for(let E=1;E<arguments.length;E++){const I=arguments[E];if(c(I)){const k=l.length||0,$=I.length||0;l.length=k+$;for(let ut=0;ut<$;ut++)l[k+ut]=I[ut]}else l.push(I)}}class v{constructor(p,E){this.i=p,this.j=E,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function D(l){return/^[\s\xa0]*$/.test(l)}function R(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function N(l){return N[" "](l),l}N[" "]=function(){};var z=R().indexOf("Gecko")!=-1&&!(R().toLowerCase().indexOf("webkit")!=-1&&R().indexOf("Edge")==-1)&&!(R().indexOf("Trident")!=-1||R().indexOf("MSIE")!=-1)&&R().indexOf("Edge")==-1;function U(l,p,E){for(const I in l)p.call(E,l[I],I,l)}function x(l,p){for(const E in l)p.call(void 0,l[E],E,l)}function T(l){const p={};for(const E in l)p[E]=l[E];return p}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(l,p){let E,I;for(let k=1;k<arguments.length;k++){I=arguments[k];for(E in I)l[E]=I[E];for(let $=0;$<C.length;$++)E=C[$],Object.prototype.hasOwnProperty.call(I,E)&&(l[E]=I[E])}}function y(l){var p=1;l=l.split(":");const E=[];for(;0<p&&l.length;)E.push(l.shift()),p--;return l.length&&E.push(l.join(":")),E}function P(l){a.setTimeout(()=>{throw l},0)}function A(){var l=yt;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class X{constructor(){this.h=this.g=null}add(p,E){const I=Q.get();I.set(p,E),this.h?this.h.next=I:this.g=I,this.h=I}}var Q=new v(()=>new j,l=>l.reset());class j{constructor(){this.next=this.g=this.h=null}set(p,E){this.h=p,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let nt,Y=!1,yt=new X,Et=()=>{const l=a.Promise.resolve(void 0);nt=()=>{l.then(Rt)}};var Rt=()=>{for(var l;l=A();){try{l.h.call(l.g)}catch(E){P(E)}var p=Q;p.j(l),100>p.h&&(p.h++,l.next=p.g,p.g=l)}Y=!1};function jt(){this.s=this.s,this.C=this.C}jt.prototype.s=!1,jt.prototype.ma=function(){this.s||(this.s=!0,this.N())},jt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function zt(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}zt.prototype.h=function(){this.defaultPrevented=!0};var Z=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const E=()=>{};a.addEventListener("test",E,p),a.removeEventListener("test",E,p)}catch{}return l}();function ot(l,p){if(zt.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var E=this.type=l.type,I=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget){if(z){t:{try{N(p.nodeName);var k=!0;break t}catch{}k=!1}k||(p=null)}}else E=="mouseover"?p=l.fromElement:E=="mouseout"&&(p=l.toElement);this.relatedTarget=p,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:At[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&ot.aa.h.call(this)}}S(ot,zt);var At={2:"touch",3:"pen",4:"mouse"};ot.prototype.h=function(){ot.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var _t="closure_listenable_"+(1e6*Math.random()|0),Gt=0;function Ot(l,p,E,I,k){this.listener=l,this.proxy=null,this.src=p,this.type=E,this.capture=!!I,this.ha=k,this.key=++Gt,this.da=this.fa=!1}function te(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function ue(l){this.src=l,this.g={},this.h=0}ue.prototype.add=function(l,p,E,I,k){var $=l.toString();l=this.g[$],l||(l=this.g[$]=[],this.h++);var ut=O(l,p,I,k);return-1<ut?(p=l[ut],E||(p.fa=!1)):(p=new Ot(p,this.src,$,!!I,k),p.fa=E,l.push(p)),p};function ie(l,p){var E=p.type;if(E in l.g){var I=l.g[E],k=Array.prototype.indexOf.call(I,p,void 0),$;($=0<=k)&&Array.prototype.splice.call(I,k,1),$&&(te(p),l.g[E].length==0&&(delete l.g[E],l.h--))}}function O(l,p,E,I){for(var k=0;k<l.length;++k){var $=l[k];if(!$.da&&$.listener==p&&$.capture==!!E&&$.ha==I)return k}return-1}var rn="closure_lm_"+(1e6*Math.random()|0),ee={};function oe(l,p,E,I,k){if(Array.isArray(p)){for(var $=0;$<p.length;$++)oe(l,p[$],E,I,k);return null}return E=tt(E),l&&l[_t]?l.K(p,E,u(I)?!!I.capture:!1,k):Vt(l,p,E,!1,I,k)}function Vt(l,p,E,I,k,$){if(!p)throw Error("Invalid event type");var ut=u(k)?!!k.capture:!!k,Te=J(l);if(Te||(l[rn]=Te=new ue(l)),E=Te.add(p,E,I,ut,$),E.proxy)return E;if(I=Se(),E.proxy=I,I.src=l,I.listener=E,l.addEventListener)Z||(k=ut),k===void 0&&(k=!1),l.addEventListener(p.toString(),I,k);else if(l.attachEvent)l.attachEvent(w(p.toString()),I);else if(l.addListener&&l.removeListener)l.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return E}function Se(){function l(E){return p.call(l.src,l.listener,E)}const p=G;return l}function Bt(l,p,E,I,k){if(Array.isArray(p))for(var $=0;$<p.length;$++)Bt(l,p[$],E,I,k);else I=u(I)?!!I.capture:!!I,E=tt(E),l&&l[_t]?(l=l.i,p=String(p).toString(),p in l.g&&($=l.g[p],E=O($,E,I,k),-1<E&&(te($[E]),Array.prototype.splice.call($,E,1),$.length==0&&(delete l.g[p],l.h--)))):l&&(l=J(l))&&(p=l.g[p.toString()],l=-1,p&&(l=O(p,E,I,k)),(E=-1<l?p[l]:null)&&L(E))}function L(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[_t])ie(p.i,l);else{var E=l.type,I=l.proxy;p.removeEventListener?p.removeEventListener(E,I,l.capture):p.detachEvent?p.detachEvent(w(E),I):p.addListener&&p.removeListener&&p.removeListener(I),(E=J(p))?(ie(E,l),E.h==0&&(E.src=null,p[rn]=null)):te(l)}}}function w(l){return l in ee?ee[l]:ee[l]="on"+l}function G(l,p){if(l.da)l=!0;else{p=new ot(p,this);var E=l.listener,I=l.ha||l.src;l.fa&&L(l),l=E.call(I,p)}return l}function J(l){return l=l[rn],l instanceof ue?l:null}var rt="__closure_events_fn_"+(1e9*Math.random()>>>0);function tt(l){return typeof l=="function"?l:(l[rt]||(l[rt]=function(p){return l.handleEvent(p)}),l[rt])}function ft(){jt.call(this),this.i=new ue(this),this.M=this,this.F=null}S(ft,jt),ft.prototype[_t]=!0,ft.prototype.removeEventListener=function(l,p,E,I){Bt(this,l,p,E,I)};function at(l,p){var E,I=l.F;if(I)for(E=[];I;I=I.F)E.push(I);if(l=l.M,I=p.type||p,typeof p=="string")p=new zt(p,l);else if(p instanceof zt)p.target=p.target||l;else{var k=p;p=new zt(I,l),_(p,k)}if(k=!0,E)for(var $=E.length-1;0<=$;$--){var ut=p.g=E[$];k=vt(ut,I,!0,p)&&k}if(ut=p.g=l,k=vt(ut,I,!0,p)&&k,k=vt(ut,I,!1,p)&&k,E)for($=0;$<E.length;$++)ut=p.g=E[$],k=vt(ut,I,!1,p)&&k}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var l=this.i,p;for(p in l.g){for(var E=l.g[p],I=0;I<E.length;I++)te(E[I]);delete l.g[p],l.h--}}this.F=null},ft.prototype.K=function(l,p,E,I){return this.i.add(String(l),p,!1,E,I)},ft.prototype.L=function(l,p,E,I){return this.i.add(String(l),p,!0,E,I)};function vt(l,p,E,I){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();for(var k=!0,$=0;$<p.length;++$){var ut=p[$];if(ut&&!ut.da&&ut.capture==E){var Te=ut.listener,sn=ut.ha||ut.src;ut.fa&&ie(l.i,ut),k=Te.call(sn,I)!==!1&&k}}return k&&!I.defaultPrevented}function ae(l,p,E){if(typeof l=="function")E&&(l=d(l,E));else if(l&&typeof l.handleEvent=="function")l=d(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:a.setTimeout(l,p||0)}function lt(l){l.g=ae(()=>{l.g=null,l.i&&(l.i=!1,lt(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class Tt extends jt{constructor(p,E){super(),this.m=p,this.l=E,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:lt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Dt(l){jt.call(this),this.h=l,this.g={}}S(Dt,jt);var Ft=[];function St(l){U(l.g,function(p,E){this.g.hasOwnProperty(E)&&L(p)},l),l.g={}}Dt.prototype.N=function(){Dt.aa.N.call(this),St(this)},Dt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ne=a.JSON.stringify,Wt=a.JSON.parse,ye=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function F(){}F.prototype.h=null;function gt(l){return l.h||(l.h=l.i())}function K(){}var et={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function dt(){zt.call(this,"d")}S(dt,zt);function pt(){zt.call(this,"c")}S(pt,zt);var $t={},De=null;function $e(){return De=De||new ft}$t.La="serverreachability";function le(l){zt.call(this,$t.La,l)}S(le,zt);function He(l){const p=$e();at(p,new le(p))}$t.STAT_EVENT="statevent";function Vn(l,p){zt.call(this,$t.STAT_EVENT,l),this.stat=p}S(Vn,zt);function Ze(l){const p=$e();at(p,new Vn(p,l))}$t.Ma="timingevent";function oo(l,p){zt.call(this,$t.Ma,l),this.size=p}S(oo,zt);function Dn(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},p)}function Si(){this.g=!0}Si.prototype.xa=function(){this.g=!1};function ca(l,p,E,I,k,$){l.info(function(){if(l.g)if($)for(var ut="",Te=$.split("&"),sn=0;sn<Te.length;sn++){var me=Te[sn].split("=");if(1<me.length){var pn=me[0];me=me[1];var mn=pn.split("_");ut=2<=mn.length&&mn[1]=="type"?ut+(pn+"="+me+"&"):ut+(pn+"=redacted&")}}else ut=null;else ut=$;return"XMLHTTP REQ ("+I+") [attempt "+k+"]: "+p+`
`+E+`
`+ut})}function ua(l,p,E,I,k,$,ut){l.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+k+"]: "+p+`
`+E+`
`+$+" "+ut})}function jn(l,p,E,I){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+Zr(l,E)+(I?" "+I:"")})}function ha(l,p){l.info(function(){return"TIMEOUT: "+p})}Si.prototype.info=function(){};function Zr(l,p){if(!l.g)return p;if(!p)return null;try{var E=JSON.parse(p);if(E){for(l=0;l<E.length;l++)if(Array.isArray(E[l])){var I=E[l];if(!(2>I.length)){var k=I[1];if(Array.isArray(k)&&!(1>k.length)){var $=k[0];if($!="noop"&&$!="stop"&&$!="close")for(var ut=1;ut<k.length;ut++)k[ut]=""}}}}return ne(E)}catch{return p}}var yr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ao={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},lo;function Jr(){}S(Jr,F),Jr.prototype.g=function(){return new XMLHttpRequest},Jr.prototype.i=function(){return{}},lo=new Jr;function ai(l,p,E,I){this.j=l,this.i=p,this.l=E,this.R=I||1,this.U=new Dt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new b}function b(){this.i=null,this.g="",this.h=!1}var V={},W={};function q(l,p,E){l.L=1,l.v=fa(Ue(p)),l.m=E,l.P=!0,B(l,null)}function B(l,p){l.F=Date.now(),xt(l),l.A=Ue(l.v);var E=l.A,I=l.R;Array.isArray(I)||(I=[String(I)]),Yf(E.i,"t",I),l.C=0,E=l.j.J,l.h=new b,l.g=pd(l.j,E?p:null,!l.m),0<l.O&&(l.M=new Tt(d(l.Y,l,l.g),l.O)),p=l.U,E=l.g,I=l.ca;var k="readystatechange";Array.isArray(k)||(k&&(Ft[0]=k.toString()),k=Ft);for(var $=0;$<k.length;$++){var ut=oe(E,k[$],I||p.handleEvent,!1,p.h||p);if(!ut)break;p.g[ut.key]=ut}p=l.H?T(l.H):{},l.m?(l.u||(l.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,p)):(l.u="GET",l.g.ea(l.A,l.u,null,p)),He(),ca(l.i,l.u,l.A,l.l,l.R,l.m)}ai.prototype.ca=function(l){l=l.target;const p=this.M;p&&xi(l)==3?p.j():this.Y(l)},ai.prototype.Y=function(l){try{if(l==this.g)t:{const mn=xi(this.g);var p=this.g.Ba();const rs=this.g.Z();if(!(3>mn)&&(mn!=3||this.g&&(this.h.h||this.g.oa()||id(this.g)))){this.J||mn!=4||p==7||(p==8||0>=rs?He(3):He(2)),Lt(this);var E=this.g.Z();this.X=E;e:if(ct(this)){var I=id(this.g);l="";var k=I.length,$=xi(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mt(this),Pt(this);var ut="";break e}this.h.i=new a.TextDecoder}for(p=0;p<k;p++)this.h.h=!0,l+=this.h.i.decode(I[p],{stream:!($&&p==k-1)});I.length=0,this.h.g+=l,this.C=0,ut=this.h.g}else ut=this.g.oa();if(this.o=E==200,ua(this.i,this.u,this.A,this.l,this.R,mn,E),this.o){if(this.T&&!this.K){e:{if(this.g){var Te,sn=this.g;if((Te=sn.g?sn.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(Te)){var me=Te;break e}}me=null}if(E=me)jn(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,he(this,E);else{this.o=!1,this.s=3,Ze(12),Mt(this),Pt(this);break t}}if(this.P){E=!0;let Yn;for(;!this.J&&this.C<ut.length;)if(Yn=mt(this,ut),Yn==W){mn==4&&(this.s=4,Ze(14),E=!1),jn(this.i,this.l,null,"[Incomplete Response]");break}else if(Yn==V){this.s=4,Ze(15),jn(this.i,this.l,ut,"[Invalid Chunk]"),E=!1;break}else jn(this.i,this.l,Yn,null),he(this,Yn);if(ct(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mn!=4||ut.length!=0||this.h.h||(this.s=1,Ze(16),E=!1),this.o=this.o&&E,!E)jn(this.i,this.l,ut,"[Invalid Chunked Response]"),Mt(this),Pt(this);else if(0<ut.length&&!this.W){this.W=!0;var pn=this.j;pn.g==this&&pn.ba&&!pn.M&&(pn.j.info("Great, no buffering proxy detected. Bytes received: "+ut.length),fc(pn),pn.M=!0,Ze(11))}}else jn(this.i,this.l,ut,null),he(this,ut);mn==4&&Mt(this),this.o&&!this.J&&(mn==4?ud(this.j,this):(this.o=!1,xt(this)))}else Lv(this.g),E==400&&0<ut.indexOf("Unknown SID")?(this.s=3,Ze(12)):(this.s=0,Ze(13)),Mt(this),Pt(this)}}}catch{}finally{}};function ct(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function mt(l,p){var E=l.C,I=p.indexOf(`
`,E);return I==-1?W:(E=Number(p.substring(E,I)),isNaN(E)?V:(I+=1,I+E>p.length?W:(p=p.slice(I,I+E),l.C=I+E,p)))}ai.prototype.cancel=function(){this.J=!0,Mt(this)};function xt(l){l.S=Date.now()+l.I,wt(l,l.I)}function wt(l,p){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Dn(d(l.ba,l),p)}function Lt(l){l.B&&(a.clearTimeout(l.B),l.B=null)}ai.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(ha(this.i,this.A),this.L!=2&&(He(),Ze(17)),Mt(this),this.s=2,Pt(this)):wt(this,this.S-l)};function Pt(l){l.j.G==0||l.J||ud(l.j,l)}function Mt(l){Lt(l);var p=l.M;p&&typeof p.ma=="function"&&p.ma(),l.M=null,St(l.U),l.g&&(p=l.g,l.g=null,p.abort(),p.ma())}function he(l,p){try{var E=l.j;if(E.G!=0&&(E.g==l||Ct(E.h,l))){if(!l.K&&Ct(E.h,l)&&E.G==3){try{var I=E.Da.g.parse(p)}catch{I=null}if(Array.isArray(I)&&I.length==3){var k=I;if(k[0]==0){t:if(!E.u){if(E.g)if(E.g.F+3e3<l.F)va(E),ga(E);else break t;hc(E),Ze(18)}}else E.za=k[1],0<E.za-E.T&&37500>k[2]&&E.F&&E.v==0&&!E.C&&(E.C=Dn(d(E.Za,E),6e3));if(1>=fe(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else Er(E,11)}else if((l.K||E.g==l)&&va(E),!D(p))for(k=E.Da.g.parse(p),p=0;p<k.length;p++){let me=k[p];if(E.T=me[0],me=me[1],E.G==2)if(me[0]=="c"){E.K=me[1],E.ia=me[2];const pn=me[3];pn!=null&&(E.la=pn,E.j.info("VER="+E.la));const mn=me[4];mn!=null&&(E.Aa=mn,E.j.info("SVER="+E.Aa));const rs=me[5];rs!=null&&typeof rs=="number"&&0<rs&&(I=1.5*rs,E.L=I,E.j.info("backChannelRequestTimeoutMs_="+I)),I=E;const Yn=l.g;if(Yn){const Ea=Yn.g?Yn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ea){var $=I.h;$.g||Ea.indexOf("spdy")==-1&&Ea.indexOf("quic")==-1&&Ea.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(ke($,$.h),$.h=null))}if(I.D){const dc=Yn.g?Yn.g.getResponseHeader("X-HTTP-Session-Id"):null;dc&&(I.ya=dc,Ae(I.I,I.D,dc))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-l.F,E.j.info("Handshake RTT: "+E.R+"ms")),I=E;var ut=l;if(I.qa=dd(I,I.J?I.ia:null,I.W),ut.K){de(I.h,ut);var Te=ut,sn=I.L;sn&&(Te.I=sn),Te.B&&(Lt(Te),xt(Te)),I.g=ut}else ld(I);0<E.i.length&&_a(E)}else me[0]!="stop"&&me[0]!="close"||Er(E,7);else E.G==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?Er(E,7):uc(E):me[0]!="noop"&&E.l&&E.l.ta(me),E.v=0)}}He(4)}catch{}}var xe=class{constructor(l,p){this.g=l,this.map=p}};function Me(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function dn(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function fe(l){return l.h?1:l.g?l.g.size:0}function Ct(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function ke(l,p){l.g?l.g.add(p):l.h=p}function de(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}Me.prototype.cancel=function(){if(this.i=bn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function bn(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const E of l.g.values())p=p.concat(E.D);return p}return M(l.i)}function zi(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var p=[],E=l.length,I=0;I<E;I++)p.push(l[I]);return p}p=[],E=0;for(I in l)p[E++]=l[I];return p}function xn(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var p=[];l=l.length;for(var E=0;E<l;E++)p.push(E);return p}p=[],E=0;for(const I in l)p[E++]=I;return p}}}function ts(l,p){if(l.forEach&&typeof l.forEach=="function")l.forEach(p,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,p,void 0);else for(var E=xn(l),I=zi(l),k=I.length,$=0;$<k;$++)p.call(void 0,I[$],E&&E[$],l)}var Ie=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function li(l,p){if(l){l=l.split("&");for(var E=0;E<l.length;E++){var I=l[E].indexOf("="),k=null;if(0<=I){var $=l[E].substring(0,I);k=l[E].substring(I+1)}else $=l[E];p($,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Kn(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Kn){this.h=l.h,Hi(this,l.j),this.o=l.o,this.g=l.g,es(this,l.s),this.l=l.l;var p=l.i,E=new fo;E.i=p.i,p.g&&(E.g=new Map(p.g),E.h=p.h),co(this,E),this.m=l.m}else l&&(p=String(l).match(Ie))?(this.h=!1,Hi(this,p[1]||"",!0),this.o=uo(p[2]||""),this.g=uo(p[3]||"",!0),es(this,p[4]),this.l=uo(p[5]||"",!0),co(this,p[6]||"",!0),this.m=uo(p[7]||"")):(this.h=!1,this.i=new fo(null,this.h))}Kn.prototype.toString=function(){var l=[],p=this.j;p&&l.push(ho(p,$f,!0),":");var E=this.g;return(E||p=="file")&&(l.push("//"),(p=this.o)&&l.push(ho(p,$f,!0),"@"),l.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&l.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&l.push("/"),l.push(ho(E,E.charAt(0)=="/"?Tv:xv,!0))),(E=this.i.toString())&&l.push("?",E),(E=this.m)&&l.push("#",ho(E,Av)),l.join("")};function Ue(l){return new Kn(l)}function Hi(l,p,E){l.j=E?uo(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function es(l,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);l.s=p}else l.s=null}function co(l,p,E){p instanceof fo?(l.i=p,wv(l.i,l.h)):(E||(p=ho(p,Mv)),l.i=new fo(p,l.h))}function Ae(l,p,E){l.i.set(p,E)}function fa(l){return Ae(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function uo(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function ho(l,p,E){return typeof l=="string"?(l=encodeURI(l).replace(p,Sv),E&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Sv(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var $f=/[#\/\?@]/g,xv=/[#\?:]/g,Tv=/[#\?]/g,Mv=/[#\?@]/g,Av=/#/g;function fo(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function Gi(l){l.g||(l.g=new Map,l.h=0,l.i&&li(l.i,function(p,E){l.add(decodeURIComponent(p.replace(/\+/g," ")),E)}))}i=fo.prototype,i.add=function(l,p){Gi(this),this.i=null,l=ns(this,l);var E=this.g.get(l);return E||this.g.set(l,E=[]),E.push(p),this.h+=1,this};function jf(l,p){Gi(l),p=ns(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function Kf(l,p){return Gi(l),p=ns(l,p),l.g.has(p)}i.forEach=function(l,p){Gi(this),this.g.forEach(function(E,I){E.forEach(function(k){l.call(p,k,I,this)},this)},this)},i.na=function(){Gi(this);const l=Array.from(this.g.values()),p=Array.from(this.g.keys()),E=[];for(let I=0;I<p.length;I++){const k=l[I];for(let $=0;$<k.length;$++)E.push(p[I])}return E},i.V=function(l){Gi(this);let p=[];if(typeof l=="string")Kf(this,l)&&(p=p.concat(this.g.get(ns(this,l))));else{l=Array.from(this.g.values());for(let E=0;E<l.length;E++)p=p.concat(l[E])}return p},i.set=function(l,p){return Gi(this),this.i=null,l=ns(this,l),Kf(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},i.get=function(l,p){return l?(l=this.V(l),0<l.length?String(l[0]):p):p};function Yf(l,p,E){jf(l,p),0<E.length&&(l.i=null,l.g.set(ns(l,p),M(E)),l.h+=E.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(var E=0;E<p.length;E++){var I=p[E];const $=encodeURIComponent(String(I)),ut=this.V(I);for(I=0;I<ut.length;I++){var k=$;ut[I]!==""&&(k+="="+encodeURIComponent(String(ut[I]))),l.push(k)}}return this.i=l.join("&")};function ns(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function wv(l,p){p&&!l.j&&(Gi(l),l.i=null,l.g.forEach(function(E,I){var k=I.toLowerCase();I!=k&&(jf(this,I),Yf(this,k,E))},l)),l.j=p}function bv(l,p){const E=new Si;if(a.Image){const I=new Image;I.onload=m(Wi,E,"TestLoadImage: loaded",!0,p,I),I.onerror=m(Wi,E,"TestLoadImage: error",!1,p,I),I.onabort=m(Wi,E,"TestLoadImage: abort",!1,p,I),I.ontimeout=m(Wi,E,"TestLoadImage: timeout",!1,p,I),a.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=l}else p(!1)}function Rv(l,p){const E=new Si,I=new AbortController,k=setTimeout(()=>{I.abort(),Wi(E,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:I.signal}).then($=>{clearTimeout(k),$.ok?Wi(E,"TestPingServer: ok",!0,p):Wi(E,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(k),Wi(E,"TestPingServer: error",!1,p)})}function Wi(l,p,E,I,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),I(E)}catch{}}function Cv(){this.g=new ye}function Iv(l,p,E){const I=E||"";try{ts(l,function(k,$){let ut=k;u(k)&&(ut=ne(k)),p.push(I+$+"="+encodeURIComponent(ut))})}catch(k){throw p.push(I+"type="+encodeURIComponent("_badmap")),k}}function da(l){this.l=l.Ub||null,this.j=l.eb||!1}S(da,F),da.prototype.g=function(){return new pa(this.l,this.j)},da.prototype.i=function(l){return function(){return l}}({});function pa(l,p){ft.call(this),this.D=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(pa,ft),i=pa.prototype,i.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=p,this.readyState=1,mo(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(p.body=l),(this.D||a).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,po(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,mo(this)),this.g&&(this.readyState=3,mo(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Qf(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Qf(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?po(this):mo(this),this.readyState==3&&Qf(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,po(this))},i.Qa=function(l){this.g&&(this.response=l,po(this))},i.ga=function(){this.g&&po(this)};function po(l){l.readyState=4,l.l=null,l.j=null,l.v=null,mo(l)}i.setRequestHeader=function(l,p){this.u.append(l,p)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var E=p.next();!E.done;)E=E.value,l.push(E[0]+": "+E[1]),E=p.next();return l.join(`\r
`)};function mo(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(pa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Zf(l){let p="";return U(l,function(E,I){p+=I,p+=":",p+=E,p+=`\r
`}),p}function cc(l,p,E){t:{for(I in E){var I=!1;break t}I=!0}I||(E=Zf(E),typeof l=="string"?E!=null&&encodeURIComponent(String(E)):Ae(l,p,E))}function Oe(l){ft.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Oe,ft);var Pv=/^https?$/i,Dv=["POST","PUT"];i=Oe.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,p,E,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():lo.g(),this.v=this.o?gt(this.o):gt(lo),this.g.onreadystatechange=d(this.Ea,this);try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch($){Jf(this,$);return}if(l=E||"",E=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var k in I)E.set(k,I[k]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const $ of I.keys())E.set($,I.get($));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(E.keys()).find($=>$.toLowerCase()=="content-type"),k=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(Dv,p,void 0))||I||k||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,ut]of E)this.g.setRequestHeader($,ut);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{nd(this),this.u=!0,this.g.send(l),this.u=!1}catch($){Jf(this,$)}};function Jf(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.m=5,td(l),ma(l)}function td(l){l.A||(l.A=!0,at(l,"complete"),at(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,at(this,"complete"),at(this,"abort"),ma(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ma(this,!0)),Oe.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?ed(this):this.bb())},i.bb=function(){ed(this)};function ed(l){if(l.h&&typeof o<"u"&&(!l.v[1]||xi(l)!=4||l.Z()!=2)){if(l.u&&xi(l)==4)ae(l.Ea,0,l);else if(at(l,"readystatechange"),xi(l)==4){l.h=!1;try{const ut=l.Z();t:switch(ut){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break t;default:p=!1}var E;if(!(E=p)){var I;if(I=ut===0){var k=String(l.D).match(Ie)[1]||null;!k&&a.self&&a.self.location&&(k=a.self.location.protocol.slice(0,-1)),I=!Pv.test(k?k.toLowerCase():"")}E=I}if(E)at(l,"complete"),at(l,"success");else{l.m=6;try{var $=2<xi(l)?l.g.statusText:""}catch{$=""}l.l=$+" ["+l.Z()+"]",td(l)}}finally{ma(l)}}}}function ma(l,p){if(l.g){nd(l);const E=l.g,I=l.v[0]?()=>{}:null;l.g=null,l.v=null,p||at(l,"ready");try{E.onreadystatechange=I}catch{}}}function nd(l){l.I&&(a.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function xi(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<xi(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),Wt(p)}};function id(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Lv(l){const p={};l=(l.g&&2<=xi(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<l.length;I++){if(D(l[I]))continue;var E=y(l[I]);const k=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const $=p[k]||[];p[k]=$,$.push(E)}x(p,function(I){return I.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function go(l,p,E){return E&&E.internalChannelParams&&E.internalChannelParams[l]||p}function rd(l){this.Aa=0,this.i=[],this.j=new Si,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=go("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=go("baseRetryDelayMs",5e3,l),this.cb=go("retryDelaySeedMs",1e4,l),this.Wa=go("forwardChannelMaxRetries",2,l),this.wa=go("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Me(l&&l.concurrentRequestLimit),this.Da=new Cv,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=rd.prototype,i.la=8,i.G=1,i.connect=function(l,p,E,I){Ze(0),this.W=l,this.H=p||{},E&&I!==void 0&&(this.H.OSID=E,this.H.OAID=I),this.F=this.X,this.I=dd(this,null,this.W),_a(this)};function uc(l){if(sd(l),l.G==3){var p=l.U++,E=Ue(l.I);if(Ae(E,"SID",l.K),Ae(E,"RID",p),Ae(E,"TYPE","terminate"),_o(l,E),p=new ai(l,l.j,p),p.L=2,p.v=fa(Ue(E)),E=!1,a.navigator&&a.navigator.sendBeacon)try{E=a.navigator.sendBeacon(p.v.toString(),"")}catch{}!E&&a.Image&&(new Image().src=p.v,E=!0),E||(p.g=pd(p.j,null),p.g.ea(p.v)),p.F=Date.now(),xt(p)}fd(l)}function ga(l){l.g&&(fc(l),l.g.cancel(),l.g=null)}function sd(l){ga(l),l.u&&(a.clearTimeout(l.u),l.u=null),va(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function _a(l){if(!dn(l.h)&&!l.s){l.s=!0;var p=l.Ga;nt||Et(),Y||(nt(),Y=!0),yt.add(p,l),l.B=0}}function Nv(l,p){return fe(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=p.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Dn(d(l.Ga,l,p),hd(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const k=new ai(this,this.j,l);let $=this.o;if(this.S&&($?($=T($),_($,this.S)):$=this.S),this.m!==null||this.O||(k.H=$,$=null),this.P)t:{for(var p=0,E=0;E<this.i.length;E++){e:{var I=this.i[E];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break e}I=void 0}if(I===void 0)break;if(p+=I,4096<p){p=E;break t}if(p===4096||E===this.i.length-1){p=E+1;break t}}p=1e3}else p=1e3;p=ad(this,k,p),E=Ue(this.I),Ae(E,"RID",l),Ae(E,"CVER",22),this.D&&Ae(E,"X-HTTP-Session-Id",this.D),_o(this,E),$&&(this.O?p="headers="+encodeURIComponent(String(Zf($)))+"&"+p:this.m&&cc(E,this.m,$)),ke(this.h,k),this.Ua&&Ae(E,"TYPE","init"),this.P?(Ae(E,"$req",p),Ae(E,"SID","null"),k.T=!0,q(k,E,null)):q(k,E,p),this.G=2}}else this.G==3&&(l?od(this,l):this.i.length==0||dn(this.h)||od(this))};function od(l,p){var E;p?E=p.l:E=l.U++;const I=Ue(l.I);Ae(I,"SID",l.K),Ae(I,"RID",E),Ae(I,"AID",l.T),_o(l,I),l.m&&l.o&&cc(I,l.m,l.o),E=new ai(l,l.j,E,l.B+1),l.m===null&&(E.H=l.o),p&&(l.i=p.D.concat(l.i)),p=ad(l,E,1e3),E.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),ke(l.h,E),q(E,I,p)}function _o(l,p){l.H&&U(l.H,function(E,I){Ae(p,I,E)}),l.l&&ts({},function(E,I){Ae(p,I,E)})}function ad(l,p,E){E=Math.min(l.i.length,E);var I=l.l?d(l.l.Na,l.l,l):null;t:{var k=l.i;let $=-1;for(;;){const ut=["count="+E];$==-1?0<E?($=k[0].g,ut.push("ofs="+$)):$=0:ut.push("ofs="+$);let Te=!0;for(let sn=0;sn<E;sn++){let me=k[sn].g;const pn=k[sn].map;if(me-=$,0>me)$=Math.max(0,k[sn].g-100),Te=!1;else try{Iv(pn,ut,"req"+me+"_")}catch{I&&I(pn)}}if(Te){I=ut.join("&");break t}}}return l=l.i.splice(0,E),p.D=l,I}function ld(l){if(!l.g&&!l.u){l.Y=1;var p=l.Fa;nt||Et(),Y||(nt(),Y=!0),yt.add(p,l),l.v=0}}function hc(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Dn(d(l.Fa,l),hd(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,cd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Dn(d(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ze(10),ga(this),cd(this))};function fc(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function cd(l){l.g=new ai(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var p=Ue(l.qa);Ae(p,"RID","rpc"),Ae(p,"SID",l.K),Ae(p,"AID",l.T),Ae(p,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ae(p,"TO",l.ja),Ae(p,"TYPE","xmlhttp"),_o(l,p),l.m&&l.o&&cc(p,l.m,l.o),l.L&&(l.g.I=l.L);var E=l.g;l=l.ia,E.L=1,E.v=fa(Ue(p)),E.m=null,E.P=!0,B(E,l)}i.Za=function(){this.C!=null&&(this.C=null,ga(this),hc(this),Ze(19))};function va(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function ud(l,p){var E=null;if(l.g==p){va(l),fc(l),l.g=null;var I=2}else if(Ct(l.h,p))E=p.D,de(l.h,p),I=1;else return;if(l.G!=0){if(p.o)if(I==1){E=p.m?p.m.length:0,p=Date.now()-p.F;var k=l.B;I=$e(),at(I,new oo(I,E)),_a(l)}else ld(l);else if(k=p.s,k==3||k==0&&0<p.X||!(I==1&&Nv(l,p)||I==2&&hc(l)))switch(E&&0<E.length&&(p=l.h,p.i=p.i.concat(E)),k){case 1:Er(l,5);break;case 4:Er(l,10);break;case 3:Er(l,6);break;default:Er(l,2)}}}function hd(l,p){let E=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(E*=2),E*p}function Er(l,p){if(l.j.info("Error code "+p),p==2){var E=d(l.fb,l),I=l.Xa;const k=!I;I=new Kn(I||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Hi(I,"https"),fa(I),k?bv(I.toString(),E):Rv(I.toString(),E)}else Ze(2);l.G=0,l.l&&l.l.sa(p),fd(l),sd(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Ze(2)):(this.j.info("Failed to ping google.com"),Ze(1))};function fd(l){if(l.G=0,l.ka=[],l.l){const p=bn(l.h);(p.length!=0||l.i.length!=0)&&(g(l.ka,p),g(l.ka,l.i),l.h.i.length=0,M(l.i),l.i.length=0),l.l.ra()}}function dd(l,p,E){var I=E instanceof Kn?Ue(E):new Kn(E);if(I.g!="")p&&(I.g=p+"."+I.g),es(I,I.s);else{var k=a.location;I=k.protocol,p=p?p+"."+k.hostname:k.hostname,k=+k.port;var $=new Kn(null);I&&Hi($,I),p&&($.g=p),k&&es($,k),E&&($.l=E),I=$}return E=l.D,p=l.ya,E&&p&&Ae(I,E,p),Ae(I,"VER",l.la),_o(l,I),I}function pd(l,p,E){if(p&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Ca&&!l.pa?new Oe(new da({eb:E})):new Oe(l.pa),p.Ha(l.J),p}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function md(){}i=md.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function ya(){}ya.prototype.g=function(l,p){return new Ln(l,p)};function Ln(l,p){ft.call(this),this.g=new rd(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(l?l["X-WebChannel-Client-Profile"]=p.va:l={"X-WebChannel-Client-Profile":p.va}),this.g.S=l,(l=p&&p.Sb)&&!D(l)&&(this.g.m=l),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!D(p)&&(this.g.D=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new is(this)}S(Ln,ft),Ln.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ln.prototype.close=function(){uc(this.g)},Ln.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var E={};E.__data__=l,l=E}else this.u&&(E={},E.__data__=ne(l),l=E);p.i.push(new xe(p.Ya++,l)),p.G==3&&_a(p)},Ln.prototype.N=function(){this.g.l=null,delete this.j,uc(this.g),delete this.g,Ln.aa.N.call(this)};function gd(l){dt.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){t:{for(const E in p){l=E;break t}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}S(gd,dt);function _d(){pt.call(this),this.status=1}S(_d,pt);function is(l){this.g=l}S(is,md),is.prototype.ua=function(){at(this.g,"a")},is.prototype.ta=function(l){at(this.g,new gd(l))},is.prototype.sa=function(l){at(this.g,new _d)},is.prototype.ra=function(){at(this.g,"b")},ya.prototype.createWebChannel=ya.prototype.g,Ln.prototype.send=Ln.prototype.o,Ln.prototype.open=Ln.prototype.m,Ln.prototype.close=Ln.prototype.close,Tg=function(){return new ya},xg=function(){return $e()},Sg=$t,Ju={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},yr.NO_ERROR=0,yr.TIMEOUT=8,yr.HTTP_ERROR=6,rl=yr,ao.COMPLETE="complete",Eg=ao,K.EventType=et,et.OPEN="a",et.CLOSE="b",et.ERROR="c",et.MESSAGE="d",ft.prototype.listen=ft.prototype.K,Ro=K,Oe.prototype.listenOnce=Oe.prototype.L,Oe.prototype.getLastError=Oe.prototype.Ka,Oe.prototype.getLastErrorCode=Oe.prototype.Ba,Oe.prototype.getStatus=Oe.prototype.Z,Oe.prototype.getResponseJson=Oe.prototype.Oa,Oe.prototype.getResponseText=Oe.prototype.oa,Oe.prototype.send=Oe.prototype.ea,Oe.prototype.setWithCredentials=Oe.prototype.Ha,yg=Oe}).apply(typeof qa<"u"?qa:typeof self<"u"?self:typeof window<"u"?window:{});const Cp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}yn.UNAUTHENTICATED=new yn(null),yn.GOOGLE_CREDENTIALS=new yn("google-credentials-uid"),yn.FIRST_PARTY=new yn("first-party-uid"),yn.MOCK_USER=new yn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let no="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new fg("@firebase/firestore");function wo(){return qr.logLevel}function bt(i,...t){if(qr.logLevel<=pe.DEBUG){const e=t.map(Zh);qr.debug(`Firestore (${no}): ${i}`,...e)}}function Vi(i,...t){if(qr.logLevel<=pe.ERROR){const e=t.map(Zh);qr.error(`Firestore (${no}): ${i}`,...e)}}function qs(i,...t){if(qr.logLevel<=pe.WARN){const e=t.map(Zh);qr.warn(`Firestore (${no}): ${i}`,...e)}}function Zh(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(i="Unexpected state"){const t=`FIRESTORE (${no}) INTERNAL ASSERTION FAILED: `+i;throw Vi(t),new Error(t)}function ve(i,t){i||Ht()}function Xt(i,t){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class It extends eo{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class SA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(yn.UNAUTHENTICATED))}shutdown(){}}class xA{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class TA{constructor(t){this.t=t,this.currentUser=yn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){ve(this.o===void 0);let n=this.i;const r=c=>this.i!==n?(n=this.i,e(c)):Promise.resolve();let s=new ar;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ar,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=s;t.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{bt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(bt("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ar)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(bt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(ve(typeof n.accessToken=="string"),new Mg(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return ve(t===null||typeof t=="string"),new yn(t)}}class MA{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=yn.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class AA{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new MA(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(yn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wA{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bA{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){ve(this.o===void 0);const n=s=>{s.error!=null&&bt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,bt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>n(s))};const r=s=>{bt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?r(s):bt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(ve(typeof e.token=="string"),this.R=e.token,new wA(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RA(i){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(i);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<i;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=RA(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<e&&(n+=t.charAt(r[s]%t.length))}return n}}function ge(i,t){return i<t?-1:i>t?1:0}function Xs(i,t,e){return i.length===t.length&&i.every((n,r)=>e(n,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new It(st.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new It(st.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new It(st.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new It(st.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Ke.fromMillis(Date.now())}static fromDate(t){return Ke.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Ke(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ge(this.nanoseconds,t.nanoseconds):ge(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t){this.timestamp=t}static fromTimestamp(t){return new qt(t)}static min(){return new qt(new Ke(0,0))}static max(){return new qt(new Ke(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(t,e,n){e===void 0?e=0:e>t.length&&Ht(),n===void 0?n=t.length-e:n>t.length-e&&Ht(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return zo.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof zo?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.get(r),o=e.get(r);if(s<o)return-1;if(s>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Fe extends zo{construct(t,e,n){return new Fe(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new It(st.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(r=>r.length>0))}return new Fe(e)}static emptyPath(){return new Fe([])}}const CA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ln extends zo{construct(t,e,n){return new ln(t,e,n)}static isValidIdentifier(t){return CA.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ln.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ln(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const s=()=>{if(n.length===0)throw new It(st.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new It(st.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new It(st.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(n+=a,r++):(s(),r++)}if(s(),o)throw new It(st.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ln(e)}static emptyPath(){return new ln([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t){this.path=t}static fromPath(t){return new Nt(Fe.fromString(t))}static fromName(t){return new Nt(Fe.fromString(t).popFirst(5))}static empty(){return new Nt(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Fe.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Fe.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Nt(new Fe(t.slice()))}}function IA(i,t){const e=i.toTimestamp().seconds,n=i.toTimestamp().nanoseconds+1,r=qt.fromTimestamp(n===1e9?new Ke(e+1,0):new Ke(e,n));return new dr(r,Nt.empty(),t)}function PA(i){return new dr(i.readTime,i.key,-1)}class dr{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new dr(qt.min(),Nt.empty(),-1)}static max(){return new dr(qt.max(),Nt.empty(),-1)}}function DA(i,t){let e=i.readTime.compareTo(t.readTime);return e!==0?e:(e=Nt.comparator(i.documentKey,t.documentKey),e!==0?e:ge(i.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class NA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ea(i){if(i.code!==st.FAILED_PRECONDITION||i.message!==LA)throw i;bt("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Ht(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new it((n,r)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(n,r)},this.catchCallback=s=>{this.wrapFailure(e,s).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof it?e:it.resolve(e)}catch(e){return it.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):it.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):it.reject(e)}static resolve(t){return new it((e,n)=>{e(t)})}static reject(t){return new it((e,n)=>{n(t)})}static waitFor(t){return new it((e,n)=>{let r=0,s=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&e()},c=>n(c))}),o=!0,s===r&&e()})}static or(t){let e=it.resolve(!1);for(const n of t)e=e.next(r=>r?it.resolve(r):n());return e}static forEach(t,e){const n=[];return t.forEach((r,s)=>{n.push(e.call(this,r,s))}),this.waitFor(n)}static mapArray(t,e){return new it((n,r)=>{const s=t.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;e(t[u]).next(h=>{o[u]=h,++a,a===s&&n(o)},h=>r(h))}})}static doWhile(t,e){return new it((n,r)=>{const s=()=>{t()===!0?e().next(()=>{s()},r):n()};s()})}}function UA(i){const t=i.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function na(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ie(n),this.se=n=>e.writeSequenceNumber(n))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Jh.oe=-1;function Wl(i){return i==null}function Sl(i){return i===0&&1/i==-1/0}function OA(i){return typeof i=="number"&&Number.isInteger(i)&&!Sl(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(i){let t=0;for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&t++;return t}function Yr(i,t){for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&t(e,i[e])}function wg(i){for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(t,e){this.comparator=t,this.root=e||an.EMPTY}insert(t,e){return new Ne(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,an.BLACK,null,null))}remove(t){return new Ne(this.comparator,this.root.remove(t,this.comparator).copy(null,null,an.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Xa(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Xa(this.root,t,this.comparator,!1)}getReverseIterator(){return new Xa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Xa(this.root,t,this.comparator,!0)}}class Xa{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class an{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=n??an.RED,this.left=r??an.EMPTY,this.right=s??an.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new an(t??this.key,e??this.value,n??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const s=n(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):s===0?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return an.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),e(t,r.key)===0){if(r.right.isEmpty())return an.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,an.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,an.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ht();const t=this.left.check();if(t!==this.right.check())throw Ht();return t+(this.isRed()?0:1)}}an.EMPTY=null,an.RED=!0,an.BLACK=!1;an.EMPTY=new class{constructor(){this.size=0}get key(){throw Ht()}get value(){throw Ht()}get color(){throw Ht()}get left(){throw Ht()}get right(){throw Ht()}copy(t,e,n,r,s){return this}insert(t,e,n){return new an(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(t){this.comparator=t,this.data=new Ne(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Pp(this.data.getIterator())}getIteratorFrom(t){return new Pp(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof hn)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const r=e.getNext().key,s=n.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new hn(this.comparator);return e.data=t,e}}class Pp{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(t){this.fields=t,t.sort(ln.comparator)}static empty(){return new On([])}unionWith(t){let e=new hn(ln.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new On(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Xs(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new bg("Invalid base64 string: "+s):s}}(t);return new fn(e)}static fromUint8Array(t){const e=function(r){let s="";for(let o=0;o<r.length;++o)s+=String.fromCharCode(r[o]);return s}(t);return new fn(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ge(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}fn.EMPTY_BYTE_STRING=new fn("");const FA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pr(i){if(ve(!!i),typeof i=="string"){let t=0;const e=FA.exec(i);if(ve(!!e),e[1]){let r=e[1];r=(r+"000000000").substr(0,9),t=Number(r)}const n=new Date(i);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:ze(i.seconds),nanos:ze(i.nanos)}}function ze(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Xr(i){return typeof i=="string"?fn.fromBase64String(i):fn.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(i){var t,e;return((e=(((t=i?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function ef(i){const t=i.mapValue.fields.__previous_value__;return tf(t)?ef(t):t}function Ho(i){const t=pr(i.mapValue.fields.__local_write_time__.timestampValue);return new Ke(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(t,e,n,r,s,o,a,c,u){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class Go{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Go("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Go&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a={mapValue:{}};function $r(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?tf(i)?4:kA(i)?9007199254740991:BA(i)?10:11:Ht()}function yi(i,t){if(i===t)return!0;const e=$r(i);if(e!==$r(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===t.booleanValue;case 4:return Ho(i).isEqual(Ho(t));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const o=pr(r.timestampValue),a=pr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(i,t);case 5:return i.stringValue===t.stringValue;case 6:return function(r,s){return Xr(r.bytesValue).isEqual(Xr(s.bytesValue))}(i,t);case 7:return i.referenceValue===t.referenceValue;case 8:return function(r,s){return ze(r.geoPointValue.latitude)===ze(s.geoPointValue.latitude)&&ze(r.geoPointValue.longitude)===ze(s.geoPointValue.longitude)}(i,t);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return ze(r.integerValue)===ze(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const o=ze(r.doubleValue),a=ze(s.doubleValue);return o===a?Sl(o)===Sl(a):isNaN(o)&&isNaN(a)}return!1}(i,t);case 9:return Xs(i.arrayValue.values||[],t.arrayValue.values||[],yi);case 10:case 11:return function(r,s){const o=r.mapValue.fields||{},a=s.mapValue.fields||{};if(Ip(o)!==Ip(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!yi(o[c],a[c])))return!1;return!0}(i,t);default:return Ht()}}function Wo(i,t){return(i.values||[]).find(e=>yi(e,t))!==void 0}function $s(i,t){if(i===t)return 0;const e=$r(i),n=$r(t);if(e!==n)return ge(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return ge(i.booleanValue,t.booleanValue);case 2:return function(s,o){const a=ze(s.integerValue||s.doubleValue),c=ze(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(i,t);case 3:return Dp(i.timestampValue,t.timestampValue);case 4:return Dp(Ho(i),Ho(t));case 5:return ge(i.stringValue,t.stringValue);case 6:return function(s,o){const a=Xr(s),c=Xr(o);return a.compareTo(c)}(i.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const h=ge(a[u],c[u]);if(h!==0)return h}return ge(a.length,c.length)}(i.referenceValue,t.referenceValue);case 8:return function(s,o){const a=ge(ze(s.latitude),ze(o.latitude));return a!==0?a:ge(ze(s.longitude),ze(o.longitude))}(i.geoPointValue,t.geoPointValue);case 9:return Lp(i.arrayValue,t.arrayValue);case 10:return function(s,o){var a,c,u,h;const f=s.fields||{},d=o.fields||{},m=(a=f.value)===null||a===void 0?void 0:a.arrayValue,S=(c=d.value)===null||c===void 0?void 0:c.arrayValue,M=ge(((u=m?.values)===null||u===void 0?void 0:u.length)||0,((h=S?.values)===null||h===void 0?void 0:h.length)||0);return M!==0?M:Lp(m,S)}(i.mapValue,t.mapValue);case 11:return function(s,o){if(s===$a.mapValue&&o===$a.mapValue)return 0;if(s===$a.mapValue)return 1;if(o===$a.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let f=0;f<c.length&&f<h.length;++f){const d=ge(c[f],h[f]);if(d!==0)return d;const m=$s(a[c[f]],u[h[f]]);if(m!==0)return m}return ge(c.length,h.length)}(i.mapValue,t.mapValue);default:throw Ht()}}function Dp(i,t){if(typeof i=="string"&&typeof t=="string"&&i.length===t.length)return ge(i,t);const e=pr(i),n=pr(t),r=ge(e.seconds,n.seconds);return r!==0?r:ge(e.nanos,n.nanos)}function Lp(i,t){const e=i.values||[],n=t.values||[];for(let r=0;r<e.length&&r<n.length;++r){const s=$s(e[r],n[r]);if(s)return s}return ge(e.length,n.length)}function js(i){return th(i)}function th(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(e){const n=pr(e);return`time(${n.seconds},${n.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(e){return Xr(e).toBase64()}(i.bytesValue):"referenceValue"in i?function(e){return Nt.fromName(e).toString()}(i.referenceValue):"geoPointValue"in i?function(e){return`geo(${e.latitude},${e.longitude})`}(i.geoPointValue):"arrayValue"in i?function(e){let n="[",r=!0;for(const s of e.values||[])r?r=!1:n+=",",n+=th(s);return n+"]"}(i.arrayValue):"mapValue"in i?function(e){const n=Object.keys(e.fields||{}).sort();let r="{",s=!0;for(const o of n)s?s=!1:r+=",",r+=`${o}:${th(e.fields[o])}`;return r+"}"}(i.mapValue):Ht()}function eh(i){return!!i&&"integerValue"in i}function nf(i){return!!i&&"arrayValue"in i}function Np(i){return!!i&&"nullValue"in i}function Up(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function sl(i){return!!i&&"mapValue"in i}function BA(i){var t,e;return((e=(((t=i?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Do(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const t={mapValue:{fields:{}}};return Yr(i.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Do(n)),t}if(i.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(i.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Do(i.arrayValue.values[e]);return t}return Object.assign({},i)}function kA(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(t){this.value=t}static empty(){return new Cn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!sl(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Do(e)}setAll(t){let e=ln.emptyPath(),n={},r=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const c=this.getFieldsMap(e);this.applyChanges(c,n,r),n={},r=[],e=a.popLast()}o?n[a.lastSegment()]=Do(o):r.push(a.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,n,r)}delete(t){const e=this.field(t.popLast());sl(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return yi(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];sl(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){Yr(e,(r,s)=>t[r]=s);for(const r of n)delete t[r]}clone(){return new Cn(Do(this.value))}}function Rg(i){const t=[];return Yr(i.fields,(e,n)=>{const r=new ln([e]);if(sl(n)){const s=Rg(n.mapValue).fields;if(s.length===0)t.push(r);else for(const o of s)t.push(r.child(o))}else t.push(r)}),new On(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(t,e,n,r,s,o,a){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new En(t,0,qt.min(),qt.min(),qt.min(),Cn.empty(),0)}static newFoundDocument(t,e,n,r){return new En(t,1,e,qt.min(),n,r,0)}static newNoDocument(t,e){return new En(t,2,e,qt.min(),qt.min(),Cn.empty(),0)}static newUnknownDocument(t,e){return new En(t,3,e,qt.min(),qt.min(),Cn.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(qt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Cn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Cn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=qt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof En&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new En(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(t,e){this.position=t,this.inclusive=e}}function Op(i,t,e){let n=0;for(let r=0;r<i.position.length;r++){const s=t[r],o=i.position[r];if(s.field.isKeyField()?n=Nt.comparator(Nt.fromName(o.referenceValue),e.key):n=$s(o,e.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function Fp(i,t){if(i===null)return t===null;if(t===null||i.inclusive!==t.inclusive||i.position.length!==t.position.length)return!1;for(let e=0;e<i.position.length;e++)if(!yi(i.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(t,e="asc"){this.field=t,this.dir=e}}function zA(i,t){return i.dir===t.dir&&i.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{}class je extends Cg{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new GA(t,e,n):e==="array-contains"?new XA(t,n):e==="in"?new $A(t,n):e==="not-in"?new jA(t,n):e==="array-contains-any"?new KA(t,n):new je(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new WA(t,n):new qA(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison($s(e,this.value)):e!==null&&$r(this.value)===$r(e)&&this.matchesComparison($s(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Ht()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ei extends Cg{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Ei(t,e)}matches(t){return Ig(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ig(i){return i.op==="and"}function Pg(i){return HA(i)&&Ig(i)}function HA(i){for(const t of i.filters)if(t instanceof Ei)return!1;return!0}function nh(i){if(i instanceof je)return i.field.canonicalString()+i.op.toString()+js(i.value);if(Pg(i))return i.filters.map(t=>nh(t)).join(",");{const t=i.filters.map(e=>nh(e)).join(",");return`${i.op}(${t})`}}function Dg(i,t){return i instanceof je?function(n,r){return r instanceof je&&n.op===r.op&&n.field.isEqual(r.field)&&yi(n.value,r.value)}(i,t):i instanceof Ei?function(n,r){return r instanceof Ei&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((s,o,a)=>s&&Dg(o,r.filters[a]),!0):!1}(i,t):void Ht()}function Lg(i){return i instanceof je?function(e){return`${e.field.canonicalString()} ${e.op} ${js(e.value)}`}(i):i instanceof Ei?function(e){return e.op.toString()+" {"+e.getFilters().map(Lg).join(" ,")+"}"}(i):"Filter"}class GA extends je{constructor(t,e,n){super(t,e,n),this.key=Nt.fromName(n.referenceValue)}matches(t){const e=Nt.comparator(t.key,this.key);return this.matchesComparison(e)}}class WA extends je{constructor(t,e){super(t,"in",e),this.keys=Ng("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class qA extends je{constructor(t,e){super(t,"not-in",e),this.keys=Ng("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Ng(i,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>Nt.fromName(n.referenceValue))}class XA extends je{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return nf(e)&&Wo(e.arrayValue,this.value)}}class $A extends je{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Wo(this.value.arrayValue,e)}}class jA extends je{constructor(t,e){super(t,"not-in",e)}matches(t){if(Wo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Wo(this.value.arrayValue,e)}}class KA extends je{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!nf(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>Wo(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(t,e=null,n=[],r=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Vp(i,t=null,e=[],n=[],r=null,s=null,o=null){return new YA(i,t,e,n,r,s,o)}function rf(i){const t=Xt(i);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>nh(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(s){return s.field.canonicalString()+s.dir}(n)).join(","),Wl(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>js(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>js(n)).join(",")),t.ue=e}return t.ue}function sf(i,t){if(i.limit!==t.limit||i.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<i.orderBy.length;e++)if(!zA(i.orderBy[e],t.orderBy[e]))return!1;if(i.filters.length!==t.filters.length)return!1;for(let e=0;e<i.filters.length;e++)if(!Dg(i.filters[e],t.filters[e]))return!1;return i.collectionGroup===t.collectionGroup&&!!i.path.isEqual(t.path)&&!!Fp(i.startAt,t.startAt)&&Fp(i.endAt,t.endAt)}function ih(i){return Nt.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(t,e=null,n=[],r=[],s=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function QA(i,t,e,n,r,s,o,a){return new ql(i,t,e,n,r,s,o,a)}function Xl(i){return new ql(i)}function Bp(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function ZA(i){return i.collectionGroup!==null}function Lo(i){const t=Xt(i);if(t.ce===null){t.ce=[];const e=new Set;for(const s of t.explicitOrderBy)t.ce.push(s),e.add(s.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new hn(ln.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.ce.push(new Tl(s,n))}),e.has(ln.keyField().canonicalString())||t.ce.push(new Tl(ln.keyField(),n))}return t.ce}function gi(i){const t=Xt(i);return t.le||(t.le=JA(t,Lo(i))),t.le}function JA(i,t){if(i.limitType==="F")return Vp(i.path,i.collectionGroup,t,i.filters,i.limit,i.startAt,i.endAt);{t=t.map(r=>{const s=r.dir==="desc"?"asc":"desc";return new Tl(r.field,s)});const e=i.endAt?new xl(i.endAt.position,i.endAt.inclusive):null,n=i.startAt?new xl(i.startAt.position,i.startAt.inclusive):null;return Vp(i.path,i.collectionGroup,t,i.filters,i.limit,e,n)}}function rh(i,t,e){return new ql(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),t,e,i.startAt,i.endAt)}function $l(i,t){return sf(gi(i),gi(t))&&i.limitType===t.limitType}function Ug(i){return`${rf(gi(i))}|lt:${i.limitType}`}function Ms(i){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>Lg(r)).join(", ")}]`),Wl(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>js(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>js(r)).join(",")),`Target(${n})`}(gi(i))}; limitType=${i.limitType})`}function jl(i,t){return t.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):Nt.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(i,t)&&function(n,r){for(const s of Lo(n))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(i,t)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(i,t)&&function(n,r){return!(n.startAt&&!function(o,a,c){const u=Op(o,a,c);return o.inclusive?u<=0:u<0}(n.startAt,Lo(n),r)||n.endAt&&!function(o,a,c){const u=Op(o,a,c);return o.inclusive?u>=0:u>0}(n.endAt,Lo(n),r))}(i,t)}function tw(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function Og(i){return(t,e)=>{let n=!1;for(const r of Lo(i)){const s=ew(r,t,e);if(s!==0)return s;n=n||r.field.isKeyField()}return 0}}function ew(i,t,e){const n=i.field.isKeyField()?Nt.comparator(t.key,e.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?$s(c,u):Ht()}(i.field,t,e);switch(i.dir){case"asc":return n;case"desc":return-1*n;default:return Ht()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[r,s]of n)if(this.equalsFn(r,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return n.length===1?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Yr(this.inner,(e,n)=>{for(const[r,s]of n)t(r,s)})}isEmpty(){return wg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw=new Ne(Nt.comparator);function Bi(){return nw}const Fg=new Ne(Nt.comparator);function Co(...i){let t=Fg;for(const e of i)t=t.insert(e.key,e);return t}function Vg(i){let t=Fg;return i.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function Nr(){return No()}function Bg(){return No()}function No(){return new io(i=>i.toString(),(i,t)=>i.isEqual(t))}const iw=new Ne(Nt.comparator),rw=new hn(Nt.comparator);function re(...i){let t=rw;for(const e of i)t=t.add(e);return t}const sw=new hn(ge);function ow(){return sw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(i,t){if(i.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Sl(t)?"-0":t}}function kg(i){return{integerValue:""+i}}function aw(i,t){return OA(t)?kg(t):of(i,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(){this._=void 0}}function lw(i,t,e){return i instanceof Ml?function(r,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&tf(s)&&(s=ef(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(e,t):i instanceof qo?Hg(i,t):i instanceof Xo?Gg(i,t):function(r,s){const o=zg(r,s),a=kp(o)+kp(r.Pe);return eh(o)&&eh(r.Pe)?kg(a):of(r.serializer,a)}(i,t)}function cw(i,t,e){return i instanceof qo?Hg(i,t):i instanceof Xo?Gg(i,t):e}function zg(i,t){return i instanceof Al?function(n){return eh(n)||function(s){return!!s&&"doubleValue"in s}(n)}(t)?t:{integerValue:0}:null}class Ml extends Kl{}class qo extends Kl{constructor(t){super(),this.elements=t}}function Hg(i,t){const e=Wg(t);for(const n of i.elements)e.some(r=>yi(r,n))||e.push(n);return{arrayValue:{values:e}}}class Xo extends Kl{constructor(t){super(),this.elements=t}}function Gg(i,t){let e=Wg(t);for(const n of i.elements)e=e.filter(r=>!yi(r,n));return{arrayValue:{values:e}}}class Al extends Kl{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function kp(i){return ze(i.integerValue||i.doubleValue)}function Wg(i){return nf(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function uw(i,t){return i.field.isEqual(t.field)&&function(n,r){return n instanceof qo&&r instanceof qo||n instanceof Xo&&r instanceof Xo?Xs(n.elements,r.elements,yi):n instanceof Al&&r instanceof Al?yi(n.Pe,r.Pe):n instanceof Ml&&r instanceof Ml}(i.transform,t.transform)}class hw{constructor(t,e){this.version=t,this.transformResults=e}}class si{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new si}static exists(t){return new si(void 0,t)}static updateTime(t){return new si(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ol(i,t){return i.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(i.updateTime):i.exists===void 0||i.exists===t.isFoundDocument()}class Yl{}function qg(i,t){if(!i.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return i.isNoDocument()?new af(i.key,si.none()):new ia(i.key,i.data,si.none());{const e=i.data,n=Cn.empty();let r=new hn(ln.comparator);for(let s of t.fields)if(!r.has(s)){let o=e.field(s);o===null&&s.length>1&&(s=s.popLast(),o=e.field(s)),o===null?n.delete(s):n.set(s,o),r=r.add(s)}return new vr(i.key,n,new On(r.toArray()),si.none())}}function fw(i,t,e){i instanceof ia?function(r,s,o){const a=r.value.clone(),c=Hp(r.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(i,t,e):i instanceof vr?function(r,s,o){if(!ol(r.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Hp(r.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(Xg(r)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(i,t,e):function(r,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function Uo(i,t,e,n){return i instanceof ia?function(s,o,a,c){if(!ol(s.precondition,o))return a;const u=s.value.clone(),h=Gp(s.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(i,t,e,n):i instanceof vr?function(s,o,a,c){if(!ol(s.precondition,o))return a;const u=Gp(s.fieldTransforms,c,o),h=o.data;return h.setAll(Xg(s)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(i,t,e,n):function(s,o,a){return ol(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(i,t,e)}function dw(i,t){let e=null;for(const n of i.fieldTransforms){const r=t.data.field(n.field),s=zg(n.transform,r||null);s!=null&&(e===null&&(e=Cn.empty()),e.set(n.field,s))}return e||null}function zp(i,t){return i.type===t.type&&!!i.key.isEqual(t.key)&&!!i.precondition.isEqual(t.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Xs(n,r,(s,o)=>uw(s,o))}(i.fieldTransforms,t.fieldTransforms)&&(i.type===0?i.value.isEqual(t.value):i.type!==1||i.data.isEqual(t.data)&&i.fieldMask.isEqual(t.fieldMask))}class ia extends Yl{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class vr extends Yl{constructor(t,e,n,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Xg(i){const t=new Map;return i.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=i.data.field(e);t.set(e,n)}}),t}function Hp(i,t,e){const n=new Map;ve(i.length===e.length);for(let r=0;r<e.length;r++){const s=i[r],o=s.transform,a=t.data.field(s.field);n.set(s.field,cw(o,a,e[r]))}return n}function Gp(i,t,e){const n=new Map;for(const r of i){const s=r.transform,o=e.data.field(r.field);n.set(r.field,lw(s,o,t))}return n}class af extends Yl{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pw extends Yl{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(t.key)&&fw(s,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Uo(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Uo(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Bg();return this.mutations.forEach(r=>{const s=t.get(r.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=e.has(r.key)?null:a;const c=qg(o,a);c!==null&&n.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(qt.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),re())}isEqual(t){return this.batchId===t.batchId&&Xs(this.mutations,t.mutations,(e,n)=>zp(e,n))&&Xs(this.baseMutations,t.baseMutations,(e,n)=>zp(e,n))}}class lf{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){ve(t.mutations.length===n.length);let r=function(){return iw}();const s=t.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,n[o].version);return new lf(t,e,n,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We,ce;function vw(i){switch(i){default:return Ht();case st.CANCELLED:case st.UNKNOWN:case st.DEADLINE_EXCEEDED:case st.RESOURCE_EXHAUSTED:case st.INTERNAL:case st.UNAVAILABLE:case st.UNAUTHENTICATED:return!1;case st.INVALID_ARGUMENT:case st.NOT_FOUND:case st.ALREADY_EXISTS:case st.PERMISSION_DENIED:case st.FAILED_PRECONDITION:case st.ABORTED:case st.OUT_OF_RANGE:case st.UNIMPLEMENTED:case st.DATA_LOSS:return!0}}function $g(i){if(i===void 0)return Vi("GRPC error has no .code"),st.UNKNOWN;switch(i){case We.OK:return st.OK;case We.CANCELLED:return st.CANCELLED;case We.UNKNOWN:return st.UNKNOWN;case We.DEADLINE_EXCEEDED:return st.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return st.RESOURCE_EXHAUSTED;case We.INTERNAL:return st.INTERNAL;case We.UNAVAILABLE:return st.UNAVAILABLE;case We.UNAUTHENTICATED:return st.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return st.INVALID_ARGUMENT;case We.NOT_FOUND:return st.NOT_FOUND;case We.ALREADY_EXISTS:return st.ALREADY_EXISTS;case We.PERMISSION_DENIED:return st.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return st.FAILED_PRECONDITION;case We.ABORTED:return st.ABORTED;case We.OUT_OF_RANGE:return st.OUT_OF_RANGE;case We.UNIMPLEMENTED:return st.UNIMPLEMENTED;case We.DATA_LOSS:return st.DATA_LOSS;default:return Ht()}}(ce=We||(We={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew=new Or([4294967295,4294967295],0);function Wp(i){const t=yw().encode(i),e=new vg;return e.update(t),new Uint8Array(e.digest())}function qp(i){const t=new DataView(i.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),r=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Or([e,n],0),new Or([r,s],0)]}class cf{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Io(`Invalid padding: ${e}`);if(n<0)throw new Io(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new Io(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new Io(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Or.fromNumber(this.Ie)}Ee(t,e,n){let r=t.add(e.multiply(Or.fromNumber(n)));return r.compare(Ew)===1&&(r=new Or([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Wp(t),[n,r]=qp(e);for(let s=0;s<this.hashCount;s++){const o=this.Ee(n,r,s);if(!this.de(o))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new cf(s,r,e);return n.forEach(a=>o.insert(a)),o}insert(t){if(this.Ie===0)return;const e=Wp(t),[n,r]=qp(e);for(let s=0;s<this.hashCount;s++){const o=this.Ee(n,r,s);this.Ae(o)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Io extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(t,e,n,r,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,ra.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Ql(qt.min(),r,new Ne(ge),Bi(),re())}}class ra{constructor(t,e,n,r,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new ra(n,e,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(t,e,n,r){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=r}}class jg{constructor(t,e){this.targetId=t,this.me=e}}class Kg{constructor(t,e,n=fn.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Xp{constructor(){this.fe=0,this.ge=jp(),this.pe=fn.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=re(),e=re(),n=re();return this.ge.forEach((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:Ht()}}),new ra(this.pe,this.ye,t,e,n)}Ce(){this.we=!1,this.ge=jp()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,ve(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Sw{constructor(t){this.Le=t,this.Be=new Map,this.ke=Bi(),this.qe=$p(),this.Qe=new Ne(ge)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const n=this.Ge(e);switch(t.state){case 0:this.ze(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),n.De(t.resumeToken));break;default:Ht()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((n,r)=>{this.ze(r)&&e(r)})}He(t){const e=t.targetId,n=t.me.count,r=this.Je(e);if(r){const s=r.target;if(ih(s))if(n===0){const o=new Nt(s.path);this.Ue(e,o,En.newNoDocument(o,qt.min()))}else ve(n===1);else{const o=this.Ye(e);if(o!==n){const a=this.Ze(t),c=a?this.Xe(a,t,o):1;if(c!==0){this.je(e);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,u)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:s=0}=e;let o,a;try{o=Xr(n).toUint8Array()}catch(c){if(c instanceof bg)return qs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new cf(o,r,s)}catch(c){return qs(c instanceof Io?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ie===0?null:a}Xe(t,e,n){return e.me.count===n-this.nt(t,e.targetId)?0:2}nt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let r=0;return n.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.Ue(e,s,null),r++)}),r}rt(t){const e=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&ih(a.target)){const c=new Nt(a.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,En.newNoDocument(c,t))}s.be&&(e.set(o,s.ve()),s.Ce())}});let n=re();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Je(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(n=n.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(t));const r=new Ql(t,e,this.Qe,this.ke,n);return this.ke=Bi(),this.qe=$p(),this.Qe=new Ne(ge),r}$e(t,e){if(!this.ze(t))return;const n=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,n){if(!this.ze(t))return;const r=this.Ge(t);this.it(t,e)?r.Fe(e,1):r.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Xp,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new hn(ge),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||bt("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Xp),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function $p(){return new Ne(Nt.comparator)}function jp(){return new Ne(Nt.comparator)}const xw={asc:"ASCENDING",desc:"DESCENDING"},Tw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Mw={and:"AND",or:"OR"};class Aw{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function sh(i,t){return i.useProto3Json||Wl(t)?t:{value:t}}function wl(i,t){return i.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Yg(i,t){return i.useProto3Json?t.toBase64():t.toUint8Array()}function ww(i,t){return wl(i,t.toTimestamp())}function _i(i){return ve(!!i),qt.fromTimestamp(function(e){const n=pr(e);return new Ke(n.seconds,n.nanos)}(i))}function uf(i,t){return oh(i,t).canonicalString()}function oh(i,t){const e=function(r){return new Fe(["projects",r.projectId,"databases",r.database])}(i).child("documents");return t===void 0?e:e.child(t)}function Qg(i){const t=Fe.fromString(i);return ve(n_(t)),t}function ah(i,t){return uf(i.databaseId,t.path)}function Zc(i,t){const e=Qg(t);if(e.get(1)!==i.databaseId.projectId)throw new It(st.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+i.databaseId.projectId);if(e.get(3)!==i.databaseId.database)throw new It(st.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+i.databaseId.database);return new Nt(Jg(e))}function Zg(i,t){return uf(i.databaseId,t)}function bw(i){const t=Qg(i);return t.length===4?Fe.emptyPath():Jg(t)}function lh(i){return new Fe(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function Jg(i){return ve(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function Kp(i,t,e){return{name:ah(i,t),fields:e.value.mapValue.fields}}function Rw(i,t){let e;if("targetChange"in t){t.targetChange;const n=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Ht()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],s=function(u,h){return u.useProto3Json?(ve(h===void 0||typeof h=="string"),fn.fromBase64String(h||"")):(ve(h===void 0||h instanceof Buffer||h instanceof Uint8Array),fn.fromUint8Array(h||new Uint8Array))}(i,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const h=u.code===void 0?st.UNKNOWN:$g(u.code);return new It(h,u.message||"")}(o);e=new Kg(n,r,s,a||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const r=Zc(i,n.document.name),s=_i(n.document.updateTime),o=n.document.createTime?_i(n.document.createTime):qt.min(),a=new Cn({mapValue:{fields:n.document.fields}}),c=En.newFoundDocument(r,s,o,a),u=n.targetIds||[],h=n.removedTargetIds||[];e=new al(u,h,c.key,c)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const r=Zc(i,n.document),s=n.readTime?_i(n.readTime):qt.min(),o=En.newNoDocument(r,s),a=n.removedTargetIds||[];e=new al([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const r=Zc(i,n.document),s=n.removedTargetIds||[];e=new al([],s,r,null)}else{if(!("filter"in t))return Ht();{t.filter;const n=t.filter;n.targetId;const{count:r=0,unchangedNames:s}=n,o=new _w(r,s),a=n.targetId;e=new jg(a,o)}}return e}function Cw(i,t){let e;if(t instanceof ia)e={update:Kp(i,t.key,t.value)};else if(t instanceof af)e={delete:ah(i,t.key)};else if(t instanceof vr)e={update:Kp(i,t.key,t.data),updateMask:Vw(t.fieldMask)};else{if(!(t instanceof pw))return Ht();e={verify:ah(i,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(s,o){const a=o.transform;if(a instanceof Ml)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof qo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Xo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Al)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Ht()}(0,n))),t.precondition.isNone||(e.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:ww(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Ht()}(i,t.precondition)),e}function Iw(i,t){return i&&i.length>0?(ve(t!==void 0),i.map(e=>function(r,s){let o=r.updateTime?_i(r.updateTime):_i(s);return o.isEqual(qt.min())&&(o=_i(s)),new hw(o,r.transformResults||[])}(e,t))):[]}function Pw(i,t){return{documents:[Zg(i,t.path)]}}function Dw(i,t){const e={structuredQuery:{}},n=t.path;let r;t.collectionGroup!==null?(r=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(r=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Zg(i,r);const s=function(u){if(u.length!==0)return e_(Ei.create(u,"and"))}(t.filters);s&&(e.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(h=>function(d){return{field:As(d.field),direction:Uw(d.dir)}}(h))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=sh(i,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),{_t:e,parent:r}}function Lw(i){let t=bw(i.parent);const e=i.structuredQuery,n=e.from?e.from.length:0;let r=null;if(n>0){ve(n===1);const h=e.from[0];h.allDescendants?r=h.collectionId:t=t.child(h.collectionId)}let s=[];e.where&&(s=function(f){const d=t_(f);return d instanceof Ei&&Pg(d)?d.getFilters():[d]}(e.where));let o=[];e.orderBy&&(o=function(f){return f.map(d=>function(S){return new Tl(ws(S.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(d))}(e.orderBy));let a=null;e.limit&&(a=function(f){let d;return d=typeof f=="object"?f.value:f,Wl(d)?null:d}(e.limit));let c=null;e.startAt&&(c=function(f){const d=!!f.before,m=f.values||[];return new xl(m,d)}(e.startAt));let u=null;return e.endAt&&(u=function(f){const d=!f.before,m=f.values||[];return new xl(m,d)}(e.endAt)),QA(t,r,o,s,a,"F",c,u)}function Nw(i,t){const e=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ht()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function t_(i){return i.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ws(e.unaryFilter.field);return je.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=ws(e.unaryFilter.field);return je.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ws(e.unaryFilter.field);return je.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ws(e.unaryFilter.field);return je.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Ht()}}(i):i.fieldFilter!==void 0?function(e){return je.create(ws(e.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ht()}}(e.fieldFilter.op),e.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(e){return Ei.create(e.compositeFilter.filters.map(n=>t_(n)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return Ht()}}(e.compositeFilter.op))}(i):Ht()}function Uw(i){return xw[i]}function Ow(i){return Tw[i]}function Fw(i){return Mw[i]}function As(i){return{fieldPath:i.canonicalString()}}function ws(i){return ln.fromServerFormat(i.fieldPath)}function e_(i){return i instanceof je?function(e){if(e.op==="=="){if(Up(e.value))return{unaryFilter:{field:As(e.field),op:"IS_NAN"}};if(Np(e.value))return{unaryFilter:{field:As(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Up(e.value))return{unaryFilter:{field:As(e.field),op:"IS_NOT_NAN"}};if(Np(e.value))return{unaryFilter:{field:As(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:As(e.field),op:Ow(e.op),value:e.value}}}(i):i instanceof Ei?function(e){const n=e.getFilters().map(r=>e_(r));return n.length===1?n[0]:{compositeFilter:{op:Fw(e.op),filters:n}}}(i):Ht()}function Vw(i){const t=[];return i.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function n_(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t,e,n,r,s=qt.min(),o=qt.min(),a=fn.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new tr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(t){this.ct=t}}function kw(i){const t=Lw({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?rh(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(){this.un=new Hw}addToCollectionParentIndex(t,e){return this.un.add(e),it.resolve()}getCollectionParents(t,e){return it.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return it.resolve()}deleteFieldIndex(t,e){return it.resolve()}deleteAllFieldIndexes(t){return it.resolve()}createTargetIndexes(t,e){return it.resolve()}getDocumentsMatchingTarget(t,e){return it.resolve(null)}getIndexType(t,e){return it.resolve(0)}getFieldIndexes(t,e){return it.resolve([])}getNextCollectionGroupToUpdate(t){return it.resolve(null)}getMinOffset(t,e){return it.resolve(dr.min())}getMinOffsetFromCollectionGroup(t,e){return it.resolve(dr.min())}updateCollectionGroup(t,e,n){return it.resolve()}updateIndexEntries(t,e){return it.resolve()}}class Hw{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new hn(Fe.comparator),s=!r.has(n);return this.index[e]=r.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new hn(Fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ks(0)}static kn(){return new Ks(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(){this.changes=new io(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,En.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?it.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(n=r,this.remoteDocumentCache.getEntry(t,e))).next(r=>(n!==null&&Uo(n.mutation,r,On.empty(),Ke.now()),r))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,re()).next(()=>n))}getLocalViewOfDocuments(t,e,n=re()){const r=Nr();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,n).next(s=>{let o=Co();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const n=Nr();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,re()))}populateOverlays(t,e,n){const r=[];return n.forEach(s=>{e.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(t,r).next(s=>{s.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,n,r){let s=Bi();const o=No(),a=function(){return No()}();return e.forEach((c,u)=>{const h=n.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof vr)?s=s.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Uo(h.mutation,u,h.mutation.getFieldMask(),Ke.now())):o.set(u.key,On.empty())}),this.recalculateAndSaveOverlays(t,s).next(c=>(c.forEach((u,h)=>o.set(u,h)),e.forEach((u,h)=>{var f;return a.set(u,new Ww(h,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(t,e){const n=No();let r=new Ne((o,a)=>o-a),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=e.get(c);if(u===null)return;let h=n.get(c)||On.empty();h=a.applyToLocalView(u,h),n.set(c,h);const f=(r.get(a.batchId)||re()).add(c);r=r.insert(a.batchId,f)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,f=Bg();h.forEach(d=>{if(!s.has(d)){const m=qg(e.get(d),n.get(d));m!==null&&f.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,f))}return it.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,r){return function(o){return Nt.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ZA(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-s.size):it.resolve(Nr());let a=-1,c=s;return o.next(u=>it.forEach(u,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?it.resolve():this.remoteDocumentCache.getEntry(t,h).next(d=>{c=c.insert(h,d)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,c,u,re())).next(h=>({batchId:a,changes:Vg(h)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Nt(e)).next(n=>{let r=Co();return n.isFoundDocument()&&(r=r.insert(n.key,n)),r})}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const s=e.collectionGroup;let o=Co();return this.indexManager.getCollectionParents(t,s).next(a=>it.forEach(a,c=>{const u=function(f,d){return new ql(d,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(e,c.child(s));return this.getDocumentsMatchingCollectionQuery(t,u,n,r).next(h=>{h.forEach((f,d)=>{o=o.insert(f,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,s,r))).next(o=>{s.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,En.newInvalidDocument(h)))});let a=Co();return o.forEach((c,u)=>{const h=s.get(c);h!==void 0&&Uo(h.mutation,u,On.empty(),Ke.now()),jl(e,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return it.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(r){return{id:r.id,version:r.version,createTime:_i(r.createTime)}}(e)),it.resolve()}getNamedQuery(t,e){return it.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(r){return{name:r.name,query:kw(r.bundledQuery),readTime:_i(r.readTime)}}(e)),it.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(){this.overlays=new Ne(Nt.comparator),this.Ir=new Map}getOverlay(t,e){return it.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Nr();return it.forEach(e,r=>this.getOverlay(t,r).next(s=>{s!==null&&n.set(r,s)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((r,s)=>{this.ht(t,e,s)}),it.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Ir.get(n);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(n)),it.resolve()}getOverlaysForCollection(t,e,n){const r=Nr(),s=e.length+1,o=new Nt(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!e.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>n&&r.set(c.getKey(),c)}return it.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let s=new Ne((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===e&&u.largestBatchId>n){let h=s.get(u.largestBatchId);h===null&&(h=Nr(),s=s.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Nr(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=r)););return it.resolve(a)}ht(t,e,n){const r=this.overlays.get(n.key);if(r!==null){const o=this.Ir.get(r.largestBatchId).delete(n.key);this.Ir.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new gw(e,n));let s=this.Ir.get(e);s===void 0&&(s=re(),this.Ir.set(e,s)),this.Ir.set(e,s.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(){this.sessionToken=fn.EMPTY_BYTE_STRING}getSessionToken(t){return it.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,it.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(){this.Tr=new hn(tn.Er),this.dr=new hn(tn.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const n=new tn(t,e);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Vr(new tn(t,e))}mr(t,e){t.forEach(n=>this.removeReference(n,e))}gr(t){const e=new Nt(new Fe([])),n=new tn(e,t),r=new tn(e,t+1),s=[];return this.dr.forEachInRange([n,r],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new Nt(new Fe([])),n=new tn(e,t),r=new tn(e,t+1);let s=re();return this.dr.forEachInRange([n,r],o=>{s=s.add(o.key)}),s}containsKey(t){const e=new tn(t,0),n=this.Tr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class tn{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return Nt.comparator(t.key,e.key)||ge(t.wr,e.wr)}static Ar(t,e){return ge(t.wr,e.wr)||Nt.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new hn(tn.Er)}checkEmpty(t){return it.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,r){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new mw(s,e,n,r);this.mutationQueue.push(o);for(const a of r)this.br=this.br.add(new tn(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return it.resolve(o)}lookupMutationBatch(t,e){return it.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.vr(n),s=r<0?0:r;return it.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return it.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return it.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new tn(e,0),r=new tn(e,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([n,r],o=>{const a=this.Dr(o.wr);s.push(a)}),it.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new hn(ge);return e.forEach(r=>{const s=new tn(r,0),o=new tn(r,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{n=n.add(a.wr)})}),it.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let s=n;Nt.isDocumentKey(s)||(s=s.child(""));const o=new tn(new Nt(s),0);let a=new hn(ge);return this.br.forEachWhile(c=>{const u=c.key.path;return!!n.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.wr)),!0)},o),it.resolve(this.Cr(a))}Cr(t){const e=[];return t.forEach(n=>{const r=this.Dr(n);r!==null&&e.push(r)}),e}removeMutationBatch(t,e){ve(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return it.forEach(e.mutations,r=>{const s=new tn(r.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.br=n})}On(t){}containsKey(t,e){const n=new tn(e,0),r=this.br.firstAfterOrEqual(n);return it.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,it.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(t){this.Mr=t,this.docs=function(){return new Ne(Nt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),s=r?r.size:0,o=this.Mr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return it.resolve(n?n.document.mutableCopy():En.newInvalidDocument(e))}getEntries(t,e){let n=Bi();return e.forEach(r=>{const s=this.docs.get(r);n=n.insert(r,s?s.document.mutableCopy():En.newInvalidDocument(r))}),it.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let s=Bi();const o=e.path,a=new Nt(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||DA(PA(h),n)<=0||(r.has(h.key)||jl(e,h))&&(s=s.insert(h.key,h.mutableCopy()))}return it.resolve(s)}getAllFromCollectionGroup(t,e,n,r){Ht()}Or(t,e){return it.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new Qw(this)}getSize(t){return it.resolve(this.size)}}class Qw extends Gw{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?e.push(this.cr.addEntry(t,r)):this.cr.removeEntry(n)}),it.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(t){this.persistence=t,this.Nr=new io(e=>rf(e),sf),this.lastRemoteSnapshotVersion=qt.min(),this.highestTargetId=0,this.Lr=0,this.Br=new hf,this.targetCount=0,this.kr=Ks.Bn()}forEachTarget(t,e){return this.Nr.forEach((n,r)=>e(r)),it.resolve()}getLastRemoteSnapshotVersion(t){return it.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return it.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),it.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Lr&&(this.Lr=e),it.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new Ks(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,it.resolve()}updateTargetData(t,e){return this.Kn(e),it.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,it.resolve()}removeTargets(t,e,n){let r=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=e&&n.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),it.waitFor(s).next(()=>r)}getTargetCount(t){return it.resolve(this.targetCount)}getTargetData(t,e){const n=this.Nr.get(e)||null;return it.resolve(n)}addMatchingKeys(t,e,n){return this.Br.Rr(e,n),it.resolve()}removeMatchingKeys(t,e,n){this.Br.mr(e,n);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach(o=>{s.push(r.markPotentiallyOrphaned(t,o))}),it.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),it.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Br.yr(e);return it.resolve(n)}containsKey(t,e){return it.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Jh(0),this.Kr=!1,this.Kr=!0,this.$r=new jw,this.referenceDelegate=t(this),this.Ur=new Zw(this),this.indexManager=new zw,this.remoteDocumentCache=function(r){return new Yw(r)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new Bw(e),this.Gr=new Xw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new $w,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.qr[t.toKey()];return n||(n=new Kw(e,this.referenceDelegate),this.qr[t.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,n){bt("MemoryPersistence","Starting transaction:",t);const r=new tb(this.Qr.next());return this.referenceDelegate.zr(),n(r).next(s=>this.referenceDelegate.jr(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Hr(t,e){return it.or(Object.values(this.qr).map(n=>()=>n.containsKey(t,e)))}}class tb extends NA{constructor(t){super(),this.currentSequenceNumber=t}}class ff{constructor(t){this.persistence=t,this.Jr=new hf,this.Yr=null}static Zr(t){return new ff(t)}get Xr(){if(this.Yr)return this.Yr;throw Ht()}addReference(t,e,n){return this.Jr.addReference(n,e),this.Xr.delete(n.toString()),it.resolve()}removeReference(t,e,n){return this.Jr.removeReference(n,e),this.Xr.add(n.toString()),it.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),it.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(r=>this.Xr.add(r.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(r=>{r.forEach(s=>this.Xr.add(s.toString()))}).next(()=>n.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return it.forEach(this.Xr,n=>{const r=Nt.fromPath(n);return this.ei(t,r).next(s=>{s||e.removeEntry(r,qt.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(n=>{n?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return it.or([()=>it.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.$i=n,this.Ui=r}static Wi(t,e){let n=re(),r=re();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new df(t,e.fromCache,n,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return sM()?8:UA(iM())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,n,r){const s={result:null};return this.Yi(t,e).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(t,e,r,n).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new eb;return this.Xi(t,e,o).next(a=>{if(s.result=a,this.zi)return this.es(t,e,o,a.size)})}).next(()=>s.result)}es(t,e,n,r){return n.documentReadCount<this.ji?(wo()<=pe.DEBUG&&bt("QueryEngine","SDK will not create cache indexes for query:",Ms(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),it.resolve()):(wo()<=pe.DEBUG&&bt("QueryEngine","Query:",Ms(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Hi*r?(wo()<=pe.DEBUG&&bt("QueryEngine","The SDK decides to create cache indexes for query:",Ms(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,gi(e))):it.resolve())}Yi(t,e){if(Bp(e))return it.resolve(null);let n=gi(e);return this.indexManager.getIndexType(t,n).next(r=>r===0?null:(e.limit!==null&&r===1&&(e=rh(e,null,"F"),n=gi(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(s=>{const o=re(...s);return this.Ji.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,n).next(c=>{const u=this.ts(e,a);return this.ns(e,u,o,c.readTime)?this.Yi(t,rh(e,null,"F")):this.rs(t,u,e,c)}))})))}Zi(t,e,n,r){return Bp(e)||r.isEqual(qt.min())?it.resolve(null):this.Ji.getDocuments(t,n).next(s=>{const o=this.ts(e,s);return this.ns(e,o,n,r)?it.resolve(null):(wo()<=pe.DEBUG&&bt("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ms(e)),this.rs(t,o,e,IA(r,-1)).next(a=>a))})}ts(t,e){let n=new hn(Og(t));return e.forEach((r,s)=>{jl(t,s)&&(n=n.add(s))}),n}ns(t,e,n,r){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Xi(t,e,n){return wo()<=pe.DEBUG&&bt("QueryEngine","Using full collection scan to execute query:",Ms(e)),this.Ji.getDocumentsMatchingQuery(t,e,dr.min(),n)}rs(t,e,n,r){return this.Ji.getDocumentsMatchingQuery(t,n,r).next(s=>(e.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(t,e,n,r){this.persistence=t,this.ss=e,this.serializer=r,this.os=new Ne(ge),this._s=new io(s=>rf(s),sf),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(n)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new qw(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function rb(i,t,e,n){return new ib(i,t,e,n)}async function i_(i,t){const e=Xt(i);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(s=>(r=s,e.ls(t),e.mutationQueue.getAllMutationBatches(n))).next(s=>{const o=[],a=[];let c=re();for(const u of r){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of s){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return e.localDocuments.getDocuments(n,c).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:a}))})})}function sb(i,t){const e=Xt(i);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const r=t.batch.keys(),s=e.cs.newChangeBuffer({trackRemovals:!0});return function(a,c,u,h){const f=u.batch,d=f.keys();let m=it.resolve();return d.forEach(S=>{m=m.next(()=>h.getEntry(c,S)).next(M=>{const g=u.docVersions.get(S);ve(g!==null),M.version.compareTo(g)<0&&(f.applyToRemoteDocument(M,u),M.isValidDocument()&&(M.setReadTime(u.commitVersion),h.addEntry(M)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,f))}(e,n,t,s).next(()=>s.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,r,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(a){let c=re();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(t))).next(()=>e.localDocuments.getDocuments(n,r))})}function r_(i){const t=Xt(i);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function ob(i,t){const e=Xt(i),n=t.snapshotVersion;let r=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=e.cs.newChangeBuffer({trackRemovals:!0});r=e.os;const a=[];t.targetChanges.forEach((h,f)=>{const d=r.get(f);if(!d)return;a.push(e.Ur.removeMatchingKeys(s,h.removedDocuments,f).next(()=>e.Ur.addMatchingKeys(s,h.addedDocuments,f)));let m=d.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(f)!==null?m=m.withResumeToken(fn.EMPTY_BYTE_STRING,qt.min()).withLastLimboFreeSnapshotVersion(qt.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,n)),r=r.insert(f,m),function(M,g,v){return M.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(d,m,h)&&a.push(e.Ur.updateTargetData(s,m))});let c=Bi(),u=re();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(ab(s,o,t.documentUpdates).next(h=>{c=h.Ps,u=h.Is})),!n.isEqual(qt.min())){const h=e.Ur.getLastRemoteSnapshotVersion(s).next(f=>e.Ur.setTargetsMetadata(s,s.currentSequenceNumber,n));a.push(h)}return it.waitFor(a).next(()=>o.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(e.os=r,s))}function ab(i,t,e){let n=re(),r=re();return e.forEach(s=>n=n.add(s)),t.getEntries(i,n).next(s=>{let o=Bi();return e.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(qt.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):bt("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Ps:o,Is:r}})}function lb(i,t){const e=Xt(i);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function cb(i,t){const e=Xt(i);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let r;return e.Ur.getTargetData(n,t).next(s=>s?(r=s,it.resolve(r)):e.Ur.allocateTargetId(n).next(o=>(r=new tr(t,o,"TargetPurposeListen",n.currentSequenceNumber),e.Ur.addTargetData(n,r).next(()=>r))))}).then(n=>{const r=e.os.get(n.targetId);return(r===null||n.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(e.os=e.os.insert(n.targetId,n),e._s.set(t,n.targetId)),n})}async function ch(i,t,e){const n=Xt(i),r=n.os.get(t),s=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",s,o=>n.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!na(o))throw o;bt("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}n.os=n.os.remove(t),n._s.delete(r.target)}function Yp(i,t,e){const n=Xt(i);let r=qt.min(),s=re();return n.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const f=Xt(c),d=f._s.get(h);return d!==void 0?it.resolve(f.os.get(d)):f.Ur.getTargetData(u,h)}(n,o,gi(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>n.ss.getDocumentsMatchingQuery(o,t,e?r:qt.min(),e?s:re())).next(a=>(ub(n,tw(t),a),{documents:a,Ts:s})))}function ub(i,t,e){let n=i.us.get(t)||qt.min();e.forEach((r,s)=>{s.readTime.compareTo(n)>0&&(n=s.readTime)}),i.us.set(t,n)}class Qp{constructor(){this.activeTargetIds=ow()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class hb{constructor(){this.so=new Qp,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,n){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Qp,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{_o(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){bt("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){bt("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ja=null;function Jc(){return ja===null?ja=function(){return 268435456+Math.round(2147483648*Math.random())}():ja++,"0x"+ja.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn="WebChannelConnection";class mb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+e.host,this.vo=`projects/${r}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${s}`}get Fo(){return!1}Mo(e,n,r,s,o){const a=Jc(),c=this.xo(e,n.toUriEncodedString());bt("RestConnection",`Sending RPC '${e}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,s,o),this.No(e,c,u,r).then(h=>(bt("RestConnection",`Received RPC '${e}' ${a}: `,h),h),h=>{throw qs("RestConnection",`RPC '${e}' ${a} failed with error: `,h,"url: ",c,"request:",r),h})}Lo(e,n,r,s,o,a){return this.Mo(e,n,r,s,o)}Oo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+no}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,o)=>e[o]=s),r&&r.headers.forEach((s,o)=>e[o]=s)}xo(e,n){const r=db[e];return`${this.Do}/v1/${n}:${r}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,n,r){const s=Jc();return new Promise((o,a)=>{const c=new yg;c.setWithCredentials(!0),c.listenOnce(Eg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case rl.NO_ERROR:const h=c.getResponseJson();bt(vn,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(h)),o(h);break;case rl.TIMEOUT:bt(vn,`RPC '${t}' ${s} timed out`),a(new It(st.DEADLINE_EXCEEDED,"Request time out"));break;case rl.HTTP_ERROR:const f=c.getStatus();if(bt(vn,`RPC '${t}' ${s} failed with status:`,f,"response text:",c.getResponseText()),f>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d?.error;if(m&&m.status&&m.message){const S=function(g){const v=g.toLowerCase().replace(/_/g,"-");return Object.values(st).indexOf(v)>=0?v:st.UNKNOWN}(m.status);a(new It(S,m.message))}else a(new It(st.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new It(st.UNAVAILABLE,"Connection failed."));break;default:Ht()}}finally{bt(vn,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(r);bt(vn,`RPC '${t}' ${s} sending request:`,r),c.send(e,"POST",u,n,15)})}Bo(t,e,n){const r=Jc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Tg(),a=xg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,e,n),c.encodeInitMessageHeaders=!0;const h=s.join("");bt(vn,`Creating RPC '${t}' stream ${r}: ${h}`,c);const f=o.createWebChannel(h,c);let d=!1,m=!1;const S=new pb({Io:g=>{m?bt(vn,`Not sending because RPC '${t}' stream ${r} is closed:`,g):(d||(bt(vn,`Opening RPC '${t}' stream ${r} transport.`),f.open(),d=!0),bt(vn,`RPC '${t}' stream ${r} sending:`,g),f.send(g))},To:()=>f.close()}),M=(g,v,D)=>{g.listen(v,R=>{try{D(R)}catch(N){setTimeout(()=>{throw N},0)}})};return M(f,Ro.EventType.OPEN,()=>{m||(bt(vn,`RPC '${t}' stream ${r} transport opened.`),S.yo())}),M(f,Ro.EventType.CLOSE,()=>{m||(m=!0,bt(vn,`RPC '${t}' stream ${r} transport closed`),S.So())}),M(f,Ro.EventType.ERROR,g=>{m||(m=!0,qs(vn,`RPC '${t}' stream ${r} transport errored:`,g),S.So(new It(st.UNAVAILABLE,"The operation could not be completed")))}),M(f,Ro.EventType.MESSAGE,g=>{var v;if(!m){const D=g.data[0];ve(!!D);const R=D,N=R.error||((v=R[0])===null||v===void 0?void 0:v.error);if(N){bt(vn,`RPC '${t}' stream ${r} received error:`,N);const z=N.status;let U=function(C){const _=We[C];if(_!==void 0)return $g(_)}(z),x=N.message;U===void 0&&(U=st.INTERNAL,x="Unknown error status: "+z+" with message "+N.message),m=!0,S.So(new It(U,x)),f.close()}else bt(vn,`RPC '${t}' stream ${r} received:`,D),S.bo(D)}}),M(a,Sg.STAT_EVENT,g=>{g.stat===Ju.PROXY?bt(vn,`RPC '${t}' stream ${r} detected buffering proxy`):g.stat===Ju.NOPROXY&&bt(vn,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function tu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(i){return new Aw(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(t,e,n=1e3,r=1.5,s=6e4){this.ui=t,this.timerId=e,this.ko=n,this.qo=r,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),r=Math.max(0,e-n);r>0&&bt("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(t,e,n,r,s,o,a,c){this.ui=t,this.Ho=n,this.Jo=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new s_(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===st.RESOURCE_EXHAUSTED?(Vi(e.toString()),Vi("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===st.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,r])=>{this.Yo===e&&this.P_(n,r)},n=>{t(()=>{const r=new It(st.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(r)})})}P_(t,e){const n=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(r=>{n(()=>this.I_(r))}),this.stream.onMessage(r=>{n(()=>++this.e_==1?this.E_(r):this.onNext(r))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return bt("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(bt("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gb extends o_{constructor(t,e,n,r,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,o),this.serializer=s}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Rw(this.serializer,t),n=function(s){if(!("targetChange"in s))return qt.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?qt.min():o.readTime?_i(o.readTime):qt.min()}(t);return this.listener.d_(e,n)}A_(t){const e={};e.database=lh(this.serializer),e.addTarget=function(s,o){let a;const c=o.target;if(a=ih(c)?{documents:Pw(s,c)}:{query:Dw(s,c)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Yg(s,o.resumeToken);const u=sh(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(qt.min())>0){a.readTime=wl(s,o.snapshotVersion.toTimestamp());const u=sh(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const n=Nw(this.serializer,t);n&&(e.labels=n),this.a_(e)}R_(t){const e={};e.database=lh(this.serializer),e.removeTarget=t,this.a_(e)}}class _b extends o_{constructor(t,e,n,r,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return ve(!!t.streamToken),this.lastStreamToken=t.streamToken,ve(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){ve(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Iw(t.writeResults,t.commitTime),n=_i(t.commitTime);return this.listener.g_(n,e)}p_(){const t={};t.database=lh(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>Cw(this.serializer,n))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new It(st.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,n,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(t,oh(e,n),r,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===st.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new It(st.UNKNOWN,s.toString())})}Lo(t,e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(t,oh(e,n),r,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===st.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new It(st.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class yb{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Vi(e),this.D_=!1):bt("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(t,e,n,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{n.enqueueAndForget(async()=>{Qr(this)&&(bt("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=Xt(c);u.L_.add(4),await sa(u),u.q_.set("Unknown"),u.L_.delete(4),await Jl(u)}(this))})}),this.q_=new yb(n,r)}}async function Jl(i){if(Qr(i))for(const t of i.B_)await t(!0)}async function sa(i){for(const t of i.B_)await t(!1)}function a_(i,t){const e=Xt(i);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),_f(e)?gf(e):ro(e).r_()&&mf(e,t))}function pf(i,t){const e=Xt(i),n=ro(e);e.N_.delete(t),n.r_()&&l_(e,t),e.N_.size===0&&(n.r_()?n.o_():Qr(e)&&e.q_.set("Unknown"))}function mf(i,t){if(i.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(qt.min())>0){const e=i.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}ro(i).A_(t)}function l_(i,t){i.Q_.xe(t),ro(i).R_(t)}function gf(i){i.Q_=new Sw({getRemoteKeysForTarget:t=>i.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>i.N_.get(t)||null,tt:()=>i.datastore.serializer.databaseId}),ro(i).start(),i.q_.v_()}function _f(i){return Qr(i)&&!ro(i).n_()&&i.N_.size>0}function Qr(i){return Xt(i).L_.size===0}function c_(i){i.Q_=void 0}async function Sb(i){i.q_.set("Online")}async function xb(i){i.N_.forEach((t,e)=>{mf(i,t)})}async function Tb(i,t){c_(i),_f(i)?(i.q_.M_(t),gf(i)):i.q_.set("Unknown")}async function Mb(i,t,e){if(i.q_.set("Online"),t instanceof Kg&&t.state===2&&t.cause)try{await async function(r,s){const o=s.cause;for(const a of s.targetIds)r.N_.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.N_.delete(a),r.Q_.removeTarget(a))}(i,t)}catch(n){bt("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await bl(i,n)}else if(t instanceof al?i.Q_.Ke(t):t instanceof jg?i.Q_.He(t):i.Q_.We(t),!e.isEqual(qt.min()))try{const n=await r_(i.localStore);e.compareTo(n)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=s.N_.get(u);h&&s.N_.set(u,h.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const h=s.N_.get(c);if(!h)return;s.N_.set(c,h.withResumeToken(fn.EMPTY_BYTE_STRING,h.snapshotVersion)),l_(s,c);const f=new tr(h.target,c,u,h.sequenceNumber);mf(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(i,e)}catch(n){bt("RemoteStore","Failed to raise snapshot:",n),await bl(i,n)}}async function bl(i,t,e){if(!na(t))throw t;i.L_.add(1),await sa(i),i.q_.set("Offline"),e||(e=()=>r_(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{bt("RemoteStore","Retrying IndexedDB access"),await e(),i.L_.delete(1),await Jl(i)})}function u_(i,t){return t().catch(e=>bl(i,e,t))}async function tc(i){const t=Xt(i),e=mr(t);let n=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;Ab(t);)try{const r=await lb(t.localStore,n);if(r===null){t.O_.length===0&&e.o_();break}n=r.batchId,wb(t,r)}catch(r){await bl(t,r)}h_(t)&&f_(t)}function Ab(i){return Qr(i)&&i.O_.length<10}function wb(i,t){i.O_.push(t);const e=mr(i);e.r_()&&e.V_&&e.m_(t.mutations)}function h_(i){return Qr(i)&&!mr(i).n_()&&i.O_.length>0}function f_(i){mr(i).start()}async function bb(i){mr(i).p_()}async function Rb(i){const t=mr(i);for(const e of i.O_)t.m_(e.mutations)}async function Cb(i,t,e){const n=i.O_.shift(),r=lf.from(n,t,e);await u_(i,()=>i.remoteSyncer.applySuccessfulWrite(r)),await tc(i)}async function Ib(i,t){t&&mr(i).V_&&await async function(n,r){if(function(o){return vw(o)&&o!==st.ABORTED}(r.code)){const s=n.O_.shift();mr(n).s_(),await u_(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await tc(n)}}(i,t),h_(i)&&f_(i)}async function Jp(i,t){const e=Xt(i);e.asyncQueue.verifyOperationInProgress(),bt("RemoteStore","RemoteStore received new credentials");const n=Qr(e);e.L_.add(3),await sa(e),n&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Jl(e)}async function Pb(i,t){const e=Xt(i);t?(e.L_.delete(2),await Jl(e)):t||(e.L_.add(2),await sa(e),e.q_.set("Unknown"))}function ro(i){return i.K_||(i.K_=function(e,n,r){const s=Xt(e);return s.w_(),new gb(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(i.datastore,i.asyncQueue,{Eo:Sb.bind(null,i),Ro:xb.bind(null,i),mo:Tb.bind(null,i),d_:Mb.bind(null,i)}),i.B_.push(async t=>{t?(i.K_.s_(),_f(i)?gf(i):i.q_.set("Unknown")):(await i.K_.stop(),c_(i))})),i.K_}function mr(i){return i.U_||(i.U_=function(e,n,r){const s=Xt(e);return s.w_(),new _b(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(i.datastore,i.asyncQueue,{Eo:()=>Promise.resolve(),Ro:bb.bind(null,i),mo:Ib.bind(null,i),f_:Rb.bind(null,i),g_:Cb.bind(null,i)}),i.B_.push(async t=>{t?(i.U_.s_(),await tc(i)):(await i.U_.stop(),i.O_.length>0&&(bt("RemoteStore",`Stopping write stream with ${i.O_.length} pending writes`),i.O_=[]))})),i.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(t,e,n,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new ar,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,s){const o=Date.now()+n,a=new vf(t,e,o,r,s);return a.start(n),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new It(st.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yf(i,t){if(Vi("AsyncQueue",`${t}: ${i}`),na(i))return new It(st.UNAVAILABLE,`${t}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Nt.comparator(e.key,n.key):(e,n)=>Nt.comparator(e.key,n.key),this.keyedMap=Co(),this.sortedSet=new Ne(this.comparator)}static emptySet(t){return new Ls(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ls)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const r=e.getNext().key,s=n.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new Ls;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(){this.W_=new Ne(Nt.comparator)}track(t){const e=t.doc.key,n=this.W_.get(e);n?t.type!==0&&n.type===3?this.W_=this.W_.insert(e,t):t.type===3&&n.type!==1?this.W_=this.W_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.W_=this.W_.remove(e):t.type===1&&n.type===2?this.W_=this.W_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):Ht():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,n)=>{t.push(n)}),t}}class Ys{constructor(t,e,n,r,s,o,a,c,u){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,e,n,r,s){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new Ys(t,e,Ls.emptySet(e),o,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&$l(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class Lb{constructor(){this.queries=em(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,n){const r=Xt(e),s=r.queries;r.queries=em(),s.forEach((o,a)=>{for(const c of a.j_)c.onError(n)})})(this,new It(st.ABORTED,"Firestore shutting down"))}}function em(){return new io(i=>Ug(i),$l)}async function d_(i,t){const e=Xt(i);let n=3;const r=t.query;let s=e.queries.get(r);s?!s.H_()&&t.J_()&&(n=2):(s=new Db,n=t.J_()?0:1);try{switch(n){case 0:s.z_=await e.onListen(r,!0);break;case 1:s.z_=await e.onListen(r,!1);break;case 2:await e.onFirstRemoteStoreListen(r)}}catch(o){const a=yf(o,`Initialization of query '${Ms(t.query)}' failed`);return void t.onError(a)}e.queries.set(r,s),s.j_.push(t),t.Z_(e.onlineState),s.z_&&t.X_(s.z_)&&Ef(e)}async function p_(i,t){const e=Xt(i),n=t.query;let r=3;const s=e.queries.get(n);if(s){const o=s.j_.indexOf(t);o>=0&&(s.j_.splice(o,1),s.j_.length===0?r=t.J_()?0:1:!s.H_()&&t.J_()&&(r=2))}switch(r){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Nb(i,t){const e=Xt(i);let n=!1;for(const r of t){const s=r.query,o=e.queries.get(s);if(o){for(const a of o.j_)a.X_(r)&&(n=!0);o.z_=r}}n&&Ef(e)}function Ub(i,t,e){const n=Xt(i),r=n.queries.get(t);if(r)for(const s of r.j_)s.onError(e);n.queries.delete(t)}function Ef(i){i.Y_.forEach(t=>{t.next()})}var uh,nm;(nm=uh||(uh={})).ea="default",nm.Cache="cache";class m_{constructor(t,e,n){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(t){if(!this.options.includeMetadataChanges){const n=[];for(const r of t.docChanges)r.type!==3&&n.push(r);t=new Ys(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const n=e!=="Offline";return(!this.options._a||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Ys.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==uh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(t){this.key=t}}class __{constructor(t){this.key=t}}class Ob{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=re(),this.mutatedKeys=re(),this.Aa=Og(t),this.Ra=new Ls(this.Aa)}get Va(){return this.Ta}ma(t,e){const n=e?e.fa:new tm,r=e?e.Ra:this.Ra;let s=e?e.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((h,f)=>{const d=r.get(h),m=jl(this.query,f)?f:null,S=!!d&&this.mutatedKeys.has(d.key),M=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let g=!1;d&&m?d.data.isEqual(m.data)?S!==M&&(n.track({type:3,doc:m}),g=!0):this.ga(d,m)||(n.track({type:2,doc:m}),g=!0,(c&&this.Aa(m,c)>0||u&&this.Aa(m,u)<0)&&(a=!0)):!d&&m?(n.track({type:0,doc:m}),g=!0):d&&!m&&(n.track({type:1,doc:d}),g=!0,(c||u)&&(a=!0)),g&&(m?(o=o.add(m),s=M?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),n.track({type:1,doc:h})}return{Ra:o,fa:n,ns:a,mutatedKeys:s}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,r){const s=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const o=t.fa.G_();o.sort((h,f)=>function(m,S){const M=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ht()}};return M(m)-M(S)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(n),r=r!=null&&r;const a=e&&!r?this.ya():[],c=this.da.size===0&&this.current&&!r?1:0,u=c!==this.Ea;return this.Ea=c,o.length!==0||u?{snapshot:new Ys(this.query,t.Ra,s,o,t.mutatedKeys,c===0,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new tm,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=re(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const e=[];return t.forEach(n=>{this.da.has(n)||e.push(new __(n))}),this.da.forEach(n=>{t.has(n)||e.push(new g_(n))}),e}ba(t){this.Ta=t.Ts,this.da=re();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Ys.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Fb{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Vb{constructor(t){this.key=t,this.va=!1}}class Bb{constructor(t,e,n,r,s,o){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new io(a=>Ug(a),$l),this.Ma=new Map,this.xa=new Set,this.Oa=new Ne(Nt.comparator),this.Na=new Map,this.La=new hf,this.Ba={},this.ka=new Map,this.qa=Ks.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function kb(i,t,e=!0){const n=T_(i);let r;const s=n.Fa.get(t);return s?(n.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.Da()):r=await v_(n,t,e,!0),r}async function zb(i,t){const e=T_(i);await v_(e,t,!0,!1)}async function v_(i,t,e,n){const r=await cb(i.localStore,gi(t)),s=r.targetId,o=i.sharedClientState.addLocalQueryTarget(s,e);let a;return n&&(a=await Hb(i,t,s,o==="current",r.resumeToken)),i.isPrimaryClient&&e&&a_(i.remoteStore,r),a}async function Hb(i,t,e,n,r){i.Ka=(f,d,m)=>async function(M,g,v,D){let R=g.view.ma(v);R.ns&&(R=await Yp(M.localStore,g.query,!1).then(({documents:x})=>g.view.ma(x,R)));const N=D&&D.targetChanges.get(g.targetId),z=D&&D.targetMismatches.get(g.targetId)!=null,U=g.view.applyChanges(R,M.isPrimaryClient,N,z);return rm(M,g.targetId,U.wa),U.snapshot}(i,f,d,m);const s=await Yp(i.localStore,t,!0),o=new Ob(t,s.Ts),a=o.ma(s.documents),c=ra.createSynthesizedTargetChangeForCurrentChange(e,n&&i.onlineState!=="Offline",r),u=o.applyChanges(a,i.isPrimaryClient,c);rm(i,e,u.wa);const h=new Fb(t,e,o);return i.Fa.set(t,h),i.Ma.has(e)?i.Ma.get(e).push(t):i.Ma.set(e,[t]),u.snapshot}async function Gb(i,t,e){const n=Xt(i),r=n.Fa.get(t),s=n.Ma.get(r.targetId);if(s.length>1)return n.Ma.set(r.targetId,s.filter(o=>!$l(o,t))),void n.Fa.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ch(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),e&&pf(n.remoteStore,r.targetId),hh(n,r.targetId)}).catch(ea)):(hh(n,r.targetId),await ch(n.localStore,r.targetId,!0))}async function Wb(i,t){const e=Xt(i),n=e.Fa.get(t),r=e.Ma.get(n.targetId);e.isPrimaryClient&&r.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),pf(e.remoteStore,n.targetId))}async function qb(i,t,e){const n=Zb(i);try{const r=await function(o,a){const c=Xt(o),u=Ke.now(),h=a.reduce((m,S)=>m.add(S.key),re());let f,d;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let S=Bi(),M=re();return c.cs.getEntries(m,h).next(g=>{S=g,S.forEach((v,D)=>{D.isValidDocument()||(M=M.add(v))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,S)).next(g=>{f=g;const v=[];for(const D of a){const R=dw(D,f.get(D.key).overlayedDocument);R!=null&&v.push(new vr(D.key,R,Rg(R.value.mapValue),si.exists(!0)))}return c.mutationQueue.addMutationBatch(m,u,v,a)}).next(g=>{d=g;const v=g.applyToLocalDocumentSet(f,M);return c.documentOverlayCache.saveOverlays(m,g.batchId,v)})}).then(()=>({batchId:d.batchId,changes:Vg(f)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(r.batchId),function(o,a,c){let u=o.Ba[o.currentUser.toKey()];u||(u=new Ne(ge)),u=u.insert(a,c),o.Ba[o.currentUser.toKey()]=u}(n,r.batchId,e),await oa(n,r.changes),await tc(n.remoteStore)}catch(r){const s=yf(r,"Failed to persist write");e.reject(s)}}async function y_(i,t){const e=Xt(i);try{const n=await ob(e.localStore,t);t.targetChanges.forEach((r,s)=>{const o=e.Na.get(s);o&&(ve(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.va=!0:r.modifiedDocuments.size>0?ve(o.va):r.removedDocuments.size>0&&(ve(o.va),o.va=!1))}),await oa(e,n,t)}catch(n){await ea(n)}}function im(i,t,e){const n=Xt(i);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const r=[];n.Fa.forEach((s,o)=>{const a=o.view.Z_(t);a.snapshot&&r.push(a.snapshot)}),function(o,a){const c=Xt(o);c.onlineState=a;let u=!1;c.queries.forEach((h,f)=>{for(const d of f.j_)d.Z_(a)&&(u=!0)}),u&&Ef(c)}(n.eventManager,t),r.length&&n.Ca.d_(r),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function Xb(i,t,e){const n=Xt(i);n.sharedClientState.updateQueryState(t,"rejected",e);const r=n.Na.get(t),s=r&&r.key;if(s){let o=new Ne(Nt.comparator);o=o.insert(s,En.newNoDocument(s,qt.min()));const a=re().add(s),c=new Ql(qt.min(),new Map,new Ne(ge),o,a);await y_(n,c),n.Oa=n.Oa.remove(s),n.Na.delete(t),Sf(n)}else await ch(n.localStore,t,!1).then(()=>hh(n,t,e)).catch(ea)}async function $b(i,t){const e=Xt(i),n=t.batch.batchId;try{const r=await sb(e.localStore,t);S_(e,n,null),E_(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await oa(e,r)}catch(r){await ea(r)}}async function jb(i,t,e){const n=Xt(i);try{const r=await function(o,a){const c=Xt(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,a).next(f=>(ve(f!==null),h=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(n.localStore,t);S_(n,t,e),E_(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await oa(n,r)}catch(r){await ea(r)}}function E_(i,t){(i.ka.get(t)||[]).forEach(e=>{e.resolve()}),i.ka.delete(t)}function S_(i,t,e){const n=Xt(i);let r=n.Ba[n.currentUser.toKey()];if(r){const s=r.get(t);s&&(e?s.reject(e):s.resolve(),r=r.remove(t)),n.Ba[n.currentUser.toKey()]=r}}function hh(i,t,e=null){i.sharedClientState.removeLocalQueryTarget(t);for(const n of i.Ma.get(t))i.Fa.delete(n),e&&i.Ca.$a(n,e);i.Ma.delete(t),i.isPrimaryClient&&i.La.gr(t).forEach(n=>{i.La.containsKey(n)||x_(i,n)})}function x_(i,t){i.xa.delete(t.path.canonicalString());const e=i.Oa.get(t);e!==null&&(pf(i.remoteStore,e),i.Oa=i.Oa.remove(t),i.Na.delete(e),Sf(i))}function rm(i,t,e){for(const n of e)n instanceof g_?(i.La.addReference(n.key,t),Kb(i,n)):n instanceof __?(bt("SyncEngine","Document no longer in limbo: "+n.key),i.La.removeReference(n.key,t),i.La.containsKey(n.key)||x_(i,n.key)):Ht()}function Kb(i,t){const e=t.key,n=e.path.canonicalString();i.Oa.get(e)||i.xa.has(n)||(bt("SyncEngine","New document in limbo: "+e),i.xa.add(n),Sf(i))}function Sf(i){for(;i.xa.size>0&&i.Oa.size<i.maxConcurrentLimboResolutions;){const t=i.xa.values().next().value;i.xa.delete(t);const e=new Nt(Fe.fromString(t)),n=i.qa.next();i.Na.set(n,new Vb(e)),i.Oa=i.Oa.insert(e,n),a_(i.remoteStore,new tr(gi(Xl(e.path)),n,"TargetPurposeLimboResolution",Jh.oe))}}async function oa(i,t,e){const n=Xt(i),r=[],s=[],o=[];n.Fa.isEmpty()||(n.Fa.forEach((a,c)=>{o.push(n.Ka(c,t,e).then(u=>{var h;if((u||e)&&n.isPrimaryClient){const f=u?!u.fromCache:(h=e?.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;n.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){r.push(u);const f=df.Wi(c.targetId,u);s.push(f)}}))}),await Promise.all(o),n.Ca.d_(r),await async function(c,u){const h=Xt(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>it.forEach(u,d=>it.forEach(d.$i,m=>h.persistence.referenceDelegate.addReference(f,d.targetId,m)).next(()=>it.forEach(d.Ui,m=>h.persistence.referenceDelegate.removeReference(f,d.targetId,m)))))}catch(f){if(!na(f))throw f;bt("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const d=f.targetId;if(!f.fromCache){const m=h.os.get(d),S=m.snapshotVersion,M=m.withLastLimboFreeSnapshotVersion(S);h.os=h.os.insert(d,M)}}}(n.localStore,s))}async function Yb(i,t){const e=Xt(i);if(!e.currentUser.isEqual(t)){bt("SyncEngine","User change. New user:",t.toKey());const n=await i_(e.localStore,t);e.currentUser=t,function(s,o){s.ka.forEach(a=>{a.forEach(c=>{c.reject(new It(st.CANCELLED,o))})}),s.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await oa(e,n.hs)}}function Qb(i,t){const e=Xt(i),n=e.Na.get(t);if(n&&n.va)return re().add(n.key);{let r=re();const s=e.Ma.get(t);if(!s)return r;for(const o of s){const a=e.Fa.get(o);r=r.unionWith(a.view.Va)}return r}}function T_(i){const t=Xt(i);return t.remoteStore.remoteSyncer.applyRemoteEvent=y_.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Qb.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Xb.bind(null,t),t.Ca.d_=Nb.bind(null,t.eventManager),t.Ca.$a=Ub.bind(null,t.eventManager),t}function Zb(i){const t=Xt(i);return t.remoteStore.remoteSyncer.applySuccessfulWrite=$b.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=jb.bind(null,t),t}class Rl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Zl(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return rb(this.persistence,new nb,t.initialUser,this.serializer)}Ga(t){return new Jw(ff.Zr,this.serializer)}Wa(t){return new hb}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Rl.provider={build:()=>new Rl};class fh{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>im(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Yb.bind(null,this.syncEngine),await Pb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Lb}()}createDatastore(t){const e=Zl(t.databaseInfo.databaseId),n=function(s){return new mb(s)}(t.databaseInfo);return function(s,o,a,c){return new vb(s,o,a,c)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,r,s,o,a){return new Eb(n,r,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>im(this.syncEngine,e,0),function(){return Zp.D()?new Zp:new fb}())}createSyncEngine(t,e){return function(r,s,o,a,c,u,h){const f=new Bb(r,s,o,a,c,u);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(r){const s=Xt(r);bt("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await sa(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}fh.provider={build:()=>new fh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):Vi("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(t,e,n,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=yn.UNAUTHENTICATED,this.clientId=Ag.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,async o=>{bt("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(bt("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ar;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=yf(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function eu(i,t){i.asyncQueue.verifyOperationInProgress(),bt("FirestoreClient","Initializing OfflineComponentProvider");const e=i.configuration;await t.initialize(e);let n=e.initialUser;i.setCredentialChangeListener(async r=>{n.isEqual(r)||(await i_(t.localStore,r),n=r)}),t.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=t}async function sm(i,t){i.asyncQueue.verifyOperationInProgress();const e=await tR(i);bt("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,i.configuration),i.setCredentialChangeListener(n=>Jp(t.remoteStore,n)),i.setAppCheckTokenChangeListener((n,r)=>Jp(t.remoteStore,r)),i._onlineComponents=t}async function tR(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){bt("FirestoreClient","Using user provided OfflineComponentProvider");try{await eu(i,i._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(r){return r.name==="FirebaseError"?r.code===st.FAILED_PRECONDITION||r.code===st.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(e))throw e;qs("Error using user provided cache. Falling back to memory cache: "+e),await eu(i,new Rl)}}else bt("FirestoreClient","Using default OfflineComponentProvider"),await eu(i,new Rl);return i._offlineComponents}async function A_(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(bt("FirestoreClient","Using user provided OnlineComponentProvider"),await sm(i,i._uninitializedComponentsProvider._online)):(bt("FirestoreClient","Using default OnlineComponentProvider"),await sm(i,new fh))),i._onlineComponents}function eR(i){return A_(i).then(t=>t.syncEngine)}async function dh(i){const t=await A_(i),e=t.eventManager;return e.onListen=kb.bind(null,t.syncEngine),e.onUnlisten=Gb.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=zb.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Wb.bind(null,t.syncEngine),e}function nR(i,t,e={}){const n=new ar;return i.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const h=new M_({next:d=>{h.Za(),o.enqueueAndForget(()=>p_(s,f));const m=d.docs.has(a);!m&&d.fromCache?u.reject(new It(st.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&d.fromCache&&c&&c.source==="server"?u.reject(new It(st.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),f=new m_(Xl(a.path),h,{includeMetadataChanges:!0,_a:!0});return d_(s,f)}(await dh(i),i.asyncQueue,t,e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(i){const t={};return i.timeoutSeconds!==void 0&&(t.timeoutSeconds=i.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iR(i,t,e){if(!e)throw new It(st.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${t}.`)}function rR(i,t,e,n){if(t===!0&&n===!0)throw new It(st.INVALID_ARGUMENT,`${i} and ${e} cannot be used together.`)}function am(i){if(!Nt.isDocumentKey(i))throw new It(st.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function xf(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(i);return t?`a custom ${t} object`:"an object"}}return typeof i=="function"?"a function":Ht()}function oi(i,t){if("_delegate"in i&&(i=i._delegate),!(i instanceof t)){if(t.name===i.constructor.name)throw new It(st.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=xf(i);throw new It(st.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new It(st.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new It(st.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}rR("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=w_((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new It(st.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new It(st.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new It(st.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,r){return n.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Tf{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lm({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new It(st.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new It(st.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lm(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new SA;switch(n.type){case"firstParty":return new AA(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new It(st.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=om.get(e);n&&(bt("ComponentProvider","Removing Datastore"),om.delete(e),n.terminate())}(this),Promise.resolve()}}function sR(i,t,e,n={}){var r;const s=(i=oi(i,Tf))._getSettings(),o=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&qs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),n.mockUserToken){let a,c;if(typeof n.mockUserToken=="string")a=n.mockUserToken,c=yn.MOCK_USER;else{a=nM(n.mockUserToken,(r=i._app)===null||r===void 0?void 0:r.options.projectId);const u=n.mockUserToken.sub||n.mockUserToken.user_id;if(!u)throw new It(st.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new yn(u)}i._authCredentials=new xA(new Mg(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new ec(this.firestore,t,this._query)}}class Pn{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $o(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Pn(this.firestore,t,this._key)}}class $o extends ec{constructor(t,e,n){super(t,e,Xl(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Pn(this.firestore,null,new Nt(t))}withConverter(t){return new $o(this.firestore,t,this._path)}}function oR(i,t,...e){if(i=fr(i),arguments.length===1&&(t=Ag.newId()),iR("doc","path",t),i instanceof Tf){const n=Fe.fromString(t,...e);return am(n),new Pn(i,null,new Nt(n))}{if(!(i instanceof Pn||i instanceof $o))throw new It(st.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=i._path.child(Fe.fromString(t,...e));return am(n),new Pn(i.firestore,i instanceof $o?i.converter:null,new Nt(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new s_(this,"async_queue_retry"),this.Vu=()=>{const n=tu();n&&bt("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=t;const e=tu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=tu();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new ar;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!na(t))throw t;bt("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(n=>{this.Eu=n,this.du=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(n);throw Vi("INTERNAL UNHANDLED ERROR: ",r),n}).then(n=>(this.du=!1,n))));return this.mu=e,e}enqueueAfterDelay(t,e,n){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const r=vf.createAndSchedule(this,t,e,n,s=>this.yu(s));return this.Tu.push(r),r}fu(){this.Eu&&Ht()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function um(i){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of n)if(s in r&&typeof r[s]=="function")return!0;return!1}(i,["next","error","complete"])}class jr extends Tf{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new cm,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new cm(t),this._firestoreClient=void 0,await t}}}function aR(i,t){const e=typeof i=="object"?i:hA(),n=typeof i=="string"?i:"(default)",r=aA(e,"firestore").getImmediate({identifier:n});if(!r._initialized){const s=tM("firestore");s&&sR(r,...s)}return r}function Mf(i){if(i._terminated)throw new It(st.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||lR(i),i._firestoreClient}function lR(i){var t,e,n;const r=i._freezeSettings(),s=function(a,c,u,h){return new VA(a,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,w_(h.experimentalLongPollingOptions),h.useFetchStreams)}(i._databaseId,((t=i._app)===null||t===void 0?void 0:t.options.appId)||"",i._persistenceKey,r);i._componentsProvider||!((e=r.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=r.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(i._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),i._firestoreClient=new Jb(i._authCredentials,i._appCheckCredentials,i._queue,s,i._componentsProvider&&function(a){const c=a?._online.build();return{_offline:a?._offline.build(c),_online:c}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Qs(fn.fromBase64String(t))}catch(e){throw new It(st.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Qs(fn.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new It(st.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ln(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new It(st.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new It(st.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ge(this._lat,t._lat)||ge(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,r){if(n.length!==r.length)return!1;for(let s=0;s<n.length;++s)if(n[s]!==r[s])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=/^__.*__$/;class uR{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new vr(t,this.data,this.fieldMask,e,this.fieldTransforms):new ia(t,this.data,e,this.fieldTransforms)}}class b_{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new vr(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function R_(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ht()}}class Rf{constructor(t,e,n,r,s,o){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Rf(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),r=this.Fu({path:n,xu:!1});return r.Ou(t),r}Nu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),r=this.Fu({path:n,xu:!1});return r.vu(),r}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Cl(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(R_(this.Cu)&&cR.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class hR{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Zl(t)}Qu(t,e,n,r=!1){return new Rf({Cu:t,methodName:e,qu:n,path:ln.emptyPath(),xu:!1,ku:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function C_(i){const t=i._freezeSettings(),e=Zl(i._databaseId);return new hR(i._databaseId,!!t.ignoreUndefinedProperties,e)}function fR(i,t,e,n,r,s={}){const o=i.Qu(s.merge||s.mergeFields?2:0,t,e,r);Cf("Data must be an object, but it was:",o,n);const a=I_(n,o);let c,u;if(s.merge)c=new On(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const d=ph(t,f,e);if(!o.contains(d))throw new It(st.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);D_(h,d)||h.push(d)}c=new On(h),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new uR(new Cn(a),c,u)}class aa extends Af{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof aa}}function dR(i,t,e,n){const r=i.Qu(1,t,e);Cf("Data must be an object, but it was:",r,n);const s=[],o=Cn.empty();Yr(n,(c,u)=>{const h=If(t,c,e);u=fr(u);const f=r.Nu(h);if(u instanceof aa)s.push(h);else{const d=ic(u,f);d!=null&&(s.push(h),o.set(h,d))}});const a=new On(s);return new b_(o,a,r.fieldTransforms)}function pR(i,t,e,n,r,s){const o=i.Qu(1,t,e),a=[ph(t,n,e)],c=[r];if(s.length%2!=0)throw new It(st.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(ph(t,s[d])),c.push(s[d+1]);const u=[],h=Cn.empty();for(let d=a.length-1;d>=0;--d)if(!D_(u,a[d])){const m=a[d];let S=c[d];S=fr(S);const M=o.Nu(m);if(S instanceof aa)u.push(m);else{const g=ic(S,M);g!=null&&(u.push(m),h.set(m,g))}}const f=new On(u);return new b_(h,f,o.fieldTransforms)}function ic(i,t){if(P_(i=fr(i)))return Cf("Unsupported field value:",t,i),I_(i,t);if(i instanceof Af)return function(n,r){if(!R_(r.Cu))throw r.Bu(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Bu(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(i,t),null;if(i===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),i instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(n,r){const s=[];let o=0;for(const a of n){let c=ic(a,r.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(i,t)}return function(n,r){if((n=fr(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return aw(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Ke.fromDate(n);return{timestampValue:wl(r.serializer,s)}}if(n instanceof Ke){const s=new Ke(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:wl(r.serializer,s)}}if(n instanceof wf)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Qs)return{bytesValue:Yg(r.serializer,n._byteString)};if(n instanceof Pn){const s=r.databaseId,o=n.firestore._databaseId;if(!o.isEqual(s))throw r.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:uf(n.firestore._databaseId||r.databaseId,n._key.path)}}if(n instanceof bf)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.Bu("VectorValues must only contain numeric values.");return of(a.serializer,c)})}}}}}}(n,r);throw r.Bu(`Unsupported field value: ${xf(n)}`)}(i,t)}function I_(i,t){const e={};return wg(i)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Yr(i,(n,r)=>{const s=ic(r,t.Mu(n));s!=null&&(e[n]=s)}),{mapValue:{fields:e}}}function P_(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Ke||i instanceof wf||i instanceof Qs||i instanceof Pn||i instanceof Af||i instanceof bf)}function Cf(i,t,e){if(!P_(e)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(e)){const n=xf(e);throw n==="an object"?t.Bu(i+" a custom object"):t.Bu(i+" "+n)}}function ph(i,t,e){if((t=fr(t))instanceof nc)return t._internalPath;if(typeof t=="string")return If(i,t);throw Cl("Field path arguments must be of type string or ",i,!1,void 0,e)}const mR=new RegExp("[~\\*/\\[\\]]");function If(i,t,e){if(t.search(mR)>=0)throw Cl(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,e);try{return new nc(...t.split("."))._internalPath}catch{throw Cl(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,e)}}function Cl(i,t,e,n,r){const s=n&&!n.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${n}`),o&&(c+=` in document ${r}`),c+=")"),new It(st.INVALID_ARGUMENT,a+i+c)}function D_(i,t){return i.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(t,e,n,r,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Pn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new gR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(N_("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class gR extends L_{data(){return super.data()}}function N_(i,t){return typeof t=="string"?If(i,t):t instanceof nc?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _R(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new It(st.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vR{convertValue(t,e="none"){switch($r(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ze(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Xr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw Ht()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Yr(t,(r,s)=>{n[r]=this.convertValue(s,e)}),n}convertVectorValue(t){var e,n,r;const s=(r=(n=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||n===void 0?void 0:n.values)===null||r===void 0?void 0:r.map(o=>ze(o.doubleValue));return new bf(s)}convertGeoPoint(t){return new wf(ze(t.latitude),ze(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=ef(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Ho(t));default:return null}}convertTimestamp(t){const e=pr(t);return new Ke(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Fe.fromString(t);ve(n_(n));const r=new Go(n.get(1),n.get(3)),s=new Nt(n.popFirst(5));return r.isEqual(e)||Vi(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yR(i,t,e){let n;return n=i?i.toFirestore(t):t,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class U_ extends L_{constructor(t,e,n,r,s,o){super(t,e,n,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ll(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(N_("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class ll extends U_{data(t={}){return super.data(t)}}class ER{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Po(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new ll(this._firestore,this._userDataWriter,n.key,n,new Po(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new It(st.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const c=new ll(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Po(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new ll(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Po(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:SR(a.type),doc:c,oldIndex:u,newIndex:h}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function SR(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ht()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(i){i=oi(i,Pn);const t=oi(i.firestore,jr);return nR(Mf(t),i._key).then(e=>F_(t,i,e))}class O_ extends vR{constructor(t){super(),this.firestore=t}convertBytes(t){return new Qs(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Pn(this.firestore,null,e)}}function xR(i,t,e){i=oi(i,Pn);const n=oi(i.firestore,jr),r=yR(i.converter,t);return Pf(n,[fR(C_(n),"setDoc",i._key,r,i.converter!==null,e).toMutation(i._key,si.none())])}function gr(i,t,e,...n){i=oi(i,Pn);const r=oi(i.firestore,jr),s=C_(r);let o;return o=typeof(t=fr(t))=="string"||t instanceof nc?pR(s,"updateDoc",i._key,t,e,n):dR(s,"updateDoc",i._key,t),Pf(r,[o.toMutation(i._key,si.exists(!0))])}function TR(i){return Pf(oi(i.firestore,jr),[new af(i._key,si.none())])}function MR(i,...t){var e,n,r;i=fr(i);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof t[o]!="object"||um(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(um(t[o])){const f=t[o];t[o]=(e=f.next)===null||e===void 0?void 0:e.bind(f),t[o+1]=(n=f.error)===null||n===void 0?void 0:n.bind(f),t[o+2]=(r=f.complete)===null||r===void 0?void 0:r.bind(f)}let c,u,h;if(i instanceof Pn)u=oi(i.firestore,jr),h=Xl(i._key.path),c={next:f=>{t[o]&&t[o](F_(u,i,f))},error:t[o+1],complete:t[o+2]};else{const f=oi(i,ec);u=oi(f.firestore,jr),h=f._query;const d=new O_(u);c={next:m=>{t[o]&&t[o](new ER(u,d,f,m))},error:t[o+1],complete:t[o+2]},_R(i._query)}return function(d,m,S,M){const g=new M_(M),v=new m_(m,g,S);return d.asyncQueue.enqueueAndForget(async()=>d_(await dh(d),v)),()=>{g.Za(),d.asyncQueue.enqueueAndForget(async()=>p_(await dh(d),v))}}(Mf(u),h,a,c)}function Pf(i,t){return function(n,r){const s=new ar;return n.asyncQueue.enqueueAndForget(async()=>qb(await eR(n),r,s)),s.promise}(Mf(i),t)}function F_(i,t,e){const n=e.docs.get(t._key),r=new O_(i);return new U_(i,r,t._key,n,new Po(e.hasPendingWrites,e.fromCache),t.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(){return new aa("deleteField")}(function(t,e=!0){(function(r){no=r})(uA),El(new Bo("firestore",(n,{instanceIdentifier:r,options:s})=>{const o=n.getProvider("app").getImmediate(),a=new jr(new TA(n.getProvider("auth-internal")),new bA(n.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new It(st.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Go(u.options.projectId,h)}(o,r),o);return s=Object.assign({useFetchStreams:e},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Ds(Cp,"4.7.3",t),Ds(Cp,"4.7.3","esm2017")})();var AR="firebase",wR="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ds(AR,wR,"app");const bR={apiKey:"AIzaSyAdLxpkzBjjdzZ29HGDEvhPGXn8DBmpLa8",authDomain:"games-rooms.firebaseapp.com",projectId:"games-rooms",storageBucket:"games-rooms.firebasestorage.app",messagingSenderId:"1023357290194",appId:"1:1023357290194:web:f9f0bd056690a31af20f0b"},RR=mg(bR),CR=aR(RR),V_=["red","blue","green","yellow","purple","orange","pink","cyan"],di={red:"#e74c3c",blue:"#3498db",green:"#2ecc71",yellow:"#f1c40f",purple:"#9b59b6",orange:"#e67e22",pink:"#e91e8c",cyan:"#1abc9c"},B_=[[1,6],[2,6],[3,6],[4,6],[5,6],[6,5],[6,4],[6,3],[6,2],[6,1],[6,0],[7,0],[8,0],[8,1],[8,2],[8,3],[8,4],[8,5],[9,6],[10,6],[11,6],[12,6],[13,6],[14,6],[14,7],[14,8],[13,8],[12,8],[11,8],[10,8],[9,8],[8,9],[8,10],[8,11],[8,12],[8,13],[8,14],[7,14],[6,14],[6,13],[6,12],[6,11],[6,10],[6,9],[5,8],[4,8],[3,8],[2,8],[1,8],[0,8],[0,7],[0,6]],k_={red:[[1,7],[2,7],[3,7],[4,7],[5,7]],blue:[[7,1],[7,2],[7,3],[7,4],[7,5]],yellow:[[13,7],[12,7],[11,7],[10,7],[9,7]],green:[[7,13],[7,12],[7,11],[7,10],[7,9]]},IR=[7,7],Df={red:[[1,1],[2,1],[1,2],[2,2]],blue:[[12,1],[13,1],[12,2],[13,2]],yellow:[[12,12],[13,12],[12,13],[13,13]],green:[[1,12],[2,12],[1,13],[2,13]]},PR={red:0,blue:13,yellow:26,green:39},DR={red:50,blue:11,yellow:24,green:37},z_=new Set([0,4,13,17,26,30,39,43]),mh=new Set([7,20,33,46]),gh=new Set([2,15,28,41]),_h=new Set([9,22,35,48]),vh=new Set([5,18,31,44]),yh=new Set([11,24,37,50]),Eh=new Set([6,19,32,45]),Sh=new Set([8,21,34,47]),xh=new Set([10,23,36,49]),Th=new Set([12,25,38,51]),nu=16,fm=3,er=9;function H_(){const i=[];for(let t=0;t<nu;t++){const e=t/nu*Math.PI*2-Math.PI/2,n=(t+1)/nu*Math.PI*2-Math.PI/2,r=er*Math.cos(e),s=er*Math.sin(e),o=er*Math.cos(n),a=er*Math.sin(n);for(let c=0;c<fm;c++){const u=(c+.5)/fm;i.push([r+(o-r)*u,s+(a-s)*u])}}return i}function G_(i,t=5){const e=(i+.5)/8*Math.PI*2-Math.PI/2,n=er*Math.cos(e),r=er*Math.sin(e),s=Math.sqrt(n*n+r*r),o=-n/s,a=-r/s;return Array.from({length:t},(c,u)=>[n+o*(u+1),r+a*(u+1)])}function Lf(i){const t=(i+.5)/8*Math.PI*2-Math.PI/2,e=er*Math.cos(t),n=er*Math.sin(t),r=Math.sqrt(e*e+n*n),s=e/r,o=n/r,a=-o,c=s,u=e+s*2.2,h=n+o*2.2;return[[u+a*.6,h+c*.6],[u-a*.6,h-c*.6],[u+s*.9+a*.6,h+o*.9+c*.6],[u+s*.9-a*.6,h+o*.9-c*.6]]}const LR={red:0,blue:6,green:12,yellow:18,purple:24,orange:30,pink:36,cyan:42},NR={red:46,blue:4,green:10,yellow:16,purple:22,orange:28,pink:34,cyan:40},W_=new Set([0,6,12,18,24,30,36,42,2,8,14,20,26,32,38,44]),Mh=new Set([1,7,13,19,25,31,37,43]),Ah=new Set([4,10,16,22,28,34,40,46]),wh=new Set([3,9,27,33]),bh=new Set([5,11,21,47]),Rh=new Set([15,23,35,41]),Ch=new Set([17]),Ih=new Set([29]),Ph=new Set([39]),Dh=new Set([45]),dm=["red","blue","yellow","green"],Il=["red","blue","green","yellow","purple","orange","pink","cyan"],Fn={standard:{pathLen:52,colLen:5},octagonal:{pathLen:48,colLen:5}};function q_(i){const{pathLen:t,colLen:e}=Fn[i];return t+e}function jo(i,t){return t==="standard"?PR[i]:LR[i]}function UR(i,t){return t==="standard"?DR[i]:NR[i]}function pm(i,t){return t==="standard"?z_.has(i):W_.has(i)}function X_(i,t){return t==="standard"?mh.has(i):Mh.has(i)}function Nf(i,t){return t==="standard"?gh.has(i):Ah.has(i)}function $_(i,t){return t==="standard"?_h.has(i):wh.has(i)}function j_(i,t){return t==="standard"?vh.has(i):bh.has(i)}function K_(i,t){return t==="standard"?yh.has(i):Rh.has(i)}function Y_(i,t){return t==="standard"?Eh.has(i):Ch.has(i)}function Q_(i,t){return t==="standard"?Sh.has(i):Ih.has(i)}function Z_(i,t){return t==="standard"?xh.has(i):Ph.has(i)}function J_(i,t){return t==="standard"?Th.has(i):Dh.has(i)}function mm(i,t,e){const{pathLen:n}=Fn[e];return(i-jo(t,e)+n)%n}function Le(i,t,e){const{pathLen:n}=Fn[e];return(jo(t,e)+i)%n}function Uf(i,t,e){const{pathLen:n}=Fn[e],r=jo(t,e);return(UR(t,e)-r+n)%n-i+1}function OR(i,t,e,n){return t<0||t>=n?0:i.filter((r,s)=>s!==e&&r.progress===t).length}function FR(i,t){const e=new Set;for(let n=0;n<i.length;n++){const r=i[n];if(!(r.progress<0||r.progress>=t))for(let s=n+1;s<i.length;s++)i[s].progress===r.progress&&(e.add(n),e.add(s))}return e}function tv(i,t,e){const n={};for(const r of i)n[r]=[{progress:-1},{progress:-1},{progress:-1},{progress:-1}];return{turnOrder:i,currentTurn:0,phase:"setup",diceValue:null,consecutiveSixes:0,pieces:n,winner:null,pendingCurse:{},shackled:{},pendingShackle:{},setupRolls:{}}}function VR(i,t,e,n){let r=i[0];for(const a of i)(t[a]??0)>(t[r]??0)&&(r=a);const s=[...i].sort((a,c)=>jo(e[a],n)-jo(e[c],n)),o=s.indexOf(r);return[...s.slice(o),...s.slice(0,o)]}function BR(i,t,e,n,r){if(i.turnOrder[i.currentTurn]!==t)return i;const s={...i.setupRolls??{},[t]:e},o=i.currentTurn+1;if(o<i.turnOrder.length)return{...i,setupRolls:s,currentTurn:o};const a=VR(i.turnOrder,s,n,r);return{...i,setupRolls:s,phase:"roll",currentTurn:0,consecutiveSixes:0,turnOrder:a}}function Of(i,t,e,n,r,s){for(const[o,a]of Object.entries(e)){if(o===t)continue;const c=n[o];let u=0;for(const h of a)if(h.progress>=0&&h.progress<r&&Le(h.progress,c,s)===i&&++u>=2)return!0}return!1}function kR(i,t,e,n,r,s,o,a){if(i<0)return!1;const c=Math.min(t,a);for(let u=i+1;u<c;u++)if(Of(Le(u,e,o),n,r,s,a,o))return!0;return!1}function zR(i,t,e,n){const{pathLen:r}=Fn[n],s=i.pieces[t],o=new Set(i.shackled?.[t]??[]),a=[];for(let c=0;c<s.length;c++){if(o.has(c))continue;const u=s[c].progress;if(u<0||u>=r)continue;const h=u-e<0?-1:u-e;a.push({pieceIndex:c,from:u,to:h,reverse:!0})}return a}function HR(i,t,e,n,r,s){const{pathLen:o,colLen:a}=Fn[n],c=q_(n),u=i.pieces[t],h=s[t],f=new Set(i.shackled?.[t]??[]),d=[],m=[],S=[];for(let v=0;v<u.length;v++){if(f.has(v))continue;const D=u[v].progress;if(D===c)continue;let R;if(D===-1){if(e!==6)continue;R=0}else if(D<o){const x=Uf(D,h,n);if(e<=x)R=D+e;else{const T=e-x;if(T>a)continue;R=T===a?c:o+(T-1)}}else{const T=D-o+e;if(T>a)continue;R=T===a?c:o+T}if(R>=0&&R<o){const x=Le(R,h,n);if(Of(x,t,i.pieces,s,o,n))continue}const z=(R!==c?OR(u,R,v,c):0)>=2;kR(D,R,h,t,i.pieces,s,n,o)?z||m.push({pieceIndex:v,from:D,to:R}):z?S.push({pieceIndex:v,from:D,to:R}):d.push({pieceIndex:v,from:D,to:R})}function M(v){if(r!=="remix"||v.length===0)return v;const D=v.filter(R=>R.to<0||R.to>=o||!Nf(Le(R.to,h,n),n));return D.length>0?D:v}const g=M(d);if(g.length>0)return g;if(e===6&&m.length>0)return M(m);if(S.length>0){const v=FR(u,c);if(v.size>0){const D=S.filter(R=>v.has(R.pieceIndex));if(D.length>0)return D.map(R=>({...R,forceSplit:!0}))}}return[]}function GR(i,t){return{...i,phase:"move",diceValue:t}}function rc(i,t,e,n,r,s){const{pathLen:o,colLen:a}=Fn[n],c=q_(n),u=i.diceValue,h=s[t],f=WR(i.pieces);if(f[t][e.pieceIndex].progress=e.to,e.to>=0&&e.to<o){const U=Le(e.to,h,n);if(!pm(U,n))for(const[x,T]of Object.entries(f)){if(x===t)continue;const C=s[x];for(const _ of T){if(_.progress<0||_.progress>=o||Le(_.progress,C,n)!==U)continue;T.filter(P=>P.progress>=0&&P.progress<o&&Le(P.progress,C,n)===U).length<2&&(_.progress=-1)}}}let d=!1;if(r==="remix"&&e.to>=0&&e.to<o){const U=Le(e.to,h,n);Nf(U,n)&&(f[t][e.pieceIndex].progress=-1,d=!0)}if(r==="remix"&&!d){const U=f[t][e.pieceIndex].progress;if(U>=0&&U<o){const x=Le(U,h,n);if($_(x,n)){const C=Uf(U,h,n);let _;if(6<=C)_=U+6;else{const y=6-C;_=y<=a?o+(y-1):o+a-1}if(f[t][e.pieceIndex].progress=_,_>=0&&_<o){const y=Le(_,h,n);if(!pm(y,n))for(const[P,A]of Object.entries(f)){if(P===t)continue;const X=s[P];for(const Q of A){if(Q.progress<0||Q.progress>=o||Le(Q.progress,X,n)!==y)continue;A.filter(nt=>nt.progress>=0&&nt.progress<o&&Le(nt.progress,X,n)===y).length<2&&(Q.progress=-1)}}}}else if(j_(x,n))for(const[C,_]of Object.entries(f)){if(C===t)continue;const y=s[C];for(const P of _){if(P.progress<0||P.progress>=o)continue;const A=Le(P.progress,y,n);Math.min(Math.abs(A-x),o-Math.abs(A-x))<=3&&(P.progress=-1)}}else if(K_(x,n)){let T=null,C=-1,_=-1;for(const[y,P]of Object.entries(f)){if(y===t)continue;const A=s[y];P.forEach((X,Q)=>{if(X.progress<0||X.progress>=o)return;const j=Le(X.progress,A,n);j>_&&(_=j,T=y,C=Q)})}if(T!==null&&C>=0){const y=Le(U,h,n);f[t][e.pieceIndex].progress=mm(_,h,n),f[T][C].progress=mm(y,s[T],n)}}}}const m={};for(const[U,x]of Object.entries(i.pendingCurse??{}))m[U]=[...x];const S={...i.shackled??{}},M={...i.pendingShackle??{}};if(m[t]=(m[t]??[]).slice(1),r==="remix"&&!d){const U=f[t][e.pieceIndex].progress;if(U>=0&&U<o){const x=Le(U,h,n);if(Y_(x,n))m[t]=[...m[t]??[],"skip"];else if(Q_(x,n))m[t]=[...m[t]??[],"reverse"];else if(Z_(x,n))m[t]=[...m[t]??[],"fumble"];else if(J_(x,n)){const T=M[t]??[];T.includes(e.pieceIndex)||(M[t]=[...T,e.pieceIndex])}}}let g=i.winner;d||f[t].every(U=>U.progress===c)&&(g=t);const v=!d&&r==="remix"&&e.to>=0&&e.to<o&&X_(Le(e.to,h,n),n),D=u===6?i.consecutiveSixes+1:0,R=u===6||v;let N=i.currentTurn,z=D;return g?z=0:R||(N=(i.currentTurn+1)%i.turnOrder.length,z=0,S[t]=M[t]??[],delete M[t]),{...i,pieces:f,phase:"roll",diceValue:null,currentTurn:N,consecutiveSixes:z,winner:g,pendingCurse:m,shackled:S,pendingShackle:M}}function ev(i){const t=i.turnOrder[i.currentTurn],e={};for(const[s,o]of Object.entries(i.pendingCurse??{}))e[s]=[...o];e[t]=(e[t]??[]).slice(1);const n={...i.shackled??{}},r={...i.pendingShackle??{}};return n[t]=r[t]??[],delete r[t],{...i,pendingCurse:e,shackled:n,pendingShackle:r,phase:"roll",diceValue:null,consecutiveSixes:0,currentTurn:(i.currentTurn+1)%i.turnOrder.length}}function WR(i){const t={};for(const[e,n]of Object.entries(i))t[e]=n.map(r=>({...r}));return t}function qR(i,t,e,n,r,s){const o=new Map,{pathLen:a,colLen:c}=Fn[n],u=a+c,h=i.pieces[t],f=r[t],d=new Set(i.shackled?.[t]??[]);for(let m=0;m<h.length;m++){if(s.has(m))continue;const S=h[m].progress;if(S===u)continue;if(d.has(m)){o.set(m,"shackled");continue}let M=null;if(S===-1)e===6&&(M=0);else if(S<a){const v=Uf(S,f,n);if(e<=v)M=S+e;else{const D=e-v;D<=c&&(M=a+(D-1))}}else{const D=S-a+e;D<=c&&(M=a+D)}if(M===null||M<0||M>=a)continue;const g=Le(M,f,n);Of(g,t,i.pieces,r,a,n)&&o.set(m,"blockade")}return o}function XR(i,t){return X_(i,t)?"star":Nf(i,t)?"skull":$_(i,t)?"boost":j_(i,t)?"bomb":K_(i,t)?"swap":Y_(i,t)?"skip":Q_(i,t)?"reverse":Z_(i,t)?"fumble":J_(i,t)?"shackle":null}const Sn=i=>oR(CR,"ludoex","rooms","list",i);function gm(){return Math.random().toString(36).substring(2,8).toUpperCase()}function nv(){return Math.random().toString(36).substring(2,12)}async function $R(i,t){let e=gm();for(let a=0;a<5&&(await la(Sn(e))).exists();a++)e=gm();const n=nv(),r={id:n,name:i,color:V_[0],isHost:!0,connected:!0},o={code:e,hostId:n,status:"waiting",mode:t,boardType:"standard",players:{[n]:r},createdAt:Date.now()};return await xR(Sn(e),o),{room:o,playerId:n}}async function iv(i,t){const e=await la(Sn(i));if(!e.exists())throw new Error("Room not found");const n=e.data(),r=Object.values(n.players).find(h=>h.autoBot===!0&&h.name===t);if(r)return await gr(Sn(i),{[`players.${r.id}.autoBot`]:!1,[`players.${r.id}.connected`]:!0}),{room:{...n,players:{...n.players,[r.id]:{...r,autoBot:!1,connected:!0}}},playerId:r.id};if(n.status!=="waiting")throw new Error("Game already started");if(Object.keys(n.players).length>=8)throw new Error("Room is full");const o=Object.values(n.players).map(h=>h.color),a=V_.find(h=>!o.includes(h)),c=nv(),u={id:c,name:t,color:a,isHost:!1,connected:!0};return await gr(Sn(i),{[`players.${c}`]:u}),{room:{...n,players:{...n.players,[c]:u}},playerId:c}}async function Ff(i,t){const e=await la(Sn(i));if(!e.exists())return;const n=e.data(),r=Object.values(n.players).filter(o=>o.id!==t);if(!r.some(o=>!o.name.startsWith("Bot ")&&!o.autoBot)){await TR(Sn(i));return}if(n.hostId===t){const o=r.find(a=>!a.name.startsWith("Bot "))??r[0];await gr(Sn(i),{hostId:o.id,[`players.${o.id}.isHost`]:!0,[`players.${t}`]:hm()})}else await gr(Sn(i),{[`players.${t}`]:hm()})}async function jR(i,t){const e=await la(Sn(i));if(!e.exists())throw new Error("Room not found");const n=e.data();if(n.hostId!==t)throw new Error("Only host can start");const r=Object.keys(n.players).length;if(r<2)throw new Error("Need at least 2 players");const s=r<=4?"standard":"octagonal",o=Object.keys(n.players);for(const[c,u]of Object.entries(n.players))u.color;const a=tv(o);await gr(Sn(i),{status:"playing",boardType:s,gameState:a})}async function KR(i,t){await gr(Sn(i),{gameState:t})}async function Pl(i,t,e){await gr(Sn(i),{[`players.${t}.autoBot`]:e})}async function YR(i,t){const e=await la(Sn(i));if(!e.exists())return;const n=e.data();if(n.hostId!==t)throw new Error("Only host can rematch");const r=Object.keys(n.players),s={};for(const[a,c]of Object.entries(n.players))s[a]=c.color;const o=tv(r,s,n.boardType);await gr(Sn(i),{gameState:o})}function rv(i,t){return MR(Sn(i),e=>{t(e.exists()?e.data():null)})}let Ci=null,Dl=null,Ll=null;function so(i){document.getElementById("ui-overlay").innerHTML=QR(),ZR(i)}function QR(){return`
    <div class="lobby-screen">
      <div class="lobby-card">
        <h1 class="game-title">Ludo<span class="title-ex">EX</span></h1>
        <p class="game-subtitle">Classic Ludo. Reimagined.</p>
        <div class="lobby-actions">
          <button class="btn btn-primary" id="btn-create">Create Room</button>
          <button class="btn btn-secondary" id="btn-join">Join Room</button>
        </div>
      </div>
    </div>
  `}function ZR(i){document.getElementById("btn-create").addEventListener("click",()=>JR(i)),document.getElementById("btn-join").addEventListener("click",()=>tC(i))}function JR(i){document.getElementById("ui-overlay").innerHTML=`
    <div class="lobby-screen">
      <div class="lobby-card">
        <h2>Create Room</h2>
        <div class="form-group">
          <label>Your name</label>
          <input id="input-name" class="input" type="text" maxlength="16" placeholder="Enter name" autocomplete="off" />
        </div>
        <div class="form-group">
          <label>Game mode</label>
          <div class="mode-toggle">
            <button class="mode-btn active" data-mode="classic">Classic</button>
            <button class="mode-btn" data-mode="remix">Remix</button>
          </div>
        </div>
        <div id="form-error" class="form-error hidden"></div>
        <div class="form-actions">
          <button class="btn btn-ghost" id="btn-back">Back</button>
          <button class="btn btn-primary" id="btn-confirm">Create</button>
        </div>
      </div>
    </div>
  `;let t="classic";document.querySelectorAll(".mode-btn").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".mode-btn").forEach(n=>n.classList.remove("active")),e.classList.add("active"),t=e.dataset.mode})}),document.getElementById("btn-back").addEventListener("click",()=>so(i)),document.getElementById("btn-confirm").addEventListener("click",async()=>{const e=document.getElementById("input-name").value.trim();if(!e)return Fr("Enter a name");try{Nl(!0);const{room:n,playerId:r}=await $R(e,t);Dl=n.code,Ll=r,sv(n,r,i)}catch(n){Fr(n.message),Nl(!1)}}),document.getElementById("input-name").focus()}function tC(i){document.getElementById("ui-overlay").innerHTML=`
    <div class="lobby-screen">
      <div class="lobby-card">
        <h2>Join Room</h2>
        <div class="form-group">
          <label>Your name</label>
          <input id="input-name" class="input" type="text" maxlength="16" placeholder="Enter name" autocomplete="off" />
        </div>
        <div class="form-group">
          <label>Room code</label>
          <input id="input-code" class="input input-code" type="text" maxlength="6" placeholder="ABC123" autocomplete="off" />
        </div>
        <div id="form-error" class="form-error hidden"></div>
        <div class="form-actions">
          <button class="btn btn-ghost" id="btn-back">Back</button>
          <button class="btn btn-primary" id="btn-confirm">Join</button>
        </div>
      </div>
    </div>
  `,document.getElementById("input-code").addEventListener("input",t=>{const e=t.target;e.value=e.value.toUpperCase()}),document.getElementById("btn-back").addEventListener("click",()=>so(i)),document.getElementById("btn-confirm").addEventListener("click",async()=>{const t=document.getElementById("input-name").value.trim(),e=document.getElementById("input-code").value.trim();if(!t)return Fr("Enter a name");if(e.length!==6)return Fr("Code must be 6 characters");try{Nl(!0);const{room:n,playerId:r}=await iv(e,t);Dl=n.code,Ll=r,n.status==="playing"?(window.addEventListener("beforeunload",Vf),i.onGameStart(n,r)):sv(n,r,i)}catch(n){Fr(n.message),Nl(!1)}}),document.getElementById("input-name").focus()}function sv(i,t,e){_m(i,t,e),Ci&&Ci(),Ci=rv(i.code,n=>{if(!n)return so(e);if(n.status==="playing"){Ci&&(Ci(),Ci=null),e.onGameStart(n,t);return}_m(n,t,e)}),window.addEventListener("beforeunload",Vf)}function _m(i,t,e){const n=Object.values(i.players),r=i.hostId===t,s=r&&n.length>=2,o=r&&n.length<8;document.getElementById("ui-overlay").innerHTML=`
    <div class="lobby-screen">
      <div class="lobby-card waiting-card">
        <div class="waiting-header">
          <h2>Room <span class="room-code">${i.code}</span></h2>
          <span class="mode-badge mode-${i.mode}">${i.mode}</span>
        </div>
        <p class="waiting-hint">Share the code with friends</p>
        <div class="player-list">
          ${n.map(a=>`
            <div class="player-slot">
              <div class="player-color-dot" style="background:${di[a.color]}"></div>
              <span class="player-name">${eC(a.name)}</span>
              ${a.isHost?'<span class="host-badge">HOST</span>':""}
              ${a.id===t?'<span class="you-badge">YOU</span>':""}
              ${a.name.startsWith("Bot ")?'<span class="bot-badge">BOT</span>':""}
            </div>
          `).join("")}
          ${Array.from({length:8-n.length},(a,c)=>`
            <div class="player-slot player-slot-empty">
              <div class="player-color-dot empty"></div>
              <span class="player-name-empty">Waiting${c===0&&n.length<8?"...":""}</span>
            </div>
          `).join("")}
        </div>
        <div id="form-error" class="form-error hidden"></div>
        <div class="form-actions">
          <button class="btn btn-ghost" id="btn-leave">Leave</button>
          ${r&&o?'<button class="btn btn-ghost" id="btn-add-bot">+ Bot</button>':""}
          ${r?`<button class="btn btn-primary" id="btn-start" ${s?"":"disabled"}>
            ${s?"Start Game":"Need 2+ players"}
          </button>`:'<p class="waiting-for-host">Waiting for host to start...</p>'}
        </div>
      </div>
    </div>
  `,document.getElementById("btn-leave")?.addEventListener("click",async()=>{Ci&&(Ci(),Ci=null),window.removeEventListener("beforeunload",Vf),await Ff(i.code,t),so(e)}),r&&(document.getElementById("btn-add-bot")?.addEventListener("click",async()=>{const a=n.filter(c=>c.name.startsWith("Bot ")).length;try{await iv(i.code,`Bot ${a+1}`)}catch(c){Fr(c.message)}}),document.getElementById("btn-start")?.addEventListener("click",async()=>{try{await jR(i.code,t)}catch(a){Fr(a.message)}}))}function Vf(){Dl&&Ll&&Ff(Dl,Ll)}function Fr(i){const t=document.getElementById("form-error");t&&(t.textContent=i,t.classList.remove("hidden"))}function Nl(i){const t=document.getElementById("btn-confirm");t&&(t.disabled=i)}function eC(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}class nC{constructor(t){we(this,"renderer");we(this,"scene");we(this,"camera");we(this,"theta",0);we(this,"height",16);we(this,"radius",5);we(this,"isDragging",!1);we(this,"prevX",0);we(this,"animId",0);we(this,"camPos",new H);we(this,"camGoal",new H);we(this,"lookPos",new H);we(this,"lookGoal",new H);we(this,"lerping",!1);we(this,"onResize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))});this.renderer=new OT({canvas:t,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=wm,this.renderer.toneMapping=Rm,this.renderer.toneMappingExposure=1.1,this.scene=new FT,this.scene.background=new Ut(657935),this.scene.fog=new jh(657935,.018),this.camera=new zn(50,window.innerWidth/window.innerHeight,.1,120),this.updateCamera(),this.setupLights(),this.setupControls(t),window.addEventListener("resize",this.onResize)}setupLights(){this.scene.add(new HT(16777215,.35));const t=new $c(16774624,1.6);t.position.set(5,14,6),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),t.shadow.camera.near=.1,t.shadow.camera.far=60,t.shadow.camera.left=t.shadow.camera.bottom=-18,t.shadow.camera.right=t.shadow.camera.top=18,this.scene.add(t);const e=new $c(10536191,.5);e.position.set(-5,8,-4),this.scene.add(e);const n=new $c(16766629,.3);n.position.set(0,-4,-10),this.scene.add(n)}setupControls(t){t.addEventListener("mousedown",e=>{e.button===0&&(this.isDragging=!0,this.prevX=e.clientX)}),t.addEventListener("mousemove",e=>{this.isDragging&&(this.theta+=(e.clientX-this.prevX)*.006,this.prevX=e.clientX,this.cancelFocus())}),t.addEventListener("mouseup",()=>this.isDragging=!1),t.addEventListener("mouseleave",()=>this.isDragging=!1),t.addEventListener("touchstart",e=>{this.isDragging=!0,this.prevX=e.touches[0].clientX},{passive:!0}),t.addEventListener("touchmove",e=>{this.isDragging&&(this.theta+=(e.touches[0].clientX-this.prevX)*.006,this.prevX=e.touches[0].clientX,this.cancelFocus())},{passive:!0}),t.addEventListener("touchend",()=>this.isDragging=!1),t.addEventListener("wheel",e=>{this.height=Math.max(8,Math.min(28,this.height+e.deltaY*.02)),this.cancelFocus()},{passive:!0})}updateCamera(){const t=this.radius*Math.sin(this.theta),e=this.radius*Math.cos(this.theta);this.camPos.set(t,this.height,e),this.camGoal.copy(this.camPos),this.lookPos.set(0,0,0),this.lookGoal.set(0,0,0),this.camera.position.copy(this.camPos),this.camera.lookAt(this.lookPos)}cancelFocus(){this.lerping=!1,this.updateCamera()}focusOn(t){const e=t.x,n=t.z,r=Math.sqrt(e*e+n*n),s=r>.5?e/r:0,o=r>.5?n/r:1;this.camGoal.set(t.x+s*5,t.y+7,t.z+o*5),this.lookGoal.set(t.x,t.y+.3,t.z),this.lerping=!0}returnToOverview(){this.camGoal.set(this.radius*Math.sin(this.theta),this.height,this.radius*Math.cos(this.theta)),this.lookGoal.set(0,0,0),this.lerping=!0}tick(t){if(!this.lerping)return;const e=Math.min(5*t,1);this.camPos.lerp(this.camGoal,e),this.lookPos.lerp(this.lookGoal,e),this.camera.position.copy(this.camPos),this.camera.lookAt(this.lookPos),this.camPos.distanceTo(this.camGoal)<.04&&this.lookPos.distanceTo(this.lookGoal)<.04&&(this.lerping=!1)}start(t){const e=()=>{t(),this.renderer.render(this.scene,this.camera),this.animId=requestAnimationFrame(e)};e()}stop(){cancelAnimationFrame(this.animId)}dispose(){this.stop(),window.removeEventListener("resize",this.onResize)}}const vm=.92,Kr=.09,kn=7,Ts=new ki(vm,Kr,vm),ym=new hr(.4,.4,Kr,20),ov=new hr(.32,.32,Kr+.01,24);function on(i,t={}){return new Wr({color:i,...t})}const Zt={track:on(15789280),safe:on(16771210,{roughness:.4}),star:on(8308963,{roughness:.2,metalness:.25,emissive:2792639,emissiveIntensity:.35}),skull:on(13073919,{roughness:.2,metalness:.1,emissive:10040319,emissiveIntensity:.4}),boost:on(16769075,{roughness:.2,metalness:.3,emissive:13934592,emissiveIntensity:.4}),bomb:on(16737826,{roughness:.2,metalness:.1,emissive:13382400,emissiveIntensity:.45}),swap:on(58828,{roughness:.2,metalness:.25,emissive:43673,emissiveIntensity:.4}),skip:on(13378116,{roughness:.2,metalness:.1,emissive:8912930,emissiveIntensity:.45}),reverse:on(5596910,{roughness:.2,metalness:.15,emissive:2241450,emissiveIntensity:.4}),fumble:on(11560992,{roughness:.3,metalness:.1,emissive:8404992,emissiveIntensity:.35}),shackle:on(5596791,{roughness:.3,metalness:.3,emissive:3359829,emissiveIntensity:.3}),center:on(16766720,{roughness:.2,metalness:.5}),board:on(1973806),inactive:on(2500154,{roughness:.9}),homeArea:i=>on(new Ut(i).multiplyScalar(.5),{roughness:.8}),homeCol:i=>on(new Ut(i).multiplyScalar(.68),{roughness:.6}),base:i=>on(new Ut(i).multiplyScalar(.42),{roughness:.7})};function en(i,t,e,n){const s=document.createElement("canvas");s.width=s.height=64;const o=s.getContext("2d");o.clearRect(0,0,64,64),o.fillStyle=t,o.font=`bold ${64*.68}px serif`,o.textAlign="center",o.textBaseline="middle",o.fillText(i,64/2,64/2);const a=new Kh(s),c=new Ce(new Jo(.62,.62),new qh({map:a,transparent:!0,depthWrite:!1}));return c.rotation.x=-Math.PI/2,c.position.set(e,Kr+.006,n),c}function Ii(i,t,e,n,r={}){const s=new Ce(i,t.clone());return s.position.set(e,Kr/2,n),s.receiveShadow=!0,Object.assign(s.userData,r),s}const iC={red:[0,0,5,5],blue:[9,0,14,5],yellow:[9,9,14,14],green:[0,9,5,14]},rC=[["red",6,6],["blue",8,6],["green",6,8],["yellow",8,8]],sC=[["red",6,7],["blue",7,6],["yellow",8,7],["green",7,8]],oC={red:0,blue:13,yellow:26,green:39};function aC(i,t,e){const n=new Ji,r=new Set(t.slice(0,4)),s=new Ce(new ki(15.4,.06,15.4),Zt.board);s.position.y=-.04,s.receiveShadow=!0,n.add(s);for(const c of dm){const u=di[c],h=r.has(c),[f,d,m,S]=iC[c];for(let M=f;M<=m;M++)for(let g=d;g<=S;g++){const v=h&&Df[c].some(([D,R])=>D===M&&R===g);n.add(Ii(v?ov:Ts,v?Zt.base(u):h?Zt.homeArea(u):Zt.inactive,M-kn,g-kn,{type:"home-area",color:c,active:h}))}}B_.forEach(([c,u],h)=>{let f;const d=c-kn,m=u-kn;if(z_.has(h)){const S=Object.entries(oC).find(([,M])=>M===h);f=S&&r.has(S[0])?Zt.homeArea(di[S[0]]):Zt.safe}else e==="remix"&&mh.has(h)?f=Zt.star:e==="remix"&&gh.has(h)?f=Zt.skull:e==="remix"&&_h.has(h)?f=Zt.boost:e==="remix"&&vh.has(h)?f=Zt.bomb:e==="remix"&&yh.has(h)?f=Zt.swap:e==="remix"&&Eh.has(h)?f=Zt.skip:e==="remix"&&Sh.has(h)?f=Zt.reverse:e==="remix"&&xh.has(h)?f=Zt.fumble:e==="remix"&&Th.has(h)?f=Zt.shackle:f=Zt.track;n.add(Ii(Ts,f,d,m,{type:"path",pathIndex:h})),e==="remix"&&(mh.has(h)&&n.add(en("★","#ffe066",d,m)),gh.has(h)&&n.add(en("☠","#ffffff",d,m)),_h.has(h)&&n.add(en("⚡","#1a1a00",d,m)),vh.has(h)&&n.add(en("💣","#ffffff",d,m)),yh.has(h)&&n.add(en("↔","#001a1a",d,m)),Eh.has(h)&&n.add(en("🚫","#ffffff",d,m)),Sh.has(h)&&n.add(en("↩","#ffffff",d,m)),xh.has(h)&&n.add(en("½","#fff0cc",d,m)),Th.has(h)&&n.add(en("🔒","#ffffff",d,m)))});for(const c of dm){const u=di[c],h=r.has(c);k_[c].forEach(([f,d],m)=>{n.add(Ii(Ts,h?Zt.homeCol(u):Zt.track,f-kn,d-kn,{type:"home-col",color:c,homeColIndex:m}))})}for(const[c,u,h]of rC){const f=r.has(c);n.add(Ii(Ts,f?Zt.homeArea(di[c]):Zt.track,u-kn,h-kn,{type:"junction",color:c}))}for(const[c,u,h]of sC){const f=r.has(c);n.add(Ii(Ts,f?Zt.homeCol(di[c]):Zt.track,u-kn,h-kn,{type:"home-col",color:c,homeColIndex:5}))}const[o,a]=IR;return n.add(Ii(Ts,Zt.center,o-kn,a-kn,{type:"center"})),i.add(n),n}function lC(i,t,e,n,r=10){const s=[],o=[];for(let c=0;c<=r;c++){const u=i-n+2*n*c/r;s.push(t*Math.cos(u),0,t*Math.sin(u)),s.push(e*Math.cos(u),0,e*Math.sin(u))}for(let c=0;c<r;c++){const u=c*2;o.push(u,u+2,u+1),o.push(u+1,u+2,u+3)}const a=new $n;return a.setAttribute("position",new un(s,3)),a.setIndex(o),a.computeVertexNormals(),a}function cC(i,t,e){const n=new Ji,r=new Set(t.slice(0,8)),s=H_(),o=new Ce(new hr(13,13,.06,16),Zt.board);o.position.y=-.04,n.add(o),Il.forEach((c,u)=>{const h=r.has(c),f=di[c],d=(u+.5)/8*Math.PI*2-Math.PI/2,m=h?new Wr({color:new Ut(f).multiplyScalar(.38),roughness:.85}):new Wr({color:1710634,roughness:.95}),S=new Ce(lC(d,9.4,12.8,Math.PI/8),m);S.position.y=.01,S.receiveShadow=!0,S.userData={type:"home-area",color:c},n.add(S),h&&Lf(u).forEach(([M,g])=>{n.add(Ii(ov,Zt.base(f),M,g,{type:"home-area",color:c}))})}),s.forEach(([c,u],h)=>{let f;W_.has(h)?f=Zt.safe:e==="remix"&&Mh.has(h)?f=Zt.star:e==="remix"&&Ah.has(h)?f=Zt.skull:e==="remix"&&wh.has(h)?f=Zt.boost:e==="remix"&&bh.has(h)?f=Zt.bomb:e==="remix"&&Rh.has(h)?f=Zt.swap:e==="remix"&&Ch.has(h)?f=Zt.skip:e==="remix"&&Ih.has(h)?f=Zt.reverse:e==="remix"&&Ph.has(h)?f=Zt.fumble:e==="remix"&&Dh.has(h)?f=Zt.shackle:f=Zt.track,n.add(Ii(ym,f,c,u,{type:"path",pathIndex:h})),e==="remix"&&(Mh.has(h)&&n.add(en("★","#ffe066",c,u)),Ah.has(h)&&n.add(en("☠","#ffffff",c,u)),wh.has(h)&&n.add(en("⚡","#1a1a00",c,u)),bh.has(h)&&n.add(en("💣","#ffffff",c,u)),Rh.has(h)&&n.add(en("↔","#001a1a",c,u)),Ch.has(h)&&n.add(en("🚫","#ffffff",c,u)),Ih.has(h)&&n.add(en("↩","#ffffff",c,u)),Ph.has(h)&&n.add(en("½","#fff0cc",c,u)),Dh.has(h)&&n.add(en("🔒","#ffffff",c,u)))}),Il.forEach((c,u)=>{const h=r.has(c),f=di[c];G_(u,6).forEach(([d,m],S)=>{n.add(Ii(ym,h?Zt.homeCol(f):Zt.track,d,m,{type:"home-col",color:c,homeColIndex:S,active:h}))})});const a=new Ce(new hr(2.3,2.3,Kr,16),Zt.center);return a.position.y=Kr/2,a.userData={type:"center"},n.add(a),i.add(n),n}let Ka=null;function uC(i){if(Ka&&Ka!==i){const t=Ka.material;t.emissive.set(0),t.emissiveIntensity=0}if(i){const t=i.material;t.emissive.set(16777215),t.emissiveIntensity=.18}Ka=i}const Qi=7,hC=new hr(.18,.22,.38,20),fC=new Gl(.16,16,12),dC=new ta(.18,.03,8,20),pC=new hr(.25,.3,.34,20),Em=new Gl(.155,14,10),mC=new ta(.26,.04,8,22);function Ns(i,t={}){return new Wr({color:i,...t})}function gC(i){const t=new Ut(di[i]),e=t.clone().multiplyScalar(.5),n=Ns(t,{metalness:.4,roughness:.3}),r=Ns(e,{metalness:.5,roughness:.2}),s=Ns(new Ut(16766720),{metalness:.8,roughness:.2}),o=new Ji,a=new Ce(hC,n);a.position.y=.19,a.castShadow=!0,o.add(a);const c=new Ce(fC,r);c.position.y=.48,c.castShadow=!0,o.add(c);const u=new Ce(dC,s);return u.position.y=.28,u.rotation.x=Math.PI/2,o.add(u),o}function _C(i){const t=new Ut(di[i]),e=t.clone().multiplyScalar(.5),n=Ns(t,{metalness:.45,roughness:.28}),r=Ns(e,{metalness:.55,roughness:.18}),s=Ns(new Ut(16766720),{metalness:.85,roughness:.15}),o=new Ji,a=new Ce(pC,n);a.position.y=.17,a.castShadow=!0,o.add(a);const c=new Ce(Em,r);c.position.set(-.15,.5,0),c.castShadow=!0,o.add(c);const u=new Ce(Em,r);u.position.set(.15,.5,0),u.castShadow=!0,o.add(u);const h=new Ce(mC,s);return h.position.y=.26,h.rotation.x=Math.PI/2,o.add(h),o}function vC(i,t,e){const n=[];return t.forEach(r=>{(e==="standard"?Df[r]??[]:Lf(Il.indexOf(r))).forEach((o,a)=>{const[c,u]=e==="standard"?[o[0]-Qi,o[1]-Qi]:o,h=gC(r);h.position.set(c,0,u),h.userData={color:r,pieceIndex:a,state:"base",pathIndex:-1,homeColIndex:-1},i.add(h),n.push({group:h,color:r,pieceIndex:a})})}),n}const yC=1.2,EC=3.5,Vr=[];function Lh(i,t,e,n){const r=AC(i.color,t,e);if(!r)return;const s=new H(r[0],0,r[1]);if(Vr.some(u=>u.piece===i))return;const o=r[0]-i.group.position.x,a=r[1]-i.group.position.z,c=Math.sqrt(o*o+a*a);if(c<.02){i.group.position.copy(s),n?.();return}Vr.push({piece:i,target:s,initialDist:c,onDone:n}),i.group.userData={...i.group.userData,state:e.type,pathIndex:e.type==="path"?e.index:-1,homeColIndex:e.type==="home-col"?e.index:-1}}function SC(i){for(let t=Vr.length-1;t>=0;t--){const e=Vr[t],n=e.piece.group.position,r=Math.sqrt((n.x-e.target.x)**2+(n.z-e.target.z)**2);if(r<.02){n.copy(e.target),e.onDone?.(),Vr.splice(t,1);continue}const s=e.initialDist>0?1-r/e.initialDist:1,o=Math.sin(Math.max(0,Math.min(s,1))*Math.PI)*yC;n.lerp(e.target,Math.min(EC*i/r,1)),n.y=o}}function Nh(i){return Vr.some(t=>t.piece===i)}function xC(){Vr.length=0}const Wn=new Map;function av(i,t,e){const[n,r]=t<e?[t,e]:[e,t];return`${i}-${n}-${r}`}function lv(i,t,e,n,r,s){const{pathLen:o,colLen:a}=Fn[e],c=o+a,u=new Map;for(const[h,f]of Object.entries(t.pieces)){const d=r[h];if(!d)continue;const m=new Map;f.forEach((S,M)=>{S.progress<0||S.progress>=c||(m.has(S.progress)||m.set(S.progress,[]),m.get(S.progress).push(M))});for(const S of m.values())if(S.length===2){const[M,g]=S[0]<S[1]?[S[0],S[1]]:[S[1],S[0]],v=av(d,M,g);u.set(v,{color:d,i:M,j:g})}}for(const[h,f]of Wn)u.has(h)||(n.remove(f.group),Wn.delete(h),i.filter(d=>d.color===f.color&&f.indices.includes(d.pieceIndex)).forEach(d=>{d.group.visible=!0}));for(const[h,{color:f,i:d,j:m}]of u){if(Wn.has(h))continue;const S=i.find(v=>v.color===f&&v.pieceIndex===d),M=i.find(v=>v.color===f&&v.pieceIndex===m);if(!S||!M||Nh(S)||Nh(M)||s(S)||s(M))continue;const g=_C(f);g.position.copy(S.group.position),g.userData={type:"piece",merged:!0,color:f,pieceIndices:[d,m]},n.add(g),Wn.set(h,{group:g,color:f,indices:[d,m]}),S.group.visible=!1,M.group.visible=!1}}function cv(i,t,e,n){const r=av(t,e[0],e[1]),s=Wn.get(r);s&&(n.remove(s.group),Wn.delete(r),i.filter(o=>o.color===t&&e.includes(o.pieceIndex)).forEach(o=>{o.group.visible=!0}))}function uv(i,t){for(const e of Wn.values())if(e.color===i&&e.indices.includes(t))return e.group;return null}function TC(){return Array.from(Wn.values()).map(i=>i.group)}function Bf(i,t,e,n){for(const[r,s]of Wn)if(s.color===t&&s.indices.includes(e)){n.remove(s.group),Wn.delete(r),i.filter(o=>o.color===t&&s.indices.includes(o.pieceIndex)).forEach(o=>{o.group.visible=!0});return}}function MC(i,t){for(const e of Wn.values())i.remove(e.group),t.filter(n=>n.color===e.color&&e.indices.includes(n.pieceIndex)).forEach(n=>{n.group.visible=!0});Wn.clear()}function AC(i,t,e){if(e.type==="finished"){const n=e.index/4*Math.PI*2;return[Math.cos(n)*.18,Math.sin(n)*.18]}if(t==="standard"){if(e.type==="base"){const n=Df[i]?.[e.index];return n?[n[0]-Qi,n[1]-Qi]:null}if(e.type==="path"){const n=B_[e.index];return n?[n[0]-Qi,n[1]-Qi]:null}if(e.type==="home-col"){const n=k_[i]?.[e.index];return n?[n[0]-Qi,n[1]-Qi]:null}}else{const n=Il.indexOf(i);if(e.type==="base")return Lf(n)[e.index]??null;if(e.type==="path")return H_()[e.index]??null;if(e.type==="home-col")return G_(n)[e.index]??null}return null}const Br=[],cl=new WeakSet;function Ul(i){return cl.has(i)}function wC(i){for(let t=Br.length-1;t>=0;t--){const e=Br[t];e.elapsed+=i;const n=Math.min(e.elapsed/e.duration,1);e.tick(n,i),n>=1&&(e.onEnd(),Br.splice(t,1))}}function bC(){Br.length=0}function RC(i,t,e){if(cl.has(i))return;cl.add(i);const n=()=>{cl.delete(i),e()},r=Math.floor(Math.random()*3);r===0?CC(i,n):r===1?IC(i,n):PC(i,t,n)}function CC(i,t){const e=i.group,n=e.position.y;Br.push({elapsed:0,duration:.42,tick(r){if(r<.45){const s=r/.45;e.scale.set(1+s*.9,1-s*.88,1+s*.9),e.position.y=n-s*.06}else{const s=1-(r-.45)/.55;e.scale.setScalar(s*.6),e.position.y=n+(1-s)*.35}},onEnd(){e.scale.set(1,1,1),e.position.y=n,t()}})}function IC(i,t){const e=i.group,n=e.rotation.x,r=e.rotation.z,s=e.position.y,o=Math.random()>.5?1:-1,a=e.children.map(c=>({obj:c,origPos:c.position.clone(),origRot:c.rotation.clone(),vx:(Math.random()-.5)*5,vy:Math.random()*3+.5,vz:(Math.random()-.5)*5,vrx:(Math.random()-.5)*14,vrz:(Math.random()-.5)*14}));Us(e,1,!0),Br.push({elapsed:0,duration:.85,tick(c,u){if(c<.28){const h=c/.28;e.rotation.x=n+o*iu(h)*Math.PI*.45,e.rotation.z=r+o*iu(h)*Math.PI*.15,e.position.y=s+iu(h)*.1}else{a.forEach(d=>{d.obj.position.x+=d.vx*u,d.obj.position.y+=d.vy*u,d.obj.position.z+=d.vz*u,d.vy-=14*u,d.obj.rotation.x+=d.vrx*u,d.obj.rotation.z+=d.vrz*u});const f=(c-.28)/.72;Us(e,1-f,!0)}},onEnd(){a.forEach(c=>{c.obj.position.copy(c.origPos),c.obj.rotation.copy(c.origRot)}),e.rotation.x=n,e.rotation.z=r,e.position.y=s,Us(e,1,!1),t()}})}function PC(i,t,e){const n=i.group,r=n.position.clone(),s=new ta(.42,.045,8,32),o=new Wr({color:16766720,emissive:new Ut(16766720),emissiveIntensity:2.5,transparent:!0,opacity:1}),a=new Ce(s,o);a.position.set(r.x,r.y+.3,r.z),t.add(a);const c=DC(n),u=30,h=new ki(.075,.075,.075),f=[];for(let d=0;d<u;d++){const m=new Wr({color:d%2===0?c:new Ut(16766720),emissive:d%2===0?c.clone().multiplyScalar(.4):new Ut(11171584),emissiveIntensity:.6,transparent:!0,opacity:1}),S=new Ce(h,m);S.position.set(r.x+(Math.random()-.5)*.5,r.y+Math.random()*.55,r.z+(Math.random()-.5)*.5),t.add(S);const M=Math.random()*Math.PI*2,g=Math.acos(2*Math.random()-1),v=Math.random()*4+2;f.push({mesh:S,vel:new H(Math.sin(g)*Math.cos(M)*v,Math.abs(Math.cos(g))*v*.6+1.5,Math.sin(g)*Math.sin(M)*v),rotV:new H((Math.random()-.5)*16,(Math.random()-.5)*16,(Math.random()-.5)*16)})}Us(n,1,!0),Br.push({elapsed:0,duration:.95,tick(d,m){a.scale.setScalar(1+d*2.5),a.rotation.y+=m*5,o.opacity=Math.max(0,1-d/.3);const S=9;f.forEach(({mesh:g,vel:v,rotV:D})=>{g.position.addScaledVector(v,m),v.y-=S*m,g.rotation.x+=D.x*m,g.rotation.y+=D.y*m,g.rotation.z+=D.z*m,g.material.opacity=Math.max(0,1-d*1.15)});const M=d<.18?1:Math.max(0,1-(d-.18)/.82);Us(n,M,!0)},onEnd(){t.remove(a),s.dispose(),o.dispose(),f.forEach(({mesh:d})=>{t.remove(d),d.geometry.dispose(),d.material.dispose()}),Us(n,1,!1),e()}})}function Us(i,t,e){i.traverse(n=>{const r=n;if(!r.isMesh)return;const s=r.material;s.transparent=e,s.opacity=t})}function DC(i){for(const t of i.children){const e=t;if(e.isMesh)return e.material.color.clone()}return new Ut(16777215)}function iu(i){return i*i}const ul=[],LC={star:"#7ec8e3",skull:"#c77dff",boost:"#ffe033",bomb:"#ff6622",swap:"#00e5cc",skip:"#ff6688",reverse:"#99aaff",fumble:"#ddaa60",shackle:"#aabbcc"},NC={star:"Roll again!",skull:"Back to base!",boost:"Boost +6!",bomb:"Blast!",swap:"Swap!",skip:"Skip curse!",reverse:"Reverse curse!",fumble:"Fumble curse!",shackle:"Shackled!"};function UC(i,t){const r=document.createElement("canvas");r.width=256,r.height=56;const s=r.getContext("2d"),o=10;s.fillStyle="rgba(8,8,20,0.72)",s.beginPath(),s.moveTo(o,0),s.lineTo(256-o,0),s.arcTo(256,0,256,o,o),s.lineTo(256,56-o),s.arcTo(256,56,256-o,56,o),s.lineTo(o,56),s.arcTo(0,56,0,56-o,o),s.lineTo(0,o),s.arcTo(0,0,o,0,o),s.closePath(),s.fill(),s.strokeStyle=t+"66",s.lineWidth=1.5,s.stroke(),s.fillStyle=t,s.font='bold 19px "Helvetica Neue", Arial, sans-serif',s.textAlign="center",s.textBaseline="middle",s.fillText(i,256/2,56/2);const a=new Kh(r),c=new sg({map:a,transparent:!0,depthTest:!1,depthWrite:!1}),u=new BT(c);return u.scale.set(2,2*(56/256),1),u.renderOrder=999,u}function OC(i,t,e){const n=NC[t],r=LC[t],s=UC(n,r);s.position.set(e.x,e.y+1.2,e.z),i.add(s);const o=1.8;ul.push({sprite:s,vel:new H(0,1,0),life:o,maxLife:o})}function FC(i,t){for(let e=ul.length-1;e>=0;e--){const n=ul[e];if(n.life-=i,n.life<=0){t.remove(n.sprite),n.sprite.material.map?.dispose(),n.sprite.material.dispose(),ul.splice(e,1);continue}n.sprite.position.addScaledVector(n.vel,i);const r=Math.min(n.life/n.maxLife,1);n.sprite.material.opacity=r>.6?1:r/.6}}const hv=[1,6,2,5,3,4];function VC(i){const e=document.createElement("canvas");e.width=e.height=128;const n=e.getContext("2d");n.fillStyle="#f5f5f0",n.fillRect(0,0,128,128);const r=[[],[[.5,.5]],[[.25,.25],[.75,.75]],[[.25,.25],[.5,.5],[.75,.75]],[[.25,.25],[.75,.25],[.25,.75],[.75,.75]],[[.25,.25],[.75,.25],[.5,.5],[.25,.75],[.75,.75]],[[.25,.2],[.75,.2],[.25,.5],[.75,.5],[.25,.8],[.75,.8]]];n.fillStyle=i===1?"#c0392b":"#1a1a2e";const s=128*.08;for(const[o,a]of r[i])n.beginPath(),n.arc(o*128,a*128,s,0,Math.PI*2),n.fill();return e}function BC(){return hv.map(i=>{const t=new Kh(VC(i));return new Wr({map:t,roughness:.3,metalness:.1})})}const Ya=[new An().setFromEuler(new nn(0,0,Math.PI/2)),new An().setFromEuler(new nn(0,0,-Math.PI/2)),new An().setFromEuler(new nn(0,0,0)),new An().setFromEuler(new nn(Math.PI,0,0)),new An().setFromEuler(new nn(-Math.PI/2,0,0)),new An().setFromEuler(new nn(Math.PI/2,0,0))];function Sm(i){return hv.indexOf(i)}class kC{constructor(t){we(this,"mesh");we(this,"rolling",!1);we(this,"rollDuration",.7);we(this,"rollElapsed",0);we(this,"rollStart",new An);we(this,"rollTarget",new An);we(this,"onRollDone",null);we(this,"pendingValue",1);we(this,"clickable",!0);const e=new ki(.9,.9,.9),n=BC();this.mesh=new Ce(e,n),this.mesh.position.set(0,2.5,0),this.mesh.castShadow=!0,this.mesh.userData.type="die",t.add(this.mesh)}roll(t){if(this.rolling)return;const e=Math.floor(Math.random()*6)+1;this.pendingValue=e,this.rollStart.copy(this.mesh.quaternion);const n=new An;n.setFromEuler(new nn(Math.random()*Math.PI*4,Math.random()*Math.PI*4,Math.random()*Math.PI*4));const r=Sm(e);this.rollTarget.copy(Ya[r]).premultiply(n).normalize(),this.rollTarget.copy(Ya[r]),this.rolling=!0,this.rollElapsed=0,this.onRollDone=t,this.clickable=!1}tick(t){if(!this.rolling)return;this.rollElapsed+=t;const e=Math.min(this.rollElapsed/this.rollDuration,1),n=new An;n.setFromEuler(new nn(e*Math.PI*6,e*Math.PI*4,0));const r=Sm(this.pendingValue),s=Ya[r].clone().premultiply(n);e<1?this.mesh.quaternion.slerpQuaternions(this.rollStart,s,e):(this.mesh.quaternion.copy(Ya[r]),this.rolling=!1,this.clickable=!0,this.onRollDone?.(this.pendingValue),this.onRollDone=null)}remove(t){t.remove(this.mesh)}}const kf=document.getElementById("game-canvas"),Re=new nC(kf),zC=new GT,Ol=new WT,Os=new Jt;let Fs=null,Xe=[],Qt=null,Vs=null,kt=null,se=null,Be={},Ko=!1,Ui=[],qn=null,vi=new Set,Xn=!1,bs={},Fl=null,Oo=null,hl=null;const fv="ludoex_camfocus";function sc(){return localStorage.getItem(fv)!=="false"}let Yo=null,ei=null;function dv(i){sc()&&(ei&&(clearTimeout(ei),ei=null),Yo=i)}function oc(i=1200){if(Yo=null,ei&&(clearTimeout(ei),ei=null),i===0){Re.returnToOverview();return}ei=setTimeout(()=>{Re.returnToOverview(),ei=null},i)}function HC(){Yo=null,ei&&(clearTimeout(ei),ei=null)}let kr=null,lr=null,ii=null,pi=null;function mi(){kr&&(clearTimeout(kr),kr=null),lr&&(clearTimeout(lr),lr=null),ii&&(clearInterval(ii),ii=null),pi&&(clearInterval(pi),pi=null)}function zf(){lr&&(clearTimeout(lr),lr=null),pi&&(clearInterval(pi),pi=null)}function xm(i){mi();let t=10;qe(`Your turn — click the die! (${t}s)`),ii=setInterval(()=>{t--,t>0&&qe(`Your turn — click the die! (${t}s)`)},1e3),kr=setTimeout(()=>{ii&&(clearInterval(ii),ii=null),kr=null,Qt&&Qt.roll(e=>Wf(e,i))},1e4)}function GC(i){zf();let t=15;qe(`Rolled — pick a piece! (${t}s)`),pi=setInterval(()=>{t--,t>0&&qe(`Rolled — pick a piece! (${t}s)`)},1e3),lr=setTimeout(()=>{pi&&(clearInterval(pi),pi=null),lr=null,qC(i),XC(i)},15e3)}function WC(i){let t=30;i===se&&(qe(`Roll to set turn order! (${t}s)`),ii=setInterval(()=>{t--,t>0&&qe(`Roll to set turn order! (${t}s)`)},1e3)),kr=setTimeout(()=>{ii&&(clearInterval(ii),ii=null),kr=null,!(!Qt||!kt)&&kt.gameState?.phase==="setup"&&kt.gameState.turnOrder[kt.gameState.currentTurn]===i&&(!Ko&&i!==se||Qt.roll(e=>Gf(e,i)))},3e4)}function qC(i){if(!kt||!Ui.length||!qn)return;const t=kt,e=t.gameState,n=mv(Ui,e,i,t);lc(),vi=new Set;const r=qn;Ui=[],qn=null;const s=rc(e,r,n,t.boardType,t.mode,Be);if(n.forceSplit){const o=Be[r];for(let a=0;a<4;a++)a!==n.pieceIndex&&cv(Xe,o,[n.pieceIndex,a],Re.scene)}ac(r,n,t.boardType,()=>{Ni(s),Xn=!1})}let zr=!1,Vl=null,Ur=null,ui=null;function XC(i){kt&&(zr=!0,Pl(kt.code,i,!0).catch(console.error),pv(()=>{!kt||!se||(zr=!1,Pl(kt.code,se,!1).catch(console.error))},()=>{}))}function pv(i,t){Fo();let e=7;const n=document.createElement("div");n.id="afk-popup",n.innerHTML=`
    <div class="afk-card">
      <div class="afk-title">Still there?</div>
      <div class="afk-countdown" id="afk-countdown">Returning to bot in ${e}s</div>
      <button class="btn btn-primary" id="btn-afk-back">I'm back!</button>
    </div>
  `,document.body.appendChild(n),Vl=n,ui=setInterval(()=>{e--;const r=document.getElementById("afk-countdown");r&&e>0&&(r.textContent=`Returning to bot in ${e}s`)},1e3),Ur=setTimeout(()=>{ui&&(clearInterval(ui),ui=null),Fo(),t()},7e3),n.querySelector("#btn-afk-back")?.addEventListener("click",()=>{ui&&(clearInterval(ui),ui=null),Ur&&(clearTimeout(Ur),Ur=null),Fo(),i()})}function Fo(){Vl?.remove(),Vl=null,ui&&(clearInterval(ui),ui=null),Ur&&(clearTimeout(Ur),Ur=null)}function Hf(i,t){const e=i.players[t];return e?e.name.startsWith("Bot ")||e.autoBot===!0:!1}function mv(i,t,e,n){const{pathLen:r}=Fn[n.boardType],s=Be[e];if(i.some(a=>a.reverse)){const a=i.filter(u=>u.to!==-1),c=a.length>0?a:i;return c.reduce((u,h)=>h.from<u.from?h:u,c[0])}function o(a){if(a.from===-1)return t.pieces[e].filter(u=>u.progress>=0&&u.progress<r).length===0?100:50;if(a.to>=0&&a.to<r){const c=Le(a.to,s,n.boardType);for(const[u,h]of Object.entries(t.pieces)){if(u===e)continue;const f=Be[u];for(const d of h)if(d.progress>=0&&d.progress<r&&Le(d.progress,f,n.boardType)===c)return 200}}return a.to>=r?80+(a.to-r)*10:a.to}return i.reduce((a,c)=>o(c)>=o(a)?c:a,i[0])}function gv(){const i=[];return Fs&&i.push(Fs),Xe.forEach(t=>{t.group.visible&&i.push(t.group)}),TC().forEach(t=>i.push(t)),Qt&&i.push(Qt.mesh),i}kf.addEventListener("mousemove",i=>{Os.x=i.clientX/window.innerWidth*2-1,Os.y=-(i.clientY/window.innerHeight)*2+1,Ol.setFromCamera(Os,Re.camera);const e=Ol.intersectObjects(gv(),!0).find(n=>!!_v(n.object)?.type);uC(e?e.object:null)});kf.addEventListener("click",i=>{Os.x=i.clientX/window.innerWidth*2-1,Os.y=-(i.clientY/window.innerHeight)*2+1,Ol.setFromCamera(Os,Re.camera);const t=Ol.intersectObjects(gv(),!0);if(!t.length)return;const e=_v(t[0].object);if(e){if(e.type==="die")$C();else if(e.type==="piece")if(e.merged){const n=e.color,r=e.pieceIndices;r.some(s=>vi.has(s))&&QC(n,r)}else vi.has(e.pieceIndex)&&YC(e.pieceIndex)}});function _v(i){let t=i;for(;t;){if(t.userData?.type)return t.userData;t=t.parent}return null}function $C(){if(!Qt?.clickable||!kt||!se)return;const i=kt.gameState;if(i){if(i.phase==="setup"){if(i.turnOrder[i.currentTurn]!==se)return;mi(),Qt.roll(t=>Gf(t,se));return}i.phase==="roll"&&i.turnOrder[i.currentTurn]===se&&(mi(),Qt.roll(t=>Wf(t,se)))}}function jC(i){!Qt||!kt||Qt.roll(t=>{setTimeout(()=>Wf(t,i),500)})}function Gf(i,t){if(!kt)return;const e=kt.gameState,n=kt;if(e.phase!=="setup"||e.turnOrder[e.currentTurn]!==t)return;const r=n.players[t]?.name??"?",s=BR(e,t,i,Be,n.boardType);if(s.phase==="roll"){const o=n.players[s.turnOrder[0]];qe(`${o?.name??"?"} goes first!`)}else qe(`${r} rolled ${i}!`);Xn=!1,setTimeout(()=>Ni(s),600)}function KC(i,t){const e=t.turnOrder[t.currentTurn];if(Hf(i,e)&&Ko&&!Xn){Xn=!0,hl=e,mi(),Qt&&(Qt.clickable=!1),qe(`${i.players[e]?.name??"Bot"} rolling for turn order...`),setTimeout(()=>{Qt&&Qt.roll(n=>setTimeout(()=>Gf(n,e),400))},700);return}if(e!==hl&&(hl=e,mi(),WC(e)),e===se)Qt&&(Qt.clickable=!0);else{Qt&&(Qt.clickable=!1);const n=i.players[e]?.name??"?";qe(`Waiting for ${n} to roll...`)}}function Wf(i,t){if(!kt)return;const e=kt.gameState,n=kt;if(i===6&&e.consecutiveSixes+1>=3){qe("Three 6s in a row — turn forfeited!");const h={...e,phase:"roll",diceValue:null,consecutiveSixes:0,currentTurn:(e.currentTurn+1)%e.turnOrder.length};setTimeout(()=>{Ni(h),Xn=!1},1e3);return}const r=e.pendingCurse?.[t]?.[0];let s=i;r==="fumble"&&(s=Math.max(1,Math.floor(i/2)));const o=GR(e,i);let a;r==="reverse"?(a=zR(o,t,i,n.boardType),a.length>0&&qe("Cursed — pieces move backward!")):(a=HR(o,t,s,n.boardType,n.mode,Be),r==="fumble"&&s!==i&&qe(`Fumble! Roll ${i} → ${s}`));const c=(e.shackled?.[t]??[]).length;if(c>0&&t===se&&qe(`${c} piece${c>1?"s":""} shackled this turn.`),a.length===0){qe(`Rolled ${i} — no moves. Skipping.`),setTimeout(()=>{Ni(ev(o)),Xn=!1},800);return}const u=Hf(n,t);if(a.length===1||u){const h=u&&a.length>1?mv(a,o,t,n):a[0],f=u?700:0;qe(`Rolled ${i}${u?` (${n.players[t]?.name})`:" — auto moved."}`);const d=()=>{if(h.forceSplit){const S=Be[t];Bf(Xe,S,h.pieceIndex,Re.scene)}const m=rc(o,t,h,n.boardType,n.mode,Be);ac(t,h,n.boardType,()=>{Ni(m),Xn=!1})};f?setTimeout(d,f):d();return}Ui=a,qn=t,vi=new Set(a.map(h=>h.pieceIndex)),iI(t,vi),rI(t,vi,o,n.boardType,s),qe(`Rolled ${i} — pick a piece.`),Ni(o),t===se&&GC(t)}function YC(i){if(!kt||!qn)return;const t=Ui.find(s=>s.pieceIndex===i);if(!t)return;zf(),lc(),vi=new Set;const e=qn;Ui=[],qn=null;const n=kt.gameState;if(t.forceSplit){const s=Be[e];Bf(Xe,s,i,Re.scene)}const r=rc(n,e,t,kt.boardType,kt.mode,Be);ac(e,t,kt.boardType,()=>Ni(r))}function QC(i,t){if(!kt||!qn||Be[qn]!==i)return;const n=t.filter(u=>vi.has(u));if(!n.length)return;const r=n[Math.floor(Math.random()*n.length)],s=Ui.find(u=>u.pieceIndex===r);if(!s)return;zf(),lc(),vi=new Set;const o=qn;Ui=[],qn=null,cv(Xe,i,t,Re.scene);const a=kt.gameState,c=rc(a,o,s,kt.boardType,kt.mode,Be);ac(o,s,kt.boardType,()=>Ni(c))}function ac(i,t,e,n){const{pathLen:r,colLen:s}=Fn[e],o=r+s,a=Be[i],c=Xe.find(f=>f.color===a&&f.pieceIndex===t.pieceIndex);if(!c){n?.();return}let u;t.to===-1?u={type:"base",index:t.pieceIndex}:t.to<r?u={type:"path",index:Le(t.to,a,e)}:t.to<o?u={type:"home-col",index:t.to-r}:u={type:"finished",index:t.pieceIndex},i===se&&dv(c.group),Lh(c,e,u,()=>{if(i===se&&oc(1200),kt?.mode==="remix"&&t.to>=0&&t.to<r){const f=Le(t.to,a,e),d=XR(f,e);d&&OC(Re.scene,d,c.group.position.clone())}n?.()})}function ZC(i,t){const{pathLen:e,colLen:n}=Fn[t],r=e+n;for(const[s,o]of Object.entries(i.pieces)){const a=Be[s];bs[s]||(bs[s]=[]),o.forEach((c,u)=>{const h=Xe.find(m=>m.color===a&&m.pieceIndex===u);if(!h)return;const f=bs[s][u]??-1,d=c.progress;if(f>=0&&d===-1&&!Ul(h)){Bf(Xe,a,u,Re.scene),s===se&&dv(h.group),RC(h,Re.scene,()=>{s===se&&oc(0),Lh(h,t,{type:"base",index:u})}),bs[s][u]=d;return}if(!Nh(h)&&!Ul(h)&&d!==f){let m;d===-1?m={type:"base",index:u}:d<e?m={type:"path",index:Le(d,a,t)}:d<r?m={type:"home-col",index:d-e}:m={type:"finished",index:u},Lh(h,t,m)}bs[s][u]=d})}}function JC(i){if(!se)return;const t=Be[se];if(!t)return;const e=new Set(i.shackled?.[se]??[]);Xe.forEach(n=>{if(n.color!==t)return;const r=e.has(n.pieceIndex);n.group.traverse(s=>{const o=s;if(!o.isMesh)return;const a=o.material;r?(a.transparent=!0,a.opacity=.42,a.depthWrite=!1):a.opacity<1&&(a.transparent=!1,a.opacity=1,a.depthWrite=!0)})})}const tI=new Ut(65416),eI=new Ut(2245802),nI=new Ut(11145489);let Bl=[];function iI(i,t){const e=Be[i];lc();const n=new Set;Xe.forEach(r=>{if(r.color!==e||!t.has(r.pieceIndex))return;const o=uv(e,r.pieceIndex)??r.group;n.has(o)||(n.add(o),Bl.push(o),o.traverse(a=>{if(!a.isMesh)return;const c=a.material;c.emissive=tI.clone(),c.emissiveIntensity=.35,a.userData.selectable=!0}))})}function lc(){Bl.forEach(i=>{i.traverse(t=>{if(!t.isMesh||!t.userData.selectable&&!t.userData.blocked)return;const e=t.material;e.emissive.set(0),e.emissiveIntensity=0,delete t.userData.selectable,delete t.userData.blocked})}),Bl=[],Xe.forEach(i=>{i.group.traverse(t=>{if(!t.isMesh||!t.userData.selectable&&!t.userData.blocked)return;const e=t.material;e.emissive.set(0),e.emissiveIntensity=0,delete t.userData.selectable,delete t.userData.blocked})})}function rI(i,t,e,n,r){const s=qR(e,i,r,n,Be,t);if(s.size===0)return;const o=Be[i];Xe.forEach(a=>{if(a.color!==o)return;const c=s.get(a.pieceIndex);if(!c)return;const u=c==="shackled"?eI:nI;(uv(o,a.pieceIndex)??a.group).traverse(f=>{if(!f.isMesh)return;const d=f.material;d.emissive=u.clone(),d.emissiveIntensity=.45,f.userData.blocked=c})})}function sI(i,t){if(Fl)return;const e=i.players[t],n=e?Xf(e.color):"#fff",r=e?Ev(e.name):"Unknown",s=se===i.hostId,o=document.createElement("div");o.id="gameover-overlay",o.innerHTML=`
    <div class="gameover-card">
      <div class="gameover-crown" style="color:${n}">&#9813;</div>
      <div class="gameover-name" style="color:${n}">${r}</div>
      <div class="gameover-sub">wins!</div>
      <div class="gameover-actions">
        <button class="btn btn-ghost" id="btn-go-leave">Leave</button>
        ${s?'<button class="btn btn-primary" id="btn-go-rematch">Rematch</button>':'<p class="gameover-waiting">Waiting for host...</p>'}
      </div>
    </div>
  `,document.body.appendChild(o),Fl=o,o.querySelector("#btn-go-leave")?.addEventListener("click",()=>oI()),o.querySelector("#btn-go-rematch")?.addEventListener("click",()=>aI())}function qf(){Fl?.remove(),Fl=null}async function oI(){!kt||!se||(Vs&&(Vs(),Vs=null),qf(),await Ff(kt.code,se),vv(),so({onGameStart:yv}))}async function aI(){if(!(!kt||!se))try{qf(),await YR(kt.code,se)}catch(i){console.error("Rematch failed",i)}}function vv(){mi(),Fo(),HC(),zr=!1,xC(),bC(),MC(Re.scene,Xe),Xe.forEach(i=>Re.scene.remove(i.group)),Xe=[],Bl=[],Fs&&(Re.scene.remove(Fs),Fs=null),Qt&&(Qt.remove(Re.scene),Qt=null),bs={},Oo=null,Xn=!1,hl=null,Ui=[],qn=null,vi=new Set}function Tm(i){kt=i;const t=i.gameState;if(!t)return;if(lv(Xe,t,i.boardType,Re.scene,Be,Ul),ZC(t,i.boardType),JC(t),dI(i),Oo!==null&&t.winner===null&&(qf(),Oo=null,Xn=!1,zr=!1,Qt&&(Qt.clickable=!0)),t.winner){Oo=t.winner,mi(),Qt&&(Qt.clickable=!1),oc(0),sI(i,t.winner);return}if(t.phase==="move")return;if(t.phase==="setup"){KC(i,t);return}const e=t.turnOrder[t.currentTurn],n=Hf(i,e);if(Ko&&t.phase==="roll"&&t.pendingCurse?.[e]?.[0]==="skip"){mi(),Qt&&(Qt.clickable=!1),qe(`${i.players[e]?.name??"?"} — skipped by curse!`),setTimeout(()=>{Ni(ev(t)),Xn=!1},900);return}if(n&&Ko&&t.phase==="roll"&&!Xn){Xn=!0,mi(),qe(`${i.players[e]?.name??"Bot"} is thinking...`),Qt&&(Qt.clickable=!1),setTimeout(()=>jC(e),1200);return}if(t.phase==="roll"&&e===se&&!n){Qt&&(Qt.clickable=!0),zr?Vl||pv(()=>{zr=!1,kt&&se&&Pl(kt.code,se,!1).catch(console.error),Qt&&(Qt.clickable=!0),xm(e)},()=>{}):xm(e);return}t.phase==="roll"&&!n&&(mi(),qe(`${i.players[e]?.name??"..."}'s turn`),Qt&&(Qt.clickable=!1))}async function Ni(i){if(kt)try{await KR(kt.code,i)}catch(t){console.error("writeGameState failed",t)}}function yv(i,t){se=t,kt=i,Ko=i.hostId===t,Oo=null,Be={};for(const[r,s]of Object.entries(i.players))Be[r]=s.color;const e=document.getElementById("ui-overlay");e.style.pointerEvents="none",e.innerHTML=lI(i),fI(),uI(),hI();const n=Object.values(i.players).map(r=>r.color);vv(),Fs=i.boardType==="standard"?aC(Re.scene,n,i.mode):cC(Re.scene,n,i.mode),Xe=vC(Re.scene,n,i.boardType),Xe.forEach(r=>{r.group.userData.type="piece",r.group.userData.color=r.color,r.group.userData.pieceIndex=r.pieceIndex}),Qt=new kC(Re.scene),Vs&&Vs(),Vs=rv(i.code,r=>{!r||r.status==="waiting"||Tm(r)}),i.gameState&&Tm(i)}function lI(i){const t=sc();return`
    <div id="hud">
      <div id="hud-info">
        <span class="hud-code">${i.code}</span>
        <span class="hud-mode mode-${i.mode}">${i.mode}</span>
        <button id="btn-cam-toggle" class="cam-toggle ${t?"cam-on":"cam-off"}" title="Toggle camera follow">
          ${t?"CAM: FOLLOW":"CAM: FREE"}
        </button>
        ${i.mode==="remix"?'<button id="btn-legend" class="legend-btn" title="Tile guide">?</button>':""}
      </div>
      <div id="hud-players">
        ${Object.values(i.players).map(e=>`
          <div class="hud-player" data-pid="${e.id}">
            <div class="hud-dot" style="background:${Xf(e.color)}"></div>
            <span>${Ev(e.name)}</span>
            ${e.name.startsWith("Bot ")?'<span class="hud-bot-badge">BOT</span>':""}
            ${e.autoBot?'<span class="hud-bot-badge hud-afk-badge">AFK</span>':""}
            <span class="hud-curse" data-cpid="${e.id}"></span>
            <span class="hud-score" data-spid="${e.id}">○○○○</span>
          </div>
        `).join("")}
      </div>
      <div id="hud-effects"></div>
      <button id="hud-afk-back" class="hud-afk-back-btn" style="display:none">I'm back!</button>
      <div id="hud-turn-indicator"></div>
      <div id="hud-status"></div>
    </div>
  `}function cI(){if(document.getElementById("legend-overlay"))return;const i=document.createElement("div");i.id="legend-overlay",i.innerHTML=`
    <div class="legend-card">
      <div class="legend-title">Remix Tile Guide</div>
      <div class="legend-items">
        <div class="legend-item"><span class="legend-icon li-star">★</span><div><b>Star</b> — roll again</div></div>
        <div class="legend-item"><span class="legend-icon li-skull">☠</span><div><b>Skull</b> — piece sent back to base</div></div>
        <div class="legend-item"><span class="legend-icon li-boost">⚡</span><div><b>Boost</b> — jump forward 6 more tiles</div></div>
        <div class="legend-item"><span class="legend-icon li-bomb">💣</span><div><b>Bomb</b> — opponents within 3 tiles sent to base</div></div>
        <div class="legend-item"><span class="legend-icon li-swap">↔</span><div><b>Swap</b> — trade places with furthest opponent piece</div></div>
        <hr class="legend-hr">
        <div class="legend-item"><span class="legend-icon li-skip">🚫</span><div><b>Skip curse</b> — your next turn is skipped</div></div>
        <div class="legend-item"><span class="legend-icon li-reverse">↩</span><div><b>Reverse curse</b> — next turn pieces move backward</div></div>
        <div class="legend-item"><span class="legend-icon li-fumble">½</span><div><b>Fumble curse</b> — next roll value is halved</div></div>
        <div class="legend-item"><span class="legend-icon li-shackle">🔒</span><div><b>Shackle curse</b> — this piece can't move next turn</div></div>
      </div>
      <div class="legend-hint">Curses affect you on your <em>next</em> turn.</div>
      <button class="btn btn-ghost legend-close" id="btn-legend-close">Close</button>
    </div>
  `,document.body.appendChild(i),i.addEventListener("click",t=>{t.target===i&&Mm()}),i.querySelector("#btn-legend-close")?.addEventListener("click",Mm)}function Mm(){document.getElementById("legend-overlay")?.remove()}function uI(){document.getElementById("btn-legend")?.addEventListener("click",cI)}function hI(){document.getElementById("hud-afk-back")?.addEventListener("click",()=>{!kt||!se||(zr=!1,Fo(),Pl(kt.code,se,!1).catch(console.error),Qt&&kt.gameState?.turnOrder[kt.gameState.currentTurn]===se&&(Qt.clickable=!0))})}function fI(){document.getElementById("btn-cam-toggle")?.addEventListener("click",()=>{const i=!sc();localStorage.setItem(fv,i?"true":"false");const t=document.getElementById("btn-cam-toggle");t&&(t.textContent=i?"CAM: FOLLOW":"CAM: FREE",t.className=`cam-toggle ${i?"cam-on":"cam-off"}`),i||oc(0)})}function dI(i){const t=i.gameState;if(!t)return;const e=t.turnOrder[t.currentTurn],{pathLen:n,colLen:r}=Fn[i.boardType],s=n+r;document.querySelectorAll(".hud-player").forEach(u=>{const h=u;h.classList.toggle("hud-player--active",t.phase!=="setup"&&h.dataset.pid===e);const f=h.querySelector(".hud-afk-badge"),d=i.players[h.dataset.pid??""];if(d)if(d.autoBot&&!f){const m=document.createElement("span");m.className="hud-bot-badge hud-afk-badge",m.textContent="AFK",h.appendChild(m)}else!d.autoBot&&f&&f.remove()});for(const[u,h]of Object.entries(i.players)){const f=document.querySelector(`.hud-score[data-spid="${u}"]`);if(f)if(t.phase==="setup"){const m=t.setupRolls?.[u];f.style.color="",m!==void 0?f.innerHTML=`<span style="color:#ffe066;font-weight:700">&#x1F3B2; ${m}</span>`:f.innerHTML='<span style="color:rgba(255,255,255,0.25)">&#x1F3B2; ?</span>'}else{const S=(t.pieces[u]??[]).filter(g=>g.progress===s).length,M=Xf(h.color);f.innerHTML=Array.from({length:4},(g,v)=>`<span style="color:${v<S?M:"rgba(255,255,255,0.2)"}">${v<S?"●":"○"}</span>`).join("")}const d=document.querySelector(`.hud-curse[data-cpid="${u}"]`);if(d&&t.phase==="setup"){const m=t.setupRolls??{},S=m[u];if(S!==void 0){const M=Math.max(...Object.values(m));d.innerHTML=S===M?'<span title="Turn order leader">&#x1F451;</span>':""}else d.innerHTML=""}else if(d){const m=t.pendingCurse?.[u]??[],S=(t.shackled?.[u]??[]).length,M=[];m.forEach((g,v)=>{const D=v===0?"Next turn":`+${v+1} turns`;g==="skip"&&M.push(`<span title="${D}: SKIP">⏭</span>`),g==="reverse"&&M.push(`<span title="${D}: REVERSE">↩</span>`),g==="fumble"&&M.push(`<span title="${D}: FUMBLE">½</span>`)}),S>0&&M.push(`<span title="${S} piece${S>1?"s":""} shackled this turn">&#x1F512;</span>`),d.innerHTML=M.join("")}}const o=document.getElementById("hud-afk-back");o&&se&&(o.style.display=i.players[se]?.autoBot?"":"none");const a=document.getElementById("hud-effects");if(a&&se&&t.phase!=="setup"){const u=t.pendingCurse?.[se]??[],h=t.shackled?.[se]??[],f=[];u.forEach((d,m)=>{const S=m===0?"Next turn":`In ${m+1} turns`;d==="skip"&&f.push(`<span class="effect-badge effect-skip">&#x23ED; ${S}: SKIP</span>`),d==="reverse"&&f.push(`<span class="effect-badge effect-reverse">&#x21A9; ${S}: REVERSE</span>`),d==="fumble"&&f.push(`<span class="effect-badge effect-fumble">&#xBD; ${S}: roll halved</span>`)}),h.forEach(d=>f.push(`<span class="effect-badge effect-shackle">&#x1F512; Piece ${d+1} shackled this turn</span>`)),a.innerHTML=f.join("")}else a&&(a.innerHTML="");const c=document.getElementById("hud-turn-indicator");c&&(t.phase==="setup"?c.textContent="Roll to set turn order":c.textContent=i.players[e]?`${i.players[e].name}'s turn`:"")}function qe(i){const t=document.getElementById("hud-status");t&&(t.textContent=i)}Re.start(()=>{const i=zC.getDelta();Yo&&sc()&&Re.focusOn(Yo.position.clone()),Re.tick(i),SC(i),wC(i),FC(i,Re.scene),Qt?.tick(i),kt?.gameState&&Xe.length>0&&lv(Xe,kt.gameState,kt.boardType,Re.scene,Be,Ul)});so({onGameStart:yv});function Ev(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Xf(i){return{red:"#e74c3c",blue:"#3498db",green:"#2ecc71",yellow:"#f1c40f",purple:"#9b59b6",orange:"#e67e22",pink:"#e91e8c",cyan:"#1abc9c"}[i]??"#fff"}
