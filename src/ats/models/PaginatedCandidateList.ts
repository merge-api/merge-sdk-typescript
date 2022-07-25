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
    Candidate,
    CandidateFromJSON,
    CandidateFromJSONTyped,
    CandidateToJSON,
} from './';


/**
 * 
 * @export
 * @interface PaginatedCandidateList
 */
export interface PaginatedCandidateList {
    /**
     * 
     * @type {string}
     * @memberof PaginatedCandidateList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedCandidateList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<Candidate>}
     * @memberof PaginatedCandidateList
     */
    results?: Array<Candidate>;
}

export function PaginatedCandidateListFromJSON(json: JSONValue): PaginatedCandidateList {
    return PaginatedCandidateListFromJSONTyped(json);
}

export function PaginatedCandidateListFromJSONTyped(json: JSONValue): PaginatedCandidateList {
    if ((json === undefined) || (json === null)) {
        return json;
    }

    return {
        
        'next': !exists(json, 'next') ? undefined : json['next'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(CandidateFromJSON)),
    };
}

export function PaginatedCandidateListToJSON(value?: PaginatedCandidateList | null): JSONValue {
    if (value === undefined || value === null) {
        return value;
    }

    return {
        
        'next': value.next,
        'previous': value.previous,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(CandidateToJSON)),
    };
}

