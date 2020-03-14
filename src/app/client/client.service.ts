import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map, retry } from 'rxjs/operators';

import { Client } from './client';

@Injectable({
    providedIn: 'root'
})
export class ClientService {
    //Url
    private clientUrl = 'https://ipgc.findsolucoes.com.br/client';

    constructor(private http: HttpClient) { }

    //Post Method to create a client
    createClient(client: Client): Observable<Client> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        client.id = null;
        return this.http.post<Client>(this.clientUrl, client, { headers })
          .pipe(
            tap(data => console.log('createClient: ' + JSON.stringify(data))),
            catchError(this.handleError)
          );
    }

    //Get Method to get all clients
    getClients(): Observable<Client[]> {
        return this.http.get<Client[]>(this.clientUrl)
          .pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
          );
    }
    
    //Method to filter a client
    getClient(id: number): Observable<Client | undefined> {
        return this.getClients()
          .pipe(
            map((client: Client[]) => client.find(c => c.id === id))
          );
    }   


    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // Look the response body
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }

}