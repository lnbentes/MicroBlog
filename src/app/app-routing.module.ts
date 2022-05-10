import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastraComponent } from './cadastra/cadastra.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
