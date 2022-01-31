---
label: ??
description: Null合体演算子
link: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
---

左のオペランドが null または undefined の場合に、右のオペランドを返し、それ以外は左のオペランドを返します。

論理和演算子(`||`)とよく似ていますが、`0`、`''`など falsy な値も有効な値となります。

```typescript
let x = null
let y = 0
let z = 'hello, world'
console.log(x ?? y) // 0
console.log(y ?? z) // 0
console.log(x ?? z) // 'hello, world'
console.log(z ?? x) // 'hello, world'
```
