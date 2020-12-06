import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  public type: String="";
  public uniqueNumber: String="";

  constructor(private Activatedroute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.Activatedroute.queryParams.subscribe(params => {
      let typename = params['type'];
      let unique = params['uniqueNumber'];
      if ( !typename || !unique ){
        this.router.navigateByUrl('');
      } else {
        console.log('typename',typename);
        
        if (typename === 'BW5x' || typename === 'BW6x'|| typename === 'Internal') {
          this.type = typename;
          this.uniqueNumber = unique;
          
        } else {
          this.router.navigateByUrl('');
        }
      }
    });      
  }
}
