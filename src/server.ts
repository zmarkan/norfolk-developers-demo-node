import app from './app'

const PORT = process.env.PORT || 3000 //TODO: heroku port

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})