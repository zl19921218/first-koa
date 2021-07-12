/*
 * @Author: 石头
 * @Date: 2021-06-22 10:56:34
 * @LastEditors: 石头
 * @LastEditTime: 2021-07-12 16:07:00
 * @Description: 
 */

const Koa = require('koa');

const loggerAsync = require('./middleware/logger-async');

const app = new Koa();

const { connection, selectStudent } = require('./db/mysql2');

// app.use(loggerAsync);

app.use(async (ctx) => {

    // const con = await connection();

    // const student = await selectStudent(con, 1);

    ctx.body = `hello, koa`;
})

app.listen(3000);