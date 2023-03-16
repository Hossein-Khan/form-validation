import React from "react";

type SimpleInputProps = {};

const SimpleInput = function (props: SimpleInputProps): JSX.Element {
  return (
    <form>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
