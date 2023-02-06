const listAllBlogs = {
    tags:['Blog'],
    description:"List all Blogs",
    
    responses:{
        200:{
            description:"OK",
            content:{
                 "application/json":{
                    type:'object',
                    example:{
                        status:"success",
                        data:[]
                    }
                 }
            }
        }
    }
}

const getBlogById = {
    tags:['Blog'],
    description:"Get blog by id",
   
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of the blog",
            type:"string",
            example:"63caaf3527b29e1d399896da"
        }
    ],
    responses:{
        200:{
            description:"OK",
            content:{
                 "application/json":{
                    type:'object',
                    example:{
                        status:"success",
                        data:[]
                    }
                 }
            }
        }
    }
}

const createBlog = {
    tags:['Blog'],
    description:"Create a Blog post",
    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        title:{
                            type:"string",
                            description:"title",
                            example:"Add Title"
                        },
                        description:{
                            type:"string",
                            description:"description",
                            example:"Add Description"
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

const deleteBlogPost = {
    tags:['Blog'],
    description:"Delete the blog post by id",
   
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of the blog",
            type:"string"
        }
    ],

    responses:{
        200:{
            description:"OK",
            content:{
                 "application/json":{
                    type:'object',
                    example:{
                        status:"success",
                        data:[]
                    }
                 }
            }
        }
    }
}

const updateBlogPost = {
    tags:['Blog'],
    description:"Update a Blog post",
    
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of the blog",
            type:"string"
        }
    ],
    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        title:{
                            type:"string",
                            description:"title",
                            example:"Update Title"
                        },
                        description:{
                            type:"string",
                            description:"description",
                            example:"Update Description"
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

exports.blogRouteDocs = {
    "/api/post/add":{
        post:createBlog
    },
    "/api/post/fetch":{
        get:listAllBlogs
    },
    "/api/post/getone/{id}":{
        get:getBlogById
    },
    "/api/post/delete/{id}":{
        delete:deleteBlogPost
    },
    "/api/post/update/{id}":{
        patch:updateBlogPost
    }
    
}