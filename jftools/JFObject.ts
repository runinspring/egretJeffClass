/**
 * Created by runinspring@gmail.com on 2014/6/10.
 */
module jftools{
    export class JFObject{
        public static createBMP(_name:string=null):egret.Bitmap{
            var _bmp = new egret.Bitmap();
            var _tex:egret.Texture = RES.getRes(_name);
            _bmp.texture = _tex;
            return _bmp;
        }
        public static BmpDataSprite(_bmp:egret.Bitmap,_center=true):egret.Sprite{
            var _sp = new egret.Sprite();
            _sp.addChild(_bmp);
            if(_center){
                _bmp.x= -Math.floor(_bmp.width/2);
                _bmp.y= -Math.floor(_bmp.height/2);
            }
            return _sp;
        }
        public static ColorSprite(_wid:number,_hei:number,_color:number=0x000000,_center=true,_allowtouch=false):egret.Sprite{
            var _sp = new egret.Sprite();
            _sp.graphics.beginFill(_color);
            var _sx=0,_sy=0;
            _sp.graphics.drawRect(0,0,_wid,_hei);
            _sp.graphics.endFill();
            if(_center){
                _sp.anchorX=_sp.anchorY=0.5;
            }

            if(_allowtouch==true){
                _sp.width = _wid; _sp.height = _hei;
                _sp.touchEnabled=true;
            }
            return _sp;
        }
    }
}

