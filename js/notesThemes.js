function noteThemes(noteObject) {
  // Themes for notes
  let noteThemes = [
    {
      name: 'Default',
      headingFont: '',
      bodyFont: '',
      color: '',
      background: '',
    },
    {
      name: 'Theme 1',
      headingFont: 'Georgia, serif',
      bodyFont: 'Georgia, serif',
      color: '#0066cc',
      background: 'lightgreen',
    },
    {
      name: 'Theme 2',
      headingFont: 'Courier New, monospace',
      bodyFont: 'Courier New, monospace',
      color: '#990000',
      background: 'lightblue',
    },
  ];

  /* -------------------FUNCTIONS------------------------*/
  //  Function to apply theme styles on note
  function applyTheme(themIndex) {
    //  Get the selected theme object
    const noteDocument = document.getElementById('note-document');
    const selectedTheme = noteThemes[themIndex];
    // Apply style
    noteDocument.querySelector('h1').style.fontFamily = selectedTheme.headingFont;
    noteDocument.style.fontFamily = selectedTheme.bodyFont;
    noteDocument.style.color = selectedTheme.color;
    noteDocument.style.background = selectedTheme.background;
  }

  // Saving current theme index in local storage
  function saveCurrentThemeToLocalStorage(noteID, themeIndex) {
    const savedCurrentTheme = JSON.parse(localStorage.getItem('currentNoteTheme')) || {};
    
    //  Save the current theme for this specific note ID
    savedCurrentTheme[noteID] = themeIndex;
    //  Save it back into local storage
    localStorage.setItem('currentNoteTheme', JSON.stringify(savedCurrentTheme));
  }

  // Store all themes in local storage
  function saveAllThemesToLocalStorage() {
    noteThemes = JSON.parse(localStorage.getItem('Themes')) || noteThemes;

    localStorage.setItem('Themes', JSON.stringify(noteThemes));
  }

  // Get all themes from local storage and add them to the dropdown menu
  function getThemes() {
    noteThemes = JSON.parse(localStorage.getItem('Themes')) || noteThemes;

    // FOR EACH THEME
    noteThemes.forEach((theme, index) => {
      // Create option element
      let option = document.createElement('option');

      // Set values of option
      option.value = index;
      option.text = theme.name;
      //  Add created option to select menu
      dropdown.add(option);
    });
  }
  /* --------------------------------------------------------*/

  // set default theme when a new note is opened
  let currentThemeIndex = 0;

  // Get dropdown element from DOM
  let dropdown = document.getElementById('dropdown');

  //  Whenever the selected item changes
  dropdown.addEventListener('change', (e) => {
    // change current theme to the selected theme
    currentThemeIndex = e.target.selectedIndex;

    console.log('Changed theme to: ', currentThemeIndex);

    // Apply  CSS styles for this theme
    applyTheme(currentThemeIndex);

    //  Save the chosen theme in local storage
    saveCurrentThemeToLocalStorage(noteObject.id, currentThemeIndex);
  });

  // Get current note theme from local storage or use default if not found
  const savedCurrentTheme = JSON.parse(localStorage.getItem('currentNoteTheme')) || {};
  
  const savedCurrentThemeIndex = savedCurrentTheme[noteObject.id];

  applyTheme(savedCurrentThemeIndex || 0);

  saveAllThemesToLocalStorage();
  getThemes();

  // show correct theme in dropdown when reopening a note
  dropdown.selectedIndex = savedCurrentThemeIndex;
}