import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-looping',
  templateUrl: './list-looping.component.html',
  styleUrls: ['./list-looping.component.css'],
})
export class ListLoopingComponent implements OnInit {
  cats: { id: string; name: string }[];

  constructor() {
    this.cats = [
      { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
      { id: 'z_AbfPXTKms', name: 'Maru' },
      { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' },
    ];
  }

  ngOnInit(): void {}
}
