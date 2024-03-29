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
    CustomObject,
    CustomObjectFromJSON,
    CustomObjectFromJSONTyped,
    CustomObjectToJSON,
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
 * @interface CRMCustomObjectResponse
 */
export interface CRMCustomObjectResponse {
    /**
     * 
     * @type {CustomObject}
     * @memberof CRMCustomObjectResponse
     */
    model: CustomObject;
    /**
     * 
     * @type {Array<WarningValidationProblem>}
     * @memberof CRMCustomObjectResponse
     */
    warnings: Array<WarningValidationProblem>;
    /**
     * 
     * @type {Array<ErrorValidationProblem>}
     * @memberof CRMCustomObjectResponse
     */
    errors: Array<ErrorValidationProblem>;
    /**
     * 
     * @type {Array<DebugModeLog>}
     * @memberof CRMCustomObjectResponse
     */
    logs?: Array<DebugModeLog>;
}

export function CRMCustomObjectResponseFromJSON(json: JSONValue): CRMCustomObjectResponse | undefined {
    return CRMCustomObjectResponseFromJSONTyped(json);
}

export function CRMCustomObjectResponseFromJSONTyped(json: JSONValue): CRMCustomObjectResponse | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'model': CustomObjectFromJSON(json['model']) as CustomObject,
        'warnings': ((json['warnings'] as Array<JSONValue>).map(WarningValidationProblemFromJSON)) as Array<WarningValidationProblem>,
        'errors': ((json['errors'] as Array<JSONValue>).map(ErrorValidationProblemFromJSON)) as Array<ErrorValidationProblem>,
        'logs': !exists(json, 'logs') ? undefined : ((json['logs'] as Array<JSONValue>).map(DebugModeLogFromJSON)) as Array<DebugModeLog>,
    };
}

export function CRMCustomObjectResponseToJSON(value?: CRMCustomObjectResponse): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'model': CustomObjectToJSON(value.model),
        'warnings': ((value.warnings as Array<any>).map(WarningValidationProblemToJSON)),
        'errors': ((value.errors as Array<any>).map(ErrorValidationProblemToJSON)),
        'logs': value.logs === undefined ? undefined : ((value.logs as Array<any>).map(DebugModeLogToJSON)),
    };
}

