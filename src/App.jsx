import { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./pages/News";
import LoadingBar from 'react-top-loading-bar'
import './App.css';

function App() {

    const [category, setCategory] = useState("")
    const [progress, setProgress] = useState(0)

    const toggleCategory = (curretCategory) => {
        setCategory(curretCategory)
    }

    return (
        <div>
            <LoadingBar height={3} color='#f11946' progress={progress} />
            <Navbar toggleCategory={toggleCategory} />
            <News category={category} setProgress={setProgress} />
        </div>
    );
}

export default App;
