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
    LeadRequest,
    LeadRequestFromJSON,
    LeadRequestFromJSONTyped,
    LeadRequestToJSON,
} from './';


/**
 * 
 * @export
 * @interface LeadEndpointRequest
 */
export interface LeadEndpointRequest {
    /**
     * 
     * @type {LeadRequest}
     * @memberof LeadEndpointRequest
     */
    model: LeadRequest;
}

export function LeadEndpointRequestFromJSON(json: JSONValue): LeadEndpointRequest {
    return LeadEndpointRequestFromJSONTyped(json);
}

export function LeadEndpointRequestFromJSONTyped(json: JSONValue): LeadEndpointRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }

    return {
        
        'model': LeadRequestFromJSON(json['model']),
    };
}

export function LeadEndpointRequestToJSON(value?: LeadEndpointRequest | null): JSONValue {
    if (value === undefined || value === null) {
        return value;
    }

    return {
        
        'model': LeadRequestToJSON(value.model),
    };
}

