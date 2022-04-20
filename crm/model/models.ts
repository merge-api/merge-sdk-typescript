import localVarRequest from 'request';

export * from './account';
export * from './accountDetails';
export * from './accountDetailsAndActions';
export * from './accountDetailsAndActionsIntegration';
export * from './accountDetailsAndActionsStatusEnum';
export * from './accountIntegration';
export * from './accountRequest';
export * from './accountToken';
export * from './address';
export * from './addressRequest';
export * from './addressTypeEnum';
export * from './availableActions';
export * from './cRMAccountEndpointRequest';
export * from './cRMAccountResponse';
export * from './cRMContactEndpointRequest';
export * from './cRMContactResponse';
export * from './categories143Enum';
export * from './categories3d0Enum';
export * from './category143Enum';
export * from './category3d0Enum';
export * from './contact';
export * from './contactRequest';
export * from './countryEnum';
export * from './dataPassthroughRequest';
export * from './debugModeLog';
export * from './debugModelLogSummary';
export * from './emailAddress';
export * from './emailAddressRequest';
export * from './encodingEnum';
export * from './endUserDetailsRequest';
export * from './errorValidationProblem';
export * from './generateRemoteKeyRequest';
export * from './issue';
export * from './issueStatusEnum';
export * from './lead';
export * from './leadEndpointRequest';
export * from './leadRequest';
export * from './leadResponse';
export * from './linkToken';
export * from './linkedAccountStatus';
export * from './metaResponse';
export * from './methodEnum';
export * from './modelOperation';
export * from './multipartFormFieldRequest';
export * from './note';
export * from './noteEndpointRequest';
export * from './noteRequest';
export * from './noteResponse';
export * from './opportunity';
export * from './opportunityEndpointRequest';
export * from './opportunityRequest';
export * from './opportunityResponse';
export * from './paginatedAccountDetailsAndActionsList';
export * from './paginatedAccountList';
export * from './paginatedContactList';
export * from './paginatedIssueList';
export * from './paginatedLeadList';
export * from './paginatedNoteList';
export * from './paginatedOpportunityList';
export * from './paginatedStageList';
export * from './paginatedSyncStatusList';
export * from './paginatedTaskList';
export * from './phoneNumber';
export * from './phoneNumberRequest';
export * from './remoteData';
export * from './remoteDataRequest';
export * from './remoteKey';
export * from './remoteKeyForRegenerationRequest';
export * from './remoteResponse';
export * from './requestFormatEnum';
export * from './stage';
export * from './syncStatus';
export * from './syncStatusStatusEnum';
export * from './task';
export * from './taskEndpointRequest';
export * from './taskRequest';
export * from './taskResponse';
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


import { Account } from './account';
import { AccountDetails } from './accountDetails';
import { AccountDetailsAndActions } from './accountDetailsAndActions';
import { AccountDetailsAndActionsIntegration } from './accountDetailsAndActionsIntegration';
import { AccountDetailsAndActionsStatusEnum, AccountDetailsAndActionsStatusEnumExpected } from './accountDetailsAndActionsStatusEnum';
import { AccountIntegration } from './accountIntegration';
import { AccountRequest } from './accountRequest';
import { AccountToken } from './accountToken';
import { Address } from './address';
import { AddressRequest } from './addressRequest';
import { AddressTypeEnum, AddressTypeEnumExpected } from './addressTypeEnum';
import { AvailableActions } from './availableActions';
import { CRMAccountEndpointRequest } from './cRMAccountEndpointRequest';
import { CRMAccountResponse } from './cRMAccountResponse';
import { CRMContactEndpointRequest } from './cRMContactEndpointRequest';
import { CRMContactResponse } from './cRMContactResponse';
import { Categories143Enum, Categories143EnumExpected } from './categories143Enum';
import { Categories3d0Enum, Categories3d0EnumExpected } from './categories3d0Enum';
import { Category143Enum, Category143EnumExpected } from './category143Enum';
import { Category3d0Enum, Category3d0EnumExpected } from './category3d0Enum';
import { Contact } from './contact';
import { ContactRequest } from './contactRequest';
import { CountryEnum, CountryEnumExpected } from './countryEnum';
import { DataPassthroughRequest } from './dataPassthroughRequest';
import { DebugModeLog } from './debugModeLog';
import { DebugModelLogSummary } from './debugModelLogSummary';
import { EmailAddress } from './emailAddress';
import { EmailAddressRequest } from './emailAddressRequest';
import { EncodingEnum, EncodingEnumExpected } from './encodingEnum';
import { EndUserDetailsRequest } from './endUserDetailsRequest';
import { ErrorValidationProblem } from './errorValidationProblem';
import { GenerateRemoteKeyRequest } from './generateRemoteKeyRequest';
import { Issue } from './issue';
import { IssueStatusEnum, IssueStatusEnumExpected } from './issueStatusEnum';
import { Lead } from './lead';
import { LeadEndpointRequest } from './leadEndpointRequest';
import { LeadRequest } from './leadRequest';
import { LeadResponse } from './leadResponse';
import { LinkToken } from './linkToken';
import { LinkedAccountStatus } from './linkedAccountStatus';
import { MetaResponse } from './metaResponse';
import { MethodEnum, MethodEnumExpected } from './methodEnum';
import { ModelOperation } from './modelOperation';
import { MultipartFormFieldRequest } from './multipartFormFieldRequest';
import { Note } from './note';
import { NoteEndpointRequest } from './noteEndpointRequest';
import { NoteRequest } from './noteRequest';
import { NoteResponse } from './noteResponse';
import { Opportunity } from './opportunity';
import { OpportunityEndpointRequest } from './opportunityEndpointRequest';
import { OpportunityRequest } from './opportunityRequest';
import { OpportunityResponse } from './opportunityResponse';
import { PaginatedAccountDetailsAndActionsList } from './paginatedAccountDetailsAndActionsList';
import { PaginatedAccountList } from './paginatedAccountList';
import { PaginatedContactList } from './paginatedContactList';
import { PaginatedIssueList } from './paginatedIssueList';
import { PaginatedLeadList } from './paginatedLeadList';
import { PaginatedNoteList } from './paginatedNoteList';
import { PaginatedOpportunityList } from './paginatedOpportunityList';
import { PaginatedStageList } from './paginatedStageList';
import { PaginatedSyncStatusList } from './paginatedSyncStatusList';
import { PaginatedTaskList } from './paginatedTaskList';
import { PhoneNumber } from './phoneNumber';
import { PhoneNumberRequest } from './phoneNumberRequest';
import { RemoteData } from './remoteData';
import { RemoteDataRequest } from './remoteDataRequest';
import { RemoteKey } from './remoteKey';
import { RemoteKeyForRegenerationRequest } from './remoteKeyForRegenerationRequest';
import { RemoteResponse } from './remoteResponse';
import { RequestFormatEnum, RequestFormatEnumExpected } from './requestFormatEnum';
import { Stage } from './stage';
import { SyncStatus } from './syncStatus';
import { SyncStatusStatusEnum, SyncStatusStatusEnumExpected } from './syncStatusStatusEnum';
import { Task } from './task';
import { TaskEndpointRequest } from './taskEndpointRequest';
import { TaskRequest } from './taskRequest';
import { TaskResponse } from './taskResponse';
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
        "AddressTypeEnum": AddressTypeEnumExpected,
        "Categories143Enum": Categories143EnumExpected,
        "Categories3d0Enum": Categories3d0EnumExpected,
        "Category143Enum": Category143EnumExpected,
        "Category3d0Enum": Category3d0EnumExpected,
        "CountryEnum": CountryEnumExpected,
        "EncodingEnum": EncodingEnumExpected,
        "IssueStatusEnum": IssueStatusEnumExpected,
        "MethodEnum": MethodEnumExpected,
        "RequestFormatEnum": RequestFormatEnumExpected,
        "SyncStatusStatusEnum": SyncStatusStatusEnumExpected,
}

