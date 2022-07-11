export interface WorkbookType {
  SheetNames: string[]
  Sheets: Record<string, any>
}

export type BookType = 'xlsx' | 'xlsm' | 'xlsb' | 'xls' | 'xla' | 'biff8' | 'biff5' | 'biff2' | 'xlml' | 'ods' | 'fods' | 'csv' | 'txt' | 'sylk' | 'slk' | 'html' | 'dif' | 'rtf' | 'prn' | 'eth' | 'dbf'
export interface exportExcelOptions {
  header: string[]
  data?: any[][]
  fileName?: string
  multiHeader?: string[]
  merges?: string[]
  autoWidth?: Boolean
  bookType?: BookType
  sheetName?: string
}
