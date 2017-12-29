import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app.routing';
import { RouterModule } from '@angular/router';
import { NameMeanComponent } from './name-mean/name-mean.component';
import { AngularFireModule} from 'angularfire2';
import { AuthService } from './providers/auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: 'AIzaSyA0s4aW2BhhyG-rmfMrkHu3BLrP0dWeJUg',
  authDomain: 'fb-entertainment.firebaseapp.com',
  databaseURL: 'https://fb-entertainment.firebaseio.com',
  projectId: 'fb-entertainment',
  storageBucket: 'fb-entertainment.appspot.com',
  messagingSenderId: '386604790321'
};

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NameMeanComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'universal-demo-v5' }),
    HttpClientModule,
    RouterModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserTransferStateModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
