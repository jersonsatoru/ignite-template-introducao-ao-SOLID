import swaggerUi from "swagger-ui-express";

import path from 'path'

import { app } from ".";

import Yaml from 'yamljs'

const swaggerFile = Yaml.load(path.resolve(__dirname, 'swagger.yml'))

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(3333, () => console.log("Server is running!"));
