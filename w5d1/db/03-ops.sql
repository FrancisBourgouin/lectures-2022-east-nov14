-- Basic SELECT

SELECT * FROM authors;

SELECT * FROM jokes;

SELECT question, answer FROM jokes;

SELECT question AS joke_first_part, answer AS joke_second_part FROM jokes;

-- 0123456789 => Base 10
-- 01234567 => Base 8
-- 01 => Base 2   , 0, 1, 10, 11, 100, 101, 110, 111, 1000

-- Single WHERE clause

-- Show me the jokes where the beginning starts with what
SELECT question, answer FROM jokes WHERE question LIKE 'What%';

SELECT question, answer FROM jokes WHERE question LIKE '% a %';

SELECT question, answer FROM jokes WHERE LOWER(question) LIKE '%what%'; -- All sql
SELECT question, answer FROM jokes WHERE question ILIKE '%what%'; -- postgres exclusive
 
-- Multiple WHERE clauses

SELECT question, answer FROM jokes WHERE question ILIKE '%what%' AND rating = 5;

-- Ordering results

SELECT question, answer, rating FROM jokes ORDER BY rating DESC;


SELECT * 
FROM jokes 
WHERE question ILIKE '%b%' AND rating >= 4 
ORDER BY rating DESC;

-- Joining tables

SELECT *
FROM jokes -- LEFT
JOIN authors -- RIGHT
ON jokes.author_id = authors.id;


SELECT *
FROM jokes -- LEFT
RIGHT JOIN authors -- RIGHT
ON jokes.author_id = authors.id;


SELECT *
FROM jokes -- LEFT
FULL OUTER JOIN authors -- RIGHT
ON jokes.author_id = authors.id;

-- const row = {
--   id, JOKES
--   question,
--   answer,
--   rating,
--   author_id,
--   id, AUTHORS
--   name,
--   funny,
--   description
-- }

SELECT *, jokes.id AS joke_id
FROM jokes -- LEFT
JOIN authors -- RIGHT
ON jokes.author_id = authors.id;

-- const row = {
--   id, JOKES
--   question,
--   answer,
--   rating,
--   author_id,
--   id, AUTHORS
--   name,
--   funny,
--   description,
--   joke_id
-- }

SELECT jokes.id, jokes.question, jokes.answer, jokes.rating, jokes.author_id, authors.name, authors.funny, authors.description
FROM jokes -- LEFT
JOIN authors -- RIGHT
ON jokes.author_id = authors.id;

-- Aggregate functions (AVG, MIN, MAX, SUM) (HAVING GROUPBY)

SELECT AVG(rating) FROM jokes;

SELECT author_id, authors.name, AVG(rating) AS joke_rating_avg
FROM jokes 
JOIN authors
ON jokes.author_id = authors.id
GROUP BY author_id, authors.name
ORDER BY joke_rating_avg ;


SELECT NOW()

SELECT id, question, answer FROM jokes GROUP BY id HAVING rating > AVG(rating); -- DOESNT WORK

SELECT id, rating FROM jokes GROUP BY id; 

-- Nested selects

SELECT question, answer, rating 
FROM jokes 
WHERE rating > (SELECT AVG(rating) FROM jokes);


SELECT * 
FROM jokes
JOIN authors
ON jokes.author_id = authors.id
WHERE authors.description LIKE '%march%';


SELECT *
FROM jokes
WHERE author_id IN
  (SELECT id FROM authors WHERE description LIKE '%march%')
;
-- UPDATE users
-- SET "currChallenge" = 16
-- WHERE id IN (
--    SELECT id
--    FROM users
--    WHERE id IN 
--     (SELECT user_id FROM completions GROUP BY user_id HAVING count(*) = 15 )
--    AND "currChallenge" = 15
-- )

-- Views (stretch)

CREATE VIEW cool_jokes AS(
SELECT jokes.id, jokes.question, jokes.answer, jokes.rating, jokes.author_id, authors.name, authors.funny, authors.description
  FROM jokes
  JOIN authors
  ON jokes.author_id = authors.id
  WHERE rating > 4
);
