/* tslint:disable */
/* eslint-disable */
/**
 * Merge HRIS API
 * The unified API for building rich integrations with multiple HR Information System platforms.
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
    Employee,
    EmployeeFromJSON,
    EmployeeToJSON,
    EmployeeEndpointRequest,
    EmployeeEndpointRequestFromJSON,
    EmployeeEndpointRequestToJSON,
    EmployeeResponse,
    EmployeeResponseFromJSON,
    EmployeeResponseToJSON,
    IgnoreCommonModelRequest,
    IgnoreCommonModelRequestFromJSON,
    IgnoreCommonModelRequestToJSON,
    MetaResponse,
    MetaResponseFromJSON,
    MetaResponseToJSON,
    
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
	MergePaginatedResponseToJSON,
} from '../../merge_paginated_response';

import {
    MergeMetaRequest
} from '../../merge_meta_request';

export interface EmployeesCreateRequest {
    employeeEndpointRequest: EmployeeEndpointRequest;
    isDebugMode?: boolean;
    runAsync?: boolean;
}

export interface EmployeesIgnoreCreateRequest {
    modelId: string;
    ignoreCommonModelRequest: IgnoreCommonModelRequest;
}

export interface EmployeesListRequest {
    companyId?: string;
    createdAfter?: Date;
    createdBefore?: Date;
    cursor?: string;
    displayFullName?: string | null;
    employmentStatus?: EmployeesListEmploymentStatusEnum;
    expand?: Array<EmployeesListExpandEnum>;
    firstName?: string | null;
    groups?: string;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    includeSensitiveFields?: boolean;
    lastName?: string | null;
    managerId?: string;
    modifiedAfter?: Date;
    modifiedBefore?: Date;
    pageSize?: number;
    payGroupId?: string;
    personalEmail?: string | null;
    remoteFields?: EmployeesListRemoteFieldsEnum;
    remoteId?: string | null;
    showEnumOrigins?: EmployeesListShowEnumOriginsEnum;
    startedAfter?: Date | null;
    startedBefore?: Date | null;
    teamId?: string;
    terminatedAfter?: Date | null;
    terminatedBefore?: Date | null;
    workEmail?: string | null;
    workLocationId?: string;
}

// extends MergeMetaRequest
export interface EmployeesRetrieveRequest {
    id: string;
    expand?: Array<EmployeesRetrieveExpandEnum>;
    includeRemoteData?: boolean;
    includeSensitiveFields?: boolean;
    remoteFields?: EmployeesRetrieveRemoteFieldsEnum;
    showEnumOrigins?: EmployeesRetrieveShowEnumOriginsEnum;
}

/**
 * 
 */
export class EmployeesApi extends runtime.BaseAPI {

