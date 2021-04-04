const quiz = [
  {
    question: 'ホメオスタシス・侵襲に関する選択肢から、正しいものを1つ選びなさい',
    answers: [ 'ホメオスタシスとは、外部の環境に合わせて生体環境を変化させていくことを指す', 'ホメオスタシスとは、外部・内部環境が変化しても、生体環境を一定に保とうとするはたらきを指す', '侵襲とは、ホメオスタシスを破綻させる刺激のこと全てを指す', '薬剤は侵襲といえるが、不安は侵襲とはいえない'],
    correct: 'ホメオスタシスとは、外部・内部環境が変化しても、生体環境を一定に保とうとするはたらきを指す'
  }
];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;
  
  const buttonLen = $buttons.length;
  let btnIndex = 0;
  
  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
  } else {
    $window.alert('不正解!');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';
  
  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}

