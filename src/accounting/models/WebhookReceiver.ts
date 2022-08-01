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

import { exists, mapValues } from '../../runtime';
import { JSONValue } from '../../merge_json';

/**
 * 
 * @export
 * @interface WebhookReceiver
 */
export interface WebhookReceiver {
    /**
     * 
     * @type {string}
     * @memberof WebhookReceiver
     */
    event: string;
    /**
     * 
     * @type {boolean}
     * @memberof WebhookReceiver
     */
    is_active: boolean;
    /**
     * 
     * @type {string}
     * @memberof WebhookReceiver
     */
    key?: string;
}

export function WebhookReceiverFromJSON(json: JSONValue): WebhookReceiver | undefined {
    return WebhookReceiverFromJSONTyped(json);
}

export function WebhookReceiverFromJSONTyped(json: JSONValue): WebhookReceiver | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'event': json['event'],
        'is_active': json['is_active'],
        'key': !exists(json, 'key') ? undefined : json['key'],
    };
}

export function WebhookReceiverToJSON(value?: WebhookReceiver): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'event': value.event,
        'is_active': value.is_active,
        'key': value.key,
    };
}

