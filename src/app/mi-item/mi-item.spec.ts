import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiItem } from './mi-item';

describe('MiItem', () => {
  let component: MiItem;
  let fixture: ComponentFixture<MiItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
