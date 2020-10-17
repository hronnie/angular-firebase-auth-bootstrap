import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

import {AuthService} from '../shared/services/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {

    error: string;

    constructor(private authService: AuthService,
                private router: Router) {
    }

    async loginUserWithPasswordAndEmail(event: FormGroup): Promise<any> {
        const {email, password} = event.value;
        try {
            await this.authService.loginUserWithPasswordAndEmail(email, password);
            this.router.navigate(['/']);
        } catch (error) {
            this.error = 'Sajnos nem sikerült a bejelentkezés. Felhasználó név vagy a jelszó nem megfelelő';
        }
    }

    async loginUserWithFacebook(): Promise<any> {
        try {
            await this.authService.loginWithFacebook();
            this.router.navigate(['/']);
        } catch (error) {
            console.error('Original error message: ' + error.message);
            this.error = 'Sajnos nem sikerült a Facebook-os bejelentkezés';
        }
    }

    async loginUserWithGoogle(): Promise<any> {
        try {
            await this.authService.loginWithGoogle();
            this.router.navigate(['/']);
        } catch (error) {
            console.error('Original error message: ' + error.message);
            this.error = 'Sajnos nem sikerült a Facebook-os bejelentkezés';
        }
    }

}
