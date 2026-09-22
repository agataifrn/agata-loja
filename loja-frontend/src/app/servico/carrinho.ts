import { Injectable, signal } from '@angular/core';
import { Item } from '../modelo/item';
import { Produto } from '../modelo/produto';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  public itens = signal<Item[]>([]);

  constructor() { }

  adicionarItem(produto: Produto, quantidade: number = 1): void {
    const listaAtual = this.itens();
    const itemExistente = listaAtual.find(item => item.produto.id === produto.id);

    if (itemExistente) {
      this.aumentarQuantidade(itemExistente.id, quantidade);
    } else {
      const novoItem: Item = {
        id: Date.now(), 
        produto: produto,
        quantidade: quantidade
      };
      this.itens.update((lista) => [...lista, novoItem]);
    }
  }

  aumentarQuantidade(itemId: number, quantidade: number = 1): void {
    this.itens.update(lista =>
      lista.map(item =>
        item.id === itemId
          ? { ...item, quantidade: item.quantidade + quantidade }
          : item
      )
    );
  }

  diminuirQuantidade(itemId: number): void {
    this.itens.update(lista =>
      lista
        .map(item =>
          item.id === itemId
            ? { ...item, quantidade: item.quantidade - 1 }
            : item
        )
        .filter(item => item.quantidade > 0) // Remove itens zerados
    );
  }

  removerItem(itemId: number): void {
    this.itens.update(lista => lista.filter(item => item.id !== itemId));
  }

  obterTotal(): number {
  return this.itens().reduce((total, item) => total + (item.produto.preco * item.quantidade), 0);
  }
}