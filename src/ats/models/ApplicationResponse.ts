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

import { exists, mapValues } from '../../runtime';
import { JSONValue } from '../../merge_json';
import {
    Application,
    ApplicationFromJSON,
    ApplicationFromJSONTyped,
    ApplicationToJSON,
    DebugModeLog,
    DebugModeLogFromJSON,
    DebugModeLogFromJSONTyped,
    DebugModeLogToJSON,
    ErrorValidationProblem,
    ErrorValidationProblemFromJSON,
    ErrorValidationProblemFromJSONTyped,
    ErrorValidationProblemToJSON,
    WarningValidationProblem,
    WarningValidationProblemFromJSON,
    WarningValidationProblemFromJSONTyped,
    WarningValidationProblemToJSON,
} from './';


/**
 * 
 * @export
 * @interface ApplicationResponse
 */
export interface ApplicationResponse {
    /**
     * 
     * @type {Application}
     * @memberof ApplicationResponse
     */
    model: Application;
    /**
     * 
     * @type {Array<WarningValidationProblem>}
     * @memberof ApplicationResponse
     */
    warnings: Array<WarningValidationProblem>;
    /**
     * 
     * @type {Array<ErrorValidationProblem>}
     * @memberof ApplicationResponse
     */
    errors: Array<ErrorValidationProblem>;
    /**
     * 
     * @type {Array<DebugModeLog>}
     * @memberof ApplicationResponse
     */
    logs?: Array<DebugModeLog>;
}

export function ApplicationResponseFromJSON(json: JSONValue): ApplicationResponse | undefined {
    return ApplicationResponseFromJSONTyped(json);
}

export function ApplicationResponseFromJSONTyped(json: JSONValue): ApplicationResponse | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'model': ApplicationFromJSON(json['model']) as Application,
        'warnings': ((json['warnings'] as Array<JSONValue>).map(WarningValidationProblemFromJSON)) as Array<WarningValidationProblem>,
        'errors': ((json['errors'] as Array<JSONValue>).map(ErrorValidationProblemFromJSON)) as Array<ErrorValidationProblem>,
        'logs': !exists(json, 'logs') ? undefined : ((json['logs'] as Array<JSONValue>).map(DebugModeLogFromJSON)) as Array<DebugModeLog>,
    };
}

export function ApplicationResponseToJSON(value?: ApplicationResponse): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'model': ApplicationToJSON(value.model),
        'warnings': ((value.warnings as Array<any>).map(WarningValidationProblemToJSON)),
        'errors': ((value.errors as Array<any>).map(ErrorValidationProblemToJSON)),
        'logs': value.logs === undefined ? undefined : ((value.logs as Array<any>).map(DebugModeLogToJSON)),
    };
}

