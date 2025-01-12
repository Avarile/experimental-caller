import configuration from "../../../infra/configuration";
import axios from "axios";
import {ISendCall} from "./script";

const BLAND_AI_API_URL = 'https://api.bland.ai/v1';
const headers = {
    'Authorization': configuration.BLAND_AI_API_KEY,
    'x-bland-org-id': 'afbae87f-4092-4e05-a281-ce4142c718b1'
};

export const blandAiProvider = {
    singleCall: async (call: ISendCall) => {
        await axios.post(`${BLAND_AI_API_URL}/send`, call, {headers});
    },
    bulkCall: async (calls: ISendCall[]) => {
    }
};

