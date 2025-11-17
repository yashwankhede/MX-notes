---
title: "Linux Privilege Escalation Checklist"
date: "2024-02-15"
slug: "linux-privesc-checklist"
category: "OSCP Notes"
tags: ["OSCP", "Linux", "Privilege Escalation", "Checklist"]
summary: "A comprehensive checklist for Linux privilege escalation covering common vectors and enumeration techniques."
---

# Linux Privilege Escalation Checklist

A systematic approach to Linux privilege escalation enumeration and exploitation.

## Initial Enumeration

### System Information

```bash
uname -a
cat /etc/os-release
hostname
```

### User Information

```bash
id
whoami
groups
cat /etc/passwd
```

### Network Information

```bash
ifconfig
ip addr
netstat -tulpn
ss -tulpn
```

## SUID/SGID Binaries

### Find SUID Binaries

```bash
find / -perm -4000 2>/dev/null
find / -perm -2000 2>/dev/null
```

### Check GTFOBins

For each SUID binary, check [GTFOBins](https://gtfobins.github.io/) for exploitation methods.

## Capabilities

```bash
getcap -r / 2>/dev/null
```

Capabilities can grant specific privileges without full root access.

## Cron Jobs

### System Cron

```bash
cat /etc/crontab
ls -la /etc/cron.*
```

### User Cron

```bash
crontab -l
ls -la /var/spool/cron
```

### Writable Cron Scripts

Check if cron scripts are writable:

```bash
find /etc/cron* -type f -writable 2>/dev/null
```

## World-Writable Files

```bash
find / -type f -perm -0002 -ls 2>/dev/null
find / -type d -perm -0002 -ls 2>/dev/null
```

## Environment Variables

```bash
env
echo $PATH
```

Check for writable directories in PATH that could be exploited.

## NFS Shares

```bash
showmount -e target_ip
```

If NFS shares are mounted with no_root_squash, they can be exploited.

## Kernel Exploits

### Kernel Version

```bash
uname -r
cat /proc/version
```

### Search for Exploits

```bash
searchsploit "kernel version"
```

## Sudo Misconfiguration

### Sudo Permissions

```bash
sudo -l
```

Look for:
- Commands that can be run without password
- Commands that allow shell escape
- Wildcards in sudo rules

## Password Files

```bash
cat /etc/shadow
find / -name "*.pem" 2>/dev/null
find / -name "id_rsa" 2>/dev/null
```

## Service Misconfigurations

### Running Services

```bash
ps aux
systemctl list-units --type=service
```

### Writable Service Files

```bash
find /etc/systemd/system -type f -writable 2>/dev/null
```

## Automated Tools

While manual enumeration is important, automated tools can help:

```bash
./linpeas.sh
./linux-smart-enumeration.sh
```

## Documentation

Document all findings:
- SUID binaries found
- Cron jobs discovered
- Writable files identified
- Potential exploit paths

This checklist should be used as a starting point, not a complete solution. Always adapt based on the specific environment.

