import * as React from 'react';
import classNames from 'classnames';
import { CalendarOutlined } from '@ant-design/icons';

export default function InputIcon(props: { suffixIcon: React.ReactNode; prefixCls: string }) {
  const { suffixIcon, prefixCls } = props;
  return (
    (suffixIcon &&
      (React.isValidElement<{ className?: string }>(suffixIcon) ? (
        React.cloneElement(suffixIcon, {
          className: classNames({
            [suffixIcon.props.className!]: suffixIcon.props.className,
            [`${prefixCls}-picker-icon`]: true,
          }),
        })
      ) : (
        <span className={`${prefixCls}-picker-icon`}>{suffixIcon}</span>
      ))) || <CalendarOutlined className={`${prefixCls}-picker-icon`} />
  );
}