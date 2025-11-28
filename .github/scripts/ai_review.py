import os
import sys
from textwrap import dedent

from openai import AzureOpenAI


def main():
    # Read diff from stdin
    diff = sys.stdin.read().strip()
    if not diff:
        print("No relevant changes detected.", end="")
        return

    # Safety: trim very large diffs so we don’t blow token limits
    if len(diff) > 16000:
        diff = diff[:16000] + "\n\n[Diff truncated for review…]"

    # ---- Azure OpenAI client ----
    # These come from GitHub Action env vars / secrets
    client = AzureOpenAI(
        api_key=os.environ["AZURE_API_KEY"],
        azure_endpoint=os.environ["AZUREAPI"],
        api_version=os.environ.get("AZURE_OPENAI_API_VERSION", "2024-02-15-preview"),
    )

    deployment_name = "gpt-4o"

    system_prompt = dedent("""
        You are a senior QA engineer and software architect reviewing a code change.

        Your job:
        - Understand what changed based on the git diff.
        - Identify RISK AREAS: logic bugs, edge cases, data integrity, security, performance,
          concurrency issues, and missing tests.
        - Suggest concrete tests (unit, integration, API, UI) that should be added or re-run.
        - Be strict but constructive.

        Respond in **Markdown** with this structure:

        ## Summary
        - Bullet points of what changed.

        ## Risk Assessment
        - Overall risk: <Low/Medium/High> (<score>/5)
        - Why you picked this score.

        ## Risk Areas & Code Review Comments
        - [file/path or module]
          - Observation / potential issue
          - Impact if this goes wrong
          - Suggested change / mitigation

        ## Suggested Tests
        - Test idea – why it’s important
        - …

        If the diff is trivial or low risk, say so explicitly and keep it short.
        Only comment on parts visible in the diff.
    """)

    user_prompt = f"Here is the git diff for this change:\n\n```diff\n{diff}\n```"

    completion = client.chat.completions.create(
        model=deployment_name,  # Azure uses deployment name here
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_prompt},
        ],
        temperature=0.2,
    )

    review_text = completion.choices[0].message.content.strip()
    print(review_text)


if __name__ == "__main__":
    main()
