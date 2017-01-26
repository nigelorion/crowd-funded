import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {masterFirebaseConfig} from './api-keys';
import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import { HomeComponent } from './home/home.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { routing } from './app.routing';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
