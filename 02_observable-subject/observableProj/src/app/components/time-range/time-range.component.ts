import { Component, OnInit } from '@angular/core';
import { PackService } from '../../shared/services/pack.service';

@Component({
  selector: 'app-time-range',
  templateUrl: './time-range.component.html',
  styleUrls: ['./time-range.component.css']
})
export class TimeRangeComponent implements OnInit {
dates:Date[]=[];
endD:Date;
  constructor(private packSer:PackService) {

   this.dates[0]=new Date(1900, 1, 1);
   this.dates[1]=new Date(Date.now());
   }

  ngOnInit() {
  }
start(val){
this.dates[0]=val;
this.packSer.dateSubject.next(this.dates);
}

end(val){
this.dates[1]=val;
this.packSer.dateSubject.next(this.dates);
}
}
