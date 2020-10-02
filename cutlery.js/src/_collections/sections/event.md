---
title: event
parameters: eventtype
description: Add an eventlistener to a single element
---

- **eventtype** *string*: the name of the eventtype, works with the "on"-prefix and without

---

This function is easy when you don't want to define a full eventlistenerfunction with callback in it. Instead the callback is directly coupled to the element and the eventtype.

> In these examples the [node function](#node) is used.

#### Use

Just select a node, chain the ```event``` method to it and set the callback-function.
```js
node('body').event('onclick')(() => {
    console.log('the body node was clicked')
})
```

You can also leave the "on" prefix for the event type out.
```js
node('body').event('click')(() => {
    console.log('the body node was clicked')
})
```

> Note that the callback-functions is nameless. The callback-function is directly added after the ```event``` function.

#### Use with multiple nodes
This function is made to work with a single node, create a loop to use it with multiple nodes (like when you use ```querySelectorAll```).
```js
// true in the node function-function means you want to get all nodes with this selector
node('.clickable', true).forEach((el) => {
    el.event('click')(() => {
        console.log('the body node was clicked')
    })
})
```