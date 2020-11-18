---
label: ...
description: 分割代入構文
link: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
---

分割代入構文は演算子ではありませんが、配列やオブジェクトから値を取り出し、変数に代入することができる構文です。

```typescript
[a, b, ...rest] = [2, 3, 5, 7, 11]

console.log(a) // 2
console.log(rest) // [5, 7, 11]
```
