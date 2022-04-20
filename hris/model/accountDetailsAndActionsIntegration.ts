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

import { RequestFile } from './models';
import { Categories143Enum } from './categories143Enum';
import { ModelOperation } from './modelOperation';

export class AccountDetailsAndActionsIntegration {
    'name': string;
    'categories': Array<Categories143Enum>;
    'image'?: string;
    'square_image'?: string;
    'color': string;
    'slug': string;
    'passthrough_available': boolean;
    'available_model_operations'?: Array<ModelOperation>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "categories",
            "baseName": "categories",
            "type": "Array<Categories143Enum>"
        },
        {
            "name": "image",
            "baseName": "image",
            "type": "string"
        },
        {
            "name": "square_image",
            "baseName": "square_image",
            "type": "string"
        },
        {
            "name": "color",
            "baseName": "color",
            "type": "string"
        },
        {
            "name": "slug",
            "baseName": "slug",
            "type": "string"
        },
        {
            "name": "passthrough_available",
            "baseName": "passthrough_available",
            "type": "boolean"
        },
        {
            "name": "available_model_operations",
            "baseName": "available_model_operations",
            "type": "Array<ModelOperation>"
        }    ];

    static getAttributeTypeMap() {
        return AccountDetailsAndActionsIntegration.attributeTypeMap;
    }
}

