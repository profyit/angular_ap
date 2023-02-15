import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { ToolbarModule } from 'primeng/toolbar';
import { ProgressBarModule } from 'primeng/progressbar';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { ContextMenuModule } from 'primeng/contextmenu';
import { MultiSelectModule } from 'primeng/multiselect';
import { DialogModule } from 'primeng/dialog';
import { SliderModule } from 'primeng/slider';
import { CalendarModule } from 'primeng/calendar';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { MessageService, ConfirmationService } from 'primeng/api';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { MaterialModules } from '../material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardRoutes } from './dashboard.routing';
import { ChartistModule } from 'ng-chartist';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';

import { PanelMenuModule } from 'primeng/panelmenu';

import {InputTextModule} from 'primeng/inputtext';

import {   CheckboxModule} from 'primeng/checkbox';
import {  PanelModule } from 'primeng/panel';


import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {OrderListModule} from 'primeng/orderlist';

import {SplitterModule} from 'primeng/splitter';

import { ContactUsComponent } from './Pages/company-test/mytest/Components/contact-us/contact-us.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModules,
    FlexLayoutModule,
    ChartistModule,
    RouterModule.forChild(DashboardRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
    PanelMenuModule,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    FormsModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    TabViewModule,
    CheckboxModule,
    OrderListModule,
    HttpClientModule,
    FormsModule,
    SplitterModule,
    PanelModule
  ],
  declarations: [

   
    ContactUsComponent
  ],
    providers: [MessageService,ConfirmationService,DatePipe]
})
export class DashboardModule {}
