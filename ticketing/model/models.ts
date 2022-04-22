import localVarRequest from 'request';

export * from './account';
export * from './accountDetails';
export * from './accountDetailsAndActions';
export * from './accountDetailsAndActionsIntegration';
export * from './accountDetailsAndActionsStatusEnum';
export * from './accountIntegration';
export * from './accountToken';
export * from './attachment';
export * from './attachmentRequest';
export * from './availableActions';
export * from './categoriesEnum';
export * from './categoryEnum';
export * from './comment';
export * from './commentEndpointRequest';
export * from './commentRequest';
export * from './commentResponse';
export * from './contact';
export * from './dataPassthroughRequest';
export * from './debugModeLog';
export * from './debugModelLogSummary';
export * from './encodingEnum';
export * from './endUserDetailsRequest';
export * from './errorValidationProblem';
export * from './generateRemoteKeyRequest';
export * from './issue';
export * from './issueStatusEnum';
export * from './linkToken';
export * from './linkedAccountStatus';
export * from './metaResponse';
export * from './methodEnum';
export * from './modelOperation';
export * from './multipartFormFieldRequest';
export * from './paginatedAccountDetailsAndActionsList';
export * from './paginatedAccountList';
export * from './paginatedAttachmentList';
export * from './paginatedCommentList';
export * from './paginatedContactList';
export * from './paginatedIssueList';
export * from './paginatedProjectList';
export * from './paginatedSyncStatusList';
export * from './paginatedTagList';
export * from './paginatedTeamList';
export * from './paginatedTicketList';
export * from './paginatedUserList';
export * from './project';
export * from './remoteData';
export * from './remoteDataRequest';
export * from './remoteKey';
export * from './remoteKeyForRegenerationRequest';
export * from './remoteResponse';
export * from './requestFormatEnum';
export * from './syncStatus';
export * from './syncStatusStatusEnum';
export * from './tag';
export * from './team';
export * from './ticket';
export * from './ticketEndpointRequest';
export * from './ticketRequest';
export * from './ticketResponse';
export * from './ticketStatusEnum';
export * from './ticketingAttachmentEndpointRequest';
export * from './ticketingAttachmentResponse';
export * from './user';
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
import { AccountToken } from './accountToken';
import { Attachment } from './attachment';
import { AttachmentRequest } from './attachmentRequest';
import { AvailableActions } from './availableActions';
import { CategoriesEnum, CategoriesEnumExpected } from './categoriesEnum';
import { CategoryEnum, CategoryEnumExpected } from './categoryEnum';
import { Comment } from './comment';
import { CommentEndpointRequest } from './commentEndpointRequest';
import { CommentRequest } from './commentRequest';
import { CommentResponse } from './commentResponse';
import { Contact } from './contact';
import { DataPassthroughRequest } from './dataPassthroughRequest';
import { DebugModeLog } from './debugModeLog';
import { DebugModelLogSummary } from './debugModelLogSummary';
import { EncodingEnum, EncodingEnumExpected } from './encodingEnum';
import { EndUserDetailsRequest } from './endUserDetailsRequest';
import { ErrorValidationProblem } from './errorValidationProblem';
import { GenerateRemoteKeyRequest } from './generateRemoteKeyRequest';
import { Issue } from './issue';
import { IssueStatusEnum, IssueStatusEnumExpected } from './issueStatusEnum';
import { LinkToken } from './linkToken';
import { LinkedAccountStatus } from './linkedAccountStatus';
import { MetaResponse } from './metaResponse';
import { MethodEnum, MethodEnumExpected } from './methodEnum';
import { ModelOperation } from './modelOperation';
import { MultipartFormFieldRequest } from './multipartFormFieldRequest';
import { PaginatedAccountDetailsAndActionsList } from './paginatedAccountDetailsAndActionsList';
import { PaginatedAccountList } from './paginatedAccountList';
import { PaginatedAttachmentList } from './paginatedAttachmentList';
import { PaginatedCommentList } from './paginatedCommentList';
import { PaginatedContactList } from './paginatedContactList';
import { PaginatedIssueList } from './paginatedIssueList';
import { PaginatedProjectList } from './paginatedProjectList';
import { PaginatedSyncStatusList } from './paginatedSyncStatusList';
import { PaginatedTagList } from './paginatedTagList';
import { PaginatedTeamList } from './paginatedTeamList';
import { PaginatedTicketList } from './paginatedTicketList';
import { PaginatedUserList } from './paginatedUserList';
import { Project } from './project';
import { RemoteData } from './remoteData';
import { RemoteDataRequest } from './remoteDataRequest';
import { RemoteKey } from './remoteKey';
import { RemoteKeyForRegenerationRequest } from './remoteKeyForRegenerationRequest';
import { RemoteResponse } from './remoteResponse';
import { RequestFormatEnum, RequestFormatEnumExpected } from './requestFormatEnum';
import { SyncStatus } from './syncStatus';
import { SyncStatusStatusEnum, SyncStatusStatusEnumExpected } from './syncStatusStatusEnum';
import { Tag } from './tag';
import { Team } from './team';
import { Ticket } from './ticket';
import { TicketEndpointRequest } from './ticketEndpointRequest';
import { TicketRequest } from './ticketRequest';
import { TicketResponse } from './ticketResponse';
import { TicketStatusEnum, TicketStatusEnumExpected } from './ticketStatusEnum';
import { TicketingAttachmentEndpointRequest } from './ticketingAttachmentEndpointRequest';
import { TicketingAttachmentResponse } from './ticketingAttachmentResponse';
import { User } from './user';
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
        "CategoriesEnum": CategoriesEnumExpected,
        "CategoryEnum": CategoryEnumExpected,
        "EncodingEnum": EncodingEnumExpected,
        "IssueStatusEnum": IssueStatusEnumExpected,
        "MethodEnum": MethodEnumExpected,
        "RequestFormatEnum": RequestFormatEnumExpected,
        "SyncStatusStatusEnum": SyncStatusStatusEnumExpected,
        "TicketStatusEnum": TicketStatusEnumExpected,
}

