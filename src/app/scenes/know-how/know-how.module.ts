import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KnowHowComponent} from './know-how.component';
import {KnowHowRoutingModule} from './know-how-routing.module';


@NgModule({
    declarations: [KnowHowComponent],
    imports: [
        CommonModule,
        KnowHowRoutingModule
    ]
})
export class KnowHowModule {
}
