/* tslint:disable */
/* eslint-disable */
/**
 * Merge HRIS API
 * The unified API for building rich integrations with multiple HR Information System platforms.
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
    AccountIntegration,
    AccountIntegrationFromJSON,
    AccountIntegrationFromJSONTyped,
    AccountIntegrationToJSON,
    ModelOperation,
    ModelOperationFromJSON,
    ModelOperationFromJSONTyped,
    ModelOperationToJSON,
} from './';


/**
 * # The AvailableActions Object
 * ### Description
 * The `Activity` object is used to see all available model/operation combinations for an integration.
 * 
 * ### Usage Example
 * Fetch all the actions available for the `Zenefits` integration.
 * @export
 * @interface AvailableActions
 */
export interface AvailableActions {
    /**
     * 
     * @type {AccountIntegration}
     * @memberof AvailableActions
     */
    integration: AccountIntegration;
    /**
     * 
     * @type {boolean}
     * @memberof AvailableActions
     */
    passthrough_available: boolean;
    /**
     * 
     * @type {Array<ModelOperation>}
     * @memberof AvailableActions
     */
    available_model_operations?: Array<ModelOperation>;
}

export function AvailableActionsFromJSON(json: JSONValue): AvailableActions {
    return AvailableActionsFromJSONTyped(json);
}

export function AvailableActionsFromJSONTyped(json: JSONValue): AvailableActions {
    if ((json === undefined) || (json === null)) {
        return json;
    }

    return {
        
        'integration': AccountIntegrationFromJSON(json['integration']),
        'passthrough_available': json['passthrough_available'],
        'available_model_operations': !exists(json, 'available_model_operations') ? undefined : ((json['available_model_operations'] as Array<any>).map(ModelOperationFromJSON)),
    };
}

export function AvailableActionsToJSON(value?: AvailableActions | null): JSONValue {
    if (value === undefined || value === null) {
        return value;
    }

    return {
        
        'integration': AccountIntegrationToJSON(value.integration),
        'passthrough_available': value.passthrough_available,
        'available_model_operations': value.available_model_operations === undefined ? undefined : ((value.available_model_operations as Array<any>).map(ModelOperationToJSON)),
    };
}

