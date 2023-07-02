# Working with Components in React 18
## Section 3: Exploring Our React Application
* The Next.js Toolchain Basics
* Understanding the Todo Apps Data Layer
## Section 4: Global State Sharing and React Context
* Three Ways to Propagate State Between Components
* Passing State as props Between Components
* * pass darkTheme and toggleTheme through props
* Implementing React Context in Our Layout Component
* * React Context main benefit is it allows for sharing between components without passing props, React Context acts like global data you can share from any level of your component hierarchy, Many React Context can exist in an app, and can overlap each other in a component hierarchy, React Context helps reduce complexity by avoiding passing props between components; Drawback: promotes information hiding, Unexpected component re-renders
* Move Read Context into a Dedicated Component
* Promote Context Creation to Where It Is Used
* * App => Layout => InnerLayout, make sure ThemeProvider run before InnerLayout, so the ThemeContext has value before entering InnerLayout
* Code a Higher Order Component (HOC)
* * HOC's are a simple programming pattern used to inject props into an existing component
* * api\demo2.js demonstrate App component theme-aware by enhancing it with our own withTheme HOC.
* Share Component State with HOCs
## Section 5: Handling Errors and Debugging Components
* The useDebugValue Hook Basics
* Integrating useDebugValue into Custom Theme Hook
* An Advanced Use of useDebugValue
* Working with the React Dev Tools Profile Tab
* Inspecting Component Renders with React Dev Tools
* Adding Error Boundaries for Catching Errors in Production
