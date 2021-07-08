class Zodynas {
  constructor(IDselector) {
    this.IDselector = IDselector;
    this.DOM = null;

    this.addFormDOM = null;
    this.init();
  }

  init() {
    his.DOM = document.getElementById(this.IDselector);
    this.render();
  }

  isValidSelector() {
    if (typeof this.IDselector !== 'string' || this.IDselector === '') {
      console.error('ERROR: nevalidus selector');
      return false;
    }
    return true;
  }

  generateAddForm() {
    return `<h1 id="zodynas">Tipo - Žodynas</h1>
    <form id="add_zodis" class="ivesties_forma">
        <div class="ang">
            <lable for="eng">Anglų</lable>
            <input type="text" id="eng" name="text">
        </div>
        <div class="liet">
            <lable for="liet">Lietuvių</lable>
            <input type="text" id="liet" name="text">
        </div>
        <div class="btn">
            <button class="fa fa-floppy-o" name="save" type="submit" value="Save"></button>
            <button class="fa fa-eraser" name="reset" type="submit" value="Reset"></button>
        </div>
    </form>`;
  }

  generateTable() {
    return `<div class="isvestis">
        <table>
            <tbody id="zodyno_body">
            </tbody>
        </table>
    </div>`;
  }

  tableRow() {
    return ` <tr>
                <td>${angliskasZodis}</td>
                <td>${LietuviskasZodis}</td>
                <td class="btn">
                    <button name="edit" class="fa fa-pencil"></button>
                    <button name="delete" class="fa fa-trash"></button>
                </td>
            </tr>`;
  }

  render() {
    let HTML = '';
    HTML += this.generateAddForm();
    this.DOM.insertAdjacentHTML('afterend', HTML);
    this.addFormDOM = document.getElementById('add_zodis');
    var newRow = document.getElementById('zodyno_body').insertRow();
    newRow.innerHTML = this.tableRow;
    HTML += this.newRow;
  }
}

export { Zodynas };
