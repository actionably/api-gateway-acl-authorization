# api-gateway-acl-authorization

this is meant for use with the shared access control that
was put on the shared api-gateway project.

the need to separate this from the base authorizer is that it
will be up to the implementing lambda function to check for the
proper permissions for whatever they are trying to access. this 
should allow better flexibility and not block any sort of
permissions implementation we can think of in the future while
still allowing us to centralize some common functionality
and patterns into some library.

unfortunate side effect is that we will need to port
this implementation into multiple languages but hopefully
this code remains easy to port in part or full.

## usage

this assumes that the event coming into the lambda function 
has at least the following namely the permissions and user 
object. 


``` JSON
{
    ...
    "requestContext": {
        ...
        "authorizer": {
            "lambda": {
                "permissions": {
                    "/bots/1": [
                        "admin"
                    ],
                    "/partner/1": [
                        "owner",
                        "admin"
                    ]
                    ...
                },
                "user": {
                    "admin": 1,
                    "created": "2017-01-17T18:44:27.825Z",
                    "email": "ito@dashbot.io",
                    "expires": "2021-02-10T22:27:52.041Z",
                    "lastLogin": "2021-01-11T22:27:52.000Z",
                    "partnerId": 3772,
                    "partnerUserId": 3772
                }
            }
        },
        ...
    },
}


```
