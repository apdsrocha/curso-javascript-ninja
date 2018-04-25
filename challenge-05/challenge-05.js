/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var qualquer = [ 'nome', 31, true, null, false ]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function funcaoComArray(parametro) {
  return parametro;
}


/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
funcaoComArray(qualquer)[1]

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function doisParametros(x, y) {
  return x[y];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrayComCincoValores = [ 'Anita', true, 33, 12.2, 'ultimo item' ]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

function doisParametros(x) {
  for (y = 0; y < x.length; y++ ) {
  console.log( x[y] );
   }
}




/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/


function book( nome ) {
  var catalogo = {
    'titulo1' : { 
    quantidadePaginas : 100,
    autor : 'nome do autor',
    editora : 'nome da editora'
    },
    'titulo2' : { 
    quantidadePaginas : 200,
    autor : 'nome do autor 2',
    editora : 'nome da editora 2'
    },
    'titulo3' : { 
    quantidadePaginas : 300,
    autor : 'nome do autor 3',
    editora : 'nome da editora 3'
    }
  }
  return  !nome ? catalogo : catalogo[ nome ]

}



/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log (book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'titulo2';
console.log( 'O livro ' + bookName + ' tem ' + book( bookName ).quantidadePaginas + 'paginas')

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( 'O livro ' + bookName + ' é editado pela ' + book( bookName ).editora)


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?