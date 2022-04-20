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

/**
* # The RemoteKey Object ### Description The `RemoteKey` object is used to represent a request for a new remote key.  ### Usage Example Post a `GenerateRemoteKey` to receive a new `RemoteKey`.
*/
export class RemoteKey {
    'name': string;
    'key': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RemoteKey.attributeTypeMap;
    }
}

