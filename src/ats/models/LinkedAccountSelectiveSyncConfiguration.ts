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
    LinkedAccountCondition,
    LinkedAccountConditionFromJSON,
    LinkedAccountConditionFromJSONTyped,
    LinkedAccountConditionToJSON,
} from './';


/**
 * 
 * @export
 * @interface LinkedAccountSelectiveSyncConfiguration
 */
export interface LinkedAccountSelectiveSyncConfiguration {
    /**
     * The conditions belonging to a selective sync.
     * @type {Array<LinkedAccountCondition>}
     * @memberof LinkedAccountSelectiveSyncConfiguration
     */
    readonly linked_account_conditions?: Array<LinkedAccountCondition>;
}

export function LinkedAccountSelectiveSyncConfigurationFromJSON(json: JSONValue): LinkedAccountSelectiveSyncConfiguration | undefined {
    return LinkedAccountSelectiveSyncConfigurationFromJSONTyped(json);
}

export function LinkedAccountSelectiveSyncConfigurationFromJSONTyped(json: JSONValue): LinkedAccountSelectiveSyncConfiguration | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'linked_account_conditions': !exists(json, 'linked_account_conditions') ? undefined : ((json['linked_account_conditions'] as Array<JSONValue>).map(LinkedAccountConditionFromJSON)) as Array<LinkedAccountCondition>,
    };
}

export function LinkedAccountSelectiveSyncConfigurationToJSON(value?: LinkedAccountSelectiveSyncConfiguration): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
    };
}

