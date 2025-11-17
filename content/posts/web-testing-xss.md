---
title: "Web Testing Notes - XSS and Input Validation"
date: "2024-01-20"
slug: "web-testing-xss"
category: "Web Testing"
tags: ["Web Testing", "XSS", "Input Validation", "OWASP"]
summary: "Notes on cross-site scripting (XSS) vulnerabilities and input validation testing techniques for web applications."
---

# Web Testing Notes - XSS and Input Validation

Cross-site scripting (XSS) remains one of the most common web application vulnerabilities. This post covers testing techniques and common bypass methods.

## Types of XSS

### Reflected XSS

Reflected XSS occurs when user input is immediately reflected in the application's response without proper sanitization.

**Example Payload:**
```html
<script>alert(document.domain)</script>
```

### Stored XSS

Stored XSS occurs when malicious scripts are permanently stored in the application, typically in a database.

**Example Payload:**
```html
<img src=x onerror="alert('XSS')">
```

### DOM-Based XSS

DOM-based XSS occurs when the vulnerability exists in client-side code rather than server-side code.

## Testing Methodology

### Input Points

Identify all user input points:
- Form fields
- URL parameters
- HTTP headers
- Cookie values

### Encoding Bypasses

Many applications attempt to filter XSS by encoding or removing certain characters. Common bypass techniques include:

**HTML Entity Encoding:**
```html
&#60;script&#62;alert(1)&#60;/script&#62;
```

**JavaScript Encoding:**
```javascript
\u003cscript\u003ealert(1)\u003c/script\u003e
```

**Event Handlers:**
```html
<body onload="alert('XSS')">
```

## Prevention

- Implement Content Security Policy (CSP)
- Use output encoding appropriate for the context
- Validate and sanitize all user input
- Use framework-provided templating that auto-escapes

## Tools

- Burp Suite for manual testing
- XSSer for automated testing
- Browser developer tools for DOM analysis

