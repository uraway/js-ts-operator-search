---
label: ?
description: 三項演算子
link: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
---

`(条件) ? (条件が真の場合に実行する式) : (条件が偽の場合に実行する式)`のかたちで、`if/else`の糖衣構文としてよく用いられます。

複数の三項演算子を組み合わせることもできますが、複雑になるためあまり好まれません。

```typescript
console.log(0 ? "TRUE" : "FALSE") // "FALSE"

const x = false
const y = true
console.log(  x && y ? "x is true, y is true"
            : x || y ? "x or y is true"
            : "x is false, y is false") // x or y is false

```
