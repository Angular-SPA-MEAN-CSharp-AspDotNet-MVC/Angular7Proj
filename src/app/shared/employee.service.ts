import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public formData: Employee;
  readonly baseURL = "https://localhost:44341/api";

  constructor(private http: HttpClient) { }

  postData(formValue: Employee) {
    return this.http.post(this.baseURL + '/Employee', formValue);
  }

}
