const quiz = [
  {
    question: '侵襲を受けると活性化する生体防御機能を司る血球成分は次のうちどれか',
    answers: [ '赤血球', '白血球', '血小板', 'アルブミン'],
    correct: '白血球'
  },{
    question: '生体は侵襲を受けると、白血球をより活性化させようと反応が起きる。選択肢のうち正しいのはどれか？',
    answers: [ '血圧の上昇', '体温の上昇', '呼吸数の増加', '心拍数の増加'],
    correct: '体温の上昇'
  },{
    question: '感染や手術といった侵襲を受けると、（　　）の働きによって炎症反応は全身に広がる。（）に当てはまるのは次のうちどれか。',
    answers: [ 'アミノ酸', 'サイトカイン', 'アルブミン', 'シナプス'],
    correct: 'サイトカイン'
  },
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
