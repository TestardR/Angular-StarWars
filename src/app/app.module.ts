import { LogService } from './services/log.service';
import { StarWarsService } from './services/star-wars.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ListComponent } from './components/list/list.component';
import { ItemComponent } from './components/item/item.component';
import { CreateCharacterComponent } from './components/create-character/create-character.component';

@NgModule({
  declarations: [AppComponent, TabsComponent, ListComponent, ItemComponent, CreateCharacterComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [StarWarsService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule {}
