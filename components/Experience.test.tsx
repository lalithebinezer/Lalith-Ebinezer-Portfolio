import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Experience from './Experience';
import { EXPERIENCE } from '../constants';

// Add missing type declarations for Jest globals
declare const describe: any;
declare const test: any;
declare const expect: any;
declare const beforeAll: any;
declare const jest: any;

// Mock IntersectionObserver for FadeIn animations
beforeAll(() => {
  const observe = jest.fn();
  const unobserve = jest.fn();
  const disconnect = jest.fn();
  
  // @ts-ignore
  window.IntersectionObserver = jest.fn(() => ({
    observe,
    unobserve,
    disconnect,
  }));
});

describe('Experience Component', () => {
  test('renders the section title', () => {
    render(<Experience />);
    expect(screen.getByText('Experience')).toBeInTheDocument();
  });

  test('renders all companies from constants', () => {
    render(<Experience />);
    EXPERIENCE.forEach((job) => {
      expect(screen.getByText(job.company)).toBeInTheDocument();
      expect(screen.getAllByText(job.location).length).toBeGreaterThan(0);
    });
  });

  test('renders all roles for each company correctly', () => {
    render(<Experience />);
    EXPERIENCE.forEach((job) => {
      job.roles.forEach((role) => {
        // Check if role title is present
        expect(screen.getByText(role.title)).toBeInTheDocument();
        // Check if period is present
        expect(screen.getByText(role.period)).toBeInTheDocument();
      });
    });
  });

  test('renders multiple roles for MicroGenesis specifically', () => {
    render(<Experience />);
    const microGenesis = EXPERIENCE.find(j => j.company.includes('MicroGenesis'));
    expect(microGenesis).toBeDefined();
    
    // Verify all MicroGenesis roles are visible
    microGenesis?.roles.forEach(role => {
      expect(screen.getByText(role.title)).toBeInTheDocument();
    });
  });

  test('renders role descriptions', () => {
    render(<Experience />);
    const firstJob = EXPERIENCE[0];
    const firstRole = firstJob.roles[0];
    const firstPoint = firstRole.description[0];
    expect(screen.getByText(firstPoint)).toBeInTheDocument();
  });
});