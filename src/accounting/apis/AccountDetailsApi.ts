/* tslint:disable */
/* eslint-disable */
/**
 * Merge Accounting API
 * The unified API for building rich integrations with multiple Accounting & Finance platforms.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: hello@merge.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../../runtime';
import {
    AccountDetails,
    AccountDetailsFromJSON,
    AccountDetailsToJSON,
} from '../models';

import {
    MergeMetaRequest
} from '../../merge_meta_request';

//
/**
 * 
 */
export class AccountDetailsApi extends runtime.BaseAPI {

    /**
     * Get details for a linked account.
     */
    async accountDetailsRetrieveRaw(): Promise<runtime.ApiResponse<AccountDetails | undefined>> {
        const queryParameters: any = {};


        

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/accounting/v1/account-details`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountDetailsFromJSON(jsonValue));
    }

    /**
     * Get details for a linked account.
     */
    async accountDetailsRetrieve(): Promise<AccountDetails | undefined> {
        const response = await this.accountDetailsRetrieveRaw();
        return await response.value();
    }

}
