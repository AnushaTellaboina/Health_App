import { useState } from "react";

const medicine = "https://res.cloudinary.com/dgusazphc/image/upload/v1691816834/medicine_j4ld21.jpg";

export default function App() {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmiResult, setBmiResult] = useState(null);
    const [status, setStatus] = useState("");

    function calculateBMI() {
        if (!weight || !height) {
            alert("Please enter both weight and height");
            return;
        }
        let bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        setBmiResult(bmi);

        let bmiStatus = getStatus(bmi);
        setStatus(bmiStatus);
    }

    function getStatus(bmi) {
        if (bmi < 18.5) return "Underweight";
        else if (bmi >= 18.5 && bmi < 24.9) return "Normal";
        else if (bmi >= 25 && bmi < 29.9) return "Overweight";
        else return "Obese";
    }

    return (
        <div className="d-flex align-items-center justify-content-center vh-100" style={{ backgroundImage: `url(${medicine})`, backgroundSize: 'cover' }}>
            <div className="container">
                <div className="card p-3 shadow-lg rounded-lg" style={{ borderRadius: '20px' }}>
                    <h1 className="text-center text-success mb-4 font-weight-bold">BMI Calculator</h1>
                    <p className="text-sm text-gray-500 text-center pb-3">
                        Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women.
                    </p>
                    <div className="mb-3">
                        <label htmlFor="height" className="form-label text-gray-700 font-weight-bold mb-2">Height (in cm)</label>
                        <input
                            type="number"
                            className="form-control"
                            id="height"
                            placeholder="Height in cm"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            style={{ backgroundColor: 'white' }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="weight" className="form-label text-gray-700 font-weight-bold mb-2">Weight (in kg)</label>
                        <input
                            type="number"
                            className="form-control"
                            id="weight"
                            placeholder="Weight in kg"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            style={{ backgroundColor: 'white' }}
                        />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button
                            className="btn btn-success"
                            type="button"
                            onClick={calculateBMI}
                        >
                            Calculate BMI
                        </button>
                    </div>
                    {bmiResult && (
                        <div className="mt-4">
                            <p>Your BMI is: {bmiResult}</p>
                            <p>You are currently: {status}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
