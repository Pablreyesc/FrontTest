import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenDetailsComponent } from './imagen-details.component';

describe('ImagenDetailsComponent', () => {
  let component: ImagenDetailsComponent;
  let fixture: ComponentFixture<ImagenDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagenDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
