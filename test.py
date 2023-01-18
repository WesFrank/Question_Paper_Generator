import sys
import subprocess

# implement pip as a subprocess:
subprocess.check_call([sys.executable, '-m', 'pip', 'install', 
'mysql.connector'])

# Importing module
import mysql.connector
 
# Creating connection object
mydb = mysql.connector.connect(
    host = "localhost",
    user = "yourusername",
    password = "your_password"
)
 
# Printing the connection object
print(mydb)

# connect to database using pything and return certain information from database which will be written into a pdf file

print("Some Python Function Runs here in the file 'test.php' within the main root director. Use this script to read and write certain information to a pdf file for donwloading ...")