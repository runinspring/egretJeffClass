egret发布后的体积很大，有些不需要的文件完全可以不打包进去。所以做了一个小工具。

基于adobe AIR。请先下载运行环境。
操作很简单，勾选掉没用到的类。把生成的egret_file_list.js拷贝到bin-debug/lib里覆盖。
运行egret publish 命令即可