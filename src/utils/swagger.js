const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const yaml = require('js-yaml');

function setupSwagger(app) {
  const swaggerFile = fs.readFileSync(__dirname + '/../../resources/swagger.yaml', 'utf8');
  const swaggerDocument = yaml.load(swaggerFile);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

module.exports = { setupSwagger };
