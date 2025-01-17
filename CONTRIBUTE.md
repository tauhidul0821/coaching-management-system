## How to Contribute

1. Fork the repository.
2. Clone your forked repo: `git clone https://github.com/your-username/project-name.git`.
3. Create a new branch: `git checkout -b feature/your-feature`.
4. Make your changes and test them.
5. Commit your changes: `git commit -m "Description of changes"`.
6. Push your branch: `git push origin feature/your-feature`.
7. Open a pull request.

# SETUP

### step 1: Go to coaching-management-system folder and install package using this command

```bash
npm i
```

### step 2: create a mongo url from mongoDB atlas

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
