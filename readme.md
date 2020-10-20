## 学习笔记

### 项目搭建

- npx tsconfig.json 创建 tsconfig.json，可以选择对应的环境

  - ![](https://cdn.jsdelivr.net/gh/kitety/blog_img/img/20200923094912.png)

- npx mikro-orm migration:create 创建 migrations 文件

```bash
req.session.userId=user.id
{userId:1}-> send that to redis


1.store redis
sessionkeyxxxxxxx->{userId:1}.
2.
express-session will set a cookie on my browser signedCookieCCCCCCCCCCCCCCCCCC(对sessionkeyxxxxxxx的签名)
3.
make a request
signedCookieCCCCCCCCCCCCCCCCCC -> send to the server
4.
desrupt the cookie
signedCookieCCCCCCCCCCCCCCCCCC ->sessionkeyxxxxxxx

5.make a request to redis
sessionkeyxxxxxxx -> {userId:1}

```
