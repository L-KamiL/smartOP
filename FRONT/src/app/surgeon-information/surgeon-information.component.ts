import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {SurgeonServiceService} from '../services/surgeon-service/surgeon-service.service';
import {MatTableDataSource} from "@angular/material/table";
import {fromEvent} from "rxjs";
import {map, sampleTime} from "rxjs/operators";

export interface SurgeonData {
  name: string;
  specialty: string;
  interventionNb: number;
  anaesthetist: string;
  nurse: string;
  room: number;
  intervention: string;
}

@Component({
  selector: 'app-surgeon-information',
  templateUrl: './surgeon-information.component.html',
  styleUrls: ['./surgeon-information.component.scss']
})
export class SurgeonInformationComponent implements OnInit {

  @Input()
  value: string;

  displayedColumns: string[] = ['name', 'specialty', 'interventionNb', 'anaesthetist', 'nurse', 'room', 'intervention'];
  dataSource: MatTableDataSource<SurgeonData>;
  page = 1;
  tmpSurgeon = [];


  constructor(private surgeonService: SurgeonServiceService) { }

  getFavourite(array: any, x: any) {
      if (array.length == 0)
        return null;
      let modeMap = {};
      let  maxEl = array[0][x], maxCount = 1;
      for (let i = 0; array[i]; i++) {
        let el = array[i][x];
        if (modeMap[el] == null) {
          modeMap[el] = 1;
        } else
          modeMap[el]++;
        if (modeMap[el] > maxCount) {
          maxEl = el;
          maxCount = modeMap[el];
        }
      }
      return maxEl;
  }

  getFavouriteNurse(array: any) {
      if (array.length == 0)
        return null;
      let modeMap = {};
      let  maxEl = array[0].nurse1, maxCount = 1;
      for (let i = 0; array[i]; i++) {
        let el = array[i].nurse1;
        if (modeMap[el] == null) {
          modeMap[el] = 1;
        } else
          modeMap[el]++;
        if (modeMap[el] > maxCount) {
          maxEl = el;
          maxCount = modeMap[el];
        }

        el = array[i].nurse2;
        if (modeMap[el] == null) {
          modeMap[el] = 1;
        } else
          modeMap[el]++;
        if (modeMap[el] > maxCount) {
          maxEl = el;
          maxCount = modeMap[el];
        }
      }
      return maxEl;
  }

  getSurgeon(value: string) {
    if (value)
      this.tmpSurgeon = [];
    this.surgeonService.getSurgeon(this.page, value).subscribe((data => {
      for (let i = 0; data[i]; i++) {
        this.tmpSurgeon.push({
          name: data[i].name,
          specialty: data[i].specialty,
          interventionNb: data[i].intervention.length,
          anaesthetist: this.getFavourite(data[i].intervention, 'anesthsiste') || 'Unknown',
          nurse: this.getFavouriteNurse(data[i].intervention) || 'Unknown',
          room: this.getFavourite(data[i].intervention, 'roomNumber') || 'Unknown',
          intervention: this.getFavourite(data[i].intervention, 'intervention') || 'Unknown',
        });
      }
      this.dataSource = new MatTableDataSource(this.tmpSurgeon);
    }
    ));
    this.page++;
  }
  ngAfterViewInit(): void {
    const content = document.querySelector('cdk-virtual-scroll-viewport');
    const scroll$ = fromEvent(content, 'scroll').pipe(sampleTime(500), map(() => content));

    scroll$.subscribe(element => {
        this.getSurgeon(this.value);
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    for (let property in changes) {
      if (property === 'value') {
          this.page = 1;
        this.getSurgeon(this.value);
      }
    }
  }

  ngOnInit(): void {
      this.getSurgeon(null);
  }

}
