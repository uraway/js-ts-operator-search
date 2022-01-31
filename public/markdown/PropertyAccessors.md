---
label: .
description: プロパティアクセサー
link: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Property_Accessors
---

オブジェクトのプロパティにアクセスします。ドットの他に、ブラケットも使用できます。

```typescript
let obj = {
    hello: {
        world: 'hi',
    },
}
console.log(obj.hello.world) // "hi"
console.log(obj['hello']['world']) // "hi"
```
