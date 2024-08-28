import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatGridListModule, 
    MatCardModule,
  ] // Ensure necessary modules are imported
})
export class CalendarComponent {
changeMonth(arg0: number) {
throw new Error('Method not implemented.');
}
handleDateClick(_t66: any) {
throw new Error('Method not implemented.');
}
onDateChange($event: MatDatepickerInputEvent<any,any>) {
throw new Error('Method not implemented.');
}
  title = 'Calendar';
  daysInMonth: number[] = [];
  currentDate = new Date();
  currentMonth: string;
  currentYear: number;
daysOfWeek: any;
dates: any;

  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-GB');
    this.currentMonth = this.currentDate.toLocaleString('default', { month: 'long' });
    this.currentYear = this.currentDate.getFullYear();

    this.generateDaysInMonth();
  }

  generateDaysInMonth() {
    const days = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDate();
    this.daysInMonth = Array.from({ length: days }, (_, i) => i + 1);
  }

  isToday(day: number): boolean {
    const today = new Date();
    return (
      today.getDate() === day &&
      today.getMonth() === this.currentDate.getMonth() &&
      today.getFullYear() === this.currentDate.getFullYear()
    );
  }
}
