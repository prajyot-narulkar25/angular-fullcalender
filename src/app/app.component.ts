import { Component,ViewChild } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import timeGrigPlugin from '@fullcalendar/timegrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //@ViewChild('calendar') calendarComponent: FullCalendarComponent;

  calendarPlugins = [dayGridPlugin,listPlugin,timeGrigPlugin];
  title = 'Fullcalendar';
  calendarEvents = [
    { title: 'event 1', date: '2019-07-01' }
  ];

  /*addEvent() {
    this.calendarEvents = this.calendarEvents.concat({ // creates a new array!
      { title: 'event 2', date: '2019-04-02' }
    });
  }

  modifyTitle(eventIndex, newTitle) {
    let calendarEvents = this.calendarEvents.slice(); // a clone
    let singleEvent = Object.assign({}, calendarEvents[eventIndex]); // a clone
    singleEvent.title = newTitle;
    calendarEvents[eventIndex] = singleEvent;
    this.calendarEvents = calendarEvents; // reassign the array
  }
   handleDateClick(arg) { // handler method
    alert(arg.dateStr);
  }
    someMethod() {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.next();
  }*/
}
