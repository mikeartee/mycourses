# Loops: for and while

Loops repeat work so you don't have to copy-paste.

## The for loop

A `for` loop runs its body once for each item in a sequence:

```python
for fruit in ["apple", "banana", "cherry"]:
    print(fruit)
```

Output:

```
apple
banana
cherry
```

`fruit` is a variable that takes each value in turn. The name is yours to choose.

## range()

To repeat a fixed number of times, use `range()`:

```python
for i in range(5):
    print(i)      # 0 1 2 3 4
```

`range(5)` produces 0 through 4 (it stops **before** 5). You can also give a start and step:

```python
range(2, 6)      # 2, 3, 4, 5
range(0, 10, 2)  # 0, 2, 4, 6, 8
```

## The while loop

A `while` loop runs as long as a condition stays true:

```python
count = 3
while count > 0:
    print(count)
    count = count - 1
print("Lift off!")
```

Make sure something inside the loop eventually makes the condition false, otherwise it runs forever (an "infinite loop"). Here, `count` shrinks to 0.

## break and continue

- `break` exits the loop immediately.
- `continue` skips to the next iteration.

```python
for n in range(10):
    if n == 5:
        break        # stop entirely at 5
    if n % 2 == 0:
        continue     # skip even numbers
    print(n)         # prints 1, 3
```

## Looping with an index

Need both the position and the value? Use `enumerate`:

```python
for index, fruit in enumerate(["apple", "banana"]):
    print(index, fruit)   # 0 apple / 1 banana
```

## Key takeaways

- `for x in sequence:` runs once per item.
- `range(n)` counts from 0 up to (not including) n.
- `while condition:` repeats until the condition is false, avoid infinite loops.
- `break` stops the loop; `continue` skips to the next round.
- `enumerate` gives you index and value together.
