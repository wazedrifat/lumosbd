import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StartExamPage } from './start-exam.page';

describe('StartExamPage', () => {
  let component: StartExamPage;
  let fixture: ComponentFixture<StartExamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartExamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StartExamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
