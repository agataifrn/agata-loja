import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarrinhoComponent } from './componentes/carrinho/carrinho';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarrinhoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'loja-frontend';
}