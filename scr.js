const
	express =  require('express');
	app = express();
	server =  require('http').createServer(app);
  fs = require('fs')
    tech = require('./tech.json')
    var getIP = require('ipware')().get_ip;
    io = require('socket.io')(server)
    server.listen(2009)

app.get('/', (next,context) => {

context.sendFile(__dirname + '/index.html');
  var ipInfo = getIP(next);
    console.log(ipInfo);
    // { clientIp: '127.0.0.1', clientIpRoutable: false }

if(!tech.filter(x => x.clientIp === ipInfo.clientIp)[0])    
{
    tech.push(ipInfo)
}
fs.writeFileSync("./tech.json", JSON.stringify(tech, null, "\t"))
})

 
