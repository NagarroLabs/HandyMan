## Routes:

<b>localhost:3001/api/users/</b> -> for the <b>GET</b> route (to get an array of all the users, passwords will be missing)

<b>localhost:3001/api/users/:userId</b> -> <b>GET</b> route to get particular user by Id

<b>localhost:3001/api/users/signup</b> -> <b>POST</b> route to register

<b>localhost:3001/api/users/login</b> -> <b>POST</b> route to login

<b>localhost:3001/api/users/update/:userId</b> -> <b>PATCH</b> route to update user information by Id (only works if you are that specific user)

## Examples

Example of an accepted format for <b>SIGNUP</b>

{ "firstName": "Vlad-Valentin", "lastName": "Paianu", "email": "vlad.paianu@gmail.com", "password": "testing", "phone" : "0729313455", "userName" : "VladTM23", "gender": "Male", "birthDate": "<1998-03-23>" }

Example of an accepted format for <b>LOGIN</b> after successful signup:

{ "email": "vlad.paianu@gmail.com", "password": "testing" }

Try them out in POSTMAN.

### Patch example

You first need to set up your <b>HEADERS</b> in POSTMAN:

Content-Type: application/json Authorization: "JWT [insertTokenGeneratedFromSignupOrLoginHere] "

Example of an accepted format for patch (after setting the correct header for the particular user you want to update):

{ "firstName": "Ion", "lastName": "Pop", "phone": "0722581728", "birthDate": "<1999-05-17>" }

## ENV Variables

Create a .env file in the backend folder and add:

<details>
	<summary>Spoiler warning</summary>
	
	DB_PASS=ligaaclabs
	TOKEN_ENCRYPTION=SantaClausIsComingToTown
</details>
