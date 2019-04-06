import { Component, OnInit } from '@angular/core';
import { Vendedor } from 'src/app/model/vendedor';
import { DadosService } from 'src/app/services/dados.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  private vendedor:Vendedor = new Vendedor;
  private confirmSenha;

  constructor(private dados:DadosService) {}

  ngOnInit() {
  }
  
  async registraCadastro(){
    await this.dados.addDados(this.vendedor).subscribe(
      result=>{
          console.log('gravado com sucesso');
      },
        error => {
          console.error();
      }
    )
  }
}
