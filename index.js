const path = require('path')
const express = require('express')
const app = express()
const expressStaticGzip = require('express-static-gzip')

const port = process.env.PORT || 8000

app.use(expressStaticGzip(path.resolve(__dirname, './dist')))

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, './dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(port, () => console.log(`app started on port: ${port}`)) // eslint-disable-line

