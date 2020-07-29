import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardviewPage } from './cardview.page';

describe('CardviewPage', () => {
  let component: CardviewPage;
  let fixture: ComponentFixture<CardviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
