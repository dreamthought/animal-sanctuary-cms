import{s as l,n as r}from"../chunks/scheduler.S4wXxuDW.js";import{S as d,i as m,s as h,e as f,h as u,d as o,c as p,a as w,g,b as v,f as n}from"../chunks/index.e1JFX3dS.js";function y(c){let a,e,i=`<h1>SHOP HERE TO HELP THE ANIMALS</h1> <div class="container"><p class="text-center"><b>Whenever you shop with one of the links below, you automatically help The Animal Sanctuary.
        So please, indulge in lots and lots of wonderful retail therapy!!</b></p></div> <div class="row"><div class="col-md-6"><div class="card custom-card-shop"><img src=" images/shop/logo-animal-sanctuary-shop-new.jpg" alt="The Animal Sanctuary logo" class="card-img"/> <div class="card-img-overlay"><div class="card-body custom-card-body-shop"><h4 class="card-title custom-card-title-shop">Online Shop</h4> <p class="card-text custom-card-text-shop">Yes, our own on-line shop! 100% of the profits from these products go to the animals.</p> <a href="shop" class="btn custom-btn-shop">Coming Soon</a></div></div></div></div> <div class="col-md-6"><div class="card custom-card-shop"><img src=" images/shop/logo-trademe-new.jpg" alt="The Animal Sanctuary logo" class="card-img"/> <div class="card-img-overlay"><div class="card-body custom-card-body-shop"><h4 class="card-title custom-card-title-shop">Trade Me Store</h4> <p class="card-text custom-card-text-shop">100% of the sales from our Trade Me site go to the animals. (contact us if you have items for us to sell)</p> <a href="shop" class="btn custom-btn-shop">Shop Now</a></div></div></div></div></div> <hr/> <div class="container text-center mt-3"><p class="fs-3 pt-2"><b>We welcome donations for our Animals Op Shop Store</b></p></div> <div class="container mt-3"><iframe id="JotFormIFrame-240447944809062" title="Animals Op Shop - Trade Me Donation Form" onload="window.parent.scrollTo(0,0)" allowtransparency="true" allowfullscreen="true" allow="geolocation; microphone; camera" src="https://form.jotform.com/240447944809062" frameborder="0" style="min-width:100%;max-width:100%;height:539px;border:none;" scrolling="no"></iframe> <script type="text/javascript">var ifr = document.getElementById("JotFormIFrame-240447944809062");
  if (ifr) {
    var src = ifr.src;
    var iframeParams = [];
    if (window.location.href && window.location.href.indexOf("?") > -1) {
      iframeParams = iframeParams.concat(window.location.href.substr(window.location.href.indexOf("?") + 1).split('&'));
    }
    if (src && src.indexOf("?") > -1) {
      iframeParams = iframeParams.concat(src.substr(src.indexOf("?") + 1).split("&"));
      src = src.substr(0, src.indexOf("?"))
    }
    iframeParams.push("isIframeEmbed=1");
    ifr.src = src + "?" + iframeParams.join('&');
  }
  window.handleIFrameMessage = function(e) {
    if (typeof e.data === 'object') { return; }
    var args = e.data.split(":");
    if (args.length > 2) { iframe = document.getElementById("JotFormIFrame-" + args[(args.length - 1)]); } else { iframe = document.getElementById("JotFormIFrame"); }
    if (!iframe) { return; }
    switch (args[0]) {
      case "scrollIntoView":
        iframe.scrollIntoView();
        break;
      case "setHeight":
        iframe.style.height = args[1] + "px";
        if (!isNaN(args[1]) && parseInt(iframe.style.minHeight) > parseInt(args[1])) {
          iframe.style.minHeight = args[1] + "px";
        }
        break;
      case "collapseErrorPage":
        if (iframe.clientHeight > window.innerHeight) {
          iframe.style.height = window.innerHeight + "px";
        }
        break;
      case "reloadPage":
        window.location.reload();
        break;
      case "loadScript":
        if( !window.isPermitted(e.origin, ['jotform.com', 'jotform.pro']) ) { break; }
        var src = args[1];
        if (args.length > 3) {
            src = args[1] + ':' + args[2];
        }
        var script = document.createElement('script');
        script.src = src;
        script.type = 'text/javascript';
        document.body.appendChild(script);
        break;
      case "exitFullscreen":
        if      (window.document.exitFullscreen)        window.document.exitFullscreen();
        else if (window.document.mozCancelFullScreen)   window.document.mozCancelFullScreen();
        else if (window.document.mozCancelFullscreen)   window.document.mozCancelFullScreen();
        else if (window.document.webkitExitFullscreen)  window.document.webkitExitFullscreen();
        else if (window.document.msExitFullscreen)      window.document.msExitFullscreen();
        break;
    }
    var isJotForm = (e.origin.indexOf("jotform") > -1) ? true : false;
    if(isJotForm && "contentWindow" in iframe && "postMessage" in iframe.contentWindow) {
      var urls = {"docurl":encodeURIComponent(document.URL),"referrer":encodeURIComponent(document.referrer)};
      iframe.contentWindow.postMessage(JSON.stringify({"type":"urls","value":urls}), "*");
    }
  };
  window.isPermitted = function(originUrl, whitelisted_domains) {
    var url = document.createElement('a');
    url.href = originUrl;
    var hostname = url.hostname;
    var result = false;
    if( typeof hostname !== 'undefined' ) {
      whitelisted_domains.forEach(function(element) {
          if( hostname.slice((-1 * element.length - 1)) === '.'.concat(element) ||  hostname === element ) {
              result = true;
          }
      });
      return result;
    }
  };
  if (window.addEventListener) {
    window.addEventListener("message", handleIFrameMessage, false);
  } else if (window.attachEvent) {
    window.attachEvent("onmessage", handleIFrameMessage);
  }<\/script></div>`;return{c(){a=h(),e=f("div"),e.innerHTML=i,this.h()},l(t){u("svelte-16z0q21",document.head).forEach(o),a=p(t),e=w(t,"DIV",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-igbsw"&&(e.innerHTML=i),this.h()},h(){document.title="The Animal Sanctuary - Shop",v(e,"class","container custom-content shadow-lg")},m(t,s){n(t,a,s),n(t,e,s)},p:r,i:r,o:r,d(t){t&&(o(a),o(e))}}}class F extends d{constructor(a){super(),m(this,a,null,y,l,{})}}export{F as component};
