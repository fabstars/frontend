import React from "react";

const HighlightedLinks = () => {
  return (
    <div className="row mt-5">
      <div className="col-md-12">
        <div className="text-center mt-3">
          <button class="button-64"><span class="text">Highlighted Links</span></button>
        </div>
      </div>
      <div className="col-md-12">
        <div className="btn-wrapper text-center" style={{"margin-top": "90px"}}>
          <button class="button-64"><span class="text">Highlighted Links</span></button>
        </div>
      </div>
      {/* <div className="col-md-12">
        <div className="btn-wrapper text-center mt-3">
          <button className="btn btn-more">View more</button>
        </div>
      </div> */}
    </div>
  );
};

export default HighlightedLinks;
