import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreAppComponent } from './store-app.component';

describe('StoreAppComponent', () => {
  let component: StoreAppComponent;
  let fixture: ComponentFixture<StoreAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
