# Arguments, Defaults, and Keyword Arguments

Functions get flexible once you control *how* arguments are passed.

## Positional arguments

By default, arguments match parameters by position:

```python
def describe(name, role):
    print(f"{name} is a {role}")

describe("Ada", "engineer")   # Ada is a engineer
```

Order matters, swap them and the meaning changes.

## Keyword arguments

You can name arguments when calling. Then order doesn't matter and the call is clearer:

```python
describe(role="engineer", name="Ada")   # Ada is a engineer
```

## Default values

Give a parameter a default so callers can skip it:

```python
def greet(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

greet("Ada")                    # Hello, Ada!
greet("Ada", "Welcome")         # Welcome, Ada!
greet("Ada", greeting="Hi")     # Hi, Ada!
```

Parameters with defaults must come **after** those without.

> **Gotcha:** never use a mutable default like `def f(items=[])`. That list is shared across calls and causes surprising bugs. Use `None` and create it inside:
> ```python
> def add_item(item, items=None):
>     if items is None:
>         items = []
>     items.append(item)
>     return items
> ```

## Many arguments: *args and **kwargs

Accept any number of positional arguments with `*args` (a tuple), or named ones with `**kwargs` (a dict):

```python
def total(*numbers):
    return sum(numbers)

total(1, 2, 3, 4)     # 10

def profile(**info):
    for key, value in info.items():
        print(key, "=", value)

profile(name="Ada", age=36)
```

You'll see `*args`/`**kwargs` a lot in libraries; for your own early code, explicit parameters are usually clearer.

## Key takeaways

- Arguments pass by position, or by keyword (`name=value`) for clarity.
- Defaults let callers omit arguments; defaulted params come last.
- Don't use mutable defaults (`[]`, `{}`), use `None` and build inside.
- `*args` collects extra positional args; `**kwargs` collects extra keyword args.
