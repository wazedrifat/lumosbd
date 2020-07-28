import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GenerateExamsPage } from './generate-exams.page';

describe('GenerateExamsPage', () => {
  let component: GenerateExamsPage;
  let fixture: ComponentFixture<GenerateExamsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateExamsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GenerateExamsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
