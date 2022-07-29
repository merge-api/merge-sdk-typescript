# Version 2.0.0

## Date: 2022-07-29

- Move away from OpenAPI Generator's `typescript` generator in favor of `typescript-fetch`, which is a different set of templates that uses the js `fetch` api to make requests
- Change API classes to use request models instead of having individual params in method calls
- Instead of each category having duplicates of base api classes, pagination and remote_data we now share them
- Remove `Paginated___List` models in favor of using generics (`MergePaginatedResponse<T>`)
- Remove uses of `any` in favor of `JSONValue`, a type which matches the json language spec (albeit with `undefined` and `null` as possible values)

---

# Version 1.0.1

## Date: 2022-04-22

- initial commit
