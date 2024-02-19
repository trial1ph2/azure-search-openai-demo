import subprocess, sys

# p = subprocess.Popen(["sh", "-c", "source prepdocs.sh"], 
#               stdout=sys.stdout)
# p.communicate()

print(subprocess.run(["./prepdocs.sh", 
                "arguments"], shell=True))


# import os
# os.popen('sh prepdocs.sh')