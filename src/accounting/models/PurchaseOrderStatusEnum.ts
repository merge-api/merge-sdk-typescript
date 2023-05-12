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
 * * `DRAFT` - DRAFT
 * * `SUBMITTED` - SUBMITTED
 * * `AUTHORIZED` - AUTHORIZED
 * * `BILLED` - BILLED
 * * `DELETED` - DELETED
 * @export
 * @enum {string}
 */
export enum PurchaseOrderStatusEnumValues {
    MERGE_NONSTANDARD_VALUE = 'MERGE_NONSTANDARD_VALUE',
    Draft = 'DRAFT',
    Submitted = 'SUBMITTED',
    Authorized = 'AUTHORIZED',
    Billed = 'BILLED',
    Deleted = 'DELETED'
}

export interface PurchaseOrderStatusEnum {
    value: PurchaseOrderStatusEnumValues,
    rawValue: string
}


export function PurchaseOrderStatusEnumFromJSON(json: any): PurchaseOrderStatusEnum {
    return PurchaseOrderStatusEnumFromJSONTyped(json, false);
}

export function PurchaseOrderStatusEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): PurchaseOrderStatusEnum {
    if ((<any>Object).values(PurchaseOrderStatusEnumValues).includes(json)) {
        return {
            value: json as PurchaseOrderStatusEnumValues,
            rawValue: json as string
        }
    }
    return {
        value: PurchaseOrderStatusEnumValues.MERGE_NONSTANDARD_VALUE,
        rawValue: json as string
    }
}

export function PurchaseOrderStatusEnumToJSON(value?: PurchaseOrderStatusEnum | null): JSONValue {
    return value && value.value != PurchaseOrderStatusEnumValues.MERGE_NONSTANDARD_VALUE ? value.value as string : null;
}

