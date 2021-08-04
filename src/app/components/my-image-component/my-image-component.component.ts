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

    myImageTransformed: String

    constructor(
        private myImageService: MyImageServiceService
    ) { }

    ngOnInit() {
    }

    public getTransformedImage(): void
    {
        this.myImageService.getImageWithEffect(this.myImage.public_id.split("/")[0], this.myImage.public_id.split("/")[1]).subscribe(
            success => {
                this.myImageTransformed = success;
            }
        );
    }



}
