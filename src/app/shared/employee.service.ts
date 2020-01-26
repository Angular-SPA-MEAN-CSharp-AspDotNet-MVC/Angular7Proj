import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public formData: Employee;
  readonly baseURL = "https://localhost:44341/api";
  list: Employee[];

  constructor(private http: HttpClient) { }

  postData(formValue: Employee) {
    return this.http.post(this.baseURL + '/Employee', formValue);
  }

  putData(formValue: Employee){
    return this.http.put(this.baseURL+'/Employee/'+ formValue.EmployeeID, formValue);
  }

  deleteData(fromValue: Employee){
    return this.http.delete(this.baseURL+'/Employee/'+ fromValue.EmployeeID);
  }

  reloadList(){
    this.http.get(this.baseURL+'/Employee')
      .toPromise().then(res => this.list = res as Employee[]);
  }

}
