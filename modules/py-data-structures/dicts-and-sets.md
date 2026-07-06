# Dictionaries and Sets

## Dictionaries

A **dictionary** (`dict`) stores data as **key → value** pairs. It's perfect when each value has a label. Write it with curly braces:

```python
person = {
    "name": "Ada",
    "age": 36,
    "city": "London",
}
```

### Looking things up

```python
person["name"]        # "Ada"
person["age"]         # 36
```

Accessing a missing key raises an error. `get()` is the safe way, it returns `None` (or a default) instead:

```python
person.get("email")            # None
person.get("email", "n/a")     # "n/a"
```

### Adding and changing

```python
person["email"] = "ada@example.com"   # add or update
person["age"] = 37                    # update
del person["city"]                    # remove a key
```

### Looping over a dict

```python
for key, value in person.items():
    print(key, "=", value)

for key in person:            # keys by default
    print(key)

for value in person.values():
    print(value)
```

Dictionaries are everywhere in Python, JSON data, records, configuration, and counting things all use them.

## Sets

A **set** is an unordered collection of **unique** values. Duplicates are dropped automatically:

```python
nums = {1, 2, 2, 3, 3, 3}
# nums is {1, 2, 3}
```

Great for membership tests and removing duplicates:

```python
seen = set()
seen.add("a")
seen.add("a")      # no effect, already there
"a" in seen        # True

unique = set(["x", "x", "y"])   # {"x", "y"}
```

Sets also support maths-style operations:

```python
a = {1, 2, 3}
b = {2, 3, 4}
a & b    # intersection: {2, 3}
a | b    # union: {1, 2, 3, 4}
a - b    # difference: {1}
```

## Key takeaways

- `dict` maps keys to values: `{"k": v}`; access with `d["k"]` or safely with `d.get("k")`.
- Loop with `.items()`, `.keys()`, `.values()`.
- `set` holds unique, unordered values; good for dedup and fast `in` tests; supports `&`, `|`, `-`.
