import { Component, Input, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';
import { ActivatedRoute } from '@angular/router';
import { CardData } from 'src/app/data/dataFake'; 

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  dataFake: CardData[] = dataFake
  

  getCardById(id: string): CardData | undefined {
    return this.dataFake.find(item => item.id === id);
  }

  
  @Input()
  photoCover:string = ""
  @Input()
  title:string = ""
  @Input()
  Id:string | null= "0"

  constructor() { }

  ngOnInit(): void {
    

  }

}
