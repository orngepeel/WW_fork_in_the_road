//declare name variable
let userName = "Devon";
//start position
let storyPos = 0;

let choicesID;
let storyID;

//story beginning
const storyStart = `<p>Welcome to this Choose Your Own Adventure, ${userName}! Thanks for taking a look!<br>
This story is a work in progress. It will be updated in the future once I've written the story. For now, feel free to take a look at how it all works.</p>`;

//story content
const storyContent = [
  {//0
    prompt: `First choice: option 1`,
    content: `<p>This story is a work in progress. It will be updated in the future once I've written the story. For now, feel free to take a look at how it all works.</p>
    <p>This part of the story would be the start of the first of two main branches in the story!</p>`
  },
  {//1
    prompt: `Continue...`,
    content: `<p>This story is a work in progress. It will be updated in the future once I've written the story. For now, feel free to take a look at how it all works.</p>
    <p>This part of the story is a continuation of the first main branch of the story.</p>`
  },
  {//2
    prompt: `First choice: option 2`,
    content: `<p>This story is a work in progress. It will be updated in the future once I've written the story. For now, feel free to take a look at how it all works.</p>
    <p>This part of the story would be the start of the second of two main branches in the story!</p>`
  },
  {//3
    prompt: `Continue...`,
    content: `<p>This story is a work in progress. It will be updated in the future once I've written the story. For now, feel free to take a look at how it all works.</p>
    <p>This part of the story is a continuation of the second main branch of the story.</p>`
  },
  {//4
    prompt: `Second choice: option 1`,
    content: `<p>This story is a work in progress. It will be updated in the future once I've written the story. For now, feel free to take a look at how it all works.</p>
    <p>This part of the story would explore one of two ways the last decision could play out.</p>`
  },
  {//5
    prompt: `Third choice: option 1`,
    content: `<p>This story is a work in progress. It will be updated in the future once I've written the story. For now, feel free to take a look at how it all works.</p>
    <p>This is one result of the third choice in this branch.</p>`
  },
  {//6
    prompt: `Second choice: option 2`,
    content: `<p>This story is a work in progress. It will be updated in the future once I've written the story. For now, feel free to take a look at how it all works.</p>
    <p>This part of the story would explore the second of two ways the last decision could play out.</p>`
  },
  {//7
    prompt:`Third choice: option 2`,
    content: `<p>This story is a work in progress. It will be updated in the future once I've written the story. For now, feel free to take a look at how it all works.</p>
    <p>This is the second result of the third choice in this branch.</p>`
  },
  {//8
    prompt: `Second choice: option 1`,
    content: `<p>This story is a work in progress. It will be updated in the future once I've written the story. For now, feel free to take a look at how it all works.</p>
    <p>This part of the story would explore the first of two ways the last decision could play out.</p>`
  },
  {//9
    prompt: `Third choice: option 1`,
    content: `<p>This story is a work in progress. It will be updated in the future once I've written the story. For now, feel free to take a look at how it all works.</p>
    <p>This is one result of the third choice in this branch.</p>`
  },
  {//10
    prompt: `Second choice: option 2`,
    content: `<p>This story is a work in progress. It will be updated in the future once I've written the story. For now, feel free to take a look at how it all works.</p>
    <p>This part of the story would explore the second of two ways the last decision could play out.</p>`
  },
  {//11
    prompt: `Third choice: option 2`,
    content: `<p>This story is a work in progress. It will be updated in the future once I've written the story. For now, feel free to take a look at how it all works.</p>
    <p>This is the second result of the third choice in this branch.</p>`
  },
  {//12
    prompt: `Continue...`,
    content: `<p>This story is a work in progress. It will be updated in the future once I've written the story. For now, feel free to take a look at how it all works.</p>
    <p>From this point in the story, things come back to the first main branch in the story.</p>`
  },
  {//13
    prompt: `Continue...`,
    content: `<p>This story is a work in progress. It will be updated in the future once I've written the story. For now, feel free to take a look at how it all works.</p>
    <p>From this point in the story, things come back to the second main branch in the story.</p>`
  },
  {//14
    prompt: `Ending 1 of 8`,
    content: `<p>This story is a work in progress. It will be updated in the future once I've written the story. For now, feel free to take a look at how it all works.</p>
    <p>This is the first possible ending of the story.</p>`
  },
  {//15
    prompt: `Ending 2 of 8`,
    content: `<p>This story is a work in progress. It will be updated in the future once I've written the story. For now, feel free to take a look at how it all works.</p>
    <p>This is the second possible ending of the story.</p>`
  },
  {//16
    prompt: `Ending 3 of 8`,
    content: `<p>This story is a work in progress. It will be updated in the future once I've written the story. For now, feel free to take a look at how it all works.</p>
    <p>This is the third possible ending of the story.</p>`
  },
  {//17
    prompt: `Ending 4 of 8`,
    content: `<p>This story is a work in progress. It will be updated in the future once I've written the story. For now, feel free to take a look at how it all works.</p>
    <p>This is the fourth possible ending of the story.</p>`
  },
  {//18
    prompt: `Ending 5 of 8`,
    content: `<p>This story is a work in progress. It will be updated in the future once I've written the story. For now, feel free to take a look at how it all works.</p>
    <p>This is the fifth possible ending of the story.</p>`
  },
  {//19
    prompt: `Ending 6 of 8`,
    content: `<p>This story is a work in progress. It will be updated in the future once I've written the story. For now, feel free to take a look at how it all works.</p>
    <p>This is the sixth possible ending of the story.</p>`
  },
  {//20
    prompt: `Ending 7 of 8`,
    content: `<p>This story is a work in progress. It will be updated in the future once I've written the story. For now, feel free to take a look at how it all works.</p>
    <p>This is the seventh possible ending of the story.</p>`
  },
  {//21
    prompt: `Ending 8 of 8`,
    content: `<p>This story is a work in progress. It will be updated in the future once I've written the story. For now, feel free to take a look at how it all works.</p>
    <p>This is the eighth possible ending of the story.</p>`
  },
  {//22
    prompt: `???`,
    content: `<p>This story is a work in progress. It will be updated in the future once I've written the story. For now, feel free to take a look at how it all works.</p>
    <p>This part of the story would be a secret ending right at the start, resulting from choosing an option that disengages you (${userName}, the "main character") from the story. Fun!</p>`
  }
];

