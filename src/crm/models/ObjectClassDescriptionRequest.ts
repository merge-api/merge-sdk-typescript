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
    OriginTypeEnum,
    OriginTypeEnumFromJSON,
    OriginTypeEnumFromJSONTyped,
    OriginTypeEnumToJSON,
} from './';


/**
 * 
 * @export
 * @interface ObjectClassDescriptionRequest
 */
export interface ObjectClassDescriptionRequest {
    /**
     * 
     * @type {string}
     * @memberof ObjectClassDescriptionRequest
     */
    id: string;
    /**
     * 
     * @type {OriginTypeEnum}
     * @memberof ObjectClassDescriptionRequest
     */
    origin_type: OriginTypeEnum;
}

export function ObjectClassDescriptionRequestFromJSON(json: JSONValue): ObjectClassDescriptionRequest | undefined {
    return ObjectClassDescriptionRequestFromJSONTyped(json);
}

export function ObjectClassDescriptionRequestFromJSONTyped(json: JSONValue): ObjectClassDescriptionRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'id': json['id'],
        'origin_type': OriginTypeEnumFromJSON(json['origin_type']) as OriginTypeEnum,
    };
}

export function ObjectClassDescriptionRequestToJSON(value?: ObjectClassDescriptionRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'id': value.id,
        'origin_type': OriginTypeEnumToJSON(value.origin_type),
    };
}

