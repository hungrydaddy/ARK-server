

$(document).ready(function() {
    //todo
    setup();
});



var examples = {
    "test": {
        "API-title": "test",
        "API-example": "GET services/test, no params required <br> returns { status: 'ok!''}",
        "test-link": "/services/test"
    },
    "users_test": {
        "API-title": "users_test",
        "API-example": "GET users/test, params required <br> returns { success: 'ok' }",
        "test-link": "/users/test"
    },
    "users_show": {
        "API-title": "users_show",
        "API-example": "GET users/show <br><br> params required: <br> 'user_id' <br> This request would return user information.",
        "test-link": "/users/show?user_id=111"
    },
    "users_create": {
        "API-title": "users_create",
        "API-example": "POST users/create <br><br> params required: <br> 'email', 'nick_name', 'password_salted', 'desription'. <br> If not enough params passed thru, it will return an error msg. <br> If success, it will return back a user_id.<br><br> CANNOT test due to it's POST request.",
        "test-link": ""
    },
    "users_login": {
        "API-title": "users_login",
        "API-example": "POST users/login <br><br> params required: <br> 'email', 'password_salted'. <br> Will return a session_id if success, store it in local db.<br><br> CANNOT test due to it's POST request.",
        "test-link": ""
    },
    "users_destroy": {
        "API-title": "users_destroy",
        "API-example": "DELETE users/destroy <br><br> params required: <br> 'user_id' <br>",
        "test-link": ""
    },
    "user_contacts_show": {
        "API-title": "user_contacts_show",
        "API-example": "GET userContacts/show <br><br> params required: <br> 'user_id' <br> This request would return a user's all contacts.",
        "test-link": "/userContacts/show?user_id=111"
    },
    "user_contacts_check": {
        "API-title": "user_contacts_check",
        "API-example": "GET userContacts/check <br><br> params required: <br> 'user_id', 'contact_id' <br>",
        "test-link": "/userContacts/check?user_id=111&contact_id=222"
    },
    "user_contacts_create": {
        "API-title": "user_contacts_create",
        "API-example": "POST userContacts/create <br><br> params required: <br> 'user_id', 'contact_id' <br>",
        "test-link": ""
    },
    "user_contacts_destroy": {
        "API-title": "user_contacts_destroy",
        "API-example": "DELETE userContacts/destroy <br><br> params required: <br> 'user_id', 'contact_id' <br> deleting a user contact",
        "test-link": ""
    }
}


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}



var setup = function() {
    $(".API-title").html(examples[getParameterByName("req")]["API-title"]);
    $(".API-example").html(examples[getParameterByName("req")]["API-example"]);
    $(".test-link").attr("href", examples[getParameterByName("req")]["test-link"]);
}
