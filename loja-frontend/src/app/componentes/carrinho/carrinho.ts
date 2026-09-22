import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarrinhoService } from '../../servico/carrinho';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css'
})
export class CarrinhoComponent {

  public carrinhoService = inject(CarrinhoService);

  quantidadeTotal = computed(() => {
    return this.carrinhoService.itens().reduce((total, item) => total + item.quantidade, 0);
  });

  aumentar(itemId: number): void {
    this.carrinhoService.aumentarQuantidade(itemId);
  }

  diminuir(itemId: number): void {
    this.carrinhoService.diminuirQuantidade(itemId);
  }

  remover(itemId: number): void {
    this.carrinhoService.removerItem(itemId);
  }
}