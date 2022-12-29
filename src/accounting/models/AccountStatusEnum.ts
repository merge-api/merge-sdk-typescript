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

import { JSONValue } from "../../merge_json";

/**
 * 
 * @export
 * @enum {string}
 */
export enum AccountStatusEnum {
    MERGE_NONSTANDARD_VALUE = 'MERGE_NONSTANDARD_VALUE',
    Active = 'ACTIVE',
    Pending = 'PENDING',
    Inactive = 'INACTIVE'
}


export function AccountStatusEnumFromJSON(json: any): AccountStatusEnum {
    return AccountStatusEnumFromJSONTyped(json, false);
}

export function AccountStatusEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountStatusEnum {
    if ((<any>Object).values(AccountStatusEnum).includes(json)) {
        return json as AccountStatusEnum;
    }
    return AccountStatusEnum.MERGE_NONSTANDARD_VALUE;
}

export function AccountStatusEnumToJSON(value?: AccountStatusEnum | null): JSONValue {
    return value ? value as string : null;
}

