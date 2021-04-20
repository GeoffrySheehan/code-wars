-- SQL Basics: Simple EXISTS
-- https://www.codewars.com/kata/58113a64e10b53ec36000293
SELECT
  *
FROM
  departments AS d
WHERE EXISTS (
  SELECT 1
  FROM
    sales AS s
  WHERE
    d.id = s.department_id
    AND
    s.price > 98.00
)
