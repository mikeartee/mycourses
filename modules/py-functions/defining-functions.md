# Defining and Calling Functions

A **function** is a named, reusable block of code. Write it once, use it many times. Functions are how you stop repeating yourself and keep programs organised.

## Defining a function

```python
def greet(name):
    print(f"Hello, {name}!")
```

- `def` starts the definition.
- `greet` is the name.
- `name` is a **parameter**, a placeholder for a value you'll pass in.
- The indented body is what runs.

## Calling a function

Defining a function doesn't run it, *calling* it does:

```python
greet("Ada")     # Hello, Ada!
greet("Linus")   # Hello, Linus!
```

The value you pass (`"Ada"`) is an **argument**.

## Returning a value

`print` shows something; `return` hands a value *back* to the caller so you can use it:

```python
def add(a, b):
    return a + b

total = add(2, 3)     # total is 5
print(total * 10)     # 50
```

Once a function `return`s, it stops. A function with no `return` gives back `None`.

Notice the difference:

```python
def add_print(a, b):
    print(a + b)      # shows it, but hands back None

x = add_print(2, 3)   # prints 5; x is None
```

Prefer `return` when you want to *use* the result elsewhere.

## Why functions matter

```python
def celsius_to_fahrenheit(c):
    return c * 9 / 5 + 32

print(celsius_to_fahrenheit(0))    # 32.0
print(celsius_to_fahrenheit(100))  # 212.0
```

Write the logic once, trust it everywhere, and if the formula changes you fix it in one place.

## Key takeaways

- Define with `def name(params):`, call with `name(args)`.
- Parameters are placeholders; arguments are the actual values passed.
- `return` hands a value back; no return means `None`.
- Functions remove duplication and centralise logic.
