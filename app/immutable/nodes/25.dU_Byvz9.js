import{s as l,n as o}from"../chunks/scheduler.S4wXxuDW.js";import{S as d,i as m,s as h,e as p,h as f,d as r,c as u,a as w,g,b as v,f as i}from"../chunks/index.g_WIspXK.js";function b(c){let s,e,n=`<h1>SHOP HERE TO HELP THE ANIMALS</h1> <div class="container"><p class="text-center"><b>Whenever you shop with one of the links below, you automatically help The Animal Sanctuary.
        So please, indulge in lots and lots of wonderful retail therapy!!</b></p></div> <div class="row"><div class="col-md-6"><div class="card custom-card-shop"><img src=" images/shop/onlineopshop.jpg" alt="The Animal&#39;s Online Op Shop logo" class="card-img"/> <div class="card-img-overlay"><div class="card-body custom-card-body-shop"><h4 class="card-title custom-card-title-shop">The Animal&#39;s Online Op Shop</h4> <p class="card-text custom-card-text-shop">100% of the sales from The Animal&#39;s Online Op Shop go to the animals.</p> <button class="btn custom-btn-shop-soon">Coming Soon</button> <a href="#opshopform" class="btn custom-btn-shop">Donate an Item</a></div></div></div></div> <div class="col-md-6"><div class="card custom-card-shop"><img src=" images/shop/petsy.jpg" alt="PEtsy Online Shop logo" class="card-img"/> <div class="card-img-overlay"><div class="card-body custom-card-body-shop"><h4 class="card-title custom-card-title-shop">PEtsy Shopping Portal</h4> <p class="card-text custom-card-text-shop">Your gateway to heaps of wonderful shopping choices that will help save the animals!</p> <button class="btn custom-btn-shop-soon">Coming Soon</button></div></div></div></div></div> <hr/> <div class="container text-center mt-3" id="opshopform"><p class="fs-3 pt-2"><b>We welcome donations for our Animals Op Shop Store</b></p></div> <hr/> <div class="container mt-3"><iframe id="JotFormIFrame-240447944809062" title="The Animals Online Op Shop - Donate an Item" onload="window.parent.scrollTo(0,0)" allowtransparency="true" allow="geolocation; microphone; camera; fullscreen" src="https://form.jotform.com/240447944809062" frameborder="0" style="min-width:100%;max-width:100%;height:539px;border:none;" scrolling="no"></iframe> <script type="text/javascript">var ifr = document.getElementById("JotFormIFrame-240447944809062");
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
    }<\/script></div>`;return{c(){s=h(),e=p("div"),e.innerHTML=n,this.h()},l(t){f("svelte-13kr8ce",document.head).forEach(r),s=u(t),e=w(t,"DIV",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1bq3zfh"&&(e.innerHTML=n),this.h()},h(){document.title="Shop - Online Op Shop and PEtsy Store | The Animal Sanctuary",v(e,"class","container custom-content shadow-lg")},m(t,a){i(t,s,a),i(t,e,a)},p:o,i:o,o,d(t){t&&(r(s),r(e))}}}class S extends d{constructor(s){super(),m(this,s,null,b,l,{})}}export{S as component};
