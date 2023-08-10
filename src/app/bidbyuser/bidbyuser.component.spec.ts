import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidbyuserComponent } from './bidbyuser.component';

describe('BidbyuserComponent', () => {
  let component: BidbyuserComponent;
  let fixture: ComponentFixture<BidbyuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BidbyuserComponent]
    });
    fixture = TestBed.createComponent(BidbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
