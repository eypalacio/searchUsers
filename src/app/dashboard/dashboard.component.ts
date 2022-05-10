import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  search: string = '';

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  activeMenu() {
    document.getElementById('menu')?.classList.toggle('active');
  }

  addBusqRec() {
    let formData: FormData = new FormData();
    formData.append('busqueda', this.search);
    this.api.postBusquedasRecientes(formData).subscribe(result => {
      console.log(result)
    })
  }

}
