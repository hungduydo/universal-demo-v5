import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransferState, makeStateKey, Title, Meta } from '@angular/platform-browser';
import { AuthService } from './providers/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import { Subject } from 'rxjs/Subject';
import { Game } from '../models/game';
const DOGS_KEY = makeStateKey('dogs');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app';
  dogs: any;
  items: Observable<Game[]>;
  constructor(
    private http: HttpClient,
    private state: TransferState,
    private authService: AuthService,
    private titleService: Title,
    private metaService: Meta,
    public afAuth: AngularFireAuth,
    public afDb: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.dogs = this.state.get(DOGS_KEY, null as any);

    // if (!this.dogs) {
    //   this.http
    //     .get('https://dog.ceo/api/breeds/list/all')
    //     .subscribe(data => {
    //       this.dogs = data;
    //       this.state.set(DOGS_KEY, data as any);
    //     });
    // }

    this.titleService.setTitle('My server side rendered title!');
    this.metaService.addTag({name: 'description', content: 'My server side rendered description'});
    this.afAuth.auth.onAuthStateChanged(user => {
      // Load all feature
      console.log('User login changed ' + user);
      if (user) {
        // const size$ = new Subject<string>();
        // const queryObservable = size$.switchMap(size =>
        //   this.afDb.list('/apps', ref => ref.orderByChild('createOn')).valueChanges()
        // );

        // // subscribe to changes
        // queryObservable.subscribe(queriedItems => {
        //   console.log(queriedItems);
        // });

        // // trigger the query
        // size$.next('large');

        this.items = this.afDb.list('apps').valueChanges() as Observable<Game[]>;
      }
    });
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }

}
