

# Security Policy

## Reporting a Vulnerability

We take security issues seriously. If you discover a vulnerability in this boilerplate, please follow the steps below to help us reproduce, verify, and address the issue efficiently.

1. **Do not disclose publicly**
   Avoid creating GitHub issues or discussions that are publicly visible until the vulnerability is addressed.

2. **Submit your report via contact**:
   [https://hikky.co.jp/contact](https://hikky.co.jp/contact)

   Include the following information in your report:

   * **Affected version** of the boilerplate (e.g., 5.1.x, 4.0.x)

   * **Detailed description** of the vulnerability

   * **Observed behavior** and **expected behavior**

   * **Step-by-step reproduction instructions** (numbered list)

   * **Reliable exploit or proof-of-concept**, if possible

   * **Potential impact** and affected components

   * Any **related issues or variants** you may have discovered

   > Providing a working exploit or complete reproduction scenario increases the likelihood of acceptance and may qualify for recognition.

3. **Response and timeline**

   * Initial response within **3 business days**
   * Regular updates on investigation and mitigation plans
   * Confirmed vulnerabilities affecting supported versions will be patched promptly

4. **Acknowledgement and recognition**

   * Researchers may be credited in release notes or acknowledgements unless anonymity is requested
   * Reports with detailed steps and working exploits may be recognized more prominently

---

## Security Best Practices for Developers

To maintain a secure project when using this boilerplate:

* **Use supported versions** of the boilerplate, Nuxt, TypeScript, and Bun
* Enable **TypeScript strict mode** to prevent type-based issues
* Validate all inputs using **Zod schemas** or equivalent runtime checks
* Protect secrets; do not commit credentials or sensitive environment variables
* Keep dependencies up-to-date with Bun Workspaces or npm/yarn
* Run pre-commit checks consistently:

  ```bash
  bun typecheck  # Ensure 0 TypeScript errors
  bun lint       # Ensure 0 lint errors
  bun test:ut    # Ensure all unit tests pass
  ```

---

## Reporting Guidelines Summary

High-quality reports help us address issues faster:

* Include **clear steps to reproduce**
* Provide a **reliable exploit or proof-of-concept**
* Report **all related variants**
* Avoid **public disclosure** until the issue is patched

Following these guidelines ensures your report can be evaluated efficiently, may result in recognition, and contributes to a safer ecosystem for all users of Vket Boilerplate Nuxt.


