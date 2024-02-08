//* SEARCH ENGINE

// Get input element from the DOM
const searchInput = document.getElementById('searchBox');
const searchBtn = document.getElementById('search_btn');
const radioButtons = document.querySelectorAll('input[name="searchParam"]');

//*---------------------------FUNCTIONS---------------------------*//

//* ===--- Perform search
function performSearch() {
  // Clear the console for better readability
  console.clear();
  
  //Get filter param
  let checkedFilter = handleCheckedFilter();
  console.log('Filtered by: ',checkedFilter)


  //* Handle input
  

  // User input
  let searchInputValue = searchInput.value;
  console.log(`User Input: ${searchInputValue}`);

  // get cleaned input depending on filter
  const cleanedSearchInput = cleanSearchInput(searchInputValue, checkedFilter);
  console.log('Cleaned search: ', cleanedSearchInput)

//* Search object
  let searchResultArray;


  
  searchResultArray = performFilteredSearch(checkedFilter, cleanedSearchInput);

  
  
  // Check if there are no search terms
  if (cleanedSearchInput.length === 0) {
    // If there are no search terms, nothing will display
    searchResultArray = [];
  }

  console.log('Found: ');
  console.log(searchResultArray);

  // Render the search results
  renderSearchResults(searchResultArray);
}

function handleCheckedFilter() {
  // let checkedValue = ''; 
  const checkedRadioButton = document.querySelector('input[name="searchParam"]:checked');
  
  checkedValue = checkedRadioButton.value;

  return checkedValue;
}

function cleanSearchInput(inputvalue, checkedFilter) {
  switch (checkedFilter) {
    
    case 'date':
      // Keep only numbers and hyphens for date search
      return inputvalue.replace(/[^0-9-]/g, ' ').trim();
    default:
      // Default behavior: remove special characters and trim whitespace
      return inputvalue.replace(/[^0-9a-öA-Ö" "]/g, ' ').trim();
  }
}

function performFilteredSearch(checkedFilter, cleanedSearchInput) {
  switch (checkedFilter) {
    case 'sentences':
      // Perform search for whole sentences
      
      return notes.filter(
        (p) =>
          p.title.toLowerCase().includes(cleanedSearchInput) || p.bodyText.toLowerCase().includes(cleanedSearchInput)
      );

    case 'words':
      
      let words = cleanedSearchInput.split(' ');
      return notes.filter((p) =>
        words.some((word) => p.title.toLowerCase().includes(word) || p.bodyText.toLowerCase().includes(word))
      );

    case 'date':
      // Perform search for date
      return notes.filter((p) => p.dateCreated.includes(cleanedSearchInput));
    default:
      return 
       
  }
}
//*----------------------------------------------------------------*//


// Perform search on input 
searchInput.addEventListener('input', () => {
  performSearch();
} );

