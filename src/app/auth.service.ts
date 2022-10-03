import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 /* api = 'https://localhost:3000/api';

  token;

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string) {
    this.http.post(this.url + '/authenticate', { email: email, password: password })
      .subscribe((resp: any) => {
        //redirecionamos al usuario a su perfil
        this.router.navigate(['profile']);
        //guardamos el token en localStorage
        localStorage.setItem('auth_token', resp.token);
      })
  };
  //para cerrar sesión eliminamos el token del localStorage
  logout() {
    localStorage.removeItem('token');
  }

  //un servicio para verificar si existe la sesión
  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }*/
}

