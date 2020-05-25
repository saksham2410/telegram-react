import sys, getopt, time
import os.path
import time
phone = sys.argv[1]
# phone = '+919892498206'
print(sys.argv[1])
# print(sys.argv[0])
file_path = '/Users/saksham/desktop/projects/progressive-react/server/' + sys.argv[1] +'.txt'
print(file_path)
while not os.path.exists(file_path):
    time.sleep(1)
if os.path.isfile(file_path):
    f = open(file_path, "r")
    sys.argv[1] = f.read()
    print(sys.argv[1])
    f.close()
    # print(f.read())
else:
    raise ValueError("%s isn't a file!" % file_path)

# print(phone)