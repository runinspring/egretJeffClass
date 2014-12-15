/**
 * Created by runinspring@gmail.com on 2014/12/13.
 */
module mvc{
    export interface IMediator {
        mediatorName:string;
        facade:mvc.Facade;
        listNotificationInterests():string[];
        handleNotification(_note:mvc.Notification):void;
        onRegister():void;
    }
}
