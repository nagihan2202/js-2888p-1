let data;

async function fetchAndDisplayUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    data = await response.json();
    const userCardsContainer = document.getElementById("user-cards");
    data.forEach((user) => {
      const cards = document.createElement("div");
      className = "col-md-4";
      const randomImage = `https://picsum.photos/200/200?random=${user.id}`;
      cards.innerHTML = `
              <div class="card mb-4 box-shadow bg-light">
        <div class="card-body">
        <div class="card-section">
        <img src="${randomImage}" class="card-img-top pb-5" alt="${user.name}">
        <h4><i class="fas fa-user"></i>Kişisel Bilgiler</h4>
        <p>ID: ${user.id}</p>
        <p>İsim: ${user.name}</p>
        <p>Kullanıcı Adı: ${user.username}</p>
      </div>

      <div class="card-section">
        <h4><i class="fas fa-location-dot"></i>Adres Bilgileri</h4>
        <p>Sokak: ${user.address.street}</p>
        <p>Şehir: ${user.address.city}</p>
        <p>Posta Kodu: ${user.address.zipcode}</p>
      </div>

      <div class="card-section">
        <h4><i class="fas fa-envelope"></i>İletişim Bilgileri</h4>
        <p>Telefon: ${user.phone}</p>
        <p>Email: ${user.email}</p>
        <p>Website: ${user.website}</p>
      </div>

      <div class="card-section">
        <h4><i class="fas fa-building"></i>Şirket Bilgileri</h4>
        <p>Şirket: ${user.company.name}</p>
        <p>Sektör: ${user.company.bs}</p>
        <p>Ünvan: ${user.company.catchPhrase}</p>
      </div>

      
        `;
        userCardsContainer.appendChild(cards);
    });
  } catch (error) {
    console.log("Veri çekme hatası:", error);
  }
}
document.addEventListener("DOMContentLoaded", fetchAndDisplayUsers);
