-- SQL: Concatenating Columns
-- https://www.codewars.com/kata/59440034e94fae05b2000073

SELECT
  prefix || ' ' || first || ' ' || last || ' ' || suffix AS title
FROM
  names
