const express = require('express')
const app = express()
const port = 3000

const usersCollection = client.db('laptopCollection').collection('users')

app.get('/', (req, res) => {
  res.send('Hello World!')
})
 app.get("/users", async (req, res) => {
            const email = req.query.email;
            const query = { email: email };
            const users = await usersCollection.find(query).toArray();
            res.send(users);
        });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})