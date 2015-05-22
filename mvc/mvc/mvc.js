var mvc;
(function (mvc) {
    var Command = (function () {
        function Command(body) {
            this.facade = body;
        }
        Command.prototype.execute = function (note) { };
        return Command;
    })();
    mvc.Command = Command;
})(mvc || (mvc = {}));

(function (mvc) {
    var Facade = (function () {
        function Facade() {
            this.initializeFacade();
        }
        Facade.prototype.initializeFacade = function () {
        };
        Facade.prototype.initializeController = function () {
        };
        Facade.prototype.initializeProxy = function () {
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
            else {
                this.instanceProxy[_target.proxyName] = _target;
            }
            _target.onRegister();
        };
        Facade.prototype.retrieveProxy = function (_name) {
            return this.instanceProxy[_name];
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
        Facade.prototype.sendNotification = function (_name, _note, _type) {
            if (_note === void 0) { _note = null; }
            if (_type === void 0) { _type = null; }
            var note = new mvc.Notification(_name, _note, _type);
            if (this.instanceCommand[_name] != null) {
                var commandClassRef = this.instanceCommand[_name];
                var commandInstance = new commandClassRef(this);
                commandInstance.execute(note);
            }
            var i;
            var j;
            for (i in this.instanceMediator) {
                var _mediator = this.instanceMediator[i];
                var _len = _mediator.listNotificationInterests().length;
                if (_len > 0) {
                    for (j = 0; j < _len; j++) {
                        if (_mediator.listNotificationInterests()[j] == _name) {
                            _mediator.handleNotification(note);
                            break;
                        }
                    }
                }
            }
            for (i in this.instanceProxy) {
                var _proxy = this.instanceProxy[i];
                var _lenp = _proxy.listNotificationInterests().length;
                if (_lenp > 0) {
                    for (j = 0; j < _lenp; j++) {
                        if (_proxy.listNotificationInterests()[j] == _name) {
                            _proxy.handleNotification(note);
                            break;
                        }
                    }
                }
            }
        };
        Facade.instance = null;
        return Facade;
    })();
    mvc.Facade = Facade;
})(mvc || (mvc = {}));

(function (mvc) {
    var Mediator = (function () {
        function Mediator(_name) {
            this.mediatorName = _name;
        }
        Mediator.prototype.listNotificationInterests = function () { return []; };
        Mediator.prototype.handleNotification = function (_note) { };
        Mediator.prototype.onRegister = function () { };
        return Mediator;
    })();
    mvc.Mediator = Mediator;
})(mvc || (mvc = {}));

(function (mvc) {
    var Notification = (function () {
        function Notification(__name, __body, __type) {
            if (__body === void 0) { __body = null; }
            if (__type === void 0) { __type = null; }
            this._name = __name;
            this._body = __body;
            this._type = __type;
        }
        Notification.prototype.getName = function () {
            return this._name;
        };
        Notification.prototype.getBody = function () {
            return this._body;
        };
        Notification.prototype.getType = function () {
            return this._type;
        };
        return Notification;
    })();
    mvc.Notification = Notification;
})(mvc || (mvc = {}));

(function (mvc) {
    var Proxy = (function () {
        function Proxy(name) {
            this.proxyName = name;
        }
        Proxy.prototype.onRegister = function () { };
        Proxy.prototype.listNotificationInterests = function () { return []; };
        Proxy.prototype.handleNotification = function (_note) { };
        return Proxy;
    })();
    mvc.Proxy = Proxy;
})(mvc || (mvc = {}));
