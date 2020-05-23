var express = require('express');
var app = express();
const path = require('path')
const {spawn} = require('child_process')
/**
 * Run python script, pass in `-u` to not buffer console output 
 * @return {ChildProcess}
 */
function runScript(){
  return spawn('python', [
    "-u", 
    path.join(__dirname, 'test.py'),
    "--foo", "some value for foo",
  ]);
}
const subprocess = runScript()

// print output of script
subprocess.stdout.on('data', (data) => {
  console.log(`data:${data}`);
});
subprocess.stderr.on('data', (data) => {
  console.log(`error:${data}`);
});
subprocess.on('close', () => {
  console.log("Closed");
});
app.listen(8000, function () {
  console.log('server running on port 8000');
})