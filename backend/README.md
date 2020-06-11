## Routes:

#### For users

<b>localhost:3001/api/users/</b> -> for the <b>GET</b> route (to get an array of all the users, passwords will be missing)

<b>localhost:3001/api/users/:userId</b> -> <b>GET</b> route to get particular user by Id

<b>localhost:3001/api/users/signup</b> -> <b>POST</b> route to register

<b>localhost:3001/api/users/login</b> -> <b>POST</b> route to login

<b>localhost:3001/api/users/update/:userId</b> -> <b>PATCH</b> route to update user information by Id (only works if you are that specific user)

#### For jobs

<b>localhost:3001/api/jobs/new</b> -> <b>POST</b> route to add a new Job (authentication is required)

<b>localhost:3001/api/jobs/edit/:jobId</b> -> <b>PATCH</b> route to edit existing Job (authentication is required)

<b>localhost:3001/api/jobs/delete/:jobId</b> -> <b>DELETE</b> route to delete Job (authentication is required)

## Examples

#### For users

Example of an accepted format for <b>SIGNUP</b>

{ "firstName": "Vlad-Valentin", "lastName": "Paianu", "email": "vlad.paianu@gmail.com", "password": "testing", "phone" : "0729313455", "userName" : "VladTM23", "gender": "Male", "birthDate": "<1998-03-23>" }

Example of an accepted format for <b>LOGIN</b> after successful signup:

{ "email": "vlad.paianu@gmail.com", "password": "testing" }

###### Patch example

You first need to set up your <b>HEADERS</b> in POSTMAN:

Content-Type: application/json Authorization: "JWT [insertTokenGeneratedFromSignupOrLoginHere] "

Example of an accepted format for patch (after setting the correct header for the particular user you want to update):

{ "firstName": "Ion", "lastName": "Pop", "phone": "0722581728", "birthDate": "<1999-05-17>" }

#### For jobs

Example of an accepted format for <b>ADDING JOB</b>: 

{
	"jobName": "Designer",
	"jobDescription": "Eye for innovative art.",
	"jobCategory": "Design",
	"jobBudget": "2000",
	"jobStartDate": "2020-07-01",
	"jobCompletionTimeFrame": "2020-09-01",
	"jobReqSkills": ["Good design foundations","Good negociator","Eye for innovation"],
	"jobDifficulty": 4,
	"jobCountry": "Romania",
	"jobCity": "Timisoara",
	"jobAddress": "Timisoara, Bulevardul Eroilor de la Tisa, Nr. 63"
}

<b> You also need to set the Authentication header, just as in the patch example in order to add a job.</b>

Same JSON input for editing a job.

Try them out in POSTMAN.


