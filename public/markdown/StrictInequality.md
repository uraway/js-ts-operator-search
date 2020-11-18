---
label: !==
description: 厳密不等価演算子
link: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Strict_inequality
---

オペランドが等しくないかどうかチェックし、真偽値を返します。オペランドの型が異なる場合は、常にtrueを返します

```typescript
console.log(1 !== 1) // false
console.log(1 !== 4) // true
console.log(4 !== '4') // true
console.log('a' !== 'b'); // true
console.log(0 !== false) // true
```
