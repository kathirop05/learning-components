import { Component } from '@angular/core';

@Component({
  selector: 'app-right',
  imports: [],
  templateUrl: './right.component.html',
  styleUrl: './right.component.css',
})
export class RightComponent {}
function togglePassword(): void {
  const passwordField = document.getElementById(
    'loginPassword'
  ) as HTMLInputElement;
  const button = document.getElementById('showButton') as HTMLButtonElement;

  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    button.textContent = 'Hide';
  } else {
    passwordField.type = 'password';
    button.textContent = 'Show';
  }
}

function toggleButtonState(): void {
  const passwordField = document.getElementById(
    'loginPassword'
  ) as HTMLInputElement;
  const button = document.getElementById('showButton') as HTMLButtonElement;

  if (passwordField.value.length > 0) {
    button.style.display = 'inline-block';
  } else {
    button.style.display = 'none';
  }
}

interface User {
  name: string;
  password: string;
}

function login(): void {
  const enteredName = (document.getElementById('loginName') as HTMLInputElement)
    .value;
  const enteredPassword = (
    document.getElementById('loginPassword') as HTMLInputElement
  ).value;

  const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');

  const user = users.find(
    (user) => user.name === enteredName && user.password === enteredPassword
  );

  if (user) {
    alert('Login successful!');
    window.location.replace('main.html');
  } else {
    alert('Invalid username or password.');
  }
}
