import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from '@pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    PagesModule
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule {}
