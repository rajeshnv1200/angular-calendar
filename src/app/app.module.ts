import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule // Import routing module here
  ],
  providers: [],
  bootstrap: [] // Empty or remove this if using bootstrapApplication
})
export class AppModule {}
