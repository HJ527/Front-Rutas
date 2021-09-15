import { Component, OnInit, ViewChild, ElementRef, Input, Output,EventEmitter } from '@angular/core';
import { SubService } from '../../../subdistribuidores/services/sub.service';
import { Subdistribuidor } from '../../../subdistribuidores/interfaces/subdistribuidor.interface';

@Component({
  selector: 'app-minicard',
  templateUrl: './minicard.component.html',
  styleUrls: ['./minicard.component.scss']
})
export class MinicardComponent implements OnInit {

  @ViewChild('minicard') minicard !:ElementRef;
  @Input() sub!:Subdistribuidor;
  @Output() subdistribuidor:EventEmitter<Subdistribuidor>= new EventEmitter()

  constructor(private subService:SubService) { }

  ngOnInit(): void {
    
  }

  agregarSub(){
    this.subdistribuidor.emit(this.sub)
    console.log(this.sub);
    
  }


}
