import pytesseract
from pytesseract  import pytesseract
from pytesseract import Output
import PIL 
from PIL import Image 
import cv2 
import csv 

pytesseract.tesseract_cmd = "Tesseract/tesseract.exe"
img = "8.jpg"
imge = cv2.imread(img)
data = pytesseract.image_to_data(imge, output_type=Output.DICT)
n_boxes = len(data['level'])
for i in range(n_boxes):
    (x,y,w,h) = (data['left'][i], data['top'][i], data['width'][i], data['height'][i])
    cv2.rectangle(imge, (x,y), (x+w, y+h), (0,255,0), 2)

scale_percent = 20# percent of original size
width = int(imge.shape[1] * scale_percent / 100)
height = int(imge.shape[0] * scale_percent / 100)
dim = (width, height)
  
# resize image
resized = cv2.resize(imge, dim, interpolation = cv2.INTER_AREA)

cv2.imshow('img',resized)
cv2.waitKey(0)