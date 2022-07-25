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

/**
 * 
 * @export
 * @enum {string}
 */
export enum IssueStatusEnum {
    Ongoing = 'ONGOING',
    Resolved = 'RESOLVED'
}

export function IssueStatusEnumFromJSON(json: any): IssueStatusEnum {
    return IssueStatusEnumFromJSONTyped(json, false);
}

export function IssueStatusEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): IssueStatusEnum {
    return json as IssueStatusEnum;
}

export function IssueStatusEnumToJSON(value?: IssueStatusEnum | null): any {
    return value as any;
}

