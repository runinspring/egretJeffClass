/**
 * Created by runinspring@gmail.com on 14/8/17.
 */
module mvc{
    export class Notification{
        private _body:Object;
        private _type:string;
        private _name:string;

        /**
         * 发送的消息
         * @param __name 消息名称
         * @param __body 消息内容
         * @param __type 消息种类
         */
        constructor(__name:string,__body:Object=null,__type:string=null){
            this._name = __name;
            this._body = __body;
            this._type = __type;
        }

        /**
         * 获取消息名称
         * @returns {string}
         */
        public get getName():string{
            return this._name;
        }

        /**
         * 获取消息内容
         * @returns {Object}
         */
        public get getBody():Object{
            return this._body;
        }

        /**
         * 获取消息种类
         * @returns {string}
         */
        public get getType():string{
            return this._type;
        }
    }
}