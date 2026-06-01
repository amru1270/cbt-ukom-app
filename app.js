
// ====== GLOBAL =======
let halamanHasil = "";


// ===== START APP =====
window.addEventListener("DOMContentLoaded", function () {

  firebase.auth().onAuthStateChanged(user => {
    if (!user) {
      window.location.href = "login.html";
      return;
    }

    // ✅ ambil hasil per user
    let savedHasil = localStorage.getItem("halamanHasil_" + user.uid);

    // ✅ tampilkan hasil jika ada
    if (savedHasil) {
      halamanHasil = savedHasil;
      document.body.innerHTML = halamanHasil;
      return; // 🔥 INI KUNCI
    }

    // ✅ proteksi keluar
    window.onbeforeunload = function () {
      if (!window.submitted) {
        return "Data ujian Anda belum selesai!";
      }
    };

    // ✅ tampilkan user
    let userEl = document.getElementById("user");
    if (userEl) {
      userEl.innerText = user.email;
    }

    // ✅ hanya jalan kalau tidak ada hasil
    displayQuestion();
    startTimer();

  });

});


// ===== INISIALISASI =====
let savedQuestions = JSON.parse(localStorage.getItem("soalUjian"));

let questionsUjian;

if (savedQuestions && savedQuestions.length === 180) {
  questionsUjian = savedQuestions;
} else {
  questionsUjian = getRandomQuestions(questions, 180);

  // ✅ simpan soal
  localStorage.setItem("soalUjian", JSON.stringify(questionsUjian));
}
let currentQuestion = 0;
let savedIndex = localStorage.getItem("currentQuestion");

if (savedIndex !== null) {
  currentQuestion = parseInt(savedIndex);
}

let userAnswers = new Array(questionsUjian.length).fill(null);

// ✅ LOAD DARI localStorage (GLOBAL)
let saved = JSON.parse(localStorage.getItem("jawaban"));
if (saved && saved.length === questionsUjian.length) {
  userAnswers = saved;
}

let flagged = new Array(questionsUjian.length).fill(false);

let timeLeft = 10800; // 180 menit
let timer;

// ================= TIMER =================
function startTimer() {
  timer = setInterval(() => {
    let timerEl = document.getElementById("timer");

    // ✅ jangan hentikan seluruh function
    if (!timerEl) {
      return; // cukup skip
    }

    let min = Math.floor(timeLeft / 60);
    let sec = timeLeft % 60;

    timerEl.innerText =
      `Waktu: ${min}:${sec < 10 ? "0" : ""}${sec}`;

    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timer);
      submitQuiz();
    }

  }, 1000);
}

// ================= SIDEBAR =================
function renderSidebar() {
  const nav = document.getElementById("nav");

  if (!nav) {
    console.error("nav tidak ditemukan!");
    return;
  }

  nav.innerHTML = "";

  questionsUjian.forEach((q, i) => {
    let btn = document.createElement("button");
    btn.innerText = i + 1;

    if (flagged[i]) {
      btn.className = "flagged";
    } else if (userAnswers[i]) {
      btn.className = "answered";
    } else {
      btn.className = "unanswered";
    }

    if (i === currentQuestion) {
      btn.classList.add("active");
    }

    btn.onclick = () => {
      saveAnswer();
      currentQuestion = i;

      // ✅ simpan posisi
      localStorage.setItem("currentQuestion", currentQuestion);

      displayQuestion();
    };

    nav.appendChild(btn); // ✅ pindah ke sini
  });
}

// ================= DISPLAY =================

function displayQuestion() {
  renderSidebar();
  renderNav();
  updateProgress();
  scrollToActive();

  let q = questionsUjian[currentQuestion];

  let quizDiv = document.getElementById("quiz");

  if (!quizDiv) {
    console.error("Element quiz tidak ditemukan!");
    return;
  }

  let pilihan = shuffleOptions(q.pilihan);

  let html = `
    <h3>Soal ${currentQuestion + 1} / ${questionsUjian.length}</h3>
    <p>${q.soal}</p>
  `;

  pilihan.forEach(p => {
    let checked = userAnswers[currentQuestion] === p ? "checked" : "";

    html += `
      <label>
        <input type="radio" name="answer" value="${p}" ${checked}>
        ${p}
      </label><br>
    `;
  });

  quizDiv.innerHTML = html;
}

// ================= SAVE =================
function saveAnswer() {
  let selected = document.querySelector('input[name="answer"]:checked');
  if (selected) userAnswers[currentQuestion] = selected.value;
  localStorage.setItem("jawaban", JSON.stringify(userAnswers));
  updateProgress();
}

// ================= NAV =================
function nextQuestion() {
  saveAnswer();
  if (currentQuestion < questionsUjian.length - 1) {
    currentQuestion++;

    // ✅ simpan posisi
    localStorage.setItem("currentQuestion", currentQuestion);

    displayQuestion();
  }
}

