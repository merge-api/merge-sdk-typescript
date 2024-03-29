/* tslint:disable */
/* eslint-disable */
/**
 * Merge ATS API
 * The unified API for building rich integrations with multiple Applicant Tracking System platforms.
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
 * * `ADMIN_ONLY` - ADMIN_ONLY
 * * `PUBLIC` - PUBLIC
 * * `PRIVATE` - PRIVATE
 * @export
 * @enum {string}
 */
export enum VisibilityEnumValues {
    MERGE_NONSTANDARD_VALUE = 'MERGE_NONSTANDARD_VALUE',
    AdminOnly = 'ADMIN_ONLY',
    Public = 'PUBLIC',
    Private = 'PRIVATE'
}

export interface VisibilityEnum {
    value: VisibilityEnumValues,
    rawValue: string
}


export function VisibilityEnumFromJSON(json: any): VisibilityEnum {
    return VisibilityEnumFromJSONTyped(json, false);
}

export function VisibilityEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): VisibilityEnum {
    if ((<any>Object).values(VisibilityEnumValues).includes(json)) {
        return {
            value: json as VisibilityEnumValues,
            rawValue: json as string
        }
    }
    return {
        value: VisibilityEnumValues.MERGE_NONSTANDARD_VALUE,
        rawValue: json as string
    }
}

export function VisibilityEnumToJSON(value?: VisibilityEnum | null): JSONValue {
    return value && value.value != VisibilityEnumValues.MERGE_NONSTANDARD_VALUE ? value.value as string : null;
}

