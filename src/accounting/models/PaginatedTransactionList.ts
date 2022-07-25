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
import {
    Transaction,
    TransactionFromJSON,
    TransactionFromJSONTyped,
    TransactionToJSON,
} from './';


/**
 * 
 * @export
 * @interface PaginatedTransactionList
 */
export interface PaginatedTransactionList {
    /**
     * 
     * @type {string}
     * @memberof PaginatedTransactionList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedTransactionList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<Transaction>}
     * @memberof PaginatedTransactionList
     */
    results?: Array<Transaction>;
}

export function PaginatedTransactionListFromJSON(json: JSONValue): PaginatedTransactionList {
    return PaginatedTransactionListFromJSONTyped(json);
}

export function PaginatedTransactionListFromJSONTyped(json: JSONValue): PaginatedTransactionList {
    if ((json === undefined) || (json === null)) {
        return json;
    }

    return {
        
        'next': !exists(json, 'next') ? undefined : json['next'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(TransactionFromJSON)),
    };
}

export function PaginatedTransactionListToJSON(value?: PaginatedTransactionList | null): JSONValue {
    if (value === undefined || value === null) {
        return value;
    }

    return {
        
        'next': value.next,
        'previous': value.previous,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(TransactionToJSON)),
    };
}

