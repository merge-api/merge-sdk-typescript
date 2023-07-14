import * as merge_sdk from '../src/index'
import { Configuration, JSONValue, MergePaginatedResponseFromJSON, querystring } from '../src/index';
import fetch from 'node-fetch'
import { EmployeeFromJSON } from '../src/hris';
import { get } from 'http';

// note this is skipped for CI, just here for reference
test.skip("can call ATS api", async () => {
    /*
    REDACTED TEST CONFS
    */

    let test_conf = new Configuration({
        apiKey: "REDACTED",
        accessToken: "REDACTED"
    });

    // accounting utility call
    let acct_api = new merge_sdk.ATS.AccountDetailsApi(test_conf)

    let response = await acct_api.accountDetailsRetrieve().catch((reason) => {
        console.log(reason);
    })
    console.log(response)

    expect(response).toBeDefined()

    // ats candidates call
    let cand_api = new merge_sdk.ATS.CandidatesApi(test_conf)

    let response2 = await cand_api.candidatesList({}).catch((reason) => {
        console.log(reason);
    })
    console.log(response2?.results)
    
    expect(response2).toBeDefined()
});

// note this is skipped for CI, just here for reference
test.skip("can call CRM api", async () => {
    /*
    REDACTED TEST CONFS
    */

    let test_conf_crm = new Configuration({
        apiKey: "REDACTED",
        accessToken: "REDACTED"
    });

    // crm call
    let con_api = new merge_sdk.CRM.ContactsApi(test_conf_crm)

    let response4 = await con_api.contactsList({
    })

    console.log(response4)
    expect(response4).toBeDefined()
});

// note this is skipped for CI, just here for reference
test.skip("can call HRIS api", async () => {
    /*
    REDACTED TEST CONFS
    */

    let test_conf_hris = new Configuration({
        apiKey: "REDACTED",
        accessToken: "REDACTED"
    });

    // hris employees call w query
    let emp_api = new merge_sdk.HRIS.EmployeesApi(test_conf_hris)

    let response3 = await emp_api.employeesList({
        expand: [merge_sdk.HRIS.EmployeesListExpandEnum.Company, merge_sdk.HRIS.EmployeesListExpandEnum.Team]
    })

    expect(response3).toBeDefined()
    console.log(response3?.results?.[0]?.company)
});

// note this is skipped for CI, just here for reference
test.skip("can call ticketing api", async () => {
    /*
    REDACTED TEST CONFS
    */

    let test_conf_ticketing = new Configuration({
        apiKey: "REDACTED",
        accessToken: "REDACTED"
    });

    // ticketing call
    let tick_api = new merge_sdk.Ticketing.TicketsApi(test_conf_ticketing)

    let response5 = await tick_api.ticketsList({
    })

    console.log(response5)
    expect(response5).toBeDefined()

    // fetch next page of tickets
    expect(response5?.next).toBeDefined()

    let response6 = await tick_api.ticketsList({
        cursor: response5?.next as string
    })

    console.log(response6)
    expect(response6).toBeDefined()
    expect(response6?.previous).toBeDefined()
});

test.skip("can override fetchApi in the configuration", async () => {
    /*
    REDACTED TEST CONFS
    */

    let test_conf_crm = new Configuration({
        apiKey: "REDACTED",
        accessToken: "REDACTED",
        fetchApi: fetch
    });

    // crm call
    let contacts_api = new merge_sdk.CRM.ContactsApi(test_conf_crm)

    let response = await contacts_api.contactsList({
    })

    console.log(response)
    expect(response).toBeDefined()
})

test("can deserialize unknown enum values", async () => {
    let ticket_json: JSONValue = {"status": "unknown_ticket_status"}

    let ticket_deserialized = merge_sdk.Ticketing.TicketFromJSON(ticket_json)

    expect(ticket_deserialized?.status).toBeDefined()
    expect(ticket_deserialized?.status?.value).toEqual(merge_sdk.Ticketing.TicketStatusEnumValues.MERGE_NONSTANDARD_VALUE)
    expect(ticket_deserialized?.status?.rawValue).toEqual("unknown_ticket_status")
})

test("can deserialize known enum values", async () => {
    let employment_json: JSONValue = {"employment_type": merge_sdk.HRIS.EmploymentTypeEnumValues.FullTime}

    let employment_deserialized = merge_sdk.HRIS.EmploymentFromJSON(employment_json)

    expect(employment_deserialized?.employment_type).toBeDefined()
    expect(employment_deserialized?.employment_type?.value).toEqual(merge_sdk.HRIS.EmploymentTypeEnumValues.FullTime)
    expect(employment_deserialized?.employment_type?.rawValue).toEqual(merge_sdk.HRIS.EmploymentTypeEnumValues.FullTime)
})

test("query params use comma-separated-value format", async() => {
    let serialized_query_params = querystring({
        "expand": ["a", "b", "c"],
        "single": 1
    });

    expect(serialized_query_params).toEqual("expand=a,b,c&single=1");
})

test("deserializing paginated values runs per-item deserialize function", async() => {
    const employee_list_json: JSONValue = {
        "next": "cursor_next",
        "previous": "cursor_previous",
        "results": [{
            "id": "0958cbc6-6040-430a-848e-aafacbadf4ae",
            "remote_id": "19202938",
            "employee_number": "2",
            "company": "8d9fd929-436c-4fd4-a48b-0c61f68d6178",
            "first_name": "Greg",
            "start_date": "2020-10-11T00:00:00Z",
            "remote_created_at": "2020-10-11T00:00:00Z",
            "employment_status": "INACTIVE",
        }]
    }

    const deserialized_page = MergePaginatedResponseFromJSON(employee_list_json, EmployeeFromJSON)

    expect(deserialized_page?.results).toBeDefined()
    expect(deserialized_page?.results?.length).toBe(1)
    expect(deserialized_page?.results?.[0]?.start_date instanceof Date).toBe(true)
})


test.skip("can call Ticketing Download api", async () => {
    /*
    REDACTED TEST CONFS
    */
    let test_conf_ticketing = new Configuration({
        apiKey: "",
        accessToken: ""
    });
    let get_attachments = new merge_sdk.Ticketing.AttachmentsApi(test_conf_ticketing)
    let response = await get_attachments.attachmentsList({})

    // ticketing attachment download call w query
    let emp_api = new merge_sdk.Ticketing.AttachmentsApi(test_conf_ticketing)
    let response3 = await emp_api.attachmentsDownloadRetrieve({id: "[add attachment id]"})
    expect(response3).toBeDefined()
});