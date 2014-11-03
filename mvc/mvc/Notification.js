/**
 * Created by runinspring@gmail.com on 14/8/17.
 */
var mvc;
(function (mvc) {
    var Notification = (function () {
        /**
         * 发送的消息
         * @param __name 消息名称
         * @param __body 消息内容
         * @param __type 消息种类
         */
        function Notification(__name, __body, __type) {
            if (__body === void 0) { __body = null; }
            if (__type === void 0) { __type = null; }
            this._name = __name;
            this._body = __body;
            this._type = __type;
        }
        /**
         * 获取消息名称
         * @returns {string}
         */
        Notification.prototype.getName = function () {
            return this._name;
        };
        /**
         * 获取消息内容
         * @returns {Object}
         */
        Notification.prototype.getBody = function () {
            return this._body;
        };
        /**
         * 获取消息种类
         * @returns {string}
         */
        Notification.prototype.getType = function () {
            return this._type;
        };
        return Notification;
    })();
    mvc.Notification = Notification;
    Notification.prototype.__class__ = "mvc.Notification";
})(mvc || (mvc = {}));
