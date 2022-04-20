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

/**
* # The RemoteKeyForRegeneration Object ### Description The `RemoteKeyForRegeneration` object is used to exchange an old remote key for a new one  ### Usage Example Post a `RemoteKeyForRegeneration` to swap out an old remote key for a new one
*/
export class RemoteKeyForRegenerationRequest {
    'name': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RemoteKeyForRegenerationRequest.attributeTypeMap;
    }
}

