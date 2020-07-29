import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyStatsPage } from './my-stats.page';

describe('MyStatsPage', () => {
  let component: MyStatsPage;
  let fixture: ComponentFixture<MyStatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyStatsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyStatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
