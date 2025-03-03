import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})

export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  taskName?: string;
  day?: string;
  reminder: boolean = false;


  onSubmit() {
    if (!this.taskName) {
      alert('Please add a task');
      return;
    }

    const newTask: Task = {
      text: this.taskName || '',
      day: this.day || '',
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);

    this.taskName = '';
    this.day = '';
    this.reminder = false;
  }
}
