/*
 * @Author: 石头
 * @Date: 2021-06-22 11:18:37
 * @LastEditors: 石头
 * @LastEditTime: 2021-06-22 11:20:25
 * @Description: 
 */

const log = ctx => {
    console.log( ctx.method, ctx.header.host + ctx.url )
};

module.exports = () => async (ctx, next) => {
    log(ctx);
    await next();
}