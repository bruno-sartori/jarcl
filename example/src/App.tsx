import React from 'react'
import { Button, ThemeProviderHoc } from 'jarcl';

const App = () => {
  return (
    <>
      <Button title="teste" />
    </>
  );
}
const themeProviderConfig = {
  components: [
    { name: '--jarcl-button-bg-color', value: '#000' }
  ]
}

export default ThemeProviderHoc(themeProviderConfig)(App);
