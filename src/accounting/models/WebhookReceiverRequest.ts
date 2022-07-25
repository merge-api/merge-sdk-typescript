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
 * 
 * @export
 * @interface WebhookReceiverRequest
 */
export interface WebhookReceiverRequest {
    /**
     * 
     * @type {string}
     * @memberof WebhookReceiverRequest
     */
    event: string;
    /**
     * 
     * @type {boolean}
     * @memberof WebhookReceiverRequest
     */
    is_active: boolean;
    /**
     * 
     * @type {string}
     * @memberof WebhookReceiverRequest
     */
    key?: string;
}

export function WebhookReceiverRequestFromJSON(json: JSONValue): WebhookReceiverRequest {
    return WebhookReceiverRequestFromJSONTyped(json);
}

export function WebhookReceiverRequestFromJSONTyped(json: JSONValue): WebhookReceiverRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }

    return {
        
        'event': json['event'],
        'is_active': json['is_active'],
        'key': !exists(json, 'key') ? undefined : json['key'],
    };
}

export function WebhookReceiverRequestToJSON(value?: WebhookReceiverRequest | null): JSONValue {
    if (value === undefined || value === null) {
        return value;
    }

    return {
        
        'event': value.event,
        'is_active': value.is_active,
        'key': value.key,
    };
}

