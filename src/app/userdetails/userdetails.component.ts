import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  constructor() { }
@Input() data:{name:string,email:string}={name:'', email:''}
  ngOnInit(): void {
  }

}
