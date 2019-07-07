import { Component,ViewChild, TemplateRef } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import timeGrigPlugin from '@fullcalendar/timegrid';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';//modal

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private modalService: BsModalService) {}
  rangepicker:Boolean;
  modalRef: BsModalRef;
  calendarEvents:any;
  calendarPlugins = [dayGridPlugin,listPlugin,timeGrigPlugin];
  title = 'Fullcalendar';
  /*calendarEvents = [
    { title: 'event 1', date: '2019-07-01' }
  ];*/

  /*AddEvent(template: TemplateRef<any>,type) {
    this.rangepicker=type;
    this.modalRef = this.modalService.show(template,{class: 'modal-lg'});
  }*/
  AddMonthlyevent(){
	  var date = new Date(); 
	  this.calendarEvents=[{
      title: 'Monthly Event',
      start: new Date(date.getFullYear(), date.getMonth(), 1),
      end: new Date(date.getFullYear(), date.getMonth() + 1, 0),
	  allDay:true
    }
	  ];
	  
  }
  AddDailyEvent()
  {
	  var date = new Date(); 
	  this.calendarEvents=[{
      title: 'Daily Event',
      start: new Date(),
      //end: new Date(date.getFullYear(), date.getMonth() + 1, 0),
	  allDay:true
    }
	  ]; 
  }

}
