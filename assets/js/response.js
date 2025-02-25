function getBotResponse(input) {
   input = input.toLowerCase();
   
    // Simple responses
   
    if (input.indexOf('hi')>=0||input.indexOf('hello')>=0||input.indexOf('hey')>=0     ) {
        return "Hello dear";           
    }
    if (input.indexOf('full form')>=0||input.indexOf('what is erc')>=0||input.indexOf('know more')>=0     ) {
        return "Enlectic Research Center";           
    }
    if (input.indexOf('established')>=0||input.indexOf('started')>=0  ) {
        return "ERC was started in 2018.";           
    }
    if (input.indexOf('find')>=0||input.indexOf('situated')>=0||input.indexOf('how to come')>=0  ) {
        return "you can find us on second floor of computer department.";           
    }
    if (input.indexOf('know coding')>=0||input.indexOf('have knowledge')>=0||input.indexOf('no knowledge')>=0||input.indexOf('dont know')>=0 ||input.indexOf('branch')>=0||input.indexOf('year')>=0  ) {
        return "There is no restriction in branch, year or pre-requisites to join the club";           
    }
    if (input.indexOf('attendance')>=0||input.indexOf('attend')>=0 ||input.indexOf('compulsory')>=0 ||input.indexOf('mandatory')>=0 ) {
        return "Attendance is mandatory for the meeting.";           
    }
    if (input.indexOf('fees')>=0||input.indexOf('free')>=0 ||input.indexOf('installment')>=0 ) {
        return "Our club is absolutely free of charge.";           
    }
    if (input.indexOf('domain')>=0||input.indexOf('feilds')>=0 ) {
        return "We currently work in four domains";           
    }
    if (input.indexOf('projects')>=0||input.indexOf('work')>=0 ||input.indexOf('acheivement')>=0 ) {
        return "You could see that in our about section";           
    }
    if (input.indexOf('contact')>=0||input.indexOf('number')>=0 ||input.indexOf('address')>=0 ) {
        return "You could see that in our contact section";           
    }
    if (input.indexOf('register')>=0||input.indexOf('get in')>=0||input.indexOf('interview')>=0 ||input.indexOf('appointed')>=0||input.indexOf('recruited')>=0 ||input.indexOf('join')>=0     ) {
        return "You could register in the recruitment section";           
    }
    else
    {
        return"sorry didn't get that ";
    }
}