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
import {
    RemoteFieldRequest,
    RemoteFieldRequestFromJSON,
    RemoteFieldRequestFromJSONTyped,
    RemoteFieldRequestToJSON,
} from './';


/**
 * # The Account Object
 * ### Description
 * The `Account` object is used to represent a company in a CRM system.
 * ### Usage Example
 * TODO
 * @export
 * @interface AccountRequest
 */
export interface AccountRequest {
    /**
     * The account's owner.
     * @type {string}
     * @memberof AccountRequest
     */
    owner?: string | JSONValue | null;
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
     * The last date (either most recent or furthest in the future) of when an activity occurs in an account.
     * @type {Date}
     * @memberof AccountRequest
     */
    last_activity_at?: Date | null;
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
    /**
     * 
     * @type {Array<RemoteFieldRequest>}
     * @memberof AccountRequest
     */
    remote_fields?: Array<RemoteFieldRequest>;
}

export function AccountRequestFromJSON(json: JSONValue): AccountRequest | undefined {
    return AccountRequestFromJSONTyped(json);
}

export function AccountRequestFromJSONTyped(json: JSONValue): AccountRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'industry': !exists(json, 'industry') ? undefined : json['industry'],
        'website': !exists(json, 'website') ? undefined : json['website'],
        'number_of_employees': !exists(json, 'number_of_employees') ? undefined : json['number_of_employees'],
        'last_activity_at': !exists(json, 'last_activity_at') ? undefined : (json['last_activity_at'] === null ? null : new Date(json['last_activity_at'])),
        'integration_params': !exists(json, 'integration_params') ? undefined : json['integration_params'],
        'linked_account_params': !exists(json, 'linked_account_params') ? undefined : json['linked_account_params'],
        'remote_fields': !exists(json, 'remote_fields') ? undefined : ((json['remote_fields'] as Array<JSONValue>).map(RemoteFieldRequestFromJSON)) as Array<RemoteFieldRequest>,
    };
}

export function AccountRequestToJSON(value?: AccountRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'owner': value.owner,
        'name': value.name,
        'description': value.description,
        'industry': value.industry,
        'website': value.website,
        'number_of_employees': value.number_of_employees,
        'last_activity_at': value.last_activity_at === undefined ? undefined : (value.last_activity_at === null ? null : value.last_activity_at.toISOString()),
        'integration_params': value.integration_params,
        'linked_account_params': value.linked_account_params,
        'remote_fields': value.remote_fields === undefined ? undefined : ((value.remote_fields as Array<any>).map(RemoteFieldRequestToJSON)),
    };
}

