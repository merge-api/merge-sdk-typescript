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
    CategoriesEnum,
    CategoriesEnumFromJSON,
    CategoriesEnumFromJSONTyped,
    CategoriesEnumToJSON,
} from './';


/**
 * 
 * @export
 * @interface AccountIntegration
 */
export interface AccountIntegration {
    /**
     * Company name.
     * @type {string}
     * @memberof AccountIntegration
     */
    name: string;
    /**
     * Category or categories this integration belongs to. Multiple categories should be comma separated.<br/><br>Example: For [ats, hris], enter <i>ats,hris</i>
     * @type {Array<CategoriesEnum>}
     * @memberof AccountIntegration
     */
    categories?: Array<CategoriesEnum>;
    /**
     * Company logo in rectangular shape. <b>Upload an image with a clear background.</b>
     * @type {string}
     * @memberof AccountIntegration
     */
    image?: string | null;
    /**
     * Company logo in square shape. <b>Upload an image with a white background.</b>
     * @type {string}
     * @memberof AccountIntegration
     */
    square_image?: string | null;
    /**
     * The color of this integration used for buttons and text throughout the app and landing pages. <b>Choose a darker, saturated color.</b>
     * @type {string}
     * @memberof AccountIntegration
     */
    color?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountIntegration
     */
    readonly slug?: string;
}

export function AccountIntegrationFromJSON(json: JSONValue): AccountIntegration {
    return AccountIntegrationFromJSONTyped(json);
}

export function AccountIntegrationFromJSONTyped(json: JSONValue): AccountIntegration {
    if ((json === undefined) || (json === null)) {
        return json;
    }

    return {
        
        'name': json['name'],
        'categories': !exists(json, 'categories') ? undefined : ((json['categories'] as Array<any>).map(CategoriesEnumFromJSON)),
        'image': !exists(json, 'image') ? undefined : json['image'],
        'square_image': !exists(json, 'square_image') ? undefined : json['square_image'],
        'color': !exists(json, 'color') ? undefined : json['color'],
        'slug': !exists(json, 'slug') ? undefined : json['slug'],
    };
}

export function AccountIntegrationToJSON(value?: AccountIntegration | null): JSONValue {
    if (value === undefined || value === null) {
        return value;
    }

    return {
        
        'name': value.name,
        'categories': value.categories === undefined ? undefined : ((value.categories as Array<any>).map(CategoriesEnumToJSON)),
        'image': value.image,
        'square_image': value.square_image,
        'color': value.color,
    };
}

