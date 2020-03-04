import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { firebaseConfig } from './firebase.config';

@NgModule({
  imports: [
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  exports: [ AngularFireAuthModule, AngularFireModule ]
})
export class FirebaseModule { }
