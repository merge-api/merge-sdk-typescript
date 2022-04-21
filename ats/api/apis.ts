export * from './accountDetailsApi';
import { AccountDetailsApi } from './accountDetailsApi';
export * from './accountTokenApi';
import { AccountTokenApi } from './accountTokenApi';
export * from './activitiesApi';
import { ActivitiesApi } from './activitiesApi';
export * from './applicationsApi';
import { ApplicationsApi } from './applicationsApi';
export * from './attachmentsApi';
import { AttachmentsApi } from './attachmentsApi';
export * from './availableActionsApi';
import { AvailableActionsApi } from './availableActionsApi';
export * from './candidatesApi';
import { CandidatesApi } from './candidatesApi';
export * from './deleteAccountApi';
import { DeleteAccountApi } from './deleteAccountApi';
export * from './departmentsApi';
import { DepartmentsApi } from './departmentsApi';
export * from './eeocsApi';
import { EeocsApi } from './eeocsApi';
export * from './forceResyncApi';
import { ForceResyncApi } from './forceResyncApi';
export * from './generateKeyApi';
import { GenerateKeyApi } from './generateKeyApi';
export * from './interviewsApi';
import { InterviewsApi } from './interviewsApi';
export * from './issuesApi';
import { IssuesApi } from './issuesApi';
export * from './jobInterviewStagesApi';
import { JobInterviewStagesApi } from './jobInterviewStagesApi';
export * from './jobsApi';
import { JobsApi } from './jobsApi';
export * from './linkTokenApi';
import { LinkTokenApi } from './linkTokenApi';
export * from './linkedAccountsApi';
import { LinkedAccountsApi } from './linkedAccountsApi';
export * from './offersApi';
import { OffersApi } from './offersApi';
export * from './officesApi';
import { OfficesApi } from './officesApi';
export * from './passthroughApi';
import { PassthroughApi } from './passthroughApi';
export * from './regenerateKeyApi';
import { RegenerateKeyApi } from './regenerateKeyApi';
export * from './rejectReasonsApi';
import { RejectReasonsApi } from './rejectReasonsApi';
export * from './scorecardsApi';
import { ScorecardsApi } from './scorecardsApi';
export * from './syncStatusApi';
import { SyncStatusApi } from './syncStatusApi';
export * from './tagsApi';
import { TagsApi } from './tagsApi';
export * from './usersApi';
import { UsersApi } from './usersApi';
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

export const APIS = [AccountDetailsApi, AccountTokenApi, ActivitiesApi, ApplicationsApi, AttachmentsApi, AvailableActionsApi, CandidatesApi, DeleteAccountApi, DepartmentsApi, EeocsApi, ForceResyncApi, GenerateKeyApi, InterviewsApi, IssuesApi, JobInterviewStagesApi, JobsApi, LinkTokenApi, LinkedAccountsApi, OffersApi, OfficesApi, PassthroughApi, RegenerateKeyApi, RejectReasonsApi, ScorecardsApi, SyncStatusApi, TagsApi, UsersApi, WebhookReceiversApi];