//function to provide choice buttons based on position in story
const provideChoices = () => {
  switch(storyPos) {
    case 0:
      choicesID.innerHTML =
        `<button id="step1" type="button">${storyContent[0].prompt}</button>
        <button id="stepA" type="button">${storyContent[2].prompt}</button>
        <button id="f" type="button">${storyContent[22].prompt}</button>`;
        document.getElementById("step1").addEventListener("click", function() {
          storyPos = 1;
          displayStory(storyPos);});
        document.getElementById("stepA").addEventListener("click", function() {
          storyPos = 2;
          displayStory(storyPos);});
        document.getElementById("f").addEventListener("click", function() {
          storyPos = 23;
          displayStory(storyPos);});
          //step1 to storyPos = 1, stepA to storyPos = 2, f to storyPos = 21
      break;
    case 1:
    choicesID.innerHTML =
      `<button id="1a1" type="button">${storyContent[4].prompt}</button>
      <button id="1b1" type="button">${storyContent[6].prompt}</button>`;
      document.getElementById("1a1").addEventListener("click", function() {
        storyPos = 3;
        displayStory(storyPos);});
      document.getElementById("1b1").addEventListener("click", function() {
        storyPos = 4;
        displayStory(storyPos);});
        //storyPos = 3, 4
      break;
    case 2:
      choicesID.innerHTML =
        `<button id="2a1" type="button">${storyContent[8].prompt}</button>
        <button id="2b1" type="button">${storyContent[10].prompt}</button>`;
        document.getElementById("2a1").addEventListener("click", function() {
          storyPos = 5;
          displayStory(storyPos);});
          document.getElementById("2b1").addEventListener("click", function() {
            storyPos = 6;
            displayStory(storyPos);});
        //storyPos 5, 6
      break;
    case 3:
      choicesID.innerHTML =
        `<button id="reconnect1" type="button">${storyContent[12].prompt}</button>`;
        document.getElementById("reconnect1").addEventListener("click", function() {
          storyPos = 7;
          displayStory(storyPos);});
      //to storyPos = 7
      break;
    case 4:
    choicesID.innerHTML =
      `<button id="reconnect1" type="button">${storyContent[12].prompt}</button>`;
      document.getElementById("reconnect1").addEventListener("click", function() {
        storyPos = 7;
        displayStory(storyPos);});
      //to storyPos = 7
      break;
    case 5:
    choicesID.innerHTML =
      `<button id="reconnect2" type="button">${storyContent[13].prompt}</button>`;
      document.getElementById("reconnect2").addEventListener("click", function() {
        storyPos = 8;
        displayStory(storyPos);});
      //to storyPos = 8
      break;
    case 6:
      choicesID.innerHTML =
        `<button id="reconnect2" type="button">${storyContent[13].prompt}</button>`;
        document.getElementById("reconnect2").addEventListener("click", function() {
          storyPos = 8;
          displayStory(storyPos);});
        //to storyPos = 8
      break;
    case 7:
      choicesID.innerHTML =
        `<button id="step2" type="button">${storyContent[1].prompt}</button>`;
        document.getElementById("step2").addEventListener("click", function() {
          storyPos = 9;
          displayStory(storyPos);});
        //to storypos = 9
      break;
    case 8:
       choicesID.innerHTML =
        `<button id="stepB" type="button">${storyContent[3].prompt}</button>`;
        document.getElementById("stepB").addEventListener("click", function() {
          storyPos = 10;
          displayStory(storyPos);});
        // to storyPos = 10
      break;
    case 9:
       choicesID.innerHTML =
        `<button id="1a2" type="button">${storyContent[5].prompt}</button>
        <button id="1b2" type="button">${storyContent[7].prompt}</button>`;
        document.getElementById("1a2").addEventListener("click", function() {
          storyPos = 11;
          displayStory(storyPos);});
        document.getElementById("1b2").addEventListener("click", function() {
          storyPos = 12;
          displayStory(storyPos);});
        //endings, storyPos 11, 12
      break;
    case 10:
       choicesID.innerHTML =
        `<button id="2a2" type="button">${storyContent[9].prompt}</button>
        <button id="2b2" type="button">${storyContent[11].prompt}</button>`;
        document.getElementById("2a2").addEventListener("click", function() {
          storyPos = 13;
          displayStory(storyPos);});
        document.getElementById("2b2").addEventListener("click", function() {
          storyPos = 14;
          displayStory(storyPos);});
        //endings, storyPos 13, 14
      break;
    case 11:
      choicesID.innerHTML =
        `<button id="end1" type="button">${storyContent[14].prompt}</button>
        <button id="end2" type="button">${storyContent[15].prompt}</button>`;
        document.getElementById("end1").addEventListener("click", function() {
          storyPos = 15;
          displayStory(storyPos);});
        document.getElementById("end2").addEventListener("click", function() {
          storyPos = 16;
          displayStory(storyPos);});
        //endings, storyPos 15, 16
      break;
    case 12:
       choicesID.innerHTML =
        `<button id="end3" type="button">${storyContent[16].prompt}</button>
        <button id="end4" type="button">${storyContent[17].prompt}</button>`;
        document.getElementById("end3").addEventListener("click", function() {
          storyPos = 17;
          displayStory(storyPos);});
        document.getElementById("end4").addEventListener("click", function() {
          storyPos = 18;
          displayStory(storyPos);});
        //endings, storyPos 17, 18
      break;
    case 13:
       choicesID.innerHTML =
        `<button id="end5" type="button">${storyContent[18].prompt}</button>
        <button id="end6" type="button">${storyContent[19].prompt}</button>`;
        document.getElementById("end5").addEventListener("click", function() {
          storyPos = 19;
          displayStory(storyPos);});
        document.getElementById("end6").addEventListener("click", function() {
          storyPos = 20;
          displayStory(storyPos);});
        //endings, storyPos 19, 20
      break;
    case 14:
       choicesID.innerHTML =
        `<button id="end7" type="button">${storyContent[20].prompt}</button>
        <button id="end8" type="button">${storyContent[21].prompt}</button>`;
        document.getElementById("end7").addEventListener("click", function() {
          storyPos = 21;
          displayStory(storyPos);});
        document.getElementById("end8").addEventListener("click", function() {
          storyPos = 22;
          displayStory(storyPos);});
        //endings, storyPos 21, 22
      break;
    case 15:
      displayStory(storyPos);
      break;
    case 16:
      displayStory(storyPos);
      break;
    case 17:
      displayStory(storyPos);
      break;
    case 18:
      displayStory(storyPos);
      break;
    case 19:
      displayStory(storyPos);
      break;
    case 20:
      displayStory(storyPos);
      break;
    case 21:
      displayStory(storyPos);
      break;
    case 22:
      displayStory(storyPos);
      break;
    case 23:
      displayStory(storyPos);
      break;
  }
};

