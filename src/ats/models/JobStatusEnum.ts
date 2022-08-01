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

/**
 * 
 * @export
 * @enum {string}
 */
export enum JobStatusEnum {
    Open = 'OPEN',
    Closed = 'CLOSED',
    Draft = 'DRAFT',
    Archived = 'ARCHIVED',
    Pending = 'PENDING'
}

export function JobStatusEnumFromJSON(json: any): JobStatusEnum {
    return JobStatusEnumFromJSONTyped(json, false);
}

export function JobStatusEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobStatusEnum {
    return json as JobStatusEnum;
}

export function JobStatusEnumToJSON(value?: JobStatusEnum | null): any {
    return value as any;
}

