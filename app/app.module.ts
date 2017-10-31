import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpModule, JsonpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import { FavoritosListComponent} from './components/favoritos-list.component';
 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  //aquí van los componentes que vamos a ocupar en nuestra app
  declarations: [
    AppComponent,
    FavoritosListComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
 