import express from 'express'
const app = express()

app.use(express.static('static'))

app.get('/', (req, res) => {
    res.send(`
            <html>
                <head>
                    <title>Hello, world!</title>
                </head>
                <body>
                    <h1>Welcome to CircleCI</h1>
                    <img src="https://media.giphy.com/media/bmrxNoGqGNMAM/source.gif" alt="Pets and foods in space GIF" />
                </body>
            </html>
        `)
})

app.use((req, res, next) => {
    res.status(404).send(`
    <html>
        <head><title>NOT FOUND</title></head>
        <body>
            <img src="404.jpg" alt="Dog not found"/>
        </body>
    </html>
    `)
})

export default app