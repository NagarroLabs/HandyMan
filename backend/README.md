## Routes: 

<b>localhost:3001/api/users/</b> -> for the <b>GET</b> route (to get an array of all the users, passwords will be missing) 

<b>localhost:3001/api/users/signup</b> -> <b>POST</b> route to register

<b>localhost:3001/api/users/login</b> -> <b>POST</b> route to login 

## Examples

Example of an accepted format for <b>SIGNUP</b>

{
	"firstName": "Vlad-Valentin",
	"lastName": "Paianu",
	"email": "vlad.paianu@gmail.com",
	"password": "testing",
	"phone" : "0729313455",
	"userName" : "VladTM23",
	"gender": "Male",
	"birthDate": "<1998-03-23>"
}

Example of an accepted format for <b>LOGIN</b> after successful signup:

{
	"email": "vlad.paianu@gmail.com",
	"password": "testing"
}

Try them out in POSTMAN.
