/**
 * coolgods@sina.com
 * @张宇HYM
 */
egret_h5 = {};

egret_h5.prefix = "";

egret_h5.loadScript = function (list, callback) {
    var loaded = 0;
    var loadNext = function () {
        egret_h5.loadSingleScript(egret_h5.prefix + list[loaded], function () {
            loaded++;
            if (loaded >= list.length) {
                callback();
            }
            else {
                loadNext();
            }
        })
    };
    loadNext();
};

egret_h5.loadSingleScript = function (src, callback) {
    var s = document.createElement('script');
    if (s.hasOwnProperty("async")) {
        s.async = false;
    }
    s.src = src;
    s.addEventListener('load', function () {
        this.removeEventListener('load', arguments.callee, false);
        callback();
    }, false);
    document.body.appendChild(s);
};

egret_h5.preloadScript = function (list, prefix) {
    if (!egret_h5.preloadList) {
        egret_h5.preloadList = [];
    }
    egret_h5.preloadList = egret_h5.preloadList.concat(list.map(function (item) {
        return prefix + item;
    }))
};
var img;
egret_h5.startLoading = function () {
    var list = egret_h5.preloadList;
    egret_h5.loadScript(list, egret_h5.startGame);
};
egret_h5.showLogo = function(){
    //var logoBase64 = "data:image/png;base64,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";
    var logo = "/resource/preload/logo.png"
    img = document.createElement("img");
    //img.src = logoBase64;
    img.src = logo;
    img.style.position = "absolute";
    var wid = document.documentElement.clientWidth;
    var hei = document.documentElement.clientHeight;
    img.style.left = Math.floor(wid/2-32).toString()+"px";
    img.style.top = Math.floor(hei/2-32).toString()+"px";
    document.body.appendChild(img);
}
egret_h5.cleanLogo = function(){
    document.body.removeChild(img);
}