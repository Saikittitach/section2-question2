import { AfterContentInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, filter, fromEvent, map, Observable, switchMap, toArray } from 'rxjs';
import { data, DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'pre-test2';

  private _data: data;
  search: string;

  private _filter: string = '';
  get filteredData() {
    return this._data?.categories.filter((d) => d.toLowerCase().trim().includes(this._filter.toLowerCase().trim()));
  }

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this._dataService.$getData().subscribe((response) => {
      this._data = response;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this._filter = filterValue;
  }

}
