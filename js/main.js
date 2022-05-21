
const question = document.getElementById('question');
const japanese = document.getElementById('japanese');
const choice1 = document.getElementById('choice1');

const btn = document.getElementById('btn');
const result = document.getElementById('result');
const scoreLabel = document.querySelector('#result > p')
const close = document.getElementById('close');
const modal = document.getElementById('modal');
const modal2 = document.getElementById('modal2');
const modal3 = document.getElementById('modal3');
const okay = document.getElementById('okay');
let answer = document.getElementById('answer');
const isCorrected = document.getElementById('isCorrected');
const reading = document.getElementById('reading');
const reading2 = document.getElementById('reading2');
// const English = document.getElementById('English');
// const Japanese = document.getElementById('Japanese');

//modal.classList.remove('hidden');


const quizSet = [
  {q:`a slice ( )`,j:`薄い一切れの`,c:`of`,r:`a slice of`},
  {q:`( ) least`,j:`少なくとも`,c:`at`,r:`at least`},
  {q:`( ) the first time`,j:`初めて`,c:`for`,r:`for the first time`},
  {q:`a pair ( )`,j:`一組の`,c:`of`,r:`a pair of`},
  {q:`a glass ( )`,j:`コップ一杯の`,c:`of`,r:`a glass of`},
  {q:`( ) time`,j:`時間どおりに`,c:`on`,r:`on time`},
  {q:`go ( )`,j:`出かける`,c:`out`,r:`go out`},
  {q:`( ) last`,j:`ついに`,c:`at`,r:`at last`},
  {q:`instead ( )`,j:`~の代わりに`,c:`of`,r:`instead of`},
  {q:`turn ( )`,j:`(テレビなど)音量を下げる`,c:`down`,r:`turn down`},
  {q:`( ) once`,j:`すぐに`,c:`at`,r:`at once`},
  {q:`( ) a group`,j:`グループで`,c:`in`,r:`in a group`},
  {q:`write ( )`,j:`~を書きとめる`,c:`down`,r:`write down`},
  {q:`( ) weekends`,j:`週末に`,c:`on`,r:`on weekends`},
  {q:`give ( )`,j:`あきらめる`,c:`up`,r:`give up`},
  {q:`( ) time`,j:`間に合って`,c:`in`,r:`in time`},
  {q:`be worried ( )`,j:`~を心配している`,c:`about`,r:`be worried about`},
  {q:`try ( )`,j:`~を試着する`,c:`on`,r:`try on`},
  {q:`( ) the other hand`,j:`一方では`,c:`on`,r:`on the other hand`},
  {q:`get ( ) of`,j:`~から出る`,c:`out`,r:`get out of`},
  {q:`a cup ( )`,j:`コップ一杯の`,c:`of`,r:`a cup of`},
  {q:`get ( )`,j:`~に入る、~に乗りこむ`,c:`in`,r:`get in`},
  {q:`fill ( ) with`,j:`~でいっぱいになる`,c:`up`,r:`fill up with`},
  {q:`( ) front of`,j:`~の前で`,c:`in`,r:`in front of`},
  {q:`look ( )`,j:`~を調べる`,c:`up`,r:`look up`},
  {q:`get out ( )`,j:`~から出る`,c:`of`,r:`get out of`},
  {q:`be busy ( )`,j:`~で忙しい`,c:`with`,r:`be busy with`},
  {q:`arrive ( )`,j:`(国、都市) ~に到着する`,c:`in`,r:`arrive in`},
  {q:`take part ( )`,j:`~に参加する`,c:`in`,r:`take part in`},
  {q:`( ) a while`,j:`しばらくして`,c:`for`,r:`for a while`},
  {q:`go ( ) a walk`,j:`散歩に行く`,c:`for`,r:`go for a walk`},
  {q:`turn ( )`,j:`(明かりなど)つける`,c:`on`,r:`turn on`},
  {q:`( ) spite of`,j:`~にもかかわらず`,c:`in`,r:`in spite of`},
  {q:`stop ( )`,j:`立ち寄る`,c:`by`,r:`stop by`},
  {q:`( ) return`,j:`お返しに`,c:`in`,r:`in return`},
  {q:`get away ( )`,j:`~から離れる`,c:`from`,r:`get away from`},
  {q:`a piece ( )`,j:`一切れの`,c:`of`,r:`a piece of`},
  {q:`a lot ( )`,j:`多くの`,c:`of`,r:`a lot of`},
  {q:`be late ( )`,j:`~に遅れる`,c:`for`,r:`be late for`},
  {q:`hundreds ( )`,j:`何百もの~`,c:`of`,r:`hundreds of`},
  {q:`exchange A ( ) B`,j:`AをBと交換する`,c:`for`,r:`exchange A for B`},
  {q:`be ( ) a hurry`,j:`急いでいる`,c:`in`,r:`be in a hurry`},
  {q:`get ( )`,j:`乗る`,c:`on`,r:`get on`},
  {q:`stay ( ) late`,j:`夜更かしする`,c:`up`,r:`stay up late`},
  {q:`at the age ( )`,j:`~歳のときに`,c:`of`,r:`at the age of`},
  {q:`be afraid ( )`,j:`~を恐れる`,c:`of`,r:`be afraid of`},
  {q:`both ( )`,j:`両方とも`,c:`of`,r:`both of`},
  {q:`find ( )`,j:`~を見つけ出す、~を調べる`,c:`out`,r:`find out`},
  {q:`next ( )`,j:`~の隣に`,c:`to`,r:`next to`},
  {q:`look ( )`,j:`~を探す`,c:`for`,r:`look for`},
  {q:`take ( )`,j:`離陸する`,c:`off`,r:`take off`},
  {q:`be scared ( )`,j:`~を恐れている`,c:`of`,r:`be scared of`},
  {q:`be satisfied ( )`,j:`~に満足している`,c:`of`,r:`be satisfied of`},
  {q:`fill ( )`,j:`記入する`,c:`in`,r:`fill in`},
  {q:`be famous ( )`,j:`~で有名`,c:`for`,r:`be famous for`},
  {q:`first ( ) all`,j:`最初に`,c:`of`,r:`first of all`},
  {q:`be surprised ( )`,j:`~に驚く`,c:`at`,r:`be surprised at`},
  {q:`look forward ( )`,j:`~を楽しみに待つ`,c:`to`,r:`look forward to`},
  {q:`get ( )`,j:`降りる`,c:`off`,r:`get off`},
  {q:`laugh ( )`,j:`~を聞いて(見て)笑う`,c:`at`,r:`laugh at`},
  {q:`be ( ) trouble`,j:`困っている`,c:`in`,r:`be in trouble`},
  {q:`grow ( )`,j:`大人になる、成長する`,c:`up`,r:`grow up`},
  {q:`prepare ( )`,j:`~の準備をする`,c:`for`,r:`prepare for`},
  {q:`care ( )`,j:`~を気づかう`,c:`about`,r:`care about`},
  {q:`wait ( )`,j:`~を待つ`,c:`for`,r:`wait for`},
  {q:`cheer ( )`,j:`~を元気づける`,c:`up`,r:`cheer up`},
  {q:`be absent ( )`,j:`~を休んでいる`,c:`from`,r:`be absent from`},
  {q:`suffer ( )`,j:`~に苦しむ`,c:`from`,r:`suffer from`},
  {q:`( ) the end of`,j:`~の終わりに`,c:`at`,r:`at the end of`},
  {q:`most ( )`,j:`~のほとんど`,c:`of`,r:`most of`},
  {q:`take ( )`,j:`~を持ち出す`,c:`out`,r:`take out`},
  {q:`shout ( )`,j:`~に叫ぶ`,c:`at`,r:`shout at`},
  {q:`keep ( ) touch with`,j:`~と連絡を保つ`,c:`in`,r:`keep in touch with`},
  {q:`( ) a minute`,j:`少しの間`,c:`for`,r:`for a minute`},
  {q:`a couple ( )`,j:`2つ(2人)の~`,c:`of`,r:`a couple of`},
  {q:`( ) the way`,j:`ところで`,c:`by`,r:`by the way`},
  {q:`at the end ( )`,j:`~の終わりに`,c:`of`,r:`at the end of`},
  {q:`( ) first`,j:`最初は`,c:`at`,r:`at first`},
  {q:`keep in touch ( )`,j:`~と連絡を保つ`,c:`with`,r:`keep in touch with`},
  {q:`talk ( ) the phone`,j:`電話で話す`,c:`on`,r:`talk on the phone`},
  {q:`( ) foot`,j:`歩いて`,c:`on`,r:`on foot`},
  {q:`go ( ) a trip`,j:`旅行に出かける`,c:`on`,r:`go on a trip`},
  {q:`( ) fact`,j:`実は`,c:`in`,r:`in fact`},
  {q:`be different ( )`,j:`~と違う`,c:`from`,r:`be different from`},
   {q:`not ( ) all`,j:`まったく~ない`,c:`at`,r:`not at all`},
  {q:`( ) a long time`,j:`長い間`,c:`for`,r:`for a long time`},
  {q:`lots ( )`,j:`多くの`,c:`of`,r:`lots of`},
  {q:`be proud ( )`,j:`~に誇りを持つ`,c:`of`,r:`be proud of`},
  {q:`be covered ( )`,j:`~でおおわれている`,c:`with`,r:`be covered with`},
  {q:`( ) public`,j:`公に、人前で`,c:`in`,r:`in public`},
  {q:`( ) a while`,j:`しばらくの間`,c:`for`,r:`for a while`},
  {q:`a part ( )`,j:`~の一部`,c:`of`,r:`a part of`},
  {q:`( ) example`,j:`たとえば`,c:`for`,r:`for example`},
  {q:`turn ( )`,j:`(明かりなど)消す`,c:`off`,r:`turn off`},
  {q:`fill up ( )`,j:`~でいっぱいになる`,c:`with`,r:`fill up with`},
  {q:`in front ( )`,j:`~の前で`,c:`of`,r:`in front of`},
  {q:`be similar ( )`,j:`~に似ている`,c:`to`,r:`be similar to`},
  {q:`( ) the age of`,j:`~歳のときに`,c:`at`,r:`at the age of`},
  {q:`belong ( )`,j:`~に属する`,c:`to`,r:`belong to`},
  {q:`arrive( )`,j:`(特定された場所) ~に到着する`,c:`at`,r:`arriveat`},
  {q:`clean ( )`,j:`~をきれいに片づける`,c:`up`,r:`clean up`},
  {q:`be pleased ( ) do`,j:`~してうれしい`,c:`to`,r:`be pleased to do`},
  {q:`be fond ( )`,j:`~が好きだ、~を好む`,c:`of`,r:`be fond of`},
  {q:`depend ( )`,j:`~次第`,c:`on`,r:`depend on`},
  {q:`used ( ) do`,j:`以前はよく~した`,c:`to`,r:`used to do`},
  {q:`be sick ( ) bed`,j:`病気で寝ている`,c:`in`,r:`be sick in bed`},
  {q:`one ( ) the A`,j:`Aで最も~な1つ`,c:`of`,r:`one of the A`},
  {q:`help ( )`,j:`人の~を手伝う`,c:`with`,r:`help with`},
  {q:`because ( )`,j:`~のために`,c:`of`,r:`because of`},
  {q:`be filled ( )`,j:`~でいっぱいである`,c:`with`,r:`be filled with`},
  {q:`fill ( )`,j:`記入する`,c:`0`,r:`fill `},
  {q:`be close ( )`,j:`~に近い`,c:`to`,r:`be close to`},
  {q:`( ) a time`,j:`一度に`,c:`at`,r:`at a time`},
  {q:`in spite ( )`,j:`~にもかかわらず`,c:`of`,r:`in spite of`},
  {q:`had better ( )`,j:`~した方がよい`,c:`to`,r:`had better to`},
  {q:`be familiar ( )`,j:`~をよく知っている`,c:`with`,r:`be familiar with`},
  {q:`stand ( )`,j:`~を表す`,c:`for`,r:`stand for`},
  {q:`look ( )`,j:`~の世話をする`,c:`after`,r:`look after`},
  {q:`shake hands ( )`,j:`~と握手する`,c:`with`,r:`shake hands with`},
  {q:`a slice ( )`,j:`薄い一切れの`,c:`of`,r:`a slice of`},
];

