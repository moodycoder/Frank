var FSS;
FSS=function(){function f(a,d){this.element=a;"[object Object]"===Object.prototype.toString.call(d)?this.options=d:this.options={};this.init();this.gotoslide(0);this.autoplay&&this.play()}var g,c,h,i,e,b;f.prototype.pause=function(){clearTimeout(this.interval)};f.prototype.play=function(){clearTimeout(this.interval);this.interval=setTimeout(g,this.duration,this)};f.prototype.next=function(){this.gotoslide(this.currentIndex<this.slides.length-1?this.currentIndex+1:0)};f.prototype.gotoslide=function(a){var d;
this.currentIndex!==a&&((d=this.element.parentNode.querySelector(".visible"))&&d===this.slideA?(this.slideB.style.backgroundPosition="0px "+-1*this.options.height*a+"px",this.slideA.className=this.slideA.className.replace(/(\s|^)visible(\s|$)/,""),this.slideB.className+=" visible"):(this.slideA.style.backgroundPosition="0px "+-1*this.options.height*a+"px",this.slideB.className=this.slideB.className.replace(/(\s|^)visible(\s|$)/,""),this.slideA.className+=" visible"),(d=this.navigation.querySelector(".active"))&&
d.removeAttribute("class"),d=document.createAttribute("class"),d.nodeValue="active",this.navigation.childNodes.item(a).setAttributeNode(d),d=-1===this.currentIndex?0:this.currentIndex,this.slides[d].el.className=this.slides[d].el.className.replace(/(\s|^)active(\s|$)/,""),this.slides[a].el.className+=" active",this.currentIndex=a)};f.prototype.init=function(){var a,d,j,k,l;d=this;this.options.width||(this.options.width=this.element.offsetWidth);this.options.height||(this.options.height=this.element.offsetHeight);
this.autoplay=!0;this.duration=5E3;this.currentIndex=-1;this.element.className.match(/(\s|^)fss(\s|$)/)||(this.element.className+=" fss");if(this.caption=this.element.querySelector(".captions")){a=this.caption.firstChild;k=0;for(this.slides=[];a;)a&&3!==a.nodeType&&this.slides.push({ndx:k++,el:a}),a=a.nextSibling;this.container=c("div","slide-container");this.slideA=c("div","slide-a visible");this.slideB=c("div","slide-b");this.element.insertBefore(this.container,this.caption);this.container.appendChild(this.slideA);
this.container.appendChild(this.slideB);this.slideA.style.width=this.slideB.style.width=this.options.width+"px";this.slideA.style.height=this.slideB.style.height=this.options.height+"px";this.navigation=c("ul","fss-nav");j=this.slides;a=k=0;for(l=j.length;k<l;a=++k)j=c("li"),j.appendChild(document.createTextNode(""+(a+1))),this.navigation.appendChild(j),j.onclick=b(j,this);this.container.appendChild(this.navigation);this.container.onmouseover=function(a){return e(a,d)};this.container.onmouseout=function(a){return i(a,
d)}}};c=function(a,d){var b,e;e=document.createElement(a);if(!d)return e;b=document.createAttribute("class");b.nodeValue=d;e.setAttributeNode(b);return e};h=function(a,d){if(a===d)return!1;for(;a&&a!==d;)a=a.parentNode;return a===d};g=function(a){a&&(a.next(),a.play())};b=function(a,d){return function(){var b;d.pause();for(b=0;d.navigation.childNodes.item(b);){if(d.navigation.childNodes.item(b)===a){d.gotoslide(b);break}b++}}};e=function(a,d){if(a){if(!h(a.target,d.container))return a.cancelBubble=
!0,a.stopPropagation(),!1;d.pause();d.navigation.className.match(/(\s|^)active(\s|$)/)||(d.navigation.className+=" active")}};i=function(a,d){if(h(a.relatedTarget,d.container))return a.cancelBubble=!0,a.stopPropagation(),!1;d.play();d.navigation.className.match(/(\s|^)active(\s|$)/)&&(d.navigation.className=d.navigation.className.replace(/(\s|^)active(\s|$)/,""))};return f}();var FLB;
FLB=function(){function f(e,b){this.element=e;"[object Object]"===Object.prototype.toString.call(b)?this.options=b:this.options={};this.options.resizeImage=!1;this.init()}var g,c,h,i;f.prototype.init=function(){var e;e=this;this.element.onclick=function(b){return g(b,e)}};f.prototype.createOverlay=function(e){var b;b=this;this.overlay=document.createElement("div");this.overlay.setAttribute("id","flb-overlay");this.overlay.innerHTML='<div id="flb-container"><a href="#" title="Close" class="closingElement">&nbsp;</a></div><div id="flb-content"><a id="flb-image" class="closingElement" href="#" title="Close"></a><a id="flb-close" class="closingElement" href="#" title="Close">&nbsp;</a></div>';
document.getElementsByTagName("body")[0].appendChild(this.overlay);this.container=document.getElementById("flb-content");this.container.style.width="100px";this.container.style.height="100px";this.container.style.margin="-50px 0 0 -50px";this.container.onclick=this.overlay.onclick=function(a){return c(a,b)};this.imgContainer=document.getElementById("flb-image");this.imgContainer.style.background="url("+e+") no-repeat 50% 50%";this.image=new Image;this.image.onload=function(a){return h(a,b)};this.image.src=
e};h=function(e,b){var a,d,c;b.options.resizeImage?(c=document.documentElement.clientHeight-40,b.image.height<c?(a=b.image.height,d=b.image.width):(a=c,d=Math.round(c*b.image.width/b.image.height),b.image.height=a,b.image.width=d)):(a=b.image.height,d=b.image.width);setTimeout(function(){return i(b.container,d,a)},600)};i=function(e,b,a){e.style.width=b+"px";e.style.height=a+"px";e.style.margin="-"+(a+28)/2+"px 0 0 -"+b/2+"px";e.setAttribute("class","active")};g=function(e,b){b.createOverlay(e.target.getAttribute("href"));
e.cancelBubble=!0;e.stopPropagation();return!1};c=function(e,b){b.container.setAttribute("class","");document.getElementsByTagName("body")[0].removeChild(b.overlay)};return f}();
window.onload=function(){var f,g,c,h,i,e,b,a;if(document.querySelector){h=function(a,b){return function(){var e,c,f,g,h;e=a.getAttribute("rel");a.className+=" active";f=0;for(g=b.length;f<g;f++)c=b[f],c.className.match(/(\s|^)active(\s|$)/)&&(c.className=c.className.replace(/(\s|^)active(\s|$)/,""));f=document.querySelectorAll("#projects_list li");g=0;for(h=f.length;g<h;g++)c=f[g],c.className.match(/(\s|^)deselected(\s|$)/)&&(c.className=c.className.replace(/(\s|^)deselected(\s|$)/,"")),"all"!==e&&
!c.className.match(RegExp("(\\s|^)"+e+"(\\s|$)"))&&(c.className.match(/(\s|^)deselected(\s|$)/)||(c.className+=" deselected"))}};i=function(a,b,c,e){var g;g=c?a.querySelector(c).firstChild.nodeValue:a.firstChild.nodeValue;return function(){f(b,g,e);a.getAttribute("target")?window.open(this.href,this.getAttribute("target")):setTimeout('document.location = "'+a.href+'"',100);return!1}};e=function(a,b,c,e){var g,f,h;if(a){f=0;for(h=a.length;f<h;f++)g=a[f],g.onclick=i(g,b,c,e);return!1}};f=function(a,
b,c,e){try{_gaq.push(["_trackEvent",a,b,c,e])}catch(f){print(f)}};c=document.querySelectorAll("#hero_slideshow .slideshow");if(c.length){b=0;for(a=c.length;b<a;b++)g=c[b],new FSS(g,{width:725,height:210})}c=document.querySelectorAll("a[rel=simplebox]");if(c.length){b=0;for(a=c.length;b<a;b++)g=c[b],new FLB(g,{})}if(document.querySelector("#p72")){c=document.querySelectorAll("#projects_navigation dd");b=0;for(a=c.length;b<a;b++)g=c[b],g.onclick=h(g,c)}(h=document.querySelector("#post-tweet"))&&(h.onclick=
function(){var a,b;f("Tweet Post",this.firstChild.nodeValue,document.title);a=window.screen.width/2-275;b=window.screen.height/2-235;window.open(this.href,this.getAttribute("target"),"width=550, height=470, location=0, left="+a+", top="+b);return!1});e(document.querySelectorAll("#menu-primary li a"),"Top Nav",null,document.title);e(document.querySelectorAll("#bio_pic"),"Bio Pic",null,document.title);e(document.querySelectorAll("#previous_post a"),"Previous Post",".arrow",document.title);e(document.querySelectorAll("#download_follow a.twitter, #download_follow a.rss"),
"Projects Follow",null,document.title);e(document.querySelectorAll("#other_projects #projects_list li a"),"Other Projects","small",document.title);e(document.querySelectorAll("#footer_main_promo"),"Footer Promo",".header",document.title);e(document.querySelectorAll("#text-12 .recommended a"),"Recommended",null,document.title);e(document.querySelectorAll("#page-footer #twitter-follow a.button"),"Footer Twitter",null,document.title)}};
window.error=function(f,g,c){_gaq.push(["_trackEvent","Exceptions","Application","["+g+" ("+c+")] "+f,null,!0])};
