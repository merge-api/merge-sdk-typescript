/* tslint:disable */
/* eslint-disable */
/**
 * Merge Marketing Automation API
 * The unified API for building rich integrations with multiple Marketing Automation platforms.
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
    TriggerTypeEnum,
    TriggerTypeEnumFromJSON,
    TriggerTypeEnumFromJSONTyped,
    TriggerTypeEnumToJSON,
} from './';


/**
 * # The Automation Object
 * ### Description
 * The `Automation` object is used to represent an automation, workflow or custom event in the remote system.
 * ### Usage Example
 * Fetch from the `GET /api/mktg/v1/automations` endpoint and view their automation_trigger configurations.
 * @export
 * @interface AutomationRequest
 */
export interface AutomationRequest {
    /**
     * The automation's name.
     * @type {string}
     * @memberof AutomationRequest
     */
    name?: string | null;
    /**
     * The trigger type for running this automation.
     * @type {TriggerTypeEnum}
     * @memberof AutomationRequest
     */
    trigger_type?: TriggerTypeEnum | null;
    /**
     * The automation's start date.
     * @type {Date}
     * @memberof AutomationRequest
     */
    start_date?: Date | null;
    /**
     * The automation's end date.
     * @type {Date}
     * @memberof AutomationRequest
     */
    end_date?: Date | null;
    /**
     * The automation’s description.
     * @type {string}
     * @memberof AutomationRequest
     */
    description?: string | null;
    /**
     * The automation's status.
     * @type {string}
     * @memberof AutomationRequest
     */
    status?: string | null;
    /**
     * The trigger configuraton for the automation.
     * @type {{ [key: string]: any; }}
     * @memberof AutomationRequest
     */
    automation_trigger?: { [key: string]: any; } | null;
    /**
     * The actions performed by this automation.
     * @type {Array<string>}
     * @memberof AutomationRequest
     */
    actions: Array<string>;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof AutomationRequest
     */
    integration_params?: { [key: string]: any; } | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof AutomationRequest
     */
    linked_account_params?: { [key: string]: any; } | null;
}

export function AutomationRequestFromJSON(json: JSONValue): AutomationRequest | undefined {
    return AutomationRequestFromJSONTyped(json);
}

export function AutomationRequestFromJSONTyped(json: JSONValue): AutomationRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'trigger_type': !exists(json, 'trigger_type') ? undefined : TriggerTypeEnumFromJSON(json['trigger_type']) as TriggerTypeEnum,
        'start_date': !exists(json, 'start_date') ? undefined : (json['start_date'] === null ? null : new Date(json['start_date'])),
        'end_date': !exists(json, 'end_date') ? undefined : (json['end_date'] === null ? null : new Date(json['end_date'])),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'automation_trigger': !exists(json, 'automation_trigger') ? undefined : json['automation_trigger'],
        'actions': json['actions'],
        'integration_params': !exists(json, 'integration_params') ? undefined : json['integration_params'],
        'linked_account_params': !exists(json, 'linked_account_params') ? undefined : json['linked_account_params'],
    };
}

export function AutomationRequestToJSON(value?: AutomationRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'name': value.name,
        'trigger_type': TriggerTypeEnumToJSON(value.trigger_type),
        'start_date': value.start_date === undefined ? undefined : (value.start_date === null ? null : value.start_date.toISOString()),
        'end_date': value.end_date === undefined ? undefined : (value.end_date === null ? null : value.end_date.toISOString()),
        'description': value.description,
        'status': value.status,
        'automation_trigger': value.automation_trigger,
        'actions': value.actions,
        'integration_params': value.integration_params,
        'linked_account_params': value.linked_account_params,
    };
}
