import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  categories: Category[] = 
  [
    {id:1, name: "Macera"},
    {id:2, name: "Bilim Kurgu"},
    {id:3, name: "Aksiyon"},
    {id:4, name: "Komedi"},

  ];

}
