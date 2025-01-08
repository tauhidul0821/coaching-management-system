import Footer from "./components/Layout/Footer";
import Navbar from './components/Layout/Navbar';
import LoginForm from "./components/Authentication/LoginForm";
import SignUpForm from "./components/Authentication/SignUpForm";

const minHeight: React.CSSProperties = {
  minHeight: '90vh', 
  textAlign: 'center',
};

export default function Home() {
  return (
    <>
    <Navbar />
      <div>
        <main style={minHeight}>
        <LoginForm />
        <SignUpForm />
          This is main
        </main>
      </div>
      <Footer />
    </>
  );
}
