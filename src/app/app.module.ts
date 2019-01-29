import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import { AppComponent } from './app.component';
import { NotebookComponent } from './components/notebook/notebook.component';
import { PageComponent } from './components/page/page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatSidenavModule,MatToolbarModule,MatTabsModule,MatListModule, MatIconModule, MatButtonModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {Database} from './database';
import{NoteService} from './services/note-service.service';
import { PagelistComponent } from './components/pagelist/pagelist.component';
import { NotelistComponent } from './components/notelist/notelist.component';
import { PageDataComponent } from './components/page-data/page-data.component';

@NgModule({
  declarations: [
    AppComponent,
    NotebookComponent,
    PageComponent,
    SidebarComponent,
    PagelistComponent,
    NotelistComponent,
    PageDataComponent

  ],
  providers: [NoteService],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(Database, {
      delay: 0
    }),
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
