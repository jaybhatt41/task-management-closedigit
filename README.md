# Task Management System

## Authentication

    1. Register User
    Request: POST
    Endpoint:http://localhost:3000/api/register
    Body (JSON):
                {
                "username":"jay",
                "email":"jay@gmail.com",
                "password":"123"
                }

    2. Login User
    Request: POST
    Endpoint:http://localhost:3000/api/login
    Body (JSON):
                {
                "email":"jay@gmail.com",
                "password":"123"
                }

## Task Management (Auth Required)

    This all are authenticated so you have to provide token in 'Authorization' menu and in that select 'Bearer Token'  and paste token there

    1. Create Task
    Request: POST
    Endpoint:http://localhost:3000/api/tasks
    Body (JSON):
                {
                "title":"abc",
                "description":"first task"
                }
    In this status of task is by defalut pending and date is added when the task is create

    2. Get All Task
    Request: GET
    Endpoint:http://localhost:3000/api/tasks
    params:
            in key value pairs add the folowing
            status : <any status>
            sort:asc or dsc
    In this you can add query parameter of status for filtering and sort it

    3. Get Single Task
    Request: GET
    Endpoint:http://localhost:3000/api/tasks/:id
   
    4. Update Task
    Request: PUT
    Endpoint:http://localhost:3000/api/tasks/:id

    5. Delete Task
    Request: Delete
    Endpoint:http://localhost:3000/api/tasks/:id


