

const createUser = {
tags:['User'],
description:"Create a User",
requestBody:{
    content:{
        "application/json":{
            schema:{
                type:"object",
                properties:{
                    username:{
                        type:"string",
                        description:"user name",
                        example:"Add User"
                    },
                    email:{
                        type:"string",
                        description:"user email",
                        example:"Enter Email"
                    },
                    password:{
                        type:"string",
                        description:"Type Your Password",
                        example:"12345"
                    },
                   
                }
            }
        }
    }
},
responses:{
    200:{
        description:"OK",
        content:{
            "application/json":{
                type:"object",
                example:{
                    status:"success",
                    data:[]
                }
            }
        }
    }
}
}



exports.userRouteDocs = {
"/api/auth/register":{
    post:createUser,
}
}