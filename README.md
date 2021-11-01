## Are you feeling confused with the bad AWS Documentation ? 😩
Don't worry. I did, too ! That's when I started exploring how to get the functionality of Cognito working in React.

This is a simple project I made to test out the workings of AWS Cognito's JavaScript SDK. 
<br>I am not a frontend developer, so I didn't make anything for the designs. <br>This is just supposed to be a working demo, meant to be used as a reference for the **functionality** of the project.

# How to run the Project 💻
It's just a 3 step process (assuming you have AWS Cognito User Pools set up already) :

1. Open your IDE (or `cd` into the directory) and create a new **`.env`** file.

<img width="300" alt="Screenshot 2021-11-01 at 5 52 17 PM" src="https://user-images.githubusercontent.com/46837998/139671028-586b2244-5880-4681-b4a6-7c91741c0021.png">

2.Inside the file, add two variables (`REACT_APP_USER_POOL_ID` & `REACT_APP_CLIENT_ID`) using key values from the AWS Cognito dashboard.

<img width="500" alt="Screenshot 2021-11-01 at 5 52 30 PM" src="https://user-images.githubusercontent.com/46837998/139671398-adb45ffd-d3e7-48ca-be65-87ac7def1aad.png">

3. Run `npm install && npm start` and you can begin exploring !

## What is in it ? 📲
It has 5 components of Cognito : Signup, Login, Session Status, Change Password, Change Email.

(NOTE : The verification should be set to "Link" as I don't have any design/code for OTP verification)

<img width="183" alt="Screenshot 2021-11-01 at 6 01 59 PM" src="https://user-images.githubusercontent.com/46837998/139671859-9434a754-1828-4596-97db-4277f0ccd4eb.png">
