import { useAuth } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const { isSignedIn, signOut } = useAuth();

  return (
    <div className="home">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            WiseTrack
          </Link>
          
          <div className="nav-links">
            {isSignedIn ? (
              <>
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
                <Link to="/transactions" className="nav-link">Transactions</Link>
                <Link to="/reports" className="nav-link">Reports</Link>
                <button onClick={() => signOut()} className="nav-link-button">
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link to="/sign-in" className="nav-link-button">Sign In</Link>
                <Link to="/sign-up" className="nav-link-button">Get Started</Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {!isSignedIn && (
          <>
            {/* Hero Section */}
            <section className="hero">
              <div className="hero-content">
                <h1>Smart Money Tracking<br />for Modern Life</h1>
                <p>Take control of your finances with our intuitive expense tracking solution.</p>
                <Link to="/sign-up" className="cta-button">Start Free →</Link>
              </div>
            </section>

            {/* How it Works Section */}
            <section className="how-it-works">
              <h2>How It Works</h2>
              <div className="steps">
                <div className="step">
                  <div className="step-number">01</div>
                  <h3>Track Expenses</h3>
                  <p>Easily log your daily expenses and categorize them automatically.</p>
                </div>
                <div className="step">
                  <div className="step-number">02</div>
                  <h3>Set Budgets</h3>
                  <p>Create custom budgets and get alerts when you're close to limits.</p>
                </div>
                <div className="step">
                  <div className="step-number">03</div>
                  <h3>Analyze Spending</h3>
                  <p>Get insights into your spending habits with clear visualizations.</p>
                </div>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}

export default Home; 