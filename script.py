import json as js 
coord = [float(i) for i in input().split(", ")]
id = input()

dictionary = {
  "id":int(id),
  "loc": {
    "x": coord[0],
    "y": coord[1]
  }
}

json_object = js.dumps(dictionary)

with open("public/jsons/" + str(id) + ".json", "w") as f:
  f.write(json_object)
