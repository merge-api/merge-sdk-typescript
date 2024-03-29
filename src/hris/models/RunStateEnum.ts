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
 * * `PAID` - PAID
 * * `DRAFT` - DRAFT
 * * `APPROVED` - APPROVED
 * * `FAILED` - FAILED
 * * `CLOSED` - CLOSED
 * @export
 * @enum {string}
 */
export enum RunStateEnumValues {
    MERGE_NONSTANDARD_VALUE = 'MERGE_NONSTANDARD_VALUE',
    Paid = 'PAID',
    Draft = 'DRAFT',
    Approved = 'APPROVED',
    Failed = 'FAILED',
    Closed = 'CLOSED'
}

export interface RunStateEnum {
    value: RunStateEnumValues,
    rawValue: string
}


export function RunStateEnumFromJSON(json: any): RunStateEnum {
    return RunStateEnumFromJSONTyped(json, false);
}

export function RunStateEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): RunStateEnum {
    if ((<any>Object).values(RunStateEnumValues).includes(json)) {
        return {
            value: json as RunStateEnumValues,
            rawValue: json as string
        }
    }
    return {
        value: RunStateEnumValues.MERGE_NONSTANDARD_VALUE,
        rawValue: json as string
    }
}

export function RunStateEnumToJSON(value?: RunStateEnum | null): JSONValue {
    return value && value.value != RunStateEnumValues.MERGE_NONSTANDARD_VALUE ? value.value as string : null;
}

