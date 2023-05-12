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
 * * `REGULAR` - REGULAR
 * * `OFF_CYCLE` - OFF_CYCLE
 * * `CORRECTION` - CORRECTION
 * * `TERMINATION` - TERMINATION
 * * `SIGN_ON_BONUS` - SIGN_ON_BONUS
 * @export
 * @enum {string}
 */
export enum RunTypeEnumValues {
    MERGE_NONSTANDARD_VALUE = 'MERGE_NONSTANDARD_VALUE',
    Regular = 'REGULAR',
    OffCycle = 'OFF_CYCLE',
    Correction = 'CORRECTION',
    Termination = 'TERMINATION',
    SignOnBonus = 'SIGN_ON_BONUS'
}

export interface RunTypeEnum {
    value: RunTypeEnumValues,
    rawValue: string
}


export function RunTypeEnumFromJSON(json: any): RunTypeEnum {
    return RunTypeEnumFromJSONTyped(json, false);
}

export function RunTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): RunTypeEnum {
    if ((<any>Object).values(RunTypeEnumValues).includes(json)) {
        return {
            value: json as RunTypeEnumValues,
            rawValue: json as string
        }
    }
    return {
        value: RunTypeEnumValues.MERGE_NONSTANDARD_VALUE,
        rawValue: json as string
    }
}

export function RunTypeEnumToJSON(value?: RunTypeEnum | null): JSONValue {
    return value && value.value != RunTypeEnumValues.MERGE_NONSTANDARD_VALUE ? value.value as string : null;
}

