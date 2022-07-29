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
 * # The Team Object
 * ### Description
 * The `Team` object is used to represent a team within the company receiving the ticket.
 * 
 * ### Usage Example
 * TODO
 * @export
 * @interface Team
 */
export interface Team {
    /**
     * 
     * @type {string}
     * @memberof Team
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof Team
     */
    remote_id?: string | null;
    /**
     * The team's name.
     * @type {string}
     * @memberof Team
     */
    name?: string | null;
    /**
     * The team's description.
     * @type {string}
     * @memberof Team
     */
    description?: string | null;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof Team
     */
    readonly remote_data?: Array<RemoteData> | null;
    /**
     * Indicates whether or not this object has been deleted by third party webhooks.
     * @type {boolean}
     * @memberof Team
     */
    remote_was_deleted?: boolean;
}

export function TeamFromJSON(json: JSONValue): Team | undefined {
    return TeamFromJSONTyped(json);
}

export function TeamFromJSONTyped(json: JSONValue): Team | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<JSONValue>).map(RemoteDataFromJSON)) as Array<RemoteData>,
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
    };
}

export function TeamToJSON(value?: Team): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'name': value.name,
        'description': value.description,
        'remote_was_deleted': value.remote_was_deleted,
    };
}
