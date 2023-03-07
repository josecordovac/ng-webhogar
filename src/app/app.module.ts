import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonsModule } from './commons/commons.module';
import { CoreModule } from './core/core.module';

import { defineCustomElements} from '../../eve-st-components/dist/loader';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OverlayModule } from './commons/services/overlay/overlay.module';
//import { TDPStorageModule } from './core/storeage/storagemodule';
// import { TDPStorageModule } from 'ionic-cache-with-meta';


// tdp core: localstorage-ok, sqlite-no, indexeddb-ok, websql-ok
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    CommonsModule,
    CoreModule,
    OverlayModule.forRoot(),
    // TDPStorageModule.forRoot({
    //   name: '__TPD',
    //   storeName: '__DB',
    //   dbKey: '__KEY',
    //   driverOrder: ['localstorage', 'websql', 'indexeddb' ]
    // }),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  exports: [
    CommonsModule,
  ],
  bootstrap: [AppComponent]
})


export class AppModule {}
defineCustomElements(window);
