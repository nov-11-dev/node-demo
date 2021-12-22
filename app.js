/*
 * @Author: wxw
 * @Date: 2021-12-22 13:25:02
 * @LastEditors: wxw
 * @LastEditTime: 2021-12-22 13:26:48
 * @FilePath: /node/app.js
 * @Description: 
 */
// app.js
const express = require("express")
const app = express()
// app.use(express.static("package"))
// app.use('/package', express.static('package'));
app.use('/publish', express.static('public'));

app.post('/test', function (req, res) {
    res.send({
        'status': 'success',
        'data': null,
    });
});
app.get('/test', function (req, res) {
    res.send('sss');
})
app.listen(8080,()=>{
    console.log("服务开启在8080端口")
})
