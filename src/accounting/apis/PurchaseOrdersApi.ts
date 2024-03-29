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
    MetaResponse,
    MetaResponseFromJSON,
    MetaResponseToJSON,
    
    PurchaseOrder,
    PurchaseOrderFromJSON,
    PurchaseOrderToJSON,
    PurchaseOrderEndpointRequest,
    PurchaseOrderEndpointRequestFromJSON,
    PurchaseOrderEndpointRequestToJSON,
    PurchaseOrderResponse,
    PurchaseOrderResponseFromJSON,
    PurchaseOrderResponseToJSON,
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
	MergePaginatedResponseToJSON,
} from '../../merge_paginated_response';

import {
    MergeMetaRequest
} from '../../merge_meta_request';

export interface PurchaseOrdersCreateRequest {
    purchaseOrderEndpointRequest: PurchaseOrderEndpointRequest;
    isDebugMode?: boolean;
    runAsync?: boolean;
}

export interface PurchaseOrdersListRequest {
    companyId?: string;
    createdAfter?: Date;
    createdBefore?: Date;
    cursor?: string;
    expand?: Array<PurchaseOrdersListExpandEnum>;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    issueDateAfter?: Date | null;
    issueDateBefore?: Date | null;
    modifiedAfter?: Date;
    modifiedBefore?: Date;
    pageSize?: number;
    remoteFields?: PurchaseOrdersListRemoteFieldsEnum;
    remoteId?: string | null;
    showEnumOrigins?: PurchaseOrdersListShowEnumOriginsEnum;
}

// extends MergeMetaRequest
export interface PurchaseOrdersRetrieveRequest {
    id: string;
    expand?: Array<PurchaseOrdersRetrieveExpandEnum>;
    includeRemoteData?: boolean;
    remoteFields?: PurchaseOrdersRetrieveRemoteFieldsEnum;
    showEnumOrigins?: PurchaseOrdersRetrieveShowEnumOriginsEnum;
}

/**
 * 
 */
export class PurchaseOrdersApi extends runtime.BaseAPI {

