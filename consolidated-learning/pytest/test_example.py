import math
import pytest


def test_it_works():
    assert 2 + 2 == 4


@pytest.mark.skip("known issue in math")
def test_failure():
    assert math.pi == 3
