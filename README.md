# GoogleHomeSleepTimer
I always used a sleep timer calculater but I was lazy to always check on my phone and go to sleepyti.me and set an alarm. Why not use Google Home and use the voice control.  In this project, I used DialogFlow for NLP and ML. DiaglogFlow did all the hardwork for NLP and ML. I just had to write few node.js code to get it working.

# Math Behind the Sleep Time Calculator
 Sleep is very important to us and to feel fresh in the morning, we should sleep on time.  To get a healthy good night sleep, it consists of 5-6 sleep cycles.  Each sleep cycle consists of roughly 90 minutes.  The math is very simple here. Time is parsed according to the timezone and converted everything to minutes. Then, 90 minutes\*( 5 or 6) + 15 minute + time_parsed is performed to give respective time to wake up. Here we added extra 15 minute to give the person extra time to fall asleep. On average, human require 15 minute to fall asleep. You can find more about this [here](https://en.wikipedia.org/wiki/Sleep_cycle).

## Things you an say ( CURRENTLY TESTING ) 
You can say: 
-  __"*What time should I wake up ?*"__

## Sample Conversation
- *"Okay Google! Talk to Sleep Timer"*
  - *"Sure! Here is the Test Version of Sleep Timer"*
- *"Hello! Welcome to Sleep Timer Calculator"*
  - *" What time should I wake up tomorrow"*
- *"Good time to wake up tomorrow would be 6:02 or 7:32"*

__Note that time is in 24 HR format.__
