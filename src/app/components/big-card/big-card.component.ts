import { Component, Input, OnInit } from '@angular/core';
import { dataFake, CardData } from 'src/app/data/dataFake';
@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  dataFake: CardData[] = dataFake
  

  getCardById(id: string): CardData | undefined {
    return this.dataFake.find(item => item.id === id);
  }

  @Input()
  photoCover:string  = ""
  @Input()
  cardTitle:string = ""
  @Input()
  cardDescription:string = ""
  @Input()
  Id:string = "0";

  constructor() { }

  ngOnInit(): void {
  }

}
