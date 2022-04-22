import localVarRequest from 'request';

export * from './accountDetails';
export * from './accountDetailsAndActions';
export * from './accountDetailsAndActionsIntegration';
export * from './accountDetailsAndActionsStatusEnum';
export * from './accountIntegration';
export * from './accountToken';
export * from './accountTypeEnum';
export * from './availableActions';
export * from './bankInfo';
export * from './benefit';
export * from './categoriesEnum';
export * from './categoryEnum';
export * from './company';
export * from './countryEnum';
export * from './dataPassthroughRequest';
export * from './debugModeLog';
export * from './debugModelLogSummary';
export * from './deduction';
export * from './earning';
export * from './earningTypeEnum';
export * from './employee';
export * from './employeeEndpointRequest';
export * from './employeePayrollRun';
export * from './employeeRequest';
export * from './employeeResponse';
export * from './employment';
export * from './employmentStatusEnum';
export * from './employmentTypeEnum';
export * from './encodingEnum';
export * from './endUserDetailsRequest';
export * from './errorValidationProblem';
export * from './ethnicityEnum';
export * from './flsaStatusEnum';
export * from './genderEnum';
export * from './generateRemoteKeyRequest';
export * from './group';
export * from './groupTypeEnum';
export * from './ignoreCommonModel';
export * from './ignoreCommonModelRequest';
export * from './issue';
export * from './issueStatusEnum';
export * from './linkToken';
export * from './linkedAccountStatus';
export * from './location';
export * from './locationTypeEnum';
export * from './maritalStatusEnum';
export * from './metaResponse';
export * from './methodEnum';
export * from './modelOperation';
export * from './multipartFormFieldRequest';
export * from './paginatedAccountDetailsAndActionsList';
export * from './paginatedBankInfoList';
export * from './paginatedBenefitList';
export * from './paginatedCompanyList';
export * from './paginatedDeductionList';
export * from './paginatedEmployeeList';
export * from './paginatedEmployeePayrollRunList';
export * from './paginatedEmploymentList';
export * from './paginatedGroupList';
export * from './paginatedIssueList';
export * from './paginatedLocationList';
export * from './paginatedPayGroupList';
export * from './paginatedPayrollRunList';
export * from './paginatedSyncStatusList';
export * from './paginatedTeamList';
export * from './paginatedTimeOffBalanceList';
export * from './paginatedTimeOffList';
export * from './payCurrencyEnum';
export * from './payFrequencyEnum';
export * from './payGroup';
export * from './payPeriodEnum';
export * from './payrollRun';
export * from './policyTypeEnum';
export * from './reasonEnum';
export * from './remoteData';
export * from './remoteDataRequest';
export * from './remoteKey';
export * from './remoteKeyForRegenerationRequest';
export * from './remoteResponse';
export * from './requestFormatEnum';
export * from './requestTypeEnum';
export * from './runStateEnum';
export * from './runTypeEnum';
export * from './syncStatus';
export * from './syncStatusStatusEnum';
export * from './tax';
export * from './team';
export * from './timeOff';
export * from './timeOffBalance';
export * from './timeOffEndpointRequest';
export * from './timeOffRequest';
export * from './timeOffResponse';
export * from './timeOffStatusEnum';
export * from './unitsEnum';
export * from './validationProblemSource';
export * from './warningValidationProblem';
export * from './webhookReceiver';
export * from './webhookReceiverRequest';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AccountDetails } from './accountDetails';
import { AccountDetailsAndActions } from './accountDetailsAndActions';
import { AccountDetailsAndActionsIntegration } from './accountDetailsAndActionsIntegration';
import { AccountDetailsAndActionsStatusEnum, AccountDetailsAndActionsStatusEnumExpected } from './accountDetailsAndActionsStatusEnum';
import { AccountIntegration } from './accountIntegration';
import { AccountToken } from './accountToken';
import { AccountTypeEnum, AccountTypeEnumExpected } from './accountTypeEnum';
import { AvailableActions } from './availableActions';
import { BankInfo } from './bankInfo';
import { Benefit } from './benefit';
import { CategoriesEnum, CategoriesEnumExpected } from './categoriesEnum';
import { CategoryEnum, CategoryEnumExpected } from './categoryEnum';
import { Company } from './company';
import { CountryEnum, CountryEnumExpected } from './countryEnum';
import { DataPassthroughRequest } from './dataPassthroughRequest';
import { DebugModeLog } from './debugModeLog';
import { DebugModelLogSummary } from './debugModelLogSummary';
import { Deduction } from './deduction';
import { Earning } from './earning';
import { EarningTypeEnum, EarningTypeEnumExpected } from './earningTypeEnum';
import { Employee } from './employee';
import { EmployeeEndpointRequest } from './employeeEndpointRequest';
import { EmployeePayrollRun } from './employeePayrollRun';
import { EmployeeRequest } from './employeeRequest';
import { EmployeeResponse } from './employeeResponse';
import { Employment } from './employment';
import { EmploymentStatusEnum, EmploymentStatusEnumExpected } from './employmentStatusEnum';
import { EmploymentTypeEnum, EmploymentTypeEnumExpected } from './employmentTypeEnum';
import { EncodingEnum, EncodingEnumExpected } from './encodingEnum';
import { EndUserDetailsRequest } from './endUserDetailsRequest';
import { ErrorValidationProblem } from './errorValidationProblem';
import { EthnicityEnum, EthnicityEnumExpected } from './ethnicityEnum';
import { FlsaStatusEnum, FlsaStatusEnumExpected } from './flsaStatusEnum';
import { GenderEnum, GenderEnumExpected } from './genderEnum';
import { GenerateRemoteKeyRequest } from './generateRemoteKeyRequest';
import { Group } from './group';
import { GroupTypeEnum, GroupTypeEnumExpected } from './groupTypeEnum';
import { IgnoreCommonModel } from './ignoreCommonModel';
import { IgnoreCommonModelRequest } from './ignoreCommonModelRequest';
import { Issue } from './issue';
import { IssueStatusEnum, IssueStatusEnumExpected } from './issueStatusEnum';
import { LinkToken } from './linkToken';
import { LinkedAccountStatus } from './linkedAccountStatus';
import { Location } from './location';
import { LocationTypeEnum, LocationTypeEnumExpected } from './locationTypeEnum';
import { MaritalStatusEnum, MaritalStatusEnumExpected } from './maritalStatusEnum';
import { MetaResponse } from './metaResponse';
import { MethodEnum, MethodEnumExpected } from './methodEnum';
import { ModelOperation } from './modelOperation';
import { MultipartFormFieldRequest } from './multipartFormFieldRequest';
import { PaginatedAccountDetailsAndActionsList } from './paginatedAccountDetailsAndActionsList';
import { PaginatedBankInfoList } from './paginatedBankInfoList';
import { PaginatedBenefitList } from './paginatedBenefitList';
import { PaginatedCompanyList } from './paginatedCompanyList';
import { PaginatedDeductionList } from './paginatedDeductionList';
import { PaginatedEmployeeList } from './paginatedEmployeeList';
import { PaginatedEmployeePayrollRunList } from './paginatedEmployeePayrollRunList';
import { PaginatedEmploymentList } from './paginatedEmploymentList';
import { PaginatedGroupList } from './paginatedGroupList';
import { PaginatedIssueList } from './paginatedIssueList';
import { PaginatedLocationList } from './paginatedLocationList';
import { PaginatedPayGroupList } from './paginatedPayGroupList';
import { PaginatedPayrollRunList } from './paginatedPayrollRunList';
import { PaginatedSyncStatusList } from './paginatedSyncStatusList';
import { PaginatedTeamList } from './paginatedTeamList';
import { PaginatedTimeOffBalanceList } from './paginatedTimeOffBalanceList';
import { PaginatedTimeOffList } from './paginatedTimeOffList';
import { PayCurrencyEnum, PayCurrencyEnumExpected } from './payCurrencyEnum';
import { PayFrequencyEnum, PayFrequencyEnumExpected } from './payFrequencyEnum';
import { PayGroup } from './payGroup';
import { PayPeriodEnum, PayPeriodEnumExpected } from './payPeriodEnum';
import { PayrollRun } from './payrollRun';
import { PolicyTypeEnum, PolicyTypeEnumExpected } from './policyTypeEnum';
import { ReasonEnum, ReasonEnumExpected } from './reasonEnum';
import { RemoteData } from './remoteData';
import { RemoteDataRequest } from './remoteDataRequest';
import { RemoteKey } from './remoteKey';
import { RemoteKeyForRegenerationRequest } from './remoteKeyForRegenerationRequest';
import { RemoteResponse } from './remoteResponse';
import { RequestFormatEnum, RequestFormatEnumExpected } from './requestFormatEnum';
import { RequestTypeEnum, RequestTypeEnumExpected } from './requestTypeEnum';
import { RunStateEnum, RunStateEnumExpected } from './runStateEnum';
import { RunTypeEnum, RunTypeEnumExpected } from './runTypeEnum';
import { SyncStatus } from './syncStatus';
import { SyncStatusStatusEnum, SyncStatusStatusEnumExpected } from './syncStatusStatusEnum';
import { Tax } from './tax';
import { Team } from './team';
import { TimeOff } from './timeOff';
import { TimeOffBalance } from './timeOffBalance';
import { TimeOffEndpointRequest } from './timeOffEndpointRequest';
import { TimeOffRequest } from './timeOffRequest';
import { TimeOffResponse } from './timeOffResponse';
import { TimeOffStatusEnum, TimeOffStatusEnumExpected } from './timeOffStatusEnum';
import { UnitsEnum, UnitsEnumExpected } from './unitsEnum';
import { ValidationProblemSource } from './validationProblemSource';
import { WarningValidationProblem } from './warningValidationProblem';
import { WebhookReceiver } from './webhookReceiver';
import { WebhookReceiverRequest } from './webhookReceiverRequest';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AccountDetailsAndActionsStatusEnum": AccountDetailsAndActionsStatusEnumExpected,
        "AccountTypeEnum": AccountTypeEnumExpected,
        "CategoriesEnum": CategoriesEnumExpected,
        "CategoryEnum": CategoryEnumExpected,
        "CountryEnum": CountryEnumExpected,
        "EarningTypeEnum": EarningTypeEnumExpected,
        "EmploymentStatusEnum": EmploymentStatusEnumExpected,
        "EmploymentTypeEnum": EmploymentTypeEnumExpected,
        "EncodingEnum": EncodingEnumExpected,
        "EthnicityEnum": EthnicityEnumExpected,
        "FlsaStatusEnum": FlsaStatusEnumExpected,
        "GenderEnum": GenderEnumExpected,
        "GroupTypeEnum": GroupTypeEnumExpected,
        "IssueStatusEnum": IssueStatusEnumExpected,
        "LocationTypeEnum": LocationTypeEnumExpected,
        "MaritalStatusEnum": MaritalStatusEnumExpected,
        "MethodEnum": MethodEnumExpected,
        "PayCurrencyEnum": PayCurrencyEnumExpected,
        "PayFrequencyEnum": PayFrequencyEnumExpected,
        "PayPeriodEnum": PayPeriodEnumExpected,
        "PolicyTypeEnum": PolicyTypeEnumExpected,
        "ReasonEnum": ReasonEnumExpected,
        "RequestFormatEnum": RequestFormatEnumExpected,
        "RequestTypeEnum": RequestTypeEnumExpected,
        "RunStateEnum": RunStateEnumExpected,
        "RunTypeEnum": RunTypeEnumExpected,
        "SyncStatusStatusEnum": SyncStatusStatusEnumExpected,
        "TimeOffStatusEnum": TimeOffStatusEnumExpected,
        "UnitsEnum": UnitsEnumExpected,
}

