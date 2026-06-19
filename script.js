function predictDemand(){

    document.getElementById("result").innerHTML = `
        <h3>Demand Prediction</h3>

        <p><b>Demand Level:</b> HIGH 🔴</p>

        <h4>Recommendations</h4>

        <ul>
            <li>Add 2 Extra Buses</li>
            <li>Increase Metro Frequency</li>
            <li>Send Crowd Alerts</li>
        </ul>

        <h4>Sustainability Impact</h4>

        <ul>
            <li>CO₂ Saved: 1.4 kg</li>
            <li>Fuel Saved: 0.6 L</li>
        </ul>

        <h4>Green Rewards</h4>

        <p>⭐ +15 Green Points</p>
    `;
}