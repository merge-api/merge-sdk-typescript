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
    
    Payment,
    PaymentFromJSON,
    PaymentToJSON,
    PaymentEndpointRequest,
    PaymentEndpointRequestFromJSON,
    PaymentEndpointRequestToJSON,
    PaymentResponse,
    PaymentResponseFromJSON,
    PaymentResponseToJSON,
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
	MergePaginatedResponseToJSON,
} from '../../merge_paginated_response';

export interface PaymentsCreateRequest {
    paymentEndpointRequest: PaymentEndpointRequest;
    isDebugMode?: boolean;
    runAsync?: boolean;
}

export interface PaymentsListRequest {
    accountId?: string;
    contactId?: string;
    createdAfter?: Date;
    createdBefore?: Date;
    cursor?: string;
    expand?: PaymentsListExpandEnum;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    modifiedAfter?: Date;
    modifiedBefore?: Date;
    pageSize?: number;
    remoteId?: string | null;
}

export interface PaymentsRetrieveRequest {
    id: string;
    expand?: PaymentsRetrieveExpandEnum;
    includeRemoteData?: boolean;
}

/**
 * 
 */
export class PaymentsApi extends runtime.BaseAPI {

    /**
     * Creates a `Payment` object with the given values.
     */
    async paymentsCreateRaw(requestParameters: PaymentsCreateRequest): Promise<runtime.ApiResponse<PaymentResponse | undefined>> {
        if (requestParameters.paymentEndpointRequest === null || requestParameters.paymentEndpointRequest === undefined) {
            throw new runtime.RequiredError('paymentEndpointRequest','Required parameter requestParameters.paymentEndpointRequest was null or undefined when calling paymentsCreate.');
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
            path: `/accounting/v1/payments`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PaymentEndpointRequestToJSON(requestParameters.paymentEndpointRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentResponseFromJSON(jsonValue));
    }

    /**
     * Creates a `Payment` object with the given values.
     */
    async paymentsCreate(requestParameters: PaymentsCreateRequest): Promise<PaymentResponse | undefined> {
        const response = await this.paymentsCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of `Payment` objects.
     */
    async paymentsListRaw(requestParameters: PaymentsListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<Payment> | undefined>> {
        const queryParameters: any = {};

        if (requestParameters.accountId !== undefined) {
            queryParameters['account_id'] = requestParameters.accountId;
        }

        if (requestParameters.contactId !== undefined) {
            queryParameters['contact_id'] = requestParameters.contactId;
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

        if (requestParameters.expand !== undefined) {
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
            path: `/accounting/v1/payments`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of `Payment` objects.
     */
    async paymentsList(requestParameters: PaymentsListRequest): Promise<MergePaginatedResponse<Payment> | undefined> {
        const response = await this.paymentsListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns metadata for `Payment` POSTs.
     */
    async paymentsMetaPostRetrieveRaw(): Promise<runtime.ApiResponse<MetaResponse | undefined>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/accounting/v1/payments/meta/post`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MetaResponseFromJSON(jsonValue));
    }

    /**
     * Returns metadata for `Payment` POSTs.
     */
    async paymentsMetaPostRetrieve(): Promise<MetaResponse | undefined> {
        const response = await this.paymentsMetaPostRetrieveRaw();
        return await response.value();
    }

    /**
     * Returns a `Payment` object with the given `id`.
     */
    async paymentsRetrieveRaw(requestParameters: PaymentsRetrieveRequest): Promise<runtime.ApiResponse<Payment | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling paymentsRetrieve.');
        }

        const queryParameters: any = {};

        if (requestParameters.expand !== undefined) {
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
            path: `/accounting/v1/payments/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentFromJSON(jsonValue));
    }

    /**
     * Returns a `Payment` object with the given `id`.
     */
    async paymentsRetrieve(requestParameters: PaymentsRetrieveRequest): Promise<Payment | undefined> {
        const response = await this.paymentsRetrieveRaw(requestParameters);
        return await response.value();
    }

}

/**
* @export
* @enum {string}
*/
export enum PaymentsListExpandEnum {
    Account = 'account',
    Contact = 'contact',
    Contactaccount = 'contact,account'
}
/**
* @export
* @enum {string}
*/
export enum PaymentsRetrieveExpandEnum {
    Account = 'account',
    Contact = 'contact',
    Contactaccount = 'contact,account'
}
