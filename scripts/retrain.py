import subprocess, sys

p = subprocess.Popen(["powershell.exe", 
              ".\\prepdocs.ps1"], 
              stdout=sys.stdout)
p.communicate()