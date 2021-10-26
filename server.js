const WebSocket = require('ws');
var server =  new WebSocket.Server({port:8080})

function onConnect(сlient) {
  console.log('Новый пользователь');
сlient.on('message', msg => {
    /* обработчик сообщений от клиента */
  });
сlient.on('close', msg => {
    // отправка уведомления в консоль
    console.log('Пользователь отключился');
  });
}


server.on('connecton', onConnect)

console.log('>>server started<<')
