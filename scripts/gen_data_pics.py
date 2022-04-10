from PIL import Image
from PIL.ExifTags import TAGS 
import os
from pathlib import Path 

path = Path(os.getcwd())
path = path.parent.absolute()

for file in os.listdir(os.path.join(path,"public/photos")):
    image = Image.open(os.path.join(path,"public/photos/" + file))
    exifdata = image.getexif()
    for tag_id in exifdata:
        # get the tag name, instead of human unreadable tag id
        tag = TAGS.get(tag_id, tag_id)
        data = exifdata.get(tag_id)
        # decode bytes 
        if isinstance(data, bytes):
            data = data.decode()
        print(f"{tag:25}: {data}")
    print("\n\n\n")