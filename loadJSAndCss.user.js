// ==UserScript==
// @name        loadJSAndCss
// @namespace   detail.setup
// @include     http://detail1.pre.tmall.com/item.htm*
// @include     http://detail2.pre.tmall.com/item.htm*
// @include     http://detail.daily.tmall.net/item.htm*
// @include     http://detail.tmall.com/item.htm*
// @include     http://www.tmall.com*
// @version     1
// ==/UserScript==
var win = unsafeWindow || window;


//	重写alert样式
loadJS('https://gist.github.com/githubForkkp/6060617/raw/82b98e1d76664db1090d5622d804553c5ac66297/jquery.js',function(){
	loadJS('https://gist.github.com/githubForkkp/6060443/raw/bca33ba68c85f71de92185fb8d0d72fb319f1765/jQuery_Alert',function(){
		loadJS('https://gist.github.com/githubForkkp/6060625/raw/bbf69df5f31f7af4540800c5a9b92d8dbb37db05/jquery.ui.draggable.js',function(){
			loadJS('https://gist.github.com/githubForkkp/6060631/raw/671746bcdd0a90218c6458f1062d0f606411e672/jquery.BubblePopup-1.1.min.js',function(){
				//console.log('Js has been loaded!')
			})
		})
	})
});
loadCSS('https://gist.github.com/githubForkkp/6060636/raw/28fc6c23c29f7e61fd62d16c1fd08e4427dc7e06/jquery.alerts.css',function(){
	loadCSS('https://gist.github.com/githubForkkp/6060643/raw/e9dcc783e26d471e76e638680f93dee8f84f5eae/demo.css',function(){
		//console.log('Css has been loaded!')
	})
	
});

// 气泡样式
loadJS('https://gist.github.com/githubForkkp/6060501/raw/5bf996ad99b4e70d0ad4c026bcbee4f9838edbe3/jquery.qtip',function(){
        
});


// load外部js方法
function loadJS(url, success) {
  var domScript = document.createElement('script');
  domScript.type= "text/javascript"; 
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