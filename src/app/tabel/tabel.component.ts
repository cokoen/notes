import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tabel.component.html',
  styleUrl: './tabel.component.css',
})
export class TabelComponent {
  input = '';
  data = [
    { id: '0', name: '' },
    { id: '1', name: 'Das ist eine Notiz' },
    { id: '2', name: 'Das ist eine zweite Notiz' },
  ];
  id = 0;
  isInEdit = false;

  ClickEvent() {
    this.id = Number(this.data?.at(-1)?.id) + 1;

    if (this.input.length > 0) {
      this.data.push({ id: String(this.id), name: this.input });
      this.input = '';
      console.log(this.data?.at(-1)?.id);
    } else {
      alert('Bitte gebe etwas ein!');
    }
  }

  DeleteEvent(nodeid: string) {
    this.data = this.data.filter((item) => item.id !== nodeid);
  }

  index = 0;
  editId = '0';

  EditButtonEvent(nodeid: string) {
    this.editId = nodeid;
    this.index = this.data.findIndex((item) => item.id === nodeid);
    this.input = this.data.at(this.index)!.name;
    this.isInEdit = true;
  }

  EditSuccesEvent() {
    this.index = this.data.findIndex((item) => item.id === this.editId);
    this.data.at(this.index)!.name = this.input;
    this.input = '';
    this.isInEdit = false;
  }
}
