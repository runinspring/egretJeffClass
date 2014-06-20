/**
 * Created by 张宇 runinspring@gmail.com on 14-4-15.
 */
module jftools{
    export class JFButton extends egret.DisplayObjectContainer{
        private btn:egret.Bitmap;
        constructor(_bmp:egret.Bitmap,_allowTouch:boolean=true){
            super();
            
            this.btn = _bmp;
            this.btn.x = -Math.floor(this.btn.width/2);
            this.btn.y = -Math.floor(this.btn.height/2);
            this.addChild(this.btn);

            this.btn.touchEnabled = true;
            
            if(_allowTouch){
                this.btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onMouseDownHandler,this);
                this.btn.addEventListener(egret.TouchEvent.TOUCH_END,this.onMouseUpHandler,this);
                this.btn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,this.onMouseUpHandler,this);
            }            
        }
        public clean():void
        {
            this.btn.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onMouseDownHandler,this);
            this.btn.removeEventListener(egret.TouchEvent.TOUCH_END,this.onMouseUpHandler,this);
            this.btn.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,this.onMouseUpHandler,this);
            this.btn.touchEnabled = false;
            this.removeChild(this.btn);
            this.btn = null;
        }
        private onMouseDownHandler():void
        {
            this.scaleX = this.scaleY = 0.9;
        }
        private onMouseUpHandler(e:egret.TouchEvent):void
        {
            this.scaleX = this.scaleY = 1;
        }
    }
}