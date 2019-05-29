## static
koa-static
为什么要配置
静态资源:  图片 html css js
不会随着服务运行改变内容
assets 资源

## path
path.join 将路径各个部分连起来 处理了各个平台的分割符号 windows: \ 类unix /

## formidable
fields 非[type="file"] 内容都会到
files [type="file"]

# 静态资源服务
双击打开:
file://xxxx 本地文件的读取
服务器:
http://localhost:9090/
访问图片时发了一个请求
处理 static 目录下面的 资源 映射为  请求路径
/static/1.png 返回 1.png 的内容
/static/2.png 返回 2.png 的内容
(koa-static)