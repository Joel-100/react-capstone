import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../store/store';
import Home from '../pages/Home';
import CountryList from '../components/CountryList';

describe('Page tests', () => {
  test('Render Home Page', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('Render CountryList Component', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <CountryList />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
