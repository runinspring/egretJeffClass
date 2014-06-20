/**
 * Created by 张宇 runinspring@gmail.com on 14-4-16.
 */
/// <reference path="Facade.ts"/>
 module mvc{
	export class Mediator{
		public mediatorName:string;
        public container:egret.DisplayObjectContainer;
        public facade:Facade;
        constructor(_name:string,_viewCompmnet){
            this.mediatorName = _name;
            this.container = _viewCompmnet;
        }
        public listNotificationInterests():string[]{return [];}
        public handleNotification(_noteName:string,_body:any):void{}
        public onRegister():void{}
	}
 }