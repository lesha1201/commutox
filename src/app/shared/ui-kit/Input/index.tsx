import cx from 'classnames';
import * as React from 'react';

import style from './input.scss';

/* Typings */
export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  width: 'small' | 'medium' | 'large' | 'full';
  className?: string;
  /** Adds an addon block before input */
  addonBefore?: string;
  /** Adds an addon block after input */
  addonAfter?: string;
  /** If it's set to true when input changes visually to show there is an error */
  hasError?: boolean;
  children?: never;
}

/* Component */
class Input extends React.Component<IProps, {}> {
  /* 🗿 Static properties ------------*/
  static defaultProps = {
    type: 'text',
    width: 'full',
  };
  /* End of Static properties -------*/

  /* ♻️ Lifecycle -------------------*/
  render() {
    const { addonBefore, addonAfter } = this.props;

    if (addonBefore || addonAfter) {
      return this.getInputWithAddons();
    } else {
      return this.getInput();
    }
  }
  /* End of Lifecycle ---------------*/

  /* 🔒 Private methods -------------*/
  private getInput(hasAddons = false): React.ReactNode {
    const {
      width,
      className,
      addonBefore,
      addonAfter,
      hasError,
      ...domAttrs
    } = this.props;

    const cn = cx(
      hasError ? style.errorInput : style.input,
      hasAddons ? style.withAddons : style[width],
      className,
    );

    return <input className={cn} {...domAttrs} />;
  }

  private getInputWithAddons(): React.ReactNode {
    const { addonBefore, addonAfter } = this.props;
    const addonCn = cx(style.addon);

    return (
      <div className={style.inputWrapper}>
        {addonBefore && <span className={addonCn}>{addonBefore}</span>}
        {this.getInput(true)}
        {addonAfter && <span className={addonCn}>{addonAfter}</span>}
      </div>
    );
  }
  /* End of Private methods ---------*/
}

export default Input;
