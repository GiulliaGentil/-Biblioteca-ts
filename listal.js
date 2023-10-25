"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var livcategoria_1 = require("./livcategoria");
var listaDeLivros = [
    new livcategoria_1.LivroCategoria("Livro 1", "Autor 1", 1995, "Aventura"),
    new livcategoria_1.LivroCategoria("Livro 2", "Autor 2", 2005, "Romance"),
    new livcategoria_1.LivroCategoria("Livro 3", "Autor 3", 1980, "Mistério"),
];
listaDeLivros.forEach(function (livro) {
    livro.exibirDetalhes();
    var antigo = livro.éAntigo();
    console.log(" antigo: ".concat(antigo));
    console.log("-----");
});