    /**
     * Creates a `PurchaseOrder` object with the given values.
     */
    async purchaseOrdersCreateRaw(requestParameters: PurchaseOrdersCreateRequest): Promise<runtime.ApiResponse<PurchaseOrderResponse | undefined>> {
        if (requestParameters.purchaseOrderEndpointRequest === null || requestParameters.purchaseOrderEndpointRequest === undefined) {
            throw new runtime.RequiredError('purchaseOrderEndpointRequest','Required parameter requestParameters.purchaseOrderEndpointRequest was null or undefined when calling purchaseOrdersCreate.');
        }

        const queryParameters: any = {};

        if (requestParameters.isDebugMode !== undefined) {
            queryParameters['is_debug_mode'] = requestParameters.isDebugMode;
        }

        if (requestParameters.runAsync !== undefined) {
            queryParameters['run_async'] = requestParameters.runAsync;
        }


        

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/accounting/v1/purchase-orders`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PurchaseOrderEndpointRequestToJSON(requestParameters.purchaseOrderEndpointRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PurchaseOrderResponseFromJSON(jsonValue));
    }

    /**
     * Creates a `PurchaseOrder` object with the given values.
     */
    async purchaseOrdersCreate(requestParameters: PurchaseOrdersCreateRequest): Promise<PurchaseOrderResponse | undefined> {
        const response = await this.purchaseOrdersCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of `PurchaseOrder` objects.
     */
    async purchaseOrdersListRaw(requestParameters: PurchaseOrdersListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<PurchaseOrder> | undefined>> {
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

        if (requestParameters.issueDateAfter !== undefined) {
            queryParameters['issue_date_after'] = (requestParameters.issueDateAfter as any).toISOString();
        }

        if (requestParameters.issueDateBefore !== undefined) {
            queryParameters['issue_date_before'] = (requestParameters.issueDateBefore as any).toISOString();
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

        if (requestParameters.remoteFields !== undefined) {
            queryParameters['remote_fields'] = requestParameters.remoteFields;
        }

        if (requestParameters.remoteId !== undefined) {
            queryParameters['remote_id'] = requestParameters.remoteId;
        }

        if (requestParameters.showEnumOrigins !== undefined) {
            queryParameters['show_enum_origins'] = requestParameters.showEnumOrigins;
        }


        

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/accounting/v1/purchase-orders`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue, PurchaseOrderFromJSON));
    }

    /**
     * Returns a list of `PurchaseOrder` objects.
     */
    async purchaseOrdersList(requestParameters: PurchaseOrdersListRequest): Promise<MergePaginatedResponse<PurchaseOrder> | undefined> {
        const response = await this.purchaseOrdersListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns metadata for `PurchaseOrder` POSTs.
     */
    async purchaseOrdersMetaPostRetrieveRaw(requestParameters: MergeMetaRequest | undefined = undefined): Promise<runtime.ApiResponse<MetaResponse | undefined>> {
        const queryParameters: any = {};


        if (requestParameters !== undefined) {
            Object.keys(requestParameters.misc_params_query).forEach((key) => {
                if (requestParameters.misc_params_query[key] !== undefined) {
                    queryParameters[key] = requestParameters.misc_params_query[key];
                }
            })
        }

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/accounting/v1/purchase-orders/meta/post`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MetaResponseFromJSON(jsonValue));
    }

    /**
     * Returns metadata for `PurchaseOrder` POSTs.
     */
    async purchaseOrdersMetaPostRetrieve(requestParameters: MergeMetaRequest | undefined = undefined): Promise<MetaResponse | undefined> {
        const response = await this.purchaseOrdersMetaPostRetrieveRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a `PurchaseOrder` object with the given `id`.
     */
    async purchaseOrdersRetrieveRaw(requestParameters: PurchaseOrdersRetrieveRequest): Promise<runtime.ApiResponse<PurchaseOrder | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling purchaseOrdersRetrieve.');
        }

        const queryParameters: any = {};

        if (requestParameters.expand) {
            queryParameters['expand'] = requestParameters.expand;
        }

        if (requestParameters.includeRemoteData !== undefined) {
            queryParameters['include_remote_data'] = requestParameters.includeRemoteData;
        }

        if (requestParameters.remoteFields !== undefined) {
            queryParameters['remote_fields'] = requestParameters.remoteFields;
        }

        if (requestParameters.showEnumOrigins !== undefined) {
            queryParameters['show_enum_origins'] = requestParameters.showEnumOrigins;
        }


        

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/accounting/v1/purchase-orders/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PurchaseOrderFromJSON(jsonValue));
    }

    /**
     * Returns a `PurchaseOrder` object with the given `id`.
     */
    async purchaseOrdersRetrieve(requestParameters: PurchaseOrdersRetrieveRequest): Promise<PurchaseOrder | undefined> {
        const response = await this.purchaseOrdersRetrieveRaw(requestParameters);
        return await response.value();
    }

}

/**
* @export
* @enum {string}
*/
export enum PurchaseOrdersListExpandEnum {
    Company = 'company',
    DeliveryAddress = 'delivery_address',
    LineItems = 'line_items',
    TrackingCategories = 'tracking_categories',
    Vendor = 'vendor'
}
/**
* @export
* @enum {string}
*/
export enum PurchaseOrdersListRemoteFieldsEnum {
    Status = 'status'
}
/**
* @export
* @enum {string}
*/
export enum PurchaseOrdersListShowEnumOriginsEnum {
    Status = 'status'
}
/**
* @export
* @enum {string}
*/
export enum PurchaseOrdersRetrieveExpandEnum {
    Company = 'company',
    DeliveryAddress = 'delivery_address',
    LineItems = 'line_items',
    TrackingCategories = 'tracking_categories',
    Vendor = 'vendor'
}
/**
* @export
* @enum {string}
*/
export enum PurchaseOrdersRetrieveRemoteFieldsEnum {
    Status = 'status'
}
/**
* @export
* @enum {string}
*/
export enum PurchaseOrdersRetrieveShowEnumOriginsEnum {
    Status = 'status'
}
