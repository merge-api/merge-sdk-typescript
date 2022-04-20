import localVarRequest from 'request';

export * from './accessRoleEnum';
export * from './accountDetails';
export * from './accountDetailsAndActions';
export * from './accountDetailsAndActionsIntegration';
export * from './accountDetailsAndActionsStatusEnum';
export * from './accountIntegration';
export * from './accountToken';
export * from './activity';
export * from './activityTypeEnum';
export * from './application';
export * from './applicationEndpointRequest';
export * from './applicationRequest';
export * from './applicationResponse';
export * from './attachment';
export * from './attachmentEndpointRequest';
export * from './attachmentRequest';
export * from './attachmentResponse';
export * from './attachmentTypeEnum';
export * from './availableActions';
export * from './candidate';
export * from './candidateEndpointRequest';
export * from './candidateRequest';
export * from './candidateResponse';
export * from './categories143Enum';
export * from './categories3d0Enum';
export * from './category143Enum';
export * from './category3d0Enum';
export * from './dataPassthroughRequest';
export * from './debugModeLog';
export * from './debugModelLogSummary';
export * from './department';
export * from './disabilityStatusEnum';
export * from './eEOC';
export * from './emailAddress';
export * from './emailAddressRequest';
export * from './emailAddressTypeEnum';
export * from './encodingEnum';
export * from './endUserDetailsRequest';
export * from './errorValidationProblem';
export * from './genderEnum';
export * from './generateRemoteKeyRequest';
export * from './ignoreCommonModel';
export * from './ignoreCommonModelRequest';
export * from './issue';
export * from './issueStatusEnum';
export * from './job';
export * from './jobInterviewStage';
export * from './jobStatusEnum';
export * from './linkToken';
export * from './linkedAccountStatus';
export * from './metaResponse';
export * from './methodEnum';
export * from './modelOperation';
export * from './multipartFormFieldRequest';
export * from './offer';
export * from './offerStatusEnum';
export * from './office';
export * from './overallRecommendationEnum';
export * from './paginatedAccountDetailsAndActionsList';
export * from './paginatedActivityList';
export * from './paginatedApplicationList';
export * from './paginatedAttachmentList';
export * from './paginatedCandidateList';
export * from './paginatedDepartmentList';
export * from './paginatedEEOCList';
export * from './paginatedIssueList';
export * from './paginatedJobInterviewStageList';
export * from './paginatedJobList';
export * from './paginatedOfferList';
export * from './paginatedOfficeList';
export * from './paginatedRejectReasonList';
export * from './paginatedRemoteUserList';
export * from './paginatedScheduledInterviewList';
export * from './paginatedScorecardList';
export * from './paginatedSyncStatusList';
export * from './paginatedTagList';
export * from './phoneNumber';
export * from './phoneNumberRequest';
export * from './phoneNumberTypeEnum';
export * from './raceEnum';
export * from './reasonEnum';
export * from './rejectReason';
export * from './remoteData';
export * from './remoteDataRequest';
export * from './remoteKey';
export * from './remoteKeyForRegenerationRequest';
export * from './remoteResponse';
export * from './remoteUser';
export * from './requestFormatEnum';
export * from './scheduledInterview';
export * from './scheduledInterviewStatusEnum';
export * from './scorecard';
export * from './syncStatus';
export * from './syncStatusStatusEnum';
export * from './tag';
export * from './url';
export * from './urlRequest';
export * from './urlTypeEnum';
export * from './validationProblemSource';
export * from './veteranStatusEnum';
export * from './visibilityEnum';
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


