import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import yaml from 'js-yaml';
import { Express } from 'express';

export function setupSwagger(app: Express) {
  const swaggerFile = fs.readFileSync(__dirname + '/../../resources/swagger.yaml', 'utf8');
  const swaggerDocument = yaml.load(swaggerFile);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}
