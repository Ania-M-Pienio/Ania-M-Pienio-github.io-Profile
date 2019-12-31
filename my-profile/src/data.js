const Url = "https://profile-api-ania-duplicate.herokuapp.com/";

const saveData = function(what, body) {
  // console.log("In SaveData Now!!!!!!!!!!!!!")  
  var URI = Url + what;
  return fetch(URI, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  }).then(response => {
    // If we don't get a 200 OK response, throw an error to the .catch()
    if (!response.ok) {
      console.log(`the response text is: `, response.statusText);
      throw new Error(response.statusText);
    }
    // Parse the response body from JSON to JS (an Array)
    return response.json();
  });
}; // end of function saveData
export { saveData };
