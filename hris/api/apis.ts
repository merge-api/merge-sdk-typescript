export * from './accountDetailsApi';
import { AccountDetailsApi } from './accountDetailsApi';
export * from './accountTokenApi';
import { AccountTokenApi } from './accountTokenApi';
export * from './availableActionsApi';
import { AvailableActionsApi } from './availableActionsApi';
export * from './bankInfoApi';
import { BankInfoApi } from './bankInfoApi';
export * from './benefitsApi';
import { BenefitsApi } from './benefitsApi';
export * from './companiesApi';
import { CompaniesApi } from './companiesApi';
export * from './deductionsApi';
import { DeductionsApi } from './deductionsApi';
export * from './deleteAccountApi';
import { DeleteAccountApi } from './deleteAccountApi';
export * from './employeePayrollRunsApi';
import { EmployeePayrollRunsApi } from './employeePayrollRunsApi';
export * from './employeesApi';
import { EmployeesApi } from './employeesApi';
export * from './employmentsApi';
import { EmploymentsApi } from './employmentsApi';
export * from './forceResyncApi';
import { ForceResyncApi } from './forceResyncApi';
export * from './generateKeyApi';
import { GenerateKeyApi } from './generateKeyApi';
export * from './groupsApi';
import { GroupsApi } from './groupsApi';
export * from './issuesApi';
import { IssuesApi } from './issuesApi';
export * from './linkTokenApi';
import { LinkTokenApi } from './linkTokenApi';
export * from './linkedAccountsApi';
import { LinkedAccountsApi } from './linkedAccountsApi';
export * from './locationsApi';
import { LocationsApi } from './locationsApi';
export * from './passthroughApi';
import { PassthroughApi } from './passthroughApi';
export * from './payGroupsApi';
import { PayGroupsApi } from './payGroupsApi';
export * from './payrollRunsApi';
import { PayrollRunsApi } from './payrollRunsApi';
export * from './regenerateKeyApi';
import { RegenerateKeyApi } from './regenerateKeyApi';
export * from './syncStatusApi';
import { SyncStatusApi } from './syncStatusApi';
export * from './teamsApi';
import { TeamsApi } from './teamsApi';
export * from './timeOffApi';
import { TimeOffApi } from './timeOffApi';
export * from './timeOffBalancesApi';
import { TimeOffBalancesApi } from './timeOffBalancesApi';
export * from './webhookReceiversApi';
import { WebhookReceiversApi } from './webhookReceiversApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AccountDetailsApi, AccountTokenApi, AvailableActionsApi, BankInfoApi, BenefitsApi, CompaniesApi, DeductionsApi, DeleteAccountApi, EmployeePayrollRunsApi, EmployeesApi, EmploymentsApi, ForceResyncApi, GenerateKeyApi, GroupsApi, IssuesApi, LinkTokenApi, LinkedAccountsApi, LocationsApi, PassthroughApi, PayGroupsApi, PayrollRunsApi, RegenerateKeyApi, SyncStatusApi, TeamsApi, TimeOffApi, TimeOffBalancesApi, WebhookReceiversApi];
