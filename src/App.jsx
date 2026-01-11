import './App.css';

function App() {
  const handleGetStarted = () => {
    console.log("Get Started clicked");
  };

  return (
    <div className="landing">
      <h1>Welcome to Paradise Nursery</h1>
      <button onClick={handleGetStarted}>Get Started</button>
    </div>
  );
}

export default App;
