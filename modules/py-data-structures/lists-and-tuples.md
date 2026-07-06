# Lists and Tuples

Most real programs work with *collections* of values, not just single ones. The list is the workhorse.

## Lists

A **list** is an ordered, changeable collection. Write it with square brackets:

```python
fruits = ["apple", "banana", "cherry"]
```

### Accessing items (indexing)

Positions start at **0**:

```python
fruits[0]    # "apple"
fruits[1]    # "banana"
fruits[-1]   # "cherry"  (negative counts from the end)
```

### Slicing

Grab a range with `start:stop` (stop is excluded):

```python
nums = [10, 20, 30, 40, 50]
nums[1:3]    # [20, 30]
nums[:2]     # [10, 20]
nums[2:]     # [30, 40, 50]
```

### Changing lists

```python
fruits.append("date")       # add to the end
fruits.insert(0, "kiwi")    # insert at a position
fruits.remove("banana")     # remove by value
last = fruits.pop()         # remove and return the last item
fruits[0] = "grape"         # replace by index
len(fruits)                 # how many items
```

### Checking membership

```python
if "apple" in fruits:
    print("we have apples")
```

## Tuples

A **tuple** is like a list but **immutable**, once created, you can't change it. Write it with parentheses:

```python
point = (3, 4)
x = point[0]    # 3
```

Because they can't change, tuples are good for fixed groups of values, like coordinates or an RGB colour `(255, 0, 0)`. You can even unpack them:

```python
x, y = point    # x = 3, y = 4
```

## List vs tuple, which one?

- Use a **list** when the collection will grow, shrink, or change.
- Use a **tuple** for a fixed set of related values that shouldn't change.

## Key takeaways

- Lists are ordered and mutable: `[...]`, index from 0, slice with `[a:b]`.
- Common methods: `append`, `insert`, `remove`, `pop`, `len`, `in`.
- Tuples are ordered and immutable: `(...)`; great for fixed groups; support unpacking.
