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
import {
    LinkedAccountStatus,
    LinkedAccountStatusFromJSON,
    LinkedAccountStatusFromJSONTyped,
    LinkedAccountStatusToJSON,
} from './';


/**
 * 
 * @export
 * @interface MetaResponse
 */
export interface MetaResponse {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof MetaResponse
     */
    request_schema: { [key: string]: any; };
    /**
     * 
     * @type {LinkedAccountStatus}
     * @memberof MetaResponse
     */
    status?: LinkedAccountStatus;
    /**
     * 
     * @type {boolean}
     * @memberof MetaResponse
     */
    has_conditional_params: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof MetaResponse
     */
    has_required_linked_account_params: boolean;
}

export function MetaResponseFromJSON(json: JSONValue): MetaResponse {
    return MetaResponseFromJSONTyped(json);
}

export function MetaResponseFromJSONTyped(json: JSONValue): MetaResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }

    return {
        
        'request_schema': json['request_schema'],
        'status': !exists(json, 'status') ? undefined : LinkedAccountStatusFromJSON(json['status']),
        'has_conditional_params': json['has_conditional_params'],
        'has_required_linked_account_params': json['has_required_linked_account_params'],
    };
}

export function MetaResponseToJSON(value?: MetaResponse | null): JSONValue {
    if (value === undefined || value === null) {
        return value;
    }

    return {
        
        'request_schema': value.request_schema,
        'status': LinkedAccountStatusToJSON(value.status),
        'has_conditional_params': value.has_conditional_params,
        'has_required_linked_account_params': value.has_required_linked_account_params,
    };
}

