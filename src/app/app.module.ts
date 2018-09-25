import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//components
import { AppComponent } from './app.component';
import {UserCardComponent} from './components/user/user-card/user-card.component';
import {UserInfoComponent} from './components/user/user-info/user-info.component';

//services
import {UserService} from "./components/user/user.service";


@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    UserService
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
