import { Component, OnInit } from '@angular/core';
import { PackService } from '../../shared/services/pack.service';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {
sr:string="";
packages:any[]=[];
  constructor(private packService:PackService) {
    this.packService.subject.subscribe(
      {

        next: (v:string) =>
        {this.sr=v;
        this.packService.getPackByInput(v).subscribe(
          res=>{
            console.log(res);
        this.packages=res;
        
        });
        } 
        
      }
    );



    this.packService.dateSubject.subscribe(
      {
     next:(d:Date[])=>{console.log(d[0],d[1]);
  for(let i=0;i<this.packages.length;i++)
     {
     this.packService.getDownloads(this.packages[i]["package"].name,d).subscribe(res=>this.packages[i]["package"].downloads=res["downloads"]);
     }
    
    }
      }
    );
   }

  ngOnInit() {
  }

}
