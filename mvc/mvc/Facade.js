/**
 * Created by 张宇 runinspring@gmail.com on 14-4-16.
 */
var mvc;
(function (mvc) {
    var Facade = (function () {
        function Facade() {
            this.initializeFacade();
        }
        Facade.prototype.initializeFacade = function () {
            //console.info("初始化Facade");
        };
        Facade.prototype.initializeController = function () {
            //console.info("初始化command");
        };
        Facade.prototype.initializeProxy = function () {
            //console.info("初始化proxy");
        };
        Facade.prototype.registerMediator = function (_target) {
            _target.facade = this;
            if (!this.instanceMediator) {
                this.instanceMediator = new Object();
                this.instanceMediator[_target.mediatorName] = _target;
            }
            else {
                this.instanceMediator[_target.mediatorName] = _target;
            }
            _target.onRegister();
        };
        Facade.prototype.retrieveMediator = function (_name) {
            return this.instanceMediator[_name];
        };
        Facade.prototype.registerProxy = function (_target) {
            _target.facade = this;
            if (!this.instanceProxy) {
                this.instanceProxy = new Object();
                this.instanceProxy[_target.proxyName] = _target;
                this.initializeProxy();
            }
            _target.onRegister();
        };
        Facade.prototype.registerCommand = function (_name, _command) {
            if (!this.instanceCommand) {
                this.instanceCommand = new Object();
                this.instanceCommand[_name] = _command;
                this.initializeController();
            }
            else {
                this.instanceCommand[_name] = _command;
            }
        };
        Facade.prototype.retrieveProxy = function (_name) {
            return this.instanceProxy[_name];
        };
        Facade.prototype.sendNotification = function (_name, _note, _type) {
            if (_note === void 0) { _note = null; }
            if (_type === void 0) { _type = null; }
            var note = new mvc.Notification(_name, _note, _type);
            for (var i in this.instanceMediator) {
                var _mediator = this.instanceMediator[i];
                var _len = _mediator.listNotificationInterests().length;
                if (_len > 0) {
                    for (var j = 0; j < _len; j++) {
                        if (_mediator.listNotificationInterests()[j] == _name) {
                            _mediator.handleNotification(note);
                            break;
                        }
                    }
                }
            }
            if (this.instanceCommand[_name] != null) {
                var commandClassRef = this.instanceCommand[_name];
                var commandInstance = new commandClassRef(this);
                commandInstance.execute(note);
            }
        };
        Facade.instance = null;
        return Facade;
    })();
    mvc.Facade = Facade;
    Facade.prototype.__class__ = "mvc.Facade";
})(mvc || (mvc = {}));