import { AccessRoleEnum, AccessRoleEnumExpected } from './accessRoleEnum';
import { AccountDetails } from './accountDetails';
import { AccountDetailsAndActions } from './accountDetailsAndActions';
import { AccountDetailsAndActionsIntegration } from './accountDetailsAndActionsIntegration';
import { AccountDetailsAndActionsStatusEnum, AccountDetailsAndActionsStatusEnumExpected } from './accountDetailsAndActionsStatusEnum';
import { AccountIntegration } from './accountIntegration';
import { AccountToken } from './accountToken';
import { Activity } from './activity';
import { ActivityTypeEnum, ActivityTypeEnumExpected } from './activityTypeEnum';
import { Application } from './application';
import { ApplicationEndpointRequest } from './applicationEndpointRequest';
import { ApplicationRequest } from './applicationRequest';
import { ApplicationResponse } from './applicationResponse';
import { Attachment } from './attachment';
import { AttachmentEndpointRequest } from './attachmentEndpointRequest';
import { AttachmentRequest } from './attachmentRequest';
import { AttachmentResponse } from './attachmentResponse';
import { AttachmentTypeEnum, AttachmentTypeEnumExpected } from './attachmentTypeEnum';
import { AvailableActions } from './availableActions';
import { Candidate } from './candidate';
import { CandidateEndpointRequest } from './candidateEndpointRequest';
import { CandidateRequest } from './candidateRequest';
import { CandidateResponse } from './candidateResponse';
import { Categories143Enum, Categories143EnumExpected } from './categories143Enum';
import { Categories3d0Enum, Categories3d0EnumExpected } from './categories3d0Enum';
import { Category143Enum, Category143EnumExpected } from './category143Enum';
import { Category3d0Enum, Category3d0EnumExpected } from './category3d0Enum';
import { DataPassthroughRequest } from './dataPassthroughRequest';
import { DebugModeLog } from './debugModeLog';
import { DebugModelLogSummary } from './debugModelLogSummary';
import { Department } from './department';
import { DisabilityStatusEnum, DisabilityStatusEnumExpected } from './disabilityStatusEnum';
import { EEOC } from './eEOC';
import { EmailAddress } from './emailAddress';
import { EmailAddressRequest } from './emailAddressRequest';
import { EmailAddressTypeEnum, EmailAddressTypeEnumExpected } from './emailAddressTypeEnum';
import { EncodingEnum, EncodingEnumExpected } from './encodingEnum';
import { EndUserDetailsRequest } from './endUserDetailsRequest';
import { ErrorValidationProblem } from './errorValidationProblem';
import { GenderEnum, GenderEnumExpected } from './genderEnum';
import { GenerateRemoteKeyRequest } from './generateRemoteKeyRequest';
import { IgnoreCommonModel } from './ignoreCommonModel';
import { IgnoreCommonModelRequest } from './ignoreCommonModelRequest';
import { Issue } from './issue';
import { IssueStatusEnum, IssueStatusEnumExpected } from './issueStatusEnum';
import { Job } from './job';
import { JobInterviewStage } from './jobInterviewStage';
import { JobStatusEnum, JobStatusEnumExpected } from './jobStatusEnum';
import { LinkToken } from './linkToken';
import { LinkedAccountStatus } from './linkedAccountStatus';
import { MetaResponse } from './metaResponse';
import { MethodEnum, MethodEnumExpected } from './methodEnum';
import { ModelOperation } from './modelOperation';
import { MultipartFormFieldRequest } from './multipartFormFieldRequest';
import { Offer } from './offer';
import { OfferStatusEnum, OfferStatusEnumExpected } from './offerStatusEnum';
import { Office } from './office';
import { OverallRecommendationEnum, OverallRecommendationEnumExpected } from './overallRecommendationEnum';
import { PaginatedAccountDetailsAndActionsList } from './paginatedAccountDetailsAndActionsList';
import { PaginatedActivityList } from './paginatedActivityList';
import { PaginatedApplicationList } from './paginatedApplicationList';
import { PaginatedAttachmentList } from './paginatedAttachmentList';
import { PaginatedCandidateList } from './paginatedCandidateList';
import { PaginatedDepartmentList } from './paginatedDepartmentList';
import { PaginatedEEOCList } from './paginatedEEOCList';
import { PaginatedIssueList } from './paginatedIssueList';
import { PaginatedJobInterviewStageList } from './paginatedJobInterviewStageList';
import { PaginatedJobList } from './paginatedJobList';
import { PaginatedOfferList } from './paginatedOfferList';
import { PaginatedOfficeList } from './paginatedOfficeList';
import { PaginatedRejectReasonList } from './paginatedRejectReasonList';
import { PaginatedRemoteUserList } from './paginatedRemoteUserList';
import { PaginatedScheduledInterviewList } from './paginatedScheduledInterviewList';
import { PaginatedScorecardList } from './paginatedScorecardList';
import { PaginatedSyncStatusList } from './paginatedSyncStatusList';
import { PaginatedTagList } from './paginatedTagList';
import { PhoneNumber } from './phoneNumber';
import { PhoneNumberRequest } from './phoneNumberRequest';
import { PhoneNumberTypeEnum, PhoneNumberTypeEnumExpected } from './phoneNumberTypeEnum';
import { RaceEnum, RaceEnumExpected } from './raceEnum';
import { ReasonEnum, ReasonEnumExpected } from './reasonEnum';
import { RejectReason } from './rejectReason';
import { RemoteData } from './remoteData';
import { RemoteDataRequest } from './remoteDataRequest';
import { RemoteKey } from './remoteKey';
import { RemoteKeyForRegenerationRequest } from './remoteKeyForRegenerationRequest';
import { RemoteResponse } from './remoteResponse';
import { RemoteUser } from './remoteUser';
import { RequestFormatEnum, RequestFormatEnumExpected } from './requestFormatEnum';
import { ScheduledInterview } from './scheduledInterview';
import { ScheduledInterviewStatusEnum, ScheduledInterviewStatusEnumExpected } from './scheduledInterviewStatusEnum';
import { Scorecard } from './scorecard';
import { SyncStatus } from './syncStatus';
import { SyncStatusStatusEnum, SyncStatusStatusEnumExpected } from './syncStatusStatusEnum';
import { Tag } from './tag';
import { Url } from './url';
import { UrlRequest } from './urlRequest';
import { UrlTypeEnum, UrlTypeEnumExpected } from './urlTypeEnum';
import { ValidationProblemSource } from './validationProblemSource';
import { VeteranStatusEnum, VeteranStatusEnumExpected } from './veteranStatusEnum';
import { VisibilityEnum, VisibilityEnumExpected } from './visibilityEnum';
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
        "AccessRoleEnum": AccessRoleEnumExpected,
        "AccountDetailsAndActionsStatusEnum": AccountDetailsAndActionsStatusEnumExpected,
        "ActivityTypeEnum": ActivityTypeEnumExpected,
        "AttachmentTypeEnum": AttachmentTypeEnumExpected,
        "Categories143Enum": Categories143EnumExpected,
        "Categories3d0Enum": Categories3d0EnumExpected,
        "Category143Enum": Category143EnumExpected,
        "Category3d0Enum": Category3d0EnumExpected,
        "DisabilityStatusEnum": DisabilityStatusEnumExpected,
        "EmailAddressTypeEnum": EmailAddressTypeEnumExpected,
        "EncodingEnum": EncodingEnumExpected,
        "GenderEnum": GenderEnumExpected,
        "IssueStatusEnum": IssueStatusEnumExpected,
        "JobStatusEnum": JobStatusEnumExpected,
        "MethodEnum": MethodEnumExpected,
        "OfferStatusEnum": OfferStatusEnumExpected,
        "OverallRecommendationEnum": OverallRecommendationEnumExpected,
        "PhoneNumberTypeEnum": PhoneNumberTypeEnumExpected,
        "RaceEnum": RaceEnumExpected,
        "ReasonEnum": ReasonEnumExpected,
        "RequestFormatEnum": RequestFormatEnumExpected,
        "ScheduledInterviewStatusEnum": ScheduledInterviewStatusEnumExpected,
        "SyncStatusStatusEnum": SyncStatusStatusEnumExpected,
        "UrlTypeEnum": UrlTypeEnumExpected,
        "VeteranStatusEnum": VeteranStatusEnumExpected,
        "VisibilityEnum": VisibilityEnumExpected,
}

