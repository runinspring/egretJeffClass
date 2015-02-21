/**
 * Created by runinspring@gmail.com on 15/2/20.
 */
module jftools {
    /**字符串比较工具，过滤掉中文里相同的文字*/
    export class JFString {
        public static comparisonCh():void{
            console.log("**字符串比较工具，过滤掉中文里相同的文字**");
            var str = "分数目击者人n1: 肚子好饿,我要吃宵夜!n2: 低调低调,不要被人发现!n3: 我讨厌闪光灯!n4: 月亮好圆哦!n5: 嗷嗷嗷!!" +
                "n6: 我是一匹来自北方的狼!n7: 谁也不知道我有多少秘密!n8: 今天好天气,老狼请吃鸡!";
            var arrStr:Array<string> = str.split("");
            var arr:Array<string>=[];
            var len:number = arrStr.length;
            var out:string="";
            for(var i:number=0;i<len;i++){
                var s:string = arrStr.shift();
                if(arr.indexOf(s)==-1 && s.charCodeAt(0)>200){
                    arr.push(s);out+=s;
                }
            }
            console.log(out);
        }
    }
}
