/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { Ng2FloatBtnComponent } from './ng2-float-btn.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        Ng2FloatBtnComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(Ng2FloatBtnComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render hello world in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(Ng2FloatBtnComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Hello World!!');
  }));
});
