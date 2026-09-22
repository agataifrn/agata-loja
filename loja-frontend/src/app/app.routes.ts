import { Routes } from '@angular/router';
import { ListaProdutosComponent } from './paginas/lista-produtos/lista-produtos';
import { CarrinhoComponent } from './componentes/carrinho/carrinho';

export const routes: Routes = [
  { path: 'produtos', component: ListaProdutosComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: '', redirectTo: 'produtos', pathMatch: 'full' }
];