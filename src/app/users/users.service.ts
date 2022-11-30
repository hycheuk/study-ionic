import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { Injectable } from '@angular/core'; 
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.entities';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url: string = environment.backendUrl; // change url in environments.ts file
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient,
    private httpMobile: HTTP,
  ) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url+'users', this.httpOptions)
    .pipe(
      catchError(this.handleError<User[]>('getUsers', []))
    );
  }

  getUsers2() {
    // cordova http plugin
    this.httpMobile.get(this.url+'users', {}, this.httpOptions)
    .then(data => {
      console.log(data.status);
      console.log(data.data);
      console.log(data.headers);
    }).catch(error => {
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
    });
  }

  create(user: CreateUserDto) {
    return this.http.post<User>(this.url+'users', user, this.httpOptions)
    .pipe(
      catchError(this.handleError<User>('create'))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
