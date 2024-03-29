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
 * * `REQUESTED` - REQUESTED
 * * `APPROVED` - APPROVED
 * * `DECLINED` - DECLINED
 * * `CANCELLED` - CANCELLED
 * * `DELETED` - DELETED
 * @export
 * @enum {string}
 */
export enum TimeOffStatusEnumValues {
    MERGE_NONSTANDARD_VALUE = 'MERGE_NONSTANDARD_VALUE',
    Requested = 'REQUESTED',
    Approved = 'APPROVED',
    Declined = 'DECLINED',
    Cancelled = 'CANCELLED',
    Deleted = 'DELETED'
}

export interface TimeOffStatusEnum {
    value: TimeOffStatusEnumValues,
    rawValue: string
}


export function TimeOffStatusEnumFromJSON(json: any): TimeOffStatusEnum {
    return TimeOffStatusEnumFromJSONTyped(json, false);
}

export function TimeOffStatusEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeOffStatusEnum {
    if ((<any>Object).values(TimeOffStatusEnumValues).includes(json)) {
        return {
            value: json as TimeOffStatusEnumValues,
            rawValue: json as string
        }
    }
    return {
        value: TimeOffStatusEnumValues.MERGE_NONSTANDARD_VALUE,
        rawValue: json as string
    }
}

export function TimeOffStatusEnumToJSON(value?: TimeOffStatusEnum | null): JSONValue {
    return value && value.value != TimeOffStatusEnumValues.MERGE_NONSTANDARD_VALUE ? value.value as string : null;
}

