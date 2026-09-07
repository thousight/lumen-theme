#include <iostream>
#include <vector>

#define MAX_BUFFER 1024

/**
 * C++ Sample for Lumen Themes
 */
class Verification {
public:
    Verification(int id) : m_id(id) {}

    void display() const {
        std::cout << "Verification ID: " << m_id << std::endl;
    }

private:
    int m_id;
};

int main() {
    Verification v(42);
    v.display();

    std::vector<int> nums = {1, 2, 3};
    for (int n : nums) {
        if (n > 0) {
            std::cout << n << " ";
        }
    }

    return 0;
}
