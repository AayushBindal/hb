class Security {

    constructor(){

        this.access1 = createInput("").attribute("placeholder", "code1");
        this.access1.position(windowWidth/10-5,windowHeight/10+40);
        this.access1.style('background', 'cyan');  

        this.button1 = createButton('Check');
        this.button1.position(windowWidth/10-5,windowHeight/10+70);
        this.button1.style('background', 'cyan');    

        this.access2 = createInput("").attribute("placeholder", "code2");
        this.access2.position(windowWidth/2+100,windowHeight/1.8);
        this.access2.style('background', 'cyan');  

        this.button2 = createButton('Check');
        this.button2.position(windowWidth/2+100, windowHeight/1.7+10);
        this.button2.style('background', 'cyan');

        this.access3 = createInput("").attribute("placeholder", "code3");
        this.access3.position(windowWidth/12, windowHeight/1.3-20);
        this.access3.style('background', 'cyan');

        this.button3 = createButton('check');
        this.button3.position(windowWidth/12, windowHeight/1.29+5);
        this.button3.style('background', 'cyan');
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });

        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
            }
        })

    }
}