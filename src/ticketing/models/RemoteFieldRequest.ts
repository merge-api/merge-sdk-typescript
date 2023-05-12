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

/**
 * 
 * @export
 * @interface RemoteFieldRequest
 */
export interface RemoteFieldRequest {
    /**
     * 
     * @type {string}
     * @memberof RemoteFieldRequest
     */
    remote_field_class: string | JSONValue;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof RemoteFieldRequest
     */
    value?: { [key: string]: any; };
}

export function RemoteFieldRequestFromJSON(json: JSONValue): RemoteFieldRequest | undefined {
    return RemoteFieldRequestFromJSONTyped(json);
}

export function RemoteFieldRequestFromJSONTyped(json: JSONValue): RemoteFieldRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'remote_field_class': json['remote_field_class'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function RemoteFieldRequestToJSON(value?: RemoteFieldRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_field_class': value.remote_field_class,
        'value': value.value,
    };
}
