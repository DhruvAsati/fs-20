import { useState } from "react";
import instance from "../axiosConfig";

function AddProduct() {
  const [data, setData] = useState({
    name: "",
    brand: "",
    category: "",
    price: "",
    description: "",
    attribute: {},
    inStock: "",
    inventory: "",
    image: "",
  });

  function handleChange(e) {
    // if (e.target.name === "attributeName") {
    //   setData({
    //     ...data,
    //     attribute: { ...data.attribute, name: e.target.value },
    //   });
    // }
    // if (e.target.name === "attributeValue") {
    //   setData({
    //     ...data,
    //     attribute: { ...data.attribute, value: e.target.value },
    //   });
    // }
    if (e.target.name === "image") {
      setData({ ...data, [e.target.name]: e.target.files[0] });
    } else {
      const { name, value } = e.target;
      setData({ ...data, [name]: value });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(data);
    const formdata = new FormData();
    // const finalData = Object.fromEntries(formdata.entries());

    formdata.append("name", data.name);
    formdata.append("price", data.price);
    formdata.append("category", data.category);
    formdata.append("brand", data.brand);
    formdata.append("description", data.description);
    formdata.append("inStock", data.inStock);
    formdata.append("inventory", data.inventory);
    formdata.append("image", data.image);

    const response = await instance.post("/product/add", formdata);
    console.log(response);
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          placeholder="Name"
          value={data.name}
          name="name"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Brand"
          value={data.brand}
          name="brand"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Category"
          value={data.category}
          name="category"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Price"
          value={data.price}
          name="price"
          onChange={handleChange}
        />
        <br />
        <textarea
          name="description"
          value={data.description}
          placeholder="Description"
          id=""
          onChange={handleChange}
        ></textarea>
        <br />
        {/* <div id="attributes">
          <input
            type="text"
            name="attributeName"
            placeholder="Enter Attribute Name"
            value={data.attribute.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="attributeValue"
            placeholder="Enter Attribute Value"
            value={data.attribute.value}
            onChange={handleChange}
          />
        </div> */}
        <div id="inStock">
          <input
            type="radio"
            name="inStock"
            value={true}
            onChange={handleChange}
          />
          True
          <input
            type="radio"
            name="inStock"
            value={false}
            onChange={handleChange}
          />
          False
        </div>
        <input
          type="text"
          name="inventory"
          placeholder="Enter Inventory Count"
          value={data.inventory}
          onChange={handleChange}
        />{" "}
        <br />
        <input type="file" name="image" onChange={handleChange} />
        <button type="submit">Add Product</button>
      </form>
    </>
  );
}

export default AddProduct;