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
    }
}

