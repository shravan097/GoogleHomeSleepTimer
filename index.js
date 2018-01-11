'use strict';

process.env.DEBUG = 'actions-on-google:*';
const App = require('actions-on-google').DialogflowApp;
const functions = require('firebase-functions');

//  the action name from the make_name Dialogflow intent
const NAME_ACTION = 'calculate_time';



exports.sleepTimer = functions.https.onRequest((request, response) => {
  const app = new App({request, response});
  console.log('Request headers: ' + JSON.stringify(request.headers));
  console.log('Request body: ' + JSON.stringify(request.body));


// The function that calculates sleep cycle
// Only Works for Eastern Time
  function calculateTime (app) {

    let myDate= calcTime("-5"); //Eastern time right now
    let myHour= myDate.getHours();
    let myMinute= myDate.getMinutes();

    //Converting All the time in terms of minutes
    let currentInMinutes = (myHour*60) + myMinute;

    //Give 15 minute extra for person to go to sleep
    const PREPARE_TO_SLEEP = 15;

    //A good sleep consists of 5-6 sleeping cycles.
    //A cycle is 90 minutes long.

    let goodTimeToSleep = [];
    goodTimeToSleep[0] = convert_raw_minutes((5*90) + currentInMinutes + PREPARE_TO_SLEEP);
    goodTimeToSleep[1] = convert_raw_minutes((6* 90) + currentInMinutes + PREPARE_TO_SLEEP);
    

    function calcTime(offset) {
        // create Date object for current location
        var d = new Date();

        // convert to msec
        // subtract local time zone offset
        // get UTC time in msec
        var utc = d.getTime() - (d.getTimezoneOffset() * 60000);

        // create new Date object for different city
        // using supplied offset
        var nd = new Date(utc + (3600000*offset));

        // return time as a string
        return nd;
    }

    //Function to convert raw minutes to Hour:Minute Format Military Time
    function convert_raw_minutes(time)
    {
      let updatedTime = time % 1440;  //1440 is total minutes in a day
      let hours = Math.floor(updatedTime/60);
      let minute = updatedTime % 60 ;
      return hours+":"+minute;
    }

    app.tell("Good time to wake up would be " + goodTimeToSleep[0]+ " or "+ goodTimeToSleep[1]);

  }
  // build an action map, which maps intent names to functions
  let actionMap = new Map();
  actionMap.set(NAME_ACTION, calculateTime);


app.handleRequest(actionMap);
});