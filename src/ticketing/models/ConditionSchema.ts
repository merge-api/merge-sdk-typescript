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
    ConditionTypeEnum,
    ConditionTypeEnumFromJSON,
    ConditionTypeEnumFromJSONTyped,
    ConditionTypeEnumToJSON,
    OperatorSchema,
    OperatorSchemaFromJSON,
    OperatorSchemaFromJSONTyped,
    OperatorSchemaToJSON,
} from './';


/**
 * 
 * @export
 * @interface ConditionSchema
 */
export interface ConditionSchema {
    /**
     * The ID of the condition schema. This ID is used when updating selective syncs for a linked account.
     * @type {string}
     * @memberof ConditionSchema
     */
    id: string;
    /**
     * The common model for which a condition schema is defined.
     * @type {string}
     * @memberof ConditionSchema
     */
    readonly common_model?: string;
    /**
     * User-facing *native condition* name. e.g. "Skip Manager".
     * @type {string}
     * @memberof ConditionSchema
     */
    native_name: string | null;
    /**
     * The name of the field on the common model that this condition corresponds to, if they conceptually match. e.g. "location_type".
     * @type {string}
     * @memberof ConditionSchema
     */
    field_name: string | null;
    /**
     * Whether this condition can only be applied once. If false, the condition can be AND'd together multiple times.
     * @type {boolean}
     * @memberof ConditionSchema
     */
    is_unique?: boolean;
    /**
     * 
     * @type {ConditionTypeEnum}
     * @memberof ConditionSchema
     */
    condition_type: ConditionTypeEnum;
    /**
     * The schemas for the operators that can be used on a condition.
     * @type {Array<OperatorSchema>}
     * @memberof ConditionSchema
     */
    operators: Array<OperatorSchema>;
}

export function ConditionSchemaFromJSON(json: JSONValue): ConditionSchema | undefined {
    return ConditionSchemaFromJSONTyped(json);
}

export function ConditionSchemaFromJSONTyped(json: JSONValue): ConditionSchema | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'id': json['id'],
        'common_model': !exists(json, 'common_model') ? undefined : json['common_model'],
        'native_name': json['native_name'],
        'field_name': json['field_name'],
        'is_unique': !exists(json, 'is_unique') ? undefined : json['is_unique'],
        'condition_type': ConditionTypeEnumFromJSON(json['condition_type']) as ConditionTypeEnum,
        'operators': ((json['operators'] as Array<JSONValue>).map(OperatorSchemaFromJSON)) as Array<OperatorSchema>,
    };
}

export function ConditionSchemaToJSON(value?: ConditionSchema): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'id': value.id,
        'native_name': value.native_name,
        'field_name': value.field_name,
        'is_unique': value.is_unique,
        'condition_type': ConditionTypeEnumToJSON(value.condition_type),
        'operators': ((value.operators as Array<any>).map(OperatorSchemaToJSON)),
    };
}

