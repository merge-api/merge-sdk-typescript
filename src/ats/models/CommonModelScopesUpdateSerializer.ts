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
    CommonModelScopesPutInnerDeserializerRequest,
    CommonModelScopesPutInnerDeserializerRequestFromJSON,
    CommonModelScopesPutInnerDeserializerRequestFromJSONTyped,
    CommonModelScopesPutInnerDeserializerRequestToJSON,
} from './';


/**
 * 
 * @export
 * @interface CommonModelScopesUpdateSerializer
 */
export interface CommonModelScopesUpdateSerializer {
    /**
     * The common model scopes to update.
     * @type {Array<CommonModelScopesPutInnerDeserializerRequest>}
     * @memberof CommonModelScopesUpdateSerializer
     */
    common_models: Array<CommonModelScopesPutInnerDeserializerRequest>;
}

export function CommonModelScopesUpdateSerializerFromJSON(json: JSONValue): CommonModelScopesUpdateSerializer | undefined {
    return CommonModelScopesUpdateSerializerFromJSONTyped(json);
}

export function CommonModelScopesUpdateSerializerFromJSONTyped(json: JSONValue): CommonModelScopesUpdateSerializer | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'common_models': ((json['common_models'] as Array<JSONValue>).map(CommonModelScopesPutInnerDeserializerRequestFromJSON)) as Array<CommonModelScopesPutInnerDeserializerRequest>,
    };
}

export function CommonModelScopesUpdateSerializerToJSON(value?: CommonModelScopesUpdateSerializer): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'common_models': ((value.common_models as Array<any>).map(CommonModelScopesPutInnerDeserializerRequestToJSON)),
    };
}