let typeMap: {[index: string]: any} = {
    "Account": Account,
    "AccountDetails": AccountDetails,
    "AccountDetailsAndActions": AccountDetailsAndActions,
    "AccountDetailsAndActionsIntegration": AccountDetailsAndActionsIntegration,
    "AccountIntegration": AccountIntegration,
    "AccountRequest": AccountRequest,
    "AccountToken": AccountToken,
    "Address": Address,
    "AddressRequest": AddressRequest,
    "AvailableActions": AvailableActions,
    "CRMAccountEndpointRequest": CRMAccountEndpointRequest,
    "CRMAccountResponse": CRMAccountResponse,
    "CRMContactEndpointRequest": CRMContactEndpointRequest,
    "CRMContactResponse": CRMContactResponse,
    "Contact": Contact,
    "ContactRequest": ContactRequest,
    "DataPassthroughRequest": DataPassthroughRequest,
    "DebugModeLog": DebugModeLog,
    "DebugModelLogSummary": DebugModelLogSummary,
    "EmailAddress": EmailAddress,
    "EmailAddressRequest": EmailAddressRequest,
    "EndUserDetailsRequest": EndUserDetailsRequest,
    "ErrorValidationProblem": ErrorValidationProblem,
    "GenerateRemoteKeyRequest": GenerateRemoteKeyRequest,
    "Issue": Issue,
    "Lead": Lead,
    "LeadEndpointRequest": LeadEndpointRequest,
    "LeadRequest": LeadRequest,
    "LeadResponse": LeadResponse,
    "LinkToken": LinkToken,
    "LinkedAccountStatus": LinkedAccountStatus,
    "MetaResponse": MetaResponse,
    "ModelOperation": ModelOperation,
    "MultipartFormFieldRequest": MultipartFormFieldRequest,
    "Note": Note,
    "NoteEndpointRequest": NoteEndpointRequest,
    "NoteRequest": NoteRequest,
    "NoteResponse": NoteResponse,
    "Opportunity": Opportunity,
    "OpportunityEndpointRequest": OpportunityEndpointRequest,
    "OpportunityRequest": OpportunityRequest,
    "OpportunityResponse": OpportunityResponse,
    "PaginatedAccountDetailsAndActionsList": PaginatedAccountDetailsAndActionsList,
    "PaginatedAccountList": PaginatedAccountList,
    "PaginatedContactList": PaginatedContactList,
    "PaginatedIssueList": PaginatedIssueList,
    "PaginatedLeadList": PaginatedLeadList,
    "PaginatedNoteList": PaginatedNoteList,
    "PaginatedOpportunityList": PaginatedOpportunityList,
    "PaginatedStageList": PaginatedStageList,
    "PaginatedSyncStatusList": PaginatedSyncStatusList,
    "PaginatedTaskList": PaginatedTaskList,
    "PhoneNumber": PhoneNumber,
    "PhoneNumberRequest": PhoneNumberRequest,
    "RemoteData": RemoteData,
    "RemoteDataRequest": RemoteDataRequest,
    "RemoteKey": RemoteKey,
    "RemoteKeyForRegenerationRequest": RemoteKeyForRegenerationRequest,
    "RemoteResponse": RemoteResponse,
    "Stage": Stage,
    "SyncStatus": SyncStatus,
    "Task": Task,
    "TaskEndpointRequest": TaskEndpointRequest,
    "TaskRequest": TaskRequest,
    "TaskResponse": TaskResponse,
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
