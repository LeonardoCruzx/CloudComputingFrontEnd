import { Component, Input, OnInit } from '@angular/core';
import { MyImage } from 'src/app/interfaces/myImage';
import { MyImageServiceService } from 'src/app/services/my-image-service.service';

@Component({
    selector: 'app-my-image-component',
    templateUrl: './my-image-component.component.html',
    styleUrls: ['./my-image-component.component.css']
})
export class MyImageComponentComponent implements OnInit {

    @Input('myImage') myImage: MyImage

    constructor(
        private myImageService: MyImageServiceService
    ) { }

    ngOnInit() {
    }



}
