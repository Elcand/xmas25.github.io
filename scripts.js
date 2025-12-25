const amplop = document.getElementById("amplop");
const undangan = document.getElementById("undangan");
const isiEl = document.getElementById("isi");
const pengirimEl = document.getElementById("pengirim");

const pengirim = "Keluarga Raharja";
const isiSurat = `
Dalam sukacita kelahiran Sang Terang,
kami mengundangmu
untuk berhenti sejenak,

menarik napas,
dan mengingat
bahwa kasih
tidak pernah gagal
menemukan jalan pulang.
`;

let index = 0;

function ketikTeks() {
  if (index < isiSurat.length) {
    isiEl.innerHTML += isiSurat.charAt(index);
    index++;
    setTimeout(ketikTeks, 40);
  }
}

amplop.addEventListener("click", () => {
  amplop.style.display = "none";
  undangan.classList.remove("hidden");
  pengirimEl.textContent = pengirim;
  ketikTeks();
});
