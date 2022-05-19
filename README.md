# 介绍

背景水印

# 文档链接

`https://sountstars.github.io/watermark/`

# 安装

```js
npm i utils-water-mark
yarn add utils-water-mark
```

# USEAG

## 框架 使用

```js
import { unObserver, createWaterMark } from "watermark";

// 生成水印
createWaterMark("aurora", null, { left: "10px" });

// 关闭水印
unObserver();
```

## script 直接引入方式

```js
<script src="https://cdn.jsdelivr.net/gh/sountstars/watermark@0.02/lib/run.js"></script>
<script>
    window.canvansWatermark('aurora',null, {left: '10px'});
    window.unObserver();
</script>
```

# Attributes

| 参数          | 说明     | 类型   | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- | 
| waterMarkName | 水印文字 | String\|Number | -      | -   |
|canvasOpt| canvas的参数 | Object | - | - |
|warStyle | 当前容器的样式 | Object | - |  {width: '100%', height: '100%' , .........}|
