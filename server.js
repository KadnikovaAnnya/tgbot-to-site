const TelegramBot = require('node-telegram-bot-api')
const fs = require('fs')
const token = '6351354525:AAFS87RsMexK91RBnOgl5WQvOMV6bLJFeGA'
const bot = new TelegramBot(token, {polling:
                                    {
                                    interval: 300,
                                    autoStart: true
                                    }})

// Серверная часть
const express = require('express')

const app = express()
let PORT = 3010

app.get('/', (req, res) => {
    res.send('Hello debug_Yourself')
})

app.listen(PORT, () => console.log(`My server is running on port ${PORT}`))

let htmlContentOriginal = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thumbnail</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Belanosima:wght@400;600&family=EB+Garamond:wght@400;500;600&family=Lato:wght@100;300;400;700;900&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Belanosima:wght@400;600&family=EB+Garamond:wght@400;500;600&family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;1,200&family=Lato:wght@100;300;400;700;900&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Belanosima:wght@400;600&family=EB+Garamond:wght@400;500;600&family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;1,200&family=Lato:wght@100;300;400;700;900&family=M+PLUS+Rounded+1c:wght@100;300&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Belanosima:wght@400;600&family=EB+Garamond:wght@400;500;600&family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;1,200&family=Lato:wght@100;300;400;700;900&family=M+PLUS+Rounded+1c:wght@100;300&family=Roboto:wght@500;700;900&display=swap" rel="stylesheet">
    <script src="/server.js"></script>
</head>
<style>
    body{
        margin:0%;
        display:flex;
        flex-direction: column;
        margin-bottom: 0px;
    }
    #top{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        padding-left:50px;
        height:100px;
        width:100%;
        background-color: rgb(231, 217, 199);
        color:rgb(126, 83, 63);
        font-family: 'Roboto', sans-serif;
        font-weight:200;
        font-size:36px;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.336);
        box-sizing: border-box;
    }
    #contact-top{
        display:flex;
        height: 100%;
        width:50%;
        justify-content: center;
        align-items: center;
        font-size:26px;
        flex-wrap: wrap;
    }
    #main{
        display:flex;
        margin-left:10%;
        margin-right:10%;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content:center;
        width:100%;
    }
    #title{
        display:flex;
        height:100%;
        width:50%;
        align-items: center;
    }
    #main{
        display:flex;
        margin:0px;
        padding-top:40px;
        padding-bottom:40px;
        width:100%;
        box-sizing: border-box;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: rgb(248, 238, 221);
    }
    .pic{
        display:flex;
        width:600px;
        height:400px;
        margin-right:50px;
        margin-left: -50px;
    }
    #about{
        display:flex;
        width:550px;
        align-items: center;
        text-align: justify;
        flex-wrap: wrap;
        color:rgb(61, 44, 36);
        font-family: 'Roboto', sans-serif;
        font-weight:100;
        font-size:30px;
    }
    #contact-bottom{
        display:flex;
        flex-direction:column ;
        padding-top:15px;
        padding-bottom:15px;
        width:100%;
        justify-content:center;
        align-items: center;
        padding-left:50px;
        padding-right:50px;
        box-sizing: border-box;
        box-shadow: 0px -5px 10px rgba(94, 94, 94, 0.336);
        background-color: rgb(231, 217, 199);
    }
    .c{
        display:flex;
        margin:15px;
        font-family: 'Roboto', sans-serif;
        font-weight:100;
        font-size:24px;
        flex-wrap: wrap;
        width:40%;
        justify-content: center;
        text-align: center;
    }
    @media (min-width: 300px) and (max-width:800px) {
        #top{
        flex-direction: column;
        justify-content: space-around;
        padding-left:20px;
        height:160px;
        padding-bottom: 10px;
        width:100%;
        }  
        #contact-top{
            width:100%;
            box-sizing: border-box;
            padding-right:10px;
        } 
        #main{
            flex-direction: column;
            flex-wrap: nowrap;
            width:100%;
            align-items: center;
        }
        .pic{
            width:350px;
            display:flex;
            margin-left:50px;
        }
        img{
            width:100%;
        }
        #about{
            display: flex;
            flex-wrap: wrap;
            font-size: 24px;
            width:90%;
            margin-top:30px;          
        }
        .c{
            flex-wrap: wrap;
            width:100%;
            justify-content: center;
            text-align: center;
        }
    }
</style>
<body>
    <div id="top">
        <div id="title">[Your title]</div>
        <div id="contact-top">
            [номер телефона или tg/vk/ig]
        </div>
    </div>
    <div id="main">
        <div class="pic" id="picture">
            <img src="https://i.pinimg.com/originals/c5/4c/3b/c54c3b22a044e74edd87094ea8084614.jpg">
        </div>
        <div id="about">
            Здесь можно составить описание вашего дела или просто написать что-то хорошее :)
        </div>
    </div>
    <div id="contact-bottom">
        <div class="c" id="address">
            [Адрес]
        </div>
        <div class="c" id="phone">
            [Номер телефона]
        </div>
        <div class="c" id="other-information">
            [иная информация, например часы работы, доставка и т.д.]
        </div>
    </div>
