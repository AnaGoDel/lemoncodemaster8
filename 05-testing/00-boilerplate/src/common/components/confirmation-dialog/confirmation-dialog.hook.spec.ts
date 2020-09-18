import { renderHook, act } from '@testing-library/react-hooks';
import { createEmptyLookup, Lookup } from 'common/models';
import { useConfirmationDialog } from './confirmation-dialog.hook';

describe('Confirmation dialog hook spec', () => {
  it('should return an object with initial values when it calls it', () => {
    // Arrange
    const initialItem: Lookup = createEmptyLookup();

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    expect(result.current.isOpen).toBeFalsy();
    expect(result.current.itemToDelete).toEqual(initialItem);
    expect(result.current.onAccept).toEqual(expect.any(Function));
    expect(result.current.onClose).toEqual(expect.any(Function));
    expect(result.current.onOpenDialog).toEqual(expect.any(Function));
  });

  it('should update isOpen and itemToDelete when it calls onOpenDialog function', () => {
    // Arrange
    const itemToDelete: Lookup = {
      id: 'Test id',
      name: 'Test name',
    };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    expect(result.current.isOpen).toBeFalsy();
    expect(result.current.itemToDelete).toEqual({
      id: '',
      name: '',
    });

    act(() => {
      result.current.onOpenDialog(itemToDelete);
    });

    // Assert
    expect(result.current.isOpen).toBeTruthy();
    expect(result.current.itemToDelete).toEqual(itemToDelete);
  });

  it('should update itemToDelete when it calls onAccept function', () => {
    // Arrange
    const itemToDelete: Lookup = {
      id: 'Test id',
      name: 'Test name',
    };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(itemToDelete);
    });
    expect(result.current.itemToDelete).toEqual(itemToDelete);

    act(() => {
      result.current.onAccept();
    });

    // Assert
    expect(result.current.itemToDelete).toEqual({
      id: '',
      name: '',
    });
  });

  it('should update isOpen when it calls onCancel function', () => {
    // Arrange
    const itemToDelete: Lookup = {
      id: 'Test id',
      name: 'Test name',
    };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(itemToDelete);
    });
    expect(result.current.isOpen).toBeTruthy();

    act(() => {
      result.current.onClose();
    });

    // Assert
    expect(result.current.isOpen).toBeFalsy();
  });
});
