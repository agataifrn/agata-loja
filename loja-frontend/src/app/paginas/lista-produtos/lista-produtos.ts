import { Component, OnInit, signal, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoService } from '../../servico/produto'; // Importa do produto.ts
import { Produto } from '../../modelo/produto';

@Component({
  selector: 'app-lista-produtos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css'
})
export class ListaProdutosComponent implements OnInit {

  produtos = signal<Produto[]>([]);

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtoService.obterProdutos().subscribe({
      next: (dados) => { this.produtos.set(dados);
        console.log(dados)
         
      },
      error: (erro) => console.error('Erro ao buscar produtos:', erro)
    });
  }
}