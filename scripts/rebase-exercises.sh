#!/usr/bin/env bash
set -euo pipefail

# Rebase all exercise branches onto main
# Usage: ./scripts/rebase-exercises.sh [--push]

PUSH=false
if [[ "${1:-}" == "--push" ]]; then
    PUSH=true
fi

BRANCHES=(
    "exercise/01-password-strength"
    "exercise/02-todo-list"
    "exercise/03-form-validation"
    "exercise/04a-dialog-modal"
    "exercise/04b-portal-modal"
    "exercise/05-user-directory"
    "exercise/06-shopping-cart"
    "exercise/07-data-table"
)

# Store current branch to return to it
CURRENT_BRANCH=$(git branch --show-current)

echo "Fetching latest..."
git fetch origin

echo "Updating main..."
git checkout main
git pull origin main

echo ""
echo "Rebasing exercise branches onto main..."
echo "========================================"

FAILED=()

for branch in "${BRANCHES[@]}"; do
    echo ""
    echo "→ $branch"

    if ! git checkout "$branch" 2>/dev/null; then
        echo "  ✗ Branch not found locally, skipping"
        FAILED+=("$branch (not found)")
        continue
    fi

    if git rebase main; then
        echo "  ✓ Rebased successfully"

        if $PUSH; then
            if git push origin "$branch" --force-with-lease; then
                echo "  ✓ Pushed"
            else
                echo "  ✗ Push failed"
                FAILED+=("$branch (push failed)")
            fi
        fi
    else
        echo "  ✗ Rebase failed - aborting"
        git rebase --abort
        FAILED+=("$branch (rebase conflict)")
    fi
done

# Return to original branch
echo ""
git checkout "$CURRENT_BRANCH"

echo ""
echo "========================================"
if [ ${#FAILED[@]} -eq 0 ]; then
    echo "All branches rebased successfully!"
else
    echo "Failed branches:"
    for f in "${FAILED[@]}"; do
        echo "  - $f"
    done
fi

if ! $PUSH; then
    echo ""
    echo "Run with --push to force push all branches to origin"
fi
