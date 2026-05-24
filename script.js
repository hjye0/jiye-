const recommendBtn = document.getElementById('recommendBtn');
const hoverText = document.getElementById('hoverText');
const foodResult = document.getElementById('foodResult');

const hoverMentList = [
  '오늘은 따뜻한 국밥 어때요?',
  '매콤한 음식이 끌리지 않나요?',
  '든든하게 먹고 오후 버텨봅시다.',
  '오늘 점심은 고민 없이 가보죠.',
  '바삭한 돈까스 생각나지 않아요?'
];

const foods = [
  '김치찌개',
  '돈까스',
  '마라탕',
  '햄버거',
  '초밥',
  '국밥',
  '쌀국수',
  '제육볶음',
  '냉면',
  '파스타',
  '치킨',
  '떡볶이'
];

recommendBtn.addEventListener('mouseenter', () => {

  const randomMent = hoverMentList[
    Math.floor(Math.random() * hoverMentList.length)
  ];

  hoverText.textContent = randomMent;
});

recommendBtn.addEventListener('click', () => {

  const randomFood = foods[
    Math.floor(Math.random() * foods.length)
  ];

  foodResult.innerHTML = '';

  randomFood.split('').forEach((char, index) => {

    const span = document.createElement('span');

    span.classList.add('food-word');
    span.textContent = char;

    span.style.animationDelay = `${index * 0.08}s`;

    foodResult.appendChild(span);
  });

  recommendBtn.animate(
    [
      { transform: 'scale(1)' },
      { transform: 'scale(0.92)' },
});