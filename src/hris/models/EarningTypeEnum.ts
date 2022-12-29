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
export enum EarningTypeEnum {
    MERGE_NONSTANDARD_VALUE = 'MERGE_NONSTANDARD_VALUE',
    Salary = 'SALARY',
    Reimbursement = 'REIMBURSEMENT',
    Overtime = 'OVERTIME',
    Bonus = 'BONUS'
}


export function EarningTypeEnumFromJSON(json: any): EarningTypeEnum {
    return EarningTypeEnumFromJSONTyped(json, false);
}

export function EarningTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): EarningTypeEnum {
    if ((<any>Object).values(EarningTypeEnum).includes(json)) {
        return json as EarningTypeEnum;
    }
    return EarningTypeEnum.MERGE_NONSTANDARD_VALUE;
}

export function EarningTypeEnumToJSON(value?: EarningTypeEnum | null): JSONValue {
    return value ? value as string : null;
}

