import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFermeComponent } from './detail-ferme.component';

describe('DetailFermeComponent', () => {
  let component: DetailFermeComponent;
  let fixture: ComponentFixture<DetailFermeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailFermeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailFermeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
