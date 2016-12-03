import React from 'react';
import ReactDOM from 'react-dom';

class Collections extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      
    };
  }


  render() {
    var paragraphOne = "Living on the Garden Isle gives me endless bliss with the lush landscape to play in! As my family matured and went off on their own adventurous quests, I had time on my hands to discover a new way to transform fabrics through the art of Eco-printing. After tons of experimenting, I began unbundling fabrics that took my breath away as they revealed pigments that nature left behind. This is when my first Collection of Ali Dakota clutch handbags was conceived!"
    return (
        <div id="Collections">
          <h1>ABOUT THE COLLECTIONS</h1>
          <div className="CollectionContainer">
            <div className="CollectionContainerDescription">
              <h2>"Conception"</h2>
              <p1>{paragraphOne}</p1>
            </div>
            <div className="CollectionContainerImage">
              <img src="images/alidakota_img1.jpeg"/>
            </div>
          </div>
          <div className="CollectionContainer">
            <div className="CollectionContainerImage">
              <img src="images/alidakota_img1.jpeg"/>
            </div>
            <div className="CollectionContainerDescription">
              <h2>"Conception"</h2>
              <p1>{paragraphOne}</p1>
            </div>
          </div>
          <div className="CollectionContainer">
            <div className="CollectionContainerDescription">
              <h2>"Conception"</h2>
              <p1>{paragraphOne}</p1>
            </div>
            <div className="CollectionContainerImage">
              <img src="images/alidakota_img1.jpeg"/>
            </div>
          </div>
          <div className="CollectionContainer">
            <div className="CollectionContainerImage">
              <img src="images/alidakota_img1.jpeg"/>
            </div>
            <div className="CollectionContainerDescription">
              <h2>"Conception"</h2>
              <p1>{paragraphOne}</p1>
            </div>
          </div>
        </div>
        
    );
  }
}

module.exports = Collections;