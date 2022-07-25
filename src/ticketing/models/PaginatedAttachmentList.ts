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
    Attachment,
    AttachmentFromJSON,
    AttachmentFromJSONTyped,
    AttachmentToJSON,
} from './';


/**
 * 
 * @export
 * @interface PaginatedAttachmentList
 */
export interface PaginatedAttachmentList {
    /**
     * 
     * @type {string}
     * @memberof PaginatedAttachmentList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedAttachmentList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<Attachment>}
     * @memberof PaginatedAttachmentList
     */
    results?: Array<Attachment>;
}

export function PaginatedAttachmentListFromJSON(json: JSONValue): PaginatedAttachmentList {
    return PaginatedAttachmentListFromJSONTyped(json);
}

export function PaginatedAttachmentListFromJSONTyped(json: JSONValue): PaginatedAttachmentList {
    if ((json === undefined) || (json === null)) {
        return json;
    }

    return {
        
        'next': !exists(json, 'next') ? undefined : json['next'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(AttachmentFromJSON)),
    };
}

export function PaginatedAttachmentListToJSON(value?: PaginatedAttachmentList | null): JSONValue {
    if (value === undefined || value === null) {
        return value;
    }

    return {
        
        'next': value.next,
        'previous': value.previous,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(AttachmentToJSON)),
    };
}

