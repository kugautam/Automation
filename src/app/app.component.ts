import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public formData = {
    uniqueNumber: '',
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
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 4; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    this.formData.uniqueNumber = `${this.formData.type}-${result}`;
    this.isUniqueNumberGenerated = true;
  }
}
