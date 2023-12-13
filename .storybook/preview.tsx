
import RootProvider from '../src/RootProvider';

import 'style/main.css';


export const decorators = [
  (Story) => (
    <RootProvider>
      <Story/>
    </RootProvider>
  )
];

