# Grievance-Backend


This repository contains the backend code for the Grievance Portal system. The system allows users to submit grievances, track their status, and receive notifications. It is designed to be scalable, secure, and easy to integrate with a frontend application.

## Features

- **User Authentication:** Secure user authentication and authorization.
- **Grievance Submission:** Users can submit grievances along with relevant details.
- **Grievance Tracking:** Users can track the status of their grievances.
- **Email Notifications:** Automatic email notifications are sent when a grievance is submitted, updated, or resolved.
- **Admin Panel:** Admin users can manage grievances, assign them to relevant departments, and update their status.

## Technologies Used

- **Programming Language:** Node.js
- **Framework:** Express
- **Database:** MongoDB
- **Authentication:** JWT
- **Email Service:** [MailGun](https://app.mailgun.com/)

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Guggilam-sai-prabhat/Grievance-Backend.git
2. Navigate to the project directory:
   ```bash
   cd Grievance-Backend
3. Install dependencies:
    ```bash
    npm i
4. Set up environment variables:
   - MAILGUN_API_KEY
   - MAILGUN_DOMAIN
5. Replace the MONGO URL with yours
6. Start the development server:
   ```bash
   npm start
## Usage 
1. Accessing the API:
   - The API can be accessed at `http://localhost:8000/api/`
2. Admin Panel:
   - Admin users can log in to the admin panel with this
     ```bash
     admin@gmail.com
     admin
