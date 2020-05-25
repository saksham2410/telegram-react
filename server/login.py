import csv
import sys
import getopt
import time
import os.path
import time

from telethon.sync import TelegramClient
# module necessary to scrap groups list
from telethon.tl.functions.messages import GetDialogsRequest
from telethon.tl.types import InputPeerEmpty
# producing coloured outputs
# from terminal_colors import TerminalColors as tc


'''
  *** SCRAPPING USERS FROM TELEGRAM GROUP ***
  -------------------------------------------
  Necessary Things:
    * API ID
    * API HASH
    * Associated Mobile number
'''

api_id = 611725
api_hash = '02bd7c6b4ba8ad9bf600eed384e50825'
phone = sys.argv[1]
print(sys.argv[1])
# print(sys.argv[0])
file_path = '/Users/saksham/desktop/projects/progressive-react/server/' + \
    sys.argv[1] + '.txt'
# # getting credentials
# try:
#   api_id = int(input ("[*] Enter API-ID: "));
#   api_hash = input ("[*] Enter API Hash: ");
#   phone = input ("[*] Enter mobile number with country code: ");
# except:
#   print ("[*]" + tc.RED + " INVALID INPUT DETECTED" + tc.RESET)
#   sys.exit()

print("initiated")
# creation of client
client = TelegramClient(phone, api_id, api_hash)

# connecting to telegram application
# after connection is made .session file will be generated
# this is a database file which makes your session persistant
client.connect()

# checking if authorization is already made or not
if not client.is_user_authorized():
    client.send_code_request(phone)
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
    client.sign_in(phone, sys.argv[1])


# empty list to populate the results from GetDialogsRequest
chat = []
group = []

result = client(GetDialogsRequest(offset_date=None,
                                  offset_id=0,
                                  offset_peer=InputPeerEmpty(),
                                  limit=200,
                                  hash=0))
chat.extend(result.chats)


# target only super groups
# to avoid error if not super group
for temp in chat:
    try:
        if temp.megagroup == True:
            group.append(temp)
    except:
        continue


# requesting user to select a group to scrap members in it
count = 0
print('[*] Select a group to scrap ')
# listing all available groups
for tmp in group:
    print('\t[-]' + str(count) + '-' + tmp.title)
    count = count + 1

# getting group index
group_index = input('[*] Preferred group index: ')
group_selected = group[int(group_index)]

# scraping members of selected group
print('[*] Fetching members. . . .')
all_members = []
all_members = client.get_participants(group_selected, aggressive=True)


def loading():
    print('loading...')

    for i in range(1, 101):
        time.sleep(0.1)
        print("\u001b[400D" + str(i) + '%', flush=True, end='')
    print()


# writing all members info into a CSV file
print('[*] Writing to file. . . . .')
loading()

with open("members_list.csv", "w", encoding='UTF-8') as f:
    writer = csv.writer(f, delimiter=",", lineterminator="\n")
    writer.writerow(['username', 'user id', 'access hash',
                     'name', 'group', 'group id'])

    for user in all_members:
        # checking if user name is available
        if user.username:
            username = user.username
        else:
            username = ""

        # checking if user has first name
        if user.first_name:
            first_name = user.first_name
        else:
            first_name = ""
        # checking if user has last name
        if user.last_name:
            last_name = user.last_name
        else:
            last_name = ""

        name = (first_name + ' ' + last_name).strip()

        writer.writerow([username,
                         user.id,
                         user.access_hash,
                         name,
                         group_selected.title,
                         group_selected.id])

print('[*] Members list  written to file... Done')
print('[*]' + ' Status: Done')
