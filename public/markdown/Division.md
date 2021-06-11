---
label: /
description: 除算演算子
link: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Division
---

割り算した結果を返します。`÷`(除算記号)のことです。

数値に直せない文字列は`NaN`となり、真偽値は 1(=true)、0(=false)となるため、次の結果が得られます。

```typescript
console.log(1 / 4); // 0.25
console.log(1 / "4"); // 0.25
console.log("a" / "b"); // NaN
console.log(true / false); // Infinity
```
