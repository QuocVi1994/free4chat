(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{329:function(t,e,n){"use strict";n(14),n(10),n(6),n(4),n(9);var r=n(2),o=(n(31),n(32),n(15)),c=n(24),l=n(17),d=n(19),h=n(20),f=n(11),m=n(0),v=n(26),y=n(45),k=n(146);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var O=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},x=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(c.a)(e,[{key:"resetAppbar",value:function(){this.setAppbar({title:"",style:"",show:!0,back:!0,home:!1,dark:!0,color:"#111"})}},{key:"setLang",value:function(){var t="en",e=navigator.language;e.includes("zh")?t=e.includes("zh-TW")||e.includes("zh-HK")?"zhTW":"zh":e.includes("es")?t="es":e.includes("ja")?t="ja":e.includes("de")&&(t="de"),this.$i18n.locale=t,document.title=this.title}},{key:"setPage",value:function(){this.setAppbar(function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({title:this.title},this.appbar)),setTimeout((function(){Object(k.b)()}),50)}},{key:"beforeDestroy",value:function(){this.resetAppbar()}},{key:"title",get:function(){return""}},{key:"description",get:function(){return""}},{key:"appbar",get:function(){return{}}}]),e}(m.a);O([Object(y.a)("app/SET_APPBAR")],x.prototype,"setAppbar",void 0),x=O([Object(v.a)({head:function(){return{title:this.title,meta:[{hid:"theme-color",name:"theme-color",content:"#040C11"}]}},beforeRouteEnter:function(t,e,n){n((function(t){t.setLang(),t.setPage()}))}})],x),e.a=x},332:function(t,e,n){var content=n(362);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("62dca228",content,!0,{sourceMap:!1})},333:function(t,e,n){var content=n(364);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("735f0d11",content,!0,{sourceMap:!1})},361:function(t,e,n){"use strict";var r=n(332);n.n(r).a},362:function(t,e,n){(e=n(12)(!1)).push([t.i,".user-card[data-v-22a8cfb5]{border-radius:20px;width:100%;background:rgba(0,0,0,.3);box-shadow:0 0 20px rgba(0,0,0,.3);position:relative;overflow:hidden}.user-card .top[data-v-22a8cfb5]{justify-content:space-between;position:absolute;top:0;left:0;right:0}.user-card .top .nickname[data-v-22a8cfb5]{word-break:break-all}.user-card .canvas-wrapper[data-v-22a8cfb5]{height:100px}.user-card .canvas-wrapper .canvas[data-v-22a8cfb5]{width:100%;height:100%;border-radius:20px}",""]),t.exports=e},363:function(t,e,n){"use strict";var r=n(333);n.n(r).a},364:function(t,e,n){(e=n(12)(!1)).push([t.i,".mute-all-btn[data-v-a0e82bc6]{bottom:0;position:absolute;margin:0 16px 68px 0;box-shadow:0 0 20px hsla(0,0%,100%,.08)}.cards[data-v-a0e82bc6]{display:flex;flex-direction:row;flex-wrap:wrap}.hint-box[data-v-a0e82bc6]{color:hsla(0,0%,100%,.7);border-radius:20px;background:linear-gradient(-15deg,hsla(0,0%,100%,.12),hsla(0,0%,100%,.1))}.hint-box.empty-hint[data-v-a0e82bc6]{background:linear-gradient(-15deg,#90f,#0057fa)!important}.hint-box.error-hint[data-v-a0e82bc6]{background:linear-gradient(-15deg,#ec5700,#be1d00)!important}",""]),t.exports=e},368:function(t,e,n){"use strict";n.r(e);n(31),n(32),n(4),n(41);var r=n(15),o=n(24),c=n(17),l=n(19),d=n(20),h=n(11),f=n(26),m=n(45),v=n(334),y=n(329),k=(n(43),n(55),n(16)),_="https://a.rpc.free4.chat",O=n(124),x=(n(42),{_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(input){var t,e,n,r,o,c,l,output="",i=0;for(input=x._utf8_encode(input);i<input.length;)r=(t=input.charCodeAt(i++))>>2,o=(3&t)<<4|(e=input.charCodeAt(i++))>>4,c=(15&e)<<2|(n=input.charCodeAt(i++))>>6,l=63&n,isNaN(e)?c=l=64:isNaN(n)&&(l=64),output=output+this._keyStr.charAt(r)+this._keyStr.charAt(o)+this._keyStr.charAt(c)+this._keyStr.charAt(l);return output},decode:function(input){var t,e,n,r,o,c,output="",i=0;for(input=input.replace(/[^A-Za-z0-9+/=]/g,"");i<input.length;)t=this._keyStr.indexOf(input.charAt(i++))<<2|(r=this._keyStr.indexOf(input.charAt(i++)))>>4,e=(15&r)<<4|(o=this._keyStr.indexOf(input.charAt(i++)))>>2,n=(3&o)<<6|(c=this._keyStr.indexOf(input.charAt(i++))),output+=String.fromCharCode(t),64!==o&&(output+=String.fromCharCode(e)),64!==c&&(output+=String.fromCharCode(n));return output=x._utf8_decode(output)},_utf8_encode:function(t){var e="";t=t.replace(/\r\n/g,"\n");for(var n=0;n<t.length;n++){var r=t.charCodeAt(n);r<128?e+=String.fromCharCode(r):r>127&&r<2048?(e+=String.fromCharCode(r>>6|192),e+=String.fromCharCode(63&r|128)):(e+=String.fromCharCode(r>>12|224),e+=String.fromCharCode(r>>6&63|128),e+=String.fromCharCode(63&r|128))}return e},_utf8_decode:function(t){var e,n,r,o="",i=0;for(e=n=0;i<t.length;)(e=t.charCodeAt(i))<128?(o+=String.fromCharCode(e),i++):e>191&&e<224?(n=t.charCodeAt(i+1),o+=String.fromCharCode((31&e)<<6|63&n),i+=2):(n=t.charCodeAt(i+1),r=t.charCodeAt(i+2),o+=String.fromCharCode((15&e)<<12|(63&n)<<6|63&r),i+=3);return o}}),w=x,C={audio:!0,video:!1},j={iceServers:[],iceTransportPolicy:"relay",bundlePolicy:"max-bundle",rtcpMuxPolicy:"require",sdpSemantics:"unified-plan"},M=new(window.AudioContext||window.webkitAudioContext),P="",S="",A="",R="",D="",N=function(t,e,n,r,o,c){},T=function(t){},E=function(t){},$=function(t){},U=null,F=!1;function I(t,e,n,r,o,c,l){var d=n+":"+w.encode(e);R=encodeURIComponent(t),D=encodeURIComponent(d),S=n,N=r,T=o,$=c,E=l,A=e,F=!0,L()}function V(t,e){return z.apply(this,arguments)}function z(){return(z=Object(k.a)(regeneratorRuntime.mark((function t(e,n){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=_,t.prev=1,t.next=4,fetch(r,{method:"POST",mode:"cors",cache:"no-cache",credentials:"omit",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({id:Object(O.b)(),method:e,params:n})});case 4:return o=t.sent,t.abrupt("return",o.json());case 8:return t.prev=8,t.t0=t.catch(1),console.log("fetch error",e,n,t.t0),t.next=13,V(e,n);case 13:return t.abrupt("return",t.sent);case 14:return t.prev=14,t.finish(14);case 16:case"end":return t.stop()}}),t,null,[[1,8,14,16]])})))).apply(this,arguments)}function W(t){return J.apply(this,arguments)}function J(){return(J=Object(k.a)(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,V("subscribe",[R,D,P]);case 2:if(!(n=t.sent).hasOwnProperty("error")){t.next=7;break}return console.log("try to reconnect",n.error.description),$&&$(n.error).then((function(){F&&(console.log("reconnect in 0.5s"),setTimeout(Object(k.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.close(),t.next=3,L();case 3:case"end":return t.stop()}}),t)}))),500))})),t.abrupt("return");case 7:if(!n.data||"offer"!==n.data.type){t.next=18;break}return console.log("subscribe offer",n.data),t.next=11,e.setRemoteDescription(n.data);case 11:return t.next=13,e.createAnswer();case 13:return r=t.sent,t.next=16,e.setLocalDescription(r);case 16:return t.next=18,V("answer",[R,D,P,JSON.stringify(r)]);case 18:setTimeout((function(){W(e)}),3e3);case 19:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function L(){return B.apply(this,arguments)}function B(){return(B=Object(k.a)(regeneratorRuntime.mark((function t(){var e,n,r,source,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(F){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,V("turn",[S]);case 5:e=t.sent,j.iceServers=e.data,t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(2),console.log("failed to get server",t.t0),t.abrupt("return");case 13:return t.prev=13,document.querySelectorAll(".peer").forEach((function(t){return t.remove()})),(U=new RTCPeerConnection(j)).createDataChannel("chat"),U.onicecandidate=function(t){var e=t.candidate;V("trickle",[R,D,P,JSON.stringify(e)])},U.ontrack=function(t){console.log("ontrack",t);var e=t.streams[0],n=decodeURIComponent(e.id),r=n.split(":")[0],o=n.split(":")[1];try{o=w.decode(o)}catch(t){console.log("failed to decode name",o,t)}if(r!==S){t.track.onmute=function(t){if(T){var e=t.target.id;console.log("onmute",e,t),T(e)}};var c=M.createAnalyser();if(c.fftSize=256,c.minDecibels=-80,c.maxDecibels=-10,c.smoothingTimeConstant=.85,M.createMediaStreamSource(e).connect(c),N){var l=t.track.id;N(U,e,c,l,r,o)}}},t.prev=19,t.next=22,navigator.mediaDevices.getUserMedia(C);case 22:n=t.sent,t.next=30;break;case 25:return t.prev=25,t.t1=t.catch(19),console.error(t.t1),E&&E(t.t1),t.abrupt("return");case 30:return(r=M.createAnalyser()).fftSize=256,r.minDecibels=-80,r.maxDecibels=-10,r.smoothingTimeConstant=.85,source=M.createMediaStreamSource(n),(o=M.createGain()).gain.value=.01,source.connect(r),r.connect(o),o.connect(M.destination),N&&N(U,n,r,"me",S,A),M.resume(),n.getTracks().forEach((function(track){U.addTrack(track,n)})),t.t2=U,t.next=47,U.createOffer();case 47:return t.t3=t.sent,t.next=50,t.t2.setLocalDescription.call(t.t2,t.t3);case 50:return t.next=52,V("publish",[R,D,JSON.stringify(U.localDescription)]);case 52:if(c=t.sent,console.log(c),!c.data||"answer"!==c.data.sdp.type){t.next=59;break}return t.next=57,U.setRemoteDescription(c.data.sdp);case 57:P=c.data.track,W(U);case 59:t.next=64;break;case 61:t.prev=61,t.t4=t.catch(13),E&&E(t.t4);case 64:case"end":return t.stop()}}),t,null,[[2,9],[13,61],[19,25]])})))).apply(this,arguments)}var H={onCopy:function(t){t.$toast({message:t.$t("common.copy_succ_hint"),color:"info"})},onError:function(t){}},K=(n(357),function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c}),G=function(t){function e(){return Object(r.a)(this,e),Object(c.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(o.a)(e,[{key:"mounted",value:function(){var t=this;setTimeout((function(){"me"!==t.user.trackId&&(t.$refs.audio.srcObject=t.user.stream);t.visualize(t.user.uid,t.user.analyser)}),200)}},{key:"editName",value:function(){this.$emit("edit-name",this.user)}},{key:"handleMutable",value:function(){this.user.isMuted?this.$emit("unmute",this.user):this.$emit("mute",this.user)}},{key:"visualize",value:function(t,e){var canvas=this.$refs.canvas;canvas.width=canvas.width*window.devicePixelRatio,canvas.height=canvas.height*window.devicePixelRatio;var n=canvas.getContext("2d"),r=e.frequencyBinCount,o=new Float32Array(r),c=Object(O.a)(t),g=c[0],b=c[1],l=7;!function t(){var c=canvas.width,d=canvas.height;e.getFloatFrequencyData(o),n.fillStyle="rgb(0, 0, 0)",n.fillRect(0,0,c,d);for(var h=c/r*3,f=0,m=0,i=0;i<r;i++){f=2*(o[i]+140);var v=Math.floor(f+64);n.fillStyle=g%3==0?"rgb(".concat(v,",").concat(g,",").concat(b,")"):g%3==1?"rgb(".concat(g,",").concat(v,",").concat(b,")"):"rgb(".concat(g,",").concat(b,",").concat(v,")"),(f=d/l+f/256*d*(l-1)/l)<d/l&&(f=d/l),n.fillRect(m,d-f,h,f),m+=h+2}setTimeout((function(){requestAnimationFrame(t)}),50)}()}}]),e}(f.d);K([Object(f.c)()],G.prototype,"user",void 0),K([Object(f.c)()],G.prototype,"muted",void 0);var Z=G=K([f.a],G),Q=(n(361),n(34)),X=n(47),Y=n.n(X),tt=n(323),et=n(135),component=Object(Q.a)(Z,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.user?n("div",{staticClass:"user-card"},[n("div",{staticClass:"top d-flex py-2 pl-4 pr-2"},[n("div",{staticClass:"nickname font-weight-bold",on:{click:t.editName}},[t._v("\n      "+t._s(t.user.nickname)+"\n    ")]),t._v(" "),n("v-btn",{attrs:{icon:"",small:""},on:{click:t.handleMutable}},[n("v-icon",{attrs:{color:this.user.isMuted?"rgb(242, 72, 34)":"#FFFFFF"}},[t._v("\n        "+t._s(this.user.isMuted?t.$icons.mdiMicrophoneOff:t.$icons.mdiMicrophone)+"\n      ")])],1)],1),t._v(" "),n("div",{staticClass:"canvas-wrapper"},[n("canvas",{ref:"canvas",staticClass:"canvas"})]),t._v(" "),n("audio",{ref:"audio",attrs:{autoplay:""}})]):t._e()}),[],!1,null,"22a8cfb5",null),nt=component.exports;Y()(component,{VBtn:tt.a,VIcon:et.a});var at=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},it={dictionaries:[v.a,v.c],separator:" ",length:2},ot=function(t){function e(){var t;return Object(r.a)(this,e),(t=Object(c.a)(this,Object(l.a)(e).apply(this,arguments))).loading=!1,t.showNameDialog=!1,t.noMicPermission=!1,t.nickname="",t.roomName="",t.uid="",t.participantMap={},t.participantTrackIdMap={},t.participants=[],t.streams={},t.pc=null,t.copyUtil=H,t}return Object(d.a)(e,t),Object(o.a)(e,[{key:"genRandomChannelName",value:function(){var t=Object(v.d)(it);this.nickname=t.slice(0,1).toUpperCase()+t.slice(1)}},{key:"mounted",value:function(){var t=this;setTimeout((function(){t.reload(),t.nickname&&I(t.roomName,t.nickname,t.uid,t.onConnect,t.onDisconnect,t.onResume,t.onError)}),100)}},{key:"reload",value:function(){this.loading=!0;var t=this.$route.params.name;this.chat.rooms.hasOwnProperty(t)?this.nickname=this.chat.rooms[t].nickname:this.showNameDialog=!0,this.uid=this.profile.uid||Object(O.b)(),this.setProfile({uid:this.uid}),this.roomName=t,this.setAppbar({color:"rgba(0, 0, 0, 0.0)",home:!0,back:!1,title:"#".concat(this.roomName)}),this.loading=!1}},{key:"join",value:function(){this.setNickname({room:this.roomName,nickname:this.nickname}),this.showNameDialog=!1,0===this.participants.length?I(this.roomName,this.nickname,this.uid,this.onConnect,this.onDisconnect,this.onResume,this.onError):window.location.reload()}},{key:"onConnect",value:function(t,e,n,r,o,c){this.pc=t,console.log(e,o,c),this.addParticipant(e,n,r,o,c),this.streams[o]=e,this.chat.mutes.hasOwnProperty(o)&&this.muteOrUnmute(o,!0)}},{key:"onDisconnect",value:function(t){var e=this.removeParticipant(t);null!==e&&delete this.streams[e.uid]}},{key:"onError",value:function(t){t&&"NotAllowedError"===t.name?(console.log("no permission"),this.noMicPermission=!0):console.log(t)}},{key:"onResume",value:function(t){var e=this;return new Promise((function(n){console.log("resume from connection",t),e.clearup(),n()}))}},{key:"clearup",value:function(){console.log("clear up"),this.participants.splice(0,this.participants.length),this.participantTrackIdMap={},this.participantMap={},this.streams={}}},{key:"goHome",value:function(){U&&U.close(),F=!1,console.log("stop: "+F),this.clearup()}},{key:"test",value:function(){console.log(this.participantTrackIdMap),console.log(this.participantMap),console.log(this.participants)}},{key:"findParticipant",value:function(t){for(var e=0;e<this.participants.length;e++)if(this.participants[e].uid===t)return{user:this.participants[e],index:e};return null}},{key:"addParticipant",value:function(t,e,n,r,o){var c={stream:t,analyser:e,trackId:n,isMuted:!1,uid:r,nickname:o};this.participantMap.hasOwnProperty(r)||this.participants.push(c),console.log("addParticipant",r,o,n),this.participantMap[r]=c,this.participantTrackIdMap[n]=c}},{key:"removeParticipant",value:function(t){if(!this.participantTrackIdMap.hasOwnProperty(t))return null;var e=this.participantTrackIdMap[t];if(e){var n=this.findParticipant(e.uid);n&&n.user&&(console.log("removeParticipant",e,t),this.participants.splice(n.index,1),delete this.participantMap[e.uid])}return delete this.participantTrackIdMap[t],e}},{key:"editName",value:function(t){t&&this.uid===t.uid&&(this.nickname=t.nickname,this.showNameDialog=!0)}},{key:"muteAll",value:function(){for(var t=this.participants.map((function(t){return t.uid})),e=this.isAllMuted,n=0;n<t.length;n++)this.muteOrUnmute(t[n],!e);e?this.removeMutes(t):this.addMutes(t)}},{key:"muteUser",value:function(t){this.muteOrUnmute(t.uid,!0),this.addMute(t.uid)}},{key:"unmuteUser",value:function(t){this.muteOrUnmute(t.uid,!1),this.removeMute(t.uid)}},{key:"muteOrUnmute",value:function(t,e){if(this.participantMap.hasOwnProperty(t)){console.log("uid=".concat(t,", mute=").concat(e));var n=this.findParticipant(t);n&&n.user&&(n.user.isMuted=e,this.participants.splice(n.index,1,n.user),this.setStream(t,!e))}}},{key:"setStream",value:function(t,e){var n=this.streams[t];n&&n.getTracks().length>0&&(n.getTracks()[0].enabled=e)}},{key:"isAllMuted",get:function(){for(var t=0;t<this.participants.length;t++)if(!this.participants[t].isMuted)return!1;return!0}},{key:"isWeChat",get:function(){return navigator.userAgent.toLowerCase().includes("micromessenger")}},{key:"destination",get:function(){return window.location.href}},{key:"validated",get:function(){return 0!==this.nickname.trim().length}},{key:"cardWidth",get:function(){var t=window.innerWidth;if(t<460){var e=Math.round((t-24-40)/2);return"".concat(e,"px")}return"200px"}},{key:"isEmpty",get:function(){return 1===this.participants.length}},{key:"title",get:function(){return"#".concat(this.roomName)}}]),e}(Object(f.b)(y.a));at([Object(m.b)((function(t){return t.app.profile}))],ot.prototype,"profile",void 0),at([Object(m.b)((function(t){return t.app.chat}))],ot.prototype,"chat",void 0),at([Object(m.a)("app/SET_NICKNAME")],ot.prototype,"setNickname",void 0),at([Object(m.a)("app/SET_PROFILE")],ot.prototype,"setProfile",void 0),at([Object(m.a)("app/SET_APPBAR")],ot.prototype,"setAppbar",void 0),at([Object(m.a)("app/ADD_MUTE")],ot.prototype,"addMute",void 0),at([Object(m.a)("app/REMOVE_MUTE")],ot.prototype,"removeMute",void 0),at([Object(m.a)("app/ADD_MUTES")],ot.prototype,"addMutes",void 0),at([Object(m.a)("app/REMOVE_MUTES")],ot.prototype,"removeMutes",void 0);var ct=ot=at([Object(f.a)({head:function(){return{title:this.title,meta:[{hid:"theme-color",name:"theme-color",content:"#040C11"}]}},components:{UserCard:nt}})],ot),st=(n(363),n(136)),ut=n(121),lt=n(366),pt=n(327),ht=n(370),ft=Object(Q.a)(ct,(function(){var t=this,e=this,n=e.$createElement,r=e._self._c||n;return r("normal-page-layout",{on:{home:e.goHome}},[r("v-container",{staticClass:"room-page"},[r("f-loading",{attrs:{loading:e.loading,fullscreen:!0}}),e._v(" "),[e.isEmpty?r("div",{staticClass:"hint-box empty-hint px-4 py-2 mx-2 mb-4"},[r("h2",{staticClass:"body-1 font-weight-bold"},[e._v(e._s(e.$t("room.empty_block_title")))]),e._v(" "),r("div",{staticClass:"body-2"},[e._v("\n          "+e._s(e.$t("room.empty_block_text"))+"\n        ")]),e._v(" "),r("v-btn",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.destination,expression:"destination",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:function(){return e.copyUtil.onCopy(t)},expression:"() => copyUtil.onCopy(this)",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:function(){return e.copyUtil.onError(t)},expression:"() => copyUtil.onError(this)",arg:"error"}],staticClass:"my-2",attrs:{small:"",outlined:""}},[e._v("\n          "+e._s(e.$t("common.copy_url"))+"\n        ")])],1):r("div",{staticClass:"hint-box caption px-4 py-2 mx-2 mb-4"},[r("v-icon",{attrs:{small:""}},[e._v(e._s(e.$icons.mdiHeadphones))]),e._v("\n        "+e._s(e.$t("room.earhub_block_text"))+"\n      ")],1),e._v(" "),e.noMicPermission?r("div",{staticClass:"hint-box error-hint px-4 py-2 mx-2 mb-4"},[r("h2",{staticClass:"body-1 font-weight-bold"},[e._v(e._s(e.$t("room.error_block_title")))]),e._v(" "),r("div",{staticClass:"body-2"},[e._v("\n          "+e._s(e.$t("room.error_block_text"))+"\n        ")])]):e._e(),e._v(" "),e.isWeChat?r("div",{staticClass:"hint-box error-hint px-4 py-2 mx-2 mb-4"},[r("h2",{staticClass:"body-1 font-weight-bold"},[e._v(e._s(e.$t("room.wechat_error_block_title")))]),e._v(" "),r("div",{staticClass:"body-2"},[e._v("\n          "+e._s(e.$t("room.wechat_error_block_text"))+"\n        ")])]):e._e(),e._v(" "),r("div",{staticClass:"cards"},e._l(e.participants,(function(t){return r("div",{key:t.uid,staticClass:"user-card-wrapper ma-2",style:{width:e.cardWidth}},[r("user-card",{attrs:{user:t},on:{mute:e.muteUser,unmute:e.unmuteUser,"edit-name":e.editName}})],1)})),0)]],2),e._v(" "),r("v-dialog",{attrs:{"max-width":"290"},model:{value:e.showNameDialog,callback:function(t){e.showNameDialog=t},expression:"showNameDialog"}},[r("v-card",[r("v-card-title",{staticClass:"title-2"},[e._v(e._s(e.$t("room.name_dialog_title")))]),e._v(" "),r("v-card-text",{staticClass:"mb-0"},[r("div",{staticClass:"mb-4"},[r("v-text-field",{attrs:{label:e.$t("room.name_dialog_placeholder"),"hide-details":!0},scopedSlots:e._u([{key:"append",fn:function(){return[r("v-btn",{attrs:{icon:""},on:{click:e.genRandomChannelName}},[r("v-icon",[e._v("\n                  "+e._s(e.$icons.mdiDice3)+"\n                ")])],1)]},proxy:!0}]),model:{value:e.nickname,callback:function(t){e.nickname=t},expression:"nickname"}})],1)]),e._v(" "),r("v-card-actions",{staticClass:"px-5 pb-5"},[r("v-btn",{attrs:{color:"primary",block:"",rounded:"",disabled:!e.validated},on:{click:e.join}},[e._v("\n          "+e._s(e.$t("room.name_dialog_btn"))+"\n        ")])],1)],1)],1),e._v(" "),r("v-btn",{staticClass:"mute-all-btn",attrs:{color:"rgba(255, 255, 255, 0.2)",dark:"",small:"",absolute:"",bottom:"",right:"",fab:""},on:{click:e.muteAll}},[r("v-icon",{attrs:{color:this.isAllMuted?"rgb(242, 72, 34)":"#FFFFFF"}},[e._v("\n      "+e._s(this.isAllMuted?e.$icons.mdiMicrophoneOff:e.$icons.mdiMicrophone)+"\n    ")])],1)],1)}),[],!1,null,"a0e82bc6",null);e.default=ft.exports;Y()(ft,{VBtn:tt.a,VCard:st.a,VCardActions:ut.a,VCardText:ut.b,VCardTitle:ut.c,VContainer:lt.a,VDialog:pt.a,VIcon:et.a,VTextField:ht.a})}}]);