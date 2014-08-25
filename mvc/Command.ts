/**
 * Created by 张宇 runinspring@gmail.com on 14-4-16.
 */
 module mvc{
	export class Command {
        public facade:Facade;
        constructor(_body:Facade){
            this.facade = _body;
        }
	    public execute(_note:Notification):void{}
	}
 }