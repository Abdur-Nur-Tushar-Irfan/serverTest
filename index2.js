const express = require('express')
const app = express()
const port = 3000

const usersCollection = client.db('laptopCollection').collection('users')

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/users', async (req, res) => {
    const users = req.body
    const result = await usersCollection.insertOne(users)
    res.send(result)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})