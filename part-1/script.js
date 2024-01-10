const log = document.querySelector(".event-log");

document.querySelector("#xhr").addEventListener("click", () => {
  log.textContent = "";

  const xhr = new XMLHttpRequest();

  xhr.addEventListener("loadend", () => {
    log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
  });

  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
  );
  xhr.send();
  log.textContent = `${log.textContent}Started XHR request\n`;
});

document.querySelector("#reload").addEventListener("click", () => {
  log.textContent = "";
  document.location.reload();
});


const fetchPromise = fetch(
  // "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
)

console.log(fetchPromise);

// fetchPromise.then((response) => {
//   console.log(response.status);
//   const jsonPromise = response.json();
//   jsonPromise.then((data)=>{
//     console.log(data[0].name);
//   })
// });

fetchPromise
  .then((response)=> {
    if(!response.ok){
      throw new Error(`HTTP error: ${response.status}`)
    }
    return response.json();
  })
  .then((data)=>{
    console.log(`Item: ${data[6].name}`)
  })
  .catch((error)=>{
    console.log(`Could not get products: ${error}`)
  });

