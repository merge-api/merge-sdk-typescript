export type JSONValue =
    | string
    | number
    | boolean
    | JSONObject
    | JSONArray
    | undefined
    | null;

export interface JSONObject {
    [x: string]: JSONValue;
}

export interface JSONArray extends Array<JSONValue> { }
