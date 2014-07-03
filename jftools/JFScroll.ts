/**
 * Created by runinspring@gmail.com on 2014/6/13.
 * 一个简单的scroll容器，单纯的的拖动，结束后会有缓动，不用启动复杂的UI系统
 */
module jftools{
    export class JFScroll extends egret.Sprite{
        public _container;//容器
        private _initX; private _initY;
        private _endX; private _endY;
        private _downX; private _downY;
        //private _deltaX; private _deltaY;
        private _downTime;//点击的时间
        private _direction;
        private _border;//是否有边界
        private _rectangle;//边界的范围
        private _deltaTime:number = 200;//不到200毫秒没有缓动
        /**
         * _target传入图像
         * _dir传入移动方向:  两个方向both  水平h  垂直v
         * _haveBorder是否有边界,有边界的话移动不可以超出这个范围
         *
         */
        constructor(_target,_dir:string="h",_haveBorder:boolean = false,_rect:egret.Rectangle=null) {
            super();
            this._container = _target;
            this._direction = _dir;
            this._border = _haveBorder;
            this._rectangle = _rect;
            this.touchEnabled=true;
            this.addChild(this._container);

        }
        /**
         * 销毁
         */
        public dispose():void{
            this.removeListeners();
            this.removeChildren();
        }
        /**
         * 加入到舞台，加入触摸事件
         * @private
         */
        public _onAddToStage() {
            super._onAddToStage();

            this.addListeners();
        }

        /**
         * 从 舞台删除，删除触摸事件
         * @private
         */
        public _onRemoveFromStage() {
            super._onRemoveFromStage();
            this.removeListeners();
        }

        private addListeners():void{
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.mouseDown,this);
            this.stage.addEventListener(egret.Event.LEAVE_STAGE,this.leaveStage,this);
        }
        private removeListeners():void{
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.mouseDown,this);
            this.leaveStage();
        }
        private mouseDown(e:egret.TouchEvent):void{
            if(!this.touchEnabled){return;}
            egret.Tween.removeTweens(this._container);

            this.addEventListener(egret.TouchEvent.TOUCH_END,this.mouseUp,this);
            this.addEventListener(egret.TouchEvent.TOUCH_OUT,this.mouseUp,this);
            this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,this.mouseUp,this);
            this.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.mouseMove,this);

            this._initX = this._endX = this._container.x;
            this._initY = this._endY = this._container.y;
            this._downX = e.stageX; this._downY = e.stageY;
            this._downTime = new Date().getTime();
        }
        private mouseMove(e:egret.TouchEvent):void{
            var deltaX = e.stageX - this._downX;
            var deltaY = e.stageY - this._downY;


            if(this._direction == "both" || this._direction == "h"){
                this._endX = this._initX + deltaX;
                if(this._border){
                    if(this._endX>0){this._endX=0;}
                    if(this._endX<this._rectangle.width){this._endX=this._rectangle.width;}
                }
            }
            if(this._direction == "both" || this._direction == "v"){
                this._endY = this._initY + deltaY;
                if(this._border){
                    if(this._endY>0){this._endY=0;}
                    if(this._endY<this._rectangle.height){this._endY=this._rectangle.height;}
                }
            }
            this._container.x = this._endX;
            this._container.y = this._endY;
            //console.info(this._container.x);
            this.moveList();
        }
        private mouseUp(e:egret.TouchEvent):void{
            this.leaveStage();
            var endTime = new Date().getTime();
            if(endTime - this._downTime > this._deltaTime){

            }else{
                var deltaX = e.stageX - this._downX;
                var deltaY = e.stageY - this._downY;
                var _num = Math.floor(this._deltaTime/(endTime - this._downTime)*2);
                if(this._direction == "both" || this._direction == "h"){
                    this._endX += deltaX*_num;
                    if(this._border){
                        if(this._endX>0){this._endX=0;}
                        if(this._endX<this._rectangle.width){this._endX=this._rectangle.width;}
                    }
                }
                if(this._direction == "both" || this._direction == "v"){
                    this._endY += deltaY*_num;
                    if(this._border){
                        if(this._endY>0){this._endY=0;}
                        if(this._endY<this._rectangle.height){this._endY=this._rectangle.height;}
                    }
                }
                var _delay = Math.max(100*_num,100);
                _delay = Math.min(_delay,300);
                egret.Tween.get(this._container,{onChange:this.moveList,onChangeObj:this}).to({x:this._endX,y:this._endY},_delay);
            }
        }
        private leaveStage():void{
            this.removeEventListener(egret.TouchEvent.TOUCH_END,this.mouseUp,this);
            this.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,this.mouseUp,this);
            this.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.mouseMove,this);
            //this.stage.removeEventListener(egret.Event.LEAVE_STAGE,this.leaveStage,this);
        }
        //每帧 移动 时调用
        private moveList() {
            this.dispatchEventWith("scrollMoving");
        }
    }
}

