<p align="center">
<img height="200" src="./assets/kt.png" alt="simon-js-tool">
</p>
<p align="center"><a href="https://www.npmjs.com/package/exports-function"><img src="https://img.shields.io/npm/v/simon-js-tool?color=3fb883&amp;label=" alt="NPM version"></a></p>
<p align="center"><a href="https://www.hejian.club/posts/exportsfunction">Docs</a></p>
<p align="center"> English | <a href="./README.md">简体中文</a></p>

## This article is documentation that describes the encapsulated utility functions [simon-js-tool](https://www.npmjs.com/package/simon-js-tool)
At present, I have sorted out <strong>90+</strong> commonly used functions, and I am still updating..., and your recognition is the biggest encouragement to me!

## Sponsor me
![img](/assets/wechat.jpg 'WeChat')

![img](/assets/zfb.jpg 'Alipay')

## Instructions for use
```bash
npm i simon-js-tool # Installation

import { 
  deepCompare
 } from 'simon-js-tool' # Ingestion on demand

```

## jsonExportZip
- Json is exported as a zip file
- params:
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
- HTMLTableElement Convert to Excel export
- params:
  - table: HTMLTableElement | string
  - filename: string = 'test.xlsx
  - sheetname: string = 'sheet1'
```js
tableExportExcel('.my-table', 'table表格.xlsx') // Export the table .xlsx of the .my-table element
```

## jsonExportExcel
- Json is exported to excel
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
  header: ['Name', 'Age', 'Gender'],
  data: [
    ['Little King', '18', 'Male'],
    ['Little Lee', '20', 'Male'],
    ['Xiao Zhao', '21', 'male'],
    ['Xiao Zhang', '22', 'male'],
    ['Xiao Liu', '23', 'male'],
  ],
  fileName: 'Information on students in the second class of the third year',
  bookType: 'xlsx',
  sheetName: 'Student Information Form',
}) // Export information .xlsx for students in the second class of the third year
```

## exportPdf
- Export the pdf file
- params:
  - src: Picture address
  - filename: filename
```js
exportPdf('./a.jpg', 'xxx') // Export xxx .pdf
```

## GitHub地址
[Welcome to PR](https://github.com/SimonHe1995/exportsFunction)

