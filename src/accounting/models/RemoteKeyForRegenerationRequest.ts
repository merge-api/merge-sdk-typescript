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

import { exists, mapValues } from '../runtime';
import { JSONValue } from '../../merge_json'

/**
 * # The RemoteKeyForRegeneration Object
 * ### Description
 * The `RemoteKeyForRegeneration` object is used to exchange an old remote key for a new one
 * 
 * ### Usage Example
 * Post a `RemoteKeyForRegeneration` to swap out an old remote key for a new one
 * @export
 * @interface RemoteKeyForRegenerationRequest
 */
export interface RemoteKeyForRegenerationRequest {
    /**
     * 
     * @type {string}
     * @memberof RemoteKeyForRegenerationRequest
     */
    name: string;
}

export function RemoteKeyForRegenerationRequestFromJSON(json: JSONValue): RemoteKeyForRegenerationRequest {
    return RemoteKeyForRegenerationRequestFromJSONTyped(json);
}

export function RemoteKeyForRegenerationRequestFromJSONTyped(json: JSONValue): RemoteKeyForRegenerationRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }

    return {
        
        'name': json['name'],
    };
}

export function RemoteKeyForRegenerationRequestToJSON(value?: RemoteKeyForRegenerationRequest | null): JSONValue {
    if (value === undefined || value === null) {
        return value;
    }

    return {
        
        'name': value.name,
    };
}

