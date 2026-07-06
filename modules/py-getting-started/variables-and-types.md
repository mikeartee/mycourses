# Variables and Basic Types

## Variables

A **variable** is a name that points at a value. You create one with `=`:

```python
name = "Ada"
age = 36
```

`=` means "assign", not "equals". Read `age = 36` as "let `age` refer to 36". You can reassign any time:

```python
age = 36
age = age + 1   # age is now 37
```

## The basic types

Every value has a **type**. The four you'll use constantly at first:

| Type | Name | Example |
|---|---|---|
| `int` | whole number | `42`, `-7`, `0` |
| `float` | decimal number | `3.14`, `-0.5` |
| `str` | text ("string") | `"hello"`, `'Ada'` |
| `bool` | true/false | `True`, `False` |

You can ask Python a value's type:

```python
print(type(42))        # <class 'int'>
print(type(3.14))      # <class 'float'>
print(type("hi"))      # <class 'str'>
print(type(True))      # <class 'bool'>
```

## Strings

Text goes in quotes, single or double, your choice (be consistent):

```python
greeting = "Hello"
name = 'Ada'
```

Combine ("concatenate") strings with `+`, and build them cleanly with an **f-string** (note the `f` before the quote):

```python
message = f"{greeting}, {name}!"
print(message)   # Hello, Ada!
```

f-strings are the modern, readable way to insert values into text. You'll use them everywhere.

## Numbers and arithmetic

```python
print(7 + 2)    # 9
print(7 - 2)    # 5
print(7 * 2)    # 14
print(7 / 2)    # 3.5   (division always gives a float)
print(7 // 2)   # 3     (floor division: drops the remainder)
print(7 % 2)    # 1     (modulo: the remainder)
print(7 ** 2)   # 49    (exponent: 7 squared)
```

## Converting between types

Input from users and files often arrives as text. Convert with `int()`, `float()`, `str()`:

```python
age_text = "36"
age = int(age_text)      # the number 36
print(age + 1)           # 37

price = float("9.99")    # 9.99
label = str(42)          # "42"
```

Trying to do maths on text will error, `"36" + 1` raises a `TypeError`. Convert first.

## Key takeaways

- A variable is a name pointing at a value; `=` assigns.
- Core types: `int`, `float`, `str`, `bool`.
- f-strings (`f"{name}"`) insert values into text.
- `/` gives a float; `//` floors; `%` is remainder; `**` is power.
- Convert with `int()`, `float()`, `str()`.
