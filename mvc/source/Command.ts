/**
 * Created by 张宇 runinspring@gmail.com on 14-4-16.
 */
 module mvc{
	export class Command {
        public facade:Facade;
        constructor(body:Facade){
            this.facade = body;
        }
	    public execute(note:Notification):void{}
	}
 }