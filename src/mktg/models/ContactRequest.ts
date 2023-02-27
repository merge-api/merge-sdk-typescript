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

import { exists, mapValues } from '../../runtime';
import { JSONValue } from '../../merge_json';
import {
    CountryEnum,
    CountryEnumFromJSON,
    CountryEnumFromJSONTyped,
    CountryEnumToJSON,
} from './';


/**
 * # The Contact Object
 * ### Description
 * The `Contact` object is used to represent a contact in the remote system.
 * ### Usage Example
 * Fetch from the `GET /api/mktg/v1/contact` endpoint and view their phone numbers.
 * @export
 * @interface ContactRequest
 */
export interface ContactRequest {
    /**
     * The contact's first name.
     * @type {string}
     * @memberof ContactRequest
     */
    first_name?: string | null;
    /**
     * The contact's last name.
     * @type {string}
     * @memberof ContactRequest
     */
    last_name?: string | null;
    /**
     * The contact's email.
     * @type {string}
     * @memberof ContactRequest
     */
    email?: string | null;
    /**
     * The contact's phone.
     * @type {string}
     * @memberof ContactRequest
     */
    phone?: string | null;
    /**
     * The contact's state.
     * @type {string}
     * @memberof ContactRequest
     */
    state?: string | null;
    /**
     * The contact's country.
     * @type {CountryEnum}
     * @memberof ContactRequest
     */
    country?: CountryEnum | null;
    /**
     * The contact's postal code.
     * @type {string}
     * @memberof ContactRequest
     */
    postal_code?: string | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ContactRequest
     */
    integration_params?: { [key: string]: any; } | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ContactRequest
     */
    linked_account_params?: { [key: string]: any; } | null;
}

export function ContactRequestFromJSON(json: JSONValue): ContactRequest | undefined {
    return ContactRequestFromJSONTyped(json);
}

export function ContactRequestFromJSONTyped(json: JSONValue): ContactRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'first_name': !exists(json, 'first_name') ? undefined : json['first_name'],
        'last_name': !exists(json, 'last_name') ? undefined : json['last_name'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'country': !exists(json, 'country') ? undefined : CountryEnumFromJSON(json['country']) as CountryEnum,
        'postal_code': !exists(json, 'postal_code') ? undefined : json['postal_code'],
        'integration_params': !exists(json, 'integration_params') ? undefined : json['integration_params'],
        'linked_account_params': !exists(json, 'linked_account_params') ? undefined : json['linked_account_params'],
    };
}

export function ContactRequestToJSON(value?: ContactRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'first_name': value.first_name,
        'last_name': value.last_name,
        'email': value.email,
        'phone': value.phone,
        'state': value.state,
        'country': CountryEnumToJSON(value.country),
        'postal_code': value.postal_code,
        'integration_params': value.integration_params,
        'linked_account_params': value.linked_account_params,
    };
}
