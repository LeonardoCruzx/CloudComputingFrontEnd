import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyImageComponentComponent } from './my-image-component.component';

describe('MyImageComponentComponent', () => {
  let component: MyImageComponentComponent;
  let fixture: ComponentFixture<MyImageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyImageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyImageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
