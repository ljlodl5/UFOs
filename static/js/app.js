// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var allSelection = [];

// 3. Use this function to update the filters. 
function updateFilters() {
///Utilized challenge video and both sites below for the practice of D3 select for element variable = 'this'
    ///https://website.education.wisc.edu/~swu28/d3t/concept.html
    ///https://github.com/Baylex/UFOs..
    // 4a. Save the element that was changed as a variable.
    let selectElement = d3.select(this);

    // 4b. Save the value that was changed as a variable.
    /// for a single value example let date = d3.select("#datetime").property("value"); and added to filter directly. 
    ///For multivalue the entire pool (this) is captured and tagged to value then id
    let selectValues = selectElement.property("value");
    console.log (selectValues)
    // 4c. Save the id of the filter that was changed as a variable.
    let selectIds = selectElement.attr("id")
    console.log (selectIds)
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (selectValues) {
      allSelection[selectIds]=selectValues;
    }
    else {
      delete allSelection[selectIds];
    } 
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData. 
    let filteredData = tableData;
  
    // 9. Loop through all of the filters and keep any data that matches the filter values
    ///The following can be used if there is a single variable
    //if (date) {
        //filteredData = filteredData.filter(row => row.datetime === date)
    //};
    ///If there is a multi-variable it should be tagged to the variable assigned to hold the values and keys
    Object.entries(allSelection).forEach(([key,value])=> {
      filteredData =  filteredData.filter(row => row[key]=== value);
    });

    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  };
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("input").on("change", updateFilters);

  // Build the table when the page loads
  buildTable(tableData);