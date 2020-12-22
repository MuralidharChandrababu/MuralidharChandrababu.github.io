/**
 * Function to fetch and display the data for the valid email address
 * @author: Muralidhar Chandrababu
 * The below function is an immediately invoked function execution
 */
(function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const emailQuery = urlParams.get("email");

  let proxyUrl = "https://cors-anywhere.herokuapp.com/";
  let targetUrl =
    "https://ltv-data-api.herokuapp.com/api/v1/records.json?email=" +
    emailQuery;

  fetch(proxyUrl + targetUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.length == 0) {
        document.getElementById("resultLoading").style.display = "none";
        document.getElementById("noResultsFound").style.display = "block";
        document.getElementById("resultsCard").style.backgroundColor = "";
        document.getElementById("noResultId").innerHTML = emailQuery;
      } else {
        document.getElementById("resultLoading").style.display = "none";
        document.getElementById("resultsCard").style.display = "block";
        document.getElementById("resultsCard").style.backgroundColor = "";
        document.getElementById("name").innerHTML =
          data.first_name + " " + data.last_name;
        document.getElementById("description").innerHTML = data.description;
        document.getElementById("address").innerHTML = data.address;
        document.getElementById("emailId").innerHTML = data.email;

        // generate and display list of phone numbers
        GenerateListDetails(data.phone_numbers, "phoneNumbers");

        // generate and display list of relatives
        GenerateListDetails(data.relatives, "relatives");
      }
    })
    .catch((error) => console.error(error));

  // function to generate and display list of relatives
  const GenerateListDetails = (dataArray, dataElement) => {
    document.getElementById(dataElement).innerHTML = "";
    for (let i = 0; i < dataArray.length; i++) {
      let node = document.createElement("LI");
      let textnode = document.createTextNode(dataArray[i]);
      node.appendChild(textnode);
      document.getElementById(dataElement).appendChild(node);
    }
  };
})();
