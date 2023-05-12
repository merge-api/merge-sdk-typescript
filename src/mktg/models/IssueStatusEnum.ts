/* tslint:disable */
/* eslint-disable */
/**
 * Merge Marketing Automation API
 * The unified API for building rich integrations with multiple Marketing Automation platforms.
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
 * * `ONGOING` - ONGOING
 * * `RESOLVED` - RESOLVED
 * @export
 * @enum {string}
 */
export enum IssueStatusEnumValues {
    MERGE_NONSTANDARD_VALUE = 'MERGE_NONSTANDARD_VALUE',
    Ongoing = 'ONGOING',
    Resolved = 'RESOLVED'
}

export interface IssueStatusEnum {
    value: IssueStatusEnumValues,
    rawValue: string
}


export function IssueStatusEnumFromJSON(json: any): IssueStatusEnum {
    return IssueStatusEnumFromJSONTyped(json, false);
}

export function IssueStatusEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): IssueStatusEnum {
    if ((<any>Object).values(IssueStatusEnumValues).includes(json)) {
        return {
            value: json as IssueStatusEnumValues,
            rawValue: json as string
        }
    }
    return {
        value: IssueStatusEnumValues.MERGE_NONSTANDARD_VALUE,
        rawValue: json as string
    }
}

export function IssueStatusEnumToJSON(value?: IssueStatusEnum | null): JSONValue {
    return value && value.value != IssueStatusEnumValues.MERGE_NONSTANDARD_VALUE ? value.value as string : null;
}

