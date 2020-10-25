import React, { Component } from "react";
import { getData, postData } from "../../helpers/CRUD";
import { Link } from "react-router-dom";
import "../../assets/styles.css";
import customStyle from "../../assets/customstyles.module.css";
import style from "../../assets/customSass.module.scss";
import { Modal, Button } from "react-bootstrap";
class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailCategory: {},
      isLoading: true,
    };
  }
  getCatgory = async () => {
    this.setState((prevState) => ({
      ...prevState,
      isLoading: true,
    }));
    try {
      const response = await getData(`/category/${this.props.match.params.id}`);
      if (response) {
        this.setState((prevState) => ({
          ...prevState,
          detailCategory: response.data.data,
        }));
      }
    } catch (error) {
      console.log(error.response);
    }
    this.setState((prevState) => ({
      ...prevState,
      isLoading: false,
    }));
  };
  componentDidMount() {
    this.getCatgory();
  }
  render() {
    const { detailCategory, isLoading } = this.state;
    return (
      <div>
        <Link to="/">Back</Link>
        {isLoading && (
          <div className="loading">
            <h5>Loading....</h5>
          </div>
        )}
        <button className="btn btn-warning">alen</button>
        {!isLoading && (
          <div className={style.container}>
            {Object.keys(detailCategory).length > 0 && (
              <h1 className={style.green}>{detailCategory.name}</h1>
            )}
            {!(Object.keys(detailCategory).length > 0) && <p>not found</p>}
          </div>
        )}
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}

export default Category;
