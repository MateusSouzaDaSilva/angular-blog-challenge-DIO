import { Component, OnInit } from '@angular/core';
import { dataFake, CardData } from 'src/app/data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  dataFake: CardData[] = dataFake
  

  getCardById(id: string): CardData | undefined {
    return this.dataFake.find(item => item.id === id);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
