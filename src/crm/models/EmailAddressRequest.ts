/* tslint:disable */
/* eslint-disable */
/**
 * Merge CRM API
 * The unified API for building rich integrations with multiple CRM platforms.
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
 * # The EmailAddress Object
 * ### Description
 * The `EmailAddress` object is used to represent an entity's email address.
 * ### Usage Example
 * Fetch from the `GET Contact` endpoint and view their email addresses.
 * @export
 * @interface EmailAddressRequest
 */
export interface EmailAddressRequest {
    /**
     * The email address.
     * @type {string}
     * @memberof EmailAddressRequest
     */
    email_address?: string | null;
    /**
     * The email address's type.
     * @type {string}
     * @memberof EmailAddressRequest
     */
    email_address_type?: string | null;
}

export function EmailAddressRequestFromJSON(json: JSONValue): EmailAddressRequest | undefined {
    return EmailAddressRequestFromJSONTyped(json);
}

export function EmailAddressRequestFromJSONTyped(json: JSONValue): EmailAddressRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'email_address': !exists(json, 'email_address') ? undefined : json['email_address'],
        'email_address_type': !exists(json, 'email_address_type') ? undefined : json['email_address_type'],
    };
}

export function EmailAddressRequestToJSON(value?: EmailAddressRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'email_address': value.email_address,
        'email_address_type': value.email_address_type,
    };
}

