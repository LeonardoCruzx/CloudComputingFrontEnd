import { Component, OnInit } from '@angular/core';
import { MyImage } from './interfaces/myImage';
import { MyImageServiceService } from './services/my-image-service.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'cloud-computing';

    myImages: MyImage[];

    constructor(
        private myImageService: MyImageServiceService
    )
    {}

    ngOnInit(): void {
        this.getImages();
    }

    public getImages(): void
    {
        this.myImageService.getAllImages().subscribe(
            success =>{
                this.myImages = success;
            }
        )
    }
}
