/**
 * Created by runinspring@gmail.com on 14/10/28.
 */
declare module mvc {
    class Facade {
        /**
         * Facade的单例类
         */
        static instance:Facade;

        /**
         * 构造函数
         */
        constructor();
        /**
         * 初始化Facade后调用的方法
         */
        initializeFacade():void;
        /**
         * 初始化command后调用的方法
         */
        initializeController():void;
        /**
         * 初始化proxy后调用的方法
         */
        initializeProxy():void;
        /**
         * 注册Mediator
         * @param _target 要注册的对象
         */
        registerMediator(_target:Mediator):void;
        /**
         * 取出Mediator
         * @param _name 要取出的对象的名字
         */
        retrieveMediator(_name:string):Object;
        /**
         * 注册Proxy
         * @param _target 要注册的对象
         */
        registerProxy(_target:Proxy):void;
        /**
         * 取出Proxy
         * @param _name 要取出的对象的名字
         */
        retrieveProxy(_name:string):Object;
        /**
         * 注册Command
         * @param _name command名称
         * @param _command 对应的消息
         */
        registerCommand(_name:string,_command:Object):void;
        /**
         * 发送消息
         * @param _name 消息名称
         * @param _note 消息的内容
         * @param _type 消息的类型
         */
        public sendNotification(_name:string,_note?:Object,_type?:string):void;
    }
}
declare module mvc {
    class Proxy {
        /**
         * 当前的facade
         */
        facade:Facade;

        /**
         * 构造函数
         * @param name proxy的名字
         */
        constructor(name:string);
        /**
         * 注册后自动调用的函数
         */
        onRegister():void;
    }
}
declare module mvc {
    class Mediator {
        /**
         * 构造函数
         * @param _name 名称
         * @param _viewCompmnet 注册的对象
         */
        constructor(_name:string,_viewCompmnet);
        /**
         * 当前的Facade
         */
        facade:Facade;
        /**
         * 注册后自动调用的函数
         */
        onRegister():void;
    }
}
declare module mvc {
    class Command {
        constructor(body:Facade);
        /**
         * 当前的Facade
         */
        public facade:Facade;
        /**
         * 执行消息
         * @param note 得到的消息
         */
        execute(note:Notification):void;
    }
}
declare module mvc {
    class Notification {
        /**
         * 获取消息的名称
         */
        getName():string;
        /**
         * 获取具体的消息内容
         */
        getBody():Object;
        /**
         * 获取消息的种类
         */
        getType():string;
    }
}
