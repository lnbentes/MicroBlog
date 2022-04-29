import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastraComponent } from './cadastra/cadastra.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {path: "cadastra", component: CadastraComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