let typeMap: {[index: string]: any} = {
    "Account": Account,
    "AccountDetails": AccountDetails,
    "AccountDetailsAndActions": AccountDetailsAndActions,
    "AccountDetailsAndActionsIntegration": AccountDetailsAndActionsIntegration,
    "AccountIntegration": AccountIntegration,
    "AccountToken": AccountToken,
    "Attachment": Attachment,
    "AttachmentRequest": AttachmentRequest,
    "AvailableActions": AvailableActions,
    "Comment": Comment,
    "CommentEndpointRequest": CommentEndpointRequest,
    "CommentRequest": CommentRequest,
    "CommentResponse": CommentResponse,
    "Contact": Contact,
    "DataPassthroughRequest": DataPassthroughRequest,
    "DebugModeLog": DebugModeLog,
    "DebugModelLogSummary": DebugModelLogSummary,
    "EndUserDetailsRequest": EndUserDetailsRequest,
    "ErrorValidationProblem": ErrorValidationProblem,
    "GenerateRemoteKeyRequest": GenerateRemoteKeyRequest,
    "Issue": Issue,
    "LinkToken": LinkToken,
    "LinkedAccountStatus": LinkedAccountStatus,
    "MetaResponse": MetaResponse,
    "ModelOperation": ModelOperation,
    "MultipartFormFieldRequest": MultipartFormFieldRequest,
    "PaginatedAccountDetailsAndActionsList": PaginatedAccountDetailsAndActionsList,
    "PaginatedAccountList": PaginatedAccountList,
    "PaginatedAttachmentList": PaginatedAttachmentList,
    "PaginatedCommentList": PaginatedCommentList,
    "PaginatedContactList": PaginatedContactList,
    "PaginatedIssueList": PaginatedIssueList,
    "PaginatedProjectList": PaginatedProjectList,
    "PaginatedSyncStatusList": PaginatedSyncStatusList,
    "PaginatedTagList": PaginatedTagList,
    "PaginatedTeamList": PaginatedTeamList,
    "PaginatedTicketList": PaginatedTicketList,
    "PaginatedUserList": PaginatedUserList,
    "Project": Project,
    "RemoteData": RemoteData,
    "RemoteDataRequest": RemoteDataRequest,
    "RemoteKey": RemoteKey,
    "RemoteKeyForRegenerationRequest": RemoteKeyForRegenerationRequest,
    "RemoteResponse": RemoteResponse,
    "SyncStatus": SyncStatus,
    "Tag": Tag,
    "Team": Team,
    "Ticket": Ticket,
    "TicketEndpointRequest": TicketEndpointRequest,
    "TicketRequest": TicketRequest,
    "TicketResponse": TicketResponse,
    "TicketingAttachmentEndpointRequest": TicketingAttachmentEndpointRequest,
    "TicketingAttachmentResponse": TicketingAttachmentResponse,
    "User": User,
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
