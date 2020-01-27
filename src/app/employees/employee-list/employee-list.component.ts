import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/employee.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private service: EmployeeService,
    private toastr: ToastrService){ }

  ngOnInit() {
    this.service.reloadList();
  }

  populateForm(emp: Employee){
    this.service.formData = Object.assign({},emp);
  }

  deleteRecord(form: Employee){
    if(confirm("Are you sure to delete this record?")){
    this.service.deleteData(form)
      .subscribe( res =>{
        this.service.reloadList();
        this.toastr.info("Delete an Employee  " + form.FullName,"Emp, Register");  
      });  
      
    }
  }

}