//adding some auth logic in this file
/***************************
 * POST = /createuser     user sign up
 ****************************/

 function userSignUp(){
     let userName = document.getElementById('userSignUp').value;//here, we grab the value of the user/password data from the 'createuser' input field in the index.html file
     let userPass = document.getElementById('passSignUp').value;
     console.log(userName, userPass);

     let newUserData = {user:{username: userName, password: userPass}};//the variables used to store the sign up info from the DOM get passed into the values of the 'username' and 'password' properties. we package everything up in a user object
     fetch('http://localhost:3000/api/user/createuser', {
         method: 'post',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(newUserData)//in the request object in our fetch() call, we pass the 'newUserData' variable to be sent off in the body of our request to the server
     })
     .then(response => response.json())
     .then(function (response) {
         console.log(response.sessionToken);
         let token = response.sessionToken;//we get the 'sessionToken' from the response and store it in a 'token' variable
         localStorage.setItem('SessionToken', token);//in our 'localStorage', we call the 'setItem' function and store the token in 'localStorage'. this will keep our token safely stored in our local window
     });

 };

 /************************************
  * USER SIGN IN   post  api/user/signin
  ***************************************/
 function userSignIn(){
     let userName = document.getElementById('userSignin').value;
     let userPass = document.getElementById('passSignin').value;
     console.log(userName, userPass);

     let userData = {user: {username: userName, password: userPass}};
     fetch('http://localhost:3000/api/user/signin', {
         method: 'post',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(userData)//in the request objss teh 'ny of ourrver
     })
     .then(response => response.json())
     .then(function (response) {
         console.log(response.sessionToken);
         let token = response.sessionToken;//we get the 'sessionToken' from the response and store it in a 'token' variable
         localStorage.setItem('Session Token', token);// in our 'localStorage', we call the 'setItem' function and store the token in 'localStorage'. this will keep our token safely stored in our local window
     });
 };

 /**************************
  * HELPER FUNCTION FOR TOKEN
  ***************************/

  function getSessionToken(){
      var data = localStorage.getItem('SessionToken');
      console.log(data);
      return data;
  };
  