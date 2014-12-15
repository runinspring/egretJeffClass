/**
 * Created by 张宇 runinspring@gmail.com on 14-4-16.
 */
 module mvc{
	export class Proxy{
		public proxyName:string;
        public facade:Facade;
        constructor(name:string){
            this.proxyName = name;
        }
        public onRegister():void{}
        public listNotificationInterests():string[]{return [];}
        public handleNotification(_note:Notification):void{}
	}
 }