/**
 * Buttons helper for fancyBox
 * version: 1.0.5 (Mon, 15 Oct 2012)
 * @requires fancyBox v2.0 or later
 *
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 OA Wu Design
 */

!function(e,t,i,n){"use strict";var o=i("html"),a=i(e),r=i(t),s=i.fancybox=function(){s.open.apply(this,arguments)},l=navigator.userAgent.match(/msie/i),c=null,d=t.createTouch!==n,p=function(e){return e&&e.hasOwnProperty&&e instanceof i},h=function(e){return e&&"string"===i.type(e)},f=function(e){return h(e)&&e.indexOf("%")>0},u=function(e){return e&&!(e.style.overflow&&"hidden"===e.style.overflow)&&(e.clientWidth&&e.scrollWidth>e.clientWidth||e.clientHeight&&e.scrollHeight>e.clientHeight)},g=function(e,t){var i=parseInt(e,10)||0;return t&&f(e)&&(i=s.getViewport()[t]/100*i),Math.ceil(i)},m=function(e,t){return g(e,t)+"px"};i.extend(s,{version:"2.1.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!d,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3e3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(l?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="關閉" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="下一張" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="上一張" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:i.noop,beforeLoad:i.noop,afterLoad:i.noop,beforeShow:i.noop,afterShow:i.noop,beforeChange:i.noop,beforeClose:i.noop,afterClose:i.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(e,t){return e&&(i.isPlainObject(t)||(t={}),!1!==s.close(!0))?(i.isArray(e)||(e=p(e)?i(e).get():[e]),i.each(e,function(o,a){var r,l,c,d,f,u,g,m={};"object"===i.type(a)&&(a.nodeType&&(a=i(a)),p(a)?(m={href:a.data("fancybox-href")||a.attr("href"),title:a.data("fancybox-title")||a.attr("title"),isDom:!0,element:a},i.metadata&&i.extend(!0,m,a.metadata())):m=a),r=t.href||m.href||(h(a)?a:null),l=t.title!==n?t.title:m.title||"",c=t.content||m.content,d=c?"html":t.type||m.type,!d&&m.isDom&&(d=a.data("fancybox-type"),d||(f=a.prop("class").match(/fancybox\.(\w+)/),d=f?f[1]:null)),h(r)&&(d||(s.isImage(r)?d="image":s.isSWF(r)?d="swf":"#"===r.charAt(0)?d="inline":h(a)&&(d="html",c=a)),"ajax"===d&&(u=r.split(/\s+/,2),r=u.shift(),g=u.shift())),c||("inline"===d?r?c=i(h(r)?r.replace(/.*(?=#[^\s]+$)/,""):r):m.isDom&&(c=a):"html"===d?c=r:d||r||!m.isDom||(d="inline",c=a)),i.extend(m,{href:r,type:d,content:c,title:l,selector:g}),e[o]=m}),s.opts=i.extend(!0,{},s.defaults,t),t.keys!==n&&(s.opts.keys=t.keys?i.extend({},s.defaults.keys,t.keys):!1),s.group=e,s._start(s.opts.index)):void 0},cancel:function(){var e=s.coming;e&&!1!==s.trigger("onCancel")&&(s.hideLoading(),s.ajaxLoad&&s.ajaxLoad.abort(),s.ajaxLoad=null,s.imgPreload&&(s.imgPreload.onload=s.imgPreload.onerror=null),e.wrap&&e.wrap.stop(!0,!0).trigger("onReset").remove(),s.coming=null,s.current||s._afterZoomOut(e))},close:function(e){s.cancel(),!1!==s.trigger("beforeClose")&&(s.unbindEvents(),s.isActive&&(s.isOpen&&e!==!0?(s.isOpen=s.isOpened=!1,s.isClosing=!0,i(".fancybox-item, .fancybox-nav").remove(),s.wrap.stop(!0,!0).removeClass("fancybox-opened"),s.transitions[s.current.closeMethod]()):(i(".fancybox-wrap").stop(!0).trigger("onReset").remove(),s._afterZoomOut())))},play:function(e){var t=function(){clearTimeout(s.player.timer)},i=function(){t(),s.current&&s.player.isActive&&(s.player.timer=setTimeout(s.next,s.current.playSpeed))},n=function(){t(),r.unbind(".player"),s.player.isActive=!1,s.trigger("onPlayEnd")},o=function(){s.current&&(s.current.loop||s.current.index<s.group.length-1)&&(s.player.isActive=!0,r.bind({"onCancel.player beforeClose.player":n,"onUpdate.player":i,"beforeLoad.player":t}),i(),s.trigger("onPlayStart"))};e===!0||!s.player.isActive&&e!==!1?o():n()},next:function(e){var t=s.current;t&&(h(e)||(e=t.direction.next),s.jumpto(t.index+1,e,"next"))},prev:function(e){var t=s.current;t&&(h(e)||(e=t.direction.prev),s.jumpto(t.index-1,e,"prev"))},jumpto:function(e,t,i){var o=s.current;o&&(e=g(e),s.direction=t||o.direction[e>=o.index?"next":"prev"],s.router=i||"jumpto",o.loop&&(0>e&&(e=o.group.length+e%o.group.length),e%=o.group.length),o.group[e]!==n&&(s.cancel(),s._start(e)))},reposition:function(e,t){var n,o=s.current,a=o?o.wrap:null;a&&(n=s._getPosition(t),e&&"scroll"===e.type?(delete n.position,a.stop(!0,!0).animate(n,200)):(a.css(n),o.pos=i.extend({},o.dim,n)))},update:function(e){var t=e&&e.type,i=!t||"orientationchange"===t;i&&(clearTimeout(c),c=null),s.isOpen&&!c&&(c=setTimeout(function(){var n=s.current;n&&!s.isClosing&&(s.wrap.removeClass("fancybox-tmp"),(i||"load"===t||"resize"===t&&n.autoResize)&&s._setDimension(),"scroll"===t&&n.canShrink||s.reposition(e),s.trigger("onUpdate"),c=null)},i&&!d?0:300))},toggle:function(e){s.isOpen&&(s.current.fitToView="boolean"===i.type(e)?e:!s.current.fitToView,d&&(s.wrap.removeAttr("style").addClass("fancybox-tmp"),s.trigger("onUpdate")),s.update())},hideLoading:function(){r.unbind(".loading"),i("#fancybox-loading").remove()},showLoading:function(){var e,t;s.hideLoading(),e=i('<div id="fancybox-loading"><div></div></div>').click(s.cancel).appendTo("body"),r.bind("keydown.loading",function(e){27===(e.which||e.keyCode)&&(e.preventDefault(),s.cancel())}),s.defaults.fixed||(t=s.getViewport(),e.css({position:"absolute",top:.5*t.h+t.y,left:.5*t.w+t.x}))},getViewport:function(){var t=s.current&&s.current.locked||!1,i={x:a.scrollLeft(),y:a.scrollTop()};return t?(i.w=t[0].clientWidth,i.h=t[0].clientHeight):(i.w=d&&e.innerWidth?e.innerWidth:a.width(),i.h=d&&e.innerHeight?e.innerHeight:a.height()),i},unbindEvents:function(){s.wrap&&p(s.wrap)&&s.wrap.unbind(".fb"),r.unbind(".fb"),a.unbind(".fb")},bindEvents:function(){var e,t=s.current;t&&(a.bind("orientationchange.fb"+(d?"":" resize.fb")+(t.autoCenter&&!t.locked?" scroll.fb":""),s.update),e=t.keys,e&&r.bind("keydown.fb",function(o){var a=o.which||o.keyCode,r=o.target||o.srcElement;return 27===a&&s.coming?!1:void(o.ctrlKey||o.altKey||o.shiftKey||o.metaKey||r&&(r.type||i(r).is("[contenteditable]"))||i.each(e,function(e,r){return t.group.length>1&&r[a]!==n?(s[e](r[a]),o.preventDefault(),!1):i.inArray(a,r)>-1?(s[e](),o.preventDefault(),!1):void 0}))}),i.fn.mousewheel&&t.mouseWheel&&s.wrap.bind("mousewheel.fb",function(e,n,o,a){for(var r=e.target||null,l=i(r),c=!1;l.length&&!(c||l.is(".fancybox-skin")||l.is(".fancybox-wrap"));)c=u(l[0]),l=i(l).parent();0===n||c||s.group.length>1&&!t.canShrink&&(a>0||o>0?s.prev(a>0?"down":"left"):(0>a||0>o)&&s.next(0>a?"up":"right"),e.preventDefault())}))},trigger:function(e,t){var n,o=t||s.coming||s.current;if(o){if(i.isFunction(o[e])&&(n=o[e].apply(o,Array.prototype.slice.call(arguments,1))),n===!1)return!1;o.helpers&&i.each(o.helpers,function(t,n){n&&s.helpers[t]&&i.isFunction(s.helpers[t][e])&&s.helpers[t][e](i.extend(!0,{},s.helpers[t].defaults,n),o)}),r.trigger(e)}},isImage:function(e){return h(e)&&e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(e){return h(e)&&e.match(/\.(swf)((\?|#).*)?$/i)},_start:function(e){var t,n,o,a,r,l={};if(e=g(e),t=s.group[e]||null,!t)return!1;if(l=i.extend(!0,{},s.opts,t),a=l.margin,r=l.padding,"number"===i.type(a)&&(l.margin=[a,a,a,a]),"number"===i.type(r)&&(l.padding=[r,r,r,r]),l.modal&&i.extend(!0,l,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}}),l.autoSize&&(l.autoWidth=l.autoHeight=!0),"auto"===l.width&&(l.autoWidth=!0),"auto"===l.height&&(l.autoHeight=!0),l.group=s.group,l.index=e,s.coming=l,!1===s.trigger("beforeLoad"))return void(s.coming=null);if(o=l.type,n=l.href,!o)return s.coming=null,s.current&&s.router&&"jumpto"!==s.router?(s.current.index=e,s[s.router](s.direction)):!1;if(s.isActive=!0,("image"===o||"swf"===o)&&(l.autoHeight=l.autoWidth=!1,l.scrolling="visible"),"image"===o&&(l.aspectRatio=!0),"iframe"===o&&d&&(l.scrolling="scroll"),l.wrap=i(l.tpl.wrap).addClass("fancybox-"+(d?"mobile":"desktop")+" fancybox-type-"+o+" fancybox-tmp "+l.wrapCSS).appendTo(l.parent||"body"),i.extend(l,{skin:i(".fancybox-skin",l.wrap),outer:i(".fancybox-outer",l.wrap),inner:i(".fancybox-inner",l.wrap)}),i.each(["Top","Right","Bottom","Left"],function(e,t){l.skin.css("padding"+t,m(l.padding[e]))}),s.trigger("onReady"),"inline"===o||"html"===o){if(!l.content||!l.content.length)return s._error("content")}else if(!n)return s._error("href");"image"===o?s._loadImage():"ajax"===o?s._loadAjax():"iframe"===o?s._loadIframe():s._afterLoad()},_error:function(e){i.extend(s.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:e,content:s.coming.tpl.error}),s._afterLoad()},_loadImage:function(){var e=s.imgPreload=new Image;e.onload=function(){this.onload=this.onerror=null,s.coming.width=this.width/s.opts.pixelRatio,s.coming.height=this.height/s.opts.pixelRatio,s._afterLoad()},e.onerror=function(){this.onload=this.onerror=null,s._error("image")},e.src=s.coming.href,e.complete!==!0&&s.showLoading()},_loadAjax:function(){var e=s.coming;s.showLoading(),s.ajaxLoad=i.ajax(i.extend({},e.ajax,{url:e.href,error:function(e,t){s.coming&&"abort"!==t?s._error("ajax",e):s.hideLoading()},success:function(t,i){"success"===i&&(e.content=t,s._afterLoad())}}))},_loadIframe:function(){var e=s.coming,t=i(e.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",d?"auto":e.iframe.scrolling).attr("src",e.href);i(e.wrap).bind("onReset",function(){try{i(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(e){}}),e.iframe.preload&&(s.showLoading(),t.one("load",function(){i(this).data("ready",1),d||i(this).bind("load.fb",s.update),i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(),s._afterLoad()})),e.content=t.appendTo(e.inner),e.iframe.preload||s._afterLoad()},_preloadImages:function(){var e,t,i=s.group,n=s.current,o=i.length,a=n.preload?Math.min(n.preload,o-1):0;for(t=1;a>=t;t+=1)e=i[(n.index+t)%o],"image"===e.type&&e.href&&((new Image).src=e.href)},_afterLoad:function(){var e,t,n,o,a,r,l=s.coming,c=s.current,d="fancybox-placeholder";if(s.hideLoading(),l&&s.isActive!==!1){if(!1===s.trigger("afterLoad",l,c))return l.wrap.stop(!0).trigger("onReset").remove(),void(s.coming=null);switch(c&&(s.trigger("beforeChange",c),c.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()),s.unbindEvents(),e=l,t=l.content,n=l.type,o=l.scrolling,i.extend(s,{wrap:e.wrap,skin:e.skin,outer:e.outer,inner:e.inner,current:e,previous:c}),a=e.href,n){case"inline":case"ajax":case"html":e.selector?t=i("<div>").html(t).find(e.selector):p(t)&&(t.data(d)||t.data(d,i('<div class="'+d+'"></div>').insertAfter(t).hide()),t=t.show().detach(),e.wrap.bind("onReset",function(){i(this).find(t).length&&t.hide().replaceAll(t.data(d)).data(d,!1)}));break;case"image":t=e.tpl.image.replace("{href}",a);break;case"swf":t='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+a+'"></param>',r="",i.each(e.swf,function(e,i){t+='<param name="'+e+'" value="'+i+'"></param>',r+=" "+e+'="'+i+'"'}),t+='<embed src="'+a+'" type="application/x-shockwave-flash" width="100%" height="100%"'+r+"></embed></object>"}p(t)&&t.parent().is(e.inner)||e.inner.append(t),s.trigger("beforeShow"),e.inner.css("overflow","yes"===o?"scroll":"no"===o?"hidden":o),s._setDimension(),s.reposition(),s.isOpen=!1,s.coming=null,s.bindEvents(),s.isOpened?c.prevMethod&&s.transitions[c.prevMethod]():i(".fancybox-wrap").not(e.wrap).stop(!0).trigger("onReset").remove(),s.transitions[s.isOpened?e.nextMethod:e.openMethod](),s._preloadImages()}},_setDimension:function(){var e,t,n,o,a,r,l,c,d,p,h,u,y,b,w,v=s.getViewport(),x=0,k=!1,C=!1,O=s.wrap,T=s.skin,_=s.inner,S=s.current,j=S.width,P=S.height,W=S.minWidth,L=S.minHeight,M=S.maxWidth,E=S.maxHeight,R=S.scrolling,A=S.scrollOutside?S.scrollbarWidth:0,H=S.margin,D=g(H[1]+H[3]),I=g(H[0]+H[2]);if(O.add(T).add(_).width("auto").height("auto").removeClass("fancybox-tmp"),e=g(T.outerWidth(!0)-T.width()),t=g(T.outerHeight(!0)-T.height()),n=D+e,o=I+t,a=f(j)?(v.w-n)*g(j)/100:j,r=f(P)?(v.h-o)*g(P)/100:P,"iframe"===S.type){if(b=S.content,S.autoHeight&&1===b.data("ready"))try{b[0].contentWindow.document.location&&(_.width(a).height(9999),w=b.contents().find("body"),A&&w.css("overflow-x","hidden"),r=w.outerHeight(!0))}catch(z){}}else(S.autoWidth||S.autoHeight)&&(_.addClass("fancybox-tmp"),S.autoWidth||_.width(a),S.autoHeight||_.height(r),S.autoWidth&&(a=_.width()),S.autoHeight&&(r=_.height()),_.removeClass("fancybox-tmp"));if(j=g(a),P=g(r),d=a/r,W=g(f(W)?g(W,"w")-n:W),M=g(f(M)?g(M,"w")-n:M),L=g(f(L)?g(L,"h")-o:L),E=g(f(E)?g(E,"h")-o:E),l=M,c=E,S.fitToView&&(M=Math.min(v.w-n,M),E=Math.min(v.h-o,E)),u=v.w-D,y=v.h-I,S.aspectRatio?(j>M&&(j=M,P=g(j/d)),P>E&&(P=E,j=g(P*d)),W>j&&(j=W,P=g(j/d)),L>P&&(P=L,j=g(P*d))):(j=Math.max(W,Math.min(j,M)),S.autoHeight&&"iframe"!==S.type&&(_.width(j),P=_.height()),P=Math.max(L,Math.min(P,E))),S.fitToView)if(_.width(j).height(P),O.width(j+e),p=O.width(),h=O.height(),S.aspectRatio)for(;(p>u||h>y)&&j>W&&P>L&&!(x++>19);)P=Math.max(L,Math.min(E,P-10)),j=g(P*d),W>j&&(j=W,P=g(j/d)),j>M&&(j=M,P=g(j/d)),_.width(j).height(P),O.width(j+e),p=O.width(),h=O.height();else j=Math.max(W,Math.min(j,j-(p-u))),P=Math.max(L,Math.min(P,P-(h-y)));A&&"auto"===R&&r>P&&u>j+e+A&&(j+=A),_.width(j).height(P),O.width(j+e),p=O.width(),h=O.height(),k=(p>u||h>y)&&j>W&&P>L,C=S.aspectRatio?l>j&&c>P&&a>j&&r>P:(l>j||c>P)&&(a>j||r>P),i.extend(S,{dim:{width:m(p),height:m(h)},origWidth:a,origHeight:r,canShrink:k,canExpand:C,wPadding:e,hPadding:t,wrapSpace:h-T.outerHeight(!0),skinSpace:T.height()-P}),!b&&S.autoHeight&&P>L&&E>P&&!C&&_.height("auto")},_getPosition:function(e){var t=s.current,i=s.getViewport(),n=t.margin,o=s.wrap.width()+n[1]+n[3],a=s.wrap.height()+n[0]+n[2],r={position:"absolute",top:n[0],left:n[3]};return t.autoCenter&&t.fixed&&!e&&a<=i.h&&o<=i.w?r.position="fixed":t.locked||(r.top+=i.y,r.left+=i.x),r.top=m(Math.max(r.top,r.top+(i.h-a)*t.topRatio)),r.left=m(Math.max(r.left,r.left+(i.w-o)*t.leftRatio)),r},_afterZoomIn:function(){var e=s.current;e&&(s.isOpen=s.isOpened=!0,s.wrap.css("overflow","visible").addClass("fancybox-opened"),s.update(),(e.closeClick||e.nextClick&&s.group.length>1)&&s.inner.css("cursor","pointer").bind("click.fb",function(t){i(t.target).is("a")||i(t.target).parent().is("a")||(t.preventDefault(),s[e.closeClick?"close":"next"]())}),e.closeBtn&&i(e.tpl.closeBtn).appendTo(s.skin).bind("click.fb",function(e){e.preventDefault(),s.close()}),e.arrows&&s.group.length>1&&((e.loop||e.index>0)&&i(e.tpl.prev).appendTo(s.outer).bind("click.fb",s.prev),(e.loop||e.index<s.group.length-1)&&i(e.tpl.next).appendTo(s.outer).bind("click.fb",s.next)),s.trigger("afterShow"),e.loop||e.index!==e.group.length-1?s.opts.autoPlay&&!s.player.isActive&&(s.opts.autoPlay=!1,s.play()):s.play(!1))},_afterZoomOut:function(e){e=e||s.current,i(".fancybox-wrap").trigger("onReset").remove(),i.extend(s,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null}),s.trigger("afterClose",e)}}),s.transitions={getOrigPosition:function(){var e=s.current,t=e.element,n=e.orig,o={},a=50,r=50,l=e.hPadding,c=e.wPadding,d=s.getViewport();return!n&&e.isDom&&t.is(":visible")&&(n=t.find("img:first"),n.length||(n=t)),p(n)?(o=i(e.element).offset(),n.is("img")&&(a=n.outerWidth(),r=n.outerHeight())):(o.top=d.y+(d.h-r)*e.topRatio,o.left=d.x+(d.w-a)*e.leftRatio),("fixed"===s.wrap.css("position")||e.locked)&&(o.top-=d.y,o.left-=d.x),o={top:m(o.top-l*e.topRatio),left:m(o.left-c*e.leftRatio),width:m(a+c),height:m(r+l)}},step:function(e,t){var i,n,o,a=t.prop,r=s.current,l=r.wrapSpace,c=r.skinSpace;("width"===a||"height"===a)&&(i=t.end===t.start?1:(e-t.start)/(t.end-t.start),s.isClosing&&(i=1-i),n="width"===a?r.wPadding:r.hPadding,o=e-n,s.skin[a](g("width"===a?o:o-l*i)),s.inner[a](g("width"===a?o:o-l*i-c*i)))},zoomIn:function(){var e=s.current,t=e.pos,n=e.openEffect,o="elastic"===n,a=i.extend({opacity:1},t);delete a.position,o?(t=this.getOrigPosition(),e.openOpacity&&(t.opacity=.1)):"fade"===n&&(t.opacity=.1),s.wrap.css(t).animate(a,{duration:"none"===n?0:e.openSpeed,easing:e.openEasing,step:o?this.step:null,complete:s._afterZoomIn})},zoomOut:function(){var e=s.current,t=e.closeEffect,i="elastic"===t,n={opacity:.1};i&&(n=this.getOrigPosition(),e.closeOpacity&&(n.opacity=.1)),s.wrap.animate(n,{duration:"none"===t?0:e.closeSpeed,easing:e.closeEasing,step:i?this.step:null,complete:s._afterZoomOut})},changeIn:function(){var e,t=s.current,i=t.nextEffect,n=t.pos,o={opacity:1},a=s.direction,r=200;n.opacity=.1,"elastic"===i&&(e="down"===a||"up"===a?"top":"left","down"===a||"right"===a?(n[e]=m(g(n[e])-r),o[e]="+="+r+"px"):(n[e]=m(g(n[e])+r),o[e]="-="+r+"px")),"none"===i?s._afterZoomIn():s.wrap.css(n).animate(o,{duration:t.nextSpeed,easing:t.nextEasing,complete:s._afterZoomIn})},changeOut:function(){var e=s.previous,t=e.prevEffect,n={opacity:.1},o=s.direction,a=200;"elastic"===t&&(n["down"===o||"up"===o?"top":"left"]=("up"===o||"left"===o?"-":"+")+"="+a+"px"),e.wrap.animate(n,{duration:"none"===t?0:e.prevSpeed,easing:e.prevEasing,complete:function(){i(this).trigger("onReset").remove()}})}},s.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!d,fixed:!0},overlay:null,fixed:!1,el:i("html"),create:function(e){e=i.extend({},this.defaults,e),this.overlay&&this.close(),this.overlay=i('<div class="fancybox-overlay"></div>').appendTo(s.coming?s.coming.parent:e.parent),this.fixed=!1,e.fixed&&s.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(e){var t=this;e=i.extend({},this.defaults,e),this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(e),this.fixed||(a.bind("resize.overlay",i.proxy(this.update,this)),this.update()),e.closeClick&&this.overlay.bind("click.overlay",function(e){return i(e.target).hasClass("fancybox-overlay")?(s.isActive?s.close():t.close(),!1):void 0}),this.overlay.css(e.css).show()},close:function(){var e,t;a.unbind("resize.overlay"),this.el.hasClass("fancybox-lock")&&(i(".fancybox-margin").removeClass("fancybox-margin"),e=a.scrollTop(),t=a.scrollLeft(),this.el.removeClass("fancybox-lock"),a.scrollTop(e).scrollLeft(t)),i(".fancybox-overlay").remove().hide(),i.extend(this,{overlay:null,fixed:!1})},update:function(){var e,i="100%";this.overlay.width(i).height("100%"),l?(e=Math.max(t.documentElement.offsetWidth,t.body.offsetWidth),r.width()>e&&(i=r.width())):r.width()>a.width()&&(i=r.width()),this.overlay.width(i).height(r.height())},onReady:function(e,t){var n=this.overlay;i(".fancybox-overlay").stop(!0,!0),n||this.create(e),e.locked&&this.fixed&&t.fixed&&(n||(this.margin=r.height()>a.height()?i("html").css("margin-right").replace("px",""):!1),t.locked=this.overlay.append(t.wrap),t.fixed=!1),e.showEarly===!0&&this.beforeShow.apply(this,arguments)},beforeShow:function(e,t){var n,o;t.locked&&(this.margin!==!1&&(i("*").filter(function(){return"fixed"===i(this).css("position")&&!i(this).hasClass("fancybox-overlay")&&!i(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),n=a.scrollTop(),o=a.scrollLeft(),this.el.addClass("fancybox-lock"),a.scrollTop(n).scrollLeft(o)),this.open(e)},onUpdate:function(){this.fixed||this.update()},afterClose:function(e){this.overlay&&!s.coming&&this.overlay.fadeOut(e.speedOut,i.proxy(this.close,this))}},s.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(e){var t,n,o=s.current,a=o.title,r=e.type;if(i.isFunction(a)&&(a=a.call(o.element,o)),h(a)&&""!==i.trim(a)){switch(t=i('<div class="fancybox-title fancybox-title-'+r+'-wrap">'+a+"</div>"),r){case"inside":n=s.skin;break;case"outside":n=s.wrap;break;case"over":n=s.inner;break;default:n=s.skin,t.appendTo("body"),l&&t.width(t.width()),t.wrapInner('<span class="child"></span>'),s.current.margin[2]+=Math.abs(g(t.css("margin-bottom")))}t["top"===e.position?"prependTo":"appendTo"](n),t.addClass("show_title").addClass("show_title_animation")}}},i.fn.fancybox=function(e){var t,n=i(this),o=this.selector||"",a=function(a){var r,l,c=i(this).blur(),d=t;a.ctrlKey||a.altKey||a.shiftKey||a.metaKey||c.is(".fancybox-wrap")||(r=e.groupAttr||"data-fancybox-group",l=c.attr(r),l||(r="rel",l=c.get(0)[r]),l&&""!==l&&"nofollow"!==l&&(c=o.length?i(o):n,c=c.filter("["+r+'="'+l+'"]'),d=c.index(this)),e.index=d,s.open(c,e)!==!1&&a.preventDefault())};return e=e||{},t=e.index||0,o&&e.live!==!1?r.undelegate(o,"click.fb-start").delegate(o+":not('.fancybox-item, .fancybox-nav')","click.fb-start",a):n.unbind("click.fb-start").bind("click.fb-start",a),this.filter("[data-fancybox-start=1]").trigger("click"),this},r.ready(function(){var t,a;i.scrollbarWidth===n&&(i.scrollbarWidth=function(){var e=i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),t=e.children(),n=t.innerWidth()-t.height(99).innerWidth();return e.remove(),n}),i.support.fixedPosition===n&&(i.support.fixedPosition=function(){var e=i('<div style="position:fixed;top:20px;"></div>').appendTo("body"),t=20===e[0].offsetTop||15===e[0].offsetTop;return e.remove(),t}()),i.extend(s.defaults,{scrollbarWidth:i.scrollbarWidth(),fixed:i.support.fixedPosition,parent:i("body")}),t=i(e).width(),o.addClass("fancybox-lock-test"),a=i(e).width(),o.removeClass("fancybox-lock-test"),i("<style type='text/css'>.fancybox-margin{margin-right:"+(a-t)+"px;}</style>").appendTo("head")})}(window,document,jQuery),function(e){var t=e.fancybox;t.helpers.buttons={defaults:{skipSingle:!1,position:"top",tpl:'<div id="fancybox-buttons"><ul><li><a class="btnPrev" title="Previous" href="javascript:;"></a></li><li><a class="btnPlay" title="Start slideshow" href="javascript:;"></a></li><li><a class="btnNext" title="Next" href="javascript:;"></a></li><li><a class="btnToggle" title="Toggle size" href="javascript:;"></a></li><li><a class="btnClose" title="Close" href="javascript:;"></a></li></ul></div>'},list:null,buttons:null,beforeLoad:function(e,t){return e.skipSingle&&t.group.length<2?(t.helpers.buttons=!1,void(t.closeBtn=!0)):void(t.margin["bottom"===e.position?2:0]+=30)},onPlayStart:function(){this.buttons&&this.buttons.play.attr("title","Pause slideshow").addClass("btnPlayOn")},onPlayEnd:function(){this.buttons&&this.buttons.play.attr("title","Start slideshow").removeClass("btnPlayOn")},afterShow:function(i,n){var o=this.buttons;o||(this.list=e(i.tpl).addClass(i.position).appendTo("body"),o={prev:this.list.find(".btnPrev").click(t.prev),next:this.list.find(".btnNext").click(t.next),play:this.list.find(".btnPlay").click(t.play),toggle:this.list.find(".btnToggle").click(t.toggle),close:this.list.find(".btnClose").click(t.close)}),n.index>0||n.loop?o.prev.removeClass("btnDisabled"):o.prev.addClass("btnDisabled"),n.loop||n.index<n.group.length-1?(o.next.removeClass("btnDisabled"),o.play.removeClass("btnDisabled")):(o.next.addClass("btnDisabled"),o.play.addClass("btnDisabled")),this.buttons=o,this.onUpdate(i,n)},onUpdate:function(e,t){var i;this.buttons&&(i=this.buttons.toggle.removeClass("btnDisabled btnToggleOn"),t.canShrink?i.addClass("btnToggleOn"):t.canExpand||i.addClass("btnDisabled"))},beforeClose:function(){this.list&&this.list.remove(),this.list=null,this.buttons=null}}}(jQuery),function(e){var t=e.fancybox;t.helpers.thumbs={defaults:{width:50,height:50,position:"bottom",source:function(t){var i;return t.element&&(i=e(t.element).find("img").attr("src")),!i&&"image"===t.type&&t.href&&(i=t.href),i}},wrap:null,list:null,width:0,init:function(t,i){var n,o=this,a=t.width,r=t.height,s=t.source;n="";for(var l=0;l<i.group.length;l++)n+='<li><a style="width:'+a+"px;height:"+r+'px;" href="javascript:jQuery.fancybox.jumpto('+l+');"></a></li>';this.wrap=e('<div id="fancybox-thumbs"></div>').addClass(t.position).appendTo("body"),this.list=e("<ul>"+n+"</ul>").appendTo(this.wrap),e.each(i.group,function(t){var n=s(i.group[t]);n&&e("<img />").load(function(){var i,n,s,l=this.width,c=this.height;o.list&&l&&c&&(i=l/a,n=c/r,s=o.list.children().eq(t).find("a"),i>=1&&n>=1&&(i>n?(l=Math.floor(l/n),c=r):(l=a,c=Math.floor(c/i))),e(this).css({width:l,height:c,top:Math.floor(r/2-c/2),left:Math.floor(a/2-l/2)}),s.width(a).height(r),e(this).hide().appendTo(s).fadeIn(300))}).attr("src",n)}),this.width=this.list.children().eq(0).outerWidth(!0),this.list.width(this.width*(i.group.length+1)).css("left",Math.floor(.5*e(window).width()-(i.index*this.width+.5*this.width)))},beforeLoad:function(e,t){return t.group.length<2?void(t.helpers.thumbs=!1):void(t.margin["top"===e.position?0:2]+=e.height+15)},afterShow:function(e,t){this.list?this.onUpdate(e,t):this.init(e,t),this.list.children().removeClass("active").eq(t.index).addClass("active")},onUpdate:function(t,i){this.list&&this.list.stop(!0).animate({left:Math.floor(.5*e(window).width()-(i.index*this.width+.5*this.width))},150)},beforeClose:function(){this.wrap&&this.wrap.remove(),this.wrap=null,this.list=null,this.width=0}}}(jQuery),function(e){"use strict";var t=e.fancybox,i=function(t,i,n){return n=n||"","object"===e.type(n)&&(n=e.param(n,!0)),e.each(i,function(e,i){t=t.replace("$"+e,i||"")}),n.length&&(t+=(t.indexOf("?")>0?"&":"?")+n),t};t.helpers.media={defaults:{youtube:{matcher:/(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"opaque",enablejsapi:1},type:"iframe",url:"//www.youtube.com/embed/$3"},vimeo:{matcher:/(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},type:"iframe",url:"//player.vimeo.com/video/$1"},metacafe:{matcher:/metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,params:{autoPlay:"yes"},type:"swf",url:function(t,i,n){return n.swf.flashVars="playerVars="+e.param(i,!0),"//www.metacafe.com/fplayer/"+t[1]+"/.swf"}},dailymotion:{matcher:/dailymotion.com\/video\/(.*)\/?(.*)/,params:{additionalInfos:0,autoStart:1},type:"swf",url:"//www.dailymotion.com/swf/video/$1"},twitvid:{matcher:/twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,params:{autoplay:0},type:"iframe",url:"//www.twitvid.com/embed.php?guid=$1"},twitpic:{matcher:/twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,type:"image",url:"//twitpic.com/show/full/$1/"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},google_maps:{matcher:/maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,type:"iframe",url:function(e){return"//maps.google."+e[1]+"/"+e[3]+e[4]+"&output="+(e[4].indexOf("layer=c")>0?"svembed":"embed")}}},beforeLoad:function(t,n){var o,a,r,s,l=n.href||"",c=!1;for(o in t)if(t.hasOwnProperty(o)&&(a=t[o],r=l.match(a.matcher))){c=a.type,s=e.extend(!0,{},a.params,n[o]||(e.isPlainObject(t[o])?t[o].params:null)),l="function"===e.type(a.url)?a.url.call(this,r,s,n):i(a.url,r,s);break}c&&(n.href=l,n.type=c,n.autoHeight=!1)}}}(jQuery);

var imgLiquid=imgLiquid||{VER:"0.9.944"};imgLiquid.bgs_Available=!1,imgLiquid.bgs_CheckRunned=!1,imgLiquid.injectCss=".imgLiquid img {visibility:hidden}",function(i){function t(){if(!imgLiquid.bgs_CheckRunned){imgLiquid.bgs_CheckRunned=!0;var t=i('<span style="background-size:cover" />');i("body").append(t),!function(){var i=t[0];if(i&&window.getComputedStyle){var e=window.getComputedStyle(i,null);e&&e.backgroundSize&&(imgLiquid.bgs_Available="cover"===e.backgroundSize)}}(),t.remove()}}i.fn.extend({imgLiquid:function(e){this.defaults={fill:!0,verticalAlign:"center",horizontalAlign:"center",useBackgroundSize:!0,useDataHtmlAttr:!0,responsive:!0,delay:0,fadeInTime:0,removeBoxBackground:!0,hardPixels:!0,responsiveCheckTime:500,timecheckvisibility:500,onStart:null,onFinish:null,onItemStart:null,onItemFinish:null,onItemError:null},t();var a=this;return this.options=e,this.settings=i.extend({},this.defaults,this.options),this.settings.onStart&&this.settings.onStart(),this.each(function(t){function e(){-1===u.css("background-image").indexOf(encodeURI(c.attr("src")))&&u.css({"background-image":'url("'+encodeURI(c.attr("src"))+'")'}),u.css({"background-size":g.fill?"cover":"contain","background-position":(g.horizontalAlign+" "+g.verticalAlign).toLowerCase(),"background-repeat":"no-repeat"}),i("a:first",u).css({display:"block",width:"100%",height:"100%"}),i("img",u).css({display:"none"}),g.onItemFinish&&g.onItemFinish(t,u,c),u.addClass("imgLiquid_bgSize"),u.addClass("imgLiquid_ready"),l()}function d(){function e(){c.data("imgLiquid_error")||c.data("imgLiquid_loaded")||c.data("imgLiquid_oldProcessed")||(u.is(":visible")&&c[0].complete&&c[0].width>0&&c[0].height>0?(c.data("imgLiquid_loaded",!0),setTimeout(r,t*g.delay)):setTimeout(e,g.timecheckvisibility))}if(c.data("oldSrc")&&c.data("oldSrc")!==c.attr("src")){var a=c.clone().removeAttr("style");return a.data("imgLiquid_settings",c.data("imgLiquid_settings")),c.parent().prepend(a),c.remove(),c=a,c[0].width=0,setTimeout(d,10),void 0}return c.data("imgLiquid_oldProcessed")?(r(),void 0):(c.data("imgLiquid_oldProcessed",!1),c.data("oldSrc",c.attr("src")),i("img:not(:first)",u).css("display","none"),u.css({overflow:"hidden"}),c.fadeTo(0,0).removeAttr("width").removeAttr("height").css({visibility:"visible","max-width":"none","max-height":"none",width:"auto",height:"auto",display:"block"}),c.on("error",n),c[0].onerror=n,e(),o(),void 0)}function o(){(g.responsive||c.data("imgLiquid_oldProcessed"))&&c.data("imgLiquid_settings")&&(g=c.data("imgLiquid_settings"),u.actualSize=u.get(0).offsetWidth+u.get(0).offsetHeight/1e4,u.sizeOld&&u.actualSize!==u.sizeOld&&r(),u.sizeOld=u.actualSize,setTimeout(o,g.responsiveCheckTime))}function n(){c.data("imgLiquid_error",!0),u.addClass("imgLiquid_error"),g.onItemError&&g.onItemError(t,u,c),l()}function s(){var i={};if(a.settings.useDataHtmlAttr){var t=u.attr("data-imgLiquid-fill"),e=u.attr("data-imgLiquid-horizontalAlign"),d=u.attr("data-imgLiquid-verticalAlign");("true"===t||"false"===t)&&(i.fill=Boolean("true"===t)),void 0===e||"left"!==e&&"center"!==e&&"right"!==e&&-1===e.indexOf("%")||(i.horizontalAlign=e),void 0===d||"top"!==d&&"bottom"!==d&&"center"!==d&&-1===d.indexOf("%")||(i.verticalAlign=d)}return imgLiquid.isIE&&a.settings.ieFadeInDisabled&&(i.fadeInTime=0),i}function r(){var i,e,a,d,o,n,s,r,m=0,h=0,f=u.width(),v=u.height();void 0===c.data("owidth")&&c.data("owidth",c[0].width),void 0===c.data("oheight")&&c.data("oheight",c[0].height),g.fill===f/v>=c.data("owidth")/c.data("oheight")?(i="100%",e="auto",a=Math.floor(f),d=Math.floor(f*(c.data("oheight")/c.data("owidth")))):(i="auto",e="100%",a=Math.floor(v*(c.data("owidth")/c.data("oheight"))),d=Math.floor(v)),o=g.horizontalAlign.toLowerCase(),s=f-a,"left"===o&&(h=0),"center"===o&&(h=.5*s),"right"===o&&(h=s),-1!==o.indexOf("%")&&(o=parseInt(o.replace("%",""),10),o>0&&(h=.01*s*o)),n=g.verticalAlign.toLowerCase(),r=v-d,"left"===n&&(m=0),"center"===n&&(m=.5*r),"bottom"===n&&(m=r),-1!==n.indexOf("%")&&(n=parseInt(n.replace("%",""),10),n>0&&(m=.01*r*n)),g.hardPixels&&(i=a,e=d),c.css({width:i,height:e,"margin-left":Math.floor(h),"margin-top":Math.floor(m)}),c.data("imgLiquid_oldProcessed")||(c.fadeTo(g.fadeInTime,1),c.data("imgLiquid_oldProcessed",!0),g.removeBoxBackground&&u.css("background-image","none"),u.addClass("imgLiquid_nobgSize"),u.addClass("imgLiquid_ready")),g.onItemFinish&&g.onItemFinish(t,u,c),l()}function l(){t===a.length-1&&a.settings.onFinish&&a.settings.onFinish()}var g=a.settings,u=i(this),c=i("img:first",u);return c.length?(c.data("imgLiquid_settings")?(u.removeClass("imgLiquid_error").removeClass("imgLiquid_ready"),g=i.extend({},c.data("imgLiquid_settings"),a.options)):g=i.extend({},a.settings,s()),c.data("imgLiquid_settings",g),g.onItemStart&&g.onItemStart(t,u,c),imgLiquid.bgs_Available&&g.useBackgroundSize?e():d(),void 0):(n(),void 0)})}})}(jQuery),!function(){var i=imgLiquid.injectCss,t=document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",e.styleSheet?e.styleSheet.cssText=i:e.appendChild(document.createTextNode(i)),t.appendChild(e)}();

/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 OA Wu Design
 */

function getPictures (url, done) {
  // $.ajax ({
  //   url: url ? url : window.apis.getPicturesUrl,
  //   data: {},
  //   async: true, cache: false, dataType: 'json', type: 'GET',
  //   beforeSend: function () {}
  // })
  // .done (function (result) {
  //   done (!result.status ? { status: true, pictures: window.pictures, pagination: '' } : result);
  // })
  // .fail (function (result) {
  //   done ({ status: true, pictures: window.pictures, pagination: '' });
  // })
  // .complete (function (result) {});
  done ({ status: true, pictures: window.pictures, pagination: '' });
}
function initPictures (url, $balls) {
  getPictures (url, function (result) {
    $balls.nextAll ('ul').remove ();
    $balls.empty ().append (result.pictures.map (function (t) {
          return $('<div />').addClass ('ball').append (
            $('<a />').addClass ('border').addClass ('i_c').attr ('href', window.url + 'content.html#' + t.token).append (
              $('<img />').addClass ('cover').attr ('src', t.cover)).imgLiquid ({verticalAlign: 'center'})).append (
            $('<div />').addClass ('btns').addClass ('n3').append (
              $('<a />').attr ('title', '取得鏈結網址').addClass ('icon-link').data ('url', window.url + 'content.html#' + t.token)).append (
              $('<a />').attr ('title', '檢視地圖位置').addClass ('icon-location').data ('url', window.url + 'location.html#' + t.token).attr ('disabled', t.location == 1 ? false : true)).append (
              $('<a />').attr ('title', '分享至臉書').addClass ('icon-share2').data ('url', window.url + 'content.html#' + t.token))).append (
            $('<div />').addClass ('views').addClass ('icon-eye2').text (t.pv)).append (
            t.rotated ? $('<div />').addClass ('rotate').addClass ('icon-3d_rotation') : null);
        })).add ($(result.pagination)).prependTo (window.container);
    window.hideLoading ();
  });
}

$(function () {
  var $url = $('<input />').attr ('type', 'text').addClass ('url').click (function () { $(this).select (); });
  var $copyMsg = $('<div />').addClass ('m').removeClass ('s');
  var $copyButton = $('<button />').addClass ('copy').text ('複製').click (function () {
    window.getSelection ().removeAllRanges ();
    var range = document.createRange ();
    range.selectNode ($url.get (0));
    window.getSelection ().addRange (range);

    try {
      if (document.execCommand ('copy'))
        $copyMsg.text ('已經複製囉！').addClass ('s');
      else throw 'GG.. 複製失敗..';
    } catch (err) {
      $copyMsg.text (err).addClass ('s');
    }
    window.getSelection ().removeAllRanges ();
  });
  var $cx = $('<div />').addClass ('icon-x').addClass ('d').click (function () {
    $linkPanel.removeClass ('s');
    $url.val ('');
    $copyMsg.text ('').removeClass ('s');
  });
  var $linkPanel = $('<div />').attr ('id', 'link_panel').append ($('<div />').addClass ('c').click (function () {
    $cx.click ();
  })).append ($('<div />').addClass ('pl').append ($('<div />').addClass ('l').append ($('<div />').append ($url).append ($copyButton)).append ($copyMsg)).append ($cx));
  window.container.append ($linkPanel);

  var $balls = $('<div />').addClass ('balls');
  initPictures ('', $balls);

  window.container.on ('click', '.pagination a', function () {
    window.showLoading ();
    initPictures ($(this).attr ('href'), $balls);
    return false;
  });
  window.container.on ('click', '.icon-link', function () {
    $linkPanel.addClass ('s');
    $url.val ($(this).data ('url'));
    $copyMsg.text ('已經複製囉！').removeClass ('s');
  });
  window.container.on ('click', '.icon-share2', function () {
    window.open ('https://www.facebook.com/sharer/sharer.php?u=' + $(this).data ('url'), '分享', 'scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=' + (window.screen ? Math.round(screen.width / 2 - 275) : 100));
  });
  window.container.on ('click', '.icon-location', function () {
    if (!$(this).attr ('disabled'))
      $.fancybox ({
          href: $(this).data ('url'),
          type: 'iframe',
          padding: 0,
          margin: 30,
          width: '100%',
          maxWidth: '1200',
      });
  });
});