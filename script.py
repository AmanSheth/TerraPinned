coord = map(float, input().split(", "))
id = input()

line = """ {
  \"id\": #{str(id)},
  \"loc\": {
    \"x\": #{str(coord[0])},
    \"y\": #{str(coord[1])},
  }
}"""

print(line)