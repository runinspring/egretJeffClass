/**
 * Created by 张宇 runinspring@gmail.com on 14-4-16.
 */
 module mvc{
	export class Proxy{
		public proxyName:string;
        public facade:Facade;
        constructor(_name:string){
            this.proxyName = _name;
        }
        public onRegister():void{}
	}
 }