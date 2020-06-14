import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  jokes: Object[];
  public name: string = "Agile..";
  public name1 = "";
  public myId1 = "testId1";
  public myId2 = "testId2";
  public isDisabled1 = true;
  public isDisabled2 = false;
  public isError = true;
  public isSpecial = true;
  public textSuccess = "text-success";
  public greeting = "";
  public greeting1 = "";

  public message = {
    "text-success" : !this.isError,
    "text-danger" : this.isError,
    "text-special" : this.isSpecial
  }

  public highlightColor = "orange";
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }

  constructor() {
    this.jokes = [
      {
        setup: "What did the cheese say when it looked in the mirror?",
        punchline: "Hello-Me (Halloumi)",
        hide: true
      },
      {
        setup: "What kind of cheese do you use to disguise a small horse?",
        punchline: "Mask-a-pony (Mascarpone)",
        hide: true
      },
      {
        setup: "A kid threw a lump of cheddar at me",
        punchline: "I thought ‘That’s not very mature’",
        hide: true
      }
    ];
  }

  greet = () => { 
    return "Helloooo.." + this.name;
  }

  toggle(joke) {
    joke.hide = !joke.hide;
  }

  onClick(event){
    console.log(event);
    this.greeting = event.type;
  }

  logMessage(value) {
    console.log(value)
  }

  ngOnInit(): void {
  }

}
