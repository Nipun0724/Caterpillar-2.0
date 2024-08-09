import React from "react";

const Header = ({ setActiveStep }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setActiveStep((prevStep) => prevStep + 1);
  };
  return (
    <div>
      <div className="col-md-7 col-lg-8">
        <form className="needs-validation" novalidate="">
          <div className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="serial-number" className="form-label">
                Serial Number
              </label>
              <input
                type="text"
                className="form-control"
                id="serial-number"
                placeholder="Serial Number"
                required
              />
              <div className="invalid-feedback">
                Valid Serial Number is required.
              </div>
            </div>

            <div className="col-sm-6">
              <label htmlFor="inspector-name" className="form-label">
                Inspector name
              </label>
              <input
                type="text"
                className="form-control"
                id="inspector-name"
                placeholder="Inpector name"
                required
              />
              <div className="invalid-feedback">
                Valid Inspector name is required.
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="inspector-id" className="form-label">
                Inspector ID
              </label>
              <div className="input-group has-validation">
                <input
                  type="text"
                  className="form-control"
                  id="inspector-id"
                  placeholder="Inspector ID"
                  required
                />
                <div className="invalid-feedback">Valid id is required.</div>
              </div>
            </div>

            <div className="col-12 mb-4">
              <label htmlFor="customer-name" className="form-label">
                Customer Name
              </label>
              <input
                type="email"
                className="form-control"
                id="customer-name"
                placeholder="Customer Name"
                required
              />
              <div className="invalid-feedback">
                Please enter a valid email address.
              </div>
            </div>
          </div>

          <button
            class="button-30 submit-btn"
            role="button"
            onClick={handleSubmit}
          >
            <span class="text">Submit</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
