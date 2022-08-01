/* tslint:disable */
/* eslint-disable */
/**
 * Merge HRIS API
 * The unified API for building rich integrations with multiple HR Information System platforms.
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
 * @interface LinkToken
 */
export interface LinkToken {
    /**
     * 
     * @type {string}
     * @memberof LinkToken
     */
    link_token: string;
    /**
     * 
     * @type {string}
     * @memberof LinkToken
     */
    integration_name: string;
    /**
     * 
     * @type {string}
     * @memberof LinkToken
     */
    magic_link_url?: string;
}

export function LinkTokenFromJSON(json: JSONValue): LinkToken | undefined {
    return LinkTokenFromJSONTyped(json);
}

export function LinkTokenFromJSONTyped(json: JSONValue): LinkToken | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'link_token': json['link_token'],
        'integration_name': json['integration_name'],
        'magic_link_url': !exists(json, 'magic_link_url') ? undefined : json['magic_link_url'],
    };
}

export function LinkTokenToJSON(value?: LinkToken): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'link_token': value.link_token,
        'integration_name': value.integration_name,
        'magic_link_url': value.magic_link_url,
    };
}

