import React from 'react';
import ReactDOM from 'react-dom';

class MissionSection extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      
    };
  }

  componentDidMount() {
      
  }

  render() {
    var headerBeginning = "N A T U R E ' S"
    var headerEnd = "F I N G E R P R I N T"
    var paragraphOne = "Ali Dakota was created on Kauai by founder and artist Jill Smith. She came across the art of eco-printing, the process of imprinting Mother Nature’s flora onto fabrics. She instantly knew this was a form of art she could take with her while she traveled the world with her family. Through thoughtful design and the alchemy of the natural world, each piece Jill creates is one-of-a-kind."
    var paragraphTwo = "The line brings together the love of nature, exploration, adventure, and art. Jills artistic process is rooted in gratitude and offers you a sense of grounded energy as you walk your path. Ali Dakota is sustainably crafted in Los Angeles, using Jill's naturally hand-printed fabric and up-cycled remnants from airplane seat leather. In a world of disposable fashion, Ali Dakota offers a quality product meant to last."
    return (
        <div id="MissionSection" >
          <h1>{headerBeginning}&nbsp; &nbsp;{headerEnd}</h1>
          <p1>{paragraphOne}<br/></p1>
          <p1>{paragraphTwo}</p1>
        </div>
        
    );
  }
}

module.exports = MissionSection;