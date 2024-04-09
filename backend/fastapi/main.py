from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from io import BytesIO
import onnxruntime
import numpy as np
from PIL import Image
import datetime
from fastapi.staticfiles import StaticFiles

app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://localhost:3000/scan",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.mount("/static", StaticFiles(directory="userImage"), name="static")
class BaseItem(BaseModel):
    prediction: list[list[float]]

@app.get('/')
async def root()    :
    return "Server started"

@app.post("/uploadImg")
async def getImage(file : UploadFile = File(...)):
    image = await file.read()
    image = Image.open(BytesIO(image))
    print(type(image))
   
    # download user image
    dateUpload = datetime.datetime.now().strftime("%m_%d_%Y_%H_%M_%S")
    imageName = dateUpload + ".jpg"
    imagePath = "./userImage/{imgName}".format(imgName=imageName)
    with open(imagePath, "wb") as f:
        image.save(f)


    image = image.resize((640, 640))  # Resize the image to match the desired shape

    # Convert the image to a NumPy array
    image_array = np.array(image)
    # image_array = np.resize(image_array, (640, 640, 3))
    image_array = image_array.astype(np.float32) / 255.0  # Normalize pixel values
    image_array = np.transpose(image_array, (2, 0, 1))  # Transpose dimensions to match [3, 640, 640]
    image_array = np.expand_dims(image_array, axis=0)  # Add batch dimension

    # Load the ONNX model
    onnx_model_path = "best.onnx"  # Replace "your_model.onnx" with the path to your ONNX model file
    sess = onnxruntime.InferenceSession(onnx_model_path)

    # Get the input name of the ONNX model
    input_name = sess.get_inputs()[0].name

    # Run inference
    output = sess.run(None, {input_name: image_array})

    # Assuming there is only one output, you can access it like this
    output_tensor = output[0]
    # print({"prediction": output_tensor.tolist()})
    # return {"prediction": output_tensor.tolist()}
    return JSONResponse(content=output_tensor.tolist())
