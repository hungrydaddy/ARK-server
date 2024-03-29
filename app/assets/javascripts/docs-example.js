

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
        "API-example": "GET users/show <br><br> params required: <br> 'email' <br> This request would return user information.",
        "test-link": "/users/show?email=111"
    },
    "users_all": {
        "API-title": "users_all",
        "API-example": "GET users/all <br><br> params required: nothing <br> This request would return all users.",
        "test-link": ""
    },
    "users_create": {
        "API-title": "users_create",
        "API-example": "POST users/create <br><br> params required: <br> 'email', 'nick_name', 'password_salted', 'description'. <br> If not enough params passed thru, it will return an error msg. <br> If success, it will return back a user_id.<br><br> CANNOT test due to it's POST request.",
        "test-link": ""
    },
    "users_login": {
        "API-title": "users_login",
        "API-example": "POST users/login <br><br> params required: <br> 'email', 'password_salted'. <br> Will return a session_id if success, store it in local db.<br><br> CANNOT test due to it's POST request.",
        "test-link": ""
    },
    "users_check": {
        "API-title": "users_check",
        "API-example": "GET users/check <br><br> params required: <br> 'email', 'session_id'.<br>checks whether a user is logged in or not",
        "test-link": ""
    },
    "users_check": {
        "API-title": "users_check",
        "API-example": "GET users/check <br><br> params required: <br> 'email', 'session_id'. <br> checks whether login is valid",
        "test-link": ""
    },
    "users_destroy": {
        "API-title": "users_destroy",
        "API-example": "DELETE users/destroy <br><br> params required: <br> 'user_id' <br>",
        "test-link": ""
    },
    "user_contacts_show": {
        "API-title": "user_contacts_show",
        "API-example": "GET userContacts/show <br><br> params required: <br> 'email' <br> This request would return a user's all contacts.",
        "test-link": "/userContacts/show?user_id=111"
    },
    "user_contacts_check": {
        "API-title": "user_contacts_check",
        "API-example": "GET userContacts/check <br><br> params required: <br> 'user_email', 'contact_email' <br>",
        "test-link": "/userContacts/check?user_id=111&contact_id=222"
    },
    "user_contacts_create": {
        "API-title": "user_contacts_create",
        "API-example": "POST userContacts/create <br><br> params required: <br> 'user_email', 'contact_email' <br>",
        "test-link": ""
    },
    "user_contacts_destroy": {
        "API-title": "user_contacts_destroy",
        "API-example": "DELETE userContacts/destroy <br><br> params required: <br> 'user_email', 'contact_email' <br> deleting a user contact",
        "test-link": ""
    },
    "direct_show": {
        "API-title": "direct_show",
        "API-example": "GET direct/show <br><br> params required: <br> 'email'.<br>returns all direct conversations and their info",
        "test-link": ""
    },
    "direct_create": {
        "API-title": "direct_create",
        "API-example": "POST direct/create <br><br> params required: <br> 'user1_email', 'user2_email' <br> creates a new conversation",
        "test-link": ""
    },
    "group_show": {
        "API-title": "group_show",
        "API-example": "GET group/show <br><br> params required: <br> 'email'.<br>returns all groups a user have",
        "test-link": ""
    },
    "group_members": {
        "API-title": "group_members",
        "API-example": "GET group/members <br><br> params required: <br> 'email'.<br>return all group mmebers of all groups that a user is related to",
        "test-link": ""
    },
    "group_locations": {
        "API-title": "group_locations",
        "API-example": "GET group/locations <br><br> params required: <br> 'group_id'.<br>returns all group member's locations",
        "test-link": ""
    },
    "group_create": {
        "API-title": "group_create",
        "API-example": "POST group/create <br><br> params required: <br> 'email', 'group_name'.<br>returns a group id",
        "test-link": ""
    },
    "group_add": {
        "API-title": "group_add",
        "API-example": "POST group/add <br><br> params required: <br> 'email', 'group_id'.<br>add a user into a group",
        "test-link": ""
    },
    "group_delete": {
        "API-title": "group_delete",
        "API-example": "DELETE group/delete <br><br> params required: <br> 'email', 'group_id'.<br>delete a user in a group",
        "test-link": ""
    },
    "group_search": {
        "API-title": "group_search",
        "API-example": "GET group/search <br><br> params required: <br> 'group_name'.<br> returns all group ids with the input group name",
        "test-link": ""
    },
    "groupProfile_show": {
        "API-title": "groupProfile_show",
        "API-example": "GET groupProfile/show <br><br> params required: <br> 'group_id'.<br> returns profile of a group",
        "test-link": ""
    },
    "message_show": {
        "API-title": "message_show",
        "API-example": "GET message/show <br><br> params required: <br> 'conversation_id'.<br>returns all messages",
        "test-link": ""
    },
    "message_create": {
        "API-title": "message_create",
        "API-example": "POST message/create <br><br> params required: <br> 'conversation_id', 'message_body', 'email' <br> send a new message to a convo",
        "test-link": ""
    },
    "locations_update": {
        "API-title": "locations_update",
        "API-example": "POST locations/update <br><br> params required: <br> 'email', 'lat', 'lng' <br> updating a user's location info",
        "test-link": ""
    },
    "waypoint_show": {
        "API-title": "waypoint_show",
        "API-example": "GET waypoint/show <br><br> params required: <br> 'group_id' <br> gives back a group's waypoint info",
        "test-link": ""
    },
    "waypoint_create": {
        "API-title": "waypoint_create",
        "API-example": "POST waypoint/show <br><br> params required: <br> 'email', 'lat', 'lng', 'group_id' <br> creates a new waypoint for a group",
        "test-link": ""
    },
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
