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
 * # The Account Object
 * ### Description
 * The `Account` object is used to represent an account in the remote system.
 * ### Usage Example
 * TODO
 * @export
 * @interface AccountRequest
 */
export interface AccountRequest {
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof AccountRequest
     */
    remote_id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AccountRequest
     */
    owner?: string | null;
    /**
     * The account's name.
     * @type {string}
     * @memberof AccountRequest
     */
    name?: string | null;
    /**
     * The account's description.
     * @type {string}
     * @memberof AccountRequest
     */
    description?: string | null;
    /**
     * The account's industry.
     * @type {string}
     * @memberof AccountRequest
     */
    industry?: string | null;
    /**
     * The account's website.
     * @type {string}
     * @memberof AccountRequest
     */
    website?: string | null;
    /**
     * The account's number of employees.
     * @type {number}
     * @memberof AccountRequest
     */
    number_of_employees?: number | null;
    /**
     * When the account's last activity  occurred.
     * @type {Date}
     * @memberof AccountRequest
     */
    last_activity_at?: Date | null;
    /**
     * When the third party's account was updated.
     * @type {Date}
     * @memberof AccountRequest
     */
    remote_updated_at?: Date | null;
    /**
     * When the third party's account was created.
     * @type {Date}
     * @memberof AccountRequest
     */
    remote_created_at?: Date | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof AccountRequest
     */
    integration_params?: { [key: string]: any; } | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof AccountRequest
     */
    linked_account_params?: { [key: string]: any; } | null;
}

export function AccountRequestFromJSON(json: JSONValue): AccountRequest | undefined {
    return AccountRequestFromJSONTyped(json);
}

export function AccountRequestFromJSONTyped(json: JSONValue): AccountRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'industry': !exists(json, 'industry') ? undefined : json['industry'],
        'website': !exists(json, 'website') ? undefined : json['website'],
        'number_of_employees': !exists(json, 'number_of_employees') ? undefined : json['number_of_employees'],
        'last_activity_at': !exists(json, 'last_activity_at') ? undefined : (json['last_activity_at'] === null ? null : new Date(json['last_activity_at'])),
        'remote_updated_at': !exists(json, 'remote_updated_at') ? undefined : (json['remote_updated_at'] === null ? null : new Date(json['remote_updated_at'])),
        'remote_created_at': !exists(json, 'remote_created_at') ? undefined : (json['remote_created_at'] === null ? null : new Date(json['remote_created_at'])),
        'integration_params': !exists(json, 'integration_params') ? undefined : json['integration_params'],
        'linked_account_params': !exists(json, 'linked_account_params') ? undefined : json['linked_account_params'],
    };
}

export function AccountRequestToJSON(value?: AccountRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'owner': value.owner,
        'name': value.name,
        'description': value.description,
        'industry': value.industry,
        'website': value.website,
        'number_of_employees': value.number_of_employees,
        'last_activity_at': value.last_activity_at === undefined ? undefined : (value.last_activity_at === null ? null : value.last_activity_at.toISOString()),
        'remote_updated_at': value.remote_updated_at === undefined ? undefined : (value.remote_updated_at === null ? null : value.remote_updated_at.toISOString()),
        'remote_created_at': value.remote_created_at === undefined ? undefined : (value.remote_created_at === null ? null : value.remote_created_at.toISOString()),
        'integration_params': value.integration_params,
        'linked_account_params': value.linked_account_params,
    };
}

