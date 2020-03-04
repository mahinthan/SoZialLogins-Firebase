import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.user = this.afAuth.authState
  }

  ngOnInit() {
    this.user.subscribe(user => console.log('User After Subscription: ', user));
  }

  loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .catch(function (error) {
        alert(`${error.message} Please try again`);
      });
  }

  loginWithFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .catch(function (error) {
        alert(`${error.message} Please try again`);
      });
  }

  loginWithGithub() {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GithubAuthProvider())
      .catch(function (error) {
        alert(`${error.message} Please try again`);
      });
  }

  loginWithTwitter() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider())
      .catch(function (error) {
        alert(`${error.message} Please try again`);
      });
  }

  logout() {
    console.log(this.user);
    this.afAuth.auth.signOut();
  }

}
