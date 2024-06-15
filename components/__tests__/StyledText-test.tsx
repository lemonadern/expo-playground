import * as React from 'react';

import { MonoText } from '../StyledText';

import { render } from '@testing-library/react-native';

it(`renders correctly`, () => {
  const tree = render(<MonoText>Snapshot test!</MonoText>).toJSON();

  expect(tree).toMatchSnapshot();
});
