/**
 * Created by runinspring@gmail.com on 2014/6/10.
 */
module jftools{
    export class JFMath{
        /**
         * 随机取整数
         * @param max 最大值-含
         * @param min 最小值-含
         * @returns {number} 范围内的随机整数
         */
        public static random(max:number,min:number=0):number{
            return Math.floor(Math.random()*(1+max-min)+min);
        }
        /**随机排序数组*/
        public static Shuffle(_arr:any[]):any[] {
            return _arr.sort(function():number{return Math.random()>.5?1:-1});
        }
        /**克隆数组*/
        public static arrClone(target:any[]):any[]{
            return target.slice(0);
        }
        /**数字转换成中文*/
        public static numberToChinese(num:number):string{
            var arrNum:Array<string> = num.toString().split("");
            var len:number = arrNum.length;
            var outStr:string="";
            for(var i:number=0;i<len;i++){
                switch (arrNum[i]){
                    case "0":outStr+="零";break;
                    case "1":outStr+="一";break;
                    case "2":outStr+="二";break;
                    case "3":outStr+="三";break;
                    case "4":outStr+="四";break;
                    case "5":outStr+="五";break;
                    case "6":outStr+="六";break;
                    case "7":outStr+="七";break;
                    case "8":outStr+="八";break;
                    case "9":outStr+="九";break;
                    default :break;
                }
            }
            return outStr;
        }
    }
}