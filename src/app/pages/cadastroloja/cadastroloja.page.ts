import { Component, OnInit } from '@angular/core';
import { Filial } from 'src/app/model/filial';

@Component({
  selector: 'app-cadastroloja',
  templateUrl: './cadastroloja.page.html',
  styleUrls: ['./cadastroloja.page.scss'],
})
export class CadastrolojaPage implements OnInit {
  private filial:Filial;

  constructor() { }

  ngOnInit() {
  }

}
