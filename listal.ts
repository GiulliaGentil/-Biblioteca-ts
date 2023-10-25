import {LivroCategoria} from './livcategoria'

const listaDeLivros = [
    new LivroCategoria("Enola Holmes: O caso do marquês desaparecido", "Nancy Springer", 2020, "Aventura"),
    new LivroCategoria("É assim que acaba", "Colleen Hoover", 2016, "Romance"),
    new LivroCategoria("Um de nós está mentindo ", "Karen M.", 2018, "Mistério"),
  ];

  listaDeLivros.forEach((livro) => {
    livro.exibirDetalhes(); 
    const antigo = livro.éAntigo();
    console.log(` antigo: ${antigo}`);
    console.log("-----");
  });