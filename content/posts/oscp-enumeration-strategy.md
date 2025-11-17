---
title: "OSCP Enumeration Strategy and Methodology"
date: "2024-02-01"
slug: "oscp-enumeration-strategy"
category: "OSCP Notes"
tags: ["OSCP", "Enumeration", "Methodology", "Checklist"]
summary: "A structured approach to enumeration for OSCP-style assessments, covering initial reconnaissance through privilege escalation."
---

# OSCP Enumeration Strategy and Methodology

A systematic enumeration approach is crucial for successful penetration tests. This post outlines a structured methodology.

## Phase 1: Initial Reconnaissance

### Port Scanning

Start with a comprehensive port scan:

```bash
nmap -sC -sV -oA initial_scan target_ip
```

Follow up with a full port scan:

```bash
nmap -p- -oA full_scan target_ip
```

### Service Enumeration

For each discovered service, run service-specific enumeration:

**SMB:**
```bash
smbclient -L //target_ip
enum4linux -a target_ip
```

**HTTP/HTTPS:**
```bash
nikto -h http://target_ip
dirb http://target_ip /usr/share/wordlists/dirb/common.txt
```

**SSH:**
```bash
ssh-audit target_ip
```

## Phase 2: Vulnerability Identification

### Version Detection

Compare discovered versions against known vulnerabilities:

```bash
searchsploit "service name version"
```

### Manual Testing

Don't rely solely on automated tools. Manual testing often reveals issues scanners miss.

## Phase 3: Exploitation

### Proof of Concept

Always test exploits in a safe environment first. Document the exact steps taken.

### Initial Access

Once initial access is gained, immediately:
1. Stabilize the shell
2. Upgrade to a full TTY
3. Document the access method

## Phase 4: Post-Exploitation

### Enumeration Scripts

Run automated enumeration scripts:

**Linux:**
```bash
./linpeas.sh
```

**Windows:**
```powershell
.\winpeas.exe
```

### Manual Checks

Automated scripts are helpful, but manual checks are essential:
- Check for world-writable files
- Review cron jobs and scheduled tasks
- Examine environment variables
- Look for credentials in configuration files

## Phase 5: Privilege Escalation

### Common Vectors

- SUID/SGID binaries
- Misconfigured sudo permissions
- Kernel exploits
- Scheduled tasks with weak permissions
- Service misconfigurations

### Documentation

Document every step:
- Commands run
- Outputs received
- Screenshots of important findings
- Time spent on each phase

## Time Management

Allocate time wisely:
- Initial enumeration: 30-40%
- Exploitation: 30-40%
- Privilege escalation: 20-30%

## Tools Checklist

- Nmap
- Enumeration scripts (LinPEAS, WinPEAS)
- Exploit frameworks
- Note-taking tools
- Screenshot utilities

