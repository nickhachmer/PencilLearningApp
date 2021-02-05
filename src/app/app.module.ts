import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ColorPickerModule } from 'ngx-color-picker';

import { AppComponent } from './app.component';
import { FabricAppComponent } from './fabric-app.component';


@NgModule({
  declarations: [
    AppComponent,
    FabricAppComponent
  ],
  imports: [
    BrowserModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
