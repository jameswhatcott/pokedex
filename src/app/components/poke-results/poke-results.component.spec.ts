import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeResultsComponent } from './poke-results.component';

describe('PokeResultsComponent', () => {
  let component: PokeResultsComponent;
  let fixture: ComponentFixture<PokeResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokeResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
