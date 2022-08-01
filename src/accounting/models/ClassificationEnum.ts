/* tslint:disable */
/* eslint-disable */
/**
 * Merge Accounting API
 * The unified API for building rich integrations with multiple Accounting & Finance platforms.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: hello@merge.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * 
 * @export
 * @enum {string}
 */
export enum ClassificationEnum {
    Asset = 'ASSET',
    Equity = 'EQUITY',
    Expense = 'EXPENSE',
    Liability = 'LIABILITY',
    Revenue = 'REVENUE'
}

export function ClassificationEnumFromJSON(json: any): ClassificationEnum {
    return ClassificationEnumFromJSONTyped(json, false);
}

export function ClassificationEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClassificationEnum {
    return json as ClassificationEnum;
}

export function ClassificationEnumToJSON(value?: ClassificationEnum | null): any {
    return value as any;
}

