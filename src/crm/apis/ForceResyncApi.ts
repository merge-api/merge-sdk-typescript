/* tslint:disable */
/* eslint-disable */
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


import * as runtime from '../../runtime';
import {
    SyncStatus,
    SyncStatusFromJSON,
    SyncStatusToJSON,
} from '../models';

import {
    MergeMetaRequest
} from '../../merge_meta_request';

//
/**
 * 
 */
export class ForceResyncApi extends runtime.BaseAPI {

    /**
     * Force re-sync of all models. This is available for all organizations via the dashboard. Force re-sync is also available for monthly and quarterly sync frequency customers on the Core, Professional, or Enterprise plans.
     */
    async syncStatusResyncCreateRaw(): Promise<runtime.ApiResponse<Array<SyncStatus> | undefined>> {
        const queryParameters: any = {};


        

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/crm/v1/sync-status/resync`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(SyncStatusFromJSON));
    }

    /**
     * Force re-sync of all models. This is available for all organizations via the dashboard. Force re-sync is also available for monthly and quarterly sync frequency customers on the Core, Professional, or Enterprise plans.
     */
    async syncStatusResyncCreate(): Promise<Array<SyncStatus> | undefined> {
        const response = await this.syncStatusResyncCreateRaw();
        return await response.value();
    }

}
