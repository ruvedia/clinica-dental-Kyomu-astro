from PIL import Image

def remove_background(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    new_data = []
    # Targeted color: light greyish (dcdcdc or similar)
    for item in datas:
        # If it's light grey (high values of R, G, B and close to each other)
        if item[0] > 200 and item[1] > 200 and item[2] > 200:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)

    img.putdata(new_data)
    img.save(output_path, "PNG")

remove_background("public/img/fisioprotema/marca.png", "public/img/fisioprotema/marca_clean.png")
