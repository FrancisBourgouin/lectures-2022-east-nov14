# React Glossary

# Project Description

Shows a list of statements about multiple things of React, possibility to add new statements and can collapse per subject

# User Stories

- User can see a list of statements about React subjects
- User can add a statement to a specific subject
- User can create a new subject

# Packages

## Frontend

- CRA
- Sass?
- Axios

## Backend

- Axios ?
- Express

# Data structure

## Statement

```jsx
  const statement = {
    id:1
    subject:"component",
    content:"something"
  }
```

## Statements

```jsx
const listOfStatementsArr = [statement, statement]; // Fine since we don't edit
const listOfStatementsObj = { 1: statement, 2: statement }; // If we had to edit
```

# Mock Data

```jsx
const initialStatements = [
  {
    id: 1,
    subject: "components",
    content: "Components are the building blocks of react",
  },
  {
    id: 2,
    subject: "components",
    content:
      "Take a functionality of a small piece of your application and encapsulated its own isolated container",
  },
  {
    id: 3,
    subject: "props",
    content:
      "Props are to components what attributes are to an HTML element (the 'src' tag in an <img> is needed to make the image work)",
  },
  {
    id: 4,
    subject: "props",
    content:
      "Props are accessible in an object in the first argument of a functional component",
  },
];
```

```jsx
const subjects = {
  components: ["...", "..."],
  props: ["...", "..."],
};
```

# HTML Structure

- header
  - h1 Title
- main
  - section
    - h2 Form
    - form
      - input subject
      - textarea content
      - button
  - section
    - h2 Form
    - form
      - input subject
      - button
  - section
    - h2 Statements
    - ul
      - li
        - p subject
        - p content

# Component Structure

- App
  - Header
  - StatementForm
  - StatementList
    - StatementListItem

# Steps

- Planning
- Wireframes & ERD (Flow of App)

- Data First Approach

  - DB Queries
  - Give DBQ => Router
  - Router Qs => Routes (All routes are working)
  - Base React App receving Route Data
  - Shape React in the way that you need

- Design First Approach (Push Data Up)

  - Static HTML
  - Static React Components
  - Dynamic React Components (Locally)
  - Hook to API routes
  - (API Routes) : Serving Mock Data
  - (API Routes) : Replace with Helper Functions w/ MockData
  - (Helper Functions) : Replace with DB Queries

- Make it Fancy!
