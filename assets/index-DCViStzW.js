var og=Object.defineProperty;var ag=(i,t,e)=>t in i?og(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var In=(i,t,e)=>ag(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const eu="169",lg=0,Eh=1,cg=2,xf=1,Sf=2,oi=3,Ni=0,pn=1,li=2,Ci=0,zr=1,xh=2,Sh=3,Th=4,ug=5,tr=100,hg=101,dg=102,fg=103,pg=104,mg=200,gg=201,_g=202,vg=203,ql=204,Xl=205,yg=206,Eg=207,xg=208,Sg=209,Tg=210,Mg=211,Ag=212,wg=213,bg=214,jl=0,$l=1,Kl=2,jr=3,Yl=4,Ql=5,Jl=6,Zl=7,Tf=0,Rg=1,Cg=2,Ii=0,Ig=1,Pg=2,Dg=3,Mf=4,Lg=5,Ng=6,Ug=7,Af=300,$r=301,Kr=302,tc=303,ec=304,Pa=306,nc=1e3,nr=1001,ic=1002,wn=1003,Og=1004,Ao=1005,Nn=1006,el=1007,ir=1008,hi=1009,wf=1010,bf=1011,Gs=1012,nu=1013,ar=1014,ci=1015,Zs=1016,iu=1017,ru=1018,Yr=1020,Rf=35902,Cf=1021,If=1022,On=1023,Pf=1024,Df=1025,Hr=1026,Qr=1027,Lf=1028,su=1029,Nf=1030,ou=1031,au=1033,Qo=33776,Jo=33777,Zo=33778,ta=33779,rc=35840,sc=35841,oc=35842,ac=35843,lc=36196,cc=37492,uc=37496,hc=37808,dc=37809,fc=37810,pc=37811,mc=37812,gc=37813,_c=37814,vc=37815,yc=37816,Ec=37817,xc=37818,Sc=37819,Tc=37820,Mc=37821,ea=36492,Ac=36494,wc=36495,Uf=36283,bc=36284,Rc=36285,Cc=36286,Fg=3200,Vg=3201,Of=0,Bg=1,Ai="",zn="srgb",ki="srgb-linear",lu="display-p3",Da="display-p3-linear",ua="linear",Se="srgb",ha="rec709",da="p3",xr=7680,Mh=519,kg=512,zg=513,Hg=514,Ff=515,Gg=516,Wg=517,qg=518,Xg=519,Ah=35044,wh="300 es",ui=2e3,fa=2001;class cs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nl=Math.PI/180,Ic=180/Math.PI;function to(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function dn(i,t,e){return Math.max(t,Math.min(e,i))}function jg(i,t){return(i%t+t)%t}function il(i,t,e){return(1-e)*i+e*t}function ws(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function hn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class de{constructor(t=0,e=0){de.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(dn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(t,e,n,r,s,o,a,c,u){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,u)}set(t,e,n,r,s,o,a,c,u){const h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],u=n[1],h=n[4],f=n[7],p=n[2],v=n[5],x=n[8],A=r[0],g=r[3],_=r[6],D=r[1],P=r[4],N=r[7],z=r[2],U=r[5],S=r[8];return s[0]=o*A+a*D+c*z,s[3]=o*g+a*P+c*U,s[6]=o*_+a*N+c*S,s[1]=u*A+h*D+f*z,s[4]=u*g+h*P+f*U,s[7]=u*_+h*N+f*S,s[2]=p*A+v*D+x*z,s[5]=p*g+v*P+x*U,s[8]=p*_+v*N+x*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],u=t[7],h=t[8];return e*o*h-e*a*u-n*s*h+n*a*c+r*s*u-r*o*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],u=t[7],h=t[8],f=h*o-a*u,p=a*c-h*s,v=u*s-o*c,x=e*f+n*p+r*v;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/x;return t[0]=f*A,t[1]=(r*u-h*n)*A,t[2]=(a*n-r*o)*A,t[3]=p*A,t[4]=(h*e-r*c)*A,t[5]=(r*s-a*e)*A,t[6]=v*A,t[7]=(n*c-u*e)*A,t[8]=(o*e-n*s)*A,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*o+u*a)+o+t,-r*u,r*c,-r*(-u*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(rl.makeScale(t,e)),this}rotate(t){return this.premultiply(rl.makeRotation(-t)),this}translate(t,e){return this.premultiply(rl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const rl=new $t;function Vf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function pa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $g(){const i=pa("canvas");return i.style.display="block",i}const bh={};function na(i){i in bh||(bh[i]=!0,console.warn(i))}function Kg(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Yg(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Qg(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Rh=new $t().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ch=new $t().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),bs={[ki]:{transfer:ua,primaries:ha,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[zn]:{transfer:Se,primaries:ha,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Da]:{transfer:ua,primaries:da,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Ch),fromReference:i=>i.applyMatrix3(Rh)},[lu]:{transfer:Se,primaries:da,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ch),fromReference:i=>i.applyMatrix3(Rh).convertLinearToSRGB()}},Jg=new Set([ki,Da]),fe={enabled:!0,_workingColorSpace:ki,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Jg.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=bs[t].toReference,r=bs[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return bs[i].primaries},getTransfer:function(i){return i===Ai?ua:bs[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(bs[t].luminanceCoefficients)}};function Gr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function sl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Sr;class Zg{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Sr===void 0&&(Sr=pa("canvas")),Sr.width=t.width,Sr.height=t.height;const n=Sr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Sr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=pa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Gr(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gr(e[n]/255)*255):e[n]=Gr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let t_=0;class Bf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=to(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ol(r[o].image)):s.push(ol(r[o]))}else s=ol(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function ol(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let e_=0;class mn extends cs{constructor(t=mn.DEFAULT_IMAGE,e=mn.DEFAULT_MAPPING,n=nr,r=nr,s=Nn,o=ir,a=On,c=hi,u=mn.DEFAULT_ANISOTROPY,h=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=to(),this.name="",this.source=new Bf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Af)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case nc:t.x=t.x-Math.floor(t.x);break;case nr:t.x=t.x<0?0:1;break;case ic:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case nc:t.y=t.y-Math.floor(t.y);break;case nr:t.y=t.y<0?0:1;break;case ic:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=Af;mn.DEFAULT_ANISOTROPY=1;class Ie{constructor(t=0,e=0,n=0,r=1){Ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,u=c[0],h=c[4],f=c[8],p=c[1],v=c[5],x=c[9],A=c[2],g=c[6],_=c[10];if(Math.abs(h-p)<.01&&Math.abs(f-A)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+A)<.1&&Math.abs(x+g)<.1&&Math.abs(u+v+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const P=(u+1)/2,N=(v+1)/2,z=(_+1)/2,U=(h+p)/4,S=(f+A)/4,T=(x+g)/4;return P>N&&P>z?P<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(P),r=U/n,s=S/n):N>z?N<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(N),n=U/r,s=T/r):z<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(z),n=S/s,r=T/s),this.set(n,r,s,e),this}let D=Math.sqrt((g-x)*(g-x)+(f-A)*(f-A)+(p-h)*(p-h));return Math.abs(D)<.001&&(D=1),this.x=(g-x)/D,this.y=(f-A)/D,this.z=(p-h)/D,this.w=Math.acos((u+v+_-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class n_ extends cs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new mn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Bf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lr extends n_{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class kf extends mn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class i_ extends mn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eo{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let c=n[r+0],u=n[r+1],h=n[r+2],f=n[r+3];const p=s[o+0],v=s[o+1],x=s[o+2],A=s[o+3];if(a===0){t[e+0]=c,t[e+1]=u,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=p,t[e+1]=v,t[e+2]=x,t[e+3]=A;return}if(f!==A||c!==p||u!==v||h!==x){let g=1-a;const _=c*p+u*v+h*x+f*A,D=_>=0?1:-1,P=1-_*_;if(P>Number.EPSILON){const z=Math.sqrt(P),U=Math.atan2(z,_*D);g=Math.sin(g*U)/z,a=Math.sin(a*U)/z}const N=a*D;if(c=c*g+p*N,u=u*g+v*N,h=h*g+x*N,f=f*g+A*N,g===1-a){const z=1/Math.sqrt(c*c+u*u+h*h+f*f);c*=z,u*=z,h*=z,f*=z}}t[e]=c,t[e+1]=u,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],c=n[r+1],u=n[r+2],h=n[r+3],f=s[o],p=s[o+1],v=s[o+2],x=s[o+3];return t[e]=a*x+h*f+c*v-u*p,t[e+1]=c*x+h*p+u*f-a*v,t[e+2]=u*x+h*v+a*p-c*f,t[e+3]=h*x-a*f-c*p-u*v,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,u=a(n/2),h=a(r/2),f=a(s/2),p=c(n/2),v=c(r/2),x=c(s/2);switch(o){case"XYZ":this._x=p*h*f+u*v*x,this._y=u*v*f-p*h*x,this._z=u*h*x+p*v*f,this._w=u*h*f-p*v*x;break;case"YXZ":this._x=p*h*f+u*v*x,this._y=u*v*f-p*h*x,this._z=u*h*x-p*v*f,this._w=u*h*f+p*v*x;break;case"ZXY":this._x=p*h*f-u*v*x,this._y=u*v*f+p*h*x,this._z=u*h*x+p*v*f,this._w=u*h*f-p*v*x;break;case"ZYX":this._x=p*h*f-u*v*x,this._y=u*v*f+p*h*x,this._z=u*h*x-p*v*f,this._w=u*h*f+p*v*x;break;case"YZX":this._x=p*h*f+u*v*x,this._y=u*v*f+p*h*x,this._z=u*h*x-p*v*f,this._w=u*h*f-p*v*x;break;case"XZY":this._x=p*h*f-u*v*x,this._y=u*v*f-p*h*x,this._z=u*h*x+p*v*f,this._w=u*h*f+p*v*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],u=e[2],h=e[6],f=e[10],p=n+a+f;if(p>0){const v=.5/Math.sqrt(p+1);this._w=.25/v,this._x=(h-c)*v,this._y=(s-u)*v,this._z=(o-r)*v}else if(n>a&&n>f){const v=2*Math.sqrt(1+n-a-f);this._w=(h-c)/v,this._x=.25*v,this._y=(r+o)/v,this._z=(s+u)/v}else if(a>f){const v=2*Math.sqrt(1+a-n-f);this._w=(s-u)/v,this._x=(r+o)/v,this._y=.25*v,this._z=(c+h)/v}else{const v=2*Math.sqrt(1+f-n-a);this._w=(o-r)/v,this._x=(s+u)/v,this._y=(c+h)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(dn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,u=e._z,h=e._w;return this._x=n*h+o*a+r*u-s*c,this._y=r*h+o*c+s*a-n*u,this._z=s*h+o*u+n*c-r*a,this._w=o*h-n*a-r*c-s*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const v=1-e;return this._w=v*o+e*this._w,this._x=v*n+e*this._x,this._y=v*r+e*this._y,this._z=v*s+e*this._z,this.normalize(),this}const u=Math.sqrt(c),h=Math.atan2(u,a),f=Math.sin((1-e)*h)/u,p=Math.sin(e*h)/u;return this._w=o*f+this._w*p,this._x=n*f+this._x*p,this._y=r*f+this._y*p,this._z=s*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(t=0,e=0,n=0){W.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ih.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ih.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,u=2*(o*r-a*n),h=2*(a*e-s*r),f=2*(s*n-o*e);return this.x=e+c*u+o*f-a*h,this.y=n+c*h+a*u-s*f,this.z=r+c*f+s*h-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return al.copy(this).projectOnVector(t),this.sub(al)}reflect(t){return this.sub(al.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(dn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const al=new W,Ih=new eo;class no{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Pn):Pn.fromBufferAttribute(s,o),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wo.copy(n.boundingBox)),wo.applyMatrix4(t.matrixWorld),this.union(wo)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rs),bo.subVectors(this.max,Rs),Tr.subVectors(t.a,Rs),Mr.subVectors(t.b,Rs),Ar.subVectors(t.c,Rs),yi.subVectors(Mr,Tr),Ei.subVectors(Ar,Mr),qi.subVectors(Tr,Ar);let e=[0,-yi.z,yi.y,0,-Ei.z,Ei.y,0,-qi.z,qi.y,yi.z,0,-yi.x,Ei.z,0,-Ei.x,qi.z,0,-qi.x,-yi.y,yi.x,0,-Ei.y,Ei.x,0,-qi.y,qi.x,0];return!ll(e,Tr,Mr,Ar,bo)||(e=[1,0,0,0,1,0,0,0,1],!ll(e,Tr,Mr,Ar,bo))?!1:(Ro.crossVectors(yi,Ei),e=[Ro.x,Ro.y,Ro.z],ll(e,Tr,Mr,Ar,bo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ei=[new W,new W,new W,new W,new W,new W,new W,new W],Pn=new W,wo=new no,Tr=new W,Mr=new W,Ar=new W,yi=new W,Ei=new W,qi=new W,Rs=new W,bo=new W,Ro=new W,Xi=new W;function ll(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Xi.fromArray(i,s);const a=r.x*Math.abs(Xi.x)+r.y*Math.abs(Xi.y)+r.z*Math.abs(Xi.z),c=t.dot(Xi),u=e.dot(Xi),h=n.dot(Xi);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>a)return!1}return!0}const r_=new no,Cs=new W,cl=new W;class cu{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):r_.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cs.subVectors(t,this.center);const e=Cs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Cs,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cs.copy(t.center).add(cl)),this.expandByPoint(Cs.copy(t.center).sub(cl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new W,ul=new W,Co=new W,xi=new W,hl=new W,Io=new W,dl=new W;class zf{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ni.copy(this.origin).addScaledVector(this.direction,e),ni.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){ul.copy(t).add(e).multiplyScalar(.5),Co.copy(e).sub(t).normalize(),xi.copy(this.origin).sub(ul);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Co),a=xi.dot(this.direction),c=-xi.dot(Co),u=xi.lengthSq(),h=Math.abs(1-o*o);let f,p,v,x;if(h>0)if(f=o*c-a,p=o*a-c,x=s*h,f>=0)if(p>=-x)if(p<=x){const A=1/h;f*=A,p*=A,v=f*(f+o*p+2*a)+p*(o*f+p+2*c)+u}else p=s,f=Math.max(0,-(o*p+a)),v=-f*f+p*(p+2*c)+u;else p=-s,f=Math.max(0,-(o*p+a)),v=-f*f+p*(p+2*c)+u;else p<=-x?(f=Math.max(0,-(-o*s+a)),p=f>0?-s:Math.min(Math.max(-s,-c),s),v=-f*f+p*(p+2*c)+u):p<=x?(f=0,p=Math.min(Math.max(-s,-c),s),v=p*(p+2*c)+u):(f=Math.max(0,-(o*s+a)),p=f>0?s:Math.min(Math.max(-s,-c),s),v=-f*f+p*(p+2*c)+u);else p=o>0?-s:s,f=Math.max(0,-(o*p+a)),v=-f*f+p*(p+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ul).addScaledVector(Co,p),v}intersectSphere(t,e){ni.subVectors(t.center,this.origin);const n=ni.dot(this.direction),r=ni.dot(ni)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,c;const u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return u>=0?(n=(t.min.x-p.x)*u,r=(t.max.x-p.x)*u):(n=(t.max.x-p.x)*u,r=(t.min.x-p.x)*u),h>=0?(s=(t.min.y-p.y)*h,o=(t.max.y-p.y)*h):(s=(t.max.y-p.y)*h,o=(t.min.y-p.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-p.z)*f,c=(t.max.z-p.z)*f):(a=(t.max.z-p.z)*f,c=(t.min.z-p.z)*f),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,ni)!==null}intersectTriangle(t,e,n,r,s){hl.subVectors(e,t),Io.subVectors(n,t),dl.crossVectors(hl,Io);let o=this.direction.dot(dl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xi.subVectors(this.origin,t);const c=a*this.direction.dot(Io.crossVectors(xi,Io));if(c<0)return null;const u=a*this.direction.dot(hl.cross(xi));if(u<0||c+u>o)return null;const h=-a*xi.dot(dl);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ae{constructor(t,e,n,r,s,o,a,c,u,h,f,p,v,x,A,g){Ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,u,h,f,p,v,x,A,g)}set(t,e,n,r,s,o,a,c,u,h,f,p,v,x,A,g){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=r,_[1]=s,_[5]=o,_[9]=a,_[13]=c,_[2]=u,_[6]=h,_[10]=f,_[14]=p,_[3]=v,_[7]=x,_[11]=A,_[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/wr.setFromMatrixColumn(t,0).length(),s=1/wr.setFromMatrixColumn(t,1).length(),o=1/wr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),u=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const p=o*h,v=o*f,x=a*h,A=a*f;e[0]=c*h,e[4]=-c*f,e[8]=u,e[1]=v+x*u,e[5]=p-A*u,e[9]=-a*c,e[2]=A-p*u,e[6]=x+v*u,e[10]=o*c}else if(t.order==="YXZ"){const p=c*h,v=c*f,x=u*h,A=u*f;e[0]=p+A*a,e[4]=x*a-v,e[8]=o*u,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=v*a-x,e[6]=A+p*a,e[10]=o*c}else if(t.order==="ZXY"){const p=c*h,v=c*f,x=u*h,A=u*f;e[0]=p-A*a,e[4]=-o*f,e[8]=x+v*a,e[1]=v+x*a,e[5]=o*h,e[9]=A-p*a,e[2]=-o*u,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const p=o*h,v=o*f,x=a*h,A=a*f;e[0]=c*h,e[4]=x*u-v,e[8]=p*u+A,e[1]=c*f,e[5]=A*u+p,e[9]=v*u-x,e[2]=-u,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const p=o*c,v=o*u,x=a*c,A=a*u;e[0]=c*h,e[4]=A-p*f,e[8]=x*f+v,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-u*h,e[6]=v*f+x,e[10]=p-A*f}else if(t.order==="XZY"){const p=o*c,v=o*u,x=a*c,A=a*u;e[0]=c*h,e[4]=-f,e[8]=u*h,e[1]=p*f+A,e[5]=o*h,e[9]=v*f-x,e[2]=x*f-v,e[6]=a*h,e[10]=A*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(s_,t,o_)}lookAt(t,e,n){const r=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Si.crossVectors(n,yn),Si.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Si.crossVectors(n,yn)),Si.normalize(),Po.crossVectors(yn,Si),r[0]=Si.x,r[4]=Po.x,r[8]=yn.x,r[1]=Si.y,r[5]=Po.y,r[9]=yn.y,r[2]=Si.z,r[6]=Po.z,r[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],u=n[12],h=n[1],f=n[5],p=n[9],v=n[13],x=n[2],A=n[6],g=n[10],_=n[14],D=n[3],P=n[7],N=n[11],z=n[15],U=r[0],S=r[4],T=r[8],C=r[12],m=r[1],y=r[5],I=r[9],M=r[13],Y=r[2],et=r[6],j=r[10],nt=r[14],K=r[3],yt=r[7],Et=r[11],Rt=r[15];return s[0]=o*U+a*m+c*Y+u*K,s[4]=o*S+a*y+c*et+u*yt,s[8]=o*T+a*I+c*j+u*Et,s[12]=o*C+a*M+c*nt+u*Rt,s[1]=h*U+f*m+p*Y+v*K,s[5]=h*S+f*y+p*et+v*yt,s[9]=h*T+f*I+p*j+v*Et,s[13]=h*C+f*M+p*nt+v*Rt,s[2]=x*U+A*m+g*Y+_*K,s[6]=x*S+A*y+g*et+_*yt,s[10]=x*T+A*I+g*j+_*Et,s[14]=x*C+A*M+g*nt+_*Rt,s[3]=D*U+P*m+N*Y+z*K,s[7]=D*S+P*y+N*et+z*yt,s[11]=D*T+P*I+N*j+z*Et,s[15]=D*C+P*M+N*nt+z*Rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],u=t[13],h=t[2],f=t[6],p=t[10],v=t[14],x=t[3],A=t[7],g=t[11],_=t[15];return x*(+s*c*f-r*u*f-s*a*p+n*u*p+r*a*v-n*c*v)+A*(+e*c*v-e*u*p+s*o*p-r*o*v+r*u*h-s*c*h)+g*(+e*u*f-e*a*v-s*o*f+n*o*v+s*a*h-n*u*h)+_*(-r*a*h-e*c*f+e*a*p+r*o*f-n*o*p+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],u=t[7],h=t[8],f=t[9],p=t[10],v=t[11],x=t[12],A=t[13],g=t[14],_=t[15],D=f*g*u-A*p*u+A*c*v-a*g*v-f*c*_+a*p*_,P=x*p*u-h*g*u-x*c*v+o*g*v+h*c*_-o*p*_,N=h*A*u-x*f*u+x*a*v-o*A*v-h*a*_+o*f*_,z=x*f*c-h*A*c-x*a*p+o*A*p+h*a*g-o*f*g,U=e*D+n*P+r*N+s*z;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/U;return t[0]=D*S,t[1]=(A*p*s-f*g*s-A*r*v+n*g*v+f*r*_-n*p*_)*S,t[2]=(a*g*s-A*c*s+A*r*u-n*g*u-a*r*_+n*c*_)*S,t[3]=(f*c*s-a*p*s-f*r*u+n*p*u+a*r*v-n*c*v)*S,t[4]=P*S,t[5]=(h*g*s-x*p*s+x*r*v-e*g*v-h*r*_+e*p*_)*S,t[6]=(x*c*s-o*g*s-x*r*u+e*g*u+o*r*_-e*c*_)*S,t[7]=(o*p*s-h*c*s+h*r*u-e*p*u-o*r*v+e*c*v)*S,t[8]=N*S,t[9]=(x*f*s-h*A*s-x*n*v+e*A*v+h*n*_-e*f*_)*S,t[10]=(o*A*s-x*a*s+x*n*u-e*A*u-o*n*_+e*a*_)*S,t[11]=(h*a*s-o*f*s-h*n*u+e*f*u+o*n*v-e*a*v)*S,t[12]=z*S,t[13]=(h*A*r-x*f*r+x*n*p-e*A*p-h*n*g+e*f*g)*S,t[14]=(x*a*r-o*A*r-x*n*c+e*A*c+o*n*g-e*a*g)*S,t[15]=(o*f*r-h*a*r+h*n*c-e*f*c-o*n*p+e*a*p)*S,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,u=s*o,h=s*a;return this.set(u*o+n,u*a-r*c,u*c+r*a,0,u*a+r*c,h*a+n,h*c-r*o,0,u*c-r*a,h*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,u=s+s,h=o+o,f=a+a,p=s*u,v=s*h,x=s*f,A=o*h,g=o*f,_=a*f,D=c*u,P=c*h,N=c*f,z=n.x,U=n.y,S=n.z;return r[0]=(1-(A+_))*z,r[1]=(v+N)*z,r[2]=(x-P)*z,r[3]=0,r[4]=(v-N)*U,r[5]=(1-(p+_))*U,r[6]=(g+D)*U,r[7]=0,r[8]=(x+P)*S,r[9]=(g-D)*S,r[10]=(1-(p+A))*S,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=wr.set(r[0],r[1],r[2]).length();const o=wr.set(r[4],r[5],r[6]).length(),a=wr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Dn.copy(this);const u=1/s,h=1/o,f=1/a;return Dn.elements[0]*=u,Dn.elements[1]*=u,Dn.elements[2]*=u,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=f,Dn.elements[9]*=f,Dn.elements[10]*=f,e.setFromRotationMatrix(Dn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=ui){const c=this.elements,u=2*s/(e-t),h=2*s/(n-r),f=(e+t)/(e-t),p=(n+r)/(n-r);let v,x;if(a===ui)v=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===fa)v=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=ui){const c=this.elements,u=1/(e-t),h=1/(n-r),f=1/(o-s),p=(e+t)*u,v=(n+r)*h;let x,A;if(a===ui)x=(o+s)*f,A=-2*f;else if(a===fa)x=s*f,A=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-v,c[2]=0,c[6]=0,c[10]=A,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const wr=new W,Dn=new Ae,s_=new W(0,0,0),o_=new W(1,1,1),Si=new W,Po=new W,yn=new W,Ph=new Ae,Dh=new eo;class Kn{constructor(t=0,e=0,n=0,r=Kn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],u=r[5],h=r[9],f=r[2],p=r[6],v=r[10];switch(e){case"XYZ":this._y=Math.asin(dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,v),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,v),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(dn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,v),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-dn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,v),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(dn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,v));break;case"XZY":this._z=Math.asin(-dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ph.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ph,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Dh.setFromEuler(this),this.setFromQuaternion(Dh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kn.DEFAULT_ORDER="XYZ";class uu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let a_=0;const Lh=new W,br=new eo,ii=new Ae,Do=new W,Is=new W,l_=new W,c_=new eo,Nh=new W(1,0,0),Uh=new W(0,1,0),Oh=new W(0,0,1),Fh={type:"added"},u_={type:"removed"},Rr={type:"childadded",child:null},fl={type:"childremoved",child:null};class on extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=to(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const t=new W,e=new Kn,n=new eo,r=new W(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ae},normalMatrix:{value:new $t}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return br.setFromAxisAngle(t,e),this.quaternion.multiply(br),this}rotateOnWorldAxis(t,e){return br.setFromAxisAngle(t,e),this.quaternion.premultiply(br),this}rotateX(t){return this.rotateOnAxis(Nh,t)}rotateY(t){return this.rotateOnAxis(Uh,t)}rotateZ(t){return this.rotateOnAxis(Oh,t)}translateOnAxis(t,e){return Lh.copy(t).applyQuaternion(this.quaternion),this.position.add(Lh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nh,t)}translateY(t){return this.translateOnAxis(Uh,t)}translateZ(t){return this.translateOnAxis(Oh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Do.copy(t):Do.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Is,Do,this.up):ii.lookAt(Do,Is,this.up),this.quaternion.setFromRotationMatrix(ii),r&&(ii.extractRotation(r.matrixWorld),br.setFromRotationMatrix(ii),this.quaternion.premultiply(br.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fh),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(u_),fl.child=t,this.dispatchEvent(fl),fl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fh),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,t,l_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,c_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const f=c[u];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),u=o(t.textures),h=o(t.images),f=o(t.shapes),p=o(t.skeletons),v=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),v.length>0&&(n.animations=v),x.length>0&&(n.nodes=x)}return n.object=r,n;function o(a){const c=[];for(const u in a){const h=a[u];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}on.DEFAULT_UP=new W(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new W,ri=new W,pl=new W,si=new W,Cr=new W,Ir=new W,Vh=new W,ml=new W,gl=new W,_l=new W,vl=new Ie,yl=new Ie,El=new Ie;class Un{constructor(t=new W,e=new W,n=new W){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Ln.subVectors(t,e),r.cross(Ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Ln.subVectors(r,e),ri.subVectors(n,e),pl.subVectors(t,e);const o=Ln.dot(Ln),a=Ln.dot(ri),c=Ln.dot(pl),u=ri.dot(ri),h=ri.dot(pl),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const p=1/f,v=(u*c-a*h)*p,x=(o*h-a*c)*p;return s.set(1-v-x,x,v)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(t,e,n,r,s,o,a,c){return this.getBarycoord(t,e,n,r,si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,si.x),c.addScaledVector(o,si.y),c.addScaledVector(a,si.z),c)}static getInterpolatedAttribute(t,e,n,r,s,o){return vl.setScalar(0),yl.setScalar(0),El.setScalar(0),vl.fromBufferAttribute(t,e),yl.fromBufferAttribute(t,n),El.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(vl,s.x),o.addScaledVector(yl,s.y),o.addScaledVector(El,s.z),o}static isFrontFacing(t,e,n,r){return Ln.subVectors(n,e),ri.subVectors(t,e),Ln.cross(ri).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Ln.cross(ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Un.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;Cr.subVectors(r,n),Ir.subVectors(s,n),ml.subVectors(t,n);const c=Cr.dot(ml),u=Ir.dot(ml);if(c<=0&&u<=0)return e.copy(n);gl.subVectors(t,r);const h=Cr.dot(gl),f=Ir.dot(gl);if(h>=0&&f<=h)return e.copy(r);const p=c*f-h*u;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Cr,o);_l.subVectors(t,s);const v=Cr.dot(_l),x=Ir.dot(_l);if(x>=0&&v<=x)return e.copy(s);const A=v*u-c*x;if(A<=0&&u>=0&&x<=0)return a=u/(u-x),e.copy(n).addScaledVector(Ir,a);const g=h*x-v*f;if(g<=0&&f-h>=0&&v-x>=0)return Vh.subVectors(s,r),a=(f-h)/(f-h+(v-x)),e.copy(r).addScaledVector(Vh,a);const _=1/(g+A+p);return o=A*_,a=p*_,e.copy(n).addScaledVector(Cr,o).addScaledVector(Ir,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},Lo={h:0,s:0,l:0};function xl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=zn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=fe.workingColorSpace){if(t=jg(t,1),e=dn(e,0,1),n=dn(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=xl(o,s,t+1/3),this.g=xl(o,s,t),this.b=xl(o,s,t-1/3)}return fe.toWorkingColorSpace(this,r),this}setStyle(t,e=zn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=zn){const n=Hf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gr(t.r),this.g=Gr(t.g),this.b=Gr(t.b),this}copyLinearToSRGB(t){return this.r=sl(t.r),this.g=sl(t.g),this.b=sl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=zn){return fe.fromWorkingColorSpace(tn.copy(this),t),Math.round(dn(tn.r*255,0,255))*65536+Math.round(dn(tn.g*255,0,255))*256+Math.round(dn(tn.b*255,0,255))}getHexString(t=zn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.fromWorkingColorSpace(tn.copy(this),e);const n=tn.r,r=tn.g,s=tn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,u;const h=(a+o)/2;if(a===o)c=0,u=0;else{const f=o-a;switch(u=h<=.5?f/(o+a):f/(2-o-a),o){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return t.h=c,t.s=u,t.l=h,t}getRGB(t,e=fe.workingColorSpace){return fe.fromWorkingColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=zn){fe.fromWorkingColorSpace(tn.copy(this),t);const e=tn.r,n=tn.g,r=tn.b;return t!==zn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Ti),this.setHSL(Ti.h+t,Ti.s+e,Ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ti),t.getHSL(Lo);const n=il(Ti.h,Lo.h,e),r=il(Ti.s,Lo.s,e),s=il(Ti.l,Lo.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new Zt;Zt.NAMES=Hf;let h_=0;class io extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:h_++}),this.uuid=to(),this.name="",this.type="Material",this.blending=zr,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ql,this.blendDst=Xl,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xr,this.stencilZFail=xr,this.stencilZPass=xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zr&&(n.blending=this.blending),this.side!==Ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ql&&(n.blendSrc=this.blendSrc),this.blendDst!==Xl&&(n.blendDst=this.blendDst),this.blendEquation!==tr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==jr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Gf extends io{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Tf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new W,No=new de;class Wn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ah,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)No.fromBufferAttribute(this,e),No.applyMatrix3(t),this.setXY(e,No.x,No.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ws(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=hn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ws(e,this.array)),e}setX(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ws(e,this.array)),e}setY(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ws(e,this.array)),e}setZ(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ws(e,this.array)),e}setW(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array),r=hn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array),r=hn(r,this.array),s=hn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ah&&(t.usage=this.usage),t}}class Wf extends Wn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class qf extends Wn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class an extends Wn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let d_=0;const Tn=new Ae,Sl=new on,Pr=new W,En=new no,Ps=new no,He=new W;class Jn extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=to(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vf(t)?qf:Wf)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new $t().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Tn.makeRotationFromQuaternion(t),this.applyMatrix4(Tn),this}rotateX(t){return Tn.makeRotationX(t),this.applyMatrix4(Tn),this}rotateY(t){return Tn.makeRotationY(t),this.applyMatrix4(Tn),this}rotateZ(t){return Tn.makeRotationZ(t),this.applyMatrix4(Tn),this}translate(t,e,n){return Tn.makeTranslation(t,e,n),this.applyMatrix4(Tn),this}scale(t,e,n){return Tn.makeScale(t,e,n),this.applyMatrix4(Tn),this}lookAt(t){return Sl.lookAt(t),Sl.updateMatrix(),this.applyMatrix4(Sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new an(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new no);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];En.setFromBufferAttribute(s),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cu);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){const n=this.boundingSphere.center;if(En.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Ps.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(En.min,Ps.min),En.expandByPoint(He),He.addVectors(En.max,Ps.max),En.expandByPoint(He)):(En.expandByPoint(Ps.min),En.expandByPoint(Ps.max))}En.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)He.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(He));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)He.fromBufferAttribute(a,u),c&&(Pr.fromBufferAttribute(t,u),He.add(Pr)),r=Math.max(r,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let T=0;T<n.count;T++)a[T]=new W,c[T]=new W;const u=new W,h=new W,f=new W,p=new de,v=new de,x=new de,A=new W,g=new W;function _(T,C,m){u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,C),f.fromBufferAttribute(n,m),p.fromBufferAttribute(s,T),v.fromBufferAttribute(s,C),x.fromBufferAttribute(s,m),h.sub(u),f.sub(u),v.sub(p),x.sub(p);const y=1/(v.x*x.y-x.x*v.y);isFinite(y)&&(A.copy(h).multiplyScalar(x.y).addScaledVector(f,-v.y).multiplyScalar(y),g.copy(f).multiplyScalar(v.x).addScaledVector(h,-x.x).multiplyScalar(y),a[T].add(A),a[C].add(A),a[m].add(A),c[T].add(g),c[C].add(g),c[m].add(g))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let T=0,C=D.length;T<C;++T){const m=D[T],y=m.start,I=m.count;for(let M=y,Y=y+I;M<Y;M+=3)_(t.getX(M+0),t.getX(M+1),t.getX(M+2))}const P=new W,N=new W,z=new W,U=new W;function S(T){z.fromBufferAttribute(r,T),U.copy(z);const C=a[T];P.copy(C),P.sub(z.multiplyScalar(z.dot(C))).normalize(),N.crossVectors(U,C);const y=N.dot(c[T])<0?-1:1;o.setXYZW(T,P.x,P.y,P.z,y)}for(let T=0,C=D.length;T<C;++T){const m=D[T],y=m.start,I=m.count;for(let M=y,Y=y+I;M<Y;M+=3)S(t.getX(M+0)),S(t.getX(M+1)),S(t.getX(M+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,v=n.count;p<v;p++)n.setXYZ(p,0,0,0);const r=new W,s=new W,o=new W,a=new W,c=new W,u=new W,h=new W,f=new W;if(t)for(let p=0,v=t.count;p<v;p+=3){const x=t.getX(p+0),A=t.getX(p+1),g=t.getX(p+2);r.fromBufferAttribute(e,x),s.fromBufferAttribute(e,A),o.fromBufferAttribute(e,g),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,g),a.add(h),c.add(h),u.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(A,c.x,c.y,c.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let p=0,v=e.count;p<v;p+=3)r.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,c){const u=a.array,h=a.itemSize,f=a.normalized,p=new u.constructor(c.length*h);let v=0,x=0;for(let A=0,g=c.length;A<g;A++){a.isInterleavedBufferAttribute?v=c[A]*a.data.stride+a.offset:v=c[A]*h;for(let _=0;_<h;_++)p[x++]=u[v++]}return new Wn(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Jn,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],u=t(c,n);e.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const c=[],u=s[a];for(let h=0,f=u.length;h<f;h++){const p=u[h],v=t(p,n);c.push(v)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const u=n[c];t.data.attributes[c]=u.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let f=0,p=u.length;f<p;f++){const v=u[f];h.push(v.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(e))}const s=t.morphAttributes;for(const u in s){const h=[],f=s[u];for(let p=0,v=f.length;p<v;p++)h.push(f[p].clone(e));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,h=o.length;u<h;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bh=new Ae,ji=new zf,Uo=new cu,kh=new W,Oo=new W,Fo=new W,Vo=new W,Tl=new W,Bo=new W,zh=new W,ko=new W;class sn extends on{constructor(t=new Jn,e=new Gf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Bo.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const h=a[c],f=s[c];h!==0&&(Tl.fromBufferAttribute(f,t),o?Bo.addScaledVector(Tl,h):Bo.addScaledVector(Tl.sub(e),h))}e.add(Bo)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(s),ji.copy(t.ray).recast(t.near),!(Uo.containsPoint(ji.origin)===!1&&(ji.intersectSphere(Uo,kh)===null||ji.origin.distanceToSquared(kh)>(t.far-t.near)**2))&&(Bh.copy(s).invert(),ji.copy(t.ray).applyMatrix4(Bh),!(n.boundingBox!==null&&ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ji)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,p=s.groups,v=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,A=p.length;x<A;x++){const g=p[x],_=o[g.materialIndex],D=Math.max(g.start,v.start),P=Math.min(a.count,Math.min(g.start+g.count,v.start+v.count));for(let N=D,z=P;N<z;N+=3){const U=a.getX(N),S=a.getX(N+1),T=a.getX(N+2);r=zo(this,_,t,n,u,h,f,U,S,T),r&&(r.faceIndex=Math.floor(N/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const x=Math.max(0,v.start),A=Math.min(a.count,v.start+v.count);for(let g=x,_=A;g<_;g+=3){const D=a.getX(g),P=a.getX(g+1),N=a.getX(g+2);r=zo(this,o,t,n,u,h,f,D,P,N),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,A=p.length;x<A;x++){const g=p[x],_=o[g.materialIndex],D=Math.max(g.start,v.start),P=Math.min(c.count,Math.min(g.start+g.count,v.start+v.count));for(let N=D,z=P;N<z;N+=3){const U=N,S=N+1,T=N+2;r=zo(this,_,t,n,u,h,f,U,S,T),r&&(r.faceIndex=Math.floor(N/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const x=Math.max(0,v.start),A=Math.min(c.count,v.start+v.count);for(let g=x,_=A;g<_;g+=3){const D=g,P=g+1,N=g+2;r=zo(this,o,t,n,u,h,f,D,P,N),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}}function f_(i,t,e,n,r,s,o,a){let c;if(t.side===pn?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,t.side===Ni,a),c===null)return null;ko.copy(a),ko.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(ko);return u<e.near||u>e.far?null:{distance:u,point:ko.clone(),object:i}}function zo(i,t,e,n,r,s,o,a,c,u){i.getVertexPosition(a,Oo),i.getVertexPosition(c,Fo),i.getVertexPosition(u,Vo);const h=f_(i,t,e,n,Oo,Fo,Vo,zh);if(h){const f=new W;Un.getBarycoord(zh,Oo,Fo,Vo,f),r&&(h.uv=Un.getInterpolatedAttribute(r,a,c,u,f,new de)),s&&(h.uv1=Un.getInterpolatedAttribute(s,a,c,u,f,new de)),o&&(h.normal=Un.getInterpolatedAttribute(o,a,c,u,f,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a,b:c,c:u,normal:new W,materialIndex:0};Un.getNormal(Oo,Fo,Vo,p.normal),h.face=p,h.barycoord=f}return h}class zi extends Jn{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],u=[],h=[],f=[];let p=0,v=0;x("z","y","x",-1,-1,n,e,t,o,s,0),x("z","y","x",1,-1,n,e,-t,o,s,1),x("x","z","y",1,1,t,n,e,r,o,2),x("x","z","y",1,-1,t,n,-e,r,o,3),x("x","y","z",1,-1,t,e,n,r,s,4),x("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new an(u,3)),this.setAttribute("normal",new an(h,3)),this.setAttribute("uv",new an(f,2));function x(A,g,_,D,P,N,z,U,S,T,C){const m=N/S,y=z/T,I=N/2,M=z/2,Y=U/2,et=S+1,j=T+1;let nt=0,K=0;const yt=new W;for(let Et=0;Et<j;Et++){const Rt=Et*y-M;for(let Xt=0;Xt<et;Xt++){const Bt=Xt*m-I;yt[A]=Bt*D,yt[g]=Rt*P,yt[_]=Y,u.push(yt.x,yt.y,yt.z),yt[A]=0,yt[g]=0,yt[_]=U>0?1:-1,h.push(yt.x,yt.y,yt.z),f.push(Xt/S),f.push(1-Et/T),nt+=1}}for(let Et=0;Et<T;Et++)for(let Rt=0;Rt<S;Rt++){const Xt=p+Rt+et*Et,Bt=p+Rt+et*(Et+1),Q=p+(Rt+1)+et*(Et+1),ot=p+(Rt+1)+et*Et;c.push(Xt,Bt,ot),c.push(Bt,Q,ot),K+=6}a.addGroup(v,K,C),v+=K,p+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Jr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function cn(i){const t={};for(let e=0;e<i.length;e++){const n=Jr(i[e]);for(const r in n)t[r]=n[r]}return t}function p_(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Xf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}const m_={clone:Jr,merge:cn};var g_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,__=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends io{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=g_,this.fragmentShader=__,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Jr(t.uniforms),this.uniformsGroups=p_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class jf extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=ui}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new W,Hh=new de,Gh=new de;class An extends jf{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ic*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(nl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ic*2*Math.atan(Math.tan(nl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z)}getViewSize(t,e){return this.getViewBounds(t,Hh,Gh),e.subVectors(Gh,Hh)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(nl*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/u,r*=o.width/c,n*=o.height/u}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Dr=-90,Lr=1;class v_ extends on{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new An(Dr,Lr,t,e);r.layers=this.layers,this.add(r);const s=new An(Dr,Lr,t,e);s.layers=this.layers,this.add(s);const o=new An(Dr,Lr,t,e);o.layers=this.layers,this.add(o);const a=new An(Dr,Lr,t,e);a.layers=this.layers,this.add(a);const c=new An(Dr,Lr,t,e);c.layers=this.layers,this.add(c);const u=new An(Dr,Lr,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,c]=e;for(const u of e)this.remove(u);if(t===ui)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===fa)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,u,h]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),v=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,u),n.texture.generateMipmaps=A,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(f,p,v),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class $f extends mn{constructor(t,e,n,r,s,o,a,c,u,h){t=t!==void 0?t:[],e=e!==void 0?e:$r,super(t,e,n,r,s,o,a,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class y_ extends lr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new $f(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new zi(5,5,5),s=new Ui({name:"CubemapFromEquirect",uniforms:Jr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:Ci});s.uniforms.tEquirect.value=e;const o=new sn(r,s),a=e.minFilter;return e.minFilter===ir&&(e.minFilter=Nn),new v_(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const Ml=new W,E_=new W,x_=new $t;class Qi{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Ml.subVectors(n,e).cross(E_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ml),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||x_.getNormalMatrix(t),r=this.coplanarPoint(Ml).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $i=new cu,Ho=new W;class hu{constructor(t=new Qi,e=new Qi,n=new Qi,r=new Qi,s=new Qi,o=new Qi){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ui){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],u=r[4],h=r[5],f=r[6],p=r[7],v=r[8],x=r[9],A=r[10],g=r[11],_=r[12],D=r[13],P=r[14],N=r[15];if(n[0].setComponents(c-s,p-u,g-v,N-_).normalize(),n[1].setComponents(c+s,p+u,g+v,N+_).normalize(),n[2].setComponents(c+o,p+h,g+x,N+D).normalize(),n[3].setComponents(c-o,p-h,g-x,N-D).normalize(),n[4].setComponents(c-a,p-f,g-A,N-P).normalize(),e===ui)n[5].setComponents(c+a,p+f,g+A,N+P).normalize();else if(e===fa)n[5].setComponents(a,f,A,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(t){return $i.center.set(0,0,0),$i.radius=.7071067811865476,$i.applyMatrix4(t.matrixWorld),this.intersectsSphere($i)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Ho.x=r.normal.x>0?t.max.x:t.min.x,Ho.y=r.normal.y>0?t.max.y:t.min.y,Ho.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ho)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kf(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function S_(i){const t=new WeakMap;function e(a,c){const u=a.array,h=a.usage,f=u.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,u,h),a.onUploadCallback();let v;if(u instanceof Float32Array)v=i.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?v=i.HALF_FLOAT:v=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=i.SHORT;else if(u instanceof Uint32Array)v=i.UNSIGNED_INT;else if(u instanceof Int32Array)v=i.INT;else if(u instanceof Int8Array)v=i.BYTE;else if(u instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,u){const h=c.array,f=c.updateRanges;if(i.bindBuffer(u,a),f.length===0)i.bufferSubData(u,0,h);else{f.sort((v,x)=>v.start-x.start);let p=0;for(let v=1;v<f.length;v++){const x=f[p],A=f[v];A.start<=x.start+x.count+1?x.count=Math.max(x.count,A.start+A.count-x.start):(++p,f[p]=A)}f.length=p+1;for(let v=0,x=f.length;v<x;v++){const A=f[v];i.bufferSubData(u,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=t.get(a);if(u===void 0)t.set(a,e(a,c));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,c),u.version=a.version}}return{get:r,remove:s,update:o}}class La extends Jn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(r),u=a+1,h=c+1,f=t/a,p=e/c,v=[],x=[],A=[],g=[];for(let _=0;_<h;_++){const D=_*p-o;for(let P=0;P<u;P++){const N=P*f-s;x.push(N,-D,0),A.push(0,0,1),g.push(P/a),g.push(1-_/c)}}for(let _=0;_<c;_++)for(let D=0;D<a;D++){const P=D+u*_,N=D+u*(_+1),z=D+1+u*(_+1),U=D+1+u*_;v.push(P,N,U),v.push(N,z,U)}this.setIndex(v),this.setAttribute("position",new an(x,3)),this.setAttribute("normal",new an(A,3)),this.setAttribute("uv",new an(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new La(t.width,t.height,t.widthSegments,t.heightSegments)}}var T_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,M_=`#ifdef USE_ALPHAHASH
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
#endif`,A_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,R_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,C_=`#ifdef USE_AOMAP
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
#endif`,I_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P_=`#ifdef USE_BATCHING
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
#endif`,D_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,L_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,N_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,O_=`#ifdef USE_IRIDESCENCE
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
#endif`,F_=`#ifdef USE_BUMPMAP
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
#endif`,V_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,B_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,k_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,G_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,W_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,q_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,X_=`#define PI 3.141592653589793
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
} // validated`,j_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$_=`vec3 transformedNormal = objectNormal;
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
#endif`,K_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Y_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Q_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,J_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Z_="gl_FragColor = linearToOutputTexel( gl_FragColor );",tv=`
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
}`,ev=`#ifdef USE_ENVMAP
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
#endif`,nv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iv=`#ifdef USE_ENVMAP
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
#endif`,rv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sv=`#ifdef USE_ENVMAP
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
#endif`,ov=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,av=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uv=`#ifdef USE_GRADIENTMAP
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
}`,hv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pv=`uniform bool receiveShadow;
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
#endif`,mv=`#ifdef USE_ENVMAP
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
#endif`,gv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_v=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ev=`PhysicalMaterial material;
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
#endif`,xv=`struct PhysicalMaterial {
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
}`,Sv=`
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
#endif`,Tv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Av=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Iv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dv=`#if defined( USE_POINTS_UV )
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
#endif`,Lv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ov=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vv=`#ifdef USE_MORPHTARGETS
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
#endif`,Bv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qv=`#ifdef USE_NORMALMAP
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
#endif`,Xv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$v=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ty=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ey=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ny=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ry=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ay=`float getShadowMask() {
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
}`,ly=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cy=`#ifdef USE_SKINNING
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
#endif`,uy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hy=`#ifdef USE_SKINNING
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
#endif`,dy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,py=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,my=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gy=`#ifdef USE_TRANSMISSION
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
#endif`,_y=`#ifdef USE_TRANSMISSION
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
#endif`,vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ty=`uniform sampler2D t2D;
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
}`,My=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ay=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,by=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ry=`#include <common>
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
}`,Cy=`#if DEPTH_PACKING == 3200
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
}`,Iy=`#define DISTANCE
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
}`,Py=`#define DISTANCE
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
}`,Dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ly=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ny=`uniform float scale;
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
}`,Uy=`uniform vec3 diffuse;
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
}`,Oy=`#include <common>
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
}`,Fy=`uniform vec3 diffuse;
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
}`,Vy=`#define LAMBERT
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
}`,By=`#define LAMBERT
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
}`,ky=`#define MATCAP
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
}`,zy=`#define MATCAP
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
}`,Hy=`#define NORMAL
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
}`,Gy=`#define NORMAL
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
}`,Wy=`#define PHONG
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
}`,qy=`#define PHONG
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
}`,Xy=`#define STANDARD
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
}`,jy=`#define STANDARD
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
}`,$y=`#define TOON
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
}`,Ky=`#define TOON
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
}`,Yy=`uniform float size;
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
}`,Qy=`uniform vec3 diffuse;
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
}`,Jy=`#include <common>
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
}`,Zy=`uniform vec3 color;
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
}`,t0=`uniform float rotation;
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
}`,e0=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:T_,alphahash_pars_fragment:M_,alphamap_fragment:A_,alphamap_pars_fragment:w_,alphatest_fragment:b_,alphatest_pars_fragment:R_,aomap_fragment:C_,aomap_pars_fragment:I_,batching_pars_vertex:P_,batching_vertex:D_,begin_vertex:L_,beginnormal_vertex:N_,bsdfs:U_,iridescence_fragment:O_,bumpmap_pars_fragment:F_,clipping_planes_fragment:V_,clipping_planes_pars_fragment:B_,clipping_planes_pars_vertex:k_,clipping_planes_vertex:z_,color_fragment:H_,color_pars_fragment:G_,color_pars_vertex:W_,color_vertex:q_,common:X_,cube_uv_reflection_fragment:j_,defaultnormal_vertex:$_,displacementmap_pars_vertex:K_,displacementmap_vertex:Y_,emissivemap_fragment:Q_,emissivemap_pars_fragment:J_,colorspace_fragment:Z_,colorspace_pars_fragment:tv,envmap_fragment:ev,envmap_common_pars_fragment:nv,envmap_pars_fragment:iv,envmap_pars_vertex:rv,envmap_physical_pars_fragment:mv,envmap_vertex:sv,fog_vertex:ov,fog_pars_vertex:av,fog_fragment:lv,fog_pars_fragment:cv,gradientmap_pars_fragment:uv,lightmap_pars_fragment:hv,lights_lambert_fragment:dv,lights_lambert_pars_fragment:fv,lights_pars_begin:pv,lights_toon_fragment:gv,lights_toon_pars_fragment:_v,lights_phong_fragment:vv,lights_phong_pars_fragment:yv,lights_physical_fragment:Ev,lights_physical_pars_fragment:xv,lights_fragment_begin:Sv,lights_fragment_maps:Tv,lights_fragment_end:Mv,logdepthbuf_fragment:Av,logdepthbuf_pars_fragment:wv,logdepthbuf_pars_vertex:bv,logdepthbuf_vertex:Rv,map_fragment:Cv,map_pars_fragment:Iv,map_particle_fragment:Pv,map_particle_pars_fragment:Dv,metalnessmap_fragment:Lv,metalnessmap_pars_fragment:Nv,morphinstance_vertex:Uv,morphcolor_vertex:Ov,morphnormal_vertex:Fv,morphtarget_pars_vertex:Vv,morphtarget_vertex:Bv,normal_fragment_begin:kv,normal_fragment_maps:zv,normal_pars_fragment:Hv,normal_pars_vertex:Gv,normal_vertex:Wv,normalmap_pars_fragment:qv,clearcoat_normal_fragment_begin:Xv,clearcoat_normal_fragment_maps:jv,clearcoat_pars_fragment:$v,iridescence_pars_fragment:Kv,opaque_fragment:Yv,packing:Qv,premultiplied_alpha_fragment:Jv,project_vertex:Zv,dithering_fragment:ty,dithering_pars_fragment:ey,roughnessmap_fragment:ny,roughnessmap_pars_fragment:iy,shadowmap_pars_fragment:ry,shadowmap_pars_vertex:sy,shadowmap_vertex:oy,shadowmask_pars_fragment:ay,skinbase_vertex:ly,skinning_pars_vertex:cy,skinning_vertex:uy,skinnormal_vertex:hy,specularmap_fragment:dy,specularmap_pars_fragment:fy,tonemapping_fragment:py,tonemapping_pars_fragment:my,transmission_fragment:gy,transmission_pars_fragment:_y,uv_pars_fragment:vy,uv_pars_vertex:yy,uv_vertex:Ey,worldpos_vertex:xy,background_vert:Sy,background_frag:Ty,backgroundCube_vert:My,backgroundCube_frag:Ay,cube_vert:wy,cube_frag:by,depth_vert:Ry,depth_frag:Cy,distanceRGBA_vert:Iy,distanceRGBA_frag:Py,equirect_vert:Dy,equirect_frag:Ly,linedashed_vert:Ny,linedashed_frag:Uy,meshbasic_vert:Oy,meshbasic_frag:Fy,meshlambert_vert:Vy,meshlambert_frag:By,meshmatcap_vert:ky,meshmatcap_frag:zy,meshnormal_vert:Hy,meshnormal_frag:Gy,meshphong_vert:Wy,meshphong_frag:qy,meshphysical_vert:Xy,meshphysical_frag:jy,meshtoon_vert:$y,meshtoon_frag:Ky,points_vert:Yy,points_frag:Qy,shadow_vert:Jy,shadow_frag:Zy,sprite_vert:t0,sprite_frag:e0},ht={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Hn={basic:{uniforms:cn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:cn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Zt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:cn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:cn([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:cn([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Zt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:cn([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:cn([ht.points,ht.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:cn([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:cn([ht.common,ht.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:cn([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:cn([ht.sprite,ht.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:cn([ht.common,ht.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:cn([ht.lights,ht.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Hn.physical={uniforms:cn([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const Go={r:0,b:0,g:0},Ki=new Kn,n0=new Ae;function i0(i,t,e,n,r,s,o){const a=new Zt(0);let c=s===!0?0:1,u,h,f=null,p=0,v=null;function x(D){let P=D.isScene===!0?D.background:null;return P&&P.isTexture&&(P=(D.backgroundBlurriness>0?e:t).get(P)),P}function A(D){let P=!1;const N=x(D);N===null?_(a,c):N&&N.isColor&&(_(N,1),P=!0);const z=i.xr.getEnvironmentBlendMode();z==="additive"?n.buffers.color.setClear(0,0,0,1,o):z==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||P)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(D,P){const N=x(P);N&&(N.isCubeTexture||N.mapping===Pa)?(h===void 0&&(h=new sn(new zi(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:Jr(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(z,U,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Ki.copy(P.backgroundRotation),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),h.material.uniforms.envMap.value=N,h.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(n0.makeRotationFromEuler(Ki)),h.material.toneMapped=fe.getTransfer(N.colorSpace)!==Se,(f!==N||p!==N.version||v!==i.toneMapping)&&(h.material.needsUpdate=!0,f=N,p=N.version,v=i.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null)):N&&N.isTexture&&(u===void 0&&(u=new sn(new La(2,2),new Ui({name:"BackgroundMaterial",uniforms:Jr(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=N,u.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,u.material.toneMapped=fe.getTransfer(N.colorSpace)!==Se,N.matrixAutoUpdate===!0&&N.updateMatrix(),u.material.uniforms.uvTransform.value.copy(N.matrix),(f!==N||p!==N.version||v!==i.toneMapping)&&(u.material.needsUpdate=!0,f=N,p=N.version,v=i.toneMapping),u.layers.enableAll(),D.unshift(u,u.geometry,u.material,0,0,null))}function _(D,P){D.getRGB(Go,Xf(i)),n.buffers.color.setClear(Go.r,Go.g,Go.b,P,o)}return{getClearColor:function(){return a},setClearColor:function(D,P=1){a.set(D),c=P,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(D){c=D,_(a,c)},render:A,addToRenderList:g}}function r0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null);let s=r,o=!1;function a(m,y,I,M,Y){let et=!1;const j=f(M,I,y);s!==j&&(s=j,u(s.object)),et=v(m,M,I,Y),et&&x(m,M,I,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(et||o)&&(o=!1,N(m,y,I,M),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function c(){return i.createVertexArray()}function u(m){return i.bindVertexArray(m)}function h(m){return i.deleteVertexArray(m)}function f(m,y,I){const M=I.wireframe===!0;let Y=n[m.id];Y===void 0&&(Y={},n[m.id]=Y);let et=Y[y.id];et===void 0&&(et={},Y[y.id]=et);let j=et[M];return j===void 0&&(j=p(c()),et[M]=j),j}function p(m){const y=[],I=[],M=[];for(let Y=0;Y<e;Y++)y[Y]=0,I[Y]=0,M[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:I,attributeDivisors:M,object:m,attributes:{},index:null}}function v(m,y,I,M){const Y=s.attributes,et=y.attributes;let j=0;const nt=I.getAttributes();for(const K in nt)if(nt[K].location>=0){const Et=Y[K];let Rt=et[K];if(Rt===void 0&&(K==="instanceMatrix"&&m.instanceMatrix&&(Rt=m.instanceMatrix),K==="instanceColor"&&m.instanceColor&&(Rt=m.instanceColor)),Et===void 0||Et.attribute!==Rt||Rt&&Et.data!==Rt.data)return!0;j++}return s.attributesNum!==j||s.index!==M}function x(m,y,I,M){const Y={},et=y.attributes;let j=0;const nt=I.getAttributes();for(const K in nt)if(nt[K].location>=0){let Et=et[K];Et===void 0&&(K==="instanceMatrix"&&m.instanceMatrix&&(Et=m.instanceMatrix),K==="instanceColor"&&m.instanceColor&&(Et=m.instanceColor));const Rt={};Rt.attribute=Et,Et&&Et.data&&(Rt.data=Et.data),Y[K]=Rt,j++}s.attributes=Y,s.attributesNum=j,s.index=M}function A(){const m=s.newAttributes;for(let y=0,I=m.length;y<I;y++)m[y]=0}function g(m){_(m,0)}function _(m,y){const I=s.newAttributes,M=s.enabledAttributes,Y=s.attributeDivisors;I[m]=1,M[m]===0&&(i.enableVertexAttribArray(m),M[m]=1),Y[m]!==y&&(i.vertexAttribDivisor(m,y),Y[m]=y)}function D(){const m=s.newAttributes,y=s.enabledAttributes;for(let I=0,M=y.length;I<M;I++)y[I]!==m[I]&&(i.disableVertexAttribArray(I),y[I]=0)}function P(m,y,I,M,Y,et,j){j===!0?i.vertexAttribIPointer(m,y,I,Y,et):i.vertexAttribPointer(m,y,I,M,Y,et)}function N(m,y,I,M){A();const Y=M.attributes,et=I.getAttributes(),j=y.defaultAttributeValues;for(const nt in et){const K=et[nt];if(K.location>=0){let yt=Y[nt];if(yt===void 0&&(nt==="instanceMatrix"&&m.instanceMatrix&&(yt=m.instanceMatrix),nt==="instanceColor"&&m.instanceColor&&(yt=m.instanceColor)),yt!==void 0){const Et=yt.normalized,Rt=yt.itemSize,Xt=t.get(yt);if(Xt===void 0)continue;const Bt=Xt.buffer,Q=Xt.type,ot=Xt.bytesPerElement,At=Q===i.INT||Q===i.UNSIGNED_INT||yt.gpuType===nu;if(yt.isInterleavedBufferAttribute){const _t=yt.data,zt=_t.stride,Ut=yt.offset;if(_t.isInstancedInterleavedBuffer){for(let Kt=0;Kt<K.locationSize;Kt++)_(K.location+Kt,_t.meshPerAttribute);m.isInstancedMesh!==!0&&M._maxInstanceCount===void 0&&(M._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Kt=0;Kt<K.locationSize;Kt++)g(K.location+Kt);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let Kt=0;Kt<K.locationSize;Kt++)P(K.location+Kt,Rt/K.locationSize,Q,Et,zt*ot,(Ut+Rt/K.locationSize*Kt)*ot,At)}else{if(yt.isInstancedBufferAttribute){for(let _t=0;_t<K.locationSize;_t++)_(K.location+_t,yt.meshPerAttribute);m.isInstancedMesh!==!0&&M._maxInstanceCount===void 0&&(M._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let _t=0;_t<K.locationSize;_t++)g(K.location+_t);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let _t=0;_t<K.locationSize;_t++)P(K.location+_t,Rt/K.locationSize,Q,Et,Rt*ot,Rt/K.locationSize*_t*ot,At)}}else if(j!==void 0){const Et=j[nt];if(Et!==void 0)switch(Et.length){case 2:i.vertexAttrib2fv(K.location,Et);break;case 3:i.vertexAttrib3fv(K.location,Et);break;case 4:i.vertexAttrib4fv(K.location,Et);break;default:i.vertexAttrib1fv(K.location,Et)}}}}D()}function z(){T();for(const m in n){const y=n[m];for(const I in y){const M=y[I];for(const Y in M)h(M[Y].object),delete M[Y];delete y[I]}delete n[m]}}function U(m){if(n[m.id]===void 0)return;const y=n[m.id];for(const I in y){const M=y[I];for(const Y in M)h(M[Y].object),delete M[Y];delete y[I]}delete n[m.id]}function S(m){for(const y in n){const I=n[y];if(I[m.id]===void 0)continue;const M=I[m.id];for(const Y in M)h(M[Y].object),delete M[Y];delete I[m.id]}}function T(){C(),o=!0,s!==r&&(s=r,u(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:C,dispose:z,releaseStatesOfGeometry:U,releaseStatesOfProgram:S,initAttributes:A,enableAttribute:g,disableUnusedAttributes:D}}function s0(i,t,e){let n;function r(u){n=u}function s(u,h){i.drawArrays(n,u,h),e.update(h,n,1)}function o(u,h,f){f!==0&&(i.drawArraysInstanced(n,u,h,f),e.update(h,n,f))}function a(u,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,f);let v=0;for(let x=0;x<f;x++)v+=h[x];e.update(v,n,1)}function c(u,h,f,p){if(f===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let x=0;x<u.length;x++)o(u[x],h[x],p[x]);else{v.multiDrawArraysInstancedWEBGL(n,u,0,h,0,p,0,f);let x=0;for(let A=0;A<f;A++)x+=h[A];for(let A=0;A<p.length;A++)e.update(x,n,p[A])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function o0(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(S){return!(S!==On&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){const T=S===Zs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==hi&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==ci&&!T)}function c(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const h=c(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const f=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(p===!0){const S=t.get("EXT_clip_control");S.clipControlEXT(S.LOWER_LEFT_EXT,S.ZERO_TO_ONE_EXT)}const v=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),D=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),N=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),z=x>0,U=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:p,maxTextures:v,maxVertexTextures:x,maxTextureSize:A,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:D,maxVaryings:P,maxFragmentUniforms:N,vertexTextures:z,maxSamples:U}}function a0(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new Qi,a=new $t,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const v=f.length!==0||p||n!==0||r;return r=p,n=f.length,v},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,p){e=h(f,p,0)},this.setState=function(f,p,v){const x=f.clippingPlanes,A=f.clipIntersection,g=f.clipShadows,_=i.get(f);if(!r||x===null||x.length===0||s&&!g)s?h(null):u();else{const D=s?0:n,P=D*4;let N=_.clippingState||null;c.value=N,N=h(x,p,P,v);for(let z=0;z!==P;++z)N[z]=e[z];_.clippingState=N,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=D}};function u(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,p,v,x){const A=f!==null?f.length:0;let g=null;if(A!==0){if(g=c.value,x!==!0||g===null){const _=v+A*4,D=p.matrixWorldInverse;a.getNormalMatrix(D),(g===null||g.length<_)&&(g=new Float32Array(_));for(let P=0,N=v;P!==A;++P,N+=4)o.copy(f[P]).applyMatrix4(D,a),o.normal.toArray(g,N),g[N+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,g}}function l0(i){let t=new WeakMap;function e(o,a){return a===tc?o.mapping=$r:a===ec&&(o.mapping=Kr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===tc||a===ec)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new y_(c.height);return u.fromEquirectangularTexture(i,o),t.set(o,u),o.addEventListener("dispose",r),e(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Yf extends jf{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Br=4,Wh=[.125,.215,.35,.446,.526,.582],er=20,Al=new Yf,qh=new Zt;let wl=null,bl=0,Rl=0,Cl=!1;const Ji=(1+Math.sqrt(5))/2,Nr=1/Ji,Xh=[new W(-Ji,Nr,0),new W(Ji,Nr,0),new W(-Nr,0,Ji),new W(Nr,0,Ji),new W(0,Ji,-Nr),new W(0,Ji,Nr),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class jh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){wl=this._renderer.getRenderTarget(),bl=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel(),Cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wl,bl,Rl),this._renderer.xr.enabled=Cl,t.scissorTest=!1,Wo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$r||t.mapping===Kr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wl=this._renderer.getRenderTarget(),bl=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel(),Cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:Zs,format:On,colorSpace:ki,depthBuffer:!1},r=$h(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$h(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=c0(s)),this._blurMaterial=u0(s,t,e)}return r}_compileMaterial(t){const e=new sn(this._lodPlanes[0],t);this._renderer.compile(e,Al)}_sceneToCubeUV(t,e,n,r){const a=new An(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(qh),h.toneMapping=Ii,h.autoClear=!1;const v=new Gf({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),x=new sn(new zi,v);let A=!1;const g=t.background;g?g.isColor&&(v.color.copy(g),t.background=null,A=!0):(v.color.copy(qh),A=!0);for(let _=0;_<6;_++){const D=_%3;D===0?(a.up.set(0,c[_],0),a.lookAt(u[_],0,0)):D===1?(a.up.set(0,0,c[_]),a.lookAt(0,u[_],0)):(a.up.set(0,c[_],0),a.lookAt(0,0,u[_]));const P=this._cubeSize;Wo(r,D*P,_>2?P:0,P,P),h.setRenderTarget(r),A&&h.render(x,a),h.render(t,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=p,h.autoClear=f,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===$r||t.mapping===Kr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new sn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Wo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Al)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Xh[(r-s-1)%Xh.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new sn(this._lodPlanes[r],u),p=u.uniforms,v=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*v):2*Math.PI/(2*er-1),A=s/x,g=isFinite(s)?1+Math.floor(h*A):er;g>er&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${er}`);const _=[];let D=0;for(let S=0;S<er;++S){const T=S/A,C=Math.exp(-T*T/2);_.push(C),S===0?D+=C:S<g&&(D+=2*C)}for(let S=0;S<_.length;S++)_[S]=_[S]/D;p.envMap.value=t.texture,p.samples.value=g,p.weights.value=_,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:P}=this;p.dTheta.value=x,p.mipInt.value=P-n;const N=this._sizeLods[r],z=3*N*(r>P-Br?r-P+Br:0),U=4*(this._cubeSize-N);Wo(e,z,U,3*N,2*N),c.setRenderTarget(e),c.render(f,Al)}}function c0(i){const t=[],e=[],n=[];let r=i;const s=i-Br+1+Wh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>i-Br?c=Wh[o-i+Br-1]:o===0&&(c=0),n.push(c);const u=1/(a-2),h=-u,f=1+u,p=[h,h,f,h,f,f,h,h,f,f,h,f],v=6,x=6,A=3,g=2,_=1,D=new Float32Array(A*x*v),P=new Float32Array(g*x*v),N=new Float32Array(_*x*v);for(let U=0;U<v;U++){const S=U%3*2/3-1,T=U>2?0:-1,C=[S,T,0,S+2/3,T,0,S+2/3,T+1,0,S,T,0,S+2/3,T+1,0,S,T+1,0];D.set(C,A*x*U),P.set(p,g*x*U);const m=[U,U,U,U,U,U];N.set(m,_*x*U)}const z=new Jn;z.setAttribute("position",new Wn(D,A)),z.setAttribute("uv",new Wn(P,g)),z.setAttribute("faceIndex",new Wn(N,_)),t.push(z),r>Br&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function $h(i,t,e){const n=new lr(i,t,e);return n.texture.mapping=Pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wo(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function u0(i,t,e){const n=new Float32Array(er),r=new W(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:er,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:du(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Kh(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:du(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Yh(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function du(){return`

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
	`}function h0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,u=c===tc||c===ec,h=c===$r||c===Kr;if(u||h){let f=t.get(a);const p=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new jh(i)),f=u?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const v=a.image;return u&&v&&v.height>0||h&&v&&r(v)?(e===null&&(e=new jh(i)),f=u?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let c=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&c++;return c===u}function s(a){const c=a.target;c.removeEventListener("dispose",s);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function d0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&na("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function f0(i,t,e,n){const r={},s=new WeakMap;function o(f){const p=f.target;p.index!==null&&t.remove(p.index);for(const x in p.attributes)t.remove(p.attributes[x]);for(const x in p.morphAttributes){const A=p.morphAttributes[x];for(let g=0,_=A.length;g<_;g++)t.remove(A[g])}p.removeEventListener("dispose",o),delete r[p.id];const v=s.get(p);v&&(t.remove(v),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(f,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,e.memory.geometries++),p}function c(f){const p=f.attributes;for(const x in p)t.update(p[x],i.ARRAY_BUFFER);const v=f.morphAttributes;for(const x in v){const A=v[x];for(let g=0,_=A.length;g<_;g++)t.update(A[g],i.ARRAY_BUFFER)}}function u(f){const p=[],v=f.index,x=f.attributes.position;let A=0;if(v!==null){const D=v.array;A=v.version;for(let P=0,N=D.length;P<N;P+=3){const z=D[P+0],U=D[P+1],S=D[P+2];p.push(z,U,U,S,S,z)}}else if(x!==void 0){const D=x.array;A=x.version;for(let P=0,N=D.length/3-1;P<N;P+=3){const z=P+0,U=P+1,S=P+2;p.push(z,U,U,S,S,z)}}else return;const g=new(Vf(p)?qf:Wf)(p,1);g.version=A;const _=s.get(f);_&&t.remove(_),s.set(f,g)}function h(f){const p=s.get(f);if(p){const v=f.index;v!==null&&p.version<v.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function p0(i,t,e){let n;function r(p){n=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function c(p,v){i.drawElements(n,v,s,p*o),e.update(v,n,1)}function u(p,v,x){x!==0&&(i.drawElementsInstanced(n,v,s,p*o,x),e.update(v,n,x))}function h(p,v,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,v,0,s,p,0,x);let g=0;for(let _=0;_<x;_++)g+=v[_];e.update(g,n,1)}function f(p,v,x,A){if(x===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<p.length;_++)u(p[_]/o,v[_],A[_]);else{g.multiDrawElementsInstancedWEBGL(n,v,0,s,p,0,A,0,x);let _=0;for(let D=0;D<x;D++)_+=v[D];for(let D=0;D<A.length;D++)e.update(_,n,A[D])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function m0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function g0(i,t,e){const n=new WeakMap,r=new Ie;function s(o,a,c){const u=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let p=n.get(a);if(p===void 0||p.count!==f){let m=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",m)};var v=m;p!==void 0&&p.texture.dispose();const x=a.morphAttributes.position!==void 0,A=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],D=a.morphAttributes.normal||[],P=a.morphAttributes.color||[];let N=0;x===!0&&(N=1),A===!0&&(N=2),g===!0&&(N=3);let z=a.attributes.position.count*N,U=1;z>t.maxTextureSize&&(U=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const S=new Float32Array(z*U*4*f),T=new kf(S,z,U,f);T.type=ci,T.needsUpdate=!0;const C=N*4;for(let y=0;y<f;y++){const I=_[y],M=D[y],Y=P[y],et=z*U*4*y;for(let j=0;j<I.count;j++){const nt=j*C;x===!0&&(r.fromBufferAttribute(I,j),S[et+nt+0]=r.x,S[et+nt+1]=r.y,S[et+nt+2]=r.z,S[et+nt+3]=0),A===!0&&(r.fromBufferAttribute(M,j),S[et+nt+4]=r.x,S[et+nt+5]=r.y,S[et+nt+6]=r.z,S[et+nt+7]=0),g===!0&&(r.fromBufferAttribute(Y,j),S[et+nt+8]=r.x,S[et+nt+9]=r.y,S[et+nt+10]=r.z,S[et+nt+11]=Y.itemSize===4?r.w:1)}}p={count:f,texture:T,size:new de(z,U)},n.set(a,p),a.addEventListener("dispose",m)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let x=0;for(let g=0;g<u.length;g++)x+=u[g];const A=a.morphTargetsRelative?1:1-x;c.getUniforms().setValue(i,"morphTargetBaseInfluence",A),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function _0(i,t,e,n){let r=new WeakMap;function s(c){const u=n.render.frame,h=c.geometry,f=t.get(c,h);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return f}function o(){r=new WeakMap}function a(c){const u=c.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:o}}class Qf extends mn{constructor(t,e,n,r,s,o,a,c,u,h=Hr){if(h!==Hr&&h!==Qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Hr&&(n=ar),n===void 0&&h===Qr&&(n=Yr),super(null,r,s,o,a,c,h,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:wn,this.minFilter=c!==void 0?c:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Jf=new mn,Qh=new Qf(1,1),Zf=new kf,tp=new i_,ep=new $f,Jh=[],Zh=[],td=new Float32Array(16),ed=new Float32Array(9),nd=new Float32Array(4);function us(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Jh[r];if(s===void 0&&(s=new Float32Array(r),Jh[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Na(i,t){let e=Zh[t];e===void 0&&(e=new Int32Array(t),Zh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function v0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function y0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2fv(this.addr,t),ke(e,t)}}function E0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;i.uniform3fv(this.addr,t),ke(e,t)}}function x0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4fv(this.addr,t),ke(e,t)}}function S0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(Be(e,n))return;nd.set(n),i.uniformMatrix2fv(this.addr,!1,nd),ke(e,n)}}function T0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(Be(e,n))return;ed.set(n),i.uniformMatrix3fv(this.addr,!1,ed),ke(e,n)}}function M0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(Be(e,n))return;td.set(n),i.uniformMatrix4fv(this.addr,!1,td),ke(e,n)}}function A0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function w0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2iv(this.addr,t),ke(e,t)}}function b0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3iv(this.addr,t),ke(e,t)}}function R0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4iv(this.addr,t),ke(e,t)}}function C0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function I0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2uiv(this.addr,t),ke(e,t)}}function P0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3uiv(this.addr,t),ke(e,t)}}function D0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4uiv(this.addr,t),ke(e,t)}}function L0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Qh.compareFunction=Ff,s=Qh):s=Jf,e.setTexture2D(t||s,r)}function N0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||tp,r)}function U0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||ep,r)}function O0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Zf,r)}function F0(i){switch(i){case 5126:return v0;case 35664:return y0;case 35665:return E0;case 35666:return x0;case 35674:return S0;case 35675:return T0;case 35676:return M0;case 5124:case 35670:return A0;case 35667:case 35671:return w0;case 35668:case 35672:return b0;case 35669:case 35673:return R0;case 5125:return C0;case 36294:return I0;case 36295:return P0;case 36296:return D0;case 35678:case 36198:case 36298:case 36306:case 35682:return L0;case 35679:case 36299:case 36307:return N0;case 35680:case 36300:case 36308:case 36293:return U0;case 36289:case 36303:case 36311:case 36292:return O0}}function V0(i,t){i.uniform1fv(this.addr,t)}function B0(i,t){const e=us(t,this.size,2);i.uniform2fv(this.addr,e)}function k0(i,t){const e=us(t,this.size,3);i.uniform3fv(this.addr,e)}function z0(i,t){const e=us(t,this.size,4);i.uniform4fv(this.addr,e)}function H0(i,t){const e=us(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function G0(i,t){const e=us(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function W0(i,t){const e=us(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function q0(i,t){i.uniform1iv(this.addr,t)}function X0(i,t){i.uniform2iv(this.addr,t)}function j0(i,t){i.uniform3iv(this.addr,t)}function $0(i,t){i.uniform4iv(this.addr,t)}function K0(i,t){i.uniform1uiv(this.addr,t)}function Y0(i,t){i.uniform2uiv(this.addr,t)}function Q0(i,t){i.uniform3uiv(this.addr,t)}function J0(i,t){i.uniform4uiv(this.addr,t)}function Z0(i,t,e){const n=this.cache,r=t.length,s=Na(e,r);Be(n,s)||(i.uniform1iv(this.addr,s),ke(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Jf,s[o])}function tE(i,t,e){const n=this.cache,r=t.length,s=Na(e,r);Be(n,s)||(i.uniform1iv(this.addr,s),ke(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||tp,s[o])}function eE(i,t,e){const n=this.cache,r=t.length,s=Na(e,r);Be(n,s)||(i.uniform1iv(this.addr,s),ke(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||ep,s[o])}function nE(i,t,e){const n=this.cache,r=t.length,s=Na(e,r);Be(n,s)||(i.uniform1iv(this.addr,s),ke(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Zf,s[o])}function iE(i){switch(i){case 5126:return V0;case 35664:return B0;case 35665:return k0;case 35666:return z0;case 35674:return H0;case 35675:return G0;case 35676:return W0;case 5124:case 35670:return q0;case 35667:case 35671:return X0;case 35668:case 35672:return j0;case 35669:case 35673:return $0;case 5125:return K0;case 36294:return Y0;case 36295:return Q0;case 36296:return J0;case 35678:case 36198:case 36298:case 36306:case 35682:return Z0;case 35679:case 36299:case 36307:return tE;case 35680:case 36300:case 36308:case 36293:return eE;case 36289:case 36303:case 36311:case 36292:return nE}}class rE{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=F0(e.type)}}class sE{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=iE(e.type)}}class oE{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const Il=/(\w+)(\])?(\[|\.)?/g;function id(i,t){i.seq.push(t),i.map[t.id]=t}function aE(i,t,e){const n=i.name,r=n.length;for(Il.lastIndex=0;;){const s=Il.exec(n),o=Il.lastIndex;let a=s[1];const c=s[2]==="]",u=s[3];if(c&&(a=a|0),u===void 0||u==="["&&o+2===r){id(e,u===void 0?new rE(a,i,t):new sE(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new oE(a),id(e,f)),e=f}}}class ia{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);aE(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function rd(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const lE=37297;let cE=0;function uE(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function hE(i){const t=fe.getPrimaries(fe.workingColorSpace),e=fe.getPrimaries(i);let n;switch(t===e?n="":t===da&&e===ha?n="LinearDisplayP3ToLinearSRGB":t===ha&&e===da&&(n="LinearSRGBToLinearDisplayP3"),i){case ki:case Da:return[n,"LinearTransferOETF"];case zn:case lu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function sd(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+uE(i.getShaderSource(t),o)}else return r}function dE(i,t){const e=hE(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function fE(i,t){let e;switch(t){case Ig:e="Linear";break;case Pg:e="Reinhard";break;case Dg:e="Cineon";break;case Mf:e="ACESFilmic";break;case Ng:e="AgX";break;case Ug:e="Neutral";break;case Lg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const qo=new W;function pE(){fe.getLuminanceCoefficients(qo);const i=qo.x.toFixed(4),t=qo.y.toFixed(4),e=qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mE(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ls).join(`
`)}function gE(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _E(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ls(i){return i!==""}function od(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ad(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pc(i){return i.replace(vE,EE)}const yE=new Map;function EE(i,t){let e=jt[t];if(e===void 0){const n=yE.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Pc(e)}const xE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ld(i){return i.replace(xE,SE)}function SE(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function cd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function TE(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===xf?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Sf?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===oi&&(t="SHADOWMAP_TYPE_VSM"),t}function ME(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case $r:case Kr:t="ENVMAP_TYPE_CUBE";break;case Pa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function AE(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Kr:t="ENVMAP_MODE_REFRACTION";break}return t}function wE(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Tf:t="ENVMAP_BLENDING_MULTIPLY";break;case Rg:t="ENVMAP_BLENDING_MIX";break;case Cg:t="ENVMAP_BLENDING_ADD";break}return t}function bE(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function RE(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=TE(e),u=ME(e),h=AE(e),f=wE(e),p=bE(e),v=mE(e),x=gE(s),A=r.createProgram();let g,_,D=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ls).join(`
`),g.length>0&&(g+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ls).join(`
`),_.length>0&&(_+=`
`)):(g=[cd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),_=[cd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ii?"#define TONE_MAPPING":"",e.toneMapping!==Ii?jt.tonemapping_pars_fragment:"",e.toneMapping!==Ii?fE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,dE("linearToOutputTexel",e.outputColorSpace),pE(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ls).join(`
`)),o=Pc(o),o=od(o,e),o=ad(o,e),a=Pc(a),a=od(a,e),a=ad(a,e),o=ld(o),a=ld(a),e.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,g=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,_=["#define varying in",e.glslVersion===wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const P=D+g+o,N=D+_+a,z=rd(r,r.VERTEX_SHADER,P),U=rd(r,r.FRAGMENT_SHADER,N);r.attachShader(A,z),r.attachShader(A,U),e.index0AttributeName!==void 0?r.bindAttribLocation(A,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(A,0,"position"),r.linkProgram(A);function S(y){if(i.debug.checkShaderErrors){const I=r.getProgramInfoLog(A).trim(),M=r.getShaderInfoLog(z).trim(),Y=r.getShaderInfoLog(U).trim();let et=!0,j=!0;if(r.getProgramParameter(A,r.LINK_STATUS)===!1)if(et=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,A,z,U);else{const nt=sd(r,z,"vertex"),K=sd(r,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(A,r.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+I+`
`+nt+`
`+K)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(M===""||Y==="")&&(j=!1);j&&(y.diagnostics={runnable:et,programLog:I,vertexShader:{log:M,prefix:g},fragmentShader:{log:Y,prefix:_}})}r.deleteShader(z),r.deleteShader(U),T=new ia(r,A),C=_E(r,A)}let T;this.getUniforms=function(){return T===void 0&&S(this),T};let C;this.getAttributes=function(){return C===void 0&&S(this),C};let m=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return m===!1&&(m=r.getProgramParameter(A,lE)),m},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cE++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=z,this.fragmentShader=U,this}let CE=0;class IE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new PE(t),e.set(t,n)),n}}class PE{constructor(t){this.id=CE++,this.code=t,this.usedTimes=0}}function DE(i,t,e,n,r,s,o){const a=new uu,c=new IE,u=new Set,h=[],f=r.logarithmicDepthBuffer,p=r.reverseDepthBuffer,v=r.vertexTextures;let x=r.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(m){return u.add(m),m===0?"uv":`uv${m}`}function _(m,y,I,M,Y){const et=M.fog,j=Y.geometry,nt=m.isMeshStandardMaterial?M.environment:null,K=(m.isMeshStandardMaterial?e:t).get(m.envMap||nt),yt=K&&K.mapping===Pa?K.image.height:null,Et=A[m.type];m.precision!==null&&(x=r.getMaxPrecision(m.precision),x!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",x,"instead."));const Rt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Xt=Rt!==void 0?Rt.length:0;let Bt=0;j.morphAttributes.position!==void 0&&(Bt=1),j.morphAttributes.normal!==void 0&&(Bt=2),j.morphAttributes.color!==void 0&&(Bt=3);let Q,ot,At,_t;if(Et){const Le=Hn[Et];Q=Le.vertexShader,ot=Le.fragmentShader}else Q=m.vertexShader,ot=m.fragmentShader,c.update(m),At=c.getVertexShaderID(m),_t=c.getFragmentShaderID(m);const zt=i.getRenderTarget(),Ut=Y.isInstancedMesh===!0,Kt=Y.isBatchedMesh===!0,se=!!m.map,Jt=!!m.matcap,O=!!K,We=!!m.aoMap,Yt=!!m.lightMap,ee=!!m.bumpMap,Ft=!!m.normalMap,ge=!!m.displacementMap,Vt=!!m.emissiveMap,L=!!m.metalnessMap,w=!!m.roughnessMap,H=m.anisotropy>0,J=m.clearcoat>0,rt=m.dispersion>0,Z=m.iridescence>0,dt=m.sheen>0,at=m.transmission>0,vt=H&&!!m.anisotropyMap,ne=J&&!!m.clearcoatMap,lt=J&&!!m.clearcoatNormalMap,Tt=J&&!!m.clearcoatRoughnessMap,Dt=Z&&!!m.iridescenceMap,Ot=Z&&!!m.iridescenceThicknessMap,xt=dt&&!!m.sheenColorMap,Qt=dt&&!!m.sheenRoughnessMap,Ht=!!m.specularMap,me=!!m.specularColorMap,F=!!m.specularIntensityMap,gt=at&&!!m.transmissionMap,$=at&&!!m.thicknessMap,tt=!!m.gradientMap,ft=!!m.alphaMap,pt=m.alphaTest>0,qt=!!m.alphaHash,Me=!!m.extensions;let Oe=Ii;m.toneMapped&&(zt===null||zt.isXRRenderTarget===!0)&&(Oe=i.toneMapping);const ie={shaderID:Et,shaderType:m.type,shaderName:m.name,vertexShader:Q,fragmentShader:ot,defines:m.defines,customVertexShaderID:At,customFragmentShaderID:_t,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:x,batching:Kt,batchingColor:Kt&&Y._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&Y.instanceColor!==null,instancingMorph:Ut&&Y.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:zt===null?i.outputColorSpace:zt.isXRRenderTarget===!0?zt.texture.colorSpace:ki,alphaToCoverage:!!m.alphaToCoverage,map:se,matcap:Jt,envMap:O,envMapMode:O&&K.mapping,envMapCubeUVHeight:yt,aoMap:We,lightMap:Yt,bumpMap:ee,normalMap:Ft,displacementMap:v&&ge,emissiveMap:Vt,normalMapObjectSpace:Ft&&m.normalMapType===Bg,normalMapTangentSpace:Ft&&m.normalMapType===Of,metalnessMap:L,roughnessMap:w,anisotropy:H,anisotropyMap:vt,clearcoat:J,clearcoatMap:ne,clearcoatNormalMap:lt,clearcoatRoughnessMap:Tt,dispersion:rt,iridescence:Z,iridescenceMap:Dt,iridescenceThicknessMap:Ot,sheen:dt,sheenColorMap:xt,sheenRoughnessMap:Qt,specularMap:Ht,specularColorMap:me,specularIntensityMap:F,transmission:at,transmissionMap:gt,thicknessMap:$,gradientMap:tt,opaque:m.transparent===!1&&m.blending===zr&&m.alphaToCoverage===!1,alphaMap:ft,alphaTest:pt,alphaHash:qt,combine:m.combine,mapUv:se&&g(m.map.channel),aoMapUv:We&&g(m.aoMap.channel),lightMapUv:Yt&&g(m.lightMap.channel),bumpMapUv:ee&&g(m.bumpMap.channel),normalMapUv:Ft&&g(m.normalMap.channel),displacementMapUv:ge&&g(m.displacementMap.channel),emissiveMapUv:Vt&&g(m.emissiveMap.channel),metalnessMapUv:L&&g(m.metalnessMap.channel),roughnessMapUv:w&&g(m.roughnessMap.channel),anisotropyMapUv:vt&&g(m.anisotropyMap.channel),clearcoatMapUv:ne&&g(m.clearcoatMap.channel),clearcoatNormalMapUv:lt&&g(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&g(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&g(m.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&g(m.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&g(m.sheenColorMap.channel),sheenRoughnessMapUv:Qt&&g(m.sheenRoughnessMap.channel),specularMapUv:Ht&&g(m.specularMap.channel),specularColorMapUv:me&&g(m.specularColorMap.channel),specularIntensityMapUv:F&&g(m.specularIntensityMap.channel),transmissionMapUv:gt&&g(m.transmissionMap.channel),thicknessMapUv:$&&g(m.thicknessMap.channel),alphaMapUv:ft&&g(m.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Ft||H),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!j.attributes.uv&&(se||ft),fog:!!et,useFog:m.fog===!0,fogExp2:!!et&&et.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:p,skinning:Y.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Xt,morphTextureStride:Bt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Oe,decodeVideoTexture:se&&m.map.isVideoTexture===!0&&fe.getTransfer(m.map.colorSpace)===Se,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===li,flipSided:m.side===pn,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:Me&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&m.extensions.multiDraw===!0||Kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return ie.vertexUv1s=u.has(1),ie.vertexUv2s=u.has(2),ie.vertexUv3s=u.has(3),u.clear(),ie}function D(m){const y=[];if(m.shaderID?y.push(m.shaderID):(y.push(m.customVertexShaderID),y.push(m.customFragmentShaderID)),m.defines!==void 0)for(const I in m.defines)y.push(I),y.push(m.defines[I]);return m.isRawShaderMaterial===!1&&(P(y,m),N(y,m),y.push(i.outputColorSpace)),y.push(m.customProgramCacheKey),y.join()}function P(m,y){m.push(y.precision),m.push(y.outputColorSpace),m.push(y.envMapMode),m.push(y.envMapCubeUVHeight),m.push(y.mapUv),m.push(y.alphaMapUv),m.push(y.lightMapUv),m.push(y.aoMapUv),m.push(y.bumpMapUv),m.push(y.normalMapUv),m.push(y.displacementMapUv),m.push(y.emissiveMapUv),m.push(y.metalnessMapUv),m.push(y.roughnessMapUv),m.push(y.anisotropyMapUv),m.push(y.clearcoatMapUv),m.push(y.clearcoatNormalMapUv),m.push(y.clearcoatRoughnessMapUv),m.push(y.iridescenceMapUv),m.push(y.iridescenceThicknessMapUv),m.push(y.sheenColorMapUv),m.push(y.sheenRoughnessMapUv),m.push(y.specularMapUv),m.push(y.specularColorMapUv),m.push(y.specularIntensityMapUv),m.push(y.transmissionMapUv),m.push(y.thicknessMapUv),m.push(y.combine),m.push(y.fogExp2),m.push(y.sizeAttenuation),m.push(y.morphTargetsCount),m.push(y.morphAttributeCount),m.push(y.numDirLights),m.push(y.numPointLights),m.push(y.numSpotLights),m.push(y.numSpotLightMaps),m.push(y.numHemiLights),m.push(y.numRectAreaLights),m.push(y.numDirLightShadows),m.push(y.numPointLightShadows),m.push(y.numSpotLightShadows),m.push(y.numSpotLightShadowsWithMaps),m.push(y.numLightProbes),m.push(y.shadowMapType),m.push(y.toneMapping),m.push(y.numClippingPlanes),m.push(y.numClipIntersection),m.push(y.depthPacking)}function N(m,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),m.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.alphaToCoverage&&a.enable(20),m.push(a.mask)}function z(m){const y=A[m.type];let I;if(y){const M=Hn[y];I=m_.clone(M.uniforms)}else I=m.uniforms;return I}function U(m,y){let I;for(let M=0,Y=h.length;M<Y;M++){const et=h[M];if(et.cacheKey===y){I=et,++I.usedTimes;break}}return I===void 0&&(I=new RE(i,y,m,s),h.push(I)),I}function S(m){if(--m.usedTimes===0){const y=h.indexOf(m);h[y]=h[h.length-1],h.pop(),m.destroy()}}function T(m){c.remove(m)}function C(){c.dispose()}return{getParameters:_,getProgramCacheKey:D,getUniforms:z,acquireProgram:U,releaseProgram:S,releaseShaderCache:T,programs:h,dispose:C}}function LE(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function NE(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ud(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function hd(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(f,p,v,x,A,g){let _=i[t];return _===void 0?(_={id:f.id,object:f,geometry:p,material:v,groupOrder:x,renderOrder:f.renderOrder,z:A,group:g},i[t]=_):(_.id=f.id,_.object=f,_.geometry=p,_.material=v,_.groupOrder=x,_.renderOrder=f.renderOrder,_.z=A,_.group=g),t++,_}function a(f,p,v,x,A,g){const _=o(f,p,v,x,A,g);v.transmission>0?n.push(_):v.transparent===!0?r.push(_):e.push(_)}function c(f,p,v,x,A,g){const _=o(f,p,v,x,A,g);v.transmission>0?n.unshift(_):v.transparent===!0?r.unshift(_):e.unshift(_)}function u(f,p){e.length>1&&e.sort(f||NE),n.length>1&&n.sort(p||ud),r.length>1&&r.sort(p||ud)}function h(){for(let f=t,p=i.length;f<p;f++){const v=i[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:h,sort:u}}function UE(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new hd,i.set(n,[o])):r>=s.length?(o=new hd,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function OE(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new W,color:new Zt};break;case"SpotLight":e={position:new W,direction:new W,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new W,halfWidth:new W,halfHeight:new W};break}return i[t.id]=e,e}}}function FE(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let VE=0;function BE(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function kE(i){const t=new OE,e=FE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new W);const r=new W,s=new Ae,o=new Ae;function a(u){let h=0,f=0,p=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let v=0,x=0,A=0,g=0,_=0,D=0,P=0,N=0,z=0,U=0,S=0;u.sort(BE);for(let C=0,m=u.length;C<m;C++){const y=u[C],I=y.color,M=y.intensity,Y=y.distance,et=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)h+=I.r*M,f+=I.g*M,p+=I.b*M;else if(y.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(y.sh.coefficients[j],M);S++}else if(y.isDirectionalLight){const j=t.get(y);if(j.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const nt=y.shadow,K=e.get(y);K.shadowIntensity=nt.intensity,K.shadowBias=nt.bias,K.shadowNormalBias=nt.normalBias,K.shadowRadius=nt.radius,K.shadowMapSize=nt.mapSize,n.directionalShadow[v]=K,n.directionalShadowMap[v]=et,n.directionalShadowMatrix[v]=y.shadow.matrix,D++}n.directional[v]=j,v++}else if(y.isSpotLight){const j=t.get(y);j.position.setFromMatrixPosition(y.matrixWorld),j.color.copy(I).multiplyScalar(M),j.distance=Y,j.coneCos=Math.cos(y.angle),j.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),j.decay=y.decay,n.spot[A]=j;const nt=y.shadow;if(y.map&&(n.spotLightMap[z]=y.map,z++,nt.updateMatrices(y),y.castShadow&&U++),n.spotLightMatrix[A]=nt.matrix,y.castShadow){const K=e.get(y);K.shadowIntensity=nt.intensity,K.shadowBias=nt.bias,K.shadowNormalBias=nt.normalBias,K.shadowRadius=nt.radius,K.shadowMapSize=nt.mapSize,n.spotShadow[A]=K,n.spotShadowMap[A]=et,N++}A++}else if(y.isRectAreaLight){const j=t.get(y);j.color.copy(I).multiplyScalar(M),j.halfWidth.set(y.width*.5,0,0),j.halfHeight.set(0,y.height*.5,0),n.rectArea[g]=j,g++}else if(y.isPointLight){const j=t.get(y);if(j.color.copy(y.color).multiplyScalar(y.intensity),j.distance=y.distance,j.decay=y.decay,y.castShadow){const nt=y.shadow,K=e.get(y);K.shadowIntensity=nt.intensity,K.shadowBias=nt.bias,K.shadowNormalBias=nt.normalBias,K.shadowRadius=nt.radius,K.shadowMapSize=nt.mapSize,K.shadowCameraNear=nt.camera.near,K.shadowCameraFar=nt.camera.far,n.pointShadow[x]=K,n.pointShadowMap[x]=et,n.pointShadowMatrix[x]=y.shadow.matrix,P++}n.point[x]=j,x++}else if(y.isHemisphereLight){const j=t.get(y);j.skyColor.copy(y.color).multiplyScalar(M),j.groundColor.copy(y.groundColor).multiplyScalar(M),n.hemi[_]=j,_++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=p;const T=n.hash;(T.directionalLength!==v||T.pointLength!==x||T.spotLength!==A||T.rectAreaLength!==g||T.hemiLength!==_||T.numDirectionalShadows!==D||T.numPointShadows!==P||T.numSpotShadows!==N||T.numSpotMaps!==z||T.numLightProbes!==S)&&(n.directional.length=v,n.spot.length=A,n.rectArea.length=g,n.point.length=x,n.hemi.length=_,n.directionalShadow.length=D,n.directionalShadowMap.length=D,n.pointShadow.length=P,n.pointShadowMap.length=P,n.spotShadow.length=N,n.spotShadowMap.length=N,n.directionalShadowMatrix.length=D,n.pointShadowMatrix.length=P,n.spotLightMatrix.length=N+z-U,n.spotLightMap.length=z,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=S,T.directionalLength=v,T.pointLength=x,T.spotLength=A,T.rectAreaLength=g,T.hemiLength=_,T.numDirectionalShadows=D,T.numPointShadows=P,T.numSpotShadows=N,T.numSpotMaps=z,T.numLightProbes=S,n.version=VE++)}function c(u,h){let f=0,p=0,v=0,x=0,A=0;const g=h.matrixWorldInverse;for(let _=0,D=u.length;_<D;_++){const P=u[_];if(P.isDirectionalLight){const N=n.directional[f];N.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(g),f++}else if(P.isSpotLight){const N=n.spot[v];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(g),N.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(g),v++}else if(P.isRectAreaLight){const N=n.rectArea[x];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(g),o.identity(),s.copy(P.matrixWorld),s.premultiply(g),o.extractRotation(s),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),N.halfWidth.applyMatrix4(o),N.halfHeight.applyMatrix4(o),x++}else if(P.isPointLight){const N=n.point[p];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(g),p++}else if(P.isHemisphereLight){const N=n.hemi[A];N.direction.setFromMatrixPosition(P.matrixWorld),N.direction.transformDirection(g),A++}}}return{setup:a,setupView:c,state:n}}function dd(i){const t=new kE(i),e=[],n=[];function r(h){u.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function zE(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new dd(i),t.set(r,[a])):s>=o.length?(a=new dd(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class HE extends io{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class GE extends io{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const WE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qE=`uniform sampler2D shadow_pass;
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
}`;function XE(i,t,e){let n=new hu;const r=new de,s=new de,o=new Ie,a=new HE({depthPacking:Vg}),c=new GE,u={},h=e.maxTextureSize,f={[Ni]:pn,[pn]:Ni,[li]:li},p=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:WE,fragmentShader:qE}),v=p.clone();v.defines.HORIZONTAL_PASS=1;const x=new Jn;x.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new sn(x,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xf;let _=this.type;this.render=function(U,S,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||U.length===0)return;const C=i.getRenderTarget(),m=i.getActiveCubeFace(),y=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Ci),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const M=_!==oi&&this.type===oi,Y=_===oi&&this.type!==oi;for(let et=0,j=U.length;et<j;et++){const nt=U[et],K=nt.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const yt=K.getFrameExtents();if(r.multiply(yt),s.copy(K.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/yt.x),r.x=s.x*yt.x,K.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/yt.y),r.y=s.y*yt.y,K.mapSize.y=s.y)),K.map===null||M===!0||Y===!0){const Rt=this.type!==oi?{minFilter:wn,magFilter:wn}:{};K.map!==null&&K.map.dispose(),K.map=new lr(r.x,r.y,Rt),K.map.texture.name=nt.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();const Et=K.getViewportCount();for(let Rt=0;Rt<Et;Rt++){const Xt=K.getViewport(Rt);o.set(s.x*Xt.x,s.y*Xt.y,s.x*Xt.z,s.y*Xt.w),I.viewport(o),K.updateMatrices(nt,Rt),n=K.getFrustum(),N(S,T,K.camera,nt,this.type)}K.isPointLightShadow!==!0&&this.type===oi&&D(K,T),K.needsUpdate=!1}_=this.type,g.needsUpdate=!1,i.setRenderTarget(C,m,y)};function D(U,S){const T=t.update(A);p.defines.VSM_SAMPLES!==U.blurSamples&&(p.defines.VSM_SAMPLES=U.blurSamples,v.defines.VSM_SAMPLES=U.blurSamples,p.needsUpdate=!0,v.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new lr(r.x,r.y)),p.uniforms.shadow_pass.value=U.map.texture,p.uniforms.resolution.value=U.mapSize,p.uniforms.radius.value=U.radius,i.setRenderTarget(U.mapPass),i.clear(),i.renderBufferDirect(S,null,T,p,A,null),v.uniforms.shadow_pass.value=U.mapPass.texture,v.uniforms.resolution.value=U.mapSize,v.uniforms.radius.value=U.radius,i.setRenderTarget(U.map),i.clear(),i.renderBufferDirect(S,null,T,v,A,null)}function P(U,S,T,C){let m=null;const y=T.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(y!==void 0)m=y;else if(m=T.isPointLight===!0?c:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const I=m.uuid,M=S.uuid;let Y=u[I];Y===void 0&&(Y={},u[I]=Y);let et=Y[M];et===void 0&&(et=m.clone(),Y[M]=et,S.addEventListener("dispose",z)),m=et}if(m.visible=S.visible,m.wireframe=S.wireframe,C===oi?m.side=S.shadowSide!==null?S.shadowSide:S.side:m.side=S.shadowSide!==null?S.shadowSide:f[S.side],m.alphaMap=S.alphaMap,m.alphaTest=S.alphaTest,m.map=S.map,m.clipShadows=S.clipShadows,m.clippingPlanes=S.clippingPlanes,m.clipIntersection=S.clipIntersection,m.displacementMap=S.displacementMap,m.displacementScale=S.displacementScale,m.displacementBias=S.displacementBias,m.wireframeLinewidth=S.wireframeLinewidth,m.linewidth=S.linewidth,T.isPointLight===!0&&m.isMeshDistanceMaterial===!0){const I=i.properties.get(m);I.light=T}return m}function N(U,S,T,C,m){if(U.visible===!1)return;if(U.layers.test(S.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&m===oi)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,U.matrixWorld);const M=t.update(U),Y=U.material;if(Array.isArray(Y)){const et=M.groups;for(let j=0,nt=et.length;j<nt;j++){const K=et[j],yt=Y[K.materialIndex];if(yt&&yt.visible){const Et=P(U,yt,C,m);U.onBeforeShadow(i,U,S,T,M,Et,K),i.renderBufferDirect(T,null,M,Et,U,K),U.onAfterShadow(i,U,S,T,M,Et,K)}}}else if(Y.visible){const et=P(U,Y,C,m);U.onBeforeShadow(i,U,S,T,M,et,null),i.renderBufferDirect(T,null,M,et,U,null),U.onAfterShadow(i,U,S,T,M,et,null)}}const I=U.children;for(let M=0,Y=I.length;M<Y;M++)N(I[M],S,T,C,m)}function z(U){U.target.removeEventListener("dispose",z);for(const T in u){const C=u[T],m=U.target.uuid;m in C&&(C[m].dispose(),delete C[m])}}}const jE={[jl]:$l,[Kl]:Jl,[Yl]:Zl,[jr]:Ql,[$l]:jl,[Jl]:Kl,[Zl]:Yl,[Ql]:jr};function $E(i){function t(){let F=!1;const gt=new Ie;let $=null;const tt=new Ie(0,0,0,0);return{setMask:function(ft){$!==ft&&!F&&(i.colorMask(ft,ft,ft,ft),$=ft)},setLocked:function(ft){F=ft},setClear:function(ft,pt,qt,Me,Oe){Oe===!0&&(ft*=Me,pt*=Me,qt*=Me),gt.set(ft,pt,qt,Me),tt.equals(gt)===!1&&(i.clearColor(ft,pt,qt,Me),tt.copy(gt))},reset:function(){F=!1,$=null,tt.set(-1,0,0,0)}}}function e(){let F=!1,gt=!1,$=null,tt=null,ft=null;return{setReversed:function(pt){gt=pt},setTest:function(pt){pt?At(i.DEPTH_TEST):_t(i.DEPTH_TEST)},setMask:function(pt){$!==pt&&!F&&(i.depthMask(pt),$=pt)},setFunc:function(pt){if(gt&&(pt=jE[pt]),tt!==pt){switch(pt){case jl:i.depthFunc(i.NEVER);break;case $l:i.depthFunc(i.ALWAYS);break;case Kl:i.depthFunc(i.LESS);break;case jr:i.depthFunc(i.LEQUAL);break;case Yl:i.depthFunc(i.EQUAL);break;case Ql:i.depthFunc(i.GEQUAL);break;case Jl:i.depthFunc(i.GREATER);break;case Zl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=pt}},setLocked:function(pt){F=pt},setClear:function(pt){ft!==pt&&(i.clearDepth(pt),ft=pt)},reset:function(){F=!1,$=null,tt=null,ft=null}}}function n(){let F=!1,gt=null,$=null,tt=null,ft=null,pt=null,qt=null,Me=null,Oe=null;return{setTest:function(ie){F||(ie?At(i.STENCIL_TEST):_t(i.STENCIL_TEST))},setMask:function(ie){gt!==ie&&!F&&(i.stencilMask(ie),gt=ie)},setFunc:function(ie,Le,Sn){($!==ie||tt!==Le||ft!==Sn)&&(i.stencilFunc(ie,Le,Sn),$=ie,tt=Le,ft=Sn)},setOp:function(ie,Le,Sn){(pt!==ie||qt!==Le||Me!==Sn)&&(i.stencilOp(ie,Le,Sn),pt=ie,qt=Le,Me=Sn)},setLocked:function(ie){F=ie},setClear:function(ie){Oe!==ie&&(i.clearStencil(ie),Oe=ie)},reset:function(){F=!1,gt=null,$=null,tt=null,ft=null,pt=null,qt=null,Me=null,Oe=null}}}const r=new t,s=new e,o=new n,a=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],v=null,x=!1,A=null,g=null,_=null,D=null,P=null,N=null,z=null,U=new Zt(0,0,0),S=0,T=!1,C=null,m=null,y=null,I=null,M=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let et=!1,j=0;const nt=i.getParameter(i.VERSION);nt.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(nt)[1]),et=j>=1):nt.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),et=j>=2);let K=null,yt={};const Et=i.getParameter(i.SCISSOR_BOX),Rt=i.getParameter(i.VIEWPORT),Xt=new Ie().fromArray(Et),Bt=new Ie().fromArray(Rt);function Q(F,gt,$,tt){const ft=new Uint8Array(4),pt=i.createTexture();i.bindTexture(F,pt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qt=0;qt<$;qt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(gt+qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return pt}const ot={};ot[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),ot[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ot[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),At(i.DEPTH_TEST),s.setFunc(jr),Yt(!1),ee(Eh),At(i.CULL_FACE),O(Ci);function At(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function _t(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function zt(F,gt){return h[F]!==gt?(i.bindFramebuffer(F,gt),h[F]=gt,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=gt),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function Ut(F,gt){let $=p,tt=!1;if(F){$=f.get(gt),$===void 0&&($=[],f.set(gt,$));const ft=F.textures;if($.length!==ft.length||$[0]!==i.COLOR_ATTACHMENT0){for(let pt=0,qt=ft.length;pt<qt;pt++)$[pt]=i.COLOR_ATTACHMENT0+pt;$.length=ft.length,tt=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,tt=!0);tt&&i.drawBuffers($)}function Kt(F){return v!==F?(i.useProgram(F),v=F,!0):!1}const se={[tr]:i.FUNC_ADD,[hg]:i.FUNC_SUBTRACT,[dg]:i.FUNC_REVERSE_SUBTRACT};se[fg]=i.MIN,se[pg]=i.MAX;const Jt={[mg]:i.ZERO,[gg]:i.ONE,[_g]:i.SRC_COLOR,[ql]:i.SRC_ALPHA,[Tg]:i.SRC_ALPHA_SATURATE,[xg]:i.DST_COLOR,[yg]:i.DST_ALPHA,[vg]:i.ONE_MINUS_SRC_COLOR,[Xl]:i.ONE_MINUS_SRC_ALPHA,[Sg]:i.ONE_MINUS_DST_COLOR,[Eg]:i.ONE_MINUS_DST_ALPHA,[Mg]:i.CONSTANT_COLOR,[Ag]:i.ONE_MINUS_CONSTANT_COLOR,[wg]:i.CONSTANT_ALPHA,[bg]:i.ONE_MINUS_CONSTANT_ALPHA};function O(F,gt,$,tt,ft,pt,qt,Me,Oe,ie){if(F===Ci){x===!0&&(_t(i.BLEND),x=!1);return}if(x===!1&&(At(i.BLEND),x=!0),F!==ug){if(F!==A||ie!==T){if((g!==tr||P!==tr)&&(i.blendEquation(i.FUNC_ADD),g=tr,P=tr),ie)switch(F){case zr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xh:i.blendFunc(i.ONE,i.ONE);break;case Sh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Th:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case zr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Sh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Th:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}_=null,D=null,N=null,z=null,U.set(0,0,0),S=0,A=F,T=ie}return}ft=ft||gt,pt=pt||$,qt=qt||tt,(gt!==g||ft!==P)&&(i.blendEquationSeparate(se[gt],se[ft]),g=gt,P=ft),($!==_||tt!==D||pt!==N||qt!==z)&&(i.blendFuncSeparate(Jt[$],Jt[tt],Jt[pt],Jt[qt]),_=$,D=tt,N=pt,z=qt),(Me.equals(U)===!1||Oe!==S)&&(i.blendColor(Me.r,Me.g,Me.b,Oe),U.copy(Me),S=Oe),A=F,T=!1}function We(F,gt){F.side===li?_t(i.CULL_FACE):At(i.CULL_FACE);let $=F.side===pn;gt&&($=!$),Yt($),F.blending===zr&&F.transparent===!1?O(Ci):O(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),r.setMask(F.colorWrite);const tt=F.stencilWrite;o.setTest(tt),tt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ge(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?At(i.SAMPLE_ALPHA_TO_COVERAGE):_t(i.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(F){C!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),C=F)}function ee(F){F!==lg?(At(i.CULL_FACE),F!==m&&(F===Eh?i.cullFace(i.BACK):F===cg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_t(i.CULL_FACE),m=F}function Ft(F){F!==y&&(et&&i.lineWidth(F),y=F)}function ge(F,gt,$){F?(At(i.POLYGON_OFFSET_FILL),(I!==gt||M!==$)&&(i.polygonOffset(gt,$),I=gt,M=$)):_t(i.POLYGON_OFFSET_FILL)}function Vt(F){F?At(i.SCISSOR_TEST):_t(i.SCISSOR_TEST)}function L(F){F===void 0&&(F=i.TEXTURE0+Y-1),K!==F&&(i.activeTexture(F),K=F)}function w(F,gt,$){$===void 0&&(K===null?$=i.TEXTURE0+Y-1:$=K);let tt=yt[$];tt===void 0&&(tt={type:void 0,texture:void 0},yt[$]=tt),(tt.type!==F||tt.texture!==gt)&&(K!==$&&(i.activeTexture($),K=$),i.bindTexture(F,gt||ot[F]),tt.type=F,tt.texture=gt)}function H(){const F=yt[K];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function rt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function dt(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function vt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function lt(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Tt(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Dt(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ot(F){Xt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Xt.copy(F))}function xt(F){Bt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Bt.copy(F))}function Qt(F,gt){let $=c.get(gt);$===void 0&&($=new WeakMap,c.set(gt,$));let tt=$.get(F);tt===void 0&&(tt=i.getUniformBlockIndex(gt,F.name),$.set(F,tt))}function Ht(F,gt){const tt=c.get(gt).get(F);a.get(gt)!==tt&&(i.uniformBlockBinding(gt,tt,F.__bindingPointIndex),a.set(gt,tt))}function me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},K=null,yt={},h={},f=new WeakMap,p=[],v=null,x=!1,A=null,g=null,_=null,D=null,P=null,N=null,z=null,U=new Zt(0,0,0),S=0,T=!1,C=null,m=null,y=null,I=null,M=null,Xt.set(0,0,i.canvas.width,i.canvas.height),Bt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:At,disable:_t,bindFramebuffer:zt,drawBuffers:Ut,useProgram:Kt,setBlending:O,setMaterial:We,setFlipSided:Yt,setCullFace:ee,setLineWidth:Ft,setPolygonOffset:ge,setScissorTest:Vt,activeTexture:L,bindTexture:w,unbindTexture:H,compressedTexImage2D:J,compressedTexImage3D:rt,texImage2D:Tt,texImage3D:Dt,updateUBOMapping:Qt,uniformBlockBinding:Ht,texStorage2D:ne,texStorage3D:lt,texSubImage2D:Z,texSubImage3D:dt,compressedTexSubImage2D:at,compressedTexSubImage3D:vt,scissor:Ot,viewport:xt,reset:me}}function fd(i,t,e,n){const r=KE(n);switch(e){case Cf:return i*t;case Pf:return i*t;case Df:return i*t*2;case Lf:return i*t/r.components*r.byteLength;case su:return i*t/r.components*r.byteLength;case Nf:return i*t*2/r.components*r.byteLength;case ou:return i*t*2/r.components*r.byteLength;case If:return i*t*3/r.components*r.byteLength;case On:return i*t*4/r.components*r.byteLength;case au:return i*t*4/r.components*r.byteLength;case Qo:case Jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zo:case ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sc:case ac:return Math.max(i,16)*Math.max(t,8)/4;case rc:case oc:return Math.max(i,8)*Math.max(t,8)/2;case lc:case cc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case uc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case hc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case dc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case fc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case pc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case mc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case gc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case _c:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case vc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case yc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case xc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Sc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Tc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Mc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ea:case Ac:case wc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Uf:case bc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Rc:case Cc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function KE(i){switch(i){case hi:case wf:return{byteLength:1,components:1};case Gs:case bf:case Zs:return{byteLength:2,components:1};case iu:case ru:return{byteLength:2,components:4};case ar:case nu:case ci:return{byteLength:4,components:1};case Rf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function YE(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new de,h=new WeakMap;let f;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,w){return v?new OffscreenCanvas(L,w):pa("canvas")}function A(L,w,H){let J=1;const rt=Vt(L);if((rt.width>H||rt.height>H)&&(J=H/Math.max(rt.width,rt.height)),J<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Z=Math.floor(J*rt.width),dt=Math.floor(J*rt.height);f===void 0&&(f=x(Z,dt));const at=w?x(Z,dt):f;return at.width=Z,at.height=dt,at.getContext("2d").drawImage(L,0,0,Z,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+Z+"x"+dt+")."),at}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),L;return L}function g(L){return L.generateMipmaps&&L.minFilter!==wn&&L.minFilter!==Nn}function _(L){i.generateMipmap(L)}function D(L,w,H,J,rt=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Z=w;if(w===i.RED&&(H===i.FLOAT&&(Z=i.R32F),H===i.HALF_FLOAT&&(Z=i.R16F),H===i.UNSIGNED_BYTE&&(Z=i.R8)),w===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.R8UI),H===i.UNSIGNED_SHORT&&(Z=i.R16UI),H===i.UNSIGNED_INT&&(Z=i.R32UI),H===i.BYTE&&(Z=i.R8I),H===i.SHORT&&(Z=i.R16I),H===i.INT&&(Z=i.R32I)),w===i.RG&&(H===i.FLOAT&&(Z=i.RG32F),H===i.HALF_FLOAT&&(Z=i.RG16F),H===i.UNSIGNED_BYTE&&(Z=i.RG8)),w===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RG8UI),H===i.UNSIGNED_SHORT&&(Z=i.RG16UI),H===i.UNSIGNED_INT&&(Z=i.RG32UI),H===i.BYTE&&(Z=i.RG8I),H===i.SHORT&&(Z=i.RG16I),H===i.INT&&(Z=i.RG32I)),w===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),H===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),H===i.UNSIGNED_INT&&(Z=i.RGB32UI),H===i.BYTE&&(Z=i.RGB8I),H===i.SHORT&&(Z=i.RGB16I),H===i.INT&&(Z=i.RGB32I)),w===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),H===i.UNSIGNED_INT&&(Z=i.RGBA32UI),H===i.BYTE&&(Z=i.RGBA8I),H===i.SHORT&&(Z=i.RGBA16I),H===i.INT&&(Z=i.RGBA32I)),w===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),w===i.RGBA){const dt=rt?ua:fe.getTransfer(J);H===i.FLOAT&&(Z=i.RGBA32F),H===i.HALF_FLOAT&&(Z=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Z=dt===Se?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function P(L,w){let H;return L?w===null||w===ar||w===Yr?H=i.DEPTH24_STENCIL8:w===ci?H=i.DEPTH32F_STENCIL8:w===Gs&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ar||w===Yr?H=i.DEPTH_COMPONENT24:w===ci?H=i.DEPTH_COMPONENT32F:w===Gs&&(H=i.DEPTH_COMPONENT16),H}function N(L,w){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==wn&&L.minFilter!==Nn?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function z(L){const w=L.target;w.removeEventListener("dispose",z),S(w),w.isVideoTexture&&h.delete(w)}function U(L){const w=L.target;w.removeEventListener("dispose",U),C(w)}function S(L){const w=n.get(L);if(w.__webglInit===void 0)return;const H=L.source,J=p.get(H);if(J){const rt=J[w.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&T(L),Object.keys(J).length===0&&p.delete(H)}n.remove(L)}function T(L){const w=n.get(L);i.deleteTexture(w.__webglTexture);const H=L.source,J=p.get(H);delete J[w.__cacheKey],o.memory.textures--}function C(L){const w=n.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let rt=0;rt<w.__webglFramebuffer[J].length;rt++)i.deleteFramebuffer(w.__webglFramebuffer[J][rt]);else i.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)i.deleteFramebuffer(w.__webglFramebuffer[J]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const H=L.textures;for(let J=0,rt=H.length;J<rt;J++){const Z=n.get(H[J]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(H[J])}n.remove(L)}let m=0;function y(){m=0}function I(){const L=m;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),m+=1,L}function M(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function Y(L,w){const H=n.get(L);if(L.isVideoTexture&&Ft(L),L.isRenderTargetTexture===!1&&L.version>0&&H.__version!==L.version){const J=L.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Bt(H,L,w);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+w)}function et(L,w){const H=n.get(L);if(L.version>0&&H.__version!==L.version){Bt(H,L,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+w)}function j(L,w){const H=n.get(L);if(L.version>0&&H.__version!==L.version){Bt(H,L,w);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+w)}function nt(L,w){const H=n.get(L);if(L.version>0&&H.__version!==L.version){Q(H,L,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+w)}const K={[nc]:i.REPEAT,[nr]:i.CLAMP_TO_EDGE,[ic]:i.MIRRORED_REPEAT},yt={[wn]:i.NEAREST,[Og]:i.NEAREST_MIPMAP_NEAREST,[Ao]:i.NEAREST_MIPMAP_LINEAR,[Nn]:i.LINEAR,[el]:i.LINEAR_MIPMAP_NEAREST,[ir]:i.LINEAR_MIPMAP_LINEAR},Et={[kg]:i.NEVER,[Xg]:i.ALWAYS,[zg]:i.LESS,[Ff]:i.LEQUAL,[Hg]:i.EQUAL,[qg]:i.GEQUAL,[Gg]:i.GREATER,[Wg]:i.NOTEQUAL};function Rt(L,w){if(w.type===ci&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Nn||w.magFilter===el||w.magFilter===Ao||w.magFilter===ir||w.minFilter===Nn||w.minFilter===el||w.minFilter===Ao||w.minFilter===ir)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,K[w.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,K[w.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,K[w.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,yt[w.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,yt[w.minFilter]),w.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Et[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===wn||w.minFilter!==Ao&&w.minFilter!==ir||w.type===ci&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Xt(L,w){let H=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",z));const J=w.source;let rt=p.get(J);rt===void 0&&(rt={},p.set(J,rt));const Z=M(w);if(Z!==L.__cacheKey){rt[Z]===void 0&&(rt[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),rt[Z].usedTimes++;const dt=rt[L.__cacheKey];dt!==void 0&&(rt[L.__cacheKey].usedTimes--,dt.usedTimes===0&&T(w)),L.__cacheKey=Z,L.__webglTexture=rt[Z].texture}return H}function Bt(L,w,H){let J=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=i.TEXTURE_3D);const rt=Xt(L,w),Z=w.source;e.bindTexture(J,L.__webglTexture,i.TEXTURE0+H);const dt=n.get(Z);if(Z.version!==dt.__version||rt===!0){e.activeTexture(i.TEXTURE0+H);const at=fe.getPrimaries(fe.workingColorSpace),vt=w.colorSpace===Ai?null:fe.getPrimaries(w.colorSpace),ne=w.colorSpace===Ai||at===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let lt=A(w.image,!1,r.maxTextureSize);lt=ge(w,lt);const Tt=s.convert(w.format,w.colorSpace),Dt=s.convert(w.type);let Ot=D(w.internalFormat,Tt,Dt,w.colorSpace,w.isVideoTexture);Rt(J,w);let xt;const Qt=w.mipmaps,Ht=w.isVideoTexture!==!0,me=dt.__version===void 0||rt===!0,F=Z.dataReady,gt=N(w,lt);if(w.isDepthTexture)Ot=P(w.format===Qr,w.type),me&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,Ot,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,Ot,lt.width,lt.height,0,Tt,Dt,null));else if(w.isDataTexture)if(Qt.length>0){Ht&&me&&e.texStorage2D(i.TEXTURE_2D,gt,Ot,Qt[0].width,Qt[0].height);for(let $=0,tt=Qt.length;$<tt;$++)xt=Qt[$],Ht?F&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,xt.width,xt.height,Tt,Dt,xt.data):e.texImage2D(i.TEXTURE_2D,$,Ot,xt.width,xt.height,0,Tt,Dt,xt.data);w.generateMipmaps=!1}else Ht?(me&&e.texStorage2D(i.TEXTURE_2D,gt,Ot,lt.width,lt.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt.width,lt.height,Tt,Dt,lt.data)):e.texImage2D(i.TEXTURE_2D,0,Ot,lt.width,lt.height,0,Tt,Dt,lt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ht&&me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Ot,Qt[0].width,Qt[0].height,lt.depth);for(let $=0,tt=Qt.length;$<tt;$++)if(xt=Qt[$],w.format!==On)if(Tt!==null)if(Ht){if(F)if(w.layerUpdates.size>0){const ft=fd(xt.width,xt.height,w.format,w.type);for(const pt of w.layerUpdates){const qt=xt.data.subarray(pt*ft/xt.data.BYTES_PER_ELEMENT,(pt+1)*ft/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,pt,xt.width,xt.height,1,Tt,qt,0,0)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,xt.width,xt.height,lt.depth,Tt,xt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Ot,xt.width,xt.height,lt.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,xt.width,xt.height,lt.depth,Tt,Dt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,Ot,xt.width,xt.height,lt.depth,0,Tt,Dt,xt.data)}else{Ht&&me&&e.texStorage2D(i.TEXTURE_2D,gt,Ot,Qt[0].width,Qt[0].height);for(let $=0,tt=Qt.length;$<tt;$++)xt=Qt[$],w.format!==On?Tt!==null?Ht?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,xt.width,xt.height,Tt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,$,Ot,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?F&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,xt.width,xt.height,Tt,Dt,xt.data):e.texImage2D(i.TEXTURE_2D,$,Ot,xt.width,xt.height,0,Tt,Dt,xt.data)}else if(w.isDataArrayTexture)if(Ht){if(me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Ot,lt.width,lt.height,lt.depth),F)if(w.layerUpdates.size>0){const $=fd(lt.width,lt.height,w.format,w.type);for(const tt of w.layerUpdates){const ft=lt.data.subarray(tt*$/lt.data.BYTES_PER_ELEMENT,(tt+1)*$/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,lt.width,lt.height,1,Tt,Dt,ft)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Tt,Dt,lt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,lt.width,lt.height,lt.depth,0,Tt,Dt,lt.data);else if(w.isData3DTexture)Ht?(me&&e.texStorage3D(i.TEXTURE_3D,gt,Ot,lt.width,lt.height,lt.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Tt,Dt,lt.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,lt.width,lt.height,lt.depth,0,Tt,Dt,lt.data);else if(w.isFramebufferTexture){if(me)if(Ht)e.texStorage2D(i.TEXTURE_2D,gt,Ot,lt.width,lt.height);else{let $=lt.width,tt=lt.height;for(let ft=0;ft<gt;ft++)e.texImage2D(i.TEXTURE_2D,ft,Ot,$,tt,0,Tt,Dt,null),$>>=1,tt>>=1}}else if(Qt.length>0){if(Ht&&me){const $=Vt(Qt[0]);e.texStorage2D(i.TEXTURE_2D,gt,Ot,$.width,$.height)}for(let $=0,tt=Qt.length;$<tt;$++)xt=Qt[$],Ht?F&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Tt,Dt,xt):e.texImage2D(i.TEXTURE_2D,$,Ot,Tt,Dt,xt);w.generateMipmaps=!1}else if(Ht){if(me){const $=Vt(lt);e.texStorage2D(i.TEXTURE_2D,gt,Ot,$.width,$.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,Dt,lt)}else e.texImage2D(i.TEXTURE_2D,0,Ot,Tt,Dt,lt);g(w)&&_(J),dt.__version=Z.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Q(L,w,H){if(w.image.length!==6)return;const J=Xt(L,w),rt=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+H);const Z=n.get(rt);if(rt.version!==Z.__version||J===!0){e.activeTexture(i.TEXTURE0+H);const dt=fe.getPrimaries(fe.workingColorSpace),at=w.colorSpace===Ai?null:fe.getPrimaries(w.colorSpace),vt=w.colorSpace===Ai||dt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const ne=w.isCompressedTexture||w.image[0].isCompressedTexture,lt=w.image[0]&&w.image[0].isDataTexture,Tt=[];for(let tt=0;tt<6;tt++)!ne&&!lt?Tt[tt]=A(w.image[tt],!0,r.maxCubemapSize):Tt[tt]=lt?w.image[tt].image:w.image[tt],Tt[tt]=ge(w,Tt[tt]);const Dt=Tt[0],Ot=s.convert(w.format,w.colorSpace),xt=s.convert(w.type),Qt=D(w.internalFormat,Ot,xt,w.colorSpace),Ht=w.isVideoTexture!==!0,me=Z.__version===void 0||J===!0,F=rt.dataReady;let gt=N(w,Dt);Rt(i.TEXTURE_CUBE_MAP,w);let $;if(ne){Ht&&me&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Qt,Dt.width,Dt.height);for(let tt=0;tt<6;tt++){$=Tt[tt].mipmaps;for(let ft=0;ft<$.length;ft++){const pt=$[ft];w.format!==On?Ot!==null?Ht?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,0,0,pt.width,pt.height,Ot,pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,Qt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,0,0,pt.width,pt.height,Ot,xt,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,Qt,pt.width,pt.height,0,Ot,xt,pt.data)}}}else{if($=w.mipmaps,Ht&&me){$.length>0&&gt++;const tt=Vt(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Qt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(lt){Ht?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Tt[tt].width,Tt[tt].height,Ot,xt,Tt[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Qt,Tt[tt].width,Tt[tt].height,0,Ot,xt,Tt[tt].data);for(let ft=0;ft<$.length;ft++){const qt=$[ft].image[tt].image;Ht?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,0,0,qt.width,qt.height,Ot,xt,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,Qt,qt.width,qt.height,0,Ot,xt,qt.data)}}else{Ht?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Ot,xt,Tt[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Qt,Ot,xt,Tt[tt]);for(let ft=0;ft<$.length;ft++){const pt=$[ft];Ht?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,0,0,Ot,xt,pt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,Qt,Ot,xt,pt.image[tt])}}}g(w)&&_(i.TEXTURE_CUBE_MAP),Z.__version=rt.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function ot(L,w,H,J,rt,Z){const dt=s.convert(H.format,H.colorSpace),at=s.convert(H.type),vt=D(H.internalFormat,dt,at,H.colorSpace);if(!n.get(w).__hasExternalTextures){const lt=Math.max(1,w.width>>Z),Tt=Math.max(1,w.height>>Z);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,Z,vt,lt,Tt,w.depth,0,dt,at,null):e.texImage2D(rt,Z,vt,lt,Tt,0,dt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),ee(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,rt,n.get(H).__webglTexture,0,Yt(w)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,rt,n.get(H).__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(L,w,H){if(i.bindRenderbuffer(i.RENDERBUFFER,L),w.depthBuffer){const J=w.depthTexture,rt=J&&J.isDepthTexture?J.type:null,Z=P(w.stencilBuffer,rt),dt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=Yt(w);ee(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,Z,w.width,w.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,Z,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Z,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,L)}else{const J=w.textures;for(let rt=0;rt<J.length;rt++){const Z=J[rt],dt=s.convert(Z.format,Z.colorSpace),at=s.convert(Z.type),vt=D(Z.internalFormat,dt,at,Z.colorSpace),ne=Yt(w);H&&ee(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,vt,w.width,w.height):ee(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,vt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,vt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _t(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Y(w.depthTexture,0);const J=n.get(w.depthTexture).__webglTexture,rt=Yt(w);if(w.depthTexture.format===Hr)ee(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(w.depthTexture.format===Qr)ee(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function zt(L){const w=n.get(L),H=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const J=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),J){const rt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,J.removeEventListener("dispose",rt)};J.addEventListener("dispose",rt),w.__depthDisposeCallback=rt}w.__boundDepthTexture=J}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");_t(w.__webglFramebuffer,L)}else if(H){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]===void 0)w.__webglDepthbuffer[J]=i.createRenderbuffer(),At(w.__webglDepthbuffer[J],L,!1);else{const rt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=w.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),At(w.__webglDepthbuffer,L,!1);else{const J=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,rt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(L,w,H){const J=n.get(L);w!==void 0&&ot(J.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&zt(L)}function Kt(L){const w=L.texture,H=n.get(L),J=n.get(w);L.addEventListener("dispose",U);const rt=L.textures,Z=L.isWebGLCubeRenderTarget===!0,dt=rt.length>1;if(dt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=w.version,o.memory.textures++),Z){H.__webglFramebuffer=[];for(let at=0;at<6;at++)if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[at]=[];for(let vt=0;vt<w.mipmaps.length;vt++)H.__webglFramebuffer[at][vt]=i.createFramebuffer()}else H.__webglFramebuffer[at]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let at=0;at<w.mipmaps.length;at++)H.__webglFramebuffer[at]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(dt)for(let at=0,vt=rt.length;at<vt;at++){const ne=n.get(rt[at]);ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&ee(L)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let at=0;at<rt.length;at++){const vt=rt[at];H.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[at]);const ne=s.convert(vt.format,vt.colorSpace),lt=s.convert(vt.type),Tt=D(vt.internalFormat,ne,lt,vt.colorSpace,L.isXRRenderTarget===!0),Dt=Yt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,Tt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,H.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),At(H.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Rt(i.TEXTURE_CUBE_MAP,w);for(let at=0;at<6;at++)if(w.mipmaps&&w.mipmaps.length>0)for(let vt=0;vt<w.mipmaps.length;vt++)ot(H.__webglFramebuffer[at][vt],L,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,vt);else ot(H.__webglFramebuffer[at],L,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);g(w)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){for(let at=0,vt=rt.length;at<vt;at++){const ne=rt[at],lt=n.get(ne);e.bindTexture(i.TEXTURE_2D,lt.__webglTexture),Rt(i.TEXTURE_2D,ne),ot(H.__webglFramebuffer,L,ne,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),g(ne)&&_(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(at=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,J.__webglTexture),Rt(at,w),w.mipmaps&&w.mipmaps.length>0)for(let vt=0;vt<w.mipmaps.length;vt++)ot(H.__webglFramebuffer[vt],L,w,i.COLOR_ATTACHMENT0,at,vt);else ot(H.__webglFramebuffer,L,w,i.COLOR_ATTACHMENT0,at,0);g(w)&&_(at),e.unbindTexture()}L.depthBuffer&&zt(L)}function se(L){const w=L.textures;for(let H=0,J=w.length;H<J;H++){const rt=w[H];if(g(rt)){const Z=L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,dt=n.get(rt).__webglTexture;e.bindTexture(Z,dt),_(Z),e.unbindTexture()}}}const Jt=[],O=[];function We(L){if(L.samples>0){if(ee(L)===!1){const w=L.textures,H=L.width,J=L.height;let rt=i.COLOR_BUFFER_BIT;const Z=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=n.get(L),at=w.length>1;if(at)for(let vt=0;vt<w.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let vt=0;vt<w.length;vt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,dt.__webglColorRenderbuffer[vt]);const ne=n.get(w[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,H,J,0,0,H,J,rt,i.NEAREST),c===!0&&(Jt.length=0,O.length=0,Jt.push(i.COLOR_ATTACHMENT0+vt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Jt.push(Z),O.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Jt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let vt=0;vt<w.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,dt.__webglColorRenderbuffer[vt]);const ne=n.get(w[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,ne,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const w=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Yt(L){return Math.min(r.maxSamples,L.samples)}function ee(L){const w=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ft(L){const w=o.render.frame;h.get(L)!==w&&(h.set(L,w),L.update())}function ge(L,w){const H=L.colorSpace,J=L.format,rt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||H!==ki&&H!==Ai&&(fe.getTransfer(H)===Se?(J!==On||rt!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),w}function Vt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(u.width=L.naturalWidth||L.width,u.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(u.width=L.displayWidth,u.height=L.displayHeight):(u.width=L.width,u.height=L.height),u}this.allocateTextureUnit=I,this.resetTextureUnits=y,this.setTexture2D=Y,this.setTexture2DArray=et,this.setTexture3D=j,this.setTextureCube=nt,this.rebindTextures=Ut,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=ee}function QE(i,t){function e(n,r=Ai){let s;const o=fe.getTransfer(r);if(n===hi)return i.UNSIGNED_BYTE;if(n===iu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ru)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Rf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wf)return i.BYTE;if(n===bf)return i.SHORT;if(n===Gs)return i.UNSIGNED_SHORT;if(n===nu)return i.INT;if(n===ar)return i.UNSIGNED_INT;if(n===ci)return i.FLOAT;if(n===Zs)return i.HALF_FLOAT;if(n===Cf)return i.ALPHA;if(n===If)return i.RGB;if(n===On)return i.RGBA;if(n===Pf)return i.LUMINANCE;if(n===Df)return i.LUMINANCE_ALPHA;if(n===Hr)return i.DEPTH_COMPONENT;if(n===Qr)return i.DEPTH_STENCIL;if(n===Lf)return i.RED;if(n===su)return i.RED_INTEGER;if(n===Nf)return i.RG;if(n===ou)return i.RG_INTEGER;if(n===au)return i.RGBA_INTEGER;if(n===Qo||n===Jo||n===Zo||n===ta)if(o===Se)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Qo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Qo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ta)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===rc||n===sc||n===oc||n===ac)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===rc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ac)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lc||n===cc||n===uc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===lc||n===cc)return o===Se?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===uc)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===hc||n===dc||n===fc||n===pc||n===mc||n===gc||n===_c||n===vc||n===yc||n===Ec||n===xc||n===Sc||n===Tc||n===Mc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===hc)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===dc)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fc)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pc)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===mc)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===gc)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_c)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vc)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yc)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ec)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xc)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sc)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tc)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mc)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ea||n===Ac||n===wc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ea)return o===Se?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ac)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uf||n===bc||n===Rc||n===Cc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ea)return s.COMPRESSED_RED_RGTC1_EXT;if(n===bc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Rc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class JE extends An{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class rr extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZE={type:"move"};class Pl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const A of t.hand.values()){const g=e.getJointPose(A,n),_=this._getHandJoint(u,A);g!==null&&(_.matrix.fromArray(g.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=g.radius),_.visible=g!==null}const h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],p=h.position.distanceTo(f.position),v=.02,x=.005;u.inputState.pinching&&p>v+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&p<=v-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ZE)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new rr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const tx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ex=`
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

}`;class nx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new mn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ui({vertexShader:tx,fragmentShader:ex,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new sn(new La(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ix extends cs{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,u=null,h=null,f=null,p=null,v=null,x=null;const A=new nx,g=e.getContextAttributes();let _=null,D=null;const P=[],N=[],z=new de;let U=null;const S=new An;S.layers.enable(1),S.viewport=new Ie;const T=new An;T.layers.enable(2),T.viewport=new Ie;const C=[S,T],m=new JE;m.layers.enable(1),m.layers.enable(2);let y=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ot=P[Q];return ot===void 0&&(ot=new Pl,P[Q]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(Q){let ot=P[Q];return ot===void 0&&(ot=new Pl,P[Q]=ot),ot.getGripSpace()},this.getHand=function(Q){let ot=P[Q];return ot===void 0&&(ot=new Pl,P[Q]=ot),ot.getHandSpace()};function M(Q){const ot=N.indexOf(Q.inputSource);if(ot===-1)return;const At=P[ot];At!==void 0&&(At.update(Q.inputSource,Q.frame,u||o),At.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Y(){r.removeEventListener("select",M),r.removeEventListener("selectstart",M),r.removeEventListener("selectend",M),r.removeEventListener("squeeze",M),r.removeEventListener("squeezestart",M),r.removeEventListener("squeezeend",M),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",et);for(let Q=0;Q<P.length;Q++){const ot=N[Q];ot!==null&&(N[Q]=null,P[Q].disconnect(ot))}y=null,I=null,A.reset(),t.setRenderTarget(_),v=null,p=null,f=null,r=null,D=null,Bt.stop(),n.isPresenting=!1,t.setPixelRatio(U),t.setSize(z.width,z.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Q){u=Q},this.getBaseLayer=function(){return p!==null?p:v},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(_=t.getRenderTarget(),r.addEventListener("select",M),r.addEventListener("selectstart",M),r.addEventListener("selectend",M),r.addEventListener("squeeze",M),r.addEventListener("squeezestart",M),r.addEventListener("squeezeend",M),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",et),g.xrCompatible!==!0&&await e.makeXRCompatible(),U=t.getPixelRatio(),t.getSize(z),r.renderState.layers===void 0){const ot={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};v=new XRWebGLLayer(r,e,ot),r.updateRenderState({baseLayer:v}),t.setPixelRatio(1),t.setSize(v.framebufferWidth,v.framebufferHeight,!1),D=new lr(v.framebufferWidth,v.framebufferHeight,{format:On,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let ot=null,At=null,_t=null;g.depth&&(_t=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=g.stencil?Qr:Hr,At=g.stencil?Yr:ar);const zt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:s};f=new XRWebGLBinding(r,e),p=f.createProjectionLayer(zt),r.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),D=new lr(p.textureWidth,p.textureHeight,{format:On,type:hi,depthTexture:new Qf(p.textureWidth,p.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await r.requestReferenceSpace(a),Bt.setContext(r),Bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function et(Q){for(let ot=0;ot<Q.removed.length;ot++){const At=Q.removed[ot],_t=N.indexOf(At);_t>=0&&(N[_t]=null,P[_t].disconnect(At))}for(let ot=0;ot<Q.added.length;ot++){const At=Q.added[ot];let _t=N.indexOf(At);if(_t===-1){for(let Ut=0;Ut<P.length;Ut++)if(Ut>=N.length){N.push(At),_t=Ut;break}else if(N[Ut]===null){N[Ut]=At,_t=Ut;break}if(_t===-1)break}const zt=P[_t];zt&&zt.connect(At)}}const j=new W,nt=new W;function K(Q,ot,At){j.setFromMatrixPosition(ot.matrixWorld),nt.setFromMatrixPosition(At.matrixWorld);const _t=j.distanceTo(nt),zt=ot.projectionMatrix.elements,Ut=At.projectionMatrix.elements,Kt=zt[14]/(zt[10]-1),se=zt[14]/(zt[10]+1),Jt=(zt[9]+1)/zt[5],O=(zt[9]-1)/zt[5],We=(zt[8]-1)/zt[0],Yt=(Ut[8]+1)/Ut[0],ee=Kt*We,Ft=Kt*Yt,ge=_t/(-We+Yt),Vt=ge*-We;if(ot.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Vt),Q.translateZ(ge),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),zt[10]===-1)Q.projectionMatrix.copy(ot.projectionMatrix),Q.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const L=Kt+ge,w=se+ge,H=ee-Vt,J=Ft+(_t-Vt),rt=Jt*se/w*L,Z=O*se/w*L;Q.projectionMatrix.makePerspective(H,J,rt,Z,L,w),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function yt(Q,ot){ot===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ot.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ot=Q.near,At=Q.far;A.texture!==null&&(A.depthNear>0&&(ot=A.depthNear),A.depthFar>0&&(At=A.depthFar)),m.near=T.near=S.near=ot,m.far=T.far=S.far=At,(y!==m.near||I!==m.far)&&(r.updateRenderState({depthNear:m.near,depthFar:m.far}),y=m.near,I=m.far);const _t=Q.parent,zt=m.cameras;yt(m,_t);for(let Ut=0;Ut<zt.length;Ut++)yt(zt[Ut],_t);zt.length===2?K(m,S,T):m.projectionMatrix.copy(S.projectionMatrix),Et(Q,m,_t)};function Et(Q,ot,At){At===null?Q.matrix.copy(ot.matrixWorld):(Q.matrix.copy(At.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ot.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ot.projectionMatrix),Q.projectionMatrixInverse.copy(ot.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ic*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return m},this.getFoveation=function(){if(!(p===null&&v===null))return c},this.setFoveation=function(Q){c=Q,p!==null&&(p.fixedFoveation=Q),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=Q)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(m)};let Rt=null;function Xt(Q,ot){if(h=ot.getViewerPose(u||o),x=ot,h!==null){const At=h.views;v!==null&&(t.setRenderTargetFramebuffer(D,v.framebuffer),t.setRenderTarget(D));let _t=!1;At.length!==m.cameras.length&&(m.cameras.length=0,_t=!0);for(let Ut=0;Ut<At.length;Ut++){const Kt=At[Ut];let se=null;if(v!==null)se=v.getViewport(Kt);else{const O=f.getViewSubImage(p,Kt);se=O.viewport,Ut===0&&(t.setRenderTargetTextures(D,O.colorTexture,p.ignoreDepthValues?void 0:O.depthStencilTexture),t.setRenderTarget(D))}let Jt=C[Ut];Jt===void 0&&(Jt=new An,Jt.layers.enable(Ut),Jt.viewport=new Ie,C[Ut]=Jt),Jt.matrix.fromArray(Kt.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(Kt.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(se.x,se.y,se.width,se.height),Ut===0&&(m.matrix.copy(Jt.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale)),_t===!0&&m.cameras.push(Jt)}const zt=r.enabledFeatures;if(zt&&zt.includes("depth-sensing")){const Ut=f.getDepthInformation(At[0]);Ut&&Ut.isValid&&Ut.texture&&A.init(t,Ut,r.renderState)}}for(let At=0;At<P.length;At++){const _t=N[At],zt=P[At];_t!==null&&zt!==void 0&&zt.update(_t,ot,u||o)}Rt&&Rt(Q,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),x=null}const Bt=new Kf;Bt.setAnimationLoop(Xt),this.setAnimationLoop=function(Q){Rt=Q},this.dispose=function(){}}}const Yi=new Kn,rx=new Ae;function sx(i,t){function e(g,_){g.matrixAutoUpdate===!0&&g.updateMatrix(),_.value.copy(g.matrix)}function n(g,_){_.color.getRGB(g.fogColor.value,Xf(i)),_.isFog?(g.fogNear.value=_.near,g.fogFar.value=_.far):_.isFogExp2&&(g.fogDensity.value=_.density)}function r(g,_,D,P,N){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(g,_):_.isMeshToonMaterial?(s(g,_),f(g,_)):_.isMeshPhongMaterial?(s(g,_),h(g,_)):_.isMeshStandardMaterial?(s(g,_),p(g,_),_.isMeshPhysicalMaterial&&v(g,_,N)):_.isMeshMatcapMaterial?(s(g,_),x(g,_)):_.isMeshDepthMaterial?s(g,_):_.isMeshDistanceMaterial?(s(g,_),A(g,_)):_.isMeshNormalMaterial?s(g,_):_.isLineBasicMaterial?(o(g,_),_.isLineDashedMaterial&&a(g,_)):_.isPointsMaterial?c(g,_,D,P):_.isSpriteMaterial?u(g,_):_.isShadowMaterial?(g.color.value.copy(_.color),g.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(g,_){g.opacity.value=_.opacity,_.color&&g.diffuse.value.copy(_.color),_.emissive&&g.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(g.map.value=_.map,e(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,e(_.alphaMap,g.alphaMapTransform)),_.bumpMap&&(g.bumpMap.value=_.bumpMap,e(_.bumpMap,g.bumpMapTransform),g.bumpScale.value=_.bumpScale,_.side===pn&&(g.bumpScale.value*=-1)),_.normalMap&&(g.normalMap.value=_.normalMap,e(_.normalMap,g.normalMapTransform),g.normalScale.value.copy(_.normalScale),_.side===pn&&g.normalScale.value.negate()),_.displacementMap&&(g.displacementMap.value=_.displacementMap,e(_.displacementMap,g.displacementMapTransform),g.displacementScale.value=_.displacementScale,g.displacementBias.value=_.displacementBias),_.emissiveMap&&(g.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,g.emissiveMapTransform)),_.specularMap&&(g.specularMap.value=_.specularMap,e(_.specularMap,g.specularMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);const D=t.get(_),P=D.envMap,N=D.envMapRotation;P&&(g.envMap.value=P,Yi.copy(N),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),g.envMapRotation.value.setFromMatrix4(rx.makeRotationFromEuler(Yi)),g.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=_.reflectivity,g.ior.value=_.ior,g.refractionRatio.value=_.refractionRatio),_.lightMap&&(g.lightMap.value=_.lightMap,g.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,g.lightMapTransform)),_.aoMap&&(g.aoMap.value=_.aoMap,g.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,g.aoMapTransform))}function o(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,_.map&&(g.map.value=_.map,e(_.map,g.mapTransform))}function a(g,_){g.dashSize.value=_.dashSize,g.totalSize.value=_.dashSize+_.gapSize,g.scale.value=_.scale}function c(g,_,D,P){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.size.value=_.size*D,g.scale.value=P*.5,_.map&&(g.map.value=_.map,e(_.map,g.uvTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,e(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function u(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.rotation.value=_.rotation,_.map&&(g.map.value=_.map,e(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,e(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function h(g,_){g.specular.value.copy(_.specular),g.shininess.value=Math.max(_.shininess,1e-4)}function f(g,_){_.gradientMap&&(g.gradientMap.value=_.gradientMap)}function p(g,_){g.metalness.value=_.metalness,_.metalnessMap&&(g.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,g.metalnessMapTransform)),g.roughness.value=_.roughness,_.roughnessMap&&(g.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,g.roughnessMapTransform)),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)}function v(g,_,D){g.ior.value=_.ior,_.sheen>0&&(g.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),g.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(g.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,g.sheenColorMapTransform)),_.sheenRoughnessMap&&(g.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,g.sheenRoughnessMapTransform))),_.clearcoat>0&&(g.clearcoat.value=_.clearcoat,g.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(g.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,g.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(g.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===pn&&g.clearcoatNormalScale.value.negate())),_.dispersion>0&&(g.dispersion.value=_.dispersion),_.iridescence>0&&(g.iridescence.value=_.iridescence,g.iridescenceIOR.value=_.iridescenceIOR,g.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(g.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,g.iridescenceMapTransform)),_.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),_.transmission>0&&(g.transmission.value=_.transmission,g.transmissionSamplerMap.value=D.texture,g.transmissionSamplerSize.value.set(D.width,D.height),_.transmissionMap&&(g.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,g.transmissionMapTransform)),g.thickness.value=_.thickness,_.thicknessMap&&(g.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=_.attenuationDistance,g.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(g.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(g.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=_.specularIntensity,g.specularColor.value.copy(_.specularColor),_.specularColorMap&&(g.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,g.specularColorMapTransform)),_.specularIntensityMap&&(g.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,_){_.matcap&&(g.matcap.value=_.matcap)}function A(g,_){const D=t.get(_).light;g.referencePosition.value.setFromMatrixPosition(D.matrixWorld),g.nearDistance.value=D.shadow.camera.near,g.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function ox(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(D,P){const N=P.program;n.uniformBlockBinding(D,N)}function u(D,P){let N=r[D.id];N===void 0&&(x(D),N=h(D),r[D.id]=N,D.addEventListener("dispose",g));const z=P.program;n.updateUBOMapping(D,z);const U=t.render.frame;s[D.id]!==U&&(p(D),s[D.id]=U)}function h(D){const P=f();D.__bindingPointIndex=P;const N=i.createBuffer(),z=D.__size,U=D.usage;return i.bindBuffer(i.UNIFORM_BUFFER,N),i.bufferData(i.UNIFORM_BUFFER,z,U),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,P,N),N}function f(){for(let D=0;D<a;D++)if(o.indexOf(D)===-1)return o.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(D){const P=r[D.id],N=D.uniforms,z=D.__cache;i.bindBuffer(i.UNIFORM_BUFFER,P);for(let U=0,S=N.length;U<S;U++){const T=Array.isArray(N[U])?N[U]:[N[U]];for(let C=0,m=T.length;C<m;C++){const y=T[C];if(v(y,U,C,z)===!0){const I=y.__offset,M=Array.isArray(y.value)?y.value:[y.value];let Y=0;for(let et=0;et<M.length;et++){const j=M[et],nt=A(j);typeof j=="number"||typeof j=="boolean"?(y.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,I+Y,y.__data)):j.isMatrix3?(y.__data[0]=j.elements[0],y.__data[1]=j.elements[1],y.__data[2]=j.elements[2],y.__data[3]=0,y.__data[4]=j.elements[3],y.__data[5]=j.elements[4],y.__data[6]=j.elements[5],y.__data[7]=0,y.__data[8]=j.elements[6],y.__data[9]=j.elements[7],y.__data[10]=j.elements[8],y.__data[11]=0):(j.toArray(y.__data,Y),Y+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,y.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(D,P,N,z){const U=D.value,S=P+"_"+N;if(z[S]===void 0)return typeof U=="number"||typeof U=="boolean"?z[S]=U:z[S]=U.clone(),!0;{const T=z[S];if(typeof U=="number"||typeof U=="boolean"){if(T!==U)return z[S]=U,!0}else if(T.equals(U)===!1)return T.copy(U),!0}return!1}function x(D){const P=D.uniforms;let N=0;const z=16;for(let S=0,T=P.length;S<T;S++){const C=Array.isArray(P[S])?P[S]:[P[S]];for(let m=0,y=C.length;m<y;m++){const I=C[m],M=Array.isArray(I.value)?I.value:[I.value];for(let Y=0,et=M.length;Y<et;Y++){const j=M[Y],nt=A(j),K=N%z,yt=K%nt.boundary,Et=K+yt;N+=yt,Et!==0&&z-Et<nt.storage&&(N+=z-Et),I.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=N,N+=nt.storage}}}const U=N%z;return U>0&&(N+=z-U),D.__size=N,D.__cache={},this}function A(D){const P={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(P.boundary=4,P.storage=4):D.isVector2?(P.boundary=8,P.storage=8):D.isVector3||D.isColor?(P.boundary=16,P.storage=12):D.isVector4?(P.boundary=16,P.storage=16):D.isMatrix3?(P.boundary=48,P.storage=48):D.isMatrix4?(P.boundary=64,P.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),P}function g(D){const P=D.target;P.removeEventListener("dispose",g);const N=o.indexOf(P.__bindingPointIndex);o.splice(N,1),i.deleteBuffer(r[P.id]),delete r[P.id],delete s[P.id]}function _(){for(const D in r)i.deleteBuffer(r[D]);o=[],r={},s={}}return{bind:c,update:u,dispose:_}}class ax{constructor(t={}){const{canvas:e=$g(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const v=new Uint32Array(4),x=new Int32Array(4);let A=null,g=null;const _=[],D=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zn,this.toneMapping=Ii,this.toneMappingExposure=1;const P=this;let N=!1,z=0,U=0,S=null,T=-1,C=null;const m=new Ie,y=new Ie;let I=null;const M=new Zt(0);let Y=0,et=e.width,j=e.height,nt=1,K=null,yt=null;const Et=new Ie(0,0,et,j),Rt=new Ie(0,0,et,j);let Xt=!1;const Bt=new hu;let Q=!1,ot=!1;const At=new Ae,_t=new Ae,zt=new W,Ut=new Ie,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function Jt(){return S===null?nt:1}let O=n;function We(b,V){return e.getContext(b,V)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${eu}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",pt,!1),O===null){const V="webgl2";if(O=We(V,b),O===null)throw We(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Yt,ee,Ft,ge,Vt,L,w,H,J,rt,Z,dt,at,vt,ne,lt,Tt,Dt,Ot,xt,Qt,Ht,me,F;function gt(){Yt=new d0(O),Yt.init(),Ht=new QE(O,Yt),ee=new o0(O,Yt,t,Ht),Ft=new $E(O),ee.reverseDepthBuffer&&Ft.buffers.depth.setReversed(!0),ge=new m0(O),Vt=new LE,L=new YE(O,Yt,Ft,Vt,ee,Ht,ge),w=new l0(P),H=new h0(P),J=new S_(O),me=new r0(O,J),rt=new f0(O,J,ge,me),Z=new _0(O,rt,J,ge),Ot=new g0(O,ee,L),lt=new a0(Vt),dt=new DE(P,w,H,Yt,ee,me,lt),at=new sx(P,Vt),vt=new UE,ne=new zE(Yt),Dt=new i0(P,w,H,Ft,Z,p,c),Tt=new XE(P,Z,ee),F=new ox(O,ge,ee,Ft),xt=new s0(O,Yt,ge),Qt=new p0(O,Yt,ge),ge.programs=dt.programs,P.capabilities=ee,P.extensions=Yt,P.properties=Vt,P.renderLists=vt,P.shadowMap=Tt,P.state=Ft,P.info=ge}gt();const $=new ix(P,O);this.xr=$,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const b=Yt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Yt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(b){b!==void 0&&(nt=b,this.setSize(et,j,!1))},this.getSize=function(b){return b.set(et,j)},this.setSize=function(b,V,G=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}et=b,j=V,e.width=Math.floor(b*nt),e.height=Math.floor(V*nt),G===!0&&(e.style.width=b+"px",e.style.height=V+"px"),this.setViewport(0,0,b,V)},this.getDrawingBufferSize=function(b){return b.set(et*nt,j*nt).floor()},this.setDrawingBufferSize=function(b,V,G){et=b,j=V,nt=G,e.width=Math.floor(b*G),e.height=Math.floor(V*G),this.setViewport(0,0,b,V)},this.getCurrentViewport=function(b){return b.copy(m)},this.getViewport=function(b){return b.copy(Et)},this.setViewport=function(b,V,G,q){b.isVector4?Et.set(b.x,b.y,b.z,b.w):Et.set(b,V,G,q),Ft.viewport(m.copy(Et).multiplyScalar(nt).round())},this.getScissor=function(b){return b.copy(Rt)},this.setScissor=function(b,V,G,q){b.isVector4?Rt.set(b.x,b.y,b.z,b.w):Rt.set(b,V,G,q),Ft.scissor(y.copy(Rt).multiplyScalar(nt).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(b){Ft.setScissorTest(Xt=b)},this.setOpaqueSort=function(b){K=b},this.setTransparentSort=function(b){yt=b},this.getClearColor=function(b){return b.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(b=!0,V=!0,G=!0){let q=0;if(b){let B=!1;if(S!==null){const ct=S.texture.format;B=ct===au||ct===ou||ct===su}if(B){const ct=S.texture.type,mt=ct===hi||ct===ar||ct===Gs||ct===Yr||ct===iu||ct===ru,St=Dt.getClearColor(),wt=Dt.getClearAlpha(),Lt=St.r,Pt=St.g,Mt=St.b;mt?(v[0]=Lt,v[1]=Pt,v[2]=Mt,v[3]=wt,O.clearBufferuiv(O.COLOR,0,v)):(x[0]=Lt,x[1]=Pt,x[2]=Mt,x[3]=wt,O.clearBufferiv(O.COLOR,0,x))}else q|=O.COLOR_BUFFER_BIT}V&&(q|=O.DEPTH_BUFFER_BIT,O.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&(q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),vt.dispose(),ne.dispose(),Vt.dispose(),w.dispose(),H.dispose(),Z.dispose(),me.dispose(),F.dispose(),dt.dispose(),$.dispose(),$.removeEventListener("sessionstart",ze),$.removeEventListener("sessionend",ms),_n.stop()};function tt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const b=ge.autoReset,V=Tt.enabled,G=Tt.autoUpdate,q=Tt.needsUpdate,B=Tt.type;gt(),ge.autoReset=b,Tt.enabled=V,Tt.autoUpdate=G,Tt.needsUpdate=q,Tt.type=B}function pt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function qt(b){const V=b.target;V.removeEventListener("dispose",qt),Me(V)}function Me(b){Oe(b),Vt.remove(b)}function Oe(b){const V=Vt.get(b).programs;V!==void 0&&(V.forEach(function(G){dt.releaseProgram(G)}),b.isShaderMaterial&&dt.releaseShaderCache(b))}this.renderBufferDirect=function(b,V,G,q,B,ct){V===null&&(V=Kt);const mt=B.isMesh&&B.matrixWorld.determinant()<0,St=_s(b,V,G,q,B);Ft.setMaterial(q,mt);let wt=G.index,Lt=1;if(q.wireframe===!0){if(wt=rt.getWireframeAttribute(G),wt===void 0)return;Lt=2}const Pt=G.drawRange,Mt=G.attributes.position;let oe=Pt.start*Lt,_e=(Pt.start+Pt.count)*Lt;ct!==null&&(oe=Math.max(oe,ct.start*Lt),_e=Math.min(_e,(ct.start+ct.count)*Lt)),wt!==null?(oe=Math.max(oe,0),_e=Math.min(_e,wt.count)):Mt!=null&&(oe=Math.max(oe,0),_e=Math.min(_e,Mt.count));const Ee=_e-oe;if(Ee<0||Ee===1/0)return;me.setup(B,q,St,G,wt);let Ye,ae=xt;if(wt!==null&&(Ye=J.get(wt),ae=Qt,ae.setIndex(Ye)),B.isMesh)q.wireframe===!0?(Ft.setLineWidth(q.wireframeLinewidth*Jt()),ae.setMode(O.LINES)):ae.setMode(O.TRIANGLES);else if(B.isLine){let Ct=q.linewidth;Ct===void 0&&(Ct=1),Ft.setLineWidth(Ct*Jt()),B.isLineSegments?ae.setMode(O.LINES):B.isLineLoop?ae.setMode(O.LINE_LOOP):ae.setMode(O.LINE_STRIP)}else B.isPoints?ae.setMode(O.POINTS):B.isSprite&&ae.setMode(O.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)ae.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Yt.get("WEBGL_multi_draw"))ae.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ct=B._multiDrawStarts,Pe=B._multiDrawCounts,le=B._multiDrawCount,un=wt?J.get(wt).bytesPerElement:1,mi=Vt.get(q).currentProgram.getUniforms();for(let ln=0;ln<le;ln++)mi.setValue(O,"_gl_DrawID",ln),ae.render(Ct[ln]/un,Pe[ln])}else if(B.isInstancedMesh)ae.renderInstances(oe,Ee,B.count);else if(G.isInstancedBufferGeometry){const Ct=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Pe=Math.min(G.instanceCount,Ct);ae.renderInstances(oe,Ee,Pe)}else ae.render(oe,Ee)};function ie(b,V,G){b.transparent===!0&&b.side===li&&b.forceSinglePass===!1?(b.side=pn,b.needsUpdate=!0,pr(b,V,G),b.side=Ni,b.needsUpdate=!0,pr(b,V,G),b.side=li):pr(b,V,G)}this.compile=function(b,V,G=null){G===null&&(G=b),g=ne.get(G),g.init(V),D.push(g),G.traverseVisible(function(B){B.isLight&&B.layers.test(V.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),b!==G&&b.traverseVisible(function(B){B.isLight&&B.layers.test(V.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),g.setupLights();const q=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ct=B.material;if(ct)if(Array.isArray(ct))for(let mt=0;mt<ct.length;mt++){const St=ct[mt];ie(St,G,B),q.add(St)}else ie(ct,G,B),q.add(ct)}),D.pop(),g=null,q},this.compileAsync=function(b,V,G=null){const q=this.compile(b,V,G);return new Promise(B=>{function ct(){if(q.forEach(function(mt){Vt.get(mt).currentProgram.isReady()&&q.delete(mt)}),q.size===0){B(b);return}setTimeout(ct,10)}Yt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let Le=null;function Sn(b){Le&&Le(b)}function ze(){_n.stop()}function ms(){_n.start()}const _n=new Kf;_n.setAnimationLoop(Sn),typeof self<"u"&&_n.setContext(self),this.setAnimationLoop=function(b){Le=b,$.setAnimationLoop(b),b===null?_n.stop():_n.start()},$.addEventListener("sessionstart",ze),$.addEventListener("sessionend",ms),this.render=function(b,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(V),V=$.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,V,S),g=ne.get(b,D.length),g.init(V),D.push(g),_t.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Bt.setFromProjectionMatrix(_t),ot=this.localClippingEnabled,Q=lt.init(this.clippingPlanes,ot),A=vt.get(b,_.length),A.init(),_.push(A),$.enabled===!0&&$.isPresenting===!0){const ct=P.xr.getDepthSensingMesh();ct!==null&&Zn(ct,V,-1/0,P.sortObjects)}Zn(b,V,0,P.sortObjects),A.finish(),P.sortObjects===!0&&A.sort(K,yt),se=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,se&&Dt.addToRenderList(A,b),this.info.render.frame++,Q===!0&&lt.beginShadows();const G=g.state.shadowsArray;Tt.render(G,b,V),Q===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=A.opaque,B=A.transmissive;if(g.setupLights(),V.isArrayCamera){const ct=V.cameras;if(B.length>0)for(let mt=0,St=ct.length;mt<St;mt++){const wt=ct[mt];po(q,B,b,wt)}se&&Dt.render(b);for(let mt=0,St=ct.length;mt<St;mt++){const wt=ct[mt];fo(A,b,wt,wt.viewport)}}else B.length>0&&po(q,B,b,V),se&&Dt.render(b),fo(A,b,V);S!==null&&(L.updateMultisampleRenderTarget(S),L.updateRenderTargetMipmap(S)),b.isScene===!0&&b.onAfterRender(P,b,V),me.resetDefaultState(),T=-1,C=null,D.pop(),D.length>0?(g=D[D.length-1],Q===!0&&lt.setGlobalState(P.clippingPlanes,g.state.camera)):g=null,_.pop(),_.length>0?A=_[_.length-1]:A=null};function Zn(b,V,G,q){if(b.visible===!1)return;if(b.layers.test(V.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(V);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Bt.intersectsSprite(b)){q&&Ut.setFromMatrixPosition(b.matrixWorld).applyMatrix4(_t);const mt=Z.update(b),St=b.material;St.visible&&A.push(b,mt,St,G,Ut.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Bt.intersectsObject(b))){const mt=Z.update(b),St=b.material;if(q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ut.copy(b.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Ut.copy(mt.boundingSphere.center)),Ut.applyMatrix4(b.matrixWorld).applyMatrix4(_t)),Array.isArray(St)){const wt=mt.groups;for(let Lt=0,Pt=wt.length;Lt<Pt;Lt++){const Mt=wt[Lt],oe=St[Mt.materialIndex];oe&&oe.visible&&A.push(b,mt,oe,G,Ut.z,Mt)}}else St.visible&&A.push(b,mt,St,G,Ut.z,null)}}const ct=b.children;for(let mt=0,St=ct.length;mt<St;mt++)Zn(ct[mt],V,G,q)}function fo(b,V,G,q){const B=b.opaque,ct=b.transmissive,mt=b.transparent;g.setupLightsView(G),Q===!0&&lt.setGlobalState(P.clippingPlanes,G),q&&Ft.viewport(m.copy(q)),B.length>0&&bn(B,V,G),ct.length>0&&bn(ct,V,G),mt.length>0&&bn(mt,V,G),Ft.buffers.depth.setTest(!0),Ft.buffers.depth.setMask(!0),Ft.buffers.color.setMask(!0),Ft.setPolygonOffset(!1)}function po(b,V,G,q){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[q.id]===void 0&&(g.state.transmissionRenderTarget[q.id]=new lr(1,1,{generateMipmaps:!0,type:Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float")?Zs:hi,minFilter:ir,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:fe.workingColorSpace}));const ct=g.state.transmissionRenderTarget[q.id],mt=q.viewport||m;ct.setSize(mt.z,mt.w);const St=P.getRenderTarget();P.setRenderTarget(ct),P.getClearColor(M),Y=P.getClearAlpha(),Y<1&&P.setClearColor(16777215,.5),P.clear(),se&&Dt.render(G);const wt=P.toneMapping;P.toneMapping=Ii;const Lt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),g.setupLightsView(q),Q===!0&&lt.setGlobalState(P.clippingPlanes,q),bn(b,G,q),L.updateMultisampleRenderTarget(ct),L.updateRenderTargetMipmap(ct),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let Mt=0,oe=V.length;Mt<oe;Mt++){const _e=V[Mt],Ee=_e.object,Ye=_e.geometry,ae=_e.material,Ct=_e.group;if(ae.side===li&&Ee.layers.test(q.layers)){const Pe=ae.side;ae.side=pn,ae.needsUpdate=!0,mo(Ee,G,q,Ye,ae,Ct),ae.side=Pe,ae.needsUpdate=!0,Pt=!0}}Pt===!0&&(L.updateMultisampleRenderTarget(ct),L.updateRenderTargetMipmap(ct))}P.setRenderTarget(St),P.setClearColor(M,Y),Lt!==void 0&&(q.viewport=Lt),P.toneMapping=wt}function bn(b,V,G){const q=V.isScene===!0?V.overrideMaterial:null;for(let B=0,ct=b.length;B<ct;B++){const mt=b[B],St=mt.object,wt=mt.geometry,Lt=q===null?mt.material:q,Pt=mt.group;St.layers.test(G.layers)&&mo(St,V,G,wt,Lt,Pt)}}function mo(b,V,G,q,B,ct){b.onBeforeRender(P,V,G,q,B,ct),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(P,V,G,q,b,ct),B.transparent===!0&&B.side===li&&B.forceSinglePass===!1?(B.side=pn,B.needsUpdate=!0,P.renderBufferDirect(G,V,q,B,b,ct),B.side=Ni,B.needsUpdate=!0,P.renderBufferDirect(G,V,q,B,b,ct),B.side=li):P.renderBufferDirect(G,V,q,B,b,ct),b.onAfterRender(P,V,G,q,B,ct)}function pr(b,V,G){V.isScene!==!0&&(V=Kt);const q=Vt.get(b),B=g.state.lights,ct=g.state.shadowsArray,mt=B.state.version,St=dt.getParameters(b,B.state,ct,V,G),wt=dt.getProgramCacheKey(St);let Lt=q.programs;q.environment=b.isMeshStandardMaterial?V.environment:null,q.fog=V.fog,q.envMap=(b.isMeshStandardMaterial?H:w).get(b.envMap||q.environment),q.envMapRotation=q.environment!==null&&b.envMap===null?V.environmentRotation:b.envMapRotation,Lt===void 0&&(b.addEventListener("dispose",qt),Lt=new Map,q.programs=Lt);let Pt=Lt.get(wt);if(Pt!==void 0){if(q.currentProgram===Pt&&q.lightsStateVersion===mt)return gs(b,St),Pt}else St.uniforms=dt.getUniforms(b),b.onBeforeCompile(St,P),Pt=dt.acquireProgram(St,wt),Lt.set(wt,Pt),q.uniforms=St.uniforms;const Mt=q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Mt.clippingPlanes=lt.uniform),gs(b,St),q.needsLights=Vn(b),q.lightsStateVersion=mt,q.needsLights&&(Mt.ambientLightColor.value=B.state.ambient,Mt.lightProbe.value=B.state.probe,Mt.directionalLights.value=B.state.directional,Mt.directionalLightShadows.value=B.state.directionalShadow,Mt.spotLights.value=B.state.spot,Mt.spotLightShadows.value=B.state.spotShadow,Mt.rectAreaLights.value=B.state.rectArea,Mt.ltc_1.value=B.state.rectAreaLTC1,Mt.ltc_2.value=B.state.rectAreaLTC2,Mt.pointLights.value=B.state.point,Mt.pointLightShadows.value=B.state.pointShadow,Mt.hemisphereLights.value=B.state.hemi,Mt.directionalShadowMap.value=B.state.directionalShadowMap,Mt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Mt.spotShadowMap.value=B.state.spotShadowMap,Mt.spotLightMatrix.value=B.state.spotLightMatrix,Mt.spotLightMap.value=B.state.spotLightMap,Mt.pointShadowMap.value=B.state.pointShadowMap,Mt.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=Pt,q.uniformsList=null,Pt}function Gi(b){if(b.uniformsList===null){const V=b.currentProgram.getUniforms();b.uniformsList=ia.seqWithValue(V.seq,b.uniforms)}return b.uniformsList}function gs(b,V){const G=Vt.get(b);G.outputColorSpace=V.outputColorSpace,G.batching=V.batching,G.batchingColor=V.batchingColor,G.instancing=V.instancing,G.instancingColor=V.instancingColor,G.instancingMorph=V.instancingMorph,G.skinning=V.skinning,G.morphTargets=V.morphTargets,G.morphNormals=V.morphNormals,G.morphColors=V.morphColors,G.morphTargetsCount=V.morphTargetsCount,G.numClippingPlanes=V.numClippingPlanes,G.numIntersection=V.numClipIntersection,G.vertexAlphas=V.vertexAlphas,G.vertexTangents=V.vertexTangents,G.toneMapping=V.toneMapping}function _s(b,V,G,q,B){V.isScene!==!0&&(V=Kt),L.resetTextureUnits();const ct=V.fog,mt=q.isMeshStandardMaterial?V.environment:null,St=S===null?P.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:ki,wt=(q.isMeshStandardMaterial?H:w).get(q.envMap||mt),Lt=q.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Pt=!!G.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Mt=!!G.morphAttributes.position,oe=!!G.morphAttributes.normal,_e=!!G.morphAttributes.color;let Ee=Ii;q.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Ee=P.toneMapping);const Ye=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ae=Ye!==void 0?Ye.length:0,Ct=Vt.get(q),Pe=g.state.lights;if(Q===!0&&(ot===!0||b!==C)){const be=b===C&&q.id===T;lt.setState(q,b,be)}let le=!1;q.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==Pe.state.version||Ct.outputColorSpace!==St||B.isBatchedMesh&&Ct.batching===!1||!B.isBatchedMesh&&Ct.batching===!0||B.isBatchedMesh&&Ct.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ct.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ct.instancing===!1||!B.isInstancedMesh&&Ct.instancing===!0||B.isSkinnedMesh&&Ct.skinning===!1||!B.isSkinnedMesh&&Ct.skinning===!0||B.isInstancedMesh&&Ct.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ct.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ct.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ct.instancingMorph===!1&&B.morphTexture!==null||Ct.envMap!==wt||q.fog===!0&&Ct.fog!==ct||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==lt.numPlanes||Ct.numIntersection!==lt.numIntersection)||Ct.vertexAlphas!==Lt||Ct.vertexTangents!==Pt||Ct.morphTargets!==Mt||Ct.morphNormals!==oe||Ct.morphColors!==_e||Ct.toneMapping!==Ee||Ct.morphTargetsCount!==ae)&&(le=!0):(le=!0,Ct.__version=q.version);let un=Ct.currentProgram;le===!0&&(un=pr(q,V,B));let mi=!1,ln=!1,gr=!1;const Te=un.getUniforms(),Bn=Ct.uniforms;if(Ft.useProgram(un.program)&&(mi=!0,ln=!0,gr=!0),q.id!==T&&(T=q.id,ln=!0),mi||C!==b){ee.reverseDepthBuffer?(At.copy(b.projectionMatrix),Yg(At),Qg(At),Te.setValue(O,"projectionMatrix",At)):Te.setValue(O,"projectionMatrix",b.projectionMatrix),Te.setValue(O,"viewMatrix",b.matrixWorldInverse);const be=Te.map.cameraPosition;be!==void 0&&be.setValue(O,zt.setFromMatrixPosition(b.matrixWorld)),ee.logarithmicDepthBuffer&&Te.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Te.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),C!==b&&(C=b,ln=!0,gr=!0)}if(B.isSkinnedMesh){Te.setOptional(O,B,"bindMatrix"),Te.setOptional(O,B,"bindMatrixInverse");const be=B.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),Te.setValue(O,"boneTexture",be.boneTexture,L))}B.isBatchedMesh&&(Te.setOptional(O,B,"batchingTexture"),Te.setValue(O,"batchingTexture",B._matricesTexture,L),Te.setOptional(O,B,"batchingIdTexture"),Te.setValue(O,"batchingIdTexture",B._indirectTexture,L),Te.setOptional(O,B,"batchingColorTexture"),B._colorsTexture!==null&&Te.setValue(O,"batchingColorTexture",B._colorsTexture,L));const Rn=G.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&Ot.update(B,G,un),(ln||Ct.receiveShadow!==B.receiveShadow)&&(Ct.receiveShadow=B.receiveShadow,Te.setValue(O,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Bn.envMap.value=wt,Bn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&V.environment!==null&&(Bn.envMapIntensity.value=V.environmentIntensity),ln&&(Te.setValue(O,"toneMappingExposure",P.toneMappingExposure),Ct.needsLights&&mr(Bn,gr),ct&&q.fog===!0&&at.refreshFogUniforms(Bn,ct),at.refreshMaterialUniforms(Bn,q,nt,j,g.state.transmissionRenderTarget[b.id]),ia.upload(O,Gi(Ct),Bn,L)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ia.upload(O,Gi(Ct),Bn,L),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Te.setValue(O,"center",B.center),Te.setValue(O,"modelViewMatrix",B.modelViewMatrix),Te.setValue(O,"normalMatrix",B.normalMatrix),Te.setValue(O,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const be=q.uniformsGroups;for(let gi=0,_r=be.length;gi<_r;gi++){const vs=be[gi];F.update(vs,un),F.bind(vs,un)}}return un}function mr(b,V){b.ambientLightColor.needsUpdate=V,b.lightProbe.needsUpdate=V,b.directionalLights.needsUpdate=V,b.directionalLightShadows.needsUpdate=V,b.pointLights.needsUpdate=V,b.pointLightShadows.needsUpdate=V,b.spotLights.needsUpdate=V,b.spotLightShadows.needsUpdate=V,b.rectAreaLights.needsUpdate=V,b.hemisphereLights.needsUpdate=V}function Vn(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(b,V,G){Vt.get(b.texture).__webglTexture=V,Vt.get(b.depthTexture).__webglTexture=G;const q=Vt.get(b);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=G===void 0,q.__autoAllocateDepthBuffer||Yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,V){const G=Vt.get(b);G.__webglFramebuffer=V,G.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(b,V=0,G=0){S=b,z=V,U=G;let q=!0,B=null,ct=!1,mt=!1;if(b){const wt=Vt.get(b);if(wt.__useDefaultFramebuffer!==void 0)Ft.bindFramebuffer(O.FRAMEBUFFER,null),q=!1;else if(wt.__webglFramebuffer===void 0)L.setupRenderTarget(b);else if(wt.__hasExternalTextures)L.rebindTextures(b,Vt.get(b.texture).__webglTexture,Vt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Mt=b.depthTexture;if(wt.__boundDepthTexture!==Mt){if(Mt!==null&&Vt.has(Mt)&&(b.width!==Mt.image.width||b.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(b)}}const Lt=b.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(mt=!0);const Pt=Vt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Pt[V])?B=Pt[V][G]:B=Pt[V],ct=!0):b.samples>0&&L.useMultisampledRTT(b)===!1?B=Vt.get(b).__webglMultisampledFramebuffer:Array.isArray(Pt)?B=Pt[G]:B=Pt,m.copy(b.viewport),y.copy(b.scissor),I=b.scissorTest}else m.copy(Et).multiplyScalar(nt).floor(),y.copy(Rt).multiplyScalar(nt).floor(),I=Xt;if(Ft.bindFramebuffer(O.FRAMEBUFFER,B)&&q&&Ft.drawBuffers(b,B),Ft.viewport(m),Ft.scissor(y),Ft.setScissorTest(I),ct){const wt=Vt.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+V,wt.__webglTexture,G)}else if(mt){const wt=Vt.get(b.texture),Lt=V||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,wt.__webglTexture,G||0,Lt)}T=-1},this.readRenderTargetPixels=function(b,V,G,q,B,ct,mt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&mt!==void 0&&(St=St[mt]),St){Ft.bindFramebuffer(O.FRAMEBUFFER,St);try{const wt=b.texture,Lt=wt.format,Pt=wt.type;if(!ee.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=b.width-q&&G>=0&&G<=b.height-B&&O.readPixels(V,G,q,B,Ht.convert(Lt),Ht.convert(Pt),ct)}finally{const wt=S!==null?Vt.get(S).__webglFramebuffer:null;Ft.bindFramebuffer(O.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(b,V,G,q,B,ct,mt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&mt!==void 0&&(St=St[mt]),St){const wt=b.texture,Lt=wt.format,Pt=wt.type;if(!ee.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=b.width-q&&G>=0&&G<=b.height-B){Ft.bindFramebuffer(O.FRAMEBUFFER,St);const Mt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Mt),O.bufferData(O.PIXEL_PACK_BUFFER,ct.byteLength,O.STREAM_READ),O.readPixels(V,G,q,B,Ht.convert(Lt),Ht.convert(Pt),0);const oe=S!==null?Vt.get(S).__webglFramebuffer:null;Ft.bindFramebuffer(O.FRAMEBUFFER,oe);const _e=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Kg(O,_e,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Mt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ct),O.deleteBuffer(Mt),O.deleteSync(_e),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,V=null,G=0){b.isTexture!==!0&&(na("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,b=arguments[1]);const q=Math.pow(2,-G),B=Math.floor(b.image.width*q),ct=Math.floor(b.image.height*q),mt=V!==null?V.x:0,St=V!==null?V.y:0;L.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,G,0,0,mt,St,B,ct),Ft.unbindTexture()},this.copyTextureToTexture=function(b,V,G=null,q=null,B=0){b.isTexture!==!0&&(na("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,b=arguments[1],V=arguments[2],B=arguments[3]||0,G=null);let ct,mt,St,wt,Lt,Pt;G!==null?(ct=G.max.x-G.min.x,mt=G.max.y-G.min.y,St=G.min.x,wt=G.min.y):(ct=b.image.width,mt=b.image.height,St=0,wt=0),q!==null?(Lt=q.x,Pt=q.y):(Lt=0,Pt=0);const Mt=Ht.convert(V.format),oe=Ht.convert(V.type);L.setTexture2D(V,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment);const _e=O.getParameter(O.UNPACK_ROW_LENGTH),Ee=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ye=O.getParameter(O.UNPACK_SKIP_PIXELS),ae=O.getParameter(O.UNPACK_SKIP_ROWS),Ct=O.getParameter(O.UNPACK_SKIP_IMAGES),Pe=b.isCompressedTexture?b.mipmaps[B]:b.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,Pe.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Pe.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,St),O.pixelStorei(O.UNPACK_SKIP_ROWS,wt),b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,B,Lt,Pt,ct,mt,Mt,oe,Pe.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,B,Lt,Pt,Pe.width,Pe.height,Mt,Pe.data):O.texSubImage2D(O.TEXTURE_2D,B,Lt,Pt,ct,mt,Mt,oe,Pe),O.pixelStorei(O.UNPACK_ROW_LENGTH,_e),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ee),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ye),O.pixelStorei(O.UNPACK_SKIP_ROWS,ae),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ct),B===0&&V.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Ft.unbindTexture()},this.copyTextureToTexture3D=function(b,V,G=null,q=null,B=0){b.isTexture!==!0&&(na("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,q=arguments[1]||null,b=arguments[2],V=arguments[3],B=arguments[4]||0);let ct,mt,St,wt,Lt,Pt,Mt,oe,_e;const Ee=b.isCompressedTexture?b.mipmaps[B]:b.image;G!==null?(ct=G.max.x-G.min.x,mt=G.max.y-G.min.y,St=G.max.z-G.min.z,wt=G.min.x,Lt=G.min.y,Pt=G.min.z):(ct=Ee.width,mt=Ee.height,St=Ee.depth,wt=0,Lt=0,Pt=0),q!==null?(Mt=q.x,oe=q.y,_e=q.z):(Mt=0,oe=0,_e=0);const Ye=Ht.convert(V.format),ae=Ht.convert(V.type);let Ct;if(V.isData3DTexture)L.setTexture3D(V,0),Ct=O.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)L.setTexture2DArray(V,0),Ct=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment);const Pe=O.getParameter(O.UNPACK_ROW_LENGTH),le=O.getParameter(O.UNPACK_IMAGE_HEIGHT),un=O.getParameter(O.UNPACK_SKIP_PIXELS),mi=O.getParameter(O.UNPACK_SKIP_ROWS),ln=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ee.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ee.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,wt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Lt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Pt),b.isDataTexture||b.isData3DTexture?O.texSubImage3D(Ct,B,Mt,oe,_e,ct,mt,St,Ye,ae,Ee.data):V.isCompressedArrayTexture?O.compressedTexSubImage3D(Ct,B,Mt,oe,_e,ct,mt,St,Ye,Ee.data):O.texSubImage3D(Ct,B,Mt,oe,_e,ct,mt,St,Ye,ae,Ee),O.pixelStorei(O.UNPACK_ROW_LENGTH,Pe),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,le),O.pixelStorei(O.UNPACK_SKIP_PIXELS,un),O.pixelStorei(O.UNPACK_SKIP_ROWS,mi),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ln),B===0&&V.generateMipmaps&&O.generateMipmap(Ct),Ft.unbindTexture()},this.initRenderTarget=function(b){Vt.get(b).__webglFramebuffer===void 0&&L.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?L.setTextureCube(b,0):b.isData3DTexture?L.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?L.setTexture2DArray(b,0):L.setTexture2D(b,0),Ft.unbindTexture()},this.resetState=function(){z=0,U=0,S=null,Ft.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===lu?"display-p3":"srgb",e.unpackColorSpace=fe.workingColorSpace===Da?"display-p3":"srgb"}}class fu{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Zt(t),this.density=e}clone(){return new fu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class lx extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Zr extends Jn{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const u=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],p=[],v=[];let x=0;const A=[],g=n/2;let _=0;D(),o===!1&&(t>0&&P(!0),e>0&&P(!1)),this.setIndex(h),this.setAttribute("position",new an(f,3)),this.setAttribute("normal",new an(p,3)),this.setAttribute("uv",new an(v,2));function D(){const N=new W,z=new W;let U=0;const S=(e-t)/n;for(let T=0;T<=s;T++){const C=[],m=T/s,y=m*(e-t)+t;for(let I=0;I<=r;I++){const M=I/r,Y=M*c+a,et=Math.sin(Y),j=Math.cos(Y);z.x=y*et,z.y=-m*n+g,z.z=y*j,f.push(z.x,z.y,z.z),N.set(et,S,j).normalize(),p.push(N.x,N.y,N.z),v.push(M,1-m),C.push(x++)}A.push(C)}for(let T=0;T<r;T++)for(let C=0;C<s;C++){const m=A[C][T],y=A[C+1][T],I=A[C+1][T+1],M=A[C][T+1];t>0&&(h.push(m,y,M),U+=3),e>0&&(h.push(y,I,M),U+=3)}u.addGroup(_,U,0),_+=U}function P(N){const z=x,U=new de,S=new W;let T=0;const C=N===!0?t:e,m=N===!0?1:-1;for(let I=1;I<=r;I++)f.push(0,g*m,0),p.push(0,m,0),v.push(.5,.5),x++;const y=x;for(let I=0;I<=r;I++){const Y=I/r*c+a,et=Math.cos(Y),j=Math.sin(Y);S.x=C*j,S.y=g*m,S.z=C*et,f.push(S.x,S.y,S.z),p.push(0,m,0),U.x=et*.5+.5,U.y=j*.5*m+.5,v.push(U.x,U.y),x++}for(let I=0;I<r;I++){const M=z+I,Y=y+I;N===!0?h.push(Y,Y+1,M):h.push(Y+1,Y,M),T+=3}u.addGroup(_,T,N===!0?1:2),_+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class pu extends Jn{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let u=0;const h=[],f=new W,p=new W,v=[],x=[],A=[],g=[];for(let _=0;_<=n;_++){const D=[],P=_/n;let N=0;_===0&&o===0?N=.5/e:_===n&&c===Math.PI&&(N=-.5/e);for(let z=0;z<=e;z++){const U=z/e;f.x=-t*Math.cos(r+U*s)*Math.sin(o+P*a),f.y=t*Math.cos(o+P*a),f.z=t*Math.sin(r+U*s)*Math.sin(o+P*a),x.push(f.x,f.y,f.z),p.copy(f).normalize(),A.push(p.x,p.y,p.z),g.push(U+N,1-P),D.push(u++)}h.push(D)}for(let _=0;_<n;_++)for(let D=0;D<e;D++){const P=h[_][D+1],N=h[_][D],z=h[_+1][D],U=h[_+1][D+1];(_!==0||o>0)&&v.push(P,N,U),(_!==n-1||c<Math.PI)&&v.push(N,z,U)}this.setIndex(v),this.setAttribute("position",new an(x,3)),this.setAttribute("normal",new an(A,3)),this.setAttribute("uv",new an(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class mu extends Jn{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],c=[],u=[],h=new W,f=new W,p=new W;for(let v=0;v<=n;v++)for(let x=0;x<=r;x++){const A=x/r*s,g=v/n*Math.PI*2;f.x=(t+e*Math.cos(g))*Math.cos(A),f.y=(t+e*Math.cos(g))*Math.sin(A),f.z=e*Math.sin(g),a.push(f.x,f.y,f.z),h.x=t*Math.cos(A),h.y=t*Math.sin(A),p.subVectors(f,h).normalize(),c.push(p.x,p.y,p.z),u.push(x/r),u.push(v/n)}for(let v=1;v<=n;v++)for(let x=1;x<=r;x++){const A=(r+1)*v+x-1,g=(r+1)*(v-1)+x-1,_=(r+1)*(v-1)+x,D=(r+1)*v+x;o.push(A,g,D),o.push(g,_,D)}this.setIndex(o),this.setAttribute("position",new an(a,3)),this.setAttribute("normal",new an(c,3)),this.setAttribute("uv",new an(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mu(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ra extends io{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Of,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class np extends on{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Dl=new Ae,pd=new W,md=new W;class cx{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hu,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;pd.setFromMatrixPosition(t.matrixWorld),e.position.copy(pd),md.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(md),e.updateMatrixWorld(),Dl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Dl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ux extends cx{constructor(){super(new Yf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ll extends np{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new ux}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class hx extends np{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class dx{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=gd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function gd(){return performance.now()}const _d=new Ae;class fx{constructor(t,e,n=0,r=1/0){this.ray=new zf(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new uu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return _d.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_d),this}intersectObject(t,e=!0,n=[]){return Dc(t,this,n,e),n.sort(vd),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)Dc(t[r],this,n,e);return n.sort(vd),n}}function vd(i,t){return i.distance-t.distance}function Dc(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)Dc(s[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:eu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=eu);var yd={};/**
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
 */const ip=function(i){const t=[];let e=0;for(let n=0;n<i.length;n++){let r=i.charCodeAt(n);r<128?t[e++]=r:r<2048?(t[e++]=r>>6|192,t[e++]=r&63|128):(r&64512)===55296&&n+1<i.length&&(i.charCodeAt(n+1)&64512)===56320?(r=65536+((r&1023)<<10)+(i.charCodeAt(++n)&1023),t[e++]=r>>18|240,t[e++]=r>>12&63|128,t[e++]=r>>6&63|128,t[e++]=r&63|128):(t[e++]=r>>12|224,t[e++]=r>>6&63|128,t[e++]=r&63|128)}return t},px=function(i){const t=[];let e=0,n=0;for(;e<i.length;){const r=i[e++];if(r<128)t[n++]=String.fromCharCode(r);else if(r>191&&r<224){const s=i[e++];t[n++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=i[e++],o=i[e++],a=i[e++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[n++]=String.fromCharCode(55296+(c>>10)),t[n++]=String.fromCharCode(56320+(c&1023))}else{const s=i[e++],o=i[e++];t[n++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return t.join("")},rp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,t){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<i.length;r+=3){const s=i[r],o=r+1<i.length,a=o?i[r+1]:0,c=r+2<i.length,u=c?i[r+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let p=(a&15)<<2|u>>6,v=u&63;c||(v=64,o||(p=64)),n.push(e[h],e[f],e[p],e[v])}return n.join("")},encodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(i):this.encodeByteArray(ip(i),t)},decodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(i):px(this.decodeStringToByteArray(i,t))},decodeStringToByteArray(i,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<i.length;){const s=e[i.charAt(r++)],a=r<i.length?e[i.charAt(r)]:0;++r;const u=r<i.length?e[i.charAt(r)]:64;++r;const f=r<i.length?e[i.charAt(r)]:64;if(++r,s==null||a==null||u==null||f==null)throw new mx;const p=s<<2|a>>4;if(n.push(p),u!==64){const v=a<<4&240|u>>2;if(n.push(v),f!==64){const x=u<<6&192|f;n.push(x)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class mx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gx=function(i){const t=ip(i);return rp.encodeByteArray(t,!0)},ma=function(i){return gx(i).replace(/\./g,"")},_x=function(i){try{return rp.decodeString(i,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function vx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yx=()=>vx().__FIREBASE_DEFAULTS__,Ex=()=>{if(typeof process>"u"||typeof yd>"u")return;const i=yd.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},xx=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=i&&_x(i[1]);return t&&JSON.parse(t)},gu=()=>{try{return yx()||Ex()||xx()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Sx=i=>{var t,e;return(e=(t=gu())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[i]},Tx=i=>{const t=Sx(i);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),n]:[t.substring(0,e),n]},sp=()=>{var i;return(i=gu())===null||i===void 0?void 0:i.config};/**
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
 */class Mx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
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
 */function Ax(i,t){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",r=i.iat||0,s=i.sub||i.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},i);return[ma(JSON.stringify(e)),ma(JSON.stringify(o)),""].join(".")}/**
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
 */function wx(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bx(){var i;const t=(i=gu())===null||i===void 0?void 0:i.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Rx(){return!bx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Cx(){try{return typeof indexedDB=="object"}catch{return!1}}function Ix(){return new Promise((i,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),e||self.indexedDB.deleteDatabase(n),i(!0)},r.onupgradeneeded=()=>{e=!1},r.onerror=()=>{var s;t(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(e){t(e)}})}/**
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
 */const Px="FirebaseError";class hs extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=Px,Object.setPrototypeOf(this,hs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,op.prototype.create)}}class op{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,s=this.errors[t],o=s?Dx(s,n):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new hs(r,a,n)}}function Dx(i,t){return i.replace(Lx,(e,n)=>{const r=t[n];return r!=null?String(r):`<${n}?>`})}const Lx=/\{\$([^}]+)}/g;function Lc(i,t){if(i===t)return!0;const e=Object.keys(i),n=Object.keys(t);for(const r of e){if(!n.includes(r))return!1;const s=i[r],o=t[r];if(Ed(s)&&Ed(o)){if(!Lc(s,o))return!1}else if(s!==o)return!1}for(const r of n)if(!e.includes(r))return!1;return!0}function Ed(i){return i!==null&&typeof i=="object"}/**
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
 */function Oi(i){return i&&i._delegate?i._delegate:i}class Ws{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Zi="[DEFAULT]";/**
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
 */class Nx{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new Mx;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:e});r&&n.resolve(r)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(t?.identifier),r=(e=t?.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ox(t))try{this.getOrInitializeService({instanceIdentifier:Zi})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:r});n.resolve(s)}catch{}}}}clearInstance(t=Zi){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Zi){return this.instances.has(t)}getOptions(t=Zi){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);n===a&&o.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),s=(n=this.onInitCallbacks.get(r))!==null&&n!==void 0?n:new Set;s.add(t),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&t(o,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Ux(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=Zi){return this.component?this.component.multipleInstances?t:Zi:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ux(i){return i===Zi?void 0:i}function Ox(i){return i.instantiationMode==="EAGER"}/**
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
 */class Fx{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Nx(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ce;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ce||(ce={}));const Vx={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},Bx=ce.INFO,kx={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},zx=(i,t,...e)=>{if(t<i.logLevel)return;const n=new Date().toISOString(),r=kx[t];if(r)console[r](`[${n}]  ${i.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ap{constructor(t){this.name=t,this._logLevel=Bx,this._logHandler=zx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ce))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Vx[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...t),this._logHandler(this,ce.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...t),this._logHandler(this,ce.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...t),this._logHandler(this,ce.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...t),this._logHandler(this,ce.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...t),this._logHandler(this,ce.ERROR,...t)}}const Hx=(i,t)=>t.some(e=>i instanceof e);let xd,Sd;function Gx(){return xd||(xd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wx(){return Sd||(Sd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lp=new WeakMap,Nc=new WeakMap,cp=new WeakMap,Nl=new WeakMap,_u=new WeakMap;function qx(i){const t=new Promise((e,n)=>{const r=()=>{i.removeEventListener("success",s),i.removeEventListener("error",o)},s=()=>{e(Pi(i.result)),r()},o=()=>{n(i.error),r()};i.addEventListener("success",s),i.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&lp.set(e,i)}).catch(()=>{}),_u.set(t,i),t}function Xx(i){if(Nc.has(i))return;const t=new Promise((e,n)=>{const r=()=>{i.removeEventListener("complete",s),i.removeEventListener("error",o),i.removeEventListener("abort",o)},s=()=>{e(),r()},o=()=>{n(i.error||new DOMException("AbortError","AbortError")),r()};i.addEventListener("complete",s),i.addEventListener("error",o),i.addEventListener("abort",o)});Nc.set(i,t)}let Uc={get(i,t,e){if(i instanceof IDBTransaction){if(t==="done")return Nc.get(i);if(t==="objectStoreNames")return i.objectStoreNames||cp.get(i);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Pi(i[t])},set(i,t,e){return i[t]=e,!0},has(i,t){return i instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in i}};function jx(i){Uc=i(Uc)}function $x(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const n=i.call(Ul(this),t,...e);return cp.set(n,t.sort?t.sort():[t]),Pi(n)}:Wx().includes(i)?function(...t){return i.apply(Ul(this),t),Pi(lp.get(this))}:function(...t){return Pi(i.apply(Ul(this),t))}}function Kx(i){return typeof i=="function"?$x(i):(i instanceof IDBTransaction&&Xx(i),Hx(i,Gx())?new Proxy(i,Uc):i)}function Pi(i){if(i instanceof IDBRequest)return qx(i);if(Nl.has(i))return Nl.get(i);const t=Kx(i);return t!==i&&(Nl.set(i,t),_u.set(t,i)),t}const Ul=i=>_u.get(i);function Yx(i,t,{blocked:e,upgrade:n,blocking:r,terminated:s}={}){const o=indexedDB.open(i,t),a=Pi(o);return n&&o.addEventListener("upgradeneeded",c=>{n(Pi(o.result),c.oldVersion,c.newVersion,Pi(o.transaction),c)}),e&&o.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Qx=["get","getKey","getAll","getAllKeys","count"],Jx=["put","add","delete","clear"],Ol=new Map;function Td(i,t){if(!(i instanceof IDBDatabase&&!(t in i)&&typeof t=="string"))return;if(Ol.get(t))return Ol.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,r=Jx.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!(r||Qx.includes(e)))return;const s=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return n&&(u=u.index(a.shift())),(await Promise.all([u[e](...a),r&&c.done]))[0]};return Ol.set(t,s),s}jx(i=>({...i,get:(t,e,n)=>Td(t,e)||i.get(t,e,n),has:(t,e)=>!!Td(t,e)||i.has(t,e)}));/**
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
 */class Zx{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(tS(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function tS(i){const t=i.getComponent();return t?.type==="VERSION"}const Oc="@firebase/app",Md="0.10.13";/**
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
 */const di=new ap("@firebase/app"),eS="@firebase/app-compat",nS="@firebase/analytics-compat",iS="@firebase/analytics",rS="@firebase/app-check-compat",sS="@firebase/app-check",oS="@firebase/auth",aS="@firebase/auth-compat",lS="@firebase/database",cS="@firebase/data-connect",uS="@firebase/database-compat",hS="@firebase/functions",dS="@firebase/functions-compat",fS="@firebase/installations",pS="@firebase/installations-compat",mS="@firebase/messaging",gS="@firebase/messaging-compat",_S="@firebase/performance",vS="@firebase/performance-compat",yS="@firebase/remote-config",ES="@firebase/remote-config-compat",xS="@firebase/storage",SS="@firebase/storage-compat",TS="@firebase/firestore",MS="@firebase/vertexai-preview",AS="@firebase/firestore-compat",wS="firebase",bS="10.14.1";/**
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
 */const Fc="[DEFAULT]",RS={[Oc]:"fire-core",[eS]:"fire-core-compat",[iS]:"fire-analytics",[nS]:"fire-analytics-compat",[sS]:"fire-app-check",[rS]:"fire-app-check-compat",[oS]:"fire-auth",[aS]:"fire-auth-compat",[lS]:"fire-rtdb",[cS]:"fire-data-connect",[uS]:"fire-rtdb-compat",[hS]:"fire-fn",[dS]:"fire-fn-compat",[fS]:"fire-iid",[pS]:"fire-iid-compat",[mS]:"fire-fcm",[gS]:"fire-fcm-compat",[_S]:"fire-perf",[vS]:"fire-perf-compat",[yS]:"fire-rc",[ES]:"fire-rc-compat",[xS]:"fire-gcs",[SS]:"fire-gcs-compat",[TS]:"fire-fst",[AS]:"fire-fst-compat",[MS]:"fire-vertex","fire-js":"fire-js",[wS]:"fire-js-all"};/**
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
 */const ga=new Map,CS=new Map,Vc=new Map;function Ad(i,t){try{i.container.addComponent(t)}catch(e){di.debug(`Component ${t.name} failed to register with FirebaseApp ${i.name}`,e)}}function _a(i){const t=i.name;if(Vc.has(t))return di.debug(`There were multiple attempts to register component ${t}.`),!1;Vc.set(t,i);for(const e of ga.values())Ad(e,i);for(const e of CS.values())Ad(e,i);return!0}function IS(i,t){const e=i.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),i.container.getProvider(t)}/**
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
 */const PS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Di=new op("app","Firebase",PS);/**
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
 */class DS{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ws("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Di.create("app-deleted",{appName:this._name})}}/**
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
 */const LS=bS;function up(i,t={}){let e=i;typeof t!="object"&&(t={name:t});const n=Object.assign({name:Fc,automaticDataCollectionEnabled:!1},t),r=n.name;if(typeof r!="string"||!r)throw Di.create("bad-app-name",{appName:String(r)});if(e||(e=sp()),!e)throw Di.create("no-options");const s=ga.get(r);if(s){if(Lc(e,s.options)&&Lc(n,s.config))return s;throw Di.create("duplicate-app",{appName:r})}const o=new Fx(r);for(const c of Vc.values())o.addComponent(c);const a=new DS(e,n,o);return ga.set(r,a),a}function NS(i=Fc){const t=ga.get(i);if(!t&&i===Fc&&sp())return up();if(!t)throw Di.create("no-app",{appName:i});return t}function Wr(i,t,e){var n;let r=(n=RS[i])!==null&&n!==void 0?n:i;e&&(r+=`-${e}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),di.warn(a.join(" "));return}_a(new Ws(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const US="firebase-heartbeat-database",OS=1,qs="firebase-heartbeat-store";let Fl=null;function hp(){return Fl||(Fl=Yx(US,OS,{upgrade:(i,t)=>{switch(t){case 0:try{i.createObjectStore(qs)}catch(e){console.warn(e)}}}}).catch(i=>{throw Di.create("idb-open",{originalErrorMessage:i.message})})),Fl}async function FS(i){try{const e=(await hp()).transaction(qs),n=await e.objectStore(qs).get(dp(i));return await e.done,n}catch(t){if(t instanceof hs)di.warn(t.message);else{const e=Di.create("idb-get",{originalErrorMessage:t?.message});di.warn(e.message)}}}async function wd(i,t){try{const n=(await hp()).transaction(qs,"readwrite");await n.objectStore(qs).put(t,dp(i)),await n.done}catch(e){if(e instanceof hs)di.warn(e.message);else{const n=Di.create("idb-set",{originalErrorMessage:e?.message});di.warn(n.message)}}}function dp(i){return`${i.name}!${i.options.appId}`}/**
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
 */const VS=1024,BS=30*24*60*60*1e3;class kS{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new HS(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,e;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=bd();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=BS}),this._storage.overwrite(this._heartbeatsCache))}catch(n){di.warn(n)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=bd(),{heartbeatsToSend:n,unsentEntries:r}=zS(this._heartbeatsCache.heartbeats),s=ma(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return di.warn(e),""}}}function bd(){return new Date().toISOString().substring(0,10)}function zS(i,t=VS){const e=[];let n=i.slice();for(const r of i){const s=e.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Rd(e)>t){s.dates.pop();break}}else if(e.push({agent:r.agent,dates:[r.date]}),Rd(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class HS{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Cx()?Ix().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await FS(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const r=await this.read();return wd(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const r=await this.read();return wd(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Rd(i){return ma(JSON.stringify({version:2,heartbeats:i})).length}/**
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
 */function GS(i){_a(new Ws("platform-logger",t=>new Zx(t),"PRIVATE")),_a(new Ws("heartbeat",t=>new kS(t),"PRIVATE")),Wr(Oc,Md,i),Wr(Oc,Md,"esm2017"),Wr("fire-js","")}GS("");var Cd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var or,fp;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(S,T){function C(){}C.prototype=T.prototype,S.D=T.prototype,S.prototype=new C,S.prototype.constructor=S,S.C=function(m,y,I){for(var M=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)M[Y-2]=arguments[Y];return T.prototype[y].apply(m,M)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(S,T,C){C||(C=0);var m=Array(16);if(typeof T=="string")for(var y=0;16>y;++y)m[y]=T.charCodeAt(C++)|T.charCodeAt(C++)<<8|T.charCodeAt(C++)<<16|T.charCodeAt(C++)<<24;else for(y=0;16>y;++y)m[y]=T[C++]|T[C++]<<8|T[C++]<<16|T[C++]<<24;T=S.g[0],C=S.g[1],y=S.g[2];var I=S.g[3],M=T+(I^C&(y^I))+m[0]+3614090360&4294967295;T=C+(M<<7&4294967295|M>>>25),M=I+(y^T&(C^y))+m[1]+3905402710&4294967295,I=T+(M<<12&4294967295|M>>>20),M=y+(C^I&(T^C))+m[2]+606105819&4294967295,y=I+(M<<17&4294967295|M>>>15),M=C+(T^y&(I^T))+m[3]+3250441966&4294967295,C=y+(M<<22&4294967295|M>>>10),M=T+(I^C&(y^I))+m[4]+4118548399&4294967295,T=C+(M<<7&4294967295|M>>>25),M=I+(y^T&(C^y))+m[5]+1200080426&4294967295,I=T+(M<<12&4294967295|M>>>20),M=y+(C^I&(T^C))+m[6]+2821735955&4294967295,y=I+(M<<17&4294967295|M>>>15),M=C+(T^y&(I^T))+m[7]+4249261313&4294967295,C=y+(M<<22&4294967295|M>>>10),M=T+(I^C&(y^I))+m[8]+1770035416&4294967295,T=C+(M<<7&4294967295|M>>>25),M=I+(y^T&(C^y))+m[9]+2336552879&4294967295,I=T+(M<<12&4294967295|M>>>20),M=y+(C^I&(T^C))+m[10]+4294925233&4294967295,y=I+(M<<17&4294967295|M>>>15),M=C+(T^y&(I^T))+m[11]+2304563134&4294967295,C=y+(M<<22&4294967295|M>>>10),M=T+(I^C&(y^I))+m[12]+1804603682&4294967295,T=C+(M<<7&4294967295|M>>>25),M=I+(y^T&(C^y))+m[13]+4254626195&4294967295,I=T+(M<<12&4294967295|M>>>20),M=y+(C^I&(T^C))+m[14]+2792965006&4294967295,y=I+(M<<17&4294967295|M>>>15),M=C+(T^y&(I^T))+m[15]+1236535329&4294967295,C=y+(M<<22&4294967295|M>>>10),M=T+(y^I&(C^y))+m[1]+4129170786&4294967295,T=C+(M<<5&4294967295|M>>>27),M=I+(C^y&(T^C))+m[6]+3225465664&4294967295,I=T+(M<<9&4294967295|M>>>23),M=y+(T^C&(I^T))+m[11]+643717713&4294967295,y=I+(M<<14&4294967295|M>>>18),M=C+(I^T&(y^I))+m[0]+3921069994&4294967295,C=y+(M<<20&4294967295|M>>>12),M=T+(y^I&(C^y))+m[5]+3593408605&4294967295,T=C+(M<<5&4294967295|M>>>27),M=I+(C^y&(T^C))+m[10]+38016083&4294967295,I=T+(M<<9&4294967295|M>>>23),M=y+(T^C&(I^T))+m[15]+3634488961&4294967295,y=I+(M<<14&4294967295|M>>>18),M=C+(I^T&(y^I))+m[4]+3889429448&4294967295,C=y+(M<<20&4294967295|M>>>12),M=T+(y^I&(C^y))+m[9]+568446438&4294967295,T=C+(M<<5&4294967295|M>>>27),M=I+(C^y&(T^C))+m[14]+3275163606&4294967295,I=T+(M<<9&4294967295|M>>>23),M=y+(T^C&(I^T))+m[3]+4107603335&4294967295,y=I+(M<<14&4294967295|M>>>18),M=C+(I^T&(y^I))+m[8]+1163531501&4294967295,C=y+(M<<20&4294967295|M>>>12),M=T+(y^I&(C^y))+m[13]+2850285829&4294967295,T=C+(M<<5&4294967295|M>>>27),M=I+(C^y&(T^C))+m[2]+4243563512&4294967295,I=T+(M<<9&4294967295|M>>>23),M=y+(T^C&(I^T))+m[7]+1735328473&4294967295,y=I+(M<<14&4294967295|M>>>18),M=C+(I^T&(y^I))+m[12]+2368359562&4294967295,C=y+(M<<20&4294967295|M>>>12),M=T+(C^y^I)+m[5]+4294588738&4294967295,T=C+(M<<4&4294967295|M>>>28),M=I+(T^C^y)+m[8]+2272392833&4294967295,I=T+(M<<11&4294967295|M>>>21),M=y+(I^T^C)+m[11]+1839030562&4294967295,y=I+(M<<16&4294967295|M>>>16),M=C+(y^I^T)+m[14]+4259657740&4294967295,C=y+(M<<23&4294967295|M>>>9),M=T+(C^y^I)+m[1]+2763975236&4294967295,T=C+(M<<4&4294967295|M>>>28),M=I+(T^C^y)+m[4]+1272893353&4294967295,I=T+(M<<11&4294967295|M>>>21),M=y+(I^T^C)+m[7]+4139469664&4294967295,y=I+(M<<16&4294967295|M>>>16),M=C+(y^I^T)+m[10]+3200236656&4294967295,C=y+(M<<23&4294967295|M>>>9),M=T+(C^y^I)+m[13]+681279174&4294967295,T=C+(M<<4&4294967295|M>>>28),M=I+(T^C^y)+m[0]+3936430074&4294967295,I=T+(M<<11&4294967295|M>>>21),M=y+(I^T^C)+m[3]+3572445317&4294967295,y=I+(M<<16&4294967295|M>>>16),M=C+(y^I^T)+m[6]+76029189&4294967295,C=y+(M<<23&4294967295|M>>>9),M=T+(C^y^I)+m[9]+3654602809&4294967295,T=C+(M<<4&4294967295|M>>>28),M=I+(T^C^y)+m[12]+3873151461&4294967295,I=T+(M<<11&4294967295|M>>>21),M=y+(I^T^C)+m[15]+530742520&4294967295,y=I+(M<<16&4294967295|M>>>16),M=C+(y^I^T)+m[2]+3299628645&4294967295,C=y+(M<<23&4294967295|M>>>9),M=T+(y^(C|~I))+m[0]+4096336452&4294967295,T=C+(M<<6&4294967295|M>>>26),M=I+(C^(T|~y))+m[7]+1126891415&4294967295,I=T+(M<<10&4294967295|M>>>22),M=y+(T^(I|~C))+m[14]+2878612391&4294967295,y=I+(M<<15&4294967295|M>>>17),M=C+(I^(y|~T))+m[5]+4237533241&4294967295,C=y+(M<<21&4294967295|M>>>11),M=T+(y^(C|~I))+m[12]+1700485571&4294967295,T=C+(M<<6&4294967295|M>>>26),M=I+(C^(T|~y))+m[3]+2399980690&4294967295,I=T+(M<<10&4294967295|M>>>22),M=y+(T^(I|~C))+m[10]+4293915773&4294967295,y=I+(M<<15&4294967295|M>>>17),M=C+(I^(y|~T))+m[1]+2240044497&4294967295,C=y+(M<<21&4294967295|M>>>11),M=T+(y^(C|~I))+m[8]+1873313359&4294967295,T=C+(M<<6&4294967295|M>>>26),M=I+(C^(T|~y))+m[15]+4264355552&4294967295,I=T+(M<<10&4294967295|M>>>22),M=y+(T^(I|~C))+m[6]+2734768916&4294967295,y=I+(M<<15&4294967295|M>>>17),M=C+(I^(y|~T))+m[13]+1309151649&4294967295,C=y+(M<<21&4294967295|M>>>11),M=T+(y^(C|~I))+m[4]+4149444226&4294967295,T=C+(M<<6&4294967295|M>>>26),M=I+(C^(T|~y))+m[11]+3174756917&4294967295,I=T+(M<<10&4294967295|M>>>22),M=y+(T^(I|~C))+m[2]+718787259&4294967295,y=I+(M<<15&4294967295|M>>>17),M=C+(I^(y|~T))+m[9]+3951481745&4294967295,S.g[0]=S.g[0]+T&4294967295,S.g[1]=S.g[1]+(y+(M<<21&4294967295|M>>>11))&4294967295,S.g[2]=S.g[2]+y&4294967295,S.g[3]=S.g[3]+I&4294967295}n.prototype.u=function(S,T){T===void 0&&(T=S.length);for(var C=T-this.blockSize,m=this.B,y=this.h,I=0;I<T;){if(y==0)for(;I<=C;)r(this,S,I),I+=this.blockSize;if(typeof S=="string"){for(;I<T;)if(m[y++]=S.charCodeAt(I++),y==this.blockSize){r(this,m),y=0;break}}else for(;I<T;)if(m[y++]=S[I++],y==this.blockSize){r(this,m),y=0;break}}this.h=y,this.o+=T},n.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var T=1;T<S.length-8;++T)S[T]=0;var C=8*this.o;for(T=S.length-8;T<S.length;++T)S[T]=C&255,C/=256;for(this.u(S),S=Array(16),T=C=0;4>T;++T)for(var m=0;32>m;m+=8)S[C++]=this.g[T]>>>m&255;return S};function s(S,T){var C=a;return Object.prototype.hasOwnProperty.call(C,S)?C[S]:C[S]=T(S)}function o(S,T){this.h=T;for(var C=[],m=!0,y=S.length-1;0<=y;y--){var I=S[y]|0;m&&I==T||(C[y]=I,m=!1)}this.g=C}var a={};function c(S){return-128<=S&&128>S?s(S,function(T){return new o([T|0],0>T?-1:0)}):new o([S|0],0>S?-1:0)}function u(S){if(isNaN(S)||!isFinite(S))return f;if(0>S)return g(u(-S));for(var T=[],C=1,m=0;S>=C;m++)T[m]=S/C|0,C*=4294967296;return new o(T,0)}function h(S,T){if(S.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(S.charAt(0)=="-")return g(h(S.substring(1),T));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=u(Math.pow(T,8)),m=f,y=0;y<S.length;y+=8){var I=Math.min(8,S.length-y),M=parseInt(S.substring(y,y+I),T);8>I?(I=u(Math.pow(T,I)),m=m.j(I).add(u(M))):(m=m.j(C),m=m.add(u(M)))}return m}var f=c(0),p=c(1),v=c(16777216);i=o.prototype,i.m=function(){if(A(this))return-g(this).m();for(var S=0,T=1,C=0;C<this.g.length;C++){var m=this.i(C);S+=(0<=m?m:4294967296+m)*T,T*=4294967296}return S},i.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(x(this))return"0";if(A(this))return"-"+g(this).toString(S);for(var T=u(Math.pow(S,6)),C=this,m="";;){var y=N(C,T).g;C=_(C,y.j(T));var I=((0<C.g.length?C.g[0]:C.h)>>>0).toString(S);if(C=y,x(C))return I+m;for(;6>I.length;)I="0"+I;m=I+m}},i.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function x(S){if(S.h!=0)return!1;for(var T=0;T<S.g.length;T++)if(S.g[T]!=0)return!1;return!0}function A(S){return S.h==-1}i.l=function(S){return S=_(this,S),A(S)?-1:x(S)?0:1};function g(S){for(var T=S.g.length,C=[],m=0;m<T;m++)C[m]=~S.g[m];return new o(C,~S.h).add(p)}i.abs=function(){return A(this)?g(this):this},i.add=function(S){for(var T=Math.max(this.g.length,S.g.length),C=[],m=0,y=0;y<=T;y++){var I=m+(this.i(y)&65535)+(S.i(y)&65535),M=(I>>>16)+(this.i(y)>>>16)+(S.i(y)>>>16);m=M>>>16,I&=65535,M&=65535,C[y]=M<<16|I}return new o(C,C[C.length-1]&-2147483648?-1:0)};function _(S,T){return S.add(g(T))}i.j=function(S){if(x(this)||x(S))return f;if(A(this))return A(S)?g(this).j(g(S)):g(g(this).j(S));if(A(S))return g(this.j(g(S)));if(0>this.l(v)&&0>S.l(v))return u(this.m()*S.m());for(var T=this.g.length+S.g.length,C=[],m=0;m<2*T;m++)C[m]=0;for(m=0;m<this.g.length;m++)for(var y=0;y<S.g.length;y++){var I=this.i(m)>>>16,M=this.i(m)&65535,Y=S.i(y)>>>16,et=S.i(y)&65535;C[2*m+2*y]+=M*et,D(C,2*m+2*y),C[2*m+2*y+1]+=I*et,D(C,2*m+2*y+1),C[2*m+2*y+1]+=M*Y,D(C,2*m+2*y+1),C[2*m+2*y+2]+=I*Y,D(C,2*m+2*y+2)}for(m=0;m<T;m++)C[m]=C[2*m+1]<<16|C[2*m];for(m=T;m<2*T;m++)C[m]=0;return new o(C,0)};function D(S,T){for(;(S[T]&65535)!=S[T];)S[T+1]+=S[T]>>>16,S[T]&=65535,T++}function P(S,T){this.g=S,this.h=T}function N(S,T){if(x(T))throw Error("division by zero");if(x(S))return new P(f,f);if(A(S))return T=N(g(S),T),new P(g(T.g),g(T.h));if(A(T))return T=N(S,g(T)),new P(g(T.g),T.h);if(30<S.g.length){if(A(S)||A(T))throw Error("slowDivide_ only works with positive integers.");for(var C=p,m=T;0>=m.l(S);)C=z(C),m=z(m);var y=U(C,1),I=U(m,1);for(m=U(m,2),C=U(C,2);!x(m);){var M=I.add(m);0>=M.l(S)&&(y=y.add(C),I=M),m=U(m,1),C=U(C,1)}return T=_(S,y.j(T)),new P(y,T)}for(y=f;0<=S.l(T);){for(C=Math.max(1,Math.floor(S.m()/T.m())),m=Math.ceil(Math.log(C)/Math.LN2),m=48>=m?1:Math.pow(2,m-48),I=u(C),M=I.j(T);A(M)||0<M.l(S);)C-=m,I=u(C),M=I.j(T);x(I)&&(I=p),y=y.add(I),S=_(S,M)}return new P(y,S)}i.A=function(S){return N(this,S).h},i.and=function(S){for(var T=Math.max(this.g.length,S.g.length),C=[],m=0;m<T;m++)C[m]=this.i(m)&S.i(m);return new o(C,this.h&S.h)},i.or=function(S){for(var T=Math.max(this.g.length,S.g.length),C=[],m=0;m<T;m++)C[m]=this.i(m)|S.i(m);return new o(C,this.h|S.h)},i.xor=function(S){for(var T=Math.max(this.g.length,S.g.length),C=[],m=0;m<T;m++)C[m]=this.i(m)^S.i(m);return new o(C,this.h^S.h)};function z(S){for(var T=S.g.length+1,C=[],m=0;m<T;m++)C[m]=S.i(m)<<1|S.i(m-1)>>>31;return new o(C,S.h)}function U(S,T){var C=T>>5;T%=32;for(var m=S.g.length-C,y=[],I=0;I<m;I++)y[I]=0<T?S.i(I+C)>>>T|S.i(I+C+1)<<32-T:S.i(I+C);return new o(y,S.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,fp=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,or=o}).apply(typeof Cd<"u"?Cd:typeof self<"u"?self:typeof window<"u"?window:{});var Xo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pp,Ns,mp,sa,Bc,gp,_p,vp;(function(){var i,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,E){return l==Array.prototype||l==Object.prototype||(l[d]=E.value),l};function e(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xo=="object"&&Xo];for(var d=0;d<l.length;++d){var E=l[d];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var n=e(this);function r(l,d){if(d)t:{var E=n;l=l.split(".");for(var R=0;R<l.length-1;R++){var k=l[R];if(!(k in E))break t;E=E[k]}l=l[l.length-1],R=E[l],d=d(R),d!=R&&d!=null&&t(E,l,{configurable:!0,writable:!0,value:d})}}function s(l,d){l instanceof String&&(l+="");var E=0,R=!1,k={next:function(){if(!R&&E<l.length){var X=E++;return{value:d(X,l[X]),done:!1}}return R=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}r("Array.prototype.values",function(l){return l||function(){return s(this,function(d,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function u(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,E){return l.call.apply(l.bind,arguments)}function f(l,d,E){if(!l)throw Error();if(2<arguments.length){var R=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,R),l.apply(d,k)}}return function(){return l.apply(d,arguments)}}function p(l,d,E){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,p.apply(null,arguments)}function v(l,d){var E=Array.prototype.slice.call(arguments,1);return function(){var R=E.slice();return R.push.apply(R,arguments),l.apply(this,R)}}function x(l,d){function E(){}E.prototype=d.prototype,l.aa=d.prototype,l.prototype=new E,l.prototype.constructor=l,l.Qb=function(R,k,X){for(var ut=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)ut[ve-2]=arguments[ve];return d.prototype[k].apply(R,ut)}}function A(l){const d=l.length;if(0<d){const E=Array(d);for(let R=0;R<d;R++)E[R]=l[R];return E}return[]}function g(l,d){for(let E=1;E<arguments.length;E++){const R=arguments[E];if(c(R)){const k=l.length||0,X=R.length||0;l.length=k+X;for(let ut=0;ut<X;ut++)l[k+ut]=R[ut]}else l.push(R)}}class _{constructor(d,E){this.i=d,this.j=E,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function D(l){return/^[\s\xa0]*$/.test(l)}function P(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function N(l){return N[" "](l),l}N[" "]=function(){};var z=P().indexOf("Gecko")!=-1&&!(P().toLowerCase().indexOf("webkit")!=-1&&P().indexOf("Edge")==-1)&&!(P().indexOf("Trident")!=-1||P().indexOf("MSIE")!=-1)&&P().indexOf("Edge")==-1;function U(l,d,E){for(const R in l)d.call(E,l[R],R,l)}function S(l,d){for(const E in l)d.call(void 0,l[E],E,l)}function T(l){const d={};for(const E in l)d[E]=l[E];return d}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function m(l,d){let E,R;for(let k=1;k<arguments.length;k++){R=arguments[k];for(E in R)l[E]=R[E];for(let X=0;X<C.length;X++)E=C[X],Object.prototype.hasOwnProperty.call(R,E)&&(l[E]=R[E])}}function y(l){var d=1;l=l.split(":");const E=[];for(;0<d&&l.length;)E.push(l.shift()),d--;return l.length&&E.push(l.join(":")),E}function I(l){a.setTimeout(()=>{throw l},0)}function M(){var l=yt;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class Y{constructor(){this.h=this.g=null}add(d,E){const R=et.get();R.set(d,E),this.h?this.h.next=R:this.g=R,this.h=R}}var et=new _(()=>new j,l=>l.reset());class j{constructor(){this.next=this.g=this.h=null}set(d,E){this.h=d,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let nt,K=!1,yt=new Y,Et=()=>{const l=a.Promise.resolve(void 0);nt=()=>{l.then(Rt)}};var Rt=()=>{for(var l;l=M();){try{l.h.call(l.g)}catch(E){I(E)}var d=et;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}K=!1};function Xt(){this.s=this.s,this.C=this.C}Xt.prototype.s=!1,Xt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Xt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Bt(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}Bt.prototype.h=function(){this.defaultPrevented=!0};var Q=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const E=()=>{};a.addEventListener("test",E,d),a.removeEventListener("test",E,d)}catch{}return l}();function ot(l,d){if(Bt.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var E=this.type=l.type,R=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(z){t:{try{N(d.nodeName);var k=!0;break t}catch{}k=!1}k||(d=null)}}else E=="mouseover"?d=l.fromElement:E=="mouseout"&&(d=l.toElement);this.relatedTarget=d,R?(this.clientX=R.clientX!==void 0?R.clientX:R.pageX,this.clientY=R.clientY!==void 0?R.clientY:R.pageY,this.screenX=R.screenX||0,this.screenY=R.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:At[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&ot.aa.h.call(this)}}x(ot,Bt);var At={2:"touch",3:"pen",4:"mouse"};ot.prototype.h=function(){ot.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var _t="closure_listenable_"+(1e6*Math.random()|0),zt=0;function Ut(l,d,E,R,k){this.listener=l,this.proxy=null,this.src=d,this.type=E,this.capture=!!R,this.ha=k,this.key=++zt,this.da=this.fa=!1}function Kt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function se(l){this.src=l,this.g={},this.h=0}se.prototype.add=function(l,d,E,R,k){var X=l.toString();l=this.g[X],l||(l=this.g[X]=[],this.h++);var ut=O(l,d,R,k);return-1<ut?(d=l[ut],E||(d.fa=!1)):(d=new Ut(d,this.src,X,!!R,k),d.fa=E,l.push(d)),d};function Jt(l,d){var E=d.type;if(E in l.g){var R=l.g[E],k=Array.prototype.indexOf.call(R,d,void 0),X;(X=0<=k)&&Array.prototype.splice.call(R,k,1),X&&(Kt(d),l.g[E].length==0&&(delete l.g[E],l.h--))}}function O(l,d,E,R){for(var k=0;k<l.length;++k){var X=l[k];if(!X.da&&X.listener==d&&X.capture==!!E&&X.ha==R)return k}return-1}var We="closure_lm_"+(1e6*Math.random()|0),Yt={};function ee(l,d,E,R,k){if(Array.isArray(d)){for(var X=0;X<d.length;X++)ee(l,d[X],E,R,k);return null}return E=Z(E),l&&l[_t]?l.K(d,E,u(R)?!!R.capture:!1,k):Ft(l,d,E,!1,R,k)}function Ft(l,d,E,R,k,X){if(!d)throw Error("Invalid event type");var ut=u(k)?!!k.capture:!!k,ve=J(l);if(ve||(l[We]=ve=new se(l)),E=ve.add(d,E,R,ut,X),E.proxy)return E;if(R=ge(),E.proxy=R,R.src=l,R.listener=E,l.addEventListener)Q||(k=ut),k===void 0&&(k=!1),l.addEventListener(d.toString(),R,k);else if(l.attachEvent)l.attachEvent(w(d.toString()),R);else if(l.addListener&&l.removeListener)l.addListener(R);else throw Error("addEventListener and attachEvent are unavailable.");return E}function ge(){function l(E){return d.call(l.src,l.listener,E)}const d=H;return l}function Vt(l,d,E,R,k){if(Array.isArray(d))for(var X=0;X<d.length;X++)Vt(l,d[X],E,R,k);else R=u(R)?!!R.capture:!!R,E=Z(E),l&&l[_t]?(l=l.i,d=String(d).toString(),d in l.g&&(X=l.g[d],E=O(X,E,R,k),-1<E&&(Kt(X[E]),Array.prototype.splice.call(X,E,1),X.length==0&&(delete l.g[d],l.h--)))):l&&(l=J(l))&&(d=l.g[d.toString()],l=-1,d&&(l=O(d,E,R,k)),(E=-1<l?d[l]:null)&&L(E))}function L(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[_t])Jt(d.i,l);else{var E=l.type,R=l.proxy;d.removeEventListener?d.removeEventListener(E,R,l.capture):d.detachEvent?d.detachEvent(w(E),R):d.addListener&&d.removeListener&&d.removeListener(R),(E=J(d))?(Jt(E,l),E.h==0&&(E.src=null,d[We]=null)):Kt(l)}}}function w(l){return l in Yt?Yt[l]:Yt[l]="on"+l}function H(l,d){if(l.da)l=!0;else{d=new ot(d,this);var E=l.listener,R=l.ha||l.src;l.fa&&L(l),l=E.call(R,d)}return l}function J(l){return l=l[We],l instanceof se?l:null}var rt="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(l){return typeof l=="function"?l:(l[rt]||(l[rt]=function(d){return l.handleEvent(d)}),l[rt])}function dt(){Xt.call(this),this.i=new se(this),this.M=this,this.F=null}x(dt,Xt),dt.prototype[_t]=!0,dt.prototype.removeEventListener=function(l,d,E,R){Vt(this,l,d,E,R)};function at(l,d){var E,R=l.F;if(R)for(E=[];R;R=R.F)E.push(R);if(l=l.M,R=d.type||d,typeof d=="string")d=new Bt(d,l);else if(d instanceof Bt)d.target=d.target||l;else{var k=d;d=new Bt(R,l),m(d,k)}if(k=!0,E)for(var X=E.length-1;0<=X;X--){var ut=d.g=E[X];k=vt(ut,R,!0,d)&&k}if(ut=d.g=l,k=vt(ut,R,!0,d)&&k,k=vt(ut,R,!1,d)&&k,E)for(X=0;X<E.length;X++)ut=d.g=E[X],k=vt(ut,R,!1,d)&&k}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var E=l.g[d],R=0;R<E.length;R++)Kt(E[R]);delete l.g[d],l.h--}}this.F=null},dt.prototype.K=function(l,d,E,R){return this.i.add(String(l),d,!1,E,R)},dt.prototype.L=function(l,d,E,R){return this.i.add(String(l),d,!0,E,R)};function vt(l,d,E,R){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var k=!0,X=0;X<d.length;++X){var ut=d[X];if(ut&&!ut.da&&ut.capture==E){var ve=ut.listener,qe=ut.ha||ut.src;ut.fa&&Jt(l.i,ut),k=ve.call(qe,R)!==!1&&k}}return k&&!R.defaultPrevented}function ne(l,d,E){if(typeof l=="function")E&&(l=p(l,E));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function lt(l){l.g=ne(()=>{l.g=null,l.i&&(l.i=!1,lt(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class Tt extends Xt{constructor(d,E){super(),this.m=d,this.l=E,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:lt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Dt(l){Xt.call(this),this.h=l,this.g={}}x(Dt,Xt);var Ot=[];function xt(l){U(l.g,function(d,E){this.g.hasOwnProperty(E)&&L(d)},l),l.g={}}Dt.prototype.N=function(){Dt.aa.N.call(this),xt(this)},Dt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qt=a.JSON.stringify,Ht=a.JSON.parse,me=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function F(){}F.prototype.h=null;function gt(l){return l.h||(l.h=l.i())}function $(){}var tt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ft(){Bt.call(this,"d")}x(ft,Bt);function pt(){Bt.call(this,"c")}x(pt,Bt);var qt={},Me=null;function Oe(){return Me=Me||new dt}qt.La="serverreachability";function ie(l){Bt.call(this,qt.La,l)}x(ie,Bt);function Le(l){const d=Oe();at(d,new ie(d))}qt.STAT_EVENT="statevent";function Sn(l,d){Bt.call(this,qt.STAT_EVENT,l),this.stat=d}x(Sn,Bt);function ze(l){const d=Oe();at(d,new Sn(d,l))}qt.Ma="timingevent";function ms(l,d){Bt.call(this,qt.Ma,l),this.size=d}x(ms,Bt);function _n(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function Zn(){this.g=!0}Zn.prototype.xa=function(){this.g=!1};function fo(l,d,E,R,k,X){l.info(function(){if(l.g)if(X)for(var ut="",ve=X.split("&"),qe=0;qe<ve.length;qe++){var ue=ve[qe].split("=");if(1<ue.length){var Qe=ue[0];ue=ue[1];var Je=Qe.split("_");ut=2<=Je.length&&Je[1]=="type"?ut+(Qe+"="+ue+"&"):ut+(Qe+"=redacted&")}}else ut=null;else ut=X;return"XMLHTTP REQ ("+R+") [attempt "+k+"]: "+d+`
`+E+`
`+ut})}function po(l,d,E,R,k,X,ut){l.info(function(){return"XMLHTTP RESP ("+R+") [ attempt "+k+"]: "+d+`
`+E+`
`+X+" "+ut})}function bn(l,d,E,R){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+pr(l,E)+(R?" "+R:"")})}function mo(l,d){l.info(function(){return"TIMEOUT: "+d})}Zn.prototype.info=function(){};function pr(l,d){if(!l.g)return d;if(!d)return null;try{var E=JSON.parse(d);if(E){for(l=0;l<E.length;l++)if(Array.isArray(E[l])){var R=E[l];if(!(2>R.length)){var k=R[1];if(Array.isArray(k)&&!(1>k.length)){var X=k[0];if(X!="noop"&&X!="stop"&&X!="close")for(var ut=1;ut<k.length;ut++)k[ut]=""}}}}return Qt(E)}catch{return d}}var Gi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},gs={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},_s;function mr(){}x(mr,F),mr.prototype.g=function(){return new XMLHttpRequest},mr.prototype.i=function(){return{}},_s=new mr;function Vn(l,d,E,R){this.j=l,this.i=d,this.l=E,this.R=R||1,this.U=new Dt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new b}function b(){this.i=null,this.g="",this.h=!1}var V={},G={};function q(l,d,E){l.L=1,l.v=go(be(d)),l.m=E,l.P=!0,B(l,null)}function B(l,d){l.F=Date.now(),St(l),l.A=be(l.v);var E=l.A,R=l.R;Array.isArray(R)||(R=[String(R)]),Ju(E.i,"t",R),l.C=0,E=l.j.J,l.h=new b,l.g=gh(l.j,E?d:null,!l.m),0<l.O&&(l.M=new Tt(p(l.Y,l,l.g),l.O)),d=l.U,E=l.g,R=l.ca;var k="readystatechange";Array.isArray(k)||(k&&(Ot[0]=k.toString()),k=Ot);for(var X=0;X<k.length;X++){var ut=ee(E,k[X],R||d.handleEvent,!1,d.h||d);if(!ut)break;d.g[ut.key]=ut}d=l.H?T(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),Le(),fo(l.i,l.u,l.A,l.l,l.R,l.m)}Vn.prototype.ca=function(l){l=l.target;const d=this.M;d&&ti(l)==3?d.j():this.Y(l)},Vn.prototype.Y=function(l){try{if(l==this.g)t:{const Je=ti(this.g);var d=this.g.Ba();const Er=this.g.Z();if(!(3>Je)&&(Je!=3||this.g&&(this.h.h||this.g.oa()||sh(this.g)))){this.J||Je!=4||d==7||(d==8||0>=Er?Le(3):Le(2)),Lt(this);var E=this.g.Z();this.X=E;e:if(ct(this)){var R=sh(this.g);l="";var k=R.length,X=ti(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mt(this),Pt(this);var ut="";break e}this.h.i=new a.TextDecoder}for(d=0;d<k;d++)this.h.h=!0,l+=this.h.i.decode(R[d],{stream:!(X&&d==k-1)});R.length=0,this.h.g+=l,this.C=0,ut=this.h.g}else ut=this.g.oa();if(this.o=E==200,po(this.i,this.u,this.A,this.l,this.R,Je,E),this.o){if(this.T&&!this.K){e:{if(this.g){var ve,qe=this.g;if((ve=qe.g?qe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(ve)){var ue=ve;break e}}ue=null}if(E=ue)bn(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,oe(this,E);else{this.o=!1,this.s=3,ze(12),Mt(this),Pt(this);break t}}if(this.P){E=!0;let Cn;for(;!this.J&&this.C<ut.length;)if(Cn=mt(this,ut),Cn==G){Je==4&&(this.s=4,ze(14),E=!1),bn(this.i,this.l,null,"[Incomplete Response]");break}else if(Cn==V){this.s=4,ze(15),bn(this.i,this.l,ut,"[Invalid Chunk]"),E=!1;break}else bn(this.i,this.l,Cn,null),oe(this,Cn);if(ct(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Je!=4||ut.length!=0||this.h.h||(this.s=1,ze(16),E=!1),this.o=this.o&&E,!E)bn(this.i,this.l,ut,"[Invalid Chunked Response]"),Mt(this),Pt(this);else if(0<ut.length&&!this.W){this.W=!0;var Qe=this.j;Qe.g==this&&Qe.ba&&!Qe.M&&(Qe.j.info("Great, no buffering proxy detected. Bytes received: "+ut.length),Za(Qe),Qe.M=!0,ze(11))}}else bn(this.i,this.l,ut,null),oe(this,ut);Je==4&&Mt(this),this.o&&!this.J&&(Je==4?dh(this.j,this):(this.o=!1,St(this)))}else rg(this.g),E==400&&0<ut.indexOf("Unknown SID")?(this.s=3,ze(12)):(this.s=0,ze(13)),Mt(this),Pt(this)}}}catch{}finally{}};function ct(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function mt(l,d){var E=l.C,R=d.indexOf(`
`,E);return R==-1?G:(E=Number(d.substring(E,R)),isNaN(E)?V:(R+=1,R+E>d.length?G:(d=d.slice(R,R+E),l.C=R+E,d)))}Vn.prototype.cancel=function(){this.J=!0,Mt(this)};function St(l){l.S=Date.now()+l.I,wt(l,l.I)}function wt(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=_n(p(l.ba,l),d)}function Lt(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Vn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(mo(this.i,this.A),this.L!=2&&(Le(),ze(17)),Mt(this),this.s=2,Pt(this)):wt(this,this.S-l)};function Pt(l){l.j.G==0||l.J||dh(l.j,l)}function Mt(l){Lt(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,xt(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function oe(l,d){try{var E=l.j;if(E.G!=0&&(E.g==l||Ct(E.h,l))){if(!l.K&&Ct(E.h,l)&&E.G==3){try{var R=E.Da.g.parse(d)}catch{R=null}if(Array.isArray(R)&&R.length==3){var k=R;if(k[0]==0){t:if(!E.u){if(E.g)if(E.g.F+3e3<l.F)So(E),Eo(E);else break t;Ja(E),ze(18)}}else E.za=k[1],0<E.za-E.T&&37500>k[2]&&E.F&&E.v==0&&!E.C&&(E.C=_n(p(E.Za,E),6e3));if(1>=ae(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else Wi(E,11)}else if((l.K||E.g==l)&&So(E),!D(d))for(k=E.Da.g.parse(d),d=0;d<k.length;d++){let ue=k[d];if(E.T=ue[0],ue=ue[1],E.G==2)if(ue[0]=="c"){E.K=ue[1],E.ia=ue[2];const Qe=ue[3];Qe!=null&&(E.la=Qe,E.j.info("VER="+E.la));const Je=ue[4];Je!=null&&(E.Aa=Je,E.j.info("SVER="+E.Aa));const Er=ue[5];Er!=null&&typeof Er=="number"&&0<Er&&(R=1.5*Er,E.L=R,E.j.info("backChannelRequestTimeoutMs_="+R)),R=E;const Cn=l.g;if(Cn){const Mo=Cn.g?Cn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Mo){var X=R.h;X.g||Mo.indexOf("spdy")==-1&&Mo.indexOf("quic")==-1&&Mo.indexOf("h2")==-1||(X.j=X.l,X.g=new Set,X.h&&(Pe(X,X.h),X.h=null))}if(R.D){const tl=Cn.g?Cn.g.getResponseHeader("X-HTTP-Session-Id"):null;tl&&(R.ya=tl,xe(R.I,R.D,tl))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-l.F,E.j.info("Handshake RTT: "+E.R+"ms")),R=E;var ut=l;if(R.qa=mh(R,R.J?R.ia:null,R.W),ut.K){le(R.h,ut);var ve=ut,qe=R.L;qe&&(ve.I=qe),ve.B&&(Lt(ve),St(ve)),R.g=ut}else uh(R);0<E.i.length&&xo(E)}else ue[0]!="stop"&&ue[0]!="close"||Wi(E,7);else E.G==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?Wi(E,7):Qa(E):ue[0]!="noop"&&E.l&&E.l.ta(ue),E.v=0)}}Le(4)}catch{}}var _e=class{constructor(l,d){this.g=l,this.map=d}};function Ee(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ye(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function ae(l){return l.h?1:l.g?l.g.size:0}function Ct(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function Pe(l,d){l.g?l.g.add(d):l.h=d}function le(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}Ee.prototype.cancel=function(){if(this.i=un(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function un(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const E of l.g.values())d=d.concat(E.D);return d}return A(l.i)}function mi(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var d=[],E=l.length,R=0;R<E;R++)d.push(l[R]);return d}d=[],E=0;for(R in l)d[E++]=l[R];return d}function ln(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var d=[];l=l.length;for(var E=0;E<l;E++)d.push(E);return d}d=[],E=0;for(const R in l)d[E++]=R;return d}}}function gr(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var E=ln(l),R=mi(l),k=R.length,X=0;X<k;X++)d.call(void 0,R[X],E&&E[X],l)}var Te=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bn(l,d){if(l){l=l.split("&");for(var E=0;E<l.length;E++){var R=l[E].indexOf("="),k=null;if(0<=R){var X=l[E].substring(0,R);k=l[E].substring(R+1)}else X=l[E];d(X,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Rn(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Rn){this.h=l.h,gi(this,l.j),this.o=l.o,this.g=l.g,_r(this,l.s),this.l=l.l;var d=l.i,E=new xs;E.i=d.i,d.g&&(E.g=new Map(d.g),E.h=d.h),vs(this,E),this.m=l.m}else l&&(d=String(l).match(Te))?(this.h=!1,gi(this,d[1]||"",!0),this.o=ys(d[2]||""),this.g=ys(d[3]||"",!0),_r(this,d[4]),this.l=ys(d[5]||"",!0),vs(this,d[6]||"",!0),this.m=ys(d[7]||"")):(this.h=!1,this.i=new xs(null,this.h))}Rn.prototype.toString=function(){var l=[],d=this.j;d&&l.push(Es(d,Ku,!0),":");var E=this.g;return(E||d=="file")&&(l.push("//"),(d=this.o)&&l.push(Es(d,Ku,!0),"@"),l.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&l.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&l.push("/"),l.push(Es(E,E.charAt(0)=="/"?$m:jm,!0))),(E=this.i.toString())&&l.push("?",E),(E=this.m)&&l.push("#",Es(E,Ym)),l.join("")};function be(l){return new Rn(l)}function gi(l,d,E){l.j=E?ys(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function _r(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function vs(l,d,E){d instanceof xs?(l.i=d,Qm(l.i,l.h)):(E||(d=Es(d,Km)),l.i=new xs(d,l.h))}function xe(l,d,E){l.i.set(d,E)}function go(l){return xe(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function ys(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Es(l,d,E){return typeof l=="string"?(l=encodeURI(l).replace(d,Xm),E&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Xm(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Ku=/[#\/\?@]/g,jm=/[#\?:]/g,$m=/[#\?]/g,Km=/[#\?@]/g,Ym=/#/g;function xs(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function _i(l){l.g||(l.g=new Map,l.h=0,l.i&&Bn(l.i,function(d,E){l.add(decodeURIComponent(d.replace(/\+/g," ")),E)}))}i=xs.prototype,i.add=function(l,d){_i(this),this.i=null,l=vr(this,l);var E=this.g.get(l);return E||this.g.set(l,E=[]),E.push(d),this.h+=1,this};function Yu(l,d){_i(l),d=vr(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function Qu(l,d){return _i(l),d=vr(l,d),l.g.has(d)}i.forEach=function(l,d){_i(this),this.g.forEach(function(E,R){E.forEach(function(k){l.call(d,k,R,this)},this)},this)},i.na=function(){_i(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),E=[];for(let R=0;R<d.length;R++){const k=l[R];for(let X=0;X<k.length;X++)E.push(d[R])}return E},i.V=function(l){_i(this);let d=[];if(typeof l=="string")Qu(this,l)&&(d=d.concat(this.g.get(vr(this,l))));else{l=Array.from(this.g.values());for(let E=0;E<l.length;E++)d=d.concat(l[E])}return d},i.set=function(l,d){return _i(this),this.i=null,l=vr(this,l),Qu(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},i.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function Ju(l,d,E){Yu(l,d),0<E.length&&(l.i=null,l.g.set(vr(l,d),A(E)),l.h+=E.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var E=0;E<d.length;E++){var R=d[E];const X=encodeURIComponent(String(R)),ut=this.V(R);for(R=0;R<ut.length;R++){var k=X;ut[R]!==""&&(k+="="+encodeURIComponent(String(ut[R]))),l.push(k)}}return this.i=l.join("&")};function vr(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function Qm(l,d){d&&!l.j&&(_i(l),l.i=null,l.g.forEach(function(E,R){var k=R.toLowerCase();R!=k&&(Yu(this,R),Ju(this,k,E))},l)),l.j=d}function Jm(l,d){const E=new Zn;if(a.Image){const R=new Image;R.onload=v(vi,E,"TestLoadImage: loaded",!0,d,R),R.onerror=v(vi,E,"TestLoadImage: error",!1,d,R),R.onabort=v(vi,E,"TestLoadImage: abort",!1,d,R),R.ontimeout=v(vi,E,"TestLoadImage: timeout",!1,d,R),a.setTimeout(function(){R.ontimeout&&R.ontimeout()},1e4),R.src=l}else d(!1)}function Zm(l,d){const E=new Zn,R=new AbortController,k=setTimeout(()=>{R.abort(),vi(E,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:R.signal}).then(X=>{clearTimeout(k),X.ok?vi(E,"TestPingServer: ok",!0,d):vi(E,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(k),vi(E,"TestPingServer: error",!1,d)})}function vi(l,d,E,R,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),R(E)}catch{}}function tg(){this.g=new me}function eg(l,d,E){const R=E||"";try{gr(l,function(k,X){let ut=k;u(k)&&(ut=Qt(k)),d.push(R+X+"="+encodeURIComponent(ut))})}catch(k){throw d.push(R+"type="+encodeURIComponent("_badmap")),k}}function _o(l){this.l=l.Ub||null,this.j=l.eb||!1}x(_o,F),_o.prototype.g=function(){return new vo(this.l,this.j)},_o.prototype.i=function(l){return function(){return l}}({});function vo(l,d){dt.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(vo,dt),i=vo.prototype,i.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,Ts(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ss(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Ts(this)),this.g&&(this.readyState=3,Ts(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Zu(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Zu(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?Ss(this):Ts(this),this.readyState==3&&Zu(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,Ss(this))},i.Qa=function(l){this.g&&(this.response=l,Ss(this))},i.ga=function(){this.g&&Ss(this)};function Ss(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Ts(l)}i.setRequestHeader=function(l,d){this.u.append(l,d)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var E=d.next();!E.done;)E=E.value,l.push(E[0]+": "+E[1]),E=d.next();return l.join(`\r
`)};function Ts(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(vo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function th(l){let d="";return U(l,function(E,R){d+=R,d+=":",d+=E,d+=`\r
`}),d}function Ya(l,d,E){t:{for(R in E){var R=!1;break t}R=!0}R||(E=th(E),typeof l=="string"?E!=null&&encodeURIComponent(String(E)):xe(l,d,E))}function Re(l){dt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Re,dt);var ng=/^https?$/i,ig=["POST","PUT"];i=Re.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,d,E,R){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():_s.g(),this.v=this.o?gt(this.o):gt(_s),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(X){eh(this,X);return}if(l=E||"",E=new Map(this.headers),R)if(Object.getPrototypeOf(R)===Object.prototype)for(var k in R)E.set(k,R[k]);else if(typeof R.keys=="function"&&typeof R.get=="function")for(const X of R.keys())E.set(X,R.get(X));else throw Error("Unknown input type for opt_headers: "+String(R));R=Array.from(E.keys()).find(X=>X.toLowerCase()=="content-type"),k=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(ig,d,void 0))||R||k||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[X,ut]of E)this.g.setRequestHeader(X,ut);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{rh(this),this.u=!0,this.g.send(l),this.u=!1}catch(X){eh(this,X)}};function eh(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,nh(l),yo(l)}function nh(l){l.A||(l.A=!0,at(l,"complete"),at(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,at(this,"complete"),at(this,"abort"),yo(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yo(this,!0)),Re.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?ih(this):this.bb())},i.bb=function(){ih(this)};function ih(l){if(l.h&&typeof o<"u"&&(!l.v[1]||ti(l)!=4||l.Z()!=2)){if(l.u&&ti(l)==4)ne(l.Ea,0,l);else if(at(l,"readystatechange"),ti(l)==4){l.h=!1;try{const ut=l.Z();t:switch(ut){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break t;default:d=!1}var E;if(!(E=d)){var R;if(R=ut===0){var k=String(l.D).match(Te)[1]||null;!k&&a.self&&a.self.location&&(k=a.self.location.protocol.slice(0,-1)),R=!ng.test(k?k.toLowerCase():"")}E=R}if(E)at(l,"complete"),at(l,"success");else{l.m=6;try{var X=2<ti(l)?l.g.statusText:""}catch{X=""}l.l=X+" ["+l.Z()+"]",nh(l)}}finally{yo(l)}}}}function yo(l,d){if(l.g){rh(l);const E=l.g,R=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||at(l,"ready");try{E.onreadystatechange=R}catch{}}}function rh(l){l.I&&(a.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function ti(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<ti(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),Ht(d)}};function sh(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function rg(l){const d={};l=(l.g&&2<=ti(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let R=0;R<l.length;R++){if(D(l[R]))continue;var E=y(l[R]);const k=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const X=d[k]||[];d[k]=X,X.push(E)}S(d,function(R){return R.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ms(l,d,E){return E&&E.internalChannelParams&&E.internalChannelParams[l]||d}function oh(l){this.Aa=0,this.i=[],this.j=new Zn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ms("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ms("baseRetryDelayMs",5e3,l),this.cb=Ms("retryDelaySeedMs",1e4,l),this.Wa=Ms("forwardChannelMaxRetries",2,l),this.wa=Ms("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Ee(l&&l.concurrentRequestLimit),this.Da=new tg,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=oh.prototype,i.la=8,i.G=1,i.connect=function(l,d,E,R){ze(0),this.W=l,this.H=d||{},E&&R!==void 0&&(this.H.OSID=E,this.H.OAID=R),this.F=this.X,this.I=mh(this,null,this.W),xo(this)};function Qa(l){if(ah(l),l.G==3){var d=l.U++,E=be(l.I);if(xe(E,"SID",l.K),xe(E,"RID",d),xe(E,"TYPE","terminate"),As(l,E),d=new Vn(l,l.j,d),d.L=2,d.v=go(be(E)),E=!1,a.navigator&&a.navigator.sendBeacon)try{E=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!E&&a.Image&&(new Image().src=d.v,E=!0),E||(d.g=gh(d.j,null),d.g.ea(d.v)),d.F=Date.now(),St(d)}ph(l)}function Eo(l){l.g&&(Za(l),l.g.cancel(),l.g=null)}function ah(l){Eo(l),l.u&&(a.clearTimeout(l.u),l.u=null),So(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function xo(l){if(!Ye(l.h)&&!l.s){l.s=!0;var d=l.Ga;nt||Et(),K||(nt(),K=!0),yt.add(d,l),l.B=0}}function sg(l,d){return ae(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=_n(p(l.Ga,l,d),fh(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const k=new Vn(this,this.j,l);let X=this.o;if(this.S&&(X?(X=T(X),m(X,this.S)):X=this.S),this.m!==null||this.O||(k.H=X,X=null),this.P)t:{for(var d=0,E=0;E<this.i.length;E++){e:{var R=this.i[E];if("__data__"in R.map&&(R=R.map.__data__,typeof R=="string")){R=R.length;break e}R=void 0}if(R===void 0)break;if(d+=R,4096<d){d=E;break t}if(d===4096||E===this.i.length-1){d=E+1;break t}}d=1e3}else d=1e3;d=ch(this,k,d),E=be(this.I),xe(E,"RID",l),xe(E,"CVER",22),this.D&&xe(E,"X-HTTP-Session-Id",this.D),As(this,E),X&&(this.O?d="headers="+encodeURIComponent(String(th(X)))+"&"+d:this.m&&Ya(E,this.m,X)),Pe(this.h,k),this.Ua&&xe(E,"TYPE","init"),this.P?(xe(E,"$req",d),xe(E,"SID","null"),k.T=!0,q(k,E,null)):q(k,E,d),this.G=2}}else this.G==3&&(l?lh(this,l):this.i.length==0||Ye(this.h)||lh(this))};function lh(l,d){var E;d?E=d.l:E=l.U++;const R=be(l.I);xe(R,"SID",l.K),xe(R,"RID",E),xe(R,"AID",l.T),As(l,R),l.m&&l.o&&Ya(R,l.m,l.o),E=new Vn(l,l.j,E,l.B+1),l.m===null&&(E.H=l.o),d&&(l.i=d.D.concat(l.i)),d=ch(l,E,1e3),E.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Pe(l.h,E),q(E,R,d)}function As(l,d){l.H&&U(l.H,function(E,R){xe(d,R,E)}),l.l&&gr({},function(E,R){xe(d,R,E)})}function ch(l,d,E){E=Math.min(l.i.length,E);var R=l.l?p(l.l.Na,l.l,l):null;t:{var k=l.i;let X=-1;for(;;){const ut=["count="+E];X==-1?0<E?(X=k[0].g,ut.push("ofs="+X)):X=0:ut.push("ofs="+X);let ve=!0;for(let qe=0;qe<E;qe++){let ue=k[qe].g;const Qe=k[qe].map;if(ue-=X,0>ue)X=Math.max(0,k[qe].g-100),ve=!1;else try{eg(Qe,ut,"req"+ue+"_")}catch{R&&R(Qe)}}if(ve){R=ut.join("&");break t}}}return l=l.i.splice(0,E),d.D=l,R}function uh(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;nt||Et(),K||(nt(),K=!0),yt.add(d,l),l.v=0}}function Ja(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=_n(p(l.Fa,l),fh(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,hh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=_n(p(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ze(10),Eo(this),hh(this))};function Za(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function hh(l){l.g=new Vn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=be(l.qa);xe(d,"RID","rpc"),xe(d,"SID",l.K),xe(d,"AID",l.T),xe(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&xe(d,"TO",l.ja),xe(d,"TYPE","xmlhttp"),As(l,d),l.m&&l.o&&Ya(d,l.m,l.o),l.L&&(l.g.I=l.L);var E=l.g;l=l.ia,E.L=1,E.v=go(be(d)),E.m=null,E.P=!0,B(E,l)}i.Za=function(){this.C!=null&&(this.C=null,Eo(this),Ja(this),ze(19))};function So(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function dh(l,d){var E=null;if(l.g==d){So(l),Za(l),l.g=null;var R=2}else if(Ct(l.h,d))E=d.D,le(l.h,d),R=1;else return;if(l.G!=0){if(d.o)if(R==1){E=d.m?d.m.length:0,d=Date.now()-d.F;var k=l.B;R=Oe(),at(R,new ms(R,E)),xo(l)}else uh(l);else if(k=d.s,k==3||k==0&&0<d.X||!(R==1&&sg(l,d)||R==2&&Ja(l)))switch(E&&0<E.length&&(d=l.h,d.i=d.i.concat(E)),k){case 1:Wi(l,5);break;case 4:Wi(l,10);break;case 3:Wi(l,6);break;default:Wi(l,2)}}}function fh(l,d){let E=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(E*=2),E*d}function Wi(l,d){if(l.j.info("Error code "+d),d==2){var E=p(l.fb,l),R=l.Xa;const k=!R;R=new Rn(R||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||gi(R,"https"),go(R),k?Jm(R.toString(),E):Zm(R.toString(),E)}else ze(2);l.G=0,l.l&&l.l.sa(d),ph(l),ah(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),ze(2)):(this.j.info("Failed to ping google.com"),ze(1))};function ph(l){if(l.G=0,l.ka=[],l.l){const d=un(l.h);(d.length!=0||l.i.length!=0)&&(g(l.ka,d),g(l.ka,l.i),l.h.i.length=0,A(l.i),l.i.length=0),l.l.ra()}}function mh(l,d,E){var R=E instanceof Rn?be(E):new Rn(E);if(R.g!="")d&&(R.g=d+"."+R.g),_r(R,R.s);else{var k=a.location;R=k.protocol,d=d?d+"."+k.hostname:k.hostname,k=+k.port;var X=new Rn(null);R&&gi(X,R),d&&(X.g=d),k&&_r(X,k),E&&(X.l=E),R=X}return E=l.D,d=l.ya,E&&d&&xe(R,E,d),xe(R,"VER",l.la),As(l,R),R}function gh(l,d,E){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Re(new _o({eb:E})):new Re(l.pa),d.Ha(l.J),d}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function _h(){}i=_h.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function To(){}To.prototype.g=function(l,d){return new vn(l,d)};function vn(l,d){dt.call(this),this.g=new oh(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!D(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!D(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new yr(this)}x(vn,dt),vn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vn.prototype.close=function(){Qa(this.g)},vn.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var E={};E.__data__=l,l=E}else this.u&&(E={},E.__data__=Qt(l),l=E);d.i.push(new _e(d.Ya++,l)),d.G==3&&xo(d)},vn.prototype.N=function(){this.g.l=null,delete this.j,Qa(this.g),delete this.g,vn.aa.N.call(this)};function vh(l){ft.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){t:{for(const E in d){l=E;break t}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}x(vh,ft);function yh(){pt.call(this),this.status=1}x(yh,pt);function yr(l){this.g=l}x(yr,_h),yr.prototype.ua=function(){at(this.g,"a")},yr.prototype.ta=function(l){at(this.g,new vh(l))},yr.prototype.sa=function(l){at(this.g,new yh)},yr.prototype.ra=function(){at(this.g,"b")},To.prototype.createWebChannel=To.prototype.g,vn.prototype.send=vn.prototype.o,vn.prototype.open=vn.prototype.m,vn.prototype.close=vn.prototype.close,vp=function(){return new To},_p=function(){return Oe()},gp=qt,Bc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Gi.NO_ERROR=0,Gi.TIMEOUT=8,Gi.HTTP_ERROR=6,sa=Gi,gs.COMPLETE="complete",mp=gs,$.EventType=tt,tt.OPEN="a",tt.CLOSE="b",tt.ERROR="c",tt.MESSAGE="d",dt.prototype.listen=dt.prototype.K,Ns=$,Re.prototype.listenOnce=Re.prototype.L,Re.prototype.getLastError=Re.prototype.Ka,Re.prototype.getLastErrorCode=Re.prototype.Ba,Re.prototype.getStatus=Re.prototype.Z,Re.prototype.getResponseJson=Re.prototype.Oa,Re.prototype.getResponseText=Re.prototype.oa,Re.prototype.send=Re.prototype.ea,Re.prototype.setWithCredentials=Re.prototype.Ha,pp=Re}).apply(typeof Xo<"u"?Xo:typeof self<"u"?self:typeof window<"u"?window:{});const Id="@firebase/firestore";/**
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
 */class nn{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}nn.UNAUTHENTICATED=new nn(null),nn.GOOGLE_CREDENTIALS=new nn("google-credentials-uid"),nn.FIRST_PARTY=new nn("first-party-uid"),nn.MOCK_USER=new nn("mock-user");/**
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
 */let ds="10.14.0";/**
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
 */const cr=new ap("@firebase/firestore");function Ds(){return cr.logLevel}function bt(i,...t){if(cr.logLevel<=ce.DEBUG){const e=t.map(vu);cr.debug(`Firestore (${ds}): ${i}`,...e)}}function fi(i,...t){if(cr.logLevel<=ce.ERROR){const e=t.map(vu);cr.error(`Firestore (${ds}): ${i}`,...e)}}function ts(i,...t){if(cr.logLevel<=ce.WARN){const e=t.map(vu);cr.warn(`Firestore (${ds}): ${i}`,...e)}}function vu(i){if(typeof i=="string")return i;try{/**
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
 */function kt(i="Unexpected state"){const t=`FIRESTORE (${ds}) INTERNAL ASSERTION FAILED: `+i;throw fi(t),new Error(t)}function pe(i,t){i||kt()}function Wt(i,t){return i}/**
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
 */const st={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class It extends hs{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Li{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class yp{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class WS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(nn.UNAUTHENTICATED))}shutdown(){}}class qS{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class XS{constructor(t){this.t=t,this.currentUser=nn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){pe(this.o===void 0);let n=this.i;const r=c=>this.i!==n?(n=this.i,e(c)):Promise.resolve();let s=new Li;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Li,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=s;t.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{bt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(bt("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Li)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(bt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(pe(typeof n.accessToken=="string"),new yp(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return pe(t===null||typeof t=="string"),new nn(t)}}class jS{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=nn.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class $S{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new jS(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(nn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class KS{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class YS{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){pe(this.o===void 0);const n=s=>{s.error!=null&&bt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,bt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>n(s))};const r=s=>{bt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?r(s):bt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(pe(typeof e.token=="string"),this.R=e.token,new KS(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function QS(i){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(i);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<i;n++)e[n]=Math.floor(256*Math.random());return e}/**
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
 */class Ep{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=QS(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<e&&(n+=t.charAt(r[s]%t.length))}return n}}function he(i,t){return i<t?-1:i>t?1:0}function es(i,t,e){return i.length===t.length&&i.every((n,r)=>e(n,t[r]))}/**
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
 */class Ve{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new It(st.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new It(st.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new It(st.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new It(st.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Ve.fromMillis(Date.now())}static fromDate(t){return Ve.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Ve(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?he(this.nanoseconds,t.nanoseconds):he(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Gt{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Gt(t)}static min(){return new Gt(new Ve(0,0))}static max(){return new Gt(new Ve(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Xs{constructor(t,e,n){e===void 0?e=0:e>t.length&&kt(),n===void 0?n=t.length-e:n>t.length-e&&kt(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Xs.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Xs?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.get(r),o=e.get(r);if(s<o)return-1;if(s>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Ce extends Xs{construct(t,e,n){return new Ce(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new It(st.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(r=>r.length>0))}return new Ce(e)}static emptyPath(){return new Ce([])}}const JS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class je extends Xs{construct(t,e,n){return new je(t,e,n)}static isValidIdentifier(t){return JS.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),je.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new je(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const s=()=>{if(n.length===0)throw new It(st.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new It(st.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new It(st.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(n+=a,r++):(s(),r++)}if(s(),o)throw new It(st.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new je(e)}static emptyPath(){return new je([])}}/**
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
 */class Nt{constructor(t){this.path=t}static fromPath(t){return new Nt(Ce.fromString(t))}static fromName(t){return new Nt(Ce.fromString(t).popFirst(5))}static empty(){return new Nt(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Ce.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Ce.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Nt(new Ce(t.slice()))}}function ZS(i,t){const e=i.toTimestamp().seconds,n=i.toTimestamp().nanoseconds+1,r=Gt.fromTimestamp(n===1e9?new Ve(e+1,0):new Ve(e,n));return new Fi(r,Nt.empty(),t)}function tT(i){return new Fi(i.readTime,i.key,-1)}class Fi{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Fi(Gt.min(),Nt.empty(),-1)}static max(){return new Fi(Gt.max(),Nt.empty(),-1)}}function eT(i,t){let e=i.readTime.compareTo(t.readTime);return e!==0?e:(e=Nt.comparator(i.documentKey,t.documentKey),e!==0?e:he(i.largestBatchId,t.largestBatchId))}/**
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
 */const nT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class iT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function ro(i){if(i.code!==st.FAILED_PRECONDITION||i.message!==nT)throw i;bt("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class it{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&kt(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new it((n,r)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(n,r)},this.catchCallback=s=>{this.wrapFailure(e,s).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof it?e:it.resolve(e)}catch(e){return it.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):it.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):it.reject(e)}static resolve(t){return new it((e,n)=>{e(t)})}static reject(t){return new it((e,n)=>{n(t)})}static waitFor(t){return new it((e,n)=>{let r=0,s=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&e()},c=>n(c))}),o=!0,s===r&&e()})}static or(t){let e=it.resolve(!1);for(const n of t)e=e.next(r=>r?it.resolve(r):n());return e}static forEach(t,e){const n=[];return t.forEach((r,s)=>{n.push(e.call(this,r,s))}),this.waitFor(n)}static mapArray(t,e){return new it((n,r)=>{const s=t.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;e(t[u]).next(h=>{o[u]=h,++a,a===s&&n(o)},h=>r(h))}})}static doWhile(t,e){return new it((n,r)=>{const s=()=>{t()===!0?e().next(()=>{s()},r):n()};s()})}}function rT(i){const t=i.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function so(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class yu{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ie(n),this.se=n=>e.writeSequenceNumber(n))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}yu.oe=-1;function Ua(i){return i==null}function va(i){return i===0&&1/i==-1/0}function sT(i){return typeof i=="number"&&Number.isInteger(i)&&!va(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */function Pd(i){let t=0;for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&t++;return t}function dr(i,t){for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&t(e,i[e])}function xp(i){for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t))return!1;return!0}/**
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
 */class we{constructor(t,e){this.comparator=t,this.root=e||Xe.EMPTY}insert(t,e){return new we(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(t){return new we(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new jo(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new jo(this.root,t,this.comparator,!1)}getReverseIterator(){return new jo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new jo(this.root,t,this.comparator,!0)}}class jo{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Xe{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=n??Xe.RED,this.left=r??Xe.EMPTY,this.right=s??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new Xe(t??this.key,e??this.value,n??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const s=n(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):s===0?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),e(t,r.key)===0){if(r.right.isEmpty())return Xe.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw kt();const t=this.left.check();if(t!==this.right.check())throw kt();return t+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw kt()}get value(){throw kt()}get color(){throw kt()}get left(){throw kt()}get right(){throw kt()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Xe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class $e{constructor(t){this.comparator=t,this.data=new we(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Dd(this.data.getIterator())}getIteratorFrom(t){return new Dd(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof $e)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const r=e.getNext().key,s=n.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new $e(this.comparator);return e.data=t,e}}class Dd{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class xn{constructor(t){this.fields=t,t.sort(je.comparator)}static empty(){return new xn([])}unionWith(t){let e=new $e(je.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new xn(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return es(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
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
 */class Sp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ke{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Sp("Invalid base64 string: "+s):s}}(t);return new Ke(e)}static fromUint8Array(t){const e=function(r){let s="";for(let o=0;o<r.length;++o)s+=String.fromCharCode(r[o]);return s}(t);return new Ke(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return he(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const oT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vi(i){if(pe(!!i),typeof i=="string"){let t=0;const e=oT.exec(i);if(pe(!!e),e[1]){let r=e[1];r=(r+"000000000").substr(0,9),t=Number(r)}const n=new Date(i);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:De(i.seconds),nanos:De(i.nanos)}}function De(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function ur(i){return typeof i=="string"?Ke.fromBase64String(i):Ke.fromUint8Array(i)}/**
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
 */function Eu(i){var t,e;return((e=(((t=i?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function xu(i){const t=i.mapValue.fields.__previous_value__;return Eu(t)?xu(t):t}function js(i){const t=Vi(i.mapValue.fields.__local_write_time__.timestampValue);return new Ve(t.seconds,t.nanos)}/**
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
 */class aT{constructor(t,e,n,r,s,o,a,c,u){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class $s{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new $s("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof $s&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const $o={mapValue:{}};function hr(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Eu(i)?4:cT(i)?9007199254740991:lT(i)?10:11:kt()}function Yn(i,t){if(i===t)return!0;const e=hr(i);if(e!==hr(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===t.booleanValue;case 4:return js(i).isEqual(js(t));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const o=Vi(r.timestampValue),a=Vi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(i,t);case 5:return i.stringValue===t.stringValue;case 6:return function(r,s){return ur(r.bytesValue).isEqual(ur(s.bytesValue))}(i,t);case 7:return i.referenceValue===t.referenceValue;case 8:return function(r,s){return De(r.geoPointValue.latitude)===De(s.geoPointValue.latitude)&&De(r.geoPointValue.longitude)===De(s.geoPointValue.longitude)}(i,t);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return De(r.integerValue)===De(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const o=De(r.doubleValue),a=De(s.doubleValue);return o===a?va(o)===va(a):isNaN(o)&&isNaN(a)}return!1}(i,t);case 9:return es(i.arrayValue.values||[],t.arrayValue.values||[],Yn);case 10:case 11:return function(r,s){const o=r.mapValue.fields||{},a=s.mapValue.fields||{};if(Pd(o)!==Pd(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Yn(o[c],a[c])))return!1;return!0}(i,t);default:return kt()}}function Ks(i,t){return(i.values||[]).find(e=>Yn(e,t))!==void 0}function ns(i,t){if(i===t)return 0;const e=hr(i),n=hr(t);if(e!==n)return he(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return he(i.booleanValue,t.booleanValue);case 2:return function(s,o){const a=De(s.integerValue||s.doubleValue),c=De(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(i,t);case 3:return Ld(i.timestampValue,t.timestampValue);case 4:return Ld(js(i),js(t));case 5:return he(i.stringValue,t.stringValue);case 6:return function(s,o){const a=ur(s),c=ur(o);return a.compareTo(c)}(i.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const h=he(a[u],c[u]);if(h!==0)return h}return he(a.length,c.length)}(i.referenceValue,t.referenceValue);case 8:return function(s,o){const a=he(De(s.latitude),De(o.latitude));return a!==0?a:he(De(s.longitude),De(o.longitude))}(i.geoPointValue,t.geoPointValue);case 9:return Nd(i.arrayValue,t.arrayValue);case 10:return function(s,o){var a,c,u,h;const f=s.fields||{},p=o.fields||{},v=(a=f.value)===null||a===void 0?void 0:a.arrayValue,x=(c=p.value)===null||c===void 0?void 0:c.arrayValue,A=he(((u=v?.values)===null||u===void 0?void 0:u.length)||0,((h=x?.values)===null||h===void 0?void 0:h.length)||0);return A!==0?A:Nd(v,x)}(i.mapValue,t.mapValue);case 11:return function(s,o){if(s===$o.mapValue&&o===$o.mapValue)return 0;if(s===$o.mapValue)return 1;if(o===$o.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let f=0;f<c.length&&f<h.length;++f){const p=he(c[f],h[f]);if(p!==0)return p;const v=ns(a[c[f]],u[h[f]]);if(v!==0)return v}return he(c.length,h.length)}(i.mapValue,t.mapValue);default:throw kt()}}function Ld(i,t){if(typeof i=="string"&&typeof t=="string"&&i.length===t.length)return he(i,t);const e=Vi(i),n=Vi(t),r=he(e.seconds,n.seconds);return r!==0?r:he(e.nanos,n.nanos)}function Nd(i,t){const e=i.values||[],n=t.values||[];for(let r=0;r<e.length&&r<n.length;++r){const s=ns(e[r],n[r]);if(s)return s}return he(e.length,n.length)}function is(i){return kc(i)}function kc(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(e){const n=Vi(e);return`time(${n.seconds},${n.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(e){return ur(e).toBase64()}(i.bytesValue):"referenceValue"in i?function(e){return Nt.fromName(e).toString()}(i.referenceValue):"geoPointValue"in i?function(e){return`geo(${e.latitude},${e.longitude})`}(i.geoPointValue):"arrayValue"in i?function(e){let n="[",r=!0;for(const s of e.values||[])r?r=!1:n+=",",n+=kc(s);return n+"]"}(i.arrayValue):"mapValue"in i?function(e){const n=Object.keys(e.fields||{}).sort();let r="{",s=!0;for(const o of n)s?s=!1:r+=",",r+=`${o}:${kc(e.fields[o])}`;return r+"}"}(i.mapValue):kt()}function zc(i){return!!i&&"integerValue"in i}function Su(i){return!!i&&"arrayValue"in i}function Ud(i){return!!i&&"nullValue"in i}function Od(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function oa(i){return!!i&&"mapValue"in i}function lT(i){var t,e;return((e=(((t=i?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Vs(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const t={mapValue:{fields:{}}};return dr(i.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Vs(n)),t}if(i.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(i.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Vs(i.arrayValue.values[e]);return t}return Object.assign({},i)}function cT(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class fn{constructor(t){this.value=t}static empty(){return new fn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!oa(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Vs(e)}setAll(t){let e=je.emptyPath(),n={},r=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const c=this.getFieldsMap(e);this.applyChanges(c,n,r),n={},r=[],e=a.popLast()}o?n[a.lastSegment()]=Vs(o):r.push(a.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,n,r)}delete(t){const e=this.field(t.popLast());oa(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Yn(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];oa(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){dr(e,(r,s)=>t[r]=s);for(const r of n)delete t[r]}clone(){return new fn(Vs(this.value))}}function Tp(i){const t=[];return dr(i.fields,(e,n)=>{const r=new je([e]);if(oa(n)){const s=Tp(n.mapValue).fields;if(s.length===0)t.push(r);else for(const o of s)t.push(r.child(o))}else t.push(r)}),new xn(t)}/**
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
 */class rn{constructor(t,e,n,r,s,o,a){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new rn(t,0,Gt.min(),Gt.min(),Gt.min(),fn.empty(),0)}static newFoundDocument(t,e,n,r){return new rn(t,1,e,Gt.min(),n,r,0)}static newNoDocument(t,e){return new rn(t,2,e,Gt.min(),Gt.min(),fn.empty(),0)}static newUnknownDocument(t,e){return new rn(t,3,e,Gt.min(),Gt.min(),fn.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Gt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=fn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=fn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Gt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof rn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new rn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ya{constructor(t,e){this.position=t,this.inclusive=e}}function Fd(i,t,e){let n=0;for(let r=0;r<i.position.length;r++){const s=t[r],o=i.position[r];if(s.field.isKeyField()?n=Nt.comparator(Nt.fromName(o.referenceValue),e.key):n=ns(o,e.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function Vd(i,t){if(i===null)return t===null;if(t===null||i.inclusive!==t.inclusive||i.position.length!==t.position.length)return!1;for(let e=0;e<i.position.length;e++)if(!Yn(i.position[e],t.position[e]))return!1;return!0}/**
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
 */class Ea{constructor(t,e="asc"){this.field=t,this.dir=e}}function uT(i,t){return i.dir===t.dir&&i.field.isEqual(t.field)}/**
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
 */class Mp{}class Fe extends Mp{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new dT(t,e,n):e==="array-contains"?new mT(t,n):e==="in"?new gT(t,n):e==="not-in"?new _T(t,n):e==="array-contains-any"?new vT(t,n):new Fe(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new fT(t,n):new pT(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(ns(e,this.value)):e!==null&&hr(this.value)===hr(e)&&this.matchesComparison(ns(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return kt()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qn extends Mp{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Qn(t,e)}matches(t){return Ap(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ap(i){return i.op==="and"}function wp(i){return hT(i)&&Ap(i)}function hT(i){for(const t of i.filters)if(t instanceof Qn)return!1;return!0}function Hc(i){if(i instanceof Fe)return i.field.canonicalString()+i.op.toString()+is(i.value);if(wp(i))return i.filters.map(t=>Hc(t)).join(",");{const t=i.filters.map(e=>Hc(e)).join(",");return`${i.op}(${t})`}}function bp(i,t){return i instanceof Fe?function(n,r){return r instanceof Fe&&n.op===r.op&&n.field.isEqual(r.field)&&Yn(n.value,r.value)}(i,t):i instanceof Qn?function(n,r){return r instanceof Qn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((s,o,a)=>s&&bp(o,r.filters[a]),!0):!1}(i,t):void kt()}function Rp(i){return i instanceof Fe?function(e){return`${e.field.canonicalString()} ${e.op} ${is(e.value)}`}(i):i instanceof Qn?function(e){return e.op.toString()+" {"+e.getFilters().map(Rp).join(" ,")+"}"}(i):"Filter"}class dT extends Fe{constructor(t,e,n){super(t,e,n),this.key=Nt.fromName(n.referenceValue)}matches(t){const e=Nt.comparator(t.key,this.key);return this.matchesComparison(e)}}class fT extends Fe{constructor(t,e){super(t,"in",e),this.keys=Cp("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class pT extends Fe{constructor(t,e){super(t,"not-in",e),this.keys=Cp("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Cp(i,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>Nt.fromName(n.referenceValue))}class mT extends Fe{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Su(e)&&Ks(e.arrayValue,this.value)}}class gT extends Fe{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Ks(this.value.arrayValue,e)}}class _T extends Fe{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ks(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Ks(this.value.arrayValue,e)}}class vT extends Fe{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Su(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>Ks(this.value.arrayValue,n))}}/**
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
 */class yT{constructor(t,e=null,n=[],r=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Bd(i,t=null,e=[],n=[],r=null,s=null,o=null){return new yT(i,t,e,n,r,s,o)}function Tu(i){const t=Wt(i);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>Hc(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(s){return s.field.canonicalString()+s.dir}(n)).join(","),Ua(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>is(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>is(n)).join(",")),t.ue=e}return t.ue}function Mu(i,t){if(i.limit!==t.limit||i.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<i.orderBy.length;e++)if(!uT(i.orderBy[e],t.orderBy[e]))return!1;if(i.filters.length!==t.filters.length)return!1;for(let e=0;e<i.filters.length;e++)if(!bp(i.filters[e],t.filters[e]))return!1;return i.collectionGroup===t.collectionGroup&&!!i.path.isEqual(t.path)&&!!Vd(i.startAt,t.startAt)&&Vd(i.endAt,t.endAt)}function Gc(i){return Nt.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class Oa{constructor(t,e=null,n=[],r=[],s=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ET(i,t,e,n,r,s,o,a){return new Oa(i,t,e,n,r,s,o,a)}function Fa(i){return new Oa(i)}function kd(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function xT(i){return i.collectionGroup!==null}function Bs(i){const t=Wt(i);if(t.ce===null){t.ce=[];const e=new Set;for(const s of t.explicitOrderBy)t.ce.push(s),e.add(s.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new $e(je.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.ce.push(new Ea(s,n))}),e.has(je.keyField().canonicalString())||t.ce.push(new Ea(je.keyField(),n))}return t.ce}function qn(i){const t=Wt(i);return t.le||(t.le=ST(t,Bs(i))),t.le}function ST(i,t){if(i.limitType==="F")return Bd(i.path,i.collectionGroup,t,i.filters,i.limit,i.startAt,i.endAt);{t=t.map(r=>{const s=r.dir==="desc"?"asc":"desc";return new Ea(r.field,s)});const e=i.endAt?new ya(i.endAt.position,i.endAt.inclusive):null,n=i.startAt?new ya(i.startAt.position,i.startAt.inclusive):null;return Bd(i.path,i.collectionGroup,t,i.filters,i.limit,e,n)}}function Wc(i,t,e){return new Oa(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),t,e,i.startAt,i.endAt)}function Va(i,t){return Mu(qn(i),qn(t))&&i.limitType===t.limitType}function Ip(i){return`${Tu(qn(i))}|lt:${i.limitType}`}function Or(i){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>Rp(r)).join(", ")}]`),Ua(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>is(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>is(r)).join(",")),`Target(${n})`}(qn(i))}; limitType=${i.limitType})`}function Ba(i,t){return t.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):Nt.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(i,t)&&function(n,r){for(const s of Bs(n))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(i,t)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(i,t)&&function(n,r){return!(n.startAt&&!function(o,a,c){const u=Fd(o,a,c);return o.inclusive?u<=0:u<0}(n.startAt,Bs(n),r)||n.endAt&&!function(o,a,c){const u=Fd(o,a,c);return o.inclusive?u>=0:u>0}(n.endAt,Bs(n),r))}(i,t)}function TT(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function Pp(i){return(t,e)=>{let n=!1;for(const r of Bs(i)){const s=MT(r,t,e);if(s!==0)return s;n=n||r.field.isKeyField()}return 0}}function MT(i,t,e){const n=i.field.isKeyField()?Nt.comparator(t.key,e.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?ns(c,u):kt()}(i.field,t,e);switch(i.dir){case"asc":return n;case"desc":return-1*n;default:return kt()}}/**
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
 */class fs{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[r,s]of n)if(this.equalsFn(r,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return n.length===1?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){dr(this.inner,(e,n)=>{for(const[r,s]of n)t(r,s)})}isEmpty(){return xp(this.inner)}size(){return this.innerSize}}/**
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
 */const AT=new we(Nt.comparator);function pi(){return AT}const Dp=new we(Nt.comparator);function Us(...i){let t=Dp;for(const e of i)t=t.insert(e.key,e);return t}function Lp(i){let t=Dp;return i.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function sr(){return ks()}function Np(){return ks()}function ks(){return new fs(i=>i.toString(),(i,t)=>i.isEqual(t))}const wT=new we(Nt.comparator),bT=new $e(Nt.comparator);function te(...i){let t=bT;for(const e of i)t=t.add(e);return t}const RT=new $e(he);function CT(){return RT}/**
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
 */function Au(i,t){if(i.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:va(t)?"-0":t}}function Up(i){return{integerValue:""+i}}function IT(i,t){return sT(t)?Up(t):Au(i,t)}/**
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
 */class ka{constructor(){this._=void 0}}function PT(i,t,e){return i instanceof xa?function(r,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&Eu(s)&&(s=xu(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(e,t):i instanceof Ys?Fp(i,t):i instanceof Qs?Vp(i,t):function(r,s){const o=Op(r,s),a=zd(o)+zd(r.Pe);return zc(o)&&zc(r.Pe)?Up(a):Au(r.serializer,a)}(i,t)}function DT(i,t,e){return i instanceof Ys?Fp(i,t):i instanceof Qs?Vp(i,t):e}function Op(i,t){return i instanceof Sa?function(n){return zc(n)||function(s){return!!s&&"doubleValue"in s}(n)}(t)?t:{integerValue:0}:null}class xa extends ka{}class Ys extends ka{constructor(t){super(),this.elements=t}}function Fp(i,t){const e=Bp(t);for(const n of i.elements)e.some(r=>Yn(r,n))||e.push(n);return{arrayValue:{values:e}}}class Qs extends ka{constructor(t){super(),this.elements=t}}function Vp(i,t){let e=Bp(t);for(const n of i.elements)e=e.filter(r=>!Yn(r,n));return{arrayValue:{values:e}}}class Sa extends ka{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function zd(i){return De(i.integerValue||i.doubleValue)}function Bp(i){return Su(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function LT(i,t){return i.field.isEqual(t.field)&&function(n,r){return n instanceof Ys&&r instanceof Ys||n instanceof Qs&&r instanceof Qs?es(n.elements,r.elements,Yn):n instanceof Sa&&r instanceof Sa?Yn(n.Pe,r.Pe):n instanceof xa&&r instanceof xa}(i.transform,t.transform)}class NT{constructor(t,e){this.version=t,this.transformResults=e}}class Xn{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Xn}static exists(t){return new Xn(void 0,t)}static updateTime(t){return new Xn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function aa(i,t){return i.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(i.updateTime):i.exists===void 0||i.exists===t.isFoundDocument()}class za{}function kp(i,t){if(!i.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return i.isNoDocument()?new Hp(i.key,Xn.none()):new oo(i.key,i.data,Xn.none());{const e=i.data,n=fn.empty();let r=new $e(je.comparator);for(let s of t.fields)if(!r.has(s)){let o=e.field(s);o===null&&s.length>1&&(s=s.popLast(),o=e.field(s)),o===null?n.delete(s):n.set(s,o),r=r.add(s)}return new Hi(i.key,n,new xn(r.toArray()),Xn.none())}}function UT(i,t,e){i instanceof oo?function(r,s,o){const a=r.value.clone(),c=Gd(r.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(i,t,e):i instanceof Hi?function(r,s,o){if(!aa(r.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Gd(r.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(zp(r)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(i,t,e):function(r,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function zs(i,t,e,n){return i instanceof oo?function(s,o,a,c){if(!aa(s.precondition,o))return a;const u=s.value.clone(),h=Wd(s.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(i,t,e,n):i instanceof Hi?function(s,o,a,c){if(!aa(s.precondition,o))return a;const u=Wd(s.fieldTransforms,c,o),h=o.data;return h.setAll(zp(s)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(i,t,e,n):function(s,o,a){return aa(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(i,t,e)}function OT(i,t){let e=null;for(const n of i.fieldTransforms){const r=t.data.field(n.field),s=Op(n.transform,r||null);s!=null&&(e===null&&(e=fn.empty()),e.set(n.field,s))}return e||null}function Hd(i,t){return i.type===t.type&&!!i.key.isEqual(t.key)&&!!i.precondition.isEqual(t.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&es(n,r,(s,o)=>LT(s,o))}(i.fieldTransforms,t.fieldTransforms)&&(i.type===0?i.value.isEqual(t.value):i.type!==1||i.data.isEqual(t.data)&&i.fieldMask.isEqual(t.fieldMask))}class oo extends za{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Hi extends za{constructor(t,e,n,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function zp(i){const t=new Map;return i.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=i.data.field(e);t.set(e,n)}}),t}function Gd(i,t,e){const n=new Map;pe(i.length===e.length);for(let r=0;r<e.length;r++){const s=i[r],o=s.transform,a=t.data.field(s.field);n.set(s.field,DT(o,a,e[r]))}return n}function Wd(i,t,e){const n=new Map;for(const r of i){const s=r.transform,o=e.data.field(r.field);n.set(r.field,PT(s,o,t))}return n}class Hp extends za{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class FT extends za{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class VT{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(t.key)&&UT(s,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=zs(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=zs(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Np();return this.mutations.forEach(r=>{const s=t.get(r.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=e.has(r.key)?null:a;const c=kp(o,a);c!==null&&n.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(Gt.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),te())}isEqual(t){return this.batchId===t.batchId&&es(this.mutations,t.mutations,(e,n)=>Hd(e,n))&&es(this.baseMutations,t.baseMutations,(e,n)=>Hd(e,n))}}class wu{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){pe(t.mutations.length===n.length);let r=function(){return wT}();const s=t.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,n[o].version);return new wu(t,e,n,r)}}/**
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
 */class BT{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class kT{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var Ue,re;function zT(i){switch(i){default:return kt();case st.CANCELLED:case st.UNKNOWN:case st.DEADLINE_EXCEEDED:case st.RESOURCE_EXHAUSTED:case st.INTERNAL:case st.UNAVAILABLE:case st.UNAUTHENTICATED:return!1;case st.INVALID_ARGUMENT:case st.NOT_FOUND:case st.ALREADY_EXISTS:case st.PERMISSION_DENIED:case st.FAILED_PRECONDITION:case st.ABORTED:case st.OUT_OF_RANGE:case st.UNIMPLEMENTED:case st.DATA_LOSS:return!0}}function Gp(i){if(i===void 0)return fi("GRPC error has no .code"),st.UNKNOWN;switch(i){case Ue.OK:return st.OK;case Ue.CANCELLED:return st.CANCELLED;case Ue.UNKNOWN:return st.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return st.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return st.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return st.INTERNAL;case Ue.UNAVAILABLE:return st.UNAVAILABLE;case Ue.UNAUTHENTICATED:return st.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return st.INVALID_ARGUMENT;case Ue.NOT_FOUND:return st.NOT_FOUND;case Ue.ALREADY_EXISTS:return st.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return st.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return st.FAILED_PRECONDITION;case Ue.ABORTED:return st.ABORTED;case Ue.OUT_OF_RANGE:return st.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return st.UNIMPLEMENTED;case Ue.DATA_LOSS:return st.DATA_LOSS;default:return kt()}}(re=Ue||(Ue={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function HT(){return new TextEncoder}/**
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
 */const GT=new or([4294967295,4294967295],0);function qd(i){const t=HT().encode(i),e=new fp;return e.update(t),new Uint8Array(e.digest())}function Xd(i){const t=new DataView(i.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),r=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new or([e,n],0),new or([r,s],0)]}class bu{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Os(`Invalid padding: ${e}`);if(n<0)throw new Os(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new Os(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new Os(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=or.fromNumber(this.Ie)}Ee(t,e,n){let r=t.add(e.multiply(or.fromNumber(n)));return r.compare(GT)===1&&(r=new or([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=qd(t),[n,r]=Xd(e);for(let s=0;s<this.hashCount;s++){const o=this.Ee(n,r,s);if(!this.de(o))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new bu(s,r,e);return n.forEach(a=>o.insert(a)),o}insert(t){if(this.Ie===0)return;const e=qd(t),[n,r]=Xd(e);for(let s=0;s<this.hashCount;s++){const o=this.Ee(n,r,s);this.Ae(o)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Os extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ha{constructor(t,e,n,r,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,ao.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Ha(Gt.min(),r,new we(he),pi(),te())}}class ao{constructor(t,e,n,r,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new ao(n,e,te(),te(),te())}}/**
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
 */class la{constructor(t,e,n,r){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=r}}class Wp{constructor(t,e){this.targetId=t,this.me=e}}class qp{constructor(t,e,n=Ke.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class jd{constructor(){this.fe=0,this.ge=Kd(),this.pe=Ke.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=te(),e=te(),n=te();return this.ge.forEach((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:kt()}}),new ao(this.pe,this.ye,t,e,n)}Ce(){this.we=!1,this.ge=Kd()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,pe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class WT{constructor(t){this.Le=t,this.Be=new Map,this.ke=pi(),this.qe=$d(),this.Qe=new we(he)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const n=this.Ge(e);switch(t.state){case 0:this.ze(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),n.De(t.resumeToken));break;default:kt()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((n,r)=>{this.ze(r)&&e(r)})}He(t){const e=t.targetId,n=t.me.count,r=this.Je(e);if(r){const s=r.target;if(Gc(s))if(n===0){const o=new Nt(s.path);this.Ue(e,o,rn.newNoDocument(o,Gt.min()))}else pe(n===1);else{const o=this.Ye(e);if(o!==n){const a=this.Ze(t),c=a?this.Xe(a,t,o):1;if(c!==0){this.je(e);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,u)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:s=0}=e;let o,a;try{o=ur(n).toUint8Array()}catch(c){if(c instanceof Sp)return ts("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new bu(o,r,s)}catch(c){return ts(c instanceof Os?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ie===0?null:a}Xe(t,e,n){return e.me.count===n-this.nt(t,e.targetId)?0:2}nt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let r=0;return n.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.Ue(e,s,null),r++)}),r}rt(t){const e=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Gc(a.target)){const c=new Nt(a.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,rn.newNoDocument(c,t))}s.be&&(e.set(o,s.ve()),s.Ce())}});let n=te();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Je(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(n=n.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(t));const r=new Ha(t,e,this.Qe,this.ke,n);return this.ke=pi(),this.qe=$d(),this.Qe=new we(he),r}$e(t,e){if(!this.ze(t))return;const n=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,n){if(!this.ze(t))return;const r=this.Ge(t);this.it(t,e)?r.Fe(e,1):r.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new jd,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new $e(he),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||bt("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new jd),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function $d(){return new we(Nt.comparator)}function Kd(){return new we(Nt.comparator)}const qT={asc:"ASCENDING",desc:"DESCENDING"},XT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},jT={and:"AND",or:"OR"};class $T{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function qc(i,t){return i.useProto3Json||Ua(t)?t:{value:t}}function Ta(i,t){return i.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Xp(i,t){return i.useProto3Json?t.toBase64():t.toUint8Array()}function KT(i,t){return Ta(i,t.toTimestamp())}function jn(i){return pe(!!i),Gt.fromTimestamp(function(e){const n=Vi(e);return new Ve(n.seconds,n.nanos)}(i))}function Ru(i,t){return Xc(i,t).canonicalString()}function Xc(i,t){const e=function(r){return new Ce(["projects",r.projectId,"databases",r.database])}(i).child("documents");return t===void 0?e:e.child(t)}function jp(i){const t=Ce.fromString(i);return pe(Jp(t)),t}function jc(i,t){return Ru(i.databaseId,t.path)}function Vl(i,t){const e=jp(t);if(e.get(1)!==i.databaseId.projectId)throw new It(st.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+i.databaseId.projectId);if(e.get(3)!==i.databaseId.database)throw new It(st.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+i.databaseId.database);return new Nt(Kp(e))}function $p(i,t){return Ru(i.databaseId,t)}function YT(i){const t=jp(i);return t.length===4?Ce.emptyPath():Kp(t)}function $c(i){return new Ce(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function Kp(i){return pe(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function Yd(i,t,e){return{name:jc(i,t),fields:e.value.mapValue.fields}}function QT(i,t){let e;if("targetChange"in t){t.targetChange;const n=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:kt()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],s=function(u,h){return u.useProto3Json?(pe(h===void 0||typeof h=="string"),Ke.fromBase64String(h||"")):(pe(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Ke.fromUint8Array(h||new Uint8Array))}(i,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const h=u.code===void 0?st.UNKNOWN:Gp(u.code);return new It(h,u.message||"")}(o);e=new qp(n,r,s,a||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const r=Vl(i,n.document.name),s=jn(n.document.updateTime),o=n.document.createTime?jn(n.document.createTime):Gt.min(),a=new fn({mapValue:{fields:n.document.fields}}),c=rn.newFoundDocument(r,s,o,a),u=n.targetIds||[],h=n.removedTargetIds||[];e=new la(u,h,c.key,c)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const r=Vl(i,n.document),s=n.readTime?jn(n.readTime):Gt.min(),o=rn.newNoDocument(r,s),a=n.removedTargetIds||[];e=new la([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const r=Vl(i,n.document),s=n.removedTargetIds||[];e=new la([],s,r,null)}else{if(!("filter"in t))return kt();{t.filter;const n=t.filter;n.targetId;const{count:r=0,unchangedNames:s}=n,o=new kT(r,s),a=n.targetId;e=new Wp(a,o)}}return e}function JT(i,t){let e;if(t instanceof oo)e={update:Yd(i,t.key,t.value)};else if(t instanceof Hp)e={delete:jc(i,t.key)};else if(t instanceof Hi)e={update:Yd(i,t.key,t.data),updateMask:aM(t.fieldMask)};else{if(!(t instanceof FT))return kt();e={verify:jc(i,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(s,o){const a=o.transform;if(a instanceof xa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ys)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Qs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Sa)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw kt()}(0,n))),t.precondition.isNone||(e.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:KT(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:kt()}(i,t.precondition)),e}function ZT(i,t){return i&&i.length>0?(pe(t!==void 0),i.map(e=>function(r,s){let o=r.updateTime?jn(r.updateTime):jn(s);return o.isEqual(Gt.min())&&(o=jn(s)),new NT(o,r.transformResults||[])}(e,t))):[]}function tM(i,t){return{documents:[$p(i,t.path)]}}function eM(i,t){const e={structuredQuery:{}},n=t.path;let r;t.collectionGroup!==null?(r=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(r=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=$p(i,r);const s=function(u){if(u.length!==0)return Qp(Qn.create(u,"and"))}(t.filters);s&&(e.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:Fr(p.field),direction:rM(p.dir)}}(h))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=qc(i,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),{_t:e,parent:r}}function nM(i){let t=YT(i.parent);const e=i.structuredQuery,n=e.from?e.from.length:0;let r=null;if(n>0){pe(n===1);const h=e.from[0];h.allDescendants?r=h.collectionId:t=t.child(h.collectionId)}let s=[];e.where&&(s=function(f){const p=Yp(f);return p instanceof Qn&&wp(p)?p.getFilters():[p]}(e.where));let o=[];e.orderBy&&(o=function(f){return f.map(p=>function(x){return new Ea(Vr(x.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(p))}(e.orderBy));let a=null;e.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,Ua(p)?null:p}(e.limit));let c=null;e.startAt&&(c=function(f){const p=!!f.before,v=f.values||[];return new ya(v,p)}(e.startAt));let u=null;return e.endAt&&(u=function(f){const p=!f.before,v=f.values||[];return new ya(v,p)}(e.endAt)),ET(t,r,o,s,a,"F",c,u)}function iM(i,t){const e=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return kt()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Yp(i){return i.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Vr(e.unaryFilter.field);return Fe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Vr(e.unaryFilter.field);return Fe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Vr(e.unaryFilter.field);return Fe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Vr(e.unaryFilter.field);return Fe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return kt()}}(i):i.fieldFilter!==void 0?function(e){return Fe.create(Vr(e.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return kt()}}(e.fieldFilter.op),e.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(e){return Qn.create(e.compositeFilter.filters.map(n=>Yp(n)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return kt()}}(e.compositeFilter.op))}(i):kt()}function rM(i){return qT[i]}function sM(i){return XT[i]}function oM(i){return jT[i]}function Fr(i){return{fieldPath:i.canonicalString()}}function Vr(i){return je.fromServerFormat(i.fieldPath)}function Qp(i){return i instanceof Fe?function(e){if(e.op==="=="){if(Od(e.value))return{unaryFilter:{field:Fr(e.field),op:"IS_NAN"}};if(Ud(e.value))return{unaryFilter:{field:Fr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Od(e.value))return{unaryFilter:{field:Fr(e.field),op:"IS_NOT_NAN"}};if(Ud(e.value))return{unaryFilter:{field:Fr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fr(e.field),op:sM(e.op),value:e.value}}}(i):i instanceof Qn?function(e){const n=e.getFilters().map(r=>Qp(r));return n.length===1?n[0]:{compositeFilter:{op:oM(e.op),filters:n}}}(i):kt()}function aM(i){const t=[];return i.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Jp(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class bi{constructor(t,e,n,r,s=Gt.min(),o=Gt.min(),a=Ke.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new bi(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new bi(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new bi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new bi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class lM{constructor(t){this.ct=t}}function cM(i){const t=nM({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Wc(t,t.limit,"L"):t}/**
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
 */class uM{constructor(){this.un=new hM}addToCollectionParentIndex(t,e){return this.un.add(e),it.resolve()}getCollectionParents(t,e){return it.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return it.resolve()}deleteFieldIndex(t,e){return it.resolve()}deleteAllFieldIndexes(t){return it.resolve()}createTargetIndexes(t,e){return it.resolve()}getDocumentsMatchingTarget(t,e){return it.resolve(null)}getIndexType(t,e){return it.resolve(0)}getFieldIndexes(t,e){return it.resolve([])}getNextCollectionGroupToUpdate(t){return it.resolve(null)}getMinOffset(t,e){return it.resolve(Fi.min())}getMinOffsetFromCollectionGroup(t,e){return it.resolve(Fi.min())}updateCollectionGroup(t,e,n){return it.resolve()}updateIndexEntries(t,e){return it.resolve()}}class hM{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new $e(Ce.comparator),s=!r.has(n);return this.index[e]=r.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new $e(Ce.comparator)).toArray()}}/**
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
 */class rs{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new rs(0)}static kn(){return new rs(-1)}}/**
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
 */class dM{constructor(){this.changes=new fs(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,rn.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?it.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class fM{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class pM{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(n=r,this.remoteDocumentCache.getEntry(t,e))).next(r=>(n!==null&&zs(n.mutation,r,xn.empty(),Ve.now()),r))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,te()).next(()=>n))}getLocalViewOfDocuments(t,e,n=te()){const r=sr();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,n).next(s=>{let o=Us();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const n=sr();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,te()))}populateOverlays(t,e,n){const r=[];return n.forEach(s=>{e.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(t,r).next(s=>{s.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,n,r){let s=pi();const o=ks(),a=function(){return ks()}();return e.forEach((c,u)=>{const h=n.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof Hi)?s=s.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),zs(h.mutation,u,h.mutation.getFieldMask(),Ve.now())):o.set(u.key,xn.empty())}),this.recalculateAndSaveOverlays(t,s).next(c=>(c.forEach((u,h)=>o.set(u,h)),e.forEach((u,h)=>{var f;return a.set(u,new fM(h,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(t,e){const n=ks();let r=new we((o,a)=>o-a),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=e.get(c);if(u===null)return;let h=n.get(c)||xn.empty();h=a.applyToLocalView(u,h),n.set(c,h);const f=(r.get(a.batchId)||te()).add(c);r=r.insert(a.batchId,f)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,f=Np();h.forEach(p=>{if(!s.has(p)){const v=kp(e.get(p),n.get(p));v!==null&&f.set(p,v),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,f))}return it.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,r){return function(o){return Nt.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):xT(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-s.size):it.resolve(sr());let a=-1,c=s;return o.next(u=>it.forEach(u,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?it.resolve():this.remoteDocumentCache.getEntry(t,h).next(p=>{c=c.insert(h,p)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,c,u,te())).next(h=>({batchId:a,changes:Lp(h)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Nt(e)).next(n=>{let r=Us();return n.isFoundDocument()&&(r=r.insert(n.key,n)),r})}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const s=e.collectionGroup;let o=Us();return this.indexManager.getCollectionParents(t,s).next(a=>it.forEach(a,c=>{const u=function(f,p){return new Oa(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(e,c.child(s));return this.getDocumentsMatchingCollectionQuery(t,u,n,r).next(h=>{h.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,s,r))).next(o=>{s.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,rn.newInvalidDocument(h)))});let a=Us();return o.forEach((c,u)=>{const h=s.get(c);h!==void 0&&zs(h.mutation,u,xn.empty(),Ve.now()),Ba(e,u)&&(a=a.insert(c,u))}),a})}}/**
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
 */class mM{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return it.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(r){return{id:r.id,version:r.version,createTime:jn(r.createTime)}}(e)),it.resolve()}getNamedQuery(t,e){return it.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(r){return{name:r.name,query:cM(r.bundledQuery),readTime:jn(r.readTime)}}(e)),it.resolve()}}/**
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
 */class gM{constructor(){this.overlays=new we(Nt.comparator),this.Ir=new Map}getOverlay(t,e){return it.resolve(this.overlays.get(e))}getOverlays(t,e){const n=sr();return it.forEach(e,r=>this.getOverlay(t,r).next(s=>{s!==null&&n.set(r,s)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((r,s)=>{this.ht(t,e,s)}),it.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Ir.get(n);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(n)),it.resolve()}getOverlaysForCollection(t,e,n){const r=sr(),s=e.length+1,o=new Nt(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!e.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>n&&r.set(c.getKey(),c)}return it.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let s=new we((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===e&&u.largestBatchId>n){let h=s.get(u.largestBatchId);h===null&&(h=sr(),s=s.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=sr(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=r)););return it.resolve(a)}ht(t,e,n){const r=this.overlays.get(n.key);if(r!==null){const o=this.Ir.get(r.largestBatchId).delete(n.key);this.Ir.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new BT(e,n));let s=this.Ir.get(e);s===void 0&&(s=te(),this.Ir.set(e,s)),this.Ir.set(e,s.add(n.key))}}/**
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
 */class _M{constructor(){this.sessionToken=Ke.EMPTY_BYTE_STRING}getSessionToken(t){return it.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,it.resolve()}}/**
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
 */class Cu{constructor(){this.Tr=new $e(Ge.Er),this.dr=new $e(Ge.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const n=new Ge(t,e);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Vr(new Ge(t,e))}mr(t,e){t.forEach(n=>this.removeReference(n,e))}gr(t){const e=new Nt(new Ce([])),n=new Ge(e,t),r=new Ge(e,t+1),s=[];return this.dr.forEachInRange([n,r],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new Nt(new Ce([])),n=new Ge(e,t),r=new Ge(e,t+1);let s=te();return this.dr.forEachInRange([n,r],o=>{s=s.add(o.key)}),s}containsKey(t){const e=new Ge(t,0),n=this.Tr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class Ge{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return Nt.comparator(t.key,e.key)||he(t.wr,e.wr)}static Ar(t,e){return he(t.wr,e.wr)||Nt.comparator(t.key,e.key)}}/**
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
 */class vM{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new $e(Ge.Er)}checkEmpty(t){return it.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,r){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new VT(s,e,n,r);this.mutationQueue.push(o);for(const a of r)this.br=this.br.add(new Ge(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return it.resolve(o)}lookupMutationBatch(t,e){return it.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.vr(n),s=r<0?0:r;return it.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return it.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return it.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Ge(e,0),r=new Ge(e,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([n,r],o=>{const a=this.Dr(o.wr);s.push(a)}),it.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new $e(he);return e.forEach(r=>{const s=new Ge(r,0),o=new Ge(r,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{n=n.add(a.wr)})}),it.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let s=n;Nt.isDocumentKey(s)||(s=s.child(""));const o=new Ge(new Nt(s),0);let a=new $e(he);return this.br.forEachWhile(c=>{const u=c.key.path;return!!n.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.wr)),!0)},o),it.resolve(this.Cr(a))}Cr(t){const e=[];return t.forEach(n=>{const r=this.Dr(n);r!==null&&e.push(r)}),e}removeMutationBatch(t,e){pe(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return it.forEach(e.mutations,r=>{const s=new Ge(r.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.br=n})}On(t){}containsKey(t,e){const n=new Ge(e,0),r=this.br.firstAfterOrEqual(n);return it.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,it.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class yM{constructor(t){this.Mr=t,this.docs=function(){return new we(Nt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),s=r?r.size:0,o=this.Mr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return it.resolve(n?n.document.mutableCopy():rn.newInvalidDocument(e))}getEntries(t,e){let n=pi();return e.forEach(r=>{const s=this.docs.get(r);n=n.insert(r,s?s.document.mutableCopy():rn.newInvalidDocument(r))}),it.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let s=pi();const o=e.path,a=new Nt(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||eT(tT(h),n)<=0||(r.has(h.key)||Ba(e,h))&&(s=s.insert(h.key,h.mutableCopy()))}return it.resolve(s)}getAllFromCollectionGroup(t,e,n,r){kt()}Or(t,e){return it.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new EM(this)}getSize(t){return it.resolve(this.size)}}class EM extends dM{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?e.push(this.cr.addEntry(t,r)):this.cr.removeEntry(n)}),it.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
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
 */class xM{constructor(t){this.persistence=t,this.Nr=new fs(e=>Tu(e),Mu),this.lastRemoteSnapshotVersion=Gt.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Cu,this.targetCount=0,this.kr=rs.Bn()}forEachTarget(t,e){return this.Nr.forEach((n,r)=>e(r)),it.resolve()}getLastRemoteSnapshotVersion(t){return it.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return it.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),it.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Lr&&(this.Lr=e),it.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new rs(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,it.resolve()}updateTargetData(t,e){return this.Kn(e),it.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,it.resolve()}removeTargets(t,e,n){let r=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=e&&n.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),it.waitFor(s).next(()=>r)}getTargetCount(t){return it.resolve(this.targetCount)}getTargetData(t,e){const n=this.Nr.get(e)||null;return it.resolve(n)}addMatchingKeys(t,e,n){return this.Br.Rr(e,n),it.resolve()}removeMatchingKeys(t,e,n){this.Br.mr(e,n);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach(o=>{s.push(r.markPotentiallyOrphaned(t,o))}),it.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),it.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Br.yr(e);return it.resolve(n)}containsKey(t,e){return it.resolve(this.Br.containsKey(e))}}/**
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
 */class SM{constructor(t,e){this.qr={},this.overlays={},this.Qr=new yu(0),this.Kr=!1,this.Kr=!0,this.$r=new _M,this.referenceDelegate=t(this),this.Ur=new xM(this),this.indexManager=new uM,this.remoteDocumentCache=function(r){return new yM(r)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new lM(e),this.Gr=new mM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new gM,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.qr[t.toKey()];return n||(n=new vM(e,this.referenceDelegate),this.qr[t.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,n){bt("MemoryPersistence","Starting transaction:",t);const r=new TM(this.Qr.next());return this.referenceDelegate.zr(),n(r).next(s=>this.referenceDelegate.jr(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Hr(t,e){return it.or(Object.values(this.qr).map(n=>()=>n.containsKey(t,e)))}}class TM extends iT{constructor(t){super(),this.currentSequenceNumber=t}}class Iu{constructor(t){this.persistence=t,this.Jr=new Cu,this.Yr=null}static Zr(t){return new Iu(t)}get Xr(){if(this.Yr)return this.Yr;throw kt()}addReference(t,e,n){return this.Jr.addReference(n,e),this.Xr.delete(n.toString()),it.resolve()}removeReference(t,e,n){return this.Jr.removeReference(n,e),this.Xr.add(n.toString()),it.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),it.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(r=>this.Xr.add(r.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(r=>{r.forEach(s=>this.Xr.add(s.toString()))}).next(()=>n.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return it.forEach(this.Xr,n=>{const r=Nt.fromPath(n);return this.ei(t,r).next(s=>{s||e.removeEntry(r,Gt.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(n=>{n?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return it.or([()=>it.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
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
 */class Pu{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.$i=n,this.Ui=r}static Wi(t,e){let n=te(),r=te();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Pu(t,e.fromCache,n,r)}}/**
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
 */class MM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class AM{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Rx()?8:rT(wx())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,n,r){const s={result:null};return this.Yi(t,e).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(t,e,r,n).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new MM;return this.Xi(t,e,o).next(a=>{if(s.result=a,this.zi)return this.es(t,e,o,a.size)})}).next(()=>s.result)}es(t,e,n,r){return n.documentReadCount<this.ji?(Ds()<=ce.DEBUG&&bt("QueryEngine","SDK will not create cache indexes for query:",Or(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),it.resolve()):(Ds()<=ce.DEBUG&&bt("QueryEngine","Query:",Or(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Hi*r?(Ds()<=ce.DEBUG&&bt("QueryEngine","The SDK decides to create cache indexes for query:",Or(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,qn(e))):it.resolve())}Yi(t,e){if(kd(e))return it.resolve(null);let n=qn(e);return this.indexManager.getIndexType(t,n).next(r=>r===0?null:(e.limit!==null&&r===1&&(e=Wc(e,null,"F"),n=qn(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(s=>{const o=te(...s);return this.Ji.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,n).next(c=>{const u=this.ts(e,a);return this.ns(e,u,o,c.readTime)?this.Yi(t,Wc(e,null,"F")):this.rs(t,u,e,c)}))})))}Zi(t,e,n,r){return kd(e)||r.isEqual(Gt.min())?it.resolve(null):this.Ji.getDocuments(t,n).next(s=>{const o=this.ts(e,s);return this.ns(e,o,n,r)?it.resolve(null):(Ds()<=ce.DEBUG&&bt("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Or(e)),this.rs(t,o,e,ZS(r,-1)).next(a=>a))})}ts(t,e){let n=new $e(Pp(t));return e.forEach((r,s)=>{Ba(t,s)&&(n=n.add(s))}),n}ns(t,e,n,r){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Xi(t,e,n){return Ds()<=ce.DEBUG&&bt("QueryEngine","Using full collection scan to execute query:",Or(e)),this.Ji.getDocumentsMatchingQuery(t,e,Fi.min(),n)}rs(t,e,n,r){return this.Ji.getDocumentsMatchingQuery(t,n,r).next(s=>(e.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class wM{constructor(t,e,n,r){this.persistence=t,this.ss=e,this.serializer=r,this.os=new we(he),this._s=new fs(s=>Tu(s),Mu),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(n)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new pM(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function bM(i,t,e,n){return new wM(i,t,e,n)}async function Zp(i,t){const e=Wt(i);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(s=>(r=s,e.ls(t),e.mutationQueue.getAllMutationBatches(n))).next(s=>{const o=[],a=[];let c=te();for(const u of r){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of s){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return e.localDocuments.getDocuments(n,c).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:a}))})})}function RM(i,t){const e=Wt(i);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const r=t.batch.keys(),s=e.cs.newChangeBuffer({trackRemovals:!0});return function(a,c,u,h){const f=u.batch,p=f.keys();let v=it.resolve();return p.forEach(x=>{v=v.next(()=>h.getEntry(c,x)).next(A=>{const g=u.docVersions.get(x);pe(g!==null),A.version.compareTo(g)<0&&(f.applyToRemoteDocument(A,u),A.isValidDocument()&&(A.setReadTime(u.commitVersion),h.addEntry(A)))})}),v.next(()=>a.mutationQueue.removeMutationBatch(c,f))}(e,n,t,s).next(()=>s.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,r,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(a){let c=te();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(t))).next(()=>e.localDocuments.getDocuments(n,r))})}function tm(i){const t=Wt(i);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function CM(i,t){const e=Wt(i),n=t.snapshotVersion;let r=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=e.cs.newChangeBuffer({trackRemovals:!0});r=e.os;const a=[];t.targetChanges.forEach((h,f)=>{const p=r.get(f);if(!p)return;a.push(e.Ur.removeMatchingKeys(s,h.removedDocuments,f).next(()=>e.Ur.addMatchingKeys(s,h.addedDocuments,f)));let v=p.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(f)!==null?v=v.withResumeToken(Ke.EMPTY_BYTE_STRING,Gt.min()).withLastLimboFreeSnapshotVersion(Gt.min()):h.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(h.resumeToken,n)),r=r.insert(f,v),function(A,g,_){return A.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(p,v,h)&&a.push(e.Ur.updateTargetData(s,v))});let c=pi(),u=te();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(IM(s,o,t.documentUpdates).next(h=>{c=h.Ps,u=h.Is})),!n.isEqual(Gt.min())){const h=e.Ur.getLastRemoteSnapshotVersion(s).next(f=>e.Ur.setTargetsMetadata(s,s.currentSequenceNumber,n));a.push(h)}return it.waitFor(a).next(()=>o.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(e.os=r,s))}function IM(i,t,e){let n=te(),r=te();return e.forEach(s=>n=n.add(s)),t.getEntries(i,n).next(s=>{let o=pi();return e.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(Gt.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):bt("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Ps:o,Is:r}})}function PM(i,t){const e=Wt(i);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function DM(i,t){const e=Wt(i);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let r;return e.Ur.getTargetData(n,t).next(s=>s?(r=s,it.resolve(r)):e.Ur.allocateTargetId(n).next(o=>(r=new bi(t,o,"TargetPurposeListen",n.currentSequenceNumber),e.Ur.addTargetData(n,r).next(()=>r))))}).then(n=>{const r=e.os.get(n.targetId);return(r===null||n.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(e.os=e.os.insert(n.targetId,n),e._s.set(t,n.targetId)),n})}async function Kc(i,t,e){const n=Wt(i),r=n.os.get(t),s=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",s,o=>n.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!so(o))throw o;bt("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}n.os=n.os.remove(t),n._s.delete(r.target)}function Qd(i,t,e){const n=Wt(i);let r=Gt.min(),s=te();return n.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const f=Wt(c),p=f._s.get(h);return p!==void 0?it.resolve(f.os.get(p)):f.Ur.getTargetData(u,h)}(n,o,qn(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>n.ss.getDocumentsMatchingQuery(o,t,e?r:Gt.min(),e?s:te())).next(a=>(LM(n,TT(t),a),{documents:a,Ts:s})))}function LM(i,t,e){let n=i.us.get(t)||Gt.min();e.forEach((r,s)=>{s.readTime.compareTo(n)>0&&(n=s.readTime)}),i.us.set(t,n)}class Jd{constructor(){this.activeTargetIds=CT()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class NM{constructor(){this.so=new Jd,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,n){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Jd,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class UM{_o(t){}shutdown(){}}/**
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
 */class Zd{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){bt("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){bt("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ko=null;function Bl(){return Ko===null?Ko=function(){return 268435456+Math.round(2147483648*Math.random())}():Ko++,"0x"+Ko.toString(16)}/**
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
 */const OM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class FM{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
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
 */const en="WebChannelConnection";class VM extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+e.host,this.vo=`projects/${r}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${s}`}get Fo(){return!1}Mo(e,n,r,s,o){const a=Bl(),c=this.xo(e,n.toUriEncodedString());bt("RestConnection",`Sending RPC '${e}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,s,o),this.No(e,c,u,r).then(h=>(bt("RestConnection",`Received RPC '${e}' ${a}: `,h),h),h=>{throw ts("RestConnection",`RPC '${e}' ${a} failed with error: `,h,"url: ",c,"request:",r),h})}Lo(e,n,r,s,o,a){return this.Mo(e,n,r,s,o)}Oo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ds}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,o)=>e[o]=s),r&&r.headers.forEach((s,o)=>e[o]=s)}xo(e,n){const r=OM[e];return`${this.Do}/v1/${n}:${r}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,n,r){const s=Bl();return new Promise((o,a)=>{const c=new pp;c.setWithCredentials(!0),c.listenOnce(mp.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case sa.NO_ERROR:const h=c.getResponseJson();bt(en,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(h)),o(h);break;case sa.TIMEOUT:bt(en,`RPC '${t}' ${s} timed out`),a(new It(st.DEADLINE_EXCEEDED,"Request time out"));break;case sa.HTTP_ERROR:const f=c.getStatus();if(bt(en,`RPC '${t}' ${s} failed with status:`,f,"response text:",c.getResponseText()),f>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const v=p?.error;if(v&&v.status&&v.message){const x=function(g){const _=g.toLowerCase().replace(/_/g,"-");return Object.values(st).indexOf(_)>=0?_:st.UNKNOWN}(v.status);a(new It(x,v.message))}else a(new It(st.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new It(st.UNAVAILABLE,"Connection failed."));break;default:kt()}}finally{bt(en,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(r);bt(en,`RPC '${t}' ${s} sending request:`,r),c.send(e,"POST",u,n,15)})}Bo(t,e,n){const r=Bl(),s=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=vp(),a=_p(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,e,n),c.encodeInitMessageHeaders=!0;const h=s.join("");bt(en,`Creating RPC '${t}' stream ${r}: ${h}`,c);const f=o.createWebChannel(h,c);let p=!1,v=!1;const x=new FM({Io:g=>{v?bt(en,`Not sending because RPC '${t}' stream ${r} is closed:`,g):(p||(bt(en,`Opening RPC '${t}' stream ${r} transport.`),f.open(),p=!0),bt(en,`RPC '${t}' stream ${r} sending:`,g),f.send(g))},To:()=>f.close()}),A=(g,_,D)=>{g.listen(_,P=>{try{D(P)}catch(N){setTimeout(()=>{throw N},0)}})};return A(f,Ns.EventType.OPEN,()=>{v||(bt(en,`RPC '${t}' stream ${r} transport opened.`),x.yo())}),A(f,Ns.EventType.CLOSE,()=>{v||(v=!0,bt(en,`RPC '${t}' stream ${r} transport closed`),x.So())}),A(f,Ns.EventType.ERROR,g=>{v||(v=!0,ts(en,`RPC '${t}' stream ${r} transport errored:`,g),x.So(new It(st.UNAVAILABLE,"The operation could not be completed")))}),A(f,Ns.EventType.MESSAGE,g=>{var _;if(!v){const D=g.data[0];pe(!!D);const P=D,N=P.error||((_=P[0])===null||_===void 0?void 0:_.error);if(N){bt(en,`RPC '${t}' stream ${r} received error:`,N);const z=N.status;let U=function(C){const m=Ue[C];if(m!==void 0)return Gp(m)}(z),S=N.message;U===void 0&&(U=st.INTERNAL,S="Unknown error status: "+z+" with message "+N.message),v=!0,x.So(new It(U,S)),f.close()}else bt(en,`RPC '${t}' stream ${r} received:`,D),x.bo(D)}}),A(a,gp.STAT_EVENT,g=>{g.stat===Bc.PROXY?bt(en,`RPC '${t}' stream ${r} detected buffering proxy`):g.stat===Bc.NOPROXY&&bt(en,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{x.wo()},0),x}}function kl(){return typeof document<"u"?document:null}/**
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
 */function Ga(i){return new $T(i,!0)}/**
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
 */class em{constructor(t,e,n=1e3,r=1.5,s=6e4){this.ui=t,this.timerId=e,this.ko=n,this.qo=r,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),r=Math.max(0,e-n);r>0&&bt("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class nm{constructor(t,e,n,r,s,o,a,c){this.ui=t,this.Ho=n,this.Jo=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new em(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===st.RESOURCE_EXHAUSTED?(fi(e.toString()),fi("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===st.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,r])=>{this.Yo===e&&this.P_(n,r)},n=>{t(()=>{const r=new It(st.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(r)})})}P_(t,e){const n=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(r=>{n(()=>this.I_(r))}),this.stream.onMessage(r=>{n(()=>++this.e_==1?this.E_(r):this.onNext(r))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return bt("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(bt("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class BM extends nm{constructor(t,e,n,r,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,o),this.serializer=s}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=QT(this.serializer,t),n=function(s){if(!("targetChange"in s))return Gt.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Gt.min():o.readTime?jn(o.readTime):Gt.min()}(t);return this.listener.d_(e,n)}A_(t){const e={};e.database=$c(this.serializer),e.addTarget=function(s,o){let a;const c=o.target;if(a=Gc(c)?{documents:tM(s,c)}:{query:eM(s,c)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Xp(s,o.resumeToken);const u=qc(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(Gt.min())>0){a.readTime=Ta(s,o.snapshotVersion.toTimestamp());const u=qc(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const n=iM(this.serializer,t);n&&(e.labels=n),this.a_(e)}R_(t){const e={};e.database=$c(this.serializer),e.removeTarget=t,this.a_(e)}}class kM extends nm{constructor(t,e,n,r,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return pe(!!t.streamToken),this.lastStreamToken=t.streamToken,pe(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){pe(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=ZT(t.writeResults,t.commitTime),n=jn(t.commitTime);return this.listener.g_(n,e)}p_(){const t={};t.database=$c(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>JT(this.serializer,n))};this.a_(e)}}/**
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
 */class zM extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new It(st.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,n,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(t,Xc(e,n),r,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===st.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new It(st.UNKNOWN,s.toString())})}Lo(t,e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(t,Xc(e,n),r,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===st.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new It(st.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class HM{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(fi(e),this.D_=!1):bt("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class GM{constructor(t,e,n,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{n.enqueueAndForget(async()=>{fr(this)&&(bt("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=Wt(c);u.L_.add(4),await lo(u),u.q_.set("Unknown"),u.L_.delete(4),await Wa(u)}(this))})}),this.q_=new HM(n,r)}}async function Wa(i){if(fr(i))for(const t of i.B_)await t(!0)}async function lo(i){for(const t of i.B_)await t(!1)}function im(i,t){const e=Wt(i);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),Uu(e)?Nu(e):ps(e).r_()&&Lu(e,t))}function Du(i,t){const e=Wt(i),n=ps(e);e.N_.delete(t),n.r_()&&rm(e,t),e.N_.size===0&&(n.r_()?n.o_():fr(e)&&e.q_.set("Unknown"))}function Lu(i,t){if(i.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Gt.min())>0){const e=i.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}ps(i).A_(t)}function rm(i,t){i.Q_.xe(t),ps(i).R_(t)}function Nu(i){i.Q_=new WT({getRemoteKeysForTarget:t=>i.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>i.N_.get(t)||null,tt:()=>i.datastore.serializer.databaseId}),ps(i).start(),i.q_.v_()}function Uu(i){return fr(i)&&!ps(i).n_()&&i.N_.size>0}function fr(i){return Wt(i).L_.size===0}function sm(i){i.Q_=void 0}async function WM(i){i.q_.set("Online")}async function qM(i){i.N_.forEach((t,e)=>{Lu(i,t)})}async function XM(i,t){sm(i),Uu(i)?(i.q_.M_(t),Nu(i)):i.q_.set("Unknown")}async function jM(i,t,e){if(i.q_.set("Online"),t instanceof qp&&t.state===2&&t.cause)try{await async function(r,s){const o=s.cause;for(const a of s.targetIds)r.N_.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.N_.delete(a),r.Q_.removeTarget(a))}(i,t)}catch(n){bt("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Ma(i,n)}else if(t instanceof la?i.Q_.Ke(t):t instanceof Wp?i.Q_.He(t):i.Q_.We(t),!e.isEqual(Gt.min()))try{const n=await tm(i.localStore);e.compareTo(n)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=s.N_.get(u);h&&s.N_.set(u,h.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const h=s.N_.get(c);if(!h)return;s.N_.set(c,h.withResumeToken(Ke.EMPTY_BYTE_STRING,h.snapshotVersion)),rm(s,c);const f=new bi(h.target,c,u,h.sequenceNumber);Lu(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(i,e)}catch(n){bt("RemoteStore","Failed to raise snapshot:",n),await Ma(i,n)}}async function Ma(i,t,e){if(!so(t))throw t;i.L_.add(1),await lo(i),i.q_.set("Offline"),e||(e=()=>tm(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{bt("RemoteStore","Retrying IndexedDB access"),await e(),i.L_.delete(1),await Wa(i)})}function om(i,t){return t().catch(e=>Ma(i,e,t))}async function qa(i){const t=Wt(i),e=Bi(t);let n=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;$M(t);)try{const r=await PM(t.localStore,n);if(r===null){t.O_.length===0&&e.o_();break}n=r.batchId,KM(t,r)}catch(r){await Ma(t,r)}am(t)&&lm(t)}function $M(i){return fr(i)&&i.O_.length<10}function KM(i,t){i.O_.push(t);const e=Bi(i);e.r_()&&e.V_&&e.m_(t.mutations)}function am(i){return fr(i)&&!Bi(i).n_()&&i.O_.length>0}function lm(i){Bi(i).start()}async function YM(i){Bi(i).p_()}async function QM(i){const t=Bi(i);for(const e of i.O_)t.m_(e.mutations)}async function JM(i,t,e){const n=i.O_.shift(),r=wu.from(n,t,e);await om(i,()=>i.remoteSyncer.applySuccessfulWrite(r)),await qa(i)}async function ZM(i,t){t&&Bi(i).V_&&await async function(n,r){if(function(o){return zT(o)&&o!==st.ABORTED}(r.code)){const s=n.O_.shift();Bi(n).s_(),await om(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await qa(n)}}(i,t),am(i)&&lm(i)}async function tf(i,t){const e=Wt(i);e.asyncQueue.verifyOperationInProgress(),bt("RemoteStore","RemoteStore received new credentials");const n=fr(e);e.L_.add(3),await lo(e),n&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Wa(e)}async function tA(i,t){const e=Wt(i);t?(e.L_.delete(2),await Wa(e)):t||(e.L_.add(2),await lo(e),e.q_.set("Unknown"))}function ps(i){return i.K_||(i.K_=function(e,n,r){const s=Wt(e);return s.w_(),new BM(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(i.datastore,i.asyncQueue,{Eo:WM.bind(null,i),Ro:qM.bind(null,i),mo:XM.bind(null,i),d_:jM.bind(null,i)}),i.B_.push(async t=>{t?(i.K_.s_(),Uu(i)?Nu(i):i.q_.set("Unknown")):(await i.K_.stop(),sm(i))})),i.K_}function Bi(i){return i.U_||(i.U_=function(e,n,r){const s=Wt(e);return s.w_(),new kM(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(i.datastore,i.asyncQueue,{Eo:()=>Promise.resolve(),Ro:YM.bind(null,i),mo:ZM.bind(null,i),f_:QM.bind(null,i),g_:JM.bind(null,i)}),i.B_.push(async t=>{t?(i.U_.s_(),await qa(i)):(await i.U_.stop(),i.O_.length>0&&(bt("RemoteStore",`Stopping write stream with ${i.O_.length} pending writes`),i.O_=[]))})),i.U_}/**
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
 */class Ou{constructor(t,e,n,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new Li,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,s){const o=Date.now()+n,a=new Ou(t,e,o,r,s);return a.start(n),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new It(st.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fu(i,t){if(fi("AsyncQueue",`${t}: ${i}`),so(i))return new It(st.UNAVAILABLE,`${t}: ${i}`);throw i}/**
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
 */class qr{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Nt.comparator(e.key,n.key):(e,n)=>Nt.comparator(e.key,n.key),this.keyedMap=Us(),this.sortedSet=new we(this.comparator)}static emptySet(t){return new qr(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof qr)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const r=e.getNext().key,s=n.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new qr;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
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
 */class ef{constructor(){this.W_=new we(Nt.comparator)}track(t){const e=t.doc.key,n=this.W_.get(e);n?t.type!==0&&n.type===3?this.W_=this.W_.insert(e,t):t.type===3&&n.type!==1?this.W_=this.W_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.W_=this.W_.remove(e):t.type===1&&n.type===2?this.W_=this.W_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):kt():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,n)=>{t.push(n)}),t}}class ss{constructor(t,e,n,r,s,o,a,c,u){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,e,n,r,s){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new ss(t,e,qr.emptySet(e),o,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Va(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}/**
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
 */class eA{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class nA{constructor(){this.queries=nf(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,n){const r=Wt(e),s=r.queries;r.queries=nf(),s.forEach((o,a)=>{for(const c of a.j_)c.onError(n)})})(this,new It(st.ABORTED,"Firestore shutting down"))}}function nf(){return new fs(i=>Ip(i),Va)}async function cm(i,t){const e=Wt(i);let n=3;const r=t.query;let s=e.queries.get(r);s?!s.H_()&&t.J_()&&(n=2):(s=new eA,n=t.J_()?0:1);try{switch(n){case 0:s.z_=await e.onListen(r,!0);break;case 1:s.z_=await e.onListen(r,!1);break;case 2:await e.onFirstRemoteStoreListen(r)}}catch(o){const a=Fu(o,`Initialization of query '${Or(t.query)}' failed`);return void t.onError(a)}e.queries.set(r,s),s.j_.push(t),t.Z_(e.onlineState),s.z_&&t.X_(s.z_)&&Vu(e)}async function um(i,t){const e=Wt(i),n=t.query;let r=3;const s=e.queries.get(n);if(s){const o=s.j_.indexOf(t);o>=0&&(s.j_.splice(o,1),s.j_.length===0?r=t.J_()?0:1:!s.H_()&&t.J_()&&(r=2))}switch(r){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function iA(i,t){const e=Wt(i);let n=!1;for(const r of t){const s=r.query,o=e.queries.get(s);if(o){for(const a of o.j_)a.X_(r)&&(n=!0);o.z_=r}}n&&Vu(e)}function rA(i,t,e){const n=Wt(i),r=n.queries.get(t);if(r)for(const s of r.j_)s.onError(e);n.queries.delete(t)}function Vu(i){i.Y_.forEach(t=>{t.next()})}var Yc,rf;(rf=Yc||(Yc={})).ea="default",rf.Cache="cache";class hm{constructor(t,e,n){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(t){if(!this.options.includeMetadataChanges){const n=[];for(const r of t.docChanges)r.type!==3&&n.push(r);t=new ss(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const n=e!=="Offline";return(!this.options._a||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=ss.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Yc.Cache}}/**
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
 */class dm{constructor(t){this.key=t}}class fm{constructor(t){this.key=t}}class sA{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=te(),this.mutatedKeys=te(),this.Aa=Pp(t),this.Ra=new qr(this.Aa)}get Va(){return this.Ta}ma(t,e){const n=e?e.fa:new ef,r=e?e.Ra:this.Ra;let s=e?e.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((h,f)=>{const p=r.get(h),v=Ba(this.query,f)?f:null,x=!!p&&this.mutatedKeys.has(p.key),A=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let g=!1;p&&v?p.data.isEqual(v.data)?x!==A&&(n.track({type:3,doc:v}),g=!0):this.ga(p,v)||(n.track({type:2,doc:v}),g=!0,(c&&this.Aa(v,c)>0||u&&this.Aa(v,u)<0)&&(a=!0)):!p&&v?(n.track({type:0,doc:v}),g=!0):p&&!v&&(n.track({type:1,doc:p}),g=!0,(c||u)&&(a=!0)),g&&(v?(o=o.add(v),s=A?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),n.track({type:1,doc:h})}return{Ra:o,fa:n,ns:a,mutatedKeys:s}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,r){const s=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const o=t.fa.G_();o.sort((h,f)=>function(v,x){const A=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return kt()}};return A(v)-A(x)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(n),r=r!=null&&r;const a=e&&!r?this.ya():[],c=this.da.size===0&&this.current&&!r?1:0,u=c!==this.Ea;return this.Ea=c,o.length!==0||u?{snapshot:new ss(this.query,t.Ra,s,o,t.mutatedKeys,c===0,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new ef,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=te(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const e=[];return t.forEach(n=>{this.da.has(n)||e.push(new fm(n))}),this.da.forEach(n=>{t.has(n)||e.push(new dm(n))}),e}ba(t){this.Ta=t.Ts,this.da=te();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return ss.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class oA{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class aA{constructor(t){this.key=t,this.va=!1}}class lA{constructor(t,e,n,r,s,o){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new fs(a=>Ip(a),Va),this.Ma=new Map,this.xa=new Set,this.Oa=new we(Nt.comparator),this.Na=new Map,this.La=new Cu,this.Ba={},this.ka=new Map,this.qa=rs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function cA(i,t,e=!0){const n=ym(i);let r;const s=n.Fa.get(t);return s?(n.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.Da()):r=await pm(n,t,e,!0),r}async function uA(i,t){const e=ym(i);await pm(e,t,!0,!1)}async function pm(i,t,e,n){const r=await DM(i.localStore,qn(t)),s=r.targetId,o=i.sharedClientState.addLocalQueryTarget(s,e);let a;return n&&(a=await hA(i,t,s,o==="current",r.resumeToken)),i.isPrimaryClient&&e&&im(i.remoteStore,r),a}async function hA(i,t,e,n,r){i.Ka=(f,p,v)=>async function(A,g,_,D){let P=g.view.ma(_);P.ns&&(P=await Qd(A.localStore,g.query,!1).then(({documents:S})=>g.view.ma(S,P)));const N=D&&D.targetChanges.get(g.targetId),z=D&&D.targetMismatches.get(g.targetId)!=null,U=g.view.applyChanges(P,A.isPrimaryClient,N,z);return of(A,g.targetId,U.wa),U.snapshot}(i,f,p,v);const s=await Qd(i.localStore,t,!0),o=new sA(t,s.Ts),a=o.ma(s.documents),c=ao.createSynthesizedTargetChangeForCurrentChange(e,n&&i.onlineState!=="Offline",r),u=o.applyChanges(a,i.isPrimaryClient,c);of(i,e,u.wa);const h=new oA(t,e,o);return i.Fa.set(t,h),i.Ma.has(e)?i.Ma.get(e).push(t):i.Ma.set(e,[t]),u.snapshot}async function dA(i,t,e){const n=Wt(i),r=n.Fa.get(t),s=n.Ma.get(r.targetId);if(s.length>1)return n.Ma.set(r.targetId,s.filter(o=>!Va(o,t))),void n.Fa.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Kc(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),e&&Du(n.remoteStore,r.targetId),Qc(n,r.targetId)}).catch(ro)):(Qc(n,r.targetId),await Kc(n.localStore,r.targetId,!0))}async function fA(i,t){const e=Wt(i),n=e.Fa.get(t),r=e.Ma.get(n.targetId);e.isPrimaryClient&&r.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Du(e.remoteStore,n.targetId))}async function pA(i,t,e){const n=xA(i);try{const r=await function(o,a){const c=Wt(o),u=Ve.now(),h=a.reduce((v,x)=>v.add(x.key),te());let f,p;return c.persistence.runTransaction("Locally write mutations","readwrite",v=>{let x=pi(),A=te();return c.cs.getEntries(v,h).next(g=>{x=g,x.forEach((_,D)=>{D.isValidDocument()||(A=A.add(_))})}).next(()=>c.localDocuments.getOverlayedDocuments(v,x)).next(g=>{f=g;const _=[];for(const D of a){const P=OT(D,f.get(D.key).overlayedDocument);P!=null&&_.push(new Hi(D.key,P,Tp(P.value.mapValue),Xn.exists(!0)))}return c.mutationQueue.addMutationBatch(v,u,_,a)}).next(g=>{p=g;const _=g.applyToLocalDocumentSet(f,A);return c.documentOverlayCache.saveOverlays(v,g.batchId,_)})}).then(()=>({batchId:p.batchId,changes:Lp(f)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(r.batchId),function(o,a,c){let u=o.Ba[o.currentUser.toKey()];u||(u=new we(he)),u=u.insert(a,c),o.Ba[o.currentUser.toKey()]=u}(n,r.batchId,e),await co(n,r.changes),await qa(n.remoteStore)}catch(r){const s=Fu(r,"Failed to persist write");e.reject(s)}}async function mm(i,t){const e=Wt(i);try{const n=await CM(e.localStore,t);t.targetChanges.forEach((r,s)=>{const o=e.Na.get(s);o&&(pe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.va=!0:r.modifiedDocuments.size>0?pe(o.va):r.removedDocuments.size>0&&(pe(o.va),o.va=!1))}),await co(e,n,t)}catch(n){await ro(n)}}function sf(i,t,e){const n=Wt(i);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const r=[];n.Fa.forEach((s,o)=>{const a=o.view.Z_(t);a.snapshot&&r.push(a.snapshot)}),function(o,a){const c=Wt(o);c.onlineState=a;let u=!1;c.queries.forEach((h,f)=>{for(const p of f.j_)p.Z_(a)&&(u=!0)}),u&&Vu(c)}(n.eventManager,t),r.length&&n.Ca.d_(r),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function mA(i,t,e){const n=Wt(i);n.sharedClientState.updateQueryState(t,"rejected",e);const r=n.Na.get(t),s=r&&r.key;if(s){let o=new we(Nt.comparator);o=o.insert(s,rn.newNoDocument(s,Gt.min()));const a=te().add(s),c=new Ha(Gt.min(),new Map,new we(he),o,a);await mm(n,c),n.Oa=n.Oa.remove(s),n.Na.delete(t),Bu(n)}else await Kc(n.localStore,t,!1).then(()=>Qc(n,t,e)).catch(ro)}async function gA(i,t){const e=Wt(i),n=t.batch.batchId;try{const r=await RM(e.localStore,t);_m(e,n,null),gm(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await co(e,r)}catch(r){await ro(r)}}async function _A(i,t,e){const n=Wt(i);try{const r=await function(o,a){const c=Wt(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,a).next(f=>(pe(f!==null),h=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(n.localStore,t);_m(n,t,e),gm(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await co(n,r)}catch(r){await ro(r)}}function gm(i,t){(i.ka.get(t)||[]).forEach(e=>{e.resolve()}),i.ka.delete(t)}function _m(i,t,e){const n=Wt(i);let r=n.Ba[n.currentUser.toKey()];if(r){const s=r.get(t);s&&(e?s.reject(e):s.resolve(),r=r.remove(t)),n.Ba[n.currentUser.toKey()]=r}}function Qc(i,t,e=null){i.sharedClientState.removeLocalQueryTarget(t);for(const n of i.Ma.get(t))i.Fa.delete(n),e&&i.Ca.$a(n,e);i.Ma.delete(t),i.isPrimaryClient&&i.La.gr(t).forEach(n=>{i.La.containsKey(n)||vm(i,n)})}function vm(i,t){i.xa.delete(t.path.canonicalString());const e=i.Oa.get(t);e!==null&&(Du(i.remoteStore,e),i.Oa=i.Oa.remove(t),i.Na.delete(e),Bu(i))}function of(i,t,e){for(const n of e)n instanceof dm?(i.La.addReference(n.key,t),vA(i,n)):n instanceof fm?(bt("SyncEngine","Document no longer in limbo: "+n.key),i.La.removeReference(n.key,t),i.La.containsKey(n.key)||vm(i,n.key)):kt()}function vA(i,t){const e=t.key,n=e.path.canonicalString();i.Oa.get(e)||i.xa.has(n)||(bt("SyncEngine","New document in limbo: "+e),i.xa.add(n),Bu(i))}function Bu(i){for(;i.xa.size>0&&i.Oa.size<i.maxConcurrentLimboResolutions;){const t=i.xa.values().next().value;i.xa.delete(t);const e=new Nt(Ce.fromString(t)),n=i.qa.next();i.Na.set(n,new aA(e)),i.Oa=i.Oa.insert(e,n),im(i.remoteStore,new bi(qn(Fa(e.path)),n,"TargetPurposeLimboResolution",yu.oe))}}async function co(i,t,e){const n=Wt(i),r=[],s=[],o=[];n.Fa.isEmpty()||(n.Fa.forEach((a,c)=>{o.push(n.Ka(c,t,e).then(u=>{var h;if((u||e)&&n.isPrimaryClient){const f=u?!u.fromCache:(h=e?.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;n.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){r.push(u);const f=Pu.Wi(c.targetId,u);s.push(f)}}))}),await Promise.all(o),n.Ca.d_(r),await async function(c,u){const h=Wt(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>it.forEach(u,p=>it.forEach(p.$i,v=>h.persistence.referenceDelegate.addReference(f,p.targetId,v)).next(()=>it.forEach(p.Ui,v=>h.persistence.referenceDelegate.removeReference(f,p.targetId,v)))))}catch(f){if(!so(f))throw f;bt("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const p=f.targetId;if(!f.fromCache){const v=h.os.get(p),x=v.snapshotVersion,A=v.withLastLimboFreeSnapshotVersion(x);h.os=h.os.insert(p,A)}}}(n.localStore,s))}async function yA(i,t){const e=Wt(i);if(!e.currentUser.isEqual(t)){bt("SyncEngine","User change. New user:",t.toKey());const n=await Zp(e.localStore,t);e.currentUser=t,function(s,o){s.ka.forEach(a=>{a.forEach(c=>{c.reject(new It(st.CANCELLED,o))})}),s.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await co(e,n.hs)}}function EA(i,t){const e=Wt(i),n=e.Na.get(t);if(n&&n.va)return te().add(n.key);{let r=te();const s=e.Ma.get(t);if(!s)return r;for(const o of s){const a=e.Fa.get(o);r=r.unionWith(a.view.Va)}return r}}function ym(i){const t=Wt(i);return t.remoteStore.remoteSyncer.applyRemoteEvent=mm.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=EA.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=mA.bind(null,t),t.Ca.d_=iA.bind(null,t.eventManager),t.Ca.$a=rA.bind(null,t.eventManager),t}function xA(i){const t=Wt(i);return t.remoteStore.remoteSyncer.applySuccessfulWrite=gA.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=_A.bind(null,t),t}class Aa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Ga(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return bM(this.persistence,new AM,t.initialUser,this.serializer)}Ga(t){return new SM(Iu.Zr,this.serializer)}Wa(t){return new NM}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Aa.provider={build:()=>new Aa};class Jc{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>sf(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=yA.bind(null,this.syncEngine),await tA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new nA}()}createDatastore(t){const e=Ga(t.databaseInfo.databaseId),n=function(s){return new VM(s)}(t.databaseInfo);return function(s,o,a,c){return new zM(s,o,a,c)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,r,s,o,a){return new GM(n,r,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>sf(this.syncEngine,e,0),function(){return Zd.D()?new Zd:new UM}())}createSyncEngine(t,e){return function(r,s,o,a,c,u,h){const f=new lA(r,s,o,a,c,u);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(r){const s=Wt(r);bt("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await lo(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Jc.provider={build:()=>new Jc};/**
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
 */class Em{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):fi("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class SA{constructor(t,e,n,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=nn.UNAUTHENTICATED,this.clientId=Ep.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,async o=>{bt("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(bt("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Li;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Fu(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function zl(i,t){i.asyncQueue.verifyOperationInProgress(),bt("FirestoreClient","Initializing OfflineComponentProvider");const e=i.configuration;await t.initialize(e);let n=e.initialUser;i.setCredentialChangeListener(async r=>{n.isEqual(r)||(await Zp(t.localStore,r),n=r)}),t.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=t}async function af(i,t){i.asyncQueue.verifyOperationInProgress();const e=await TA(i);bt("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,i.configuration),i.setCredentialChangeListener(n=>tf(t.remoteStore,n)),i.setAppCheckTokenChangeListener((n,r)=>tf(t.remoteStore,r)),i._onlineComponents=t}async function TA(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){bt("FirestoreClient","Using user provided OfflineComponentProvider");try{await zl(i,i._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(r){return r.name==="FirebaseError"?r.code===st.FAILED_PRECONDITION||r.code===st.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(e))throw e;ts("Error using user provided cache. Falling back to memory cache: "+e),await zl(i,new Aa)}}else bt("FirestoreClient","Using default OfflineComponentProvider"),await zl(i,new Aa);return i._offlineComponents}async function xm(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(bt("FirestoreClient","Using user provided OnlineComponentProvider"),await af(i,i._uninitializedComponentsProvider._online)):(bt("FirestoreClient","Using default OnlineComponentProvider"),await af(i,new Jc))),i._onlineComponents}function MA(i){return xm(i).then(t=>t.syncEngine)}async function Zc(i){const t=await xm(i),e=t.eventManager;return e.onListen=cA.bind(null,t.syncEngine),e.onUnlisten=dA.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=uA.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=fA.bind(null,t.syncEngine),e}function AA(i,t,e={}){const n=new Li;return i.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const h=new Em({next:p=>{h.Za(),o.enqueueAndForget(()=>um(s,f));const v=p.docs.has(a);!v&&p.fromCache?u.reject(new It(st.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&p.fromCache&&c&&c.source==="server"?u.reject(new It(st.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),f=new hm(Fa(a.path),h,{includeMetadataChanges:!0,_a:!0});return cm(s,f)}(await Zc(i),i.asyncQueue,t,e,n)),n.promise}/**
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
 */function Sm(i){const t={};return i.timeoutSeconds!==void 0&&(t.timeoutSeconds=i.timeoutSeconds),t}/**
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
 */const lf=new Map;/**
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
 */function wA(i,t,e){if(!e)throw new It(st.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${t}.`)}function bA(i,t,e,n){if(t===!0&&n===!0)throw new It(st.INVALID_ARGUMENT,`${i} and ${e} cannot be used together.`)}function cf(i){if(!Nt.isDocumentKey(i))throw new It(st.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function ku(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(i);return t?`a custom ${t} object`:"an object"}}return typeof i=="function"?"a function":kt()}function $n(i,t){if("_delegate"in i&&(i=i._delegate),!(i instanceof t)){if(t.name===i.constructor.name)throw new It(st.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ku(i);throw new It(st.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return i}/**
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
 */class uf{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new It(st.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new It(st.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}bA("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Sm((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new It(st.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new It(st.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new It(st.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,r){return n.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class zu{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uf({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new It(st.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new It(st.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uf(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new WS;switch(n.type){case"firstParty":return new $S(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new It(st.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=lf.get(e);n&&(bt("ComponentProvider","Removing Datastore"),lf.delete(e),n.terminate())}(this),Promise.resolve()}}function RA(i,t,e,n={}){var r;const s=(i=$n(i,zu))._getSettings(),o=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ts("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),n.mockUserToken){let a,c;if(typeof n.mockUserToken=="string")a=n.mockUserToken,c=nn.MOCK_USER;else{a=Ax(n.mockUserToken,(r=i._app)===null||r===void 0?void 0:r.options.projectId);const u=n.mockUserToken.sub||n.mockUserToken.user_id;if(!u)throw new It(st.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new nn(u)}i._authCredentials=new qS(new yp(a,c))}}/**
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
 */class Xa{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Xa(this.firestore,t,this._query)}}class gn{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Js(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new gn(this.firestore,t,this._key)}}class Js extends Xa{constructor(t,e,n){super(t,e,Fa(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new gn(this.firestore,null,new Nt(t))}withConverter(t){return new Js(this.firestore,t,this._path)}}function CA(i,t,...e){if(i=Oi(i),arguments.length===1&&(t=Ep.newId()),wA("doc","path",t),i instanceof zu){const n=Ce.fromString(t,...e);return cf(n),new gn(i,null,new Nt(n))}{if(!(i instanceof gn||i instanceof Js))throw new It(st.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=i._path.child(Ce.fromString(t,...e));return cf(n),new gn(i.firestore,i instanceof Js?i.converter:null,new Nt(n))}}/**
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
 */class hf{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new em(this,"async_queue_retry"),this.Vu=()=>{const n=kl();n&&bt("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=t;const e=kl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=kl();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new Li;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!so(t))throw t;bt("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(n=>{this.Eu=n,this.du=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(n);throw fi("INTERNAL UNHANDLED ERROR: ",r),n}).then(n=>(this.du=!1,n))));return this.mu=e,e}enqueueAfterDelay(t,e,n){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const r=Ou.createAndSchedule(this,t,e,n,s=>this.yu(s));return this.Tu.push(r),r}fu(){this.Eu&&kt()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function df(i){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of n)if(s in r&&typeof r[s]=="function")return!0;return!1}(i,["next","error","complete"])}class os extends zu{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new hf,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new hf(t),this._firestoreClient=void 0,await t}}}function IA(i,t){const e=typeof i=="object"?i:NS(),n=typeof i=="string"?i:"(default)",r=IS(e,"firestore").getImmediate({identifier:n});if(!r._initialized){const s=Tx("firestore");s&&RA(r,...s)}return r}function Hu(i){if(i._terminated)throw new It(st.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||PA(i),i._firestoreClient}function PA(i){var t,e,n;const r=i._freezeSettings(),s=function(a,c,u,h){return new aT(a,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Sm(h.experimentalLongPollingOptions),h.useFetchStreams)}(i._databaseId,((t=i._app)===null||t===void 0?void 0:t.options.appId)||"",i._persistenceKey,r);i._componentsProvider||!((e=r.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=r.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(i._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),i._firestoreClient=new SA(i._authCredentials,i._appCheckCredentials,i._queue,s,i._componentsProvider&&function(a){const c=a?._online.build();return{_offline:a?._offline.build(c),_online:c}}(i._componentsProvider))}/**
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
 */class as{constructor(t){this._byteString=t}static fromBase64String(t){try{return new as(Ke.fromBase64String(t))}catch(e){throw new It(st.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new as(Ke.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class ja{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new It(st.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new je(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Gu{constructor(t){this._methodName=t}}/**
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
 */class Wu{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new It(st.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new It(st.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return he(this._lat,t._lat)||he(this._long,t._long)}}/**
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
 */class qu{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,r){if(n.length!==r.length)return!1;for(let s=0;s<n.length;++s)if(n[s]!==r[s])return!1;return!0}(this._values,t._values)}}/**
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
 */const DA=/^__.*__$/;class LA{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new Hi(t,this.data,this.fieldMask,e,this.fieldTransforms):new oo(t,this.data,e,this.fieldTransforms)}}class Tm{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Hi(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Mm(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw kt()}}class Xu{constructor(t,e,n,r,s,o){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Xu(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),r=this.Fu({path:n,xu:!1});return r.Ou(t),r}Nu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),r=this.Fu({path:n,xu:!1});return r.vu(),r}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return wa(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(Mm(this.Cu)&&DA.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class NA{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Ga(t)}Qu(t,e,n,r=!1){return new Xu({Cu:t,methodName:e,qu:n,path:je.emptyPath(),xu:!1,ku:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Am(i){const t=i._freezeSettings(),e=Ga(i._databaseId);return new NA(i._databaseId,!!t.ignoreUndefinedProperties,e)}function UA(i,t,e,n,r,s={}){const o=i.Qu(s.merge||s.mergeFields?2:0,t,e,r);ju("Data must be an object, but it was:",o,n);const a=wm(n,o);let c,u;if(s.merge)c=new xn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const p=tu(t,f,e);if(!o.contains(p))throw new It(st.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);Rm(h,p)||h.push(p)}c=new xn(h),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new LA(new fn(a),c,u)}class uo extends Gu{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof uo}}function OA(i,t,e,n){const r=i.Qu(1,t,e);ju("Data must be an object, but it was:",r,n);const s=[],o=fn.empty();dr(n,(c,u)=>{const h=$u(t,c,e);u=Oi(u);const f=r.Nu(h);if(u instanceof uo)s.push(h);else{const p=$a(u,f);p!=null&&(s.push(h),o.set(h,p))}});const a=new xn(s);return new Tm(o,a,r.fieldTransforms)}function FA(i,t,e,n,r,s){const o=i.Qu(1,t,e),a=[tu(t,n,e)],c=[r];if(s.length%2!=0)throw new It(st.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(tu(t,s[p])),c.push(s[p+1]);const u=[],h=fn.empty();for(let p=a.length-1;p>=0;--p)if(!Rm(u,a[p])){const v=a[p];let x=c[p];x=Oi(x);const A=o.Nu(v);if(x instanceof uo)u.push(v);else{const g=$a(x,A);g!=null&&(u.push(v),h.set(v,g))}}const f=new xn(u);return new Tm(h,f,o.fieldTransforms)}function $a(i,t){if(bm(i=Oi(i)))return ju("Unsupported field value:",t,i),wm(i,t);if(i instanceof Gu)return function(n,r){if(!Mm(r.Cu))throw r.Bu(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Bu(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(i,t),null;if(i===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),i instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(n,r){const s=[];let o=0;for(const a of n){let c=$a(a,r.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(i,t)}return function(n,r){if((n=Oi(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return IT(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Ve.fromDate(n);return{timestampValue:Ta(r.serializer,s)}}if(n instanceof Ve){const s=new Ve(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ta(r.serializer,s)}}if(n instanceof Wu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof as)return{bytesValue:Xp(r.serializer,n._byteString)};if(n instanceof gn){const s=r.databaseId,o=n.firestore._databaseId;if(!o.isEqual(s))throw r.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ru(n.firestore._databaseId||r.databaseId,n._key.path)}}if(n instanceof qu)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.Bu("VectorValues must only contain numeric values.");return Au(a.serializer,c)})}}}}}}(n,r);throw r.Bu(`Unsupported field value: ${ku(n)}`)}(i,t)}function wm(i,t){const e={};return xp(i)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):dr(i,(n,r)=>{const s=$a(r,t.Mu(n));s!=null&&(e[n]=s)}),{mapValue:{fields:e}}}function bm(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Ve||i instanceof Wu||i instanceof as||i instanceof gn||i instanceof Gu||i instanceof qu)}function ju(i,t,e){if(!bm(e)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(e)){const n=ku(e);throw n==="an object"?t.Bu(i+" a custom object"):t.Bu(i+" "+n)}}function tu(i,t,e){if((t=Oi(t))instanceof ja)return t._internalPath;if(typeof t=="string")return $u(i,t);throw wa("Field path arguments must be of type string or ",i,!1,void 0,e)}const VA=new RegExp("[~\\*/\\[\\]]");function $u(i,t,e){if(t.search(VA)>=0)throw wa(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,e);try{return new ja(...t.split("."))._internalPath}catch{throw wa(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,e)}}function wa(i,t,e,n,r){const s=n&&!n.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${n}`),o&&(c+=` in document ${r}`),c+=")"),new It(st.INVALID_ARGUMENT,a+i+c)}function Rm(i,t){return i.some(e=>e.isEqual(t))}/**
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
 */class Cm{constructor(t,e,n,r,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new gn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new BA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Im("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class BA extends Cm{data(){return super.data()}}function Im(i,t){return typeof t=="string"?$u(i,t):t instanceof ja?t._internalPath:t._delegate._internalPath}/**
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
 */function kA(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new It(st.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zA{convertValue(t,e="none"){switch(hr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return De(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ur(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw kt()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return dr(t,(r,s)=>{n[r]=this.convertValue(s,e)}),n}convertVectorValue(t){var e,n,r;const s=(r=(n=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||n===void 0?void 0:n.values)===null||r===void 0?void 0:r.map(o=>De(o.doubleValue));return new qu(s)}convertGeoPoint(t){return new Wu(De(t.latitude),De(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=xu(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(js(t));default:return null}}convertTimestamp(t){const e=Vi(t);return new Ve(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Ce.fromString(t);pe(Jp(n));const r=new $s(n.get(1),n.get(3)),s=new Nt(n.popFirst(5));return r.isEqual(e)||fi(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
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
 */function HA(i,t,e){let n;return n=i?e&&(e.merge||e.mergeFields)?i.toFirestore(t,e):i.toFirestore(t):t,n}/**
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
 */class Fs{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Pm extends Cm{constructor(t,e,n,r,s,o){super(t,e,n,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ca(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Im("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class ca extends Pm{data(t={}){return super.data(t)}}class GA{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Fs(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new ca(this._firestore,this._userDataWriter,n.key,n,new Fs(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new It(st.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const c=new ca(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Fs(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new ca(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Fs(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:WA(a.type),doc:c,oldIndex:u,newIndex:h}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function WA(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return kt()}}/**
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
 */function Ka(i){i=$n(i,gn);const t=$n(i.firestore,os);return AA(Hu(t),i._key).then(e=>Um(t,i,e))}class Dm extends zA{constructor(t){super(),this.firestore=t}convertBytes(t){return new as(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new gn(this.firestore,null,e)}}function Lm(i,t,e){i=$n(i,gn);const n=$n(i.firestore,os),r=HA(i.converter,t,e);return Nm(n,[UA(Am(n),"setDoc",i._key,r,i.converter!==null,e).toMutation(i._key,Xn.none())])}function ba(i,t,e,...n){i=$n(i,gn);const r=$n(i.firestore,os),s=Am(r);let o;return o=typeof(t=Oi(t))=="string"||t instanceof ja?FA(s,"updateDoc",i._key,t,e,n):OA(s,"updateDoc",i._key,t),Nm(r,[o.toMutation(i._key,Xn.exists(!0))])}function qA(i,...t){var e,n,r;i=Oi(i);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof t[o]!="object"||df(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(df(t[o])){const f=t[o];t[o]=(e=f.next)===null||e===void 0?void 0:e.bind(f),t[o+1]=(n=f.error)===null||n===void 0?void 0:n.bind(f),t[o+2]=(r=f.complete)===null||r===void 0?void 0:r.bind(f)}let c,u,h;if(i instanceof gn)u=$n(i.firestore,os),h=Fa(i._key.path),c={next:f=>{t[o]&&t[o](Um(u,i,f))},error:t[o+1],complete:t[o+2]};else{const f=$n(i,Xa);u=$n(f.firestore,os),h=f._query;const p=new Dm(u);c={next:v=>{t[o]&&t[o](new GA(u,p,f,v))},error:t[o+1],complete:t[o+2]},kA(i._query)}return function(p,v,x,A){const g=new Em(A),_=new hm(v,g,x);return p.asyncQueue.enqueueAndForget(async()=>cm(await Zc(p),_)),()=>{g.Za(),p.asyncQueue.enqueueAndForget(async()=>um(await Zc(p),_))}}(Hu(u),h,a,c)}function Nm(i,t){return function(n,r){const s=new Li;return n.asyncQueue.enqueueAndForget(async()=>pA(await MA(n),r,s)),s.promise}(Hu(i),t)}function Um(i,t,e){const n=e.docs.get(t._key),r=new Dm(i);return new Pm(i,r,t._key,n,new Fs(e.hasPendingWrites,e.fromCache),t.converter)}/**
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
 */function ff(){return new uo("deleteField")}(function(t,e=!0){(function(r){ds=r})(LS),_a(new Ws("firestore",(n,{instanceIdentifier:r,options:s})=>{const o=n.getProvider("app").getImmediate(),a=new os(new XS(n.getProvider("auth-internal")),new YS(n.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new It(st.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $s(u.options.projectId,h)}(o,r),o);return s=Object.assign({useFetchStreams:e},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Wr(Id,"4.7.3",t),Wr(Id,"4.7.3","esm2017")})();var XA="firebase",jA="10.14.1";/**
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
 */Wr(XA,jA,"app");const $A={apiKey:"AIzaSyAdLxpkzBjjdzZ29HGDEvhPGXn8DBmpLa8",authDomain:"games-rooms.firebaseapp.com",projectId:"games-rooms",storageBucket:"games-rooms.firebasestorage.app",messagingSenderId:"1023357290194",appId:"1:1023357290194:web:f9f0bd056690a31af20f0b"},KA=up($A),YA=IA(KA),Om=["red","blue","green","yellow","purple","orange","pink","cyan"],wi={red:"#e74c3c",blue:"#3498db",green:"#2ecc71",yellow:"#f1c40f",purple:"#9b59b6",orange:"#e67e22",pink:"#e91e8c",cyan:"#1abc9c"},Fn=i=>CA(YA,"ludoex","rooms","list",i);function pf(){return Math.random().toString(36).substring(2,8).toUpperCase()}function Fm(){return Math.random().toString(36).substring(2,12)}async function QA(i,t){let e=pf();for(let a=0;a<5&&(await Ka(Fn(e))).exists();a++)e=pf();const n=Fm(),r={id:n,name:i,color:Om[0],isHost:!0,connected:!0},o={code:e,hostId:n,status:"waiting",mode:t,boardType:"standard",players:{[n]:r},createdAt:Date.now()};return await Lm(Fn(e),o),{room:o,playerId:n}}async function JA(i,t){const e=await Ka(Fn(i));if(!e.exists())throw new Error("Room not found");const n=e.data();if(n.status!=="waiting")throw new Error("Game already started");if(Object.keys(n.players).length>=8)throw new Error("Room is full");const s=Object.values(n.players).map(u=>u.color),o=Om.find(u=>!s.includes(u)),a=Fm(),c={id:a,name:t,color:o,isHost:!1,connected:!0};return await ba(Fn(i),{[`players.${a}`]:c}),{room:{...n,players:{...n.players,[a]:c}},playerId:a}}async function Vm(i,t){const e=await Ka(Fn(i));if(!e.exists())return;const n=e.data();if(n.hostId===t){const r=Object.values(n.players).filter(o=>o.id!==t);if(r.length===0){await Lm(Fn(i),{status:"finished"},{merge:!0});return}const s=r[0];await ba(Fn(i),{hostId:s.id,[`players.${s.id}.isHost`]:!0,[`players.${t}`]:ff()})}else await ba(Fn(i),{[`players.${t}`]:ff()})}async function ZA(i,t){const e=await Ka(Fn(i));if(!e.exists())throw new Error("Room not found");const n=e.data();if(n.hostId!==t)throw new Error("Only host can start");const r=Object.keys(n.players).length;if(r<2)throw new Error("Need at least 2 players");const s=r<=4?"standard":"octagonal";await ba(Fn(i),{status:"playing",boardType:s})}function tw(i,t){return qA(Fn(i),e=>{t(e.exists()?e.data():null)})}let ai=null,Ra=null,Ca=null;function ho(i){document.getElementById("ui-overlay").innerHTML=ew(),nw(i)}function ew(){return`
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
  `}function nw(i){document.getElementById("btn-create").addEventListener("click",()=>iw(i)),document.getElementById("btn-join").addEventListener("click",()=>rw(i))}function iw(i){document.getElementById("ui-overlay").innerHTML=`
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
  `;let t="classic";document.querySelectorAll(".mode-btn").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".mode-btn").forEach(n=>n.classList.remove("active")),e.classList.add("active"),t=e.dataset.mode})}),document.getElementById("btn-back").addEventListener("click",()=>ho(i)),document.getElementById("btn-confirm").addEventListener("click",async()=>{const e=document.getElementById("input-name").value.trim();if(!e)return Xr("Enter a name");try{Ia(!0);const{room:n,playerId:r}=await QA(e,t);Ra=n.code,Ca=r,Bm(n,r,i)}catch(n){Xr(n.message),Ia(!1)}}),document.getElementById("input-name").focus()}function rw(i){document.getElementById("ui-overlay").innerHTML=`
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
  `,document.getElementById("input-code").addEventListener("input",t=>{const e=t.target;e.value=e.value.toUpperCase()}),document.getElementById("btn-back").addEventListener("click",()=>ho(i)),document.getElementById("btn-confirm").addEventListener("click",async()=>{const t=document.getElementById("input-name").value.trim(),e=document.getElementById("input-code").value.trim();if(!t)return Xr("Enter a name");if(e.length!==6)return Xr("Code must be 6 characters");try{Ia(!0);const{room:n,playerId:r}=await JA(e,t);Ra=n.code,Ca=r,Bm(n,r,i)}catch(n){Xr(n.message),Ia(!1)}}),document.getElementById("input-name").focus()}function Bm(i,t,e){mf(i,t,e),ai&&ai(),ai=tw(i.code,n=>{if(!n)return ho(e);if(n.status==="playing"){ai&&(ai(),ai=null),e.onGameStart(n,t);return}mf(n,t,e)}),window.addEventListener("beforeunload",km)}function mf(i,t,e){const n=Object.values(i.players),r=i.hostId===t,s=r&&n.length>=2;document.getElementById("ui-overlay").innerHTML=`
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
              <div class="player-color-dot" style="background:${wi[o.color]}"></div>
              <span class="player-name">${sw(o.name)}</span>
              ${o.isHost?'<span class="host-badge">HOST</span>':""}
              ${o.id===t?'<span class="you-badge">YOU</span>':""}
            </div>
          `).join("")}
          ${Array.from({length:8-n.length},(o,a)=>`
            <div class="player-slot player-slot-empty">
              <div class="player-color-dot empty"></div>
              <span class="player-name-empty">Waiting${a===0&&n.length<8?"...":""}</span>
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
  `,document.getElementById("btn-leave")?.addEventListener("click",async()=>{ai&&(ai(),ai=null),window.removeEventListener("beforeunload",km),await Vm(i.code,t),ho(e)}),r&&document.getElementById("btn-start")?.addEventListener("click",async()=>{try{await ZA(i.code,t)}catch(o){Xr(o.message)}})}function km(){Ra&&Ca&&Vm(Ra,Ca)}function Xr(i){const t=document.getElementById("form-error");t&&(t.textContent=i,t.classList.remove("hidden"))}function Ia(i){const t=document.getElementById("btn-confirm");t&&(t.disabled=i)}function sw(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}class ow{constructor(t){In(this,"renderer");In(this,"scene");In(this,"camera");In(this,"theta",0);In(this,"height",16);In(this,"radius",5);In(this,"isDragging",!1);In(this,"prevX",0);In(this,"animId",0);In(this,"onResize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))});this.renderer=new ax({canvas:t,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Sf,this.renderer.toneMapping=Mf,this.renderer.toneMappingExposure=1.1,this.scene=new lx,this.scene.background=new Zt(657935),this.scene.fog=new fu(657935,.018),this.camera=new An(50,window.innerWidth/window.innerHeight,.1,120),this.updateCamera(),this.setupLights(),this.setupControls(t),window.addEventListener("resize",this.onResize)}setupLights(){this.scene.add(new hx(16777215,.35));const t=new Ll(16774624,1.6);t.position.set(5,14,6),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),t.shadow.camera.near=.1,t.shadow.camera.far=60,t.shadow.camera.left=t.shadow.camera.bottom=-18,t.shadow.camera.right=t.shadow.camera.top=18,this.scene.add(t);const e=new Ll(10536191,.5);e.position.set(-5,8,-4),this.scene.add(e);const n=new Ll(16766629,.3);n.position.set(0,-4,-10),this.scene.add(n)}setupControls(t){t.addEventListener("mousedown",e=>{e.button===0&&(this.isDragging=!0,this.prevX=e.clientX)}),t.addEventListener("mousemove",e=>{this.isDragging&&(this.theta+=(e.clientX-this.prevX)*.006,this.prevX=e.clientX,this.updateCamera())}),t.addEventListener("mouseup",()=>this.isDragging=!1),t.addEventListener("mouseleave",()=>this.isDragging=!1),t.addEventListener("touchstart",e=>{this.isDragging=!0,this.prevX=e.touches[0].clientX},{passive:!0}),t.addEventListener("touchmove",e=>{this.isDragging&&(this.theta+=(e.touches[0].clientX-this.prevX)*.006,this.prevX=e.touches[0].clientX,this.updateCamera())},{passive:!0}),t.addEventListener("touchend",()=>this.isDragging=!1),t.addEventListener("wheel",e=>{this.height=Math.max(8,Math.min(28,this.height+e.deltaY*.02)),this.updateCamera()},{passive:!0})}updateCamera(){this.camera.position.set(this.radius*Math.sin(this.theta),this.height,this.radius*Math.cos(this.theta)),this.camera.lookAt(0,0,0)}start(t){const e=()=>{t(),this.renderer.render(this.scene,this.camera),this.animId=requestAnimationFrame(e)};e()}stop(){cancelAnimationFrame(this.animId)}dispose(){this.stop(),window.removeEventListener("resize",this.onResize)}}const aw=[[1,6],[2,6],[3,6],[4,6],[5,6],[6,5],[6,4],[6,3],[6,2],[6,1],[6,0],[7,0],[8,0],[8,1],[8,2],[8,3],[8,4],[8,5],[9,6],[10,6],[11,6],[12,6],[13,6],[14,6],[14,7],[14,8],[13,8],[12,8],[11,8],[10,8],[9,8],[8,9],[8,10],[8,11],[8,12],[8,13],[8,14],[7,14],[6,14],[6,13],[6,12],[6,11],[6,10],[6,9],[5,8],[4,8],[3,8],[2,8],[1,8],[0,8],[0,7],[0,6]],lw={red:[[1,7],[2,7],[3,7],[4,7],[5,7]],blue:[[7,1],[7,2],[7,3],[7,4],[7,5]],yellow:[[13,7],[12,7],[11,7],[10,7],[9,7]],green:[[7,13],[7,12],[7,11],[7,10],[7,9]]},cw=[7,7],zm={red:[[1,1],[2,1],[1,2],[2,2]],blue:[[12,1],[13,1],[12,2],[13,2]],yellow:[[12,12],[13,12],[12,13],[13,13]],green:[[1,12],[2,12],[1,13],[2,13]]},uw=new Set([0,4,13,17,26,30,39,43]),hw=new Set([7,20,33,46]),dw=new Set([2,15,28,41]),gf=7,Ri=9;function fw(){const i=[];for(let t=0;t<8;t++){const e=t/8*Math.PI*2-Math.PI/2,n=(t+1)/8*Math.PI*2-Math.PI/2,r=Ri*Math.cos(e),s=Ri*Math.sin(e),o=Ri*Math.cos(n),a=Ri*Math.sin(n);for(let c=0;c<gf;c++){const u=(c+.5)/gf;i.push([r+(o-r)*u,s+(a-s)*u])}}return i}function pw(i,t=5){const e=(i+.5)/8*Math.PI*2-Math.PI/2,n=Ri*Math.cos(e),r=Ri*Math.sin(e),s=Math.sqrt(n*n+r*r),o=-n/s,a=-r/s;return Array.from({length:t},(c,u)=>[n+o*(u+1),r+a*(u+1)])}function Hm(i){const t=(i+.5)/8*Math.PI*2-Math.PI/2,e=Ri*Math.cos(t),n=Ri*Math.sin(t),r=Math.sqrt(e*e+n*n),s=e/r,o=n/r,a=-o,c=s,u=e+s*2.2,h=n+o*2.2;return[[u+a*.6,h+c*.6],[u-a*.6,h-c*.6],[u+s*.9+a*.6,h+o*.9+c*.6],[u+s*.9-a*.6,h+o*.9-c*.6]]}const mw=new Set([0,7,14,21,28,35,42,49,4,11,18,25,32,39,46,53]),gw=new Set([3,10,17,24,31,38,45,52]),_w=new Set([6,13,20,27,34,41,48,55]),_f=["red","blue","yellow","green"],Gm=["red","blue","green","yellow","purple","orange","pink","cyan"],vf=.92,ls=.09,Mn=7,Ur=new zi(vf,ls,vf),Hl=new zi(.9,ls,.9),Wm=new Zr(.32,.32,ls+.01,24);function kn(i,t={}){return new ra({color:i,...t})}const ye={track:kn(15789280),safe:kn(16771210,{roughness:.4}),star:kn(8308963,{roughness:.3,metalness:.2}),skull:kn(13073919,{roughness:.3,metalness:.1}),center:kn(16766720,{roughness:.2,metalness:.5}),board:kn(1973806),inactive:kn(2500154,{roughness:.9}),homeArea:i=>kn(new Zt(i).multiplyScalar(.5),{roughness:.8}),homeCol:i=>kn(new Zt(i).multiplyScalar(.68),{roughness:.6}),base:i=>kn(new Zt(i).multiplyScalar(.42),{roughness:.7})};function Gn(i,t,e,n,r={}){const s=new sn(i,t);return s.position.set(e,ls/2,n),s.receiveShadow=!0,Object.assign(s.userData,r),s}const vw={red:[0,0,5,5],blue:[9,0,14,5],yellow:[9,9,14,14],green:[0,9,5,14]},yw=[["red",6,6],["blue",8,6],["green",6,8],["yellow",8,8]],Ew=[["red",6,7],["blue",7,6],["yellow",8,7],["green",7,8]],xw={red:0,blue:13,yellow:26,green:39};function Sw(i,t,e){const n=new rr,r=new Set(t.slice(0,4));n.add(Object.assign(new sn(new zi(15.4,.06,15.4),ye.board),{position:new W(0,-.04,0)}));for(const a of _f){const c=wi[a],u=r.has(a),[h,f,p,v]=vw[a];for(let x=h;x<=p;x++)for(let A=f;A<=v;A++){const g=u&&zm[a].some(([_,D])=>_===x&&D===A);n.add(Gn(g?Wm:Ur,g?ye.base(c):u?ye.homeArea(c):ye.inactive,x-Mn,A-Mn,{type:"home-area",color:a,active:u}))}}aw.forEach(([a,c],u)=>{let h;if(uw.has(u)){const f=Object.entries(xw).find(([,p])=>p===u);h=f&&r.has(f[0])?ye.homeArea(wi[f[0]]):ye.safe}else e==="remix"&&hw.has(u)?h=ye.star:e==="remix"&&dw.has(u)?h=ye.skull:h=ye.track;n.add(Gn(Ur,h,a-Mn,c-Mn,{type:"path",pathIndex:u}))});for(const a of _f){const c=wi[a],u=r.has(a);lw[a].forEach(([h,f],p)=>{n.add(Gn(Ur,u?ye.homeCol(c):ye.track,h-Mn,f-Mn,{type:"home-col",color:a,homeColIndex:p}))})}for(const[a,c,u]of yw){const h=r.has(a);n.add(Gn(Ur,h?ye.homeArea(wi[a]):ye.track,c-Mn,u-Mn,{type:"junction",color:a}))}for(const[a,c,u]of Ew){const h=r.has(a);n.add(Gn(Ur,h?ye.homeCol(wi[a]):ye.track,c-Mn,u-Mn,{type:"home-col",color:a,homeColIndex:5}))}const[s,o]=cw;return n.add(Gn(Ur,ye.center,s-Mn,o-Mn,{type:"center"})),i.add(n),n}function Tw(i=9){return Array.from({length:8},(t,e)=>{const n=e/8*Math.PI*2-Math.PI/2;return[i*Math.cos(n),i*Math.sin(n)]})}function Mw(i,t,e){const n=new rr,r=new Set(t.slice(0,8)),s=fw(),o=new sn(new Zr(13,13,.06,8),ye.board);o.position.y=-.04,n.add(o),s.forEach(([c,u],h)=>{let f;mw.has(h)?f=ye.safe:e==="remix"&&gw.has(h)?f=ye.star:e==="remix"&&_w.has(h)?f=ye.skull:f=ye.track,n.add(Gn(Hl,f,c,u,{type:"path",pathIndex:h}))});for(const[c,u]of Tw())n.add(Gn(Hl,ye.track,c,u,{type:"corner"}));Gm.forEach((c,u)=>{const h=r.has(c),f=wi[c];pw(u,8).forEach(([p,v],x)=>{n.add(Gn(Hl,h?ye.homeCol(f):ye.track,p,v,{type:"home-col",color:c,homeColIndex:x,active:h}))}),h&&Hm(u).forEach(([p,v])=>{n.add(Gn(Wm,ye.base(f),p,v,{type:"home-area",color:c}))})});const a=new sn(new Zr(1.8,1.8,ls,8),ye.center);return a.position.y=ls/2,a.userData={type:"center"},n.add(a),i.add(n),n}let Yo=null;function Aw(i){if(Yo&&Yo!==i){const t=Yo.material;t.emissive.set(0),t.emissiveIntensity=0}if(i){const t=i.material;t.emissive.set(16777215),t.emissiveIntensity=.18}Yo=i}const yf=7,ww=new Zr(.18,.22,.38,20),bw=new pu(.16,16,12),Rw=new mu(.18,.03,8,20);function Cw(i){const t=wi[i],e=new Zt(t),n=e.clone().multiplyScalar(.5),r=new ra({color:e,metalness:.4,roughness:.3}),s=new ra({color:n,metalness:.5,roughness:.2}),o=new ra({color:16766720,metalness:.8,roughness:.2}),a=new rr,c=new sn(ww,r);c.position.y=.19,c.castShadow=!0,a.add(c);const u=new sn(bw,s);u.position.y=.48,u.castShadow=!0,a.add(u);const h=new sn(Rw,o);return h.position.y=.28,h.rotation.x=Math.PI/2,a.add(h),a}function Iw(i,t,e){const n=[];return t.forEach(r=>{(e==="standard"?zm[r]??[]:Hm(Gm.indexOf(r))).forEach((o,a)=>{const[c,u]=e==="standard"?[o[0]-yf,o[1]-yf]:o,h=Cw(r);h.position.set(c,0,u),h.userData={color:r,pieceIndex:a,state:"base",pathIndex:-1,homeColIndex:-1},i.add(h),n.push({group:h,color:r,pieceIndex:a})})}),n}const Pw=1.2,Dw=3.5,Gl=[];function Lw(i){for(let t=Gl.length-1;t>=0;t--){const e=Gl[t],n=e.piece.group.position,r=n.distanceTo(e.target);if(r<.02){n.copy(e.target),e.onDone?.(),Gl.splice(t,1);continue}const s=1-r/n.distanceTo(e.target.clone().addScalar(.001)),o=Math.sin(Math.min(s*Math.PI,Math.PI))*Pw;n.lerp(e.target,Math.min(Dw*i/r,1)),n.y=o}}const qm=document.getElementById("game-canvas"),kr=new ow(qm),Nw=new dx,Ef=new fx,Wl=new de;let Hs=null;function Uw(i){if(!Hs)return;Wl.x=i.clientX/window.innerWidth*2-1,Wl.y=-(i.clientY/window.innerHeight)*2+1,Ef.setFromCamera(Wl,kr.camera);const t=Ef.intersectObject(Hs,!0);Aw(t.length>0?t[0].object:null)}qm.addEventListener("mousemove",Uw);function Ow(i,t){const e=document.getElementById("ui-overlay");e.style.pointerEvents="none",e.innerHTML=Fw(i);const n=Object.values(i.players).map(r=>r.color);Hs&&kr.scene.remove(Hs),Hs=i.boardType==="standard"?Sw(kr.scene,n,i.mode):Mw(kr.scene,n,i.mode),Iw(kr.scene,n,i.boardType)}function Fw(i){const t=Object.values(i.players);return`
    <div id="hud">
      <div id="hud-info">
        <span class="hud-code">${i.code}</span>
        <span class="hud-mode mode-${i.mode}">${i.mode}</span>
      </div>
      <div id="hud-players">
        ${t.map(e=>`
          <div class="hud-player">
            <div class="hud-dot" style="background:${Bw(e.color)}"></div>
            <span>${Vw(e.name)}</span>
          </div>
        `).join("")}
      </div>
      <div id="hud-hint">Game logic coming in Phase 4</div>
    </div>
  `}kr.start(()=>{const i=Nw.getDelta();Lw(i)});ho({onGameStart:Ow});function Vw(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Bw(i){return{red:"#e74c3c",blue:"#3498db",green:"#2ecc71",yellow:"#f1c40f",purple:"#9b59b6",orange:"#e67e22",pink:"#e91e8c",cyan:"#1abc9c"}[i]??"#fff"}
