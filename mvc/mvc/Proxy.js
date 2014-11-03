/**
 * Created by 张宇 runinspring@gmail.com on 14-4-16.
 */
var mvc;
(function (mvc) {
    var Proxy = (function () {
        function Proxy(name) {
            this.proxyName = name;
        }
        Proxy.prototype.onRegister = function () {
        };
        return Proxy;
    })();
    mvc.Proxy = Proxy;
    Proxy.prototype.__class__ = "mvc.Proxy";
})(mvc || (mvc = {}));
