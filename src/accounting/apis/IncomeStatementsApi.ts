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
    IncomeStatement,
    IncomeStatementFromJSON,
    IncomeStatementToJSON,
    
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
	MergePaginatedResponseToJSON,
} from '../../merge_paginated_response';

import {
    MergeMetaRequest
} from '../../merge_meta_request';

export interface IncomeStatementsListRequest {
    companyId?: string;
    createdAfter?: Date;
    createdBefore?: Date;
    cursor?: string;
    expand?: Array<IncomeStatementsListExpandEnum>;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    modifiedAfter?: Date;
    modifiedBefore?: Date;
    pageSize?: number;
    remoteId?: string | null;
}

export interface IncomeStatementsRetrieveRequest {
    id: string;
    expand?: Array<IncomeStatementsRetrieveExpandEnum>;
    includeRemoteData?: boolean;
}

/**
 * 
 */
export class IncomeStatementsApi extends runtime.BaseAPI {

    /**
     * Returns a list of `IncomeStatement` objects.
     */
    async incomeStatementsListRaw(requestParameters: IncomeStatementsListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<IncomeStatement> | undefined>> {
        const queryParameters: any = {};

        if (requestParameters.companyId !== undefined) {
            queryParameters['company_id'] = requestParameters.companyId;
        }

        if (requestParameters.createdAfter !== undefined) {
            queryParameters['created_after'] = (requestParameters.createdAfter as any).toISOString();
        }

        if (requestParameters.createdBefore !== undefined) {
            queryParameters['created_before'] = (requestParameters.createdBefore as any).toISOString();
        }

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        if (requestParameters.expand) {
            queryParameters['expand'] = requestParameters.expand;
        }

        if (requestParameters.includeDeletedData !== undefined) {
            queryParameters['include_deleted_data'] = requestParameters.includeDeletedData;
        }

        if (requestParameters.includeRemoteData !== undefined) {
            queryParameters['include_remote_data'] = requestParameters.includeRemoteData;
        }

        if (requestParameters.modifiedAfter !== undefined) {
            queryParameters['modified_after'] = (requestParameters.modifiedAfter as any).toISOString();
        }

        if (requestParameters.modifiedBefore !== undefined) {
            queryParameters['modified_before'] = (requestParameters.modifiedBefore as any).toISOString();
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['page_size'] = requestParameters.pageSize;
        }

        if (requestParameters.remoteId !== undefined) {
            queryParameters['remote_id'] = requestParameters.remoteId;
        }


        

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/accounting/v1/income-statements`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue, IncomeStatementFromJSON));
    }

    /**
     * Returns a list of `IncomeStatement` objects.
     */
    async incomeStatementsList(requestParameters: IncomeStatementsListRequest): Promise<MergePaginatedResponse<IncomeStatement> | undefined> {
        const response = await this.incomeStatementsListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns an `IncomeStatement` object with the given `id`.
     */
    async incomeStatementsRetrieveRaw(requestParameters: IncomeStatementsRetrieveRequest): Promise<runtime.ApiResponse<IncomeStatement | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling incomeStatementsRetrieve.');
        }

        const queryParameters: any = {};

        if (requestParameters.expand) {
            queryParameters['expand'] = requestParameters.expand;
        }

        if (requestParameters.includeRemoteData !== undefined) {
            queryParameters['include_remote_data'] = requestParameters.includeRemoteData;
        }


        

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/accounting/v1/income-statements/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IncomeStatementFromJSON(jsonValue));
    }

    /**
     * Returns an `IncomeStatement` object with the given `id`.
     */
    async incomeStatementsRetrieve(requestParameters: IncomeStatementsRetrieveRequest): Promise<IncomeStatement | undefined> {
        const response = await this.incomeStatementsRetrieveRaw(requestParameters);
        return await response.value();
    }

}

/**
* @export
* @enum {string}
*/
export enum IncomeStatementsListExpandEnum {
    Company = 'company'
}
/**
* @export
* @enum {string}
*/
export enum IncomeStatementsRetrieveExpandEnum {
    Company = 'company'
}
