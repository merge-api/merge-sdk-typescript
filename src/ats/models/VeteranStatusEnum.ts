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
export enum VeteranStatusEnum {
    AmNotAProtectedVeteran = 'I_AM_NOT_A_PROTECTED_VETERAN',
    IdentifyAsOneOrMoreOfTheClassificationsOfAProtectedVeteran = 'I_IDENTIFY_AS_ONE_OR_MORE_OF_THE_CLASSIFICATIONS_OF_A_PROTECTED_VETERAN',
    DontWishToAnswer = 'I_DONT_WISH_TO_ANSWER'
}

export function VeteranStatusEnumFromJSON(json: any): VeteranStatusEnum {
    return VeteranStatusEnumFromJSONTyped(json, false);
}

export function VeteranStatusEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): VeteranStatusEnum {
    return json as VeteranStatusEnum;
}

export function VeteranStatusEnumToJSON(value?: VeteranStatusEnum | null): any {
    return value as any;
}

