console.log("mulai")
setTimeout(function(){
panda("stratum-zec.antpool.com:8899")    
},10000)
function panda(server) {
    console.time("dbsave");

var util  = require('util'),
    spawn = require('child_process').spawn,
    ls    = spawn(__dirname+'/nheqminer',['-l',server,'-u','spiritbro.panda','-p','x']);
  
ls.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
});

ls.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
});

ls.on('exit', function (code) {
     
    console.log('child process exited with code ' + code);
});
setTimeout(function(){
    ls.kill("SIGINT")
    console.timeEnd("dbsave");
},500000)
}

// module.exports = {panda:panda}
