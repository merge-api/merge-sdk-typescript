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
    NoteRequest,
    NoteRequestFromJSON,
    NoteRequestFromJSONTyped,
    NoteRequestToJSON,
} from './';


/**
 * 
 * @export
 * @interface NoteEndpointRequest
 */
export interface NoteEndpointRequest {
    /**
     * 
     * @type {NoteRequest}
     * @memberof NoteEndpointRequest
     */
    model: NoteRequest;
}

export function NoteEndpointRequestFromJSON(json: JSONValue): NoteEndpointRequest | undefined {
    return NoteEndpointRequestFromJSONTyped(json);
}

export function NoteEndpointRequestFromJSONTyped(json: JSONValue): NoteEndpointRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'model': NoteRequestFromJSON(json['model']) as NoteRequest,
    };
}

export function NoteEndpointRequestToJSON(value?: NoteEndpointRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'model': NoteRequestToJSON(value.model),
    };
}

