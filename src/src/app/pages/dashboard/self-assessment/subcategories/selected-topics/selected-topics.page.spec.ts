import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectedTopicsPage } from './selected-topics.page';

describe('SelectedTopicsPage', () => {
  let component: SelectedTopicsPage;
  let fixture: ComponentFixture<SelectedTopicsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedTopicsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectedTopicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
