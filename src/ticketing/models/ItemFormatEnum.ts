/* tslint:disable */
/* eslint-disable */
/**
 * Merge Ticketing API
 * The unified API for building rich integrations with multiple Ticketing platforms.
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
export enum ItemFormatEnumValues {
    MERGE_NONSTANDARD_VALUE = 'MERGE_NONSTANDARD_VALUE',
    Uuid = 'uuid',
    Url = 'url',
    Email = 'email',
    Phone = 'phone',
    Currency = 'currency',
    Decimal = 'decimal',
    Percent = 'percent'
}

export interface ItemFormatEnum {
    value: ItemFormatEnumValues,
    rawValue: string
}


export function ItemFormatEnumFromJSON(json: any): ItemFormatEnum {
    return ItemFormatEnumFromJSONTyped(json, false);
}

export function ItemFormatEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemFormatEnum {
    if ((<any>Object).values(ItemFormatEnumValues).includes(json)) {
        return {
            value: json as ItemFormatEnumValues,
            rawValue: json as string
        }
    }
    return {
        value: ItemFormatEnumValues.MERGE_NONSTANDARD_VALUE,
        rawValue: json as string
    }
}

export function ItemFormatEnumToJSON(value?: ItemFormatEnum | null): JSONValue {
    return value && value.value != ItemFormatEnumValues.MERGE_NONSTANDARD_VALUE ? value.value as string : null;
}
