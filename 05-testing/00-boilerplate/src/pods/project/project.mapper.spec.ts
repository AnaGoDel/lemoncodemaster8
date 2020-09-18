import { mapProjectFromApiToVm } from './project.mapper';
import * as viewModel from './project.vm';
import * as apiModel from './api/project.api-model';

describe('pods/project/project.mapper specs', () => {
  it('should return empty project when feeding null value', () => {
    // Arrange
    const project = null;

    // Act
    const result = mapProjectFromApiToVm(project);

    // Asset
    expect(result).toEqual(viewModel.createEmptyProject());
  });

  it('should return empty project when feeding undefined value', () => {
    // Arrange
    const project = undefined;

    // Act
    const result = mapProjectFromApiToVm(project);

    // Asset
    expect(result).toEqual(viewModel.createEmptyProject());
  });

  it('should return expected result when feeding null employee list', () => {
    // Assert
    const project: apiModel.Project = {
      id: 'test id',
      name: 'test name',
      externalId: 'test external id',
      comments: 'test comment',
      isActive: true,
      employees: null,
    };

    const expectedResult: viewModel.Project = {
      id: 'test id',
      name: 'test name',
      externalId: 'test external id',
      comments: 'test comment',
      isActive: true,
      employees: [],
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    //Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return expected result when feeding undefined employee list', () => {
    // Assert
    const project: apiModel.Project = {
      id: 'test id',
      name: 'test name',
      externalId: 'test external id',
      comments: 'test comment',
      isActive: true,
      employees: undefined,
    };

    const expectedResult: viewModel.Project = {
      id: 'test id',
      name: 'test name',
      externalId: 'test external id',
      comments: 'test comment',
      isActive: true,
      employees: [],
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return expected result but feeding correct values', () => {
    // Assert
    const project: apiModel.Project = {
      id: 'test id',
      name: 'test name',
      externalId: 'test external id',
      comments: 'test comment',
      isActive: true,
      employees: [
        {
          id: 'test id',
          isAssigned: true,
          employeeName: 'test name',
        },
      ],
    };

    const expectedResult: viewModel.Project = {
      id: 'test id',
      name: 'test name',
      externalId: 'test external id',
      comments: 'test comment',
      isActive: true,
      employees: [
        {
          id: 'test id',
          isAssigned: true,
          employeeName: 'test name',
        },
      ],
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
