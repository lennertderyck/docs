---
title: returnTag
parameters: node
description: Returns the tagname of an element
---

- **node** *string* | *node*: a css-selector or an actual node

---

```js
const all = document.querySelectorAll('*');
all.forEach(el => {
    console.log(returnTag(el));
})
```