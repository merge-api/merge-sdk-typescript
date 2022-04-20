export * from './accountDetailsApi';
import { AccountDetailsApi } from './accountDetailsApi';
export * from './accountTokenApi';
import { AccountTokenApi } from './accountTokenApi';
export * from './accountsApi';
import { AccountsApi } from './accountsApi';
export * from './availableActionsApi';
import { AvailableActionsApi } from './availableActionsApi';
export * from './contactsApi';
import { ContactsApi } from './contactsApi';
export * from './deleteAccountApi';
import { DeleteAccountApi } from './deleteAccountApi';
export * from './forceResyncApi';
import { ForceResyncApi } from './forceResyncApi';
export * from './generateKeyApi';
import { GenerateKeyApi } from './generateKeyApi';
export * from './issuesApi';
import { IssuesApi } from './issuesApi';
export * from './leadsApi';
import { LeadsApi } from './leadsApi';
export * from './linkTokenApi';
import { LinkTokenApi } from './linkTokenApi';
export * from './linkedAccountsApi';
import { LinkedAccountsApi } from './linkedAccountsApi';
export * from './notesApi';
import { NotesApi } from './notesApi';
export * from './opportunitiesApi';
import { OpportunitiesApi } from './opportunitiesApi';
export * from './passthroughApi';
import { PassthroughApi } from './passthroughApi';
export * from './regenerateKeyApi';
import { RegenerateKeyApi } from './regenerateKeyApi';
export * from './stagesApi';
import { StagesApi } from './stagesApi';
export * from './syncStatusApi';
import { SyncStatusApi } from './syncStatusApi';
export * from './tasksApi';
import { TasksApi } from './tasksApi';
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

export const APIS = [AccountDetailsApi, AccountTokenApi, AccountsApi, AvailableActionsApi, ContactsApi, DeleteAccountApi, ForceResyncApi, GenerateKeyApi, IssuesApi, LeadsApi, LinkTokenApi, LinkedAccountsApi, NotesApi, OpportunitiesApi, PassthroughApi, RegenerateKeyApi, StagesApi, SyncStatusApi, TasksApi, WebhookReceiversApi];
