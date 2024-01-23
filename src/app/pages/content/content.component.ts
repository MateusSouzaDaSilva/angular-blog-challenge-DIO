import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string = "https://rollingstone.uol.com.br/media/uploads/johnny-depp-willy-wonka-fantastica-fabrica-de-chocolate-reproducao.jpg"
  contentTitle:string = "Noticia teste"
  contentDescription:string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, magnam nesciunt iusto aut, magni natus fuga in perspiciatis ut obcaecati eos culpa? Ea ab laborum nemo! Voluptate totam accusantium ipsa."

  constructor() { }

  ngOnInit(): void {
  }

}
