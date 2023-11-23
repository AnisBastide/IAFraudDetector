import pickle
from typing import Union

from fastapi import FastAPI
import pandas as pd
from pydantic import BaseModel
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

app = FastAPI()


class InputData(BaseModel):
    distance_from_home: float
    distance_from_last_transaction: float
    ratio_to_median_purchase_price: float
    repeat_retailer: bool
    used_chip: bool
    used_pin_number: bool
    online_order: bool

@app.post("/")
def read_root(input_data:InputData):
    distance_from_home = 50
    distance_from_last_transaction = 25
    ratio_to_median_purchase_price = 1.9
    repeat_retailer = 1
    used_chip = 1
    used_pin_number = 1
    online_order = 0

    input_values = [
        input_data.distance_from_home, input_data.distance_from_last_transaction, input_data.ratio_to_median_purchase_price,
        input_data.repeat_retailer, input_data.used_chip, input_data.used_pin_number,
        input_data.online_order
    ]


    # Load the model
    rf = pickle.load(open('model.pkl', 'rb'))
    prediction = rf.predict([input_values])[0]

    return {"prediction":prediction}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):

    return {"item_id": item_id, "q": q}