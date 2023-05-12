/* tslint:disable */
/* eslint-disable */
/**
 * Merge HRIS API
 * The unified API for building rich integrations with multiple HR Information System platforms.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: hello@merge.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { JSONValue } from "../../merge_json";

/**
 * * `RAW` - RAW
 * * `BASE64` - BASE64
 * * `GZIP_BASE64` - GZIP_BASE64
 * @export
 * @enum {string}
 */
export enum EncodingEnumValues {
    MERGE_NONSTANDARD_VALUE = 'MERGE_NONSTANDARD_VALUE',
    Raw = 'RAW',
    Base64 = 'BASE64',
    GzipBase64 = 'GZIP_BASE64'
}

export interface EncodingEnum {
    value: EncodingEnumValues,
    rawValue: string
}


export function EncodingEnumFromJSON(json: any): EncodingEnum {
    return EncodingEnumFromJSONTyped(json, false);
}

export function EncodingEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): EncodingEnum {
    if ((<any>Object).values(EncodingEnumValues).includes(json)) {
        return {
            value: json as EncodingEnumValues,
            rawValue: json as string
        }
    }
    return {
        value: EncodingEnumValues.MERGE_NONSTANDARD_VALUE,
        rawValue: json as string
    }
}

export function EncodingEnumToJSON(value?: EncodingEnum | null): JSONValue {
    return value && value.value != EncodingEnumValues.MERGE_NONSTANDARD_VALUE ? value.value as string : null;
}

