function predictDemand() {

    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let hour = parseInt(document.getElementById("time").value);

    let demand = "";
    let color = "";

    if(hour == 8 || hour == 9 || hour == 18){
        demand = "HIGH 🔴";
        color = "red";
    }
    else if(hour == 12 || hour == 15){
        demand = "MEDIUM 🟡";
        color = "orange";
    }
    else{
        demand = "LOW 🟢";
        color = "green";
    }

    document.getElementById("result").innerHTML = `
        <h3>Route Analysis</h3>

        <p><b>Route:</b> ${from} → ${to}</p>

        <p>
            <b>Demand Level:</b>
            <span style="color:${color}">
                ${demand}
            </span>
        </p>

        <h4>AI Operational Recommendations</h4>

        <ul>
            <li>Adjust fleet on ${from}–${to} corridor</li>
            <li>Optimize metro frequency for peak hours</li>
            <li>Deploy crowd monitoring at major stations</li>
        </ul>

        <h4>Commuter Impact</h4>
        <ul>
            <li>Reduced waiting time</li>
            <li>Less overcrowding</li>
            <li>Better travel predictability</li>
        </ul>
    `;
}