let typeMap: {[index: string]: any} = {
    "AccountDetails": AccountDetails,
    "AccountDetailsAndActions": AccountDetailsAndActions,
    "AccountDetailsAndActionsIntegration": AccountDetailsAndActionsIntegration,
    "AccountIntegration": AccountIntegration,
    "AccountToken": AccountToken,
    "AvailableActions": AvailableActions,
    "BankInfo": BankInfo,
    "Benefit": Benefit,
    "Company": Company,
    "DataPassthroughRequest": DataPassthroughRequest,
    "DebugModeLog": DebugModeLog,
    "DebugModelLogSummary": DebugModelLogSummary,
    "Deduction": Deduction,
    "Earning": Earning,
    "Employee": Employee,
    "EmployeeEndpointRequest": EmployeeEndpointRequest,
    "EmployeePayrollRun": EmployeePayrollRun,
    "EmployeeRequest": EmployeeRequest,
    "EmployeeResponse": EmployeeResponse,
    "Employment": Employment,
    "EndUserDetailsRequest": EndUserDetailsRequest,
    "ErrorValidationProblem": ErrorValidationProblem,
    "GenerateRemoteKeyRequest": GenerateRemoteKeyRequest,
    "Group": Group,
    "IgnoreCommonModel": IgnoreCommonModel,
    "IgnoreCommonModelRequest": IgnoreCommonModelRequest,
    "Issue": Issue,
    "LinkToken": LinkToken,
    "LinkedAccountStatus": LinkedAccountStatus,
    "Location": Location,
    "MetaResponse": MetaResponse,
    "ModelOperation": ModelOperation,
    "MultipartFormFieldRequest": MultipartFormFieldRequest,
    "PaginatedAccountDetailsAndActionsList": PaginatedAccountDetailsAndActionsList,
    "PaginatedBankInfoList": PaginatedBankInfoList,
    "PaginatedBenefitList": PaginatedBenefitList,
    "PaginatedCompanyList": PaginatedCompanyList,
    "PaginatedDeductionList": PaginatedDeductionList,
    "PaginatedEmployeeList": PaginatedEmployeeList,
    "PaginatedEmployeePayrollRunList": PaginatedEmployeePayrollRunList,
    "PaginatedEmploymentList": PaginatedEmploymentList,
    "PaginatedGroupList": PaginatedGroupList,
    "PaginatedIssueList": PaginatedIssueList,
    "PaginatedLocationList": PaginatedLocationList,
    "PaginatedPayGroupList": PaginatedPayGroupList,
    "PaginatedPayrollRunList": PaginatedPayrollRunList,
    "PaginatedSyncStatusList": PaginatedSyncStatusList,
    "PaginatedTeamList": PaginatedTeamList,
    "PaginatedTimeOffBalanceList": PaginatedTimeOffBalanceList,
    "PaginatedTimeOffList": PaginatedTimeOffList,
    "PayGroup": PayGroup,
    "PayrollRun": PayrollRun,
    "RemoteData": RemoteData,
    "RemoteDataRequest": RemoteDataRequest,
    "RemoteKey": RemoteKey,
    "RemoteKeyForRegenerationRequest": RemoteKeyForRegenerationRequest,
    "RemoteResponse": RemoteResponse,
    "SyncStatus": SyncStatus,
    "Tax": Tax,
    "Team": Team,
    "TimeOff": TimeOff,
    "TimeOffBalance": TimeOffBalance,
    "TimeOffEndpointRequest": TimeOffEndpointRequest,
    "TimeOffRequest": TimeOffRequest,
    "TimeOffResponse": TimeOffResponse,
    "ValidationProblemSource": ValidationProblemSource,
    "WarningValidationProblem": WarningValidationProblem,
    "WebhookReceiver": WebhookReceiver,
    "WebhookReceiverRequest": WebhookReceiverRequest,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
