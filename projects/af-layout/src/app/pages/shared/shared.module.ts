import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutModule } from '@angular/cdk/layout';
//import { NavigationComponent } from './navigation/navigation.component';
//import { MatToolbarModule } from '@angular/material/toolbar';
//import { MatButtonModule } from '@angular/material/button';
//import { MatSidenavModule } from '@angular/material/sidenav';
//import { MatIconModule } from '@angular/material/icon';
//import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
//    NavigationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    LayoutModule,
 //   MatToolbarModule,
 //   MatButtonModule,
 //   MatSidenavModule,
 //   MatIconModule,
 //   MatListModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
 //   NavigationComponent,
  ]
})
export class SharedModule { }