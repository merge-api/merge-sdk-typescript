/* tslint:disable */
/* eslint-disable */
/**
 * Merge Marketing Automation API
 * The unified API for building rich integrations with multiple Marketing Automation platforms.
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
 * * `TRIGGER_EVENT` - TRIGGER_EVENT
 * * `RECURRENCE` - RECURRENCE
 * @export
 * @enum {string}
 */
export enum TriggerTypeEnumValues {
    MERGE_NONSTANDARD_VALUE = 'MERGE_NONSTANDARD_VALUE',
    TriggerEvent = 'TRIGGER_EVENT',
    Recurrence = 'RECURRENCE'
}

export interface TriggerTypeEnum {
    value: TriggerTypeEnumValues,
    rawValue: string
}


export function TriggerTypeEnumFromJSON(json: any): TriggerTypeEnum {
    return TriggerTypeEnumFromJSONTyped(json, false);
}

export function TriggerTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): TriggerTypeEnum {
    if ((<any>Object).values(TriggerTypeEnumValues).includes(json)) {
        return {
            value: json as TriggerTypeEnumValues,
            rawValue: json as string
        }
    }
    return {
        value: TriggerTypeEnumValues.MERGE_NONSTANDARD_VALUE,
        rawValue: json as string
    }
}

export function TriggerTypeEnumToJSON(value?: TriggerTypeEnum | null): JSONValue {
    return value && value.value != TriggerTypeEnumValues.MERGE_NONSTANDARD_VALUE ? value.value as string : null;
}

