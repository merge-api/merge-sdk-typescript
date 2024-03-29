/* tslint:disable */
/* eslint-disable */
/**
 * Merge File Storage API
 * The unified API for building rich integrations with multiple File Storage platforms.
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
    FolderRequest,
    FolderRequestFromJSON,
    FolderRequestFromJSONTyped,
    FolderRequestToJSON,
} from './';


/**
 * 
 * @export
 * @interface FileStorageFolderEndpointRequest
 */
export interface FileStorageFolderEndpointRequest {
    /**
     * 
     * @type {FolderRequest}
     * @memberof FileStorageFolderEndpointRequest
     */
    model: FolderRequest;
}

export function FileStorageFolderEndpointRequestFromJSON(json: JSONValue): FileStorageFolderEndpointRequest | undefined {
    return FileStorageFolderEndpointRequestFromJSONTyped(json);
}

export function FileStorageFolderEndpointRequestFromJSONTyped(json: JSONValue): FileStorageFolderEndpointRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'model': FolderRequestFromJSON(json['model']) as FolderRequest,
    };
}

export function FileStorageFolderEndpointRequestToJSON(value?: FileStorageFolderEndpointRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'model': FolderRequestToJSON(value.model),
    };
}

