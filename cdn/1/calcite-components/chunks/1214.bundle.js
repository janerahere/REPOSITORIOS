/*! For license information please see 1214.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[1214],{1214:(e,t,i)=>{i.r(t),i.d(t,{calcite_text_area:()=>v});var a=i(9113),s=i(4300),o=i(493),n=i(7146),r=i(3213),l=i(8773),c=i(8545),h=i(8065),d=i(2627),u=i(9321),g=i(236),f=i(6739),m=i(7040);i(8220),i(9046);const p="readonly",v=class{constructor(e){(0,a.r)(this,e),this.calciteTextAreaInput=(0,a.c)(this,"calciteTextAreaInput",7),this.calciteTextAreaChange=(0,a.c)(this,"calciteTextAreaChange",7),this.guid=(0,u.g)(),this.handleInput=e=>{this.value=e.target.value,this.calciteTextAreaInput.emit()},this.handleChange=()=>{this.calciteTextAreaChange.emit()},this.contentSlotChangeHandler=()=>{this.value||this.el.childNodes.forEach((e=>{"#text"===e.nodeName&&(this.value=e.nodeValue.trim())}))},this.renderCharacterLimit=()=>this.maxLength?(this.localizedCharacterLengthObj=this.getLocalizedCharacterLength(),(0,a.h)("span",{class:"character-limit"},(0,a.h)("span",{class:{"character--over-limit":this.isCharacterLimitExceeded()}},this.localizedCharacterLengthObj.currentLength),"/",this.localizedCharacterLengthObj.maxLength)):null,this.resizeObserver=(0,l.c)("resize",(async()=>{await(0,c.b)(this);const{textAreaHeight:e,textAreaWidth:t,elHeight:i,elWidth:a,footerHeight:s,footerWidth:o}=this.getHeightAndWidthOfElements();o>0&&o!==t&&(this.footerEl.style.width=`${t}px`),a===t&&i===e+(s||0)||this.setHeightAndWidthToAuto()})),this.setTextAreaEl=e=>{this.textAreaEl=e,this.resizeObserver.observe(e)},this.setHeightAndWidthToAuto=(0,m.t)((()=>{"vertical"!==this.resize&&"both"!==this.resize||(this.el.style.height="auto"),"horizontal"!==this.resize&&"both"!==this.resize||(this.el.style.width="auto")}),100,{leading:!1}),this.autofocus=!1,this.columns=void 0,this.disabled=!1,this.form=void 0,this.groupSeparator=!1,this.label=void 0,this.minLength=void 0,this.maxLength=void 0,this.messages=void 0,this.validationMessage=void 0,this.validationIcon=void 0,this.name=void 0,this.numberingSystem=void 0,this.placeholder=void 0,this.readOnly=!1,this.required=!1,this.resize="both",this.rows=void 0,this.scale="m",this.status="idle",this.value="",this.wrap="soft",this.messageOverrides=void 0,this.defaultMessages=void 0,this.endSlotHasElements=void 0,this.startSlotHasElements=void 0,this.effectiveLocale=""}onMessagesChange(){}connectedCallback(){(0,d.c)(this),(0,o.c)(this),(0,s.c)(this),(0,r.c)(this),(0,h.c)(this)}async componentWillLoad(){(0,c.s)(this),await(0,h.s)(this)}componentDidLoad(){(0,c.a)(this)}componentDidRender(){(0,d.u)(this),this.setTextAreaHeight()}disconnectedCallback(){(0,d.d)(this),(0,o.d)(this),(0,s.d)(this),(0,r.d)(this),(0,h.d)(this),this.resizeObserver?.disconnect()}render(){const e=this.startSlotHasElements||this.endSlotHasElements||!!this.maxLength;return(0,a.h)(a.H,null,(0,a.h)(d.I,{disabled:this.disabled},(0,a.h)("textarea",{"aria-describedby":this.guid,"aria-invalid":(0,n.t)(this.isCharacterLimitExceeded()),"aria-label":(0,o.g)(this),autofocus:this.autofocus,class:{[p]:this.readOnly,"text-area--invalid":this.isCharacterLimitExceeded(),"footer--slotted":this.endSlotHasElements&&this.startSlotHasElements,"block-size--full":!e,"border--color":!e},cols:this.columns,disabled:this.disabled,name:this.name,onChange:this.handleChange,onInput:this.handleInput,placeholder:this.placeholder,readonly:this.readOnly,required:this.required,rows:this.rows,value:this.value,wrap:this.wrap,ref:this.setTextAreaEl}),(0,a.h)("span",{class:{content:!0}},(0,a.h)("slot",{onSlotchange:this.contentSlotChangeHandler})),(0,a.h)("footer",{class:{footer:!0,[p]:this.readOnly,hide:!e},ref:e=>this.footerEl=e},(0,a.h)("div",{class:{container:!0,"footer--end-only":!this.startSlotHasElements&&this.endSlotHasElements}},(0,a.h)("slot",{name:"footer-start",onSlotchange:e=>this.startSlotHasElements=(0,n.b)(e)}),(0,a.h)("slot",{name:"footer-end",onSlotchange:e=>this.endSlotHasElements=(0,n.b)(e)})),this.renderCharacterLimit()),(0,a.h)(s.H,{component:this}),this.isCharacterLimitExceeded()&&(0,a.h)("span",{"aria-hidden":!0,"aria-live":"polite",class:"assistive-text",id:this.guid},this.replacePlaceHoldersInMessages()),this.validationMessage?(0,a.h)(g.V,{icon:this.validationIcon,message:this.validationMessage,scale:this.scale,status:this.status}):null))}async setFocus(){await(0,c.c)(this),this.textAreaEl.focus()}async selectText(){await(0,c.b)(this),this.textAreaEl.select()}effectiveLocaleChange(){(0,h.u)(this,this.effectiveLocale)}onLabelClick(){this.setFocus()}getLocalizedCharacterLength(){const e=this.value?this.value.length.toString():"0",t=this.maxLength.toString();return"latn"===this.numberingSystem?{currentLength:e,maxLength:t}:(r.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,signDisplay:"never",useGrouping:this.groupSeparator},{currentLength:r.n.localize(e),maxLength:r.n.localize(t)})}syncHiddenFormInput(e){e.setCustomValidity(""),this.isCharacterLimitExceeded()&&e.setCustomValidity(this.replacePlaceHoldersInMessages()),(0,f.s)("textarea",this,e)}setTextAreaHeight(){const{textAreaHeight:e,elHeight:t,footerHeight:i}=this.getHeightAndWidthOfElements();i>0&&e+i!=t&&(this.textAreaEl.style.height=t-i+"px")}getHeightAndWidthOfElements(){const{height:e,width:t}=this.textAreaEl.getBoundingClientRect(),{height:i,width:a}=this.el.getBoundingClientRect(),{height:s,width:o}=this.footerEl?.getBoundingClientRect();return{textAreaHeight:e,textAreaWidth:t,elHeight:i,elWidth:a,footerHeight:s,footerWidth:o}}replacePlaceHoldersInMessages(){return this.messages.tooLong.replace("{maxLength}",this.localizedCharacterLengthObj.maxLength).replace("{currentLength}",this.localizedCharacterLengthObj.currentLength)}isCharacterLimitExceeded(){return this.value?.length>this.maxLength}static get assetsDirs(){return["assets"]}get el(){return(0,a.g)(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};v.style=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:inline-block;block-size:100%;inline-size:100%}textarea{position:relative;margin:0px;box-sizing:border-box;display:block;inline-size:100%;border-width:1px;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);font-family:var(--calcite-sans-family);color:var(--calcite-color-text-1);min-inline-size:12rem;border-block-end:1px solid var(--calcite-color-border-3)}@media screen and (max-width: 480px){textarea{resize:none}}textarea:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite--color-brand)));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}textarea.text-area--invalid{border-width:1px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-color-status-danger)}textarea.text-area--invalid:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}textarea.footer--slotted{min-inline-size:18rem}.footer{box-sizing:border-box;display:flex;align-items:center;border-width:1px;border-block-start-width:0px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1)}.character-limit{display:flex;align-items:center;justify-content:flex-end;white-space:nowrap;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-2)}.character--over-limit{font-weight:var(--calcite-font-weight-bold);color:var(--calcite-color-status-danger)}:host([resize=none]) textarea{resize:none}:host([resize=horizontal]) textarea{resize:horizontal}:host([resize=vertical]) textarea{resize:vertical}:host([scale=s]){font-size:var(--calcite-font-size--2)}:host([scale=s]) .footer{padding-block:0.25rem;padding-inline:0.5rem;min-block-size:1.75rem}:host([scale=s]) textarea{padding-block:0.25rem;padding-inline:0.5rem}:host([scale=s]) textarea,:host([scale=s]) .footer,:host([scale=s]) .character-limit{padding-inline-start:0.5rem;font-size:var(--calcite-font-size--2)}:host([scale=m]) textarea{padding-block:0.5rem;padding-inline:0.75rem}:host([scale=m]) .footer{padding-block:0.5rem;padding-inline:0.75rem;min-block-size:2.25rem}:host([scale=m]) textarea,:host([scale=m]) .footer,:host([scale=m]) .character-limit{padding-inline-start:0.75rem;font-size:var(--calcite-font-size--1)}:host([scale=l]){font-size:var(--calcite-font-size-0)}:host([scale=l]) textarea{padding-block:0.75rem;padding-inline:1rem}:host([scale=l]) .footer{padding-block:0.75rem;padding-inline:1rem;min-block-size:2.75rem}:host([scale=l]) textarea,:host([scale=l]) .footer,:host([scale=l]) .character-limit{padding-inline-start:1rem;font-size:var(--calcite-font-size-0)}:host([status=invalid]) textarea{border-color:var(--calcite-color-status-danger)}:host([status=invalid]) textarea:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.readonly{background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium)}:host([disabled]) textarea,:host([disabled]) footer{opacity:0.5}.border--color{border-block-end-width:1px;border-color:var(--calcite-color-border-input)}.border--color:focus{border-block-end-width:2px}textarea.block-size--full{block-size:100%}.content,.hide{display:none}.container{display:flex;inline-size:100%;justify-content:space-between}.footer--end-only{justify-content:flex-end}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}"},9046:(e,t,i)=>{i.d(t,{S:()=>n,a:()=>b,b:()=>m,c:()=>p,d:()=>j,f:()=>a,i:()=>z,r:()=>o});var a="object"==typeof global&&global&&global.Object===Object&&global,s="object"==typeof self&&self&&self.Object===Object&&self,o=a||s||Function("return this")(),n=o.Symbol,r=Object.prototype,l=r.hasOwnProperty,c=r.toString,h=n?n.toStringTag:void 0,d=Object.prototype.toString,u="[object Null]",g="[object Undefined]",f=n?n.toStringTag:void 0;function m(e){return null==e?void 0===e?g:u:f&&f in Object(e)?function(e){var t=l.call(e,h),i=e[h];try{e[h]=void 0;var a=!0}catch(e){}var s=c.call(e);return a&&(t?e[h]=i:delete e[h]),s}(e):function(e){return d.call(e)}(e)}function p(e){return null!=e&&"object"==typeof e}var v="[object Symbol]";function b(e){return"symbol"==typeof e||p(e)&&m(e)==v}var x=/\s/,y=/^\s+/;function z(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}var w=NaN,L=/^[-+]0x[0-9a-f]+$/i,C=/^0b[01]+$/i,k=/^0o[0-7]+$/i,E=parseInt;function H(e){if("number"==typeof e)return e;if(b(e))return w;if(z(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=z(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;var i;e=(i=e)?i.slice(0,function(e){for(var t=e.length;t--&&x.test(e.charAt(t)););return t}(i)+1).replace(y,""):i;var a=C.test(e);return a||k.test(e)?E(e.slice(2),a?2:8):L.test(e)?w:+e}var S=function(){return o.Date.now()},A="Expected a function",O=Math.max,T=Math.min;function j(e,t,i){var a,s,o,n,r,l,c=0,h=!1,d=!1,u=!0;if("function"!=typeof e)throw new TypeError(A);function g(t){var i=a,o=s;return a=s=void 0,c=t,n=e.apply(o,i)}function f(e){var i=e-l;return void 0===l||i>=t||i<0||d&&e-c>=o}function m(){var e=S();if(f(e))return p(e);r=setTimeout(m,function(e){var i=t-(e-l);return d?T(i,o-(e-c)):i}(e))}function p(e){return r=void 0,u&&a?g(e):(a=s=void 0,n)}function v(){var e=S(),i=f(e);if(a=arguments,s=this,l=e,i){if(void 0===r)return function(e){return c=e,r=setTimeout(m,t),h?g(e):n}(l);if(d)return clearTimeout(r),r=setTimeout(m,t),g(l)}return void 0===r&&(r=setTimeout(m,t)),n}return t=H(t)||0,z(i)&&(h=!!i.leading,o=(d="maxWait"in i)?O(H(i.maxWait)||0,t):o,u="trailing"in i?!!i.trailing:u),v.cancel=function(){void 0!==r&&clearTimeout(r),c=0,a=l=s=r=void 0},v.flush=function(){return void 0===r?n:p(S())},v}},7040:(e,t,i)=>{i.d(t,{t:()=>o});var a=i(9046),s="Expected a function";function o(e,t,i){var o=!0,n=!0;if("function"!=typeof e)throw new TypeError(s);return(0,a.i)(i)&&(o="leading"in i?!!i.leading:o,n="trailing"in i?!!i.trailing:n),(0,a.d)(e,t,{leading:o,maxWait:t,trailing:n})}}}]);