---
title: Node.js Error
date: 2021-01-07T19:17:57.263Z
cover: assets/node_error.png
slug: node
category: node
tags:
  - node
---
使用`npm run develop`時報錯`Error: listen EADDRINUSE: address already in use :::8000`

解決方法:

```
$ lsof -i tcp:8000 #查詢被佔用的port

# Option 1.

$ kill -9 **** #佔用的PID

# Option 2.

$ pkill node #如果佔用port的都是node, 全部刪除

```

可以再次運行`npm run develop`