import { Routes } from '@angular/router';
import { ListaProdutosComponent } from './paginas/lista-produtos/lista-produtos';

export const routes: Routes = [
    { path: "produtos", component: ListaProdutosComponent },
    { path: "", redirectTo: "/produtos", pathMatch: "full" }
];
