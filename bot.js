const mineflayer = require('mineflayer')
const http = require('http')

// Простий веб-сервер для Render
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Bot is running!')
})
server.listen(process.env.PORT || 3000)

function createBot() {
  const bot = mineflayer.createBot({
    host: 'FRFRFRFRFRRFRFR.aternos.me', 
    port: 25565,
    username: 'SmartBot_24_7',
    version: '1.21.1', // Спробуй цю версію, вона найстабільніша
    checkTimeout: 15000
  })

  bot.on('spawn', () => console.log('[+] Бот у грі!'))
  bot.on('chat', (username, message) => {
    if (username === bot.username) return
    if (message === 'іди сюди') bot.chat('Біжу до тебе!')
  })

  bot.on('error', (err) => console.log('Помилка:', err))
  bot.on('end', () => {
    console.log('Відключено. Перепідключення через 15 сек...')
    setTimeout(createBot, 15000)
  })
}

createBot()

