/**
 * Created by 张宇 runinspring@gmail.com on 14-4-16.
 */
var mvc;
(function (mvc) {
    var Mediator = (function () {
        function Mediator(_name, _viewCompmnet) {
            this.mediatorName = _name;
            this.container = _viewCompmnet;
        }
        Mediator.prototype.listNotificationInterests = function () {
            return [];
        };
        Mediator.prototype.handleNotification = function (_note) {
        };
        Mediator.prototype.onRegister = function () {
        };
        return Mediator;
    })();
    mvc.Mediator = Mediator;
    Mediator.prototype.__class__ = "mvc.Mediator";
})(mvc || (mvc = {}));
