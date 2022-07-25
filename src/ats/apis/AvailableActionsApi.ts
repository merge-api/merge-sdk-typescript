/* tslint:disable */
/* eslint-disable */
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


import * as runtime from '../runtime';
import {
    AvailableActions,
    AvailableActionsFromJSON,
    AvailableActionsToJSON,
} from '../models';

export interface AvailableActionsRetrieveRequest {
    xAccountToken: string;
}

/**
 * 
 */
export class AvailableActionsApi extends runtime.BaseAPI {

    /**
     * Returns a list of models and actions available for an account.
     */
    async availableActionsRetrieveRaw(requestParameters: AvailableActionsRetrieveRequest): Promise<runtime.ApiResponse<AvailableActions>> {
        if (requestParameters.xAccountToken === null || requestParameters.xAccountToken === undefined) {
            throw new runtime.RequiredError('xAccountToken','Required parameter requestParameters.xAccountToken was null or undefined when calling availableActionsRetrieve.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xAccountToken !== undefined && requestParameters.xAccountToken !== null) {
            headerParameters['X-Account-Token'] = String(requestParameters.xAccountToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // tokenAuth authentication
        }

        const response = await this.request({
            path: `/available-actions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AvailableActionsFromJSON(jsonValue));
    }

    /**
     * Returns a list of models and actions available for an account.
     */
    async availableActionsRetrieve(requestParameters: AvailableActionsRetrieveRequest): Promise<AvailableActions> {
        const response = await this.availableActionsRetrieveRaw(requestParameters);
        return await response.value();
    }

}
