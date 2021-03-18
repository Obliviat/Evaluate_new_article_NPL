import 'regenerator-runtime/runtime'

const requestAPI = async (mysite = '') => {
    const response = await fetch('http://localhost:8081/test', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mysite: mysite }),
    })
    try {
        const newData = await response.json();
        console.log(newData);
        updateUI(newData);
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}

export const updateUI = (myData) => {
    document.getElementById('polarity').innerHTML = "polarity: " + myData.polarity;
    document.getElementById('subjectivity').innerHTML = "Subjectivity: " + myData.subjectivity;
}


export { requestAPI }