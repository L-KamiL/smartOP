import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-surgeon-search',
  templateUrl: './surgeon-search.component.html',
  styleUrls: ['./surgeon-search.component.scss']
})
export class SurgeonSearchComponent implements OnInit {

    @Output()
    search: EventEmitter<string> = new EventEmitter<string>();

  searchForm = new FormGroup({
    searchInput: new FormControl('', [
    ])
  });

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.search.emit(this.searchForm.value);
  }
}
