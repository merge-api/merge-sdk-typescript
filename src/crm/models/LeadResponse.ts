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

import { exists, mapValues } from '../runtime';
import { JSONValue } from '../../merge_json'
import {
    DebugModeLog,
    DebugModeLogFromJSON,
    DebugModeLogFromJSONTyped,
    DebugModeLogToJSON,
    ErrorValidationProblem,
    ErrorValidationProblemFromJSON,
    ErrorValidationProblemFromJSONTyped,
    ErrorValidationProblemToJSON,
    Lead,
    LeadFromJSON,
    LeadFromJSONTyped,
    LeadToJSON,
    WarningValidationProblem,
    WarningValidationProblemFromJSON,
    WarningValidationProblemFromJSONTyped,
    WarningValidationProblemToJSON,
} from './';


/**
 * 
 * @export
 * @interface LeadResponse
 */
export interface LeadResponse {
    /**
     * 
     * @type {Lead}
     * @memberof LeadResponse
     */
    model: Lead;
    /**
     * 
     * @type {Array<WarningValidationProblem>}
     * @memberof LeadResponse
     */
    warnings: Array<WarningValidationProblem>;
    /**
     * 
     * @type {Array<ErrorValidationProblem>}
     * @memberof LeadResponse
     */
    errors: Array<ErrorValidationProblem>;
    /**
     * 
     * @type {Array<DebugModeLog>}
     * @memberof LeadResponse
     */
    logs?: Array<DebugModeLog>;
}

export function LeadResponseFromJSON(json: JSONValue): LeadResponse {
    return LeadResponseFromJSONTyped(json);
}

export function LeadResponseFromJSONTyped(json: JSONValue): LeadResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }

    return {
        
        'model': LeadFromJSON(json['model']),
        'warnings': ((json['warnings'] as Array<any>).map(WarningValidationProblemFromJSON)),
        'errors': ((json['errors'] as Array<any>).map(ErrorValidationProblemFromJSON)),
        'logs': !exists(json, 'logs') ? undefined : ((json['logs'] as Array<any>).map(DebugModeLogFromJSON)),
    };
}

export function LeadResponseToJSON(value?: LeadResponse | null): JSONValue {
    if (value === undefined || value === null) {
        return value;
    }

    return {
        
        'model': LeadToJSON(value.model),
        'warnings': ((value.warnings as Array<any>).map(WarningValidationProblemToJSON)),
        'errors': ((value.errors as Array<any>).map(ErrorValidationProblemToJSON)),
        'logs': value.logs === undefined ? undefined : ((value.logs as Array<any>).map(DebugModeLogToJSON)),
    };
}

