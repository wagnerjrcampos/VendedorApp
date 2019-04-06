import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/produto';

@Component({
  selector: 'app-cadastrodoproduto',
  templateUrl: './cadastrodoproduto.page.html',
  styleUrls: ['./cadastrodoproduto.page.scss'],
})
export class CadastrodoprodutoPage implements OnInit {
  private produto:Produto;

  constructor() { }

  ngOnInit() {
  }

}
