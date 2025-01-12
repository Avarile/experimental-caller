import { Hono } from 'hono'
import {initateSeeding} from "./infra/database/seeder";
import callMakingController from "./webApis/controllers/call-making.controller";

const app = new Hono()

export const api_prefix = '/api/v1'

app.route(`${api_prefix}/call`, callMakingController)


export default app
