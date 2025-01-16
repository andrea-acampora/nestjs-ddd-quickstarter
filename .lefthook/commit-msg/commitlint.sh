#!/usr/bin/env bash

# list of Conventional Commits types
types=(
fix feat chore docs perf revert test ci build style refactor
)

# the commit message file is the only argument
msg_file="$1"

# join types with | to form regex ORs
r_types="($(IFS='|'; echo "${types[*]}"))"
# optional (scope)
r_scope="(\([[:alnum:] \/-]+\))?"
# optional breaking change indicator and colon delimiter
r_delim='!?:'
# subject line, body, footer
r_subject=" [[:alnum:]].+"
# the full regex pattern
pattern="^$r_types$r_scope$r_delim$r_subject$"

# Check if commit is conventional commit
if grep -Eq "$pattern" "$msg_file"; then
    exit 0
fi


echo "[ERROR]: Invalid commit message!"
exit 1