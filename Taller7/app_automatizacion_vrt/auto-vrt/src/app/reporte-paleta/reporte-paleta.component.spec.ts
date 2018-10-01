import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportePaletaComponent } from './reporte-paleta.component';

describe('ReportePaletaComponent', () => {
  let component: ReportePaletaComponent;
  let fixture: ComponentFixture<ReportePaletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportePaletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportePaletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
