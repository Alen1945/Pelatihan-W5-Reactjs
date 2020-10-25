import React, { Component } from "react";
import { getData, postData } from "../../helpers/CRUD";
import { Link } from "react-router-dom";
class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
      },
      listCategory: {
        data: [],
        metadata: {},
      },
    };
  }
  getCatgory = async () => {
    try {
      const response = await getData("/category?limit=100");
      this.setState((prevState) => ({
        ...prevState,
        listCategory: response.data,
      }));
    } catch (error) {
      console.log(error.response);
    }
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postData("/category", this.state.form);
      this.getCatgory();
    } catch (error) {
      console.log(error.response);
    }
  };
  handleChange = async (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState((prevState) => ({
      ...prevState,
      form: {
        ...prevState.form,
        [name]: value,
      },
    }));
  };
  componentDidMount() {
    this.getCatgory();
  }
  render() {
    const { listCategory, form } = this.state;
    return (
      <div>
        <h4>Form Category</h4>
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            onChange={this.handleChange}
            value={form.name}
            placeholder="input category"
          />
          <button type="submit">Add Category</button>
        </form>
        <h4>List Category</h4>
        <ul>
          {listCategory.data.length > 0 &&
            listCategory.data.map((v) => (
              <Link to={`/detail/${v.id}`}>
                <li key={v.id}>{v.name}</li>
              </Link>
            ))}
        </ul>
      </div>
    );
  }
}

export default Category;
