import * as React from 'react';

import * as style from './wrapper.scss';

class Wrapper extends React.Component<{}, {}> {
  render() {
    return <div className={style.base}>{this.props.children}</div>;
  }
}

export default Wrapper;
