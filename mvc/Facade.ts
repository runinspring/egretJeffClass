/**
 * Created by 张宇 runinspring@gmail.com on 14-4-16.
 */
 module mvc{
    export class Facade{
        public static instance:Facade = null;
        public instanceMediator:Object;
        public instanceProxy:Object;
        public instanceCommand:Object;
        constructor(){
            this.initializeFacade();
        }
        public initializeFacade():void
        {//初始化Facade
            //console.info("初始化Facade");
        }
        public initializeController():void
        {//初始化command
            //console.info("初始化command");
        }
        public initializeProxy():void
        {//初始化proxy
            //console.info("初始化proxy");
        }
		public registerMediator(_target:Mediator):void
        {
            _target.facade = this;
            if(!this.instanceMediator){
                this.instanceMediator = new Object();
                this.instanceMediator[_target.mediatorName] = _target;
            }else{
                this.instanceMediator[_target.mediatorName] = _target;
            }
            _target.onRegister();
        }
        public retrieveMediator(_name:string):Object
        {
            return this.instanceMediator[_name];
        }
        public registerProxy(_target:Proxy):void
        {
            _target.facade = this;
            if(!this.instanceProxy){
                this.instanceProxy = new Object();
                this.instanceProxy[_target.proxyName] = _target;
                this.initializeProxy();
            }
            _target.onRegister();
        }
        public registerCommand(_name:string,_command:Object):void
        {
            if(!this.instanceCommand){
                this.instanceCommand = new Object();
                this.instanceCommand[_name] = _command;
                this.initializeController();
            }else{
                this.instanceCommand[_name] = _command;
            }
        }
        public retrieveProxy(_name:string):Object
        {
            return this.instanceProxy[_name];
        }
        public sendNotification(_name:string,_note:Object=null,_type:string=null):void
        {
            var note:Notification = new Notification(_name,_note,_type);
            for(var i in this.instanceMediator){
                var _mediator = this.instanceMediator[i];
                var _len = _mediator.listNotificationInterests().length;
                if(_len>0){
                    for(var j:number=0;j<_len;j++){
                        if(_mediator.listNotificationInterests()[j] == _name){
                            _mediator.handleNotification(note)
                            break;
                        }
                    }
                }
            }
            if(this.instanceCommand[_name]!=null){
                var commandClassRef = this.instanceCommand[_name];
                var commandInstance = new commandClassRef(this);
                commandInstance.execute(note);
            }
        }
	}
}