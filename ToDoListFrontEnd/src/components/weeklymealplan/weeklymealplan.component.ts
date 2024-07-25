
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,importProvidersFrom,
  ChangeDetectorRef,ModuleWithProviders
} from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';// import { CommonModule } from '@angular/common';
import {CalendarView,
  CalendarEvent,
  CalendarEventTimesChangedEvent,
  CalendarWeekViewBeforeRenderEvent,
  CalendarDayViewBeforeRenderEvent,
  CalendarModule,
  DateAdapter,
} from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';


@Component({
  selector: 'weekly-meal-plan-app',
  standalone: true,
  imports: [CommonModule, CalendarModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './weeklymealplan.component.html',
  styleUrl: './weeklymealplan.component.css',
  template:''
})
export class WeeklyMealPlanComponent {
  view: CalendarView = CalendarView.Day;

  viewDate = new Date();

  daysInWeek = 5;}





// import { CommonModule } from '@angular/common';
// import { Component,importProvidersFrom,ModuleWithProviders } from '@angular/core';
// import { bootstrapApplication } from '@angular/platform-browser';
// import {
//   CalendarEvent,
//   CalendarEventTimesChangedEvent,
//   CalendarWeekViewBeforeRenderEvent,
//   CalendarDayViewBeforeRenderEvent,
//   CalendarModule,
//   DateAdapter,
// } from 'angular-calendar';
// import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
// import { Subject } from 'rxjs';


// @Component({
//   selector: 'app-weeklymealplan',
//   standalone: true,
//   imports: [CommonModule, CalendarModule],
//   templateUrl: './weeklymealplan.component.html',
//   styleUrl: './weeklymealplan.component.css'
// })
// export class WeeklyMealPlanComponent {
//   view: string = 'week';
//   snapDraggedEvents = true;

//   dayStartHour = 6;
//   viewDate: Date = new Date();

//   events: CalendarEvent[] = [
//     {
//       title: 'Draggable event',
      
//       start: new Date(),
//       draggable: true,
//     },
//     {
//       title: 'A non draggable event',
     
//       start: new Date(),
//     },
//   ];

//   refresh: Subject<any> = new Subject();

//   eventTimesChanged({ event, newStart, newEnd }: any): void {
//     event.start = newStart;
//     event.end = newEnd;
//     this.refresh.next(null);
//   }
//   public segmentIsValid(date: Date) {
//     // valid if time is greater than 0800 andd less than 1700
//     return date.getHours() >= 8 && date.getHours() <= 17;
//   }
//   beforeDayViewRender(day: CalendarDayViewBeforeRenderEvent): void {
//     // day.body.hourGrid.forEach((hour) => {
//     //   hour.segments.forEach((segment) => {
//     //     if (!this.segmentIsValid(segment.date)) {
//     //       delete segment.cssClass;
//     //       segment.cssClass = 'cal-disabled';
//     //     }
//     //   });
//     // });
//   }
//   beforeWeekViewRender(body: CalendarWeekViewBeforeRenderEvent): void {
//     body.hourColumns.forEach((hourCol) => {
//       hourCol.hours.forEach((hour) => {
//         hour.segments.forEach((segment) => {
//           if (!this.segmentIsValid(segment.date)) {
//             delete segment.cssClass;
//             segment.cssClass = 'cal-disabled';
//           }
//         });
//       });
//     });
//   }
// }



