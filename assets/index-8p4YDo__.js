(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zc="169",Fm=0,rh=1,Om=2,Qd=1,Jd=2,ti=3,bi=0,hn=1,ni=2,Si=0,Lr=1,sh=2,oh=3,ah=4,Vm=5,ji=100,Bm=101,km=102,zm=103,Hm=104,Gm=200,Wm=201,qm=202,Xm=203,Dl=204,Ll=205,jm=206,$m=207,Km=208,Ym=209,Qm=210,Jm=211,Zm=212,tg=213,eg=214,Nl=0,Ul=1,Fl=2,Br=3,Ol=4,Vl=5,Bl=6,kl=7,Zd=0,ng=1,ig=2,Ti=0,rg=1,sg=2,og=3,tf=4,ag=5,lg=6,cg=7,ef=300,kr=301,zr=302,zl=303,Hl=304,Ta=306,Gl=1e3,Ki=1001,Wl=1002,Sn=1003,ug=1004,vo=1005,Cn=1006,Xa=1007,Yi=1008,si=1009,nf=1010,rf=1011,Ls=1012,Hc=1013,tr=1014,ii=1015,qs=1016,Gc=1017,Wc=1018,Hr=1020,sf=35902,of=1021,af=1022,Pn=1023,lf=1024,cf=1025,Nr=1026,Gr=1027,uf=1028,qc=1029,hf=1030,Xc=1031,jc=1033,Wo=33776,qo=33777,Xo=33778,jo=33779,ql=35840,Xl=35841,jl=35842,$l=35843,Kl=36196,Yl=37492,Ql=37496,Jl=37808,Zl=37809,tc=37810,ec=37811,nc=37812,ic=37813,rc=37814,sc=37815,oc=37816,ac=37817,lc=37818,cc=37819,uc=37820,hc=37821,$o=36492,dc=36494,fc=36495,df=36283,pc=36284,mc=36285,gc=36286,hg=3200,dg=3201,ff=0,fg=1,Ei="",Fn="srgb",Li="srgb-linear",$c="display-p3",Ma="display-p3-linear",na="linear",xe="srgb",ia="rec709",ra="p3",mr=7680,lh=519,pg=512,mg=513,gg=514,pf=515,_g=516,vg=517,yg=518,Eg=519,ch=35044,uh="300 es",ri=2e3,sa=2001;class Zr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ja=Math.PI/180,_c=180/Math.PI;function Xs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]).toLowerCase()}function cn(i,t,e){return Math.max(t,Math.min(e,i))}function xg(i,t){return(i%t+t)%t}function $a(i,t,e){return(1-e)*i+e*t}function _s(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ln(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class fe{constructor(t=0,e=0){fe.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(cn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(t,e,n,r,s,o,l,c,u){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,l,c,u)}set(t,e,n,r,s,o,l,c,u){const h=this.elements;return h[0]=t,h[1]=r,h[2]=l,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],l=n[3],c=n[6],u=n[1],h=n[4],f=n[7],p=n[2],v=n[5],S=n[8],w=r[0],g=r[3],_=r[6],L=r[1],I=r[4],N=r[7],W=r[2],F=r[5],x=r[8];return s[0]=o*w+l*L+c*W,s[3]=o*g+l*I+c*F,s[6]=o*_+l*N+c*x,s[1]=u*w+h*L+f*W,s[4]=u*g+h*I+f*F,s[7]=u*_+h*N+f*x,s[2]=p*w+v*L+S*W,s[5]=p*g+v*I+S*F,s[8]=p*_+v*N+S*x,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],l=t[5],c=t[6],u=t[7],h=t[8];return e*o*h-e*l*u-n*s*h+n*l*c+r*s*u-r*o*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],l=t[5],c=t[6],u=t[7],h=t[8],f=h*o-l*u,p=l*c-h*s,v=u*s-o*c,S=e*f+n*p+r*v;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/S;return t[0]=f*w,t[1]=(r*u-h*n)*w,t[2]=(l*n-r*o)*w,t[3]=p*w,t[4]=(h*e-r*c)*w,t[5]=(r*s-l*e)*w,t[6]=v*w,t[7]=(n*c-u*e)*w,t[8]=(o*e-n*s)*w,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,l){const c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*o+u*l)+o+t,-r*u,r*c,-r*(-u*o+c*l)+l+e,0,0,1),this}scale(t,e){return this.premultiply(Ka.makeScale(t,e)),this}rotate(t){return this.premultiply(Ka.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ka.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ka=new $t;function mf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function oa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sg(){const i=oa("canvas");return i.style.display="block",i}const hh={};function Ko(i){i in hh||(hh[i]=!0,console.warn(i))}function Tg(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Mg(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ag(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const dh=new $t().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),fh=new $t().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),vs={[Li]:{transfer:na,primaries:ia,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Fn]:{transfer:xe,primaries:ia,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ma]:{transfer:na,primaries:ra,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(fh),fromReference:i=>i.applyMatrix3(dh)},[$c]:{transfer:xe,primaries:ra,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(fh),fromReference:i=>i.applyMatrix3(dh).convertLinearToSRGB()}},wg=new Set([Li,Ma]),de={enabled:!0,_workingColorSpace:Li,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!wg.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=vs[t].toReference,r=vs[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return vs[i].primaries},getTransfer:function(i){return i===Ei?na:vs[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(vs[t].luminanceCoefficients)}};function Ur(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ya(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let gr;class bg{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{gr===void 0&&(gr=oa("canvas")),gr.width=t.width,gr.height=t.height;const n=gr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=gr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=oa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ur(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ur(e[n]/255)*255):e[n]=Ur(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Rg=0;class gf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=Xs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,l=r.length;o<l;o++)r[o].isDataTexture?s.push(Qa(r[o].image)):s.push(Qa(r[o]))}else s=Qa(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Qa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cg=0;class dn extends Zr{constructor(t=dn.DEFAULT_IMAGE,e=dn.DEFAULT_MAPPING,n=Ki,r=Ki,s=Cn,o=Yi,l=Pn,c=si,u=dn.DEFAULT_ANISOTROPY,h=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=Xs(),this.name="",this.source=new gf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ef)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gl:t.x=t.x-Math.floor(t.x);break;case Ki:t.x=t.x<0?0:1;break;case Wl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gl:t.y=t.y-Math.floor(t.y);break;case Ki:t.y=t.y<0?0:1;break;case Wl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=ef;dn.DEFAULT_ANISOTROPY=1;class Re{constructor(t=0,e=0,n=0,r=1){Re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,u=c[0],h=c[4],f=c[8],p=c[1],v=c[5],S=c[9],w=c[2],g=c[6],_=c[10];if(Math.abs(h-p)<.01&&Math.abs(f-w)<.01&&Math.abs(S-g)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+w)<.1&&Math.abs(S+g)<.1&&Math.abs(u+v+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const I=(u+1)/2,N=(v+1)/2,W=(_+1)/2,F=(h+p)/4,x=(f+w)/4,T=(S+g)/4;return I>N&&I>W?I<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(I),r=F/n,s=x/n):N>W?N<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(N),n=F/r,s=T/r):W<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(W),n=x/s,r=T/s),this.set(n,r,s,e),this}let L=Math.sqrt((g-S)*(g-S)+(f-w)*(f-w)+(p-h)*(p-h));return Math.abs(L)<.001&&(L=1),this.x=(g-S)/L,this.y=(f-w)/L,this.z=(p-h)/L,this.w=Math.acos((u+v+_-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ig extends Zr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new dn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let l=0;l<o;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new gf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class er extends Ig{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class _f extends dn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pg extends dn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class js{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,l){let c=n[r+0],u=n[r+1],h=n[r+2],f=n[r+3];const p=s[o+0],v=s[o+1],S=s[o+2],w=s[o+3];if(l===0){t[e+0]=c,t[e+1]=u,t[e+2]=h,t[e+3]=f;return}if(l===1){t[e+0]=p,t[e+1]=v,t[e+2]=S,t[e+3]=w;return}if(f!==w||c!==p||u!==v||h!==S){let g=1-l;const _=c*p+u*v+h*S+f*w,L=_>=0?1:-1,I=1-_*_;if(I>Number.EPSILON){const W=Math.sqrt(I),F=Math.atan2(W,_*L);g=Math.sin(g*F)/W,l=Math.sin(l*F)/W}const N=l*L;if(c=c*g+p*N,u=u*g+v*N,h=h*g+S*N,f=f*g+w*N,g===1-l){const W=1/Math.sqrt(c*c+u*u+h*h+f*f);c*=W,u*=W,h*=W,f*=W}}t[e]=c,t[e+1]=u,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,o){const l=n[r],c=n[r+1],u=n[r+2],h=n[r+3],f=s[o],p=s[o+1],v=s[o+2],S=s[o+3];return t[e]=l*S+h*f+c*v-u*p,t[e+1]=c*S+h*p+u*f-l*v,t[e+2]=u*S+h*v+l*p-c*f,t[e+3]=h*S-l*f-c*p-u*v,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,l=Math.cos,c=Math.sin,u=l(n/2),h=l(r/2),f=l(s/2),p=c(n/2),v=c(r/2),S=c(s/2);switch(o){case"XYZ":this._x=p*h*f+u*v*S,this._y=u*v*f-p*h*S,this._z=u*h*S+p*v*f,this._w=u*h*f-p*v*S;break;case"YXZ":this._x=p*h*f+u*v*S,this._y=u*v*f-p*h*S,this._z=u*h*S-p*v*f,this._w=u*h*f+p*v*S;break;case"ZXY":this._x=p*h*f-u*v*S,this._y=u*v*f+p*h*S,this._z=u*h*S+p*v*f,this._w=u*h*f-p*v*S;break;case"ZYX":this._x=p*h*f-u*v*S,this._y=u*v*f+p*h*S,this._z=u*h*S-p*v*f,this._w=u*h*f+p*v*S;break;case"YZX":this._x=p*h*f+u*v*S,this._y=u*v*f+p*h*S,this._z=u*h*S-p*v*f,this._w=u*h*f-p*v*S;break;case"XZY":this._x=p*h*f-u*v*S,this._y=u*v*f-p*h*S,this._z=u*h*S+p*v*f,this._w=u*h*f+p*v*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],l=e[5],c=e[9],u=e[2],h=e[6],f=e[10],p=n+l+f;if(p>0){const v=.5/Math.sqrt(p+1);this._w=.25/v,this._x=(h-c)*v,this._y=(s-u)*v,this._z=(o-r)*v}else if(n>l&&n>f){const v=2*Math.sqrt(1+n-l-f);this._w=(h-c)/v,this._x=.25*v,this._y=(r+o)/v,this._z=(s+u)/v}else if(l>f){const v=2*Math.sqrt(1+l-n-f);this._w=(s-u)/v,this._x=(r+o)/v,this._y=.25*v,this._z=(c+h)/v}else{const v=2*Math.sqrt(1+f-n-l);this._w=(o-r)/v,this._x=(s+u)/v,this._y=(c+h)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(cn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,l=e._x,c=e._y,u=e._z,h=e._w;return this._x=n*h+o*l+r*u-s*c,this._y=r*h+o*c+s*l-n*u,this._z=s*h+o*u+n*c-r*l,this._w=o*h-n*l-r*c-s*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let l=o*t._w+n*t._x+r*t._y+s*t._z;if(l<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,l=-l):this.copy(t),l>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-l*l;if(c<=Number.EPSILON){const v=1-e;return this._w=v*o+e*this._w,this._x=v*n+e*this._x,this._y=v*r+e*this._y,this._z=v*s+e*this._z,this.normalize(),this}const u=Math.sqrt(c),h=Math.atan2(u,l),f=Math.sin((1-e)*h)/u,p=Math.sin(e*h)/u;return this._w=o*f+this._w*p,this._x=n*f+this._x*p,this._y=r*f+this._y*p,this._z=s*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(t=0,e=0,n=0){q.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ph.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ph.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,l=t.z,c=t.w,u=2*(o*r-l*n),h=2*(l*e-s*r),f=2*(s*n-o*e);return this.x=e+c*u+o*f-l*h,this.y=n+c*h+l*u-s*f,this.z=r+c*f+s*h-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,l=e.y,c=e.z;return this.x=r*c-s*l,this.y=s*o-n*c,this.z=n*l-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ja.copy(this).projectOnVector(t),this.sub(Ja)}reflect(t){return this.sub(Ja.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(cn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ja=new q,ph=new js;class $s{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,l=s.count;o<l;o++)t.isMesh===!0?t.getVertexPosition(o,wn):wn.fromBufferAttribute(s,o),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yo.copy(n.boundingBox)),yo.applyMatrix4(t.matrixWorld),this.union(yo)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ys),Eo.subVectors(this.max,ys),_r.subVectors(t.a,ys),vr.subVectors(t.b,ys),yr.subVectors(t.c,ys),pi.subVectors(vr,_r),mi.subVectors(yr,vr),Vi.subVectors(_r,yr);let e=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Vi.z,Vi.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Vi.z,0,-Vi.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Vi.y,Vi.x,0];return!Za(e,_r,vr,yr,Eo)||(e=[1,0,0,0,1,0,0,0,1],!Za(e,_r,vr,yr,Eo))?!1:(xo.crossVectors(pi,mi),e=[xo.x,xo.y,xo.z],Za(e,_r,vr,yr,Eo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Kn=[new q,new q,new q,new q,new q,new q,new q,new q],wn=new q,yo=new $s,_r=new q,vr=new q,yr=new q,pi=new q,mi=new q,Vi=new q,ys=new q,Eo=new q,xo=new q,Bi=new q;function Za(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Bi.fromArray(i,s);const l=r.x*Math.abs(Bi.x)+r.y*Math.abs(Bi.y)+r.z*Math.abs(Bi.z),c=t.dot(Bi),u=e.dot(Bi),h=n.dot(Bi);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>l)return!1}return!0}const Dg=new $s,Es=new q,tl=new q;class Kc{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Dg.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Es.subVectors(t,this.center);const e=Es.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Es,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Es.copy(t.center).add(tl)),this.expandByPoint(Es.copy(t.center).sub(tl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yn=new q,el=new q,So=new q,gi=new q,nl=new q,To=new q,il=new q;class Lg{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){el.copy(t).add(e).multiplyScalar(.5),So.copy(e).sub(t).normalize(),gi.copy(this.origin).sub(el);const s=t.distanceTo(e)*.5,o=-this.direction.dot(So),l=gi.dot(this.direction),c=-gi.dot(So),u=gi.lengthSq(),h=Math.abs(1-o*o);let f,p,v,S;if(h>0)if(f=o*c-l,p=o*l-c,S=s*h,f>=0)if(p>=-S)if(p<=S){const w=1/h;f*=w,p*=w,v=f*(f+o*p+2*l)+p*(o*f+p+2*c)+u}else p=s,f=Math.max(0,-(o*p+l)),v=-f*f+p*(p+2*c)+u;else p=-s,f=Math.max(0,-(o*p+l)),v=-f*f+p*(p+2*c)+u;else p<=-S?(f=Math.max(0,-(-o*s+l)),p=f>0?-s:Math.min(Math.max(-s,-c),s),v=-f*f+p*(p+2*c)+u):p<=S?(f=0,p=Math.min(Math.max(-s,-c),s),v=p*(p+2*c)+u):(f=Math.max(0,-(o*s+l)),p=f>0?s:Math.min(Math.max(-s,-c),s),v=-f*f+p*(p+2*c)+u);else p=o>0?-s:s,f=Math.max(0,-(o*p+l)),v=-f*f+p*(p+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(el).addScaledVector(So,p),v}intersectSphere(t,e){Yn.subVectors(t.center,this.origin);const n=Yn.dot(this.direction),r=Yn.dot(Yn)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),l=n-o,c=n+o;return c<0?null:l<0?this.at(c,e):this.at(l,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,l,c;const u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return u>=0?(n=(t.min.x-p.x)*u,r=(t.max.x-p.x)*u):(n=(t.max.x-p.x)*u,r=(t.min.x-p.x)*u),h>=0?(s=(t.min.y-p.y)*h,o=(t.max.y-p.y)*h):(s=(t.max.y-p.y)*h,o=(t.min.y-p.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(l=(t.min.z-p.z)*f,c=(t.max.z-p.z)*f):(l=(t.max.z-p.z)*f,c=(t.min.z-p.z)*f),n>c||l>r)||((l>n||n!==n)&&(n=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,r,s){nl.subVectors(e,t),To.subVectors(n,t),il.crossVectors(nl,To);let o=this.direction.dot(il),l;if(o>0){if(r)return null;l=1}else if(o<0)l=-1,o=-o;else return null;gi.subVectors(this.origin,t);const c=l*this.direction.dot(To.crossVectors(gi,To));if(c<0)return null;const u=l*this.direction.dot(nl.cross(gi));if(u<0||c+u>o)return null;const h=-l*gi.dot(il);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ce{constructor(t,e,n,r,s,o,l,c,u,h,f,p,v,S,w,g){Ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,l,c,u,h,f,p,v,S,w,g)}set(t,e,n,r,s,o,l,c,u,h,f,p,v,S,w,g){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=r,_[1]=s,_[5]=o,_[9]=l,_[13]=c,_[2]=u,_[6]=h,_[10]=f,_[14]=p,_[3]=v,_[7]=S,_[11]=w,_[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Er.setFromMatrixColumn(t,0).length(),s=1/Er.setFromMatrixColumn(t,1).length(),o=1/Er.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),l=Math.sin(n),c=Math.cos(r),u=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const p=o*h,v=o*f,S=l*h,w=l*f;e[0]=c*h,e[4]=-c*f,e[8]=u,e[1]=v+S*u,e[5]=p-w*u,e[9]=-l*c,e[2]=w-p*u,e[6]=S+v*u,e[10]=o*c}else if(t.order==="YXZ"){const p=c*h,v=c*f,S=u*h,w=u*f;e[0]=p+w*l,e[4]=S*l-v,e[8]=o*u,e[1]=o*f,e[5]=o*h,e[9]=-l,e[2]=v*l-S,e[6]=w+p*l,e[10]=o*c}else if(t.order==="ZXY"){const p=c*h,v=c*f,S=u*h,w=u*f;e[0]=p-w*l,e[4]=-o*f,e[8]=S+v*l,e[1]=v+S*l,e[5]=o*h,e[9]=w-p*l,e[2]=-o*u,e[6]=l,e[10]=o*c}else if(t.order==="ZYX"){const p=o*h,v=o*f,S=l*h,w=l*f;e[0]=c*h,e[4]=S*u-v,e[8]=p*u+w,e[1]=c*f,e[5]=w*u+p,e[9]=v*u-S,e[2]=-u,e[6]=l*c,e[10]=o*c}else if(t.order==="YZX"){const p=o*c,v=o*u,S=l*c,w=l*u;e[0]=c*h,e[4]=w-p*f,e[8]=S*f+v,e[1]=f,e[5]=o*h,e[9]=-l*h,e[2]=-u*h,e[6]=v*f+S,e[10]=p-w*f}else if(t.order==="XZY"){const p=o*c,v=o*u,S=l*c,w=l*u;e[0]=c*h,e[4]=-f,e[8]=u*h,e[1]=p*f+w,e[5]=o*h,e[9]=v*f-S,e[2]=S*f-v,e[6]=l*h,e[10]=w*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ng,t,Ug)}lookAt(t,e,n){const r=this.elements;return gn.subVectors(t,e),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),_i.crossVectors(n,gn),_i.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),_i.crossVectors(n,gn)),_i.normalize(),Mo.crossVectors(gn,_i),r[0]=_i.x,r[4]=Mo.x,r[8]=gn.x,r[1]=_i.y,r[5]=Mo.y,r[9]=gn.y,r[2]=_i.z,r[6]=Mo.z,r[10]=gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],l=n[4],c=n[8],u=n[12],h=n[1],f=n[5],p=n[9],v=n[13],S=n[2],w=n[6],g=n[10],_=n[14],L=n[3],I=n[7],N=n[11],W=n[15],F=r[0],x=r[4],T=r[8],C=r[12],m=r[1],E=r[5],P=r[9],A=r[13],Y=r[2],nt=r[6],K=r[10],et=r[14],$=r[3],yt=r[7],Et=r[11],Rt=r[15];return s[0]=o*F+l*m+c*Y+u*$,s[4]=o*x+l*E+c*nt+u*yt,s[8]=o*T+l*P+c*K+u*Et,s[12]=o*C+l*A+c*et+u*Rt,s[1]=h*F+f*m+p*Y+v*$,s[5]=h*x+f*E+p*nt+v*yt,s[9]=h*T+f*P+p*K+v*Et,s[13]=h*C+f*A+p*et+v*Rt,s[2]=S*F+w*m+g*Y+_*$,s[6]=S*x+w*E+g*nt+_*yt,s[10]=S*T+w*P+g*K+_*Et,s[14]=S*C+w*A+g*et+_*Rt,s[3]=L*F+I*m+N*Y+W*$,s[7]=L*x+I*E+N*nt+W*yt,s[11]=L*T+I*P+N*K+W*Et,s[15]=L*C+I*A+N*et+W*Rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],l=t[5],c=t[9],u=t[13],h=t[2],f=t[6],p=t[10],v=t[14],S=t[3],w=t[7],g=t[11],_=t[15];return S*(+s*c*f-r*u*f-s*l*p+n*u*p+r*l*v-n*c*v)+w*(+e*c*v-e*u*p+s*o*p-r*o*v+r*u*h-s*c*h)+g*(+e*u*f-e*l*v-s*o*f+n*o*v+s*l*h-n*u*h)+_*(-r*l*h-e*c*f+e*l*p+r*o*f-n*o*p+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],l=t[5],c=t[6],u=t[7],h=t[8],f=t[9],p=t[10],v=t[11],S=t[12],w=t[13],g=t[14],_=t[15],L=f*g*u-w*p*u+w*c*v-l*g*v-f*c*_+l*p*_,I=S*p*u-h*g*u-S*c*v+o*g*v+h*c*_-o*p*_,N=h*w*u-S*f*u+S*l*v-o*w*v-h*l*_+o*f*_,W=S*f*c-h*w*c-S*l*p+o*w*p+h*l*g-o*f*g,F=e*L+n*I+r*N+s*W;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const x=1/F;return t[0]=L*x,t[1]=(w*p*s-f*g*s-w*r*v+n*g*v+f*r*_-n*p*_)*x,t[2]=(l*g*s-w*c*s+w*r*u-n*g*u-l*r*_+n*c*_)*x,t[3]=(f*c*s-l*p*s-f*r*u+n*p*u+l*r*v-n*c*v)*x,t[4]=I*x,t[5]=(h*g*s-S*p*s+S*r*v-e*g*v-h*r*_+e*p*_)*x,t[6]=(S*c*s-o*g*s-S*r*u+e*g*u+o*r*_-e*c*_)*x,t[7]=(o*p*s-h*c*s+h*r*u-e*p*u-o*r*v+e*c*v)*x,t[8]=N*x,t[9]=(S*f*s-h*w*s-S*n*v+e*w*v+h*n*_-e*f*_)*x,t[10]=(o*w*s-S*l*s+S*n*u-e*w*u-o*n*_+e*l*_)*x,t[11]=(h*l*s-o*f*s-h*n*u+e*f*u+o*n*v-e*l*v)*x,t[12]=W*x,t[13]=(h*w*r-S*f*r+S*n*p-e*w*p-h*n*g+e*f*g)*x,t[14]=(S*l*r-o*w*r-S*n*c+e*w*c+o*n*g-e*l*g)*x,t[15]=(o*f*r-h*l*r+h*n*c-e*f*c-o*n*p+e*l*p)*x,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,l=t.y,c=t.z,u=s*o,h=s*l;return this.set(u*o+n,u*l-r*c,u*c+r*l,0,u*l+r*c,h*l+n,h*c-r*o,0,u*c-r*l,h*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,l=e._z,c=e._w,u=s+s,h=o+o,f=l+l,p=s*u,v=s*h,S=s*f,w=o*h,g=o*f,_=l*f,L=c*u,I=c*h,N=c*f,W=n.x,F=n.y,x=n.z;return r[0]=(1-(w+_))*W,r[1]=(v+N)*W,r[2]=(S-I)*W,r[3]=0,r[4]=(v-N)*F,r[5]=(1-(p+_))*F,r[6]=(g+L)*F,r[7]=0,r[8]=(S+I)*x,r[9]=(g-L)*x,r[10]=(1-(p+w))*x,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Er.set(r[0],r[1],r[2]).length();const o=Er.set(r[4],r[5],r[6]).length(),l=Er.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],bn.copy(this);const u=1/s,h=1/o,f=1/l;return bn.elements[0]*=u,bn.elements[1]*=u,bn.elements[2]*=u,bn.elements[4]*=h,bn.elements[5]*=h,bn.elements[6]*=h,bn.elements[8]*=f,bn.elements[9]*=f,bn.elements[10]*=f,e.setFromRotationMatrix(bn),n.x=s,n.y=o,n.z=l,this}makePerspective(t,e,n,r,s,o,l=ri){const c=this.elements,u=2*s/(e-t),h=2*s/(n-r),f=(e+t)/(e-t),p=(n+r)/(n-r);let v,S;if(l===ri)v=-(o+s)/(o-s),S=-2*o*s/(o-s);else if(l===sa)v=-o/(o-s),S=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,l=ri){const c=this.elements,u=1/(e-t),h=1/(n-r),f=1/(o-s),p=(e+t)*u,v=(n+r)*h;let S,w;if(l===ri)S=(o+s)*f,w=-2*f;else if(l===sa)S=s*f,w=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-v,c[2]=0,c[6]=0,c[10]=w,c[14]=-S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Er=new q,bn=new Ce,Ng=new q(0,0,0),Ug=new q(1,1,1),_i=new q,Mo=new q,gn=new q,mh=new Ce,gh=new js;class Gn{constructor(t=0,e=0,n=0,r=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],l=r[8],c=r[1],u=r[5],h=r[9],f=r[2],p=r[6],v=r[10];switch(e){case"XYZ":this._y=Math.asin(cn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,v),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-cn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,v),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(cn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,v),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-cn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,v),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(cn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(l,v));break;case"XZY":this._z=Math.asin(-cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-h,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return mh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(mh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gh.setFromEuler(this),this.setFromQuaternion(gh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class vf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Fg=0;const _h=new q,xr=new js,Qn=new Ce,Ao=new q,xs=new q,Og=new q,Vg=new js,vh=new q(1,0,0),yh=new q(0,1,0),Eh=new q(0,0,1),xh={type:"added"},Bg={type:"removed"},Sr={type:"childadded",child:null},rl={type:"childremoved",child:null};class rn extends Zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=Xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const t=new q,e=new Gn,n=new js,r=new q(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ce},normalMatrix:{value:new $t}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xr.setFromAxisAngle(t,e),this.quaternion.multiply(xr),this}rotateOnWorldAxis(t,e){return xr.setFromAxisAngle(t,e),this.quaternion.premultiply(xr),this}rotateX(t){return this.rotateOnAxis(vh,t)}rotateY(t){return this.rotateOnAxis(yh,t)}rotateZ(t){return this.rotateOnAxis(Eh,t)}translateOnAxis(t,e){return _h.copy(t).applyQuaternion(this.quaternion),this.position.add(_h.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vh,t)}translateY(t){return this.translateOnAxis(yh,t)}translateZ(t){return this.translateOnAxis(Eh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ao.copy(t):Ao.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(xs,Ao,this.up):Qn.lookAt(Ao,xs,this.up),this.quaternion.setFromRotationMatrix(Qn),r&&(Qn.extractRotation(r.matrixWorld),xr.setFromRotationMatrix(Qn),this.quaternion.premultiply(xr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xh),Sr.child=t,this.dispatchEvent(Sr),Sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bg),rl.child=t,this.dispatchEvent(rl),rl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xh),Sr.child=t,this.dispatchEvent(Sr),Sr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,t,Og),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,Vg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const f=c[u];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(s(t.materials,this.material[c]));r.material=l}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(s(t.animations,c))}}if(e){const l=o(t.geometries),c=o(t.materials),u=o(t.textures),h=o(t.images),f=o(t.shapes),p=o(t.skeletons),v=o(t.animations),S=o(t.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),v.length>0&&(n.animations=v),S.length>0&&(n.nodes=S)}return n.object=r,n;function o(l){const c=[];for(const u in l){const h=l[u];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}rn.DEFAULT_UP=new q(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new q,Jn=new q,sl=new q,Zn=new q,Tr=new q,Mr=new q,Sh=new q,ol=new q,al=new q,ll=new q,cl=new Re,ul=new Re,hl=new Re;class In{constructor(t=new q,e=new q,n=new q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Rn.subVectors(t,e),r.cross(Rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Rn.subVectors(r,e),Jn.subVectors(n,e),sl.subVectors(t,e);const o=Rn.dot(Rn),l=Rn.dot(Jn),c=Rn.dot(sl),u=Jn.dot(Jn),h=Jn.dot(sl),f=o*u-l*l;if(f===0)return s.set(0,0,0),null;const p=1/f,v=(u*c-l*h)*p,S=(o*h-l*c)*p;return s.set(1-v-S,S,v)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,n,r,s,o,l,c){return this.getBarycoord(t,e,n,r,Zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Zn.x),c.addScaledVector(o,Zn.y),c.addScaledVector(l,Zn.z),c)}static getInterpolatedAttribute(t,e,n,r,s,o){return cl.setScalar(0),ul.setScalar(0),hl.setScalar(0),cl.fromBufferAttribute(t,e),ul.fromBufferAttribute(t,n),hl.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(cl,s.x),o.addScaledVector(ul,s.y),o.addScaledVector(hl,s.z),o}static isFrontFacing(t,e,n,r){return Rn.subVectors(n,e),Jn.subVectors(t,e),Rn.cross(Jn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Rn.cross(Jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return In.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return In.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return In.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return In.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return In.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,l;Tr.subVectors(r,n),Mr.subVectors(s,n),ol.subVectors(t,n);const c=Tr.dot(ol),u=Mr.dot(ol);if(c<=0&&u<=0)return e.copy(n);al.subVectors(t,r);const h=Tr.dot(al),f=Mr.dot(al);if(h>=0&&f<=h)return e.copy(r);const p=c*f-h*u;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Tr,o);ll.subVectors(t,s);const v=Tr.dot(ll),S=Mr.dot(ll);if(S>=0&&v<=S)return e.copy(s);const w=v*u-c*S;if(w<=0&&u>=0&&S<=0)return l=u/(u-S),e.copy(n).addScaledVector(Mr,l);const g=h*S-v*f;if(g<=0&&f-h>=0&&v-S>=0)return Sh.subVectors(s,r),l=(f-h)/(f-h+(v-S)),e.copy(r).addScaledVector(Sh,l);const _=1/(g+w+p);return o=w*_,l=p*_,e.copy(n).addScaledVector(Tr,o).addScaledVector(Mr,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},wo={h:0,s:0,l:0};function dl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ce{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=de.workingColorSpace){if(t=xg(t,1),e=cn(e,0,1),n=cn(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=dl(o,s,t+1/3),this.g=dl(o,s,t),this.b=dl(o,s,t-1/3)}return de.toWorkingColorSpace(this,r),this}setStyle(t,e=Fn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],l=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fn){const n=yf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ur(t.r),this.g=Ur(t.g),this.b=Ur(t.b),this}copyLinearToSRGB(t){return this.r=Ya(t.r),this.g=Ya(t.g),this.b=Ya(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fn){return de.fromWorkingColorSpace(Ze.copy(this),t),Math.round(cn(Ze.r*255,0,255))*65536+Math.round(cn(Ze.g*255,0,255))*256+Math.round(cn(Ze.b*255,0,255))}getHexString(t=Fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.fromWorkingColorSpace(Ze.copy(this),e);const n=Ze.r,r=Ze.g,s=Ze.b,o=Math.max(n,r,s),l=Math.min(n,r,s);let c,u;const h=(l+o)/2;if(l===o)c=0,u=0;else{const f=o-l;switch(u=h<=.5?f/(o+l):f/(2-o-l),o){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return t.h=c,t.s=u,t.l=h,t}getRGB(t,e=de.workingColorSpace){return de.fromWorkingColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=Fn){de.fromWorkingColorSpace(Ze.copy(this),t);const e=Ze.r,n=Ze.g,r=Ze.b;return t!==Fn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(vi),this.setHSL(vi.h+t,vi.s+e,vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vi),t.getHSL(wo);const n=$a(vi.h,wo.h,e),r=$a(vi.s,wo.s,e),s=$a(vi.l,wo.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ze=new ce;ce.NAMES=yf;let kg=0;class Ks extends Zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=Xs(),this.name="",this.type="Material",this.blending=Lr,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dl,this.blendDst=Ll,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=Br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mr,this.stencilZFail=mr,this.stencilZPass=mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Lr&&(n.blending=this.blending),this.side!==bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Dl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ll&&(n.blendDst=this.blendDst),this.blendEquation!==ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Br&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==mr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==mr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const l in s){const c=s[l];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ef extends Ks{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Zd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Le=new q,bo=new fe;class Vn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ch,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)bo.fromBufferAttribute(this,e),bo.applyMatrix3(t),this.setXY(e,bo.x,bo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_s(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ln(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_s(e,this.array)),e}setX(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_s(e,this.array)),e}setY(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_s(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_s(e,this.array)),e}setW(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),r=ln(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),r=ln(r,this.array),s=ln(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ch&&(t.usage=this.usage),t}}class xf extends Vn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Sf extends Vn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ji extends Vn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let zg=0;const En=new Ce,fl=new rn,Ar=new q,_n=new $s,Ss=new $s,ze=new q;class sr extends Zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=Xs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mf(t)?Sf:xf)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new $t().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,n){return En.makeTranslation(t,e,n),this.applyMatrix4(En),this}scale(t,e,n){return En.makeScale(t,e,n),this.applyMatrix4(En),this}lookAt(t){return fl.lookAt(t),fl.updateMatrix(),this.applyMatrix4(fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ji(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $s);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){const n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const l=e[s];Ss.setFromBufferAttribute(l),this.morphTargetsRelative?(ze.addVectors(_n.min,Ss.min),_n.expandByPoint(ze),ze.addVectors(_n.max,Ss.max),_n.expandByPoint(ze)):(_n.expandByPoint(Ss.min),_n.expandByPoint(Ss.max))}_n.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)ze.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(ze));if(e)for(let s=0,o=e.length;s<o;s++){const l=e[s],c=this.morphTargetsRelative;for(let u=0,h=l.count;u<h;u++)ze.fromBufferAttribute(l,u),c&&(Ar.fromBufferAttribute(t,u),ze.add(Ar)),r=Math.max(r,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),l=[],c=[];for(let T=0;T<n.count;T++)l[T]=new q,c[T]=new q;const u=new q,h=new q,f=new q,p=new fe,v=new fe,S=new fe,w=new q,g=new q;function _(T,C,m){u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,C),f.fromBufferAttribute(n,m),p.fromBufferAttribute(s,T),v.fromBufferAttribute(s,C),S.fromBufferAttribute(s,m),h.sub(u),f.sub(u),v.sub(p),S.sub(p);const E=1/(v.x*S.y-S.x*v.y);isFinite(E)&&(w.copy(h).multiplyScalar(S.y).addScaledVector(f,-v.y).multiplyScalar(E),g.copy(f).multiplyScalar(v.x).addScaledVector(h,-S.x).multiplyScalar(E),l[T].add(w),l[C].add(w),l[m].add(w),c[T].add(g),c[C].add(g),c[m].add(g))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let T=0,C=L.length;T<C;++T){const m=L[T],E=m.start,P=m.count;for(let A=E,Y=E+P;A<Y;A+=3)_(t.getX(A+0),t.getX(A+1),t.getX(A+2))}const I=new q,N=new q,W=new q,F=new q;function x(T){W.fromBufferAttribute(r,T),F.copy(W);const C=l[T];I.copy(C),I.sub(W.multiplyScalar(W.dot(C))).normalize(),N.crossVectors(F,C);const E=N.dot(c[T])<0?-1:1;o.setXYZW(T,I.x,I.y,I.z,E)}for(let T=0,C=L.length;T<C;++T){const m=L[T],E=m.start,P=m.count;for(let A=E,Y=E+P;A<Y;A+=3)x(t.getX(A+0)),x(t.getX(A+1)),x(t.getX(A+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,v=n.count;p<v;p++)n.setXYZ(p,0,0,0);const r=new q,s=new q,o=new q,l=new q,c=new q,u=new q,h=new q,f=new q;if(t)for(let p=0,v=t.count;p<v;p+=3){const S=t.getX(p+0),w=t.getX(p+1),g=t.getX(p+2);r.fromBufferAttribute(e,S),s.fromBufferAttribute(e,w),o.fromBufferAttribute(e,g),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,w),u.fromBufferAttribute(n,g),l.add(h),c.add(h),u.add(h),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(w,c.x,c.y,c.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let p=0,v=e.count;p<v;p+=3)r.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(l,c){const u=l.array,h=l.itemSize,f=l.normalized,p=new u.constructor(c.length*h);let v=0,S=0;for(let w=0,g=c.length;w<g;w++){l.isInterleavedBufferAttribute?v=c[w]*l.data.stride+l.offset:v=c[w]*h;for(let _=0;_<h;_++)p[S++]=u[v++]}return new Vn(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new sr,n=this.index.array,r=this.attributes;for(const l in r){const c=r[l],u=t(c,n);e.setAttribute(l,u)}const s=this.morphAttributes;for(const l in s){const c=[],u=s[l];for(let h=0,f=u.length;h<f;h++){const p=u[h],v=t(p,n);c.push(v)}e.morphAttributes[l]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,c=o.length;l<c;l++){const u=o[l];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const u=n[c];t.data.attributes[c]=u.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let f=0,p=u.length;f<p;f++){const v=u[f];h.push(v.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(e))}const s=t.morphAttributes;for(const u in s){const h=[],f=s[u];for(let p=0,v=f.length;p<v;p++)h.push(f[p].clone(e));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,h=o.length;u<h;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Th=new Ce,ki=new Lg,Ro=new Kc,Mh=new q,Co=new q,Io=new q,Po=new q,pl=new q,Do=new q,Ah=new q,Lo=new q;class Dn extends rn{constructor(t=new sr,e=new Ef){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const l=this.morphTargetInfluences;if(s&&l){Do.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const h=l[c],f=s[c];h!==0&&(pl.fromBufferAttribute(f,t),o?Do.addScaledVector(pl,h):Do.addScaledVector(pl.sub(e),h))}e.add(Do)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(s),ki.copy(t.ray).recast(t.near),!(Ro.containsPoint(ki.origin)===!1&&(ki.intersectSphere(Ro,Mh)===null||ki.origin.distanceToSquared(Mh)>(t.far-t.near)**2))&&(Th.copy(s).invert(),ki.copy(t.ray).applyMatrix4(Th),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ki)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,l=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,p=s.groups,v=s.drawRange;if(l!==null)if(Array.isArray(o))for(let S=0,w=p.length;S<w;S++){const g=p[S],_=o[g.materialIndex],L=Math.max(g.start,v.start),I=Math.min(l.count,Math.min(g.start+g.count,v.start+v.count));for(let N=L,W=I;N<W;N+=3){const F=l.getX(N),x=l.getX(N+1),T=l.getX(N+2);r=No(this,_,t,n,u,h,f,F,x,T),r&&(r.faceIndex=Math.floor(N/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const S=Math.max(0,v.start),w=Math.min(l.count,v.start+v.count);for(let g=S,_=w;g<_;g+=3){const L=l.getX(g),I=l.getX(g+1),N=l.getX(g+2);r=No(this,o,t,n,u,h,f,L,I,N),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let S=0,w=p.length;S<w;S++){const g=p[S],_=o[g.materialIndex],L=Math.max(g.start,v.start),I=Math.min(c.count,Math.min(g.start+g.count,v.start+v.count));for(let N=L,W=I;N<W;N+=3){const F=N,x=N+1,T=N+2;r=No(this,_,t,n,u,h,f,F,x,T),r&&(r.faceIndex=Math.floor(N/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const S=Math.max(0,v.start),w=Math.min(c.count,v.start+v.count);for(let g=S,_=w;g<_;g+=3){const L=g,I=g+1,N=g+2;r=No(this,o,t,n,u,h,f,L,I,N),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}}function Hg(i,t,e,n,r,s,o,l){let c;if(t.side===hn?c=n.intersectTriangle(o,s,r,!0,l):c=n.intersectTriangle(r,s,o,t.side===bi,l),c===null)return null;Lo.copy(l),Lo.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(Lo);return u<e.near||u>e.far?null:{distance:u,point:Lo.clone(),object:i}}function No(i,t,e,n,r,s,o,l,c,u){i.getVertexPosition(l,Co),i.getVertexPosition(c,Io),i.getVertexPosition(u,Po);const h=Hg(i,t,e,n,Co,Io,Po,Ah);if(h){const f=new q;In.getBarycoord(Ah,Co,Io,Po,f),r&&(h.uv=In.getInterpolatedAttribute(r,l,c,u,f,new fe)),s&&(h.uv1=In.getInterpolatedAttribute(s,l,c,u,f,new fe)),o&&(h.normal=In.getInterpolatedAttribute(o,l,c,u,f,new q),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a:l,b:c,c:u,normal:new q,materialIndex:0};In.getNormal(Co,Io,Po,p.normal),h.face=p,h.barycoord=f}return h}class ts extends sr{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const l=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],u=[],h=[],f=[];let p=0,v=0;S("z","y","x",-1,-1,n,e,t,o,s,0),S("z","y","x",1,-1,n,e,-t,o,s,1),S("x","z","y",1,1,t,n,e,r,o,2),S("x","z","y",1,-1,t,n,-e,r,o,3),S("x","y","z",1,-1,t,e,n,r,s,4),S("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Ji(u,3)),this.setAttribute("normal",new Ji(h,3)),this.setAttribute("uv",new Ji(f,2));function S(w,g,_,L,I,N,W,F,x,T,C){const m=N/x,E=W/T,P=N/2,A=W/2,Y=F/2,nt=x+1,K=T+1;let et=0,$=0;const yt=new q;for(let Et=0;Et<K;Et++){const Rt=Et*E-A;for(let Xt=0;Xt<nt;Xt++){const Bt=Xt*m-P;yt[w]=Bt*L,yt[g]=Rt*I,yt[_]=Y,u.push(yt.x,yt.y,yt.z),yt[w]=0,yt[g]=0,yt[_]=F>0?1:-1,h.push(yt.x,yt.y,yt.z),f.push(Xt/x),f.push(1-Et/T),et+=1}}for(let Et=0;Et<T;Et++)for(let Rt=0;Rt<x;Rt++){const Xt=p+Rt+nt*Et,Bt=p+Rt+nt*(Et+1),Q=p+(Rt+1)+nt*(Et+1),ot=p+(Rt+1)+nt*Et;c.push(Xt,Bt,ot),c.push(Bt,Q,ot),$+=6}l.addGroup(v,$,C),v+=$,p+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ts(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Wr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function on(i){const t={};for(let e=0;e<i.length;e++){const n=Wr(i[e]);for(const r in n)t[r]=n[r]}return t}function Gg(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Tf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}const Wg={clone:Wr,merge:on};var qg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends Ks{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qg,this.fragmentShader=Xg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wr(t.uniforms),this.uniformsGroups=Gg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Mf extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=ri}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yi=new q,wh=new fe,bh=new fe;class xn extends Mf{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=_c*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ja*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _c*2*Math.atan(Math.tan(ja*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yi.x,yi.y).multiplyScalar(-t/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-t/yi.z)}getViewSize(t,e){return this.getViewBounds(t,wh,bh),e.subVectors(bh,wh)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ja*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/u,r*=o.width/c,n*=o.height/u}const l=this.filmOffset;l!==0&&(s+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const wr=-90,br=1;class jg extends rn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new xn(wr,br,t,e);r.layers=this.layers,this.add(r);const s=new xn(wr,br,t,e);s.layers=this.layers,this.add(s);const o=new xn(wr,br,t,e);o.layers=this.layers,this.add(o);const l=new xn(wr,br,t,e);l.layers=this.layers,this.add(l);const c=new xn(wr,br,t,e);c.layers=this.layers,this.add(c);const u=new xn(wr,br,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,l,c]=e;for(const u of e)this.remove(u);if(t===ri)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===sa)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,l,c,u,h]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),v=t.getActiveMipmapLevel(),S=t.xr.enabled;t.xr.enabled=!1;const w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,l),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,u),n.texture.generateMipmaps=w,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(f,p,v),t.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class Af extends dn{constructor(t,e,n,r,s,o,l,c,u,h){t=t!==void 0?t:[],e=e!==void 0?e:kr,super(t,e,n,r,s,o,l,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class $g extends er{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Af(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ts(5,5,5),s=new Ri({name:"CubemapFromEquirect",uniforms:Wr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:Si});s.uniforms.tEquirect.value=e;const o=new Dn(r,s),l=e.minFilter;return e.minFilter===Yi&&(e.minFilter=Cn),new jg(1,10,this).update(t,o),e.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const ml=new q,Kg=new q,Yg=new $t;class Wi{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=ml.subVectors(n,e).cross(Kg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ml),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Yg.getNormalMatrix(t),r=this.coplanarPoint(ml).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new Kc,Uo=new q;class Yc{constructor(t=new Wi,e=new Wi,n=new Wi,r=new Wi,s=new Wi,o=new Wi){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(r),l[4].copy(s),l[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ri){const n=this.planes,r=t.elements,s=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],p=r[7],v=r[8],S=r[9],w=r[10],g=r[11],_=r[12],L=r[13],I=r[14],N=r[15];if(n[0].setComponents(c-s,p-u,g-v,N-_).normalize(),n[1].setComponents(c+s,p+u,g+v,N+_).normalize(),n[2].setComponents(c+o,p+h,g+S,N+L).normalize(),n[3].setComponents(c-o,p-h,g-S,N-L).normalize(),n[4].setComponents(c-l,p-f,g-w,N-I).normalize(),e===ri)n[5].setComponents(c+l,p+f,g+w,N+I).normalize();else if(e===sa)n[5].setComponents(l,f,w,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(t){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Uo.x=r.normal.x>0?t.max.x:t.min.x,Uo.y=r.normal.y>0?t.max.y:t.min.y,Uo.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Uo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wf(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Qg(i){const t=new WeakMap;function e(l,c){const u=l.array,h=l.usage,f=u.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,u,h),l.onUploadCallback();let v;if(u instanceof Float32Array)v=i.FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?v=i.HALF_FLOAT:v=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=i.SHORT;else if(u instanceof Uint32Array)v=i.UNSIGNED_INT;else if(u instanceof Int32Array)v=i.INT;else if(u instanceof Int8Array)v=i.BYTE;else if(u instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function n(l,c,u){const h=c.array,f=c.updateRanges;if(i.bindBuffer(u,l),f.length===0)i.bufferSubData(u,0,h);else{f.sort((v,S)=>v.start-S.start);let p=0;for(let v=1;v<f.length;v++){const S=f[p],w=f[v];w.start<=S.start+S.count+1?S.count=Math.max(S.count,w.start+w.count-S.start):(++p,f[p]=w)}f.length=p+1;for(let v=0,S=f.length;v<S;v++){const w=f[v];i.bufferSubData(u,w.start*h.BYTES_PER_ELEMENT,h,w.start,w.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=t.get(l);c&&(i.deleteBuffer(c.buffer),t.delete(l))}function o(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const h=t.get(l);(!h||h.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const u=t.get(l);if(u===void 0)t.set(l,e(l,c));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,l,c),u.version=l.version}}return{get:r,remove:s,update:o}}class Ys extends sr{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,l=Math.floor(n),c=Math.floor(r),u=l+1,h=c+1,f=t/l,p=e/c,v=[],S=[],w=[],g=[];for(let _=0;_<h;_++){const L=_*p-o;for(let I=0;I<u;I++){const N=I*f-s;S.push(N,-L,0),w.push(0,0,1),g.push(I/l),g.push(1-_/c)}}for(let _=0;_<c;_++)for(let L=0;L<l;L++){const I=L+u*_,N=L+u*(_+1),W=L+1+u*(_+1),F=L+1+u*_;v.push(I,N,F),v.push(N,W,F)}this.setIndex(v),this.setAttribute("position",new Ji(S,3)),this.setAttribute("normal",new Ji(w,3)),this.setAttribute("uv",new Ji(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ys(t.width,t.height,t.widthSegments,t.heightSegments)}}var Jg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zg=`#ifdef USE_ALPHAHASH
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
#endif`,t_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,e_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,i_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,r_=`#ifdef USE_AOMAP
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
#endif`,s_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,o_=`#ifdef USE_BATCHING
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
#endif`,a_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,l_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,c_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,u_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,h_=`#ifdef USE_IRIDESCENCE
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
#endif`,d_=`#ifdef USE_BUMPMAP
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
#endif`,f_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,p_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,m_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,g_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,__=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,v_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,y_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,E_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,x_=`#define PI 3.141592653589793
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
} // validated`,S_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,T_=`vec3 transformedNormal = objectNormal;
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
#endif`,M_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,A_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,w_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,b_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,R_="gl_FragColor = linearToOutputTexel( gl_FragColor );",C_=`
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
}`,I_=`#ifdef USE_ENVMAP
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
#endif`,P_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,D_=`#ifdef USE_ENVMAP
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
#endif`,L_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,N_=`#ifdef USE_ENVMAP
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
#endif`,U_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,F_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,O_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,V_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,B_=`#ifdef USE_GRADIENTMAP
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
}`,k_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,z_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,H_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,G_=`uniform bool receiveShadow;
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
#endif`,W_=`#ifdef USE_ENVMAP
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
#endif`,q_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,X_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,j_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,K_=`PhysicalMaterial material;
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
#endif`,Y_=`struct PhysicalMaterial {
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
}`,Q_=`
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
#endif`,J_=`#if defined( RE_IndirectDiffuse )
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
#endif`,Z_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ev=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ov=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,av=`#if defined( USE_POINTS_UV )
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
#endif`,lv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fv=`#ifdef USE_MORPHTARGETS
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
#endif`,pv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_v=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ev=`#ifdef USE_NORMALMAP
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
#endif`,xv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Av=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Iv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fv=`float getShadowMask() {
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
}`,Ov=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vv=`#ifdef USE_SKINNING
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
#endif`,Bv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kv=`#ifdef USE_SKINNING
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
#endif`,zv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qv=`#ifdef USE_TRANSMISSION
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
#endif`,Xv=`#ifdef USE_TRANSMISSION
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
#endif`,jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jv=`uniform sampler2D t2D;
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
}`,Zv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ty=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ny=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iy=`#include <common>
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
}`,ry=`#if DEPTH_PACKING == 3200
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
}`,sy=`#define DISTANCE
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
}`,oy=`#define DISTANCE
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
}`,ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ly=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cy=`uniform float scale;
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
}`,uy=`uniform vec3 diffuse;
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
}`,hy=`#include <common>
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
}`,dy=`uniform vec3 diffuse;
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
}`,fy=`#define LAMBERT
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
}`,py=`#define LAMBERT
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
}`,my=`#define MATCAP
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
}`,gy=`#define MATCAP
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
}`,_y=`#define NORMAL
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
}`,vy=`#define NORMAL
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
}`,yy=`#define PHONG
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
}`,Ey=`#define PHONG
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
}`,xy=`#define STANDARD
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
}`,Sy=`#define STANDARD
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
}`,Ty=`#define TOON
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
}`,My=`#define TOON
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
}`,Ay=`uniform float size;
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
}`,wy=`uniform vec3 diffuse;
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
}`,by=`#include <common>
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
}`,Ry=`uniform vec3 color;
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
}`,Cy=`uniform float rotation;
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
}`,Iy=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:Jg,alphahash_pars_fragment:Zg,alphamap_fragment:t_,alphamap_pars_fragment:e_,alphatest_fragment:n_,alphatest_pars_fragment:i_,aomap_fragment:r_,aomap_pars_fragment:s_,batching_pars_vertex:o_,batching_vertex:a_,begin_vertex:l_,beginnormal_vertex:c_,bsdfs:u_,iridescence_fragment:h_,bumpmap_pars_fragment:d_,clipping_planes_fragment:f_,clipping_planes_pars_fragment:p_,clipping_planes_pars_vertex:m_,clipping_planes_vertex:g_,color_fragment:__,color_pars_fragment:v_,color_pars_vertex:y_,color_vertex:E_,common:x_,cube_uv_reflection_fragment:S_,defaultnormal_vertex:T_,displacementmap_pars_vertex:M_,displacementmap_vertex:A_,emissivemap_fragment:w_,emissivemap_pars_fragment:b_,colorspace_fragment:R_,colorspace_pars_fragment:C_,envmap_fragment:I_,envmap_common_pars_fragment:P_,envmap_pars_fragment:D_,envmap_pars_vertex:L_,envmap_physical_pars_fragment:W_,envmap_vertex:N_,fog_vertex:U_,fog_pars_vertex:F_,fog_fragment:O_,fog_pars_fragment:V_,gradientmap_pars_fragment:B_,lightmap_pars_fragment:k_,lights_lambert_fragment:z_,lights_lambert_pars_fragment:H_,lights_pars_begin:G_,lights_toon_fragment:q_,lights_toon_pars_fragment:X_,lights_phong_fragment:j_,lights_phong_pars_fragment:$_,lights_physical_fragment:K_,lights_physical_pars_fragment:Y_,lights_fragment_begin:Q_,lights_fragment_maps:J_,lights_fragment_end:Z_,logdepthbuf_fragment:tv,logdepthbuf_pars_fragment:ev,logdepthbuf_pars_vertex:nv,logdepthbuf_vertex:iv,map_fragment:rv,map_pars_fragment:sv,map_particle_fragment:ov,map_particle_pars_fragment:av,metalnessmap_fragment:lv,metalnessmap_pars_fragment:cv,morphinstance_vertex:uv,morphcolor_vertex:hv,morphnormal_vertex:dv,morphtarget_pars_vertex:fv,morphtarget_vertex:pv,normal_fragment_begin:mv,normal_fragment_maps:gv,normal_pars_fragment:_v,normal_pars_vertex:vv,normal_vertex:yv,normalmap_pars_fragment:Ev,clearcoat_normal_fragment_begin:xv,clearcoat_normal_fragment_maps:Sv,clearcoat_pars_fragment:Tv,iridescence_pars_fragment:Mv,opaque_fragment:Av,packing:wv,premultiplied_alpha_fragment:bv,project_vertex:Rv,dithering_fragment:Cv,dithering_pars_fragment:Iv,roughnessmap_fragment:Pv,roughnessmap_pars_fragment:Dv,shadowmap_pars_fragment:Lv,shadowmap_pars_vertex:Nv,shadowmap_vertex:Uv,shadowmask_pars_fragment:Fv,skinbase_vertex:Ov,skinning_pars_vertex:Vv,skinning_vertex:Bv,skinnormal_vertex:kv,specularmap_fragment:zv,specularmap_pars_fragment:Hv,tonemapping_fragment:Gv,tonemapping_pars_fragment:Wv,transmission_fragment:qv,transmission_pars_fragment:Xv,uv_pars_fragment:jv,uv_pars_vertex:$v,uv_vertex:Kv,worldpos_vertex:Yv,background_vert:Qv,background_frag:Jv,backgroundCube_vert:Zv,backgroundCube_frag:ty,cube_vert:ey,cube_frag:ny,depth_vert:iy,depth_frag:ry,distanceRGBA_vert:sy,distanceRGBA_frag:oy,equirect_vert:ay,equirect_frag:ly,linedashed_vert:cy,linedashed_frag:uy,meshbasic_vert:hy,meshbasic_frag:dy,meshlambert_vert:fy,meshlambert_frag:py,meshmatcap_vert:my,meshmatcap_frag:gy,meshnormal_vert:_y,meshnormal_frag:vy,meshphong_vert:yy,meshphong_frag:Ey,meshphysical_vert:xy,meshphysical_frag:Sy,meshtoon_vert:Ty,meshtoon_frag:My,points_vert:Ay,points_frag:wy,shadow_vert:by,shadow_frag:Ry,sprite_vert:Cy,sprite_frag:Iy},ht={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},On={basic:{uniforms:on([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:on([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new ce(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:on([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:on([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:on([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new ce(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:on([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:on([ht.points,ht.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:on([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:on([ht.common,ht.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:on([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:on([ht.sprite,ht.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:on([ht.common,ht.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:on([ht.lights,ht.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};On.physical={uniforms:on([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const Fo={r:0,b:0,g:0},Hi=new Gn,Py=new Ce;function Dy(i,t,e,n,r,s,o){const l=new ce(0);let c=s===!0?0:1,u,h,f=null,p=0,v=null;function S(L){let I=L.isScene===!0?L.background:null;return I&&I.isTexture&&(I=(L.backgroundBlurriness>0?e:t).get(I)),I}function w(L){let I=!1;const N=S(L);N===null?_(l,c):N&&N.isColor&&(_(N,1),I=!0);const W=i.xr.getEnvironmentBlendMode();W==="additive"?n.buffers.color.setClear(0,0,0,1,o):W==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||I)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(L,I){const N=S(I);N&&(N.isCubeTexture||N.mapping===Ta)?(h===void 0&&(h=new Dn(new ts(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:Wr(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(W,F,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Hi.copy(I.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),h.material.uniforms.envMap.value=N,h.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Py.makeRotationFromEuler(Hi)),h.material.toneMapped=de.getTransfer(N.colorSpace)!==xe,(f!==N||p!==N.version||v!==i.toneMapping)&&(h.material.needsUpdate=!0,f=N,p=N.version,v=i.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null)):N&&N.isTexture&&(u===void 0&&(u=new Dn(new Ys(2,2),new Ri({name:"BackgroundMaterial",uniforms:Wr(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=N,u.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,u.material.toneMapped=de.getTransfer(N.colorSpace)!==xe,N.matrixAutoUpdate===!0&&N.updateMatrix(),u.material.uniforms.uvTransform.value.copy(N.matrix),(f!==N||p!==N.version||v!==i.toneMapping)&&(u.material.needsUpdate=!0,f=N,p=N.version,v=i.toneMapping),u.layers.enableAll(),L.unshift(u,u.geometry,u.material,0,0,null))}function _(L,I){L.getRGB(Fo,Tf(i)),n.buffers.color.setClear(Fo.r,Fo.g,Fo.b,I,o)}return{getClearColor:function(){return l},setClearColor:function(L,I=1){l.set(L),c=I,_(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(L){c=L,_(l,c)},render:w,addToRenderList:g}}function Ly(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null);let s=r,o=!1;function l(m,E,P,A,Y){let nt=!1;const K=f(A,P,E);s!==K&&(s=K,u(s.object)),nt=v(m,A,P,Y),nt&&S(m,A,P,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(nt||o)&&(o=!1,N(m,E,P,A),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function c(){return i.createVertexArray()}function u(m){return i.bindVertexArray(m)}function h(m){return i.deleteVertexArray(m)}function f(m,E,P){const A=P.wireframe===!0;let Y=n[m.id];Y===void 0&&(Y={},n[m.id]=Y);let nt=Y[E.id];nt===void 0&&(nt={},Y[E.id]=nt);let K=nt[A];return K===void 0&&(K=p(c()),nt[A]=K),K}function p(m){const E=[],P=[],A=[];for(let Y=0;Y<e;Y++)E[Y]=0,P[Y]=0,A[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:P,attributeDivisors:A,object:m,attributes:{},index:null}}function v(m,E,P,A){const Y=s.attributes,nt=E.attributes;let K=0;const et=P.getAttributes();for(const $ in et)if(et[$].location>=0){const Et=Y[$];let Rt=nt[$];if(Rt===void 0&&($==="instanceMatrix"&&m.instanceMatrix&&(Rt=m.instanceMatrix),$==="instanceColor"&&m.instanceColor&&(Rt=m.instanceColor)),Et===void 0||Et.attribute!==Rt||Rt&&Et.data!==Rt.data)return!0;K++}return s.attributesNum!==K||s.index!==A}function S(m,E,P,A){const Y={},nt=E.attributes;let K=0;const et=P.getAttributes();for(const $ in et)if(et[$].location>=0){let Et=nt[$];Et===void 0&&($==="instanceMatrix"&&m.instanceMatrix&&(Et=m.instanceMatrix),$==="instanceColor"&&m.instanceColor&&(Et=m.instanceColor));const Rt={};Rt.attribute=Et,Et&&Et.data&&(Rt.data=Et.data),Y[$]=Rt,K++}s.attributes=Y,s.attributesNum=K,s.index=A}function w(){const m=s.newAttributes;for(let E=0,P=m.length;E<P;E++)m[E]=0}function g(m){_(m,0)}function _(m,E){const P=s.newAttributes,A=s.enabledAttributes,Y=s.attributeDivisors;P[m]=1,A[m]===0&&(i.enableVertexAttribArray(m),A[m]=1),Y[m]!==E&&(i.vertexAttribDivisor(m,E),Y[m]=E)}function L(){const m=s.newAttributes,E=s.enabledAttributes;for(let P=0,A=E.length;P<A;P++)E[P]!==m[P]&&(i.disableVertexAttribArray(P),E[P]=0)}function I(m,E,P,A,Y,nt,K){K===!0?i.vertexAttribIPointer(m,E,P,Y,nt):i.vertexAttribPointer(m,E,P,A,Y,nt)}function N(m,E,P,A){w();const Y=A.attributes,nt=P.getAttributes(),K=E.defaultAttributeValues;for(const et in nt){const $=nt[et];if($.location>=0){let yt=Y[et];if(yt===void 0&&(et==="instanceMatrix"&&m.instanceMatrix&&(yt=m.instanceMatrix),et==="instanceColor"&&m.instanceColor&&(yt=m.instanceColor)),yt!==void 0){const Et=yt.normalized,Rt=yt.itemSize,Xt=t.get(yt);if(Xt===void 0)continue;const Bt=Xt.buffer,Q=Xt.type,ot=Xt.bytesPerElement,At=Q===i.INT||Q===i.UNSIGNED_INT||yt.gpuType===Hc;if(yt.isInterleavedBufferAttribute){const _t=yt.data,zt=_t.stride,Ut=yt.offset;if(_t.isInstancedInterleavedBuffer){for(let Kt=0;Kt<$.locationSize;Kt++)_($.location+Kt,_t.meshPerAttribute);m.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Kt=0;Kt<$.locationSize;Kt++)g($.location+Kt);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let Kt=0;Kt<$.locationSize;Kt++)I($.location+Kt,Rt/$.locationSize,Q,Et,zt*ot,(Ut+Rt/$.locationSize*Kt)*ot,At)}else{if(yt.isInstancedBufferAttribute){for(let _t=0;_t<$.locationSize;_t++)_($.location+_t,yt.meshPerAttribute);m.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let _t=0;_t<$.locationSize;_t++)g($.location+_t);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let _t=0;_t<$.locationSize;_t++)I($.location+_t,Rt/$.locationSize,Q,Et,Rt*ot,Rt/$.locationSize*_t*ot,At)}}else if(K!==void 0){const Et=K[et];if(Et!==void 0)switch(Et.length){case 2:i.vertexAttrib2fv($.location,Et);break;case 3:i.vertexAttrib3fv($.location,Et);break;case 4:i.vertexAttrib4fv($.location,Et);break;default:i.vertexAttrib1fv($.location,Et)}}}}L()}function W(){T();for(const m in n){const E=n[m];for(const P in E){const A=E[P];for(const Y in A)h(A[Y].object),delete A[Y];delete E[P]}delete n[m]}}function F(m){if(n[m.id]===void 0)return;const E=n[m.id];for(const P in E){const A=E[P];for(const Y in A)h(A[Y].object),delete A[Y];delete E[P]}delete n[m.id]}function x(m){for(const E in n){const P=n[E];if(P[m.id]===void 0)continue;const A=P[m.id];for(const Y in A)h(A[Y].object),delete A[Y];delete P[m.id]}}function T(){C(),o=!0,s!==r&&(s=r,u(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:T,resetDefaultState:C,dispose:W,releaseStatesOfGeometry:F,releaseStatesOfProgram:x,initAttributes:w,enableAttribute:g,disableUnusedAttributes:L}}function Ny(i,t,e){let n;function r(u){n=u}function s(u,h){i.drawArrays(n,u,h),e.update(h,n,1)}function o(u,h,f){f!==0&&(i.drawArraysInstanced(n,u,h,f),e.update(h,n,f))}function l(u,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,f);let v=0;for(let S=0;S<f;S++)v+=h[S];e.update(v,n,1)}function c(u,h,f,p){if(f===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let S=0;S<u.length;S++)o(u[S],h[S],p[S]);else{v.multiDrawArraysInstancedWEBGL(n,u,0,h,0,p,0,f);let S=0;for(let w=0;w<f;w++)S+=h[w];for(let w=0;w<p.length;w++)e.update(S,n,p[w])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function Uy(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const x=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(x){return!(x!==Pn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(x){const T=x===qs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==si&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&x!==ii&&!T)}function c(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const h=c(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const f=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(p===!0){const x=t.get("EXT_clip_control");x.clipControlEXT(x.LOWER_LEFT_EXT,x.ZERO_TO_ONE_EXT)}const v=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),L=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),N=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),W=S>0,F=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:p,maxTextures:v,maxVertexTextures:S,maxTextureSize:w,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:L,maxVaryings:I,maxFragmentUniforms:N,vertexTextures:W,maxSamples:F}}function Fy(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new Wi,l=new $t,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const v=f.length!==0||p||n!==0||r;return r=p,n=f.length,v},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,p){e=h(f,p,0)},this.setState=function(f,p,v){const S=f.clippingPlanes,w=f.clipIntersection,g=f.clipShadows,_=i.get(f);if(!r||S===null||S.length===0||s&&!g)s?h(null):u();else{const L=s?0:n,I=L*4;let N=_.clippingState||null;c.value=N,N=h(S,p,I,v);for(let W=0;W!==I;++W)N[W]=e[W];_.clippingState=N,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=L}};function u(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,p,v,S){const w=f!==null?f.length:0;let g=null;if(w!==0){if(g=c.value,S!==!0||g===null){const _=v+w*4,L=p.matrixWorldInverse;l.getNormalMatrix(L),(g===null||g.length<_)&&(g=new Float32Array(_));for(let I=0,N=v;I!==w;++I,N+=4)o.copy(f[I]).applyMatrix4(L,l),o.normal.toArray(g,N),g[N+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,g}}function Oy(i){let t=new WeakMap;function e(o,l){return l===zl?o.mapping=kr:l===Hl&&(o.mapping=zr),o}function n(o){if(o&&o.isTexture){const l=o.mapping;if(l===zl||l===Hl)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new $g(c.height);return u.fromEquirectangularTexture(i,o),t.set(o,u),o.addEventListener("dispose",r),e(u.texture,o.mapping)}else return null}}return o}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class bf extends Mf{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,l=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,l,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Dr=4,Rh=[.125,.215,.35,.446,.526,.582],$i=20,gl=new bf,Ch=new ce;let _l=null,vl=0,yl=0,El=!1;const qi=(1+Math.sqrt(5))/2,Rr=1/qi,Ih=[new q(-qi,Rr,0),new q(qi,Rr,0),new q(-Rr,0,qi),new q(Rr,0,qi),new q(0,qi,-Rr),new q(0,qi,Rr),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class Ph{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){_l=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),yl=this._renderer.getActiveMipmapLevel(),El=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_l,vl,yl),this._renderer.xr.enabled=El,t.scissorTest=!1,Oo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===kr||t.mapping===zr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_l=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),yl=this._renderer.getActiveMipmapLevel(),El=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:qs,format:Pn,colorSpace:Li,depthBuffer:!1},r=Dh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dh(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vy(s)),this._blurMaterial=By(s,t,e)}return r}_compileMaterial(t){const e=new Dn(this._lodPlanes[0],t);this._renderer.compile(e,gl)}_sceneToCubeUV(t,e,n,r){const l=new xn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Ch),h.toneMapping=Ti,h.autoClear=!1;const v=new Ef({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),S=new Dn(new ts,v);let w=!1;const g=t.background;g?g.isColor&&(v.color.copy(g),t.background=null,w=!0):(v.color.copy(Ch),w=!0);for(let _=0;_<6;_++){const L=_%3;L===0?(l.up.set(0,c[_],0),l.lookAt(u[_],0,0)):L===1?(l.up.set(0,0,c[_]),l.lookAt(0,u[_],0)):(l.up.set(0,c[_],0),l.lookAt(0,0,u[_]));const I=this._cubeSize;Oo(r,L*I,_>2?I:0,I,I),h.setRenderTarget(r),w&&h.render(S,l),h.render(t,l)}S.geometry.dispose(),S.material.dispose(),h.toneMapping=p,h.autoClear=f,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===kr||t.mapping===zr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Dn(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=t;const c=this._cubeSize;Oo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,gl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),l=Ih[(r-s-1)%Ih.length];this._blur(t,s-1,s,o,l)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,l){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Dn(this._lodPlanes[r],u),p=u.uniforms,v=this._sizeLods[n]-1,S=isFinite(s)?Math.PI/(2*v):2*Math.PI/(2*$i-1),w=s/S,g=isFinite(s)?1+Math.floor(h*w):$i;g>$i&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${$i}`);const _=[];let L=0;for(let x=0;x<$i;++x){const T=x/w,C=Math.exp(-T*T/2);_.push(C),x===0?L+=C:x<g&&(L+=2*C)}for(let x=0;x<_.length;x++)_[x]=_[x]/L;p.envMap.value=t.texture,p.samples.value=g,p.weights.value=_,p.latitudinal.value=o==="latitudinal",l&&(p.poleAxis.value=l);const{_lodMax:I}=this;p.dTheta.value=S,p.mipInt.value=I-n;const N=this._sizeLods[r],W=3*N*(r>I-Dr?r-I+Dr:0),F=4*(this._cubeSize-N);Oo(e,W,F,3*N,2*N),c.setRenderTarget(e),c.render(f,gl)}}function Vy(i){const t=[],e=[],n=[];let r=i;const s=i-Dr+1+Rh.length;for(let o=0;o<s;o++){const l=Math.pow(2,r);e.push(l);let c=1/l;o>i-Dr?c=Rh[o-i+Dr-1]:o===0&&(c=0),n.push(c);const u=1/(l-2),h=-u,f=1+u,p=[h,h,f,h,f,f,h,h,f,f,h,f],v=6,S=6,w=3,g=2,_=1,L=new Float32Array(w*S*v),I=new Float32Array(g*S*v),N=new Float32Array(_*S*v);for(let F=0;F<v;F++){const x=F%3*2/3-1,T=F>2?0:-1,C=[x,T,0,x+2/3,T,0,x+2/3,T+1,0,x,T,0,x+2/3,T+1,0,x,T+1,0];L.set(C,w*S*F),I.set(p,g*S*F);const m=[F,F,F,F,F,F];N.set(m,_*S*F)}const W=new sr;W.setAttribute("position",new Vn(L,w)),W.setAttribute("uv",new Vn(I,g)),W.setAttribute("faceIndex",new Vn(N,_)),t.push(W),r>Dr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Dh(i,t,e){const n=new er(i,t,e);return n.texture.mapping=Ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Oo(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function By(i,t,e){const n=new Float32Array($i),r=new q(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:$i,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Lh(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Nh(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Qc(){return`

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
	`}function ky(i){let t=new WeakMap,e=null;function n(l){if(l&&l.isTexture){const c=l.mapping,u=c===zl||c===Hl,h=c===kr||c===zr;if(u||h){let f=t.get(l);const p=f!==void 0?f.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==p)return e===null&&(e=new Ph(i)),f=u?e.fromEquirectangular(l,f):e.fromCubemap(l,f),f.texture.pmremVersion=l.pmremVersion,t.set(l,f),f.texture;if(f!==void 0)return f.texture;{const v=l.image;return u&&v&&v.height>0||h&&v&&r(v)?(e===null&&(e=new Ph(i)),f=u?e.fromEquirectangular(l):e.fromCubemap(l),f.texture.pmremVersion=l.pmremVersion,t.set(l,f),l.addEventListener("dispose",s),f.texture):null}}}return l}function r(l){let c=0;const u=6;for(let h=0;h<u;h++)l[h]!==void 0&&c++;return c===u}function s(l){const c=l.target;c.removeEventListener("dispose",s);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function zy(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Ko("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Hy(i,t,e,n){const r={},s=new WeakMap;function o(f){const p=f.target;p.index!==null&&t.remove(p.index);for(const S in p.attributes)t.remove(p.attributes[S]);for(const S in p.morphAttributes){const w=p.morphAttributes[S];for(let g=0,_=w.length;g<_;g++)t.remove(w[g])}p.removeEventListener("dispose",o),delete r[p.id];const v=s.get(p);v&&(t.remove(v),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function l(f,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,e.memory.geometries++),p}function c(f){const p=f.attributes;for(const S in p)t.update(p[S],i.ARRAY_BUFFER);const v=f.morphAttributes;for(const S in v){const w=v[S];for(let g=0,_=w.length;g<_;g++)t.update(w[g],i.ARRAY_BUFFER)}}function u(f){const p=[],v=f.index,S=f.attributes.position;let w=0;if(v!==null){const L=v.array;w=v.version;for(let I=0,N=L.length;I<N;I+=3){const W=L[I+0],F=L[I+1],x=L[I+2];p.push(W,F,F,x,x,W)}}else if(S!==void 0){const L=S.array;w=S.version;for(let I=0,N=L.length/3-1;I<N;I+=3){const W=I+0,F=I+1,x=I+2;p.push(W,F,F,x,x,W)}}else return;const g=new(mf(p)?Sf:xf)(p,1);g.version=w;const _=s.get(f);_&&t.remove(_),s.set(f,g)}function h(f){const p=s.get(f);if(p){const v=f.index;v!==null&&p.version<v.version&&u(f)}else u(f);return s.get(f)}return{get:l,update:c,getWireframeAttribute:h}}function Gy(i,t,e){let n;function r(p){n=p}let s,o;function l(p){s=p.type,o=p.bytesPerElement}function c(p,v){i.drawElements(n,v,s,p*o),e.update(v,n,1)}function u(p,v,S){S!==0&&(i.drawElementsInstanced(n,v,s,p*o,S),e.update(v,n,S))}function h(p,v,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,v,0,s,p,0,S);let g=0;for(let _=0;_<S;_++)g+=v[_];e.update(g,n,1)}function f(p,v,S,w){if(S===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<p.length;_++)u(p[_]/o,v[_],w[_]);else{g.multiDrawElementsInstancedWEBGL(n,v,0,s,p,0,w,0,S);let _=0;for(let L=0;L<S;L++)_+=v[L];for(let L=0;L<w.length;L++)e.update(_,n,w[L])}}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Wy(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,l){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=l*(s/3);break;case i.LINES:e.lines+=l*(s/2);break;case i.LINE_STRIP:e.lines+=l*(s-1);break;case i.LINE_LOOP:e.lines+=l*s;break;case i.POINTS:e.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function qy(i,t,e){const n=new WeakMap,r=new Re;function s(o,l,c){const u=o.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,f=h!==void 0?h.length:0;let p=n.get(l);if(p===void 0||p.count!==f){let m=function(){T.dispose(),n.delete(l),l.removeEventListener("dispose",m)};var v=m;p!==void 0&&p.texture.dispose();const S=l.morphAttributes.position!==void 0,w=l.morphAttributes.normal!==void 0,g=l.morphAttributes.color!==void 0,_=l.morphAttributes.position||[],L=l.morphAttributes.normal||[],I=l.morphAttributes.color||[];let N=0;S===!0&&(N=1),w===!0&&(N=2),g===!0&&(N=3);let W=l.attributes.position.count*N,F=1;W>t.maxTextureSize&&(F=Math.ceil(W/t.maxTextureSize),W=t.maxTextureSize);const x=new Float32Array(W*F*4*f),T=new _f(x,W,F,f);T.type=ii,T.needsUpdate=!0;const C=N*4;for(let E=0;E<f;E++){const P=_[E],A=L[E],Y=I[E],nt=W*F*4*E;for(let K=0;K<P.count;K++){const et=K*C;S===!0&&(r.fromBufferAttribute(P,K),x[nt+et+0]=r.x,x[nt+et+1]=r.y,x[nt+et+2]=r.z,x[nt+et+3]=0),w===!0&&(r.fromBufferAttribute(A,K),x[nt+et+4]=r.x,x[nt+et+5]=r.y,x[nt+et+6]=r.z,x[nt+et+7]=0),g===!0&&(r.fromBufferAttribute(Y,K),x[nt+et+8]=r.x,x[nt+et+9]=r.y,x[nt+et+10]=r.z,x[nt+et+11]=Y.itemSize===4?r.w:1)}}p={count:f,texture:T,size:new fe(W,F)},n.set(l,p),l.addEventListener("dispose",m)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let S=0;for(let g=0;g<u.length;g++)S+=u[g];const w=l.morphTargetsRelative?1:1-S;c.getUniforms().setValue(i,"morphTargetBaseInfluence",w),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function Xy(i,t,e,n){let r=new WeakMap;function s(c){const u=n.render.frame,h=c.geometry,f=t.get(c,h);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return f}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:o}}class Rf extends dn{constructor(t,e,n,r,s,o,l,c,u,h=Nr){if(h!==Nr&&h!==Gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Nr&&(n=tr),n===void 0&&h===Gr&&(n=Hr),super(null,r,s,o,l,c,h,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=l!==void 0?l:Sn,this.minFilter=c!==void 0?c:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Cf=new dn,Uh=new Rf(1,1),If=new _f,Pf=new Pg,Df=new Af,Fh=[],Oh=[],Vh=new Float32Array(16),Bh=new Float32Array(9),kh=new Float32Array(4);function es(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Fh[r];if(s===void 0&&(s=new Float32Array(r),Fh[r]=s),t!==0){n.toArray(s,0);for(let o=1,l=0;o!==t;++o)l+=e,i[o].toArray(s,l)}return s}function Ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Aa(i,t){let e=Oh[t];e===void 0&&(e=new Int32Array(t),Oh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function jy(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function $y(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function Ky(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function Yy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function Qy(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Ve(e,n))return;kh.set(n),i.uniformMatrix2fv(this.addr,!1,kh),Be(e,n)}}function Jy(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Ve(e,n))return;Bh.set(n),i.uniformMatrix3fv(this.addr,!1,Bh),Be(e,n)}}function Zy(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Ve(e,n))return;Vh.set(n),i.uniformMatrix4fv(this.addr,!1,Vh),Be(e,n)}}function t0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function e0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function n0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function i0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function r0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function s0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function o0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function a0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function l0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Uh.compareFunction=pf,s=Uh):s=Cf,e.setTexture2D(t||s,r)}function c0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Pf,r)}function u0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Df,r)}function h0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||If,r)}function d0(i){switch(i){case 5126:return jy;case 35664:return $y;case 35665:return Ky;case 35666:return Yy;case 35674:return Qy;case 35675:return Jy;case 35676:return Zy;case 5124:case 35670:return t0;case 35667:case 35671:return e0;case 35668:case 35672:return n0;case 35669:case 35673:return i0;case 5125:return r0;case 36294:return s0;case 36295:return o0;case 36296:return a0;case 35678:case 36198:case 36298:case 36306:case 35682:return l0;case 35679:case 36299:case 36307:return c0;case 35680:case 36300:case 36308:case 36293:return u0;case 36289:case 36303:case 36311:case 36292:return h0}}function f0(i,t){i.uniform1fv(this.addr,t)}function p0(i,t){const e=es(t,this.size,2);i.uniform2fv(this.addr,e)}function m0(i,t){const e=es(t,this.size,3);i.uniform3fv(this.addr,e)}function g0(i,t){const e=es(t,this.size,4);i.uniform4fv(this.addr,e)}function _0(i,t){const e=es(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function v0(i,t){const e=es(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function y0(i,t){const e=es(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function E0(i,t){i.uniform1iv(this.addr,t)}function x0(i,t){i.uniform2iv(this.addr,t)}function S0(i,t){i.uniform3iv(this.addr,t)}function T0(i,t){i.uniform4iv(this.addr,t)}function M0(i,t){i.uniform1uiv(this.addr,t)}function A0(i,t){i.uniform2uiv(this.addr,t)}function w0(i,t){i.uniform3uiv(this.addr,t)}function b0(i,t){i.uniform4uiv(this.addr,t)}function R0(i,t,e){const n=this.cache,r=t.length,s=Aa(e,r);Ve(n,s)||(i.uniform1iv(this.addr,s),Be(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Cf,s[o])}function C0(i,t,e){const n=this.cache,r=t.length,s=Aa(e,r);Ve(n,s)||(i.uniform1iv(this.addr,s),Be(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Pf,s[o])}function I0(i,t,e){const n=this.cache,r=t.length,s=Aa(e,r);Ve(n,s)||(i.uniform1iv(this.addr,s),Be(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Df,s[o])}function P0(i,t,e){const n=this.cache,r=t.length,s=Aa(e,r);Ve(n,s)||(i.uniform1iv(this.addr,s),Be(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||If,s[o])}function D0(i){switch(i){case 5126:return f0;case 35664:return p0;case 35665:return m0;case 35666:return g0;case 35674:return _0;case 35675:return v0;case 35676:return y0;case 5124:case 35670:return E0;case 35667:case 35671:return x0;case 35668:case 35672:return S0;case 35669:case 35673:return T0;case 5125:return M0;case 36294:return A0;case 36295:return w0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return R0;case 35679:case 36299:case 36307:return C0;case 35680:case 36300:case 36308:case 36293:return I0;case 36289:case 36303:case 36311:case 36292:return P0}}class L0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=d0(e.type)}}class N0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=D0(e.type)}}class U0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const l=r[s];l.setValue(t,e[l.id],n)}}}const xl=/(\w+)(\])?(\[|\.)?/g;function zh(i,t){i.seq.push(t),i.map[t.id]=t}function F0(i,t,e){const n=i.name,r=n.length;for(xl.lastIndex=0;;){const s=xl.exec(n),o=xl.lastIndex;let l=s[1];const c=s[2]==="]",u=s[3];if(c&&(l=l|0),u===void 0||u==="["&&o+2===r){zh(e,u===void 0?new L0(l,i,t):new N0(l,i,t));break}else{let f=e.map[l];f===void 0&&(f=new U0(l),zh(e,f)),e=f}}}class Yo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);F0(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const l=e[s],c=n[l.id];c.needsUpdate!==!1&&l.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function Hh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const O0=37297;let V0=0;function B0(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const l=o+1;n.push(`${l===t?">":" "} ${l}: ${e[o]}`)}return n.join(`
`)}function k0(i){const t=de.getPrimaries(de.workingColorSpace),e=de.getPrimaries(i);let n;switch(t===e?n="":t===ra&&e===ia?n="LinearDisplayP3ToLinearSRGB":t===ia&&e===ra&&(n="LinearSRGBToLinearDisplayP3"),i){case Li:case Ma:return[n,"LinearTransferOETF"];case Fn:case $c:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Gh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+B0(i.getShaderSource(t),o)}else return r}function z0(i,t){const e=k0(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function H0(i,t){let e;switch(t){case rg:e="Linear";break;case sg:e="Reinhard";break;case og:e="Cineon";break;case tf:e="ACESFilmic";break;case lg:e="AgX";break;case cg:e="Neutral";break;case ag:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Vo=new q;function G0(){de.getLuminanceCoefficients(Vo);const i=Vo.x.toFixed(4),t=Vo.y.toFixed(4),e=Vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function W0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)}function q0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function X0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let l=1;s.type===i.FLOAT_MAT2&&(l=2),s.type===i.FLOAT_MAT3&&(l=3),s.type===i.FLOAT_MAT4&&(l=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:l}}return e}function Ms(i){return i!==""}function Wh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const j0=/^[ \t]*#include +<([\w\d./]+)>/gm;function vc(i){return i.replace(j0,K0)}const $0=new Map;function K0(i,t){let e=jt[t];if(e===void 0){const n=$0.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return vc(e)}const Y0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xh(i){return i.replace(Y0,Q0)}function Q0(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function jh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function J0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Qd?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Jd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ti&&(t="SHADOWMAP_TYPE_VSM"),t}function Z0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case kr:case zr:t="ENVMAP_TYPE_CUBE";break;case Ta:t="ENVMAP_TYPE_CUBE_UV";break}return t}function tE(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case zr:t="ENVMAP_MODE_REFRACTION";break}return t}function eE(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Zd:t="ENVMAP_BLENDING_MULTIPLY";break;case ng:t="ENVMAP_BLENDING_MIX";break;case ig:t="ENVMAP_BLENDING_ADD";break}return t}function nE(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function iE(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,l=e.fragmentShader;const c=J0(e),u=Z0(e),h=tE(e),f=eE(e),p=nE(e),v=W0(e),S=q0(s),w=r.createProgram();let g,_,L=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(Ms).join(`
`),g.length>0&&(g+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(Ms).join(`
`),_.length>0&&(_+=`
`)):(g=[jh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),_=[jh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ti?"#define TONE_MAPPING":"",e.toneMapping!==Ti?jt.tonemapping_pars_fragment:"",e.toneMapping!==Ti?H0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,z0("linearToOutputTexel",e.outputColorSpace),G0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ms).join(`
`)),o=vc(o),o=Wh(o,e),o=qh(o,e),l=vc(l),l=Wh(l,e),l=qh(l,e),o=Xh(o),l=Xh(l),e.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,g=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,_=["#define varying in",e.glslVersion===uh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const I=L+g+o,N=L+_+l,W=Hh(r,r.VERTEX_SHADER,I),F=Hh(r,r.FRAGMENT_SHADER,N);r.attachShader(w,W),r.attachShader(w,F),e.index0AttributeName!==void 0?r.bindAttribLocation(w,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(w,0,"position"),r.linkProgram(w);function x(E){if(i.debug.checkShaderErrors){const P=r.getProgramInfoLog(w).trim(),A=r.getShaderInfoLog(W).trim(),Y=r.getShaderInfoLog(F).trim();let nt=!0,K=!0;if(r.getProgramParameter(w,r.LINK_STATUS)===!1)if(nt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,w,W,F);else{const et=Gh(r,W,"vertex"),$=Gh(r,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(w,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+P+`
`+et+`
`+$)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(A===""||Y==="")&&(K=!1);K&&(E.diagnostics={runnable:nt,programLog:P,vertexShader:{log:A,prefix:g},fragmentShader:{log:Y,prefix:_}})}r.deleteShader(W),r.deleteShader(F),T=new Yo(r,w),C=X0(r,w)}let T;this.getUniforms=function(){return T===void 0&&x(this),T};let C;this.getAttributes=function(){return C===void 0&&x(this),C};let m=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return m===!1&&(m=r.getProgramParameter(w,O0)),m},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(w),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=V0++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=W,this.fragmentShader=F,this}let rE=0;class sE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new oE(t),e.set(t,n)),n}}class oE{constructor(t){this.id=rE++,this.code=t,this.usedTimes=0}}function aE(i,t,e,n,r,s,o){const l=new vf,c=new sE,u=new Set,h=[],f=r.logarithmicDepthBuffer,p=r.reverseDepthBuffer,v=r.vertexTextures;let S=r.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(m){return u.add(m),m===0?"uv":`uv${m}`}function _(m,E,P,A,Y){const nt=A.fog,K=Y.geometry,et=m.isMeshStandardMaterial?A.environment:null,$=(m.isMeshStandardMaterial?e:t).get(m.envMap||et),yt=$&&$.mapping===Ta?$.image.height:null,Et=w[m.type];m.precision!==null&&(S=r.getMaxPrecision(m.precision),S!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",S,"instead."));const Rt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Xt=Rt!==void 0?Rt.length:0;let Bt=0;K.morphAttributes.position!==void 0&&(Bt=1),K.morphAttributes.normal!==void 0&&(Bt=2),K.morphAttributes.color!==void 0&&(Bt=3);let Q,ot,At,_t;if(Et){const De=On[Et];Q=De.vertexShader,ot=De.fragmentShader}else Q=m.vertexShader,ot=m.fragmentShader,c.update(m),At=c.getVertexShaderID(m),_t=c.getFragmentShaderID(m);const zt=i.getRenderTarget(),Ut=Y.isInstancedMesh===!0,Kt=Y.isBatchedMesh===!0,re=!!m.map,Jt=!!m.matcap,U=!!$,Ge=!!m.aoMap,Yt=!!m.lightMap,te=!!m.bumpMap,Ot=!!m.normalMap,ge=!!m.displacementMap,Vt=!!m.emissiveMap,D=!!m.metalnessMap,M=!!m.roughnessMap,z=m.anisotropy>0,J=m.clearcoat>0,rt=m.dispersion>0,Z=m.iridescence>0,dt=m.sheen>0,at=m.transmission>0,vt=z&&!!m.anisotropyMap,ee=J&&!!m.clearcoatMap,lt=J&&!!m.clearcoatNormalMap,Tt=J&&!!m.clearcoatRoughnessMap,Dt=Z&&!!m.iridescenceMap,Ft=Z&&!!m.iridescenceThicknessMap,xt=dt&&!!m.sheenColorMap,Qt=dt&&!!m.sheenRoughnessMap,Ht=!!m.specularMap,me=!!m.specularColorMap,O=!!m.specularIntensityMap,gt=at&&!!m.transmissionMap,j=at&&!!m.thicknessMap,tt=!!m.gradientMap,ft=!!m.alphaMap,pt=m.alphaTest>0,qt=!!m.alphaHash,Te=!!m.extensions;let Ue=Ti;m.toneMapped&&(zt===null||zt.isXRRenderTarget===!0)&&(Ue=i.toneMapping);const ne={shaderID:Et,shaderType:m.type,shaderName:m.name,vertexShader:Q,fragmentShader:ot,defines:m.defines,customVertexShaderID:At,customFragmentShaderID:_t,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:S,batching:Kt,batchingColor:Kt&&Y._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&Y.instanceColor!==null,instancingMorph:Ut&&Y.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:zt===null?i.outputColorSpace:zt.isXRRenderTarget===!0?zt.texture.colorSpace:Li,alphaToCoverage:!!m.alphaToCoverage,map:re,matcap:Jt,envMap:U,envMapMode:U&&$.mapping,envMapCubeUVHeight:yt,aoMap:Ge,lightMap:Yt,bumpMap:te,normalMap:Ot,displacementMap:v&&ge,emissiveMap:Vt,normalMapObjectSpace:Ot&&m.normalMapType===fg,normalMapTangentSpace:Ot&&m.normalMapType===ff,metalnessMap:D,roughnessMap:M,anisotropy:z,anisotropyMap:vt,clearcoat:J,clearcoatMap:ee,clearcoatNormalMap:lt,clearcoatRoughnessMap:Tt,dispersion:rt,iridescence:Z,iridescenceMap:Dt,iridescenceThicknessMap:Ft,sheen:dt,sheenColorMap:xt,sheenRoughnessMap:Qt,specularMap:Ht,specularColorMap:me,specularIntensityMap:O,transmission:at,transmissionMap:gt,thicknessMap:j,gradientMap:tt,opaque:m.transparent===!1&&m.blending===Lr&&m.alphaToCoverage===!1,alphaMap:ft,alphaTest:pt,alphaHash:qt,combine:m.combine,mapUv:re&&g(m.map.channel),aoMapUv:Ge&&g(m.aoMap.channel),lightMapUv:Yt&&g(m.lightMap.channel),bumpMapUv:te&&g(m.bumpMap.channel),normalMapUv:Ot&&g(m.normalMap.channel),displacementMapUv:ge&&g(m.displacementMap.channel),emissiveMapUv:Vt&&g(m.emissiveMap.channel),metalnessMapUv:D&&g(m.metalnessMap.channel),roughnessMapUv:M&&g(m.roughnessMap.channel),anisotropyMapUv:vt&&g(m.anisotropyMap.channel),clearcoatMapUv:ee&&g(m.clearcoatMap.channel),clearcoatNormalMapUv:lt&&g(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&g(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&g(m.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&g(m.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&g(m.sheenColorMap.channel),sheenRoughnessMapUv:Qt&&g(m.sheenRoughnessMap.channel),specularMapUv:Ht&&g(m.specularMap.channel),specularColorMapUv:me&&g(m.specularColorMap.channel),specularIntensityMapUv:O&&g(m.specularIntensityMap.channel),transmissionMapUv:gt&&g(m.transmissionMap.channel),thicknessMapUv:j&&g(m.thicknessMap.channel),alphaMapUv:ft&&g(m.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ot||z),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!K.attributes.uv&&(re||ft),fog:!!nt,useFog:m.fog===!0,fogExp2:!!nt&&nt.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:p,skinning:Y.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Xt,morphTextureStride:Bt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ue,decodeVideoTexture:re&&m.map.isVideoTexture===!0&&de.getTransfer(m.map.colorSpace)===xe,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===ni,flipSided:m.side===hn,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:Te&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&m.extensions.multiDraw===!0||Kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return ne.vertexUv1s=u.has(1),ne.vertexUv2s=u.has(2),ne.vertexUv3s=u.has(3),u.clear(),ne}function L(m){const E=[];if(m.shaderID?E.push(m.shaderID):(E.push(m.customVertexShaderID),E.push(m.customFragmentShaderID)),m.defines!==void 0)for(const P in m.defines)E.push(P),E.push(m.defines[P]);return m.isRawShaderMaterial===!1&&(I(E,m),N(E,m),E.push(i.outputColorSpace)),E.push(m.customProgramCacheKey),E.join()}function I(m,E){m.push(E.precision),m.push(E.outputColorSpace),m.push(E.envMapMode),m.push(E.envMapCubeUVHeight),m.push(E.mapUv),m.push(E.alphaMapUv),m.push(E.lightMapUv),m.push(E.aoMapUv),m.push(E.bumpMapUv),m.push(E.normalMapUv),m.push(E.displacementMapUv),m.push(E.emissiveMapUv),m.push(E.metalnessMapUv),m.push(E.roughnessMapUv),m.push(E.anisotropyMapUv),m.push(E.clearcoatMapUv),m.push(E.clearcoatNormalMapUv),m.push(E.clearcoatRoughnessMapUv),m.push(E.iridescenceMapUv),m.push(E.iridescenceThicknessMapUv),m.push(E.sheenColorMapUv),m.push(E.sheenRoughnessMapUv),m.push(E.specularMapUv),m.push(E.specularColorMapUv),m.push(E.specularIntensityMapUv),m.push(E.transmissionMapUv),m.push(E.thicknessMapUv),m.push(E.combine),m.push(E.fogExp2),m.push(E.sizeAttenuation),m.push(E.morphTargetsCount),m.push(E.morphAttributeCount),m.push(E.numDirLights),m.push(E.numPointLights),m.push(E.numSpotLights),m.push(E.numSpotLightMaps),m.push(E.numHemiLights),m.push(E.numRectAreaLights),m.push(E.numDirLightShadows),m.push(E.numPointLightShadows),m.push(E.numSpotLightShadows),m.push(E.numSpotLightShadowsWithMaps),m.push(E.numLightProbes),m.push(E.shadowMapType),m.push(E.toneMapping),m.push(E.numClippingPlanes),m.push(E.numClipIntersection),m.push(E.depthPacking)}function N(m,E){l.disableAll(),E.supportsVertexTextures&&l.enable(0),E.instancing&&l.enable(1),E.instancingColor&&l.enable(2),E.instancingMorph&&l.enable(3),E.matcap&&l.enable(4),E.envMap&&l.enable(5),E.normalMapObjectSpace&&l.enable(6),E.normalMapTangentSpace&&l.enable(7),E.clearcoat&&l.enable(8),E.iridescence&&l.enable(9),E.alphaTest&&l.enable(10),E.vertexColors&&l.enable(11),E.vertexAlphas&&l.enable(12),E.vertexUv1s&&l.enable(13),E.vertexUv2s&&l.enable(14),E.vertexUv3s&&l.enable(15),E.vertexTangents&&l.enable(16),E.anisotropy&&l.enable(17),E.alphaHash&&l.enable(18),E.batching&&l.enable(19),E.dispersion&&l.enable(20),E.batchingColor&&l.enable(21),m.push(l.mask),l.disableAll(),E.fog&&l.enable(0),E.useFog&&l.enable(1),E.flatShading&&l.enable(2),E.logarithmicDepthBuffer&&l.enable(3),E.reverseDepthBuffer&&l.enable(4),E.skinning&&l.enable(5),E.morphTargets&&l.enable(6),E.morphNormals&&l.enable(7),E.morphColors&&l.enable(8),E.premultipliedAlpha&&l.enable(9),E.shadowMapEnabled&&l.enable(10),E.doubleSided&&l.enable(11),E.flipSided&&l.enable(12),E.useDepthPacking&&l.enable(13),E.dithering&&l.enable(14),E.transmission&&l.enable(15),E.sheen&&l.enable(16),E.opaque&&l.enable(17),E.pointsUvs&&l.enable(18),E.decodeVideoTexture&&l.enable(19),E.alphaToCoverage&&l.enable(20),m.push(l.mask)}function W(m){const E=w[m.type];let P;if(E){const A=On[E];P=Wg.clone(A.uniforms)}else P=m.uniforms;return P}function F(m,E){let P;for(let A=0,Y=h.length;A<Y;A++){const nt=h[A];if(nt.cacheKey===E){P=nt,++P.usedTimes;break}}return P===void 0&&(P=new iE(i,E,m,s),h.push(P)),P}function x(m){if(--m.usedTimes===0){const E=h.indexOf(m);h[E]=h[h.length-1],h.pop(),m.destroy()}}function T(m){c.remove(m)}function C(){c.dispose()}return{getParameters:_,getProgramCacheKey:L,getUniforms:W,acquireProgram:F,releaseProgram:x,releaseShaderCache:T,programs:h,dispose:C}}function lE(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let l=i.get(o);return l===void 0&&(l={},i.set(o,l)),l}function n(o){i.delete(o)}function r(o,l,c){i.get(o)[l]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function cE(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function $h(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Kh(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(f,p,v,S,w,g){let _=i[t];return _===void 0?(_={id:f.id,object:f,geometry:p,material:v,groupOrder:S,renderOrder:f.renderOrder,z:w,group:g},i[t]=_):(_.id=f.id,_.object=f,_.geometry=p,_.material=v,_.groupOrder=S,_.renderOrder=f.renderOrder,_.z=w,_.group=g),t++,_}function l(f,p,v,S,w,g){const _=o(f,p,v,S,w,g);v.transmission>0?n.push(_):v.transparent===!0?r.push(_):e.push(_)}function c(f,p,v,S,w,g){const _=o(f,p,v,S,w,g);v.transmission>0?n.unshift(_):v.transparent===!0?r.unshift(_):e.unshift(_)}function u(f,p){e.length>1&&e.sort(f||cE),n.length>1&&n.sort(p||$h),r.length>1&&r.sort(p||$h)}function h(){for(let f=t,p=i.length;f<p;f++){const v=i[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function uE(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new Kh,i.set(n,[o])):r>=s.length?(o=new Kh,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function hE(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new q,color:new ce};break;case"SpotLight":e={position:new q,direction:new q,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new ce,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":e={color:new ce,position:new q,halfWidth:new q,halfHeight:new q};break}return i[t.id]=e,e}}}function dE(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let fE=0;function pE(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function mE(i){const t=new hE,e=dE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new q);const r=new q,s=new Ce,o=new Ce;function l(u){let h=0,f=0,p=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let v=0,S=0,w=0,g=0,_=0,L=0,I=0,N=0,W=0,F=0,x=0;u.sort(pE);for(let C=0,m=u.length;C<m;C++){const E=u[C],P=E.color,A=E.intensity,Y=E.distance,nt=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=P.r*A,f+=P.g*A,p+=P.b*A;else if(E.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(E.sh.coefficients[K],A);x++}else if(E.isDirectionalLight){const K=t.get(E);if(K.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const et=E.shadow,$=e.get(E);$.shadowIntensity=et.intensity,$.shadowBias=et.bias,$.shadowNormalBias=et.normalBias,$.shadowRadius=et.radius,$.shadowMapSize=et.mapSize,n.directionalShadow[v]=$,n.directionalShadowMap[v]=nt,n.directionalShadowMatrix[v]=E.shadow.matrix,L++}n.directional[v]=K,v++}else if(E.isSpotLight){const K=t.get(E);K.position.setFromMatrixPosition(E.matrixWorld),K.color.copy(P).multiplyScalar(A),K.distance=Y,K.coneCos=Math.cos(E.angle),K.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),K.decay=E.decay,n.spot[w]=K;const et=E.shadow;if(E.map&&(n.spotLightMap[W]=E.map,W++,et.updateMatrices(E),E.castShadow&&F++),n.spotLightMatrix[w]=et.matrix,E.castShadow){const $=e.get(E);$.shadowIntensity=et.intensity,$.shadowBias=et.bias,$.shadowNormalBias=et.normalBias,$.shadowRadius=et.radius,$.shadowMapSize=et.mapSize,n.spotShadow[w]=$,n.spotShadowMap[w]=nt,N++}w++}else if(E.isRectAreaLight){const K=t.get(E);K.color.copy(P).multiplyScalar(A),K.halfWidth.set(E.width*.5,0,0),K.halfHeight.set(0,E.height*.5,0),n.rectArea[g]=K,g++}else if(E.isPointLight){const K=t.get(E);if(K.color.copy(E.color).multiplyScalar(E.intensity),K.distance=E.distance,K.decay=E.decay,E.castShadow){const et=E.shadow,$=e.get(E);$.shadowIntensity=et.intensity,$.shadowBias=et.bias,$.shadowNormalBias=et.normalBias,$.shadowRadius=et.radius,$.shadowMapSize=et.mapSize,$.shadowCameraNear=et.camera.near,$.shadowCameraFar=et.camera.far,n.pointShadow[S]=$,n.pointShadowMap[S]=nt,n.pointShadowMatrix[S]=E.shadow.matrix,I++}n.point[S]=K,S++}else if(E.isHemisphereLight){const K=t.get(E);K.skyColor.copy(E.color).multiplyScalar(A),K.groundColor.copy(E.groundColor).multiplyScalar(A),n.hemi[_]=K,_++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=p;const T=n.hash;(T.directionalLength!==v||T.pointLength!==S||T.spotLength!==w||T.rectAreaLength!==g||T.hemiLength!==_||T.numDirectionalShadows!==L||T.numPointShadows!==I||T.numSpotShadows!==N||T.numSpotMaps!==W||T.numLightProbes!==x)&&(n.directional.length=v,n.spot.length=w,n.rectArea.length=g,n.point.length=S,n.hemi.length=_,n.directionalShadow.length=L,n.directionalShadowMap.length=L,n.pointShadow.length=I,n.pointShadowMap.length=I,n.spotShadow.length=N,n.spotShadowMap.length=N,n.directionalShadowMatrix.length=L,n.pointShadowMatrix.length=I,n.spotLightMatrix.length=N+W-F,n.spotLightMap.length=W,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=x,T.directionalLength=v,T.pointLength=S,T.spotLength=w,T.rectAreaLength=g,T.hemiLength=_,T.numDirectionalShadows=L,T.numPointShadows=I,T.numSpotShadows=N,T.numSpotMaps=W,T.numLightProbes=x,n.version=fE++)}function c(u,h){let f=0,p=0,v=0,S=0,w=0;const g=h.matrixWorldInverse;for(let _=0,L=u.length;_<L;_++){const I=u[_];if(I.isDirectionalLight){const N=n.directional[f];N.direction.setFromMatrixPosition(I.matrixWorld),r.setFromMatrixPosition(I.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(g),f++}else if(I.isSpotLight){const N=n.spot[v];N.position.setFromMatrixPosition(I.matrixWorld),N.position.applyMatrix4(g),N.direction.setFromMatrixPosition(I.matrixWorld),r.setFromMatrixPosition(I.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(g),v++}else if(I.isRectAreaLight){const N=n.rectArea[S];N.position.setFromMatrixPosition(I.matrixWorld),N.position.applyMatrix4(g),o.identity(),s.copy(I.matrixWorld),s.premultiply(g),o.extractRotation(s),N.halfWidth.set(I.width*.5,0,0),N.halfHeight.set(0,I.height*.5,0),N.halfWidth.applyMatrix4(o),N.halfHeight.applyMatrix4(o),S++}else if(I.isPointLight){const N=n.point[p];N.position.setFromMatrixPosition(I.matrixWorld),N.position.applyMatrix4(g),p++}else if(I.isHemisphereLight){const N=n.hemi[w];N.direction.setFromMatrixPosition(I.matrixWorld),N.direction.transformDirection(g),w++}}}return{setup:l,setupView:c,state:n}}function Yh(i){const t=new mE(i),e=[],n=[];function r(h){u.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function l(){t.setup(e)}function c(h){t.setupView(e,h)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function gE(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let l;return o===void 0?(l=new Yh(i),t.set(r,[l])):s>=o.length?(l=new Yh(i),o.push(l)):l=o[s],l}function n(){t=new WeakMap}return{get:e,dispose:n}}class _E extends Ks{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class vE extends Ks{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const yE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EE=`uniform sampler2D shadow_pass;
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
}`;function xE(i,t,e){let n=new Yc;const r=new fe,s=new fe,o=new Re,l=new _E({depthPacking:dg}),c=new vE,u={},h=e.maxTextureSize,f={[bi]:hn,[hn]:bi,[ni]:ni},p=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:yE,fragmentShader:EE}),v=p.clone();v.defines.HORIZONTAL_PASS=1;const S=new sr;S.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Dn(S,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qd;let _=this.type;this.render=function(F,x,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||F.length===0)return;const C=i.getRenderTarget(),m=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Si),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const A=_!==ti&&this.type===ti,Y=_===ti&&this.type!==ti;for(let nt=0,K=F.length;nt<K;nt++){const et=F[nt],$=et.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const yt=$.getFrameExtents();if(r.multiply(yt),s.copy($.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/yt.x),r.x=s.x*yt.x,$.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/yt.y),r.y=s.y*yt.y,$.mapSize.y=s.y)),$.map===null||A===!0||Y===!0){const Rt=this.type!==ti?{minFilter:Sn,magFilter:Sn}:{};$.map!==null&&$.map.dispose(),$.map=new er(r.x,r.y,Rt),$.map.texture.name=et.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const Et=$.getViewportCount();for(let Rt=0;Rt<Et;Rt++){const Xt=$.getViewport(Rt);o.set(s.x*Xt.x,s.y*Xt.y,s.x*Xt.z,s.y*Xt.w),P.viewport(o),$.updateMatrices(et,Rt),n=$.getFrustum(),N(x,T,$.camera,et,this.type)}$.isPointLightShadow!==!0&&this.type===ti&&L($,T),$.needsUpdate=!1}_=this.type,g.needsUpdate=!1,i.setRenderTarget(C,m,E)};function L(F,x){const T=t.update(w);p.defines.VSM_SAMPLES!==F.blurSamples&&(p.defines.VSM_SAMPLES=F.blurSamples,v.defines.VSM_SAMPLES=F.blurSamples,p.needsUpdate=!0,v.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new er(r.x,r.y)),p.uniforms.shadow_pass.value=F.map.texture,p.uniforms.resolution.value=F.mapSize,p.uniforms.radius.value=F.radius,i.setRenderTarget(F.mapPass),i.clear(),i.renderBufferDirect(x,null,T,p,w,null),v.uniforms.shadow_pass.value=F.mapPass.texture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,i.setRenderTarget(F.map),i.clear(),i.renderBufferDirect(x,null,T,v,w,null)}function I(F,x,T,C){let m=null;const E=T.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(E!==void 0)m=E;else if(m=T.isPointLight===!0?c:l,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0){const P=m.uuid,A=x.uuid;let Y=u[P];Y===void 0&&(Y={},u[P]=Y);let nt=Y[A];nt===void 0&&(nt=m.clone(),Y[A]=nt,x.addEventListener("dispose",W)),m=nt}if(m.visible=x.visible,m.wireframe=x.wireframe,C===ti?m.side=x.shadowSide!==null?x.shadowSide:x.side:m.side=x.shadowSide!==null?x.shadowSide:f[x.side],m.alphaMap=x.alphaMap,m.alphaTest=x.alphaTest,m.map=x.map,m.clipShadows=x.clipShadows,m.clippingPlanes=x.clippingPlanes,m.clipIntersection=x.clipIntersection,m.displacementMap=x.displacementMap,m.displacementScale=x.displacementScale,m.displacementBias=x.displacementBias,m.wireframeLinewidth=x.wireframeLinewidth,m.linewidth=x.linewidth,T.isPointLight===!0&&m.isMeshDistanceMaterial===!0){const P=i.properties.get(m);P.light=T}return m}function N(F,x,T,C,m){if(F.visible===!1)return;if(F.layers.test(x.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&m===ti)&&(!F.frustumCulled||n.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,F.matrixWorld);const A=t.update(F),Y=F.material;if(Array.isArray(Y)){const nt=A.groups;for(let K=0,et=nt.length;K<et;K++){const $=nt[K],yt=Y[$.materialIndex];if(yt&&yt.visible){const Et=I(F,yt,C,m);F.onBeforeShadow(i,F,x,T,A,Et,$),i.renderBufferDirect(T,null,A,Et,F,$),F.onAfterShadow(i,F,x,T,A,Et,$)}}}else if(Y.visible){const nt=I(F,Y,C,m);F.onBeforeShadow(i,F,x,T,A,nt,null),i.renderBufferDirect(T,null,A,nt,F,null),F.onAfterShadow(i,F,x,T,A,nt,null)}}const P=F.children;for(let A=0,Y=P.length;A<Y;A++)N(P[A],x,T,C,m)}function W(F){F.target.removeEventListener("dispose",W);for(const T in u){const C=u[T],m=F.target.uuid;m in C&&(C[m].dispose(),delete C[m])}}}const SE={[Nl]:Ul,[Fl]:Bl,[Ol]:kl,[Br]:Vl,[Ul]:Nl,[Bl]:Fl,[kl]:Ol,[Vl]:Br};function TE(i){function t(){let O=!1;const gt=new Re;let j=null;const tt=new Re(0,0,0,0);return{setMask:function(ft){j!==ft&&!O&&(i.colorMask(ft,ft,ft,ft),j=ft)},setLocked:function(ft){O=ft},setClear:function(ft,pt,qt,Te,Ue){Ue===!0&&(ft*=Te,pt*=Te,qt*=Te),gt.set(ft,pt,qt,Te),tt.equals(gt)===!1&&(i.clearColor(ft,pt,qt,Te),tt.copy(gt))},reset:function(){O=!1,j=null,tt.set(-1,0,0,0)}}}function e(){let O=!1,gt=!1,j=null,tt=null,ft=null;return{setReversed:function(pt){gt=pt},setTest:function(pt){pt?At(i.DEPTH_TEST):_t(i.DEPTH_TEST)},setMask:function(pt){j!==pt&&!O&&(i.depthMask(pt),j=pt)},setFunc:function(pt){if(gt&&(pt=SE[pt]),tt!==pt){switch(pt){case Nl:i.depthFunc(i.NEVER);break;case Ul:i.depthFunc(i.ALWAYS);break;case Fl:i.depthFunc(i.LESS);break;case Br:i.depthFunc(i.LEQUAL);break;case Ol:i.depthFunc(i.EQUAL);break;case Vl:i.depthFunc(i.GEQUAL);break;case Bl:i.depthFunc(i.GREATER);break;case kl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=pt}},setLocked:function(pt){O=pt},setClear:function(pt){ft!==pt&&(i.clearDepth(pt),ft=pt)},reset:function(){O=!1,j=null,tt=null,ft=null}}}function n(){let O=!1,gt=null,j=null,tt=null,ft=null,pt=null,qt=null,Te=null,Ue=null;return{setTest:function(ne){O||(ne?At(i.STENCIL_TEST):_t(i.STENCIL_TEST))},setMask:function(ne){gt!==ne&&!O&&(i.stencilMask(ne),gt=ne)},setFunc:function(ne,De,yn){(j!==ne||tt!==De||ft!==yn)&&(i.stencilFunc(ne,De,yn),j=ne,tt=De,ft=yn)},setOp:function(ne,De,yn){(pt!==ne||qt!==De||Te!==yn)&&(i.stencilOp(ne,De,yn),pt=ne,qt=De,Te=yn)},setLocked:function(ne){O=ne},setClear:function(ne){Ue!==ne&&(i.clearStencil(ne),Ue=ne)},reset:function(){O=!1,gt=null,j=null,tt=null,ft=null,pt=null,qt=null,Te=null,Ue=null}}}const r=new t,s=new e,o=new n,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],v=null,S=!1,w=null,g=null,_=null,L=null,I=null,N=null,W=null,F=new ce(0,0,0),x=0,T=!1,C=null,m=null,E=null,P=null,A=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let nt=!1,K=0;const et=i.getParameter(i.VERSION);et.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(et)[1]),nt=K>=1):et.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),nt=K>=2);let $=null,yt={};const Et=i.getParameter(i.SCISSOR_BOX),Rt=i.getParameter(i.VIEWPORT),Xt=new Re().fromArray(Et),Bt=new Re().fromArray(Rt);function Q(O,gt,j,tt){const ft=new Uint8Array(4),pt=i.createTexture();i.bindTexture(O,pt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qt=0;qt<j;qt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(gt+qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return pt}const ot={};ot[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),ot[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ot[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),At(i.DEPTH_TEST),s.setFunc(Br),Yt(!1),te(rh),At(i.CULL_FACE),U(Si);function At(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function _t(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function zt(O,gt){return h[O]!==gt?(i.bindFramebuffer(O,gt),h[O]=gt,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=gt),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function Ut(O,gt){let j=p,tt=!1;if(O){j=f.get(gt),j===void 0&&(j=[],f.set(gt,j));const ft=O.textures;if(j.length!==ft.length||j[0]!==i.COLOR_ATTACHMENT0){for(let pt=0,qt=ft.length;pt<qt;pt++)j[pt]=i.COLOR_ATTACHMENT0+pt;j.length=ft.length,tt=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,tt=!0);tt&&i.drawBuffers(j)}function Kt(O){return v!==O?(i.useProgram(O),v=O,!0):!1}const re={[ji]:i.FUNC_ADD,[Bm]:i.FUNC_SUBTRACT,[km]:i.FUNC_REVERSE_SUBTRACT};re[zm]=i.MIN,re[Hm]=i.MAX;const Jt={[Gm]:i.ZERO,[Wm]:i.ONE,[qm]:i.SRC_COLOR,[Dl]:i.SRC_ALPHA,[Qm]:i.SRC_ALPHA_SATURATE,[Km]:i.DST_COLOR,[jm]:i.DST_ALPHA,[Xm]:i.ONE_MINUS_SRC_COLOR,[Ll]:i.ONE_MINUS_SRC_ALPHA,[Ym]:i.ONE_MINUS_DST_COLOR,[$m]:i.ONE_MINUS_DST_ALPHA,[Jm]:i.CONSTANT_COLOR,[Zm]:i.ONE_MINUS_CONSTANT_COLOR,[tg]:i.CONSTANT_ALPHA,[eg]:i.ONE_MINUS_CONSTANT_ALPHA};function U(O,gt,j,tt,ft,pt,qt,Te,Ue,ne){if(O===Si){S===!0&&(_t(i.BLEND),S=!1);return}if(S===!1&&(At(i.BLEND),S=!0),O!==Vm){if(O!==w||ne!==T){if((g!==ji||I!==ji)&&(i.blendEquation(i.FUNC_ADD),g=ji,I=ji),ne)switch(O){case Lr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sh:i.blendFunc(i.ONE,i.ONE);break;case oh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ah:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Lr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case oh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ah:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}_=null,L=null,N=null,W=null,F.set(0,0,0),x=0,w=O,T=ne}return}ft=ft||gt,pt=pt||j,qt=qt||tt,(gt!==g||ft!==I)&&(i.blendEquationSeparate(re[gt],re[ft]),g=gt,I=ft),(j!==_||tt!==L||pt!==N||qt!==W)&&(i.blendFuncSeparate(Jt[j],Jt[tt],Jt[pt],Jt[qt]),_=j,L=tt,N=pt,W=qt),(Te.equals(F)===!1||Ue!==x)&&(i.blendColor(Te.r,Te.g,Te.b,Ue),F.copy(Te),x=Ue),w=O,T=!1}function Ge(O,gt){O.side===ni?_t(i.CULL_FACE):At(i.CULL_FACE);let j=O.side===hn;gt&&(j=!j),Yt(j),O.blending===Lr&&O.transparent===!1?U(Si):U(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),s.setFunc(O.depthFunc),s.setTest(O.depthTest),s.setMask(O.depthWrite),r.setMask(O.colorWrite);const tt=O.stencilWrite;o.setTest(tt),tt&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ge(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?At(i.SAMPLE_ALPHA_TO_COVERAGE):_t(i.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(O){C!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),C=O)}function te(O){O!==Fm?(At(i.CULL_FACE),O!==m&&(O===rh?i.cullFace(i.BACK):O===Om?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_t(i.CULL_FACE),m=O}function Ot(O){O!==E&&(nt&&i.lineWidth(O),E=O)}function ge(O,gt,j){O?(At(i.POLYGON_OFFSET_FILL),(P!==gt||A!==j)&&(i.polygonOffset(gt,j),P=gt,A=j)):_t(i.POLYGON_OFFSET_FILL)}function Vt(O){O?At(i.SCISSOR_TEST):_t(i.SCISSOR_TEST)}function D(O){O===void 0&&(O=i.TEXTURE0+Y-1),$!==O&&(i.activeTexture(O),$=O)}function M(O,gt,j){j===void 0&&($===null?j=i.TEXTURE0+Y-1:j=$);let tt=yt[j];tt===void 0&&(tt={type:void 0,texture:void 0},yt[j]=tt),(tt.type!==O||tt.texture!==gt)&&($!==j&&(i.activeTexture(j),$=j),i.bindTexture(O,gt||ot[O]),tt.type=O,tt.texture=gt)}function z(){const O=yt[$];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function dt(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function vt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ee(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function lt(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Tt(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Dt(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ft(O){Xt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Xt.copy(O))}function xt(O){Bt.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Bt.copy(O))}function Qt(O,gt){let j=c.get(gt);j===void 0&&(j=new WeakMap,c.set(gt,j));let tt=j.get(O);tt===void 0&&(tt=i.getUniformBlockIndex(gt,O.name),j.set(O,tt))}function Ht(O,gt){const tt=c.get(gt).get(O);l.get(gt)!==tt&&(i.uniformBlockBinding(gt,tt,O.__bindingPointIndex),l.set(gt,tt))}function me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},$=null,yt={},h={},f=new WeakMap,p=[],v=null,S=!1,w=null,g=null,_=null,L=null,I=null,N=null,W=null,F=new ce(0,0,0),x=0,T=!1,C=null,m=null,E=null,P=null,A=null,Xt.set(0,0,i.canvas.width,i.canvas.height),Bt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:At,disable:_t,bindFramebuffer:zt,drawBuffers:Ut,useProgram:Kt,setBlending:U,setMaterial:Ge,setFlipSided:Yt,setCullFace:te,setLineWidth:Ot,setPolygonOffset:ge,setScissorTest:Vt,activeTexture:D,bindTexture:M,unbindTexture:z,compressedTexImage2D:J,compressedTexImage3D:rt,texImage2D:Tt,texImage3D:Dt,updateUBOMapping:Qt,uniformBlockBinding:Ht,texStorage2D:ee,texStorage3D:lt,texSubImage2D:Z,texSubImage3D:dt,compressedTexSubImage2D:at,compressedTexSubImage3D:vt,scissor:Ft,viewport:xt,reset:me}}function Qh(i,t,e,n){const r=ME(n);switch(e){case of:return i*t;case lf:return i*t;case cf:return i*t*2;case uf:return i*t/r.components*r.byteLength;case qc:return i*t/r.components*r.byteLength;case hf:return i*t*2/r.components*r.byteLength;case Xc:return i*t*2/r.components*r.byteLength;case af:return i*t*3/r.components*r.byteLength;case Pn:return i*t*4/r.components*r.byteLength;case jc:return i*t*4/r.components*r.byteLength;case Wo:case qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xo:case jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xl:case $l:return Math.max(i,16)*Math.max(t,8)/4;case ql:case jl:return Math.max(i,8)*Math.max(t,8)/2;case Kl:case Yl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ql:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Jl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Zl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case tc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ec:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case nc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ic:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case rc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case sc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case oc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ac:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case lc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case cc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case uc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case hc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case $o:case dc:case fc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case df:case pc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case mc:case gc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ME(i){switch(i){case si:case nf:return{byteLength:1,components:1};case Ls:case rf:case qs:return{byteLength:2,components:1};case Gc:case Wc:return{byteLength:2,components:4};case tr:case Hc:case ii:return{byteLength:4,components:1};case sf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function AE(i,t,e,n,r,s,o){const l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new fe,h=new WeakMap;let f;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(D,M){return v?new OffscreenCanvas(D,M):oa("canvas")}function w(D,M,z){let J=1;const rt=Vt(D);if((rt.width>z||rt.height>z)&&(J=z/Math.max(rt.width,rt.height)),J<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Z=Math.floor(J*rt.width),dt=Math.floor(J*rt.height);f===void 0&&(f=S(Z,dt));const at=M?S(Z,dt):f;return at.width=Z,at.height=dt,at.getContext("2d").drawImage(D,0,0,Z,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+Z+"x"+dt+")."),at}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),D;return D}function g(D){return D.generateMipmaps&&D.minFilter!==Sn&&D.minFilter!==Cn}function _(D){i.generateMipmap(D)}function L(D,M,z,J,rt=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Z=M;if(M===i.RED&&(z===i.FLOAT&&(Z=i.R32F),z===i.HALF_FLOAT&&(Z=i.R16F),z===i.UNSIGNED_BYTE&&(Z=i.R8)),M===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.R8UI),z===i.UNSIGNED_SHORT&&(Z=i.R16UI),z===i.UNSIGNED_INT&&(Z=i.R32UI),z===i.BYTE&&(Z=i.R8I),z===i.SHORT&&(Z=i.R16I),z===i.INT&&(Z=i.R32I)),M===i.RG&&(z===i.FLOAT&&(Z=i.RG32F),z===i.HALF_FLOAT&&(Z=i.RG16F),z===i.UNSIGNED_BYTE&&(Z=i.RG8)),M===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.RG8UI),z===i.UNSIGNED_SHORT&&(Z=i.RG16UI),z===i.UNSIGNED_INT&&(Z=i.RG32UI),z===i.BYTE&&(Z=i.RG8I),z===i.SHORT&&(Z=i.RG16I),z===i.INT&&(Z=i.RG32I)),M===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),z===i.UNSIGNED_INT&&(Z=i.RGB32UI),z===i.BYTE&&(Z=i.RGB8I),z===i.SHORT&&(Z=i.RGB16I),z===i.INT&&(Z=i.RGB32I)),M===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),z===i.UNSIGNED_INT&&(Z=i.RGBA32UI),z===i.BYTE&&(Z=i.RGBA8I),z===i.SHORT&&(Z=i.RGBA16I),z===i.INT&&(Z=i.RGBA32I)),M===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),M===i.RGBA){const dt=rt?na:de.getTransfer(J);z===i.FLOAT&&(Z=i.RGBA32F),z===i.HALF_FLOAT&&(Z=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Z=dt===xe?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function I(D,M){let z;return D?M===null||M===tr||M===Hr?z=i.DEPTH24_STENCIL8:M===ii?z=i.DEPTH32F_STENCIL8:M===Ls&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===tr||M===Hr?z=i.DEPTH_COMPONENT24:M===ii?z=i.DEPTH_COMPONENT32F:M===Ls&&(z=i.DEPTH_COMPONENT16),z}function N(D,M){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==Sn&&D.minFilter!==Cn?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function W(D){const M=D.target;M.removeEventListener("dispose",W),x(M),M.isVideoTexture&&h.delete(M)}function F(D){const M=D.target;M.removeEventListener("dispose",F),C(M)}function x(D){const M=n.get(D);if(M.__webglInit===void 0)return;const z=D.source,J=p.get(z);if(J){const rt=J[M.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&T(D),Object.keys(J).length===0&&p.delete(z)}n.remove(D)}function T(D){const M=n.get(D);i.deleteTexture(M.__webglTexture);const z=D.source,J=p.get(z);delete J[M.__cacheKey],o.memory.textures--}function C(D){const M=n.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let rt=0;rt<M.__webglFramebuffer[J].length;rt++)i.deleteFramebuffer(M.__webglFramebuffer[J][rt]);else i.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)i.deleteFramebuffer(M.__webglFramebuffer[J]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const z=D.textures;for(let J=0,rt=z.length;J<rt;J++){const Z=n.get(z[J]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(z[J])}n.remove(D)}let m=0;function E(){m=0}function P(){const D=m;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),m+=1,D}function A(D){const M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function Y(D,M){const z=n.get(D);if(D.isVideoTexture&&Ot(D),D.isRenderTargetTexture===!1&&D.version>0&&z.__version!==D.version){const J=D.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Bt(z,D,M);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+M)}function nt(D,M){const z=n.get(D);if(D.version>0&&z.__version!==D.version){Bt(z,D,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+M)}function K(D,M){const z=n.get(D);if(D.version>0&&z.__version!==D.version){Bt(z,D,M);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+M)}function et(D,M){const z=n.get(D);if(D.version>0&&z.__version!==D.version){Q(z,D,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+M)}const $={[Gl]:i.REPEAT,[Ki]:i.CLAMP_TO_EDGE,[Wl]:i.MIRRORED_REPEAT},yt={[Sn]:i.NEAREST,[ug]:i.NEAREST_MIPMAP_NEAREST,[vo]:i.NEAREST_MIPMAP_LINEAR,[Cn]:i.LINEAR,[Xa]:i.LINEAR_MIPMAP_NEAREST,[Yi]:i.LINEAR_MIPMAP_LINEAR},Et={[pg]:i.NEVER,[Eg]:i.ALWAYS,[mg]:i.LESS,[pf]:i.LEQUAL,[gg]:i.EQUAL,[yg]:i.GEQUAL,[_g]:i.GREATER,[vg]:i.NOTEQUAL};function Rt(D,M){if(M.type===ii&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Cn||M.magFilter===Xa||M.magFilter===vo||M.magFilter===Yi||M.minFilter===Cn||M.minFilter===Xa||M.minFilter===vo||M.minFilter===Yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,$[M.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,$[M.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,$[M.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,yt[M.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,yt[M.minFilter]),M.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,Et[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Sn||M.minFilter!==vo&&M.minFilter!==Yi||M.type===ii&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Xt(D,M){let z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",W));const J=M.source;let rt=p.get(J);rt===void 0&&(rt={},p.set(J,rt));const Z=A(M);if(Z!==D.__cacheKey){rt[Z]===void 0&&(rt[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),rt[Z].usedTimes++;const dt=rt[D.__cacheKey];dt!==void 0&&(rt[D.__cacheKey].usedTimes--,dt.usedTimes===0&&T(M)),D.__cacheKey=Z,D.__webglTexture=rt[Z].texture}return z}function Bt(D,M,z){let J=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=i.TEXTURE_3D);const rt=Xt(D,M),Z=M.source;e.bindTexture(J,D.__webglTexture,i.TEXTURE0+z);const dt=n.get(Z);if(Z.version!==dt.__version||rt===!0){e.activeTexture(i.TEXTURE0+z);const at=de.getPrimaries(de.workingColorSpace),vt=M.colorSpace===Ei?null:de.getPrimaries(M.colorSpace),ee=M.colorSpace===Ei||at===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let lt=w(M.image,!1,r.maxTextureSize);lt=ge(M,lt);const Tt=s.convert(M.format,M.colorSpace),Dt=s.convert(M.type);let Ft=L(M.internalFormat,Tt,Dt,M.colorSpace,M.isVideoTexture);Rt(J,M);let xt;const Qt=M.mipmaps,Ht=M.isVideoTexture!==!0,me=dt.__version===void 0||rt===!0,O=Z.dataReady,gt=N(M,lt);if(M.isDepthTexture)Ft=I(M.format===Gr,M.type),me&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,Ft,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,Ft,lt.width,lt.height,0,Tt,Dt,null));else if(M.isDataTexture)if(Qt.length>0){Ht&&me&&e.texStorage2D(i.TEXTURE_2D,gt,Ft,Qt[0].width,Qt[0].height);for(let j=0,tt=Qt.length;j<tt;j++)xt=Qt[j],Ht?O&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,xt.width,xt.height,Tt,Dt,xt.data):e.texImage2D(i.TEXTURE_2D,j,Ft,xt.width,xt.height,0,Tt,Dt,xt.data);M.generateMipmaps=!1}else Ht?(me&&e.texStorage2D(i.TEXTURE_2D,gt,Ft,lt.width,lt.height),O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt.width,lt.height,Tt,Dt,lt.data)):e.texImage2D(i.TEXTURE_2D,0,Ft,lt.width,lt.height,0,Tt,Dt,lt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ht&&me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Ft,Qt[0].width,Qt[0].height,lt.depth);for(let j=0,tt=Qt.length;j<tt;j++)if(xt=Qt[j],M.format!==Pn)if(Tt!==null)if(Ht){if(O)if(M.layerUpdates.size>0){const ft=Qh(xt.width,xt.height,M.format,M.type);for(const pt of M.layerUpdates){const qt=xt.data.subarray(pt*ft/xt.data.BYTES_PER_ELEMENT,(pt+1)*ft/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,pt,xt.width,xt.height,1,Tt,qt,0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,xt.width,xt.height,lt.depth,Tt,xt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Ft,xt.width,xt.height,lt.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,xt.width,xt.height,lt.depth,Tt,Dt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,Ft,xt.width,xt.height,lt.depth,0,Tt,Dt,xt.data)}else{Ht&&me&&e.texStorage2D(i.TEXTURE_2D,gt,Ft,Qt[0].width,Qt[0].height);for(let j=0,tt=Qt.length;j<tt;j++)xt=Qt[j],M.format!==Pn?Tt!==null?Ht?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,xt.width,xt.height,Tt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,j,Ft,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?O&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,xt.width,xt.height,Tt,Dt,xt.data):e.texImage2D(i.TEXTURE_2D,j,Ft,xt.width,xt.height,0,Tt,Dt,xt.data)}else if(M.isDataArrayTexture)if(Ht){if(me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Ft,lt.width,lt.height,lt.depth),O)if(M.layerUpdates.size>0){const j=Qh(lt.width,lt.height,M.format,M.type);for(const tt of M.layerUpdates){const ft=lt.data.subarray(tt*j/lt.data.BYTES_PER_ELEMENT,(tt+1)*j/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,lt.width,lt.height,1,Tt,Dt,ft)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Tt,Dt,lt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,lt.width,lt.height,lt.depth,0,Tt,Dt,lt.data);else if(M.isData3DTexture)Ht?(me&&e.texStorage3D(i.TEXTURE_3D,gt,Ft,lt.width,lt.height,lt.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Tt,Dt,lt.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,lt.width,lt.height,lt.depth,0,Tt,Dt,lt.data);else if(M.isFramebufferTexture){if(me)if(Ht)e.texStorage2D(i.TEXTURE_2D,gt,Ft,lt.width,lt.height);else{let j=lt.width,tt=lt.height;for(let ft=0;ft<gt;ft++)e.texImage2D(i.TEXTURE_2D,ft,Ft,j,tt,0,Tt,Dt,null),j>>=1,tt>>=1}}else if(Qt.length>0){if(Ht&&me){const j=Vt(Qt[0]);e.texStorage2D(i.TEXTURE_2D,gt,Ft,j.width,j.height)}for(let j=0,tt=Qt.length;j<tt;j++)xt=Qt[j],Ht?O&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,Tt,Dt,xt):e.texImage2D(i.TEXTURE_2D,j,Ft,Tt,Dt,xt);M.generateMipmaps=!1}else if(Ht){if(me){const j=Vt(lt);e.texStorage2D(i.TEXTURE_2D,gt,Ft,j.width,j.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,Dt,lt)}else e.texImage2D(i.TEXTURE_2D,0,Ft,Tt,Dt,lt);g(M)&&_(J),dt.__version=Z.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function Q(D,M,z){if(M.image.length!==6)return;const J=Xt(D,M),rt=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+z);const Z=n.get(rt);if(rt.version!==Z.__version||J===!0){e.activeTexture(i.TEXTURE0+z);const dt=de.getPrimaries(de.workingColorSpace),at=M.colorSpace===Ei?null:de.getPrimaries(M.colorSpace),vt=M.colorSpace===Ei||dt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const ee=M.isCompressedTexture||M.image[0].isCompressedTexture,lt=M.image[0]&&M.image[0].isDataTexture,Tt=[];for(let tt=0;tt<6;tt++)!ee&&!lt?Tt[tt]=w(M.image[tt],!0,r.maxCubemapSize):Tt[tt]=lt?M.image[tt].image:M.image[tt],Tt[tt]=ge(M,Tt[tt]);const Dt=Tt[0],Ft=s.convert(M.format,M.colorSpace),xt=s.convert(M.type),Qt=L(M.internalFormat,Ft,xt,M.colorSpace),Ht=M.isVideoTexture!==!0,me=Z.__version===void 0||J===!0,O=rt.dataReady;let gt=N(M,Dt);Rt(i.TEXTURE_CUBE_MAP,M);let j;if(ee){Ht&&me&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Qt,Dt.width,Dt.height);for(let tt=0;tt<6;tt++){j=Tt[tt].mipmaps;for(let ft=0;ft<j.length;ft++){const pt=j[ft];M.format!==Pn?Ft!==null?Ht?O&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,0,0,pt.width,pt.height,Ft,pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,Qt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,0,0,pt.width,pt.height,Ft,xt,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,Qt,pt.width,pt.height,0,Ft,xt,pt.data)}}}else{if(j=M.mipmaps,Ht&&me){j.length>0&&gt++;const tt=Vt(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Qt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(lt){Ht?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Tt[tt].width,Tt[tt].height,Ft,xt,Tt[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Qt,Tt[tt].width,Tt[tt].height,0,Ft,xt,Tt[tt].data);for(let ft=0;ft<j.length;ft++){const qt=j[ft].image[tt].image;Ht?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,0,0,qt.width,qt.height,Ft,xt,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,Qt,qt.width,qt.height,0,Ft,xt,qt.data)}}else{Ht?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Ft,xt,Tt[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Qt,Ft,xt,Tt[tt]);for(let ft=0;ft<j.length;ft++){const pt=j[ft];Ht?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,0,0,Ft,xt,pt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,Qt,Ft,xt,pt.image[tt])}}}g(M)&&_(i.TEXTURE_CUBE_MAP),Z.__version=rt.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function ot(D,M,z,J,rt,Z){const dt=s.convert(z.format,z.colorSpace),at=s.convert(z.type),vt=L(z.internalFormat,dt,at,z.colorSpace);if(!n.get(M).__hasExternalTextures){const lt=Math.max(1,M.width>>Z),Tt=Math.max(1,M.height>>Z);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,Z,vt,lt,Tt,M.depth,0,dt,at,null):e.texImage2D(rt,Z,vt,lt,Tt,0,dt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),te(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,rt,n.get(z).__webglTexture,0,Yt(M)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,rt,n.get(z).__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(D,M,z){if(i.bindRenderbuffer(i.RENDERBUFFER,D),M.depthBuffer){const J=M.depthTexture,rt=J&&J.isDepthTexture?J.type:null,Z=I(M.stencilBuffer,rt),dt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=Yt(M);te(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,Z,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,Z,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Z,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,D)}else{const J=M.textures;for(let rt=0;rt<J.length;rt++){const Z=J[rt],dt=s.convert(Z.format,Z.colorSpace),at=s.convert(Z.type),vt=L(Z.internalFormat,dt,at,Z.colorSpace),ee=Yt(M);z&&te(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,vt,M.width,M.height):te(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,vt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,vt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _t(D,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y(M.depthTexture,0);const J=n.get(M.depthTexture).__webglTexture,rt=Yt(M);if(M.depthTexture.format===Nr)te(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(M.depthTexture.format===Gr)te(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function zt(D){const M=n.get(D),z=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){const J=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){const rt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",rt)};J.addEventListener("dispose",rt),M.__depthDisposeCallback=rt}M.__boundDepthTexture=J}if(D.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");_t(M.__webglFramebuffer,D)}else if(z){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=i.createRenderbuffer(),At(M.__webglDepthbuffer[J],D,!1);else{const rt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),At(M.__webglDepthbuffer,D,!1);else{const J=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,rt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(D,M,z){const J=n.get(D);M!==void 0&&ot(J.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&zt(D)}function Kt(D){const M=D.texture,z=n.get(D),J=n.get(M);D.addEventListener("dispose",F);const rt=D.textures,Z=D.isWebGLCubeRenderTarget===!0,dt=rt.length>1;if(dt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=M.version,o.memory.textures++),Z){z.__webglFramebuffer=[];for(let at=0;at<6;at++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[at]=[];for(let vt=0;vt<M.mipmaps.length;vt++)z.__webglFramebuffer[at][vt]=i.createFramebuffer()}else z.__webglFramebuffer[at]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let at=0;at<M.mipmaps.length;at++)z.__webglFramebuffer[at]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(dt)for(let at=0,vt=rt.length;at<vt;at++){const ee=n.get(rt[at]);ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&te(D)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let at=0;at<rt.length;at++){const vt=rt[at];z.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[at]);const ee=s.convert(vt.format,vt.colorSpace),lt=s.convert(vt.type),Tt=L(vt.internalFormat,ee,lt,vt.colorSpace,D.isXRRenderTarget===!0),Dt=Yt(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,Tt,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,z.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),At(z.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Rt(i.TEXTURE_CUBE_MAP,M);for(let at=0;at<6;at++)if(M.mipmaps&&M.mipmaps.length>0)for(let vt=0;vt<M.mipmaps.length;vt++)ot(z.__webglFramebuffer[at][vt],D,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,vt);else ot(z.__webglFramebuffer[at],D,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);g(M)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){for(let at=0,vt=rt.length;at<vt;at++){const ee=rt[at],lt=n.get(ee);e.bindTexture(i.TEXTURE_2D,lt.__webglTexture),Rt(i.TEXTURE_2D,ee),ot(z.__webglFramebuffer,D,ee,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),g(ee)&&_(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(at=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,J.__webglTexture),Rt(at,M),M.mipmaps&&M.mipmaps.length>0)for(let vt=0;vt<M.mipmaps.length;vt++)ot(z.__webglFramebuffer[vt],D,M,i.COLOR_ATTACHMENT0,at,vt);else ot(z.__webglFramebuffer,D,M,i.COLOR_ATTACHMENT0,at,0);g(M)&&_(at),e.unbindTexture()}D.depthBuffer&&zt(D)}function re(D){const M=D.textures;for(let z=0,J=M.length;z<J;z++){const rt=M[z];if(g(rt)){const Z=D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,dt=n.get(rt).__webglTexture;e.bindTexture(Z,dt),_(Z),e.unbindTexture()}}}const Jt=[],U=[];function Ge(D){if(D.samples>0){if(te(D)===!1){const M=D.textures,z=D.width,J=D.height;let rt=i.COLOR_BUFFER_BIT;const Z=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=n.get(D),at=M.length>1;if(at)for(let vt=0;vt<M.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let vt=0;vt<M.length;vt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,dt.__webglColorRenderbuffer[vt]);const ee=n.get(M[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,z,J,0,0,z,J,rt,i.NEAREST),c===!0&&(Jt.length=0,U.length=0,Jt.push(i.COLOR_ATTACHMENT0+vt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Jt.push(Z),U.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Jt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let vt=0;vt<M.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,dt.__webglColorRenderbuffer[vt]);const ee=n.get(M[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,ee,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const M=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Yt(D){return Math.min(r.maxSamples,D.samples)}function te(D){const M=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ot(D){const M=o.render.frame;h.get(D)!==M&&(h.set(D,M),D.update())}function ge(D,M){const z=D.colorSpace,J=D.format,rt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||z!==Li&&z!==Ei&&(de.getTransfer(z)===xe?(J!==Pn||rt!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function Vt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(u.width=D.naturalWidth||D.width,u.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(u.width=D.displayWidth,u.height=D.displayHeight):(u.width=D.width,u.height=D.height),u}this.allocateTextureUnit=P,this.resetTextureUnits=E,this.setTexture2D=Y,this.setTexture2DArray=nt,this.setTexture3D=K,this.setTextureCube=et,this.rebindTextures=Ut,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=te}function wE(i,t){function e(n,r=Ei){let s;const o=de.getTransfer(r);if(n===si)return i.UNSIGNED_BYTE;if(n===Gc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===sf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nf)return i.BYTE;if(n===rf)return i.SHORT;if(n===Ls)return i.UNSIGNED_SHORT;if(n===Hc)return i.INT;if(n===tr)return i.UNSIGNED_INT;if(n===ii)return i.FLOAT;if(n===qs)return i.HALF_FLOAT;if(n===of)return i.ALPHA;if(n===af)return i.RGB;if(n===Pn)return i.RGBA;if(n===lf)return i.LUMINANCE;if(n===cf)return i.LUMINANCE_ALPHA;if(n===Nr)return i.DEPTH_COMPONENT;if(n===Gr)return i.DEPTH_STENCIL;if(n===uf)return i.RED;if(n===qc)return i.RED_INTEGER;if(n===hf)return i.RG;if(n===Xc)return i.RG_INTEGER;if(n===jc)return i.RGBA_INTEGER;if(n===Wo||n===qo||n===Xo||n===jo)if(o===xe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Wo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Wo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===jo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ql||n===Xl||n===jl||n===$l)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ql)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$l)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Kl||n===Yl||n===Ql)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Kl||n===Yl)return o===xe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ql)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Jl||n===Zl||n===tc||n===ec||n===nc||n===ic||n===rc||n===sc||n===oc||n===ac||n===lc||n===cc||n===uc||n===hc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Jl)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zl)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===tc)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ec)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nc)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ic)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rc)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sc)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oc)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ac)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lc)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===cc)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uc)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hc)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$o||n===dc||n===fc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===$o)return o===xe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===df||n===pc||n===mc||n===gc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===$o)return s.COMPRESSED_RED_RGTC1_EXT;if(n===pc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===mc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class bE extends xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Bo extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RE={type:"move"};class Sl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const l=this._targetRay,c=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const w of t.hand.values()){const g=e.getJointPose(w,n),_=this._getHandJoint(u,w);g!==null&&(_.matrix.fromArray(g.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=g.radius),_.visible=g!==null}const h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],p=h.position.distanceTo(f.position),v=.02,S=.005;u.inputState.pinching&&p>v+S?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&p<=v-S&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(RE)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Bo;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const CE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IE=`
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

}`;class PE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new dn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ri({vertexShader:CE,fragmentShader:IE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Dn(new Ys(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DE extends Zr{constructor(t,e){super();const n=this;let r=null,s=1,o=null,l="local-floor",c=1,u=null,h=null,f=null,p=null,v=null,S=null;const w=new PE,g=e.getContextAttributes();let _=null,L=null;const I=[],N=[],W=new fe;let F=null;const x=new xn;x.layers.enable(1),x.viewport=new Re;const T=new xn;T.layers.enable(2),T.viewport=new Re;const C=[x,T],m=new bE;m.layers.enable(1),m.layers.enable(2);let E=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ot=I[Q];return ot===void 0&&(ot=new Sl,I[Q]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(Q){let ot=I[Q];return ot===void 0&&(ot=new Sl,I[Q]=ot),ot.getGripSpace()},this.getHand=function(Q){let ot=I[Q];return ot===void 0&&(ot=new Sl,I[Q]=ot),ot.getHandSpace()};function A(Q){const ot=N.indexOf(Q.inputSource);if(ot===-1)return;const At=I[ot];At!==void 0&&(At.update(Q.inputSource,Q.frame,u||o),At.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Y(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",nt);for(let Q=0;Q<I.length;Q++){const ot=N[Q];ot!==null&&(N[Q]=null,I[Q].disconnect(ot))}E=null,P=null,w.reset(),t.setRenderTarget(_),v=null,p=null,f=null,r=null,L=null,Bt.stop(),n.isPresenting=!1,t.setPixelRatio(F),t.setSize(W.width,W.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){l=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Q){u=Q},this.getBaseLayer=function(){return p!==null?p:v},this.getBinding=function(){return f},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(_=t.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",nt),g.xrCompatible!==!0&&await e.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(W),r.renderState.layers===void 0){const ot={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};v=new XRWebGLLayer(r,e,ot),r.updateRenderState({baseLayer:v}),t.setPixelRatio(1),t.setSize(v.framebufferWidth,v.framebufferHeight,!1),L=new er(v.framebufferWidth,v.framebufferHeight,{format:Pn,type:si,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let ot=null,At=null,_t=null;g.depth&&(_t=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=g.stencil?Gr:Nr,At=g.stencil?Hr:tr);const zt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:s};f=new XRWebGLBinding(r,e),p=f.createProjectionLayer(zt),r.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),L=new er(p.textureWidth,p.textureHeight,{format:Pn,type:si,depthTexture:new Rf(p.textureWidth,p.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await r.requestReferenceSpace(l),Bt.setContext(r),Bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function nt(Q){for(let ot=0;ot<Q.removed.length;ot++){const At=Q.removed[ot],_t=N.indexOf(At);_t>=0&&(N[_t]=null,I[_t].disconnect(At))}for(let ot=0;ot<Q.added.length;ot++){const At=Q.added[ot];let _t=N.indexOf(At);if(_t===-1){for(let Ut=0;Ut<I.length;Ut++)if(Ut>=N.length){N.push(At),_t=Ut;break}else if(N[Ut]===null){N[Ut]=At,_t=Ut;break}if(_t===-1)break}const zt=I[_t];zt&&zt.connect(At)}}const K=new q,et=new q;function $(Q,ot,At){K.setFromMatrixPosition(ot.matrixWorld),et.setFromMatrixPosition(At.matrixWorld);const _t=K.distanceTo(et),zt=ot.projectionMatrix.elements,Ut=At.projectionMatrix.elements,Kt=zt[14]/(zt[10]-1),re=zt[14]/(zt[10]+1),Jt=(zt[9]+1)/zt[5],U=(zt[9]-1)/zt[5],Ge=(zt[8]-1)/zt[0],Yt=(Ut[8]+1)/Ut[0],te=Kt*Ge,Ot=Kt*Yt,ge=_t/(-Ge+Yt),Vt=ge*-Ge;if(ot.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Vt),Q.translateZ(ge),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),zt[10]===-1)Q.projectionMatrix.copy(ot.projectionMatrix),Q.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const D=Kt+ge,M=re+ge,z=te-Vt,J=Ot+(_t-Vt),rt=Jt*re/M*D,Z=U*re/M*D;Q.projectionMatrix.makePerspective(z,J,rt,Z,D,M),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function yt(Q,ot){ot===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ot.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ot=Q.near,At=Q.far;w.texture!==null&&(w.depthNear>0&&(ot=w.depthNear),w.depthFar>0&&(At=w.depthFar)),m.near=T.near=x.near=ot,m.far=T.far=x.far=At,(E!==m.near||P!==m.far)&&(r.updateRenderState({depthNear:m.near,depthFar:m.far}),E=m.near,P=m.far);const _t=Q.parent,zt=m.cameras;yt(m,_t);for(let Ut=0;Ut<zt.length;Ut++)yt(zt[Ut],_t);zt.length===2?$(m,x,T):m.projectionMatrix.copy(x.projectionMatrix),Et(Q,m,_t)};function Et(Q,ot,At){At===null?Q.matrix.copy(ot.matrixWorld):(Q.matrix.copy(At.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ot.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ot.projectionMatrix),Q.projectionMatrixInverse.copy(ot.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=_c*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return m},this.getFoveation=function(){if(!(p===null&&v===null))return c},this.setFoveation=function(Q){c=Q,p!==null&&(p.fixedFoveation=Q),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=Q)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(m)};let Rt=null;function Xt(Q,ot){if(h=ot.getViewerPose(u||o),S=ot,h!==null){const At=h.views;v!==null&&(t.setRenderTargetFramebuffer(L,v.framebuffer),t.setRenderTarget(L));let _t=!1;At.length!==m.cameras.length&&(m.cameras.length=0,_t=!0);for(let Ut=0;Ut<At.length;Ut++){const Kt=At[Ut];let re=null;if(v!==null)re=v.getViewport(Kt);else{const U=f.getViewSubImage(p,Kt);re=U.viewport,Ut===0&&(t.setRenderTargetTextures(L,U.colorTexture,p.ignoreDepthValues?void 0:U.depthStencilTexture),t.setRenderTarget(L))}let Jt=C[Ut];Jt===void 0&&(Jt=new xn,Jt.layers.enable(Ut),Jt.viewport=new Re,C[Ut]=Jt),Jt.matrix.fromArray(Kt.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(Kt.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(re.x,re.y,re.width,re.height),Ut===0&&(m.matrix.copy(Jt.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale)),_t===!0&&m.cameras.push(Jt)}const zt=r.enabledFeatures;if(zt&&zt.includes("depth-sensing")){const Ut=f.getDepthInformation(At[0]);Ut&&Ut.isValid&&Ut.texture&&w.init(t,Ut,r.renderState)}}for(let At=0;At<I.length;At++){const _t=N[At],zt=I[At];_t!==null&&zt!==void 0&&zt.update(_t,ot,u||o)}Rt&&Rt(Q,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),S=null}const Bt=new wf;Bt.setAnimationLoop(Xt),this.setAnimationLoop=function(Q){Rt=Q},this.dispose=function(){}}}const Gi=new Gn,LE=new Ce;function NE(i,t){function e(g,_){g.matrixAutoUpdate===!0&&g.updateMatrix(),_.value.copy(g.matrix)}function n(g,_){_.color.getRGB(g.fogColor.value,Tf(i)),_.isFog?(g.fogNear.value=_.near,g.fogFar.value=_.far):_.isFogExp2&&(g.fogDensity.value=_.density)}function r(g,_,L,I,N){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(g,_):_.isMeshToonMaterial?(s(g,_),f(g,_)):_.isMeshPhongMaterial?(s(g,_),h(g,_)):_.isMeshStandardMaterial?(s(g,_),p(g,_),_.isMeshPhysicalMaterial&&v(g,_,N)):_.isMeshMatcapMaterial?(s(g,_),S(g,_)):_.isMeshDepthMaterial?s(g,_):_.isMeshDistanceMaterial?(s(g,_),w(g,_)):_.isMeshNormalMaterial?s(g,_):_.isLineBasicMaterial?(o(g,_),_.isLineDashedMaterial&&l(g,_)):_.isPointsMaterial?c(g,_,L,I):_.isSpriteMaterial?u(g,_):_.isShadowMaterial?(g.color.value.copy(_.color),g.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(g,_){g.opacity.value=_.opacity,_.color&&g.diffuse.value.copy(_.color),_.emissive&&g.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(g.map.value=_.map,e(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,e(_.alphaMap,g.alphaMapTransform)),_.bumpMap&&(g.bumpMap.value=_.bumpMap,e(_.bumpMap,g.bumpMapTransform),g.bumpScale.value=_.bumpScale,_.side===hn&&(g.bumpScale.value*=-1)),_.normalMap&&(g.normalMap.value=_.normalMap,e(_.normalMap,g.normalMapTransform),g.normalScale.value.copy(_.normalScale),_.side===hn&&g.normalScale.value.negate()),_.displacementMap&&(g.displacementMap.value=_.displacementMap,e(_.displacementMap,g.displacementMapTransform),g.displacementScale.value=_.displacementScale,g.displacementBias.value=_.displacementBias),_.emissiveMap&&(g.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,g.emissiveMapTransform)),_.specularMap&&(g.specularMap.value=_.specularMap,e(_.specularMap,g.specularMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);const L=t.get(_),I=L.envMap,N=L.envMapRotation;I&&(g.envMap.value=I,Gi.copy(N),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),g.envMapRotation.value.setFromMatrix4(LE.makeRotationFromEuler(Gi)),g.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=_.reflectivity,g.ior.value=_.ior,g.refractionRatio.value=_.refractionRatio),_.lightMap&&(g.lightMap.value=_.lightMap,g.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,g.lightMapTransform)),_.aoMap&&(g.aoMap.value=_.aoMap,g.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,g.aoMapTransform))}function o(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,_.map&&(g.map.value=_.map,e(_.map,g.mapTransform))}function l(g,_){g.dashSize.value=_.dashSize,g.totalSize.value=_.dashSize+_.gapSize,g.scale.value=_.scale}function c(g,_,L,I){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.size.value=_.size*L,g.scale.value=I*.5,_.map&&(g.map.value=_.map,e(_.map,g.uvTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,e(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function u(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.rotation.value=_.rotation,_.map&&(g.map.value=_.map,e(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,e(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function h(g,_){g.specular.value.copy(_.specular),g.shininess.value=Math.max(_.shininess,1e-4)}function f(g,_){_.gradientMap&&(g.gradientMap.value=_.gradientMap)}function p(g,_){g.metalness.value=_.metalness,_.metalnessMap&&(g.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,g.metalnessMapTransform)),g.roughness.value=_.roughness,_.roughnessMap&&(g.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,g.roughnessMapTransform)),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)}function v(g,_,L){g.ior.value=_.ior,_.sheen>0&&(g.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),g.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(g.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,g.sheenColorMapTransform)),_.sheenRoughnessMap&&(g.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,g.sheenRoughnessMapTransform))),_.clearcoat>0&&(g.clearcoat.value=_.clearcoat,g.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(g.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,g.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(g.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===hn&&g.clearcoatNormalScale.value.negate())),_.dispersion>0&&(g.dispersion.value=_.dispersion),_.iridescence>0&&(g.iridescence.value=_.iridescence,g.iridescenceIOR.value=_.iridescenceIOR,g.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(g.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,g.iridescenceMapTransform)),_.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),_.transmission>0&&(g.transmission.value=_.transmission,g.transmissionSamplerMap.value=L.texture,g.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(g.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,g.transmissionMapTransform)),g.thickness.value=_.thickness,_.thicknessMap&&(g.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=_.attenuationDistance,g.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(g.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(g.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=_.specularIntensity,g.specularColor.value.copy(_.specularColor),_.specularColorMap&&(g.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,g.specularColorMapTransform)),_.specularIntensityMap&&(g.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,g.specularIntensityMapTransform))}function S(g,_){_.matcap&&(g.matcap.value=_.matcap)}function w(g,_){const L=t.get(_).light;g.referencePosition.value.setFromMatrixPosition(L.matrixWorld),g.nearDistance.value=L.shadow.camera.near,g.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function UE(i,t,e,n){let r={},s={},o=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(L,I){const N=I.program;n.uniformBlockBinding(L,N)}function u(L,I){let N=r[L.id];N===void 0&&(S(L),N=h(L),r[L.id]=N,L.addEventListener("dispose",g));const W=I.program;n.updateUBOMapping(L,W);const F=t.render.frame;s[L.id]!==F&&(p(L),s[L.id]=F)}function h(L){const I=f();L.__bindingPointIndex=I;const N=i.createBuffer(),W=L.__size,F=L.usage;return i.bindBuffer(i.UNIFORM_BUFFER,N),i.bufferData(i.UNIFORM_BUFFER,W,F),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,I,N),N}function f(){for(let L=0;L<l;L++)if(o.indexOf(L)===-1)return o.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(L){const I=r[L.id],N=L.uniforms,W=L.__cache;i.bindBuffer(i.UNIFORM_BUFFER,I);for(let F=0,x=N.length;F<x;F++){const T=Array.isArray(N[F])?N[F]:[N[F]];for(let C=0,m=T.length;C<m;C++){const E=T[C];if(v(E,F,C,W)===!0){const P=E.__offset,A=Array.isArray(E.value)?E.value:[E.value];let Y=0;for(let nt=0;nt<A.length;nt++){const K=A[nt],et=w(K);typeof K=="number"||typeof K=="boolean"?(E.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,P+Y,E.__data)):K.isMatrix3?(E.__data[0]=K.elements[0],E.__data[1]=K.elements[1],E.__data[2]=K.elements[2],E.__data[3]=0,E.__data[4]=K.elements[3],E.__data[5]=K.elements[4],E.__data[6]=K.elements[5],E.__data[7]=0,E.__data[8]=K.elements[6],E.__data[9]=K.elements[7],E.__data[10]=K.elements[8],E.__data[11]=0):(K.toArray(E.__data,Y),Y+=et.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,P,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(L,I,N,W){const F=L.value,x=I+"_"+N;if(W[x]===void 0)return typeof F=="number"||typeof F=="boolean"?W[x]=F:W[x]=F.clone(),!0;{const T=W[x];if(typeof F=="number"||typeof F=="boolean"){if(T!==F)return W[x]=F,!0}else if(T.equals(F)===!1)return T.copy(F),!0}return!1}function S(L){const I=L.uniforms;let N=0;const W=16;for(let x=0,T=I.length;x<T;x++){const C=Array.isArray(I[x])?I[x]:[I[x]];for(let m=0,E=C.length;m<E;m++){const P=C[m],A=Array.isArray(P.value)?P.value:[P.value];for(let Y=0,nt=A.length;Y<nt;Y++){const K=A[Y],et=w(K),$=N%W,yt=$%et.boundary,Et=$+yt;N+=yt,Et!==0&&W-Et<et.storage&&(N+=W-Et),P.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=N,N+=et.storage}}}const F=N%W;return F>0&&(N+=W-F),L.__size=N,L.__cache={},this}function w(L){const I={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(I.boundary=4,I.storage=4):L.isVector2?(I.boundary=8,I.storage=8):L.isVector3||L.isColor?(I.boundary=16,I.storage=12):L.isVector4?(I.boundary=16,I.storage=16):L.isMatrix3?(I.boundary=48,I.storage=48):L.isMatrix4?(I.boundary=64,I.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),I}function g(L){const I=L.target;I.removeEventListener("dispose",g);const N=o.indexOf(I.__bindingPointIndex);o.splice(N,1),i.deleteBuffer(r[I.id]),delete r[I.id],delete s[I.id]}function _(){for(const L in r)i.deleteBuffer(r[L]);o=[],r={},s={}}return{bind:c,update:u,dispose:_}}class FE{constructor(t={}){const{canvas:e=Sg(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const v=new Uint32Array(4),S=new Int32Array(4);let w=null,g=null;const _=[],L=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fn,this.toneMapping=Ti,this.toneMappingExposure=1;const I=this;let N=!1,W=0,F=0,x=null,T=-1,C=null;const m=new Re,E=new Re;let P=null;const A=new ce(0);let Y=0,nt=e.width,K=e.height,et=1,$=null,yt=null;const Et=new Re(0,0,nt,K),Rt=new Re(0,0,nt,K);let Xt=!1;const Bt=new Yc;let Q=!1,ot=!1;const At=new Ce,_t=new Ce,zt=new q,Ut=new Re,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function Jt(){return x===null?et:1}let U=n;function Ge(b,V){return e.getContext(b,V)}try{const b={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${zc}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",pt,!1),U===null){const V="webgl2";if(U=Ge(V,b),U===null)throw Ge(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Yt,te,Ot,ge,Vt,D,M,z,J,rt,Z,dt,at,vt,ee,lt,Tt,Dt,Ft,xt,Qt,Ht,me,O;function gt(){Yt=new zy(U),Yt.init(),Ht=new wE(U,Yt),te=new Uy(U,Yt,t,Ht),Ot=new TE(U),te.reverseDepthBuffer&&Ot.buffers.depth.setReversed(!0),ge=new Wy(U),Vt=new lE,D=new AE(U,Yt,Ot,Vt,te,Ht,ge),M=new Oy(I),z=new ky(I),J=new Qg(U),me=new Ly(U,J),rt=new Hy(U,J,ge,me),Z=new Xy(U,rt,J,ge),Ft=new qy(U,te,D),lt=new Fy(Vt),dt=new aE(I,M,z,Yt,te,me,lt),at=new NE(I,Vt),vt=new uE,ee=new gE(Yt),Dt=new Dy(I,M,z,Ot,Z,p,c),Tt=new xE(I,Z,te),O=new UE(U,ge,te,Ot),xt=new Ny(U,Yt,ge),Qt=new Gy(U,Yt,ge),ge.programs=dt.programs,I.capabilities=te,I.extensions=Yt,I.properties=Vt,I.renderLists=vt,I.shadowMap=Tt,I.state=Ot,I.info=ge}gt();const j=new DE(I,U);this.xr=j,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=Yt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Yt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(b){b!==void 0&&(et=b,this.setSize(nt,K,!1))},this.getSize=function(b){return b.set(nt,K)},this.setSize=function(b,V,H=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}nt=b,K=V,e.width=Math.floor(b*et),e.height=Math.floor(V*et),H===!0&&(e.style.width=b+"px",e.style.height=V+"px"),this.setViewport(0,0,b,V)},this.getDrawingBufferSize=function(b){return b.set(nt*et,K*et).floor()},this.setDrawingBufferSize=function(b,V,H){nt=b,K=V,et=H,e.width=Math.floor(b*H),e.height=Math.floor(V*H),this.setViewport(0,0,b,V)},this.getCurrentViewport=function(b){return b.copy(m)},this.getViewport=function(b){return b.copy(Et)},this.setViewport=function(b,V,H,G){b.isVector4?Et.set(b.x,b.y,b.z,b.w):Et.set(b,V,H,G),Ot.viewport(m.copy(Et).multiplyScalar(et).round())},this.getScissor=function(b){return b.copy(Rt)},this.setScissor=function(b,V,H,G){b.isVector4?Rt.set(b.x,b.y,b.z,b.w):Rt.set(b,V,H,G),Ot.scissor(E.copy(Rt).multiplyScalar(et).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(b){Ot.setScissorTest(Xt=b)},this.setOpaqueSort=function(b){$=b},this.setTransparentSort=function(b){yt=b},this.getClearColor=function(b){return b.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(b=!0,V=!0,H=!0){let G=0;if(b){let B=!1;if(x!==null){const ct=x.texture.format;B=ct===jc||ct===Xc||ct===qc}if(B){const ct=x.texture.type,mt=ct===si||ct===tr||ct===Ls||ct===Hr||ct===Gc||ct===Wc,St=Dt.getClearColor(),wt=Dt.getClearAlpha(),Lt=St.r,Pt=St.g,Mt=St.b;mt?(v[0]=Lt,v[1]=Pt,v[2]=Mt,v[3]=wt,U.clearBufferuiv(U.COLOR,0,v)):(S[0]=Lt,S[1]=Pt,S[2]=Mt,S[3]=wt,U.clearBufferiv(U.COLOR,0,S))}else G|=U.COLOR_BUFFER_BIT}V&&(G|=U.DEPTH_BUFFER_BIT,U.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),H&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),vt.dispose(),ee.dispose(),Vt.dispose(),M.dispose(),z.dispose(),Z.dispose(),me.dispose(),O.dispose(),dt.dispose(),j.dispose(),j.removeEventListener("sessionstart",ke),j.removeEventListener("sessionend",os),pn.stop()};function tt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const b=ge.autoReset,V=Tt.enabled,H=Tt.autoUpdate,G=Tt.needsUpdate,B=Tt.type;gt(),ge.autoReset=b,Tt.enabled=V,Tt.autoUpdate=H,Tt.needsUpdate=G,Tt.type=B}function pt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function qt(b){const V=b.target;V.removeEventListener("dispose",qt),Te(V)}function Te(b){Ue(b),Vt.remove(b)}function Ue(b){const V=Vt.get(b).programs;V!==void 0&&(V.forEach(function(H){dt.releaseProgram(H)}),b.isShaderMaterial&&dt.releaseShaderCache(b))}this.renderBufferDirect=function(b,V,H,G,B,ct){V===null&&(V=Kt);const mt=B.isMesh&&B.matrixWorld.determinant()<0,St=ls(b,V,H,G,B);Ot.setMaterial(G,mt);let wt=H.index,Lt=1;if(G.wireframe===!0){if(wt=rt.getWireframeAttribute(H),wt===void 0)return;Lt=2}const Pt=H.drawRange,Mt=H.attributes.position;let se=Pt.start*Lt,_e=(Pt.start+Pt.count)*Lt;ct!==null&&(se=Math.max(se,ct.start*Lt),_e=Math.min(_e,(ct.start+ct.count)*Lt)),wt!==null?(se=Math.max(se,0),_e=Math.min(_e,wt.count)):Mt!=null&&(se=Math.max(se,0),_e=Math.min(_e,Mt.count));const ye=_e-se;if(ye<0||ye===1/0)return;me.setup(B,G,St,H,wt);let Ke,oe=xt;if(wt!==null&&(Ke=J.get(wt),oe=Qt,oe.setIndex(Ke)),B.isMesh)G.wireframe===!0?(Ot.setLineWidth(G.wireframeLinewidth*Jt()),oe.setMode(U.LINES)):oe.setMode(U.TRIANGLES);else if(B.isLine){let Ct=G.linewidth;Ct===void 0&&(Ct=1),Ot.setLineWidth(Ct*Jt()),B.isLineSegments?oe.setMode(U.LINES):B.isLineLoop?oe.setMode(U.LINE_LOOP):oe.setMode(U.LINE_STRIP)}else B.isPoints?oe.setMode(U.POINTS):B.isSprite&&oe.setMode(U.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)oe.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Yt.get("WEBGL_multi_draw"))oe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ct=B._multiDrawStarts,Ie=B._multiDrawCounts,ae=B._multiDrawCount,an=wt?J.get(wt).bytesPerElement:1,ui=Vt.get(G).currentProgram.getUniforms();for(let sn=0;sn<ae;sn++)ui.setValue(U,"_gl_DrawID",sn),oe.render(Ct[sn]/an,Ie[sn])}else if(B.isInstancedMesh)oe.renderInstances(se,ye,B.count);else if(H.isInstancedBufferGeometry){const Ct=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ie=Math.min(H.instanceCount,Ct);oe.renderInstances(se,ye,Ie)}else oe.render(se,ye)};function ne(b,V,H){b.transparent===!0&&b.side===ni&&b.forceSinglePass===!1?(b.side=hn,b.needsUpdate=!0,lr(b,V,H),b.side=bi,b.needsUpdate=!0,lr(b,V,H),b.side=ni):lr(b,V,H)}this.compile=function(b,V,H=null){H===null&&(H=b),g=ee.get(H),g.init(V),L.push(g),H.traverseVisible(function(B){B.isLight&&B.layers.test(V.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),b!==H&&b.traverseVisible(function(B){B.isLight&&B.layers.test(V.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),g.setupLights();const G=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ct=B.material;if(ct)if(Array.isArray(ct))for(let mt=0;mt<ct.length;mt++){const St=ct[mt];ne(St,H,B),G.add(St)}else ne(ct,H,B),G.add(ct)}),L.pop(),g=null,G},this.compileAsync=function(b,V,H=null){const G=this.compile(b,V,H);return new Promise(B=>{function ct(){if(G.forEach(function(mt){Vt.get(mt).currentProgram.isReady()&&G.delete(mt)}),G.size===0){B(b);return}setTimeout(ct,10)}Yt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let De=null;function yn(b){De&&De(b)}function ke(){pn.stop()}function os(){pn.start()}const pn=new wf;pn.setAnimationLoop(yn),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(b){De=b,j.setAnimationLoop(b),b===null?pn.stop():pn.start()},j.addEventListener("sessionstart",ke),j.addEventListener("sessionend",os),this.render=function(b,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(V),V=j.getCamera()),b.isScene===!0&&b.onBeforeRender(I,b,V,x),g=ee.get(b,L.length),g.init(V),L.push(g),_t.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Bt.setFromProjectionMatrix(_t),ot=this.localClippingEnabled,Q=lt.init(this.clippingPlanes,ot),w=vt.get(b,_.length),w.init(),_.push(w),j.enabled===!0&&j.isPresenting===!0){const ct=I.xr.getDepthSensingMesh();ct!==null&&jn(ct,V,-1/0,I.sortObjects)}jn(b,V,0,I.sortObjects),w.finish(),I.sortObjects===!0&&w.sort($,yt),re=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,re&&Dt.addToRenderList(w,b),this.info.render.frame++,Q===!0&&lt.beginShadows();const H=g.state.shadowsArray;Tt.render(H,b,V),Q===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=w.opaque,B=w.transmissive;if(g.setupLights(),V.isArrayCamera){const ct=V.cameras;if(B.length>0)for(let mt=0,St=ct.length;mt<St;mt++){const wt=ct[mt];oo(G,B,b,wt)}re&&Dt.render(b);for(let mt=0,St=ct.length;mt<St;mt++){const wt=ct[mt];so(w,b,wt,wt.viewport)}}else B.length>0&&oo(G,B,b,V),re&&Dt.render(b),so(w,b,V);x!==null&&(D.updateMultisampleRenderTarget(x),D.updateRenderTargetMipmap(x)),b.isScene===!0&&b.onAfterRender(I,b,V),me.resetDefaultState(),T=-1,C=null,L.pop(),L.length>0?(g=L[L.length-1],Q===!0&&lt.setGlobalState(I.clippingPlanes,g.state.camera)):g=null,_.pop(),_.length>0?w=_[_.length-1]:w=null};function jn(b,V,H,G){if(b.visible===!1)return;if(b.layers.test(V.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(V);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Bt.intersectsSprite(b)){G&&Ut.setFromMatrixPosition(b.matrixWorld).applyMatrix4(_t);const mt=Z.update(b),St=b.material;St.visible&&w.push(b,mt,St,H,Ut.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Bt.intersectsObject(b))){const mt=Z.update(b),St=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ut.copy(b.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Ut.copy(mt.boundingSphere.center)),Ut.applyMatrix4(b.matrixWorld).applyMatrix4(_t)),Array.isArray(St)){const wt=mt.groups;for(let Lt=0,Pt=wt.length;Lt<Pt;Lt++){const Mt=wt[Lt],se=St[Mt.materialIndex];se&&se.visible&&w.push(b,mt,se,H,Ut.z,Mt)}}else St.visible&&w.push(b,mt,St,H,Ut.z,null)}}const ct=b.children;for(let mt=0,St=ct.length;mt<St;mt++)jn(ct[mt],V,H,G)}function so(b,V,H,G){const B=b.opaque,ct=b.transmissive,mt=b.transparent;g.setupLightsView(H),Q===!0&&lt.setGlobalState(I.clippingPlanes,H),G&&Ot.viewport(m.copy(G)),B.length>0&&Tn(B,V,H),ct.length>0&&Tn(ct,V,H),mt.length>0&&Tn(mt,V,H),Ot.buffers.depth.setTest(!0),Ot.buffers.depth.setMask(!0),Ot.buffers.color.setMask(!0),Ot.setPolygonOffset(!1)}function oo(b,V,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[G.id]===void 0&&(g.state.transmissionRenderTarget[G.id]=new er(1,1,{generateMipmaps:!0,type:Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float")?qs:si,minFilter:Yi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:de.workingColorSpace}));const ct=g.state.transmissionRenderTarget[G.id],mt=G.viewport||m;ct.setSize(mt.z,mt.w);const St=I.getRenderTarget();I.setRenderTarget(ct),I.getClearColor(A),Y=I.getClearAlpha(),Y<1&&I.setClearColor(16777215,.5),I.clear(),re&&Dt.render(H);const wt=I.toneMapping;I.toneMapping=Ti;const Lt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),g.setupLightsView(G),Q===!0&&lt.setGlobalState(I.clippingPlanes,G),Tn(b,H,G),D.updateMultisampleRenderTarget(ct),D.updateRenderTargetMipmap(ct),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let Mt=0,se=V.length;Mt<se;Mt++){const _e=V[Mt],ye=_e.object,Ke=_e.geometry,oe=_e.material,Ct=_e.group;if(oe.side===ni&&ye.layers.test(G.layers)){const Ie=oe.side;oe.side=hn,oe.needsUpdate=!0,ao(ye,H,G,Ke,oe,Ct),oe.side=Ie,oe.needsUpdate=!0,Pt=!0}}Pt===!0&&(D.updateMultisampleRenderTarget(ct),D.updateRenderTargetMipmap(ct))}I.setRenderTarget(St),I.setClearColor(A,Y),Lt!==void 0&&(G.viewport=Lt),I.toneMapping=wt}function Tn(b,V,H){const G=V.isScene===!0?V.overrideMaterial:null;for(let B=0,ct=b.length;B<ct;B++){const mt=b[B],St=mt.object,wt=mt.geometry,Lt=G===null?mt.material:G,Pt=mt.group;St.layers.test(H.layers)&&ao(St,V,H,wt,Lt,Pt)}}function ao(b,V,H,G,B,ct){b.onBeforeRender(I,V,H,G,B,ct),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(I,V,H,G,b,ct),B.transparent===!0&&B.side===ni&&B.forceSinglePass===!1?(B.side=hn,B.needsUpdate=!0,I.renderBufferDirect(H,V,G,B,b,ct),B.side=bi,B.needsUpdate=!0,I.renderBufferDirect(H,V,G,B,b,ct),B.side=ni):I.renderBufferDirect(H,V,G,B,b,ct),b.onAfterRender(I,V,H,G,B,ct)}function lr(b,V,H){V.isScene!==!0&&(V=Kt);const G=Vt.get(b),B=g.state.lights,ct=g.state.shadowsArray,mt=B.state.version,St=dt.getParameters(b,B.state,ct,V,H),wt=dt.getProgramCacheKey(St);let Lt=G.programs;G.environment=b.isMeshStandardMaterial?V.environment:null,G.fog=V.fog,G.envMap=(b.isMeshStandardMaterial?z:M).get(b.envMap||G.environment),G.envMapRotation=G.environment!==null&&b.envMap===null?V.environmentRotation:b.envMapRotation,Lt===void 0&&(b.addEventListener("dispose",qt),Lt=new Map,G.programs=Lt);let Pt=Lt.get(wt);if(Pt!==void 0){if(G.currentProgram===Pt&&G.lightsStateVersion===mt)return as(b,St),Pt}else St.uniforms=dt.getUniforms(b),b.onBeforeCompile(St,I),Pt=dt.acquireProgram(St,wt),Lt.set(wt,Pt),G.uniforms=St.uniforms;const Mt=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Mt.clippingPlanes=lt.uniform),as(b,St),G.needsLights=Nn(b),G.lightsStateVersion=mt,G.needsLights&&(Mt.ambientLightColor.value=B.state.ambient,Mt.lightProbe.value=B.state.probe,Mt.directionalLights.value=B.state.directional,Mt.directionalLightShadows.value=B.state.directionalShadow,Mt.spotLights.value=B.state.spot,Mt.spotLightShadows.value=B.state.spotShadow,Mt.rectAreaLights.value=B.state.rectArea,Mt.ltc_1.value=B.state.rectAreaLTC1,Mt.ltc_2.value=B.state.rectAreaLTC2,Mt.pointLights.value=B.state.point,Mt.pointLightShadows.value=B.state.pointShadow,Mt.hemisphereLights.value=B.state.hemi,Mt.directionalShadowMap.value=B.state.directionalShadowMap,Mt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Mt.spotShadowMap.value=B.state.spotShadowMap,Mt.spotLightMatrix.value=B.state.spotLightMatrix,Mt.spotLightMap.value=B.state.spotLightMap,Mt.pointShadowMap.value=B.state.pointShadowMap,Mt.pointShadowMatrix.value=B.state.pointShadowMatrix),G.currentProgram=Pt,G.uniformsList=null,Pt}function Fi(b){if(b.uniformsList===null){const V=b.currentProgram.getUniforms();b.uniformsList=Yo.seqWithValue(V.seq,b.uniforms)}return b.uniformsList}function as(b,V){const H=Vt.get(b);H.outputColorSpace=V.outputColorSpace,H.batching=V.batching,H.batchingColor=V.batchingColor,H.instancing=V.instancing,H.instancingColor=V.instancingColor,H.instancingMorph=V.instancingMorph,H.skinning=V.skinning,H.morphTargets=V.morphTargets,H.morphNormals=V.morphNormals,H.morphColors=V.morphColors,H.morphTargetsCount=V.morphTargetsCount,H.numClippingPlanes=V.numClippingPlanes,H.numIntersection=V.numClipIntersection,H.vertexAlphas=V.vertexAlphas,H.vertexTangents=V.vertexTangents,H.toneMapping=V.toneMapping}function ls(b,V,H,G,B){V.isScene!==!0&&(V=Kt),D.resetTextureUnits();const ct=V.fog,mt=G.isMeshStandardMaterial?V.environment:null,St=x===null?I.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:Li,wt=(G.isMeshStandardMaterial?z:M).get(G.envMap||mt),Lt=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Pt=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Mt=!!H.morphAttributes.position,se=!!H.morphAttributes.normal,_e=!!H.morphAttributes.color;let ye=Ti;G.toneMapped&&(x===null||x.isXRRenderTarget===!0)&&(ye=I.toneMapping);const Ke=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,oe=Ke!==void 0?Ke.length:0,Ct=Vt.get(G),Ie=g.state.lights;if(Q===!0&&(ot===!0||b!==C)){const Ae=b===C&&G.id===T;lt.setState(G,b,Ae)}let ae=!1;G.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==Ie.state.version||Ct.outputColorSpace!==St||B.isBatchedMesh&&Ct.batching===!1||!B.isBatchedMesh&&Ct.batching===!0||B.isBatchedMesh&&Ct.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ct.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ct.instancing===!1||!B.isInstancedMesh&&Ct.instancing===!0||B.isSkinnedMesh&&Ct.skinning===!1||!B.isSkinnedMesh&&Ct.skinning===!0||B.isInstancedMesh&&Ct.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ct.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ct.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ct.instancingMorph===!1&&B.morphTexture!==null||Ct.envMap!==wt||G.fog===!0&&Ct.fog!==ct||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==lt.numPlanes||Ct.numIntersection!==lt.numIntersection)||Ct.vertexAlphas!==Lt||Ct.vertexTangents!==Pt||Ct.morphTargets!==Mt||Ct.morphNormals!==se||Ct.morphColors!==_e||Ct.toneMapping!==ye||Ct.morphTargetsCount!==oe)&&(ae=!0):(ae=!0,Ct.__version=G.version);let an=Ct.currentProgram;ae===!0&&(an=lr(G,V,B));let ui=!1,sn=!1,ur=!1;const Se=an.getUniforms(),Un=Ct.uniforms;if(Ot.useProgram(an.program)&&(ui=!0,sn=!0,ur=!0),G.id!==T&&(T=G.id,sn=!0),ui||C!==b){te.reverseDepthBuffer?(At.copy(b.projectionMatrix),Mg(At),Ag(At),Se.setValue(U,"projectionMatrix",At)):Se.setValue(U,"projectionMatrix",b.projectionMatrix),Se.setValue(U,"viewMatrix",b.matrixWorldInverse);const Ae=Se.map.cameraPosition;Ae!==void 0&&Ae.setValue(U,zt.setFromMatrixPosition(b.matrixWorld)),te.logarithmicDepthBuffer&&Se.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Se.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),C!==b&&(C=b,sn=!0,ur=!0)}if(B.isSkinnedMesh){Se.setOptional(U,B,"bindMatrix"),Se.setOptional(U,B,"bindMatrixInverse");const Ae=B.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),Se.setValue(U,"boneTexture",Ae.boneTexture,D))}B.isBatchedMesh&&(Se.setOptional(U,B,"batchingTexture"),Se.setValue(U,"batchingTexture",B._matricesTexture,D),Se.setOptional(U,B,"batchingIdTexture"),Se.setValue(U,"batchingIdTexture",B._indirectTexture,D),Se.setOptional(U,B,"batchingColorTexture"),B._colorsTexture!==null&&Se.setValue(U,"batchingColorTexture",B._colorsTexture,D));const Mn=H.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&Ft.update(B,H,an),(sn||Ct.receiveShadow!==B.receiveShadow)&&(Ct.receiveShadow=B.receiveShadow,Se.setValue(U,"receiveShadow",B.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Un.envMap.value=wt,Un.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&V.environment!==null&&(Un.envMapIntensity.value=V.environmentIntensity),sn&&(Se.setValue(U,"toneMappingExposure",I.toneMappingExposure),Ct.needsLights&&cr(Un,ur),ct&&G.fog===!0&&at.refreshFogUniforms(Un,ct),at.refreshMaterialUniforms(Un,G,et,K,g.state.transmissionRenderTarget[b.id]),Yo.upload(U,Fi(Ct),Un,D)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Yo.upload(U,Fi(Ct),Un,D),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Se.setValue(U,"center",B.center),Se.setValue(U,"modelViewMatrix",B.modelViewMatrix),Se.setValue(U,"normalMatrix",B.normalMatrix),Se.setValue(U,"modelMatrix",B.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ae=G.uniformsGroups;for(let hi=0,hr=Ae.length;hi<hr;hi++){const cs=Ae[hi];O.update(cs,an),O.bind(cs,an)}}return an}function cr(b,V){b.ambientLightColor.needsUpdate=V,b.lightProbe.needsUpdate=V,b.directionalLights.needsUpdate=V,b.directionalLightShadows.needsUpdate=V,b.pointLights.needsUpdate=V,b.pointLightShadows.needsUpdate=V,b.spotLights.needsUpdate=V,b.spotLightShadows.needsUpdate=V,b.rectAreaLights.needsUpdate=V,b.hemisphereLights.needsUpdate=V}function Nn(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(b,V,H){Vt.get(b.texture).__webglTexture=V,Vt.get(b.depthTexture).__webglTexture=H;const G=Vt.get(b);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||Yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,V){const H=Vt.get(b);H.__webglFramebuffer=V,H.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(b,V=0,H=0){x=b,W=V,F=H;let G=!0,B=null,ct=!1,mt=!1;if(b){const wt=Vt.get(b);if(wt.__useDefaultFramebuffer!==void 0)Ot.bindFramebuffer(U.FRAMEBUFFER,null),G=!1;else if(wt.__webglFramebuffer===void 0)D.setupRenderTarget(b);else if(wt.__hasExternalTextures)D.rebindTextures(b,Vt.get(b.texture).__webglTexture,Vt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Mt=b.depthTexture;if(wt.__boundDepthTexture!==Mt){if(Mt!==null&&Vt.has(Mt)&&(b.width!==Mt.image.width||b.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(b)}}const Lt=b.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(mt=!0);const Pt=Vt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Pt[V])?B=Pt[V][H]:B=Pt[V],ct=!0):b.samples>0&&D.useMultisampledRTT(b)===!1?B=Vt.get(b).__webglMultisampledFramebuffer:Array.isArray(Pt)?B=Pt[H]:B=Pt,m.copy(b.viewport),E.copy(b.scissor),P=b.scissorTest}else m.copy(Et).multiplyScalar(et).floor(),E.copy(Rt).multiplyScalar(et).floor(),P=Xt;if(Ot.bindFramebuffer(U.FRAMEBUFFER,B)&&G&&Ot.drawBuffers(b,B),Ot.viewport(m),Ot.scissor(E),Ot.setScissorTest(P),ct){const wt=Vt.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+V,wt.__webglTexture,H)}else if(mt){const wt=Vt.get(b.texture),Lt=V||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,wt.__webglTexture,H||0,Lt)}T=-1},this.readRenderTargetPixels=function(b,V,H,G,B,ct,mt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&mt!==void 0&&(St=St[mt]),St){Ot.bindFramebuffer(U.FRAMEBUFFER,St);try{const wt=b.texture,Lt=wt.format,Pt=wt.type;if(!te.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=b.width-G&&H>=0&&H<=b.height-B&&U.readPixels(V,H,G,B,Ht.convert(Lt),Ht.convert(Pt),ct)}finally{const wt=x!==null?Vt.get(x).__webglFramebuffer:null;Ot.bindFramebuffer(U.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(b,V,H,G,B,ct,mt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&mt!==void 0&&(St=St[mt]),St){const wt=b.texture,Lt=wt.format,Pt=wt.type;if(!te.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=b.width-G&&H>=0&&H<=b.height-B){Ot.bindFramebuffer(U.FRAMEBUFFER,St);const Mt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Mt),U.bufferData(U.PIXEL_PACK_BUFFER,ct.byteLength,U.STREAM_READ),U.readPixels(V,H,G,B,Ht.convert(Lt),Ht.convert(Pt),0);const se=x!==null?Vt.get(x).__webglFramebuffer:null;Ot.bindFramebuffer(U.FRAMEBUFFER,se);const _e=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Tg(U,_e,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Mt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ct),U.deleteBuffer(Mt),U.deleteSync(_e),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,V=null,H=0){b.isTexture!==!0&&(Ko("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,b=arguments[1]);const G=Math.pow(2,-H),B=Math.floor(b.image.width*G),ct=Math.floor(b.image.height*G),mt=V!==null?V.x:0,St=V!==null?V.y:0;D.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,H,0,0,mt,St,B,ct),Ot.unbindTexture()},this.copyTextureToTexture=function(b,V,H=null,G=null,B=0){b.isTexture!==!0&&(Ko("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,b=arguments[1],V=arguments[2],B=arguments[3]||0,H=null);let ct,mt,St,wt,Lt,Pt;H!==null?(ct=H.max.x-H.min.x,mt=H.max.y-H.min.y,St=H.min.x,wt=H.min.y):(ct=b.image.width,mt=b.image.height,St=0,wt=0),G!==null?(Lt=G.x,Pt=G.y):(Lt=0,Pt=0);const Mt=Ht.convert(V.format),se=Ht.convert(V.type);D.setTexture2D(V,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);const _e=U.getParameter(U.UNPACK_ROW_LENGTH),ye=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ke=U.getParameter(U.UNPACK_SKIP_PIXELS),oe=U.getParameter(U.UNPACK_SKIP_ROWS),Ct=U.getParameter(U.UNPACK_SKIP_IMAGES),Ie=b.isCompressedTexture?b.mipmaps[B]:b.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Ie.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ie.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,St),U.pixelStorei(U.UNPACK_SKIP_ROWS,wt),b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,B,Lt,Pt,ct,mt,Mt,se,Ie.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,B,Lt,Pt,Ie.width,Ie.height,Mt,Ie.data):U.texSubImage2D(U.TEXTURE_2D,B,Lt,Pt,ct,mt,Mt,se,Ie),U.pixelStorei(U.UNPACK_ROW_LENGTH,_e),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ye),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ke),U.pixelStorei(U.UNPACK_SKIP_ROWS,oe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ct),B===0&&V.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Ot.unbindTexture()},this.copyTextureToTexture3D=function(b,V,H=null,G=null,B=0){b.isTexture!==!0&&(Ko("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,b=arguments[2],V=arguments[3],B=arguments[4]||0);let ct,mt,St,wt,Lt,Pt,Mt,se,_e;const ye=b.isCompressedTexture?b.mipmaps[B]:b.image;H!==null?(ct=H.max.x-H.min.x,mt=H.max.y-H.min.y,St=H.max.z-H.min.z,wt=H.min.x,Lt=H.min.y,Pt=H.min.z):(ct=ye.width,mt=ye.height,St=ye.depth,wt=0,Lt=0,Pt=0),G!==null?(Mt=G.x,se=G.y,_e=G.z):(Mt=0,se=0,_e=0);const Ke=Ht.convert(V.format),oe=Ht.convert(V.type);let Ct;if(V.isData3DTexture)D.setTexture3D(V,0),Ct=U.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)D.setTexture2DArray(V,0),Ct=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);const Ie=U.getParameter(U.UNPACK_ROW_LENGTH),ae=U.getParameter(U.UNPACK_IMAGE_HEIGHT),an=U.getParameter(U.UNPACK_SKIP_PIXELS),ui=U.getParameter(U.UNPACK_SKIP_ROWS),sn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ye.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ye.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,wt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Lt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Pt),b.isDataTexture||b.isData3DTexture?U.texSubImage3D(Ct,B,Mt,se,_e,ct,mt,St,Ke,oe,ye.data):V.isCompressedArrayTexture?U.compressedTexSubImage3D(Ct,B,Mt,se,_e,ct,mt,St,Ke,ye.data):U.texSubImage3D(Ct,B,Mt,se,_e,ct,mt,St,Ke,oe,ye),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ie),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ae),U.pixelStorei(U.UNPACK_SKIP_PIXELS,an),U.pixelStorei(U.UNPACK_SKIP_ROWS,ui),U.pixelStorei(U.UNPACK_SKIP_IMAGES,sn),B===0&&V.generateMipmaps&&U.generateMipmap(Ct),Ot.unbindTexture()},this.initRenderTarget=function(b){Vt.get(b).__webglFramebuffer===void 0&&D.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?D.setTextureCube(b,0):b.isData3DTexture?D.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?D.setTexture2DArray(b,0):D.setTexture2D(b,0),Ot.unbindTexture()},this.resetState=function(){W=0,F=0,x=null,Ot.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===$c?"display-p3":"srgb",e.unpackColorSpace=de.workingColorSpace===Ma?"display-p3":"srgb"}}class Jc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ce(t),this.near=e,this.far=n}clone(){return new Jc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class OE extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Lf extends Ks{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ff,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Nf extends rn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Tl=new Ce,Jh=new q,Zh=new q;class VE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yc,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Jh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jh),Zh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zh),e.updateMatrixWorld(),Tl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Tl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class BE extends VE{constructor(){super(new bf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Uf extends Nf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new BE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class kE extends Nf{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class zE{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=td(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=td();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function td(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zc);var ed={};/**
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
 */const Ff=function(i){const t=[];let e=0;for(let n=0;n<i.length;n++){let r=i.charCodeAt(n);r<128?t[e++]=r:r<2048?(t[e++]=r>>6|192,t[e++]=r&63|128):(r&64512)===55296&&n+1<i.length&&(i.charCodeAt(n+1)&64512)===56320?(r=65536+((r&1023)<<10)+(i.charCodeAt(++n)&1023),t[e++]=r>>18|240,t[e++]=r>>12&63|128,t[e++]=r>>6&63|128,t[e++]=r&63|128):(t[e++]=r>>12|224,t[e++]=r>>6&63|128,t[e++]=r&63|128)}return t},HE=function(i){const t=[];let e=0,n=0;for(;e<i.length;){const r=i[e++];if(r<128)t[n++]=String.fromCharCode(r);else if(r>191&&r<224){const s=i[e++];t[n++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=i[e++],o=i[e++],l=i[e++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;t[n++]=String.fromCharCode(55296+(c>>10)),t[n++]=String.fromCharCode(56320+(c&1023))}else{const s=i[e++],o=i[e++];t[n++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Of={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,t){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<i.length;r+=3){const s=i[r],o=r+1<i.length,l=o?i[r+1]:0,c=r+2<i.length,u=c?i[r+2]:0,h=s>>2,f=(s&3)<<4|l>>4;let p=(l&15)<<2|u>>6,v=u&63;c||(v=64,o||(p=64)),n.push(e[h],e[f],e[p],e[v])}return n.join("")},encodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(i):this.encodeByteArray(Ff(i),t)},decodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(i):HE(this.decodeStringToByteArray(i,t))},decodeStringToByteArray(i,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<i.length;){const s=e[i.charAt(r++)],l=r<i.length?e[i.charAt(r)]:0;++r;const u=r<i.length?e[i.charAt(r)]:64;++r;const f=r<i.length?e[i.charAt(r)]:64;if(++r,s==null||l==null||u==null||f==null)throw new GE;const p=s<<2|l>>4;if(n.push(p),u!==64){const v=l<<4&240|u>>2;if(n.push(v),f!==64){const S=u<<6&192|f;n.push(S)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class GE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const WE=function(i){const t=Ff(i);return Of.encodeByteArray(t,!0)},aa=function(i){return WE(i).replace(/\./g,"")},qE=function(i){try{return Of.decodeString(i,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function XE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const jE=()=>XE().__FIREBASE_DEFAULTS__,$E=()=>{if(typeof process>"u"||typeof ed>"u")return;const i=ed.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},KE=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=i&&qE(i[1]);return t&&JSON.parse(t)},Zc=()=>{try{return jE()||$E()||KE()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},YE=i=>{var t,e;return(e=(t=Zc())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[i]},QE=i=>{const t=YE(i);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),n]:[t.substring(0,e),n]},Vf=()=>{var i;return(i=Zc())===null||i===void 0?void 0:i.config};/**
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
 */class JE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
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
 */function ZE(i,t){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",r=i.iat||0,s=i.sub||i.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},i);return[aa(JSON.stringify(e)),aa(JSON.stringify(o)),""].join(".")}/**
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
 */function tx(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ex(){var i;const t=(i=Zc())===null||i===void 0?void 0:i.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function nx(){return!ex()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ix(){try{return typeof indexedDB=="object"}catch{return!1}}function rx(){return new Promise((i,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),e||self.indexedDB.deleteDatabase(n),i(!0)},r.onupgradeneeded=()=>{e=!1},r.onerror=()=>{var s;t(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(e){t(e)}})}/**
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
 */const sx="FirebaseError";class ns extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=sx,Object.setPrototypeOf(this,ns.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bf.prototype.create)}}class Bf{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,s=this.errors[t],o=s?ox(s,n):"Error",l=`${this.serviceName}: ${o} (${r}).`;return new ns(r,l,n)}}function ox(i,t){return i.replace(ax,(e,n)=>{const r=t[n];return r!=null?String(r):`<${n}?>`})}const ax=/\{\$([^}]+)}/g;function yc(i,t){if(i===t)return!0;const e=Object.keys(i),n=Object.keys(t);for(const r of e){if(!n.includes(r))return!1;const s=i[r],o=t[r];if(nd(s)&&nd(o)){if(!yc(s,o))return!1}else if(s!==o)return!1}for(const r of n)if(!e.includes(r))return!1;return!0}function nd(i){return i!==null&&typeof i=="object"}/**
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
 */function Ci(i){return i&&i._delegate?i._delegate:i}class Ns{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Xi="[DEFAULT]";/**
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
 */class lx{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new JE;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:e});r&&n.resolve(r)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(t?.identifier),r=(e=t?.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ux(t))try{this.getOrInitializeService({instanceIdentifier:Xi})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:r});n.resolve(s)}catch{}}}}clearInstance(t=Xi){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Xi){return this.instances.has(t)}getOptions(t=Xi){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);n===l&&o.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),s=(n=this.onInitCallbacks.get(r))!==null&&n!==void 0?n:new Set;s.add(t),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&t(o,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:cx(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=Xi){return this.component?this.component.multipleInstances?t:Xi:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cx(i){return i===Xi?void 0:i}function ux(i){return i.instantiationMode==="EAGER"}/**
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
 */class hx{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new lx(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var le;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(le||(le={}));const dx={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},fx=le.INFO,px={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},mx=(i,t,...e)=>{if(t<i.logLevel)return;const n=new Date().toISOString(),r=px[t];if(r)console[r](`[${n}]  ${i.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class kf{constructor(t){this.name=t,this._logLevel=fx,this._logHandler=mx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in le))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?dx[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...t),this._logHandler(this,le.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...t),this._logHandler(this,le.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,le.INFO,...t),this._logHandler(this,le.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,le.WARN,...t),this._logHandler(this,le.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...t),this._logHandler(this,le.ERROR,...t)}}const gx=(i,t)=>t.some(e=>i instanceof e);let id,rd;function _x(){return id||(id=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vx(){return rd||(rd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zf=new WeakMap,Ec=new WeakMap,Hf=new WeakMap,Ml=new WeakMap,tu=new WeakMap;function yx(i){const t=new Promise((e,n)=>{const r=()=>{i.removeEventListener("success",s),i.removeEventListener("error",o)},s=()=>{e(Mi(i.result)),r()},o=()=>{n(i.error),r()};i.addEventListener("success",s),i.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&zf.set(e,i)}).catch(()=>{}),tu.set(t,i),t}function Ex(i){if(Ec.has(i))return;const t=new Promise((e,n)=>{const r=()=>{i.removeEventListener("complete",s),i.removeEventListener("error",o),i.removeEventListener("abort",o)},s=()=>{e(),r()},o=()=>{n(i.error||new DOMException("AbortError","AbortError")),r()};i.addEventListener("complete",s),i.addEventListener("error",o),i.addEventListener("abort",o)});Ec.set(i,t)}let xc={get(i,t,e){if(i instanceof IDBTransaction){if(t==="done")return Ec.get(i);if(t==="objectStoreNames")return i.objectStoreNames||Hf.get(i);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Mi(i[t])},set(i,t,e){return i[t]=e,!0},has(i,t){return i instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in i}};function xx(i){xc=i(xc)}function Sx(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const n=i.call(Al(this),t,...e);return Hf.set(n,t.sort?t.sort():[t]),Mi(n)}:vx().includes(i)?function(...t){return i.apply(Al(this),t),Mi(zf.get(this))}:function(...t){return Mi(i.apply(Al(this),t))}}function Tx(i){return typeof i=="function"?Sx(i):(i instanceof IDBTransaction&&Ex(i),gx(i,_x())?new Proxy(i,xc):i)}function Mi(i){if(i instanceof IDBRequest)return yx(i);if(Ml.has(i))return Ml.get(i);const t=Tx(i);return t!==i&&(Ml.set(i,t),tu.set(t,i)),t}const Al=i=>tu.get(i);function Mx(i,t,{blocked:e,upgrade:n,blocking:r,terminated:s}={}){const o=indexedDB.open(i,t),l=Mi(o);return n&&o.addEventListener("upgradeneeded",c=>{n(Mi(o.result),c.oldVersion,c.newVersion,Mi(o.transaction),c)}),e&&o.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Ax=["get","getKey","getAll","getAllKeys","count"],wx=["put","add","delete","clear"],wl=new Map;function sd(i,t){if(!(i instanceof IDBDatabase&&!(t in i)&&typeof t=="string"))return;if(wl.get(t))return wl.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,r=wx.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!(r||Ax.includes(e)))return;const s=async function(o,...l){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return n&&(u=u.index(l.shift())),(await Promise.all([u[e](...l),r&&c.done]))[0]};return wl.set(t,s),s}xx(i=>({...i,get:(t,e,n)=>sd(t,e)||i.get(t,e,n),has:(t,e)=>!!sd(t,e)||i.has(t,e)}));/**
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
 */class bx{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Rx(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function Rx(i){const t=i.getComponent();return t?.type==="VERSION"}const Sc="@firebase/app",od="0.10.13";/**
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
 */const oi=new kf("@firebase/app"),Cx="@firebase/app-compat",Ix="@firebase/analytics-compat",Px="@firebase/analytics",Dx="@firebase/app-check-compat",Lx="@firebase/app-check",Nx="@firebase/auth",Ux="@firebase/auth-compat",Fx="@firebase/database",Ox="@firebase/data-connect",Vx="@firebase/database-compat",Bx="@firebase/functions",kx="@firebase/functions-compat",zx="@firebase/installations",Hx="@firebase/installations-compat",Gx="@firebase/messaging",Wx="@firebase/messaging-compat",qx="@firebase/performance",Xx="@firebase/performance-compat",jx="@firebase/remote-config",$x="@firebase/remote-config-compat",Kx="@firebase/storage",Yx="@firebase/storage-compat",Qx="@firebase/firestore",Jx="@firebase/vertexai-preview",Zx="@firebase/firestore-compat",tS="firebase",eS="10.14.1";/**
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
 */const Tc="[DEFAULT]",nS={[Sc]:"fire-core",[Cx]:"fire-core-compat",[Px]:"fire-analytics",[Ix]:"fire-analytics-compat",[Lx]:"fire-app-check",[Dx]:"fire-app-check-compat",[Nx]:"fire-auth",[Ux]:"fire-auth-compat",[Fx]:"fire-rtdb",[Ox]:"fire-data-connect",[Vx]:"fire-rtdb-compat",[Bx]:"fire-fn",[kx]:"fire-fn-compat",[zx]:"fire-iid",[Hx]:"fire-iid-compat",[Gx]:"fire-fcm",[Wx]:"fire-fcm-compat",[qx]:"fire-perf",[Xx]:"fire-perf-compat",[jx]:"fire-rc",[$x]:"fire-rc-compat",[Kx]:"fire-gcs",[Yx]:"fire-gcs-compat",[Qx]:"fire-fst",[Zx]:"fire-fst-compat",[Jx]:"fire-vertex","fire-js":"fire-js",[tS]:"fire-js-all"};/**
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
 */const la=new Map,iS=new Map,Mc=new Map;function ad(i,t){try{i.container.addComponent(t)}catch(e){oi.debug(`Component ${t.name} failed to register with FirebaseApp ${i.name}`,e)}}function ca(i){const t=i.name;if(Mc.has(t))return oi.debug(`There were multiple attempts to register component ${t}.`),!1;Mc.set(t,i);for(const e of la.values())ad(e,i);for(const e of iS.values())ad(e,i);return!0}function rS(i,t){const e=i.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),i.container.getProvider(t)}/**
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
 */const sS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ai=new Bf("app","Firebase",sS);/**
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
 */class oS{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ns("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ai.create("app-deleted",{appName:this._name})}}/**
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
 */const aS=eS;function Gf(i,t={}){let e=i;typeof t!="object"&&(t={name:t});const n=Object.assign({name:Tc,automaticDataCollectionEnabled:!1},t),r=n.name;if(typeof r!="string"||!r)throw Ai.create("bad-app-name",{appName:String(r)});if(e||(e=Vf()),!e)throw Ai.create("no-options");const s=la.get(r);if(s){if(yc(e,s.options)&&yc(n,s.config))return s;throw Ai.create("duplicate-app",{appName:r})}const o=new hx(r);for(const c of Mc.values())o.addComponent(c);const l=new oS(e,n,o);return la.set(r,l),l}function lS(i=Tc){const t=la.get(i);if(!t&&i===Tc&&Vf())return Gf();if(!t)throw Ai.create("no-app",{appName:i});return t}function Fr(i,t,e){var n;let r=(n=nS[i])!==null&&n!==void 0?n:i;e&&(r+=`-${e}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const l=[`Unable to register library "${r}" with version "${t}":`];s&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),oi.warn(l.join(" "));return}ca(new Ns(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const cS="firebase-heartbeat-database",uS=1,Us="firebase-heartbeat-store";let bl=null;function Wf(){return bl||(bl=Mx(cS,uS,{upgrade:(i,t)=>{switch(t){case 0:try{i.createObjectStore(Us)}catch(e){console.warn(e)}}}}).catch(i=>{throw Ai.create("idb-open",{originalErrorMessage:i.message})})),bl}async function hS(i){try{const e=(await Wf()).transaction(Us),n=await e.objectStore(Us).get(qf(i));return await e.done,n}catch(t){if(t instanceof ns)oi.warn(t.message);else{const e=Ai.create("idb-get",{originalErrorMessage:t?.message});oi.warn(e.message)}}}async function ld(i,t){try{const n=(await Wf()).transaction(Us,"readwrite");await n.objectStore(Us).put(t,qf(i)),await n.done}catch(e){if(e instanceof ns)oi.warn(e.message);else{const n=Ai.create("idb-set",{originalErrorMessage:e?.message});oi.warn(n.message)}}}function qf(i){return`${i.name}!${i.options.appId}`}/**
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
 */const dS=1024,fS=30*24*60*60*1e3;class pS{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new gS(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,e;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=cd();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=fS}),this._storage.overwrite(this._heartbeatsCache))}catch(n){oi.warn(n)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=cd(),{heartbeatsToSend:n,unsentEntries:r}=mS(this._heartbeatsCache.heartbeats),s=aa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return oi.warn(e),""}}}function cd(){return new Date().toISOString().substring(0,10)}function mS(i,t=dS){const e=[];let n=i.slice();for(const r of i){const s=e.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),ud(e)>t){s.dates.pop();break}}else if(e.push({agent:r.agent,dates:[r.date]}),ud(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class gS{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ix()?rx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await hS(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const r=await this.read();return ld(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const r=await this.read();return ld(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function ud(i){return aa(JSON.stringify({version:2,heartbeats:i})).length}/**
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
 */function _S(i){ca(new Ns("platform-logger",t=>new bx(t),"PRIVATE")),ca(new Ns("heartbeat",t=>new pS(t),"PRIVATE")),Fr(Sc,od,i),Fr(Sc,od,"esm2017"),Fr("fire-js","")}_S("");var hd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zi,Xf;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(x,T){function C(){}C.prototype=T.prototype,x.D=T.prototype,x.prototype=new C,x.prototype.constructor=x,x.C=function(m,E,P){for(var A=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)A[Y-2]=arguments[Y];return T.prototype[E].apply(m,A)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(x,T,C){C||(C=0);var m=Array(16);if(typeof T=="string")for(var E=0;16>E;++E)m[E]=T.charCodeAt(C++)|T.charCodeAt(C++)<<8|T.charCodeAt(C++)<<16|T.charCodeAt(C++)<<24;else for(E=0;16>E;++E)m[E]=T[C++]|T[C++]<<8|T[C++]<<16|T[C++]<<24;T=x.g[0],C=x.g[1],E=x.g[2];var P=x.g[3],A=T+(P^C&(E^P))+m[0]+3614090360&4294967295;T=C+(A<<7&4294967295|A>>>25),A=P+(E^T&(C^E))+m[1]+3905402710&4294967295,P=T+(A<<12&4294967295|A>>>20),A=E+(C^P&(T^C))+m[2]+606105819&4294967295,E=P+(A<<17&4294967295|A>>>15),A=C+(T^E&(P^T))+m[3]+3250441966&4294967295,C=E+(A<<22&4294967295|A>>>10),A=T+(P^C&(E^P))+m[4]+4118548399&4294967295,T=C+(A<<7&4294967295|A>>>25),A=P+(E^T&(C^E))+m[5]+1200080426&4294967295,P=T+(A<<12&4294967295|A>>>20),A=E+(C^P&(T^C))+m[6]+2821735955&4294967295,E=P+(A<<17&4294967295|A>>>15),A=C+(T^E&(P^T))+m[7]+4249261313&4294967295,C=E+(A<<22&4294967295|A>>>10),A=T+(P^C&(E^P))+m[8]+1770035416&4294967295,T=C+(A<<7&4294967295|A>>>25),A=P+(E^T&(C^E))+m[9]+2336552879&4294967295,P=T+(A<<12&4294967295|A>>>20),A=E+(C^P&(T^C))+m[10]+4294925233&4294967295,E=P+(A<<17&4294967295|A>>>15),A=C+(T^E&(P^T))+m[11]+2304563134&4294967295,C=E+(A<<22&4294967295|A>>>10),A=T+(P^C&(E^P))+m[12]+1804603682&4294967295,T=C+(A<<7&4294967295|A>>>25),A=P+(E^T&(C^E))+m[13]+4254626195&4294967295,P=T+(A<<12&4294967295|A>>>20),A=E+(C^P&(T^C))+m[14]+2792965006&4294967295,E=P+(A<<17&4294967295|A>>>15),A=C+(T^E&(P^T))+m[15]+1236535329&4294967295,C=E+(A<<22&4294967295|A>>>10),A=T+(E^P&(C^E))+m[1]+4129170786&4294967295,T=C+(A<<5&4294967295|A>>>27),A=P+(C^E&(T^C))+m[6]+3225465664&4294967295,P=T+(A<<9&4294967295|A>>>23),A=E+(T^C&(P^T))+m[11]+643717713&4294967295,E=P+(A<<14&4294967295|A>>>18),A=C+(P^T&(E^P))+m[0]+3921069994&4294967295,C=E+(A<<20&4294967295|A>>>12),A=T+(E^P&(C^E))+m[5]+3593408605&4294967295,T=C+(A<<5&4294967295|A>>>27),A=P+(C^E&(T^C))+m[10]+38016083&4294967295,P=T+(A<<9&4294967295|A>>>23),A=E+(T^C&(P^T))+m[15]+3634488961&4294967295,E=P+(A<<14&4294967295|A>>>18),A=C+(P^T&(E^P))+m[4]+3889429448&4294967295,C=E+(A<<20&4294967295|A>>>12),A=T+(E^P&(C^E))+m[9]+568446438&4294967295,T=C+(A<<5&4294967295|A>>>27),A=P+(C^E&(T^C))+m[14]+3275163606&4294967295,P=T+(A<<9&4294967295|A>>>23),A=E+(T^C&(P^T))+m[3]+4107603335&4294967295,E=P+(A<<14&4294967295|A>>>18),A=C+(P^T&(E^P))+m[8]+1163531501&4294967295,C=E+(A<<20&4294967295|A>>>12),A=T+(E^P&(C^E))+m[13]+2850285829&4294967295,T=C+(A<<5&4294967295|A>>>27),A=P+(C^E&(T^C))+m[2]+4243563512&4294967295,P=T+(A<<9&4294967295|A>>>23),A=E+(T^C&(P^T))+m[7]+1735328473&4294967295,E=P+(A<<14&4294967295|A>>>18),A=C+(P^T&(E^P))+m[12]+2368359562&4294967295,C=E+(A<<20&4294967295|A>>>12),A=T+(C^E^P)+m[5]+4294588738&4294967295,T=C+(A<<4&4294967295|A>>>28),A=P+(T^C^E)+m[8]+2272392833&4294967295,P=T+(A<<11&4294967295|A>>>21),A=E+(P^T^C)+m[11]+1839030562&4294967295,E=P+(A<<16&4294967295|A>>>16),A=C+(E^P^T)+m[14]+4259657740&4294967295,C=E+(A<<23&4294967295|A>>>9),A=T+(C^E^P)+m[1]+2763975236&4294967295,T=C+(A<<4&4294967295|A>>>28),A=P+(T^C^E)+m[4]+1272893353&4294967295,P=T+(A<<11&4294967295|A>>>21),A=E+(P^T^C)+m[7]+4139469664&4294967295,E=P+(A<<16&4294967295|A>>>16),A=C+(E^P^T)+m[10]+3200236656&4294967295,C=E+(A<<23&4294967295|A>>>9),A=T+(C^E^P)+m[13]+681279174&4294967295,T=C+(A<<4&4294967295|A>>>28),A=P+(T^C^E)+m[0]+3936430074&4294967295,P=T+(A<<11&4294967295|A>>>21),A=E+(P^T^C)+m[3]+3572445317&4294967295,E=P+(A<<16&4294967295|A>>>16),A=C+(E^P^T)+m[6]+76029189&4294967295,C=E+(A<<23&4294967295|A>>>9),A=T+(C^E^P)+m[9]+3654602809&4294967295,T=C+(A<<4&4294967295|A>>>28),A=P+(T^C^E)+m[12]+3873151461&4294967295,P=T+(A<<11&4294967295|A>>>21),A=E+(P^T^C)+m[15]+530742520&4294967295,E=P+(A<<16&4294967295|A>>>16),A=C+(E^P^T)+m[2]+3299628645&4294967295,C=E+(A<<23&4294967295|A>>>9),A=T+(E^(C|~P))+m[0]+4096336452&4294967295,T=C+(A<<6&4294967295|A>>>26),A=P+(C^(T|~E))+m[7]+1126891415&4294967295,P=T+(A<<10&4294967295|A>>>22),A=E+(T^(P|~C))+m[14]+2878612391&4294967295,E=P+(A<<15&4294967295|A>>>17),A=C+(P^(E|~T))+m[5]+4237533241&4294967295,C=E+(A<<21&4294967295|A>>>11),A=T+(E^(C|~P))+m[12]+1700485571&4294967295,T=C+(A<<6&4294967295|A>>>26),A=P+(C^(T|~E))+m[3]+2399980690&4294967295,P=T+(A<<10&4294967295|A>>>22),A=E+(T^(P|~C))+m[10]+4293915773&4294967295,E=P+(A<<15&4294967295|A>>>17),A=C+(P^(E|~T))+m[1]+2240044497&4294967295,C=E+(A<<21&4294967295|A>>>11),A=T+(E^(C|~P))+m[8]+1873313359&4294967295,T=C+(A<<6&4294967295|A>>>26),A=P+(C^(T|~E))+m[15]+4264355552&4294967295,P=T+(A<<10&4294967295|A>>>22),A=E+(T^(P|~C))+m[6]+2734768916&4294967295,E=P+(A<<15&4294967295|A>>>17),A=C+(P^(E|~T))+m[13]+1309151649&4294967295,C=E+(A<<21&4294967295|A>>>11),A=T+(E^(C|~P))+m[4]+4149444226&4294967295,T=C+(A<<6&4294967295|A>>>26),A=P+(C^(T|~E))+m[11]+3174756917&4294967295,P=T+(A<<10&4294967295|A>>>22),A=E+(T^(P|~C))+m[2]+718787259&4294967295,E=P+(A<<15&4294967295|A>>>17),A=C+(P^(E|~T))+m[9]+3951481745&4294967295,x.g[0]=x.g[0]+T&4294967295,x.g[1]=x.g[1]+(E+(A<<21&4294967295|A>>>11))&4294967295,x.g[2]=x.g[2]+E&4294967295,x.g[3]=x.g[3]+P&4294967295}n.prototype.u=function(x,T){T===void 0&&(T=x.length);for(var C=T-this.blockSize,m=this.B,E=this.h,P=0;P<T;){if(E==0)for(;P<=C;)r(this,x,P),P+=this.blockSize;if(typeof x=="string"){for(;P<T;)if(m[E++]=x.charCodeAt(P++),E==this.blockSize){r(this,m),E=0;break}}else for(;P<T;)if(m[E++]=x[P++],E==this.blockSize){r(this,m),E=0;break}}this.h=E,this.o+=T},n.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var T=1;T<x.length-8;++T)x[T]=0;var C=8*this.o;for(T=x.length-8;T<x.length;++T)x[T]=C&255,C/=256;for(this.u(x),x=Array(16),T=C=0;4>T;++T)for(var m=0;32>m;m+=8)x[C++]=this.g[T]>>>m&255;return x};function s(x,T){var C=l;return Object.prototype.hasOwnProperty.call(C,x)?C[x]:C[x]=T(x)}function o(x,T){this.h=T;for(var C=[],m=!0,E=x.length-1;0<=E;E--){var P=x[E]|0;m&&P==T||(C[E]=P,m=!1)}this.g=C}var l={};function c(x){return-128<=x&&128>x?s(x,function(T){return new o([T|0],0>T?-1:0)}):new o([x|0],0>x?-1:0)}function u(x){if(isNaN(x)||!isFinite(x))return f;if(0>x)return g(u(-x));for(var T=[],C=1,m=0;x>=C;m++)T[m]=x/C|0,C*=4294967296;return new o(T,0)}function h(x,T){if(x.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(x.charAt(0)=="-")return g(h(x.substring(1),T));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=u(Math.pow(T,8)),m=f,E=0;E<x.length;E+=8){var P=Math.min(8,x.length-E),A=parseInt(x.substring(E,E+P),T);8>P?(P=u(Math.pow(T,P)),m=m.j(P).add(u(A))):(m=m.j(C),m=m.add(u(A)))}return m}var f=c(0),p=c(1),v=c(16777216);i=o.prototype,i.m=function(){if(w(this))return-g(this).m();for(var x=0,T=1,C=0;C<this.g.length;C++){var m=this.i(C);x+=(0<=m?m:4294967296+m)*T,T*=4294967296}return x},i.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(S(this))return"0";if(w(this))return"-"+g(this).toString(x);for(var T=u(Math.pow(x,6)),C=this,m="";;){var E=N(C,T).g;C=_(C,E.j(T));var P=((0<C.g.length?C.g[0]:C.h)>>>0).toString(x);if(C=E,S(C))return P+m;for(;6>P.length;)P="0"+P;m=P+m}},i.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function S(x){if(x.h!=0)return!1;for(var T=0;T<x.g.length;T++)if(x.g[T]!=0)return!1;return!0}function w(x){return x.h==-1}i.l=function(x){return x=_(this,x),w(x)?-1:S(x)?0:1};function g(x){for(var T=x.g.length,C=[],m=0;m<T;m++)C[m]=~x.g[m];return new o(C,~x.h).add(p)}i.abs=function(){return w(this)?g(this):this},i.add=function(x){for(var T=Math.max(this.g.length,x.g.length),C=[],m=0,E=0;E<=T;E++){var P=m+(this.i(E)&65535)+(x.i(E)&65535),A=(P>>>16)+(this.i(E)>>>16)+(x.i(E)>>>16);m=A>>>16,P&=65535,A&=65535,C[E]=A<<16|P}return new o(C,C[C.length-1]&-2147483648?-1:0)};function _(x,T){return x.add(g(T))}i.j=function(x){if(S(this)||S(x))return f;if(w(this))return w(x)?g(this).j(g(x)):g(g(this).j(x));if(w(x))return g(this.j(g(x)));if(0>this.l(v)&&0>x.l(v))return u(this.m()*x.m());for(var T=this.g.length+x.g.length,C=[],m=0;m<2*T;m++)C[m]=0;for(m=0;m<this.g.length;m++)for(var E=0;E<x.g.length;E++){var P=this.i(m)>>>16,A=this.i(m)&65535,Y=x.i(E)>>>16,nt=x.i(E)&65535;C[2*m+2*E]+=A*nt,L(C,2*m+2*E),C[2*m+2*E+1]+=P*nt,L(C,2*m+2*E+1),C[2*m+2*E+1]+=A*Y,L(C,2*m+2*E+1),C[2*m+2*E+2]+=P*Y,L(C,2*m+2*E+2)}for(m=0;m<T;m++)C[m]=C[2*m+1]<<16|C[2*m];for(m=T;m<2*T;m++)C[m]=0;return new o(C,0)};function L(x,T){for(;(x[T]&65535)!=x[T];)x[T+1]+=x[T]>>>16,x[T]&=65535,T++}function I(x,T){this.g=x,this.h=T}function N(x,T){if(S(T))throw Error("division by zero");if(S(x))return new I(f,f);if(w(x))return T=N(g(x),T),new I(g(T.g),g(T.h));if(w(T))return T=N(x,g(T)),new I(g(T.g),T.h);if(30<x.g.length){if(w(x)||w(T))throw Error("slowDivide_ only works with positive integers.");for(var C=p,m=T;0>=m.l(x);)C=W(C),m=W(m);var E=F(C,1),P=F(m,1);for(m=F(m,2),C=F(C,2);!S(m);){var A=P.add(m);0>=A.l(x)&&(E=E.add(C),P=A),m=F(m,1),C=F(C,1)}return T=_(x,E.j(T)),new I(E,T)}for(E=f;0<=x.l(T);){for(C=Math.max(1,Math.floor(x.m()/T.m())),m=Math.ceil(Math.log(C)/Math.LN2),m=48>=m?1:Math.pow(2,m-48),P=u(C),A=P.j(T);w(A)||0<A.l(x);)C-=m,P=u(C),A=P.j(T);S(P)&&(P=p),E=E.add(P),x=_(x,A)}return new I(E,x)}i.A=function(x){return N(this,x).h},i.and=function(x){for(var T=Math.max(this.g.length,x.g.length),C=[],m=0;m<T;m++)C[m]=this.i(m)&x.i(m);return new o(C,this.h&x.h)},i.or=function(x){for(var T=Math.max(this.g.length,x.g.length),C=[],m=0;m<T;m++)C[m]=this.i(m)|x.i(m);return new o(C,this.h|x.h)},i.xor=function(x){for(var T=Math.max(this.g.length,x.g.length),C=[],m=0;m<T;m++)C[m]=this.i(m)^x.i(m);return new o(C,this.h^x.h)};function W(x){for(var T=x.g.length+1,C=[],m=0;m<T;m++)C[m]=x.i(m)<<1|x.i(m-1)>>>31;return new o(C,x.h)}function F(x,T){var C=T>>5;T%=32;for(var m=x.g.length-C,E=[],P=0;P<m;P++)E[P]=0<T?x.i(P+C)>>>T|x.i(P+C+1)<<32-T:x.i(P+C);return new o(E,x.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Xf=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Zi=o}).apply(typeof hd<"u"?hd:typeof self<"u"?self:typeof window<"u"?window:{});var ko=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jf,As,$f,Qo,Ac,Kf,Yf,Qf;(function(){var i,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,y){return a==Array.prototype||a==Object.prototype||(a[d]=y.value),a};function e(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ko=="object"&&ko];for(var d=0;d<a.length;++d){var y=a[d];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var n=e(this);function r(a,d){if(d)t:{var y=n;a=a.split(".");for(var R=0;R<a.length-1;R++){var k=a[R];if(!(k in y))break t;y=y[k]}a=a[a.length-1],R=y[a],d=d(R),d!=R&&d!=null&&t(y,a,{configurable:!0,writable:!0,value:d})}}function s(a,d){a instanceof String&&(a+="");var y=0,R=!1,k={next:function(){if(!R&&y<a.length){var X=y++;return{value:d(X,a[X]),done:!1}}return R=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}r("Array.prototype.values",function(a){return a||function(){return s(this,function(d,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function u(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function h(a,d,y){return a.call.apply(a.bind,arguments)}function f(a,d,y){if(!a)throw Error();if(2<arguments.length){var R=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,R),a.apply(d,k)}}return function(){return a.apply(d,arguments)}}function p(a,d,y){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,p.apply(null,arguments)}function v(a,d){var y=Array.prototype.slice.call(arguments,1);return function(){var R=y.slice();return R.push.apply(R,arguments),a.apply(this,R)}}function S(a,d){function y(){}y.prototype=d.prototype,a.aa=d.prototype,a.prototype=new y,a.prototype.constructor=a,a.Qb=function(R,k,X){for(var ut=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)ut[ve-2]=arguments[ve];return d.prototype[k].apply(R,ut)}}function w(a){const d=a.length;if(0<d){const y=Array(d);for(let R=0;R<d;R++)y[R]=a[R];return y}return[]}function g(a,d){for(let y=1;y<arguments.length;y++){const R=arguments[y];if(c(R)){const k=a.length||0,X=R.length||0;a.length=k+X;for(let ut=0;ut<X;ut++)a[k+ut]=R[ut]}else a.push(R)}}class _{constructor(d,y){this.i=d,this.j=y,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function L(a){return/^[\s\xa0]*$/.test(a)}function I(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function N(a){return N[" "](a),a}N[" "]=function(){};var W=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function F(a,d,y){for(const R in a)d.call(y,a[R],R,a)}function x(a,d){for(const y in a)d.call(void 0,a[y],y,a)}function T(a){const d={};for(const y in a)d[y]=a[y];return d}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function m(a,d){let y,R;for(let k=1;k<arguments.length;k++){R=arguments[k];for(y in R)a[y]=R[y];for(let X=0;X<C.length;X++)y=C[X],Object.prototype.hasOwnProperty.call(R,y)&&(a[y]=R[y])}}function E(a){var d=1;a=a.split(":");const y=[];for(;0<d&&a.length;)y.push(a.shift()),d--;return a.length&&y.push(a.join(":")),y}function P(a){l.setTimeout(()=>{throw a},0)}function A(){var a=yt;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class Y{constructor(){this.h=this.g=null}add(d,y){const R=nt.get();R.set(d,y),this.h?this.h.next=R:this.g=R,this.h=R}}var nt=new _(()=>new K,a=>a.reset());class K{constructor(){this.next=this.g=this.h=null}set(d,y){this.h=d,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let et,$=!1,yt=new Y,Et=()=>{const a=l.Promise.resolve(void 0);et=()=>{a.then(Rt)}};var Rt=()=>{for(var a;a=A();){try{a.h.call(a.g)}catch(y){P(y)}var d=nt;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}$=!1};function Xt(){this.s=this.s,this.C=this.C}Xt.prototype.s=!1,Xt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Xt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Bt(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}Bt.prototype.h=function(){this.defaultPrevented=!0};var Q=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const y=()=>{};l.addEventListener("test",y,d),l.removeEventListener("test",y,d)}catch{}return a}();function ot(a,d){if(Bt.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var y=this.type=a.type,R=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(W){t:{try{N(d.nodeName);var k=!0;break t}catch{}k=!1}k||(d=null)}}else y=="mouseover"?d=a.fromElement:y=="mouseout"&&(d=a.toElement);this.relatedTarget=d,R?(this.clientX=R.clientX!==void 0?R.clientX:R.pageX,this.clientY=R.clientY!==void 0?R.clientY:R.pageY,this.screenX=R.screenX||0,this.screenY=R.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:At[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ot.aa.h.call(this)}}S(ot,Bt);var At={2:"touch",3:"pen",4:"mouse"};ot.prototype.h=function(){ot.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var _t="closure_listenable_"+(1e6*Math.random()|0),zt=0;function Ut(a,d,y,R,k){this.listener=a,this.proxy=null,this.src=d,this.type=y,this.capture=!!R,this.ha=k,this.key=++zt,this.da=this.fa=!1}function Kt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function re(a){this.src=a,this.g={},this.h=0}re.prototype.add=function(a,d,y,R,k){var X=a.toString();a=this.g[X],a||(a=this.g[X]=[],this.h++);var ut=U(a,d,R,k);return-1<ut?(d=a[ut],y||(d.fa=!1)):(d=new Ut(d,this.src,X,!!R,k),d.fa=y,a.push(d)),d};function Jt(a,d){var y=d.type;if(y in a.g){var R=a.g[y],k=Array.prototype.indexOf.call(R,d,void 0),X;(X=0<=k)&&Array.prototype.splice.call(R,k,1),X&&(Kt(d),a.g[y].length==0&&(delete a.g[y],a.h--))}}function U(a,d,y,R){for(var k=0;k<a.length;++k){var X=a[k];if(!X.da&&X.listener==d&&X.capture==!!y&&X.ha==R)return k}return-1}var Ge="closure_lm_"+(1e6*Math.random()|0),Yt={};function te(a,d,y,R,k){if(Array.isArray(d)){for(var X=0;X<d.length;X++)te(a,d[X],y,R,k);return null}return y=Z(y),a&&a[_t]?a.K(d,y,u(R)?!!R.capture:!1,k):Ot(a,d,y,!1,R,k)}function Ot(a,d,y,R,k,X){if(!d)throw Error("Invalid event type");var ut=u(k)?!!k.capture:!!k,ve=J(a);if(ve||(a[Ge]=ve=new re(a)),y=ve.add(d,y,R,ut,X),y.proxy)return y;if(R=ge(),y.proxy=R,R.src=a,R.listener=y,a.addEventListener)Q||(k=ut),k===void 0&&(k=!1),a.addEventListener(d.toString(),R,k);else if(a.attachEvent)a.attachEvent(M(d.toString()),R);else if(a.addListener&&a.removeListener)a.addListener(R);else throw Error("addEventListener and attachEvent are unavailable.");return y}function ge(){function a(y){return d.call(a.src,a.listener,y)}const d=z;return a}function Vt(a,d,y,R,k){if(Array.isArray(d))for(var X=0;X<d.length;X++)Vt(a,d[X],y,R,k);else R=u(R)?!!R.capture:!!R,y=Z(y),a&&a[_t]?(a=a.i,d=String(d).toString(),d in a.g&&(X=a.g[d],y=U(X,y,R,k),-1<y&&(Kt(X[y]),Array.prototype.splice.call(X,y,1),X.length==0&&(delete a.g[d],a.h--)))):a&&(a=J(a))&&(d=a.g[d.toString()],a=-1,d&&(a=U(d,y,R,k)),(y=-1<a?d[a]:null)&&D(y))}function D(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[_t])Jt(d.i,a);else{var y=a.type,R=a.proxy;d.removeEventListener?d.removeEventListener(y,R,a.capture):d.detachEvent?d.detachEvent(M(y),R):d.addListener&&d.removeListener&&d.removeListener(R),(y=J(d))?(Jt(y,a),y.h==0&&(y.src=null,d[Ge]=null)):Kt(a)}}}function M(a){return a in Yt?Yt[a]:Yt[a]="on"+a}function z(a,d){if(a.da)a=!0;else{d=new ot(d,this);var y=a.listener,R=a.ha||a.src;a.fa&&D(a),a=y.call(R,d)}return a}function J(a){return a=a[Ge],a instanceof re?a:null}var rt="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(a){return typeof a=="function"?a:(a[rt]||(a[rt]=function(d){return a.handleEvent(d)}),a[rt])}function dt(){Xt.call(this),this.i=new re(this),this.M=this,this.F=null}S(dt,Xt),dt.prototype[_t]=!0,dt.prototype.removeEventListener=function(a,d,y,R){Vt(this,a,d,y,R)};function at(a,d){var y,R=a.F;if(R)for(y=[];R;R=R.F)y.push(R);if(a=a.M,R=d.type||d,typeof d=="string")d=new Bt(d,a);else if(d instanceof Bt)d.target=d.target||a;else{var k=d;d=new Bt(R,a),m(d,k)}if(k=!0,y)for(var X=y.length-1;0<=X;X--){var ut=d.g=y[X];k=vt(ut,R,!0,d)&&k}if(ut=d.g=a,k=vt(ut,R,!0,d)&&k,k=vt(ut,R,!1,d)&&k,y)for(X=0;X<y.length;X++)ut=d.g=y[X],k=vt(ut,R,!1,d)&&k}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var y=a.g[d],R=0;R<y.length;R++)Kt(y[R]);delete a.g[d],a.h--}}this.F=null},dt.prototype.K=function(a,d,y,R){return this.i.add(String(a),d,!1,y,R)},dt.prototype.L=function(a,d,y,R){return this.i.add(String(a),d,!0,y,R)};function vt(a,d,y,R){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var k=!0,X=0;X<d.length;++X){var ut=d[X];if(ut&&!ut.da&&ut.capture==y){var ve=ut.listener,We=ut.ha||ut.src;ut.fa&&Jt(a.i,ut),k=ve.call(We,R)!==!1&&k}}return k&&!R.defaultPrevented}function ee(a,d,y){if(typeof a=="function")y&&(a=p(a,y));else if(a&&typeof a.handleEvent=="function")a=p(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(a,d||0)}function lt(a){a.g=ee(()=>{a.g=null,a.i&&(a.i=!1,lt(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class Tt extends Xt{constructor(d,y){super(),this.m=d,this.l=y,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:lt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Dt(a){Xt.call(this),this.h=a,this.g={}}S(Dt,Xt);var Ft=[];function xt(a){F(a.g,function(d,y){this.g.hasOwnProperty(y)&&D(d)},a),a.g={}}Dt.prototype.N=function(){Dt.aa.N.call(this),xt(this)},Dt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qt=l.JSON.stringify,Ht=l.JSON.parse,me=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function O(){}O.prototype.h=null;function gt(a){return a.h||(a.h=a.i())}function j(){}var tt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ft(){Bt.call(this,"d")}S(ft,Bt);function pt(){Bt.call(this,"c")}S(pt,Bt);var qt={},Te=null;function Ue(){return Te=Te||new dt}qt.La="serverreachability";function ne(a){Bt.call(this,qt.La,a)}S(ne,Bt);function De(a){const d=Ue();at(d,new ne(d))}qt.STAT_EVENT="statevent";function yn(a,d){Bt.call(this,qt.STAT_EVENT,a),this.stat=d}S(yn,Bt);function ke(a){const d=Ue();at(d,new yn(d,a))}qt.Ma="timingevent";function os(a,d){Bt.call(this,qt.Ma,a),this.size=d}S(os,Bt);function pn(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},d)}function jn(){this.g=!0}jn.prototype.xa=function(){this.g=!1};function so(a,d,y,R,k,X){a.info(function(){if(a.g)if(X)for(var ut="",ve=X.split("&"),We=0;We<ve.length;We++){var ue=ve[We].split("=");if(1<ue.length){var Ye=ue[0];ue=ue[1];var Qe=Ye.split("_");ut=2<=Qe.length&&Qe[1]=="type"?ut+(Ye+"="+ue+"&"):ut+(Ye+"=redacted&")}}else ut=null;else ut=X;return"XMLHTTP REQ ("+R+") [attempt "+k+"]: "+d+`
`+y+`
`+ut})}function oo(a,d,y,R,k,X,ut){a.info(function(){return"XMLHTTP RESP ("+R+") [ attempt "+k+"]: "+d+`
`+y+`
`+X+" "+ut})}function Tn(a,d,y,R){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+lr(a,y)+(R?" "+R:"")})}function ao(a,d){a.info(function(){return"TIMEOUT: "+d})}jn.prototype.info=function(){};function lr(a,d){if(!a.g)return d;if(!d)return null;try{var y=JSON.parse(d);if(y){for(a=0;a<y.length;a++)if(Array.isArray(y[a])){var R=y[a];if(!(2>R.length)){var k=R[1];if(Array.isArray(k)&&!(1>k.length)){var X=k[0];if(X!="noop"&&X!="stop"&&X!="close")for(var ut=1;ut<k.length;ut++)k[ut]=""}}}}return Qt(y)}catch{return d}}var Fi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},as={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ls;function cr(){}S(cr,O),cr.prototype.g=function(){return new XMLHttpRequest},cr.prototype.i=function(){return{}},ls=new cr;function Nn(a,d,y,R){this.j=a,this.i=d,this.l=y,this.R=R||1,this.U=new Dt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new b}function b(){this.i=null,this.g="",this.h=!1}var V={},H={};function G(a,d,y){a.L=1,a.v=lo(Ae(d)),a.m=y,a.P=!0,B(a,null)}function B(a,d){a.F=Date.now(),St(a),a.A=Ae(a.v);var y=a.A,R=a.R;Array.isArray(R)||(R=[String(R)]),Fu(y.i,"t",R),a.C=0,y=a.j.J,a.h=new b,a.g=th(a.j,y?d:null,!a.m),0<a.O&&(a.M=new Tt(p(a.Y,a,a.g),a.O)),d=a.U,y=a.g,R=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(Ft[0]=k.toString()),k=Ft);for(var X=0;X<k.length;X++){var ut=te(y,k[X],R||d.handleEvent,!1,d.h||d);if(!ut)break;d.g[ut.key]=ut}d=a.H?T(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),De(),so(a.i,a.u,a.A,a.l,a.R,a.m)}Nn.prototype.ca=function(a){a=a.target;const d=this.M;d&&$n(a)==3?d.j():this.Y(a)},Nn.prototype.Y=function(a){try{if(a==this.g)t:{const Qe=$n(this.g);var d=this.g.Ba();const pr=this.g.Z();if(!(3>Qe)&&(Qe!=3||this.g&&(this.h.h||this.g.oa()||Gu(this.g)))){this.J||Qe!=4||d==7||(d==8||0>=pr?De(3):De(2)),Lt(this);var y=this.g.Z();this.X=y;e:if(ct(this)){var R=Gu(this.g);a="";var k=R.length,X=$n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mt(this),Pt(this);var ut="";break e}this.h.i=new l.TextDecoder}for(d=0;d<k;d++)this.h.h=!0,a+=this.h.i.decode(R[d],{stream:!(X&&d==k-1)});R.length=0,this.h.g+=a,this.C=0,ut=this.h.g}else ut=this.g.oa();if(this.o=y==200,oo(this.i,this.u,this.A,this.l,this.R,Qe,y),this.o){if(this.T&&!this.K){e:{if(this.g){var ve,We=this.g;if((ve=We.g?We.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(ve)){var ue=ve;break e}}ue=null}if(y=ue)Tn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,se(this,y);else{this.o=!1,this.s=3,ke(12),Mt(this),Pt(this);break t}}if(this.P){y=!0;let An;for(;!this.J&&this.C<ut.length;)if(An=mt(this,ut),An==H){Qe==4&&(this.s=4,ke(14),y=!1),Tn(this.i,this.l,null,"[Incomplete Response]");break}else if(An==V){this.s=4,ke(15),Tn(this.i,this.l,ut,"[Invalid Chunk]"),y=!1;break}else Tn(this.i,this.l,An,null),se(this,An);if(ct(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Qe!=4||ut.length!=0||this.h.h||(this.s=1,ke(16),y=!1),this.o=this.o&&y,!y)Tn(this.i,this.l,ut,"[Invalid Chunked Response]"),Mt(this),Pt(this);else if(0<ut.length&&!this.W){this.W=!0;var Ye=this.j;Ye.g==this&&Ye.ba&&!Ye.M&&(Ye.j.info("Great, no buffering proxy detected. Bytes received: "+ut.length),Wa(Ye),Ye.M=!0,ke(11))}}else Tn(this.i,this.l,ut,null),se(this,ut);Qe==4&&Mt(this),this.o&&!this.J&&(Qe==4?Yu(this.j,this):(this.o=!1,St(this)))}else Nm(this.g),y==400&&0<ut.indexOf("Unknown SID")?(this.s=3,ke(12)):(this.s=0,ke(13)),Mt(this),Pt(this)}}}catch{}finally{}};function ct(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function mt(a,d){var y=a.C,R=d.indexOf(`
`,y);return R==-1?H:(y=Number(d.substring(y,R)),isNaN(y)?V:(R+=1,R+y>d.length?H:(d=d.slice(R,R+y),a.C=R+y,d)))}Nn.prototype.cancel=function(){this.J=!0,Mt(this)};function St(a){a.S=Date.now()+a.I,wt(a,a.I)}function wt(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=pn(p(a.ba,a),d)}function Lt(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Nn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(ao(this.i,this.A),this.L!=2&&(De(),ke(17)),Mt(this),this.s=2,Pt(this)):wt(this,this.S-a)};function Pt(a){a.j.G==0||a.J||Yu(a.j,a)}function Mt(a){Lt(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,xt(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function se(a,d){try{var y=a.j;if(y.G!=0&&(y.g==a||Ct(y.h,a))){if(!a.K&&Ct(y.h,a)&&y.G==3){try{var R=y.Da.g.parse(d)}catch{R=null}if(Array.isArray(R)&&R.length==3){var k=R;if(k[0]==0){t:if(!y.u){if(y.g)if(y.g.F+3e3<a.F)mo(y),fo(y);else break t;Ga(y),ke(18)}}else y.za=k[1],0<y.za-y.T&&37500>k[2]&&y.F&&y.v==0&&!y.C&&(y.C=pn(p(y.Za,y),6e3));if(1>=oe(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Oi(y,11)}else if((a.K||y.g==a)&&mo(y),!L(d))for(k=y.Da.g.parse(d),d=0;d<k.length;d++){let ue=k[d];if(y.T=ue[0],ue=ue[1],y.G==2)if(ue[0]=="c"){y.K=ue[1],y.ia=ue[2];const Ye=ue[3];Ye!=null&&(y.la=Ye,y.j.info("VER="+y.la));const Qe=ue[4];Qe!=null&&(y.Aa=Qe,y.j.info("SVER="+y.Aa));const pr=ue[5];pr!=null&&typeof pr=="number"&&0<pr&&(R=1.5*pr,y.L=R,y.j.info("backChannelRequestTimeoutMs_="+R)),R=y;const An=a.g;if(An){const _o=An.g?An.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_o){var X=R.h;X.g||_o.indexOf("spdy")==-1&&_o.indexOf("quic")==-1&&_o.indexOf("h2")==-1||(X.j=X.l,X.g=new Set,X.h&&(Ie(X,X.h),X.h=null))}if(R.D){const qa=An.g?An.g.getResponseHeader("X-HTTP-Session-Id"):null;qa&&(R.ya=qa,Ee(R.I,R.D,qa))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-a.F,y.j.info("Handshake RTT: "+y.R+"ms")),R=y;var ut=a;if(R.qa=Zu(R,R.J?R.ia:null,R.W),ut.K){ae(R.h,ut);var ve=ut,We=R.L;We&&(ve.I=We),ve.B&&(Lt(ve),St(ve)),R.g=ut}else $u(R);0<y.i.length&&po(y)}else ue[0]!="stop"&&ue[0]!="close"||Oi(y,7);else y.G==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?Oi(y,7):Ha(y):ue[0]!="noop"&&y.l&&y.l.ta(ue),y.v=0)}}De(4)}catch{}}var _e=class{constructor(a,d){this.g=a,this.map=d}};function ye(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ke(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function oe(a){return a.h?1:a.g?a.g.size:0}function Ct(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function Ie(a,d){a.g?a.g.add(d):a.h=d}function ae(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}ye.prototype.cancel=function(){if(this.i=an(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function an(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const y of a.g.values())d=d.concat(y.D);return d}return w(a.i)}function ui(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var d=[],y=a.length,R=0;R<y;R++)d.push(a[R]);return d}d=[],y=0;for(R in a)d[y++]=a[R];return d}function sn(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var d=[];a=a.length;for(var y=0;y<a;y++)d.push(y);return d}d=[],y=0;for(const R in a)d[y++]=R;return d}}}function ur(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var y=sn(a),R=ui(a),k=R.length,X=0;X<k;X++)d.call(void 0,R[X],y&&y[X],a)}var Se=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Un(a,d){if(a){a=a.split("&");for(var y=0;y<a.length;y++){var R=a[y].indexOf("="),k=null;if(0<=R){var X=a[y].substring(0,R);k=a[y].substring(R+1)}else X=a[y];d(X,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Mn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Mn){this.h=a.h,hi(this,a.j),this.o=a.o,this.g=a.g,hr(this,a.s),this.l=a.l;var d=a.i,y=new ds;y.i=d.i,d.g&&(y.g=new Map(d.g),y.h=d.h),cs(this,y),this.m=a.m}else a&&(d=String(a).match(Se))?(this.h=!1,hi(this,d[1]||"",!0),this.o=us(d[2]||""),this.g=us(d[3]||"",!0),hr(this,d[4]),this.l=us(d[5]||"",!0),cs(this,d[6]||"",!0),this.m=us(d[7]||"")):(this.h=!1,this.i=new ds(null,this.h))}Mn.prototype.toString=function(){var a=[],d=this.j;d&&a.push(hs(d,Lu,!0),":");var y=this.g;return(y||d=="file")&&(a.push("//"),(d=this.o)&&a.push(hs(d,Lu,!0),"@"),a.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&a.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&a.push("/"),a.push(hs(y,y.charAt(0)=="/"?Mm:Tm,!0))),(y=this.i.toString())&&a.push("?",y),(y=this.m)&&a.push("#",hs(y,wm)),a.join("")};function Ae(a){return new Mn(a)}function hi(a,d,y){a.j=y?us(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function hr(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function cs(a,d,y){d instanceof ds?(a.i=d,bm(a.i,a.h)):(y||(d=hs(d,Am)),a.i=new ds(d,a.h))}function Ee(a,d,y){a.i.set(d,y)}function lo(a){return Ee(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function us(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function hs(a,d,y){return typeof a=="string"?(a=encodeURI(a).replace(d,Sm),y&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Sm(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Lu=/[#\/\?@]/g,Tm=/[#\?:]/g,Mm=/[#\?]/g,Am=/[#\?@]/g,wm=/#/g;function ds(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function di(a){a.g||(a.g=new Map,a.h=0,a.i&&Un(a.i,function(d,y){a.add(decodeURIComponent(d.replace(/\+/g," ")),y)}))}i=ds.prototype,i.add=function(a,d){di(this),this.i=null,a=dr(this,a);var y=this.g.get(a);return y||this.g.set(a,y=[]),y.push(d),this.h+=1,this};function Nu(a,d){di(a),d=dr(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function Uu(a,d){return di(a),d=dr(a,d),a.g.has(d)}i.forEach=function(a,d){di(this),this.g.forEach(function(y,R){y.forEach(function(k){a.call(d,k,R,this)},this)},this)},i.na=function(){di(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),y=[];for(let R=0;R<d.length;R++){const k=a[R];for(let X=0;X<k.length;X++)y.push(d[R])}return y},i.V=function(a){di(this);let d=[];if(typeof a=="string")Uu(this,a)&&(d=d.concat(this.g.get(dr(this,a))));else{a=Array.from(this.g.values());for(let y=0;y<a.length;y++)d=d.concat(a[y])}return d},i.set=function(a,d){return di(this),this.i=null,a=dr(this,a),Uu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},i.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function Fu(a,d,y){Nu(a,d),0<y.length&&(a.i=null,a.g.set(dr(a,d),w(y)),a.h+=y.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var y=0;y<d.length;y++){var R=d[y];const X=encodeURIComponent(String(R)),ut=this.V(R);for(R=0;R<ut.length;R++){var k=X;ut[R]!==""&&(k+="="+encodeURIComponent(String(ut[R]))),a.push(k)}}return this.i=a.join("&")};function dr(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function bm(a,d){d&&!a.j&&(di(a),a.i=null,a.g.forEach(function(y,R){var k=R.toLowerCase();R!=k&&(Nu(this,R),Fu(this,k,y))},a)),a.j=d}function Rm(a,d){const y=new jn;if(l.Image){const R=new Image;R.onload=v(fi,y,"TestLoadImage: loaded",!0,d,R),R.onerror=v(fi,y,"TestLoadImage: error",!1,d,R),R.onabort=v(fi,y,"TestLoadImage: abort",!1,d,R),R.ontimeout=v(fi,y,"TestLoadImage: timeout",!1,d,R),l.setTimeout(function(){R.ontimeout&&R.ontimeout()},1e4),R.src=a}else d(!1)}function Cm(a,d){const y=new jn,R=new AbortController,k=setTimeout(()=>{R.abort(),fi(y,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:R.signal}).then(X=>{clearTimeout(k),X.ok?fi(y,"TestPingServer: ok",!0,d):fi(y,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(k),fi(y,"TestPingServer: error",!1,d)})}function fi(a,d,y,R,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),R(y)}catch{}}function Im(){this.g=new me}function Pm(a,d,y){const R=y||"";try{ur(a,function(k,X){let ut=k;u(k)&&(ut=Qt(k)),d.push(R+X+"="+encodeURIComponent(ut))})}catch(k){throw d.push(R+"type="+encodeURIComponent("_badmap")),k}}function co(a){this.l=a.Ub||null,this.j=a.eb||!1}S(co,O),co.prototype.g=function(){return new uo(this.l,this.j)},co.prototype.i=function(a){return function(){return a}}({});function uo(a,d){dt.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(uo,dt),i=uo.prototype,i.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,ps(this)},i.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fs(this)),this.readyState=0},i.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ps(this)),this.g&&(this.readyState=3,ps(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ou(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ou(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}i.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?fs(this):ps(this),this.readyState==3&&Ou(this)}},i.Ra=function(a){this.g&&(this.response=this.responseText=a,fs(this))},i.Qa=function(a){this.g&&(this.response=a,fs(this))},i.ga=function(){this.g&&fs(this)};function fs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ps(a)}i.setRequestHeader=function(a,d){this.u.append(a,d)},i.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var y=d.next();!y.done;)y=y.value,a.push(y[0]+": "+y[1]),y=d.next();return a.join(`\r
`)};function ps(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(uo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Vu(a){let d="";return F(a,function(y,R){d+=R,d+=":",d+=y,d+=`\r
`}),d}function za(a,d,y){t:{for(R in y){var R=!1;break t}R=!0}R||(y=Vu(y),typeof a=="string"?y!=null&&encodeURIComponent(String(y)):Ee(a,d,y))}function we(a){dt.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(we,dt);var Dm=/^https?$/i,Lm=["POST","PUT"];i=we.prototype,i.Ha=function(a){this.J=a},i.ea=function(a,d,y,R){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ls.g(),this.v=this.o?gt(this.o):gt(ls),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(X){Bu(this,X);return}if(a=y||"",y=new Map(this.headers),R)if(Object.getPrototypeOf(R)===Object.prototype)for(var k in R)y.set(k,R[k]);else if(typeof R.keys=="function"&&typeof R.get=="function")for(const X of R.keys())y.set(X,R.get(X));else throw Error("Unknown input type for opt_headers: "+String(R));R=Array.from(y.keys()).find(X=>X.toLowerCase()=="content-type"),k=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Lm,d,void 0))||R||k||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[X,ut]of y)this.g.setRequestHeader(X,ut);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hu(this),this.u=!0,this.g.send(a),this.u=!1}catch(X){Bu(this,X)}};function Bu(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,ku(a),ho(a)}function ku(a){a.A||(a.A=!0,at(a,"complete"),at(a,"error"))}i.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,at(this,"complete"),at(this,"abort"),ho(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ho(this,!0)),we.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?zu(this):this.bb())},i.bb=function(){zu(this)};function zu(a){if(a.h&&typeof o<"u"&&(!a.v[1]||$n(a)!=4||a.Z()!=2)){if(a.u&&$n(a)==4)ee(a.Ea,0,a);else if(at(a,"readystatechange"),$n(a)==4){a.h=!1;try{const ut=a.Z();t:switch(ut){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break t;default:d=!1}var y;if(!(y=d)){var R;if(R=ut===0){var k=String(a.D).match(Se)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),R=!Dm.test(k?k.toLowerCase():"")}y=R}if(y)at(a,"complete"),at(a,"success");else{a.m=6;try{var X=2<$n(a)?a.g.statusText:""}catch{X=""}a.l=X+" ["+a.Z()+"]",ku(a)}}finally{ho(a)}}}}function ho(a,d){if(a.g){Hu(a);const y=a.g,R=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||at(a,"ready");try{y.onreadystatechange=R}catch{}}}function Hu(a){a.I&&(l.clearTimeout(a.I),a.I=null)}i.isActive=function(){return!!this.g};function $n(a){return a.g?a.g.readyState:0}i.Z=function(){try{return 2<$n(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),Ht(d)}};function Gu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Nm(a){const d={};a=(a.g&&2<=$n(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let R=0;R<a.length;R++){if(L(a[R]))continue;var y=E(a[R]);const k=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const X=d[k]||[];d[k]=X,X.push(y)}x(d,function(R){return R.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ms(a,d,y){return y&&y.internalChannelParams&&y.internalChannelParams[a]||d}function Wu(a){this.Aa=0,this.i=[],this.j=new jn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ms("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ms("baseRetryDelayMs",5e3,a),this.cb=ms("retryDelaySeedMs",1e4,a),this.Wa=ms("forwardChannelMaxRetries",2,a),this.wa=ms("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new ye(a&&a.concurrentRequestLimit),this.Da=new Im,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Wu.prototype,i.la=8,i.G=1,i.connect=function(a,d,y,R){ke(0),this.W=a,this.H=d||{},y&&R!==void 0&&(this.H.OSID=y,this.H.OAID=R),this.F=this.X,this.I=Zu(this,null,this.W),po(this)};function Ha(a){if(qu(a),a.G==3){var d=a.U++,y=Ae(a.I);if(Ee(y,"SID",a.K),Ee(y,"RID",d),Ee(y,"TYPE","terminate"),gs(a,y),d=new Nn(a,a.j,d),d.L=2,d.v=lo(Ae(y)),y=!1,l.navigator&&l.navigator.sendBeacon)try{y=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!y&&l.Image&&(new Image().src=d.v,y=!0),y||(d.g=th(d.j,null),d.g.ea(d.v)),d.F=Date.now(),St(d)}Ju(a)}function fo(a){a.g&&(Wa(a),a.g.cancel(),a.g=null)}function qu(a){fo(a),a.u&&(l.clearTimeout(a.u),a.u=null),mo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function po(a){if(!Ke(a.h)&&!a.s){a.s=!0;var d=a.Ga;et||Et(),$||(et(),$=!0),yt.add(d,a),a.B=0}}function Um(a,d){return oe(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=pn(p(a.Ga,a,d),Qu(a,a.B)),a.B++,!0)}i.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new Nn(this,this.j,a);let X=this.o;if(this.S&&(X?(X=T(X),m(X,this.S)):X=this.S),this.m!==null||this.O||(k.H=X,X=null),this.P)t:{for(var d=0,y=0;y<this.i.length;y++){e:{var R=this.i[y];if("__data__"in R.map&&(R=R.map.__data__,typeof R=="string")){R=R.length;break e}R=void 0}if(R===void 0)break;if(d+=R,4096<d){d=y;break t}if(d===4096||y===this.i.length-1){d=y+1;break t}}d=1e3}else d=1e3;d=ju(this,k,d),y=Ae(this.I),Ee(y,"RID",a),Ee(y,"CVER",22),this.D&&Ee(y,"X-HTTP-Session-Id",this.D),gs(this,y),X&&(this.O?d="headers="+encodeURIComponent(String(Vu(X)))+"&"+d:this.m&&za(y,this.m,X)),Ie(this.h,k),this.Ua&&Ee(y,"TYPE","init"),this.P?(Ee(y,"$req",d),Ee(y,"SID","null"),k.T=!0,G(k,y,null)):G(k,y,d),this.G=2}}else this.G==3&&(a?Xu(this,a):this.i.length==0||Ke(this.h)||Xu(this))};function Xu(a,d){var y;d?y=d.l:y=a.U++;const R=Ae(a.I);Ee(R,"SID",a.K),Ee(R,"RID",y),Ee(R,"AID",a.T),gs(a,R),a.m&&a.o&&za(R,a.m,a.o),y=new Nn(a,a.j,y,a.B+1),a.m===null&&(y.H=a.o),d&&(a.i=d.D.concat(a.i)),d=ju(a,y,1e3),y.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ie(a.h,y),G(y,R,d)}function gs(a,d){a.H&&F(a.H,function(y,R){Ee(d,R,y)}),a.l&&ur({},function(y,R){Ee(d,R,y)})}function ju(a,d,y){y=Math.min(a.i.length,y);var R=a.l?p(a.l.Na,a.l,a):null;t:{var k=a.i;let X=-1;for(;;){const ut=["count="+y];X==-1?0<y?(X=k[0].g,ut.push("ofs="+X)):X=0:ut.push("ofs="+X);let ve=!0;for(let We=0;We<y;We++){let ue=k[We].g;const Ye=k[We].map;if(ue-=X,0>ue)X=Math.max(0,k[We].g-100),ve=!1;else try{Pm(Ye,ut,"req"+ue+"_")}catch{R&&R(Ye)}}if(ve){R=ut.join("&");break t}}}return a=a.i.splice(0,y),d.D=a,R}function $u(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;et||Et(),$||(et(),$=!0),yt.add(d,a),a.v=0}}function Ga(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=pn(p(a.Fa,a),Qu(a,a.v)),a.v++,!0)}i.Fa=function(){if(this.u=null,Ku(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=pn(p(this.ab,this),a)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ke(10),fo(this),Ku(this))};function Wa(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Ku(a){a.g=new Nn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Ae(a.qa);Ee(d,"RID","rpc"),Ee(d,"SID",a.K),Ee(d,"AID",a.T),Ee(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ee(d,"TO",a.ja),Ee(d,"TYPE","xmlhttp"),gs(a,d),a.m&&a.o&&za(d,a.m,a.o),a.L&&(a.g.I=a.L);var y=a.g;a=a.ia,y.L=1,y.v=lo(Ae(d)),y.m=null,y.P=!0,B(y,a)}i.Za=function(){this.C!=null&&(this.C=null,fo(this),Ga(this),ke(19))};function mo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Yu(a,d){var y=null;if(a.g==d){mo(a),Wa(a),a.g=null;var R=2}else if(Ct(a.h,d))y=d.D,ae(a.h,d),R=1;else return;if(a.G!=0){if(d.o)if(R==1){y=d.m?d.m.length:0,d=Date.now()-d.F;var k=a.B;R=Ue(),at(R,new os(R,y)),po(a)}else $u(a);else if(k=d.s,k==3||k==0&&0<d.X||!(R==1&&Um(a,d)||R==2&&Ga(a)))switch(y&&0<y.length&&(d=a.h,d.i=d.i.concat(y)),k){case 1:Oi(a,5);break;case 4:Oi(a,10);break;case 3:Oi(a,6);break;default:Oi(a,2)}}}function Qu(a,d){let y=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(y*=2),y*d}function Oi(a,d){if(a.j.info("Error code "+d),d==2){var y=p(a.fb,a),R=a.Xa;const k=!R;R=new Mn(R||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||hi(R,"https"),lo(R),k?Rm(R.toString(),y):Cm(R.toString(),y)}else ke(2);a.G=0,a.l&&a.l.sa(d),Ju(a),qu(a)}i.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ke(2)):(this.j.info("Failed to ping google.com"),ke(1))};function Ju(a){if(a.G=0,a.ka=[],a.l){const d=an(a.h);(d.length!=0||a.i.length!=0)&&(g(a.ka,d),g(a.ka,a.i),a.h.i.length=0,w(a.i),a.i.length=0),a.l.ra()}}function Zu(a,d,y){var R=y instanceof Mn?Ae(y):new Mn(y);if(R.g!="")d&&(R.g=d+"."+R.g),hr(R,R.s);else{var k=l.location;R=k.protocol,d=d?d+"."+k.hostname:k.hostname,k=+k.port;var X=new Mn(null);R&&hi(X,R),d&&(X.g=d),k&&hr(X,k),y&&(X.l=y),R=X}return y=a.D,d=a.ya,y&&d&&Ee(R,y,d),Ee(R,"VER",a.la),gs(a,R),R}function th(a,d,y){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new we(new co({eb:y})):new we(a.pa),d.Ha(a.J),d}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function eh(){}i=eh.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function go(){}go.prototype.g=function(a,d){return new mn(a,d)};function mn(a,d){dt.call(this),this.g=new Wu(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!L(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!L(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new fr(this)}S(mn,dt),mn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},mn.prototype.close=function(){Ha(this.g)},mn.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var y={};y.__data__=a,a=y}else this.u&&(y={},y.__data__=Qt(a),a=y);d.i.push(new _e(d.Ya++,a)),d.G==3&&po(d)},mn.prototype.N=function(){this.g.l=null,delete this.j,Ha(this.g),delete this.g,mn.aa.N.call(this)};function nh(a){ft.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){t:{for(const y in d){a=y;break t}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}S(nh,ft);function ih(){pt.call(this),this.status=1}S(ih,pt);function fr(a){this.g=a}S(fr,eh),fr.prototype.ua=function(){at(this.g,"a")},fr.prototype.ta=function(a){at(this.g,new nh(a))},fr.prototype.sa=function(a){at(this.g,new ih)},fr.prototype.ra=function(){at(this.g,"b")},go.prototype.createWebChannel=go.prototype.g,mn.prototype.send=mn.prototype.o,mn.prototype.open=mn.prototype.m,mn.prototype.close=mn.prototype.close,Qf=function(){return new go},Yf=function(){return Ue()},Kf=qt,Ac={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Fi.NO_ERROR=0,Fi.TIMEOUT=8,Fi.HTTP_ERROR=6,Qo=Fi,as.COMPLETE="complete",$f=as,j.EventType=tt,tt.OPEN="a",tt.CLOSE="b",tt.ERROR="c",tt.MESSAGE="d",dt.prototype.listen=dt.prototype.K,As=j,we.prototype.listenOnce=we.prototype.L,we.prototype.getLastError=we.prototype.Ka,we.prototype.getLastErrorCode=we.prototype.Ba,we.prototype.getStatus=we.prototype.Z,we.prototype.getResponseJson=we.prototype.Oa,we.prototype.getResponseText=we.prototype.oa,we.prototype.send=we.prototype.ea,we.prototype.setWithCredentials=we.prototype.Ha,jf=we}).apply(typeof ko<"u"?ko:typeof self<"u"?self:typeof window<"u"?window:{});const dd="@firebase/firestore";/**
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
 */class en{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}en.UNAUTHENTICATED=new en(null),en.GOOGLE_CREDENTIALS=new en("google-credentials-uid"),en.FIRST_PARTY=new en("first-party-uid"),en.MOCK_USER=new en("mock-user");/**
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
 */let is="10.14.0";/**
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
 */const nr=new kf("@firebase/firestore");function Ts(){return nr.logLevel}function bt(i,...t){if(nr.logLevel<=le.DEBUG){const e=t.map(eu);nr.debug(`Firestore (${is}): ${i}`,...e)}}function ai(i,...t){if(nr.logLevel<=le.ERROR){const e=t.map(eu);nr.error(`Firestore (${is}): ${i}`,...e)}}function qr(i,...t){if(nr.logLevel<=le.WARN){const e=t.map(eu);nr.warn(`Firestore (${is}): ${i}`,...e)}}function eu(i){if(typeof i=="string")return i;try{/**
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
 */function kt(i="Unexpected state"){const t=`FIRESTORE (${is}) INTERNAL ASSERTION FAILED: `+i;throw ai(t),new Error(t)}function pe(i,t){i||kt()}function Wt(i,t){return i}/**
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
 */const st={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class It extends ns{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class wi{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class Jf{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class vS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(en.UNAUTHENTICATED))}shutdown(){}}class yS{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class ES{constructor(t){this.t=t,this.currentUser=en.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){pe(this.o===void 0);let n=this.i;const r=c=>this.i!==n?(n=this.i,e(c)):Promise.resolve();let s=new wi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new wi,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=s;t.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},l=c=>{bt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(bt("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new wi)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(bt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(pe(typeof n.accessToken=="string"),new Jf(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return pe(t===null||typeof t=="string"),new en(t)}}class xS{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=en.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class SS{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new xS(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(en.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class TS{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class MS{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){pe(this.o===void 0);const n=s=>{s.error!=null&&bt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,bt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>n(s))};const r=s=>{bt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?r(s):bt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(pe(typeof e.token=="string"),this.R=e.token,new TS(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function AS(i){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(i);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<i;n++)e[n]=Math.floor(256*Math.random());return e}/**
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
 */class Zf{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=AS(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<e&&(n+=t.charAt(r[s]%t.length))}return n}}function he(i,t){return i<t?-1:i>t?1:0}function Xr(i,t,e){return i.length===t.length&&i.every((n,r)=>e(n,t[r]))}/**
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
 */class Oe{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new It(st.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new It(st.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new It(st.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new It(st.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Oe.fromMillis(Date.now())}static fromDate(t){return Oe.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Oe(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?he(this.nanoseconds,t.nanoseconds):he(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Gt{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Gt(t)}static min(){return new Gt(new Oe(0,0))}static max(){return new Gt(new Oe(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Fs{constructor(t,e,n){e===void 0?e=0:e>t.length&&kt(),n===void 0?n=t.length-e:n>t.length-e&&kt(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Fs.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Fs?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.get(r),o=e.get(r);if(s<o)return-1;if(s>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class be extends Fs{construct(t,e,n){return new be(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new It(st.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(r=>r.length>0))}return new be(e)}static emptyPath(){return new be([])}}const wS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends Fs{construct(t,e,n){return new Xe(t,e,n)}static isValidIdentifier(t){return wS.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Xe(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const s=()=>{if(n.length===0)throw new It(st.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let o=!1;for(;r<t.length;){const l=t[r];if(l==="\\"){if(r+1===t.length)throw new It(st.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new It(st.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=c,r+=2}else l==="`"?(o=!o,r++):l!=="."||o?(n+=l,r++):(s(),r++)}if(s(),o)throw new It(st.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Xe(e)}static emptyPath(){return new Xe([])}}/**
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
 */class Nt{constructor(t){this.path=t}static fromPath(t){return new Nt(be.fromString(t))}static fromName(t){return new Nt(be.fromString(t).popFirst(5))}static empty(){return new Nt(be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&be.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return be.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Nt(new be(t.slice()))}}function bS(i,t){const e=i.toTimestamp().seconds,n=i.toTimestamp().nanoseconds+1,r=Gt.fromTimestamp(n===1e9?new Oe(e+1,0):new Oe(e,n));return new Ii(r,Nt.empty(),t)}function RS(i){return new Ii(i.readTime,i.key,-1)}class Ii{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Ii(Gt.min(),Nt.empty(),-1)}static max(){return new Ii(Gt.max(),Nt.empty(),-1)}}function CS(i,t){let e=i.readTime.compareTo(t.readTime);return e!==0?e:(e=Nt.comparator(i.documentKey,t.documentKey),e!==0?e:he(i.largestBatchId,t.largestBatchId))}/**
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
 */const IS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class PS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Qs(i){if(i.code!==st.FAILED_PRECONDITION||i.message!==IS)throw i;bt("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class it{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&kt(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new it((n,r)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(n,r)},this.catchCallback=s=>{this.wrapFailure(e,s).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof it?e:it.resolve(e)}catch(e){return it.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):it.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):it.reject(e)}static resolve(t){return new it((e,n)=>{e(t)})}static reject(t){return new it((e,n)=>{n(t)})}static waitFor(t){return new it((e,n)=>{let r=0,s=0,o=!1;t.forEach(l=>{++r,l.next(()=>{++s,o&&s===r&&e()},c=>n(c))}),o=!0,s===r&&e()})}static or(t){let e=it.resolve(!1);for(const n of t)e=e.next(r=>r?it.resolve(r):n());return e}static forEach(t,e){const n=[];return t.forEach((r,s)=>{n.push(e.call(this,r,s))}),this.waitFor(n)}static mapArray(t,e){return new it((n,r)=>{const s=t.length,o=new Array(s);let l=0;for(let c=0;c<s;c++){const u=c;e(t[u]).next(h=>{o[u]=h,++l,l===s&&n(o)},h=>r(h))}})}static doWhile(t,e){return new it((n,r)=>{const s=()=>{t()===!0?e().next(()=>{s()},r):n()};s()})}}function DS(i){const t=i.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Js(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class nu{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ie(n),this.se=n=>e.writeSequenceNumber(n))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}nu.oe=-1;function wa(i){return i==null}function ua(i){return i===0&&1/i==-1/0}function LS(i){return typeof i=="number"&&Number.isInteger(i)&&!ua(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */function fd(i){let t=0;for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&t++;return t}function or(i,t){for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&t(e,i[e])}function tp(i){for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t))return!1;return!0}/**
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
 */class Me{constructor(t,e){this.comparator=t,this.root=e||qe.EMPTY}insert(t,e){return new Me(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(t){return new Me(this.comparator,this.root.remove(t,this.comparator).copy(null,null,qe.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new zo(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new zo(this.root,t,this.comparator,!1)}getReverseIterator(){return new zo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new zo(this.root,t,this.comparator,!0)}}class zo{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class qe{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=n??qe.RED,this.left=r??qe.EMPTY,this.right=s??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new qe(t??this.key,e??this.value,n??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const s=n(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):s===0?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),e(t,r.key)===0){if(r.right.isEmpty())return qe.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw kt();const t=this.left.check();if(t!==this.right.check())throw kt();return t+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw kt()}get value(){throw kt()}get color(){throw kt()}get left(){throw kt()}get right(){throw kt()}copy(t,e,n,r,s){return this}insert(t,e,n){return new qe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class je{constructor(t){this.comparator=t,this.data=new Me(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new pd(this.data.getIterator())}getIteratorFrom(t){return new pd(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof je)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const r=e.getNext().key,s=n.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new je(this.comparator);return e.data=t,e}}class pd{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class vn{constructor(t){this.fields=t,t.sort(Xe.comparator)}static empty(){return new vn([])}unionWith(t){let e=new je(Xe.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new vn(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Xr(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
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
 */class ep extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class $e{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ep("Invalid base64 string: "+s):s}}(t);return new $e(e)}static fromUint8Array(t){const e=function(r){let s="";for(let o=0;o<r.length;++o)s+=String.fromCharCode(r[o]);return s}(t);return new $e(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return he(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}$e.EMPTY_BYTE_STRING=new $e("");const NS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pi(i){if(pe(!!i),typeof i=="string"){let t=0;const e=NS.exec(i);if(pe(!!e),e[1]){let r=e[1];r=(r+"000000000").substr(0,9),t=Number(r)}const n=new Date(i);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:Pe(i.seconds),nanos:Pe(i.nanos)}}function Pe(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function ir(i){return typeof i=="string"?$e.fromBase64String(i):$e.fromUint8Array(i)}/**
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
 */function iu(i){var t,e;return((e=(((t=i?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function ru(i){const t=i.mapValue.fields.__previous_value__;return iu(t)?ru(t):t}function Os(i){const t=Pi(i.mapValue.fields.__local_write_time__.timestampValue);return new Oe(t.seconds,t.nanos)}/**
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
 */class US{constructor(t,e,n,r,s,o,l,c,u){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class Vs{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Vs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Vs&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Ho={mapValue:{}};function rr(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?iu(i)?4:OS(i)?9007199254740991:FS(i)?10:11:kt()}function Wn(i,t){if(i===t)return!0;const e=rr(i);if(e!==rr(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===t.booleanValue;case 4:return Os(i).isEqual(Os(t));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const o=Pi(r.timestampValue),l=Pi(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(i,t);case 5:return i.stringValue===t.stringValue;case 6:return function(r,s){return ir(r.bytesValue).isEqual(ir(s.bytesValue))}(i,t);case 7:return i.referenceValue===t.referenceValue;case 8:return function(r,s){return Pe(r.geoPointValue.latitude)===Pe(s.geoPointValue.latitude)&&Pe(r.geoPointValue.longitude)===Pe(s.geoPointValue.longitude)}(i,t);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Pe(r.integerValue)===Pe(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const o=Pe(r.doubleValue),l=Pe(s.doubleValue);return o===l?ua(o)===ua(l):isNaN(o)&&isNaN(l)}return!1}(i,t);case 9:return Xr(i.arrayValue.values||[],t.arrayValue.values||[],Wn);case 10:case 11:return function(r,s){const o=r.mapValue.fields||{},l=s.mapValue.fields||{};if(fd(o)!==fd(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Wn(o[c],l[c])))return!1;return!0}(i,t);default:return kt()}}function Bs(i,t){return(i.values||[]).find(e=>Wn(e,t))!==void 0}function jr(i,t){if(i===t)return 0;const e=rr(i),n=rr(t);if(e!==n)return he(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return he(i.booleanValue,t.booleanValue);case 2:return function(s,o){const l=Pe(s.integerValue||s.doubleValue),c=Pe(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(i,t);case 3:return md(i.timestampValue,t.timestampValue);case 4:return md(Os(i),Os(t));case 5:return he(i.stringValue,t.stringValue);case 6:return function(s,o){const l=ir(s),c=ir(o);return l.compareTo(c)}(i.bytesValue,t.bytesValue);case 7:return function(s,o){const l=s.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const h=he(l[u],c[u]);if(h!==0)return h}return he(l.length,c.length)}(i.referenceValue,t.referenceValue);case 8:return function(s,o){const l=he(Pe(s.latitude),Pe(o.latitude));return l!==0?l:he(Pe(s.longitude),Pe(o.longitude))}(i.geoPointValue,t.geoPointValue);case 9:return gd(i.arrayValue,t.arrayValue);case 10:return function(s,o){var l,c,u,h;const f=s.fields||{},p=o.fields||{},v=(l=f.value)===null||l===void 0?void 0:l.arrayValue,S=(c=p.value)===null||c===void 0?void 0:c.arrayValue,w=he(((u=v?.values)===null||u===void 0?void 0:u.length)||0,((h=S?.values)===null||h===void 0?void 0:h.length)||0);return w!==0?w:gd(v,S)}(i.mapValue,t.mapValue);case 11:return function(s,o){if(s===Ho.mapValue&&o===Ho.mapValue)return 0;if(s===Ho.mapValue)return 1;if(o===Ho.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let f=0;f<c.length&&f<h.length;++f){const p=he(c[f],h[f]);if(p!==0)return p;const v=jr(l[c[f]],u[h[f]]);if(v!==0)return v}return he(c.length,h.length)}(i.mapValue,t.mapValue);default:throw kt()}}function md(i,t){if(typeof i=="string"&&typeof t=="string"&&i.length===t.length)return he(i,t);const e=Pi(i),n=Pi(t),r=he(e.seconds,n.seconds);return r!==0?r:he(e.nanos,n.nanos)}function gd(i,t){const e=i.values||[],n=t.values||[];for(let r=0;r<e.length&&r<n.length;++r){const s=jr(e[r],n[r]);if(s)return s}return he(e.length,n.length)}function $r(i){return wc(i)}function wc(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(e){const n=Pi(e);return`time(${n.seconds},${n.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(e){return ir(e).toBase64()}(i.bytesValue):"referenceValue"in i?function(e){return Nt.fromName(e).toString()}(i.referenceValue):"geoPointValue"in i?function(e){return`geo(${e.latitude},${e.longitude})`}(i.geoPointValue):"arrayValue"in i?function(e){let n="[",r=!0;for(const s of e.values||[])r?r=!1:n+=",",n+=wc(s);return n+"]"}(i.arrayValue):"mapValue"in i?function(e){const n=Object.keys(e.fields||{}).sort();let r="{",s=!0;for(const o of n)s?s=!1:r+=",",r+=`${o}:${wc(e.fields[o])}`;return r+"}"}(i.mapValue):kt()}function bc(i){return!!i&&"integerValue"in i}function su(i){return!!i&&"arrayValue"in i}function _d(i){return!!i&&"nullValue"in i}function vd(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Jo(i){return!!i&&"mapValue"in i}function FS(i){var t,e;return((e=(((t=i?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Cs(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const t={mapValue:{fields:{}}};return or(i.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Cs(n)),t}if(i.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(i.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Cs(i.arrayValue.values[e]);return t}return Object.assign({},i)}function OS(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class un{constructor(t){this.value=t}static empty(){return new un({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Jo(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Cs(e)}setAll(t){let e=Xe.emptyPath(),n={},r=[];t.forEach((o,l)=>{if(!e.isImmediateParentOf(l)){const c=this.getFieldsMap(e);this.applyChanges(c,n,r),n={},r=[],e=l.popLast()}o?n[l.lastSegment()]=Cs(o):r.push(l.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,n,r)}delete(t){const e=this.field(t.popLast());Jo(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Wn(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Jo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){or(e,(r,s)=>t[r]=s);for(const r of n)delete t[r]}clone(){return new un(Cs(this.value))}}function np(i){const t=[];return or(i.fields,(e,n)=>{const r=new Xe([e]);if(Jo(n)){const s=np(n.mapValue).fields;if(s.length===0)t.push(r);else for(const o of s)t.push(r.child(o))}else t.push(r)}),new vn(t)}/**
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
 */class nn{constructor(t,e,n,r,s,o,l){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(t){return new nn(t,0,Gt.min(),Gt.min(),Gt.min(),un.empty(),0)}static newFoundDocument(t,e,n,r){return new nn(t,1,e,Gt.min(),n,r,0)}static newNoDocument(t,e){return new nn(t,2,e,Gt.min(),Gt.min(),un.empty(),0)}static newUnknownDocument(t,e){return new nn(t,3,e,Gt.min(),Gt.min(),un.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Gt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=un.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=un.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Gt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof nn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new nn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ha{constructor(t,e){this.position=t,this.inclusive=e}}function yd(i,t,e){let n=0;for(let r=0;r<i.position.length;r++){const s=t[r],o=i.position[r];if(s.field.isKeyField()?n=Nt.comparator(Nt.fromName(o.referenceValue),e.key):n=jr(o,e.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function Ed(i,t){if(i===null)return t===null;if(t===null||i.inclusive!==t.inclusive||i.position.length!==t.position.length)return!1;for(let e=0;e<i.position.length;e++)if(!Wn(i.position[e],t.position[e]))return!1;return!0}/**
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
 */class da{constructor(t,e="asc"){this.field=t,this.dir=e}}function VS(i,t){return i.dir===t.dir&&i.field.isEqual(t.field)}/**
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
 */class ip{}class Fe extends ip{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new kS(t,e,n):e==="array-contains"?new GS(t,n):e==="in"?new WS(t,n):e==="not-in"?new qS(t,n):e==="array-contains-any"?new XS(t,n):new Fe(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new zS(t,n):new HS(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(jr(e,this.value)):e!==null&&rr(this.value)===rr(e)&&this.matchesComparison(jr(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return kt()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qn extends ip{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new qn(t,e)}matches(t){return rp(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function rp(i){return i.op==="and"}function sp(i){return BS(i)&&rp(i)}function BS(i){for(const t of i.filters)if(t instanceof qn)return!1;return!0}function Rc(i){if(i instanceof Fe)return i.field.canonicalString()+i.op.toString()+$r(i.value);if(sp(i))return i.filters.map(t=>Rc(t)).join(",");{const t=i.filters.map(e=>Rc(e)).join(",");return`${i.op}(${t})`}}function op(i,t){return i instanceof Fe?function(n,r){return r instanceof Fe&&n.op===r.op&&n.field.isEqual(r.field)&&Wn(n.value,r.value)}(i,t):i instanceof qn?function(n,r){return r instanceof qn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((s,o,l)=>s&&op(o,r.filters[l]),!0):!1}(i,t):void kt()}function ap(i){return i instanceof Fe?function(e){return`${e.field.canonicalString()} ${e.op} ${$r(e.value)}`}(i):i instanceof qn?function(e){return e.op.toString()+" {"+e.getFilters().map(ap).join(" ,")+"}"}(i):"Filter"}class kS extends Fe{constructor(t,e,n){super(t,e,n),this.key=Nt.fromName(n.referenceValue)}matches(t){const e=Nt.comparator(t.key,this.key);return this.matchesComparison(e)}}class zS extends Fe{constructor(t,e){super(t,"in",e),this.keys=lp("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class HS extends Fe{constructor(t,e){super(t,"not-in",e),this.keys=lp("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function lp(i,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>Nt.fromName(n.referenceValue))}class GS extends Fe{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return su(e)&&Bs(e.arrayValue,this.value)}}class WS extends Fe{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Bs(this.value.arrayValue,e)}}class qS extends Fe{constructor(t,e){super(t,"not-in",e)}matches(t){if(Bs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Bs(this.value.arrayValue,e)}}class XS extends Fe{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!su(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>Bs(this.value.arrayValue,n))}}/**
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
 */class jS{constructor(t,e=null,n=[],r=[],s=null,o=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function xd(i,t=null,e=[],n=[],r=null,s=null,o=null){return new jS(i,t,e,n,r,s,o)}function ou(i){const t=Wt(i);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>Rc(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(s){return s.field.canonicalString()+s.dir}(n)).join(","),wa(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>$r(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>$r(n)).join(",")),t.ue=e}return t.ue}function au(i,t){if(i.limit!==t.limit||i.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<i.orderBy.length;e++)if(!VS(i.orderBy[e],t.orderBy[e]))return!1;if(i.filters.length!==t.filters.length)return!1;for(let e=0;e<i.filters.length;e++)if(!op(i.filters[e],t.filters[e]))return!1;return i.collectionGroup===t.collectionGroup&&!!i.path.isEqual(t.path)&&!!Ed(i.startAt,t.startAt)&&Ed(i.endAt,t.endAt)}function Cc(i){return Nt.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class ba{constructor(t,e=null,n=[],r=[],s=null,o="F",l=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function $S(i,t,e,n,r,s,o,l){return new ba(i,t,e,n,r,s,o,l)}function Ra(i){return new ba(i)}function Sd(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function KS(i){return i.collectionGroup!==null}function Is(i){const t=Wt(i);if(t.ce===null){t.ce=[];const e=new Set;for(const s of t.explicitOrderBy)t.ce.push(s),e.add(s.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new je(Xe.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.ce.push(new da(s,n))}),e.has(Xe.keyField().canonicalString())||t.ce.push(new da(Xe.keyField(),n))}return t.ce}function Bn(i){const t=Wt(i);return t.le||(t.le=YS(t,Is(i))),t.le}function YS(i,t){if(i.limitType==="F")return xd(i.path,i.collectionGroup,t,i.filters,i.limit,i.startAt,i.endAt);{t=t.map(r=>{const s=r.dir==="desc"?"asc":"desc";return new da(r.field,s)});const e=i.endAt?new ha(i.endAt.position,i.endAt.inclusive):null,n=i.startAt?new ha(i.startAt.position,i.startAt.inclusive):null;return xd(i.path,i.collectionGroup,t,i.filters,i.limit,e,n)}}function Ic(i,t,e){return new ba(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),t,e,i.startAt,i.endAt)}function Ca(i,t){return au(Bn(i),Bn(t))&&i.limitType===t.limitType}function cp(i){return`${ou(Bn(i))}|lt:${i.limitType}`}function Cr(i){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>ap(r)).join(", ")}]`),wa(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>$r(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>$r(r)).join(",")),`Target(${n})`}(Bn(i))}; limitType=${i.limitType})`}function Ia(i,t){return t.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):Nt.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(i,t)&&function(n,r){for(const s of Is(n))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(i,t)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(i,t)&&function(n,r){return!(n.startAt&&!function(o,l,c){const u=yd(o,l,c);return o.inclusive?u<=0:u<0}(n.startAt,Is(n),r)||n.endAt&&!function(o,l,c){const u=yd(o,l,c);return o.inclusive?u>=0:u>0}(n.endAt,Is(n),r))}(i,t)}function QS(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function up(i){return(t,e)=>{let n=!1;for(const r of Is(i)){const s=JS(r,t,e);if(s!==0)return s;n=n||r.field.isKeyField()}return 0}}function JS(i,t,e){const n=i.field.isKeyField()?Nt.comparator(t.key,e.key):function(s,o,l){const c=o.data.field(s),u=l.data.field(s);return c!==null&&u!==null?jr(c,u):kt()}(i.field,t,e);switch(i.dir){case"asc":return n;case"desc":return-1*n;default:return kt()}}/**
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
 */class rs{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[r,s]of n)if(this.equalsFn(r,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return n.length===1?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){or(this.inner,(e,n)=>{for(const[r,s]of n)t(r,s)})}isEmpty(){return tp(this.inner)}size(){return this.innerSize}}/**
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
 */const ZS=new Me(Nt.comparator);function li(){return ZS}const hp=new Me(Nt.comparator);function ws(...i){let t=hp;for(const e of i)t=t.insert(e.key,e);return t}function dp(i){let t=hp;return i.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function Qi(){return Ps()}function fp(){return Ps()}function Ps(){return new rs(i=>i.toString(),(i,t)=>i.isEqual(t))}const tT=new Me(Nt.comparator),eT=new je(Nt.comparator);function Zt(...i){let t=eT;for(const e of i)t=t.add(e);return t}const nT=new je(he);function iT(){return nT}/**
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
 */function lu(i,t){if(i.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ua(t)?"-0":t}}function pp(i){return{integerValue:""+i}}function rT(i,t){return LS(t)?pp(t):lu(i,t)}/**
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
 */class Pa{constructor(){this._=void 0}}function sT(i,t,e){return i instanceof fa?function(r,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&iu(s)&&(s=ru(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(e,t):i instanceof ks?gp(i,t):i instanceof zs?_p(i,t):function(r,s){const o=mp(r,s),l=Td(o)+Td(r.Pe);return bc(o)&&bc(r.Pe)?pp(l):lu(r.serializer,l)}(i,t)}function oT(i,t,e){return i instanceof ks?gp(i,t):i instanceof zs?_p(i,t):e}function mp(i,t){return i instanceof pa?function(n){return bc(n)||function(s){return!!s&&"doubleValue"in s}(n)}(t)?t:{integerValue:0}:null}class fa extends Pa{}class ks extends Pa{constructor(t){super(),this.elements=t}}function gp(i,t){const e=vp(t);for(const n of i.elements)e.some(r=>Wn(r,n))||e.push(n);return{arrayValue:{values:e}}}class zs extends Pa{constructor(t){super(),this.elements=t}}function _p(i,t){let e=vp(t);for(const n of i.elements)e=e.filter(r=>!Wn(r,n));return{arrayValue:{values:e}}}class pa extends Pa{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Td(i){return Pe(i.integerValue||i.doubleValue)}function vp(i){return su(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function aT(i,t){return i.field.isEqual(t.field)&&function(n,r){return n instanceof ks&&r instanceof ks||n instanceof zs&&r instanceof zs?Xr(n.elements,r.elements,Wn):n instanceof pa&&r instanceof pa?Wn(n.Pe,r.Pe):n instanceof fa&&r instanceof fa}(i.transform,t.transform)}class lT{constructor(t,e){this.version=t,this.transformResults=e}}class kn{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new kn}static exists(t){return new kn(void 0,t)}static updateTime(t){return new kn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Zo(i,t){return i.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(i.updateTime):i.exists===void 0||i.exists===t.isFoundDocument()}class Da{}function yp(i,t){if(!i.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return i.isNoDocument()?new xp(i.key,kn.none()):new Zs(i.key,i.data,kn.none());{const e=i.data,n=un.empty();let r=new je(Xe.comparator);for(let s of t.fields)if(!r.has(s)){let o=e.field(s);o===null&&s.length>1&&(s=s.popLast(),o=e.field(s)),o===null?n.delete(s):n.set(s,o),r=r.add(s)}return new Ni(i.key,n,new vn(r.toArray()),kn.none())}}function cT(i,t,e){i instanceof Zs?function(r,s,o){const l=r.value.clone(),c=Ad(r.fieldTransforms,s,o.transformResults);l.setAll(c),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(i,t,e):i instanceof Ni?function(r,s,o){if(!Zo(r.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Ad(r.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(Ep(r)),c.setAll(l),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(i,t,e):function(r,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function Ds(i,t,e,n){return i instanceof Zs?function(s,o,l,c){if(!Zo(s.precondition,o))return l;const u=s.value.clone(),h=wd(s.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(i,t,e,n):i instanceof Ni?function(s,o,l,c){if(!Zo(s.precondition,o))return l;const u=wd(s.fieldTransforms,c,o),h=o.data;return h.setAll(Ep(s)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(i,t,e,n):function(s,o,l){return Zo(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(i,t,e)}function uT(i,t){let e=null;for(const n of i.fieldTransforms){const r=t.data.field(n.field),s=mp(n.transform,r||null);s!=null&&(e===null&&(e=un.empty()),e.set(n.field,s))}return e||null}function Md(i,t){return i.type===t.type&&!!i.key.isEqual(t.key)&&!!i.precondition.isEqual(t.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Xr(n,r,(s,o)=>aT(s,o))}(i.fieldTransforms,t.fieldTransforms)&&(i.type===0?i.value.isEqual(t.value):i.type!==1||i.data.isEqual(t.data)&&i.fieldMask.isEqual(t.fieldMask))}class Zs extends Da{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ni extends Da{constructor(t,e,n,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ep(i){const t=new Map;return i.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=i.data.field(e);t.set(e,n)}}),t}function Ad(i,t,e){const n=new Map;pe(i.length===e.length);for(let r=0;r<e.length;r++){const s=i[r],o=s.transform,l=t.data.field(s.field);n.set(s.field,oT(o,l,e[r]))}return n}function wd(i,t,e){const n=new Map;for(const r of i){const s=r.transform,o=e.data.field(r.field);n.set(r.field,sT(s,o,t))}return n}class xp extends Da{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hT extends Da{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class dT{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(t.key)&&cT(s,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Ds(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Ds(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=fp();return this.mutations.forEach(r=>{const s=t.get(r.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=e.has(r.key)?null:l;const c=yp(o,l);c!==null&&n.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(Gt.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Zt())}isEqual(t){return this.batchId===t.batchId&&Xr(this.mutations,t.mutations,(e,n)=>Md(e,n))&&Xr(this.baseMutations,t.baseMutations,(e,n)=>Md(e,n))}}class cu{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){pe(t.mutations.length===n.length);let r=function(){return tT}();const s=t.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,n[o].version);return new cu(t,e,n,r)}}/**
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
 */class fT{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class pT{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var Ne,ie;function mT(i){switch(i){default:return kt();case st.CANCELLED:case st.UNKNOWN:case st.DEADLINE_EXCEEDED:case st.RESOURCE_EXHAUSTED:case st.INTERNAL:case st.UNAVAILABLE:case st.UNAUTHENTICATED:return!1;case st.INVALID_ARGUMENT:case st.NOT_FOUND:case st.ALREADY_EXISTS:case st.PERMISSION_DENIED:case st.FAILED_PRECONDITION:case st.ABORTED:case st.OUT_OF_RANGE:case st.UNIMPLEMENTED:case st.DATA_LOSS:return!0}}function Sp(i){if(i===void 0)return ai("GRPC error has no .code"),st.UNKNOWN;switch(i){case Ne.OK:return st.OK;case Ne.CANCELLED:return st.CANCELLED;case Ne.UNKNOWN:return st.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return st.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return st.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return st.INTERNAL;case Ne.UNAVAILABLE:return st.UNAVAILABLE;case Ne.UNAUTHENTICATED:return st.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return st.INVALID_ARGUMENT;case Ne.NOT_FOUND:return st.NOT_FOUND;case Ne.ALREADY_EXISTS:return st.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return st.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return st.FAILED_PRECONDITION;case Ne.ABORTED:return st.ABORTED;case Ne.OUT_OF_RANGE:return st.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return st.UNIMPLEMENTED;case Ne.DATA_LOSS:return st.DATA_LOSS;default:return kt()}}(ie=Ne||(Ne={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function gT(){return new TextEncoder}/**
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
 */const _T=new Zi([4294967295,4294967295],0);function bd(i){const t=gT().encode(i),e=new Xf;return e.update(t),new Uint8Array(e.digest())}function Rd(i){const t=new DataView(i.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),r=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Zi([e,n],0),new Zi([r,s],0)]}class uu{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new bs(`Invalid padding: ${e}`);if(n<0)throw new bs(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new bs(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new bs(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Zi.fromNumber(this.Ie)}Ee(t,e,n){let r=t.add(e.multiply(Zi.fromNumber(n)));return r.compare(_T)===1&&(r=new Zi([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=bd(t),[n,r]=Rd(e);for(let s=0;s<this.hashCount;s++){const o=this.Ee(n,r,s);if(!this.de(o))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new uu(s,r,e);return n.forEach(l=>o.insert(l)),o}insert(t){if(this.Ie===0)return;const e=bd(t),[n,r]=Rd(e);for(let s=0;s<this.hashCount;s++){const o=this.Ee(n,r,s);this.Ae(o)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class bs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class La{constructor(t,e,n,r,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,to.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new La(Gt.min(),r,new Me(he),li(),Zt())}}class to{constructor(t,e,n,r,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new to(n,e,Zt(),Zt(),Zt())}}/**
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
 */class ta{constructor(t,e,n,r){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=r}}class Tp{constructor(t,e){this.targetId=t,this.me=e}}class Mp{constructor(t,e,n=$e.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Cd{constructor(){this.fe=0,this.ge=Pd(),this.pe=$e.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=Zt(),e=Zt(),n=Zt();return this.ge.forEach((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:kt()}}),new to(this.pe,this.ye,t,e,n)}Ce(){this.we=!1,this.ge=Pd()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,pe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class vT{constructor(t){this.Le=t,this.Be=new Map,this.ke=li(),this.qe=Id(),this.Qe=new Me(he)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const n=this.Ge(e);switch(t.state){case 0:this.ze(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),n.De(t.resumeToken));break;default:kt()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((n,r)=>{this.ze(r)&&e(r)})}He(t){const e=t.targetId,n=t.me.count,r=this.Je(e);if(r){const s=r.target;if(Cc(s))if(n===0){const o=new Nt(s.path);this.Ue(e,o,nn.newNoDocument(o,Gt.min()))}else pe(n===1);else{const o=this.Ye(e);if(o!==n){const l=this.Ze(t),c=l?this.Xe(l,t,o):1;if(c!==0){this.je(e);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,u)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:s=0}=e;let o,l;try{o=ir(n).toUint8Array()}catch(c){if(c instanceof ep)return qr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new uu(o,r,s)}catch(c){return qr(c instanceof bs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(t,e,n){return e.me.count===n-this.nt(t,e.targetId)?0:2}nt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let r=0;return n.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(l)||(this.Ue(e,s,null),r++)}),r}rt(t){const e=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Cc(l.target)){const c=new Nt(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,nn.newNoDocument(c,t))}s.be&&(e.set(o,s.ve()),s.Ce())}});let n=Zt();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Je(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(n=n.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(t));const r=new La(t,e,this.Qe,this.ke,n);return this.ke=li(),this.qe=Id(),this.Qe=new Me(he),r}$e(t,e){if(!this.ze(t))return;const n=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,n){if(!this.ze(t))return;const r=this.Ge(t);this.it(t,e)?r.Fe(e,1):r.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Cd,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new je(he),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||bt("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Cd),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Id(){return new Me(Nt.comparator)}function Pd(){return new Me(Nt.comparator)}const yT={asc:"ASCENDING",desc:"DESCENDING"},ET={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xT={and:"AND",or:"OR"};class ST{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Pc(i,t){return i.useProto3Json||wa(t)?t:{value:t}}function ma(i,t){return i.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ap(i,t){return i.useProto3Json?t.toBase64():t.toUint8Array()}function TT(i,t){return ma(i,t.toTimestamp())}function zn(i){return pe(!!i),Gt.fromTimestamp(function(e){const n=Pi(e);return new Oe(n.seconds,n.nanos)}(i))}function hu(i,t){return Dc(i,t).canonicalString()}function Dc(i,t){const e=function(r){return new be(["projects",r.projectId,"databases",r.database])}(i).child("documents");return t===void 0?e:e.child(t)}function wp(i){const t=be.fromString(i);return pe(Pp(t)),t}function Lc(i,t){return hu(i.databaseId,t.path)}function Rl(i,t){const e=wp(t);if(e.get(1)!==i.databaseId.projectId)throw new It(st.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+i.databaseId.projectId);if(e.get(3)!==i.databaseId.database)throw new It(st.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+i.databaseId.database);return new Nt(Rp(e))}function bp(i,t){return hu(i.databaseId,t)}function MT(i){const t=wp(i);return t.length===4?be.emptyPath():Rp(t)}function Nc(i){return new be(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function Rp(i){return pe(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function Dd(i,t,e){return{name:Lc(i,t),fields:e.value.mapValue.fields}}function AT(i,t){let e;if("targetChange"in t){t.targetChange;const n=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:kt()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],s=function(u,h){return u.useProto3Json?(pe(h===void 0||typeof h=="string"),$e.fromBase64String(h||"")):(pe(h===void 0||h instanceof Buffer||h instanceof Uint8Array),$e.fromUint8Array(h||new Uint8Array))}(i,t.targetChange.resumeToken),o=t.targetChange.cause,l=o&&function(u){const h=u.code===void 0?st.UNKNOWN:Sp(u.code);return new It(h,u.message||"")}(o);e=new Mp(n,r,s,l||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const r=Rl(i,n.document.name),s=zn(n.document.updateTime),o=n.document.createTime?zn(n.document.createTime):Gt.min(),l=new un({mapValue:{fields:n.document.fields}}),c=nn.newFoundDocument(r,s,o,l),u=n.targetIds||[],h=n.removedTargetIds||[];e=new ta(u,h,c.key,c)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const r=Rl(i,n.document),s=n.readTime?zn(n.readTime):Gt.min(),o=nn.newNoDocument(r,s),l=n.removedTargetIds||[];e=new ta([],l,o.key,o)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const r=Rl(i,n.document),s=n.removedTargetIds||[];e=new ta([],s,r,null)}else{if(!("filter"in t))return kt();{t.filter;const n=t.filter;n.targetId;const{count:r=0,unchangedNames:s}=n,o=new pT(r,s),l=n.targetId;e=new Tp(l,o)}}return e}function wT(i,t){let e;if(t instanceof Zs)e={update:Dd(i,t.key,t.value)};else if(t instanceof xp)e={delete:Lc(i,t.key)};else if(t instanceof Ni)e={update:Dd(i,t.key,t.data),updateMask:UT(t.fieldMask)};else{if(!(t instanceof hT))return kt();e={verify:Lc(i,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(s,o){const l=o.transform;if(l instanceof fa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ks)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof zs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof pa)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw kt()}(0,n))),t.precondition.isNone||(e.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:TT(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:kt()}(i,t.precondition)),e}function bT(i,t){return i&&i.length>0?(pe(t!==void 0),i.map(e=>function(r,s){let o=r.updateTime?zn(r.updateTime):zn(s);return o.isEqual(Gt.min())&&(o=zn(s)),new lT(o,r.transformResults||[])}(e,t))):[]}function RT(i,t){return{documents:[bp(i,t.path)]}}function CT(i,t){const e={structuredQuery:{}},n=t.path;let r;t.collectionGroup!==null?(r=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(r=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=bp(i,r);const s=function(u){if(u.length!==0)return Ip(qn.create(u,"and"))}(t.filters);s&&(e.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:Ir(p.field),direction:DT(p.dir)}}(h))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const l=Pc(i,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),{_t:e,parent:r}}function IT(i){let t=MT(i.parent);const e=i.structuredQuery,n=e.from?e.from.length:0;let r=null;if(n>0){pe(n===1);const h=e.from[0];h.allDescendants?r=h.collectionId:t=t.child(h.collectionId)}let s=[];e.where&&(s=function(f){const p=Cp(f);return p instanceof qn&&sp(p)?p.getFilters():[p]}(e.where));let o=[];e.orderBy&&(o=function(f){return f.map(p=>function(S){return new da(Pr(S.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(p))}(e.orderBy));let l=null;e.limit&&(l=function(f){let p;return p=typeof f=="object"?f.value:f,wa(p)?null:p}(e.limit));let c=null;e.startAt&&(c=function(f){const p=!!f.before,v=f.values||[];return new ha(v,p)}(e.startAt));let u=null;return e.endAt&&(u=function(f){const p=!f.before,v=f.values||[];return new ha(v,p)}(e.endAt)),$S(t,r,o,s,l,"F",c,u)}function PT(i,t){const e=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return kt()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Cp(i){return i.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Pr(e.unaryFilter.field);return Fe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Pr(e.unaryFilter.field);return Fe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Pr(e.unaryFilter.field);return Fe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Pr(e.unaryFilter.field);return Fe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return kt()}}(i):i.fieldFilter!==void 0?function(e){return Fe.create(Pr(e.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return kt()}}(e.fieldFilter.op),e.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(e){return qn.create(e.compositeFilter.filters.map(n=>Cp(n)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return kt()}}(e.compositeFilter.op))}(i):kt()}function DT(i){return yT[i]}function LT(i){return ET[i]}function NT(i){return xT[i]}function Ir(i){return{fieldPath:i.canonicalString()}}function Pr(i){return Xe.fromServerFormat(i.fieldPath)}function Ip(i){return i instanceof Fe?function(e){if(e.op==="=="){if(vd(e.value))return{unaryFilter:{field:Ir(e.field),op:"IS_NAN"}};if(_d(e.value))return{unaryFilter:{field:Ir(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(vd(e.value))return{unaryFilter:{field:Ir(e.field),op:"IS_NOT_NAN"}};if(_d(e.value))return{unaryFilter:{field:Ir(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ir(e.field),op:LT(e.op),value:e.value}}}(i):i instanceof qn?function(e){const n=e.getFilters().map(r=>Ip(r));return n.length===1?n[0]:{compositeFilter:{op:NT(e.op),filters:n}}}(i):kt()}function UT(i){const t=[];return i.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Pp(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class xi{constructor(t,e,n,r,s=Gt.min(),o=Gt.min(),l=$e.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(t){return new xi(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new xi(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new xi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new xi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class FT{constructor(t){this.ct=t}}function OT(i){const t=IT({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Ic(t,t.limit,"L"):t}/**
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
 */class VT{constructor(){this.un=new BT}addToCollectionParentIndex(t,e){return this.un.add(e),it.resolve()}getCollectionParents(t,e){return it.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return it.resolve()}deleteFieldIndex(t,e){return it.resolve()}deleteAllFieldIndexes(t){return it.resolve()}createTargetIndexes(t,e){return it.resolve()}getDocumentsMatchingTarget(t,e){return it.resolve(null)}getIndexType(t,e){return it.resolve(0)}getFieldIndexes(t,e){return it.resolve([])}getNextCollectionGroupToUpdate(t){return it.resolve(null)}getMinOffset(t,e){return it.resolve(Ii.min())}getMinOffsetFromCollectionGroup(t,e){return it.resolve(Ii.min())}updateCollectionGroup(t,e,n){return it.resolve()}updateIndexEntries(t,e){return it.resolve()}}class BT{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new je(be.comparator),s=!r.has(n);return this.index[e]=r.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new je(be.comparator)).toArray()}}/**
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
 */class Kr{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new Kr(0)}static kn(){return new Kr(-1)}}/**
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
 */class kT{constructor(){this.changes=new rs(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,nn.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?it.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class zT{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class HT{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(n=r,this.remoteDocumentCache.getEntry(t,e))).next(r=>(n!==null&&Ds(n.mutation,r,vn.empty(),Oe.now()),r))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,Zt()).next(()=>n))}getLocalViewOfDocuments(t,e,n=Zt()){const r=Qi();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,n).next(s=>{let o=ws();return s.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const n=Qi();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,Zt()))}populateOverlays(t,e,n){const r=[];return n.forEach(s=>{e.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(t,r).next(s=>{s.forEach((o,l)=>{e.set(o,l)})})}computeViews(t,e,n,r){let s=li();const o=Ps(),l=function(){return Ps()}();return e.forEach((c,u)=>{const h=n.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof Ni)?s=s.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Ds(h.mutation,u,h.mutation.getFieldMask(),Oe.now())):o.set(u.key,vn.empty())}),this.recalculateAndSaveOverlays(t,s).next(c=>(c.forEach((u,h)=>o.set(u,h)),e.forEach((u,h)=>{var f;return l.set(u,new zT(h,(f=o.get(u))!==null&&f!==void 0?f:null))}),l))}recalculateAndSaveOverlays(t,e){const n=Ps();let r=new Me((o,l)=>o-l),s=Zt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=e.get(c);if(u===null)return;let h=n.get(c)||vn.empty();h=l.applyToLocalView(u,h),n.set(c,h);const f=(r.get(l.batchId)||Zt()).add(c);r=r.insert(l.batchId,f)})}).next(()=>{const o=[],l=r.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,h=c.value,f=fp();h.forEach(p=>{if(!s.has(p)){const v=yp(e.get(p),n.get(p));v!==null&&f.set(p,v),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,f))}return it.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,r){return function(o){return Nt.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):KS(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-s.size):it.resolve(Qi());let l=-1,c=s;return o.next(u=>it.forEach(u,(h,f)=>(l<f.largestBatchId&&(l=f.largestBatchId),s.get(h)?it.resolve():this.remoteDocumentCache.getEntry(t,h).next(p=>{c=c.insert(h,p)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,c,u,Zt())).next(h=>({batchId:l,changes:dp(h)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Nt(e)).next(n=>{let r=ws();return n.isFoundDocument()&&(r=r.insert(n.key,n)),r})}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const s=e.collectionGroup;let o=ws();return this.indexManager.getCollectionParents(t,s).next(l=>it.forEach(l,c=>{const u=function(f,p){return new ba(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(e,c.child(s));return this.getDocumentsMatchingCollectionQuery(t,u,n,r).next(h=>{h.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,s,r))).next(o=>{s.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,nn.newInvalidDocument(h)))});let l=ws();return o.forEach((c,u)=>{const h=s.get(c);h!==void 0&&Ds(h.mutation,u,vn.empty(),Oe.now()),Ia(e,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class GT{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return it.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(r){return{id:r.id,version:r.version,createTime:zn(r.createTime)}}(e)),it.resolve()}getNamedQuery(t,e){return it.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(r){return{name:r.name,query:OT(r.bundledQuery),readTime:zn(r.readTime)}}(e)),it.resolve()}}/**
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
 */class WT{constructor(){this.overlays=new Me(Nt.comparator),this.Ir=new Map}getOverlay(t,e){return it.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Qi();return it.forEach(e,r=>this.getOverlay(t,r).next(s=>{s!==null&&n.set(r,s)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((r,s)=>{this.ht(t,e,s)}),it.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Ir.get(n);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(n)),it.resolve()}getOverlaysForCollection(t,e,n){const r=Qi(),s=e.length+1,o=new Nt(e.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!e.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>n&&r.set(c.getKey(),c)}return it.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let s=new Me((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===e&&u.largestBatchId>n){let h=s.get(u.largestBatchId);h===null&&(h=Qi(),s=s.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const l=Qi(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>l.set(u,h)),!(l.size()>=r)););return it.resolve(l)}ht(t,e,n){const r=this.overlays.get(n.key);if(r!==null){const o=this.Ir.get(r.largestBatchId).delete(n.key);this.Ir.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new fT(e,n));let s=this.Ir.get(e);s===void 0&&(s=Zt(),this.Ir.set(e,s)),this.Ir.set(e,s.add(n.key))}}/**
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
 */class qT{constructor(){this.sessionToken=$e.EMPTY_BYTE_STRING}getSessionToken(t){return it.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,it.resolve()}}/**
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
 */class du{constructor(){this.Tr=new je(He.Er),this.dr=new je(He.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const n=new He(t,e);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Vr(new He(t,e))}mr(t,e){t.forEach(n=>this.removeReference(n,e))}gr(t){const e=new Nt(new be([])),n=new He(e,t),r=new He(e,t+1),s=[];return this.dr.forEachInRange([n,r],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new Nt(new be([])),n=new He(e,t),r=new He(e,t+1);let s=Zt();return this.dr.forEachInRange([n,r],o=>{s=s.add(o.key)}),s}containsKey(t){const e=new He(t,0),n=this.Tr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class He{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return Nt.comparator(t.key,e.key)||he(t.wr,e.wr)}static Ar(t,e){return he(t.wr,e.wr)||Nt.comparator(t.key,e.key)}}/**
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
 */class XT{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new je(He.Er)}checkEmpty(t){return it.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,r){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new dT(s,e,n,r);this.mutationQueue.push(o);for(const l of r)this.br=this.br.add(new He(l.key,s)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return it.resolve(o)}lookupMutationBatch(t,e){return it.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.vr(n),s=r<0?0:r;return it.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return it.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return it.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new He(e,0),r=new He(e,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([n,r],o=>{const l=this.Dr(o.wr);s.push(l)}),it.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new je(he);return e.forEach(r=>{const s=new He(r,0),o=new He(r,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{n=n.add(l.wr)})}),it.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let s=n;Nt.isDocumentKey(s)||(s=s.child(""));const o=new He(new Nt(s),0);let l=new je(he);return this.br.forEachWhile(c=>{const u=c.key.path;return!!n.isPrefixOf(u)&&(u.length===r&&(l=l.add(c.wr)),!0)},o),it.resolve(this.Cr(l))}Cr(t){const e=[];return t.forEach(n=>{const r=this.Dr(n);r!==null&&e.push(r)}),e}removeMutationBatch(t,e){pe(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return it.forEach(e.mutations,r=>{const s=new He(r.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.br=n})}On(t){}containsKey(t,e){const n=new He(e,0),r=this.br.firstAfterOrEqual(n);return it.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,it.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class jT{constructor(t){this.Mr=t,this.docs=function(){return new Me(Nt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),s=r?r.size:0,o=this.Mr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return it.resolve(n?n.document.mutableCopy():nn.newInvalidDocument(e))}getEntries(t,e){let n=li();return e.forEach(r=>{const s=this.docs.get(r);n=n.insert(r,s?s.document.mutableCopy():nn.newInvalidDocument(r))}),it.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let s=li();const o=e.path,l=new Nt(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||CS(RS(h),n)<=0||(r.has(h.key)||Ia(e,h))&&(s=s.insert(h.key,h.mutableCopy()))}return it.resolve(s)}getAllFromCollectionGroup(t,e,n,r){kt()}Or(t,e){return it.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new $T(this)}getSize(t){return it.resolve(this.size)}}class $T extends kT{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?e.push(this.cr.addEntry(t,r)):this.cr.removeEntry(n)}),it.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
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
 */class KT{constructor(t){this.persistence=t,this.Nr=new rs(e=>ou(e),au),this.lastRemoteSnapshotVersion=Gt.min(),this.highestTargetId=0,this.Lr=0,this.Br=new du,this.targetCount=0,this.kr=Kr.Bn()}forEachTarget(t,e){return this.Nr.forEach((n,r)=>e(r)),it.resolve()}getLastRemoteSnapshotVersion(t){return it.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return it.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),it.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Lr&&(this.Lr=e),it.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new Kr(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,it.resolve()}updateTargetData(t,e){return this.Kn(e),it.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,it.resolve()}removeTargets(t,e,n){let r=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=e&&n.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,l.targetId)),r++)}),it.waitFor(s).next(()=>r)}getTargetCount(t){return it.resolve(this.targetCount)}getTargetData(t,e){const n=this.Nr.get(e)||null;return it.resolve(n)}addMatchingKeys(t,e,n){return this.Br.Rr(e,n),it.resolve()}removeMatchingKeys(t,e,n){this.Br.mr(e,n);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach(o=>{s.push(r.markPotentiallyOrphaned(t,o))}),it.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),it.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Br.yr(e);return it.resolve(n)}containsKey(t,e){return it.resolve(this.Br.containsKey(e))}}/**
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
 */class YT{constructor(t,e){this.qr={},this.overlays={},this.Qr=new nu(0),this.Kr=!1,this.Kr=!0,this.$r=new qT,this.referenceDelegate=t(this),this.Ur=new KT(this),this.indexManager=new VT,this.remoteDocumentCache=function(r){return new jT(r)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new FT(e),this.Gr=new GT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new WT,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.qr[t.toKey()];return n||(n=new XT(e,this.referenceDelegate),this.qr[t.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,n){bt("MemoryPersistence","Starting transaction:",t);const r=new QT(this.Qr.next());return this.referenceDelegate.zr(),n(r).next(s=>this.referenceDelegate.jr(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Hr(t,e){return it.or(Object.values(this.qr).map(n=>()=>n.containsKey(t,e)))}}class QT extends PS{constructor(t){super(),this.currentSequenceNumber=t}}class fu{constructor(t){this.persistence=t,this.Jr=new du,this.Yr=null}static Zr(t){return new fu(t)}get Xr(){if(this.Yr)return this.Yr;throw kt()}addReference(t,e,n){return this.Jr.addReference(n,e),this.Xr.delete(n.toString()),it.resolve()}removeReference(t,e,n){return this.Jr.removeReference(n,e),this.Xr.add(n.toString()),it.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),it.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(r=>this.Xr.add(r.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(r=>{r.forEach(s=>this.Xr.add(s.toString()))}).next(()=>n.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return it.forEach(this.Xr,n=>{const r=Nt.fromPath(n);return this.ei(t,r).next(s=>{s||e.removeEntry(r,Gt.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(n=>{n?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return it.or([()=>it.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
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
 */class pu{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.$i=n,this.Ui=r}static Wi(t,e){let n=Zt(),r=Zt();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new pu(t,e.fromCache,n,r)}}/**
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
 */class JT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class ZT{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return nx()?8:DS(tx())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,n,r){const s={result:null};return this.Yi(t,e).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(t,e,r,n).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new JT;return this.Xi(t,e,o).next(l=>{if(s.result=l,this.zi)return this.es(t,e,o,l.size)})}).next(()=>s.result)}es(t,e,n,r){return n.documentReadCount<this.ji?(Ts()<=le.DEBUG&&bt("QueryEngine","SDK will not create cache indexes for query:",Cr(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),it.resolve()):(Ts()<=le.DEBUG&&bt("QueryEngine","Query:",Cr(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Hi*r?(Ts()<=le.DEBUG&&bt("QueryEngine","The SDK decides to create cache indexes for query:",Cr(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Bn(e))):it.resolve())}Yi(t,e){if(Sd(e))return it.resolve(null);let n=Bn(e);return this.indexManager.getIndexType(t,n).next(r=>r===0?null:(e.limit!==null&&r===1&&(e=Ic(e,null,"F"),n=Bn(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(s=>{const o=Zt(...s);return this.Ji.getDocuments(t,o).next(l=>this.indexManager.getMinOffset(t,n).next(c=>{const u=this.ts(e,l);return this.ns(e,u,o,c.readTime)?this.Yi(t,Ic(e,null,"F")):this.rs(t,u,e,c)}))})))}Zi(t,e,n,r){return Sd(e)||r.isEqual(Gt.min())?it.resolve(null):this.Ji.getDocuments(t,n).next(s=>{const o=this.ts(e,s);return this.ns(e,o,n,r)?it.resolve(null):(Ts()<=le.DEBUG&&bt("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Cr(e)),this.rs(t,o,e,bS(r,-1)).next(l=>l))})}ts(t,e){let n=new je(up(t));return e.forEach((r,s)=>{Ia(t,s)&&(n=n.add(s))}),n}ns(t,e,n,r){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Xi(t,e,n){return Ts()<=le.DEBUG&&bt("QueryEngine","Using full collection scan to execute query:",Cr(e)),this.Ji.getDocumentsMatchingQuery(t,e,Ii.min(),n)}rs(t,e,n,r){return this.Ji.getDocumentsMatchingQuery(t,n,r).next(s=>(e.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class tM{constructor(t,e,n,r){this.persistence=t,this.ss=e,this.serializer=r,this.os=new Me(he),this._s=new rs(s=>ou(s),au),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(n)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new HT(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function eM(i,t,e,n){return new tM(i,t,e,n)}async function Dp(i,t){const e=Wt(i);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(s=>(r=s,e.ls(t),e.mutationQueue.getAllMutationBatches(n))).next(s=>{const o=[],l=[];let c=Zt();for(const u of r){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of s){l.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return e.localDocuments.getDocuments(n,c).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:l}))})})}function nM(i,t){const e=Wt(i);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const r=t.batch.keys(),s=e.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,h){const f=u.batch,p=f.keys();let v=it.resolve();return p.forEach(S=>{v=v.next(()=>h.getEntry(c,S)).next(w=>{const g=u.docVersions.get(S);pe(g!==null),w.version.compareTo(g)<0&&(f.applyToRemoteDocument(w,u),w.isValidDocument()&&(w.setReadTime(u.commitVersion),h.addEntry(w)))})}),v.next(()=>l.mutationQueue.removeMutationBatch(c,f))}(e,n,t,s).next(()=>s.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,r,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(l){let c=Zt();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(t))).next(()=>e.localDocuments.getDocuments(n,r))})}function Lp(i){const t=Wt(i);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function iM(i,t){const e=Wt(i),n=t.snapshotVersion;let r=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=e.cs.newChangeBuffer({trackRemovals:!0});r=e.os;const l=[];t.targetChanges.forEach((h,f)=>{const p=r.get(f);if(!p)return;l.push(e.Ur.removeMatchingKeys(s,h.removedDocuments,f).next(()=>e.Ur.addMatchingKeys(s,h.addedDocuments,f)));let v=p.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(f)!==null?v=v.withResumeToken($e.EMPTY_BYTE_STRING,Gt.min()).withLastLimboFreeSnapshotVersion(Gt.min()):h.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(h.resumeToken,n)),r=r.insert(f,v),function(w,g,_){return w.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(p,v,h)&&l.push(e.Ur.updateTargetData(s,v))});let c=li(),u=Zt();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(s,h))}),l.push(rM(s,o,t.documentUpdates).next(h=>{c=h.Ps,u=h.Is})),!n.isEqual(Gt.min())){const h=e.Ur.getLastRemoteSnapshotVersion(s).next(f=>e.Ur.setTargetsMetadata(s,s.currentSequenceNumber,n));l.push(h)}return it.waitFor(l).next(()=>o.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(e.os=r,s))}function rM(i,t,e){let n=Zt(),r=Zt();return e.forEach(s=>n=n.add(s)),t.getEntries(i,n).next(s=>{let o=li();return e.forEach((l,c)=>{const u=s.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(l)),c.isNoDocument()&&c.version.isEqual(Gt.min())?(t.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(l,c)):bt("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Ps:o,Is:r}})}function sM(i,t){const e=Wt(i);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function oM(i,t){const e=Wt(i);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let r;return e.Ur.getTargetData(n,t).next(s=>s?(r=s,it.resolve(r)):e.Ur.allocateTargetId(n).next(o=>(r=new xi(t,o,"TargetPurposeListen",n.currentSequenceNumber),e.Ur.addTargetData(n,r).next(()=>r))))}).then(n=>{const r=e.os.get(n.targetId);return(r===null||n.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(e.os=e.os.insert(n.targetId,n),e._s.set(t,n.targetId)),n})}async function Uc(i,t,e){const n=Wt(i),r=n.os.get(t),s=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",s,o=>n.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Js(o))throw o;bt("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}n.os=n.os.remove(t),n._s.delete(r.target)}function Ld(i,t,e){const n=Wt(i);let r=Gt.min(),s=Zt();return n.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const f=Wt(c),p=f._s.get(h);return p!==void 0?it.resolve(f.os.get(p)):f.Ur.getTargetData(u,h)}(n,o,Bn(t)).next(l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{s=c})}).next(()=>n.ss.getDocumentsMatchingQuery(o,t,e?r:Gt.min(),e?s:Zt())).next(l=>(aM(n,QS(t),l),{documents:l,Ts:s})))}function aM(i,t,e){let n=i.us.get(t)||Gt.min();e.forEach((r,s)=>{s.readTime.compareTo(n)>0&&(n=s.readTime)}),i.us.set(t,n)}class Nd{constructor(){this.activeTargetIds=iT()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class lM{constructor(){this.so=new Nd,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,n){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Nd,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class cM{_o(t){}shutdown(){}}/**
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
 */class Ud{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){bt("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){bt("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Go=null;function Cl(){return Go===null?Go=function(){return 268435456+Math.round(2147483648*Math.random())}():Go++,"0x"+Go.toString(16)}/**
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
 */const uM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class hM{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
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
 */const tn="WebChannelConnection";class dM extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+e.host,this.vo=`projects/${r}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${s}`}get Fo(){return!1}Mo(e,n,r,s,o){const l=Cl(),c=this.xo(e,n.toUriEncodedString());bt("RestConnection",`Sending RPC '${e}' ${l}:`,c,r);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,s,o),this.No(e,c,u,r).then(h=>(bt("RestConnection",`Received RPC '${e}' ${l}: `,h),h),h=>{throw qr("RestConnection",`RPC '${e}' ${l} failed with error: `,h,"url: ",c,"request:",r),h})}Lo(e,n,r,s,o,l){return this.Mo(e,n,r,s,o)}Oo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+is}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,o)=>e[o]=s),r&&r.headers.forEach((s,o)=>e[o]=s)}xo(e,n){const r=uM[e];return`${this.Do}/v1/${n}:${r}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,n,r){const s=Cl();return new Promise((o,l)=>{const c=new jf;c.setWithCredentials(!0),c.listenOnce($f.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Qo.NO_ERROR:const h=c.getResponseJson();bt(tn,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(h)),o(h);break;case Qo.TIMEOUT:bt(tn,`RPC '${t}' ${s} timed out`),l(new It(st.DEADLINE_EXCEEDED,"Request time out"));break;case Qo.HTTP_ERROR:const f=c.getStatus();if(bt(tn,`RPC '${t}' ${s} failed with status:`,f,"response text:",c.getResponseText()),f>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const v=p?.error;if(v&&v.status&&v.message){const S=function(g){const _=g.toLowerCase().replace(/_/g,"-");return Object.values(st).indexOf(_)>=0?_:st.UNKNOWN}(v.status);l(new It(S,v.message))}else l(new It(st.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new It(st.UNAVAILABLE,"Connection failed."));break;default:kt()}}finally{bt(tn,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(r);bt(tn,`RPC '${t}' ${s} sending request:`,r),c.send(e,"POST",u,n,15)})}Bo(t,e,n){const r=Cl(),s=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Qf(),l=Yf(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,e,n),c.encodeInitMessageHeaders=!0;const h=s.join("");bt(tn,`Creating RPC '${t}' stream ${r}: ${h}`,c);const f=o.createWebChannel(h,c);let p=!1,v=!1;const S=new hM({Io:g=>{v?bt(tn,`Not sending because RPC '${t}' stream ${r} is closed:`,g):(p||(bt(tn,`Opening RPC '${t}' stream ${r} transport.`),f.open(),p=!0),bt(tn,`RPC '${t}' stream ${r} sending:`,g),f.send(g))},To:()=>f.close()}),w=(g,_,L)=>{g.listen(_,I=>{try{L(I)}catch(N){setTimeout(()=>{throw N},0)}})};return w(f,As.EventType.OPEN,()=>{v||(bt(tn,`RPC '${t}' stream ${r} transport opened.`),S.yo())}),w(f,As.EventType.CLOSE,()=>{v||(v=!0,bt(tn,`RPC '${t}' stream ${r} transport closed`),S.So())}),w(f,As.EventType.ERROR,g=>{v||(v=!0,qr(tn,`RPC '${t}' stream ${r} transport errored:`,g),S.So(new It(st.UNAVAILABLE,"The operation could not be completed")))}),w(f,As.EventType.MESSAGE,g=>{var _;if(!v){const L=g.data[0];pe(!!L);const I=L,N=I.error||((_=I[0])===null||_===void 0?void 0:_.error);if(N){bt(tn,`RPC '${t}' stream ${r} received error:`,N);const W=N.status;let F=function(C){const m=Ne[C];if(m!==void 0)return Sp(m)}(W),x=N.message;F===void 0&&(F=st.INTERNAL,x="Unknown error status: "+W+" with message "+N.message),v=!0,S.So(new It(F,x)),f.close()}else bt(tn,`RPC '${t}' stream ${r} received:`,L),S.bo(L)}}),w(l,Kf.STAT_EVENT,g=>{g.stat===Ac.PROXY?bt(tn,`RPC '${t}' stream ${r} detected buffering proxy`):g.stat===Ac.NOPROXY&&bt(tn,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function Il(){return typeof document<"u"?document:null}/**
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
 */function Na(i){return new ST(i,!0)}/**
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
 */class Np{constructor(t,e,n=1e3,r=1.5,s=6e4){this.ui=t,this.timerId=e,this.ko=n,this.qo=r,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),r=Math.max(0,e-n);r>0&&bt("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Up{constructor(t,e,n,r,s,o,l,c){this.ui=t,this.Ho=n,this.Jo=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Np(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===st.RESOURCE_EXHAUSTED?(ai(e.toString()),ai("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===st.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,r])=>{this.Yo===e&&this.P_(n,r)},n=>{t(()=>{const r=new It(st.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(r)})})}P_(t,e){const n=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(r=>{n(()=>this.I_(r))}),this.stream.onMessage(r=>{n(()=>++this.e_==1?this.E_(r):this.onNext(r))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return bt("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(bt("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fM extends Up{constructor(t,e,n,r,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,o),this.serializer=s}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=AT(this.serializer,t),n=function(s){if(!("targetChange"in s))return Gt.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Gt.min():o.readTime?zn(o.readTime):Gt.min()}(t);return this.listener.d_(e,n)}A_(t){const e={};e.database=Nc(this.serializer),e.addTarget=function(s,o){let l;const c=o.target;if(l=Cc(c)?{documents:RT(s,c)}:{query:CT(s,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Ap(s,o.resumeToken);const u=Pc(s,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(Gt.min())>0){l.readTime=ma(s,o.snapshotVersion.toTimestamp());const u=Pc(s,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,t);const n=PT(this.serializer,t);n&&(e.labels=n),this.a_(e)}R_(t){const e={};e.database=Nc(this.serializer),e.removeTarget=t,this.a_(e)}}class pM extends Up{constructor(t,e,n,r,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return pe(!!t.streamToken),this.lastStreamToken=t.streamToken,pe(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){pe(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=bT(t.writeResults,t.commitTime),n=zn(t.commitTime);return this.listener.g_(n,e)}p_(){const t={};t.database=Nc(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>wT(this.serializer,n))};this.a_(e)}}/**
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
 */class mM extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new It(st.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,n,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(t,Dc(e,n),r,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===st.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new It(st.UNKNOWN,s.toString())})}Lo(t,e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(t,Dc(e,n),r,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===st.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new It(st.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class gM{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ai(e),this.D_=!1):bt("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class _M{constructor(t,e,n,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{n.enqueueAndForget(async()=>{ar(this)&&(bt("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=Wt(c);u.L_.add(4),await eo(u),u.q_.set("Unknown"),u.L_.delete(4),await Ua(u)}(this))})}),this.q_=new gM(n,r)}}async function Ua(i){if(ar(i))for(const t of i.B_)await t(!0)}async function eo(i){for(const t of i.B_)await t(!1)}function Fp(i,t){const e=Wt(i);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),vu(e)?_u(e):ss(e).r_()&&gu(e,t))}function mu(i,t){const e=Wt(i),n=ss(e);e.N_.delete(t),n.r_()&&Op(e,t),e.N_.size===0&&(n.r_()?n.o_():ar(e)&&e.q_.set("Unknown"))}function gu(i,t){if(i.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Gt.min())>0){const e=i.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}ss(i).A_(t)}function Op(i,t){i.Q_.xe(t),ss(i).R_(t)}function _u(i){i.Q_=new vT({getRemoteKeysForTarget:t=>i.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>i.N_.get(t)||null,tt:()=>i.datastore.serializer.databaseId}),ss(i).start(),i.q_.v_()}function vu(i){return ar(i)&&!ss(i).n_()&&i.N_.size>0}function ar(i){return Wt(i).L_.size===0}function Vp(i){i.Q_=void 0}async function vM(i){i.q_.set("Online")}async function yM(i){i.N_.forEach((t,e)=>{gu(i,t)})}async function EM(i,t){Vp(i),vu(i)?(i.q_.M_(t),_u(i)):i.q_.set("Unknown")}async function xM(i,t,e){if(i.q_.set("Online"),t instanceof Mp&&t.state===2&&t.cause)try{await async function(r,s){const o=s.cause;for(const l of s.targetIds)r.N_.has(l)&&(await r.remoteSyncer.rejectListen(l,o),r.N_.delete(l),r.Q_.removeTarget(l))}(i,t)}catch(n){bt("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await ga(i,n)}else if(t instanceof ta?i.Q_.Ke(t):t instanceof Tp?i.Q_.He(t):i.Q_.We(t),!e.isEqual(Gt.min()))try{const n=await Lp(i.localStore);e.compareTo(n)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=s.N_.get(u);h&&s.N_.set(u,h.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const h=s.N_.get(c);if(!h)return;s.N_.set(c,h.withResumeToken($e.EMPTY_BYTE_STRING,h.snapshotVersion)),Op(s,c);const f=new xi(h.target,c,u,h.sequenceNumber);gu(s,f)}),s.remoteSyncer.applyRemoteEvent(l)}(i,e)}catch(n){bt("RemoteStore","Failed to raise snapshot:",n),await ga(i,n)}}async function ga(i,t,e){if(!Js(t))throw t;i.L_.add(1),await eo(i),i.q_.set("Offline"),e||(e=()=>Lp(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{bt("RemoteStore","Retrying IndexedDB access"),await e(),i.L_.delete(1),await Ua(i)})}function Bp(i,t){return t().catch(e=>ga(i,e,t))}async function Fa(i){const t=Wt(i),e=Di(t);let n=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;SM(t);)try{const r=await sM(t.localStore,n);if(r===null){t.O_.length===0&&e.o_();break}n=r.batchId,TM(t,r)}catch(r){await ga(t,r)}kp(t)&&zp(t)}function SM(i){return ar(i)&&i.O_.length<10}function TM(i,t){i.O_.push(t);const e=Di(i);e.r_()&&e.V_&&e.m_(t.mutations)}function kp(i){return ar(i)&&!Di(i).n_()&&i.O_.length>0}function zp(i){Di(i).start()}async function MM(i){Di(i).p_()}async function AM(i){const t=Di(i);for(const e of i.O_)t.m_(e.mutations)}async function wM(i,t,e){const n=i.O_.shift(),r=cu.from(n,t,e);await Bp(i,()=>i.remoteSyncer.applySuccessfulWrite(r)),await Fa(i)}async function bM(i,t){t&&Di(i).V_&&await async function(n,r){if(function(o){return mT(o)&&o!==st.ABORTED}(r.code)){const s=n.O_.shift();Di(n).s_(),await Bp(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Fa(n)}}(i,t),kp(i)&&zp(i)}async function Fd(i,t){const e=Wt(i);e.asyncQueue.verifyOperationInProgress(),bt("RemoteStore","RemoteStore received new credentials");const n=ar(e);e.L_.add(3),await eo(e),n&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Ua(e)}async function RM(i,t){const e=Wt(i);t?(e.L_.delete(2),await Ua(e)):t||(e.L_.add(2),await eo(e),e.q_.set("Unknown"))}function ss(i){return i.K_||(i.K_=function(e,n,r){const s=Wt(e);return s.w_(),new fM(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(i.datastore,i.asyncQueue,{Eo:vM.bind(null,i),Ro:yM.bind(null,i),mo:EM.bind(null,i),d_:xM.bind(null,i)}),i.B_.push(async t=>{t?(i.K_.s_(),vu(i)?_u(i):i.q_.set("Unknown")):(await i.K_.stop(),Vp(i))})),i.K_}function Di(i){return i.U_||(i.U_=function(e,n,r){const s=Wt(e);return s.w_(),new pM(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(i.datastore,i.asyncQueue,{Eo:()=>Promise.resolve(),Ro:MM.bind(null,i),mo:bM.bind(null,i),f_:AM.bind(null,i),g_:wM.bind(null,i)}),i.B_.push(async t=>{t?(i.U_.s_(),await Fa(i)):(await i.U_.stop(),i.O_.length>0&&(bt("RemoteStore",`Stopping write stream with ${i.O_.length} pending writes`),i.O_=[]))})),i.U_}/**
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
 */class yu{constructor(t,e,n,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new wi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,s){const o=Date.now()+n,l=new yu(t,e,o,r,s);return l.start(n),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new It(st.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Eu(i,t){if(ai("AsyncQueue",`${t}: ${i}`),Js(i))return new It(st.UNAVAILABLE,`${t}: ${i}`);throw i}/**
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
 */class Or{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Nt.comparator(e.key,n.key):(e,n)=>Nt.comparator(e.key,n.key),this.keyedMap=ws(),this.sortedSet=new Me(this.comparator)}static emptySet(t){return new Or(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Or)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const r=e.getNext().key,s=n.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new Or;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
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
 */class Od{constructor(){this.W_=new Me(Nt.comparator)}track(t){const e=t.doc.key,n=this.W_.get(e);n?t.type!==0&&n.type===3?this.W_=this.W_.insert(e,t):t.type===3&&n.type!==1?this.W_=this.W_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.W_=this.W_.remove(e):t.type===1&&n.type===2?this.W_=this.W_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):kt():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,n)=>{t.push(n)}),t}}class Yr{constructor(t,e,n,r,s,o,l,c,u){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,e,n,r,s){const o=[];return e.forEach(l=>{o.push({type:0,doc:l})}),new Yr(t,e,Or.emptySet(e),o,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ca(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}/**
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
 */class CM{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class IM{constructor(){this.queries=Vd(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,n){const r=Wt(e),s=r.queries;r.queries=Vd(),s.forEach((o,l)=>{for(const c of l.j_)c.onError(n)})})(this,new It(st.ABORTED,"Firestore shutting down"))}}function Vd(){return new rs(i=>cp(i),Ca)}async function Hp(i,t){const e=Wt(i);let n=3;const r=t.query;let s=e.queries.get(r);s?!s.H_()&&t.J_()&&(n=2):(s=new CM,n=t.J_()?0:1);try{switch(n){case 0:s.z_=await e.onListen(r,!0);break;case 1:s.z_=await e.onListen(r,!1);break;case 2:await e.onFirstRemoteStoreListen(r)}}catch(o){const l=Eu(o,`Initialization of query '${Cr(t.query)}' failed`);return void t.onError(l)}e.queries.set(r,s),s.j_.push(t),t.Z_(e.onlineState),s.z_&&t.X_(s.z_)&&xu(e)}async function Gp(i,t){const e=Wt(i),n=t.query;let r=3;const s=e.queries.get(n);if(s){const o=s.j_.indexOf(t);o>=0&&(s.j_.splice(o,1),s.j_.length===0?r=t.J_()?0:1:!s.H_()&&t.J_()&&(r=2))}switch(r){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function PM(i,t){const e=Wt(i);let n=!1;for(const r of t){const s=r.query,o=e.queries.get(s);if(o){for(const l of o.j_)l.X_(r)&&(n=!0);o.z_=r}}n&&xu(e)}function DM(i,t,e){const n=Wt(i),r=n.queries.get(t);if(r)for(const s of r.j_)s.onError(e);n.queries.delete(t)}function xu(i){i.Y_.forEach(t=>{t.next()})}var Fc,Bd;(Bd=Fc||(Fc={})).ea="default",Bd.Cache="cache";class Wp{constructor(t,e,n){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(t){if(!this.options.includeMetadataChanges){const n=[];for(const r of t.docChanges)r.type!==3&&n.push(r);t=new Yr(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const n=e!=="Offline";return(!this.options._a||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Yr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Fc.Cache}}/**
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
 */class qp{constructor(t){this.key=t}}class Xp{constructor(t){this.key=t}}class LM{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Zt(),this.mutatedKeys=Zt(),this.Aa=up(t),this.Ra=new Or(this.Aa)}get Va(){return this.Ta}ma(t,e){const n=e?e.fa:new Od,r=e?e.Ra:this.Ra;let s=e?e.mutatedKeys:this.mutatedKeys,o=r,l=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((h,f)=>{const p=r.get(h),v=Ia(this.query,f)?f:null,S=!!p&&this.mutatedKeys.has(p.key),w=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let g=!1;p&&v?p.data.isEqual(v.data)?S!==w&&(n.track({type:3,doc:v}),g=!0):this.ga(p,v)||(n.track({type:2,doc:v}),g=!0,(c&&this.Aa(v,c)>0||u&&this.Aa(v,u)<0)&&(l=!0)):!p&&v?(n.track({type:0,doc:v}),g=!0):p&&!v&&(n.track({type:1,doc:p}),g=!0,(c||u)&&(l=!0)),g&&(v?(o=o.add(v),s=w?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),n.track({type:1,doc:h})}return{Ra:o,fa:n,ns:l,mutatedKeys:s}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,r){const s=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const o=t.fa.G_();o.sort((h,f)=>function(v,S){const w=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return kt()}};return w(v)-w(S)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(n),r=r!=null&&r;const l=e&&!r?this.ya():[],c=this.da.size===0&&this.current&&!r?1:0,u=c!==this.Ea;return this.Ea=c,o.length!==0||u?{snapshot:new Yr(this.query,t.Ra,s,o,t.mutatedKeys,c===0,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Od,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=Zt(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const e=[];return t.forEach(n=>{this.da.has(n)||e.push(new Xp(n))}),this.da.forEach(n=>{t.has(n)||e.push(new qp(n))}),e}ba(t){this.Ta=t.Ts,this.da=Zt();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Yr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class NM{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class UM{constructor(t){this.key=t,this.va=!1}}class FM{constructor(t,e,n,r,s,o){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new rs(l=>cp(l),Ca),this.Ma=new Map,this.xa=new Set,this.Oa=new Me(Nt.comparator),this.Na=new Map,this.La=new du,this.Ba={},this.ka=new Map,this.qa=Kr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function OM(i,t,e=!0){const n=Jp(i);let r;const s=n.Fa.get(t);return s?(n.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.Da()):r=await jp(n,t,e,!0),r}async function VM(i,t){const e=Jp(i);await jp(e,t,!0,!1)}async function jp(i,t,e,n){const r=await oM(i.localStore,Bn(t)),s=r.targetId,o=i.sharedClientState.addLocalQueryTarget(s,e);let l;return n&&(l=await BM(i,t,s,o==="current",r.resumeToken)),i.isPrimaryClient&&e&&Fp(i.remoteStore,r),l}async function BM(i,t,e,n,r){i.Ka=(f,p,v)=>async function(w,g,_,L){let I=g.view.ma(_);I.ns&&(I=await Ld(w.localStore,g.query,!1).then(({documents:x})=>g.view.ma(x,I)));const N=L&&L.targetChanges.get(g.targetId),W=L&&L.targetMismatches.get(g.targetId)!=null,F=g.view.applyChanges(I,w.isPrimaryClient,N,W);return zd(w,g.targetId,F.wa),F.snapshot}(i,f,p,v);const s=await Ld(i.localStore,t,!0),o=new LM(t,s.Ts),l=o.ma(s.documents),c=to.createSynthesizedTargetChangeForCurrentChange(e,n&&i.onlineState!=="Offline",r),u=o.applyChanges(l,i.isPrimaryClient,c);zd(i,e,u.wa);const h=new NM(t,e,o);return i.Fa.set(t,h),i.Ma.has(e)?i.Ma.get(e).push(t):i.Ma.set(e,[t]),u.snapshot}async function kM(i,t,e){const n=Wt(i),r=n.Fa.get(t),s=n.Ma.get(r.targetId);if(s.length>1)return n.Ma.set(r.targetId,s.filter(o=>!Ca(o,t))),void n.Fa.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Uc(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),e&&mu(n.remoteStore,r.targetId),Oc(n,r.targetId)}).catch(Qs)):(Oc(n,r.targetId),await Uc(n.localStore,r.targetId,!0))}async function zM(i,t){const e=Wt(i),n=e.Fa.get(t),r=e.Ma.get(n.targetId);e.isPrimaryClient&&r.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),mu(e.remoteStore,n.targetId))}async function HM(i,t,e){const n=KM(i);try{const r=await function(o,l){const c=Wt(o),u=Oe.now(),h=l.reduce((v,S)=>v.add(S.key),Zt());let f,p;return c.persistence.runTransaction("Locally write mutations","readwrite",v=>{let S=li(),w=Zt();return c.cs.getEntries(v,h).next(g=>{S=g,S.forEach((_,L)=>{L.isValidDocument()||(w=w.add(_))})}).next(()=>c.localDocuments.getOverlayedDocuments(v,S)).next(g=>{f=g;const _=[];for(const L of l){const I=uT(L,f.get(L.key).overlayedDocument);I!=null&&_.push(new Ni(L.key,I,np(I.value.mapValue),kn.exists(!0)))}return c.mutationQueue.addMutationBatch(v,u,_,l)}).next(g=>{p=g;const _=g.applyToLocalDocumentSet(f,w);return c.documentOverlayCache.saveOverlays(v,g.batchId,_)})}).then(()=>({batchId:p.batchId,changes:dp(f)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(r.batchId),function(o,l,c){let u=o.Ba[o.currentUser.toKey()];u||(u=new Me(he)),u=u.insert(l,c),o.Ba[o.currentUser.toKey()]=u}(n,r.batchId,e),await no(n,r.changes),await Fa(n.remoteStore)}catch(r){const s=Eu(r,"Failed to persist write");e.reject(s)}}async function $p(i,t){const e=Wt(i);try{const n=await iM(e.localStore,t);t.targetChanges.forEach((r,s)=>{const o=e.Na.get(s);o&&(pe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.va=!0:r.modifiedDocuments.size>0?pe(o.va):r.removedDocuments.size>0&&(pe(o.va),o.va=!1))}),await no(e,n,t)}catch(n){await Qs(n)}}function kd(i,t,e){const n=Wt(i);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const r=[];n.Fa.forEach((s,o)=>{const l=o.view.Z_(t);l.snapshot&&r.push(l.snapshot)}),function(o,l){const c=Wt(o);c.onlineState=l;let u=!1;c.queries.forEach((h,f)=>{for(const p of f.j_)p.Z_(l)&&(u=!0)}),u&&xu(c)}(n.eventManager,t),r.length&&n.Ca.d_(r),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function GM(i,t,e){const n=Wt(i);n.sharedClientState.updateQueryState(t,"rejected",e);const r=n.Na.get(t),s=r&&r.key;if(s){let o=new Me(Nt.comparator);o=o.insert(s,nn.newNoDocument(s,Gt.min()));const l=Zt().add(s),c=new La(Gt.min(),new Map,new Me(he),o,l);await $p(n,c),n.Oa=n.Oa.remove(s),n.Na.delete(t),Su(n)}else await Uc(n.localStore,t,!1).then(()=>Oc(n,t,e)).catch(Qs)}async function WM(i,t){const e=Wt(i),n=t.batch.batchId;try{const r=await nM(e.localStore,t);Yp(e,n,null),Kp(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await no(e,r)}catch(r){await Qs(r)}}async function qM(i,t,e){const n=Wt(i);try{const r=await function(o,l){const c=Wt(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,l).next(f=>(pe(f!==null),h=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(n.localStore,t);Yp(n,t,e),Kp(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await no(n,r)}catch(r){await Qs(r)}}function Kp(i,t){(i.ka.get(t)||[]).forEach(e=>{e.resolve()}),i.ka.delete(t)}function Yp(i,t,e){const n=Wt(i);let r=n.Ba[n.currentUser.toKey()];if(r){const s=r.get(t);s&&(e?s.reject(e):s.resolve(),r=r.remove(t)),n.Ba[n.currentUser.toKey()]=r}}function Oc(i,t,e=null){i.sharedClientState.removeLocalQueryTarget(t);for(const n of i.Ma.get(t))i.Fa.delete(n),e&&i.Ca.$a(n,e);i.Ma.delete(t),i.isPrimaryClient&&i.La.gr(t).forEach(n=>{i.La.containsKey(n)||Qp(i,n)})}function Qp(i,t){i.xa.delete(t.path.canonicalString());const e=i.Oa.get(t);e!==null&&(mu(i.remoteStore,e),i.Oa=i.Oa.remove(t),i.Na.delete(e),Su(i))}function zd(i,t,e){for(const n of e)n instanceof qp?(i.La.addReference(n.key,t),XM(i,n)):n instanceof Xp?(bt("SyncEngine","Document no longer in limbo: "+n.key),i.La.removeReference(n.key,t),i.La.containsKey(n.key)||Qp(i,n.key)):kt()}function XM(i,t){const e=t.key,n=e.path.canonicalString();i.Oa.get(e)||i.xa.has(n)||(bt("SyncEngine","New document in limbo: "+e),i.xa.add(n),Su(i))}function Su(i){for(;i.xa.size>0&&i.Oa.size<i.maxConcurrentLimboResolutions;){const t=i.xa.values().next().value;i.xa.delete(t);const e=new Nt(be.fromString(t)),n=i.qa.next();i.Na.set(n,new UM(e)),i.Oa=i.Oa.insert(e,n),Fp(i.remoteStore,new xi(Bn(Ra(e.path)),n,"TargetPurposeLimboResolution",nu.oe))}}async function no(i,t,e){const n=Wt(i),r=[],s=[],o=[];n.Fa.isEmpty()||(n.Fa.forEach((l,c)=>{o.push(n.Ka(c,t,e).then(u=>{var h;if((u||e)&&n.isPrimaryClient){const f=u?!u.fromCache:(h=e?.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;n.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){r.push(u);const f=pu.Wi(c.targetId,u);s.push(f)}}))}),await Promise.all(o),n.Ca.d_(r),await async function(c,u){const h=Wt(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>it.forEach(u,p=>it.forEach(p.$i,v=>h.persistence.referenceDelegate.addReference(f,p.targetId,v)).next(()=>it.forEach(p.Ui,v=>h.persistence.referenceDelegate.removeReference(f,p.targetId,v)))))}catch(f){if(!Js(f))throw f;bt("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const p=f.targetId;if(!f.fromCache){const v=h.os.get(p),S=v.snapshotVersion,w=v.withLastLimboFreeSnapshotVersion(S);h.os=h.os.insert(p,w)}}}(n.localStore,s))}async function jM(i,t){const e=Wt(i);if(!e.currentUser.isEqual(t)){bt("SyncEngine","User change. New user:",t.toKey());const n=await Dp(e.localStore,t);e.currentUser=t,function(s,o){s.ka.forEach(l=>{l.forEach(c=>{c.reject(new It(st.CANCELLED,o))})}),s.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await no(e,n.hs)}}function $M(i,t){const e=Wt(i),n=e.Na.get(t);if(n&&n.va)return Zt().add(n.key);{let r=Zt();const s=e.Ma.get(t);if(!s)return r;for(const o of s){const l=e.Fa.get(o);r=r.unionWith(l.view.Va)}return r}}function Jp(i){const t=Wt(i);return t.remoteStore.remoteSyncer.applyRemoteEvent=$p.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=$M.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=GM.bind(null,t),t.Ca.d_=PM.bind(null,t.eventManager),t.Ca.$a=DM.bind(null,t.eventManager),t}function KM(i){const t=Wt(i);return t.remoteStore.remoteSyncer.applySuccessfulWrite=WM.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=qM.bind(null,t),t}class _a{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Na(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return eM(this.persistence,new ZT,t.initialUser,this.serializer)}Ga(t){return new YT(fu.Zr,this.serializer)}Wa(t){return new lM}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_a.provider={build:()=>new _a};class Vc{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>kd(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=jM.bind(null,this.syncEngine),await RM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new IM}()}createDatastore(t){const e=Na(t.databaseInfo.databaseId),n=function(s){return new dM(s)}(t.databaseInfo);return function(s,o,l,c){return new mM(s,o,l,c)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,r,s,o,l){return new _M(n,r,s,o,l)}(this.localStore,this.datastore,t.asyncQueue,e=>kd(this.syncEngine,e,0),function(){return Ud.D()?new Ud:new cM}())}createSyncEngine(t,e){return function(r,s,o,l,c,u,h){const f=new FM(r,s,o,l,c,u);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(r){const s=Wt(r);bt("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await eo(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Vc.provider={build:()=>new Vc};/**
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
 */class Zp{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):ai("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class YM{constructor(t,e,n,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=en.UNAUTHENTICATED,this.clientId=Zf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,async o=>{bt("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(bt("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new wi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Eu(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Pl(i,t){i.asyncQueue.verifyOperationInProgress(),bt("FirestoreClient","Initializing OfflineComponentProvider");const e=i.configuration;await t.initialize(e);let n=e.initialUser;i.setCredentialChangeListener(async r=>{n.isEqual(r)||(await Dp(t.localStore,r),n=r)}),t.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=t}async function Hd(i,t){i.asyncQueue.verifyOperationInProgress();const e=await QM(i);bt("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,i.configuration),i.setCredentialChangeListener(n=>Fd(t.remoteStore,n)),i.setAppCheckTokenChangeListener((n,r)=>Fd(t.remoteStore,r)),i._onlineComponents=t}async function QM(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){bt("FirestoreClient","Using user provided OfflineComponentProvider");try{await Pl(i,i._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(r){return r.name==="FirebaseError"?r.code===st.FAILED_PRECONDITION||r.code===st.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(e))throw e;qr("Error using user provided cache. Falling back to memory cache: "+e),await Pl(i,new _a)}}else bt("FirestoreClient","Using default OfflineComponentProvider"),await Pl(i,new _a);return i._offlineComponents}async function tm(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(bt("FirestoreClient","Using user provided OnlineComponentProvider"),await Hd(i,i._uninitializedComponentsProvider._online)):(bt("FirestoreClient","Using default OnlineComponentProvider"),await Hd(i,new Vc))),i._onlineComponents}function JM(i){return tm(i).then(t=>t.syncEngine)}async function Bc(i){const t=await tm(i),e=t.eventManager;return e.onListen=OM.bind(null,t.syncEngine),e.onUnlisten=kM.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=VM.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=zM.bind(null,t.syncEngine),e}function ZM(i,t,e={}){const n=new wi;return i.asyncQueue.enqueueAndForget(async()=>function(s,o,l,c,u){const h=new Zp({next:p=>{h.Za(),o.enqueueAndForget(()=>Gp(s,f));const v=p.docs.has(l);!v&&p.fromCache?u.reject(new It(st.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&p.fromCache&&c&&c.source==="server"?u.reject(new It(st.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),f=new Wp(Ra(l.path),h,{includeMetadataChanges:!0,_a:!0});return Hp(s,f)}(await Bc(i),i.asyncQueue,t,e,n)),n.promise}/**
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
 */function em(i){const t={};return i.timeoutSeconds!==void 0&&(t.timeoutSeconds=i.timeoutSeconds),t}/**
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
 */const Gd=new Map;/**
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
 */function tA(i,t,e){if(!e)throw new It(st.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${t}.`)}function eA(i,t,e,n){if(t===!0&&n===!0)throw new It(st.INVALID_ARGUMENT,`${i} and ${e} cannot be used together.`)}function Wd(i){if(!Nt.isDocumentKey(i))throw new It(st.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Tu(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(i);return t?`a custom ${t} object`:"an object"}}return typeof i=="function"?"a function":kt()}function Hn(i,t){if("_delegate"in i&&(i=i._delegate),!(i instanceof t)){if(t.name===i.constructor.name)throw new It(st.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Tu(i);throw new It(st.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return i}/**
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
 */class qd{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new It(st.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new It(st.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}eA("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=em((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new It(st.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new It(st.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new It(st.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,r){return n.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Mu{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qd({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new It(st.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new It(st.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qd(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new vS;switch(n.type){case"firstParty":return new SS(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new It(st.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Gd.get(e);n&&(bt("ComponentProvider","Removing Datastore"),Gd.delete(e),n.terminate())}(this),Promise.resolve()}}function nA(i,t,e,n={}){var r;const s=(i=Hn(i,Mu))._getSettings(),o=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&qr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),n.mockUserToken){let l,c;if(typeof n.mockUserToken=="string")l=n.mockUserToken,c=en.MOCK_USER;else{l=ZE(n.mockUserToken,(r=i._app)===null||r===void 0?void 0:r.options.projectId);const u=n.mockUserToken.sub||n.mockUserToken.user_id;if(!u)throw new It(st.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new en(u)}i._authCredentials=new yS(new Jf(l,c))}}/**
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
 */class Oa{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Oa(this.firestore,t,this._query)}}class fn{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hs(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new fn(this.firestore,t,this._key)}}class Hs extends Oa{constructor(t,e,n){super(t,e,Ra(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new fn(this.firestore,null,new Nt(t))}withConverter(t){return new Hs(this.firestore,t,this._path)}}function iA(i,t,...e){if(i=Ci(i),arguments.length===1&&(t=Zf.newId()),tA("doc","path",t),i instanceof Mu){const n=be.fromString(t,...e);return Wd(n),new fn(i,null,new Nt(n))}{if(!(i instanceof fn||i instanceof Hs))throw new It(st.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=i._path.child(be.fromString(t,...e));return Wd(n),new fn(i.firestore,i instanceof Hs?i.converter:null,new Nt(n))}}/**
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
 */class Xd{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Np(this,"async_queue_retry"),this.Vu=()=>{const n=Il();n&&bt("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=t;const e=Il();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Il();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new wi;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Js(t))throw t;bt("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(n=>{this.Eu=n,this.du=!1;const r=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(n);throw ai("INTERNAL UNHANDLED ERROR: ",r),n}).then(n=>(this.du=!1,n))));return this.mu=e,e}enqueueAfterDelay(t,e,n){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const r=yu.createAndSchedule(this,t,e,n,s=>this.yu(s));return this.Tu.push(r),r}fu(){this.Eu&&kt()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function jd(i){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of n)if(s in r&&typeof r[s]=="function")return!0;return!1}(i,["next","error","complete"])}class Qr extends Mu{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new Xd,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Xd(t),this._firestoreClient=void 0,await t}}}function rA(i,t){const e=typeof i=="object"?i:lS(),n=typeof i=="string"?i:"(default)",r=rS(e,"firestore").getImmediate({identifier:n});if(!r._initialized){const s=QE("firestore");s&&nA(r,...s)}return r}function Au(i){if(i._terminated)throw new It(st.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||sA(i),i._firestoreClient}function sA(i){var t,e,n;const r=i._freezeSettings(),s=function(l,c,u,h){return new US(l,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,em(h.experimentalLongPollingOptions),h.useFetchStreams)}(i._databaseId,((t=i._app)===null||t===void 0?void 0:t.options.appId)||"",i._persistenceKey,r);i._componentsProvider||!((e=r.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=r.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(i._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),i._firestoreClient=new YM(i._authCredentials,i._appCheckCredentials,i._queue,s,i._componentsProvider&&function(l){const c=l?._online.build();return{_offline:l?._offline.build(c),_online:c}}(i._componentsProvider))}/**
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
 */class Jr{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Jr($e.fromBase64String(t))}catch(e){throw new It(st.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Jr($e.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Va{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new It(st.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class wu{constructor(t){this._methodName=t}}/**
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
 */class bu{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new It(st.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new It(st.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return he(this._lat,t._lat)||he(this._long,t._long)}}/**
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
 */class Ru{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,r){if(n.length!==r.length)return!1;for(let s=0;s<n.length;++s)if(n[s]!==r[s])return!1;return!0}(this._values,t._values)}}/**
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
 */const oA=/^__.*__$/;class aA{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new Ni(t,this.data,this.fieldMask,e,this.fieldTransforms):new Zs(t,this.data,e,this.fieldTransforms)}}class nm{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Ni(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function im(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw kt()}}class Cu{constructor(t,e,n,r,s,o){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Cu(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),r=this.Fu({path:n,xu:!1});return r.Ou(t),r}Nu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),r=this.Fu({path:n,xu:!1});return r.vu(),r}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return va(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(im(this.Cu)&&oA.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class lA{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Na(t)}Qu(t,e,n,r=!1){return new Cu({Cu:t,methodName:e,qu:n,path:Xe.emptyPath(),xu:!1,ku:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rm(i){const t=i._freezeSettings(),e=Na(i._databaseId);return new lA(i._databaseId,!!t.ignoreUndefinedProperties,e)}function cA(i,t,e,n,r,s={}){const o=i.Qu(s.merge||s.mergeFields?2:0,t,e,r);Iu("Data must be an object, but it was:",o,n);const l=sm(n,o);let c,u;if(s.merge)c=new vn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const p=kc(t,f,e);if(!o.contains(p))throw new It(st.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);am(h,p)||h.push(p)}c=new vn(h),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new aA(new un(l),c,u)}class io extends wu{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof io}}function uA(i,t,e,n){const r=i.Qu(1,t,e);Iu("Data must be an object, but it was:",r,n);const s=[],o=un.empty();or(n,(c,u)=>{const h=Pu(t,c,e);u=Ci(u);const f=r.Nu(h);if(u instanceof io)s.push(h);else{const p=Ba(u,f);p!=null&&(s.push(h),o.set(h,p))}});const l=new vn(s);return new nm(o,l,r.fieldTransforms)}function hA(i,t,e,n,r,s){const o=i.Qu(1,t,e),l=[kc(t,n,e)],c=[r];if(s.length%2!=0)throw new It(st.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)l.push(kc(t,s[p])),c.push(s[p+1]);const u=[],h=un.empty();for(let p=l.length-1;p>=0;--p)if(!am(u,l[p])){const v=l[p];let S=c[p];S=Ci(S);const w=o.Nu(v);if(S instanceof io)u.push(v);else{const g=Ba(S,w);g!=null&&(u.push(v),h.set(v,g))}}const f=new vn(u);return new nm(h,f,o.fieldTransforms)}function Ba(i,t){if(om(i=Ci(i)))return Iu("Unsupported field value:",t,i),sm(i,t);if(i instanceof wu)return function(n,r){if(!im(r.Cu))throw r.Bu(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Bu(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(i,t),null;if(i===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),i instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(n,r){const s=[];let o=0;for(const l of n){let c=Ba(l,r.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(i,t)}return function(n,r){if((n=Ci(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return rT(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Oe.fromDate(n);return{timestampValue:ma(r.serializer,s)}}if(n instanceof Oe){const s=new Oe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ma(r.serializer,s)}}if(n instanceof bu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Jr)return{bytesValue:Ap(r.serializer,n._byteString)};if(n instanceof fn){const s=r.databaseId,o=n.firestore._databaseId;if(!o.isEqual(s))throw r.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:hu(n.firestore._databaseId||r.databaseId,n._key.path)}}if(n instanceof Ru)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return lu(l.serializer,c)})}}}}}}(n,r);throw r.Bu(`Unsupported field value: ${Tu(n)}`)}(i,t)}function sm(i,t){const e={};return tp(i)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):or(i,(n,r)=>{const s=Ba(r,t.Mu(n));s!=null&&(e[n]=s)}),{mapValue:{fields:e}}}function om(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Oe||i instanceof bu||i instanceof Jr||i instanceof fn||i instanceof wu||i instanceof Ru)}function Iu(i,t,e){if(!om(e)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(e)){const n=Tu(e);throw n==="an object"?t.Bu(i+" a custom object"):t.Bu(i+" "+n)}}function kc(i,t,e){if((t=Ci(t))instanceof Va)return t._internalPath;if(typeof t=="string")return Pu(i,t);throw va("Field path arguments must be of type string or ",i,!1,void 0,e)}const dA=new RegExp("[~\\*/\\[\\]]");function Pu(i,t,e){if(t.search(dA)>=0)throw va(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,e);try{return new Va(...t.split("."))._internalPath}catch{throw va(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,e)}}function va(i,t,e,n,r){const s=n&&!n.isEmpty(),o=r!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${n}`),o&&(c+=` in document ${r}`),c+=")"),new It(st.INVALID_ARGUMENT,l+i+c)}function am(i,t){return i.some(e=>e.isEqual(t))}/**
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
 */class lm{constructor(t,e,n,r,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new fn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new fA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(cm("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class fA extends lm{data(){return super.data()}}function cm(i,t){return typeof t=="string"?Pu(i,t):t instanceof Va?t._internalPath:t._delegate._internalPath}/**
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
 */function pA(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new It(st.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mA{convertValue(t,e="none"){switch(rr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Pe(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ir(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw kt()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return or(t,(r,s)=>{n[r]=this.convertValue(s,e)}),n}convertVectorValue(t){var e,n,r;const s=(r=(n=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||n===void 0?void 0:n.values)===null||r===void 0?void 0:r.map(o=>Pe(o.doubleValue));return new Ru(s)}convertGeoPoint(t){return new bu(Pe(t.latitude),Pe(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=ru(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Os(t));default:return null}}convertTimestamp(t){const e=Pi(t);return new Oe(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=be.fromString(t);pe(Pp(n));const r=new Vs(n.get(1),n.get(3)),s=new Nt(n.popFirst(5));return r.isEqual(e)||ai(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
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
 */function gA(i,t,e){let n;return n=i?e&&(e.merge||e.mergeFields)?i.toFirestore(t,e):i.toFirestore(t):t,n}/**
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
 */class Rs{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class um extends lm{constructor(t,e,n,r,s,o){super(t,e,n,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ea(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(cm("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class ea extends um{data(t={}){return super.data(t)}}class _A{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Rs(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new ea(this._firestore,this._userDataWriter,n.key,n,new Rs(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new It(st.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(l=>{const c=new ea(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Rs(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const c=new ea(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Rs(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,h=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),h=o.indexOf(l.doc.key)),{type:vA(l.type),doc:c,oldIndex:u,newIndex:h}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function vA(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return kt()}}/**
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
 */function ka(i){i=Hn(i,fn);const t=Hn(i.firestore,Qr);return ZM(Au(t),i._key).then(e=>pm(t,i,e))}class hm extends mA{constructor(t){super(),this.firestore=t}convertBytes(t){return new Jr(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new fn(this.firestore,null,e)}}function dm(i,t,e){i=Hn(i,fn);const n=Hn(i.firestore,Qr),r=gA(i.converter,t,e);return fm(n,[cA(rm(n),"setDoc",i._key,r,i.converter!==null,e).toMutation(i._key,kn.none())])}function ya(i,t,e,...n){i=Hn(i,fn);const r=Hn(i.firestore,Qr),s=rm(r);let o;return o=typeof(t=Ci(t))=="string"||t instanceof Va?hA(s,"updateDoc",i._key,t,e,n):uA(s,"updateDoc",i._key,t),fm(r,[o.toMutation(i._key,kn.exists(!0))])}function yA(i,...t){var e,n,r;i=Ci(i);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof t[o]!="object"||jd(t[o])||(s=t[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(jd(t[o])){const f=t[o];t[o]=(e=f.next)===null||e===void 0?void 0:e.bind(f),t[o+1]=(n=f.error)===null||n===void 0?void 0:n.bind(f),t[o+2]=(r=f.complete)===null||r===void 0?void 0:r.bind(f)}let c,u,h;if(i instanceof fn)u=Hn(i.firestore,Qr),h=Ra(i._key.path),c={next:f=>{t[o]&&t[o](pm(u,i,f))},error:t[o+1],complete:t[o+2]};else{const f=Hn(i,Oa);u=Hn(f.firestore,Qr),h=f._query;const p=new hm(u);c={next:v=>{t[o]&&t[o](new _A(u,p,f,v))},error:t[o+1],complete:t[o+2]},pA(i._query)}return function(p,v,S,w){const g=new Zp(w),_=new Wp(v,g,S);return p.asyncQueue.enqueueAndForget(async()=>Hp(await Bc(p),_)),()=>{g.Za(),p.asyncQueue.enqueueAndForget(async()=>Gp(await Bc(p),_))}}(Au(u),h,l,c)}function fm(i,t){return function(n,r){const s=new wi;return n.asyncQueue.enqueueAndForget(async()=>HM(await JM(n),r,s)),s.promise}(Au(i),t)}function pm(i,t,e){const n=e.docs.get(t._key),r=new hm(i);return new um(i,r,t._key,n,new Rs(e.hasPendingWrites,e.fromCache),t.converter)}/**
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
 */function $d(){return new io("deleteField")}(function(t,e=!0){(function(r){is=r})(aS),ca(new Ns("firestore",(n,{instanceIdentifier:r,options:s})=>{const o=n.getProvider("app").getImmediate(),l=new Qr(new ES(n.getProvider("auth-internal")),new MS(n.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new It(st.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vs(u.options.projectId,h)}(o,r),o);return s=Object.assign({useFetchStreams:e},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Fr(dd,"4.7.3",t),Fr(dd,"4.7.3","esm2017")})();var EA="firebase",xA="10.14.1";/**
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
 */Fr(EA,xA,"app");const SA={apiKey:"AIzaSyAdLxpkzBjjdzZ29HGDEvhPGXn8DBmpLa8",authDomain:"games-rooms.firebaseapp.com",projectId:"games-rooms",storageBucket:"games-rooms.firebasestorage.app",messagingSenderId:"1023357290194",appId:"1:1023357290194:web:f9f0bd056690a31af20f0b"},TA=Gf(SA),MA=rA(TA),mm=["red","blue","green","yellow","purple","orange","pink","cyan"],AA={red:"#e74c3c",blue:"#3498db",green:"#2ecc71",yellow:"#f1c40f",purple:"#9b59b6",orange:"#e67e22",pink:"#e91e8c",cyan:"#1abc9c"},Ln=i=>iA(MA,"ludoex","rooms","list",i);function Kd(){return Math.random().toString(36).substring(2,8).toUpperCase()}function gm(){return Math.random().toString(36).substring(2,12)}async function wA(i,t){let e=Kd();for(let l=0;l<5&&(await ka(Ln(e))).exists();l++)e=Kd();const n=gm(),r={id:n,name:i,color:mm[0],isHost:!0,connected:!0},o={code:e,hostId:n,status:"waiting",mode:t,boardType:"standard",players:{[n]:r},createdAt:Date.now()};return await dm(Ln(e),o),{room:o,playerId:n}}async function bA(i,t){const e=await ka(Ln(i));if(!e.exists())throw new Error("Room not found");const n=e.data();if(n.status!=="waiting")throw new Error("Game already started");if(Object.keys(n.players).length>=8)throw new Error("Room is full");const s=Object.values(n.players).map(u=>u.color),o=mm.find(u=>!s.includes(u)),l=gm(),c={id:l,name:t,color:o,isHost:!1,connected:!0};return await ya(Ln(i),{[`players.${l}`]:c}),{room:{...n,players:{...n.players,[l]:c}},playerId:l}}async function _m(i,t){const e=await ka(Ln(i));if(!e.exists())return;const n=e.data();if(n.hostId===t){const r=Object.values(n.players).filter(o=>o.id!==t);if(r.length===0){await dm(Ln(i),{status:"finished"},{merge:!0});return}const s=r[0];await ya(Ln(i),{hostId:s.id,[`players.${s.id}.isHost`]:!0,[`players.${t}`]:$d()})}else await ya(Ln(i),{[`players.${t}`]:$d()})}async function RA(i,t){const e=await ka(Ln(i));if(!e.exists())throw new Error("Room not found");const n=e.data();if(n.hostId!==t)throw new Error("Only host can start");const r=Object.keys(n.players).length;if(r<2)throw new Error("Need at least 2 players");const s=r<=4?"standard":"octagonal";await ya(Ln(i),{status:"playing",boardType:s})}function CA(i,t){return yA(Ln(i),e=>{t(e.exists()?e.data():null)})}let ei=null,Ea=null,xa=null;function ro(i){document.getElementById("ui-overlay").innerHTML=IA(),PA(i)}function IA(){return`
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
  `}function PA(i){document.getElementById("btn-create").addEventListener("click",()=>DA(i)),document.getElementById("btn-join").addEventListener("click",()=>LA(i))}function DA(i){document.getElementById("ui-overlay").innerHTML=`
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
  `;let t="classic";document.querySelectorAll(".mode-btn").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".mode-btn").forEach(n=>n.classList.remove("active")),e.classList.add("active"),t=e.dataset.mode})}),document.getElementById("btn-back").addEventListener("click",()=>ro(i)),document.getElementById("btn-confirm").addEventListener("click",async()=>{const e=document.getElementById("input-name").value.trim();if(!e)return Vr("Enter a name");try{Sa(!0);const{room:n,playerId:r}=await wA(e,t);Ea=n.code,xa=r,vm(n,r,i)}catch(n){Vr(n.message),Sa(!1)}}),document.getElementById("input-name").focus()}function LA(i){document.getElementById("ui-overlay").innerHTML=`
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
  `,document.getElementById("input-code").addEventListener("input",t=>{const e=t.target;e.value=e.value.toUpperCase()}),document.getElementById("btn-back").addEventListener("click",()=>ro(i)),document.getElementById("btn-confirm").addEventListener("click",async()=>{const t=document.getElementById("input-name").value.trim(),e=document.getElementById("input-code").value.trim();if(!t)return Vr("Enter a name");if(e.length!==6)return Vr("Code must be 6 characters");try{Sa(!0);const{room:n,playerId:r}=await bA(e,t);Ea=n.code,xa=r,vm(n,r,i)}catch(n){Vr(n.message),Sa(!1)}}),document.getElementById("input-name").focus()}function vm(i,t,e){Yd(i,t,e),ei&&ei(),ei=CA(i.code,n=>{if(!n)return ro(e);if(n.status==="playing"){ei&&(ei(),ei=null),e.onGameStart(n,t);return}Yd(n,t,e)}),window.addEventListener("beforeunload",ym)}function Yd(i,t,e){const n=Object.values(i.players),r=i.hostId===t,s=r&&n.length>=2;document.getElementById("ui-overlay").innerHTML=`
    <div class="lobby-screen">
      <div class="lobby-card waiting-card">
        <div class="waiting-header">
          <h2>Room <span class="room-code">${i.code}</span></h2>
          <span class="mode-badge mode-${i.mode}">${i.mode}</span>
        </div>
        <p class="waiting-hint">Share the code with friends</p>
        <div class="player-list">
          ${n.map(o=>`
            <div class="player-slot">
              <div class="player-color-dot" style="background:${AA[o.color]}"></div>
              <span class="player-name">${NA(o.name)}</span>
              ${o.isHost?'<span class="host-badge">HOST</span>':""}
              ${o.id===t?'<span class="you-badge">YOU</span>':""}
            </div>
          `).join("")}
          ${Array.from({length:8-n.length},(o,l)=>`
            <div class="player-slot player-slot-empty">
              <div class="player-color-dot empty"></div>
              <span class="player-name-empty">Waiting${l===0&&n.length<8?"...":""}</span>
            </div>
          `).join("")}
        </div>
        <div id="form-error" class="form-error hidden"></div>
        <div class="form-actions">
          <button class="btn btn-ghost" id="btn-leave">Leave</button>
          ${r?`<button class="btn btn-primary" id="btn-start" ${s?"":"disabled"}>
            ${s?"Start Game":"Need 2+ players"}
          </button>`:'<p class="waiting-for-host">Waiting for host to start...</p>'}
        </div>
      </div>
    </div>
  `,document.getElementById("btn-leave")?.addEventListener("click",async()=>{ei&&(ei(),ei=null),window.removeEventListener("beforeunload",ym),await _m(i.code,t),ro(e)}),r&&document.getElementById("btn-start")?.addEventListener("click",async()=>{try{await RA(i.code,t)}catch(o){Vr(o.message)}})}function ym(){Ea&&xa&&_m(Ea,xa)}function Vr(i){const t=document.getElementById("form-error");t&&(t.textContent=i,t.classList.remove("hidden"))}function Sa(i){const t=document.getElementById("btn-confirm");t&&(t.disabled=i)}function NA(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const UA=document.getElementById("game-canvas"),ci=new FE({canvas:UA,antialias:!0});ci.setSize(window.innerWidth,window.innerHeight);ci.setPixelRatio(Math.min(window.devicePixelRatio,2));ci.shadowMap.enabled=!0;ci.shadowMap.type=Jd;ci.toneMapping=tf;ci.toneMappingExposure=1.2;const Ui=new OE;Ui.background=new ce(657935);Ui.fog=new Jc(657935,20,60);const Gs=new xn(45,window.innerWidth/window.innerHeight,.1,100);Gs.position.set(0,14,0);Gs.lookAt(0,0,0);const FA=new Ys(10,10),OA=new Lf({color:1710638}),Du=new Dn(FA,OA);Du.rotation.x=-Math.PI/2;Du.receiveShadow=!0;Ui.add(Du);const VA=new ts(1,1,1),BA=new Lf({color:8153847,metalness:.3,roughness:.4}),Ws=new Dn(VA,BA);Ws.position.y=.5;Ws.castShadow=!0;Ui.add(Ws);const kA=new kE(16777215,.3);Ui.add(kA);const Xn=new Uf(16774624,1.5);Xn.position.set(6,12,6);Xn.castShadow=!0;Xn.shadow.mapSize.set(2048,2048);Xn.shadow.camera.near=.1;Xn.shadow.camera.far=50;Xn.shadow.camera.left=-15;Xn.shadow.camera.right=15;Xn.shadow.camera.top=15;Xn.shadow.camera.bottom=-15;Ui.add(Xn);const Em=new Uf(10536191,.4);Em.position.set(-4,6,-4);Ui.add(Em);window.addEventListener("resize",()=>{Gs.aspect=window.innerWidth/window.innerHeight,Gs.updateProjectionMatrix(),ci.setSize(window.innerWidth,window.innerHeight),ci.setPixelRatio(Math.min(window.devicePixelRatio,2))});const zA=new zE;function xm(){const i=zA.getElapsedTime();Ws.rotation.x=i*.4,Ws.rotation.y=i*.7,ci.render(Ui,Gs),requestAnimationFrame(xm)}xm();function HA(i,t){console.log("Game starting",i.code,t,i.boardType)}ro({onGameStart:HA});
