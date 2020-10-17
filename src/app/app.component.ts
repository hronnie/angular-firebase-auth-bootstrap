import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Observable, Subject} from 'rxjs';
import {takeUntil, tap} from 'rxjs/operators';
import {AuthService, User} from './core/auth/shared/services/auth/auth.service';
import {Store} from '../store';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'easypeasy';

    user$: Observable<User>;
    destroy$: Subject<boolean> = new Subject();

    constructor(private store: Store,
                private router: Router,
                private authService: AuthService) {
    }

    ngOnInit(): void {
        this.authService.auth$
            .pipe(
                takeUntil(this.destroy$)
            )
            .subscribe();

        this.user$ = this.store.select<User>('user');
    }

    // tslint:disable-next-line:typedef
    async onLogout() {
        await this.authService.logoutUser();
        this.router.navigate(['/auth/login']);
    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
