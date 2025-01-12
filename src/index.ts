import { Hono } from 'hono'
import {logger} from "hono/logger";

import {initateSeeding} from "./infra/database/seeder";
import callMakingController from "./webApis/controllers/call-making.controller";
import {customLogger} from "./utils/logger";

const app = new Hono()
app.use(logger(customLogger))

export const api_prefix = '/api/v1'

app.route(`${api_prefix}/call`, callMakingController)


export default app
