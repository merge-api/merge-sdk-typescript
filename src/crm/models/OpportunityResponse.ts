/* tslint:disable */
/* eslint-disable */
/**
 * Merge CRM API
 * The unified API for building rich integrations with multiple CRM platforms.
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
    DebugModeLog,
    DebugModeLogFromJSON,
    DebugModeLogFromJSONTyped,
    DebugModeLogToJSON,
    ErrorValidationProblem,
    ErrorValidationProblemFromJSON,
    ErrorValidationProblemFromJSONTyped,
    ErrorValidationProblemToJSON,
    Opportunity,
    OpportunityFromJSON,
    OpportunityFromJSONTyped,
    OpportunityToJSON,
    WarningValidationProblem,
    WarningValidationProblemFromJSON,
    WarningValidationProblemFromJSONTyped,
    WarningValidationProblemToJSON,
} from './';


/**
 * 
 * @export
 * @interface OpportunityResponse
 */
export interface OpportunityResponse {
    /**
     * 
     * @type {Opportunity}
     * @memberof OpportunityResponse
     */
    model: Opportunity;
    /**
     * 
     * @type {Array<WarningValidationProblem>}
     * @memberof OpportunityResponse
     */
    warnings: Array<WarningValidationProblem>;
    /**
     * 
     * @type {Array<ErrorValidationProblem>}
     * @memberof OpportunityResponse
     */
    errors: Array<ErrorValidationProblem>;
    /**
     * 
     * @type {Array<DebugModeLog>}
     * @memberof OpportunityResponse
     */
    logs?: Array<DebugModeLog>;
}

export function OpportunityResponseFromJSON(json: JSONValue): OpportunityResponse | undefined {
    return OpportunityResponseFromJSONTyped(json);
}

export function OpportunityResponseFromJSONTyped(json: JSONValue): OpportunityResponse | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'model': OpportunityFromJSON(json['model']) as Opportunity,
        'warnings': ((json['warnings'] as Array<JSONValue>).map(WarningValidationProblemFromJSON)) as Array<WarningValidationProblem>,
        'errors': ((json['errors'] as Array<JSONValue>).map(ErrorValidationProblemFromJSON)) as Array<ErrorValidationProblem>,
        'logs': !exists(json, 'logs') ? undefined : ((json['logs'] as Array<JSONValue>).map(DebugModeLogFromJSON)) as Array<DebugModeLog>,
    };
}

export function OpportunityResponseToJSON(value?: OpportunityResponse): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'model': OpportunityToJSON(value.model),
        'warnings': ((value.warnings as Array<any>).map(WarningValidationProblemToJSON)),
        'errors': ((value.errors as Array<any>).map(ErrorValidationProblemToJSON)),
        'logs': value.logs === undefined ? undefined : ((value.logs as Array<any>).map(DebugModeLogToJSON)),
    };
}

