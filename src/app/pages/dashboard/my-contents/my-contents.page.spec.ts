import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyContentsPage } from './my-contents.page';

describe('MyContentsPage', () => {
  let component: MyContentsPage;
  let fixture: ComponentFixture<MyContentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyContentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyContentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
