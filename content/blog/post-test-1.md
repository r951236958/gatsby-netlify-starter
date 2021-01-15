---
path: post-2021-01-16
date: 2021-01-15T22:34:17.385Z
title: post test
description: test
---
### hello

![ryan](../assets/a6c570fd-5c9a-498a-a8b6-1ef809700549.jpeg)

```jsx
// utils.jsx

export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("user")
    ? JSON.parse(window.localStorage.getItem("user"))
    : {}

export const setUser = user =>
  isBrowser() && window.localStorage.setItem("user", JSON.stringify(user))

  export const isLoggedIn = () => {
  const user = getUser()
  return !!user.email
}

export const logout = (firebase) => {
  return new Promise(resolve => {
    firebase.auth().signOut().then(function() {
      setUser({});
      resolve();
    });
  })
}
```