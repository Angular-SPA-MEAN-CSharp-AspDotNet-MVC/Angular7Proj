import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service: EmployeeService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form!=null)
      form.resetForm();
    this.service.formData  = {
      EmployeeID: null,
      FullName:'',
      EMPCode:'',
      Mobile:'',
      Position:''
    }
  }
  
  submitForm(form: NgForm){
    if(form.value.EmployeeID===null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm){
    this.service.postData(form.value)
      .subscribe(
        res => {
          this.resetForm(form);
          this.service.reloadList(); 
          this.toastr.success("Insert Successfully", "Emp, Register"); 
        }
      );
    }
  
  updateRecord(form: NgForm){
    this.service.putData(form.value)
      .subscribe(        
        res => {
          this.resetForm(form);
          this.service.reloadList();
          this.toastr.warning("Update Successfully","Emp, Register");
        });
    }

}
