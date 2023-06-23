## @mergeapi/merge-sdk-typescript@3.0.10

This is the Merge API, Inc. SDK client for Typescript. It utilizes [Fetch API](https://fetch.spec.whatwg.org/) to
make requests to Merge on behalf of customers. We recommend only using this module in NodeJS server environments.

Language level

- ES5 - you must have a Promises/A+ library installed
- ES6

Module system

- CommonJS
- ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition should be automatically resolved via `package.json`. ([Reference](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html))

## Documentation

The documentation for various Merge category API's can be found here:

- [Accounting](https://www.merge.dev/docs/accounting/overview/)
- [ATS](https://www.merge.dev/docs/ats/overview/) (Applicant Tracking Systems)
- [CRM](https://www.merge.dev/docs/crm/overview/) (Customer Relationship Management)
- [HRIS](https://www.merge.dev/docs/hris/overview/) (Human Resource Information Systems)
- [Ticketing](https://www.merge.dev/docs/ticketing/overview/)

### Basic Usage

Common to all categories is the Merge SDK `Configuration` object, which defines the authentication properties of
your requests. The `apiKey` property is the API Key of your Merge account, which can be administered in the
[Merge dashboard](https://app.merge.dev/configuration/keys). The `accessToken` property will be the
`X-Account-Token` header which identifies which of your customers' data you are requesting. See the following
examples for calling various category API's:

#### node-fetch override on Node version < 17.5

This SDK relies on the Fetch API, which is baked into Node starting at version 17.5. For those customers on older
versions of Node, we allow you to explicitly set the fetchApi property like so:

```typescript
import fetch from 'node-fetch'

...

let test_conf_crm = new Configuration({
    apiKey: "REDACTED",
    accessToken: "REDACTED",
    fetchApi: fetch
});
```

You can find the node-fetch package here: https://www.npmjs.com/package/node-fetch . We have tested that
node-fetch @ 2.x.x can be passed in directly on Node version 16.0.0, however later versions of node-fetch or later
versions of Node may require additional type adjustments to make it work.

#### Accounting

```typescript
const confAccounting = new Configuration({
    apiKey: "REDACTED-YourAPIKeyWithMerge",
    accessToken: "REDACTED-YourCustomer1Key"
});

const accountsApi = new merge_sdk.Accounting.AccountsApi(confAccounting);

// lists the accounting accounts for customer 1
let response = await accountsApi.accountsList({}).catch((reason) => {
    console.log(reason);
});
console.log(response);
```

#### ATS

```typescript
const confAts = new Configuration({
    apiKey: "REDACTED-YourAPIKeyWithMerge",
    accessToken: "REDACTED-YourCustomer1Key"
});

const candidatesApi = new merge_sdk.ATS.CandidatesApi(confAts);

// lists ats candidates for customer 1
let response = await candidatesApi.candidatesList({}).catch((reason) => {
    console.log(reason);
});
console.log(response);
```

#### CRM

```typescript
const confCrm = new Configuration({
    apiKey: "REDACTED-YourAPIKeyWithMerge",
    accessToken: "REDACTED-YourCustomer1Key"
});

const contactsApi = new merge_sdk.CRM.ContactsApi(confCrm);

// lists crm contacts for customer 1
let response = await contactsApi.contactsList({});
console.log(response);
```

#### HRIS

```typescript
const confHris = new Configuration({
    apiKey: "REDACTED-YourAPIKeyWithMerge",
    accessToken: "REDACTED-YourCustomer1Key"
});

const employeesApi = new merge_sdk.HRIS.EmployeesApi(confHris);

// list all employess reporting to managerId: x for customer 1
let response = await employeesApi.employeesList({
    managerId: "REDACTED"
});
console.log(response);
```

#### Ticketing

```typescript
const confTicketing = new Configuration({
    apiKey: "REDACTED-YourAPIKeyWithMerge",
    accessToken: "REDACTED-YourCustomer1Key"
});

const ticketsApi = new merge_sdk.Ticketing.TicketsApi(confTicketing);

// list all ticketing tickets for customer 1
let response = await ticketsApi.ticketsList({});
console.log(response);
```

### Enums

Merge's API tries to unify enum values across integrations for a given category. However, there will be
sporadic cases where integration enum values are too unique to be mapped. In these cases, the value will
come back as-is. In order to support this behavior, starting in v3.0.0 of merge-sdk-typescript, all enum
values will be wrapped in an interface like:

```typescript
{
    value: EnumValue,
    rawValue: string
}
```

Where the `rawValue` property will be the string from the Merge API, which may be the enum value as-is
from the integration source.

### Building

To build and compile the typescript sources to javascript use:

```bash
npm install
npm run build
```

### Tests

There is a single rough test for the SDK which calls one API from each category. To run it, you must set
configuration variables with the relevant API key and access token for each category. Additionally, the HRIS
section of the test checks an optional filtering query parameter.

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```bash
npm install @mergeapi/merge-sdk-typescript@3.0.9 --save
```

_unPublished (not recommended):_

```bash
npm install PATH_TO_GENERATED_PACKAGE --save
```