const quizAns = [
'at','in','on','for','of','with','by','from','up','out','down',
'after','about','off',
];

function butotnClick(){location.reload();}
let button = document.getElementById('reset');
button.onclick = butotnClick;

let form = document.forms[0];
let selectbox = form.selectbox;

selectbox.addEventListener('change', ()=> {
 // console.log(selectbox.value);
}, false);

let a = 0;
let max = 100;
let e = 0;let f = 0;let g = 0;
let h = 0;

selectbox.onchange = function(){
if(selectbox.value === "1-10"){
  function change(){[a, h, e,f,g,max]=[0,8,10,10,10,80 ]}
  change();
  Quizset();
  }
else if(selectbox.value === "11-20"){
  function change(){[a, h, e,f,g,max]=[10,18,20,20,20,90 ]}
  change();
  Quizset();
  }
else if(selectbox.value === "21-30"){
  function change(){[a, h, e,f,g,max]=[20,28,30,30,30,100 ]}
  change();
  Quizset();
  }
else if(selectbox.value === "31-40"){
  function change(){[a, h, e,f,g,max]=[30,38,40,40,40,120 ]}
  change();
  Quizset();
  }
else if(selectbox.value === "41-50"){
  function change(){[a, h, e,f,g,max]=[40,48,50,50,50,130 ]}
  change();
  Quizset();
  }
else if(selectbox.value === "51-60"){
  function change(){[a, h, e,f,g,max]=[50,58,60,60,60,140 ]}
  change();
  Quizset();
  }
else if(selectbox.value === "61-70"){
  function change(){[a, h, e,f,g,max]=[60,68,70,70,70,150 ]}
  change();
  Quizset();
  }
else if(selectbox.value === "71-80"){
  function change(){[a, h, e,f,g,max]=[70,78,0,0,0,69 ]}
  change();
  Quizset();
  }
else if(selectbox.value === "81-90"){
  function change(){[a, h, e,f,g,max]=[80,88,0,0,0,69 ]}
  change();
  Quizset();
  }
else if(selectbox.value === "91-100"){
  function change(){[a, h, e,f,g,max]=[90,98,0,0,0,69 ]}
  change();
  Quizset();
  }
else if(selectbox.value === "101-110"){
  function change(){[a, h, e,f,g,max]=[100,108,0,0,0,69 ]}
  change();
  Quizset();
  }
  else{
    location.reload();
  }
 
 // Quizset();


  function Quizset () {



    choice1.removeEventListener('click',event);
    // const b = Math.floor(Math.random() * (max - e)) + e ;
    // let c = Math.floor(Math.random() * (max - f)) + f ;
    // let d = Math.floor(Math.random() * (max - g)) + g ;
    
 Qnum.textContent = `No.${a + 1}`;
  question.textContent = quizSet[a].q;
  japanese.textContent = quizSet[a].j;
  
  reading.textContent = quizSet[a].r;
  //pronoun.textContent = quizSet[r].q;

    while(choice1.firstChild){
  choice1.removeChild(choice1.firstChild);
  }
  


// for(let i = 0 ; i < quizAns.length ; i++){
//  let item = document.createElement('li');
//   const ul = document.querySelector('ul');
//   item.textContent = quizAns[i];
//  ul.appendChild(item);
// }

let item = document.createElement('li');
const ul = document.querySelector('ul');
  item.textContent = quizSet[a].c;
 ul.appendChild(item);


if( quizSet[a].c === "at" ){
  let item0 = document.createElement('li');
  const ul0 = document.querySelector('ul');
    item0.textContent = quizAns[1];
   ul.appendChild(item0);
 let item1 = document.createElement('li');
 const ul1 = document.querySelector('ul');
   item1.textContent = quizAns[2];
  ul.appendChild(item1);
 let item2 = document.createElement('li');
 const ul2 = document.querySelector('ul');
   item2.textContent = quizAns[3];
  ul.appendChild(item2);
 let item3 = document.createElement('li');
 const ul3 = document.querySelector('ul');
   item3.textContent = quizAns[4];
  ul.appendChild(item3);
 let item4 = document.createElement('li');
 const ul4 = document.querySelector('ul');
   item4.textContent = quizAns[5];
  ul.appendChild(item4);
 let item5 = document.createElement('li');
 const ul5 = document.querySelector('ul');
   item5.textContent = quizAns[6];
  ul.appendChild(item5);
 let item6 = document.createElement('li');
 const ul6 = document.querySelector('ul');
   item6.textContent = quizAns[7];
  ul.appendChild(item6);
 let item7 = document.createElement('li');
 const ul7 = document.querySelector('ul');
   item7.textContent = quizAns[8];
  ul.appendChild(item7);

function shuffle() {
  
    const x = Math.floor(Math.random() * 8 + 1) ;
    //console.log(x);
    

console.log(x);

    if(x == 1){ 
      // ul.insertBefore(item7,item);
      ul.insertBefore(item5,item);
      ul.insertBefore(item4,item);
      ul.insertBefore(item3,item);
      ul.insertBefore(item2,item);
      ul.insertBefore(item0,item);
    }else if(x == 2){
      ul.insertBefore(item4,item);
      ul.insertBefore(item7,item);
      ul.insertBefore(item2,item);
      ul.insertBefore(item0,item);
      ul.insertBefore(item1,item);
      ul.insertBefore(item3,item);
      ul.insertBefore(item5,item);
      ul.insertBefore(item6,item);
  
    }else if(x == 3){
      ul.insertBefore(item4,item);
      ul.insertBefore(item3,item);  
      ul.insertBefore(item7,item);  
      ul.insertBefore(item1,item);  
      ul.insertBefore(item2,item);  
      ul.insertBefore(item0,item);  
    }else if(x == 4){
     ul.insertBefore(item3,item);
     ul.insertBefore(item5,item);  
     ul.insertBefore(item6,item);  
     ul.insertBefore(item7,item);  
     ul.insertBefore(item0,item);  
    }
    else if(x == 5){
     ul.insertBefore(item5,item);
     ul.insertBefore(item0,item);  
     ul.insertBefore(item4,item);  
     ul.insertBefore(item1,item);  
    }
    else if(x == 6){
     ul.insertBefore(item7,item);
     ul.insertBefore(item4,item);  
     ul.insertBefore(item5,item);  
    }
    else if(x == 7){
     ul.insertBefore(item3,item);
     ul.insertBefore(item2,item);  
    }
    else{
      ul.insertBefore(item3,item2);
    }

  }
  shuffle();
}

else if( quizSet[a].c === "in" ){
  let item0 = document.createElement('li');
  const ul0 = document.querySelector('ul');
    item0.textContent = quizAns[0];
   ul.appendChild(item0);
 let item1 = document.createElement('li');
 const ul1 = document.querySelector('ul');
   item1.textContent = quizAns[2];
  ul.appendChild(item1);
 let item2 = document.createElement('li');
 const ul2 = document.querySelector('ul');
   item2.textContent = quizAns[3];
  ul.appendChild(item2);
 let item3 = document.createElement('li');
 const ul3 = document.querySelector('ul');
   item3.textContent = quizAns[4];
  ul.appendChild(item3);
 let item4 = document.createElement('li');
 const ul4 = document.querySelector('ul');
   item4.textContent = quizAns[5];
  ul.appendChild(item4);
 let item5 = document.createElement('li');
 const ul5 = document.querySelector('ul');
   item5.textContent = quizAns[6];
  ul.appendChild(item5);
 let item6 = document.createElement('li');
 const ul6 = document.querySelector('ul');
   item6.textContent = quizAns[7];
  ul.appendChild(item6);
 let item7 = document.createElement('li');
 const ul7 = document.querySelector('ul');
   item7.textContent = quizAns[8];
  ul.appendChild(item7);
  function shuffle() {
  
    const x = Math.floor(Math.random() * 8 + 1) ;
    //console.log(x);
    

console.log(x);

    if(x == 1){ 
      // ul.insertBefore(item7,item);
      ul.insertBefore(item5,item);
      ul.insertBefore(item4,item);
      ul.insertBefore(item3,item);
      ul.insertBefore(item2,item);
      ul.insertBefore(item0,item);
    }else if(x == 2){
      ul.insertBefore(item4,item);
      ul.insertBefore(item7,item);
      ul.insertBefore(item2,item);
      ul.insertBefore(item0,item);
      ul.insertBefore(item1,item);
      ul.insertBefore(item3,item);
      ul.insertBefore(item5,item);
      ul.insertBefore(item6,item);
  
    }else if(x == 3){
      ul.insertBefore(item4,item);
      ul.insertBefore(item3,item);  
      ul.insertBefore(item7,item);  
      ul.insertBefore(item1,item);  
      ul.insertBefore(item2,item);  
      ul.insertBefore(item0,item);  
    }else if(x == 4){
     ul.insertBefore(item3,item);
     ul.insertBefore(item5,item);  
     ul.insertBefore(item6,item);  
     ul.insertBefore(item7,item);  
     ul.insertBefore(item0,item);  
    }
    else if(x == 5){
     ul.insertBefore(item5,item);
     ul.insertBefore(item0,item);  
     ul.insertBefore(item4,item);  
     ul.insertBefore(item1,item);  
    }
    else if(x == 6){
     ul.insertBefore(item7,item);
     ul.insertBefore(item4,item);  
     ul.insertBefore(item5,item);  
    }
    else if(x == 7){
     ul.insertBefore(item3,item);
     ul.insertBefore(item2,item);  
    }
    else{
      ul.insertBefore(item3,item2);
    }

  }
  shuffle();
}
else if( quizSet[a].c === "on" ){
  let item0 = document.createElement('li');
  const ul0 = document.querySelector('ul');
    item0.textContent = quizAns[1];
   ul.appendChild(item0);
 let item1 = document.createElement('li');
 const ul1 = document.querySelector('ul');
   item1.textContent = quizAns[0];
  ul.appendChild(item1);
 let item2 = document.createElement('li');
 const ul2 = document.querySelector('ul');
   item2.textContent = quizAns[3];
  ul.appendChild(item2);
 let item3 = document.createElement('li');
 const ul3 = document.querySelector('ul');
   item3.textContent = quizAns[4];
  ul.appendChild(item3);
 let item4 = document.createElement('li');
 const ul4 = document.querySelector('ul');
   item4.textContent = quizAns[5];
  ul.appendChild(item4);
 let item5 = document.createElement('li');
 const ul5 = document.querySelector('ul');
   item5.textContent = quizAns[6];
  ul.appendChild(item5);
 let item6 = document.createElement('li');
 const ul6 = document.querySelector('ul');
   item6.textContent = quizAns[7];
  ul.appendChild(item6);
 let item7 = document.createElement('li');
 const ul7 = document.querySelector('ul');
   item7.textContent = quizAns[8];
  ul.appendChild(item7);
  function shuffle() {
  
    const x = Math.floor(Math.random() * 8 + 1) ;
    //console.log(x);
    

console.log(x);

    if(x == 1){ 
      // ul.insertBefore(item7,item);
      ul.insertBefore(item5,item);
      ul.insertBefore(item4,item);
      ul.insertBefore(item3,item);
      ul.insertBefore(item2,item);
      ul.insertBefore(item0,item);
    }else if(x == 2){
      ul.insertBefore(item4,item);
      ul.insertBefore(item7,item);
      ul.insertBefore(item2,item);
      ul.insertBefore(item0,item);
      ul.insertBefore(item1,item);
      ul.insertBefore(item3,item);
      ul.insertBefore(item5,item);
      ul.insertBefore(item6,item);
  
    }else if(x == 3){
      ul.insertBefore(item4,item);
      ul.insertBefore(item3,item);  
      ul.insertBefore(item7,item);  
      ul.insertBefore(item1,item);  
      ul.insertBefore(item2,item);  
      ul.insertBefore(item0,item);  
    }else if(x == 4){
     ul.insertBefore(item3,item);
     ul.insertBefore(item5,item);  
     ul.insertBefore(item6,item);  
     ul.insertBefore(item7,item);  
     ul.insertBefore(item0,item);  
    }
    else if(x == 5){
     ul.insertBefore(item5,item);
     ul.insertBefore(item0,item);  
     ul.insertBefore(item4,item);  
     ul.insertBefore(item1,item);  
    }
    else if(x == 6){
     ul.insertBefore(item7,item);
     ul.insertBefore(item4,item);  
     ul.insertBefore(item5,item);  
    }
    else if(x == 7){
     ul.insertBefore(item3,item);
     ul.insertBefore(item2,item);  
    }
    else{
      ul.insertBefore(item3,item2);
    }

  }
  shuffle();
}
else if( quizSet[a].c === "for" ){
  let item0 = document.createElement('li');
  const ul0 = document.querySelector('ul');
    item0.textContent = quizAns[1];
   ul.appendChild(item0);
 let item1 = document.createElement('li');
 const ul1 = document.querySelector('ul');
   item1.textContent = quizAns[2];
  ul.appendChild(item1);
 let item2 = document.createElement('li');
 const ul2 = document.querySelector('ul');
   item2.textContent = quizAns[0];
  ul.appendChild(item2);
 let item3 = document.createElement('li');
 const ul3 = document.querySelector('ul');
   item3.textContent = quizAns[4];
  ul.appendChild(item3);
 let item4 = document.createElement('li');
 const ul4 = document.querySelector('ul');
   item4.textContent = quizAns[5];
  ul.appendChild(item4);
 let item5 = document.createElement('li');
 const ul5 = document.querySelector('ul');
   item5.textContent = quizAns[6];
  ul.appendChild(item5);
 let item6 = document.createElement('li');
 const ul6 = document.querySelector('ul');
   item6.textContent = quizAns[7];
  ul.appendChild(item6);
 let item7 = document.createElement('li');
 const ul7 = document.querySelector('ul');
   item7.textContent = quizAns[8];
  ul.appendChild(item7);
  function shuffle() {
  
    const x = Math.floor(Math.random() * 8 + 1) ;
    //console.log(x);
    

console.log(x);

    if(x == 1){ 
      // ul.insertBefore(item7,item);
      ul.insertBefore(item5,item);
      ul.insertBefore(item4,item);
      ul.insertBefore(item3,item);
      ul.insertBefore(item2,item);
      ul.insertBefore(item0,item);
    }else if(x == 2){
      ul.insertBefore(item4,item);
      ul.insertBefore(item7,item);
      ul.insertBefore(item2,item);
      ul.insertBefore(item0,item);
      ul.insertBefore(item1,item);
      ul.insertBefore(item3,item);
      ul.insertBefore(item5,item);
      ul.insertBefore(item6,item);
  
    }else if(x == 3){
      ul.insertBefore(item4,item);
      ul.insertBefore(item3,item);  
      ul.insertBefore(item7,item);  
      ul.insertBefore(item1,item);  
      ul.insertBefore(item2,item);  
      ul.insertBefore(item0,item);  
    }else if(x == 4){
     ul.insertBefore(item3,item);
     ul.insertBefore(item5,item);  
     ul.insertBefore(item6,item);  
     ul.insertBefore(item7,item);  
     ul.insertBefore(item0,item);  
    }
    else if(x == 5){
     ul.insertBefore(item5,item);
     ul.insertBefore(item0,item);  
     ul.insertBefore(item4,item);  
     ul.insertBefore(item1,item);  
    }
    else if(x == 6){
     ul.insertBefore(item7,item);
     ul.insertBefore(item4,item);  
     ul.insertBefore(item5,item);  
    }
    else if(x == 7){
     ul.insertBefore(item3,item);
     ul.insertBefore(item2,item);  
    }
    else{
      ul.insertBefore(item3,item2);
    }

  }
  shuffle();
}
else if( quizSet[a].c === "of" ){
  let item0 = document.createElement('li');
  const ul0 = document.querySelector('ul');
    item0.textContent = quizAns[1];
   ul.appendChild(item0);
 let item1 = document.createElement('li');
 const ul1 = document.querySelector('ul');
   item1.textContent = quizAns[2];
  ul.appendChild(item1);
 let item2 = document.createElement('li');
 const ul2 = document.querySelector('ul');
   item2.textContent = quizAns[3];
  ul.appendChild(item2);
 let item3 = document.createElement('li');
 const ul3 = document.querySelector('ul');
   item3.textContent = quizAns[0];
  ul.appendChild(item3);
 let item4 = document.createElement('li');
 const ul4 = document.querySelector('ul');
   item4.textContent = quizAns[5];
  ul.appendChild(item4);
 let item5 = document.createElement('li');
 const ul5 = document.querySelector('ul');
   item5.textContent = quizAns[6];
  ul.appendChild(item5);
 let item6 = document.createElement('li');
 const ul6 = document.querySelector('ul');
   item6.textContent = quizAns[7];
  ul.appendChild(item6);
 let item7 = document.createElement('li');
 const ul7 = document.querySelector('ul');
   item7.textContent = quizAns[8];
  ul.appendChild(item7);
  function shuffle() {
  
    const x = Math.floor(Math.random() * 8 + 1) ;
    //console.log(x);
    

console.log(x);

    if(x == 1){ 
      // ul.insertBefore(item7,item);
      ul.insertBefore(item5,item);
      ul.insertBefore(item4,item);
      ul.insertBefore(item3,item);
      ul.insertBefore(item2,item);
      ul.insertBefore(item0,item);
    }else if(x == 2){
      ul.insertBefore(item4,item);
      ul.insertBefore(item7,item);
      ul.insertBefore(item2,item);
      ul.insertBefore(item0,item);
      ul.insertBefore(item1,item);
      ul.insertBefore(item3,item);
      ul.insertBefore(item5,item);
      ul.insertBefore(item6,item);
  
    }else if(x == 3){
      ul.insertBefore(item4,item);
      ul.insertBefore(item3,item);  
      ul.insertBefore(item7,item);  
      ul.insertBefore(item1,item);  
      ul.insertBefore(item2,item);  
      ul.insertBefore(item0,item);  
    }else if(x == 4){
     ul.insertBefore(item3,item);
     ul.insertBefore(item5,item);  
     ul.insertBefore(item6,item);  
     ul.insertBefore(item7,item);  
     ul.insertBefore(item0,item);  
    }
    else if(x == 5){
     ul.insertBefore(item5,item);
     ul.insertBefore(item0,item);  
     ul.insertBefore(item4,item);  
     ul.insertBefore(item1,item);  
    }
    else if(x == 6){
     ul.insertBefore(item7,item);
     ul.insertBefore(item4,item);  
     ul.insertBefore(item5,item);  
    }
    else if(x == 7){
     ul.insertBefore(item3,item);
     ul.insertBefore(item2,item);  
    }
    else{
      ul.insertBefore(item3,item2);
    }

  }
  shuffle();
}
else if( quizSet[a].c === "with" )
{
  let item0 = document.createElement('li');
  const ul0 = document.querySelector('ul');
    item0.textContent = quizAns[1];
   ul.appendChild(item0);
 let item1 = document.createElement('li');
 const ul1 = document.querySelector('ul');
   item1.textContent = quizAns[2];
  ul.appendChild(item1);
 let item2 = document.createElement('li');
 const ul2 = document.querySelector('ul');
   item2.textContent = quizAns[3];
  ul.appendChild(item2);
 let item3 = document.createElement('li');
 const ul3 = document.querySelector('ul');
   item3.textContent = quizAns[4];
  ul.appendChild(item3);
 let item4 = document.createElement('li');
 const ul4 = document.querySelector('ul');
   item4.textContent = quizAns[0];
  ul.appendChild(item4);
 let item5 = document.createElement('li');
 const ul5 = document.querySelector('ul');
   item5.textContent = quizAns[6];
  ul.appendChild(item5);
 let item6 = document.createElement('li');
 const ul6 = document.querySelector('ul');
   item6.textContent = quizAns[7];
  ul.appendChild(item6);
 let item7 = document.createElement('li');
 const ul7 = document.querySelector('ul');
   item7.textContent = quizAns[8];
  ul.appendChild(item7);
  function shuffle() {
  
    const x = Math.floor(Math.random() * 8 + 1) ;
    //console.log(x);
    

console.log(x);

    if(x == 1){ 
      // ul.insertBefore(item7,item);
      ul.insertBefore(item5,item);
      ul.insertBefore(item4,item);
      ul.insertBefore(item3,item);
      ul.insertBefore(item2,item);
      ul.insertBefore(item0,item);
    }else if(x == 2){
      ul.insertBefore(item4,item);
      ul.insertBefore(item7,item);
      ul.insertBefore(item2,item);
      ul.insertBefore(item0,item);
      ul.insertBefore(item1,item);
      ul.insertBefore(item3,item);
      ul.insertBefore(item5,item);
      ul.insertBefore(item6,item);
  
    }else if(x == 3){
      ul.insertBefore(item4,item);
      ul.insertBefore(item3,item);  
      ul.insertBefore(item7,item);  
      ul.insertBefore(item1,item);  
      ul.insertBefore(item2,item);  
      ul.insertBefore(item0,item);  
    }else if(x == 4){
     ul.insertBefore(item3,item);
     ul.insertBefore(item5,item);  
     ul.insertBefore(item6,item);  
     ul.insertBefore(item7,item);  
     ul.insertBefore(item0,item);  
    }
    else if(x == 5){
     ul.insertBefore(item5,item);
     ul.insertBefore(item0,item);  
     ul.insertBefore(item4,item);  
     ul.insertBefore(item1,item);  
    }
    else if(x == 6){
     ul.insertBefore(item7,item);
     ul.insertBefore(item4,item);  
     ul.insertBefore(item5,item);  
    }
    else if(x == 7){
     ul.insertBefore(item3,item);
     ul.insertBefore(item2,item);  
    }
    else{
      ul.insertBefore(item3,item2);
    }

  }
  shuffle();
}
else if( quizSet[a].c === "by" ){
  let item0 = document.createElement('li');
  const ul0 = document.querySelector('ul');
    item0.textContent = quizAns[1];
   ul.appendChild(item0);
 let item1 = document.createElement('li');
 const ul1 = document.querySelector('ul');
   item1.textContent = quizAns[2];
  ul.appendChild(item1);
 let item2 = document.createElement('li');
 const ul2 = document.querySelector('ul');
   item2.textContent = quizAns[3];
  ul.appendChild(item2);
 let item3 = document.createElement('li');
 const ul3 = document.querySelector('ul');
   item3.textContent = quizAns[4];
  ul.appendChild(item3);
 let item4 = document.createElement('li');
 const ul4 = document.querySelector('ul');
   item4.textContent = quizAns[5];
  ul.appendChild(item4);
 let item5 = document.createElement('li');
 const ul5 = document.querySelector('ul');
   item5.textContent = quizAns[0];
  ul.appendChild(item5);
 let item6 = document.createElement('li');
 const ul6 = document.querySelector('ul');
   item6.textContent = quizAns[7];
  ul.appendChild(item6);
 let item7 = document.createElement('li');
 const ul7 = document.querySelector('ul');
   item7.textContent = quizAns[8];
  ul.appendChild(item7);
  function shuffle() {
  
    const x = Math.floor(Math.random() * 8 + 1) ;
    //console.log(x);
    

console.log(x);

    if(x == 1){ 
      // ul.insertBefore(item7,item);
      ul.insertBefore(item5,item);
      ul.insertBefore(item4,item);
      ul.insertBefore(item3,item);
      ul.insertBefore(item2,item);
      ul.insertBefore(item0,item);
    }else if(x == 2){
      ul.insertBefore(item4,item);
      ul.insertBefore(item7,item);
      ul.insertBefore(item2,item);
      ul.insertBefore(item0,item);
      ul.insertBefore(item1,item);
      ul.insertBefore(item3,item);
      ul.insertBefore(item5,item);
      ul.insertBefore(item6,item);
  
    }else if(x == 3){
      ul.insertBefore(item4,item);
      ul.insertBefore(item3,item);  
      ul.insertBefore(item7,item);  
      ul.insertBefore(item1,item);  
      ul.insertBefore(item2,item);  
      ul.insertBefore(item0,item);  
    }else if(x == 4){
     ul.insertBefore(item3,item);
     ul.insertBefore(item5,item);  
     ul.insertBefore(item6,item);  
     ul.insertBefore(item7,item);  
     ul.insertBefore(item0,item);  
    }
    else if(x == 5){
     ul.insertBefore(item5,item);
     ul.insertBefore(item0,item);  
     ul.insertBefore(item4,item);  
     ul.insertBefore(item1,item);  
    }
    else if(x == 6){
     ul.insertBefore(item7,item);
     ul.insertBefore(item4,item);  
     ul.insertBefore(item5,item);  
    }
    else if(x == 7){
     ul.insertBefore(item3,item);
     ul.insertBefore(item2,item);  
    }
    else{
      ul.insertBefore(item3,item2);
    }

  }
  shuffle();
}
else if( quizSet[a].c === "about" ){
  let item0 = document.createElement('li');
  const ul0 = document.querySelector('ul');
    item0.textContent = quizAns[1];
   ul.appendChild(item0);
 let item1 = document.createElement('li');
 const ul1 = document.querySelector('ul');
   item1.textContent = quizAns[2];
  ul.appendChild(item1);
 let item2 = document.createElement('li');
 const ul2 = document.querySelector('ul');
   item2.textContent = quizAns[3];
  ul.appendChild(item2);
 let item3 = document.createElement('li');
 const ul3 = document.querySelector('ul');
   item3.textContent = quizAns[4];
  ul.appendChild(item3);
 let item4 = document.createElement('li');
 const ul4 = document.querySelector('ul');
   item4.textContent = quizAns[5];
  ul.appendChild(item4);
 let item5 = document.createElement('li');
 const ul5 = document.querySelector('ul');
   item5.textContent = quizAns[6];
  ul.appendChild(item5);
 let item6 = document.createElement('li');
 const ul6 = document.querySelector('ul');
   item6.textContent = quizAns[0];
  ul.appendChild(item6);
 let item7 = document.createElement('li');
 const ul7 = document.querySelector('ul');
   item7.textContent = quizAns[8];
  ul.appendChild(item7);
  function shuffle() {
  
    const x = Math.floor(Math.random() * 8 + 1) ;
    //console.log(x);
    

console.log(x);

    if(x == 1){ 
      // ul.insertBefore(item7,item);
      ul.insertBefore(item5,item);
      ul.insertBefore(item4,item);
      ul.insertBefore(item3,item);
      ul.insertBefore(item2,item);
      ul.insertBefore(item0,item);
    }else if(x == 2){
      ul.insertBefore(item4,item);
      ul.insertBefore(item7,item);
      ul.insertBefore(item2,item);
      ul.insertBefore(item0,item);
      ul.insertBefore(item1,item);
      ul.insertBefore(item3,item);
      ul.insertBefore(item5,item);
      ul.insertBefore(item6,item);
  
    }else if(x == 3){
      ul.insertBefore(item4,item);
      ul.insertBefore(item3,item);  
      ul.insertBefore(item7,item);  
      ul.insertBefore(item1,item);  
      ul.insertBefore(item2,item);  
      ul.insertBefore(item0,item);  
    }else if(x == 4){
     ul.insertBefore(item3,item);
     ul.insertBefore(item5,item);  
     ul.insertBefore(item6,item);  
     ul.insertBefore(item7,item);  
     ul.insertBefore(item0,item);  
    }
    else if(x == 5){
     ul.insertBefore(item5,item);
     ul.insertBefore(item0,item);  
     ul.insertBefore(item4,item);  
     ul.insertBefore(item1,item);  
    }
    else if(x == 6){
     ul.insertBefore(item7,item);
     ul.insertBefore(item4,item);  
     ul.insertBefore(item5,item);  
    }
    else if(x == 7){
     ul.insertBefore(item3,item);
     ul.insertBefore(item2,item);  
    }
    else{
      ul.insertBefore(item3,item2);
    }

  }
  shuffle();
}

else if( quizSet[a].c === "up" ){
  let item0 = document.createElement('li');
  const ul0 = document.querySelector('ul');
    item0.textContent = quizAns[1];
   ul.appendChild(item0);
 let item1 = document.createElement('li');
 const ul1 = document.querySelector('ul');
   item1.textContent = quizAns[2];
  ul.appendChild(item1);
 let item2 = document.createElement('li');
 const ul2 = document.querySelector('ul');
   item2.textContent = quizAns[3];
  ul.appendChild(item2);
 let item3 = document.createElement('li');
 const ul3 = document.querySelector('ul');
   item3.textContent = quizAns[4];
  ul.appendChild(item3);
 let item4 = document.createElement('li');
 const ul4 = document.querySelector('ul');
   item4.textContent = quizAns[5];
  ul.appendChild(item4);
 let item5 = document.createElement('li');
 const ul5 = document.querySelector('ul');
   item5.textContent = quizAns[6];
  ul.appendChild(item5);
 let item6 = document.createElement('li');
 const ul6 = document.querySelector('ul');
   item6.textContent = quizAns[7];
  ul.appendChild(item6);
 let item7 = document.createElement('li');
 const ul7 = document.querySelector('ul');
   item7.textContent = quizAns[0];
  ul.appendChild(item7);
  function shuffle() {
  
    const x = Math.floor(Math.random() * 8 + 1) ;
    //console.log(x);
    

console.log(x);

    if(x == 1){ 
      // ul.insertBefore(item7,item);
      ul.insertBefore(item5,item);
      ul.insertBefore(item4,item);
      ul.insertBefore(item3,item);
      ul.insertBefore(item2,item);
      ul.insertBefore(item0,item);
    }else if(x == 2){
      ul.insertBefore(item4,item);
      ul.insertBefore(item7,item);
      ul.insertBefore(item2,item);
      ul.insertBefore(item0,item);
      ul.insertBefore(item1,item);
      ul.insertBefore(item3,item);
      ul.insertBefore(item5,item);
      ul.insertBefore(item6,item);
  
    }else if(x == 3){
      ul.insertBefore(item4,item);
      ul.insertBefore(item3,item);  
      ul.insertBefore(item7,item);  
      ul.insertBefore(item1,item);  
      ul.insertBefore(item2,item);  
      ul.insertBefore(item0,item);  
    }else if(x == 4){
     ul.insertBefore(item3,item);
     ul.insertBefore(item5,item);  
     ul.insertBefore(item6,item);  
     ul.insertBefore(item7,item);  
     ul.insertBefore(item0,item);  
    }
    else if(x == 5){
     ul.insertBefore(item5,item);
     ul.insertBefore(item0,item);  
     ul.insertBefore(item4,item);  
     ul.insertBefore(item1,item);  
    }
    else if(x == 6){
     ul.insertBefore(item7,item);
     ul.insertBefore(item4,item);  
     ul.insertBefore(item5,item);  
    }
    else if(x == 7){
     ul.insertBefore(item3,item);
     ul.insertBefore(item2,item);  
    }
    else{
      ul.insertBefore(item3,item2);
    }

  }
  shuffle();

}
else if( quizSet[a].c === "out" )
{
  let item0 = document.createElement('li');
  const ul0 = document.querySelector('ul');
    item0.textContent = quizAns[1];
   ul.appendChild(item0);
 let item1 = document.createElement('li');
 const ul1 = document.querySelector('ul');
   item1.textContent = quizAns[2];
  ul.appendChild(item1);
 let item2 = document.createElement('li');
 const ul2 = document.querySelector('ul');
   item2.textContent = quizAns[3];
  ul.appendChild(item2);
 let item3 = document.createElement('li');
 const ul3 = document.querySelector('ul');
   item3.textContent = quizAns[4];
  ul.appendChild(item3);
 let item4 = document.createElement('li');
 const ul4 = document.querySelector('ul');
   item4.textContent = quizAns[5];
  ul.appendChild(item4);
 let item5 = document.createElement('li');
 const ul5 = document.querySelector('ul');
   item5.textContent = quizAns[6];
  ul.appendChild(item5);
 let item6 = document.createElement('li');
 const ul6 = document.querySelector('ul');
   item6.textContent = quizAns[7];
  ul.appendChild(item6);
 let item7 = document.createElement('li');
 const ul7 = document.querySelector('ul');
   item7.textContent = quizAns[8];
  ul.appendChild(item7);
  function shuffle() {
  
    const x = Math.floor(Math.random() * 8 + 1) ;
    //console.log(x);
    

console.log(x);

    if(x == 1){ 
      // ul.insertBefore(item7,item);
      ul.insertBefore(item5,item);
      ul.insertBefore(item4,item);
      ul.insertBefore(item3,item);
      ul.insertBefore(item2,item);
      ul.insertBefore(item0,item);
    }else if(x == 2){
      ul.insertBefore(item4,item);
      ul.insertBefore(item7,item);
      ul.insertBefore(item2,item);
      ul.insertBefore(item0,item);
      ul.insertBefore(item1,item);
      ul.insertBefore(item3,item);
      ul.insertBefore(item5,item);
      ul.insertBefore(item6,item);
  
    }else if(x == 3){
      ul.insertBefore(item4,item);
      ul.insertBefore(item3,item);  
      ul.insertBefore(item7,item);  
      ul.insertBefore(item1,item);  
      ul.insertBefore(item2,item);  
      ul.insertBefore(item0,item);  
    }else if(x == 4){
     ul.insertBefore(item3,item);
     ul.insertBefore(item5,item);  
     ul.insertBefore(item6,item);  
     ul.insertBefore(item7,item);  
     ul.insertBefore(item0,item);  
    }
    else if(x == 5){
     ul.insertBefore(item5,item);
     ul.insertBefore(item0,item);  
     ul.insertBefore(item4,item);  
     ul.insertBefore(item1,item);  
    }
    else if(x == 6){
     ul.insertBefore(item7,item);
     ul.insertBefore(item4,item);  
     ul.insertBefore(item5,item);  
    }
    else if(x == 7){
     ul.insertBefore(item3,item);
     ul.insertBefore(item2,item);  
    }
    else{
      ul.insertBefore(item3,item2);
    }

  }
  shuffle();

}
else if( quizSet[a].c === "down" )
{
  let item0 = document.createElement('li');
  const ul0 = document.querySelector('ul');
    item0.textContent = quizAns[1];
   ul.appendChild(item0);
 let item1 = document.createElement('li');
 const ul1 = document.querySelector('ul');
   item1.textContent = quizAns[2];
  ul.appendChild(item1);
 let item2 = document.createElement('li');
 const ul2 = document.querySelector('ul');
   item2.textContent = quizAns[3];
  ul.appendChild(item2);
 let item3 = document.createElement('li');
 const ul3 = document.querySelector('ul');
   item3.textContent = quizAns[4];
  ul.appendChild(item3);
 let item4 = document.createElement('li');
 const ul4 = document.querySelector('ul');
   item4.textContent = quizAns[5];
  ul.appendChild(item4);
 let item5 = document.createElement('li');
 const ul5 = document.querySelector('ul');
   item5.textContent = quizAns[6];
  ul.appendChild(item5);
 let item6 = document.createElement('li');
 const ul6 = document.querySelector('ul');
   item6.textContent = quizAns[7];
  ul.appendChild(item6);
 let item7 = document.createElement('li');
 const ul7 = document.querySelector('ul');
   item7.textContent = quizAns[8];
  ul.appendChild(item7);
  function shuffle() {
  
    const x = Math.floor(Math.random() * 8 + 1) ;
    //console.log(x);
    

console.log(x);

    if(x == 1){ 
      // ul.insertBefore(item7,item);
      ul.insertBefore(item5,item);
      ul.insertBefore(item4,item);
      ul.insertBefore(item3,item);
      ul.insertBefore(item2,item);
      ul.insertBefore(item0,item);
    }else if(x == 2){
      ul.insertBefore(item4,item);
      ul.insertBefore(item7,item);
      ul.insertBefore(item2,item);
      ul.insertBefore(item0,item);
      ul.insertBefore(item1,item);
      ul.insertBefore(item3,item);
      ul.insertBefore(item5,item);
      ul.insertBefore(item6,item);
  
    }else if(x == 3){
      ul.insertBefore(item4,item);
      ul.insertBefore(item3,item);  
      ul.insertBefore(item7,item);  
      ul.insertBefore(item1,item);  
      ul.insertBefore(item2,item);  
      ul.insertBefore(item0,item);  
    }else if(x == 4){
     ul.insertBefore(item3,item);
     ul.insertBefore(item5,item);  
     ul.insertBefore(item6,item);  
     ul.insertBefore(item7,item);  
     ul.insertBefore(item0,item);  
    }
    else if(x == 5){
     ul.insertBefore(item5,item);
     ul.insertBefore(item0,item);  
     ul.insertBefore(item4,item);  
     ul.insertBefore(item1,item);  
    }
    else if(x == 6){
     ul.insertBefore(item7,item);
     ul.insertBefore(item4,item);  
     ul.insertBefore(item5,item);  
    }
    else if(x == 7){
     ul.insertBefore(item3,item);
     ul.insertBefore(item2,item);  
    }
    else{
      ul.insertBefore(item3,item2);
    }

  }
  shuffle();

}
else if( quizSet[a].c === "after" ){
  let item0 = document.createElement('li');
  const ul0 = document.querySelector('ul');
    item0.textContent = quizAns[1];
   ul.appendChild(item0);
 let item1 = document.createElement('li');
 const ul1 = document.querySelector('ul');
   item1.textContent = quizAns[2];
  ul.appendChild(item1);
 let item2 = document.createElement('li');
 const ul2 = document.querySelector('ul');
   item2.textContent = quizAns[3];
  ul.appendChild(item2);
 let item3 = document.createElement('li');
 const ul3 = document.querySelector('ul');
   item3.textContent = quizAns[4];
  ul.appendChild(item3);
 let item4 = document.createElement('li');
 const ul4 = document.querySelector('ul');
   item4.textContent = quizAns[5];
  ul.appendChild(item4);
 let item5 = document.createElement('li');
 const ul5 = document.querySelector('ul');
   item5.textContent = quizAns[6];
  ul.appendChild(item5);
 let item6 = document.createElement('li');
 const ul6 = document.querySelector('ul');
   item6.textContent = quizAns[7];
  ul.appendChild(item6);
 let item7 = document.createElement('li');
 const ul7 = document.querySelector('ul');
   item7.textContent = quizAns[8];
  ul.appendChild(item7);
  function shuffle() {
  
    const x = Math.floor(Math.random() * 8 + 1) ;
    //console.log(x);
    

console.log(x);

    if(x == 1){ 
      // ul.insertBefore(item7,item);
      ul.insertBefore(item5,item);
      ul.insertBefore(item4,item);
      ul.insertBefore(item3,item);
      ul.insertBefore(item2,item);
      ul.insertBefore(item0,item);
    }else if(x == 2){
      ul.insertBefore(item4,item);
      ul.insertBefore(item7,item);
      ul.insertBefore(item2,item);
      ul.insertBefore(item0,item);
      ul.insertBefore(item1,item);
      ul.insertBefore(item3,item);
      ul.insertBefore(item5,item);
      ul.insertBefore(item6,item);
  
    }else if(x == 3){
      ul.insertBefore(item4,item);
      ul.insertBefore(item3,item);  
      ul.insertBefore(item7,item);  
      ul.insertBefore(item1,item);  
      ul.insertBefore(item2,item);  
      ul.insertBefore(item0,item);  
    }else if(x == 4){
     ul.insertBefore(item3,item);
     ul.insertBefore(item5,item);  
     ul.insertBefore(item6,item);  
     ul.insertBefore(item7,item);  
     ul.insertBefore(item0,item);  
    }
    else if(x == 5){
     ul.insertBefore(item5,item);
     ul.insertBefore(item0,item);  
     ul.insertBefore(item4,item);  
     ul.insertBefore(item1,item);  
    }
    else if(x == 6){
     ul.insertBefore(item7,item);
     ul.insertBefore(item4,item);  
     ul.insertBefore(item5,item);  
    }
    else if(x == 7){
     ul.insertBefore(item3,item);
     ul.insertBefore(item2,item);  
    }
    else{
      ul.insertBefore(item3,item2);
    }

  }
  shuffle();

}
else if( quizSet[a].c === "from" ){
  let item0 = document.createElement('li');
  const ul0 = document.querySelector('ul');
    item0.textContent = quizAns[1];
   ul.appendChild(item0);
 let item1 = document.createElement('li');
 const ul1 = document.querySelector('ul');
   item1.textContent = quizAns[2];
  ul.appendChild(item1);
 let item2 = document.createElement('li');
 const ul2 = document.querySelector('ul');
   item2.textContent = quizAns[3];
  ul.appendChild(item2);
 let item3 = document.createElement('li');
 const ul3 = document.querySelector('ul');
   item3.textContent = quizAns[4];
  ul.appendChild(item3);
 let item4 = document.createElement('li');
 const ul4 = document.querySelector('ul');
   item4.textContent = quizAns[5];
  ul.appendChild(item4);
 let item5 = document.createElement('li');
 const ul5 = document.querySelector('ul');
   item5.textContent = quizAns[6];
  ul.appendChild(item5);
 let item6 = document.createElement('li');
 const ul6 = document.querySelector('ul');
   item6.textContent = quizAns[7];
  ul.appendChild(item6);
 let item7 = document.createElement('li');
 const ul7 = document.querySelector('ul');
   item7.textContent = quizAns[8];
  ul.appendChild(item7);
  function shuffle() {
  
    const x = Math.floor(Math.random() * 8 + 1) ;
    //console.log(x);
    

console.log(x);

    if(x == 1){ 
      // ul.insertBefore(item7,item);
      ul.insertBefore(item5,item);
      ul.insertBefore(item4,item);
      ul.insertBefore(item3,item);
      ul.insertBefore(item2,item);
      ul.insertBefore(item0,item);
    }else if(x == 2){
      ul.insertBefore(item4,item);
      ul.insertBefore(item7,item);
      ul.insertBefore(item2,item);
      ul.insertBefore(item0,item);
      ul.insertBefore(item1,item);
      ul.insertBefore(item3,item);
      ul.insertBefore(item5,item);
      ul.insertBefore(item6,item);
  
    }else if(x == 3){
      ul.insertBefore(item4,item);
      ul.insertBefore(item3,item);  
      ul.insertBefore(item7,item);  
      ul.insertBefore(item1,item);  
      ul.insertBefore(item2,item);  
      ul.insertBefore(item0,item);  
    }else if(x == 4){
     ul.insertBefore(item3,item);
     ul.insertBefore(item5,item);  
     ul.insertBefore(item6,item);  
     ul.insertBefore(item7,item);  
     ul.insertBefore(item0,item);  
    }
    else if(x == 5){
     ul.insertBefore(item5,item);
     ul.insertBefore(item0,item);  
     ul.insertBefore(item4,item);  
     ul.insertBefore(item1,item);  
    }
    else if(x == 6){
     ul.insertBefore(item7,item);
     ul.insertBefore(item4,item);  
     ul.insertBefore(item5,item);  
    }
    else if(x == 7){
     ul.insertBefore(item3,item);
     ul.insertBefore(item2,item);  
    }
    else{
      ul.insertBefore(item3,item2);
    }

  }
  shuffle();

}
else{
  let item0 = document.createElement('li');
  const ul0 = document.querySelector('ul');
    item0.textContent = quizAns[1];
   ul.appendChild(item0);
 let item1 = document.createElement('li');
 const ul1 = document.querySelector('ul');
   item1.textContent = quizAns[2];
  ul.appendChild(item1);
 let item2 = document.createElement('li');
 const ul2 = document.querySelector('ul');
   item2.textContent = quizAns[3];
  ul.appendChild(item2);
 let item3 = document.createElement('li');
 const ul3 = document.querySelector('ul');
   item3.textContent = quizAns[4];
  ul.appendChild(item3);
 let item4 = document.createElement('li');
 const ul4 = document.querySelector('ul');
   item4.textContent = quizAns[5];
  ul.appendChild(item4);
 let item5 = document.createElement('li');
 const ul5 = document.querySelector('ul');
   item5.textContent = quizAns[6];
  ul.appendChild(item5);
 let item6 = document.createElement('li');
 const ul6 = document.querySelector('ul');
   item6.textContent = quizAns[7];
  ul.appendChild(item6);
 let item7 = document.createElement('li');
 const ul7 = document.querySelector('ul');
   item7.textContent = quizAns[8];
  ul.appendChild(item7);
  function shuffle() {
  
    const x = Math.floor(Math.random() * 8 + 1) ;
    //console.log(x);
    

console.log(x);

    if(x == 1){ 
      // ul.insertBefore(item7,item);
      ul.insertBefore(item5,item);
      ul.insertBefore(item4,item);
      ul.insertBefore(item3,item);
      ul.insertBefore(item2,item);
      ul.insertBefore(item0,item);
    }else if(x == 2){
      ul.insertBefore(item4,item);
      ul.insertBefore(item7,item);
      ul.insertBefore(item2,item);
      ul.insertBefore(item0,item);
      ul.insertBefore(item1,item);
      ul.insertBefore(item3,item);
      ul.insertBefore(item5,item);
      ul.insertBefore(item6,item);
  
    }else if(x == 3){
      ul.insertBefore(item4,item);
      ul.insertBefore(item3,item);  
      ul.insertBefore(item7,item);  
      ul.insertBefore(item1,item);  
      ul.insertBefore(item2,item);  
      ul.insertBefore(item0,item);  
    }else if(x == 4){
     ul.insertBefore(item3,item);
     ul.insertBefore(item5,item);  
     ul.insertBefore(item6,item);  
     ul.insertBefore(item7,item);  
     ul.insertBefore(item0,item);  
    }
    else if(x == 5){
     ul.insertBefore(item5,item);
     ul.insertBefore(item0,item);  
     ul.insertBefore(item4,item);  
     ul.insertBefore(item1,item);  
    }
    else if(x == 6){
     ul.insertBefore(item7,item);
     ul.insertBefore(item4,item);  
     ul.insertBefore(item5,item);  
    }
    else if(x == 7){
     ul.insertBefore(item3,item);
     ul.insertBefore(item2,item);  
    }
    else{
      ul.insertBefore(item3,item2);
    }

  }
  shuffle();

}













      function checkAnswer(){
          
        let event = function(e){
          let t = e.target;

          elements = document.getElementsByTagName("li");

  const isChecked = quizSet[a].c;
  //console.log(t);
 


  function checkAns(){


    modal3.classList.remove('hidden');
    isCorrected.textContent = `正解！`;  
  
    var OMT   = new SpeechSynthesisUtterance();
    OMT.text  = reading.textContent;
    OMT.rate  = 0.7; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
    OMT.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
    OMT.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
    speechSynthesis.speak(OMT);
  
    setTimeout(()=>{
      modal3.classList.add('hidden');
  
      choice1.removeEventListener('click',event);
  
        if(a > h){
        var Finish   = new SpeechSynthesisUtterance();
        Finish.text  = 'Great!!Good job!!';
        Finish.rate  = 0.8; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
        Finish.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
        Finish.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
        speechSynthesis.speak(Finish);
  
        modal.classList.remove('hidden');
            
          close.addEventListener('click',()=>{
            location.reload();
        })
  
      }else{
          //次の問題へ
        a++;
        Quizset();
      }
  
  
  },500);
  
  
  
  }
  
          if( t == item ){
    
            checkAns();
        
        }
       

        else{
          
            //間違った場合
  
          modal2.classList.remove('hidden');
  


          answer.textContent = ` 「${quizSet[a].r}」です。やり直し！`;
    //      answer.textContent = ` "${question.textContent} ${quizAns[3].textContent}" です。やり直し！`;
       


          var OMT   = new SpeechSynthesisUtterance();
          OMT.text  = reading.textContent;
          OMT.rate  = 1; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
          OMT.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
          OMT.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
          speechSynthesis.speak(OMT);
  
          okay.addEventListener('click',()=>{
            modal2.classList.add('hidden');
            choice1.removeEventListener('click',event);
          });
          change();  
          Quizset();
  
          }};
  
        choice1.addEventListener('click',event,false);
                }
       checkAnswer();
  
  } 
  
}