</body>
</html>`;

let htmlContent = htmlContentOriginal

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
        command:'title',
        description:'Заголовок'
    },
    {
        command:'contact',
        description:'Контактная информация сверху'
    },
    {
        command:'img',
        description:'Отправить изображение'
    },
    {
        command:'description',
        description:'Описание рядом с картинкой'
    },
    {
        command:'address',
        description:'Адрес'
    },
    {
        command:'phone',
        description:'Номер телефона'
    },
    {
        command:'other',
        description:'Иная информация'
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

bot.onText(/\/start/, async msg => {
    try{
        await bot.sendPhoto(msg.chat.id, 'presentation-template.jpg',
        {
            caption:'Привет, вот пример того, что может получиться, тебе достаточно заполнить шаблонные поля 🫶🏻'
        }
        )
    }
    catch(err){
        console.error()
    }
})

bot.onText(/\/title/, async msg => {
    try{
        await bot.sendMessage(msg.chat.id, 'Введите название:')
        bot.on('text', async msg =>{
            try{
                let userInput = msg.text
                htmlContent = htmlContent.replace(`[Your title]`, userInput)
                console.log('Название успешно добавлено!')
            }
            catch(err){
                console.error()
            }
        })
    }
    catch(err){
        console.error()
    }
})

bot.onText(/\/contact/, async msg => {
    try{
        await bot.sendMessage(msg.chat.id, 'Введите контактную информацию, номер телефона, telegram, vk или другие соцсети:')
        bot.on('text', async msg =>{
            try{
                let userInput = msg.text
                htmlContent = htmlContent.replace(`[номер телефона или tg/vk/ig]`, userInput)
                console.log( 'Успешно добавлено!')
            }
            catch(err){
                console.error()
            }
        })
    }
    catch(err){
        console.error()
    }
})

bot.onText(/\/img/, async msg => {
    try{
        await bot.sendMessage(msg.chat.id, 'Пришлите пожалуйста ссылку на картинку в открытых источниках, for example, она может быть опубликована на пинтерест или в группе вконтакте (или по-другому, но если долго ничего не происходит, лучше попробовать другую ссылку 🤷‍♀️):')
        bot.on('text', async msg =>{
            try{
                let userInput = msg.text
                htmlContent = htmlContent.replace(`https://i.pinimg.com/originals/c5/4c/3b/c54c3b22a044e74edd87094ea8084614.jpg`, userInput)
                console.log('Изображение загружено!')
            }
            catch(err){
                console.error()
            }
        })
    }
    catch(err){
        console.error()
    }
})

bot.onText(/\/description/, async msg => {
    try{
        await bot.sendMessage(msg.chat.id, 'Введите небольшое описание того, о чем вы хотите рассказать:')
        bot.on('text', async msg =>{
            try{
                let userInput = msg.text
                htmlContent = htmlContent.replace(`Здесь можно составить описание вашего дела или просто написать что-то хорошее :)`, userInput)
                console.log('Описание успешно добавлено!')
            }
            catch(err){
                console.error()
            }
        })
    }
    catch(err){
        console.error()
    }
})

bot.onText(/\/address/, async msg => {
    try{
        await bot.sendMessage(msg.chat.id, 'Введите адрес или иную контактную информацию на ваш вкус:')
        bot.on('text', async msg =>{
            try{
                let userInput = msg.text
                htmlContent = htmlContent.replace(`[Адрес]`, userInput)
                console.log('Адрес добавлен!')
            }
            catch(err){
                console.error()
            }
        })
    }
    catch(err){
        console.error()
    }
})

bot.onText(/\/phone/, async msg => {
    try{
        await bot.sendMessage(msg.chat.id, 'Введите номер телефона или иную контактную информацию на ваш вкус:')
        bot.on('text', async msg =>{
            try{
                let userInput = msg.text
                htmlContent = htmlContent.replace(`[Номер телефона]`, userInput)
                console.log('Номер успешно обновлён!')
            }
            catch(err){
                console.error()
            }
        })
    }
    catch(err){
        console.error()
    }
})

bot.onText(/\/other/, async msg => {
    try{
        await bot.sendMessage(msg.chat.id, 'Введите иную контактную информацию на ваш вкус (при желании поле можно оставить пустым):')
        bot.on('text', async msg =>{
            try{
                let userInput = msg.text
                htmlContent = htmlContent.replace(`[иная информация, например часы работы, доставка и т.д.]`, userInput)
                console.log('Успешно!')
            }
            catch(err){
                console.error()
            }
        })
    }
    catch(err){
        console.error()
    }
})

bot.onText(/\/save/, async msg => {
    try{      
        fs.writeFile('result-page.html', htmlContent, (error) => { 
            try{
                throw new Error();
            } catch(e){
                console.error()
            }
        })
        try{
            await bot.sendDocument(msg.chat.id, 'result-page.html', {
                caption:'Отлично, ваш лендинг готов, надеюсь, вам понравится! В будущем вы сможете пополнять данный лендинг, а мы будем стараться быть лучше для вас ✨'
            })
        }
        catch(err){
            console.error()
        }
        htmlContent = htmlContentOriginal
        try{
            await bot.sendMessage(msg.chat.id, 'Для работы со следующим проектом требуется перезапуск бота🙏🏻')
        }
        catch(err){
            console.error()
        }
        bot.close()
    }
    catch(err){
        console.error()
    }
})