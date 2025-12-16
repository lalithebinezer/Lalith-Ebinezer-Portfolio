import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

// Add missing type declarations for Jest globals
declare const describe: any;
declare const test: any;
declare const expect: any;
declare const beforeAll: any;
declare const jest: any;

// Mock IntersectionObserver
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

  // Mock scrollTo to prevent JSDOM errors
  window.scrollTo = jest.fn();
});

describe('App Integration', () => {
  test('renders full application without crashing', () => {
    render(<App />);
    
    // Check for main sections
    expect(screen.getByText(/Lalith Ebinezer/i)).toBeInTheDocument();
    expect(screen.getByText(/Digital Twin Consultant/i)).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText(/Selected Projects/i)).toBeInTheDocument();
    expect(screen.getByText(/Expertise/i)).toBeInTheDocument();
  });

  test('renders navigation menu', () => {
    render(<App />);
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
  });
});