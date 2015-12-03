/**
 * Created by runinspring@gmail.com on 2014/6/10.
 */
module jftools {
    export class JFObject {
        public static createBMP(_name: string = null): egret.Bitmap {
            var _bmp = new egret.Bitmap();
            var _tex: egret.Texture = RES.getRes(_name);
            _bmp.texture = _tex;
            return _bmp;
        }

        public static BmpDataSprite(_bmp: egret.Bitmap, _center = true): egret.Sprite {
            var _sp = new egret.Sprite();
            _sp.addChild(_bmp);
            if (_center) {
                _bmp.x = -Math.floor(_bmp.width / 2);
                _bmp.y = -Math.floor(_bmp.height / 2);
            }
            return _sp;
        }

        /**
         * 画一个Sprite
         * @param _color 颜色
         * @param _wid 宽度
         * @param _hei 高度
         * @param _center 是否居中对齐 默认不是
         * @param _allowtouch 是否可以点击 默认不可以
         */
        public static ColorSprite(_color: number = 0x000000, _wid: number = 0, _hei: number = 0, _center: boolean = true, _allowtouch: boolean = false): egret.Sprite {
            var _sp = new egret.Sprite();
            _sp.graphics.beginFill(_color);
            _sp.graphics.drawRect(0, 0, _wid, _hei);
            _sp.graphics.endFill();
            if (_center) {
                _sp.anchorOffsetX = Math.floor(_wid * 0.5);
                _sp.anchorOffsetY = Math.floor(_hei * 0.5);
            }

            if (_allowtouch == true) {
                _sp.width = _wid;
                _sp.height = _hei;
                _sp.touchEnabled = true;
            }
            return _sp;
        }

        /**
         * 画一个Shape
         * @param _color 颜色
         * @param _wid 宽度
         * @param _hei 高度
         * @param _center 是否居中对齐 默认不是
         * @param _allowtouch 是否可以点击 默认不可以
         */
        public static ColorShape(_color: number = 0x000000, _wid: number = 0, _hei: number = 0, _center: boolean = false, _allowtouch: boolean = false): egret.Shape {
            var _sp = new egret.Shape();
            _sp.graphics.beginFill(_color);
            _sp.graphics.drawRect(0, 0, _wid, _hei);
            _sp.graphics.endFill();
            if (_center) {
                _sp.anchorOffsetX = Math.floor(_wid * 0.5);
                _sp.anchorOffsetY = Math.floor(_hei * 0.5);
            }

            if (_allowtouch == true) {
                _sp.width = _wid;
                _sp.height = _hei;
                _sp.touchEnabled = true;
            }
            return _sp;
        }
    }
}