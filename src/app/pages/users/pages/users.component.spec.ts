import { UsersComponent } from './users.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersServiceMock } from 'src/app/core/mocks/users.service.mock';
import { UsersService } from 'src/app/core/services/users.service';

fdescribe('testing de users Comp', () => {

  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let usService: UsersService
  let userSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: UsersService,
          useClass: UsersServiceMock
        }
      ]
    })
      .compileComponents()
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    usService = TestBed.inject(UsersService)
    userSpy = spyOn(usService, 'loadUsers').and.callThrough()
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load array on init', () => {
    component.ngOnInit();
    expect(userSpy).toHaveBeenCalled()
  })
})