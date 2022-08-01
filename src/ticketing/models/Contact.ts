/* tslint:disable */
/* eslint-disable */
/**
 * Merge Ticketing API
 * The unified API for building rich integrations with multiple Ticketing platforms.
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
    
} from './';
import {
	RemoteData,
	RemoteDataFromJSON,
	RemoteDataFromJSONTyped,
	RemoteDataToJSON,
} from '../../remote_data';


/**
 * # The Contact Object
 * ### Description
 * The `Contact` object is used to represent the customer, lead, or external user that a ticket is associated with.
 * 
 * ### Usage Example
 * TODO
 * @export
 * @interface Contact
 */
export interface Contact {
    /**
     * 
     * @type {string}
     * @memberof Contact
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof Contact
     */
    remote_id?: string | null;
    /**
     * The contact's name.
     * @type {string}
     * @memberof Contact
     */
    name?: string | null;
    /**
     * The contact's email address.
     * @type {string}
     * @memberof Contact
     */
    email_address?: string | null;
    /**
     * The contact's phone number.
     * @type {string}
     * @memberof Contact
     */
    phone_number?: string | null;
    /**
     * The contact's details.
     * @type {string}
     * @memberof Contact
     */
    details?: string | null;
    /**
     * The contact's account.
     * @type {string}
     * @memberof Contact
     */
    account?: string | null;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof Contact
     */
    readonly remote_data?: Array<RemoteData> | null;
    /**
     * Indicates whether or not this object has been deleted by third party webhooks.
     * @type {boolean}
     * @memberof Contact
     */
    readonly remote_was_deleted?: boolean;
}

export function ContactFromJSON(json: JSONValue): Contact | undefined {
    return ContactFromJSONTyped(json);
}

export function ContactFromJSONTyped(json: JSONValue): Contact | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'email_address': !exists(json, 'email_address') ? undefined : json['email_address'],
        'phone_number': !exists(json, 'phone_number') ? undefined : json['phone_number'],
        'details': !exists(json, 'details') ? undefined : json['details'],
        'account': !exists(json, 'account') ? undefined : json['account'],
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<JSONValue>).map(RemoteDataFromJSON)) as Array<RemoteData>,
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
    };
}

export function ContactToJSON(value?: Contact): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'name': value.name,
        'email_address': value.email_address,
        'phone_number': value.phone_number,
        'details': value.details,
        'account': value.account,
    };
}

