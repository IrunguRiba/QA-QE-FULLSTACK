import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterPageComponent } from './twitter-page.component';

describe('TwitterPageComponent', () => {
  let component: TwitterPageComponent;
  let fixture: ComponentFixture<TwitterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwitterPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwitterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
