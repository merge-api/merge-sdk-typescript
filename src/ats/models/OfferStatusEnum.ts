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
export enum OfferStatusEnum {
    Draft = 'DRAFT',
    ApprovalSent = 'APPROVAL-SENT',
    Approved = 'APPROVED',
    Sent = 'SENT',
    SentManually = 'SENT-MANUALLY',
    Opened = 'OPENED',
    Denied = 'DENIED',
    Signed = 'SIGNED',
    Deprecated = 'DEPRECATED'
}

export function OfferStatusEnumFromJSON(json: any): OfferStatusEnum {
    return OfferStatusEnumFromJSONTyped(json, false);
}

export function OfferStatusEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): OfferStatusEnum {
    return json as OfferStatusEnum;
}

export function OfferStatusEnumToJSON(value?: OfferStatusEnum | null): any {
    return value as any;
}

