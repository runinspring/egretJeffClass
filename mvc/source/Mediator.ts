/**
 * Created by 张宇 runinspring@gmail.com on 14-4-16.
 */
 module mvc{
	export class Mediator implements IMediator{
		public mediatorName:string;
        public facade:Facade;
        constructor(_name:string){
            this.mediatorName = _name;
        }
        public listNotificationInterests():string[]{return [];}
        public handleNotification(_note:Notification):void{}
        public onRegister():void{}
	}
 }