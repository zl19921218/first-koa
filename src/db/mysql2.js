/*
 * @Author: 石头
 * @Date: 2021-06-30 17:21:21
 * @LastEditors: 石头
 * @LastEditTime: 2021-07-04 21:56:41
 * @Description: 链接mysql
 */

const mysql = require('mysql2');

const { mysqlConfig } = require("../config/index");

const connection = async (config = mysqlConfig) => await mysql.createConnection(config);

const selectStudent = async (con, id) => {
    const student = await con.query('select name, age from studnet where id = ?', [id]);
}



module.exports = {
    connection,
    selectStudent
}
