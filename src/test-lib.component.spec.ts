/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { TestLibComponent } from './test-lib.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestLibComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(TestLibComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render hello world in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(TestLibComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Hello World!!');
  }));
});
