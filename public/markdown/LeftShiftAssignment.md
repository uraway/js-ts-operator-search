<!--
label: <<=
description: 左シフト代入演算子
link: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment
-->

代入演算子の左シフト版です。左シフトの結果を変数に代入します。

JavaScriptでは、オペランドは符号付き32ビットの整数値に変換され、ずらしたことであふれたビットは抹消されます。

| 10進数               | ビット(2進数)                                  |
|---------------------|-----------------------------------------------|
| 9                   | 00000000000000000000000000001001              |
| 9を2ビットだけ左シフト | 00000000000000000000000000100100 = 36 (10進数) |

```typescript
let x = 9
x <<= 2
console.log(x) // 36
```
