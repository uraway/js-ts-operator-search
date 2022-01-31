---
label: ===
description: 厳密等価演算子
link: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality
---

オペランドが等しいかどうかチェックし、真偽値を返します。オペランドの型が異なる場合は、常に false を返します

```typescript
console.log(1 === 1) // true
console.log(1 === 4) // false
console.log(4 === '4') // false
console.log('a' === 'b') // false
console.log(0 === false) // false
```
