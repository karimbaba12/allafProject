import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  // formData = {
  //   name: '',
  //   email: '',
  //   phone: '',
  //   message: '',
  // };

  // constructor(private emailService: EmailService) {}

  // sendMessage() {
  //   if (this.formData.name && this.formData.email && this.formData.message) {
  //     this.emailService.sendEmail(this.formData).then(
  //       (response) => {
  //         console.log(
  //           'Email sent successfully!',
  //           response.status,
  //           response.text
  //         );
  //         alert('Your message has been sent!');
  //       },
  //       (error) => {
  //         console.error('Failed to send email.', error);
  //         alert('Failed to send your message. Please try again later.');
  //       }
  //     );
  //   } else {
  //     alert('Please fill in all required fields.');
  //   }
  // }
}
