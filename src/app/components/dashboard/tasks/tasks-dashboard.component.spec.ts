import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksDashboardComponent } from './tasks-dashboard.component';

describe('TasksDashboardComponent', () => {
  let component: TasksDashboardComponent;
  let fixture: ComponentFixture<TasksDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasksDashboardComponent]
    });
    fixture = TestBed.createComponent(TasksDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
