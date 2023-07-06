import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './global/header/header.component';
import { FooterComponent } from './global/footer/footer.component';
import { BurguerMenuComponent } from './global/header/burguer-menu/burguer-menu.component';

import { IconUserComponent } from './global/header/icon-user/icon-user.component';
import { NavIconComponent } from './global/footer/nav-icon/nav-icon.component';
import { LoginComponent } from './characters/components/login/login.component';

import { FamiliesComponent } from './characters/components/families/families.component';
import { PopupComponent } from './characters/components/login/popup/popup.component';
import { Details2Component } from './characters/components/details-2-families/details2.component';
import { Details2addpopupComponent } from './characters/components/details-2-families/details-2-families-addpopup/details2addpopup.component';
import { ListComponent } from './characters/components/list/list.component';
import { ListaddComponent } from './characters/components/list/list-species-add/listadd.component';
import { ListpopupComponent } from './characters/components/list/list-species-popup/listpopup.component';
import { AnimaldetailsComponent } from './characters/components/animaldetails/animaldetails.component';
import { EditAnimalsComponent } from './characters/components/animaldetails/edit-animals-details/edit-animals.component';
import { Details2familiesComponent } from './views/details-2-families/details2families.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BurguerMenuComponent,
    IconUserComponent,
    NavIconComponent,
    LoginComponent,
    FamiliesComponent,
    PopupComponent,
    Details2Component,
    Details2addpopupComponent,
    ListComponent,
    ListaddComponent,
    ListpopupComponent,
    AnimaldetailsComponent,
    EditAnimalsComponent,
    Details2familiesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
