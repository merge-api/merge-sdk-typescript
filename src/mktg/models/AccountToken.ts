/* tslint:disable */
/* eslint-disable */
/**
 * Merge Marketing Automation API
 * The unified API for building rich integrations with multiple Marketing Automation platforms.
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
    AccountIntegration,
    AccountIntegrationFromJSON,
    AccountIntegrationFromJSONTyped,
    AccountIntegrationToJSON,
} from './';


/**
 * 
 * @export
 * @interface AccountToken
 */
export interface AccountToken {
    /**
     * 
     * @type {string}
     * @memberof AccountToken
     */
    account_token: string;
    /**
     * 
     * @type {AccountIntegration}
     * @memberof AccountToken
     */
    integration: AccountIntegration;
}

export function AccountTokenFromJSON(json: JSONValue): AccountToken | undefined {
    return AccountTokenFromJSONTyped(json);
}

export function AccountTokenFromJSONTyped(json: JSONValue): AccountToken | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'account_token': json['account_token'],
        'integration': AccountIntegrationFromJSON(json['integration']) as AccountIntegration,
    };
}

export function AccountTokenToJSON(value?: AccountToken): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'account_token': value.account_token,
        'integration': AccountIntegrationToJSON(value.integration),
    };
}

