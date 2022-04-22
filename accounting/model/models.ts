import localVarRequest from 'request';

export * from './account';
export * from './accountDetails';
export * from './accountDetailsAndActions';
export * from './accountDetailsAndActionsIntegration';
export * from './accountDetailsAndActionsStatusEnum';
export * from './accountIntegration';
export * from './accountStatusEnum';
export * from './accountToken';
export * from './accountingAttachment';
export * from './accountingPhoneNumber';
export * from './address';
export * from './addressTypeEnum';
export * from './availableActions';
export * from './balanceSheet';
export * from './cashFlowStatement';
export * from './categoriesEnum';
export * from './categoryEnum';
export * from './classificationEnum';
export * from './companyInfo';
export * from './contact';
export * from './countryEnum';
export * from './creditNote';
export * from './creditNoteStatusEnum';
export * from './currencyEnum';
export * from './dataPassthroughRequest';
export * from './debugModeLog';
export * from './debugModelLogSummary';
export * from './encodingEnum';
export * from './endUserDetailsRequest';
export * from './errorValidationProblem';
export * from './expense';
export * from './expenseLine';
export * from './generateRemoteKeyRequest';
export * from './incomeStatement';
export * from './invoice';
export * from './invoiceEndpointRequest';
export * from './invoiceLineItem';
export * from './invoiceLineItemRequest';
export * from './invoiceRequest';
export * from './invoiceResponse';
export * from './invoiceTypeEnum';
export * from './issue';
export * from './issueStatusEnum';
export * from './item';
export * from './journalEntry';
export * from './journalEntryEndpointRequest';
export * from './journalEntryRequest';
export * from './journalEntryResponse';
export * from './journalLine';
export * from './journalLineRequest';
export * from './linkToken';
export * from './linkedAccountStatus';
export * from './metaResponse';
export * from './methodEnum';
export * from './modelOperation';
export * from './multipartFormFieldRequest';
export * from './paginatedAccountDetailsAndActionsList';
export * from './paginatedAccountList';
export * from './paginatedAccountingAttachmentList';
export * from './paginatedBalanceSheetList';
export * from './paginatedCashFlowStatementList';
export * from './paginatedCompanyInfoList';
export * from './paginatedContactList';
export * from './paginatedCreditNoteList';
export * from './paginatedExpenseList';
export * from './paginatedIncomeStatementList';
export * from './paginatedInvoiceList';
export * from './paginatedIssueList';
export * from './paginatedItemList';
export * from './paginatedJournalEntryList';
export * from './paginatedPaymentList';
export * from './paginatedPurchaseOrderList';
export * from './paginatedSyncStatusList';
export * from './paginatedTaxRateList';
export * from './paginatedTrackingCategoryList';
export * from './payment';
export * from './purchaseOrder';
export * from './purchaseOrderLineItem';
export * from './purchaseOrderStatusEnum';
export * from './remoteData';
export * from './remoteDataRequest';
export * from './remoteKey';
export * from './remoteKeyForRegenerationRequest';
export * from './remoteResponse';
export * from './reportItem';
export * from './requestFormatEnum';
export * from './stateEnum';
export * from './status7d1Enum';
export * from './syncStatus';
export * from './syncStatusStatusEnum';
export * from './taxRate';
export * from './trackingCategory';
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
import { AccountStatusEnum, AccountStatusEnumExpected } from './accountStatusEnum';
import { AccountToken } from './accountToken';
import { AccountingAttachment } from './accountingAttachment';
import { AccountingPhoneNumber } from './accountingPhoneNumber';
import { Address } from './address';
import { AddressTypeEnum, AddressTypeEnumExpected } from './addressTypeEnum';
import { AvailableActions } from './availableActions';
import { BalanceSheet } from './balanceSheet';
import { CashFlowStatement } from './cashFlowStatement';
import { CategoriesEnum, CategoriesEnumExpected } from './categoriesEnum';
import { CategoryEnum, CategoryEnumExpected } from './categoryEnum';
import { ClassificationEnum, ClassificationEnumExpected } from './classificationEnum';
import { CompanyInfo } from './companyInfo';
import { Contact } from './contact';
import { CountryEnum, CountryEnumExpected } from './countryEnum';
import { CreditNote } from './creditNote';
import { CreditNoteStatusEnum, CreditNoteStatusEnumExpected } from './creditNoteStatusEnum';
import { CurrencyEnum, CurrencyEnumExpected } from './currencyEnum';
import { DataPassthroughRequest } from './dataPassthroughRequest';
import { DebugModeLog } from './debugModeLog';
import { DebugModelLogSummary } from './debugModelLogSummary';
import { EncodingEnum, EncodingEnumExpected } from './encodingEnum';
import { EndUserDetailsRequest } from './endUserDetailsRequest';
import { ErrorValidationProblem } from './errorValidationProblem';
import { Expense } from './expense';
import { ExpenseLine } from './expenseLine';
import { GenerateRemoteKeyRequest } from './generateRemoteKeyRequest';
import { IncomeStatement } from './incomeStatement';
import { Invoice } from './invoice';
import { InvoiceEndpointRequest } from './invoiceEndpointRequest';
import { InvoiceLineItem } from './invoiceLineItem';
import { InvoiceLineItemRequest } from './invoiceLineItemRequest';
import { InvoiceRequest } from './invoiceRequest';
import { InvoiceResponse } from './invoiceResponse';
import { InvoiceTypeEnum, InvoiceTypeEnumExpected } from './invoiceTypeEnum';
import { Issue } from './issue';
import { IssueStatusEnum, IssueStatusEnumExpected } from './issueStatusEnum';
import { Item } from './item';
import { JournalEntry } from './journalEntry';
import { JournalEntryEndpointRequest } from './journalEntryEndpointRequest';
import { JournalEntryRequest } from './journalEntryRequest';
import { JournalEntryResponse } from './journalEntryResponse';
import { JournalLine } from './journalLine';
import { JournalLineRequest } from './journalLineRequest';
import { LinkToken } from './linkToken';
import { LinkedAccountStatus } from './linkedAccountStatus';
import { MetaResponse } from './metaResponse';
import { MethodEnum, MethodEnumExpected } from './methodEnum';
import { ModelOperation } from './modelOperation';
import { MultipartFormFieldRequest } from './multipartFormFieldRequest';
import { PaginatedAccountDetailsAndActionsList } from './paginatedAccountDetailsAndActionsList';
import { PaginatedAccountList } from './paginatedAccountList';
import { PaginatedAccountingAttachmentList } from './paginatedAccountingAttachmentList';
import { PaginatedBalanceSheetList } from './paginatedBalanceSheetList';
import { PaginatedCashFlowStatementList } from './paginatedCashFlowStatementList';
import { PaginatedCompanyInfoList } from './paginatedCompanyInfoList';
import { PaginatedContactList } from './paginatedContactList';
import { PaginatedCreditNoteList } from './paginatedCreditNoteList';
import { PaginatedExpenseList } from './paginatedExpenseList';
import { PaginatedIncomeStatementList } from './paginatedIncomeStatementList';
import { PaginatedInvoiceList } from './paginatedInvoiceList';
import { PaginatedIssueList } from './paginatedIssueList';
import { PaginatedItemList } from './paginatedItemList';
import { PaginatedJournalEntryList } from './paginatedJournalEntryList';
import { PaginatedPaymentList } from './paginatedPaymentList';
import { PaginatedPurchaseOrderList } from './paginatedPurchaseOrderList';
import { PaginatedSyncStatusList } from './paginatedSyncStatusList';
import { PaginatedTaxRateList } from './paginatedTaxRateList';
import { PaginatedTrackingCategoryList } from './paginatedTrackingCategoryList';
import { Payment } from './payment';
import { PurchaseOrder } from './purchaseOrder';
import { PurchaseOrderLineItem } from './purchaseOrderLineItem';
import { PurchaseOrderStatusEnum, PurchaseOrderStatusEnumExpected } from './purchaseOrderStatusEnum';
import { RemoteData } from './remoteData';
import { RemoteDataRequest } from './remoteDataRequest';
import { RemoteKey } from './remoteKey';
import { RemoteKeyForRegenerationRequest } from './remoteKeyForRegenerationRequest';
import { RemoteResponse } from './remoteResponse';
import { ReportItem } from './reportItem';
import { RequestFormatEnum, RequestFormatEnumExpected } from './requestFormatEnum';
import { StateEnum, StateEnumExpected } from './stateEnum';
import { Status7d1Enum, Status7d1EnumExpected } from './status7d1Enum';
import { SyncStatus } from './syncStatus';
import { SyncStatusStatusEnum, SyncStatusStatusEnumExpected } from './syncStatusStatusEnum';
import { TaxRate } from './taxRate';
import { TrackingCategory } from './trackingCategory';
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
        "AccountStatusEnum": AccountStatusEnumExpected,
        "AddressTypeEnum": AddressTypeEnumExpected,
        "CategoriesEnum": CategoriesEnumExpected,
        "CategoryEnum": CategoryEnumExpected,
        "ClassificationEnum": ClassificationEnumExpected,
        "CountryEnum": CountryEnumExpected,
        "CreditNoteStatusEnum": CreditNoteStatusEnumExpected,
        "CurrencyEnum": CurrencyEnumExpected,
        "EncodingEnum": EncodingEnumExpected,
        "InvoiceTypeEnum": InvoiceTypeEnumExpected,
        "IssueStatusEnum": IssueStatusEnumExpected,
        "MethodEnum": MethodEnumExpected,
        "PurchaseOrderStatusEnum": PurchaseOrderStatusEnumExpected,
        "RequestFormatEnum": RequestFormatEnumExpected,
        "StateEnum": StateEnumExpected,
        "Status7d1Enum": Status7d1EnumExpected,
        "SyncStatusStatusEnum": SyncStatusStatusEnumExpected,
}

