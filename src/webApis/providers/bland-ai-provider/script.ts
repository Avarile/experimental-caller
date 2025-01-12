export interface ISendCall {
    "phone_number": string,
    "from": null,
    "task": string,
    "model": "enhanced",
    "language": "en",
    "voice": "lucy",
    "voice_settings": {},
    "pathway_id": null,
    "local_dialing": false,
    "max_duration": "5",
    "answered_by_enabled": false,
    "wait_for_greeting": true,
    "noise_cancellation": true,
    "record": false,
    "amd": false,
    "interruption_threshold": 100,
    "voicemail_message": null,
    "temperature": null,
    "transfer_phone_number": null,
    "transfer_list": {},
    "metadata": null,
    "pronunciation_guide": [],
    "start_time": null,
    "background_track": "none",
    // specific facts, like the caller's name, what the client's preferences are, etc. The AI agent will be aware of both the key names as well as their corresponding values.
    "request_data": Array<{ key: string, value: string }>,
    "tools": [],
    "dynamic_data": [],
    "analysis_preset": null,
    // The analysis schema is a feature that allows you to define a JSON schema for extracting specific information from a call. This schema helps in retrieving structured data such as email addresses, names, appointment times, or any other custom data you need from the call.
    "analysis_schema": Array<{ key: string, value: string }>,
    "webhook": string,
    "calendly": {},
    "timezone": "Pacific/Noumea"
}

export const arrayToRecord = (arr: Array<{ key: string, value: string }>): Record<string, string> => {
    return arr.reduce((acc, curr) => {
        acc[curr.key] = curr.value;
        return acc;
    }, {} as Record<string, string>);
}

export const assembleCallPayload = (call: ISendCall) => {
    return {
        ...call,
        request_data: arrayToRecord(call.request_data),
        analysis_preset: arrayToRecord(call.analysis_schema)
    }
}