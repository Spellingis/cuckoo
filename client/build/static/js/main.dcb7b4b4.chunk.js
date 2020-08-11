(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{113:function(e,a){},115:function(e,a){},126:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(47),o=t.n(r),i=(t(64),t(2)),l=t(48),s=t.n(l),u=t(21),m=t.n(u),d=t(49),f=t.n(d),g=t(58),p=function(){return c.a.createElement("header",{className:"dropShadow"},c.a.createElement("div",{className:"headerWrapper"},c.a.createElement("div",{className:"headerContainer flex"},c.a.createElement("div",{className:"headerLogoLinkWrapper"},c.a.createElement("div",{className:"headerLogoLink"},c.a.createElement("a",{href:"/"},c.a.createElement("div",{className:"headerLogo flex flex-row"},c.a.createElement("div",{className:"logoImg"},c.a.createElement("img",{src:f.a,alt:"Cuckoo Logo"})),c.a.createElement("div",{className:"logoText"},"cuckoo"))))),c.a.createElement("div",{className:"githubStar"},c.a.createElement(g.a,{href:"https://github.com/somikdatta/cuckoo","data-color-scheme":"no-preference: light; light: light; dark: dark;","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star somikdatta/cuckoo on GitHub"},"Star")))))};var v=function(){return c.a.createElement("footer",{className:"footerWrapper"},c.a.createElement("div",{className:"footerContainer"},c.a.createElement("div",{className:"disclaimer"},"You need to allow access to video and audio to place calls.",c.a.createElement("br",null),"Cuckoo is fully Open Source and does not store any data on its servers."),c.a.createElement("div",{className:"self"},"Made with ",c.a.createElement("span",{role:"img","aria-label":"heart-emoji"},"\u2764\ufe0f")," in India by ",c.a.createElement("a",{href:"https://www.somikdatta.com",target:"_blank",rel:"noopener noreferrer"},"Somik Datta"))))},E=t(50),h=(t(125),t(52)),b=t.n(h),k=t(53),j=t.n(k),N=t(54),O=t.n(N),w=t(55),C=t.n(w),y=t(56),x=t.n(y),S=t(57),T=t.n(S);var V=function(){var e,a,t,r,o,l=Object(n.useState)(""),u=Object(i.a)(l,2),d=u[0],f=u[1],g=Object(n.useState)({}),h=Object(i.a)(g,2),k=h[0],N=h[1],w=Object(n.useState)(),y=Object(i.a)(w,2),S=y[0],V=y[1],D=Object(n.useState)(!1),I=Object(i.a)(D,2),W=I[0],B=I[1],R=Object(n.useState)(""),L=Object(i.a)(R,2),M=L[0],P=L[1],U=Object(n.useState)(!1),A=Object(i.a)(U,2),F=A[0],Y=A[1],J=Object(n.useState)(),z=Object(i.a)(J,2),G=z[0],H=z[1],$=Object(n.useState)(!1),_=Object(i.a)($,2),q=_[0],K=_[1],Q=Object(n.useState)(!1),X=Object(i.a)(Q,2),Z=X[0],ee=X[1],ae=Object(n.useState)(""),te=Object(i.a)(ae,2),ne=te[0],ce=te[1],re=Object(n.useState)(!1),oe=Object(i.a)(re,2),ie=oe[0],le=oe[1],se=Object(n.useState)(""),ue=Object(i.a)(se,2),me=ue[0],de=ue[1],fe=Object(n.useState)(!1),ge=Object(i.a)(fe,2),pe=ge[0],ve=ge[1],Ee=Object(n.useState)(!1),he=Object(i.a)(Ee,2),be=he[0],ke=he[1],je=Object(n.useRef)(),Ne=Object(n.useRef)(),Oe=Object(n.useRef)(),we=Object(n.useRef)(),Ce=c.a.createElement(c.a.Fragment,null,c.a.createElement(p,null),c.a.createElement("main",null,c.a.createElement("div",{className:"u-margin-top-xxlarge u-margin-bottom-xxlarge"},c.a.createElement("div",{className:"o-wrapper-l"},c.a.createElement("div",{className:"hero flex flex-column"},c.a.createElement("div",null,c.a.createElement("div",{className:"welcomeText"},"Anonymous Video Calls"),c.a.createElement("div",{className:"descriptionText"},"across the world for free")),c.a.createElement("div",null,c.a.createElement("div",{className:"actionText"},"Who do you want to call, ",c.a.createElement("span",{className:"username highlight"},d),"?")),c.a.createElement("div",{className:"callBox flex"},c.a.createElement("input",{type:"text",placeholder:"Friend ID",value:ne,onChange:function(e){return ce(e.target.value)},className:"form-input"}),c.a.createElement("button",{onClick:function(){return function(e){if(""===e||!k[e]||e===d)return de("We think the username entered is wrong. Please check again and retry!"),void le(!0);navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(a){V(a),Y(!0),je.current&&(je.current.srcObject=a);var t=new m.a({initiator:!0,trickle:!1,config:{iceServers:[{urls:"stun:numb.viagenie.ca",username:"sultan1640@gmail.com",credential:"98376683"},{urls:"turn:numb.viagenie.ca",username:"sultan1640@gmail.com",credential:"98376683"}]},stream:a});we.current=t,t.on("signal",(function(a){Oe.current.emit("callUser",{userToCall:e,signalData:a,from:d})})),t.on("stream",(function(e){Ne.current&&(Ne.current.srcObject=e)})),t.on("error",(function(e){ye()})),Oe.current.on("callAccepted",(function(e){K(!0),t.signal(e)})),Oe.current.on("close",(function(){window.location.reload()})),Oe.current.on("rejected",(function(){window.location.reload()}))})).catch((function(){de("You cannot place/ receive a call without granting video and audio permissions! Please change your settings to use Cuckoo."),le(!0)}))}(ne)},className:"primaryButton"},"Call")),c.a.createElement("div",null,"To call your friend, ask them to open Cuckoo in their browser. ",c.a.createElement("br",null),"Send your username (",c.a.createElement("span",{className:"username"},d),") and wait for their call ",c.a.createElement("span",{style:{fontWeight:600}},"OR")," enter their username and hit call!"))))),c.a.createElement(v,null));function ye(){we.current.destroy(),Oe.current.emit("close",{to:M}),window.location.reload()}function xe(){S&&(ve(!pe),S.getAudioTracks()[0].enabled=pe)}function Se(){S&&(ke(!be),S.getVideoTracks()[0].enabled=be)}Object(n.useEffect)((function(){Oe.current=s.a.connect("/"),Oe.current.on("yourID",(function(e){f(e)})),Oe.current.on("allUsers",(function(e){N(e)})),Oe.current.on("hey",(function(e){B(!0),P(e.from),H(e.signal)}))}),[]),S&&(e=c.a.createElement("video",{className:"userVideo",playsInline:!0,muted:!0,ref:je,autoPlay:!0})),q&&(a=c.a.createElement("video",{className:"partnerVideo",playsInline:!0,ref:Ne,autoPlay:!0})),!W||q||Z||(t=c.a.createElement("div",{className:"incomingCallContainer"},c.a.createElement("div",{className:"incomingCall flex flex-column"},c.a.createElement("div",null,c.a.createElement("span",{className:"callerID"},M)," is calling you!"),c.a.createElement("div",{className:"incomingCallButtons flex"},c.a.createElement("button",{name:"accept",className:"alertButtonPrimary",onClick:function(){navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){V(e),je.current&&(je.current.srcObject=e),K(!0);var a=new m.a({initiator:!1,trickle:!1,stream:e});we.current=a,a.on("signal",(function(e){Oe.current.emit("acceptCall",{signal:e,to:M})})),a.on("stream",(function(e){Ne.current.srcObject=e})),a.on("error",(function(e){ye()})),a.signal(G),Oe.current.on("close",(function(){window.location.reload()}))})).catch((function(){de("You cannot place/ receive a call without granting video and audio permissions! Please change your settings to use Cuckoo."),le(!0)}))}},"Accept"),c.a.createElement("button",{name:"reject",className:"alertButtonSecondary",onClick:function(){return ee(!0),Oe.current.emit("rejected",{to:M}),void window.location.reload()}},"Reject"))))),r=pe?c.a.createElement("span",{className:"iconContainer",onClick:function(){return xe()}},c.a.createElement("img",{src:C.a,alt:"Unmute audio"})):c.a.createElement("span",{className:"iconContainer",onClick:function(){return xe()}},c.a.createElement("img",{src:O.a,alt:"Mute audio"})),o=be?c.a.createElement("span",{className:"iconContainer",onClick:function(){return Se()}},c.a.createElement("img",{src:j.a,alt:"Resume video"})):c.a.createElement("span",{className:"iconContainer",onClick:function(){return Se()}},c.a.createElement("img",{src:b.a,alt:"Stop audio"}));var Te=c.a.createElement("span",{className:"iconContainer",onClick:function(){navigator.mediaDevices.getDisplayMedia({cursor:!0}).then((function(e){we.current.replaceTrack(S.getVideoTracks()[0],e.getVideoTracks()[0],S),je.current.srcObject=e,e.getTracks()[0].onended=function(){we.current.replaceTrack(e.getVideoTracks()[0],S.getVideoTracks()[0],S),je.current.srcObject=S}}))}},c.a.createElement("img",{src:x.a,alt:"Share screen"})),Ve=c.a.createElement("span",{className:"iconContainer",onClick:function(){return ye()}},c.a.createElement("img",{src:T.a,alt:"End call"}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{style:{display:Z||q||F?"none":"block"}},Ce,c.a.createElement(E.a,{visible:ie,onClose:function(){return le(!1)},width:20,height:5,measure:"em",closeOnEsc:!0},c.a.createElement("div",null,me)),t),c.a.createElement("div",{className:"callContainer",style:{display:Z||q||F?"block":"none"}},c.a.createElement("div",{className:"partnerVideoContainer"},a),c.a.createElement("div",{className:"userVideoContainer"},e),c.a.createElement("div",{className:"controlsContainer flex"},r,o,Te,Ve)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},49:function(e,a,t){e.exports=t.p+"static/media/cuckoo-logo.8c9e061e.svg"},52:function(e,a,t){e.exports=t.p+"static/media/camera.299a8f67.svg"},53:function(e,a,t){e.exports=t.p+"static/media/camera-stop.85f8745d.svg"},54:function(e,a,t){e.exports=t.p+"static/media/microphone.a2374838.svg"},55:function(e,a,t){e.exports=t.p+"static/media/microphone-stop.09d0b6c2.svg"},56:function(e,a,t){e.exports=t.p+"static/media/share.e7b143c0.svg"},57:function(e,a,t){e.exports=t.p+"static/media/hang-up.1b1f0dc8.svg"},59:function(e,a,t){e.exports=t(126)},64:function(e,a,t){},95:function(e,a){}},[[59,1,2]]]);
//# sourceMappingURL=main.dcb7b4b4.chunk.js.map