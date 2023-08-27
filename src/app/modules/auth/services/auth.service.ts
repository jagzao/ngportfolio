import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from 'src/app/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?offset=1&num=20'

  constructor(private http: HttpClient) {}

  getUser(alias: string): Observable<User> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((response: any) => {
        console.log(response);
        return new User(1, 'Juan Zambrano', 'type', '@', '', 'user');
      }),
      catchError((error: any) => {
        console.log(error);
        return throwError(() => error);
      })
    );
  }  
}
