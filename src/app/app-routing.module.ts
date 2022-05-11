import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastraComponent } from './cadastra/cadastra.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { EntradaComponent } from './entrada/entrada.component';
import { LoginComponent } from './login/login.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {path: "cadastra", component: CadastraComponent},
  {path: "entrada", component: EntradaComponent},
  {path: "tema", component: TemaComponent},

  {path: "temaEdit/:id", component: TemaEditComponent},
  {path: "temaDelete/:id", component: TemaDeleteComponent},
  {path: "postagemEdit/:id", component: PostagemEditComponent},
  {path: "postagemDelete/:id", component: PostagemDeleteComponent},
  {path: "usuarioEdit/:id", component: UsuarioEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
