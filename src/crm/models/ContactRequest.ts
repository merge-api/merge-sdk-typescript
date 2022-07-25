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

import { exists, mapValues } from '../runtime';
import { JSONValue } from '../../merge_json'

/**
 * # The Contact Object
 * ### Description
 * The `Contact` object is used to represent a contact in the remote system.
 * ### Usage Example
 * TODO
 * @export
 * @interface ContactRequest
 */
export interface ContactRequest {
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof ContactRequest
     */
    remote_id?: string | null;
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
     * 
     * @type {string}
     * @memberof ContactRequest
     */
    account?: string | null;
    /**
     * When the contact's last activity occurred.
     * @type {Date}
     * @memberof ContactRequest
     */
    last_activity_at?: Date | null;
    /**
     * When the third party's contact was created.
     * @type {Date}
     * @memberof ContactRequest
     */
    remote_created_at?: Date | null;
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

export function ContactRequestFromJSON(json: JSONValue): ContactRequest {
    return ContactRequestFromJSONTyped(json);
}

export function ContactRequestFromJSONTyped(json: JSONValue): ContactRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }

    return {
        
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'first_name': !exists(json, 'first_name') ? undefined : json['first_name'],
        'last_name': !exists(json, 'last_name') ? undefined : json['last_name'],
        'account': !exists(json, 'account') ? undefined : json['account'],
        'last_activity_at': !exists(json, 'last_activity_at') ? undefined : (json['last_activity_at'] === null ? null : new Date(json['last_activity_at'])),
        'remote_created_at': !exists(json, 'remote_created_at') ? undefined : (json['remote_created_at'] === null ? null : new Date(json['remote_created_at'])),
        'integration_params': !exists(json, 'integration_params') ? undefined : json['integration_params'],
        'linked_account_params': !exists(json, 'linked_account_params') ? undefined : json['linked_account_params'],
    };
}

export function ContactRequestToJSON(value?: ContactRequest | null): JSONValue {
    if (value === undefined || value === null) {
        return value;
    }

    return {
        
        'remote_id': value.remote_id,
        'first_name': value.first_name,
        'last_name': value.last_name,
        'account': value.account,
        'last_activity_at': value.last_activity_at === undefined ? undefined : (value.last_activity_at === null ? null : value.last_activity_at.toISOString()),
        'remote_created_at': value.remote_created_at === undefined ? undefined : (value.remote_created_at === null ? null : value.remote_created_at.toISOString()),
        'integration_params': value.integration_params,
        'linked_account_params': value.linked_account_params,
    };
}

