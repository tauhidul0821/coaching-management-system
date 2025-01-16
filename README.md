# SETUP
### step 1: Go to coaching-management-system folder and install package using this command
```bash
npm i
```

### step 2:  create a mongo url from mongoDB atlas

```bash
mongodb+srv://mongoUserName:mongoPassword@cluster0.rpblz.mongodb.net/coaching?retryWrites=true&w=majority&appName=Cluster0
```

### step 3: add netword access in mongodb atlas 
set IP Address 0.0.0.0/0 for access other location


### step 4: create a file name: .env in project root folder 
- in .env file put those code and replace mongoUserName and mongoPassword

```bash
NEXT_PUBLIC_DOMAIN=http://localhost:3000
NEXT_PUBLIC_API_DOMAIN=http://localhost:3000/api
MONGODB_URI=mongodb+srv://mongoUserName:mongoPassword@cluster0.rpblz.mongodb.net/coaching?retryWrites=true&w=majority&appName=Cluster0
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_key
```
### step 5: project run by this command 

```bash
npm run dev
```


### Only logged in user can visit dashboard, other user can visit /login and /signup and default route '/' path

## Public route : who are not logged in.
```bash
/
/login
/signup
``` 


## private route: who are logged in
```bash
/dashboard
``` 


# Project Flow: Coaching Management System
## Task Description:
The Coaching Management System uses React.js, Next.js, and Tailwind CSS, with Redux for state management. It
features JWT authentication and role-based access control, allowing one teacher to manage all students and students to manage their own data. Data is stored in localStorage/IndexedDB, and the UI provides role-specific dashboards.
Performance is optimized with lazy loading and efficient rendering, while robust testing ensures reliability. The app is deployable on platforms like Vercel, with secure environment management and error monitoring.

## 1. Project Initialization
- Tasks:
- Set up the project using React js, Next.js and Tailwind CSS for server-side rendering and
responsive design.
- Configure Redux for state management and integrate Redux Thunk/Saga for handling side effects.
- Install dependencies:
- Core: next, react, redux, redux-thunk
- UI: tailwind css
- Testing: jest, react-testing-library, cypress
- Set up ESLint and Prettier for maintaining code quality and consistency.

## 2. Authentication & Authorization
- Tasks:
- Implement a sign-up process with the following rules:
- Allow the first registered user to sign up as a teacher.
- Prevent further teacher registrations once the first teacher account is created.
- Approve unlimited student sign-ups.
- Implement JWT-based login:
- Store access tokens in localStorage and refresh tokens in HTTP-only cookies.
- Create an authSlice in Redux for managing user authentication and roles.
- Add middleware to enforce role-based access:
- Teacher: Can edit data for any student.
- Student: Can edit only their own data.
- Build reusable components for login and registration forms with validation.
- Redirect unauthorized users to a 403 page.

## 3. Database Integration (LocalStorage/IndexedDB)
- Tasks:
- Use localStorage or IndexedDB as the primary database to store:
- User data (teacher and students).
- Student details (profile, academic data, etc.).
- Session information (JWT tokens).
- Develop utility functions for CRUD operations on localStorage/IndexedDB:
1. const saveToLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));
2. const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));
3. const removeFromLocalStorage = (key) => localStorage.removeItem(key);
- Ensure data integrity by validating schema before storing or updating records.

## 4. User Interface Development
- Tasks:
- Global Layout:
- Create a reusable layout component with role-based navigation menus.
- Include dashboard links for teachers and students.

#### Dashboard:
- For Teacher:
- Display a list of all students with options to view and edit their data.
- For Students:
- Display a summary of their profile and data with an edit option.

 #### Data Management:
- Teacher:
- Provide CRUD operations for managing any student's data.
- Student:
- Restrict CRUD operations to their own data only.

####  Profile Management:
- Enable both teacher and students to update their own profile information.

## 5. State Management
- Tasks:
- Create Redux slices:
- authSlice for managing authentication and roles.
- studentDataSlice for storing and managing student data.
- Store application state and user data in localStorage or IndexedDB:
- Use a structured schema for storing user roles, data, and session information.

## 6. Authorization Logic for Data Editing
- Tasks:
- Add API calls or local utility functions to enforce role-based editing:
- Teacher:
- Access all students' data and edit any student record.
- Student:
- Access and edit only their own data.
- Add role-based UI components:
- Show edit buttons or links based on the user's role and permission.
- Disable or hide edit options for unauthorized users.

## 7. Performance Optimization
- Tasks:
- Implement lazy loading and code splitting using Next.js dynamic imports.
- Optimize UI rendering:
- Use React.memo and useMemo to prevent unnecessary re-renders.
- Optimize data fetching:
- Fetch only relevant student data for the logged-in user.

## 8. Testing & Validation
- Tasks:
- Write unit tests for individual components using Jest and React Testing Library.
- Use Cypress for end-to-end testing:
- Simulate teacher actions for managing student data.
- Simulate student actions for editing their own data.
- Verify role-based restrictions and permissions.
- Add client-side and server-side validation for form inputs.

## 9. Deployment
- Tasks:
- Deploy the application on platforms like Vercel or Netlify.
- Use environment variables to securely manage sensitive information.
- Set up error monitoring using tools like Sentry or LogRocket.

## Role-Based Features Summary:
#### Teacher
- Access: Can view, edit, and manage all student data.
- Dashboard: Displays a list of all students.
- Permissions: Full CRUD operations on any student's data.
- Restrictions: Only one teacher account is allowed in the system.

#### Student
- Access: Can view and edit only their own data.
- Dashboard: Displays their own profile and academic data.
- Permissions: Restricted to their own data.


----------------- end of requirement------------------------

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.