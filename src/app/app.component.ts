import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public formData = {
    uniqueNuber: '',
    name: 'automation',
    type:'Internal',
    description:'nothing here',
    comments:'nothing',
    isr_ritm: 'BBW2'
  };

  public isUniqueNumberGenerated: boolean = false;


  title = 'Automation';

  submit(){
    this.generateUniqueNumber();
    console.log(this.formData);
    //api post .
  }

  generateUniqueNumber(){
    //unique number generate
    this.formData.uniqueNuber = `${this.formData.type}-Hello`;
    this.isUniqueNumberGenerated = true;
  }
}
