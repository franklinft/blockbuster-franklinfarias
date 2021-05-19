import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
    numeroFilme: number;
    ano: number;
    descricao: string;
    diretor: string;
    genero: string;
    fornecedor: string;
    idioma: string;
    dataCadastro: string;
    preco: string;
    tipoProduto: string;
    tipoFilme: string;
    nome: string;
    poster: string;
}

@Component({
  selector: 'app-filme-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  ngOnInit(): void {
  }

}
