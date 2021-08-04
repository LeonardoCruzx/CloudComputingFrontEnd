import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { MyImage } from 'src/app/interfaces/myImage';
import { MyImageServiceService } from 'src/app/services/my-image-service.service';

@Component({
    selector: 'app-my-image-component',
    templateUrl: './my-image-component.component.html',
    styleUrls: ['./my-image-component.component.css']
})
export class MyImageComponentComponent implements OnInit {


    @Input('myImage') myImage: MyImage

    @Output() deleted = new EventEmitter<MyImage>();

    myImageWithEffect: String

    constructor(
        private myImageService: MyImageServiceService
    ) { }

    ngOnInit() {

    }

    public getMyImageWithEffect(): void
    {
        this.myImageService.getImageWithEffect(this.myImage.public_id.split("/")[0], this.myImage.public_id.split("/")[1]).subscribe(
            success => {
                this.myImageWithEffect = success;
            }
        );
    }

    public delete(): void
    {
        this.myImageService.deleteMyImage(this.myImage.public_id).subscribe(
            sucess => {
                this.deleted.emit(this.myImage);
                alert("deletado com sucesso!");
            }
        )
    }

}
