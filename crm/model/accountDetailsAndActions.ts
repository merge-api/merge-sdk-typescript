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

import { RequestFile } from './models';
import { AccountDetailsAndActionsIntegration } from './accountDetailsAndActionsIntegration';
import { AccountDetailsAndActionsStatusEnum } from './accountDetailsAndActionsStatusEnum';
import { CategoryEnum } from './categoryEnum';

/**
* # The LinkedAccount Object ### Description The `LinkedAccount` object is used to represent an end user\'s link with a specific integration.  ### Usage Example View a list of your organization\'s `LinkedAccount` objects.
*/
export class AccountDetailsAndActions {
    'id': string;
    'category'?: CategoryEnum;
    'status': AccountDetailsAndActionsStatusEnum;
    'status_detail'?: string;
    'end_user_origin_id'?: string;
    'end_user_organization_name': string;
    'end_user_email_address': string;
    'webhook_listener_url': string;
    'integration'?: AccountDetailsAndActionsIntegration;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "CategoryEnum"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "AccountDetailsAndActionsStatusEnum"
        },
        {
            "name": "status_detail",
            "baseName": "status_detail",
            "type": "string"
        },
        {
            "name": "end_user_origin_id",
            "baseName": "end_user_origin_id",
            "type": "string"
        },
        {
            "name": "end_user_organization_name",
            "baseName": "end_user_organization_name",
            "type": "string"
        },
        {
            "name": "end_user_email_address",
            "baseName": "end_user_email_address",
            "type": "string"
        },
        {
            "name": "webhook_listener_url",
            "baseName": "webhook_listener_url",
            "type": "string"
        },
        {
            "name": "integration",
            "baseName": "integration",
            "type": "AccountDetailsAndActionsIntegration"
        }    ];

    static getAttributeTypeMap() {
        return AccountDetailsAndActions.attributeTypeMap;
    }
}

