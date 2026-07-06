# Conditionals: if, elif, and else

Programs get interesting when they make decisions. That's what `if` does.

## The basic if

```python
temperature = 30

if temperature > 25:
    print("It's warm today")
```

Two things to notice:

1. The line ends with a colon `:`.
2. The body is **indented** (4 spaces is standard). Indentation is how Python knows what's "inside" the `if`, there are no curly braces. This matters: mismatched indentation is an error.

## else and elif

`else` handles "otherwise". `elif` ("else if") adds more branches:

```python
temperature = 12

if temperature > 25:
    print("Warm")
elif temperature > 10:
    print("Mild")
else:
    print("Cold")
```

Python checks each condition top to bottom and runs the **first** one that's true, then skips the rest.

## Comparisons

These produce a `bool` (`True`/`False`):

```python
a == b   # equal (note the double =)
a != b   # not equal
a < b    # less than
a <= b   # less than or equal
a > b    # greater than
a >= b   # greater than or equal
```

A very common beginner bug: using `=` (assign) where you meant `==` (compare).

## Combining conditions

Use `and`, `or`, `not`:

```python
age = 20
has_ticket = True

if age >= 18 and has_ticket:
    print("Welcome in")

if not has_ticket:
    print("You need a ticket")
```

- `and` is true only when **both** sides are true.
- `or` is true when **at least one** side is true.
- `not` flips true/false.

## Truthiness

Values can be treated as true or false directly. Empty things are "falsy": `0`, `""`, `[]`, `None` are all treated as false; most other values are "truthy".

```python
name = ""

if name:
    print("Hi", name)
else:
    print("No name given")   # this runs, because "" is falsy
```

## Key takeaways

- `if`/`elif`/`else` choose between branches; the first true one wins.
- Bodies are marked by indentation and a `:`, not braces.
- Compare with `==`, `!=`, `<`, `<=`, `>`, `>=`; combine with `and`, `or`, `not`.
- Empty values (`0`, `""`, `[]`, `None`) are falsy.
