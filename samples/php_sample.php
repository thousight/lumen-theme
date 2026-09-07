<?php

namespace Lumen\Verification;

/**
 * PHP Sample for Lumen Themes
 */
class ThemeVerifier {
    private string $name;
    private int $version;

    public function __construct(string $name, int $version) {
        $this->name = $name;
        $this->version = $version;
    }

    public function verify(): bool {
        if ($this->version > 0) {
            echo "Verifying {$this->name} version {$this->version}
";
            return true;
        }
        return false;
    }
}

$verifier = new ThemeVerifier("Lumen", 1);
$verifier->verify();
