#!/bin/bash

# カバレッジを、PRコメントとコミットステータスとしてポストする

github_token=$1
commit_head_sha=$2
pr_number=$3
owner_and_repo=$4


bun test:coverage | tee coverage-tmp.txt

# Commit Status
coverage=$(grep '^All files' coverage-tmp.txt | awk '{print $4}')
curl -X POST \
  -H 'Accept: application/vnd.github+json' \
  -H "Authorization: Bearer $github_token" \
  -H 'X-GitHub-Api-Version: 2022-11-28' \
  -d "{\"state\":\"success\",\"description\":\"Coverage $coverage%\",\"context\":\"coverage/vitest\"}" \
  "https://api.github.com/repos/$owner_and_repo/statuses/$commit_head_sha"

curl -X POST \
  -H "Accept: application/vnd.github.v3+json" \
  -H "Authorization: Bearer $github_token" \
  -H 'X-GitHub-Api-Version: 2022-11-28' \
  -d "{\"body\":\":vertical_traffic_light: Test Coverage: **$coverage**%\"}" \
  "https://api.github.com/repos/$owner_and_repo/issues/$pr_number/comments"
