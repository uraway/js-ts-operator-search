<!--
label: ,
description: カンマ演算子
link: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Comma_Operator
-->

一列の演算をつなぎ合わせ、最後のオペランドの値を返します。

`for`文と併用する以外の場面で見たことがありません。

```typescript
let x = 1

x = (x++, x)

console.log(x) // 2

for (var i = 0, j = 9; i <= 9; i++, j--) {
  console.log(`i: ${i}, j: ${j}`)
}
```
