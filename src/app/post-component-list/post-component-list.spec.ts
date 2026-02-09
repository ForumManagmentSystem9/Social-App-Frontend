import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponentList } from './post-component-list';

describe('PostComponentList', () => {
  let component: PostComponentList;
  let fixture: ComponentFixture<PostComponentList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostComponentList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostComponentList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
