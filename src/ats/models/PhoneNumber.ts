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

import { exists, mapValues } from '../../runtime';
import { JSONValue } from '../../merge_json';
import {
    PhoneNumberTypeEnum,
    PhoneNumberTypeEnumFromJSON,
    PhoneNumberTypeEnumFromJSONTyped,
    PhoneNumberTypeEnumToJSON,
} from './';


/**
 * # The PhoneNumber Object
 * ### Description
 * The `PhoneNumber` object is used to represent a candidate's phone number.
 * ### Usage Example
 * Fetch from the `GET Candidate` endpoint and view their phone numbers.
 * @export
 * @interface PhoneNumber
 */
export interface PhoneNumber {
    /**
     * The phone number.
     * @type {string}
     * @memberof PhoneNumber
     */
    value?: string | null;
    /**
     * The type of phone number.
     * 
     * * `HOME` - HOME
     * * `WORK` - WORK
     * * `MOBILE` - MOBILE
     * * `SKYPE` - SKYPE
     * * `OTHER` - OTHER
     * @type {PhoneNumberTypeEnum}
     * @memberof PhoneNumber
     */
    phone_number_type?: PhoneNumberTypeEnum | null;
    /**
     * This is the datetime that this object was last updated by Merge
     * @type {Date}
     * @memberof PhoneNumber
     */
    readonly modified_at?: Date;
}

export function PhoneNumberFromJSON(json: JSONValue): PhoneNumber | undefined {
    return PhoneNumberFromJSONTyped(json);
}

export function PhoneNumberFromJSONTyped(json: JSONValue): PhoneNumber | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
        'phone_number_type': !exists(json, 'phone_number_type') ? undefined : PhoneNumberTypeEnumFromJSON(json['phone_number_type']) as PhoneNumberTypeEnum,
        'modified_at': !exists(json, 'modified_at') ? undefined : (new Date(json['modified_at'])),
    };
}

export function PhoneNumberToJSON(value?: PhoneNumber): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'value': value.value,
        'phone_number_type': PhoneNumberTypeEnumToJSON(value.phone_number_type),
    };
}

