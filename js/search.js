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
  
  //* Handle input
  
  //Get filter param
  let checkedFilter = handleCheckedFilter();
  console.log('Filtered by: ',checkedFilter)

  // User input
  let searchInputValue = searchInput.value;
  console.log(`User Input: ${searchInputValue}`);

  // get cleaned input depending on filter
  const cleanedSearchInput = cleanSearchInput(searchInputValue, checkedFilter);
  console.log('Cleaned search: ', cleanedSearchInput)

  //* Search objects
  let searchResultArray;

  //  Get search results
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

// get filter radio buttons
function handleCheckedFilter() {
  // let checkedValue = ''; 
  const checkedRadioButton = document.querySelector('input[name="searchParam"]:checked');
  
  checkedValue = checkedRadioButton.value;

  return checkedValue;
}

//  Clean search input value based on selected filter
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

//  Peform search based on selected filter
function performFilteredSearch(checkedFilter, cleanedSearchInput) {
  let search;
  switch (checkedFilter) {
    case 'sentences':
      // Perform search for whole sentences
      return notes.filter(
        (p) =>
          p.title.toLowerCase().includes(cleanedSearchInput) || p.bodyText.toLowerCase().includes(cleanedSearchInput)
      );

    case 'words':
      //   Perform search of individual words
      search = cleanedSearchInput.split(' ');
      console.log(search);
      return notes.filter((p) =>
        search.some((word) => p.title.toLowerCase().includes(word) || p.bodyText.toLowerCase().includes(word))
      );

    case 'date':
      // Perform search for date
      return notes.filter((p) => p.dateCreated.includes(cleanedSearchInput));

    case 'tags':
      //  Perform search of tags
      search = cleanedSearchInput.split(' ');
      console.log(search);
      return notes.filter(
        (note) => note.tags && search.some((tag) => note.tags.some((t) => t.toLowerCase().includes(tag.toLowerCase())))
      );

    default:
      return;
  }
}

//! THIS FUNCTION IS "NOT" AVALIBLE YET (experimental)
//  function to display search terms for user
function displayUserSearch(userSearch) {
  const userSearchDiv = document.querySelector('.user-search_container');
  userSearchDiv.innerHTML = "";

  userSearch.forEach((term) => {
    console.log(term);
    userSearchDiv.innerHTML += `
      <span class="user-search-term">
      "${term}"
      </span>
    `
  });
  
}
//*----------------------------------------------------------------*//


// Perform search on input 
searchInput.addEventListener('input', () => {
  performSearch();
} );