//print story based on storyPos
const displayStory = storyPos => {
  switch(storyPos) {
    case 0:
      storyID.innerHTML = storyStart;
      provideChoices();
      break;
    case 1:
      storyID.innerHTML = storyContent[0].content;
      provideChoices();
      break;
    case 2:
      storyID.innerHTML = storyContent[2].content;
      provideChoices();
      break;
    case 3:
      storyID.innerHTML = storyContent[4].content;
      provideChoices();
      break;
    case 4:
      storyID.innerHTML = storyContent[6].content;
      provideChoices();
      break;
    case 5:
      storyID.innerHTML = storyContent[8].content;
      provideChoices();
      break;
    case 6:
      storyID.innerHTML = storyContent[10].content;
      provideChoices();
      break;
    case 7:
      storyID.innerHTML = storyContent[12].content;
      provideChoices();
      break;
    case 8:
      storyID.innerHTML = storyContent[13].content;
      provideChoices();
      break;
    case 9:
      storyID.innerHTML = storyContent[1].content;
      provideChoices();
      break;
    case 10:
      storyID.innerHTML = storyContent[3].content;
      provideChoices();
      break;
    case 11:
      storyID.innerHTML = storyContent[5].content;
      provideChoices();
      break;
    case 12:
      storyID.innerHTML = storyContent[7].content;
      provideChoices();
      break;
    case 13:
      storyID.innerHTML = storyContent[9].content;
      provideChoices();
      break;
    case 14:
      storyID.innerHTML = storyContent[11].content;
      provideChoices();
      break;
    case 15:
      storyID.innerHTML = storyContent[14].content;
      choicesID.innerHTML = ` `;
      break;
    case 16:
      storyID.innerHTML = storyContent[15].content;
      choicesID.innerHTML = ` `;
      break;
    case 17:
      storyID.innerHTML = storyContent[16].content;
      choicesID.innerHTML = ` `;
      break;
    case 18:
      storyID.innerHTML = storyContent[17].content;
      choicesID.innerHTML = ` `;
      break;
    case 19:
      storyID.innerHTML = storyContent[18].content;
      choicesID.innerHTML = ` `;
      break;
    case 20:
      storyID.innerHTML = storyContent[19].content;
      choicesID.innerHTML = ` `;
      break;
    case 21:
      storyID.innerHTML = storyContent[20].content;
      choicesID.innerHTML = ` `;
      break;
    case 22:
      storyID.innerHTML = storyContent[21].content;
      choicesID.innerHTML = ` `;
      break;
    case 23:
      storyID.innerHTML = storyContent[22].content;
      choicesID.innerHTML = ` `;
      break;
  }
}


// event listeners
window.onload = function () {
  choicesID = document.getElementById("choices");
  storyID = document.getElementById("story");

  //save input name to name variable for use in story
  document.getElementById("nameButton").addEventListener("click", function() {
    if(document.getElementById("nameInput").value > 0){
      return userName = document.getElementById("nameInput");
    };
    displayStory(storyPos);
    provideChoices();
  });
};
