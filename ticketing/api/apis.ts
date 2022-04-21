export * from './accountDetailsApi';
import { AccountDetailsApi } from './accountDetailsApi';
export * from './accountTokenApi';
import { AccountTokenApi } from './accountTokenApi';
export * from './accountsApi';
import { AccountsApi } from './accountsApi';
export * from './attachmentsApi';
import { AttachmentsApi } from './attachmentsApi';
export * from './availableActionsApi';
import { AvailableActionsApi } from './availableActionsApi';
export * from './commentsApi';
import { CommentsApi } from './commentsApi';
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
export * from './linkTokenApi';
import { LinkTokenApi } from './linkTokenApi';
export * from './linkedAccountsApi';
import { LinkedAccountsApi } from './linkedAccountsApi';
export * from './passthroughApi';
import { PassthroughApi } from './passthroughApi';
export * from './projectsApi';
import { ProjectsApi } from './projectsApi';
export * from './regenerateKeyApi';
import { RegenerateKeyApi } from './regenerateKeyApi';
export * from './syncStatusApi';
import { SyncStatusApi } from './syncStatusApi';
export * from './tagsApi';
import { TagsApi } from './tagsApi';
export * from './teamsApi';
import { TeamsApi } from './teamsApi';
export * from './ticketsApi';
import { TicketsApi } from './ticketsApi';
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

export const APIS = [AccountDetailsApi, AccountTokenApi, AccountsApi, AttachmentsApi, AvailableActionsApi, CommentsApi, ContactsApi, DeleteAccountApi, ForceResyncApi, GenerateKeyApi, IssuesApi, LinkTokenApi, LinkedAccountsApi, PassthroughApi, ProjectsApi, RegenerateKeyApi, SyncStatusApi, TagsApi, TeamsApi, TicketsApi, UsersApi, WebhookReceiversApi];
