import {clients} from './entities';
import {db_main} from "./db";
import {seed} from "drizzle-seed";

export const initateSeeding = async () => {
    await seed(db_main, {clients})
}