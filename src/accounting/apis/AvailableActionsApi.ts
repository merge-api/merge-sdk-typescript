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
    AvailableActions,
    AvailableActionsFromJSON,
    AvailableActionsToJSON,
} from '../models';

import {
    MergeMetaRequest
} from '../../merge_meta_request';

//
/**
 * 
 */
export class AvailableActionsApi extends runtime.BaseAPI {

    /**
     * Returns a list of models and actions available for an account.
     */
    async availableActionsRetrieveRaw(): Promise<runtime.ApiResponse<AvailableActions | undefined>> {
        const queryParameters: any = {};


        

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/accounting/v1/available-actions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AvailableActionsFromJSON(jsonValue));
    }

    /**
     * Returns a list of models and actions available for an account.
     */
    async availableActionsRetrieve(): Promise<AvailableActions | undefined> {
        const response = await this.availableActionsRetrieveRaw();
        return await response.value();
    }

}
