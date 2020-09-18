import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('Confirmation dialog component spec', () => {
  it('should display dialog when isOpen is true', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Test title',
      labels: {
        closeButton: 'Test close button',
        acceptButton: 'Test accept button',
      },
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const dialogElement = screen.getByRole('dialog');
    const titleElement = screen.getByText('Test title');
    const acceptButtonElement = screen.getByRole('button', {
      name: 'Test accept button',
    });
    const cancelButtonElement = screen.getByRole('button', {
      name: 'Test close button',
    });

    // Assert
    expect(dialogElement).toBeInTheDocument();

    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe('H2');

    expect(acceptButtonElement).toBeInTheDocument();
    expect(acceptButtonElement.tagName).toBe('BUTTON');

    expect(cancelButtonElement).toBeInTheDocument();
    expect(cancelButtonElement.tagName).toBe('BUTTON');
  });

  it('should not display dialog when isOpen is false', () => {
    // Arrange
    const props = {
      isOpen: false,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Test title',
      labels: {
        closeButton: 'Test close button',
        acceptButton: 'Test accept button',
      },
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const dialogElement = screen.queryByRole('dialog');

    // Assert
    expect(dialogElement).toEqual(null);
  });

  it('should call onAccept property when it clicks on Accept button', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Test title',
      labels: {
        closeButton: 'Test close button',
        acceptButton: 'Test accept button',
      },
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const acceptButtonElement = screen.getByRole('button', {
      name: 'Test accept button',
    });
    userEvent.click(acceptButtonElement);

    // Assert
    expect(acceptButtonElement).toBeInTheDocument();
    expect(props.onAccept).toHaveBeenCalled();
  });

  it('should call onClose property when it clicks on cancek button', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Test title',
      labels: {
        closeButton: 'Test close button',
        acceptButton: 'Test accept button',
      },
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const closeButtonElement = screen.getByRole('button', {
      name: 'Test close button',
    });
    userEvent.click(closeButtonElement);

    // Assert
    expect(closeButtonElement).toBeInTheDocument();
    expect(props.onClose).toHaveBeenCalled();
  });
});
