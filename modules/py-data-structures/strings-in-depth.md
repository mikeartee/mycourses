# Working with Strings

You met strings in Module 1. Here's how to actually *work* with them.

## Strings are sequences

You can index and slice them just like lists:

```python
word = "python"
word[0]      # "p"
word[-1]     # "n"
word[0:3]    # "pyt"
len(word)    # 6
```

Strings are **immutable**, methods return a *new* string rather than changing the original.

## Handy string methods

```python
name = "  Ada Lovelace  "

name.strip()          # "Ada Lovelace"  (trim whitespace)
name.lower()          # "  ada lovelace  "
name.upper()          # "  ADA LOVELACE  "
"Ada".startswith("A") # True
"file.txt".endswith(".txt")  # True
"a,b,c".split(",")    # ["a", "b", "c"]
"-".join(["a", "b"])  # "a-b"
"hello".replace("l", "L")   # "heLLo"
"Ada".find("d")       # 1  (index of first match, -1 if absent)
```

Because they return new strings, you can chain them:

```python
"  Hello World  ".strip().lower()   # "hello world"
```

## f-strings, the full story

f-strings insert values and can format them:

```python
name = "Ada"
score = 0.8567

f"Hi {name}"              # "Hi Ada"
f"{score:.1%}"            # "85.7%"   (percent, 1 decimal)
f"{score:.2f}"            # "0.86"    (fixed, 2 decimals)
f"{42:>5}"                # "   42"   (right-align in width 5)
```

## Multi-line strings

Triple quotes span lines:

```python
text = """Line one
Line two"""
```

## Key takeaways

- Strings are immutable sequences, index and slice like lists.
- Methods return new strings: `strip`, `lower`, `upper`, `split`, `join`, `replace`, `startswith`, `find`, and more.
- Chain methods for readable transforms.
- f-strings format numbers with `{value:.2f}`, `{value:.1%}`, alignment, and more.
