//* SEARCH ENGINE

// Temporary array of notes
let tempArray = [
  {
    title: 'Första inlägget',
    id: 1,
    dateCreated: '2022-01-01',
    dateLastEdited: '2022-01-05',
    bodyText: 'Det här är det första inlägget i min blogg.',
  },
  {
    title: 'Ett annat inlägg',
    id: 2,
    dateCreated: '2022-02-10',
    dateLastEdited: '2022-02-15',
    bodyText: 'Idag vill jag dela med mig av några tankar om...',
  },
  {
    title: 'En dag i mitt liv',
    id: 3,
    dateCreated: '2022-03-20',
    dateLastEdited: '2022-03-25',
    bodyText: 'I dagens inlägg tänkte jag berätta om en vanlig dag i mitt liv.',
  },
  {
    title: 'Reseberättelse',
    id: 4,
    dateCreated: '2022-04-05',
    dateLastEdited: '2022-04-10',
    bodyText: 'För några veckor sedan hade jag möjlighet att resa till...',
  },
  {
    title: 'Tankar om framtiden',
    id: 5,
    dateCreated: '2022-05-15',
    dateLastEdited: '2022-05-20',
    bodyText: 'I dagens inlägg vill jag dela med mig av några av mina tankar om framtiden.',
  },
  {
    title: 'Det senaste äventyret',
    id: 6,
    dateCreated: '2022-06-25',
    dateLastEdited: '2022-06-30',
    bodyText: 'I helgen var jag med om det mest fantastiska äventyret hittills.',
  },
  {
    title: 'Reflektioner',
    id: 7,
    dateCreated: '2022-07-10',
    dateLastEdited: '2022-07-15',
    bodyText: 'Dagens inlägg handlar om några reflektioner jag gjort den senaste tiden.',
  },
];

const searchInput = document.getElementById('search_input');

//*---------------------------FUNCTIONS---------------------------*//

//* ===--- Perform search
function performSearch() {
  console.clear();

  //* Handle input
  // User input
  let searchInputValue = searchInput.value;
  console.log(`User Input: ${searchInputValue}`);

  let cleanedSearchInput = searchInputValue.replace(/[^0-9a-öA-Ö" "]/g, ' ').trim();
  console.log(`Cleaned search: ${cleanedSearchInput}`);

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

  if (searchTerms.length === 0) {
    // nothing will display
    searchResultArray = [];
  } else {
    searchResultArray = tempArray.filter((p) => {
      return searchTerms.some((term) => {
        return (
          (phraseSearch &&
            (p.title.toLowerCase().includes(term.toLowerCase()) ||
              p.bodyText.toLowerCase().includes(term.toLowerCase()))) ||
          (!phraseSearch &&
            (p.title.toLowerCase().includes(term.toLowerCase()) ||
              p.bodyText.toLowerCase().includes(term.toLowerCase()) ||
              p.dateCreated.includes(term)))
        );
      });
    });
  }

  console.log('Found: ');
  console.log(searchResultArray);
}

searchInput.addEventListener('input', performSearch);
