export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();

  }

  load() {
    this.entries = [ 
      {
        login: "maykbrito",
        name: "Mayk Brito",
        public_repos: "76",
        followers: 120000      
      },
      {
        login: "VitorC0sta",
        name: "Vitor Costa",
        public_repos: " 76",
        followers: 120000
      }
     ]

  }

}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root);
    this.update();

    this.entries.forEach(user => {
      const row = this.createRow();
      console.log(row);
    });
  }

  update() {
    this.removeAllTableRows();
  }

  createRow()  {
    const tr = document.createElement('tr');
    
    tr.innerHTML = `
      <td class="users">
      <img src="https://github.com/maykbrito.png" alt="" class="user-image">
      <a href="" target="_blank">
        <p>Mayk Brito</p>
        <span>/maykbrito</span>
      </a>
    </td>
    <td class="repositories">123</td>
    <td class="followers">1234</td>
    <td class="remove"><button class="ph ph-x"></button></td>
    `;

    return tr;
  }

  removeAllTableRows() {
    const tbody = this.root.querySelector("table tbody");
    
    tbody.querySelectorAll('tr')
      .forEach(tr => {
        tr.remove();
      });
  }
 }