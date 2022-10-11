import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SenderComponent } from './components/sender/sender.component';
import { AcceptorComponent } from './components/acceptor/acceptor.component';
import { CommonModule } from '@angular/common';
import { LocalSwitcherComponent } from './components/local-switcher/local-switcher.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AcceptorComponent,
    SenderComponent,
    LocalSwitcherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
