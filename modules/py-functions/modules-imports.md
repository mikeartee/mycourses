# Modules, Imports, and the Standard Library

You don't have to write everything yourself. Python ships with a large **standard library**, ready-made code you pull in with `import`.

## Importing a module

```python
import math

print(math.sqrt(16))    # 4.0
print(math.pi)          # 3.141592653589793
```

`import math` makes the `math` module available; you reach into it with `math.something`.

## Importing specific names

Pull just what you need:

```python
from math import sqrt, pi

print(sqrt(25))   # 5.0
print(pi)         # 3.14159...
```

## Renaming with as

Handy for long names (and a near-universal convention in data work):

```python
import statistics as stats

stats.mean([1, 2, 3, 4])   # 2.5
```

## Useful modules to know

```python
import random
random.randint(1, 6)       # a dice roll, 1 to 6
random.choice(["a", "b"])  # pick one at random

import datetime
datetime.date.today()      # today's date

import json
json.dumps({"a": 1})       # '{"a": 1}'  (object -> JSON text)
```

## Your own files are modules too

Every `.py` file is a module. If you have `helpers.py` with a function `clean()`, another file in the same folder can use it:

```python
from helpers import clean
```

This is how you split a growing program across several files.

## Finding more

The standard library is documented at [docs.python.org](https://docs.python.org/3/library/). For anything not built in, the community publishes packages you install with `pip` (a topic for after this course).

## Key takeaways

- `import module`, then use `module.name`.
- `from module import name` pulls specific names in.
- `import module as alias` renames.
- The standard library covers maths, randomness, dates, JSON, files, and much more.
- Your own `.py` files are modules you can import from.
