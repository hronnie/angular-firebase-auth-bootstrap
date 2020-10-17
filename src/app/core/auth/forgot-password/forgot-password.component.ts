import {Component, OnInit} from '@angular/core';
import {AuthService} from '../shared/services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

    error: string;

    constructor(private authService: AuthService,
                private router: Router) {
    }

    ngOnInit(): void {
    }

    async sendForgotPasswordEmail(email: string): Promise<any>  {
        try {
            await this.authService.sendPasswordResetEmail(email);
            this.router.navigate(['/']);
        } catch (error) {
            console.error('Original error message: ' + error.message);
            this.error = 'Sajnos nem sikerült a Facebook-os bejelentkezés';
        }
    }

}
