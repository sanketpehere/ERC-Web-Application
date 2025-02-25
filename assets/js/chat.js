// Collapsible
var coll = document.getElementsByClassName("collapsible");
var a =1;

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
       
           
             this.classList.toggle("active");     

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
           

        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            
        }
        if(a==1)
        {
            firstBotMessage();
        }
       
        a++;
        
    });    
}

function getTime() {    
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
function firstBotMessage() {
    let firstMessage = "Welcome to ERC..";
     setTimeout(() => {
        document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';
     }, 100);
     setTimeout(() => {
        document.getElementById("botsecStarterMessage").innerHTML = '<p class="botText"><span>' + "Please let me know how can i help you" + '</span></p>';
     }, 1000);
     
    document.getElementById("userInput").scrollIntoView(true);
}

let time = getTime();

$("#chat-timestamp").append(time);




// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    // let extra = '<p class="botText"><span>' + "Can i help you any of the following ways" + '</span></p>'; 
    setTimeout(() => {
        $("#chatbox").append(botHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);  
    }, 500); 
   

    if(botResponse.indexOf("Enlectic Research Center")>=0)
    {
        setTimeout(() => {
            $("#chatbox").append('<p class="botText"><span>' + "At ERC, we are a passionate collective of tech aficionados"+ '</span></p>');
            document.getElementById("chat-bar-bottom").scrollIntoView(true);  
        }, 1500); 
    }
    if(botResponse.indexOf("sorry didn't get that")>=0)
    {
        setTimeout(() => {
            $("#chatbox").append('<p class="botText"><span>' + "go in contact section for more details"+ '</span></p>');
            document.getElementById("chat-bar-bottom").scrollIntoView(true);  
        }, 1500); 
    }   

    
    
     if(botResponse.indexOf('you can find us on second floor of computer department')>=0){

        setTimeout(() => {
            $("#chatbox").append('<p class="botText"><span>' + 'aside department library'  + '</span></p>');
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
        }, 1500);
        
    }
    if(botResponse.indexOf('There is no restriction in branch or year to join the club')>=0){

        setTimeout(() => {
            $("#chatbox").append('<p class="botText"><span>' + 'everyone who is willing to learn can join'  + '</span></p>');
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
        }, 1500);
        
    }
    if(botResponse.indexOf('We currently work in four domains')>=0){

        setTimeout(() => {
            $("#chatbox").append('<p class="botText"><span>' + 'Android , Web , Business , competitive coding'  + '</span></p>');
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
        }, 1500);
        
    }
    if(botResponse.indexOf('Attendance is mandatory for the meeting.')>=0){

        setTimeout(() => {
            $("#chatbox").append('<p class="botText"><span>' + 'However, for the remaining tasks, only the outcomes will be taken into consideration.'  + '</span></p>');
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
        }, 1500);
        
    }
    
    
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "I love your website!";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000)
}

function sendButton() {
    getResponse();
}

function heartButton() {
                // buttonSendText("I love your website!");
    getResponse();
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});