function prevQuestion() {
  saveAnswer();
  if (currentQuestion > 0) {
    currentQuestion--;

    // ✅ simpan posisi
    localStorage.setItem("currentQuestion", currentQuestion);

    displayQuestion();
  }
}

// ================= FLAG =================
function toggleFlag() {
  flagged[currentQuestion] = !flagged[currentQuestion];
  renderSidebar();
}

//================== RANDOM SOAL =================

function getRandomQuestions(data, jumlah) {
  let shuffled = [...data].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, jumlah);
}

// ================ RANDOM JAWABAN ============


function shuffleOptions(options) {
  return [...options].sort(() => 0.5 - Math.random());
}

// ============== RENDER NAV =================
function renderNav() {
  let nav = document.getElementById("nav");

  if (!nav) {
    return; // ✅ jangan error
  }

  nav.innerHTML = "";

  questionsUjian.forEach((q, i) => {
    let btn = document.createElement("button");
    btn.innerText = i + 1;

    if (flagged[i]) {
      btn.style.background = "orange";
    } else if (userAnswers[i]) {
      btn.style.background = "green";
      btn.style.color = "white";
    } else {
      btn.style.background = "lightgray";
    }

    if (i === currentQuestion) {
      btn.style.border = "3px solid blue";
    }

    btn.onclick = () => {
      currentQuestion = i;
      displayQuestion();
    };

    nav.appendChild(btn);
  });
}


// ================= SUBMIT =================
function submitQuiz() {

  // ✅ KONFIRMASI

  let belum = userAnswers.filter(a => a === null).length;

  let pesan = "Apakah Anda yakin ingin mengakhiri ujian?";

  if (belum > 0) {
    pesan += `\nMasih ada ${belum} soal yang belum dijawab!`;
  }

  let yakin = confirm("Apakah Anda yakin ingin mengakhiri ujian?\nPastikan semua jawaban sudah terisi.");

  if (!yakin) {
    return; // ✅ batal submit
  }

  clearInterval(timer);

  window.submitted = true;
  window.onbeforeunload = null;
  localStorage.setItem("jawabanReview", JSON.stringify(userAnswers));
  localStorage.setItem("soalReview",JSON.stringify(questionsUjian));

  let score = 0;

  // ✅ hitung skor
  questionsUjian.forEach((q, i) => {
    if (userAnswers[i] === q.jawaban) score++;
  });

  let persen = Math.round((score / questionsUjian.length) * 100);

  let keterangan = "";

  if (persen < 55) {
    keterangan = "❌ TERUS BERLATIH";
  } else if (persen < 70) {
    keterangan = "💪 SEMANGAT";
  } else if (persen < 80) {
    keterangan = "👍 BAGUS";
  } else if (persen < 90) {
    keterangan = "🔥 SUPER";
  } else {
    keterangan = "🏆 LUAR BIASA";
  }

  let warna = "black";

  if (persen < 55) warna = "red";
  else if (persen < 70) warna = "orange";
  else if (persen < 80) warna = "blue";
  else if (persen < 90) warna = "purple";
  else warna = "green";

  let user = firebase.auth().currentUser;
  

  firebase.database().ref("hasilUjian").push({
    email: user.email,
    skor: score,
    total: questionsUjian.length,
    waktu: new Date().toLocaleString()
  });
  // ✅ hapus data agar tidak reuse di ujian berikutnya
  localStorage.removeItem("soalUjian");
  //localStorage.removeItem("jawaban");
  localStorage.removeItem("currentQuestion");
  halamanHasil = `
  <div class="container">
    <div class="main">
      <div id="quiz">
        <h1>Hasil Ujian</h1>
        <p>Email: ${user.email}</p>
        <h2>Skor: ${score}/${questionsUjian.length} (${persen}%)</h2>

        <button onclick="reviewSoal()">Lihat Pembahasan</button>
        <button onclick="lihatDashboard()">Dashboard</button>
        <button onclick="logout()">Logout</button>
      </div>
    </div>
  </div>
`;

document.body.innerHTML = halamanHasil;

// ✅ simpan hanya 1x
if (user) {
  localStorage.setItem("halamanHasil_" + user.uid, halamanHasil);
}
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 50);

  // ✅ SIMPAN KE LOCALSTORAGE
  localStorage.setItem("halamanHasil", halamanHasil);
}
  // =========== FUNGSI REVIEW SOAL =========================
  function reviewSoal() {
    let salahList = userAnswers.filter((ans, i) => {
  return ans !== questionsUjian[i].jawaban;
});

    let html = `
    <h2>Review Soal Salah</h2>
    <p>Total soal salah: ${salahList.length}</p>
  `;
  // ✅ LOAD JAWABAN
  let savedJawaban = JSON.parse(localStorage.getItem("jawabanReview"));
  if (savedJawaban) {
    userAnswers = savedJawaban;
  }
  // ✅ LOAD SOAL
  let savedSoal = JSON.parse(localStorage.getItem("soalReview"));
  

if (savedSoal) {
  questionsUjian = savedSoal;
}

    
  questionsUjian.forEach((q, i) => {
    let user = userAnswers[i];
    let benar = q.jawaban;

  // ✅ SKIP kalau benar
    if (user === benar) return;


      html += `
      <div class="review-box">
        <h4>Soal ${i + 1}</h4>
        <p>${q.soal}</p>
    `;

      // ✅ tampilkan semua pilihan
      q.pilihan.forEach((p) => {
        let style = "";

        // ✅ jika jawaban benar
        if (p === benar) {
          style = "background: green; color: white;";
        }

        // ✅ jika jawaban user salah
        if (p === user && p !== benar) {
          style = "background: red; color: white;";
        }

        html += `
        <div class="opsi" style="${style}">
          ${p}
        </div>
      `;
      });

      html += `
        <p><b>Jawaban Anda:</b> ${user ? user : "-"}</p>
        <p><b>Jawaban Benar:</b> ${benar}</p>

        <p class="pembahasan">
          <b>Pembahasan:</b><br>
          ${q.pembahasan}
        </p>
      </div>
    `;
    });

    html += `<button onclick="kembaliKeHasil()">Kembali ke Hasil</button>`;

    document.body.innerHTML = html;
  }

  // ====================== FUNGSI DASHBOARD ======================

  function lihatDashboard() {
    firebase.database().ref("hasilUjian").on("value", snapshot => {

      let data = snapshot.val();

      if (!data) {
        document.body.innerHTML = "<h2>Belum ada data</h2>";
        return;
      }

      let arr = Object.values(data);

      // ✅ urutkan ranking
      arr.sort((a, b) => {
        if (b.skor !== a.skor) return b.skor - a.skor;
        return new Date(a.waktu) - new Date(b.waktu);
      });


      let html = `
      <h2>🏆 Dashboard Hasil Ujian</h2>
      <p>Ranking Terbaik Peserta</p>
      <table border="1" cellpadding="10">
        <tr>
          <th>Rank</th>
          <th>Email</th>
          <th>Skor</th>
          <th>Benar</th>
          <th>Salah</th>
          <th>Waktu</th>
        </tr>
    `;


      let currentUser = firebase.auth().currentUser;

      arr.forEach((d, i) => {
        let salah = d.total - d.skor;

        let kelas = "";
        let medal = "";

        // ✅ TOP 3
        if (i === 0) {
          kelas = "rank1";
          medal = "🥇";
        } else if (i === 1) {
          kelas = "rank2";
          medal = "🥈";
        } else if (i === 2) {
          kelas = "rank3";
          medal = "🥉";
        }

        // ✅ HIGHLIGHT USER SENDIRI
        if (d.email === currentUser.email) {
          kelas += " myRank";
        }

        html += `
    <tr class="${kelas}">
      <td>${medal} ${i + 1}</td>
      <td>${d.email}</td>
      <td>${d.skor}/${d.total}</td>
      <td>${d.skor}</td>
      <td>${salah}</td>
      <td>${d.waktu}</td>
    </tr>
  `;
});

      html += `
      </table>
      <br>
      <button onclick="kembaliKeHasil()">Kembali ke Hasil</button>
      `;
    
    let app = document.querySelector(".main");

if (app) {
  app.innerHTML = html;
}
  });
}


