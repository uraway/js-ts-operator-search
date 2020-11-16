<!--
label: ==
description: 等価演算子
link: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Equality
-->

オペランドが等しいかどうかチェックし、真偽値を返します。オペランドの型が異なる場合は、型の変換を行います。

```typescript
console.log(1 == 4) // false
console.log(4 == '4') // true
console.log('a' == 'b'); // false
console.log(0 == false) // true
```
