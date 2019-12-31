const Url = "https://profile-api-ania-duplicate.herokuapp.com/";

const saveData = function(what, body) {
  // console.log("In SaveData Now!!!!!!!!!!!!!")  
  var URI = Url + what;
  return fetch(URI, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  }).then((response) => {
    console.log(`the response text is: `, response);
    // if (!response.ok) {     
    //   throw new Error(response.statusText);
    // }
    // Parse the response body from JSON to JS (an Array)
    // return response.json();
  });
}; // end of function saveData
export { saveData };
