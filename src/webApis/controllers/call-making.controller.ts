import {Hono} from 'hono'
import {zValidator} from "@hono/zod-validator";
import {z} from "zod";

const schema = z.object({
    email: z.string().email(),
})

const app = new Hono()
    .post(`/single`, zValidator('json', schema), (c) => {
        const payload = c.req.valid("json")

        return c.json(payload, 201)
    })
    .post(`/batch`, (c) => {
        return c.json('create a book', 201)
    })


export default app

