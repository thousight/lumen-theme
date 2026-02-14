import os
from typing import List

@decorator
class Verification:
    """
    Verification class for Lumen Theme.
    """
    def __init__(self, name: str):
        self.name = name
        self.items: List[int] = [1, 2, 3]

    def process(self) -> bool:
        # Control flow should be accented/colored
        for item in self.items:
            if item % 2 == 0:
                print(f"Processing {self.name}: {item}")
        return True

if __name__ == "__main__":
    v = Verification("Lumen")
    v.process()
