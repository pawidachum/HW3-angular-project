import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ContentsComponent } from './contents/contents.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserSettingComponent } from './user-setting/user-setting.component';
import { WorkspaceSettingComponent } from './workspace-setting/workspace-setting.component';
import { DetailedContentComponent } from './detailed-content/detailed-content.component';
import { HomePreferenceComponent } from './home-preference/home-preference.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ContentsComponent,
    NavbarComponent,
    UserSettingComponent,
    WorkspaceSettingComponent,
    DetailedContentComponent,
    HomePreferenceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
