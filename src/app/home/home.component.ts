import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public uniqueGeneratedNumber: String = "";
  public formData = {
    uniqueNumber: '',
    projectName: '',
    typeInterface:'Select',
    description:'',
    comments:'',
    isrRitm: ''
  };

  public isUniqueNumberGenerated: boolean = false;


  constructor(private toastr: ToastrService, private router: Router, private userService:UserServiceService) { }

  ngOnInit(): void {
    this.clearForm();
  }

  async submit(){
    if(this.formData.typeInterface === 'Select' || this.formData.projectName === '' ||this.formData.isrRitm === '' ){
      alert('Please fill all required details marked by star.');
    } else {
      await this.userService.getUsersCount(this.formData.typeInterface).then( (data) => {
        if(this.formData.typeInterface === 'BW5x'){
          this.formData.uniqueNumber = `${this.formData.typeInterface}-${Number(data) + 4001}-${this.formData.projectName}`;
        }
        else if(this.formData.typeInterface === 'BW6x'){
          this.formData.uniqueNumber = `${this.formData.typeInterface}-${Number(data) + 6001}-${this.formData.projectName}`;
        }
        else{
          this.formData.uniqueNumber = `${this.formData.typeInterface}-${Number(data) + 2001}-${this.formData.projectName}`;
        }
        // this.uniqueGeneratedNumber = `${this.formData.typeInterface}-${Number(data) + 1}`;
        // this.formData.uniqueNumber = `${this.formData.typeInterface}-${Number(data) + 1}`;
        this.isUniqueNumberGenerated = true;
        this.userService.doRegistration(this.formData).subscribe( () => {
          this.uniqueGeneratedNumber = this.formData.uniqueNumber;
          // this.toastr.success(`${result}`, 'Automation');
         // alert(result);
          this.router.navigate(['result'], {
            queryParams: { type:this.formData.typeInterface, uniqueNumber: this.uniqueGeneratedNumber }
          });
          
        },(error)=>{
          alert(error.message);
        });
      }).catch((error)=>{
        alert(error.message)
      });
    }
  }

  clearForm(){
    this.formData = {
      uniqueNumber: '',
      projectName: '',
      typeInterface:'Select',
      description:'',
      comments:'',
      isrRitm: ''
    };

    // this.isUniqueNumberGenerated = false
  }
  // generateUniqueNumber(){
    // result = result + 1;
    // //unique number generate
    // var result           = '';
    // var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    // var charactersLength = characters.length;
    // for ( var i = 0; i < 4; i++ ) {
    //     result += characters.charAt(Math.floor(Math.random() * charactersLength));
    // }
    // this.formData.uniqueNumber = `${this.formData.typeInterface}-${result}`;
    // this.isUniqueNumberGenerated = true;
  // }

}
