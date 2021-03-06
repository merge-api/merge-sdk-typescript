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
export enum ScheduledInterviewStatusEnum {
    Scheduled = 'SCHEDULED',
    AwaitingFeedback = 'AWAITING_FEEDBACK',
    Complete = 'COMPLETE'
}

export function ScheduledInterviewStatusEnumFromJSON(json: any): ScheduledInterviewStatusEnum {
    return ScheduledInterviewStatusEnumFromJSONTyped(json, false);
}

export function ScheduledInterviewStatusEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScheduledInterviewStatusEnum {
    return json as ScheduledInterviewStatusEnum;
}

export function ScheduledInterviewStatusEnumToJSON(value?: ScheduledInterviewStatusEnum | null): any {
    return value as any;
}

