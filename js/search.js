//* SEARCH ENGINE

// Get input element from the DOM
const searchInput = document.getElementById('searchBox');
const searchBtn = document.getElementById('search_btn');

//*---------------------------FUNCTIONS---------------------------*//

//* ===--- Perform search
function performSearch() {
  // Clear the console for better readability
  console.clear();

  //* Handle input
  // User input
  let searchInputValue = searchInput.value;
  console.log(`User Input: ${searchInputValue}`);

  // Clean the search input by removing special characters and trimming whitespace
  let cleanedSearchInput = searchInputValue.replace(/[^0-9a-öA-Ö" "]/g, ' ').trim();
  console.log(`Cleaned search: ${cleanedSearchInput}`);

  // Split the cleaned search input into terms and remove empty terms
  let searchTerms = cleanedSearchInput.split(' ').filter((term) => term !== '');

  // Check if the search input is within double quotes and treat it as a whole phrase
  let phraseSearch = false;
  if (searchTerms.length > 1 && searchTerms[0].startsWith('"') && searchTerms[searchTerms.length - 1].endsWith('"')) {
    phraseSearch = true;
    searchTerms = [searchTerms.join(' ')];
  }

  // Remove quotes from the stored search term
  searchTerms = searchTerms.map((term) => term.replace(/"/g, ''));

  console.log(`Searching for: `);
  console.log(searchTerms);

  //* Search object
  let searchResultArray;

  // Check if there are no search terms
  if (searchTerms.length === 0) {
    // If there are no search terms, nothing will display
    searchResultArray = [];
  } else {
    // Perform the search on the temporary array
    searchResultArray = notes.filter((p) => {
      return searchTerms.every((term) => {
        let termLower = term.toLowerCase();
        return (
          (phraseSearch &&
            (p.title.toLowerCase().includes(termLower) || p.bodyText.toLowerCase().includes(termLower))) ||
          (!phraseSearch &&
            (p.title
              .toLowerCase()
              .split(' ')
              .some((word) => word.startsWith(termLower)) ||
              p.bodyText
                .toLowerCase()
                .split(' ')
                .some((word) => word.startsWith(termLower)) ||
              p.dateCreated.includes(termLower)))
        );
      });
    });
  }

  console.log('Found: ');
  console.log(searchResultArray);

  // Render the search results
  renderSearchResults(searchResultArray);
}

// Perform search on input AND click
searchInput.addEventListener('input', performSearch);
searchBtn.addEventListener('click', performSearch);
