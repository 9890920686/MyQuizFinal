class Form {
  constructor() {
    this.input = createInput("Name");
    this.answer = createInput("Your Answer")
    this.button = createButton('SUBMIT');
    
  }
  hide(){
    this.input.hide();
      this.button.hide();
      
  }

  display(){
    var title = createElement('h3')
    var Question = createElement('h6')
    

    title.html("Answer The following Question");
    title.position(110, 0);

    Question.html("What do you break so that you can use it. answer should have each letter caps")
    Question.position(30,80)
    
    this.input.position(130, 160);
    this.button.position(190, 240);
    
    this.answer.position(130,200)

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.answer.hide();
      this.answer.hide();

      player.name = this.input.value();
      answer = this.answer.value();
      
      playerCount+=1;
      player.index = playerCount;

      player.update()
      player.updateCount(playerCount);
     
    });

  }
}
