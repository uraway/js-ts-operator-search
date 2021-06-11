---
label: &&
description: 論理積演算子
link: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Logical_AND
---

すべてのオペランドが真である場合のみ、最後のオペランドを返します。オペランドがひとつでも偽である場合、false を返します。

```typescript
console.log(true && true); // true
console.log(true && 1 && "a"); // a
console.log(false && true && "a"); // false
console.log("a" && "b"); // b
```
