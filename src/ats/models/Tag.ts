/* tslint:disable */
/* eslint-disable */
/**
 * Merge ATS API
 * The unified API for building rich integrations with multiple Applicant Tracking System platforms.
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
 * # The Tag Object
 * ### Description
 * The `Tag` object is used to represent a tag for a candidate.
 * ### Usage Example
 * Fetch from the `LIST Tags` endpoint and view the tags used within a company.
 * @export
 * @interface Tag
 */
export interface Tag {
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof Tag
     */
    remote_id?: string | null;
    /**
     * The tag's name.
     * @type {string}
     * @memberof Tag
     */
    name?: string | null;
    /**
     * 
     * @type {Array<{ [key: string]: any; }>}
     * @memberof Tag
     */
    remote_data?: Array<{ [key: string]: any; }> | null;
    /**
     * Indicates whether or not this object has been deleted by third party webhooks.
     * @type {boolean}
     * @memberof Tag
     */
    remote_was_deleted?: boolean;
}

export function TagFromJSON(json: JSONValue): Tag {
    return TagFromJSONTyped(json);
}

export function TagFromJSONTyped(json: JSONValue): Tag {
    if ((json === undefined) || (json === null)) {
        return json;
    }

    return {
        
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'remote_data': !exists(json, 'remote_data') ? undefined : json['remote_data'],
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
    };
}

export function TagToJSON(value?: Tag | null): JSONValue {
    if (value === undefined || value === null) {
        return value;
    }

    return {
        
        'remote_id': value.remote_id,
        'name': value.name,
        'remote_data': value.remote_data,
        'remote_was_deleted': value.remote_was_deleted,
    };
}

