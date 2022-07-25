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


import * as runtime from '../runtime';
import {
    RemoteKey,
    RemoteKeyFromJSON,
    RemoteKeyToJSON,
    RemoteKeyForRegenerationRequest,
    RemoteKeyForRegenerationRequestFromJSON,
    RemoteKeyForRegenerationRequestToJSON,
} from '../models';

export interface RegenerateKeyCreateRequest {
    remoteKeyForRegenerationRequest: RemoteKeyForRegenerationRequest;
}

/**
 * 
 */
export class RegenerateKeyApi extends runtime.BaseAPI {

    /**
     * Exchange remote keys.
     */
    async regenerateKeyCreateRaw(requestParameters: RegenerateKeyCreateRequest): Promise<runtime.ApiResponse<RemoteKey>> {
        if (requestParameters.remoteKeyForRegenerationRequest === null || requestParameters.remoteKeyForRegenerationRequest === undefined) {
            throw new runtime.RequiredError('remoteKeyForRegenerationRequest','Required parameter requestParameters.remoteKeyForRegenerationRequest was null or undefined when calling regenerateKeyCreate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/regenerate-key`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RemoteKeyForRegenerationRequestToJSON(requestParameters.remoteKeyForRegenerationRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RemoteKeyFromJSON(jsonValue));
    }

    /**
     * Exchange remote keys.
     */
    async regenerateKeyCreate(requestParameters: RegenerateKeyCreateRequest): Promise<RemoteKey> {
        const response = await this.regenerateKeyCreateRaw(requestParameters);
        return await response.value();
    }

}
