import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {NgRedux,NgReduxModule} from '@angular-redux/store'
import { AppComponent } from './app.component';
import {IAppState,rootReducer,INITIAL_STATE} from './store';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,AngularFontAwesomeModule,NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
  constructor(ngRedux : NgRedux<IAppState>){
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
  
}
