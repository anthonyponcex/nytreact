import React from "react";

class Search extends React.Component {
    constructor() {
        super();

        this.state = {
            term: ""
        };
        // This function will respond to the user input
        // handleChange = (event) => {
        //     this.setState({ term: event.target.value });

        // }

        // When a user submits...
    //     handleSubmit = (event) => {
    //         // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    //         // clicking the button
    //         event.preventDefault();

    //         // Set the parent to have the search term
    //         this.props.setTerm(this.state.term);
    //         this.setState({ term: "" });
    //     }
    }

    render() {
        return (
        <div className="container text-center">
            Topic:
            <input type="text" className="form-control" placeholder="e.g, Trump, Brooklyn, Lady Gaga" aria-describedby="basic-addon1"></input>
            <br />Start Year:          
            <input type="text" className="form-control" placeholder="YYYYMMDD" aria-describedby="basic-addon1"></input>
            <br />End Year::
            <input type="text" className="form-control" placeholder="YYYYMMDD" aria-describedby="basic-addon1"></input>
            <br />
            <button>Search</button>
        </div>
      );
  }
}

export default Search;

// //// SETUP VARIABLES
// // ==========================================================
// var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

// // queryURLBase is the start of our API endpoint. The searchTerm will be appended to this when
// // the user hits the search button
// var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
//   authKey + "&q=";

// // Counter to keep track of article numbers as they come in
// var articleCounter = 0;

// // FUNCTIONS
// // ==========================================================

// // This runQuery function expects two parameters:
// // (the number of articles to show and the final URL to download data from)
// function runQuery(numArticles, queryURL) {

//   // The AJAX function uses the queryURL and GETS the JSON data associated with it.
//   // The data then gets stored in the variable called: "NYTData"

//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).done(function(NYTData) {
//      console.log("------------------------------------");
//     console.log("URL: " + queryURL);
//     console.log("------------------------------------");

//     // Log the NYTData to console, where it will show up as an object
//     console.log(NYTData);
//     console.log("------------------------------------");

//     // Loop through and provide the correct number of articles
//     for (var i = 0; i < numArticles; i++) {

//       // Add to the Article Counter (to make sure we show the right number)
//       articleCounter++;

//       // Logging for testing
//       console.log(NYTData.response.docs[i].pub_date);
//       console.log(NYTData.response.docs[i].section_name);
//       console.log(NYTData.response.docs[i].web_url);
//     }
//   });

// }

// // METHODS
// // ==========================================================

// // on.("click") function associated with the Search Button
// $("#run-search").on("click", function(event) {  
//   event.preventDefault();
//   // Initially sets the articleCounter to 0
//   articleCounter = 0;
  
//   // Grabbing text the user typed into the search input
//   searchTerm = $("#search-term").val().trim();
//   var queryURL = queryURLBase + searchTerm;

//   // Start Year
//   startYear = $("#start-year").val().trim();

//   // End Year
//   endYear = $("#end-year").val().trim();

//   // If the user provides a startYear -- the startYear will be included in the queryURL
//   if (parseInt(startYear)) {
//     queryURL = queryURL + "&begin_date=" + startYear + "0101";
//   }

//   // If the user provides a startYear -- the endYear will be included in the queryURL
//   if (parseInt(endYear)) {
//     queryURL = queryURL + "&end_date=" + endYear + "0101";
//   }

//   // Then we will pass the final queryURL and the number of results to
//   // include to the runQuery function
//   runQuery(numResults, queryURL);
// });

// });

