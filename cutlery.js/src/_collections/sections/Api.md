---
title: new Api
parameters: "url [, options = {method: 'GET'}]"
description: Fetch data end choose the output format
---

- **url** *string*: the source of the file you want to fetch
- **options** *object*: options you can set for the [fetch web Api](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

---

#### Create an instance
Begin by creating a new insxtace

> In these cases the classes are used inside an async function

```js
// since the class returns a promise use async await
const corona = await new Api('https://api.thevirustracker.com/free-api?countryTotal=BE');
```

#### Get the data
You have several output-formats you can choose from

**Status**<br>
Get the response data from a call

```js
await corona.status();
```

**JSON**<br>
This will do a fetch call, convert the data to JSON and return it

```js
await corona.JSON();
```

**TEXT**<br>
Returns the response data as text so you can manipulate it as you want

```js
await corona.TEXT();
```

**Coming soon: NODE**<br>
If you need to fetch a webpage this method will return nodes

```js
await corona.NODE()
```

> Every time you call an output-format, the data is fetched, keep this is mind when you have a limit on calls. We'll try to fix this as soon as possible.
