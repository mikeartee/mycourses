# Installing and Running Python

## Install

Download the latest Python from [python.org/downloads](https://www.python.org/downloads/) and install it.

- **Windows:** run the installer and **tick "Add python.exe to PATH"** before clicking Install. This one checkbox saves a lot of pain later.
- **macOS/Linux:** a version may already be present, but installing the latest from python.org (or via a package manager) is fine.

Check it worked by opening a terminal (Command Prompt / PowerShell / Terminal) and running:

```bash
python --version
```

You should see something like `Python 3.12.x`. On some systems the command is `python3`.

## Two ways to run code

### 1. The REPL (interactive)

Type `python` with no arguments and you get an interactive prompt called the **REPL** (Read-Eval-Print Loop):

```python
>>> 2 + 2
4
>>> print("hi")
hi
```

It runs each line as you type it and shows the result immediately. It's perfect for quick experiments. Type `exit()` to leave.

### 2. A script file

For anything longer than a quick test, save your code in a file ending in `.py`:

```python
# hello.py
print("Hello from a file!")
```

Then run it from the terminal:

```bash
python hello.py
```

## Comments

Anything after a `#` on a line is a **comment**, Python ignores it. Comments are notes for humans:

```python
# This calculates the total
total = 3 + 4  # you can also comment at the end of a line
```

## Key takeaways

- Install from python.org; on Windows, add Python to PATH.
- `python --version` confirms the install.
- Use the REPL for experiments, `.py` files for real programs.
- `#` starts a comment.
