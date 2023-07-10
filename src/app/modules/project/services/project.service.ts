import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Project } from '../../../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?offset=1&num=20';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((response: any) => {
        console.log(response);
        return response.data.map((s: any) => new Project(s.id, s.name, s.type));
      }),
      catchError((error: any) => {
        console.log(error);
        return throwError(() => error);
      })
    );
  }

  getProjectById(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  createProject(projectData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, projectData);
  }

  updateProject(id: string, projectData: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, projectData);
  }

  deleteProject(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
