-- Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.
SELECT 
    pm.title, pb.domestic_sales, pb.international_sales
FROM
    Pixar.Movies AS pm
        INNER JOIN
    Pixar.BoxOffice AS pb ON pm.id = pb.movie_id;

-- Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( international_sales ) do que vendas nacionais ( domestic_sales ).    
SELECT 
    pm.title, pb.international_sales, pb domestic_sales
FROM
    Pixar.Movies AS pm
        INNER JOIN
    Pixar.BoxOffice AS pb ON pm.id = pb.movie_id
WHERE
    domestic_sales < international_sales;
    
--  Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.
SELECT 
    pm.title, pb.rating
FROM
    Pixar.Movies AS pm
        INNER JOIN
    Pixar.BoxOffice AS pb ON pm.id = pb.movie_id
ORDER BY pb.rating DESC;

-/*Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, 
os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.*/
SELECT 
    t.name,
    t.location,
    pm.title,
    pm.director,
    pm.year,
    pm.length_minutes
FROM
    Pixar.Theater AS t
        LEFT JOIN
    Pixar.Movies AS pm ON t.id = pm.theater_id
ORDER BY t.name;

-- Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética
    SELECT 
    t.name,
    t.location,
    pm.title,
    pm.director,
    pm.year,
    pm.length_minutes
FROM
    Pixar.Theater AS t
        RIGHt JOIN
    Pixar.Movies AS pm ON t.id = pm.theater_id
ORDER BY t.name;

-- Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem os títulos dos filmes que possuem avaliação maior que 7.5.
-- Usando SUBQUERY
USE Pixar;

SELECT 
    title
FROM
    Movies
WHERE
    id IN (SELECT 
            movie_id
        FROM
            BoxOffice
        WHERE
            rating > 7.5);

-- Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem as avaliações dos filmes lançados depois de 2009.
-- Usando SUBQUERY
SELECT * FROM Pixar.BoxOffice;
SELECT * FROM Pixar.Movies;

SELECT 
    rating
FROM
    Pixar.BoxOffice
WHERE
    movie_id IN (SELECT 
            year
        FROM
            Pixar.Movies
        WHERE
            year > 2009);
            
-- USANDO INNER JOIN

SELECT 
    pb.rating
FROM
    Pixar.BoxOffice AS pb
        INNER JOIN
    Pixar.Movies AS m ON m.id = pb.movie_id
WHERE
    m.year > 2009;

-- Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em cartaz.
USE Pixar;

SELECT 
    t.name, t.location
FROM
    Theater AS t
WHERE
    EXISTS( SELECT 
            *
        FROM
            Movies
        WHERE
            Movies.theater_id = t.id);
			
-- Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.
            
SELECT 
    t.name, t.location
FROM
    Theater AS t
WHERE
   NOT EXISTS( SELECT 
            *
        FROM
            Movies
        WHERE
            Movies.theater_id = t.id);
