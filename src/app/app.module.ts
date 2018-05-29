import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//Other Modules
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { AppRoutingModule } from './app-routing/app-routing.module';

//Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { LoaderComponent } from './loader/loader.component';

//Services
// import { TaskService } from './task.service';
// import { LoaderService } from './loader.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TaskListComponent,
    TaskEditComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    NgxDnDModule,
    AppRoutingModule
  ],
  entryComponents: [TaskEditComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
