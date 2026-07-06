# List Comprehensions

A **list comprehension** builds a new list from an existing sequence in a single, readable line. It's one of Python's most loved features.

## From a loop to a comprehension

Here's the long way to make a list of squares:

```python
squares = []
for n in range(5):
    squares.append(n ** 2)
# squares == [0, 1, 4, 9, 16]
```

The same thing as a comprehension:

```python
squares = [n ** 2 for n in range(5)]
```

Read it left to right: *"n squared, for each n in range(5)"*. The pattern is:

```
[expression for item in sequence]
```

## Filtering with if

Add an `if` to keep only some items:

```python
evens = [n for n in range(10) if n % 2 == 0]
# [0, 2, 4, 6, 8]
```

Pattern:

```
[expression for item in sequence if condition]
```

## A practical example

```python
names = ["ada", "grace", "linus"]
titled = [name.capitalize() for name in names]
# ["Ada", "Grace", "Linus"]
```

## When not to use one

Comprehensions shine for simple "transform and/or filter" work. If the logic needs several steps, multiple conditions, or side effects, a regular `for` loop is clearer. Readability wins, don't cram everything into one line just because you can.

## Key takeaways

- `[expr for item in seq]` builds a list in one line.
- Add `if condition` to filter.
- Prefer a comprehension for simple transforms; use a normal loop when logic gets complex.
