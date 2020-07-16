# 05 Third-Party APIs: Work Day Scheduler

Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

![day planner demo](./assets/Work-Day-Scheduler.gif)

## Version History

work-day-scheduler_v1.0 - Formatted page layout to go along with my typical assignment styling (style.css lines 1-4, 9-33, 48-53, 58-60, 64-69, 75-91, 114-115, 125-140). Added nav-bar, sticky footer, and 2 example time blocks to the day scheduler for styling pourposes (index.html lines 38-43, 60-82, 91-97); Created a blank javascript file, and added javascript relative path (index.html line 106).

work-day-scheduler_v1.1 - Added functionality to the save buttons by saving to localStorage on save button click events (script.js lines 10-20). Added a for loop that runs once at the beginning of my script, to populate any feilds that had text saved previously (this way saved text will polulate after refresh events)(script.js lines 2-7).

work-day-scheduler_v1.2 - Added colorSchedule function to set apropriate time-based color scheme to the scheduler. This function adds and removes classes "past", "present", "future" to color the text area background of each time block depending on the time value (in hours) of Moment.js (script.js lines 31-73); The colorSchedule function is called upon initialization of the script, and periodically every 10 seconds with the setInterval method (script.js lines 2 &5); Set the border radii of the "past", "present", "future" classes to mathch the time block container radius (this was causing a discontinuity of the shceduler's time block borders while not applied)(style.css lines 99, 107, 115).

work-day-scheduler_v1.3 - Added the date to the jumbotron (Note: continuously updated every 10 sec)(script.js line 36); Added padding of 20px to the top and bottom of the scheduler to reduce the size of the jumbotron container (style.css line 50).

## Wish list

create "save all", and "clear all" button.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.