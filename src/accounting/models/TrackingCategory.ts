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
import {
    
    Status7d1Enum,
    Status7d1EnumFromJSON,
    Status7d1EnumFromJSONTyped,
    Status7d1EnumToJSON,
} from './';
import {
	RemoteData,
	RemoteDataFromJSON,
	RemoteDataFromJSONTyped,
	RemoteDataToJSON,
} from '../../remote_data';


/**
 * # The TrackingCategory Object
 * ### Description
 * The `TrackingCategory` object is used to represent a company's tracking categories.
 * 
 * ### Usage Example
 * Fetch from the `GET TrackingCategory` endpoint and view a company's tracking category.
 * @export
 * @interface TrackingCategory
 */
export interface TrackingCategory {
    /**
     * 
     * @type {string}
     * @memberof TrackingCategory
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof TrackingCategory
     */
    remote_id?: string | null;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof TrackingCategory
     */
    readonly remote_data?: Array<RemoteData> | null;
    /**
     * The tracking category's name.
     * @type {string}
     * @memberof TrackingCategory
     */
    name?: string | null;
    /**
     * The tracking category's status.
     * @type {Status7d1Enum}
     * @memberof TrackingCategory
     */
    status?: Status7d1Enum | null;
    /**
     * Indicates whether or not this object has been deleted by third party webhooks.
     * @type {boolean}
     * @memberof TrackingCategory
     */
    readonly remote_was_deleted?: boolean;
}

export function TrackingCategoryFromJSON(json: JSONValue): TrackingCategory | undefined {
    return TrackingCategoryFromJSONTyped(json);
}

export function TrackingCategoryFromJSONTyped(json: JSONValue): TrackingCategory | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<JSONValue>).map(RemoteDataFromJSON)) as Array<RemoteData>,
        'name': !exists(json, 'name') ? undefined : json['name'],
        'status': !exists(json, 'status') ? undefined : Status7d1EnumFromJSON(json['status']) as Status7d1Enum,
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
    };
}

export function TrackingCategoryToJSON(value?: TrackingCategory): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'name': value.name,
        'status': Status7d1EnumToJSON(value.status),
    };
}

