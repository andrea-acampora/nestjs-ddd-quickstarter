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

RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m'

echo "${RED}ERROR: Invalid commit message${NC}:
${PURPLE}$( cat "$msg_file" )${NC}"
echo "
Your commit message does ${RED}not${NC} follow ${PURPLE}Conventional Commits${NC} formatting: ${BLUE}https://www.conventionalcommits.org/${NC}
Conventional Commits start with one of the following types:
    ${GREEN}$(IFS=' '; echo "${types[*]}")${NC}
followed by an ${PURPLE}optional scope within parentheses${NC},
followed by an ${RED}exclamation mark${NC} (${RED}!${NC}) in case of ${RED}breaking change${NC},
followed by a colon (:),
followed by the commit message.
Example commit message fixing a bug non-breaking backwards compatibility:
    ${GREEN}fix(module): fix bug #42${NC}
Example commit message adding a non-breaking feature:
    ${GREEN}feat(module): add new API${NC}
Example commit message with a breaking change:
    ${GREEN}refactor(module)!: remove infinite loop${NC}
"
exit 1