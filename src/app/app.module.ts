import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { MyImageComponentComponent } from './components/my-image-component/my-image-component.component';

@NgModule({
    declarations: [AppComponent, MyImageComponentComponent],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
