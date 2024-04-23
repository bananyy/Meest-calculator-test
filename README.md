Три запити:

1. GET /brands
   ⦁ key – (string)
   ⦁ name – (string)
   ⦁ URL – (string)

2. GET /body-parameters/:brand
   ⦁ gender – (string)
   ⦁ clothes_parameters – (Obj {clothes_type}: [{body_parameter}, {body_parameter}, …])

3. POST 
   Request Body:
   ⦁ brand – (string)
   ⦁ gender – (string)
   ⦁ clothes_type – (string)
   ⦁ dimensional_data – (Obj {body_parameter}: {dimensions})

Response Body:
⦁ result_size – (string)

Приклади:

1. [
        {
        "brand_key": "adidas",
        "brand_name": "Adidas",
        "brand_img_url": "...",
        },
        {
        "brand_key": "asos",
        "brand_name": "Asos",
        "brand_img_url": "...",
        },
        {
        "brand_key": "columbia",
        "brand_name": "Columbia"
        "brand_img_url": "...",
        }
   ]

2. [
    {
    "gender": "men",
    "bodyParameters": {
        "hat": ["head_length"],
        "tshirt": ["chest_length", "waist_length"],
        "sweater": ["chest_length", "waist_length"],
        }
    },
    {
    "gender": "women",
    "bodyParameters": {
        "hat": ["head_length"],
        "tshirt": ["chest_length", "waist_length"],
        "sweater": ["chest_length", "waist_length"],
        }
    },
    {
    "gender": "child",
    "bodyParameters": {
        "hat": ["head_length"],
        "tshirt": ["chest_length", "waist_length"],
        "sweater": ["chest_length", "waist_length"],
        }
    },
   ]

3. Request:
{
  "brand": "adidas",
  "gender": "men",
  "clothes_type": "jacket",
  "dimensional_data": {
    "chest_length": 100,
    "waist_length": 90
  }
}

Response:
{
    "result_size": "L",
}
