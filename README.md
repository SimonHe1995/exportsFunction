<p align="center">
<img height="200" src="./assets/kt.png" alt="simon-js-tool">
</p>
<p align="center"><a href="https://www.npmjs.com/package/exports-function"><img src="https://img.shields.io/npm/v/simon-js-tool?color=3fb883&amp;label=" alt="NPM version"></a></p>
<p align="center"><a href="https://www.hejian.club/posts/exportsfunction-zh">Docs</a></p>
<p align="center"> <a href="./README_en.md">English</a> | 简体中文</p>

## 本文是 [simon-js-tool] （https://www.npmjs.com/package/simon-js-tool） 的附加导出函数文档。
目前我已经整理出了<strong>90多个</strong>常用功能，还在更新中......，您的认可对我最大的鼓励！

## 更多
- 通用函数 [simon-js-tool](https://www.npmjs.com/package/simon-js-tool)
- threejs简单化 [@simon_he/s-three](https://www.npmjs.com/package/@simon_he/s-three)
- Echarts简单化 [@simon_he/s-charts](https://www.npmjs.com/package/@simon_he/s-charts)
- numsWheel 组件 [@simon_he/nums-wheel](https://www.npmjs.com/package/@simon_he/nums-wheel)

## 赞助我
![img](/assets/wechat.jpg 'WeChat')

![img](/assets/zfb.jpg 'Alipay')

## 使用说明
```bash
npm i simon-js-tool # 安装

import { 
  deepCompare
 } from 'exportsFunction' # 按需引入
```

## jsonExportZip
- json导出为zip文件
- 参数:
  - header: string[]
  - data: any[][]
  - fileName: string
```js
jsonExportZip({
  header: ['colums1', 'colums2', 'colums3'],
  data: [
    ['data1', 'data2', 'data3'],
    ['data4', 'data5', 'data6'],
    ['data7', 'data8', 'data9'],
  ],
  fileName: 'test'
})
```

## tableExportExcel
- HTMLTableElement 转换为 Excel 导出
- 参数:
  - table: HTMLTableElement | string
  - filename: string = 'test.xlsx
  - sheetname: string = 'sheet1'
```js
tableExportExcel('.my-table', '表格.xlsx') // 导出 .my-table 元素的表格.xlsx
```

## jsonExportExcel
- json导出成excel
- 参数:
  - exportExcelOptions： {
    multiHeader?: [],
    header: [],
    data: any[][],
    filename?: string = 'excel-list',
    merges?: string[] = [],
    autoWidth: Boolean = false,
    bookType?: string = 'xlsx',
    sheetName?:string = 'sheet1',
  }
```js
jsonExportExcel({
  header: ['姓名', '年龄', '性别'],
  data: [
    ['小王', '18', '男'],
    ['小李', '20', '男'],
    ['小赵', '21', '男'],
    ['小张', '22', '男'],
    ['小刘', '23', '男'],
  ],
  fileName: '三年二班学生信息',
  bookType: 'xlsx',
  sheetName: '学生信息表',
}) // 导出三年二班学生信息.xlsx
```

## exportPdf
- 导出pdf文件
- 参数:
  - src: 图片地址
  - filename: 文件名
```js
exportPdf('./a.jpg', 'xxx') // 导出xxx.pdf
```
## GitHub地址
[Welcome to PR](https://github.com/SimonHe1995/exportsFunction)
