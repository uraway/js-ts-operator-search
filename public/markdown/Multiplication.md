<!--
label: *
description: 乗算演算子
link: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Multiplication
-->

掛け算した結果を返します。`×`(乗算記号)のことです。

数値に直せない文字列は`NaN`となり、真偽値は1(=true)、0(=false)となるため、次の結果が得られます。

```typescript
console.log(1 * 4) // 4
console.log(1 * '4') // 4
console.log('a' * 'b'); // NaN
console.log(true * false) // 0
```
