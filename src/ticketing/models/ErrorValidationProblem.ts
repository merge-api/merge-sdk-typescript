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

import { exists, mapValues } from '../../runtime';
import { JSONValue } from '../../merge_json';
import {
    ValidationProblemSource,
    ValidationProblemSourceFromJSON,
    ValidationProblemSourceFromJSONTyped,
    ValidationProblemSourceToJSON,
} from './';


/**
 * 
 * @export
 * @interface ErrorValidationProblem
 */
export interface ErrorValidationProblem {
    /**
     * 
     * @type {ValidationProblemSource}
     * @memberof ErrorValidationProblem
     */
    source?: ValidationProblemSource;
    /**
     * 
     * @type {string}
     * @memberof ErrorValidationProblem
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof ErrorValidationProblem
     */
    detail: string;
    /**
     * 
     * @type {string}
     * @memberof ErrorValidationProblem
     */
    problem_type: string;
}

export function ErrorValidationProblemFromJSON(json: JSONValue): ErrorValidationProblem | undefined {
    return ErrorValidationProblemFromJSONTyped(json);
}

export function ErrorValidationProblemFromJSONTyped(json: JSONValue): ErrorValidationProblem | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'source': !exists(json, 'source') ? undefined : ValidationProblemSourceFromJSON(json['source']) as ValidationProblemSource,
        'title': json['title'],
        'detail': json['detail'],
        'problem_type': json['problem_type'],
    };
}

export function ErrorValidationProblemToJSON(value?: ErrorValidationProblem): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'source': ValidationProblemSourceToJSON(value.source),
        'title': value.title,
        'detail': value.detail,
        'problem_type': value.problem_type,
    };
}

