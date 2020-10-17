import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

import {tap} from 'rxjs/operators';
import {Store} from '../../../../../../store';
import * as firebase from 'firebase';
import {Observable} from 'rxjs';

import {auth} from 'firebase/app';

export interface User {
    email: string;
    uid: string;
    authenticated: boolean;
}

@Injectable()
export class AuthService {

    auth$ = this.angularFireAuth.authState
        .pipe(
            tap((next) => {
                if (!next) {
                    this.store.set('user', null);
                    return;
                }
                const user: User = {
                    email: next.email,
                    uid: next.uid,
                    authenticated: true
                };
                this.store.set('user', user);
            })
        );

    constructor(private angularFireAuth: AngularFireAuth,
                private store: Store) {
    }

    get user(): Promise<firebase.User> {
        return this.angularFireAuth.currentUser;
    }

    get authState(): Observable<firebase.User> {
        return this.angularFireAuth.authState;
    }

    // Sign in with Facebook
    loginWithFacebook(): any {
        return this.authLoginWithThirdParty(new auth.FacebookAuthProvider());
    }

    // Sign in with Google
    loginWithGoogle(): any {
        return this.authLoginWithThirdParty(new auth.GoogleAuthProvider());
    }

    createUser(email: string, password: string): any {
        return this.angularFireAuth
            .createUserWithEmailAndPassword(email, password);
    }

    loginUserWithPasswordAndEmail(email: string, password: string): any {
        return this.angularFireAuth
            .signInWithEmailAndPassword(email, password);
    }

    logoutUser(): any {
        return this.angularFireAuth.signOut();
    }

    async sendVerificationEmail(): Promise<void> {
        const currentUser = await this.angularFireAuth.currentUser;
        return currentUser.sendEmailVerification();
    }

    sendPasswordResetEmail(email: string): Promise<any> {
        return this.angularFireAuth.sendPasswordResetEmail(email);
    }

    // Auth logic to run auth providers
    private authLoginWithThirdParty(provider): any {
        return this.angularFireAuth.signInWithPopup(provider)
            .then((result) => {
                console.log('You have been successfully logged in!');
            }).catch((error) => {
                console.log(error);
            });
    }
}
