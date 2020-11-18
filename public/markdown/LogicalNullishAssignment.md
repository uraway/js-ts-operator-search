---
label: ??=
description: Null合体代入演算子
link: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Logical_nullish_assignment
---

左の変数がnullまたはundefinedである場合のみ、右の値を代入します

```typescript
let x = 0
let y

console.log(x ??= 1) // 0
console.log(y ??= 1) // 1
```
