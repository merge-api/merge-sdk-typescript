# Version 3.0.10

- Added email_addresses to Lead POST API in CRM Category

# Version 3.0.9

# Date: 2022-03-24

- Added POST Task object APIs in CRM category

# Version 3.0.8

# Date: 2022-03-14

- Added FileStorage category (in Beta)

# Version 3.0.7

# Date: 2022-03-08

- Added ignore-contacts and ignore-users api to the CRM category
- Fixed list deserialization for all models whereby sub fields were not always deserialized to the right type

# Version 3.0.6

# Date: 2022-02-28

- Added Marketing Automation (MKTG) category
- Many RemoteField feature class names were changed backwards incompatibly (beta feature)
- MergePaginatedResponse was not applying per-result-item deserialization in full, trying out a new optional parameter to allow that for Employees model for now, if that looks ok we'll add it to all list endpoints across the board.

# Version 3.0.5

# Date: 2022-02-14

- The base APIClient was failing to serialize array-type query params in a way our server understood. This is now fixed.

# Version 3.0.4

# Date: 2022-02-10

- Add scopes API back for linked account overrides
- Add RemoteFields models to CRM category (beta)
- Adds collections/{id}/users endpoint to ticketing category
- various documentation additions and field additions

# Version 3.0.3

# Date: 2022-02-02

- Add PurchaseOrderObject to accounting models

# Version 3.0.2

# Date: 2022-01-31

- Updated response.clone() fix from version 3.0.0 to not run response.clone() AT ALL unless a middleware exists that needs it (previously always doing clone once and only once)

# Version 3.0.1

# Date: 2022-01-20

- Fixed an issue where certain accounting models did not allow POST'ing of line items properties
- Removed CommonModelScopes api, previously in beta. May return in the future in a different form.
- Various documentation / help text updates to common model fields

# Version 3.0.0

# Date: 2022-01-13

- Changed Expands enum options from a combinatoric list of strings with fixed order to an orderless array
- Added `misc_params_query` to all *MetaPost and *MetaPatch requests, to allow for flexibility since those endpoints have various integration-specific query parameters.
- moved response.clone() in middleware post processing handler outside of for loop, see: https://github.com/node-fetch/node-fetch#custom-highwatermark
- added new enum handler, which exposes both the standard deserialized merge enum as well as the raw string value if none match; highlighted in the Enums section of README

# Version 2.0.6

## Date: 2022-12-29

- Added MERGE_NONSTANDARD_VALUE to all enums as the default deserialization option
- Added scopes api models and methods (beta)
- Added Ticketing category Collection model (replaces Project model gradually, both supported still)

# Version 2.0.5

## Date: 2022-12-05

- Several new query parameters for filtering our Ticketing category models
- Almost all Accounting category models have a `companyId` property now, given its widespread use
- Clarified the usage of `normalize_response` optional query param in passthrough apis
- Patch capability for the Accounting category `Account` model
- Various other minor backwards-compatible model/api tweaks

# Version 2.0.4

## Date: 2022-11-02

- `integration_params` and `linked_account_params` properties have long been a part of our POST endpoints but were missing from HRIS, Accounting and Ticketing model definitions. They are now usable.
- New query params for Ticketing category list tickets endpoint and list user endpoints. See docs.merge.dev for a full list.
- BETA - selective sync is Merge's upcoming feature to limit the amount of data ingested by dynamically setting query params or request properties to integrations to filter before it reaches Merge. This feature is under active development but the initial models are in this version. Subject to (likely minor) change. Feature limited by plan, consult your customer success contact before using.

# Version 2.0.3

- Adds the expands functionality, for certain API calls (refer to docs.merge.dev), you can add `expand: ENUM_VALUE` to change a flat id to a full sub object
- Fields that are expanded are returned as merge_sdk.JSONValue type, if you wish to deserialize it to that type you can use the `MODEL_NAMEFromJSON(raw_json_value)` methods, i.e. `CandidateFromJSON` or `EmployeeFromJSON`

# Version 2.0.2

- Build issues discovered by a customer that were patched, thank you @james-langille
- Fix readme version

# Version 2.0.1

## Date: 2022-08-02

- Update README with examples of usage for each of the categories in this sdk
- Add ATS.ApplicationsApi `applicationsChangeStageCreate` method, which updates a candidate's application from one stage to another (i.e. phone screen -> onsite)

# Version 2.0.0

## Date: 2022-07-29

- Move away from OpenAPI Generator's `typescript` generator in favor of `typescript-fetch`, which is a different set of templates that uses the js `fetch` api to make requests
- Change API classes to use request models instead of having individual params in method calls
- Instead of each category having duplicates of base api classes, pagination and remote_data we now share them
- Remove `Paginated___List` models in favor of using generics (`MergePaginatedResponse<T>`)
- Remove uses of `any` in favor of `JSONValue`, a type which matches the json language spec (albeit with `undefined` and `null` as possible values)
- add an example simple-test which calls an api from each category. Redact sensitive values.

---

# Version 1.0.1

## Date: 2022-04-22

- initial commit
