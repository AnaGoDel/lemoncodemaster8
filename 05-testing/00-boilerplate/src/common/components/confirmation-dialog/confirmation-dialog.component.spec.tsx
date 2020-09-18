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

    // Assert
    expect(dialogElement).toBeInTheDocument();
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
      name: props.labels.acceptButton,
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
      name: props.labels.closeButton,
    });
    userEvent.click(closeButtonElement);

    // Assert
    expect(closeButtonElement).toBeInTheDocument();
    expect(props.onClose).toHaveBeenCalled();
  });
});
