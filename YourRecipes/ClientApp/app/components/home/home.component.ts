import { Component } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    constructor(private _configService: ConfigService) { }
    ngOnInit() {
        this._configService.pageTitle.value = "Home";
    };
}
