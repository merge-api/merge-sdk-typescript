/* tslint:disable */
/* eslint-disable */
/**
 * Merge ATS API
 * The unified API for building rich integrations with multiple Applicant Tracking System platforms.
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
 * * `JSON` - JSON
 * * `XML` - XML
 * * `MULTIPART` - MULTIPART
 * @export
 * @enum {string}
 */
export enum RequestFormatEnumValues {
    MERGE_NONSTANDARD_VALUE = 'MERGE_NONSTANDARD_VALUE',
    Json = 'JSON',
    Xml = 'XML',
    Multipart = 'MULTIPART'
}

export interface RequestFormatEnum {
    value: RequestFormatEnumValues,
    rawValue: string
}


export function RequestFormatEnumFromJSON(json: any): RequestFormatEnum {
    return RequestFormatEnumFromJSONTyped(json, false);
}

export function RequestFormatEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): RequestFormatEnum {
    if ((<any>Object).values(RequestFormatEnumValues).includes(json)) {
        return {
            value: json as RequestFormatEnumValues,
            rawValue: json as string
        }
    }
    return {
        value: RequestFormatEnumValues.MERGE_NONSTANDARD_VALUE,
        rawValue: json as string
    }
}

export function RequestFormatEnumToJSON(value?: RequestFormatEnum | null): JSONValue {
    return value && value.value != RequestFormatEnumValues.MERGE_NONSTANDARD_VALUE ? value.value as string : null;
}

