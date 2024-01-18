//* SEARCH ENGINE

// Temporary array of notes
let tempArray = [
  {
    title: 'Första inlägget',
    id: 1,
    dateCreated: '2022-01-01',
    dateLastEdited: '2022-01-05',
    bodyText:
      'Det här är det första inlägget i min blogg. Jag började skriva för att dela med mig av mina tankar, erfarenheter och äventyr. Det känns fantastiskt att ha denna möjlighet att kommunicera med er läsare.',
  },
  {
    title: 'Ett annat inlägg',
    id: 2,
    dateCreated: '2022-02-10',
    dateLastEdited: '2022-02-15',
    bodyText:
      'Idag vill jag dela med mig av några tankar om mitt senaste ämne. Det har varit en spännande resa att utforska detta ämne och jag ser fram emot att höra era åsikter och reflektioner om det.',
  },
  {
    title: 'En dag i mitt liv',
    id: 3,
    dateCreated: '2022-03-20',
    dateLastEdited: '2022-03-25',
    bodyText:
      'I dagens inlägg tänkte jag berätta om en vanlig dag i mitt liv. Det finns något vackert i det vardagliga, och jag hoppas kunna dela med mig av de små ögonblicken som gör livet speciellt.',
  },
  {
    title: 'Reseberättelse',
    id: 4,
    dateCreated: '2022-04-05',
    dateLastEdited: '2022-04-10',
    bodyText:
      'För några veckor sedan hade jag möjlighet att resa till en otrolig plats. Utsikten, kulturen och människorna gjorde det till en oförglömlig upplevelse. Här är min detaljerade reseskildring som jag hoppas att ni kommer att njuta av.',
  },
  {
    title: 'Tankar om framtiden',
    id: 5,
    dateCreated: '2022-05-15',
    dateLastEdited: '2022-05-20',
    bodyText:
      'I dagens inlägg vill jag dela med mig av några av mina djupaste tankar om framtiden. Livet är en ständig resa av förändring och utveckling, och det är viktigt att reflektera över vart vi är på väg och vilka mål vi strävar efter.',
  },
  {
    title: 'Det senaste äventyret',
    id: 6,
    dateCreated: '2022-06-25',
    dateLastEdited: '2022-06-30',
    bodyText:
      'I helgen var jag med om det mest fantastiska äventyret hittills. Jag vill ta er med på den spännande resan och dela med mig av de oväntade händelserna som gjorde det till en minnesvärd upplevelse.',
  },
  {
    title: 'Reflektioner',
    id: 7,
    dateCreated: '2022-07-10',
    dateLastEdited: '2022-07-15',
    bodyText:
      'Dagens inlägg handlar om några reflektioner jag gjort den senaste tiden. Ibland är det viktigt att stanna upp och tänka över livet, dess utmaningar och dess värdefulla ögonblick. Här är mina tankar och insikter.',
  },
  {
    title: 'Mitt passionerade projekt',
    id: 37,
    dateCreated: '2022-08-20',
    dateLastEdited: '2022-08-25',
    bodyText:
      'Jag vill dela med mig av det passionerade projekt jag har arbetat på under de senaste månaderna. Det har varit en utmaning, men också en otroligt givande upplevelse.',
  },
  {
    title: 'En dag i naturen',
    id: 38,
    dateCreated: '2022-09-05',
    dateLastEdited: '2022-09-10',
    bodyText:
      'Idag spenderade jag en dag i naturen, omgiven av lugn och frid. Det är fantastiskt hur naturen kan påverka vårt välbefinnande. Här är mina intryck och reflektioner från dagen.',
  },
  {
    title: 'Bokrecension: En inspirerande läsning',
    id: 39,
    dateCreated: '2022-09-20',
    dateLastEdited: '2022-09-25',
    bodyText:
      'Jag har precis avslutat att läsa en bok som har lämnat ett starkt intryck på mig. I dagens inlägg delar jag mina tankar och reflektioner om boken och hur den har påverkat mig.',
  },
  {
    title: 'Mitt favoritmatlagningsexperiment',
    id: 40,
    dateCreated: '2022-10-05',
    dateLastEdited: '2022-10-10',
    bodyText:
      'Att experimentera i köket är en av mina favoritsysselsättningar. Jag utforskar nya recept och smaker. Idag delar jag med mig av mitt senaste matlagningsexperiment och dess överraskande resultat.',
  },
  {
    title: 'Kreativitetens kraft',
    id: 41,
    dateCreated: '2022-10-20',
    dateLastEdited: '2022-10-25',
    bodyText:
      'I dagens inlägg reflekterar jag över kraften i kreativitet och hur den kan påverka våra tankar och känslor. Jag delar också några tips för att främja kreativitet i vardagen.',
  },
  {
    title: 'En oväntad resa',
    id: 42,
    dateCreated: '2022-11-05',
    dateLastEdited: '2022-11-10',
    bodyText:
      'Förra veckan fick jag en oväntad möjlighet att resa till en plats jag aldrig hade planerat att besöka. Här är min berättelse om den oväntade resan och de äventyr jag upplevde.',
  },
  {
    title: 'Vägen till självupptäckt',
    id: 43,
    dateCreated: '2022-11-20',
    dateLastEdited: '2022-11-25',
    bodyText:
      'Självupptäckt är en ständig resa. Idag delar jag med mig av några av de insikter jag har fått på vägen till att lära känna mig själv bättre och växa som individ.',
  },
  {
    title: 'Det perfekta avslappningsritualet',
    id: 44,
    dateCreated: '2022-12-05',
    dateLastEdited: '2022-12-10',
    bodyText:
      'Att hitta den perfekta avslappningsritualen är viktigt för att hantera stress och främja välbefinnande. Jag delar med mig av min personliga ritual och hur den har positivt påverkat mitt liv.',
  },
  {
    title: 'Förändringar och utmaningar',
    id: 45,
    dateCreated: '2022-12-20',
    dateLastEdited: '2022-12-25',
    bodyText:
      'Slutet av året är en tid för reflektion över förändringar och utmaningar. I dagens inlägg tittar jag tillbaka på året som gått och tar med er på resan genom de olika stegen av förändring.',
  },
  {
    title: 'Årets höjdpunkter',
    id: 46,
    dateCreated: '2023-01-01',
    dateLastEdited: '2023-01-05',
    bodyText:
      'Ett nytt år har börjat, och det är dags att titta tillbaka på årets höjdpunkter. Jag reflekterar över de mest minnesvärda ögonblicken och ser fram emot vad det kommande året har att erbjuda.',
  },
];

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
    searchResultArray = tempArray.filter((p) => {
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

// Add an event listener to the search input that triggers the search function on input
// searchInput.addEventListener('input', performSearch);
searchBtn.addEventListener('click', performSearch);
