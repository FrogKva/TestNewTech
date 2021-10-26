const { VK } = require('vk-io')

const vk = new VK({
    token: '93a44226f4abd1e3857c5327040acbaad4194efa11fa02e6de3c2853c5305a3ec0d980930b9a5eaed4ad8'
})

function hello(){ 
	vk.api.messages.send({random_id:0, peer_id:612594034, message:'привет'})
}

console.log('Бот запущен!');
vk.updates.start().catch(console.error)