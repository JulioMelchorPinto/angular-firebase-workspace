import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
// import routing module
import { AppRoutingModule } from './app-routing.module';
// import modules from firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
// import layouts modules
import { DefaultModule } from './layouts/default/default.module';
import { FullwidthModule } from './layouts/fullwidth/fullwidth.module';
import { IdentityModule } from './areas/identity/identity.module';

// import ngx-bootstrap modules
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// import authorization service
import { AuthService } from './shared/services/auth.service';
// import environments
import { environment } from '../environments/environment';
//import { OrdersComponent } from './areas/pages/coffee/orders/orders.component';
//import { OrderListComponent } from './areas/pages/coffee/order-list/order-list.component';


@NgModule({
  declarations: [
    AppComponent,
 //   OrdersComponent,
 //   OrderListComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DefaultModule,
    FullwidthModule,
    IdentityModule,
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, //imports firebase/firestore, only needed for database features
    AngularFireAuthModule, //imports firebase/auth, only needed for auth features
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
