import {LivroCategoria} from './livcategoria'

const listaDeLivros = [
    new LivroCategoria("Livro 1", "Autor 1", 1995, "Aventura"),
    new LivroCategoria("Livro 2", "Autor 2", 2005, "Romance"),
    new LivroCategoria("Livro 3", "Autor 3", 1980, "Mistério"),
  ];

  listaDeLivros.forEach((livro) => {
    livro.exibirDetalhes(); 
    const antigo = livro.éAntigo();
    console.log(` antigo: ${antigo}`);
    console.log("-----");
  });