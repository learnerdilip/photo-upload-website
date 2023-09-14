import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatedImagesComponent } from './paginated-images.component';

describe('PaginatedImagesComponent', () => {
  let component: PaginatedImagesComponent;
  let fixture: ComponentFixture<PaginatedImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginatedImagesComponent]
    });
    fixture = TestBed.createComponent(PaginatedImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
