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

    myImages: MyImage[];

    file: File;

    tag: String;

    constructor(
        private myImageService: MyImageServiceService
    )
    {}

    ngOnInit(): void {
        this.getImages();
    }

    onFileChange(event): void
    {
        this.file = event.target.files[0];
    }

    onTextChange(event): void
    {
        this.tag = event.target.value;
    }

    public getImages(): void
    {
        this.myImageService.getAllImages().subscribe(
            success =>{
                this.myImages = success;
            }
        )
    }

    onDeleteImage(myImage: MyImage): void
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

    private verifyEqual(myImage: MyImage): Boolean
    {
        for (let i = 0; i < this.myImages.length; i++)
        {
            if (this.myImages[i].public_id == myImage.public_id)
                return true;
        }
        return false;
    }

    public getCategorizedImages(): void
    {
        this.myImageService.getCategorizedImage(this.tag).subscribe(
            success => {
                this.myImages = success;
            }
        )
    }
}
