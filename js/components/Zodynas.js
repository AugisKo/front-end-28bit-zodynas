class Zodynas {
  constructor(IDselector) {
    this.IDselector = IDselector;
    this.DOM = null;
    this.addFormDOM = null;
    this.submitButtonDOM = null;
    
    this.init();
  }

  init() {
    if (!this.isValidSelector()) {
      return false;
    }

    this.DOM = document.getElementById(this.IDselector);
    if (!this.DOM) {
      console.error('ERROR: nerasta vieta, pagal duota selector');
      return false;
    }

    this.render();
  }

  isValidSelector() {
    if (typeof this.IDselector !== 'string' || this.IDselector === '') {
      console.error('ERROR: nevalidus selector');
      return false;
    }
    return true;
  }

 addEvents() {
   this.submitButtonDOM = document.
    this.submitButtonDOM.addEventListener('click', (event) => {
      event.preventDefault();
      let allGood = true;

      for (let element of this.allInputsDOM) {
        const validationRule = element.dataset.validation;
      }
    }
  }

  generateAddForm() {
    return `<form id="add_zodis" class="ivesties_forma">
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

  generateUpdateForm() {
    return `<form id="update_zodis" class="hide" >
        <div class="ang">
            <lable for="eng">Anglų</lable>
            <input type="text" id="eng" name="text">
        </div>
        <div class="liet">
            <lable for="liet">Lietuvių</lable>
            <input type="text" id="liet" name="text">
        </div>
        <div class="btn">
            <button class="fa fa-pencil-square-o" name="save" type="submit" value="Update"></button>
            <button class="fa fa-eraser" name="reset" type="submit" value="Reset"></button>
        </div>
    </form>`;
  }

  generateAddTable() {
    return `<div class="isvestis">
        <table>
            <tbody id="zodyno_body">
            </tbody>
        </table>
    </div>`;
  }

  generateAddTableRow() {
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
    let HTML = `<h1 id="zodynas">Tipo - Žodynas</h1>`;
    this.DOM.insertAdjacentHTML('afterbegin', HTML);
    HTML += this.generateAddForm();
    HTML += this.generateAddTable();
    this.DOM.innerHTML = HTML;

    /*  this.DOM.insertAdjacentHTML('afterend', HTML);
    this.addFormDOM = document.getElementById('add_zodis');
    var newRow = document.getElementById('zodyno_body').insertRow();
    newRow.innerHTML = this.tableRow;
    HTML += this.newRow;*/
  }

  render_Row() {


  }

}

export { Zodynas };
