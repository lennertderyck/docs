---
title: connection
description: Get the users internet speed/connection
---

#### Get state
Get the connectionstate once, but you can call it as much as you want

```js
connection.state(); // returns integer
```

**States**<br>
The integer that is returned corresponds to a certain status

- 0: connection offline
- 1: slow/bad connection
- 2: good connection
- 3: strong connection

#### Watch the connection
The ```watch``` function let's you set an eventlistener for the users' connection. It will execute the callback you set, every time the users' connection the changes.

The watch function returns a integer in the same way the method above does.

```js
const connectionStateText = (state) => {
    return {
        0: 'offline',
        1: 'slow/bad',
        2: 'good',
        3: 'strong'
    }[state];
}

connection.watch((state) => {
    const text = connectionStateText(state);
    console.log(`your connection is ${text}`);
})
```

<!-- Uitbreiding naar type (wifi/cable/...) -->