// ========== FUNGSI PROGRESS =============

function updateProgress() {
  let answered = userAnswers.filter(a => a !== null).length;

  let percent = Math.round(
    (answered / questionsUjian.length) * 100
  );

  let bar = document.getElementById("progressBar");
  let text = document.getElementById("progressText");

  if (bar) {
    bar.style.width = percent + "%";

    if (percent < 50) {
      bar.style.background = "red";
    } else if (percent < 80) {
      bar.style.background = "orange";
    } else {
      bar.style.background = "green";
    }
  }

  if (text) {
    text.innerText = `Progress: ${ percent }% (${ answered }/${questionsUjian.length})`;
  }
}

// ============ PERCANTIK TAMPILAN ===================

function scrollToActive() {
  let activeBtn = document.querySelector("#nav .active");

  if (activeBtn) {
    let rect = activeBtn.getBoundingClientRect();

    if (rect.top < 0 || rect.bottom > window.innerHeight) {
      activeBtn.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      });
    }
  }
}


// ============= FUNGSI KEMBALI KE HASIL ===================



function kembaliKeHasil() {
  let savedHasil = localStorage.getItem("halamanHasil_" + firebase.auth().currentUser.uid);

  if (savedHasil) {
    halamanHasil = savedHasil;
    document.body.innerHTML = halamanHasil;
  }
}


//================= LOG OUT ================

function logout() {
  let user = firebase.auth().currentUser;

  if (user) {
    localStorage.removeItem("halamanHasil_" + user.uid);
  }

  firebase.auth().signOut().then(() => {
    window.location.href = "login.html";
  });
}