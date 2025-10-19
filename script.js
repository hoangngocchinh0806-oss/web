// 🎵 Phát nhạc sau lần tương tác đầu tiên
const music = document.getElementById('music');
document.addEventListener('click', playMusicOnce);
document.addEventListener('scroll', playMusicOnce);
document.addEventListener('touchstart', playMusicOnce);

function playMusicOnce() {
  music.play();
  document.removeEventListener('click', playMusicOnce);
  document.removeEventListener('scroll', playMusicOnce);
  document.removeEventListener('touchstart', playMusicOnce);
}

// 💬 Danh sách câu hỏi cho Huyền
const questions = [
  {
    text: "Huyền có đang mỉm cười hôm nay không? 😊",
    yes: "Tuyệt quá! Nụ cười của Huyền làm ngày hôm nay tươi sáng hơn 💖",
    no: "Đừng buồn nhé! Hãy cười lên, Huyền xinh nhất khi mỉm cười 🌸"
  },
  {
    text: "Huyền có cảm thấy mình thật đặc biệt không? 🌷",
    yes: "Chính xác! Huyền luôn đặc biệt theo cách riêng của mình ✨",
    no: "Huyền đặc biệt hơn Huyền nghĩ nhiều lắm đó 💕"
  },
  {
    text: "Huyền có muốn nhận thêm lời chúc từ mình không? 🎁",
    yes: "Chúc Huyền mãi hạnh phúc, rạng rỡ và được yêu thương thật nhiều! 💐",
    no: "Không sao, mình vẫn chúc Huyền một ngày 20/10 thật tuyệt vời nhé 💞"
  }
];

let current = 0;
const questionText = document.getElementById('question-text');
const responseEl = document.getElementById('response');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const nextBtn = document.getElementById('nextBtn');

function showQuestion() {
  questionText.textContent = questions[current].text;
  responseEl.textContent = '';
  yesBtn.style.display = 'inline-block';
  noBtn.style.display = 'inline-block';
  nextBtn.style.display = 'none';
}

yesBtn.addEventListener('click', () => {
  responseEl.textContent = questions[current].yes;
  yesBtn.style.display = 'none';
  noBtn.style.display = 'none';
  nextBtn.style.display = 'inline-block';
});

noBtn.addEventListener('click', () => {
  responseEl.textContent = questions[current].no;
  yesBtn.style.display = 'none';
  noBtn.style.display = 'none';
  nextBtn.style.display = 'inline-block';
});

nextBtn.addEventListener('click', () => {
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    questionText.textContent = "💖 Cảm ơn Huyền đã trả lời 💖";
    responseEl.textContent = "Chúc Huyền một ngày 20/10 thật rực rỡ, tràn ngập niềm vui và yêu thương! 🌺";
    nextBtn.style.display = 'none';
  }
});

showQuestion();

// 🎇 Hiệu ứng pháo hoa lung linh
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];

class Firework {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height;
    this.size = Math.random() * 3 + 2;
    this.color = `hsl(${Math.random() * 360}, 100%, 60%)`;
    this.speedY = Math.random() * 3 + 4;
    this.particles = [];
  }
  update() {
    this.y -= this.speedY;
    if (this.speedY < 0.5) this.explode();
    else this.speedY -= 0.05;
  }
  explode() {
    for (let i = 0; i < 30; i++) {
      this.particles.push(new Particle(this.x, this.y, this.color));
    }
    fireworks.splice(fireworks.indexOf(this), 1);
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 2;
    this.color = color;
    this.speedX = Math.random() * 6 - 3;
    this.speedY = Math.random() * 6 - 3;
    this.life = 100;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.life--;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

function animate() {
  ctx.fillStyle = "rgba(0,0,0,0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (Math.random() < 0.05) fireworks.push(new Firework());

  fireworks.forEach(fw => {
    fw.update();
    fw.draw();
    fw.particles.forEach(p => {
      p.update();
      p.draw();
    });
  });

  requestAnimationFrame(animate);
}
animate();

// 🔁 Reload 1 lần để đảm bảo nhạc chạy
window.addEventListener("load", () => {
  if (!sessionStorage.getItem("reloaded")) {
    sessionStorage.setItem("reloaded", "true");
    setTimeout(() => {
      location.reload();
    }, 500); // chờ 0.5 giây rồi reload
  }
});
