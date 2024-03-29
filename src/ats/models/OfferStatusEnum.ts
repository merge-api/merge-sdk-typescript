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
 * * `DRAFT` - DRAFT
 * * `APPROVAL-SENT` - APPROVAL-SENT
 * * `APPROVED` - APPROVED
 * * `SENT` - SENT
 * * `SENT-MANUALLY` - SENT-MANUALLY
 * * `OPENED` - OPENED
 * * `DENIED` - DENIED
 * * `SIGNED` - SIGNED
 * * `DEPRECATED` - DEPRECATED
 * @export
 * @enum {string}
 */
export enum OfferStatusEnumValues {
    MERGE_NONSTANDARD_VALUE = 'MERGE_NONSTANDARD_VALUE',
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

export interface OfferStatusEnum {
    value: OfferStatusEnumValues,
    rawValue: string
}


export function OfferStatusEnumFromJSON(json: any): OfferStatusEnum {
    return OfferStatusEnumFromJSONTyped(json, false);
}

export function OfferStatusEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): OfferStatusEnum {
    if ((<any>Object).values(OfferStatusEnumValues).includes(json)) {
        return {
            value: json as OfferStatusEnumValues,
            rawValue: json as string
        }
    }
    return {
        value: OfferStatusEnumValues.MERGE_NONSTANDARD_VALUE,
        rawValue: json as string
    }
}

export function OfferStatusEnumToJSON(value?: OfferStatusEnum | null): JSONValue {
    return value && value.value != OfferStatusEnumValues.MERGE_NONSTANDARD_VALUE ? value.value as string : null;
}

