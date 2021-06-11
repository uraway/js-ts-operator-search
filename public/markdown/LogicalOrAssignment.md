---
label: ||=
description: 論理和代入演算子
link: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment
---

左の変数が偽である場合のみ、右の値を代入します

```typescript
let x = 0;
let y = 4;

console.log((x &&= 1)); // 1
console.log((y &&= 1)); // 4
```
