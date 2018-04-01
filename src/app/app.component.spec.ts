import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DragulaModule } from 'ng2-dragula';
import { DragulaSampleComponent } from './dragula-sample/dragula-sample.component';
import { PluralisePipe } from './pluralise-pipe.pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PluralisePipe,
        DragulaSampleComponent
      ],
      imports: [
        DragulaModule
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'dragula test'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('dragula test');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to dragula test!');
  }));
});
