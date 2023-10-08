import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenListComponent } from './imagen-list.component';

describe('ImagenListComponent', () => {
  let component: ImagenListComponent;
  let fixture: ComponentFixture<ImagenListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
