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
    Issue,
    IssueFromJSON,
    IssueFromJSONTyped,
    IssueToJSON,
} from './';


/**
 * 
 * @export
 * @interface PaginatedIssueList
 */
export interface PaginatedIssueList {
    /**
     * 
     * @type {string}
     * @memberof PaginatedIssueList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedIssueList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<Issue>}
     * @memberof PaginatedIssueList
     */
    results?: Array<Issue>;
}

export function PaginatedIssueListFromJSON(json: JSONValue): PaginatedIssueList {
    return PaginatedIssueListFromJSONTyped(json);
}

export function PaginatedIssueListFromJSONTyped(json: JSONValue): PaginatedIssueList {
    if ((json === undefined) || (json === null)) {
        return json;
    }

    return {
        
        'next': !exists(json, 'next') ? undefined : json['next'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(IssueFromJSON)),
    };
}

export function PaginatedIssueListToJSON(value?: PaginatedIssueList | null): JSONValue {
    if (value === undefined || value === null) {
        return value;
    }

    return {
        
        'next': value.next,
        'previous': value.previous,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(IssueToJSON)),
    };
}

