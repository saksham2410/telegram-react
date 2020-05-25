require("dotenv").config();
var express = require('express');
var app = express();
var shell = require('shelljs');
// const path = require('path')
// const {spawn} = require('child_process')
var phone = '+919892498206';
const testing_path = process.env.testing_path;
// pyshell.send(');
app.get('/test',() => {
    shell.ShellString('otp').to(`${phone}.txt`)
})
var string1 = 'python ' + testing_path + '/test.py ' + phone;
console.log('stringg ',string1);
shell.exec('python ' + testing_path + '/login.py ' + phone, function (code, stdout, stderr) {
    // console.log(result_here);
    var result_here = stdout.split('\n');;
    console.log('python output',result_here)
    // var finalResult = result_here[result_here.length - 2];
    // var ids = finalResult.split(',');
    // var result = [];
    // for (var i = 0; i < ids.length; ++i) {
    //   result.push(profiles[ids[i]]);
    // }
    // redisClient.set(req.body.phone.toString() + 'skill', JSON.stringify(result), 'EX', 60 * 15);
    // return res.json({
    //   success: true,
    //   message: 'It worked till here',
    //   result: result
    // })
  })

app.listen(8000, function () {
  console.log('server running on port 8000');
})