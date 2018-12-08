import cx from 'classnames';
import * as React from 'react';

import * as style from './input.scss';

export interface IProps {
  width: 'small' | 'medium' | 'large' | 'full';
  type?: string;
  placeholder?: string;
  value?: string;
  className?: string;
  addonBefore?: string;
  addonAfter?: string;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
}

export interface IState {}

class Input extends React.Component<IProps, IState> {
  /* Static properties */
  public static defaultProps = {
    type: 'text',
    placeholder: '',
    width: 'full',
  };
  /* End of Static properties */

  constructor(props: IProps) {
    super(props);
  }

  public render() {
    const { addonBefore, addonAfter } = this.props;

    if (addonBefore || addonAfter) {
      return this.getInputWithAddons();
    } else {
      return this.getInput();
    }
  }

  /* Private methods */
  private getInput(hasAddons = false): React.ReactNode {
    const { type, placeholder, width, value, onChange, className } = this.props;
    const cn = cx(style.input, hasAddons ? style.withAddons : style[width], className);

    return (
      <input
        className={cn}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange ? onChange : undefined}
      />
    );
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
  /* End of Private methods */
}

export default Input;
