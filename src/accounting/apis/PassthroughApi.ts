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
    DataPassthroughRequest,
    DataPassthroughRequestFromJSON,
    DataPassthroughRequestToJSON,
    RemoteResponse,
    RemoteResponseFromJSON,
    RemoteResponseToJSON,
} from '../models';

import {
    MergeMetaRequest
} from '../../merge_meta_request';

export interface PassthroughCreateRequest {
    dataPassthroughRequest: DataPassthroughRequest;
}

/**
 * 
 */
export class PassthroughApi extends runtime.BaseAPI {

    /**
     * Pull data from an endpoint not currently supported by Merge.
     */
    async passthroughCreateRaw(requestParameters: PassthroughCreateRequest): Promise<runtime.ApiResponse<RemoteResponse | undefined>> {
        if (requestParameters.dataPassthroughRequest === null || requestParameters.dataPassthroughRequest === undefined) {
            throw new runtime.RequiredError('dataPassthroughRequest','Required parameter requestParameters.dataPassthroughRequest was null or undefined when calling passthroughCreate.');
        }

        const queryParameters: any = {};


        

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/accounting/v1/passthrough`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DataPassthroughRequestToJSON(requestParameters.dataPassthroughRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RemoteResponseFromJSON(jsonValue));
    }

    /**
     * Pull data from an endpoint not currently supported by Merge.
     */
    async passthroughCreate(requestParameters: PassthroughCreateRequest): Promise<RemoteResponse | undefined> {
        const response = await this.passthroughCreateRaw(requestParameters);
        return await response.value();
    }

}
