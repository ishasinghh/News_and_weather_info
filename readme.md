### Steps to run this project

1. Do `npm install` to install all the required packages.
2. Do `npm start` to start the project.
3. This project contains the following APIs 
        
     >1. Register API: POST http://localhost:3000/api/v1/register
     >2. Login API: POST http://localhost:3000/api/v1/login
     >3. Profile Access: GET http://localhost:3000/api/v1/profile
     >4. Logout API: GET http://localhost:3000/api/v1/logout
     >5. Fetch news API:  GET http://localhost:3000/api/v1/news
     >6. Search news API: POST http://localhost:3000/api/v1/search
     >7. Weather API: POST http://localhost:3000/api/v1/weather
    
     #### To access the news api go to the `https://newsapi.org/` and click on `Get API Key` and update the .env file with your api key.

4. Do `npm run test` to run all the test
5. You can run individual test case by `npm run test testName`. testName will be the name of the test file.
