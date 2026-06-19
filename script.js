function predictDemand() {

    let time = document.getElementById("time").value;

    if(time === ""){
        alert("Please select a time");
        return;
    }

    let hour = parseInt(time.split(":")[0]);

    let demand = "";
    let color = "";

    if((hour >= 7 && hour <= 10) || (hour >= 17 && hour <= 20)){
        demand = "HIGH 🔴";
        color = "red";
    }
    else if(hour >= 11 && hour <= 16){
        demand = "MEDIUM 🟡";
        color = "orange";
    }
    else{
        demand = "LOW 🟢";
        color = "green";
    }

    document.getElementById("result").innerHTML = `
        <h3>Demand Prediction</h3>

        <p>
            <b>Demand Level:</b>
            <span style="color:${color}">
                ${demand}
            </span>
        </p>

        <h4>Recommendations</h4>

        <ul>
            <li>Optimize Bus Allocation</li>
            <li>Adjust Metro Frequency</li>
            <li>Send Crowd Alerts to Commuters</li>
        </ul>

        <h4>Sustainability Impact</h4>

        <ul>
            <li>Estimated CO₂ Saved: 1.4 kg</li>
            <li>Estimated Fuel Saved: 0.6 L</li>
        </ul>

        <h4>Green Rewards</h4>

        <p>⭐ +15 Green Points</p>
    `;
}