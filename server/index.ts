#!/bin/env ts-node
import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.write(`
  <html lang="zh">
  <body>
  <div>
    Hello, world!
  </div>
  </body>
  </html>
  `)
})

app.listen(5555, () => {
  console.log('listen on http://localhost:5555')
})
