# Employee-registration

A back-end application for employees managements

## About

betAPI is a back-end application with which you can easily manage a employee system.

## Deploy

[click here](https://employee-registration-page.vercel.app/) to access the application

## Endpoints
### Participants 
- *GET /employees?name=any name&departmentId=department number* </br>
In case none query params is informed this endpoint return an array with all employees registered in the system.</br>
It's possible to inform the employee name and/or its department id and the application return an array containing the employees that match this informations.</br>
Result:
```json
[
  {
    "id": number,
    "name": string,
    "salary": number, // salary value in cents
    "cpf": string, //just numbers
    "dateOfBirth": date, //as ISOstring
    "createdAt": date, //as ISOstring
    "updatedAt": date, //as ISOstring
    "Department": {
      "id": number,
      "name": string,
      "createdAt": date, //as ISOstring
      "updatedAt": date //as ISOstring
    },
  {...}
  },
]
```

- *POST /employees* </br>
This endpoint creates a new employee (register it)</br>
The body for this request should have the format:
```json
{
  "name": string,
  "cpf": string, //just numbers
  "salary": number, // salary value in cents
  "dateOfBirth": date, //as ISOstring
  "departmentId": number
}
```
The endpoint responds with the creted employee informations</br>
Result:
```json
{
  "id": number,
  "name": string,
  "cpf": string, //just numbers
  "salary": number, // salary value in cents
  "dateOfBirth": date, //as ISOstring
  "createdAt": date, //as ISOstring
  "updatedAt": date, //as ISOstring
  "departmentId": number
}
```

- *PUT /employees/:employeeId* </br>
This endpoint update an existing employee</br>
The body for this request should have the format:
```json
{
  "name": string,
  "cpf": string, //just numbers
  "salary": number, // salary value in cents
  "dateOfBirth": date, //as ISOstring
  "departmentId": number
}
```
The endpoint responds with the updated employee informations</br>
Result:
```json
{
  "id": number,
  "name": string,
  "cpf": string, //just numbers
  "salary": number, // salary value in cents
  "dateOfBirth": date, //as ISOstring
  "createdAt": date, //as ISOstring
  "updatedAt": date, //as ISOstring
  "departmentId": number
}
```

- *DELETE /employees/:employeeId* </br>
This endpoint delete an existing employee</br>
The id of the employee that is gonna be deleted should be informed as a query string</br>
The endpoint responds with the deleted employee informations</br>
Result:
```json
{
  "id": number,
  "name": string,
  "cpf": string, //just numbers
  "salary": number, // salary value in cents
  "dateOfBirth": date, //as ISOstring
  "createdAt": date, //as ISOstring
  "updatedAt": date, //as ISOstring
  "departmentId": number
}
```

### Departments 
- *POST/departments* </br>
This endpoint creates a department (register it)</br>
The body for this request should have the format:
```json
{
  "name": string
}
```
The endpoint responds with the creted department informations</br>
Result:
```json
{
  "id": number,
  "name": string,
  "createdAt": date, //as ISOString
  "updatedAt": date //as ISOString
}
```
- *GET /departments* </br>
This endpoint return an array with all departments registered in the system.</br>
Result:
```json
[
  {
    "id": number,
    "name": string,
    "createdAt": date, //as ISOString
    "updatedAt": date //as ISOString
  },
  {...}
]
```

## How to run for development

1. Clone this repository
2. Install all dependencies

```bash
npm i
```

3. Create a PostgreSQL database with whatever name you want
4. Configure the `.env` file using the `.env.example` file 
5. Run all migration

```bash
npx prisma migrate dev
```

6. Run the back-end application in a development enviroment:

```bash
npm run dev
```
