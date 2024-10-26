rows = int(input("Enter the number of rows"))

for i in range(rows):
  row = ""
  number = 1
  for j in range(i):
    row += str(number) + " "
    number += 2
  print(row)
  