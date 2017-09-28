import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MdSidenavModule, MdToolbarModule, MdIconModule, MdButtonModule, MdCardModule, MdListModule } from '@angular/material';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { ProfileCardComponent } from './components/profilecard/profilecard.component';
import { ConfigService } from './services/config.service';

@NgModule({
    providers: [ConfigService],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        ProfileCardComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        MdSidenavModule,
        MdToolbarModule,
        MdIconModule,
        MdButtonModule,
        MdCardModule,
        MdListModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent},
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
