<!--
label: &=
description: ビット論理積代入演算子
link: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment
-->

代入演算子のビット論理積版です。ビット論理積の結果を変数に代入します。

JavaScriptでは、オペランドは符号付き32ビットの整数値に変換されます。例えば2進数の9と14のビット論理積は次のようになります。


| 10進数      | ビット(2進数)                                 |
|------------|----------------------------------------------|
| 9          | 00000000000000000000000000001001             |
| 14         | 00000000000000000000000000001110             |
| ビット論理積 | 00000000000000000000000000001000 = 8 (10進数) |

```typescript
let a = 9
console.log(a &= 14) // 8
```