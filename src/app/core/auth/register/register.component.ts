import {Component, NgZone} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../shared/services/auth/auth.service';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})
export class RegisterComponent {

    error: string;


    constructor(private authService: AuthService,
                private router: Router,
                private ngZone: NgZone) {
    }

    async registerWithEmail(event: FormGroup): Promise<any> {
        try {
            const {email, password} = event.value;
            await this.authService.createUser(email, password);
            await this.authService.sendVerificationEmail();
            this.router.navigate(['/']);
        } catch (error) {
            console.error('Original error message: ' + error.message);
            this.error = 'Sajnos nem sikerült a Facebook-os bejelentkezés';
        }
    }
}
