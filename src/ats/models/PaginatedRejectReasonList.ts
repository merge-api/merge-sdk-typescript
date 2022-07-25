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
import {
    RejectReason,
    RejectReasonFromJSON,
    RejectReasonFromJSONTyped,
    RejectReasonToJSON,
} from './';


/**
 * 
 * @export
 * @interface PaginatedRejectReasonList
 */
export interface PaginatedRejectReasonList {
    /**
     * 
     * @type {string}
     * @memberof PaginatedRejectReasonList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedRejectReasonList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<RejectReason>}
     * @memberof PaginatedRejectReasonList
     */
    results?: Array<RejectReason>;
}

export function PaginatedRejectReasonListFromJSON(json: JSONValue): PaginatedRejectReasonList {
    return PaginatedRejectReasonListFromJSONTyped(json);
}

export function PaginatedRejectReasonListFromJSONTyped(json: JSONValue): PaginatedRejectReasonList {
    if ((json === undefined) || (json === null)) {
        return json;
    }

    return {
        
        'next': !exists(json, 'next') ? undefined : json['next'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(RejectReasonFromJSON)),
    };
}

export function PaginatedRejectReasonListToJSON(value?: PaginatedRejectReasonList | null): JSONValue {
    if (value === undefined || value === null) {
        return value;
    }

    return {
        
        'next': value.next,
        'previous': value.previous,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(RejectReasonToJSON)),
    };
}

