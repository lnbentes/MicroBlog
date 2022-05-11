import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

  usuario: Usuario = new Usuario();
  confirmarSenha: string;
  idUser: number;
  tipoUser: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    ) { }

  ngOnInit(){
    window.scroll(0,0)
    if(environment.token == ""){
      alert("Sua seção expirou, faça o login novamente")
      this.router.navigate(["/login"])
    }
    this.authService.refreshToken()
    this.idUser = this.route.snapshot.params["id"]
    this.findByIdUser(this.idUser)
  }

  tipoUsuario(event: any){
    this.tipoUser = event.target.value;
  }

  confirmSenha(event: any){
    this.confirmarSenha = event.target.value;
  }

  findByIdUser(id: number){
    this.authService.getByIdUser(id).subscribe((resp: Usuario) => {
      this.usuario = resp
      console.log(this.usuario)
    })
  }

  atualizar(){

  }

}
