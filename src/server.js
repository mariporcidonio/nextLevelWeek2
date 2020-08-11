const proffys = [
    {
        name: "Diego Kock",
        avatar: "https://avatars2.githubusercontent.com/u/49199011?s=460&u=e25ed31b9303279e10b98bc842041f4630ef11a8&v=4",
        whatsapp: "27998537669",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br /><br />Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Diego Kock",
        avatar: "https://avatars2.githubusercontent.com/u/49199011?s=460&u=e25ed31b9303279e10b98bc842041f4630ef11a8&v=4",
        whatsapp: "27998537669",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br /><br />Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    }
]

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    return res.render("study.html", {proffys})
}

function pageGiveClasses(req, res) {
    return res.render("give-classes.html")
}

const express = require('express')
const server = express()

//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
    //configurar arquivos estáticos (css, scripts, imagens)
    .use(express.static("public"))
    //rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .listen(5000)