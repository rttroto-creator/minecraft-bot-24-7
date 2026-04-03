const mineflayer = require('mineflayer')
const http = require('http')

// ЦЕЙ БЛОК ОБОВ'ЯЗКОВИЙ ДЛЯ RENDER
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Bot is active!')
})
server.listen(process.env.PORT || 3000)

function createBot() {
  const bot = mineflayer.createBot({
    host: 'FRFRFRFRFRRFRFR.aternos.me', 
    port: 25565,
    username: 'SmartBot_Render',
    version: '1.21.1',
    checkTimeout: 15000
  })

  bot.on('spawn', () => console.log('[+] Бот успішно зайшов на сервер!'))
  
  bot.on('chat', (username, message) => {
    if (username === bot.username) return
    if (message === 'іди сюди') bot.chat('Вже біжу!')
  })

  bot.on('error', (err) => console.log('Помилка підключення:', err))
  bot.on('end', () => {
    console.log('Зв’язок розірвано. Перепідключення за 15 сек...')
    setTimeout(createBot, 15000)
  })
}

createBot()





