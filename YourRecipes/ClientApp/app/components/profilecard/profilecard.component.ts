import { Component } from '@angular/core';

@Component({
    selector: 'profile-card',
    templateUrl: './profilecard.component.html',
    styleUrls: ['./profilecard.component.css']
})
export class ProfileCardComponent {
    userProfile = {
        name: "John Doe",
        email: "john.doe@gmail.com",
        photo: "http://icons.veryicon.com/ico/System/Artists%20Valley%20Sample/Business%20Man%20Blue.ico"
    }
}
