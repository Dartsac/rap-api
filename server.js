const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let rappers = {
  '21_savage': {
    age: 28,
    birthName: 'Sheyaa Bin Abraham-Joseph',
    birthLocation: 'London, England',
  },
  'chance_the_rapper': {
    age: 27,
    birthName: 'Chancelor Jonathan Bennett',
    birthLocation: 'Chicago, Illinois',
  },
  unknown: {
    age: 'unknown',
    birthName: 'unknown',
    birthLocation: 'unknown',
  },
}

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html')
})

app.get('/api/rappers/:rapperName', (request, response) => {
  const rapName = request.params.rapperName.toLowerCase()
  console.log(rapName)
  if (rappers[rapName]) {
    response.json(rappers[rapName])
  } else {
    response.json(rappers['unknown'])
  }
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
