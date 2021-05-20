import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MovieListComponent } from '../movie-list/movie-list.component';

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
  title = '';
  selectedTipoProduto = '';
  selectedTipoFilme = '';
  selectedGenero = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,
              private snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<MovieListComponent>) {
  }

  ngOnInit(): void {
    this.selectedTipoProduto = this.data?.tipoProduto;
    this.selectedTipoFilme = this.data?.tipoFilme;
    this.selectedGenero = this.data?.genero;

    this.data === null ? this.title = 'Cadastrar Título' : this.title = 'Atualizar Título';
  }

  openSnackBar(): void {
    this.dialogRef.close();
    this.snackBar.open('Título salvo com sucesso!', '', {
      duration: 2000,
      panelClass: 'success-alert-message-component'
    });
  }
}
