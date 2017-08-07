import React from "react";

// Import sub-components
import Search from "./children/Search";
import Results from "./children/Results";

// Helper Function
import helpers from "../utils/helpers";

class Main extends React.Component {

  constructor() {
    super();
    this.state = {
      searchTerm: [],
      startDate: "",
      endDate: "",
    };
    // this.setTerm = this.setTerm.bind(this);
  }

  //   
  // }

  // componentDidUpdate(prevProps, prevState) {

  //   if (prevState.searchTerm !== this.state.searchTerm) {
  //     console.log("UPDATED");

  //     helpers.runQuery(this.state.searchTerm).then((data) => {
  //       if (data !== this.state.results) {
  //         console.log(data);

  //         this.setState({ results: data });
  //       }
  //     });
  //   }
  // }

  // setTerm(term) {
  //   this.setState({
  //     searchTerm: term
  //   });
  // }
  render () {
    return (

      <div className="container">
          <div className="jumbotron text-center">
           <h1>New York Times Article Scrubber</h1>
           <p>Search for and annotate articles of interest!</p>
          </div>

          <div className="row">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Search</h3>
              </div>
              <div className="panel-body">
                <Search />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Articles</h3>
                </div>
                <div className="panel-body">
                  {/*<Articles />*/}
                </div>
              </div>
            </div>      

            <div className="col-md-6">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Results</h3>
                </div>
                <div className="panel-body">
                  {/*<Results />*/}
                </div>
              </div>
            </div>      
          </div>

        </div>

      
    );
  }
}

export default Main;