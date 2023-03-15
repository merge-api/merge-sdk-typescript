/* tslint:disable */
/* eslint-disable */
/**
 * Merge File Storage API
 * The unified API for building rich integrations with multiple File Storage platforms.
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
    Folder,
    FolderFromJSON,
    FolderFromJSONTyped,
    FolderToJSON,
    WarningValidationProblem,
    WarningValidationProblemFromJSON,
    WarningValidationProblemFromJSONTyped,
    WarningValidationProblemToJSON,
} from './';


/**
 * 
 * @export
 * @interface FileStorageFolderResponse
 */
export interface FileStorageFolderResponse {
    /**
     * 
     * @type {Folder}
     * @memberof FileStorageFolderResponse
     */
    model: Folder;
    /**
     * 
     * @type {Array<WarningValidationProblem>}
     * @memberof FileStorageFolderResponse
     */
    warnings: Array<WarningValidationProblem>;
    /**
     * 
     * @type {Array<ErrorValidationProblem>}
     * @memberof FileStorageFolderResponse
     */
    errors: Array<ErrorValidationProblem>;
    /**
     * 
     * @type {Array<DebugModeLog>}
     * @memberof FileStorageFolderResponse
     */
    logs?: Array<DebugModeLog>;
}

export function FileStorageFolderResponseFromJSON(json: JSONValue): FileStorageFolderResponse | undefined {
    return FileStorageFolderResponseFromJSONTyped(json);
}

export function FileStorageFolderResponseFromJSONTyped(json: JSONValue): FileStorageFolderResponse | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'model': FolderFromJSON(json['model']) as Folder,
        'warnings': ((json['warnings'] as Array<JSONValue>).map(WarningValidationProblemFromJSON)) as Array<WarningValidationProblem>,
        'errors': ((json['errors'] as Array<JSONValue>).map(ErrorValidationProblemFromJSON)) as Array<ErrorValidationProblem>,
        'logs': !exists(json, 'logs') ? undefined : ((json['logs'] as Array<JSONValue>).map(DebugModeLogFromJSON)) as Array<DebugModeLog>,
    };
}

export function FileStorageFolderResponseToJSON(value?: FileStorageFolderResponse): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'model': FolderToJSON(value.model),
        'warnings': ((value.warnings as Array<any>).map(WarningValidationProblemToJSON)),
        'errors': ((value.errors as Array<any>).map(ErrorValidationProblemToJSON)),
        'logs': value.logs === undefined ? undefined : ((value.logs as Array<any>).map(DebugModeLogToJSON)),
    };
}

