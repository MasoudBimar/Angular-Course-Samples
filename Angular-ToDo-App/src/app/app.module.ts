import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoModuleModule } from './to-do-module/to-do-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToDoModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
