import { Title } from '@angular/platform-browser';
import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

    private pageTitle = { value: '' };

    constructor(private titleService: Title) { }

    getPageTitle(): any {
        return this.pageTitle;
    }

    setPageTitle(newTitle: string): void {
        this.pageTitle.value = newTitle;
        this.titleService.setTitle(newTitle + " - Your recipes");
    }
}