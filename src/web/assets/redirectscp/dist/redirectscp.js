!function(){var t={887:function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}"undefined"===t(Craft.Redirects)&&(Craft.Redirects={}),Craft.Redirects.AdminTableSiteSwitcher=Garnish.Base.extend({$siteMenuButton:null,adminTableVm:null,siteMenu:null,siteId:null,init:function(t,e,n){if(this.$siteMenuBtn=$(t).find(".sitemenubtn:first"),this.$siteMenuBtn.length){this.adminTableVm=e,this.siteMenu=this.$siteMenuBtn.menubtn().data("menubtn").menu;var i=this.siteMenu.$options.filter(".sel:first");i.length||(i=this.siteMenu.$options.first()),this.siteMenu.on("optionselect",$.proxy(this,"_handleSiteChange")),this.trigger("afterInit")}},_handleSiteChange:function(t){this.siteMenu.$options.removeClass("sel");var e=$(t.selectedOption).addClass("sel");this.$siteMenuBtn.html(e.html()),this._setSite(e.data("site-id"))},_setSite:function(t){var e=this.adminTableVm.$children[0].$props.tableDataEndpoint;this.adminTableVm.$children[0].$props.tableDataEndpoint=Craft.getActionUrl("vredirect/catch-all/hits-table?siteId="+Craft.siteId);var n="",i=e.split("?"),r=i[0],o=i[1],s="";if(o){i=o.split("&");for(var a=0;a<i.length;a++)"siteId"!=i[a].split("=")[0]&&(n+=s+i[a],s="&")}var d=r+"?"+n+s+"siteId="+t;this.adminTableVm.$children[0].$props.tableDataEndpoint=d}})},941:function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}"undefined"===t(Craft.Redirects)&&(Craft.Redirects={}),Craft.Redirects.CatchAllIndex=Garnish.Base.extend({adminTableVm:null,init:function(t){var e=this;this.adminTableVm=t,$(document.body).on("click",".createRedirectBtn",(function(t){e._createRedirect(t.target.dataset.id)}))},_createRedirect:function(t){var e=this;Craft.sendActionRequest("POST","vredirect/redirects/create",{data:{siteId:this.siteId,catchAllId:t}}).then((function(t){var n=t.data;Craft.createElementEditor(e.elementType,{siteId:e.siteId,elementId:n.redirect.id,draftId:n.redirect.draftId,params:{fresh:1}}).on("submit",(function(){e.adminTableVm.$children[0].reload()}))})).finally((function(){}))}})},524:function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}"undefined"===t(Craft.Redirects)&&(Craft.Redirects={}),Craft.Redirects.ElementRedirectSlideout=Garnish.Base.extend({elementId:null,siteId:null,$openDialogButton:null,init:function(t,e,n){var i=this;void 0===n&&$.isPlainObject(t)&&(n=t,t=null),this.elementId=t,this.siteId=e,this.setSettings(n,Craft.Redirects.ElementRedirectSlideout.defaults),this.$openDialogButton=$("#redirect-slideout-trigger > button"),this.addListener(this.$openDialogButton,"click",(function(t){t.preventDefault();var e=axios.CancelToken.source();Craft.sendActionRequest("GET",Craft.getActionUrl("vredirect/element-slideouts/get-element-view-html",{elementId:i.elementId,siteId:i.siteId}),{cancelToken:e.token}).then((function(t){e=null,new Craft.Slideout(t.data)})),Garnish.$win.on("beforeunload",(function(){e&&e.cancel()}))}))}})},249:function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}"undefined"===t(Craft.Redirects)&&(Craft.Redirects={}),Craft.Redirects.RedirectsIndex=Craft.BaseElementIndex.extend({$newRedirectBtn:null,forceCreateInSlideout:!0,init:function(t,e,n){this.on("selectSource",this.updateButton.bind(this)),this.on("selectSite",this.updateButton.bind(this)),this.base(t,e,n)},updateButton:function(){var t=this;this.$newRedirectBtn&&this.$newRedirectBtn.remove(),this.$newRedirectBtn=Craft.ui.createButton({label:Craft.t("vredirect","New redirect"),spinner:!0}).addClass("submit add icon btngroup-btn-last"),this.addListener(this.$newRedirectBtn,"click mousedown",(function(){var e=t.$source.data("id");t._createRedirect(e)})),this.addButton(this.$newRedirectBtn)},_createRedirect:function(t){var e=this;this.$newRedirectBtn.hasClass("loading")||(this.$newRedirectBtn.addClass("loading"),Craft.sendActionRequest("POST","vredirect/redirects/create",{data:{siteId:this.siteId,group:t}}).then((function(t){var n=t.data;e.forceCreateInSlideout||"index"!==e.settings.context?Craft.createElementEditor(e.elementType,{siteId:e.siteId,elementId:n.redirect.id,draftId:n.redirect.draftId,params:{fresh:1}}).on("submit",(function(){e.clearSearch(),e.setSortAttribute("dateCreated"),e.setSortDirection("desc"),e.selectElementAfterUpdate(n.redirect.id),e.updateElements()})):document.location.href=Craft.getUrl(n.cpEditUrl,{fresh:1})})).finally((function(){e.$newRedirectBtn.removeClass("loading")})))}}),Craft.registerElementIndexClass("venveo\\redirect\\elements\\Redirect",Craft.Redirects.RedirectsIndex)},101:function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}"undefined"===t(Craft.Redirects)&&(Craft.Redirects={}),function(t){Craft.Redirects.UrlFieldInput=Garnish.Base.extend({$container:null,siteOptions:[],$siteSelect:null,$textInput:null,$prefixContainer:null,selectedSite:null,init:function(e,n){this.$container=t(e),this.setSettings(n,Craft.Redirects.UrlFieldInput.defaults),this.$siteSelect=this.$container.find(".sites > select"),this.$textInput=this.$container.find(".url"),this.$prefixContainer=this.$container.find(".prefix"),this.siteOptions=this.settings.siteOptions,this.addListener(this.$siteSelect,"change",(function(e){var n=t(e.target)[0].value;this.changeSite(n)})),this.changeSite(this.$siteSelect[0].value),this.trigger("afterInit")},changeSite:function(t){this.selectedSite=null;for(var e=0;e<this.siteOptions.length;e++)this.siteOptions[e].id==t&&(this.selectedSite=this.siteOptions[e]);if(!this.selectedSite)return this.$prefixContainer.empty(),void this.$prefixContainer.hide();this.$prefixContainer.show(),this.$prefixContainer.text(this.selectedSite.baseUrl),console.log(this.selectedSite)}},{defaults:{}})}(jQuery)},466:function(){},973:function(t,e,n){var i=n(466);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals),(0,n(673).Z)("550c889c",i,!0,{})},673:function(t,e,n){"use strict";function i(t,e){for(var n=[],i={},r=0;r<e.length;r++){var o=e[r],s=o[0],a={id:t+":"+r,css:o[1],media:o[2],sourceMap:o[3]};i[s]?i[s].parts.push(a):n.push(i[s]={id:s,parts:[a]})}return n}n.d(e,{Z:function(){return p}});var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},s=r&&(document.head||document.getElementsByTagName("head")[0]),a=null,d=0,c=!1,l=function(){},u=null,f="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(t,e,n,r){c=n,u=r||{};var s=i(t,e);return m(s),function(e){for(var n=[],r=0;r<s.length;r++){var a=s[r];(d=o[a.id]).refs--,n.push(d)}for(e?m(s=i(t,e)):s=[],r=0;r<n.length;r++){var d;if(0===(d=n[r]).refs){for(var c=0;c<d.parts.length;c++)d.parts[c]();delete o[d.id]}}}}function m(t){for(var e=0;e<t.length;e++){var n=t[e],i=o[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(b(n.parts[r]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var s=[];for(r=0;r<n.parts.length;r++)s.push(b(n.parts[r]));o[n.id]={id:n.id,refs:1,parts:s}}}}function y(){var t=document.createElement("style");return t.type="text/css",s.appendChild(t),t}function b(t){var e,n,i=document.querySelector("style["+f+'~="'+t.id+'"]');if(i){if(c)return l;i.parentNode.removeChild(i)}if(h){var r=d++;i=a||(a=y()),e=C.bind(null,i,r,!1),n=C.bind(null,i,r,!0)}else i=y(),e=g.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}var v,S=(v=[],function(t,e){return v[t]=e,v.filter(Boolean).join("\n")});function C(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=S(e,r);else{var o=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function g(t,e){var n=e.css,i=e.media,r=e.sourceMap;if(i&&t.setAttribute("media",i),u.ssrId&&t.setAttribute(f,e.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={id:i,exports:{}};return t[i](o,o.exports,n),o.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}n(973),n(887),n(941),n(524),n(249),n(101),jQuery,"undefined"===t(Craft.Redirects)&&(Craft.Redirects={})}()}();
//# sourceMappingURL=redirectscp.js.map