# Building Applications with React 16 and Flux 3
## Section 3: Environment Setup
* Run create-react-app
* Install Flux, React Router, and Bootstrap
* * npm install flux --legacy-peer-deps react-router-dom@5.0.0 bootstrap@4.3.1
* Create Mock API
* * npm install -D cross-env@5.2.0 npm-run-all@4.1.5 json-server@0.15.0
* Create Mock API
## Section 4: React Core Concepts
## Section 5: Creating React Components
* Demo: Create Function Component
* Demo: Create App Entry Point
* Demo: Create Class Component
* Demo: Simple Routing
## Section 6: Props, State, Lifecycle Methods, and Keys
* Demo: Lifecycle Methods and State
* Demo: Display Array in a Table via Map
* Keys
## Section 7: Hooks, Component Composition, and PropTypes
* Demo: Hooks
* Demo: Controller Views
* PropTypes and Default Props
## Section 8: React Router
* Demo: Declaring Routes
* Demo: Links
* Demo: NavLinks
* Demo: 404s
* Demo: Redirects
* Demo: URL Parameters
* Demo: Prompt on Transition
## Section 9: Forms
* Create Course Form
* Controlled Components
* Form State and Change Handles
* Declaring State Change Handles
* Creating Reusable Inputs
* Consuming Reusable Inputs
* Saving Data
* Programmatic Redirects with React Router
* Notifications via a Third Party Component
* Input Validation and PropTypes
* Populate Form via the URL
## Section 10: Flux
## Section 11: Flux Demo
* Dispatcher
* Actions
* Stores: Change Listeners
* Stores: Registration
* Stores: Private Storage
* Stores: Interactions
* Stores: Initialization
* Update Course Flow with Flux
* Adding Store Listensers
* Delete Course via Flux


# Building Applications with React 17 and Redux

## Section 3: Environment Build
* OpenInitial Exercise Files
* Create Initial App Structure
* Start Webpack via npm Script
* Configure ESLint
## Section 4: React Component Approaches
## Section 5: Initial App Structure
* Create Home Page
* Create About Page
* Configure App entry Point
* Create App Layout
* Create Header
* Create 404 Page
* Create Course Page
## Section 6: Intro to Redux
## Section 7: Actions, Stores, and Reducers
## Section 8: Connecting React to Redux
## Section 9: Redux Flow
* Create Simple Add Course Form
* Binding in Classes
* Handle Submit
* Create Course Action
* Create Course Reducer and Root Reducer
* Create Store
* Instantiate Store and Provider
* Connect Container Component
* Step through Redux Flow and Try Redux Devtools
* mapDispatchToProps: Manual Mapping
* mapDispatchToProps: bindActionCreators
* mapDispatchToProps: Object Form
* Action Type Constants
## Section 10: Async in Redux
* Mock API Setup
* Middleware and Async Library Options
* Thunk Introduction
* Remove Inline Manage Course Form
* Add First Thunk
* Handle Loading Courses in Reducer
* Dispatch Action on Load
* Create ClurseList
* Practice Reduc Flow - Load and Display Author Data
* Centralize Initial Redux State
## Section 11: Async Writes in Redux
* Create Manage Course Page
* Implement Object Form of mapDispatchToProps
* Configure Routing for ManageCoursePage
* Convert Class Component to Function Component with Hooks
* Create Course Form
* Create Reusable TextInput and SelectInput Components
* Call CourseForm on ManageCoursePage
* Implement Centralized Change Handler
* Add Save Course Thunk and Action Creators
* Handle Creates and Updates in Reducer
* Dispatch Create and Update
* Redirect via React Router's Redirect Component
* Redirect via React router's History
* Populate Form via mapStateToProps
## Section 12: Async Status and Error Handling
* Create Spinner Component
* Create API Status Actions
* Call Begin API in Thunks
* Add Spinner to Course Pages
* Add Form Submission Loading Indicator
* Handle Serve-side Validation and API Errors
* Implement Client-side Validation
* Optimistic Deletes
## Section 13: Testing React
* Configure Jest
* Test React with Jest Snapshot Tests
* Test React with Enyzme
* Test React with React Testing Library
* Testing Connected React Coponents