import{s as m,n}from"../chunks/scheduler.h1jTRUOO.js";import{S as c,i as d,s as f,e as h,h as u,d as a,c as w,a as p,g,b as x,f as s}from"../chunks/index.ZqXQ7sVt.js";function F(l){let r,e,i=`<h1>DONATE AN ITEM TO THE ANIMALS ONLINE OP SHOP</h1> <div class="container"><p class="text-center"><b>Thank you for your generous offer to donate a quality item to list in “The Animals Online Op Shop” store! 
          <br/>The proceeds from this sale will help us continue the important work we do, and we couldn’t do it without support from kind people like you</b></p></div> <hr/> <iframe id="JotFormIFrame-240987308713059" title="The Animal&#39;s Online Op Shop" onload="window.parent.scrollTo(0,0)" allowtransparency="true" allow="geolocation; microphone; camera; fullscreen" src="https://form.jotform.com/240987308713059" frameborder="0" style="min-width:100%;max-width:100%;height:539px;border:none;" scrolling="yes"></iframe> <script src="https://form.jotform.com/s/umd/latest/for-form-embed-handler.js"><\/script> <script>window.jotformEmbedHandler("iframe[id='JotFormIFrame-240987308713059'", "https://form.jotform.com/")<\/script> <iframe id="JotFormIFrame-240447944809062" title="The Animals Online Op Shop - Donate an Item" onload="window.parent.scrollTo(0,0)" allowtransparency="true" allow="geolocation; microphone; camera; fullscreen" src="https://form.jotform.com/240447944809062" frameborder="0" style="min-width:100%;max-width:100%;height:539px;border:none;" scrolling="yes"></iframe> <script type="text/javascript">var ifr = document.getElementById("JotFormIFrame-240447944809062");
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
    }<\/script>`;return{c(){r=f(),e=h("div"),e.innerHTML=i,this.h()},l(t){u("svelte-1l3x4ax",document.head).forEach(a),r=w(t),e=p(t,"DIV",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1qi8j6g"&&(e.innerHTML=i),this.h()},h(){document.title="Donate Items to Op Shop | The Animal Sanctuary",x(e,"class","container custom-content shadow-lg")},m(t,o){s(t,r,o),s(t,e,o)},p:n,i:n,o:n,d(t){t&&(a(r),a(e))}}}class b extends c{constructor(r){super(),d(this,r,null,F,m,{})}}export{b as component};
