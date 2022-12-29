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
export enum PayPeriodEnum {
    MERGE_NONSTANDARD_VALUE = 'MERGE_NONSTANDARD_VALUE',
    Hour = 'HOUR',
    Day = 'DAY',
    Week = 'WEEK',
    EveryTwoWeeks = 'EVERY_TWO_WEEKS',
    Semimonthly = 'SEMIMONTHLY',
    Month = 'MONTH',
    Quarter = 'QUARTER',
    EverySixMonths = 'EVERY_SIX_MONTHS',
    Year = 'YEAR'
}


export function PayPeriodEnumFromJSON(json: any): PayPeriodEnum {
    return PayPeriodEnumFromJSONTyped(json, false);
}

export function PayPeriodEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayPeriodEnum {
    if ((<any>Object).values(PayPeriodEnum).includes(json)) {
        return json as PayPeriodEnum;
    }
    return PayPeriodEnum.MERGE_NONSTANDARD_VALUE;
}

export function PayPeriodEnumToJSON(value?: PayPeriodEnum | null): JSONValue {
    return value ? value as string : null;
}

