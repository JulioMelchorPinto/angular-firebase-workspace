import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from '../../material-module';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    MaterialModule
  ],
  exports:[
    NavigationComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    NotFoundComponent
  ]
})
export class SharedModule { }
