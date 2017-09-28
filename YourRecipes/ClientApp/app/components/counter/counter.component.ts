import { Component } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
    constructor(private _configService: ConfigService) { }
    ngOnInit() {
        this._configService.pageTitle.value = "Counter";
    };

    public currentCount = 0;

    public incrementCounter() {
        this.currentCount++;
    }
}
