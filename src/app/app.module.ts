import {BrowserModule}           from '@angular/platform-browser';
import {NgModule}                from '@angular/core';
import {AppRoutingModule}        from './app-routing.module';
import {AppComponent}            from './app.component';
import {FlexLayoutModule}        from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
}                                from '@angular/material';
import {ReactiveFormsModule}     from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