    /**
     * Creates an `Employee` object with the given values.
     */
    async employeesCreateRaw(requestParameters: EmployeesCreateRequest): Promise<runtime.ApiResponse<EmployeeResponse | undefined>> {
        if (requestParameters.employeeEndpointRequest === null || requestParameters.employeeEndpointRequest === undefined) {
            throw new runtime.RequiredError('employeeEndpointRequest','Required parameter requestParameters.employeeEndpointRequest was null or undefined when calling employeesCreate.');
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
            path: `/hris/v1/employees`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EmployeeEndpointRequestToJSON(requestParameters.employeeEndpointRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EmployeeResponseFromJSON(jsonValue));
    }

    /**
     * Creates an `Employee` object with the given values.
     */
    async employeesCreate(requestParameters: EmployeesCreateRequest): Promise<EmployeeResponse | undefined> {
        const response = await this.employeesCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Ignores a specific row based on the `model_id` in the url. These records will have their properties set to null, and will not be updated in future syncs. The \"reason\" and \"message\" fields in the request body will be stored for audit purposes.
     */
    async employeesIgnoreCreateRaw(requestParameters: EmployeesIgnoreCreateRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.modelId === null || requestParameters.modelId === undefined) {
            throw new runtime.RequiredError('modelId','Required parameter requestParameters.modelId was null or undefined when calling employeesIgnoreCreate.');
        }

        if (requestParameters.ignoreCommonModelRequest === null || requestParameters.ignoreCommonModelRequest === undefined) {
            throw new runtime.RequiredError('ignoreCommonModelRequest','Required parameter requestParameters.ignoreCommonModelRequest was null or undefined when calling employeesIgnoreCreate.');
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
            path: `/hris/v1/employees/ignore/{model_id}`.replace(`{${"model_id"}}`, encodeURIComponent(String(requestParameters.modelId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: IgnoreCommonModelRequestToJSON(requestParameters.ignoreCommonModelRequest),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Ignores a specific row based on the `model_id` in the url. These records will have their properties set to null, and will not be updated in future syncs. The \"reason\" and \"message\" fields in the request body will be stored for audit purposes.
     */
    async employeesIgnoreCreate(requestParameters: EmployeesIgnoreCreateRequest): Promise<void> {
        await this.employeesIgnoreCreateRaw(requestParameters);
    }

    /**
     * Returns a list of `Employee` objects.
     */
    async employeesListRaw(requestParameters: EmployeesListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<Employee> | undefined>> {
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

        if (requestParameters.displayFullName !== undefined) {
            queryParameters['display_full_name'] = requestParameters.displayFullName;
        }

        if (requestParameters.employmentStatus !== undefined) {
            queryParameters['employment_status'] = requestParameters.employmentStatus;
        }

        if (requestParameters.expand) {
            queryParameters['expand'] = requestParameters.expand;
        }

        if (requestParameters.firstName !== undefined) {
            queryParameters['first_name'] = requestParameters.firstName;
        }

        if (requestParameters.groups !== undefined) {
            queryParameters['groups'] = requestParameters.groups;
        }

        if (requestParameters.includeDeletedData !== undefined) {
            queryParameters['include_deleted_data'] = requestParameters.includeDeletedData;
        }

        if (requestParameters.includeRemoteData !== undefined) {
            queryParameters['include_remote_data'] = requestParameters.includeRemoteData;
        }

        if (requestParameters.includeSensitiveFields !== undefined) {
            queryParameters['include_sensitive_fields'] = requestParameters.includeSensitiveFields;
        }

        if (requestParameters.lastName !== undefined) {
            queryParameters['last_name'] = requestParameters.lastName;
        }

        if (requestParameters.managerId !== undefined) {
            queryParameters['manager_id'] = requestParameters.managerId;
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

        if (requestParameters.payGroupId !== undefined) {
            queryParameters['pay_group_id'] = requestParameters.payGroupId;
        }

        if (requestParameters.personalEmail !== undefined) {
            queryParameters['personal_email'] = requestParameters.personalEmail;
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

        if (requestParameters.startedAfter !== undefined) {
            queryParameters['started_after'] = (requestParameters.startedAfter as any).toISOString();
        }

        if (requestParameters.startedBefore !== undefined) {
            queryParameters['started_before'] = (requestParameters.startedBefore as any).toISOString();
        }

        if (requestParameters.teamId !== undefined) {
            queryParameters['team_id'] = requestParameters.teamId;
        }

        if (requestParameters.terminatedAfter !== undefined) {
            queryParameters['terminated_after'] = (requestParameters.terminatedAfter as any).toISOString();
        }

        if (requestParameters.terminatedBefore !== undefined) {
            queryParameters['terminated_before'] = (requestParameters.terminatedBefore as any).toISOString();
        }

        if (requestParameters.workEmail !== undefined) {
            queryParameters['work_email'] = requestParameters.workEmail;
        }

        if (requestParameters.workLocationId !== undefined) {
            queryParameters['work_location_id'] = requestParameters.workLocationId;
        }


        

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/hris/v1/employees`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue, EmployeeFromJSON));
    }

    /**
     * Returns a list of `Employee` objects.
     */
    async employeesList(requestParameters: EmployeesListRequest): Promise<MergePaginatedResponse<Employee> | undefined> {
        const response = await this.employeesListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns metadata for `Employee` POSTs.
     */
    async employeesMetaPostRetrieveRaw(requestParameters: MergeMetaRequest | undefined = undefined): Promise<runtime.ApiResponse<MetaResponse | undefined>> {
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
            path: `/hris/v1/employees/meta/post`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MetaResponseFromJSON(jsonValue));
    }

    /**
     * Returns metadata for `Employee` POSTs.
     */
    async employeesMetaPostRetrieve(requestParameters: MergeMetaRequest | undefined = undefined): Promise<MetaResponse | undefined> {
        const response = await this.employeesMetaPostRetrieveRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns an `Employee` object with the given `id`.
     */
    async employeesRetrieveRaw(requestParameters: EmployeesRetrieveRequest): Promise<runtime.ApiResponse<Employee | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling employeesRetrieve.');
        }

        const queryParameters: any = {};

        if (requestParameters.expand) {
            queryParameters['expand'] = requestParameters.expand;
        }

        if (requestParameters.includeRemoteData !== undefined) {
            queryParameters['include_remote_data'] = requestParameters.includeRemoteData;
        }

        if (requestParameters.includeSensitiveFields !== undefined) {
            queryParameters['include_sensitive_fields'] = requestParameters.includeSensitiveFields;
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
            path: `/hris/v1/employees/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EmployeeFromJSON(jsonValue));
    }

    /**
     * Returns an `Employee` object with the given `id`.
     */
    async employeesRetrieve(requestParameters: EmployeesRetrieveRequest): Promise<Employee | undefined> {
        const response = await this.employeesRetrieveRaw(requestParameters);
        return await response.value();
    }

}

/**
* @export
* @enum {string}
*/
export enum EmployeesListEmploymentStatusEnum {
    Active = 'ACTIVE',
    Inactive = 'INACTIVE',
    Pending = 'PENDING'
}
/**
* @export
* @enum {string}
*/
export enum EmployeesListExpandEnum {
    Company = 'company',
    Employments = 'employments',
    Groups = 'groups',
    HomeLocation = 'home_location',
    Manager = 'manager',
    PayGroup = 'pay_group',
    Team = 'team',
    WorkLocation = 'work_location'
}
/**
* @export
* @enum {string}
*/
export enum EmployeesListRemoteFieldsEnum {
    EmploymentStatus = 'employment_status',
    EmploymentStatusethnicity = 'employment_status,ethnicity',
    EmploymentStatusethnicitygender = 'employment_status,ethnicity,gender',
    EmploymentStatusethnicitygendermaritalStatus = 'employment_status,ethnicity,gender,marital_status',
    EmploymentStatusethnicitymaritalStatus = 'employment_status,ethnicity,marital_status',
    EmploymentStatusgender = 'employment_status,gender',
    EmploymentStatusgendermaritalStatus = 'employment_status,gender,marital_status',
    EmploymentStatusmaritalStatus = 'employment_status,marital_status',
    Ethnicity = 'ethnicity',
    Ethnicitygender = 'ethnicity,gender',
    EthnicitygendermaritalStatus = 'ethnicity,gender,marital_status',
    EthnicitymaritalStatus = 'ethnicity,marital_status',
    Gender = 'gender',
    GendermaritalStatus = 'gender,marital_status',
    MaritalStatus = 'marital_status'
}
/**
* @export
* @enum {string}
*/
export enum EmployeesListShowEnumOriginsEnum {
    EmploymentStatus = 'employment_status',
    EmploymentStatusethnicity = 'employment_status,ethnicity',
    EmploymentStatusethnicitygender = 'employment_status,ethnicity,gender',
    EmploymentStatusethnicitygendermaritalStatus = 'employment_status,ethnicity,gender,marital_status',
    EmploymentStatusethnicitymaritalStatus = 'employment_status,ethnicity,marital_status',
    EmploymentStatusgender = 'employment_status,gender',
    EmploymentStatusgendermaritalStatus = 'employment_status,gender,marital_status',
    EmploymentStatusmaritalStatus = 'employment_status,marital_status',
    Ethnicity = 'ethnicity',
    Ethnicitygender = 'ethnicity,gender',
    EthnicitygendermaritalStatus = 'ethnicity,gender,marital_status',
    EthnicitymaritalStatus = 'ethnicity,marital_status',
    Gender = 'gender',
    GendermaritalStatus = 'gender,marital_status',
    MaritalStatus = 'marital_status'
}
/**
* @export
* @enum {string}
*/
export enum EmployeesRetrieveExpandEnum {
    Company = 'company',
    Employments = 'employments',
    Groups = 'groups',
    HomeLocation = 'home_location',
    Manager = 'manager',
    PayGroup = 'pay_group',
    Team = 'team',
    WorkLocation = 'work_location'
}
/**
* @export
* @enum {string}
*/
export enum EmployeesRetrieveRemoteFieldsEnum {
    EmploymentStatus = 'employment_status',
    EmploymentStatusethnicity = 'employment_status,ethnicity',
    EmploymentStatusethnicitygender = 'employment_status,ethnicity,gender',
    EmploymentStatusethnicitygendermaritalStatus = 'employment_status,ethnicity,gender,marital_status',
    EmploymentStatusethnicitymaritalStatus = 'employment_status,ethnicity,marital_status',
    EmploymentStatusgender = 'employment_status,gender',
    EmploymentStatusgendermaritalStatus = 'employment_status,gender,marital_status',
    EmploymentStatusmaritalStatus = 'employment_status,marital_status',
    Ethnicity = 'ethnicity',
    Ethnicitygender = 'ethnicity,gender',
    EthnicitygendermaritalStatus = 'ethnicity,gender,marital_status',
    EthnicitymaritalStatus = 'ethnicity,marital_status',
    Gender = 'gender',
    GendermaritalStatus = 'gender,marital_status',
    MaritalStatus = 'marital_status'
}
/**
* @export
* @enum {string}
*/
export enum EmployeesRetrieveShowEnumOriginsEnum {
    EmploymentStatus = 'employment_status',
    EmploymentStatusethnicity = 'employment_status,ethnicity',
    EmploymentStatusethnicitygender = 'employment_status,ethnicity,gender',
    EmploymentStatusethnicitygendermaritalStatus = 'employment_status,ethnicity,gender,marital_status',
    EmploymentStatusethnicitymaritalStatus = 'employment_status,ethnicity,marital_status',
    EmploymentStatusgender = 'employment_status,gender',
    EmploymentStatusgendermaritalStatus = 'employment_status,gender,marital_status',
    EmploymentStatusmaritalStatus = 'employment_status,marital_status',
    Ethnicity = 'ethnicity',
    Ethnicitygender = 'ethnicity,gender',
    EthnicitygendermaritalStatus = 'ethnicity,gender,marital_status',
    EthnicitymaritalStatus = 'ethnicity,marital_status',
    Gender = 'gender',
    GendermaritalStatus = 'gender,marital_status',
    MaritalStatus = 'marital_status'
}
