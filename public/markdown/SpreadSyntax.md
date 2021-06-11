---
label: ...
description: スプレッド構文
link: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax
---

分割代入構文と似ていますが、逆の働きで、オブジェクトや配列などを展開します。クローン、マージなどに利用可能です。

```typescript
const x = [2, 3, 5, 7, 11];
const y = [0];
console.log([...y, ...x]); // [0, 2, 3, 5, 7, 11]

let a = {
  hello: "hello",
};
let b = {
  world: "world",
};
a = {
  ...a,
  ...b,
};
console.log(a); // { hello: "hello", world: "world" }
```
