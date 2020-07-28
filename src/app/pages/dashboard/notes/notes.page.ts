import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  constructor(private router:Router) { }

  openSubcategories(){

    this.router.navigate(['dashboard/notes/subcategories']);
  }

  ngOnInit() {
  }

}
