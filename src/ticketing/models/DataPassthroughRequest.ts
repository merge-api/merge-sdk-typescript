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

import { exists, mapValues } from '../runtime';
import { JSONValue } from '../../merge_json'
import {
    MethodEnum,
    MethodEnumFromJSON,
    MethodEnumFromJSONTyped,
    MethodEnumToJSON,
    MultipartFormFieldRequest,
    MultipartFormFieldRequestFromJSON,
    MultipartFormFieldRequestFromJSONTyped,
    MultipartFormFieldRequestToJSON,
    RequestFormatEnum,
    RequestFormatEnumFromJSON,
    RequestFormatEnumFromJSONTyped,
    RequestFormatEnumToJSON,
} from './';


/**
 * # The DataPassthrough Object
 * ### Description
 * The `DataPassthrough` object is used to send information to an otherwise-unsupported third-party endpoint.
 * 
 * ### Usage Example
 * Create a `DataPassthrough` to get team hierarchies from your Rippling integration.
 * @export
 * @interface DataPassthroughRequest
 */
export interface DataPassthroughRequest {
    /**
     * 
     * @type {MethodEnum}
     * @memberof DataPassthroughRequest
     */
    method: MethodEnum;
    /**
     * 
     * @type {string}
     * @memberof DataPassthroughRequest
     */
    path: string;
    /**
     * 
     * @type {string}
     * @memberof DataPassthroughRequest
     */
    base_url_override?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DataPassthroughRequest
     */
    data?: string | null;
    /**
     * Pass an array of `MultipartFormField` objects in here instead of using the `data` param if `request_format` is set to `MULTIPART`.
     * @type {Array<MultipartFormFieldRequest>}
     * @memberof DataPassthroughRequest
     */
    multipart_form_data?: Array<MultipartFormFieldRequest> | null;
    /**
     * The headers to use for the request (Merge will handle the account's authorization headers). `Content-Type` header is required for passthrough. Choose content type corresponding to expected format of receiving server.
     * @type {{ [key: string]: any; }}
     * @memberof DataPassthroughRequest
     */
    headers?: { [key: string]: any; } | null;
    /**
     * 
     * @type {RequestFormatEnum}
     * @memberof DataPassthroughRequest
     */
    request_format?: RequestFormatEnum | null;
    /**
     * 
     * @type {boolean}
     * @memberof DataPassthroughRequest
     */
    normalize_response?: boolean;
}

export function DataPassthroughRequestFromJSON(json: JSONValue): DataPassthroughRequest {
    return DataPassthroughRequestFromJSONTyped(json);
}

export function DataPassthroughRequestFromJSONTyped(json: JSONValue): DataPassthroughRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }

    return {
        
        'method': MethodEnumFromJSON(json['method']),
        'path': json['path'],
        'base_url_override': !exists(json, 'base_url_override') ? undefined : json['base_url_override'],
        'data': !exists(json, 'data') ? undefined : json['data'],
        'multipart_form_data': !exists(json, 'multipart_form_data') ? undefined : (json['multipart_form_data'] === null ? null : (json['multipart_form_data'] as Array<any>).map(MultipartFormFieldRequestFromJSON)),
        'headers': !exists(json, 'headers') ? undefined : json['headers'],
        'request_format': !exists(json, 'request_format') ? undefined : RequestFormatEnumFromJSON(json['request_format']),
        'normalize_response': !exists(json, 'normalize_response') ? undefined : json['normalize_response'],
    };
}

export function DataPassthroughRequestToJSON(value?: DataPassthroughRequest | null): JSONValue {
    if (value === undefined || value === null) {
        return value;
    }

    return {
        
        'method': MethodEnumToJSON(value.method),
        'path': value.path,
        'base_url_override': value.base_url_override,
        'data': value.data,
        'multipart_form_data': value.multipart_form_data === undefined ? undefined : (value.multipart_form_data === null ? null : (value.multipart_form_data as Array<any>).map(MultipartFormFieldRequestToJSON)),
        'headers': value.headers,
        'request_format': RequestFormatEnumToJSON(value.request_format),
        'normalize_response': value.normalize_response,
    };
}

