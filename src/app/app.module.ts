import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {MdUniqueSelectionDispatcher} from "@angular2-material/core";
import  {MdSidenavModule} from "@angular2-material/sidenav";
import {MdToolbarModule} from "@angular2-material/toolbar"
import {MdButtonModule} from '@angular2-material/button';
import {MdListModule} from '@angular2-material/list';
import {MdIconModule, MdIconRegistry} from '@angular2-material/icon';
import {RouterModule} from "@angular/router";
import {ProfileComponent} from "./profile/profile.component";
import {BookComponent} from  "./books/book.component";
import {MagazineComponent} from "./magazines/magazine.component";
import {HomeComponent} from "./home/home.component";
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    BookComponent,
    MagazineComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path: 'profile', component: ProfileComponent},
      {path: 'books', component: BookComponent},
      {path: 'magazines', component: MagazineComponent},
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]),
    MdIconModule,
    MdListModule,
    MdSidenavModule,
    MdToolbarModule,
    MdButtonModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [
  ],
  providers: [MdUniqueSelectionDispatcher, MdIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { }
