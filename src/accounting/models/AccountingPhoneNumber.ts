/* tslint:disable */
/* eslint-disable */
/**
 * Merge Accounting API
 * The unified API for building rich integrations with multiple Accounting & Finance platforms.
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

/**
 * # The AccountingPhoneNumber Object
 * ### Description
 * The `AccountingPhoneNumber` object is used to represent a contact's or company's phone number.
 * 
 * ### Usage Example
 * Fetch from the `GET CompanyInfo` endpoint and view the company's phone numbers.
 * @export
 * @interface AccountingPhoneNumber
 */
export interface AccountingPhoneNumber {
    /**
     * The phone number.
     * @type {string}
     * @memberof AccountingPhoneNumber
     */
    number?: string | null;
    /**
     * The phone number's type.
     * @type {string}
     * @memberof AccountingPhoneNumber
     */
    type?: string | null;
    /**
     * This is the datetime that this object was last updated by Merge
     * @type {Date}
     * @memberof AccountingPhoneNumber
     */
    readonly modified_at?: Date;
}

export function AccountingPhoneNumberFromJSON(json: JSONValue): AccountingPhoneNumber | undefined {
    return AccountingPhoneNumberFromJSONTyped(json);
}

export function AccountingPhoneNumberFromJSONTyped(json: JSONValue): AccountingPhoneNumber | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'number': !exists(json, 'number') ? undefined : json['number'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'modified_at': !exists(json, 'modified_at') ? undefined : (new Date(json['modified_at'])),
    };
}

export function AccountingPhoneNumberToJSON(value?: AccountingPhoneNumber): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'number': value.number,
        'type': value.type,
    };
}

