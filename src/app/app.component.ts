import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MyImage } from './interfaces/myImage';
import { MyImageServiceService } from './services/my-image-service.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'cloud-computing';

    file: File;

    myImages: MyImage[];

    constructor(
        private myImageService: MyImageServiceService
    )
    {}

    ngOnInit(): void {
        this.getImages();
    }

    onChange(event)
    {
        this.file = event.target.files[0];
    }

    public getImages(): void
    {
        this.myImageService.getAllImages().subscribe(
            success =>{
                this.myImages = success;
            }
        )
    }

    onDeleteImage(myImage: MyImage)
    {
        this.myImages.splice(this.myImages.indexOf(myImage), 1);
    }

    public uploadImage(): void
    {
        this.myImageService.uploadImage(this.file).subscribe(
            success => {
                if (!this.verifyEqual(success))
                    this.myImages.push(success);
            }
        );
    }

    public verifyEqual(myImage: MyImage): Boolean
    {
        for (let i = 0; i < this.myImages.length; i++)
        {
            if (this.myImages[i].public_id == myImage.public_id)
                return true;
        }
        return false;
    }
}
