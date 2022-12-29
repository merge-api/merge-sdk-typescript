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
 * 
 * @export
 * @enum {string}
 */
export enum MethodEnum {
    MERGE_NONSTANDARD_VALUE = 'MERGE_NONSTANDARD_VALUE',
    Get = 'GET',
    Options = 'OPTIONS',
    Head = 'HEAD',
    Post = 'POST',
    Put = 'PUT',
    Patch = 'PATCH',
    Delete = 'DELETE'
}


export function MethodEnumFromJSON(json: any): MethodEnum {
    return MethodEnumFromJSONTyped(json, false);
}

export function MethodEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): MethodEnum {
    if ((<any>Object).values(MethodEnum).includes(json)) {
        return json as MethodEnum;
    }
    return MethodEnum.MERGE_NONSTANDARD_VALUE;
}

export function MethodEnumToJSON(value?: MethodEnum | null): JSONValue {
    return value ? value as string : null;
}

