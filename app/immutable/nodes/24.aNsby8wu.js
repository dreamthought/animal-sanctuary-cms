import{s as c,n as a}from"../chunks/scheduler.S4wXxuDW.js";import{S as m,i as d,s as f,e as u,h,d as i,c as w,a as p,g,b as v,f as s}from"../chunks/index.g_WIspXK.js";function x(l){let r,e,o=`<h1>DONATE AN ITEM TO THE ANIMALS ONLINE OP SHOP</h1> <div class="container"><p class="text-center"><b>Thank you for your generous offer to donate a quality item to list in “The Animals Online Op Shop” store! 
          <br/>The proceeds from this sale will help us continue the important work we do, and we couldn’t do it without support from kind people like you</b></p></div> <hr/> <iframe id="JotFormIFrame-240447944809062" title="The Animals Online Op Shop - Donate an Item" onload="window.parent.scrollTo(0,0)" allowtransparency="true" allow="geolocation; microphone; camera; fullscreen" src="https://form.jotform.com/240447944809062" frameborder="0" style="min-width:100%;max-width:100%;height:539px;border:none;" scrolling="yes"></iframe> <script type="text/javascript">var ifr = document.getElementById("JotFormIFrame-240447944809062");
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
    }<\/script>`;return{c(){r=f(),e=u("div"),e.innerHTML=o,this.h()},l(t){h("svelte-1l3x4ax",document.head).forEach(i),r=w(t),e=p(t,"DIV",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-280ogp"&&(e.innerHTML=o),this.h()},h(){document.title="Donate Items to Op Shop | The Animal Sanctuary",v(e,"class","container custom-content shadow-lg")},m(t,n){s(t,r,n),s(t,e,n)},p:a,i:a,o:a,d(t){t&&(i(r),i(e))}}}class I extends m{constructor(r){super(),d(this,r,null,x,c,{})}}export{I as component};