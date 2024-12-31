import React from "react";

function About(props) {
  return (
    <div
      className="container"
      style={{
        color: props.mode === "dark" ? "white" : "#042743", 
        backgroundColor: props.mode === "dark" ? "#042743" : "white", 
      }}
    >
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{
                backgroundColor: props.mode === "dark" ? "#333" : "#f1f1f1", 
                color: props.mode === "dark" ? "white" : "#042743", 
                borderColor: props.mode === "dark" ? "#444" : "#ccc",
              }}
            >
            Analyze your text
            </button>
          </h2>
          <div
            i
            d="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                color: props.mode === "dark" ? "white" : "#042743",
                backgroundColor: props.mode === "dark" ? "#333" : "white", 
              }}
            >
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{
                backgroundColor: props.mode === "dark" ? "#333" : "#f1f1f1",
                color: props.mode === "dark" ? "white" : "#042743",
                borderColor: props.mode === "dark" ? "#444" : "#ccc",
              }}
            >
             Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                color: props.mode === "dark" ? "white" : "#042743",
                backgroundColor: props.mode === "dark" ? "#333" : "white",
              }}
            >
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{
                backgroundColor: props.mode === "dark" ? "#333" : "#f1f1f1",
                color: props.mode === "dark" ? "white" : "#042743",
                borderColor: props.mode === "dark" ? "#444" : "#ccc",
              }}
            >
             Browser compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                color: props.mode === "dark" ? "white" : "#042743",
                backgroundColor: props.mode === "dark" ? "#333" : "white",
              }}
            >
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
