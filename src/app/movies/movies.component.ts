import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  movies: Movie[] = [
    {id:1, title:"Film 1", imageUrl:"1.jpeg", description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, at!"},
    {id:2, title:"Film 2", imageUrl:"2.jpeg", description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, at!"},
    {id:3, title:"Film 3", imageUrl:"3.jpeg", description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, at!"},
    {id:4, title:"Film 4", imageUrl:"4.jpeg", description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, at!"}
  ];
}