let typeMap: {[index: string]: any} = {
    "Account": Account,
    "AccountDetails": AccountDetails,
    "AccountDetailsAndActions": AccountDetailsAndActions,
    "AccountDetailsAndActionsIntegration": AccountDetailsAndActionsIntegration,
    "AccountIntegration": AccountIntegration,
    "AccountToken": AccountToken,
    "AccountingAttachment": AccountingAttachment,
    "AccountingPhoneNumber": AccountingPhoneNumber,
    "Address": Address,
    "AvailableActions": AvailableActions,
    "BalanceSheet": BalanceSheet,
    "CashFlowStatement": CashFlowStatement,
    "CompanyInfo": CompanyInfo,
    "Contact": Contact,
    "CreditNote": CreditNote,
    "DataPassthroughRequest": DataPassthroughRequest,
    "DebugModeLog": DebugModeLog,
    "DebugModelLogSummary": DebugModelLogSummary,
    "EndUserDetailsRequest": EndUserDetailsRequest,
    "ErrorValidationProblem": ErrorValidationProblem,
    "Expense": Expense,
    "ExpenseLine": ExpenseLine,
    "GenerateRemoteKeyRequest": GenerateRemoteKeyRequest,
    "IncomeStatement": IncomeStatement,
    "Invoice": Invoice,
    "InvoiceEndpointRequest": InvoiceEndpointRequest,
    "InvoiceLineItem": InvoiceLineItem,
    "InvoiceLineItemRequest": InvoiceLineItemRequest,
    "InvoiceRequest": InvoiceRequest,
    "InvoiceResponse": InvoiceResponse,
    "Issue": Issue,
    "Item": Item,
    "JournalEntry": JournalEntry,
    "JournalEntryEndpointRequest": JournalEntryEndpointRequest,
    "JournalEntryRequest": JournalEntryRequest,
    "JournalEntryResponse": JournalEntryResponse,
    "JournalLine": JournalLine,
    "JournalLineRequest": JournalLineRequest,
    "LinkToken": LinkToken,
    "LinkedAccountStatus": LinkedAccountStatus,
    "MetaResponse": MetaResponse,
    "ModelOperation": ModelOperation,
    "MultipartFormFieldRequest": MultipartFormFieldRequest,
    "PaginatedAccountDetailsAndActionsList": PaginatedAccountDetailsAndActionsList,
    "PaginatedAccountList": PaginatedAccountList,
    "PaginatedAccountingAttachmentList": PaginatedAccountingAttachmentList,
    "PaginatedBalanceSheetList": PaginatedBalanceSheetList,
    "PaginatedCashFlowStatementList": PaginatedCashFlowStatementList,
    "PaginatedCompanyInfoList": PaginatedCompanyInfoList,
    "PaginatedContactList": PaginatedContactList,
    "PaginatedCreditNoteList": PaginatedCreditNoteList,
    "PaginatedExpenseList": PaginatedExpenseList,
    "PaginatedIncomeStatementList": PaginatedIncomeStatementList,
    "PaginatedInvoiceList": PaginatedInvoiceList,
    "PaginatedIssueList": PaginatedIssueList,
    "PaginatedItemList": PaginatedItemList,
    "PaginatedJournalEntryList": PaginatedJournalEntryList,
    "PaginatedPaymentList": PaginatedPaymentList,
    "PaginatedPurchaseOrderList": PaginatedPurchaseOrderList,
    "PaginatedSyncStatusList": PaginatedSyncStatusList,
    "PaginatedTaxRateList": PaginatedTaxRateList,
    "PaginatedTrackingCategoryList": PaginatedTrackingCategoryList,
    "Payment": Payment,
    "PurchaseOrder": PurchaseOrder,
    "PurchaseOrderLineItem": PurchaseOrderLineItem,
    "RemoteData": RemoteData,
    "RemoteDataRequest": RemoteDataRequest,
    "RemoteKey": RemoteKey,
    "RemoteKeyForRegenerationRequest": RemoteKeyForRegenerationRequest,
    "RemoteResponse": RemoteResponse,
    "ReportItem": ReportItem,
    "SyncStatus": SyncStatus,
    "TaxRate": TaxRate,
    "TrackingCategory": TrackingCategory,
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