let typeMap: {[index: string]: any} = {
    "AccountDetails": AccountDetails,
    "AccountDetailsAndActions": AccountDetailsAndActions,
    "AccountDetailsAndActionsIntegration": AccountDetailsAndActionsIntegration,
    "AccountIntegration": AccountIntegration,
    "AccountToken": AccountToken,
    "Activity": Activity,
    "Application": Application,
    "ApplicationEndpointRequest": ApplicationEndpointRequest,
    "ApplicationRequest": ApplicationRequest,
    "ApplicationResponse": ApplicationResponse,
    "Attachment": Attachment,
    "AttachmentEndpointRequest": AttachmentEndpointRequest,
    "AttachmentRequest": AttachmentRequest,
    "AttachmentResponse": AttachmentResponse,
    "AvailableActions": AvailableActions,
    "Candidate": Candidate,
    "CandidateEndpointRequest": CandidateEndpointRequest,
    "CandidateRequest": CandidateRequest,
    "CandidateResponse": CandidateResponse,
    "DataPassthroughRequest": DataPassthroughRequest,
    "DebugModeLog": DebugModeLog,
    "DebugModelLogSummary": DebugModelLogSummary,
    "Department": Department,
    "EEOC": EEOC,
    "EmailAddress": EmailAddress,
    "EmailAddressRequest": EmailAddressRequest,
    "EndUserDetailsRequest": EndUserDetailsRequest,
    "ErrorValidationProblem": ErrorValidationProblem,
    "GenerateRemoteKeyRequest": GenerateRemoteKeyRequest,
    "IgnoreCommonModel": IgnoreCommonModel,
    "IgnoreCommonModelRequest": IgnoreCommonModelRequest,
    "Issue": Issue,
    "Job": Job,
    "JobInterviewStage": JobInterviewStage,
    "LinkToken": LinkToken,
    "LinkedAccountStatus": LinkedAccountStatus,
    "MetaResponse": MetaResponse,
    "ModelOperation": ModelOperation,
    "MultipartFormFieldRequest": MultipartFormFieldRequest,
    "Offer": Offer,
    "Office": Office,
    "PaginatedAccountDetailsAndActionsList": PaginatedAccountDetailsAndActionsList,
    "PaginatedActivityList": PaginatedActivityList,
    "PaginatedApplicationList": PaginatedApplicationList,
    "PaginatedAttachmentList": PaginatedAttachmentList,
    "PaginatedCandidateList": PaginatedCandidateList,
    "PaginatedDepartmentList": PaginatedDepartmentList,
    "PaginatedEEOCList": PaginatedEEOCList,
    "PaginatedIssueList": PaginatedIssueList,
    "PaginatedJobInterviewStageList": PaginatedJobInterviewStageList,
    "PaginatedJobList": PaginatedJobList,
    "PaginatedOfferList": PaginatedOfferList,
    "PaginatedOfficeList": PaginatedOfficeList,
    "PaginatedRejectReasonList": PaginatedRejectReasonList,
    "PaginatedRemoteUserList": PaginatedRemoteUserList,
    "PaginatedScheduledInterviewList": PaginatedScheduledInterviewList,
    "PaginatedScorecardList": PaginatedScorecardList,
    "PaginatedSyncStatusList": PaginatedSyncStatusList,
    "PaginatedTagList": PaginatedTagList,
    "PhoneNumber": PhoneNumber,
    "PhoneNumberRequest": PhoneNumberRequest,
    "RejectReason": RejectReason,
    "RemoteData": RemoteData,
    "RemoteDataRequest": RemoteDataRequest,
    "RemoteKey": RemoteKey,
    "RemoteKeyForRegenerationRequest": RemoteKeyForRegenerationRequest,
    "RemoteResponse": RemoteResponse,
    "RemoteUser": RemoteUser,
    "ScheduledInterview": ScheduledInterview,
    "Scorecard": Scorecard,
    "SyncStatus": SyncStatus,
    "Tag": Tag,
    "Url": Url,
    "UrlRequest": UrlRequest,
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
