import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(){
    if(environment.token == ""){
      alert("Sua seção expirou, faça o login novamente")
      this.router.navigate(["/login"])
    }
  }

}
