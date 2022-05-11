import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  user: Usuario = new Usuario()
  idUser = environment.id

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authService: AuthService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    if(environment.token == ""){
      alert("Sua seção expirou, faça o login novamente")
      this.router.navigate(["/login"])
    }
    this.authService.refreshToken()
    this.getAllTemas()
    this.getAllPostagens()
  }

  getAllTemas(){ // execulta uma lista de temas
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) =>{
      this.tema = resp
    })
  }

  getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  findByIdUser(){
    this.authService.getByIdUser(this.idUser).subscribe((resp: Usuario) =>{
      this.user = resp
    })
  }

  publicar(){
    this.tema.id = this.idTema //O tema esta recebendo o id que selecionamos
    this.postagem.tema = this.tema //Aqui estamos fazendo a relacao do que esta na postagem com o tema selecionado

    this.user.id = this.idUser //O usuario esta recedendo o id de quem esta logado
    this.postagem.usuario = this.user //Aqui estamos fazendo a relacao do que esta na postagem com o usuario logado

    //Agora que o objto postagem foi todo prenchido nos enviamos pro back
    this.postagemService.postPostagens(this.postagem).subscribe((resp: Postagem) =>{
      this.postagem = resp
      alert("Postagem realizada com sucesso")
      this.postagem = new Postagem() //Qunado finalizar a postagem ter certeza de limpar os campo
      this.getAllPostagens()  //Vai da um refrash nas postagens
    })
  }

  pesquisar(){
    this.tema.id = this.idTema
    this.findByIdTema()
  }

}
