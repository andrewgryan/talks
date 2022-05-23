
# Test Driven Development

Consolidated learning session

---

## Session overview

### Getting started
- Python testing frameworks

### Theory
- Test driven development (TDD) primer
- Working effectively with legacy code

### Live code session

---

## Getting started


### Unittest
- Python standard library
- No installation
- xUnit architecture

### Pytest
- Minimal boilerplate
- Conda or pip install

```
conda install pytest
```

---

## Unittest
### Basics
- Object-oriented xUnit design pattern

```python
import unittest

class TestHello(unittest.TestCase):
    def test_hello(self):
        self.assertEqual(1 + 1, 2)
```

### Run
```bash
python -m unittest
```

---

## Pytest
### Basics
- No import or special assert needed

```python
def test_hello():
    assert 1 + 1 == 2
```

### Run
```bash
pytest
```


---

## Pytest
### Basics

- Easy to add tests

```python
def test_two_plus_two_is_four():
    assert 2 + 2 == 4
        
def test_str_upper():
    assert "hello".upper() == "HELLO"
```

---

## Pytest
### Basics

- Easy to test raised errors

```python
import pytest

def test_expected_failure():
    with pytest.raises(ZeroDivisionError):
        1 / 0
```
---

## Pytest
### Basics

- Easy to skip a test

```python
import pytest

@pytest.mark.skip("reason to skip")
def test_not_interesting():
    assert taxicab(2) == 1729
```
---

## Pytest
### Basics

- Easy to reuse complex setup

```python
@pytest.fixture
def complex_object():
    ...
    return LifeTheUniverseEverything(...)

def test_small_feature(complex_object):
    assert complex_object.meaning == 42
```
---

## Pytest
### Basics

- Easy to repeat test with different values

```python
@pytest.mark.parametrize("given,expected", [
    (1, 1),
    (2, 2),
    (3, "Fizz"),
    (4, 4),
    (5, "Buzz"),
    (6, "Fizz"),
    (15, "FizzBuzz"),
])
def test_fizz_buzz(given, expected):
    assert fizz_buzz(given) == expected
```

---

## Pytest
### Test runner

- Simply run `pytest` in a terminal
- It detects files named `test_*.py`
- It runs functions named `test_*` inside those files

---

# Test Driven Development

Repeat these 3 steps

## Red

Write a failing test

### Green

Write minimal code to pass all tests

#### Refactor

Refactor with confidence

---

# Testing pyramid

A well tested system should have mostly
unit tests, some integration tests and a
few end-to-end tests.

```
    *     <- End-to-end
   ***    <- Integration
  *****   |
 *******  | Unit
********* |

```

---

# Technique

## Working with legacy code

1. Write an end-to-end test
1. Refactor to expose a seam
1. Follow TDD to implement change

---

# Technique

## Simple code and easy tests
### Andy's tips
- Pure functions
- Fewer function arguments
- No optional keyword arguments
- Separate concerns
- Segregate interfaces
- Hoist I/O
- Type check up-front

---

## Code Kata

1. FizzBuzz
1. String calculator
1. Password input field validation
1. **Search functionality (Demo)**
1. Point of sale kata
1. Banking kata

[TDD Manifesto](https://tddmanifesto.com/exercises/)

---

# Further reading

## Website

- https://tddmanifesto.com/
- https://refactoring.guru/

## Books

Two fantastic books to learn more.

```
"Test Driven Development by Example"
    - Kent Beck

"Working with legacy code"
    - Michael Feathers

```

---

# The End 

That's all folks!

---
