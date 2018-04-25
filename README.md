# Sport-Team-Scheduler
  An app using react for sport team schedule to be used by coaches and parents

## This app is made primarily for time and schedule management between coaches and parents of the players in one specific sport. It has the following functionality:

- Allows coach to create a roster, schedule for the practices, games, and snack schedule.
- Has schedule of practice, games, and snack schedule 
- Allows for direct message between parents and coach 
- Allows coach to assign snacks 
- Shows directions to games etc.
- Shows weather in area of game

## Team Members and Division of Work
1. Shirley Ramirez - Chat functionalities, Database for chat
2. Kassie Erickson - UI Design
3. Derrick Reyes - Google APIs, Schedule
4. Bryant Duncan - Weather API and Roster Schedule

## Technology Used:
1. Socket.io - enables real time bi-directional event-based communication. Used in the chat functionalies
2. Reactjs - used in UI Design framework
3. Axios - a promised-based Http client for javascript used in front-end application and node.js back-end
4. react-dom - render react element into the DOM in the supplied container and return a reference to the component
5. redux - JavaScript framework for managing and maintaining application state usually used in conjunction with other frameworks to build         applications. Store: Refers to the application state container for the entire application. Used for storing log-in data.
6. react-google-maps - used for map direction. A component written over a small set of the Google Maps API. It allows you to render any           React component on the Google Map
7. mongodb - database, stores data in flexible-JSON like documents
8. mongoose - orm, a javascript library for mongodb
9. express - unopinionated web framework, written in JavaScript and hosted within the node.js runtime environment
10. body-parser - Node.js body parsing middleware, allows express to read the body and then parse that into a Json object 
11. react-materiali-component for the web - used for the UI design
12. react-forecast- used for displaying of weather
13. trello - used for task management

## Deployment:
1. This app was deployed using heroku. See link below:
    https://agile-stream-27904.herokuapp.com/

## How the app works:
1. Log-in/Sign-up page. Allows a parent or a coach to enter information.
![screen shot 2018-04-25 at 11 14 30 am](https://user-images.githubusercontent.com/31137669/39264554-00214f60-487a-11e8-9e6d-5385287003e6.png)

2. Parent/Coach Log-in Page
![screen shot 2018-04-25 at 11 17 26 am](https://user-images.githubusercontent.com/31137669/39264656-45cf96b6-487a-11e8-80a8-1f225ffc6220.png)

3. Parent/Coach Sign-up Page
![screen shot 2018-04-25 at 11 19 19 am](https://user-images.githubusercontent.com/31137669/39264776-8c903dee-487a-11e8-86e0-e8291045ff59.png)

4. Parents will be directed to these page after they log-in-sign up
![screen shot 2018-04-25 at 11 24 53 am](https://user-images.githubusercontent.com/31137669/39265140-5a7e2fae-487b-11e8-9a2e-7845cf41ab33.png)

5. Coach will be directed to these page after log-in/sign-up
![screen shot 2018-04-25 at 11 27 56 am](https://user-images.githubusercontent.com/31137669/39265280-bd796f74-487b-11e8-9dfd-7383095a293a.png)

6. Coach Can create Roster and Schedules
![screen shot 2018-04-25 at 11 29 22 am](https://user-images.githubusercontent.com/31137669/39265367-f24e0994-487b-11e8-940c-77260140e413.png)

![screen shot 2018-04-25 at 11 30 14 am](https://user-images.githubusercontent.com/31137669/39265406-0c4d2f3c-487c-11e8-9df3-64c6d4ccc27d.png)

7. Parents can View Roster and Schedules
![screen shot 2018-04-25 at 11 31 08 am](https://user-images.githubusercontent.com/31137669/39265461-2caa393c-487c-11e8-8577-ca2c67aa9cd7.png)

![screen shot 2018-04-25 at 11 31 47 am](https://user-images.githubusercontent.com/31137669/39265500-43edcfc8-487c-11e8-8614-8a5b8dbc9b39.png)

9. And Last but not the least, a chat community page where coach and parents can exhange messages. In these page when a member enter the chat page, they will be joined automatically in the chat group. Once they change page, they will be disconnected from the chat group.
![screen shot 2018-04-25 at 11 32 37 am](https://user-images.githubusercontent.com/31137669/39265550-62ae07c0-487c-11e8-9dce-b03f39c62316.png)

### Struggles encountered:
1. Passport Authentication. We were supposed to add authentication but unfortunately had a hard time implementing it. Time was not enough so at the end of the timeline, we decided to drop it.
2. Merge conflict. Merging different file using github was a task to resolve at first. But we managed to implement rules between ourselves. We had individual branches for the four of us, a test branch and a master branch for deploymnet. After our respective files are working, we can push it to test branch and that's where we will pull for each branch for update. 
3. Figuring out how to use and implement react, redux, react material and socket.io. Reading documentation helps tremendously. 

## Authors
Shirley Ramirez -  https://github.com/shirleymramirez
Kassi Erickson - 
Bryant Duncan - https://github.com/Beduncan
Derrick Reyes - https://github.com/kooldrmony

Copyright 2018 April
