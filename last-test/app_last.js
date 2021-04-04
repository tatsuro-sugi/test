const quiz = [
  {
    question: '10/1　20：00の身体所見から、患者にどのようなことが起きているか選択肢から選びなさい。',
    answers: [ '手術侵襲による疲労から、血圧が低下していると考えられる', '体温が上昇傾向であることから、感染の可能性が考えられる', '血圧・尿量の変化は、体液がサードスペースへ移行したことによる循環血液量の減少が考えられる', '血糖値が高いことから、実は既往に糖尿病があったと考えられる'],
    correct: 'ホメオスタシスとは、外部・内部環境が変化しても、生体環境を一定に保とうとするはたらきを指す'
  },{
    question: '10/1から10/2における身体所見の変化に就いて、適切なアセスメントをしている選択肢はどれか。',
    answers: [ '血管透過性の亢進により、体液がサードスペースへ移行し続けている', '体温が上昇傾向であることから、感染の可能性が考えられる', '体温の上昇は侵襲によるものと考えられ、現段階では感染といえない。', '尿量は依然として少なく、注意が必要である'],
    correct: '体温の上昇は侵襲によるものと考えられ、現段階では感染といえない。'
  },{
    question: '10月4日の佐藤さんの言動からどのような生体反応が起きていると推察されるか。選択肢から選びなさい。',
    answers: [ '糖尿病により、頻尿となっていることが考えられる', '感染している可能性が考えられる', 'リフィリングが起きていると考えられる', '内分泌反応が亢進していると考えられる'],
    correct: 'リフィリングが起きていると考えられる'
  },{
    question: '10月4日の時点では、佐藤さんはMoore分類でどの時期に相当するか。選択肢から適切な時期を選びなさい。',
    answers: [ '傷害期', '転換期', '同化期', '脂肪蓄積期'],
    correct: '転換期'
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

