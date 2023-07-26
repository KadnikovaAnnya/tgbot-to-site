const TelegramBot = require('node-telegram-bot-api')
const token = '6351354525:AAFS87RsMexK91RBnOgl5WQvOMV6bLJFeGA'
const bot = new TelegramBot(token, {polling:true})

// Серверная часть
const express = require('express')

const app = express()
const PORT = 3000

// app.get('/', (req, res) => {
//     res.send('Hello debug_Yourself')
// })

app.listen(PORT, () => console.log(`My server is running on port ${PORT}`))

const commands = [
    {
        command:'start',
        description:'Запустить бота'
    },
    {
        command:'save',
        description:'Сохранить результат'
    },
    {
        command:'heading',
        description:'Заголовок'
    },
    {
        command:'img',
        description:'Отправить изображение'
    },
    {
        command:'p',
        description:'Параграф'
    },
    {
        command:'adore',
        description:'похвалить)'
    }
]
bot.setMyCommands(commands)


// await bot.sendMessage(msg.chat.id, stroka, {parse_mode:'HTML'})

bot.onText(/\/adore/, async(msg) => {
    console.log(msg.chat.id)
    chatId = msg.from.id 
    try{
        await bot.sendMessage(msg.chat.id, 'Ты молодец:3')
    }
    catch(err){
        console.error()
    }
})

bot.onText('/\/start', async msg => {
    try{
        await bot.sendPhoto(msg.chat.id, 'https://github.com/hellbruh/tgbot-to-site/blob/main/presentation-template.png',
        {
            caption:'Привет, я бесплатно создам для тебя небольшой лендинг, который поможет твоему делу. Вот пример того, что может получиться, тебе достаточно заполнить шаблонные поля'
        })
    }
    catch(err){
        console.error()
    }
})
