import { Component } from '@angular/core';

import { ConfigService } from '../../services/config.service';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    currentPageTitle: any;
    constructor(private _configService: ConfigService) { }
    ngOnInit() {
        this.currentPageTitle = this._configService.getPageTitle();
    };
}
