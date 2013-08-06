// ==UserScript==
// @name        loadJSAndCss
// @namespace   detail.setup
// @include     http://detail1.pre.tmall.com/item.htm*
// @include     http://detail2.pre.tmall.com/item.htm*
// @include     http://detail.daily.tmall.net/item.htm*
// @include     http://detail.tmall.com/item.htm*
// @include     http://www.tmall.com*
// @include     http://list.tmall.com/search_product.htm*
// @version     1
// ==/UserScript==
var win = unsafeWindow || window;


//	重写alert样式
loadJS('https://loadjscss.googlecode.com/svn/branches/jQuery.js',function(){
	loadJS('https://loadjscss.googlecode.com/svn/branches/jQuery_Alert.js',function(){
		loadJS('https://loadjscss.googlecode.com/svn/branches/jquery.ui.draggable.js',function(){
      loadJS('https://loadjscss.googlecode.com/svn/branches/jquery.BubblePopup-1.1.min.js',function(){
        // 气泡样式
        loadJS('https://loadjscss.googlecode.com/svn/branches/jquery.qtip.js',function(){
        
        })
        //console.log('Js has been loaded!')
      })
    })
	})
})
loadCSS('http://labs.abeautifulsite.net/archived/jquery-alerts/demo/jquery.alerts.css',function(){
	loadCSS('https://loadjscss.googlecode.com/svn/branches/demo.css',function(){
		//console.log('Css has been loaded!')
	})
	
})





// load外部js方法
function loadJS(url, success) {
  var domScript = document.createElement('script');
  //domScript.type= "text/javascript"; 
  domScript.src = url;
  success = success || function(){};
  domScript.onload = domScript.onreadystatechange = function() {
    if (!this.readyState || 'loaded' === this.readyState || 'complete' === this.readyState) {
      success();
      this.onload = this.onreadystatechange = null;
      this.parentNode.removeChild(this);
    }
  }
  document.getElementsByTagName('head')[0].appendChild(domScript);
}


// load外部css
function loadCSS(url, success) {
  var domCss = document.createElement('link');
  domCss.type= "text/css"; 
  domCss.href = url;
  domCss.rel = "stylesheet";
  success = success || function(){};
  domCss.onload = domCss.onreadystatechange = function() {
    if (!this.readyState || 'loaded' === this.readyState || 'complete' === this.readyState) {
      success();
      this.onload = this.onreadystatechange = null;
    }
  }
  document.getElementsByTagName('head')[0].appendChild(domCss);
}
