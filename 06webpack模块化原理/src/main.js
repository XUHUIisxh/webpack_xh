// es module 导出内容， CommonJs导入内容

const { sum } = require('./js/math')

console.log(sum(1, 2))

// CommonJs导出内容， es module 导入内容
import { dataFormate } from './js/formate'

console.log(dataFormate())

console.log(abn)