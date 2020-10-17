import { User } from 'firebase';
import { BehaviorSubject, Observable } from 'rxjs';

import { distinctUntilChanged, pluck } from 'rxjs/operators';


export interface State {
    user: User;
    [key: string]: any;
}

const state: State = {
    user: undefined,
};

export class Store {

    private subject = new BehaviorSubject<State>(state);
    private store = this.subject.asObservable()
        .pipe(distinctUntilChanged());

    get value(): State {
        return this.subject.value;
    }

    select<T>(name: string): Observable<T> {
        return this.store
            .pipe(pluck(name));
    }

    set(name: string, stateParam: any): void {
        this.subject.next({ ...this.value, [name]: stateParam });
    }
}
