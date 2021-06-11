---
label: ?.
description: オプショナルチェイニング演算子
link: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Optional_chaining
---

オブジェクトのプロパティにアクセスする際、プロパティが null または undefined であってもエラーにならず、undefined を返します。
関数の呼び出しで使用すると、関数が存在しない場合にもエラーにならず、undefined を返します。

```typescript
let obj = {};
console.log(obj.hello.world); // Uncaught TypeError: Cannot read property 'world' of undefined

console.log(obj?.hello?.world); // undefined

console.log(obj.hi()); // Uncaught TypeError: obj.hi is not a function

console.log(obj.hi?.()); // undefined
```
