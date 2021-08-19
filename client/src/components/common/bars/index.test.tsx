import { fireEvent, render, RenderResult } from '@testing-library/react';
import { act, renderHook, cleanup } from '@testing-library/react-hooks';
import { useToggleClick } from '_hooks';
import { Bars } from 'components/common';
import userEvent from '@testing-library/user-event';

let component: RenderResult;

describe('<Bars/>', () => {
  const defaultProps = {
    handleToggle: jest.fn(),
    open: false,
  };

  beforeEach(() => {
    component = render(<Bars {...defaultProps} />);
  });
  afterEach(cleanup);

  it('button contains correct className', () => {
    const buttonEl = component.getByTestId('test-bars');
    expect(buttonEl.className).toBe('bars');
  });

  it('each bar contains correct className', () => {
    const barEl = component.getAllByTestId('test-bar');
    expect(barEl[0].classList.contains('bars__bar')).toBe(true);
  });

  it('expect render three bars', () => {
    const barEl = component.getAllByTestId('test-bar');
    expect(barEl.length).toBe(3);
  });

  it('should change open to true', () => {
    const { result } = renderHook(useToggleClick);
    act(() => {
      result.current.handleToggle();
    });
    expect(result.current.open).toBe(true);
  });
});

describe('<Bars/> active', () => {
  const defaultProps = {
    handleToggle: jest.fn(),
    open: true,
  };
  beforeEach(() => {
    component = render(<Bars {...defaultProps} />);
  });
  afterEach(cleanup);
  it('each bar contains correct active className', () => {
    const barEl = component.getAllByTestId('test-bar');
    const buttonEl = component.getByTestId('test-bars');
    userEvent.click(buttonEl);
    expect(defaultProps.handleToggle).toHaveBeenCalled();
    expect(barEl[0].classList.contains('bars__bar--active')).toBe(true);
  });
});
