/**
 * Tests for Compass Frameworks Website
 */

// Mock DOM environment for testing
beforeEach(() => {
    document.body.innerHTML = `
        <header class="site-header">
            <nav class="main-navigation">
                <button class="mobile-menu-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul class="nav-menu">
                    <li><a href="#home">Start</a></li>
                    <li><a href="#about">Über mich</a></li>
                </ul>
            </nav>
        </header>
        <section id="home"></section>
        <section id="about"></section>
    `;
});

// Import functions (in a real setup, these would be imported from main.js)
const { throttle } = require('../src/js/main.js');

describe('Utility Functions', () => {
    test('throttle function limits execution', (done) => {
        let counter = 0;
        const increment = throttle(() => counter++, 100);
        
        // Call multiple times quickly
        increment();
        increment();
        increment();
        increment();
        
        // Should only execute once immediately
        expect(counter).toBe(1);
        
        // After throttle period, should execute again
        setTimeout(() => {
            increment();
            expect(counter).toBe(2);
            done();
        }, 150);
    });
});

describe('Navigation', () => {
    test('mobile menu toggle exists', () => {
        const toggle = document.querySelector('.mobile-menu-toggle');
        expect(toggle).toBeTruthy();
    });
    
    test('nav menu exists with links', () => {
        const navMenu = document.querySelector('.nav-menu');
        const links = navMenu.querySelectorAll('a');
        expect(navMenu).toBeTruthy();
        expect(links.length).toBeGreaterThan(0);
    });
});

describe('DOM Elements', () => {
    test('header exists', () => {
        const header = document.querySelector('.site-header');
        expect(header).toBeTruthy();
    });
    
    test('sections have IDs for navigation', () => {
        const sections = document.querySelectorAll('section[id]');
        expect(sections.length).toBeGreaterThan(0);
    });
});

// Basic smoke test
describe('Smoke Tests', () => {
    test('page structure is valid', () => {
        expect(document.querySelector('.site-header')).toBeTruthy();
        expect(document.querySelector('.main-navigation')).toBeTruthy();
        expect(document.querySelector('.nav-menu')).toBeTruthy();
    });
}); 