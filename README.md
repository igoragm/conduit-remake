# conduit-remake

This project is mostly for learning purposes. Please treat it as such :)

Testing Libs Comparison

        RTL: 
        - more focused on user behavior (integration/e2e tests); integration vs implementation
        - uses React renderer and ReactTestUtils internally,
        - requires real DOM
        - renders children components too
        - With react-testing-library, you can:
            - Query your elements within text, label, displayValue, role, and testId
            - Fire any event
            - Wait for an element to appear with wait
            However, you cannot:
            - Conduct shallow rendering
            - Access internal business of your components, such as states
        
        Enzyme:
        - custom renderer that doesn't require DOM (shallow rendering - doesn't render child components); setting and testings props & state
        - less integrating, more unit testing and implementation oriented 
        - faster to write
        - more flexible
        - Getting and setting a component's props (props())
        - Getting and setting a component's state (state())
        - Shallow wrapper is good to test small independent components.
        - mount(<Component />) for Full DOM rendering is ideal for use cases where you have components that may interact with DOM apis, or may require the full lifecycle in order to fully test the component (ie, componentDidMount etc.)
        - shallow(<Component />) for Shallow rendering is useful to constrain yourself to testing a component as a unit, and to ensure that your tests aren't indirectly asserting on behavior of child components.
        - render which is used to render react components to static HTML and analyze the resulting HTML structure.
        - https://gist.github.com/fokusferit/e4558d384e4e9cab95d04e5f35d4f913
        - https://medium.com/javascript-in-plain-english/i-tested-a-react-app-with-jest-testing-library-and-cypress-here-are-the-differences-3192eae03850
        - https://stackoverflow.com/questions/54152562/difference-between-enzyme-reacttestutils-and-react-testing-library

        RTL : Enzyme = https://claritydev.net/blog/testing-react-components-enzyme-vs-react-testing-l/

        Puppeteer:
        - not cross-browser
        - not a test runner, just a browser automation tool
        - limited to Chrome and Firefox https://aslushnikov.github.io/ispuppeteerfirefoxready/

        Cypress:
        - End-To-End (e2e) testing
        - Cross-browser
        - Cypress uses mocha internally as a test runner
        - its own dashboard
        - better community support
        - works out of the box
        - required only one file https://medium.com/javascript-in-plain-english/i-tested-a-react-app-with-jest-testing-library-and-cypress-here-are-the-differences-3192eae03850
        - https://medium.com/tech-quizlet/cypress-the-future-of-end-to-end-testing-for-web-applications-8ee108c5b255
