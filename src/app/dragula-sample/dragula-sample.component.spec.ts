import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DragulaModule } from 'ng2-dragula';
import { PluralisePipe } from '../pluralise-pipe.pipe';
import { DragulaSampleComponent } from './dragula-sample.component';

describe('DragulaSampleComponent', () => {
  let component: DragulaSampleComponent;
  let fixture: ComponentFixture<DragulaSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ DragulaModule ],
      declarations: [
        DragulaSampleComponent,
        PluralisePipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragulaSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
