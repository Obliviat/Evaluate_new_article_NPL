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
    document.getElementById('subjectivity').innerHTML = "subjectivity: " + myData.subjectivity;
    document.getElementById('confidence').innerHTML = "confidence:" + myData.confidence
    document.getElementById('agreement').innerHTML = "agreement:" + myData.agreement
    document.getElementById('irony').innerHTML = "irony:" + myData.irony
}


export { requestAPI }