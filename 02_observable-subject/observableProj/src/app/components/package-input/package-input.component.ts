import { Component, OnInit } from '@angular/core';
import { PackService } from '../../shared/services/pack.service';

@Component({
  selector: 'app-package-input',
  templateUrl: './package-input.component.html',
  styleUrls: ['./package-input.component.css']
})
export class PackageInputComponent implements OnInit {

   



  constructor(private packService:PackService) { }

  ngOnInit() {
  }
  onKeyUp(value) {
  
    this.packService.subject
    .next(value);
  }
}
