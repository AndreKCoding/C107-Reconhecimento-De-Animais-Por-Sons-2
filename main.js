//https://teachablemachine.withgoogle.com/models/uUsc2O8S0/model.json

function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/rJndrYAPZ/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults()
{
    if (error) 
    {
        console.error(error);
    } else {
        console.log(results);
    }
}