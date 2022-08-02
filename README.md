## @mergeapi/merge-sdk-typescript@2.0.0

This is the Merge API, Inc. SDK client for Typescript. It utilizes [Fetch API](https://fetch.spec.whatwg.org/) to
make requests to Merge on behalf of customers. We recommend only using this module in NodeJS server environments.

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition should be automatically resolved via `package.json`. ([Reference](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html))

## Documentation

The documentation for various Merge category API's can be found here:

* [Accounting](https://www.merge.dev/docs/accounting/overview/)
* [ATS](https://www.merge.dev/docs/ats/overview/) (Applicant Tracking Systems)
* [CRM](https://www.merge.dev/docs/crm/overview/) (Customer Relationship Management)
* [HRIS](https://www.merge.dev/docs/hris/overview/) (Human Resource Information Systems)
* [Ticketing](https://www.merge.dev/docs/ticketing/overview/)

### Basic Usage

Common to all categories is the Merge sdk `Configuration` object, which defines the authentication properties of 
your requests. The `apiKey` property is the api key of your Merge account, which can be administered in the 
[Merge dashboard](https://app.merge.dev/configuration/keys). The `accessToken` property will be the 
`X-Account-Token` header which identifies which of your customers' data you are requesting. See the following
examples for calling various category api's:

#### Accounting

```
let conf_accounting = new Configuration({
    apiKey: "REDACTED-YourApiKeyWithMerge",
    accessToken: "REDACTED-YourCustomer1Key"
});

let acct_api = new merge_sdk.Accounting.AccountsApi(conf_accounting);

// lists the accounting accounts for customer 1
let response = await acct_api.accountsList({}).catch((reason) => {
    console.log(reason);
});
console.log(response);
```

#### ATS

```
let conf_ats = new Configuration({
    apiKey: "REDACTED-YourApiKeyWithMerge",
    accessToken: "REDACTED-YourCustomer1Key"
});

let cand_api = new merge_sdk.ATS.CandidatesApi(conf_ats);

// lists ats candidates for customer 1
let response = await cand_api.candidatesList({}).catch((reason) => {
    console.log(reason);
});
console.log(response);
```

#### CRM

```
let conf_crm = new Configuration({
    apiKey: "REDACTED-YourApiKeyWithMerge",
    accessToken: "REDACTED-YourCustomer1Key"
});

let con_api = new merge_sdk.CRM.ContactsApi(conf_crm);

// lists crm contacts for customer 1
let response = await con_api.contactsList({});
console.log(response);
```

#### HRIS

```
let conf_hris = new Configuration({
    apiKey: "REDACTED-YourApiKeyWithMerge",
    accessToken: "REDACTED-YourCustomer1Key"
});

let emp_api = new merge_sdk.HRIS.EmployeesApi(conf_hris);

// list all employess reporting to managerId: x for customer 1
let response = await emp_api.employeesList({
    managerId: "REDACTED"
});
console.log(response);
```

#### Ticketing

```
let conf_ticketing = new Configuration({
    apiKey: "REDACTED-YourApiKeyWithMerge",
    accessToken: "REDACTED-YourCustomer1Key"
});

let tick_api = new merge_sdk.Ticketing.TicketsApi(conf_ticketing);

// list all ticketing tickets for customer 1
let response = await tick_api.ticketsList({});
console.log(response);
```

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Tests

There is a single rough test for the SDK which calls one api from each category. To run it, you must set 
configuration variables with the relevant api key and access token for each category. Additionally, the HRIS
section of the test checks an optional filtering query parameter.

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install @mergeapi/merge-sdk-typescript@2.0.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
