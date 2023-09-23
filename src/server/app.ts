
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { apiDocumentation } from './../docs/apidoc';

const app = express()
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

app.use('/documentation', swaggerUi.serve, swaggerUi.setup(apiDocumentation));
