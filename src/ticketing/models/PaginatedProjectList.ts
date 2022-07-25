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
    Project,
    ProjectFromJSON,
    ProjectFromJSONTyped,
    ProjectToJSON,
} from './';


/**
 * 
 * @export
 * @interface PaginatedProjectList
 */
export interface PaginatedProjectList {
    /**
     * 
     * @type {string}
     * @memberof PaginatedProjectList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedProjectList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<Project>}
     * @memberof PaginatedProjectList
     */
    results?: Array<Project>;
}

export function PaginatedProjectListFromJSON(json: JSONValue): PaginatedProjectList {
    return PaginatedProjectListFromJSONTyped(json);
}

export function PaginatedProjectListFromJSONTyped(json: JSONValue): PaginatedProjectList {
    if ((json === undefined) || (json === null)) {
        return json;
    }

    return {
        
        'next': !exists(json, 'next') ? undefined : json['next'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(ProjectFromJSON)),
    };
}

export function PaginatedProjectListToJSON(value?: PaginatedProjectList | null): JSONValue {
    if (value === undefined || value === null) {
        return value;
    }

    return {
        
        'next': value.next,
        'previous': value.previous,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(ProjectToJSON)),
    };
}

