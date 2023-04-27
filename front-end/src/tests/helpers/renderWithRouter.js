import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import ProviderContext from '../../Context/provider';

function renderWithRouter(component) {
  const history = createMemoryHistory();

  const returnRender = render(
    <Router history={ history }>
      <ProviderContext>
        {component}
      </ProviderContext>
    </Router>,
  );

  return { history, ...returnRender };
}

export default renderWithRouter;
