import {Component, OnInit} from '@angular/core';
import {AuthService, User} from '../shared/services/auth/auth.service';
import {Router} from '@angular/router';
import {Store} from '../../../../store';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-verify-email-address',
    templateUrl: './verify-email-address.component.html',
    styleUrls: ['./verify-email-address.component.scss']
})
export class VerifyEmailAddressComponent implements OnInit {

    error: string;
    user$: Observable<User>;
    userData: User;

    constructor(private authService: AuthService,
                private router: Router,
                private store: Store) {
    }

    ngOnInit(): void {
        this.user$ = this.store.select<User>('user');
        this.user$.subscribe((user) => {
            this.userData = user;
        })
    }

    async sendVerificationMail(): Promise<any> {
        try {
            await this.authService.sendPasswordResetEmail(this.userData?.email);
            this.router.navigate(['/']);
        } catch (error) {
            console.error('Original error message: ' + error.message);
            this.error = 'Sajnos nem sikerült elküldeni a megerősítő emailt';
        }
    }
}
