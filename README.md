# laravue
laravel + vue + element-ui + vuex

### 安装
1.创建.env文件
```
cp .env.example .env
```
并配置.env中的mysql, redis，session, 队列 等。

2.执行数据库迁移，数据填充
```
php artisan migrate
php artisan db:seed --class="Moell\Mojito\Database\MojitoTableSeeder"
```

3.passport 安装配置
```
php artisan passport:install
```
执行成功后获取到相应的密码授予客户端的 ID 和 secret 并且配置到相对应的 `config/index.js` :
```
export default {
    admin: {
        authorize: {
            clientId: ID,
            clientSecret: secret
        }
    }
}
```

4.安装JavaScript依赖
```$xslt
npm install
```

5.运行Mix
```$xslt
# 开发
npm run watch

# 生产
npm run prod
```
