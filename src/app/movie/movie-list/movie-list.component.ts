import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DialogData, MovieFormComponent } from '../movie-form/movie-form.component';

@Component({
  selector: 'app-filme-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  filmes = [
    {
      numeroFilme: 123,
      nome: 'Spider-Man: Far From Home',
      ano: 2019,
      diretor: 'Jon Watts',
      genero: 'Fantasy/Sci-fi',
      fornecedor: 'Nova Era Video',
      idioma: 'Português',
      dataCadastro: '2004-06-02',
      preco: 'R$ 3,00',
      tipoProduto: 'VHS',
      tipoFilme: 'Aventura',
      descricao: 'Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever.',
      poster: 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/3/35/Official_FFH_US_Poster.jpg/revision/latest?cb=20190522171521'
    },
    {
      numeroFilme: 124,
      nome: 'Avengers: Infinity War',
      ano: 2018,
      diretor: 'Anthony Russo, Joe Russo',
      genero: 'Sci-fi/Action',
      fornecedor: 'Nova Era Video',
      idioma: 'Espanhol',
      dataCadastro: '2004-06-02',
      preco: 'R$ 3,50',
      tipoProduto: 'VHS',
      tipoFilme: 'Ação',
      descricao: 'Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality.',
      poster: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/90/Avengers_Infinity_War.jpg/250px-Avengers_Infinity_War.jpg'
    },
    {
      numeroFilme: 125,
      nome: 'Thor: Ragnarok',
      ano: 2017,
      diretor: 'Taika Waititi',
      genero: 'Fantasy/Sci-fi',
      fornecedor: 'Nova Era Video',
      idioma: 'Inglês',
      dataCadastro: '2004-06-02',
      preco: 'R$ 5,50',
      tipoProduto: 'VHS',
      tipoFilme: 'Aventura',
      descricao: 'Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against the Hulk, his former ally and fellow Avenger.',
      poster: 'https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg'
    }
  ];

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openDialog(filme: any): void {
    this.dialog.open(MovieFormComponent, {
      data: filme
    });
  }
}
