import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/calendar', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: '**', redirectTo: '/calendar' } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


