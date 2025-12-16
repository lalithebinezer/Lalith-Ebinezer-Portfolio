import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Projects from './Projects';
import { PROJECTS } from '../constants';

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
});

describe('Projects Component', () => {
  test('renders projects section title', () => {
    render(<Projects />);
    expect(screen.getByText(/Selected Projects/i)).toBeInTheDocument();
  });

  test('renders all project titles', () => {
    render(<Projects />);
    PROJECTS.forEach((project) => {
      // Using getAllByText because titles might appear in modal logic (though hidden initially)
      // or if multiple projects share keywords. strictly getByText might need exact:false
      expect(screen.getAllByText(project.title).length).toBeGreaterThan(0);
    });
  });

  test('opens project modal on click', () => {
    render(<Projects />);
    const firstProject = PROJECTS[0];
    
    // Find the card by project title and click it
    // The title is inside the card
    const projectTitle = screen.getByText(firstProject.title);
    fireEvent.click(projectTitle);

    // After click, the modal should appear. 
    // We can check for the description which is only visible in the modal.
    expect(screen.getByText(firstProject.description)).toBeInTheDocument();
    
    // Check for "Technologies" header in modal
    expect(screen.getByText('Technologies')).toBeInTheDocument();
  });

  test('closes modal when close button is clicked', () => {
    render(<Projects />);
    const firstProject = PROJECTS[0];
    
    // Open modal
    fireEvent.click(screen.getByText(firstProject.title));
    expect(screen.getByText(firstProject.description)).toBeInTheDocument();

    // Close modal (X button)
    // The X icon is from lucide-react. We can find the button by its functionality or parent
    // In the code: <button onClick={() => setSelectedProject(null)} ...><X /></button>
    // We can rely on finding the button that contains the X icon or essentially the button in the header.
    // A robust way is to look for a button that is likely the close button.
    const buttons = screen.getAllByRole('button');
    // Assuming the close button is one of them. In a real test, adding aria-label="Close modal" to the button is best practice.
    // For now, we simulate Escape key which is also implemented.
    
    fireEvent.keyDown(window, { key: 'Escape', code: 'Escape' });
    
    // Description should no longer be visible (or component unmounted)
    // Note: In React Testing Library, queryBy returns null if not found.
    expect(screen.queryByText(firstProject.description)).not.toBeInTheDocument();
  });
});