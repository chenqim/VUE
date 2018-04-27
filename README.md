# My Vue Demo

> 工作笔记（一直在做一个vue的项目所以把遇到的问题以及理解欠缺的地方记录下来）

## 搭建项目环境

``` bash
# 下载安装nodejs
vue项目需要node环境，直接下载安装包安装~~~ 附网址：https://nodejs.org/en/
也可以在终端里下载，但是不推荐，npm的版本会报错
记得配环境变量

# 安装webpack 
npm install webpack -g

# 安装vue脚手架 
npm install vue-cli -g

# 安装淘宝镜像
npm install -g cnpm --registry=https://registry.npm.taobao.org

# 根据模板创建项目（projectName为项目名字且不能用中文）
vue init webpack projectName

# 创建完之后会有一些初始化的设置
除了ESLint, unit tests, e2e tests选择No之外，其余全部回车默认Yes

```

## Build Setup

``` bash
# install dependencies（运行项目之前先安装依赖，安装了淘宝镜像之后可用cnpm代替npm）
npm install

# serve with hot reload at localhost:8080（运行项目）
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

参考问题链接：  
https://cn.vuejs.org/v2/guide/instance.html#
https://segmentfault.com/a/1190000008570622#articleHeader0  
https://xyp-hf.github.io/2017/10/31/%E7%AC%AC%E4%BA%94%E8%8A%82%EF%BC%9A%E8%BD%BB%E6%9D%BE%E6%8E%8C%E6%8F%A1-vue-%E5%AE%9E%E4%BE%8B%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/
