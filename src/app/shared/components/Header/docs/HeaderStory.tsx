import * as React from 'react';

import Header from 'app/shared/components/Header';
import Frame from 'app/shared/docz-helpers/Frame';

function HeaderDefault() {
  return (
    <Frame
      width="100%"
      height="200px"
      initialContent={`<head>${document.head.innerHTML}</head>`}
    >
      <div>
        <Header style={{ backgroundColor: 'green' }}>User content</Header>

        <Header.Wrapper>
          {[...Array(20).keys()].map(val => (
            <React.Fragment key={val}>
              Content
              <br />
            </React.Fragment>
          ))}
        </Header.Wrapper>
      </div>
    </Frame>
  );
}

export { HeaderDefault };
