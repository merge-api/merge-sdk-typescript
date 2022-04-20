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

import { RequestFile } from './models';
import { AccountIntegration } from './accountIntegration';
import { ModelOperation } from './modelOperation';

/**
* # The AvailableActions Object ### Description The `Activity` object is used to see all available model/operation combinations for an integration.  ### Usage Example Fetch all the actions available for the `Zenefits` integration.
*/
export class AvailableActions {
    'integration': AccountIntegration;
    'passthrough_available': boolean;
    'available_model_operations'?: Array<ModelOperation>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "integration",
            "baseName": "integration",
            "type": "AccountIntegration"
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
        return AvailableActions.attributeTypeMap;
    }
}
