import React from 'react';
import {
  render,
  fireEvent,
  RenderResult,
  screen,
} from '@testing-library/react';
import { Button, BookButton, SubmitButton } from './index';
import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';

let component: RenderResult;

describe('<Button/>', () => {
  const buttonText = 'Default text';
  afterEach(cleanup);

  // children
  it('Should contains correct text', () => {
    const { getByTestId } = render(<Button>{buttonText}</Button>);
    const buttonEl = getByTestId('test-button');
    expect(buttonEl.textContent).toBe(buttonText);
  });

  // primary
  it('should contains primary className', () => {
    const { getByTestId } = render(<Button primary>{buttonText}</Button>);
    const buttonEl = getByTestId('test-button');
    expect(buttonEl.classList.contains('primaryButton')).toBe(true);
  });

  // secondary
  it('should contains secondary className', () => {
    const { getByTestId } = render(<Button secondary>{buttonText}</Button>);
    const buttonEl = getByTestId('test-button');
    expect(buttonEl.classList.contains('secondaryButton')).toBe(true);
  });

  // secondaryFull
  it('should contains secondaryFull className', () => {
    const { getByTestId } = render(<Button secondaryFull>{buttonText}</Button>);
    const buttonEl = getByTestId('test-button');
    expect(buttonEl.classList.contains('secondaryButton--full')).toBe(true);
  });

  // light
  it('should contains light className', () => {
    const { getByTestId } = render(<Button light>{buttonText}</Button>);
    const buttonEl = getByTestId('test-button');
    expect(buttonEl.classList.contains('lightButton')).toBe(true);
  });

  // className
  it('should contains correct className', () => {
    const className = 'test';
    const { getByTestId } = render(
      <Button {...{ className }}>{buttonText}</Button>
    );
    const buttonEl = getByTestId('test-button');
    expect(buttonEl.classList.contains('test')).toBe(true);
  });
  it('calls "onClick" prop on button click', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <Button {...{ onClick }}>{buttonText}</Button>
    );
    const buttonEl = getByTestId('test-button');
    userEvent.click(buttonEl);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

describe('<BookButton/>', () => {
  const buttonText = 'Default text';
  afterEach(cleanup);
  it('Should contains correct text', () => {
    const { getByTestId } = render(<BookButton>{buttonText}</BookButton>);
    const buttonEl = getByTestId('test-bookButton');
    expect(buttonEl.textContent).toBe(buttonText);
  });

  it('calls "onClick" prop on button click', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <BookButton {...{ onClick }}>{buttonText}</BookButton>
    );
    const buttonEl = getByTestId('test-bookButton');
    userEvent.click(buttonEl);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

describe('<SubmitButton/>', () => {
  const buttonText = 'Default text';

  it('Should contains correct text', () => {
    const { getByTestId } = render(<SubmitButton>{buttonText}</SubmitButton>);
    const buttonEl = getByTestId('test-submitButton');
    expect(buttonEl.textContent).toBe(buttonText);
  });

  it('calls "onClick" prop on button click', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <SubmitButton {...{ onClick }}>{buttonText}</SubmitButton>
    );
    const buttonEl = getByTestId('test-submitButton');
    userEvent.click(buttonEl);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
