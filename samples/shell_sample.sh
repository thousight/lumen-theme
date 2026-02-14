#!/bin/bash

# Shell Sample for Lumen Theme
PROJECT_NAME="Lumen Theme"
VERSION="0.2.0"

function log_message() {
    local message=$1
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] $message"
}

if [[ -d "./themes" ]]; then
    log_message "Found themes directory for $PROJECT_NAME"
    for file in ./themes/*.json; do
        log_message "Processing $file..."
    done
else
    log_message "Error: themes directory not found"
    exit 1
fi

echo "Version: ${VERSION}"
