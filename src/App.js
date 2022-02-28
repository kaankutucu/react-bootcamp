import Header from "./components/header";
import User from "./components/User";
import Friend from "./components/friend";
import './App.css';

function App() {
    return (
        <div className="App">
            <Header/>
            <User name={"Kaan"} surname={"Kutucu"} age={"12"} isLoggedIn={true} />
            <Friend/>
        </div>
    );
}

export default App;
