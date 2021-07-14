import {useRef} from "react";

const SellForm = (props) => {
  const titleInputRef = useRef()
  const descriptionInputRef = useRef()
  const priceInputRef = useRef()
  const categoryInputRef = useRef()

  const submitHandler = (event)=>{
    event.preventDefault();
    const enteredTitleInput = titleInputRef.current.value;
    const enteredDescriptionInput = descriptionInputRef.current.value;
    const enteredPriceInput = priceInputRef.current.value;
    const enteredCategoryInput = categoryInputRef.current.value;
    
    const data = {
      title: enteredTitleInput,
      description: enteredDescriptionInput,
      price: enteredPriceInput,
      category: enteredCategoryInput
    }
    console.log("sending data")
    props.onSubmit(data)
  }

  return (
    <form onSubmit={submitHandler}>
      <h2 className="border-bottom">Add Product</h2>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          aria-describedby="emailHelp"
          ref = {titleInputRef}
        />
        {/* <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div> */}
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="description"
          rows="4"
          ref ={descriptionInputRef}
        ></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Price
        </label>
        <input type="number" className="form-control" id="price" ref={priceInputRef}  />
      </div>

      <label htmlFor="category" className="form-label">
          Category
        </label>
      <select id='category' className="form-select mb-3" aria-label="Default select example" ref={categoryInputRef}>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default SellForm;
