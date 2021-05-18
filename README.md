# Slash

This project will help you create valid and update a profile


## Build Project

`docker build -t "api-server" .`
## Run Project

`docker-compose up`
## Stop Project

`docker-compose down`



## CREATE 
### profile

endpoint to create a profile

**POST** `/api/profile`

**Body**
{
    "nameUser": "",
    "email": "",
    "gender": "",
    "bio": "",
    "photo": ""
}

**Response**

**status:** 201

```
{
    "success": true,
    "id": "",
    "message": "Profile created!"
}
```

## GET 
### profile

endpoint to get a profile by email

**GET** `/api/profile/hluisfernando1@gmail.com`

**Response**

**status:** 200

```
{
    "success": true,
    "data": {
        "_id": "",
        "nameUser": "",
        "email": "",
        "gender": "",
        "bio": "",
        "photo": "",
        "createdAt": "",
        "updatedAt": "",
        "__v": 
    }
}
```

## PUT 
### profile

endpoint to update a profile

**POST** `/api/profile/60a3501d38e19a22769c90f4`

**Body**
{
    "nameUser": "",
    "email": "",
    "gender": "",
    "bio": "",
    "photo": ""
}

**Response**

**status:** 200

```
{
    "success": true,
    "id": "",
    "message": "Profile updated!"
}
```






The `/api` endpoint not require authorization (jwt).