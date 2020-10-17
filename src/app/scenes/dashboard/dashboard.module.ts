import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {CardsModule, IconsModule} from 'ng-uikit-pro-standard';


@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        CardsModule,
        IconsModule
    ]
})
export class DashboardModule {
}
