// import { TestBed } from '@angular/core/testing';

// import { AuthService } from './auth.service';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { User } from '../models/users.model';

// const expectedUser = new User(
//   7,
//   'michael.lawson@reqres.in',
//   'Michael',
//   'Lawson',
//   'https://reqres.in/img/faces/7-image.jpg',
// );

// fdescribe('AuthService', () => {
//   let service: AuthService;
//   let httpTestingController: HttpTestingController;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule]
//     });
//     service = TestBed.inject(AuthService);
//     httpTestingController = TestBed.inject(HttpTestingController)
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });

//   it('login debe funcionar', (done) => {
//     service.login({
//       email: 'fakeemail@email.com',
//       password: '123456'
//     }).subscribe((user) => {
//       expect(user).toEqual(expectedUser)
//       done();
//     })

//     httpTestingController.expectOne({
//       url: `${service.apiUrl}/login`,
//       method: 'POST',
//     }).flush(
//       {
//         token: 'QpwL5tke4Pnpja7X2'
//       }
//     );

//     httpTestingController.expectOne({
//       url: `${service.apiUrl}/users/1`,
//       method: 'GET'
//     }).flush({
//       data: {
//         id: 7,
//         email: 'george.bluth@reqres.in',
//         first_name: 'George',
//         last_name: 'Bluth',
//         avatar: 'https://reqres.in/img/faces/1-image.jpg'
//       },
//       support: {
//         url: 'https://reqres.in/#support-heading',
//         text: 'To keep ReqRes free, contributions towards server costs are appreciated!'
//       }
//     })
//   })
// });