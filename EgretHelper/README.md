﻿制作egret相关内容的小工具

基于adobe AIR。请先下载运行环境。


egret发布后的体积很大，有些不需要的文件完全可以不打包进去。
操作很简单，勾选掉没用到的类。把生成的egret_file_list.js拷贝到bin-debug/lib里覆盖。
运行egret publish 命令即可

base64 图片
egret启动的时候可以先显示一个logo，是base64的字符串
把png图片拖拽进指示框内，就会再桌面生成一个对应的txt文件。拷贝里面的内容到egret_loader.js里