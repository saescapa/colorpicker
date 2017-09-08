const express = require('express')

let app = express()

app.use('/color/:colorid', (req,res) => {
  console.log(req.params.colorid)
  res.send('hello')
})

app.listen(process.env.PORT || 3000, () => {
  console.log('Colors running.')
})
