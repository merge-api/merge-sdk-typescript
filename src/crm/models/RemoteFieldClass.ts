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
    FieldFormatEnum,
    FieldFormatEnumFromJSON,
    FieldFormatEnumFromJSONTyped,
    FieldFormatEnumToJSON,
    FieldTypeEnum,
    FieldTypeEnumFromJSON,
    FieldTypeEnumFromJSONTyped,
    FieldTypeEnumToJSON,
    ItemSchema,
    ItemSchemaFromJSON,
    ItemSchemaFromJSONTyped,
    ItemSchemaToJSON,
} from './';


/**
 * 
 * @export
 * @interface RemoteFieldClass
 */
export interface RemoteFieldClass {
    /**
     * 
     * @type {string}
     * @memberof RemoteFieldClass
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof RemoteFieldClass
     */
    display_name?: string;
    /**
     * 
     * @type {string}
     * @memberof RemoteFieldClass
     */
    remote_key_name?: string;
    /**
     * 
     * @type {string}
     * @memberof RemoteFieldClass
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RemoteFieldClass
     */
    is_custom?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RemoteFieldClass
     */
    is_required?: boolean;
    /**
     * 
     * @type {FieldTypeEnum}
     * @memberof RemoteFieldClass
     */
    field_type?: FieldTypeEnum;
    /**
     * 
     * @type {FieldFormatEnum}
     * @memberof RemoteFieldClass
     */
    field_format?: FieldFormatEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof RemoteFieldClass
     */
    field_choices?: Array<string>;
    /**
     * 
     * @type {ItemSchema}
     * @memberof RemoteFieldClass
     */
    item_schema?: ItemSchema;
}

export function RemoteFieldClassFromJSON(json: JSONValue): RemoteFieldClass | undefined {
    return RemoteFieldClassFromJSONTyped(json);
}

export function RemoteFieldClassFromJSONTyped(json: JSONValue): RemoteFieldClass | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'display_name': !exists(json, 'display_name') ? undefined : json['display_name'],
        'remote_key_name': !exists(json, 'remote_key_name') ? undefined : json['remote_key_name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'is_custom': !exists(json, 'is_custom') ? undefined : json['is_custom'],
        'is_required': !exists(json, 'is_required') ? undefined : json['is_required'],
        'field_type': !exists(json, 'field_type') ? undefined : FieldTypeEnumFromJSON(json['field_type']) as FieldTypeEnum,
        'field_format': !exists(json, 'field_format') ? undefined : FieldFormatEnumFromJSON(json['field_format']) as FieldFormatEnum,
        'field_choices': !exists(json, 'field_choices') ? undefined : json['field_choices'],
        'item_schema': !exists(json, 'item_schema') ? undefined : ItemSchemaFromJSON(json['item_schema']) as ItemSchema,
    };
}

export function RemoteFieldClassToJSON(value?: RemoteFieldClass): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'id': value.id,
        'display_name': value.display_name,
        'remote_key_name': value.remote_key_name,
        'description': value.description,
        'is_custom': value.is_custom,
        'is_required': value.is_required,
        'field_type': FieldTypeEnumToJSON(value.field_type),
        'field_format': FieldFormatEnumToJSON(value.field_format),
        'field_choices': value.field_choices,
        'item_schema': ItemSchemaToJSON(value.item_schema),
    };
}

