import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './components/component-index';
import { ToDoListCompletedCountPipe } from './pipes/to-do-list-completed-count.pipe';
import { ToDoListCountPipe } from './pipes/to-do-list-count.pipe';
import { ToDoListFilterPipe } from './pipes/to-do-list-filter.pipe';
import { ToDoListPendingCountPipe } from './pipes/to-do-list-pending-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoListCountPipe,
    ToDoListCompletedCountPipe,
    ToDoListPendingCountPipe,
    ToDoListFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
