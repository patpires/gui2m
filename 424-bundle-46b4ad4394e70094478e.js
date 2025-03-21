/*! For license information please see 424-bundle-46b4ad4394e70094478e.js.LICENSE.txt */
(globalThis.webpackChunkrachacucaroot=globalThis.webpackChunkrachacucaroot||[]).push([[424],{77424:function(t,e,i){t.exports=function(t,e,i,s){"use strict";const n=t=>t&&"object"==typeof t&&"default"in t?t:{default:t},o=n(t),a=n(e),l=n(i),d=n(s),r="transitionend",h=t=>{const e=(t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),e=i&&"#"!==i?i.trim():null}return e})(t);return e?document.querySelector(e):null},c=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),u=(t,e,i)=>{Object.keys(i).forEach((s=>{const n=i[s],o=e[s],a=o&&c(o)?"element":null==(l=o)?`${l}`:{}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();var l;if(!new RegExp(n).test(a))throw new TypeError(`${t.toUpperCase()}: Option "${s}" provided type "${a}" but expected type "${n}".`)}))},_=t=>{t.offsetHeight},m=[],f=()=>"rtl"===document.documentElement.dir,g=t=>{"function"==typeof t&&t()},p=(t,e,i=!0)=>{if(!i)return void g(t);const s=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const s=Number.parseFloat(e),n=Number.parseFloat(i);return s||n?(e=e.split(",")[0],i=i.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(i))):0})(e)+5;let n=!1;const o=({target:i})=>{i===e&&(n=!0,e.removeEventListener(r,o),g(t))};e.addEventListener(r,o),setTimeout((()=>{n||e.dispatchEvent(new Event(r))}),s)},b=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",y=".sticky-top";class E{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",(e=>e+t)),this._setElementAttributes(b,"paddingRight",(e=>e+t)),this._setElementAttributes(y,"marginRight",(e=>e-t))}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const s=this.getWidth();this._applyManipulationCallback(t,(t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+s)return;this._saveInitialAttribute(t,e);const n=window.getComputedStyle(t)[e];t.style[e]=`${i(Number.parseFloat(n))}px`}))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(b,"paddingRight"),this._resetElementAttributes(y,"marginRight")}_saveInitialAttribute(t,e){const i=t.style[e];i&&a.default.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){this._applyManipulationCallback(t,(t=>{const i=a.default.getDataAttribute(t,e);void 0===i?t.style.removeProperty(e):(a.default.removeDataAttribute(t,e),t.style[e]=i)}))}_applyManipulationCallback(t,e){c(t)?e(t):l.default.find(t,this._element).forEach(e)}isOverflowing(){return this.getWidth()>0}}const v={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},w={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"},A="backdrop",k="show",C="mousedown.bs.backdrop";class T{constructor(t){this._config=this._getConfig(t),this._isAppended=!1,this._element=null}show(t){this._config.isVisible?(this._append(),this._config.isAnimated&&_(this._getElement()),this._getElement().classList.add(k),this._emulateAnimation((()=>{g(t)}))):g(t)}hide(t){this._config.isVisible?(this._getElement().classList.remove(k),this._emulateAnimation((()=>{this.dispose(),g(t)}))):g(t)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add("fade"),this._element=t}return this._element}_getConfig(t){return(t={...v,..."object"==typeof t?t:{}}).rootElement=(e=t.rootElement,c(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(e):null),u(A,t,w),t;var e}_append(){this._isAppended||(this._config.rootElement.append(this._getElement()),o.default.on(this._getElement(),C,(()=>{g(this._config.clickCallback)})),this._isAppended=!0)}dispose(){this._isAppended&&(o.default.off(this._element,C),this._element.remove(),this._isAppended=!1)}_emulateAnimation(t){p(t,this._getElement(),this._config.isAnimated)}}const N={trapElement:null,autofocus:!0},D={trapElement:"element",autofocus:"boolean"},j=".bs.focustrap",L="backward";class B{constructor(t){this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}activate(){const{trapElement:t,autofocus:e}=this._config;this._isActive||(e&&t.focus(),o.default.off(document,j),o.default.on(document,"focusin.bs.focustrap",(t=>this._handleFocusin(t))),o.default.on(document,"keydown.tab.bs.focustrap",(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,o.default.off(document,j))}_handleFocusin(t){const{target:e}=t,{trapElement:i}=this._config;if(e===document||e===i||i.contains(e))return;const s=l.default.focusableChildren(i);0===s.length?i.focus():this._lastTabNavDirection===L?s[s.length-1].focus():s[0].focus()}_handleKeydown(t){"Tab"===t.key&&(this._lastTabNavDirection=t.shiftKey?L:"forward")}_getConfig(t){return t={...N,..."object"==typeof t?t:{}},u("focustrap",t,D),t}}const R="modal",S=".bs.modal",O="Escape",$={backdrop:!0,keyboard:!0,focus:!0},M={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"},F="hidden.bs.modal",W="show.bs.modal",x="resize.bs.modal",I="click.dismiss.bs.modal",q="keydown.dismiss.bs.modal",z="mousedown.dismiss.bs.modal",P="modal-open",V="show",H="modal-static";class K extends d.default{constructor(t,e){super(t),this._config=this._getConfig(e),this._dialog=l.default.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollBar=new E}static get Default(){return $}static get NAME(){return R}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||o.default.trigger(this._element,W,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isAnimated()&&(this._isTransitioning=!0),this._scrollBar.hide(),document.body.classList.add(P),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),o.default.on(this._dialog,z,(()=>{o.default.one(this._element,"mouseup.dismiss.bs.modal",(t=>{t.target===this._element&&(this._ignoreBackdropClick=!0)}))})),this._showBackdrop((()=>this._showElement(t))))}hide(){if(!this._isShown||this._isTransitioning)return;if(o.default.trigger(this._element,"hide.bs.modal").defaultPrevented)return;this._isShown=!1;const t=this._isAnimated();t&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),this._focustrap.deactivate(),this._element.classList.remove(V),o.default.off(this._element,I),o.default.off(this._dialog,z),this._queueCallback((()=>this._hideModal()),this._element,t)}dispose(){[window,this._dialog].forEach((t=>o.default.off(t,S))),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new T({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new B({trapElement:this._element})}_getConfig(t){return t={...$,...a.default.getDataAttributes(this._element),..."object"==typeof t?t:{}},u(R,t,M),t}_showElement(t){const e=this._isAnimated(),i=l.default.findOne(".modal-body",this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,i&&(i.scrollTop=0),e&&_(this._element),this._element.classList.add(V);this._queueCallback((()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,o.default.trigger(this._element,"shown.bs.modal",{relatedTarget:t})}),this._dialog,e)}_setEscapeEvent(){this._isShown?o.default.on(this._element,q,(t=>{this._config.keyboard&&t.key===O?(t.preventDefault(),this.hide()):this._config.keyboard||t.key!==O||this._triggerBackdropTransition()})):o.default.off(this._element,q)}_setResizeEvent(){this._isShown?o.default.on(window,x,(()=>this._adjustDialog())):o.default.off(window,x)}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(P),this._resetAdjustments(),this._scrollBar.reset(),o.default.trigger(this._element,F)}))}_showBackdrop(t){o.default.on(this._element,I,(t=>{this._ignoreBackdropClick?this._ignoreBackdropClick=!1:t.target===t.currentTarget&&(!0===this._config.backdrop?this.hide():"static"===this._config.backdrop&&this._triggerBackdropTransition())})),this._backdrop.show(t)}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(o.default.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented)return;const{classList:t,scrollHeight:e,style:i}=this._element,s=e>document.documentElement.clientHeight;!s&&"hidden"===i.overflowY||t.contains(H)||(s||(i.overflowY="hidden"),t.add(H),this._queueCallback((()=>{t.remove(H),s||this._queueCallback((()=>{i.overflowY=""}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;(!i&&t&&!f()||i&&!t&&f())&&(this._element.style.paddingLeft=`${e}px`),(i&&!t&&!f()||!i&&t&&f())&&(this._element.style.paddingRight=`${e}px`)}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=K.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}return o.default.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',(function(t){const e=h(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),o.default.one(e,W,(t=>{t.defaultPrevented||o.default.one(e,F,(()=>{var t;c(t=this)&&0!==t.getClientRects().length&&"visible"===getComputedStyle(t).getPropertyValue("visibility")&&this.focus()}))}));const i=l.default.findOne(".modal.show");i&&K.getInstance(i).hide(),K.getOrCreateInstance(e).toggle(this)})),((t,e="hide")=>{const i=`click.dismiss${t.EVENT_KEY}`,s=t.NAME;o.default.on(document,i,`[data-bs-dismiss="${s}"]`,(function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),!(n=this)||n.nodeType!==Node.ELEMENT_NODE||n.classList.contains("disabled")||(void 0!==n.disabled?n.disabled:n.hasAttribute("disabled")&&"false"!==n.getAttribute("disabled")))return;var n;const o=h(this)||this.closest(`.${s}`);t.getOrCreateInstance(o)[e]()}))})(K),Q=K,Y=()=>{const t=(()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null})();if(t){const e=Q.NAME,i=t.fn[e];t.fn[e]=Q.jQueryInterface,t.fn[e].Constructor=Q,t.fn[e].noConflict=()=>(t.fn[e]=i,Q.jQueryInterface)}},"loading"===document.readyState?(m.length||document.addEventListener("DOMContentLoaded",(()=>{m.forEach((t=>t()))})),m.push(Y)):Y(),K;var Q,Y}(i(89286),i(13175),i(38737),i(25695))}}]);